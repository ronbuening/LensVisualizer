# Fujifilm Fujinon GF 30mm F5.6 T/S — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2024/195273 A1  
**Application Number:** PCT/JP2024/001828  
**Filed:** January 23, 2024  
**Published:** September 26, 2024  
**Priority:** JP 2023-045217, filed March 22, 2023  
**Inventors:** Komatsu Daiki, Tanaka Takuya, Saito Hiroki  
**Applicant:** Fujifilm Corporation  
**Title:** Optical System and Optical Device  
**Embodiment analyzed:** Example 4, Tables 10–12, Figures 11–12

Example 4 is the most probable prescription basis for the Fujinon GF30mmF5.6 T/S. The correspondence is not based on one isolated number; it depends on a convergent match among the published production specification, the patent prescription, and the patent's tilt-shift conditional structure.

1. The embodiment contains 16 glass elements in 11 air-separated groups when the cemented assemblies are counted as groups. Fujifilm publishes the production lens as 16 elements in 11 groups.
2. The special-element count is the same: three aspherical elements, one Super ED element, and two ED elements. In the patent, the aspherical elements are L11, L25, and L31; the Super ED element is L24; the ED elements are L13 and L26.
3. The first-order values match a marketed 30 mm F5.6 lens. The patent gives f = 30.9009 mm and FNO = 5.76 at infinity; the production lens is sold as 30 mm F5.6.
4. The patent's maximum full field angle is 109.2° at infinity. This is larger than the product-page 84.7° diagonal angle for the 44 × 33 mm sensor, but it is consistent with the enlarged image circle required for ±15 mm shift. Using f = 30.9009 mm and ω = 54.6° gives an image height of about 43.48 mm.
5. The close-focus magnification is −0.2081 in the patent and 0.21× in Fujifilm's production specification.
6. The patent includes an explicit tilt-shift conditional expression, $(Y \tan\theta)/B_f$, and Example 4 gives 0.3092. The production lens specifies ±8.5° tilt and ±15 mm shift.

The patent therefore appears to describe the same optical design class and very likely the production GF30mmF5.6 T/S prescription, subject to ordinary patent-to-production tolerances.

## Optical Architecture

The GF30mmF5.6 T/S is a retrofocus wide-angle tilt-shift lens with three principal focusing groups in a negative-positive-negative power distribution:

- **G1:** fixed negative front group, L11–L17, seven elements in five air-separated sub-groups.
- **G2:** moving positive focusing group, aperture stop plus L21–L26, six elements in four air-separated sub-groups.
- **G3:** fixed negative rear group, L31–L33, three elements in two air-separated sub-groups.

The wide-angle retrofocus character is established by the large negative front group and the long back focus. Example 4 gives $B_f/f = 1.6577$, so the back focal distance is substantially greater than the effective focal length. That is not merely mechanical slack; it is needed for the shift and tilt mechanism behind the optical cell and for a sufficiently large image circle.

G1 has very weak net negative power. The independently computed group focal length is approximately −3420.5 mm, giving $f/f_1 = -0.0090$. This group is better understood as a large-diameter aberration-conditioning front converter than as a simple diverging group. G2 is the primary positive-power group, with $f_2 \approx 57.71$ mm and $f/f_2 = 0.5355$. G3 is weakly negative, with $f_3 \approx -398.89$ mm and $f/f_3 = -0.0775$, and functions primarily as a rear field-correction and telecentricity-shaping relay.

The patent Table 10 includes a rear plane-parallel plate after surface 28. The data file excludes that plate in accordance with the project specification and folds it into the final air-equivalent back focus as

$$
B_{f,\mathrm{folded}} = 48.1062 + \frac{3.2000}{1.51680} + 1.0097 = 51.2256\ \mathrm{mm}.
$$

This folded value reproduces the infinity-focus paraxial image plane to within patent rounding error.

## Element-by-Element Analysis

### L11 — Negative Meniscus, Two Aspherical Surfaces

nd = 1.58480, νd = 58.71. Glass: unmatched 585/587 patent-listed moldable glass. f = −43.62 mm.

L11 is the front negative aspherical meniscus. Both surfaces are aspherical, and the element is strongly negative because the rear surface, R2 = +23.0054 mm, is much more strongly curved than the weakly convex front surface. It begins the retrofocus expansion of the ray bundle and performs a large share of the early distortion, coma, and field-angle conditioning.

