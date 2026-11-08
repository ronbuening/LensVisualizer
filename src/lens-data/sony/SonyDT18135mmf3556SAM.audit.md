# Audit Log - Sony DT 18-135mm F3.5-5.6 SAM

Patent: US 2013/0155294 A1, Example 1

## 2026-11-06 — Package history

- Source: US 2013/0155294 A1, Numerical Example 1 (Tables 1–3), transcribed unscaled. The package modelled Example 1
  as a whole and left Example 2 as an alternative it had not ruled out.
- Printed: 28 surfaces with R, d, nd and νd; stop at surface 15; aspheres on surfaces 6 and 23 (k and A–E); zoom gaps
  D5, D14 and D20 at three stations; f, Fno and 2ω at each station.
- Derived, not printed: the back focus. Table 1 leaves the last gap blank; the package used the paraxial image distance
  at each station, 38.532360045 / 59.394801154 / 83.601164867 mm.
- The two 0.15 mm layers (nd 1.53420, νd 41.73) on surfaces 6 and 23 were kept as separate media, so the model has 16
  media for 14 physical elements. Their material is not named by the patent.
- Semi-diameters are inferred. S8/S9 were capped at 9.743 mm and S18/S19 at 8.570 mm, where the facing surfaces
  intrude 90% of their axial gap; S23A was set to 9.5 mm, inside the 9.589 mm radius at which its sag stops
  increasing. The rims were fixed before any ray checks, and no source value was changed afterwards.
- Focus: infinity-only. The patent names G2 as an example focusing group but prints no close-focus data; the package
  used the repo's infinity-only `closeFocusM` value with duplicated focus rows.
- Glass: every element kept its printed nd/νd with an Unmatched label and Abbe-number dispersion.
- The stop radius follows the printed f-number at each station; the package reported all three stations as
  iris-limited and the chief rays to the patent's field as unclipped, with sampled corner transmission of about
  44.6 / 71.4 / 81.9% at W / M / T.
- Open at packaging: which example Sony produced, and the material of the two layers.

## 2026-11-08 — Deployment validation and production cleanup

Source re-read. Tables 1–3 (PDF p. 17) were re-read from page renders: all 28 surfaces (R, d, nd, νd), the stop at
surface 15, the cemented runs 1–3, 6–8, 16–18, 23–25 and 26–28, both aspheres (k plus A–E) and the nine zoom gaps match
the file with no mismatches. The asphere expression (¶0078) has (1 + k) in the radical, the engine's convention, so
surface 6's k = +1 is literal. The front page matches `source`: Sony Corporation; Hideki Kai and Syuuji Maki;
published 20 June 2013; priority JP 2011-278265 (20 December 2011).

Patent vs model, first order (W / M / T):

| Quantity | Patent | Model |
| --- | --- | --- |
| f (mm) | 18.56 / 50.01 / 130.89 | 18.564 / 50.040 / 130.997 |
| Fno | 3.61 / 4.43 / 5.79 | 3.61 / 4.43 / 5.79 (stop set from the printed value) |
| 2ω | 78.1° / 30.9° / 12.2° | real chief rays at the printed ω land at Y = 14.20 / 14.23 / 14.24 mm |
| BF (mm) | not printed | 38.532 / 59.395 / 83.601 (paraxial) |

Table 7's conditional values reproduce: f3/f4 = 2.180 (2.18), ft/R31 = 4.631 (4.6), (R35 + R31)/(R35 − R31) = 0.165
(0.17), f4r/f4 = 2.538 (2.54), condition (5) = 5.06E−05 (5.1E−05), ft/ΔX1 = 2.254 (2.26). Longitudinal spherical
aberration stays under 0.11 mm at all three stations, so no misprint is indicated. Group focal lengths: +88.50,
−13.83, +81.26 and +37.27 mm.

