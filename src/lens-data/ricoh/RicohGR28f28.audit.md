# Audit Log — Ricoh GR 28mm f/2.8

Patent: US 5,760,973

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/US5760973.pdf` (untracked local file).
- `pdftotext -layout` extracted the Example 1 prescription table; row 4 lists the L(2,2) glass as `168893 / 31.2`, i.e. nd=1.68893, vd=31.2.

| Element / surface | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L(2,2) / row 4 | 1.68893 / 31.2 | `S-TIM35 (OHARA) / FD110 (HOYA)` | `E-FD8 (HOYA, patent nd/vd match) / S-TIM28` | HOYA E-FD8 and OHARA S-TIM28 are the catalog-tolerance matches for the stored patent pair; the previous label resolved to the wrong glass. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 5,760,973 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Final remainder recheck

- Rechecked the local `patents/` folder while finishing the remaining catalog-mismatch rows. A US 5,760,973 PDF is still not present.
- No glass labels or SDs were changed, and no figure comparison could be performed from the local untracked patent set.
