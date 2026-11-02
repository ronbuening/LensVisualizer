## Patent Reference and Design Identification

**Patent:** [JP 2022-128635 A](https://patents.google.com/patent/JP2022128635A/en)
**Filed:** 24 February 2021
**Published:** 5 September 2022
**Inventors:** Tatsuya Moriyama, Yuki Shibata
**Applicant:** Cosina Co., Ltd.
**Example details:** Table 1 (p. 6) and Fig. 1 (p. 17); f = 34.45 mm, F/1.23, half field 22.81°, modeled at patent scale.

Example 1 is the closest numerical match to the NOKTON 35mm F1.2 X, released in September 2021. Cosina's section agrees in its eight spherical elements in six groups, front cemented pair, isolated weak meniscus, near-plano post-stop positive element, rear cemented pair and last biconvex singlet. Examples 2 and 4 have seven elements, Example 3 is a full-frame F/1.51 design, and the patent itself rejects its reference embodiment (¶0069). The design values of 34.45 mm, F/1.23 and full field 45.62° stay separate from the retail 35 mm, F1.2 and 44°. The exact production identity is unproved, since Cosina publishes no prescription and its Z-mount D35mm F1.2 page lists the same 8/6 construction.

## Optical Architecture

Eight elements form six groups with two cemented doublets. Group G1 holds L1, the L2/L3 pair and weak L4 ahead of the printed diaphragm; group G2 holds L5, the L6f/L6r pair and L7 behind it. L5 has a finite front radius of −2082.087 mm; it is not a plane. The stop is surface 8, with 3.86 mm before it and 1.79 mm after it. The patent prints no sensor plate and no aspheric coefficients, so the model has neither.

The patent does not print clear apertures, iris mechanics or partial-dispersion data.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) catalog equivalent. f = +54.288 mm in air.

The high-index positive front meniscus combines strong front bending with a weaker positive rear radius. It begins the large-aperture positive collection.

### L2 — Positive Meniscus

nd = 1.88300, νd = 40.69. Glass: J-LASF08A (Hikari) catalog equivalent. f = +24.686 mm in air.

The thick positive meniscus is cemented to L3. Both of its radii are positive.

### L3 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) catalog equivalent. f = −15.188 mm in air.

The strongly bent negative meniscus supplies opposite-sign power within the front cemented pair. The f/1.23 axial beam reaches about 11.4 mm on the shared interface, inside the 12.6 mm element edge drawn in Fig. 1.

### L4 — Positive Meniscus

nd = 1.85883, νd = 30.00. Glass: NBFD30 (HOYA) catalog equivalent. f = +300.05 mm in air.

The weak positive meniscus stands alone ahead of the stop; the patent calls it an aberration-correcting lens (¶0016) and prints its focal length as a rounded 300 mm.

### L5 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) catalog equivalent. f = +91.344 mm in air.

The post-stop positive meniscus has a very weak concave front face, which ¶0020 describes as nearly perpendicular to the axis. Cosina's section marks this element as anomalous partial dispersion, but Example 1 prints the same 2.00100/29.13 pair for L1, L5 and L7, so the production L5 material may differ from the example.

### L6f — Biconcave Negative

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) catalog equivalent. f = −11.971 mm in air.

The biconcave negative member begins the rear cemented pair and uses lower-Abbe glass than its positive partner.

### L6r — Biconvex Positive

nd = 1.88300, νd = 40.69. Glass: J-LASF08A (Hikari) catalog equivalent. f = +15.298 mm in air.

The thick biconvex positive cemented partner restores rear positive power.

### L7 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) catalog equivalent. f = +37.822 mm in air.

The final biconvex positive singlet is air-separated from the preceding pair. The patent makes it the largest element in G2 (¶0020).

The focal lengths above are thick-lens values in air from each element's printed radii, thickness and nd. They are not its net power inside a cemented system.

## Glass Identification and Selection

| Element | nd | νd | Catalog equivalent |
| --- | ---: | ---: | --- |
| L1 | 2.00100 | 29.13 | TAFD55 (HOYA) |
| L2 | 1.88300 | 40.69 | J-LASF08A (Hikari) |
| L3 | 1.84666 | 23.78 | S-TIH53 (OHARA) |
| L4 | 1.85883 | 30.00 | NBFD30 (HOYA) |
| L5 | 2.00100 | 29.13 | TAFD55 (HOYA) |
| L6f | 1.84666 | 23.78 | S-TIH53 (OHARA) |
| L6r | 1.88300 | 40.69 | J-LASF08A (Hikari) |
| L7 | 2.00100 | 29.13 | TAFD55 (HOYA) |

All values are d-line (587.56 nm, ¶0023). The labels are catalog equivalents that match the printed nd/νd pairs, not production identifications; the production supplier is unspecified. Dispersion away from the d-line comes from these catalog curves, so the model makes no apochromatic or secondary-spectrum claim.

Cosina's anomalous-dispersion mark on L5 is an inferred tag at that position. It does not follow from the printed pair, and the TAFD55 curve carried by the model does not represent it.

## Focus Mechanism

Cosina states whole-group extension, and Table 1 prints one near state: magnification 0.1436, object distance 240.11 mm from the first surface, and last gap 20.826 mm against 15.879 mm at infinity. All internal spacings stay fixed, so the assembly travels 4.947 mm, which equals fβ at printed precision. Adding the 37.95 mm track gives 298.886 mm object to image, derived from the printed intervals. A paraxial trace at the printed object distance gives magnification 0.1436 and a last gap of 20.817 mm, about the same 0.01 mm residual as at infinity.

The model publishes this printed state as its close endpoint at 0.2989 m. It is not forced to the production specification of 0.3 m at 1:6.7. Positions between infinity and the printed state are interpolated.