Maker comparison. Sony Japan's feature and specification pages give 14 elements in 11 groups, two aspherical elements,
one ED element, 0.45 m minimum focus, 0.25× magnification, f/22–36 minimum aperture, seven blades, 62 mm filter,
76.0 × 86.0 mm and 398 g. Sony's construction diagram places the aspheres at L21 and L42 (the patent's surfaces 6 and
23) and the ED element at L41 (1.49700/81.61), all as in Example 1. Example 2 uses 1.49700/81.61 in both L41 and L44,
which would be two ED elements, so it does not fit Sony's construction; the package's statement that Example 2 is an
equal alternative was wrong. At wide, the front vertex sits 128.54 mm from the image, about 84 mm ahead of the
A-mount flange (44.5 mm), against Sony's 86.0 mm length. The inferred rims follow Fig. 1A's proportions to within about
5%.

Changes in this pass (optics unchanged; `built.mjs` and `probe.mjs` output identical apart from the slider maximum):

- `key` `sony-18-135-e1-research-preflight` → `sony-dt-18-135mm-f35-56-sam`; `name` → `SONY DT 18-135mm f/3.5-5.6
  SAM`; files renamed to `SonyDT18135mmf3556SAM.*`.
- `subtitle` rewritten as `US 2013/0155294 A1, Example 1 — production correlation to Sony SAL18135`; nine disclaimer
  spec lines replaced by five house-style lines (14/11, design f, design F, 2 aspherical surfaces / 2 elements,
  1 ED element).
- Catalog: added `lensMounts: ["sony-a"]`, `focalLengthMm.marketing [18, 135]`, `fNumber.marketing 3.5`,
  `closeFocusM.marketing 0.45`. `imageFormat "aps-c"` and `imageCircleMm 28.4` kept: the patent's 2ω implies the
  28.4 mm circle, so the earlier note that it is not a patent dimension was removed.
