import type { Metadata } from 'next';
import TrainingPage from '@/features/training/ui/TrainingPage';

export const metadata: Metadata = {
  title: 'IT Training & Certification — AWS, Azure, CompTIA | Endless Tech',
  description:
    'Boost your career with expert-led IT training from Endless Tech UK. AWS, Microsoft Azure, CompTIA and more. 95% first-attempt pass rate.',
  keywords: 'IT training UK, AWS certification, Azure training, CompTIA, cloud certifications',
  openGraph: {
    title: 'IT Training & Certifications | Endless Tech UK',
    description: '95% first-attempt certification pass rate. Train with UK engineers who deploy what they teach.',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: { canonical: 'https://endlesstech.io/training' },
};

export default function Page() {
  return <TrainingPage />;
}
