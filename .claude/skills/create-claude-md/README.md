# create-claude-md Skill

Generate comprehensive, project-specific CLAUDE.md files through an interactive questionnaire.

---

## Overview

This skill helps you create high-quality AI assistant guidance documents (CLAUDE.md) tailored to your project's needs. Instead of spending 2-4 hours writing from scratch, answer 6-10 questions and get a production-quality CLAUDE.md in 10-15 minutes.

---

## Installation

### Option 1: Use in Current Project
Already installed in `.claude/skills/create-claude-md/`

### Option 2: Copy to Other Projects
```bash
cp -r .claude/skills/create-claude-md /path/to/other/project/.claude/skills/
```

### Option 3: Global Installation (if supported)
Place in your global Claude Code skills directory.

---

## Usage

### Basic Usage
```
/create-claude-md
```

The skill will:
1. Auto-detect your tech stack
2. Ask targeted questions about your project
3. Generate tailored CLAUDE.md
4. Validate quality before delivery

### Update Existing CLAUDE.md
If CLAUDE.md already exists, the skill will offer update mode:
- Detect missing sections
- Add them while preserving existing content
- Show diff before applying

---

## What You'll Be Asked

### Core Questions (Always)
1. **Project name**: What is your project called?
2. **Project type**: Web App, API, CLI, Library, Mobile, ML, Research?
3. **Tech stack confirmation**: Confirm auto-detected stack
4. **Project domain**: Finance, Healthcare, E-commerce, Enterprise, etc.?
5. **Current phase**: Prototype, MVP, Production?
6. **Development phases**: Single-phase or multi-phase (2-6)?

### Optional Questions
7. **Critical concerns** (multi-select): Security, Performance, Audit Trail, etc.?
8. **Template level**: Minimal, Standard, Comprehensive, Enterprise?
9. **Create specialized agents?**: Generate `.claude/agents/` directory?
10. **Create Progress_Report.md?**: Generate progress tracking template?

**Note**: Questions are paced across 2-3 messages, not all at once.

---

## What Gets Generated

### Primary Output: CLAUDE.md

**Mandatory Sections (Always Included)**:
- Current Phase indicator
- Governance Editing Rules
- Project Vision
- Tech Stack
- Scope Boundaries (IN/OUT per phase)
- Implementation Rules
- Progress Tracking (Mandatory)
- Task Management & Todo Lists (Mandatory)
- Documentation Sync (Mandatory)
- Output Expectations for AI
- Success Criteria

**Optional Sections (Based on Your Answers)**:
- Critical Data Contracts (Web Apps, APIs)
- Security (if security concern selected)
- Performance Rules (if performance concern selected)
- Domain-specific patterns (Finance, Healthcare, etc.)
- Phase breakdown (if multi-phase)
- Deployment Strategy (not for CLI/Library)

