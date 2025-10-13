export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Sobre a Difrisul
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de 47 anos no mercado, a Difrisul é referência em distribuição de carnes e alimentos. 
              Nossa missão é levar qualidade, agilidade e confiança para o seu negócio.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com uma equipe especializada e infraestrutura moderna, garantimos produtos frescos 
              e entregas pontuais para nossos parceiros comerciais.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">47+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="/img/04.png" 
              alt="Sobre a Difrisul" 
              className="rounded-lg max-w-full h-auto transition-transform duration-300 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
