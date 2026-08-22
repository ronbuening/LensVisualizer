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

## 2026-08-21 — Resolver normalization and candidate audit

- Normalized L41 from `S-TIM 22` to official OHARA `S-TIM22`; the stored `1.64769 / 33.73` coordinate remains
  compatible with the existing catalog curve at `1.64769 / 33.79`.
- Rejected the old L11 `S-TIL 2` and L23 `S-TIH 18` spellings as material mismatches, not mere spacing errors.
  J-LLF6 reproduces L11 at `1.53172 / 48.78`, while J-SFH1 reproduces L23 at `1.80809 / 22.74`; both now supply
  qualified spectral proxies without assigning Nikon's production supplier.
- Synchronized the analysis. No prescription, APD, or geometry changed.
