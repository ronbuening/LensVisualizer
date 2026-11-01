# Audit Log — PENTAX SMC A 200mm f/4

Patent: US 4,550,987, Example 1 / claim 3

## 2026-11-01 — Deployment validation and cleanup

**Patent re-read.** Read from the USPTO scan (10 pages, no text layer): the Example 1 table on PDF p. 7 and its repeat in claim 3 on PDF pp. 8–9. Checked at ×2 against the data file: 12 radii, 12 spacings including fB, and 6 index/Abbe pairs. d8 × 2 = 21.28 mm = 2.128 + 19.152. There are no aspherical surfaces or variable gaps. Mismatches: none. The front page agrees with `source` on number, year, inventor and assignee. The patent prints no focus mechanism, close-focus data, stop position, clear apertures or spectral line for n.

**Patent vs model** (patent ×2 / model). EFL 200 / 200.03 mm; F-number 4.0 / 4.000; back focus 65.00 / last gap 65.00 mm, paraxial 65.03 mm; summed track 160.46 / 160.46 mm; half-field 6.3° / 6.3°. The printed f1, f1,2,3, f1,2,3,4 and |f5,6| compute as 0.730, 0.667, 0.506 and 0.406f, as printed. The iris is 12.97 mm under the paraxial stop rule (decisions.md, 2026-10-27). The real marginal ray through it enters at 24.42 mm, a working aperture of f/4.10; a real f/4 beam would need 13.29 mm at the stop. No lens surface clips the axial beam.

**Fig. 2 trace.** An exact trace with Coddington field curves, at infinity and the d-line on the f = 100 scale, compared with readings from the native-resolution scan (read / computed): spherical aberration at the zone −0.069 / −0.066, zero crossing about 94 % / 93 % of the aperture; sine condition −0.149 / −0.146; distortion at 6.3° +1.02 / +1.00 %; DS at 6.3° −0.033 / −0.033; DM at 6.3° −0.058 / −0.051 at the file's stop. This supports the infinity state and d-line indices. Distortion and DS barely move with the stop. DM at 6.3°, 5.0° and 3.9° bounds the stop to about 56–70 mm behind S1 at ×2, which contains the file's 67.81 mm and excludes mid-d8 (76.3 mm). With the catalog labels the paraxial g-line focus sits +0.116 from the d-line focus; Fig. 2 reads about +0.13.

