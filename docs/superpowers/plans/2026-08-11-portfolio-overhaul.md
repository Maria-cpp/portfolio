# Portfolio Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition portfolio from "Forward Deployed Engineer" to "AI Engineer & AI Solutions Architect", trim content, fix inconsistencies, and add a Video Analytics case study.

**Architecture:** Data-driven portfolio where all content lives in `lib/data.ts` (and `lib/caseStudies.ts` for case studies). Components read from these files. Most changes are data-only; 5 components need minor template edits; no new files needed (case study system already exists).

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion

---

### Task 1: Update personal positioning and bios in lib/data.ts

**Files:**
- Modify: `lib/data.ts:13-41` (personal object)

- [ ] **Step 1: Update personal.title**

Change line 17:
```typescript
title: 'AI Engineer & AI Solutions Architect',
```

- [ ] **Step 2: Replace personal.taglines**

Replace lines 18-28:
```typescript
taglines: [
  'AI Engineer & AI Solutions Architect',
  'Agentic AI · Computer Vision · RAG',
  'Production AI Systems',
  'Founder @ ZumfluxAI'
],
```

- [ ] **Step 3: Replace personal.shortBio**

Replace lines 37-38:
```typescript
shortBio:
  'AI Engineer & AI Solutions Architect. I design, build, and deploy production AI — real-time computer vision on RTSP, agentic systems with MCP and HITL gates, RAG platforms, and bank-grade data protection. Currently running two Forward Deployed engagements across automotive and travel.',
```

- [ ] **Step 4: Replace personal.longBio**

Replace lines 39-40:
```typescript
longBio:
  `AI Engineer & AI Solutions Architect with roughly 10 years across technology, engineering, and corporate operations — about 6 in software and ~4 in AI/ML, the last ~2 focused on production systems. I architect real-time video-analytics platforms on Azure, four-stage HITL facial-recognition systems, MCP-native agentic observability stacks, and bank-grade PII tokenization vaults. I work as a Forward Deployed Engineer — embedding with clients, mapping their operations, and shipping AI they can actually run. Currently running two active FDE engagements and founded ZumfluxAI to deliver this work.`
```

- [ ] **Step 5: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 6: Commit**

```bash
git add lib/data.ts
git commit -m "reposition: update title, taglines, and bios to AI Engineer & Solutions Architect"
```

---

### Task 2: Update stats strip in lib/data.ts

**Files:**
- Modify: `lib/data.ts:864-869` (stats array)

- [ ] **Step 1: Update stats array**

Replace the stats array:
```typescript
export const stats = [
  { label: 'Active FDE client engagements', value: '2' },
  { label: 'Yrs across tech, engineering & ops · 6+ software · 4+ AI/ML', value: '10+' },
  { label: 'Systems built — prototype to production', value: '12+' },
  { label: 'AI / agentic certifications', value: '6' }
];
```

- [ ] **Step 2: Commit**

```bash
git add lib/data.ts
git commit -m "fix: update stats — clarify experience wording, correct cert count to 6"
```

---

### Task 3: Update Hero terminal card in Hero.tsx

**Files:**
- Modify: `components/Hero.tsx:152-153`

- [ ] **Step 1: Update terminal card role and focus**

Replace line 152:
```tsx
<div className="pl-4"><span className="text-white/70">role:</span> <span className="text-accent-lime">&apos;AI Engineer & Solutions Architect&apos;</span>,</div>
```

Replace line 153:
```tsx
<div className="pl-4"><span className="text-white/70">focus:</span> [<span className="text-accent-lime">&apos;Agentic AI&apos;</span>, <span className="text-accent-lime">&apos;Computer Vision&apos;</span>, <span className="text-accent-lime">&apos;RAG&apos;</span>],</div>
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "update Hero terminal card to new positioning"
```

---

### Task 4: Trim techCategories and techMarquee in lib/data.ts

**Files:**
- Modify: `lib/data.ts:77-134` (techCategories and techMarquee)

- [ ] **Step 1: Replace techCategories with 4 categories**

