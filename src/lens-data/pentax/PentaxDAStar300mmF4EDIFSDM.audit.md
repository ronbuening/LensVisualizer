## 2026-11-02 — Deployment validation and cleanup

Patent re-read: US 7,715,116 B2, Embodiment 7, Table 7, read from the page images. All 14 r, 13 d plus fB, 8 Nd, 8 ν, the 3.500 mm stop statement and the three printed spacing rows were checked, with no mismatches. There are no aspheres. Scale factor 1. Table 8 prints condition (6) as 81.2 for every embodiment while every table prints 81.6 at element 5; the file keeps the table value. Figures 20A and 20B label FNO 1:4.12 against the table's 1:4.1.

Patent vs model: f 291.00 / 290.9907; FNO 4.1 / 4.100; fB 56.93 / 56.9329; length 228.21 / 228.21; W 4.2° / 4.21° at y = 21.64. Table 8 traces to 1.594, 2.742, −5.212, −0.133 against printed 1.59, 2.74, −5.21, −0.13. The −0.0093 mm EFL difference is table rounding: d7 alone spans ±0.083 mm of EFL, the combined rounding spread is ±0.125 mm root-sum-square, and d7 = 2.2974 with d4 = 2.2343 (both rounding to print) give 291.0008 / 56.9306. All seven embodiments differ from their printed f, by −0.063 to +0.041 mm. A single-slip search over 1705 variants found five that fit f, fB and Table 8; none is unique or needed.

Near state: printed gaps, with d9 + d12 = 63.96 mm in all three rows. Traced object to image 1400.03 mm against Ricoh's 1.4 m; m = −0.2445 against printed −0.25 and Ricoh's 0.24×. The patent prints no object distance, so no conjugate is certified. A stop fixed with group 2 gives a closest-focus F-number of 4.67 against printed FE 4.63; a stop moving with group 3 gives 3.76.

Product fit: Embodiments 1–5 measure about 235 mm, putting surface 1 about 190 mm ahead of the K flange against a 184 mm barrel, and trace to 0.250–0.255×. Embodiments 6 and 7 measure 228.74 and 228.21 mm and trace to 0.2436× and 0.2445×. Embodiments 6 and 7 are the fitting family; no retail figure separates them. Embodiment 6's glass pairs all match catalog rows; four of Embodiment 7's do not.

Diagram comparison: Ricoh's construction drawing (ricoh-imaging.co.jp/japan/products/lens/img/img-smcpentax-das300_02_en.gif) shows three front elements, a doublet, the iris, a doublet and a rear meniscus, with the second element and a member of the first doublet shaded. That matches the model. Figure 19 places the stop 3.52 mm in front of surface 10 against the printed 3.500, and the semi-diameters sit 1.6–2.6 % above the figure's heights. Figure 19 draws the stop opening at about 16.7 mm; the file's derived radius is 16.06 mm, a real axial beam of about F/4.22.

Fields changed: `closeFocusM` 1e15 → 1.4, `focus.published` [] → [1], `gaps` for STO and 12, `aperture.fStops` and `maxFNumber` through f/32; then header comment, `subtitle`, `catalog.specs`, `focus.description`, element `role` and `focalLengthMm`, `apd` and `apdNote` on elements 2 and 5, `cemented` D1/D2 → C1/C2, `groups`, `doublets`. The analysis lost the package's run records and private links, and gained the embodiment comparison, the rounding explanation and the near-state figures.

Open: whether production follows Embodiment 6 or Embodiment 7 is not established.

Open: the printed −0.02 row is not authored, because its keyframe would need a computed distance; the spec prefers keeping every published row.

Open: printed m at closest focus (−0.25) does not trace from the printed gaps (−0.2445); Embodiment 6 shows the same difference (−0.26 against −0.2436).

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: patents/US7715116B2.pdf, image-only scan, page 12 (sheet 10 of 11), Figure 19, measured at the native raster (2560 × 3300). The drawn state is infinity: S12 to S13 measures 56.96 mm. The patent prints no ray-fan plots, so there are no fan ends to read as a second source; Figures 20 and 21 show spherical aberration, sine condition, chromatic and field plots only.

Scale: vertex positions come from arc fits on all 14 surfaces. S1 to S14 spans 998.5 px over 171.28 mm, or 5.830 px/mm, and the sub-spans S1–S9, S7–S14, S3–S6, S10–S12 and S13–S14 give 5.80 to 5.85. Fitting the printed radii to the drawn arcs gives a transverse scale of 5.77 to 6.02 px/mm on S1, S3, S7, S8, S13 and S14, mean 5.91. The sag at the rim corners gives the rim heights directly and agrees with 5.83: S1 35.85 mm, S3 34.5 mm, S4 34.4 mm. The figure shows no anamorphism beyond that scatter, and rims are read at 5.83 px/mm in both directions. The scan is tilted 0.09°, so heights are half the distance between upper and lower rim strokes.

