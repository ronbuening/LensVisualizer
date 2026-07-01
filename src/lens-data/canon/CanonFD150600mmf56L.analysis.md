# Canon New FD 150-600mm f/5.6L

## Patent Reference and Design Identification

**Patent:** US 4,110,006  
**Application Number:** US 773,667  
**Filed:** March 2, 1977  
**Granted:** August 29, 1978  
**Priority:** JP 51/26580, March 11, 1976  
**Inventor:** Keiji Ikemori  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** Telephoto Type Zoom Lens  
**Embodiment analyzed:** Example 4

The prescription used here is Example 4 of US 4,110,006. The embodiment is a 150-600 mm f/5.6 telephoto zoom with an internally moving positive focusing group inside the convergent front group. It is identified as the closest patent disclosure for the Canon New FD 150-600mm f/5.6L by the following convergent evidence.

1. The production lens is specified by Canon as 19 elements in 15 groups; Example 4 has 19 glass elements in 15 air-separated groups.
2. The patent examples are explicitly normalized to $f = 150$-$600$ and F-number 1:5.6, matching the marketed focal range and aperture.
3. Example 4 places CaF2/fluorite in both elements of the movable focusing sub-group IV. Canon's product description describes effective use of low-dispersion, low-index UD glass to reduce the optical system size while compensating aberrations; Example 4 is the patent embodiment whose movable focus pair G5/G6 is specified as CaF2/fluorspar.
4. The patent's central mechanism is internal focusing by shifting only the positive sub-group IV, while sub-groups II, III, and V remain fixed. Canon describes the production lens as the first SLR zoom lens to use inner focusing.
5. The computed first-surface-to-image optical track is about 493.53 mm at the 600 mm end. Dividing this by the nominal 600 mm focal length gives a telephoto ratio of 0.823, matching the patent's stated 0.82.
6. The official marketed date, August 1982, is consistent with a March 1976 Japanese priority and August 1978 US grant.

No uniform scale factor was applied. The data file transcribes the patent prescription at patent scale and uses the patent's 150/300/600 mm zoom positions directly.

## Optical Architecture

The design is an all-spherical, mechanically compensated telephoto zoom. The optical system has a convergent front group I, a negative variator VI, a positive compensator VII, an aperture stop in the air space between VII and VIII, and a fixed rear imaging group VIII.

The convergent front group I is itself divided into four sub-groups. Sub-group II is a two-element positive collector using FK-class low-dispersion crown glass. Sub-group III is a two-element negative Galilean diverger using dense lanthanum-flint-class glass. Sub-group IV is the internally moving positive focusing pair; in Example 4 both elements are fluorite. Sub-group V is a weak fixed negative meniscus used to balance the front group.

The zooming portion uses three patent variable spaces: $l_1$ between group I and VI, $l_2$ between group VI and VII, and $l_3$ between group VII and VIII. The patent values are:

| Focal position | $l_1$ | $l_2$ | $l_3$ | Sum |
|---:|---:|---:|---:|---:|
| 150 mm | 1.626 | 42.023 | 115.327 | 158.976 |
| 300 mm | 99.837 | 29.719 | 29.419 | 158.975 |
| 600 mm | 149.645 | 5.242 | 4.089 | 158.976 |

The constant sum verifies the fixed-length mechanical-compensation layout. The data file inserts the aperture stop 0.5 mm before R25, inside the patent $l_3$ space; therefore the stored variable value on surface 24 is $l_3 - 0.5$ while the total air space remains the patent value.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.48749, νd = 70.1. Glass: FK fluorosilicate crown class. f = +455.58 mm.

L1 is the first positive collector in sub-group II. Its large clear aperture and weak biconvex form start the beam compression required for a 600 mm f/5.6 telephoto zoom without forcing the downstream focusing group to have the same diameter as the front collector.

### L2 — Positive Meniscus, Convex to Object

nd = 1.48749, νd = 70.1. Glass: FK fluorosilicate crown class. f = +463.65 mm.

L2 completes the positive collector pair. Together L1 and L2 have a paraxial group focal length of +229.97 mm. Their shared low-dispersion FK-class glass keeps the high-aperture front positive power from dominating the secondary spectrum at the telephoto end.

### L3 — Negative Meniscus, Convex to Object

nd = 1.77250, νd = 49.7. Glass: LaSF dense lanthanum-flint patent class. f = -356.75 mm.

L3 begins the negative Galilean diverger sub-group III. The patent's glass-class table assigns Example 4's G3 to LaSF, so this element should not be described as LaF even though its Abbe number is relatively high for a flint-family glass.

### L4 — Negative Meniscus, Convex to Object

nd = 1.80610, νd = 40.9. Glass: LaSF dense lanthanum flint class, S-LAH53-class equivalent. f = -368.44 mm.

