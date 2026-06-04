# Audit Log - Nikon AF-S Micro-Nikkor 60mm f/2.8G ED

Patent: US 7,898,744 B2

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/US7898744.pdf` (untracked local file).
- `pdftotext -layout` extracted the patent prescription table used for this pass.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 3 | 1.63854 / 55.48 | `H-LAK6A (CDGM) or Nikon melt` | `K-SK18 (Sumita, patent nd/vd match) / S-BSM18 (OHARA)` | Sumita K-SK18 is the resolver-friendly catalog match; OHARA S-BSM18 is a close public equivalent. |
| L7 / row 13 | 1.49782 / 82.56 | `S-FPM4 (OHARA) — ED glass` | `J-FKH1 (Hikari, patent nd/vd match) — ED glass` | Hikari J-FKH1 clears the prior S-FPM4 mismatch and preserves ED/APD intent. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 7,898,744 B2 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for US 7,898,744 B2 / `7898744`; no matching PDF was present.
- No substitute patent was used, no glass labels were changed, and no figure/SD check was possible without the cited patent file.
