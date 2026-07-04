## Patent Reference and Design Identification

**Patent:** US 2012/0019926 A1  
**Application Number:** US 13/189,684  
**Filed:** July 25, 2011  
**Published:** January 26, 2012  
**Priority:** JP 2010-167072 and JP 2010-167084, both filed July 26, 2010  
**Inventor:** Akira Yamagami  
**Assignee:** Nikon Corporation  
**Title:** Zoom Lens System, Optical Apparatus and Method for Manufacturing Zoom Lens System  
**Embodiment analyzed:** Example 4, Table 4, Figures 13-16B

The transcribed design is Numerical Example 4 of US 2012/0019926 A1. The patent identifies Example 4 as a three-group zoom lens composed, from the object side, of a negative first group G1, a positive second group G2, and a negative third group G3. The worked prescription appears in Table 4, and the corresponding section drawing is Figure 13. The patent also states that the L21+L22 cemented doublet is the focusing group and that the L24+L25 cemented doublet is shifted perpendicular to the optical axis for vibration reduction (¶0163-0171).

Identification with the production 1 NIKKOR VR 10-30mm f/3.5-5.6 rests on multiple points of agreement. Example 4 has 12 glass elements in 9 air-spaced groups, matching Nikon's published production specification. It uses three aspherical surfaces, again matching Nikon's production description. Its focal-length range is f = 10.3-29.1 mm, closely bracketing the marketed 10-30 mm range, and the design f-numbers are 3.63, 4.35, and 5.83 at the wide, middle, and telephoto states, consistent with the marketed f/3.5-5.6 class. The half-image height is 8.25 mm, corresponding to a 16.5 mm diagonal, slightly larger than the Nikon CX sensor diagonal. The focusing and vibration-reduction mechanisms match Nikon's product description of a compact VR kit zoom for the Nikon 1 system. The patent filing also immediately precedes Nikon's September 2011 announcement of the Nikon 1 system and first 1 NIKKOR lenses.

The identification is therefore strong, but it should be stated with the normal patent-to-product caveat: the patent example is an optical prescription, not a production service drawing. The data file preserves the patent's 10.3 / 17.3 / 29.1 mm design states rather than forcing the endpoints to exactly 10 and 30 mm.

## Optical Architecture

The design is a compact negative-positive-negative three-group zoom for the Nikon CX format. It is a short-back-focus wide-to-normal zoom rather than a telephoto design. The front group supplies the retrofocus-like wide-angle expansion, the second group carries the main positive imaging power and houses both the focus and VR subgroups, and the third group functions as a negative rear relay and field-correction group.

G1 contains four air-separated meniscus elements in a negative-negative-positive-positive sequence. This is the first inventive feature of the patent: the first group distributes the negative front power over two negative components and then partially corrects the resulting aberrations with two positive components. The patent states that this arrangement is used to correct field curvature, distortion, and spherical aberration while keeping the zoom lens compact (¶0044-0061).

G2 contains a cemented positive focus doublet L21+L22, the aperture stop, a biconvex positive singlet L23, and a cemented positive VR shift doublet L24+L25, followed by a flare stopper. The group focal length is +15.647 mm. G2 is not internally reconfigured during zooming, but the group itself participates in the zoom movement. Focus is internal: only the L21+L22 doublet translates image-ward for finite object distances (¶0169).

G3 contains a cemented negative doublet L31+L32 and a final positive meniscus L33. Its group focal length is -34.174 mm. G3 supplies rear negative power and field-shaping leverage near the image side.

During zooming, the system is not described by a single changing G1-G2 spacing with fixed rear groups. The patent states that G1, G2, and G3 move during zooming, with the G1-G2 distance decreasing and the G2-G3 distance varying (¶0168). Table 4 confirms this numerically: at infinity, d8 changes from 23.68230 mm to 1.44017 mm, d18 changes from 0.96721 mm to 0.99017 mm, and BF changes from 18.49472 mm to 40.52334 mm across the wide-to-telephoto range. The G2-G3 spacing change is small, but it is not zero.

