/**
 * Footer.tsx — Site footer with branding, social icons, and tech credits.
 *
 * Displays the brand name, copyright with dynamic year, social icon links
 * (GitHub, LinkedIn, Email), and a "Built with" tech credit line.
 */
'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-12 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-display font-bold text-lg">
              {personal.firstName}
              <span className="text-fg-muted">.dev</span>
            </div>
            <div className="mt-1 text-xs font-mono text-white/40">
              © {year} {personal.name} · Founder, ZumfluxAI
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white card-hover"
            >
              <Github size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white card-hover"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white card-hover"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/40 font-mono inline-flex items-center gap-1.5">
            Built with Next.js · Tailwind · Framer Motion · shipped with{' '}
            <Heart size={11} className="text-accent-pink fill-accent-pink" />
          </p>
        </div>
      </div>
    </footer>
  );
}
