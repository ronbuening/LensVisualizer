# Samyang 135mm f/2 ED UMC — technical audit

## Historical audits prior to the 16 October 2026 live-site review

The October 8 source-first review approved a qualified infinity model under the owner's lens-specific derived-image-plane exception. Its frozen independent fingerprint was 7016b560f64c650ae324afe1dcfe76f7d96b221383a4d4c69444f34ca02604df. The reviewed data/analysis hashes were 55fe92d9b61ab78e56a0ae8dbd7e347ef355f5319073f41168c86240f0d3eda3 and 526f1b15bb74f76b6fe175e375f493bb47b8cba8d4b1542b55b5e6bb5bb7c450. These identify the historical dossier, not today's edited labels.

Source: exact local patents/KR101802036B1.pdf, sole Example 1, Table 1 and Figure 1. Native millimetres, eleven spherical elements, seven components and four cemented interfaces are retained without scaling. No camera plate or filter prescription is supplied. The schematic filter block is omitted.

The literal prescription computes EFL 129.999015090087 mm and BFD 44.042277590379 mm. The model's approved 44.04 mm final gap differs from printed BF 41.855 mm; the 2.187277590379 mm source residual remains unresolved. Source F=130/Fno=2.07 conflicts with the f=135 F2 MTF legends. Those plots were not used to tune the prescription.

The source lists clear diameters. Five printed radii (S4/S6/S7/S8/S12) were later raised only enough to pass the stated axial beam, and the missing C19 was modeled with sd19=16.79 mm. The original source-rim beam failure belongs to the superseded geometry. The physical iris remains 14.28 mm; exact calibration gives nominalFno 2.1306317597309254, distinct from the table's 2.07 and marketed 2.0. Current source errata preserve these distinctions.

The historical dossier initially embedded catalog-derived C/F/g indices. The integration audit removed those unsupported measured-data fields and retained qualified catalog curves, including the subsequently added HOYA TAF1 row. Historical N-SF1 anchors and their 29.62 Abbe number are superseded by the current SF1 proxy. Native nd/νd are unchanged. Numerical convergence and archive replay do not establish the manufactured prescription, glass supplier or production performance.

Only infinity is published. Manual floating focus and the 0.8 m production MFD do not provide an optical movement law. Source group labels G2 (front) and G1 (rear) remain in that physical order.

## 2026-10-16 — Deployment validation and owner rulings

An independent check confirmed all nineteen Table 1 rows (R, d, nd, νd, C) against PDF page 9. The model traces to EFL 129.999 mm, matching the printed F=130. Figure 1 matches the maker's construction drawing (11 elements / 7 groups, ED at the second element). Two defects held the package at first: the inventor names were in Hangul (patent-metadata test failure), and the printed clear diameters clipped the axial beam (S4 24.40 vs 26.39 mm needed, S6 23.12 vs 23.60, S7 19.44 vs 22.33, S8 14.70 vs 18.93, S12 13.39 vs 13.50; real-ray at the calibrated iris), limiting the on-axis beam to about f/2.78.

Cause of the clipping: the patent, not the model. A paraxial f/2.07 marginal ray traced from Table 1 needs heights within about 5% of the printed C/2 at every surface except S8 (20.1 mm needed, 14.7 printed). Figure 1 draws L25's rear face (S8) nearly as tall as L24, far larger than the 28.56 mm stop; the printed 29.4 mm is probably a misprint for 39.4 mm.

Owner rulings (Ron, 2026-10-16):
- Rims: raise minimally. S4 24.4→26.4, S6 23.12→23.6, S7 19.44→22.4, S8 14.7→19.0, S12 13.39→13.6 mm. With these, the clearance trace shows no axial clipping or chief-ray blocking, and the surface validator reports no errors. Recorded as an unresolved source note and inline comments.
- Image distance: the printed Bf 41.855 mm is taken as a misprint; S19.d stays 44.04 mm.
- Focal length: keep the native 130 mm table unscaled; the subtitle, specs and header were reworded and the F=130/F2.07 versus f=135 F2 legend mismatch is one unresolved source note.
- Inventors romanized as Jong Young Park (matching the existing Samyang files) and Hyun Sik Yoon.

The package's gate and readiness labels above (Stage 1 hold, pending integration) are superseded by this validation.


## 2026-10-15 — Patent-rim, glass and release-metadata review

Patent: local `patents/KR101802036B1.pdf`, Table 1 and Figure 1, PDF p.11.

| Field | Before | After | Evidence |
|---|---|---|---|
| Eleven elements' nC/nF/ng | 33 catalog-computed anchors | Removed; shared catalog resolution | Table 1 does not publish these measurements; they were computed from catalog formulas. Original nd/vd retained. |
| TAF1 resolution | OHARA S-LAH66 alias | Actual HOYA TAF1 polynomial | Vendor 2026-07-07 TAF1 NM/CD row; n(d)/νd consistency checked at catalog precision. |

All 11 elements retain catalog spectral coverage. The 600 dpi figure agrees with printed C/2 and the existing five documented axial-floor exceptions; measurements differ by at most about 10% at element rims. No SD, stop or source-erratum interpretation changed. Native 130 mm design versus marketed 135 mm remains explicit.

[Maker product page](https://www.lksamyang.com/en/product/product-view.php?seq=323) confirms the existing nine native mounts, full-frame product and ED UMC display name. Source party metadata and 11/7 counts remain complete; the marketing MFD does not supply a finite-focus law. Analysis now describes runtime proxies rather than embedded synthetic line indices.


## 2026-10-16 — Live diagram, glass-color and travel review

Rechecked Figure 1 (KR101802036B1.pdf p.11) against the local section and the existing printed-C/2 and axial-floor exceptions. No additional SD change is supported. Preserved G2/G1 source labels and infinity-only focus. Added inferred APD color to L2 (FCD1, ΔPgF ≈ +0.03232), matching the maker's ED position. Corrected L5/L7/L10 labels and analysis to identify the actual Schott SF1 proxy (νd 29.51) rather than modern N-SF1 (29.62), retaining source NSF1_SCHOTT and native νd 29.50. All eleven curve selections and all optical values are unchanged. Samyang Optics Co., Ltd. agrees with the source assignee; nine native mounts remain complete.

All six release lenses retain 81/81 catalog-backed elements; no additional curve is needed to fill a coverage gap. Surface, image-circle and aperture audits pass at all ten infinity/zoom stations. The sole field-coverage limitation is Miranda's explicitly declared 22.5° half-field (94% of the full-frame corner); no rim clips its corner chief ray. No new changelog entry was added.
