## Patent Reference and Design Identification

**Patent:** JP 2011-248219 A  
**Application Number:** JP 2010-122984  
**Filed:** May 28, 2010  
**Published:** December 8, 2011  
**Inventor:** Dayong Li (李大勇)  
**Applicant:** Tamron Co., Ltd.  
**Title:** High variable power zoom lens  
**Example details:** 第１実施形態 (¶0020–0027), Figure 1

The model is a patent design associated with the Tamron 18-270mm F/3.5-6.3 Di II VC PZD (Model B008), not a manufacturer-confirmed production prescription; Tamron does not cite the patent. The same-priority US 2011/0292521 A1 gives the inventor's English name, which the PAJ front page romanizes differently.

The association rests on these points:

1. The table contains 16 glass elements in 13 air-separated groups, matching Tamron's specification. The 0.2 mm resin layer at S6 is modeled as its own medium on L4, not as a seventeenth element.
2. Tamron's construction drawing shows 16 elements, with LD on the large biconvex element of G1 and on one element behind the stop, AD on the G1 meniscus behind it, a hybrid aspherical element at the front of G2 and two molded aspherical elements in the rear group. In Embodiment 1 those read as L2 and L9 (the two νd = 81.61 elements), L3 (nd 1.61800, νd 63.39), L4 with its resin layer, and L12 and L14. This is a drawing correlation: the patent names no glass and marks no element as LD or AD.
3. Embodiment 2 has the same 16/13 construction and a tele end of 272.113 mm, closer to the marketed 270 mm, but its L9 is nd 1.48749, νd 70.44, an ordinary crown, so it carries one LD-class element where Tamron's drawing shows two. Its L8 is biconvex where Embodiment 1's is a positive meniscus. Embodiment 1 is modeled for its glass positions, at the cost of the focal-length difference below.
4. The patent aims at a compact APS-format zoom of at least 15× and at least 75° at the wide end (¶0008); the product is a 15× lens of 75°33′. The application was filed on May 28, 2010, and Tamron announced the B008 on December 9, 2010. Claim 3 shifts a negative rear subgroup of the third group for image stabilization, which fits VC. The patent does not mention PZD.

The patent's focal lengths are 18.5000 / 71.000 / 291.2015 mm at f/3.44 / 6.03 / 6.50, with full fields of 79.46° / 22.47° / 5.57°. The product is marketed as 18–270mm f/3.5–6.3. The 291.2 mm tele end is the patent's own value, 7.85% above the marketed 270 mm: ¶0021, ¶0024 and ¶0026 print it, and the prescription computes to 291.217 mm. No rescaling is applied. Lengths are read as millimetres; the table declares no unit.

The older B003 is a distinct 18-element, 13-group design from an earlier patent. Tamron's Sony-mount B008 omits VC. This centered model does not simulate stabilization, mount differences or coatings.

## Optical Architecture

The four functional groups have a positive–negative–positive–positive power sequence. Their computed standalone d-line focal lengths are:

| Group | Surfaces | Focal length (mm) |
| ----- | -------- | ----------------: |
| G1    | S1–S5    |       +101.614766 |
| G2    | S6–S14   |        -14.002025 |
| G3    | S16–S25  |        +44.213513 |
| G4    | S26–S31  |        +48.659423 |

G1 combines a negative front member and a low-dispersion positive partner with a separate positive AD-class element. The compact negative G2 is the variator. G3 supplies positive power behind the stop and includes a positive/negative cemented pair plus an aspheric negative/positive pair. G4 starts with the double-sided molded asphere and finishes with two singlets.

The stop is surface 15, 1.0000 mm before G3's first vertex, so it moves with G3 in the model. That is inferred from the fixed gap, not a patent statement about the iris mechanism.

The first-surface-to-image tracks at the three ¶0024 states are 133.0049 / 181.1375 / 214.9387 mm. At wide angle the paraxial back focus exceeds the EFL, a retrofocus characteristic. At telephoto the track/EFL ratio is below one, a telephoto characteristic.

