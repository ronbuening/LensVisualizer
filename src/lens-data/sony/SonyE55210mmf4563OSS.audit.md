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

Closed by the second review below: the S5 and S20A lands are drawn, on the evidence of Figs. 14A–16A.

## 2026-10-31 — Second review: diagram, labels and movement

Compared: the local page at 55, 105.05 and 199.1 mm at infinity and 1 m, both movement overlays and the inspectors of elements 2, 3, 8, 10 and 11, against FIG. 1 at the native raster, FIG. 4, Figs. 5–7, Figs. 14–16, the patent text and Sony's drawing. This pass found one rim question open and two labelling faults. Everything else the first pass settled held.

FIG. 1 was re-measured independently and agrees with the first pass: 1791 px from S1 to the image plane against 120.505 mm is 14.86 px/mm, the glass centre line is x = 1418.3 with the printed axis line 6.8 px off it, and the G2 and G3 to G5 rims read as recorded above. A zoomed overlay of every group shows the model on the ink apart from the three places listed here.

Rims:

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| S5 (E3 rear) | sd 17.183 | sd 15.0, `rimExtensionSd` 17.183 | FIG. 1 land row 2345, cap end 225.8 px on both sides, 15.2 mm, against an edge of 252.3 px; Figs. 14A–16A set 15.0 |
| S20A (E11 rear) | sd 6.757 | sd 5.9, `rimExtensionSd` 6.757 | FIG. 1 land row 1324, cap end 87 to 90 px, 5.95 mm, against an edge of 101 px; Figs. 14A–16A set 5.9 |

The new evidence is in the lateral-aberration sheets, PDF pages 9–11 (FIG. 14A wide, 15A intermediate, 16A tele). Their tangential fans at Y′ = ±0.25 stop far short of the full pupil, which is what the Y′ = 0 fan spans, so the design itself is vignetted at the corner and its fan ends say where. Digitized at the native raster, with the +0.25 panel and the mirrored −0.25 panel averaged, and traced in the model at 13.9 mm, the height the printed ω reach:

| Position | Patent fan ends | Model with old rims | Limiters | Model with 15.0 / 5.9 mm |
|---|---|---|---|---|
| 55 mm | −0.546 / +0.381 | −0.840 / +0.616 | S6, S20A | −0.552 / +0.380 |
| 105.05 mm | −0.428 / +0.511 | −0.638 / +0.712 | S4, S19A | −0.434 / +0.508 |
| 199.1 mm | −0.483 / +0.555 | −0.640 / +0.722 | S4, S19A | −0.506 / +0.566 |

Two radii reproduce all six ends within 0.023, including the change of sign in the asymmetry between wide and intermediate, and they are the two radii where FIG. 1 draws its lands. At exactly 13.75 mm (Y′ = 0.25 at 55×) the same radii give −0.576 / +0.392, −0.446 / +0.516 and −0.512 / +0.572. A scan puts S5 at 14.95 and S20A at 5.89 mm. FIG. 1's 15.2 mm for S5 is 3 px larger, which is within the drawn stroke, so the fans set the value and the figure confirms the land. The first pass declined these lands for the illumination they cost; these plots show that cost is the patent's own design behaviour.

Floors: axial marginal maxima over all 65 stations at infinity and at 1 m are 14.43 mm on S5 and 5.24 mm on S20A, 0.57 and 0.66 mm inside the new caps, and the corner chief ray reaches 12.15 and 4.49 mm. The validator passes with `checks.gapSagFrac` unchanged at 1, the image-circle check reports no undersized rim, field coverage is 65/65 at ≥99 %, 65/65 stations hold the stated f-number with no rim limiter, and no clearance tool flags a clip. Engine half-field stays 15.57°, wide-open f/4.64 and the stop radius 6.973 mm are unchanged. On-axis working f-number and on-axis MTF do not move, because the axial beam clears both caps. LSA still peaks at 0.25 mm.

Corner illumination at 14.1 mm, wide open at infinity, with each station's own wide-open stop:

| Position | Before | After | Change |
|---|---|---|---|
| 55 mm | 75.2 % | 44.4 % | −30.8 |
| 105.05 mm | 69.6 % | 43.0 % | −26.6 |
| 199.1 mm | 65.9 % | 44.5 % | −21.4 |

This loses more than 5 points at every station, and it stays because the reading is solid: FIG. 1 draws both lands on both sides of the axis, and the fan ends fix the radii independently. Removing `rimExtensionSd` and restoring sd 17.183011 and 6.757364 restores the Before column. S5 at 16.4 mm with S20A at 6.6 mm would stay within 5 points (72.1 / 64.9 / 62.4 %), but that fits neither the figure nor the fans. The app's Vignetting tab reads 44.4 %, 43.0 % and 44.5 % on the local page. The After figures in the first pass's table and the 71 % and 77 % then quoted in the analysis came from the batch's vignetting helper, which keeps the wide-end stop radius (6.97 mm) at every zoom. With the real 7.10 and 7.73 mm stops those stations read 69.6 % and 65.9 %, as above, and the app showed 65.9 % at tele before this change.

