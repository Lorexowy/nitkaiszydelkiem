// src/components/products/ProductFilters.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ProductFilters, ProductSortOption } from '@/lib/data/products';
import { categories } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  filters: ProductFilters;
  sort: ProductSortOption;
  onFiltersChange: (filters: Partial<ProductFilters>) => void;
  onSortChange: (sort: ProductSortOption) => void;
  onClearFilters: () => void;
  totalResults: number;
  loading?: boolean;
  // Opcje filtrów
  availableMaterials?: string[];
  availableColors?: string[];
  priceRange?: { min: number; max: number };
}

const ProductFiltersComponent: React.FC<ProductFiltersProps> = ({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
  onClearFilters,
  totalResults,
  loading = false,
  availableMaterials = [],
  availableColors = [],
  priceRange = { min: 0, max: 1000 }
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [localPriceRange, setLocalPriceRange] = useState([
    filters.minPrice || priceRange.min,
    filters.maxPrice || priceRange.max
  ]);

  // Synchronizuj lokalny stan z propsami
  useEffect(() => {
    setLocalPriceRange([
      filters.minPrice || priceRange.min,
      filters.maxPrice || priceRange.max
    ]);
  }, [filters.minPrice, filters.maxPrice, priceRange]);

  // Opcje sortowania
  const sortOptions = [
    { value: 'date-desc', label: 'Najnowsze' },
    { value: 'date-asc', label: 'Najstarsze' },
    { value: 'price-asc', label: 'Cena: od najniższej' },
    { value: 'price-desc', label: 'Cena: od najwyższej' },
    { value: 'name-asc', label: 'Nazwa: A-Z' },
    { value: 'name-desc', label: 'Nazwa: Z-A' },
    { value: 'featured', label: 'Polecane' }
  ];

  const stockTypeOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'available', label: 'Dostępne od ręki' },
    { value: 'made-to-order', label: 'Na zamówienie' }
  ];

  // Handler dla zmiany ceny - z debounce
  const handlePriceChange = (min: number, max: number) => {
    setLocalPriceRange([min, max]);
    
    // Debounce - aktualizuj filtry po 500ms
    setTimeout(() => {
      onFiltersChange({
        minPrice: min === priceRange.min ? undefined : min,
        maxPrice: max === priceRange.max ? undefined : max
      });
    }, 500);
  };

  // Sprawdź czy są aktywne filtry
  const hasActiveFilters = Object.keys(filters).some(key => {
    const value = filters[key as keyof ProductFilters];
    return value !== undefined && value !== '' && 
           (Array.isArray(value) ? value.length > 0 : true);
  });

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      
      {/* HEADER - Results Count & Sort */}
      <div className="p-4 lg:p-6 bg-gray-50 border-b border-gray-200">
        
        {/* Mobile Layout */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <div className="flex items-center space-x-3">
            {loading ? (
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                Ładowanie...
              </div>
            ) : (
              <div className="text-sm font-medium text-gray-700">
                <span className="text-blue-600 font-semibold">{totalResults}</span>
                <span className="ml-1">
                  {totalResults === 1 ? 'produkt' : totalResults < 5 ? 'produkty' : 'produktów'}
                </span>
              </div>
            )}
          </div>
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className={cn(
              "inline-flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200",
              isFiltersOpen 
                ? "bg-blue-600 text-white border-blue-600 shadow-lg" 
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm"
            )}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filtry</span>
            {hasActiveFilters && (
              <span className={cn(
                "w-2 h-2 rounded-full",
                isFiltersOpen ? "bg-white" : "bg-blue-600"
              )}></span>
            )}
          </button>
        </div>

        {/* Desktop Layout - Compact Header */}
        <div className="hidden lg:block space-y-4">
          
          {/* Results Count */}
          <div className="flex items-center justify-between">
            {loading ? (
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                Ładowanie...
              </div>
            ) : (
              <div className="text-sm font-medium text-gray-700">
                <span className="text-blue-600 font-semibold">{totalResults}</span>
                <span className="ml-1">
                  {totalResults === 1 ? 'produkt' : totalResults < 5 ? 'produkty' : 'produktów'}
                </span>
              </div>
            )}

            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-xs font-medium text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                Wyczyść
              </button>
            )}
          </div>

          {/* Compact Sort - Desktop */}
          <div>
            <label htmlFor="sort-desktop" className="block text-xs font-medium text-gray-600 mb-2">
              Sortowanie:
            </label>
            <select
              id="sort-desktop"
              value={sort}
              onChange={(e) => onSortChange(e.target.value as ProductSortOption)}
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:border-gray-400 transition-colors"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Sort - when filters are open */}
        <div className={cn(
          "lg:hidden transition-all duration-300 ease-out",
          isFiltersOpen ? "block mt-4" : "hidden"
        )}>
          <div>
            <label htmlFor="sort-mobile" className="block text-xs font-medium text-gray-600 mb-2">
              Sortowanie:
            </label>
            <select
              id="sort-mobile"
              value={sort}
              onChange={(e) => onSortChange(e.target.value as ProductSortOption)}
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:border-gray-400 transition-colors"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <div className="mt-4">
              <button
                onClick={onClearFilters}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Wyczyść wszystkie filtry
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FILTERS SECTION - Collapsible na mobile, zawsze widoczne na desktop */}
      <div className={cn(
        "transition-all duration-300 ease-out lg:block",
        isFiltersOpen 
          ? "block opacity-100" 
          : "hidden lg:block opacity-0 lg:opacity-100"
      )}>
        <div className="p-4 lg:p-6 space-y-8">
          
          {/* KATEGORIE */}
          <FilterSection title="Kategorie" icon="📂">
            <div className="space-y-3">
              <FilterRadio
                name="category"
                checked={!filters.category}
                onChange={() => onFiltersChange({ category: undefined, subcategory: undefined })}
                label="Wszystkie kategorie"
              />
              
              {categories.map(category => (
                <div key={category.id} className="space-y-2">
                  <FilterRadio
                    name="category"
                    checked={filters.category === category.id}
                    onChange={() => onFiltersChange({ 
                      category: category.id, 
                      subcategory: undefined 
                    })}
                    label={
                      <span className="flex items-center">
                        <span className="text-lg mr-2">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </span>
                    }
                  />
                  
                  {/* Podkategorie */}
                  {filters.category === category.id && category.subcategories && (
                    <div className="ml-8 space-y-2 mt-3 pb-2 border-l-2 border-gray-100 pl-4">
                      {category.subcategories.map(subcategory => (
                        <FilterRadio
                          key={subcategory.id}
                          name="subcategory"
                          checked={filters.subcategory === subcategory.id}
                          onChange={() => onFiltersChange({ subcategory: subcategory.id })}
                          label={subcategory.name}
                          size="sm"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FilterSection>

          {/* ZAKRES CEN */}
          <FilterSection title="Zakres cen" icon="💰">
            <div className="space-y-4">
              {/* Input fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Cena od
                  </label>
                  <input
                    type="number"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={localPriceRange[0]}
                    onChange={(e) => handlePriceChange(Number(e.target.value), localPriceRange[1])}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    placeholder={String(priceRange.min)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Cena do
                  </label>
                  <input
                    type="number"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={localPriceRange[1]}
                    onChange={(e) => handlePriceChange(localPriceRange[0], Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    placeholder={String(priceRange.max)}
                  />
                </div>
              </div>
              
              {/* Range slider */}
              <div className="relative pt-2">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>{priceRange.min} zł</span>
                  <span>{priceRange.max} zł</span>
                </div>
                <input
                  type="range"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={localPriceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), localPriceRange[1])}
                  className="range-slider absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={localPriceRange[1]}
                  onChange={(e) => handlePriceChange(localPriceRange[0], Number(e.target.value))}
                  className="range-slider absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </FilterSection>

          {/* DOSTĘPNOŚĆ */}
          <FilterSection title="Dostępność" icon="📦">
            <div className="space-y-3">
              {stockTypeOptions.map(option => (
                <FilterRadio
                  key={option.value}
                  name="stockType"
                  checked={(filters.stockType || 'all') === option.value}
                  onChange={() => onFiltersChange({ 
                    stockType: option.value === 'all' ? undefined : option.value as 'available' | 'made-to-order'
                  })}
                  label={option.label}
                />
              ))}
            </div>
          </FilterSection>

          {/* MATERIAŁY */}
          {availableMaterials.length > 0 && (
            <FilterSection title="Materiały" icon="🧵">
              <div className="space-y-3 max-h-40 overflow-y-auto scrollbar-thin">
                {availableMaterials.map(material => (
                  <FilterCheckbox
                    key={material}
                    checked={filters.materials?.includes(material) || false}
                    onChange={(checked) => {
                      const currentMaterials = filters.materials || [];
                      const newMaterials = checked
                        ? [...currentMaterials, material]
                        : currentMaterials.filter(m => m !== material);
                      onFiltersChange({ 
                        materials: newMaterials.length > 0 ? newMaterials : undefined 
                      });
                    }}
                    label={material}
                  />
                ))}
              </div>
            </FilterSection>
          )}

          {/* KOLORY */}
          {availableColors.length > 0 && (
            <FilterSection title="Kolory" icon="🎨">
              <div className="flex flex-wrap gap-2">
                {availableColors.map(color => (
                  <FilterPill
                    key={color}
                    active={filters.colors?.includes(color) || false}
                    onClick={() => {
                      const currentColors = filters.colors || [];
                      const newColors = currentColors.includes(color)
                        ? currentColors.filter(c => c !== color)
                        : [...currentColors, color];
                      onFiltersChange({ 
                        colors: newColors.length > 0 ? newColors : undefined 
                      });
                    }}
                    label={color}
                  />
                ))}
              </div>
            </FilterSection>
          )}

          {/* TYLKO POLECANE */}
          <FilterSection title="Specjalne" icon="⭐">
            <FilterCheckbox
              checked={filters.featured || false}
              onChange={(checked) => onFiltersChange({ 
                featured: checked || undefined 
              })}
              label="Tylko polecane produkty"
            />
          </FilterSection>
        </div>
      </div>
    </div>
  );
};

// SUBCOMPONENTS

// Filter Section Container
const FilterSection: React.FC<{
  title: string;
  icon: string;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
    <h3 className="flex items-center text-sm font-semibold text-gray-900 mb-4">
      <span className="text-base mr-2">{icon}</span>
      {title}
    </h3>
    {children}
  </div>
);

// Radio Button Component
const FilterRadio: React.FC<{
  name: string;
  checked: boolean;
  onChange: () => void;
  label: React.ReactNode;
  size?: 'sm' | 'md';
}> = ({ name, checked, onChange, label, size = 'md' }) => (
  <label className={cn(
    "flex items-center cursor-pointer group",
    size === 'sm' ? "py-1" : "py-1.5"
  )}>
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      className={cn(
        "text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 transition-colors",
        size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"
      )}
    />
    <span className={cn(
      "ml-3 text-gray-700 group-hover:text-gray-900 transition-colors",
      size === 'sm' ? "text-xs" : "text-sm",
      checked && "font-medium text-gray-900"
    )}>
      {label}
    </span>
  </label>
);

// Checkbox Component
const FilterCheckbox: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}> = ({ checked, onChange, label }) => (
  <label className="flex items-center cursor-pointer group py-1.5">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="w-4 h-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-colors"
    />
    <span className={cn(
      "ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors",
      checked && "font-medium text-gray-900"
    )}>
      {label}
    </span>
  </label>
);

// Color Pill Component
const FilterPill: React.FC<{
  active: boolean;
  onClick: () => void;
  label: string;
}> = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 cursor-pointer hover:scale-105",
      active
        ? "bg-blue-600 text-white border-blue-600 shadow-md"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
    )}
  >
    {label}
  </button>
);

export default ProductFiltersComponent;