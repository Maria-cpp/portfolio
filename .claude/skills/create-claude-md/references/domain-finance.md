# Finance/Fintech Domain Patterns

Add these sections and patterns to CLAUDE.md for finance/fintech projects.

---

## Additional Key Requirements

### Centralized Data
- Relational system with normalized entities
- Reusable entities across modules
- Referential integrity enforced at DB level
- Soft deletes for audit compliance (never hard delete financial records)

### Attachments & Documentation
- Bills, invoices, receipts storage
- OCR-ready format support
- Hash-based duplicate detection
- Secure storage with encryption at rest
- File size limits enforced
- Allowed types: PDF, PNG, JPG, JPEG

### Duplicate Detection (CRITICAL)

**Detection Logic:**
- Same vendor + same site + similar amount (within threshold)
- Same invoice/bill number
- Similar amount (within 5% threshold)
- Same date range (within configurable days)

**System Behavior:**
- Warn before submit
- Show similar records with confidence score
- Allow override (with mandatory reason)
- Log everything (who, when, why, what was overridden)
- Flag in audit log when override used

**Phase 0:** Basic rule-based matching
**Phase 1:** Enhanced UI with side-by-side comparison
**Phase 2:** AI-powered semantic matching

### Ledger System

**Ledger Types:**
- Entity ledgers (site, vendor, contractor, customer)
- Account ledgers (cash, bank, accounts payable/receivable)
- Project ledgers (if project-based accounting)

**Features:**
- Real-time balance calculation
- Drill-down capability (entity → transaction)
- Date range filtering
- Reconciliation support
- Export to CSV/PDF for auditing

