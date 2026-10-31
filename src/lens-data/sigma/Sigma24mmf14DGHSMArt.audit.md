# SIGMA 24mm f/1.4 DG HSM | Art — audit log

2026-10-27. Related patent design: JP 2016-012034 A, Numerical Example 1; Example 6 remains viable. No exact factory identity is claimed and the grant was not compared.

- Patent PDF SHA256: e360e53e4dd5c5524f2c203ad9ff0518ce59569c8d6ff88ae50009d75bc0deb4 (34 pages).
- Source re-read at authoring: 236 fields, 0 mismatches.
- Printed optical fields are unchanged. Near state: d0 = 115 mm, track 132.5954 mm, object to image 247.5954 mm. The printed BF residual and the A12 term are kept.
- Figure 1 outlines were rejected as square rims on geometry, then replaced with inferred clear rims. No gap-sag override at authoring; the 2026-10-31 semi-diameter pass sets one.
- A straight-line focus path was rejected. A 65-point inferred path, with both groups on one shared parameter, is used as illustrative motion. No factory cam or focus-label accuracy is claimed. The near-infinity conjugate pole remains.
- Iris: see the 2026-10-31 section, which replaces the iris and f-number values recorded here at authoring.
- The model's finite clipping relies on inferred rims, not measured production apertures.
- MTF: see the 2026-10-31 section. Best-axial shift is a diagnostic only. No apochromatic or spectral-quality claim.

See the companion analysis for printed facts versus modeling choices.

## 2026-10-31 — Deployment validation and fix pass

Source re-read: the patent PDF was read directly, with pp. 14-15 checked row by row against the page images. 105 fields (27 R, 24 d, 6 variable-gap values, 30 nd/νd, 18 asphere values) gave 0 mismatches. The front-page number, date, applicant and inventor match the file. The asphere equation is the (1+K) form and K = 0, as stored.

Patent vs model: EFL 24.65 / 24.654 (near 24.99 / 24.990); BF 38.45 / 38.4512 paraxial (near 43.3511 / 43.3524); TL 132.60 / 132.5954; half-field 41.69 / 41.688 real (near 39.71 / 39.709); groups −129.91, 81.81, 42.03 / −129.90, 81.81, 42.03. On-axis spherical aberration is −0.028 mm at full pupil, so there is no sign of a misprint. Printed conditional values reproduce.

Maker diagram: Sigma's drawing shows 15 elements in 11 groups, FLD at L3/L5/L10, SLD at L7/L8/L12/L13, aspherical L2 and L15, a fixed first group and two focus groups. Surface positions read from it at both focus positions fit Example 1 at 0.15 mm rms, Example 6 at 0.25, Example 7 at 0.26, Example 2 at 0.39 and Example 9 at 0.93. Example 6's L2 is M-FCD500 class (νd 71.68), which the drawing does not mark; Examples 2, 7 and 9 have νd 81.61 at L3, and Example 9 carries its asphere on L1. Examples 3, 4, 5 and 8 fail on focal length or construction. Example 6 stays viable because the drawing is a small image.

Iris and working f-number: the stop rule gives an entrance-pupil radius of 8.3858 mm and an iris radius of 12.3155 mm from the design F1.47. Real working f/# is 1.4995 at infinity and 1.5987 at the near state, against printed 1.47 and 1.60; paraxial working values are 1.470 and 1.552. The printed near value is matched here, but the same rule misses Examples 5 and 8 by about 0.04 and 0.05, so the patent's convention stays undefined. Figure 1's stop marks read about 12.6 to 12.7 mm.

Rims: `lsa.mjs` was run first and shows no misprint. At the near state the on-axis marginal ray stood over the inferred rims at S21 (14.3834), S23 (15.8079), S24 (15.3249), S25 (15.1634) and S26 (15.1661), and the engine reported the working f-number as vignetted at S21. Raised, with each element kept square: L12 S20/21 14.38 to 14.39, L13 S22/23 15.66 to 15.81, L14 S24/25 15.10 to 15.33, L15 S26/27 15.10 to 15.17. The near working f-number now traces. All four stay inside Figure 1 (15.57, 16.93, 16.81, 17.18) and Sigma's drawing (about 15.1, 16.5, 16.5, 16.8). The S25/S26 gap check caps L14 and L15 near 15.5 without an override, so none was used at this step. Corner transmission at infinity moves from 19.4% to 19.9%. The semi-diameter pass below replaces the L12 to L15 values, and the near ray stays a floor under them.

Square-rim test: Figure 1 outlines on both faces give eight validator errors on the current checks: L10 edge −0.98 mm, S2 90° rim, S19 68.5° rim, and overlaps at gaps 2-3A, 4-5, 6-7, 8-9 and 25-26A. This repeats the geometry rejected at authoring, whose logs are not in the repo.

