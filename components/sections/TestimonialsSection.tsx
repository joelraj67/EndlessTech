import React from 'react';
import { Star, Quote, Building2, UserCheck } from 'lucide-react';

const testimonials = [
  {
    quote: "EndlessTech transformed our enterprise approach to cloud migration. Their engineers saved us 40% on infrastructure costs while maintaining 100% uptime.",
    author: "James Morrison",
    title: "CTO",
    company: "TechScale UK",
    tag: "Cloud Migration",
  },
  {
    quote: "The IT training academy program gave our engineering team the exact skills needed to launch our first AI-powered analytics product.",
    author: "Priya Patel",
    title: "Head of Digital Transformation",
    company: "InnovateFinance UK",
    tag: "AI & Upskilling",
  },
  {
    quote: "Professional, knowledgeable, and genuinely invested in our company's technical success. Outstanding software architecture guidance.",
    author: "David Chen",
    title: "Director of IT",
    company: "UK Healthcare Systems",
    tag: "Software Advisory",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#051320] relative border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
            <UserCheck className="w-4 h-4" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Trusted by Leading UK <br />
            <span className="gradient-text">Businesses & Engineers</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed font-['Inter']">
            See how our training and consulting services have driven real digital impact.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.author} className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between group relative">
              
              <Quote className="w-10 h-10 text-[#00D4FF]/20 absolute top-6 right-6 pointer-events-none group-hover:text-[#00D4FF]/40 transition-colors" />

              <div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-8 italic font-['Inter']">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-base font-['Manrope']">{item.author}</h4>
                  <p className="text-xs text-white/50">{item.title}, <span className="text-[#00D4FF] font-semibold">{item.company}</span></p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                  {item.tag}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
