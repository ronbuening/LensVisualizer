# Audit Log - Merté / Zeiss US 2,171,274 Figure 1

Patent: US 2,171,274 A, Figure 1. Data stem: `CarlZeissJenaTelephotoUS2171274` (delivered as `Merte1939Figure1`).

## 2026-11-17 - Build from the patent table

- The Figure 1 drawing sheet and its table were read by eye; signed radii, n_d and Abbe numbers, all thicknesses and both air gaps were kept as printed. The Figure 2 example (C-line indices) was not built.
- The image plane is the computed paraxial back focus for an object at infinity. The printed table computes to a focal length 0.028 % longer than the patent's 100 mm; this was kept and not fitted away.
- The iris was first placed at the midpoint of the 17.61 mm first air gap (8.805 mm each side). Clear rims are estimates.
- No production model, factory prescription or glass melt was identified.

### Checks at build time (stop at the midpoint)

| Check | Result |
|---|---|
| Engine model builds | No errors |
| Iris clearance to the neighbouring glass | 8.805 mm in front, 7.54 mm behind |
| Surface separations, 1001 samples per interval | All positive, smallest 0.219 mm |
| On-axis rays across ±90 % of the paraxial pupil | 181 of 181 pass |
| Independent paraxial calculation | EFL 100.0277 mm, back focus 51.1748 mm |
| Independent exact ray trace against the engine | Seven rays agree to within 1.2e-14 mm |

### Limits noted at build time

On-axis rays at ±99 % of the paraxial pupil clip at the iris, so the paraxial pupil radius slightly overstates the real pupil. Sample off-axis rays clip 2 of 9 at 3.75° and 4 of 9 at 7.5°. No close-focus behaviour is modelled.

## 2026-11-17 — Deployment validation

Checked against 300 dpi renders of the patent pages, independently of the notes above: all eight radii and their signs, five glass thicknesses, both air gaps, five n_d values and five Abbe numbers, on both the drawing-sheet table and the typeset table on page 1. No mismatch. The front page gives Willy Merté, Jena, as inventor, assignor to the firm Carl Zeiss, Jena; filed June 12, 1937 (Germany June 22, 1936); granted August 29, 1939. The patent has two examples, so the "Figure 1" example label is right.

Verdict: valid, with the form fixes below. No production lens is linked to this example: no catalogue page or construction diagram of a five-element Zeiss telephoto of this layout was found, so it stays a patent design at the patent's 100 mm scale (hidden at that date; since made visible).

Changes made:

- `maker`: "Zeiss" → "Carl Zeiss Jena" (house maker for Carl Zeiss patents).
- `source.patentNumber`: "US 2,171,274" → "US 2,171,274 A" (house form).
- `source.assignees`: "Carl Zeiss" → "Carl-Zeiss-Stiftung" (the corpus spelling for "the firm Carl Zeiss").
- `source.authors`: same name, written with the accented letter in place of an escape code.
- `catalog.focalLengthMm.design`: 100.02767451625677 → 100.03 (rounding).
- Last gap: 51.17479100902517 → 51.1748 (rounding; still the paraxial back focus).
- `closeFocusM`: 1000000000000000.0 → 1e15 (same value).
- L2, L3, L4: added `cemented: "T1"`, and `doublets` now marks surfaces 3 to 6, because the patent draws and describes these three lenses as one cemented part.
- Stop position: 8.805 / 8.805 mm → 10.3 / 7.31 mm (behind r2 / ahead of r3). The stop is not dimensioned in the patent; the drawing shows it at about 58 % of the gap, and the surface audit stays clean with it there. The printed 17.61 mm total is unchanged.
- Added a plain header comment to the data file stating the source, scale and what is inferred.
- Analysis rewritten to the standard layout with the patent, inventor and grant rows; run-together numbers removed; the 15° field stated as the full angle.
- This audit log: process wording removed from the earlier entry; its figures are unchanged.

First-order values after the changes: EFL 100.0277 mm, f/4.000, paraxial back focus 51.1748 mm, first vertex to image 98.1548 mm, stop semi-diameter 9.00 mm. Element focal lengths: L1 +47.18, L2 −11.63, L3 +12.25, L4 −16.93, L5 +34.03 mm; cemented triplet −17.30 mm.