Glass: 15 of 15 now resolve, from 0. All are exact catalog rows; L15's catalog νd differs by 0.01. All 33 pairs printed across the nine examples sit on catalog rows, so L14's single printing is not an optimized value. L3/L5/L10 (FCD100, dPgF 0.049777) and L7/L8/L12/L13 (FCD515, dPgF 0.015751) carry `apd: "inferred"` on the engine's normal line.

MTF at 40 lp/mm, wide open, diffraction, printed planes. Reference wavelength: infinity center 0.551, edge 0.250 / 0.146; near center 0.759, edge 0.271 / 0.066. Photopic: infinity center 0.354; near edge 0.209 / 0.004. Photopic and C/d/F are newly available through the catalog glasses.

Catalog: `sony-fe` and `l-mount` added, as Sigma lists them. A Sony A version (part 401-205) is not on Sigma's current page but was sold: B&H listed it in August 2015 and Sigma's Danish site still files the lens under Sony A, so `sony-a` joined the list in the metadata pass of the same day. There is no evidence of a Pentax version. `closeFocusM` stays 0.2475954, the printed object-to-image distance, in the same reference as the marketed 25 cm.

Fields changed: lensMounts, eight `sd` values (S20 to S27), element labels, roles, glass, apd, apdNote and dPgF, doublet names D1/D2 to C1/C2, subtitle, specs, focus description, conjugate source, header comment, analysis and this log.

Half-field: the Summary tab reports 41.71° at infinity and 39.73° at near for the 21.65 mm format corner. The internal `halfField` of 41.08° is a paraxial limit set by the S2 rim and seeds the diagram's off-axis rays. S2 at 23.0 would raise it but exceeds the Figure 1 arc of 22.5 mm, so S2 is left.

Open: the grant JP 6413392 B2 is not compared with this publication.

## 2026-10-31 — Semi-diameter pass against the patent figure

Source: `patents/JP2016012034A.pdf`, p. 27, Figure 1 (Numerical Example 1, infinity), measured on the embedded 1316 × 722 px 1-bit raster at 399 ppi. The second check is the third-party copy of Sigma's construction diagram named in the assignment; the patent figure governs.

Scale: vertex crossings give S1 to S27 757 px over 94.1454 mm and S1 to the image plane 1066 px over 132.5954 mm, both 8.04 px/mm (0.1244 mm/px). The stop ticks sit at 64.9 mm against 65.00. A joint fit of 17 printed arcs over 3774 ink samples gives 8.04 px/mm axially and 8.08 px/mm radially at 0.36 px rms, so the figure is square within 0.5% and the prescription's arcs lie on the drawn ones. Rim lines are one native pixel, so readings hold to about 0.1 mm.

Rims, in mm. "Drawn" is the outer height of the element in Figure 1, with the drawn cap end where a land follows it.

| Surface | Element | Before | After | Drawn | Evidence |
|---|---|---:|---:|---:|---|
| S1 | L1 | 28.0 | 28.0 | 28.29 | Within 1%; kept |
| S2 | L1 | 22.5 | 22.5, extension 28.0 | 28.29, cap 21.86 | Figure flange. Cap unchanged, since it sets the 41.08° half-field, so tracing is unchanged |
| S3 | L2 | 21.5 | 22.1 | 23.22 | Step order against S2 was wrong; S2-S3 close at 22.40 |
| S4 | L2 | 21.5 | 22.1, cut 8.54 (radius 20.487) | 23.22, cap 20.25 | Figure land, moved out to the beam reach; L2 stays square |
| S5, S6 | L3 | 20.2 | 20.2; S6 cut 6.22 (radius 19.235) | 21.24, cap 18.76 | Height keeps the drawn steps to L2 and L4. Figure land on S6, moved out to the beam reach |
| S7, S8 | L4 | 18.2 | 19.2 | 20.25 | Over the 10% bar; S8-S9 close at 19.475 |
| S9, S10, S11 | L5, L6 | 18.2 | 19.2 | 20.00 | Over the 10% bar; kept flush with L4 as drawn |
| S12, S13 | L7 | 17.7 | 17.7 | 17.65 | Agrees |
| S14, S15, S16 | L8, L9 | 16.1 | 16.1; S16 cut 2.86 (radius 13.631) | 16.16, cap 13.69 | Height agrees; figure land on S16 |
| S18, S19 | L10 | 14.0 | 14.0; S18 cut 2.64 (radius 12.632) | 14.43, cap 12.6 | Height within 3%; figure land on S18 |
| S20, S21 | L11, L12 | 14.39 | 15.6 | 15.67 | Figure; above the near-state ray at S21 (14.38) |
| S22, S23 | L13 | 15.81 | 17.0 | 17.03 | Figure; above the near-state ray at S23 (15.81) |
| S24 | L14 | 15.33 | 16.9 | 16.91 | Figure, 10% over; arc runs to the drawn top |
| S25 | L14 | 15.33 | 15.9, extension 16.9 | 16.91 | Figure flange; cap stops short of the S25-S26 closure at 16.015 |
| S26 | L15 | 15.17 | 15.9, extension 17.2 | 17.28 | Figure flange; cap stops short of the same closure |
| S27 | L15 | 15.17 | 17.2 | 17.28 | Figure, 14% over; arc runs to the drawn top |

