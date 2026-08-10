/**
 * Experience.tsx — Career timeline section with expandable job entries.
 *
 * Displays a vertical timeline (left-aligned dot + gradient line) with
 * accordion-style job cards. Each card shows role, company, period, and
 * expands to reveal location, bullet points, and tech stack tags.
 * First entry is expanded by default.
 *
 * Content sourced from `lib/data.ts` (experience).
 */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, ChevronDown } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  // Track which job card is expanded; first entry open by default
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Toggle accordion: clicking the same entry collapses it
  const toggleExperience = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">Career timeline</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            A Track Record Of{' '}
            <span className="gradient-text">Government & Enterprise Delivery</span>
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />

          <div className="space-y-6">
            {experience.map((job, i) => {
              const isMinimal = (job as { minimal?: boolean }).minimal === true;
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={`${job.company}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-2 md:left-3 top-3 w-5 md:w-6 h-5 md:h-6 rounded-full glass-strong flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        job.current ? 'bg-accent-lime animate-pulse' : 'bg-white/40'
                      }`}
                    />
                  </div>

                  <div className={`glass rounded-2xl overflow-hidden ${isMinimal ? '' : ''}`}>
                    {/* Header — always visible, clickable */}
                    <button
                      onClick={() => toggleExperience(i)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`font-display font-semibold ${isMinimal ? 'text-base' : 'text-lg'}`}>
                            {job.role}
                          </h3>
                          {job.current && (
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-lime/15 text-accent-lime border border-accent-lime/30">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="mt-1.5 flex items-center gap-3 text-sm text-white/60 flex-wrap">
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={13} /> {job.company}
                          </span>
                          <span className="text-xs font-mono text-white/50">
                            {job.period}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-white/50 shrink-0 ml-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 md:px-5 pb-5">
                            {!isMinimal && (
                              <span className="flex items-center gap-1.5 text-sm text-white/40 mb-3">
                                <MapPin size={13} /> {job.location}
                              </span>
                            )}

                            {!isMinimal && job.bullets && job.bullets.length > 0 && (
                              <ul className="space-y-2">
                                {job.bullets.map((b, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-white/70 leading-relaxed pl-4 relative"
                                  >
                                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent-cyan" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {isMinimal && job.bullets && job.bullets.length > 0 && (
                              <ul className="space-y-2">
                                {job.bullets.map((b, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-white/70 leading-relaxed pl-4 relative"
                                  >
                                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent-cyan" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {job.stack && job.stack.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-1.5">
                                {job.stack.map((s) => (
                                  <span
                                    key={s}
                                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/60"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
