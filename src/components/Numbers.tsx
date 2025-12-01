import { } from 'react';

export const Numbers = () => {

  const stats = [
    {
      number: "4.000+",
      title: "Estabelecimentos Atendidos",
      description: "Mensalmente em todo o Sul do Brasil"
    },
    {
      number: "47+",
      title: "Anos de Experiência",
      description: "Tradição e confiança no mercado"
    },
    {
      number: "1.000+",
      title: "Clientes Satisfeitos",
      description: "Empresas que confiam na Ycorps"
    },
    {
      number: "3",
      title: "Estados Atendidos",
      description: "PR, SC e RS com excelência logística"
    }
  ];

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
                  Números Que Falam Por Si
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  A Ycorps atua no Sul do Brasil, conectando indústrias, mercados e consumidores, 
                  garantindo qualidade e excelência na distribuição de alimentos em toda a região.
                </p>
              </div>

              {/* Blocos de Estatísticas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/80 border border-[#1a3e22]/30 rounded-xl p-4 md:p-6 hover:border-[#1a3e22]/60 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#1a3e22] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#1a3e22] mb-2 text-sm md:text-base">
                      {stat.title}
                    </div>
                    <div className="text-gray-700 text-xs md:text-sm">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito - Vídeo */}
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white/50 rounded-2xl border border-[#1a3e22]/20 overflow-hidden">
                  {/* Imagem de fundo */}
                  <img
                    src="/img/25.png"
                    alt="Mapa logístico Ycorps"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.8, objectPosition: 'left center' }}
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
