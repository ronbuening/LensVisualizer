# CARL ZEISS JENA 100mm f/1.2 (US 2,141,733 Design) — audit log

## Source

US 2,141,733 A, *Lens System*. Inventor Ludwig Bertele, Dresden; assignor to Zeiss Ikon Aktiengesellschaft, Dresden. Priority Germany July 20, 1937; filed in the US October 28, 1937 (Serial No. 171,459); granted December 27, 1938. Four claims, two numerical examples (Figs. 1 and 2). The patent states a focal length of 100 mm, a relative aperture of 1:1.2 and a picture angle of ±10°.

The model is the second example (Fig. 2), the lower table on the first page of the specification, at the patent's own scale. This is a patent design only; no production lens is identified with it.

## Transcription

Radii (mm): +92.28, +461.21, +53.61, +137.78, −271.11, +32.44, +52.17, flat, +286.33, flat.

Thicknesses and air spaces (mm): d1 14.44, l1 0.56, d2 16.39, d3 16.11, d4 12.78, l2 23.61, d5 10.00, l3 0.00, d6 5.56.

nd / ν: 1.6664 / 48.6, 1.6203 / 60.2, 1.4645 / 65.7, 1.7552 / 27.5, 1.7015 / 41.2, 1.7015 / 41.2. The patent labels the index nd, so the helium d line is used.

Surfaces 3 to 6 bound a cemented triplet. The two rear lenses are separate; the printed air space l3 = 0.00 means they touch on the axis only.

The first example (Fig. 1) prints R7 = +5.17 for its single rear lens, probably a misprint of +52.17. It is not modelled and nothing was taken from it.

## Values not printed in the patent

- Stop: placed 12 mm behind R6, splitting the printed 23.61 mm air space as 12 + 11.61. The patent draws no diaphragm.
- Semi-diameters (mm): 44, 44, 42, 42, 42, 28, 25, 25, 25, 25. All are estimates. (Superseded 2026-11-18 by the figure measurements below.)
- Back focus: the computed paraxial value, 30.0533 mm.

## First-order results

Focal length 100.0095 mm (patent 100; +0.01 %). Back focus 30.0533 mm. First to last surface 99.45 mm; first surface to image 129.50 mm. f/1.2 with a stop semi-diameter of 18.06 mm and an entrance-pupil radius of 41.67 mm.

Claim limits: R6 / f = 0.32 (limits 0.28 to 0.5); meniscus thickness / f = 0.45 (limits 0.4 to 0.6).

## 2026-11-17 — Deployment validation

Checked against the patent page images (400 dpi crops of the Fig. 2 table and the drawing), independently of the original author's notes: all 10 radii with their signs, 6 thicknesses, 3 air spaces, 6 nd and 6 ν values, the cemented surfaces, the element shapes and count against Fig. 2, and the front-page names and dates. No transcription mismatch was found.

Verdict: valid, with integration fixes. The model reproduces the patent's 100 mm focal length to 0.01 %. No product link: published Sonnar histories list Bertele's f/2 and f/1.5 lenses but no f/1.2 lens, so the design is kept as a patent design without a product name (shown publicly since the cleanup pass of the same date).

Changes made:

- `maker`: "Zeiss Ikon" → "Carl Zeiss Jena", the house maker under which Bertele's other Zeiss Ikon patents are filed.
- `source.patentNumber`: "US 2,141,733" → "US 2,141,733 A" (house form).
- `source.assignees`: "Zeiss Ikon Aktiengesellschaft" → "Zeiss Ikon AG" (the spelling the other four files use).
- `catalog.focalLengthMm.design`: 100.0095292890771 → 100.01 (rounding).
- Last gap: 30.053277025514724 → 30.0533 (rounding; still the paraxial back focus).
- `closeFocusM`: 1000000000000000.0 → 1e15 (same value, plain form).
- Elements L2, L3, L4: added `cemented: "T1"`; `doublets`: empty → one entry spanning surfaces 3 to 6, because the patent states these three lenses are cemented.
- Added a header comment stating the source, scale and inferred values.
- Analysis rewritten to the house section layout; this audit replaces a copy of the package's process notes.

