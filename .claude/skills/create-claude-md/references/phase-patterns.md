# Multi-Phase Project Patterns

Patterns for structuring CLAUDE.md when projects have multiple development phases.

---

## Common Phase Structures

### 2-Phase Structure (Small Projects)
- **Phase 1:** Prototype/MVP
- **Phase 2:** Production/Enhancement

### 3-Phase Structure (Typical Projects)
- **Phase 0:** Prototype/POC
- **Phase 1:** MVP/Core Features
- **Phase 2:** Production/Advanced Features

### 4-Phase Structure (Complex Projects)
- **Phase 0:** Prototype/Validation
- **Phase 1:** Core System
- **Phase 2:** Intelligence/Enhancement Layer
- **Phase 3:** Advanced Features/Integration

### 5+ Phase Structure (Enterprise Projects)
- **Phase 0:** Planning/Design
- **Phase 1:** Prototype
- **Phase 2:** MVP
- **Phase 3:** Production Core
- **Phase 4:** Advanced Features
- **Phase 5+:** Continuous Enhancement

---

## Phase Naming Conventions

Use clear, descriptive names:

**Good:**
- Phase 0 – Prototype
- Phase 1 – Core System
- Phase 2 – Intelligence Layer
- Phase 3 – Advanced Features

**Avoid:**
- Phase 1, Phase 2 (no description)
- Alpha, Beta, RC (vague)
- V1, V2, V3 (version numbers are different from phases)

---

## Phase Section Template

For each phase, include:

```markdown
## [Emoji] Phase [N] – [Name] ([Timeline])

**Goal:** [One sentence describing phase objective]

**Scope:**
- [Feature 1]
- [Feature 2]
- [Feature 3]

**Deployment:**
- [Deployment target - local, staging, production]
- [Infrastructure requirements]

**Definition of Done:**
- [ ] [Acceptance criterion 1]
- [ ] [Acceptance criterion 2]
- [ ] [Acceptance criterion 3]
- [ ] [Performance requirement]
- [ ] [Quality requirement]
```

### Example

```markdown
## 🟢 Phase 0 – Prototype (2–3 weeks)

**Goal:** Validate concept

**Scope:**
- Basic UI (Next.js)
- Basic backend (FastAPI)
- Core CRUD operations
- Simple authentication
- Local database

**Deployment:**
- Local Docker Compose only
- Optional: Demo server (no domain)

**Definition of Done:**
- [ ] Docker Compose starts all services with one command
- [ ] Seed data loads automatically
- [ ] CRUD operations working for core entities
- [ ] Basic authentication functional
- [ ] API responds within 500ms
- [ ] Frontend displays data without errors
- [ ] Demo script can be executed in 5 minutes
```

---

## Scope Boundaries Per Phase

### Phase 0 (Prototype)

**IN SCOPE:**
- Basic CRUD for core entities
- Simple validation rules
- Local deployment only
- Manual testing
- Minimal UI (functional, not polished)
- Basic auth (if needed)
- Seed data for demo

**OUT OF SCOPE:**
- Advanced features
- Cloud deployment
- Payment integration
- AI/ML capabilities
- Advanced security (basic only)
- Performance optimization
- Multi-tenancy
- Advanced analytics

### Phase 1 (MVP/Core System)

**IN SCOPE (adds to Phase 0):**
- Full CRUD for all entities
- Business logic implementation
- Authentication & authorization (RBAC)
- Data validation (comprehensive)
- Error handling
- Basic API documentation
- Unit tests (core features)
- Staging deployment
- Basic monitoring

**OUT OF SCOPE:**
- Advanced integrations
- AI/ML features
- Complex analytics
- Multi-region deployment
- Advanced caching
- Webhook handling

### Phase 2 (Enhancement/Intelligence)

**IN SCOPE (adds to Phase 1):**
- Advanced features
- AI/ML capabilities (if applicable)
- Complex business logic
- Advanced analytics
- Performance optimization
- Caching layer
- Background jobs
- Integration tests
- Production deployment
- Monitoring & logging

**OUT OF SCOPE:**
- Payment gateway (if not core)
- Advanced security hardening
- Multi-region scaling
- White-label support

