# Portfolio Overhaul — Design Spec

**Date:** 2026-08-11
**Scope:** Repositioning, content trimming, and structural improvements across the portfolio
**Primary files:** `lib/data.ts`, components (`Hero`, `TechStack`, `Skills`, `Projects`, `Certifications`, `Contact`, `Consulting`, `Zumflux`, `Navbar`), new page `app/projects/[slug]/page.tsx`

---

## 1. Positioning Change

**From:** "Forward Deployed Engineer & AI Solutions Architect"
**To:** "AI Engineer & AI Solutions Architect"

FDE becomes a differentiator mentioned in bios and the Consulting section, not the lead identity.

### Affected data in `lib/data.ts`

- `personal.title` → `'AI Engineer & AI Solutions Architect'`
- `personal.taglines` → reduced to 4:
  1. `'AI Engineer & AI Solutions Architect'`
  2. `'Agentic AI · Computer Vision · RAG'`
  3. `'Production AI Systems'`
  4. `'Founder @ ZumfluxAI'`
- `personal.shortBio` → rewrite leading with new title, shorter/punchier, FDE mentioned as differentiator
- `personal.longBio` → rewrite leading with new title, shorter/punchier, FDE mentioned as differentiator

### Affected component: Hero.tsx

- Terminal card updated:
  - `role: 'AI Engineer & Solutions Architect'`
  - `focus: ['Agentic AI', 'Computer Vision', 'RAG']`

---

## 2. Stats Strip

Update `stats` array in `lib/data.ts`:

| Current | New |
|---------|-----|
| `{ label: 'Active FDE client engagements', value: '2' }` | `{ label: 'Active FDE client engagements', value: '2' }` (keep) |
| `{ label: 'Yrs overall · 6+ software · 4+ in AI', value: '10+' }` | `{ label: 'Yrs across tech, engineering & ops · 6+ software · 4+ AI/ML', value: '10+' }` |
| `{ label: 'Systems built — prototype to production', value: '12+' }` | Keep as-is |
| `{ label: 'AI / agentic certifications', value: '5' }` | `{ label: 'AI / agentic certifications', value: '6' }` |

---

## 3. Tech Stack — Moderate Trim

### `techCategories` — reduce from 7 to 4 categories:

1. **AI / Agentic** — merge current "Agentic AI & LLMs" items, trimmed to core:
   `OpenAI, Anthropic Claude, Gemini, MCP Servers, Multi-Agent Orchestration, HITL, RAG, FAISS, LangGraph, Pydantic Structured Outputs`

2. **Computer Vision** — keep current, minor trim:
   `YOLO26n, OpenCV, OpenVINO, DeepFace · SFace, RTSP Multi-camera, FAISS`

3. **Engineering** — merge Backend + Frontend:
   `Python, FastAPI, Next.js, React, TypeScript, PostgreSQL, Redis, Celery, WebSockets`

4. **Infrastructure** — merge DevOps + MLOps + Security:
   `Docker, GitHub Actions, Azure, Prometheus, Grafana, Nginx, Linux`

Remove "Security & Privacy" as a standalone tech category (security expertise is demonstrated through the Security Vault project).

### `techMarquee` — reduce from 31 to ~18:

`Python, TypeScript, FastAPI, Next.js, OpenAI, Anthropic, MCP, YOLO26n, OpenCV, OpenVINO, PostgreSQL, Redis, Docker, Azure, LangGraph, FAISS, Prometheus, Grafana`

---

## 4. Skills — Moderate Trim

Reduce `skillGroups` from 11 to 6 cards:

1. **Agentic AI & MCP** — keep as-is
2. **Computer Vision** — keep, update YOLO11 → YOLO26n, add OpenVINO
3. **LLM Engineering** — keep as-is
4. **Backend & APIs** — keep as-is
5. **Security & Privacy Engineering** — keep (differentiator)
6. **Consulting & Delivery** — keep (supports FDE positioning)

**Remove:** Frontend, Document Intelligence & RAG (merge key items into LLM Engineering), Cloud, Web & CMS, MLOps · DevOps · Observability (infrastructure covered in tech stack).

---

## 5. Projects — Reorder + Improve Descriptions

### Reorder featured projects (top 5):

