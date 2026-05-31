# Audit Log — Nikon NIKKOR Z 50mm f/1.2 S

Patent: WO 2021/241230 A1

## 2026-05-20 — Patent unavailable disposition

### Phase 1 — Glass corrections

- Deferred. The local untracked `patents/` folder does not contain a readable WO 2021/241230 A1 PDF (`find patents -maxdepth 1 -type f -iname '*241230*'` returned no matches).
- No glass labels were changed because the requested workflow requires reviewing the actual local patent file.

### Phase 2 — Retained-information audit

- Deferred until the patent PDF is added to `patents/`.

### Phase 3 — Spectral / metadata enrichment

- Deferred.

### Phase 4 — Analysis sync

- No analysis changes made.

### Verification

- `npm run generate:glass-reports` — passed; this lens remains in `catalog-mismatches.generated.md` and `glass-relabel-by-lens.generated.md` pending patent review.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-05-31 — First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO 2021/241230 A1 / `241230`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.