## Stop and Clear-Aperture Assumptions

The stop plane is printed 19.28 mm behind surface 1. The patent prints no iris diameter, so the engine sizes the opening from F/1.23. Clear semi-diameters are also unprinted; they are inferred from Fig. 1, which is drawn at true scale, and checked by real rays at infinity and at the printed near state.

Inferred clear semi-diameters in millimetres are 1: 15.07, 2: 15.07, 3: 12.6, 4: 12.6, 5: 8.9, 6: 8.9, 7: 8.5, 9: 8, 10: 8, 11: 7.9, 12: 10.2, 13: 10.2, 14: 12.39, 15: 12.39. The spherical caps of surfaces 5, 7 and 11 end at these heights and continue as flat lands to 12.6, 8.9 and 10.2 mm, the form Fig. 1 draws.

Fig. 1 draws L1 to 14.0 mm, L6 to 9.7 mm and L7 to 12.0 mm. The model keeps these three wider, because the drawn rims would lower corner transmission to about 14 %; Cosina's section also draws them wider than Fig. 1. Off-axis clipping is retained. Clearance of the iris opening does not prove blade or mount fit.

The f/1.23 axial ray reaches about 11.4 mm on surface 4, where Fig. 1 ends the cemented arc at about 11.7 mm with a flat collar to the element edge. Surface 12 is drawn the same way, with its arc ending at about 8.8 mm. The model carries both arcs to the edge.

## First-Order Properties and Aberrations

The printed infinity BF of 15.879 mm fixes the image plane 53.829 mm behind surface 1, with a 37.95 mm vertex track. A paraxial trace gives EFL 34.454 mm and BFD 15.868 mm. The printed f is reproduced, and the authored last gap exceeds the computed BFD by 0.011 mm. That residual is within the rounding of the printed table and stays in place.

The aberration plots of Fig. 2 are not a trace of Table 1 alone. Against the model, Fig. 2(a) is over-corrected by about +0.10 mm at the rim of the pupil at all three plotted wavelengths, and the difference grows as the square of the pupil height. A plane plate in the converging beam does exactly that, and neither Table 1 nor the text lists one. A trial plate of about 2.9 mm at n ≈ 1.52 behind surface 15 reproduces every plot in Fig. 2 within its reading error, and it also gives the printed half field. Thickness and index are inferred from the curves; they are not printed values.

| Quantity | Table 1 alone | With the trial plate | Patent |
| --- | ---: | ---: | ---: |
| d-line at the pupil rim, mm | −0.066 | +0.033 | +0.034 |
| d-line peak, mm (pupil height) | −0.111 (0.79) | −0.059 (0.68) | −0.058 (0.70) |
| d-line zero crossing, pupil height | past 1.0 | 0.948 | 0.949 |
| C-line on axis, mm | +0.044 | +0.041 | +0.042 |
| g-line on axis, mm | −0.014 | −0.002 | −0.004 |
| Sagittal focus at 10.65 mm, mm | −0.144 | −0.120 | −0.122 |
| Tangential focus at 10.65 mm, mm | −0.103 | −0.030 | −0.035 |
| Distortion at 14.20 mm, % | −1.94 | −2.00 | −2.00 |
| Half field at 14.20 mm, ° | 22.80 | 22.81 | 22.81 |

The model traces the printed table with no plate, so its aberrations are those of the "Table 1 alone" column. The catalog dispersion curves carry the plotted colour: with the plate, C and g fall within reading error of Fig. 2(a) from the axis to the rim, where the printed nd/νd pairs alone would put the g-line on axis at −0.057 mm.

## Modeled Diffraction and Coverage

Wide open at infinity, the model passes 100 % of the axial beam, about 80 % at 11.4° and about 23 % at 22.8°. These fractions depend on the inferred rims and are model pupils, not measured illumination.

The table gives scalar diffraction MTF at infinity on the authored image plane, with no focus shift.

| f-number | Angle ° | S/T at 10 lp/mm | S/T at 30 lp/mm | S/T at 50 lp/mm |
| ---: | ---: | --- | --- | --- |
| 1.23 | 0 | 0.303 / 0.303 | 0.187 / 0.187 | 0.123 / 0.123 |
| 1.23 | 11.4 | 0.410 / 0.448 | 0.048 / 0.010 | 0.067 / 0.055 |
| 1.23 | 22.8 | 0.672 / 0.727 | 0.423 / 0.295 | 0.240 / 0.189 |
| 8 | 0 | 0.940 / 0.940 | 0.820 / 0.820 | 0.699 / 0.699 |
| 8 | 11.4 | 0.919 / 0.924 | 0.695 / 0.732 | 0.483 / 0.548 |
| 8 | 22.8 | 0.934 / 0.924 | 0.793 / 0.765 | 0.653 / 0.615 |

Best-axial-focus offsets of −0.106 mm at f/1.23 and −0.016 mm at f/8 are not applied, so the low wide-open contrast stands as computed.

The APS-C format reference radius is 14.175 mm. The chief ray at the printed half field reaches 14.21 mm, 1.0025 times that reference, so the 22.8° rows sit slightly beyond the format corner. That height is not a claim of factory image-circle coverage.

These are sampled-frequency estimates, not factory measurements.

## Sources

1. [JP 2022-128635 A](https://patents.google.com/patent/JP2022128635A/en), Table 1 and Figs. 1 and 2.
2. [Cosina NOKTON 35mm F1.2 X](https://www.cosina.co.jp/voigtlander/x-mount/nokton-35mm-f1-2/): construction, focusing method and retail specifications.
3. [Cosina NOKTON D35mm F1.2](https://www.cosina.co.jp/voigtlander/z-mount/nokton-d35mm-f1-2/): Z-mount construction and specifications.
