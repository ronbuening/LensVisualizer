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

## 2026-11-02 — Second review: diagram, labels and movement

**Result.** One element changed: L5 8.0 → 8.2 mm on both faces, decided on the height ratios of Fig. 1. `focus.description`, the header and the analysis now say the patent names no focusing group or motion. The cut on L1 passes the 3-point rule, there are no lands, and `checks.gapSagFrac` is not set. Labels, tags and the static state are correct. The model's g-line curve agrees with Fig. 2.

| Faces | Element | Figure reading, 29.2 px/mm | Baseline | Before | Final | Verdict | Light |
|---|---|---|---|---|---|---|---|
| S1, S2 | L1 | 7.52 | 7.9 | 7.7 | 7.7 | Cut, keep: slight | Restoring wins 2.7 points at 22.4°; the whole lens loses 0.7 at 8.4° |
| S3, S4 | L2 | 6.64 | 6.7 | 6.7 | 6.7 | Not a cut, unchanged | None |
| S5 to S7 | L3–L4 | 7.19 | 7.3 | 7.3 | 7.3 | Not a cut, unchanged | None |
| S8, S9 | L5 | 8.05 | 7.3 | 8.0 | 8.2 | Raised above baseline on the figure | Gains 7.4 points at 28° against baseline |

The final `rimcost.mjs` worst loss against baseline rims is 0.7 points at 8.4°.

**Re-measure.** Stroke centers on the native 2320 × 3408 raster, top and bottom averaged about the axis: page 1 L1 219.75, L2 194, L3–L4 210, L5 235.25 px; page 2 146, 129.25, 139.75, 156.5 px. These repeat the first pass at the same 29.2 px/mm: L1 7.52, L2 6.64, L3–L4 7.19, L5 8.05 mm.

**L5.** The millimeter reading depends on the vertical scale, which is bracketed from 28.2 to 29.2 px/mm and puts L5 between 8.05 and 8.32 mm. The ratios of the heights do not. They repeat within 0.3 % between the two printed sizes, far inside the 2.5 % the first pass took as noise for an absolute reading.

| Ratio | Page 1 | Page 2 | L5 at 8.0 | L5 at 8.2 |
|---|---|---|---|---|
| L5 / L1 | 1.071 | 1.072 | 1.039 | 1.065 |
| L5 / L3–L4 | 1.120 | 1.120 | 1.096 | 1.123 |
| L5 / L2 | 1.213 | 1.211 | 1.194 | 1.224 |
| L1 / L3–L4 | 1.046 | 1.045 | 1.055 | 1.055 |
| L1 / L2 | 1.133 | 1.130 | 1.149 | 1.149 |
| L3–L4 / L2 | 1.083 | 1.081 | 1.090 | 1.090 |

Over the six ratios the rms error falls from 1.8 % at 8.0 mm to 0.9 % at 8.2 mm, against 1.2 % at 8.1 mm and 1.4 % at 8.3 mm. L1, L3–L4 and L2 each imply L5 at 8.25, 8.18 and 8.12 mm. All four final rims fit one vertical scale of 28.72 px/mm to 0.06 mm, which is 0.983 of the axial scale and inside the bracket; at 8.0 mm the same fit leaves L5 0.13 mm short. The drawn step from L1 to L5 is 0.53 mm, and it was 0.3 mm on the site and is now 0.5 mm. Pentax's drawing asks for more, not less: mirrored and read by eye, half-heights 343, 311, 311 and 390 give L5 / L1 of 1.14. The light gain, 1.0 point at 28°, played no part. The audit's earlier "L5 keeps 8.0 mm" stood on the absolute reading alone.

**L1.** L1 stays at 7.7 mm, 2.4 % over the axial reading. The 3-point rule would admit less: L1 7.5 with L5 8.0 loses 2.6 points at 11.2° as a whole lens, and L1 7.6 with L5 8.2 loses 1.5 at 8.4°. Neither is taken. The first leaves L1 / L3–L4 at 1.027 against 1.046 drawn (rms 1.4 %), and the second gains 0.3 % of rms, which is inside the noise, for up to 1.5 points of light.

