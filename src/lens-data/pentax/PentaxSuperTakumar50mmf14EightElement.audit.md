# PENTAX SUPER-TAKUMAR 50mm f/1.4 (Eight-Element) — audit log

As received (package baseline 9128e249e492fe49eb032df61aa0ffb60d8e1d15): the inferred rims and the stop position were set from the patent figure and the surface geometry before any ray tracing; source values and the infinity image plane were unchanged. See the analysis for the source differences and field coverage. The package's evidence files were not added to the repository.

As received there was no focus motion, no catalog glass label and no rim change after tracing; rejected stop positions were kept in the package. Superseded by the 2026-11-03 section below (glass labels, rims and a derived focus state). The model is a patent example matched to the production lens by layout, not a factory prescription.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: the JP S40-28384 scan, read at 300 dpi. For Example 1, 14 radii, 8 thicknesses, 5 air spaces, the printed back focus and 8 nd/νd pairs all match the file at 0.5× scale. No mismatches. The patent's per-surface Seidel table (14 surfaces × 5 coefficients) is reproduced to four decimals. The sums are 0.1248/0.0671/0.0066/0.1264/0.3797 against 0.1247/0.0670/0.0066/0.1264/0.3797 printed. The table assumes the pupil at surface 1, so it does not fix the iris. As read, the claim inequalities F1,2 ≤ F/1.5 and F1,2,3 ≥ F/0.3 are not met by either example (F1,2 = 0.71F, F1,2,3 = 2.5–2.7F); this is probably a notation issue in the claims, and the prescription is unaffected.

First order, patent ×0.5 against the model: EFL 50.00 / 49.998 mm, BF 37.71 / 37.708 mm paraxial, F/1.4 / 1.4, half-field 23° / 23°. Distortion at 23° is −2.67%, against about −2.7% in Fig. 2. Zonal spherical aberration is about −0.07 mm, matching Fig. 5.

Maker comparison: the Product No. 358 service booklet lists L01–L08 and a "4th lens assembly (L04, L05, L06)". Its exploded illustration puts the iris between L03 and L04. Public sources give 8 elements / 6 groups, 0.45 m, 49 mm filter, M42, 1964; one database gives 8/7. Example 2 has the same layout, with L7 biconvex (r11 = +1020), and fits equally; nothing available separates the two. No maker optical diagram was found. No corpus file models this lens or cites JP S40-28384 or US 3,451,745.

Fields changed, data step:
- Glass labels: set by the coordinator to the HOYA catalog equivalents NBFD13, E-FD13, NBFD11 and BAFD7.
- Rims: S5 14.2 → 14.55, S8 12.8 → 14.03, S9 12.8 → 14.04, S10 12.8 → 15.35. L5's faces meet at 14.05 mm and the f/1.4 marginal ray needs 14.07 mm, so L5 limits the axial beam.
- Results: the aperture audit went from f/1.67 to f/1.43; on-axis transmission at f/1.4 from 72% to 96%; transmission at 23° from 33% to 40%.
- Focus: `closeFocusM` 1e15 → 0.45, with BF gap [37.71, 44.8472]. This is a derived unit-focus state (magnification −0.143×), not published.
- Annotations: `groups` G1–G6 added; `doublets` T1 (S7–S10) moved into spec order.

Fields changed, wording step: the header comment, `subtitle`, `specs` and element roles. The analysis was rewritten for metadata spacing, the identification evidence, the glass table, focus, aperture and stop, and model scope. Its MTF and pupil-count tables were removed because they described the old rims.

Open: none in the data. The choice of Example 1 over Example 2 cannot be settled from the available sources.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: the JP S40-28384 B scan, page 4, Fig. 1 (第1図), the publication's only section, read at its native 352 dpi. Fig. 1 is hand drawn and serves both examples; its vertex spacing follows Example 1 at ×0.5.

Scale: along the axis, r1 to the image line is 858 px for 79.56 mm, 10.78 px/mm. At that scale the drawn vertices of r2/r3, r5, r6, r7, r8, r9, r10/r11, r12/r13 and r14 fall within 2 px of the prescription; r4 is drawn 5 px forward. Across the axis, arc fits of r3, r6, r7 and r9 against their printed radii give 10.4–10.9 px/mm, mean 10.55, so the sheet is isotropic to about 2%. Rims were read at the line centre, top and bottom averaged; the drawn axis sits about 2 px above the centre of the elements.

Fig. 1 draws every element at 0.94–0.98 of the height the f/1.4 marginal ray reaches there (mean 0.96). At the sheet's own scale every drawn rim is therefore below the beam, and the beam, the axial marginal ray at f/1.4 from the real-ray trace, is the floor.

