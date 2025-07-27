// src/components/products/ProductGrid.tsx
'use client';

import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  className?: string;
  // Grid options
  columns?: {
    mobile?: 1 | 2;
    tablet?: 2 | 3 | 4;
    desktop?: 3 | 4 | 5;
  };
  // ProductCard options
  showCategory?: boolean;
  cardSize?: 'sm' | 'md' | 'lg';
  imageAspectRatio?: 'square' | 'portrait' | 'landscape';
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  className,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  showCategory = true,
  cardSize = 'md',
  imageAspectRatio = 'square'
}) => {
  
  // Generate grid classes based on columns
  const getGridClasses = () => {
    const classes = ['grid', 'gap-4', 'sm:gap-6', 'lg:gap-8'];
    
    // Mobile columns (always responsive)
    if (columns.mobile === 1) classes.push('grid-cols-1');
    if (columns.mobile === 2) classes.push('grid-cols-2');
    
    // Tablet columns
    if (columns.tablet === 2) classes.push('sm:grid-cols-2');
    if (columns.tablet === 3) classes.push('sm:grid-cols-3');
    if (columns.tablet === 4) classes.push('sm:grid-cols-4');
    
    // Desktop columns
    if (columns.desktop === 3) classes.push('lg:grid-cols-3');
    if (columns.desktop === 4) classes.push('lg:grid-cols-4');
    if (columns.desktop === 5) classes.push('lg:grid-cols-5');
    
    return classes.join(' ');
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className={cn(getGridClasses(), className)}>
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductGridSkeleton key={index} imageAspectRatio={imageAspectRatio} />
        ))}
      </div>
    );
  }

  // Empty state
  if (!loading && products.length === 0) {
    return (
      <div className={cn("text-center py-12 sm:py-16", className)}>
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9.5 3L16 6l-6.5 3.5L3 6l6.5-3z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Brak produktów
          </h3>
          <p className="text-gray-600 mb-6">
            Nie znaleźliśmy produktów spełniających Twoje kryteria. 
            Spróbuj zmienić filtry lub wyszukać coś innego.
          </p>
          <button 
            onClick={() => window.location.href = '/produkty'}
            className="btn-primary"
          >
            Zobacz wszystkie produkty
          </button>
        </div>
      </div>
    );
  }

  // Products grid
  return (
    <div className={cn(getGridClasses(), className)}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in-up"
          style={{ 
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both'
          }}
        >
          <ProductCard
            product={product}
            showCategory={showCategory}
            size={cardSize}
            imageAspectRatio={imageAspectRatio}
            showFullDescription={false}
          />
        </div>
      ))}
    </div>
  );
};

// Loading skeleton component
const ProductGridSkeleton: React.FC<{ imageAspectRatio: 'square' | 'portrait' | 'landscape' }> = ({ 
  imageAspectRatio 
}) => {
  const aspectRatios = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className={cn(
        "bg-gray-200",
        aspectRatios[imageAspectRatio]
      )}>
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        
        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-4/5"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
        
        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        
        {/* Buttons */}
        <div className="flex space-x-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

// Pagination component
export const ProductGridPagination: React.FC<{
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onPageChange: (page: number) => void;
  loading?: boolean;
}> = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  onPageChange,
  loading = false
}) => {
  
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevPage || loading}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-lg border transition-colors",
          !hasPrevPage || loading
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
        )}
      >
        Poprzednia
      </button>

      {/* Page numbers */}
      <div className="flex items-center space-x-1">
        {visiblePages.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-sm text-gray-500">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                disabled={loading}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg border transition-colors",
                  page === currentPage
                    ? "bg-blue-600 text-white border-blue-600"
                    : loading
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                )}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage || loading}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-lg border transition-colors",
          !hasNextPage || loading
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
        )}
      >
        Następna
      </button>
    </div>
  );
};

// CSS animations - add to globals.css
export const productGridAnimations = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out;
  }
`;

export default ProductGrid;