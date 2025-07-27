// src/app/produkty/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useProducts, useFilterOptions } from '@/hooks/useProducts';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid, { ProductGridPagination } from '@/components/products/ProductGrid';
import { ProductFilters as ProductFiltersType, ProductSortOption } from '@/lib/data/products';

const ProductsPage: React.FC = () => {
  // Hooks do zarządzania danymi
  const {
    products,
    total,
    totalPages,
    hasNextPage,
    hasPrevPage,
    loading,
    error,
    filters,
    sort,
    page,
    updateFilters,
    updateSort,
    updatePage,
    clearFilters
  } = useProducts({}, 'date-desc', 1, 12);

  const {
    materials,
    colors,
    priceRange,
    loading: filtersLoading
  } = useFilterOptions();

  // Stan dla search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle search z debounce
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    const timeout = setTimeout(() => {
      updateFilters({ search: query.trim() || undefined });
    }, 500);
    
    setSearchTimeout(timeout);
  };

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchTimeout]);

  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Strona główna', href: '/' },
    { name: 'Produkty', href: '/produkty', current: true }
  ];

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Wystąpił błąd
          </h1>
          <p className="text-gray-600 mb-6">
            {error}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              {breadcrumbs.map((item, index) => (
                <li key={item.name}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.current ? (
                      <span className="text-sm font-medium text-gray-500" aria-current="page">
                        {item.name}
                      </span>
                    ) : (
                      <a href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        {item.name}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Wszystkie produkty
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Odkryj pełną kolekcję naszych ręcznie robionych wyrobów szydełkowych. 
              Każdy produkt to kawałek serca i pasji do rękodzieła.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Szukaj produktów..."
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    updateFilters({ search: undefined });
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Filters Sidebar - Better Sizing */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="sticky top-6">
              <ProductFilters
                filters={filters}
                sort={sort}
                onFiltersChange={updateFilters}
                onSortChange={updateSort}
                onClearFilters={clearFilters}
                totalResults={total}
                loading={loading}
                availableMaterials={materials}
                availableColors={colors}
                priceRange={priceRange}
              />
            </div>
          </div>

          {/* Products Grid - Better Sizing */}
          <div className="lg:col-span-9 xl:col-span-9 mt-8 lg:mt-0">
            
            {/* Active Filters Display */}
            {(filters.search || filters.category || filters.materials?.length || filters.colors?.length || filters.stockType || filters.featured) && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-blue-900">Aktywne filtry:</span>
                  
                  {filters.search && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Szukane: "{filters.search}"
                      <button
                        onClick={() => updateFilters({ search: undefined })}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  
                  {filters.category && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Kategoria: {filters.category}
                      <button
                        onClick={() => updateFilters({ category: undefined, subcategory: undefined })}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  
                  {filters.materials?.map(material => (
                    <span key={material} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {material}
                      <button
                        onClick={() => {
                          const newMaterials = filters.materials?.filter(m => m !== material);
                          updateFilters({ materials: newMaterials?.length ? newMaterials : undefined });
                        }}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  
                  {filters.colors?.map(color => (
                    <span key={color} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {color}
                      <button
                        onClick={() => {
                          const newColors = filters.colors?.filter(c => c !== color);
                          updateFilters({ colors: newColors?.length ? newColors : undefined });
                        }}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  
                  {filters.stockType && filters.stockType !== 'all' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {filters.stockType === 'available' ? 'Dostępne od ręki' : 'Na zamówienie'}
                      <button
                        onClick={() => updateFilters({ stockType: undefined })}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  
                  {filters.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Polecane
                      <button
                        onClick={() => updateFilters({ featured: undefined })}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  
                  <button
                    onClick={clearFilters}
                    className="text-sm text-red-600 hover:text-red-800 font-medium ml-2"
                  >
                    Wyczyść wszystko
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <ProductGrid
              products={products}
              loading={loading}
              columns={{
                mobile: 1,
                tablet: 2,
                desktop: 3
              }}
              showCategory={true}
              cardSize="md"
              imageAspectRatio="square"
            />

            {/* Pagination */}
            <ProductGridPagination
              currentPage={page}
              totalPages={totalPages}
              hasNextPage={hasNextPage}
              hasPrevPage={hasPrevPage}
              onPageChange={updatePage}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {!loading && products.length > 0 && (
        <div className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Crimson Pro, serif' }}>
                Nie znalazłeś tego czego szukasz?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Specjalizujemy się w projektach na zamówienie. Skontaktuj się z nami, 
                a stworzymy coś wyjątkowego specjalnie dla Ciebie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Skontaktuj się z nami
                </a>
                <a
                  href="/kategorie"
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Przeglądaj kategorie
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup (Optional) */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Bądź na bieżąco z nowościami
              </h3>
              <p className="mt-1 text-blue-100">
                Otrzymuj powiadomienia o nowych produktach i promocjach.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex sm:items-center">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="px-4 py-2 border border-transparent rounded-l-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                />
                <button className="px-6 py-2 bg-blue-800 text-white rounded-r-lg hover:bg-blue-900 transition-colors font-medium">
                  Zapisz się
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;