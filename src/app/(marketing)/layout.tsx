import React from 'react';
import Navigation from '@/features/layout/ui/Navigation';
import Footer from '@/features/layout/ui/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
