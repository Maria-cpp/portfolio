# Portfolio Build — Session History

> Drop this file into a future Claude session as context. It captures the
> decisions, current state, and pending items for **Maria Naseem's portfolio**
> at `C:\Users\ArwenTech\OneDrive\Desktop\Work\Project Folders\ZUM\portfolio\Portfolio`.

---

## Who this is for

**Maria Naseem** — AI / ML Engineer, founder of **ZumfluxAI**.
- GitHub: `Maria-cpp` · LinkedIn: `maria-naseem-343594128`
- Personal email: `marianaseem99@gmail.com`
- Business email (ZumfluxAI): `zumfluxai@gmail.com`
- Phone: `+92 306 6775777` · Location: Islamabad, Pakistan
- 5+ years AI / development, 10+ years total professional experience.
- Currently AI Solution Architect at Arwen Tech.

---

## What we built

A modern portfolio at `C:\Users\ArwenTech\OneDrive\Desktop\Work\Project Folders\ZUM\portfolio\Portfolio`.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React.
**Design:** Dark glassmorphism, animated gradient text, scroll reveal, marquee tech rail, SVG architecture diagrams.
**Hosting:** Vercel — repo at `https://github.com/Maria-cpp/portfolio`, auto-deploys on push to `main`.

### Sections (top to bottom)
1. Navbar with About / Stack / Skills / Experience / Projects / Architecture / ZumfluxAI / Certs / Contact.
2. **Hero** — name, rotating taglines (`AI Solutions Architect`, `Agentic AI · MCP · HITL`, `Computer Vision Engineer`, `Government & Enterprise AI`, `Founder @ ZUMFluxAI and ZUM Services Providers`), code-card avatar, 4-stat strip.
3. **About** — Vision/Expertise/Innovation pillars + Currently studying card (Physical AI textbook).
4. **Tech Stack** — marquee + 6 categorized cards (Agentic AI & LLMs, Computer Vision, Backend, Frontend, MLOps & Observability, DevOps).
5. **Skills** — 6 cards led by `Agentic AI & MCP` with `MCP Servers (built & deployed)` called out.
6. **Experience** — vertical timeline with 7 entries (Arwen Tech, ZumfluxAI Founder, Green Tourism, ZUM Services, MediaPark, TWC+PTPS combined minimal entry, IBM Pakistan).
7. **Projects** — 11 cards. Sector-coloured highlight badges (cyan = Government, pink = ZumfluxAI client).
8. **Architecture** — interactive tab section with 3 SVG flow diagrams (Federal Track & Trace pipeline, AMS 4-stage HITL, Notification microservice).
9. **ZumfluxAI** — founder spotlight + 4 services + recent client work footer (SitesBuildOps, Nauman Afzal).
10. **Certifications** — 5 completed (4 with PDF links to `public/certificates/`) + 2 in progress.
11. **Contact** — `zumfluxai@gmail.com` first (Business · ZumfluxAI, pink), `marianaseem99@gmail.com` second (Personal), then GitHub, LinkedIn, Phone, Location.
12. **Footer**.

---

## Key positioning decisions

The portfolio is reframed from a generic AI engineer site into a **government / enterprise AI architect** narrative, because Maria has rare credentials for that market:
- Federal Track & Trace Video Analytics (under FBR Chapter XIV-BA — anonymized as "federal regulator" on the public site)
- Provincial Government Secretariat AMS (anonymized; client = Sindh Secretariat in private CV)
- Ministry-level stakeholder fluency from Green Tourism CEO-coordinator role

### Anonymization policy
- **Public portfolio**: clients are referred to as "federal regulator" and "provincial government secretariat" — never named.
- **Private CV**: real client names (FBR, Sindh Secretariat) are fine because the audience is controlled.
- Reason: the projects are 70% production-ready prototypes, not yet deployed; client confidentiality + accuracy concerns prevent putting their names on a Google-indexed site.

---

## File structure

