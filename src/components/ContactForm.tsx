import { useState } from 'react';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome') as string;
    const empresa = formData.get('empresa') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const mensagem = formData.get('mensagem') as string;

    // Formatar mensagem para WhatsApp com perguntas em negrito
    const mensagemFormatada = `Olá! Gostaria de entrar em contato com a Ycorps:

*Nome:* ${nome}
${empresa ? `*Empresa:* ${empresa}\n` : ''}*E-mail:* ${email}
${telefone ? `*Telefone:* ${telefone}\n` : ''}*Mensagem:* ${mensagem}`;

    // Codificar a mensagem para URL
    const mensagemEncoded = encodeURIComponent(mensagemFormatada);
    
    // Número do WhatsApp da Ycorps
    const whatsappNumber = '5549988417900';
    
    // Criar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensagemEncoded}`;
    
    // Redirecionar para WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsLoading(false);
    
    // Limpar formulário
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-[#f0ece3]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Formulário - Lado Esquerdo */}
            <div>
              <h2 className="text-3xl text-[#1a3e22] mb-4">
                Entre em Contato
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Solicite uma proposta personalizada para sua empresa.
              </p>
              
              <div className="bg-white/80 rounded-2xl p-8 border border-[#1a3e22]/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-[#1a3e22] text-sm font-medium mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#1a3e22]/30 rounded-lg text-[#1a3e22] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/50 transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-[#1a3e22] text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        className="w-full px-4 py-3 bg-white border border-[#1a3e22]/30 rounded-lg text-[#1a3e22] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/50 transition-all"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[#1a3e22] text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#1a3e22]/30 rounded-lg text-[#1a3e22] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/50 transition-all"
                        placeholder="voce@empresa.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-[#1a3e22] text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        className="w-full px-4 py-3 bg-white border border-[#1a3e22]/30 rounded-lg text-[#1a3e22] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/50 transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-[#1a3e22] text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-[#1a3e22]/30 rounded-lg text-[#1a3e22] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a3e22]/50 transition-all resize-none"
                      placeholder="Conte um pouco sobre sua ideia..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-[#1a3e22] hover:bg-[#153319] disabled:bg-[#1a3e22]/50 disabled:cursor-not-allowed text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <span>Enviar</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Texto - Lado Direito */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-[#1a3e22] mb-4">
                  Por que escolher a Ycorps?
                </h3>
                    <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                      <p>
                        Com quase cinco décadas de atuação, a Ycorps se firmou como referência em logística e distribuição de alimentos no sul do país.
                      </p>
                      <p>
                        Contamos com estrutura moderna, mais de 1.000 posições pallets e operações diárias em Santa Catarina, Rio Grande do Sul e Paraná.
                      </p>
                      <p>
                        Nosso diferencial está na combinação entre tecnologia, agilidade e relações sólidas com grandes marcas nacionais e internacionais.
                      </p>
                    </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
