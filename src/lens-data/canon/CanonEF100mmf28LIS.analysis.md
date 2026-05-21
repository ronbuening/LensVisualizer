# Canon EF 100mm f/2.8L Macro IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 7,864,451 B2  
**Application Number:** 12/639,805  
**Filed:** December 16, 2009  
**Granted:** January 4, 2011  
**Priority:** JP 2008-324167, filed December 19, 2008  
**Inventor:** Yoshiyuki Taki  
**Assignee:** Canon Kabushiki Kaisha, Tokyo (JP)  
**Title:** Imaging Lens and Image Pickup Apparatus Including the Same  
**Worked examples:** 3  
**Embodiment analyzed:** First Numerical Example / Numerical Example 1

Numerical Example 1 is the closest published prescription for the Canon EF 100mm f/2.8L Macro IS USM. The correspondence is strong: the patent prescription is a 15-element, 12-group, 100 mm macro lens with an F-number of 2.92, a 21.64 mm image height, one very-low-dispersion positive element, floating inner focus to -1x magnification, and a decentered rear negative stabilizer subunit. Canon's production specification gives the same 15-element / 12-group construction, 100 mm f/2.8 marketing aperture, 0.30 m minimum focusing distance, 1.0x maximum magnification, 67 mm filter thread, 9-blade circular aperture, one UD element, and Hybrid IS.

The timing also matches. The Japanese priority filing was made in December 2008, and Canon lists the production lens as marketed in October 2009. The optical configuration in the patent is therefore not merely a generic macro-lens study; it is a production-proximate disclosure of the EF 100mm f/2.8L Macro IS USM optical formula.

## Optical Architecture

The design is a five-unit floating inner-focus macro lens with group powers arranged positive-negative-positive-positive-negative from object to image. The first, third, and fifth units remain stationary during focusing. The second unit moves toward the image side, and the fourth unit moves toward the object side. This gives close-focus correction without extending the front group.

| Unit |    Elements |    Power | Function                                                          |
| ---- | ----------: | -------: | ----------------------------------------------------------------- |
| L1   |       E1-E4 | Positive | Stationary front collector and primary chromatic-correction group |
| L2   |       E5-E7 | Negative | Imageward-moving focus group; primary negative focusing power     |
| L3   | E8 + SP/SP2 | Positive | Stationary field lens and stop unit                               |
| L4   |      E9-E11 | Positive | Objectward-moving compensating focus group                        |
| L5a  |     E12-E13 | Negative | Decentered image-stabilization group                              |
| L5b  |     E14-E15 | Positive | Stationary rear corrector behind the IS group                     |

Independent paraxial tracing of the patent prescription gives an infinity-focus EFL of 99.9958 mm and a BFL of 48.3256 mm. The slight BFL difference from the patent's 48.35 mm is ordinary rounding of the tabulated prescription.

| Unit        | Computed focal length | Ratio to 100 mm system EFL |
| ----------- | --------------------: | -------------------------: |
| L1          |            +53.876 mm |                     +0.539 |
| L2          |            -39.121 mm |                     -0.391 |
| L3          |           +252.704 mm |                     +2.527 |
| L4          |            +52.177 mm |                     +0.522 |
| L5a         |            -52.314 mm |                     -0.523 |
| L5b         |           +120.367 mm |                     +1.204 |
| L5 combined |           -113.502 mm |                     -1.135 |

The design is not telephoto in the strict optical sense. Its total optical track is 162.90 mm for a 100 mm focal length, so TL/EFL = 1.629. The long track is consistent with a macro design that reserves space for substantial internal focus travel and a rear stabilizer group.

## Element-by-Element Analysis

### L1 — Stationary Front Collector Group, E1-E4

**E1 — Biconvex positive.** nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f = +89.00 mm.

E1 is the front positive collector. The nearly balanced biconvex form distributes power across both surfaces, reducing the burden on the strongly curved downstream surfaces. S-LAL18 supplies high refractive index with crown-like dispersion, allowing useful positive power without the chromatic penalty of a lower-Abbe flint.

**E2 — Positive meniscus, convex to object.** nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f = +70.33 mm.

E2 is a stronger positive meniscus placed behind E1. It continues the front group's converging function while using a weak rear surface to moderate marginal-ray aberrations. Using the same S-LAL18 glass in E1 and E2 keeps the front collector's chromatic behavior predictable before the negative flint and UD pair.

