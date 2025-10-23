export const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Segurança e Controle de Qualidade",
      description: "Na Difrisul, a qualidade é prioridade. Nossos processos seguem padrões rigorosos de armazenagem e transporte de alimentos. Somos referência em logística alimentar no Sul do Brasil, assegurando que cada produto chegue ao destino com integridade e dentro dos padrões exigidos pela indústria.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Redução de Custos Operacionais",
      description: "A Difrisul transforma sua operação logística em eficiência real. Com infraestrutura moderna e tecnologia integrada, otimizamos rotas, armazenagem e distribuição para reduzir custos e elevar a produtividade. Nosso modelo de distribuição inteligente de alimentos proporciona economia e previsibilidade para empresas em Santa Catarina, Rio Grande do Sul e Paraná.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Localização Acessível e Estratégica",
      description: "Contamos com armazéns estrategicamente posicionados no Sul do Brasil, garantindo agilidade no abastecimento e redução de prazos de entrega. Essa estrutura logística facilita o fluxo de produtos entre indústrias, mercados e pontos de venda, tornando a Difrisul uma parceira decisiva em distribuição e logística alimentar para toda a região.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#0A262E]">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Principais vantagens da Difrisul
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-gray-100 rounded-3xl p-8 shadow-lg border-t border-l border-r border-gray-200 border-b-4 border-green-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {advantage.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl text-gray-800 text-center mb-4">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="bg-gray-900 border-2 border-gray-300 hover:bg-green-600 hover:border-green-600 text-white font-medium px-12 py-6 rounded-full transition-all duration-300 transform hover:translate-x-2 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
          >
            <span>Fale com um especialista</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
