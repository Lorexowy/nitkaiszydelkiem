// Typy dla produktów i kategorii
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories?: ProductCategory[];
}

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
  weight: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  subcategory?: string;
  price: number;
  images: string[];
  thumbnail: string;
  
  // System magazynowy
  stockType: 'available' | 'made-to-order' | 'out-of-stock';
  stockQuantity: number;
  lowStockThreshold: number;
  canOrderMore: boolean;
  estimatedDeliveryTime?: string;
  
  // Metadane
  materials: string[];
  dimensions: ProductDimensions;
  colors: string[];
  tags: string[];
  featured: boolean;
  active: boolean;
  
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductAvailability {
  status: 'available' | 'out-of-stock' | 'made-to-order' | 'unavailable';
  message: string;
  canBuyNow: boolean;
  canOrderMore: boolean;
  showNotifyButton?: boolean;
  showContactButton?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  updatedAt: Date;
}