**E3 — Biconcave negative.** nd = 1.80100, νd = 35.0. Glass: S-LAM66 (OHARA). f = -41.45 mm.

E3 is a high-index, high-dispersion negative element. The earlier draft treated this 801/350 glass as unresolved; the OHARA catalog identifies it as S-LAM66. Its function is the negative chromatic partner for the positive crowns and for the UD element that follows. Most of its power comes from the strongly curved rear surface facing the E4 air gap.

**E4 — Biconvex positive UD element.** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA). f = +61.28 mm.

E4 is the sole very-low-dispersion element in the patent prescription and corresponds to Canon's stated UD element in the production lens. It carries strong positive power despite a low index, using relatively steep curvatures to finish the front group's convergence. Paired with E3, it suppresses primary longitudinal color and reduces secondary spectrum relative to a conventional crown-flint pair.

### L2 — Imageward-Moving Negative Focus Group, E5-E7

**E5 — Biconcave negative.** nd = 1.72047, νd = 34.7. Glass: S-NBH8 (OHARA). f = -34.21 mm.

E5 is the dominant negative element in L2. The short positive rear radius gives the element strong divergence, making it the principal contributor to L2's negative power and to the focus sensitivity of the group. As L2 moves imageward, the L1-L2 gap opens and the L2-L3 gap closes.

**E6 — Biconcave negative, cemented to E7.** nd = 1.53172, νd = 48.8. Glass: S-TIL6 (OHARA). f = -39.99 mm.

E6 begins the L2 cemented doublet. The previous analysis left this as a generic light-flint class; the OHARA pocket catalog identifies the 532/489 code as S-TIL6. In isolation it is a substantial negative lens, but its power is nearly cancelled by E7.

**E7 — Positive meniscus, cemented to E6.** nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). f = +35.81 mm.

E7 is a very high-index, high-dispersion positive meniscus. The E6+E7 doublet has a computed standalone focal length of +327.01 mm, so its main job is not net power but chromatic and higher-order correction inside the moving L2 unit. The cemented interface avoids an air-spaced high-curvature pair at this mechanically moving location.

### L3 — Stop Unit and Central Field Lens, E8

L3 contains the sub-aperture stop SP2, the main aperture stop, and the single glass element E8. The patent table places the sub-stop at surface 14 and the main aperture stop at surface 15. In the data file, surface 15 is labeled `STO`; surface 14 remains an optically flat air surface representing SP2.

**E8 — Positive meniscus, concave to object.** nd = 1.80100, νd = 35.0. Glass: S-LAM66 (OHARA). f = +252.70 mm.

E8 is a weak positive field lens. It has the same S-LAM66 glass as E3, not an unresolved dense-flint class. Its long focal length is central to Conditional Expression (1): L3 is strong enough to support spherical-aberration correction after L4's power has been moderated for stabilizer performance, but weak enough to avoid excessive overcorrection.

Because E8 is near the aperture stop, it works at relatively small ray heights. This location lets it affect chief-ray and field behavior without producing the same marginal-ray burden a similar element would have near the front of the lens.

### L4 — Objectward-Moving Positive Focus Group, E9-E11

**E9 — Biconvex positive.** nd = 1.61800, νd = 63.4. Glass: S-PHM52 (OHARA). f = +72.98 mm.

E9 opens the positive L4 focus group. The previous draft called this a probable phosphate crown; the OHARA catalog confirms S-PHM52 for the 618/634 code. Its low dispersion provides positive power with limited chromatic penalty as L4 moves objectward during close focusing.

**E10 — Biconvex positive, cemented to E11.** nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f = +42.09 mm.

E10 is the positive crown-like member of the L4 cemented doublet. It supplies strong positive power inside the group that compensates the spherical-aberration behavior of the moving negative L2 group.

**E11 — Biconcave negative, cemented to E10.** nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). f = -51.64 mm.

E11 is the negative high-dispersion member of the L4 doublet. The E10+E11 cemented pair has a computed standalone focal length of +192.08 mm, again showing that its role is balanced correction rather than simply adding power. The high index of S-TIH53 keeps surface curvatures and Petzval contribution under control for a given negative chromatic correction.

### L5a — Decentered Image-Stabilization Unit, E12-E13

**E12 — Positive meniscus, concave to object.** nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). f = +110.57 mm.

