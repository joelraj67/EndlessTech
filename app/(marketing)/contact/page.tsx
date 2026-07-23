'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[780px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-6">
            <Sparkles className="w-4 h-4" />
            <span>DIRECT UK CONSULTATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            Let's Talk About Your <br />
            <span className="gradient-text">Skills & Tech Strategy</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Get in touch with our London team. Whether inquiring about individual IT courses or enterprise consulting, we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-white font-['Manrope']">Contact Details</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-white/50 uppercase">Email Us</h3>
                    <p className="text-white font-medium text-sm">info@endlesstech.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-white/50 uppercase">Call Us</h3>
                    <p className="text-white font-medium text-sm">+44 (0) 20 7946 0920</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-white/50 uppercase">UK Office</h3>
                    <p className="text-white font-medium text-sm">London, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>Guaranteed Response within 24 Hours</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-white/70">
                <ShieldCheck className="w-5 h-5 text-[#00D4FF]" />
                <span>Your information is protected under UK GDPR standards.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 relative">
              
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">Message Received!</h3>
                  <p className="text-white/70 text-sm max-w-[400px] mx-auto">
                    Thank you for reaching out. A senior Endless Tech technology specialist will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-white font-['Manrope'] mb-2">Send Us a Message</h2>
                  <p className="text-white/60 text-sm mb-6">Fill out the form below to discuss training courses or consulting services.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-white/80 mb-2 uppercase">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Sarah Chen"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-sm" 
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-white/80 mb-2 uppercase">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="sarah@company.co.uk"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-sm" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-mono text-white/80 mb-2 uppercase">Inquiry Type</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#071A2B] border border-white/10 text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-sm"
                    >
                      <option value="training">IT Training & Certifications</option>
                      <option value="software">Custom Software Development</option>
                      <option value="cloud">Cloud Migration & DevOps</option>
                      <option value="ai">AI & Data Analytics</option>
                      <option value="consulting">Technology Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-white/80 mb-2 uppercase">Project Details / Inquiry *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      placeholder="Tell us about your team's upskilling needs or upcoming software project..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all text-sm resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#0066FF]/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
