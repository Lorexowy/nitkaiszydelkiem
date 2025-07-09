// src/components/sections/CategoriesSection.tsx
'use client';

import React, { useState } from 'react';
import { categories } from '@/lib/constants';

// Category images mapping - high-quality crochet/handmade related images
const categoryImages = {
  "zabawki": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  "odziez": "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop&q=80",
  "dekoracje-domowe": "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&q=80",
  "dekoracje-sezonowe": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&q=80",
  "akcesoria": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop&q=80"
};

const CategoriesSection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      {/* Section Header - Constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center">
          <h2 className="section-title">Odkryj nasze kategorie</h2>
          <p className="subtitle max-w-2xl mx-auto text-balance">
            Każda kategoria to osobny świat pięknych, ręcznie tworzonych przedmiotów
          </p>
        </div>
      </div>

      {/* Full-Width Categories Grid */}
      <div className="w-full">
        {/* Desktop: 5 cards side by side */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4 lg:px-4">
          {categories.map((category, index) => (
            <FullWidthCategoryCard
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

        {/* Tablet: 3 + 2 layout */}
        <div className="hidden md:block lg:hidden px-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {categories.slice(0, 3).map((category, index) => (
              <FullWidthCategoryCard
                key={category.id}
                category={category}
                image={categoryImages[category.id as keyof typeof categoryImages]}
                isHovered={hoveredCategory === category.id}
                onHover={() => setHoveredCategory(category.id)}
                onLeave={() => setHoveredCategory(null)}
                delay={index * 100}
                isTablet={true}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {categories.slice(3, 5).map((category, index) => (
              <FullWidthCategoryCard
                key={category.id}
                category={category}
                image={categoryImages[category.id as keyof typeof categoryImages]}
                isHovered={hoveredCategory === category.id}
                onHover={() => setHoveredCategory(category.id)}
                onLeave={() => setHoveredCategory(null)}
                delay={(index + 3) * 100}
                isTablet={true}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 1 card per row */}
        <div className="md:hidden px-4 space-y-4">
          {categories.map((category, index) => (
            <FullWidthCategoryCard
              key={category.id}
              category={category}
              image={categoryImages[category.id as keyof typeof categoryImages]}
              isHovered={hoveredCategory === category.id}
              onHover={() => setHoveredCategory(category.id)}
              onLeave={() => setHoveredCategory(null)}
              delay={index * 100}
              isMobile={true}
            />
          ))}
        </div>
      </div>

      {/* Call to Action - Constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        <div className="text-center">
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

// Full-Width Category Card Component
interface FullWidthCategoryCardProps {
  category: any;
  image: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
  isMobile?: boolean;
  isTablet?: boolean;
}

const FullWidthCategoryCard: React.FC<FullWidthCategoryCardProps> = ({ 
  category, 
  image, 
  isHovered, 
  onHover, 
  onLeave,
  delay,
  isMobile = false,
  isTablet = false
}) => {
  // Responsywne wysokości
  const getHeight = () => {
    if (isMobile) return 'h-80 sm:h-96'; // Mobile: wyższe karty
    if (isTablet) return 'h-72'; // Tablet: średnie karty
    return 'h-80 xl:h-96'; // Desktop: wysokie karty
  };

  return (
    <div 
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out rounded-lg ${getHeight()}`}
      onMouseEnter={!isMobile && !isTablet ? onHover : undefined}
      onMouseLeave={!isMobile && !isTablet ? onLeave : undefined}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out both'
      }}
    >
      {/* Background Image - Perfect Fill */}
      <div 
        className={`absolute inset-0 bg-gray-200 bg-cover bg-center bg-no-repeat transition-transform duration-700 ${
          !isMobile && !isTablet ? 'group-hover:scale-105' : ''
        }`}
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      {/* Subtle Overlay - Intensifies on Hover (Desktop Only) */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isMobile || isTablet 
          ? 'bg-black/30' 
          : isHovered 
            ? 'bg-black/60' 
            : 'bg-black/30 group-hover:bg-black/45'
      }`} />

      {/* Bottom Gradient for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-center text-center">
        <div className={`w-full pb-6 sm:pb-8 transition-all duration-500 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
        }`}>
          
          {/* Category Name - Bottom Positioned & Light */}
          <div className={`mb-0 transition-all duration-300 ${
            !isMobile && !isTablet && isHovered ? 'transform scale-105' : ''
          }`} 
          style={{ 
            fontFamily: 'Crimson Pro, serif', 
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.9)',
            letterSpacing: '0.025em',
            fontWeight: '300',
            fontSize: isMobile ? '1.875rem' : isTablet ? '1.5rem' : 'clamp(1.25rem, 2.5vw, 2.5rem)'
          }}>
            {category.name}
          </div>

            {/* Call to Action - Touch Friendly on Mobile */}
            <div className={`mt-4 transition-all duration-300 transform ${
              isMobile || isTablet 
                ? 'translate-y-0 opacity-100' 
                : isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div 
                className="inline-block px-6 py-2.5 rounded-lg font-medium border transition-all duration-200 shadow-lg cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <div className="flex items-center justify-center text-sm" style={{ color: 'white' }}>
                  Przeglądaj
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// Add keyframes for fade-in animation
const fadeInUpStyles = `
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

// Only add styles in browser environment
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const existingStyle = document.getElementById('categories-animation-styles');
  if (!existingStyle) {
    const style = document.createElement('style');
    style.id = 'categories-animation-styles';
    style.textContent = fadeInUpStyles;
    document.head.appendChild(style);
  }
}

export default CategoriesSection;