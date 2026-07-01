import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { NoticiaForm } from '@/components/admin/NoticiaForm';
import {
  createNoticia,
  deleteNoticia,
  fetchAdminNoticias,
  formatNoticiaDate,
  updateNoticia,
} from '@/services/noticiasService';
import type { Noticia, NoticiaInput } from '@/types/noticia';

export const AppDashboardPage = () => {
  const { user, signOut, getCredentials } = useAuth();
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingNoticia, setEditingNoticia] = useState<Noticia | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const credentials = getCredentials();

  const loadNoticias = async () => {
    if (!credentials) {
      setError('Sessão expirada. Faça login novamente para gerenciar notícias.');
      setLoading(false);
      return;
    }

    setLoading(true);
    const result = await fetchAdminNoticias(credentials);
    setNoticias(result.data);
    setError(result.error);
    setLoading(false);
  };

  useEffect(() => {
    loadNoticias();
  }, [user]);

  const handleCreateOrUpdate = async (input: NoticiaInput) => {
    if (!credentials) {
      return { error: 'Sessão expirada. Faça login novamente.' };
    }

    const result = editingNoticia
      ? await updateNoticia(credentials, editingNoticia.id, input)
      : await createNoticia(credentials, input);

    if (result.error) {
      return { error: result.error };
    }

    setShowForm(false);
    setEditingNoticia(null);
    setActionMessage(editingNoticia ? 'Notícia atualizada com sucesso.' : 'Notícia criada com sucesso.');
    await loadNoticias();
    return { error: null };
  };

  const handleDelete = async (noticia: Noticia) => {
    if (!credentials) {
      setError('Sessão expirada. Faça login novamente.');
      return;
    }

    const confirmed = window.confirm(`Deseja excluir "${noticia.title}"?`);
    if (!confirmed) {
      return;
    }

    const result = await deleteNoticia(credentials, noticia.id);

    if (result.error) {
      setError(result.error);
      return;
    }

    setActionMessage('Notícia excluída com sucesso.');
    await loadNoticias();
  };

  const openCreateForm = () => {
    setEditingNoticia(null);
    setShowForm(true);
    setActionMessage(null);
  };

  const openEditForm = (noticia: Noticia) => {
    setEditingNoticia(noticia);
    setShowForm(true);
    setActionMessage(null);
  };

  return (
    <div className="min-h-screen bg-[#f0ece3]">
      <header className="bg-[#1a3e22] text-white px-6 py-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/img/01.png" alt="Logo Ycorps" className="h-10 w-auto object-contain" />
            <div>
              <p className="font-medium">Painel Ycorps</p>
              <p className="text-sm text-white/70">Gerenciar notícias</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/noticias"
              className="hidden sm:inline-flex rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              Ver página pública
            </Link>
            <button
              onClick={() => signOut()}
              className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white border border-[#1a3e22]/10 shadow-lg p-6">
              <p className="text-sm text-gray-600">Usuário conectado</p>
              <p className="mt-1 text-lg font-semibold text-[#1a3e22]">{user?.username}</p>
            </div>

            <div className="rounded-2xl bg-[#1a3e22] text-white p-6 shadow-lg">
              <h2 className="text-lg font-semibold">Publicar conteúdo</h2>
              <p className="mt-2 text-sm text-white/75">
                Crie notícias com texto e imagem. Ao publicar, elas aparecem automaticamente em{' '}
                <span className="font-medium text-white">/noticias</span>.
              </p>
              <button
                onClick={openCreateForm}
                className="mt-5 w-full rounded-full bg-white text-[#1a3e22] font-medium py-3 hover:bg-[#f0ece3] transition-colors"
              >
                Nova notícia
              </button>
            </div>
          </aside>

          <section className="space-y-6">
            {actionMessage && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {actionMessage}
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {showForm && (
              <div className="rounded-2xl bg-white border border-[#1a3e22]/10 shadow-lg p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#1a3e22]">
                    {editingNoticia ? 'Editar notícia' : 'Nova notícia'}
                  </h2>
                  <p className="mt-1 text-gray-600">
                    Preencha o conteúdo e escolha se deseja publicar agora ou manter como rascunho.
                  </p>
                </div>
                <NoticiaForm
                  initialData={editingNoticia}
                  onSubmit={handleCreateOrUpdate}
                  onCancel={() => {
                    setShowForm(false);
                    setEditingNoticia(null);
                  }}
                />
              </div>
            )}

            <div className="rounded-2xl bg-white border border-[#1a3e22]/10 shadow-lg overflow-hidden">
              <div className="border-b border-[#1a3e22]/10 px-6 py-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#1a3e22]">Suas notícias</h2>
                  <p className="text-sm text-gray-600">Rascunhos e publicações recentes</p>
                </div>
                <span className="rounded-full bg-[#f0ece3] px-3 py-1 text-sm text-[#1a3e22]">
                  {noticias.length}
                </span>
              </div>

              {loading && (
                <div className="p-6 space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="animate-pulse h-20 rounded-xl bg-[#f0ece3]" />
                  ))}
                </div>
              )}

              {!loading && noticias.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-600">
                  Nenhuma notícia cadastrada ainda. Clique em &quot;Nova notícia&quot; para começar.
                </div>
              )}

              {!loading && noticias.length > 0 && (
                <div className="divide-y divide-[#1a3e22]/10">
                  {noticias.map((noticia) => (
                    <article key={noticia.id} className="px-6 py-5 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-start gap-4 flex-1 min-w-0">
                        <div className="h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-[#f0ece3]">
                          {noticia.image_url ? (
                            <img src={noticia.image_url} alt={noticia.title} className="h-full w-full object-cover" />
                          ) : (
                            <div className="flex h-full items-center justify-center text-[#1a3e22]/20 text-2xl font-bold">
                              Y
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-[#1a3e22] truncate">{noticia.title}</h3>
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                noticia.published
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {noticia.published ? 'Publicada' : 'Rascunho'}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {formatNoticiaDate(noticia.published_at ?? noticia.created_at)}
                          </p>
                          {noticia.excerpt && (
                            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{noticia.excerpt}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {noticia.published && (
                          <Link
                            to={`/noticias/${noticia.slug}`}
                            className="rounded-full border border-[#1a3e22]/15 px-4 py-2 text-sm text-[#1a3e22] hover:bg-[#f0ece3] transition-colors"
                          >
                            Ver
                          </Link>
                        )}
                        <button
                          onClick={() => openEditForm(noticia)}
                          className="rounded-full border border-[#1a3e22]/15 px-4 py-2 text-sm text-[#1a3e22] hover:bg-[#f0ece3] transition-colors"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(noticia)}
                          className="rounded-full border border-red-200 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
