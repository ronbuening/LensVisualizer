# Sigma 60 mm F2.8 DN | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2014-145954 A
**Application Number:** 特願2013-15189 (P2013-15189)
**Filed:** 30 January 2013
**Published:** 14 August 2014
**Inventor:** Masakazu Hibino (日比野 正和)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Imaging Optical System (結像光学系)
**Classification:** G02B 13/00, G02B 13/18
**Worked examples:** 4 numerical examples; 3 claims
**Embodiment analyzed:** Numerical Example 1 (数値実施例1, Fig. 1)

JP 2014-145954 A describes a compact inner-focusing medium-telephoto photographic objective for a large image sensor. Numerical Example 1 is the embodiment transcribed here. It is the most conservative representative match for the Sigma 60 mm F2.8 DN | Art, although Sigma has not publicly identified which of the patent's four examples became the manufactured prescription.

The identification rests on converging evidence rather than on a named product statement in the patent.

1. **Applicant and timing.** The applicant is Sigma Corporation. The application was filed on 30 January 2013, immediately after the public announcement cycle for Sigma's DN Art mirrorless primes.
2. **Element and group count.** Example 1 is an eight-element design in six air-separated groups, including two cemented doublets. Sigma publishes the production lens as 8 elements in 6 groups.
3. **Focal length and aperture.** Example 1 gives f = 60.00 mm and F-number = 2.92 at infinity. The marketed product is a 60 mm F2.8 lens; the small F-number difference is a normal patent-design versus marketing rounding difference.
4. **Image field.** Example 1 gives image height Y = 14.20 mm and full field 2ω = 26.38°. This corresponds to an APS-C-class 28.4 mm image circle and matches the Sony E-mount published field much more closely than the Micro Four Thirds central-field use case.
5. **Special elements.** Sigma publishes SLD glass and an aspherical lens in the 60 mm F2.8 DN construction diagram. Example 1 contains one FCD515-class low-dispersion fluorophosphate element and one aspherical surface.
6. **Focus mechanism.** The patent's core claim is a compact two-element positive second group G2 that moves toward the object during near focusing (¶0012, ¶0017, ¶0052). This matches the production lens's inner-focus description.
7. **Application class.** The patent targets a diagonal full angle of roughly 20°–30° in the medium-telephoto range (abstract, ¶0011), which is the class occupied by a 60 mm APS-C mirrorless lens.

The patent contains four 60 mm-class inner-focus examples. Example 2 uses an nd = 1.49700 / νd = 81.61 glass in the front cemented unit, which is closer to an FLD/fluorite-class material than to the SLD-marked production construction. Example 3 changes the first rear-group element to a negative meniscus convex to the object (¶0056). Examples 1 and 4 are closer siblings, both retaining the biconcave first rear-group element and the νd = 68.62 low-dispersion front element. Example 1 is selected because it is the patent's Fig. 1 embodiment and its numerical data reproduce the published focal length, field, group powers, and conditional-expression values without scaling.

The reference wavelength is the d-line at 587.56 nm (¶0044). Radii use the common Japanese patent convention: positive radius means the center of curvature lies toward the image side. The aspherical equation uses the standard conic convention in which K = 0 is a spherical base surface (¶0047). No focal-length scale factor has been applied.

## Optical Architecture

The design is a compact double-Gauss-derived short telephoto with an added fixed negative rear field group. In the patent's group notation it is arranged, from object to image, as positive G1, aperture stop S, positive moving G2, and negative fixed G3 (¶0012, ¶0017). The power distribution is therefore positive / positive / negative.

The independently verified group focal lengths are:

| Group | Surfaces | Patent role | Computed focal length |
|---|---:|---|---:|
| G1 | 1–5 | Front positive group and chromatic-correction doublet | +93.37 mm |
| G2 | 7–10 | Two-element positive inner-focus group | +42.29 mm |
| G3 | 11–15 | Fixed negative rear group | −106.71 mm |

