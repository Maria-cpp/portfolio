'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Camera, Database, Layers } from 'lucide-react';
import { zumflux, personal } from '@/lib/data';

const icons = [Bot, Camera, Database, Layers];

export default function Zumflux() {
  return (
    <section id="zumflux" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-[28px] p-8 md:p-12 overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent-cyan/20 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            {/* Left: Brand */}
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                <span className="text-xs font-mono text-white/80">
                  Founder · Active client engagements
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent via-accent-cyan to-accent-pink p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-bg-card flex items-center justify-center font-display font-bold text-lg">
                    Z
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold leading-none">
                    {zumflux.name}
                  </h2>
                  <div className="mt-1 text-xs font-mono text-white/50">
                    by Maria Naseem · 2025
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg text-white/85 font-display leading-snug">
                {zumflux.tagline}
              </p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                {zumflux.description}
              </p>

              <a
                href={`mailto:${personal.email}?subject=ZumfluxAI%20engagement`}
                className="mt-7 btn btn-primary"
              >
                {zumflux.cta}
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Right: services grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {zumflux.services.map((s, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="glass rounded-2xl p-5 card-hover"
                  >
                    <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-accent-cyan mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/60 leading-relaxed">
                      {s.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
