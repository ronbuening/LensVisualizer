# Canon RF 24mm f/1.8 Macro IS STM: source audit

Audited 2026-11-09.

- Source: US12066598B2, Numerical Example 3, PDF p23, columns13–14; Figure5 PDFp6 and Figure6 PDFp7. Application US20220252840A1 p23 independently matches all five S17 polynomial coefficients. Grant front-page pixels confirm Yuki Shinzato and printed Canon Kabushiki Kaisha, normalized to Canon Inc. for the metadata generator.
- Complete 21-row source round trip, including literal effective diameters, index/Abbe pairs, radii, thicknesses and asphere. No rear plate. No glass identity substitution. No optical prescription repairs.
- All refracting semi-diameters are the published effective diameters divided by2. Effective clear apertures differ between faces: the engine joins them with tapered edge segments. The source schematic shows additional square mechanical lands. No invented rim cut or enlargement was used to make those lands; the delivered section shows optical clear geometry rather than a certified barrel/manufacturing profile.
- S8 clear-envelope diameter17.43mm retained in source packet, comments and analysis. Engine ordinary-prime iris is calibrated from F1.85: SD8.4669295418mm. Entire printed envelope would imply paraxialF1.7973401781. Neither source figure was silently changed.
- EFL24.7201029985mm; BFL11.0022714389mm versus literal11mm; track80.99mm versus rounded81mm. Source image radius19.34mm, never enlarged to full-frame corner. Exact field41.189188° reaches19.339973mm; declared half-field41.2°.
- Canonical surface/rim validation passes with default thresholds and no overrides; eleven focus-state render checks have exactly zero hidden trim. Normalized radius/index signature finds no duplicate among1095 baseline designs; this is a design fingerprint, not proof that no related patent exists.
- d17-only close state adds13mm; independent matrix gives object-to-image136.002120mm and magnification−0.510502. Intermediate states are interpolations, not published source states.
- Full-pupil grid64 throughput at center/mid/edge: infinity100/73.8538/32.8377%; midpoint100/77.1995/41.8216%; close100/79.5539/48.8848%. No unaimed or failed rays in these samples. Mechanical vignetting remains explicit.
- Reference-wavelength diffraction MTF at source plane converges center/mid/edge through80lp/mm with max grid128. At40lp/mm S/T: center0.918303/0.918303; mid0.582256/0.657800; edge0.318004/0.581949. Best-axial diagnostic shifts+0.00435891mm and is saved separately, never applied to the source. Polychromatic estimates depend on approximate dispersion; no measured or factory-certified MTF claim.
- The metadata generator requires the modern assignee name Canon Inc.; the printed Canon Kabushiki Kaisha is kept as provenance in the analysis.

## 2026-11-09 — Deployment validation

Independent check of US 12,066,598 B2 Numerical Example 3 (p. 23, cross-checked against US 2022/0252840 A1 pp. 23–24):
all 21 rows, the 21 effective diameters (sd = ED/2), the stop at S8, S17's asphere (K and A4–A12), d17 2.56 → 15.56
and BF 11.00 agree; no cover glass in the table. Engine EFL 24.720 (24.72), F1.85, half-field 41.2°, close state
−0.511× at 136.0 mm object to image (Canon: 0.5× at 0.14 m). Attribution strong: Canon's Camera Museum drawing
matches element by element (11/9, PMo asphere on L9, UD on L7, IS lens behind the stop).

Deployment changes: element focal lengths L7 41.28 → 41.73 mm and L8 52.33 → 26.28 mm, the patent's single-lens data
for Example 3 (the package's L8 value is Example 2's); the analysis follows, and its L5 description becomes biconvex
(R 70.143 / −252.397). `patentNumber` "US 12066598 B2" → "US 12,066,598 B2" (house form).
Open (closed 2026-11-09 in the cleanup pass below): package wording (subtitle "inferred product association", process notes in this log) remains for the cleanup pass.

## 2026-11-09 — Cleanup and wording pass

Data file: the header comment is rewritten as plain technical prose with every fact kept (example data, no scaling,
sd = ED/2, stop handling, focus, BF, image height and distortion). Subtitle "US 12066598 B2 Numerical Example 3 —
inferred product association" → "US 12,066,598 B2, Example 3 — construction match to the production lens", since the
Canon Camera Museum diagram matches Fig. 5 element by element. New `catalog.specs` (11 ELEMENTS / 9 GROUPS, DESIGN
f = 24.72 mm, DESIGN F/1.85, 1 ASPHERICAL SURFACE / 1 ELEMENT, FRONT-GROUP FOCUS; 0.5× MAX) and
`catalog.closeFocusM.marketing` 0.14 (Canon). The aperture follows Canon's f/22 minimum and 9 blades, as the RF 35 and
RF 16 siblings do: `fStops` gains 22, `maxFNumber` 16 → 22, `blades` 9. L7 gets `apd: "inferred"`, because Canon's
diagram marks it as the UD element and nd 1.49700 / νd 81.5 is a fluorophosphate UD-class glass. All eleven glass labels
change from "Unmatched (patent nd …, vd …)" to exact catalog equivalents (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each resolved
by the glass lookup): S-BSL7, TAFD35 (L2, L8), TAFD37A, S-TIH10, S-LAL12, S-NBH56, S-FPL51, E48R (ZEON polymer, L9),
S-LAL18 and S-NSL36. Each element gets a `role`; `doublets` D1 (S5–S7) and D2 (S11–S13) are added for the existing
cemented tags. The focus description now states the moving group, the 13.00 mm travel and the computed close state in
plain words. R, d, nd, νd, sd, the asphere, d17, the stop and the patent fields are unchanged.

Analysis: the identification section now gives the product (August 2022, 11/9, PMo asphere, UD, 0.14 m, 0.5×, f/22,
9 blades), a numbered evidence list, and the Canon diagram comparison, including why Examples 5 (no IS, different
shapes) and 6 (two front negatives, no UD glass) fit worse. The stop paragraph is rewritten: the printed 17.43 mm
agrees with F1.85 at real-ray height (an f/1.85 marginal ray entering at 6.68 mm crosses S8 at 8.72 mm, and the
printed S3–S11 diameters equal that ray's heights), so there is no conflict with F1.85; the paraxial iris rule gives
8.467 mm. Added: architecture with ¶ citations, the glass table, a focus table, the asphere equation with its
departure (+0.48 mm at the clear radius), Table 1 conditional values, and the Canon Museum and The-Digital-Picture
sources. Removed: process and tooling wording ("engine's ordinary-prime contract", "hidden-trim", "validation
package", "first-surface coordinate convention", "typo repair", MTF and audit numbers). "Verification and
Qualifications" becomes "Model Scope and Limitations". This log loses the baseline hash, the test-count line and the
"held by coordinator" note.

Engine numbers before and after are identical: EFL 24.7201 mm, FOPEN 1.85, half-field 41.2°, stop radius 8.4669 mm,
BFD 11.0023 mm, close state 0.13600 m at −0.5106×. Only the aperture slider limit changes (16 → 22). The surface audit
is OK, and the aperture audit is within 3 % of the stated f-number, with no rim limit.

Open: the drawing joins element faces of different printed diameters with sloped edges (L1, L6 most visibly), whereas
Fig. 5 and Canon's diagram show square lands. Rims were left unchanged in this pass.
