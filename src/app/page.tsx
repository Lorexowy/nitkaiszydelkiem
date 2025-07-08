import React from 'react';
import { categories, dummyProducts, formatPrice } from '@/lib/constants';

// Premium Hero Section
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Tekst */}
          <div className="max-w-xl">
            <h1 className="display-title mb-8 text-balance">
              Ręcznie robione
              <br />
              <span className="text-blue-600">
                z miłością
              </span>
            </h1>
            <p className="lead mb-12 text-pretty">
              Odkryj magię rękodzieła w naszym sklepie. Każdy produkt jest unikalny, 
              wykonany z najwyższą starannością i dbałością o szczegóły.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary btn-lg">
                Przeglądaj produkty
              </button>
              <button className="btn btn-secondary btn-lg">
                Nasze kategorie
              </button>
            </div>
          </div>
          
          {/* Obrazek */}
          <div className="relative lg:ml-10">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=525&fit=crop&q=80" 
                  alt="Ręcznie robione wyroby szydełkowe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-100 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponent kategorii - ultra clean
const CategoriesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nasze kategorie</h2>
          <p className="subtitle max-w-2xl mx-auto text-balance">
            Szeroki wybór ręcznie robionych produktów dla każdego i na każdą okazję
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="card card-padding hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-50 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.subcategories?.slice(0, 3).map((sub) => (
                      <span key={sub.id} className="badge badge-neutral text-xs">
                        {sub.name}
                      </span>
                    ))}
                    {category.subcategories && category.subcategories.length > 3 && (
                      <span className="badge badge-neutral text-xs">
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

// Polecane produkty - premium design
const FeaturedProducts = () => {
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

// Sekcja About - premium storytelling
const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Nasza historia
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
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
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Zadowolonych klientów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Unikalnych produktów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">3+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Lata doświadczenia</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=600&fit=crop&q=80" 
                alt="Proces tworzenia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Premium CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-balance" style={{ fontFamily: 'Crimson Pro, serif' }}>
          Marzysz o czymś wyjątkowym?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          Przyjmujemy zamówienia na produkty szyte na miarę Twoich potrzeb. 
          Skontaktuj się z nami, aby omówić Twój projekt.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-accent btn-lg">
            Skontaktuj się z nami
          </button>
          <button className="btn btn-secondary btn-lg">
            Zobacz portfolio
          </button>
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