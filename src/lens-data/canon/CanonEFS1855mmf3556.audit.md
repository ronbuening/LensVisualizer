# Canon EF-S 18–55mm f/3.5–5.6 — original-patent review

## 2026-10-30 — native shape, complete glass and runtime review

- Original: `patents/JP_2005092056_A.pdf`, SHA-256 `d05dd4c3f1563b14028c17181b79db32ac951f550bcfc29dc4380400344e972b`.
  Front page confirms JP 2005-092056 A, 2005-04-07, application 2003-328074 filed 2003-09-19, Takeshi Nishimura / Canon.
- Selected Numerical Example 5: PDF page 13, complete R1–R21 table, 11 media, three zoom-gap rows and R19 asphere.
  Figure 13 on PDF page 18 is the corresponding wide section; Figure 14 on page 18 and Figure 15 on page 19 are
  matching wide/tele aberrations. Table 1 on page 14 prints the eight condition values.
- Reference: paragraph 0047, PDF page 8, explicitly defines d-line indices/Abbe numbers; paragraph 0049, page 9,
  defines spherical-base aspheres plus A h² through F h¹². Example 5 A=0 maps to K=0 and B–F to A4–A12.
- Native source is 1656×2339 one-bit at 200 ppi. The earlier 600 dpi view was threefold upsampling. The rotated
  native Figure 13 spans about 621 pixels from first vertex to image against the retained 115.251775 mm track,
  about 5.38 px/mm; practical rim uncertainty ±0.6 mm. Heights remain diagram-derived, not dimensioned apertures.
- Previous September 2026 / live-site analysis record was integrated in commit `b1011bf2e` on 2026-09-08; its exact
  source-inspection day is not recorded. Preserve that historical wording/date, without presenting it as today's
  inspection. Native shoulder evidence, overlarge ray-envelope caps and source-qualification gaps justify this
  scoped reopening. There is no additional reused lens-entry count.

### Every element and interface

| Element | Source surfaces | Source n / ν    | Current clear caps mm | Shape disposition                                                        | Qualified curve |
| ------- | --------------- | --------------- | --------------------- | ------------------------------------------------------------------------ | --------------- |
| E1      | R1/R2           | 1.516330 / 64.1 | 20.5/20.5             | Retain native weak positive blank                                        | S-BSL7          |
| E2      | R3/R4           | 1.622992 / 58.2 | 17/11.8               | Retain gap-limited rear cap; resolved R4 outer shoulder 17               | S-BSM15         |
| E3      | R5/R6           | 1.622992 / 58.2 | 12.5/12.5             | Retain within native reading / R4 gap constraint                         | S-BSM15         |
| E4      | R7/R8           | 1.846660 / 23.9 | 12/12                 | Retain native positive meniscus                                          | S-NPH53         |
| E5      | R9/R10          | 1.572501 / 57.8 | 7/7                   | Reduce prior 7.6/7.6 to native thin positive blank; R10 remains inferred | S-BAL11         |
| E6      | R12/R13         | 1.846660 / 23.9 | 7.8/7.8               | Retain negative member and full curved bonded interface                  | S-NPH53         |
| E7      | R13/R14         | 1.487490 / 70.2 | 7.8/7.8               | Retain positive member / common curved cemented cap                      | S-FSL5          |
| E8      | R15/R16         | 1.620041 / 36.3 | 6.5/6.5               | Reduce prior 7.7/7.7 to native L3 blank                                  | S-TIM2          |
| E9      | R16/R17         | 1.755199 / 27.5 | 6.5/6.5               | Reduce prior 7.7/7.6; connected bonded curve, no land                    | E-FD4           |
| E10     | R18/R19A        | 1.583060 / 30.2 | 9.5/9.5               | Reduce prior 9.8/9.9 to native rear blank; polynomial unchanged          | Unmatched       |
| E11     | R20/R21         | 1.516330 / 64.1 | 9.5/9.5               | Reduce prior 10.2/10.6 to native final positive blank                    | S-BSL7          |

The native rectangular E2 rear blank is optical outline, not a leader or a mechanical flange. Only R4 gets
`rimExtensionSd: 17`, preserving clear 11.8. It resolves the visible vertical shoulder without enlarging the curved
cap. R4 clear 12.5 is rejected at all source zooms: combined R4/R5 sag 8.06 mm exceeds 7.038 mm allowed in D4 = 7.820.
The former R17 clear 7.7 is also rejected at tele: sag 1.32 mm exceeds 1.296 allowed in D17 = 1.440. Adopted R17 is
native 6.5; no source gap is increased. Every concave end and both cemented interfaces were inspected. No inferred
cut, opaque bonded land, disconnected layer, unsupported equal-height block or hybrid resin is introduced. Native
leaders, brackets, cam arrows and image-plane bar are excluded.

### Glass and source qualification

