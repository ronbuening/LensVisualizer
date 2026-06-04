# Audit Log — Nikon NIKKOR-N Auto 24mm f/2.8

Patent: US 3,622,227

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/US3622227.pdf` (untracked local file).
- `pdftotext -layout` extracted the patent prescription table; Google Patents OCR for the same US publication was used to cross-check the compact claim table.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L6 / n6 | 1.78470 / 26.1 | `SF56A (Schott) / S-TIH6 (Ohara)` | `S-TIH23 (OHARA, patent nd/vd match; SF11 family)` | The n6 row omits vd, but n6 and n7 share nd=1.78470 and n7 lists vd=26.1. |
| L7 / n7 | 1.78470 / 26.1 | `SF56A (Schott) / S-TIH6 (Ohara)` | `S-TIH23 (OHARA, patent nd/vd match; SF11 family)` | OHARA S-TIH23 clears the prior S-TIH6 mismatch for this dense flint pair. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 3,622,227 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for US 3,622,227 / `3622227`; no matching PDF was present.
- No substitute patent was used, no glass labels were changed, and no figure/SD check was possible without the cited patent file.
