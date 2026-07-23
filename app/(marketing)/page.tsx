import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TrainingSection from '@/components/sections/TrainingSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ConsultingSection from '@/components/sections/ConsultingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ROICalculator from '@/components/features/ROICalculator';
import FAQAccordion from '@/components/features/FAQAccordion';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      
      {/* Interactive Calculator Section */}
      <section className="py-24 bg-[#071A2B] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <ROICalculator />
        </div>
      </section>

      <TrainingSection />
      <TechStackSection />
      <ConsultingSection />
      <TestimonialsSection />
      <FAQAccordion />
      <CTASection />
    </main>
  );
}
