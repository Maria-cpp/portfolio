# Portfolio CV Update — Experiences, Videos, Certificates

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio to match Maria's latest CV — experiences, local video embeds, and certificate visibility.

**Architecture:** All content lives in `lib/data.ts` (single source of truth). One component change in `components/Projects.tsx` (iframe → video). Videos served from `public/videos/` as static assets.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion

---

## Pre-requisite (User action — not automated)

The user must copy videos to `public/videos/` before the video embeds will work:

```powershell
# Run from Portfolio root
mkdir "public\videos" -Force
Copy-Item "data\videos\chat base FTE creation.mp4" "public\videos\"
Copy-Item "data\videos\FTE video.mp4" "public\videos\"
Copy-Item "data\videos\Gesture based website.mp4" "public\videos\"
```

---

### Task 1: Update Projects.tsx — iframe → HTML5 video tag

**Files:**
- Modify: `components/Projects.tsx:64-75`

- [ ] **Step 1: Replace iframe with video element**

In `components/Projects.tsx`, replace lines 67-73:

```tsx
// OLD (iframe for YouTube):
<iframe
  src={proj.videoUrl}
  className="absolute inset-0 w-full h-full"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title={`${proj.title} demo`}
/>

// NEW (HTML5 video for local files):
<video
  src={proj.videoUrl}
  className="absolute inset-0 w-full h-full object-cover"
  controls
  preload="metadata"
  playsInline
  title={`${proj.title} demo`}
/>
```