### Optional Outputs
- **Progress_Report.md**: Template for tracking progress
- **.claude/agents/*.md**: Specialized agent files for modules

---

## Template Levels

| Level | Lines | Best For | Includes |
|-------|-------|----------|----------|
| **Minimal** | ~300 | Solo dev, simple projects | Core sections only |
| **Standard** | ~600 | Small teams, typical projects | + Domain patterns [DEFAULT] |
| **Comprehensive** | ~900 | Medium teams, multi-phase | + Phase structure + Data contracts |
| **Enterprise** | ~1200 | Large teams, regulated | + Compliance + Advanced security |

---

## Domain-Specific Patterns

### Finance/Fintech
Automatically includes:
- Duplicate detection logic (vendor + site + amount matching)
- Audit logging requirements (immutable, append-only)
- Fraud prevention patterns
- Payment system design (manual → gateway progression)
- Reconciliation patterns
- Regulatory compliance notes
- Ledger system design
- Financial data handling (store as integers, avoid floating-point)

### Healthcare
Automatically includes:
- HIPAA compliance guidelines
- PHI handling rules
- Data retention policies
- Patient privacy requirements
- Audit requirements

### E-commerce
Automatically includes:
- Payment processing patterns
- Inventory management notes
- Order lifecycle tracking
- Fraud detection

### ML/Data Science
Automatically includes:
- Model versioning strategy
- Experiment tracking approach
- Data pipeline patterns
- Reproducibility requirements

---

## Examples

### Example 1: Finance Web App

**Input**:
- Type: Web Application
- Domain: Finance/Fintech
- Phase: Prototype
- Phases: 4
- Concerns: Data Integrity, Fraud Prevention, Audit Trail

**Output**: 847-line CLAUDE.md with:
- Governance rules preventing scope creep
- 4 phases with clear IN/OUT scope per phase
- Duplicate detection patterns (vendor + site + amount)
- Immutable audit logging requirements
- Payment system design (Phase 0: manual, Phase 3: gateway)
- Ledger system design
- Fraud prevention checks
- Definition of Done for each phase

### Example 2: Healthcare API

**Input**:
- Type: API/Backend Service
- Domain: Healthcare
- Phase: MVP
- Phases: Single
- Concerns: Security, Compliance, Audit Trail

**Output**: 612-line CLAUDE.md with:
- HIPAA compliance notes
- PHI handling rules
- API design patterns
- Data retention policies
- Security requirements
- Audit logging (immutable)

### Example 3: CLI Tool

**Input**:
- Type: CLI Tool
- Domain: Developer Tools
- Phase: Production
- Phases: Single
- Concerns: None selected

**Output**: 347-line CLAUDE.md with:
- Core sections only
- Command structure guidance
- User interaction patterns
- Installation notes
- No deployment/security sections (not needed for CLI)

---

## File Structure

```
.claude/skills/create-claude-md/
├── SKILL.md                          # Main skill logic (~400 lines)
├── README.md                         # This file
├── references/
│   ├── template-standard.md          # Default template
│   ├── domain-finance.md             # Finance-specific patterns
│   ├── domain-healthcare.md          # Healthcare patterns (placeholder)
│   ├── domain-ecommerce.md           # E-commerce patterns (placeholder)
│   ├── phase-patterns.md             # Multi-phase structure patterns
│   └── validation-checklist.md       # Quality validation rules
└── assets/
    └── README.md                     # Asset notes
```

---

## Quality Validation

Before delivery, the skill validates:

### Critical Checks (Must Pass)
- [ ] CLAUDE.md < 1000 lines
- [ ] All mandatory sections present
- [ ] No unresolved `[PLACEHOLDER]` or `TODO` in critical sections
- [ ] Project name filled in
- [ ] Tech stack matches detected/confirmed
- [ ] Current phase indicator present

### Quality Checks
- [ ] Scope boundaries defined
- [ ] At least one Definition of Done
- [ ] Phase-specific DoD (if multi-phase)
- [ ] Domain patterns included (if applicable)
- [ ] Consistent formatting
- [ ] Links to README.md mentioned

**Quality Score**: Calculated as percentage of passed checks.
- 95-100: Excellent
- 85-94: Good
- 75-84: Adequate
- <75: Needs work

---

## Customization After Generation

The generated CLAUDE.md is a comprehensive starting point. You should customize:

### Project-Specific Details
- **Core Modules**: Replace generic list with actual modules
- **Data Contracts**: Add actual API endpoints and formats
- **Success Criteria**: Add business-specific metrics

### Business Rules
- **Approval workflows**: Add if applicable
- **Compliance requirements**: Add industry-specific regulations
- **Custom processes**: Add team-specific workflows

### Timelines
- **Phase durations**: Adjust based on team capacity
- **Definition of Done**: Add project-specific acceptance criteria

---

## Troubleshooting

### Tech Stack Not Detected
**Solution**: Manually specify when prompted. The skill will ask for confirmation.

### Domain Not Listed
**Solution**: Select "Other" and provide brief description. Use Standard template, then manually add domain patterns.

### Generated File Too Long
**Solution**: Choose a lower template level (Minimal or Standard instead of Comprehensive).

### Missing Sections
**Solution**: Run skill again in update mode to detect and add missing sections.

### Need Different Structure
**Solution**: Edit `references/template-standard.md` to customize default template.

---

## Advanced Usage

### Custom Templates
Create your own template:
1. Copy `references/template-standard.md`
2. Modify as needed
3. Save as `references/template-custom.md`
4. Update SKILL.md template selector logic

### Custom Domain Patterns
Add domain for your industry:
1. Create `references/domain-yourinddustry.md`
2. Follow format from `domain-finance.md`
3. Include patterns, requirements, anti-patterns

### Validation Rules
Customize quality checks:
1. Edit `references/validation-checklist.md`
2. Add industry-specific checks
3. Adjust quality score thresholds

---

## FAQ

**Q: Can I use this for existing projects?**
A: Yes! If CLAUDE.md exists, the skill offers update mode to add missing sections.

**Q: Will it overwrite my existing CLAUDE.md?**
A: No. Update mode preserves existing content and only adds missing sections. A backup is created.

**Q: What if my project uses uncommon tech stack?**
A: Specify manually when prompted. The skill will still generate appropriate guidance.

**Q: Can I regenerate if I don't like the output?**
A: Yes! The skill saves a backup as `CLAUDE.md.backup`. You can also run again with different answers.

**Q: How do I contribute domain patterns?**
A: Create a file like `references/domain-yourname.md` following existing patterns. Submit PR or share with community.

---

## Contributing

### Ways to Contribute
1. **Test on different project types** - Share feedback
2. **Add domain patterns** - Your industry expertise
3. **Improve templates** - Better structures
4. **Fix bugs** - Submit issues/PRs
5. **Share examples** - Post generated CLAUDE.md files (redacted)

---

## License

[Specify license - likely same as main project]

---

## Support

- **Issues**: [GitHub issues link]
- **Discussions**: [Community forum link]
- **Documentation**: See `SKILL_SPEC_CREATE_CLAUDE_MD.md` for full specification

---

## Changelog

### v1.0.0 (Current)
- Initial release
- Standard template
- Finance domain patterns
- Phase structure support
- Quality validation
- Update mode

### Future
- Community templates
- More domain patterns (Healthcare, E-commerce completed)
- AI-assisted content suggestions
- Export formats (PDF, HTML)
- Template marketplace

---

## Credits

Created for the BuildOps project (Construction Finance Platform).

Inspired by the need for better AI collaboration documentation.

Built with Claude Code skill framework.

---

**Ready to create your CLAUDE.md? Run `/create-claude-md` now!** 🚀
