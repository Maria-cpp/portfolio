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
  title: 'AI Engineer & AI Solutions Architect',
  taglines: [
    'AI Engineer & AI Solutions Architect',
    'Agentic AI · Computer Vision · RAG',
    'Production AI Systems',
    'Founder @ ZumfluxAI'
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
    'AI Engineer & AI Solutions Architect. I design, build, and deploy production AI — real-time computer vision on RTSP, agentic systems with MCP and HITL gates, RAG platforms, and bank-grade data protection. Currently running two Forward Deployed engagements across automotive and travel.',
  longBio:
    `AI Engineer & AI Solutions Architect with roughly 10 years across technology, engineering, and corporate operations — about 6 in software and ~4 in AI/ML, the last ~2 focused on production systems. I architect real-time video-analytics platforms on Azure, four-stage HITL facial-recognition systems, MCP-native agentic observability stacks, and bank-grade PII tokenization vaults. I work as a Forward Deployed Engineer — embedding with clients, mapping their operations, and shipping AI they can actually run. Currently running two active FDE engagements and founded ZumfluxAI to deliver this work.`
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
      'For confidential engagements, a working prototype is only the first step. I build AI systems with operational validation, audit trails, and deployment controls.',
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
      'OpenAI', 'Anthropic Claude', 'Gemini',
      'MCP Servers (built & deployed)', 'Multi-Agent Orchestration',
      'HITL Controls', 'RAG', 'FAISS', 'LangGraph',
      'Pydantic Structured Outputs'
    ]
  },
  {
    name: 'AI / Computer Vision',
    icon: 'Camera',
    items: ['Ultralytics', 'OpenVINO', 'ONNX', 'OpenCV', 'DeepFace · SFace', 'RTSP multi-camera', 'FAISS']
  },
  {
    name: 'Engineering',
    icon: 'Server',
    items: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets']
  },
  {
    name: 'Infrastructure',
    icon: 'Boxes',
    items: ['Docker', 'GitHub Actions', 'Kubernetes', 'Azure', 'Prometheus', 'Grafana', 'Nginx', 'Linux']
  }
] as const;

