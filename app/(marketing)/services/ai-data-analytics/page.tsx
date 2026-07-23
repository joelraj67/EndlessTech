import React from 'react';
import Link from 'next/link';
import { BrainCircuit, CheckCircle2, ArrowRight } from 'lucide-react';

const aiItems = [
  'Custom Machine Learning Model Development & Training (PyTorch & TensorFlow)',
  'Enterprise Data Engineering Pipelines & Warehouse Design (PostgreSQL / Snowflake)',
  'Business Intelligence & Executive Analytics Dashboards (Power BI & Tableau)',
  'Secure LLM Integration, Vector Databases & RAG Pipelines',
  'Automated Predictive Analytics for Business Operations',
];

export default function AIDataPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[760px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-mono mb-6">
            <BrainCircuit className="w-4 h-4 text-purple-400" />
            <span>ENTERPRISE AI & DATA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            AI & Data Analytics <br />
            <span className="gradient-text-purple">Solutions</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Transforming raw business data into intelligent insights, machine learning automation, and custom generative AI applications.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8 font-['Plus_Jakarta_Sans'] text-center">AI & Data Capabilities</h2>
          {aiItems.map((item) => (
            <div key={item} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0" />
              <p className="text-white font-medium text-base font-['Inter']">{item}</p>
            </div>
          ))}

          <div className="pt-12 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6] to-[#0066FF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#8B5CF6]/25 transition-all"
            >
              <span>Discuss AI Implementation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
