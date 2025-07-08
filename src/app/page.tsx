import React from 'react';
import { categories, dummyProducts, formatPrice } from '@/lib/constants';
import Button from '@/components/ui/Button';

// Komponent Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-100 to-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tekst */}
          <div className="text-center lg:text-left">
            <h1 className="handmade-title mb-6">
              Ręcznie robione
              <br />
              <span className="text-cyan-600">
                z miłością
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Odkryj magię rękodzieła w naszym sklepie. Każdy produkt jest unikalny, 
              wykonany z najwyższą starannością i dbałością o szczegóły. 
              Tworzymy z pasją dla Twojego domu i bliskich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-4">
                Przeglądaj produkty
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Nasze kategorie
              </Button>
            </div>
          </div>
          
          {/* Obrazek */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                alt="Ręcznie robione wyroby szydełkowe"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-200 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponent kategorii
const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Nasze kategorie</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Szeroki wybór ręcznie robionych produktów dla każdego i na każdą okazję
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="card hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.subcategories?.slice(0, 3).map((sub) => (
                      <span key={sub.id} className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                        {sub.name}
                      </span>
                    ))}
                    {category.subcategories && category.subcategories.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{category.subcategories.length - 3} więcej
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Komponent produktów polecanych
const FeaturedProducts = () => {
  const featuredProducts = dummyProducts.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Polecane produkty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nasze najbardziej popularne i unikalne wyroby
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="card-product">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop" 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 capitalize">
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
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="product-price">
                      {formatPrice(product.price)}
                    </span>
                    
                    <Button 
                      size="sm" 
                      disabled={product.stockType === 'out-of-stock'}
                      className="text-sm"
                    >
                      {product.stockType === 'available' ? 'Dodaj do koszyka' : 
                       product.stockType === 'made-to-order' ? 'Zamów' : 'Niedostępny'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Zobacz wszystkie produkty
          </Button>
        </div>
      </div>
    </section>
  );
};

// Komponent About Us
const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">
              Nasza historia
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Witamy w świecie ręcznie robionych cudów! Nasza pasja do szydełkowania 
                rozpoczęła się wiele lat temu jako hobby, które szybko przerodziło się 
                w prawdziwą miłość do rękodzieła.
              </p>
              <p>
                Każdy produkt w naszym sklepie jest tworzony z najwyższą starannością, 
                używając tylko wysokiej jakości materiałów. Wierzymy, że ręcznie robione 
                przedmioty niosą ze sobą wyjątkową energię i ciepło.
              </p>
              <p>
                Nasze wyroby to nie tylko produkty - to kawałki serca, które chcemy 
                dzielić z Wami. Tworzymy z myślą o trwałości, komforcie i pięknie.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-sm text-gray-600">Zadowolonych klientów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                <div className="text-sm text-gray-600">Unikalnych produktów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">3+</div>
                <div className="text-sm text-gray-600">Lata doświadczenia</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop" 
                alt="Proces tworzenia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponent CTA
const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Satisfy, cursive' }}>
          Marzysz o czymś wyjątkowym?
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Przyjmujemy zamówienia na produkty szyte na miarę Twoich potrzeb
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-orange-500 border-white hover:bg-orange-50"
          >
            Skontaktuj się z nami
          </Button>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500"
          >
            Zobacz portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

// Główny komponent strony
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutSection />
      <CTASection />
    </div>
  );
}