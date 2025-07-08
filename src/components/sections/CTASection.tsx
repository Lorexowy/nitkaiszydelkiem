// src/components/sections/CTASection.tsx
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-balance" style={{ fontFamily: 'Crimson Pro, serif' }}>
          Marzysz o czymś wyjątkowym?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          Przyjmujemy zamówienia na produkty szyte na miarę Twoich potrzeb. 
          Skontaktuj się z nami, aby omówić Twój projekt.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-accent btn-lg">
            Skontaktuj się z nami
          </button>
          <button className="btn btn-secondary btn-lg">
            Zobacz portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;