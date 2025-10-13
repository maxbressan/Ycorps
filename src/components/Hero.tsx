export const Hero = () => {
  return (
    <section id="hero" className="text-white py-20 pt-40 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        >
          <source src="/img/02.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Título e subtítulo */}
          <div className="text-left">
            <h1 className="text-5xl mb-6 text-white">
              Distribuidora de Alimentos e Logística no Sul do Brasil
            </h1>
            <p className="text-xl mb-8 text-gray-400 leading-relaxed">
              Tradição e eficiência conectando indústrias, mercados e consumidores em mais de 4 mil estabelecimentos atendidos mensalmente.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-green-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 animate-bounce hover:animate-none relative overflow-hidden"
            >
              <span className="relative z-10">Quero otimizar minha distribuição</span>
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
