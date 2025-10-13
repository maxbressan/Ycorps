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

  return (
    <header className="bg-black/70 fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-[0_4px_20px_rgba(255,255,255,0.1)] backdrop-blur-sm">
      {/* Imagem posicionada acima do cabeçalho */}
      <div className="absolute -top-10 left-4 z-[60]">
        <img 
          src="/img/01.png" 
          alt="Logo Difrisul" 
          className="w-40 h-40 object-contain"
        />
      </div>
      
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Espaço vazio no lado esquerdo para compensar a imagem */}
          <div className="w-40"></div>
          
          {/* Menu de navegação central */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={handleInicioClick} className="text-white hover:text-gray-300 transition-colors">Início</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contato</a>
            <a href="#" onClick={handleSobreClick} className="text-white hover:text-gray-300 transition-colors">Sobre</a>
            <a href="#" onClick={handleServicosClick} className="text-white hover:text-gray-300 transition-colors">Serviços</a>
            <a href="#" onClick={handleFAQClick} className="text-white hover:text-gray-300 transition-colors">FAQ</a>
          </nav>
          
          {/* Botão CTA no canto direito */}
          <button className="bg-black border border-white/20 hover:bg-green-600 hover:border-green-600 text-white px-6 py-2 rounded-full transition-colors font-medium">
            Entrar em Contato
          </button>
        </div>
      </div>
    </header>
  );
};
