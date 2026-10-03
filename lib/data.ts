// =====================================================================
//  Maria Naseem — Portfolio Data (Single Source of Truth)
//
//  Shared portfolio content lives here. Some component copy and case
//  studies are maintained separately; keep their claims consistent.
//
//  Exports: personal, aboutPillars, techCategories, techMarquee,
//  skillGroups, experience, projects, certifications, zumflux,
//  forwardDeployed, consulting, education, stats, currentlyLearning
// =====================================================================

// --- Personal info used across Hero, Contact, Footer, layout.tsx ---
export const personal = {
  name: 'Maria Naseem',
  firstName: 'Maria',
  initials: 'MN',
  title: 'AI Engineer | Applied AI for Enterprise Workflows',
  taglines: [
    'AI Engineer',
    'Applied AI for enterprise workflows',
    'Computer Vision · RAG · AI Integration',
    'Hands-on architecture and client-facing delivery'
  ],
  location: 'Islamabad, Pakistan',
  availability: 'Open to relocation and remote international AI engineering roles',
  email: 'marianaseem99@gmail.com',
  businessEmail: 'zumfluxai@gmail.com',
  phone: '+92 306 6775777',
  github: 'https://github.com/Maria-cpp',
  linkedin: 'https://www.linkedin.com/in/maria-naseem/',
  resumeUrl: '/Maria_Naseem_CV.pdf',
  shortBio:
    'I build AI applications end-to-end — from data ingestion and inference through APIs, human-in-the-loop review, deployment, and monitoring.',
  longBio:
    `I am an AI engineer based in Islamabad, Pakistan, with a background across software, technology, and corporate operations. At Arwen Tech, I work on video analytics, AI-assisted enterprise workflows, backend services, and deployment tooling. My work combines hands-on implementation with solution design and client-facing delivery. I also undertake independent development through ZumfluxAI. I am exploring AI engineering opportunities with product teams and enterprise AI organizations, including UAE/Gulf relocation and remote international roles.`
};

export const heroWork = [
  { title: 'Video Analytics', description: 'Object detection, tracking, and facial recognition using standard IP cameras.' },
  { title: 'Standard Infrastructure', description: 'Solutions that work with high-quality generic IP cameras and standard PCs, without requiring specialized hardware.' },
  { title: 'NLP & Sentiment Analysis', description: 'Multilingual feedback and sentiment analysis workflows.' },
  { title: 'Agentic AI', description: 'Agentic systems with MCP integrations, human-in-the-loop (HITL) gates, and workflow automation.' },
  { title: 'RAG Platforms', description: 'Enterprise knowledge retrieval and document intelligence systems.' },
  { title: 'LLM Data Protection', description: 'Protecting sensitive enterprise data within LLM-powered applications.' }
] as const;

// ---------------------------------------------------------------------
//  About — three pillar cards (Vision / Expertise / Innovation)
//  Used by: About.tsx
// ---------------------------------------------------------------------

export const aboutPillars = [
  {
    label: 'Delivery',
    title: 'AI integrated into real workflows',
    description:
      'I connect inference and document processing to APIs, review queues, operational records, and deployment tooling. Project descriptions distinguish internal validation, demonstrations, and rollout status.',
    accent: 'cyan'
  },
  {
    label: 'Expertise',
    title: 'Computer vision and document AI',
    description:
      'Recent work includes CPU-based RTSP video analytics, retrieval over enterprise documents, structured LLM outputs, and human review of uncertain results.',
    accent: 'lime'
  },
  {
    label: 'Ownership',
    title: 'From requirements to implementation',
    description:
      'I work across requirements, architecture, implementation, testing, and delivery. Video Analytics has been deployed on Azure and demonstrated at a client facility; the attendance system has been validated internally on-premises.',
    accent: 'pink'
  }
] as const;

// ---------------------------------------------------------------------
//  Tech stack — categorized cards + marquee ticker items
//  Used by: TechStack.tsx
// ---------------------------------------------------------------------

