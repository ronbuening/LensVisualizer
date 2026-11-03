## Patent Reference and Design Identification

**Patent:** JP 2024-062005 A\
**Application Number:** JP2022169724A\
**Filed:** 2022-10-24\
**Published:** 2024-05-09\
**Inventor:** Daichi Tanoue\
**Applicant:** Sigma Corporation\
**Example details:** 数値実施例2, PDF pages 12–13; section Fig. 6, aberrations Figs. 7–10; unscaled millimetres.

Sigma's published section and Numerical Example 2 share nine elements in eight groups: two leading negative menisci, five elements ahead of the stop, a cemented positive–negative pair at the front of the focusing group, a biconvex aspherical element and a biconcave aspherical rear element. Sigma lists three aspherical and two SLD elements; the example has aspherical L1, L8 and L9 and low-dispersion crowns at L2 and L6, the positions Sigma marks. Numerical Examples 1, 3 and 4 share this layout. Example 3 (f = 15.45 mm) is too short; Examples 1 and 4 (f = 16.98 mm) fit the product as well as Example 2. Sigma's 103.7° angle of view is the nominal 2·atan(21.63/17) and does not separate them. Example 2 is the closest on close-up magnification: about 1:3.9 at its printed state, against about 1:4.0 for Examples 1 and 4 and Sigma's 1:3.6. The application was filed in October 2022; the lens was released in April 2023. The patent does not establish the production radii or the retail 0.12 m focusing.

## Optical Architecture

A retrofocus wide-angle layout with a weak negative G1, a positive focusing G2 and a negative G3. The patent gives group focal lengths of −318.16, +16.33 and −35.25 mm. The nine elements form eight air-spaced groups. The patent also lists a 2.1 mm plane-parallel plate on the camera side after S18; it is not counted as a lens element.

The plate has nd = 1.51680, νd = 64.20 (BSC7 class). The 20.2943 mm gap after S18 leads to it, and the printed BF of 1.0000 mm lies behind it. The model traces the plate at its printed position but does not draw it; the patent gives no plate diameter, so the plate sets no aperture limit.

## Element-by-Element Analysis

### L1 — Negative Meniscus (2x Asph)

nd = 1.59271, νd = 66.97. Glass: MP-PCD51-70 (HOYA) catalog equivalent, a moldable crown. f = -45.8801 mm.

Surfaces S1 and S2, both aspherical. With L2 it forms the pair of negative menisci convex to the object that ¶0023 credits with sharing the front group's negative power and easing field curvature and astigmatism while keeping G1 small.

### L2 — Negative Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) catalog equivalent — low-dispersion crown. f = -25.1697 mm.

Surfaces S3 and S4. The stronger of the two front menisci; its position matches the first SLD element in Sigma's section.

### L3 — Positive Meniscus

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA) catalog equivalent. f = +33.5875 mm.

Surfaces S5 and S6. A high-index positive meniscus, convex to the object, following the two negative menisci.

### L4 — Negative Meniscus

nd = 1.98612, νd = 16.48. Glass: FDS16-W (HOYA) catalog equivalent. f = -30.0351 mm.

Surfaces S7 and S8. A negative meniscus concave to the object, separated from L3 by a meniscus-shaped air space.

### L5 — Biconvex Positive

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA) catalog equivalent. f = +22.2120 mm.

Surfaces S9 and S10. The biconvex last element of G1, directly ahead of the stop. Its rear face (R = −31.6025 mm) is the image-side convex surface of condition (3); RG1R/f = −1.81.

### L6 — Positive Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) catalog equivalent — low-dispersion crown. f = +16.3333 mm.

Surfaces S12 and S13. Front element of the focusing group, cemented to L7 (doublet C1); the listed focal length is the isolated element's. Its νd is the νd2p value of condition (2), and its position matches the second SLD element in Sigma's section.

### L7 — Negative Meniscus

nd = 1.73037, νd = 32.23. Glass: NBFD32 (HOYA) catalog equivalent. f = -16.6229 mm.

Surfaces S13 and S14. The negative member of doublet C1. ¶0014 gives the single negative lens in G2 the job of limiting the change of axial and lateral colour during focusing.

### L8 — Biconvex Positive (2x Asph)

nd = 1.77250, νd = 49.50. Glass: M-TAF105 (HOYA) catalog equivalent, a moldable glass. f = +16.5923 mm.

Surfaces S15 and S16, both aspherical. The main positive element of G2; with L6 it shares the group's positive power, which ¶0014 links to correction of spherical aberration and coma.

### L9 — Biconcave Negative (2x Asph)

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 (HOYA) catalog equivalent, a moldable glass. f = -35.2482 mm.

Surfaces S17 and S18, both aspherical. This biconcave element alone forms the fixed rear group G3 (fG3/f = −2.014, condition (1)). Per ¶0012 its negative power raises focus sensitivity, so G2 needs less travel.

## Glass Identification and Selection

