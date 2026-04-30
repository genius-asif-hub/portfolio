import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Update the base URL to your actual production domain once deployed
  const baseUrl = 'https://your-portfolio-domain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
