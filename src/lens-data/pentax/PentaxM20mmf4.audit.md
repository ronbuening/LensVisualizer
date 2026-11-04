# PENTAX SMC M 20mm f/4 — reconstruction audit

## 2026-11-03 — Whole-source reconstruction

**Source.** US 4,062,622 Example 2 (Fig. 3, Fig. 4) was read from the page images, with DE 2620571 C3 (description and claim table) as the family check. All 16 radii, 15 spacings, 8 index/Abbe pairs and the back focus of 180.770 agree between the US description and both German occurrences. US claim 6 prints r12 = 38.348 and d12 = 44.878 against 138.348 and 4.878 everywhere else; the claim values are treated as misprints and not used. No value was fitted or spliced from Example 1. Pentax's catalog section (p. 110) and table (p. 125: 8/8, f/4, 94°, 20 mm) were compared with Fig. 3.

**Geometry at F = 100 (as first built).** Paraxial EFL 100.0007; printed back focus 180.770 kept as the last gap, Gaussian back focus 180.7675 (−0.0025, unapplied). Semi-diameters were read from Fig. 3: L1 80 inside a 74 to 86 range from the DE figure's axial calibration. The first S4 value of 39.5 exceeded the 39.421 radius and was replaced by 35.0. Caps 5 % smaller passed the normal checks; caps 5 % larger failed the rim-slope limit and were rejected. The diaphragm sits at the midpoint of d8 = 9.757, with 40 % and 60 % splits kept as sensitivity cases. The model is infinity-only (`focus.closeFocusM` 1e15).

**Metadata.** The first version carried design 100 / marketing 20 focal-length metadata, which correctly triggered the engine's unverified-scale guard on the MTF tab.

## 2026-11-03 — Unscaled F = 100 convention (superseded 2026-11-04)

The marketing focal length was dropped so the model could stay at the patent's F = 100 scale, following the convention then used by the Pentax-M 28mm file. Diffraction MTF estimates were tabulated at that scale (spatial frequencies in lp/mm at F = 100); the f/4 47° edge converged only through 20 lp/mm. Closed: the model is now scaled to 20 mm (next section), and those tables, which do not apply at 20 mm, are removed from the analysis.

## Package records

Archive, transfer and integration records belong to the six-lens package this lens arrived in, not to the lens, and are not repeated here.

## 2026-11-04 — Wording, glass and metadata pass

**Scale.** Every R, d, sd and element focal length is the F = 100 value × 0.2, and `catalog.focalLengthMm` is design 20 / marketing 20. Engine: EFL 20.0001 mm, BFD 36.1535 mm against the 36.154 mm last gap, total length 70.741 mm, F/4, half field 47°, stop radius 4.114 mm. Model at F = 100 against the printed values: F1,2,3 −58.03 (−58.038), F1,2,3,4 −240.65 (−240.385), F1–6 153.80 (153.846), Petzval sum 0.0516 (0.052); all four conditions hold.