L4 completes the Galilean diverger. Sub-group III has a computed focal length of -179.24 mm, giving $|f_{III}|/f_{II} = 0.779$. This ratio is central to the patent: it reduces the diameter of the focusing group without making the front collector spacing impractically long.

### L5 — Biconvex Positive, Fluorite

nd = 1.43387, νd = 95.1. Glass: CaF2 fluorite crystal / fluorspar. f = +386.76 mm.

L5 is the front element of the movable focusing group IV. Because group IV is the only front-group sub-unit translated for focusing, its chromatic behavior changes with object distance. The use of fluorite suppresses focus-dependent longitudinal color at the source rather than relying only on downstream compensation.

### L6 — Positive Meniscus, Fluorite

nd = 1.43387, νd = 95.1. Glass: CaF2 fluorite crystal / fluorspar. f = +482.71 mm.

L6 completes the focusing pair. L5 and L6 together have a computed sub-group focal length of +214.95 mm. At close focus the pair moves objectward, reducing the front spacing S1 and increasing the rear spacing S2 by the same amount.

### L7 — Weak Negative Meniscus

nd = 1.51633, νd = 64.1. Glass: BK7 / S-BSL7 borosilicate crown class. f = -1237.32 mm.

L7 is the fixed divergent rear sub-group V of the convergent front group. Its refractive power is weak but analytically important: it helps balance the aberrations of the large positive and negative front sub-groups while keeping the focusing group's travel within a practical range.

### L8 — Biconcave Negative

nd = 1.64250, νd = 58.4. Glass: dense crown / SK class. f = -86.76 mm.

L8 is the leading element of the negative variator group VI. It supplies strong negative zoom power and is followed by a cemented negative-positive doublet that corrects the variator's chromatic contribution.

### L9 + L10 — Cemented Variator Doublet

L9: nd = 1.64250, νd = 58.4. Glass: dense crown / SK class. f = -49.91 mm.  
L10: nd = 1.80518, νd = 25.4. Glass: SF6 / S-TIH6 dense flint class. f = +82.06 mm.  
Cemented net: f = -128.96 mm.

The cemented interface at R18 is the main achromatizing surface inside the variator. The doublet remains net negative, but the dense-flint positive component prevents the variator from behaving as a simple uncorrected negative group during zoom travel.

### L11 — Biconvex Positive

nd = 1.60311, νd = 60.7. Glass: K-SK14 / dense crown class. f = +110.08 mm.

L11 is the leading positive element of compensator group VII. It counteracts the image-plane shift introduced by the variator and contributes the dominant positive power of the compensator.

### L12 + L13 — Cemented Compensator Pair

L12: nd = 1.48749, νd = 70.1. Glass: FK fluorosilicate crown class. f = +98.81 mm.  
L13: nd = 1.83400, νd = 37.2. Glass: dense lanthanum flint class. f = -93.72 mm.  
Cemented net: f = -2510.53 mm.

This cemented pair is nearly afocal as a standalone group. Its role is therefore mostly chromatic and aberrational rather than a major contribution to the compensator's first-order power. The flat rear surface R24 closes the group immediately before the long $l_3$ stop space at the 150 mm position.

### L14 — Biconvex Positive

nd = 1.48749, νd = 70.1. Glass: FK fluorosilicate crown class. f = +212.80 mm.

L14 is the first element of the fixed rear imaging group VIII. It lies just after the aperture stop and begins the final relay from the zooming groups to the film plane.

### L15 + L16 — Cemented Imaging-Group Achromat

L15: nd = 1.49700, νd = 81.3. Glass: UD fluorophosphate crown class, S-FPL51/FCD1-class equivalent. f = +87.87 mm.  
L16: nd = 1.59551, νd = 39.2. Glass: light flint / F8 class. f = -103.12 mm.  
Cemented net: f = +451.54 mm.

This doublet is the strongest explicit low-dispersion/flint pairing in the rear imaging group. The Abbe-number contrast is large, but the patent does not publish partial-dispersion data; consequently the design should be described as a reduced-secondary-spectrum telephoto zoom, not as a verified apochromat.

### L17 — Biconcave Negative

nd = 1.53375, νd = 55.5. Glass: unmatched vintage crown code. f = -123.09 mm.

L17 is a standalone negative field-correction element after the long 43.2 mm air gap. No current public glass catalog match was found close enough to justify a specific vendor label, so the data file records it as an unmatched crown-family glass.

### L18 + L19 — Final Cemented Doublet

L18: nd = 1.79952, νd = 42.2. Glass: lanthanum flint class. f = -55.81 mm.  
L19: nd = 1.62004, νd = 36.3. Glass: F2 flint class. f = +45.08 mm.  
Cemented net: f = +224.21 mm.

