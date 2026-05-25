# Nikon AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR

## Patent Reference and Design Identification

**Patent:** US 2011/0102905 A1  
**Application Number:** US 12/888,483  
**Filed:** September 23, 2010  
**Published:** May 5, 2011  
**Priority:** JP 2009-253267 and JP 2009-253273, both filed November 4, 2009  
**Inventor:** Hiroki Harada  
**Assignee:** Nikon Corporation  
**Title:** Zoom Optical System, Optical Apparatus and Method for Manufacturing Zoom Optical System  
**Embodiment analyzed:** Example 1, Table 1, FIGS. 1-4

Example 1 is the best match to the production Nikon AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR. The match is not based on a single number. It is a convergence of the prescription, architecture, special-glass count, and production timing:

1. Example 1 contains 17 glass elements in 11 air-spaced groups, matching Nikon's published optical construction.
2. The patent's computed focal-length range is 56.09-293.90 mm, a normal design-value counterpart to the marketed 55-300 mm range.
3. The patent's image height is 14.50 mm, giving a 29.0 mm image circle, consistent with Nikon DX coverage.
4. The design uses two ED-class low-dispersion elements and one element with $n_d > 2.0$, matching Nikon's published two-ED/one-HRI feature set for this lens.
5. The design is all-spherical. There is no aspherical coefficient table for Example 1, and the patent text describes the lens surfaces as spherical or plane.
6. The stabilizer is the fourth lens group, a small negative cemented doublet behind the main relay group, matching the patent's vibration-reduction construction.
7. The patent was filed shortly after Nikon's August 2010 announcement of the production lens, and the design values correspond to that commercial specification.

## Optical Architecture

The design is a five-group telephoto zoom arranged, from object to image, as positive G1, negative G2, aperture stop, positive G3, negative G4, and positive G5. The group powers from the paraxial trace are:

| Group | Elements | Power | Verified group focal length | Primary function |
|---|---:|---:|---:|---|
| G1 | L11, L12+L13 | Positive | +120.20 mm | Front collector and focusing group |
| G2 | L21+L22, L23 | Negative | -28.84 mm | Main variator |
| G3 | L31, L32, L33+L34, L35 | Positive | +36.07 mm | Relay/compensator, principal correction group |
| G4 | L41+L42 | Negative | -47.54 mm | Vibration-reduction group |
| G5 | L51+L52, L53+L54 | Positive | +107.10 mm | Rear relay and field/chromatic correction |

The prescription forms 11 air-spaced groups: two in G1, two in G2, four in G3, one in G4, and two in G5. The stop is immediately in front of G3 and travels with G3 during zooming.

Zooming is accomplished by changing only two principal air spaces in the optical prescription: d5, between G1 and G2, increases from 4.35 mm to 55.74 mm, while d10, between G2 and the stop/G3 block, decreases from 39.77 mm to 2.35 mm. The G3-G4 distance d20 remains 17.20 mm and the G4-G5 distance d23 remains 3.20 mm in Example 1, so the rear G3/G4/G5 module keeps its internal spacing during zooming. The back focal distance increases from 40.20 mm at the wide end to 68.20 mm at the telephoto end. Total track length increases from 166.62 mm to 208.59 mm.

The system is not telephoto in the strict track-length sense at the wide end: TL/EFL is 2.97 at 56.09 mm. At the telephoto end, however, TL/EFL is 0.710, so the long end is a true telephoto layout.

## Element-by-Element Analysis

### L11 - Biconvex positive front collector

$n_d = 1.51680$, $\nu_d = 64.10$. Glass: 517/641 crown class, close to N-BK7/S-BSL7 equivalents but not assigned to a single vendor. Standalone in-air $f = +259.3$ mm.

L11 is a weak positive front collector with nearly symmetric radii. Its role is to begin convergence without forcing a steep first-surface bend. In a long consumer zoom this is a cost-conscious and robust front element: moderate index, high Abbe number, and large radii reduce the spherical and chromatic load passed downstream.

### L12 - Negative meniscus, convex to object, cemented to L13

