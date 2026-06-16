## Patent Reference and Design Identification

**Patent:** US 4,392,724  
**Application Number:** 226,011  
**Filed:** January 19, 1981  
**Granted:** July 12, 1983  
**Priority:** January 31, 1980 (JP 55/10704)  
**Inventor:** Yoshinari Hamanishi  
**Assignee:** Nippon Kogaku K.K., Tokyo, Japan  
**Title:** Lens System Capable of Short Distance Photography  
**Classification:** G02B 9/64; G02B 15/14  
**Claims:** 10  
**Worked examples:** 6  
**Embodiment analyzed:** Example 1 / claim 5

The prescription transcribed here is Example 1 of US 4,392,724. It is identified as the design basis for the production Nikon AI Micro-Nikkor 105mm f/2.8S, the manual-focus 105 mm macro lens released in 1984.

The identification rests on convergent evidence. Example 1 gives $f = 105$ mm, $F/2.8$, $2\omega = 23.25^\circ$, a close-focus condition of $\beta = -0.5$, and a ten-element/nine-group prescription. Nikon's product specification for the Micro-NIKKOR 105mm f/2.8 gives 105 mm, f/2.8, FX/35 mm coverage, $23^\circ20'$ angle of view, ten elements in nine groups, manual focus, Close Range Correction, and close-up operation to 0.41 m / 1:2. Nikon's *NIKKOR: The Thousand and One Nights*, No. 72, states that the AI Micro-Nikkor 105mm f/2.8S was a complete optical redesign released in 1984 and separately identifies Hamanishi as the designer of the manual-focus Micro-Nikkor 105mm f/2.8.

The other embodiments are poorer matches. Examples 2 and 3 share the same general focal length but differ in construction; Example 2 removes the final negative lens from the third group, while Example 3 changes the first and second group construction. Example 4 reaches $\beta=-1.0$ with a more complex thirteen-element construction. Example 5 is an f/2.6 seven-element design. Example 6 is a 210 mm f/4.5 design.

## Optical Architecture

Example 1 is a three-group macro lens with a positive-positive-negative power distribution. From object to image, it comprises a convergent first group G1, a convergent second group G2 carrying the diaphragm, and a divergent rear group G3. The patent describes this as a kind of telephoto-type system because the negative rear group magnifies the image formed by the first two groups and reduces the focusing movement required at high magnification.

In strict track-length terminology, however, this is not a compact telephoto lens: the infinity-focus front-vertex-to-image track is 122.069 mm and the computed effective focal length is 105.003 mm, giving $TL/EFL = 1.163 > 1$. The safer description is therefore a rear-negative medium-telephoto macro architecture, rather than a strict telephoto design by the $TL/EFL<1$ criterion.

G1, surfaces 1–6, contains two positive elements followed by a negative meniscus. Its computed focal length is $f_1 = 153.006$ mm. G2, surfaces 7–11, consists of a weakly negative cemented meniscus doublet followed by a biconvex positive singlet; the group focal length is $f_2 = 80.769$ mm. The stop is positioned 1.5 mm ahead of L22, splitting the patent's 3.0 mm air gap between surfaces 9 and 10 into 1.5 mm before and 1.5 mm after the stop. G3, surfaces 12–19, is a four-element divergent relay with $f_3 = -118.525$ mm.

The combined first and second groups have $f_{12} = 75.001$ mm, so the rear group magnification at infinity is $f/f_{12} = 1.400$. That value is the central architectural fact of the patent: the first two groups form a bright intermediate system, while the fixed negative rear group increases the effective focal length and helps balance Petzval curvature.

## Element-by-Element Analysis

### L11 — Biconvex Positive, nearly plano-convex

$n_d = 1.77279$, $\nu_d = 49.4$. Glass: HOYA TAF1 / TAF105 class, code 773/496. $f = +90.15$ mm.

L11 is the front positive collector. The object-side surface is much stronger than the image-side surface, and the shape factor $q_1 = (r_2+r_1)/(r_2-r_1) = 0.8666$ places it close to the plano-convex side of the Coddington bending convention. This is not an arbitrary bend: the patent sets an explicit condition on $q_1$ to control distortion and astigmatism in short-distance photography.

The high refractive index keeps the first surface curvature moderate for an f/2.8 105 mm macro lens. The glass should be treated as a lanthanum-flint-class equivalent; the patent gives only $n_d$ and $\nu_d$, not a vendor glass name.

### L12 — Positive Meniscus, convex to object

$n_d = 1.71700$, $\nu_d = 48.1$. Glass: HOYA LAF3 / OHARA S-LAM3 class, code 717/480. $f = +76.62$ mm.

