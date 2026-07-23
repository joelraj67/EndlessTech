import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import './globals.css';
import '../public/styles.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  title: 'Endless Tech | UK Technology Training & Consulting',
  description: 'Industry-focused IT training, software development, cloud services, AI solutions, and technology consulting by Endless Technologies.',
  keywords: 'IT training UK, cloud consulting, software development, AI analytics, technology consulting, Endless Tech',
  openGraph: {
    title: 'Endless Tech | UK Technology Consultancy',
    description: 'Trusted UK technology experts helping people and businesses succeed.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakarta.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-white text-[#071A2B]">
        {children}
      </body>
    </html>
  );
}
