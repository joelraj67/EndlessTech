import type { Metadata } from 'next';
import ServicesPage from '@/features/services/ui/ServicesPage';

export const metadata: Metadata = {
  title: 'IT Services — Cloud, AI & Software Development | Endless Tech',
  description:
    'Explore Endless Tech UK services: cloud migration, custom software development, AI & data analytics, DevOps automation, and cybersecurity consulting.',
  keywords: 'cloud migration UK, software development, AI analytics, DevOps consulting, cybersecurity UK',
  openGraph: {
    title: 'IT Services | Endless Tech UK',
    description: 'Cloud, AI, software development and consulting services from top UK engineers.',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: { canonical: 'https://endlesstech.io/services' },
};

export default function Page() {
  return <ServicesPage />;
}
