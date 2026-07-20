# CLAUDE.md - Maria Naseem AI Portfolio

> **Phase:** Production (live on Vercel)
> **Repository:** github.com/Maria-cpp/portfolio
> **Deploy:** Auto-deploy on push to `main` via Vercel

## Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript 5.6 (strict)
- **Styling:** Tailwind CSS 4 + Framer Motion + custom glassmorphic CSS
- **Icons:** Lucide React + React Icons
- **Fonts:** Inter (body), Space Grotesk (headings), JetBrains Mono (mono)
- **Hosting:** Vercel (static export, no server-side logic)

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm start        # Serve production build
npm run lint     # ESLint via Next.js defaults
```

## Governance Rules

1. **Single source of truth:** All content lives in `lib/data.ts`. Never hardcode text in components.
2. **No new files** unless absolutely necessary. Edit existing files first.
3. **No README.md changes** without explicit permission.
4. **Client anonymization:** Use "federal regulator" and "provincial government secretariat" in public-facing content. Never expose real client names (FBR, Sindh Secretariat).
5. **Assets stay organized:** Images in `public/images/{project}/`, videos in `public/videos/`, certificates in `public/certificates/`.
6. **TypeScript strict mode** is enforced. All components must be properly typed.
7. **Do not modify** `next.config.mjs`, `tsconfig.json`, or `tailwind.config.ts` without explicit approval.

## Scope Boundaries

**In scope:** UI tweaks, content updates in `lib/data.ts`, new sections/components, animation adjustments, SEO improvements, accessibility fixes.

**Out of scope:** Backend/API development, database integration, authentication, CMS integration, server-side rendering logic.

## Project Structure (Key Files)

```
app/
  layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD
  page.tsx            # Main page composing all sections
  globals.css         # Root styles, animations, glass effects
  projects/[slug]/    # Future project detail pages
components/           # 16 React components (see .claude/rules/ for details)
lib/data.ts           # ALL content data (~828 lines)
public/               # Static assets (CV, images, videos, certificates)
```

## Progress Tracking

- Update this section when completing significant changes
- Reference git commits for audit trail
- Current status: Production, maintenance & enhancement phase

## Task Management

- Break work into small, reviewable commits
- Each commit should be atomic and self-contained
- Test with `npm run build` before considering work complete

## Documentation Sync

- Keep `lib/data.ts` exports aligned with component imports
- When adding new sections, update `app/page.tsx` composition order
- Detailed rules live in `.claude/rules/` - consult before making changes
