import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.itconnect.community';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/no-summer-fest`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
