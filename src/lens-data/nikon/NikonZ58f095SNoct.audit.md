# Audit Log - Nikon NIKKOR Z 58mm f/0.95 S Noct

Patent: WO2019/229849 A1

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/WO2019229849A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L21 / row 7 | 1.84850 / 43.79 | `Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)` | `J-LASFH22 (Hikari, patent nd/vd match)` | Hikari J-LASFH22 clears the prior unresolved near-match. |
| L32 / row 24 | 1.69895 / 30.13 | `Dense flint (near S-NBH52V)` | `E-FD15 (HOYA, patent nd/vd match)` | HOYA E-FD15 round-trips the stored patent pair. |
| L34 / row 27 | 1.765538 / 46.76 | `Lanthanum crown (no confirmed catalog match; near TAFD5F)` | `Q-LASFPH2S (Hikari, patent nd/vd match)` | Nikon/Hikari Q-LASFPH2S clears the prior unmatched label. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a WO2019/229849 A1 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for WO2019/229849 A1 / `229849`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.
