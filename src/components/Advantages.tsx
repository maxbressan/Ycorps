export const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Produção Nacional com Entrega Rápida",
      description: "A Ycorps reduz a dependência de anticorpos importados, garantindo prazos ágeis, disponibilidade contínua e menor risco de descontinuidade de fornecimento.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "IgY com Qualidade Superior e Reprodutível",
      description: "Tecnologia baseada em anticorpos produzidos a partir de ovos, oferecendo maior pureza, estabilidade e menor variação entre lotes, atendendo padrões científicos rigorosos.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Desenvolvimento Personalizado para Cada Projeto",
      description: "A Ycorps cria anticorpos sob demanda para laboratórios, universidades e empresas, entregando soluções ajustadas às necessidades de diagnóstico, pesquisa e inovação.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
    <section className="py-20 bg-[#f0ece3]">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1a3e22] mb-4">
            Principais vantagens da Ycorps
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-white rounded-3xl p-8 shadow-lg border-t border-l border-r border-gray-200 border-b-4 border-[#1a3e22]"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#1a3e22] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
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
            className="bg-[#1a3e22] border-2 border-[#1a3e22] hover:bg-[#153319] hover:border-[#153319] text-white font-medium px-12 py-6 rounded-full transition-all duration-300 transform hover:translate-x-2 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
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
