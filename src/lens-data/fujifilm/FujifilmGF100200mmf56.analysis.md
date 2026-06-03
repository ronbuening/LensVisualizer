# Fujifilm Fujinon GF100-200mm F5.6 R LM OIS WR

## Patent Reference and Design Identification

**Patent:** US 2019/0361195 A1
**Application Number:** 16/416,306
**Filed:** May 20, 2019
**Published:** November 28, 2019
**Priority:** JP 2018-101266 (May 28, 2018)
**Inventor:** Masato Kondo
**Applicant:** FUJIFILM Corporation
**Title:** Zoom Lens and Imaging Apparatus
**Embodiment analyzed:** Example 1 (FIG. 1, FIG. 2, FIG. 11; Tables 1–3 and 28)

This prescription transcribes Example 1 of US 2019/0361195 A1. The patent describes a four-group zoom lens with a positive first group, negative second group, positive third group, and positive fourth group; G2 and G3 move during zooming, G4 remains fixed, and only G3 moves during focusing. Example 1 is the embodiment illustrated in FIG. 1, FIG. 2, and FIG. 11 and tabulated in Tables 1–3.

The production identification is to the Fujinon GF100-200mm F5.6 R LM OIS WR for the Fujifilm GFX 44 × 33 mm format. The convergence is strong: Example 1 has twenty glass elements in thirteen air-spaced groups; the production lens is published as 20 elements in 13 groups. The prescription has two very-low-dispersion fluorophosphate elements at nd = 1.43875 / νd = 94.66 and one double-sided aspherical element; the production lens is published with two Super ED elements and one aspherical element. The patent focal length range is 101.68–203.35 mm and the tabulated F-number is 5.70 / 5.71 / 5.70, matching the marketed 100–200 mm F5.6 class. The patent image height Y = 27.35 mm corresponds to the 43.8 × 32.9 mm GFX sensor half-diagonal. The focus group and anti-vibration group also match the production naming: G3 is the internal focus group and G4B is the transverse OIS group.

Example 1 is not the only patent example close to the production lens, but it is the lead worked example. Example 5 is excluded by its F4.5 aperture. Examples 8 and 9 use a different N3p value for the first positive lens in G3, and Example 9 adds a twenty-first element in the rear group. Examples 2, 3, 4, 6, and 7 remain close variants, but Example 1 is the figure-backed prescription used here.

## Optical Architecture

The design is a positive-negative-positive-positive telephoto zoom. G1 and G4 remain fixed relative to the image plane during zooming, while G2 and G3 move on different loci. The total optical length is therefore constant, but the airspaces DD[5], DD[13], and DD[18] vary across zoom.

Group powers computed independently from the Example 1 d-line prescription are:

| Group | Contents | Focal length | Function                                                    |
| ----- | -------: | -----------: | ----------------------------------------------------------- |
| G1    |  L11–L13 |   +101.24 mm | Positive front collector and chromatic pre-correction       |
| G2    |  L21–L25 |    −32.67 mm | Negative variator                                           |
| G3    |  L31–L33 |    +90.83 mm | Compensator and sole focus group                            |
| G4    |  L41–L49 |   +104.84 mm | Fixed relay with stop, OIS group, and rear field correction |
| G4B   |  L45–L47 |    −35.52 mm | Anti-vibration subgroup                                     |

At infinity focus, DD[5] widens 1.40 → 17.56 → 25.87 mm, DD[13] contracts 22.11 → 11.50 → 0.54 mm, and DD[18] moves non-monotonically 18.27 → 12.72 → 15.37 mm. That reversal in DD[18] is the key kinematic feature that must be represented in a zoom data file.

## Element-by-Element Analysis

The element focal lengths below are standalone thick-lens-in-air values computed from each element's front radius, rear radius, center thickness, and nd. They are not the same as each element's in-situ contribution inside cemented components.

### First Lens Group G1

#### L11 — Negative meniscus, convex to object

