export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dra. Claudia Pies Biffi",
      role: "Diretora Executiva",
      description: "Com mais de 15 anos de experiência em avicultura industrial e MBA em Gestão do Agronegócio, lidera estratégias de escalabilidade e eficiência operacional, integrando a gestão agroindustrial à inovação em biotecnologia.",
      image: "/img/10.png"
    },
    {
      name: "M.Sc. Camila Martins Conti",
      role: "Diretora de Operações e Qualidade",
      description: "Especialista em processos de incubação e sanidade avícola, conduz o controle rigoroso de qualidade dos anticorpos Ycorps, garantindo padrões reprodutíveis e excelência científica. Representa a empresa em eventos técnicos e parcerias estratégicas.",
      image: "/img/11.png"
    },
    {
      name: "M.Sc. Leonardo Antonio Fernandes",
      role: "Diretor Técnico",
      description: "Doutorando em Bioquímica pela UDESC, é referência nacional em consultoria para fluxos de purificação e extração de biomoléculas, contribuindo para o avanço tecnológico da biotecnologia aplicada.",
      image: "/img/12.png"
    },
    {
      name: "Dra. Sandra Davi Traverso",
      role: "Consultora Técnica",
      description: "Professora da UDESC e especialista em diagnóstico histopatológico veterinário, oferece expertise em imunodiagnóstico e sanidade animal, assegurando a qualidade científica dos reagentes desenvolvidos pela Ycorps.",
      image: "/img/13.png"
    }
  ];

  return (
    <section id="team" className="py-6 md:py-8 bg-[#1a3e22]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título e subtítulo centralizados */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">
              Equipe Técnica e Quadro Societário
            </h2>
            <p className="text-sm md:text-base text-white/85 max-w-4xl mx-auto leading-relaxed">
              Intelecto, Ciência e Propósito que Transformam Biotecnologia em Soluções Nacionais
            </p>
          </div>

          {/* Texto introdutório */}
          <div className="mb-6 md:mb-8">
            <p className="text-xs md:text-sm text-white/85 text-justify max-w-4xl mx-auto leading-relaxed">
              A força da Ycorps está na sinergia de uma equipe multidisciplinar que une expertise em avicultura, bioquímica molecular e diagnóstico veterinário. Graduados pela Universidade do Estado de Santa Catarina (UDESC), nossos fundadores e diretores compartilham a missão de impulsionar a autossuficiência biotecnológica do Brasil por meio da produção nacional de anticorpos IgY de pureza superior.
            </p>
          </div>

          {/* Lista de membros da equipe */}
          <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="grid md:grid-cols-[140px_1fr] gap-3 md:gap-4 items-center">
                  {/* Foto à esquerda */}
                  <div className="flex justify-center md:justify-start">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white/20 shadow-lg overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover scale-150"
                      />
                    </div>
                  </div>
                  
                  {/* Texto à direita */}
                  <div className="text-center md:text-left">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/90 mb-2 font-medium">
                      {member.role}
                    </p>
                    <p className="text-xs text-white/85 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* Linha separadora (exceto no último item) */}
                {index < teamMembers.length - 1 && (
                  <div className="mt-4 md:mt-6 border-b border-white/20"></div>
                )}
              </div>
            ))}
          </div>

          {/* Fechamento inspiracional */}
          <div className="text-center border-t border-white/20 pt-4 md:pt-6">
            <p className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">
              Juntos, impulsionamos a ciência brasileira.
            </p>
            <p className="text-xs md:text-sm text-white/85 max-w-3xl mx-auto leading-relaxed italic">
              A união entre pesquisa, inovação e gestão estratégica torna a Ycorps um pilar para o desenvolvimento de soluções diagnósticas confiáveis, éticas e sustentáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

