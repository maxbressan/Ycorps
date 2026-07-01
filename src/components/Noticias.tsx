import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NoticiaCard } from '@/components/NoticiaCard';
import { fetchPublishedNoticias } from '@/services/noticiasService';
import type { Noticia } from '@/types/noticia';

export const Noticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNoticias = async () => {
      setLoading(true);
      const result = await fetchPublishedNoticias();
      setNoticias(result.data);
      setError(result.error);
      setLoading(false);
    };

    loadNoticias();
  }, []);

  const [featured, ...rest] = noticias;

  return (
    <div className="min-h-screen bg-[#f0ece3] text-[#1a3e22]">
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,62,34,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(26,62,34,0.08),transparent_40%)]" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#1a3e22]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a3e22] backdrop-blur-sm">
              Ycorps News
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-[#1a3e22]">
              Notícias e novidades
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Acompanhe lançamentos, conquistas e atualizações da Ycorps em um feed moderno e atualizado.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        {loading && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl bg-white/70 border border-[#1a3e22]/10 h-[360px]"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && noticias.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#1a3e22]/20 bg-white/60 px-8 py-16 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1a3e22]/10 text-[#1a3e22]">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1a3e22]">Nenhuma notícia publicada ainda</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Em breve você verá aqui as novidades da Ycorps. A equipe interna pode publicar conteúdo pelo painel em{' '}
              <Link to="/app" className="font-medium text-[#1a3e22] hover:underline">
                /app
              </Link>
              .
            </p>
          </div>
        )}

        {!loading && !error && noticias.length > 0 && (
          <div className="space-y-10">
            {featured && <NoticiaCard noticia={featured} featured />}

            {rest.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((noticia) => (
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
