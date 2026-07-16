'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Play, ChevronLeft, ChevronRight, Images, X, ChevronDown, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [showFteChatbot, setShowFteChatbot] = useState(false);

  const toggleProject = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div>
            <div className="eyebrow">Featured work</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
              Selected{' '}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm">
            Government deployments, enterprise platforms, and open-source — from
            multi-camera CV pipelines to MCP-native agentic systems.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-3">
          {projects.map((p, i) => {
            const proj = p as typeof p & {
              slug?: string;
              sector?: string;
              videoUrl?: string | null;
              videoUrl2?: string | null;
              images?: string[];
              extraTag?: string;
            };
            const hasVideo = !!proj.videoUrl;
            const hasImages = proj.images && proj.images.length > 0;
            const isExpanded = expandedIndex === i;
            const isFTE = proj.title === 'FTE Sales Lead Engine';
            const isGTPL = proj.title === 'Green Pak Tourism';

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group relative glass rounded-3xl overflow-hidden"
              >
                {/* Collapsed header — always visible */}
                <button
                  onClick={() => toggleProject(i)}
                  className="w-full flex items-center justify-between gap-3 p-5 md:p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    {hasImages && (
                      <div className="relative hidden sm:block w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                        <Image
                          src={proj.images![0]}
                          alt={`${proj.title} preview`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 flex-wrap min-w-0">
                      <h3 className="font-display text-lg md:text-xl font-semibold truncate">
                        {proj.title}
                      </h3>
                      {proj.highlight && (
                        <div className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border shrink-0 ${highlightColor(proj.sector)}`}>
                          <Sparkles size={10} /> {proj.highlight}
                        </div>
                      )}
                      {proj.extraTag && (
                        <div className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border bg-accent-lime/15 text-accent-lime border-accent-lime/30 shrink-0">
                          {proj.extraTag}
                        </div>
                      )}
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
                      <div className="px-5 md:px-6 pb-6">
                        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <p className="text-sm text-accent-cyan font-mono">
                          {proj.tagline}
                        </p>

                        {/* GTPL: image + click here to view website */}
                        {isGTPL && hasImages && (
                          <div className="mt-4">
                            <ImageCarousel images={proj.images!} title={proj.title} />
                            <div className="mt-3 text-center">
                              <a
                                href="https://greenpaktourism.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-accent-cyan hover:text-white transition link-underline font-medium"
                              >
                                <ExternalLink size={14} /> Click here to view website
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Image carousel — only when no video and not GTPL (GTPL handled above) */}
                        {hasImages && !hasVideo && !isGTPL && (
                          <div className="mt-4">
                            <ImageCarousel images={proj.images!} title={proj.title} />
                          </div>
                        )}

                        {/* Video embed(s) — FTE special handling */}
                        {hasVideo && !isFTE && (
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

                        {/* FTE: show 1 video + button for chatbot style */}
                        {isFTE && hasVideo && (
                          <div className="mt-4 flex flex-col gap-3">
                            {!showFteChatbot ? (
                              <>
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
                                  <button
                                    onClick={() => setShowFteChatbot(true)}
                                    className="self-start inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/25 transition cursor-pointer"
                                  >
                                    <Play size={14} /> FTE Chatbot Style (18s)
                                  </button>
                                )}
                              </>
                            ) : (
                              <>
                                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                                  <video
                                    src={proj.videoUrl2!}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    preload="metadata"
                                    playsInline
                                    title={`${proj.title} chatbot style`}
                                  />
                                </div>
                                <button
                                  onClick={() => setShowFteChatbot(false)}
                                  className="self-start inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/25 transition cursor-pointer"
                                >
                                  <Play size={14} /> Back to Main Demo
                                </button>
                              </>
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
                          {proj.slug && (
                            <Link
                              href={`/projects/${proj.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/15 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/25"
                            >
                              <FileText size={14} /> Read case study
                            </Link>
                          )}
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
                          {proj.demo && !isGTPL && (
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
                          {hasVideo && !proj.repo && !proj.demo && !hasImages && !isFTE && (
                            <span className="inline-flex items-center gap-1.5 text-sm text-white/60">
                              <Play size={14} /> Watch demo above
                            </span>
                          )}
                          {!proj.repo && !proj.demo && !hasVideo && !hasImages && !proj.slug && (
                            <span className="text-xs text-white/40 italic">
                              Private — available on request
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
