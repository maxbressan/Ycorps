import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que exatamente a Ycorps produz?",
      answer: "A Ycorps desenvolve e purifica anticorpos IgY obtidos a partir de ovos, usados em diagnóstico, pesquisa e soluções biotecnológicas que exigem precisão e estabilidade."
    },
    {
      question: "O que diferencia os anticorpos IgY dos anticorpos tradicionais?",
      answer: "O IgY oferece maior estabilidade, menor variação entre lotes e redução de interferências cruzadas. Isso resulta em análises mais consistentes em comparação a métodos tradicionais."
    },
    {
      question: "Por que confiar em anticorpos produzidos no Brasil?",
      answer: "A produção nacional permite controle direto sobre cada etapa, do desenvolvimento à purificação, garantindo rastreabilidade completa, menor risco de ruptura de fornecimento e padrões equivalentes aos laboratórios internacionais."
    },
    {
      question: "A qualidade dos anticorpos é comparável aos importados?",
      answer: "Sim. O processo segue rigor técnico, controle de pureza e testes de desempenho que asseguram equivalência ou superioridade em estabilidade e reprodutibilidade."
    },
    {
      question: "Quem pode utilizar anticorpos desenvolvidos pela Ycorps?",
      answer: "Laboratórios de diagnóstico, universidades, centros de pesquisa, indústrias e empresas que precisam de soluções confiáveis para análise ou desenvolvimento tecnológico."
    },
    {
      question: "A Ycorps cria anticorpos sob demanda?",
      answer: "Sim. Projetos personalizados são desenvolvidos quando a aplicação exige um anticorpo específico, garantindo alinhamento ao objetivo científico de cada cliente."
    },
    {
      question: "Como funciona o processo de desenvolvimento de um anticorpo?",
      answer: "O projeto passa por definição do alvo, imunização, coleta, purificação e validação. Cada etapa é controlada, documentada e auditável para garantir padrões consistentes."
    },
    {
      question: "O IgY é seguro?",
      answer: "O método é considerado seguro por dispensar procedimentos invasivos e permitir produção padronizada, livres de agentes que interferem em análises laboratoriais."
    },
    {
      question: "A Ycorps atende empresas que estão iniciando em biotecnologia?",
      answer: "Sim. O suporte técnico ajuda gestores e equipes a escolherem soluções adequadas, mesmo sem experiência prévia em anticorpos."
    },
    {
      question: "Como solicitar um orçamento?",
      answer: "Basta preencher o formulário de contato do site informando o tipo de solução requerida, aplicação e prazo desejado."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#f0ece3]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-left text-[#1a3e22] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-700 text-lg mb-12">
            Encontre respostas rápidas sobre anticorpos IgY, nossos produtos e processos.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 border border-[#1a3e22]/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#1a3e22]/60"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-[#1a3e22]"
                >
                  <span className="text-base pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
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
                      <div className="border-t border-[#1a3e22]/30 pt-4">
                      <p className="text-gray-700 leading-relaxed">
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
