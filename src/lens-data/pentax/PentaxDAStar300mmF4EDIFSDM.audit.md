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

## 2026-11-02 — Second review: diagram, labels and movement

Compared: the local page at infinity and at closest focus, the focus-movement panel at both ends, and all eight element inspectors, against Figure 19 at the native 2560 × 3300 raster, every embodiment table, Table 8, Figures 20 and 21, the patent text and Ricoh's drawing. Patent front page: Koji Kato, Hoya Corporation, filed April 9, 2008, priority JP 2007-103461 of April 11, 2007, granted May 11, 2010, as the file states.

Element names. Sections above this one use the sequential names L1–L8. Figure 19 and col. 4 give every element a reference numeral, so the elements now carry them: L1–L3 are L11, L12, L13 (group 10), L4–L5 are L21, L22 (group 20), L6–L7 are L31, L32 (group 30) and L8 is L41 (group 40). The rest of this section uses the new names.

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| Element `name` | L1 … L8 | L11, L12, L13, L21, L22, L31, L32, L41 | Figure 19 numerals; col. 4 names lens elements 11, 12, 13, 21, 22, 31, 32 and 41 |
| Element `diagramLabel` | none (diagram drew 1–8) | 11 … 41 | Figure 19; the diagram and the inspector now name each element the same way |
| Element `label` | Element 1 … 8 | Element 11 … 41 | as above |
| `apdNote`, L12 and L22 | cited Ricoh only | also cites col. 6 and says conditions (5) and (6) bound only νd | col. 6, lines 9–12 |
| Header comment | no numeral note; FE 4.67 and 3.76 | numeral note; FE 4.63 and 3.81 | numerals above; real-ray trace below |
| Analysis | L1 … L8; FE 4.67 and 3.76; ED "inferred from Ricoh" | L11 … L41 with the numeral mapping; FE 4.63 and 3.81; states what the patent says of the glass and that APD stays inferred | col. 4, col. 6, Figure 21 |

No `sd`, `rimExtensionSd`, `R`, `d`, index, gap or `glass` value changed in this review.

Rims. Surface 12 is the only face below its package value and the only land.

| Face | Figure reading | Baseline `sd` | Final | Points of light | Verdict |
| --- | ---: | ---: | --- | ---: | --- |
| 12, cut | cap end 70–74 px of an 89.0 px rim, 12.4–13.1 mm at the file's scale | 15.8 | `sd` 13.1 | 0.6 at 2.8° | Keep: slight |
| 12, land | vertical stroke to the rim, x = 1378 px | none | `rimExtensionSd` 15.8 | 0 beyond the cut | Keep: redraws the rim |

The final worst loss from `rimcost.mjs` against package rims is 0.6 points at 2.8°, and the transmitted light at 0–2.8° is 100.0, 100.0, 99.8, 97.8, 95.6, 93.0 and 89.8 % against 100.0, 100.0, 99.8, 97.8, 95.6, 93.1 and 90.5 %. A cap end of 12.7, 12.8, 12.9, 13.0, 13.2 and 13.4 mm costs 2.9, 2.2, 1.6, 1.1, 0.3 and 0 points. With `rimExtensionSd` removed the curve is the same, so all of the 0.6 points comes from the cap radius. At closest focus the engine's collimated curve is 92.4 % at its last sample of 2.4°, with the face at 13.1 mm or at 15.8 mm. The budget does not force a raise, and the figure's range does not support a lower value by more than its noise, so 13.1 mm stands. It sits 0.45 mm above the 12.65 mm axial ray at F/4.1. No `Open:` line concerned this rim.

Silhouette. Rim strokes were measured again from a row histogram of the native raster: half-heights 209.00, 201.50, 192.00, 116.25, 89.00 and 99.25 px for L11, L12, L13, C1, C2 and L41, which reproduces the first pass, and S1 to S14 spans 996.5 px, or 5.82 px/mm. Every element renders square as drawn, the step order L11 > L12 > L13 and C1 > L41 > C2 holds, L22's rear wedge reaches the rim corner as in the figure, and C2's land sits 2.72 mm behind the S12 vertex against 2.6 mm on the figure. L12's drawn rim is about 3.8 mm wide against 2.9 mm in the render, which is what R and d give at this height (3.4 mm even at the figure's own height), so the figure's stroke overstates it and nothing was changed. The file's rims stay about 3 % above the figure, which is within noise and keeps the proportions. Overlay in the scratch directory as `r2/da300/overlay.png`.

