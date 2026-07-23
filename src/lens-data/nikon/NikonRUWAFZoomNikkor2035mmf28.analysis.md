# NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8

## Patent Reference and Design Identification

**Patent:** US 5,490,012  
**Filed:** December 28, 1992; priority January 8, 1992 (JP 4-001358)  
**Granted:** February 6, 1996  
**Inventor:** Kouichi Ohshita\
**Assignee:** Nikon Corporation  
**Title:** Underwater Wide Angle Zoom Lens  
**Embodiment analyzed:** First Embodiment, Table 1

US 5,490,012 describes an underwater wide-angle zoom for a 35 mm underwater single-lens reflex camera. The relevant worked example is the First Embodiment, because it gives a 20.6007-34.0012 mm focal-length range, F/2.88 design aperture, 79.8°-51.4° stated underwater angle of view, and a 10-element / 10-group all-spherical layout including the rear dustproof plate. Those features align closely with the production R-UW AF Zoom-Nikkor 20-35mm f/2.8 for the Nikonos RS system.

The production identification should be treated as a high-confidence patent-to-product match, not as a manufacturer-published patent mapping. The strongest convergent evidence is the focal range, constant f/2.8 class aperture, 10/10 construction, water-contact front element, and timing relative to the 1992 Nikonos RS system. Nikon's own product-history page identifies the Nikonos RS as the world's first underwater autofocus SLR camera, gives the 100 m pressure-resistance specification, and lists the dedicated R-UW mount; the patent supplies the optical prescription and underwater zoom architecture.

### Source-quality note

The USPTO scan is degraded in Table 1. Several cells have dropped leading digits or decimal points. Direct use of the scan-visible strings gives impossible or badly mismatched paraxial results. The working prescription therefore uses the following corrected readings, verified primarily by reproduction of the three Table 1 system focal lengths and back-focus values, with Table 4 conditional expressions used as secondary checks:

- r1 = 111.600, not 11.600.
- r8 = 110.316, r11 = 39.429, r12 = 300.582, r14 = 37.948, and d16 = 0.40.
- The scan-visible d6/d7 ordering is rejected. Condition (8) requires d4/d6 = 15.00/5.60 = 2.679, so d6 = 5.60 and L4 thickness d7 = 7.00. Using the scan-visible d6 = 7.00 and d7 = 5.60 reduces the computed telephoto EFL to 32.53 mm instead of the patent's 34.00 mm.

A second plausible dropped-digit pattern, r8 = 107.316, r11 = 29.429, and r12 = 70.582, was tested because it reproduces several Table 4 group-power values more tightly. It is rejected for the data file because the full system trace becomes 21.08 / 27.30 / 35.33 mm, with BFD greater than 39 mm at every zoom position, which is materially farther from Table 1 than the adopted reconstruction.

## Optical Architecture

The design is a three-unit negative-negative-positive underwater zoom. In front-to-rear order it comprises:

G1: a fixed water-contacting meniscus window with negative power as a unit under water. It is thick enough to act as a pressure window and optically weak enough not to behave like an ordinary land-camera retrofocus front group.

G2: a movable negative compensator with three air-spaced elements. It moves toward the image side when zooming from wide to telephoto and is also the group identified by the patent for close focusing.

G3: a movable positive variator with five air-spaced elements and the aperture stop. It moves toward the object side as focal length increases. G3 has a positive-positive-negative-positive-positive power sequence: two positive elements before the negative L7 and two positive elements behind it. This gives a triplet-like power distribution expanded for fast wide-angle zoom correction.

A plane-parallel rear plate P follows G3. The patent describes it as a dustproof and drip-proof cover for reliability in a self-contained underwater lens. The data file includes this plate because it is part of the patented optical prescription. It does not include any separate camera sensor cover glass.

The `.data.ts` file adds one artificial zero-power WTR plane before the patented surface 1. This is only a modeling device to set the object-side medium to water, n = 1.33306, in a renderer that otherwise starts in air. It is not counted as a patent surface, lens element, or group.

## Element-by-Element Analysis

### L1 - Positive Meniscus / Water-contact Window (G1)

nd = 1.51680, νd = 64.1. Glass: N-BK7 (Schott) / BK7 class. f = +366.5 mm in air; f = -2979 mm as the G1 unit with water on the object side.

L1 is a 20.00 mm thick meniscus whose object-side surface is exposed directly to water. The front surface has much less refractive power in water than it would have in air, because the water-glass index step is small. The rear surface works into air inside the sealed lens barrel. In the complete underwater unit the element is weakly negative, matching the patent's stated role for G1 as a fixed negative unit that also functions as the water-resisting window.

