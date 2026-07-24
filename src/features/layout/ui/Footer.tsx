import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Shield } from 'lucide-react';
import { footerServicesNav, footerCompanyNav, footerLegalNav } from '@/shared/config/navigation';
import { site } from '@/shared/lib/site';

/**
 * Footer — warm ink panel.
 *
 * Warm editorial skin (Vinny.io v2): a tinted dark surface (#2A2420) rather
 * than cold black — the one place a dark panel is used outside the terminal.
 * Serif wordmark repeats the nav's signature mark; muted link-on-dark.
 */
export default function Footer() {
  return (
    <footer className="bg-panel text-paper pt-20 pb-12 border-t border-white/10">
      <div className="max-w-content mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface p-0.5 shadow-md border border-white/10">
                <Image
                  src="/images/endless-tech-logo.jpeg"
                  alt="Endless Tech Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-medium text-paper tracking-tight">
                  Endless<span className="text-accent">Tech</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-paper/50 uppercase -mt-1">
                  {site.motto}
                </span>
              </div>
            </Link>

            <p className="text-paper/60 text-sm leading-relaxed max-w-[360px] font-body">
              Endless Tech (Endless Technologies) is a premier UK-based technology consultancy &amp; IT training academy. Helping professionals and enterprise teams across the UK build future-ready skills.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-paper/70 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>HQ: {site.contact.hq}</span>
            </div>
          </div>

          {/* Col 2 - Services — driven by config/navigation.ts */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-wider text-paper/90 uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm text-paper/60 font-body">
              {footerServicesNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Company — driven by config/navigation.ts */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-wider text-paper/90 uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm text-paper/60 font-body">
              {footerCompanyNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Direct Contact — driven by lib/site.ts */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-wider text-paper/90 uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-paper/60 font-body">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>{site.contact.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>{site.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-xs">Registered UK Company</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar — driven by config/navigation.ts */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-paper/40">
          <p>© {new Date().getFullYear()} {site.legalName}. All Rights Reserved. UK Registered.</p>
          <div className="flex gap-6">
            {footerLegalNav.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-paper transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
