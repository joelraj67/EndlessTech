import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#051320] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-md border border-white/20">
                <img 
                  src="/images/endless-tech-logo.jpeg" 
                  alt="Endless Tech Logo" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                  Endless<span className="text-[#00D4FF]">Tech</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase -mt-1">
                  Learn Today. Build Tomorrow.
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-[360px] font-['Inter']">
              Endless Tech (Endless Technologies) is a premier UK-based technology consultancy & IT training academy. Empowering professionals and enterprise teams across the UK.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>HQ: London, United Kingdom</span>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-wider text-white/90 uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/60 font-['Inter']">
              <li><Link href="/services/it-training" className="hover:text-[#00D4FF] transition-colors">IT Training Academy</Link></li>
              <li><Link href="/services/software-development" className="hover:text-[#00D4FF] transition-colors">Software Engineering</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-[#00D4FF] transition-colors">Cloud & DevOps</Link></li>
              <li><Link href="/services/ai-data-analytics" className="hover:text-[#00D4FF] transition-colors">AI & Data Analytics</Link></li>
              <li><Link href="/services/technology-consulting" className="hover:text-[#00D4FF] transition-colors">Tech Advisory</Link></li>
            </ul>
          </div>

          {/* Col 3 - Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-wider text-white/90 uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/60 font-['Inter']">
              <li><Link href="/about" className="hover:text-[#00D4FF] transition-colors">About Us</Link></li>
              <li><Link href="/training" className="hover:text-[#00D4FF] transition-colors">Courses Syllabus</Link></li>
              <li><Link href="/consulting" className="hover:text-[#00D4FF] transition-colors">Consulting Advisory</Link></li>
              <li><Link href="/contact" className="hover:text-[#00D4FF] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4 - Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-wider text-white/90 uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60 font-['Inter']">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00D4FF]" />
                <span>info@endlesstech.io</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00D4FF]" />
                <span>+44 (0) 20 7946 0920</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs">Registered UK Company</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Endless Technologies Ltd. All Rights Reserved. UK Registered.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
