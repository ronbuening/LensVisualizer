# Audit Log — Olympus M.Zuiko Digital ED 40-150mm f/4.0-5.6 R Related Patent Model

Patent: US 8,767,310 B2, Numeral Example 1-2.

## 2026-10-26 — Literal source, generation and inference boundaries

| Item                  | Before                                     | Retained / disposition                                               | Evidence                                                                                                                                      |
| --------------------- | ------------------------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Example label         | Second first-aspect example                | Numeral Example 1-2, as printed                                      | PDF page 36 heading; not a 2-x example.                                                                                                       |
| Optical table         | Unverified attribution                     | All R, d, nd and νd entries retained                                 | Original page 36; independent source-first transcription.                                                                                     |
| Generation            | R versus original MFT / older FT ambiguous | R and original MFT share performance; Four Thirds lens is separate   | Manufacturer FAQ 004734 and joint manual.                                                                                                     |
| Physical construction | Retail 13/10                               | 13 elements / 10 components; cover plate excluded                    | Fig. 3 and manufacturer section; cemented interfaces 2, 5, 13.                                                                                |
| Aperture              | Retail f/4–5.6                             | Literal f/4.08–5.91                                                  | Source Data Set 1, unchanged.                                                                                                                 |
| BF convention         | Possible physical/air confusion            | Physical d24, separate 4 mm plate and 0.8 mm trailing air            | Source BF = d24 + 4/1.51633 + 0.8.                                                                                                            |
| Rear G2 inferred rim  | Initial 7.8 mm, physically overlapping     | 7.3 mm at 0.1 mm authoring precision                                 | Fig. 3 estimate 7.6 ± 0.3 mm; independent default-bound 7.363815 mm. No printed radius changed.                                               |
| Intermediate controls | Three source infinity anchors only         | 65 zoom / 17 focus controls; inferred rows explicitly unpublished    | Source-relative scalar G4 compensator; native rows retained exactly.                                                                          |
| Finite source status  | Source 0.9 m plot, no spacing table        | Inferred travel, no finite conjugate certification                   | Fig. 7 and mechanism text, columns 17–20.                                                                                                     |
| Spectral legend       | Potential F/g conflation                   | Source d/g/C retained in prose                                       | Column 21 and Fig. 6/7; ordinary C-d-F is a separate simulation.                                                                              |
| Glass identities      | nd/νd only                                 | Compatible catalog representatives, suppliers unconfirmed            | Exact source values preserved; runtime catalog coordinate check.                                                                              |

No source numerical correction or unresolved prescription contradiction was identified. No source-erratum queue row is added merely for inferred controls, approximate rims, or factory-identification uncertainty. The analysis distinguishes residual image defocus from far-distance labels.

## 2026-10-31 — Deployment validation and fix pass

Source re-read from the PDF page 36 image: 24 surface rows (R, d, nd, νd), the stop position, the cover plate and 12 variable-gap values, 0 mismatches. There are no aspheric surfaces and no corrected source values. The printed stations stayed byte-identical through this pass.

Patent vs model: EFL 40.800 / 77.523 / 147.004 vs 40.800 / 77.523 / 147.005 mm; f-number 4.08 / 4.56 / 5.91 at every station by the engine's stop rule; BF 22.951 / 28.633 / 49.431 mm exact as d24 + 4/1.51633 + 0.8; half-field 15.395 / 7.915 / 4.165° vs chief-ray 15.40 / 7.92 / 4.16° at 10.82 mm. Physical total length is 101.747 / 130.620 / 161.249 mm (derived). The plate stays in `rearPlates`, traced and not drawn, with no double counting of BF. Iris radius from the current engine is 6.760 / 6.761 / 6.765 mm at WE / ST / TE, 6.745–6.793 mm across all 65 stations, for entrance-pupil diameters of 10.00 / 17.00 / 24.87 mm. All 65 stations are within 3% of the stated f-number on the aperture audit.

Close focus: an independent paraxial solve reproduces the G4 travel 1.395443 / 3.798493 / 6.380460 mm for a 900 mm object-to-image distance. It gives f-numbers 3.8575 / 3.8913 / 4.2830 against Fig. 7's 3.857 / 3.892 / 4.282, and 3.8813 / 3.9732 / 4.4874 if 0.9 m is measured from surface 1. Telephoto magnification is −0.1639 against the maker's 0.16×. On a finer grid, infinity defocus between stations peaks at 0.001837 mm, above the 0.001681 mm recorded earlier on a coarser grid; finite residual peaks at 0.002561 mm; the worst label error is reproduced at +6.509%.

