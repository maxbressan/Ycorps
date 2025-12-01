export const Hero = () => {
  return (
    <section id="hero" className="text-[#1a3e22] py-20 pt-40 relative overflow-hidden" style={{ backgroundColor: '#f0ece3' }}>
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.30 }}
        >
          <source src="/img/10.mp4" type="video/mp4" />
          <p>Seu navegador não suporta vídeos.</p>
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Título e subtítulo */}
          <div className="text-left">
            <h1 className="text-5xl mb-6 text-[#1a3e22]">
              Ycorps inovação em Anticorpos para um Brasil Autossuficiente
            </h1>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              Laboratório brasileiro especializado em biotecnologia e produção de anticorpos a partir de ovos (IgY). Tecnologia, qualidade e inovação para diagnóstico e pesquisa.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#1a3e22] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#153319] transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-[#1a3e22]/25 animate-bounce hover:animate-none relative overflow-hidden"
            >
              <span className="relative z-10">Entre em contato conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            </button>
          </div>
          
          {/* Lado direito - Espaço para imagem ou conteúdo adicional */}
          <div className="text-center">
            {/* Espaço reservado para conteúdo futuro */}
          </div>
        </div>
      </div>
      
    </section>
  );
};
