# Source and numerical audit

- Whole US 4,114,992 Embodiment 1; probable family, not factory-exact.
- Original source ZIP, literal CSV, primary figure/table pixels and transport hashes are retained.
- Uniform 1.8× scaling hypothesis; fixed plane 168.8994mm.
- All caps/stop hypotheses frozen before native geometry or traces.
- Nominal 21 MTF fields converge without applied focus shift; raw pupil arrays, clipping and 22 already-aim-blocked raw engine failures retained.
- Predeclared stop and SD controls, including rejected geometry, retained separately; no selection by performance.
- Normal native scalar sheared-pupil estimates; no independent OPL/factory or continuous-frequency validation claim.
- Model SHA256 `9c84a7ea127679aa3e18d0080e14bae1b0f7baad43867f2a5e581a004c522c1f`.
- Integration and rebuild records stayed with the source package; they are not part of the repo (closed 2026-11-03).

## 2026-11-03 — Deployment validation and cleanup

The independent validation re-read the Embodiment 1 table (patent page 6, column 3) and its claim 1 repeat from the scanned US PDF: 10 radii, 9 thicknesses plus fB, 5 nd/νd pairs and Σd = 51.120. There are no aspheres and no variable gaps. Every file value is the patent value ×1.8, including the d8 split (27.424638 + 24.319962 = 51.7446 mm); no mismatch was found. All 16 conditions hold for Embodiment 1. Embodiments 2–4 each reproduce their own printed f and fB (41.534/41.535, 42.485/42.489, 42.430/42.427 at f = 100).

Patent f = 100, fB = 42.713 and Σd + fB = 93.833 scale to 180 mm, 76.883 mm and 168.899 mm; the model gives EFL 180.0034 mm, paraxial BFD 76.8828 mm, f/2.8 and a 6.9° half-field. Real-ray LSA of −0.051/−0.095/−0.100/−0.071 mm at pupil 1/0.85/0.7/0.5 matches Fig. 2A in shape and size. Fig. 2C reads about −0.1 % distortion at 6.9° against the model's +0.07 %; for Embodiment 4 both Fig. 5C and the model (+0.33 %) are clearly positive, so the Embodiment 1 difference is plot-level. The stop at 0.53 of d8 matches a measurement of Fig. 1 (265 of 500 px), and the rim ratios match the Fig. 1 outlines.

Maker comparison: MIR's reproduction of Olympus specifications gives 5 elements / 5 groups, helicoid focusing to 2.0 m, f/2.8–f/32, a 72 mm filter, 700 g and a 14° angle of view, and dates the lens probably 1981–82; Kamerastore gives 1978. No ED element is listed. The MT-1828 service-manual preview returned HTTP 403 on re-check and the MIR section image was not viewed. All four embodiments share Fig. 1 and the 5/5 layout, so none fits the product better than Embodiment 1. No other corpus file cites US 4,114,992; OlympusZuikoAutoT180mmf2 models JP H05-042643 B2 (10 elements / 8 groups), a different lens.

Fields changed in this pass. Coordinator: `name` from "OLYMPUS OM-SYSTEM ZUIKO MC AUTO-T 180mm f/2.8" to "OLYMPUS ZUIKO AUTO-T 180mm f/2.8", and the five `glass` labels to the OHARA catalog equivalents S-BAH11, S-BSM15, S-BSM14, S-TIH11 and S-TIH14. Data step: `fStops` and `maxFNumber` extended to f/32; `closeFocusM` from the 1e15 placeholder to 2.0; surface 10's `d` moved into a unit-focus `gaps` entry "10" (BF 76.8834 → 96.831 mm, a derived paraxial solve giving 2000.03 mm object to image, magnification −0.1108 and the same 0.0006 mm defocus as at infinity); `focus.description`. No `groups`, since the patent names only single-element lens components. Wording step: header comment, `subtitle`, `specs`, the five element roles and `indexReferenceNote` texts; in the analysis, the lens name, glass names, focus section, process vocabulary and run-together text, the verification section (now "Model Scope and Limitations"), the cemented-element sentences and text copied from the 200 mm and 100 mm files were rewritten or removed, and MIR and Kamerastore were added as sources.

