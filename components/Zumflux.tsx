'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Camera, Database, Layers, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { zumflux, personal } from '@/lib/data';
import Tilt3D from './Tilt3D';

const icons = [Bot, Camera, Database, Layers];

export default function Zumflux() {
  return (
    <section id="zumflux" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-[28px] p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent-cyan/20 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                <span className="text-xs font-mono text-white/80">
                  Founder · Active client engagements
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0">
                  <Image
                    src="/images/zumfluxai-logo.png"
                    alt="ZumfluxAI logo"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold leading-none">
                    {zumflux.name}
                  </h2>
                  <div className="mt-1 text-xs font-mono text-white/50">
                    by Maria Naseem · 2025
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg text-white/85 font-display leading-snug">
                {zumflux.tagline}
              </p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                {zumflux.description}
              </p>

              <a
                href={`mailto:${personal.businessEmail}?subject=ZumfluxAI%20engagement`}
                className="mt-7 btn btn-primary"
              >
                {zumflux.cta}
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {zumflux.services.map((s, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Tilt3D
                    key={s.title}
                    delay={0.1 + i * 0.06}
                    className="glass rounded-2xl p-5 border border-white/10 h-full"
                  >
                    <div className="scanline" />
                    <div className="relative z-[2]">
                      <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-accent-cyan lang-ring mb-4">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display font-semibold">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs text-white/60 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </Tilt3D>
                );
              })}
            </div>
          </div>

          {/* Recent client work */}
          {zumflux.recentClients && zumflux.recentClients.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mt-10 pt-8 border-t border-white/5"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                Recent client work
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {zumflux.recentClients.map((client) => {
                  const inner = (
                    <>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-pink/20 to-accent/20 border border-accent-pink/20 flex items-center justify-center text-accent-pink font-display font-bold text-xs shrink-0">
                        {client.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-display font-semibold truncate">
                            {client.name}
                          </span>
                          {client.url && (
                            <ExternalLink size={12} className="text-accent-cyan shrink-0" />
                          )}
                        </div>
                        <div className="text-[11px] text-white/55">
                          {client.kind}
                        </div>
                      </div>
                    </>
                  );

                  return client.url ? (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noreferrer"
                      className="glass rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition group"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={client.name}
                      className="glass rounded-xl px-4 py-3 flex items-center gap-3 border border-transparent"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
