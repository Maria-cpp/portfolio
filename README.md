# Maria Naseem — Portfolio

A modern AI Solutions Architect portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Dark glassmorphism design with smooth animations, image carousels, local video embeds, and interactive architecture diagrams.

> Live at: [Vercel](https://vercel.com) (auto-deploys on push to `main`)

---

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom dark theme
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter, Space Grotesk, JetBrains Mono (via `next/font`)

---

## Sections

1. **Hero** — Animated tagline rotation, code-card avatar, stats strip, Download CV
2. **About** — Vision / Expertise / Innovation pillars
3. **Tech Stack** — Marquee + categorized grid (Agentic AI, CV, Backend, Frontend, MLOps, DevOps)
4. **Skills** — Six specialty cards (Agentic AI & MCP, CV, LLM, Backend, Frontend, DevOps)
5. **Experience** — Vertical timeline (Arwen Tech, ZumfluxAI, Green Tourism, ZUM Services, MediaPark, Earlier Career)
6. **Projects** — 13 featured cards with tags, image carousels, local video embeds, screenshots popup
7. **Architecture** — 4 interactive SVG flow diagrams (Track & Trace, AMS HITL, Notification Service, Agentic Observability)
8. **ZumfluxAI** — Dedicated founder section with services grid + recent client work
9. **Certifications** — 7 certs with in-page popup viewer + Education
10. **Contact** — Business & personal email, GitHub, LinkedIn, Phone, Location
11. **Footer**

---

## Local development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

---

## Customizing

All content lives in **`lib/data.ts`** — a single TypeScript file. Update:

- `personal` — name, title, bio, contact, resume URL
- `aboutPillars` — vision/expertise/innovation cards
- `techCategories` / `techMarquee` — tech stack
- `skillGroups` — six skill cards
- `experience` — career timeline
- `projects` — featured projects (supports `videoUrl`, `videoUrl2`, `images[]`)
- `certifications` — certifications + status + image URLs
- `zumflux` — ZumfluxAI section + services
- `education` — degree(s)
- `stats` — hero stats strip

Colors live in `tailwind.config.ts` and `app/globals.css`.

Architecture diagrams are SVGs defined in `components/Architecture.tsx`.

---

## File structure

```
Portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx          <- fonts, metadata
│   └── page.tsx            <- composes all sections
├── components/
│   ├── About.tsx           <- pillars + currently learning
│   ├── Architecture.tsx    <- 4 SVG diagrams with tabs
│   ├── Certifications.tsx  <- 7 certs + popup viewer + Education
│   ├── Contact.tsx         <- business + personal email, socials
│   ├── Experience.tsx      <- timeline, supports "minimal" entries
│   ├── Footer.tsx
│   ├── Hero.tsx            <- tagline rotation, Download CV button
│   ├── Navbar.tsx
│   ├── Projects.tsx        <- video embeds, image carousel, screenshots popup
│   ├── Skills.tsx
│   ├── TechStack.tsx       <- marquee + categorized grid
│   └── Zumflux.tsx         <- founder section + recent client work
├── lib/
│   └── data.ts             <- ALL CONTENT lives here
├── public/
│   ├── certificates/       <- 4 certificate JPGs
│   ├── images/             <- project screenshots (ams/, video_analytics_fbr/, agentic_observability/)
│   ├── videos/             <- 6 MP4 demo videos (~130MB total)
│   └── Maria_Naseem_CV.pdf <- downloadable resume
├── docs/                   <- source CV and assets
├── DEPLOYMENT.md           <- Vercel deployment guide
├── README.md
└── package.json
```

---

## Deploy to Vercel (free)

1. Push to GitHub (`github.com/Maria-cpp/portfolio`)
2. Go to [vercel.com/new](https://vercel.com/new) -> sign in with GitHub
3. Import the `portfolio` repo -> click **Deploy**
4. Auto-deploys on every push to `main`

---

## Resume

The CV is at `public/Maria_Naseem_CV.pdf` and is downloadable from the hero section's **Download CV** button.

---

## Credits

Built by Maria Naseem | Founder of ZumfluxAI & ZUM Services Providers | 2026
