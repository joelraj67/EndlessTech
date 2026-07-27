'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { Badge } from '@/shared/ui/badge';
import { site } from '@/shared/lib/site';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: 'training',
    message: '',
  });

  const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || '';
  const ENTRY_IDS = {
    name: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_NAME || 'entry.XXXXXXXXX',
    email: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_EMAIL || 'entry.YYYYYYYYY',
    service: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_SERVICE || 'entry.ZZZZZZZZZ',
    message: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_MESSAGE || 'entry.AAAAAAAAA',
  };

  const isConfigured = GOOGLE_FORM_URL && GOOGLE_FORM_URL.includes('YOUR_FORM_ID') === false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isConfigured) {
      setError('Google Forms not configured. Please add your form URL and entry IDs to .env.local');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(ENTRY_IDS.name, formData.name);
      formDataToSubmit.append(ENTRY_IDS.email, formData.email);
      formDataToSubmit.append(ENTRY_IDS.service, formData.service);
      formDataToSubmit.append(ENTRY_IDS.message, formData.message);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'training', message: '' });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again later.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg text-slate-100">
      <PageHero
        eyebrow="DIRECT UK CONSULTATION"
        eyebrowIcon={Sparkles}
        title={
          <>
            Let&apos;s Talk About Your <br />
            <GradientText>Skills & Tech Strategy</GradientText>
          </>
        }
        subtitle="Get in touch with our London team. Whether inquiring about individual IT courses or enterprise consulting, we respond within 24 hours."
      />

      <Section tone="surface-alt">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left column: direct info */}
            <div className="space-y-8 lg:col-span-5">
              <GlassCard className="space-y-6 p-9 border-white/15">
                <h2 className="font-display text-2xl font-extrabold text-white">Contact Details</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase font-bold text-sky-300">Email Us</h3>
                      <p className="text-sm font-semibold text-white">{site.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase font-bold text-sky-300">Call Us</h3>
                      <p className="text-sm font-semibold text-white">{site.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase font-bold text-sky-300">UK Office</h3>
                      <p className="text-sm font-semibold text-white">{site.contact.hq}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-white/15 pt-4 font-mono text-xs text-emerald-400 font-semibold">
                  <Clock className="h-4 w-4" />
                  <span>Guaranteed Response within 24 Hours</span>
                </div>
              </GlassCard>

              <GlassCard className="p-9 border-white/15">
                <div className="flex items-center gap-3 font-mono text-xs text-slate-200 font-medium">
                  <ShieldCheck className="h-5 w-5 text-sky-400" />
                  <span>Your information is protected under UK GDPR standards.</span>
                </div>
              </GlassCard>
            </div>

            {/* Right column: contact form */}
            <div className="lg:col-span-7">
              <GlassCard className="relative p-9 sm:p-10 border-white/15">
                {submitted ? (
                  <div className="space-y-4 py-16 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/20 text-emerald-300">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Message Received!</h3>
                    <p className="mx-auto max-w-[400px] text-sm text-slate-200">
                      Thank you for reaching out. A senior Endless Tech technology specialist will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase text-sky-300 hover:underline font-bold"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send another message</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <iframe
                      name="gform_target"
                      id="gform_target"
                      style={{ display: 'none' }}
                    />

                    <form
                      className="space-y-6"
                      onSubmit={handleSubmit}
                      action={GOOGLE_FORM_URL}
                      method="POST"
                      target="gform_target"
                    >
                      {!isConfigured && (
                        <div className="rounded-lg border border-amber-400/40 bg-amber-500/15 p-4 text-sm text-amber-300 font-mono font-medium">
                          ⚠️ Google Forms not configured. Add your form URL and entry IDs to <code>.env.local</code>.
                        </div>
                      )}

                      {error && (
                        <div className="rounded-lg border border-rose-400/40 bg-rose-500/15 p-4 text-sm text-rose-300 font-mono font-medium">
                          {error}
                        </div>
                      )}

                      <h2 className="mb-2 font-display text-2xl font-extrabold text-white">Send Us a Message</h2>
                      <p className="mb-6 text-sm text-slate-200">
                        Fill out the form below to discuss training courses or consulting services.
                      </p>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase font-bold text-sky-300">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name={ENTRY_IDS.name}
                            required
                            placeholder="Sarah Chen"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting || !isConfigured}
                            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 transition-all focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase font-bold text-sky-300">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name={ENTRY_IDS.email}
                            required
                            placeholder="sarah@company.co.uk"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting || !isConfigured}
                            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 transition-all focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="mb-2 block font-mono text-xs uppercase font-bold text-sky-300">
                          Inquiry Type
                        </label>
                        <select
                          id="service"
                          name={ENTRY_IDS.service}
                          value={formData.service}
                          onChange={handleChange}
                          disabled={isSubmitting || !isConfigured}
                          className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-3.5 text-sm text-white transition-all focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 disabled:opacity-50"
                        >
                          <option value="training">IT Training & Certifications</option>
                          <option value="software">Custom Software Development</option>
                          <option value="cloud">Cloud Migration & DevOps</option>
                          <option value="ai">AI & Data Analytics</option>
                          <option value="consulting">Technology Consulting</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase font-bold text-sky-300">
                          Project Details / Inquiry *
                        </label>
                        <textarea
                          id="message"
                          name={ENTRY_IDS.message}
                          rows={5}
                          required
                          placeholder="Tell us about your team's upskilling needs or upcoming software project..."
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isSubmitting || !isConfigured}
                          className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-400 transition-all focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !isConfigured}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(251,146,60,0.35)] transition-all duration-200 ease-out hover:bg-accent-hover active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
