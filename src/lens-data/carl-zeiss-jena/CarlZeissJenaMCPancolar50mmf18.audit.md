# Source and reconstruction audit

All five supplied transport packets passed exact byte-count/SHA256 checks, and all12embedded source members were decoded and verified. The original packets are retained. Full primary originals remain unchanged in the source archives linked by the cards; local Nokton/Macro access is the selected primary numerical/figure pages, not a claim of viewing every full-PDF pixel here.

Patent PDF5 and maker1978 crop directly viewed; front meniscus, cemented pair, separated inner negative and rear positive pair. Cap endpoints distinguished from beveled/outer envelope. Nominal stop55% of central axial gap is schematic-inspired, not printed/calibrated.

Native source radius/interval/index/Abbe values remain literal, with only the declared Pancolar0.5 dimensional scale. All three authored image planes follow printed source intervals. Source residuals and raw/failed/rejected hypotheses remain explicit.

The50% and60% alternatives retain the same source optics, total central air gap, frozen SDs and printed image plane. Their wide-open native source-angle MTF runs each converge at0°/11.5°/23°. These are stop-hypothesis sensitivities, not evidence that either plane was historically used.

Current geometry accepts the frozen nominal case with zero hidden trim; exact operating-disk checks cover every advertised modeled aperture. Normal source-angle pupils retain losses and overlapping raw/certified categories. Native MTF is reference/design and conditional; no SD/stop/source-plane choice was selected by more favorable contrast.

Finite tables are preserved outside the initial infinity-only implementation. Canonical closeFocusM1e15 is used without a UI patch (closed 2026-11-02: `closeFocusM` is now 0.35, static). Modeled stop-down controls are not asserted to prove the minimum retail aperture.

The reviewed1978 maker crop names Praktica variants but does not explicitly identify a camera fitting. Mount metadata is left unset pending an explicit primary fitting source (closed 2026-11-02: `lensMounts` is now `["m42"]`); the50mm/f1.8 MC six/five model is distinct from prior f/2 and six/four entries.

## 2026-11-02 — Deployment validation and wording pass

Source re-read from the 300 dpi scan of DD 77 830: 11 radii, 10 thicknesses and air spaces, s′ and 6 nd/νd pairs from the single table on Blatt I, no mismatches at the 0.5× scale. Nineteen of the 21 R and d cells back out to round millimetre values at k = 1.9119 (f ≈ 52.30 mm, s′ = 38.025 mm), which confirms those digits independently; r6 and r7 are not round. The patent prints no close-focus data and no aberration plots. All claim 1 conditions hold: l3 = 0.038 f, r3 + r5 + |r6| + |r9| = 1.646 f, nII − nIII = 0.0784, νdII − νdIII = 20.3, νdV − νdIV = 23.3.

First-order values, patent then model at 0.5×: f 50.00 and 50.0229 mm; F/1.8 and 1.800; back focus 36.350 mm and 36.3805 mm paraxial, with the final gap held at the printed 36.350 mm; half-field 23° and a chief ray of 20.85 mm at 23.00°. Real-ray LSA is +0.189 / −0.089 / −0.152 / −0.115 mm at pupil 1 / 0.85 / 0.7 / 0.5.

The residuals of −0.0305 mm in back focus and +0.0229 mm in EFL are larger than table rounding explains. A single-slip search over 3087 digit, sign, transposition, dropped-digit and column-swap variants found one joint fit: n3 1.5995 → 1.5992 gives f 100.003 and s′ 72.698 at f = 100, or 50.0017 and 36.3488 mm here. The scan reads 1,5995 clearly, the claim limit on nII − nIII does not separate the two values, and chance is not excluded, so the printed value stands. L3 is also the only element with no catalog equivalent.

