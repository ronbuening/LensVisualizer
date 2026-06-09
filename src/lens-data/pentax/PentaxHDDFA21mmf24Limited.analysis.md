# HD PENTAX-D FA 21mm F2.4 ED Limited DC WR

**Patent:** JP 2022-117775 A (特開2022-117775)  
**Application Number:** 特願2021-14462  
**Filed:** 2021-02-01  
**Published:** 2022-08-12  
**Inventors:** Tomoya Koga, Yuichiro Ebashi, Takashi Enomoto (古賀知也・江橋裕一郎・榎本隆)  
**Applicant:** Ricoh Company, Ltd. (株式会社リコー)  
**Title:** Single-focal-length lens, interchangeable lens, and imaging device (単焦点レンズ、交換レンズ及び撮像装置)  
**Embodiment analyzed:** Numerical Example 1 (数値実施例１), infinity focus

## Patent Reference and Design Identification

JP 2022-117775 A discloses nine numerical examples of a compact wide-angle prime built from an object-side front group G1, a central aperture stop SP, and a positive rear group G2, with a parallel cover-glass plate CG placed before the image surface (¶0012). Numerical Example 1 is the embodiment transcribed here.

The match to the production HD PENTAX-D FA 21mm F2.4 ED Limited DC WR rests on convergent evidence rather than focal length alone.

1. **Element and group count.** Example 1 has 11 elements in 8 air-separated groups. The production lens is published as 11 elements in 8 groups. The shorter examples in the same patent family use 13 or 14 elements and are excluded immediately.
2. **Special-glass population.** Example 1 contains four S-FPL51-class ED elements at L3A, L5A, L7A, and L11A, plus one S-FPL53 super-ED element at L9A. L11A is also aspherical. This exactly matches Ricoh's published statement of four ED elements and one super-ED element, with one ED element aspherical.
3. **Focal length, aperture, and field.** Example 1 gives f = 21.32 mm, Fno = 2.45, Y = 21.64 mm, and ω = 46.1° in Table 3. The production lens is marketed as 21 mm F2.4 and covers the 36 × 24 mm full-frame diagonal with a published 92° diagonal angle of view.
4. **Focus architecture.** The patent states that Examples 1-4 focus by moving at least part of the rear group G2, and that a separate aberration-correction group can move on a different trajectory (¶0056, ¶0058-0059). The production lens is specified as an internal/rear-focus autofocus design with a built-in DC motor.
5. **Filing sequence.** The patent application was filed in February 2021, and the product was announced later in 2021, before publication of the application in 2022. That timing is consistent with a production design protected by its own pending application.

The data file uses the Example 1 infinity-focus prescription from Tables 1-3. The patent does not publish a close-focus variable-spacing table; close-focus behavior is therefore described qualitatively, and the close-focus specification is taken from Ricoh's production data.

## Optical Architecture

The design is a retrofocus wide-angle prime for a single-lens-reflex register. Its air-equivalent back focus is 40.33 mm, almost 1.89× the 21.32 mm effective focal length, so the lens provides the long rear clearance needed for Pentax K-mount mirror-box use.

The distinctive feature is that the retrofocus burden is not carried by an extremely strong front group. The patent instead specifies a weak-power front group and a central stop, with the axial beam at the stop larger than the beam entering the first surface (¶0014-0017). Example 1 computes to fF = -1839 mm and fR = 39.97 mm, so |fF|/fR = 46.01. That is the mathematical expression of the weak-front / stronger-rear architecture.

Power distribution is as follows:

- **G1, front group:** six elements in four air-separated groups, net weak negative power. It consists of two air-spaced negative menisci, a cemented L3A+L4A doublet whose front member is the third object-side-convex negative meniscus, and a cemented L5A+L6A doublet. This sequence bends the wide off-axis bundle gradually before the stop.
- **SP, aperture stop:** located between surfaces 10 and 12. The front-surface-to-stop and rear-surface-to-stop distances give DF/DR = 1.55, consistent with the patent's centered-stop condition.
- **G2, rear group:** five elements in four air-separated groups, net positive power. It opens with the cemented lens BL (L7A+L8A), followed by the super-ED biconvex L9A, the dense-flint negative meniscus L10A, and the rearmost ED double-asphere L11A.

The first rear cemented lens BL is specifically called out by the patent: its cemented interface is concave toward the object and is used for spherical, axial color, coma, astigmatism, and lateral color correction in the enlarged stop-side beam (¶0020-0022).

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens-in-air values computed from the prescription. They describe the element itself, not its in-situ contribution inside the assembled system.

### L1A — Negative Meniscus, convex to object

nd = 2.00100, νd = 29.1. Glass: S-LAH99 (OHARA) — high-index dense flint. f = -47.1 mm.

