import { ArrowRight, Github, Linkedin, Download, Mail } from 'lucide-react';
import { experience, heroWork, personal, stats } from '@/lib/data';

const currentRole = experience.find((job) => job.company === 'Arwen Tech');

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-10 lg:p-12">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-cyan via-accent-lime to-accent-pink" />
          <p className="font-display text-xl sm:text-2xl font-semibold">{personal.name}</p>
          <h1 className="mt-4 max-w-4xl font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            {personal.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">{personal.shortBio}</p>
          <p className="mt-5 text-sm sm:text-base text-white/80"><strong>Recent work includes building and deploying</strong> AI solutions across:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70 leading-relaxed">
            {heroWork.map((work) => (
              <li key={work.title}><strong className="text-white/90">{work.title}</strong> — {work.description}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-sm text-white/70">{personal.location} · {personal.availability}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={personal.resumeUrl} download className="btn btn-primary"><Download size={16} /> Download CV</a>
            <a href="#contact" className="btn btn-ghost"><Mail size={16} /> Contact Maria</a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/70">
            <a href="#projects" className="inline-flex items-center gap-1.5 hover:text-white">Selected work <ArrowRight size={15} /></a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white"><Linkedin size={15} /> LinkedIn</a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white"><Github size={15} /> GitHub</a>
          </div>
          <div className="mt-7 border-t border-white/10 pt-5 text-sm text-white/70">
            <p><strong className="block text-white">{currentRole?.company}</strong>AI-focused engineering · {currentRole?.period}</p>
            <div className="mt-5 grid grid-cols-2 gap-5 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-accent-cyan">{stat.value}</p>
                  <p className="mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
