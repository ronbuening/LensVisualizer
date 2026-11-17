# ProjectionOpticsUS1415002 audit

## Source

- US 1,415,002 A, "Projection Lens", William H. Repp, assignor to Projection Optics Company, Inc., Rochester, New
  York. Filed September 21, 1920 (Serial No. 411,772), granted May 2, 1922.
- File `patents/US1415002A.pdf`, three scanned pages, SHA256
  `9f3e9a5d3f2efecf544ef4979f782820340b18012d148511dc896dd56a60271e`. PDF p. 1 is the drawing sheet: a full-size
  section with radii, thicknesses, the glass table and "Equivalent Focal Length 100 mm". PDF pp. 2–3 are the
  specification; the prescription table is on PDF p. 3 (printed page 2, lines 12–17), with F/2.2 stated at lines 59–62.
- One numerical example only, recorded as `{ label: "Sole example", id: null }`.

## Transcription check

Checked against 300 and 600 dpi renders of the page images; the text layer was not used.

| Surface | Printed | Model R | d after | Medium after |
|---|---|---:|---:|---|
| 1 | γ1 = 57.111 | +57.111 | 10.798 (d1) | I, 1.5160 / 63.8 |
| 2 | γ2 = 57.111 | −57.111 | 4.515 (d2) | II, 1.6182 / 36.4 |
| 3 | γ3 = ∞ | flat | 28.094 (Δ1, split at the inferred stop) | air |
| 4 | γ4 = 57.111 | +57.111 | 3.141 (d3) | III, 1.6182 / 36.4 |
| 5 | printed "γ3" = 38.314 | +38.314 | 5.595 (Δ2) | air |
| 6 | γ6 = 57.111 | +57.111 | 6.086 (printed "d7") | IV, 1.5160 / 63.8 |
| 7 | printed "d7" = ∞ | flat | 61.622 (computed back focus) | air |

- Mismatches: none. Seven radii, four thicknesses, two air spaces, two indices and two V values were checked.
- The table prints radius magnitudes only. Signs come from the drawing (I equiconvex, II plano-concave, III a negative
  meniscus bowed toward the screen, IV plano-convex with its curved face toward the screen) and from the text and
  claims. Reversing the rear pair's signs gives an EFL of 189 mm.
- The table's row labels have three misprints (γ3 for γ5, d7 for d4, d7 for γ7); values are placed by position.
- The text rounds the first air space to 28.2 mm. The table and the drawing both print 28.094 mm, which is used.
- The drawing repeats every value, with the 57.111 radius written as 57.11.
- Indices are for the sodium D line ("sodium yellow or D line"), so `indexReference` is `"D"`. V is printed for both
  glasses.

## First-order results

- EFL 99.998 mm, against the printed 100 mm (−0.002 %). F/2.2, with an entrance-pupil radius of 22.727 mm.
- Back focus: none printed. The image plane is the computed paraxial back focus, 61.622 mm. The vertex track is
  58.229 mm, and the distance from the first vertex to the image is 119.851 mm.
- Component focal lengths:
  - Front cemented pair: +135.86 mm, 1.359 F (patent "approximately 1.36").
  - Rear pair: +242.43 mm, 2.424 F (patent "about 2.42").
  - Elements: +57.18, −92.38, −201.14 and +110.68 mm.
- Longitudinal spherical aberration at F/2.2: −0.09, −0.29, −0.29 and −0.19 mm at pupil fractions 1.0, 0.85, 0.7
  and 0.5.

## Inferred values

- **Stop:** not printed and not drawn. It sits in the middle of Δ1 (14.047 + 14.047 mm) with an 18.45 mm radius,
  sized paraxially for F/2.2. Real rays reach it at 19.12 mm, so the real-ray working aperture is about F/2.27.
- **Semi-diameters:** 23 mm on all surfaces. The drawing is stated to be full size. Calibrated against the printed
  thicknesses (0.683 of full size on the scan), the drawn diameters measure 46.2 to 46.6 mm. Edge thicknesses at
  23 mm are 1.13 / 9.35 / 5.98 / 1.25 mm for I to IV, and the III–IV air space is 2.76 mm at the edge, all matching
  the drawing.
