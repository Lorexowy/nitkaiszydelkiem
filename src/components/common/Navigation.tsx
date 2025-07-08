// src/components/common/Navigation.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void; // Dla zamykania mobile menu
  currentPath?: string; // Dla active states
}

const Navigation: React.FC<NavigationProps> = ({ 
  className, 
  isMobile = false, 
  onLinkClick,
  currentPath = '/'
}) => {
  const navItems = [
    { 
      href: '/', 
      label: 'Strona główna',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    { 
      href: '/produkty', 
      label: 'Produkty',
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
    },
    { 
      href: '/o-nas', 
      label: 'O nas',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    { 
      href: '/kontakt', 
      label: 'Kontakt',
      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
  ];

  // Funkcja sprawdzająca czy link jest aktywny
  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  // Desktop Navigation - używane inline w Header
  if (!isMobile) {
    return (
      <nav className={cn("hidden lg:flex items-center space-x-8 xl:space-x-10", className)}>
        {navItems.map((item) => ( // Wszystkie 4 linki dla desktop
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "nav-link transition-colors duration-200 font-medium",
              isActive(item.href) 
                ? "text-blue-600 nav-link active" 
                : "text-gray-700 hover:text-gray-900"
            )}
            onClick={onLinkClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  // Mobile Navigation - używane w sliding panel
  return (
    <nav className={cn("space-y-1", className)}>
      {navItems.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onLinkClick}
          className={cn(
            "flex items-center px-4 py-4 text-lg font-medium rounded-lg transition-all duration-300 active:bg-gray-100 hover:scale-[1.02] transform",
            isActive(item.href)
              ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
              : "text-gray-900 hover:bg-gray-50"
          )}
          style={{ 
            transitionDelay: `${200 + index * 100}ms` 
          }}
        >
          <svg className={cn(
            "w-5 h-5 mr-3 transition-colors",
            isActive(item.href) ? "text-blue-600" : "text-gray-400"
          )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
          </svg>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

// Hook dla aktualnej ścieżki (opcjonalny)
export const useCurrentPath = () => {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '/';
};

export default Navigation;