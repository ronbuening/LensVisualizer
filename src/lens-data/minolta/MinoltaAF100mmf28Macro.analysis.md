# Minolta AF 100mm f/2.8 Macro — US 4,764,000 Example 8 Analysis

## Patent Reference and Design Identification

**Patent:** US 4,764,000
**Inventor:** Hisashi Tokumaru
**Assignee:** Minolta Camera Kabushiki Kaisha
**Priority:** JP May 20, 1985 and JP September 27, 1985
**Filed:** May 19, 1986
**Granted:** August 16, 1988
**Title:** Telephoto Lens System with Three Relatively Shiftable Lens Groups
**Embodiment analyzed:** Embodiment 8 / Example 8

United States Patent **US 4,764,000**, **“Telephoto Lens System with Three Relatively Shiftable Lens Groups,”** was filed by Hisashi Tokumaru for Minolta Camera Kabushiki Kaisha on 19 May 1986. It claims Japanese priorities of 20 May 1985 and 27 September 1985 and was granted on 16 August 1988.[^patent]

This file transcribes and interprets **Embodiment 8 / Example 8**, which is also repeated numerically in claim 9. The patent table gives a normalized **f = 100 mm**, **F.No. = 2.83** 35 mm SLR macro design with three tabulated focus states: infinity, β = −0.5, and β = −1.0.[^patent]

The connection to the Minolta AF 100mm f/2.8 Macro / Sony SAL100M28 optical family is convergent rather than explicit. The patent does not name a commercial lens. The identification rests on the following evidence:

1. **Optical construction.** Example 8 is an 8-element, 8-air-spaced-group prescription. Sony’s first-party SAL100M28 specifications list **8/8** groups/elements.[^sony-specs]
2. **Nominal class.** The patent design traces to essentially 100 mm at f/2.83, matching the marketed 100 mm f/2.8 macro class.[^sony-specs]
3. **Macro range.** The patent calculates the design to β = −1.0. Sony lists the successor SAL100M28 at **1.0×** maximum magnification and **0.35 m** minimum focus distance.[^sony-specs]
4. **Floating focus.** The patent requires three relatively shiftable groups. Sony’s A-mount lens guide describes the 100mm f/2.8 Macro as using double-floating lens elements.[^sony-guide]
5. **Chronology.** The 1985 priority date matches the first-generation Minolta AF macro period.

No authenticated Minolta designer interview was found in the public material checked for this pass. Element roles are therefore derived from the patent prescription, Sony’s first-party documentation for the successor A-mount lens, and independent paraxial calculation.

## Optical Architecture

Example 8 is a three-moving-group telephoto macro construction with **positive-negative-positive** group power:

| Patent group | Elements | Computed group focal length | Role |
|---|---:|---:|---|
| I | L1–L4 | +75.7623 mm | Principal positive front group and axial-color balancing core |
| II | L5–L6 | −117.7707 mm | Negative floating compensator, including the stop region |
| III | L7–L8 | +121.6420 mm | Rear positive relay and field-correction group |

In strict physical-package terms, the infinity design is not a shortened telephoto lens: the first surface to the infinity image plane is **110.5130 mm** for an effective focal length of **99.9997 mm**, giving **TTL/EFL = 1.1051**. The patent’s practical aim is narrower and more macro-specific: keep the focal length nearly constant while reducing focusing travel and maintaining useful telephoto-macro working distance as magnification approaches 1:1.[^patent]

Independent paraxial tracing gives the following focal lengths for the patent’s three focus configurations:

| Focus state | Patent focal length | Computed EFL | Infinity-object BFL of that internal configuration | Finite-object image distance used for focus |
|---|---:|---:|---:|---:|
| Infinity | 100.0 mm | 99.9997 mm | 43.1530 mm | 43.1530 mm |
| β = −0.5 | 96.9 mm | 96.9136 mm | 28.0902 mm | 76.5518 mm |
| β = −1.0 | 93.2 mm | 93.2331 mm | 20.2305 mm | 113.4895 mm |

