# MINOLTA MD 35mm f/2.8 — source audit

2026-11-01. Package prepared against e1414bf50b190e20541b65b16ec278c120841f70.

Package input SHA256 `772210498a59d8e9d22401062c6b628e46661fa01171f12ce43e1590e702a2f8`. The package kept the Table I surfaces, indices and Abbe numbers, its figure-informed clear apertures, a midpoint stop and the infinity image plane from the printed 37.1 mm back focus. It used closeFocusM = 1e15 to disable finite focus, and its rim vector replaced an earlier rejected set of proportions. Closed 2026-11-02: the rims, stop and closeFocusM were replaced; see the section below.

The package's optical-path reference studies were excluded, and its diffraction results were treated as estimates. Its earlier and rejected attempts stayed outside the catalog. No per-lens test was added.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read: Table I against the page image and claim 2, 30 cells (10 r, 10 d including s', 5 N, 5 v), no mismatches; every R and d is exactly ×35. No aspheres or variable gaps. Figure 1 shows five air-spaced singlets with the shapes in the file. Table II reproduces from Table I within 0.0016 across all 50 surface cells, so no slip search was needed. Figures 2b and 2c agree as read by eye: distortion −1.40 % against about −1.3 %, meridional focus −0.0135 against about −0.013 at 32°.

Patent against model: f 35 / 35.0046 mm; F/2.8 / 2.8; s' 37.1 mm printed and kept, 37.106 mm computed; total 79.107 / 79.107 mm; half-field 32° / 32°.

Rims: Figure 1 vertices fit the table within 4 px of 21.52 px/mm, about 0.2 mm, and the package rims ran 0.85–0.88 of the drawing at that scale, clipping the axial beam at S5, S6 and S8. The S1–S10 values are now 14.4, 11.8, 10.3, 10.3, 6.8, 7.5, 8.0, 8.0, 10.0, 10.0 mm. S6 would need gapSagFrac 0.93 for the drawn 7.6 mm, and that was not added. audit:aperture moved from f/2.93 to f/2.80, and rimcost corner light at 32° from 21.4 % to 54.0 %.

Stop: Figure 1 and Table I give none. Table II fits 0.1639–0.1640 f behind r4 (rms 0.0003, against 0.0173 at the midpoint), so z = 29.463 mm, with d4 split 5.7365 + 5.4005 mm.

Spectral line: Table I names none. By the LENS_DATA_SPEC.md coordinate test, 4 of 5 pairs reproduce a catalog nd/νd (L2 misses on νd) and 0 of 5 a catalog ne/νe across 709 catalog rows, so the table is d-line. The indexReferenceNote entries were removed as that section directs.

Public comparison: no Minolta section drawing was found. Minolta's specification table (pacificrimcamera.com/rl/00052/00052.pdf p. 12) lists the 35mm f/2.8 MD as 5 elements / 5 groups, 63°, 1 ft, f/22, 49 mm. The HG versions are 7/6 and no 35/2.8 SG was found.

Fields changed in this cleanup: header comment, subtitle, catalog.specs, element roles, indexReferenceNote removed; analysis rewritten where stale. The rim, stop and closeFocusM changes landed just before it.

Open: production version not established (1977 55 mm MD W.Rokkor, 1978 49 mm, later MD); no factory prescription or section drawing to confirm the pairing.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: patents/US3936153.pdf, page 2 (Sheet 1), Figure 1, the Table I embodiment, read at its native 1-bit raster of 2320 × 3408 px. No maker section drawing exists, so the patent figure is the only shape evidence. The patent prints no lateral-aberration fans, so there is no second rim reading.

Scale: the S1 and S10 line centres span 903 px over 42.007 mm, 21.5 px/mm along the axis. Across the axis, a joint fit of the S1, S2, S3, S4, S5 and S10 arcs gives 21.42 px/mm (rms 0.8 px, axis row left free), 0.4 % from the axial scale; single surfaces scatter 21.0–22.3. The figure is not anamorphic and no correction was applied.

Readings are line centres at 21.5 px/mm from the axis line at row 1628.6. The elements sit 1–4 px above that line, so the top reads high and the bottom low, and the half-span is the reading.

| Surface | Before (mm) | Figure, above / below axis | Half-span | After (mm) | Evidence |
| --- | --- | --- | --- | --- | --- |
| S1 | 14.4 | 14.52 / 14.44 | 14.48 | 14.4 | flat edge, within noise |
| S2 | 11.8 | 11.80 / 11.88 | 11.84 | 11.8, `rimExtensionSd` 14.4 | curve end kept; land added |
| S3, S4 | 10.3 | 10.28 / 10.18 | 10.23 | 10.3 | square rim, within noise |
| S5 | 6.8 | 6.87 / 6.81 | 6.84 | 6.8, `rimExtensionSd` 7.5 | curve end kept; land added |
| S6 | 7.5 | 7.82 / 7.41 | 7.62 | 7.5 | flat edge, see below |
| S7, S8 | 8.0 | 8.19 / 7.88 | 8.03 | 8.0 | square rim, within noise |
| S9, S10 | 10.0 | 10.10 / 9.79 | 9.94 | 10.0 | square rim, within noise |

