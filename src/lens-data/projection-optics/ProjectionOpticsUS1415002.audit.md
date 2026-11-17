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
  coverage audits cannot run. (Closed 2026-11-17: `35mm-cinema` set in the semi-diameter pass.)
- **Aperture list:** the f/2.2 to f/22 `fStops` list has no source. The patent shows no iris, and a projection
  objective of this kind works at full aperture. Trimming the list to the design aperture needs an owner decision.
  (Closed 2026-11-17: trimmed to F/2.2 under the semi-diameter pass brief.)
- **Iris:** the paraxially sized iris trims the outermost real F/2.2 rays (about F/2.27).
- **Rims:** for the semi-diameter pass, the drawing measures 23.1 to 23.3 mm against the model's 23 mm. (Closed
  2026-11-17: kept at 23 mm, within measurement noise.)
- **Groups:** `groups` is empty. Front and rear group labels could be added if the viewer wants them. (Closed
  2026-11-17: FRONT and REAR brackets added in the second review.)

## 2026-11-17 — Semi-diameter pass against the patent figure

**Source:** `patents/US1415002A.pdf`, PDF p. 1, the drawing sheet. The patent's text calls this a full-size diagram of
the 100 mm lens, and it is the only example. It was rendered at 600 dpi.

### Scale

There is no drawn axis, so the axis was taken as the midline of each element's top and bottom edges.

- **Axial scale:** first to last vertex along the axis row spans 940 px for 58.229 mm, or 16.14 px/mm (0.683 of full
  size on the scan). Three sub-spans agree within 2.4 %: the front pair gives 16.20 px/mm, Δ1 15.91 and the rear group
  16.53.
- **Vertical scale:** checked on the 57.111 mm front face. The drawn sag from vertex to rim is 78.5 px (4.86 mm), which
  puts the rim at 23.05 mm by the sphere formula, against 23.2 mm from the drawn half-height. The two directions agree
  within 1 %.

### Measurements

Line centres were read with a silhouette profile of the lower edge, which carries no leader lines, and checked on
column cuts.

| Surface | Stored sd | Figure sd | Ratio | Decision |
|---|---:|---:|---:|---|
| 1, 2, 3 (cemented I+II, square rim) | 23 | 23.1–23.2 | 1.005 | keep |
| 4, 5 (III, square rim) | 23 | 23.2 | 1.009 | keep |
| 6, 7 (IV, square rim) | 23 | 23.3 | 1.013 | keep |

