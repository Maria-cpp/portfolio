# Maria Naseem — Portfolio

A modern AI/ML engineer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Dark glassmorphism design with smooth animations.

> Live preview: deploy to Vercel in 2 minutes (instructions below).

---

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom dark theme
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter, Space Grotesk, JetBrains Mono (via `next/font`)

---

## Sections

1. **Hero** — Animated tagline rotation, code-card avatar, stats strip
2. **About** — Vision / Expertise / Innovation pillars
3. **Tech Stack** — Marquee + categorized grid
4. **Skills** — Six specialty cards (Agentic AI, CV, LLM, Backend, Frontend, DevOps)
5. **Experience** — Vertical timeline (Arwen Tech, ZumfluxAI, Green Tourism, ZUM, MediaPark, IBM)
6. **Projects** — Featured cards with tags + repo links
7. **ZumfluxAI** — Dedicated founder section with services grid
8. **Certifications** — PIAIC/Panaversity, Coursera, IBM + Education
9. **Contact** — Email, GitHub, LinkedIn, Phone, Location
10. **Footer**

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

- `personal` — name, title, bio, contact
- `aboutPillars` — vision/expertise/innovation cards
- `techCategories` / `techMarquee` — tech stack
- `skillGroups` — six skill cards
- `experience` — career timeline
- `projects` — featured projects
- `certifications` — certifications + status
- `zumflux` — ZumfluxAI section + services
- `education` — degree(s)
- `stats` — hero stats strip

Colors live in `tailwind.config.ts` and `app/globals.css`.

---

## Deploy to Vercel (free)

### Option 1 — One-click via GitHub (Recommended)

1. Create a new repo on GitHub (e.g. `maria-cpp/portfolio`).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Maria-cpp/portfolio.git
   git push -u origin main
   ```

3. Go to **[vercel.com/new](https://vercel.com/new)** → sign in with GitHub.
4. Click **Import** on your `portfolio` repo.
5. Leave all settings as default → click **Deploy**.
6. Done — your site is live at `https://portfolio-<random>.vercel.app`.

To get a clean URL like `maria-naseem.vercel.app`:
**Project Settings → Domains → Add `maria-naseem.vercel.app`**.

### Option 2 — Vercel CLI (no GitHub needed)

```bash
npm i -g vercel
vercel
# follow prompts; accept defaults
vercel --prod
```

---

## Deploy alternatives

- **Netlify:** Push to GitHub, then `netlify.app/start` → import repo. Build cmd: `npm run build`, publish dir: `.next`.
- **GitHub Pages:** Requires `next export` config (Next 14 supports `output: 'export'` in `next.config.mjs`). Then push the `out/` folder.

---

## Resume

Place `Maria_Naseem_CV.pdf` inside `public/` to enable the resume download link in the hero.

---

## Credits

Built by Maria Naseem · Founder of ZumfluxAI · April 2026
