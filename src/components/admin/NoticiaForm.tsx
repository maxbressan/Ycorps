import { FormEvent, useEffect, useState } from 'react';
import type { Noticia, NoticiaInput } from '@/types/noticia';
import { uploadNoticiaImage } from '@/services/noticiasService';

type NoticiaFormProps = {
  initialData?: Noticia | null;
  onSubmit: (input: NoticiaInput) => Promise<{ error: string | null }>;
  onCancel: () => void;
};

const emptyForm: NoticiaInput = {
  title: '',
  content: '',
  image_url: null,
  published: false,
};

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Não foi possível ler a imagem selecionada.'));
    reader.readAsDataURL(file);
  });

export const NoticiaForm = ({ initialData, onSubmit, onCancel }: NoticiaFormProps) => {
  const [form, setForm] = useState<NoticiaInput>(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        content: initialData.content,
        image_url: initialData.image_url,
        published: initialData.published,
      });
      setPreviewUrl(initialData.image_url);
    } else {
      setForm(emptyForm);
      setPreviewUrl(null);
    }
  }, [initialData]);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const localPreview = await readFileAsDataUrl(file);
      setPreviewUrl(localPreview);
    } catch {
      setError('Não foi possível exibir a prévia da imagem.');
      setUploading(false);
      return;
    }

    const result = await uploadNoticiaImage(file);

    if (result.error || !result.url) {
      setError(result.error ?? 'Não foi possível enviar a imagem.');
      setUploading(false);
      return;
    }

    setForm((current) => ({ ...current, image_url: result.url }));
    setPreviewUrl(result.url);
    setUploading(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await onSubmit(form);

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-[#1a3e22] mb-2">
          Título
        </label>
        <input
          id="title"
          type="text"
          value={form.title}
          onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
          required
          className="w-full rounded-xl border border-[#1a3e22]/20 bg-white px-4 py-3 text-[#1a3e22] focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/30"
          placeholder="Título da notícia"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-[#1a3e22] mb-2">
          Conteúdo
        </label>
        <textarea
          id="content"
          value={form.content}
          onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
          required
          rows={10}
          className="w-full rounded-xl border border-[#1a3e22]/20 bg-white px-4 py-3 text-[#1a3e22] focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/30 resize-y min-h-[220px]"
          placeholder="Escreva o texto completo da notícia..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1a3e22] mb-2">
          Imagem de capa
        </label>
        <div className="rounded-2xl border border-dashed border-[#1a3e22]/20 bg-[#f0ece3]/50 p-5">
          {previewUrl && (
            <div className="mb-4 overflow-hidden rounded-xl">
              <img src={previewUrl} alt="Prévia" className="w-full max-h-64 object-cover" />
            </div>
          )}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#1a3e22] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#153319]"
          />
          {uploading && <p className="mt-2 text-sm text-gray-600">Enviando imagem...</p>}
        </div>
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.published}
          onChange={(event) => setForm((current) => ({ ...current, published: event.target.checked }))}
          className="h-4 w-4 rounded border-[#1a3e22]/30 text-[#1a3e22] focus:ring-[#1a3e22]"
        />
        <span className="text-sm text-gray-700">Publicar imediatamente em /noticias</span>
      </label>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={submitting || uploading}
          className="rounded-full bg-[#1a3e22] hover:bg-[#153319] disabled:opacity-60 text-white font-medium px-6 py-3 transition-colors"
        >
          {submitting ? 'Salvando...' : initialData ? 'Atualizar notícia' : 'Criar notícia'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-[#1a3e22]/20 px-6 py-3 text-[#1a3e22] hover:bg-white transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
