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

## 2026-10-31 — Second review: diagram, labels and movement

Compared the local page at infinity and at the near state with Figure 1 (p. 27, native 1316 × 722 raster) and with Sigma's drawing, and re-measured the figure from scratch. Vertex columns give 8.04 px/mm axially (S1 to S27 757 px over 94.1454 mm, S1 to image 1066 px over 132.5954 mm), and a joint fit of 12 arcs over 3044 samples gives 8.08 px/mm radially at 0.39 px rms, so the figure is square within 0.5%. Rim rows read 229/228 px at L1, 188/187 at L2, 172/172 at L3, 164/163 at L4 and 162/161 at L5 and L6, above and below the axis.

Differences on the page before this pass: L2 to C1 sat about 5% under both the figure and Sigma's drawing, T1's top rises where the figure is flat, and S2's land stands behind the drawn flange plane. L7 to L9 and L12 to L15 were on the drawing and stay. The first pass's reason for stopping was the gap closures. Those limit the optical caps, not the outline: a rim extension or a taller land carries the outline to the drawn height with the clear aperture unchanged. This section replaces the semi-diameter pass's closing sentence on L2 to C1.

Rims, in mm. "Sigma" is the drawing at 3.72 px/mm, good to about 0.3 mm.

| Surface | Element | Before | After | Figure | Sigma | Evidence |
|---|---|---:|---:|---:|---:|---|
| S4 | L2 rear | 22.1, cut 8.54 | 23.2, cut 8.54 | 23.20 | 22.6 | Land reaches the drawn top; cut radius 20.487 unchanged |
| S5 | L3 front | 20.2 | 20.2, extension 21.3 | 21.29 | 21.2 | A 21.25 cap is refused: S4's beam reach rises to 20.431 and needs a cut at 20.492 |
| S6 | L3 rear | 20.2, cut 6.22 | 21.3, cut 6.22 | 21.29 | 21.2 | Land reaches the drawn top; cut radius 19.235 unchanged |
| S7, S8 | L4 | 19.2 | 19.2, extension 20.2 | 20.24 | 19.9 | A 20.25 cap on S7 is refused: S6's beam reach rises to 19.183 and needs a cut at 19.241 |
| S9 | L5 front | 19.2 | 19.2, extension 20.0 | 19.99 | 20.2 | Land 27.27 mm from S1 against 27.26 drawn |
| S10 | L5/L6 | 19.2 | 20.0 | 19.99 | 20.2 to 19.4 | Cemented, so no extension; arc ends 37.87 mm from S1 against 37.86 drawn. At 19.2 the doublet's top would notch at the junction |
| S11 | L6 rear | 19.2 | 19.2, extension 20.0 | 19.99 | 19.4 | Keeps C1 flush, as Figure 1 draws it |

Only S10's clear aperture changes. The validator prints no errors at `gapSagFrac` 0.98, which is unchanged: the S8 and S9 lands stand 0.101 mm apart, 0.9694 of 3.2925 mm, and Figure 1 draws them meeting. The image-circle floor and the traced corner chief ray are clear at 41.7°, 21.65 mm. `audit:aperture` finds no surface under the stated on-axis ray at either printed state, real-ray tracing shows no axial clip or blocked chief ray, and the dense probe of 3.3 million rays finds none clipped and none inside a margin. `lsa.mjs` still gives −0.028 mm at full pupil.

Engine half-field 41.08°, f-number 1.47 and stop radius 12.3155 mm are unchanged. Corner transmission from the engine's full-pupil sampling moves from 29.68% to 29.86% at infinity (41.7°) and from 38.72% to 38.79% at the near state (39.7°), all of it from S10; 35.8° at infinity moves from 50.25% to 50.50%. Nothing was widened for these numbers, and leaving S10 at 19.2 would restore them at the cost of the notch. MTF at 40 lp/mm, wide open, printed planes: infinity edge 0.229 / 0.200 to 0.227 / 0.198. Every other value the analysis quotes is unchanged.

Considered and left:

