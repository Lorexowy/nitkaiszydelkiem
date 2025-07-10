// src/components/common/Footer.tsx
'use client';

import React from 'react';
import { APP_CONFIG } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Newsletter subscription handler
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    console.log('Newsletter subscription:', email);
    // TODO: Implement newsletter subscription
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      
      {/* Newsletter Section - Premium Touch */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Bądź na bieżąco z nowościami
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
              Zapisz się do newslettera i jako pierwszy dowiaduj się o nowych produktach, 
              promocjach i inspiracjach szydełkowych
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Twój adres e-mail"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Zapisz się
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Nie wysyłamy spamu. Możesz się wypisać w każdej chwili.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Kolumna 1: O firmie + Social Media */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/logo/croppedlogomadam.svg" 
                alt={APP_CONFIG.name}
                className="max-h-12 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Tworzymy ręcznie robione cuda szydełkowe z miłością i pasją. 
                Każdy produkt to kawałek serca przekazany w Twoje ręce.
              </p>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Obserwuj nas
              </h5>
              <div className="flex space-x-4">
                {[
                  { 
                    href: APP_CONFIG.socialMedia.facebook,
                    icon: (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    ),
                    label: 'Facebook',
                    color: 'hover:text-blue-600'
                  },
                  { 
                    href: APP_CONFIG.socialMedia.instagram,
                    icon: (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    ),
                    label: 'Instagram',
                    color: 'hover:text-pink-600'
                  },
                  { 
                    href: APP_CONFIG.socialMedia.pinterest,
                    icon: (
                      <path d="M12 0C5.373 0 0 5.372 0 12.017c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.373 11.99-12.017C24.007 5.372 18.641.001 12.017.001z"/>
                    ),
                    label: 'Pinterest',
                    color: 'hover:text-red-600'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Trusted Payment Methods */}
            <div>
              <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Bezpieczne płatności
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Przelewy24', icon: '🏦', color: 'border-orange-200 bg-orange-50' },
                  { name: 'BLIK', icon: '📱', color: 'border-blue-200 bg-blue-50' },
                  { name: 'PayPal', icon: '💳', color: 'border-blue-200 bg-blue-50' },
                  { name: 'Karty', icon: '💰', color: 'border-gray-200 bg-gray-50' }
                ].map((payment, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center space-x-1 px-3 py-1.5 border rounded-lg text-xs font-medium ${payment.color}`}
                  >
                    <span className="text-sm">{payment.icon}</span>
                    <span className="text-gray-700">{payment.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Kolumna 2: Produkty */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide" style={{ marginBottom: '1rem' }}>
              Nasze produkty
            </h4>
            <div className="space-y-3">
              {[
                { href: '/kategorie/zabawki', name: 'Zabawki dla dzieci' },
                { href: '/kategorie/odziez', name: 'Odzież szydełkowa' },
                { href: '/kategorie/dekoracje-domowe', name: 'Dekoracje domowe' },
                { href: '/kategorie/dekoracje-sezonowe', name: 'Dekoracje sezonowe' },
                { href: '/kategorie/akcesoria', name: 'Akcesoria' },
                { href: '/produkty', name: 'Wszystkie produkty' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 group"
                >
                  {item.name}
                  <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Kolumna 3: Informacje */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide" style={{ marginBottom: '1rem' }}>
              Informacje
            </h4>
            <div className="space-y-3">
              {[
                { href: '/o-nas', name: 'O nas', desc: 'Nasza historia' },
                { href: '/dostawa-zwroty', name: 'Dostawa i zwroty', desc: 'Szybko i bezpiecznie' },
                { href: '/jak-zamawiamy', name: 'Jak zamawiamy', desc: 'Proces realizacji' },
                { href: '/rozmiarówka', name: 'Rozmiarówka', desc: 'Tabela rozmiarów' },
                { href: '/regulamin', name: 'Regulamin', desc: 'Warunki zakupów' },
                { href: '/polityka-prywatnosci', name: 'Polityka prywatności', desc: 'RODO i dane' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block group"
                >
                  <div className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Kolumna 4: Kontakt */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide" style={{ marginBottom: '1rem' }}>
              Kontakt
            </h4>
            <div className="space-y-4">
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href={`mailto:${APP_CONFIG.email}`}
                  className="flex items-start space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <svg className="w-5 h-5 mt-0.5 text-blue-600 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">E-mail</div>
                    <div className="text-sm text-gray-500">{APP_CONFIG.email}</div>
                  </div>
                </a>
                
                <a
                  href={`tel:${APP_CONFIG.phone}`}
                  className="flex items-start space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <svg className="w-5 h-5 mt-0.5 text-blue-600 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">Telefon</div>
                    <div className="text-sm text-gray-500">{APP_CONFIG.phone}</div>
                  </div>
                </a>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Lokalizacja</div>
                    <div className="text-sm text-gray-500">{APP_CONFIG.address}</div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-gray-200">
                <h5 className="text-sm font-medium text-gray-900 mb-3">Godziny pracy</h5>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Pn - Pt:</span>
                    <span>9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>So:</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nd:</span>
                    <span>Zamknięte</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="pt-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Napisz do nas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: '🚚',
                title: 'Darmowa dostawa',
                desc: 'Od 150 zł'
              },
              {
                icon: '🔄',
                title: 'Łatwe zwroty',
                desc: '14 dni na zwrot'
              },
              {
                icon: '🛡️',
                title: 'Bezpieczne płatności',
                desc: 'SSL i szyfrowanie'
              },
              {
                icon: '⭐',
                title: 'Najwyższa jakość',
                desc: 'Ręcznie robione'
              }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {badge.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {badge.title}
                </div>
                <div className="text-xs text-gray-500">
                  {badge.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-500">
              <p>&copy; {currentYear} {APP_CONFIG.name}. Wszystkie prawa zastrzeżone.</p>
              <span className="hidden sm:inline text-gray-300">|</span>
              <p>Sklep internetowy z wyrobami szydełkowymi</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-4 text-sm">
              <a href="/regulamin" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Regulamin
              </a>
              <a href="/polityka-prywatnosci" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Polityka prywatności
              </a>
              <a href="/rodo" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                RODO
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;