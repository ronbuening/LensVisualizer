# PENTAX SMC M 40mm f/2.8 — source audit

## 2026-11-02 — Deployment validation and cleanup

**Patent re-read.** US 4,154,509 read from the page images: 9 radii, 8 spacings, 5 index/Abbe pairs and the back focus, in both the example table and claim 1, which agree. Every R and d in the file is the printed value × 0.4 exactly, with d4 split into two parts that sum to 2.572 mm. No mismatches. No aspheres, no variable gaps. The table prints plain n; column 2 defines it as d-line. The bibliographic data match; the printed "Asahi Kogaku Kogyo Kabushiki Kaisha" stays in the corpus form "Asahi Kogaku Kogyo Co., Ltd.".

**Patent against model.** F = 100 / model at that scale:

| Quantity | Patent | Model |
|---|---|---|
| Focal length | 100 | 100.001 |
| Back focus | 91.90 | 91.909 paraxial |
| Length l | 41.62 | 41.62 |
| F1 | 70.13 | 70.12 |
| F1,2 | −329.93 | −329.91 |
| Petzval sum | 0.240 | 0.2404 |

All ten conditions hold. A single-slip search over 868 one-digit and sign variants found nothing to correct: the residuals are rounding, and neither the file nor the print is at fault.

**Axial contrast.** The printed back focus is the paraxial focus, 36.7637 mm computed against the 36.760 mm kept. Traced LSA of −0.150 mm at 0.7 pupil and +0.083 mm at the rim reproduces the SA curve of Fig. 2, so low f/2.8 axial contrast at that plane is a property of the design, not a slip or a wrong plane. Independent axial MTF at 30 lp/mm is about 0.11 at the plane and 0.82 at −0.12 mm. No refocus is authored.

**Stop.** Fig. 1 draws none and the text is silent. Digitized ΔS, ΔM and distortion from Fig. 2 place the chief-ray crossing 7.0 to 7.4 mm behind S1, inside L2 (rms 0.03/0.04 on the F = 100 scale). Flat-stop limits in air at f/2.8 are 4.07 to 5.83 mm in d2 and 8.91 to 10.25 mm in d4. Rms against the plots: package midpoint 9.682 mm 0.29/0.25, adopted 9.039 mm 0.18/0.17, d2 limit 5.8 mm 0.14/0.12. The stop stays in d4 because it moves only within the gap the package used and clears audit limits; the d2 position fits slightly better. Open disc clearance is S4 0.13 mm and S5 1.22 mm. The plane meets the S4 rim at sd 6.7 mm to within 0.0001 mm.

**Public diagram.** Pentax's *Lenses and Accessories* catalog, p. 5 (cameramanuals.org/pentax_pdf/Asahi_Pentax_Lenses.pdf), prints the lens in mirror order with the thin meniscus tallest and no stop mark. Reversed, the prescription has a 28.795 mm back focus, 16.66 mm inside the K-mount flange distance, so the drawing is read as flipped art of this design. Fig. 1 scaled by its axial length reads L1 7.5, L2 6.65, L3–L4 7.2, L5 8.0 mm.

**Fields changed.** Data step: stop 9.682 → 9.039 mm (S4 d 0.643, STO d 1.929), L1 sd 7.9 → 7.7, L5 sd 7.3 → 8.0, `closeFocusM` 0.6. At 28°, the f/2.8 beam passing goes from 49.5 % to 55.1 %, with a worst loss of 0.7 points at 8.4°. L1 at 7.5 mm was declined: it nets 2.6 points against package rims but costs 5.1 by itself. Cleanup step: header comment, `subtitle`, `specs`, element `role` and `focalLengthMm`, `cemented` D1 → C1, `doublets` C1, analysis rewritten in public language.

**Retail facts.** Five elements in four groups, 49 mm filter, 110 g, about 18 mm long, f/2.8 to f/22, 0.6 m minimum focus, K mount, 1976 to 1984. Lens-DB's 56.8° was seen only as a search excerpt, because the page refused the connection.

Open: the stop is inferred and the 28° curves do not fully match Fig. 2 (ΔS +0.88 against about +0.45).

## 2026-11-02 — Semi-diameter pass against the patent figure

**Result.** No `sd` changed. All four rims agree with Fig. 1 within 2.4 %, inside the 5 to 8 % noise band, and the drawn step order holds. The header note and the analysis table now state the figure as the basis; their "axial beam plus 10 %" was wrong for these rims, which clear the axial beam by 6.7 % (S3) and 7.0 % (S7).

**Source.** `patents/US4154509.pdf`, image-only, no text layer. Fig. 1 of the sole example on page 1 (larger print) and page 2, measured at the native 2320 × 3408 raster. Column 1 calls it "a simplified cross-sectional view". The patent prints no effective diameters and no lateral fans, so there is no second rim source.

**Scale.** Axis at row 299.7 of the page 1 crop. Fitted vertex columns (px): S1 74.2, S2 195.7, S3 268.3, S4 311.3, S5 389.9, S6 412.2, S7 504.4, S9 563.0. S1 to S9 is 488.8 px for 16.648 mm, 29.4 px/mm; left stroke edges give 29.2 and a line through the vertices 29.1. Adopted 29.2 px/mm. Against the fitted line single vertices sit up to 7 px (0.25 mm) off, with L2 and S6 drawn forward of the prescription.

