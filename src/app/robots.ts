import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Update the base URL to your actual production domain once deployed
  const baseUrl = 'https://genius-asif.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
