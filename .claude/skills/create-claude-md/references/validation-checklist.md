# CLAUDE.md Validation Checklist

Use this checklist to validate generated CLAUDE.md files before delivery.

---

## Mandatory Sections (Must Have All)

- [ ] **Current Phase** indicator at top
- [ ] **Governance Editing Rules** section
- [ ] **Project Vision** or Overview
- [ ] **Tech Stack** section
- [ ] **Scope Boundaries** (what's in/out of scope)
- [ ] **Implementation Rules** section
- [ ] **Progress Tracking (Mandatory)** section
- [ ] **Task Management & Todo Lists (Mandatory)** section
- [ ] **Documentation Sync (Mandatory)** section
- [ ] **Output Expectations for the Assistant** section
- [ ] **Success Criteria** for current phase
- [ ] **Development Mindset** or guiding principles

---

## Content Quality Checks

- [ ] **Project name** correctly populated (not [Project Name] placeholder)
- [ ] **Tech stack** matches detected/confirmed stack
- [ ] **Current phase** indicator shows correct phase and status
- [ ] **No critical placeholders**: No `[PLACEHOLDER]`, `TODO`, `[...]` in required sections
- [ ] **Specific requirements**: Not just generic advice
- [ ] **Actionable guidance**: Clear "do this" instructions
- [ ] **Consistent formatting**: Proper markdown headers, code blocks
- [ ] **No typos**: Spell-checked

---

## Phase-Specific Checks

### Single-Phase Project
- [ ] Scope boundaries defined for current phase
- [ ] At least one Definition of Done section

### Multi-Phase Project
- [ ] Each phase has own scope boundaries
- [ ] Each phase has Definition of Done
- [ ] Clear progression (Phase 0 → 1 → 2 → 3)
- [ ] Current phase clearly indicated

---

## Domain-Specific Checks

### Finance/Fintech
- [ ] Duplicate detection requirements defined
- [ ] Audit logging requirements (immutable, append-only)
- [ ] Data integrity patterns included
- [ ] Fraud prevention notes (if applicable)
- [ ] Payment system design section (if applicable)

### Healthcare
- [ ] HIPAA/compliance notes present
- [ ] PHI handling rules defined
- [ ] Data retention policies mentioned
- [ ] Patient privacy requirements

### E-commerce
- [ ] Payment processing considerations
- [ ] Inventory management notes (if applicable)
- [ ] Order lifecycle defined

### Other Domains
- [ ] Domain best practices included
- [ ] Industry-specific patterns referenced

---

## Project Type-Specific Checks

### Web Application
- [ ] API contracts or endpoints mentioned
- [ ] Frontend and backend separation noted
- [ ] Deployment strategy included

### API/Backend Service
- [ ] API design patterns defined
- [ ] Response formats specified
- [ ] Error handling rules

### CLI Tool
- [ ] Command structure mentioned
- [ ] User interaction patterns
- [ ] Installation instructions referenced

### Library/SDK
- [ ] API surface area defined
- [ ] Usage examples referenced
- [ ] Versioning strategy

### Mobile App
- [ ] Platform targets (iOS/Android/both)
- [ ] App store considerations
- [ ] Offline support notes (if applicable)

### ML/Data Science
- [ ] Model versioning strategy
- [ ] Data pipeline patterns
- [ ] Experiment tracking approach

---

## Technical Quality Checks

### File Size
- [ ] Total lines < 1000 (warn if > 900)
- [ ] Not bloated with unnecessary details
- [ ] Details delegated to references where appropriate

### Structure
- [ ] Logical section ordering
- [ ] Clear hierarchy (headers)
- [ ] Consistent formatting
- [ ] Code blocks properly formatted

### Cross-References
- [ ] References to README.md (for setup instructions)
- [ ] References to API documentation (if applicable)
- [ ] References to other project docs (if exist)

---

## Mandatory Rules Validation

### Progress Tracking
- [ ] Section titled "Progress Tracking (Mandatory)"
- [ ] Instructions on when to update Progress_Report.md
- [ ] Format template provided
- [ ] "Don't batch updates" rule present

### Task Management
- [ ] Section titled "Task Management & Todo Lists (Mandatory)"
- [ ] "When to Create" guidance present
- [ ] Three states defined (pending, in_progress, completed)
- [ ] Example todo list provided with both forms (content + activeForm)
- [ ] "One task in_progress" rule present

### Documentation Sync
- [ ] Section titled "Documentation Sync (Mandatory)"
- [ ] When to update README.md specified
- [ ] When to update CLAUDE.md specified
- [ ] Rule about immediate documentation present

---

## Governance Validation

### Editing Rules
- [ ] Clear rules about not introducing features without approval
- [ ] Rules about not expanding scope
- [ ] Rules about protecting critical documents
- [ ] Process for suggesting improvements (list separately)

### Scope Protection
- [ ] IN SCOPE items clearly listed
- [ ] OUT OF SCOPE items clearly listed
- [ ] Phase boundaries prevent scope creep

### Data Contracts (if applicable)
- [ ] Critical API contracts defined
- [ ] Request/response formats shown
- [ ] "Must not break" indication present

---

## User Experience Validation

### Clarity
- [ ] AI assistant can understand project immediately
- [ ] No ambiguous instructions
- [ ] Clear priority order
- [ ] Actionable steps

### Completeness
- [ ] Covers enough to start work
- [ ] References available for deep dives
- [ ] No critical gaps

### Maintainability
- [ ] Easy to update when project evolves
- [ ] Clear section boundaries
- [ ] Modular structure

---

## Quality Score Calculation

### Critical Items (Must Pass All)
Each critical item is pass/fail:
- Mandatory sections present
- No critical placeholders
- Project-specific details filled
- < 1000 lines

If any critical item fails → **FAIL** (don't deliver, fix first)

### Quality Points (0-100)

Calculate based on checked items:

```
Total Checks = [count all checkboxes above]
Passed Checks = [count checked boxes]

Quality Score = (Passed Checks / Total Checks) * 100
```

### Rating Thresholds

| Score | Rating | Action |
|-------|--------|--------|
| 95-100 | **Excellent** | Deliver |
| 85-94 | **Good** | Deliver (note minor improvements) |
| 75-84 | **Adequate** | Fix major issues before delivery |
| < 75 | **Needs Work** | Significant fixes required |

---

## Common Issues & Fixes

### Issue: Too Generic
**Problem**: Content could apply to any project
**Fix**: Add project-specific details (tech stack, domain patterns, actual module names)

### Issue: Too Long (> 1000 lines)
**Problem**: Context bloat
**Fix**: Move detailed patterns to references/, keep CLAUDE.md high-level

### Issue: Missing Mandatory Sections
**Problem**: Incomplete guidance
**Fix**: Add all mandatory sections (use template)

### Issue: Placeholders Not Filled
**Problem**: Contains `[Project Name]`, `TODO`, etc.
**Fix**: Replace with actual project details

### Issue: No Scope Boundaries
**Problem**: No protection against scope creep
**Fix**: Define clear IN/OUT scope for current phase

### Issue: Weak Governance
**Problem**: No rules about what AI can/can't change
**Fix**: Add governance editing rules section

---

## Pre-Delivery Checklist

Before presenting CLAUDE.md to user:

1. [ ] Run through all validation checks above
2. [ ] Calculate quality score (must be ≥ 85)
3. [ ] Verify all critical items pass
4. [ ] Check file size (< 1000 lines)
5. [ ] Verify project-specific details filled
6. [ ] Test: Can AI assistant understand project from this file alone?
7. [ ] Test: Does it prevent common mistakes (scope creep, missing progress tracking)?

---

## Post-Delivery Validation

After user receives CLAUDE.md, verify:

1. **User can understand it** - Clear, not overwhelming
2. **User can customize it** - Placeholders for project-specific items marked clearly
3. **AI follows it** - Test with actual task to see if rules are enforced
4. **Easy to maintain** - User can update when project evolves

---

## Automated Validation Script (Optional)

If implementing automated validation:

```python
def validate_claude_md(file_path):
    """Validate CLAUDE.md file."""
    content = read_file(file_path)

    checks = {
        'has_current_phase': 'Current Phase' in content,
        'has_governance': 'Governance Editing Rules' in content,
        'has_progress_tracking': 'Progress Tracking (Mandatory)' in content,
        'has_task_management': 'Task Management' in content,
        'has_doc_sync': 'Documentation Sync' in content,
        'no_placeholders': '[Project Name]' not in content and 'TODO:' not in content,
        'under_1000_lines': len(content.split('\n')) < 1000,
    }

    score = (sum(checks.values()) / len(checks)) * 100

    return {
        'score': score,
        'checks': checks,
        'rating': get_rating(score),
        'passed': all(checks.values())
    }
```

---

## References

For examples of well-structured CLAUDE.md files, see:
- `references/examples/finance-web-app.md`
- `references/examples/ml-project.md`
- `references/examples/cli-tool.md`