| Element | Surfaces | File `sd` | Figure half-height (px) | Figure (mm) | File / figure | Real axial ray at F/4.1 (mm) | Result |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| L1 | 1, 2 | 36.8 | 209.0 | 35.85 | 1.026 | 35.49, 35.17 | Kept |
| L2 | 3, 4 | 35.5 | 201.5 | 34.56 | 1.027 | 34.32, 33.56 | Kept |
| L3 | 5, 6 | 33.8 | 192.0 | 32.93 | 1.026 | 32.64, 31.45 | Kept |
| C1 | 7, 8, 9 | 20.6 | 116.25 | 19.94 | 1.033 | 19.79, 18.38, 17.68 | Kept |
| C2 | 10, 11 | 15.8 | 89.0 | 15.27 | 1.035 | 15.17, 14.22 | Kept |
| C2 | 12 | 15.8 → 13.1, `rimExtensionSd` 15.8 | cap end 72–74, rim 89.0 | q = 0.82 | | 12.65 | Changed |
| L8 | 13, 14 | 17.6 | 99.25 | 17.02 | 1.034 | 7.06, 7.08 | Kept |

Values retained: the 13 rims above stay. Measured to stroke centres they sit 2.6–3.5 % above the figure, and 2.2–2.8 % to the outer ink edge, which is a nearly uniform scale inside the noise band. The step order is right: L1/L2 1.037 in both, L2/L3 1.050 against 1.049, C1/L8 1.170 against 1.171, L8/C2 1.114 against 1.115. All rims are drawn square, as the file has them.

Change: Figure 19 ends surface 12 short of the element's edge and draws a vertical land at x = 1378.7 px from there to the rim, on both sides of the axis. The file carried the curve out to 15.8 mm, which put the rear corner about 10 px (1.7 mm) behind the figure's and drew a point the figure does not have. The cap end is 72–74 px from the axis against a rim of 89.0 px, so q = 0.82 with a one-pixel range of ±0.02, and q × 15.8 mm = 12.96 mm (12.6–13.3). The land sits 2.37–2.57 mm behind the vertex on the figure and 2.67 mm in the model. `rimExtensionSd` is used because an inferred `rimCutDepthMm` at the figure's radius is refused: at depth 2.72 mm (radius 13.11 mm) the wide-open beams reach 13.585 mm at infinity, field 3.48°, and the cut would have to sit at 13.635 mm or more.

Light: against the package rims, the loss at the 2.8° corner at infinity for a land from a cap end of 12.6, 12.8, 13.0, 13.2 and 13.4 mm is 3.3, 2.2, 1.1, 0.3 and 0 points. The final 13.1 mm costs 0.6 points, inside the owner's 3-point limit. Corner illumination goes from 90.5 % to 89.8 % at 2.8° and from 93.1 % to 93.0 % at 2.3° at infinity; other fields are unchanged. At closest focus the engine's collimated curve is the same before and after, 92.4 % at its last sample of 2.4°, because the beams stay below 13.1 mm on surface 12 there.

Clearance: no rim clips at either focus state. The real axial ray at F/4.1 reaches the stop at 16.56 mm. At infinity its tightest margins are 0.45 mm on surface 12, 0.63 mm on surface 10 and 0.81 mm on surface 7. A plain meridional trace from an object 1171.81 mm ahead of surface 1, at the closest spacing, gives 31.19 mm on surface 1, 19.36 mm on surface 7, 12.23 mm on surface 10, 10.30 mm on surface 12 and 6.27 mm on surface 13, each below its infinity height. That trace was needed because the clear-aperture tool's axial column holds the infinity state; at infinity it matches the tool to 0.01 mm, and it gives F/4.10 and F/4.61 at the two states against the printed 4.1 and 4.63. Real-ray checks at y = 21.64 mm show no axial clip or blocked chief ray at either state. No rim rose, so no misprint question arises; on-axis spherical aberration traces to 0.070, −0.046, −0.081 and −0.066 mm at pupil 1, 0.85, 0.7 and 0.5.

Before and after: engine half-field 5.67°, F/4.1, stop radius 16.06 mm and EFL 290.991 mm are unchanged. The surface validator passes, no surface falls under the image-circle floor, the APS-C corner still traces in full, and the aperture check stays within 3 % of the stated f-number.

Maker drawing, as a check on order and proportions only: Ricoh's drawing agrees with Figure 19 on 8 elements in 6 groups, on three front elements, a doublet, the iris, a doublet and a rear meniscus, and on shading element 2 and element 5 (the second member of the first doublet). Rim heights relative to L1, read by eye from a 270 × 140 px image, are L2 0.95, L3 0.94, C1 0.55, C2 0.44 and L8 0.48, against 0.96, 0.92, 0.56, 0.43 and 0.47 in Figure 19. The order matches, and the drawing also ends C2's rear face short of a sharp corner, which supports the land. It shows L2 and L3 almost level and chamfers L3's rear corners, where Figure 19 draws a clear step and a square rim; the patent figure governs.

Limitations: the cap end could sit anywhere in 12.6–13.3 mm on the figure's reading. The engine traces the closest-focus state with collimated beams, since the file has no conjugate; the finite-object trace above covers the on-axis case only.