**Fields changed.** `name` PENTAX SMC Pentax-M 20mm f/4 → PENTAX SMC M 20mm f/4 and `key` pentax-smc-m-20mm-f4 → pentax-m-20mm-f4, matching the M 40 and M 50 files; the new key was unused. `subtitle`, `specs`, header comment, `focus.description` and every element `role` rewritten for the scaled model. `catalog.closeFocusM` marketing 0.25 added (Pentax's minimum focus); `focus.closeFocusM` unchanged. The analysis was rewritten for the 20 mm model, with the F = 100 MTF tables removed.

**Glass.** The table names no line; every pair matches a d-line catalog glass, so the d-line reading stands and the per-element hypothesis notes were removed. Relabels from Unmatched, Δ = catalog − patent: L1 and L2 S-BSM16 (OHARA) Δnd +0.000001, Δνd −0.010; L3 BACD15 (HOYA) Δnd 0, Δνd +0.02; L4 E-FD1L (HOYA) Δnd 0, Δνd 0.00; L5 S-BSM18 (OHARA) Δnd −0.000001, Δνd −0.02; L6 K-SFLD6 (SUMITA) Δnd 0 (formula value +0.000009), Δνd 0.00; L7 S-FSL5 (OHARA) Δnd 0, Δνd +0.136; L8 K-BK7 (SUMITA) Δnd 0, Δνd 0.00. Each is the closest catalog row. The patent prints no partial dispersion, so there is no PgF to compare.

**S4 rim.** At 20 mm the corner of the 21.65 mm format needs a 47.7° chief ray, which reached S4 at 7.05 mm against the 7.0 mm rim. S4 7.0 → 7.06 mm, the least value that clears it (7.05 still clipped). Fig. 3 at its axial scale (38.3 px/mm at 600 dpi, S1 to S16) draws the S4 face to about 7.6 mm above and 7.7 mm below the axis before the step to the outer land, so the widening stays inside the drawn outline; the rim-slope limit for R = 7.884 mm is 7.10 mm. S3 (10.7 mm) is the drawn outer land and needed no change. Only the diagram's slope-launch tracing field moved, 36.49° → 36.72°; EFL, BFD, F-number, stop radius and focus keyframes are unchanged.

**Checks.** Surface audit OK; image circle not undersized; aperture within 3 % of f/4. Field coverage 97 %, limited by the declared 47° (patent and Pentax's 94°): the 47° chief lands at 20.98 mm, and the 47.7° corner chief now clears every rim. The clear-aperture probe flags no axial clipping; its own chief-ray search does not converge beyond about 35° on the steep S4 and S6 faces, so the engine chief-ray solve was used for the corner. Distortion against Fig. 4: model −2.2 % at 47° and −3.85 % near 40°, plot about −2 % and −4 %.

Open: the stop position and all semi-diameters remain inferred. The analysis field stops at the declared 47°, short of the 47.7° corner; extending it would need `projection.maxTraceFieldDeg`, which this pass did not change. Pentax's blade count was not confirmed, so `aperture.blades` is absent.

## 2026-11-04 — Final diagram, rim and label review

**Compared.** The local page (infinity; the focus-movement overlay at the closest setting) against Fig. 3 of US 4,062,622, the section of Example 2, rendered at 600 dpi from the 300 dpi sheet. Scale: S1 vertex at x 1694 px and S16 at 3017 px, 1323 px over 34.587 mm, so 38.25 px/mm; axis row 1869.5. Heights below are line centres above and below the axis. A web search for a Pentax construction diagram found the 8/8 count (lens-db, Cine Lens Wiki) but no drawing, so Fig. 3 governs.

| Element | Fig. 3 above / below (mm) | Mean | Model sd | Model / figure |
|---|---|---|---|---|
| L1 | 16.67 / 16.31 | 16.49 | 16 | 0.97 |
| L2 (outer edge) | 11.11 / 10.85 | 10.98 | 10.7 (S3) | 0.97 |
| L3 front | 6.78 / 6.60 | 6.69 | 6.7 | 1.00 |
| L4 | 5.18 / 5.23 | 5.20 | 5.1 | 0.98 |
| L5 | 4.99 / 5.06 | 5.03 | 5.1 | 1.01 |
| L6 | 5.01 / 5.03 | 5.02 | 5.1 | 1.02 |
| L7 | 6.38 / 6.50 | 6.44 | 6.6 | 1.02 |
| L8 | 7.61 / 7.33 | 7.47 | 7.1 | 0.95 |

These agree within the 5 % reading noise and keep the drawn height order (L1 > L2 > L3 > L4 ≈ L5 ≈ L6 < L7 < L8), so they stay. Two outlines differed visibly:

- **L2 rear.** Fig. 3 ends the S4 face at 7.38 mm below the axis (282 px, at 9.83 mm behind S1 against 9.79 mm on the true sphere) and at about 7.6 to 7.7 mm above it, then draws a vertical stroke, square to the axis, from about 7.8 to 10.05 mm, a chamfer and the flat outer edge. The site joined S3's 10.7 mm rim to S4's 7.06 mm rim with a slanted bevel. S4 keeps sd 7.06 (corner chief ray; the rim-slope limit is 7.10) and gains `rimExtensionSd` 10.7, level with S3, so L2 renders with a flat outer edge and a flat rear land as drawn. The land sits 1.6 mm further forward than the figure's, because the cap stops at 7.06 mm.
- **L3 rear.** Fig. 3 ends the S6 face at 5.63 mm on both sides of the axis (215.5 px, at 13.10 mm behind S1 above, against 13.11 mm on the sphere) and bevels from there up to L3's front rim. At sd 6.7 the S6 rim reached 14.44 mm, wrapping 1.25 mm past L4's front corner (13.19 mm at 5.1 mm). S6 6.7 → 5.6 mm. L3 now tapers to the rear and clears L4, as drawn.

| Surface | Before | After | Evidence |
|---|---|---|---|
| S4 | sd 7.06 | sd 7.06, `rimExtensionSd` 10.7 | Fig. 3 rear land; drawn only, traces nothing |
| S6 | sd 6.7 | sd 5.6 | Fig. 3 cap end 5.63 mm, both sides |

**Light.** Against the package baseline, the cut-and-land tool gives the same transmission with and without both changes: 99.3, 98.0, 95.1, 89.0, 81.1, 71.8, 55.6 and 36.2 % at 26.4, 29.4, 32.3, 35.3, 38.2, 41.1, 44.1 and 47.0°, and 100 % below. Worst loss 0.0 points (the earlier S4 raise to 7.06 still gains 2.8 points at 47°); restoring S6 to 6.7 or removing the S4 land wins back 0.0. The wide-open vignetting curve is unchanged at every field. S6 first costs light below 5.3 mm (4.8 points at 38.2° at 5.0 mm). The engine chief ray at the 21.65 mm corner (47.745°) meets S4 at 7.054 mm and S6 at 4.68 mm; the f/4 axial marginal ray reaches 2.78 mm at S6.

**Results.** Surface audit OK; image circle not undersized; aperture within 3 % of f/4. Field coverage 97 %, limited by the declared 47° (corner 47.7° clear). Built lens unchanged: EFL 20.0001 mm, half field 47°, tracing half field 36.72°, F/4.0, stop radius 4.114 mm. Paraxial probe unchanged: BFD 36.1535 mm, total length 70.741 mm.

**Labels.** Groups `Front` (S1–S6), `L4` (S7–S8) and `Rear` (S9–S16) were not the patent's notation: it counts seven groups (numerals 10 to 70, the sixth being 62 and 64 under numeral 60), puts the diaphragm between the fourth and fifth, and Fig. 3 brackets only group 60. Now `G1–G4 (−)` S1–S8 (F1,2,3,4 negative, condition 2), `G5–G7 (+)` S9–S16 and `G6` S11–S14. Element names L1 to L8 follow claim 4 ("lenses L1 to L8"). Types agree with the radius signs (L7, R13 = +1924 mm, is biconvex as claim 1 says); roles are true; no doublets (Example 2 separates 62 and 64); no aspheric surfaces; no `apd` tags, correctly, as the patent names no special glass. The stop is drawn at 24.26 mm behind S1 in Fig. 3, against the model's 24.20 mm midpoint, with its inner end at about 3.9 mm against the 4.11 mm stop radius. All eight inspectors show a resolved catalog glass (S-BSM16 twice, BACD15, E-FD1L, S-BSM18, K-SFLD6, S-FSL5, K-BK7).

**Movement.** No group moves: the patent prints the infinity state only, the movement overlay reports no focus or zoom movement, and the focus slider shows infinity with "Not modeled".

**Open.** Following Fig. 3's S4 cap end needs a steeper rim than the default 64.2° limit allows. With `checks.maxRimAngleDeg` 70 as a trial, S4 at 7.4 mm (69.8°) validates and moves the land to 9.85 mm, nearer the figure's 10.7 mm, but it also adds light: 72.1, 60.8 and 46.2 % at 41.1, 44.1 and 47.0°, against 71.8, 55.6 and 36.2 %. That is a policy change, so it is left to the owner. L8 reads 5 % taller in the figure than the model; within noise, so unchanged.
