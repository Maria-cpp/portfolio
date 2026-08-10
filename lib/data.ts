// =====================================================================
//  Maria Naseem — Portfolio Data (Single Source of Truth)
//
//  ALL text content lives here. Components import from this file and
//  never hardcode text in JSX. To update site content, edit this file.
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
  title: 'Forward Deployed Engineer · AI Solutions Architect',
  taglines: [
    'Forward Deployed Engineer',
    'AI Solutions Architect',
    'Agentic AI · MCP · HITL',
    'Computer Vision Engineer',
    'NLP · Multilingual & Low-Resource',
    'Conversational & Voice Agents — in progress',
    'Enterprise & Regulated-Industry AI',
    'Founder @ ZumfluxAI',
    'Founder @ ZUM Services Providers'
  ],
  location: 'Islamabad, Pakistan',
  availability: 'Open to relocation & remote — worldwide',
  email: 'marianaseem99@gmail.com',
  businessEmail: 'zumfluxai@gmail.com',
  phone: '+92 306 6775777',
  github: 'https://github.com/Maria-cpp',
  linkedin: 'https://www.linkedin.com/in/maria-naseem/',
  resumeUrl: '/Maria_Naseem_CV.pdf',
  shortBio:
    'Forward Deployed Engineer & AI Solutions Architect. I embed with clients, map their operations, and ship production AI they can actually run — real-time video analytics, four-stage HITL facial recognition, MCP-native agentic systems, and bank-grade data protection. Currently running two live FDE engagements across automotive and travel.',
  longBio:
    `I'm a Forward Deployed Engineer and AI Solutions Architect — I embed with clients, map their workflows, and deliver production AI they can operate, audit, and trust. Across roughly 10 years combining corporate and software roles — about 6 in software and technology and ~4 working with AI/ML, the last ~2 focused intensively on production systems — I've led architecture for a real-time video-analytics platform deployed on Microsoft Azure, a four-stage HITL facial-recognition attendance system, an MCP-native agentic observability stack, and a bank-grade PII tokenization vault. I currently run two active Forward Deployed engagements — automating manual operations end-to-end for automotive and travel clients. I also designed an agentic RAG contract-intelligence platform from inside a corporate-affairs role, and founded ZumfluxAI to deliver this work. Beyond engineering, I bring stakeholder fluency from serving as legal and regulatory liaison and coordinating BoD-level governance at a national tourism company.`
};

// ---------------------------------------------------------------------
//  About — three pillar cards (Vision / Expertise / Innovation)
//  Used by: About.tsx
// ---------------------------------------------------------------------

export const aboutPillars = [
  {
    label: 'Vision',
    title: 'AI that survives audit',
    description:
      'For regulated and enterprise clients, "it works in a notebook" is the start, not the end. I build AI systems that pass live demonstrations, carry audit trails, and operate under strict compliance frameworks.',
    accent: 'cyan'
  },
  {
    label: 'Expertise',
    title: 'Agentic systems · MCP · HITL',
    description:
      'Multi-agent orchestration with explicit Human-in-the-Loop gates, MCP servers (built and deployed), RAG over vector stores, real-time RTSP processing, and FastAPI/Next.js stacks — bridging research-grade ML to battle-tested infrastructure.',
    accent: 'lime'
  },
  {
    label: 'Innovation',
    title: 'From prototype to live deployment in weeks',
    description:
      'A real-time video-analytics system demonstrated on-site to the client at their production facility. A four-stage HITL attendance system deployed and running live on-premises. I move fast — and document the path so reviewers, auditors, and senior architects can follow it.',
    accent: 'pink'
  }
] as const;

// ---------------------------------------------------------------------
//  Tech stack — categorized cards + marquee ticker items
//  Used by: TechStack.tsx
// ---------------------------------------------------------------------

export const techCategories = [
  {
    name: 'Agentic AI & LLMs',
    icon: 'Brain',
    items: [
      'OpenAI', 'Anthropic Claude', 'Grok', 'Gemini',
      'MCP Servers (built & deployed)', 'Multi-Agent Orchestration',
      'HITL Controls', 'RAG', 'FAISS', 'Pinecone', 'Qdrant',
      'Pydantic Structured Outputs', 'LangChain', 'LangGraph', 'NLP',
      'OCR (PaddleOCR · pdfplumber)', 'Semantic Search'
    ]
  },
  {
    name: 'Computer Vision',
    icon: 'Camera',
    items: ['YOLO11 / Ultralytics', 'OpenCV', 'DeepFace · SFace', 'lap (tracking)', 'RTSP Multi-camera', 'Production-line analytics']
  },
  {
    name: 'Backend',
    icon: 'Server',
    items: ['FastAPI', 'Python', 'Node.js', 'Redis', 'Celery', 'PostgreSQL', 'SQLAlchemy', 'MySQL', 'WebSockets', 'RBAC/CBAC']
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'Framer Motion']
  },
  {
    name: 'MLOps & Observability',
    icon: 'Activity',
    items: ['Grafana', 'Prometheus', 'Alertmanager', 'structlog', 'Docker health checks', 'Agentic alert analysis']
  },
  {
    name: 'DevOps & Cloud',
    icon: 'Boxes',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'Nginx', 'CI/CD', 'systemd', 'certbot', 'Azure', 'Azure Container Apps']
  },
  {
    name: 'Security & Privacy',
    icon: 'ShieldCheck',
    items: [
      'PII detection & tokenization', 'Envelope encryption (Fernet/AES)', 'HMAC-SHA256',
      'Hash-chained audit logs', 'KMS / HSM key providers', 'Key rotation',
      'RBAC · dual-gate authorization', 'SIEM forwarding', 'spaCy NER'
    ]
  }
] as const;