The patent's condition (5), d1/fW = 0.970, is mechanically important. A thinner first element would weaken pressure resistance; a much thicker one would lengthen the already large underwater zoom assembly.

### L2 - Negative Meniscus (G2)

nd = 1.79668, νd = 45.4. Glass: Unmatched 797/454 high-index flint; Hoya TAF-class possible. f = -60.7 mm.

L2 is the first element of the compensator. Its object-side convex negative-meniscus form follows the patent's requirement that the most object-side negative lens in G2 be a meniscus lens, reducing wide-end distortion and controlling coma. The high index keeps the element thin while giving substantial negative power.

The glass cannot be assigned confidently to a current public catalog name from nd/νd alone. It should be treated as a 797/454 high-index flint family glass unless a period Nikon/OHARA/HOYA melt table is found.

### L3 - Nearly Plano-Concave Negative (G2)

nd = 1.77279, νd = 49.4. Glass: M-TAF1 class (Hoya, 773/494). f = -51.2 mm.

L3 adds the second main negative contribution in G2. The front surface is extremely weak, R = 2180.836 mm, so the element behaves almost like a plano-concave negative lens. Its high index and moderate dispersion support the G2 compensator without requiring a thick, strongly curved element.

This glass is best described as M-TAF1 class rather than asserted as a confirmed catalog glass, because the patent lists only nd and νd.

### L4 - Positive Meniscus (G2)

nd = 1.71736, νd = 29.5. Glass: N-SF1 / S-TIH1 class dense flint. f = +85.8 mm.

L4 is the positive rear element of G2. It partially offsets the two preceding negative lenses and provides chromatic balancing inside the negative compensator group. The corrected prescription uses d6 = 5.60 before L4 and d7 = 7.00 through L4; this is the only ordering that satisfies condition (8) and reproduces the zoom focal lengths.

The element's high dispersion is appropriate for a positive corrector in a group otherwise dominated by high-index negative lenses.

### L5 - Biconvex Positive (G3a)

nd = 1.66755, νd = 42.0. Glass: J-BASF6 (Hikari) / BAH26 class (668419). f = +44.1 mm.

L5 is the first element of the positive variator G3. It begins the strong convergence of the beam just before the aperture stop S. Its shape ratio, r9/r10 = -0.714, is one of the patent's explicit conditional controls for spherical aberration in the fast positive group.

The glass is a barium high-index type in the 668/419 class. The local catalog includes coefficient-backed Hikari J-BASF6 for this coordinate, making it the best runtime Sellmeier-backed label while preserving the BAH26 legacy class note. It is not an ED or anomalous-dispersion glass; chromatic correction in this design is achieved by ordinary crown/flint balancing.

### L6 - Positive Meniscus (G3a)

nd = 1.62041, νd = 60.2. Glass: N-SK16 (Schott) / S-BSM16 class. f = +72.6 mm.

L6 sits immediately behind the aperture stop and completes the object-side positive subgroup G3a. Its lower dispersion complements L5's higher-dispersion barium glass. Together, L5 and L6 form a positive subgroup with f3a = +28.37 mm in the reconstructed prescription.

The rear surface is weak in the corrected reading, R = 300.582 mm. Treating the scan-visible value 0.582 literally is impossible.

### L7 - Biconcave Negative (G3)

nd = 1.80518, νd = 25.4. Glass: N-SF6 (Schott) / S-TIH6 class dense flint. f = -21.8 mm.

L7 is the strongest element in the lens. It is the central negative component required by the patent to bring the Petzval sum into a usable range and to correct spherical aberration in G3. Its shape condition, r13/r14 = -0.928, independently verifies the corrected r14 = 37.948 mm.

This element is a dense flint with very high index and low Abbe number. It is analytically a flint, not a crown, regardless of any lanthanum- or titanium-family naming convention used in equivalent catalogs.

### L8 - Positive Meniscus, convex to image (G3b)

nd = 1.69680, νd = 55.6. Glass: S-LAL14 (Ohara) / N-LAK14 class. f = +91.0 mm.

L8 begins the image-side positive subgroup G3b. Its meniscus shape, convex toward the image side, allows positive power while limiting the curvature and coma burden near the strong negative L7. The tight d14 = 1.70 mm air gap between L7 and L8 is the limiting clear-aperture region for the renderer-safe semi-diameter estimates.

The Ohara S-LAL14 catalog entry matches the patent's nd and νd closely and is the most defensible modern catalog assignment for this element.

### L9 - Biconvex / Near Plano-Convex Positive (G3b)

