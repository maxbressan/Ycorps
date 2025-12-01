import React, { useState } from 'react';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');

  const handleWhatsAppClick = () => {
    if (nome.trim() && empresa.trim()) {
      const message = `Olá! Meu nome é ${nome} da empresa ${empresa}. Gostaria de saber mais sobre os serviços da Ycorps.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `http://wa.me/5549988417900?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setIsModalOpen(false);
      setNome('');
      setEmpresa('');
    }
  };

  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Se estamos na página principal, apenas faz scroll
    if (window.location.pathname === '/') {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, redireciona para a principal
      window.location.href = '/';
    }
  };

  const handleSobreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Se estamos na página principal, apenas faz scroll
    if (window.location.pathname === '/') {
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Se estamos em outra página, redireciona para a principal
      window.location.href = '/';
    }
  };

  const handleServicosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Se estamos na página principal, apenas faz scroll
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, redireciona para a principal
      window.location.href = '/';
    }
  };


  return (
    <footer className="bg-[#f0ece3] py-16 relative">
      {/* Container principal com borda redonda e sombra branca */}
      <div className="container mx-auto px-4">
        <div className="bg-[#f0ece3] rounded-3xl p-8 border-t border-[#1a3e22]/20 relative overflow-hidden">
          {/* Sombra removida */}
          {/* Watermark removida conforme solicitado */}
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Seção Logo */}
            <div className="md:col-span-1 text-center md:text-left">
              <div className="mb-4 -mt-16 md:-mt-32">
                <img 
                  src="/img/01.png" 
                  alt="Logo Ycorps" 
                  className="w-48 h-48 md:w-96 md:h-96 object-contain mx-auto md:mx-0"
                />
              </div>
            </div>
            
            {/* Seção Endereço */}
            <div className="text-center md:text-left">
              <p className="text-gray-700 text-sm">
                <span className="text-lg text-[#1a3e22]">Sede Lages</span><br />
                <span className="mt-2 block">
                  R. Heitor Villa Lobos, 525 - São Francisco, Lages - SC, 88506-400
                </span>
              </p>
            </div>
          
            {/* Seção Navegação */}
            <div className="text-center md:text-left">
              <h4 className="text-[#1a3e22] mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" onClick={handleInicioClick} className="hover:text-[#1a3e22] transition-colors">Início</a></li>
                <li><a href="#" onClick={handleSobreClick} className="hover:text-[#1a3e22] transition-colors">Sobre</a></li>
                <li><a href="#" onClick={handleServicosClick} className="hover:text-[#1a3e22] transition-colors">Serviços</a></li>
                <li><a href="/privacy" className="hover:text-[#1a3e22] transition-colors">Política de Privacidade</a></li>
                <li><a href="#contact" className="hover:text-[#1a3e22] transition-colors">Contato</a></li>
              </ul>
            </div>
          
            {/* Seção Redes Sociais */}
            <div className="text-center md:text-left">
              <h4 className="text-[#1a3e22] mb-4">Redes Sociais</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.instagram.com/ycorps_/" target="_blank" rel="noopener noreferrer" className="text-[#1a3e22] hover:text-[#153319] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ycorps/" target="_blank" rel="noopener noreferrer" className="text-[#1a3e22] hover:text-[#153319] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-700 text-sm">
            ©Ycorps. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* Imagem flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <img 
          src="/img/03.png" 
          alt="Ycorps" 
          className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal WhatsApp */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#f0ece3]/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-lg max-w-md w-full mx-4">
            {/* Header */}
            <div className="bg-[#1a3e22] text-white p-4 rounded-t-lg flex justify-between items-center">
              <p className="text-sm font-medium">
                Olá! Preencha os campos abaixo para iniciar a conversa no WhatsApp
              </p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 text-xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome *"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3e22]"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Empresa *"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3e22]"
                />
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                disabled={!nome.trim() || !empresa.trim()}
                className="w-full bg-[#1a3e22] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#153319] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Iniciar a conversa
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