Audit results: surface audit OK, no errors. Aperture audit: no surface below the on-axis f/4 ray (on-axis ray heights 12.50, 12.25, 7.28, 6.86, 6.58, 5.99, 6.53, 6.49 mm against rims 13.5, 13.5, 8, 8, 8, 8, 10, 10 mm). Image-circle and field-coverage audits skip the file because it is hidden and has no image format. A separate ray trace gives a chief-ray image height of 13.14 mm at 7.5° with about 76 % of the on-axis beam width passing, and nothing passing at 15° off axis, so the patent's "approximately 15°" is the full field angle.

Open:

- Name, key, file name, subtitle and specs wording ("PATENT-ONLY RECONSTRUCTION", "PATENT ONLY; NO RETAIL MATCH") for the cleanup pass.
- Element roles and per-element focal lengths are not yet in the data file; glasses carry no catalogue labels.
- Rims against the drawing: Figure 1 reads about 13.1 mm (L1), 8.6 mm (triplet) and 8.9 mm (L5) against the modelled 13.5, 8 and 10 mm. (Closed 2026-11-18, semi-diameter pass.)
- No image format or mount is set.
- Empty `groups` array.

## 2026-11-17 — Cleanup and wording pass

No optical value, rim or stop position was changed.

Fields changed:

- `subtitle`: "1939 FIGURE 1; PATENT-ONLY RECONSTRUCTION" → "US 2,171,274 A, Figure 1 — Merté distortion-corrected telephoto".
- `specs`: "5 ELEMENTS / 3 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY" → "5 ELEMENTS / 3 GROUPS", "DESIGN F/4", "ALL SPHERICAL", "TELEPHOTO".
- `focus.description`: → "Infinity focus only; the patent gives no close-focus data." (`closeFocusM` stays 1e15).
- Elements: labels "L1"–"L5" → "Element 1"–"Element 5"; types to the house shape names (Plano-Convex Positive, Biconcave Negative, Biconvex Positive, Biconcave Negative, Biconvex Positive); `focalLengthMm` added (47.18, −11.63, 12.25, −16.93, 34.03); a plain `role` on each.
- Cemented triplet id "T1" → "C1" on elements 2, 3, 4 and in the single `doublets` entry (surfaces 3 to 6).
- `groups`: empty → G1 (surfaces 1–2), G2 (3–6), G3 (7–8).
- Header comment: opening line and scale sentence reworded; a note on the glass names added.
- Analysis: title set to the lens name; the product paragraph cut to the naming reason and one sentence that no production lens is documented; glass table gained the catalogue rows; last heading renamed to "Patent Conditions and Model Scope"; the paragraph describing the table comparison removed.

Glass labels (printed value against the catalogue row):

- Element 2: none → "E-FL6 (Hoya catalog row …)", Δnd −0.00003, Δνd +0.04.
- Element 3: none → "SK5 (catalog row SK5, Sumita)", Δnd +0.00003, Δνd −0.04.
- Elements 1, 4, 5: "Unmatched (…)" with the printed values. The nearest row to element 1, Schott N-PSK3 (1.55232 / 63.46), misses the Abbe limit by 0.01 (Δνd +0.16) and was not used.

Engine numbers before and after are identical: EFL 100.0277 mm, f/4.000, back focus 51.1748 mm, first vertex to image 98.1548 mm, stop semi-diameter 8.997 mm, off-axis display field 6.57°. Surface audit: OK, no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit.

The earlier Open items for name, key, file name, subtitle, specs, element roles, focal lengths and the empty `groups` array are closed by this pass and the renaming before it.

Open:

- Rims against the drawing: Figure 1 reads about 13.1 mm (element 1), 8.6 mm (triplet) and 8.9 mm (element 5) against the modelled 13.5, 8 and 10 mm. (Closed 2026-11-18 by the semi-diameter pass below, which re-measured the figure at 300 dpi.)
- No lens mount or image format is set. The patent states a field of about 15° (full angle, about a 26 mm image circle at this scale) but no format.
- No production lens is documented for this design.

## 2026-11-18 — Semi-diameter pass against the patent figure

