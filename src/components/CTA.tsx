export const CTA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f0ece3' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#1a3e22]">
          Pronto para Começar?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar o seu negócio a crescer 
          com produtos de qualidade e entrega confiável.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#1a3e22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153319] transition-colors">
            Fale Conosco
          </button>
          <button className="border border-[#1a3e22] text-[#1a3e22] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3e22] hover:text-white transition-colors">
            Ver Produtos
          </button>
        </div>
      </div>
    </section>
  );
};
