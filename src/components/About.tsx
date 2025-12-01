export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#1a3e22]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 text-white text-center md:text-left">
              Sobre a Ycorps
            </h2>
            <div className="text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed space-y-3 md:space-y-4">
              <p>
                A Ycorps nasceu para resolver um desafio real: a dependência do Brasil de anticorpos importados caros, demorados e muitas vezes inconsistentes.
              </p>
              <p>
                Combinando ciência, tecnologia e propósito, criamos um modelo inovador de produção e purificação de anticorpos a partir de ovos (IgY), oferecendo ao mercado nacional uma alternativa confiável, acessível e tecnicamente superior.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-white mb-1 md:mb-2">00+</div>
                <div className="text-sm md:text-base text-white/90">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-white mb-1 md:mb-2">000+</div>
                <div className="text-sm md:text-base text-white/90">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="text-center order-1 md:order-2">
            <img 
              src="/img/02.png" 
              alt="Sobre a Ycorps" 
              className="rounded-lg max-w-full h-auto transition-transform duration-300 hover:scale-105 hover:rotate-1 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
