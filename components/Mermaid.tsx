'use client';

import { useEffect, useId, useState } from 'react';

/**
 * Renders a Mermaid diagram client-side.
 * mermaid is dynamically imported so it never enters the initial bundle —
 * the homepage stays as light as it was before case studies existed.
 */
export default function Mermaid({ chart }: { chart: string }) {
  const reactId = useId();
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          fontFamily: 'var(--font-mono), ui-monospace, monospace',
          themeVariables: {
            background: 'transparent',
            primaryColor: '#12141a',
            primaryTextColor: '#e7e9ee',
            primaryBorderColor: '#7c5cff',
            lineColor: '#9aa0ad',
            secondaryColor: '#171a21',
            tertiaryColor: '#0d0f14',
            mainBkg: '#12141a',
            nodeBorder: '#7c5cff',
            clusterBkg: 'rgba(124,92,255,0.05)',
            clusterBorder: 'rgba(124,92,255,0.25)',
            titleColor: '#e7e9ee',
            edgeLabelBackground: '#0d0f14',
            actorBkg: '#12141a',
            actorBorder: '#7c5cff',
            actorTextColor: '#e7e9ee',
            signalColor: '#9aa0ad',
            signalTextColor: '#e7e9ee',
            labelBoxBkgColor: '#12141a',
            labelBoxBorderColor: '#7c5cff',
            labelTextColor: '#e7e9ee',
            loopTextColor: '#e7e9ee',
            noteBkgColor: 'rgba(124,92,255,0.12)',
            noteBorderColor: 'rgba(124,92,255,0.35)',
            noteTextColor: '#e7e9ee'
          }
        });

        // mermaid requires a DOM-safe id (no colons — useId emits them)
        const id = `m${reactId.replace(/[^a-zA-Z0-9]/g, '')}`;
        const { svg: rendered } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(rendered);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Diagram failed to render');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  if (error) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <p className="text-xs font-mono text-white/40">
          Diagram unavailable — {error}
        </p>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02]">
        <div className="h-1.5 w-1.5 animate-ping rounded-full bg-accent" />
      </div>
    );
  }

  return (
    <div
      className="mermaid-wrap overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