- L2 stays unsquared. S3 cannot carry an extension, because its land at 14.50 mm from S1 would enter L1's land at 14.98 mm. Moving S2's cap forward allows it: S2 22.2 with S3 extension 23.2 passes only at `gapSagFrac` 0.99 and takes the engine half-field from 41.08° to 40.70°, and S2 at about the drawn cap end, 21.9, gives 40.32° and 29.49% at the corner. The half-field is already under the patent's 41.69°, so S2 stays at 22.5 and L2's top edge runs straight from 22.1 at S3 to 23.2 at the rear land. The figure draws a chamfer and a flat there, about 0.5 mm higher at mid-edge.
- S2's land stays 1.2 mm behind the drawn flange plane for the same reason, and the S4 and S6 lands stay about 0.3 mm behind theirs because the beam rule holds their cuts out.
- L10 stays at 14.0. S18 and S19 at 14.3 pass with no ray change, but that lifts the T1 corner only 0.3 mm of 1.6, and Sigma's rim reads 13.7 against Figure 1's 14.43.

Checked and found correct, no change: groups G1 (S1 to S11), G2A (S12 to S16) and G2B (S17 to S27), matching the patent's starting surfaces 1, 12 and 17 and powers −129.91, 81.81 and 42.03; ¶0034 sets the stop between G2A and G2B moving with G2B. Figure 1's parent G2 bracket is left out on purpose. Cemented brackets C1, C2 and T1 sit on S9-S11, S14-S16 and S18-S21 and do not collide with the gap labels d11, d16 and BF. L1 to L15 are sequential, and claim 1 itself calls the first meniscus L1, with `name` and `diagramLabel` equal throughout. All 15 `type` strings agree with the signs of R and with ¶0031, ¶0033 and ¶0035, all 15 `focalLengthMm` values reproduce from the thick-lens formula to 0.001 mm, and `A` suffixes sit on S3, S26 and S27 only, the three starred surfaces. The stop draws between L9 and L10. All seven `apd` tags are `"inferred"` and match Sigma's colours exactly: FLD at L3, L5 and L10, SLD at L7, L8, L12 and L13, aspherical at L2 and L15. The patent text discusses partial dispersion only in general terms (¶0018, ¶0021) and names no glass, so no tag qualifies as `"patent"`. The element inspector on L2, L3, L5, L7, L10 and L15 shows these values.

Movement, against pp. 8-9, the table on p. 15 and Figure 1's arrows: G1 is fixed (¶0031). G2A moves toward the object by 4.2435 mm (d11 5.2435 to 1.0000), G2B with the stop by 4.9011 mm (BF 38.4500 to 43.3511), and G2B gains 0.6576 mm on G2A (d16 5.9413 to 5.2837). The three spacings sum to 49.6348 mm at both states, so the track holds at 132.5954 mm. Index 0 is infinity and index 64 the near state, all three gaps are monotonic, and the `mv=focus` overlay shows both groups moving left with G1 still. The inferred path holds G2B's travel at a constant 1.155 times G2A's, while ¶0032 says the groups move independently, so `focus.description` now says that instead of calling the paths both separate and shared; it also ties the fixed length to G1 rather than to the group travel. The slider's far end reads 25 cm, from `closeFocusM` 0.2475954, beside the printed 248 mm caption and Sigma's 25 cm, and labels fall through 24.8 m, 99 cm, 33 cm and 26 cm at focus 0.01, 0.25, 0.75 and 0.95.

Aberrations against the patent's plots, read at 103.5 px/mm and 22.4 px/%. Figure 2, infinity: edge ΔM +0.19 and ΔS +0.01, ΔS minimum about −0.14, distortion about −1.47%; the model gives +0.19, +0.02, −0.13 and −1.49%. Figure 3, near: edge ΔM about −0.28 and ΔS about −0.09, ΔS minimum about −0.155, distortion about −2.4%; a finite-conjugate trace from d0 115 mm gives −0.27, −0.08, −0.15, and the engine gives −2.38%. The app's field-curvature analysis traces collimated rays at the near state, so its near curves cannot be set against Figure 3. There is no sign of an asphere or spacing slip at either state.

Glass: all 15 `glass` labels resolve. The patent prints nd and νd only, with no θgF, glass name or extra line index anywhere in the text or tables.

Glass after the second review: the seven `dPgF` values on the FLD and SLD positions were copies of the catalog rows, not patent data, because this patent prints only nd and νd. They are removed, so g now comes from each row's curve; `apdNote` says so. L2 stays unsquared: S2 22.2 would move the engine half-field to 40.70°, further below the printed 41.69°.

