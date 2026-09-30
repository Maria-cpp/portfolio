import { ArrowDown, ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { experience, personal, techMarquee } from '@/lib/data';

const featuredTech = techMarquee.slice(0, 7);
const currentRole = experience.find((job) => job.current);

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center pt-28 pb-16">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5 w-full">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-cyan via-accent-lime to-accent-pink" />
          <div className="max-w-4xl">
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{personal.name}</span>
              <span className="text-sm text-white/40">/ {personal.location}</span>
            </p>
            <h1 className="mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[.98] tracking-tight">
              AI Engineer<span className="text-accent-cyan">.</span>
            </h1>
            <p className="mt-5 font-display text-xl sm:text-2xl text-white/75">Agentic AI <span className="text-white/30">·</span> Computer Vision <span className="text-white/30">·</span> Production Systems</p>
            <p className="mt-7 max-w-3xl text-base sm:text-lg text-white/65 leading-relaxed">{personal.shortBio}</p>
            {currentRole && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
                <span><b className="text-white/90 font-medium">{currentRole.role}</b> @ {currentRole.company}</span>
                <span><b className="text-white/90 font-medium">Founder</b> @ ZumfluxAI</span>
              </div>
            )}
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Featured technologies">
              {featuredTech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 font-mono text-[11px] text-white/65">{item}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">View AI projects <ArrowRight size={16} /></a>
              <a href="#architecture" className="btn btn-ghost">View architecture <ArrowDown size={15} /></a>
              <a href={personal.resumeUrl} download className="btn btn-ghost"><Download size={15} /> Download CV</a>
            </div>
            <div className="mt-6 flex gap-5 text-sm text-white/55">
              <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white"><Github size={15} /> GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 border-y border-white/10">
            <div className="flex items-baseline gap-3 py-4 sm:py-5 sm:pr-5 border-b sm:border-b-0 sm:border-r border-white/10">
              <strong className="font-display text-3xl text-white">9+</strong>
              <span className="text-xs sm:text-sm text-white/50">Years Engineering Experience</span>
            </div>
            <div className="flex items-baseline gap-3 py-4 sm:py-5 sm:pl-5">
              <strong className="font-display text-3xl text-white">4+</strong>
              <span className="text-xs sm:text-sm text-white/50">Years AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
