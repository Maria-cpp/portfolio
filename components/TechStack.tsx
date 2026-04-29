'use client';

import { motion } from 'framer-motion';
import {
  Brain, Server, Layout, Boxes, Zap, Wrench, type LucideIcon
} from 'lucide-react';
import { techCategories, techMarquee } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Brain, Server, Layout, Boxes, Zap, Wrench
};

export default function TechStack() {
  // Duplicate for seamless marquee
  const marqueeItems = [...techMarquee, ...techMarquee];

  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="eyebrow">Tech stack</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
              Tools I reach for{' '}
              <span className="gradient-text">every week</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm">
            A curated set across AI, backend, frontend and DevOps — the same
            stack I use to ship production systems.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 fade-mask-x"
        >
          <div className="marquee-track">
            {marqueeItems.map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="mx-2 glass rounded-full px-5 py-2.5 font-mono text-sm whitespace-nowrap text-white/80"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categories grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? Boxes;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="glass rounded-2xl p-5 card-hover group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/70 hover:text-white hover:bg-white/[0.08] transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
