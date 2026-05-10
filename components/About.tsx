'use client';

import { motion } from 'framer-motion';
import { Eye, Cpu, Rocket, BookOpen, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { aboutPillars, personal, currentlyLearning } from '@/lib/data';

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
        >
          <div className="eyebrow">About me</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            Engineer first.{' '}
            <span className="gradient-text">Builder always.</span>
          </h2>
          <p className="mt-5 text-sm text-white/65 leading-relaxed">
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

        {/* Currently learning */}
        {currentlyLearning && currentlyLearning.items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-accent-pink" />
              <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                {currentlyLearning.label}
              </span>
            </div>

            <div className="grid md:grid-cols-1 gap-4">
              {currentlyLearning.items.map((book) => (
                <div
                  key={book.title}
                  className="glass rounded-2xl p-5 md:p-6 card-hover overflow-hidden"
                >
                  <div className="grid md:grid-cols-[260px_1fr] gap-5 items-start">
                    {/* Cover image */}
                    <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-bg/40">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 260px"
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-accent-pink mb-2">
                        Currently learning
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold leading-tight">
                        {book.title}
                      </h3>
                      <div className="mt-1 text-xs font-mono text-white/45">
                        {book.author}
                      </div>
                      <p className="mt-3 text-sm text-white/65 leading-relaxed">
                        {book.blurb}
                      </p>
                      {book.url && (
                        <a
                          href={book.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-white transition w-fit"
                        >
                          View textbook <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