G1 provides the main front collection and carries the front cemented chromatic-correction unit. G2 is the compact, low-mass moving group: a negative meniscus nearly concentric with the stop followed by a positive biconvex element with an image-side aspherical surface. G3 is a fixed negative field group that reduces the amount of focus travel required from G2 and helps control total length and image-side ray angles (¶0020, ¶0026–0028).

The architecture is not a telephoto lens in the strict TL/EFL sense. Its physical patent track from surface 1 to image, including the camera-side filter plate, is 74.02 mm against f = 60.00 mm, so TL/EFL ≈ 1.23. It is better described as a compact short telephoto or double-Gauss-derived medium-telephoto design, not as a true telephoto formula.

The patent includes a rear plane-parallel filter F at surfaces 16–17 and states that this plate is not part of G3; it is an IR-cut, low-pass, or similar camera-side filter selected according to the imaging device (¶0051). The data file therefore excludes that filter and folds its optical path into the last air-equivalent back distance:

$$d_{15,data}=23.0700+\frac{2.2000}{1.51680}+1.0000=25.5204\,\text{mm}.$$

## Element-by-Element Analysis

Element focal lengths below are standalone in-air thick-lens values computed directly from the patent radii, thicknesses, and d-line indices. They describe each physical element in isolation, not the in-situ power of cemented assemblies.

### L1a — Positive Meniscus, convex to object

nd = 1.80420, νd = 46.50. Glass: 804/465 dense lanthanum flint, TAF3 / N-LASF44 class. f = +64.97 mm.

L1a is the front collector. Both radii are positive (R1 = +31.12 mm, R2 = +73.27 mm), and the stronger front curvature makes it a positive meniscus convex to the object, as stated in ¶0052. Its high refractive index keeps curvature moderate for the required positive power.

This element should be classified as dense lanthanum flint, not crown. Its νd = 46.50 places it on the flint side of the usual crown/flint boundary despite the lanthanum family name.

### L1b — Positive near-plano-convex element, front member of D1

nd = 1.59282, νd = 68.62. Glass: FCD515-class fluorophosphate SLD glass. f = +35.56 mm.

L1b is the positive low-dispersion member of the front cemented doublet. The object-side radius is +21.50 mm and the cemented interface is nearly flat at −1000 mm. The nd/νd pair is an exact Hoya FCD515-class match and is the only strongly low-dispersion fluorophosphate glass in Example 1. Its position makes it the most likely physical realization of Sigma's published SLD element.

### L1c — Negative near-plano-concave element, rear member of D1

nd = 1.60342, νd = 38.01. Glass: E-F5 / S-TIM5-class ordinary flint. f = −24.88 mm.

L1c completes the front cemented achromat. Its first surface is the near-plane cemented interface and its rear surface is +15.25 mm, concave toward the image. Paired with L1b, it supplies the opposing dispersion needed to control axial and lateral chromatic aberration while leaving the doublet only weakly negative as a unit. The standalone D1 focal length computes to −125.99 mm, confirming that this doublet is primarily corrective rather than power-bearing.

### L2a — Negative Meniscus, concave to object

nd = 1.64769, νd = 33.84. Glass: E-FD2 / N-SF2 dense flint class. f = −57.36 mm.

L2a is the leading element of the moving focus group G2 and is the object-side lens in conditional expression (1). Both radii are negative (R7 = −17.72 mm, R8 = −34.67 mm), so the element is a negative meniscus concave to the object side. The patent emphasizes that this shape is approximately concentric with the aperture stop, reducing off-axis chief-ray incidence and suppressing coma and astigmatism generated within the moving group (¶0019).

### L2b — Biconvex Positive, image-side aspherical

nd = 1.59201, νd = 67.02. Glass: Hoya M-PCD51-class moldable low-dispersion crown. f = +26.77 mm.

