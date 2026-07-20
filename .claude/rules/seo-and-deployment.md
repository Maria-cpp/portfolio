# SEO & Deployment

## Deployment

- Platform: Vercel with auto-deploy on push to `main`.
- No CI/CD pipeline beyond Vercel's built-in checks.
- Always run `npm run build` locally before pushing to catch errors.
- No server-side logic. The site is effectively a static export.

## SEO Configuration

- Metadata defined in `app/layout.tsx` including OpenGraph, Twitter cards, and JSON-LD schema.
- `app/robots.ts` generates robots.txt.
- `app/sitemap.ts` generates sitemap.xml.
- `app/opengraph-image.tsx` generates dynamic OG images.
- Keywords focus: AI engineer, agentic AI, RAG, computer vision, Azure, FastAPI, MCP.

## Image Configuration

Next.js image remote patterns (in `next.config.mjs`) allow:
- github.com
- avatars.githubusercontent.com
- raw.githubusercontent.com

Do not add new remote image domains without explicit approval.

## Performance Notes

- Components render eagerly (no lazy loading wrappers currently).
- No code splitting optimization beyond Next.js defaults.
- Large video files (~201MB) are served from public/ directory.
- Consider lazy loading for below-fold sections if performance becomes an issue.