- Aperture: `fStops` extended to f/22 and `maxFNumber` 16 → 22 (Sony's wide-end minimum aperture); `blades: 7` added
  from Sony's specifications.
- Focus: kept infinity-only; the description now states plainly that the patent names G2 but prints no close-focus
  spacings.
- Elements: M1–M16 renamed to the patent's L11–L44, with `Element N` labels, shape types, specific roles, calculated
  focal lengths and `diagramLabel`s. The two layers are `Aspherical Resin Layer` entries (`L21r`, `L42r`) with
  `Unmatched (optical resin layer; vendor not identified)`.
- Glass: the 14 glass bodies relabelled to catalog equivalents that match printed nd exactly and νd within 0.03:
  FDS90, TAC8, TAF1, TAFD5F, FCD1, NBFD10, E-CF6, FC5 (HOYA) and N-SK11 (SCHOTT). Dispersion now comes from catalog
  curves instead of Abbe estimates for all but the two layers.
- `apd: "inferred"` on L41 (1.49700/81.61, FCD1 class), Sony's single ED element.
- Added `groups` (G1–G4) and `doublets` (C1, H1, C2, H2, C3); the last gap is labelled `BF`; the header comment was
  rewritten; the analysis was rewritten to the house skeleton without the "terminal zero" wording, the Example 2 claim
  and the image-circle disclaimer.
- Rims: none changed. `audit:aperture` reports all three stations within 3% of the printed f-number with no rim limit.

Checks after the edits: the surface audit prints OK; the aperture audit finds no rim, trace or iris limit; the
image-circle audit lists no undersized surface for this lens. At the wide-end corner the rims vignette the bundle
mostly at surfaces 4–5 (up to about 60% of one side) and at the front of G4 (about a third), consistent with the
figure.

Open:

- No close-focus data exist in the patent; the G2 focus movement is not modelled.
- The layer material (1.53420/41.73) has no catalog match and stays on Abbe-number dispersion.

## 2026-11-08 — Second review: diagram, labels and movement

Compared: Fig. 1A (sheet 1 of 10, PDF p. 2, headed "EXAMPLE 1" and "WIDE-ANGLE END"; ¶0014 and ¶0025 tie Figs. 1A–1C
to Numerical Example 1) at its native 300 dpi, against the live page at 18.56 mm and an overlay of the model outline on
the figure. Scale: 23 vertex crossings fit the wide-end prescription at 8.158 px/mm with residuals of 1.7 px or less;
arcs of surfaces 8 and 21 fit 8.0–8.3 px/mm across the axis, so the drawing is not anamorphic. The axis line tilts
0.3° on the sheet and was followed; left and right rims agree within 1–2 px, and the stop tick sits 51.8 mm behind
surface 1 (model 51.83 mm).

Figure readings (mm): L11 27.9; L12 26.8, square; L13 22.1–22.2; L21 14.1 outside, with surface 8 curving to about
10.3 mm and a flat rear annulus out to 14.1; L22 a square block of 10.4 whose curves both end at about 8.65–8.7 mm
inside flat lands; L23 10.0–10.1; L24 9.0–9.2; L31/L32 8.76; L33 9.1, square; L41 10.3; L42 10.05, its front face
running to the rim and its rear curve ending at about 8.8 mm inside a land; L43/L44 11.1, square.

Cuts, lands and raises (light = worst loss against the baseline rims over every field at the three stations and at
zoom fractions 0, 0.125 … 1, full-pupil lattice):

| Surface | Change | Figure reading | Baseline | Final | Light | Verdict |
| ------- | ------ | -------------- | -------: | ----: | ----: | ------- |
| 8 | land | curve to ~10.3, annulus to 14.1 | 9.743 | 9.743, land to 14 | 0.0 | keep: slight; figure-drawn L21 annulus |
| 9 | cut + land | curve to ~8.7, land to 10.4 | 9.743 | 9.45, land to 10.4 | 0.0 | keep: slight |
| 10 | cut + land | curve to ~8.65, land to 10.4 | 10.3 | 9.45, land to 10.4 | 0.0 | keep: slight |
| 19 | raise | 9.1, L33 square | 8.57 | 9.0 | 0.0 | L33 square with surface 20 |
| 25 | cut + land | curve to ~8.8, land to 10.05 | 10.1 | 9.3, land to 10.1 | 0.0 | keep: slight |

The L22 and L42 caps stop at the lowest values that cost nothing. At the figure's own cap heights the wide-angle
corner loses 12.6 points (surfaces 9/10 at 8.8 mm, 36.3°) and 5.3 points (surface 25 at 8.8 mm, 39.0°); 9.2 mm costs
3.6 and 0.2 points, and surface 9 at 8.7 mm would sit under the corner chief ray (8.74 mm). Retained within the band:
surface 8's cap (the figure's 10.3 mm is 5.7% higher; a raise past about 9.85 mm is refused by the 8/9 cross-gap limit
with the lands, and would add up to 12 points of corner light); L12 (27.9/27.2 against a square 26.8; surface 2 is
cemented and cannot carry L11's drawn annulus); 23A (the figure's 10.05 mm is past the 9.59 mm turnover); every other
face within 3%. Final `rimcost.mjs` worst loss: 0.0 points. Corner transmission is unchanged at 44.6% (39.0°, wide),
72.1% (15.4°, 50 mm) and 81.9% (6.1°, tele). Engine half-field 33.57 / 17.96 / 8.63° and f-number 3.61 / 4.43 / 5.79
are unchanged; analyses still reach the 39.05° corner by real chief ray. The surface audit prints OK, the aperture
audit finds no rim limit, the image-circle audit lists nothing for this lens, field coverage is 100% at all three
stations, and the clearance trace shows no clipped axial or chief ray.

Labels and tags found correct: `name` = `diagramLabel` = the patent's L11–L44 (Fig. 1A, ¶0081–0083), with L21r/L42r
for the bonded layers; every `type` agrees with the signs of R and with ¶0081–0083; all 16 `focalLengthMm` values
recompute (thick lens) to the stored figures; roles are true; the stop is surface 15 between L24 and L31 (¶0027);
only 6A and 23A carry the asphere suffix (Table 2); brackets G1–G4 and C1/H1/C2/H2/C3 span the right surfaces and do
not clash with D5/D14/D20/BF. The inspector shows L41 as APD (INFERRED), FCD1, +27.54 mm, the validator's record of
Sony's ED position; the patent text names no special glass and prints d-line data only (¶0076). The hybrid layers
read "Aspherical Resin Layer", Unmatched, −288.17 / +225.23 mm, labelled DOUBLET H1/H2 as in other hybrid files.