## 2026-10-31 — Lateral-aberration fans against the rims

Source: Figures 4 and 5 (pp. 27-28), the lateral-aberration plots at infinity and 248 mm, native 883 × 632 rasters. Their meridional fans shorten with field, so each end is a ray the design vignettes. Ends were read on columns, with pupil values normalized to the 0% fan (135.25 px either side of column 284; sagittal 118 px from column 632). One pixel is 0.007 of the pupil.

Model rays are exact d-line traces, collimated at infinity and from a finite object at d0 115 mm at the near state, because the engine's field-curvature helper launches collimated rays there. The plots' abscissa was settled from the curves, not assumed. Fitting the model's d-line aberration onto the printed solid line gives a steady scale in entrance-plane height, 8.45 to 8.50 mm at infinity and 6.85 to 7.05 mm at the near state at 90 to 100%, while a stop-plane coordinate wanders from 6.5 to 11.9. Those scales imply a stop of about 12.66 mm, inside Figure 1's 12.6 to 12.7 mm marks. The comparison below uses that stop. The model's iris stays 12.3155 mm under the one-stop rule, so this is a statement about the patent's apertures, not the model's working f-number. The plots' +x is the image-height side. The model's curves also agree: at the infinity corner about +0.011 mm near +0.36 of the pupil, as Figure 4 draws.

The rims in place before this section did not reproduce the ends: meridional RMS 0.064, 0.086 with the model's own stop. Tracing each printed end through the prescription shows why. The +x ends fall on S25 and S26 at 15.34 to 15.78 mm at infinity and 15.67 to 15.84 mm at the near state. The −x ends fall on S12 at 16.35 to 16.38 mm at infinity from 30 to 70% and 16.49 to 16.64 mm at the near state, and at infinity at 90 and 100% on S11 at 18.34 and 18.37 mm (equally S10 at 18.49 and 18.55). Three radii, S11 18.35, S12 16.5 and S25 15.72, fit all 20 ends to 0.011 RMS, about 1.4 px. The fit stays near 0.011 for stops from 12.57 to 12.75 mm, moving those radii across 18.30 to 18.37, 16.45 to 16.61 and 15.69 to 15.79.

Against Figure 1, surface by surface:

- S25: the two arcs merge into one vertical stroke at column 889 from about 15.7 mm up to 16.83 mm, on both sides of the axis, while S26's arc runs on to the top. One pixel there spans about 15.5 to 16.0 mm, which contains the fan value and excludes neither. The fan is the finer reading, and the sagittal ends, not used in the fit, support it: S25 at 15.7 moves the 100% infinity end from 0.976 to 0.955 against 0.957 printed. S25 alone is enough, because its rays meet S26 within 0.01 mm of the same height, so S26 keeps 15.9.
- S6: at the infinity corner the −x end ray stands at S2 21.78, S4 20.18, S6 18.85 and S9 18.69 mm, and Figure 1's cap ends read 21.86, 20.25, 18.76 and 19.13, each to about ±0.23. The first pass put S4's and S6's cuts outside those cap ends only because the model's beams reached 20.42 and 19.16 mm; the fans show the patent's beam does not. S6 at 18.85 mm is compatible with all 20 ends and reproduces that end. It is one end, not a constant height: the 90% end reaches only 18.46 mm there, so S6 does not fix the other −x ends. It becomes `sd` plus `rimExtensionSd` rather than a cut, as Sigma 56's S14 did, and the land's depth of 5.95 mm sits on the drawn 6.00.
- S4: with S6 real, S4's beam reach falls to 20.186 mm and the cut rule asks for 20.247, the drawn value. Depth 8.32 gives radius 20.266 on the drawn plane at 8.32. This changes no ray.
- S11 and S12: left, and reported. Figure 1 draws both as smooth arcs to the rim on the predicted columns, 483 to 485 and 554 to 560, with no land at 18.35 or 16.5 mm, and L7 reads 17.65 on the figure and about 17.3 on Sigma's drawing. The −x ends need them, or S10 18.52 for S11 and S13 16.02 for S12 at slightly worse fit.
- S2: the 21.78 mm end agrees with the drawn 21.86, but S2 stays for the half-field reason already recorded.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| S25 | `sd` 15.9, extension 16.9 | `sd` 15.7, extension 16.9 | Fan ends and sagittal ends; drawn land from about 15.7 |
| S6 | `sd` 21.3, cut 6.22 (radius 19.235) | `sd` 18.85, extension 21.3 | Corner fan end 18.85; drawn cap end 18.76 and land plane |
| S4 | cut 8.54 (radius 20.487) | cut 8.32 (radius 20.266) | Drawn land plane; beam rule now admits it |

