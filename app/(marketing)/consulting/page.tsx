import React from 'react';
import Link from 'next/link';
import { Compass, Lightbulb, Cloud, Cpu, Layout, Workflow, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const advisoryServices = [
  {
    step: '01',
    title: 'Technology Strategy & ROI Alignment',
    desc: 'Audit existing IT architecture, identify cost inefficiencies, and establish a clear 12-to-36 month technology modernization roadmap.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Cloud Adoption & Multi-Cloud Migration',
    desc: 'Structured workload assessment, landing zone configuration, security audit, and zero-downtime execution for AWS & Azure.',
    icon: Cloud,
  },
  {
    step: '03',
    title: 'Enterprise AI & Automation Implementation',
    desc: 'Identify high-leverage AI use cases, prototype machine learning algorithms, and integrate secure LLM pipelines into business tools.',
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Software & Systems Architecture',
    desc: 'Design resilient microservices, decouple legacy monoliths, optimize database queries, and implement automated DevOps CI/CD.',
    icon: Layout,
  },
  {
    step: '05',
    title: 'Digital Transformation & Team Upskilling',
    desc: 'End-to-end modernization combined with hands-on team training so your internal engineering team can confidently own the stack.',
    icon: Workflow,
  },
];

export default function ConsultingPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[780px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-6">
            <Compass className="w-4 h-4" />
            <span>UK ADVISORY & CONSULTING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            Digital Transformation & <br />
            <span className="gradient-text">Senior Tech Advisory</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Strategic advice helping UK CTOs, IT directors, and digital leads navigate cloud adoption, AI integration, and software architecture.
          </p>
        </div>
      </section>

      {/* Advisory Methodology Grid */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="space-y-6 max-w-[900px] mx-auto">
            {advisoryServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start gap-6 group">
                  <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white font-['Manrope'] group-hover:text-[#00D4FF] transition-colors">{s.title}</h3>
                      <span className="text-xs font-mono text-white/30">{s.step}</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed font-['Inter']">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#0066FF]/25 transition-all"
            >
              <span>Schedule Strategic Advisory Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
