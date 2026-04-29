// =====================================================================
//  Maria Naseem — Portfolio Data
//  Update this single file to change content across the site.
// =====================================================================

export const personal = {
  name: 'Maria Naseem',
  firstName: 'Maria',
  initials: 'MN',
  title: 'AI / ML Engineer',
  taglines: [
    'Agentic AI Architect',
    'Computer Vision Engineer',
    'Full-Stack Developer',
    'Founder @ ZumfluxAI'
  ],
  location: 'Islamabad, Pakistan',
  email: 'marianaseem99@gmail.com',
  phone: '+92 306 6775777',
  github: 'https://github.com/Maria-cpp',
  linkedin: 'https://www.linkedin.com/in/maria-naseem-343594128/',
  resumeUrl: '/Maria_Naseem_CV.pdf',
  shortBio:
    'AI Engineer & Solution Architect shipping production-grade intelligent systems — from multi-camera computer vision pipelines to agentic LLM platforms and autonomous observability stacks.',
  longBio:
    'I build intelligent systems that think, see, and act. With 4+ years across AI engineering and full-stack development, I architect production-grade platforms — facial-recognition attendance running on multi-camera RTSP streams, agentic observability with AI-driven root-cause analysis, and multi-channel notification microservices powered by LLMs. Currently focused on AI Platform Engineering and autonomous system architecture, I founded ZumfluxAI to bring this craft to teams shipping real-world AI products.'
};

// ---------------------------------------------------------------------
//  About — vision / expertise / innovation (inspired by ali-ch.dev)
// ---------------------------------------------------------------------

export const aboutPillars = [
  {
    label: 'Vision',
    title: 'AI that ships, not demos',
    description:
      'I believe the next decade belongs to teams that turn LLM capability into production systems. Real value lives in pipelines that handle 10k requests, recover from failure, and scale beyond the demo.',
    accent: 'cyan'
  },
  {
    label: 'Expertise',
    title: 'Agentic systems & computer vision',
    description:
      'Deep hands-on with multi-agent orchestration, RAG pipelines, real-time RTSP processing, and FastAPI/Next.js stacks. I bridge the gap between research-grade ML and battle-tested infrastructure.',
    accent: 'lime'
  },
  {
    label: 'Innovation',
    title: 'From prototype to platform in weeks',
    description:
      'Shipped a facial-recognition AMS in 2 weeks against a client bid. Built an agentic observability stack that auto-analyzes Prometheus alerts. I move fast — and document the path so teams can move with me.',
    accent: 'pink'
  }
] as const;

// ---------------------------------------------------------------------
//  Tech stack — grouped, marquee-friendly
// ---------------------------------------------------------------------

export const techCategories = [
  {
    name: 'AI / ML',
    icon: 'Brain',
    items: [
      'OpenAI', 'Anthropic Claude', 'Grok', 'Gemini', 'YOLO', 'OpenCV',
      'DeepFace', 'FAISS', 'Pinecone', 'LangChain', 'RAG', 'Pydantic AI'
    ]
  },
  {
    name: 'Backend',
    icon: 'Server',
    items: ['FastAPI', 'Python', 'Node.js', 'Redis', 'Celery', 'PostgreSQL', 'MySQL', 'WebSockets']
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'Framer Motion']
  },
  {
    name: 'DevOps',
    icon: 'Boxes',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'Nginx', 'CI/CD']
  },
  {
    name: 'Automation',
    icon: 'Zap',
    items: ['Playwright', 'MCP Servers', 'File Watchers', 'Webhooks', 'Cron']
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Grafana', 'Prometheus', 'Figma']
  }
] as const;

// Flat list for marquee
export const techMarquee = [
  'Python', 'TypeScript', 'FastAPI', 'Next.js', 'React', 'OpenAI', 'Anthropic',
  'YOLO', 'OpenCV', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'GitHub Actions',
  'Tailwind CSS', 'Pinecone', 'FAISS', 'LangChain', 'Grafana', 'Prometheus',
  'Playwright', 'Node.js', 'Streamlit', 'Linux'
];

// ---------------------------------------------------------------------
//  Skills — grid card view (inspired by abbasraza.dev)
// ---------------------------------------------------------------------