L2b is the positive, power-bearing member of G2 and the image-side lens in conditional expression (1). Its radii are +44.258 mm and −23.85 mm, giving a biconvex positive form. The image-side surface is the design's only aspherical surface (¶0052).

The material is a precision-moldable low-dispersion crown class, which is consistent with the asphere being placed on this element. The patent states that placing one or more aspherical surfaces in G2 is useful for suppressing focus-induced aberration variation and further notes that a biconvex positive element is favorable for high-precision manufacture (¶0041).

### L3a — Biconcave Negative, near-plano-concave front surface

nd = 1.58144, νd = 40.89. Glass: E-FL5 / S-TIL25 light flint class. f = −34.34 mm.

L3a is the first element of the fixed rear group G3. The front radius is nearly plane at −1000 mm and the rear radius is +20.38 mm. The patent describes it as biconcave (両凹) in ¶0052; numerically it behaves as a near-plano-concave negative singlet. It supplies much of the negative power that lets G3 reduce G2 focus travel.

### L3b — Negative Meniscus, convex to object, front member of D2

nd = 1.69895, νd = 30.05. Glass: Hoya E-FD15 / N-SF15 dense flint class. f = −36.56 mm.

L3b is the negative front element of the rear cemented doublet. Both radii are positive (R13 = +61.64 mm, R14 = +17.98 mm), giving a negative meniscus convex to the object. It works with L3c to moderate the rear group's net negative power and dispersion.

### L3c — Positive high-index rear element, rear member of D2

nd = 2.00100, νd = 29.13. Glass: Hoya TAFD55 / S-LAH99 high-index lanthanum flint class. f = +21.27 mm.

L3c is the very-high-index positive element at the rear of the lens. The cemented interface is +17.98 mm and the rear surface is a weak +100.00 mm surface, concave toward the image as described in ¶0052. Its high index allows strong positive power in a compact element while limiting the Petzval penalty that would come from a lower-index element carrying the same role. The standalone D2 focal length is +53.26 mm; combined with the strongly negative L3a, the full rear group becomes f3 = −106.71 mm.

## Glass Identification and Selection

The patent gives only nd and νd values; it does not name glass vendors. The catalog labels below are therefore catalog-equivalent identifications, not patent-stated trade names. The Hoya assignments are favored where the nd/νd pair is an exact match to a Hoya catalog type and where the element's role is consistent with Sigma's published construction notes.

| Element | nd | νd | Catalog-equivalent identification | Role |
|---|---:|---:|---|---|
| L1a | 1.80420 | 46.50 | TAF3 / N-LASF44 class | High-index dense lanthanum flint collector |
| L1b | 1.59282 | 68.62 | Hoya FCD515-class fluorophosphate | SLD-class front chromatic corrector |
| L1c | 1.60342 | 38.01 | Hoya E-F5 / Ohara S-TIM5 class | Ordinary flint achromat partner |
| L2a | 1.64769 | 33.84 | Hoya E-FD2 / Schott N-SF2 class | Dense flint negative meniscus in focus group |
| L2b | 1.59201 | 67.02 | Hoya M-PCD51 class | Moldable low-dispersion positive asphere |
| L3a | 1.58144 | 40.89 | Hoya E-FL5 / Ohara S-TIL25 class | Rear-group negative singlet |
| L3b | 1.69895 | 30.05 | Hoya E-FD15 / Schott N-SF15 class | Rear-doublet negative member |
| L3c | 2.00100 | 29.13 | Hoya TAFD55 / Ohara S-LAH99 class | Very-high-index rear positive member |

The chromatic strategy is concentrated in D1. L1b is the only FCD515-class fluorophosphate glass in Example 1 and is therefore the most plausible location of Sigma's SLD glass. L1c supplies the ordinary flint counter-dispersion. L2b is also low-dispersion, but its M-PCD51-class identity and moldable-asphere role make it a precision-molded low-dispersion crown rather than a second SLD-class special element in the product-identification argument.