Movement: stations ascend 18.56 / 50.01 / 130.89 mm and every gap lists them in that order (Table 3). With the image
fixed, G1 moves 25.90 + 32.17 = 58.07 mm, G2 3.44 + 14.20 = 17.64 mm, G3 16.02 + 22.05 = 38.07 mm and G4
20.86 + 24.21 = 45.07 mm toward the object, all monotonic, as ¶0028 states; the zoom motion chart shows the same. No
focus movement is modelled; `focus.description` now says the patent names G2 only as an example (¶0029).

Aberration plots (Figs. 4–6) are d-line only (¶0088), so no colour comparison is possible. Model distortion at image
height ratios 0.5 / 0.75 / 0.9 / 1.0 is −2.41 / −4.75 / −5.73 / −5.71% at wide (Fig. 4C about −2.5 / −4.8 / −5.6 /
−5.5), +2.88% at mid and +1.77% at tele at full field (Figs. 5C, 6C about +2.8 and +1.7). The traced field angles at
0.5 / 0.9 / 1.0 relative height, 21.40 / 36.14 / 39.05°, match the printed 21.41 / 36.15 / 39.06° (mid and tele
likewise). Mid-zoom astigmatism (S −0.10 mm, T −0.24 mm at 0.8 and −0.14 mm at full field) and tele marginal
spherical aberration (+0.11 mm against about +0.08 mm) agree with Figs. 5B and 6A within reading error.

Glass: the layer pair 1.53420/41.73 recurs on surfaces 6 and 23 of Example 2 (Table 4, PDF p. 18), so it is a real
material, but the patent gives no name, line indices or partial dispersion for it.

Open:

- Both items above stay open: the patent has no close-focus data, and the layer material has no catalog dispersion.

## 2026-11-08 — Third review: diagram, labels and movement

Fig. 1A (PDF p. 2, Example 1 at the wide end per ¶0014 and ¶0025) was re-measured against the live page at all three
stations and a new overlay. Scale: 23 vertex crossings fit 8.157 px/mm (residuals 1.6 px or less), six arc fits give
7.7–8.3 px/mm across the axis, and the stop tick sits 51.8 mm behind surface 1 (model 51.83 mm). The 1200 dpi rims agree
with the second review's readings within reading error, so no rim changed. Fig. 1A draws L21's rear annulus, L22 as a
square block whose curves end at about 8.6–9.0 mm inside flat lands, L42's rear land (curve to about 8.9 mm) and L33
square at 9.1 mm.

Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points at the three stations and at zoom
fractions 0, 0.125 … 1. Restoring any element's baseline rims, its land included, wins back 0.0 points. A separate
`--noext` run for each land alone was refused by a tool permission check and was not repeated.

Labels, types, roles, focal lengths and tags read correctly in the inspector. The two resin layers show "Aspherical
Resin Layer", Unmatched, −288.17 / +225.23 mm, and trace on Abbe-number dispersion (nC 1.53041, nF 1.54321,
ng 1.55055), so no medium has constant dispersion. Sony's construction diagram colours L21 and L42 as aspherical and
L41 alone as ED, which supports L41's inferred tag. Movement is unchanged: all four groups move monotonically toward the
object (G1 58.07, G2 17.64, G3 38.07, G4 45.07 mm), and `focus.description` matches ¶0029 and ¶0073. The plots are
d-line only (¶0088), so no colour comparison is possible.

Open:

- Close focus: the patent names G2 only as an example (¶0029) and prints no spacings. A reconstruction to Sony's 0.45 m
  would be the owner's decision.
- The resin layer 1.53420/41.73 (also on surfaces 6 and 23 of Example 2) has no name, line indices or partial dispersion
  in the patent, so it stays on Abbe-number dispersion.
