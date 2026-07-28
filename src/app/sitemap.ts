import type { MetadataRoute } from 'next';
import { site } from '@/shared/lib/site';

/**
 * Next.js 14 native sitemap — auto-submitted to search engines via robots.txt.
 * Add new routes here as the site grows.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const now = new Date();

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/training', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/consulting', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