**Ledger Entry Fields:**
- entry_type (PURCHASE, PAYMENT, ADJUSTMENT, REFUND, REVERSAL)
- entry_source_type (MANUAL, IMPORT, SYSTEM, GATEWAY)
- debit/credit amounts (store as integers in smallest currency unit)
- running balance
- external_reference (invoice #, payment reference)
- settlement_date
- reconciliation_status
- created_by, created_at, updated_at

### Audit Logging (CRITICAL)

**Track:**
- User actions (CREATE, UPDATE, DELETE, OVERRIDE, APPROVE, REJECT)
- Changes (before/after snapshots in JSON)
- Override reasons (for duplicate warnings, approval overrides)
- Timestamps (UTC only)
- IP address and user agent
- Request metadata (API endpoint, parameters)
- Financial amounts (log both old and new values)

**Immutability:**
- Audit logs are append-only (no updates or deletes)
- Store in separate table with row-level security
- Retention policy: indefinite (or per regulatory requirements)
- Backup audit logs separately
- Hash chain for tamper detection (optional, for high-security)

---

## Critical Data Contracts

### Transaction Entry API

```json
POST /api/transactions
{
  "entity_id": "uuid",
  "transaction_type": "PURCHASE|PAYMENT|ADJUSTMENT",
  "amount": number,
  "currency": "USD",
  "date": "ISO-8601",
  "reference_number": "string (optional)",
  "description": "string",
  "attachments": ["file_id_1", "file_id_2"],
  "metadata": {
    "custom_field_1": "value"
  }
}

Response:
{
  "transaction_id": "uuid",
  "duplicate_warning": {
    "has_duplicates": boolean,
    "similar_entries": [...],
    "confidence": number,
    "requires_override": boolean
  },
  "ledger_balance": number,
  "created_at": "ISO-8601"
}
```

### Duplicate Detection Response

```json
GET /api/transactions/check-duplicate
{
  "is_duplicate": boolean,
  "confidence": number (0-100),
  "similar_entries": [
    {
      "transaction_id": "uuid",
      "entity_name": "string",
      "date": "ISO-8601",
      "amount": number,
      "similarity_score": number,
      "matching_fields": ["entity", "amount", "date", "reference"]
    }
  ],
  "warnings": ["string"],
  "requires_override": boolean,
  "override_reason_required": boolean
}
```

### Payment Entry API

```json
POST /api/payments
{
  "transaction_id": "uuid (optional - if paying against specific transaction)",
  "entity_id": "uuid",
  "payment_mode": "CASH|CHEQUE|BANK_TRANSFER|GATEWAY|WALLET",
  "payment_channel": "MANUAL|GATEWAY|IMPORT",
  "payment_status": "PENDING|COMPLETED|FAILED|CANCELLED",
  "amount": number,
  "currency": "USD",
  "payment_date": "ISO-8601",
  "payment_reference_no": "string (optional)",
  "bank_details": {
    "bank_name": "string",
    "account_number": "string (last 4 digits only)",
    "transaction_id": "string"
  },
  "notes": "string (optional)"
}
```

**Note:** Store amounts as integers (smallest currency unit - cents for USD) to avoid floating-point errors.

---

## Payment System Design

### Manual Payments (Phase 0-1)
- Cash
- Cheque
- Bank transfer (manual entry)

### Digital Payments (Phase 2-3)
- Payment gateway integration (Stripe/Razorpay/PayPal)
- Wallet integration
- API-based settlements
- Webhook handling for status updates

### Payment Entry Fields

**Phase 0-1 (Minimal):**
- payment_mode, payment_channel, payment_status
- amount (as integer in smallest unit)
- currency (ISO 4217 code)
- payment_date, payment_reference_no
- notes

**Phase 2-3 (Gateway):**
- external_transaction_id
- external_order_id
- gateway_provider
- gateway_status
- initiated_at, paid_at
- failure_reason
- reconciliation_status
- approved_by, approved_at

---

## Security (Finance-Specific)

### Authentication & Authorization
- JWT tokens with short expiration (15-30 minutes)
- Role-based access control (RBAC) - strict separation of duties
- Multi-factor authentication for financial operations
- Session timeout (configurable, default 30 minutes)
- Password complexity requirements
- Failed login attempt tracking

### Data Protection
- Encryption at rest (database, file storage)
- Encryption in transit (TLS 1.3 only)
- PCI DSS compliance (if handling card data)
- Secure file uploads (virus scanning, size limits)
- SQL injection prevention (parameterized queries only)
- XSS prevention (sanitize all inputs)
- CSRF protection (token-based)

### Financial Data Handling
- Never log sensitive data (card numbers, passwords)
- Mask sensitive data in UI (show last 4 digits only)
- Store amounts as integers (avoid floating-point)
- Use database transactions for multi-step operations
- Implement idempotency for payment operations
- Rate limiting on financial endpoints

### Audit & Compliance
- Immutable audit logs
- Before/after snapshots for all changes
- IP address and user agent tracking
- Retention policy enforcement
- Regular audit exports
- Separation of duties enforcement

---

## Performance Rules (Finance-Specific)

- **Pagination everywhere** (default: 50, max: 100 for financial records)
- **Indexed queries** (entity_id, date ranges, status fields)
- **Async processing** for:
  - OCR extraction
  - Report generation
  - Bulk imports
  - Reconciliation jobs
- **Caching** (Redis) for:
  - Ledger balances (invalidate on transaction)
  - Dashboard metrics (5-minute TTL)
  - Entity details (15-minute TTL)
- **Database query optimization**:
  - Avoid N+1 queries
  - Use joins for related data
  - Denormalize read-heavy data
- **API response time targets**:
  - Read operations: < 200ms
  - Write operations: < 500ms
  - Reports: < 2s (or async)

---

## Testing Guidance (Finance-Specific)

### Critical Test Cases

**Duplicate Detection:**
- Same entity + exact amount + same date → 100% match
- Same entity + similar amount (within 5%) + similar date (within 7 days) → high match
- Different entity + same amount → no match
- Same entity + different amount → no match

**Ledger Accuracy:**
- Running balance calculation
- Multi-currency conversions (if applicable)
- Transaction reversal impact
- Date-range filtering accuracy

**Payment Processing:**
- Payment creation
- Payment status updates
- Failed payment handling
- Duplicate payment prevention
- Idempotency verification

**Audit Logging:**
- All CRUD operations logged
- Before/after snapshots captured
- Override reasons recorded
- Immutability verified (no updates/deletes)

### Compliance Tests
- Data retention policy adherence
- Soft delete verification (no hard deletes)
- Access control enforcement
- Encryption verification

---

## Fraud Prevention Patterns

### Red Flags to Detect

1. **Duplicate Transactions**
   - Same vendor, amount, date within threshold
   - Same invoice number used multiple times

2. **Unusual Patterns**
   - Transactions just below approval threshold (e.g., $9,999 when limit is $10,000)
   - Multiple small transactions to same vendor in short time
   - Transactions outside business hours (configurable)
   - First-time vendor with large amount

3. **Data Anomalies**
   - Missing or invalid invoice numbers
   - Rounded amounts (e.g., exactly $5,000.00) - may indicate estimates or fraud
   - Vendor name variations (typos, case differences)

### Detection Actions

- **Automatic flagging** for review
- **Notification** to approvers
- **Mandatory review** before approval
- **Audit trail** of all flags and resolutions

---

## Reconciliation Patterns

### Bank Reconciliation
- Match bank statements to recorded payments
- Flag unmatched transactions
- Handle timing differences
- Support CSV import of bank statements

### Vendor Reconciliation
- Match invoices to payments
- Calculate outstanding balances
- Generate vendor statements
- Track aging (30/60/90 days)

### Internal Reconciliation
- Ledger balance vs. database sum
- Periodic recalculation and verification
- Discrepancy detection and alerting

---

## Regulatory Compliance Notes

### General Financial Regulations
- Maintain audit trail (SOX, GAAP requirements)
- Data retention periods (typically 7 years minimum)
- Access controls and separation of duties
- Financial reporting accuracy

### Industry-Specific
- **Construction**: Lien waivers, retainage tracking
- **SaaS**: Revenue recognition (ASC 606)
- **E-commerce**: Tax compliance, PCI DSS

### Privacy Regulations
- GDPR (if EU users): Right to be forgotten (soft delete with anonymization)
- CCPA (if California users): Data export and deletion
- SOC 2: Security controls and audit readiness

---

## Phase 0 Simplifications

For prototype phase, omit:
- Payment gateway integration (manual only)
- Advanced reconciliation (basic view only)
- AI/ML fraud detection (rule-based only)
- Multi-currency support
- Advanced reporting

Focus on:
- Core CRUD operations
- Basic duplicate detection
- Simple ledger view
- Audit logging foundation

---

## Development Mindset for Finance Projects

**This is:**
- A financial system (accuracy is CRITICAL)
- A fraud prevention system (security is PARAMOUNT)
- An operational control platform (visibility is ESSENTIAL)
- An audit-ready system (traceability is MANDATORY)

**Not just CRUD.**

Every decision must prioritize:
1. **Data Integrity** – No duplicate or fraudulent entries, no data loss
2. **Auditability** – Full transparency and traceability for all operations
3. **Security** – Protect sensitive financial data at all costs
4. **Accuracy** – Correct calculations, no rounding errors, validated inputs
5. **Compliance** – Meet regulatory requirements from day one

---

## Common Pitfalls to Avoid

1. **Floating-point arithmetic** – Always use integers (cents, not dollars)
2. **Hard deletes** – Always soft delete for audit compliance
3. **Insufficient logging** – Log all financial operations with before/after
4. **Weak validation** – Validate all inputs, amounts, dates, references
5. **No idempotency** – Payment operations must be idempotent
6. **Inadequate testing** – Test money calculations thoroughly
7. **Poor error handling** – Never silently fail financial operations
8. **Missing reconciliation** – Always provide way to verify data accuracy
