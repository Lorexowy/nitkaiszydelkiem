// src/components/sections/FeaturedProductsSection.tsx
import React from 'react';
import { dummyProducts, formatPrice } from '@/lib/constants';

const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = dummyProducts.filter(product => product.featured);
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Polecane produkty</h2>
          <p className="subtitle max-w-2xl mx-auto text-balance">
            Nasze najbardziej popularne i unikalne wyroby
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="card-product">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80" 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                    {product.stockType === 'available' && product.stockQuantity > 0 && (
                      <span className="badge badge-success">
                        Dostępne
                      </span>
                    )}
                    {product.stockType === 'made-to-order' && (
                      <span className="badge badge-info">
                        Na zamówienie
                      </span>
                    )}
                    {product.stockType === 'out-of-stock' && (
                      <span className="badge badge-error">
                        Brak w magazynie
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="price">
                      {formatPrice(product.price)}
                    </span>
                    
                    <button 
                      disabled={product.stockType === 'out-of-stock'}
                      className={`btn btn-sm ${
                        product.stockType === 'out-of-stock' 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'btn-primary'
                      }`}
                    >
                      {product.stockType === 'available' ? 'Dodaj do koszyka' : 
                       product.stockType === 'made-to-order' ? 'Zamów' : 'Niedostępny'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="btn btn-secondary btn-lg">
            Zobacz wszystkie produkty
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;