`checks.gapSagFrac` is 0.98, the smallest two-decimal value that admits these rims. The S25 and S26 lands close 0.975 of 0.4138 mm with 0.010 mm of air left; S8-S9 close 0.9694 of 3.2925 mm with 0.101 mm left, and S2-S3 0.9589 of 5.0922 mm. Figure 1 draws all three pairs meeting at the rim and no faces cross.

Rear group: L14 and L15 cannot carry optical caps past the S25-S26 closure. A cut on S25 at 15.87 mm is refused, because the wide-open beams reach 16.9 mm there. Rim extensions on S25 and S26 solve this: the caps stop at 15.9 mm and add no aperture, the rims reach the drawn heights, and L12 and L13 rise to theirs with no notch at L14. All four now sit within 0.1 mm of Figure 1, 3 to 5% above Sigma's drawing. A cut on S9 at the drawn 19.13 mm was refused for the same reason (beams reach 19.48 mm), so C1 stops at 19.2.

Lands at 8.04 px/mm, with q the drawn cap end over the drawn edge and the range one native pixel gives: S2 q 0.773 ± 0.008, S4 0.872 ± 0.010, S6 0.883 ± 0.011, S16 0.847 ± 0.014, S18 0.871 ± 0.016. All four cuts are inferred. S16 sits at q × sd. S4 and S6 stand at reach plus margin: 20.422 + 0.061 and 19.162 + 0.058. S18 uses the drawn 12.6 mm directly, because its `sd` is 0.43 mm under the drawn edge and q × sd would move the land 0.19 mm off the drawn plane. Reach and margin at S16 and S18 are 13.186 + 0.050 and 12.232 + 0.050. The repo's beam rule passes and the dense probe of 3.3 million rays finds none clipped and none inside a margin. S2's extension keeps the 22.5 mm cap, so its land stands at the cap's sag, 1.2 mm behind the drawn flange plane at 13.78 mm.

Clearance: the validator prints no errors; the image-circle floor and the traced corner chief ray are clear at 41.7°, 21.65 mm; `audit:aperture` finds no surface under the stated on-axis ray at either printed state; real-ray tracing shows no axial clip or blocked chief ray at infinity or near. `lsa.mjs` still gives −0.028 mm at full pupil. No surface passes a turnover: S3's slope rises monotonically through 22.1 mm, and S26 and S27 stay clear of theirs to 18 mm.

Engine half-field 41.08° (S2's cap), f-number 1.47 and stop radius 12.3155 mm unchanged. Corner transmission from the engine's full-pupil sampling: 19.9% to 29.7% at infinity (41.7°), 30.4% to 38.7% at the near state (39.7°). The whole rise comes from following the drawing, chiefly L4 and C1 and the S25 and S26 caps. Nothing is widened for the number, and real vignetting beyond these rims stays unknown. MTF at 40 lp/mm, wide open, printed planes: infinity edge 0.250 / 0.146 to 0.229 / 0.200, near edge 0.271 / 0.066 to 0.219 / 0.070, photopic near edge 0.209 / 0.004 to 0.194 / 0.010; centers and f/8 values unchanged.

Sigma's drawing, read at 3.72 px/mm and good to about 0.3 mm, agrees on 15 elements in 11 groups and on all arcs. FLD at L3, L5, L10; SLD at L7, L8, L12, L13; aspherical L2, L15. Its rims differ from Figure 1 in proportion: L1 27.3 against 28.3; L9 flanged to 16.9 against flush at 16.2; L11 flanged to 16.6 with L12 at 15.0 against both flush at 15.67; L5 20.2 and L6 19.3 against flush at 20.0; S18's cap ends near 13.4 with no land, against 12.6 with one. Rear rims read 15.0, 16.25, 16.25, 16.6, and the caps it draws at S4 (20.6) and S16 (13.7) match the model's cuts.

Limitations: T1's drawn top is flat at 15.67 mm with a step at L10, while the model's edge rises from 14.0 mm at S19 to 15.6 mm at S20, since a cemented junction cannot carry a land or a rim extension. L2 to C1 stay about 5% inside Figure 1.
