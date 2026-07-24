import type { CompanyValue, Stat } from '@/shared/types';

/** Headline stats — About page stats strip. */
export const aboutStats: Stat[] = [
  { value: '200+', label: 'Cloud Migrations' },
  { value: '95%', label: 'AWS Exam Pass Rate' },
  { value: '100%', label: 'UK Senior Engineers' },
  { value: '50+', label: 'UK Enterprise Clients' },
];

/** Company values — About page. */
export const companyValues: CompanyValue[] = [
  {
    title: 'Practical Hands-On Excellence',
    desc: 'We focus on real-world portfolio code, production architecture, and measurable project outcomes, avoiding purely theoretical slides.',
  },
  {
    title: 'UK Compliance & Security',
    desc: 'Based in London, operating under strict UK GDPR standards, data sovereignty guidelines, and ISO security frameworks.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We work side-by-side with your internal tech leads and career switchers to ensure skills and software thrive long after project delivery.',
  },
];