## Element-by-Element Analysis

Labels L1–L16 follow the 16 glass elements, with L4r for the resin layer on L4. Focal lengths are for each element alone in air, so a cemented element's value is not its contribution in place. Roles beyond the patent's geometry are interpretation; the patent gives no per-element aberration budget.

### L1 — Negative Meniscus

nd = 1.90366, νd = 31.31. Glass: TAFD25L (HOYA, coordinate equivalent). f = -152.476 mm.

This negative meniscus is the front partner of the G1 doublet. Its higher index and lower Abbe number contrast with the adjacent LD crown; the pair combines signed power and dispersion rather than acting as two air-separated singlets.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA, coordinate equivalent) — LD by drawing correlation. f = +116.174 mm.

The biconvex partner shares S2 with L1. Tamron's drawing marks this position LD, and the coordinates fit a fluor crown. Its low dispersion relative to L1 supports an achromatizing pairing, but the model does not establish production secondary-spectrum correction.

### L3 — Positive Meniscus

nd = 1.61800, νd = 63.39. Glass: PCD4 (HOYA, coordinate equivalent) — AD by drawing correlation. f = +127.557 mm.

The positive meniscus completes G1. Tamron's drawing marks this position AD, and the coordinates fit a phosphate crown. That does not establish the production melt or an apochromatic claim.

### L4r — Hybrid Aspheric Resin

nd = 1.51460, νd = 49.96. Glass: Unmatched (hybrid asphere layer; chemistry unestablished). f = -1362.974 mm.

The thin resin layer begins at S6 and is bonded to L4 at S7. Its 0.2 mm thickness and its own index are printed, so it stays a separate medium; collapsing it into the glass surface would change both geometry and power.

### L4 — Negative Meniscus

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA, coordinate equivalent). f = -20.201 mm.

The high-index glass completes the hybrid first element of G2. Its strongly curved rear surface faces the following air space and ends at an inferred 9.9 mm on a flat land, which runs out to the 13.5 mm edge it shares with the resin, as Figure 1 draws it.

### L5 — Biconcave Negative

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA, coordinate equivalent). f = -25.691 mm.

This biconcave element is the second negative member of G2.

### L6 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA, coordinate equivalent). f = +18.282 mm.

This positive dense-flint singlet lies between the negative elements of G2 and moderates the net negative power of the variator.

### L7 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5G (HOYA, coordinate equivalent). f = -29.548 mm.

The final negative G2 meniscus precedes the variable gap to the stop. The preceding 0.6619 mm air gap nearly closes toward the rim, so its front surface ends at an inferred 9.6 mm, with a flat land out to the 10.0 mm edge.

### L8 — Positive Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA, coordinate equivalent). f = +76.185 mm.

The positive meniscus is the first element of G3, 1.0000 mm behind the stop. Embodiment 2 has a biconvex element here.

### L9 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA, coordinate equivalent) — LD by drawing correlation. f = +46.928 mm.

Tamron's drawing marks one element behind the stop LD, and this biconvex singlet is the only one there with fluor-crown coordinates. Embodiment 2 has nd 1.48749, νd 70.44 at this position. Matching L2's coordinates does not show that the same supplier or melt was used.

### L10 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA, coordinate equivalent). f = +33.853 mm.

The positive crown forms the front member of a cemented pair. Its relatively high Abbe number contrasts with the strongly dispersive negative partner.

### L11 — Negative Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA, coordinate equivalent). f = -59.622 mm.

The negative dense-flint partner completes that pair. Its isolated power and the net cemented-pair power differ because the interface is refracting between two glasses rather than glass and air.

### L12 — Biconcave Negative (Aspheric)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA, coordinate equivalent). f = -14.449 mm.

