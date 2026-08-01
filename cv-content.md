MARIA NASEEM
AI Engineer / FDE | AI Solutions Architect | Agentic AI & LLM Systems | Computer Vision | Government & Enterprise Delivery
Islamabad, Pakistan | marianaseem99@gmail.com | +92 306 6775777 | LinkedIn | GitHub | Portfolio

PROFESSIONAL SUMMARY
AI Engineer / Forward Deployed Engineer (FDE) and AI Solutions Architect with 10 years of professional experience, including 5+ years architecting and delivering production-grade AI and software systems for enterprise and Pakistani government clients. Recent work: a real-time video analytics and production-counting system for a regulated-industry client, demonstrated on-site at the client's production facility; a four-stage HITL facial-recognition Attendance Management System deployed live and designed to scale to thousands of employees; a bank-grade PII tokenization vault with hash-chained audit logging; and a multilingual NLP sentiment platform for low-resource languages (Urdu, Roman Urdu, Pashto and beyond). Specialise in agentic AI engineering — native MCP servers, multi-agent orchestration (OpenAI / Anthropic / Gemini SDKs), RAG with Qdrant / Pinecone, and Human-in-the-Loop (HITL) verification gates. Combine senior technical delivery with proven ministry-level stakeholder engagement (provincial secretaries, ministerial offices, GHQ, SIFC, BOD).

TECHNICAL SKILLS
Agentic AI & LLMs: Multi-Agent Orchestration · MCP Servers (built & deployed) · OpenAI Agents SDK · Anthropic Claude SDK · Google Gemini · Grok · LangChain / LangGraph · RAG Pipelines · Embeddings & Similarity Search · Vector DBs (Qdrant, Pinecone, pgvector) · Pydantic structured outputs · HITL controls · Prompt & Context Engineering
Computer Vision: YOLO26n / YOLO11 / YOLOv8 (Ultralytics, custom fine-tuned) · OpenVINO (FP16 inference optimization) · ByteTrack & lap multi-object tracking · Real-time RTSP video pipelines · Object detection, counting & throughput analytics · Camera tamper detection (SSIM, blur, freeze, signal loss) · Facial Recognition (DeepFace, RetinaFace, YuNet + SFace) · OpenCV · PaddleOCR · FAISS vector similarity
NLP & Multilingual AI: NLLB-200 · XLM-R · Aya 23 · PEFT / LoRA fine-tuning · Multilingual & low-resource NLP (Urdu, Roman Urdu, Pashto, Sindhi, Punjabi) · Sentiment / intent / topic / toxicity classification · Kafka streaming pipelines
Backend & APIs: Python · FastAPI · async SQLAlchemy 2.x · Pydantic v2 · Celery + Redis · PostgreSQL (psycopg3, asyncpg, pgvector) · Alembic migrations · WebSockets · JWT/OAuth2 · RBAC · Microservices Architecture · Node.js
Security & Privacy Engineering: PII detection & tokenization (regex, Luhn, spaCy NER) · HMAC-SHA256 · Envelope encryption (Fernet/AES) · Hash-chained audit logs · KMS/HSM key providers & rotation · Dual-gate authorization
MLOps & Observability: Prometheus · Grafana · Alertmanager · structlog · Weights & Biases · DVC · MLflow concepts · LLM evaluation patterns · A/B testing · model versioning · Pytest + pytest-asyncio · GitHub Actions CI/CD
DevOps & Cloud: Docker · Docker Compose · CI/CD Pipelines · Microsoft Azure (Container Apps) · Linux · Nginx · Gunicorn · systemd · certbot · familiarity with Kubernetes patterns
Frontend & Full-Stack: Next.js · React · TypeScript · Tailwind CSS · Streamlit · Playwright (browser automation)
Languages: Python (expert) · SQL · TypeScript / JavaScript · Bash · C++ · PHP

PROFESSIONAL EXPERIENCE

AI Solutions Architect & Full-Stack Developer | Arwen Tech, Islamabad	2025 – Present
▸ Architected the technical solution for an AI/ML-based real-time video analytics and production-counting system for a regulated-industry client. Built real-time RTSP video pipelines with YOLO26n finetuned (OpenVINO FP16), ByteTrack multi-object tracking, throughput counting, camera tamper detection (SSIM, blur, freeze, signal loss), and FastAPI microservices with JWT/RBAC auth and WebSocket live updates. Containerized and deployed on Microsoft Azure (Container Apps). Demonstrated on-site — the client visited the production facility; minor updates in progress before full rollout.
▸ Architected and prepared for deployment a four-stage HITL Facial-Recognition Attendance Management System for an enterprise client — face enrollment → similarity-based candidate retrieval from live RTSP streams → HITL verification gate → embedding generation and real-time attendance inference. Multi-camera RTSP ingestion with OpenCV SFace embeddings, FAISS index, and threshold-based confidence routing; architecture scales from 40+ employees to thousands. Deployed live on-premises (LAN) on our own staff in Karachi for real-world training and validation.
▸ Architected and built the Security Vault Service — a bank-grade PII tokenization microservice (detect → tokenize → encrypt → dual-gate access) using regex/Luhn + spaCy NER detection, HMAC-SHA256 deterministic tokens, Fernet/AES envelope encryption with versioned key rotation, and an immutable SHA-256 hash-chained audit log enforced at the database layer. FastAPI + PostgreSQL 16 + Redis/Celery + Prometheus/Grafana observability; 86 automated tests. In internal use at Arwen Tech for active testing and hardening.
▸ Architected the Multilingual NLP Intelligence Platform — an agentic Kafka pipeline for sentiment, intent, topic, toxicity and sarcasm analysis across Urdu, Roman Urdu, Pashto and other low-resource languages, using NLLB-200 translation and XLM-R/Aya-23 classification, with a human-review loop feeding PEFT/LoRA retraining under shadow-mode deployment. FastAPI + Next.js + PostgreSQL/pgvector + Qdrant; 107 backend tests. Operational internally, running sentiment analysis on live feedback.
▸ Designed and shipped the Customer Experience Portal — full SLA lifecycle, contract onboarding, and workflow automation. FastAPI + Next.js + JWT + WebSocket live updates, Celery workers, async Postgres, fastapi-limiter rate limiting.
▸ Delivered additional production microservices: an Agentic Observability Platform (Prometheus → Alertmanager → AI Alert Analyzer with a native MCP server, Anthropic Claude SDK + FastAPI); a multi-channel notification orchestrator (email/WhatsApp/FCM, LLM-driven messaging, FastAPI + Celery + Redis); and a Document AI/OCR ingestion service (PaddleOCR + pdfplumber + python-docx). All containerized via Docker Compose with GitHub Actions CI/CD.

