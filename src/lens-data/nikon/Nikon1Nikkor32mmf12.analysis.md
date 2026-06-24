# Nikon 1 NIKKOR 32mm f/1.2 - Patent Analysis

## Patent Reference and Design Identification

**Patent:** WO 2014/061226 A1  
**Application Number:** PCT/JP2013/005953  
**Filed:** 2013-10-07  
**Published:** 2014-04-24  
**Priority:** JP 2012-227903 (2012-10-15); JP 2012-227905 (2012-10-15)  
**Inventors:** Ishida Kumiko; Tanaka Issei  
**Applicant:** Nikon Corporation  
**Title:** Image-Capturing Lens, Optical Device Having Said Lens and Method for Manufacturing Said Lens  
**Embodiment analyzed:** Example 1, Table 1 / paragraph 0079  
**Worked examples in patent:** 4

Example 1 is the prescription transcribed here. It is the strongest production match for the Nikon 1 NIKKOR 32mm f/1.2 for the following reasons.

1. The patent prescription is a 9-element / 7-group lens, matching Nikon's published production construction.
2. The patent focal length is $f = 32.4$ mm, matching the marketed 32 mm focal length.
3. The patent maximum aperture is FNo = 1.24, consistent with the marketed f/1.2 aperture.
4. The patent image height is 8.19 mm, essentially the half-diagonal of Nikon CX / 1-inch type format.
5. The patent describes a two-group floating focus movement in which the first and second lens groups move object-ward during close focusing. Nikon's production specification identifies Close Range Correction and AF-S/SWM drive.
6. The patent close-focus table reaches $\beta = -0.07$, and the production lens is specified at 0.45 m minimum focus distance with 0.08x maximum reproduction ratio.
7. The priority date in October 2012 is contemporaneous with Nikon's public development announcement, while the production release followed in May 2013.
8. The patent's coating discussion and Example 1 surface assignment align with Nikon's release statement that this was the first 1 NIKKOR lens to use Nano Crystal Coat.

The production metadata in the data file follows Nikon-published specifications for marketed focal length, maximum aperture, CX format, angle of view, close-focus distance, filter size, and aperture blades. Patent-derived values are retained for the optical prescription and design verification.

## Optical Architecture

The design is a compact modified double-Gauss lens for the Nikon CX image circle. The lens is divided into two positive groups, G1 and G2. G1 contains seven elements and the aperture stop; G2 is a powered rear cemented doublet. At infinity, the independent paraxial calculation gives $f_{G1} = 51.8645$ mm and $f_{G2} = 47.9751$ mm, while the whole lens is $f = 32.4016$ mm. The system focal length is shorter than either group because the positive groups act together across a finite separation.

G1 is arranged as three positive menisci before a strong negative pre-stop meniscus, followed by a nearly afocal cemented doublet and a rear positive meniscus. The aperture stop lies inside G1 between L14 and CL1. This is the part of the design most recognizably descended from fast Gauss-type lenses: positive pre-stop collection is balanced by a strong negative lens close to the stop, then by a post-stop achromatizing pair.

G2 consists of L21 + L22. L21 is a high-index biconvex positive element. L22 is a biconcave high-dispersion negative element and is the final refractive element in the system. The patent treats this rear biconcave negative lens as a defining feature because it helps control Petzval curvature, chromatic error, and close-focus aberration variation while keeping the lens compact.

The worked prescription is entirely spherical. No aspherical coefficient table is provided for Example 1, and the surface list contains only spherical radii and plane filter-stack surfaces.

## Element-by-Element Analysis

### L11 - Positive Meniscus, Convex to Object

nd = 1.6968, νd = 55.52. Glass: S-LAL14 class (OHARA). f = +49.83 mm.

L11 is the front collector. It gives the first significant positive power while keeping the marginal ray angles moderate at the entrance of an f/1.24 system. The meniscus form, with a strongly convex object-side surface and a very weak rear surface, allows the front element to gather aperture without making the first surface excessively steep.

The OHARA S-LAL14 catalog value is nd = 1.69680 and νd = 55.53, essentially identical to the patent's d-line index and within 0.01 in Abbe number. This makes S-LAL14 the strongest public-catalog identification for L11.

### L12 - Positive Meniscus, Convex to Object

nd = 1.6030, νd = 65.44. Glass: S-PHM53 class (OHARA). f = +87.12 mm.

L12 is a weaker positive element that continues the gradual pre-stop convergence. Its high Abbe number makes it the lowest-dispersion refractive element in the prescription. Together with L11, it satisfies the patent's dispersion condition for the first two positive lenses in G1:

$$(55.52 + 65.44)/2 = 60.48.$$