The repeated use of this same 1.58480 / 58.71 substrate on all three aspherical elements suggests a moldable aspherical glass family, but a public catalog match was not established. It is therefore treated as a patent-listed 585/587 material rather than assigned to a named catalog glass.

### L12 — Negative Meniscus

nd = 1.69680, νd = 55.53. Glass: S-LAL14 (OHARA). f = −48.72 mm.

L12 is a high-index negative meniscus that continues the front-group divergence with less curvature than a lower-index glass would require. The exact nd/νd pair matches OHARA S-LAL14. Its role is primarily monochromatic: it extends the front negative power while keeping the surface bending moderate enough to avoid excessive high-order aberration growth.

### L13 — Negative Meniscus, ED Glass

nd = 1.49700, νd = 81.60, θgF = 0.53774. Glass: FCD1 / M-FCD1 class (HOYA). f = −54.23 mm.

L13 is the first ED element. It is a negative meniscus with a very weakly curved front surface and a stronger positive rear radius. Its low dispersion lets the front group add negative power without producing the lateral color that would otherwise be expected from such a large field angle.

The placement is important. L13 sits before the first positive cemented group, where both marginal and chief-ray heights remain large. It therefore has leverage over both axial and lateral chromatic terms.

### L14 + L15 — Cemented Positive Doublet

L14: nd = 1.65412, νd = 39.68, θgF = 0.57378. Glass: S-NBH5 (OHARA). Individual f = +22.65 mm.  
L15: nd = 1.84666, νd = 23.84, θgF = 0.62012. Glass: S-TIH53 class (OHARA, close catalog match). Individual f = −67.96 mm.  
Doublet f = +36.57 mm.

This is the first strong positive unit in G1. L14 is a biconvex positive element; L15 is a dense-flint negative meniscus cemented to it. The doublet supplies positive power while controlling the chromatic imbalance introduced by the earlier negative menisci.

S-NBH5 is an exact match for the L14 nd/νd values. L15 is close to OHARA S-TIH53, but the patent value νd = 23.84 differs slightly from the public catalog value often listed for S-TIH53, so the assignment is best treated as S-TIH53 class rather than a hard catalog identity.

### L16 + L17 — Cemented Positive Doublet

L16: nd = 1.48749, νd = 70.44, θgF = 0.52933. Glass: 487/704 low-dispersion crown, S-FSL5 class. Individual f = −64.44 mm.  
L17: nd = 1.90043, νd = 37.37, θgF = 0.57668. Glass: HOYA TAFD37 / TAFD37A. Individual f = +44.52 mm.  
Doublet f = +113.09 mm.

This second G1 cemented doublet sits at the rear of the fixed front group. The low-dispersion negative crown L16 and very-high-index positive L17 form a weak positive relay that closes the front group before the variable DD[12] air gap.

L17 is assigned to HOYA TAFD37 / TAFD37A because the patent's 1.90043 / 37.37 pair matches that HOYA high-index glass. L16 is not an exact public S-FSL5 match because the patent Abbe number is 70.44 rather than the common catalog value near 70.23, so it is retained as a 487/704 low-dispersion crown or S-FSL5-class material.

### L21 + L22 — Cemented Positive Doublet Behind the Stop

L21: nd = 1.72916, νd = 54.54, θgF = 0.54535. Glass: 729/545 lanthanum crown class. Individual f = −45.77 mm.  
L22: nd = 1.48749, νd = 70.44, θgF = 0.53062. Glass: 487/704 low-dispersion crown, S-FSL5 class. Individual f = +20.25 mm.  
Doublet f = +45.55 mm.

This is the first lens unit in the moving focusing group, immediately behind the aperture stop. L21 is a negative high-index meniscus, and L22 is a strong positive low-dispersion element. The cemented pair provides much of the focusing group's positive power while suppressing primary chromatic error.

L21 is close to S-LAL18 / N-LAK34 territory but is not assigned as an exact public catalog glass because the patent νd value is not identical to the common OHARA S-LAL18 value. L22 uses the same patent-listed 487/704 low-dispersion crown family as L16.

### L23 + L24 — Cemented Doublet with Super ED Element

L23: nd = 1.87070, νd = 40.73, θgF = 0.56825. Glass: HOYA TAFD32. Individual f = −20.54 mm.  
L24: nd = 1.43700, νd = 95.10, θgF = 0.53364. Glass: HOYA FCD100, Super ED. Individual f = +22.29 mm.  
Doublet f = +340.95 mm.

