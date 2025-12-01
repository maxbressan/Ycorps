export const Services = () => {
  const services = [
    {
      icon: (
        <img 
          src="/img/05.png" 
          alt="Produção Nacional de Anticorpos IgY" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Produção Nacional de Anticorpos IgY",
      description: "Desenvolvemos anticorpos de alta qualidade a partir de ovos (IgY), uma tecnologia biotecnológica moderna e sustentável que oferece pureza e estabilidade superiores aos métodos tradicionais."
    },
    {
      icon: (
        <img 
          src="/img/06.png" 
          alt="Tecnologia que Gera Confiança" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Tecnologia que Gera Confiança",
      description: "Nosso processo integra ciência e inovação em cada etapa, garantindo rastreamento completo, controle rigoroso de qualidade e resultados reprodutíveis para pesquisas e diagnósticos de precisão."
    },
    {
      icon: (
        <img 
          src="/img/07.png" 
          alt="Soluções Personalizadas para Pesquisa e Diagnóstico" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Soluções Personalizadas para Pesquisa e Diagnóstico",
      description: "Atendemos laboratórios, universidades e centros de inovação que buscam anticorpos específicos e confiáveis, desenvolvidos sob medida para diferentes aplicações científicas."
    },
    {
      icon: (
        <img 
          src="/img/08.png" 
          alt="Compromisso com a Ciência Nacional" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Compromisso com a Ciência Nacional",
      description: "A Ycorps nasceu com o propósito de reduzir a dependência do Brasil em relação a anticorpos importados, fortalecendo a autonomia tecnológica e científica do país."
    },
    {
      icon: (
        <img 
          src="/img/09.png" 
          alt="Sustentabilidade e Ética em Biotecnologia" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Sustentabilidade e Ética em Biotecnologia",
      description: "A tecnologia IgY dispensa o uso invasivo de animais, representando uma alternativa ética e sustentável sem comprometer a eficiência e o desempenho dos resultados."
    },
    {
      icon: (
        <img 
          src="/img/15.png" 
          alt="Inovação que Impulsiona Resultados" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Inovação que Impulsiona Resultados",
      description: "Cada anticorpo produzido reflete o compromisso da Ycorps com a excelência científica, a inovação aplicada e a evolução contínua da biotecnologia brasileira."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4 text-left">
              O que nós fazemos?
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              A Ycorps desenvolve e purifica anticorpos IgY de alta qualidade, produzidos a partir de ovos. Tecnologia biotecnológica nacional para diagnóstico e pesquisa com eficiência e confiabilidade.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#1a3e22] hover:border-2 transition-all duration-300"
              >
                <div className="text-gray-700 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-base text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <div className="relative">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#1a3e22] border-2 border-[#1a3e22] hover:bg-[#153319] hover:border-[#153319] text-white font-medium px-12 py-6 rounded-full transition-all duration-300 transform hover:translate-x-2 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 relative z-10 animate-border-glow"
              >
                <span>Entre em contato conosco</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