No `sd` changed. The earlier figure reading stands, and these rims all sit above the package values, so none counts as a cut under the corner-light rule.

S6 and `gapSagFrac`: not added; the lens keeps the default 0.9. S6 and S7 meet at y = 7.92 mm. The white channel on Figure 1 follows the prescription gap outward and closes at about 7.3 mm above the axis, where 0.14 mm (3 px) remains and the two line weights cover it; heavier lines close it sooner below the axis. At 7.5 mm the gap is 0.10 mm and at 7.6 mm it is 0.08 mm, 2.2 and 1.6 px on the figure, both under a line weight, and the app render at 7.5 mm already shows the faces closing at L3's rim. S6 is 0.12 mm under the half-span, while L3's own edges differ by 0.2 mm from their mean. The overlay puts 7.5 mm on the lower flat. The L3 to L4 step reads 0.41 mm against 0.50 mm modeled, in the right order. So the shape gives no reason for 0.93. Raising S6 to 7.6 mm would add only 0.4 points of corner light at 32° (54.0 to 54.4 %, 1.1 points at most, at 23.3°), a gain only the numbers want.

Lands: Figure 1 draws L1 with a flat edge at the S1 rim height, running back to z ≈ 5.4 mm before a bevel drops to the S2 curve end, and L3 with a short bevel from the S5 curve end to a flat edge. The renderer joined the two rims with one sloped line, which drew L1 as a spike. `rimExtensionSd` on S2 (14.4 mm) and S5 (7.5 mm) restores both flat edges. The renderer has no bevel, so each vertical land stands in for one: S2's lies at z = 6.47 mm, inside L1's drawn bevel at z ≈ 5.4–6.8 mm, and S5's at z = 33.10 mm, at the foot of L3's drawn bevel at z ≈ 33.1–33.6 mm. L1's outline error is about 1.2 mm² per rim against about 5.3 mm² before, and the land overfills the bevel's corner by that remainder.

Clearance on the final set: the validator passes at the default gap limit and the image-circle check lists nothing. No surface clips the axial beam or blocks the chief ray; axial marginal heights over S1–S10 are 6.25, 6.18, 8.77, 8.31, 6.36, 6.67, 6.73, 6.95, 6.90 and 6.83 mm. Traced f-number f/2.80; engine half-field 32.0°, 21.56 mm of the 21.65 mm corner, clear. The lands add no rays, so the full-pupil lattice gives corner light of 54.0 % at 32° with and without them, against 21.4 % for the package rims. Fields from 0° to 32° gain 9.5 to 32.6 points on the package, and no field loses.

Live check: the page at infinity and at the focus slider's far end matches, as the file is static, and the overlay of the final outline on Figure 1 fits within a line weight at every element apart from L1's and L3's bevel corners and L3's raised upper flat. Maker comparison was skipped, as no section drawing exists.

Limitation: every rim is a drawing reading, good to about 0.15 mm, and the L1 and L3 bevels are approximated by square corners.

## 2026-11-02 — Second review: diagram, labels and movement

Compared: the local page at 1× and 4× against the native raster of Figure 1 with fresh line-centre readings, plus Tables I to IV, claim 2 and the certificate of correction. No maker section drawing exists. Earlier sections of this log call the elements L1–L5; they are now G1–G5.

Table choice: Table I is the one modeled. All 30 cells scale ×35 to the file, and claim 2 prints the same values. Figure 1 is drawn to Table I and not Table III: its d3/d4 reads 215/236 px = 0.91, against 0.88 for Table I and 1.23 for Table III.

Stop: a Seidel recomputation written from Table I fits Table II at 0.16395 f behind r4, rms 0.00028 over the coma, astigmatism and distortion columns, against 0.0173 at the midpoint of d4. The file's 0.1639 f stands. The largest difference across all 50 cells is 0.0016, at S8 spherical, a column the stop does not touch. The same code fits Table IV at 0.1419 f, rms 0.00015.

Patent prose slips, neither touching the model: column 3 prints N3 = 1.6583 in the condition (d) check, where Table I's N3 is 1.6889 and 1.6583 is N2. Table II's Petzval cells at S5 and S6 (−1.0167, −0.1704) reproduce 1.6889 and reject 1.6583 (−0.9895, −0.1659). Column 3 also prints d3/d4 = 1.136, which is d4/d3; d3/d4 is 0.880, still inside 0.7–1.3.

