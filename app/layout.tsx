/**
 * layout.tsx — Root layout for the Next.js App Router.
 *
 * Configures three Google Fonts (Inter for body, Space Grotesk for headings,
 * JetBrains Mono for monospace), sets global SEO metadata (OpenGraph, Twitter
 * cards, keywords), and injects JSON-LD structured data (Person + WebSite
 * schemas) into the document head for search engine rich results.
 */
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// --- Font configuration (CSS variables used in tailwind.config.ts) ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

// --- SEO constants ---
const SITE_URL = 'https://maria-ai-portfolio.vercel.app';
const TITLE = 'Maria Naseem | AI Engineer · Computer Vision · Agentic AI';
const DESCRIPTION =
  'AI Engineer and Solutions Architect building production computer vision, agentic AI, RAG, MCP, and enterprise platforms with Python, FastAPI, OpenVINO, PostgreSQL, Docker, and cloud infrastructure.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Maria Naseem'
  },
  description: DESCRIPTION,
  keywords: [
    'Maria Naseem',
    'Forward Deployed Engineer',
    'Forward Deployment Engineer',
    'AI Engineer',
    'Senior AI Engineer',
    'Applied AI Engineer',
    'Computer Vision Engineer',
    'Generative AI Engineer',
    'Agentic AI Engineer',
    'Machine Learning Engineer',
    'Python AI Engineer',
    'AI Solutions Architect',
    'Solutions Engineer',
    'AI Consultant',
    'Enterprise AI',
    'Agentic AI',
    'RAG',
    'Retrieval Augmented Generation',
    'LangGraph',
    'MCP',
    'Model Context Protocol',
    'Computer Vision',
    'Ultralytics',
    'YOLO26',
    'Workflow Automation',
    'Document Intelligence',
    'Microsoft Azure',
    'Azure Container Apps',
    'Azure AI',
    'FastAPI',
    'Next.js',
    'Python',
    'pgvector',
    'ZumfluxAI'
  ],
  authors: [{ name: 'Maria Naseem', url: SITE_URL }],
  creator: 'Maria Naseem',
  publisher: 'Maria Naseem',
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Maria Naseem — AI Engineer',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION
  },
  category: 'technology'
};

// --- JSON-LD structured data for search engine rich results ---
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maria Naseem',
  url: SITE_URL,
  email: 'mailto:marianaseem99@gmail.com',
  jobTitle: 'AI Engineer and AI Solutions Architect',
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK'
  },
  sameAs: [
    'https://github.com/Maria-cpp',
    'https://www.linkedin.com/in/maria-naseem/'
  ],
  worksFor: [
    { '@type': 'Organization', name: 'Arwen Tech' },
    { '@type': 'Organization', name: 'ZumfluxAI' }
  ],
  knowsAbout: [
    'Applied Artificial Intelligence',
    'Machine Learning Engineering',
    'Agentic AI',
    'Retrieval Augmented Generation',
    'Computer Vision',
    'Microsoft Azure',
    'FastAPI',
    'Next.js',
    'Workflow Automation',
    'Document Intelligence',
    'Solution Architecture'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Maria Naseem — Forward Deployed Engineer',
  url: SITE_URL,
  author: { '@type': 'Person', name: 'Maria Naseem' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-bg text-white font-sans noise overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
