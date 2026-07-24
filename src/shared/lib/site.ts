import type { HeroMetric, Stat } from '@/shared/types';

/**
 * Single source of truth for company identity, contact details, and trust metrics.
 * Consumed by Footer, Contact, Hero, About, and metadata.
 */
export const site = {
  name: 'Endless Tech',
  legalName: 'Endless Technologies Ltd',
  motto: 'Learn Today. Build Tomorrow.',
  domain: 'endlesstech.io',
  url: 'https://endlesstech.io',

  contact: {
    email: 'info@endlesstech.io',
    phone: '+44 (0) 20 7946 0920',
    phoneHref: 'tel:+442079460920',
    hq: 'London, United Kingdom',
  },

  /** The one number that earns the hero — with provenance (Firebrand pattern). */
  heroMetric: {
    value: '95%',
    label: 'First-attempt certification pass rate',
    context: 'AWS Solutions Architect & Microsoft Azure cohorts',
  } satisfies HeroMetric,

  /** Supporting trust metrics, subordinate to the hero metric. */
  trust: [
    { value: '200+', label: 'Enterprise cloud migrations delivered' },
    { value: '50+', label: 'UK enterprise clients served' },
    { value: '10+', label: 'Years of senior engineering experience' },
  ] satisfies Stat[],
} as const;

export type Site = typeof site;