nd = 1.74810, νd = 52.3. Glass: Unmatched 748/523 lanthanum-crown class. f = +40.5 mm.

L9 is the final powered element before the rear plate and supplies much of the positive power of G3b. The front radius is very weak, R = 327.070 mm, while the rear radius is strongly convex toward the image side, R = -33.237 mm. The element is geometrically biconvex but functionally close to a positive meniscus / plano-convex rear-power element.

No current public glass catalog match has been verified for 1.74810 / 52.3. It is therefore marked as unmatched rather than forced into a near but incorrect catalog designation.

### P - Plane-Parallel Rear Plate

nd = 1.51680, νd = 64.1. Glass: N-BK7 (Schott) / BK7 class. f = infinity.

The final plate has plane surfaces and no optical power. It shifts the image plane by the usual plane-plate optical path amount and contributes a small chromatic path term. The patent identifies it as a dustproof and drip-proof cover that supports reliability in a one-piece underwater lens.

## Glass Identification and Selection

The design uses conventional high-index crown and flint glasses; it does not use ED, fluorite, or aspherical surfaces. The corrected glass table is deliberately more conservative than the prior draft: exact catalog names are used only when nd/νd matches are supported by public catalog data.

| Element | nd | νd | Working glass identification | Confidence | Optical role |
|---|---:|---:|---|---|---|
| L1, P | 1.51680 | 64.1 | N-BK7 (Schott), BK7 class | Exact to patent nd/νd | Water window and rear plate |
| L2 | 1.79668 | 45.4 | Unmatched 797/454 high-index flint; Hoya TAF-class possible | Uncertain | Negative compensator power |
| L3 | 1.77279 | 49.4 | M-TAF1 class (Hoya, 773/494) | Class match | Negative compensator power |
| L4 | 1.71736 | 29.5 | N-SF1 / S-TIH1 class | Exact/class | Positive dense-flint corrector in G2 |
| L5 | 1.66755 | 42.0 | J-BASF6 / BAH26 class (668419) | Exact/class | Front positive element of G3a |
| L6 | 1.62041 | 60.2 | N-SK16 / S-BSM16 class | Exact/class | Low-dispersion positive partner |
| L7 | 1.80518 | 25.4 | N-SF6 / S-TIH6 class | Exact/class | Strong negative Petzval corrector |
| L8 | 1.69680 | 55.6 | S-LAL14 / N-LAK14 class | Exact/class | Image-side positive subgroup |
| L9 | 1.74810 | 52.3 | Unmatched 748/523 lanthanum-crown class | Uncertain | Final positive power element |

The most important correction is L1/P: Ohara S-BSL7 is not an exact match to the patent value because modern S-BSL7 is nd = 1.51633, νd = 64.14. Schott N-BK7, nd = 1.51680, νd = 64.17, matches the patent's 1.51680/64.1 pair.

## Focus Mechanism

The patent states that focusing is preferably performed by moving the second lens unit G2 toward the object side from infinity to a short-distance object. G1 remains fixed as the water window, and G3 remains the zooming positive variator. The patent also allows other methods, but identifies G2 focusing as the preferable high-performance method.

Only infinity-focus zoom spacing data are published for the First Embodiment. No close-focus spacing table is given. The companion data file therefore models the three verified infinity zoom positions and repeats the infinity spacing as the close-focus value for each variable gap. This avoids inventing a floating-focus law that the patent does not publish.

| Gap | Wide | Mid | Tele | Function |
|---|---:|---:|---:|---|
| d2 | 7.9672 | 18.9022 | 24.4123 | G1-G2 zoom spacing; also the focus gap in principle |
| d8 | 34.1678 | 17.6102 | 4.9839 | G2-G3 zoom spacing |
| d18 | 1.1021 | 6.7247 | 13.8409 | G3-to-plate spacing |
| d20 | 38.5630 | 38.5630 | 38.5630 | Back focus after rear plate |

The zoom gap sum d2 + d8 + d18 + d20 is constant at 81.8001 mm, within rounding, across all three positions.

## Conditional Expressions

The First Embodiment satisfies the patent's conditional system when the corrected Table 1 readings are used. Values below use fW = 20.6007 mm.

