// src/lib/data/products.ts
import { Product, ProductCategory } from '@/types/product';
import { dummyProducts, categories } from '@/lib/constants';

// Filtry dla produktów
export interface ProductFilters {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  materials?: string[];
  colors?: string[];
  stockType?: 'available' | 'made-to-order' | 'all';
  search?: string;
  featured?: boolean;
}

// Opcje sortowania
export type ProductSortOption = 
  | 'name-asc' 
  | 'name-desc' 
  | 'price-asc' 
  | 'price-desc' 
  | 'date-desc' 
  | 'date-asc'
  | 'featured';

// Rezultat z paginacją
export interface ProductsResult {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// GŁÓWNE FUNKCJE - łatwo zmienić na Firebase później

/**
 * Pobiera wszystkie produkty z filtrami i sortowaniem
 * TERAZ: z dummyProducts
 * PÓŹNIEJ: z Firebase Firestore
 */
export const getProducts = async (
  filters: ProductFilters = {},
  sort: ProductSortOption = 'date-desc',
  page: number = 1,
  limit: number = 12
): Promise<ProductsResult> => {
  
  // Symulacja async (Firebase będzie async)
  await new Promise(resolve => setTimeout(resolve, 100));
  
  let filteredProducts = [...dummyProducts];
  
  // Zastosuj filtry
  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }
  
  if (filters.subcategory) {
    filteredProducts = filteredProducts.filter(p => p.subcategory === filters.subcategory);
  }
  
  if (filters.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!);
  }
  
  if (filters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!);
  }
  
  if (filters.materials && filters.materials.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      filters.materials!.some(material => p.materials.includes(material))
    );
  }
  
  if (filters.colors && filters.colors.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      filters.colors!.some(color => p.colors.includes(color))
    );
  }
  
  if (filters.stockType && filters.stockType !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.stockType === filters.stockType);
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }
  
  if (filters.featured) {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }
  
  // Tylko aktywne produkty
  filteredProducts = filteredProducts.filter(p => p.active);
  
  // Zastosuj sortowanie
  filteredProducts.sort((a, b) => {
    switch (sort) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'date-asc':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'date-desc':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });
  
  // Paginacja
  const total = filteredProducts.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  return {
    products: paginatedProducts,
    total,
    page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
};

/**
 * Pobiera pojedynczy produkt po slug
 * TERAZ: z dummyProducts
 * PÓŹNIEJ: z Firebase Firestore
 */
export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  // Symulacja async
  await new Promise(resolve => setTimeout(resolve, 50));
  
  const product = dummyProducts.find(p => p.slug === slug && p.active);
  return product || null;
};

/**
 * Pobiera produkty z kategorii
 * TERAZ: z dummyProducts
 * PÓŹNIEJ: z Firebase Firestore
 */
export const getProductsByCategory = async (
  categorySlug: string,
  subcategorySlug?: string,
  sort: ProductSortOption = 'date-desc',
  page: number = 1,
  limit: number = 12
): Promise<ProductsResult> => {
  
  const filters: ProductFilters = {
    category: categorySlug,
    subcategory: subcategorySlug
  };
  
  return getProducts(filters, sort, page, limit);
};

/**
 * Pobiera wszystkie dostępne kategorie
 * TERAZ: ze stałych
 * PÓŹNIEJ: z Firebase Firestore
 */
export const getCategories = async (): Promise<ProductCategory[]> => {
  // Symulacja async
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return categories;
};

/**
 * Pobiera kategorię po slug
 * TERAZ: ze stałych
 * PÓŹNIEJ: z Firebase Firestore
 */
export const getCategoryBySlug = async (slug: string): Promise<ProductCategory | null> => {
  // Symulacja async
  await new Promise(resolve => setTimeout(resolve, 50));
  
  const category = categories.find(c => c.slug === slug);
  return category || null;
};

/**
 * Pobiera wszystkie unikalne materiały z produktów
 * Przydatne do filtrów
 */
export const getAllMaterials = async (): Promise<string[]> => {
  await new Promise(resolve => setTimeout(resolve, 50));
  
  const allMaterials = dummyProducts
    .flatMap(p => p.materials)
    .filter((material, index, arr) => arr.indexOf(material) === index)
    .sort();
    
  return allMaterials;
};

/**
 * Pobiera wszystkie unikalne kolory z produktów
 * Przydatne do filtrów
 */
export const getAllColors = async (): Promise<string[]> => {
  await new Promise(resolve => setTimeout(resolve, 50));
  
  const allColors = dummyProducts
    .flatMap(p => p.colors)
    .filter((color, index, arr) => arr.indexOf(color) === index)
    .sort();
    
  return allColors;
};

/**
 * Pobiera zakres cen (min, max)
 * Przydatne do filtra ceny
 */
export const getPriceRange = async (): Promise<{ min: number; max: number }> => {
  await new Promise(resolve => setTimeout(resolve, 50));
  
  const prices = dummyProducts.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

/**
 * Wyszukiwanie produktów
 * TERAZ: proste filtrowanie
 * PÓŹNIEJ: może Elasticsearch lub Firebase Search
 */
export const searchProducts = async (
  query: string,
  limit: number = 10
): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (!query.trim()) return [];
  
  const searchLower = query.toLowerCase();
  
  return dummyProducts
    .filter(p => 
      p.active && (
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.longDescription.toLowerCase().includes(searchLower) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        p.materials.some(material => material.toLowerCase().includes(searchLower))
      )
    )
    .slice(0, limit);
};

// Funkcje utility

/**
 * Buduje breadcrumbs dla kategorii
 */
export const buildCategoryBreadcrumbs = (category: ProductCategory, subcategory?: ProductCategory) => {
  const breadcrumbs = [
    { name: 'Strona główna', href: '/' },
    { name: 'Produkty', href: '/produkty' },
    { name: category.name, href: `/kategorie/${category.slug}` }
  ];
  
  if (subcategory) {
    breadcrumbs.push({
      name: subcategory.name,
      href: `/kategorie/${category.slug}/${subcategory.slug}`
    });
  }
  
  return breadcrumbs;
};

/**
 * Buduje breadcrumbs dla produktu
 */
export const buildProductBreadcrumbs = (product: Product, category?: ProductCategory) => {
  const breadcrumbs = [
    { name: 'Strona główna', href: '/' },
    { name: 'Produkty', href: '/produkty' }
  ];
  
  if (category) {
    breadcrumbs.push({
      name: category.name,
      href: `/kategorie/${category.slug}`
    });
  }
  
  breadcrumbs.push({
    name: product.name,
    href: `/produkty/${product.slug}`
  });
  
  return breadcrumbs;
};