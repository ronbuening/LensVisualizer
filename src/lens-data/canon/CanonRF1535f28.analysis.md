# Canon RF 15–35mm f/2.8L IS USM

## Patent Reference

**Patent:** US 2020/0257181 A1 (Gyoda, Canon Kabushiki Kaisha)

**Inventor:** Yuichi Gyoda

**Assignee:** Canon Kabushiki Kaisha

**Priority:** JP 2019-021356, February 8, 2019

**Published:** August 13, 2020

US 2020/0257181 A1, Yuichi Gyoda, Canon, Numerical Example 1, PDF pages 14–15 (printed pages 5–6). Figures 1A–1B on PDF page 2 show both zoom ends. The source design is 15.45/24.00/33.95 mm, f/2.91, with half-fields 54.47°/42.03°/32.51° and image height 21.64 mm. Retail focal-length and aperture markings remain distinct.

## Architecture

Sixteen glass elements form twelve air-separated components and five glass groups. The source separately counts the independently moving aperture stop as a zoom unit. Four cemented doublets are L6/L7, L8/L9, L10/L11 and L13/L14. The stop is source surface 14; B4 is the centered stabilization doublet. All optical radii, thicknesses, indices and source element focal lengths are retained.

There is no cover-glass or filter block in this example. Source S21 is a flare-cutting diaphragm, not glass. It remains omitted from the sequential prescription: its gap is combined with d20=3.52, yielding 10.56/4.79/2.47 mm between B4 and B5. The source telephoto d21=−1.05 places that diaphragm behind the next front vertex, which the current forward sequential model cannot represent as an ordinary gap. This preserves vertex spacing and paraxial power but does not preserve diaphragm clipping. Its published diameters 25.93/22.49/21.91 mm remain an explicit modeling follow-up; vignetting/flare results are not full reproductions of this source diaphragm.

## Element by element

| Element | nd / vd | Source isolated focal length (mm) | Role |
|---|---|---|---|
| 1 | 1.58313 / 59.4 | -28.51 | Neg. Meniscus (2× Asph) singlet |
| 2 | 1.854 / 40.4 | -96.46 | Biconcave Neg. (2× Asph) singlet |
| 3 | 1.59522 / 67.7 | -50.16 | Biconcave Negative singlet |
| 4 | 1.85478 / 24.8 | 47 | Biconvex Positive singlet |
| 5 | 1.84666 / 23.9 | 72.07 | Biconvex Positive singlet; source B2 focus unit |
| 6 | 1.92286 / 20.9 | -44.91 | Negative Meniscus element of cemented doublet D1; source B2 focus unit |
| 7 | 1.53172 / 48.8 | 45.2 | Positive Meniscus element of cemented doublet D1; source B2 focus unit |
| 8 | 2.00069 / 25.5 | -72.66 | Negative Meniscus element of cemented doublet D2 |
| 9 | 1.53775 / 74.7 | 30.24 | Biconvex Positive element of cemented doublet D2 |
| 10 | 1.92286 / 20.9 | 31.5 | Positive Meniscus element of cemented doublet D3; centered B4 stabilization group |
| 11 | 1.834 / 37.2 | -21.72 | Biconcave Negative element of cemented doublet D3; centered B4 stabilization group |
| 12 | 1.497 / 81.6 | 40 | Biconvex Positive singlet |
| 13 | 1.497 / 81.6 | 33.68 | Biconvex Positive element of cemented doublet D4 |
| 14 | 2.0509 / 26.9 | -21.79 | Biconcave Negative element of cemented doublet D4 |
| 15 | 1.854 / 40.4 | -93.22 | Neg. Meniscus (2× Asph) singlet |
| 16 | 1.92286 / 20.9 | 87.31 | Biconvex Positive singlet |

These individual focal lengths are explicitly published in the patent and are retained, rather than replaced by recalculation from rounded data. Catalog names are compatible counterparts with source nd/vd retained. Material identity, supplier, production coatings and chemistry are not established. Removed two inferred APD badges and unsupported coating/chemistry descriptions. No per-element partial-dispersion measurements are supplied.

## Aspheres and semi-diameters

All six source aspheres retain their K and A4–A14 terms. Restored the previously omitted A16 coefficients: S1 +2.16318e−23, S3 −2.43479e−21 and S27 −3.10043e−23. Paragraph 0061 defines the standard (1+K) base-sag convention. The former claim that the engine could not represent A16 is obsolete. At the published SDs these terms contribute approximately +2.34136 mm, −0.36070 mm and −0.000160 mm respectively; the old “3 μm maximum” assertion was wrong.

Restored the published effective diameters/2 throughout, subject to one explicit renderer margin: S3 SD=18.10 mm versus source 18.225 mm. With the full polynomial, source S2/S3 combined sag is 9.59 mm, exceeding the renderer's 90% clearance allowance 9.513 mm within the physical 10.57 mm gap. This is a clearance-policy margin, not proof that the source glasses intersect. All remaining source SDs are retained exactly. Figure 1 was inspected from the original; numerical diameters take precedence over contaminated automated windows around labels or adjacent elements.

## Zoom, focus and aperture

All three source zoom stations and variable gaps are retained. Camera-relative wide-to-tele motions are B1 +14.59, B2 −9.23, B3 −23.07, B4 −10.06 and B5 −18.15 mm. The stop moves independently of B3. Matrix EFL is 15.45054/24.00347/33.95268 mm; total tracks are 159.58/147.48/144.99 mm, with the middle differing 0.01 mm from the source summary. No gap is fitted to remove that rounding difference.

B2 (L5–L7) moves imageward for focusing, but finite-focus spacings are not published. Focus remains disabled and the 0.28 m label is retained retail metadata rather than a modeled conjugate. Stabilization remains centered.

The published iris diameters are 16.52/20.93/26.65 mm. They now directly supply physical radii 8.26/10.465/13.325 mm at the source stations; they are not inferred from nominal f-number. Intermediate iris sizes are interpolated. The first aperture preset is corrected to f/2.91; the existing f/22 upper limit remains a display setting. The shared data contract validates the schedule's length and positive finite radii and distinguishes it from the inferred iris option.

## Verification and limits

Surface and image-circle checks pass with the explicit S3 rendering margin. Source zoom stations have no hidden rim trimming. The omitted flare diaphragm, unavailable finite-focus travel and centered IS remain source-model limitations even when those checks pass.

## Sources

- Original local patents/US20200257181A1.pdf, Numerical Example 1, Figures 1A–1B, equation paragraph 0061 and source iris/flare-diaphragm tables.
- [US 2020/0257181 A1 patent record](https://patents.google.com/patent/US20200257181A1/en).
- Current local glass catalog for qualified compatible counterparts.
