import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const BASE_URL = 'https://genius-asif.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Asif Shaikh — Senior Backend Engineer',
    template: '%s | Asif Shaikh',
  },
  description:
    'Senior Backend Engineer with 6+ years building scalable, high-performance systems. Node.js, Laravel, Microservices, AI/RAG applications.',
  keywords: [
    'backend developer', 'Node.js', 'Laravel', 'microservices',
    'API integration', 'software engineer portfolio', 'AI RAG developer',
    'NestJS', 'PostgreSQL', 'senior engineer',
  ],
  authors: [{ name: 'Asif Shaikh' }],
  creator: 'Asif Shaikh',
  openGraph: {
    title: 'Asif Shaikh — Senior Backend Engineer',
    description:
      'Building scalable backend systems and intelligent applications with 6+ years of experience.',
    url: BASE_URL,
    siteName: 'Asif Shaikh Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Asif Shaikh — Senior Backend Engineer' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asif Shaikh — Senior Backend Engineer',
    description: 'Building scalable backend systems and intelligent applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // google: 'your-google-search-console-token', // add after deploying
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Asif Shaikh',
  url: BASE_URL,
  sameAs: [
    'https://github.com/genius-asif-hub',
    'https://linkedin.com/in/asif-shaikh',
  ],
  jobTitle: 'Senior Backend Engineer',
  knowsAbout: ['Node.js', 'Laravel', 'NestJS', 'Microservices', 'AI/RAG', 'PostgreSQL', 'MongoDB'],
  description:
    'Senior Backend Engineer with 6+ years building scalable, high-performance systems.',
  email: 'asif@krishaweb.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <Script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
