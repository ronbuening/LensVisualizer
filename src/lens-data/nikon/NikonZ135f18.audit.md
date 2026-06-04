# Audit Log — Nikon NIKKOR Z 135mm f/1.8 S Plena

Patent: WO 2024/147268 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2024147268A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; row 26 was cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L14 / row 26 | 1.78590 / 44.17 | `Lanthanum flint (near S-LAM55)` | `S-LAH51 (OHARA, patent nd/vd match)` | OHARA S-LAH51 round-trips the stored patent pair. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2024/147268 A1`.
- A nearby local WO file was not used as a substitute because it does not match the referenced patent number.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2024/147268 A1 / `147268`; no matching PDF was present.
- Rendered and inspected local `US20240192474A1.pdf` as a possible nearby publication; it is a Canon/Iwamoto zoom patent, not the cited Nikon Z 135mm Plena family, so it was not used.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.
