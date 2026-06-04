# Audit Log - Nikon AF NIKKOR 85mm f/1.4D IF

Patent: US 5,640,277

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/US5640277.pdf` (untracked local file).
- `pdftotext -layout` extracted the Example 2 prescription table.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 5 | 1.79631 / 40.90 | `Dense Lanthanum Flint (LaSF3 / NBFD15)` | `S-LAH52 (OHARA, patent nd/vd match)` | OHARA S-LAH52 is the resolver-friendly catalog-tolerance candidate; the old NBFD15 token resolves to a different modern HOYA glass. |
| L6 positive / row 15 | 1.86994 / 39.82 | `Very Dense Lanthanum Flint (TAFD30)` | `TAFD32 (HOYA, patent nd/vd match)` | HOYA TAFD32 clears the prior TAFD30 mismatch. |
| L8 / rows 17/19 | 1.74810 / 52.30 | `Lanthanum Crown (S-LAM66)` | `S-LAM60 (OHARA, patent nd/vd match)` | OHARA S-LAM60 is the resolver-friendly catalog-tolerance candidate. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 5,640,277 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for US 5,640,277 / `5640277`; no matching local PDF is present.
- `US5764425.pdf` is a different Ohshita telephoto patent and was not used to override the data.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.
