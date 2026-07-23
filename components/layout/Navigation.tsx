'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071A2B]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto h-20 flex items-center justify-between px-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-lg shadow-[#0066FF]/30 group-hover:scale-105 transition-transform border border-white/20">
            <img 
              src="/images/endless-tech-logo.jpeg" 
              alt="Endless Tech Logo" 
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans'] flex items-center gap-1">
              Endless<span className="text-[#00D4FF]">Tech</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase -mt-1">
              Learn Today. Build Tomorrow.
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
          <Link 
            href="/services" 
            className="px-5 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            Services
          </Link>
          <Link 
            href="/training" 
            className="px-5 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            IT Training
          </Link>
          <Link 
            href="/consulting" 
            className="px-5 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            Consulting
          </Link>
          <Link 
            href="/about" 
            className="px-5 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            About Us
          </Link>
        </nav>

        {/* Action Button & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>UK HQ Active</span>
          </div>

          <Link 
            href="/contact" 
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00D4FF] hover:opacity-95 shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 transition-all transform hover:-translate-y-0.5"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#071A2B]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link 
            href="/services" 
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-white/90 hover:text-[#00D4FF] py-2"
          >
            Services Overview
          </Link>
          <Link 
            href="/training" 
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-white/90 hover:text-[#00D4FF] py-2"
          >
            IT Training & Certifications
          </Link>
          <Link 
            href="/consulting" 
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-white/90 hover:text-[#00D4FF] py-2"
          >
            Technology Consulting
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-white/90 hover:text-[#00D4FF] py-2"
          >
            About Endless Tech
          </Link>
          <div className="pt-4 border-t border-white/10">
            <Link 
              href="/contact" 
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00D4FF]"
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
