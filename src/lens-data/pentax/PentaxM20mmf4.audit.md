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