export const skillGroups = [
  {
    title: 'Agentic AI',
    blurb: 'Multi-agent orchestration, MCP servers, autonomous workflows.',
    items: [
      'OpenAI / Claude Agents SDK',
      'Multi-Agent Orchestration',
      'MCP Server (Gmail, Calendar)',
      'Pydantic Structured Outputs',
      'Tool-use & Function Calling'
    ]
  },
  {
    title: 'Computer Vision',
    blurb: 'Real-time recognition on live RTSP and webcam streams.',
    items: [
      'Facial Recognition (DeepFace, SFace)',
      'Object Detection (YOLO, custom)',
      'RTSP Stream Processing',
      'Multi-camera Pipelines',
      'OpenCV'
    ]
  },
  {
    title: 'LLM Engineering',
    blurb: 'RAG, prompt engineering, structured output across providers.',
    items: [
      'OpenAI · Anthropic · Grok · Gemini',
      'Retrieval-Augmented Generation',
      'Embeddings & Vector Search',
      'FAISS · Pinecone',
      'Prompt Engineering'
    ]
  },
  {
    title: 'Backend & APIs',
    blurb: 'Production-grade Python services with async + queues.',
    items: [
      'FastAPI · Python',
      'Redis + Celery',
      'PostgreSQL · MySQL',
      'WebSockets · REST',
      'Microservices'
    ]
  },
  {
    title: 'Frontend',
    blurb: 'Modern React stacks for AI-driven dashboards.',
    items: [
      'Next.js 14 (App Router)',
      'React · TypeScript',
      'Tailwind CSS',
      'Streamlit (rapid prototyping)',
      'Framer Motion'
    ]
  },
  {
    title: 'DevOps',
    blurb: 'Container-first deployments with CI/CD.',
    items: [
      'Docker · Docker Compose',
      'GitHub Actions CI/CD',
      'Linux · Nginx',
      'Grafana · Prometheus',
      'Alertmanager'
    ]
  }
];

// ---------------------------------------------------------------------
//  Experience timeline (inspired by aaabadcode.com)
// ---------------------------------------------------------------------

export const experience = [
  {
    role: 'AI Solution Architect & Full Stack Developer',
    company: 'Arwen Tech',
    location: 'Islamabad, Pakistan',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Deployed a Facial Recognition Attendance Management System in 2 weeks against a client bid — multi-camera RTSP, OpenCV SFace embeddings, threshold-based confidence verification, and color-coded match indicators across 40+ employees.',
      'Built a Video Analytics Object Detection platform on live CCTV streams with trained ML models, real-time bounding-box classification, timestamped event records, and alert triggers.',
      'Engineered an agentic notification microservice (email · SMS · Slack · WhatsApp) using Grok LLM for context-aware messaging with template fallback, Redis + Celery for async queueing.',
      'Designed a Customer Experience Portal — contract onboarding, SLA lifecycle, workflow automation — on FastAPI · Next.js · JWT · WebSockets.',
      'Built an Agentic Observability Platform monitoring autonomous agent execution, tool calls, and workflow health in real time.'
    ],
    stack: ['FastAPI', 'OpenCV', 'YOLO', 'Next.js', 'Redis', 'Celery', 'Docker']
  },
  {
    role: 'Founder',
    company: 'ZumfluxAI',
    location: 'Remote',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Founded ZumfluxAI to deliver production AI engineering — agentic systems, computer vision pipelines, and full-stack AI platforms for teams shipping real-world products.',
      'Currently engaging with clients on agentic workflow automation and custom LLM integration.'
    ],
    stack: ['Agentic AI', 'LLMs', 'Computer Vision', 'FastAPI', 'Next.js']
  },
  {
    role: 'Executive Coordinator — Corporate & Digital Operations',
    company: 'Green Tourism Private Limited',
    location: 'Islamabad, Pakistan',
    period: '2024 — 2025',
    bullets: [
      'Led digital operations and web solutions including WordPress sites, e-commerce, API integrations, and workflow automation.'
    ],
    stack: ['WordPress', 'WooCommerce', 'REST APIs']
  },
  {
    role: 'Full Stack Developer & Co-Founder',
    company: 'ZUM Services Providers',
    location: 'Pakistan',
    period: '2023 — 2025',
    bullets: [
      'Co-founded technology services company; built full-stack platform on FastAPI · Next.js · PostgreSQL · Docker.',
      'Implemented JWT authentication, modular API design, and automated CI/CD via GitHub Actions for reliable release pipelines.'
    ],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'GitHub Actions']
  },
  {
    role: 'Blockchain Developer',
    company: 'MediaPark',
    location: 'Pakistan',
    period: '2020 — 2022',
    bullets: [
      'Designed decentralized applications and blockchain integrations with ECDSA cryptography, consensus validation, and identity protection.',
      'Built compliance frameworks for smart contract interactions meeting auditability standards.',
      'Optimized blockchain API integrations including ledger queries and access control.'
    ],
    stack: ['Smart Contracts', 'ECDSA', 'Web3', 'API Integration']
  },
  {
    role: 'Intern — ERP & Systems',
    company: 'IBM Pakistan',
    location: 'Pakistan',
    period: 'Jul 2016 — Sep 2016',
    bullets: [
      'Hands-on with ERP systems (PeopleSoft), Maximo configuration, GPON inventory, and resource planning for the PTCL project.'
    ],
    stack: ['PeopleSoft', 'Maximo', 'ERP']
  }
];