Maker comparison: the OM SYSTEM section shows 13 elements in 10 groups, and its legend has only ED and HR, on the first element behind the stop and the rear of the G3 doublet. OM SYSTEM's specification lists 1 ED and 1 HR with no aspherical row, and the JP text reads "EDレンズ1枚、HRレンズ1枚など", so the "など" remains a small caveat. All-spherical is not a mismatch. The joint manual has no lens section; it gives only "10 groups, 13 lenses", 30°–8.2° and 0.9 m. Axial positions measured from the drawing fit Example 1-2 at 0.53 mm RMS over 21 surfaces (scale 3.598 px/mm), against 0.74 mm at best for Example 1-1, which also needs one G2 surface dropped. The drawn front G3 subgroup sits about 1.1 mm rearward of the print, so the overlay is close, not exact. Examples 2-1 to 2-4 are about 14–41 mm aspherical zooms. Example 1-2 is the best fit; identity remains unproven and the lens stays described as a related design.

Fields changed: `name`, `subtitle`, `specs`, `focus.description`, header comment, element `label` and new `role` text, `apd: "inferred"` with `apdNote` on L6, `glass` labels, `rearPlates[].source`, and `cemented` / `doublets` text D1–D3 to C1–C3 so they no longer collide with the gap labels. L8 (HR) carries no `apd`. All 13 elements and the plate resolved before this pass and resolve to the same rows after it. Each printed pair is within 0.01 in νd of its row; L2, L6, L7 and L9 differ by 0.005–0.006. L6 stores no `dPgF` because its catalog row already supplies P_g,F, matching the corpus form. The stale sentence about a US 7,450,319 B2 hold is gone: the repo's Four Thirds entry is modeled from US 2008/0062534 A1, the same family, and is a separate 12-element, 9-group lens.

The 62 interpolated zoom-station `label` strings are spaced (`Inferred 1/64` and so on). Nothing displays them.

## 2026-10-31 — Semi-diameter pass against the patent figure

Source: `patents/US8767310B2.pdf`, PDF page 4 (sheet 3 of 25), Fig. 3, headed "Example 1-2", panels (a) wide, (b) middle and (c) telephoto, read at the native 300 dpi raster. Example 1-1 is Fig. 2 on sheet 2, PDF page 3. `patents/US20130033621A1.pdf` was not used: it is a Sony application by Masaki Maruyama, not this family. The front page names the family's own publication, US 2014/0022647 A1.

Scale along the axis: all 24 surface crossings against the printed spacings give 12.318 px/mm on panel (a), 0.08 mm RMS, and 12.325 px/mm on panel (c), 0.09 mm RMS. The first-to-last lens surface span gives 12.33 / 12.33 / 12.32 px/mm on panels (a) / (b) / (c). Scale across the axis: the drawn image line reaches 133.5 px either side of the axis on all three panels, which is 12.34 px/mm at the printed 10.82 mm. The iris arrow tips on panels (a) and (c) sit 81.5–82.5 px from the axis, 12.1–12.2 px/mm at the 6.76 mm stop radius. Rim end points on 13 strongly curved surfaces, read against their printed radii, average 12.3 px/mm with a scatter of ±0.55. Whole-arc fits on the 11 deepest arcs read lower, at a mean of 11.6 px/mm and a range of 10.4–12.5 px/mm, because the drawn sags run slightly deep. The straight marks are the better evidence, so rims are read at 12.33 px/mm with no correction, and the figure has no stretch like the 10% found on another Olympus sheet. If the arc fits were right instead, every rim would read up to about 6% low together; the ratios between elements, which drive the one change below, would not move. Printed-radius arcs drawn over the figure at this scale stay within about 3 px of the drawn curves.

Rims are read to the outer edge of the drawn line at 12.33 px/mm, on the lower side of panel (a) and both sides of panel (c), which has no leader lines. Native px are distances from the axis.

