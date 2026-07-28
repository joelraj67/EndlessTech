'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { mainNav } from '@/shared/config/navigation';
import { site } from '@/shared/lib/site';
import { withBasePath } from '@/shared/lib/paths';

/**
 * Navigation — fixed top bar.
 * Unified Dark Glass (Aura Enterprise Design System).
 * Improvements: active link highlighting, scroll-aware glass opacity, aria fixes.
 */
export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(6, 14, 32, 0.95)'
          : 'rgba(6, 14, 32, 0.70)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(219, 194, 207, 0.18)'
          : '1px solid rgba(219, 194, 207, 0.07)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div className="max-w-content mx-auto h-[76px] flex items-center justify-between px-6">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Endless Tech — Home">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface p-0.5 shadow-md border border-white/15 group-hover:scale-105 transition-transform">
            <Image
              src={withBasePath('/images/endless-tech-logo.jpeg')}
              alt="Endless Tech Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-[8px]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-extrabold text-white tracking-tight flex items-center gap-1">
              Endless<span className="text-accent">Tech</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
              {site.motto}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md"
          aria-label="Main navigation"
        >
          {mainNav.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'px-5 py-2 text-sm font-medium rounded-full transition-all',
                  isActive
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/15 border border-success/30 text-success text-xs font-mono"
            aria-label="UK HQ Active"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-ping" aria-hidden="true" />
            <span>UK HQ Active</span>
          </div>

          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-accent hover:bg-accent-hover shadow-[0_0_24px_rgba(176,85,46,0.35)] transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden bg-bg/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-1 animate-in slide-in-from-top duration-300"
        >
          {mainNav.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'block text-base font-medium py-2.5 px-3 rounded-lg transition-colors',
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-slate-200 hover:text-accent hover:bg-white/5',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-center font-semibold text-white bg-accent shadow-lg"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
