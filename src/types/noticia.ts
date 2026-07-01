export type Noticia = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  published: boolean;
  author_id: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};

export type NoticiaInput = {
  title: string;
  content: string;
  image_url?: string | null;
  published: boolean;
};
