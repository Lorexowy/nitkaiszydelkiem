// src/components/common/Header.tsx
'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import { APP_CONFIG } from '@/lib/constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Bar - Auth & Contact */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            
            {/* Left - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{APP_CONFIG.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{APP_CONFIG.phone}</span>
              </div>
            </div>

            {/* Right - Auth & Quick Links */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-gray-600">
                <a href="/pomoc" className="hover:text-gray-900 transition-colors">Pomoc</a>
                <a href="/dostawa" className="hover:text-gray-900 transition-colors">Dostawa</a>
                <span className="text-gray-300">|</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm">
                  Zaloguj się
                </button>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Zarejestruj się
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left - Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img 
                  src="/images/logo/croppedlogomadam.svg" 
                  alt={APP_CONFIG.name}
                  className="max-h-12 w-auto"
                />
              </a>
            </div>

            {/* Center - Main Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="/" className="nav-link">Strona główna</a>
              <a href="/produkty" className="nav-link">Produkty</a>
              <a href="/o-nas" className="nav-link">O nas</a>
              <a href="/kontakt" className="nav-link">Kontakt</a>
            </nav>

            {/* Right - Search & Cart */}
            <div className="flex items-center space-x-4">
              
              {/* Search Bar (Desktop) */}
              <div className="hidden lg:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Szukaj produktów..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                  <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Search Icon */}
              <button className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a2 2 0 104 0 2 2 0 00-4 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                aria-label="Otwórz menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img 
                  src="/images/logo/croppedlogomadam.svg" 
                  alt={APP_CONFIG.name}
                  className="max-h-10 w-auto"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-6 border-b border-gray-100">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Szukaj produktów..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 px-6 py-6">
                <nav className="space-y-1">
                  <a href="/" 
                     onClick={closeMobileMenu}
                     className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                    Strona główna
                  </a>
                  <a href="/produkty" 
                     onClick={closeMobileMenu}
                     className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                    Produkty
                  </a>
                  <a href="/o-nas" 
                     onClick={closeMobileMenu}
                     className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                    O nas
                  </a>
                  <a href="/kontakt" 
                     onClick={closeMobileMenu}
                     className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                    Kontakt
                  </a>
                </nav>

                {/* Mobile Quick Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Szybkie linki</h3>
                  <div className="space-y-2">
                    <a href="/pomoc" onClick={closeMobileMenu} className="block text-gray-600 hover:text-gray-900 py-1">Pomoc</a>
                    <a href="/dostawa" onClick={closeMobileMenu} className="block text-gray-600 hover:text-gray-900 py-1">Dostawa</a>
                    <a href="/zwroty" onClick={closeMobileMenu} className="block text-gray-600 hover:text-gray-900 py-1">Zwroty</a>
                  </div>
                </div>
              </div>

              {/* Mobile Auth - nie potrzebne bo jest w top bar */}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;