E12 is the positive front member of the IS doublet. The patent describes L5a as the fifth-a lens unit that moves in a direction having a component perpendicular to the optical axis to shift the image position. E12's high-index, high-dispersion glass is an unusual choice for a positive member, but it reduces the positive Petzval contribution per unit power and supports chromatic correction within a decentered group.

**E13 — Biconcave negative.** nd = 1.71999, νd = 50.2. Glass: S-LAL10 (OHARA). f = -35.53 mm.

E13 is the dominant negative element in L5a. Together E12+E13 form a compact negative cemented doublet with focal length -52.314 mm. The patent emphasizes that the stabilizing subunit is a small, light cemented lens, which reduces the required actuator size for the vibration-reduction mechanism.

### L5b — Stationary Rear Corrector, E14-E15

**E14 — Negative meniscus, concave to object.** nd = 1.61340, νd = 44.3. Glass: S-NBM51 (OHARA). f = -147.23 mm.

E14 is a weak negative meniscus behind the IS group. The previous analysis left this 613/443 glass unresolved; the OHARA catalog identifies it as S-NBM51. Its role is mainly residual astigmatism, lateral color, and field balancing before the final positive element.

**E15 — Biconvex positive.** nd = 1.74320, νd = 49.3. Glass: S-LAM60 (OHARA). f = +67.77 mm.

E15 is the final positive element. It sets much of the last-stage convergence into the 48.35 mm patent BFD and works with E14 to partially offset the negative Petzval contribution of the decentered L5a group. The patent effective diameter at surface 29 is 33.82 mm; this is a full effective diameter, so the rendered semidiameter is 16.91 mm.

## Glass Identification and Chromatic Strategy

The glass palette is fully resolvable against the OHARA catalog when the six-digit nd/νd codes are checked directly. The main correction to the prior draft is that four glasses previously listed as class-only are catalog matches.

| Glass           | Patent nd | Patent νd |                               Code | Elements     | Role                                                  |
| --------------- | --------: | --------: | ---------------------------------: | ------------ | ----------------------------------------------------- |
| S-LAL18 (OHARA) |   1.72916 |      54.7 |                            729/547 | E1, E2, E10  | High-index lanthanum crown positive power             |
| S-LAM66 (OHARA) |   1.80100 |      35.0 |                            801/350 | E3, E8       | High-index lanthanum flint correction                 |
| S-FPL51 (OHARA) |   1.49700 |      81.5 | 497/816 catalog, rounded in patent | E4           | UD / very-low-dispersion positive element             |
| S-NBH8 (OHARA)  |   1.72047 |      34.7 |                            720/347 | E5           | Negative focus-group flint                            |
| S-TIL6 (OHARA)  |   1.53172 |      48.8 |                            532/489 | E6           | Negative member of L2 doublet                         |
| S-TIH53 (OHARA) |   1.84666 |      23.9 |                            847/238 | E7, E11, E12 | Very high-index, very high-dispersion doublet partner |
| S-PHM52 (OHARA) |   1.61800 |      63.4 |                            618/634 | E9           | Low-dispersion positive L4 element                    |
| S-LAL10 (OHARA) |   1.71999 |      50.2 |                            720/502 | E13          | Negative member of IS doublet                         |
| S-NBM51 (OHARA) |   1.61340 |      44.3 |                            613/443 | E14          | Weak rear negative corrector                          |
| S-LAM60 (OHARA) |   1.74320 |      49.3 |                            743/493 | E15          | Rear positive field/BFD element                       |

Chromatic correction is concentrated in three places. First, E3 and E4 form the strongest front-group dispersion pairing, with S-LAM66 opposed by the S-FPL51 UD element. Second, the L2 and L4 cemented doublets use high-dispersion S-TIH53 members to correct moving-group color while keeping each doublet's net power modest. Third, the L5a IS group is itself a cemented doublet, so lateral color does not become uncontrolled when that group is decentered.

## Focus Mechanism

The patent publishes variable spacings at infinity, -0.5x, and -1x. The first, third, and fifth lens units remain stationary. L2 travels imageward by approximately 19.01 mm from infinity to -1x, and L4 travels objectward by approximately 16.63 mm. The sum of each paired variable gap is constant, confirming constant optical length.