The final doublet supplies the last significant refractive power before the image plane. The strongly curved cemented interface at R33 has high local power and participates in the correction of residual spherical aberration, astigmatism, and lateral color.

## Glass Identification and Selection

The patent does not name modern vendor catalog glasses. The data file therefore uses patent glass classes, exact CaF2 identification where the patent class table specifies fluorspar, and vendor-equivalent classes only where the $n_d$ / $\nu_d$ pair is sufficiently characteristic. This avoids assigning a modern catalog name where the prescription only supports a generic glass code.

| Code | nd | νd | Elements | Data-file glass identification | Notes |
|---|---:|---:|---|---|---|
| 487/701 | 1.48749 | 70.1 | L1, L2, L12, L14 | FK fluorosilicate crown class | N-FK5 / S-FSL5-class pair; low-dispersion positive power |
| 773/497 | 1.77250 | 49.7 | L3 | LaSF patent class | Patent table assigns G3 to LaSF in Example 4 |
| 806/409 | 1.80610 | 40.9 | L4 | LaSF / S-LAH53-class | Dense lanthanum-flint diverger |
| 434/951 | 1.43387 | 95.1 | L5, L6 | CaF2 fluorite | Movable focusing group IV |
| 516/641 | 1.51633 | 64.1 | L7 | BK7 / S-BSL7 class | Weak rear sub-group V |
| 643/584 | 1.64250 | 58.4 | L8, L9 | Dense crown / SK class | Variator negative elements |
| 805/254 | 1.80518 | 25.4 | L10 | SF6 / S-TIH6 dense flint class | Variator achromatizing partner |
| 603/607 | 1.60311 | 60.7 | L11 | K-SK14 / dense crown class | Compensator positive element |
| 834/372 | 1.83400 | 37.2 | L13 | Dense lanthanum flint class | Compensator cemented partner |
| 497/813 | 1.49700 | 81.3 | L15 | UD fluorophosphate crown class | Rear low-dispersion achromat component |
| 596/392 | 1.59551 | 39.2 | L16 | Light flint / F8 class | Rear achromat partner |
| 534/555 | 1.53375 | 55.5 | L17 | Unmatched crown glass | No specific catalog label asserted |
| 800/422 | 1.79952 | 42.2 | L18 | Lanthanum flint class | Final doublet negative component |
| 620/363 | 1.62004 | 36.3 | L19 | F2 flint class | Final doublet positive component |

The L3/L4 pair should be treated according to the patent glass-class table: Example 4 classifies both G3 and G4 as LaSF. Several other glasses are retained as class-level or six-digit-code identifications rather than exact modern vendor assignments because the patent does not name the glass maker.

## Focus Mechanism

Focusing is by axial translation of sub-group IV, the L5/L6 fluorite pair. Sub-groups II, III, and V remain fixed, and the downstream variator, compensator, and imaging groups are not focus groups.

At infinity focus, Example 4 gives S1 = 40.03 mm before group IV and S2 = 3.00 mm after group IV. The patent publishes close-focus pull data for Example 2, including a 14.4 mm pull for 6 m and a 34.24 mm pull for 3 m. The same focus law was applied to Example 4 because Example 4 does not publish separate finite-object S1/S2 values.

| State | Group-IV shift | S1 | S2 | Verification |
|---|---:|---:|---:|---|
| Infinity | 0.00 mm | 40.03 mm | 3.00 mm | Patent Example 4 |
| 6 m model | 14.40 mm objectward | 25.63 mm | 17.40 mm | Patent Example 2 pull applied to Example 4 |
| 3 m model | 34.24 mm objectward | 5.79 mm | 37.24 mm | Patent Example 2 pull applied to Example 4 |

With the image plane held at the computed infinity BFD, a finite-conjugate paraxial trace of the 34.24 mm focus shift gives an object-to-image distance of about 3.011 m. The computed close-focus magnification is 0.068x at 150 mm, 0.134x at 300 mm, and 0.267x at 600 mm. This agrees with the patent's statement that the design realizes close-up photographing capability at 3 m and with the production magnification specification of 0.26x.

Canon's current Camera Museum table lists the closest focusing distance as 12 m while also listing maximum magnification as 0.26x. Those two numbers are not mutually consistent for a 600 mm lens. The data file therefore models the patent-derived 3 m close-focus state and records the official 0.26x value only as corroboration of the finite-conjugate trace.

## Chromatic Correction Strategy

The chromatic strategy is distributed rather than localized in one rear achromat. The front collector uses FK-class low-dispersion crowns; the movable focusing group uses two fluorite elements; the rear imaging group includes a fluorophosphate/UD-class positive element paired with flint glass.