Labels checked and found correct. Bracket ranges match col. 4 and Table 7: G1 surfaces 1–6, G2 7–9, G3 10–12, G4 13–14, C1 7–9, C2 10–12. G1–G4 abbreviate the patent's first to fourth lens groups 10–40, and the signs are the patent's. All eight `type` strings agree with the signs of R and with the text (Embodiment 7 follows 6, which follows 2 outside G3). There are no aspheres (col. 7), no `A` suffix and no `asph` entry. The stop is drawn 3.5 mm ahead of surface 10, between L22 and L31. The eight inspectors show the stored type, nd, νd, focal length, glass and role, with DOUBLET C1 and C2 on the right members. All eight `focalLengthMm` values match the probe, and all 14 radii, 13 thicknesses, 8 index pairs and the three spacing rows match Table 7 at the native raster.

Movement. Col. 4 and claim 1 state that the negative third group moves toward the image on focusing to a closer object. `gaps` lists infinity first: D9b 3.5 → 14.79 mm, so printed d9 7.00 → 18.29 mm, and D12 56.96 → 45.67 mm. Both give 11.29 mm of travel, and d9 + d12 = 63.96 mm in all three printed rows, so G1, G2 and G4 stay fixed. The movement panel shows G3 alone moving, toward the image, with maximum travel 11.29 mm. The slider runs from ∞ to 1.40 m, and at the far end the header reads 1.40 m; an independent paraxial trace of the printed spacing gives 1400.07 mm object to image at m = −0.2445.

Stop. An independent real-ray trace from the 1:4.12 of Figure 20 gives a real stop height of 16.48 mm and, at the closest spacing, FE 4.63 with the stop fixed with G2 and 3.81 with the stop moving with G3, against the printed FE 4.63. That replaces the 4.67 and 3.76 of the earlier paraxial estimate and settles the stop as fixed.

The −0.02 row. The same trace gives 14.82 m object to image at m = −0.0199 for d9 7.86 / d12 56.10. Authored, it would be keyframe 0.0944 with gaps 4.36 and 56.10 mm. Without it, the printed spacing falls at slider position 0.0762, where the label reads 18.4 m. The `Open:` line on this row stands, since the numeric gaps are outside this review.

`apd` on L12 and L22: the tags stay `"inferred"`. Col. 6, lines 9–12, uses "a special low-dispersion glass material which satisfies conditions (5) and (6)" for elements 12 and 22 to correct axial and lateral chromatic aberration, and lines 18–21 repeat that with an Abbe number exceeding 80. Conditions (5) and (6) bound νd alone, col. 1 defines the same class by Abbe number, and the patent has no anomalous-dispersion condition, no partial dispersion and no glass name. `LENS_DATA_SPEC.md` requires the source to identify the material as anomalous, and the Thypoch Simera 50 and Laowa 180 reinspections of 2026-10-29 dropped the tag on the same ground. The positions agree with Ricoh's shaded elements. The note and the analysis now record the patent's statement.

Proxy glass. The patent prints Nd and ν only, with no glass name, extra line or partial dispersion, for any element. Positions across the embodiments, digits read from the page images:

| Element | Emb. 1 | Emb. 2 | Emb. 3 | Emb. 4 | Emb. 5 | Emb. 6 | Emb. 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| L13 | 1.80651/43.2 | 1.80440/39.6 | 1.80400/39.5 | 1.80440/39.6 | 1.80440/39.6 | 1.79952/42.2 | 1.80000/44.1 |
| L21 | 1.74851/43.8 | 1.74400/44.8 | 1.74399/45.8 | 1.74400/44.8 | 1.74999/43.8 | 1.79952/42.2 | 1.79952/41.3 |
| L32 | 1.57800/47.8 | 1.57135/53.0 | 1.57140/45.7 | 1.57135/53.0 | 1.57517/54.6 | 1.74400/44.8 | 1.74260/44.4 |
| L41 | 1.62586/35.8 | 1.80518/25.4 | 1.65000/33.4 | 1.60562/43.7 | 1.76867/26.7 | 1.68893/31.1 | 1.69883/29.6 |

The pairs that recur are catalog glasses (1.80440/39.6, 1.79952/42.2, 1.74400/44.8, 1.57135/53.0), and so are 1.60562/43.7, 1.80518/25.4 and 1.68893/31.1. Embodiment 7's four pairs are all one-offs that match no row in the vendor files: only L21's index recurs, in Embodiment 6, with a different νd. They sit near Embodiment 6's catalog pairs by +0.0005/+1.9, 0/−0.9, −0.0014/−0.4 and +0.0099/−1.5, so they read as floated design values, and the same is true of the one-off pairs in Embodiments 1, 3 and 5. The four `glass` labels stay coordinate proxies and resolve inside the runtime window.