Labels:

| Item | Before | After | Evidence |
|---|---|---|---|
| Element `name`, `diagramLabel` | L1–L13 | E1–E13 | The patent's L signs name components and groups: cemented L11, L21, L32, front group L51, back group L52. Sequential L4, L11 and L12 here were different glass from the patent's L4, L11 and L12 |
| Group bracket | G4 focus (+) | G4 (+) | The text ran into "G3 (+)" at 55 mm. `focus.description` and E10's role carry the focus duty |
| Roles of E10, E11 | no patent sign | patent L4, patent L51 | Col. 12 names them |

Mapping for the entries above this section: L1–L13 there are E1–E13 here. Patent L11 is E1/E2, L12 E3, L21 E4/E5, L22 E6, L31 E7, L32 E8/E9, L4 E10, L51 E11, L52 E12/E13. `label` stays "Element n". The doublet brackets stay C1–C4, one per cemented component with the right surface ranges; "D" does not collide with the d-gaps here but C was already consistent. The analysis used E1 for Example 1, and that wording is gone.

Checked and correct, unchanged: group brackets G1 1–5, G2 6–10, G3 12–16, G4 17A–18A, G5 19A–23 match Table 1's margin. G5 stays one bracket, since L51 and L52 are its front and back groups and OSS is on the element. The stop sits at surface 11 and moves with G3 (col. 12). `A` suffixes are on 17–20 only, as Table 1's asterisks. Every `type` agrees with the signs of R and col. 12's wording. `focalLengthMm` is on all 13 and matches the thick-element trace. No cement layer is modeled as an element. Gap labels d5, d10, d16, d18, Bf are the patent's. `apd: "inferred"` sits on E2 and E8, the two green positions in Sony's drawing, and the patent names no special glass, so nothing is `"patent"`. Sony's purple falls on E10 and E11. That drawing shows 13 elements in 9 groups.

Astigmatism and distortion at the printed fields, in f = 1 units, against Figs. 5–7: T −0.0022 / −0.0080 / −0.0033 and distortion +1.90 / +2.99 / +1.78 %, each on the plotted curve, including the tele T bulge of about +0.002 near 0.6 of the field. No asphere sign is in doubt.

Movement, position of each group's front vertex from the image plane at 55×, from Table 3:

| Group | 55 mm | 105.05 mm | 199.1 mm | Wide to tele | Patent |
|---|---|---|---|---|---|
| G1 | 120.505 | 137.335 | 164.560 | objectward 44.055, monotonic | Text and FIG. 4 agree |
| G2 | 92.730 | 93.940 | 110.825 | objectward 18.095, monotonic, slow then fast | FIG. 4's curved path agrees |
| G3 and stop | 68.915 | 79.145 | 102.410 | objectward 33.495, monotonic | Text and FIG. 4 agree |
| G4 | 50.435 | 61.105 | 80.740 | objectward 30.305, monotonic | FIG. 4 agrees |
| G5 | 41.745 | 52.030 | 75.240 | objectward 33.495, monotonic | Text and FIG. 4 agree |

Stations ascend wide to tele and all five gap tables list them in that order. d5 grows and d10 shrinks, as the text says. G3 and G5 move together; d16 + d18 stays 17.325 / 17.27 / 17.325 mm, the printed rounding. No group reverses at any of the 65 stations in either focus column. d16 and d18 turn at the printed intermediate row, and the printed rows require that (11.00 → 10.56 → 14.19 mm). The inferred cam moves the turn to station 31, a 0.0002 mm dip below the printed 10.560 mm, which is rounding. G4 leaves a straight line by at most 0.14 mm.

Focus: the first column is infinity and matches Table 3, the last is the 1 m state, d16 falls and d18 rises by equal amounts at every station, and only G4 moves, objectward, as col. 12 says: 1.03 / 2.69 / 6.02 mm. The page shows 1.00 m at the near end. `focus.conjugates` is absent, as recorded.

Open: FIG. 1's notch at the E1/E2 rim sits on a cemented junction and is not modeled. The sagittal fans of Figs. 14A–16A run to the pupil edge at Y′ = ±0.25, while a round clip at S5 stops the sagittal ray at 0.90 at tele (the ray reaches 16.16 mm there), so the patent's plotted pupil is not a pure round clip and the model may be slightly tight in that one direction. G2's interpolated path has a corner at the printed intermediate row (1.21 mm in the first half, 16.885 mm in the second), where FIG. 4 draws a smooth curve; only the three printed rows are sourced. At 1 m, d16 rises from 7.87 mm at 105 mm to 8.28 mm at 154 mm and falls to 8.17 mm at tele. That gap turn exists only in the inferred cam, and G4 still moves objectward at every step. OSS stays centered, so the fans with stabilization on, Figs. 14B–16B, are not reproduced.