Replace the entire `techCategories` array (lines 77-123):
```typescript
export const techCategories = [
  {
    name: 'AI / Agentic',
    icon: 'Brain',
    items: [
      'OpenAI', 'Anthropic Claude', 'Gemini',
      'MCP Servers (built & deployed)', 'Multi-Agent Orchestration',
      'HITL Controls', 'RAG', 'FAISS', 'LangGraph',
      'Pydantic Structured Outputs'
    ]
  },
  {
    name: 'Computer Vision',
    icon: 'Camera',
    items: ['YOLO26n', 'OpenCV', 'OpenVINO', 'DeepFace · SFace', 'RTSP Multi-camera', 'FAISS']
  },
  {
    name: 'Engineering',
    icon: 'Server',
    items: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets']
  },
  {
    name: 'Infrastructure',
    icon: 'Boxes',
    items: ['Docker', 'GitHub Actions', 'Azure', 'Prometheus', 'Grafana', 'Nginx', 'Linux']
  }
] as const;
```

- [ ] **Step 2: Replace techMarquee with ~18 items**

Replace the `techMarquee` array (lines 125-134):
```typescript
export const techMarquee = [
  'Python', 'TypeScript', 'FastAPI', 'Next.js',
  'OpenAI', 'Anthropic', 'MCP',
  'YOLO26n', 'OpenCV', 'OpenVINO',
  'PostgreSQL', 'Redis',
  'Docker', 'Azure',
  'LangGraph', 'FAISS',
  'Prometheus', 'Grafana'
];
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add lib/data.ts
git commit -m "trim tech stack: reduce to 4 categories (~20 items) and 18 marquee items"
```

---

### Task 5: Trim skillGroups in lib/data.ts

**Files:**
- Modify: `lib/data.ts:141-270` (skillGroups array)

- [ ] **Step 1: Replace skillGroups with 6 cards**

Replace the entire `skillGroups` array with these 6 groups. Update YOLO11 → YOLO26n and add OpenVINO in Computer Vision:

```typescript
export const skillGroups = [
  {
    title: 'Agentic AI & MCP',
    blurb: 'Multi-agent orchestration with explicit HITL gates and MCP-native tool integration.',
    items: [
      'OpenAI / Claude Agents SDK',
      'MCP Servers (built & deployed)',
      'Multi-Agent Orchestration',
      'Human-in-the-Loop gates',
      'Pydantic Structured Outputs',
      'LangGraph',
      'n8n workflow automation',
      'Conversational agents (in progress)',
      'Voice / calling agents (in progress)'
    ]
  },
  {
    title: 'Computer Vision',
    blurb: 'Production CV pipelines on live RTSP — from facial-recognition attendance to factory-line analytics.',
    items: [
      'YOLO26n / Ultralytics · ONNX · OpenVINO',
      'Facial Recognition (DeepFace, SFace)',
      'RTSP multi-camera ingestion',
      '4-stage enrollment → HITL → embedding → inference',
      'Production-line counting & anomaly detection'
    ]
  },
  {
    title: 'LLM Engineering',
    blurb: 'RAG, structured outputs, document intelligence, and provider-agnostic LLM gateways.',
    items: [
      'OpenAI · Anthropic · Grok · Gemini',
      'Retrieval-Augmented Generation',
      'Embeddings & Vector Search',
      'FAISS · Pinecone · pgvector',
      'Document Intelligence · OCR · Contract AI',
      'Prompt Engineering & guardrails',
      'NLP — multilingual & low-resource (Urdu, Roman Urdu, Pashto…)'
    ]
  },
  {
    title: 'Backend & APIs',
    blurb: 'Production-grade Python services with async + queues + auth.',
    items: [
      'FastAPI · Python',
      'Redis + Celery (async + retry)',
      'PostgreSQL · MySQL · Alembic',
      'WebSockets · REST · JWT',
      'Microservices · structlog',
      'RBAC/CBAC'
    ]
  },
  {
    title: 'Security & Privacy Engineering',
    blurb: 'Bank-grade data protection — tokenization, envelope encryption, and tamper-evident audit trails.',
    items: [
      'PII detection (regex + Luhn + spaCy NER)',
      'Deterministic tokenization (HMAC-SHA256)',
      'Envelope encryption · versioned keys · rotation',
      'Hash-chained, append-only audit logs',
      'Dual-gate authorization · RBAC',
      'KMS / HSM key providers · SIEM forwarding'
    ]
  },
  {
    title: 'Consulting & Delivery',
    blurb: 'The forward-deployed half — embedding with stakeholders, mapping workflows, and owning delivery end to end.',
    items: [
      'Requirement gathering & workflow mapping',
      'Stakeholder & C-suite communication',
      'Solution architecture',
      'Client acquisition & service delivery',
      'Corporate governance · BoD / JMB coordination',
      'Contract review · regulatory compliance'
    ]
  }
];
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "trim skills: reduce from 11 to 6 cards, update YOLO11 to YOLO26n"
```

