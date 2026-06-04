# Audit Log - Voigtlander Ultron Vintage Line 28mm F2 Aspherical

Patent: JP2022-100641A

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/JP2022100641A.pdf` (untracked local file).
- `pdftotext -layout` did not expose searchable table text; the local patent page image for Table 1 was rendered and visually checked.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 3 | 1.64769 / 33.84 | `E-F3 (HOYA) / SF2 (Schott)` | `E-FD2 (HOYA, patent nd/vd match) / SF2 (Schott)` | HOYA E-FD2 is the resolver-friendly match for the stored patent pair. |
| L3 / row 4 | 1.91082 / 35.25 | `S-LAH58 (OHARA) / N-LASF46A (Schott)` | `TAFD35 (HOYA, patent nd/vd match)` | HOYA TAFD35 clears the prior S-LAH58 mismatch. |
| L4 / row 6 | 1.91082 / 35.25 | `S-LAH58 (OHARA)` | `TAFD35 (HOYA, patent nd/vd match)` | Same glass as L3. |
| L5 / row 7 | 1.76182 / 26.61 | `E-FD15 (HOYA) / N-SF14 (Schott)` | `S-TIH14 (OHARA, patent nd/vd match)` | OHARA S-TIH14 clears the prior E-FD15 mismatch. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a JP2022-100641A PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for JP2022-100641A / `100641`; no matching local PDF is present.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.
