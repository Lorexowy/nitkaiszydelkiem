// src/hooks/useProducts.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/types/product';
import { 
  getProducts, 
  getProductBySlug,
  getProductsByCategory,
  searchProducts,
  getAllMaterials,
  getAllColors,
  getPriceRange,
  ProductFilters, 
  ProductSortOption,
  ProductsResult 
} from '@/lib/data/products';

// Hook do pobierania listy produktów z filtrami
export const useProducts = (
  initialFilters: ProductFilters = {},
  initialSort: ProductSortOption = 'date-desc',
  initialPage: number = 1,
  limit: number = 12
) => {
  const [data, setData] = useState<ProductsResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProductFilters>(initialFilters);
  const [sort, setSort] = useState<ProductSortOption>(initialSort);
  const [page, setPage] = useState(initialPage);

  // Funkcja do ładowania produktów
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await getProducts(filters, sort, page, limit);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas ładowania produktów');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [filters, sort, page, limit]);

  // Ładuj produkty przy zmianach
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Funkcje do aktualizacji parametrów
  const updateFilters = useCallback((newFilters: Partial<ProductFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setPage(1); // Reset do pierwszej strony przy zmianie filtrów
  }, []);

  const updateSort = useCallback((newSort: ProductSortOption) => {
    setSort(newSort);
    setPage(1); // Reset do pierwszej strony przy zmianie sortowania
  }, []);

  const updatePage = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
    setPage(1);
  }, []);

  const refresh = useCallback(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    // Dane
    products: data?.products || [],
    total: data?.total || 0,
    totalPages: data?.totalPages || 0,
    hasNextPage: data?.hasNextPage || false,
    hasPrevPage: data?.hasPrevPage || false,
    
    // Stan
    loading,
    error,
    
    // Parametry
    filters,
    sort,
    page,
    
    // Funkcje
    updateFilters,
    updateSort,
    updatePage,
    clearFilters,
    refresh
  };
};

// Hook do pobierania pojedynczego produktu
export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        setNotFound(false);
        
        const result = await getProductBySlug(slug);
        
        if (result) {
          setProduct(result);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas ładowania produktu');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadProduct();
    }
  }, [slug]);

  const refresh = useCallback(async () => {
    if (slug) {
      try {
        setLoading(true);
        const result = await getProductBySlug(slug);
        setProduct(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas odświeżania produktu');
      } finally {
        setLoading(false);
      }
    }
  }, [slug]);

  return {
    product,
    loading,
    error,
    notFound,
    refresh
  };
};

// Hook do pobierania produktów z kategorii
export const useCategoryProducts = (
  categorySlug: string,
  subcategorySlug?: string,
  initialSort: ProductSortOption = 'date-desc',
  initialPage: number = 1,
  limit: number = 12
) => {
  const [data, setData] = useState<ProductsResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<ProductSortOption>(initialSort);
  const [page, setPage] = useState(initialPage);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await getProductsByCategory(categorySlug, subcategorySlug, sort, page, limit);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas ładowania produktów');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [categorySlug, subcategorySlug, sort, page, limit]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const updateSort = useCallback((newSort: ProductSortOption) => {
    setSort(newSort);
    setPage(1);
  }, []);

  const updatePage = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return {
    products: data?.products || [],
    total: data?.total || 0,
    totalPages: data?.totalPages || 0,
    hasNextPage: data?.hasNextPage || false,
    hasPrevPage: data?.hasPrevPage || false,
    loading,
    error,
    sort,
    page,
    updateSort,
    updatePage,
    refresh: loadProducts
  };
};

// Hook do wyszukiwania produktów
export const useProductSearch = (query: string, limit: number = 10) => {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchWithDelay = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const searchResults = await searchProducts(query, limit);
        setResults(searchResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas wyszukiwania');
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300); // Debounce 300ms

    return () => clearTimeout(searchWithDelay);
  }, [query, limit]);

  return {
    results,
    loading,
    error,
    hasResults: results.length > 0
  };
};

// Hook do pobierania opcji filtrów
export const useFilterOptions = () => {
  const [materials, setMaterials] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [materialsData, colorsData, priceData] = await Promise.all([
          getAllMaterials(),
          getAllColors(),
          getPriceRange()
        ]);
        
        setMaterials(materialsData);
        setColors(colorsData);
        setPriceRange(priceData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas ładowania opcji filtrów');
      } finally {
        setLoading(false);
      }
    };

    loadFilterOptions();
  }, []);

  return {
    materials,
    colors,
    priceRange,
    loading,
    error
  };
};

// Hook do zarządzania URL params (opcjonalny, przydatny do shareable URLs)
export const useProductsUrlParams = () => {
  const [urlParams, setUrlParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrlParams(new URLSearchParams(window.location.search));
    }
  }, []);

  const updateUrlParams = useCallback((params: Record<string, string | number | undefined>) => {
    if (typeof window === 'undefined') return;

    const newUrlParams = new URLSearchParams(window.location.search);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        newUrlParams.set(key, String(value));
      } else {
        newUrlParams.delete(key);
      }
    });

    const newUrl = `${window.location.pathname}?${newUrlParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setUrlParams(newUrlParams);
  }, []);

  const getUrlParam = useCallback((key: string) => {
    return urlParams?.get(key) || undefined;
  }, [urlParams]);

  return {
    updateUrlParams,
    getUrlParam
  };
};