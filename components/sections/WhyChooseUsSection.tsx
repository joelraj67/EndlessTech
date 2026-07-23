import React from 'react';
import { Award, Target, CheckCircle2, Cpu, MapPin, Rocket, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Industry-Experienced Experts',
    metric: '10+ Years Exp',
    description: 'Our senior engineers and trainers have 10+ years of real-world enterprise experience across AWS, Azure, and cloud platforms.',
  },
  {
    icon: Target,
    title: 'Practical Learning Approach',
    metric: '100% Hands-On',
    description: 'Project-based methodology focusing on real-world application, architecture design, and portfolio building.',
  },
  {
    icon: CheckCircle2,
    title: 'Business-Focused Solutions',
    metric: 'ROI Driven',
    description: 'Services aligned directly to client business goals, cost optimization, and measurable digital outcomes.',
  },
  {
    icon: Cpu,
    title: 'Latest Tech Frameworks',
    metric: 'Modern Stack',
    description: 'Up-to-date curricula and engineering with React 18, Next.js 14, Python 3.12, PyTorch, and modern DevOps tools.',
  },
  {
    icon: MapPin,
    title: 'UK-Based Support & HQ',
    metric: 'London HQ',
    description: 'Based in the UK. Local engineering expertise, UK business context, and fully GDPR-compliant data processing.',
  },
  {
    icon: Rocket,
    title: 'Career Transformation',
    metric: '95% Pass Rate',
    description: 'Proven career development. 95% of our AWS students pass official industry certification exams on their first attempt.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-[#051320] relative border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>THE ENDLESS TECH ADVANTAGE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Technology Expertise. <br />
              <span className="gradient-text">Real Business Impact.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-[420px] text-base leading-relaxed font-['Inter']">
            Why leading UK businesses and ambitious professionals choose Endless Tech as their trusted technology partner.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card glass-card-hover p-8 rounded-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">
                    {item.metric}
                  </span>
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
