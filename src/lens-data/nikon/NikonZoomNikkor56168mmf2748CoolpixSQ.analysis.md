# NIKON ZOOM-NIKKOR 5.6-16.8mm f/2.7-4.8 (Coolpix SQ)

## Patent Reference and Design Identification

**Patent:** US 2003/0072085 A1

**Application Number:** 10/124,271

**Filed:** April 18, 2002

**Published:** April 17, 2003

**Priority:** April 23, 2001 (JP 2001-124314); February 27, 2002 (JP 2002-051175)

**Inventors:** Keiko Mizuguchi; Atsushi Shibayama

**Assignee:** Nikon Corporation

**Title:** ZOOM LENS SYSTEM

**Embodiment analyzed:** Example 1

The prescription is transcribed from Example 1 of US 2003/0072085 A1. The patent describes a compact three-power-group zoom for a solid-state image-gathering system, with negative G1, positive G2, and positive G3 arranged in that order. Example 1 contains seven glass elements, with L22 and L23 cemented, giving six air-separated physical groups. The aperture stop lies between G1 and G2. The patent states that G1 and G2 move during zooming while G3 remains fixed. [US 2003/0072085 A1, ¶¶0040–0043; Fig. 1; Table 1.]

The association with the Nikon COOLPIX SQ is strong enough to retain as a qualified product correlation, but it is not manufacturer-confirmed patent attribution. Several facts converge:

1. Nikon's COOLPIX SQ manual specifies a 3× Zoom-Nikkor of 5.6–16.8 mm and f/2.7–4.8, constructed as seven elements in six groups and used with a 1/2.7-inch CCD.
2. Nikon's product history places the COOLPIX SQ in 2003 and lists a 37–111 mm-equivalent 3× Zoom-Nikkor in the camera's swivel lens module.
3. Patent Example 1 is a seven-element, three-power-group compact zoom published immediately before the 2003 camera, with design focal lengths of 5.97, 10.00, and 16.88 mm.

The correlation also has a material contradiction. Example 1 states that focusing from infinity toward a near object is performed by moving G3 toward the object, whereas Nikon's later *NIKKOR — The Thousand and One Nights No.22* identifies the COOLPIX SQ optical system and states that its spiral-type lens focuses by moving group 1. The model therefore does not treat the patent as a Nikon-confirmed production prescription and does not import production focus motion into Example 1. [US 2003/0072085 A1, ¶¶0038, 0042; Nikon, *NIKKOR — The Thousand and One Nights No.22*.]

Marketing and design quantities are kept separate. The production lens is marketed as 5.6–16.8 mm f/2.7–4.8, while Example 1 publishes 5.97–16.88 mm with f-numbers 2.87, 3.73, and 5.22 at the three modeled zoom stations. No uniform scaling is applied to reconcile those differences.

## Optical Architecture

Example 1 is a negative-positive-positive three-power-group zoom. The seven physical elements are arranged as three elements in G1, three elements in G2, and one element in G3. L22 and L23 form the only cemented pair. The stop is between G1 and G2 and remains 0.4 mm in front of surface 8A in the source prescription. [US 2003/0072085 A1, ¶¶0040–0041; Table 1.]

Independent calculations from the final data revision give isolated group focal lengths of -13.938100 mm for G1, +11.041360 mm for G2, and +15.624766 mm for G3. These are isolated-group quantities, not measures of each group's in-situ contribution to the complete zoom. The sign pattern independently confirms the patent's negative-positive-positive description.

Zooming is driven by the two published variable air spaces, d6 between G1 and the stop/G2 assembly and d12 between G2 and G3. Taking fixed G3 as the reference, G1 moves imageward by 2.651 mm from the wide to intermediate station, then reverses and moves objectward by 3.449 mm from intermediate to telephoto. G2 moves monotonically objectward by 12.396 mm from wide to telephoto. This reversal is a property of the published spacing table rather than an inferred production mechanism.

The modeled Gaussian effective focal lengths are 5.973872 mm, 10.000135 mm, and 16.878611 mm at the three published stations. The corresponding total-track-to-EFL ratios remain greater than unity, so the design is not classified as a telephoto architecture under the project's `TL/EFL < 1` convention. Likewise, back focal distance from the last lens vertex remains shorter than EFL at all three stations, so it is not classified as retrofocus. The phrase “telephoto end” is therefore used only as the patent's zoom-position label.

The patent includes a plane-parallel plate behind L31 as source surfaces 15–16. The model retains it through `rearPlates`, with the source 0.6 mm pre-plate gap, 2.17 mm glass at nd = 1.51633 and νd = 64.14, and the 2.142 mm mean post-plate gap recovered from the rounded TL rows. The plate is traced by the optical engine and hidden from the lens drawing. Its paraxial air-equivalent spacing is 4.173086901 mm; physical TL residuals remain +0.001, 0.000 and −0.001 mm at the three source stations.

