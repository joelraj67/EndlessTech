import type { Metadata } from 'next';
import { Inter, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/**
 * Premium enterprise type system:
 * - Manrope — display font for headings / hero.
 * - Inter — body / UI / subheads.
 * - JetBrains Mono — technical labels, terminal.
 */
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://endlesstech.io'),
  title: {
    default: 'Endless Tech | UK Technology Training & Consulting',
    template: '%s | Endless Tech',
  },
  description:
    'Industry-focused IT training, software development, cloud services, AI solutions, and technology consulting by Endless Technologies — based in London, UK.',
  keywords:
    'IT training UK, cloud consulting, software development, AI analytics, technology consulting, Endless Tech, AWS training, Azure certification',
  authors: [{ name: 'Endless Technologies Ltd', url: 'https://endlesstech.io' }],
  creator: 'Endless Technologies Ltd',
  openGraph: {
    title: 'Endless Tech | UK Technology Consultancy & Training',
    description: 'Trusted UK technology experts helping people and businesses succeed. We deploy what we teach.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://endlesstech.io',
    siteName: 'Endless Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endless Tech | UK Technology Consultancy',
    description: 'IT training, cloud consulting, AI solutions — UK-based. 95% certification pass rate.',
  },
  alternates: {
    canonical: 'https://endlesstech.io',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased bg-paper text-ink">
        {/* Skip-to-content for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
