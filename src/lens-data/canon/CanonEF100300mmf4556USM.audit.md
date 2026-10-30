# Audit Log — Canon EF 100-300mm f/4.5-5.6 USM

Patent: US 7,158,320 B2, Numerical Embodiment 3.

## 2026-10-30 — Original-PDF element heights, concave ends and all modeled media

### Source and figure resolution

The exact supplied original is `patents/US7158320.pdf`: its title page identifies the January 2, 2007 B2 grant,
Akihiro Nishio and Canon Kabushiki Kaisha. Numerical Embodiment 3 occupies PDF page 24, printed columns 9–10;
its four variable-gap rows are in column 10. Fig. 5 is on PDF page 4, drawing sheet 3, with wide, middle and tele
panels. Fig. 6A–C is on PDF pages 5–6. PDF page 23, column 8 defines the ordinary and ITO index/Abbe values on
the d line; Table 1 is on PDF page 26, column 13.

The drawing is a 2560 × 3300-pixel 300-dpi raster, not a vector drawing. Its native 300-dpi render and native crop
were inspected; higher dpi would only upsample it. The wide R1–R25 axial span is approximately 760–770 native pixels
for the 113.82 mm tabulated vertex span, or 6.68–6.77 px/mm. Optical-edge readings carry roughly ±2 pixels per edge
(about ±0.3 mm before scale/drawing uncertainty). Labels, ITO/SP/IP leaders, motion brackets and the image plane are
excluded from the glass span. The drawing supplies inferred proportions, not published effective diameters.

### Element heights and concave ends

| Element / source faces | Retained clear semi-diameters (mm) | Figure disposition |
|---|---|---|
| E1, R1–R2 | 26.7 / 26.4 | Front negative meniscus; source front assembly is approximately 25–26 mm high. |
| ITO, R2–R3 | 26.4 / 26.4 | Continuous bonded layer between the two substrates; no air-facing land. |
| E2, R3–R4 | 26.4 / 25.8 | Front cemented assembly retained; no distinct shoulder resolved. |
| E3, R5–R6 | 25.8 / 24.7 | Adjacent positive meniscus retains the source's similar front-unit height. |
| E4, R7–R8 | 12.4 / 12.3 | Biconcave cap reaches the drawn edge; no shortened concave end resolved. |
| E5, R9–R10 | 13.0 / 12.9 | Source L2 height is approximately 13–14 mm; retained within inference uncertainty. |
| E6, R12–R13 | 12.9 / 13.0 | Concave ends have no separate square land in the native scan. |
| E7, R14–R15 | 13.5 / 13.8 | L3 positive member and its edge remain distinct. |
| E8, R16–R17 | 13.5 / 12.9 | Retained cemented interface to E9, with no opaque interface feature. |
| E9, R17–R18 | 12.9 / 12.9 | L4 cemented pair remains connected. |
| E10, R19–R20 | 12.9 / 12.4 | Retained source L4 relative height and adjacent air gap. |
| E11, R21–R22 | 8.8 / 8.7 | Rear-unit scan suggests roughly 9.5–10.5 mm; no >25% resolved discrepancy. |
| E12, R23–R24 | 8.7 / 8.7 | Retained rear cemented assembly; no exposed shoulder on its bonded interface. |
| E13, R24–R25 | 8.7 / 8.8 | Retained small rear meniscus and source curvature. |

All 13 ordinary elements, the ITO layer, every concave end and all three cemented assemblies were inspected in all
three source panels and compared with fresh actual SVG outlines at zoom 0, 0.5 and 1. The current apertures retain the
figure's relative heights and pass the published axial beams and full-frame chief field at all three stations. Small
aperture differences and square-looking scan endpoints do not establish separately dimensioned shoulders. A trial to
force equal-height blocks or to add a concave land was rejected at the evidence stage: no distinct cap/edge ratio can
be separated from the native stroke. No numeric land candidate was applied. There is consequently no inferred cut to
exempt from the beam rule, and no `rimCutDepthSource` is fabricated. Nine zoom/focus layout combinations have 14 finite
closed element paths and zero renderer trim; the focus combinations repeat the same published infinity spacing.

### Glass and bonded-layer check

