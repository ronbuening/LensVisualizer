# Source and numerical audit

Representative probable-family prescription; source literal millimetres retained.

- Native model SHA256: `9785d4a44a3a42355e2e9e3e3a473ee887a93dd697d6954e3d295c6efc2d7645`.
- Source archive SHA256: `be7734708703eb5334b869da0dd97236a28ee2226bd5953c30b4a616c76a5062`.
- Source CSV LF separator-only transport hash retained separately from original bytes.
- First-order methods agree; source/computed image-plane distinction retained.
- Geometry and all24 native format-reference fields pass at every advertised aperture; max delta0.0099008619.
- All raw clipping and0 aim-blocked engine failures remain in the evidence. No applied refocus or optical tuning.
- Type checking, corpus and compiled-viewer receipts are produced by the separate final integration run; this source writer does not assert those results. (Closed: the list above describes the Example 2 file as received, replaced by the section below.)

## 2026-11-02 — Deployment validation and wording pass

**Change of example.** The package modeled Numerical Example 2 and said its positive-first rear doublet agreed better with Canon's section than Examples 1 and 3. That was backwards. Canon's section draws a thin negative meniscus in front of a thick biconvex element, with the cemented face moving imageward 7 px by the rim (R about +48 mm). Examples 1 and 3 have that order; Example 2 reverses it. Uniform-scale fit to 14 surfaces of the section (about 2.47 px/mm): Example 1 1.48 px rms, Example 3 1.86, Example 2 2.45; rear doublet alone 0.52, 1.28, 3.92. The section's flat surface 2 favours Example 2 by under 1.6 px. The file was rebuilt from Example 1.

| Value | Example 2 (received) | Example 1 (now) |
| --- | ---: | ---: |
| R14, mm | −47.69 | +43.71 |
| L7 / L8 | biconvex / negative meniscus | negative meniscus / biconvex |
| EFL, mm | 99.989 | 100.016 |
| BF, mm (computed) | 41.455 | 39.602 |
| TL, mm (computed) | 118.165 | 115.662 |
| Iris radius, mm | 14.737 | 14.681 |
| D9 at infinity, near | 2.81, none | 2.66, 16.487 |
| D12 at infinity, near | 25.15, none | 24.99, 11.163 |
| `closeFocusM` | 1e15 | 0.9 |

**Source re-read.** Example 1 at 500 dpi: 15 R rows with the stop, 14 D, 8 N, 8 ν, against the data file: no mismatches. Example 2 had also matched exactly, so the change is a choice of example, not a transcription fix. The 1998 amendment adds claims 2 and 3 and corrects group 3 to positive in ¶0008; no table value or example number changes.

**Patent against model.** F 100 / 100.016, FNO 2 / 2.000, 2ω 24.4° / 24.4°. Table 1: f12/f 2.75 / 2.752, 1/ν3N − 1/ν3P 0.017 / 0.0167, |f2|/f 0.717 / 0.717, f3/|f2| 0.944 / 0.945. BF and TL are not printed. Fig. 4(A): LSA −0.069 mm at 0.7 pupil (about −0.06), distortion +0.54% at 12° (about +0.7%).

**Near state.** Solved, unpublished: 900.00 mm object to image, −0.1393×, defocus −0.00007 mm, stop fixed; Canon states 0.14×. The same solve at 1 m from the image plane gives D9 14.683, D12 12.967, f/2.27, +2.81% distortion and LSA peak −0.22 mm, against f/2.3, about +2.8% and about −0.22 mm in Fig. 4(B). A stop moving with group 2 gives f/1.84, which the plot excludes.

