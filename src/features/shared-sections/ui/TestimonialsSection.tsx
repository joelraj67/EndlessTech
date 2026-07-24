import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GlassCard } from '@/shared/ui/glass-card';
import { testimonials } from '@/features/shared-sections/model/testimonials';

/**
 * TestimonialsSection — client proof cards.
 *
 * Warm editorial skin (Vinny.io v2): paper cards, terracotta quotation mark
 * motif, serif accent on company names. Stars stay amber (status colour).
 */
export default function TestimonialsSection() {
  return (
    <Section tone="surface" className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="CLIENT TESTIMONIALS"
          title={
            <>
              Trusted by Leading UK <br />
              <span className="text-accent italic">Businesses &amp; Engineers</span>
            </>
          }
          subtitle="See how our training and consulting services have driven real digital impact."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard
              key={item.author}
              interactive
              className="group relative flex flex-col justify-between p-8"
            >
              <Quote className="pointer-events-none absolute right-6 top-6 h-10 w-10 text-accent/20 transition-colors group-hover:text-accent/40" />

              <div>
                <div className="mb-6 flex gap-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning" />
                  ))}
                </div>

                <p className="mb-8 font-body text-sm italic leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-line pt-4">
                <div>
                  <h4 className="font-body text-base font-semibold text-ink">{item.author}</h4>
                  <p className="text-xs text-muted">
                    {item.title}, <span className="font-semibold text-accent">{item.company}</span>
                  </p>
                </div>
                <span className="rounded-sm border border-line bg-surface-alt px-2.5 py-1 font-mono text-[10px] text-muted">
                  {item.tag}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