nd = 1.74950, νd = 35.02. Glass: HOYA E-LAF7 / CDGM H-LaF4, with OHARA S-LAM7 as a close class match. f = −119.46 mm.

The front element is the negative member of the cemented L11–L12 doublet. Both radii are positive, so the element is a negative meniscus bending toward the object. Its role is primarily dispersive and aberrational rather than positive-power generation.

#### L12 — Biconvex positive crown

nd = 1.51680, νd = 64.21. Glass: N-BK7 / BSC7 / H-K9L class. f = +93.79 mm.

L12 is the positive crown partner in the front doublet. The L11–L12 cemented pair is only weakly positive as a component, about +428.7 mm, so the first group's main converging power is shifted rearward to L13.

#### L13 — Positive Super ED meniscus

nd = 1.43875, νd = 94.66. Glass: OHARA S-FPL55; S-FPL53/FCD100 family equivalent. f = +131.88 mm.

This is the first Super ED element. The OHARA catalog value matching nd = 1.43875 / νd = 94.66 is S-FPL55. S-FPL53 remains in the same Super ED fluorophosphate family, but it is not the exact νd match used in the data file.

### Second Lens Group G2

#### L21 — Biconvex positive

nd = 1.83400, νd = 37.23. Glass: OHARA S-LAH60V / HOYA NBFD10 class. f = +47.82 mm.

L21 is the positive member of the first G2 cemented component. Although it has high refractive index, νd = 37.23 places it in flint territory for optical-design purposes.

#### L22 — Biconcave negative

nd = 1.58144, νd = 40.75. Glass: OHARA S-TIL25 / HOYA E-FL5 / CDGM H-QF50A. f = −30.05 mm.

L22 is the negative member of the L21–L22 pair. The cemented component is strongly negative, about −87.97 mm, and begins the variator group's diverging action.

#### L23 — Biconcave negative low-dispersion element

nd = 1.48749, νd = 70.42. Glass: HOYA FC5 / OHARA S-FSL5 class. f = −50.63 mm.

L23 is the low-dispersion negative member of the second G2 cemented component. Paired with the dense-flint L24, it creates the largest Abbe-number separation in the second group.

#### L24 — Positive dense-flint meniscus

nd = 1.85896, νd = 22.73. Glass: OHARA S-NPH5. f = +48.69 mm.

The L23–L24 Abbe-number difference is 47.69, exactly the vdifmax value used in Conditional Expression (6). The individual thick lenses have similar and opposite standalone powers; in situ the component is nearly afocal, with its chromatic correction more important than its net power.

#### L25 — Rear negative meniscus, convex to image

nd = 1.58144, νd = 40.75. Glass: OHARA S-TIL25 / HOYA E-FL5 / CDGM H-QF50A. f = −55.55 mm.

The patent explicitly prefers a negative lens with an image-side convex surface at the rear of G2 to restrain field-curvature and astigmatism variation during zoom. L25 is that element.

### Third Lens Group G3

#### L31 — Positive meniscus

nd = 1.92287, νd = 18.90. Glass: OHARA S-NPH2. f = +96.88 mm.

L31 is the object-side positive element of the focus group and supplies the N3p value in Conditional Expression (5). Its very high index is consistent with the patent's goal of a compact, low-travel focus group.

#### L32 — Biconvex positive

nd = 1.62041, νd = 60.37. Glass: OHARA S-BSM16 / HOYA BACD16. f = +78.65 mm.

L32 is the positive member of the G3 cemented doublet. It is a crown partner for the extreme dense flint L33.

#### L33 — Negative dense-flint meniscus

nd = 1.95906, νd = 17.47. Glass: OHARA S-NPH3. f = −82.40 mm.

L33 closes the focus group. The L32–L33 cemented component is weakly positive as a whole, about +1554.7 mm, so its principal value is the control of chromatic and aberrational variation while G3 moves.

### Fourth Lens Group G4