L1A is the large front negative meniscus required by the wide-angle entrance geometry. Both radii are positive, so the surface pair is convex toward the object. Its high index keeps the strong front bending from requiring excessive surface sag, and its flint dispersion is appropriate for a front negative element that participates in lateral-color control.

This element is the maximum-index negative lens in the front group and sets condition (8), NnFmax > 1.60.

### L2A — Negative Meniscus, convex to object, two aspherical surfaces

nd = 1.58080, νd = 59.2. Glass: unmatched BAL/SK-type moldable crown; nearest public catalog glasses are about nd = 1.583, νd = 59.4. f = -46.1 mm.

L2A is the front double-asphere. It lies early enough in the optical path that the off-axis bundle is still tall, so it is the main front-group element for shaping distortion, astigmatism, and field curvature before the beam reaches the stop.

The patent value is not an exact public-catalog match. It is close to the S-BAL42 / M-BACD12 class, but the stored prescription value is nd = 1.58080 rather than the public catalog value near nd = 1.58313. The glass is therefore treated as an unmatched or proprietary moldable BAL/SK-type crown, not as a confirmed catalog S-BAL42.

### L3A — Negative Meniscus, convex to object

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 class — ED fluorophosphate. f = -95.3 mm.

L3A is the negative ED front member of the first cemented doublet. It is the third of the three leading negative meniscus lenses described in ¶0066, but unlike L1A and L2A it is cemented to a high-index positive dense flint.

Its ED glass is used in a negative element, not in one of the front positive lenses governed by condition (10). The local achromatization comes from pairing this high-Abbe negative crown with the high-index positive L4A at the shared surface R = 33.318 mm.

### L4A — Biconvex Positive, cemented to L3A

nd = 1.91082, νd = 35.2. Glass: Hoya TAFD35 / TAFD35L dense flint. f = +34.2 mm.

L4A is the positive partner of the L3A+L4A cemented doublet. The public Hoya catalog matches the patent index exactly at nd = 1.91082, with νd = 35.25; the patent rounds νd to 35.2.

The standalone doublet focal length is +53.68 mm. In situ, the doublet supplies positive correction inside an otherwise weak-negative front group and helps keep the front group from becoming the strong retrofocus unit that the patent is trying to avoid.

### L5A — Negative Meniscus, convex to image

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 class — ED fluorophosphate. f = -110.9 mm.

L5A is the negative ED front member of the second front-group cemented doublet. Both radii are negative, so the meniscus is convex toward the image.

Its placement near the rear of G1 lets it correct lateral color and oblique aberrations after the front negative sequence has expanded and reshaped the incoming field.

### L6A — Positive Meniscus, convex to image, cemented to L5A

nd = 1.90043, νd = 37.4. Glass: Hoya TAFD37 / TAFD37A dense flint. f = +62.1 mm.

L6A is the positive partner of L5A. The public Hoya catalog matches the patent index exactly at nd = 1.90043, with νd = 37.37.

Its rear surface, R = -46.047 mm, is the most image-side refracting surface of G1. Together with the first rear-group surface R = -22.025 mm, it sets condition (7), RF/RR = 2.09, a geometry the patent uses to manage spherical aberration around the stop-side beam.

### BL = L7A + L8A — Rear cemented lens

The leading rear-group cemented lens BL has a standalone focal length of -345.2 mm. Although weakly negative in isolation, its cemented interface has a much stronger local role because it lies immediately behind the stop where the axial beam is large.

#### L7A — Positive Meniscus, convex to image

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 class — ED fluorophosphate. f = +49.7 mm.

L7A is the positive ED front member of BL. Both radii are negative, giving a meniscus convex toward the image.

#### L8A — Negative Meniscus, convex to image

nd = 1.81600, νd = 46.6. Glass: S-LAH59 (OHARA) — lanthanum glass. f = -47.9 mm.

L8A is the negative partner of BL. The cemented interface at R = -12.497 mm is concave toward the object. Using the patent's definition fBO = RB/(n' - n), that interface has fBO = -39.18 mm, giving |fBL|/fBO = -8.81 and fR/fBO = -1.02.

Those two values reproduce conditional expressions (3) and (15), and confirm that the interface, not merely the net doublet power, is central to the rear-group correction scheme.

### L9A — Biconvex Positive, super-ED

nd = 1.43875, νd = 95.0. Glass: S-FPL53 (OHARA) — super-ED fluorophosphate. f = +37.3 mm.

L9A is the single super-ED element in the design. Its very high Abbe number and low index identify it as the secondary-spectrum control element in the rear group.