## Element-by-Element Analysis

### L11 — Negative Meniscus

nd = 1.83400, νd = 37.17. Glass: 834372 class, supplier unresolved. Standalone f = -14.906415 mm.

L11 is the object-side negative meniscus of G1. The patent specifies a negative meniscus whose concave surface faces the image side. Its two surfaces are both positive-radius surfaces in the adopted sign convention, with the stronger rear curvature producing negative standalone power. [US 2003/0072085 A1, ¶0041; Table 1 surfaces 1–2.]

No supplier-specific glass identity is assigned. Current catalog coordinates include close or exact members of several high-index glass families, but the patent publishes only nd and νd and does not identify a vendor or melt.

### L12 — Biconcave Negative

nd = 1.80400, νd = 46.58. Glass: 804466 class, supplier unresolved. Standalone f = -12.182925 mm.

L12 is the second negative element in G1 and is explicitly biconcave in the patent. Its standalone power is somewhat stronger than L11's, but the calculation does not assign an independent aberration-correction role to that power. [US 2003/0072085 A1, ¶0041; Table 1 surfaces 3–4.]

The modeled semi-diameter for both L12 surfaces is 4.4 mm. Exact meridional field sampling at the wide endpoint shows that the front surface of L12 is the first finite modeled semi-diameter to clip some edge-field pupil samples. This is a model-geometry result, not a patent-published clear aperture.

### L13 — Positive Meniscus

nd = 1.80518, νd = 25.43. Glass: 805254 dense-flint class, supplier unresolved. Standalone f = +14.134546 mm.

L13 is the positive meniscus that completes G1. The patent specifies its convex surface toward the object. In isolation it is positive, while the complete three-element G1 remains negative with an isolated group focal length of -13.938100 mm. [US 2003/0072085 A1, ¶0041; Table 1 surfaces 5–6.]

The 1.80518/25.43 coordinate is exactly occupied by SCHOTT SF6 in the current catalog and closely represented by other vendors, but that coordinate agreement is not evidence that Nikon used SCHOTT SF6 in the patent or production lens. The implemented label therefore remains supplier-neutral.

### L21 — Biconvex Positive, Object-Side Asphere

nd = 1.58313, νd = 59.62. Glass: J-SK12 — coordinate-compatible spectral proxy (supplier unresolved). Standalone f = +11.834466 mm.

L21 is the first element of positive G2 and is biconvex. Its object-side surface, source surface 8 and model surface 8A, is aspherical. The patent recommends at least one aspherical surface in G2 or G3 and uses the shape of the overall second group in conditional expression (2), which it relates to control of excessive spherical aberration. That is the patent's stated design rationale; the standalone L21 power by itself does not establish a unique aberration contribution. [US 2003/0072085 A1, ¶¶0028–0030, 0034, 0041.]

The existing HIKARI J-SK12 curve matches nd = 1.58313 and differs in νd by −0.20. It supplies a qualified spectral proxy for L21 and L31 while the production supplier and melt remain unknown.

### L22/L23 — Cemented Positive/Negative Pair

L22: nd = 1.80400, νd = 46.58. Glass: 804466 class, supplier unresolved. Standalone f = +5.565384 mm.

L23: nd = 1.69895, νd = 30.13. Glass: 699301 class, supplier unresolved. Standalone f = -3.842524 mm.

L22 is biconvex and L23 is biconcave. They meet at source surface 11, where the refractive medium after the interface is the L23 glass. Together they form the cemented pair specified by the patent in the rear portion of G2. [US 2003/0072085 A1, ¶¶0027, 0041; Table 1 surfaces 10–12.]

Although the two components have comparatively strong standalone powers, their isolated cemented combination has net power -0.0239357 mm⁻¹, corresponding to an isolated focal length of -41.778558 mm. The complete G2 remains positive because the cemented pair acts together with L21 and their internal spacings. The cemented-pair number is therefore not an in-situ power attribution for the assembled zoom.

The L22 coordinate is shared with L12 and retains the same 804466-class label. The L23 coordinate is consistent with a 699301 class; current OHARA S-TIM35 and HIKARI J-SF15 rows are exact coordinate matches, but the patent does not establish either supplier.

### L31 — Biconvex Positive, Object-Side Asphere

nd = 1.58313, νd = 59.62. Glass: J-SK12 — coordinate-compatible spectral proxy (supplier unresolved). Standalone f = +15.624766 mm.

L31 is the single positive element constituting G3. Its object-side surface, source surface 13 and model surface 13A, is aspherical. G3 is fixed during the published zoom motion, but the patent separately states that G3 should move toward the object for near focusing. [US 2003/0072085 A1, ¶¶0037–0038, 0040–0042.]

