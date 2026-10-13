# Audit Log — Fujinon XC 15-45mm f/3.5-5.6 OIS PZ

Patent figure: `JP2021015312A.pdf, p. 29 Fig. 3 (Example 3, wide)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---:|---:|---|
| 1 | 9.2 | 15 | Exact figure optical rim, capped by surface/gap geometry |
| 2 | 8.0 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 3A | 7.6 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 4A | 7.6 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 5 | 7.6 | 11.5 | Exact figure optical rim, capped by surface/gap geometry |
| 6 | 7.3 | 11.5 | Exact figure optical rim, capped by surface/gap geometry |
| 7 | 5.2 | 7.2 | Exact figure optical rim, capped by surface/gap geometry |
| 10 | 4.3 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 11 | 3.9 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 12 | 3.7 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 13A | 3.7 | 4.7 | Exact figure optical rim, capped by surface/gap geometry |
| 14A | 3.6 | 4.7 | Exact figure optical rim, capped by surface/gap geometry |
| 15 | 3.7 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 16 | 3.7 | 6 | Exact figure optical rim, capped by surface/gap geometry |
| 17A | 3.8 | 6.5 | Exact figure optical rim, capped by surface/gap geometry |
| 18A | 3.8 | 6.5 | Exact figure optical rim, capped by surface/gap geometry |
| 19 | 7.5 | 14.2 | Exact figure optical rim, capped by surface/gap geometry |
| 20 | 7.8 | 14.2 | Exact figure optical rim, capped by surface/gap geometry |

Figure scale was approximately 0.0651 mm/pixel at 600 dpi. The automated L2e envelope was contaminated by ray/leader ink; its actual 6.0 mm rim was read from the enlarged figure. A literal 11.2 mm shared front-group rim fails the gap constraint, so surfaces 2–4A stop at 10.0 mm. A 7.5 mm focus rim exceeds the slope limit, so 17A/18A stop at 6.5 mm. The stop was retained.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L1a | 1.95375 / 32.32 | TAFD45 |
| L1b | 1.53409 / 55.89 | Unresolved; patent-coordinate fallback |
| L1c | 1.94595 / 17.98 | FDS18 |
| L2a | 1.62041 / 60.29 | S-BSM16 |
| L2b | 1.53775 / 74.7 | S-FPM3 |
| L2c | 1.62588 / 35.7 | F13 |
| L2d | 1.58313 / 59.38 | S-BAL42 |
| L2e | 1.497 / 81.61 | H-FK61 |
| L3a | 1.58313 / 59.38 | S-BAL42 |
| L4a | 1.804 / 46.53 | S-LAH65VS |

Removed catalog-derived authored nC/nF/ng values so the runtime resolver supplies qualified catalog dispersion rather than presenting it as measured patent evidence.

Added CDGM F13 from the vendor June 2022 Zemax catalog, mirrored at https://refractiveindex.info/database/data/specs/cdgm/optical/F13.yml (formula 3, 0.365–1.014 µm). L2c now explicitly uses F13; the existing code-only winner E-F1 is preserved. L1b (534559) has no compatible catalog candidate and remains unresolved.

### Rear plate

Tables 9/11: restored 7.33 mm air + 2.85 mm PP (nd=1.51633, vd=64.14) + 2.41 mm air through rearPlates. The plate is traced but not drawn.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

Updated all quoted aspheric rim departures in the analysis to the revised SDs.

Cemented membership now explicitly accompanies the source interface topology so the Element Inspector identifies the connected doublets/triplet, not just the diagram bracket.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

Wide, intermediate, and telephoto states retain the source ordering 15.33 / 25.78 / 43.72 mm. Relative to fixed G4, G1 starts at -63.75 / -58.56 / -60.65 mm (imageward then objectward); G2 at -26.59 / -35.71 / -47.72 mm and G3 at -7.88 / -14.05 / -19.00 mm move objectward. Infinity-to-1 m focus moves G3 imageward by +0.25 / +0.54 / +1.29 mm; other groups stay fixed at each zoom station. These signs agree with Fig. 3 and Table 11.

The L2e inspector now names its actual H-FK61 runtime proxy instead of N-PK52A. L2b and L2e receive inferred APD tags based on the selected catalog curves (project-normal-line delta PgF +0.0212 / +0.0315). No supplier attribution or patent-listed APD tag is inferred.

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.