| Element (surfaces) | Stored sd    | Fig. 3 px | Fig. 3 mm | Final sd     | Evidence                                                                                 |
| ------------------ | ------------ | --------- | --------- | ------------ | ---------------------------------------------------------------------------------------- |
| L1 (1, 2)          | 16.5         | 201.5     | 16.35     | 16.5         | Within noise.                                                                            |
| L2 (2, 3)          | 16.5         | 199.5     | 16.2      | 16.5         | Within noise.                                                                            |
| L3 (4, 5)          | 8.9          | 108.5     | 8.8       | 8.9          | Within noise; square land retained.                                                      |
| L4 (5, 6)          | 8.9          | 99.5      | 8.05      | 8.9, **8.0** | Figure, S6 −10%. S5 stays: see below.                                                    |
| L5 (7, 8)          | 7.3          | 94.5      | 7.66      | 7.3          | Land −4.7%, within noise and order unchanged; curve ends at 86–88 px, 7.0–7.15 mm.       |
| L6 (10, 11)        | 7.8          | 96.5      | 7.8       | 7.8          | Agrees.                                                                                  |
| L7 (12, 13)        | 7.8          | 97        | 7.87      | 7.8          | Agrees.                                                                                  |
| L8 (13, 14)        | 7.8          | 95        | 7.7       | 7.8          | Within noise.                                                                            |
| L9 (15, 16)        | 7.8          | 93.5      | 7.6       | 7.8          | −2.9%, within noise; no order reversal against L8 or L10.                                |
| L10 (17, 18)       | 8.0          | 99        | 8.03      | 8.0          | Agrees.                                                                                  |
| L11 (19, 20)       | 8.2          | 101       | 8.2       | 8.2          | Agrees.                                                                                  |
| L12 (21, 22)       | 7.8          | 96        | 7.8       | 7.8          | Agrees.                                                                                  |
| L13 (23, 24)       | 7.2          | 88.5      | 7.18      | 7.2          | Agrees.                                                                                  |

L3 and L4 cannot both be drawn. Fig. 3 draws L3 square at 8.8 mm with a step down at the S5 rim to L4's square 8.0 mm land, and one cemented S5 radius cannot show that step. Lowering S5 to 8.0 mm would square L4 but would put a long bevel on L3. It leaves the corner values at the three printed positions unchanged, so the choice is about shape alone. S5 keeps L3's height, as the M.Zuiko 12-200 does for its L1/L2 step, and L4 runs straight from the S5 rim down to the S6 rim.

L5's land is drawn 0.36 mm above its stored rim, but its curved front stops at 7.0–7.15 mm, where it merges with S6, and a stroke square to the axis continues outward. The drawn curve therefore supports the stored S7 value. Raising S8 alone to 7.7 mm passed the validator and left the transmission curves unchanged, but it slanted the land in the render, which the figure does not show. Raising both faces to 7.7 mm needs `checks.gapSagFrac` 0.99 and lifts the wide-end corner by 3.2 points by opening S7 past the drawn curve, so neither was adopted.

`rimExtensionSd: 7.7` on S7, with S8 at 7.7 mm and `checks.gapSagFrac: 0.94`, draws L5's flange as printed. The set passes the validator and leaves the corner values at all three printed positions unchanged.

Clearance, final rims: S6 at 8.0 mm sits above the on-axis marginal ray (6.37 mm), the corner chief ray (3.72 mm) and the unvignetted full-field bundle (7.83 mm), the maxima over all 65 stations. There is no `CLIPS-AXIAL` or `BLOCKS-CHIEF` flag at infinity or at closest focus. All 65 stations are within 3% of the stated f-number with no rim limiter. The validator reports no errors, the image-circle check finds nothing undersized, and traced corner coverage is 100% at all 65 stations. Longitudinal spherical aberration stays within 0.12 mm at all 65 stations, which gives no sign of a misprint, and no rim was raised.

| Position | Engine half-field | f-number | Corner transmission, before → after | Corner relative illumination, before → after |
| -------- | ----------------- | -------- | ----------------------------------- | -------------------------------------------- |
| WE       | 18.39°            | 4.08     | 70.4% → 70.4%                       | 67.4% → 67.4%                                |
| ST       | 10.52°            | 4.56     | 66.3% → 66.3%                       | 64.1% → 64.1%                                |
| TE       | 7.16°             | 5.91     | 64.4% → 64.4%                       | 62.7% → 62.7%                                |

These come from the engine's full-pupil lattice, and the engine half-field and f-number are also unchanged. The analysis previously called the 70 / 66 / 64% transmission figures relative illumination; it now quotes both.

