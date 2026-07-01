-- Corrige referência ao pgcrypto no schema extensions (Supabase Cloud)
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE OR REPLACE FUNCTION public.authenticate_app_user(
  p_username TEXT,
  p_password TEXT
)
RETURNS JSON
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

  RETURN json_build_object(
    'id', v_user.id,
    'username', v_user.username
  );
END;
$$;

REVOKE ALL ON FUNCTION public.authenticate_app_user(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.authenticate_app_user(TEXT, TEXT) TO anon, authenticated;

INSERT INTO public.app_users (username, password_hash)
VALUES ('admin', extensions.crypt('Ycoprs@2143', extensions.gen_salt('bf')))
ON CONFLICT (username) DO UPDATE
SET password_hash = EXCLUDED.password_hash;
