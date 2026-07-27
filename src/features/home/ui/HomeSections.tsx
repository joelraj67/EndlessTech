import React from 'react';
import HeroSection from '@/features/hero/ui/HeroSection';
import ServicesSection from '@/features/services/ui/ServicesSection';
import WhyChooseUsSection from '@/features/shared-sections/ui/WhyChooseUsSection';
import TrainingSection from '@/features/training/ui/TrainingSection';
import TechStackSection from '@/features/shared-sections/ui/TechStackSection';
import ConsultingSection from '@/features/consulting/ui/ConsultingSection';
import ProblemFirstSection from '@/features/shared-sections/ui/ProblemFirstSection';
import TestimonialsSection from '@/features/shared-sections/ui/TestimonialsSection';
import CTASection from '@/features/shared-sections/ui/CTASection';
import ROICalculator from '@/features/roi-calculator/ui/ROICalculator';
import FAQAccordion from '@/features/faq/ui/FAQAccordion';
import { Section } from '@/shared/ui/section';
import { Container } from '@/shared/ui/container';
import { Reveal } from '@/shared/ui/reveal';

/**
 * HomeSections — the homepage section composition, in narrative order.
 * The home route is a thin wrapper around this so it stays readable.
 */
export function HomeSections() {
  return (
    <main>
      <HeroSection />
      <Reveal><ProblemFirstSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>
      <Reveal><WhyChooseUsSection /></Reveal>

      {/* Interactive calculator — between proof and catalogue */}
      <Reveal>
        <Section tone="surface-alt" className="border-t border-line py-24">
          <Container>
            <ROICalculator />
          </Container>
        </Section>
      </Reveal>

      <Reveal><TrainingSection /></Reveal>
      <Reveal delay={80}><TechStackSection /></Reveal>
      <Reveal><ConsultingSection /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><FAQAccordion /></Reveal>
      <Reveal><CTASection /></Reveal>
    </main>
  );
}
