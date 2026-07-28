import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Endless Tech',
  description: "The page you're looking for doesn't exist. Let's get you back on track.",
};

/**
 * Branded 404 page — styled to match Aura Enterprise design system.
 */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6">
      {/* Atmospheric decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[160px]"
        style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.2) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.2]"
      />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        {/* Large 404 display */}
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-slate-400 uppercase">
          Error 404
        </p>
        <h1 className="mb-4 font-display text-[7rem] font-extrabold leading-none tracking-tight text-white">
          4<span className="gradient-text">0</span>4
        </h1>
        <h2 className="mb-4 font-display text-2xl font-bold text-white">
          Page Not Found
        </h2>
        <p className="mb-10 font-body text-base leading-relaxed text-slate-300">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          Let&rsquo;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(251,146,60,0.35)] transition-all hover:-translate-y-0.5 hover:bg-accent-hover active:scale-95"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span>Explore Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs font-mono text-slate-400 uppercase tracking-widest">Quick links</p>
          <nav aria-label="404 quick links" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: '/training', label: 'Training' },
              { href: '/consulting', label: 'Consulting' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 hover:text-accent transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}