---

### Task 6: Reorder projects and improve descriptions in lib/data.ts

**Files:**
- Modify: `lib/data.ts:377-664` (projects array)

- [ ] **Step 1: Reorder the projects array**

Move projects so the featured top 5 appear first in this order:
1. Video Analytics
2. Agentic AI Contract Intelligence Platform
3. Facial Recognition Attendance System
4. Security Vault Service
5. Agentic Observability Platform

Keep remaining projects in their current relative order after these 5.

- [ ] **Step 2: Update Video Analytics project**

Replace the Video Analytics project entry:
```typescript
{
  title: 'Video Analytics',
  slug: 'video-analytics',
  tagline: 'YOLO26n + OpenVINO production-line counting for regulatory compliance',
  description:
    'Architected for a regulated-industry client under a national regulatory compliance framework. YOLO26n object detection with ONNX conversion to OpenVINO for lightweight CPU inference, lap multi-object tracking, multi-line and multi-SKU production counting on live RTSP feeds, real-time event triggering with timestamped records, and dashboard views per SKU/line/batch/shift. Containerized and deployed on Microsoft Azure (Container Apps). Status: demonstrated on-site — the client visited the production facility; minor updates before rollout.',
  tags: ['YOLO26n', 'OpenVINO', 'ONNX', 'OpenCV', 'RTSP', 'FastAPI', 'PostgreSQL', 'Docker', 'Microsoft Azure'],
  repo: null,
  demo: null,
  images: [
    '/images/video_analytics/multi_obj_detection.png',
    '/images/video_analytics/single object.png',
    '/images/video_analytics/moving object.png',
    '/images/video_analytics/logs.png'
  ],
  featured: true,
  highlight: 'Regulated Industry · Compliance',
  sector: 'Enterprise',
  extraTag: 'Demoed on-site',
  category: 'career'
},
```

- [ ] **Step 3: Update experience section YOLO11 references**

In the experience array, update the first Arwen Tech bullet to replace "YOLO11" with "YOLO26n" and mention OpenVINO:

Replace:
```
Built real-time RTSP video pipelines with YOLO11 custom-trained
```
With:
```
Built real-time RTSP video pipelines with YOLO26n (ONNX/OpenVINO CPU inference)
```

Also update the Arwen Tech `stack` array to replace `'YOLO11'` with `'YOLO26n'` and add `'OpenVINO'`.

