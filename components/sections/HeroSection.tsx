import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Terminal, Cloud, Cpu } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] bg-[#071A2B] overflow-hidden flex items-center pt-24 pb-16">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#0066FF]/20 via-[#00D4FF]/15 to-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      
      <div className="relative max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Main Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-mono mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span>UK Technology Consultancy & Training Academy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Building Skills. <br />
            Building Careers. <br />
            <span className="gradient-text">Building Future Tech.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-[620px] font-['Inter']">
            Endless Tech is a UK-based technology partner providing IT training, custom software development, cloud infrastructure, AI solutions, and digital transformation consulting.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto mb-12">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#0066FF]/30 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* Trust Highlights Ribbon */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-white/60 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
              <span>95% Exam Pass Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
              <span>200+ Enterprise Migrations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
              <span>UK GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Glassmorphic Dashboard Showcase */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-[460px] space-y-4">
            
            {/* Top Interactive Glass Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl animate-float-slow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/20 rounded-full blur-2xl group-hover:bg-[#00D4FF]/30 transition-all" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#00D4FF]">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Cloud & DevOps Acceleration</h3>
                  <p className="text-white/50 text-xs font-mono">AWS • Azure • Kubernetes</p>
                </div>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] h-full w-[88%]" />
              </div>
              <div className="flex justify-between items-center mt-3 text-xs font-mono text-white/60">
                <span>Migration Health</span>
                <span className="text-[#00D4FF]">88% Automated</span>
              </div>
            </div>

            {/* Middle AI & Training Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">AI & Machine Learning</h4>
                    <p className="text-white/50 text-xs">Enterprise Models & Training</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono border border-purple-500/30">
                  Live Cohort
                </span>
              </div>
            </div>

            {/* Bottom Terminal Code Snapshot */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 font-mono text-xs text-white/80 bg-black/40">
              <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                <Terminal className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-white/50">endless-cli ~ deployment</span>
              </div>
              <div className="space-y-1">
                <p className="text-emerald-400">✔ AWS Cloud Infrastructure: Deployed</p>
                <p className="text-emerald-400">✔ Enterprise Security Audit: Passed</p>
                <p className="text-white/60">$ endless train --cohort 2025 --status active</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