The patent links this condition to chromatic control in the front positive group, especially for coma-related color error. S-PHM53 is an excellent catalog match: the OHARA value is nd = 1.60300 and νd = 65.44.

### L13 - Positive Meniscus, Convex to Object

nd = 1.7950, νd = 45.31. Glass: Hikari J-LASF017, catalog code 795453. f = +75.31 mm.

L13 is the third positive element in the pre-stop collector. It has the highest refractive index of the three front positive elements. That high index allows useful positive power with radii of 20.9000 mm and 30.0000 mm, avoiding an excessively steep biconvex form.

The earlier HOYA TAF2 class note is superseded by the Hikari J-LASF017 catalog entry now present in the local glass catalog. J-LASF017 gives nd = 1.79500 and νd = 45.31 with published power-series coefficients, matching the patent row and preserving runtime Sellmeier coverage.

### L14 - Negative Meniscus, Convex to Object

nd = 1.7174, νd = 29.57. Glass: S-TIH1 class (OHARA). f = -19.00 mm.

L14 is the strongest standalone element in the design. It is positioned just before the aperture stop, where a negative meniscus can counter the strong spherical aberration and chromatic error introduced by the preceding positive collector. Its steep image-side radius, R8 = +10.8367 mm, also creates the large air space that houses the aperture stop.

The prior S-LAM3 / S-NPH5 equivalence is not retained. The closest public OHARA match is S-TIH1, listed at nd = 1.71736 and νd = 29.52. This is a close glass-class match, not a literal exact match to the patent's νd = 29.57.

### Aperture Stop

The stop is located between L14 and CL1. The independent entrance-pupil trace gives an entrance-pupil semi-diameter of 13.0645 mm for $f = 32.4$ mm and FNo = 1.24. Propagating that marginal ray to the stop gives a physical stop semi-diameter of 7.4063 mm; the data file rounds this to 7.41 mm.

This stop placement is central to the Gauss-type correction. The pre-stop positive/negative sequence and the post-stop cemented corrector operate on opposite sides of the iris, helping restrain coma and lateral color without using aspherical surfaces.

### CL1 - Cemented Doublet: L15 + L16

**L15:** nd = 1.6727, νd = 32.19. Glass: S-TIM25 class (OHARA). f = -15.89 mm standalone.  
**L16:** nd = 1.8830, νd = 40.66. Glass: S-LAH58 class (OHARA). f = +18.39 mm standalone.  
**CL1 combined:** f = -2289.60 mm.

CL1 is almost afocal in first-order power, despite being made from two individually strong elements. It should not be described as a major net power group. Its function is chiefly corrective: it balances chromatic and spherical aberration behind the stop while leaving the overall power budget largely to the front positive collector and the rear G2 doublet.

The S-TIM25 catalog value, nd = 1.67270 and νd = 32.10, matches the index and is close in dispersion. The L16 glass is best treated as S-LAH58 class; the patent value nd = 1.8830, νd = 40.66 is consistent with a dense lanthanum high-index glass in that region, but the match is not exact enough to treat as a measured catalog identity.

The first surface of CL1, R10 = -12.2930 mm, is also the radius $r_1$ used in condition (4). Its ratio to the system focal length is -0.3794.

### L17 - Positive Meniscus, Concave to Object

nd = 1.7725, νd = 49.62. Glass: S-LAH66 class (OHARA). f = +55.98 mm.

L17 is the rear element of G1 and participates in the front-group focus motion. Both radii are negative, with the steeper surface facing the image. In the optical sign convention used here, the element is a positive meniscus concave toward the object and convex toward the image.

The OHARA S-LAH66 catalog value, nd = 1.77250 and νd = 49.60, is a close match to the patent. In the design it provides moderate positive power near the floating inter-group gap while keeping the rear of G1 compact.

The patent applies the anti-reflection film to the object-side surface of this element, surface 13. That placement is tied to the ghost path described for Example 1.

### CL2 - Cemented Doublet: L21 + L22

**L21:** nd = 1.8348, νd = 42.73. Glass: S-LAH55V class (OHARA). f = +21.13 mm standalone.  
**L22:** nd = 1.7552, νd = 27.57. Glass: S-TIH4 class (OHARA). f = -35.09 mm standalone.  
**CL2 combined:** f = +47.9751 mm.

CL2 is the entire second group. Unlike CL1, it has substantial net positive power. It relays the beam from G1 to the image plane and is also the second moving group in the floating focus system.

L21 is best identified as S-LAH55V class, not simply S-LAH55. The current OHARA value for S-LAH55V is nd = 1.83481 and νd = 42.73, matching the patent index and dispersion within rounding.

