// src/components/products/ProductFilters.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
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

  // Refs dla range sliderów
  const minSliderRef = useRef<HTMLInputElement>(null);
  const maxSliderRef = useRef<HTMLInputElement>(null);
  const rangeTrackRef = useRef<HTMLDivElement>(null);

  // Synchronizuj lokalny stan z propsami
  useEffect(() => {
    setLocalPriceRange([
      filters.minPrice || priceRange.min,
      filters.maxPrice || priceRange.max
    ]);
  }, [filters.minPrice, filters.maxPrice, priceRange]);

  // Aktualizuj wizualny range track
  useEffect(() => {
    updateRangeTrack();
  }, [localPriceRange, priceRange]);

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

  // Funkcja do aktualizacji wizualnego tracka
  const updateRangeTrack = () => {
    if (!rangeTrackRef.current) return;

    const [min, max] = localPriceRange;
    const { min: rangeMin, max: rangeMax } = priceRange;
    
    const leftPercent = ((min - rangeMin) / (rangeMax - rangeMin)) * 100;
    const rightPercent = ((max - rangeMin) / (rangeMax - rangeMin)) * 100;
    
    rangeTrackRef.current.style.left = `${leftPercent}%`;
    rangeTrackRef.current.style.width = `${rightPercent - leftPercent}%`;
  };

  // Handler dla zmiany minimum - z debounce
  const handleMinChange = (value: number) => {
    const newMin = Math.min(value, localPriceRange[1] - 1);
    const newRange = [newMin, localPriceRange[1]];
    setLocalPriceRange(newRange);
    
    // Debounce - aktualizuj filtry po 500ms
    setTimeout(() => {
      onFiltersChange({
        minPrice: newMin === priceRange.min ? undefined : newMin,
        maxPrice: newRange[1] === priceRange.max ? undefined : newRange[1]
      });
    }, 500);
  };

  // Handler dla zmiany maximum - z debounce
  const handleMaxChange = (value: number) => {
    const newMax = Math.max(value, localPriceRange[0] + 1);
    const newRange = [localPriceRange[0], newMax];
    setLocalPriceRange(newRange);
    
    // Debounce - aktualizuj filtry po 500ms
    setTimeout(() => {
      onFiltersChange({
        minPrice: newRange[0] === priceRange.min ? undefined : newRange[0],
        maxPrice: newMax === priceRange.max ? undefined : newMax
      });
    }, 500);
  };

  // Handler dla input field changes
  const handleInputMinChange = (value: number) => {
    const clampedValue = Math.min(Math.max(value, priceRange.min), localPriceRange[1] - 1);
    handleMinChange(clampedValue);
  };

  const handleInputMaxChange = (value: number) => {
    const clampedValue = Math.max(Math.min(value, priceRange.max), localPriceRange[0] + 1);
    handleMaxChange(clampedValue);
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

          {/* ZAKRES CEN - POPRAWIONY DUAL RANGE SLIDER */}
          <FilterSection title="Zakres cen" icon="💰">
            <div className="space-y-6">
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
                    onChange={(e) => handleInputMinChange(Number(e.target.value))}
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
                    onChange={(e) => handleInputMaxChange(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    placeholder={String(priceRange.max)}
                  />
                </div>
              </div>
              
              {/* POPRAWIONY Dual Range Slider */}
              <div className="relative pt-2">
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>{priceRange.min} zł</span>
                  <span>{priceRange.max} zł</span>
                </div>
                
                {/* Slider Container */}
                <div className="relative">
                  {/* Track Background */}
                  <div className="h-2 bg-gray-200 rounded-lg relative">
                    {/* Active Track */}
                    <div
                      ref={rangeTrackRef}
                      className="absolute h-2 bg-blue-500 rounded-lg"
                      style={{
                        left: `${((localPriceRange[0] - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
                        width: `${((localPriceRange[1] - localPriceRange[0]) / (priceRange.max - priceRange.min)) * 100}%`
                      }}
                    />
                  </div>
                  
                  {/* Min Range Input */}
                  <input
                    ref={minSliderRef}
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={localPriceRange[0]}
                    onChange={(e) => handleMinChange(Number(e.target.value))}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb-min"
                    style={{ zIndex: localPriceRange[0] > priceRange.max - 100 ? 5 : 1 }}
                  />
                  
                  {/* Max Range Input */}
                  <input
                    ref={maxSliderRef}
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={localPriceRange[1]}
                    onChange={(e) => handleMaxChange(Number(e.target.value))}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb-max"
                    style={{ zIndex: localPriceRange[1] < priceRange.min + 100 ? 5 : 1 }}
                  />
                </div>
                
                {/* Current Values Display */}
                <div className="flex justify-between text-sm font-medium text-gray-700 mt-3">
                  <span>{localPriceRange[0]} zł</span>
                  <span>{localPriceRange[1]} zł</span>
                </div>
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