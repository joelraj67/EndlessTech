'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
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

  // Google Forms config from environment
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

      // Submit via fetch with no-cors (required for Google Forms cross-origin)
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      // Success assumed if no network error (can't read response due to no-cors)
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
    <main className="min-h-screen bg-paper pt-24 text-ink">
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
              <GlassCard className="space-y-6 p-8">
                <h2 className="font-display text-2xl font-medium text-ink">Contact Details</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-md border border-line bg-surface p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase text-muted">Email Us</h3>
                      <p className="text-sm font-medium text-ink">{site.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-md border border-line bg-surface p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase text-muted">Call Us</h3>
                      <p className="text-sm font-medium text-ink">{site.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-md border border-line bg-surface p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs uppercase text-muted">UK Office</h3>
                      <p className="text-sm font-medium text-ink">{site.contact.hq}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-line pt-4 font-mono text-xs text-success">
                  <Clock className="h-4 w-4" />
                  <span>Guaranteed Response within 24 Hours</span>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span>Your information is protected under UK GDPR standards.</span>
                </div>
              </GlassCard>
            </div>

            {/* Right column: contact form */}
            <div className="lg:col-span-7">
              <GlassCard className="relative p-8 sm:p-10">
                {submitted ? (
                  <div className="space-y-4 py-16 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-success/40 bg-success/10 text-success">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-medium text-ink">Message Received!</h3>
                    <p className="mx-auto max-w-[400px] text-sm text-muted">
                      Thank you for reaching out. A senior Endless Tech technology specialist will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase text-accent hover:underline"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send another message</span>
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hidden iframe to capture Google Forms response */}
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
                        <div className="rounded-md border border-warning/40 bg-warning/10 p-4 text-sm text-warning">
                          ⚠️ Google Forms not configured. Add your form URL and entry IDs to <code>.env.local</code> (see <code>.env.example</code>).
                        </div>
                      )}

                      {error && (
                        <div className="rounded-md border border-error/40 bg-error/10 p-4 text-sm text-error">
                          {error}
                        </div>
                      )}

                      <h2 className="mb-2 font-display text-2xl font-medium text-ink">Send Us a Message</h2>
                      <p className="mb-6 text-sm text-muted">
                        Fill out the form below to discuss training courses or consulting services.
                      </p>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase text-ink">
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
                            className="w-full rounded-md border border-line-strong bg-surface px-4 py-3.5 text-sm text-ink placeholder-muted/60 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase text-ink">
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
                            className="w-full rounded-md border border-line-strong bg-surface px-4 py-3.5 text-sm text-ink placeholder-muted/60 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="mb-2 block font-mono text-xs uppercase text-ink">
                          Inquiry Type
                        </label>
                        <select
                          id="service"
                          name={ENTRY_IDS.service}
                          value={formData.service}
                          onChange={handleChange}
                          disabled={isSubmitting || !isConfigured}
                          className="w-full rounded-md border border-line-strong bg-surface px-4 py-3.5 text-sm text-ink transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
                        >
                          <option value="training">IT Training & Certifications</option>
                          <option value="software">Custom Software Development</option>
                          <option value="cloud">Cloud Migration & DevOps</option>
                          <option value="ai">AI & Data Analytics</option>
                          <option value="consulting">Technology Consulting</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase text-ink">
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
                          className="w-full resize-none rounded-md border border-line-strong bg-surface px-4 py-3.5 text-sm text-ink placeholder-muted/60 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !isConfigured}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-200 ease-out hover:bg-accent-hover active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:active:scale-100"
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