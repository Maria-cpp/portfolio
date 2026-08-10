# CV Complete Redesign — Impact-First Resume

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely redesign all three resume variants (Senior AI Engineer, AI Solutions Architect, Computer Vision & Applied AI) from scratch with an impact-first structure that emphasizes achievements and business outcomes over technology lists, plus generate a master DOCX version.

**Architecture:** Each HTML resume gets the same structural redesign: Name → Headline → Contact → Highlights strip → Professional Summary → Core Competencies + Technical Skills (~20% of page 1) → Professional Experience (achievements-first bullets) → Selected Projects → Tiny Education → Compact Certifications. Earlier Career compressed into a single 3-line section. A Python script using `python-docx` generates the DOCX from the same content.

**Tech Stack:** HTML/CSS (print-optimized), Python 3.12, python-docx 1.2.0

---

## Key Design Principles (Apply Everywhere)

### 1. Headline Change
**All variants use this pattern:**
- Senior AI Engineer: `Senior AI Engineer | AI Solutions Architect | Agentic AI • LLMs • Computer Vision | Enterprise AI`
- AI Solutions Architect: `Senior AI Solutions Architect | Enterprise AI Leader | Agentic AI • LLMs • Computer Vision | Client Delivery`
- Computer Vision: `Computer Vision Engineer | Applied AI Specialist | Real-Time Vision • YOLO • Facial Recognition | Production ML`

### 2. Highlights Strip (NEW — replaces old experience-strip)
```
✔ 10+ Years Professional Experience    ✔ Computer Vision
✔ 4+ Years AI Engineering              ✔ Agentic AI & Multi-Agent Systems
✔ 12+ Production Systems               ✔ LLM Applications & Real-Time AI
✔ Enterprise & Government AI Solutions  ✔ FastAPI Expert • Azure Deployment
```

### 3. Achievements-First Bullet Pattern
**Bad:** Built FastAPI PostgreSQL Redis Celery...
**Good:** Built enterprise Security Vault protecting sensitive customer information through tokenization and encryption. _Tech: FastAPI, PostgreSQL, Redis._

### 4. Remove Implementation Details
Remove from resume (keep for interviews):
- SSIM, blur, freeze, signal loss
- HMAC-SHA256 (say "encryption" instead)
- Pydantic structured outputs
- spaCy NER specifics
- Specific algorithm names unless they're the point (YOLO is fine, lap tracking is not)

### 5. Video Analytics Updated Description
```
AI Video Analytics Platform
• Designed end-to-end architecture for real-time production counting using YOLO and OpenVINO.
• Built RTSP pipeline with object tracking, tamper detection, and FastAPI microservices.
• Containerized deployment on Azure.
• Successfully demonstrated solution at client production facility.
```

### 6. Education — Tiny
```
Master of Information Technology — Quaid-i-Azam University
```
One line. Done.

### 7. Certifications — Compact
```
Relevant Certifications: Agentic AI Level 2 • Agentic AI Level 1 • IBM Build RAG Applications • DeepLearning AI • Coursera GenAI
```

### 8. Earlier Career — Compressed
```
Previous Experience (2016–2020)
IBM Pakistan (Intern) • Prime Tele Power • Team Work Construction
Software Development • Operations • IT Support
```

### 9. Page Layout
**Page 1:**
- Name + Headline + Contact
- Highlights strip
- Professional Summary (3-4 sentences, impact-focused)
- Core Competencies (grid, ~20% of page)
- Technical Skills (compact categories)
- Professional Experience: Arwen Tech + Green Tourism

**Page 2:**
- Professional Experience continued: ZUM Services Providers Co-founder + MediaPark (Blockchain)
- Previous Experience (compressed)
- Selected Projects (achievements-first, 4-5 projects max)
- Education (one line)
- Certifications (one line)

---

## File Structure