| # | Expression | Patent value, First Embodiment | Recomputed value | Note |
|---:|---|---:|---:|---|
| 1 | fW / r1a | 0.081 | 0.081 | r1a = rear surface of G1, R2 = 255.080 |
| 2 | f2 / fW | -1.942 | -1.965 | Residual from recovered r8 / scan degradation |
| 3 | f3 / fW | 1.828 | 1.812 | Residual from recovered G3 radii |
| 4 | Σd3 / fW | 1.607 | 1.607 | Uses d9-d17 = 33.10 mm |
| 5 | d1 / fW | 0.970 | 0.971 | First-element thickness |
| 6 | n1 | 1.517 | 1.5168 | BK7-class front window |
| 7 | r2a / r2b | 2.296 | 2.296 | 60.230 / 26.230 |
| 8 | d2c / d2d | 2.679 | 2.679 | Requires d6 = 5.60 |
| 9 | f3a / f3b | 1.012 | 1.005 | Residual from recovered r11/r12 |
| 10 | r3c / r3d | -0.714 | -0.714 | 49.471 / -69.274 |
| 11 | r3e / r3f | -0.928 | -0.928 | Confirms r14 = 37.948 |
| 12 | r3h / r3g | -0.102 | -0.102 | -33.237 / 327.070 |
| 13 | n3a | 1.644 | 1.644 | Average of L5 and L6 |
| 13 | n3b | 1.722 | 1.722 | Average of L8 and L9 |
| 14 | x2 / x3 | 1.291 | 1.291 | From wide-to-tele group travel |
| 15 | f1 / fW | -145.63 | -144.63 | G1 with water as object medium |

The residuals in conditions (2), (3), (9), and (15) are not independent proof of a different design; they are the expected consequence of reconstructing missing leading digits from a degraded scan. A group-condition-optimized reconstruction was also tested, but it gives materially worse full-system EFL and BFD agreement. The adopted values therefore prioritize the Table 1 system focal lengths and back focus while preserving all cleanly readable ratio conditions.

## Verification Summary

Independent paraxial verification was performed in y-ν coordinates with water on the object side of surface 1. The trace used the surface-by-surface prescription rather than thin-lens approximations.

| Quantity | Wide | Mid | Tele |
|---|---:|---:|---:|
| Patent focal length | 20.6007 | 26.5009 | 34.0012 |
| Recomputed EFL | 20.6734 | 26.6025 | 34.1445 |
| EFL residual | +0.0727 | +0.1016 | +0.1433 |
| Patent back focus d20 | 38.5630 | 38.5630 | 38.5630 |
| Recomputed BFD | 38.7828 | 38.7005 | 38.6012 |

Additional verified quantities:

- G1 focal length with water object side: -2979.45 mm.
- G2 focal length in air: -40.47 mm.
- G3 focal length in air: +37.33 mm.
- G3a focal length: +28.37 mm.
- G3b focal length: +28.24 mm.
- Petzval sum: +0.003753 mm^-1, corresponding to a Petzval radius of about +266 mm, using the surface formula φ/(n n') and water before surface 1.

The same trace rejects three tempting scan readings. With r1 = 11.600, the lens no longer behaves as a 20-35 mm underwater zoom. With d6 = 7.00 and d7 = 5.60, the telephoto EFL falls to 32.53 mm and the BFD to 36.21 mm. With the group-condition-optimized r8/r11/r12 pattern, the EFLs become 21.08 / 27.30 / 35.33 mm and BFD exceeds 39.0 mm at all three zoom positions. All three alternatives are less consistent with Table 1 than the adopted prescription.

## Design Heritage and Context

This is not an ordinary land-camera 20-35 mm zoom placed behind a housing port. The front surface is designed to contact water directly, and the first unit's power is defined in the water-glass-air sequence. That choice avoids the port-induced field curvature and focus shift described in the patent's background section.

The result is an unusual underwater zoom topology. G1 is fixed and serves as both the water window and a weak negative optical unit. G2 becomes the compensator, and G3 supplies the main positive variator power. The solution is mechanically conservative for an underwater SLR: the pressure-critical water-contact element is fixed, while the moving groups remain sealed behind it.

## Sources

1. US Patent 5,490,012, Kouichi Ohshita, Nikon Corporation, "Underwater Wide Angle Zoom Lens," granted February 6, 1996. Primary source for the prescription, zoom spacings, conditional expressions, and focusing description.
2. Nikon Corporation, "Our Product History: 1990's," official Nikon Imaging product-history page. Source for Nikonos RS launch context and underwater AF SLR, 100 m pressure-resistance, and R-UW mount context.
3. SCHOTT optical glass datasheets for N-BK7, N-SF1, N-SK16, and N-SF6. Source for exact nd/νd catalog checks.
4. OHARA optical glass pages / catalog data for S-LAL14 and legacy cross-reference data. Source for the S-LAL14 and BAH26-class glass checks.
5. Prior draft analysis supplied with this review, used as a comparison target only; corrected values in this document supersede it.
