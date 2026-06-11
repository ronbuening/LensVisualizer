# Sigma 30mm F1.4 DC HSM | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2014-142520 A (特開2014-142520)
**Application Number:** 特願2013-11582 (P2013-11582)
**Filed:** 2013-01-25 (平成25年1月25日)
**Published:** 2014-08-07 (平成26年8月7日)
**Inventor:** Daiki Uehara (上原 大樹)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Imaging Lens System (撮像レンズ系)
**Classification:** IPC G02B 13/00, G02B 13/18
**Claims:** 3
**Worked examples:** 7 (Numerical Examples 1-7)
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

The patent describes a family of large-aperture, wide-standard imaging lenses for APS-C single-lens-reflex cameras. Its stated aim is to preserve sufficient back focus for mirror clearance while maintaining a large aperture ratio, compact total length, and stable imaging performance through the focus range (Abstract; ¶0001-¶0010). Claim 1 defines a two-group construction: a positive first group **G1**, followed by a positive second group **G2** that contains the aperture stop; during focusing from infinity to near distance, G1 is fixed relative to the image plane and G2 advances toward the object (Claim 1; ¶0012, ¶0018).

The production lens identified here is the **Sigma 30mm F1.4 DC HSM | Art**, edition A013. Sigma's official product page identifies it as a DSLR APS-C [DC] lens available in Sigma SA, Canon EF, Nikon F, Pentax, and Sony A mounts, with 9 elements in 8 groups, 50.7° angle of view, a 0.30 m minimum focusing distance, 1:6.8 maximum magnification, HSM drive, and a rear-focus system. Those data align with Numerical Example 1 rather than the other worked examples.

The mapping to **Numerical Example 1** rests on convergent evidence:

1. **Applicant, timing, and product generation.** The patent is assigned to Sigma Corporation, filed in January 2013, and published in August 2014. The product page's A013 edition places the lens in Sigma's 2013 Art-line generation, not the later 2016 mirrorless DC DN generation.
2. **System class.** The patent is explicitly directed to cameras with APS-C sensors and discusses the back-focus requirement imposed by the moving mirror in a single-lens-reflex camera (¶0001-¶0003). This excludes the later mirrorless Sigma 30mm F1.4 DC DN | Contemporary, which has no mirror-box clearance requirement and uses a different 9-element / 7-group construction.
3. **Element and group count.** Example 1 has nine glass elements in eight air-separated groups. This matches Sigma's official construction for the DC HSM Art and excludes the earlier 30mm F1.4 EX DC HSM, which Sigma lists as a 7-element / 7-group design.
4. **Aspheric configuration.** Example 1 places both aspherical surfaces on the final positive element L9 (surfaces 17 and 18). Sigma's product construction diagram highlights the rearmost element as the aspherical element, and the product text refers to the use of a double-aspheric lens.
5. **Focal length, aperture, field, and image circle.** Example 1 gives f = 30.78 mm, Fno = 1.46, maximum image height Y = 14.20 mm, and 2ω = 50.64°. These round to the marketed 30 mm F1.4 APS-C lens with Sigma's published 50.7° angle of view.
6. **Focus mechanism.** The patent's G2 rear group, including the stop, advances as one rigid group while G1 remains fixed (¶0021-¶0022, ¶0053). Sigma describes the product as using a rear focus system driven by HSM.

Where production hard specifications and the patent design values differ, both are recorded. The marketed focal length and aperture are 30 mm and F1.4; the patent design values are 30.785 mm and Fno = 1.46. Sigma's production minimum focusing distance is 0.30 m with 1:6.8 maximum magnification. The patent publishes a finite-conjugate spacing table at 600 mm only, so the data file uses an explicitly derived 0.30 m close-focus state rather than silently treating the 600 mm patent state as the production minimum.

## Optical Architecture

The system is a positive-positive, two-group, long-back-focus wide-standard design. It has the back-focus behavior of a retrofocus SLR lens but does not use a net-negative first group. Instead, the first group is weakly positive overall while containing two strong negative menisci that push the principal-plane geometry in the required direction for mirror clearance.

**G1** covers surfaces 1-6 and contains three air-separated elements. L1 and L2 are negative menisci convex to the object; L3 is a positive biconvex element. The patent states that the negative power in L1 and L2 secures back focus but also creates negative distortion, which the positive L3 suppresses when placed on the image side of the two negative lenses (¶0019). Independent paraxial tracing gives f(G1) = 239.28 mm, matching the patent table, so the group is only weakly positive. The patent further states that this weak-positive first group leaves the axial bundle close to afocal, reducing aberration variation during focusing (¶0020).

