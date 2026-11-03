# VOIGTLÄNDER DYNARON 100mm f/4.5 — qualified reconstruction audit

Pinned baseline9128e249e492fe49eb032df61aa0ffb60d8e1d15. Native geometry, inferred caps and stop hypotheses were frozen before tracing; source values and fixed infinity plane unchanged. See same-stem analysis for precise source differences and field qualification. Scientific receipts are evidence/native-geometry.json, native-pupils.json, dynaron-diffraction.json and analytic-failure-witnesses.json in the private reproducibility archive. Corpus/build/viewer outcomes belong to the final batch report; this scientific receipt does not predeclare those later gates. (Closed 2026-11-03: see the deployment validation below.)

No finite law, glass substitution, contrast-driven cap or focus adjustment. This is Grade B probable patent-family research, not a factory prescription or continuum-validated MTF measurement.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: the Example 1 table of US 2,730,017 (PDF page 3, 300 dpi render) was read cell by cell against the data file: 10 radii, 9 thicknesses and air spaces (a3 = 25.819 mm, split 14.20045 + 11.61855 mm at the stop), 6 nd, 6 νd, both cemented joints and p0′ = 37.203 mm. No mismatches; R5 = +75.934 (claim 11 rounds it to +75.9). The patent prints no aspheres, close-focus state, field angle or aberration plots.

First-order, patent vs model: f 100 vs 99.993 mm; 1:4.5 vs F/4.500; p0′ 37.203 vs paraxial 37.198 mm (+0.0046 mm, within the three-decimal rounding spread of about 0.004 mm; no single-digit slip fits better); L1 focal length 27.910 vs 27.910 mm; telephoto effect f/p0′ 2.69 vs 2.688; track 83.075 mm. Front member +70.39 mm, rear member −85.21 mm. Real-ray longitudinal spherical aberration −0.17 mm at full pupil.

Maker comparison: Voigtländer's German Prominent lens booklet (imprint 400 09-12 A/758 Oe; cameramanuals.org PDF) calls the Dynaron a six-lens tele-anastigmat with a field of about 25° (p. 3). Its section matches Example 1 element for element: cemented L1/L2, separate L3 meniscus, stop at about 0.56 of the diaphragm space, biconvex L4, cemented L5/L6 with a steep concave front. Rim ratios in that section (L3 about 0.94, L4 0.78, rear doublet 0.86 of L1) agree with the model's 0.92 / 0.79 / 0.86. Example 2 (1:4.7, six elements in five groups) does not fit. Wikipedia's Prominent article lists the Dynaron as six elements in four groups and cites this patent. No corpus file duplicates the patent or the lens.

Checks after both steps: surface validator OK; aperture audit within 3% with no rim clipping; real-ray clearance at 21.63 mm image height shows no axial clipping or chief-ray block; relative illumination 74.8% at 12°.

