# Sony E 55-210mm f/4.5-6.3 OSS audit

- Source: USPTO US 8,837,056 B2 and US 2013/0033621 A1; Example 1 checked in 220 assertions over 121 numerical fields. Factory identity and physical scale are unproved; Example 3 was kept as the alternative.
- The inferred 55x scale applies to every length and An/55^(n−1). No endpoint stretching, source correction, glass substitution or image-plane optimization.
- The first build carried an invalid Sony mount spelling and a too-wide figure rim; the mount was corrected to the canonical id sony-fe. A 7.75 mm G2 rim clipped the stated axial tele beam; exact tracing required 7.770308882 mm, which motivated the 7.78 mm rim with the default 0.90 gap-sag allowance.
- The printed image planes and weak tele MTF were kept. The inferred G4-only 65x33 cam has no published finite conjugate; near-infinity focus labels and virtual conjugates were documented. No finite MTF claim.
- Geometry was sampled at 4,257 states and 3,660 pupil requests; partial-pupil failures were recorded. At first authoring, mixed spectra were unavailable for lack of partial dispersion (closed 2026-10-31 by the catalog labels). Convergence was not treated as a quality pass.
- First authoring ran isolated type, format and rebuild checks only; whole-project checks belong to the release branch.

## 2026-10-31 — Deployment validation and fix pass

Source re-read: 23 surfaces, 87 static cells (R, d, nd, νd, K, A4–A10), 15 variable gaps and 6 f/Fno cells read from the grant page images; 0 mismatches, and the application's tables are identical. The 55x scale is exact on R and d, and An matches 55^(1−n) to 1e-12.

