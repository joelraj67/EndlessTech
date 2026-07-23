import React from 'react';
import Link from 'next/link';
import { GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const areas = [
  'Cloud Computing (AWS, Azure, Google Cloud Solutions Architect & Admin)',
  'Software Development (Full-Stack React 18, Next.js 14, Node.js, Python)',
  'Data Analytics & Business Intelligence (Power BI, SQL, Data Modeling)',
  'AI & Machine Learning Engineering (PyTorch, TensorFlow, LLM Fine-Tuning)',
  'Cybersecurity & Network Defense (CompTIA Security+, Ethical Hacking)',
];

export default function ITTrainingPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[760px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>UK IT ACADEMY PROGRAMME</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            IT Training & <br />
            <span className="gradient-text">Certification Academy</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Industry-focused technology training designed to build practical, production-grade skills for career switchers and enterprise engineering teams.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8 font-['Plus_Jakarta_Sans'] text-center">Core Training Modules</h2>
          {areas.map((area) => (
            <div key={area} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#00D4FF] shrink-0" />
              <p className="text-white font-medium text-base font-['Inter']">{area}</p>
            </div>
          ))}

          <div className="pt-12 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#0066FF]/25 transition-all"
            >
              <span>Enroll / Request Course Prospectus</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
