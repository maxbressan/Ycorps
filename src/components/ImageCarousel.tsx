export const ImageCarousel = () => {
  const images = [
    '/img/10.png',
    '/img/11.png',
    '/img/12.png',
    '/img/13.png',
    '/img/14.png'
  ];

  return (
    <section className="py-8 bg-green-600 overflow-hidden">
      <div className="w-full">
        <div className="flex items-center animate-scroll">
          {/* Múltiplas sequências para garantir cobertura total */}
          {[...Array(4)].map((_, sequenceIndex) => 
            images.map((image, index) => (
              <div key={`seq-${sequenceIndex}-${index}`} className="relative w-24 h-24 flex-shrink-0 mr-8">
                <img
                  src={image}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};
