'use client';

import { motion } from 'framer-motion';
import { Award, Clock, ExternalLink } from 'lucide-react';
import { certifications, education } from '@/lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="eyebrow">Certifications & education</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
              Always{' '}
              <span className="gradient-text">leveling up</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm">
            Continuous learning across agentic AI, generative systems, and platform engineering.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => {
            const inProgress = c.status.toLowerCase().includes('progress');
            const cert = c as typeof c & { pdfUrl?: string | null };
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="glass rounded-2xl p-5 card-hover relative overflow-hidden flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl glass-strong flex items-center justify-center ${
                    inProgress ? 'text-accent-pink' : 'text-accent-lime'
                  }`}>
                    {inProgress ? <Clock size={18} /> : <Award size={18} />}
                  </div>
                  <span className="text-[10px] font-mono text-white/40">{cert.year}</span>
                </div>

                <h3 className="font-display font-semibold leading-tight">
                  {cert.name}
                </h3>
                <div className="mt-1 text-xs font-mono text-white/50">
                  {cert.issuer}
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${
                    inProgress ? 'text-accent-pink' : 'text-accent-lime'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      inProgress ? 'bg-accent-pink animate-pulse' : 'bg-accent-lime'
                    }`} />
                    {cert.status}
                  </span>
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-white transition"
                    >
                      View <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="eyebrow">Education</div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {education.map((e) => (
              <div key={e.degree} className="glass rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display font-semibold">{e.degree}</div>
                  <div className="mt-1 text-sm text-white/60">{e.school}</div>
                </div>
                <span className="text-xs font-mono text-white/40">{e.year}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