1. Video Analytics (update to YOLO26n + ONNX/OpenVINO)
2. Agentic AI Contract Intelligence Platform
3. Facial Recognition Attendance System
4. Security Vault Service
5. Agentic Observability Platform

### Description improvements:

Add measurable outcomes, specifics, and numbers where possible. Examples:
- Video Analytics: mention YOLO26n, ONNX/OpenVINO CPU inference, specific camera count if available
- Facial Recognition: "Designed for 5,000+ employee embeddings" if accurate
- Security Vault: already has "86 tests" — good

### Video Analytics project data updates:
- Tags: replace `YOLO11` with `YOLO26n`, add `OpenVINO`, add `ONNX`
- Description: mention ONNX conversion to OpenVINO for lightweight CPU inference

---

## 6. Case Study Page — `/projects/video-analytics`

New file: `app/projects/video-analytics/page.tsx`

Structure:
- **Problem:** Business problem (regulated industry needing production-line compliance counting)
- **Architecture:** How it was solved (YOLO26n, tracking, RTSP, FastAPI, Azure)
- **Engineering:** What was built (multi-camera pipelines, real-time counting, dashboard, Docker deployment)
- **Result:** What changed (on-site demo, Azure deployment, compliance framework)

This is a server component that imports project data from `lib/data.ts` and renders the case study layout. Follows the existing glassmorphic design language.

---

## 7. Certifications — Split into Two Groups

### Data change in `lib/data.ts`:

Split `certifications` array OR add a `group` field to each certification:

**Professional Certifications** (completed):
1. Agentic AI Level 2 — Professional
2. Agentic AI Level 1 — Developer Fundamentals
3. Agent Factory Fundamentals
4. Generative AI Applications
5. Build RAG Applications
6. AI for Everyone

**Professional Development** (in-progress):
1. Alibaba Cloud Trainer (Bano Qabil)
2. AI for Cybersecurity Specialization (Johns Hopkins / Coursera)

### Component change in `Certifications.tsx`:

- Heading changed from "Always Leveling Up" to "Certified & Still Learning"
- Render two groups with subheadings: "Professional Certifications" and "Professional Development"

---

## 8. Contact CTA

### Component change in `Contact.tsx`:

**From:**
```
Have A Project? Let's Build.
```
**To:**
```
Have an AI workflow worth automating?
```

**Description updated to:**
"Tell me what your team is doing manually. I'll help map the workflow, identify where AI fits, and design a production-ready solution."

---

## 9. Consulting Section

### Shorten AI Automation card:
- Keep the card but trim description and points for brevity

### Demote AI Training:
- Remove the full Training card
- Add a small text link at the bottom of the section: "I also offer AI training & enablement for small teams. [View the AI Bootcamp →]"

### FDE positioning banner:
- Keep as-is (still valuable as a differentiator)

---

## 10. ZumfluxAI Section

### Data change in `lib/data.ts`:

`zumflux.tagline` → `'AI Engineering Studio — production AI systems for teams shipping real-world products.'`

---

## 11. Navbar

### Component change in `Navbar.tsx`:

- Remove `{ href: '#consulting', label: 'Consulting' }` from links array
- Change `{ href: '#stack', label: 'Stack' }` to `{ href: '#stack', label: 'Tech' }`
- Result: 8 nav items (About, Tech, Experience, Projects, Architecture, ZumfluxAI, Certs, Contact)

---

## Not Changing

- Education year (2016 confirmed correct)
- Page composition order in `app/page.tsx` (sections stay in same order)
- Architecture section (keep as-is)
- Visual design/aesthetics (keep terminal/code aesthetic)
- `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts` (per governance rules)
- Experience section content (not in scope for this overhaul)

---

## Files Modified

| File | Changes |
|------|---------|
| `lib/data.ts` | personal, taglines, bios, stats, techCategories, techMarquee, skillGroups, projects, certifications, zumflux, consulting |
| `components/Hero.tsx` | Terminal card text |
| `components/Navbar.tsx` | Remove Consulting link, rename Stack → Tech |
| `components/Certifications.tsx` | Two-group layout, new heading |
| `components/Contact.tsx` | New CTA heading and description |
| `components/Consulting.tsx` | Shortened automation card, demote training to link |
| `app/projects/video-analytics/page.tsx` | **New file** — case study page |
