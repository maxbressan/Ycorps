export const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Sobre a Difrisul
            </h2>
            <div className="text-lg text-gray-300 mb-8 leading-relaxed space-y-4">
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
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">47+</div>
                <div className="text-gray-300">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-300">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="/img/01.png" 
              alt="Sobre a Difrisul" 
              className="rounded-lg max-w-full h-auto transition-transform duration-300 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