The patent figure was read as isotropic from the r1 and r11 sags (corrected 2026-11-02: arc fits put its heights 3.0 % short of its axial scale, see the semi-diameter pass below). Vertices agree with the table, and the iris is drawn at 56.5–57.3 % of l2, against the modeled 55 %. The 1978 catalogue section shows the same six elements in five groups, the same bevels on the rear of III and the front of IV, and the same nearly flat r7 and r8. Read from the upscaled crop, IV sits about 2 to 2.5 units rearward at f = 100 and the IV–V air space reads about 2.5 against 3.824; the line width of about 1.4 units limits that reading. The catalogue draws no stop.

Fields changed in this pass: data header comment, `subtitle`, `specs`, the six element `role` strings and `focus.description`. The analysis lost its process wording, test-run counts and solver columns, and its first-order heading was renamed. Its contrast table was rounded to three decimals from the earlier run and was not recomputed. Its glass text now follows the catalog-equivalent labels, and its focus text follows the static model.

Rim pass (closed 2026-11-02: S3, S4 and S6 changed, see the semi-diameter pass below; the rim list, transmission figures and contrast table in the analysis are refreshed). An isotropic figure reading at 0.5× gives S1–2 14.6, S3–4 13.2, S5 about 10.4, S6 cap 9.2–9.4, S7–9 11.3 and S10–11 12.7 mm; current rims run 4–5 % larger, and S6 10.6 exceeds the figure, whose cap falls below the 9.57 mm axial beam. A trial at 14.6/14.6/13.2/13.2/10.4/9.7/11.3/11.3/11.3/12.7/12.7 gives vignetting of 47 % and 34 % at 20.9° and 23.8°, against 55 % and 41 % now. A rim change must refresh the rim list, the transmission figures and the contrast table in the analysis.

Open: production scale. The design scale is 0.52304×, the model uses 0.5× for the marketed 50 mm, and no measured focal length was found.

Open: MC in Exakta is unconfirmed, so `lensMounts` stays `["m42", "praktica-b"]`. No maker source states the focus mechanism, so the model stays static.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: `patents/DD77830A1.pdf`, page 5 (Blatt II), the sole figure, native 300 dpi, axis horizontal. The drawn axis runs 2.5 px down over 1035 px, so heights use the local axis, and element midlines sit 1.5 to 4.4 px above it, so heights come from top-to-bottom diameters. The outline stroke is about 5.5 px.

Axial scale: stroke centres at the 11 vertices against the table at 0.5×, 815 to 1622 px over 33.65 mm, 23.98 px/mm; a line through all 11 gives 24.06 px/mm, RMS 2.5 px, worst 4.3 px.

Transverse scale: tracking the arcs and comparing their sag with the printed radius gives a height ratio of 0.970 ± 0.004. Means of both sides in the highest zone traced on both: r1 0.968, r3 0.971, r5 0.972, r6 0.969, r9 0.976, r11 0.971; lower zones read 0.96 to 0.97. r2, r4 and r10 are too flat to test. The vertical scale is therefore 23.26 px/mm, 3.0 % under the axial one. An overlay at 23.26 px/mm lays the model arcs on the drawn arcs over the full height; at 23.98 px/mm they leave the ink on L2 and L5.

The cause is not settled. The six binder holes on pages 1 to 3 average 0.997 width over height by second moment, range 0.977 to 1.008, so the scan is not the source; the printed sheet or the drawing is. Hatch lines run 43° to 50° by element and do not test it. The rim decision below does not depend on this: every retained rim is also inside the noise band on the uncorrected reading (+4.4 to +5.4 %).