## Element-by-Element Analysis

### L11 - Negative Meniscus, Convex to Object, Image-Side Asphere

nd = 1.851348, νd = 40.10. Glass: M-TAFD305 (Hoya catalog match). f = -19.94 mm.

L11 is the first negative component of G1. Its strong negative meniscus form expands the incoming bundle at the wide end while keeping the front curvature moderate through high refractive index glass. The patent explicitly identifies L11 as a negative meniscus with its convex surface facing the object side and with an aspherical surface on its image-side surface (¶0165).

Surface 2A is the first asphere in the system. Its position on the rear surface of the first element gives it strong leverage over wide-angle distortion, astigmatism, and pupil aberration. The standard conic constant is K = -0.3204 after conversion from the patent's κ = 0.6796 convention.

### L12 - Negative Meniscus, Convex to Object

nd = 1.882997, νd = 40.76. Glass: S-LAH58 (Ohara catalog match). f = -20.53 mm.

L12 is the second negative component in G1. It shares the first group's negative power with L11 rather than forcing a single large front negative element to carry the full burden. The front radius is weak and the rear surface is much stronger, making this element a deep meniscus.

The high index reduces curvature demands, while the moderate Abbe number leaves the chromatic correction to the following high-dispersion positive meniscus pair.

### L13 - Positive Meniscus, Convex to Object

nd = 1.846660, νd = 23.78. Glass: FDS90 / N-SF57 class dense flint. f = +63.31 mm.

L13 is the first positive component in the first group. Its low Abbe number gives high chromatic leverage against the two preceding high-index negative elements. Its optical power is deliberately weak enough to avoid dominating the first group, but strong enough to participate in the chromatic and Petzval correction of the front assembly.

L13 is separated from L14 by only 0.2000 mm in the patent prescription. This narrow air space makes the pair behave like a quasi-cemented positive corrector while preserving an additional refracting air lens.

### L14 - Positive Meniscus, Convex to Object

nd = 1.808090, νd = 22.79. Glass: S-NPH1 (Ohara catalog match). f = +43.71 mm.

L14 completes the negative-negative-positive-positive sequence of G1. It is stronger than L13 and uses a very dispersive dense phosphate flint class glass. The patent describes this as the preferred first-group arrangement: the first, third, and fourth first-group components are meniscus lenses with convex surfaces facing the object side, and Example 4 follows that arrangement (¶0059-0060, ¶0165).

As a pair, L13 and L14 reduce the chromatic and field curvature residuals that would otherwise follow from the two front negative menisci.

### L21 + L22 - Cemented Positive Focusing Doublet, Object-Side Asphere on L21

L21: nd = 1.834410, νd = 37.28. Glass: M-NBFD10 (Hoya catalog match). Standalone f = -32.90 mm.  
L22: nd = 1.729157, νd = 54.66. Glass: S-LAL18 (Ohara catalog match). Standalone f = +18.17 mm.  
Cemented group f = +43.24 mm.

This cemented positive doublet is the internal focusing group. The patent states that the doublet formed by L21 and L22 moves toward the image side to focus from infinity to close distances (¶0169). The interface radius of +10.9539 mm supplies strong achromatizing power between the dense flint-like front element and the lanthanum crown rear element.

Surface 9A, the object-side surface of L21, is aspherical. It is positioned near the entrance of G2, where the marginal ray height is substantial and where correction of spherical aberration and coma is efficient. This interpretation follows from the prescription location; the patent identifies the surface as aspherical but does not assign a specific aberration term to it.

### L23 - Biconvex Positive Singlet

nd = 1.487490, νd = 70.40. Glass: FC5 (Hoya) / N-FK5 class fluorophosphate crown. f = +30.85 mm.

L23 is a positive singlet immediately behind the aperture stop. It carries significant positive power inside G2 while using a low-dispersion crown-class glass. Its biconvex shape distributes refraction across both surfaces and is conventional for a positive element placed near the stop.

Because the stop is immediately in front of L23, this element has strong influence over spherical aberration and coma, while its low dispersion limits additional axial color.