- [ ] **Step 2: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: switch video embed from iframe to HTML5 video for local files"
```

---

### Task 2: Update Experience section from CV

**Files:**
- Modify: `lib/data.ts` — `experience` array (lines 189-271)

- [ ] **Step 1: Update Arwen Tech entry (lines 189-204)**

Replace the entire Arwen Tech object with:

```ts
{
  role: 'AI Solutions Architect & Full-Stack Developer',
  company: 'Arwen Tech',
  location: 'Islamabad, Pakistan',
  period: '2025 — Present',
  current: true,
  bullets: [
    'Architected the technical solution for an AI/ML-based real-time video analytics and production-counting system being prepared for vendor authorization under FBR\'s Chapter XIV-BA framework (Sales Tax Rules, 2006) — covering production-line monitoring for Third Schedule goods. Built real-time RTSP video pipelines with YOLOv8 (custom-trained), multi-object tracking (lap), production-line counting, anomaly and stoppage detection, and FastAPI services designed for real-time transmission to a Central Control Unit (CCU). Currently in demonstration / approval phase.',
    'Architected and prepared for deployment a Facial-Recognition Attendance Management System for a Pakistani provincial government secretariat — a four-stage CV pipeline (face enrollment → similarity-based candidate retrieval from live RTSP streams → HITL verification gate → embedding generation and real-time attendance inference). Multi-camera RTSP ingestion with OpenCV SFace embeddings, FAISS index, threshold-based confidence routing, and a scalable architecture designed for thousands of government employees. Currently in demonstration / approval phase.',
    'Engineered an agentic notification microservice — a multi-channel orchestrator (email, WhatsApp, FCM push) using LLM-driven context-aware message generation with deterministic template fallback for guaranteed delivery. Built on FastAPI + Celery + Redis with retry handling, ClamAV virus scanning, and decoupled event-driven processing.',
    'Designed and shipped the Customer Experience Portal — full SLA lifecycle, contract onboarding, and workflow automation. FastAPI + Next.js + JWT + WebSocket live updates, Celery workers, async Postgres, fastapi-limiter rate limiting.',
    'Built a Document AI / OCR ingestion service using PaddleOCR + pdfplumber + python-docx with async FastAPI, MIME validation, and audit-grade structured logging.',
    'Delivered the Agentic Observability Platform — Prometheus → Alertmanager → AI Alert Analyzer (root-cause, severity, next-actions) with self-validating PromQL rules and a native MCP (Model Context Protocol) server for tool integration. Anthropic Claude SDK + FastAPI.',
    'Standardised multi-service deployment via Docker Compose and GitHub Actions CI/CD across all delivered microservices.'
  ],
  stack: ['FastAPI', 'YOLOv8', 'OpenCV', 'MCP', 'Next.js', 'Redis', 'Celery', 'Docker', 'Prometheus', 'Gemini', 'Anthropic Claude', 'PaddleOCR']
},
```

- [ ] **Step 2: Update Green Tourism entry**

Replace the Green Tourism object with:

```ts
{
  role: 'Executive Coordinator — Corporate & Government Affairs | Digital Operations',
  company: 'Green Tourism Pvt. Ltd.',
  location: 'Islamabad, Pakistan',
  period: '2024 — 2025',
  bullets: [
    'Operated as the bridge between the CEO and federal/provincial stakeholder ecosystem: provincial secretaries and additional secretaries across all four provinces, ministerial offices, GHQ liaison, SIFC (Special Investment Facilitation Council), and the Law Directorate. Coordinated BOD meetings end-to-end including agenda preparation, MOMs, and follow-through on resolutions.',
    'Concurrently led digital operations — corporate web presence, e-commerce, API integrations, and workflow automation.'
  ],
  stack: ['Stakeholder Engagement', 'BOD Operations', 'Government Liaison', 'Digital Operations']
},
```

- [ ] **Step 3: Update ZUM Services entry**

Replace with:

```ts
{
  role: 'Co-Founder & Full-Stack Developer',
  company: 'ZUM Services Providers',
  location: 'Pakistan',
  period: '2023 — 2025',
  bullets: [
    'Co-founded a multi-services company and served as the primary technical lead, driving architecture, system design, and end-to-end delivery across the full stack (FastAPI, Next.js, PostgreSQL, Docker). Established CI/CD practices using GitHub Actions and automated release pipelines.',
    'Designed and delivered solar solution proposals and technical system layouts while leading all digital operations, including website development, marketing initiatives, branding, and digital content creation.'
  ],
  stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'GitHub Actions']
},
```

- [ ] **Step 4: Update MediaPark entry**

Replace with:

```ts
{
  role: 'Blockchain Developer',
  company: 'MediaPark',
  location: 'Pakistan',
  period: '2020 — 2022',
  bullets: [
    'Designed and delivered scalable native blockchain systems and decentralized applications (DApps), implementing core blockchain architecture including blocks, transactions, consensus validation, and ECDSA-based cryptographic signing for secure authentication and identity protection.',
    'Implemented low-level socket-based networking for peer-to-peer (P2P) node communication, enabling distributed synchronization, block propagation, and transaction broadcasting across the blockchain network.',
    'Developed compliance-oriented smart contract interaction frameworks with controlled access mechanisms, encryption standards, auditability practices, and structured technical documentation to ensure blockchain security and operational integrity.'
  ],
  stack: ['Blockchain', 'ECDSA', 'P2P Networking', 'Smart Contracts', 'DApps']
},
```

- [ ] **Step 5: Merge TWC + PTPS + IBM into single Earlier Career entry**

Remove the two separate entries (Administrative Coordinator + IBM Intern) and replace with one:

```ts
{
  role: 'Earlier Career',
  company: 'IBM Pakistan · Prime Tele Power Solution · Team Work Construction',
  location: 'Pakistan',
  period: '2016 — 2020',
  minimal: true,
  bullets: [
    'Internship at IBM Pakistan (2016) — supported PTCL\'s GPON deployment via PeopleSoft, Siebel, IBM Maximo, and IBM Integration Bus; contributed to GPON training documentation and inventory provisioning. Subsequent operations and IT support roles.'
  ],
  stack: ['PeopleSoft', 'Maximo', 'ERP']
}
```

- [ ] **Step 6: Commit**

```bash
git add lib/data.ts
git commit -m "update: experience section from latest CV — expanded bullets, merged earlier career"
```

---

### Task 3: Add video URLs to 3 projects

**Files:**
- Modify: `lib/data.ts` — `projects` array (lines 310, 357, 378)

- [ ] **Step 1: Set videoUrl for CXP (line 310)**

```ts
// OLD:
videoUrl: null, // user will add YouTube URL

// NEW:
videoUrl: '/videos/chat base FTE creation.mp4',
```

- [ ] **Step 2: Set videoUrl for FTE Sales Lead Engine (line 357)**

```ts
// OLD:
videoUrl: null, // user will add YouTube URL