**Maker diagram.** SMC PENTAX-A manual section, printed p. 38, PDF p. 41 (https://www.cameramanuals.org/lenses/pentax_smc_a_lenses.pdf). Axial positions in px along the drawing, against Example 1 ×2 at 4.36 px/mm: L1 front 44 / 44; L3 rear about 116 / 116; L4 318–333 / 317.6–330.4; stop tick 340 / 339.6; L5 front 421 / 423; L6 442–460 / 444–460. Every position is within about 3 px. The stop tick is right behind L4, which confirms the file's stop. Its d8/d6 reads about 0.44. Outline widths give semi-diameters of about 26.4 mm at L1, 14.9 mm at L4, 10.1 mm at L5 and 13.2 mm at L6, against 27, 15.93, 12.15 and 13.5 mm in the model.

**Length.** S1 sits 115.0 mm from the K flange (160.46 − 45.46 mm), but lens-db lists a 111 mm barrel, so production may be a variant of Example 1. Example 2 ×2 gives 109.9 mm but is F/4.1. The section's proportions do not separate them: d8/d6 is 0.46 for Example 1 and 0.42 for Example 2. Examples 3 and 4 are near 0.2 and use a 1.49700/81.6 crown.

**Product.** A 200/4: 6 elements / 6 groups, f/32, 1.9 m, 52 mm filter, 111 mm, 405 g, 1983 (lens-db) or 1984 (Cine Lens Wiki). M 200/4: 6/5, 1977, 2 m. JP 53-27422 (Takahashi, Asahi Kogaku, priority 1976) has L5 and L6 cemented; this patent separates them, which matches the step from 6/5 to 6/6. The A* 200/2.8 ED (77 mm filter) does not fit, no F 200/4 was found, and no other corpus file carries this lens or patent. `PentaxA200mmf4MacroED` is US 4,666,260.

**Fields changed.** Header comment added; `subtitle`; `catalog.specs` added; `focus.description`; `role` added to all six elements; `groups` FRONT and REAR added for the patent's front and rear telephoto groups. The analysis was rewritten to the skeleton, and its process text left. `key`, `name`, `glass` and `closeFocusM` changed in earlier commits on this branch. `R`, `d`, `nd`, `vd`, `sd`, `aperture`, `projection` and `source` are unchanged.

Open: production may be a variant of Example 1. A maker dimension for S1 or a measured front-element position would settle Example 1 against Example 2.

Open: the 12.5° full field that the package cited from the manual's product table (printed p. 33) was not re-read and is not used in the analysis.

## 2026-11-01 — Semi-diameter pass against the patent figure

**Source and scale.** Fig. 1, PDF p. 2, read at the scan's native 2320 × 3408 px. Along the axis, stroke-centre vertices give S1–S12 994.5 px / 95.46 mm = 10.42 px/mm, S1–S7 654 px / 62.76 mm = 10.42 and S7–S12 340.5 px / 32.70 mm = 10.41. Across the axis, the mean of the upper and lower branch of an arc against its known R gives 10.45 to 10.60 px/mm on S1 at 147, 197 and 247 px from the axis, and 10.45 to 10.56 on S5 at 154, 204 and 244 px. The figure is not anamorphic: the two scales agree within 1 %. One branch alone misleads, because the drawing is skewed: upper rims sit 5 to 12 px to the right of lower rims, so S1's upper branch fits 10.2 and its lower branch about 10.9. An overlay of the model at 10.42 px/mm lies on the drawn arcs.

**Readings.** Fig. 1's outline is about 5 px wide (0.5 mm). Half the top-to-bottom distance between stroke centres gives the table's figure column; half the distance between the stroke's outer edges gives L1 26.15, L2 26.05, L3 25.72, L4 15.69, L5 11.95 and L6 13.2 mm.

| Surfaces | Before | Fig. 1 | After | Basis |
|---|---|---|---|---|
| 1, 2 (L1) | 27 / 27 | 25.93 | 26.5 / 26.5 | Lowest 0.1 mm value that holds the 3-point limit; 0.35 mm past the drawn line |
| 3, 4 (L2) | 26.73 / 26.73 | 25.77 | 26.0 / 26.0 | Square-cut as drawn; inside the drawn line; lower values fail the limit |
| 5, 6 (L3) | 26.46 / 26.19 | 25.5 | 25.5 / 25.5 | Figure value; the figure draws one height, so the 0.27 mm step goes |
| 7, 8 (L4) | 15.93 / 15.93 | 15.45 | 15.4 / 15.4 | Figure value; costs no light |
| 9, 10 (L5) | 12.15 / 12.15 | 11.66 | 11.9 / 11.9 | Square-cut as drawn; inside the drawn line |
| 11, 12 (L6) | 13.5 / 13.5 | 12.93 | 13.3 / 13.3 | Lowest 0.1 mm value that holds the limit; 0.1 mm past the drawn line |

STO is unchanged. The moves are 1.5 to 3.6 % of each rim, inside the usual reading noise. They were made because the earlier rims were Fig. 1 scaled up as a whole so that S1 reached 27 mm, a known offset rather than a misreading.

**Choice of set.** Taking one surface to the figure costs, at the corner, S1 4.2, S2 3.2, S3 2.5, S4 0.25, S5 0.13, S6 to S9 nothing, S10 2.4, S11 2.2 and S12 3.2 points. S4 and S5 cost most at 2° (1.05 and 0.68). Taking whole elements to the figure, all six cost 7.43 points, and the largest sets inside 3 points are L3 + L4 + L5 (2.35) and L2 + L3 + L4 (2.48). L1 alone costs 4.21. L3 + L4 + L5 + L6 costs 3.35; with L6 at 13.0 mm it passes at 2.79, but it leaves L1 and L2 at 27 and 26.73 mm above a 25.5 mm L3, a 1.23 mm step where the figure draws 0.3 mm. The overlay rejected that set. L2 + L3 + L4 with L1 at 26.3 mm passes at 2.60 and leaves both rear elements 0.5 to 0.6 mm high. A greedy raise from the all-figure state gives 26.55, 25.95, 11.9 and 13.3 mm at 2.85 points. Rounding to 0.1 mm and taking the lowest L1 that passes gives the set above, at 2.97 points. L1 at 26.4 mm fails at 3.28, and L6 at 13.2 mm fails at 3.35 with any L1. Each element keeps one height, four of the six lie within the drawn line, and the worst remaining excess is 2.9 % at L6.

**Relative illumination** (package rims / these rims, full-pupil lattice at f/4, infinity): 2.0° 98.9 / 97.4 %; 3.1° 94.7 / 92.9 %; 4.1° 90.1 / 88.4 %; 5.1° 85.1 / 83.5 %; 6.1° 78.4 / 75.5 %. The largest drop is 2.97 points at 6.1°. With all six at the figure the corner would be 71.0 %.

**Clearance.** Axial marginal ray at f/4 against the rim: S1 25.00 / 26.5 mm, S3 24.56 / 26.0, S5 24.03 / 25.5, S7 14.13 / 15.4, S9 8.39 / 11.9 and S11 8.34 / 13.3. No surface clips the axial beam or the chief ray. The trace reaches 21.65 mm at 6.12°, and the image-circle check reports nothing undersized. The surface validator passes, the aperture audit stays within 3 % of f/4 with no rim limit, and no `gapSagFrac` or `maxRimAngleDeg` is needed. Engine half-field 6.3° and F-number 4.000 are unchanged, and the stop stays 12.97 mm. The estimated tracing limit moves from 12.96° to 12.78°, still S1. Drawn step order holds: L1 > L2 > L3 by 0.5 and 0.5 mm (Fig. 1: 0.16 and 0.27 mm), and L4 > L6 > L5.

**Maker section, re-read.** Stroke-centre widths on the supplied crop of the manual's section, at the same 4.36 px/mm as the axial table above, give L1 25.97, L2 25.67, L3 25.73, L4 14.68, L5 11.56 and L6 12.88 mm. These replace the 26.4, 14.9, 10.1 and 13.2 mm in the validation section. L5's parallel sides are about 101 px apart, not 88, so the section does not draw L5 smaller than Fig. 1. The section shows six air-spaced elements in the patent's order, the diaphragm ticks behind L4, and chamfered corners on L5. Apart from L4 it agrees with Fig. 1 within 0.25 mm, which supports the figure scale. It was used as a check only.

**Live check.** The local page serves these rims and draws six elements with the front three nearly level, as in Fig. 1. There is no zoom and focus is not modeled, so infinity is the only state.

Open: L1 sits 0.6 mm and L6 0.4 mm above their Fig. 1 readings. Finishing the cut would take the corner from 75.5 % to 71.0 %, past the 3-point limit, so these rims follow the light rule rather than the figure.