### L24 + L25 - Cemented Positive VR Shift Doublet

L24: nd = 1.617200, νd = 54.01. Glass: 617540 - K-SSK1 / SSK1 class (no source-backed catalog match). Standalone f = +19.73 mm.  
L25: nd = 1.755199, νd = 27.51. Glass: S-TIH4 (Ohara catalog match). Standalone f = -36.73 mm.  
Cemented group f = +42.25 mm.

This doublet is the vibration-reduction shift group. The patent states that the cemented positive lens formed by L24 and L25 is moved in a direction including a component perpendicular to the optical axis to correct image blur (¶0170). The corresponding coma plots are Figures 16A and 16B.

The doublet's moderate positive focal length keeps the group from being excessively sensitive to small shifts. Its focal length is also close to that of the focusing group, giving ff/fs = 1.023 in the patent's conditional expression (5).

### L31 + L32 - Cemented Negative Rear Doublet

L31: nd = 1.806100, νd = 40.94. Glass: S-LAH53 (OHARA; S-LAH53V class). Standalone f = -13.89 mm.  
L32: nd = 1.677900, νd = 55.40. Glass: S-LAL12 (OHARA; S-LAL12Q class). Standalone f = +38.47 mm.  
Cemented group f = -21.11 mm.

This cemented negative doublet is the leading component of G3. The biconcave L31 supplies the dominant rear negative power, while L32 reduces chromatic residuals and moderates the field curvature contribution of the rear group.

The patent describes this component as a cemented negative lens formed by a biconcave negative lens and a positive meniscus with its convex surface facing the object side (¶0167).

### L33 - Positive Meniscus, Concave to Object, Image-Side Asphere

nd = 1.730770, νd = 40.51. Glass: M-LAF81 (Hoya catalog match). f = +61.85 mm.

L33 is the final optical element. It is a weak positive meniscus with both radii negative, giving it a concave-to-object form. The patent identifies its image-side surface as aspherical (¶0167).

Placed close to the image plane, this asphere works primarily at field-dependent ray heights. It is therefore well positioned to refine residual astigmatism, field curvature, and distortion left after the negative rear doublet. This is an optical interpretation from the prescription rather than a specific statement in the patent.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number but not vendor glass names. The table below records nearest public catalog identifications or class matches. These names should be read as catalog-resolved candidates from nd/νd, not as patent-declared glass trade names.

| Element | nd | νd | Glass identification | Role |
|---|---:|---:|---|---|
| L11 | 1.851348 | 40.10 | M-TAFD305 (Hoya match) | High-index front negative meniscus |
| L12 | 1.882997 | 40.76 | S-LAH58 (Ohara match) | High-index second negative meniscus |
| L13 | 1.846660 | 23.78 | FDS90 / N-SF57 class | High-dispersion positive G1 corrector |
| L14 | 1.808090 | 22.79 | S-NPH1 (Ohara match) | Dense phosphate-flint positive G1 corrector |
| L21 | 1.834410 | 37.28 | M-NBFD10 (Hoya match) | Front element of focus doublet |
| L22 | 1.729157 | 54.66 | S-LAL18 (Ohara match) | Crown partner in focus doublet |
| L23 | 1.487490 | 70.40 | FC5 / N-FK5 class | Low-dispersion positive singlet near stop |
| L24 | 1.617200 | 54.01 | 617540 - K-SSK1 / SSK1 class (no source-backed catalog match) | Positive crown element of VR doublet |
| L25 | 1.755199 | 27.51 | S-TIH4 (Ohara match) | Flint element of VR doublet |
| L31 | 1.806100 | 40.94 | S-LAH53 (OHARA; S-LAH53V class) | Negative rear-group element |
| L32 | 1.677900 | 55.40 | S-LAL12 (OHARA; S-LAL12Q class) | Crown partner in rear doublet |
| L33 | 1.730770 | 40.51 | M-LAF81 (Hoya match) | Final meniscus field corrector |

