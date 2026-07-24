import type { FAQ } from '@/shared/types';

/**
 * FAQs — consumed by FAQAccordion, which also serialises them to
 * FAQPage JSON-LD for Google rich results + AI search.
 */
export const faqs: FAQ[] = [
  {
    q: 'What IT training courses does Endless Tech offer?',
    a: 'Endless Tech offers comprehensive training in Cloud Computing (AWS, Azure, Google Cloud), Full-Stack Software Development (React 18, Next.js 14, Node.js, Python), Data Analytics (Power BI, SQL), AI & Machine Learning Engineering, and Cybersecurity (CompTIA Security+).',
  },
  {
    q: 'Does Endless Tech provide enterprise cloud migration services?',
    a: 'Yes, Endless Tech provides full-lifecycle cloud migration services for UK businesses moving to AWS, Azure, or multi-cloud environments. We handle initial architecture assessment, security planning, zero-downtime execution, and post-migration optimization.',
  },
  {
    q: 'Are the training instructors based in the UK?',
    a: 'Yes, 100% of our senior trainers and consultants are based in the UK with 10+ years of active enterprise engineering experience.',
  },
  {
    q: 'What is the exam pass rate for AWS and Azure certification courses?',
    a: 'Our students achieve a 95% first-attempt pass rate on official AWS Solutions Architect and Microsoft Azure certification exams due to our intensive hands-on lab approach.',
  },
  {
    q: 'How long does a typical cloud migration project take?',
    a: 'Typical enterprise cloud migration projects range between 6 to 12 weeks, depending on system complexity, data volume, and compliance requirements.',
  },
];