export const techMarquee = [
  'Python', 'TypeScript', 'FastAPI', 'Next.js', 'React',
  'OpenAI', 'Anthropic', 'Gemini', 'Grok',
  'MCP', 'YOLO11', 'OpenCV', 'DeepFace',
  'PostgreSQL', 'Redis', 'Celery',
  'Docker', 'GitHub Actions', 'Tailwind CSS',
  'Pinecone', 'FAISS', 'LangChain', 'LangGraph', 'n8n', 'NLP',
  'Grafana', 'Prometheus', 'Alertmanager',
  'Playwright', 'Node.js', 'Streamlit'
];

// ---------------------------------------------------------------------
//  Skills — grid card view with title, blurb, and checklist items
//  Used by: Skills.tsx
// ---------------------------------------------------------------------

export const skillGroups = [
  {
    title: 'Agentic AI & MCP',
    blurb: 'Multi-agent orchestration with explicit HITL gates and MCP-native tool integration.',
    items: [
      'OpenAI / Claude Agents SDK',
      'MCP Servers (built & deployed)',
      'Multi-Agent Orchestration',
      'Human-in-the-Loop gates',
      'Pydantic Structured Outputs',
      'LangGraph',
      'n8n workflow automation',
      'Conversational agents (in progress)',
      'Voice / calling agents (in progress)'
    ]
  },
  {
    title: 'Computer Vision',
    blurb: 'Production CV pipelines on live RTSP — from facial-recognition attendance to factory-line analytics.',
    items: [
      'YOLO11 / Ultralytics · lap tracking',
      'Facial Recognition (DeepFace, SFace)',
      'RTSP multi-camera ingestion',
      '4-stage enrollment → HITL → embedding → inference',
      'Production-line counting & anomaly detection'
    ]
  },
  {
    title: 'LLM Engineering',
    blurb: 'RAG, structured outputs, and provider-agnostic LLM gateways.',
    items: [
      'OpenAI · Anthropic · Grok · Gemini',
      'Retrieval-Augmented Generation',
      'Embeddings & Vector Search',
      'FAISS · Pinecone',
      'Prompt Engineering & guardrails',
      'NLP — multilingual & low-resource (Urdu, Roman Urdu, Pashto…)'
    ]
  },
  {
    title: 'Backend & APIs',
    blurb: 'Production-grade Python services with async + queues + auth.',
    items: [
      'FastAPI · Python',
      'Redis + Celery (async + retry)',
      'PostgreSQL · MySQL · Alembic',
      'WebSockets · REST · JWT',
      'Microservices · structlog',
      'RBAC/CBAC'
    ]
  },
  {
    title: 'Frontend',
    blurb: 'Modern React stacks for AI-driven dashboards and operator tools.',
    items: [
      'Next.js (App Router)',
      'React · TypeScript',
      'Tailwind CSS',
      'Streamlit (rapid prototyping)',
      'Framer Motion'
    ]
  },
  {
    title: 'Consulting & Delivery',
    blurb: 'The forward-deployed half — embedding with stakeholders, mapping workflows, and owning delivery end to end.',
    items: [
      'Requirement gathering & workflow mapping',
      'Stakeholder & C-suite communication',
      'Solution architecture',
      'Client acquisition & service delivery',
      'Corporate governance · BoD / JMB coordination',
      'Contract review · regulatory compliance'
    ]
  },
  {
    title: 'Document Intelligence & RAG',
    blurb: 'Deterministic-first extraction — rules and OCR before the LLM, with confidence gates and audit trails.',
    items: [
      'RAG over PostgreSQL / pgvector',
      'Semantic search across enterprise records',
      'OCR + regex + rule-based extraction',
      'LLM-assisted validation · confidence scoring',
      'Contract & document metadata extraction',
      'Audit logging · validation pipelines'
    ]
  },
  {
    title: 'Cloud',
    blurb: 'Production AI workloads on Microsoft Azure alongside self-hosted Linux stacks.',
    items: [
      'Microsoft Azure — deployed real-time video analytics to production',
      'Azure Container Apps',
      'Docker containerized deployment · GitHub Actions CI/CD',
      'Azure AI Foundry (exploring)'
    ]
  },
  {
    title: 'Security & Privacy Engineering',
    blurb: 'Bank-grade data protection — tokenization, envelope encryption, and tamper-evident audit trails.',
    items: [
      'PII detection (regex + Luhn + spaCy NER)',
      'Deterministic tokenization (HMAC-SHA256)',
      'Envelope encryption · versioned keys · rotation',
      'Hash-chained, append-only audit logs',
      'Dual-gate authorization · RBAC',
      'KMS / HSM key providers · SIEM forwarding'
    ]
  },
  {
    title: 'Web & CMS',
    blurb: 'Production WordPress delivery — custom themes, PHP plugins, and integrations.',
    items: [
      'WordPress · custom themes',
      'PHP plugin development',
      'REST API & third-party integrations',
      'Performance optimization · client deployments'
    ]
  },
  {
    title: 'MLOps · DevOps · Observability',
    blurb: 'Container-first deployments with monitoring and CI/CD.',
    items: [
      'Docker · Docker Compose',
      'GitHub Actions CI/CD',
      'Grafana · Prometheus · Alertmanager',
      'Linux · Nginx · systemd · certbot',
      'Familiarity with Kubernetes patterns'
    ]
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
    role: 'AI Solutions Architect & Full-Stack Developer',
    company: 'Arwen Tech',
    location: 'Islamabad, Pakistan',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Architected the technical solution for an AI/ML-based real-time video analytics and production-counting system for a regulated-industry client. Built real-time RTSP video pipelines with YOLO11 custom-trained, multi-object tracking (lap), production-line counting, anomaly and stoppage detection, and FastAPI services designed for real-time data transmission. Containerized and deployed on Microsoft Azure (Container Apps). Demonstrated on-site — the client visited the production facility; minor updates in progress before full rollout.',
      'Architected and prepared for deployment a Facial-Recognition Attendance Management System for an enterprise client — a four-stage CV pipeline (face enrollment → similarity-based candidate retrieval from live RTSP streams → HITL verification gate → embedding generation and real-time attendance inference). Multi-camera RTSP ingestion with OpenCV SFace embeddings, FAISS index, threshold-based confidence routing, and a scalable architecture designed for thousands of employees. Deployed live on-premises (LAN) on our own staff in Karachi for real-world training and validation.',
      'Engineered an agentic notification microservice — a multi-channel orchestrator (email, WhatsApp, FCM push) using LLM-driven context-aware message generation with deterministic template fallback for guaranteed delivery. Built on FastAPI + Celery + Redis with retry handling, ClamAV virus scanning, and decoupled event-driven processing.',
      'Designed and shipped the Customer Experience Portal — full SLA lifecycle, contract onboarding, and workflow automation. FastAPI + Next.js + JWT + WebSocket live updates, Celery workers, async Postgres, fastapi-limiter rate limiting.',
      'Built a Document AI / OCR ingestion service using PaddleOCR + pdfplumber + python-docx with async FastAPI, MIME validation, and audit-grade structured logging.',
      'Delivered the Agentic Observability Platform — Prometheus → Alertmanager → AI Alert Analyzer (root-cause, severity, next-actions) with self-validating PromQL rules and a native MCP (Model Context Protocol) server for tool integration. Anthropic Claude SDK + FastAPI.',
      'Standardised multi-service deployment via Docker Compose and GitHub Actions CI/CD across all delivered microservices.'
    ],
    stack: ['FastAPI', 'YOLO11', 'OpenCV', 'MCP', 'Next.js', 'Redis', 'Celery', 'Docker', 'Microsoft Azure', 'Prometheus', 'Gemini', 'Anthropic Claude', 'PaddleOCR']

  },
  {
    role: 'Founder',
    company: 'ZumfluxAI',
    location: 'Remote',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Founded ZumfluxAI to deliver production AI engineering — agentic systems, computer vision pipelines, and full-stack AI platforms for teams shipping real-world products.',
      'Running two active Forward Deployed engagements — embedding with automotive and travel-agency clients to map operations and automate manual workflows end-to-end. Case studies to follow as builds complete.',
      'Active client engagements: SitesBuildOps (construction-finance fraud-detection platform) and the Nauman Afzal author portfolio.'
    ],
    stack: ['Agentic AI', 'LLMs', 'Computer Vision', 'FastAPI', 'Next.js', 'Vite']
  },
  {
    role: 'Corporate Affairs, Legal Operations & AI Solutions Engineer',
    company: 'Green Tourism Pvt. Ltd.',
    location: 'Islamabad, Pakistan',
    period: '2024 — 2025',
    bullets: [
      'AI Solutions & Forward Deployed Engineering (self-initiated): Proactively identified operational inefficiencies in contract and governance workflows and independently designed an Agentic AI Contract Intelligence Platform to automate legal operations and executive coordination — working in a Forward Deployed capacity, collaborating directly with business stakeholders to understand requirements and rapidly deliver AI-powered workflow automation.',
      'Designed a multi-agent architecture using Python, FastAPI, Claude, LangGraph, and RAG for contract ingestion, information extraction, semantic search, validation, and workflow orchestration.',
      'Built a deterministic document extraction pipeline (regex, OCR, rule-based parsing, LLM-assisted validation) to accurately extract contract metadata — duration, site details, revenue share, signatories, contact information, and JMB schedules — and implemented a RAG knowledge base on PostgreSQL (pgvector) for semantic contract search and contextual question answering.',
      'Automated JMB scheduling, meeting reminders, Minutes of Meeting (MoM) management, follow-up email generation, and contract lifecycle workflows — engineering RESTful APIs, modular AI services, confidence scoring, validation pipelines, and audit logging following clean-architecture principles for scalable enterprise deployment.',
      'Corporate Affairs & Legal Operations (primary role): Served as the primary legal and regulatory liaison — managing stakeholder communication, compliance workflows, contract reviews, executive correspondence, and coordination across C-suite and cross-functional teams.',
      'Coordinated corporate governance including Board of Directors (BoD) and Joint Management Board (JMB) meetings — preparing agendas, managing documentation, recording minutes, and tracking action items. Drafted and reviewed contracts, MoUs, and regulatory filings ensuring compliance with corporate law, procurement regulations, and internal governance policies.',
      'Collaborated with external legal counsel and senior leadership on compliance reviews, risk assessments, and governance initiatives; implemented structured document management to improve audit readiness, traceability, and regulatory reporting.',
      'Web & technical systems: Led delivery of the corporate WordPress website and Souvenir Shop — production-grade custom themes and PHP plugins integrating REST APIs and third-party services, with a cash-on-delivery checkout flow per client requirement, plus contributions to internal booking/reservation applications with Git-based version control.'
    ],
    stack: ['Python', 'FastAPI', 'Claude', 'LangGraph', 'RAG', 'PostgreSQL / pgvector', 'OCR', 'WordPress', 'PHP', 'Corporate Governance', 'Legal Operations']
  },
  {
    role: 'Co-Founder · Full-Stack Developer & Applied Generative AI',
    company: 'ZUM Services Providers',
    location: 'Pakistan',
    period: '2023 — 2025',
    bullets: [
      'Co-founded ZUM Services Providers and managed full end-to-end product development — building the full-stack platform from scratch while simultaneously running business operations, client acquisition, and service delivery.',
      'Designed and developed production-ready web applications with RESTful API design, backend business logic in Python/FastAPI, and frontend interfaces — owning the complete software development lifecycle independently.',
      'Designed and managed PostgreSQL databases — schemas, relationships, and optimized queries using SQLAlchemy ORM.',
      'Containerized all backend services with Docker and implemented automated CI/CD pipelines via GitHub Actions, ensuring reliable, repeatable production deployments.',
      'Managed the end-to-end product lifecycle — balancing technical execution with operational ownership across development, deployment, maintenance, and client communication.',
      'Applied generative AI (ChatGPT) with structured prompt engineering to accelerate marketing and digital content production for the business — an early, practical adoption of LLM tooling to cut content turnaround and cost.',
      'Delivered solar solution proposals and technical system layouts while leading digital operations — website development, marketing, branding, and digital content creation.'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'GitHub Actions', 'CI/CD', 'REST APIs', 'ChatGPT · Prompt Engineering']
  },
  {
    role: 'Blockchain Developer',
    company: 'MediaPark',
    location: 'Pakistan',
    period: '2020 — 2022',
    bullets: [
      'Designed and delivered scalable native blockchain systems and decentralized applications (DApps), implementing core blockchain architecture including blocks, transactions, consensus validation, and ECDSA-based cryptographic signing for secure authentication and identity protection.',
      'Implemented low-level socket-based networking for peer-to-peer (P2P) node communication, enabling distributed synchronization, block propagation, and transaction broadcasting across the blockchain network.',
      'Developed compliance-oriented smart contract interaction frameworks with controlled access mechanisms, encryption standards, auditability practices, and structured technical documentation to ensure blockchain security and operational integrity.'
    ],
    stack: ['Blockchain', 'ECDSA', 'P2P Networking', 'Smart Contracts', 'DApps']
  },
  {
    role: 'Earlier Career',
    company: 'IBM Pakistan · Prime Tele Power Solution · Team Work Construction',
    location: 'Pakistan',
    period: '2016 — 2020',
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

export const projects = [
  // ── Career / Enterprise Projects ──────────────────────────────────
  {
    title: 'Security Vault Service',
    slug: 'security-vault-service',
    tagline: 'Bank-grade PII tokenization vault with dual-gate unmask + hash-chained audit',
    description:
      'An independent privacy-vault microservice: detects sensitive data (regex + Luhn, then spaCy NER across 11 entity types), replaces it with deterministic HMAC-SHA256 tokens, envelope-encrypts the reversible mapping at rest, and resolves tokens only behind a dual policy-plus-permission gate. Every operation appends to an immutable SHA-256 hash-chained audit log enforced at the database layer — UPDATE/DELETE/TRUNCATE are rejected by triggers. Versioned keys with in-place rotation, pluggable KMS/HSM key provider, format-preserving and salted masking, Redis caching, Celery async bulk jobs, TLS via nginx, least-privilege DB role, and a Prometheus/Grafana/Alertmanager stack with an AI Alert Analyzer. 86 tests; in internal use at Arwen Tech for active testing and hardening. Enterprise IdP (Keycloak/OIDC) code-complete.',
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
    title: 'Multilingual NLP Intelligence Platform',
    slug: 'multilingual-nlp-intelligence',
    tagline: 'Agentic pipeline for low-resource-language public-feedback analysis + AI briefs',
    description:
      'A multilingual NLP platform that ingests social data across Pakistan\u2019s low-resource languages (Urdu, Roman Urdu, Pashto, Sindhi, Punjabi through long-tail Balochi, Brahui, Burushaski) and runs it through an agentic Kafka pipeline: language detection \u2192 script normalization/transliteration \u2192 NLLB-200 translation to an English pivot \u2192 sentiment, intent, topic, toxicity and sarcasm analysis. Every post preserves five artefacts (raw, native script, roman, English pivot, predictions) for a replayable audit trail. A Claude/Grok briefing agent generates daily briefs and real-time alerts; a human-review queue exports DVC-versioned gold sets that feed LoRA retraining, with adapters hot-swapped via shadow mode and automatic rollback on regression. pgvector + Qdrant, Redis, MinIO, W&B, Prometheus. 107 backend tests. Operational internally \u2014 running sentiment analysis on live feedback and posts; LoRA training and full observability in progress.',
    tags: ['FastAPI', 'Kafka', 'NLLB-200', 'XLM-R', 'Aya 23', 'PyTorch', 'PEFT / LoRA', 'pgvector', 'Qdrant', 'Claude / Grok', 'Next.js'],
    repo: null,
    demo: null,
    images: [
      '/images/NLP/posts.png',
      '/images/NLP/English.png',
      '/images/NLP/urdu.png',
      '/images/NLP/Pashto.png',
      '/images/NLP/Sindhi.png'
    ],
    featured: true,
    highlight: 'NLP \u00b7 Agentic Pipeline',
    sector: 'Enterprise',
    extraTag: 'Operational',
    category: 'career'  },
  {
    title: 'Video Analytics',
    tagline: 'YOLO11 production-line counting for regulatory compliance',
    description:
      'Architected for a regulated-industry client under a national regulatory compliance framework. YOLO11 / Ultralytics object detection with lap tracking, multi-line and multi-SKU production counting on live RTSP feeds, real-time event triggering with timestamped records, and dashboard views per SKU/line/batch/shift. Containerized and deployed on Microsoft Azure (Container Apps). Status: demonstrated on-site \u2014 the client visited the production facility; minor updates before rollout.',
    tags: ['YOLO11', 'Ultralytics', 'OpenCV', 'RTSP', 'FastAPI', 'PostgreSQL', 'Docker', 'Microsoft Azure'],
    repo: null,
    demo: null,
    images: [
      '/images/video_analytics/multi_obj_detection.png',
      '/images/video_analytics/single object.png',
      '/images/video_analytics/moving object.png',
      '/images/video_analytics/logs.png'
    ],
    featured: true,
    highlight: 'Regulated Industry \u00b7 Compliance',
    sector: 'Enterprise',
    extraTag: 'Demoed on-site',
    category: 'career'  },
  {
    title: 'Facial Recognition Attendance System',
    tagline: '4-stage HITL facial recognition on multi-camera RTSP',
    description:
      'Designed a four-stage HITL Facial Recognition Attendance Management System for an enterprise client. Pipeline: face enrollment \u2192 similarity-based candidate retrieval from live RTSP \u2192 human-in-the-loop verification gate \u2192 embedding generation \u2192 real-time inference and attendance logging. Multi-camera architecture scales from 40+ employees to thousands. Status: deployed live on-premises (LAN) on our own staff in Karachi for real-world training & validation.',
    tags: ['DeepFace \u00b7 SFace', 'OpenCV', 'FAISS', 'RTSP', 'FastAPI', 'HITL'],
    repo: null,
    demo: null,
    images: [
      '/images/ams/face detection 2.png',
      '/images/ams/2face detection.png',
      '/images/ams/front cam.png',
      '/images/ams/ams_logs.png'
    ],
    featured: true,
    highlight: 'Enterprise \u00b7 HITL',
    sector: 'Enterprise',
    extraTag: 'Live \u00b7 on-prem',
    category: 'career'  },
  {
    title: 'Agentic AI Contract Intelligence Platform',
    slug: 'agentic-contract-intelligence',
    tagline: 'FDE project \u2014 Multi-agent RAG for contract intelligence, JMB automation & legal ops',
    description:
      'Forward Deployed Engineering build for a national tourism company managing contracts across multiple provinces. Built a deterministic document extraction pipeline (regex, OCR, rule-based parsing, LLM-assisted validation) to accurately extract contract metadata \u2014 duration, site details, revenue share, signatories, contact information, and JMB schedules \u2014 and implemented a RAG knowledge base on PostgreSQL (pgvector) for semantic contract search and contextual question answering. A LangGraph multi-agent architecture (Python \u00b7 FastAPI \u00b7 Claude) handles contract ingestion, extraction, semantic search, validation, and workflow orchestration. Automates JMB scheduling, meeting reminders, MoM management, and follow-up email generation, with audit logging throughout. Identified the workflow bottleneck from inside the business and built the solution \u2014 the Forward Deployed pattern in practice.',
    tags: ['LangGraph', 'Claude', 'RAG', 'pgvector', 'FastAPI', 'Python', 'OCR', 'Multi-Agent', 'Document Intelligence'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'FDE \u00b7 Agentic RAG',
    sector: 'Enterprise',
    extraTag: 'Completed',
    category: 'career'  },
  {
    title: 'Customer Experience Portal (CXP)',
    tagline: 'Contract lifecycle automation with Gemini-assisted workflows',
    description:
      'End-to-end customer experience portal \u2014 contract onboarding through full SLA lifecycle, contract tracking, workflow automation, and Gemini-powered assistant. Stack: FastAPI \u00b7 Celery \u00b7 Notifications microservice \u00b7 Next.js \u00b7 PostgreSQL \u00b7 Redis \u00b7 Nginx. Production-ready Docker compose splits (dev/prod) with systemd unit files and certbot SSL.',
    tags: ['FastAPI', 'Next.js', 'Celery', 'PostgreSQL', 'Redis', 'Gemini', 'Docker', 'WebSockets'],
    repo: null,
    demo: null,
    videoUrl: '/videos/CX portal.mp4',
    featured: true,
    highlight: 'Enterprise \u00b7 SaaS',
    category: 'career'  },
  {
    title: 'Agentic Observability Platform',
    tagline: 'MCP-native AI alert analyzer on Grafana + Prometheus',
    description:
      'Dockerized observability stack with a built and deployed MCP server. AI Alert Analyzer performs root-cause inference, severity classification, and recommended next actions. Self-validating PromQL rules and dashboards against live Prometheus.',
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
    featured: true,
    highlight: 'MCP Server',
    category: 'career'  },
  {
    title: 'Multi-Channel Notification Microservice',
    tagline: 'Grok LLM + Redis/Celery message orchestrator',
    description:
      'Agentic notification service routing across email, SMS, Slack, WhatsApp. Grok LLM produces context-aware messages with predefined template fallback for guaranteed delivery; Redis + Celery handle async queue, retry, and decoupled processing.',
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
  {
    title: 'Green Pak Tourism',
    tagline: 'Corporate web presence for national tourism body',
    description:
      'Designed and delivered the corporate website for Green Tourism Pvt. Ltd. \u2014 a national tourism company. Built during tenure as Executive Coordinator for Digital Operations.',
    tags: ['WordPress', 'E-commerce', 'API Integrations', 'Digital Operations'],
    repo: null,
    demo: 'https://greenpaktourism.com/',
    images: ['/images/gtpl_website.png'],
    featured: true,
    highlight: 'GTPL \u00b7 Live',
    category: 'career'  },
  // ── ZumfluxAI Client Projects ─────────────────────────────────────
  {
    title: 'SitesBuildOps',
    tagline: 'FDE project \u2014 Construction-finance ledger with AI fraud detection',
    description:
      'Forward Deployed Engineering engagement. Centralized finance, ledger, and fraud-detection platform for construction companies managing multiple sites, vendors, and contractors. Features purchase tracking, ledger reconciliation, duplicate detection engine, audit logging, and AI-assisted fraud prevention. Phase 0 prototype shipped; Phase 1 in progress.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL 17', 'Alembic', 'Docker', 'Redis', 'S3 / MinIO'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'FDE \u00b7 ZumfluxAI',
    sector: 'ZumfluxAI',
    extraTag: 'In Progress',
    category: 'zumfluxai'  },
  {
    title: 'Nauman Afzal \u2014 Author Portfolio',
    tagline: 'Bibliophile \u00b7 Author of Mudslinging & Budhoo',
    description:
      'Designed and built the official author portfolio for Nauman Afzal \u2014 author of Mudslinging and Budhoo. Clean, content-first React + Vite single-page site with custom theming, Lucide iconography, and a books showcase.',
    tags: ['React 18', 'Vite', 'Lucide', 'Tailwind'],
    repo: null,
    demo: null,
    videoUrl: '/videos/Nauman Afzal.mp4',
    images: [
      '/images/nauman_afzal/Screenshot 2026-07-20 174208.png'
    ],
    featured: true,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    category: 'zumfluxai'  },
  {
    title: 'Voyara Tourism',
    tagline: 'Tourism booking experience \u2014 live prototype',
    description:
      'Tourism booking platform with a modern, immersive interface for discovering and booking travel experiences. Designed for a tourism-industry client as a ZumfluxAI engagement.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    repo: null,
    demo: 'https://voyara-tourism-projects.vercel.app/',
    images: [
      '/images/voyara/Screenshot 2026-07-20 173458.png',
      '/images/voyara/Screenshot 2026-07-20 173513.png',
      '/images/voyara/Screenshot 2026-07-20 173535.png',
      '/images/voyara/Screenshot 2026-07-20 173546.png',
      '/images/voyara/Screenshot 2026-07-20 173607.png'
    ],
    featured: true,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    extraTag: 'Live prototype',
    category: 'zumfluxai'  },
  {
    title: 'Naimat Khan Durrani \u2014 Portfolio',
    tagline: 'FDE project \u2014 Personal portfolio site',
    description:
      'Forward Deployed Engineering engagement. Designed and built a personal portfolio site for Naimat Khan Durrani \u2014 embedded with the client to understand their brand and deliver a polished, production-ready web presence.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    repo: null,
    demo: 'https://naimat-khan-durrani.vercel.app/',
    images: [
      '/images/naimat/Screenshot 2026-07-20 173435.png',
      '/images/naimat/Screenshot 2026-07-20 173719.png',
      '/images/naimat/Screenshot 2026-07-20 173736.png'
    ],
    featured: true,
    highlight: 'FDE \u00b7 ZumfluxAI',
    sector: 'ZumfluxAI',
    extraTag: 'Live',
    category: 'zumfluxai'  },
  {
    title: 'ARTSER',
    tagline: 'Corporate site for an Italian aluminum & PVC window/door and fa\u00e7ade company',
    description:
      'Designed and built the corporate website for ARTSER \u2014 an aluminum and PVC window/door, fa\u00e7ade, and curtain-wall installation company based in Verona, Italy (independent since 2015, 26+ years of industry experience). Multi-language site (English, Italian, Arabic, Urdu) covering services, a featured-projects portfolio, supplier network, and client testimonials.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel', 'Multi-language'],
    repo: null,
    demo: 'https://art-ser.vercel.app/',
    featured: true,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    extraTag: 'Live',
    category: 'zumfluxai'  },
  // ── Learning Projects ─────────────────────────────────────────────
  {
    title: 'FTE Sales Lead Engine',
    tagline: 'Browser automation \u00d7 AI scoring \u00d7 HITL review',
    description:
      'Playwright-based lead discovery, file-watcher trigger pipelines, AI-driven lead scoring and qualification, and a Human-in-the-Loop review layer \u2014 reducing manual outreach effort by ~80%.',
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
    pdfUrl: '/certificates/agentic_ai_level-II.jpg'
  },
  {
    name: 'Agentic AI Level 1 — Developer Fundamentals',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/agentic_ai_level-I.jpg'
  },
  {
    name: 'Agent Factory Fundamentals: Building Digital FTEs',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed · 81%',
    pdfUrl: '/certificates/FTE.png'
  },
  {
    name: 'Alibaba Cloud Trainer',
    issuer: 'Bano Qabil',
    year: '2026',
    status: 'In Progress',
    pdfUrl: null
  },
  {
    name: 'Generative AI Applications',
    issuer: 'Coursera',
    year: '2026',
    status: 'Completed · 90%',
    pdfUrl: '/certificates/IBM _genrative _Ai.jpg'
  },
  {
    name: 'Build RAG Applications',
    issuer: 'IBM / Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/IBM_rag_application\'s .jpg'
  },
  {
    name: 'AI for Cybersecurity Specialization',
    issuer: 'Johns Hopkins University · Coursera',
    year: '2026',
    status: 'In Progress',
    pdfUrl: null
  },
  {
    name: 'AI for Everyone',
    issuer: 'DeepLearning.AI · Coursera',
    year: '2026',
    status: 'Completed',
    pdfUrl: '/certificates/ai_for_everyone.png'
  }
];

// ---------------------------------------------------------------------
//  ZumfluxAI — founder spotlight section with services and recent clients
//  Used by: Zumflux.tsx
// ---------------------------------------------------------------------

export const zumflux = {
  name: 'ZumfluxAI',
  tagline: 'Production AI engineering for teams shipping real-world products.',
  description:
    'I founded ZumfluxAI to bring agentic systems, computer vision pipelines, and full-stack AI platforms to teams that need shipping-grade engineering — not demos. From multi-camera vision systems to autonomous LLM workflows, ZumfluxAI delivers AI that runs in production.',
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
  recentClients: [
    {
      name: 'SitesBuildOps',
      kind: 'Construction finance & fraud detection platform'
    },
    {
      name: 'Nauman Afzal',
      kind: 'Author portfolio site (Mudslinging · Budhoo)'
    },
    {
      name: 'Voyara Tourism',
      kind: 'Tourism booking experience — live prototype',
      url: 'https://voyara-tourism-projects.vercel.app/'
    },
    {
      name: 'Naimat Khan Durrani',
      kind: 'Personal portfolio site — live prototype',
      url: 'https://naimat-khan-durrani.vercel.app/'
    },
    {
      name: 'ARTSER',
      kind: 'Aluminum & PVC window/door, façade company website (Verona, Italy)',
      url: 'https://art-ser.vercel.app/'
    }
  ] as { name: string; kind: string; url?: string }[],
  cta: 'Hire ZumfluxAI'
};

// ---------------------------------------------------------------------
//  Forward Deployed Engineer — positioning banner content
//  Used by: Consulting.tsx
// ---------------------------------------------------------------------

export const forwardDeployed = {
  label: 'Forward Deployed Engineer',
  definition:
    "A Forward Deployed Engineer (FDE) is a hybrid technical role—part engineer, part consultant, and part problem-solver. They embed directly into enterprise client environments to customize, build, and deploy complex software or AI systems, bridging the gap between a tech company's product and real-world client workflows.",
  note:
    'This is exactly how I work: embedded with your team, hands-on in your environment, and accountable for the system running in production — not just a slide deck.'
};

// ---------------------------------------------------------------------
//  Consulting & Training — service cards with CTAs and WhatsApp links
//  Used by: Consulting.tsx
// ---------------------------------------------------------------------

export const consulting = {
  eyebrow: 'Work with me',
  heading: 'Consulting & Training',
  intro:
    'Beyond building AI products, I help organizations adopt AI the right way — turning repetitive work into automation, and upskilling teams so they can keep improving on their own.',
  services: [
    {
      icon: 'Workflow',
      badge: 'Consultancy',
      title: 'AI Automation Consultancy',
      description:
        'I help companies turn repetitive, manual, day-to-day work into reliable automations. I map your workflows, find the bottlenecks worth fixing, and design AI + automation that frees your team to focus on higher-value work.',
      points: [
        'Workflow mapping & pain-point analysis',
        'Automation & AI opportunity assessment',
        'Prototype → pilot → production rollout'
      ],
      cta: 'Book a free consultation',
      href: 'mailto:zumfluxai@gmail.com?subject=AI%20Automation%20Consultation',
      whatsapp: {
        label: 'WhatsApp me',
        href: 'https://wa.me/923066775777?text=Hi%20Maria%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20consultation.'
      }
    },
    {
      icon: 'GraduationCap',
      badge: 'AI Trainer',
      title: 'AI Training & Enablement',
      description:
        'I train small businesses, solo owners, and solar-industry teams to use AI with confidence — so they can build their own small automations in-house instead of depending on outside vendors for every change.',
      points: [
        'Hands-on, role-based AI training',
        'Practical automations your team can maintain',
        'Guided by my open AI Bootcamp curriculum'
      ],
      cta: 'View the AI Bootcamp',
      href: 'https://github.com/Maria-cpp/ai-bootcamp-guide',
      whatsapp: null
    }
  ]
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
//  Stats — key metrics displayed in the Hero section stats strip
//  Used by: Hero.tsx
// ---------------------------------------------------------------------

export const stats = [
  { label: 'Active FDE client engagements', value: '2' },
  { label: 'Yrs overall · 6+ software · 4+ in AI', value: '10+' },
  { label: 'Systems built — prototype to production', value: '12+' },
  { label: 'AI / agentic certifications', value: '5' }
];

// ---------------------------------------------------------------------
//  Currently learning — books / textbooks / online courses
//  Used by: About.tsx (renders when items array is non-empty)
// ---------------------------------------------------------------------

export const currentlyLearning = {
  label: 'Currently studying',
  items: [] as { title: string; author: string; blurb: string; cover: string; coverAlt?: string; url: string | null }[]
};
