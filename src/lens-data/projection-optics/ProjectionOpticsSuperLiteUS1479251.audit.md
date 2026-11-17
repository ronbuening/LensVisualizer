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
  "PATENT-ONLY" spec line need house wording. (Closed 2026-11-17: renamed by the coordinator; subtitle and specs
  reworded in the cleanup pass.)
- Cleanup pass: the glass labels "(source constants)" need house wording. (Closed 2026-11-17: `Unmatched (…)` labels.)
- Maker profile and folder for "Projection Optics" are shared with US 1,415,002. (Closed 2026-11-17: the coordinator
  added the maker prefix and the `projection-optics/` folder.)
- SD pass: the drawing's rear-to-front height ratio (about 0.78) suggests a rear clear radius of about 17.7 mm. The
  plano face 6 is drawn as tall as the crown (model 17 mm against 17.5 mm). (Closed 2026-11-17: face 6 raised to
  17.5 mm, square as drawn; 17.5 kept on faces 4 and 5 as within noise of 17.7.)
- Optional: a field closer to the 35 mm projector gate (about 8.4° half-field), documented as period coverage, not as
  a patent value. (Closed 2026-11-17: the field follow-up below set 16° / 8°, which reaches the 35 mm cinema corner at
  7.9°; the analysis gives the period gate's 8.4° in prose.)

## 2026-11-17 — Cleanup and wording pass

The optics are unchanged. No R, d, nd, V, sd, stop or gap value was edited.

**Data file changes:**

- `subtitle`: "US1479251A — PATENT-ONLY; RECIPROCAL INFINITY REFERENCE" → "US 1,479,251 A, sole example — Super-Lite
  projection lens design".
- `specs`: ["4 ELEMENTS / 2 GROUPS", "PATENT-ONLY", "PROJECTION DESIGN; INFINITY REFERENCE"] → ["4 ELEMENTS / 2
  GROUPS", "ALL SPHERICAL", "DESIGN F/2.2", "PROJECTION OBJECTIVE"].
- `focus.description`: → "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays 1e15. No
  marketed minimum focus is added, because no product source gives one.
- Element `label`s: patent-class wording → "Element 1" to "Element 4".
- Element `role`s: added plain optical roles.
- `cemented` ids: "A"/"B" → "C1"/"C2"; `doublets` text likewise. `groups` keep the patent's A and B.
- Element types are unchanged (Biconvex Positive, Plano-Concave Negative), and they agree with the printed signs.
- Header comment: the "unscaled" wording is dropped, since the patent itself prints E.F. 100 mm.

**Glass relabels:**

- Crowns L1 and L3: "Borosilicate crown (source constants)" → "Unmatched (borosilicate crown, nD 1.5160 / V 63.8)".
- Flints L2 and L4: "Dense flint (source constants)" → "Unmatched (dense flint, nD 1.6182 / V 36.4)".
- No catalogue row is within 1e-4 in index. The nearest crowns are BK7-type rows: K-BK7 and S-BSL7 at 1.51633 / 64.1,
  and J-BK7 at 1.51680 / 63.88. The nearest flints are F4 at 1.61659 / 36.62 and F2-type rows at 1.62004 / 36.3–36.4.
- `trylabel.mjs` confirms that both new labels stay unresolved, so the model keeps the printed nD and V.

**Analysis:**

- An H1 with the model name is added.
- The model is named in its identification sentence, and "patent reference" and "unscaled" wording is removed.
- Glass first lines and the glass section now match the new labels, with the nearest catalogue families noted.
- The drawing-label errors (R1 88.57, V 30.4) are now explained once, in the drawing-sheet section.

**Engine numbers** (`built.mjs` / `probe.mjs`), identical before and after:

- EFL 99.9965 mm, f/2.2026.
- Half-field 3°, stop radius 22.6996 mm at the front vertex.
- Back focus 39.8225 mm, total track 157.1425 mm.

**Audits:** `audit:surface` OK. `audit:aperture`: within 3 % of the stated f-number, with no rim, trace or iris limit.

**Open:**

- SD pass: the drawing's rear-to-front height ratio (about 0.78) suggests a rear clear radius of about 17.7 mm against
  the model's 17.5 mm. The plano face 6 is drawn as tall as the crown (model 17 mm). (Closed 2026-11-17 in the
  semi-diameter pass.)
- Optional: a field closer to the 35 mm projector gate (about 8.4° half-field), as period coverage. (Closed
  2026-11-17 by the field follow-up: 16° / 8°.)
- Metadata: no `lensMounts` / `imageFormat`. A projection lens has no camera mount in the taxonomy, and the film
  format for this 100 mm example is not printed. (Closed 2026-11-17: the taxonomy has a `projection-lens` mount id, and
  the Super-Lite sources support 35 mm theatre film; set in the semi-diameter pass.)

## 2026-11-17 — Semi-diameter pass against the patent figure

**Source.** The figure is the drawing sheet of US 1,479,251 (PDF page 1), measured at 600 dpi. It is the patent's only
figure, and it draws the sole example.

**Scale.** Two axial spans give the scale:

- The front plano face to the rear crown vertex is 1429 px for the printed 94.54 mm: 15.12 px/mm.
- The rear plano face to the film line is 601 px for the printed 39.82 mm: 15.09 px/mm.
- The whole lens-to-film span gives 14.98 px/mm.
- The drawn doublet thicknesses run about 5 % thin.
- The scan is rotated by about 1.4°, and heights were read against the local axis of each doublet.

**Heights.** Each doublet is drawn as a rectangle whose top and bottom edges are clean horizontal lines.

- Front doublet: half-height 358.75 px, or 23.8 mm at 15.05 px/mm, against the printed 45.4 mm free aperture (22.7 mm).
- Rear doublet: half-height 280.0 px, or 18.6 mm at 15.05 px/mm.
- The rear/front ratio is 0.780, which gives 17.7 mm when scaled to the printed front aperture.
- The flint's plano face meets the top edge at the same height as the crown and the cemented face.

| Surface | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 1, 2, 3 | 22.7 | 23.8 axial scale | 22.7 | Printed free aperture outranks the figure (+5 %, within noise) |
| 4, 5 | 17.5 | 17.7 relative / 18.6 axial | 17.5 | Within noise (+1 % against the printed front aperture) |
| 6 | 17.0 | square with 4 and 5 | 17.5 | Flint drawn square-cut; the 17 → 17.5 mm step was a visible shape error |

The rear crown's edge at 17.5 mm is 0.75 mm. The drawing shows a near-knife edge of about 1 mm at 15 px/mm.

**Clearance and light:**

- Corner illumination over the declared 3° field is unchanged: 99.3 % at 3° before and after. The leave-one-out worst
  loss is 0.0 points, and restoring face 6 to 17 mm wins back 0.0 points.
- At the 35 mm cinema corner (Y = 13.6 mm, 7.93°), the chief ray clears every rim. Rear-doublet one-sided vignetting
  is 72 / 76 / 71 % on faces 4, 5 and 6; before, it was 72 / 76 / 76 %.
- At a period projector-gate corner (Y = 14.38 mm, 8.4°), the figures are 81 / 84 / 81 %.

**Audits:**

- `audit:surface`: OK.
- `audit:aperture`: no rim limit.
- `audit:image-circle`: 0 undersized. It was skipped before, without a format.
- `audit:field-coverage`: 38 %, diagnosis "declared". The corner at 7.9° is clear; coverage stops at the declared 3°
  projection field, not at a rim.
- Engine half-field: 3.00° before and after. Tracing half-field: 9.18° → 9.33°.
- EFL 99.9965 mm, f/2.2026 and back focus 39.8225 mm are unchanged.

**Metadata.** `catalog.lensMounts` is now `["projection-lens"]` and `catalog.imageFormat` is now `"35mm-cinema"`. The
sources:

- The patent addresses moving-picture machines.
- The 1923 *Exhibitors Trade Review* notice, reproduced by Delta Lenses, says the Super-Lite was made to fit all makes
  of motion picture machines.
- Delta Lenses' history lists the Super-Lite Series III C in theatre focal lengths from 102 mm.
- A 100 mm objective as built fits 35 mm theatre projection.

Name check: the trade sources call the product the Super-Lite, made by the Projection Optics Co. The current `name`,
"PROJECTION OPTICS SUPER-LITE 100mm f/2.2 (US 1,479,251 Design)", matches.

**Open:**

- The declared 6° full field (`projection.fullFieldDeg` 6, `maxTraceFieldDeg` 3) covers 38 % of the 35 mm cinema
  diagonal. Widening it to about 15.9° full field would let the analysis tabs reach the format corner, which the rims
  pass. That is a field change outside this pass. (Closed 2026-11-17, see the field follow-up below.)

**Field follow-up.** On the coordinator's request, `projection` changed from 6 / 3 to `fullFieldDeg` 16 /
`maxTraceFieldDeg` 8, the smallest whole-degree field covering the 35 mm cinema corner (7.93°). The patent states no
field. Results:

- Engine half-field 3° → 8°. EFL 99.9965 mm, f/2.2026 and back focus 39.8225 mm are unchanged.
- Geometric transmission: 98.9 % at 4°, 76.0 % at 6.6°, 60.5 % at 7.9°.
- `audit:surface` OK; `audit:aperture` no rim limit; `audit:image-circle` 0 undersized.
- `audit:field-coverage`: 38 % ("declared") → ≥ 99 % ("ok").

## 2026-11-17 — Second review on the local site

**Compared.** The live page at 1400×900 and the inspector for all four elements, against the drawing sheet (PDF page
1, re-measured independently at the native 300 dpi), the typeset table (printed page 3) and the text.

**Rims: no change.** Re-measured with the figure profiler, both edges of each rectangle, against the local axis
(the scan is tilted 1.42°):

- Scale: front plano face to rear crown vertex, 713 px for 94.54 mm (7.54 px/mm); rear plano face to film line, 303 px
  for 39.82 mm (7.61 px/mm); lens length 879 px for 117.32 mm (7.49 px/mm). Mean 7.55 px/mm.
- Front doublet half-height 180 px (23.8 mm); rear doublet 140.3 px (18.6 mm). Rear/front 0.779, or 17.7 mm against
  the printed 22.7 mm front aperture.
- Printed page 2 says the figure shows the lens at full size. The drawn front glass is then 47.6 mm across, 2.2 mm more
  than the printed 45.4 mm free aperture; the same margin on the 37.2 mm rear glass gives a 17.5 mm clear radius.
- The model's 17.5 mm on faces 4–6 sits within 1 % of both readings, and the flint is square at the crown's height, as
  drawn. Step order (front taller than rear) is right. The front rims stay at the printed free aperture.
- Side by side at matched front height, the rear doublet's top edge falls on the figure's line. The rear crown's
  0.75 mm edge reads as the near-knife edge drawn; the front crown's 2.2 mm edge against about 1 mm drawn follows from
  the printed 22.7 mm aperture against the drawn 23.8 mm glass.

**Lands and cuts.** There are none: no face sits below its baseline and the file has no `rimExtensionSd` or
`rimCutDepthMm`. `rimcost.mjs --loo` against the baseline: worst loss 0.0 points; face 6 at 17.5 mm gains 0.3 points
at 7.9° (60.2 → 60.5 %).

**Labels changed.**

| Element | Before | After | Evidence |
|---|---|---|---|
| 1–4 `name` | L1, L2, L3, L4 | I, II, III, IV | Table column "Lens." (printed page 3) and the drawing's leaders |
| 1–4 `label` | Element 1 … Element 4 | Element I … Element IV | Same |
| 1–4 `diagramLabel` | (none; diagram showed 1–4) | I, II, III, IV | Same |
| 1–4 `focalLengthMm` | (none; inspector showed "FL = —") | +81.44, −133.57, +41.46, −66.77 | `probe.mjs --elements` |
| 2, 4 `role` | "cemented to L1" / "to L3" | "cemented to lens I" / "to lens III" | Renamed elements |

The analysis prose and glass table now use I to IV, and its clear-radius paragraph adds the full-size reading. The
header comment's long line is rewrapped and notes the patent's designations.

**Checked and found correct.**

- Groups A and B are the patent's "front system A" and "rear system B"; cemented brackets C1 and C2 cover faces
  1–3 and 4–6, and the inspector reads "DOUBLET C1" / "DOUBLET C2", not a triplet. Labels I II / III IV and A / B
  do not collide on the page.
- Types agree with the printed signs (biconvex crowns, plano-concave flints); roles are true to the text.
- The stop is drawn at the front vertex plane, ahead of lens I; engine stop radius 22.6996 mm inside the 22.7 mm rim.
- No aspheres and no `apd` tags; the patent names no special glass.
- Movement: no `gaps` or `zoom` block, `closeFocusM` 1e15, the slider reads "Not modeled", and the description states
  only that the patent gives no close-focus data.
- Engine half-field 8° and f/2.2026 before and after; EFL 99.9965 mm. `audit:surface` OK; `audit:aperture` no rim
  limit; `audit:image-circle` 0 undersized; `audit:field-coverage` 100 %, corner 7.9° clear; `built.mjs` does not
  throw. Transmission 98.9 % at 4°, 76.0 % at 6.6°, 60.5 % at 7.9°.

**Glass and colour.** At the D line, the nearest crowns (S-BSL7, K-BK7) give nD 1.51626, 0.00026 above the printed
1.5160, and J-BK7 0.00073; the nearest flints (F2, J-F2) give nD 1.61989 and F4 1.61644, both about 0.0017 away. No
catalogue or vendor AGF row is inside the exact window, so all four labels stay `Unmatched`. The patent prints only
"Borosil. crown" and "Dense flint" with nD and V; it gives no maker, line index or partial dispersion, and the two
pairs recur only because both doublets share them. It prints no aberration curves. Every element carries V, so colour
runs on the Abbe fallback; there is no constant-index medium.

**Assignee.** `assignees` is empty; the patent prints no assignment clause. Nothing to consolidate.

`clearap.mjs` returns no chief ray for this file at 7.93° and `clearap2.mjs` throws, so the corner clearance above
comes from `audit:field-coverage` and the engine curve.
