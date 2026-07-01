import { Link } from 'react-router-dom';
import type { Noticia } from '@/types/noticia';
import { formatNoticiaDate } from '@/services/noticiasService';

type NoticiaCardProps = {
  noticia: Noticia;
  featured?: boolean;
};

export const NoticiaCard = ({ noticia, featured = false }: NoticiaCardProps) => {
  const dateLabel = formatNoticiaDate(noticia.published_at ?? noticia.created_at);

  return (
    <Link
      to={`/noticias/${noticia.slug}`}
      className={`flex flex-col overflow-hidden rounded-2xl bg-white border border-[#1a3e22]/10 shadow-lg ${
        featured ? 'md:rounded-3xl' : ''
      }`}
    >
      <div className={`flex flex-col ${featured ? 'p-8 md:p-10' : 'p-6'}`}>
        {featured && (
          <span className="inline-flex w-fit items-center rounded-full bg-[#1a3e22]/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#1a3e22]">
            Destaque
          </span>
        )}

        <p className={`text-sm text-gray-500 ${featured ? 'mt-4' : ''}`}>{dateLabel}</p>

        <h2
          className={`mt-2 font-bold text-[#1a3e22] leading-snug ${
            featured ? 'text-3xl md:text-4xl' : 'text-xl line-clamp-2'
          }`}
        >
          {noticia.title}
        </h2>

        {noticia.excerpt && (
          <p
            className={`mt-3 text-gray-600 ${
              featured ? 'text-lg line-clamp-3 max-w-3xl' : 'line-clamp-3 flex-1'
            }`}
          >
            {noticia.excerpt}
          </p>
        )}

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1a3e22]">
          {featured ? 'Ler notícia completa' : 'Continuar lendo'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={featured ? 'M17 8l4 4m0 0l-4 4m4-4H3' : 'M9 5l7 7-7 7'}
            />
          </svg>
        </span>
      </div>

      {noticia.image_url && (
        <div className="border-t border-[#1a3e22]/10 bg-[#f0ece3]/30">
          <img
            src={noticia.image_url}
            alt={noticia.title}
            className="w-full object-contain max-h-[420px]"
          />
        </div>
      )}
    </Link>
  );
};
