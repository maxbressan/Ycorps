export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#0A262E]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 text-white text-center md:text-left">
              Sobre a Difrisul
            </h2>
            <div className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed space-y-3 md:space-y-4">
              <p>
                Fundada em 1978, a Difrisul transformou-se de uma distribuidora regional em um operador logístico estratégico.
              </p>
              <p>
                Oferecemos soluções completas em armazenagem, transporte, garantindo produtos frescos, rastreabilidade e entregas no prazo.
              </p>
              <p>
                Nosso compromisso é conectar o campo, a indústria e o varejo com inteligência e precisão logística.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-green-600 mb-1 md:mb-2">47+</div>
                <div className="text-sm md:text-base text-gray-300">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-green-600 mb-1 md:mb-2">1000+</div>
                <div className="text-sm md:text-base text-gray-300">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="text-center order-1 md:order-2">
            <img 
              src="/img/01.png" 
              alt="Sobre a Difrisul" 
              className="rounded-lg max-w-full h-auto transition-transform duration-300 hover:scale-105 hover:rotate-1 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