#### L41 — Positive Super ED meniscus

nd = 1.43875, νd = 94.66. Glass: OHARA S-FPL55; S-FPL53/FCD100 family equivalent. f = +84.35 mm.

L41 is the second Super ED element. Its placement directly behind the stop lets it work on residual axial color in a smaller beam than the front-group ED element.

#### L42 — Biconvex positive

nd = 1.56883, νd = 56.06. Glass: OHARA S-BAL14 / HOYA BAC4 class. f = +37.82 mm.

L42 is the leading crown of the G4A cemented triplet.

#### L43 — Biconcave negative

nd = 1.83481, νd = 42.73. Glass: OHARA S-LAH55VS / HOYA TAFD5G / HIKARI J-LASF05 class. f = −17.00 mm.

L43 is the high-index negative core of the G4A crown-flint-crown triplet. It is the strongest individual element in the fourth group.

#### L44 — Biconvex positive

nd = 1.48749, νd = 70.42. Glass: HOYA FC5 / OHARA S-FSL5 class. f = +29.85 mm.

L44 completes the triplet. The L42–L43–L44 component nets about +269.25 mm and supplies chromatic correction in a rigid unit immediately behind the stop.

#### L45 — Biconvex positive

nd = 1.64769, νd = 33.84. Glass: HOYA E-FD2 / Schott N-SF2 / CDGM H-ZF1 class. f = +27.31 mm.

L45 is the positive member of the cemented pair at the front of G4B.

#### L46 — Biconcave negative

nd = 1.62041, νd = 60.37. Glass: OHARA S-BSM16 / HOYA BACD16. f = −22.18 mm.

L46 makes the L45–L46 cemented component negative, about −124.07 mm. Together with L47, it forms the anti-vibration group.

#### L47 — Biconcave negative

nd = 1.88300, νd = 39.22. Glass: CDGM H-ZLaF68N. f = −50.02 mm.

The CDGM H-ZLaF68N catalog line matches the patent's nd/νd code directly and is used as the primary identification.

#### L48 — Biconvex positive, double-sided aspherical

nd = 1.51760, νd = 63.50. Glass: CDGM D-K59. f = +39.83 mm.

L48 is the sole aspherical element. It is the f42r element in Conditional Expression (2), immediately in front of the rear negative meniscus. The directly matching public catalog line available here is CDGM D-K59.

#### L49 — Rear negative meniscus, concave to object

nd = 1.48749, νd = 70.42. Glass: HOYA FC5 / OHARA S-FSL5 class. f = −92.46 mm.

L49 is the rear field-correcting negative meniscus. The patent specifically identifies this type of rear negative meniscus as reducing the angle between the marginal principal ray and the surface normal while restraining astigmatism.

## Glass Identification and Selection

Glass identifications were rechecked from nd/νd rather than inherited from the prior draft. The main identification results are: S-FPL55 is the exact OHARA match to nd = 1.43875 / νd = 94.66; CDGM H-ZLaF68N is the direct match for L47; CDGM D-K59 is the direct match for L48; and several HOYA/OHARA assignments are expressed as class equivalents rather than single-vendor assertions where the patent does not name a vendor.

