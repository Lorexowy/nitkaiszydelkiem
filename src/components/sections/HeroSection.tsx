// src/components/sections/HeroSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '@/lib/constants';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cieplejsze hero slides
  const heroSlides = [
    {
      id: 1,
      title: "Tworzone z pasją i sercem",
      subtitle: "Każdy produkt to kawałek mojej duszy",
      description: "Witaj w moim małym świecie szydełkowania! Tu każdy produkt powstaje z miłością i troską o najmniejsze szczegóły. To nie tylko rękodzieło - to moja pasja przekazana Tobie.",
      ctaPrimary: "Poznaj moje prace",
      ctaSecondary: "Moja historia",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Spełniam marzenia na szydełku",
      subtitle: "Razem stworzymy coś wyjątkowego",
      description: "Marzy Ci się coś specjalnego? Z chęcią pomoże Ci wcielić pomysł w życie! Skontaktujmy się i porozmawiajmy o Twoim marzeniu - razem znajdziemy sposób, żeby je zrealizować.",
      ctaPrimary: "Porozmawiajmy",
      ctaSecondary: "Zobacz przykłady",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Szybko do Ciebie trafi",
      subtitle: "Dbam o każdy szczegół wysyłki",
      description: "Twoje zamówienie przygotowuję z największą starannością i wysyłam już następnego dnia. Darmowa dostawa od 150 zł to mój sposób na powiedzenie 'dziękuję' za zaufanie.",
      ctaPrimary: "Zobacz co mam",
      ctaSecondary: "Jak wysyłam?",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop&q=80",
    }
  ];

  // Auto-play z dłuższym interwałem
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 overflow-hidden">
      
      {/* Subtle crochet pattern - bardzo subtelny */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234299E1' fill-opacity='1'%3E%3C!-- Crochet stitch pattern --%3E%3Cpath d='M20 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M40 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M60 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M80 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M100 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C!-- Chain links between stitches --%3E%3Cpath d='M28 16h4v2h-4z' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M48 16h4v2h-4z' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M68 16h4v2h-4z' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M88 16h4v2h-4z' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3C!-- Second row offset --%3E%3Cpath d='M30 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M50 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M70 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M90 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C!-- Vertical connections --%3E%3Cpath d='M20 24v8' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M40 24v8' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M60 24v8' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M80 24v8' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M100 24v8' stroke='%234299E1' stroke-width='0.5' fill='none'/%3E%3C!-- Third row same as first --%3E%3Cpath d='M20 60c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M40 60c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M60 60c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M80 60c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M100 60c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] py-8 sm:py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            
            {/* Main Title */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 sm:mb-8 leading-[1.1] transition-all duration-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ 
              fontFamily: 'Crimson Pro, serif',
              transitionDelay: '200ms'
            }}>
              <span className="block font-normal">
                {currentSlideData.title.split(' ').slice(0, -3).join(' ')}
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-medium">
                {currentSlideData.title.split(' ').slice(-3).join(' ')}
              </span>
            </h1>

            {/* Subtitle - bardziej osobisty */}
            <p className={`text-lg sm:text-xl lg:text-2xl text-blue-600 mb-6 sm:mb-8 font-normal transition-all duration-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ 
              fontFamily: 'Crimson Pro, serif',
              transitionDelay: '400ms'
            }}>
              {currentSlideData.subtitle}
            </p>

            {/* Description - cieplejsza */}
            <p className={`text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed transition-all duration-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              {currentSlideData.description}
            </p>

            {/* Friendly Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-500 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <button className="group relative bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span className="flex items-center justify-center">
                  {currentSlideData.ctaPrimary}
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span className="flex items-center justify-center">
                  {currentSlideData.ctaSecondary}
                  <svg className="w-4 h-4 ml-2 text-blue-600 transition-transform group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Visual (tylko desktop) */}
          <div className="order-2 lg:order-2 relative hidden lg:block">
            
            {/* Clean Image Container */}
            <div className={`relative transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              
              {/* Main Image - cieplejsze ramowanie */}
              <div className="relative aspect-[4/3] lg:aspect-[5/4] bg-blue-50/50 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Cieplejszy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
              </div>

              {/* Geometric accents - cieplejsze */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 border-2 border-blue-200 bg-blue-50/80 backdrop-blur-sm rounded-lg rotate-12"></div>
              <div className="hidden lg:block absolute -top-6 -right-6 w-16 h-16 border-2 border-blue-100 bg-blue-100/60 rounded-full"></div>
            </div>

            {/* Personal Feature Cards - tylko desktop */}
            <div className="hidden xl:block absolute -left-12 top-1/3">
              <div className={`bg-white/95 backdrop-blur-sm border border-blue-100 shadow-lg rounded-2xl p-6 max-w-64 transition-all duration-500 transform ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '1200ms' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xl rounded-xl shadow-sm">
                    🧸
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Ręcznie szyte zabawki</div>
                    <div className="text-sm text-blue-600 font-medium">od 25 zł</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:block absolute -right-12 bottom-1/3">
              <div className={`bg-white/95 backdrop-blur-sm border border-blue-100 shadow-lg rounded-2xl p-6 max-w-64 transition-all duration-500 transform ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`} style={{ transitionDelay: '1400ms' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xl rounded-xl shadow-sm">
                    🏠
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Dekoracje dla twojego domu</div>
                    <div className="text-sm text-blue-600 font-medium">od 89 zł</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls - ukryte na mobile */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-8">
            
            {/* Clean navigation */}
            <button 
              onClick={prevSlide}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Poprzedni slajd"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Minimal dots */}
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                  aria-label={`Slajd ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Następny slajd"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Carousel Dots - tylko na mobile */}
        <div className="sm:hidden flex justify-center pb-6">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-blue-200'
                }`}
                aria-label={`Slajd ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Mobile Product Preview */}
        <div className="lg:hidden -mt-2 pb-8">
          <div className="px-4">
            {/* Tytuł sekcji */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2" style={{ fontFamily: 'Crimson Pro, serif' }}>
                Moje kategorie
              </h3>
              <p className="text-sm text-gray-600">
                Poznaj wszystko co tworzę z miłością
              </p>
            </div>
            
            {/* Product grid - responsywny */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {[
                { icon: '🧸', name: 'Zabawki dla dzieci', price: 'od 25 zł', desc: 'Bezpieczne i miękkie' },
                { icon: '👗', name: 'Odzież ciepła', price: 'od 45 zł', desc: 'Czapki, swetry, szaliki' },
                { icon: '🏠', name: 'Dekoracje domowe', price: 'od 89 zł', desc: 'Mandale, podkładki' },
                { icon: '🎄', name: 'Sezonowe', price: 'od 35 zł', desc: 'Na każdą okazję' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-blue-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1 leading-tight">{item.name}</div>
                  <div className="text-xs text-blue-600 font-semibold mb-2">{item.price}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
            
            {/* CTA na dole */}
            <div className="text-center mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md">
                Zobacz wszystkie produkty
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;