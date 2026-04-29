'use client';

import { motion } from 'framer-motion';
import { Eye, Cpu, Rocket } from 'lucide-react';
import { aboutPillars, personal } from '@/lib/data';

const iconFor = (label: string) => {
  if (label === 'Vision') return Eye;
  if (label === 'Expertise') return Cpu;
  return Rocket;
};

const accentClass = (a: string) => {
  if (a === 'cyan') return 'text-accent-cyan border-accent-cyan/30';
  if (a === 'lime') return 'text-accent-lime border-accent-lime/30';
  return 'text-accent-pink border-accent-pink/30';
};

const accentGlow = (a: string) => {
  if (a === 'cyan') return 'from-accent-cyan/20';
  if (a === 'lime') return 'from-accent-lime/20';
  return 'from-accent-pink/20';
};

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">About me</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            Engineer first.{' '}
            <span className="gradient-text">Builder always.</span>
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            {personal.longBio}
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {aboutPillars.map((p, i) => {
            const Icon = iconFor(p.label);
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative glass rounded-3xl p-6 card-hover overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${accentGlow(p.accent)} to-transparent blur-2xl`} />
                <div className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl glass border ${accentClass(p.accent)}`}>
                  <Icon size={20} />
                </div>
                <div className="mt-5 text-xs font-mono uppercase tracking-wider text-white/40">
                  {p.label}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
