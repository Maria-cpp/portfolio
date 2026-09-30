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
import { currentlyLearning } from '@/lib/data';

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
          <div className="eyebrow">Why my background is different</div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            I approach AI as a{' '}
            <span className="text-accent-cyan">systems engineer.</span>
          </h2>

          <p className="mt-5 max-w-3xl text-sm sm:text-base text-white/65 leading-relaxed">
            My engineering journey spans backend and secure systems,
            blockchain and distributed applications, full-stack product
            development, and production AI. Each stage strengthened a
            different layer of the stack — from APIs, databases, authentication,
            and Linux environments to distributed systems, computer vision,
            agentic AI, and production infrastructure.
          </p>
        </motion.div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0d1015] p-5 sm:p-7">
          <div className="font-mono text-[10px] tracking-[.18em] text-white/40">
            CAREER EVOLUTION · ENGINEERING JOURNEY
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              [
                '2016–2019',
                'Backend engineering · secure systems',
              ],
              [
                '2020–2022',
                'Blockchain · distributed systems',
              ],
              [
                '2023–2025',
                'Full-stack · applied GenAI',
              ],
              [
                '2025–Present',
                'AI engineering · solutions architecture',
              ],
            ].map(([date, stage], i) => (
              <div
                key={date}
                className="relative border-l border-accent-cyan/40 pl-3 py-1"
              >
                <div className="font-mono text-[10px] text-accent-cyan">
                  {date}
                </div>

                <div className="mt-2 text-sm font-medium text-white/85">
                  {stage}
                </div>

                {i < 3 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute -right-2 top-1/2 text-white/25"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-5 border-t border-white/[.08] pt-4 text-xs leading-relaxed text-white/40">
            My early engineering foundation included backend development and
            secure business systems, alongside enterprise IT and operations
            experience including an IBM Pakistan internship supporting PTCL's
            GPON deployment. From there, my work progressed into blockchain,
            distributed systems, full-stack products, applied GenAI, and
            production AI engineering.
          </p>
        </div>

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
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-white/10 bg-white/[.025] p-4"
            >
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
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