No ED element is identified in the patent table, and Nikon's production-history summary lists three aspherical elements but does not list ED glass for this original 12-element / 9-group lens. Chromatic correction is instead achieved by conventional high-index crown/flint pairing: the dense positive flints in G1 correct the front negative pair, L21/L22 and L24/L25 form separate cemented achromatizing groups in G2, and L31/L32 does the same in G3. This is an achromatic correction strategy, not an apochromatic one.

## Focus Mechanism

The lens uses inner focus by translating only the L21+L22 cemented positive doublet. At the patent's published finite-conjugate state of β = -0.01, the movement is small and decreases from wide to telephoto.

| Zoom state | d8 infinity | d8 at β=-0.01 | d11 infinity | d11 at β=-0.01 | Focus travel |
|---|---:|---:|---:|---:|---:|
| Wide | 23.68230 | 23.98397 | 4.45228 | 4.15062 | 0.30167 |
| Middle | 9.70150 | 9.87986 | 4.45228 | 4.27392 | 0.17836 |
| Telephoto | 1.44017 | 1.55763 | 4.45228 | 4.33481 | 0.11746 |

The data file uses the production minimum focus distance of 0.20 m from the focal plane as its close-focus endpoint rather than the patent's β = -0.01 state. A paraxial finite-conjugate solve, preserving the patent image plane and moving only L21+L22, gives focus travels of 2.2047 mm, 2.1046 mm, and 2.4198 mm at the wide, middle, and telephoto states. The corresponding telephoto paraxial magnification is -0.210x, matching the production maximum-reproduction-ratio class. This larger travel is expected because 0.20 m is much closer than the patent's β = -0.01 verification distance.

## Aspherical Surfaces

The patent's asphere equation uses κ in the denominator term

$$
S(y) = \frac{y^2/r}{1 + \sqrt{1 - \kappa (y/r)^2}} + C_4y^4 + C_6y^6 + C_8y^8 + C_{10}y^{10}.
$$

In the LensVisualizer standard sag form, the conic term is written with \(1+K\). Therefore, the data file uses \(K = \kappa - 1\). A patent value of κ = 1.0000 is a spherical conic base, K = 0.

Surface 2A, on the image side of L11, has κ = 0.6796, so K = -0.3204. Its coefficients are C4 = -4.72344e-6, C6 = +1.65253e-7, C8 = -1.48790e-9, and C10 = -9.66922e-13. This surface is the primary first-group asphere and corrects the wide-angle residuals generated by the strong front negative meniscus pair.

Surface 9A, on the object side of L21, has κ = 1.0000, so K = 0. Its coefficients are C4 = -1.27907e-5 and C6 = -7.54124e-8, with C8 and C10 equal to zero. It acts at the entrance of G2 and follows the focus group through all focus positions.

Surface 23A, on the image side of L33, has κ = -6.2766, so K = -7.2766. Its coefficients are C4 = +6.20471e-5, C6 = +5.84177e-7, C8 = -2.35856e-9, and C10 = 0. It is the strongest conic departure in the design and is placed close to the image plane for field-dependent correction.

The patent states that aspherical surfaces may be manufactured by fine grinding, glass molding, or a composite resin-on-glass process in the general embodiment description (¶0214). It does not specify which method is used for these three aspheres, so no manufacturing method is asserted here.

## Conditional Expressions

Example 4 satisfies the first-aspect conditional expressions listed by the patent.

| Expression | Formula | Patent range | Example 4 value | Verification |
|---|---|---:|---:|---|
| (1) | (-f1) / fw | 1.15-2.00 | 1.686 | Verified from G1 and wide EFL |
| (2) | (-f1) / ft | 0.45-0.90 | 0.597 | Verified from G1 and tele EFL |
| (3) | `|fw / ff|` | 0.15-0.45 | 0.238 | Verified from focus doublet focal length |
| (4) | `|fyw|` | 0.15-0.60 | 0.342 | Verified by finite difference of image-plane shift |
| (5) | ff / fs | -3.70-3.10 | 1.023 | Verified from focus and shift doublets |

