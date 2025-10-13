export const Hero = () => {
  // Gerar números aleatórios para simular credenciais vazadas
  const credenciaisVazadas = Math.floor(Math.random() * 6); // 0 a 5
  const senhasCapturadas = Math.floor(Math.random() * 6); // 0 a 5

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
              Perito em Distribuição de Alimentos e Logística no Sul do Brasil
            </h1>
            <p className="text-xl mb-8 text-gray-400 leading-relaxed">
              "Há 47 anos conectando indústrias, mercados e consumidores com eficiência, agilidade e mais de 4 mil estabelecimentos abastecidos todos os meses."
            </p>
            <button className="bg-green-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
              Começar Agora
            </button>
          </div>
          
          {/* Lado direito - Simulação de credenciais vazadas */}
          <div className="text-center">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 max-w-sm mx-auto">
              <div className="flex items-center justify-center mb-2">
                <span className="text-red-400 text-sm">🔐</span>
                <span className="text-red-400 text-sm ml-2">
                  Credenciais: {credenciaisVazadas}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-red-400 text-sm">🔑</span>
                <span className="text-red-400 text-sm ml-2">
                  Senhas capturadas ({senhasCapturadas})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
