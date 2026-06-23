# Audit Log — Ricoh GR 28mm f/2.8

Patent: US 5,760,973

## 2026-06-23 - Complete local patent recheck

- Local patent source: `patents/US5760973.pdf` (untracked local file), Example 1.
- `pdftotext -layout` was used to verify the Example 1 prescription table against the data file. Surface radii, spacings, nd/vd values, stop placement, variable back focus convention, and aspherical surfaces were retained.
- This review supersedes the older "patent unavailable" notes below: the local PDF is now present and was checked.

| Element / surface | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L(3,3) / row 9 | 1.74077 / 27.8 | `EFD4 (HOYA) / S-TIH13 class` | `E-FD13 (HOYA) / S-TIH13 class (741278)` | Exact local Hoya/OHARA class match for the patent row; previous Hoya family label was stale. |

- The earlier L(2,2) E-FD8/S-TIM28 relabel remains correct.
- The patent does not provide Pg,F, so no APD or dPgF values were added. No element is treated as APD from this source.
- The patent does not list semi-diameters. Existing SDs remain estimates; the aperture progression was checked against the full-frame wide-angle drawing and is rational: largest clear apertures at the front negative and rear field-corrector elements, smaller apertures around the stop, and uniform SDs within cemented groups.
- Companion analysis was updated so all L6 discussion names E-FD13 / S-TIH13 class instead of EFD4.

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/US5760973.pdf` (untracked local file).
- `pdftotext -layout` extracted the Example 1 prescription table; row 4 lists the L(2,2) glass as `168893 / 31.2`, i.e. nd=1.68893, vd=31.2.

| Element / surface | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L(2,2) / row 4 | 1.68893 / 31.2 | `S-TIM35 (OHARA) / FD110 (HOYA)` | `E-FD8 (HOYA, patent nd/vd match) / S-TIM28` | HOYA E-FD8 and OHARA S-TIM28 are the catalog-tolerance matches for the stored patent pair; the previous label resolved to the wrong glass. |

- `npm run generate:glass-reports` passed; this lens no longer appears in the catalog-mismatch reports.

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 5,760,973 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Final remainder recheck

- Rechecked the local `patents/` folder while finishing the remaining catalog-mismatch rows. A US 5,760,973 PDF is still not present.
- No glass labels or SDs were changed, and no figure comparison could be performed from the local untracked patent set.
