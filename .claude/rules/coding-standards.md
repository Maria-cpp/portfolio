# Coding Standards

## TypeScript

- Strict mode is enforced via tsconfig.json. Never use `any` type.
- All components must have proper TypeScript interfaces/types.
- Use `@/` path alias for imports (maps to project root).
- Target: ES2020.

## Component Patterns

- All components are React functional components.
- Client components use `"use client"` directive at top.
- Animations use Framer Motion (`motion`, `AnimatePresence`).
- Icons come from `lucide-react` (preferred) or `react-icons`.
- No class components. No HOCs. Use hooks for shared logic.

## Styling Rules

- Use Tailwind CSS utility classes. Avoid inline styles.
- Custom CSS goes in `app/globals.css` only when Tailwind cannot achieve the effect.
- Semantic CSS classes defined in globals.css: `.glass`, `.glass-strong`, `.gradient-text`, `.neon-bar`, `.card-hover`, `.btn`, `.btn-primary`, `.btn-ghost`, `.eyebrow`.
- Color tokens: `--bg` (#08090c), `--accent` (#2b4dff), `--accent-cyan` (#22d3ee), `--accent-lime` (#a3e635), `--accent-pink` (#f472b6).
- Dark theme only. Do not add light mode.

## Animation Standards

- Use Framer Motion for component-level animations.
- CSS keyframes for continuous/decorative animations (marquee, glow, float, gradient-x).
- Keep animation durations consistent: fade-in 0.6s, slide-up 0.7s, gradient-x 8s, marquee 35s.

## Content Updates

- ALL text content changes go in `lib/data.ts`. Never hardcode text in JSX.
- When adding a new project: add to `projects` array in `lib/data.ts` with all required fields (title, description, tags, sector, images/videoUrl).
- Image files: place in `public/images/{project_name}/` directory.
- Video files: place in `public/videos/` directory.

## Git Practices

- Commit messages should be descriptive of what changed and why.
- Keep commits atomic: one logical change per commit.
- Never commit `.env` files, `node_modules/`, or `.next/` build output.
- Videos are gitignored. Do not attempt to commit video files.
