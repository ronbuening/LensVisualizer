# Canon RF 14mm f/1.4 L VCM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2026/0235852 A1\
**Application Number:** 19/434,445\
**Filed:** December 29, 2025\
**Priority:** JP 2025-021520, February 13, 2025\
**Published:** August 13, 2026\
**Inventor:** Tatsuro Watanabe\
**Applicant:** Canon Inc.\
**Title:** _Optical System and Image Pickup Apparatus_\
**Example details:** Infinity section in Fig. 1, infinity and near aberrations in Figs. 2A and 2B, and prescription on printed pp. 6–7.

Canon identifies Tatsuro Watanabe, the patent inventor, as the optical designer of the production RF14mm F1.4 L VCM. The example agrees with Canon's drawing in its 18 lens elements and 13 air-spaced groups, the positions of the UD and fluorite lenses and bonded BR layer, and the five-element focus unit ending in a double-concave asphere. Canon identifies that element and the two corresponding front aspheres as glass-molded. The design values of 14.42 mm and f/1.45 are close to the marketed 14 mm f/1.4.

The iris aligns within one pixel in Canon's original section drawing when the infinity model is registered to the first and last lens vertices. The rear focusing asphere sits about six pixels farther toward the object, and several lens edges differ. Canon gives no focus setting or dimensional scale for its drawing. The construction and designer support a close production correlation. The exact production prescription, material grades and clear apertures remain unverified.

Canon announced the lens in 2026. Its specification lists a full-frame RF mount, 11 aperture blades, an f/16 minimum aperture, 0.24 m minimum focus and 0.11× maximum magnification. The lens accepts a cut-to-size gel or polyester filter in a rear holder and has no front filter thread.

## Optical Architecture

This ultra-wide prime has three functional units with positive net power. The first two lenses distribute the strong negative power at the front. Their shapes help hold down barrel distortion and field curvature while maintaining space behind the lens, as described in ¶¶0023–0026. The fixed front unit converges the beam before it reaches the moving unit, which lets the focusing elements be smaller. The weakly positive fixed rear doublet reduces incidence angles at the image and contributes to the off-axis correction (¶¶0075, 0084).

| Patent unit | Diagram media               | Computed focal length | Function                                                                                   |
| ----------- | --------------------------- | --------------------: | ------------------------------------------------------------------------------------------ |
| L1          | G1–G12, including resin G11 |             +60.62 mm | Fixed front section. L1A, ahead of the stop, is +140.33 mm. L1B, behind it, is +293.36 mm. |
| L2          | G13–G17                     |             +45.36 mm | Moving positive focus unit with one doublet and three singlets.                            |
| L3          | G18–G19                     |            +164.63 mm | Fixed, weakly positive image-side doublet.                                                 |

Canon counts 18 lens elements, including the fluorite element. The model also counts the bonded resin G11 as a separate optical medium, giving 19 numbered entries and the same 13 air-spaced groups. There are four glass doublets and one glass–resin–glass assembly. G numbers below follow the numerical table's lens order, including the resin. L1–L3 are the patent's functional units.

The aperture stop is surface 17, inside L1. It lies 57.60 mm behind the first vertex, 4.59 mm behind surface 16 and 1.99 mm ahead of surface 18. Its derived semi-diameter is 13.102 mm for the design f/1.45, with a paraxial entrance-pupil semi-diameter of 4.971 mm. Traced exactly, that iris admits an on-axis entrance radius of 4.750 mm at infinity, which is f/1.517 by focal length over entrance diameter; f/1.45 is the paraxial design value. Lens rims are estimated from Fig. 1 and compared with Canon's section. The physical iris diameter and clear apertures are unpublished. The 13.43 mm final gap represents air. The optional production filter is outside this prescription.

## Element-by-Element Analysis

The focal lengths below are computed for each element in air at the patent's reference wavelength. Bonded assemblies have their own net powers.

### G1 — Negative meniscus, two aspherical surfaces

`nd = 1.58313, νd = 59.4. Glass: S-BAL42 (Ohara equivalent). f = −36.71 mm.`