**Colour.** g−d against Fig. 4 (infinity paraxial, infinity top of pupil, 1 m paraxial, 1 m top): plot about 0, +0.20, +0.09, +0.45 mm; SF6 on L5/L7 −0.120, +0.081, −0.034, +0.332; S-TIH6 −0.120, +0.081, −0.034, +0.333. The two labels are indistinguishable. Both ran about 0.12 mm short while L4 had normal-line ng. L4 now carries `dPgF` +0.018978 from OHARA TPH55 (AGF PgF 0.62056, nd 1.755502, νd 25.066, tagged discontinued; no row in the repo catalog), which gives −0.034, +0.175, +0.071, +0.451 with SF6 and +0.452 at the last point with S-TIH6. `built.mjs` and `probe.mjs` output did not change. On 2026-11-02 the new catalog row for OHARA TPH55 replaced the stored `dPgF`; the row's indices give −0.012, +0.199, +0.098, +0.481 with SF6, against the same Fig. 4 readings.

**Rims.** Carried by element from the Example 2 model; within about 1 mm of Canon's section. Surface 8 takes `rimCutDepthMm` 9.0 (cut radius 19.27 mm, beams reach 15.97 mm) because its rim passed the stop plane by 0.59 mm. Field clipping is unchanged in kind: 46% geometric illumination at 12.2° and f/2. (Superseded: the semi-diameter pass below sets the land and the group 2 and L7 rims.)

**Fields changed in this pass.** Header, `subtitle`, `specs`, element `role` and `indexReferenceNote`, `focus.description` wording; analysis rewritten for Example 1, with "Verification Summary" replaced by "Model Scope and Limitations". `specs` uses INNER FOCUS: the corpus keeps REAR FOCUS for a complete rear group, and this group has group 3 fixed behind it.

Closed: L4's missing partial dispersion; with the TPH55 value g−d agrees with Fig. 4 within about 0.03 mm. Closed: Canon's section draws the surface 8 land near radius 16 mm; the land now starts at radius 16.58 mm, 0.61 mm outside the 15.97 mm beam reach (section below).

## 2026-11-02 — Semi-diameter pass against the patent figure

**Source and scale.** `patents/JPH04255813A.pdf`, page 5, Fig. 1 (Example 1 only; Figs. 2 and 3 not read), raster 2866×3895 at 347 ppi, measured at native resolution with stroke centres, each height as half the top-to-bottom distance so the axis offset of about 2 px cancels. No lateral-aberration fans exist: Fig. 4 is spherical aberration, astigmatism and distortion, so the figure is the only rim evidence. Vertex crossings S1 to S15: 650 px for 76.06 mm, 8.546 px/mm; the 14-vertex fit gives 8.504 px/mm, rms 2.0 px (0.24 mm). Height direction: circle fits to the strong surfaces S5, S7, S12, S13 and S14, above and below the axis, give sy/sx 0.968 to 1.034, mean 0.996. The stop tick opening reads 126 px half height, 14.74 mm at 8.546 px/mm, against the 14.68 mm iris, 0.4% apart. The figure is not anamorphic. Weak surfaces S1, S2 and S15 are drawn more curved than printed; that does not touch rim heights.

**Readings and changes.**

| Surface | Stored | Fig. 1 | Figure/stored | Final | Evidence and reason |
| --- | ---: | ---: | ---: | ---: | --- |
| 1, 2 | 27.50 | 26.80 | 0.975 | 27.50 | Kept: 2.5%, order right; 26.8 costs 2.2 to 2.4 corner points. |
| 3, 4 | 25.75 | 24.69 | 0.959 | 25.75 | Kept: 4.1%, order right; 24.7 costs 3.9 to 4.1 points on its own. |
| 5, 6 | 22.25 | 21.56 | 0.969 | 22.25 | Kept: 3.1%; 21.6 costs 1.9 points. |
| 7, 8 | 19.75 | 19.10 | 0.967 | 19.75 | Kept: 3.3%; 19.1 costs 1.7 points. |
| 10, 11 | 15.50 | 14.74 | 0.951 | 14.70 | Moved: L5 stands above L6 in the figure, and the rim is level with the stop tick. Costs 0.0 points at infinity, 0.2 at 0.9 m, with surface 12. |
| 12 | 15.50 | 14.07 | 0.908 | 14.10 | Moved: 9.2%, and the wrong step order against L5. |
| 13 | 17.25 | 16.18 | 0.938 | 17.00 | Moved by the drawn step only: L7 stands 0.26 mm below L8. |
| 14, 15 | 17.25 | 16.44 | 0.953 | 17.25 | Kept: 4.7%. 16.4 with 13 at 16.2 costs up to 7.7 points. |