Maker section (the OM SYSTEM drawing, read at the 3.598 px/mm recorded above, assumed to hold across the axis): 13 elements in 10 groups, ED on element 6 and HR on element 8, no aspherical mark. Count and grouping agree with Fig. 3. Its rims read 17.4 / 17.1 / 9.9 / 8.2 / 9.3 mm for L1–L5, 9.3 / 8.2 / 9.0 mm for L6–L8, 8.75 / 8.75 / 9.3 mm for L9–L11 and 8.75 / 8.75 mm for L12–L13, which is 2–21% above Fig. 3. The two inset cemented partners, L4 and L7, agree best. The drawings disagree on order in three places: the maker's L5 stands 1.1 mm proud of L4 where Fig. 3 has it 0.4 mm below, its L7 sits 0.8 mm inside L8 where Fig. 3 has them about level, and its L13 matches L12 where Fig. 3 has it 0.6 mm lower. Fig. 3 of the modeled example governs.

Live check at WE, ST and TE, each at infinity and closest focus: the local page rendered all six states, and the silhouette follows Fig. 3 apart from the L3–L4 step and the L5 land described above. Limitations: the rims remain inferred, and Fig. 3 shows the patent example, not a confirmed production lens.

## 2026-10-31 — Second review: diagram, labels and movement

Compared the local page at WE, ST and TE, each at infinity and closest focus, with Fig. 3 on PDF page 4 of `patents/US8767310B2.pdf` at the native 300 dpi raster, its text on PDF pages 35–36, and Figs. 6 and 7 on PDF pages 7 and 8. The maker's section (the OM SYSTEM drawing) was read as the second check. Only US 8,767,310 B2 was used.