The broad front meniscus supplies the larger share of the first pair's negative power. Its two aspherical faces change the bending of rays at different heights. The patent assigns the two front aspheres to distortion and astigmatism control and discusses the outer curvature of the first element in particular (¶0078).

### G2 — Negative meniscus, two aspherical surfaces

`nd = 1.85400, νd = 40.4. Glass: L-LAH85V (Ohara equivalent). f = −51.63 mm.`

The second meniscus shares the front negative power with G1. The air space between its image-facing asphere and the concave front of G3 has negative power. The patent associates this air lens with a lower Petzval sum and improved field curvature (¶0079).

### G3 and G4 — Front cemented doublet C1

- **G3, biconcave negative.** `nd = 1.49700, νd = 81.7. Glass: unmatched, at Canon's UD position. f = −85.68 mm.`
- **G4, biconvex positive.** `nd = 2.00100, νd = 29.1. Glass: S-LAH99 (Ohara equivalent). f = +51.90 mm.`

The low-dispersion negative element is bonded to a stronger positive element with much higher dispersion. The shared curvature gives the two materials a common interface for chromatic correction. In air the assembly has a net focal length of +123.62 mm.

### G5 — Negative meniscus, fluorite position

`nd = 1.43387, νd = 95.1. Glass: unmatched, at Canon's fluorite position. f = −51.99 mm.`

The patent labels this concave-front meniscus GFn and gives its dispersion and power explicit bounds. The high Abbe number and convex image-facing surface give the designer a way to control lateral color and higher-order field curvature (¶¶0042, 0066–0068). Canon's marked section places its concave fluorite lens at this position.

### G6 and G7 — Second cemented doublet C2

- **G6, biconvex positive.** `nd = 1.75500, νd = 52.3. Glass: S-LAH97 (Ohara equivalent). f = +24.84 mm.`
- **G7, negative meniscus.** `nd = 1.90366, νd = 31.3. Glass: TAFD25 (Hoya equivalent). f = −45.33 mm.`

This is a net positive assembly (+56.50 mm). The convex rear face of G6 forms the strongly curved bond with the concave front of G7. The negative higher-dispersion member balances part of the positive power and its chromatic contribution.

### G8 — Biconvex positive

`nd = 2.00100, νd = 29.1. Glass: S-LAH99 (Ohara equivalent). f = +44.10 mm.`

The front face is shallow and the rear face provides most of the bending. This singlet helps bring the fixed front unit to net positive power after the negative front section.

### G9 — Biconcave negative

`nd = 1.85478, νd = 24.8. Glass: S-NBH56 (Ohara equivalent). f = −115.35 mm.`

This thin, weakly negative lens is the last glass before the stop. Its shallow object-facing surface and steeper image-facing surface apply a small negative correction where the axial beam is wide.

### G10, G11 and G12 — Glass–resin–glass assembly C3

- **G10, biconvex positive.** `nd = 1.74320, νd = 49.3. Glass: S-LAM60 (Ohara equivalent). f = +39.52 mm.`
- **G11, positive resin meniscus Gp.** `nd = 1.57060, νd = 20.1. Material: unmatched patent resin, θgF = 0.7782. f = +302.11 mm.`
- **G12, biconcave negative.** `nd = 1.66565, νd = 35.6. Glass: unmatched. f = −37.29 mm.`

The 0.70 mm resin layer is bonded between the two glass members. Its image-facing convex shape makes the layer nearly concentric with the oblique bundles that enter it. The patent explains that the position and anomalous dispersion help correct both longitudinal and lateral color (¶¶0043, 0070, 0080). This is the same position Canon marks as BR optics. The complete assembly is L1B and has only weak positive power.

### G13 and G14 — Moving cemented doublet C4

- **G13, biconvex positive.** `nd = 1.59282, νd = 68.6. Glass: FCD515 (Hoya equivalent). f = +27.72 mm.`
- **G14, biconcave negative.** `nd = 1.85478, νd = 24.8. Glass: S-NBH56 (Ohara equivalent). f = −18.75 mm.`

The doublet contributes net negative power (−64.17 mm) at the front of the moving unit. Its contrasting Abbe numbers make it part of the color correction that moves with focus. The following positive singlets bring the complete L2 unit to positive power.