| Surface | Before (mm) | Fig. 1 (mm) | f/1.4 marginal ray (mm) | After (mm) | Basis |
|---|---:|---:|---:|---:|---|
| 1, 2 | 19.6, 19.6 | 17.3 | 17.86, 17.66 | 19.6, 19.6 | Kept: corner light (below) |
| 3 | 17.0 | 15.6 | 16.28 | 16.3 | Figure, raised to the beam |
| 4 | 17.0 | 15.05 | 15.33 | 15.4 | Figure, raised to the beam; the drawn rim steps down from r3 to r4 |
| 5 | 14.55 | 14.15 | 14.58 | 14.55 | Kept: set earlier today for the beam L5 passes |
| 6 | 14.2 | 11.8 | 12.40 | 12.7 | Figure; held over the iris radius (below) |
| 7 | 12.5 | 11.9 | 12.17 | 12.5 | Kept: inside the noise band, level with r6 as drawn |
| 8, 9 | 14.03, 14.04 | 13.3, 13.2 | 14.07, 14.06 | 14.03, 14.04 | Kept: L5's faces meet at 14.05 mm |
| 10 | 15.35 | 14.5 | 15.38 | 15.35 | Kept: set earlier today for the beam L5 passes |
| 11, 12 | 16.4, 16.4 | 14.8 | 15.62, 15.66 | 16.4, 16.4 | Kept: corner light, and L7 stays no smaller than L8 as drawn |
| 13, 14 | 16.4, 16.4 | 14.35 | 15.03, 14.90 | 16.4, 16.4 | Kept: corner light |

Corner light, against the starting rims at infinity: with every rim at the f/1.4 beam the worst loss is 13.7 points at 17.3°, and the 23° edge falls from 40.2% to 27.9%. Each element cut alone costs L1 7.8 points, L8 6.7, L7 2.4, L2 1.3 and L3's rear face 0. A greedy restore to within 2.9 points leaves L1 at 19.45, L8 at 16.0 and L7 at 15.85 mm: 1–3% trims, inside the noise band, and L7 would fall below L8 against the drawing, so all three keep their starting rims. The final set loses at most 1.3 points (8.6°: 84.8% against 86.1%); the 23° edge stays at 40.2% and the axis at 95.7%. At the derived 0.45 m state the worst loss is 1.1 points at 8.3° and the 22.2° edge stays at 44.2%.

L3's rear face: the beam needs 12.40 mm. At 12.7 mm the face still covers the f/1.4 iris radius at every clear iris position in the analysis's table (12.611 mm at 0.48 of the gap), so those face clearances stand; the rim ends 0.16 mm ahead of the iris plane. The starting 14.2 mm rim reached 2.06 mm behind the iris plane, outside the iris radius.

