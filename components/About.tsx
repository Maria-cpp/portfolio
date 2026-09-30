/**
 * About.tsx — "About me" section with career progression and currently-learning block.
 *
 * Presents the engineering journey from backend and secure systems through
 * blockchain, full-stack / GenAI, and production AI engineering.
 *
 * Content sourced from `lib/data.ts` (currentlyLearning).
 */

'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { currentlyLearning, experience } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute -top-16 left-0 h-64 w-64 rounded-full bg-accent-pink/[.07] blur-[110px] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="eyebrow">The engineering journey</div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            I approach AI as a{' '}
            <span className="text-accent-cyan">systems engineer.</span>
          </h2>

          <p className="mt-5 max-w-3xl text-sm sm:text-base text-white/65 leading-relaxed">
            My experience spans backend and secure systems, blockchain and
            distributed applications, full-stack product development, and
            production AI. Each stage strengthened a
            different layer of the stack — from APIs, databases, authentication,
            and Linux environments to distributed systems, computer vision,
            agentic AI, and production infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-strong relative mt-10 overflow-hidden rounded-3xl p-5 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent" />
          <div className="font-mono text-[10px] tracking-[.18em] text-accent-cyan/70">
            EXPERIENCE · CAREER TIMELINE
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {experience.map((job, i) => (
              <div
                key={`${job.company}-${job.role}`}
                className={`card-hover group relative rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/60 hover:bg-accent-cyan/[.06] hover:shadow-[0_12px_36px_rgba(34,211,238,0.08)] ${job.current ? 'border-accent-cyan/35 bg-accent-cyan/[.045]' : 'border-white/15 bg-white/[.025]'}`}
              >
                <div className="flex items-center gap-2 font-mono text-[10px] text-accent-cyan">
                  {job.current && <span className="h-1.5 w-1.5 rounded-full bg-accent-lime shadow-[0_0_8px_var(--accent-lime)]" />}
                  {job.period}
                </div>

                <div className="mt-3 text-sm font-semibold leading-snug text-white/90">
                  {job.role}
                </div>
                <div className="mt-1 text-xs text-white/45">{job.company}</div>
              </div>
            ))}
          </div>

          <p className="mt-5 border-t border-white/[.08] pt-4 text-xs leading-relaxed text-white/45">
            My early engineering foundation included backend development and
            secure business systems, alongside enterprise IT and operations
            experience including an IBM Pakistan internship supporting PTCL's
            GPON deployment. From there, my work progressed into blockchain,
            distributed systems, full-stack products, applied GenAI, and
            production AI engineering.
          </p>
        </motion.div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            [
              'Backend & secure systems',
              'REST APIs, relational databases, authentication, access control, data validation, and Linux-based application environments.',
            ],
            [
              'Distributed & product engineering',
              'Blockchain systems, backend integrations, full-stack applications, databases, queues, and service-oriented architecture.',
            ],
            [
              'Computer vision + agentic AI',
              'Ultralytics-based detection and tracking, RAG, MCP tools, LLM integration, and human review workflows.',
            ],
            [
              'Architecture + deployment',
              'Production system boundaries, containerized services, cloud infrastructure, observability, and operational AI deployments.',
            ],
          ].map(([title, text], i) => (
            <article
              key={title}
              className="glass card-hover group rounded-2xl border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:bg-white/[.045] hover:shadow-[0_14px_40px_rgba(34,211,238,0.07)]"
            >
              <div className="mb-3 font-mono text-[10px] tracking-widest text-accent-cyan/70 transition-colors group-hover:text-accent-cyan">0{i + 1}</div>
              <h3 className="text-sm font-semibold text-white/90 transition-colors group-hover:text-accent-cyan">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                {text}
              </p>
            </article>
          ))}
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
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={14} className="text-accent-pink" />

              <span className="text-xs font-mono uppercase tracking-wider text-white/55">
                {currentlyLearning.label}
              </span>
            </div>

            <div className="grid gap-4">
              {currentlyLearning.items.map((book) => (
                <div
                  key={book.title}
                  className="glass card-hover group rounded-2xl border-white/10 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-pink/40 hover:shadow-[0_14px_40px_rgba(244,114,182,0.08)] overflow-hidden"
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

                      <h3 className="font-display text-lg sm:text-xl font-semibold leading-tight transition-colors group-hover:text-accent-pink">
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