The element is biconvex, with R1 = 51.792 mm and R2 = -23.010 mm. Its positive power is strong enough that it is the main positive singlet in G2, but its dispersion is low enough that it does not impose the axial-color penalty normally associated with a strong rear positive element.

### L10A — Negative Meniscus, convex to image

nd = 2.00100, νd = 29.1. Glass: S-LAH99 (OHARA) — high-index dense flint. f = -37.9 mm.

L10A is the rear group's dense-flint negative element. It is the maximum-index negative lens in G2 and sets condition (11), NnRmax > 1.75.

Its negative power offsets the Petzval contribution of the strong rear positive elements and participates in field flattening. In the complete system, the surface-by-surface Petzval sum is +0.005047 mm^-1, corresponding to a Petzval radius of about -198 mm under the usual sign convention.

### L11A — Biconvex Positive ED, two aspherical surfaces

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 class — ED fluorophosphate. f = +41.0 mm.

L11A is the rearmost element and the ED aspherical element identified by the production special-element count. It is biconvex in the paraxial base curves and carries aspherical coefficients on both sides.

As the final powered element before the image plane, it has high leverage over residual spherical aberration, coma tails, and field behavior. Using ED glass here keeps the exit correction from introducing avoidable axial color.

## Glass Identification and Selection

The patent lists refractive index and Abbe number, not manufacturer glass names. The catalog assignments below were checked against public OHARA and HOYA glass data. Where no exact public match was found, the entry is explicitly marked unmatched rather than forced into a named glass.

| Element(s) | nd | νd | Identification | Verification status | Role |
|---|---:|---:|---|---|---|
| L1A, L10A | 2.00100 | 29.1 | S-LAH99 (OHARA) | exact catalog match | High-index dense flint negative power |
| L2A | 1.58080 | 59.2 | Unmatched BAL/SK-type moldable crown | nearest S-BAL42/M-BACD12-type glasses are close but not exact | Front double-asphere |
| L3A, L5A, L7A, L11A | 1.49700 | 81.6 | S-FPL51 (OHARA) / FCD1 class | exact nd; νd rounds from catalog 81.54/81.61 | ED correction |
| L4A | 1.91082 | 35.2 | Hoya TAFD35 / TAFD35L | exact nd; catalog νd = 35.25 | Dense-flint positive partner |
| L6A | 1.90043 | 37.4 | Hoya TAFD37 / TAFD37A | exact nd; catalog νd = 37.37 | Dense-flint positive partner |
| L8A | 1.81600 | 46.6 | S-LAH59 (OHARA) | exact catalog match | Rear cemented negative partner |
| L9A | 1.43875 | 95.0 | S-FPL53 (OHARA) | exact nd; νd rounds from catalog 94.93 | Super-ED positive element |
| CG | 1.51633 | 64.1 | S-BSL7 / N-BK7 class | cover glass only | Excluded from data-file surfaces |

The four ED elements are L3A, L5A, L7A, and L11A. The single super-ED element is L9A. This mapping is inferred from the catalog glass identities and the published special-element count; it is not explicitly labeled surface-by-surface in the patent.

## Focus Mechanism

The patent states that Numerical Examples 1-4 focus from infinity toward short distance by moving at least part of the rear group G2 along the optical axis (¶0056). It also permits a separate aberration-correction group, distinct from the main focusing group, to move on a different trajectory (¶0058-0059). That is a floating-focus architecture.

The numerical tables publish only the infinity-focus state. There is no close-focus spacing table for Example 1 or the other examples, so the moving subgroup, travel, and close-focus inter-group distances cannot be reconstructed from the patent prescription.

| Parameter | Value |
|---|---:|
| Manufacturer minimum focus distance | 0.18 m |
| Manufacturer maximum magnification | 0.26× |
| Patent focus prescription | infinity state only |
| Data-file focus gaps | none; no close-focus variable-spacing table is published |

## Aspherical Surfaces

Four surfaces are aspherical: surfaces 3 and 4 on L2A, and surfaces 19 and 20 on L11A. The patent equation in ¶0063 is the standard even-order rotational asphere form:

$$
x = \frac{C H^2}{1 + \sqrt{1 - (1 + K) C^2 H^2}} + A_4 H^4 + A_6 H^6 + A_8 H^8 + A_{10} H^{10} .
$$

Since the conic term appears as (1 + K), K = 0 is a spherical base and K = -1 is a paraboloid. The patent uses millimeters.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 3 | -1.000 | -1.268E-5 | -4.615E-8 | +1.479E-10 | -2.507E-13 |
| 4 | -1.000 | -1.307E-6 | -1.753E-7 | +2.686E-10 | -5.280E-13 |
| 19 | 0.000 | -2.287E-6 | +2.084E-8 | +1.124E-11 | 0 |
| 20 | 0.000 | +1.927E-5 | +2.797E-8 | +7.616E-11 | 0 |

