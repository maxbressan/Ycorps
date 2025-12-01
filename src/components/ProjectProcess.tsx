export const ProjectProcess = () => {

  const steps = [
    {
      id: 1,
      title: "Agilidade na entrega",
      description: "Entregamos seus produtos com rapidez e eficiência, respeitando prazos e mantendo a qualidade."
    },
    {
      id: 2,
      title: "Produtos com preços competitivos",
      description: "Oferecemos os melhores preços do mercado, garantindo economia para nossos clientes."
    },
    {
      id: 3,
      title: "Segurança no transporte e armazenamento",
      description: "Seus produtos são transportados e armazenados com total segurança e cuidado."
    },
    {
      id: 4,
      title: "Garantia de qualidade das grandes marcas",
      description: "Trabalhamos apenas com produtos de marcas reconhecidas e de alta qualidade."
    },
    {
      id: 5,
      title: "Credibilidade e experiência com mais de 40 anos no mercado",
      description: "Mais de quatro décadas de experiência no mercado de distribuição de alimentos."
    },
    {
      id: 6,
      title: "Atendimento multicanal",
      description: "Atendemos nossos clientes através de diversos canais de comunicação."
    }
  ];

  return (
    <section className="py-16 bg-[#f0ece3] relative overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
      >
        <source src="/img/30.mp4" type="video/mp4" />
        <p>Seu navegador não suporta vídeos.</p>
      </video>
      
      {/* Overlay escuro para melhor contraste */}
      <div className="absolute inset-0 bg-[#f0ece3]/80"></div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Conteúdo */}
          <div className="space-y-4">
            {/* Título Principal */}
            <div>
              <h2 className="text-2xl md:text-3xl text-[#1a3e22] mb-4">
                Muito mais do que produtos
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Oferecemos muito mais do que produtos, entregamos soluções completas em distribuição de alimentos com excelência e confiança.
              </p>
            </div>

            {/* Lista de Diferenciais */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Diferencial */}
                  <div className="flex items-start space-x-4">
                    {/* Bullet Point */}
                    <div className="w-3 h-3 rounded-full mt-2 bg-[#1a3e22]"></div>
                    
                    {/* Conteúdo do Diferencial */}
                    <div className="flex-1">
                      <h3 className="text-base text-[#1a3e22] mb-1">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Separador */}
                  {index < steps.length - 1 && (
                    <div className="mt-6 mb-2">
                      <div className="h-px bg-[#1a3e22]/30"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#1a3e22] hover:bg-[#153319] text-white py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#1a3e22]/25 flex items-center mx-auto"
              >
                Entre em contato conosco
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
