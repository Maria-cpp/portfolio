'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Diagram = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  svg: React.ReactNode;
};

const diagrams: Diagram[] = [
  {
    id: 'fbr',
    title: 'Federal Track & Trace Video Analytics',
    subtitle: 'Chapter XIV-BA · Production-line monitoring',
    description:
      'Real-time object detection on multi-line RTSP feeds with structured logging, dashboard views per SKU/line/batch/shift, and API integration to the central control unit (CCU).',
    svg: (
      <svg viewBox="0 0 800 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fbr-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.5" />
          </linearGradient>
          <marker id="fbr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" opacity="0.7" />
          </marker>
        </defs>

        {/* Stage 1: RTSP cameras */}
        <g>
          <rect x="20" y="50" width="120" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <text x="80" y="80" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="600">RTSP Cameras</text>
          <text x="80" y="98" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Multi-line feeds</text>
          <rect x="20" y="130" width="120" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <text x="80" y="160" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="600">Live Stream</text>
          <text x="80" y="178" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Multi-SKU</text>
          <rect x="20" y="210" width="120" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <text x="80" y="240" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="600">RTSP Cameras</text>
          <text x="80" y="258" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Multi-batch</text>
        </g>

        {/* Arrow to YOLO */}
        <path d="M 145 160 L 215 160" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#fbr-arrow)" opacity="0.7" />

        {/* Stage 2: YOLOv8 */}
        <rect x="220" y="120" width="140" height="80" rx="14" fill="url(#fbr-grad)" stroke="rgba(124,92,255,0.5)" strokeWidth="1.5" />
        <text x="290" y="148" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">YOLOv8</text>
        <text x="290" y="166" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">Ultralytics + lap</text>
        <text x="290" y="182" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Object detection + tracking</text>

        {/* Arrow to Counter */}
        <path d="M 365 160 L 435 160" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#fbr-arrow)" opacity="0.7" />

        {/* Stage 3: Counter & Event */}
        <rect x="440" y="120" width="140" height="80" rx="14" fill="rgba(163,230,53,0.08)" stroke="rgba(163,230,53,0.4)" strokeWidth="1.5" />
        <text x="510" y="148" textAnchor="middle" fill="#a3e635" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">Counter Engine</text>
        <text x="510" y="166" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">Per-line / SKU / batch</text>
        <text x="510" y="182" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Event triggers + timestamps</text>

        {/* Arrow to API */}
        <path d="M 585 160 L 655 160" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#fbr-arrow)" opacity="0.7" />

        {/* Stage 4: FastAPI + CCU */}
        <rect x="660" y="50" width="120" height="60" rx="12" fill="rgba(244,114,182,0.08)" stroke="rgba(244,114,182,0.4)" />
        <text x="720" y="80" textAnchor="middle" fill="#f472b6" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">FBR-API</text>
        <text x="720" y="98" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Track &amp; Trace</text>

        <rect x="660" y="130" width="120" height="60" rx="12" fill="rgba(244,114,182,0.08)" stroke="rgba(244,114,182,0.4)" />
        <text x="720" y="160" textAnchor="middle" fill="#f472b6" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">CCU</text>
        <text x="720" y="178" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Federal regulator</text>

        <rect x="660" y="210" width="120" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="720" y="240" textAnchor="middle" fill="#e7e9ee" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">Dashboard</text>
        <text x="720" y="258" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">SKU · line · shift</text>

        {/* Stage labels */}
        <text x="80" y="305" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1">INGEST</text>
        <text x="290" y="305" textAnchor="middle" fill="#7c5cff" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">DETECT</text>
        <text x="510" y="305" textAnchor="middle" fill="#a3e635" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">COUNT</text>
        <text x="720" y="305" textAnchor="middle" fill="#f472b6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">DELIVER</text>

        {/* Bottom bar */}
        <rect x="20" y="320" width="760" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
        <text x="400" y="334" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">FastAPI · OpenCV · async PostgreSQL · structlog · Docker · 60-day retention · audit logs</text>
      </svg>
    )
  },
  {
    id: 'ams',
    title: 'Provincial Government Secretariat AMS',
    subtitle: '4-stage HITL facial recognition pipeline',
    description:
      'Multi-camera attendance system on live RTSP. Enrolled faces feed a similarity-based candidate retriever; an explicit human-in-the-loop verification gate prevents bad embeddings from polluting the production index.',
    svg: (
      <svg viewBox="0 0 800 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ams-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a3e635" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
          </linearGradient>
          <marker id="ams-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a3e635" opacity="0.7" />
          </marker>
          <marker id="ams-arrow-pink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f472b6" opacity="0.8" />
          </marker>
        </defs>

        {/* Stage 1: Enrollment */}
        <rect x="20" y="100" width="140" height="100" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="90" y="130" textAnchor="middle" fill="#e7e9ee" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Enrollment</text>
        <text x="90" y="150" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Seed face capture</text>
        <text x="90" y="166" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">DeepFace · SFace</text>
        <text x="90" y="182" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Initial embedding</text>

        <path d="M 165 150 L 220 150" stroke="#a3e635" strokeWidth="1.5" fill="none" markerEnd="url(#ams-arrow)" opacity="0.7" />

        {/* Stage 2: Similarity retrieval */}
        <rect x="225" y="100" width="140" height="100" rx="14" fill="url(#ams-grad)" stroke="rgba(124,92,255,0.5)" strokeWidth="1.5" />
        <text x="295" y="130" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Candidate Retrieval</text>
        <text x="295" y="150" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">FAISS similarity</text>
        <text x="295" y="166" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">Top-K from RTSP</text>
        <text x="295" y="182" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Multi-camera</text>

        <path d="M 370 150 L 425 150" stroke="#a3e635" strokeWidth="1.5" fill="none" markerEnd="url(#ams-arrow)" opacity="0.7" />

        {/* Stage 3: HITL gate (highlighted) */}
        <rect x="430" y="80" width="140" height="140" rx="14" fill="rgba(244,114,182,0.12)" stroke="#f472b6" strokeWidth="2" />
        <text x="500" y="105" textAnchor="middle" fill="#f472b6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.5" fontWeight="600">HITL GATE</text>
        <text x="500" y="130" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Human Verification</text>
        <text x="500" y="150" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">Operator approves</text>
        <text x="500" y="166" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">match before</text>
        <text x="500" y="182" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">embedding write</text>
        <text x="500" y="206" textAnchor="middle" fill="#f472b6" fontFamily="JetBrains Mono, monospace" fontSize="10">↓ verified</text>

        <path d="M 575 150 L 630 150" stroke="#a3e635" strokeWidth="1.5" fill="none" markerEnd="url(#ams-arrow)" opacity="0.7" />

        {/* Stage 4: Embedding + Inference */}
        <rect x="635" y="60" width="140" height="80" rx="12" fill="rgba(124,92,255,0.1)" stroke="rgba(124,92,255,0.4)" />
        <text x="705" y="88" textAnchor="middle" fill="#c4b5fd" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Embedding Store</text>
        <text x="705" y="106" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Production index</text>
        <text x="705" y="122" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">FAISS write</text>

        <rect x="635" y="160" width="140" height="80" rx="12" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.4)" />
        <text x="705" y="188" textAnchor="middle" fill="#22d3ee" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Real-time Inference</text>
        <text x="705" y="206" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Attendance log</text>
        <text x="705" y="222" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Threshold-based</text>

        {/* Stage labels */}
        <text x="90" y="245" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1">STAGE 1</text>
        <text x="295" y="245" textAnchor="middle" fill="#7c5cff" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">STAGE 2</text>
        <text x="500" y="245" textAnchor="middle" fill="#f472b6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="700">STAGE 3</text>
        <text x="705" y="260" textAnchor="middle" fill="#22d3ee" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">STAGE 4</text>

        {/* Confidence routing */}
        <rect x="20" y="280" width="760" height="36" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
        <circle cx="60" cy="298" r="5" fill="#ef4444" />
        <text x="75" y="302" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Red = unknown</text>
        <circle cx="240" cy="298" r="5" fill="#fbbf24" />
        <text x="255" y="302" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Orange = approximate</text>
        <circle cx="450" cy="298" r="5" fill="#a3e635" />
        <text x="465" y="302" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Green = verified</text>
        <text x="660" y="302" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">→ threshold routing</text>
      </svg>
    )
  },
  {
    id: 'notify',
    title: 'Multi-Channel Agentic Notification Service',
    subtitle: 'LLM-driven message generation with template fallback',
    description:
      'Event-driven microservice. Grok LLM produces context-aware messages; if generation fails or violates a guardrail, the service falls back to predefined templates. Redis + Celery handle async fan-out across email, SMS, Slack, and WhatsApp.',
    svg: (
      <svg viewBox="0 0 800 360" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="not-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
          </linearGradient>
          <marker id="not-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" opacity="0.7" />
          </marker>
        </defs>

        {/* Source: Event */}
        <rect x="20" y="150" width="120" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="80" y="180" textAnchor="middle" fill="#e7e9ee" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Event</text>
        <text x="80" y="198" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Webhook · Cron · API</text>

        <path d="M 145 180 L 195 180" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#not-arrow)" opacity="0.7" />

        {/* Queue: Redis */}
        <rect x="200" y="140" width="120" height="80" rx="12" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" />
        <text x="260" y="170" textAnchor="middle" fill="#fca5a5" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Redis Queue</text>
        <text x="260" y="190" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Celery broker</text>
        <text x="260" y="206" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">async + retry</text>

        <path d="M 325 180 L 375 180" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#not-arrow)" opacity="0.7" />

        {/* LLM with Fallback (decision diamond) */}
        <rect x="380" y="80" width="160" height="100" rx="14" fill="url(#not-grad)" stroke="rgba(124,92,255,0.5)" strokeWidth="1.5" />
        <text x="460" y="110" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700">Grok LLM</text>
        <text x="460" y="128" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">Context-aware</text>
        <text x="460" y="144" textAnchor="middle" fill="#e7e9ee" fontFamily="JetBrains Mono, monospace" fontSize="10">message generation</text>
        <text x="460" y="164" textAnchor="middle" fill="#a3e635" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">✓ guardrail OK</text>

        <rect x="380" y="200" width="160" height="60" rx="12" fill="rgba(244,114,182,0.08)" stroke="rgba(244,114,182,0.3)" strokeDasharray="4 3" />
        <text x="460" y="225" textAnchor="middle" fill="#f472b6" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">Template Fallback</text>
        <text x="460" y="245" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="10">Guaranteed delivery</text>

        {/* Decision arrow loop */}
        <path d="M 460 180 L 460 200" stroke="#f472b6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />
        <text x="475" y="195" fill="#f472b6" fontFamily="JetBrains Mono, monospace" fontSize="9">on fail</text>

        <path d="M 545 130 L 605 80" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#not-arrow)" opacity="0.7" />
        <path d="M 545 160 L 605 160" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#not-arrow)" opacity="0.7" />
        <path d="M 545 200 L 605 240" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#not-arrow)" opacity="0.7" />
        <path d="M 545 230 L 605 290" stroke="#22d3ee" strokeWidth="1.5" fill="none" markerEnd="url(#not-arrow)" opacity="0.7" />

        {/* Channels */}
        <rect x="610" y="50" width="170" height="50" rx="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" />
        <text x="695" y="72" textAnchor="middle" fill="#22d3ee" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">Email</text>
        <text x="695" y="88" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9">SMTP / SES</text>

        <rect x="610" y="135" width="170" height="50" rx="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" />
        <text x="695" y="157" textAnchor="middle" fill="#22d3ee" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">SMS</text>
        <text x="695" y="173" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9">Twilio / local gw</text>

        <rect x="610" y="220" width="170" height="50" rx="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" />
        <text x="695" y="242" textAnchor="middle" fill="#22d3ee" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">Slack</text>
        <text x="695" y="258" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9">Webhook</text>

        <rect x="610" y="270" width="170" height="50" rx="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" />
        <text x="695" y="292" textAnchor="middle" fill="#22d3ee" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700">WhatsApp</text>
        <text x="695" y="308" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9">Cloud API</text>

        {/* Stage labels */}
        <text x="80" y="240" textAnchor="middle" fill="#9aa0ad" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1">EVENT</text>
        <text x="260" y="245" textAnchor="middle" fill="#fca5a5" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">QUEUE</text>
        <text x="460" y="285" textAnchor="middle" fill="#7c5cff" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">ORCHESTRATE</text>
        <text x="695" y="335" textAnchor="middle" fill="#22d3ee" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fontWeight="600">DELIVER</text>
      </svg>
    )
  }
];

