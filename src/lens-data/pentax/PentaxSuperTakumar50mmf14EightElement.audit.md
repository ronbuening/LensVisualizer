# PENTAX SUPER-TAKUMAR 50mm f/1.4 (Eight-Element) — audit log

As received (package baseline 9128e249e492fe49eb032df61aa0ffb60d8e1d15): the inferred rims and the stop position were set from the patent figure and the surface geometry before any ray tracing; source values and the infinity image plane were unchanged. See the analysis for the source differences and field coverage. The package's evidence files were not added to the repository.

As received there was no focus motion, no catalog glass label and no rim change after tracing; rejected stop positions were kept in the package. Superseded by the 2026-11-03 section below (glass labels, rims and a derived focus state). The model is a patent example matched to the production lens by layout, not a factory prescription.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: the JP S40-28384 scan, read at 300 dpi. For Example 1, 14 radii, 8 thicknesses, 5 air spaces, the printed back focus and 8 nd/νd pairs all match the file at 0.5× scale. No mismatches. The patent's per-surface Seidel table (14 surfaces × 5 coefficients) is reproduced to four decimals. The sums are 0.1248/0.0671/0.0066/0.1264/0.3797 against 0.1247/0.0670/0.0066/0.1264/0.3797 printed. The table assumes the pupil at surface 1, so it does not fix the iris. As read, the claim inequalities F1,2 ≤ F/1.5 and F1,2,3 ≥ F/0.3 are not met by either example (F1,2 = 0.71F, F1,2,3 = 2.5–2.7F); this is probably a notation issue in the claims, and the prescription is unaffected.

First order, patent ×0.5 against the model: EFL 50.00 / 49.998 mm, BF 37.71 / 37.708 mm paraxial, F/1.4 / 1.4, half-field 23° / 23°. Distortion at 23° is −2.67%, against about −2.7% in Fig. 2. Zonal spherical aberration is about −0.07 mm, matching Fig. 5.

Maker comparison: the Product No. 358 service booklet lists L01–L08 and a "4th lens assembly (L04, L05, L06)". Its exploded illustration puts the iris between L03 and L04. Public sources give 8 elements / 6 groups, 0.45 m, 49 mm filter, M42, 1964; one database gives 8/7. Example 2 has the same layout, with L7 biconvex (r11 = +1020), and fits equally; nothing available separates the two. No maker optical diagram was found. No corpus file models this lens or cites JP S40-28384 or US 3,451,745.

Fields changed, data step:
- Glass labels: set by the coordinator to the HOYA catalog equivalents NBFD13, E-FD13, NBFD11 and BAFD7.
- Rims: S5 14.2 → 14.55, S8 12.8 → 14.03, S9 12.8 → 14.04, S10 12.8 → 15.35. L5's faces meet at 14.05 mm and the f/1.4 marginal ray needs 14.07 mm, so L5 limits the axial beam.
- Results: the aperture audit went from f/1.67 to f/1.43; on-axis transmission at f/1.4 from 72% to 96%; transmission at 23° from 33% to 40%.
- Focus: `closeFocusM` 1e15 → 0.45, with BF gap [37.71, 44.8472]. This is a derived unit-focus state (magnification −0.143×), not published.
- Annotations: `groups` G1–G6 added; `doublets` T1 (S7–S10) moved into spec order.

Fields changed, wording step: the header comment, `subtitle`, `specs` and element roles. The analysis was rewritten for metadata spacing, the identification evidence, the glass table, focus, aperture and stop, and model scope. Its MTF and pupil-count tables were removed because they described the old rims.

Open: none in the data. The choice of Example 1 over Example 2 cannot be settled from the available sources.
