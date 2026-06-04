# Audit Log — Nikon NIKKOR Z 26mm f/2.8

Patent: WO 2023/190222 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2023190222A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 4 | 1.59270 / 35.3 | `S-TIM2 (OHARA)` | `S-FTM16 (OHARA, patent nd/vd match)` | OHARA S-FTM16 clears the prior S-TIM2 mismatch. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2023/190222 A1`.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2023/190222 A1 / `190222`; no matching PDF was present.
- Rendered and inspected local `US20230341664A1.pdf` as a possible nearby publication; it is a Fujifilm/Shimada imaging-lens patent, not the cited Nikon Z 26mm family, so it was not used.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.
