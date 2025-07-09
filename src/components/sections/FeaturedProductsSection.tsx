// src/components/sections/FeaturedProductsSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ui';
import { dummyProducts } from '@/lib/constants';

const FeaturedProductsSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredProducts = dummyProducts.filter(product => product.featured);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      {/* Section Header - Constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center">
          <h2 className="section-title">Polecane produkty</h2>
          <p className="subtitle max-w-2xl mx-auto text-balance">
            Nasze najbardziej popularne i unikalne wyroby, które zdobyły serca klientów
          </p>
        </div>
      </div>

      {/* Full-Width Products Grid */}
      <div className="w-full">
        {/* Desktop: 3 produkty side by side */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8">
              {featuredProducts.slice(0, 3).map((product, index) => (
                <div 
                  key={product.id}
                  className={`transition-all duration-500 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <ProductCard 
                    product={product} 
                    size="lg"
                    showCategory={true}
                    showFullDescription={false}
                    imageAspectRatio="square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet: 2 produkty side by side */}
        <div className="hidden md:block lg:hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-6">
              {featuredProducts.slice(0, 2).map((product, index) => (
                <div 
                  key={product.id}
                  className={`transition-all duration-500 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProductCard 
                    product={product} 
                    size="md"
                    showCategory={true}
                    showFullDescription={false}
                    imageAspectRatio="square"
                  />
                </div>
              ))}
            </div>
            
            {/* Tablet: Trzeci produkt wycentrowany */}
            {featuredProducts.length > 2 && (
              <div className="mt-6 max-w-md mx-auto">
                <div 
                  className={`transition-all duration-500 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <ProductCard 
                    product={featuredProducts[2]} 
                    size="md"
                    showCategory={true}
                    showFullDescription={false}
                    imageAspectRatio="square"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: 1 produkt per row */}
        <div className="md:hidden">
          <div className="px-4 space-y-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`transition-all duration-500 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProductCard 
                  product={product} 
                  size="md"
                  showCategory={true}
                  showFullDescription={false}
                  imageAspectRatio="square"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <div className="text-center">

          {/* Main CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-balance" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Zobacz wszystkie nasze produkty
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
              Odkryj pełną kolekcję ręcznie robionych wyrobów szydełkowych. 
              Każdy produkt to kawałek serca i pasji do rękodzieła.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="flex items-center justify-center">
                  Wszystkie produkty
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span className="flex items-center justify-center">
                  Przeglądaj kategorie
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;