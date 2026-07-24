import React from 'react';
import HeroSection from '@/features/hero/ui/HeroSection';
import ServicesSection from '@/features/services/ui/ServicesSection';
import WhyChooseUsSection from '@/features/shared-sections/ui/WhyChooseUsSection';
import TrainingSection from '@/features/training/ui/TrainingSection';
import TechStackSection from '@/features/shared-sections/ui/TechStackSection';
import ConsultingSection from '@/features/consulting/ui/ConsultingSection';
import TestimonialsSection from '@/features/shared-sections/ui/TestimonialsSection';
import CTASection from '@/features/shared-sections/ui/CTASection';
import ROICalculator from '@/features/roi-calculator/ui/ROICalculator';
import FAQAccordion from '@/features/faq/ui/FAQAccordion';
import { Section } from '@/shared/ui/section';
import { Container } from '@/shared/ui/container';

/**
 * HomeSections — the homepage section composition, in narrative order.
 * The home route is a thin wrapper around this so it stays readable.
 */
export function HomeSections() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />

      {/* Interactive calculator — between proof and catalogue */}
      <Section tone="surface-alt" className="border-t border-line py-24">
        <Container>
          <ROICalculator />
        </Container>
      </Section>

      <TrainingSection />
      <TechStackSection />
      <ConsultingSection />
      <TestimonialsSection />
      <FAQAccordion />
      <CTASection />
    </main>
  );
}
