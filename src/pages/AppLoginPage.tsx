import { FormEvent, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { REMEMBER_KEY, useAuth } from '@/contexts/AuthContext';

export const AppLoginPage = () => {
  const { user, signIn } = useAuth();
  const location = useLocation();
  const redirectTo = (location.state as { from?: string } | null)?.from ?? '/app/dashboard';

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const savedIdentifier = localStorage.getItem(REMEMBER_KEY);
    if (savedIdentifier) {
      setIdentifier(savedIdentifier);
      setRemember(true);
    }
  }, []);

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const result = await signIn(identifier, password);

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    if (remember) {
      localStorage.setItem(REMEMBER_KEY, identifier.trim());
    } else {
      localStorage.removeItem(REMEMBER_KEY);
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div
        className="hidden lg:flex items-center justify-center bg-[#1a3e22] relative overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(240,236,227,0.08) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#153319]/40 via-transparent to-[#1a3e22]" />
        <div className="relative z-10 flex flex-col items-center px-8">
          <img
            src="/img/01.png"
            alt="Logo Ycorps"
            className="w-56 h-56 object-contain drop-shadow-2xl"
          />
          <p className="mt-6 text-[#f0ece3]/80 text-lg text-center max-w-sm">
            Plataforma interna Ycorps
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#f0ece3] px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex justify-center mb-8">
            <img src="/img/01.png" alt="Logo Ycorps" className="h-16 w-auto object-contain" />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1a3e22] mb-2">Entrar</h1>
            <p className="text-gray-600">
              Para acessar a plataforma, utilize seu usuário e senha.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-[#1a3e22] mb-2">
                Usuário
              </label>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
                placeholder="admin"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-[#1a3e22]/20 bg-white px-4 py-3 text-[#1a3e22] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/30"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#1a3e22] mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-[#1a3e22]/20 bg-white px-4 py-3 pr-24 text-[#1a3e22] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#1a3e22]/70 hover:text-[#1a3e22]"
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="h-4 w-4 rounded border-[#1a3e22]/30 text-[#1a3e22] focus:ring-[#1a3e22]"
              />
              <span className="text-sm text-gray-700">Lembrar usuário</span>
            </label>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#1a3e22] hover:bg-[#153319] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 transition-colors"
            >
              {submitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Ainda não é cliente?{' '}
            <a href="/#contact" className="text-[#1a3e22] font-medium hover:underline">
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