G2's coordinate: Table I and claim 2 both print 1.6583/58.5. Table II confirms the index through the S3 and S4 Petzval cells but has no chromatic column, so 58.5 has no second check inside the patent. Table III uses another glass, 1.6968/55.6. It is not a one-off in the wider record: the same pair appears in the Minolta files for JP S51-62037 A (twice), US 4,192,577 and JP 1969-025743 B.

Silhouette readings at 21.5 px/mm, half-span between the upper and lower line centres:

| Rim | Figure half-span (mm) | File (mm) |
| --- | --- | --- |
| G1 edge | 14.45 | 14.4 |
| S2 curve end | 11.84 | 11.8 |
| G2 edge | 10.23 | 10.3 |
| S5 curve end | 6.77 | 6.8 |
| G3 edge | 7.59 | 7.5 |
| G4 edge | 8.06 | 8.0 |
| G5 edge | 9.92 | 10.0 |

Every rim sits within 0.09 mm of the drawing and the height order G1, G2, G5, G4, G3 is as drawn, so no `sd` changed. The visible differences that remain are G1's rear corners and G3's front corners, which the figure chamfers and the renderer squares. S2's land lies at z = 6.52 mm by the prescription sag, not the 6.47 mm given in the section above.

S6 and S7 at G3: held at 7.5 and 8.0 mm with the default gap limit. The drawn G3 to G4 step is 0.40 mm above the axis and 0.53 mm below, mean 0.46. The file gives 0.50 and S6 at 7.6 mm would give 0.40, so neither fits better. At the site's 7.4 px/mm the 0.1 mm is 0.7 px, and at 4× the G3 rear corner closes on G4's front face as Figure 1 draws it. S6 at 7.6 mm also needs S5's land at 7.6 mm and `gapSagFrac` 0.93: the validator reports 0.91 mm of sag against 0.891 mm allowed, and 0.92 still refuses. It would add 0.4 points at 32° and 1.1 at 23.3°. A 1.2 % rim change inside reading noise does not earn a policy field.

No face is below the package value, so there are no cuts. The lands, with light measured on the app's full-pupil lattice:

| Face | Item | Figure (mm) | Baseline (mm) | Final (mm) | Points of light | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| S2 | `rimExtensionSd` | curve end 11.84, edge 14.45 | 10.4, no land | 11.8, land 14.4 | 0.0 | keep: improved |
| S5 | `rimExtensionSd` | curve end 6.77, edge 7.59 | 5.9, no land | 6.8, land 7.5 | 0.0 | keep: improved |

Removing both lands leaves every field unchanged. S2's full bundle reaches 9.09 mm, inside its 11.8 mm curve end. Raising S5 to 7.5 mm without the land also changes nothing, because S6 is the limit behind it. Final `rimcost.mjs`: no field loses against baseline, with gains from 9.5 points on axis to 32.6 points. Corner light at 32° is 54.0 % before and after this review, against 21.4 % for the baseline rims.

Label changes:

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| element `name` | L1–L5 | G1–G5 | Figure 1 labels; column 2 from line 55 names G1 to G5 |
| `diagramLabel` | absent, diagram drew 1–5 | G1–G5 | same, and the convention of the other Minolta files that use G |
| G2 `role`, header note, analysis headings and prose | L designators | G designators | follows the rename |

Checked and correct: `type` strings agree with the signs of R on all five elements. The roles agree with the patent's text and Table II. There is no aspheric surface and no `A` label. No `groups` or `doublets` belong here, since the patent names no multi-element group and nothing is cemented. The stop draws between G2 and G3. No `apd` tag belongs here, as the patent names no special glass. `focalLengthMm` is set on all five and agrees with the thick-element values from `probe.mjs`, and `name` and `diagramLabel` match; `?el=2` and `?el=3` read "Element 2 G2" and "Element 3 G3" with FL shown. The labels G3, G4 and G5 do not collide.

Movement: the lens is static and `focus.description` says so. The patent says nothing on focusing: no method, no moving group, no object distance. Its nearest wording, "at the time of the diaphragm being released" in column 5, concerns the stop. The printed state is the infinity state by its back focus, s' = 1.06 against a paraxial 1.0602 at f = 1. On the page, `focus=1` is pixel-identical to infinity, the slider's far end reads "Not modeled", and both `mv` overlays report no modeled movement.

After the edits the validator passes at the default limit, the image-circle check lists nothing, no surface clips the axial beam or blocks the chief ray, and the traced f-number stays within 3 % of f/2.8. Engine half-field 32.0° and FOPEN 2.8 are unchanged.