Before and after the wording step, `built.mjs` and `probe.mjs` output is identical. The surface audit reports OK, the aperture audit is within 3 %, clearance at Y = 21.63 mm shows no axial clip or blocked chief ray at either focus state, and corner light at 6.9° is 73.4 %.

Open: the production prescription, glass and clear apertures are unpublished, and which embodiment, if any, entered production is undetermined. The −0.13 mm photopic best-focus shift was not reproduced independently. `vig.mjs` fails with a module-instance error when run from the worktree and works from the main checkout (closed 2026-11-04: it runs in the worktree with `--preserve-symlinks`). Page rendering is assigned to the coordinator (closed 2026-11-04: the page was rendered at infinity and at 2.0 m in the second review below).

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: `patents/US4114992.pdf`, page 2 (Sheet 1 of 3), Fig. 1, a 1-bit scan at its native 72 ppi (2320 × 3408 px), axis vertical with the object at the bottom. The front-page drawing (page 1) repeats the same section at a smaller scale and served as a second check. Fig. 1 is common to all four embodiments; its drawn spacings fit Embodiment 1 better than 2–4 (d5 and d7 in particular).

Scale: the r1 and r10 vertex strokes lie 872 px apart for 92.016 mm, 9.477 px/mm; the r1–r6 span (222.5 px for 23.412 mm, 9.50) and the r6–r10 span (649.5 px for 68.604 mm, 9.47) agree. The drawing opens d4 to about 10 px for its 0.10 mm and places r8 about 8 px toward the image. The scanned axis drifts 4 px across the figure (0.14°), so each rim is half the full left-to-right width. Radially, the stop ticks end 156.5 px (right) and about 167 px (left, under the drawn marginal ray) from the axis, a mean of 17.1 mm against the engine's 17.16 mm stop radius, so the figure is taken as isotropic. Arc fits do not give a consistent radial scale (8.7 px/mm on r1, 10.0 on r8, 9.7 on r5) because the drawn radii are not the table's. The stop tick sits at (2299 − 2042)/(2299 − 1813) = 0.529 of the drawn d8, which confirms the 0.53 placement.

Rim readings, stroke centre lines, in px and in mm at 9.477 px/mm, with the ratio to L1 and to the stored value:

| Element | Faces  | Fig. 1 px | Fig. 1 mm | Ratio to L1 | Stored sd | Figure / stored |
| ------- | ------ | --------: | --------: | ----------: | --------: | --------------: |
| L1      | 1, 2   |     322.5 |      34.0 |       1.000 |      35.4 |           0.961 |
| L2      | 3, 4   |     300.5 |      31.7 |       0.932 |      33.1 |           0.958 |
| L3      | 5, 6   |     277.8 |      29.3 |       0.861 |      30.7 |           0.955 |
| L4      | 7, 8   |     235.5 |      24.9 |       0.730 |      25.8 |           0.963 |
| L5      | 9, 10  |     149.8 |      15.8 |       0.464 |      16.6 |           0.952 |

The earlier ratios (1.00/0.94/0.86/0.74/0.47) are confirmed to within 3 px. Every element reads 0.95–0.96 of its stored rim, so the shape is right and only the absolute scale differs by about 4 %, inside measurement noise. All ten `sd` values are retained: Fig. 1 draws L1 with a pointed rim, which the stored 35.4 mm gives (0.16 mm edge) and 34.0 mm would not (0.86 mm, about 8 px). The drawn edges of L2 (about 2.4 mm), L3 (about 7.5 mm including its chamfers), L4 and L5 (about 4.4 mm) match the model's edge thicknesses at the stored rims. A uniform 5 % reduction would lower corner light at 6.9° from 73.4 % to 63.9 %, which the vignetting rule does not allow.

The one change is a flat land on r8. Fig. 1 ends L4's concave rear face 190 px from the axis on both sides, with a stroke square to the axis out to the 235.5 px edge: q = 0.807, ±0.008 for one pixel. The front-page drawing gives 117/145 px, also 0.807. At q × 25.8 mm the cut radius would be 20.82 mm, but the wide-open beams reach 20.8126 mm on r8 (infinity, 2.22°), and the inferred-cut margin of 0.063 mm puts the cut at 20.875 mm or more. A depth of 7.21 mm clears that by 0.001 mm. Surface 8 takes `rimCutDepthMm` 7.22 (cut radius 20.889 mm, q = 0.810, inside the figure's range), which leaves 0.014 mm. Its `sd` stays 25.8 mm. The land is 4.9 mm long and 27.4 mm ahead of the stop plane.