This is the chromatic core of the focusing group. L23 is a high-index negative flint, while L24 is a thick biconvex Super ED element. The net power of the doublet is weakly positive, but the individual element powers are strong and opposite. That is characteristic of a chromatic-correction doublet: large internal bending is used to control color while net first-order power remains modest.

Placing the Super ED doublet inside G2 means the secondary-spectrum correction moves with the focusing group. This helps keep chromatic correction more stable over the large focus range than it would be if all low-dispersion power were confined to a fixed group.

### L25 — Negative Meniscus, Two Aspherical Surfaces

nd = 1.58480, νd = 58.71. Glass: unmatched 585/587 patent-listed moldable glass. f = −32.81 mm.

L25 is a strong negative meniscus in the middle of G2. Both surfaces are aspherical. Its negative power offsets the field-curvature tendency of the surrounding positive elements, while the aspherical terms correct coma, spherical aberration, and zonal behavior near the aperture stop.

This element is more powerfully negative than L31 and is located where marginal ray heights are significant. It therefore acts as a focusing-group aberration corrector rather than merely as a rear field flattener.

### L26 — Biconvex Positive ED Element

nd = 1.49700, νd = 81.61, θgF = 0.53804. Glass: FCD1 / M-FCD1 class (HOYA). f = +39.73 mm.

L26 is the final element of G2 and the second ED element in the design. It exits the moving focusing group before the DD[23] variable air gap. Its position gives it useful leverage over lateral chromatic aberration and helps preserve color correction as G2 translates during focusing.

### L31 — Weak Negative Aspherical Field Corrector

nd = 1.58480, νd = 58.71. Glass: unmatched 585/587 patent-listed moldable glass. f = −209.22 mm.

L31 is a weak biconcave negative element at the front of the stationary rear group. Both surfaces are aspherical. Unlike L11 and L25, it has very weak first-order power and works principally on off-axis aberrations because it is positioned far behind the stop where chief-ray height is large.

Its negative A4 terms distinguish it from the two earlier aspherical elements. The correction profile is consistent with a rear field-corrector role: it reshapes the oblique image shell and residual astigmatism more than it changes axial convergence.

### L32 + L33 — Rear Cemented Doublet

L32: nd = 1.80420, νd = 46.50, θgF = 0.55727. Glass: Schott N-LASF44. Individual f = −30.81 mm.  
L33: nd = 1.56732, νd = 42.81, θgF = 0.57567. Glass: S-TIL26 / E-FL6 / H-QF56 class. Individual f = +32.99 mm.  
Doublet f = +593.10 mm.

The final cemented doublet has almost no net positive power, but its internal element powers are strong. This makes it a rear correction doublet rather than a primary image-forming group. Its main tasks are field flattening, astigmatism balancing, and exit-pupil/telecentricity conditioning before the long back focus.

L32 is a dense lanthanum flint by Abbe-number behavior, not a crown. The value νd = 46.50 is below the usual crown/flint boundary, and the exact nd/νd pair matches Schott N-LASF44. L33 matches the 567/428 flint family, including CDGM H-QF56 and OHARA S-TIL26 equivalents.

## Glass Identification and Selection

| Element | nd | νd | θgF | Glass assignment | Notes |
|---|---:|---:|---:|---|---|
| L11 | 1.58480 | 58.71 | 0.54116 | Unmatched 585/587 moldable glass | Aspherical substrate |
| L12 | 1.69680 | 55.53 | 0.54420 | S-LAL14 (OHARA) | Exact nd/νd match |
| L13 | 1.49700 | 81.60 | 0.53774 | FCD1 / M-FCD1 (HOYA) | ED |
| L14 | 1.65412 | 39.68 | 0.57378 | S-NBH5 (OHARA) | Exact nd/νd match |
| L15 | 1.84666 | 23.84 | 0.62012 | S-TIH53 class (OHARA) | Close class match |
| L16 | 1.48749 | 70.44 | 0.52933 | 487/704 low-dispersion crown | S-FSL5-class, not asserted exact |
| L17 | 1.90043 | 37.37 | 0.57668 | TAFD37 / TAFD37A (HOYA) | Very-high-index flint |
| L21 | 1.72916 | 54.54 | 0.54535 | 729/545 lanthanum crown class | S-LAL18/N-LAK34 class |
| L22 | 1.48749 | 70.44 | 0.53062 | 487/704 low-dispersion crown | Same class as L16 |
| L23 | 1.87070 | 40.73 | 0.56825 | TAFD32 (HOYA) | High-index flint partner |
| L24 | 1.43700 | 95.10 | 0.53364 | FCD100 (HOYA) | Super ED |
| L25 | 1.58480 | 58.71 | 0.54116 | Unmatched 585/587 moldable glass | Aspherical substrate |
| L26 | 1.49700 | 81.61 | 0.53804 | FCD1 / M-FCD1 (HOYA) | ED |
| L31 | 1.58480 | 58.71 | 0.54116 | Unmatched 585/587 moldable glass | Aspherical substrate |
| L32 | 1.80420 | 46.50 | 0.55727 | N-LASF44 (Schott) | Dense lanthanum flint |
| L33 | 1.56732 | 42.81 | 0.57567 | S-TIL26 / E-FL6 / H-QF56 class | Flint rear doublet member |

