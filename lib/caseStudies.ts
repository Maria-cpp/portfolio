// =====================================================================
//  Case Studies — long-form project detail content
//  Rendered at /projects/[slug]. Keyed by `slug`, matched to
//  `projects[].slug` in lib/data.ts.
// =====================================================================

export type CaseStudySection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type Diagram = {
  title: string;
  caption?: string;
  chart: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  org: string;
  period: string;
  status: string;
  summary: string;
  tags: string[];
  stack: { layer: string; tech: string }[];
  diagrams: Diagram[];
  sections: CaseStudySection[];
  businessValue: string;
  repo?: string | null;
  demo?: string | null;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'facial-recognition-attendance',
    title: 'Facial Recognition Attendance System',
    tagline: 'Human-reviewed facial recognition from standard IP camera streams',
    role: 'AI engineering & attendance workflow implementation',
    org: 'Arwen Tech · Confidential engagement',
    period: 'Recent project · During current Arwen Tech role',
    status: 'Internally validated · On-premises environment',
    summary: 'Designed and built a camera-based attendance workflow connecting enrollment, candidate retrieval, human verification, and embedding generation to real-time recognition and attendance logging. Internally validated on-premises; client identity and engagement details are withheld.',
    tags: ['OpenCV', 'SFace', 'DeepFace', 'FAISS', 'RTSP', 'FastAPI', 'HITL'],
    stack: [
      { layer: 'Video ingestion', tech: 'Standard IP cameras, RTSP streams, OpenCV' },
      { layer: 'Face representations', tech: 'DeepFace / OpenCV SFace embeddings' },
      { layer: 'Candidate retrieval', tech: 'FAISS similarity search' },
      { layer: 'Review workflow', tech: 'Human verification before approved candidates enter the recognition index' },
      { layer: 'Backend', tech: 'Python, FastAPI, attendance logging' },
      { layer: 'Validation environment', tech: 'Internal on-premises setup' }
    ],
    sections: [
      {
        heading: 'Business Problem',
        body: 'The engagement required camera-based attendance recognition using existing-style IP camera infrastructure. The engineering challenge was to connect face matching to usable attendance records while retaining human control over candidate identity verification.'
      },
      {
        heading: 'My Role',
        body: 'Designed and built the enrollment, candidate retrieval, human verification, and embedding/inference workflows. Connected live camera processing to similarity search and attendance logging, and validated the system in an internal on-premises environment.'
      },
      {
        heading: 'Solution & Workflow',
        bullets: [
          'Enrollment establishes an initial face representation associated with a known identity.',
          'Candidate retrieval finds potential matches from live RTSP camera streams using face representations and similarity search.',
          'A human verification gate accepts or rejects candidate identity associations before approved examples enter the recognition index.',
          'Approved examples support embedding generation and subsequent real-time inference; recognition outputs connect to attendance logging.'
        ]
      },
      {
        heading: 'Engineering Decisions',
        bullets: [
          'RTSP and OpenCV connect standard IP camera feeds to processing rather than requiring a dedicated biometric camera interface.',
          'SFace embeddings and FAISS separate face representation from candidate search.',
          'Human verification makes index updates explicit and reviewable; it reduces the risk of incorrect associations propagating through subsequent matches.',
          'Match thresholds and uncertain outputs need evaluation under the actual lighting, pose, camera quality, and enrollment conditions.'
        ]
      },
      {
        heading: 'Validation & Current Status',
        body: 'Validated internally in an on-premises environment. This is not presented as completed client rollout or verified organization-wide adoption. Camera count, enrolled-user count, sustained processing rate, false-match and false-rejection rates, and latency are not published.'
      },
      {
        heading: 'Results & Business Value',
        body: 'The implemented result is a connected enrollment-to-attendance workflow with human-reviewed candidate associations. Reduced administration time and recognition accuracy are intended benefits to evaluate, rather than measured outcomes claimed here.'
      },
      {
        heading: 'Recognition Boundaries & Next Validation',
        bullets: [
          'Face similarity is a candidate signal, not a guarantee of identity; human review can also make mistakes.',
          'Evaluate false matches, missed matches, and duplicate attendance events using representative internal reference data.',
          'Biometric data retention, access permissions, and consent requirements must be reviewed for the deployment environment.',
          'Liveness detection and anti-spoofing are not claimed as implemented capabilities in this case study.'
        ]
      },
      {
        heading: 'Supporting Evidence',
        body: 'The architecture diagrams below describe the implemented workflow and its human-review boundary. Source code, biometric samples, and identifying engagement details remain private; no public demo or repository is claimed.'
      }
    ],
    diagrams: [
      {
        title: 'Enrollment & Human-Reviewed Index Building',
        caption: 'Candidate retrieval and human verification precede approved additions to the recognition index.',
        chart: `flowchart TB
    EN["Enrollment<br/>known identity + initial face representation"] --> RET["Candidate retrieval<br/>similarity search"]
    CAM["Standard IP cameras<br/>live RTSP streams"] --> CV["OpenCV<br/>face processing"]
    CV --> RET
    RET --> H["Human verification<br/>check identity association"]
    H -->|approved| EMB["Embedding generation<br/>OpenCV SFace"]
    H -->|rejected| EX["Exclude candidate from index update"]
    EMB --> IDX[("FAISS recognition index")]
    IDX --> RET`
      },
      {
        title: 'Recognition & Attendance Flow',
        caption: 'The index supplies similarity matches for inference; matching performance depends on thresholds and camera conditions.',
        chart: `flowchart LR
    RTSP["Live RTSP frames"] --> CV["OpenCV<br/>face processing"]
    CV --> E["SFace embeddings"]
    E --> S["FAISS similarity search"]
    IDX[("Verified recognition index")] --> S
    S --> M["Recognition result<br/>identity candidate + match score"]
    M --> API["FastAPI attendance workflow"]
    API --> LOG["Attendance records"]`
      }
    ],
    businessValue: 'Connects camera-based recognition to attendance records while keeping candidate index updates under human review. Operational savings and recognition performance remain to be quantified.'
  },
  {
    slug: 'agentic-observability',
    title: 'Agentic Observability Platform',
    tagline: 'Monitoring and AI-assisted alert triage with optional MCP integration',
    role: 'AI engineering & monitoring implementation',
    org: 'Arwen Tech',
    period: '2025 — Present',
    status: 'Demo stack · Live metrics and synthetic examples distinguished',
    summary: 'A Dockerized monitoring stack with Prometheus, Grafana, Alertmanager, and an advisory AI alert analyzer. Public code demonstrates integration; dashboard examples include both live metrics and synthetic agent KPIs.',
    tags: ['FastAPI', 'Prometheus', 'Grafana', 'Alertmanager', 'MCP', 'Docker'],
    repo: 'https://github.com/Maria-cpp/Agentic-Observability-Platform',
    stack: [
      { layer: 'Monitoring', tech: 'Prometheus, Grafana, Alertmanager' },
      { layer: 'Analysis', tech: 'FastAPI, mock or LLM-backed analysis, optional MCP integration' },
      { layer: 'Delivery', tech: 'Docker Compose' }
    ],
    diagrams: [{
      title: 'Monitoring & Advisory Analysis',
      caption: 'Synthetic KPI examples and live metrics have different evidentiary value. AI suggestions require human verification.',
      chart: `flowchart LR
    LIVE["Live API / host metrics"] --> P["Prometheus"]
    MOCK["Synthetic agent KPI examples"] --> P
    P --> G["Grafana dashboards"]
    P --> A["Alertmanager"]
    A --> AI["FastAPI alert analyzer<br/>mock or LLM-backed"]
    MCP["Optional MCP context"] -.-> AI
    AI --> H["Human verifies hypotheses<br/>and recommended checks"]`
    }],
    sections: [
      { heading: 'Business Problem', body: 'Operational teams need visibility into service health and a practical starting point for investigating alerts across application and infrastructure signals.' },
      { heading: 'My Role', body: 'Built the monitoring stack and advisory alert-analysis integration, connecting metrics, alerts, dashboards, and AI-assisted investigation.' },
      { heading: 'Solution & Engineering Decisions', bullets: ['Prometheus collects metrics; Grafana displays them and Alertmanager routes alerts.', 'A FastAPI analyzer supports mock and LLM-backed responses with optional MCP context.', 'Suggested severity, possible causes, and follow-up checks are advisory outputs, not verified diagnoses.', 'Synthetic agent KPI examples are distinguished from live API and host metrics.'] },
      { heading: 'Validation & Results', body: 'Public code and screenshots demonstrate the integration. Dashboard example values do not establish production scale, agent success rates, or reduced incident-resolution time. No measured operational improvement is claimed.' },
      { heading: 'Evidence', body: 'The public repository is linked above. The homepage project card includes monitoring and analysis screenshots. Inspect data sources and analyzer mode when reproducing the example stack.' }
    ],
    businessValue: 'Brings monitoring and suggested investigation steps into one workflow. Incident-resolution savings require evaluation against real operational incidents.'
  },
  // -------------------------------------------------------------------
  {
    slug: 'video-analytics',
    title: 'Real-Time Video Analytics Platform',
    tagline:
      'Ultralytics YOLO26n + OpenVINO production-line counting · NDA-protected engagement',
    role: "End-to-end AI engineering ownership",
    org: 'Arwen Tech (Pvt.) Ltd.',
    period: '2025 — Present',
    status: "Azure deployed · Demonstrated on-site · Rollout updates pending",
    summary: "Camera-based production counting using RTSP ingestion, YOLO detection, OpenVINO CPU inference, tracking, event APIs, and dashboard integration. Completed end-to-end engineering; full client rollout remains pending.",
    tags: [
      'YOLO26n',
      'OpenVINO',
      'ONNX',
      'OpenCV',
      'RTSP',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Microsoft Azure'
    ],
    stack: [
      { layer: 'Detection', tech: 'YOLO26n (Ultralytics) — ONNX export, OpenVINO inference for lightweight CPU deployment' },
      { layer: 'Tracking', tech: 'lap (Linear Assignment Problem) multi-object tracking' },
      { layer: 'Video', tech: 'OpenCV RTSP multi-camera ingestion, real-time frame processing' },
      { layer: 'Backend', tech: 'Python, FastAPI — real-time data transmission, event triggering, timestamped records' },
      { layer: 'Database', tech: 'PostgreSQL — production counts per SKU/line/batch/shift' },
      { layer: 'Frontend', tech: 'Dashboard views — per SKU, per line, per batch, per shift' },
      { layer: 'Deploy', tech: 'Docker, Docker Compose, Microsoft Azure Container Apps' }
    ],
    diagrams: [
      {
        title: 'System Architecture',
        caption:
          'Live RTSP feeds flow through detection and tracking into real-time counting, with event triggers and compliance reporting.',
        chart: `flowchart TB
    CAM["RTSP Cameras<br/>multi-camera production floor"] --> ING["OpenCV<br/>RTSP ingestion"]
    ING --> DET["YOLO26n<br/>ONNX → OpenVINO<br/>CPU inference"]
    DET --> TRK["lap Tracker<br/>multi-object tracking"]
    TRK --> CNT["Counting Engine<br/>multi-line · multi-SKU"]
    CNT --> EVT["Event Triggers<br/>timestamped records<br/>anomaly & stoppage detection"]
    EVT --> API["FastAPI<br/>real-time data transmission"]
    API --> DB[("PostgreSQL<br/>counts · events · audit")]
    API --> DASH["Dashboard<br/>SKU · line · batch · shift views"]
    subgraph AZURE["Microsoft Azure"]
      ACA["Azure Container Apps"]
    end
    API --> ACA`
      },
      {
        title: 'Detection & Tracking Pipeline',
        caption:
          'YOLO26n is exported to ONNX and converted to OpenVINO IR for efficient CPU inference — no GPU required on the deployment target.',
        chart: `flowchart LR
    F["RTSP Frame"] --> PRE["Preprocessing<br/>resize · normalize"]
    PRE --> Y["YOLO26n<br/>OpenVINO IR"]
    Y --> BB["Bounding Boxes<br/>+ confidence scores"]
    BB --> T["lap Tracker<br/>track assignment"]
    T --> ID["Tracked Objects<br/>with persistent IDs"]
    ID --> CL["Counting Lines<br/>multi-line · multi-SKU"]
    CL --> REC["Timestamped Record<br/>SKU · line · batch · shift"]`
      }
    ],
    sections: [
      {
        "heading": "Business Problem",
        "body": "An enterprise engagement required camera-based production counting with timestamped records across lines and SKUs, using standard IP cameras and CPU-based inference. Client details are confidential."
      },
      {
        "heading": "End-to-End Ownership",
        "body": "I completed the solution end-to-end: video ingestion, detection and tracking, counting logic, event APIs, database integration, dashboard integration, containerization, Azure deployment, and on-site demonstration. Full client rollout remains subject to pending updates."
      },
      {
        "heading": "Solution & Engineering Decisions",
        "bullets": [
          "OpenCV ingests RTSP streams; YOLO detection is exported through ONNX for OpenVINO CPU inference.",
          "Tracking uses linear assignment to associate detections across frames; counting logic turns tracked movement into timestamped events.",
          "FastAPI connects events to PostgreSQL records and dashboard views by SKU, line, batch, and shift.",
          "CPU inference avoids a dedicated GPU requirement for the configured use case; capacity still depends on hardware, resolution, and concurrent streams."
        ]
      },
      {
        "heading": "Deployment & Validation",
        "body": "Containerized and deployed on Microsoft Azure Container Apps. Demonstrated at the client production facility. Minor updates remain before full rollout; deployment and demonstration are distinct from completed operational adoption."
      },
      {
        "heading": "Scale & Results",
        "body": "The implementation supports multi-camera and multi-line workflows. Camera count, sustained FPS, latency, counting accuracy, uptime, and before/after operational savings are not published. The demonstrated result is a working, deployed counting workflow, rather than a quantified business improvement."
      },
      {
        "heading": "Evidence",
        "body": "Architecture diagrams below explain the processing path; the homepage project card includes video demonstrations. Source code and identifying engagement details are private."
      }
    ],
    businessValue: "Automates the counting workflow and provides timestamped records. Operational savings and counting accuracy have not been quantified publicly."
  },

  // -------------------------------------------------------------------
  {
    slug: 'agentic-contract-intelligence',
    title: 'Agentic AI Contract Intelligence Platform',
    tagline:
      'Multi-agent RAG for contract intelligence and workflow automation',
    role: "Solution Designer & Engineer (self-initiated)",
    org: 'Confidential Organization',
    period: '2024 — 2025',
    status: "Implementation completed · Adoption and outcomes not quantified",
    summary: "A LangGraph and FastAPI document workflow combining extraction, PostgreSQL/pgvector retrieval, Claude-assisted processing, human review, and follow-up automation. Identifying organization and document details are withheld.",
    tags: [
      'LangGraph',
      'Claude',
      'RAG',
      'pgvector',
      'FastAPI',
      'Python',
      'OCR',
      'Multi-Agent',
      'Document Intelligence'
    ],
    stack: [
      { layer: 'Orchestration', tech: 'LangGraph multi-agent workflow' },
      { layer: 'LLM', tech: 'Anthropic Claude — validation, Q&A, summarization, MoM & email generation' },
      { layer: 'Retrieval', tech: 'RAG over PostgreSQL + pgvector' },
      { layer: 'Extraction', tech: 'Regex + OCR + rule-based parsing, LLM-assisted validation, confidence scoring' },
      { layer: 'Backend', tech: 'Python, FastAPI, REST APIs, modular AI services (clean architecture)' },
      { layer: 'Governance', tech: 'Validation pipelines, audit logging' }
    ],
    diagrams: [
      {
        title: 'System Architecture',
        caption:
          'Deterministic extraction runs before the LLM; Claude validates and fills gaps, with confidence scoring gating what reaches the metadata store.',
        chart: `flowchart TB
    DOC["Confidential contracts<br/>PDF · DOCX · scans"] --> ING["Ingestion"]
    ING --> EXT["Deterministic extraction<br/>regex + OCR + rule-based parsing"]
    EXT --> VAL["LLM-assisted validation<br/>Claude + confidence scoring"]
    VAL -->|low confidence| HUMAN["Human review"]
    VAL -->|high confidence| META[("Contract metadata<br/>duration · site · financial terms<br/>signatories · contacts · meeting schedule")]
    ING --> CHUNK["Chunk + embed"]
    CHUNK --> PG[("PostgreSQL + pgvector<br/>RAG knowledge base")]
    subgraph AGENTS["LangGraph orchestration · FastAPI"]
      A1["Ingestion agent"]
      A2["Extraction agent"]
      A3["Validation agent"]
      A4["Retrieval / Q&A agent"]
      A5["Scheduling & notification agent"]
    end
    META --> AGENTS
    PG --> A4
    A4 --> UI["Dashboard<br/>ask · summarize · semantic search"]
    A5 --> MTG["Meeting scheduling + reminders"]
    A5 --> MOM["MoM management + follow-up emails"]
    AGENTS --> AUD["Audit logging"]`
      },
      {
        title: 'RAG Query Flow',
        caption:
          'Every answer is grounded in retrieved contract passages and returned with source references — source-referenced for human verification.',
        chart: `sequenceDiagram
    autonumber
    participant U as User
    participant API as FastAPI
    participant R as Retrieval agent
    participant V as pgvector
    participant C as Claude
    U->>API: "What are the renewal terms for the Punjab site?"
    API->>R: route query
    R->>V: semantic search (top-k chunks)
    V-->>R: relevant contract passages
    R->>C: question + retrieved context
    C-->>API: grounded answer + source references
    API-->>U: answer traceable to contract text`
      },
      {
        title: 'Extraction & Validation Pipeline',
        caption:
          'Rules first, LLM second. Anything below the confidence threshold routes to a human instead of silently entering the system.',
        chart: `flowchart LR
    D["Contract document"] --> O["OCR — scanned pages"]
    O --> RX["Regex + rule-based parsing<br/>deterministic first"]
    RX --> L["Claude LLM-assisted validation<br/>fills gaps · verifies fields"]
    L --> CS["Confidence scoring"]
    CS -->|above threshold| DB[("Structured metadata store")]
    CS -->|below threshold| HR["Human review queue"]
    HR --> DB
    DB --> AL["Audit log"]`
      },
      {
        title: 'Governance Automation Flow',
        chart: `flowchart LR
    M["Meeting dates + obligations<br/>extracted metadata"] --> S["Scheduling agent"]
    S -->|N days before| G["Claude-generated reminder + agenda"]
    G --> EM["Follow-up emails to stakeholders"]
    S --> MO["MoM management"]
    MO --> EM
    EM --> LOG["Audit log + dashboard status"]`
      }
    ],
    sections: [
      {
        "heading": "Business Problem",
        "body": "Contract and governance work involved manual document lookup, obligation tracking, meeting records, and follow-up. The project connected document retrieval and extraction to those workflows."
      },
      {
        "heading": "My Role",
        "body": "As a self-initiated solution designer and engineer working within corporate/legal operations, I identified workflow requirements and built document extraction, RAG retrieval, and agent workflow integration. This project does not change the primary operational nature of that historical role."
      },
      {
        "heading": "Solution & Engineering Decisions",
        "bullets": [
          "OCR, regex, and rule-based parsing extract document content before Claude-assisted validation.",
          "PostgreSQL/pgvector retrieval provides source passages for search, summaries, and question answering.",
          "LangGraph and FastAPI coordinate extraction, retrieval, and scheduling workflows.",
          "Confidence-based human review and source references support checking; neither guarantees correct extraction or hallucination-free answers."
        ]
      },
      {
        "heading": "Implementation & Validation",
        "body": "Implementation is completed. User adoption, deployment environment, corpus size, extraction accuracy, retrieval quality, and time savings are not quantified here. The portfolio does not claim independently verified organizational adoption."
      },
      {
        "heading": "Scale & Results",
        "body": "The implemented result is a searchable document workflow with structured metadata and AI-assisted follow-up. Modular services and bounded retrieval context support extension, but no load benchmark or measured reduction in manual work is published."
      },
      {
        "heading": "Evidence",
        "body": "The diagrams describe ingestion, extraction, retrieval, and human review. Implementation and documents are private; confidential details are withheld."
      }
    ],
    businessValue: "Connects contract lookup and follow-up in one searchable workflow. Reduced lookup time and organizational adoption are not claimed as measured results."
  },

  // -------------------------------------------------------------------
  {
    slug: 'security-vault-service',
    title: 'Security Vault Service',
    tagline:
      'PII tokenization with controlled unmasking and tamper-evident audit',
    role: "AI engineering & privacy-vault implementation",
    org: 'Arwen Tech (Pvt.) Ltd.',
    period: '2025 — Present',
    status: "Internal use · Testing and hardening · External certification not claimed",
    summary: "A privacy-vault microservice for sensitive-data detection, reversible tokenization, encrypted mappings, policy-controlled unmasking, and tamper-evident audit records.",
    tags: [
      'FastAPI',
      'PostgreSQL 16',
      'HMAC-SHA256',
      'Fernet/AES',
      'spaCy NER',
      'Redis',
      'Celery',
      'KMS/HSM',
      'Prometheus',
      'Docker'
    ],
    stack: [
      { layer: 'API', tech: 'Python, FastAPI, slowapi rate limiting' },
      { layer: 'Data', tech: 'PostgreSQL 16 — dedicated vault schema, application-role audit modification restrictions' },
      { layer: 'Crypto', tech: 'HMAC-SHA256 deterministic tokens, Fernet/AES envelope encryption, versioned keys' },
      { layer: 'Detection', tech: 'Regex + Luhn checksum, spaCy NER via a pluggable NERDetector interface' },
      { layer: 'Async', tech: 'Celery + Redis — bulk jobs, scheduled chain-integrity checks' },
      { layer: 'Edge', tech: 'nginx — TLS termination, security headers' },
      { layer: 'Identity', tech: 'Pluggable auth; Keycloak/OIDC gateway (code-complete, deployment pending)' },
      { layer: 'Key management', tech: 'Pluggable KeyProvider — env / KMS / HSM, with rotation scripts' },
      { layer: 'Observability', tech: 'Prometheus, Grafana, Alertmanager, OpenTelemetry, AI Alert Analyzer' },
      { layer: 'Testing', tech: 'pytest and load-testing tooling; measured results not published' }
    ],
    diagrams: [
      {
        title: 'System Architecture',
        caption:
          'The vault is an independent service — clients never hold the mapping between token and clear value.',
        chart: `flowchart TB
    C["Clients / Consumers<br/>APIs · internal services · demo UI"]
    N["nginx — TLS 1.2+ termination"]
    subgraph VAULT["FastAPI Vault Service :8000"]
      A["Auth<br/>dual-mode · RBAC"]
      D["Detection<br/>regex + Luhn → spaCy NER"]
      V["Vault Core<br/>mask / unmask"]
      CR["Crypto<br/>HMAC-SHA256 · Fernet/AES"]
      KP["Key Provider<br/>env / KMS / HSM"]
      AU["Audit<br/>hash-chained · append-only"]
      MX["Metrics<br/>Prometheus / OTel"]
      SI["SIEM Forwarder"]
    end
    PG[("PostgreSQL 16<br/>vault.token_vault · vault.audit_log")]
    RD[("Redis<br/>cache + broker")]
    CW["Celery Worker + Beat<br/>bulk jobs · chain-integrity checks"]
    IDP["Identity Gateway / IdP<br/>Keycloak OIDC — pending"]
    SIEM["SIEM<br/>Splunk · ELK · Datadog"]
    C -->|HTTPS| N
    N --> VAULT
    V --> PG
    V --> RD
    V --> CW
    A -.verifies.-> IDP
    CR --> KP
    SI --> SIEM
    CW --> SIEM`
      },
      {
        title: 'Request Flow — Mask vs. Unmask',
        caption:
          'Unmask requires the namespace policy to allow it AND the caller to hold the permission. A writer key is rejected even for data it masked itself.',
        chart: `sequenceDiagram
    autonumber
    participant Cl as Client
    participant Au as Auth
    participant De as Detection
    participant Vt as Vault Core
    participant Db as PostgreSQL
    participant Al as Audit
    Note over Cl,Al: MASK
    Cl->>Au: PUT /api/vault/mask (Bearer key)
    Au->>De: authorized
    De->>De: regex + Luhn, then NER on unclaimed spans
    De->>Vt: detected entities
    Vt->>Vt: HMAC-SHA256 token + Fernet encrypt
    Vt->>Db: upsert (namespace, entity_type, token)
    Vt->>Al: append hash-chained event
    Vt-->>Cl: tokenized text
    Note over Cl,Al: UNMASK — dual gate
    Cl->>Au: PUT /api/vault/unmask (Bearer key, X-Reason)
    Au->>Vt: policy allows AND permission held?
    alt writer key or policy denies
      Vt-->>Cl: 403 Forbidden
    else admin key and policy allows
      Vt->>Db: lookup + decrypt
      Vt->>Al: append event with justification
      Vt-->>Cl: clear value
    end`
      },
      {
        title: 'Deployment Architecture',
        chart: `flowchart LR
    G["scripts/gen_keys.py<br/>HMAC + Fernet keys"] --> E[".env / KMS"]
    E --> DC["docker compose up --build"]
    DC --> S1["Vault service :8000"]
    DC --> S2["PostgreSQL 16"]
    DC --> S3["Redis"]
    DC --> S4["Celery worker + beat"]
    DC --> S5["nginx TLS"]
    S1 --> OBS["observability stack<br/>Prometheus · Grafana · Alertmanager<br/>AI Alert Analyzer"]
    subgraph PROD["Production hardening"]
      KMS["KMS/HSM key provider"]
      KC["Keycloak OIDC — pending"]
      RR["Restricted vault_app DB role"]
      SIEMx["SIEM forwarding"]
    end
    S1 -.-> PROD`
      }
    ],
    sections: [
      {
        "heading": "Business Problem",
        "body": "LLM-powered applications need to reduce exposure of sensitive enterprise data when calling downstream services and restrict who can recover the original values."
      },
      {
        "heading": "My Role",
        "body": "Designed and built the privacy-vault service, including sensitive-data detection, tokenization, encrypted mappings, controlled unmasking, and audit integration."
      },
      {
        "heading": "Solution & Engineering Decisions",
        "bullets": [
          "Regex/Luhn checks and spaCy NER detect structured and unstructured sensitive spans. Detection can miss entities and needs evaluation on representative data.",
          "HMAC-SHA256 tokens connect masked values to encrypted PostgreSQL mappings; versioned keys support rotation.",
          "Unmasking requires both namespace policy and caller permission.",
          "Hash-chained audit records and database triggers restrict modification through the application database role. Privileged administrators remain outside that immutability claim.",
          "Redis and Celery support caching and bulk jobs; Docker supports repeatable service setup."
        ]
      },
      {
        "heading": "Validation & Security Boundaries",
        "body": "In internal use at Arwen Tech for testing and hardening. No external security certification, bank-grade assurance, or regulatory approval is claimed. Identity-provider deployment and production key-management integration require environment-specific verification."
      },
      {
        "heading": "Scale & Results",
        "body": "The implemented result is reversible tokenization with controlled access and tamper-evident records. Detection recall, throughput, latency, and external security review results are not published. Masking reduces exposure; it does not guarantee removal of all sensitive information."
      },
      {
        "heading": "Evidence",
        "body": "The homepage includes a service screenshot; the diagrams below show masking, unmasking, and deployment boundaries. Source and enterprise data remain private."
      }
    ],
    businessValue: "Reduces sensitive-data exposure in downstream workflows while controlling recovery of original values. Compliance approval and complete PII removal are not claimed."
  },

  // -------------------------------------------------------------------
  {
    slug: 'multilingual-nlp-intelligence',
    title: 'Multilingual NLP Intelligence Platform',
    tagline:
      'Agentic pipeline for low-resource-language public-feedback analysis and AI briefs',
    role: "AI engineering & multilingual workflow implementation",
    org: 'Arwen Tech (Pvt.) Ltd.',
    period: '2025 — Present',
    status: "Internal sentiment analysis · LoRA training and full observability in progress",
    summary: "An internal multilingual feedback platform for language detection, normalization, translation, sentiment analysis, and human review. Training and monitoring extensions remain in progress.",
    tags: [
      'FastAPI',
      'Kafka',
      'NLLB-200',
      'XLM-R',
      'Aya 23',
      'PyTorch',
      'PEFT / LoRA',
      'pgvector',
      'Qdrant',
      'Claude / Grok',
      'Next.js'
    ],
    stack: [
      { layer: 'Backend', tech: 'Python, FastAPI' },
      { layer: 'Frontend', tech: 'Next.js, TailwindCSS, shadcn/ui' },
      { layer: 'Messaging', tech: 'Apache Kafka' },
      { layer: 'Database', tech: 'PostgreSQL + pgvector' },
      { layer: 'Vector DB', tech: 'Qdrant' },
      { layer: 'Cache / Object store', tech: 'Redis · MinIO' },
      { layer: 'NLP / ML', tech: 'HuggingFace Transformers, XLM-R, Aya 23, NLLB-200, BGE-M3, PyTorch, PEFT' },
      { layer: 'Briefing LLM', tech: 'Claude API / Grok (configurable)' },
      { layer: 'Annotation', tech: 'Label Studio + custom review UI' },
      { layer: 'ML Ops', tech: 'Weights & Biases, DVC' },
      { layer: 'Monitoring', tech: 'Prometheus + Grafana' },
      { layer: 'Deploy', tech: 'Docker, docker-compose' }
    ],
    diagrams: [
      {
        title: 'System Architecture',
        caption:
          'Kafka separates ingestion and processing. Dashed training paths represent work in progress, rather than proven operational model updates.',
        chart: `flowchart LR
    SM["Social sources<br/>Instagram · Facebook · manual"] --> K[("Apache Kafka")]
    K --> DET["Detect<br/>language ID"]
    DET --> NOR["Normalize<br/>transliterate · script-map"]
    NOR --> TRA["Translate<br/>NLLB-200 → English pivot"]
    TRA --> ANA["Analyze<br/>sentiment · intent · topic<br/>toxicity · sarcasm"]
    ANA --> DASH["Next.js Dashboard"]
    ANA --> BRIEF["Briefing Agent<br/>Claude / Grok"]
    BRIEF --> DASH
    ANA --> STORE[("PostgreSQL + pgvector<br/>Qdrant · Redis · MinIO")]
    ANA --> REV["Human Review Queue"]
    REV --> GOLD["DVC gold sets"]
    GOLD -.-> LORA["LoRA training · PEFT · in progress"]
    LORA -.->|planned evaluation / promotion| ANA`
      },
      {
        title: 'Data Flow — the five preserved artefacts',
        caption:
          'Nothing is lost between scripts. Preserving every intermediate representation is what makes the pipeline debuggable and the audit trail meaningful.',
        chart: `flowchart TB
    P["Incoming post"] --> A1["1 · Raw payload"]
    P --> A2["2 · Native script"]
    A2 --> A3["3 · Roman transliteration"]
    A3 --> A4["4 · English pivot"]
    A4 --> A5["5 · Predictions + metadata"]
    A5 --> AUD["Full audit trail<br/>every agent action · replayable"]`
      },
      {
        title: 'Active-Learning Loop',
        caption:
          'The review UI is not overhead — it is the training-data engine. The training and model-promotion steps remain in progress.',
        chart: `flowchart LR
    PR["Low-confidence / disagreement<br/>predictions"] --> RQ["Review Queue<br/>approve · correct · reject"]
    RQ --> LS["Label Studio<br/>complex labeling"]
    RQ --> GS["Gold set<br/>DVC-versioned JSONL by language/task"]
    LS --> GS
    GS --> TR["LoRA retraining · PEFT"]
    TR --> SH["Shadow evaluation · planned"]
    SH -->|regression| RB["Rollback · planned"]
    SH -->|passes| PROD["Adapter promotion · planned"]`
      },
      {
        title: 'Deployment Flow',
        chart: `flowchart LR
    ENV[".env — source + LLM keys"] --> DC["docker-compose up -d"]
    DC --> API["FastAPI gateway :8000"]
    DC --> KAF["Kafka"]
    DC --> FE["Next.js dashboard :3000"]
    DC --> DBs["PostgreSQL+pgvector · Qdrant<br/>Redis · MinIO"]
    DC --> OBS["Prometheus · Grafana"]
    DC --> LS["Label Studio"]
    subgraph ML["ML Ops"]
      WB["Weights & Biases"]
      DVC["DVC data versioning"]
    end
    API -.-> ML`
      }
    ],
    sections: [
      {
        "heading": "Business Problem",
        "body": "Teams need to review feedback written in Urdu, Roman Urdu, and regional languages, including noisy spelling and mixed scripts, without losing the original text when analyzing translated content."
      },
      {
        "heading": "My Role",
        "body": "Designed and built the multilingual ingestion and processing workflow, backend/dashboard integration, and human-review path for internal feedback analysis."
      },
      {
        "heading": "Solution & Engineering Decisions",
        "bullets": [
          "Kafka decouples ingestion from processing; language detection and normalization precede translation to an English pivot.",
          "NLLB-200 and multilingual analysis components support sentiment processing. Original and intermediate representations remain available for review.",
          "FastAPI, PostgreSQL/pgvector, and Next.js connect processing to stored records and dashboards.",
          "Human review supports checking uncertain results; language-specific evaluation is required before relying on classifications."
        ]
      },
      {
        "heading": "Deployment & Current Status",
        "body": "Running sentiment analysis on live feedback internally. LoRA training and full observability remain in progress. Adapter hot-swapping, shadow evaluation, and automatic rollback are proposed development paths, not established operational capabilities."
      },
      {
        "heading": "Scale & Results",
        "body": "The implemented result is an internal multilingual feedback workflow with retained source text and reviewable outputs. Language-specific accuracy, throughput, user count, and measured improvements from retraining are not published."
      },
      {
        "heading": "Evidence & Next Steps",
        "body": "Homepage screenshots show multilingual records and processing views. Complete the training and monitoring work, then evaluate each supported language against reviewed reference data before publishing performance claims."
      }
    ],
    businessValue: "Makes multilingual feedback searchable and reviewable while retaining source text. Accuracy improvements and operational savings require measurement."
  }
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const caseStudySlugs = caseStudies.map((c) => c.slug);
