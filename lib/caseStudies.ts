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
  // -------------------------------------------------------------------
  {
    slug: 'video-analytics',
    title: 'Real-Time Video Analytics Platform',
    tagline:
      'YOLO26n + OpenVINO production-line counting and compliance reporting for a regulated-industry client',
    role: 'AI Solutions Architect & Lead Engineer',
    org: 'Arwen Tech (Pvt.) Ltd.',
    period: '2025 — Present',
    status:
      'Demonstrated on-site to the client at their production facility · Minor updates before full rollout · Deployed on Microsoft Azure (Container Apps)',
    summary:
      'A multi-camera real-time video analytics platform that performs production-line counting and anomaly detection on live RTSP feeds using YOLO26n with ONNX/OpenVINO CPU inference. Built for a regulated-industry client under a national compliance framework. Containerized and deployed on Microsoft Azure.',
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
        heading: 'Business Problem',
        body:
          'A regulated-industry client needed to accurately count production output across multiple lines and SKUs in real-time, under a national regulatory compliance framework. Manual counting was error-prone and could not produce the timestamped, auditable records regulators require. The solution needed to run on existing infrastructure without expensive GPU hardware.'
      },
      {
        heading: 'Solution',
        body:
          'A multi-camera real-time video analytics platform. YOLO26n handles object detection, exported via ONNX and converted to OpenVINO for lightweight CPU inference. The lap tracker maintains persistent object IDs across frames. A counting engine tracks multi-line, multi-SKU production with real-time event triggering for anomalies and stoppages. FastAPI transmits data in real-time to PostgreSQL and a dashboard with views per SKU, line, batch, and shift.'
      },
      {
        heading: 'Key Engineering Decisions',
        bullets: [
          'YOLO26n over larger models — the newest ultralight architecture provides sufficient accuracy for production-line objects while enabling CPU-only deployment via OpenVINO',
          'ONNX → OpenVINO conversion — eliminates GPU dependency, reducing deployment cost and complexity on client infrastructure',
          'lap tracker for multi-object tracking — lightweight linear assignment approach handles the structured, predictable motion patterns of a production line efficiently',
          'Multi-line counting architecture — a single deployment handles multiple production lines and SKU types simultaneously'
        ]
      },
      {
        heading: 'Major Features',
        bullets: [
          'Real-time object detection on live RTSP feeds from multiple cameras',
          'Multi-object tracking with persistent IDs across frames',
          'Multi-line, multi-SKU production counting with per-shift aggregation',
          'Anomaly and stoppage detection with real-time event triggering',
          'Dashboard views: per SKU, per line, per batch, per shift',
          'Timestamped, auditable records for regulatory compliance'
        ]
      },
      {
        heading: 'Challenges',
        bullets: [
          'Achieving reliable counting accuracy on a busy production line with overlapping objects and variable lighting',
          'Deploying real-time inference on CPU-only infrastructure without sacrificing frame rate — solved with ONNX/OpenVINO optimization',
          'Handling multiple RTSP camera feeds simultaneously with consistent tracking across views'
        ]
      },
      {
        heading: 'Deployment',
        body:
          'Containerized with Docker and deployed on Microsoft Azure Container Apps. The system was demonstrated on-site at the client\'s production facility — the client visited and observed live counting. Minor updates are in progress before full production rollout.'
      },
      {
        heading: 'Lessons Learned',
        body:
          'The model choice matters less than the deployment engineering. YOLO26n is not the most accurate detector available, but it runs on CPU via OpenVINO at the frame rates the use case demands — and that practical constraint is what makes the system deployable on client infrastructure without a GPU procurement cycle. The on-site demo proved that real-time accuracy on actual production-line footage is what closes the deal, not benchmark numbers on public datasets.'
      }
    ],
    businessValue:
      'Replaces manual production counting with real-time, auditable automated tracking — meeting regulatory compliance requirements while eliminating human counting error. CPU-only inference via OpenVINO means no GPU hardware costs for the client.'
  },

  // -------------------------------------------------------------------
  {
    slug: 'agentic-contract-intelligence',
    title: 'Agentic AI Contract Intelligence Platform',
    tagline:
      'Multi-agent RAG for contract intelligence, JMB automation & legal operations',
    role: 'Solution Designer & Engineer (self-initiated)',
    org: 'Green Tourism Pvt. Ltd.',
    period: '2024 — 2025',
    status: 'Deployed — in active use by the executive team at Green Tourism',
    summary:
      'A LangGraph multi-agent platform that reads contracts, answers questions grounded in their actual text, and automates the governance workflow around them — JMB scheduling, reminders, and Minutes of Meeting. Identified the bottleneck from inside the business and built the solution: the Forward Deployed pattern in practice.',
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
    DOC["Provincial contracts<br/>PDF · DOCX · scans"] --> ING["Ingestion"]
    ING --> EXT["Deterministic extraction<br/>regex + OCR + rule-based parsing"]
    EXT --> VAL["LLM-assisted validation<br/>Claude + confidence scoring"]
    VAL -->|low confidence| HUMAN["Human review"]
    VAL -->|high confidence| META[("Contract metadata<br/>duration · site · revenue share<br/>signatories · contacts · JMB schedule")]
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
    A5 --> JMB["JMB scheduling + reminders"]
    A5 --> MOM["MoM management + follow-up emails"]
    AGENTS --> AUD["Audit logging"]`
      },
      {
        title: 'RAG Query Flow',
        caption:
          'Every answer is grounded in retrieved contract passages and returned with source references — traceable rather than hallucinated.',
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
    M["JMB schedules + obligations<br/>extracted metadata"] --> S["Scheduling agent"]
    S -->|N days before| G["Claude-generated reminder + agenda"]
    G --> EM["Follow-up emails to stakeholders"]
    S --> MO["MoM management"]
    MO --> EM
    EM --> LOG["Audit log + dashboard status"]`
      }
    ],
    sections: [
      {
        heading: 'Business Problem',
        body:
          'The organization manages contracts across multiple provinces, and tracking them was entirely manual. Staff read agreements by hand, hunted through historical records for precedent, tracked upcoming Joint Management Board (JMB) meetings in spreadsheets, chased Minutes of Meeting, and sent reminders individually. The process was slow, error-prone, and impossible to search across provinces — and a missed JMB date carried real governance consequences.'
      },
      {
        heading: 'Solution',
        body:
          'An AI automation pipeline that ingests contracts, indexes them, extracts structured metadata, and exposes a dashboard that reads contracts, answers questions about them, summarizes agreements, surfaces upcoming JMB meetings, sends reminder emails, manages MoMs, and searches historical records semantically. Retrieval-Augmented Generation grounds every answer in the actual contract text with citations, so responses are traceable rather than invented.'
      },
      {
        heading: 'Major Features',
        bullets: [
          'Natural-language Q&A grounded in contract text, returned with source references',
          'Agreement summarization and cross-contract semantic search over historical records',
          'Metadata extraction — duration, site details, revenue share, signatories, contacts, JMB schedules',
          'Automated JMB scheduling, meeting reminders, and follow-up email generation',
          'Minutes of Meeting (MoM) management tied to the contract record',
          'Confidence scoring with human review below threshold; audit logging throughout'
        ]
      },
      {
        heading: 'AI Components',
        bullets: [
          'LangGraph multi-agent orchestration — ingestion, extraction, validation, retrieval, scheduling',
          'RAG over a pgvector index — retrieval bounds LLM context regardless of corpus size',
          'Claude for validation, contextual Q&A, summarization, and MoM/email generation',
          'LLM-assisted validation layered on deterministic extraction, never replacing it'
        ]
      },
      {
        heading: 'Key Design Decision — deterministic first, LLM second',
        body:
          'The extraction pipeline runs regex, OCR, and rule-based parsing before the LLM ever sees the document. Claude then validates, fills gaps, and verifies fields, and a confidence score decides whether the result enters the metadata store or routes to a human. Rules are cheaper, faster, and reproducible where the data is structured; the LLM earns its place only on the unstructured remainder. The confidence gate means ambiguous extractions surface to a person rather than silently becoming facts.'
      },
      {
        heading: 'Challenges',
        bullets: [
          'Multi-province document variety and inconsistent contract formats, including scanned pages requiring OCR',
          'Keeping answers grounded and citable rather than plausible-sounding — solved by retrieval with source references',
          'Turning implicit meeting and obligation dates buried in contract prose into a reliable, automated reminder schedule',
          'Deciding where determinism ends and the LLM begins, then making that boundary explicit and measurable via confidence scoring'
        ]
      },
      {
        heading: 'Scalability',
        body:
          'Adding a province means adding documents, not re-architecting. The vector index and scheduler scale with volume, and retrieval keeps LLM context bounded regardless of how large the corpus grows. Modular AI services and clean-architecture boundaries mean individual agents can be replaced or scaled independently.'
      },
      {
        heading: 'Deployment',
        body:
          'Containerized FastAPI services exposing REST APIs, with modular AI services and audit logging designed for enterprise deployment.'
      },
      {
        heading: 'Lessons Learned',
        body:
          'The highest-value AI is rarely the flashiest model — it is the removal of a specific, painful manual loop the business runs every week. Sitting inside the corporate-affairs workflow is precisely why I knew what to build: the requirements gathering had already happened by living the problem. That is the Forward Deployed lesson worth carrying into any client engagement.'
      },
      {
        heading: 'Future Improvements',
        bullets: [
          'Obligation-tracking alerts derived from extracted contract terms',
          'Contract risk flagging and cross-contract clause comparison',
          'Broader connector coverage for document sources'
        ]
      }
    ],
    businessValue:
      'Converted a manual, province-by-province contract-tracking process into a searchable, self-service knowledge system with automated governance reminders — cutting the time to answer a contract question from hours of manual lookup to seconds, and removing missed-meeting risk from the JMB cycle.'
  },

  // -------------------------------------------------------------------
  {
    slug: 'security-vault-service',
    title: 'Security Vault Service',
    tagline:
      'Bank-grade PII tokenization vault with dual-gate unmask and hash-chained audit',
    role: 'Lead Architect & Engineer',
    org: 'Arwen Tech (Pvt.) Ltd.',
    period: '2025 — Present',
    status:
      'In internal use at Arwen Tech (active testing & hardening) · Core production-hardened, 86 tests · Enterprise IdP integration code-complete · Ops observability in progress',
    summary:
      'An independent privacy-vault microservice implementing detect → tokenize → protect → gate access. Lets an enterprise use LLMs and third-party analytics on regulated data without exposing raw PII, with an audit trail a regulator can actually accept.',
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
      { layer: 'Data', tech: 'PostgreSQL 16 — dedicated vault schema, trigger-enforced immutability' },
      { layer: 'Crypto', tech: 'HMAC-SHA256 deterministic tokens, Fernet/AES envelope encryption, versioned keys' },
      { layer: 'Detection', tech: 'Regex + Luhn checksum, spaCy NER via a pluggable NERDetector interface' },
      { layer: 'Async', tech: 'Celery + Redis — bulk jobs, scheduled chain-integrity checks' },
      { layer: 'Edge', tech: 'nginx — TLS termination, security headers' },
      { layer: 'Identity', tech: 'Pluggable auth; Keycloak/OIDC gateway (code-complete, deployment pending)' },
      { layer: 'Key management', tech: 'Pluggable KeyProvider — env / KMS / HSM, with rotation scripts' },
      { layer: 'Observability', tech: 'Prometheus, Grafana, Alertmanager, OpenTelemetry, AI Alert Analyzer' },
      { layer: 'Testing', tech: 'pytest (86 tests), Locust load testing' }
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
        heading: 'Business Problem',
        body:
          'Enterprises want to use LLMs, analytics, and third-party APIs on their data — but that data contains regulated PII: names, card numbers, national IDs, IBANs. Sending raw PII across a trust boundary is a compliance and breach liability. Teams need a way to strip sensitive values before data leaves, reversibly restore them only for authorized callers, and prove to an auditor that nothing else happened.'
      },
      {
        heading: 'Solution',
        body:
          'An independent masking/unmasking microservice implementing the Privacy Vault pattern. Sensitive spans are detected (regex-first, NER-second), replaced with deterministic context-preserving tokens, and the reversible mapping is envelope-encrypted in a dedicated PostgreSQL vault schema. Unmasking resolves only behind a dual gate — namespace policy AND caller permission. Every operation appends to an immutable, SHA-256 hash-chained audit log that the database itself refuses to UPDATE, DELETE, or TRUNCATE.'
      },
      {
        heading: 'Major Features',
        bullets: [
          'PII detection across 11 entity types — EMAIL, CARD, IBAN, NATIONAL_ID, PHONE via regex/Luhn; PERSON, ADDRESS, ORG, DATE, MONEY, GPE via NER',
          'Deterministic tokenization — same value yields the same token, enabling dedup and referential integrity across systems',
          'Envelope encryption at rest with versioned keys and in-place rotation',
          'Dual-gate unmask — defense in depth; justification captured and logged on every resolution',
          'Immutable hash-chained audit log — row_hash = SHA256(prev_hash ‖ event), enforced by database triggers',
          'Format-preserving masking and opt-in salted mode to defeat frequency analysis',
          'SIEM forwarding, Prometheus metrics, and automated 5-minute chain-integrity verification with critical alerting'
        ]
      },
      {
        heading: 'AI Components',
        bullets: [
          'spaCy NER for unstructured PII that regex cannot catch — lazily loaded, zero cost when disabled',
          'Reference demo of the full privacy pattern: detect → mask → send masked text to Claude → decrypt on return',
          'AI Alert Analyzer in the observability stack performs root-cause and severity inference on vault alerts'
        ]
      },
      {
        heading: 'APIs',
        bullets: [
          'PUT /api/vault/mask — detect and tokenize',
          'PUT /api/vault/unmask — dual gate, X-Reason justification captured',
          'GET /api/admin/audit — hash-chained audit trail',
          'GET /health and /health/dashboard — DB, key versions, chain stats',
          'POST /api/jobs and GET /api/jobs/{id} — async bulk operations',
          'Interactive OpenAPI docs at /docs'
        ]
      },
      {
        heading: 'Security Considerations',
        bullets: [
          'Clear values stored only as ciphertext; keys never co-located with data and unwrapped by KMS/HSM at runtime in production',
          'Least-privilege vault_app DB role — INSERT/SELECT/UPDATE only, no DDL, no TRUNCATE, no DELETE on audit',
          'TLS 1.2+ at the edge, request-size caps (413 over 1MB), per-endpoint rate limits',
          'Tamper-evident audit chain with automated integrity checks and SIEM critical alerts on break',
          'Justification required and logged for every unmask operation'
        ]
      },
      {
        heading: 'Key Design Decisions',
        bullets: [
          'Regex-first, NER-second — structured PII is faster and deterministic via regex; NER fills gaps for unstructured data',
          'Pluggable interfaces (KeyProvider, NERDetector) — swap env vars for KMS/HSM in production without touching core logic',
          'Deterministic tokenization — enables deduplication and referential integrity across systems',
          'Hash-chained audit log — any modification breaks the chain and is detectable by periodic integrity checks',
          'Dual-gate unmask — both namespace policy and caller permission must allow the operation'
        ]
      },
      {
        heading: 'Challenges',
        bullets: [
          'Making the audit log genuinely tamper-evident at the database layer, not just the application layer — the hard part was proving immutability, not implementing logging',
          'Balancing deterministic tokenization (needed for referential integrity) against frequency-analysis risk — resolved with an opt-in salted mode so callers choose the tradeoff per use case',
          'Designing pluggable seams so development uses env keys and small models while production swaps to KMS/HSM and larger NER, with no core changes'
        ]
      },
      {
        heading: 'Scalability',
        bullets: [
          'Redis cache on token lookups reduces DB load; deterministic tokens make caching safe',
          'Celery decouples bulk operations from the request path',
          'Stateless FastAPI scales horizontally behind nginx; PostgreSQL is the single stateful tier',
          'Load-tested with Locust'
        ]
      },
      {
        heading: 'Deployment',
        body:
          'Docker Compose brings up the vault service, PostgreSQL, Redis, Celery worker, and nginx. A unified compose file adds the identity gateway and Keycloak. A separate observability stack provides Prometheus, Grafana, Alertmanager, a vault exporter with 13 metrics, 11 alert rules, and an AI Alert Analyzer.'
      },
      {
        heading: 'Lessons Learned',
        body:
          '"It runs and is correct" is the start of a regulated deployment, not the end. The explicit before-production checklist — IdP, KMS, key rotation, SIEM forwarding, operational runbook — is the difference between a demo and something a bank will actually adopt. Encoding compliance requirements as database constraints rather than application code is far more defensible in an audit: the control cannot be bypassed by a future code path.'
      },
      {
        heading: 'Future Improvements',
        bullets: [
          'Complete Keycloak OIDC/SAML deployment and integration testing',
          'Finish ops observability — health dashboard polish, archival automation',
          'Layer the out-of-scope GPT-Guard / RAG / agentic protection on top of the vault core'
        ]
      }
    ],
    businessValue:
      'Lets an enterprise adopt LLMs and third-party analytics on regulated data without exposing raw PII — turning a compliance blocker into a solved control. The audit chain and dual gate give security and compliance teams the evidence they need to sign off.'
  },

  // -------------------------------------------------------------------
  {
    slug: 'multilingual-nlp-intelligence',
    title: 'Multilingual NLP Intelligence Platform',
    tagline:
      'Agentic pipeline for low-resource-language public-feedback analysis and AI briefs',
    role: 'Lead Architect',
    org: 'Arwen Tech (Pvt.) Ltd.',
    period: '2025 — Present',
    status:
      'Operational internally — running sentiment analysis on live feedback & posts (pipeline, briefing agent, connectors, dashboard, human review) · LoRA training + full observability in progress · 107 backend tests passing',
    summary:
      'A multilingual NLP platform that ingests public social data across languages mainstream NLP handles poorly, runs it through an agentic pipeline, and produces validated, actionable analysis — improving its own sovereign models through a human-review and active-learning loop.',
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
          'Autonomous agents handle each stage with self-healing and auto-retry; Kafka decouples ingestion from processing so stages scale independently.',
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
    GOLD --> LORA["LoRA training · PEFT"]
    LORA -->|shadow deploy + auto-rollback| ANA`
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
          'The review UI is not overhead — it is the training-data engine. Reviewer effort compounds into model quality.',
        chart: `flowchart LR
    PR["Low-confidence / disagreement<br/>predictions"] --> RQ["Review Queue<br/>approve · correct · reject"]
    RQ --> LS["Label Studio<br/>complex labeling"]
    RQ --> GS["Gold set<br/>DVC-versioned JSONL by language/task"]
    LS --> GS
    GS --> TR["LoRA retraining · PEFT"]
    TR --> SH["Shadow-mode deploy"]
    SH -->|regression| RB["Auto-rollback"]
    SH -->|passes| PROD["Promote adapter"]`
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
        heading: 'Business Problem',
        body:
          'Decision-makers need to understand public sentiment expressed across a dozen languages and scripts — Urdu, Roman Urdu, Pashto, Sindhi, Punjabi, and long-tail languages like Balochi, Brahui, and Burushaski — that mainstream NLP tools handle poorly or not at all. Off-the-shelf models are English-centric, commercial APIs do not cover these languages sovereignly, and raw sentiment scores without human validation are not trustworthy enough to act on.'
      },
      {
        heading: 'Solution',
        body:
          'A hybrid FastAPI + Kafka platform where autonomous agents handle each processing stage. Text is language-detected, normalized and transliterated across scripts, translated to an English pivot via NLLB-200 fine-tuned on OPUS corpora, then analyzed for sentiment, intent, topic, toxicity, and sarcasm. A briefing agent generates daily briefs and alerts. Predictions below confidence route to a human-review queue; corrections auto-export to DVC-versioned gold sets that feed LoRA retraining — so sovereign models improve over time and hot-swap in via shadow mode with automatic rollback.'
      },
      {
        heading: 'Major Features',
        bullets: [
          'Agentic pipeline with self-healing and auto-retry per stage, plus a fully replayable audit trail',
          'Language coverage tiered from anchor (Urdu, Roman Urdu) through major regional to long-tail',
          'Five artefacts preserved per post — raw, native script, roman, English pivot, predictions',
          'Human review queue with approve/correct/reject, feeding auto-exported DVC gold sets',
          'Label Studio integration for complex annotation tasks',
          'Active learning — corrections drive LoRA retraining; adapters hot-swap via shadow mode with auto-rollback on regression'
        ]
      },
      {
        heading: 'AI Components',
        bullets: [
          'Translation — NLLB-200 fine-tuned on OPUS parallel corpora, English pivot strategy',
          'Understanding — XLM-R, Aya 23, BGE-M3 embeddings for multilingual sentiment, intent, topic, toxicity, sarcasm',
          'Generation — Claude/Grok briefing agent for daily and on-demand briefs',
          'Continual learning — PEFT/LoRA adapters trained from reviewer-corrected gold sets, versioned in DVC'
        ]
      },
      {
        heading: 'APIs',
        bullets: [
          'POST /api/v1/ingest and /ingest/batch — single and batch ingestion',
          'GET /api/v1/posts and /posts/{id} — five artefacts plus audit trail',
          'GET/POST /api/v1/reviews and /reviews/stats — human review queue',
          'GET/POST /api/v1/briefs and /briefs/generate — briefs',
          'GET /api/v1/dashboard/stats — analytics',
          'GET /api/v1/health — system health'
        ]
      },
      {
        heading: 'Governance & Safeguards',
        bullets: [
          'Human-in-the-loop gate on low-confidence and disagreement predictions — no autonomous action on ambiguous signals',
          'Full, replayable audit trail of every agent action per post',
          'Sovereign model training — data and adapters stay in-house rather than shipping content to third-party APIs for core analysis',
          'Scope limited to public and consented data sources'
        ]
      },
      {
        heading: 'Challenges',
        bullets: [
          'Genuinely low-resource languages — no clean parallel corpora, heavy code-switching, Roman-script noise — addressed with the transliteration/normalization stage and five-artefact preservation',
          'Making model improvement safe in a live system — solved with shadow-mode LoRA deploys and automatic rollback rather than direct promotion',
          'Keeping analysis trustworthy enough to act on — solved by routing uncertainty to humans instead of surfacing false confidence'
        ]
      },
      {
        heading: 'Scalability',
        bullets: [
          'Kafka decouples ingestion from processing; stages scale independently as consumers',
          'pgvector and Qdrant split relational and high-recall vector workloads',
          'Tiered language strategy allows adding long-tail languages incrementally without re-architecting'
        ]
      },
      {
        heading: 'Deployment',
        body:
          'Full stack via docker-compose — FastAPI gateway, Kafka, Next.js dashboard, PostgreSQL + pgvector, Qdrant, Redis, MinIO, Label Studio, and Prometheus/Grafana. Training runs in Colab notebooks with W&B tracking and DVC-versioned datasets.'
      },
      {
        heading: 'Lessons Learned',
        body:
          'Preserving every intermediate representation is what makes a multilingual pipeline debuggable — when an English-pivot sentiment score looks wrong, you can walk back through the transliteration and native script to find where it broke. And a human-review-to-gold-set-to-LoRA loop turns reviewer effort into compounding model quality: the review UI is not overhead, it is the training-data engine.'
      },
      {
        heading: 'Future Improvements',
        bullets: [
          'Complete LoRA training and ML-ops phase',
          'Complete observability and monitoring phase',
          'Expand connector coverage and broaden long-tail language gold sets'
        ]
      }
    ],
    businessValue:
      'Gives organizations a sovereign, multilingual read on public sentiment in languages no commercial tool covers well — with human validation that makes the output trustworthy enough to act on, and a feedback loop that keeps improving accuracy without recurring third-party API costs.'
  }
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const caseStudySlugs = caseStudies.map((c) => c.slug);