**G2** covers surfaces 7-18 and contains six elements in five air-separated groups: a positive lead element L4, a biconcave negative L5, the aperture stop, a cemented negative-positive doublet L6+L7, a positive meniscus L8, and the final double-aspherical positive element L9. Independent paraxial tracing gives f(G2) = 40.87 mm, again matching the patent table. G2 is therefore the main imaging and focusing group. When it moves objectward, the G1-G2 interval decreases while the back focus increases by the same amount, preserving total track.

The stop is inside G2 between L5 and the cemented doublet. The patent states that during focus the stop follows the same path as G2 without changing its spacing to the adjacent lenses (¶0053). The system is therefore a single moving rear group, not a floating-focus design.

## Element-by-Element Analysis

Surface numbers follow the patent's object-to-image numbering. Element focal lengths below are standalone thick-lens values in air. The L6+L7 cemented-pair focal length is computed by paraxial tracing of the bonded pair in air.

### L1 — Negative Meniscus, convex to object (surfaces 1-2)

nd = 1.51680, νd = 64.2. Glass: BSC7 (Hoya), borosilicate crown, equivalent class N-BK7 / S-BSL7. f = -67.6 mm.

Both radii are positive (R1 = 79.7416, R2 = 24.1967), so the stronger rear curvature makes this a negative meniscus convex to the object. This agrees with the patent prose in ¶0053. With L2, it supplies the front-group negative power used to secure back focus; the use of an ordinary crown is consistent with a field-shaping rather than a special-dispersion role.

### L2 — Negative Meniscus, convex to object (surfaces 3-4)

nd = 1.48749, νd = 70.4. Glass: FC5 (Hoya), fluor crown, equivalent class N-FK5 / S-FSL5. f = -74.2 mm.

The front radius is nearly flat (R3 = 821.6299), while the rear radius (R4 = 34.6531) carries the negative meniscus power. FC5 is a low-index, low-dispersion crown. Its use in a negative element helps keep axial color under control in the front subgroup, but the patent does not publish partial-dispersion data and does not support an apochromatic claim.

### L3 — Biconvex Positive, stronger toward object (surfaces 5-6)

nd = 1.62041, νd = 60.3. Glass: BACD16 (Hoya), dense barium crown, equivalent class N-SK16 / S-BSM16. f = +39.8 mm.

The opposite radius signs (R5 = 34.8591, R6 = -77.7385) make L3 biconvex. It restores G1 to weak net-positive power after the two negative menisci and is the element that the patent identifies as suppressing the negative distortion produced by L1 and L2 (¶0019). BACD16 gives moderate index and relatively high Abbe number, allowing useful positive power without excessive curvature.

### L4 — Positive lead element of G2, convex to object (surfaces 7-8)

nd = 1.75520, νd = 27.5. Glass: E-FD4L / Ref. E-FD4 (Hoya), dense flint, equivalent class N-SF4 / S-TIH4. f = +52.5 mm.

The rear surface is very weak (R8 = -1548.9374), so L4 is close to plano-convex with most of its power on the front surface. It begins the rear group's convergence after the near-afocal G1-G2 interval. Its high dispersion is part of the rear-group achromatization strategy rather than an indication of apochromatic correction.

### L5 — Biconcave Negative (surfaces 9-10)

nd = 1.80518, νd = 25.5. Glass: FD60 (Hoya), dense flint, equivalent class N-SF6 / S-TIH6. f = -43.7 mm.

R9 is negative and R10 is positive, confirming a biconcave negative lens. Located just before the stop, L5 supplies strong diverging power near the pupil. Its high index helps keep surface curvatures within practical limits while the high dispersion participates in balancing the positive powers around the stop.

### L6 — Biconcave Negative, concave to object (surfaces 12-13) · cemented with L7

nd = 1.76182, νd = 26.6. Glass: FD140 (Hoya), dense flint, equivalent class S-TIH14. f(standalone) = -18.7 mm.

L6 is the negative component of the post-stop cemented doublet. The strong front radius (R12 = -17.9099) places the concave face toward the object, matching ¶0053. As the first half of a cemented pair near the stop, it contributes both negative power and a strong internal chromatic interface.

### L7 — Biconvex Positive (surfaces 13-14) · cemented with L6

nd = 1.80420, νd = 46.5. Glass: TAF3 (Hoya), dense lanthanum flint, equivalent class N-LASF44 / S-LAH65VS. f(standalone) = +31.4 mm.

L7 shares the cement interface at R13 = 71.7339 and exits at R14 = -37.5094, making it biconvex. Although it is a positive element, νd = 46.5 places it on the flint side of the crown/flint boundary. The bonded L6+L7 pair has f = -60.2 mm in air, so the group remains net negative. Its internal interface is the steepest chromatic-correction interface in the design.

### L8 — Positive Meniscus, convex to image (surfaces 15-16)

nd = 1.72916, νd = 54.7. Glass: TAC8 (Hoya), lanthanum crown, equivalent class S-LAL18. f = +74.5 mm.

