import type { NavItem } from '@/shared/types';

/**
 * Navigation link sets, shared by Navigation (desktop + mobile drawer) and Footer.
 * Editing the menu happens here, nowhere else.
 */
export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'IT Training', href: '/training' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'About Us', href: '/about' },
];

export const footerServicesNav: NavItem[] = [
  { label: 'IT Training Academy', href: '/services/it-training' },
  { label: 'Software Engineering', href: '/services/software-development' },
  { label: 'Cloud & DevOps', href: '/services/cloud-services' },
  { label: 'AI & Data Analytics', href: '/services/ai-data-analytics' },
  { label: 'Tech Advisory', href: '/services/technology-consulting' },
];

export const footerCompanyNav: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Courses Syllabus', href: '/training' },
  { label: 'Consulting Advisory', href: '/consulting' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerLegalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Settings', href: '#' },
];
