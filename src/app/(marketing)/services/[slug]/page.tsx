import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailView from '@/features/services/ui/ServiceDetailView';
import { services, getServiceBySlug } from '@/features/services/model/services';
import { site } from '@/shared/lib/site';

/**
 * Dynamic service detail route — replaces the 5 static service folders.
 *
 * Fully static: generateStaticParams pre-renders every service at build time,
 * so the output is identical to the old static folders (SEO + links preserved).
 */

/** Pre-render every service slug at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/** Per-service metadata for SEO + social shares. */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | ${site.name}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.description,
      url: `${site.url}/services/${service.slug}`,
      type: 'website',
      locale: 'en_GB',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
