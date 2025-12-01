export const NumbersCopy = () => {

  return (
    <section className="py-12 md:py-20 bg-[#f0ece3] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3e22]/10 via-transparent to-[#1a3e22]/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo - Conteúdo Textual e Estatísticas */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              {/* Título da Seção */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#1a3e22] mb-4 md:mb-6">
                  Ycorps, tradição e eficiência que movimentam o Sul do Brasil
                </h3>
              </div>

              {/* Lista de Tópicos */}
              <div className="space-y-4">
                <div className="text-gray-700 text-lg md:text-xl">
                  • Frota própria e rastreada
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  • Entregas pontuais em todo o Sul do país
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  • Logística inteligente para alimentos e bebidas
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  • Parcerias que fortalecem sua cadeia de
                </div>
              </div>
            </div>

            {/* Lado Direito - Vídeo */}
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white/50 rounded-2xl border border-[#1a3e22]/20 overflow-hidden">
                  {/* Imagem de fundo */}
                  <img
                    src="/img/26.png"
                    alt="Mapa logístico Ycorps"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.8, objectPosition: 'right center' }}
                  />
                  
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
