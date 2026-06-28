## Patent Reference and Design Identification

**Patent:** WO 2019/073744 A1, republished as JP WO2019/073744 A1  
**Application Number:** PCT/JP2018/033922  
**Filed:** 2018-09-13  
**Published:** 2019-04-18  
**Priority:** JP 2017-199501, filed 2017-10-13  
**Inventors:** Katsuya Katō, Kōta Ōmiya, Hiroyuki Matsumoto  
**Applicant:** Sony Corporation  
**Title:** 撮像レンズおよび撮像装置 (Imaging Lens and Imaging Apparatus)  
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

Numerical Example 1 corresponds closely to the production Sony FE 24mm f/1.4 GM (SEL24F14GM). The match is based on converging evidence rather than on a single numerical coincidence. The patent example has 13 elements in 10 air-spaced groups; the production lens is specified by Sony as a 13-element, 10-group full-frame E-mount lens. The example uses four aspherical surfaces on two lens elements, including an aspherical front negative meniscus and a rear aspherical negative element, and it contains three very-low-dispersion elements with $n_d = 1.49700$ and $ν_d = 81.6$. This matches Sony's published description of two XA elements and three ED elements.

The patent states $f = 23.66$ mm, $Fno = 1.44$, and $ω = 42.36°$, yielding a full diagonal field of about 84.7°. Those values align with the marketed 24 mm f/1.4 specification and the 84° full-frame angle of view. The patent close-focus state gives $β = -0.172$; Sony publishes a 0.17× maximum magnification and 0.24 m minimum focus distance. A direct paraxial close-focus trace of the patent spacings gives $β = -0.1716$ and an object-to-image distance of 239.7 mm, effectively the marketed 0.24 m.

The production identification should nevertheless be treated as a patent-to-product correspondence, not as proof that every production mechanical dimension is present in the patent. The patent omits semi-diameters and mechanical package data. The data file therefore transcribes the patent prescription without focal-length scaling and uses estimated clear apertures constrained by paraxial ray height, rim slope, edge thickness, and air-gap clearance.

## Optical Architecture

The design is a short-back-focus, large-aperture wide-angle lens for a mirrorless full-frame camera. It has three principal groups: a fixed front group GR1, a positive moving focus group GR2, and a fixed rear single-element group GR3. The aperture stop is positioned between GR1 and GR2 and remains fixed during focusing, as described in the patent at ¶0044.

At the group level the power sequence is positive-positive-positive, but this simple notation conceals the main design idea. GR1 contains the retrofocus-like negative leading elements. GR2 is subdivided into a positive front subgroup GR2a and a negative rear subgroup GR2b. The patent emphasizes this positive-front / negative-rear division inside the moving second group: placing negative power on the image side of GR2 shortens the system and moves the exit-pupil behavior closer to the image plane while preserving wide-angle aberration correction (¶0029, ¶0031, ¶0033, ¶0038).

GR1 consists of five elements in four lens components: L11, the L12/L13 cemented doublet, L14, and L15. GR2 consists of seven elements in five components: the L21/L22 and L23/L24 cemented doublets, L25, L26, and L27. GR3 consists only of L31. The total front-vertex-to-image distance at the infinity state is 108.30 mm, and the final back focal distance from S24 to the image plane is 15.51 mm.

The patent table lists GR1 at $f = 378.53$ mm. Recalculation from the printed prescription gives GR1 at about 398.38 mm when the group is bounded at S1-S9 and treated by the same matrix convention that reproduces GR2, GR2a, GR2b, and GR3. Because GR1 is extremely weak in this 24 mm system, this discrepancy has little effect on the total EFL or the conditional expressions. The mismatch is left explicit rather than silently forced.

## Element-by-Element Analysis

### L11 — Negative Meniscus, convex to object, 2× aspherical

$n_d = 1.77002$, $ν_d = 49.4$. Glass: MC-TAF115 class (Hoya), close match rather than exact catalog identity. Standalone $f = -39.29$ mm.

L11 is the front negative meniscus and the first XA-type aspherical element in the production correspondence. Both S1 and S2 are aspherical. It supplies the strong front negative power required for the wide field, controls distortion at the periphery, and sets up the retrofocus-style beam expansion before the rays reach the positive power near the stop. The patent specifically identifies a front negative meniscus, preferably aspherical, as favorable for distortion correction and wide-angle coverage (¶0050).

