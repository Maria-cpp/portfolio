'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Play, ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data';

const highlightColor = (sector?: string) => {
  if (sector === 'Government') return 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30';
  if (sector === 'ZumfluxAI') return 'bg-accent-pink/15 text-accent-pink border-accent-pink/30';
  return 'bg-accent/15 text-accent border-accent/30';
};

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black group/carousel">
      <Image
        src={images[idx]}
        alt={`${title} screenshot ${idx + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white/70 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white/70 hover:text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  i === idx ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [screenshotModal, setScreenshotModal] = useState<{ images: string[]; title: string } | null>(null);

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
            Government deployments, enterprise platforms, and open-source — from
            multi-camera CV pipelines to MCP-native agentic systems.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const proj = p as typeof p & {
              sector?: string;
              videoUrl?: string | null;
              videoUrl2?: string | null;
              images?: string[];
            };
            const hasVideo = !!proj.videoUrl;
            const hasImages = proj.images && proj.images.length > 0;

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative glass rounded-3xl p-6 card-hover overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {proj.highlight && (
                  <div className="flex justify-end mb-2">
                    <div className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border ${highlightColor(proj.sector)}`}>
                      <Sparkles size={10} /> {proj.highlight}
                    </div>
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold">
                  {proj.title}
                </h3>
                <p className="mt-1 text-sm text-accent-cyan font-mono">
                  {proj.tagline}
                </p>

                {/* Image carousel — only when no video */}
                {hasImages && !hasVideo && (
                  <div className="mt-4">
                    <ImageCarousel images={proj.images!} title={proj.title} />
                  </div>
                )}

                {/* Video embed(s) */}
                {hasVideo && (
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                      <video
                        src={proj.videoUrl!}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        title={`${proj.title} demo`}
                      />
                    </div>
                    {proj.videoUrl2 && (
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                        <video
                          src={proj.videoUrl2}
                          className="absolute inset-0 w-full h-full object-cover"
                          controls
                          preload="metadata"
                          playsInline
                          title={`${proj.title} demo 2`}
                        />
                      </div>
                    )}
                  </div>
                )}

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {proj.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition link-underline"
                    >
                      <Github size={14} /> Source
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition link-underline"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {/* View Screenshots button — only when project has both video AND images */}
                  {hasVideo && hasImages && (
                    <button
                      onClick={() => setScreenshotModal({ images: proj.images!, title: proj.title })}
                      className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition link-underline cursor-pointer"
                    >
                      <Images size={14} /> Screenshots
                    </button>
                  )}
                  {hasVideo && !proj.repo && !proj.demo && !hasImages && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/60">
                      <Play size={14} /> Watch demo above
                    </span>
                  )}
                  {!proj.repo && !proj.demo && !hasVideo && !hasImages && (
                    <span className="text-xs text-white/40 italic">
                      Private — available on request
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
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

      {/* Screenshots popup modal */}
      <AnimatePresence>
        {screenshotModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setScreenshotModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10 bg-bg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setScreenshotModal(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white/70 hover:text-white transition"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <h3 className="font-display text-lg font-semibold mb-4">{screenshotModal.title} — Screenshots</h3>
              <ImageCarousel images={screenshotModal.images} title={screenshotModal.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
