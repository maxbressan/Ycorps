export const Recognition = () => {
  const achievements = [
    {
      icon: "🏅",
      title: "5ª Edição do Projeto NASCER, SEBRAE, SCTI e FAPESC (Fev/2025)",
      description: "Entre mais de mil iniciativas, a Ycorps foi destaque nacional, conquistando R$ 220 mil em seed funding destinados à aquisição de insumos e otimização de processos de purificação de biomoléculas.",
      highlight: "Essa conquista consolida nossa posição como uma das startups de maior potencial de crescimento na área de biotecnologia aplicada."
    },
    {
      icon: "🥇",
      title: "Orion Awards 2K25 — Startup Revelação e Destaque Inovação UDESC",
      description: "Reconhecida como Startup Revelação, a Ycorps se destaca pela abordagem disruptiva na produção de bioinsumos escaláveis.",
      highlight: "O Prêmio Destaque Inovação UDESC reforça nossa contribuição interdisciplinar e o compromisso com práticas científicas rigorosas, que elevam nossa credibilidade técnica e regulatória."
    },
    {
      icon: "🤝",
      title: "Parcerias Estratégicas",
      description: "Nosso crescimento é sustentado por colaborações essenciais com o Orion Parque Tecnológico, a Universidade do Estado de Santa Catarina (UDESC) e startups como a Scienco Biotech — parcerias que nos permitem acesso a infraestrutura avançada, equipamentos de ponta e oportunidades de escalabilidade industrial."
    }
  ];

  return (
    <section id="recognition" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Headline e texto introdutório */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1a3e22] mb-4 md:mb-6">
              Reconhecimento e Inovação
            </h2>
            <p className="text-lg md:text-xl text-[#1a3e22] font-semibold mb-4 md:mb-6">
              Excelência comprovada por conquistas que impulsionam a biotecnologia nacional.
            </p>
            <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A inovação da Ycorps é continuamente validada por prêmios estratégicos e parcerias que fortalecem nossa atuação em purificação industrial de anticorpos. Cada conquista reflete o compromisso da equipe com ciência aplicada, eficiência e impacto no setor biotecnológico.
            </p>
          </div>

          {/* Cards com prêmios e parcerias */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#f0ece3] to-white border-2 border-[#1a3e22]/20 rounded-lg p-6 md:p-8 hover:shadow-lg hover:border-[#D0B490]/50 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl mb-4 text-center">
                  {achievement.icon}
                </div>
                <h3 className={`text-base md:text-lg font-semibold text-[#1a3e22] mb-3 md:mb-4 leading-tight ${index === 1 || index === 2 ? 'text-center' : ''}`}>
                  {achievement.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-700 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                {achievement.highlight && (
                  <p className="text-xs md:text-sm text-[#D0B490] font-medium leading-relaxed border-l-4 border-[#D0B490] pl-3">
                    {achievement.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Frase de fechamento */}
          <div className="text-center border-t-2 border-[#1a3e22]/20 pt-8 md:pt-12">
            <p className="text-xl md:text-2xl font-bold text-[#1a3e22] mb-4 md:mb-6">
              Inovação que conquista. Ciência que transforma.
            </p>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cada prêmio e parceria representa um passo a mais na missão da Ycorps de tornar o Brasil referência em purificação e aplicação industrial de anticorpos IgY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