The glass identification is intentionally qualified. Public Hoya MC-TAF115 is close to the patent's $n_d/ν_d$ pair but not exact; the data file therefore records a class match, not a hard catalog assignment.

### L12 + L13 — Cemented Doublet, negative-positive

**L12** — Biconcave negative. $n_d = 1.49700$, $ν_d = 81.6$. Glass: S-FPL51 (Ohara). Standalone $f = -67.54$ mm.  
**L13** — Biconvex positive. $n_d = 2.00100$, $ν_d = 29.1$. Glass: S-LAH99 class (Ohara). Standalone $f = +38.92$ mm.  
**Cemented net:** $f = +88.79$ mm.

This front cemented doublet combines a very-low-dispersion negative element with a very-high-index, high-dispersion positive element. Its net power is mildly positive, supporting the weakly positive GR1 while correcting lateral color introduced by the strong front negative meniscus. The Abbe-number separation is large enough to make the pair an efficient achromatizing component, but the patent does not publish enough partial-dispersion data to justify an apochromatic claim.

### L14 — Biconcave Negative

$n_d = 1.78472$, $ν_d = 25.7$. Glass: S-TIH11 (Ohara). Standalone $f = -49.25$ mm.

L14 is a dense-flint negative element positioned between the front cemented doublet and the pre-stop positive L15. Its rear surface is nearly flat relative to the front curvature, so most of the element's negative power is concentrated at S6. In combination with L15, it helps control front-group astigmatism, field curvature, and chromatic residuals before the stop.

### L15 — Biconvex Positive

$n_d = 1.88100$, $ν_d = 40.1$. Glass: TAFD33 class (Hoya). Standalone $f = +43.85$ mm.

L15 is the strongest positive member of GR1 and the final element before the aperture stop. It reconverges the beam after the negative front components and establishes the marginal-ray height entering GR2. Its high index allows useful positive power without excessively tight radii.

### L21 + L22 — Cemented Doublet, positive-negative

**L21** — Biconvex positive. $n_d = 1.49700$, $ν_d = 81.6$. Glass: S-FPL51 (Ohara). Standalone $f = +48.35$ mm.  
**L22** — Biconcave negative. $n_d = 1.74077$, $ν_d = 27.8$. Glass: S-TIH13 (Ohara). Standalone $f = -36.88$ mm.  
**Cemented net:** $f = -297.40$ mm.

This is the first cemented component of GR2a. In isolation the positive ED member and negative dense-flint member nearly cancel, leaving the cemented component weakly negative. Its principal role is chromatic correction immediately behind the stop rather than primary positive power. The patent describes the use of cemented positive/negative components in GR2a as favorable for controlling spherical aberration while correcting axial and lateral chromatic aberration (¶0053).

### L23 + L24 — Cemented Doublet, positive-negative

**L23** — Biconvex positive. $n_d = 1.49700$, $ν_d = 81.6$. Glass: S-FPL51 (Ohara). Standalone $f = +30.41$ mm.  
**L24** — Negative meniscus, convex to image. $n_d = 1.73800$, $ν_d = 32.3$. Glass: S-NBH53V (Ohara). Standalone $f = -43.21$ mm.  
**Cemented net:** $f = +81.37$ mm.

This is the second GR2a cemented component. Unlike L21/L22, it remains net positive. L23 is nearly symmetric, while L24 concentrates most of its negative power at the cemented interface. Together they continue the GR2a chromatic correction strategy while adding positive convergence ahead of L25.

### L25 — Biconvex Positive

$n_d = 2.00100$, $ν_d = 29.1$. Glass: S-LAH99 class (Ohara). Standalone $f = +29.81$ mm.

L25 is the strongest positive single element in GR2 and is located at the image-side end of GR2a. This position is load-bearing for the patent's architecture: the strongest positive component is kept ahead of the negative GR2b elements, rather than being the rearmost strong positive component as in a more conventional retrofocus rear group. The patent's condition (2) requires $n_{d2ap} > 1.8$ for this most image-side positive lens in GR2a; L25 at $n_d = 2.00100$ satisfies it comfortably (¶0040-¶0041).

### L26 — Negative Meniscus, convex to object

$n_d = 1.64769$, $ν_d = 33.8$. Glass: N-SF2 (Schott). Standalone $f = -55.60$ mm.

L26 is the first negative component of GR2b. Its meniscus form, with both radii positive, places stronger curvature on the rear side and contributes negative power after the positive GR2a cluster. The patent identifies the use of at least two consecutive negative components in GR2b as a way to control astigmatism, coma, and lateral color while keeping the optical system short (¶0031, ¶0037).