The independently computed focal lengths used for these checks are f1 = -17.3619 mm, fw = 10.2999 mm, ft = 29.0997 mm, ff = +43.2363 mm, and fs = +42.2549 mm. For expression (4), moving the focus doublet by 0.0001 mm at the wide-angle state changes the paraxial image plane by -0.00003418 mm, giving |fyw| = 0.3418.

## Image Stabilization

The vibration-reduction group is the L24+L25 cemented positive doublet in G2. The patent states that this group moves in a direction including a component perpendicular to the optical axis to correct image blur (¶0170). Figures 16A and 16B show coma behavior for a ±0.1 mm shift at the wide and telephoto ends.

The shift group's paraxial focal length is +42.25 mm. This is close to the +43.24 mm focal length of the focusing group, giving ff/fs = 1.023. That near-unity relationship is one reason the focus and VR subassemblies can both remain compact while maintaining manageable aberration variation.

## Chromatic Correction Strategy

The design does not rely on ED glass. It uses multiple high-index glasses and three cemented doublets to manage axial and lateral color in a compact package.

G1 uses two dense positive flint-class menisci, L13 and L14, after the two negative high-index menisci. This gives the first group chromatic leverage without increasing the number of cemented components. G2 uses two separate cemented doublets: one for focus and one for VR. G3 uses a cemented negative doublet to keep the rear negative group from imposing excessive secondary chromatic residuals.

Because the patent does not provide partial-dispersion data, this analysis does not claim apochromatic behavior. The data file likewise stores nd and νd, but not nC, nF, ng, or ΔPgF values.

## Verification Summary

The prescription was re-entered from Table 4 and checked with an independent paraxial y-nu ray trace. The computed infinity-focus EFLs are 10.2999 mm, 17.2998 mm, and 29.0997 mm, matching the patent's 10.3 / 17.3 / 29.1 mm states. The computed group focal lengths are G1 = -17.3619 mm, G2 = +15.6467 mm, and G3 = -34.1739 mm, matching the patent's group data.

Surface-by-surface Petzval summation using φ/(n n') gives +0.0022301 mm^-1, corresponding to a Petzval radius of -448.4 mm. This value is moderate for a compact CX-format zoom and is consistent with the negative rear group and final asphere being used for field-shaping.

The data file's semi-diameters are not patent-published values. They were set by ray-envelope and renderer constraints rather than by a production mechanical drawing. The clear-aperture values should therefore be treated as display-safe inferred apertures, while the radii, spacings, refractive indices, Abbe numbers, asphere coefficients, and variable gaps are direct Table 4 values except for the explicit close-focus endpoint described above.

## Design Heritage and Context

The 1 NIKKOR VR 10-30mm f/3.5-5.6 was one of the initial Nikon 1 system lenses. In Nikon's launch materials, it served as the compact standard zoom, covering a 27-81 mm equivalent field of view on CX format and using a retractable barrel and VR. The optical prescription here reflects that requirement: a short-flange mirrorless kit zoom with a small image circle, moderate maximum aperture, internal focusing, and a compact VR shift group.

The later 1 NIKKOR VR 10-30mm f/3.5-5.6 PD-ZOOM is a different optical design. It should not be conflated with this 12-element / 9-group prescription.

## Sources

- US 2012/0019926 A1, Akira Yamagami / Nikon Corporation, published January 26, 2012. Primary prescription source, especially Table 4 and ¶0163-0171.
- Nikon Corporation, September 21, 2011 launch materials for the Nikon 1 system and 1 NIKKOR lenses.
- Nikon Imaging product history entry for the 1 NIKKOR VR 10-30mm f/3.5-5.6.
- OHARA optical glass catalog and product pages for S-LAH58, S-LAL18, S-NPH1, S-TIH4, S-LAH53, and S-LAL12.
- HOYA optical glass catalog and data sheets for M-series and legacy glass matches including M-TAFD305, M-NBFD10, M-LAF81, FC5, and FDS90.
- Sumita / SSK optical-glass references for the K-SSK1 / SSK1 class label; no source-backed Sellmeier entry was added.
