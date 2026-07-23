import React from 'react';
import Link from 'next/link';
import { Code2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const softwareCapabilities = [
  'Custom Web Application Development (React 18, Next.js 14, Node.js, TypeScript)',
  'Mobile App Development (React Native & Cross-Platform iOS/Android)',
  'Enterprise Software & Microservices (Scalable REST & GraphQL APIs)',
  'Legacy System Refactoring & Cloud Stack Modernization',
  'Automated Quality Assurance & Continuous Integration (CI/CD)',
];

export default function SoftwareDevPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00D4FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[760px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono mb-6">
            <Code2 className="w-4 h-4" />
            <span>FULL-STACK ENGINEERING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            Custom Software <br />
            <span className="gradient-text">Development & Engineering</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Tailored web, mobile, and enterprise software solutions designed to solve complex business challenges with zero compromise on performance or code quality.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8 font-['Plus_Jakarta_Sans'] text-center">Engineering Services</h2>
          {softwareCapabilities.map((item) => (
            <div key={item} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-white font-medium text-base font-['Inter']">{item}</p>
            </div>
          ))}

          <div className="pt-12 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#0066FF]/25 transition-all"
            >
              <span>Discuss Your Software Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
