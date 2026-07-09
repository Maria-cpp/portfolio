'use client';

/**
 * NeonBar — a thin animated neon divider with a light that sweeps across it.
 * Drop it at the top (or anywhere) inside a section for a consistent accent.
 */
export default function NeonBar({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-6xl px-5 ${className}`}>
      <div className="neon-bar" aria-hidden="true" />
    </div>
  );
}
