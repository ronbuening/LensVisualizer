# Canon RF24 probable association: literal source audit

Audited 2026-11-09 at baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11. Local-only; no commit, push or publication.

- Source: US12066598B2, Numerical Example 3, PDF p23, columns13–14; Figure5 PDFp6 and Figure6 PDFp7. Application US20220252840A1 p23 independently matches all five S17 polynomial coefficients. Grant front-page pixels confirm Yuki Shinzato and printed Canon Kabushiki Kaisha, normalized to Canon Inc. for the metadata generator.
- Complete 21-row source round trip, including literal effective diameters, index/Abbe pairs, radii, thicknesses and asphere. No rear plate. No glass identity substitution. No optical prescription repairs.
- All refracting semi-diameters are the published effective diameters divided by2. Effective clear apertures differ between faces: the engine joins them with tapered edge segments. The source schematic shows additional square mechanical lands. No invented rim cut or enlargement was used to make those lands; the delivered section shows optical clear geometry rather than a certified barrel/manufacturing profile.
- S8 clear-envelope diameter17.43mm retained in source packet, comments and analysis. Engine ordinary-prime iris is calibrated from F1.85: SD8.4669295418mm. Entire printed envelope would imply paraxialF1.7973401781. Neither source figure was silently changed.
- EFL24.7201029985mm; BFL11.0022714389mm versus literal11mm; track80.99mm versus rounded81mm. Source image radius19.34mm, never enlarged to full-frame corner. Exact field41.189188° reaches19.339973mm; declared half-field41.2°.
- Canonical surface/rim validation passes with default thresholds and no overrides; eleven focus-state render checks have exactly zero hidden trim. Normalized radius/index signature finds no duplicate among1095 baseline designs; this is a design fingerprint, not proof that no related patent exists.
- d17-only close state adds13mm; independent matrix gives object-to-image136.002120mm and magnification−0.510502. Intermediate states are interpolations, not published source states.
- Full-pupil grid64 throughput at center/mid/edge: infinity100/73.8538/32.8377%; midpoint100/77.1995/41.8216%; close100/79.5539/48.8848%. No unaimed or failed rays in these samples. Mechanical vignetting remains explicit.
- Reference-wavelength diffraction MTF at source plane converges center/mid/edge through80lp/mm with max grid128. At40lp/mm S/T: center0.918303/0.918303; mid0.582256/0.657800; edge0.318004/0.581949. Best-axial diagnostic shifts+0.00435891mm and is saved separately, never applied to the source. Polychromatic estimates depend on approximate dispersion; no measured or factory-certified MTF claim.
- Typecheck, changed-data-file lint and formatting pass. Production build passes with1875 prerendered routes. Final uncached focused metadata/analysis/stations/schema tests:1127 pass in4 files. Focus/iris suites:4 tests pass in3 files. An earlier overlapping development run reported a transient assignee mismatch. The unchanged baseline metadata suite independently passed8/8; the final --no-cache rerun passed all1127. No baseline defect is claimed. The generator correctly requires modern Canon Inc., and printed Canon Kabushiki Kaisha is preserved as provenance. Full aggregate suite held by coordinator. Interactive browser UI not tested.

## 2026-11-09 — Deployment validation

Independent check of US 12,066,598 B2 Numerical Example 3 (p. 23, cross-checked against US 2022/0252840 A1 pp. 23–24):
all 21 rows, the 21 effective diameters (sd = ED/2), the stop at S8, S17's asphere (K and A4–A12), d17 2.56 → 15.56
and BF 11.00 agree; no cover glass in the table. Engine EFL 24.720 (24.72), F1.85, half-field 41.2°, close state
−0.511× at 136.0 mm object to image (Canon: 0.5× at 0.14 m). Attribution strong: Canon's Camera Museum drawing
matches element by element (11/9, PMo asphere on L9, UD on L7, IS lens behind the stop).

Deployment changes: element focal lengths L7 41.28 → 41.73 mm and L8 52.33 → 26.28 mm, the patent's single-lens data
for Example 3 (the package's L8 value is Example 2's); the analysis follows, and its L5 description becomes biconvex
(R 70.143 / −252.397). `patentNumber` "US 12066598 B2" → "US 12,066,598 B2" (house form).
Open: package wording (subtitle "inferred product association", process notes in this log) remains for the cleanup pass.
