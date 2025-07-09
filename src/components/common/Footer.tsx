// src/components/common/Footer.tsx
'use client';

import React from 'react';
import { APP_CONFIG } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Główna treść footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* O firmie + płatności */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {APP_CONFIG.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Profesjonalne wyroby szydełkowe najwyższej jakości. 
              Specjalizujemy się w ręcznie wykonanych produktach dla domu i rodziny.
            </p>
            
            {/* Płatności - małe, z lewej strony */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center space-x-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">
                  <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span className="font-medium text-gray-700">P24</span>
                </div>
                
                <div className="flex items-center space-x-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                  </svg>
                  <span className="font-medium text-gray-700">BLIK</span>
                </div>
                
                <div className="flex items-center space-x-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.983C5.026 2.411 5.516 2 6.099 2h7.875c1.754 0 3.213.508 4.338 1.509 1.105 0.98 1.686 2.372 1.686 4.033 0 3.358-2.237 5.541-5.713 5.541H9.41c-.434 0-.817.303-.905.73L7.076 21.337z"/>
                  </svg>
                  <span className="font-medium text-gray-700">PayPal</span>
                </div>
                
                <div className="flex items-center space-x-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">
                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <path d="M1 10h22"/>
                  </svg>
                  <span className="font-medium text-gray-700">Karty</span>
                </div>
              </div>
            </div>
            
            {/* Zaobserwuj mnie */}
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Zaobserwuj mnie
              </h5>
              <div className="flex space-x-3">
                <a 
                  href={APP_CONFIG.socialMedia.facebook} 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={APP_CONFIG.socialMedia.instagram} 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Udostępnij mnie */}
            <div>
              <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Udostępnij mnie
              </h5>
              <div className="flex space-x-3">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://nitkaiszydelkiem.pl')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Udostępnij na Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Udostępnij na Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://nitkaiszydelkiem.pl')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Udostępnij na LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Sprawdź ten sklep: ' + (typeof window !== 'undefined' ? window.location.href : 'https://nitkaiszydelkiem.pl'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Udostępnij na WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
                <a 
                  href="https://www.messenger.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Udostępnij na Messenger"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Produkty */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Produkty
            </h4>
            <div className="space-y-2">
              <a href="/kategorie/zabawki" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Zabawki
              </a>
              <a href="/kategorie/odziez" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Odzież
              </a>
              <a href="/kategorie/dekoracje-domowe" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Dekoracje domowe
              </a>
              <a href="/kategorie/dekoracje-sezonowe" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Dekoracje sezonowe
              </a>
              <a href="/kategorie/akcesoria" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Akcesoria
              </a>
            </div>
          </div>
          
          {/* Informacje */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Informacje
            </h4>
            <div className="space-y-2">
              <a href="/o-nas" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                O nas
              </a>
              <a href="/dostawa-zwroty" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Dostawa i zwroty
              </a>
              <a href="/regulamin" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Regulamin
              </a>
              <a href="/polityka-prywatnosci" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                Polityka prywatności
              </a>
              <a href="/rodo" className="text-gray-600 hover:text-gray-900 block text-sm transition-colors">
                RODO
              </a>
            </div>
          </div>
          
          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Kontakt
            </h4>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <a href={`mailto:${APP_CONFIG.email}`} className="hover:text-gray-900 transition-colors">
                  {APP_CONFIG.email}
                </a>
              </div>
              <div className="text-sm text-gray-600">
                <a href={`tel:${APP_CONFIG.phone}`} className="hover:text-gray-900 transition-colors">
                  {APP_CONFIG.phone}
                </a>
              </div>
              <div className="text-sm text-gray-600">
                {APP_CONFIG.address}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright - minimalistyczny */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {APP_CONFIG.name}. Wszystkie prawa zastrzeżone.
            </p>
            <p className="text-sm text-gray-500">
              Sklep internetowy z wyrobami szydełkowymi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;