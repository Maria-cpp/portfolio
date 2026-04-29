'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="eyebrow">Featured work</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
              Selected{' '}
              <span className="gradient-text">projects</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm">
            A mix of client work and open-source — from multi-camera vision systems
            to agentic LLM platforms.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass rounded-3xl p-6 card-hover overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {p.highlight && (
                <div className="absolute top-5 right-5 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-accent/15 text-accent border border-accent/30">
                  <Sparkles size={10} /> {p.highlight}
                </div>
              )}

              <h3 className="font-display text-xl font-semibold pr-24">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-accent-cyan font-mono">
                {p.tagline}
              </p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/65"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition link-underline"
                  >
                    <Github size={14} /> Source
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition link-underline"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {!p.repo && !p.demo && (
                  <span className="text-xs text-white/40 italic">
                    Private — available on request
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Maria-cpp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <Github size={14} /> See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
