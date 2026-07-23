'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What IT training courses does Endless Tech offer?',
    a: 'Endless Tech offers comprehensive training in Cloud Computing (AWS, Azure, Google Cloud), Full-Stack Software Development (React 18, Next.js 14, Node.js, Python), Data Analytics (Power BI, SQL), AI & Machine Learning Engineering, and Cybersecurity (CompTIA Security+).',
  },
  {
    q: 'Does Endless Tech provide enterprise cloud migration services?',
    a: 'Yes, Endless Tech provides full-lifecycle cloud migration services for UK businesses moving to AWS, Azure, or multi-cloud environments. We handle initial architecture assessment, security planning, zero-downtime execution, and post-migration optimization.',
  },
  {
    q: 'Are the training instructors based in the UK?',
    a: 'Yes, 100% of our senior trainers and consultants are based in the UK with 10+ years of active enterprise engineering experience.',
  },
  {
    q: 'What is the exam pass rate for AWS and Azure certification courses?',
    a: 'Our students achieve a 95% first-attempt pass rate on official AWS Solutions Architect and Microsoft Azure certification exams due to our intensive hands-on lab approach.',
  },
  {
    q: 'How long does a typical cloud migration project take?',
    a: 'Typical enterprise cloud migration projects range between 6 to 12 weeks, depending on system complexity, data volume, and compliance requirements.',
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Schema.org FAQPage JSON-LD for ASO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <section className="py-24 bg-[#071A2B] relative overflow-hidden border-t border-white/5">
      
      {/* Inject FAQ Schema for AI Search & Google indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Got Questions? <span className="gradient-text">We Have Clear Answers.</span>
          </h2>
          <p className="text-white/60 text-base font-['Inter']">Everything you need to know about our courses, consulting, and UK support.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={faq.q}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-lg text-white font-['Manrope']">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#00D4FF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-4 font-['Inter'] animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