### G15 — Biconvex positive

`nd = 1.53775, νd = 74.7. Glass: S-FPM3 (Ohara equivalent). f = +38.84 mm.`

Equal and opposite vertex radii give this low-dispersion singlet a symmetric form. It supplies positive power behind the moving doublet with less primary dispersion than the positive singlet that follows.

### G16 — Biconvex positive

`nd = 1.92286, νd = 20.9. Glass: E-FDS1 (Hoya equivalent). f = +35.18 mm.`

The high-index second positive singlet is immediately ahead of the rear focusing asphere. Together with G13 and G15 it spreads positive power over three elements with substantially different dispersions. The patent associates the three-positive, two-negative unit with controlling color, spherical aberration and field curvature through focus (¶0081).

### G17 — Double-concave negative, one aspherical surface

`nd = 1.85400, νd = 40.4. Glass: L-LAH85V (Ohara equivalent). f = −54.99 mm.`

GRn is the last element of the moving unit. Asphere 29A faces the object, and the much steeper concave rear face supplies most of the paraxial power. The patent connects this placement with focus-dependent astigmatism and the concave rear surface with suppression of sagittal coma flare (¶¶0082–0083). The shape and placement correspond to Canon's concave GMo focusing element.

### G18 and G19 — Fixed rear cemented doublet C5

- **G18, biconvex positive.** `nd = 1.59282, νd = 68.6. Glass: FCD515 (Hoya equivalent). f = +33.24 mm.`
- **G19, negative meniscus.** `nd = 2.00100, νd = 29.1. Glass: S-LAH99 (Ohara equivalent). f = −42.28 mm.`

The near-flat entrance face leads into a strongly curved cemented junction. A higher-dispersion negative member follows the low-dispersion positive member. This is all of L3, which the patent assigns to lateral color and astigmatism correction (¶0084).

## Glass Identification and Selection

The patent defines the reference d-line at 587.6 nm, the rounded helium d wavelength. It gives C, F and g at 656.3, 486.1 and 435.8 nm. The catalog equivalents below supply spectral curves for the model and preserve the patent's d-line indexes and Abbe numbers. Supplier and melt identities are unspecified.

| Reference glass or material              |      nd |   νd | Diagram media |
| ---------------------------------------- | ------: | ---: | ------------- |
| Ohara S-BAL42                            | 1.58313 | 59.4 | G1            |
| Ohara L-LAH85V                           | 1.85400 | 40.4 | G2, G17       |
| Unmatched at UD position                 | 1.49700 | 81.7 | G3            |
| Ohara S-LAH99                            | 2.00100 | 29.1 | G4, G8, G19   |
| Unmatched at fluorite position           | 1.43387 | 95.1 | G5            |
| Ohara S-LAH97                            | 1.75500 | 52.3 | G6            |
| Hoya TAFD25                              | 1.90366 | 31.3 | G7            |
| Ohara S-NBH56                            | 1.85478 | 24.8 | G9, G14       |
| Ohara S-LAM60                            | 1.74320 | 49.3 | G10           |
| Unmatched anomalous resin at BR position | 1.57060 | 20.1 | G11           |
| Unmatched glass                          | 1.66565 | 35.6 | G12           |
| Hoya FCD515                              | 1.59282 | 68.6 | G13, G18      |
| Ohara S-FPM3                             | 1.53775 | 74.7 | G15           |
| Hoya E-FDS1                              | 1.92286 | 20.9 | G16           |

The UD and fluorite designations identify locations in Canon's production diagram. Nearby spectral references differ from the printed coordinates, so their curves are left unassigned. The resin uses its published partial-dispersion ratio, θgF = 0.7782, which is +0.17928 above the patent's cubic normal and +0.16821 above the linear Schott normal. Its exact chemistry and full spectrum remain unspecified.

## Focus Mechanism

The five-element L2 unit moves 1.78 mm toward the object from infinity to the tabulated near state. L1, the iris and L3 remain fixed. Canon describes two voice coil motors driving the production focus unit. The patent geometry describes one translating unit.

