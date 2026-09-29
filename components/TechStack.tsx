import { Brain, Server, Layout, Boxes, Wrench, Camera, Activity, Zap, ShieldCheck, type LucideIcon } from 'lucide-react';
import { techCategories } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = { Brain, Server, Layout, Boxes, Wrench, Camera, Activity, Zap, ShieldCheck };

export default function TechStack() {
  return <section id="stack" className="relative py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-5">
      <div className="max-w-2xl">
        <div className="eyebrow">AI engineering stack</div>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold">Tools behind <span className="text-accent-cyan">the systems</span></h2>
        <p className="mt-4 text-sm text-white/55">Grouped by the work they support, from model and agent workflows to deployed services.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techCategories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Boxes;
          return <article key={cat.name} className="rounded-2xl border border-white/10 bg-[#0d1015] p-5 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-accent-cyan"><Icon size={17} /></div>
              <h3 className="font-display font-semibold">{cat.name}</h3>
            </div>
            <ul className="flex flex-wrap gap-1.5">{cat.items.map((item) => <li key={item} className="rounded border border-white/[.08] bg-white/[.025] px-2 py-1 text-[11px] font-mono text-white/60">{item}</li>)}</ul>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
