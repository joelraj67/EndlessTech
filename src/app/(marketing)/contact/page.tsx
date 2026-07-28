import type { Metadata } from 'next';
import ContactPage from '@/features/contact/ui/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Consultation | Endless Tech',
  description:
    'Get in touch with Endless Tech UK. Book a free consultation, enquire about training courses, or discuss a technology project with our team.',
  keywords: 'contact Endless Tech, book consultation UK, IT consulting enquiry',
  openGraph: {
    title: 'Contact Endless Tech | Book a Consultation',
    description: 'Speak to a UK technology expert. Free initial consultation available.',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: { canonical: 'https://endlesstech.io/contact' },
};

export default function Page() {
  return <ContactPage />;
}