### L27 — Biconcave Negative, 2× aspherical

$n_d = 1.85235$, $ν_d = 40.1$. Glass: unmatched lanthanum-flint type. Standalone $f = -126.92$ mm.

L27 is the rear aspherical negative element and the final element of the moving focus group. Both S21 and S22 are aspherical. The patent states that the most image-side negative component in GR2b is preferably an aspherical element whose negative power increases from the axis toward the edge, correcting field curvature generated by shortening the optical length (¶0038). The aspherical coefficient signs and the verified rim departures are consistent with that stated function.

No exact authoritative public catalog match was identified for $n_d = 1.85235$, $ν_d = 40.1$. The data file therefore uses the explicit `Unmatched` convention rather than assigning an unsupported catalog name.

### L31 — Biconvex Positive

$n_d = 1.61997$, $ν_d = 63.9$. Glass: PCD40 (Hoya). Standalone $f = +165.59$ mm.

L31 is the single fixed rear element of GR3. Its power is weak relative to the total lens, but it contributes to the final convergence and helps define the short rear working distance. The patent also notes that adding a fixed third group behind GR2 can improve dust-sealing performance in an interchangeable-lens camera (¶0055).

## Glass Identification and Selection

The design uses ten glass entries across thirteen elements. Nine are catalog-resolvable or close catalog-class matches; L27 is left unmatched.

| Glass assignment | $n_d$ | $ν_d$ | Elements | Confidence / role |
|---|---:|---:|---|---|
| MC-TAF115 class (Hoya) | 1.77002 | 49.4 | L11 | Close class match; front aspherical negative meniscus |
| S-FPL51 (Ohara) | 1.49700 | 81.6 | L12, L21, L23 | ED/fluorophosphate crown; main low-dispersion correction |
| S-LAH99 class (Ohara) | 2.00100 | 29.1 | L13, L25 | Very-high-index lanthanum flint; positive power |
| S-TIH11 (Ohara) | 1.78472 | 25.7 | L14 | Dense flint; front-group negative power |
| TAFD33 class (Hoya) | 1.88100 | 40.1 | L15 | High-index lanthanum-flint class positive element |
| S-TIH13 (Ohara) | 1.74077 | 27.8 | L22 | Dense flint; GR2a doublet partner |
| S-NBH53V (Ohara) | 1.73800 | 32.3 | L24 | Niobium-borate flint; GR2a doublet partner |
| N-SF2 (Schott) | 1.64769 | 33.8 | L26 | Dense flint; first GR2b negative component |
| Unmatched lanthanum-flint type | 1.85235 | 40.1 | L27 | Rear XA negative element; no exact authoritative catalog match |
| PCD40 (Hoya) | 1.61997 | 63.9 | L31 | Phosphate-crown rear protective / field element |

The chromatic correction strategy is dominated by the repeated S-FPL51 elements paired with high-dispersion flints. L21 and L23 are the positive low-dispersion elements in the GR2a cemented components governed by the patent's condition (3), while L12 provides a similar low-dispersion correction function in GR1. Since the patent provides only $n_d$ and $ν_d$, the analysis does not claim apochromatic correction from partial-dispersion behavior.

## Focus Mechanism

Focusing is internal. GR2 moves as one unit along the optical axis while GR1, the aperture stop, and GR3 remain fixed relative to the image plane. The patent also permits a floating-focus implementation by splitting GR2 around the L24/L25 air gap (¶0054, ¶0083), but Numerical Example 1 publishes a single-motion GR2 model.

| Gap | Infinity | Close focus | Change |
|---|---:|---:|---:|
| d10, stop to L21 | 7.87 mm | 2.84 mm | -5.03 mm |
| d22, L27 to L31 | 2.91 mm | 7.94 mm | +5.03 mm |
| d10 + d22 | 10.78 mm | 10.78 mm | 0.00 mm |

The close-focus paraxial trace using the close-focus gaps gives $β = -0.1716$, matching the patent's $β = -0.172$ after rounding. The same trace gives an object-to-image distance of 239.7 mm, matching Sony's 0.24 m minimum-focus specification to normal specification precision.

## Aspherical Surfaces

Four surfaces are aspherical: S1 and S2 on L11, and S21 and S22 on L27. The patent's aspherical equation uses the standard conic convention:

$$
x = \frac{c y^2}{1 + \sqrt{1 - (1+k)c^2y^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12},
$$

where $c = 1/R$ and $k = 0$ is a spherical base. The data file therefore stores the patent's $k$ directly as `K`.

| Surface | Element | $k$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ | $A_{12}$ |
|---|---|---:|---:|---:|---:|---:|---:|
| S1 | L11 front | 0 | +2.6794e-7 | -1.5450e-8 | +3.5857e-11 | -4.8835e-14 | +2.6703e-17 |
| S2 | L11 rear | -3.6126e-1 | +4.4434e-6 | -1.3900e-8 | -8.7422e-12 | +1.3708e-13 | -3.2811e-16 |
| S21 | L27 front | 0 | -6.4801e-5 | +2.2496e-7 | +6.4591e-10 | -9.7531e-12 | +2.1426e-14 |
| S22 | L27 rear | 0 | -2.7344e-5 | +2.8107e-7 | +6.1650e-10 | -7.7377e-12 | +1.5239e-14 |

Using the semi-diameters assigned in the data file, the departure from the same-radius spherical base is approximately -0.147 mm at S1, -1.410 mm at S2, -1.022 mm at S21, and +0.328 mm at S22. These values are quoted only at the verified data-file clear apertures; they should not be generalized to unknown production mechanical diameters.

## Conditional Expressions

The patent defines four conditional expressions. Numerical Example 1 satisfies all four.

| Expression | Patent definition | Patent value | Recomputed value |
|---|---|---:|---:|
| (1) | $f_{2b}/f_{2a}$ | -1.28 | -1.291 |
| (2) | $n_{d2ap}$ | 2.00100 | 2.00100 |
| (3) | $ν_p$ for the positive GR2a cemented-lens member | 81.61 | 81.6 |
| (4) | $f_2/f$ | 2.19 | 2.182 |

Condition (1) is the core positive-front / negative-rear balance in GR2. Conditions (2) and (3) constrain the high-index positive element L25 and the low-dispersion positive members of the GR2a cemented components. Condition (4) keeps the moving focus group strong enough for short focus travel without making aberration variation excessive.

## Verification Summary

The prescription was re-extracted from the patent tables and recalculated independently with a d-line paraxial ray trace using reduced coordinates $(y, n u)$. No scaling was applied.

| Quantity | Patent table | Recomputed from prescription | Comment |
|---|---:|---:|---|
| System EFL | 23.66 mm | 23.674 mm | Matches within table rounding |
| Infinity total track | 108.30 mm | 108.30 mm | Sum of axial spacings |
| BFD at infinity | 15.51 mm | 15.51 mm | S24 to image plane |
| Stop semi-diameter for F/1.44 | not listed | 15.07 mm | From entrance-pupil trace |
| GR1 focal length | 378.53 mm | 398.38 mm | Weak group; patent/table discrepancy retained explicitly |
| GR2 focal length | 51.87 mm | 51.66 mm | Agreement within 0.5% |
| GR3 focal length | 164.98 mm | 165.59 mm | Agreement within 0.4% |
| GR2a focal length | 29.09 mm | 29.13 mm | Agreement within 0.2% |
| GR2b focal length | -37.34 mm | -37.60 mm | Agreement within 0.7% |
| Petzval sum | not listed | +0.002937 mm⁻¹ | Surface-by-surface $φ/(n n')$ formula |
| Close magnification | -0.172 | -0.1716 | Close-focus gaps d10 = 2.84, d22 = 7.94 |

The data-file clear apertures are not patent values. They are engineering estimates for rendering and tracing, and the tightest checks are the S2 rim limit and the S20-S21 air-gap clearance. All listed element shapes were verified directly from the radius signs and the patent prose in ¶0077-¶0082.

## Sources

1. WO 2019/073744 A1 / JP WO2019/073744 A1, Sony Corporation, “撮像レンズおよび撮像装置,” Numerical Example 1, Tables 1-5 and Table 26.
2. Sony Corporation, FE 24mm F1.4 GM / SEL24F14GM official specifications and product information.
3. Ohara optical glass catalog entries for S-FPL51, S-LAH99-class, S-TIH11, S-TIH13, and S-NBH53V $n_d/ν_d$ matches.
4. Schott optical glass datasheet for N-SF2.
5. Hoya optical glass catalog/product data for MC-TAF115 class, TAFD33 class, and PCD40.
