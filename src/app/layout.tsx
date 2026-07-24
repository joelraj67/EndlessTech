import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/**
 * Warm editorial type system (Vinny.io design system v2):
 * - Newsreader — serif display (headlines, hero).
 * - Inter — sans body / UI / subheads.
 * - JetBrains Mono — technical labels, eyebrows, terminal.
 *
 * Replaces the prior Plus Jakarta Sans + Manrope + Inter stack by the
 * sanctioned divergence recorded in design-system-plan.md (Precedence #1:
 * explicit user request for richer, serif-led typography).
 */
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  // Newsreader ships optical-size axes that aren't in Next's precalculated
  // fallback-metrics table; skip the automatic fallback override (we ship a
  // serif fallback stack + display: swap, so CLS stays negligible).
  adjustFontFallback: false,
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Endless Tech | UK Technology Training & Consulting',
  description:
    'Industry-focused IT training, software development, cloud services, AI solutions, and technology consulting by Endless Technologies.',
  keywords:
    'IT training UK, cloud consulting, software development, AI analytics, technology consulting, Endless Tech',
  openGraph: {
    title: 'Endless Tech | UK Technology Consultancy',
    description: 'Trusted UK technology experts helping people and businesses succeed.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
