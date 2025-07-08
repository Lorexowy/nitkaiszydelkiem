// src/components/sections/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Nasza historia
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Witamy w świecie ręcznie robionych cudów! Nasza pasja do szydełkowania 
                rozpoczęła się wiele lat temu jako hobby, które szybko przerodziło się 
                w prawdziwą miłość do rękodzieła.
              </p>
              <p>
                Każdy produkt w naszym sklepie jest tworzony z najwyższą starannością, 
                używając tylko wysokiej jakości materiałów. Wierzymy, że ręcznie robione 
                przedmioty niosą ze sobą wyjątkową energię i ciepło.
              </p>
              <p>
                Nasze wyroby to nie tylko produkty - to kawałki serca, które chcemy 
                dzielić z Wami. Tworzymy z myślą o trwałości, komforcie i pięknie.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Zadowolonych klientów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Unikalnych produktów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">3+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Lata doświadczenia</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop&q=80" 
                alt="Proces tworzenia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;