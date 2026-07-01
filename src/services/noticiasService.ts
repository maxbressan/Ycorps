import { supabase } from '@/lib/supabase';
import type { Noticia, NoticiaInput } from '@/types/noticia';

type AuthCredentials = {
  username: string;
  password: string;
};

const mapRpcError = (message: string) => {
  if (message.includes('invalid_credentials')) {
    return 'Sessão expirada. Faça login novamente.';
  }

  if (message.includes('invalid_payload')) {
    return 'Preencha título e conteúdo.';
  }

  if (message.includes('not_found')) {
    return 'Notícia não encontrada.';
  }

  if (message.includes('Could not find the function')) {
    return 'Banco de dados ainda não configurado. Execute npm run db:apply.';
  }

  return message;
};

export const fetchPublishedNoticias = async (): Promise<{ data: Noticia[]; error: string | null }> => {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    if (error.message.includes('Could not find the table')) {
      return { data: [], error: null };
    }

    return { data: [], error: error.message };
  }

  return { data: (data ?? []) as Noticia[], error: null };
};

export const fetchNoticiaBySlug = async (slug: string): Promise<{ data: Noticia | null; error: string | null }> => {
  const { data, error } = await supabase
    .from('noticias')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }

  return { data: data as Noticia | null, error: null };
};

export const fetchAdminNoticias = async (
  credentials: AuthCredentials,
): Promise<{ data: Noticia[]; error: string | null }> => {
  const { data, error } = await supabase.rpc('list_noticias_admin', {
    p_username: credentials.username,
    p_password: credentials.password,
  });

  if (error) {
    return { data: [], error: mapRpcError(error.message) };
  }

  return { data: (data ?? []) as Noticia[], error: null };
};

export const createNoticia = async (
  credentials: AuthCredentials,
  input: NoticiaInput,
): Promise<{ data: Noticia | null; error: string | null }> => {
  const { data, error } = await supabase.rpc('create_noticia', {
    p_username: credentials.username,
    p_password: credentials.password,
    p_title: input.title,
    p_content: input.content,
    p_image_url: input.image_url ?? null,
    p_published: input.published,
  });

  if (error) {
    return { data: null, error: mapRpcError(error.message) };
  }

  return { data: data as Noticia, error: null };
};

export const updateNoticia = async (
  credentials: AuthCredentials,
  id: string,
  input: NoticiaInput,
): Promise<{ data: Noticia | null; error: string | null }> => {
  const { data, error } = await supabase.rpc('update_noticia', {
    p_username: credentials.username,
    p_password: credentials.password,
    p_id: id,
    p_title: input.title,
    p_content: input.content,
    p_image_url: input.image_url ?? null,
    p_published: input.published,
  });

  if (error) {
    return { data: null, error: mapRpcError(error.message) };
  }

  return { data: data as Noticia, error: null };
};

export const deleteNoticia = async (
  credentials: AuthCredentials,
  id: string,
): Promise<{ error: string | null }> => {
  const { error } = await supabase.rpc('delete_noticia', {
    p_username: credentials.username,
    p_password: credentials.password,
    p_id: id,
  });

  if (error) {
    return { error: mapRpcError(error.message) };
  }

  return { error: null };
};

export const uploadNoticiaImage = async (file: File): Promise<{ url: string | null; error: string | null }> => {
  const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const fileName = `${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage.from('noticias').upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type,
  });

  if (error) {
    return { url: null, error: error.message };
  }

  const { data } = supabase.storage.from('noticias').getPublicUrl(fileName);
  return { url: data.publicUrl, error: null };
};

export const formatNoticiaDate = (value: string | null) => {
  if (!value) {
    return '';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value));
};
