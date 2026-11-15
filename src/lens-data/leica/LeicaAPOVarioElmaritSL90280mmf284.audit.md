# Audit Log — Leica APO-Vario-Elmarit-SL 90-280 mm f/2.8-4

Patent: JP 2016-139125 A, Numerical Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `S-LAH79 (OHARA)` | `S-LAH95 (OHARA)` | Patent Data 1 row 1 lists nd=1.90366, vd=31.3; S-LAH95 matches the 904313 code family. |
| L14 / 25 | `glass` | `S-TIM28 (OHARA)` | `NBFD15 (HOYA)` | Patent Data 1 row 25 lists nd=1.80610, vd=33.3; NBFD15 round-trips the pair. |
| L19 / 34 | `glass` | `S-TIH13 (OHARA)` | `S-TIH6 (OHARA)` | Patent Data 1 row 34 lists nd=1.80518, vd=25.5; S-TIH6 is the Ohara-family catalog match. |
| L20 / 35 | `glass` | `S-NBM51 (OHARA)` | `E-FL5 (HOYA)` | Patent Data 1 row 35 lists nd=1.58144, vd=40.9; E-FL5 matches the 581409 code-family row. |
| L22 / 39 | `glass` | `S-NBH5 (OHARA)` | `S-BAH28 (OHARA)` | Patent Data 1 row 39 lists nd=1.72342, vd=38.0; S-BAH28 round-trips the pair. |

### Phase 2 — Retained-information audit

- Checked the flagged Data 1 rows against the patent; stored radii, thicknesses, and `nd/vd` match those rows.
- No semi-diameter edits made; the data file already documents estimated semi-diameters because the patent lacks them.

### Phase 4 — Analysis sync

- Updated element descriptions, glass table rows, and the chromatic strategy summary for the relabeled glasses.

## 2026-05-19 — Six-digit missing-Sellmeier follow-up

### Patent evidence

- Rechecked the local `patents/JP2016139125A.pdf` file, not just the tracked lens data. Data 1 lists L5 at surface 9 and L7 at surface 12 with nd=1.59349 and vd=67.0.
- Those rows correspond to the existing `593670` labels in the lens data.

### Catalog-search disposition

- The project catalog already contains coefficient-backed Hikari `J-PSKH4`, code family `593670`, sourced from the Hikari catalog / refractiveindex.info mirror.
- No new catalog entry was needed.

### Changes made

- Relabeled L5 and L7 from code-only `593670` annotations to `J-PSKH4 (Hikari)`.
- Updated the APD feature summary and analysis notes so the anomalous partial-dispersion pair is no longer described as anonymous six-digit glass.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/JP2016139125A.pdf` OCR for Data 1, including the fixed surface table and variable spacing table.
- Retained all current glass assignments and APD flags. The seven APD elements remain supported by patent/catalog evidence: S-FPL55, J-PSKH4, S-FPL51, and S-FSL5 rows carry the documented anomalous-dispersion roles.
- Retained the high-index and ultra-high-index rows, including S-LAH95 and S-LAH99, because the patent nd/vd values still match the catalog-backed assignments.
- The patent provides radii, thicknesses, variable spacings, nd/vd, and asphere data for other embodiments, but no clear-aperture or semi-diameter table for Data 1. Current SDs remain visualization estimates constrained by edge thickness and cross-gap clearance.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2016-139125 A Example 1 surfaces 31, 32, and 41; the stored `R`, `d`, `nd`, and `νd` values match Data 1.
- Relabeled L17 from `S-NSL36` to exact-coordinate OHARA `S-NSL3` at 1.51823 / 59.00.
- Relabeled L18 and L23 from `S-BSM28` to exact-coordinate OHARA `S-BSM16` at 1.62041 / 60.30.
- Synchronized the analysis descriptions and glass table. No prescription geometry changed.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 1.2 → 1.457 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 21.7 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed close rows state no distance; 1.2 m is the old (production) value.
- `catalog.closeFocusM.marketing` 1.2 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: closeFocusM comment: Example 1 Data 3 rows (1200 mm object distance), object to image.

## 2026-11-14 — Published finite conjugates

Patent: JP 2016-139125 A.

| Zoom / keyframe | Field | Before | After | Source and paraxial residual |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | Absent | `1200` mm, `first-surface` | JP 2016-139125 A, Numerical Example 1, Data 3 Wide column (PDF p. 22): object distance 1200.0000 mm; d6=1.1675, d16=61.1833, d18=1.0000, d33=4.3347, d36=20.6573, d38=15.2555 mm. Paragraph 0123 defines lengths in mm. The first-surface reference is identified by the conjugate audit (audit-resolved); the patent does not explicitly define the object-distance reference. Signed image-plane offset +0.020699279 mm (+2.058209 diffraction depths); other-reference offset +159.733269 diffraction depths; `consistent`. |
| 1 / 1 | `focus.conjugates` | Absent | `1200` mm, `first-surface` | JP 2016-139125 A, Numerical Example 1, Data 3 Intermediate column (PDF p. 22): object distance 1200.0000 mm; d6=29.0997, d16=29.6605, d18=4.5905, d33=12.5970, d36=15.6675, d38=11.9830 mm. Paragraph 0123 defines lengths in mm. The first-surface reference is identified by the conjugate audit (audit-resolved); the patent does not explicitly define the object-distance reference. Signed image-plane offset +0.017311669 mm (+1.336505 diffraction depths); other-reference offset +319.663427 diffraction depths; `consistent`. |
| 2 / 1 | `focus.conjugates` | Absent | `1200` mm, `first-surface` | JP 2016-139125 A, Numerical Example 1, Data 3 Tele column (PDF p. 22): object distance 1200.0000 mm; d6=53.3278, d16=1.0000, d18=9.0230, d33=19.5673, d36=12.2099, d38=8.4703 mm. Paragraph 0123 defines lengths in mm. The first-surface reference is identified by the conjugate audit (audit-resolved); the patent does not explicitly define the object-distance reference. Signed image-plane offset -0.007483640 mm (-0.368856 diffraction depths); other-reference offset +493.060908 diffraction depths; `consistent`. |

The patent prints an object distance without explicitly defining its endpoint. The conjugate audit discriminates the first-surface reference; the provenance is audit-resolved and is stated in each source string. No prescription values or published flags change.