L22 is the rear biconcave negative lens emphasized by the patent. It supplies negative Petzval contribution at the rear of the optical train and helps achromatize G2. The S-TIH4 catalog value is nd = 1.75520 and νd = 27.51, close to the patent's νd = 27.57. The S-NPH7 alternative is not retained because S-TIH4 is the stronger public-catalog match and is already in the correct OHARA family for the index/dispersion pair.

The surface-by-surface Petzval sum of surfaces 1-17 is +0.0052005 mm^-1, corresponding to a Petzval radius of about 192.29 mm. This number is useful as a first-order field-curvature indicator, but it is not a complete image-quality prediction because astigmatism, pupil aberration, distortion, and higher-order terms are not represented by the Petzval sum alone.

## Glass Identification and Selection

| Element | nd | νd | Best public-catalog identification | Status |
|---|---:|---:|---|---|
| L11 | 1.6968 | 55.52 | S-LAL14 (OHARA) | Firm class match |
| L12 | 1.6030 | 65.44 | S-PHM53 (OHARA) | Firm class match |
| L13 | 1.7950 | 45.31 | J-LASF017 (Hikari, 795453) | Firm class match |
| L14 | 1.7174 | 29.57 | S-TIH1 class (OHARA) | Close class match |
| L15 | 1.6727 | 32.19 | S-TIM25 class (OHARA) | Close class match |
| L16 | 1.8830 | 40.66 | S-LAH58 class (OHARA) | Close class match |
| L17 | 1.7725 | 49.62 | S-LAH66 class (OHARA) | Close class match |
| L21 | 1.8348 | 42.73 | S-LAH55V class (OHARA) | Firm class match |
| L22 | 1.7552 | 27.57 | S-TIH4 class (OHARA) | Close class match |

The design contains no ED glass and no fluorite-like low-dispersion glass. Chromatic correction is instead achieved by ordinary crown/flint balancing: low-dispersion positive glasses in the front group, high-dispersion negative glasses near the stop and at the rear, and two cemented doublets.

The highest Abbe number is L12 at νd = 65.44. That is high for a conventional crown but not in the ED-glass range. The rear G2 pair has a more conventional achromatic spread: L21 at νd = 42.73 paired with L22 at νd = 27.57.

## Focus Mechanism and Data-File Translation

The patent uses a two-group floating focus mechanism. From infinity to close focus, both G1 and G2 move toward the object, with G1 moving farther. The patent's variable-spacing table gives:

| Spacing | Infinity | Intermediate, β = -0.01 | Close, β = -0.07 | Change, infinity to close |
|---|---:|---:|---:|---:|
| d14, G1-G2 air gap | 0.90 mm | 1.13 mm | 2.67 mm | +1.77 mm |
| d17, G2 to filter group | 10.20 mm | 10.43 mm | 11.97 mm | +1.77 mm |
| Bf, surface 17 to image | 15.10 mm | 15.33 mm | 16.87 mm | +1.77 mm |

The equality of the d14 and d17 changes shows the same 2:1 movement implied by the patent's group-motion values. At the intermediate position, the patent gives yG1 = -0.47 mm and yG2 = -0.23 mm, reported as yG2/yG1 = 0.50 after rounding. Negative values denote object-ward motion in the patent.

The data file deliberately does not include the patent's plane filter/sensor-cover stack, surfaces 18-23. That stack consists of three plane plates with nd = 1.5168 plus plane air gaps after surface 17. Per the LensVisualizer data convention, these plates are excluded and their optical path is folded into the final air-equivalent back-focus distance.

For the data file, surface 17 therefore uses an infinity air-equivalent back focus of 14.15109 mm, the independently traced paraxial focus distance from surface 17 after removing the plates. The close-focus value is 15.92109 mm, preserving the patent's +1.77 mm focus shift. The physical patent d17 values of 10.20 mm and 11.97 mm are not used directly because they are distances only to the first plane plate, not to the rendered image plane.

The production lens is specified by Nikon at a 0.45 m minimum focus distance with Close Range Correction and AF-S/SWM drive. The patent close-focus value β = -0.07 is consistent with that order of magnification for a 32.4 mm lens once front-principal-plane and mount offsets are considered.

## Aspherical Surfaces

No aspherical surfaces are used in Example 1. The patent's worked surface table supplies only spherical radii and plane surfaces, and it provides no aspherical coefficient table for this example. The data file therefore sets `asph: {}`.

The all-spherical implementation is plausible because the lens covers the small CX format. The CX half-diagonal is about 7.9 mm, roughly 37% of the full-frame half-diagonal, not one-fifth. The smaller absolute image height reduces the required off-axis correction compared with a full-frame f/1.2 lens of similar angle and aperture.

