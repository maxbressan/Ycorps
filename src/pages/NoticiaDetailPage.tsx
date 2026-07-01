import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { fetchNoticiaBySlug, formatNoticiaDate } from '@/services/noticiasService';
import type { Noticia } from '@/types/noticia';

const NoticiaDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const loadNoticia = async () => {
      setLoading(true);
      const result = await fetchNoticiaBySlug(slug);
      setNoticia(result.data);
      setError(result.error ?? (result.data ? null : 'Notícia não encontrada.'));
      setLoading(false);
    };

    loadNoticia();
  }, [slug]);

  const dateLabel = formatNoticiaDate(noticia?.published_at ?? noticia?.created_at ?? null);

  return (
    <div className="min-h-screen bg-[#f0ece3]">
      <Header />

      <main className="pt-36 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1a3e22]/70 hover:text-[#1a3e22] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para notícias
          </Link>

          {loading && (
            <div className="mt-10 animate-pulse space-y-6 max-w-4xl">
              <div className="h-10 w-2/3 rounded-xl bg-white/70" />
              <div className="h-80 rounded-3xl bg-white/70" />
              <div className="space-y-3">
                <div className="h-4 rounded bg-white/70" />
                <div className="h-4 rounded bg-white/70" />
                <div className="h-4 w-5/6 rounded bg-white/70" />
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-red-700 max-w-3xl">
              {error}
            </div>
          )}

          {!loading && noticia && (
            <article className="mt-10 max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span>{dateLabel}</span>
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                <span>Ycorps</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#1a3e22] leading-tight">
                {noticia.title}
              </h1>

              <div className="mt-10 rounded-3xl bg-white border border-[#1a3e22]/10 shadow-lg p-8 md:p-10">
                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap leading-8">
                  {noticia.content}
                </div>
              </div>

              {noticia.image_url && (
                <div className="mt-8 border border-[#1a3e22]/10 rounded-2xl overflow-hidden bg-white">
                  <img
                    src={noticia.image_url}
                    alt={noticia.title}
                    className="w-full object-contain"
                  />
                </div>
              )}
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NoticiaDetailPage;
