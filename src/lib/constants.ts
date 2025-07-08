import { Product, ProductCategory } from '@/types/product';

// Kategorie produktów
export const categories: ProductCategory[] = [
  {
    id: "zabawki",
    name: "Zabawki",
    slug: "zabawki",
    description: "Bezpieczne zabawki szydełkowe dla dzieci",
    icon: "🧸",
    subcategories: [
      { id: "grzechotki", name: "Grzechotki", slug: "grzechotki", description: "", icon: "🔔" },
      { id: "lalki", name: "Lalki", slug: "lalki", description: "", icon: "👶" },
      { id: "maskotki", name: "Maskotki", slug: "maskotki", description: "", icon: "🐻" },
      { id: "klocki-szydelkowe", name: "Klocki szydełkowe", slug: "klocki-szydelkowe", description: "", icon: "🧱" }
    ]
  },
  {
    id: "odziez",
    name: "Odzież",
    slug: "odziez",
    description: "Ciepła odzież szydełkowa dla całej rodziny",
    icon: "👗",
    subcategories: [
      { id: "czapki", name: "Czapki", slug: "czapki", description: "", icon: "🧢" },
      { id: "rekawiczki", name: "Rękawiczki", slug: "rekawiczki", description: "", icon: "🧤" },
      { id: "chusty", name: "Chusty", slug: "chusty", description: "", icon: "🧣" },
      { id: "sukienki", name: "Sukienki", slug: "sukienki", description: "", icon: "👗" },
      { id: "swetry", name: "Swetry", slug: "swetry", description: "", icon: "🧥" }
    ]
  },
  {
    id: "dekoracje-domowe",
    name: "Dekoracje domowe",
    slug: "dekoracje-domowe",
    description: "Piękne dekoracje do domu i ogrodu",
    icon: "🏠",
    subcategories: [
      { id: "mandale", name: "Mandale", slug: "mandale", description: "", icon: "🌸" },
      { id: "ramki", name: "Ramki z postaciami", slug: "ramki", description: "", icon: "🖼️" },
      { id: "podkladki", name: "Podkładki pod kubki", slug: "podkladki", description: "", icon: "☕" },
      { id: "obrusy", name: "Obrusy", slug: "obrusy", description: "", icon: "🍽️" },
      { id: "koszyki", name: "Koszyki", slug: "koszyki", description: "", icon: "🧺" }
    ]
  },
  {
    id: "dekoracje-sezonowe",
    name: "Dekoracje sezonowe",
    slug: "dekoracje-sezonowe",
    description: "Dekoracje na każdą porę roku i święta",
    icon: "🎄",
    subcategories: [
      { id: "wielkanoc", name: "Wielkanoc", slug: "wielkanoc", description: "", icon: "🐰" },
      { id: "boze-narodzenie", name: "Boże Narodzenie", slug: "boze-narodzenie", description: "", icon: "🎄" },
      { id: "halloween", name: "Halloween", slug: "halloween", description: "", icon: "🎃" },
      { id: "wiosna", name: "Wiosna", slug: "wiosna", description: "", icon: "🌸" },
      { id: "lato", name: "Lato", slug: "lato", description: "", icon: "☀️" }
    ]
  },
  {
    id: "akcesoria",
    name: "Akcesoria",
    slug: "akcesoria",
    description: "Małe akcesoria szydełkowe na każdą okazję",
    icon: "👜",
    subcategories: [
      { id: "breloki", name: "Breloki", slug: "breloki", description: "", icon: "🔑" },
      { id: "bransoletki", name: "Bransoletki", slug: "bransoletki", description: "", icon: "💎" },
      { id: "spinki", name: "Spinki do włosów", slug: "spinki", description: "", icon: "💫" },
      { id: "naszyjniki", name: "Naszyjniki", slug: "naszyjniki", description: "", icon: "📿" }
    ]
  }
];

