import { personal, education, certifications, zumflux } from '@/lib/data';

const selectedCredentials = certifications.filter((c) =>
  ['Agentic AI Level 2 — Professional', 'Generative AI Applications', 'Build RAG Applications'].includes(c.name)
);

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="eyebrow">About & credentials</div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Hands-on AI engineering and delivery</h2>
        <p className="mt-5 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">{personal.longBio}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-5">
            <h3 className="font-display font-semibold">Education</h3>
            {education.map((item) => <p key={item.degree} className="mt-3 text-sm text-white/70">{item.degree}<br />{item.school} · {item.year}</p>)}
            <h3 className="mt-6 font-display font-semibold">Selected completed credentials</h3>
            <ul className="mt-3 space-y-3 text-sm text-white/70">
              {selectedCredentials.map((c) => <li key={c.name}>
                {c.pdfUrl ? <a href={c.pdfUrl} target="_blank" rel="noreferrer" className="text-accent-cyan underline underline-offset-4">{c.name}</a> : c.name}
                <span className="block mt-1 text-xs text-white/60">{c.issuer} · {c.year}</span>
              </li>)}
            </ul>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="font-display font-semibold">Independent work · {zumflux.name}</h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">{zumflux.description}</p>
            <a href="#experience" className="mt-4 inline-block text-sm text-accent-cyan underline underline-offset-4">View employment and independent-work history</a>
          </div>
        </div>
      </div>
    </section>
  );
}
