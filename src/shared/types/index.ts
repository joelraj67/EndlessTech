import type { LucideIcon } from 'lucide-react';

/**
 * Shared domain types for EndlessTech marketing site.
 * Single source of truth for content shapes used across sections + pages.
 */

/** A primary navigation or footer link. */
export interface NavItem {
  label: string;
  href: string;
}

/** A headline trust statistic shown on the home + about pages. */
export interface Stat {
  value: string;
  label: string;
  /** Optional provenance / context line (where the number comes from). */
  context?: string;
}

/** A single hero metric — Firebrand pattern: one number, one label, real source. */
export interface HeroMetric extends Stat {
  context: string;
}

/** "Why choose us" advantage card. */
export interface Advantage {
  icon: LucideIcon;
  title: string;
  metric: string;
  description: string;
  accentColor: string;
  accentClass: string;
}

/** A core service — drives the home grid, overview page, and the [slug] detail route. */
export interface Service {
  /** URL-safe identifier; also the [slug] route segment. */
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Short badge shown on cards (e.g. "B2C & B2B Academy"). */
  tag: string;
  /** Short card description. */
  description: string;
  /** Feature chips shown on the card. */
  features: string[];
  /** Detail-page bullet list (deeper than `features`). */
  capabilities: string[];
  /** Accent gradient classes (Tailwind). Lives in content/ so must be scanned. */
  accent: string;
  /** Detail-page CTA. */
  cta: {
    label: string;
    href: string;
  };
  /** Accent colour token used by the detail hero glow + icon chip. */
  accentColor: string;
}

/** A training course / certification pathway. */
export interface Course {
  slug: string;
  title: string;
  level: string;
  duration: string;
  /** Delivery format (e.g. "Live Online + Labs"). */
  format?: string;
  /** Syllabus topic chips. */
  topics?: string[];
  /** Longer description (training page). */
  desc?: string;
  /** Short description (home section). */
  description?: string;
  badge: string;
}

/** A tech-stack category shown on the home page. */
export interface TechStackCategory {
  category: string;
  icon: LucideIcon;
  /** Gradient classes for the icon tile. */
  color: string;
  techs: string[];
}

/** A consulting advisory step — genuinely sequential, so numbering is justified. */
export interface AdvisoryStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  accentClass: string;
}

/** A client testimonial. */
export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  tag: string;
}

/** A FAQ entry — also serialised to JSON-LD by FAQAccordion. */
export interface FAQ {
  q: string;
  a: string;
}

/** An ROI calculator pathway. */
export interface Pathway {
  id: string;
  name: string;
  type: string;
  duration: string;
  passRate: string;
  avgSalaryBoost: string;
  prepDetails: string;
  accentColor: string;
  accentClass: string;
}

/** A company value shown on the about page. */
export interface CompanyValue {
  title: string;
  desc: string;
}

/** An industry vertical the company serves (Coeo/Softcat slicing pattern). */
export interface Vertical {
  slug: string;
  name: string;
  description: string;
}