$n_d = 1.78472$, $\nu_d = 25.68$. Glass: S-TIH11 (OHARA). Standalone in-air $f = -223.6$ mm.

L12 is the high-dispersion half of the front achromat. The previous analysis identified this as S-TIH53, but S-TIH53 is the G2 flint at L22. The L12 index/dispersion pair matches OHARA S-TIH11. Its negative power counterbalances the ED positive element L13, suppressing longitudinal chromatic error before that error is magnified by the variator.

### L13 - Positive ED meniscus, cemented to L12

$n_d = 1.49700$, $\nu_d = 81.54$. Glass: S-FPL51 / FCD1 class ED fluorophosphate. Standalone in-air $f = +110.6$ mm.

L13 provides most of G1's positive power and is the first ED-class element in the lens. Its large Abbe number makes it the chromatic partner to L12's dense titanium flint. The cemented interface at R = 52.6873 mm is one of the front group's important chromatic correction surfaces.

### L21 - Biconcave negative variator element, cemented to L22

$n_d = 1.74100$, $\nu_d = 52.67$. Glass: S-LAL61 class. Standalone in-air $f = -24.5$ mm.

L21 supplies the dominant negative power in G2. Its short focal length and position in the moving second group make it the main element responsible for the focal-length change as d5 opens and d10 closes. The glass is a lanthanum crown class rather than an ordinary high-dispersion flint, which is useful because this group must balance Petzval curvature as well as provide negative zoom power.

### L22 - Positive meniscus, cemented to L21

$n_d = 1.84666$, $\nu_d = 23.78$. Glass: S-TIH53 (OHARA). Standalone in-air $f = +38.7$ mm.

L22 is the high-index, high-dispersion partner in the G2 cemented negative doublet. The cemented interface from L21 to L22 has a substantial index step, and the doublet as a whole remains strongly negative even though L22 is individually positive. This is the correct location for the S-TIH53 glass identification in the prior draft.

### L23 - Negative meniscus, concave to object

$n_d = 1.80400$, $\nu_d = 46.57$. Glass: S-LAH65V/S-LAH65VS class. Standalone in-air $f = -58.0$ mm.

L23 completes the negative second group and gives the variator another degree of freedom for astigmatism and field-curvature control. Its $\nu_d$ below 50 places it on the flint side of the conventional crown/flint boundary despite the lanthanum family label.

### L31 - Biconvex positive relay element

$n_d = 1.69680$, $\nu_d = 55.52$. Glass: S-LAL14 / J-LAK14 class. Standalone in-air $f = +75.8$ mm.

L31 is the first positive element after the stop. It begins the main relay action of G3. The prior draft's S-BAL42 label was not supported by the index/Abbe pair; the values match the S-LAL14/J-LAK14 lanthanum crown class more closely.

### L32 - Biconvex positive relay element

$n_d = 1.69680$, $\nu_d = 55.52$. Glass: S-LAL14 / J-LAK14 class. Standalone in-air $f = +77.1$ mm.

L32 repeats the L31 glass and power class. This distributed positive-power arrangement is central to the patent's stated rationale: G3 contains at least four positive lenses and at least one negative lens so that spherical aberration and coma can be corrected in the third group rather than left to downstream compensation.

### L33 - Biconvex ED positive element, cemented to L34

$n_d = 1.49700$, $\nu_d = 81.54$. Glass: S-FPL51 / FCD1 class ED fluorophosphate. Standalone in-air $f = +53.8$ mm.

L33 is the second ED element and the positive half of the strongest chromatic-correction doublet in G3. Its nearly symmetric biconvex form places a high-power, low-dispersion positive element near the stop, where it can influence longitudinal color, spherical aberration, and coma across the zoom range.

### L34 - Biconcave negative element, cemented to L33

$n_d = 1.90366$, $\nu_d = 31.27$. Glass: S-LAH95 / 904-313 dense lanthanum flint class. Standalone in-air $f = -26.1$ mm.

L34 is the high-index negative element specified by the patent's G3 conditional expressions. The previous analysis called this S-NPH7, but the stored index/dispersion pair is much closer to the 1.90/31 dense lanthanum flint class represented by OHARA S-LAH95. The element's high index permits strong negative power without excessive curvature, helping G3 correct spherical aberration and coma while preserving a compact relay group.

