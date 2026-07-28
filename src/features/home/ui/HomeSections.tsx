import React, { Suspense, lazy } from 'react';
import HeroSection from '@/features/hero/ui/HeroSection';
import { Section } from '@/shared/ui/section';
import { Container } from '@/shared/ui/container';
import { Reveal } from '@/shared/ui/reveal';

// Above-fold: loaded eagerly
import ProblemFirstSection from '@/features/shared-sections/ui/ProblemFirstSection';
import ServicesSection from '@/features/services/ui/ServicesSection';

// Below-fold: lazy-loaded to improve LCP and reduce initial JS bundle
const WhyChooseUsSection = lazy(() => import('@/features/shared-sections/ui/WhyChooseUsSection'));
const ROICalculator = lazy(() => import('@/features/roi-calculator/ui/ROICalculator'));
const TrainingSection = lazy(() => import('@/features/training/ui/TrainingSection'));
const TechStackSection = lazy(() => import('@/features/shared-sections/ui/TechStackSection'));
const ConsultingSection = lazy(() => import('@/features/consulting/ui/ConsultingSection'));
const TestimonialsSection = lazy(() => import('@/features/shared-sections/ui/TestimonialsSection'));
const FAQAccordion = lazy(() => import('@/features/faq/ui/FAQAccordion'));
const CTASection = lazy(() => import('@/features/shared-sections/ui/CTASection'));

/** Lightweight skeleton placeholder for lazy sections */
function SectionSkeleton() {
  return (
    <div className="py-24" aria-hidden="true">
      <div className="mx-auto max-w-4xl px-6 space-y-4 animate-pulse">
        <div className="h-4 w-32 rounded-full bg-white/10 mx-auto" />
        <div className="h-8 w-64 rounded-full bg-white/10 mx-auto" />
        <div className="h-4 w-96 rounded-full bg-white/10 mx-auto" />
      </div>
    </div>
  );
}

/**
 * HomeSections — the homepage section composition, in narrative order.
 * Eagerly loads hero + first two sections; defers everything below-fold.
 */
export function HomeSections() {
  return (
    <main id="main-content">
      <HeroSection />
      <Reveal><ProblemFirstSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal><WhyChooseUsSection /></Reveal>
      </Suspense>

      {/* Interactive ROI Calculator */}
      <Suspense fallback={<SectionSkeleton />}>
        <Reveal>
          <Section tone="surface-alt" className="border-t border-line py-24">
            <Container>
              <ROICalculator />
            </Container>
          </Section>
        </Reveal>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal><TrainingSection /></Reveal>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal delay={80}><TechStackSection /></Reveal>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal><ConsultingSection /></Reveal>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal><TestimonialsSection /></Reveal>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal><FAQAccordion /></Reveal>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Reveal><CTASection /></Reveal>
      </Suspense>
    </main>
  );
}
