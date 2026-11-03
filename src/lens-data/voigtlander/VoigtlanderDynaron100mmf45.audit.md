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
