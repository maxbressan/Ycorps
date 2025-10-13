export const CTA = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Pronto para Começar?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar o seu negócio a crescer 
          com produtos de qualidade e entrega confiável.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Fale Conosco
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
            Ver Produtos
          </button>
        </div>
      </div>
    </section>
  );
};
