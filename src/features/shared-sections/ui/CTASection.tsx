import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';

/**
 * CTASection — final conversion banner.
 *
 * Warm editorial skin (Vinny.io v2): the one place the terracotta fills a
 * surface — a full accent band. Buttons invert (white-on-accent / outline).
 * Used once per page, at the close.
 */
export default function CTASection() {
  return (
    <Section tone="paper" className="overflow-hidden">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-accent p-12 text-center shadow-2xl sm:p-16">
          {/* Overlay pattern */}
          <div className="absolute inset-0 bg-panel/20 backdrop-blur-[2px]" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-panel/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-[760px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 font-mono text-xs text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-white" />
              <span>START YOUR JOURNEY WITH ENDLESS TECH</span>
            </div>

            <h2 className="mb-6 font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
              Ready to Accelerate Your <br />
              Skills &amp; Digital Growth?
            </h2>

            <p className="mb-10 font-body text-lg leading-relaxed text-white/90">
              Talk to our UK technology experts today. Whether you need career training or enterprise cloud solutions, we deliver results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/training"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-accent shadow-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-paper active:scale-[0.97]"
              >
                <span>Explore Training Courses</span>
                <ArrowRight className="h-5 w-5 text-accent" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-panel/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 ease-out hover:bg-panel/50 active:scale-[0.97]"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