Source: US2171274A.pdf, drawing sheet 1, Figure 1 (the modelled example), measured at the scan's native 300 dpi. The optical axis lies on page row 1291.5. Surface crossings on the axis fall at page columns 689, 764, 1048.5, 1076, 1197, 1281, 1411.5 and 1450.5. Against the printed spacings this gives 16.5, 16.2, 15.3, 16.4, 16.1, 16.4 and 15.9 px/mm for the seven spans and 16.21 px/mm over the whole first-to-last vertex length (46.98 mm), so the drawing is to scale within the stroke width. The diaphragm tick sits 10.2 mm behind r2, which agrees with the 10.3 mm stop position set in the deployment validation. Rim heights are outermost ink less half a stroke (about 3 px), read on both sides of the axis.

| Surface | Model sd before | Figure | Model sd after | Evidence and decision |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 13.5 | 13.9 (225 px) | 13.5 | Within 3 %; edge thickness and shape match the overlay. Kept. |
| 3 (L2 front) | 8 | face ends about 7.4 (bevel), outer rim 9.0 (145 px) | 8, land to 9.0 | The figure draws L2 as a cup standing about 1.4 mm proud of L3 and L4, with a bevelled front corner. The curved face ends near 7.4 (within 8 % of 8: kept); `rimExtensionSd: 9` draws the drawn outer rim without adding clear aperture. |
| 4, 5 (cemented) | 8 | 7.6 (123 px) | 8 | Within 5 %. Reducing all three to 7.6 costs at most 0.7 points; left as drawing noise. |
| 6 (L4 rear) | 8 | face ends about 6.5 (bevel), outer rim 7.6 | 8 | Cutting the face to 6.5 costs 8 points at 3.7° and 13 points at 5.5° of corner light, so the lands rule keeps 8. |
| 7, 8 (L5) | 10 | 9.3 (151 px) | 10 | 7 % below the model; at 9.3 the engine half-field falls from 10.95° to 10.4° and transmission at 5.5° drops 4 points. Kept. |

Corner illumination (engine, wide open, infinity), baseline and final file identical: 100.0 / 100.0 / 100.0 / 95.7 / 78.4 / 57.6 / 35.1 % at 0 / 1.8 / 3.7 / 5.5 / 7.3 / 9.1 / 11.0°; the worst leave-one-out loss against the baseline is 0.0 points. Engine numbers before and after are identical: EFL 100.0277 mm, f/4.000, half-field 10.95° (limited by surface 8 at 12.3° and surface 7 at 12.9°), stop semi-diameter 8.997 mm. The chief ray passes every rim out to about 11° off axis; the patent's 7.5° half-field passes with about 78 % transmission. No surface clips the on-axis f/4 beam (axial heights 12.50, 12.25, 7.28, 6.86, 6.58, 5.99, 6.53, 6.49 mm). The land on surface 3 stands 6.04 mm behind the stop plane, so the iris stays in air; no element outline is trimmed in the render. Surface audit: OK. Aperture audit: no rim, trace or iris limit. Image-circle and field-coverage audits skip the file because it has no image format.

Overlay of the model section on the figure at matched scale (16.21 px/mm): L1, L5 and the triplet core coincide with the drawing; the land shows L2's step, drawn in the model as a straight edge from the 9.0 mm land down to the 8 mm cemented rim rather than the figure's flat top and rear bevel.

Metadata: no change. The patent states no film format, mount or image diameter, and no production lens is documented, so `lensMounts`, `imageFormat` and `imageCircleMm` stay unset. The patent's "approximately 15°" field corresponds to about a 26 mm image circle at f = 100, but that is a derived figure, not a published one.

Open:

- The engine half-field (10.95°) is wider than the patent's 7.5°. A `projection` entry with `fullFieldDeg: 15` and `maxTraceFieldDeg: 7.5` would bound the analysis field to what the patent states; not added here because this pass is limited to rims and catalog metadata. (Closed 2026-11-18: the coordinator decided to leave the engine field as it is, with no projection cap.)
- No lens mount, image format or production lens.

### 2026-11-18 — Glass label and image circle

