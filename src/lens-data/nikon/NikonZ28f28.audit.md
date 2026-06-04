# Audit Log — Nikon NIKKOR Z 28mm f/2.8

Patent: WO 2022/071249 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2022071249A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L3 / row 5 | 2.00100 / 29.12 | `S-NPH1 (OHARA)` | `S-LAH99 (OHARA, patent nd/vd match)` | OHARA S-LAH99 clears the prior S-NPH1 mismatch. |
| L4 / row 7 | 1.80518 / 25.45 | `S-TIH14 (OHARA)` | `S-TIH6 (OHARA, patent nd/vd match)` | OHARA S-TIH6 round-trips the stored patent pair. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2022/071249 A1`.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2022/071249 A1 / `071249`; no matching PDF was present.
- Nearby local files `US20220236544A1.pdf` and `US20220236544A1-2.pdf` were not used as substitutes because they are Fujifilm/Nagami zoom patents, not the cited Nikon Z 28mm family.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.