| Quantity                                                 |    Infinity |      Published near state |
| -------------------------------------------------------- | ----------: | ------------------------: |
| Air gap after surface 21                                 |     5.67 mm |                   3.89 mm |
| Air gap after surface 30                                 |     6.98 mm |                   8.76 mm |
| Published object-to-image distance                       |           ∞ |                254.067 mm |
| Published lateral magnification                          |           — |                    −0.10× |
| Computed effective focal length                          | 14.41658 mm |               14.40778 mm |
| Computed paraxial image distance behind the last surface | 13.42094 mm | 13.41943 mm at 254.067 mm |
| Computed paraxial image-space f-number, fixed iris       |   f/1.45000 |                 f/1.44912 |
| Computed finite-conjugate working f-number, paraxial     |           — |                 f/1.47237 |

The infinity focal length rounds to the patent's 14.42 mm. The computed infinity and finite images lie 0.009 mm and 0.011 mm ahead of the printed 13.43 mm rear gap, respectively. At the printed near distance, computed magnification is −0.099996×. At the fixed image plane the rounded gaps focus exactly at 253.018 mm. The other focus positions interpolate the two published rows. The modeled focus range ends at the patent's near state. Canon publishes a separate production endpoint of 0.24 m at up to 0.11×.

## Aspherical Surfaces

The patent uses a base conic with conventional constant K, plus even powers A4 through A14 of the radial height in millimeters (¶¶0087–0093). K = 0 specifies a spherical base. Higher terms omitted from the table contribute zero.

| Surface         |           K |          A4 |          A6 |           A8 |          A10 |          A12 |          A14 |
| --------------- | ----------: | ----------: | ----------: | -----------: | -----------: | -----------: | -----------: |
| 1A (G1 front)   |           0 |  2.85263e−6 | −1.06525e−9 |  6.56552e−12 | −1.19824e−14 |  1.27858e−17 | −5.74533e−21 |
| 2A (G1 rear)    | −7.63673e−1 |  3.24368e−7 |  1.38290e−8 | −2.16651e−10 |  1.03526e−12 | −2.85465e−15 |  2.51224e−18 |
| 3A (G2 front)   |           0 | −1.93330e−5 |  5.99502e−8 |  2.63193e−11 | −1.91446e−13 |            — |            — |
| 4A (G2 rear)    |           0 | −1.26314e−6 |  8.53091e−8 |  3.29375e−10 | −1.43389e−12 |  6.79219e−15 |            — |
| 29A (G17 front) |           0 | −1.36198e−5 | −5.53900e−9 |  2.76263e−11 | −2.94829e−13 |  7.25340e−16 |            — |

At the modeled clear rims, signed departures from the base conic are +2.625 mm and −1.664 mm on G1 (29.5 and 20.1 mm semi-diameters). G2's front departs −0.382 mm and its rear +0.756 mm (17.9 and 13.4 mm). The rear moving asphere departs −0.585 mm at 14.1 mm, adding objectward sag to its shallow concavity. These are polynomial departures from each face's own base conic. Canon identifies the corresponding production aspheres as glass-molded.

## Chromatic Correction Strategy

The fixed front unit places two low-dispersion negative elements ahead of the stop and a positive anomalous-dispersion resin just behind it. The former act where the oblique bundles are widely separated. The latter gives particular control over the short-wavelength residual near the center of the image. The moving unit includes both a low-dispersion positive member and strongly dispersive glass. The last doublet continues the lateral-color correction close to the image.

The d-line axial curves show the same small negative mid-pupil excursion as Figs. 2A and 2B. At infinity the model's d-line shift is −0.024 mm at 70% and −0.005 mm at 100% of the entrance radius that the iris admits. At the near state the corresponding shifts are −0.032 mm and −0.010 mm at 70% and 100% of the real stop-limited axial bundle. The model's near-axis g-line focus is 0.037 mm ahead of the d-line focus at infinity and 0.044 mm ahead at the near state. The patent plots support the scale of the residuals, with some differences in the violet curve. Complete wavelength-dependent performance depends on the unidentified media and the true clear apertures.

## Conditional Expressions