| Surface | Before | After | Figure, corrected | Figure, uncorrected | Evidence |
| --- | ---: | ---: | ---: | ---: | --- |
| 1, 2 | 15.3 | 15.3 | 15.0 (14.9–15.05) | 14.5–14.6 | Inside noise, and costs light; kept |
| 3 | 14.0 | 13.5 | 13.5 (13.45–13.6) | 13.1–13.2 | Figure draws one flat rim from S3 across S4; 1.0 mm slant removed |
| 4 | 13.0 | 13.5 | same | same | Same rim; also restores L2/L3 above L6 |
| 5 | 10.7 | 10.7 | 10.5 (10.5–10.6) | 10.2–10.3 | Inside noise; kept |
| 6 | 10.6 | 9.7 | 9.3 (9.2–9.35) | 9.0–9.1 | Cap 12 % under the old rim; held at the axial floor |
| 7, 8, 9 | 11.8 | 11.8 | 11.5 (11.5–11.6) | 11.15–11.25 | Inside noise, and costs light; kept, square |
| 10, 11 | 13.2 | 13.2 | 13.0 (12.95–13.05) | 12.55–12.7 | Inside noise, and costs light; kept |

S5 and S6 are read at the corner where cap meets bevel; the drawn step S5 above S6 holds at 10.7 and 9.7, and each corner lands within about 6 px, 0.25 mm, of the figure along the axis.

Light, full-pupil lattice wide open, percent at 0.0 / 3.0 / 6.0 / 8.9 / 11.9 / 14.9 / 17.9 / 20.9 / 23.8°: before 100.0 / 100.0 / 98.0 / 92.9 / 86.1 / 77.9 / 68.0 / 55.3 / 41.0, after 100.0 / 100.0 / 97.0 / 91.9 / 85.9 / 77.6 / 67.8 / 55.3 / 41.0. The worst loss is 1.05 points at 6.0°, all of it from S3 at 13.5, and the corner does not move. S4 and S6 cost nothing. At the corrected reading for every face the loss would be 4.65 points at 14.9°: S7–9 at 11.5 take 2.7 at 14.9°, S1–2 at 15.0 take 2.0 at 17.9°, S10–11 at 13.0 take 1.2 at 20.9°. If closer rims are wanted, 15.1/15.1/13.5/13.5/10.5/9.7/11.6/11.6/11.6/13.1/13.1 meets the 3-point rule at 2.97 points; it was not taken because those moves sit inside the noise band.

Clearance: the axial marginal ray at S6 is 9.57 mm at the nominal f-number, but the wide-open stop of 9.814 mm admits slightly more than the traced 9.771 mm. A rim of 9.6 clips 0.5 % on axis and 9.65 clips 0.3 points at 3.0°; 9.7 is clear at every field, so it is the 0.1 mm floor. The aperture census shows no surface below the on-axis ray, the surface validator passes with `gapSagFrac` unset, the image-circle check prints nothing, and the corner chief ray reaches 21.65 mm at 23.8° unclipped. Engine half-field stays 28.10°, F/1.800, entrance pupil semi-diameter 13.895 mm and stop 9.814 mm. The static model has one state; screenshots at both ends of the focus control match.

The analysis rim list, the 11.5° transmission, now about 87 % (11182 of 12892 lattice rays), and the f/1.8 11.5° contrast row were recomputed. The same run reproduced the earlier table digit for digit on the old rims, and the other five rows did not change.

The 1978 catalogue section, read at 4×, has the same six elements in five groups, the square L2/L3 rim with its rear bevel, the L4 front bevel, and the same rim order, L1 > L2/L3 > L6 > L4/L5 and S5 above S6. Heights over L1, catalogue, patent, final model: L2/L3 0.93, 0.90, 0.88; S5 0.69, 0.70, 0.70; S6 0.66, 0.62, 0.63; L4 0.78, 0.77, 0.77; L5 0.80, 0.77, 0.77; L6 0.87, 0.87, 0.86. It draws L2/L3 a little taller, S6 a little higher and L4 just under L5; none of this was used.

Bevels (closed 2026-11-02: lands were tried and rejected in the second review below, so the straight edges stay as a recorded model limit): the patent draws the L3 and L4 bevels as a flat shoulder then a chamfer of about 45°. The model has no bevel, so each rim is a straight edge from cap to rim, up to about 1.4 mm inside the drawn corner. `rimExtensionSd` is a vertical land the figure does not draw, so it was not used.

