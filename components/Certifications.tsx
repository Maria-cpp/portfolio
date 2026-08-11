/**
 * Certifications.tsx — Certifications grid + Education subsection.
 *
 * Renders a responsive grid of certification cards with status badges
 * (completed/in-progress), hover preview tooltips, and an in-page modal
 * viewer for certificate images. Education degrees shown below.
 *
 * Content sourced from `lib/data.ts` (certifications, education).
 */
'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Clock, Eye, X } from 'lucide-react';
import Image from 'next/image';
import { certifications, education } from '@/lib/data';

export default function Certifications() {
  const [viewCert, setViewCert] = useState<string | null>(null);          // URL of certificate to show in modal
  const [hoverPreview, setHoverPreview] = useState<{ src: string; x: number; y: number } | null>(null);  // Floating preview tooltip

  const handleMouseMove = useCallback((e: React.MouseEvent, src: string) => {
    setHoverPreview({ src, x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverPreview(null);
  }, []);

  const professional = certifications.filter((c) => c.group === 'professional');
  const development = certifications.filter((c) => c.group === 'development');

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
              Certified &amp;{' '}
              <span className="gradient-text">Still Learning</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm">
            Continuous learning across agentic AI, generative systems, and platform engineering.
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <div className="mt-14">
          <h3 className="font-display text-lg font-semibold text-white/80 mb-5">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {professional.map((c, i) => {
              const inProgress = c.status.toLowerCase().includes('progress');
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="group/cert glass rounded-2xl p-5 card-hover relative overflow-hidden flex flex-col"
                  onMouseMove={c.pdfUrl ? (e) => handleMouseMove(e, c.pdfUrl!) : undefined}
                  onMouseLeave={c.pdfUrl ? handleMouseLeave : undefined}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover/cert:opacity-100 group-hover/cert:animate-[scanlineSlide_2s_linear_infinite] transition-opacity duration-500 z-[2]"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.6) 30%, rgba(43,77,255,0.8) 50%, rgba(0,229,255,0.6) 70%, transparent)' }}
                  />
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl glass-strong flex items-center justify-center lang-ring ${
                      inProgress ? 'text-accent-pink' : 'text-accent-lime'
                    }`}>
                      {inProgress ? <Clock size={18} /> : <Award size={18} />}
                    </div>
                    <span className="text-[10px] font-mono text-white/40">{c.year}</span>
                  </div>
                  <h3 className="font-display font-semibold leading-tight">
                    {c.name}
                  </h3>
                  <div className="mt-1 text-xs font-mono text-white/50">
                    {c.issuer}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${
                      inProgress ? 'text-accent-pink' : 'text-accent-lime'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        inProgress ? 'bg-accent-pink animate-pulse' : 'bg-accent-lime'
                      }`} />
                      {c.status}
                    </span>
                    {c.pdfUrl && (
                      <button
                        onClick={() => setViewCert(c.pdfUrl!)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-white transition cursor-pointer"
                      >
                        View <Eye size={11} />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Professional Development */}
        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold text-white/80 mb-5">Professional Development</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {development.map((c, i) => {
              const inProgress = c.status.toLowerCase().includes('progress');
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="group/cert glass rounded-2xl p-5 card-hover relative overflow-hidden flex flex-col"
                  onMouseMove={c.pdfUrl ? (e) => handleMouseMove(e, c.pdfUrl!) : undefined}
                  onMouseLeave={c.pdfUrl ? handleMouseLeave : undefined}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover/cert:opacity-100 group-hover/cert:animate-[scanlineSlide_2s_linear_infinite] transition-opacity duration-500 z-[2]"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.6) 30%, rgba(43,77,255,0.8) 50%, rgba(0,229,255,0.6) 70%, transparent)' }}
                  />
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl glass-strong flex items-center justify-center lang-ring ${
                      inProgress ? 'text-accent-pink' : 'text-accent-lime'
                    }`}>
                      {inProgress ? <Clock size={18} /> : <Award size={18} />}
                    </div>
                    <span className="text-[10px] font-mono text-white/40">{c.year}</span>
                  </div>
                  <h3 className="font-display font-semibold leading-tight">
                    {c.name}
                  </h3>
                  <div className="mt-1 text-xs font-mono text-white/50">
                    {c.issuer}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${
                      inProgress ? 'text-accent-pink' : 'text-accent-lime'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        inProgress ? 'bg-accent-pink animate-pulse' : 'bg-accent-lime'
                      }`} />
                      {c.status}
                    </span>
                    {c.pdfUrl && (
                      <button
                        onClick={() => setViewCert(c.pdfUrl!)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-white transition cursor-pointer"
                      >
                        View <Eye size={11} />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
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

      {/* Hover preview floating image */}
      <AnimatePresence>
        {hoverPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: hoverPreview.x + 20,
              top: hoverPreview.y - 120,
            }}
          >
            <div className="w-64 h-48 rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-black/60 bg-black">
              <Image
                src={hoverPreview.src}
                alt="Certificate preview"
                fill
                sizes="256px"
                className="object-contain !relative p-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate popup modal */}
      <AnimatePresence>
        {viewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setViewCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 bg-bg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setViewCert(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white/70 hover:text-white transition"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="relative w-full h-[85vh]">
                <Image
                  src={viewCert}
                  alt="Certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