The chromatic correction strategy is distributed rather than confined to a single group. L13 corrects lateral color early in the fixed front group. L24 provides the principal Super ED correction inside the moving focusing group. L26 adds a second ED contribution at the rear of G2. The dense-flint partners L15, L17, L23, L32, and L33 are not incidental: their high refractive indices and high dispersion let the design use strong internal chromatic balancing without allowing net group powers to become excessive.


## Focus Mechanism

The focusing system is a single moving inner group. G1 and G3 are stationary relative to the image plane, while G2, including the aperture stop, translates toward the object as the lens focuses from infinity to 0.3 m. The patent text describes this movement explicitly for Example 4, and Table 11 gives the two variable spacings.

| Parameter | Infinity | 0.3 m |
|---|---:|---:|
| Lateral magnification | 0.0000 | −0.2081 |
| Focal length | 30.9009 mm | 30.5348 mm |
| Open f-number | 5.76 | 6.04 |
| Maximum full field angle | 109.2° | 105.6° |
| DD[12] | 6.9392 mm | 3.1340 mm |
| DD[23] | 1.7130 mm | 5.5182 mm |

The G2 movement is 3.8052 mm objectward: DD[12] closes by 3.8052 mm and DD[23] opens by the same amount. The sum DD[12] + DD[23] remains 8.6522 mm at both focus positions. This conservation is useful in a tilt-shift lens because it keeps the optical cell length fixed while the focusing group moves internally.

The patent aperture stop is located at the front of G2. Moving the stop with G2 keeps the stop-to-group geometry fixed during focusing, which reduces focus-dependent changes in off-axis aberrations.

## Aspherical Surfaces

The design uses six aspherical surfaces on three glass elements: surfaces 1 and 2 on L11, surfaces 20 and 21 on L25, and surfaces 24 and 25 on L31. The patent tabulates KA = 1.0000000000E+00 for every aspherical surface. In the patent convention, KA = 1 gives a spherical base; in the standard renderer convention this corresponds to K = 0.

The sag form used in the data file is:

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + \cdots + A_{20}h^{20}.
$$

### L11 surfaces 1 and 2

| Coefficient | Surface 1 | Surface 2 |
|---|---:|---:|
| A4 | +6.9985344643E−05 | +7.6550363079E−05 |
| A6 | −4.1495389193E−07 | −3.3491710638E−07 |
| A8 | +1.8127148594E−09 | −2.7399955288E−10 |
| A10 | −5.8599042972E−12 | +1.2545646179E−11 |
| A12 | +1.3470869216E−14 | −8.0607014985E−14 |
| A14 | −2.1314614675E−17 | +2.4215876253E−16 |
| A16 | +2.2080152847E−20 | −3.3104037407E−19 |
| A18 | −1.3496507867E−23 | +8.0932158611E−23 |
| A20 | +3.6928847772E−27 | +1.6192649507E−25 |

Both L11 surfaces have positive A4 terms. On this front negative meniscus, the aspherical departures reduce the high-field aberration burden imposed by the steep rear curvature and very large image circle.

### L25 surfaces 20 and 21