| Gap             | Infinity |    -0.5x |      -1x | Change from infinity to -1x |
| --------------- | -------: | -------: | -------: | --------------------------: |
| d8, L1 to L2    |  1.31 mm |  9.90 mm | 20.32 mm |                   +19.01 mm |
| d13, L2 to L3   | 21.73 mm | 13.14 mm |  2.71 mm |                   -19.02 mm |
| d17, L3 to L4   | 18.54 mm |  9.21 mm |  1.91 mm |                   -16.63 mm |
| d22, L4 to L5   |  3.00 mm | 12.33 mm | 19.63 mm |                   +16.63 mm |
| d25, L5a to L5b |  6.97 mm |  6.97 mm |  6.97 mm |                     0.00 mm |
| d29, BFD        | 48.35 mm | 48.35 mm | 48.35 mm |                     0.00 mm |

A finite-conjugate paraxial trace of the -1x spacing gives magnification -0.999905 and an object-to-image distance of 297.66 mm, consistent with Canon's 0.30 m minimum focusing distance. The same trace gives -0.500190 magnification at the intermediate spacing. The effective focal length of the internal-focus system shortens at close range: 99.996 mm at infinity, 90.456 mm at the -0.5x spacing, and 73.998 mm at the -1x spacing.

## Image Stabilization

The stabilizer is L5a, the E12+E13 cemented doublet. The patent states that this fifth-a lens unit has negative refractive power and moves in a direction having a component perpendicular to the optical axis so that the image position is shifted. Canon's production description identifies this as Hybrid IS, compensating both angular shake and shift shake.

The Petzval calculation was re-run surface by surface using $P = \sum (n' - n)/(R n n')$. For the rear unit, L5a contributes -0.011411 mm^-1 and L5b contributes +0.004293 mm^-1, leaving L5 as a whole at -0.007118 mm^-1. Thus L5b reduces, but does not eliminate, the negative Petzval contribution of the decentered stabilizer. This is consistent with the patent's power-ratio compromise rather than an exactly zero rear Petzval arrangement.

## Aspherical Surfaces

The first numerical example is all-spherical. The patent table contains no aspherical surface labels or coefficient tables for this embodiment. The data file therefore uses `asph: {}`.

## Conditional Expressions and Verification Summary

The patent states four conditional expression values for Numerical Example 1. Independent paraxial tracing reproduces them to the patent precision.

| Quantity        |   Computed | Patent table |
| --------------- | ---------: | -----------: |
| EFL at infinity | 99.9958 mm |       100 mm |
| BFL at infinity | 48.3256 mm |     48.35 mm |
| f3/f            |      2.527 |         2.53 |
| abs(f5a/f5b)    |      0.435 |        0.435 |
| f4/f            |      0.522 |        0.522 |
| f4/f3           |     0.2065 |        0.206 |

The patent's effective-diameter column is treated as full diameter, not semidiameter. This is required by the stop size: a literal stop semidiameter of 26.92 mm would be inconsistent with F/2.92, while a full stop diameter of 26.92 mm is compatible with a magnified entrance pupil. The data file stores semidiameters as half of the patent effective diameters, with two sub-0.13 mm local reductions at surfaces 5 and 10 to satisfy the renderer's thin-air-gap sag guardrail. These reductions do not alter any optical power, spacing, or paraxial verification result.

## Sources

- US 7,864,451 B2, "Imaging Lens and Image Pickup Apparatus Including the Same," Yoshiyuki Taki, Canon Kabushiki Kaisha, granted January 4, 2011.
- Canon Camera Museum, "EF100mm f/2.8L Macro IS USM," official product page. Confirms marketing date, 15 elements / 12 groups, one UD element, Hybrid IS, 0.30 m closest focusing distance, 1.0x maximum magnification, 67 mm filter size, and 77.7 x 123 mm physical dimensions.
- Canon U.S.A., "EF 100mm f/2.8L Macro IS USM," official product/support specification page. Confirms 100 mm f/2.8, 15 elements / 12 groups, 23.4° diagonal angle of view, inner focusing with USM, 0.3 m closest focusing distance, and 1x maximum close-up magnification.
- OHARA Pocket Catalog 2023 and OHARA online datasheets. Glass identities verified by six-digit code and nd/νd match: S-LAL18, S-LAM66, S-FPL51, S-NBH8, S-TIL6, S-TIH53, S-PHM52, S-LAL10, S-NBM51, and S-LAM60.
