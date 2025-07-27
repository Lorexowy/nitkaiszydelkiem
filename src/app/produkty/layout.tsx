// src/app/produkty/layout.tsx (opcjonalny - dla SEO metadata)
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wszystkie produkty - Nitką i Szydełkiem',
  description: 'Przeglądaj pełną kolekcję ręcznie robionych wyrobów szydełkowych. Zabawki, odzież, dekoracje i wiele więcej.',
  keywords: ['produkty szydełkowe', 'zabawki', 'odzież', 'dekoracje', 'handmade', 'rękodzieło'],
  openGraph: {
    title: 'Wszystkie produkty - Nitką i Szydełkiem',
    description: 'Przeglądaj pełną kolekcję ręcznie robionych wyrobów szydełkowych.',
    type: 'website',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}