Surface 8 `rimCutDepthMm` 9.0 becomes 6.24, cut radius 19.27 to 16.58 mm. The curve meets the land stroke at half height 137 px and the edge is 163.25 px, so q = 0.839, range ±0.011 at 8.546 px/mm; q × 19.75 mm gives 16.57 mm. The land stroke centre is at 30.86 mm by the vertex fit, against 31.15 mm in the model, inside the drawn stroke. Reach is 15.97 mm, margin 0.05 mm, clearance 0.61 mm, clipped rays 0 over 21 focus states. Surface 8 keeps `sd` 19.75, so land length is 3.17 mm against 3.07 mm drawn.

Surface 11 is a cemented junction, which takes no land or extension, so L6's drawn step at the junction is rendered as a slope from 14.7 to 14.1 mm; the drawn curve of S11 reaches L5's top, so it keeps L5's rim. `gapSagFrac`, `rimExtensionSd` and the iris are unchanged.

**Clearance.** Exact trace of the iris-limited axial beam, independent of the engine: infinity S1 24.37, S5 21.17, S7 18.75, S8 15.65, S10 14.02, S11 13.71, S12 12.89, S13 10.95 mm; 0.9 m S1 23.25, S5 20.71, S7 18.34, S8 15.50, S10 11.03, S11 10.75, S12 10.24, S13 9.47 mm. All pass at both states. Stated f/2 pupil at infinity: S10 14.41, S11 14.10, S12 13.23 mm, also clear; `lsa.mjs` output is unchanged and no rim rose. No `CLIPS-AXIAL` or `BLOCKS-CHIEF`. The surface validator, image-circle floor, field coverage (100%, 21.65 mm at 12.2°), aperture census and dense cut probe are all clean. Engine half-field 12.20° and f/2.000 before and after.

**Corner light.** Geometric transmission from the app's full-pupil lattice, wide open. Infinity, 8.1° / 10.1° / 12.2°: 87.5 / 68.6 / 46.0% before, 86.7 / 68.5 / 46.0% after. Mid focus, 9.3° / 11.1°: 84.6 / 61.3% before, 84.3 / 61.3% after. 0.9 m, 8.6° / 10.3°: 92.8 / 82.5% before, 92.6 / 82.5% after. Worst loss is 0.7 points, at 8.1° at infinity, from surface 13; the group 2 rims and the land cost 0.0 at infinity. Group 3 already vignettes the top of the bundle hard enough at the fields where group 2 would clip, which is why those rims are free.

**Maker drawing.** Canon Camera Museum section, 276×251 px, about 2.47 px/mm: 8 elements, 6 groups, same order, negative-first rear doublet; L1 28.5, L2 25.2, L3 22.3, L4 19.2 to 20.6 (stepped), land start 15.8, L5 14.8, L6 13.7, L7 and L8 about 17.8 mm. It agrees with the patent on L5 above L6 and on a land near 16 mm. It disagrees on group 3, about 1.4 mm taller than Fig. 1 with no step, and it draws a stepped L4 rim the patent does not. It marks no special glass or aspherical element. The stored rims of L1, L3 and L4 lie between the two drawings; L2 is above both. Rims were not fitted to it.

**Limitations.** The rims of L1 to L4 and of the rear doublet stay 0.65 to 1.06 mm outside the figure; moving every rim to the figure costs 9.3 points at 10.1°. The overlay and the live renders at infinity and 0.9 m match the figure in order and proportion.

## 2026-11-02 — Second review: diagram, labels and movement

**Compared.** The local page at infinity and 0.9 m, both `mv=focus` overlays and the inspector for L4 and L6, against the table (pp. 3–4), ¶0008 to ¶0022, Fig. 1 (p. 5), Fig. 4 (p. 6), the front page and Canon's section. The table reads as stored, 15 R, 14 D, 8 N, 8 ν. Front page: Hiroshi Endo, Canon, filed 1991-02-07, published 1992-09-10.