L12 continues the positive power of G1 while bending the rays more gently than a single front collector could. Its two positive radii make it a positive meniscus convex to the object side, matching the construction described by the patent for the second positive component of the first group.

Together with L11 and L13, this element distributes G1 power over three air-spaced singlets. That distribution is necessary because the first group must remain bright while still maintaining acceptable aberration correction at $\beta=-0.5$.

### L13 — Negative Meniscus, convex to object

$n_d = 1.74950$, $\nu_d = 35.2$. Glass: HOYA E-LAF7 / OHARA S-LAM7 class, code approximately 750/350–353. $f = -44.33$ mm.

L13 is the achromatizing negative member of G1. The high dispersion relative to L11 and L12 offsets the chromatic power of the two positive elements while also preventing the first group from becoming too strongly positive.

Its strongly curved rear surface is a major contributor to the negative power in G1. The meniscus shape keeps the convex side facing the object, as required by the patent's preferred first-group form.

### L21 — Cemented Negative Meniscus Doublet, convex to image

**L21a:** biconcave negative flint, $n_d = 1.68893$, $\nu_d = 31.1$. Glass: HOYA E-FD8 / OHARA S-TIM28 class, code 689/311–313. Standalone $f = -40.91$ mm.  
**L21b:** biconvex positive crown, $n_d = 1.73350$, $\nu_d = 51.1$. Glass: HOYA TAC4 class, code 734/511. Standalone $f = +50.87$ mm.  
**Cemented doublet net:** $f = -593.12$ mm.

The cemented doublet is a very weak negative component. Its outer surfaces form a meniscus whose convex side faces the image, exactly matching the second-group form described in the patent. The internal cemented interface is weakly curved at $R = +300.000$ mm.

The doublet's primary role is chromatic rather than power-bearing. A high-dispersion front member is paired with a lower-dispersion rear member, while the net optical power remains small. This lets the second group support the f/2.8 aperture without adding a large monochromatic aberration burden ahead of the stop.

### L22 — Biconvex Positive

$n_d = 1.69350$, $\nu_d = 53.8$. Glass: HOYA LAC13 class, code 694/533, with the patent using a slightly higher Abbe value. $f = +83.04$ mm.

L22 supplies most of the positive power in G2. The diaphragm lies 1.5 mm in front of this element, so its rear surface works close to the aperture stop and strongly affects spherical aberration, coma, and pupil behavior.

The lanthanum-crown-class dispersion balances the preceding cemented doublet. As a group, L21 and L22 provide a corrected positive section of $f_2 = 80.769$ mm.

### L31 — Positive Meniscus, convex to image

$n_d = 1.59507$, $\nu_d = 35.5$. Glass: unmatched vintage flint, code 595/355; nearest current cross-reference is FF5 / S-FTM16 class at lower index. $f = +130.32$ mm.

L31 begins the divergent rear group with a positive meniscus. Although its individual power is positive, it participates in a group whose net focal length is negative. Its convex side faces the image, which moderates off-axis ray bending as the beam enters G3.

The patent glass does not match a current catalog entry closely enough for a firm vendor assignment. It should be treated as a Nikon-era or supplier-specific flint-region glass rather than forced into a modern catalog name.

### L32 — Biconcave Negative

$n_d = 1.79668$, $\nu_d = 45.5$. Glass: dense lanthanum-flint class, close to HOYA TAF2 / HIKARI J-LASF017 code 795/454. $f = -43.97$ mm.

L32 carries the strongest negative power in the rear group. Its high index is important: it allows strong divergence without excessive surface curvature and helps keep the Petzval contribution under control.

This element is central to the rear group's magnifying function. Without it, the first two groups would form a much shorter effective focal length and the focusing excursion required for 1:2 macro operation would increase.

### L33 — Biconvex Positive

$n_d = 1.59507$, $\nu_d = 35.5$. Glass: unmatched vintage flint, same code 595/355 as L31. $f = +61.57$ mm.

L33 reconverges part of the beam diverged by L32. The alternating positive-negative-positive-negative sequence in G3 spreads the negative group function over several powered surfaces rather than forcing it into a single strongly negative lens.

Using the same unmatched 595/355 glass as L31 suggests a deliberate chromatic balance within G3, but the available patent data does not justify assigning a precise modern catalog glass.

### L34 — Negative Meniscus, concave to object

$n_d = 1.80454$, $\nu_d = 39.6$. Glass: HOYA NBFD3 / OHARA S-LAH63 class, code 805/396. $f = -97.92$ mm.

