import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#071A2B] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#8B5CF6] p-12 sm:p-16 text-center shadow-2xl">
          
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-900/40 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-[760px] mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-white" />
              <span>START YOUR JOURNEY WITH ENDLESS TECH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
              Ready to Accelerate Your <br />
              Skills & Digital Growth?
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-10 font-['Inter']">
              Talk to our UK technology experts today. Whether you need career training or enterprise cloud solutions, we deliver results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/training" 
                className="inline-flex items-center gap-2 bg-white text-[#071A2B] px-8 py-4 rounded-xl text-base font-bold hover:bg-white/90 shadow-xl transition-all hover:-translate-y-0.5"
              >
                <span>Explore Training Courses</span>
                <ArrowRight className="w-5 h-5 text-[#0066FF]" />
              </Link>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-black/30 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/40 backdrop-blur-md transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Talk to an Expert</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