- Element 1 glass: "Unmatched (nd 1.55226 / V 63.3, crown)" → "PCD3 (HOYA catalog equivalent; production supplier unspecified)". The coordinator added the Hoya PCD3 row (nd 1.55232, νd 63.42) to the catalog; against the printed 1.55226 / 63.3 that is Δnd +0.00006, Δνd +0.12, inside the exact-match limits. The label resolves to PCD3 (Hoya). Three of the five glasses now carry catalogue rows; the analysis glass table and the header note were updated to match.
- `catalog.imageCircleMm`: unset → 26.34. Source: page 1 of the patent says the Figure 1 example "produces an exceedingly sharp image field of approximately 15° at a ratio of aperture of 1:4"; the earlier ray trace showed this is the full angle. 2 × 100.03 × tan 7.5° = 26.34 mm. No film format or mount is set, because the patent names none.
- Engine numbers unchanged: EFL 100.0277 mm, f/4.000, back focus 51.1748 mm, half-field 10.95°, stop semi-diameter 8.997 mm. Only element 1's dispersion curve changes, from the two printed numbers to the catalogue row.
- Image-circle audit: 0 undersized. Field-coverage audit: the chief ray reaches the full 13.17 mm corner at 7.5° with no rim in the way (100 %). Surface audit OK; aperture audit shows no rim, trace or iris limit.

## 2026-11-18 — Second review on the local site

Compared: the local page (`/lens/carl-zeiss-jena-telephoto-100mm-f4-us2171274`, 1400 × 900, and the inspector of every element) against drawing sheet 1, Figure 1, re-measured at 300 and 600 dpi; the printed table and specification page 1; the light-rule baseline (rims before the semi-diameter section above).

Figure scale, re-derived: r1 to r8 on the axis is 761.5 px for 46.98 mm, 16.21 px/mm. The vertical scale was checked on two arcs: the cemented face r4 (R 9.077) reaches the L3 rim height of 124 px at page column 1143, where a 16.21 px/mm circle puts it at 123 px; r1 (R 26.057) reaches L1's 225 px rim at column 754 against 755 measured. The page axis tilts about 2.5 px over the figure, so heights were read from the local axis (row 1293 at L1, 1292 at the triplet, 1291 at L5), on both sides, less half a stroke.

| Element | Model sd | Figure (top / bottom) | Decision |
|---|---:|---:|---|
| L1 | 13.5 | 13.9 / 13.9 | 3 % low; kept. |
| L2 outer rim | land 9.0 | 9.0 / 8.9 | Matches; the face r3 ends at about 7.3 to 7.65 in a 45° chamfer, within 8 % of 8. Kept. |
| L3, L4 | 8 | 7.65 / 7.55 | 5 % high. Lowering all four triplet faces to 7.6 costs 1.9 points at 5° (full pupil); inside the 10 % band and the step order (L2 proud of L3/L4) is right on the page. Kept. |
| L4 rear corner | 8 | chamfer to about 6.5 | Kept square for light (the earlier 8 to 13 point cost stands). |
| L5 | 10 | 9.4 / 9.3 | 7 % high. At 9.3 the full-pupil transmission falls 7.6 points at 7.5° (76.6 to 69.0 %). Kept. |

Rims: no change. The live render keeps the drawn height order L1 > L5 > L2 > L3/L4. The one shape the renderer cannot draw is L2's flat 9.0 mm top with chamfers at both ends: the land is vertical at the r3 rim and the top edge then runs straight to the cemented rim at 8, so L2 reads as a slight wedge. The diaphragm tick sits 10.2 mm behind r2 in the figure (column 929.5) against the model's 10.3 mm.

Lands and cuts: no face is below its baseline. The only land, `rimExtensionSd` 9 on surface 3, costs 0.0 points at every field to 7.5° (full pupil, against the baseline) and is drawn in the figure, so it stays.

Changes:

