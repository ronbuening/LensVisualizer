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