export const techCategories = [
  {
    name: 'Core Expertise',
    icon: 'Brain',
    items: ['Applied AI', 'Computer Vision', 'Document Intelligence & RAG', 'Solution Design', 'Client-facing Delivery']
  },
  {
    name: 'Production AI',
    icon: 'Camera',
    items: ['RTSP Video Pipelines', 'YOLO / OpenVINO', 'OpenCV', 'LangGraph', 'LLM Integration', 'Human-in-the-Loop Review', 'MCP', 'pgvector / FAISS']
  },
  {
    name: 'Engineering',
    icon: 'Server',
    items: ['Python', 'FastAPI', 'TypeScript', 'Next.js', 'PostgreSQL', 'Redis / Celery', 'REST APIs']
  },
  {
    name: 'Cloud / Infrastructure',
    icon: 'Boxes',
    items: ['Azure Container Apps', 'Docker', 'GitHub Actions', 'Linux', 'Nginx']
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    items: ['Prometheus', 'Grafana', 'Alertmanager', 'OpenAI / Claude APIs', 'ONNX']
  }
] as const;

export const techMarquee = [
  'Python', 'FastAPI', 'Computer Vision', 'RAG', 'LangGraph',
  'OpenVINO', 'PostgreSQL', 'Docker', 'Azure', 'MCP'
];

// Supporting descriptions use the same expertise groups as the stack.
export const skillGroups = [
  {
    title: 'Core Expertise',
    blurb: 'Applied AI connected to enterprise workflows and client requirements.',
    items: ['Computer vision and video analytics', 'Document intelligence and RAG', 'Solution design', 'Requirements discovery and technical delivery']
  },
  {
    title: 'Production AI',
    blurb: 'Inference, retrieval, and review workflows with explicit deployment status.',
    items: ['YOLO, ONNX, OpenVINO and OpenCV', 'RTSP ingestion and counting events', 'LangGraph and structured LLM outputs', 'pgvector and FAISS retrieval', 'MCP tool integration', 'Human-in-the-Loop review']
  },
  {
    title: 'Engineering',
    blurb: 'Backend services and interfaces that connect AI to operational systems.',
    items: ['Python and FastAPI', 'TypeScript and Next.js', 'PostgreSQL and API integration', 'Redis and Celery queues', 'Authentication and access controls']
  },
  {
    title: 'Cloud / Infrastructure',
    blurb: 'Containerized deployments and repeatable build workflows.',
    items: ['Azure Container Apps', 'Docker and Docker Compose', 'GitHub Actions CI/CD', 'Linux and Nginx']
  },
  {
    title: 'Tools',
    blurb: 'Model integration and operational visibility.',
    items: ['OpenAI and Anthropic APIs', 'Prometheus and Grafana', 'Alertmanager', 'ONNX model export']
  }
];

// ---------------------------------------------------------------------
//  Experience — career timeline entries (newest first)
//  Used by: Experience.tsx
//  Fields: role, company, location, period, current?, bullets, stack
//  Set `minimal: true` for condensed entries (e.g. earlier career)
// ---------------------------------------------------------------------