Every reading is within 1.3 % of the stored value, which is measurement noise, so no rim changed. The drawn edge
thicknesses match the model at 23 mm: 1.13 mm for I, 9.35 mm for II, 5.98 mm for III and 1.25 mm for IV, with a
2.76 mm III–IV air space at the edge. The drawn I/II interface line is thick, so lens I's drawn edge reads about 0.7 mm
fuller than the model's, which is within the line weight. An overlay of the model on the figure at 16.14 px/mm puts
every drawn rim and face within about 0.3 mm of the model (`overlay.png` in the pass's scratch folder).

### Clearance and illumination

Rims are unchanged, so the rim-cost tool shows zero change at every field: relative illumination is 98.8 % at 4.1°,
96.7 % at 6.1°, 94.2 % at 8.1° and 88.7 % at 12.2°. At the format corner (13.6 mm, 7.73°) the chief ray clears every
rim, the axial margin on surface 1 is 0.27 mm, and the oblique bundle loses about 12 % of its width on each side at
surfaces 1 and 2.

The engine half-field is 28.55° before and after, set by the rims. The chief ray first reaches a rim at 36.2°, on
surface 7. The engine f-number is F/2.2 before and after.

### Metadata changed

| Field | Old | New | Source |
|---|---|---|---|
| `catalog.lensMounts` | none | `["projection-lens"]` | The patent title, "Projection Lens", and its theatre-projection purpose. |
| `catalog.imageFormat` | none | `"35mm-cinema"` | See below. |
| `aperture.fStops` | f/2.2 to f/22 | `[2.2]` | The patent shows no iris; the brief keeps only the design aperture for an iris-less projection lens. |

The 35 mm cinema format rests on two sources:
- The specification, lines 17–55 of the first text page, writes for moving-picture theatre projection, which in 1920
  used 35 mm film.
- *Motion Picture Herald* (Better Theatres guide, 1954, p. 95) lists Projection Optics Company, Inc. for "projection
  lenses for 35mm theatre projectors".

A 100 mm (about 4 in) focal length lies in the 2 in to 9 in range the patent says the trade specifies, so the model fits
the format as built. With the format set, `audit:image-circle` passes (0 undersized) and `audit:field-coverage` reaches
13.60 of 13.60 mm at 7.7°, clear.

The header comment's semi-diameter note now records the scale proof and overlay, and a format note was added. The
analysis "Field and format" and "Aperture settings" bullets were updated, and the 1954 listing was added to its sources.

### Results

- `audit:surface`: OK.
- `audit:aperture`: no rim limit.
- `built.mjs`: EFL 99.998 mm, F/2.2, stop radius 18.45 mm, half-field 28.55°, identical to before.

### Product name

No source names a product for this design. Delta Lenses suggests only that it "might have been used" for the Pro-Jex
series. The current name, "PROJECTION OPTICS 100mm f/2.2 (US 1,415,002 Design)", matches the evidence, and the patent's
own title is "Projection Lens".

### Open

- **Iris:** the paraxially sized iris trims the outermost real F/2.2 rays (about F/2.27).
- **Groups:** `groups` is empty. (Closed 2026-11-17: FRONT and REAR brackets added in the second review.)

## 2026-11-17 — Second review on the local site

**Compared:** the live page at `http://localhost:5223` (1400 × 900, the inspector for each of the four elements, the
focus-movement overlay at `focus=1`) against the drawing sheet, PDF p. 1, rendered afresh at 600 dpi, and the
specification, PDF pp. 2–3.

### Semi-diameters

Measured independently from ink runs along rows and columns of the 600 dpi render:

- **Axial scale:** vertex line centres at 1623.5, 1803.5, 1872.0, 2319.5, 2373.5, 2462.5 and 2563.5 px. The 940 px
  first-to-last span over 58.229 mm gives 16.14 px/mm. The sub-spans scatter from 15.2 to 17.2 px/mm because the
  thin elements are only 50 to 100 px wide against an 8 px line.
- **Rim heights:** the rim line centres sit at rows 2412 and 3162, a 750 px diameter, or 46.47 mm (23.2 mm
  semi-diameter). The axis, midway at row 2787, is also where the front face's leftmost ink lies. The sag of the
  57.111 mm front face, 78.5 px to the bottom corner, puts the same rim at 23.05 mm. Outer-ink diameters per
  element are 758 px (I + II), 757 px (III) and 763 px (IV): the four lenses are drawn level within 0.2 mm of radius,
  each with a flat rim.
- **Faces 0.7 mm inside the lower rim:** the front face of I lies 4.52 mm behind its vertex, against 4.53 mm in the
  model. The rear face of III lies 10.35 mm behind the front vertex of III (model 10.30), and the front face of IV
  13.20 mm behind it (model 13.27). Only the drawn I/II interface sits about 0.3 mm behind the model's curve, inside
  the drawing's accuracy. That interface makes lens I's drawn edge look about 0.5 mm thicker than the model's.

**Verdict:** the 23 mm rims on every surface stand, as the semi-diameter section found. Every reading is within
1.5 % of the stored value, and the page draws all four lenses square-rimmed and level, as the figure does. No rim,
land or cut changed. Against the baseline rims the rim-cost tool shows a worst loss of 0.0 points from 0° to the 7.7°
format corner (transmission 100, 100, 100, 99.0, 97.7, 96.3 and 94.5 % at 0, 1.3, 2.6, 3.9, 5.2, 6.4 and 7.7°).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| element `name` | L1, L2, L3, L4 | I, II, III, IV | The specification numbers "the lenses from left to right as I, II, III, IV" (PDF p. 3, lines 2–4), and the figure marks them so. |
| element `label` | Element 1 to Element 4 | Element I to Element IV | Same. |
| element `diagramLabel` | none (the page showed 1 to 4) | I, II, III, IV | Same; the diagram now carries the figure's numerals. |
| element `focalLengthMm` | none (the inspector showed "FL = —") | +57.18, −92.38, −201.14, +110.68 mm | Paraxial thick-lens focal lengths of each element in air, from the probe tool. |
| II `role` | "Flint cemented to L1; …" | "Flint cemented to lens I; …" | Follows the rename. |
| `groups` | empty | FRONT (surfaces 1–3), REAR (4–7) | The text's "front combination" and "rear combination" (PDF p. 3, lines 35–38; claims 1 and 2). |
| header comment | — | a LABELS note | Records the numerals and brackets. |

The analysis element headings now read "Lens I" to "Lens IV", and the architecture section names the two
combinations and the diagram's labels. The clear-aperture bullet's last clause now reads "no rim clips the full axial
beam", with the same meaning.

### Checked and found correct

- **Silhouette:** the page draws the cemented pair, III and IV at one height, square-rimmed, with the drawn edge
  thicknesses and the narrow III–IV gap at the rim. The inferred iris sits in the middle of the 28.094 mm space; the
  patent draws none.
- **Labels on the page:** I, II, III and IV sit under their lenses, with FRONT and REAR below them and C1 and STO
  above. Nothing collides. Each inspector shows the type, nD and νD, the new focal length, the `Unmatched` glass line
  and the role. I and II carry the "DOUBLET C1" tag, and no element reads "TRIPLET".
- **Types:** biconvex I (+57.111 / −57.111), plano-concave II (−57.111 / plano), negative meniscus III (+57.111 /
  +38.314, both centres to the film side), plano-convex IV (+57.111 / plano) agree with the radius signs and the text.
- **Tags:** no `apd` tags. The patent names no special glass and prints no aberration curves, so there is no colour
  plot to compare.
- **Movement:** infinity only. There is no gaps block and no zoom block, `closeFocusM` is 1e15, the focus slider
  reads "Not modeled", and the movement overlay reports no modelled focus or zoom movement. `focus.description`
  states only what the patent supports.
- **Engine numbers, before and after:** EFL 99.998 mm, F/2.2, stop radius 18.45 mm, half-field 28.55°.
  `audit:surface` OK, `audit:aperture` no rim limit, `audit:image-circle` 0 undersized, `audit:field-coverage`
  13.60 of 13.60 mm at 7.7°, clear. At the format corner (7.73°) the chief ray clears every rim, the axial margin
  on surface 1 is 0.27 mm, and the oblique bundle loses 12 % per side at surfaces 1 and 2 and 4 % at surface 3.
- **Glass:** the table prints nD 1.51600 / V 63.8 and 1.61820 / 36.4 (the drawing rounds the indices to four
  places), at the sodium D line. No catalog row lies within 1e-4 in index and 0.15 in V at that line. The nearest
  are S-BSL7 / K-BK7 class crowns at nd 1.51633 / 64.1 and F2 class flints at 1.62004 / 36.3–36.4, with Sumita and
  Hoya F4 at 1.61659 / 36.6. The vendor AGF files hold nothing closer. The patent names no maker or glass type and
  prints no other line indices, and it has only one example. Both `Unmatched` labels stand, and colour runs from
  nD and V with normal partial dispersion.
- **Assignee:** "Projection Optics Company, Inc." matches the specification's heading. No other file in the corpus
  names this company.

### Open

- **Field:** the engine half-field is 28.55°, set by the rims, so the default off-axis beam is drawn at 17.1°,
  more than twice the 7.7° format corner. The Super-Lite file declares a 16° full field (8° half). The same
  declaration here would need a `projection` field change, which this review does not make.
- **Iris:** the paraxially sized iris still trims the outermost real F/2.2 rays (about F/2.27).

- Field follow-up (2026-11-17): `projection` now declares 16° full field / 8° traced half-field, the smallest whole-degree
  field that reaches the 35 mm cinema corner (7.7° at f = 100), matching the Super-Lite file. The patent states no field.