// ---------------------------------------------------------------------
//  Featured projects
// ---------------------------------------------------------------------

export const projects = [
  {
    title: 'Agentic Observability Platform',
    tagline: 'AI-driven monitoring stack on Grafana + Prometheus',
    description:
      'Dockerized observability stack with an AI Alert Analyzer that performs root-cause inference, severity classification, and recommends next actions. Self-validating PromQL rules and dashboards against live Prometheus.',
    tags: ['FastAPI', 'Prometheus', 'Grafana', 'Alertmanager', 'LLM Agents', 'Docker'],
    repo: 'https://github.com/Maria-cpp/Agentic-Observability-Platform',
    demo: null,
    featured: true,
    highlight: 'Flagship'
  },
  {
    title: 'Facial Recognition AMS',
    tagline: 'Multi-camera attendance on live RTSP streams',
    description:
      'Production-grade Attendance Management System running across multiple gate cameras. SFace embeddings, threshold-based confidence verification, color-coded match indicators (Red/Orange/Green), scalable to thousands of employee records.',
    tags: ['OpenCV', 'DeepFace', 'RTSP', 'FastAPI', 'PostgreSQL'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Client Project'
  },
  {
    title: 'FTE Sales Lead Engine',
    tagline: 'Browser automation × AI scoring × HITL',
    description:
      'Playwright-based lead discovery, file-watcher trigger pipelines, AI-driven lead scoring and qualification, and a Human-in-the-Loop review layer — reducing manual outreach effort by ~80%.',
    tags: ['Playwright', 'Python', 'LLM', 'HITL'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Automation'
  },
  {
    title: 'Gesture AI Website',
    tagline: 'Touchless interaction via webcam hand-gestures',
    description:
      'Computer vision web app integrating real-time hand-gesture detection with a Next.js frontend. Demonstrates browser-based ML inference for touchless UI experiments.',
    tags: ['Computer Vision', 'Next.js', 'MediaPipe'],
    repo: 'https://github.com/Maria-cpp/gesture_ai_website',
    demo: null,
    featured: true
  },
  {
    title: 'Multi-Channel Notification Microservice',
    tagline: 'Grok LLM + Redis/Celery message orchestrator',
    description:
      'Agentic notification service routing across email, SMS, Slack, WhatsApp. Grok LLM produces context-aware messages with predefined template fallback for guaranteed delivery; Redis + Celery handle async queue, retry, and decoupled processing.',
    tags: ['Grok LLM', 'Redis', 'Celery', 'FastAPI'],
    repo: null,
    demo: null,
    featured: true,
    highlight: 'Microservice'
  },
  {
    title: 'Bulk Data Import System',
    tagline: 'Validated, error-resilient ingestion pipeline',
    description:
      'Scalable bulk-data import pipeline with validation rules, error handling, and optimized database ingestion patterns for high-volume workloads.',
    tags: ['Python', 'PostgreSQL', 'Validation', 'ETL'],
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
    year: '2025',
    status: 'Completed'
  },
  {
    name: 'Agentic AI Level 1 — Developer Fundamentals',
    issuer: 'PIAIC / Panaversity',
    year: '2025',
    status: 'Completed'
  },
  {
    name: 'FTE (Full-Time Equivalent) AI Program',
    issuer: 'PIAIC / Panaversity',
    year: '2025',
    status: 'Completed · 81%'
  },
  {
    name: 'Develop Generative AI Applications: Get Started',
    issuer: 'Coursera',
    year: '2025',
    status: 'Completed · 90%'
  },
  {
    name: 'Build RAG Applications',
    issuer: 'IBM · Coursera',
    year: '2025',
    status: 'Completed'
  },
  {
    name: 'Agentic AI Foundations',
    issuer: 'Self-paced',
    year: '2026',
    status: 'In Progress'
  },
  {
    name: 'AI For Everyone',
    issuer: 'Coursera',
    year: '2026',
    status: 'In Progress'
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
  { label: 'Years building AI systems', value: '4+' },
  { label: 'Production projects shipped', value: '12+' },
  { label: 'AI / Agentic certifications', value: '5' },
  { label: 'Founded company', value: '1' }
];
