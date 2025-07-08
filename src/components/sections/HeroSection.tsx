// src/components/sections/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Tekst */}
          <div className="max-w-xl">
            <h1 className="display-title mb-8 text-balance">
              Ręcznie robione
              <br />
              <span className="text-blue-600">
                z miłością
              </span>
            </h1>
            <p className="lead mb-12 text-pretty">
              Odkryj magię rękodzieła w naszym sklepie. Każdy produkt jest unikalny, 
              wykonany z najwyższą starannością i dbałością o szczegóły.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary btn-lg">
                Przeglądaj produkty
              </button>
              <button className="btn btn-secondary btn-lg">
                Nasze kategorie
              </button>
            </div>
          </div>
          
          {/* Obrazek */}
          <div className="relative lg:ml-10">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=525&fit=crop&q=80" 
                  alt="Ręcznie robione wyroby szydełkowe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-100 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;