Both radii are negative (R15 = -200.1294, R16 = -43.0881), so the element is a positive meniscus convex to the image side. L8 contributes moderate positive power and helps manage rear-group Petzval balance without requiring aggressive curvature.

### L9 — Biconvex Positive, double-aspherical, glass molded (surfaces 17A-18A)

nd = 1.77250, νd = 49.5. Glass: M-TAF1 (Hoya), precision-molding lanthanum flint. f = +43.0 mm.

L9 is the rearmost element and the only aspherical element in Example 1. Its front and rear surfaces are both aspherical. The patent recommends placing at least one asphere on the most image-side G2 element and states that using a glass-molded asphere permits high accuracy at lower manufacturing cost than an equivalent all-spherical construction (¶0041-¶0043). Placing the double-asphere at the rear lets the design correct spherical aberration, coma, and astigmatism in the final converging beam.

## Glass Identification and Selection

The glass identifications were rechecked against Hoya's official cross-reference data by six-digit nd/νd code. The codes match the Hoya entries or Hoya reference entries below. Equivalent Schott and Ohara names are included only as class references; they are not treated as proof that those vendors supplied the melt.

| Element | nd | νd | Hoya match | Code | Class / role |
|---|---:|---:|---|---:|---|
| L1 | 1.51680 | 64.2 | BSC7 | 517/642 | Borosilicate crown; front negative meniscus |
| L2 | 1.48749 | 70.4 | FC5 | 487/704 | Fluor crown; low-dispersion negative meniscus |
| L3 | 1.62041 | 60.3 | BACD16 | 620/603 | Dense barium crown; front-group recovery positive |
| L4 | 1.75520 | 27.5 | E-FD4L / Ref. E-FD4 | 755/275 | Dense flint; G2 lead positive |
| L5 | 1.80518 | 25.5 | FD60 | 805/255 | Dense flint; pre-stop negative |
| L6 | 1.76182 | 26.6 | FD140 | 762/266 | Dense flint; doublet negative |
| L7 | 1.80420 | 46.5 | TAF3 | 804/465 | Dense lanthanum flint; doublet positive |
| L8 | 1.72916 | 54.7 | TAC8 | 729/547 | Lanthanum crown; rear positive meniscus |
| L9 | 1.77250 | 49.5 | M-TAF1 reference | 773/495 | Moldable lanthanum flint; double-aspherical positive |

The chromatic strategy is conventional achromatization. No SLD, FLD, fluorite, or strong anomalous-partial-dispersion element is present in the patent table. L2 is a fluor crown, but the patent gives only nd and νd, not θgF, ΔPgF, or line indices; therefore it should not be described as a secondary-spectrum correcting element on patent evidence alone. Color correction is instead distributed through the rear group by pairing dense flints (L4, L5, L6) with high-index lanthanum glasses (L7, L8, L9), especially across the cemented L6+L7 interface.

## Focus Mechanism

The lens uses rear-group focusing. G1 is fixed relative to the image plane, and G2, including the aperture stop, moves objectward as a rigid unit (¶0021-¶0022, ¶0053). Thus only two axial distances change in the sequential prescription: the G1-G2 air gap d6 and the back focus BF. The internal spacings of G2 remain constant.

The patent's published finite-conjugate check is at a 600 mm shooting distance:

| Quantity | Infinity | 600 mm patent state | Change |
|---|---:|---:|---:|
| d6, G1-G2 gap | 5.4490 mm | 3.5754 mm | -1.8736 mm |
| BF | 38.3990 mm | 40.2725 mm | +1.8735 mm |

The equal-and-opposite change confirms a single rigid rear-group translation. Paraxial conjugate verification also shows that this patent state focuses at approximately 600.04 mm measured from the image plane, which is the usual photographic distance convention.

For the accompanying data file, the focus slider is extended to Sigma's production minimum focusing distance of 0.30 m rather than stopped at the patent's 600 mm evaluation state. Solving the same rigid-G2 paraxial focus equation at a 300 mm image-plane-to-object distance gives a G2 travel of 4.5287 mm, d6 = 0.9203 mm, and BF = 42.9277 mm. The same calculation gives |β| = 0.1468, which agrees with Sigma's published 1:6.8 maximum magnification. These 0.30 m values are therefore a verified derived production-close model, not a patent-published spacing table.

## Aspherical Surfaces

Example 1 has two aspherical surfaces, both on L9: surface 17 (front) and surface 18 (rear). The patent's sag equation is the standard conic-plus-even-polynomial form:

$$ z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1 + K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} $$

In this convention, K = 0 is a spherical base curve. Both Example 1 aspheres use K = 0, so all departure from the base sphere is carried by the polynomial coefficients.