| File | Action | Purpose |
|------|--------|---------|
| `public/resumes/maria-naseem-senior-ai-engineer.html` | Rewrite | Senior AI Engineer variant |
| `public/resumes/maria-naseem-ai-solutions-architect.html` | Rewrite | AI Solutions Architect variant |
| `public/resumes/maria-naseem-computer-vision-applied-ai.html` | Rewrite | Computer Vision variant |
| `scripts/generate-docx-resume.py` | Create | Python script to generate DOCX |
| `public/resumes/Maria_Naseem_Senior_AI_Engineer.docx` | Create | DOCX output |

---

### Task 1: Rewrite Senior AI Engineer Resume (HTML)

**Files:**
- Rewrite: `public/resumes/maria-naseem-senior-ai-engineer.html`

- [ ] **Step 1: Write the complete redesigned HTML**

Complete rewrite of `public/resumes/maria-naseem-senior-ai-engineer.html` with:

**Header:**
```
MARIA NASEEM
Senior AI Engineer | AI Solutions Architect
Agentic AI • LLMs • Computer Vision | Enterprise AI
```

**Highlights strip (checkmark grid):**
```
✔ 10+ Years Professional Experience    ✔ Computer Vision
✔ 4+ Years AI Engineering              ✔ Agentic AI & Multi-Agent Systems  
✔ 12+ Production Systems               ✔ LLM Applications & Real-Time AI
✔ Enterprise & Government AI Solutions  ✔ FastAPI Expert • Azure Deployment
```

**Professional Summary (rewritten, impact-focused, 3-4 sentences):**
Senior AI Engineer who designs and ships production AI systems for enterprise and government clients. Architected real-time video analytics deployed on Azure, a four-stage facial recognition attendance system running live on-premises, and a bank-grade data protection vault — each delivered from requirements through on-site client demonstrations. Built 12+ AI systems spanning computer vision, agentic workflows, and LLM applications. Currently leading AI platform engineering at Arwen Tech and running Forward Deployed Engineering engagements through ZumfluxAI.

**Core Competencies (3-column grid, compact):**
Agentic AI, LLM Applications, Multi-Agent Systems, Computer Vision, RAG Pipelines, Real-Time AI, End-to-End Architecture, FastAPI, Azure Deployment, Docker & CI/CD, Python, PostgreSQL

**Technical Skills (compact categories, no implementation details):**
- AI & ML: Agentic AI, LLM Applications, Multi-Agent Systems, RAG, Computer Vision, NLP, OCR
- Frameworks: LangGraph, LangChain, OpenAI SDK, Anthropic SDK, FastAPI, YOLO/Ultralytics, OpenCV
- Backend: Python, PostgreSQL, Redis, Celery, WebSockets
- Cloud & DevOps: Docker, Azure, GitHub Actions, Linux, Nginx
- Frontend: Next.js, React, TypeScript, Tailwind CSS

**Professional Experience — Arwen Tech (achievements-first):**
- Designed end-to-end architecture for real-time production counting using YOLO and OpenVINO. Built RTSP pipeline with object tracking, tamper detection, and FastAPI microservices. Containerized deployment on Azure. Successfully demonstrated solution at client production facility.
- Engineered a four-stage facial recognition attendance system processing multi-camera live video streams with human verification gates. Architecture scales to thousands of employees. Deployed live on-premises for real-world training and validation.
- Built enterprise Security Vault protecting sensitive customer information through tokenization and encryption with immutable audit logging. 86 automated tests. _Tech: FastAPI, PostgreSQL, Redis._
- Shipped an MCP-native observability platform with AI-powered alert analysis performing root-cause inference and severity classification. Built and deployed the MCP server for tool integration. _Tech: Prometheus, Grafana, Claude SDK._
- Delivered a multilingual NLP platform analyzing public feedback across 8+ low-resource languages with automated sentiment analysis and AI briefing generation. 107 tests.

**Professional Experience — Green Tourism (achievements-first):**
- Identified operational bottleneck and built an AI contract intelligence platform automating legal operations — contract ingestion, semantic search, metadata extraction, and workflow orchestration for a national tourism company. _Tech: LangGraph, Claude, RAG, pgvector._
- Automated meeting scheduling, minutes management, follow-up generation, and contract lifecycle workflows with audit logging.
- Served as primary legal and regulatory liaison — managing compliance, Board of Directors coordination, and cross-functional stakeholder communication.
- Delivered corporate website and e-commerce platform with custom development and API integrations.