All 11 printed pairs and medium assignments are preserved. Ten compatible catalog curves remain qualified spectral
proxies, never historical supplier, melt, chemistry, cement or manufacturing proof. E10 stays Unmatched; a past
polycarbonate comparison supplies no source identity. No authored C/F/g line indices or partial-dispersion/APD
measurements are present, and the original prints none for these media. Plotted d/g aberrations are contextual
spectral evidence, not numerical per-lens indices. There is no tabulated source filter, cover plate or bonded layer.
Catalog consistency and resolver checks pass; no curve is disabled and no spectral override is added or removed.

The original table's R10 = Stop / R11 = ∞ leaves no numerical rear radius before the stop. Retain the existing constrained
R10 = −44.181130175128175 mm and STO at the original R11 station. A flat-R10 diagnostic gives EFL 26.619393/58.475290/
213.654255 mm versus source 18.00/31.74/55.00; retained gives 18.000636/31.743253/54.998753. Independently, original
Claim 5 (PDF 2) defines positive L2a–stop–positive L2b and the contextually defined f2/f2a condition .2–.6: flat gives
.133326, retained .398788 versus Table 1's .40. The claim/table prints f1a although the definition names f2a; that
internal notation issue is disclosed. These source-summary/claims checks support missing curvature, not all fitted
digits. A schema-safe unresolved source.errata note does not invent a numeric printed radius. Generic Section G
follow-up remains needed for that unresolved source reconstruction. Claim 1 / paragraph 0025 use 2.5 while
paragraph 0019 uses 2.6 as zoom-ratio lower bound; the original inconsistency is qualified without family substitution.

Catalog design focal endpoints now quote printed 18/55 rather than computed 18.000636/54.998753. The existing
source arrays, material numbers, all aspheres, physical gaps, aperture/stop authority, nominal targets, and close cams
remain unchanged. Analysis corrects a stale telephoto descriptor that omitted the image gap: actual full tracks
115.251775/106.711449/115.387416 mm are all longer than EFL. Current derived iris radii 6.252060/6.329229/6.417926
and exact aimed-rim working values 3.589722/4.445507/6.029607 replace stale prose only. Middle 4.42103340096855 stays
explicitly reconstructed; source endpoints 3.59/5.99 remain authoritative design targets. R19A polynomial departure
at the new 9.5 mm cap is +.289213980 mm, with every coefficient retained.

### Runtime checks and rendered SVG

- Surface probe passes. Image-circle audit: 0 undersized. Three source aperture states pass; geometry-identical
  65-position actual-runtime clone agrees within1.8×10⁻15 mm at focus 0/.5/1. Aperture census 65/65 within3%; infinity
  field chiefs 65/65 at least 99% of the query. Its derived/paraxial iris criterion is separate from exact aimed-rim
  `1/(2n′sinθ′)` values above; no threshold changes.
- Current-state iris bundles:65 zoom × 5 focus × 4 fields = 1,300 fields/version, 193 pupil positions each. All axial
  fields retain 193/193. Full-corner infinity counts baseline 117/188/188 → current103/165/174; reconstructed close
  corners 86/188/190 → 73/169/177. Smaller native caps deliberately retain this off-axis clipping. These sample
  counts are not production illumination measurements.
- Working aperture grid:21 zoom × 21 focus × 11 presets = 4,851 calls/version, all traced before/after. No unavailable
  result or new on-axis loss. Finite query chiefs can reach 13.381446 mm versus runtime APS-C 14.175 mm; source
  centered figures do not certify every reconstructed finite field.
- Actual first order:65 zoom × 21 focus = 1,365 states. Three infinity and reconstructed 0.28 m source-zoom endpoints
  residuals below 5×10⁻14 mm. Worst infinity interpolation −3.511269 mm at zoom .78125 (EFL 41.322720 versus displayed
  44.823750); worst finite −4.293537 mm at zoom .796875/focus .55, displayed .509091 m. Source has three infinity rows,
  no intermediate cam or finite prescription. Preserve controls and call intervals illustrative.
- Actual generated SVG comparison: 1,365 states / 15,015 finite, closed, connected element paths; hidden trim 0.
  Native Fig. 13 and rendered wide section agree on the restored E2 shoulder and smaller E5/L3/rear caps. Full source
  and sampled runtime clearance remain separate from production correlation.
- Explicit scratch sidecar formatting and protected-object comparison pass. Coordinator owns metadata/report
  regeneration, typecheck, lint, tests, build and publication gates.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 7.0875 and 14.1750 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 14.1750 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 180 positive-real-object geometries, 540/540 target chiefs converge: 527 clear the current caps and 13 clip. Across the converged fields, 193 current-iris samples per field give 97,907 passed, 6,313 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result            |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | ----------------------- |
|            0 |                  0 |                  0.280000000 |           0.280000 | 193 / 190 / 29                    | clear / clear / clipped |
|          0.5 |                  0 |                  0.280000000 |           0.280000 | 193 / 188 / 167                   | clear / clear / clear   |
|            1 |                  0 |                  0.280000000 |           0.280000 | 193 / 190 / 174                   | clear / clear / clear   |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 94.488590% at zoom 0.25, focus 0.05, aberration control 0: Gaussian 0.308638954 m versus label 5.600000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
