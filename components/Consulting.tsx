'use client';

import { motion } from 'framer-motion';
import { Workflow, GraduationCap, ArrowUpRight, Check, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { consulting, forwardDeployed } from '@/lib/data';
import Tilt3D from './Tilt3D';

const iconFor = (name: string) => {
  if (name === 'Workflow') return Workflow;
  if (name === 'GraduationCap') return GraduationCap;
  return Workflow;
};

export default function Consulting() {
  return (
    <section id="consulting" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="eyebrow">{consulting.eyebrow}</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            Consulting &amp;{' '}
            <span className="gradient-text">Training</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-white/65 leading-relaxed">
            {consulting.intro}
          </p>
        </motion.div>

        {/* Forward Deployed Engineer — positioning banner */}
        <Tilt3D className="relative mt-12 glass-strong rounded-3xl p-7 md:p-9 overflow-hidden">
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 border border-accent/30">
              <Zap size={13} className="text-accent-soft" />
              <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                {forwardDeployed.label}
              </span>
            </div>
            <p className="mt-5 text-base md:text-lg text-white/85 font-display leading-snug max-w-3xl">
              {forwardDeployed.definition}
            </p>
            <p className="mt-4 text-sm text-accent-soft/90 leading-relaxed max-w-3xl">
              {forwardDeployed.note}
            </p>
          </div>
        </Tilt3D>

        {/* Service cards */}
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {consulting.services.map((s, i) => {
            const Icon = iconFor(s.icon);
            const external = s.href.startsWith('http');
            return (
              <Tilt3D
                key={s.title}
                delay={0.08 * (i + 1)}
                className="group relative h-full glass rounded-3xl p-7 overflow-hidden border border-white/10 hover:border-accent/40"
              >
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-strong text-accent-soft border border-accent/30">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/15 text-accent-soft border border-accent/30">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={s.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="btn btn-primary w-fit"
                    >
                      {s.cta}
                      <ArrowUpRight size={16} />
                    </a>
                    {s.whatsapp && (
                      <a
                        href={s.whatsapp.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.whatsapp.label}
                        className="btn w-fit hover:brightness-125"
                        style={{
                          background: 'rgba(37, 211, 102, 0.12)',
                          color: '#25D366',
                          border: '1px solid rgba(37, 211, 102, 0.45)'
                        }}
                      >
                        <FaWhatsapp size={17} />
                        {s.whatsapp.label}
                      </a>
                    )}
                  </div>
                </div>
              </Tilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
