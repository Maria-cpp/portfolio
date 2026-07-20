---
name: create-claude-md
description: Generate project-specific CLAUDE.md files through interactive questionnaire
allowed-tools: [Read, Write, Glob, Grep, AskUserQuestion]
model: haiku
user-invocable: true
disable-model-invocation: true
---

# Create CLAUDE.md

Generate a production-quality CLAUDE.md file for your project through an interactive process.

## What This Skill Does

Creates comprehensive CLAUDE.md files that:
- Guide AI assistants on project governance and scope
- Define clear boundaries and data contracts
- Enforce progress tracking and task management
- Include domain-specific best practices
- Adapt to project type, domain, and phase

## Before Implementation

Gather context to ensure successful generation:

| Source | Gather | Method |
|--------|--------|--------|
| **Codebase** | Tech stack, structure, existing patterns | Glob package.json, requirements.txt, go.mod |
| **Existing Docs** | Current CLAUDE.md (if updating) | Read CLAUDE.md if exists |
| **User Input** | Project type, domain, phase, preferences | AskUserQuestion |
| **Skill References** | Templates and domain patterns | Read references/*.md |

### Context Gathering Steps

1. **Check for existing CLAUDE.md**
   - If exists: Offer update mode
   - If not: Offer fresh creation

2. **Detect tech stack automatically**
   ```
   Check for:
   - package.json → Next.js, React, TypeScript (frontend)
   - requirements.txt/pyproject.toml → FastAPI, Django, Flask (backend)
   - go.mod → Go backend
   - pom.xml/build.gradle → Java
   - Gemfile → Ruby
   - Docker files → Deployment approach
   ```

3. **Scan project structure**
   - Backend directory structure
   - Frontend directory structure
   - Existing documentation (README.md, docs/)

## Required Clarifications

Ask user these questions (limit to 3-4 per message):

### First Message (Core Context)

1. **Project name**: What is your project called?

2. **Project type** (single-select):
   - Web Application (frontend + backend)
   - API/Backend Service
   - CLI Tool
   - Library/SDK
   - Mobile App
   - Data Science/ML Project
   - Research Project

3. **Tech stack confirmation**:
   Auto-detected: [show detected stack]
   Is this correct? (y/n)
   If no, ask for manual input.

### Second Message (Domain & Phase)

4. **Project domain** (single-select):
   - E-commerce
   - Finance/Fintech
   - Healthcare
   - Education
   - Social Media
   - Enterprise/Business Tools
   - IoT/Hardware
   - Other

5. **Current phase** (single-select):
   - Planning/Design
   - Prototype (2-4 weeks)
   - MVP (1-3 months)
   - Production (live users)
   - Maintenance/Enhancement

6. **Development phases**: Single-phase or multi-phase?
   If multi-phase, how many? (2-6 typical)

## Optional Clarifications

Ask only if relevant:

7. **Critical concerns** (multi-select):
   - Security & Compliance
   - Data Integrity & Accuracy
   - Fraud Prevention
   - Performance at Scale
   - Real-time Processing
   - Audit Trail & Logging
   - Multi-tenancy
   - Offline Support

8. **Template level**:
   - Minimal (~300 lines) - Solo dev, simple project
   - Standard (~600 lines) - Small team, typical project [DEFAULT]
   - Comprehensive (~900 lines) - Medium team, multi-phase
   - Enterprise (~1200 lines) - Large team, regulated industry

9. **Create specialized agents?** (yes/no)
   Creates `.claude/agents/` directory with module-specific agent files.

10. **Create Progress_Report.md?** (yes/no)
    Creates template for progress tracking.

Note: Don't ask all questions at once. Pace across 2-3 messages maximum.

## Implementation Steps

### Step 1: Select Template

Use template selection logic:

```
if (project_type == "Web Application" && domain == "Finance") {
  base_template = "comprehensive"
  add_sections = ["Security", "Audit Logging", "Data Contracts", "Fraud Prevention"]
}

if (project_type == "CLI Tool") {
  base_template = "minimal"
  exclude_sections = ["Deployment Strategy", "Security", "Performance Rules"]
}

if (project_type == "ML Project") {
  base_template = "standard"
  add_sections = ["Model Versioning", "Experiment Tracking", "Data Pipeline"]
}
```

Load template from `references/template-{level}.md`

### Step 2: Customize Template

Apply customizations:

1. **Inject project details**
   - Replace `[Project Name]` with actual name
   - Replace `[Tech Stack]` with detected/confirmed stack
   - Set current phase indicator

2. **Add domain-specific sections**
   - Load patterns from `references/domain-{domain}.md`
   - Insert after Key Requirements section

3. **Add phase structure** (if multi-phase)
   - Load from `references/phase-patterns.md`
   - Generate Definition of Done for each phase
   - Add scope boundaries per phase

4. **Add concern-specific sections**
   - Security concerns → Add Security section
   - Audit concerns → Enhance Audit Logging section
   - Performance → Add Performance Rules

5. **Populate Core Modules**
   - Extract from project structure if available
   - Otherwise use template placeholders with TODO comments

### Step 3: Generate Data Contracts (if applicable)

For Web Apps and APIs:
- Include Critical Data Contracts section
- Add placeholder API contract examples
- Include request/response formats
- Note that user should customize

### Step 4: Validate Output

Before presenting to user, check:

| Validation | Criteria |
|------------|----------|
| **Line count** | < 1000 lines (warn if > 900) |
| **Mandatory sections** | Governance Rules, Scope Boundaries, Progress Tracking, Task Management |
| **No placeholders** | No unresolved `[PLACEHOLDER]` or `TODO` in critical sections |
| **Consistent formatting** | Proper markdown headers, code blocks |
| **Phase-specific DoD** | Each phase has Definition of Done |

Use checklist from `references/validation-checklist.md`

### Step 5: Create Supporting Files (if requested)

If user requested:

**Progress_Report.md:**
```markdown
# Progress Report - [Project Name]

## [Date] - Project Initialization
**Status:** In Progress
**What was done:**
- Created CLAUDE.md
- Set up project structure
**Next steps:**
- Begin Phase 0 implementation
```

**Specialized Agents** (`.claude/agents/`):
- `backend.md` - Backend development agent
- `frontend.md` - Frontend development agent
- `database.md` - Database schema agent
- `testing.md` - Test automation agent
- `devops.md` - Deployment agent
- `integration.md` - Cross-module integration agent

Load agent templates from `references/agent-templates/`

## Output Specification

Generate these files:

### Primary Output
- **CLAUDE.md** (600-900 lines for comprehensive)
  - Frontmatter with current phase
  - Governance rules
  - Project vision and tech stack
  - Scope boundaries
  - Key requirements
  - Data contracts (if applicable)
  - Phase breakdown (if multi-phase)
  - Implementation rules
  - Performance rules (if applicable)
  - Security (if applicable)
  - Testing guidance
  - Progress tracking (mandatory)
  - Task management (mandatory)
  - Documentation sync (mandatory)
  - Success criteria
  - Output expectations

### Optional Outputs
- **Progress_Report.md** (if requested)
- **.claude/agents/*.md** (if agents requested)

## Output Checklist

Before delivery, verify:

- [ ] CLAUDE.md exists and is well-formed
- [ ] Project name correctly populated
- [ ] Tech stack matches detected/confirmed stack
- [ ] Current phase indicator present
- [ ] Governance rules section included
- [ ] Scope boundaries defined clearly
- [ ] Progress tracking rules present (mandatory)
- [ ] Task management rules present (mandatory)
- [ ] Documentation sync rules present (mandatory)
- [ ] At least one Definition of Done present
- [ ] No critical `[PLACEHOLDER]` or `TODO` items
- [ ] File size < 1000 lines
- [ ] Cross-references to README.md mentioned
- [ ] If multi-phase: all phases have scope + DoD
- [ ] If finance/healthcare: compliance notes present
- [ ] If agents requested: agent files created

## Must Follow

### Content Quality
- Keep CLAUDE.md concise (< 1000 lines)
- Use project-specific details (no generic text)
- Include all mandatory sections
- Provide actionable guidance, not vague advice
- Use imperative form ("Do X" not "You should do X")

### Template Selection
- Match template to project complexity
- Don't over-engineer for simple projects
- Don't under-specify for complex projects
- Apply domain patterns consistently

### User Experience
- Pace questions across 2-3 messages
- Show detected values for confirmation
- Explain what each section does
- Provide next steps after generation

## Must Avoid

- Creating CLAUDE.md > 1000 lines (bloat)
- Leaving critical placeholders unfilled
- Adding features beyond template level
- Asking all 10 questions in one message
- Modifying README.md without permission
- Creating agent files without user request
- Hardcoding project-specific data in templates
- Including outdated best practices

## Domain-Specific Patterns

### Finance/Fintech
Include:
- Data integrity requirements
- Audit logging (immutable)
- Fraud prevention patterns
- Reconciliation rules
- Regulatory compliance notes
- Payment system design

See `references/domain-finance.md`

### Healthcare
Include:
- HIPAA/compliance notes
- PHI handling rules
- Data retention policies
- Patient privacy requirements
- Audit requirements

See `references/domain-healthcare.md`

### E-commerce
Include:
- Payment processing
- Inventory management
- Order lifecycle
- Fraud detection

See `references/domain-ecommerce.md`

### Other Domains
Load patterns from `references/domain-{domain}.md` if available.

## Update Mode

If CLAUDE.md already exists:

1. **Read existing file**
2. **Analyze current structure**
3. **Detect missing sections** (compare against current best practices)
4. **Prompt user:**
   ```
   Found existing CLAUDE.md ([X] lines).

   Missing sections:
   - Progress Tracking (Mandatory)
   - Task Management (Mandatory)
   - Definition of Done for Phase [N]

   Options:
   1. Add missing sections (preserve existing content)
   2. Regenerate from scratch (backup old file)
   3. Cancel
   ```
5. **If adding sections:** Insert in appropriate locations
6. **If regenerating:** Save backup as `CLAUDE.md.backup`

## Edge Cases

### No Tech Stack Detected
- Ask user to specify manually
- Provide common options

### Unknown Project Type
- Use "Other" category
- Ask for brief description
- Select closest template (default: Standard)

### Very Large Codebase
- Warn that detection may take time
- Offer to skip structure scan
- Focus on user input

### Multi-language Projects
- List all detected languages
- Ask for primary stack
- Note secondary technologies

## Success Criteria

Generated CLAUDE.md should:
- Pass validation checklist (100%)
- Enable AI assistant to understand project immediately
- Prevent scope creep through clear boundaries
- Enforce progress tracking and task management
- Reflect project domain best practices
- Be maintainable (easy to update when project evolves)

## Reference Files

| File | Contents |
|------|----------|
| `references/template-minimal.md` | Minimal template (~300 lines) |
| `references/template-standard.md` | Standard template (~600 lines) |
| `references/template-comprehensive.md` | Comprehensive template (~900 lines) |
| `references/template-enterprise.md` | Enterprise template (~1200 lines) |
| `references/template-selector.md` | Template selection logic |
| `references/domain-finance.md` | Finance-specific patterns |
| `references/domain-healthcare.md` | Healthcare-specific patterns |
| `references/domain-ecommerce.md` | E-commerce patterns |
| `references/phase-patterns.md` | Multi-phase structure patterns |
| `references/validation-checklist.md` | Quality validation rules |
| `references/agent-templates/` | Specialized agent templates |
| `references/examples/` | Example CLAUDE.md files |

## Usage Examples

### Create new CLAUDE.md
```
User: Help me create a CLAUDE.md for my project
Assistant: [Uses this skill to generate via questionnaire]
```

### Update existing CLAUDE.md
```
User: Update my CLAUDE.md with missing sections
Assistant: [Reads existing, detects gaps, offers updates]
```

### Quick generation with args
```
User: Create CLAUDE.md for finance web app in prototype phase
Assistant: [Uses provided context, confirms tech stack, generates]
```

---

**Note:** This skill generates the *structure and guidance*. Users should customize:
- Core Modules (project-specific)
- Data Contracts (API-specific)
- Success Criteria (business-specific)
- Phase timelines (team-specific)