The front surface of this negative element is the aspheric S23, and it shares S24 with the following positive partner. Tamron's drawing shows two molded aspherical elements in the rear group; L12 and L14 are the two that carry aspheric surfaces. This doublet is the negative rear subgroup of G3 that claim 3 shifts for stabilization.

### L13 — Positive Meniscus

nd = 1.80809, νd = 22.76. Glass: FD225 (HOYA, coordinate equivalent). f = +28.030 mm.

This strongly dispersive positive meniscus is the rear partner of the S23–S25 cemented doublet. D25 separates the doublet from G4.

### L14 — Biconvex Positive (Aspheric)

nd = 1.59201, νd = 67.02. Glass: M-PCD51 (HOYA, coordinate equivalent). f = +22.377 mm.

The first G4 element is biconvex and aspheric on both sides, S26 and S27. The negative conic at S27 and the polynomial terms affect its peripheral sag without changing the paraxial curvature.

### L15 — Biconcave Negative

nd = 1.90366, νd = 31.31. Glass: TAFD25L (HOYA, coordinate equivalent). f = -21.282 mm.

The negative rear singlet has a nearly flat object-side surface and a strongly curved rear surface. The rear surface ends at an inferred 8.4 mm, kept small by the following 1.5195 mm air gap, with a flat land out to the 9.9 mm edge.

### L16 — Biconvex Positive

nd = 1.69895, νd = 30.05. Glass: E-FD15L (HOYA, coordinate equivalent). f = +51.250 mm.

The final positive biconvex singlet completes G4. D31 runs from its rear surface to the image plane; the patent lists no cover plate and none is added.

## Glass Identification and Spectral Limits

The patent tabulates nd and νd at the d line only; it names no supplier and gives no nC, nF, ng or partial-dispersion data. Every glass element matches a d-line catalog coordinate and none fits an e-line reading. The glass strings name a HOYA coordinate equivalent, used for dispersion away from the d line; the production supplier is unestablished. The resin layer has only nd and νd and stays Unmatched, on an Abbe approximation.

| Elements | nd / νd         | Catalog equivalent used for dispersion |
| -------- | --------------- | -------------------------------------- |
| L1, L15  | 1.90366 / 31.31 | TAFD25L                                |
| L2, L9   | 1.49700 / 81.61 | FCD1                                   |
| L3       | 1.61800 / 63.39 | PCD4                                   |
| L4r      | 1.51460 / 49.96 | none (hybrid layer)                    |
| L4       | 1.88300 / 40.80 | TAFD30                                 |
| L5       | 1.77250 / 49.62 | TAF1                                   |
| L6       | 1.84666 / 23.78 | FDS90                                  |
| L7       | 1.83481 / 42.72 | TAFD5G                                 |
| L8       | 1.72916 / 54.67 | TAC8                                   |
| L10      | 1.48749 / 70.44 | FC5                                    |
| L11      | 1.92286 / 20.88 | E-FDS1                                 |
| L12      | 1.85135 / 40.10 | M-TAFD305                              |
| L13      | 1.80809 / 22.76 | FD225                                  |
| L14      | 1.59201 / 67.02 | M-PCD51                                |
| L16      | 1.69895 / 30.05 | E-FD15L                                |

Tamron's LD and AD markings fit the coordinates: the 497816 fluor-crown equivalent of L2 and L9 has ΔPgF ≈ +0.032, and the 618634 phosphate-crown equivalent of L3 has ΔPgF ≈ +0.003. Both values come from the catalog equivalents, not from the patent. The material distribution is consistent with combining low-dispersion positive elements and higher-dispersion partners; no apochromatic or secondary-spectrum claim follows from it.

## Focus Mechanism

The patent does not say which group focuses, prints no near-focus spacings or object distances, and does not mention PZD. The model therefore stays at infinity focus at every zoom position. Its 0.49 m focus-scale end is Tamron's minimum focus distance, not a modeled near-focus state, and finite-conjugate MTF is unavailable.

### Zoom states

