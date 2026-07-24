'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { mainNav } from '@/shared/config/navigation';
import { site } from '@/shared/lib/site';

/**
 * Navigation — fixed top bar.
 *
 * Warm editorial skin (Vinny.io v2): paper surface, hairline border, serif
 * wordmark with terracotta period, muted links that lift to the accent on
 * hover. The "UK HQ Active" status chip keeps the brand's mono vernacular.
 */
export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-xl border-b border-line transition-all duration-300">
      <div className="max-w-content mx-auto h-20 flex items-center justify-between px-6">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface p-0.5 shadow-sm border border-line group-hover:scale-105 transition-transform">
            <Image
              src="/images/endless-tech-logo.jpeg"
              alt="Endless Tech Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-[8px]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-medium text-ink tracking-tight flex items-center gap-1">
              Endless<span className="text-accent">Tech</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase -mt-1">
              {site.motto}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links — driven by config/navigation.ts */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-alt p-1.5 rounded-full border border-line">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-muted hover:text-accent hover:bg-surface rounded-full transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-success animate-ping" />
            <span>UK HQ Active</span>
          </div>

          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-accent hover:bg-accent-hover shadow-md shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-lg bg-surface-alt border border-line text-ink hover:bg-surface transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer — driven by config/navigation.ts */}
      {mobileOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-2xl border-b border-line px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-ink hover:text-accent py-2"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-line">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-center font-semibold text-white bg-accent"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