The same source 1.58313/59.62 coordinate and qualified J-SK12 spectral proxy used by L21 are retained here. No production focus travel is attached to L31 because Example 1 gives no finite-focus spacing state.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number only. It does not publish per-element C-, F-, or g-line indices, partial-dispersion deviation, Sellmeier coefficients, or supplier names. Accordingly, the implemented model does not add `nC`, `nF`, `ng`, or `dPgF`, and no apochromatic or anomalous-dispersion claim is made from the nd/νd coordinates alone.

| Coordinate | Used by | Implemented identification | Catalog evidence retained for comparison |
|---|---|---|---|
| nd 1.83400, νd 37.17 | L11 | 834372 glass class, supplier unresolved | OHARA S-LAH60MQ is an exact current coordinate; OHARA S-LAH60 and HIKARI J-LASF010 are very close. |
| nd 1.80400, νd 46.58 | L12, L22 | 804466 glass class, supplier unresolved | OHARA S-LAH65V and CDGM H-ZLaF50D are exact current coordinates; several other catalog families are near. |
| nd 1.80518, νd 25.43 | L13 | 805254 dense-flint class, supplier unresolved | SCHOTT SF6 is an exact current coordinate; HIKARI J-SF6 and CDGM ZF7L are close. |
| nd 1.58313, νd 59.62 | L21, L31 | J-SK12 spectral proxy, supplier unresolved | Compatible validated catalog curve; patent coordinates preserved. |
| nd 1.69895, νd 30.13 | L23 | 699301 glass class, supplier unresolved | OHARA S-TIM35 and HIKARI J-SF15 are exact current coordinates. |
| nd 1.51633, νd 64.14 | source rear plate, traced through rearPlates | 516641 source-coordinate class, supplier unresolved | OHARA S-BSL7 is exact; SUMITA K-BK7 is exact in nd and rounds νd to 64.1. |

These catalog comparisons are coordinate equivalences, not historical supplier identification. In particular, an exact modern catalog row is insufficient to back-date a specific vendor, suffix, or melt to this 2001–2002 design.

## Focus Mechanism

The focus status is `NO_INTERNAL_RECONSTRUCTION`. The patent states only that the third lens group moves toward the object when focusing from infinity to a near object; it does not provide a finite-focus spacing table, G3 travel, finite conjugate, or magnification state from which a unique internal focus law could be solved. [US 2003/0072085 A1, ¶¶0038, 0042.]

The data therefore preserves the three published zoom/infinity states and uses identical infinity/close entries for both variable zoom gaps. The `closeFocusM` value of 0.30 m is production metadata from the COOLPIX SQ manual, not a constraint used to solve patent focus travel. Nikon's manual also gives 0.04 m at the middle zoom position in macro mode, but neither production distance supplies the missing internal patent spacings.

The manufacturer-source contradiction is significant: Nikon's later COOLPIX SQ lens-history article describes group 1 as the focusing group, while the patent specifies G3. The analysis therefore records both statements without reconciling them into a synthetic production model.

## Aspherical Surfaces

Example 1 has two aspherical surfaces: source surface 8 on L21 and source surface 13 on L31. In the data file they are labeled 8A and 13A to satisfy the LensVisualizer asphere-label convention. [US 2003/0072085 A1, ¶¶0034–0036, 0041; Table 1, “Aspherical Surface Data.”]

The patent writes the conic term as

$$
X(y)=\frac{y^2}{r\left[1+\sqrt{1-\kappa y^2/r^2}\right]}+\sum C_i y^i.
$$

LensVisualizer uses the standard form with $\sqrt{1-(1+K)(h/R)^2}$, so the implemented conversion is $K_{LV}=\kappa_{patent}-1$. No scale change is applied, therefore the polynomial coefficients are unchanged.

| Surface | Model K | A4 | A6 | A8 | A10 | Modeled semi-diameter |
|---|---:|---:|---:|---:|---:|---:|
| 8A | -1.9643 | -4.44320×10⁻⁵ | -1.03700×10⁻⁵ | +1.33750×10⁻⁶ | -8.95360×10⁻⁸ | 3.0 mm |
| 13A | +15.8196 | -4.51730×10⁻⁴ | +2.27170×10⁻⁵ | -1.52580×10⁻⁶ | +3.30560×10⁻⁸ | 4.5 mm |

At those modeled and geometry-validated semi-diameters, the computed aspheric departure from the corresponding sphere is -0.029614 mm at 8A and -0.073071 mm at 13A. These departures apply only to the modeled clear radii; the patent itself does not publish lens semi-diameters. Surface 13A has positive model K and therefore a finite conic domain; its 4.5 mm modeled semi-diameter remains below the portable 0.98-domain limit of 6.141890 mm.

## Conditional Expressions

The patent uses three explicit conditions. Recalculation from the final data preserves them without altering source values.

