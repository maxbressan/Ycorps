export const Services = () => {
  const services = [
    {
      icon: (
        <img 
          src="/img/05.png" 
          alt="Restaurantes" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Restaurantes",
      description: "Fornecimento constante para operações de pequeno, médio e grande porte."
    },
    {
      icon: (
        <img 
          src="/img/06.png" 
          alt="Lanchonetes" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Lanchonetes",
      description: "Agilidade no abastecimento de produtos essenciais."
    },
    {
      icon: (
        <img 
          src="/img/07.png" 
          alt="Supermercados" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Supermercados",
      description: "Entregas programadas e rastreáveis para redes e mercados locais."
    },
    {
      icon: (
        <img 
          src="/img/08.png" 
          alt="Padarias" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Padarias",
      description: "Suporte logístico para ingredientes e produtos alimentícios diversos."
    },
    {
      icon: (
        <img 
          src="/img/09.png" 
          alt="Açougues" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Açougues",
      description: "Transporte seguro e controlado de alimentos perecíveis."
    },
    {
      icon: (
        <img 
          src="/img/15.png" 
          alt="Outros Negócios" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Outros Negócios",
      description: "Soluções personalizadas conforme a necessidade de cada cliente."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-2xl text-white mb-4 text-left">
              O que nós fazemos?
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Colaboramos com o abastecimento de mais de 4 mil estabelecimentos todos os meses, 
              garantindo qualidade e eficiência na distribuição de alimentos. Atuamos no oeste e norte de Santa Catarina, noroeste do Rio Grande do Sul e sudoeste do Paraná.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black rounded-lg p-6 border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <div className="text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-base text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <div className="relative">
              <button className="bg-black border-2 border-white/20 hover:bg-green-600 hover:border-green-600 text-white font-medium px-12 py-6 rounded-full transition-all duration-300 transform hover:translate-x-2 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 relative z-10 animate-border-glow">
                <span>Quero fazer um pedido</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes border-glow {
          0% {
            box-shadow: 
              0 0 0 2px rgba(255,255,255,0.2),
              0 0 20px rgba(255,255,255,0.1),
              0 0 40px rgba(255,255,255,0.05);
          }
          25% {
            box-shadow: 
              0 0 0 2px rgba(255,255,255,0.2),
              0 0 20px rgba(255,255,255,0.3),
              0 0 40px rgba(255,255,255,0.1);
          }
          50% {
            box-shadow: 
              0 0 0 2px rgba(255,255,255,0.2),
              0 0 20px rgba(255,255,255,0.1),
              0 0 40px rgba(255,255,255,0.05);
          }
          75% {
            box-shadow: 
              0 0 0 2px rgba(255,255,255,0.2),
              0 0 20px rgba(255,255,255,0.3),
              0 0 40px rgba(255,255,255,0.1);
          }
          100% {
            box-shadow: 
              0 0 0 2px rgba(255,255,255,0.2),
              0 0 20px rgba(255,255,255,0.1),
              0 0 40px rgba(255,255,255,0.05);
          }
        }
        
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