// Przykładowe produkty do testów
export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Szydełkowa grzechotka - Kotek",
    slug: "grzechotka-kotek",
    description: "Miękka i bezpieczna grzechotka dla niemowląt w kształcie kotka",
    longDescription: "Ręcznie szydełkowana grzechotka wykonana z najwyższej jakości bawełny organicznej. Idealny pierwszy przyjaciółka dla maluszka. Wypełniona bezpiecznym wkładem grzechotkowym, który wydaje delikatny dźwięk.",
    category: "zabawki",
    subcategory: "grzechotki",
    price: 35.00,
    images: ["/images/grzechotka-kotek-1.jpg", "/images/grzechotka-kotek-2.jpg"],
    thumbnail: "/images/grzechotka-kotek-thumb.jpg",
    stockType: "available",
    stockQuantity: 12,
    lowStockThreshold: 5,
    canOrderMore: true,
    estimatedDeliveryTime: "2-3 dni",
    materials: ["Bawełna organiczna", "Wypełnienie poliestrowe", "Wkład grzechotkowy"],
    dimensions: { length: 15, width: 10, height: 8, weight: 0.08 },
    colors: ["Różowy", "Biały", "Szary"],
    tags: ["niemowlęta", "bezpieczne", "grzechotka", "kotek"],
    featured: true,
    active: true,
    seoTitle: "Szydełkowa grzechotka kotek - bezpieczna zabawka dla niemowląt",
    seoDescription: "Ręcznie szydełkowana grzechotka w kształcie kotka. Wykonana z bawełny organicznej, bezpieczna dla niemowląt.",
    seoKeywords: ["grzechotka", "szydełkowa", "niemowlę", "kotek", "bawełna organiczna"],
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20")
  },
  {
    id: "2",
    name: "Czapka zimowa - Wzór norweski",
    slug: "czapka-zimowa-norweski",
    description: "Ciepła czapka zimowa z tradycyjnym wzorem norweskim",
    longDescription: "Przepiękna czapka zimowa wykonana z wysokiej jakości włóczki wełnianej. Tradycyjny norweski wzór w kolorach naturalnych. Zapewnia doskonałą ochronę przed zimnem dzięki podszewce z miękkiej bawełny.",
    category: "odziez",
    subcategory: "czapki",
    price: 89.00,
    images: ["/images/czapka-norweski-1.jpg", "/images/czapka-norweski-2.jpg", "/images/czapka-norweski-3.jpg"],
    thumbnail: "/images/czapka-norweski-thumb.jpg",
    stockType: "made-to-order",
    stockQuantity: 0,
    lowStockThreshold: 0,
    canOrderMore: true,
    estimatedDeliveryTime: "7-10 dni",
    materials: ["Włóczka wełniana", "Podszewka bawełniana"],
    dimensions: { length: 25, width: 25, height: 20, weight: 0.15 },
    colors: ["Biały", "Czerwony", "Granatowy"],
    tags: ["zima", "ciepła", "norweski", "wzór"],
    featured: false,
    active: true,
    seoTitle: "Szydełkowa czapka zimowa z norweskim wzorem",
    seoDescription: "Ciepła czapka zimowa z tradycyjnym wzorem norweskim. Wykonana z wysokiej jakości włóczki wełnianej.",
    seoKeywords: ["czapka", "zimowa", "norweski", "wzór", "wełniana"],
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-18")
  },
  {
    id: "3",
    name: "Mandala ścienna - Kwiat lotosu",
    slug: "mandala-kwiat-lotosu",
    description: "Dekoracyjna mandala ścienna w kształcie kwiatu lotosu",
    longDescription: "Ręcznie szydełkowana mandala o średnicy 40cm, wykonana z bawełny merceryzowanej. Idealny element dekoracyjny do salonu, sypialni lub gabinetu. Każda mandala jest unikalna i wykonana z najwyższą starannością.",
    category: "dekoracje-domowe",
    subcategory: "mandale",
    price: 125.00,
    images: ["/images/mandala-lotos-1.jpg", "/images/mandala-lotos-2.jpg"],
    thumbnail: "/images/mandala-lotos-thumb.jpg",
    stockType: "available",
    stockQuantity: 3,
    lowStockThreshold: 5,
    canOrderMore: true,
    estimatedDeliveryTime: "natychmiast",
    materials: ["Bawełna merceryzowana", "Obręcz drewniana"],
    dimensions: { length: 40, width: 40, height: 2, weight: 0.2 },
    colors: ["Ecru", "Biały", "Kremowy"],
    tags: ["mandala", "dekoracja", "lotos", "ściana"],
    featured: true,
    active: true,
    seoTitle: "Szydełkowa mandala ścienna - kwiat lotosu 40cm",
    seoDescription: "Ręcznie szydełkowana mandala ścienna w kształcie kwiatu lotosu. Średnica 40cm, wykonana z bawełny merceryzowanej.",
    seoKeywords: ["mandala", "ścienna", "lotos", "dekoracja", "szydełkowa"],
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-22")
  },
  {
    id: "4",
    name: "Choinka świąteczna - Zielona",
    slug: "choinka-swiateczna-zielona",
    description: "Szydełkowa choinka świąteczna z ozdobami",
    longDescription: "Przepiękna szydełkowa choinka o wysokości 25cm, wykonana z zielonej włóczki akrylowej. Ozdobiona kolorowymi bombkami i gwiazdką na szczycie. Idealna na stół świąteczny lub jako element dekoracyjny.",
    category: "dekoracje-sezonowe",
    subcategory: "boze-narodzenie",
    price: 65.00,
    images: ["/images/choinka-zielona-1.jpg", "/images/choinka-zielona-2.jpg"],
    thumbnail: "/images/choinka-zielona-thumb.jpg",
    stockType: "out-of-stock",
    stockQuantity: 0,
    lowStockThreshold: 3,
    canOrderMore: true,
    estimatedDeliveryTime: "10-14 dni",
    materials: ["Włóczka akrylowa", "Wypełnienie poliestrowe", "Ozdoby"],
    dimensions: { length: 15, width: 15, height: 25, weight: 0.25 },
    colors: ["Zielony", "Czerwony", "Złoty"],
    tags: ["choinka", "święta", "bożenarodzenie", "dekoracja"],
    featured: false,
    active: true,
    seoTitle: "Szydełkowa choinka świąteczna 25cm - ozdoby",
    seoDescription: "Ręcznie szydełkowana choinka świąteczna z ozdobami. Wysokość 25cm, idealna na stół świąteczny.",
    seoKeywords: ["choinka", "świąteczna", "szydełkowa", "ozdoby", "boże narodzenie"],
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-25")
  },
  {
    id: "5",
    name: "Brelok - Serce z inicjałami",
    slug: "brelok-serce-inicjaly",
    description: "Personalny brelok w kształcie serca z inicjałami",
    longDescription: "Uroczy brelok w kształcie serca z możliwością wyhaftowania inicjałów. Wykonany z miękkiej bawełny, idealny na prezent dla bliskiej osoby. Solidne wykonanie zapewnia długotrwałe użytkowanie.",
    category: "akcesoria",
    subcategory: "breloki",
    price: 18.00,
    images: ["/images/brelok-serce-1.jpg", "/images/brelok-serce-2.jpg"],
    thumbnail: "/images/brelok-serce-thumb.jpg",
    stockType: "made-to-order",
    stockQuantity: 0,
    lowStockThreshold: 0,
    canOrderMore: true,
    estimatedDeliveryTime: "3-5 dni",
    materials: ["Bawełna", "Nić do haftu", "Kółko metalowe"],
    dimensions: { length: 8, width: 8, height: 2, weight: 0.02 },
    colors: ["Czerwony", "Różowy", "Biały", "Ecru"],
    tags: ["brelok", "serce", "inicjały", "prezent", "personalny"],
    featured: false,
    active: true,
    seoTitle: "Personalny brelok serce z inicjałami - prezent",
    seoDescription: "Szydełkowy brelok w kształcie serca z możliwością wyhaftowania inicjałów. Idealny prezent personalny.",
    seoKeywords: ["brelok", "serce", "inicjały", "prezent", "personalny"],
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-19")
  }
];