The distinction between the last two columns is important. The shorter **28.0902 mm** and **20.2305 mm** values are the back focal lengths that the changed internal systems would have for an object at infinity. They are not the physical final-surface-to-film distances required for the patent’s finite object distances. When the printed object distances are traced, the image plane lies **76.5518 mm** behind the last surface at β = −0.5 and **113.4895 mm** behind the last surface at β = −1.0. The data file therefore varies the final back-focus distance from **43.1530 mm** to **113.4895 mm**.

The focal length decreases from **99.9997 mm** at infinity to **93.2331 mm** at β = −1.0, a **6.77%** reduction. That is not constant focal length in a literal sense, but it is controlled enough to match the patent’s stated goal of keeping focal length “almost constant” during high-magnification focusing.[^patent]

The surface-by-surface Petzval sum, computed as $\sum \phi/(n n')$, is **+0.0012673215 mm⁻¹**, corresponding to a Petzval radius of **+789.1 mm**. That low positive Petzval curvature is consistent with a flat-field macro objective built without aspherical surfaces.

## Element-by-Element Analysis

### L1 — Weak Positive Meniscus, Convex to Image

**nd = 1.51823, νd = 58.96. Glass: S-NSL3-class crown (OHARA-equivalent, inferred). f = +274.5 mm.**

L1 is a low-power positive meniscus. Both radii are negative, but the rear radius is much shorter in magnitude than the front radius, giving net positive power. Its role is to begin convergence gently and keep the entrance-pupil and marginal-ray geometry from being dominated by the stronger positive elements behind it.

The catalog-class match is close but not exact. OHARA S-NSL3 is code 518590 with nd = 1.51823 and νd = 58.90; the patent gives νd = 58.96.[^ohara-nsl3] That supports a class-level identification, not proof of a named Minolta melt.

### L2 — Positive Meniscus, Convex to Object

**nd = 1.69100, νd = 54.75. Glass: S-LAL9-class lanthanum crown (OHARA-equivalent, inferred). f = +74.8 mm.**

L2 is the first substantial positive-power element. The high-index, moderately high-Abbe lanthanum-crown class supplies useful positive power without forcing an extreme surface bend.

Placed behind L1, it increases convergence while leaving L3 and L4 enough leverage for axial color and off-axis correction. It is part of the front group’s power core, not merely a trimming plate.

OHARA S-LAL9 is code 691548 with nd = 1.69100 and νd = 54.82; the patent gives νd = 54.75.[^ohara-lal9] The small Abbe-number difference is within a plausible class-level assignment but is not a vendor proof.

### L3 — Strong Positive Meniscus, Convex to Object

**nd = 1.69100, νd = 54.75. Glass: S-LAL9-class lanthanum crown (OHARA-equivalent, inferred). f = +55.8 mm.**

L3 is the strongest positive element in Group I. It repeats the high-index crown class of L2 and supplies much of the front group’s converging power.

This element is central to the macro compromise. The front group must be strong enough to limit focusing extension, but excessive front positive power would make spherical aberration, coma, and astigmatism hard to hold over the β = 0 to β = −1 range. L3 therefore works as the main positive collector immediately before the dense-flint correction element.

### L4 — Negative Meniscus, Convex to Object

**nd = 1.74000, νd = 31.72. Glass: BPH50 (OHARA), an exact coefficient-backed 740317 dense-flint match. f = −34.2 mm.**

L4 is the strong negative terminator of Group I. In isolation it is the most powerful element in the front assembly, and its dense-flint dispersion counteracts the chromatic contribution of L1–L3.

Its rear placement also shapes the angular bundle entering the first variable space, **d8**, so it directly affects how the negative floating group sees the front-group output during focus travel. L4 should therefore be treated as both an achromatizing element and an input-shaper for the compensator.

The 2026-05-19 audit matched the patent's nd = 1.74000 and νd = 31.72 row to OHARA BPH50, using the public formula-3 coefficients from the Ohara/refractiveindex.info catalog row.

### L5 — Negative Meniscus, Convex to Object

**nd = 1.69680, νd = 56.47. Glass: H-LAK12 (CDGM equivalent; patent 697565). f = −98.1 mm.**

L5 begins Group II, the negative floating compensator. Its front radius is long and positive, while its rear radius is much shorter and positive, so the element has negative power despite using a crown-like Abbe number.

Because **d8** increases and **d12** decreases during close focusing, L5 changes its separation from both the positive front group and the positive rear group. This is the main mechanism that prevents the lens from behaving like a simple unit-focusing 100 mm lens.

The exact patent code 697565 maps in public cross-reference tables to old OHARA LAL64, but no coefficient-backed public LAL64 row was found. The data file therefore uses CDGM H-LAK12 as the coefficient-backed equivalent: it preserves the same nd = 1.69680 and is cross-referenced against the 697565 LAL64 family, though its catalog νd is 56.18 rather than the patent's 56.47.

### L6 — Very Weak Positive Meniscus, Convex to Image

**nd = 1.83400, νd = 37.05. Glass: S-LAH60-class dense lanthanum flint (OHARA-equivalent, inferred). f = +981.9 mm.**

L6 is nearly afocal in isolation, but it is not optically negligible. It is a high-index meniscus in the floating group near the stop. That position lets it influence spherical aberration, coma, and astigmatism sensitivity while preserving Group II’s required net negative power.

The patent text states that the diaphragm is normally located in the second lens group.[^patent] In Example 8 the drawing places the stop region within Group II, between L5 and L6. The data file models the stop by splitting **d10 = 8.70 mm** at its midpoint because the patent does not tabulate the exact stop coordinate.

OHARA S-LAH60 is code 834372 with nd = 1.83400 and νd = 37.16; the patent gives νd = 37.05.[^ohara-lah60] The match is close enough for a class-level annotation, but not for an explicit vendor claim.

### L7 — Negative Meniscus, Convex to Image

**nd = 1.80741, νd = 31.59. Glass: 807316 dense lanthanum flint, unresolved. f = −244.9 mm.**

L7 is the negative element in Group III. It has two negative radii, with the rear radius longer in magnitude than the front radius, giving modest negative power.

Its role is principally corrective. It helps control field curvature, astigmatism, and lateral color before the final positive element forms the image. The patent states that it is desirable for the third group to include a negative meniscus convex to the image side; L7 is that element in Example 8.[^patent]

No authoritative current catalog match was confirmed for nd = 1.80741 and νd = 31.59, so the data file leaves it as unresolved 807316 dense-lanthanum-flint class.

### L8 — Biconvex Positive Rear Element

**nd = 1.58913, νd = 61.11. Glass: S-BAL35-class barium crown (OHARA-equivalent, inferred). f = +85.5 mm.**

L8 is the final positive element and the stronger member of Group III. It restores positive image-forming power after L7 and sets the final convergence toward the image plane.

The moderate-index, high-Abbe barium-crown class makes sense as a partner to L7’s dense flint. The L7/L8 pair functions as a rear correction pair: L7 tempers field and color, while L8 supplies the final relay power.

OHARA S-BAL35 is code 589612 with nd = 1.58913 and νd = 61.14; the patent gives νd = 61.11.[^ohara-bal35] This is a strong class-level match.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not publish glass names, manufacturer codes, partial-dispersion ratios, melt numbers, or line indices beyond nd/νd. The table below therefore separates catalog-class matches from unresolved glass-code classes.

| Element | Patent nd | Patent νd | Data-file annotation | Certainty | Optical role |
|---|---:|---:|---|---|---|
| L1 | 1.51823 | 58.96 | S-NSL3-class crown, OHARA 518590 | Strong class match; νd differs by 0.06 from current OHARA listing | Weak positive front collector |
| L2 | 1.69100 | 54.75 | S-LAL9-class lanthanum crown, OHARA 691548 | Strong class match; νd differs by 0.07 | Front positive power |
| L3 | 1.69100 | 54.75 | S-LAL9-class lanthanum crown, OHARA 691548 | Strong class match; νd differs by 0.07 | Strong front positive power |
| L4 | 1.74000 | 31.72 | BPH50 (OHARA) | Exact coefficient-backed catalog match | Front-group achromatizing negative |
| L5 | 1.69680 | 56.47 | H-LAK12 (CDGM equivalent; patent 697565) | Coefficient-backed equivalent, not supplier proof | Negative floating-group element |
| L6 | 1.83400 | 37.05 | S-LAH60-class dense lanthanum flint, OHARA 834372 | Strong class match; νd differs by 0.11 | Stop-near aberration corrector |
| L7 | 1.80741 | 31.59 | 807316 dense lanthanum flint | Exact current catalog name unresolved | Rear-group negative corrector |
| L8 | 1.58913 | 61.11 | S-BAL35-class barium crown, OHARA 589612 | Strong class match; νd differs by 0.03 | Rear positive relay |

The glass strategy is conventional and restrained. Group I uses crown-positive power followed by a dense-flint negative element. Group II combines a negative high-index crown-shaped element with a weak dense-lanthanum-flint positive meniscus. Group III pairs a dense flint with a moderate-index barium crown.

No ED, super-ED, fluorite, anomalous partial-dispersion, or apochromatic-glass claim is supported by the patent data or by the checked Sony first-party materials. The design is best described as a well-corrected all-spherical achromatized macro lens, not as an APO design.

## Focus Mechanism

The patent mechanism is neither unit focus nor ordinary single-group internal focus. It is a **three-group relative-shift floating focus system**.

The patent states that all three groups shift along the optical axis during focusing, with the first airspace between Groups I and II increasing and the second airspace between Groups II and III decreasing as focus moves from infinity to a short distance.[^patent] In Example 8 those variable spaces are **d8** and **d12**:

| Focus state | d8: Group I → II | d12: Group II → III | d8 + d12 | Patent EFL | Computed EFL |
|---|---:|---:|---:|---:|---:|
| Infinity | 5.00 mm | 24.00 mm | 29.00 mm | 100.0 mm | 99.9997 mm |
| β = −0.5 | 18.36 mm | 10.64 mm | 29.00 mm | 96.9 mm | 96.9136 mm |
| β = −1.0 | 27.50 mm | 1.50 mm | 29.00 mm | 93.2 mm | 93.2331 mm |

The constant **d8 + d12 = 29.00 mm** means Group II is repositioned within a fixed separation between the positive front group and positive rear group. The negative middle group is therefore the compensator, while Groups I and III move together in the same direction.

Solving the finite-conjugate image distance from the patent’s object distances gives the following physical travel relative to the infinity image plane:

| Focus state | Object distance from first surface | Required final-surface-to-image distance | Group I/III travel AA | Group II travel AB | AA/AB |
|---|---:|---:|---:|---:|---:|
| β = −0.5 | 266.4 mm | 76.5518 mm | 33.3988 mm | 20.0388 mm | 1.667 |
| β = −1.0 | 171.0 mm | 113.4895 mm | 70.3365 mm | 47.8365 mm | 1.470 |

The values reproduce the patent’s printed AA/AB ratios of **1.67** at β = −0.5 and **1.47** at β = −1.0. The data file therefore uses three focus variables: **d8**, **d12**, and the final back-focus distance **BF**.

Sony’s first-party specifications for the successor SAL100M28 list 0.35 m minimum focus and 1.0× maximum magnification; its lens guide describes double-floating lens elements for the 100mm f/2.8 Macro.[^sony-specs][^sony-guide] That first-party description is consistent with the patent’s relative-shift prescription, though it does not prove that every production detail is identical to Example 8.

## Aspherical Surfaces

Example 8 is an **all-spherical design**.

The patent gives spherical radii r1 through r16 and no aspheric equation, conic constants, or polynomial coefficients. Claim 9 repeats the same spherical-radius prescription. Sony’s checked first-party materials list the construction and floating mechanism but do not identify an aspherical element for SAL100M28.[^sony-specs][^sony-guide]

No surface is labeled aspherical in the data file, and the `asph` block is intentionally empty.

## Aberration Correction Strategy

The correction strategy is based on group motion and glass pairing rather than aspherical surfaces.

A simple unit-focusing 100 mm macro lens would require large extension to reach 1:1. The patent explicitly frames this as a problem for high-magnification macro lenses and proposes relative movement of three groups to reduce focusing travel while preserving a telephoto-macro working-distance advantage.[^patent]

The division of labor is as follows:

- **Group I** supplies most of the positive power and provides front-group chromatic balancing through L4.
- **Group II** is the negative floating compensator; its changing separation from the two positive groups controls aberration variation through focus.
- **Group III** restores positive image-forming power and controls rear field and color behavior.

The patent’s aberration plots for the eighth embodiment correspond to infinity, β = −0.5, and β = −1.0. They show the designer’s intended balance of spherical aberration, sine condition, astigmatism, and distortion through the three focus states rather than a correction strategy dependent on molded or polished aspheres.[^patent]

## Conditional Expressions and Verification

The relevant claim conditions are satisfied by Example 8:

| Quantity | Patent / computed value | Status |
|---|---:|---|
| f/f1 | 1.32 | Within the first-group power range |
| f/\|f2\| | 0.849 | Within the second-group power range |
| AA/AB at β = −0.5 | 1.67 | Within 0.95 < AA/AB < 2.5 |
| AA/AB at β = −1.0 | 1.47 | Within 0.95 < AA/AB < 2.5 |

The high-resolution page image and the claim 9 table both show **r12 = −26.167**. This matters: an OCR reading of **−26.67** gives an infinity EFL of about **102.72 mm**, contradicting the patent’s f = 100 design. Using **−26.167** gives **EFL = 99.9997 mm** and reproduces the patent’s focus-state focal lengths.

Verification outputs from the re-run calculation:

| Quantity | Result |
|---|---:|
| Infinity EFL | 99.9997 mm |
| Infinity BFL, final surface to image | 43.1530 mm |
| First-surface-to-image distance at infinity | 110.5130 mm |
| β = −0.5 EFL | 96.9136 mm |
| β = −0.5 finite-object image distance | 76.5518 mm |
| β = −1.0 EFL | 93.2331 mm |
| β = −1.0 finite-object image distance | 113.4895 mm |
| Group I focal length | +75.7623 mm |
| Group II focal length | −117.7707 mm |
| Group III focal length | +121.6420 mm |
| Petzval sum | +0.0012673215 mm⁻¹ |
| Petzval radius | +789.1 mm |

## Sources and References

[^patent]: US Patent 4,764,000, *Telephoto Lens System with Three Relatively Shiftable Lens Groups*, Hisashi Tokumaru / Minolta Camera Kabushiki Kaisha, filed 19 May 1986, granted 16 August 1988.
[^sony-specs]: Sony USA, *SAL100M28 Specifications*, listing Sony A-mount, f/2.8 maximum aperture, f/32 minimum aperture, 55 mm filter, 35 mm full-frame format, 0.35 m minimum focus, 100 mm focal length, 1.0× maximum magnification, 9 aperture blades, and 8/8 groups/elements.
[^sony-guide]: Sony, *Lenses and Accessories Selection Guide*, SAL100M28 entry and lens-technology section; the guide lists the 100mm f/2.8 Macro as 8 groups / 8 elements and describes double-floating lens elements.
[^ohara-nsl3]: OHARA Corporation, S-NSL3 optical glass data: code 518590, nd = 1.51823, νd = 58.90.
[^ohara-lal9]: OHARA Corporation, S-LAL9 optical glass data: code 691548, nd = 1.69100, νd = 54.82.
[^ohara-lah60]: OHARA Corporation, S-LAH60 optical glass data: code 834372, nd = 1.83400, νd = 37.16.
[^ohara-bal35]: OHARA Corporation, S-BAL35 optical glass data: code 589612, nd = 1.58913, νd = 61.14.