Patent vs model at 55x: EFL 55 / 105.05 / 199.1 vs 54.97 / 104.82 / 198.67 mm (−0.33% at tele against Table 10's 3.624). Printed BF 17.60 / 27.885 / 51.095 vs paraxial 17.637 / 27.914 / 50.701 mm. TL 120.505 / 137.335 / 164.56 mm. Table 10's f1, f2, β2 and f51/f5 reproduce. LSA peaks at 0.25 mm and matches Figs. 5A–7A, so the repeated ±2.78726E+05 C10 values stand as printed.

The +0.394 mm tele plane is 1.03 sigma of print rounding (sigma 0.383 mm, 20,000-trial Monte Carlo of the printed digits), so it is not a misprint. LENS_DATA_SPEC keeps the authored plane. Photopic on-axis MTF at 40 lp/mm, wide open, grid 128: 0.689 / 0.641 / 0.055 on the printed planes; 0.809 / 0.777 / 0.730 at best axial focus (shifts −0.058, −0.084, −0.388 mm).

Stale numbers replaced: working f/# 4.628 / 5.389 / 6.503 and 4.660 / 5.548 / 7.111 became 4.65 / 5.42 / 6.56 at infinity and 4.68 / 5.58 / 7.14 at 1 m, using iris radii 6.9732 / 7.0968 / 7.7333 mm from the one-stop rule. The first-authoring MTF figures were replaced, because the spectra changed with the catalog labels.

Source inconsistencies: Fig. 6 prints ω 7.34° against Table 3's 7.43°, and 7.34° is right by trace (image heights 13.906 / 13.899 / 13.915 mm at 55x). Fig. 5A prints Fno 4.84 against Table 3's 4.64; the table is kept on stop-ratio evidence (1.109 against Example 3's 1.105; 1.157 for 4.84).

Clearance: audit:surface OK, field coverage 65/65 at ≥99%, 0 CLIPS-AXIAL (S6 7.77 vs rim 7.78). The default clearap BLOCKS-CHIEF flags on S1–5, 19A and 20A are ghost roots of its launch scan: they clear with a 25 mm scan limit, and an independent trace gives a maximum chief height of 15.01 mm at S1.

Maker comparison: Sony publishes 13 elements in 9 groups, two ED and two aspherical, 1 m, 0.225x. Its construction diagram (sony.jp y_SEL55210_comosition.jpg) colors L2 and L8 as ED and L10 and L11 as aspherical, the positions Example 1 carries. Tele magnification at the inferred 1 m is 0.219. Example 1 is the best of the three examples; Example 2 has 14 elements and F/7.30, and Example 3 has a third 81.61 element and 3.46x. No Tamron assignment or better patent was found, though J-PlatPat was not searched.

Fields changed: `patentNumber`, `name`, `subtitle`, `specs`, element `label`, `role`, `glass`, `apd`/`apdNote` on L2 and L8, `cemented` and `doublets` text D1–D4 to C1–C4, `focus.description`, the header comment and the analysis wording. Glass resolved 0/13 before, 13/13 after; all pairs in all three examples sit on catalog rows, so none looks optimizer-floated, and L10 and L11 show no index drop from their moulding-glass rows. Optics unchanged: `built.mjs` and `probe.mjs` output is identical before and after.

## 2026-10-31 — Semi-diameter pass against the patent figure

Source: `patents/US8837056B2.pdf`, PDF page 2 (Sheet 1 of 17), FIG. 1, measured at the native 2560 × 3300 raster. FIG. 1 is Example 1: it has the single L4 that FIG. 2's L41/L42 doublet rules out, and its 22 drawn vertex crossings and image plane fit the wide infinity state, while FIG. 3's spacings do not. Only this wide panel exists; FIG. 4 is an arrow map with no element outlines.

Scale: 14.858 px/mm (0.0673 mm/px) from a line fit to the model's vertices at the drawn state, residual 1.33 px rms and 3.2 px at worst. The spans S1 to image and S1 to S23 give 0.06728 and 0.06739 mm/px. The figure is not anamorphic: prescription arcs fitted to the 14 strongly curved drawn surfaces give a radial/axial ratio of 1.006 (spread ±0.03), and the stop ticks' inner ends read 7.1 mm against the 6.97 mm iris. The printed axis line sits 6.8 px off the glass centre line, so every rim below is half the full top-to-bottom span, less the 5 px stroke. A one-sided reading would be wrong by 0.46 mm.

| Element | Surfaces | Before (mm) | Fig. 1 (mm) | After (mm) | Evidence |
|---|---|---|---|---|---|
| L1, L2 | 1–3 | 19.886 | 19.78 | kept | −0.5 %, noise |
| L3 | 4, 5 | 17.183 | 16.95 | kept | −1.4 %, noise |
| L4 | 6, 7 | 7.78 | 8.71 | 8.7 | +12 %, figure; square-cut, both faces one height |
| L5 rear | 8 | 7.78 | meets S9 at the L4 rim | 8.2, `rimExtensionSd` 8.7 | figure; cap limited by the S8/S9 crossing at 8.226 mm |
| L6 front | 9 | 7.78 | 8.54 | 8.2, `rimExtensionSd` 8.54 | figure; same cap limit, land carries the square top |
| L6 rear | 10 | 7.78 | 8.54 | 8.54 | figure; the curve reaches the edge, so no land |
| L7, L8, L9 | 12–16 | 9.460 | 9.18 | kept | −3.0 %, noise |
| L10 | 17A, 18A | 7.530 | 7.54 | kept | agrees |
| L11 | 19A, 20A | 6.757 | 6.80 | kept | +0.6 %, noise |
| L12, L13 | 21–23 | 11.970 | 12.11 | kept | +1.2 %, noise |

The rim step order now follows the figure: L4 above L6, and both above L10, which the old G2 rim barely cleared. The printed S8 and S9 curvatures close the 1.65 mm air space before the drawn rim, so their clear apertures stop at 8.2 mm and opaque lands carry the outline to the figure's heights, 0.0105 mm apart. The drawing's S8 to S9 vertex spacing is 27 px where 1.65 mm is 24.5 px, which is why its rims meet higher than the prescription's. `checks.gapSagFrac` = 1 is the smallest two-decimal value that admits 8.2 mm: 0.99 is refused, 1.640 mm of sag against 1.633 mm. The faces do not cross. No aspheric rim changed, so no quoted sag or departure moved.

Lands: FIG. 1 ends the concave rears of L3 and L11 on flat lands. Native scale for both is 14.858 px/mm. S5: cap end 225 px of a 251.5 px edge, q = 0.895 ± 0.008, cap radius 15.38 mm, depth 1.60 mm, which falls on the drawn row. S20A: cap end 87 px of 101 px, q = 0.861 ± 0.018, cap radius 5.84 mm, depth 0.84 mm. As inferred rim cuts both are refused: beams reach 16.92 mm on S5 at 199.1 mm, and the whole 6.757 mm rim on S20A at 173.5 mm and 6.43°. As `rimExtensionSd` lands they need `sd` at the cap end, and that fails on illumination. At 55 / 105.05 / 199.1 mm, S5 at 15.38 mm gives 64.5 / 60.8 / 68.2 %, S20A at 5.84 mm gives 58.4 / 56.7 / 64.2 %, and both give 47.6 / 46.3 / 55.6 %. Every station loses more than the 5-point limit, so both stay out and `sd` stays 17.183 and 6.757 mm. S5 at 16.2 mm or S20A at 6.5 mm would stay inside the limit (73.0 / 66.9 / 73.0 % and 70.8 / 67.9 / 74.7 %), but neither is where the figure ends the cap, so neither was applied. The small notch FIG. 1 draws at the L1/L2 rim sits on a cemented junction and is not modeled.

Clearance: no axial clip at any station. S6 carries 7.77 mm against 8.7 mm, S8 7.40 mm and S9 7.39 mm against 8.2 mm, S10 7.54 mm against 8.54 mm. The lands add no ray path. The surface validator passes, the image-circle check reports no undersized rim, field coverage is 65/65 at ≥99 %, and 65/65 stations hold the stated f-number within 3 % with no rim limiter. The clearap chief-ray flags on S1–5, 19A and 20A are the ghost roots already recorded above. LSA peaks at 0.25 mm, so no misprint is in play. Engine half-field stays 15.57°, wide-open f/4.64 and the stop radius 6.973 mm are unchanged.

Corner illumination at 14.1 mm, wide open at infinity, from the engine's vignetting curve:

| Position | Before | After |
|---|---|---|
| 55 mm | 63.0 % | 75.2 % |
| 105.05 mm | 71.3 % | 71.3 % |
| 199.1 mm | 76.7 % | 76.7 % |

The wide corner rises because G2 was its limiter. That follows from the figure rim and was not the reason for it. S6 at 8.7 mm still clips part of the off-axis bundle, whose unvignetted height there reaches 9.45 mm across the zoom.

Maker drawing, as the second check: it shows 13 elements in 9 groups, ED at elements 2 and 8, aspherical at elements 10 and 11. Its rims relative to L1, with Fig. 1 in brackets: L3 0.86 (0.86), L4 0.48 (0.44), L6 0.56 (0.43), L7 0.47 (0.46), L8–L9 0.49 (0.46), L10 0.40 (0.38), L11 0.35 (0.34), L12–L13 0.62 (0.61). The two disagree on G2: Sony draws L6 taller than L4 and G2 taller than G3, the patent the reverse. That image is small and this is a related design, so the patent figure governs. Both put G2 well above the old 7.78 mm.

Open: the lands on S5 and S20A remain undrawn, for the illumination reason above.
