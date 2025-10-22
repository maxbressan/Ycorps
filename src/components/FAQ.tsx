import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é a Difrisul?",
      answer: "A Difrisul é uma empresa com 47 anos de história no mercado de alimentos e logística, atuando como operador logístico e distribuidor no sul do Brasil. Conectamos indústrias, mercados e consumidores, oferecendo soluções completas em transporte, armazenagem e distribuição de produtos alimentícios."
    },
    {
      question: "Onde a Difrisul atua?",
      answer: "A Difrisul atende empresas em todo o sul do Brasil especialmente em Santa Catarina, com capacidade logística e frota própria preparada para diferentes demandas do setor alimentício."
    },
    {
      question: "Quais serviços logísticos a Difrisul oferece?",
      answer: "Oferecemos soluções integradas em armazenagem, transporte, picking, crossdocking e distribuição. Nosso diferencial está na rastreabilidade, agilidade e inteligência aplicada em cada etapa da cadeia logística."
    },
    {
      question: "A Difrisul trabalha apenas com produtos alimentícios?",
      answer: "Nosso foco principal é o setor alimentício, com destaque para produtos secos, resfriados e congelados. No entanto, avaliamos parcerias estratégicas em outros segmentos que exigem excelência logística."
    },
    {
      question: "O que diferencia a Difrisul de outras distribuidoras e operadores logísticos?",
      answer: "Além de uma estrutura moderna e mais de 1.000 posições pallets, a Difrisul se diferencia pela confiabilidade construída ao longo de décadas, pelo uso de tecnologia na gestão de estoques e pela agilidade nas entregas em toda a região sul."
    },
    {
      question: "A Difrisul possui armazém próprio?",
      answer: "Sim. Contamos com centro de distribuição próprio, equipado com sistemas de controle e rastreabilidade que garantem a qualidade e a segurança dos produtos armazenados."
    },
    {
      question: "Como funciona o processo de transporte da Difrisul?",
      answer: "A Difrisul realiza o transporte com frota própria e equipe treinada, assegurando entregas dentro do prazo e conforme as condições ideais para cada tipo de produto alimentício."
    },
    {
      question: "Quais marcas e empresas a Difrisul atende?",
      answer: "Atuamos com grandes marcas nacionais e internacionais do setor alimentício, consolidando parcerias de longo prazo baseadas em confiança, qualidade e eficiência logística."
    },
    {
      question: "É possível contratar apenas o serviço de armazenagem da Difrisul?",
      answer: "Sim. Nossas soluções são modulares — o cliente pode optar apenas pela armazenagem, transporte ou pela gestão completa da cadeia logística."
    },
    {
      question: "Como entrar em contato com a Difrisul para solicitar uma proposta?",
      answer: "Você pode entrar em contato pelo formulário disponível no site ou através dos canais oficiais da Difrisul. Nossa equipe comercial está pronta para entender suas necessidades e propor a melhor solução logística."
    },
    {
      question: "A Difrisul oferece soluções personalizadas para cada cliente?",
      answer: "Sim. Analisamos cada operação de forma estratégica para desenhar soluções sob medida, otimizando custos, tempo e performance logística."
    },
    {
      question: "A Difrisul é uma distribuidora ou um operador logístico?",
      answer: "A Difrisul nasceu como distribuidora de alimentos e evoluiu para se tornar um operador logístico estratégico, unindo tradição, tecnologia e visão de futuro para potencializar os resultados dos nossos clientes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0A262E]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-left text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Encontre respostas rápidas sobre nossos serviços, processos e formas de contato.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0A262E] border border-gray-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-600/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white"
                >
                  <span className="text-base pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