```
Portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx          ← fonts, metadata
│   └── page.tsx            ← composes all sections
├── components/
│   ├── About.tsx           ← pillars + Currently studying card
│   ├── Architecture.tsx    ← 3 SVG diagrams with tabs
│   ├── Certifications.tsx  ← 7 certs + Education
│   ├── Contact.tsx         ← business email first
│   ├── Experience.tsx      ← timeline, supports "minimal" entries
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx        ← supports videoUrl, sector-coloured badges
│   ├── Skills.tsx
│   ├── TechStack.tsx       ← marquee + categorized grid
│   └── Zumflux.tsx         ← founder section + recent client work
├── lib/
│   └── data.ts             ← ALL CONTENT lives here — single source of truth
├── public/
│   ├── certificates/       ← 4 PDFs (agentic-ai-l1/l2, ibm-generative-ai, rag-applications)
│   └── images/             ← 2 Physical AI textbook screenshots
├── data/                   ← original assets (videos in .gitignore)
│   ├── certificates/       (source PDFs — copied to public/)
│   ├── images/             (source PNGs — copied to public/)
│   └── videos/             (47MB of MP4s — gitignored, will be YouTube unlisted)
├── preview/index.html      ← static HTML fallback (older v1 design, can be deleted)
├── DEPLOYMENT.md           ← Vercel deployment guide
├── README.md
└── package.json
```

**To change content, edit only `lib/data.ts`.** All sections read from it.

---

## Current state (deployed)

- Live on Vercel at the Vercel-assigned `*.vercel.app` URL (clean subdomain not yet set).
- Latest push includes the Currently Studying section.
- Build is clean — no known errors.

---

## Pending items (next session)

1. **YouTube embeds** — Maria will upload these unlisted to YouTube and provide URLs:
   - FTE Sales Lead Engine demo
   - Gesture AI Website demo
   - CXP demo (video being created/added)
   When URLs arrive, set them on the `videoUrl` field of the matching project in `lib/data.ts`.

2. **Vercel custom subdomain** — pick from: `maria-naseem`, `marianaseem`, `maria-ai`, `maria-cpp`, `zumfluxai`, `mn-engineer`. Set in Vercel → Settings → Domains.

3. **Live URLs for client projects** — if SitesBuildOps or Nauman Afzal site goes public, add a `demo` field on the matching project in `lib/data.ts`.

4. **Physical AI textbook URL** — if known, set `currentlyLearning.items[0].url` in `lib/data.ts`.

5. **CV file** — drop `Maria_Naseem_CV.pdf` into `public/` to enable the resume link in the hero.

6. **Optional polish ideas**:
   - Add a "Streaming Data Pipeline Lab" project to address the Spark/Kafka/Airflow gap on the JD radar (Airflow → Kafka → Spark → Postgres demo repo).
   - Architecture diagram for the CXP system.
   - Contact form (currently just mailto links).
   - Light/dark theme toggle.

---

## Reference details kept for the CV (private — NOT on the public site)

- **FBR Video Analytics** — under Chapter XIV-BA Track & Trace authorization. YOLOv8 + Ultralytics + lap tracking, multi-line/multi-SKU production counting, RTSP. Status: prototype, demo-ready.
- **Sindh Secretariat AMS** — 4-stage HITL pipeline: enrollment → similarity-based candidate retrieval (FAISS) → human-in-the-loop verification gate → embedding generation → real-time inference. Status: prototype, demo-ready.
- **Green Tourism stakeholder fluency** — provincial secretaries, additional secretaries, federal ministers, GHQ liaison, SIFC, Law Directorate, BOD-level meeting management.
- **Recent CXP project** — multi-service: FastAPI + Celery + Notifications service + Next.js + PostgreSQL + Redis + Nginx + Gemini AI + Docker prod/dev compose splits + systemd + certbot.

---

## Workflow for content updates

1. Edit `lib/data.ts` with the change.
2. From the Portfolio folder in PowerShell:

   ```powershell
   git add .
   git commit -m "update: <what changed>"
   git push
   ```

3. Vercel auto-redeploys in ~60 seconds.

---

## Known gotchas

- The original `data/videos/` folder is gitignored — videos go to YouTube unlisted, not committed.
- The `ziI*` artifacts in the repo root are leftover from earlier zip operations; the `.gitignore` excludes them but they may still be in the workspace.
- The `master` branch on GitHub still exists with just an old README; `main` is the active default branch.
- Bash sandbox can't run npm install / dev server fully due to a 45-second timeout — verification happens via Vercel build logs.

---

## Reference sites used as design inspiration (not copied)

- `ayushcmd.me` — overall structure
- `ali-ch.dev/about` — Vision / Expertise / Innovation pillars
- `aaabadcode.com` — experience timeline pattern
- `abbasraza.dev` — skill set grid
- `abhishekganvir.vercel.app` — tech stack treatment
