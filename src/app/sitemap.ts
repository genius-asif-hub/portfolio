import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Update the base URL to your actual production domain once deployed
  const baseUrl = 'https://portfolio-six-azure-ozatixs799.vercel.app';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