Before and after: engine half-field 5.67°, F/4.1, stop radius 16.06 mm and EFL 290.991 mm are unchanged. The surface validator passes, no surface falls under the image-circle floor, the APS-C corner traces in full, and the clearance tool shows no axial clip or blocked chief ray.

Limitations: `glass` labels and generated glass reports keyed by element name are outside this review; any report quoting L1–L8 for this lens refreshes with the next generation.

## 2026-11-02 — Chromatic check against Figures 20 and 21

Reported from the site: the color spreads looked wrong. They were. The four proxy labels of the first glass pass passed the runtime window (Δn ≤ 0.003, Δν ≤ 2), so the Sellmeier tier borrowed each row's dispersion and ignored the printed νd. This lens cannot absorb that. At infinity an element's share of F − C focus runs up to ±8.5 mm (L31 −7.0, L32 +8.5, L13 +6.6, L21 +5.4), so a 1 % error in one νd moves the focus about 0.08 mm, and F − C came out 0.25 mm with g on the wrong side of d. Catalog νd against printed: S-LAH52 +0.93 (2.2 %), E-FD15 +0.45 (1.5 %), LAF2 +0.50 (1.1 %), NBFD14 +0.22 (0.5 %). Neither earlier review compared C or g with Figures 20 and 21.

Figure readings: 7112 px wide native raster, Figure 20B at 452 px/mm, Figure 21B at 489 px/mm, Figure 21C at 4763 px/mm, each from the printed ±0.5 or ±0.05 ticks, with zero at their midpoint. The patent plots d, g and C only, so F is not checked. All values in mm from the d-line paraxial focus, except lateral color.

| Quantity | Figure | Nearest rows (before) | Printed pairs (after) |
| --- | ---: | ---: | ---: |
| Infinity, paraxial C | +0.053 | +0.101 | +0.072 |
| Infinity, paraxial g | +0.128 | −0.283 | +0.188 |
| Infinity, F/4.12 marginal d | +0.06 | +0.065 | +0.065 |
| Infinity, F/4.12 marginal C | +0.17 | +0.226 | +0.194 |
| Infinity, F/4.12 marginal g | −0.13 | −0.595 | −0.070 |
| Closest, paraxial C | +0.100 | +0.140 | +0.107 |
| Closest, paraxial g | +0.192 | −0.246 | +0.242 |
| Closest, FE 4.63 marginal d | +0.16 | +0.161 | +0.161 |
| Closest, FE 4.63 marginal C | +0.18 | +0.261 | +0.225 |
| Closest, FE 4.63 marginal g | +0.50 | +0.048 | +0.592 |
| Infinity, y = 21.64 lateral C, µm | about −10 | −10.4 | −10.3 |
| Infinity, y = 21.64 lateral g, µm | about −10 | −6.8 | −12.4 |
| Closest, y = 21.64 lateral C, µm | −14.9 | −14.9 | −14.9 |
| Closest, y = 21.64 lateral g, µm | +2.9 | +6.2 | +3.1 |

The closest-focus trace uses the object 1171.79 mm ahead of surface 1 and the d-line entry height that fills the infinity stop. Marginal readings come from the top of each plot, measured from the local axis line because the scans tilt, and hold to about 0.02 mm.

Change: `glass` on L13, L21, L32 and L41 is now `Unmatched (...)`, so they take the Abbe tier with the printed nd and νd. No other field changed. The spec already prefers `Unmatched` to a speculative match. L21, L32 and L13 carry the change: released one at a time they give g −0.081, −0.121 and −0.175 at infinity. L41 alone changes almost nothing, and its label goes for the same reason.

The g-line residual is +0.05 to +0.09 mm in all four paraxial and marginal comparisons, always on the same side, so it reads as an offset and not a shape error. Catalog dPgF on those four elements gives g +0.026 at infinity, which overshoots the figure the other way. No `dPgF` is authored: the patent prints no partial dispersion, and a value chosen to close that offset would be a fit.

Sellmeier coverage gives up these four elements. That is the right trade here, because the coverage figure counts how a surface is resolved and says nothing about whether the dispersion matches the prescription.

Correction to the second review above: the file carries `apd: "patent"` on L12 and L22, not `"inferred"`. The paragraph there records the reasoning against; the tag was set to `patent` on col. 6's "special low-dispersion glass", and the PR flags it for the owner.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “m = 0.00—−0.02—−0.25” → `"0.25"` | US 7,715,116 B2, Embodiment 7 (PDF p. 19) | 1170.05 mm, first-surface | in focus 0.24448; at the declared distance 0.24500; +4.27 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