| Surface | sd before | sd after | rimCutDepthMm | Evidence |
| ------- | --------: | -------: | ------------- | -------- |
| 8       |      25.8 |     25.8 | none → 7.22   | Fig. 1 and front-page land at q = 0.807; cut moved out to the beam rule |
| others  | unchanged | unchanged | —            | Fig. 1 ratios agree within noise |

Results on the final file: the surface validator reports no errors and the dense rim-cut probe finds no ray within the cut's margin (refined reach 20.7838 mm, none clipped). The image-circle audit finds no undersized surface, and the traced corner chief ray reaches 21.65 mm at 6.9° unclipped. At Y = 21.63 mm (ω 6.85° at infinity, 5.78° at 2.0 m) no surface clips the axial beam or blocks the chief ray. The engine gives EFL 180.003 mm, half-field 6.9°, f/2.800 and a 17.16 mm stop, as before. Corner light wide open is 73.4 % at 6.9° at infinity and 81.4 % at 5.8° at 2.0 m, unchanged at every field; the rim cost against the starting file is 0.0 points. The 2.0 m back focus was re-solved paraxially: 96.8308 mm with the object 1811.15 mm ahead of r1, 2000.0 mm object to image, magnification −0.1108, as stored. On the page at infinity and at 2.0 m, L4 draws its land where Fig. 1 does, and the other outlines are unchanged. No maker drawing was viewed; the validation section above records Olympus's 5 elements in 5 groups, all singlets, with no ED element listed.

Limitations: the absolute radial scale rests on the stop ticks and the vertex spacing, good to about 3 %. Fig. 1's small corner chamfers on L3 are not modeled. The drawing is shared by all four embodiments and opens d4 wider than printed.

## 2026-11-04 — Second review: diagram, labels and movement

Compared: the local page at infinity, at `focus=1`, with the `mv=focus` overlay and with the inspector open on L1, L4 and L5, against Fig. 1 on page 2 of `patents/US4114992.pdf` at its native 72 ppi, turned object-left, with the front-page drawing as a second copy. The Embodiment 1 table (col. 3) and claim 1 were re-read: every radius, spacing, index and Abbe number in the file is the printed value ×1.8.

Figure, re-measured at stroke centres with the axis at column 1247 and 9.477 px/mm from the r1–r10 vertex span. The L4 edge reads 234 px on the right and 235.5 px on the left (24.8 mm), the L5 edge 149.3 px (15.8 mm), within a pixel of the figure pass, so its 0.95–0.96 ratio of drawn to stored rim stands for all five elements. The stop tick sits at 256.5 of 485.5 px, 0.528 of d8. Drawn and modeled edge thicknesses agree: L2 2.4 / 2.13 mm, L3 about 7.5 with its chamfers / 7.12 mm, L4 12.1 / 11.89 mm, L5 4.7 / 4.66 mm, and L1 is pointed in both.

The r8 land. The curved face meets the land at 198 px (right) and 200.5 px (left), 0.846 and 0.851 of the drawn edge; the front-page copy gives 119.5 of 145 px (top, under the drawn ray) and 124.5 of 147.5 px (bottom), 0.82 and 0.84. The figure pass's 0.807 is the inner end of the ink run, where the thick r8 stroke merges into the land. In millimetres the drawn corner sits 20.9–21.2 mm from the axis and 65.5 px (6.9 mm) behind the r8 vertex; the model's cut is at 20.89 mm and 7.22 mm deep, so it matches the drawn corner. Its land runs 4.9 mm against 3.8 mm drawn only because the 25.8 mm rim carries the same 4 % excess as every rim. A cut at 0.85 of 25.8 mm (21.9 mm, depth 8.05 mm) differs by under 5 % in radius, inside the reading noise, and would thicken the L4 edge to 12.72 mm against 12.1 mm drawn, so the cut stays.