- **Image plane:** paraxial back focus, as above.
- **Field:** none stated. The viewer's 28.5° default half-field comes from the rims.
- **Aperture list:** f/2.2 to f/22 is a viewer convenience; the patent shows no iris.

## Validator results

- `built.mjs`: builds without errors.
- `audit:surface`: OK.
- `audit:aperture`: within 3 % of F/2.2 and no rim limit. With `--raise`, no surface lies below the on-axis ray.
- `audit:image-circle` and `audit:field-coverage`: skipped (no `imageFormat`; hidden file).
- `clearap.mjs` at image heights of 13, 15 and 20 mm (7.4°, 8.5° and 11.3°): no axial clipping and no blocked chief
  ray. The front-surface axial margin is 0.27 mm. Corner bundle trimming at S1 and S2 is 11–12 % per side at 13 mm
  and 18–20 % at 20 mm.

## 2026-11-16 — Deployment validation

An independent re-read of the patent page images (drawing sheet and specification) covered the bibliography, every
radius, thickness, air space, index and V value, the radius signs against the drawing and text, the printed focal
length and aperture, the stated component focal-length ratios, and the drawn diameters of the full-size section.

**Verdict:** valid with notes. The transcription is exact and the model reproduces F = 100 mm. The production link is
speculative only: Delta Lenses' history of Projection Optics suggests the design "might have been used" for the
company's Pro-Jex lenses, and no construction diagram or catalogue confirms it.

### Changes

| Field | Old | New | Reason |
|---|---|---|---|
| `source.patentNumber` | `US 1,415,002` | `US 1,415,002 A` | House form. |
| `source.assignees` | `Projection Optics Company Inc.` | `Projection Optics Company, Inc.` | As printed on the specification. |
| `source.sdSource` | `heuristic` | `figure-measured` | The 23 mm rims match the full-size drawing. |
| `catalog.focalLengthMm.design` | `99.99812523504964` | `100` | Rounded to two decimals (99.998). |
| Spec line | `ESTIMATED STOP AND RIMS` | `ESTIMATED STOP; RIMS FROM FIGURE` | The rims are no longer estimates. |
| File header | none | Plain JSDoc header | States the source, scale, signs, glass, orientation, inferred stop, rims, image plane and focus. |
| Analysis | Package notes | Rewritten to the house section skeleton | Plain-English rewrite. |
| Audit | Copy of the package notes | This log | Replaces the copy. |

The prescription, rims, stop and image plane are unchanged.

### After the changes

- `built.mjs`: EFL 99.998 mm, F/2.2, stop radius 18.45 mm, default half-field 28.55°.
- `probe.mjs`: back focus 61.622 mm, total length 119.851 mm.
- `audit:surface` OK. `audit:aperture` reports no rim limit.
- `audit:image-circle` and `audit:field-coverage` skip the file (no `imageFormat`; hidden).

### Open

- **Wording:** (closed 2026-11-17: name and key set at the rename, the rest in the cleanup pass)
  - `name`: "REPP 1922 100mm f/2.2 PROJECTION PATENT REFERENCE".
  - `subtitle`: "1920 DESIGN / 1922 GRANT — RECIPROCAL INFINITY REFERENCE".
  - Specs: "PROJECTION PATENT; NO RETAIL MATCH" and "RECIPROCAL INFINITY ONLY".
  - `focus.description`: "No finite theater conjugate validation".
  - The repeated `indexReferenceNote` text.
  - `key`.
- **Element labels:** (type capitalisation closed 2026-11-17; "Element N" labels kept as the house form)
  - `type` capitalisation "Plano-concave Negative" / "Plano-convex Positive" should become the house forms
    "Plano-Concave Negative" / "Plano-Convex Positive".
  - Generic labels "Element 1" to "Element 4".
- **Glass labels:** none are set. Period crown and flint equivalents are optional. (Closed 2026-11-17: no exact
  catalog row; `Unmatched` labels set.)
- **Image format:** none set. A 35 mm motion-picture projection format would let the image-circle and coverage audits
  run.
- **Iris:** the paraxially sized iris trims the outermost real F/2.2 rays (about F/2.27). A front-rim-limited
  aperture would be closer to an iris-less projection mount.
