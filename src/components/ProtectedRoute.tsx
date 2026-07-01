import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f0ece3] flex items-center justify-center">
        <div className="text-[#1a3e22] text-lg">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/app" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};
