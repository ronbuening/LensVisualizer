# Audit Log — Sigma 24–70 mm f/3.5–5.6 ASPHERICAL HF

Patent: JP 2002-236254 A, Numerical Example 2.

## Controlling source/model decisions, consolidated 2026-10-30

- Original `patents/JP 2002236254 A.pdf`: d-line definition¶0010 PDFp.3; Example 2 table/stations/asphere¶0018–0022 p.4; selectedFigure 5 p.7. Native source 3 stations 25.0/49.4/67.6 mm,9 glass bodies/7 air groups plus separate 0.1 mm resin layer. A under radical maps to K=A−1=1.168 at sourceS 5. No optical scaling.
- Source does not print SP 2-to-image gap. Approved common derived 35.73 mm preserves source-station residuals−0.027/−0.036/+0.046 mm. SP 1 is STO; fixed flare stopSP 2 lacks a clear radius and is omitted as active blocker. Its raw row remains source evidence. No source flare-suppression or throughput certification.
- Reconstructed 201 station zoom path retains 3 printed rows and exact source-gap relationships. SP 1/G 3 translate together; G 1 reverses, but its reconstructed turning point differs from schematic. Infinity-only focus; manufacturer 0.4 m MFD supplies no spacing law. Source G 3 tele magnification 1.04 differs from literal 1.0486; table retained.
- All SDs estimated. Figure 5 wide native 200 ppi raster upsampled for inspection: vertex scale~0.087 mm/px at 400 dpi. Drawn L 1~21.3, L 2/L 3~16.8, L 4~11.5, L 5/L 6~10.84,L 7~8.62,G 3~10.28 mm. Existing glass/resin clear caps 15 mm are constrained by coating thickness thinning to zero near 15.24 and S 2/S 3 sphere meeting near 15.19. Do not extend resin alone to schematic 16.8 or relax gap rules. Source stops not used to fit clear radii; all compound connections retained.

## 2026-10-30 — Fresh F-mount rim and glass review

Original pages and selectedFigure 5 reopened at native/page resolution and 600 dpi. All 10 material nd/νd pairs match:9 coefficient-compatible glass proxies and 1 unresolved resin film. Source explicitly d-line, no C/F/g indices, PgF/theta or coefficients. No new catalog rows or per-lens spectral copies; supplier/cure/production resin chemistry unresolved.

Independently resolved rear flat lands S 2/S 13 extend existing clear caps 14.5/8.3 to outer 20/11 mm, following sourceL 1/L 6 blanks. These replace simplified bevels. All other air faces/compound rims inspected; current continuous L 2/resin 15, L 7 8.6 andG 3 10 mm retained. S 2 land does not enlarge clear aperture past the narrow S 2/S 3 gap; no resin wing or opaque interface land. No inferred cut introduced.

Canonical/surface checks pass; image-circle zero undersized; all 201 centered corner and aperture stations clear/within 3%. Actual 9-stateSVG inspected,1203 source/intermediate control states finite with zero hidden trim. Common-field 16×16 lattice at 3 focus×3 zoom×5 fields:8706 retained/0 lost/0 gained, sampled counts not flux. R/d/asphere/stop/aperture/focus/zoom/tolerances unchanged. Source schematicG 1 remains taller than the feasible prescription; this limitation is retained instead of forced glass/coating geometry.

## 2026-11-03 — Zoom/focus station thinning

Removed derived zoom stations and focus keyframes that the solves did not need; no row was re-solved and no printed value changed. Kept rows are the existing rows, selected so the bilinear blend between them stays within 0.5 of the Rayleigh depth (±2λN², λ = 587.56 nm, station wide-open N) of the earlier model at every earlier row and between rows.

- Zoom: every 2nd existing row (indices 0, 2, …, 200).
- Focus: both keyframes kept (no change).
- Published zoom stations remapped 0 → 0, 100 → 50, 200 → 100; publishedFocus and conjugate indices remapped to the same rows.

| Quantity | Before | After |
|---|---|---|
| zoom stations × focus keyframes | 201 × 2 = 402 | 101 × 2 = 202 |
| source-published states | 3 | 3 |
| worst infinity defocus against the solves, between rows | 0.0011 mm | 0.0043 mm |
| worst fixed-plane defocus at infinity | 0.0456 mm | 0.0458 mm |
| worst focal-length label residual | 0.0012 mm | 0.0046 mm |

Against the earlier model at the same slider position and object: added defocus ≤ 0.0043 mm (0.15 R), half-field ≤ 0.066°, stop radius ≤ 0.000 %, f-number ≤ 0.000 %, variable gaps ≤ 0.004 mm, axial diffraction MTF at 30 lp/mm -0.020 at the worst infinity point (wide open, authored plane). Kept station objects, kept gap values and every field outside the thinned arrays are unchanged; published-station EFL, f-number and half-fields are bit-identical; the validator reports no errors.

Text sync: no count or residual claims outside this log (the < 0.05 mm residuals quoted are at the printed stations).
