-- Notícias públicas + gestão via /app
-- Execute: npm run db:apply

CREATE TABLE IF NOT EXISTS public.noticias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  author_id UUID REFERENCES public.app_users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS noticias_published_at_idx ON public.noticias (published_at DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS noticias_slug_idx ON public.noticias (slug);

ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leitura pública de notícias publicadas"
ON public.noticias
FOR SELECT
TO anon, authenticated
USING (published = true);

CREATE OR REPLACE FUNCTION public.set_noticias_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS noticias_updated_at ON public.noticias;
CREATE TRIGGER noticias_updated_at
BEFORE UPDATE ON public.noticias
FOR EACH ROW
EXECUTE FUNCTION public.set_noticias_updated_at();

CREATE OR REPLACE FUNCTION public.make_noticia_slug(p_title TEXT)
RETURNS TEXT
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  v_base TEXT;
  v_slug TEXT;
  v_counter INT := 0;
BEGIN
  v_base := lower(trim(p_title));
  v_base := regexp_replace(v_base, '[áàâãä]', 'a', 'g');
  v_base := regexp_replace(v_base, '[éèêë]', 'e', 'g');
  v_base := regexp_replace(v_base, '[íìîï]', 'i', 'g');
  v_base := regexp_replace(v_base, '[óòôõö]', 'o', 'g');
  v_base := regexp_replace(v_base, '[úùûü]', 'u', 'g');
  v_base := regexp_replace(v_base, '[ç]', 'c', 'g');
  v_base := regexp_replace(v_base, '[^a-z0-9]+', '-', 'g');
  v_base := trim(both '-' from v_base);

  IF v_base = '' THEN
    v_base := 'noticia';
  END IF;

  v_slug := v_base;

  WHILE EXISTS (SELECT 1 FROM public.noticias WHERE slug = v_slug) LOOP
    v_counter := v_counter + 1;
    v_slug := v_base || '-' || v_counter;
  END LOOP;

  RETURN v_slug;
END;
$$;

CREATE OR REPLACE FUNCTION public.verify_app_user_credentials(
  p_username TEXT,
  p_password TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  v_user public.app_users%ROWTYPE;
BEGIN
  SELECT *
  INTO v_user
  FROM public.app_users
  WHERE username = lower(trim(p_username));

  IF v_user.id IS NULL THEN
    RAISE EXCEPTION 'invalid_credentials';
  END IF;

  IF v_user.password_hash <> extensions.crypt(p_password, v_user.password_hash) THEN
    RAISE EXCEPTION 'invalid_credentials';
  END IF;

  RETURN v_user.id;
END;
$$;

REVOKE ALL ON FUNCTION public.verify_app_user_credentials(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.verify_app_user_credentials(TEXT, TEXT) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.list_noticias_admin(
  p_username TEXT,
  p_password TEXT
)
RETURNS SETOF public.noticias
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM public.verify_app_user_credentials(p_username, p_password);

  RETURN QUERY
  SELECT *
  FROM public.noticias
  ORDER BY created_at DESC;
END;
$$;

REVOKE ALL ON FUNCTION public.list_noticias_admin(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.list_noticias_admin(TEXT, TEXT) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.create_noticia(
  p_username TEXT,
  p_password TEXT,
  p_title TEXT,
  p_content TEXT,
  p_image_url TEXT DEFAULT NULL,
  p_published BOOLEAN DEFAULT false
)
RETURNS public.noticias
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID;
  v_row public.noticias%ROWTYPE;
  v_excerpt TEXT;
BEGIN
  v_user_id := public.verify_app_user_credentials(p_username, p_password);

  IF trim(p_title) = '' OR trim(p_content) = '' THEN
    RAISE EXCEPTION 'invalid_payload';
  END IF;

  v_excerpt := left(regexp_replace(trim(p_content), '\s+', ' ', 'g'), 180);

  INSERT INTO public.noticias (
    title,
    slug,
    content,
    excerpt,
    image_url,
    published,
    author_id,
    published_at
  )
  VALUES (
    trim(p_title),
    public.make_noticia_slug(trim(p_title)),
    trim(p_content),
    v_excerpt,
    NULLIF(trim(p_image_url), ''),
    COALESCE(p_published, false),
    v_user_id,
    CASE WHEN COALESCE(p_published, false) THEN NOW() ELSE NULL END
  )
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

REVOKE ALL ON FUNCTION public.create_noticia(TEXT, TEXT, TEXT, TEXT, TEXT, BOOLEAN) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_noticia(TEXT, TEXT, TEXT, TEXT, TEXT, BOOLEAN) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.update_noticia(
  p_username TEXT,
  p_password TEXT,
  p_id UUID,
  p_title TEXT,
  p_content TEXT,
  p_image_url TEXT DEFAULT NULL,
  p_published BOOLEAN DEFAULT false
)
RETURNS public.noticias
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_row public.noticias%ROWTYPE;
  v_excerpt TEXT;
BEGIN
  PERFORM public.verify_app_user_credentials(p_username, p_password);

  IF trim(p_title) = '' OR trim(p_content) = '' THEN
    RAISE EXCEPTION 'invalid_payload';
  END IF;

  v_excerpt := left(regexp_replace(trim(p_content), '\s+', ' ', 'g'), 180);

  UPDATE public.noticias
  SET
    title = trim(p_title),
    content = trim(p_content),
    excerpt = v_excerpt,
    image_url = NULLIF(trim(p_image_url), ''),
    published = COALESCE(p_published, false),
    published_at = CASE
      WHEN COALESCE(p_published, false) AND published_at IS NULL THEN NOW()
      WHEN NOT COALESCE(p_published, false) THEN NULL
      ELSE published_at
    END
  WHERE id = p_id
  RETURNING * INTO v_row;

  IF v_row.id IS NULL THEN
    RAISE EXCEPTION 'not_found';
  END IF;

  RETURN v_row;
END;
$$;

REVOKE ALL ON FUNCTION public.update_noticia(TEXT, TEXT, UUID, TEXT, TEXT, TEXT, BOOLEAN) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.update_noticia(TEXT, TEXT, UUID, TEXT, TEXT, TEXT, BOOLEAN) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.delete_noticia(
  p_username TEXT,
  p_password TEXT,
  p_id UUID
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM public.verify_app_user_credentials(p_username, p_password);

  DELETE FROM public.noticias WHERE id = p_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'not_found';
  END IF;

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION public.delete_noticia(TEXT, TEXT, UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.delete_noticia(TEXT, TEXT, UUID) TO anon, authenticated;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'noticias',
  'noticias',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE
SET public = EXCLUDED.public,
    file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Imagens de notícias são públicas" ON storage.objects;
CREATE POLICY "Imagens de notícias são públicas"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'noticias');

DROP POLICY IF EXISTS "Upload de imagens de notícias" ON storage.objects;
CREATE POLICY "Upload de imagens de notícias"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'noticias');

DROP POLICY IF EXISTS "Remoção de imagens de notícias" ON storage.objects;
CREATE POLICY "Remoção de imagens de notícias"
ON storage.objects
FOR DELETE
TO anon, authenticated
USING (bucket_id = 'noticias');