Clearance: the surface validator reports no errors. The real-ray trace flags only the four surfaces it flagged before (S5, S8, S9 and S10, at most 0.04 mm under the f/1.4 ray, where L5's knife edge already stops the beam), and the aperture audit keeps the lens within 3% of f/1.4. The image-circle check lists nothing, the 23° chief ray still reaches 20.66 mm, and the engine's focal length (49.998 mm), half-field (23°), f-number (1.4) and stop radius (12.577 mm) are unchanged. The page was checked at infinity and at 0.45 m.

Maker drawing: the Product No. 358 service booklet's exploded illustration (page 3; perspective, cut-away elements) gives the order L01 to L08, the L04/L05/L06 assembly and the diaphragm parts between L03 and L04. Measured across the axis line and taken relative to L01, its elements read L02 0.91, L03 0.84, L04 0.79, L05 0.77, L06 0.84 and L08 0.75 (L07 is cut by the page edge); Fig. 1 gives 0.90, 0.82, 0.77, 0.76, 0.84 and 0.83. The two agree except at L8, which the booklet draws smaller. The booklet marks no special glass or aspherical surface.

Open: L1, L7 and L8 stay 12–14% above the drawn heights and L2 is smaller relative to L1 than drawn (0.83 against 0.90), because L1 is held for corner light.

## 2026-11-04 — Second review: diagram, labels and movement

Compared: the local page at infinity, at 0.45 m, the focus-movement chart and the element inspector, against Fig. 1 of the JP S40-28384 B scan (page 4, native 352 dpi), Fig. 2 (page 5) and the claims; the Product No. 358 service booklet's exploded illustration (page 3) for order and markings. Rims were re-measured from the scan independently of the earlier pass.

Figure scale: the drawn vertex crossings put r1 at 977 px, r14 at 1428 px and the image line at 1834.5 px, so 451 px for 41.85 mm and 857.5 px for 79.56 mm, both 10.78 px/mm along the axis. Arc fits of r3, r4, r5, r6, r7 and r9 give 10.0–10.7 px/mm across it; heights below use 10.55. Read at the line centre, top and bottom averaged, Fig. 1 draws L1 at 180.5 px (17.1 mm), L2 at 164 px with a flat top (front face 15.5 mm, rear face 15.3 mm, its lower rear corner rounded), L3 at 147.5 / 124 px (14.0 / 11.75 mm) with a flat top and a chamfer down to the rear face, L4's front face at 123 px (11.7 mm) with a chamfer up to a flat top at 140.5 px (13.3 mm) that runs across L5's rim, r9 ending at about 137 px (13.0 mm), L6 flat-topped at 151 px (14.3 mm), and L7 and L8 at 153.5 and 150 px (14.55 and 14.2 mm). Every drawn height is 0.92–1.00 of the f/1.4 marginal ray at that face (mean 0.955), so the ray stays the floor.

Silhouette differences on the page before this review: L2 rendered as a slanted bevel (16.3 mm front, 15.4 mm rear) where Fig. 1 draws a square-cut block; L1, L7 and L8 render taller than drawn (L7 and L8 as tall as L2, which Fig. 1 draws 7–9% taller than them); the triplet's upper edge is one slope from L4's front rim to L6's rear rim, where Fig. 1 draws chamfers and flat tops. L4's front face cannot rise further without reaching past the iris plane, L5 is already at its knife edge, L6's rear face sits on the f/1.4 ray, and L6's front face is the cemented r9, so the triplet stays as it is.

| Surface | Baseline (mm) | Fig. 1 (mm) | Final (mm) | Light it costs (points, worst field) | Verdict |
|---|---:|---:|---:|---:|---|
| 3 | 17.0 | 15.5 | 16.3 | 1.3 at 8.6° | Kept: slight; at the f/1.4 ray (16.28 mm) |
| 4 | 17.0 | 15.3 | 16.3 (was 15.4) | 0.0 | Partly raised: L2 square-cut as drawn, level with face 3 |
| 6 | 14.2 | 11.75 | 12.7 | 0.0 | Kept: costs nothing; held over the 12.58 mm iris radius, above the 12.40 mm ray |

No lands (`rimExtensionSd`, `rimCutDepthMm`) are authored and `checks` is not set. With face 4 at 16.3 mm the surface validator reports no errors and the real-ray trace flags only S5, S8, S9 and S10, at most 0.04 mm under the f/1.4 ray, as before. The final worst loss against baseline rims is 1.3 points at 8.6° (84.8% against 86.1%); the axis stays at 95.7% and the 23° edge at 40.2%. Engine focal length 49.998 mm, half-field 23°, f-number 1.4 and stop radius 12.577 mm are unchanged; the aperture audit keeps the lens within 3% of f/1.4, the image-circle check lists nothing, and the 23° chief ray reaches 20.66 mm.

Near state with a real object, 0.45 m object to image (object 363.30 mm ahead of r1), wide open: on axis 89.7% of the iris beam passes, L5's rims taking most of the rest; at 20.66 mm image height 47.9% and at the 21.63 mm frame corner 43.9%, the same with baseline rims, before and after this review. The largest loss at that state is 1.2 points at 10.5 mm image height (79.2% against 78.0%), from face 3.

Labels and annotations: element names L1–L8 follow the patent's first to eighth lenses (the booklet's L01–L08); each `type` matches the signs of R and the claim's description of that lens, and each `focalLengthMm` is present (the inspector shows L2 as a positive meniscus of +59.79 mm and L5 as a biconvex positive of +18.83 mm in the triplet). The stop sits between L3 and L4, where the booklet's diaphragm parts sit. Groups G1–G6 bracket the six air-separated groups; the patent names no groups. One cemented bracket, T1, covers r7–r10, the L4/L5/L6 triplet the booklet supplies as one assembly. All surfaces are spherical, and neither the patent nor the booklet marks a special glass, so no `apd` tag applies. All four glass labels resolve, within 0.07 of the printed νd.

Movement: keyframe 0 is infinity (back focus 37.71 mm) and the last is the derived 0.45 m state (44.847 mm). The movement chart moves all six groups 7.14 mm toward the object together, as unit helicoid focus does, and the slider's far end reads ∞ with 45 cm at the near end.

Aberration plots: Fig. 2 prints d-line curves only, so no colour check is possible. Distortion at 23° is −2.67% against about −2.6% read from Fig. 2. The sagittal field matches Fig. 2 at 15°, 20° and 23° (model −0.08, −0.01 and +0.14 mm against about −0.07, +0.01 and +0.16 mm at f = 50). The meridional field runs 0.06–0.11 mm more inward than plotted (−0.08, −0.17 and −0.30 mm against about −0.01, −0.06 and −0.24 mm). Moving the iris across the clear part of the gap changes it by 0.01 mm at most, so the difference does not come from the inferred stop position.

Open: L1, L7 and L8 stay 13–16% above the heights read here, for corner light, as the earlier pass's open line records; trimming only L7 and L8, to 16.0 mm, would already raise the worst loss to 2.1 points.
