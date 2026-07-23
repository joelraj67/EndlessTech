import React from 'react';
import Link from 'next/link';
import { Compass, Lightbulb, Cloud, Cpu, Layout, Workflow, ArrowRight } from 'lucide-react';

const consultingServices = [
  {
    title: 'Technology Strategy & Roadmap',
    description: 'Align IT investments directly with business growth targets, security controls, and market demands.',
    icon: Lightbulb,
  },
  {
    title: 'Cloud Adoption & Migration',
    description: 'Structured migration pathways for legacy workloads to AWS, Azure, or GCP with zero business disruption.',
    icon: Cloud,
  },
  {
    title: 'AI Implementation & ML Operations',
    description: 'From initial proof-of-concept testing to scalable production MLOps and automated workflows.',
    icon: Cpu,
  },
  {
    title: 'Software & Systems Architecture',
    description: 'Scalable microservices, API integrations, resilient database schemas, and modern stack refactoring.',
    icon: Layout,
  },
  {
    title: 'Digital Transformation Lifecycle',
    description: 'End-to-end modernization of enterprise processes, developer productivity, and team upskilling.',
    icon: Workflow,
  },
];

export default function ConsultingSection() {
  return (
    <section className="py-32 bg-[#071A2B] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
              <Compass className="w-4 h-4" />
              <span>STRATEGIC ADVISORY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Helping Businesses Navigate <br />
              <span className="gradient-text">Digital Transformation</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/60 text-base leading-relaxed font-['Inter'] mb-6">
              From high-level cloud architecture to hands-on AI implementation, our UK technology consultants provide clear, actionable advisory to scale your operations efficiently.
            </p>
            <Link 
              href="/consulting" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:underline"
            >
              <span>Explore Advisory Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Consulting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultingServices.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#00D4FF] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Manrope']">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed font-['Inter']">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
