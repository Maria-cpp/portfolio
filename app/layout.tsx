import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Maria Naseem — AI / ML Engineer',
  description:
    'AI Engineer & Solution Architect. Agentic systems, computer vision, full-stack. Founder of ZumfluxAI.',
  keywords: [
    'Maria Naseem',
    'AI Engineer',
    'Agentic AI',
    'Computer Vision',
    'Full Stack',
    'ZumfluxAI',
    'FastAPI',
    'Next.js',
    'LLM',
    'RAG'
  ],
  authors: [{ name: 'Maria Naseem' }],
  creator: 'Maria Naseem',
  metadataBase: new URL('https://maria-naseem.vercel.app'),
  openGraph: {
    title: 'Maria Naseem — AI / ML Engineer',
    description:
      'Agentic AI · Computer Vision · Full-Stack. Founder of ZumfluxAI.',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maria Naseem — AI / ML Engineer',
    description: 'Agentic AI · Computer Vision · Full-Stack.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="bg-bg text-white font-sans noise overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
