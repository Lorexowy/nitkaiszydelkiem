// src/components/common/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { APP_CONFIG } from '@/lib/constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileSearchOpen(false); // Close search if open
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    setIsMobileMenuOpen(false); // Close menu if open
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      {/* Top Bar - Auth & Contact - Hide on small mobile */}
      <div className="bg-gray-50 border-b border-gray-200 hidden sm:block">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-10 text-sm">
            
            {/* Left - Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden xl:inline">{APP_CONFIG.email}</span>
                <span className="xl:hidden">E-mail</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden xl:inline">{APP_CONFIG.phone}</span>
                <span className="xl:hidden">Telefon</span>
              </div>
            </div>

            {/* Right - Auth & Quick Links */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-gray-600">
                <a href="/pomoc" className="hover:text-gray-900 transition-colors">Pomoc</a>
                <a href="/dostawa" className="hover:text-gray-900 transition-colors">Dostawa</a>
                <span className="text-gray-300 hidden lg:inline">|</span>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-xs sm:text-sm">
                  <span className="hidden sm:inline">Zaloguj się</span>
                  <span className="sm:hidden">Login</span>
                </button>
                <button className="bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
                  <span className="hidden sm:inline">Zarejestruj się</span>
                  <span className="sm:hidden">Rejestracja</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left - Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/images/logo/croppedlogomadam.svg" 
                  alt={APP_CONFIG.name}
                  className="max-h-12 w-auto"
                />
              </a>
            </div>

            {/* Center - Main Navigation (Desktop only) */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <a href="/" className="nav-link">Strona główna</a>
              <a href="/produkty" className="nav-link">Produkty</a>
              <a href="/o-nas" className="nav-link">O nas</a>
              <a href="/kontakt" className="nav-link">Kontakt</a>
            </nav>

            {/* Right - Search & Cart & Mobile Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              
              {/* Search Bar (Desktop only) */}
              <div className="hidden lg:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Szukaj produktów..."
                    className="w-48 xl:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                  <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Search Icon */}
              <button 
                onClick={toggleMobileSearch}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 active:bg-gray-100"
                aria-label="Szukaj"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 active:bg-gray-100">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a2 2 0 104 0 2 2 0 00-4 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium text-[10px] sm:text-xs">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 active:bg-gray-100"
                aria-label="Menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Expandable with smooth animation */}
      <div className={`lg:hidden bg-white border-b border-gray-100 transition-all duration-300 ease-out overflow-hidden ${
        isMobileSearchOpen 
          ? 'max-h-20 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-2'
      }`}>
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-4">
          <div className="relative">
            <div className={`transition-all duration-300 ease-out ${
              isMobileSearchOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <input
                type="text"
                placeholder="Szukaj produktów..."
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base shadow-sm focus:shadow-md"
                autoFocus={isMobileSearchOpen}
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button 
                onClick={closeMobileSearch}
                className="absolute right-4 top-3.5 p-0.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:bg-gray-100 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - ZAWSZE W DOM, ANIMOWANE PRZEZ OPACITY */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />
        
        {/* Mobile Menu Panel - POPRAWIONA SZEROKOŚĆ */}
        <div className={`absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-gray-50">
              <div className={`transition-all duration-500 delay-100 ${
                isMobileMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2'
              }`}>
                <img 
                  src="/images/logo/croppedlogomadam.svg" 
                  alt={APP_CONFIG.name}
                  className="max-h-10 w-auto"
                />
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-500 hover:text-gray-700 transition-all duration-200 rounded-lg hover:bg-gray-100 active:bg-gray-200 transform hover:scale-105"
                aria-label="Zamknij menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
              <nav className="space-y-1">
                {[
                  { href: '/', label: 'Strona główna', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                  { href: '/produkty', label: 'Produkty', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
                  { href: '/o-nas', label: 'O nas', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { href: '/kontakt', label: 'Kontakt', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
                ].map((item, index) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    onClick={closeMobileMenu}
                    className={`flex items-center px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 active:bg-gray-100 hover:scale-[1.02] transform ${
                      isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${200 + index * 100}ms` : '0ms' 
                    }}
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Quick Links */}
              <div className={`mt-8 pt-6 border-t border-gray-100 transition-all duration-500 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: isMobileMenuOpen ? '600ms' : '0ms' }}>
                <h3 className="text-sm font-semibold text-gray-900 px-4" style={{ marginBottom: '16px' }}>Szybkie linki</h3>
                <div className="space-y-2">
                  {[
                    { href: '/pomoc', label: 'Pomoc' },
                    { href: '/dostawa', label: 'Dostawa' },
                    { href: '/zwroty', label: 'Zwroty' },
                    { href: '/regulamin', label: 'Regulamin' },
                    { href: '/polityka-prywatnosci', label: 'Polityka prywatności' }
                  ].map((link, index) => (
                    <a 
                      key={link.href}
                      href={link.href} 
                      onClick={closeMobileMenu} 
                      className={`block text-gray-500 hover:text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-[1.01] transform ${
                        isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: isMobileMenuOpen ? `${700 + index * 50}ms` : '0ms' 
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Auth Section */}
            <div className={`border-t border-gray-100 p-4 sm:p-6 bg-gray-50 sm:hidden transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '900ms' : '0ms' }}>
              <div className="flex flex-col space-y-3">
                <button className="w-full py-3 px-4 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] transform active:scale-[0.98]">
                  Zaloguj się
                </button>
                <button className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-[1.02] transform active:scale-[0.98]">
                  Zarejestruj się
                </button>
              </div>
              <div className="mt-4 flex justify-center space-x-4 text-xs text-gray-500">
                <a href={`mailto:${APP_CONFIG.email}`} className="hover:text-gray-700 transition-colors">E-mail</a>
                <span>•</span>
                <a href={`tel:${APP_CONFIG.phone}`} className="hover:text-gray-700 transition-colors">Telefon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;