## Conditional Expressions

The four patent conditions are satisfied by Example 1:

| Condition | Expression | Required range | Computed value | Result |
|---|---|---:|---:|---|
| (1) | yG2 / yG1 | 0.30 to 0.80 | 0.50 patent-rounded | Satisfied |
| (2) | (ν1 + ν2) / 2 | > 55 | 60.48 | Satisfied |
| (3) | (n21 + n22) / 2 | 1.70 to 1.95 | 1.7950 | Satisfied |
| (4) | r1 / f | -0.50 to -0.20 | -0.3794 | Satisfied |

Condition (1) governs the relative movement of the two floating groups. Too little G2 motion leaves excessive lateral-color variation in the second group; too much risks overcorrecting coma and field curvature during focusing.

Condition (2) controls the average dispersion of the first two positive lenses in G1. Condition (3) constrains the mean refractive index of the G2 cemented pair. Condition (4) constrains the first surface of CL1, which has an important effect on field curvature.

## Anti-Reflection Coating

The patent applies the anti-reflection film to surface 13, the object-side surface of L17. The Example 1 text describes a ghost path involving surface 13 and surface 10, both concave as viewed from the stop. This makes the location of the coating optically purposeful rather than merely decorative.

The later coating section of the patent describes a seven-layer broadband anti-reflection film. Layers 1-6 use alternating Al2O3 and ZrO2 + TiO2. The seventh layer is a wet-process MgF2 + SiO2 sol-gel layer with an effective refractive index of 1.26. The patent states that this low-index upper layer is formed with nano-scale voids and that the resulting coating keeps reflectance below 0.2% over 420-720 nm under the tabulated normal-incidence conditions.

Nikon's production release identifies the 1 NIKKOR 32mm f/1.2 as the first 1 NIKKOR lens to use Nano Crystal Coat, and the Nikon USA product page lists the corresponding production lens as an archived CX-format 32 mm f/1.2 lens with AF-S, Close Range Correction, 7 diaphragm blades, 52 mm filter size, and 0.45 m minimum focus distance.

## Verification Summary

The numerical review re-transcribed Example 1 and independently recalculated first-order quantities using a reduced-angle y-nu paraxial ray trace.

| Quantity | Independent value | Patent / source value | Status |
|---|---:|---:|---|
| System EFL, surfaces 1-17 | 32.40158 mm | 32.4 mm | Matches |
| G1 focal length | 51.86453 mm | 51.86 mm | Matches |
| G2 focal length | 47.97513 mm | 47.97 mm | Matches |
| CL1 focal length | -2289.60 mm | not separately stated | Nearly afocal |
| CL2 focal length | 47.97513 mm | 47.97 mm | Matches G2 |
| Surface-by-surface Petzval sum | +0.00520049 mm^-1 | not stated | Verified |
| Petzval radius | 192.29 mm | not stated | Verified |
| Entrance-pupil semi-diameter at FNo = 1.24 | 13.0645 mm | derived from f/FNo | Verified |
| Physical stop semi-diameter | 7.4063 mm | not stated | Used as 7.41 mm in data file |

One patent-table inconsistency was found. Table 1 prints $2\omega = 26.19^\circ$ while also giving $f = 32.4$ mm and image height $Y = 8.19$ mm. Those two latter values imply $2\arctan(8.19/32.4016) = 28.37^\circ$. Nikon's production specification gives a 28° CX-format maximum angle of view. The data file therefore uses Nikon's production angle in the displayed spec context and treats the patent's 26.19° as an inconsistent printed field-angle value, not as a prescription error.

The inferred semi-diameters in the data file are not patent-published values. They were selected to preserve the wide-open on-axis f/1.24 beam, maintain front/rear element semi-diameter ratios within conservative limits, keep edge thickness positive, and avoid cross-gap sag intrusion at the rendered clear apertures. They should be understood as renderer clear apertures, not manufacturer mechanical drawings.

## Sources

1. WO 2014/061226 A1, Nikon Corporation, "Image-Capturing Lens, Optical Device Having Said Lens and Method for Manufacturing Said Lens," Example 1 and coating section.
2. Nikon Corporation, "1 NIKKOR 32mm f/1.2," press release, May 14, 2013.
3. Nikon USA, "1 NIKKOR 32mm f/1.2," archived product specifications.
4. OHARA Corporation, public optical-glass catalog pages for S-LAL14, S-PHM53, S-TIH1, S-TIM25, S-LAH66, S-LAH55V, and S-TIH4.
5. HIKARI optical-glass catalog data for J-LASF017.
