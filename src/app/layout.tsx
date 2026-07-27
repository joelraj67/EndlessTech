import type { Metadata } from 'next';
import { Inter, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/**
 * Premium enterprise type system (1.docx Option 1 — Recommended):
 * - Manrope — sans display for headings / hero (communicates premium brand).
 * - Inter — sans body / UI / subheads.
 * - JetBrains Mono — technical labels, eyebrows, terminal.
 */
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
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
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
