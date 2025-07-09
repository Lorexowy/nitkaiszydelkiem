// src/components/ui/ProductCard.tsx
'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { getProductAvailability, formatPrice } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  showCategory?: boolean;
  showFullDescription?: boolean;
  imageAspectRatio?: 'square' | 'portrait' | 'landscape';
  size?: 'sm' | 'md' | 'lg';
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  showCategory = true,
  showFullDescription = false,
  imageAspectRatio = 'square',
  size = 'md'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const availability = getProductAvailability(product);

  // Handle product click - navigate to product detail page
  const handleProductClick = (product: Product) => {
    // TODO: Implement navigation to product detail page
    console.log('Navigate to product:', product.slug);
    // window.location.href = `/produkty/${product.slug}`;
  };

  // Handle add to cart click
  const handleAddToCart = (product: Product) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product.id);
    // addToCart(product);
  };

  // Responsive image aspect ratios
  const aspectRatios = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  // Size variants
  const sizeVariants = {
    sm: {
      padding: 'p-4',
      titleSize: 'text-sm font-semibold',
      descriptionSize: 'text-xs',
      priceSize: 'text-base font-semibold',
      buttonSize: 'px-3 py-1.5 text-xs'
    },
    md: {
      padding: 'p-6',
      titleSize: 'text-base font-semibold',
      descriptionSize: 'text-sm',
      priceSize: 'text-lg font-semibold',
      buttonSize: 'px-4 py-2 text-sm'
    },
    lg: {
      padding: 'p-8',
      titleSize: 'text-xl font-semibold',
      descriptionSize: 'text-base',
      priceSize: 'text-xl font-semibold',
      buttonSize: 'px-6 py-3 text-base'
    }
  };

  const currentSize = sizeVariants[size];

  // Fallback image - high quality crochet placeholder
  const fallbackImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80";

  return (
    <div className={cn(
      "group relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300",
      "hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 hover:scale-[1.02]",
      className
    )}>
      {/* Product Image */}
      <div className={cn(
        "relative overflow-hidden bg-gray-50",
        aspectRatios[imageAspectRatio]
      )}>
        {/* Image Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse"></div>
          </div>
        )}

        {/* Product Image */}
        <img
          src={imageError ? fallbackImage : product.thumbnail || product.images[0] || fallbackImage}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 cursor-pointer",
            "group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onClick={() => handleProductClick(product)}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />

        {/* Status Badge - Only Available and Made-to-Order */}
        <div className="absolute top-3 right-3">
          {availability.status === 'available' && product.stockQuantity > 0 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
              Dostępne
            </span>
          )}
          {(availability.status === 'made-to-order' || availability.status === 'out-of-stock') && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1"></span>
              Na zamówienie
            </span>
          )}
        </div>

        {/* Clickable Image Overlay */}
        <div className="absolute inset-0 cursor-pointer" onClick={() => handleProductClick(product)}>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>

        {/* Low Stock Alert - Bottom of Image */}
        {availability.status === 'available' && product.stockQuantity <= product.lowStockThreshold && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium text-center">
              <span className="block">Tylko {product.stockQuantity} szt. w magazynie</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={cn("bg-white", currentSize.padding)}>
        {/* Category */}
        {showCategory && (
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {product.category}
            </span>
            {product.subcategory && (
              <span className="text-xs text-gray-400">
                {product.subcategory}
              </span>
            )}
          </div>
        )}

        {/* Product Name */}
        <h3 
          className={cn(
            "text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 cursor-pointer",
            currentSize.titleSize
          )}
          onClick={() => handleProductClick(product)}
        >
          {product.name}
        </h3>

        {/* Product Description */}
        <p className={cn(
          "text-gray-600 mb-4 line-clamp-3 leading-relaxed",
          currentSize.descriptionSize
        )}>
          {showFullDescription ? product.longDescription : product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className={cn(
            "text-gray-900 font-semibold",
            currentSize.priceSize
          )}>
            {formatPrice(product.price)}
          </span>
          {availability.status === 'made-to-order' && (
            <p className="text-xs text-gray-500 mt-1">
              {product.estimatedDeliveryTime}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button 
            onClick={() => handleProductClick(product)}
            className={cn(
              "flex-1 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
              currentSize.buttonSize
            )}
          >
            Zobacz szczegóły
          </button>
          
          <button 
            onClick={() => handleAddToCart(product)}
            className={cn(
              "flex-1 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95",
              currentSize.buttonSize
            )}
          >
            {availability.status === 'available' ? 'Dodaj do koszyka' : 'Zamów teraz'}
          </button>
        </div>


      </div>
    </div>
  );
};

export default ProductCard;