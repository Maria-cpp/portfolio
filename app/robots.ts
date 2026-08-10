/**
 * robots.ts — Generates robots.txt for web crawler access control.
 *
 * Allows all user agents full access and points crawlers to the sitemap.
 */
import type { MetadataRoute } from 'next';

const SITE_URL = 'https://maria-ai-portfolio.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