**Rims.** No rim changed. Re-measured from the raw 2866×3895 raster at 8.546 px/mm, half the distance between top and bottom stroke centres: L1 26.80, L2 24.69, L3 21.56, L4 19.07, L5 14.71, L6 14.07, L7 16.18, L8 16.50 mm, within 0.06 mm of the first pass.

| Surface | Kind | Fig. 1 | Baseline | Final | Light it costs, points | Verdict |
| --- | --- | ---: | ---: | ---: | --- | --- |
| 10, 11 | cut | 14.71 | 15.50 | 14.70 | with 12: 0.0 at infinity and mid focus, 0.2 at 8.6° at 0.9 m | keep: slight |
| 12 | cut | 14.07 | 15.50 | 14.10 | counted with 10 and 11 | keep: slight |
| 13 | cut | 16.18 | 17.25 | 17.00 | 0.7 at 8.1° at infinity, 0.3 at 9.3° mid focus, 0.0 at 0.9 m | keep: slight |
| 8 | land, cut radius | 16.48 | 19.27 | 16.58 | 0.0 at all three states, against no land and against depth 9.0 | keep: slight, and both drawings show it |

The final `rimcost.mjs` worst loss is 0.7 points at 8.1° at infinity, against a budget of 3; the worst at 0.9 m is 0.2. Corners at infinity, 8.1° / 10.1° / 12.2°, stay 86.7 / 68.5 / 46.0% against baseline 87.5 / 68.6 / 46.0%.

**Surface 8 land.** It is not held by a spacing refusal. The surface validator accepts the file with the land deleted, and the iris sweep reads only the radii the iris reaches, up to 14.68 mm. Without the land the cap passes the stop plane by 0.585 mm above radius 19.27 mm. The land stays because it costs no light and Fig. 1 and Canon's section both draw it. The cap end reads 136 px on these strokes against 137 in the first pass, one native pixel, 16.48 against 16.57 mm, so depth 6.24 holds.

**Rims above the figure.** Gaps are L1 +0.70, L2 +1.06, L3 +0.69, L4 +0.68, L7 +0.82, L8 +0.75 mm, at most 5.1%. Each step toward the figure costs light at once: 0.25 mm off L1, L2, L3 or L4 gives a worst loss of 1.1, 1.8, 0.9 or 0.7 points, and off the rear doublet 2.2, all counting surface 13's 0.7. The remaining 2.3 points stay unspent: order and proportions already match, and the gaps sit inside the noise a repaint needs to clear.

**Cemented steps.** `elementShapes.ts` joins an element's front and rear rims with one edge, and a cemented face takes one height and no land. L6's flat top at 14.07 mm therefore renders as a slope from 14.70 to 14.10, and L7's as a slope from 17.00 to 17.25. Surface 11 at 14.1 would slope L5's square block; an extension on surface 12 would raise L6 level with L5 and lose the drawn order. Neither improves the picture.

**Labels.** G1, G2 and G3 bracket surfaces 1–8, 10–12 and 13–15, the patent's groups 1, 2 and 3; the G avoids a clash with the element numbers under the diagram. C1 and C2 bracket the two cemented pairs and do not collide with D9 or D12, which appear only beside the slider. The patent has no L designators, only ordinals, so sequential L1 to L8 and the diagram's 1 to 8 agree without `diagramLabel`. All eight `type` strings follow the signs of R; all eight `role` strings are true against ¶0010 to ¶0014, and every `focalLengthMm` matches `probe.mjs`. The stop sits between L4 and L5 at the printed position. There are no aspheres. No `apd` tag is due: neither the patent nor Canon's section marks special glass.

**Movement.** ¶0009 and the arrow under group 2 in Fig. 1, repeated on the front page, move group 2 toward the image from infinity to near. Keyframe 0 is the printed 2.66 and 24.99 mm, the last the solved 16.487 and 11.163 mm. D9 + D12 is 27.65 mm at both ends, so groups 1 and 3 stay fixed, and the stroke is 13.83 mm. `probe.mjs` gives 900.00 mm object to image at −0.1393×. The slider's far end reads 90 cm. The stop is fixed in the model and on the page; ¶0022 prefers one moving with group 2, but that gives an iris-limited f/1.91 at 1 m against the printed 2.3.

