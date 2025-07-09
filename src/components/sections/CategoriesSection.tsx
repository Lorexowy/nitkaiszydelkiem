// src/components/sections/CategoriesSection.tsx
'use client';

import React, { useState } from 'react';
import { categories } from '@/lib/constants';

// Category images mapping - high-quality crochet/handmade related images
const categoryImages = {
  "zabawki": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
  "odziez": "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop&q=80",
  "dekoracje-domowe": "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&q=80",
  "dekoracje-sezonowe": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop&q=80",
  "akcesoria": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop&q=80"
};

const CategoriesSection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="section-title">Odkryj nasze kategorie</h2>
          <p className="subtitle max-w-2xl mx-auto text-balance">
            Każda kategoria to osobny świat pięknych, ręcznie tworzonych przedmiotów
          </p>
        </div>

        {/* Clean Minimalist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id}
              category={category}
              image={categoryImages[category.id as keyof typeof categoryImages]}
              isHovered={hoveredCategory === category.id}
              onHover={() => setHoveredCategory(category.id)}
              onLeave={() => setHoveredCategory(null)}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Produktów</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Zadowolonych klientów</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-2">5</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Głównych kategorii</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-2">24h</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Szybka wysyłka</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Potrzebujesz czegoś wyjątkowego?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Tworzymy również produkty na indywidualne zamówienie. Skontaktuj się z nami, 
              a pomożemy Ci zrealizować Twoje pomysły.
            </p>
            <button className="btn-accent btn-lg">
              <span className="flex items-center justify-center">
                Zamów na miarę
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Premium Category Card Component
interface CategoryCardProps {
  category: any;
  image: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  image, 
  isHovered, 
  onHover, 
  onLeave,
  delay 
}) => {
  return (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
        isHovered ? 'shadow-xl' : 'shadow-lg hover:shadow-xl'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out both',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(59, 130, 246, 0.05)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02)'
      }}
    >
      {/* Clean Image Section */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img 
          src={image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Bottom Gradient Only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Clean Content Section */}
      <div className="p-8 sm:p-10 bg-white">
        <div className="mb-8">
          <h3 className={`text-2xl sm:text-3xl font-medium text-gray-900 mb-4 transition-colors duration-300 ${
            isHovered ? 'text-blue-600' : 'group-hover:text-blue-700'
          }`} style={{ fontFamily: 'Crimson Pro, serif' }}>
            {category.name}
          </h3>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Clean Action Button */}
        <button className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
          isHovered 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-100'
        }`}>
          <span className="flex items-center justify-center">
            Przeglądaj kategorię
            <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : 'group-hover:translate-x-0.5'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

// Add keyframes for fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default CategoriesSection;