Conditions (1)–(17) in ¶¶0027–0044 constrain focus-unit power, spacing, front shape and dispersion. All 17 fall inside their stated bounds when evaluated with the rounded prescription. The focus sensitivity in condition (8) uses the paraxial magnifications of the second and third units at infinity. Condition (16) uses the patent's cubic dispersion reference.

| Condition | Quantity                              |  Allowed range | Table 1 | Computed |
| --------- | ------------------------------------- | -------------: | ------: | -------: |
| 1         | L2 focal length / system focal length |  2.70 to 10.00 |   3.146 |    3.147 |
| 2         | L1 / L2 focal lengths                 |   0.50 to 2.80 |   1.338 |    1.336 |
| 3         | L1B / L2 focal lengths                |   1.00 to 9.00 |   6.468 |    6.467 |
| 4         | System / L1A focal lengths            |  −0.30 to 0.30 |   0.103 |    0.103 |
| 5         | Back focus / iris-to-image distance   |   0.10 to 0.35 |   0.192 |    0.192 |
| 6         | System / L3 focal lengths             |  −0.30 to 0.30 |   0.088 |    0.088 |
| 7         | System focal length / back focus      |   0.80 to 1.50 |   1.074 |    1.074 |
| 8         | Focus sensitivity                     |   0.50 to 1.10 |   0.802 |    0.802 |
| 9         | GRn / L2 focal lengths                | −3.00 to −0.50 |  −1.212 |   −1.212 |
| 10        | L2 maximum internal gap / gap to L3   |   0.01 to 0.60 |   0.043 |    0.043 |
| 11        | G1 shape factor                       | −4.00 to −1.00 |  −1.583 |   −1.583 |
| 12        | G2 shape factor                       | −4.00 to −1.00 |  −1.381 |   −1.381 |
| 13        | Combined G1–G2 / system focal lengths | −3.00 to −0.80 |  −1.272 |   −1.272 |
| 14        | Abbe number of GFn                    |  81.0 to 100.0 |    95.1 |     95.1 |
| 15        | GFn / system focal lengths            | −6.50 to −2.00 |  −3.606 |   −3.606 |
| 16        | Gp anomalous partial dispersion       | 0.050 to 0.250 |   0.179 |    0.179 |
| 17        | System / Gp focal lengths             | 0.020 to 0.090 |   0.048 |    0.048 |

## Field Coverage and Modeling Limits

The lens stays at the patent's near-production scale. The sum of the printed axial dimensions gives 127.52 mm from the first vertex to the image plane, compared with 127.50 mm in the patent's summary. The small first-order residuals are consistent with the rounded surface table.

At infinity the exact d-line chief ray at the 57° plot limit lands at about 18.70 mm. This agrees closely with the table's 18.73 mm image height. The 52.40° tabulated half-angle is the rectilinear angle corresponding to that image height and the stated focal length. The difference from the traced angle reflects barrel distortion. Canon specifies a 114° diagonal field and describes electronic distortion correction for the production lens. The model depicts the optical image before that correction. At wide aperture, estimated rims preserve off-axis vignetting. The farthest transmitted infinity chief ray on the continuous central branch reaches about 20.93 mm, short of the 21.65 mm full-frame corner.

## Sources and References

- [US 2026/0235852 A1, USPTO publication](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20260235852) — Figs. 1 and 2A–2B, Numerical Example 1 on printed pp. 6–7, Table 1 and claims.
- [Canon RF14mm F1.4 L VCM technical specifications](https://www.usa.canon.com/support/p/rf14mm-f1-4-l-vcm) — construction, special materials, focus, aperture and filter holder.
- [Canon developer interview](https://hk.canon/en/pro-imaging/rf14mm-f14-l-vcm/article) — designer, molding, color correction, focus unit and electronic distortion correction.
- [Canon Marketing Japan optical section](https://personal.canon.jp/articles/interview/developer-rf14-f14l-vcm) and [marked lens construction](https://personal.canon.jp/product/camera/rf/rf14-f14lv/spec) — location and shape of the special elements.
- [Canon's February 2026 announcement](https://www.usa.canon.com/newsroom/2026/20260204-lenses) — introduction of the RF14mm F1.4 L VCM.