// NEW:
videoUrl: '/videos/FTE video.mp4',
```

- [ ] **Step 3: Set videoUrl for Gesture AI Website (line 378)**

```ts
// OLD:
videoUrl: null // user will add YouTube URL

// NEW:
videoUrl: '/videos/Gesture based website.mp4',
```

- [ ] **Step 4: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add local video paths for CXP, FTE, and Gesture AI projects"
```

---

### Task 4: Update certifications, stats, project descriptions, and title

**Files:**
- Modify: `lib/data.ts` — `personal`, `certifications`, `stats`, `projects` sections

- [ ] **Step 1: Update personal.title (line 11)**

```ts
// OLD:
title: 'AI / ML Engineer',

// NEW:
title: 'AI / ML Engineer / Full-Stack Developer',
```

- [ ] **Step 2: Update certification years to 2026 (lines 395-444)**

Change `year: '2025'` → `year: '2026'` for all 5 completed certs.

Update "Develop Generative AI Applications: Get Started" → "Generative AI Applications":

```ts
{
  name: 'Generative AI Applications',
  issuer: 'Coursera',
  year: '2026',
  status: 'Completed · 90%',
  pdfUrl: '/certificates/ibm-generative-ai.pdf'
},
```

Also update the FTE cert issuer name and Build RAG cert issuer:

```ts
{
  name: 'FTE (Full-Time Equivalent) AI Program',
  issuer: 'PIAIC / Panaversity',
  year: '2026',
  status: 'Completed · 81%',
  pdfUrl: null
},
```

```ts
{
  name: 'Build RAG Applications',
  issuer: 'IBM / Coursera',
  year: '2026',
  status: 'Completed',
  pdfUrl: '/certificates/rag-applications.pdf'
},
```

- [ ] **Step 3: Update Bulk Data Import project description**

```ts
// OLD:
{
  title: 'Bulk Data Import System',
  tagline: 'Validated, error-resilient ingestion pipeline',
  description:
    'Scalable bulk-data import pipeline with validation rules, error handling, and optimized database ingestion patterns for high-volume workloads.',
  tags: ['Python', 'PostgreSQL', 'Validation', 'ETL'],
  repo: 'https://github.com/Maria-cpp/Bulk-data-import',
  demo: null
}

// NEW:
{
  title: 'Document AI / Bulk Data Import',
  tagline: 'OCR + async ingestion with audit logging',
  description:
    'Async FastAPI service combining PaddleOCR + pdfplumber + python-docx for document AI ingestion, MIME validation, and audit-grade structured logging. Scalable bulk-data import pipeline with validation rules and optimized database patterns for high-volume workloads.',
  tags: ['FastAPI', 'PaddleOCR', 'pdfplumber', 'PostgreSQL', 'Python', 'Docker'],
  repo: 'https://github.com/Maria-cpp/Bulk-data-import',
  demo: null
}
```

- [ ] **Step 4: Update stats strip (lines 503-508)**

```ts
export const stats = [
  { label: 'Years building AI systems', value: '5+' },
  { label: 'Production projects shipped', value: '12+' },
  { label: 'AI / Agentic certifications', value: '5' },
  { label: 'Founded company', value: '1' }
];
```

- [ ] **Step 5: Commit**

```bash
git add lib/data.ts
git commit -m "update: certifications to 2026, stats, title, and Document AI project from CV"
```

---

## Video mapping (reference)

| Local file | Project | videoUrl |
|---|---|---|
| `chat base FTE creation.mp4` | Customer Experience Portal (CXP) | `/videos/chat base FTE creation.mp4` |
| `FTE video.mp4` | FTE Sales Lead Engine | `/videos/FTE video.mp4` |
| `Gesture based website.mp4` | Gesture AI Website | `/videos/Gesture based website.mp4` |

## Notes

- **FTE cert PDF**: No PDF found in `data/certificates/` for the FTE AI Program cert. If Maria has one, drop it in `public/certificates/` and set the `pdfUrl` field.
- **Git size**: The 3 videos total ~47MB. GitHub's per-file limit is 100MB, so all fit. But this adds permanently to repo history — consider YouTube/cloud hosting if more videos are added later.
- **`.gitignore`**: `data/videos/` is gitignored but `public/videos/` is NOT — so the copied videos will be committed.