### Phase 3 (Advanced/Integration)

**IN SCOPE (adds to Phase 2):**
- Third-party integrations
- Payment gateways
- Advanced security
- Multi-region support
- Scaling optimizations
- Advanced analytics
- Webhook handling
- E2E tests
- Production hardening

---

## Phase Transition Criteria

Before moving to next phase, verify:

### Phase 0 → Phase 1
- [ ] Prototype demonstrates core concept
- [ ] User feedback collected
- [ ] Technical approach validated
- [ ] All Phase 0 DoD items completed
- [ ] No blocking technical issues

### Phase 1 → Phase 2
- [ ] MVP deployed to staging/production
- [ ] Core features working reliably
- [ ] User acceptance achieved
- [ ] All Phase 1 DoD items completed
- [ ] Technical debt documented (not blocking)
- [ ] Monitoring in place

### Phase 2 → Phase 3
- [ ] Enhanced system in production
- [ ] Performance targets met
- [ ] All Phase 2 DoD items completed
- [ ] Integration readiness verified
- [ ] Security audit passed (if applicable)

---

## Deployment Evolution

### Phase 0
- **Target:** Local development only
- **Infrastructure:** Docker Compose
- **Database:** Local PostgreSQL/SQLite
- **Storage:** Local filesystem
- **Monitoring:** Console logs

### Phase 1
- **Target:** Staging + Basic Production
- **Infrastructure:** Cloud (AWS/GCP/Azure), single region
- **Database:** Managed PostgreSQL
- **Storage:** S3/MinIO
- **Monitoring:** Basic logging, error tracking

### Phase 2
- **Target:** Production (scalable)
- **Infrastructure:** Cloud, auto-scaling
- **Database:** Managed PostgreSQL with read replicas
- **Storage:** S3 with CDN
- **Monitoring:** Full observability (logs, metrics, traces)

### Phase 3
- **Target:** Production (hardened)
- **Infrastructure:** Multi-region, auto-scaling, HA
- **Database:** Multi-region replication
- **Storage:** S3 with encryption, versioning
- **Monitoring:** Enterprise-grade observability

---

## Timeline Guidance

### Prototype (Phase 0)
- **Solo dev:** 1-2 weeks
- **Small team:** 2-3 weeks
- **Purpose:** Validate concept quickly

### MVP (Phase 1)
- **Solo dev:** 4-6 weeks
- **Small team:** 4-6 weeks
- **Medium team:** 3-4 weeks
- **Purpose:** Deliver core value

### Enhancement (Phase 2)
- **Solo dev:** 6-8 weeks
- **Small team:** 4-6 weeks
- **Medium team:** 3-5 weeks
- **Purpose:** Add intelligence/optimization

### Advanced (Phase 3)
- **Solo dev:** 4-6 weeks
- **Small team:** 3-5 weeks
- **Medium team:** 2-4 weeks
- **Purpose:** Integrations and hardening

Note: These are guidelines, not commitments. Actual timelines depend on complexity.

---

## Full Example: 4-Phase Structure

```markdown
# Project Phases

---

## 🟢 Phase 0 – Prototype (2–3 weeks)

**Goal:** Validate concept

**Scope:**
- Basic UI
- Core CRUD
- Simple logic
- Local deployment

**Deployment:**
- Local Docker Compose

**Definition of Done:**
- [ ] Docker Compose starts all services
- [ ] Seed data loads
- [ ] CRUD working
- [ ] Demo script ready

---

## 🟡 Phase 1 – Core System (4–6 weeks)

**Goal:** Production-ready core

**Scope:**
- Full CRUD
- Authentication & RBAC
- Business logic
- API documentation
- Tests
- Staging deployment

**Deployment:**
- Staging cloud
- Basic production

**Definition of Done:**
- [ ] All core features working
- [ ] RBAC enforced
- [ ] Tests passing (80% coverage)
- [ ] Deployed to staging
- [ ] Performance targets met

---

## 🟠 Phase 2 – Intelligence Layer (4–6 weeks)

**Goal:** Smart, optimized system

**Scope:**
- Advanced features
- AI/ML (if applicable)
- Performance optimization
- Caching
- Background jobs
- Production deployment

**Deployment:**
- Production (scalable)
- Monitoring

**Definition of Done:**
- [ ] Advanced features deployed
- [ ] Performance optimized
- [ ] Caching working
- [ ] Background jobs stable
- [ ] Production monitoring active

---

## 🔵 Phase 3 – Advanced & Integration (3–5 weeks)

**Goal:** Integrations and hardening

**Scope:**
- Third-party integrations
- Payment gateway
- Advanced security
- Scaling
- Webhooks
- Production hardening

**Deployment:**
- Production (hardened)
- Multi-region (if needed)

**Definition of Done:**
- [ ] Integrations working
- [ ] Payments processing
- [ ] Security hardened
- [ ] Scaling tested
- [ ] 99.9% uptime achieved
```

