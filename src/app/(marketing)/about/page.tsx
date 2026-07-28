import type { Metadata } from 'next';
import AboutPage from '@/features/about/ui/AboutPage';

export const metadata: Metadata = {
  title: 'About Us — UK Technology Experts | Endless Tech',
  description:
    'Endless Tech is a UK-based technology consultancy and training academy. Meet our team of senior engineers, cloud architects and certified trainers.',
  keywords: 'about Endless Tech, UK technology company, cloud experts, IT training academy',
  openGraph: {
    title: 'About Endless Tech | UK Technology Consultancy',
    description: 'Senior engineers who train, consult, and deploy. Based in London, UK.',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: { canonical: 'https://endlesstech.io/about' },
};

export default function Page() {
  return <AboutPage />;
}