| Coefficient | Surface 17A | Surface 18A |
|---|---:|---:|
| K | 0.00000E+00 | 0.00000E+00 |
| A4 | -4.06947E-07 | +5.73182E-06 |
| A6 | 0.00000E+00 | -1.99338E-09 |
| A8 | 0.00000E+00 | +5.80103E-12 |
| A10 | 0.00000E+00 | -3.50184E-15 |

The front surface has only a small negative fourth-order term. The rear surface carries the stronger correction with a positive A4 term and alternating higher orders. This is the main aspherical correction in the prescription and is consistent with the patent's statement that a convex positive final element with both faces aspherical is preferred for stronger aberration correction (¶0043).

## Conditional Expressions

The patent states four conditional expressions and gives a correspondence table for each worked example (¶0012-¶0014, ¶0023-¶0040, ¶0075). Example 1 satisfies all four:

| # | Published form | Computed from Example 1 | Patent table |
|---|---|---:|---:|
| (1) | 2.50 < TT/BF < 3.00 | 2.734 | 2.73 |
| (2) | 1.00 < BF/f < 1.35 | 1.247 | 1.25 |
| (3) | 1.20 < Fno < 1.65 | 1.46 | 1.46 |
| (4) | 0.33 < Y/BF < 0.45 | 0.370 | 0.37 |

Condition (2) has an internal patent inconsistency. Claim 1 and the body text print the upper limit as 1.35, while the per-example correspondence table prints 1.40. Example 2 has BF/f = 1.38 and is still presented as compliant in the table, so 1.40 is likely the intended technical bound in the examples. The claim text remains the formal printed claim. Example 1 is unaffected because 1.247 satisfies either upper bound.

## Verification Summary

The prescription was transcribed from the patent's Numerical Example 1 and rechecked by an independent paraxial y-u ray trace in air. The infinity-focus checks reproduce the patent values within rounding:

| Quantity | Independent trace | Patent value | Difference |
|---|---:|---:|---:|
| Effective focal length | 30.7849 mm | 30.78 mm | +0.0049 mm |
| Back focus, infinity | 38.3991 mm | 38.3990 mm | +0.0001 mm |
| Total track to image plane | 104.9989 mm | 105.00 mm | -0.0011 mm |
| f(G1) | 239.28 mm | 239.28 mm | <0.01 mm |
| f(G2) | 40.87 mm | 40.87 mm | <0.01 mm |
| 600 mm focus state | 600.04 mm from image plane | 600 mm | +0.04 mm |
| Derived 0.30 m production state | | | |
| d6 / BF at 0.30 m | 0.9203 / 42.9277 mm | derived | — |
| Paraxial magnification at 0.30 m | 0.1468× | Sigma 1:6.8 | agrees |

Standalone element focal lengths are: L1 -67.6 mm, L2 -74.2 mm, L3 +39.8 mm, L4 +52.5 mm, L5 -43.7 mm, L6 -18.7 mm, L7 +31.4 mm, L8 +74.5 mm, and L9 +43.0 mm. The cemented L6+L7 pair is net negative at -60.2 mm. The surface-by-surface Petzval sum, computed as Σφ/(n·n′), is +4.153 × 10^-3 mm^-1, giving a Petzval radius of approximately -241 mm and P·f ≈ 0.128.

The data file uses inferred semi-diameters because the patent does not publish clear apertures. They were set from paraxial on-axis marginal rays plus full-field chief rays, then checked for element edge thickness, front/rear semi-diameter ratio, spherical/aspherical rim behavior, and signed cross-gap sag clearance. The stop semi-diameter is 11.4429 mm, derived from the patent Fno = 1.46 design aperture; the catalog-facing `nominalFno` remains the manufacturer-marketed F1.4.

## Design Heritage and Context

The lens is the Art-line successor to Sigma's earlier 30mm F1.4 EX DC HSM. The older EX lens was a 7-element / 7-group APS-C DSLR normal lens with a longer 0.40 m minimum focusing distance; Sigma's Art-line A013 redesign uses a 9-element / 8-group formula, a rearmost double-aspherical molded element, a fixed front group, and rear-group HSM focusing. The result is not a scaled copy of the EX formula but a different patent family optimized around long SLR back focus and reduced focus-dependent aberration variation.

## Sources

- JP 2014-142520 A (特開2014-142520), Sigma Corporation — primary prescription, conditions, aspherical coefficients, focus data, and design prose.
- Sigma Corporation, "30mm F1.4 DC HSM | Art" official product page — production specifications, mounts, lens construction, angle of view, minimum focusing distance, maximum magnification, HSM, and rear-focus description.
- Sigma Corporation, official lens-construction diagram for the A013 30mm F1.4 DC HSM — confirmation that the highlighted aspherical element is the rearmost element.
- Hoya Group Optics Division, "Glass Cross Reference Index" — Hoya glass names, six-digit codes, and cross-vendor class equivalents.