| Source material | Source nd / νd | Disposition |
|---|---|---|
| N1 / E1 | 1.805181 / 25.4 | Retained; compatible S-TIH6 curve is a qualified proxy. |
| NITO / bonded layer | 1.721040 / 12.55 | Retained unresolved 15% ITO/polyvinylcarbazole material. |
| N2 / E2 | 1.516330 / 64.2 | Retained; compatible H-K9L proxy. |
| N3 / E3 and N8 / E8 | 1.487490 / 70.2 | Retained; compatible S-FSL5 proxy. |
| N4 / E4, N11 / E11, N12 / E12 | 1.834807 / 42.7 | Retained; compatible TAFD5G proxy. |
| N5 / E5 and N6 / E6 | 1.846658 / 23.9 | Retained; compatible S-TIH53W proxy. |
| N7 / E7 | 1.603112 / 60.7 | Retained; compatible N-SK14 proxy. |
| N9 / E9 | 1.834000 / 37.2 | Retained; compatible J-LASF010 proxy. |
| N10 / E10 | 1.607289 / 49.2 | Retained; compatible BAF5 proxy. |
| N13 / E13 | 1.784718 / 25.7 | Retained; compatible H-ZF13 proxy. |

Every modeled index/Abbe pair agrees with the original numerical rows. R16's printed `ν10 = 70.2` subscript remains
recognized as the source typo for N8/E8. No source filter, rear plate or extra unmodeled adhesive is present in this
example. The d-line reference is explicit in column 8 (587.6 nm convention); no ordinary-glass line indices or
selected ordinary-glass partial-dispersion measurements are published. There are no per-element spectral overrides
to remove. The existing labels resolve 13/14 modeled media to compatible catalog curves; the analysis's older
“coordinate class only” statuses are corrected to match that current qualified coverage.

The ITO source conflict is retained: column 9 directly gives νITO 12.55, while Table 1's Example-3 column gives
νIT 11.51 and θIT 0.484. The published 0.484 remains in the analysis as conflicting source evidence; it is not converted
to a selected-material `dPgF` or line-index override. The generic 20% mixture's θgF 0.518 is not substituted for the
selected 15% layer. Supplier, melt, chemistry and production use remain unverified; the ITO medium remains unresolved.

### Retained prescription and correlation constraints

All source R/d rows, four published variable gaps, spherical surfaces, stop and zoom controls are retained. The
5.81 heading / 5.80 Fig. 6C discrepancy remains explicit. The final image distances are previously derived Gaussian
BFDs, not printed source spacings. The selected source supplies infinity zoom data only; no finite-object internal
trajectory is reconstructed from the production 1.5 m MFD. The later 2004-priority patent remains a design correlation
for a 1990 production product, not proof that the production lens used ITO adhesive. Figure fidelity, sampled runtime
clearance and production provenance remain separate conclusions.

## 2026-10-30 — Runtime interpolation completeness follow-up

Runtime-only follow-up on 2026-10-30 sampled 65 equally spaced zoom positions (step 1/64), including the three
published stations at z = 0, 0.5 and 1. Source-review dates, all source R/d/materials and every control remain unchanged.
The 62 intermediate positions interpolate the drawing; the patent supplies no continuous zoom cam or guarantee of
focus/aperture preservation there. Focus endpoints have identical geometry at every sampled zoom position.

The greatest sampled aperture difference is 5.5166% at z = 0.796875
(limiter 10); 18/65 positions exceed the ordinary 3% aperture gate. The greatest absolute
paraxial defocus is 9.960095 mm at z = 0.78125, measured from the current printed/
previously reconstructed image plane. The largest difference between actual first-order EFL and the interpolated
station EFL is 5.7893% at z = 0.796875. No source spacing, aperture, image plane or
optical surface is tuned to remove an illustrative interval's mismatch.

| Published station z | Axial aperture difference | Paraxial defocus (mm) |
| ------------------- | ------------------------: | --------------------: |
| 0                   |                0.000000% |             -0.000000 |
| 0.5                 |                0.000000% |              0.000000 |
| 1                   |                0.000000% |             -0.000000 |

All 65 sampled modeled corner chiefs clear, with minimum reached height 100.077% of the
format half-diagonal. Every generated element path is finite and closed with zero hidden renderer trim. These
geometry and sampled-field results do not certify focus, complete pupil transmission, continuous unsampled cam
positions or production performance. The original discrete stations remain the source-supported quantitative states.
