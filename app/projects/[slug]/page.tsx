import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Building2,
  UserRound,
  CalendarDays,
  Activity
} from 'lucide-react';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';
import Mermaid from '@/components/Mermaid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: 'Case study not found' };

  const url = `/projects/${cs.slug}`;
  return {
    title: `${cs.title} — Case Study`,
    description: cs.summary,
    keywords: cs.tags,
    alternates: { canonical: url },
    openGraph: {
      title: `${cs.title} — Case Study | Maria Naseem`,
      description: cs.summary,
      url,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cs.title} — Case Study`,
      description: cs.tagline
    }
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: cs.title,
    description: cs.summary,
    author: { '@type': 'Person', name: 'Maria Naseem' },
    about: cs.tags,
    articleSection: 'Case Study'
  };

  const meta = [
    { icon: UserRound, label: 'Role', value: cs.role },
    { icon: Building2, label: 'Organization', value: cs.org },
    { icon: CalendarDays, label: 'Period', value: cs.period },
    { icon: Activity, label: 'Status', value: cs.status }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="relative pt-28 pb-24">
        <div className="mx-auto max-w-4xl px-5">
          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          {/* Header */}
          <header className="mt-8">
            <div className="eyebrow">Case study</div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
              {cs.title}
            </h1>
            <p className="mt-4 font-mono text-sm text-accent-cyan">{cs.tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
              {cs.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {cs.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-white/65"
                >
                  {t}
                </span>
              ))}
            </div>

            {(cs.repo || cs.demo) && (
              <div className="mt-6 flex items-center gap-3">
                {cs.repo && (
                  <a
                    href={cs.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex items-center gap-1.5 text-sm text-white/80 transition hover:text-white"
                  >
                    <Github size={14} /> Source
                  </a>
                )}
                {cs.demo && (
                  <a
                    href={cs.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex items-center gap-1.5 text-sm text-white/80 transition hover:text-white"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            )}
          </header>

          {/* Meta grid */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {meta.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-white/40">
                  <m.icon size={11} /> {m.label}
                </div>
                <div className="mt-1.5 text-sm leading-relaxed text-white/80">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Business value callout */}
          <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/[0.07] p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
              Business value
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {cs.businessValue}
            </p>
          </div>

          {/* Diagrams */}
          {cs.diagrams.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Architecture
              </h2>
              <div className="mt-6 flex flex-col gap-8">
                {cs.diagrams.map((d) => (
                  <figure key={d.title}>
                    <figcaption className="mb-3">
                      <div className="font-display text-sm font-semibold text-white/85">
                        {d.title}
                      </div>
                      {d.caption && (
                        <p className="mt-1 text-xs leading-relaxed text-white/45">
                          {d.caption}
                        </p>
                      )}
                    </figcaption>
                    <Mermaid chart={d.chart} />
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Tech stack table */}
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Tech stack
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.06]">
              {cs.stack.map((row, i) => (
                <div
                  key={row.layer}
                  className={`grid grid-cols-1 gap-1 p-4 sm:grid-cols-[160px_1fr] sm:gap-4 ${
                    i % 2 === 0 ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <div className="font-mono text-xs uppercase tracking-wider text-white/40">
                    {row.layer}
                  </div>
                  <div className="text-sm text-white/75">{row.tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Narrative sections */}
          <div className="mt-16 flex flex-col gap-12">
            {cs.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  {s.heading}
                </h2>
                {s.body && (
                  <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                    {s.body}
                  </p>
                )}
                {s.bullets && (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-white/65">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-20 flex items-center justify-between border-t border-white/[0.06] pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-white"
            >
              <ArrowLeft size={14} /> All projects
            </Link>
            <Link href="/#contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