**Page 2:**

**ZUM Services Providers (compact):**
- Co-founded and built the full-stack platform end-to-end — backend, database, APIs, and frontend — while running business operations, client acquisition, and service delivery.
- Containerized all services with Docker and CI/CD via GitHub Actions for production deployments.

**MediaPark — Blockchain Developer (compact):**
- Designed native blockchain systems and decentralized applications with cryptographic signing and peer-to-peer networking.
- Built compliance-oriented smart contract frameworks with access controls and audit documentation.

**Previous Experience (2016–2020) — compressed:**
IBM Pakistan (Intern) · Prime Tele Power · Team Work Construction
Software Development · Operations · IT Support

**Selected Projects (achievements-first, 4-5):**
1. AI Video Analytics Platform — Designed real-time production counting architecture for regulated-industry client. Deployed on Azure, demonstrated on-site. _YOLO, OpenCV, FastAPI, Azure._
2. Facial Recognition Attendance — Four-stage pipeline with human verification, multi-camera RTSP, deployed on-premises. _DeepFace, OpenCV, FAISS._
3. Security Vault — Enterprise data protection through tokenization and encryption with immutable audit trails. _FastAPI, PostgreSQL, Redis._
4. Multilingual NLP Platform — Analyzed feedback across 8+ low-resource languages with AI briefing generation. _FastAPI, Kafka, PyTorch._
5. Agentic Contract Intelligence — Multi-agent system automating contract lifecycle for a national tourism company. _LangGraph, Claude, RAG._

**Education (one line):**
Master of Information Technology — Quaid-i-Azam University

**Certifications (compact):**
Agentic AI Level 2 · Agentic AI Level 1 · IBM Build RAG Applications · DeepLearning AI · Coursera GenAI

- [ ] **Step 2: Verify HTML renders correctly**

Open in browser and verify:
- Page 1 fits on one printed page (letter size, 0.5in margins)
- Page 2 content doesn't overflow
- Highlights strip renders as a grid
- No technology-first bullets remain
- Education is one line
- Earlier career is compressed
- Print to PDF and verify 2 pages exactly

Run: Open `public/resumes/maria-naseem-senior-ai-engineer.html` in browser, print preview

- [ ] **Step 3: Commit**

```bash
git add public/resumes/maria-naseem-senior-ai-engineer.html
git commit -m "redesign: senior AI engineer resume — impact-first structure"
```

---

### Task 2: Rewrite AI Solutions Architect Resume (HTML)

**Files:**
- Rewrite: `public/resumes/maria-naseem-ai-solutions-architect.html`

- [ ] **Step 1: Write the complete redesigned HTML**

Same structure as Task 1 but with architect-focused framing:

**Header:**
```
MARIA NASEEM
Senior AI Solutions Architect
Enterprise AI Leader
Agentic AI • Enterprise Platforms • Solution Design • Client Delivery
```

**Summary emphasis:** Architecture decisions, client delivery, stakeholder communication, compliance, regulated environments.

**Bullet reframing:** Lead with architecture/design decisions and client outcomes, not implementation.
Example: "Architected and delivered a real-time video analytics solution for a regulated-industry client — from requirements gathering through on-site demonstration at the production facility."

All other structural rules from Task 1 apply (highlights, achievements-first, compressed education, etc.)

- [ ] **Step 2: Verify HTML renders correctly**

Same checks as Task 1.

- [ ] **Step 3: Commit**

```bash
git add public/resumes/maria-naseem-ai-solutions-architect.html
git commit -m "redesign: AI solutions architect resume — impact-first structure"
```

---

### Task 3: Rewrite Computer Vision Resume (HTML)

**Files:**
- Rewrite: `public/resumes/maria-naseem-computer-vision-applied-ai.html`

- [ ] **Step 1: Write the complete redesigned HTML**

Same structure as Task 1 but with CV-focused framing:

**Header:**
```
MARIA NASEEM
Computer Vision Engineer
Applied AI Specialist
Real-Time Vision • YOLO • Facial Recognition • Edge Deployment • Production ML
```

**Summary emphasis:** Production vision systems, RTSP pipelines, on-premises deployment, real-time inference, manufacturing/enterprise settings.

**Highlights strip adjusted:**
```
✔ 10+ Years Professional Experience    ✔ Real-Time Computer Vision
✔ 4+ Years AI Engineering              ✔ YOLO & Object Detection
✔ Production Vision Systems            ✔ Facial Recognition & HITL
✔ Enterprise & Government AI Solutions  ✔ Azure & On-Premises Deployment
```

**Bullet reframing:** Lead with vision system achievements. Video analytics and facial recognition bullets get more detail. NLP/agentic bullets get compressed.

All other structural rules apply.

- [ ] **Step 2: Verify HTML renders correctly**

Same checks as Task 1.

- [ ] **Step 3: Commit**

```bash
git add public/resumes/maria-naseem-computer-vision-applied-ai.html
git commit -m "redesign: computer vision resume — impact-first structure"
```

---

### Task 4: Generate DOCX Resume

**Files:**
- Create: `scripts/generate-docx-resume.py`
- Output: `public/resumes/Maria_Naseem_Senior_AI_Engineer.docx`

- [ ] **Step 1: Write the Python DOCX generation script**

Create `scripts/generate-docx-resume.py` using `python-docx` that generates the Senior AI Engineer variant as a properly formatted Word document. The script should:

- Set page margins (0.5in)
- Use Arial for body, Georgia for headings
- Match the HTML structure exactly: Name → Headline → Contact → Highlights → Summary → Core Competencies → Technical Skills → Experience → Projects → Education → Certs
- Use proper Word styles (Heading 1, Heading 2, Normal)
- Add horizontal rules between sections
- Format the highlights grid as a table with checkmarks
- Output to `public/resumes/Maria_Naseem_Senior_AI_Engineer.docx`

Content must match the redesigned Senior AI Engineer HTML from Task 1 exactly.

- [ ] **Step 2: Run the script**

```bash
cd "c:/Users/ArwenTech/OneDrive/Desktop/Work/Project Folders/ZUM/portfolio/Portfolio"
python scripts/generate-docx-resume.py
```

Expected: File created at `public/resumes/Maria_Naseem_Senior_AI_Engineer.docx`

- [ ] **Step 3: Verify DOCX output**

Open the generated DOCX and verify:
- 2 pages
- Formatting matches the HTML design intent
- All content present and correct
- Checkmarks render properly
- Page breaks in the right place

- [ ] **Step 4: Commit**

```bash
git add scripts/generate-docx-resume.py public/resumes/Maria_Naseem_Senior_AI_Engineer.docx
git commit -m "feat: add DOCX resume generation script + Senior AI Engineer DOCX"
```

---

### Task 5: Final Verification

- [ ] **Step 1: Cross-check all resumes against requirements**

Verify every resume has:
- [ ] New headline format (not old "AI Engineer | Agentic AI & LLM Solutions Architect | Computer Vision | Enterprise AI Solutions")
- [ ] Highlights strip with checkmarks
- [ ] Achievement-first bullets (no "Built FastAPI PostgreSQL Redis..." patterns)
- [ ] No implementation details (no SSIM, HMAC-SHA256, Pydantic, spaCy NER, lap tracking)
- [ ] Video Analytics updated description
- [ ] Education is one line
- [ ] Certifications are compact (one section, bullet or inline list)
- [ ] Earlier Career compressed into 3 lines
- [ ] Skills occupy ~20% of page 1, not 50%
- [ ] Page 1 layout matches: Name → Headline → Contact → Highlights → Summary → Competencies → Skills → Arwen Tech + Green Tourism
- [ ] Page 2 layout matches: ZUM + MediaPark + Earlier Career + Selected Projects + Education + Certs

- [ ] **Step 2: Commit any fixes**

```bash
git add -A
git commit -m "fix: final CV redesign adjustments"
```