- [ ] **Step 4: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add lib/data.ts
git commit -m "reorder projects, update Video Analytics to YOLO26n/OpenVINO, improve descriptions"
```

---

### Task 7: Add Video Analytics case study to lib/caseStudies.ts

**Files:**
- Modify: `lib/caseStudies.ts` (add new entry to caseStudies array)

- [ ] **Step 1: Add Video Analytics case study entry**

Add a new entry at the beginning of the `caseStudies` array (before the existing `agentic-contract-intelligence` entry):

```typescript
{
  slug: 'video-analytics',
  title: 'Real-Time Video Analytics Platform',
  tagline:
    'YOLO26n + OpenVINO production-line counting and compliance reporting for a regulated-industry client',
  role: 'AI Solutions Architect & Lead Engineer',
  org: 'Arwen Tech (Pvt.) Ltd.',
  period: '2025 — Present',
  status:
    'Demonstrated on-site to the client at their production facility · Minor updates before full rollout · Deployed on Microsoft Azure (Container Apps)',
  summary:
    'A multi-camera real-time video analytics platform that performs production-line counting and anomaly detection on live RTSP feeds using YOLO26n with ONNX/OpenVINO CPU inference. Built for a regulated-industry client under a national compliance framework. Containerized and deployed on Microsoft Azure.',
  tags: [
    'YOLO26n',
    'OpenVINO',
    'ONNX',
    'OpenCV',
    'RTSP',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'Microsoft Azure'
  ],
  stack: [
    { layer: 'Detection', tech: 'YOLO26n (Ultralytics) — ONNX export, OpenVINO inference for lightweight CPU deployment' },
    { layer: 'Tracking', tech: 'lap (Linear Assignment Problem) multi-object tracking' },
    { layer: 'Video', tech: 'OpenCV RTSP multi-camera ingestion, real-time frame processing' },
    { layer: 'Backend', tech: 'Python, FastAPI — real-time data transmission, event triggering, timestamped records' },
    { layer: 'Database', tech: 'PostgreSQL — production counts per SKU/line/batch/shift' },
    { layer: 'Frontend', tech: 'Dashboard views — per SKU, per line, per batch, per shift' },
    { layer: 'Deploy', tech: 'Docker, Docker Compose, Microsoft Azure Container Apps' }
  ],
  diagrams: [
    {
      title: 'System Architecture',
      caption:
        'Live RTSP feeds flow through detection and tracking into real-time counting, with event triggers and compliance reporting.',
      chart: `flowchart TB
    CAM["RTSP Cameras<br/>multi-camera production floor"] --> ING["OpenCV<br/>RTSP ingestion"]
    ING --> DET["YOLO26n<br/>ONNX → OpenVINO<br/>CPU inference"]
    DET --> TRK["lap Tracker<br/>multi-object tracking"]
    TRK --> CNT["Counting Engine<br/>multi-line · multi-SKU"]
    CNT --> EVT["Event Triggers<br/>timestamped records<br/>anomaly & stoppage detection"]
    EVT --> API["FastAPI<br/>real-time data transmission"]
    API --> DB[("PostgreSQL<br/>counts · events · audit")]
    API --> DASH["Dashboard<br/>SKU · line · batch · shift views"]
    subgraph AZURE["Microsoft Azure"]
      ACA["Azure Container Apps"]
    end
    API --> ACA`
    },
    {
      title: 'Detection & Tracking Pipeline',
      caption:
        'YOLO26n is exported to ONNX and converted to OpenVINO IR for efficient CPU inference — no GPU required on the deployment target.',
      chart: `flowchart LR
    F["RTSP Frame"] --> PRE["Preprocessing<br/>resize · normalize"]
    PRE --> Y["YOLO26n<br/>OpenVINO IR"]
    Y --> BB["Bounding Boxes<br/>+ confidence scores"]
    BB --> T["lap Tracker<br/>track assignment"]
    T --> ID["Tracked Objects<br/>with persistent IDs"]
    ID --> CL["Counting Lines<br/>multi-line · multi-SKU"]
    CL --> REC["Timestamped Record<br/>SKU · line · batch · shift"]`
    }
  ],
  sections: [
    {
      heading: 'Business Problem',
      body:
        'A regulated-industry client needed to accurately count production output across multiple lines and SKUs in real-time, under a national regulatory compliance framework. Manual counting was error-prone and could not produce the timestamped, auditable records regulators require. The solution needed to run on existing infrastructure without expensive GPU hardware.'
    },
    {
      heading: 'Solution',
      body:
        'A multi-camera real-time video analytics platform. YOLO26n handles object detection, exported via ONNX and converted to OpenVINO for lightweight CPU inference. The lap tracker maintains persistent object IDs across frames. A counting engine tracks multi-line, multi-SKU production with real-time event triggering for anomalies and stoppages. FastAPI transmits data in real-time to PostgreSQL and a dashboard with views per SKU, line, batch, and shift.'
    },
    {
      heading: 'Key Engineering Decisions',
      bullets: [
        'YOLO26n over larger models — the newest ultralight architecture provides sufficient accuracy for production-line objects while enabling CPU-only deployment via OpenVINO',
        'ONNX → OpenVINO conversion — eliminates GPU dependency, reducing deployment cost and complexity on client infrastructure',
        'lap tracker for multi-object tracking — lightweight linear assignment approach handles the structured, predictable motion patterns of a production line efficiently',
        'Multi-line counting architecture — a single deployment handles multiple production lines and SKU types simultaneously'
      ]
    },
    {
      heading: 'Major Features',
      bullets: [
        'Real-time object detection on live RTSP feeds from multiple cameras',
        'Multi-object tracking with persistent IDs across frames',
        'Multi-line, multi-SKU production counting with per-shift aggregation',
        'Anomaly and stoppage detection with real-time event triggering',
        'Dashboard views: per SKU, per line, per batch, per shift',
        'Timestamped, auditable records for regulatory compliance'
      ]
    },
    {
      heading: 'Challenges',
      bullets: [
        'Achieving reliable counting accuracy on a busy production line with overlapping objects and variable lighting',
        'Deploying real-time inference on CPU-only infrastructure without sacrificing frame rate — solved with ONNX/OpenVINO optimization',
        'Handling multiple RTSP camera feeds simultaneously with consistent tracking across views'
      ]
    },
    {
      heading: 'Deployment',
      body:
        'Containerized with Docker and deployed on Microsoft Azure Container Apps. The system was demonstrated on-site at the client\'s production facility — the client visited and observed live counting. Minor updates are in progress before full production rollout.'
    },
    {
      heading: 'Lessons Learned',
      body:
        'The model choice matters less than the deployment engineering. YOLO26n is not the most accurate detector available, but it runs on CPU via OpenVINO at the frame rates the use case demands — and that practical constraint is what makes the system deployable on client infrastructure without a GPU procurement cycle. The on-site demo proved that real-time accuracy on actual production-line footage is what closes the deal, not benchmark numbers on public datasets.'
    }
  ],
  businessValue:
    'Replaces manual production counting with real-time, auditable automated tracking — meeting regulatory compliance requirements while eliminating human counting error. CPU-only inference via OpenVINO means no GPU hardware costs for the client.'
},
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds — the existing `[slug]` page will pick up the new case study automatically via `generateStaticParams()`

