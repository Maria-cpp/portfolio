# CLAUDE.md — [Project Name]

## Current Phase
**[Phase Name]** ([Status])
Target: [Timeline]
Focus: [Phase Goal]

---

## Governance Editing Rules

When modifying any of the following documents:
- CLAUDE.md (this file)
- Database schemas
- API contracts
- Data models
- Core business logic

The assistant MUST:

- Treat changes as governance-level architectural corrections
- Not introduce new features without approval
- Not expand scope beyond current phase
- Not refactor unrelated sections
- Not change endpoints or contracts unless explicitly requested
- Only modify what is explicitly instructed

If additional improvements are identified, they must be listed separately and not automatically applied.

---

## Project Vision

[Brief 2-3 sentence description of what the project aims to achieve]

---

## Core Problem

[What problem does this solve?]

**Solution:**
[High-level approach]

---

## Tech Stack

### Frontend
- [Framework] (e.g., Next.js, React, Vue)
- [Language] (e.g., TypeScript, JavaScript)
- [Styling] (e.g., Tailwind CSS, CSS Modules)

### Backend
- [Framework] (e.g., FastAPI, Express, Django)
- [Language] (e.g., Python, Node.js, Go)
- [Validation] (e.g., Pydantic, Zod)

### Database
- [Database] (e.g., PostgreSQL, MongoDB, MySQL)

### Infrastructure
- [Additional services] (e.g., Redis, Docker, S3)

---

## Core Modules

- [Module 1]
- [Module 2]
- [Module 3]

TODO: Customize based on your project structure

---

## Scope Boundaries

### Current Phase - IN SCOPE:
- [Feature 1]
- [Feature 2]
- [Feature 3]

### Current Phase - OUT OF SCOPE:
- [Feature not in this phase]
- [Feature for later phase]

---

## Key Requirements

### [Requirement Category 1]
- [Specific requirement]
- [Specific requirement]

### [Requirement Category 2]
- [Specific requirement]
- [Specific requirement]

---

## Implementation Rules

### Code Quality
- Prefer simple, readable code over clever optimizations
- Follow existing patterns in the codebase
- Use type hints/annotations consistently
- Write clear function/variable names
- Keep functions small (< 50 lines)

### Development Workflow
- Use version control (git)
- Write meaningful commit messages
- Test locally before committing
- Never hardcode credentials (use .env)
- Use environment variables for configuration

### Database
- Use migrations for schema changes
- Index frequently queried fields
- Use foreign keys with cascade rules
- Add timestamps (created_at, updated_at) to tables

### API Design
- RESTful endpoints
- Consistent response format
- Proper HTTP status codes
- Pagination for list endpoints
- Filter, sort, search support

### Error Handling
- Return user-friendly error messages
- Log detailed errors server-side
- Use proper HTTP status codes
- Don't expose internal errors to clients

---

## Testing Guidance

### Minimum Tests
**Backend:**
- Core business logic
- API endpoint responses
- Database operations

**Frontend:**
- Component renders correctly
- Form validation
- User interactions

### Manual Testing
- Test happy paths
- Test error scenarios
- Verify data persistence
- Check cross-browser compatibility (if web)

---

## Progress Tracking (Mandatory)

The assistant MUST update `/Progress_Report.md` whenever:
- A feature is completed or partially completed
- A bug is fixed
- A milestone is reached
- Configuration or setup changes are made
- Tests are added or pass/fail status changes
- Any significant implementation progress occurs

**Progress Entry Format:**
```markdown
## [Date] - [Module/Feature]
**Status:** Completed | In Progress | Blocked
**What was done:**
- Bullet points of changes
**Next steps:**
- What comes next
**Blockers (if any):**
- Issues preventing progress
```

**Rule:** Don't batch updates. Log progress as it happens.

---

## Task Management & Todo Lists (Mandatory)

**CRITICAL:** The assistant MUST create and maintain todo lists when working on complex, multi-step tasks.

### When to Create a Todo List

Create a todo list when:
- A task involves 3 or more distinct implementation steps
- The work spans multiple files or modules
- The user provides multiple requirements or features to implement
- The task will take more than 15 minutes of focused work
- There are dependencies between subtasks

### Todo List Best Practices

1. **Create Immediately**: Set up the todo list BEFORE starting implementation
2. **Be Specific**: Each todo should be a clear, actionable item
3. **Use Three States**:
   - `pending` - Not yet started
   - `in_progress` - Currently working on (ONLY ONE task at a time)
   - `completed` - Finished successfully
4. **Provide Both Forms**:
   - `content`: Imperative form (e.g., "Create API endpoint")
   - `activeForm`: Present continuous form (e.g., "Creating API endpoint")
5. **Update in Real-Time**: Mark tasks as `in_progress` BEFORE working on them, `completed` IMMEDIATELY after finishing
6. **One Active Task**: Only ONE task should be `in_progress` at any time

### Example Todo List

```json
[
  {"content": "Set up project structure", "activeForm": "Setting up project structure", "status": "completed"},
  {"content": "Create database models", "activeForm": "Creating database models", "status": "completed"},
  {"content": "Implement API endpoint", "activeForm": "Implementing API endpoint", "status": "in_progress"},
  {"content": "Add validation logic", "activeForm": "Adding validation logic", "status": "pending"},
  {"content": "Write tests", "activeForm": "Writing tests", "status": "pending"}
]
```

**Rule:** If you're working on a complex task without a todo list, STOP and create one first.

---

## Documentation Sync (Mandatory)

The assistant MUST keep documentation current with the project:

### When to Update README.md
- Adding new features, scripts, or tools
- Adding new dependencies or setup steps
- Changing installation instructions
- Adding new environment variables

### When to Update CLAUDE.md
- Adding new workflows, rules, or conventions
- Changing architectural decisions
- Adding new modules or phases
- Updating scope boundaries

**Rule:** If something new is added to the project that is not documented, update the relevant file immediately.

---

## Success Criteria

**Current Phase:**
- [Success criterion 1]
- [Success criterion 2]
- [Success criterion 3]

---

## Development Mindset

**This is:**
- [What kind of system this is - e.g., "a financial system" or "a user-facing application"]

**Not just [common misconception].**

Every decision should prioritize:
1. **[Priority 1]** – [Explanation]
2. **[Priority 2]** – [Explanation]
3. **[Priority 3]** – [Explanation]

---

## Output Expectations for the Assistant

When generating code or artifacts:

1. **Provide file paths + complete file contents**
2. **Keep scope within current phase boundaries**
3. **Use explicit examples with request/response formats**
4. **Include acceptance criteria for each feature**
5. **Prefer small incremental steps that can be run and verified**
6. **Follow existing code patterns in the repository**
7. **Add comments only where logic is not self-evident**
8. **Use consistent naming and conventions**
9. **Test locally before presenting to user**
10. **Update todo list and progress report as you work**

---

## Canonical Documents

If there is a conflict between documents, the priority order is:
1. **CLAUDE.md** (this file) – governance and rules
2. **Database schema** – data contracts
3. **API specification** – interface contracts
4. **Implementation code** – actual behavior

---

## Notes

- [Any phase-specific notes]
- [Any technology-specific considerations]
- [Any team-specific workflows]
