// =====================================================================
//  Maria Naseem — Portfolio Data
//  Update this single file to change content across the site.
// =====================================================================

export const personal = {
  name: 'Maria Naseem',
  firstName: 'Maria',
  initials: 'MN',
  title: 'AI / ML Engineer / Full-Stack Developer',
  taglines: [
    'AI Solutions Architect',
    'Agentic AI · MCP · HITL',
    'Computer Vision Engineer',
    'Government & Enterprise AI',
    'Founder @ ZumfluxAI'
  ],
  location: 'Islamabad, Pakistan',
  email: 'marianaseem99@gmail.com',
  businessEmail: 'zumfluxai@gmail.com',
  phone: '+92 306 6775777',
  github: 'https://github.com/Maria-cpp',
  linkedin: 'https://www.linkedin.com/in/maria-naseem-343594128/',
  resumeUrl: '/Maria_Naseem_CV.pdf',
  shortBio:
    'AI Solutions Architect shipping production AI for regulated and government clients. Federal Track & Trace video analytics, four-stage HITL facial-recognition for a provincial-government secretariat, and an MCP-native agentic observability stack — all in production-grade Python + Next.js.',
  longBio:
    'I architect AI systems for regulated and government delivery — the kind that have to pass live demonstrations, audit trails, and ministry-level scrutiny. With 5+ years building AI and 10+ years professional experience, I lead architecture for a Federal Track & Trace video-analytics platform under Chapter XIV-BA compliance, a four-stage HITL facial-recognition AMS for a Provincial Government Secretariat, and an MCP-server-native agentic observability stack. I also founded ZumfluxAI to deliver this craft to teams shipping real-world AI products. Beyond engineering, I bring rare stakeholder fluency — coordinating BOD-level meetings and engaging with provincial secretaries, federal ministers, GHQ, SIFC, and the Law Directorate during my time leading corporate and government affairs at a national tourism body.'
};

// ---------------------------------------------------------------------
//  About — vision / expertise / innovation (inspired by ali-ch.dev)
// ---------------------------------------------------------------------

export const aboutPillars = [
  {
    label: 'Vision',
    title: 'AI that survives audit',
    description:
      'For regulated and government clients, "it works in a notebook" is the start, not the end. I build AI systems that pass live demonstrations, carry audit trails, and operate under compliance frameworks like FBR Chapter XIV-BA.',
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
    title: 'From prototype to production demo in weeks',
    description:
      'A federal video-analytics prototype built and demo-ready inside a regulator authorization window. A four-stage HITL AMS architected and deployed at a provincial secretariat. I move fast — and document the path so reviewers, auditors, and senior architects can follow it.',
    accent: 'pink'
  }
] as const;

// ---------------------------------------------------------------------
//  Tech stack — grouped, marquee-friendly
// ---------------------------------------------------------------------

export const techCategories = [
  {
    name: 'Agentic AI & LLMs',
    icon: 'Brain',
    items: [
      'OpenAI', 'Anthropic Claude', 'Grok', 'Gemini',
      'MCP Servers (built & deployed)', 'Multi-Agent Orchestration',
      'HITL Controls', 'RAG', 'FAISS', 'Pinecone',
      'Pydantic Structured Outputs', 'LangChain'
    ]
  },
  {
    name: 'Computer Vision',
    icon: 'Camera',
    items: ['YOLOv8 / Ultralytics', 'OpenCV', 'DeepFace · SFace', 'lap (tracking)', 'RTSP Multi-camera', 'Production-line analytics']
  },
  {
    name: 'Backend',
    icon: 'Server',
    items: ['FastAPI', 'Python', 'Node.js', 'Redis', 'Celery', 'PostgreSQL', 'MySQL', 'WebSockets']
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    items: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'Framer Motion']
  },
  {
    name: 'MLOps & Observability',
    icon: 'Activity',
    items: ['Grafana', 'Prometheus', 'Alertmanager', 'structlog', 'Docker health checks', 'Agentic alert analysis']
  },
  {
    name: 'DevOps',
    icon: 'Boxes',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'Nginx', 'CI/CD', 'systemd', 'certbot']
  }
] as const;

export const techMarquee = [
  'Python', 'TypeScript', 'FastAPI', 'Next.js', 'React',
  'OpenAI', 'Anthropic', 'Gemini', 'Grok',
  'MCP', 'YOLOv8', 'OpenCV', 'DeepFace',
  'PostgreSQL', 'Redis', 'Celery',
  'Docker', 'GitHub Actions', 'Tailwind CSS',
  'Pinecone', 'FAISS', 'LangChain',
  'Grafana', 'Prometheus', 'Alertmanager',
  'Playwright', 'Node.js', 'Streamlit'
];

