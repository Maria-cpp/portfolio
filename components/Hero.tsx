import { ArrowDown, ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { personal } from '@/lib/data';

const proof = [
  ['10+', 'years across technology & operations'],
  ['6+', 'years in software engineering'],
  ['4+', 'years in AI / ML']
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center pt-28 pb-16">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5 w-full">
        <div className="max-w-4xl">
          <p className="eyebrow">Maria Naseem <span className="text-white/30">/ Islamabad, Pakistan</span></p>
          <h1 className="mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[.98] tracking-tight">
            AI Engineer<span className="text-accent-cyan">.</span>
          </h1>
          <p className="mt-5 font-display text-xl sm:text-2xl text-white/75">Production AI <span className="text-white/30">·</span> Intelligent Systems <span className="text-white/30">·</span> Solutions Architecture</p>
          <p className="mt-7 max-w-3xl text-base sm:text-lg text-white/65 leading-relaxed">
            I build AI systems that move beyond prototypes into real environments — from real-time computer vision and multi-camera video analytics to agentic AI, RAG, MCP servers, and enterprise backend platforms.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
            <span><b className="text-white/90 font-medium">AI Solutions Architect</b> @ Arwen Tech</span>
            <span><b className="text-white/90 font-medium">Founder</b> @ ZumfluxAI</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="Primary technologies">
            {['Computer Vision', 'Agentic AI', 'LLMs · RAG · MCP', 'Python · FastAPI', 'Ultralytics · OpenVINO', 'PostgreSQL · Redis', 'Docker · Azure'].map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[.035] px-2.5 py-1.5 font-mono text-[11px] text-white/65">{item}</span>
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
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 border-y border-white/10">
          {proof.map(([value, label]) => <div key={label} className="flex items-baseline gap-3 py-4 sm:py-5 sm:px-5 first:sm:pl-0 border-b sm:border-b-0 sm:border-r last:border-0 border-white/10"><strong className="font-display text-3xl text-white">{value}</strong><span className="text-xs sm:text-sm text-white/50">{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