- [ ] **Step 3: Commit**

```bash
git add lib/caseStudies.ts
git commit -m "add Video Analytics case study with YOLO26n/OpenVINO architecture"
```

---

### Task 8: Split certifications into two groups in lib/data.ts

**Files:**
- Modify: `lib/data.ts:671-728` (certifications array)

- [ ] **Step 1: Add group field to each certification**

Replace the `certifications` array with grouped entries:

```typescript
export const certifications = [
  {
    name: 'Agentic AI Level 2 — Professional',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/agentic_ai_level-II.jpg',
    group: 'professional' as const
  },
  {
    name: 'Agentic AI Level 1 — Developer Fundamentals',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/agentic_ai_level-I.jpg',
    group: 'professional' as const
  },
  {
    name: 'Agent Factory Fundamentals: Building Digital FTEs',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed · 81%',
    pdfUrl: '/certificates/FTE.png',
    group: 'professional' as const
  },
  {
    name: 'Generative AI Applications',
    issuer: 'Coursera',
    year: '2026',
    status: 'Completed · 90%',
    pdfUrl: '/certificates/IBM _genrative _Ai.jpg',
    group: 'professional' as const
  },
  {
    name: 'Build RAG Applications',
    issuer: 'IBM / Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/IBM_rag_application\'s .jpg',
    group: 'professional' as const
  },
  {
    name: 'AI for Everyone',
    issuer: 'DeepLearning.AI · Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/ai_for_everyone.png',
    group: 'professional' as const
  },
  {
    name: 'Alibaba Cloud Trainer',
    issuer: 'Bano Qabil',
    year: '2026',
    status: 'In Progress',
    pdfUrl: null,
    group: 'development' as const
  },
  {
    name: 'AI for Cybersecurity Specialization',
    issuer: 'Johns Hopkins University · Coursera',
    year: '2026',
    status: 'In Progress',
    pdfUrl: null,
    group: 'development' as const
  }
];
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "split certifications into professional and development groups"
```

---

### Task 9: Update Certifications.tsx for two-group layout

**Files:**
- Modify: `components/Certifications.tsx:30-108`

- [ ] **Step 1: Update heading**

Replace lines 43-46:
```tsx
<h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
  Certified &amp;{' '}
  <span className="gradient-text">Still Learning</span>
</h2>
```

- [ ] **Step 2: Add two-group rendering**

Replace the single grid (lines 52-108) with two groups. Add filtering logic at the top of the component body (after the state declarations):

```tsx
const professional = certifications.filter((c) => c.group === 'professional');
const development = certifications.filter((c) => c.group === 'development');
```

Then replace the single grid with:

```tsx
{/* Professional Certifications */}
<div className="mt-14">
  <h3 className="font-display text-lg font-semibold text-white/80 mb-5">Professional Certifications</h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {professional.map((c, i) => {
      const inProgress = c.status.toLowerCase().includes('progress');
      const cert = c as typeof c & { pdfUrl?: string | null };
      return (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          className="group/cert glass rounded-2xl p-5 card-hover relative overflow-hidden flex flex-col"
          onMouseMove={cert.pdfUrl ? (e) => handleMouseMove(e, cert.pdfUrl!) : undefined}
          onMouseLeave={cert.pdfUrl ? handleMouseLeave : undefined}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover/cert:opacity-100 group-hover/cert:animate-[scanlineSlide_2s_linear_infinite] transition-opacity duration-500 z-[2]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.6) 30%, rgba(43,77,255,0.8) 50%, rgba(0,229,255,0.6) 70%, transparent)' }}
          />
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl glass-strong flex items-center justify-center lang-ring ${
              inProgress ? 'text-accent-pink' : 'text-accent-lime'
            }`}>
              {inProgress ? <Clock size={18} /> : <Award size={18} />}
            </div>
            <span className="text-[10px] font-mono text-white/40">{cert.year}</span>
          </div>
          <h3 className="font-display font-semibold leading-tight">
            {cert.name}
          </h3>
          <div className="mt-1 text-xs font-mono text-white/50">
            {cert.issuer}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${
              inProgress ? 'text-accent-pink' : 'text-accent-lime'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                inProgress ? 'bg-accent-pink animate-pulse' : 'bg-accent-lime'
              }`} />
              {cert.status}
            </span>
            {cert.pdfUrl && (
              <button
                onClick={() => setViewCert(cert.pdfUrl!)}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-white transition cursor-pointer"
              >
                View <Eye size={11} />
              </button>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
</div>

{/* Professional Development */}
<div className="mt-10">
  <h3 className="font-display text-lg font-semibold text-white/80 mb-5">Professional Development</h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {development.map((c, i) => {
      const inProgress = c.status.toLowerCase().includes('progress');
      const cert = c as typeof c & { pdfUrl?: string | null };
      return (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          className="group/cert glass rounded-2xl p-5 card-hover relative overflow-hidden flex flex-col"
          onMouseMove={cert.pdfUrl ? (e) => handleMouseMove(e, cert.pdfUrl!) : undefined}
          onMouseLeave={cert.pdfUrl ? handleMouseLeave : undefined}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover/cert:opacity-100 group-hover/cert:animate-[scanlineSlide_2s_linear_infinite] transition-opacity duration-500 z-[2]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.6) 30%, rgba(43,77,255,0.8) 50%, rgba(0,229,255,0.6) 70%, transparent)' }}
          />
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl glass-strong flex items-center justify-center lang-ring ${
              inProgress ? 'text-accent-pink' : 'text-accent-lime'
            }`}>
              {inProgress ? <Clock size={18} /> : <Award size={18} />}
            </div>
            <span className="text-[10px] font-mono text-white/40">{cert.year}</span>
          </div>
          <h3 className="font-display font-semibold leading-tight">
            {cert.name}
          </h3>
          <div className="mt-1 text-xs font-mono text-white/50">
            {cert.issuer}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider ${
              inProgress ? 'text-accent-pink' : 'text-accent-lime'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                inProgress ? 'bg-accent-pink animate-pulse' : 'bg-accent-lime'
              }`} />
              {cert.status}
            </span>
            {cert.pdfUrl && (
              <button
                onClick={() => setViewCert(cert.pdfUrl!)}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-white transition cursor-pointer"
              >
                View <Eye size={11} />
              </button>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add components/Certifications.tsx
git commit -m "update Certifications: new heading, split into Professional and Development groups"
```

---

### Task 10: Update Contact CTA in Contact.tsx

**Files:**
- Modify: `components/Contact.tsx:34-42`

- [ ] **Step 1: Update heading and description**

Replace lines 34-42:
```tsx
<h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
  Have an AI workflow{' '}
  <span className="gradient-text">worth automating?</span>
</h2>
<p className="mt-5 text-white/65 max-w-md leading-relaxed">
  Tell me what your team is doing manually. I&apos;ll help map the
  workflow, identify where AI fits, and design a production-ready
  solution.
</p>
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx
git commit -m "update Contact CTA to AI workflow automation messaging"
```

---

### Task 11: Shorten Consulting section

**Files:**
- Modify: `lib/data.ts:804-844` (consulting object)
- Modify: `components/Consulting.tsx:66-135`

- [ ] **Step 1: Update consulting data — remove training service, shorten automation**

Replace the `consulting` object in `lib/data.ts`:

