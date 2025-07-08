// src/components/sections/CategoriesSection.tsx
import React from 'react';
import { categories } from '@/lib/constants';

const CategoriesSection: React.FC = () => {
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

export default CategoriesSection;