export const experience = [
  {
    role: 'AI Solutions Engineer & Full-Stack AI',
    company: 'Arwen Tech',
    location: 'Islamabad, Pakistan',
    period: '2024 — Present',
    current: true,
    bullets: [
      'Work across requirements, solution design, full-stack implementation, AI integration, testing, and deployment for enterprise applications.',
      'Video Analytics — Built RTSP video processing with YOLO, ONNX/OpenVINO CPU inference, object tracking, counting events, and FastAPI. Deployed on Azure Container Apps and demonstrated at a client facility; rollout updates remain in progress.',
      'Attendance — Designed and built enrollment, candidate retrieval, human verification, and embedding/inference workflows using OpenCV SFace and FAISS. Validated in an internal on-premises environment.',
      'Enterprise Workflows — Built Customer Experience Portal functionality for contract onboarding, SLA tracking, ticketing, notifications, and integrations using FastAPI, Next.js, PostgreSQL, and Redis/Celery.',
      'Document Processing — Built asynchronous OCR and document ingestion with format validation and structured logging for enterprise records.',
      'Observability & Delivery — Built monitoring and an AI-assisted alert analysis workflow using Prometheus, Alertmanager, and Grafana; used Docker and GitHub Actions for repeatable service delivery. AI analysis provides hypotheses and recommended checks, rather than verified root causes.'
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'Azure', 'OpenVINO', 'OpenCV', 'Prometheus', 'MCP', 'GitHub Actions']
  },
  {
  role: 'Founder · Independent Software & AI Development',
  company: 'ZUMFluxAI',
  period: '2023 — Present',
  location: 'Pakistan',
  current: true,

  bullets: [
    'Undertake independent client development through ZumfluxAI, covering requirements discovery, solution design, implementation, and direct client communication.',
    'Built websites and application workflows using React/Next.js, APIs, relational databases, and third-party integrations. Client identities and identifying project details are withheld.',
    'Developed LLM-assisted information processing and workflow automation, with review steps where human decisions are required.',
    'Work on a confidential operations platform with transaction reconciliation, duplicate detection, audit logging, and assisted review; implementation remains in progress.'
  ],
  stack: ['Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'LLM Integration'],
  },
  {
    role: 'Blockchain Developer',
    company: 'MediaPark',
    location: 'Pakistan',
    period: '2020 — 2022',
    bullets: [
      'Native Blockchain Engineering — Designed and built a native blockchain implementation from the protocol layer, developing block and transaction structures, chain validation, consensus logic, and ECDSA-based transaction signing and verification.',
      'P2P Network — Built socket-based peer-to-peer node communication supporting node discovery, blockchain synchronization, block propagation, and transaction broadcasting across distributed network participants.',
      'Transaction & Wallet Security — Implemented cryptographic key-pair workflows, transaction signing, signature verification, hashing, address handling, and validation rules to protect transaction integrity and prevent unauthorized state changes.',
      'ERC-20 & Smart Contracts — Developed and integrated Ethereum-compatible ERC-20 token workflows, including token creation, transfers, balances, allowances, contract interaction, and Web3-based application integration.',
      'Secure DApp Integration — Connected decentralized applications with blockchain nodes and smart contracts through backend services and RPC/Web3 interfaces, bridging conventional application workflows with decentralized infrastructure.',
      'Compliance & Auditability — Engineered controlled-access smart contract workflows with traceable transaction activity, validation controls, audit-oriented records, and structured technical documentation for security-sensitive blockchain use cases.'
    ],
    stack: ['Native Blockchain', 'Distributed Systems', 'P2P Networking', 'Sockets', 'ECDSA', 'Cryptography', 'Ethereum', 'ERC-20', 'Smart Contracts', 'Web3', 'DApps', 'RPC'],  },
  {
    role: 'Backend Engineer · Secure Systems',
    company: 'Confidential / Project-Based Engineering',
    period: '2016 — 2019',
    location: 'Pakistan',
    current: false,
    bullets: [
      'Backend & Systems Engineering — Developed server-side applications and internal business systems using C++ and backend technologies, building a foundation in application architecture, data processing, and systems programming.',
      'API & Data Engineering — Built backend functionality and service integrations around relational databases, structured operational records, server-side validation, and application data-access layers.',
      'Secure Application Workflows — Implemented authentication, authorization, role-based access patterns, input validation, and controlled access for applications handling restricted operational data.',
      'C++ Systems Development — Developed C++ components for performance-sensitive application logic, file/data processing, networking, and integration with backend systems and databases.',
      'Systems Integration — Integrated applications with databases and internal/external services, troubleshooting data flow, connectivity, and application-level integration issues.',
      'Linux & Production Support — Configured and supported applications in Linux environments, handling deployments, debugging, database operations, application configuration, and production troubleshooting.',
      'Client Delivery — Translated operational requirements into working backend functionality and delivered project-based systems for clients operating in confidentiality-sensitive environments.'
    ],
    stack: ['C++', 'Backend Development', 'REST APIs', 'SQL', 'Database Design', 'Authentication', 'RBAC', 'Networking', 'Linux', 'System Integration']
  },
  {
    role: 'Internship',
    company: 'IBM Pakistan',
    location: 'Pakistan',
    period: '2016 — 6 weeks',
    minimal: true,
    bullets: [
      'Internship at IBM Pakistan (2016) — supported PTCL\'s GPON deployment via PeopleSoft, Siebel, IBM Maximo, and IBM Integration Bus; contributed to GPON training documentation and inventory provisioning. Subsequent operations and IT support roles.'
    ],
    stack: ['PeopleSoft', 'Maximo', 'ERP']
  }
];

// ---------------------------------------------------------------------
//  Featured projects — expandable cards with media, sector badges, and categories
//  Used by: Projects.tsx
//  Categories: 'career' | 'zumfluxai' | 'learning'
//  Optional fields: slug (for case study link), images, videoUrl, videoUrl2,
//  sector (for badge color), extraTag, highlight, repo, demo
// ---------------------------------------------------------------------

export const projectSection = {
  description: 'Three selected AI projects showcasing implementation scope, current status, and supporting evidence. Additional client work, experiments, and learning projects are available in the archive.'
};

export const projects = [
  // ── Career / Enterprise Projects ──────────────────────────────────
  {
    title: 'Video Analytics',
    summary: 'Production-line counting from camera feeds, with timestamped records and dashboard views.',
    ownershipLabel: 'End-to-end delivery',
    ownership: 'Completed the solution end-to-end, including video ingestion, inference, tracking, event APIs, and deployment integration.',
    slug: 'video-analytics',
    tagline: 'CPU-based video analytics for production-line counting',
    description: 'Built a video-analytics system for a confidential enterprise engagement, covering RTSP ingestion, YOLO detection exported through ONNX to OpenVINO for CPU inference, object tracking, and counting events. FastAPI and PostgreSQL support timestamped records and dashboard views by SKU, line, batch, and shift. Deployed on Azure Container Apps and demonstrated at a client facility. Updates remain in progress before full rollout; no validated business-impact or counting-accuracy figures are published.',
    tags: ['Ultralytics', 'YOLO26n', 'OpenVINO', 'ONNX', 'Object tracking', 'OpenCV', 'RTSP', 'FastAPI', 'PostgreSQL', 'Docker', 'Microsoft Azure'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'NDA-Protected Engagement',
    sector: 'Enterprise',
    extraTag: 'Azure deployed · rollout pending',
    category: 'career'  },
  {
    title: 'Agentic AI Contract Intelligence Platform',
    summary: 'Document extraction and retrieval for contract search and AI-assisted workflows.',
    ownership: 'Built extraction, RAG retrieval, and agent workflow integration.',
    slug: 'agentic-contract-intelligence',
    tagline: 'Document extraction, semantic search, and AI-assisted contract workflows',
    description: 'Built document extraction using OCR, rule-based parsing, and LLM-assisted validation, alongside a PostgreSQL/pgvector RAG knowledge base for semantic search and question answering. Python, FastAPI, Claude, and LangGraph connect ingestion, extraction, retrieval, and workflow automation with audit logging. Client details are confidential. Implementation is completed; user adoption and business outcomes are not quantified here.',
    tags: ['LangGraph', 'Claude', 'RAG', 'pgvector', 'FastAPI', 'Python', 'OCR', 'Multi-Agent', 'Document Intelligence'],
    repo: null,
    demo: null,
    featured: false,
    highlight: 'Document AI · RAG',
    sector: 'Enterprise',
    extraTag: 'Completed',
    category: 'career'  },
  {
    title: 'Facial Recognition Attendance System',
    slug: 'facial-recognition-attendance',
    summary: 'Human-reviewed facial recognition and attendance logging from standard IP camera streams.',
    ownership: 'Designed and built enrollment, candidate retrieval, human verification, and embedding/inference workflows.',
    tagline: '4-stage HITL facial recognition on multi-camera RTSP',
    description:
      'Designed a four-stage HITL facial-recognition attendance system for an NDA-protected engagement. Pipeline: enrollment \u2192 candidate retrieval from live RTSP \u2192 human verification \u2192 embedding generation \u2192 real-time inference and attendance logging. Validated in an internal on-premises environment; further engagement details are withheld.',
    tags: ['DeepFace \u00b7 SFace', 'OpenCV', 'FAISS', 'RTSP', 'FastAPI', 'HITL'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Enterprise \u00b7 HITL',
    sector: 'Enterprise',
    extraTag: 'Internally validated · on-premises',
    category: 'career'  },
  {
    title: 'Security Vault Service',
    summary: 'Sensitive-data detection, reversible tokenization, and controlled unmasking for enterprise applications.',
    ownership: 'Designed and built the privacy-vault service, including encrypted mappings, access controls, and tamper-evident audit integration.',
    slug: 'security-vault-service',
    tagline: 'PII tokenization, controlled unmasking, and tamper-evident audit records',
    description: 'Built a privacy-vault microservice with regex/Luhn and spaCy-based sensitive-data detection, deterministic HMAC-SHA256 tokenization, encrypted token mappings, and policy-plus-permission checks for unmasking. Hash-chained audit records and database triggers restrict modification through the application database role; these controls do not establish immutability against privileged administrators. Includes key versioning, Redis caching, Celery bulk jobs, and monitoring. In internal use at Arwen Tech for testing and hardening; external security certification is not claimed.',
    tags: ['FastAPI', 'PostgreSQL 16', 'HMAC-SHA256', 'Fernet/AES', 'spaCy NER', 'Redis', 'Celery', 'KMS/HSM', 'Prometheus', 'Docker'],
    repo: null,
    demo: null,
    images: [
      '/images/security_vault_service/Screenshot 2026-07-20 172719.png'
    ],
    featured: true,
    highlight: 'Security · Privacy Vault',
    sector: 'Enterprise',
    extraTag: 'In internal use',
    category: 'career'  },
  {
    title: 'Agentic Observability Platform',
    slug: 'agentic-observability',
    summary: 'Monitoring and AI-assisted alert triage, with synthetic KPI examples distinguished from live metrics.',
    ownership: 'Built the monitoring stack and advisory alert analysis integration.',
    tagline: 'Monitoring with AI-assisted alert triage and optional MCP integration',
    description: 'Built a Dockerized Prometheus, Grafana, and Alertmanager stack with an AI alert analyzer that suggests severity, possible causes, and follow-up checks. Supports mock and LLM-backed analysis, with optional MCP integration. Repository examples include synthetic agent KPI data alongside live API and host metrics; dashboard values should be interpreted according to their data source. Public code and screenshots demonstrate implementation, rather than measured incident-resolution gains.',
    tags: ['FastAPI', 'MCP', 'Prometheus', 'Grafana', 'Alertmanager', 'LLM Agents', 'Docker'],
    repo: 'https://github.com/Maria-cpp/Agentic-Observability-Platform',
    demo: null,
    images: [
      '/images/agentic_observability/agents_dashboard.png',
      '/images/agentic_observability/operations_dashboard.png',
      '/images/agentic_observability/alert_analyzer.png',
      '/images/agentic_observability/alert_manager.png',
      '/images/agentic_observability/alerts.png',
      '/images/agentic_observability/prometheus target.png',
      '/images/agentic_observability/cxp_dashboard.png'
    ],
    featured: false,
    highlight: 'Public code · AI-assisted monitoring',
    extraTag: 'Demo stack · mixed data sources',
    category: 'career'  },
  {
    title: 'Multilingual NLP Intelligence Platform',
    slug: 'multilingual-nlp-intelligence',
    tagline: 'Agentic pipeline for low-resource-language public-feedback analysis + AI briefs',
    description: 'Built a multilingual public-feedback processing platform with language detection, script normalization, translation to an English pivot, and sentiment analysis. Original text and processed representations are retained for review. Running sentiment analysis on live feedback internally. LoRA training and full observability remain in progress; adapter hot-swapping, shadow evaluation, and automatic rollback are not presented as established operational capabilities.',
    tags: ['FastAPI', 'Kafka', 'NLLB-200', 'XLM-R', 'pgvector', 'Next.js'],
    repo: null,
    demo: null,
    images: [
      '/images/NLP/posts.png',
      '/images/NLP/English.png',
      '/images/NLP/urdu.png',
      '/images/NLP/Pashto.png',
      '/images/NLP/Sindhi.png'
    ],
    featured: false,
    highlight: 'NLP \u00b7 Agentic Pipeline',
    sector: 'Enterprise',
    extraTag: 'Operational',
    category: 'career'  },
  {
    title: 'Customer Experience Portal (CXP)',
    tagline: 'Contract lifecycle automation with Gemini-assisted workflows',
    description: 'Built an enterprise portal covering contract onboarding, SLA lifecycle tracking, ticketing, notifications, and Gemini-assisted workflows. FastAPI, Next.js, PostgreSQL, and Redis/Celery connect the application and asynchronous processing. Includes Docker Compose configurations, systemd unit files, and SSL setup; deployment configuration alone does not establish customer production adoption.',
    tags: ['FastAPI', 'Next.js', 'Celery', 'PostgreSQL', 'Redis', 'Gemini', 'Docker', 'WebSockets'],
    repo: null,
    demo: null,
    videoUrl: '/videos/CX portal.mp4',
    featured: false,
    highlight: 'Enterprise \u00b7 SaaS',
    category: 'career'  },
  {
    title: 'Multi-Channel Notification Microservice',
    tagline: 'Grok LLM + Redis/Celery message orchestrator',
    description: 'Built notification routing across email, SMS, Slack, and WhatsApp, with LLM-assisted message generation and predefined-template fallback. Redis and Celery support queued processing and retries. Fallback reduces dependence on model availability; delivery still depends on channel providers and retry outcomes.',
    tags: ['Grok LLM', 'Redis', 'Celery', 'FastAPI'],
    repo: null,
    demo: null,
    highlight: 'Microservice',
    category: 'career'  },
  {
    title: 'Document AI / Bulk Data Import',
    tagline: 'OCR + async ingestion with audit logging',
    description:
      'Async FastAPI service combining PaddleOCR + pdfplumber + python-docx for document AI ingestion, MIME validation, and audit-grade structured logging. Scalable bulk-data import pipeline with validation rules and optimized database patterns for high-volume workloads.',
    tags: ['FastAPI', 'PaddleOCR', 'pdfplumber', 'PostgreSQL', 'Python', 'Docker'],
    repo: 'https://github.com/Maria-cpp/Bulk-data-import',
    demo: null,
    category: 'career'  },
  // ── ZumfluxAI Client Projects ─────────────────────────────────────
  {
    title: 'NDA-Protected Client — Operations Platform',
    tagline: 'Forward Deployed Engineering · workflow and data platform',
    description:
      'Confidential Forward Deployed Engineering engagement. Built a workflow and data platform with transaction reconciliation, duplicate detection, audit logging, and assisted review. Further client and domain details are withheld.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL 17', 'Alembic', 'Docker', 'Redis', 'S3 / MinIO'],
    repo: null,
    demo: null,
    featured: false,
    highlight: 'FDE \u00b7 ZumfluxAI',
    sector: 'ZumfluxAI',
    extraTag: 'In Progress',
    category: 'zumfluxai'  },
  {
    title: 'NDA-Protected Client — Booking Experience',
    tagline: 'Booking experience · live prototype',
    description:
      'Designed a discovery and booking experience for a client engagement. Client identity, business domain, and project details are withheld under confidentiality obligations.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    repo: null,
    demo: null,
    featured: false,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    extraTag: 'Live prototype',
    category: 'zumfluxai'  },
  {
    title: 'NDA-Protected Client — Corporate Website',
    tagline: 'Multilingual corporate website',
    description:
      'Designed and built a multilingual corporate website with service pages, project portfolio, supplier information, and testimonials. Client identity and identifying details are withheld.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel', 'Multi-language'],
    repo: null,
    demo: null,
    featured: false,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    extraTag: 'Live',
    category: 'zumfluxai'  },
  // ── Learning Projects ─────────────────────────────────────────────
  {
    title: 'FTE Sales Lead Engine',
    tagline: 'Browser automation \u00d7 AI scoring \u00d7 HITL review',
    description: 'Built a learning project combining Playwright-based lead discovery, pipeline triggers, AI-assisted scoring and qualification, and Human-in-the-Loop review. Video walkthroughs demonstrate the workflow; no measured outreach-effort reduction is claimed.',
    tags: ['Playwright', 'Python', 'LLM', 'HITL'],
    repo: null,
    demo: null,
    videoUrl: '/videos/FTE video.mp4',
    videoUrl2: '/videos/chat base FTE creation.mp4',
    highlight: 'Automation',
    category: 'learning'  },
  {
    title: 'Gesture AI Website',
    tagline: 'Touchless interaction via webcam hand-gestures',
    description:
      'Computer vision web app integrating real-time hand-gesture detection with a Next.js frontend. Demonstrates browser-based ML inference for touchless UI experiments.',
    tags: ['Computer Vision', 'Next.js', 'MediaPipe'],
    extraTag: 'AI Speedcoding competition by AI COE',
    repo: 'https://github.com/Maria-cpp/gesture_ai_website',
    demo: null,
    videoUrl: '/videos/Gesture based website.mp4',
    category: 'learning'  },
  {
    title: 'AI Books',
    tagline: 'Docusaurus-powered AI knowledge base',
    description:
      'An open-source Docusaurus documentation site compiling AI/ML knowledge \u2014 covering agentic systems, computer vision, LLM engineering, and robotics. Built as a structured, searchable reference for the AI community.',
    tags: ['Docusaurus', 'React', 'MDX', 'AI/ML'],
    repo: null,
    demo: null,
    videoUrl: '/videos/AI Books.mp4',
    images: [
      '/images/AI Book.png',
      '/images/AI Book 2.png'
    ],
    highlight: 'Open Source',
    sector: 'ZumfluxAI',
    category: 'learning'  },
  {
    title: 'ZeenuShop',
    tagline: 'E-commerce platform for fashion & lifestyle',
    description:
      'Full-stack e-commerce application with product catalog, cart management, checkout flow, and admin dashboard. Built with modern web technologies for a seamless shopping experience.',
    tags: ['Next.js', 'React', 'Tailwind', 'PostgreSQL'],
    repo: null,
    demo: null,
    videoUrl: '/videos/ZeenuShop.mp4',
    highlight: 'E-commerce',
    category: 'learning'  }
];

// ---------------------------------------------------------------------
//  Certifications — grid cards with status and optional certificate image
//  Used by: Certifications.tsx
// ---------------------------------------------------------------------

export const certifications = [
  {
    name: 'Agentic AI Level 2 — Professional',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/agentic_ai_level-II.jpg',
    group: 'professional' as const
  },
  {
    name: 'Agentic AI Level 1 — Developer Fundamentals',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/agentic_ai_level-I.jpg',
    group: 'professional' as const
  },
  {
    name: 'Agent Factory Fundamentals: Building Digital FTEs',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/FTE.png',
    group: 'professional' as const
  },
  {
    name: 'Generative AI Applications',
    issuer: 'Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/IBM _genrative _Ai.jpg',
    group: 'professional' as const
  },
  {
    name: 'Build RAG Applications',
    issuer: 'IBM / Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/IBM_rag_application\'s .jpg',
    group: 'professional' as const
  },
  {
    name: 'AI for Everyone',
    issuer: 'DeepLearning.AI · Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/ai_for_everyone.png',
    group: 'professional' as const
  },
  {
    name: 'Alibaba Cloud Trainer',
    issuer: 'Alibaba Cloud',
    year: '2026',
    status: 'In Progress',
    pdfUrl: null,
    group: 'development' as const
  },
  {
    name: 'AI for Cybersecurity Specialization',
    issuer: 'Johns Hopkins University · Coursera',
    year: '2026',
    status: 'In Progress',
    pdfUrl: null,
    group: 'development' as const
  }
];

// ---------------------------------------------------------------------
//  ZumfluxAI — founder spotlight section with services and recent clients
//  Used by: Zumflux.tsx
// ---------------------------------------------------------------------

export const zumflux = {
  name: 'ZumfluxAI',
  tagline: 'Independent software and applied AI development.',
  description:
    'ZumfluxAI is the name I use for independent client development, including websites, application integrations, and AI-assisted workflows. This work provides additional evidence of requirements discovery and hands-on delivery. I am actively exploring employed AI engineering roles.',
  services: [
    {
      title: 'Agentic Workflow Automation',
      description: 'Multi-agent systems with MCP integration, tool-use orchestration, and HITL review.'
    },
    {
      title: 'Computer Vision Pipelines',
      description: 'Real-time facial recognition, object detection, and RTSP-based video analytics.'
    },
    {
      title: 'Custom LLM Integration',
      description: 'RAG, embedding stores, prompt engineering, and provider-agnostic LLM gateways.'
    },
    {
      title: 'Full-Stack AI Platforms',
      description: 'FastAPI + Next.js + PostgreSQL + Docker — end-to-end product engineering.'
    }
  ],
  recentClients: [] as { name: string; kind: string; url?: string }[],
  cta: 'Contact Maria about AI engineering roles'
};

// ---------------------------------------------------------------------
//  Forward Deployed Engineer — positioning banner content
//  Used by: Consulting.tsx
// ---------------------------------------------------------------------

export const forwardDeployed = {
  label: 'Client-facing AI delivery',
  definition:
    'Forward Deployed Engineering combines hands-on implementation with requirements discovery and adaptation to customer workflows.',
  note:
    'My relevant experience includes direct client communication, translating operational requirements into software, integration work, and on-site demonstration. I am interested in AI engineering roles with this delivery scope.'
};

// ---------------------------------------------------------------------
//  Consulting & Training — service cards with CTAs and WhatsApp links
//  Used by: Consulting.tsx
// ---------------------------------------------------------------------

export const consulting = {
  eyebrow: 'Work with me',
  heading: 'AI Engineering Opportunities',
  intro:
    'I am exploring applied AI and enterprise delivery roles with product teams, AI startups, and enterprise engineering organizations.',
  services: [
    {
      icon: 'Workflow',
      badge: 'Employment',
      title: 'Applied AI & Enterprise Delivery',
      description:
        'My work spans workflow requirements, AI integration, backend implementation, and delivery. Contact me to discuss a relevant engineering position.',
      points: [
        'Workflow mapping & pain-point analysis',
        'Automation & AI opportunity assessment',
        'Prototype → pilot → production rollout'
      ],
      cta: 'Discuss an AI engineering role',
      href: 'mailto:marianaseem99@gmail.com?subject=AI%20Engineering%20Opportunity',
      whatsapp: {
        label: 'WhatsApp me',
        href: 'https://wa.me/923066775777?text=Hi%20Maria%2C%20I%27d%20like%20to%20discuss%20an%20AI%20engineering%20role.'
      }
    }
  ],
  trainingLink: {
    text: 'Additional learning resource: an AI bootcamp guide.',
    cta: 'View the AI Bootcamp',
    href: 'https://github.com/Maria-cpp/ai-bootcamp-guide'
  }
};

// ---------------------------------------------------------------------
//  Education — degree entries
//  Used by: Certifications.tsx
// ---------------------------------------------------------------------

export const education = [
  {
    degree: 'Master of Information Technology',
    school: 'Quaid-e-Azam University',
    year: '2016'
  }
];

// ---------------------------------------------------------------------
//  Stats — experience counters requested for the hero
//  Used by: Hero.tsx
// ---------------------------------------------------------------------

export const stats = [
  { label: 'Years Engineering Experience', value: '9+' },
  { label: 'Years AI/ML', value: '4+' }
];

// ---------------------------------------------------------------------
//  Currently learning — books / textbooks / online courses
//  Used by: About.tsx (renders when items array is non-empty)
// ---------------------------------------------------------------------

export const currentlyLearning = {
  label: 'Currently studying',
  items: [] as { title: string; author: string; blurb: string; cover: string; coverAlt?: string; url: string | null }[]
};
