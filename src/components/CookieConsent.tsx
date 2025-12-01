import { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Se não houver consentimento salvo, mostra o popup após um pequeno delay
      setTimeout(() => {
        setShowCookie(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookie(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookie(false);
  };

  const handleCustomize = () => {
    // Redireciona para a página de política de cookies sem fechar o popup
    window.open('/privacy', '_blank');
  };

  if (!showCookie) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl p-6 border border-[#1a3e22]/20">
        {/* Title */}
        <h2 className="text-xl font-bold text-[#1a3e22] mb-3">
          Valorizamos sua privacidade
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm">
          Utilizamos cookies para aprimorar sua experiência de navegação, exibir anúncios ou conteúdo personalizado e analisar nosso tráfego. Ao clicar em "Aceitar tudo", você concorda com nosso uso de cookies.{' '}
          <a href="/privacy" className="text-[#1a3e22] underline hover:text-[#153319]">
            Política de Cookies
          </a>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[#1a3e22] text-white rounded-lg hover:bg-[#153319] transition-all duration-300 font-medium text-sm"
          >
            Aceitar tudo
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 font-medium text-sm"
            >
              Rejeitar
            </button>
            <button
              onClick={handleCustomize}
              className="flex-1 px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 font-medium text-sm"
            >
              Personalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
