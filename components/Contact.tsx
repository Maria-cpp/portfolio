/**
 * Contact.tsx — Contact information section with social links.
 *
 * Full-width glassmorphic card with a two-column layout:
 * Left: heading, description, and primary business email CTA.
 * Right: stacked contact cards (GitHub, LinkedIn, Phone, Location)
 * with hover effects and external link arrows.
 *
 * Content sourced from `lib/data.ts` (personal).
 */
'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight, Briefcase } from 'lucide-react';
import { personal } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-[28px] p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-accent-cyan/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <div className="eyebrow">Get in touch</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
                Have A Project?{' '}
                <span className="gradient-text">Let&apos;s Build.</span>
              </h2>
              <p className="mt-5 text-white/65 max-w-md leading-relaxed">
                Whether you need an AI engineer for your team, want to engage
                ZumfluxAI for a build, or just want to chat about agentic
                systems and government AI — drop me a line.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={`mailto:${personal.businessEmail}?subject=ZumfluxAI%20engagement`}
                  className="inline-flex items-center gap-2 btn btn-primary w-fit"
                >
                  <Briefcase size={16} /> {personal.businessEmail}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'Maria-cpp',
                  href: personal.github,
                  accent: 'cyan' as const
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'maria-naseem',
                  href: personal.linkedin,
                  accent: 'cyan' as const
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: personal.phone,
                  href: `tel:${personal.phone.replace(/\s/g, '')}`,
                  accent: 'cyan' as const
                },
                {
                  icon: MapPin,
                  label: 'Based in',
                  value: personal.location,
                  href: null,
                  accent: 'cyan' as const
                }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className={`group flex items-center justify-between gap-3 glass rounded-2xl px-5 py-4 ${
                    item.href ? 'card-hover cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-accent-cyan">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={16}
                      className="text-white/30 group-hover:text-white group-hover:rotate-45 transition"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