Silhouette on the page: heights fall L1 > L2 > L3 > L4 > L5 as drawn; L1 is pointed; L2, L3 and L5 end square with both faces at one height; L4 is a squared block with r7 running to the edge and the land on r8. The pair of small chamfers on L3's edge is the only drawn feature not modeled.

| Face | Kind | Figure reading | Baseline | Final | Cost, points | Verdict |
| ---- | ---- | -------------- | -------- | ----- | -----------: | ------- |
| 8 | land, `rimCutDepthMm` | corner at 20.9–21.2 mm, 6.9 mm deep | 25.8, no land | 25.8, depth 7.22 (cut 20.89 mm) | 0.0 at infinity, 0.0 at 2.0 m | Keep: costs no light, drawn |
| 1–7, 9, 10 | no cut | ratios 0.95–0.96 of stored | as final | 35.4 / 33.1 / 30.7 / 25.8 / 16.6 | 0.0 | Unchanged |

Light. `rimcost.mjs` against the baseline gives 100.0 / 100.0 / 99.9 / 96.6 / 89.6 / 81.8 / 73.4 % at 0 / 1.1 / 2.3 / 3.4 / 4.6 / 5.7 / 6.9° for baseline, file and trial alike; the worst loss is 0.0 points. `vig.mjs` prints the same curve with and without the land. At the near state an independent finite-conjugate trace from an object 1811.15 mm ahead of r1 (2.0 m object to image, back focus 96.831 mm) passes 80.9 % at the 21.63 mm image corner (object height 195.2 mm) with or without the land, and the transmitted rays reach at most 20.80 mm on r8; at infinity the same trace gives 73.4 % at 6.9°, as the engine does. r1 and r9 limit the corner at both states. The engine gives EFL 180.003 mm, half-field 6.9°, f/2.800 and a 17.16 mm stop, unchanged; the surface validator reports no errors, the image-circle audit no undersized surface and the field-coverage audit at least 99 %.

Labels and tags. Five singlets, no cemented component and no group brackets. The patent names only the first to fifth lens components and Fig. 1 labels surfaces, so L1–L5 are sequential. Every type agrees with the signs of R (all ten radii positive, L4 negative), and the roles agree with conditions (1), (2)–(5), (6)–(7), (8)–(9) and (16) in col. 2. There are no aspheres and no `apd` tags: the patent names no glass and the validation section records no ED element. The inspector shows type, index, Abbe number, focal length (−56.97 mm for L4), glass line and role for each element opened.

Movement. Unit focus: keyframe 0 is the printed infinity back focus (76.8834 mm) and keyframe 1 is 96.831 mm. A separate paraxial solve gives 96.8308 mm with the object 1811.15 mm ahead of r1, 2000.00 mm object to image, a 19.948 mm extension and magnification −0.1108. The overlay moves all five elements 19.95 mm toward the object, and the slider runs from ∞ to 2.00 m.

Plots, Figs. 2A–2C on page 3, read against each plot's own thin axis line because the scan is turned about 0.5–0.7°, at 37.5–38.3 px per 0.001f. Spherical aberration in d: −0.11 mm at the 0.75 zone and −0.035 mm at full aperture, against the model's −0.102 and −0.051 mm. Paraxial foci from d: C +0.238 mm (model +0.236), F −0.165 mm (−0.194), g about 0 (+0.012). Marginal foci: C +0.061 (+0.076), F +0.045 (+0.075), g about +0.50 mm (+0.61). F sits about 6 px (0.03 mm) beyond the reading error at both ends; the F focus moves −0.37 mm per +0.001 in the F index of L1 and +0.29 mm for L4, so a 0.0001 difference in either covers it. All five glass labels match the printed νd within 0.06, so none is a proxy suspect. Fig. 2B at 6.9°: ΔS −0.05 mm and ΔM +0.065 mm against −0.031 and +0.059 mm. Fig. 2C at 6.9° reads 0.00 to +0.03 % once the tilt is taken out, against the model's +0.07 %; the −0.1 % in the validation section is the uncorrected reading.

Text: the header comment and the analysis now give the drawn land position (about 21 mm, 0.85 of the drawn edge) and the analysis adds the colour comparison. No numeric field changed.

Limitations: the F-line and g-line offsets rest on catalog-equivalent glass and cannot be settled from nd and νd alone; the L3 chamfers are not drawn.