Fields changed in the data step: `focus.closeFocusM` 1e15 → 0.9 (start of the lens's green meter scale, booklet p. 6; an interim 1.0668 from a catalog figure was replaced); `focus.description` rewritten; `groups` added (FRONT (I) surfaces 1–5, REAR (II) 6–10); `doublets` D1 / D2 already matched the `cemented` tags. Glass labels were set beforehand to SK5, BASF8 ×2 and LF5 (nearest catalog rows) and E-BAF8 and SF4 (catalog equivalents). Fields changed in the wording step: header comment, `subtitle`, `catalog.specs` and element `role` strings; in the analysis, metadata spacing, identification and sources rewritten around the booklet, glass, focus, stop and scope sections rewritten, and process text, MTF and pupil-count tables and text about other lenses removed. R, d, nd, νd, sd and the stop are unchanged.

Open: the green meter scale is the depth-of-field scale to which the rangefinder distance is transferred, so its 0.9 m start stands in for a minimum-focus specification the booklet does not print.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: US 2,730,017, drawing sheet (PDF page 1), Fig. 1, the Example 1 section; native 72 ppi bilevel scan (2320 × 3408 px), axis vertical with the object at the bottom. The scan is skewed about 0.47° (the dash-dot axis drifts from x 771 to 784 px between rows 900 and 2500), so every reading is taken about the local axis. Fig. 2 is Example 2 and was not used.

Scale along the axis, from vertex crossings (line centres): R1 2263.5, R2 2140.5, R3 2110, R4 2096.5, R5 2054.5, stop tick 1699.5, R6 1430.5, R7 1359.5, R8 1257, R9 1216, R10 1146.5. R1 to R10 is 1117 px for 45.872 mm, 24.35 px per table millimetre; the diaphragm space gives 24.17 (624 px for 25.819 mm) and the rear member 24.05 (284 px for 11.809 mm). Only L3 is drawn thick (42 px for 1.185 mm). The stop tick sits at 0.57 of the diaphragm space; the model's 0.55 is unchanged.

Scale across the axis, from arc fits: R1 sags about 34 px at ±195 px, a fitted radius of 576 px against 591 px for the printed 24.288 mm at 24.35 px/mm; R8 sags about 13 px at ±100 px against 12 px predicted for 17.229 mm. A figure compressed across the axis to its 0.69 diameter ratio would show a 273 px radius on R1 and a 28 px sag on R8. Fig. 1 is therefore drawn to one scale in both directions, within about 3%, and its diameters are small, not compressed: L1 is 203.75 px (8.37 mm) against the 11.11 mm f/4.5 entrance-pupil radius, and the stop tick's inner ends are 124 px (5.09 mm) from the axis against the 7.52 mm f/4.5 stop. The figure is used for shapes within each member, as ratios q of a face's cap end to its element's edge (one native pixel at both ends moves q by about ±0.01), and never for absolute size.

Fig. 1 readings (half-widths, px, ratio to the L1 edge): L1/L2 edge 203.75 (1.00), drawn square; R3 flat to 193.5 (0.95, q 0.95), then a chamfer to the edge; L3 edge 178 (0.87), with R4 square and R5 chamfered from 155 px (q 0.87); L4 141 (0.69), square; L5/L6 edge 142 (0.70), square at R9 and R10, with R8's concave cap ending at 119 px (q 0.84) and a steep chamfer, about 60° to the axis, to the edge.

| Surface | Before | After | Fig. 1 | Booklet | f/4.5 marginal / corner chief | Basis |
|---|---:|---:|---|---|---|---|
| 1 | 12.1 | 12.1 | anchor | 1.00 | 11.11 / 6.22 | Front rim 8.9% above the entrance pupil; Fig. 1's L1/stop ratio (1.64) would give 12.4, within noise. |
| 2 | 12.1 | 12.1 | 1.00 | 1.00 | 10.88 / 5.27 | Square cemented pair in both drawings. |
| 3 | 11.1 | 11.5 | q 0.95 → 11.5 | 1.00 | 10.45 / 4.92 | Both drawings put L3 clearly below L2's rear face; the model had them level. Raised to the Fig. 1 cap end, the lesser of the two drawings. |
| 4 | 11.1 | 11.1 | 0.87 → 10.6 | 0.94 | 10.32 / 4.74 | Between the two drawings; within noise. |
| 5 | 11.1 | 10.3 | q 0.87 → 9.7 | no chamfer | 10.08 / 4.49 | Fig. 1's chamfer falls inside the f/4.5 marginal ray, so the floor governs; 10.2 costs 3.2 points at 6°, 10.3 is the smallest value within 3. |
| 6, 7 | 9.6 | 9.6 | 0.69 → 8.4 | 0.78 | 5.69 / 3.73, 5.37 / 4.19 | Kept; see below. |
| 8 | 10.4 | 8.7, `rimExtensionSd` 10.4 | q 0.84 → 8.7 | q 0.83 | 4.42 / 5.14 | Both drawings end L5's front cap short of the doublet edge; the land keeps the drawn square edge. |
| 9, 10 | 10.4 | 10.4 | 0.70 → 8.4 | 0.87 | 4.30 / 5.97, 4.15 / 6.54 | Kept; 8.4 would cut 12° illumination from 74.8% to 49.8%. |

L4 is kept at 9.6 mm. Fig. 1's 0.69 alone costs 3.2 points at 12°, and Fig. 1 draws L4 level with the doublet edge, which corner light holds at 10.4 mm; cutting L4 by itself would open an L4-to-doublet step (0.82) wider than either drawing shows (Fig. 1 0.99, booklet 0.90, model 0.92). The 3-point allowance is also mostly taken by R5. The figure's smaller rear member, about 0.70 of L1 against the model's 0.79 and 0.86, stays unmatched.

Booklet section (Voigtländer Prominent lens booklet p. 3, from the cameramanuals.org PDF page 4 at its native 400 ppi): it agrees with Example 1 element for element, six elements in four groups with cemented L1/L2 and L5/L6, and no aspheric or special glass is marked. Its half-widths are L1/L2 174.5 px, L3 164.5 (0.94), L4 136 (0.78), doublet 151.5 (0.87), with L5's front cap ending at 125.5 px (q 0.83) and a chamfer to the edge, as in Fig. 1. It draws no chamfer on L2 or L3. Its vertex spacings give 14.8–16.0 px/mm and its R1 and R8 sags roughly fit that scale, which would put its L1 at about 11.6 mm; it is used for order and proportion only.

Clearance and light after the change: the surface validator reports no errors; no surface clips the f/4.5 axial beam or blocks the 12° chief ray at 21.63 mm image height (R5 is 0.22 mm outside the marginal ray, R8 3.56 mm outside the chief ray); field coverage reaches 21.65 mm at 12.0°, unobstructed; the image-circle floor shows nothing undersized; the aperture audit is within 3% of f/4.5; the engine half-field (12.5°), f-number (4.5) and stop radius (7.52 mm) are unchanged. Geometric relative illumination, wide open at infinity, at 0 / 2 / 4 / 6 / 8 / 10 / 12°: 100 / 100 / 97.8 / 93.9 / 88.9 / 84.1 / 74.8% with the starting rims and 100 / 99.5 / 95.8 / 91.5 / 87.0 / 82.4 / 72.6% with the final ones, a largest loss of 2.4 points at 6° and 2.2 at 12°. Restoring one face at a time from the final set wins back 3.7 points at 6° for R5, 1.2 at 12° for R8 and nothing for R3. The model is static, so infinity is the only state.

The live page at infinity matches the figure's shapes: L2 now nearly square, L3 tapered toward its rear face, and L5's cap recessed inside a square doublet edge. An overlay of the model outline on Fig. 1 at the proved scale shows the model's R1 and R8 arcs on the drawn arcs and every element about 1.45 times the drawn width; with the transverse scale matched at L1 it shows the front member on the drawing and L4 and the doublet wider than drawn.

Open: Fig. 1 draws the rear member at about 0.70 of L1 and the R5 chamfer deeper than the f/4.5 beam allows; corner light and the axial ray keep both from the model. The patent prints no aberration fans, so no radius can be checked against ray-fan ends.
