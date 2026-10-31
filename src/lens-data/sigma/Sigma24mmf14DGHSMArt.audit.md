# SIGMA 24mm f/1.4 DG HSM | Art — audit log

2026-10-27. Related patent design: JP 2016-012034 A, Numerical Example 1; Example 6 remains viable. No exact factory identity is claimed and the grant was not compared.

- Patent PDF SHA256: e360e53e4dd5c5524f2c203ad9ff0518ce59569c8d6ff88ae50009d75bc0deb4 (34 pages).
- Source re-read at authoring: 236 fields, 0 mismatches.
- Printed optical fields are unchanged. Near state: d0 = 115 mm, track 132.5954 mm, object to image 247.5954 mm. The printed BF residual and the A12 term are kept.
- Figure 1 outlines were rejected as square rims on geometry, then replaced with inferred clear rims. No gap-sag override.
- A straight-line focus path was rejected. A 65-point inferred path, with both groups on one shared parameter, is used as illustrative motion. No factory cam or focus-label accuracy is claimed. The near-infinity conjugate pole remains.
- Iris: see the 2026-10-31 section, which replaces the iris and f-number values recorded here at authoring.
- The model's finite clipping relies on inferred rims, not measured production apertures.
- MTF: see the 2026-10-31 section. Best-axial shift is a diagnostic only. No apochromatic or spectral-quality claim.

See the companion analysis for printed facts versus modeling choices.

## 2026-10-31 — Deployment validation and fix pass

Source re-read: the patent PDF was read directly, with pp. 14-15 checked row by row against the page images. 105 fields (27 R, 24 d, 6 variable-gap values, 30 nd/νd, 18 asphere values) gave 0 mismatches. The front-page number, date, applicant and inventor match the file. The asphere equation is the (1+K) form and K = 0, as stored.

Patent vs model: EFL 24.65 / 24.654 (near 24.99 / 24.990); BF 38.45 / 38.4512 paraxial (near 43.3511 / 43.3524); TL 132.60 / 132.5954; half-field 41.69 / 41.688 real (near 39.71 / 39.709); groups −129.91, 81.81, 42.03 / −129.90, 81.81, 42.03. On-axis spherical aberration is −0.028 mm at full pupil, so there is no sign of a misprint. Printed conditional values reproduce.

Maker diagram: Sigma's drawing shows 15 elements in 11 groups, FLD at L3/L5/L10, SLD at L7/L8/L12/L13, aspherical L2 and L15, a fixed first group and two focus groups. Surface positions read from it at both focus positions fit Example 1 at 0.15 mm rms, Example 6 at 0.25, Example 7 at 0.26, Example 2 at 0.39 and Example 9 at 0.93. Example 6's L2 is M-FCD500 class (νd 71.68), which the drawing does not mark; Examples 2, 7 and 9 have νd 81.61 at L3, and Example 9 carries its asphere on L1. Examples 3, 4, 5 and 8 fail on focal length or construction. Example 6 stays viable because the drawing is a small image.

Iris and working f-number: the stop rule gives an entrance-pupil radius of 8.3858 mm and an iris radius of 12.3155 mm from the design F1.47. Real working f/# is 1.4995 at infinity and 1.5987 at the near state, against printed 1.47 and 1.60; paraxial working values are 1.470 and 1.552. The printed near value is matched here, but the same rule misses Examples 5 and 8 by about 0.04 and 0.05, so the patent's convention stays undefined. Figure 1's stop marks read about 12.6 to 12.7 mm.

Rims: `lsa.mjs` was run first and shows no misprint. At the near state the on-axis marginal ray stood over the inferred rims at S21 (14.3834), S23 (15.8079), S24 (15.3249), S25 (15.1634) and S26 (15.1661), and the engine reported the working f-number as vignetted at S21. Raised, with each element kept square: L12 S20/21 14.38 to 14.39, L13 S22/23 15.66 to 15.81, L14 S24/25 15.10 to 15.33, L15 S26/27 15.10 to 15.17. The near working f-number now traces. All four stay inside Figure 1 (15.57, 16.93, 16.81, 17.18) and Sigma's drawing (about 15.1, 16.5, 16.5, 16.8). The S25/S26 gap check caps L14 and L15 near 15.5 without an override, so none is used. Corner transmission at infinity moves from 19.4% to 19.9%.

Square-rim test: Figure 1 outlines on both faces give eight validator errors on the current checks: L10 edge −0.98 mm, S2 90° rim, S19 68.5° rim, and overlaps at gaps 2-3A, 4-5, 6-7, 8-9 and 25-26A. This repeats the geometry rejected at authoring, whose logs are not in the repo.

Glass: 15 of 15 now resolve, from 0. All are exact catalog rows; L15's catalog νd differs by 0.01. All 33 pairs printed across the nine examples sit on catalog rows, so L14's single printing is not an optimized value. L3/L5/L10 (FCD100, dPgF 0.049777) and L7/L8/L12/L13 (FCD515, dPgF 0.015751) carry `apd: "inferred"` on the engine's normal line.

MTF at 40 lp/mm, wide open, diffraction, printed planes. Reference wavelength: infinity center 0.551, edge 0.250 / 0.146; near center 0.759, edge 0.271 / 0.066. Photopic: infinity center 0.354; near edge 0.209 / 0.004. Photopic and C/d/F are newly available through the catalog glasses.

Catalog: `sony-fe` and `l-mount` added, as Sigma lists them. A Sony A version (part 401-205) appeared at retailers but is not on Sigma's page, so it is not listed; there is no evidence of a Pentax version. `closeFocusM` stays 0.2475954, the printed object-to-image distance, in the same reference as the marketed 25 cm.

Fields changed: lensMounts, eight `sd` values (S20 to S27), element labels, roles, glass, apd, apdNote and dPgF, doublet names D1/D2 to C1/C2, subtitle, specs, focus description, conjugate source, header comment, analysis and this log.

Half-field: the Summary tab reports 41.71° at infinity and 39.73° at near for the 21.65 mm format corner. The internal `halfField` of 41.08° is a paraxial limit set by the S2 rim and seeds the diagram's off-axis rays. S2 at 23.0 would raise it but exceeds the Figure 1 arc of 22.5 mm, so S2 is left.

Open: the grant JP 6413392 B2 is not compared with this publication.
