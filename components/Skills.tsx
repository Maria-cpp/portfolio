'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">Skill set</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            What I Bring{' '}
            <span className="gradient-text">To The Table</span>
          </h2>
          <p className="mt-4 text-white/65">
            The capabilities I deliver on — practice areas proven in production work.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative glass rounded-2xl p-6 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />

              <h3 className="font-display text-lg font-semibold">
                {group.title}
              </h3>
              <p className="mt-1.5 text-xs text-white/50 leading-relaxed">
                {group.blurb}
              </p>

              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/75"
                  >
                    <Check size={14} className="mt-0.5 text-accent-lime shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
