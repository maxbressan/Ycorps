import { useState } from 'react';
import emailjs from '@emailjs/browser';
// import { uploadToGoogleDrive } from '@/services/googleDriveService';

export const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    observacoes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Configurações do EmailJS
  const EMAILJS_SERVICE_ID = 'service_ilw9yjs';
  const EMAILJS_TEMPLATE_ID = 'template_yjtnhsy';
  const EMAILJS_PUBLIC_KEY = 'Fw6OBGEppY5o9GWGJ';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('=== INICIANDO ENVIO DO FORMULÁRIO ===');
      console.log('Dados do formulário:', formData);

      // Preparar dados para envio com base64
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        from_phone: formData.celular,
        message: formData.observacoes || 'Candidato interessado em trabalhar na Difrisul',
        to_name: 'Difrisul RH',
        reply_to: formData.email,
        // Informações adicionais
        subject: `Interesse em trabalhar na Difrisul - ${formData.nome}`,
        data_envio: new Date().toLocaleString('pt-BR'),
        // Instruções para o RH
        instrucoes_curriculo: `📧 CANDIDATO INTERESSADO:
          
📧 Email: ${formData.email}
📱 Celular: ${formData.celular || 'Não informado'}
📅 Data: ${new Date().toLocaleString('pt-BR')}

💡 PRÓXIMOS PASSOS:
1. Entre em contato com o candidato pelo email: ${formData.email}
2. Solicite o envio do currículo por WhatsApp
3. WhatsApp: (49) 99918-7423

🔗 LINK WHATSAPP DIRETO:
https://wa.me/5549999187423?text=Olá! Recebi seu interesse em trabalhar na Difrisul. Por favor, envie seu currículo por aqui.

📞 Contato direto: ${formData.email}`
      };

      console.log('Parâmetros do template preparados:', templateParams);

      console.log('Enviando email via EmailJS...');

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('=== EMAIL ENVIADO COM SUCESSO ===');
      console.log('Resultado:', result);
      
      setSubmitStatus('success');
      
      // Limpar formulário após sucesso
      setFormData({
        nome: '',
        email: '',
        celular: '',
        observacoes: ''
      });
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error: any) {
      console.error('=== ERRO AO ENVIAR EMAIL ===');
      console.error('Erro completo:', error);
      
      setSubmitStatus('error');
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A262E] py-20 pt-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Trabalhe Conosco
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Faça parte da nossa equipe e contribua para o crescimento da Difrisul. 
              Estamos sempre em busca de talentos que compartilhem nossos valores de excelência e inovação.
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl text-white mb-6 text-center">
              Entre em Contato
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações Pessoais */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-white font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A262E]/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A262E]/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="celular" className="block text-white font-semibold mb-2">
                    Celular
                  </label>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0A262E]/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    placeholder="(49) 99999-9999"
                  />
                </div>
              </div>


              {/* Observações */}
              <div>
                <label htmlFor="observacoes" className="block text-white font-semibold mb-2">
                  Me conte um pouco sobre a sua trajetória profissional?
                </label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0A262E]/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all resize-none"
                  placeholder="Conte-nos mais sobre você, suas habilidades e motivações..."
                />
              </div>

              {/* Mensagens de Status */}
              {submitStatus === 'success' && (
                <div className="bg-green-900/50 border border-green-500/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center text-green-400 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Mensagem enviada com sucesso!</span>
                  </div>
                  <p className="text-green-300 text-sm">
                    Entraremos em contato em breve através do seu email.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center text-red-400 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="font-semibold">Erro ao enviar mensagem</span>
                  </div>
                  <p className="text-red-300 text-sm">
                    Tente novamente ou entre em contato conosco diretamente.
                  </p>
                </div>
              )}

              {/* Botão de Envio */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                        'Enviar Mensagem'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Por que trabalhar na Difrisul?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>47+ anos de tradição e estabilidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Oportunidades de crescimento profissional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Ambiente de trabalho colaborativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Benefícios e salários competitivos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Processo Seletivo</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                  <span>Análise do currículo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                  <span>Entrevista inicial</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                  <span>Avaliação técnica</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                  <span>Entrevista final</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};