The patent prints six infinity states. ¶0024 gives D5, D14, D25 and D31 at three focal lengths, and ¶0026 gives the movement of all four groups at those three and at 21.477, 36.181 and 140.001 mm. Applied to the wide-end gaps, ¶0026 reproduces ¶0024's D5, D14 and D25 to 0.001 mm, and at the three further states the resulting gaps trace to 21.477, 36.183 and 140.016 mm, so all six are modeled as published stations.

| f (mm)   | Source | F-number | D5      | D14     | D25    | D31     |
| -------: | ------ | -------: | ------: | ------: | -----: | ------: |
| 18.5000  | ¶0024  |     3.44 |  1.6998 | 30.7371 | 7.4142 | 39.0550 |
| 21.477   | ¶0026  |     3.68 |  3.000  | 27.000  | 6.300  | 43.5066 |
| 36.181   | ¶0026  |     4.52 | 15.789  | 19.292  | 4.150  | 57.5057 |
| 71.000   | ¶0024  |     6.03 | 30.1741 | 12.6774 | 2.1598 | 82.0274 |
| 140.001  | ¶0026  |     6.29 | 53.367  |  8.792  | 1.581  | 86.5248 |
| 291.2015 | ¶0024  |     6.50 | 66.5707 |  1.5000 | 0.9000 | 91.8692 |

At the three ¶0026 states D5, D14 and D25 come from the movement table, D31 is computed for focus, and the f-numbers are interpolated because ¶0026 prints none. The movement table's own image distance sits 0.03–0.10 mm behind paraxial focus, so the model's groups differ from ¶0026 by a rigid offset, the same for all four groups at each state: 0.034, 0.100 and 0.054 mm imageward at these three, and 0.027 and 0.060 mm at 71 and 291.2 mm, where D31 is as printed.

Between the six states G3 and G4 follow monotone curves in log focal length, and G1 and G2 are solved for focal length and focus. G2 shows the two turning points of claim 5 and Figure 1, near 21 mm and near 93 mm; ¶0026 places the second only between 71 and 291.2 mm, so its position is inferred. Interpolated defocus stays under 0.01 mm. The path is a calculated cam, not factory data.

The patent prints no stop diameter. The iris is sized to the patent's f-numbers at the three states that print one, giving radii of 8.112 / 7.876 / 8.121 mm, and follows a smooth curve between them with its one minimum at 71 mm, while the f-number rises monotonically. This is an inferred schedule, not a measured iris. The modeled maximum f/22 is conservative against Tamron's f/22–40 range.

## Aspherical Surfaces

Surface 6 is the resin of the hybrid element; surfaces 23, 26 and 27 lie on L12 and L14. ¶0019 prints y without its exponent under the radical and a squared parenthesis after the denominator. The equation is read as the standard conic plus an even polynomial with K used directly, so K = 0 is a sphere; only that reading gives the paraxial radius R and the spherical aberration of Figures 3, 5 and 7. Every A2 is zero, terms run through A12, and no scaling is applied.

| Surface |       K |           A4 |           A6 |           A8 |          A10 |         A12 |
| ------- | ------: | -----------: | -----------: | -----------: | -----------: | ----------: |
| 6A      |  0.0000 |  1.00848e-05 | -8.23992e-08 |  7.73802e-10 | -3.65697e-12 | 7.40459e-15 |
| 23A     |  0.0000 |  1.20221e-05 | -1.69654e-08 |  3.67494e-10 | -2.56282e-12 | 0.00000e+00 |
| 26A     |  0.0000 | -2.13290e-05 |  1.07151e-07 | -1.36111e-09 |  1.05249e-11 | 0.00000e+00 |
| 27A     | -8.6353 |  9.38555e-06 |  7.17720e-08 | -8.25848e-10 |  8.21363e-12 | 0.00000e+00 |

At the inferred modeled radii, the signed sag departures from the same-vertex sphere are:

| Surface | Modeled radius (mm) | Departure (mm) |
| ------- | ------------------: | -------------: |
| 6A      |               13.50 |   +0.225902382 |
| 23A     |                9.50 |   +0.094485381 |
| 26A     |               10.50 |   -0.145321147 |
| 27A     |               10.50 |   +0.409556210 |

These are computed departures at the inferred apertures, not manufacturing dimensions. S6 adds positive departure to the hybrid's outer surface; S23 makes the negative sag less negative; S26 reduces positive sag; S27's conic-plus-polynomial profile makes its negative sag less negative. These geometric signs do not alone establish each surface's net aberration contribution.

## Conditional Expressions and First-Order Values

Condition (1), 6 < Lw/(Ft/Fw) < 10, evaluates to 8.449787 with the printed focal lengths and the wide-end track, matching the patent's 8.45. Condition (2), the ratio F_Bw/F_Bt of the combined G2–G4 focal lengths at the two ends, evaluates to −0.164206, matching the patent's −0.16. It is a rear-assembly EFL ratio, not a back-focus ratio. The patent prints its upper bound as `←０．１２`, which reads as < −0.12.

The computed surface-by-surface Petzval sum is +0.001943172832 mm⁻¹, constant across the zoom because only gaps change. It is a first-order curvature sum, not a best-focus surface or an image-quality measurement.

| Station  | Printed EFL |  Computed EFL | Printed D31 | Computed BFD |
| -------- | ----------: | ------------: | ----------: | -----------: |
| 18.5000  |     18.5000 |  18.500464473 |     39.0550 | 39.056248251 |
| 71.0000  |     71.0000 |  71.004635708 |     82.0274 | 82.032520509 |
| 291.2015 |    291.2015 | 291.216960594 |     91.8692 | 91.871809466 |

The small residuals exceed the patent's last printed digit but fit the rounding of its inputs. Radii, media and gaps at these states stay as printed, and the data is not fitted to the headline values.

## Model Scope and Limitations

The prescription is unscaled and the patent lists no cover plate. Semi-diameters are estimated from Figure 1 and checked by real-ray trace, not published. At the patent's 14.5 mm image height the chief ray clears every surface at every zoom station, and the axial beam at the stated f-number is unclipped; off-axis bundles vignette on the outer rims.

The model is centered and at infinity focus. It does not simulate VC decentering, a focus movement, the Sony-mount variant or coatings. Dispersion away from the d line comes from catalog equivalents, so chromatic results are class-level, and no MTF, transmission or manufacturing-tolerance performance is claimed for the production lens.

## Sources

1. [JP 2011-248219 A](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002011248219A): equation ¶0019; Embodiment 1 prescription ¶0021–0023; gaps ¶0024; conditions ¶0025; group movements ¶0026; Figure 1 and aberration plots; Embodiment 2 ¶0029–0034.
2. [Tamron B008 brochure](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/catalog/b008_en.pdf): 16/13 construction, mounts and the Sony VC exception, barrel dimensions, PZD, minimum focus distance and iris range.
3. [Tamron B008 construction drawing](https://www.tamron.com/product/pc_file/file/b008_lens-construction_en.svg): positions of the LD, AD, hybrid aspherical and molded aspherical elements.
4. [Tamron B008 specifications (Japanese)](https://www.tamron.com/jp/consumer/lenses/data/af-lens/b008/) and [the December 9, 2010 press release](https://m.jpubb.com/en/press/27183): marketed specifications, announcement and Japanese release date.
5. [US 2011/0292521 A1](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20110292521): same priority; used for the inventor's name, not for the prescription.
6. [HOYA optical glass data](https://www.hoya-opticalworld.com/english/datadownload/index.html): catalog equivalents for dispersion.
7. [Tamron B003 specification](https://www.tamron.com/jp/consumer/lenses/data/af-lens/b003/) and [B003 manual](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/inst/b003/b003inst_1010_en.pdf): the earlier 18-element, 13-group model.