**Colour.** The patent prints d and g only. Model values come from a separate exact trace at the paraxial pupil edge, 25.0 mm; plot values come from the raster at 227.5 px/mm from the local axis line, reading error about 0.02 mm. The model's C and F sit +0.142 and −0.128 mm from d paraxially at infinity, with nothing printed to compare.

| State | Pupil | d, plot / model | g, plot / model | g−d, plot / model |
| --- | ---: | --- | --- | --- |
| Infinity | paraxial | 0 / 0 | about 0 / −0.012 | about 0 / −0.012 |
| Infinity | 0.7 | −0.066 / −0.069 | about +0.01 / +0.011 | about +0.08 / +0.081 |
| Infinity | top | +0.03 / +0.040 | +0.21 / +0.238 | +0.18 / +0.199 |
| 1 m | paraxial | 0 / 0 | +0.09 / +0.098 | +0.09 / +0.098 |
| 1 m | 0.7 | −0.20 / −0.198 | +0.062 / +0.061 | +0.26 / +0.258 |
| 1 m | top | −0.17 / −0.173 | +0.30 / +0.295 | +0.475 / +0.468 |

The worst difference is 0.03 mm, so TPH55 on L4 holds and no line needs an element named. The first pass's +0.481 and +0.45 at the top at 1 m came from another pupil edge and a coarser reading; the analysis now quotes +0.47 against +0.47.

**Astigmatism and distortion.** Plot (A) reads by object angle and plot (B) by image height, top 21.26 mm.

| Plot | Field | ΔS, plot / model | ΔM, plot / model | Distortion %, plot / model |
| --- | ---: | --- | --- | --- |
| A | 8° | −0.07 / −0.064 | −0.07 / −0.066 | +0.31 / +0.31 |
| A | 10.5° | −0.042 / −0.040 | −0.108 / −0.056 | +0.46 / +0.47 |
| A | 12° | +0.02 / +0.021 | −0.12 / −0.027 | +0.60 / +0.54 |
| B | 0.5 | −0.09 / −0.082 | −0.146 / −0.140 | +0.73 / +0.70 |
| B | 0.7 | −0.12 / −0.122 | −0.205 / −0.202 | +1.39 / +1.38 |
| B | 0.9 | −0.116 / −0.109 | −0.172 / −0.166 | +2.30 / +2.27 |
| B | top | −0.06 / −0.063 | −0.07 / −0.072 | +2.8 / +2.80 |

Only ΔM in (A) past 10° differs, and it is not a data fault. At 12° surfaces 1 and 15 limit the bundle to stop heights −10.5 to +4.5 mm, and a ray at the middle of that, −3.0 mm, gives ΔM −0.127 and ΔS +0.01 mm, as plotted; the stop-centre chief ray gives the model's −0.027. The patent appears to plot the vignetted bundle's centre. In (B) a true 12° object angle gives +3.88% at 25.1 mm, off the plot, so "+2.8% at 12°" in `focus.description` and the analysis now reads at 21.3 mm image height.

**Results.** Engine half-field 12.20° and f/2.000 before and after. The surface validator, image-circle floor and field coverage (100%) pass, with no `CLIPS-AXIAL` or `BLOCKS-CHIEF`. All eight glass labels resolve. The live page at infinity and 0.9 m matches Fig. 1 in order and proportion; the overlay and renders are in the session scratch folder, r2/canon100.

**Limitations.** The cemented steps stay slopes. L1 to L4 and the rear doublet stay at the gaps above; Canon's section lies above Fig. 1 at L1, L3, L4 and the rear doublet, so those rims sit between the two drawings, while L2 stands above both. The near gaps remain solved, not printed. The vignetted-bundle reading of Fig. 4(A) is an inference from one field.