### L35 - Biconvex positive relay element

$n_d = 1.56384$, $\nu_d = 60.67$. Glass: S-BAL41 (OHARA). Standalone in-air $f = +49.1$ mm.

L35 is the fourth positive element in G3. It completes the patent's required four-positive-one-negative relay group. The relatively modest index and high Abbe number reduce the chromatic penalty of adding positive power at the rear of G3.

### L41 - Negative meniscus, cemented to L42, VR group

$n_d = 1.77250$, $\nu_d = 49.61$. Glass: S-LAH66 (OHARA). Standalone in-air $f = -24.1$ mm.

L41 supplies the dominant negative power in G4. The group is the stabilizer: the whole L41+L42 cemented doublet is shifted laterally to move the image. The location behind G3 is advantageous because the marginal ray has already been reduced in height, keeping the moving group small.

### L42 - Positive HRI meniscus, cemented to L41, VR group

$n_d = 2.00069$, $\nu_d = 25.46$. Glass: H-ZLaF80 / TAFD40 class HRI glass; vendor not specified by the patent. Standalone in-air $f = +45.6$ mm.

L42 is the HRI element in the production match. Its $n_d$ exceeds 2.0, satisfying the patent's high-index positive-element condition in the VR group and matching Nikon's published HRI description. The previous analysis's OHARA S-YGH51 assignment was not retained because the public catalog match is better represented by Hikari/Hoya/CDGM high-index lanthanum/tantalum flint classes around 2.00069/25.46.

The patent's condition using the smaller-radius surface of this positive lens gives $|R_{Ns}/f_{vr}| = |17.943/(-47.54)| = 0.377$, the published value in Table 1.

### L51 - Biconvex positive element, cemented to L52

$n_d = 1.64769$, $\nu_d = 33.80$. Glass: S-TIM22 (OHARA). Standalone in-air $f = +28.7$ mm.

L51 is a strong positive element in the rear relay. It uses a relatively dispersive titanium flint rather than a crown, so its chromatic contribution is deliberately different from a conventional crown-positive/flint-negative achromat. The prior draft's S-TIM35 label was corrected to S-TIM22.

### L52 - Negative meniscus, cemented to L51

$n_d = 1.72000$, $\nu_d = 50.23$. Glass: S-LAL10 (OHARA). Standalone in-air $f = -94.6$ mm.

L52 is the negative partner in the first G5 cemented pair. Its negative power and moderate-dispersion lanthanum crown character help balance field curvature and chromatic error after the stabilizer group.

### L53 - Positive meniscus, cemented to L54

$n_d = 1.48749$, $\nu_d = 70.41$. Glass: N-FK5 / J-FK5 / S-FSL5 class. Standalone in-air $f = +66.4$ mm.

L53 is the low-index, low-dispersion positive element in the final cemented pair. Its meniscus orientation and placement near the image side contribute to final field and lateral-color control. The exact vendor is not stated in the patent; the values are best treated as a fluor crown class match rather than a uniquely named OHARA glass.

### L54 - Negative meniscus, cemented to L53

$n_d = 1.80100$, $\nu_d = 34.96$. Glass: S-LAM66 (OHARA). Standalone in-air $f = -34.0$ mm.

L54 is the final glass element. The previous draft treated this as an uncertain Hoya FDS90-SG-type glass. Rechecking the manufacturer catalog match gives OHARA S-LAM66 as the better identification. Its high index and negative power make it the final field and chromatic corrector before the image plane.

## Glass Identification and Selection

The patent gives index and Abbe number, not vendor names. The following glass labels are therefore catalog matches or class identifications, not patent-named materials. Exact public-catalog matches are used where available; otherwise the data file uses an explicit class label.

