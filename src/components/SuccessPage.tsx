import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const SuccessPage = () => {
  useEffect(() => {
    // Garantir que a página sempre role para o topo
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#f0ece3]">
      <Header />
      
      <div className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-[#1a3e22] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-4xl font-bold text-[#1a3e22] mb-4">
                Mensagem Enviada com Sucesso!
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Obrigado pelo seu contato. Nossa equipe entrará em contato em breve.
              </p>
              
              <div className="bg-white/80 rounded-2xl p-8 border border-[#1a3e22]/30 mb-8">
                <h2 className="text-2xl text-[#1a3e22] mb-4">O que acontece agora?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1a3e22] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">
                      Nossa equipe comercial analisará sua solicitação
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1a3e22] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">
                      Entraremos em contato em até 24 horas
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1a3e22] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">
                      Apresentaremos uma proposta personalizada
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    window.location.href = '/';
                  }}
                  className="bg-[#1a3e22] hover:bg-[#153319] text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Voltar ao Início
                </button>
                
                <a
                  href="http://wa.me/5549988417900"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