| Elements      |      nd |    νd | Identification                                        | Use                             |
| ------------- | ------: | ----: | ----------------------------------------------------- | ------------------------------- |
| L11           | 1.74950 | 35.02 | HOYA E-LAF7 / CDGM H-LaF4; OHARA S-LAM7 class         | Front flint of D1               |
| L12           | 1.51680 | 64.21 | N-BK7 / BSC7 / H-K9L class                            | Front crown of D1               |
| L13, L41      | 1.43875 | 94.66 | OHARA S-FPL55, S-FPL53/FCD100 family                  | Super ED elements               |
| L21           | 1.83400 | 37.23 | OHARA S-LAH60V / HOYA NBFD10 class                    | Variator positive               |
| L22, L25      | 1.58144 | 40.75 | OHARA S-TIL25 / HOYA E-FL5 / CDGM H-QF50A             | Variator negatives              |
| L23, L44, L49 | 1.48749 | 70.42 | HOYA FC5 / OHARA S-FSL5 class                         | Low-dispersion fluorocrown      |
| L24           | 1.85896 | 22.73 | OHARA S-NPH5                                          | Dense-flint color partner       |
| L31           | 1.92287 | 18.90 | OHARA S-NPH2                                          | High-index focus element        |
| L32, L46      | 1.62041 | 60.37 | OHARA S-BSM16 / HOYA BACD16                           | Crown partners                  |
| L33           | 1.95906 | 17.47 | OHARA S-NPH3                                          | Extreme dense flint             |
| L42           | 1.56883 | 56.06 | OHARA S-BAL14 / HOYA BAC4 class                       | G4A triplet crown               |
| L43           | 1.83481 | 42.73 | OHARA S-LAH55VS / HOYA TAFD5G / HIKARI J-LASF05 class | G4A triplet core                |
| L45           | 1.64769 | 33.84 | HOYA E-FD2 / Schott N-SF2 / CDGM H-ZF1 class          | OIS-group positive              |
| L47           | 1.88300 | 39.22 | CDGM H-ZLaF68N                                        | OIS-group negative              |
| L48           | 1.51760 | 63.50 | CDGM D-K59                                            | Moldable-class aspherical crown |

The patent itself tabulates only nd and νd. It does not publish partial-dispersion coefficients for the elements. The data file therefore includes catalog line indices for the two S-FPL55 elements but does not claim formal apochromatic correction.

## Focus Mechanism

The patent assigns focusing to the entire third lens group G3 only. G3 also moves during zooming, but during focusing it is the sole moving focus group. This is consistent with the production LM designation: the moving focus group is central and comparatively small, not a large front group.

The patent does not publish close-focus spacings, object-distance tables, or finite-conjugate magnification data. The data file therefore encodes the three infinity-focus zoom states only, using identical infinity/close entries for DD[5], DD[13], and DD[18] so that the renderer represents zoom motion without inventing a finite-conjugate focus stroke. Production close-focus behavior is taken from FUJIFILM specifications: 0.6 m at wide, 1.6 m at telephoto, and 0.2× maximum magnification at wide.

## Aspherical Surfaces

L48 has two aspherical surfaces, patent surfaces 31 and 32. The patent's sag expression uses tabulated KA, where KA = 1 corresponds to a spherical base. For the project's standard equation, the conic constant is therefore K = KA − 1. Surface 31 uses K = +1.8572951; surface 32 uses K = 0.

The patent Table 3 coefficients include both odd and even terms A3 through A20. The leading patent coefficients are:

| Surface |        KA |             A4 |             A5 |             A6 |             A7 |             A8 |
| ------- | --------: | -------------: | -------------: | -------------: | -------------: | -------------: |
| 31      | 2.8572951 | −7.3711067E−06 | −1.7817947E−06 | +4.3707776E−07 | −2.6735859E−08 | −6.3741378E−09 |
| 32      | 1.0000000 | −2.8957588E−06 | +3.3996120E−07 | −1.5456344E−07 | +4.0287917E−08 | −2.9995264E−09 |

Because the viewer's data schema supports even-order aspheres, the data file uses an even-order least-squares refit through A20 over h ≤ 14.5 mm. Against the full patent odd+even sag expression, the maximum residual is approximately 0.0067 µm on surface 31 and 0.0038 µm on surface 32, far below any diagram-level significance. The 14.5 mm semi-diameter is also the geometry limit used for the element: at h = 14.5 mm the full patent sag gives an L48 edge thickness of about 0.434 mm.

## Chromatic Correction Strategy

The lens distributes the two Super ED fluorophosphate elements across the optical path: L13 in G1 and L41 just behind the stop in G4A. The variator group then uses a high-Abbe-difference cemented pair, L23–L24, where |νd(L23) − νd(L24)| = 47.69. That value is not incidental; it is the vdifmax value reported in the patent's conditional-expression table.

