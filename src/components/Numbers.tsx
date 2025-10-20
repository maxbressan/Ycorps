import { } from 'react';

export const Numbers = () => {
  // Mapa renderizado diretamente; estado de carregamento removido

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
      description: "Empresas que confiam na Difrisul"
    },
    {
      number: "3",
      title: "Estados Atendidos",
      description: "PR, SC e RS com excelência logística"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#0A262E] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-800/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo - Conteúdo Textual e Estatísticas */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              {/* Título da Seção */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
                  Números Que Falam Por Si
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Com mais de 47 anos de trajetória, a Difrisul conecta indústrias, mercados e consumidores, 
                  garantindo qualidade e excelência na distribuição de alimentos em todo o Sul do país.
                </p>
              </div>

              {/* Blocos de Estatísticas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold mb-2 text-sm md:text-base">
                      {stat.title}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito - Mapa Interativo do Sul do Brasil */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-900/30 rounded-2xl border border-gray-700/50 overflow-hidden">
                
                {/* Mapa SVG do Sul do Brasil - Formato Real Correto */}
                <svg
                  viewBox="0 0 500 600"
                  className="w-full h-full"
                >
                  {/* Fundo do mapa */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>


                  {/* Rotas de conexão logística em verde */}
                  <g stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.8">
                    {/* Rota principal vertical */}
                    <path d="M 200 150 L 200 250 L 200 350 L 200 450 L 200 550" strokeDasharray="6,3">
                      <animate attributeName="stroke-dashoffset" values="0;9" dur="3s" repeatCount="indefinite"/>
                    </path>
                    
                    {/* Rotas horizontais */}
                    <path d="M 120 200 L 280 200" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" repeatCount="indefinite"/>
                    </path>
                    
                    <path d="M 120 350 L 280 350" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="2.5s" repeatCount="indefinite"/>
                    </path>
                    
                    <path d="M 120 500 L 280 500" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="2.2s" repeatCount="indefinite"/>
                    </path>
                  </g>

                  {/* Pontos de conexão logística */}
                  <g fill="#22c55e" stroke="white" strokeWidth="2">
                    <circle cx="200" cy="150" r="5" className="animate-pulse" style={{ filter: 'url(#glow)' }}>
                      <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="250" r="5" className="animate-pulse" style={{ filter: 'url(#glow)' }}>
                      <animate attributeName="r" values="5;7;5" dur="2.3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="350" r="5" className="animate-pulse" style={{ filter: 'url(#glow)' }}>
                      <animate attributeName="r" values="5;7;5" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="450" r="5" className="animate-pulse" style={{ filter: 'url(#glow)' }}>
                      <animate attributeName="r" values="5;7;5" dur="2.1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="550" r="5" className="animate-pulse" style={{ filter: 'url(#glow)' }}>
                      <animate attributeName="r" values="5;7;5" dur="1.9s" repeatCount="indefinite"/>
                    </circle>
                  </g>

                  
                  {/* Capitais */}
                  <g fill="#22c55e">
                    <circle cx="200" cy="170" r="3"/>
                    <circle cx="200" cy="270" r="3"/>
                    <circle cx="200" cy="370" r="3"/>
                  </g>
                  
                  <text x="210" y="175" className="fill-gray-700 text-xs font-medium">Curitiba</text>
                  <text x="210" y="275" className="fill-gray-700 text-xs font-medium">Florianópolis</text>
                  <text x="210" y="375" className="fill-gray-700 text-xs font-medium">Porto Alegre</text>
                </svg>

                {/* Overlay com informações */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#0A262E]/70 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-green-500/30">
                  <div className="text-green-400 text-xs md:text-sm font-semibold">Sul do Brasil</div>
                  <div className="text-white text-xs">Nossa área de atuação</div>
                </div>

                {/* Indicador de interatividade */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-green-500/20 backdrop-blur-sm rounded-full p-1.5 md:p-2 border border-green-500/30">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>

              {/* Texto explicativo */}
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-gray-400 text-xs md:text-sm">
                  <span className="text-green-400 font-semibold">Clique e arraste</span> para explorar nosso mapa de atuação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
