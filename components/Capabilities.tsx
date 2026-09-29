const systems = [
  {
    index: '01', title: 'Real-time computer vision', type: 'VISION PIPELINE',
    flow: ['RTSP cameras', 'OpenCV ingestion', 'Ultralytics YOLO26n', 'Tracking + rules', 'OpenVINO · FastAPI'],
    points: ['Multi-camera video analytics', 'Object detection, tracking & counting', 'CPU inference and model optimization']
  },
  {
    index: '02', title: 'Agentic AI systems', type: 'TOOL-USE + CONTROL',
    flow: ['User request', 'LLM · Agent', 'MCP tools', 'Human review', 'Audit trail'],
    points: ['Agents, tool calling & MCP servers', 'RAG and document intelligence', 'Human approval and fallback paths']
  },
  {
    index: '03', title: 'AI platform engineering', type: 'APPLICATION PLATFORM',
    flow: ['Next.js', 'FastAPI', 'Redis · Celery', 'PostgreSQL', 'Docker · Cloud'],
    points: ['Async APIs and distributed services', 'Authentication, storage & integrations', 'Containerized deployment and observability']
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="eyebrow">What I build</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold">Complete systems <span className="text-white/45">around the model.</span></h2>
          <p className="mt-4 text-sm sm:text-base text-white/55">From data entering a system to decisions, services, storage, and the interface people use.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 gap-4">
          {systems.map((system) => <article key={system.index} className="rounded-2xl border border-white/10 bg-[#0d1015] p-5 sm:p-6">
            <div className="flex justify-between items-center font-mono text-[10px] tracking-[.16em] text-white/40"><span>{system.type}</span><span>{system.index}</span></div>
            <h3 className="mt-5 font-display text-xl font-semibold">{system.title}</h3>
            <ol className="mt-5 flex flex-wrap items-center gap-1.5" aria-label={`${system.title} architecture`}>
              {system.flow.map((node, i) => <li key={node} className="flex items-center gap-1.5">
                <span className="rounded border border-accent-cyan/20 bg-accent-cyan/[.045] px-2 py-1.5 text-[10px] sm:text-[11px] font-mono text-white/75">{node}</span>
                {i < system.flow.length - 1 && <span aria-hidden="true" className="text-accent-cyan/60">→</span>}
              </li>)}
            </ol>
            <ul className="mt-6 space-y-2 border-t border-white/[.08] pt-5">{system.points.map((point) => <li key={point} className="flex gap-2 text-sm text-white/60"><span className="text-accent-cyan">/</span>{point}</li>)}</ul>
          </article>)}
        </div>
        <div className="mt-6 grid lg:grid-cols-[.8fr_1.2fr] gap-6 rounded-2xl border border-white/10 bg-[#0d1015] p-5 sm:p-7">
          <div>
            <div className="font-mono text-[10px] tracking-[.16em] text-accent-cyan">ENGINEERING DEPTH</div>
            <h3 className="mt-3 font-display text-2xl font-semibold">Beyond the model</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">Production AI spans the full system: ingestion, inference, tracking, APIs, asynchronous processing, storage, deployment, monitoring, and the interfaces people use.</p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 content-start" aria-label="Engineering capabilities">
            {['Model optimization', 'CPU inference', 'Object tracking', 'Video streaming', 'Async processing', 'API architecture', 'Database design', 'Distributed systems', 'Observability', 'Cloud deployment', 'Human review workflows'].map((item) => <li key={item} className="rounded-lg border border-white/[.08] bg-white/[.025] px-3 py-2 text-xs text-white/65">{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
