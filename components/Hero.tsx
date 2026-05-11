'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Download } from 'lucide-react';
import { personal, stats } from '@/lib/data';

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTagIndex((i) => (i + 1) % personal.taglines.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100vh] flex items-center pt-32 pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 w-full">
        <div className="grid lg:grid-cols-[1.8fr_0.8fr] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime" />
              </span>
              <span className="text-xs text-white/80 font-mono">
                Available for AI engineering work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
            >
              <span className="block text-white/95">{personal.firstName}</span>
              <span className="block gradient-text">Naseem.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 h-7 flex items-center gap-2 font-mono text-sm text-white/70"
            >
              <Sparkles size={14} className="text-accent-cyan" />
              <span>{personal.title}</span>
              <span className="text-white/30">/</span>
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-accent-cyan"
              >
                {personal.taglines[tagIndex]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
            >
              {personal.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn btn-primary">
                View my work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail size={14} /> Get in touch
              </a>
              <a href={personal.resumeUrl} download className="btn btn-ghost">
                <Download size={14} /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 flex items-center gap-5 text-sm text-white/50"
            >
              <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
                <Github size={15} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
                <Linkedin size={15} /> LinkedIn
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} /> {personal.location}
              </span>
            </motion.div>
          </div>

          {/* Right: avatar / glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-strong rounded-3xl p-6 overflow-hidden">
              {/* gradient ring */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-accent-cyan/30 opacity-50 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-white/40">~/maria</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/30">v1.0</span>
                </div>

                <div className="font-mono text-xs space-y-1.5">
                  <div><span className="text-accent-pink">const</span> <span className="text-accent-cyan">maria</span> <span className="text-white/40">=</span> {`{`}</div>
                  <div className="pl-4"><span className="text-white/70">role:</span> <span className="text-accent-lime">&apos;AI / ML Engineer&apos;</span>,</div>
                  <div className="pl-4"><span className="text-white/70">focus:</span> [<span className="text-accent-lime">&apos;Agentic AI&apos;</span>, <span className="text-accent-lime">&apos;CV&apos;</span>],</div>
                  <div className="pl-4"><span className="text-white/70">stack:</span> <span className="text-accent-lime">&apos;FastAPI · Next · Docker&apos;</span>,</div>
                  <div className="pl-4"><span className="text-white/70">founded:</span> <span className="text-accent-lime">&apos;ZumfluxAI&apos;</span>,</div>
                  <div className="pl-4"><span className="text-white/70">based:</span> <span className="text-accent-lime">&apos;Islamabad, PK&apos;</span>,</div>
                  <div className="pl-4"><span className="text-white/70">status:</span> <span className="text-accent-cyan">&apos;shipping ✦&apos;</span></div>
                  <div>{`}`};</div>
                </div>

                <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent via-accent-cyan to-accent-pink p-[2px]">
                    <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center font-display font-bold text-sm">
                      {personal.initials}
                    </div>
                  </div>
                  <div className="text-xs">
                    <div className="text-white/90 font-medium">Founder · ZumfluxAI</div>
                    <div className="text-white/40 font-mono">Production AI engineering</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass rounded-full px-3 py-1.5 text-xs font-mono text-accent-cyan"
            >
              ⚡ Agentic
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-full px-3 py-1.5 text-xs font-mono text-accent-lime"
            >
              ✦ Vision
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 sm:p-5">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-white/50 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
