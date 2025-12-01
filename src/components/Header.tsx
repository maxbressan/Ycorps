export const Header = () => {
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

  const handleContatoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Se estamos na página principal, apenas faz scroll
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, redireciona para a principal
      window.location.href = '/';
    }
  };

  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Se estamos na página principal, apenas faz scroll
    if (window.location.pathname === '/') {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, redireciona para a principal
      window.location.href = '/';
    }
  };

  const handleLogoClick = () => {
    // Se estamos na página principal, apenas faz scroll para o hero
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

  return (
    <header className="bg-[#f0ece3]/70 fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm">
      {/* Imagem posicionada acima do cabeçalho - desktop */}
      <div className="hidden md:block absolute left-0 md:left-4 z-[60]" style={{ top: '-15px' }}>
        <img 
          src="/img/01.png" 
          alt="Logo Ycorps" 
          className="w-28 h-28 object-contain cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        />
      </div>
      
      {/* Imagem centralizada no topo - mobile */}
      <div className="md:hidden flex justify-center pt-2 pb-1">
        <img 
          src="/img/01.png" 
          alt="Logo Ycorps" 
          className="h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        />
      </div>
      
      {/* Conteúdo do cabeçalho */}
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Espaço vazio no lado esquerdo para compensar a imagem - apenas desktop */}
          <div className="hidden md:block w-28"></div>
          
          {/* Menu de navegação central - apenas desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={handleInicioClick} className="text-[#1a3e22] hover:text-[#1a3e22] transition-colors relative group">
              Início
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a3e22] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" onClick={handleContatoClick} className="text-[#1a3e22] hover:text-[#1a3e22] transition-colors relative group">
              Contato
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a3e22] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" onClick={handleSobreClick} className="text-[#1a3e22] hover:text-[#1a3e22] transition-colors relative group">
              Sobre
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a3e22] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" onClick={handleServicosClick} className="text-[#1a3e22] hover:text-[#1a3e22] transition-colors relative group">
              Serviços
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a3e22] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#" onClick={handleFAQClick} className="text-[#1a3e22] hover:text-[#1a3e22] transition-colors relative group">
              FAQ
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a3e22] transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>
          
          {/* Botão CTA no canto direito */}
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden md:block bg-[#f0ece3] border border-[#1a3e22]/20 hover:bg-[#1a3e22] hover:border-[#1a3e22] text-[#1a3e22] hover:text-white px-4 md:px-6 py-2 rounded-full transition-colors font-medium text-sm md:text-base"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </header>
  );
};
