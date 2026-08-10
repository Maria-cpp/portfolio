# Resume Rebuild Design Spec

> **Date:** 2026-08-02
> **Status:** Approved
> **Output:** 3 standalone HTML files in `public/resumes/`

## Goal

Rebuild Maria Naseem's CV into three ATS-optimized, FAANG-style resume variants. Each is a self-contained HTML file that prints to exactly 2 pages via browser Print > Save as PDF.

## Deliverables

| File | Target Role |
|------|-------------|
| `public/resumes/maria-naseem-senior-ai-engineer.html` | Senior AI Engineer (OpenAI, Microsoft, Turing, Canonical, remote AI startups) |
| `public/resumes/maria-naseem-ai-solutions-architect.html` | AI Solutions Architect (enterprise consulting, solution architecture, technical leadership) |
| `public/resumes/maria-naseem-computer-vision-applied-ai.html` | Computer Vision & Applied AI (robotics, surveillance, industrial AI, autonomous systems) |

## Shared Structure

All three variants follow the same 2-page layout. Content is tailored per variant.

### Page 1

1. **Header** — Name, title lines, keyword tagline, contact info (city, email, LinkedIn, GitHub, portfolio)
2. **Experience strip** — "10+ Years Professional Experience | 6+ Years Software Engineering | 4+ Years AI Engineering"
3. **Professional Summary** — 8-10 lines, tailored per variant
4. **Core Expertise** — 12 keywords in a 3x4 grid, tailored per variant
5. **Technical Skills** — 4-5 categories with condensed single-line lists
6. **Professional Experience** — Arwen Tech (4-5 bullets), Green Tourism (3-4 bullets)

### Page 2

7. **Professional Experience (continued)** — ZUM Services (2-3 bullets), MediaPark (2 bullets), Earlier Career (1 line)
8. **Selected AI Projects** — 5-7 projects, each with title + 1-line description + tech stack line
9. **Education** — Master of Information Technology, Quaid-e-Azam University, 2016
10. **Selected Certifications** — 5 certifications (Agentic AI L2, Agentic AI L1, IBM RAG, DeepLearning AI, Coursera GenAI)
11. **Open Source** — AI Books, Agentic Observability Platform, AI Bootcamp Guide

## Writing Style

Action-oriented bullets that lead with impact, not technology. Pattern:

```
[Verb] + [what you built/delivered] + [business context] + [key technologies]
```

Example:
- Bad: "Architected the technical solution for an AI/ML-based real-time video analytics and production-counting system..."
- Good: "Architected a real-time AI video analytics platform using YOLO26n, OpenVINO, and FastAPI for automated production counting and live RTSP video processing."

Verbs: Architected, Built, Designed, Delivered, Engineered, Led, Deployed, Developed, Implemented, Shipped.

## Variant-Specific Content

### Variant 1: Senior AI Engineer

**Title block:**
```
Senior AI Engineer
AI Systems Builder
Agentic AI . LLM Systems . Computer Vision . Production ML
```

**Summary emphasis:** Hands-on engineering. Building and shipping production AI systems. Code-first. Systems running on Azure, handling live RTSP streams, processing thousands of faces. Python, FastAPI, Docker depth.

**Core Expertise:**
Agentic AI, LLM Applications, Multi-Agent Systems, Computer Vision, RAG Pipelines, Real-Time ML, FastAPI, Python, Docker, Azure, PostgreSQL, CI/CD

**Experience bullet style:** Lead with technical implementation. "Built", "Engineered", "Implemented", "Deployed".

**Project order:** Video Analytics, Attendance AI, Security Vault, NLP Platform, Agentic Observability, Contract Intelligence, OCR Platform

### Variant 2: AI Solutions Architect

**Title block:**
```
AI Solutions Architect
Enterprise AI Leader
Agentic AI . Enterprise Platforms . Solution Design . Client Delivery
```

**Summary emphasis:** Designing end-to-end AI solutions for enterprise and government clients. Architecture decisions, stakeholder communication, client demonstrations, production deployment. Bridge between business and technical.

**Core Expertise:**
Solution Architecture, Agentic AI, Enterprise AI, LLM Applications, Computer Vision, Client Delivery, RAG, System Design, Stakeholder Management, Azure, Docker, Microservices

**Experience bullet style:** Lead with architecture and delivery. "Architected", "Designed and delivered", "Led architecture decisions", "Demonstrated on-site".

**Project order:** Contract Intelligence, CXP, Video Analytics, Security Vault, NLP Platform, Agentic Observability, OCR Platform

### Variant 3: Computer Vision & Applied AI

**Title block:**
```
Computer Vision Engineer
Applied AI Specialist
Real-Time Vision . YOLO . Facial Recognition . Edge Deployment . Production ML
```

**Summary emphasis:** Production computer vision systems. RTSP pipelines, object detection, facial recognition, multi-camera architectures. Real-time inference, tracking, anomaly detection.

**Core Expertise:**
Computer Vision, Object Detection, Facial Recognition, Real-Time ML, YOLO/Ultralytics, OpenCV, RTSP Pipelines, Edge Deployment, Multi-Camera Systems, Python, FastAPI, Docker

**Experience bullet style:** Lead with CV work. Expand video analytics and attendance system. Condense non-CV work.

**Project order:** Video Analytics, Attendance AI, Gesture AI, Security Vault, NLP Platform, Agentic Observability, Contract Intelligence

## Design Specifications

### Typography
- **Fonts:** System fonts only — `Georgia, 'Times New Roman', serif` for name/headings, `Arial, Helvetica, sans-serif` for body
- **Name:** 20pt, bold
- **Section headers:** 11pt, bold, uppercase, letter-spacing 1px
- **Body text:** 9.5pt, line-height 1.4
- **Bullet text:** 9pt

### Colors
- Pure black `#000` on white `#fff`
- No grays, no accent colors, no backgrounds

### Layout
- Single column
- No tables for layout (ATS parsers break on tables)
- CSS grid only for the 3x4 Core Expertise keyword grid
- Margins: 0.5in all sides for print (`@page { margin: 0.5in; }`)

### Section Dividers
- Simple `<hr>` with `border-top: 1px solid #000`

### Page Control
- Explicit `page-break-before: always` on a wrapper div after page 1 content
- Content carefully sized to fit exactly within 2 printed pages

### HTML Structure
- Semantic HTML: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`
- No icons, no images, no SVG, no rating bars, no graphics
- All CSS embedded in `<style>` block (no external files)
- Each file is fully self-contained

### ATS Compatibility
- Plain semantic HTML that ATS parsers can read
- No JavaScript
- No CSS that hides or repositions text
- Standard section headings ATS systems look for: "Professional Summary", "Technical Skills", "Professional Experience", "Education", "Certifications"
- Contact info in plain text, not in headers or footers

## Target Scores
- ATS Compatibility: 95+/100
- Recruiter Readability: 10/10
- Senior AI Positioning: 10/10

## Confidentiality
- No real client names (FBR, Sindh Secretariat) — use "federal regulator", "provincial government secretariat" per CLAUDE.md rules
- "regulated-industry client" for Arwen Tech's video analytics client
- "enterprise client" for Arwen Tech's attendance system client
- "national tourism company" for Green Tourism

## Out of Scope
- Automated PDF generation tooling
- Integration with the portfolio website's download button
- Light mode / dark mode toggle
- Interactive elements
