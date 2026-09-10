import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.itconnect.community';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/back-office/', '/login', '/merch'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