- **Rims:** the semi-diameter pass may refine the 23 mm rims against the drawing (measured 23.1 to 23.3 mm).
- **Aperture list:** the f/2.2 to f/22 list has no source.

## 2026-11-17 — Cleanup and wording pass

The files were renamed to `ProjectionOpticsUS1415002.*` and made visible at the rename; `key` and `name` were set then.
This pass changed only public text and labels. The prescription, rims, stop and image plane are unchanged.

### Changes

| Field | Old | New |
|---|---|---|
| `subtitle` | "1920 DESIGN / 1922 GRANT — RECIPROCAL INFINITY REFERENCE" | "US 1,415,002 A, sole example — Petzval-type projection objective" |
| `specs` | "4 ELEMENTS / 3 GROUPS", "PROJECTION PATENT; NO RETAIL MATCH", "ESTIMATED STOP; RIMS FROM FIGURE", "RECIPROCAL INFINITY ONLY" | "4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/2.2", "PROJECTION OBJECTIVE" |
| `focus.closeFocusM` | `1000000000000000.0` | `1e15` (same value) |
| `focus.description` | package wording | "Infinity focus only; the patent gives no close-focus data. Light enters from the screen side and focuses on the film plane." |
| L2 `type` | "Plano-concave Negative" | "Plano-Concave Negative" |
| L4 `type` | "Plano-convex Positive" | "Plano-Convex Positive" |
| `indexReferenceNote` | "Literal sodium D index and dispersion reciprocal V in patent table." on every element | removed |
| `glass` | none | "Unmatched (crown, nD 1.5160 / V 63.8)" for L1 and L4; "Unmatched (flint, nD 1.6182 / V 36.4)" for L2 and L3 |
| `role` | none | a plain optical role for each element |
| `doublets` text | "C1 doublet" | "C1" |
| Header comment | "SCALE: none." | "PRESCRIPTION:" (the patent itself prints F = 100 mm) |

The removed `indexReferenceNote` belongs to sources that name no spectral line, and it makes the inspector show
"n (source)". This patent names the sodium D line, so the inspector now shows nD and νD.

There is no exact catalog row for either glass:
- **Crown, 1.5160 / 63.8:** the nearest are BK7-class rows at 1.51633 / 64.06–64.14 (Δnd +3.3e-4).
- **Flint, 1.6182 / 36.4:** the nearest are F2-class rows at 1.62004 / 36.26–36.40 (Δnd +1.8e-3) and Sumita F4 at
  1.61659 / 36.62.

Both labels were checked to resolve to no catalog glass, so tracing still uses the printed nD and V. `cemented` C1 is
on L1 and L2, with one `doublets` entry spanning surfaces 1 to 3.

The analysis H1 and the sentence naming the model use the new name. The process-style phrase about a patent reference
without a production match became one plain sentence that no production lens is documented. "Apertures and Model
Verification" was renamed "Model Scope and Limitations", the pupil-zone list was condensed into one spherical-aberration
statement, and a note was added that the aperture scale beyond F/2.2 has no source. The glass section names the
nearest catalog rows.

### Engine numbers

Identical before and after this pass:
- `built.mjs`: EFL 99.99813 mm, F/2.2, half-field 28.548°, stop radius 18.4477 mm, total track 119.851 mm.
- `probe.mjs`: back focus 61.622 mm and track 58.229 mm at both focus keys.

### Audit results

- `audit:surface`: OK.
- `audit:aperture`: within 3 % of F/2.2, no rim limit.
- `audit:image-circle` and `audit:field-coverage`: still skip the file, because it has no `imageFormat`.

### Open

- **Image format:** none is set (a 35 mm motion-picture projection format would apply), so the image-circle and
  coverage audits cannot run.
- **Aperture list:** the f/2.2 to f/22 `fStops` list has no source. The patent shows no iris, and a projection
  objective of this kind works at full aperture. Trimming the list to the design aperture needs an owner decision.
- **Iris:** the paraxially sized iris trims the outermost real F/2.2 rays (about F/2.27).
- **Rims:** for the semi-diameter pass, the drawing measures 23.1 to 23.3 mm against the model's 23 mm.
- **Groups:** `groups` is empty. Front and rear group labels could be added if the viewer wants them.
