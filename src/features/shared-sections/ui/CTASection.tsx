import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { Badge } from '@/shared/ui/badge';

/**
 * CTASection — final conversion banner.
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export default function CTASection() {
  return (
    <Section tone="paper" className="overflow-hidden">
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl p-12 text-center shadow-2xl sm:p-16 border border-white/20"
          style={{
            background: 'linear-gradient(135deg, #0b132b 0%, #1e293b 50%, #060e20 100%)',
          }}
        >
          {/* Atmospheric depth layers */}
          <div className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(244,114,182,0.25) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(56,189,248,0.3) 0%, transparent 55%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 mx-auto max-w-[780px]">
            <Badge tone="accent" className="mb-6">
              <Sparkles className="h-4 w-4 text-sky-300" />
              <span>START YOUR JOURNEY WITH ENDLESS TECH</span>
            </Badge>

            <h2 className="mb-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Ready to Accelerate Your <br />
              Skills &amp; Digital Growth?
            </h2>

            <p className="mb-10 font-body text-lg leading-relaxed text-slate-200">
              Talk to our UK technology experts today. Whether you need career training or enterprise cloud solutions, we deliver results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/training"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(251,146,60,0.4)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover active:scale-[0.97]"
              >
                <span>Explore Training Courses</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 ease-out hover:bg-white/20 active:scale-[0.97]"
              >
                <PhoneCall className="h-5 w-5 text-sky-300" />
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