| Field | Before | After | Evidence |
|---|---|---|---|
| L3 `glass` | SK5 (Schott) | N-SK5 (SCHOTT catalog equivalent; production supplier unspecified) | The old label named Schott but resolved to the Sumita SK5 row, while the header and analysis named Sumita. Schott N-SK5 (1.58913 / 61.27) is exact against the printed 1.58910 / 61.3 (Δnd +0.00003, Δνd −0.03), Schott is the period vendor for a Jena design, and the label now resolves to the vendor it names. |
| `groups` | G1, G2, G3 | G1 (+), G2 (−), G3 (+) | Figure 1 marks (+) under L1, (−) under the triplet and (+) beside L5; the brackets still cover surfaces 1–2, 3–6, 7–8. No collision on the page. |
| Header comment | Sumita SK5 | Schott N-SK5; d-line evidence and the figure's power marks | — |
| Analysis | SK5 (Sumita row) | Schott N-SK5 row; d-line evidence; a paragraph on D–G′ colour in the model | — |

Engine numbers before and after are identical: EFL 100.0277 mm, f/4.000, half-field 10.95°, stop semi-diameter 8.997 mm, back focus 51.1748 mm. Wide-open transmission (full pupil) 100.0 / 100.0 / 100.0 / 100.0 / 98.9 / 89.3 / 76.6 % at 0 / 1.2 / 2.5 / 3.7 / 5.0 / 6.2 / 7.5°. A separate meridional trace passes 53 % at 10° and nothing at 15°, so the patent's 15° is the full field and the 26.34 mm image circle (2 × 100.03 × tan 7.5°) stands. Surface audit OK; aperture audit within 3 % of f/4 with no rim, trace or iris limit; image-circle audit 0 undersized; field coverage 100 % at 7.5°.

Re-checked and correct: element names L1–L5 are the patent's own; `type` strings agree with the radius signs; computed element focal lengths +47.18, −11.63, +12.25, −16.93, +34.03 mm and the triplet −17.30 mm equal the stored values; roles are true (L2 is the strongest element, |f| 11.63 mm); the cemented triplet C1 covers surfaces 3–6 and the inspector of L2, L3 and L4 reads "TRIPLET C1", which is right for three lenses cemented together; no aspheric surfaces and no `apd` tags, as the patent names no special glass; the stop sits between L1 and the triplet. Movement: no gaps block, no zoom, `closeFocusM` 1e15; the slider reads "Not modeled", the movement overlay reports no modelled group movement, and `focus.description` states only that the patent gives no close-focus data.

Glass and colour:

- Reference line: the table is headed n_d while the text speaks of the D and G′ lines. At the helium d line E-FL6 is 0.00003 from the printed 1.56735 and N-SK5 0.00003 from 1.58910; at sodium D E-FL6 is 0.00015 off. The d reference is right.
- L1 PCD3 (Hoya, 1.55232 / 63.42; Δnd +0.00006, Δνd +0.12) is the only exact row; Schott N-PSK3 misses by Δνd +0.16. L2 E-FL6 is exact; Sumita LF6 (1.56732 / 42.80) and Ohara S-TIL26 are equally exact, but none is a period vendor, so E-FL6 stays.
- L4 (1.59667 / 39.1) and L5 (1.67165 / 32.3): the patent prints only n_d and ν for them, no names or other lines (drawing sheet 1 and page 1). Nearest vendor rows are F8 / E-F8 / S-TIM8 at 1.59551 and SF5 / E-FD5 at 1.67270, both about 0.001 off in index. Neither pair recurs in Figure 2, whose table gives C-line indices for six different glasses. Both stay unmatched, on the normal-line dispersion model.
- Colour against the patent's claim of correction for D and G′: the model's d and g (435.8 nm) foci meet at 70 % of the f/4 pupil radius (−0.020 and −0.030 mm from the image plane). Paraxially g lies 0.21 mm short of d (C +0.16 mm, F −0.19 mm); at the full pupil it lies 0.39 mm beyond. With every glass on the normal-line model instead of the three catalogue rows these figures move by no more than about 0.02 mm, so the colour comes from the printed indices and Abbe numbers, not from the labels. The patent prints no aberration curves to compare.

Assignee: `Carl-Zeiss-Stiftung` is the corpus spelling (27 files) for the front page's "assignor to the firm Carl Zeiss, Jena, Germany". No change.

Open:

- L2's flat top and chamfers (Figure 1) cannot be drawn with a land on the front face alone; the render shows a straight edge from the 9.0 mm land to the 8 mm cemented rim.
