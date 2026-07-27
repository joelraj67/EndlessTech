import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GlassCard } from '@/shared/ui/glass-card';
import { testimonials } from '@/features/shared-sections/model/testimonials';

/**
 * TestimonialsSection — client proof cards.
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export default function TestimonialsSection() {
  return (
    <Section tone="surface" className="border-t border-white/10">
      <Container>
        <SectionHeading
          eyebrow="CLIENT TESTIMONIALS"
          title={
            <>
              Trusted by Leading UK <br />
              <span className="text-cerulean font-extrabold">Businesses &amp; Engineers</span>
            </>
          }
          subtitle="See how our training and consulting services have driven real digital impact."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard
              key={item.author}
              interactive
              className="group relative flex flex-col justify-between p-10 border-white/10 hover:border-cerulean/50"
            >
              <Quote className="pointer-events-none absolute right-6 top-6 h-10 w-10 text-cerulean/20 transition-colors group-hover:text-cerulean/50" />

              <div>
                <div className="mb-6 flex gap-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning" />
                  ))}
                </div>

                <p className="mb-8 font-body text-sm italic leading-relaxed text-slate-200">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <h4 className="font-body text-base font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-slate-400">
                    {item.title}, <span className="font-semibold text-cerulean">{item.company}</span>
                  </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-slate-300">
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
