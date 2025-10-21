import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    observacoes: ''
  });
  const [curriculo, setCurriculo] = useState<File | null>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tamanho do arquivo (máximo 2MB para evitar erro 413)
      if (file.size > 2 * 1024 * 1024) {
        alert('Arquivo muito grande. Tamanho máximo: 2MB');
        e.target.value = '';
        return;
      }
      setCurriculo(file);
    }
  };

  // Função para converter arquivo para base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('=== INICIANDO ENVIO DO FORMULÁRIO ===');
      console.log('Dados do formulário:', formData);
      console.log('Arquivo selecionado:', curriculo ? curriculo.name : 'Nenhum');

      let curriculoBase64 = '';
      let curriculoInfo = 'Nenhum arquivo foi anexado.';

      // Converter arquivo para base64 se existir
      if (curriculo) {
        console.log('Convertendo arquivo para base64:', curriculo.name, 'Tamanho:', curriculo.size);
        
        try {
          curriculoBase64 = await fileToBase64(curriculo);
          console.log('Arquivo convertido com sucesso. Tamanho base64:', curriculoBase64.length);
          curriculoInfo = `Arquivo anexado: ${curriculo.name} (${(curriculo.size / 1024 / 1024).toFixed(2)}MB)`;
        } catch (base64Error) {
          console.error('Erro ao converter arquivo para base64:', base64Error);
          throw new Error('Falha ao processar o arquivo. Tente um arquivo menor.');
        }
      }

      // Preparar dados para envio com base64
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        message: formData.observacoes || 'Candidato interessado em trabalhar na Difrisul',
        to_name: 'Difrisul RH',
        reply_to: formData.email,
        // Informações adicionais
        subject: `Currículo de ${formData.nome}`,
        curriculo_anexado: curriculo ? `Sim - ${curriculo.name}` : 'Não',
        data_envio: new Date().toLocaleString('pt-BR'),
        // Informações do arquivo
        curriculo_info: curriculoInfo,
        file_url: curriculoBase64, // Enviando base64 como URL
        curriculo_url: curriculoBase64,
        curriculo_nome: curriculo ? curriculo.name : '',
        curriculo_tamanho: curriculo ? `${(curriculo.size / 1024 / 1024).toFixed(2)}MB` : '',
        // Instruções para o RH
        instrucoes_curriculo: curriculo ? 
          `CURRÍCULO ANEXADO EM BASE64:
          
Nome do arquivo: ${curriculo.name}
Tamanho: ${(curriculo.size / 1024 / 1024).toFixed(2)}MB
Email do candidato: ${formData.email}

O arquivo foi convertido para base64 e está incluído neste email.
Para visualizar, copie o conteúdo base64 e salve como arquivo com a extensão original.

Contato direto: ${formData.email}` :
          'Nenhum arquivo foi anexado.'
      };

      console.log('Parâmetros do template preparados:', {
        ...templateParams,
        file_url: curriculoBase64 ? 'BASE64_DATA_PRESENT' : 'NO_FILE'
      });

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
        observacoes: ''
      });
      setCurriculo(null);
      
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações Pessoais */}
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>

              {/* Anexo de Currículo */}
              <div>
                <label htmlFor="curriculo" className="block text-white font-semibold mb-2">
                  Anexar Currículo *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="curriculo"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A262E]/50 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Formatos aceitos: PDF, DOC, DOCX (máximo 2MB)
                  </p>
                  <p className="text-green-400 text-sm mt-1">
                    ✅ Nota: O arquivo será convertido para base64 e enviado junto com o email.
                  </p>
                  {curriculo && (
                    <p className="text-green-400 text-sm mt-1">
                      ✓ Arquivo selecionado: {curriculo.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Observações */}
              <div>
                <label htmlFor="observacoes" className="block text-white font-semibold mb-2">
                  Observações Adicionais
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
                    <span className="font-semibold">Currículo enviado com sucesso!</span>
                  </div>
                  <p className="text-green-300 text-sm">
                    Entraremos em contato em breve através do seu email.
                  </p>
                  {curriculo && (
                    <div className="mt-3 p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
                      <p className="text-green-300 text-sm">
                        <strong>Arquivo enviado:</strong> Seu currículo "{curriculo.name}" foi convertido para base64 e enviado junto com o email. 
                        Nossa equipe de RH poderá visualizar o arquivo diretamente.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center text-red-400 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="font-semibold">Erro ao enviar currículo</span>
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
                    'Enviar Currículo'
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