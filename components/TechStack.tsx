'use client';

import { motion } from 'framer-motion';
import {
  Brain, Server, Layout, Boxes, Wrench, Camera, Activity, Zap,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';
import { techCategories, techMarquee } from '@/lib/data';
import Tilt3D from './Tilt3D';

const iconMap: Record<string, LucideIcon> = {
  Brain, Server, Layout, Boxes, Wrench, Camera, Activity, Zap,
  ShieldCheck
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
          className="flex flex-col gap-4"
        >
          <div>
            <div className="eyebrow">Tech stack</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
              Tools I Reach For{' '}
              <span className="gradient-text">Every Week</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm">
            The day-to-day toolbox I build with — across agentic AI, computer vision,
            backend, frontend, and observability.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 fade-mask-x flex flex-col gap-3"
        >
          <div className="marquee-track">
            {marqueeItems.map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="mx-2 glass rounded-full px-5 py-2.5 font-mono text-sm whitespace-nowrap text-white/80 border border-white/10 hover:border-accent/40 hover:text-white transition"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="marquee-track" style={{ animationDirection: 'reverse' }}>
            {marqueeItems.map((tech, i) => (
              <div
                key={`rev-${tech}-${i}`}
                className="mx-2 glass rounded-full px-5 py-2.5 font-mono text-sm whitespace-nowrap text-white/60 border border-white/10 hover:border-accent-cyan/40 hover:text-white transition"
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
              <Tilt3D
                key={cat.name}
                delay={idx * 0.05}
                variant="skill"
                className="glass rounded-2xl p-5 border border-white/10 group h-full"
              >
                <div className="scanline" />
                <div className="relative z-[2]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-accent-cyan lang-ring">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-semibold">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="skill-tag text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