| Coefficient | Surface 20 | Surface 21 |
|---|---:|---:|
| A4 | +6.1678852804E−05 | +5.3993444492E−05 |
| A6 | −8.4841307548E−07 | −5.0416682403E−07 |
| A8 | +7.6462639090E−09 | −9.4576806906E−09 |
| A10 | −2.9599710350E−10 | +3.8678271124E−10 |
| A12 | +1.3288149284E−11 | −6.2436651308E−12 |
| A14 | −2.8944039384E−13 | +5.7606868156E−14 |
| A16 | +3.3363191421E−15 | −3.1357356948E−16 |
| A18 | −1.9816711281E−17 | +9.3413221693E−19 |
| A20 | +4.8075599380E−20 | −1.1708545673E−21 |

L25 is near the stop and carries significant negative power. Its aspherical profiles therefore work mainly on spherical aberration, coma, and field behavior in the moving focusing group.

### L31 surfaces 24 and 25

| Coefficient | Surface 24 | Surface 25 |
|---|---:|---:|
| A4 | −2.4949508795E−05 | −1.8702781078E−05 |
| A6 | +5.2212783180E−07 | +3.9581240194E−07 |
| A8 | −6.6653304201E−09 | −4.3496626904E−09 |
| A10 | +4.8408534779E−11 | +2.8266868200E−11 |
| A12 | −1.4338770590E−13 | −7.7563546138E−14 |
| A14 | −4.6860526964E−16 | −1.9756770448E−16 |
| A16 | +5.3281133753E−18 | +2.1633657764E−18 |
| A18 | −1.6673252809E−20 | −6.1808006045E−21 |
| A20 | +1.8662654496E−23 | +6.2841218533E−24 |

The negative A4 terms on L31 distinguish it from L11 and L25. Because L31 is positioned far behind the stop, these surfaces primarily reshape off-axis image curvature and astigmatic residuals rather than functioning as a front-end distortion corrector.

## Conditional Expressions

The patent states numerous conditional expressions. The following are the most relevant to Example 4 and to the production-lens identification.

| Expression | Formula | Example 4 value |
|---|---|---:|
| (1) | $TL/Y$ | 3.7195 |
| (2) | $B_f/f$ | 1.6577 |
| (10) | $Y/B_f$ | 0.8495 |
| (25) | $f/f_1$ | −0.0091 |
| (26) | $f/f_2$ | 0.5354 |
| (27) | $f/f_3$ | −0.0775 |
| (32) | $(Y \tan\theta)/B_f$ | 0.3092 |

Expression (32) is the most diagnostic tilt-shift condition because it ties the enlarged image height, tilt angle, and back focus together. Example 4 falls comfortably within the stated range 0.08 < $(Y \tan\theta)/B_f$ < 1.

## Verification Summary

The prescription was re-entered and checked by paraxial ABCD ray trace. The Table 10 surface 8 thickness is read as 9.7400 mm. With that value, the prescription reproduces the patent first-order data.

| Quantity | Computed | Patent/Table value | Difference |
|---|---:|---:|---:|
| EFL at infinity | 30.89896 mm | 30.9009 mm | −0.00194 mm |
| Folded BFD | 51.2256 mm | 48.1062 mm + rear plate fold | — |
| G1 focal length | −3420.49 mm | from f/f1 = −0.0091 | matches rounding |
| G2 focal length | +57.7089 mm | from f/f2 = 0.5354 | matches rounding |
| G3 focal length | −398.889 mm | from f/f3 = −0.0775 | matches rounding |
| Close-focus EFL | 30.53440 mm | 30.5348 mm | −0.00040 mm |
| Petzval sum | +0.0033896 mm⁻¹ | not tabulated | — |

The computed values support the Example 4 identification and show that the system is internally consistent with the surface 8 thickness read as 9.7400 mm.

## Sources

- WO 2024/195273 A1, “Optical System and Optical Device,” Fujifilm Corporation, published September 26, 2024.
- Fujifilm Corporation, “FUJINON GF30mmF5.6 T/S — Specifications,” official product specification page.
- Fujifilm Corporation, “FUJINON GF30mmF5.6 T/S,” official product overview page.
- OHARA Corporation, S-LAL14 product page.
- OHARA Corporation, S-NBH5 product page.
- OHARA Corporation, S-TIH53 product page and catalog data.
- OHARA Corporation, S-FSL5 catalog data.
- HOYA Corporation, optical glass catalog and product data for FCD1, FCD100, TAFD32, and TAFD37/TAFD37A.
- SCHOTT AG, N-LASF44 optical glass datasheet.
- CDGM optical glass database, H-QF56 / 567428 cross-reference data.