| Element | Patent $n_d$ | Patent $\nu_d$ | Corrected catalog/class identification | Notes |
|---|---:|---:|---|---|
| L11 | 1.51680 | 64.10 | 517/641 crown class, N-BK7/S-BSL7 equivalent | Vendor uncertain |
| L12 | 1.78472 | 25.68 | S-TIH11 (OHARA) | Corrected from S-TIH53 |
| L13 | 1.49700 | 81.54 | S-FPL51 / FCD1 class | ED element #1 |
| L21 | 1.74100 | 52.67 | S-LAL61 class | Patent $\nu_d$ slightly higher than common catalog value |
| L22 | 1.84666 | 23.78 | S-TIH53 (OHARA) | Corrected location of S-TIH53 |
| L23 | 1.80400 | 46.57 | S-LAH65V/S-LAH65VS class | Lanthanum flint |
| L31 | 1.69680 | 55.52 | S-LAL14 / J-LAK14 class | Corrected from S-BAL42 |
| L32 | 1.69680 | 55.52 | S-LAL14 / J-LAK14 class | Corrected from S-BAL42 |
| L33 | 1.49700 | 81.54 | S-FPL51 / FCD1 class | ED element #2 |
| L34 | 1.90366 | 31.27 | S-LAH95 / 904-313 class | Corrected from S-NPH7 |
| L35 | 1.56384 | 60.67 | S-BAL41 (OHARA) | Relay crown |
| L41 | 1.77250 | 49.61 | S-LAH66 (OHARA) | VR negative element |
| L42 | 2.00069 | 25.46 | H-ZLaF80 / TAFD40 class | HRI element, vendor uncertain |
| L51 | 1.64769 | 33.80 | S-TIM22 (OHARA) | Corrected from S-TIM35 |
| L52 | 1.72000 | 50.23 | S-LAL10 (OHARA) | G5 negative partner |
| L53 | 1.48749 | 70.41 | N-FK5 / J-FK5 / S-FSL5 class | Vendor uncertain |
| L54 | 1.80100 | 34.96 | S-LAM66 (OHARA) | Corrected from Hoya FDS90-SG |

The main chromatic strategy is conventional in outline but dense in execution: an ED/flint cemented pair in the front group, a second ED/dense-flint cemented pair in G3, and additional rear doublets that tune lateral color and field curvature after the stabilizer group. The HRI element is not an ED element; its value lies in the very high refractive index used in the compact decentered VR doublet.

## Focus Mechanism

The patent states that focusing from infinity to a close object is performed by moving the whole first lens group G1 toward the object side. No close-focus variable-spacing table is provided in Example 1. The data file therefore uses the patent infinity prescription and a paraxial close-focus model constrained to Nikon's official 1.4 m minimum focus distance. In the data file, that motion is represented by increasing d5 while the remaining zoom spacings and BFD remain at their infinity values.

| Zoom position | d5 at infinity | Solved d5 at 1.4 m MFD | G1 objectward travel | Paraxial magnification |
|---|---:|---:|---:|---:|
| Wide, 56.09 mm | 4.350 mm | 17.476 mm | 13.126 mm | 0.051x |
| Mid, 129.95 mm | 43.240 mm | 56.705 mm | 13.465 mm | 0.121x |
| Tele, 293.90 mm | 55.740 mm | 69.383 mm | 13.643 mm | 0.278x |

The telephoto close-focus result reproduces Nikon's published 0.28x maximum reproduction ratio to paraxial precision.

## Aspherical Surfaces

Example 1 contains no aspherical surfaces. Every optical surface in Table 1 is spherical or plane, and the data file therefore uses `asph: {}`. The stop is modeled as a plane surface labeled `STO`.

## Image Stabilization

The stabilizer is the whole fourth lens group G4, a cemented negative doublet made from L41 and L42. The group is decentered in a direction perpendicular to the optical axis for vibration reduction. The patent gives both the vibration-reduction coefficient and the corresponding group shift:

| Zoom position | Focal length | Vibration coefficient K | Rotational shake | G4 lateral shift |
|---|---:|---:|---:|---:|
| Wide | 56.09 mm | 1.13 | 0.70 deg | 0.60 mm |
| Tele | 293.90 mm | 1.73 | 0.30 deg | 0.89 mm |

The stabilizer group's verified focal length is -47.54 mm. The HRI positive element L42 is central to keeping this moving group compact while controlling decentering coma.