## 2026-11-02 — Mount and aperture metadata

`lensMounts` gains `praktica-b`: Phillip Reeve's review dates the Praktica B version to 1979–82, after the six-element, five-group form replaced the earlier design. Exakta stays out because no source ties an MC Pancolar to that mount. `aperture.blades` is 6 from the same review and Kamerastore's electric MC listings. The review gives f/16 as the Praktica B version's minimum aperture; the model keeps the catalogue's f/22.

## 2026-11-02 — Second review: diagram, labels and movement

The local page was compared with `patents/DD77830A1.pdf` page 5 (Blatt II, the figure) and page 4 (Blatt I, the table) at native 300 dpi, and with the 1978 catalogue crop. Names below are the patent's; L1 to L6 in the sections above are I to VI in order.

### Figure, re-measured

Twelve arc tracks, both sides of r1, r3, r5, r6, r9 and r11, against the printed radii at 24.0 px/mm axial give heights of 23.10 to 23.82 px/mm, mean 23.36, so the figure is 2.7 % short across the axis. That confirms the semi-diameter pass's 3.0 %, and its readings stand to 0.1 mm.

Top-to-bottom stroke centres at that scale: I 695 px, 14.9 mm; II/III 628 px, 13.4 mm; IV and V 535.5 px each, 11.5 mm; VI 604.5 px, 12.9 mm. IV and V share the same rows above and below the axis, so the figure draws them at one height. Cap ends: S5 490 px, 10.5 mm; S6 433 px, 9.3 mm. Height order in the model and the figure is the same: I > II/III > VI > IV/V > S5 > S6.

The bevels: on III the flat shoulder ends 1.03 mm behind the S5 vertex and a 45° chamfer runs to the tip 4.12 mm behind it. On IV the shoulder ends 0.71 mm ahead of the S6 vertex and a chamfer of about 49° runs to the tip 2.58 mm ahead of it. Both tips are sharp in the figure. Apart from these two edges the only visible differences on the page are the small amounts listed in the second table.

### Cuts and lands

| Face | Kind | Figure | Baseline | Final | Light cost, points | Verdict |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| S3 | Cut | 13.4 | 14.0 | 13.5 | 1.1 at 6.0° | Keep: slight; S3 and S4 form the one flat rim the figure draws |
| S6 | Cut | 9.3 | 10.6 | 9.7 | 0.0 | Keep: slight; held above the figure at the axial floor |
| S5 land | Trial, `rimExtensionSd` 11.6 | none drawn | none | none | 0.0 | Not added: the figure draws no vertical stroke |
| S6 land | Trial, `rimExtensionSd` 10.1 | none drawn | none | none | 0.0 | Not added: same, and it gains nothing |

S4 rose from 13.0 to 13.5 on the same flat rim; that raise has figure support and costs nothing. The file has no land. Final `rimcost.mjs` worst loss against baseline rims is 1.1 points at 6.0°, inside the 3-point budget. Restoring S3 and S4 wins back that 1.1, restoring S6 wins back 0.0, and the validator refuses neither, so no rim here depends on spacing.

Percent transmitted at 0.0 / 3.0 / 6.0 / 8.9 / 11.9 / 14.9 / 17.9 / 20.9 / 23.8°: baseline 100.0 / 100.0 / 98.0 / 92.9 / 86.1 / 77.9 / 68.0 / 55.3 / 41.0, final 100.0 / 100.0 / 97.0 / 91.9 / 85.9 / 77.6 / 67.8 / 55.3 / 41.0. The corner is 41.0 % before and after.

Rims left above the figure, none of which moved:

