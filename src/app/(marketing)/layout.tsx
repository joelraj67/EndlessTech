import React from 'react';
import Navigation from '@/features/layout/ui/Navigation';
import Footer from '@/features/layout/ui/Footer';
import { ReadingProgress } from '@/shared/ui/reading-progress';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
