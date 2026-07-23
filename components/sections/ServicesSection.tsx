import React from 'react';
import Link from 'next/link';
import { GraduationCap, Code2, Cloud, BrainCircuit, Lightbulb, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'IT Training',
    icon: GraduationCap,
    tag: 'B2C & B2B Academy',
    description: 'Industry-focused technology training designed to build practical skills for the modern workplace with hands-on labs.',
    features: ['Cloud Computing', 'Software Development', 'Data Analytics', 'AI & Machine Learning', 'Cybersecurity'],
    link: '/services/it-training',
    accent: 'from-[#0066FF] to-[#00D4FF]',
  },
  {
    title: 'Software Development',
    icon: Code2,
    tag: 'Custom Engineering',
    description: 'Custom web, mobile, and enterprise software solutions designed to solve complex business challenges cleanly.',
    features: ['Web Applications', 'Mobile Applications', 'Enterprise Software', 'API Development'],
    link: '/services/software-development',
    accent: 'from-[#00D4FF] to-emerald-400',
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    tag: 'AWS & Azure Partners',
    description: 'Helping UK organisations migrate, optimise, and manage modern cloud infrastructure with zero downtime.',
    features: ['Cloud Migration', 'AWS / Azure Solutions', 'Infrastructure Management', 'Cloud Security'],
    link: '/services/cloud-services',
    accent: 'from-[#0066FF] to-[#8B5CF6]',
  },
  {
    title: 'AI & Data Analytics',
    icon: BrainCircuit,
    tag: 'Intelligent Automation',
    description: 'Transforming raw enterprise business data into predictive insights, ML pipelines, and automated intelligence.',
    features: ['AI Solutions', 'Machine Learning', 'Data Engineering', 'Business Intelligence'],
    link: '/services/ai-data-analytics',
    accent: 'from-[#8B5CF6] to-pink-500',
  },
  {
    title: 'Technology Consulting',
    icon: Lightbulb,
    tag: 'Strategic Transformation',
    description: 'Strategic technology advice helping business executives make smarter digital decisions and modernization plans.',
    features: ['Technology Strategy', 'Cloud Adoption', 'AI Implementation', 'Software Architecture', 'Digital Transformation'],
    link: '/services/technology-consulting',
    accent: 'from-amber-400 to-[#0066FF]',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#071A2B] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
            <span>OUR CORE CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Comprehensive Technology & Academy Solutions
          </h2>
          <p className="text-lg text-white/60 leading-relaxed font-['Inter']">
            Tailored IT training programs, custom software engineering, and strategic technology consulting for individuals and businesses across the UK.
          </p>
        </div>

        {/* 3-Column Service Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.link} className="group block">
                <div className="h-full glass-card glass-card-hover p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
                  
                  {/* Accent Top Border Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div>
                    {/* Icon & Tag Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:bg-[#0066FF]/20 transition-all">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 font-['Manrope'] group-hover:text-[#00D4FF] transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00D4FF]" />
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6 font-['Inter']">
                      {service.description}
                    </p>

                    {/* Feature Chips List */}
                    <div className="space-y-2 border-t border-white/10 pt-5">
                      {service.features.map((feature) => (
                        <div key={feature} className="text-xs font-medium text-white/80 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#00D4FF] group-hover:translate-x-1 transition-transform">
                    <span>Learn More & Syllabus</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