export const techMarquee = [
  'Python', 'TypeScript', 'FastAPI', 'Next.js',
  'OpenAI', 'Anthropic', 'MCP',
  'Ultralytics', 'YOLO26n', 'OpenCV', 'OpenVINO',
  'PostgreSQL', 'Redis',
  'Docker', 'Azure',
  'LangGraph', 'FAISS',
  'Prometheus', 'Grafana'
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
      'Ultralytics · YOLO26n · ONNX · OpenVINO',
      'Facial Recognition (DeepFace, SFace)',
      'RTSP multi-camera ingestion',
      '4-stage enrollment → HITL → embedding → inference',
      'Production-line counting & anomaly detection'
    ]
  },
  {
    title: 'LLM Engineering',
    blurb: 'RAG, structured outputs, document intelligence, and provider-agnostic LLM gateways.',
    items: [
      'OpenAI · Anthropic · Grok · Gemini',
      'Retrieval-Augmented Generation',
      'Embeddings & Vector Search',
      'FAISS · Pinecone · pgvector',
      'Document Intelligence · OCR · Contract AI',
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
    title: 'Cloud Architecture',
    blurb: 'End-to-end architecture design for scalable, secure, and production-ready applications.',
    items: [
      'Alibaba Cloud architecture patterns',
      'Full application architecture design',
      'Scalable compute, storage, and networking',
      'High availability, disaster recovery, and observability',
      'Security, IAM, and cost-aware design',
      'Mock exam preparation for Alibaba Cloud architecture'
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
      'Corporate governance · board coordination',
      'Contract review · regulatory compliance'
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
    role: 'AI Solutions Engineer & Full-Stack AI',
    company: 'Arwen Tech',
    location: 'Islamabad, Pakistan',
    period: '2024 — Present',
    current: true,
    bullets: [
      'End-to-End AI Delivery — Progressed from Software Engineer into AI-focused solution ownership, leading requirements, architecture, full-stack development, AI integration, testing, and on-prem/cloud deployment.',
      'FBR Video Analytics — Architected a real-time production-counting system using RTSP, YOLO26n, ONNX/OpenVINO CPU inference, LAP multi-object tracking, anomaly/stoppage detection, and FastAPI. Containerized and deployed on Microsoft Azure Container Apps; demonstrated on-site with rollout updates in progress.',
      'Facial Recognition Attendance — Architected a four-stage NDA-protected system: enrollment → live RTSP candidate retrieval → human verification → embedding generation/inference. Built multi-camera processing with OpenCV SFace, FAISS, and confidence-based routing; validated in an internal on-prem environment.',
      'Agentic Notifications — Engineered an event-driven notification microservice for email, WhatsApp, and FCM using LLM-generated context-aware messaging with deterministic fallback. FastAPI + Celery + Redis, with retries, ClamAV scanning, and decoupled processing.',
      'Customer Experience Portal — Designed and shipped an enterprise platform covering SLA lifecycle, contract onboarding, ticketing, assets, users, notifications, and workflow automation using FastAPI, Next.js, JWT, WebSockets, Celery, async PostgreSQL, and rate limiting.',
      'Document AI — Built an asynchronous OCR/document-ingestion service using PaddleOCR, pdfplumber, python-docx, FastAPI, MIME validation, and audit-grade structured logging for extracting and processing enterprise documents.',
      'Agentic Observability — Delivered a Prometheus → Alertmanager → AI Alert Analyzer pipeline for root-cause analysis, severity assessment, and recommended actions, with self-validating PromQL rules and a native MCP server using Claude SDK + FastAPI.',
      'Platform Engineering — Standardized containerized deployment and CI/CD across delivered services using Docker Compose and GitHub Actions, supporting repeatable development-to-production delivery.'
    ],
    stack: [
      'Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Azure', 'Ultralytics', 'YOLO26', 'ONNX', 'OpenVINO', 'RTSP', 'OpenCV', 'FAISS', 'PaddleOCR', 'Prometheus', 'Alertmanager', 'LLMs', 'RAG', 'MCP', 'Claude SDK', 'GitHub Actions']
  },
  {
  role: 'Founder · Full-Stack Developer · Applied Generative AI · FDE',
  company: 'ZUMFluxAI',
  period: '2023 — Present',
  location: 'Pakistan',
  current: true,

  bullets: [
    'Founded ZUM Service Providers and delivered client solutions end-to-end — owning discovery, architecture, full-stack development, integration, deployment, and technical delivery.',
    'Official Tourism Platform — Designed and delivered a production WordPress website with responsive layouts, custom visual theming, structured tourism content, destination showcases, and publication-focused sections, creating a maintainable digital presence for a national tourism organization while keeping the client identity confidential.',
    'Discovery & Booking Platform — Designed a customer-facing discovery and booking experience, translating business requirements into intuitive search, exploration, and booking workflows. Client identity and project-specific details remain confidential.',
    'Corporate Affairs · Contract FDE — Translated business and operational requirements into deployed application workflows and integrations, bridging stakeholders and hands-on engineering through implementation and troubleshooting.',
    'Delivered full-stack applications across React/Next.js frontends, backend APIs, relational databases, authentication, third-party integrations, and Linux-based deployments.',
    'Introduced Applied Generative AI into client solutions through LLM-assisted workflows, intelligent information processing, and task automation.',
    'Established a hands-on delivery model spanning requirements → solution design → implementation → testing → deployment → production support, enabling direct ownership of the complete client solution lifecycle.',
    'Managed projects end-to-end across discovery, solution design, implementation, testing, deployment, troubleshooting, and direct client communication.'
  ],

  stack: [
    'Python', 'JavaScript', 'React', 'Next.js', 'REST APIs', 'SQL', 'Full-Stack Development', 'Generative AI', 'LLM Integration', 'System Integration', 'Linux', 'FDE', 'Technical Delivery'
  ],
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

export const projects = [
  // ── Career / Enterprise Projects ──────────────────────────────────
  {
    title: 'Video Analytics',
    slug: 'video-analytics',
    tagline: 'Ultralytics YOLO26n + OpenVINO production-line counting · NDA-protected engagement',
    description:
      'Architected a production computer-vision system for an NDA-protected engagement. Ultralytics YOLO26n detection is exported through ONNX to OpenVINO for CPU inference, with lap multi-object tracking, multi-line and multi-SKU counting on live RTSP feeds, timestamped events, and dashboard views by SKU, line, batch, and shift. Containerized and deployed on Microsoft Azure Container Apps. Demonstrated on-site; minor updates are in progress before full rollout.',
    tags: ['Ultralytics', 'YOLO26n', 'OpenVINO', 'ONNX', 'Object tracking', 'OpenCV', 'RTSP', 'FastAPI', 'PostgreSQL', 'Docker', 'Microsoft Azure'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'NDA-Protected Engagement',
    sector: 'Enterprise',
    extraTag: 'Demoed on-site',
    category: 'career'  },
  {
    title: 'Agentic AI Contract Intelligence Platform',
    slug: 'agentic-contract-intelligence',
    tagline: 'NDA-protected engagement · Multi-agent RAG for contract intelligence and workflow automation',
    description:
      'NDA-protected Forward Deployed Engineering engagement. Built deterministic document extraction (regex, OCR, rule-based parsing, LLM-assisted validation) and a PostgreSQL (pgvector) RAG knowledge base for semantic search and question answering. A LangGraph multi-agent architecture using Python, FastAPI, and Claude handles ingestion, extraction, validation, retrieval, workflow automation, and audit logging.',
    tags: ['LangGraph', 'Claude', 'RAG', 'pgvector', 'FastAPI', 'Python', 'OCR', 'Multi-Agent', 'Document Intelligence'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'FDE \u00b7 Agentic RAG',
    sector: 'Enterprise',
    extraTag: 'Completed',
    category: 'career'  },
  {
    title: 'Facial Recognition Attendance System',
    tagline: '4-stage HITL facial recognition on multi-camera RTSP',
    description:
      'Designed a four-stage HITL facial-recognition attendance system for an NDA-protected engagement. Pipeline: enrollment \u2192 candidate retrieval from live RTSP \u2192 human verification \u2192 embedding generation \u2192 real-time inference and attendance logging. Validated in an internal on-premises environment; further engagement details are withheld.',
    tags: ['DeepFace \u00b7 SFace', 'OpenCV', 'FAISS', 'RTSP', 'FastAPI', 'HITL'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Enterprise \u00b7 HITL',
    sector: 'Enterprise',
    extraTag: 'Live \u00b7 on-prem',
    category: 'career'  },
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
    title: 'Confidential Organization — Corporate Web Platform',
    tagline: 'Corporate website and online commerce',
    description:
      'Designed and delivered a corporate website and online commerce experience during a digital operations role. Organization details are withheld under confidentiality obligations.',
    tags: ['WordPress', 'E-commerce', 'API Integrations', 'Digital Operations'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'NDA-Protected',
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
    featured: true,
    highlight: 'FDE \u00b7 ZumfluxAI',
    sector: 'ZumfluxAI',
    extraTag: 'In Progress',
    category: 'zumfluxai'  },
  {
    title: 'NDA-Protected Client — Publishing Website',
    tagline: 'Content-focused website · React + Vite',
    description:
      'Designed and built a content-first single-page website using React and Vite, with custom theming and a publication showcase. Client identity and content are withheld.',
    tags: ['React 18', 'Vite', 'Lucide', 'Tailwind'],
    repo: null,
    demo: null,
    videoUrl: null,
    featured: true,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    category: 'zumfluxai'  },
  {
    title: 'NDA-Protected Client — Booking Experience',
    tagline: 'Booking experience · live prototype',
    description:
      'Designed a discovery and booking experience for a client engagement. Client identity, business domain, and project details are withheld under confidentiality obligations.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'ZumfluxAI \u00b7 Client',
    sector: 'ZumfluxAI',
    extraTag: 'Live prototype',
    category: 'zumfluxai'  },
  {
    title: 'NDA-Protected Client — Personal Website',
    tagline: 'Forward Deployed Engineering · personal web presence',
    description:
      'Designed and built a personal website with the client. Identity and identifying details are withheld under confidentiality obligations.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'FDE \u00b7 ZumfluxAI',
    sector: 'ZumfluxAI',
    extraTag: 'Live',
    category: 'zumfluxai'  },
  {
    title: 'NDA-Protected Client — Corporate Website',
    tagline: 'Multilingual corporate website',
    description:
      'Designed and built a multilingual corporate website with service pages, project portfolio, supplier information, and testimonials. Client identity and identifying details are withheld.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel', 'Multi-language'],
    repo: null,
    demo: null,
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
  tagline: 'AI Engineering Studio — production AI systems for teams shipping real-world products.',
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
  recentClients: [] as { name: string; kind: string; url?: string }[],
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
    'Beyond building AI products, I help organizations adopt AI the right way — turning repetitive work into automation.',
  services: [
    {
      icon: 'Workflow',
      badge: 'Consultancy',
      title: 'AI Automation Consultancy',
      description:
        'I map your workflows, find the bottlenecks worth fixing, and design AI + automation that frees your team to focus on higher-value work.',
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
    }
  ],
  trainingLink: {
    text: 'I also offer AI training & enablement for small teams.',
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
//  Stats — key metrics displayed in the Hero section stats strip
//  Used by: Hero.tsx
// ---------------------------------------------------------------------

export const stats = [
  { label: 'Active FDE client engagements', value: '2' },
  { label: 'Yrs across tech, engineering & ops · 6+ software · 4+ AI/ML', value: '9+' },
  { label: 'Systems & projects — prototype to production', value: '12+' },
  { label: 'AI certifications', value: '6' }
];

// ---------------------------------------------------------------------
//  Currently learning — books / textbooks / online courses
//  Used by: About.tsx (renders when items array is non-empty)
// ---------------------------------------------------------------------

export const currentlyLearning = {
  label: 'Currently studying',
  items: [] as { title: string; author: string; blurb: string; cover: string; coverAlt?: string; url: string | null }[]
};
