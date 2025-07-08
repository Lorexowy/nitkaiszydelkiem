// src/app/page.tsx
import React from 'react';
import {
  HeroSection,
  CategoriesSection,
  FeaturedProductsSection,
  AboutSection,
  CTASection
} from '@/components/sections';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}