The fluorite focusing pair is the distinctive Example 4 feature. Focusing changes the paraxial relationship of sub-groups II, III, IV, and V, so chromatic variation in group IV would directly translate into focus-dependent color error. Using two CaF2 elements in group IV suppresses that variation.

The patent and prescription do not provide C-, F-, or g-line indices or partial-dispersion deviations. The analysis therefore avoids an apochromatic claim. The supported claim is reduced secondary spectrum relative to an ordinary crown/flint telephoto zoom of comparable aperture.

## Conditional Expressions

The patent gives three first-order constraints for the convergent front group. Recalculation from the Example 4 prescription gives the following values.

| Condition | Computed value | Result |
|---|---:|---|
| $0.65 < |f_{III}| / f_{II} < 0.9$ | 0.779 | Satisfied |
| $|f_{II,III}| > 10 f_I$ | $f_{II,III}/f_I = -18.04$ | Satisfied |
| $|f_V| > f_{IV}$; preferred $5 < |f_V|/f_{IV} < 7$ | 5.756 | Satisfied |

The underlying group focal lengths used for this check were: $f_{II} = +229.97$ mm, $f_{III} = -179.24$ mm, $f_{IV} = +214.95$ mm, $f_V = -1237.32$ mm, $f_I = +331.25$ mm, and $f_{II,III} = -5976.77$ mm.

## Verification Summary

All load-bearing first-order quantities were recalculated from the transcribed prescription with a paraxial $y$-$n u$ trace. The trace uses the patent sign convention as transcribed: positive radius means the center of curvature lies to the image side.

| Quantity | 150 mm | 300 mm | 600 mm |
|---|---:|---:|---:|
| Computed EFL | 151.759 mm | 300.193 mm | 595.465 mm |
| Patent nominal focal position | 150 mm | 300 mm | 600 mm |
| BFD from R34 | 120.050 mm | 120.052 mm | 120.051 mm |
| First surface to last surface | 373.480 mm | 373.479 mm | 373.480 mm |
| First surface to image | 493.530 mm | 493.531 mm | 493.531 mm |
| Half-field for 43.27 mm diagonal | 8.113 deg | 4.122 deg | 2.081 deg |
| Patent aberration-figure field | 8.2 deg | 4.1 deg | 2.1 deg |

The surface-by-surface Petzval sum, computed as $\sum \Phi/(n n')$, is $1.588 \times 10^{-4}\ \mathrm{mm}^{-1}$, corresponding to a Petzval radius of about 6297 mm. This is a very weak residual Petzval curvature for a system of this focal length and is consistent with the strong cancellation among the large positive and negative sub-group powers.

The aperture stop semi-diameter used in the data file is 18.38928 mm. It was placed 0.5 mm before R25 inside the patent $l_3$ air space and chosen so that the paraxial entrance pupil gives f/5.6 at all three zoom positions.

The patent does not publish clear semi-diameters. The data file uses conservative inferred semi-diameters constrained by the official 123 mm maximum barrel diameter, the patent cross-section, minimum edge thickness, element front/rear diameter ratios, $sd/|R| < 0.90$, and cross-gap sag clearance. These apertures are renderer-safe layout apertures, not a guarantee of zero vignetting at the full 35 mm diagonal.

## Design Heritage and Context

US 4,110,006 addresses a practical problem specific to long telephoto zooms: if an entire large front group is moved for focusing, the focusing barrel becomes heavy and mechanically sensitive. The patent solves this by making the front collector and diverger a near-afocal Galilean reducer, then placing a smaller positive focusing group behind it.

The production Canon New FD 150-600mm f/5.6L follows the same principle. It uses a 4x zoom range, constant f/5.6 aperture, and internal focusing in a fixed-length barrel, all of which were unusual for a 600 mm-class 35 mm SLR zoom of the early 1980s.

## Sources

- US 4,110,006, “Telephoto Type Zoom Lens,” Keiji Ikemori, Canon Kabushiki Kaisha. Filed March 2, 1977; granted August 29, 1978. Example 4 prescription and glass-class table.
- Canon Camera Museum, “New FD150-600mm f/5.6L.” Official product specifications and Canon description of the lens as the first SLR zoom lens to use inner focusing. https://global.canon/en/c-museum/product/nfd258.html
- Canon FD 150-600mm f/5.6L contemporary and archival specification references, including the 3 m / 0.26x focus-distance specification preserved in Canon FD resource scans. https://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/fdzooms/150600.htm
- Schott optical glass data for N-FK5 and SF6-family glass codes.
- Ohara optical glass data for S-FPL51, S-LAH53, S-BSL7, S-TIH6, and related catalog-equivalent classes.
- Sumita optical glass data for K-SK14-class glass.