Pupil ends, traced at the 12.66 mm stop, printed then before and after:

| Height | Figure 4, −x / +x / sagittal | Before | After | Figure 5, −x / +x / sagittal | Before | After |
|---|---|---|---|---|---|---|
| 100% | −0.711 / 0.637 / 0.957 | −0.772 / 0.677 / 0.976 | −0.712 / 0.649 / 0.955 | −0.930 / 0.672 / 0.958 | −1.046 / 0.690 / 0.960 | −1.046 / 0.666 / 0.942 |
| 90% | −0.807 / 0.756 / 1.009 | −0.895 / 0.779 / 1.030 | −0.880 / 0.754 / 1.011 | −0.959 / 0.760 / 0.992 | −1.069 / 0.767 / 0.999 | −1.069 / 0.744 / 0.982 |
| 70% | −0.919 / 0.867 / 1.034 | −1.015 / 0.879 / 1.070 | −1.015 / 0.859 / 1.055 | −0.989 / 0.849 / 1.017 | −1.076 / 0.851 / 1.028 | −1.076 / 0.832 / 1.015 |
| 50% | −0.933 / 0.889 / 1.034 | −1.028 / 0.917 / 1.067 | −1.028 / 0.900 / 1.055 | −0.989 / 0.886 / 1.017 | −1.060 / 0.891 / 1.028 | −1.060 / 0.877 / 1.015 |
| 30% | −0.941 / 0.911 / 1.009 | −1.020 / 0.948 / 1.025 | −1.020 / 0.934 / 1.025 | −0.996 / 0.915 / 1.000 | −1.053 / 0.926 / 1.020 | −1.053 / 0.913 / 1.008 |

The +x RMS falls from 0.022 to 0.012 and the sagittal RMS from 0.020 to 0.013, though the near-state +x and sagittal ends would prefer about 15.8 mm and the infinity ends about 15.65. Whole-fan meridional RMS only falls from 0.064 to 0.060, because the −x ends still need S11 and S12. The limiters at the edge are S6 and S25 at infinity, and S12 and S25 at the near state.

Engine half-field 41.08°, f-number 1.47 and stop radius 12.3155 mm are unchanged. Corner transmission from full-pupil sampling moves from 29.86% to 28.13% at infinity (41.7°) and from 38.79% to 37.73% at the near state (39.7°): S25 costs 0.80 and 0.93 points, S6 0.93 and 0.13, and S4 nothing. At 35.8° at infinity it moves from 50.50% to 49.50%, and at 11.9° from 97.58% to 96.96%. To restore the old state: S25 `sd` 15.9, S6 `sd` 21.3 with `rimCutDepthMm` 6.22 and no extension, S4 `rimCutDepthMm` 8.54. With S11 18.35 and S12 16.5 added, the corner would be 26.39% and 34.26%, which is the patent's vignetting on this evidence; the model stays brighter than that because Figure 1 does not support those rims.

MTF at 40 lp/mm, wide open, printed planes: infinity edge 0.227 / 0.198 to 0.228 / 0.194, near edge 0.219 / 0.070 to 0.225 / 0.071. Centers and the photopic values the analysis quotes are unchanged.

The validator prints no errors, the image-circle floor and traced corner chief ray are clear at 41.7°, 21.65 mm, `audit:aperture` finds no surface under the stated on-axis ray, and the dense probe finds no ray clipped by the remaining cuts. `lsa.mjs` still gives −0.028 mm. The local page at infinity and near shows both lands square and no overlap, and the overlay puts both rear lands on the drawn strokes. This section replaces the second review's line that the S4 and S6 lands stay behind their drawn planes. S25-S26 now close 0.874 of their gap and S8-S9 0.969 of theirs, so `checks.gapSagFrac` goes from 0.98 to 0.97, the smallest two-decimal value that admits the final rims.