// ---------------------------------------------------------------------
//  Skills — grid card view (inspired by abbasraza.dev)
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
      'Pydantic Structured Outputs'
    ]
  },
  {
    title: 'Computer Vision',
    blurb: 'Production CV pipelines on live RTSP — from secretariat AMS to factory-line analytics.',
    items: [
      'YOLOv8 / Ultralytics + lap tracking',
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
      'Prompt Engineering & guardrails'
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
      'Microservices · structlog'
    ]
  },
  {
    title: 'Frontend',
    blurb: 'Modern React stacks for AI-driven dashboards and operator tools.',
    items: [
      'Next.js 14 (App Router)',
      'React · TypeScript',
      'Tailwind CSS',
      'Streamlit (rapid prototyping)',
      'Framer Motion'
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
//  Experience timeline (inspired by aaabadcode.com)
// ---------------------------------------------------------------------

export const experience = [
  {
    role: 'AI Solutions Architect & Full-Stack Developer',
    company: 'Arwen Tech',
    location: 'Islamabad, Pakistan',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Architected the technical solution for an AI/ML-based real-time video analytics and production-counting system being prepared for vendor authorization under FBR\'s Chapter XIV-BA framework (Sales Tax Rules, 2006) — covering production-line monitoring for Third Schedule goods. Built real-time RTSP video pipelines with YOLOv8 (custom-trained), multi-object tracking (lap), production-line counting, anomaly and stoppage detection, and FastAPI services designed for real-time transmission to a Central Control Unit (CCU). Currently in demonstration / approval phase.',
      'Architected and prepared for deployment a Facial-Recognition Attendance Management System for a Pakistani provincial government secretariat — a four-stage CV pipeline (face enrollment → similarity-based candidate retrieval from live RTSP streams → HITL verification gate → embedding generation and real-time attendance inference). Multi-camera RTSP ingestion with OpenCV SFace embeddings, FAISS index, threshold-based confidence routing, and a scalable architecture designed for thousands of government employees. Currently in demonstration / approval phase.',
      'Engineered an agentic notification microservice — a multi-channel orchestrator (email, WhatsApp, FCM push) using LLM-driven context-aware message generation with deterministic template fallback for guaranteed delivery. Built on FastAPI + Celery + Redis with retry handling, ClamAV virus scanning, and decoupled event-driven processing.',
      'Designed and shipped the Customer Experience Portal — full SLA lifecycle, contract onboarding, and workflow automation. FastAPI + Next.js + JWT + WebSocket live updates, Celery workers, async Postgres, fastapi-limiter rate limiting.',
      'Built a Document AI / OCR ingestion service using PaddleOCR + pdfplumber + python-docx with async FastAPI, MIME validation, and audit-grade structured logging.',
      'Delivered the Agentic Observability Platform — Prometheus → Alertmanager → AI Alert Analyzer (root-cause, severity, next-actions) with self-validating PromQL rules and a native MCP (Model Context Protocol) server for tool integration. Anthropic Claude SDK + FastAPI.',
      'Standardised multi-service deployment via Docker Compose and GitHub Actions CI/CD across all delivered microservices.'
    ],
    stack: ['FastAPI', 'YOLOv8', 'OpenCV', 'MCP', 'Next.js', 'Redis', 'Celery', 'Docker', 'Prometheus', 'Gemini', 'Anthropic Claude', 'PaddleOCR']
  },
  {
    role: 'Founder',
    company: 'ZumfluxAI',
    location: 'Remote',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Founded ZumfluxAI to deliver production AI engineering — agentic systems, computer vision pipelines, and full-stack AI platforms for teams shipping real-world products.',
      'Active client engagements: SitesBuildOps (construction-finance fraud-detection platform) and the Nauman Afzal author portfolio.'
    ],
    stack: ['Agentic AI', 'LLMs', 'Computer Vision', 'FastAPI', 'Next.js', 'Vite']
  },
  {
    role: 'Executive Coordinator — Corporate & Government Affairs | Digital Operations',
    company: 'Green Tourism Pvt. Ltd.',
    location: 'Islamabad, Pakistan',
    period: '2024 — 2025',
    bullets: [
      'Operated as the bridge between the CEO and federal/provincial stakeholder ecosystem: provincial secretaries and additional secretaries across all four provinces, ministerial offices, GHQ liaison, SIFC (Special Investment Facilitation Council), and the Law Directorate. Coordinated BOD meetings end-to-end including agenda preparation, MOMs, and follow-through on resolutions.',
      'Concurrently led digital operations — corporate web presence, e-commerce, API integrations, and workflow automation.'
    ],
    stack: ['Stakeholder Engagement', 'BOD Operations', 'Government Liaison', 'Digital Operations']
  },
  {
    role: 'Co-Founder & Full-Stack Developer',
    company: 'ZUM Services Providers',
    location: 'Pakistan',
    period: '2023 — 2025',
    bullets: [
      'Co-founded a multi-services company and served as the primary technical lead, driving architecture, system design, and end-to-end delivery across the full stack (FastAPI, Next.js, PostgreSQL, Docker). Established CI/CD practices using GitHub Actions and automated release pipelines.',
      'Designed and delivered solar solution proposals and technical system layouts while leading all digital operations, including website development, marketing initiatives, branding, and digital content creation.'
    ],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'GitHub Actions']
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
//  Featured projects
// ---------------------------------------------------------------------

export const projects = [
  {
    title: 'Federal Track & Trace Video Analytics',
    tagline: 'YOLOv8 production-line counting under Chapter XIV-BA',
    description:
      'Architected for a federal regulator under Pakistan\'s Track & Trace authorization framework (Chapter XIV-BA). YOLOv8 + Ultralytics object detection with lap tracking, multi-line and multi-SKU production counting on live RTSP feeds, real-time event triggering with timestamped records, and dashboard views per SKU/line/batch/shift. Status: prototype, demonstration-ready.',
    tags: ['YOLOv8', 'Ultralytics', 'OpenCV', 'RTSP', 'FastAPI', 'PostgreSQL', 'Docker'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Government · Chapter XIV-BA',
    sector: 'Government'
  },
  {
    title: 'Provincial Government Secretariat AMS',
    tagline: '4-stage HITL facial recognition on multi-camera RTSP',
    description:
      'Designed a four-stage HITL Facial Recognition Attendance Management System for a provincial-government secretariat. Pipeline: face enrollment → similarity-based candidate retrieval from live RTSP → human-in-the-loop verification gate → embedding generation → real-time inference and attendance logging. Multi-camera architecture scales from 40+ employees to thousands. Status: prototype, demonstration-ready.',
    tags: ['DeepFace · SFace', 'OpenCV', 'FAISS', 'RTSP', 'FastAPI', 'HITL'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Government · HITL',
    sector: 'Government'
  },
  {
    title: 'Customer Experience Portal (CXP)',
    tagline: 'Contract lifecycle automation with Gemini-assisted workflows',
    description:
      'End-to-end customer experience portal — contract onboarding through full SLA lifecycle, contract tracking, workflow automation, and Gemini-powered assistant. Stack: FastAPI · Celery · Notifications microservice · Next.js · PostgreSQL · Redis · Nginx. Production-ready Docker compose splits (dev/prod) with systemd unit files and certbot SSL.',
    tags: ['FastAPI', 'Next.js', 'Celery', 'PostgreSQL', 'Redis', 'Gemini', 'Docker', 'WebSockets'],
    repo: null,
    demo: null,
    videoUrl: '/videos/chat base FTE creation.mp4',
    featured: true,
    highlight: 'Enterprise · SaaS'
  },
  {
    title: 'Agentic Observability Platform',
    tagline: 'MCP-native AI alert analyzer on Grafana + Prometheus',
    description:
      'Dockerized observability stack with a built and deployed MCP server. AI Alert Analyzer performs root-cause inference, severity classification, and recommended next actions. Self-validating PromQL rules and dashboards against live Prometheus.',
    tags: ['FastAPI', 'MCP', 'Prometheus', 'Grafana', 'Alertmanager', 'LLM Agents', 'Docker'],
    repo: 'https://github.com/Maria-cpp/Agentic-Observability-Platform',
    demo: null,
    featured: true,
    highlight: 'MCP Server'
  },
  {
    title: 'SitesBuildOps',
    tagline: 'Construction-finance ledger with AI fraud detection',
    description:
      'Centralized finance, ledger, and fraud-detection platform for construction companies managing multiple sites, vendors, and contractors. Features purchase tracking, ledger reconciliation, duplicate detection engine, audit logging, and AI-assisted fraud prevention. Phase 0 prototype shipped; Phase 1 in progress.',
    tags: ['Next.js 14', 'FastAPI', 'PostgreSQL 17', 'Alembic', 'Docker', 'Redis', 'S3 / MinIO'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'ZumfluxAI · Client',
    sector: 'ZumfluxAI'
  },
  {
    title: 'Nauman Afzal — Author Portfolio',
    tagline: 'Bibliophile · Author of Mudslinging & Budhoo',
    description:
      'Designed and built the official author portfolio for Nauman Afzal — author of Mudslinging and Budhoo. Clean, content-first React + Vite single-page site with custom theming, Lucide iconography, and a books showcase.',
    tags: ['React 18', 'Vite', 'Lucide', 'Tailwind'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'ZumfluxAI · Client',
    sector: 'ZumfluxAI'
  },
  {
    title: 'FTE Sales Lead Engine',
    tagline: 'Browser automation × AI scoring × HITL review',
    description:
      'Playwright-based lead discovery, file-watcher trigger pipelines, AI-driven lead scoring and qualification, and a Human-in-the-Loop review layer — reducing manual outreach effort by ~80%.',
    tags: ['Playwright', 'Python', 'LLM', 'HITL'],
    repo: null,
    demo: null,
    videoUrl: '/videos/FTE video.mp4',
    highlight: 'Automation'
  },
  {
    title: 'Multi-Channel Notification Microservice',
    tagline: 'Grok LLM + Redis/Celery message orchestrator',
    description:
      'Agentic notification service routing across email, SMS, Slack, WhatsApp. Grok LLM produces context-aware messages with predefined template fallback for guaranteed delivery; Redis + Celery handle async queue, retry, and decoupled processing.',
    tags: ['Grok LLM', 'Redis', 'Celery', 'FastAPI'],
    repo: null,
    demo: null,
    highlight: 'Microservice'
  },
  {
    title: 'Gesture AI Website',
    tagline: 'Touchless interaction via webcam hand-gestures',
    description:
      'Computer vision web app integrating real-time hand-gesture detection with a Next.js frontend. Demonstrates browser-based ML inference for touchless UI experiments.',
    tags: ['Computer Vision', 'Next.js', 'MediaPipe'],
    repo: 'https://github.com/Maria-cpp/gesture_ai_website',
    demo: null,
    videoUrl: '/videos/Gesture based website.mp4'
  },
  {
    title: 'Document AI / Bulk Data Import',
    tagline: 'OCR + async ingestion with audit logging',
    description:
      'Async FastAPI service combining PaddleOCR + pdfplumber + python-docx for document AI ingestion, MIME validation, and audit-grade structured logging. Scalable bulk-data import pipeline with validation rules and optimized database patterns for high-volume workloads.',
    tags: ['FastAPI', 'PaddleOCR', 'pdfplumber', 'PostgreSQL', 'Python', 'Docker'],
    repo: 'https://github.com/Maria-cpp/Bulk-data-import',
    demo: null
  }
];

// ---------------------------------------------------------------------
//  Certifications
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
    name: 'FTE (Full-Time Equivalent) AI Program',
    issuer: 'PIAIC / Panaversity',
    year: '2026',
    status: 'Completed · 81%',
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
    status: 'In Progress',
    pdfUrl: null
  }
];

// ---------------------------------------------------------------------
//  ZumfluxAI — founder section
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
    }
  ],
  cta: 'Hire ZumfluxAI'
};

