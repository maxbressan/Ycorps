export const Linktree = () => {
  const links = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      text: "Fale Conosco",
      url: "http://wa.me/5549988417900",
      target: "_blank"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
        </svg>
      ),
      text: "Acesse Nosso Site",
      url: "/",
      target: "_self"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      text: "Conheça Nossos Produtos",
      url: "/#services",
      target: "_self"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      text: "Seja Nosso Cliente",
      url: "http://wa.me/5549988417900",
      target: "_blank"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      text: "Nossa Localização",
      url: "https://www.google.com/maps/place/Orion+Parque/@-27.801966,-50.3731394,14z/data=!4m7!3m6!1s0x94e018a5511ae4d1:0xac564cb5d8c50c01!8m2!3d-27.801966!4d-50.3370905!15sChVvcmlvbiBwYXJxdWUgc2FsYSAxMTRaFyIVb3Jpb24gcGFycXVlIHNhbGEgMTE0kgEPdGVjaG5vbG9neV9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSmVXZzVkVGRaYTJRelJpMUJSUkFCqgFLEAEqDCIIc2FsYSAxMTQoDDIeEAEiGr95E95JFoyv4yUp9hO5tr3tfzTVIRMpXoDgMhkQAiIVb3Jpb24gcGFycXVlIHNhbGEgMTE04AEA-gEECAAQOg!16s%2Fg%2F11h0f12hb?entry=tts&g_ep=EgoyMDI1MDkwMy4wIPu8ASoASAFQAw%3D%3D&skid=d5aa1e53-12e4-4287-a720-b7c9d3640e0a",
      target: "_blank"
    }
  ];

  const handleLinkClick = (url: string, target: string) => {
    if (target === "_self" && url.startsWith("/")) {
      if (url.includes("#")) {
        // Se for um hash, navega para a página principal e depois scrolla
        if (window.location.pathname !== "/") {
          window.location.href = url;
        } else {
          const hash = url.split("#")[1];
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        window.location.href = url;
      }
    } else {
      window.open(url, target);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0ece3] flex items-center justify-center p-4 relative" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,62,34,0.05) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
      {/* Central Card */}
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl relative z-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,62,34,0.03) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
        {/* Top Icons */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-8 h-8 rounded-full bg-[#1a3e22]/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-[#1a3e22]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#1a3e22]/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-[#1a3e22]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-36 h-36 rounded-full bg-white border-2 border-[#1a3e22] flex items-center justify-center mb-4 overflow-hidden">
            <img 
              src="/img/01.png" 
              alt="Ycorps Logo" 
              className="w-full h-full object-contain p-1"
            />
          </div>
          <p className="text-gray-700 text-sm text-center">
            Anticorpos IgY de alta performance - Inovação em pesquisa e diagnóstico
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3 mb-8">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.url, link.target)}
              className="w-full bg-transparent border border-[#1a3e22]/30 rounded-lg p-4 flex items-center justify-between hover:bg-[#1a3e22]/5 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-[#1a3e22]">
                  {link.icon}
                </div>
                <span className="text-[#1a3e22] text-base">{link.text}</span>
              </div>
              <svg className="w-5 h-5 text-[#1a3e22]/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

