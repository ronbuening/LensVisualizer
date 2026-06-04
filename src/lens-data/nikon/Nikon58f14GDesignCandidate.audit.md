# Audit Log - Nikon AF-S NIKKOR 58mm f/1.4G

Patent: JP2013-019993A

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/JP2013019993A.pdf` (untracked local file).
- `pdftotext -layout` extracted the patent prescription tables; Example 2 is the current design-candidate embodiment.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| Lb1p / row 3 | 1.75500 / 52.34 | `S-LAL14 / N-LAK12 (lanthanum crown)` | `J-LASKH2 (Hikari, patent nd/vd match) / N-LAK33B` | Hikari J-LASKH2 and Schott N-LAK33B round-trip the stored patent pair. |
| Lb2 / row 6 | 1.68893 / 31.16 | `S-TIH4 / N-SF8 (dense flint)` | `E-FD8 (HOYA, patent nd/vd match) / S-TIM28` | HOYA E-FD8 clears the prior S-TIH4 mismatch. |
| Lcn / row 9 | 1.72825 / 28.46 | `S-TIH11 / N-SF10 (dense flint)` | `H-ZF4A (CDGM, patent nd/vd match) / S-TIH10` | CDGM H-ZF4A is the exact resolver candidate; S-TIH10 is the OHARA family equivalent. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a JP2013-019993A PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for JP2013-019993A / `019993`; no matching local PDF is present.
- `JP2013003324A.pdf` is a different Nikon large-aperture lens patent and was not used to override the data.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.
