import React from 'react';
import Link from 'next/link';
import { GraduationCap, Code2, Cloud, BrainCircuit, Lightbulb, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

const serviceItems = [
  {
    title: 'IT Training & Certifications',
    icon: GraduationCap,
    desc: 'Industry-focused technology training for cloud computing, software development, data analytics, AI, and cybersecurity. 95% pass rate on official certification exams.',
    link: '/services/it-training',
    badge: 'Popular Academy',
    accent: 'from-[#0066FF] to-[#00D4FF]',
    highlights: ['AWS & Azure Prep', 'Hands-on Lab Projects', 'UK Instructors'],
  },
  {
    title: 'Custom Software Development',
    icon: Code2,
    desc: 'Enterprise web apps, mobile solutions, and scalable API microservices built with React 18, Next.js 14, Node.js, Python, and cloud-native architecture.',
    link: '/services/software-development',
    badge: 'Custom Engineering',
    accent: 'from-[#00D4FF] to-emerald-400',
    highlights: ['Full-Stack Web', 'Mobile Apps', 'REST & GraphQL APIs'],
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    desc: 'AWS & Azure migration, infrastructure-as-code (Terraform), Kubernetes orchestration, and automated CI/CD deployment pipelines.',
    link: '/services/cloud-services',
    badge: 'Cloud Partners',
    accent: 'from-[#0066FF] to-[#8B5CF6]',
    highlights: ['Zero Downtime', 'Cost Optimization', '24/7 Security'],
  },
  {
    title: 'AI & Data Analytics Solutions',
    icon: BrainCircuit,
    desc: 'Machine learning model development, data engineering pipelines, business intelligence dashboards, and custom LLM integration.',
    link: '/services/ai-data-analytics',
    badge: 'Enterprise AI',
    accent: 'from-[#8B5CF6] to-pink-500',
    highlights: ['Predictive Analytics', 'PyTorch / TensorFlow', 'Power BI'],
  },
  {
    title: 'Technology Advisory & Consulting',
    icon: Lightbulb,
    desc: 'Strategic technology advisory, digital transformation roadmap design, cloud adoption audits, and senior software architecture review.',
    link: '/services/technology-consulting',
    badge: 'Executive Advisory',
    accent: 'from-amber-400 to-[#0066FF]',
    highlights: ['Tech Strategy', 'Architecture Audit', 'Security Review'],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[760px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-6">
            <Sparkles className="w-4 h-4" />
            <span>FULL CAPABILITIES CATALOG</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            Our Enterprise <br />
            <span className="gradient-text">Technology Services</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Comprehensive technology solutions tailored to your business growth targets, IT upskilling demands, and cloud architecture goals.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceItems.map((service) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.title} 
                  href={service.link} 
                  className="group block glass-card glass-card-hover p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent}`} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full border border-[#00D4FF]/20">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 font-['Manrope'] group-hover:text-[#00D4FF] transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed mb-6 font-['Inter']">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <span key={h} className="text-[11px] font-mono text-white/60 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#00D4FF]" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#00D4FF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Details &rarr;
                    </span>
                  </div>

                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