---

## Scope Boundaries Section

Include this section in CLAUDE.md to prevent scope creep:

```markdown
## Scope Boundaries (By Phase)

### Phase 0 – IN SCOPE (Prototype):
- [List specific features]

### Phase 0 – OUT OF SCOPE:
- [List features deferred to later phases]

### Phase 1 – IN SCOPE (Core System):
- [Everything from Phase 0 +]
- [New features for Phase 1]

### Phase 1 – OUT OF SCOPE:
- [Features deferred to Phase 2+]

[Repeat for each phase]
```

---

## Success Criteria Per Phase

```markdown
## Success Criteria

**Phase 0:**
- [Criterion 1]
- [Criterion 2]

**Phase 1:**
- [Criterion 1]
- [Criterion 2]

**Phase 2:**
- [Criterion 1]
- [Criterion 2]

**Phase 3:**
- [Criterion 1]
- [Criterion 2]
```

---

## Current Phase Indicator

Always include at the top of CLAUDE.md:

```markdown
## Current Phase
**Phase [N] – [Name]** ([Status])
Target: [Timeline]
Focus: [Current phase goal]
```

Example:
```markdown
## Current Phase
**Phase 0 – Prototype** (In Progress)
Target: 2–3 weeks
Focus: Validate concept with basic functionality
```

---

## Phase-Specific Notes Section

Add at the end of CLAUDE.md:

```markdown
## Notes

### Phase 0 Notes
- This project prioritizes **speed over perfection** in Phase 0
- Manual workflows are acceptable
- Focus on core validation, not polish

### Phase 1 Notes
- This phase prioritizes **reliability over features**
- Automated workflows replace manual ones
- Production-grade code quality required

### Phase 2 Notes
- This phase prioritizes **optimization and intelligence**
- Advanced features introduced carefully
- Performance monitoring critical

### Phase 3 Notes
- This phase prioritizes **integration and hardening**
- Security and compliance critical
- Production stability paramount
```

---

## Anti-Patterns to Avoid

### ❌ Vague Phases
**Bad:**
```
Phase 1: Development
Phase 2: More Development
Phase 3: Final Development
```

**Good:**
```
Phase 0: Prototype (validation)
Phase 1: Core System (MVP)
Phase 2: Intelligence Layer (optimization)
Phase 3: Advanced Features (integration)
```

### ❌ No Clear Boundaries
**Bad:**
- Phase 1 IN SCOPE: "Build the app"

**Good:**
- Phase 1 IN SCOPE:
  - Users CRUD (create, read, update, delete)
  - Authentication (JWT-based)
  - Dashboard (view only)

### ❌ Unrealistic Timelines
**Bad:**
- Phase 1: Complete system (1 week)

**Good:**
- Phase 0: Prototype (2-3 weeks)
- Phase 1: Core System (4-6 weeks)

### ❌ Missing Definition of Done
**Bad:**
- Phase 1: Build core features

**Good:**
- Phase 1 DoD:
  - [ ] All CRUD operations working
  - [ ] Tests passing (80% coverage)
  - [ ] Deployed to staging
  - [ ] API documentation complete

---

## References

- See `examples/multi-phase-finance-app.md` for complete example
- See `examples/ml-project-phases.md` for ML-specific phases
- See `template-comprehensive.md` for full phase structure template