// ---------------------------------------------------------------------
//  Education
// ---------------------------------------------------------------------

export const education = [
  {
    degree: 'Master of Information Technology',
    school: 'Quaid-e-Azam University',
    year: '2016'
  }
];

// ---------------------------------------------------------------------
//  Stats (for hero / about strip)
// ---------------------------------------------------------------------

export const stats = [
  { label: 'Years building AI systems', value: '5+' },
  { label: 'Production projects shipped', value: '12+' },
  { label: 'AI / Agentic certifications', value: '5' },
  { label: 'Founded company', value: '1' }
];

// ---------------------------------------------------------------------
//  Currently learning — books / textbooks / online courses
// ---------------------------------------------------------------------

export const currentlyLearning = {
  label: 'Currently studying',
  items: [
    {
      title: 'AI-Native Textbook for Physical AI & Humanoid Robotics',
      author: 'Online textbook',
      blurb:
        'Embodied AI, ROS 2 fundamentals, Gazebo / Unity, NVIDIA Isaac, Vision-Language-Action, humanoid and conversational robotics — bridging my LLM/agentic background into physical-AI systems.',
      cover: '/images/physical-ai-textbook-1.png',
      coverAlt: '/images/physical-ai-textbook-2.png',
      url: null
    }
  ]
};