The patent gives nd and νd at the d line (587.56 nm) for every element and names no glass. Each pair matches a HOYA catalog glass exactly; the data file names these as catalog equivalents, not production identifications, and the model uses their catalog dispersion. The three moldable types (MP-PCD51-70, M-TAF105, M-NBFD130) fall on the three aspherical elements, L1, L8 and L9. FCD1 and FCD705 are the low-dispersion crowns at the two positions Sigma marks SLD.

| Element | nd      | νd    | Catalog equivalent (HOYA)  |
| ------- | ------- | ----- | -------------------------- |
| L1      | 1.59271 | 66.97 | MP-PCD51-70 (moldable)     |
| L2      | 1.49700 | 81.61 | FCD1 (low dispersion)      |
| L3      | 2.05090 | 26.94 | TAFD65                     |
| L4      | 1.98612 | 16.48 | FDS16-W                    |
| L5      | 1.85451 | 25.15 | NBFD25                     |
| L6      | 1.55032 | 75.50 | FCD705 (low dispersion)    |
| L7      | 1.73037 | 32.23 | NBFD32                     |
| L8      | 1.77250 | 49.50 | M-TAF105 (moldable)        |
| L9      | 1.80610 | 40.73 | M-NBFD130 (moldable)       |

## Focus Mechanism and Close-Focus State

Inner focus: G2 (S12–S16) moves about 1.655 mm toward the object while G1, the stop and G3 stay fixed (¶0049). The printed changes of d11 and d16 differ by 0.0001 mm (1.6550 against 1.6551 mm); the model keeps both as printed, so the track grows by 0.0001 mm at the close state.

| Interval / datum       | Infinity  | Printed close state  |
| ---------------------- | --------- | -------------------- |
| d11                    | 4.6855 mm | 3.0305 mm            |
| d16                    | 2.0679 mm | 3.723 mm             |
| Object to first surface | Infinity | 58.5 mm              |
| First surface to image  | 67.5 mm  | 67.5001 mm           |

The printed close state is the 126 mm object-to-image heading of Figs. 8 and 10: the object lies 58.5 mm before S1, and the paraxial image falls 0.0001 mm behind the printed image plane, with the BF after the plate still 1.0 mm. Paraxial magnification there is −0.2565 (about 1:3.9). The plot gives F4.24 and a half-field of 51.36°; the model's paraxial working f-number at this state is 4.23, with the iris kept at its infinity radius. Sigma states a 0.12 m minimum focus and 1:3.6 maximum magnification, so the production lens focuses somewhat closer than this printed state. Positions between infinity and the printed state use linear interpolation of d11 and d16; the patent gives no focus cam, and only the two printed states have documented object distances.

## Aspherical Surfaces

The patent uses $z=(h^2/R)/(1+\sqrt{1-(1+K)(h/R)^2})+\sum A_n h^n$ (¶0093), the standard $1+K$ conic form; K and the coefficients are entered as printed, unscaled.

| Source face | K        | A4           | A6           | A8           | A10          | A12          | A14         | A16          |
| ----------- | -------- | ------------ | ------------ | ------------ | ------------ | ------------ | ----------- | ------------ |
| 1           | 0.00000  | 9.19514E-05  | -7.05291E-07 | 3.74823E-09  | -1.05336E-11 | 1.15299E-14  | 0.00000E+00 | 0.00000E+00  |
| 2           | -1.00000 | 9.87325E-05  | -2.44509E-07 | -9.27956E-09 | 1.49480E-10  | -1.01739E-12 | 3.10981E-15 | -3.38543E-18 |
| 15          | -0.30000 | -1.81732E-05 | 5.59174E-07  | -3.53515E-09 | 7.39749E-12  | 0.00000E+00  | 0.00000E+00 | 0.00000E+00  |
| 16          | 0.00000  | 5.18708E-05  | 1.69115E-07  | 3.71517E-09  | -3.86625E-11 | 1.18271E-13  | 0.00000E+00 | 0.00000E+00  |
| 17          | 0.00000  | -1.37766E-05 | 0.00000E+00  | 0.00000E+00  | 0.00000E+00  | 0.00000E+00  | 0.00000E+00 | 0.00000E+00  |
| 18          | -0.50000 | 3.82132E-06  | 2.20424E-08  | -1.16183E-09 | 2.58695E-11  | -1.62273E-13 | 4.08417E-16 | -4.16949E-19 |

Printed zero coefficients are kept as zeros.

Departures from the base sphere at the model's semi-diameters, including the conic term, are listed below; they describe the model profile, not a measured part. The three aspherical elements use moldable catalog-equivalent glasses, consistent with glass-molded aspheres, though the patent does not state the process.

| Face | Optical SD (mm) | Departure (µm) |
| ---- | --------------- | -------------- |
| 1    | 15.5            | 1800.541       |
| 2    | 11.5            | 100.282        |
| 15   | 11.3            | 176.945        |
| 16   | 11.3            | 1385.710       |
| 17   | 11.7            | -258.158       |
| 18   | 11.7            | 198.082        |

