'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, TrendingUp, Award, Clock } from 'lucide-react';

const pathways = [
  {
    id: 'aws',
    name: 'AWS Solutions Architect',
    type: 'IT Academy',
    duration: '8 Weeks',
    passRate: '95%',
    avgSalaryBoost: '+£18,500/yr',
    prepDetails: 'Includes official AWS exam voucher prep, 100+ lab scenarios, & resume review.',
  },
  {
    id: 'azure',
    name: 'Azure DevOps Specialist',
    type: 'IT Academy',
    duration: '8 Weeks',
    passRate: '92%',
    avgSalaryBoost: '+£16,000/yr',
    prepDetails: 'ARM templates, Kubernetes AKS, CI/CD pipelines, and AZ-400 certification labs.',
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Software Engineer',
    type: 'IT Academy',
    duration: '12 Weeks',
    passRate: '98%',
    avgSalaryBoost: '+£22,000/yr',
    prepDetails: 'React 18, Next.js 14, Node.js, TypeScript, PostgreSQL, and portfolio projects.',
  },
  {
    id: 'cloud-mig',
    name: 'Enterprise Cloud Migration',
    type: 'Consulting Advisory',
    duration: '6-12 Weeks',
    passRate: '100% Zero Downtime',
    avgSalaryBoost: '35% Infrastructure Cost Savings',
    prepDetails: 'Complete AWS/Azure landing zone, security audit, database migration, & team upskilling.',
  },
];

export default function ROICalculator() {
  const [selectedId, setSelectedId] = useState('aws');
  const selected = pathways.find((p) => p.id === selectedId) || pathways[0];

  return (
    <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
      
      <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1.5 rounded-full border border-[#00D4FF]/20 w-fit mb-6">
        <Calculator className="w-4 h-4" />
        <span>INTERACTIVE IMPACT CALCULATOR</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Pathway Selectors Left */}
        <div className="lg:col-span-6 space-y-3">
          <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-4">
            Select Your Target Pathway or Project Scope
          </h3>

          {pathways.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                selectedId === item.id
                  ? 'bg-gradient-to-r from-[#0066FF]/30 to-[#00D4FF]/20 border-[#00D4FF] text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div>
                <p className="font-semibold text-sm font-['Manrope']">{item.name}</p>
                <p className="text-xs font-mono text-white/50">{item.type} • {item.duration}</p>
              </div>
              <span className={`w-3 h-3 rounded-full ${selectedId === item.id ? 'bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]' : 'bg-white/20'}`} />
            </button>
          ))}
        </div>

        {/* Dynamic ROI Metrics Card Right */}
        <div className="lg:col-span-6">
          <div className="bg-gradient-to-br from-[#071A2B] via-[#0A2942] to-[#071A2B] p-8 rounded-2xl border border-white/15 relative overflow-hidden space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase">Selected Target</span>
                <h4 className="text-xl font-bold text-white font-['Manrope']">{selected.name}</h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-mono border border-[#00D4FF]/30">
                {selected.type}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Expected Impact</span>
                </div>
                <p className="text-xl font-extrabold text-emerald-400 font-['Plus_Jakarta_Sans']">{selected.avgSalaryBoost}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono mb-1">
                  <Award className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Success Metric</span>
                </div>
                <p className="text-xl font-extrabold text-[#00D4FF] font-['Plus_Jakarta_Sans']">{selected.passRate}</p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-['Inter'] bg-white/5 p-3.5 rounded-xl border border-white/5">
              {selected.prepDetails}
            </p>

            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white py-3.5 rounded-xl text-sm font-semibold hover:opacity-95 shadow-lg shadow-[#0066FF]/25 transition-all"
            >
              <span>Get Personalized Roadmap & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}
