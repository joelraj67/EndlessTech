'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GradientText } from '@/shared/ui/gradient-text';
import { faqs } from '@/features/faq/model/faqs';

/**
 * FAQAccordion — accordion + FAQPage JSON-LD schema for Google rich results.
 * Data sourced from content/faqs.ts (single source of truth).
 *
 * Warm editorial skin (Vinny.io v2): paper accordion panels, terracotta
 * chevrons, serif questions.
 */
export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Schema.org FAQPage JSON-LD for AI Search & Google indexing
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
    <Section tone="surface-alt" className="overflow-hidden border-t border-line py-24">
      {/* Inject FAQ Schema for AI Search & Google indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          eyebrowIcon={HelpCircle}
          title={
            <>
              Got Questions? <GradientText>We Have Clear Answers.</GradientText>
            </>
          }
          subtitle="Everything you need to know about our courses, consulting, and UK support."
        />

        <div className="mx-auto max-w-[1000px] space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="glass-card rounded-lg border border-line overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display text-lg font-medium text-ink">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-line pt-4 font-body animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
