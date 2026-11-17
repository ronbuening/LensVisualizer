# Repp US 1,479,251 source-table audit

2026-11-16. An earlier reading worked from the hand-lettered drawing sheet alone and left the flint constants and
thin-element thickness uncertain. The typeset specification table supersedes it, and it is not used as a source of
alternative values.

The specification table on PDF page 4 (printed page 3) was read from the page image:

- Radii: +82.57, −82.57, flat, +41.28, −41.28, flat.
- Thicknesses and separation: 8.54, 2.85, 94.54, 8.54, 2.85.
- Glass: crowns 1.5160 / 63.8; flints 1.6182 / 36.4.

The drawing-sheet labels differ from the table, and the table is used. No radius, thickness, glass or gap was fitted.

Duplicate check: the catalog had no entry for US 1,479,251, the Super-Lite or William H. Repp. US 1,415,002 is Repp's
earlier, separate design, not an alias of this one.

Aperture and rims:

- The 45.4 mm front free diameter is printed. The aperture limit is placed at the front vertex plane.
- The rear 17.5 mm clear radius is estimated: the largest meridional ray height at 3° (16.218876 mm), times 1.05,
  rounded up to the next 0.5 mm.
- The 6° full field is a display choice, not printed coverage.
- The repository's surface validator ran with default allowances and no overrides.

Earlier checks: 36 meridional rays at 0°, 1°, 2° and 3° and nine pupil heights traced without failure. An independent
matrix trace agreed on the EFL and back focus. Finite-conjugate projection and dense skew-field checks were not made.

## 2026-11-16 — Deployment validation

**What was checked.** An independent re-read of the patent page images was made at 300–800 dpi: the specification
table, the drawing sheet, the front matter and the claims. Every radius was checked, with its printed sign, together
with every thickness, the 94.54 mm separation, nD and V for both glasses, both cemented interfaces and the 45.4 mm free
aperture. There are no mismatches against the table.

The drawing sheet's hand lettering differs from the table in two places:

- It gives the front radius as "88.57" (table +82.57). That value would give a back focus of 44.05 mm against the
  printed 39.82 mm.
- It gives the flint V as "30.4" (table 36.4). That value would overcorrect the colour of the front doublet about
  fourfold (thin-lens longitudinal colour about 2.1 mm against 0.5 mm).

Both are drawing errors. The flint thickness labels are illegible.

**Front matter.** The patent reads "William H. Repp, of Rochester, New York", filed July 31, 1922, Serial No. 578,695,
granted January 1, 1924. No assignor clause is printed.

**Verdict.** Valid with notes. The product link is strong at the design level:

- Repp co-founded Projection Optics, and his earlier US 1,415,002 is assigned to Projection Optics Company, Inc.
- A 1923 *Exhibitors Trade Review* notice of the Projection Optics Super-Lite carries Repp's description. It repeats
  this patent's claim that the secondary reflected images drop from fifteen to six.
- The company's Pro-Jex Super-Lite advertisement shows two widely separated doublets.
- No production prescription is published, so this 100 mm example is not tied to one production focal length.

**Changes made:**

- `maker`: `null` → `"Projection Optics"`. The inventor's company, as for US 1,415,002. `assignees` stays empty
  because the patent prints none.
- `catalog.focalLengthMm`: `{ marketing: 100, design: 99.99649 }` → `{ design: 100 }`. No retail rating is
  established, and the design EFL rounds to 100.00.
- `catalog.fNumber`: `{ marketing: 2.2, design: 2.2025659532520065 }` → `{ design: 2.2 }`, the printed F/2.2.
- `aperture.nominalFNumber`, `fStops` and `maxFNumber`: 2.2025659532520065 → 2.2026. This rounds float noise; the
  stop radius becomes 22.6996 mm, inside the 22.7 mm front rim.
- `focus.description`: rewritten in plain words.
- JSDoc header: rewritten in plain English. It now names the drawing-sheet errors and the inferred stop, rims and back
  focus.
- Analysis: the process verification section is removed, run-together numbers are fixed, and the Super-Lite
  association is stated with sources.
- This audit: process wording removed.

**First order after the changes** (`built.mjs` / `probe.mjs`):

- EFL 99.9965 mm (printed 100).
- f/2.2026 (printed F/2.2).
- Paraxial back focus 39.8225 mm (printed 39.82). This is the last gap.
- Vertex length 117.32 mm; total track 157.14 mm.
- Front doublet +197.82 mm; rear doublet +98.05 mm.

**Audits:**

- `audit:surface`: OK, no validation errors.
- `audit:aperture --raise`: no surface below the on-axis ray.
- `audit:image-circle` and `audit:field-coverage`: skipped (hidden, no image format).
- Clearance probe (`clearap.mjs`):
  - At a 5.24 mm image height (3°): no clipping.
  - At 14.38 mm (8.4°, the corner of a period 35 mm projector gate): the chief ray clears, and the rear doublet
    vignettes 81–85 % of one side of the oblique beam.

**Open:**

- Cleanup pass: `name`, `key`, `subtitle` ("US1479251A — PATENT-ONLY; RECIPROCAL INFINITY REFERENCE") and the
  "PATENT-ONLY" spec line need house wording.
- Cleanup pass: the glass labels "(source constants)" need house wording.
- Maker profile and folder for "Projection Optics" are shared with US 1,415,002.
- SD pass: the drawing's rear-to-front height ratio (about 0.78) suggests a rear clear radius of about 17.7 mm. The
  plano face 6 is drawn as tall as the crown (model 17 mm against 17.5 mm).
- Optional: a field closer to the 35 mm projector gate (about 8.4° half-field), documented as period coverage, not as
  a patent value.