export default function Architecture() {
  const [active, setActive] = useState(0);
  const current = diagrams[active];

  return (
    <section id="architecture" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">System architecture</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
            How the{' '}
            <span className="gradient-text">pipelines fit together</span>
          </h2>
          <p className="mt-4 text-white/65">
            Three production pipelines, drawn from real engagements. Click each tab
            to see the data flow and the deliberate architectural choices.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {diagrams.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition border ${
                active === i
                  ? 'bg-accent/20 text-white border-accent/50 shadow-[0_0_24px_rgba(124,92,255,0.3)]'
                  : 'glass text-white/65 hover:text-white border-transparent'
              }`}
            >
              {d.title}
            </button>
          ))}
        </motion.div>

        {/* Diagram + description */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 glass-strong rounded-3xl p-5 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
            <div>
              <h3 className="font-display text-xl font-semibold">
                {current.title}
              </h3>
              <p className="text-xs font-mono text-accent-cyan mt-1">
                {current.subtitle}
              </p>
            </div>
          </div>

          {/* SVG */}
          <div className="relative w-full overflow-x-auto bg-bg/40 rounded-2xl p-3 border border-white/5">
            <div className="min-w-[700px]">
              {current.svg}
            </div>
          </div>

          <p className="mt-5 text-sm text-white/65 leading-relaxed">
            {current.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
