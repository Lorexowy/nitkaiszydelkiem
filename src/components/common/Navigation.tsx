// src/components/common/Navigation.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void; // Dla zamykania mobile menu
}

const Navigation: React.FC<NavigationProps> = ({ 
  className, 
  isMobile = false, 
  onLinkClick 
}) => {
  const navItems = [
    { href: '/', label: 'Strona główna' },
    { href: '/produkty', label: 'Produkty' },
    { href: '/kategorie', label: 'Kategorie' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' }
  ];

  // Ten komponent jest teraz używany tylko dla mobilnego menu w sliding panel
  // Desktop navigation jest wbudowana bezpośrednio w Header dla lepszego layoutu
  if (!isMobile) {
    return null;
  }

  return (
    <nav className={cn("space-y-1", className)}>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onLinkClick}
          className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;