## Conditional Expressions

The paraxial recheck reproduces the patent's Table 1 conditional-expression values. The one caveat is expression (9): the patent text writes the expression as $v_n - v_p$, but the numerical table gives +24.15, which is obtained from $49.61 - 25.46$. This is internally inconsistent with the prose inequality sign in the publication. The data file preserves the numerical prescription and treats the table value as the verified result.

| Expression | Verified value | Comment |
|---|---:|---|
| (1) $L_f/L_r$ | 0.3102 | Uses G3 length excluding the stop-to-G3 approach gap |
| (2) $f_r/f_{vr}$ | -2.253 | Rear relay to VR group power ratio |
| (3) $N_{3n}$ | 1.90366 | L34 index |
| (4) $v_{3n}$ | 31.27 | L34 Abbe number |
| (5) $R_s/R_L$ | 0.641 | Positive VR element shape ratio |
| (6) $N_p$ | 2.00069 | L42 HRI index |
| (7) $|R_{Ns}/f_{vr}|$ | 0.377 | L42 smaller-radius surface relative to G4 focal length |
| (8) $(R_{Ns}+R_{NL})/(R_{NL}-R_{Ns})$ | 4.566 | L42 meniscus shape factor |
| (9) $v_n-v_p$ | +24.15 | Matches table arithmetic; prose sign is suspect |
| (10) $R_{Ns}/R_{NL}$ | 0.641 | Same radius ratio as expression (5) |

## Verification Summary

All prescription values in the delivered data file are copied from Example 1 Table 1 except for semi-diameters and close-focus positions, neither of which is tabulated in the patent. The paraxial y-nu trace gives the following comparison with the patent:

| Quantity | Patent | Verified computation | Difference |
|---|---:|---:|---:|
| EFL, wide | 56.09 mm | 56.0856 mm | -0.0044 mm |
| EFL, mid | 129.95 mm | 129.9341 mm | -0.0159 mm |
| EFL, tele | 293.90 mm | 293.8532 mm | -0.0468 mm |
| BFD, wide | 40.20 mm | 40.2016 mm | +0.0016 mm |
| BFD, mid | 44.88 mm | 44.8763 mm | -0.0037 mm |
| BFD, tele | 68.20 mm | 68.1852 mm | -0.0148 mm |
| Total track, wide | 166.62 mm | 166.62 mm | 0.00 mm |
| Total track, tele | 208.59 mm | 208.59 mm | 0.00 mm |

The group focal lengths computed independently are +120.20 mm, -28.84 mm, +36.07 mm, -47.54 mm, and +107.10 mm for G1 through G5, respectively. The surface-by-surface Petzval sum is +0.0012855 mm^-1, corresponding to a paraxial Petzval radius of approximately 778 mm. This Petzval calculation uses the surface formula $\Phi/(n n')$, not a thin-element approximation.

The stop semi-diameter implied by the patent f-numbers is approximately 10.63 mm at the wide position, 10.65 mm at the mid position, and 11.48 mm at the telephoto position. The data file uses 11.5 mm as the maximum physical opening, with marketed nominal f-numbers supplied separately for the zoom slider.

## Sources

- US Patent Application Publication US 2011/0102905 A1, Hiroki Harada, Nikon Corporation, published May 5, 2011, especially Example 1, Table 1, FIGS. 1-4, and paragraphs 0135-0153.
- Nikon Corporation, "AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR" product announcement, August 19, 2010.
- Nikon Imaging product-history entry for AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR.
- Nikon USA product page for AF-S DX NIKKOR 55-300mm f/4.5-5.6G ED VR.
- OHARA optical glass catalog entries for S-TIH11, S-FPL51, S-LAL61, S-TIH53, S-LAH65V/S-LAH65VS, S-LAL14, S-LAH95, S-BAL41, S-LAH66, S-TIM22, S-LAL10, S-FSL5, and S-LAM66.
- Hikari and Hoya glass catalog entries for H-ZLaF80 / TAFD40-class high-index glass near $n_d=2.00069$, $\nu_d=25.46$.