L34 is the final negative element. It completes the rear group's divergent power and sets the exit geometry toward the fixed image plane. The computed infinity-focus back focal distance from surface 19 is 43.107 mm.

Because the Nikon F flange focal distance is 46.5 mm, this back focal distance implies that the last optical vertex sits several millimeters behind the mount reference plane, which is mechanically plausible for a medium-telephoto macro lens with a recessed rear section.

## Glass Selection

The patent publishes refractive index and Abbe number only. It does not name glass vendors. The following identifications therefore use catalog code matching rather than asserting that Nikon purchased the exact modern catalog glass. HOYA's cross-reference index is useful here because it lists six-digit $n_d/\nu_d$ codes and equivalent names across HOYA, SCHOTT, OHARA, HIKARI, SUMITA, and CDGM.

| Element | Patent $n_d$ | Patent $\nu_d$ | Best catalog-code reading | Status | Role |
|---|---:|---:|---|---|---|
| L11 | 1.77279 | 49.4 | TAF1 / TAF105 class, 773/496 | Close class match | High-index front collector |
| L12 | 1.71700 | 48.1 | LAF3 / S-LAM3, 717/480 | Close class match | Positive G1 meniscus |
| L13 | 1.74950 | 35.2 | E-LAF7 / S-LAM7, 750/350–353 | Close class match | G1 negative chromatic balance |
| L21a | 1.68893 | 31.1 | E-FD8 / S-TIM28, 689/311–313 | Close class match | Cemented flint member |
| L21b | 1.73350 | 51.1 | TAC4, 734/511 | Close class match | Cemented crown member |
| L22 | 1.69350 | 53.8 | LAC13 class, 694/533 | Soft class match | G2 positive singlet |
| L31, L33 | 1.59507 | 35.5 | Near FF5 / S-FTM16, but index is higher | Unmatched | Rear-group positive members |
| L32 | 1.79668 | 45.5 | Near TAF2 / J-LASF017, 795/454 | Soft class match | Main G3 diverger |
| L34 | 1.80454 | 39.6 | NBFD3 / S-LAH63, 805/396 | Close class match | Final rear negative meniscus |

The palette is conventional rather than apochromatic. It uses high-index lanthanum and dense-flint classes to keep curvatures manageable, then balances chromatic power through positive/negative pairing within each group. No ED, fluorite, anomalous partial dispersion, or secondary-spectrum claim is supported by the patent data.

## Focus Mechanism

The lens uses a two-gap floating focus system. G3 is stationary relative to the image plane. G1 and G2 move toward the object side as focus approaches the near limit, and the diaphragm moves with G2. The G1-G2 spacing increases at the same time, which is the close-range correction mechanism used to suppress aberration drift.

| Gap | Surface | Infinity spacing (mm) | Close spacing (mm) | Change (mm) |
|---|---:|---:|---:|---:|
| G1-G2 | d6 | 13.9866 | 20.6820 | +6.6954 |
| G2-G3 | d11 | 8.1258 | 34.3666 | +26.2408 |

The average spacing-variation rate is $\Delta y/\Delta x = 6.6954/26.2408 = 0.25515$, matching the value printed in the patent. The total forward movement of G1 relative to G3 is $32.9362$ mm. For a 105 mm lens at 1:2, simple whole-lens extension would be 52.5 mm, so the patent's movement ratio is $32.9362/52.5 = 0.62736$.

With the close-focus spacings, the fixed 43.1068 mm back focal distance, and an object point 254.996 mm in front of the first surface, the paraxial matrix gives lateral magnification $\beta = -0.49996$. This independently verifies the patent's $d_0 = 254.9907$ and $\beta=-0.5$ values to the precision expected from the rounded prescription. Adding the close-focus vertex-to-image distance of 155.005 mm gives an object-to-image-plane distance of 409.996 mm, reconciling the patent close-focus condition with Nikon's 0.41 m minimum focus specification.

The infinite-conjugate equivalent focal length of the close-focus configuration is 82.308 mm. That number should not be confused with the 105 mm infinity focal length; it is a useful paraxial diagnostic of the floating configuration, not the marketed focal length.

## Conditional Expressions

The patent defines power-distribution and floating-focus conditions. Example 1 satisfies all of them.