For condition (1), $TL/\sqrt{f_t f_w}$ must lie between 2.5 and 4.5. Because TL is a source-physical quantity, it is evaluated from the patent's printed TL and endpoint focal lengths rather than from the source-physical model track. The resulting values are 3.869063 at wide, 3.605082 at the intermediate station, and 3.948756 at telephoto, all within the specified interval. The patent explains this condition as a compactness constraint on total lens length relative to the endpoint focal lengths. [US 2003/0072085 A1, ¶¶0010–0011, 0025–0026; Table 1.]

Condition (2), governing the first and last surface radii of G2, recalculates to -2.345992 and lies within the specified -3.0 to -1.8 range. The patent associates departures beyond this range with excessive positive or negative spherical aberration from the end elements of G2. [US 2003/0072085 A1, ¶¶0028–0030.]

Condition (3), governing the first and last surface radii of G3, recalculates to -0.307641 and lies within the specified -2.0 to -0.1 interval. The patent describes this condition in terms of maintaining satisfactory astigmatism and distortion correction. [US 2003/0072085 A1, ¶¶0031–0033.]

## Verification Summary

The final prescription was independently recomputed from the parsed `.data.ts`, not from a separate copy of the intended numbers. Scalar height/reduced-angle propagation and an independently coded ABCD matrix agree to floating-point roundoff at the three published zoom stations.

The computed EFLs reproduce the patent's 5.97, 10.00, and 16.88 mm values within the 0.005 mm source-place tolerance. The patent reports full endpoint fields of 64.2° and 23.3°. Exact field angles from the original draft’s paraxial rear-plate fold are not asserted for the final model, which traces the physical plate.

The modeled aperture schedule is not an independently measured physical diaphragm. The patent publishes f-number but no stop diameter, so the model calibrates the stop from the modeled EFL and the source f-numbers. The inferred physical stop semi-diameters are 2.398481 mm, 2.394140 mm, and 2.380588 mm at wide, intermediate, and telephoto. Agreement with the source f-numbers is therefore a calibration result, not independent evidence of the manufactured iris dimensions.

The modeled semi-diameters are also authoring choices because Example 1 publishes none. The chosen geometry passes portable checks for positive edge thickness, actual aspheric rim slope, the positive-conic domain, and shared-band cross-gap clearance at the three published stations plus representative zoomT = 0.25 and 0.75 samples. Exact 2D meridional tracing shows intentional mechanical vignetting at the extreme wide field while preserving the chief ray; production LensVisualizer render-trim diagnostics were not available in this authoring environment.

The surface-by-surface Petzval sum, using $\phi/(n n')$ for every refracting surface, is +0.009028599 mm⁻¹, corresponding to a Petzval radius of 110.759160 mm. This is a first-order curvature result for the modeled prescription and does not by itself predict the final sagittal/tangential image surfaces after higher-order aberration correction.

## Sources and References

1. Keiko Mizuguchi and Atsushi Shibayama, “ZOOM LENS SYSTEM,” US Patent Application Publication **US 2003/0072085 A1**, published April 17, 2003. Primary prescription source: Example 1, Fig. 1, ¶¶0034–0043, Table 1 and Table 1 continued.
2. Nikon, *COOLPIX SQ User Manual*, specifications section: https://cdn-10.nikon-cdn.com/pdf/manuals/coolpix/CPSQman.pdf
3. Nikon, *Our Product History: 2000s*, COOLPIX SQ entry: https://imaging.nikon.com/imaging/information/products_history/2000/
4. Nikon, *NIKKOR — The Thousand and One Nights No.22*: https://imaging.nikon.com/imaging/information/story/0022/index.html
5. OHARA optical-glass catalog: https://oharacorp.com/optical-glass/
6. HOYA optical-glass cross-reference/catalog: https://www.hoya-opticalworld.com/japanese/products/crossreference.html
7. SCHOTT Advanced Optics glass catalog/search: https://www.us.schott.com/shop/advanced-optics/en/search/
8. HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/
9. CDGM optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
10. SUMITA optical-glass data/downloads: https://www.sumita-opt.co.jp/en/download/


## Integration audit

The October 2, 2026 UTC audit reviewed the exact local patent figure, checked optical rims against edge and gap constraints, and reviewed compatible catalog dispersion. The sibling audit log records retained dimensions, changes and unresolved source limits. Catalog curves are qualified spectral proxies, with production supplier/melt identity unconfirmed.

## Image-format reference

The correlated production COOLPIX SQ uses a 1/2.7-inch-type CCD (Nikon manual, p.107). `imageFormat` records that production class using the nominal dimensions documented in LENS_MOUNT_FORMAT_OPTIONS.md. Patent Y = 3.52 mm remains separate from the sensor reference; this does not certify full-field coverage.
