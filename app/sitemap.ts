/**
 * sitemap.ts — Generates sitemap.xml for search engine indexing.
 *
 * Includes the homepage (priority 1.0) and all case study pages
 * (priority 0.8). Slugs are sourced from lib/caseStudies.ts.
 */
import type { MetadataRoute } from 'next';
import { caseStudySlugs } from '@/lib/caseStudies';

const SITE_URL = 'https://maria-ai-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1
    },
    ...caseStudySlugs.map((slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
