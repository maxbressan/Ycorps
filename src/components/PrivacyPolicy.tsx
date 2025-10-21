export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0A262E] text-white">
      <div className="container mx-auto px-4 py-20 pt-40">
        <div className="max-w-4xl mx-auto">
          {/* Botão para voltar à página principal */}
          <div className="mb-8">
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar à Página Principal
            </button>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Política de Privacidade e Proteção de Dados Pessoais
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Difrisul</p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              A Difrisul valoriza e respeita a privacidade e proteção dos dados pessoais de seus usuários, clientes, parceiros e visitantes. Esta Política de Privacidade tem como objetivo esclarecer como coletamos, utilizamos, armazenamos, compartilhamos e protegemos seus dados, além de informar sobre seus direitos legais relacionados à Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-green-500 pl-4">Fontes de dados pessoais</h2>
            <p className="mb-6">
              Esta política se aplica a todas as operações de tratamento de dados realizadas pela Difrisul, em canais on-line e off-line, como sites, sistemas, aplicativos, redes sociais, atendimento ao cliente, eventos, formulários e interações comerciais ou institucionais.
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-red-500 pl-4">TIPOS DE DADOS PESSOAIS COLETADOS</h2>
            <p className="mb-4">Coletamos, entre outros:</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6 text-green-400">Informações de Contato:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Nome, telefone, e-mail, endereço, redes sociais</li>
              <li>Dados de login: usuário e senha criptografada</li>
              <li>Informações demográficas: idade, gênero, localização, interesses</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-red-400">Dados Técnicos:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>IP, dispositivo, navegador, sistema operacional</li>
              <li>Dados de uso: cliques, páginas acessadas, tempo de navegação</li>
              <li>Conteúdo gerado por usuários: textos, fotos, vídeos, comentários</li>
              <li>Dados financeiros: em casos de compra ou contratação de serviços</li>
              <li>Dados sensíveis: tratados apenas com base legal e consentimento</li>
            </ul>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-green-500 pl-4">USO DE COOKIES E TECNOLOGIAS SEMELHANTES</h2>
            <p className="mb-4">Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Melhorar a experiência do usuário</li>
              <li>Personalizar conteúdos e anúncios</li>
              <li>Garantir segurança e desempenho</li>
              <li>Analisar estatísticas de navegação</li>
            </ul>
            <p className="mb-6">
              Você pode configurar seu navegador para recusar cookies ou gerenciar preferências nos nossos sistemas de consentimento.
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-green-500 pl-4">FINALIDADES DO TRATAMENTO DE DADOS</h2>
            <p className="mb-4">Os dados pessoais são utilizados para:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-300">
              <li>Prestar suporte, atendimento e serviços contratados</li>
              <li>Processar pedidos, pagamentos e autenticação</li>
              <li>Realizar ações de marketing, promoções e comunicações</li>
              <li>Personalizar a experiência nos nossos sistemas</li>
              <li>Melhorar produtos, serviços e campanhas</li>
              <li>Prevenir fraudes e garantir segurança</li>
              <li>Cumprir obrigações legais e contratuais</li>
            </ul>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-red-500 pl-4">COMPARTILHAMENTO DE DADOS PESSOAIS</h2>
            <p className="mb-4">Seus dados podem ser compartilhados com:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Prestadores de serviços e parceiros estratégicos</li>
              <li>Plataformas de pagamento e auditoria</li>
              <li>Órgãos públicos mediante obrigação legal</li>
              <li>Terceiros em casos de fusão, aquisição ou reestruturação</li>
            </ul>
            <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-4 rounded-lg border border-red-500/20 mb-6">
              <p className="font-semibold text-red-300 text-center">
                🛡️ Jamais vendemos dados pessoais a terceiros.
              </p>
            </div>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-red-500 pl-4">RETENÇÃO E ELIMINAÇÃO DOS DADOS</h2>
            <p className="mb-4">Seus dados serão mantidos apenas pelo tempo necessário para:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Cumprir as finalidades descritas nesta política</li>
              <li>Atender obrigações legais, regulatórias ou judiciais</li>
            </ul>
            <p className="mb-6">
              Após o término do tratamento, os dados serão eliminados, salvo exceções legais.
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-green-500 pl-4">MEDIDAS DE SEGURANÇA E PROTEÇÃO</h2>
            <p className="mb-4">Adotamos controles técnicos e organizacionais para proteger seus dados contra acessos não autorizados, perdas ou incidentes, incluindo:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Acesso restrito e monitorado</li>
              <li>Criptografia de dados sensíveis</li>
              <li>Ambientes operacionais seguros</li>
              <li>Backup e controle de integridade</li>
            </ul>
            <p className="mb-6">
              O usuário também é responsável pela segurança da sua conta e senha.
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-red-500 pl-4">DIREITOS DO TITULAR DE DADOS</h2>
            <p className="mb-4">Você pode, a qualquer momento:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Confirmar a existência do tratamento</li>
              <li>Acessar, corrigir, atualizar ou excluir seus dados</li>
              <li>Solicitar portabilidade ou anonimização</li>
              <li>Revogar consentimentos dados anteriormente</li>
              <li>Obter informações sobre compartilhamento com terceiros</li>
            </ul>
            <p className="mb-6">
              A solicitação pode requerer verificação da identidade por documento ou autenticação digital.
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-green-500 pl-4">SUAS ESCOLHAS SOBRE COMO UTILIZAMOS SEUS DADOS</h2>
            <p className="mb-4">Você tem liberdade para:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-300">
              <li>Recusar cookies via navegador ou nosso painel de controle</li>
              <li>Cancelar comunicações de marketing a qualquer momento</li>
              <li>Controlar o uso de seus dados para personalização de conteúdo ou publicidade direcionada</li>
            </ul>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-red-500 pl-4">ALTERAÇÕES NESTA POLÍTICA</h2>
            <p className="mb-6">
              A Difrisul se reserva o direito de atualizar esta Política a qualquer momento. Recomendamos revisá-la periodicamente para acompanhar possíveis mudanças.
            </p>

            <h2 className="text-2xl mb-4 mt-8 text-white border-l-4 border-green-500 pl-4">COMO ENTRAR EM CONTATO</h2>
            <p className="mb-4">
              Se tiver dúvidas, solicitações ou quiser exercer seus direitos como titular de dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-red-900/30 p-6 rounded-lg border border-green-500/20">
              <p className="mb-2">
                <strong className="text-green-400">E-mail:</strong> 
                <span className="text-white font-mono">marcelo@nos.com.vc</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