At the semi-diameters used in the data file, the polynomial departures from the conic/spherical base are:

| Surface | Data-file semi-diameter | Polynomial departure |
|---|---:|---:|
| 3A | 11.60 mm | -0.305 mm |
| 4A | 9.45 mm | -0.121 mm |
| 19A | 17.10 mm | +0.408 mm |
| 20A | 18.70 mm | +4.691 mm |

For L2A, both base conics are paraboloids. The negative polynomial terms reduce the positive sag relative to the conic base at the rim; they do not "deepen" the surface. For L11A, the image-side asphere is much stronger: the positive polynomial departure substantially offsets the steep negative spherical sag of surface 20 and flattens the effective exit profile near the rim.

## Conditional Expressions

All fifteen patent conditions were recomputed from the Example 1 prescription. Values below are rounded to the same useful precision as Table 28. Conditions involving Abbe-number averages differ only at the last quoted digit because the patent table uses full internal glass precision while Table 1 gives rounded νd.

| # | Expression | Patent Ex. 1 | Recomputed |
|---|---|---:|---:|
| (1) | |fF|/fR | 46.00 | 46.01 |
| (2) | DF/DR | 1.55 | 1.55 |
| (3) | |fBL|/fBO | -8.81 | -8.81 |
| (4) | TL/f | 5.41 | 5.41 |
| (5) | fR/f | 1.87 | 1.87 |
| (6) | (Y × Fno)/f | 2.49 | 2.49 |
| (7) | RF/RR | 2.09 | 2.09 |
| (8) | NnFmax | 2.00100 | 2.00100 |
| (9) | NnFave | 1.64395 | 1.64395 |
| (10) | νpFave | 36.31 | 36.30 |
| (11) | NnRmax | 2.00100 | 2.00100 |
| (12) | νnRave | 37.88 | 37.85 |
| (13) | νpRave | 86.01 | 86.07 |
| (14) | TL/D | 8.46 | 8.46 |
| (15) | fR/fBO | -1.02 | -1.02 |

## Chromatic Correction Strategy

The chromatic layout is not a simple front achromat plus rear correction. ED elements appear on both sides of the stop: L3A and L5A in the front group, and L7A and L11A in the rear group. The super-ED L9A sits in the rear group, where the axial beam is large and secondary-spectrum correction has high leverage.

The two front ED elements are negative members of cemented doublets. They work with the dense-flint positive partners L4A and L6A to manage lateral color and oblique aberrations before the stop. The rear ED and super-ED elements control axial color and secondary spectrum after the stop, while the high-index negative lenses L8A and L10A supply the negative power needed for spherical and Petzval balancing.

The patent's conditional expressions reflect this distribution. The front positive-lens Abbe average νpFave is held in the dense-flint range (condition 10), while the rear positive-lens Abbe average νpRave is pushed high by the ED and super-ED rear positives (condition 13).

## Verification Summary

The Example 1 prescription was rebuilt as a paraxial y-nu ray trace. The cover glass was included for verification, then folded into the final air-equivalent BFD for the data file.

| Quantity | Patent Table 3 | Independent trace |
|---|---:|---:|
| Effective focal length | 21.32 mm | 21.3222 mm |
| Design F-number | 2.45 | 2.45 |
| Half-field | 46.1° | consistent with Y = 21.64 mm |
| Image height | 21.64 mm | 21.64 mm full-frame half-diagonal |
| Back focus | 40.33 mm | 40.3293 mm |
| Total length | 115.34 mm | 115.3363 mm |

Additional verified values: fF = -1839.0 mm, fR = 39.9664 mm, L3A+L4A = +53.68 mm, L5A+L6A = +133.20 mm, BL = -345.21 mm, fBO = -39.18 mm, and Petzval sum = +0.005047 mm^-1.

## Sources

- JP 2022-117775 A (特開2022-117775), Ricoh Company, Ltd., published 2022-08-12. Primary source for the prescription, aspherical coefficients, conditional expressions, and focus description.
- Ricoh Imaging Company, Ltd., HD PENTAX-D FA 21mm F2.4 ED Limited DC WR product page and 2021-10-14 product announcement. Source for production focal length, nominal aperture, 11/8 construction, ED/super-ED/aspherical counts, full-frame 92° field, DC autofocus, minimum focus distance, and maximum magnification.
- OHARA optical-glass catalog data. Source for S-LAH99, S-FPL51, S-LAH59, S-FPL53, and S-BSL7 class verification.
- HOYA Optical Glass data file HOYA20260601. Source for exact TAFD35/TAFD35L and TAFD37/TAFD37A verification and line-index data.