| Faces | Final | Figure | Gap | Light to reach the figure | Why it stays |
| --- | ---: | ---: | ---: | ---: | --- |
| S1, S2 | 15.3 | 14.9 | 0.4 | 2.0 at 17.9° | Costs light for a move inside the noise band; S2 alone is free but would slant a square rim |
| S5 | 10.7 | 10.5 | 0.2 | 0.0 | S6 cannot go lower, so 10.5 shrinks the drawn step over S6 further, 1.2 mm drawn, 1.0 now, 0.8 then |
| S7, S8, S9 | 11.8 | 11.5 | 0.3 | 3.2 at 8.9° | Over budget alone; S7 alone is free but would break the height IV and V share |
| S10, S11 | 13.2 | 12.9 | 0.3 | 1.2 at 20.9° | Costs light for a move inside the noise band; S10 alone is free but would slant a square rim |

A land cannot draw these bevels. The outline joins each face's rim point with one straight edge, so a land adds one vertex at the cap end, and a shoulder plus a chamfer needs a vertex at the corner. On III the best height, 11.6 mm, cuts the largest miss from the drawn outline from 1.25 to 0.89 mm and the area between the two outlines from 5.02 to 4.20 mm². It also blunts the sharp tip, runs the outline 0.9 mm past that tip and brings its top up against the STO label. A full-height land at 13.5 makes the miss worse, 2.22 mm. On IV the best height, 10.0 mm, moves the miss from 0.85 to 0.75 mm and the area from 4.02 to 3.98 mm². Both lands were shot on the live page and laid over the figure before they were removed. The straight edges stay, with the III edge up to about 1.3 mm inside the drawn corner.

### Labels and text

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| Element `name`, `diagramLabel` | L1–L6, diagram 1–6 | I–VI | "Linsen-Nr." on page 4 and the figure on page 5 number all six lenses; the patent's own l1–l4 are air spaces |
| Element `label` | Element 1–6 | Element I–VI | Follows the names, as the Kodak Ektar 52 mm does |
| `doublets`, element `cemented` | D2 | C1 | The only cemented pair; d2 is a thickness in the figure |
| Element V `role` | Air space, "L4" | Names IV and the air lens l3 | Claim 1, page 3: "Luftlinse (l3)" |

The brackets stay G1 to G5. The patent's Roman numerals number lenses, not members: they run to VI, so a bracket III would sit over lens IV. The patent calls the lens "fünfgliedrig" and describes its five members in words without numbering them. The ranges 1–2, 3–5, 6–7, 8–9 and 10–11 match those members. The analysis and the header comment follow the new names.

Checked and correct: every `type` agrees with the signs of R; the patent prints no asphere and none is modelled; the stop sits between III and IV; every element has a `focalLengthMm` and the stored values match the probe. II and III together come to −205 mm, the "zerstreuendes" front inner member of the claim. No `apd` tag is set: the patent names no glass and the catalogue marks none. All 22 R and d cells and the 12 index and Abbe cells match page 4 at the 0.5× scale.

The iris stroke sits at x = 1210 between vertices 1091.7 and 1301, 56.5 % of l2 against the modelled 55 %. The drawn opening is 443 px across, 9.5 mm in radius, against the engine's 9.81 mm. Neither was changed.

### Movement and aberrations

The lens is static. The patent prints no focus table or figure arrows, and `focus.description` says so. The slider's far end reads "Not modeled", `focus=1` draws the same section, and `mv=focus` reports no modeled focus or zoom movement for five groups.

The patent prints no aberration plots, so C, d, F and g, astigmatism and distortion have nothing to be compared with. For the unmatched III, pages 2 to 4 give only nd = 1.5995 and νd = 35.2, with λ = 587.6 nm for the index difference in claim 1; no glass name, line index or partial dispersion.

### Final state

The validator passes with `gapSagFrac` unset, the image-circle check prints nothing, the corner chief ray reaches 21.65 mm at 23.8° clear, and the clearance trace shows no axial clip or blocked chief ray. Engine half-field is 28.10° and F/1.800 before and after, entrance pupil 13.895 mm, stop 9.814 mm.

Page 1 reads "Erfinder zugleich Inhaber", so Dannberg and Risch held the patent themselves; `source.assignees` is empty.