| Field                       | Before                             | After                                                | Evidence                                                                                                                                                  |
| --------------------------- | ---------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sd` S15, S16 (L9)          | 7.8 / 7.8                          | 7.6 / 7.6                                            | Fig. 3 line centres 92.95 px on panels (a), (b), (c), 7.54 mm; outer edge 7.6 mm. Both drawings put L9 below L8 and L10; the render had it level with L8. |
| `groups`                    | G3 (+), STO–20                     | G3f (+), STO–14; G3b (+), 15–20                      | Fig. 3 brackets and the text's "front unit G3f" and "rear unit G3b", PDF page 35.                                                                         |
| `role` L6, L7, L9, L10, L11 | "G3 front / rear subgroup"         | Names G3f and G3b                                    | Same; the units are unchanged.                                                                                                                            |
| `focus.description`         | "the other three groups"           | "G1, G2 and G3"                                      | Five bracket labels now show, and the patent's count of four groups stands.                                                                               |
| `.analysis.md`              | G3 row and L7, L9, L10, L11 prose  | Names the units and their elements                   | Keeps the prose in step with the labels.                                                                                                                  |

Scale in both directions: 23 surface crossings fit 12.319 px/mm on panel (a) at 0.075 mm RMS and 12.326 px/mm on panel (c) at 0.092 mm RMS. Across the axis the drawn image line is 267 px long on all three panels, which is 12.34 px/mm at the printed 10.82 mm. Curvature fits with a free vertex on 11 deep arcs give a mean of 11.95 px/mm on each of panels (a) and (c), but they range from 10.9 to 13.1 and do not lean one way (S18 reads 10.9, S16 reads 13.0), so that is arc-by-arc drawing scatter and not a stretch. The straight marks govern, and the figure is taken as isotropic. The L9 change rests on ratios to its neighbours, which do not depend on the scale.

Rims, re-measured as line centres averaged over panels (a), (b) and (c), at 12.33 px/mm:

| Element      | L1    | L2    | L3   | L4   | L5   | L6   | L7   | L8   | L9   | L10  | L11  | L12  | L13  |
| ------------ | ----- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Reading, mm  | 16.3  | 16.1  | 8.72 | 7.97 | 7.59 | 7.75 | 7.82 | 7.66 | 7.54 | 7.97 | 8.14 | 7.74 | 7.14 |
| Stored, mm   | 16.5  | 16.5  | 8.9  | 8.0  | 7.7  | 7.8  | 7.8  | 7.8  | 7.6  | 8.0  | 8.2  | 7.8  | 7.2  |

The stored rims follow the outer edge of the stroke, so they sit between 0.3% below and 2.4% above the line centres. L9 was the one outlier, at 3.4% above, and it sits 0.8% above now. The figure gives L9/L10 0.946 and L9/L11 0.926, against 0.95 and 0.927 now and 0.975 and 0.951 before. On the maker's drawing the same four rims measure 32.5 / 31.5 / 32.5 / 33.5 px for L8–L11, which is the same order; the 8.75 mm recorded above for L10 reads about 9.0 mm here. S15 and S16 stay above their floors: on-axis marginal ray 6.17 mm, corner chief ray 3.72 mm.

Declined, all within noise: L1 stands about 0.2 mm above L2 and L7 about 0.15 mm above L8 in Fig. 3, and both pairs are cemented, so either step would put a bevel on an element drawn square. L2's 0.4 mm excess is the largest gap to a reading, at 2.4%; L1 and L2 share S2, G1's height against L3 matches the figure (1.85 against 1.87), and S1 sets the engine half-field at the long end. The L3/L4 step stays open as the first pass left it: Fig. 3 ends S5 at about 8.0 mm, with L3's rear wall rising from there to 8.8 mm, and `rimExtensionSd` is refused on a cemented interface. L5's land and `gapSagFrac` 0.94 are unchanged and agree with this reading.

Effect of the L9 change, wide open at infinity. The figures come from the engine's full-pupil lattice:

| Position | Corner transmission, before → after | Corner relative illumination, before → after | Engine half-field, before → after | f-number, before → after |
| -------- | ----------------------------------- | -------------------------------------------- | --------------------------------- | ------------------------ |
| WE       | 70.4% → 70.4%                       | 67.4% → 67.4%                                | 18.39° → 18.39°                   | 4.08 → 4.08              |
| ST       | 66.3% → 66.3%                       | 64.1% → 64.1%                                | 10.52° → 10.52°                   | 4.56 → 4.56              |
| TE       | 64.4% → 64.4%                       | 62.7% → 62.7%                                | 7.16° → 7.16°                     | 5.91 → 5.91              |

Six interpolated zoom positions are also unchanged at the corner. L9 starts to limit the beam only below about 7.5 mm. The validator reports no errors, `clearap.mjs` shows no `CLIPS-AXIAL` or `BLOCKS-CHIEF`, the image-circle check finds nothing undersized, traced corner coverage is 100% and all 65 stations stay within 3% of the stated f-number with no rim limiter.

Zoom, printed infinity rows, as distance of each group's first vertex from the image plane in mm. Positive travel is objectward:

| Group | WE      | ST      | TE      | WE→ST   | ST→TE   | WE→TE   | Patent, PDF pages 29 and 35–36                          | Model                     |
| ----- | ------- | ------- | ------- | ------- | ------- | ------- | ------------------------------------------------------- | ------------------------- |
| G1    | 101.747 | 130.620 | 161.249 | +28.873 | +30.629 | +59.502 | To the object side while d3 grows                       | Monotonic                 |
| G2    | 93.347  | 89.780  | 99.366  | −3.567  | +9.586  | +6.019  | Imageward, then objectward, on a concave orbit          | One turn, at ST           |
| G3    | 70.314  | 76.161  | 90.086  | +5.847  | +13.925 | +19.772 | To the object side; d20 first grows, then narrows       | Monotonic; d20 turns once |
| G4    | 31.993  | 37.675  | 58.473  | +5.682  | +20.798 | +26.480 | To the object side                                      | Monotonic                 |

The 65 stations ascend from 40.8 to 147.004 mm, with the printed rows exact at indices 0, 32 and 64. `turns.mjs` reports only the two turning points the printed rows require: G2 at ST, and d20 at station 22 (62.6 mm, 9.570 mm), where the printed rows need one maximum somewhere. The interpolation adds no reversal.

Focus: the first column is infinity at every station and the last is the closest state. G4 alone moves, toward the image, as the text states, by 1.395 / 3.798 / 6.380 mm at WE / ST / TE. d3 and d8 do not vary with focus, d20 rises and d24 falls at every step, and d20 + d24 stays constant to machine precision. The slider's near end reads 90 cm. The `mv=zoom` and `mv=focus` overlays, including the tele end, show these directions; the overlay now counts five bracket rows, with G3f and G3b travelling together.

Labels and tags checked and found correct: the patent prints no element designations, so sequential L1–L13 stand, with `name` and `diagramLabel` equal; the patent uses G for groups, so nothing clashes. All 13 `type` strings agree with the signs of R, and all 13 stored focal lengths match an independent thick-lens calculation to the last digit. C1, C2 and C3 cover surfaces 1–3, 4–6 and 12–14, the three cemented interfaces 2, 5 and 13. There are no aspheric surfaces and no `A` suffix. The stop is surface 9, 1.0 mm before surface 10, between L5 and L6. G3f and G3b are both positive: Condition (3) prints 0.95 on PDF page 37, and the calculated ratio is 37.235 / 39.07 = 0.953; Condition (4) prints 0.44 against 12.654 / 28.72 = 0.441, which confirms the split at d14. The patent text says nothing about anomalous dispersion or a named glass, so no `apd: "patent"` belongs here. The maker's drawing marks L6 as ED and L8 as HR, with no aspherical mark; L6 keeps `apd: "inferred"`, L8 correctly has none because HR is an index mark, and the `specs` line agrees. Inspectors for L3, L4, L6, L8, L9, L11 and L13 read true. Front-page inventors, assignee, filing date and parent application agree with the file.

Aberrations against Fig. 6, from an independent exact trace of the printed table, with the app's own tabs agreeing where shown. Distortion at 10.82 mm is −3.70 / +0.39 / +1.08% at WE / ST / TE, and the plots read about −3.8 / +0.3 / +0.9%; the app shows −3.70% at WE. At TE, meridional and sagittal focus are −0.280 and −0.156 mm against the plot's −0.285 and −0.155 mm, and the app prints T −0.28 / S −0.16 mm. The d-line spherical aberration curves agree in shape and size at all three positions: at WE it reads −0.110 mm at the 70% zone and −0.044 mm at the rim, and at ST it crosses the axis at the rim, +0.006 mm, as drawn. Plot values are read by eye from the 300 dpi sheet. Column 21 calls the meridional curve solid, but the plot's own legend labels the solid curve ΔS and the dashed one ΔM, and the trace agrees with the legend. All 13 elements and the plate resolve to catalog rows with P_g,F, so no element needs further identification; the patent prints no line indices beyond nd and νd.

Group focal lengths calculated from the table are +127.84 / −28.10 / +28.71 / −38.14 mm against the printed +127.83 / −28.11 / +28.72 / −38.15 mm. The differences reach 0.015 mm, too small to suggest a misprint, and the system focal lengths agree to within 0.001 mm.

Live page after the edits, at WE, ST and TE, each at infinity and closest focus: L9 now stands below L8 and L10 as both drawings show, G3f and G3b label their elements without colliding with G2 or G4, and nothing else moved. The final model outline is overlaid on panel (c) in the review scratch folder.

Limitations: the L3/L4 step cannot be drawn; L4 keeps a slanted upper edge from S5 at 8.9 mm to S6 at 8.0 mm until a cemented land exists. Rims remain inferred from the figure.

## 2026-11-03 — Zoom/focus station thinning

Removed derived zoom stations and focus keyframes that the solves did not need; no row was re-solved and no printed value changed. Kept rows are the existing rows, selected so the bilinear blend between them stays within 0.5 of the Rayleigh depth (±2λN², λ = 587.56 nm, station wide-open N) of the earlier model at every earlier row and between rows.

- Zoom: every 2nd existing row (indices 0, 2, …, 64).
- Focus: kept keyframes [0, 2, 4, 6, 8, 10, 12, 14, 16] of 17, at focus coordinates [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1].
- Published zoom stations remapped 0 → 0, 32 → 16, 64 → 32; publishedFocus and conjugate indices remapped to the same rows.

| Quantity | Before | After |
|---|---|---|
| zoom stations × focus keyframes | 65 × 17 = 1105 | 33 × 9 = 297 |
| source-published states | 3 | 3 |
| worst infinity defocus against the solves, between rows | 0.0017 mm | 0.0065 mm |
| worst fixed-plane defocus at infinity | 0.0018 mm | 0.0066 mm |
| worst focal-length label residual | 0.0048 mm | 0.0193 mm |
| worst far-focus distance-label error | +6.5 % (300 m reads 319.5 m near 76.7 mm) | +33.7 % (300 m reads 401.2 m near 75.8 mm) |

Against the earlier model at the same slider position and object: added defocus ≤ 0.0102 mm (0.25 R), half-field ≤ 0.014°, stop radius ≤ 0.012 %, f-number ≤ 0.000 %, variable gaps ≤ 0.005 mm, axial diffraction MTF at 30 lp/mm +0.009 at the worst infinity point (wide open, authored plane). Kept station objects, kept gap values and every field outside the thinned arrays are unchanged; published-station EFL, f-number and half-fields are bit-identical; the validator reports no errors.

The far-focus label error is the infinity defocus expressed as a distance: near the 0.003 focus cutoff a few micrometres of image-side defocus move the in-focus distance by tens or hundreds of metres. Close-focus labels at kept keyframes are unchanged.

Text sync: focus.description: far-focus label error 6.5 % → 34 %; analysis: 17 → 9 focus positions, between-position defocus 0.002 / 0.003 mm → 0.007 / 0.011 mm, label error +6.5 % (320 m) → +34 % (400 m).
