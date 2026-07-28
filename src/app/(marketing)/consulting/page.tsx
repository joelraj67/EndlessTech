import type { Metadata } from 'next';
import ConsultingPage from '@/features/consulting/ui/ConsultingPage';

export const metadata: Metadata = {
  title: 'Technology Consulting — Digital Transformation | Endless Tech',
  description:
    'Strategic IT consulting and digital transformation by Endless Tech UK. Cloud strategy, AI roadmaps, DevOps modernisation, and enterprise architecture.',
  keywords: 'IT consulting UK, digital transformation, cloud strategy, AI consulting, enterprise architecture',
  openGraph: {
    title: 'Technology Consulting | Endless Tech UK',
    description: 'Transform your business with expert UK technology consultants. 200+ cloud migrations delivered.',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: { canonical: 'https://endlesstech.io/consulting' },
};

export default function Page() {
  return <ConsultingPage />;
}