## Clear Apertures, Stop and Geometry

Fig. 6 draws stepped rims on the rear faces of L1 and L2; the model keeps them as lands (S2 optical 11.5 mm, drawn to 15.5 mm; S4 optical 8.5 mm, drawn to 12.2 mm). All semi-diameters are inferred from Fig. 6 proportions and from edge-thickness and gap limits. L4 is set to 7.1 mm, and the cemented pair to 7.4 mm, where L6's edge is about 0.3 mm thick (it reaches zero near 7.6 mm). The plate has no printed diameter and sets no limit.

The stop position is printed; its radius (3.32 mm) is derived from the printed F/4.09. The axial F/4.09 beam clears every inferred rim. Off-axis rays are trimmed mainly at S14, giving about 73% relative illumination at the 51.8° corner.

| Face | Optical SD (mm)             | Drawn rim (mm) | Authority                                        |
| ---- | --------------------------- | -------------- | ------------------------------------------------ |
| 1A   | 15.5                        | —              | Inferred from Fig. 6                             |
| 2A   | 11.5                        | 15.5           | Inferred from Fig. 6                             |
| 3    | 12.2                        | —              | Inferred from Fig. 6                             |
| 4    | 8.5                         | 12.2           | Inferred from Fig. 6                             |
| 5    | 8.7                         | —              | Inferred from Fig. 6                             |
| 6    | 8.7                         | —              | Inferred from Fig. 6                             |
| 7    | 7.1                         | —              | Inferred from Fig. 6                             |
| 8    | 7.1                         | —              | Inferred from Fig. 6                             |
| 9    | 7.5                         | —              | Inferred from Fig. 6                             |
| 10   | 7.5                         | —              | Inferred from Fig. 6                             |
| STO  | 3.32 (from F/4.09)          | —              | Printed position; radius derived                 |
| 12   | 7.4                         | —              | Inferred from Fig. 6                             |
| 13   | 7.4                         | —              | Inferred from Fig. 6                             |
| 14   | 7.4                         | —              | Inferred from Fig. 6                             |
| 15A  | 11.3                        | —              | Inferred from Fig. 6                             |
| 16A  | 11.3                        | —              | Inferred from Fig. 6                             |
| 17A  | 11.7                        | —              | Inferred from Fig. 6                             |
| 18A  | 11.7                        | —              | Inferred from Fig. 6                             |
| 19   | Not printed                 | —              | Plate; no rim limit                              |
| 20   | Not printed                 | —              | Plate; no rim limit                              |

## Model Scope and Limitations

The model's EFL is 17.499 mm against the printed 17.50 mm, and its paraxial infinity focus lies within 0.0001 mm of the printed image plane. The chief ray at the printed 51.765° half-field reaches 21.630 mm, the printed image height; distortion is about −2.6% at the corner (−2.9% near 48°), as in Fig. 7. Full-aperture spherical aberration is about −0.02 mm at infinity and −0.30 mm at the printed close state, in line with Figs. 7 and 8. The iris, not a lens rim, sets the axial beam.

At the printed close state, with field angles measured at the first surface, the model reaches the 21.63 mm image height at 56.5°, not at the plot's 51.36°; the patent does not state the angle datum of its close-state plot. Close-state edge contrast depends on the inferred rims.

| State    | Field angle (°)  | Image height (mm) | S/T10lp/mm      | S/T30lp/mm      | S/T50lp/mm      |
| -------- | ---------------- | ----------------- | --------------- | --------------- | --------------- |
| Infinity | 0.00000          | 0.00000           | 0.96810/0.96810 | 0.90054/0.90054 | 0.82928/0.82928 |
| Infinity | 25.88246         | 8.40990           | 0.96171/0.96122 | 0.85611/0.87350 | 0.72520/0.78062 |
| Infinity | 51.76500         | 21.63024          | 0.65070/0.71640 | 0.44345/0.41881 | 0.35017/0.25992 |
| Finite   | 0.00000          | 0.00000           | 0.78344/0.78344 | 0.36152/0.36152 | 0.28501/0.28501 |
| Finite   | 36.33923         | 10.81497          | 0.43697/0.18677 | 0.06526/0.06501 | 0.00259/0.01028 |
| Finite   | 56.49528         | 21.63000          | 0.12244/0.05748 | 0.02831/0.00900 | 0.02824/0.00387 |

These are computed diffraction MTF values for the model at the d line on the printed image planes (sagittal/tangential); they are not Sigma's published or measured curves.

## Sources

- [Original patent publication](https://patents.google.com/patent/JP2024062005A/en), Numerical Example 2 lens, aspheric and focus tables.
- [Sigma product page and lens construction](https://www.sigma-global.com/en/lenses/c023_17_4/); construction and specifications, not production radii or glass suppliers.
