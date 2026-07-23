import React from 'react';
import { ShieldCheck, MapPin, Award, Users, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

const stats = [
  { label: 'Cloud Migrations', value: '200+' },
  { label: 'AWS Exam Pass Rate', value: '95%' },
  { label: 'UK Senior Engineers', value: '100%' },
  { label: 'UK Enterprise Clients', value: '50+' },
];

const values = [
  {
    title: 'Practical Hands-On Excellence',
    desc: 'We focus on real-world portfolio code, production architecture, and measurable project outcomes, avoiding purely theoretical slides.',
  },
  {
    title: 'UK Compliance & Security',
    desc: 'Based in London, operating under strict UK GDPR standards, data sovereignty guidelines, and ISO security frameworks.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We work side-by-side with your internal tech leads and career switchers to ensure skills and software thrive long after project delivery.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[780px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-6">
            <Sparkles className="w-4 h-4" />
            <span>ABOUT ENDLESS TECH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            Building the Next Era of <br />
            <span className="gradient-text">UK Technology Leadership</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Endless Tech (Endless Technologies) is a UK-based technology consultancy & training partner helping individuals and enterprise teams navigate modern cloud computing, AI innovation, and custom software engineering.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-[#051320] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-2xl border border-white/10 text-center">
                <p className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2 font-['Plus_Jakarta_Sans']">{stat.value}</p>
                <p className="text-xs font-mono text-white/60 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono">
              <Building2 className="w-4 h-4" />
              <span>OUR STORY & PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
              Learn Today. Build Tomorrow.
            </h2>

            <p className="text-white/70 leading-relaxed font-['Inter']">
              Founded in the UK, Endless Tech was built on the fundamental principle that technology consulting and training should be practical, high-impact, and results-focused.
            </p>

            <p className="text-white/70 leading-relaxed font-['Inter']">
              Whether preparing a career-switcher for their first AWS Solutions Architect certification or assisting a mid-sized UK firm with a complex cloud migration, our senior practitioners bring real enterprise experience to every engagement.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2 font-['Manrope'] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00D4FF]" />
                  <span>{v.title}</span>
                </h3>
                <p className="text-white/65 text-sm leading-relaxed font-['Inter']">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