// Stałe aplikacji
export const APP_CONFIG = {
  name: "Nitką i Szydełkiem",
  description: "Sklep z ręcznie robionymi wyrobami szydełkowymi",
  url: "https://nitkaiszydelkiem.pl",
  email: "kontakt@nitkaiszydelkiem.pl",
  phone: "+48 123 456 789",
  address: "Warszawa, Polska",
  
  // Limity
  maxCartItems: 99,
  maxProductImages: 10,
  maxProductNameLength: 100,
  maxProductDescriptionLength: 500,
  
  // Domyślne ustawienia
  defaultCurrency: "PLN",
  defaultLanguage: "pl",
  defaultItemsPerPage: 12,
  
  // Obrazy domyślne
  defaultProductImage: "/images/placeholder-product.png",
  defaultCategoryImage: "/images/placeholder-category.png",
  
  // Social media
  socialMedia: {
    facebook: "https://facebook.com/nitkaiszydelkiem",
    instagram: "https://instagram.com/nitkaiszydelkiem",
    pinterest: "https://pinterest.com/nitkaiszydelkiem",
    youtube: "https://youtube.com/@nitkaiszydelkiem"
  }
};

// Funkcje utility
export const getProductAvailability = (product: Product) => {
  if (product.stockType === 'available' && product.stockQuantity > 0) {
    return {
      status: 'available' as const,
      message: `Dostępne: ${product.stockQuantity} szt. (wysyłka natychmiast)`,
      canBuyNow: true,
      canOrderMore: product.canOrderMore
    };
  }
  
  if (product.stockType === 'available' && product.stockQuantity === 0) {
    return {
      status: 'out-of-stock' as const,
      message: 'Produkt chwilowo niedostępny',
      canBuyNow: false,
      canOrderMore: product.canOrderMore,
      showNotifyButton: true
    };
  }
  
  if (product.stockType === 'made-to-order') {
    return {
      status: 'made-to-order' as const,
      message: `Realizacja na zamówienie (${product.estimatedDeliveryTime || '7-14 dni'})`,
      canBuyNow: false,
      canOrderMore: true,
      showContactButton: true
    };
  }
  
  return {
    status: 'unavailable' as const,
    message: 'Produkt niedostępny',
    canBuyNow: false,
    canOrderMore: false
  };
};

// Funkcja do formatowania ceny
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2
  }).format(price);
};

// Funkcja do generowania slug
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Funkcja do skrócenia tekstu
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};