Corporate Affairs, Legal Operations & AI Solutions Engineer | Green Tourism Pvt. Ltd., Islamabad	2024 – 2025
▸ AI Solutions Engineering (self-initiated, Forward-Deployed capacity): identified operational inefficiencies in contract and governance workflows and independently designed and built an Agentic AI Contract Intelligence Platform — a LangGraph multi-agent system (Python, FastAPI, Claude, RAG on PostgreSQL/pgvector) automating contract metadata extraction, semantic search, JMB scheduling, Minutes-of-Meeting management, and follow-up email generation, with confidence scoring and audit logging throughout.
▸ Corporate Affairs & Legal Operations (primary role): operated as the bridge between the CEO and the federal/provincial stakeholder ecosystem — provincial secretaries and additional secretaries across all four provinces, ministerial offices, GHQ liaison, SIFC (Special Investment Facilitation Council), and the Law Directorate. Coordinated Board of Directors (BoD) and Joint Management Board (JMB) meetings end-to-end — agenda preparation, minutes, and follow-through on resolutions. Drafted and reviewed contracts, MoUs, and regulatory filings for compliance with corporate law and procurement regulations; collaborated with external legal counsel and senior leadership on compliance reviews and risk assessments.
▸ Led delivery of the corporate WordPress website and Souvenir Shop — production-grade custom themes and PHP plugins integrating REST APIs and third-party services, with a cash-on-delivery checkout flow per client requirement, plus contributions to internal booking/reservation applications with Git-based version control.

Co-Founder & Full-Stack Developer | ZUM Services Providers	2023 – 2025
▸ Co-founded ZUM Services Providers and managed full end-to-end product development — building the full-stack platform from scratch while simultaneously running business operations, client acquisition, and service delivery.
▸ Designed and developed production-ready web applications with RESTful API design, backend business logic in Python/FastAPI, and frontend interfaces — owning the complete software development lifecycle independently.
▸ Designed and managed PostgreSQL databases — schemas, relationships, and optimized queries using SQLAlchemy ORM.
▸ Containerized all backend services with Docker and implemented automated CI/CD pipelines via GitHub Actions, ensuring reliable, repeatable production deployments.
▸ Applied generative AI (ChatGPT) with structured prompt engineering to accelerate marketing and digital content production for the business — an early, practical adoption of LLM tooling to cut content turnaround and cost.
▸ Delivered solar solution proposals and technical system layouts while leading digital operations — website development, marketing, branding, and digital content creation.

Blockchain Developer | MediaPark	2020 – 2022
▸ Designed and delivered scalable native blockchain systems and decentralized applications (DApps) — core architecture (blocks, transactions, consensus validation), ECDSA-based cryptographic signing, and low-level socket-based P2P networking for distributed synchronization and block propagation.
▸ Developed compliance-oriented smart contract interaction frameworks with controlled access mechanisms, encryption standards, and structured technical documentation to ensure blockchain security and operational integrity.

Earlier Career (2016 – 2020): Internship at IBM Pakistan (2016) — supported PTCL's GPON deployment via PeopleSoft, Siebel, IBM Maximo, and IBM Integration Bus; contributed to GPON training documentation and inventory provisioning. Subsequent operations and IT support roles at Prime Tele Power Solution (2016 – 2017) and Team Work Construction (2018 – 2020).

KEY PROJECTS & OPEN SOURCE
▸ FTE Sales Lead Engine — Playwright browser automation + AI-driven lead scoring + HITL review layer; reduced manual outreach effort by ~80%.
▸ Gesture AI Web App — Real-time hand-gesture detection with Next.js for touchless interaction.

CERTIFICATIONS & EDUCATION
Master of Information Technology — Quaid-e-Azam University, 2016
Agentic AI Level 2 — Professional · PIAIC / Panaversity, 2026
Agentic AI Level 1 — Developer Fundamentals · PIAIC / Panaversity, 2026
Agent Factory Fundamentals: Building Digital FTEs · PIAIC / Panaversity, 2026 (81%)
Generative AI Applications · Coursera, 2026 (90%)
Build RAG Applications · IBM / Coursera, 2026
AI for Everyone · DeepLearning.AI / Coursera, 2026
Alibaba Cloud Certified Trainer · Bano Qabil, 2026 — In Progress
AI for Cybersecurity Specialization · Johns Hopkins University / Coursera — In Progress