```typescript
export const consulting = {
  eyebrow: 'Work with me',
  heading: 'Consulting & Training',
  intro:
    'Beyond building AI products, I help organizations adopt AI the right way — turning repetitive work into automation.',
  services: [
    {
      icon: 'Workflow',
      badge: 'Consultancy',
      title: 'AI Automation Consultancy',
      description:
        'I map your workflows, find the bottlenecks worth fixing, and design AI + automation that frees your team to focus on higher-value work.',
      points: [
        'Workflow mapping & pain-point analysis',
        'Automation & AI opportunity assessment',
        'Prototype → pilot → production rollout'
      ],
      cta: 'Book a free consultation',
      href: 'mailto:zumfluxai@gmail.com?subject=AI%20Automation%20Consultation',
      whatsapp: {
        label: 'WhatsApp me',
        href: 'https://wa.me/923066775777?text=Hi%20Maria%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20consultation.'
      }
    }
  ],
  trainingLink: {
    text: 'I also offer AI training & enablement for small teams.',
    cta: 'View the AI Bootcamp',
    href: 'https://github.com/Maria-cpp/ai-bootcamp-guide'
  }
};
```

- [ ] **Step 2: Update Consulting.tsx — render single card + training link**

Replace the service cards grid section (lines 66-135) with:

```tsx
{/* Service card */}
<div className="mt-6 grid md:grid-cols-1 max-w-2xl gap-5">
  {consulting.services.map((s, i) => {
    const Icon = iconFor(s.icon);
    const external = s.href.startsWith('http');
    return (
      <Tilt3D
        key={s.title}
        delay={0.08 * (i + 1)}
        className="group relative h-full glass rounded-3xl p-7 overflow-hidden border border-white/10 hover:border-accent/40"
      >
        <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-strong text-accent-soft border border-accent/30">
              <Icon size={22} />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/15 text-accent-soft border border-accent/30">
              {s.badge}
            </span>
          </div>

          <h3 className="mt-5 font-display text-xl font-semibold">
            {s.title}
          </h3>
          <p className="mt-3 text-sm text-white/65 leading-relaxed">
            {s.description}
          </p>

          <ul className="mt-5 space-y-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                <Check size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={s.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="btn btn-primary w-fit"
            >
              {s.cta}
              <ArrowUpRight size={16} />
            </a>
            {s.whatsapp && (
              <a
                href={s.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.whatsapp.label}
                className="btn w-fit hover:brightness-125"
                style={{
                  background: 'rgba(37, 211, 102, 0.12)',
                  color: '#25D366',
                  border: '1px solid rgba(37, 211, 102, 0.45)'
                }}
              >
                <FaWhatsapp size={17} />
                {s.whatsapp.label}
              </a>
            )}
          </div>
        </div>
      </Tilt3D>
    );
  })}
</div>

{/* Training link — demoted */}
{consulting.trainingLink && (
  <p className="mt-6 text-sm text-white/50">
    {consulting.trainingLink.text}{' '}
    <a
      href={consulting.trainingLink.href}
      target="_blank"
      rel="noreferrer"
      className="text-accent-cyan hover:text-white transition underline underline-offset-2"
    >
      {consulting.trainingLink.cta} →
    </a>
  </p>
)}
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add lib/data.ts components/Consulting.tsx
git commit -m "shorten Consulting: single card, demote training to link"
```

---

### Task 12: Update ZumfluxAI tagline in lib/data.ts

**Files:**
- Modify: `lib/data.ts:737` (zumflux.tagline)

- [ ] **Step 1: Update tagline**

Replace line 737:
```typescript
tagline: 'AI Engineering Studio — production AI systems for teams shipping real-world products.',
```

- [ ] **Step 2: Commit**

```bash
git add lib/data.ts
git commit -m "update ZumfluxAI tagline to AI Engineering Studio"
```

---

### Task 13: Update Navbar — remove Consulting, rename Stack to Tech

**Files:**
- Modify: `components/Navbar.tsx:19-29` (links array)

- [ ] **Step 1: Update links array**

Replace lines 19-29:
```typescript
const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Tech' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#zumflux', label: 'ZumfluxAI' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' }
];
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "update Navbar: remove Consulting link, rename Stack to Tech"
```

---

### Task 14: Final build verification and smoke test

**Files:**
- All modified files

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Start dev server and check key pages**

Run: `npm run dev`

Check in browser:
- `http://localhost:3000` — homepage loads, hero shows new title, terminal card updated, stats correct, tech stack trimmed, skills trimmed, projects reordered, certifications split, contact CTA updated, consulting shortened, navbar updated
- `http://localhost:3000/projects/video-analytics` — case study page renders with all sections

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: address any remaining build issues from portfolio overhaul"
```