The rear group uses high-index dense flints rather than low-dispersion glasses. That is a field and length-management choice more than a secondary-spectrum strategy: L3a supplies negative field-group power, while the L3b/L3c cemented pair moderates the rear group's net divergence and Petzval contribution.

## Focus Mechanism

The lens uses inner focusing. G2, consisting only of L2a and L2b (surfaces 7–10), moves toward the object during focusing from infinity to a nearer distance, while G1, the stop, and G3 remain fixed (¶0017, ¶0052). This is the patent's principal mechanical advantage over earlier Gauss-derived rear-focus systems: the moving group has only two relatively small-diameter elements, reducing actuator burden and focus noise (¶0004–0010, ¶0018).

The patent directly tabulates an infinity state and an 800 mm shooting-distance state:

| Spacing | Infinity | Patent 800 mm state | Change |
|---|---:|---:|---:|
| d6, stop → G2 | 10.1300 mm | 6.6783 mm | −3.4517 mm |
| d10, G2 → G3 | 1.9400 mm | 5.3917 mm | +3.4517 mm |
| BF after filter | 1.0000 mm | 1.0001 mm | ≈ 0 |

The conservation of d6 + d10 confirms that G2 is the only moving optical group in the patent model. At the 800 mm state, the computed paraxial magnification is β ≈ −0.0816, or roughly 1:12.3. The effective focal length falls from 60.00 mm to 55.86 mm, matching the patent's tabulated close-state value and showing moderate focus breathing.

Sigma's production specification gives a closer 0.50 m minimum focusing distance and 1:7.2 maximum magnification. The data file therefore does not use the patent's 800 mm state as the endpoint of the UI focus slider. Instead, it preserves the patent's one-degree internal focus model and solves the finite-conjugate condition at 0.50 m object-to-image distance. That gives:

| Spacing | Infinity | 0.50 m production endpoint solve | Change |
|---|---:|---:|---:|
| d6, stop → G2 | 10.1300 mm | 4.4302 mm | −5.6998 mm |
| d10, G2 → G3 | 1.9400 mm | 7.6398 mm | +5.6998 mm |

The same solve gives β ≈ −0.1390, agreeing with the published 1:7.2 magnification. This close-focus endpoint is a computed extension from the patent model constrained by Sigma's official MFD and magnification, not a directly printed patent table value.

## Aspherical Surfaces

Example 1 has one aspherical surface: surface 10, the image-side surface of L2b in the moving focus group (¶0052). In the data file this surface is labeled `10A`.

The patent sag equation is given in ¶0047 as an even-order conic-plus-polynomial form:

$$z=\frac{(1/r)y^2}{1+\sqrt{1-(1+K)(y/r)^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}.$$

Here K is the standard conic constant; K = 0 is a spherical base surface. Surface 10 has base radius r = −23.8500 mm and these coefficients:

| Coefficient | Value |
|---|---:|
| K | 0.00000E+00 |
| A4 | +1.66000E−05 |
| A6 | −1.39960E−08 |
| A8 | +2.67930E−10 |
| A10 | −1.09700E−12 |

The positive A4 term partially offsets the base concave surface's spherical departure at moderate aperture heights, while the alternating higher-order terms control the rim behavior. Because the surface is in G2, its correction travels with the focus group and directly addresses focus-induced aberration variation, which is exactly the use case described in ¶0041.

## Conditional Expressions

The patent states four conditional expressions and tabulates the corresponding values for each numerical example (¶0012–0014, ¶0061). Example 1 reproduces all four values independently.

**(1)** −4.5 < f2a / f2b < −1.1
Computed: f2a = −57.36 mm, f2b = +26.77 mm, so f2a/f2b = −2.14. Patent table: −2.14.

**(2)** 0.28 < |f2 / f3| < 0.75
Computed: |+42.29 / −106.72| = 0.40. Patent table: 0.40.

**(3)** 0.85 < f1 / f < 2.40
Computed: +93.37 / 60.00 = 1.56. Patent table: 1.56.

**(4)** 0.04 < d2np / f2 < 0.19
Computed: 2.7000 / 42.29 = 0.064, rounded to 0.06. Patent table: 0.06.

The expressions set the relative powers of the two G2 elements, the G2/G3 power balance, the G1/system power balance, and the internal air space inside G2. Their stated purpose is to suppress focus-induced aberration variation, decentering sensitivity, excessive total length, and excessive image-side ray angles (¶0022–0039).

## Verification Summary

A separate paraxial y–n·u ray trace was run from the patent prescription. The trace uses surface-by-surface refraction and translation matrices and does not rely on the previous analysis text.

| Quantity | Patent | Computed |
|---|---:|---:|
| System EFL, infinity | 60.00 mm | 60.00 mm |
| System EFL, patent 800 mm state | 55.86 mm | 55.86 mm |
| G1 focal length | 93.37 mm | 93.37 mm |
| G2 focal length | 42.29 mm | 42.29 mm |
| G3 focal length | −106.72 mm | −106.71 mm |
| Surface 1 → image physical track, with filter | 74.02 mm | 74.02 mm |
| Conditional (1) | −2.14 | −2.14 |
| Conditional (2) | 0.40 | 0.40 |
| Conditional (3) | 1.56 | 1.56 |
| Conditional (4) | 0.06 | 0.064 |

The surface-by-surface Petzval sum using Σφ/(n·n′) is 2.2225 × 10⁻³ mm⁻¹. That corresponds to a Petzval radius of approximately −450 mm and P·f ≈ 0.133. This is a relatively flat-field result for a compact short telephoto and is consistent with the high-index rear positive element and negative fixed rear group.

Semi-diameters are not printed in the patent. The data-file semi-diameters were inferred from the computed marginal and chief-ray footprints, then reduced where needed to satisfy mechanical constraints: positive edge thickness at the rim, element front/rear semi-diameter ratio not exceeding 1.25 for the tightly constrained cemented members, and cross-gap sag intrusion not exceeding 90% of the intervening air gap. The strongest mechanical constraints occur at the L2b aspherical rear surface and the L3a/L3b air gap.

## Design Heritage and Context

The patent positions the design against earlier medium-telephoto Gauss-derived systems that focus by moving a heavier three-element rear group (¶0006–0010). Its contribution is to reduce the moving group to two small elements while assigning total-length and ray-angle control to a fixed negative third group. The resulting system keeps focus travel modest, maintains image quality through focus, and avoids requiring a larger actuator (¶0018–0020).

In production terms, this is the longest member of Sigma's early DN Art mirrorless prime trio. The same optical formula was sold for Sony E and Micro Four Thirds; the patent field corresponds to the APS-C/Sony E coverage, while the Micro Four Thirds version uses a smaller central portion of the image circle.

## Sources and References

- JP 2014-145954 A, Sigma Corporation, Masakazu Hibino. Primary source for the optical prescription, group structure, aspherical coefficients, focus-spacing table, filter-plate description, and conditional-expression values.
- Sigma Corporation, 60mm F2.8 DN product specifications. Source for production element/group count, mounts, field angles, SLD/aspherical construction marks, 0.50 m minimum focusing distance, 1:7.2 maximum magnification, 7-blade rounded diaphragm, 46 mm filter thread, physical dimensions, weight, and discontinued status.
- Sigma / distributor launch material from 2013. Source for the production inner-focus and linear-AF-motor descriptions where the current Sigma product page is specification-focused.
- Hoya, Schott, Ohara, Sumita, and CDGM optical glass catalogs. Used to cross-check nd/νd glass-class assignments. Vendor identity is not patent-stated unless explicitly noted.
