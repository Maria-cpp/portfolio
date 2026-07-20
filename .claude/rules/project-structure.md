# Project Structure Details

## Component Map

| Component | Lines | Purpose |
|-----------|-------|---------|
| Hero.tsx | 170+ | Rotating taglines (9 roles, 2.4s cycle), availability badge, CV download, social links |
| Navbar.tsx | 120+ | Sticky nav with section anchor links, scroll-aware styling |
| About.tsx | 170+ | Vision/Expertise/Innovation pillars + "Currently Studying" |
| TechStack.tsx | 120+ | Marquee ticker + 6 categorized tech cards |
| Skills.tsx | 70+ | 6 specialty cards (Agentic AI & MCP leading) |
| Experience.tsx | 220+ | Vertical timeline with 7+ career entries |
| Projects.tsx | 490+ | Expandable cards with image carousels, video embeds, sector badges |
| Architecture.tsx | 850+ | 4 tabbed SVG flow diagrams (inline SVG) |
| Zumflux.tsx | 190+ | Founder spotlight, 4 services grid, client work |
| Consulting.tsx | 165+ | Consulting services section |
| Certifications.tsx | 185+ | 7 certifications + education, in-page modal viewer |
| Contact.tsx | 145+ | Contact info, socials, email links |
| Footer.tsx | 65+ | Footer credits |
| Mermaid.tsx | 75+ | Mermaid diagram wrapper (client component) |
| NeonBar.tsx | 20 | Neon sweep section divider |
| Tilt3D.tsx | 40 | 3D tilt effect helper |

## Page Composition Order (app/page.tsx)

Components are composed top-to-bottom in page.tsx. When adding new sections, insert at the appropriate position in the page composition.

## Data Architecture

All content is centralized in `lib/data.ts` with these exports:

| Export | Type | Used By |
|--------|------|---------|
| personal | object | Hero, Contact, Footer, layout.tsx |
| aboutPillars | array (3) | About |
| techCategories | array (6) | TechStack |
| techMarquee | array | TechStack |
| skillGroups | array (6) | Skills |
| experience | array (7+) | Experience |
| projects | array (13+) | Projects |
| zumflux | object | Zumflux |
| education | array | Certifications |
| certifications | array (7) | Certifications |
| stats | array | Hero |

## Public Assets

| Directory | Contents | Size |
|-----------|----------|------|
| public/Maria_Naseem_CV.pdf | Downloadable resume | 320KB |
| public/certificates/ | 5 cert JPGs/PNGs | ~850KB |
| public/images/ | Project screenshots (3 subdirs) | ~11MB |
| public/videos/ | 6 MP4 demo videos | ~201MB |
