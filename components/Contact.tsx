/**
 * Contact.tsx — Contact information section with social links.
 *
 * Full-width glassmorphic card with a two-column layout:
 * Left: heading, description, and personal recruitment email and CV actions.
 * Right: stacked contact cards (GitHub, LinkedIn, Phone, Location)
 * with hover effects and external link arrows.
 *
 * Content sourced from `lib/data.ts` (personal).
 */
'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight, Download } from 'lucide-react';
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
          className="relative glass-strong rounded-[28px] p-5 sm:p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-accent-cyan/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <div className="eyebrow">Get in touch</div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
                Hiring for applied AI{' '}
                <span className="gradient-text">or enterprise delivery?</span>
              </h2>
              <p className="mt-5 text-white/65 max-w-md leading-relaxed">
                I&apos;m exploring AI engineering opportunities with product teams and enterprise AI organizations, including client-facing deployment roles.
              </p>

              <p className="mt-4 text-sm text-white/70">{personal.availability}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}?subject=AI%20Engineering%20Opportunity`}
                  className="inline-flex items-center gap-2 btn btn-primary w-fit"
                >
                  <Mail size={16} /> Email Maria
                  <ArrowUpRight size={14} />
                </a>
                <a href={personal.resumeUrl} download className="btn btn-ghost"><Download size={16} /> Download CV</a>
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