**Stretch test.** Fitted arc radius over printed R gives the vertical scale from sy² = sx × Rp/R. S1 27.6, S3 27.6, S4 29.2, S5 28.2, S7 28.9, S9 28.0 px/mm, mean 28.2, or 0.967 of the axial scale. S2, S6 and S8 are too flat to use. A true stretch would give one ratio; these run 0.945 to 1.00, well outside the fit error, and S1 and S3 are not clean circles (rms 1.8 and 1.0 px against 0.4 px on S4 and S5). Page 2 is a uniform 0.665 reduction of page 1 on the axis and on all four rims. No stretch is proved and none is corrected; the arcs are read as drawn curvature, and the 0.967 case stands as the upper bracket below.

| Element | File sd | Page 1 at 29.2 | Page 2 at 19.5 | Upper bracket, 0.967 | Maker at its axial scale | Action |
|---|---|---|---|---|---|---|
| L1 | 7.7 | 7.52 | 7.48 | 7.78 | 7.7 | Keep: +2.4 %, held for light |
| L2 | 6.7 | 6.64 | 6.63 | 6.87 | 7.1 | Keep: +0.9 % |
| L3–L4 | 7.3 | 7.20 | 7.13 | 7.45 | 7.05 | Keep: +1.4 % |
| L5 | 8.0 | 8.05 | 8.02 | 8.32 | 8.7 | Keep: −0.6 % |

Heights are the mean of the top and bottom stroke centers: 219.5, 193.75, 210.25 and 235 px on page 1. Lower strokes are drawn heavier, so a one-sided reading moves by up to 0.1 mm. The automatic figure screen is not used: a leader widened its glass span to 514 px, so its scale runs 5 % small, and it takes outer ink rather than stroke centers. Each element draws square, so each keeps one height.

**Steps.** Drawn L2 to L3–L4 0.57 mm (file 0.6), L3–L4 to L1 0.32 mm (file 0.4), L1 to L5 0.53 mm (file 0.3), L3–L4 to L5 0.85 mm (file 0.7). The order matches. L5 is the one short step, about 0.2 mm, and its value reads correctly on its own.

**Corner cuts.** Fig. 1 draws oblique strokes at the rear corners of L1 and the front corners of L3, where the curve of S5 ends near 193 px (6.6 mm) under a 210 px edge, and a rounded upper front corner on L5. They are read as drawn bevels. The spec's land is a stroke square to the axis, S2 bends the wrong way to carry a cut, and the S5 beam reaches 6.99 mm at 28°, past that curve end, so no `rimCutDepthMm` or `rimExtensionSd` is authored.

**Clearance.** Axial marginal at f/2.8, against each rim: S1 7.14, S2 6.80, S3 6.28, S4 6.21, S5 6.31, S6 6.60, S7 6.82, S8 6.79, S9 6.81 mm. No axial clip and no chief-ray block; the 28° chief ray crosses S1 at 4.54 mm and S9 at 3.35 mm. Traced LSA is unchanged at +0.083 / −0.110 / −0.150 / −0.109 mm at 1 / 0.85 / 0.7 / 0.5 pupil. Engine half-field 28°, f/2.8, stop radius 5.99 mm, image-circle floor clear, surface validator clean, field coverage 21.15 of 21.65 mm by the declared 28°.

**Stop plane.** The S4 rim reaches z 9.03908 mm at sd 6.7 against the plane at 9.03900 mm, and exact contact is at sd 6.6996. Unchanged by this pass. The open iris clears S4 by 0.13 mm. L2 cannot rise to its upper bracket without carrying S4's rim through the plane, so 6.7 mm stands as a limit.

**Corner light.** Full-pupil transmission at the final rims, which are the rims of the data step: 100.0 to 5.6°, 99.3 at 8.4°, 96.5, 92.5, 87.2, 81.0, 73.6, 65.5 and 55.1 % at 28°, against package rims at 100.0, 96.9, 91.4, 85.1, 77.6, 69.1, 59.5 and 48.7 % from 8.4°. Worst loss against the package is 0.7 points at 8.4°.

**Trials declined.** L1 at 7.6 mm wins back 3.8 points by restoring (2.7 at 7.7), and at 7.5 mm 5.1 points, so 7.7 is the lowest rim under 3 points by itself. L3–L4 at 7.2 mm costs up to 1.5 points for a 1.4 % reading, and L2 at 6.6 mm is inside the noise and changes no light. L5 at 8.1 or 8.2 mm passes the validator and adds 0.8 or 1.0 points at 28°. At 8.2 mm it would close the L1 to L5 step, but 2.5 % is inside the noise and no order is wrong, so L5 keeps 8.0 mm.

**Maker drawing.** Pentax's catalog art, mirrored for comparison: five elements in four groups, cemented third and fourth, same sequence and shapes, no stop, no aspheric or special-glass mark. Both sources rank L5 first and L1 second. They differ below that: Pentax draws L2 as tall as L3–L4 (7.1 and 7.05 mm) where Fig. 1 keeps L2 0.55 mm lower, and its L5 stands about 1.0 mm over L1 against 0.53 mm. Its bevels sit on S3 and lightly on S5, where Fig. 1 has them on S2 and S5. The patent figure governs and no rim moved to this drawing.

**Render.** The overlay at 29.2 px/mm and the local page at infinity match Fig. 1 in order, proportion and square rims. The focus control is not modeled, so the page at `focus=1` is the same state.

Limit: the vertical scale of Fig. 1 is bracketed, not proved. If the arcs are right, every rim could stand 3 % higher, and L5 would sit lowest in that bracket.