**Stop plane and L2.** L2 keeps 6.7 mm. The S4 sag at 6.7 mm is 0.64308 mm against the 0.643 mm gap, an overrun of 0.00008 mm, with exact contact at sd 6.6996. That is below the 0.001 mm precision of the gap, which was itself rounded from this sag, so at the file's precision the rim and plane are in contact. The iris stroke stays in air, because `irisInAir` tests radii up to the open 5.99 mm, where S4 clears the plane by 0.131 mm. Dropping to 6.69 mm would add a cut with no figure or ray reason: against the other rims the ratios put L2 at 6.75 to 6.81 mm, so the plane already holds it low. On the site at 3× the iris runs from 5.09 mm, where the outer ray passes, to the 6.7 mm housing, which is the smaller neighbouring rim. It stands in the air gap, leaves S4's curve to the left, and its outer end meets L2's rear rim corner. The overrun is 0.003 px at that scale and invisible. No change.

**Silhouette against Fig. 1.** Step order, square rims and proportions now match. Differences that remain are the first pass's and are not authored: drawn bevels on the rear corners of L1 and the front corners of L3, the rounded upper front corner of L5, and heavier strokes on the right-hand faces. S5's beam reaches 6.99 mm at 28°, past the 6.65 mm where the drawn curve ends, so an L3 bevel would cost light and fail the rule. L3–L4 is 1.4 % over the axial reading and on the 28.72 px/mm line, so it stays.

**Labels and tags.** `L1` to `L5` are the patent's names in the column 4 tables, and the inspector shows them. The diagram shows ids 1 to 5, the same sequence, so no `diagramLabel` is needed. The patent names no groups, so there is no `groups` block. Bracket `C1` spans S5 to S7, and it collides with nothing because no gap varies. Each `type` agrees with the signs of R. L5's "Positive Meniscus" matches the patent's wording. There are no aspheres and no `apd` tags: the patent names no special glass and Pentax's drawing marks none. Inspector read for all five elements: focal lengths +28.05, −19.17, −31.97, +22.36 and +50 mm, matching an independent thick-lens calculation, with roles true to the patent. The doublet is +61.96 mm.

**Movement.** Static. Columns 1 to 4 and the tables contain no focusing text; the only related terms are back focal length and "Backfocus = 91.90 = 0.919F". The slider reads "Not modeled", `focus=1` is the same state, and `mv=focus` reports no modeled movement. `focus.description` previously said only that the infinity state is printed; it now states the silence. The retail lens's focusing method is not claimed.

**Axial colour.** Fig. 2 digitized at native resolution, ticks at 92.5 px per unit, h = 1 at the top of the curves. Model values are the engine's C/d/F/g channel trace with the catalog equivalents; the d values match `lsa.mjs`. F = 100 scale:

| Quantity | Fig. 2 | Model |
|---|---|---|
| d low point | −0.38 at 0.67 | −0.375 at 0.70 |
| d zero crossing | 0.95 | 0.955 |
| d at 0.98 | +0.22 | +0.14 |
| g low point | −0.15 at 0.56 | −0.12 at 0.55 |
| g zero crossing | 0.79 | 0.74 |
| g at 0.90 | +0.44 | +0.42 |
| g at 0.944 | +0.69 | +0.63 |
| g at 0.98 | +1.04 | +0.89 |
| g − d near axis | merged in the stroke | +0.009 |

Agreement is within 0.07 up to 0.94 of the pupil and 0.15 at the top, or 0.06 mm at this scale. The patent prints no g-line data, so this is the only outside test of the catalog equivalents, and they pass. At full aperture the model has g − d = +0.80, or 0.32 mm.

**Field and corners.** Engine half-field 28.00° and f/2.8 before and after, stop radius 5.99 mm, chief ray clear at 28°, surface validator clean, image-circle floor clear, field coverage 21.15 of 21.65 mm by the declared 28°. Full-pupil transmission at the final rims: 100.0 to 5.6°, 99.3, 96.5, 92.5, 87.2, 81.0, 73.6, 65.8 and 56.1 % at 28°. Before: the same to 22.4°, then 65.5 and 55.1 %. Baseline: 48.7 % at 28°.