The G3 focus group has its own positive-negative cemented pair, L32–L33, to restrain chromatic variation while the group moves for focusing. The design is therefore best described as a well-corrected achromatic telephoto zoom with deliberate secondary-spectrum reduction from Super ED fluorophosphates, not as an apochromatic design on the evidence available in the patent.

## Image Stabilization

The anti-vibration group is G4B, consisting of L45, L46, and L47. Its computed focal length is −35.52 mm. The patent states that only this intermediate group moves in a direction crossing the optical axis during image-shake correction. The negative G4B is placed between positive G4A and positive G4C, matching the patent's stated reason for increasing stabilization efficiency with a small transverse displacement.

## Conditional Expressions

All seven patent conditional expressions were recomputed from the transcribed Example 1 prescription. The values match Table 28 to the published precision.

| #   | Expression     | Computed | Patent Table 28 |
| --- | -------------- | -------: | --------------: |
| (1) | TL² / (Y · ft) |    7.479 |           7.479 |
| (2) | f42r / f41r    |   −0.431 |          −0.431 |
| (3) | f41r / d4b12r  |   −6.148 |          −6.148 |
| (4) | G1TL / Gsum    |    0.118 |           0.118 |
| (5) | N3p            |  1.92287 |         1.92287 |
| (6) | vdifmax        |    47.69 |           47.69 |
| (7) | Bf / ft        |    0.298 |           0.298 |

For expression (1), TL uses the patent's air-equivalent back focus. In the data file, the patent cover glass PP is excluded as required by the project data specification and folded into the final air-equivalent BFD: 57.4777 mm + 3.2000 / 1.51680 mm + 1.0314 mm = 60.62 mm.

## Verification Summary

A fresh paraxial y–ν ray trace was run from the transcribed Example 1 prescription. The computed focal lengths are 101.688 mm, 152.547 mm, and 203.355 mm, compared with patent Table 2 values of 101.68 mm, 152.51 mm, and 203.35 mm. The air-equivalent back focus computes to approximately 60.62 mm at all three zoom states after folding PP into the final air gap. The physical stop semi-diameter required to reproduce the F5.70/F5.71/F5.70 design aperture is 11.04–11.06 mm, so the data file uses 11.06 mm.

The surface-by-surface Petzval sum, computed as Σ φ/(n·n′), is +0.0012337 mm⁻¹, corresponding to a Petzval radius of about +811 mm and P·ftele ≈ 0.251. This is a computed diagnostic only; the patent does not tabulate Petzval sum.

Semi-diameters are not supplied by the patent. They were estimated by paraxial ray envelopes and then constrained by renderer geometry. The limiting checks in the delivered data file are L48 edge thickness ≈ 0.434 mm and several short air gaps with signed sag intrusion just under the 90% project limit; no surface was left above the accepted cross-gap intrusion limit.

## Sources

- US 2019/0361195 A1, _Zoom Lens and Imaging Apparatus_, Masato Kondo, FUJIFILM Corporation. Example 1 prescription Tables 1–3; conditional-expression values Table 28; descriptive text ¶0052–¶0074; FIG. 1, FIG. 2, and FIG. 11.
- FUJIFILM Corporation, FUJINON GF100-200mmF5.6 R LM OIS WR official specifications: 20 elements / 13 groups, one aspherical element, two Super ED elements, 100–200 mm, F5.6, 44 × 33 mm GFX coverage, focus range, maximum magnification, aperture-blade count, and OIS/LM product designation.
- OHARA, HOYA, CDGM, HIKARI, and Schott public optical-glass catalogs and cross-reference tables for nd/νd glass identification. Where the patent value matches a catalog code exactly, that catalog line is used; where several vendors are close, the file labels the result as a class or equivalent rather than a unique manufacturer assertion.