| Condition | Expression | Patent range | Example 1 value | Result |
|---|---|---:|---:|---|
| (4) | $f/f_{12}$ | $1.1 < \cdot < 2.2$ | 1.400 | Satisfied |
| (5) | $f_1/f_{12}$ | $1.7 < \cdot < 4.0$ | 2.040 | Satisfied |
| (6) | $f_1/f_2$ | $1.6 < \cdot < 5.0$ | 1.894 | Satisfied |
| (7) | $\Delta y/\Delta x$ | $0.15 < \cdot < 0.6$ | 0.255 | Satisfied |
| (9) | $q_1$ | $0.6 < \cdot < 1.3$ | 0.867 | Satisfied |
| (10) | Petzval sum $P$ | $0.0006 < \cdot < 0.0018$ | 0.001139 | Satisfied |

The patent also states that a rear-group magnification range of approximately $1.3 < \beta_3 < 1.7$ is desirable for a medium-telephoto macro lens with a large aperture and reduced focusing movement. Example 1 gives $\beta_3 = f/f_{12} = 1.400$.

The Petzval value above is computed surface by surface as $\sum \Phi/(n n')$, not from thin-lens element approximations. That distinction matters in this design because several powers sit inside a cemented doublet or a multi-element rear group.

## Verification Summary

Independent paraxial tracing was re-run from the patent prescription using a reduced-angle $y,n u$ method and cross-checked with an ABCD matrix formulation. The stop was inserted exactly as specified by the patent: 1.5 mm ahead of L22.

| Quantity | Patent value | Recomputed value |
|---|---:|---:|
| Infinity EFL | 105 mm | 105.0028 mm |
| Back focal distance from surface 19 | not tabulated | 43.1068 mm |
| Front-vertex-to-image track | not tabulated | 122.0692 mm |
| Track / EFL | not tabulated | 1.1625 |
| G1 focal length $f_1$ | 153.000 mm | 153.0064 mm |
| G2 focal length $f_2$ | 80.769 mm | 80.7692 mm |
| G3 focal length $f_3$ | -118.525 mm | -118.5247 mm |
| G1+G2 focal length $f_{12}$ | 75.0 mm | 75.0008 mm |
| Shape factor $q_1$ | 0.867 | 0.8666 |
| Petzval sum $P$ | 0.00114 | 0.001139 |
| Close-focus movement ratio | 0.627 | 0.62736 |
| Close-focus magnification | -0.5 | -0.49996 |

The physical stop semi-diameter used in the data file is 14.024 mm. A paraxial entrance-pupil trace through the surfaces ahead of the stop gives an entrance pupil semi-diameter of 18.7505 mm, so $105.0028/(2\times18.7505) = 2.800$.

The patent does not publish semi-diameters. The data file therefore uses estimated clear apertures constrained by the computed f/2.8 marginal ray, 135-format field geometry, the 52 mm filter size, minimum edge thickness, the $sd/|R|$ spherical rim limit, and signed cross-gap sag clearance.

## Design Heritage and Context

The AI Micro-Nikkor 105mm f/2.8S replaced the slower manual-focus Micro-Nikkor 105mm f/4 lineage by opening the maximum aperture to f/2.8 while preserving unaided 1:2 close focusing. The earlier f/4 lens descended from the Bellows-Nikkor 105mm f/4 concept; the f/2.8S required a complete optical redesign.

The later AI AF Micro-Nikkor 105mm f/2.8S was not merely the same prescription in an AF barrel. Nikon's retrospective account states that designers initially considered using the existing AI Micro-Nikkor 105mm f/2.8S optics as the starting point for a 1:1 autofocus lens, but the idea was abandoned because the required movement was excessive and performance could not be maintained. Keiji Moriyama then renewed the focus trajectory and completed the AF design at the end of 1987. Nikon lists the AI AF Micro-Nikkor 105mm f/2.8S as released in 1990 and the AI AF Micro-Nikkor 105mm f/2.8D as released in 1993.

The manual-focus lens analyzed here is therefore best understood as the Hamanishi rear-negative CRC macro design that established the movement-reduction principle, while the AF lens is a later re-optimization aimed at autofocus and 1:1 reproduction.

## Sources

1. US Patent 4,392,724, Yoshinari Hamanishi, Nippon Kogaku K.K., "Lens System Capable of Short Distance Photography," granted July 12, 1983.
2. Nikon USA, "Micro-NIKKOR 105mm f/2.8" product page, product no. 1455, manufacturer specifications: https://www.nikonusa.com/p/micro-nikkor-105mm-f28/1455/overview
3. Kouichi Ohshita, "The medium telephoto 1:1 Micro lens for flower photography," *NIKKOR: The Thousand and One Nights*, No. 72, Nikon Corporation: https://imaging.nikon.com/imaging/information/story/0072/
4. HOYA Optical World, "Glass Cross Reference Index," optical glass code and cross-vendor equivalence table: https://www.hoya-opticalworld.com/english/products/crossreference.html
