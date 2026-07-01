import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';

export type AppUser = {
  id: string;
  username: string;
};

type AuthContextValue = {
  user: AppUser | null;
  loading: boolean;
  signIn: (identifier: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  getCredentials: () => { username: string; password: string } | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const REMEMBER_KEY = 'ycorps_remember_login';
const SESSION_KEY = 'ycorps_app_session';
const SESSION_PASSWORD_KEY = 'ycorps_app_password';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_KEY);

    if (savedSession) {
      try {
        setUser(JSON.parse(savedSession) as AppUser);
      } catch {
        localStorage.removeItem(SESSION_KEY);
      }
    }

    setLoading(false);
  }, []);

  const signIn = async (identifier: string, password: string) => {
    const username = identifier.trim().toLowerCase() === 'admin'
      ? 'admin'
      : identifier.trim().toLowerCase();

    try {
      const { data, error } = await supabase.rpc('authenticate_app_user', {
        p_username: username,
        p_password: password,
      });

      if (error) {
        if (error.message.includes('invalid_credentials')) {
          return { error: 'Usuário ou senha inválidos.' };
        }

        if (error.message.includes('Could not find the function')) {
          return {
            error: 'Autenticação ainda não configurada no Supabase. Execute a migration SQL do projeto.',
          };
        }

        if (error.message.includes('crypt')) {
          return {
            error: 'Configuração do banco incompleta. Execute o SQL em supabase/migrations/20250613000002_fix_app_auth_crypt.sql.',
          };
        }

        return { error: error.message };
      }

      const authenticatedUser = data as AppUser;
      localStorage.setItem(SESSION_KEY, JSON.stringify(authenticatedUser));
      sessionStorage.setItem(SESSION_PASSWORD_KEY, password);
      setUser(authenticatedUser);

      return { error: null };
    } catch {
      return {
        error: 'Não foi possível conectar ao Supabase. Recarregue a página e tente novamente.',
      };
    }
  };

  const signOut = async () => {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(REMEMBER_KEY);
    sessionStorage.removeItem(SESSION_PASSWORD_KEY);
    setUser(null);
  };

  const getCredentials = () => {
    if (!user) {
      return null;
    }

    const password = sessionStorage.getItem(SESSION_PASSWORD_KEY);

    if (!password) {
      return null;
    }

    return {
      username: user.username,
      password,
    };
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signOut,
      getCredentials,
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  }

  return context;
};