No radius, thickness, index, Abbe number, stop position or semi-diameter was changed.

After the changes: focal length 100.0095 mm, f/1.200, back focus 30.0533 mm (image plane at the paraxial focus), stop semi-diameter 18.06 mm.

Audit results:

- Surface validator: no errors.
- Aperture audit: no surface below the on-axis f/1.2 ray; no raise proposed.
- Real-ray clearance at f/1.2 and 17.63 mm image height (the patent's 10°): no axial clipping at any rim and the chief ray passes. The axial edge ray needs 41.67 mm at surface 1 (rim 44) and 19.97 mm at surface 6 (rim 28). The real edge ray reaches the stop at 19.21 mm against the 18.06 mm stop, so the stop trims the outermost part of the f/1.2 pupil. At 10° the lower edge of the beam is cut.
- Image-circle and field-coverage audits skip the file: it carries no image format (and was hidden at the time).

Open:

- Closed 2026-11-17 (renamed and reworded in the cleanup pass): key, file name, name, subtitle and specs still carried the delivered wording ("PATENT REFERENCE", "PATENT ONLY; RETAIL IDENTITY UNPROVED", "ESTIMATED STOP AND RIMS", "LITERAL ZERO AXIAL REAR AIR GAP"); `focus.description` likewise.
- Closed 2026-11-17 (cleanup pass): `closeFocusM: 1e15` kept as the infinity-only placeholder with a plain focus description.
- Closed 2026-11-17 (cleanup pass): element focal lengths and roles added. Rear elements stay L5 and L6 in order; the analysis notes the patent's L6 / L7 lettering.
- Closed 2026-11-18 (semi-diameter pass): Semi-diameters are estimates and have not been compared with the proportions drawn in Fig. 2; `sdSource` is "heuristic".
- Closed in part 2026-11-17 (cleanup pass): glass names assigned where an exact row exists. No image format or mount assigned.

## 2026-11-17 — Cleanup and wording pass

Fields changed in the data file:

- `subtitle`: "1938 FIGURE 2; PATENT ONLY" → "US 2,141,733 A, Figure 2 — Bertele f/1.2 design".
- `specs`: the five delivered lines → "6 ELEMENTS / 4 GROUPS", "DESIGN F/1.2", "ALL SPHERICAL", "±10° FIELD" (the field is the patent's stated picture angle).
- `focus.description`: replaced by "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays 1e15.
- Elements: `label` "L1"–"L6" → "Element 1"–"Element 6"; `type` to the house shape names; `focalLengthMm` added (170.44, 131.66, 199.16, −37.68, 74.37, 408.17); a plain `role` on each.
- Cemented triplet id "T1" → "C1" on elements 2 to 4 and in `doublets` (one entry, surfaces 3 to 6).
- Header comment: one sentence reworded, and the Sonnar-family relation added.

Glass labels (printed value against the catalogue row):

- Element 3: none → "FK3 (Schott)", Δnd 0.0000, Δν +0.07.
- Element 4: none → "SF4 (Schott)", Δnd 0.0000, Δν +0.08.
- Elements 5 and 6: none → "BASF7 (Sumita)", Δnd +0.00004, Δν −0.05. The glass catalogue has this type only as Sumita BASF7 and Hoya BAFD7 rows; "BaSF7 (Schott)" resolves to the Sumita row.
- Element 1: "Unmatched (nd 1.6664 / V 48.6)". Nearest is the BaF11 type at 1.66672 / 48.4, Δnd 0.0003, outside the limit.
- Element 2: "Unmatched (nd 1.6203 / V 60.2)". Nearest is SK16 at 1.62041 / 60.3, Δnd 0.00011, just outside the limit.

No `apd` tags: the patent designates no special-dispersion glass.

Analysis: title set to the lens name; the glass section rewritten for the labels above; the product sentence reduced to one statement; the last section renamed "Patent Conditions and Model Scope".

Engine numbers before and after this pass are identical: focal length 100.0095 mm, f/1.2, default half-field 18.50°, stop semi-diameter 18.0567 mm, back focus 30.0533 mm. Surface validator: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit.

Open:

- Closed 2026-11-18 (semi-diameter pass; the rear pair measures about 63 % of the front height, not half): Semi-diameters are estimates (`sdSource` "heuristic") and have not been compared with Fig. 2. In the figure the front lens is slightly taller than the cemented meniscus and the rear pair is roughly half the front height; the present 44 / 42 / 25 mm follow that order. At the patent's 10° the lower edge of the beam is cut.
- Closed in part 2026-11-18 (`imageCircleMm` 35.3 added from the stated picture angle; mount and format stay unset): No `lensMounts` or `imageFormat`: the patent states a ±10° picture angle but no format. The default half-field shown (18.5°) is wider than the patent's field.
- Closed 2026-11-18 (second review: FRONT, MENISCUS and REAR brackets for the patent's three units): `groups` is empty.
- Elements 1 and 2 have no exact catalogue row.
- Closed 2026-11-18 (second review: names and diagram labels are now the patent's L1–L4, L6, L7): The rear elements are numbered 5 and 6, not the patent's L6 and L7.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: US 2,141,733 A, drawing sheet (page 1 of the PDF), Fig. 2, rendered at 400 dpi from a 300 dpi scan. Fig. 2 is the drawing of the modelled example.

Scale. The axis lies on page row 3231. Vertex crossings read beside the axis give R1 at column 980 and R10 at 2052. That is 1072 px for the printed 99.45 mm, or 10.78 px/mm. Single spans agree within 4 %: R1–R2 10.6, R3–R4 10.7, R4–R5 10.8, R5–R6 10.6, R6–R7 10.5 and R7–R8 10.8 px/mm. The vertical scale was checked on two sags. R6 at its drawn end (21.8 mm) has a computed sag of 8.42 mm, or 91 px; the drawing shows 93 px. R1 at the front-lens rim (42.6 mm) has a computed sag of 10.4 mm, or 112 px; the drawing shows 110–120 px. The figure is drawn to scale in both directions.

Readings. Each value is half of the top-to-bottom height of a flat run in the silhouette profile, cross-checked by eye on the crop. Label strokes above L3 and beside R9 were excluded.

| Surface | Before | Figure | After | Evidence |
|---|---|---|---|---|
| 1, 2 (L1) | 44 | 42.6 (459 px) | 44 | Square-cut. 3 % from the drawing, within noise; the drawn edge thickness (5.75 mm) lies between the values at 42.6 (6.0) and 44 (5.4). Kept. |
| 3, 4, 5 (triplet) | 42 | 37.3 (402 px) | 37.3 | Square-cut flat top shared by all three lenses; 11 % below the old value. The drawn L2 edge of 5.8 mm matches 6.4 mm at 37.3 (2.7 mm at 42). The axial f/1.2 ray needs 36.79 mm at R3. |
| 6 (R6) | 28 | 21.8 (235 px) | 21.8 | The end of the concave curve, where the drawn chamfer to the flat top begins; 22 % below the old value. The axial ray needs 19.97 mm. The chamfer is sloped, not vertical, so no `rimExtensionSd`; the renderer's straight edge from R5's rim follows it closely. |
| 7, 8 (first rear lens) | 25 | 26.7 (285–290 px) | 26.7 | Square-cut. +7 %, at the edge of noise. Confirmed by the drawn edge thickness of 2.8 mm (2.65 mm at 26.7, 3.6 mm at 25). Raising it costs no light. |
| 9, 10 (second rear lens) | 25 | 26.7 | 26.7 | Square-cut at the same height as the first rear lens in the drawing. |

The stop is unchanged (12 mm behind R6, engine radius 18.06 mm). R6's rim now lies 8.4 mm behind its vertex, so the glass no longer reaches the stop plane. The iris check finds no glass inside the iris radius on either side: margins 6.51 mm before and 14.83 mm after. The render-trim check reports no material trim. The validator needed no `gapSagFrac`.

Light. Corner illumination at the patent's 10.1° image corner is 79.7 % before and after. The worst loss at any field is 0.9 points, at 3.4°, from the triplet rim at 37.3. The leave-one-out restore wins back 0.9 points for the triplet and R6 and nothing for the rear pair, so the cut meets the 3-point rule.

Real-ray clearance at f/1.2 and 17.63 mm image height shows no axial clip and no blocked chief ray.

Engine numbers after the pass: focal length 100.0095 mm, f/1.200, stop semi-diameter 18.06 mm, back focus 30.0533 mm (unchanged). The default half-field goes from 18.50° to 18.18°, now limited by the triplet rim at R3. That is the largest field the final rims pass unblocked, and it is still wider than the patent's stated 10°; no rim was widened for it.

Metadata:

- `catalog.imageCircleMm` 35.3 mm is twice the image height of the patent's stated picture angle (±10° at f = 100 mm: 100 × tan 10° = 17.63 mm). This follows the corpus practice of twice the source image height.
- The image-circle audit (0 undersized) and field-coverage audit (≥ 99 % at the corner) now run and pass.
- `source.sdSource`: "heuristic" → "figure-measured".
- No mount or image format: the patent names neither, and no product is documented.
- The name "CARL ZEISS JENA 100mm f/1.2 (US 2,141,733 Design)" agrees with the patent's own focal length and aperture; there is no product name to compare it with.

Surface validator: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit.

Open:

- None for the rims.
- Closed 2026-11-18 (second review: re-measured 42.4 mm at the line centre and 42.6 mm at the outer edge; 44 kept, inside the reading band, with the drawn step order): The front lens could go to the drawn 42.6 mm if a later pass wants an exact figure fit; the difference is within noise.

## 2026-11-18 — Second review on the local site

Compared: the live page (1400×900 at infinity, the element inspector for all six elements, the focus-movement panel) against Fig. 2 rendered at the scan's native 300 dpi, and the specification text on page 2 of the PDF.

Figure scale, measured afresh. The axis lies on page rows 2422–2424 (tilt under 0.2°). Vertex crossings: R1 735, R2 850, R3 862, R4 994, R5 1124, R6 1227, R7 1412, R8/R9 about 1494, R10 1540. The span R3–R6 inside the cemented block is 365 px for 45.28 mm (8.06 px/mm) and R1–R10 is 804 px for 99.45 mm (8.08 px/mm); the draughtsman widened the printed 0.56 mm air space l1 to about 1.5 mm. Half the top-to-bottom height of the R6 arc at four columns gives a vertical scale of 8.08–8.22 px/mm, so the figure is to scale in both directions. The R6 arc sits 2–3 px below the drawn axis, so every height below is half the full top-to-bottom height.

Readings (line centre / outer edge of the stroke): L1 flat 42.4 / 42.6 mm; triplet flat top 37.0 / 37.3 mm; R6 cap end 21.9 mm, 8.44 mm behind its vertex (the computed sag at 21.8 mm is 8.42 mm); rear pair 26.5 / 26.7 mm. These agree with the rims set earlier today within 1 %, except L1 at 44 mm (3–4 % above), which stays inside the reading band with the drawn step order.

### Change: L4's rear rim

The figure carries the triplet's flat top at 37.3 mm past R5 to about 1 mm in front of R6's vertex plane (0.7 mm on the upper side, 1.4 mm on the lower), then draws a straight chamfer to the R6 cap end (9.5 mm along the axis, 15.4 mm in height). The renderer joined R5's rim straight to R6's cap end, so the live page drew L4 as a wedge: at the chamfer corner the outline stood 9.3 mm below the drawn top, and about 110 mm² of drawn glass was missing on each side. The earlier note that the straight join follows the chamfer closely does not hold on the page.

| Surface | Before | After | Evidence |
|---|---|---|---|
| 6 (R6) | `sd` 21.8, no land | `sd` 21.8, `rimExtensionSd` 37.3 | Fig. 2 flat top of L4 at 37.3 mm; land at the cap's edge sag (8.42 mm), 3.58 mm in front of the stop plane |

With the land the triplet's flat top runs unbroken to the rear land, as drawn; the only departure left is the chamfer corner, about 74 mm² of extra glass per side, at most 8.1 mm from the drawn chamfer line. No surface field draws a sloped chamfer, so the square corner is the nearer of the two pictures (side by side with the figure, the drawn outline matches everywhere except that corner). The land traces nothing. Surface validator: no errors, no `gapSagFrac` needed. The iris check finds no glass inside the iris (margins 6.51 mm before and 14.83 mm after) and the render-trim check reports no material trim.

Lands and cuts against the base1201sd rims (`rimcost.mjs --loo`, wide open, 0–10.1°):

| Surface | Kind | Baseline | Final | Light | Verdict |
|---|---|---|---|---|---|
| 3, 4, 5 | cut | 42 | 37.3 | 0.9 points at 3.4° (restoring them with R6 wins it back) | keep: slight |
| 6 | cut and land | 28 | 21.8, land 37.3 | land 0.0 (identical curve with and without it) | keep: drawn, costs nothing |
| 7–10 | raised | 25 | 26.7 | 0.0 | figure-driven |

Final curve 100.0, 100.0, 98.9, 95.8, 91.2, 85.9, 79.7 % at 0, 1.7, 3.4, 5.1, 6.8, 8.4 and 10.1°; worst loss 0.9 points at 3.4°, unchanged.

### Labels, brackets and tags

- Element names: L5, L6 → L6, L7, the letters Fig. 2 and the text give the rear pair (L5 is Fig. 1's single rear lens). `diagramLabel` L1, L2, L3, L4, L6, L7 added, so the label row under the diagram reads in the patent's letters (it showed ids 1–6). The inspector reads "Element 5 L6" and "Element 6 L7".
- Groups: none → FRONT (surfaces 1–2), MENISCUS (3–6) and REAR (7–10), the patent's three units: the front unit, the "meniscus unit", and the third unit "facing the focal point". The movement panel reports 3 groups and no movement.
- The C1 bracket spans 3–6; the inspector reads TRIPLET C1 on L2, L3 and L4, which is right. Shape types agree with the radius signs. Inspector focal lengths match the paraxial trace (170.44, 131.66, 199.16, −37.68, 74.37, 408.17 mm). Roles are true. No `apd` tags (the patent names no special glass); no aspheres.
- Movement: no variable gap and no zoom; the focus slider reads "Not modeled" and the description states only that the patent gives no close-focus data.

Engine numbers before and after: focal length 100.0095 mm, f/1.200, stop semi-diameter 18.06 mm, half-field 18.18°, back focus 30.0533 mm, all unchanged. Aperture audit within 3 % with no rim, trace or iris limit; image-circle audit 0 undersized; field coverage at or above 99 %.

### Glass and colour

Line test against the catalogue (exact window |Δn| ≤ 1e-4, |Δν| ≤ 0.15):

- L3 FK3: Δn 0.00000 at d, −0.00006 at D.
- L4 SF4: Δn 0.00000 at d; no row within 2e-4 at D.
- L6, L7 BaSF7: Δn +0.00004 at d, −0.00011 at D.
- L2 (1.6203 / 60.2): SK16 rows are +0.00011 at d (outside) but 1.62032 / 60.24–60.33 at D (inside).
- L1 (1.6664 / 48.6): BaF11 rows are +0.00032 at d and +0.0002 / −0.23 to −0.28 at D; outside at both.

SF4 fits the printed index only at d, so the table stays at d and L2 stays unmatched; the analysis states the D-line reading. `agfnear.py` at d finds no vendor row closer than the catalogue's BaF11/BAH11 (1.66672) and SK16/BSM16 (1.62041). The patent prints only nd and ν; both pairs also appear in the Fig. 1 table, because the front lens and meniscus are the same lenses, so that is not independent evidence. No aberration curves are printed, so there is no colour plot to compare. No constant or nd-only medium; no printed line index is missing.

Assignee "Zeiss Ikon AG" matches the front page ("Zeiss Ikon Aktiengesellschaft") and the corpus spelling used in seven files.

Open: nothing new. The earlier line on elements 1 and 2 (no exact catalogue row) stands.
