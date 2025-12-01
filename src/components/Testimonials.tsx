import { useState } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Vinícius Zanella",
      company: "Pizzaria Zanella",
      location: "Joinville (SC)",
      text: "Estamos há aproximadamente 15 anos sendo atendidos pela empresa Ycorps. Temos apenas elogios. A logística sempre está atenta a nos atender da melhor maneira e o setor de cobranças é muito responsável! Toda mercadoria que é entregue é de alta validade! Temos só a agradecer a toda equipe Ycorps!",
      initials: "VZ"
    },
    {
      name: "Silvia A. Biano",
      company: "Croasonho Café",
      location: "Joinville (SC)",
      text: "Somos parceiros da Ycorps há 13 anos. E sempre fomos atendidos com muita eficiência e dedicação tanto pela vendedora quanto pela agilidade na entrega do motorista. Temos a certeza e confiança que tudo que acordamos nos pedidos irão chegar conforme o combinado. Muito obrigado. A equipe Croasonho agradece.",
      initials: "SB"
    },
    {
      name: "Jeovani Amancio",
      company: "JK Restaurante e Choperia",
      location: "Joinville (SC)",
      text: "Nós do JK Restaurantes viemos por meio desta dizer que é um prazer contar com a parceria de mais de 10 anos com a Ycorps. Ótimo atendimento efetuado pela vendedora, com comprometimento em correr atrás. Só elogios também aos entregadores que sempre fazem as entregas com sorriso no rosto e esbanjando simpatia. Agradecemos inúmeras vezes em que a Ycorps se fez parceira com o JK Restaurantes. Nos orgulhamos de vencer obstáculos e juntos ter coragem para enfrentar o dia a dia. Nós do JK Restaurante temos admiração e orgulho da parceria com a Ycorps.",
      initials: "JA"
    },
    {
      name: "Thiago Fortes Kollet",
      company: "N1 Chicken",
      location: "Itapema (SC)",
      text: "Em 2022, começamos nossa parceria com a Ycorps, empresa que nos atendeu com muita agilidade e comprometimento. A Ycorps conta com excelentes profissionais, o que facilita o orçamento, a entrega e o pagamento. Conseguimos fazer nossas cotações e pedidos de uma maneira direta com a representante comercial, profissional dedicada e preocupada em satisfazer as necessidades do cliente. Gostaria de expressar nossas satisfações pelos serviços prestados pela Ycorps e para quem estiver aqui lendo e procurando uma empresa séria e comprometida com o cliente, está no lugar certo.",
      initials: "TK"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#f0ece3]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#1a3e22] mb-4">
              DEPOIMENTOS
            </h2>
          </div>

          {/* Carrossel de Depoimentos */}
          <div className="max-w-3xl mx-auto">
            {/* Texto do Depoimento */}
            <div className="mb-12">
              <blockquote className="text-lg text-gray-700 leading-relaxed text-left">
                "{currentTestimonial.text}"
              </blockquote>
            </div>

            {/* Autor do Depoimento */}
            <div className="flex items-center justify-end mb-16">
              <div className="text-right">
                <h3 className="text-xl text-[#1a3e22] mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-lg text-[#1a3e22]">
                  {currentTestimonial.company}
                </p>
                <p className="text-sm text-gray-700">
                  {currentTestimonial.location}
                </p>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="text-[#1a3e22] hover:text-[#153319] transition-colors text-lg"
              >
                Anterior
              </button>

              {/* Indicadores */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#1a3e22]' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="text-[#1a3e22] hover:text-[#153319] transition-colors text-lg"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
