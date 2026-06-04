# Audit Log — Nikon NIKKOR Z 50mm f/1.2 S

Patent: WO 2021/241230 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2021241230A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L12 / row 3 | 1.94595 / 18.0 | `E-FDS1-W (HIKARI)` | `FDS18 (HOYA, patent nd/vd match; E-FDS1-W relabel)` | HOYA FDS18 round-trips the stored patent pair. |
| L13 / row 5 | 1.55298 / 55.1 | `S-TIL25 (OHARA)` | `Unmatched (patent nd=1.55298/vd=55.10; no public catalog candidate)` | No public catalog candidate clears the consistency threshold. |
| L19 / row 17 | 1.73800 / 32.3 | `S-NBH52V (OHARA)` | `S-NBH53V (OHARA, patent nd/vd match)` | OHARA S-NBH53V clears the prior S-NBH52V mismatch. |
| L32 / row 26 | 1.76450 / 49.1 | `S-NBH56 (OHARA)` | `S-LAH96 (OHARA, patent nd/vd match)` | OHARA S-LAH96 round-trips the stored patent pair. |
| L42 / row 30 | 1.90265 / 35.8 | `S-LAH79 (OHARA)` | `J-LASFH9 (Hikari, patent nd/vd match)` | Hikari J-LASFH9 clears the prior S-LAH79 mismatch. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

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
