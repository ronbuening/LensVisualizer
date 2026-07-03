## Patent Reference and Design Identification

**Patent:** JP 2022-085382 A  
**Application Number:** JP 2020-197034  
**Filed:** 2020-11-27  
**Published:** 2022-06-08  
**Inventor:** Takumi Suzuki (鈴木 匠)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** 光学系及びそれを有する撮像装置 (Optical system and imaging apparatus having the same)  
**Embodiment analyzed:** Numerical Example 3 (数値実施例3)

Numerical Example 3 is the strongest match to the Canon RF 16mm F2.8 STM among the five worked examples in JP 2022-085382 A. The patent example has a computed paraxial focal length of 16.486 mm and a stated focal length of 16.48 mm, while the production lens is marketed as a 16 mm RF-mount lens. The patent gives F/2.90; Canon markets the production lens as f/2.8.

The prescription has 9 elements in 7 air-spaced groups. That matches Canon's production specification for the RF 16mm F2.8 STM. The sole aspherical element is L8, carrying aspherical surfaces on both sides; Canon's public specifications identify one aspherical element. The resin or PMo-class identification used here is inferred from the patent's unmatched nd/νd pair rather than from a patent material name. The patent example contains no optical image-stabilization group, consistent with Canon's production specification that the lens itself has no optical IS.

The patent's image height is 18.20 mm with a stated half field of 47.84°. This is smaller than the 21.6 mm half-diagonal of a 36 × 24 mm frame, while Canon markets the production lens with a diagonal field of 108°10′. The data file therefore preserves the patent trace field as `maxTraceFieldDeg: 47.84` and records the production diagonal field separately as the rectilinear full-field metadata. This avoids treating the patent's reduced image height as if it were the full corrected production field.

Canon Camera Museum lists the RF16mm F2.8 STM as marketed in October 2021, with 9 elements in 7 groups, 7 aperture blades, 0.13 m minimum focusing distance, 0.26× maximum magnification, 43 mm filter diameter, and approximately 165 g weight. The same Canon source describes the RF mount's large internal diameter and short back focus as enabling the 9/7 optical configuration to sit close to the imaging plane. That statement is important: this is a short-back-focus mirrorless wide-angle, not a long-back-focus SLR retrofocus lens.

## Optical Architecture

The patent describes the design as a retrofocus-type wide-angle optical system because its power distribution is negative in front and positive behind the stop. In stricter layout terms, Example 3 is a short-back-focus negative-positive mirrorless wide-angle. Its computed back focal distance is 12.547 mm, giving sk/f = 0.761, so it does not meet the long-back-focus criterion BFD > EFL sometimes implied by older SLR-era use of “retrofocus.”

The system consists of a three-element negative front group, an aperture stop, and a six-element positive rear group. The front group has two negative menisci, L1 and L2, followed by a positive high-index element, L3. Its computed focal length is -23.966 mm. The rear group begins with two cemented doublets, followed by a weak positive aspherical resin element and a rear positive meniscus. Its computed focal length is +21.533 mm.

The aperture stop is placed unusually far forward for a compact ultra-wide design. The distance from L1's front surface to the stop is 16.12 mm from the prescription, while the distance from L1's front surface to the last lens surface is 50.65 mm, giving PD/LD = 0.318. This is the primary architectural condition in the patent. Moving the stop forward lowers off-axis ray height at the first element and helps limit the front diameter.

The full optical track from the first surface to the patent image plane is 63.19 mm. The Petzval sum, computed surface by surface as φ/(n·n′), is +0.006265 mm⁻¹, corresponding to a Petzval radius of about 159.6 mm. The positive residual Petzval sum is moderate for a fast 16 mm negative-positive wide-angle and is controlled by the two cemented doublets and the rear weak asphere/field-flattener combination.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

nd = 1.60311, νd = 60.6. Glass: S-BSM14 (OHARA). f = -25.79 mm.

L1 is the leading negative element. Its front surface is relatively gentle, while the rear surface is strongly curved with R = +9.735 mm. This distributes the entrance refraction instead of concentrating the wide-angle divergence into a single steep front surface. It carries slightly more negative power than L2 and sets the first part of the front group's angular expansion.

S-BSM14 is a barium crown rather than an ED glass. Its moderate index and relatively high Abbe number make it suitable for a front negative meniscus where diameter, manufacturability, and lateral-colour control have to be balanced.

### L2 — Negative Meniscus, convex to object

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = -33.82 mm.

L2 is the second negative front-group element. Its lower index and higher Abbe number reduce the chromatic burden imposed by the negative front group. The air gap between L2 and L3 forms the shaped air lens governed by condition (4), with (G2R2 + G3R1)/(G2R2 - G3R1) = -1.72.

The split between L1 and L2 is central to the patent's compactness argument: the patent explicitly avoids making a single leading negative element too strong, because that would raise off-axis aberrations and increase front-element diameter.

### L3 — Biconvex Positive

nd = 1.83400, νd = 37.2. Glass: S-LAH60 (OHARA). f = +43.79 mm.

L3 is the only positive element in the front group. Its rear radius is very long, R = -392.360 mm, so its power is dominated by the object-side surface. The high index allows useful positive correction without making the element thick or strongly curved on both sides.

Because L3 uses a dense lanthanum flint with a much lower Abbe number than L1 and L2, it contributes to the front group's lateral-colour balance. The average Abbe number of the two front negative elements is 65.44, while L3 has νd = 37.16, giving νdn/νdp = 1.76.

### L4 + L5 — First Rear-Group Cemented Doublet

L4: nd = 1.83481, νd = 42.7. Glass: S-LAH55VS (OHARA). Standalone f = +8.57 mm.  
L5: nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA). Standalone f = -19.27 mm.

The first rear-group cemented doublet is arranged positive then negative, as preferred in the patent text for the rear group. As an isolated cemented subassembly in air, the doublet has a computed net focal length of +15.27 mm. That value describes the doublet's standalone paraxial power; its in-system contribution also depends on the stop location and adjacent air spaces.

L4 supplies strong convergence immediately after the aperture. L5, with very high refractive index and strong dispersion, moderates the chromatic error generated by L4 while preserving a compact axial package. The L4/L5 pair is not a conventional wide crown/flint achromat; both glasses are high-index lanthanum flints, and the correction depends on their index and dispersion separation at a cemented interface.

### L6 + L7 — Second Rear-Group Cemented Doublet

L6: nd = 1.68893, νd = 31.1. Glass: S-TIM28 (OHARA). Standalone f = -12.94 mm.  
L7: nd = 1.59282, νd = 68.6. Glass: FCD515 (HOYA). Standalone f = +20.01 mm.

The second cemented doublet reverses the power order: negative then positive. As an isolated cemented subassembly in air, its net focal length is -50.28 mm. This modest negative doublet balances the strong positive first doublet and contributes to field curvature and chromatic correction once placed in the rear group.

The L6/L7 junction has the largest Abbe-number split in the system, Δνd = 37.5. L6 is a high-dispersion titanium flint. L7 is a low-dispersion Hoya FCD515-class crown. This is the strongest chromatic correction lever in the rear group.

### L8 — Weak Positive Resin-Class Aspherical Meniscus

nd = 1.53110, νd = 55.9. Glass: unmatched, probable molded optical resin. f = +169.46 mm.

L8 is optically weak in paraxial power but structurally important. Both of its surfaces are aspherical. Canon's public product information identifies one aspherical element; the patent's nd/νd pair does not match a public OHARA, HOYA, Schott, Hikari, CDGM, or Sumita glass entry within catalog tolerance, which is consistent with a proprietary molded optical resin rather than a named catalog glass.

The asphere is placed behind the second cemented doublet and ahead of the final meniscus, where ray heights are still high enough for field and distortion correction but the element can remain physically small. The patent text identifies rear-group aspherical correction as useful for reducing focus-induced field-curvature variation.

### L9 — Positive Meniscus, concave to object

nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA). f = +70.05 mm.

L9 is the final refractive element. Its positive meniscus form bends the marginal and chief rays close to the image plane and functions as a rear field-flattening element. Its power is moderate, but its location gives it strong leverage over image-side ray angles and residual field shape.

S-BSM15 is a barium crown with moderate index and normal dispersion. It is not the principal chromatic corrector; that role belongs mainly to the L4/L5 and L6/L7 cemented doublets.

## Glass Identification and Selection

| Element | nd | νd | Glass | Vendor | Role |
|---|---:|---:|---|---|---|
| L1 | 1.60311 | 60.6 | S-BSM14 | OHARA | Front negative barium crown |
| L2 | 1.48749 | 70.2 | S-FSL5 | OHARA | Low-index, low-dispersion front negative |
| L3 | 1.83400 | 37.2 | S-LAH60 | OHARA | High-index positive front-group correction |
| L4 | 1.83481 | 42.7 | S-LAH55VS | OHARA | Strong positive rear doublet element |
| L5 | 1.90366 | 31.3 | S-LAH95 | OHARA | Dense flint doublet partner |
| L6 | 1.68893 | 31.1 | S-TIM28 | OHARA | Negative flint in second rear doublet |
| L7 | 1.59282 | 68.6 | FCD515 | HOYA | Low-dispersion positive doublet partner |
| L8 | 1.53110 | 55.9 | Probable molded optical resin, unmatched | Inferred proprietary | Weak positive dual-asphere |
| L9 | 1.62299 | 58.2 | S-BSM15 | OHARA | Rear field-flattening crown |

The OHARA matches are exact at the six-digit glass-code level: S-BSM14 = 603607, S-FSL5 = 487702, S-LAH60 = 834372, S-LAH55VS = 835427, S-LAH95 = 904313, S-TIM28 = 689311, and S-BSM15 = 623582. Hoya's FCD515 is a 593-686 low-dispersion crown. L8 remains deliberately marked as unmatched rather than forced onto a catalog glass because its nd/νd pair does not correspond to a public glass entry; the molded-resin interpretation is an inference.

The chromatic strategy is concentrated in the rear group. The first rear cemented doublet provides strong positive power while moderating axial colour. The second cemented doublet supplies the large flint/low-dispersion-crown separation needed to control the remaining axial and lateral chromatic errors. No apochromatic claim is justified from the patent data alone; the available prescription supports only ordinary d-line paraxial analysis plus Abbe-number chromatic inference.

## Focus Mechanism

The patent states that during focusing from infinity to close distance, the front group, stop, and rear group, or the front group, stop, and part of the rear group, move together from the image side toward the object side. The patent does not publish close-focus spacing tables for any of the five numerical examples.

Canon's production specifications give a 0.13 m minimum focusing distance and 0.26× maximum magnification. Canon specifies STM autofocus and one aspherical element. Public Canon specification sheets do not provide the internal focus-spacing data needed to model the close-focus prescription directly.

The `.data.ts` file therefore uses the infinity prescription as the authoritative optical prescription and includes only an approximate final-BF focus variable for visualization. The close-focus BF value is 16.83 mm, derived from the simple unit-focus extension estimate m × f = 0.26 × 16.486 mm = 4.29 mm, added to the patent BF of 12.54 mm. This is not a patent-published focus state and should not be used for close-focus aberration analysis.

## Aspherical Surfaces

Both aspherical surfaces are on L8. The patent uses the standard even-order aspherical sag equation:

$$X = \frac{H^2 / R}{1 + \sqrt{1 - (1+K)(H/R)^2}} + A_4 H^4 + A_6 H^6 + A_8 H^8 + A_{10} H^{10} + A_{12} H^{12} + A_{14} H^{14}$$

Here K is the standard conic constant, with K = 0 corresponding to a spherical base curve. Numerical Example 3 lists coefficients through A12 only; A14 is treated as zero in the data file.

**Surface 14A (L8 front):** R = -50.009 mm, K = 0.

| Coefficient | Value |
|---|---:|
| A4 | +5.22756 × 10⁻⁵ |
| A6 | -1.92650 × 10⁻⁶ |
| A8 | +3.51677 × 10⁻⁸ |
| A10 | -3.71946 × 10⁻¹⁰ |
| A12 | +1.36387 × 10⁻¹² |
| A14 | 0 |

**Surface 15A (L8 rear):** R = -32.615 mm, K = 0.

| Coefficient | Value |
|---|---:|
| A4 | +1.10438 × 10⁻⁴ |
| A6 | -1.14287 × 10⁻⁶ |
| A8 | +2.01498 × 10⁻⁸ |
| A10 | -1.88642 × 10⁻¹⁰ |
| A12 | +6.28660 × 10⁻¹³ |
| A14 | 0 |

At the verified data-file semi-diameters, the polynomial departures from the spherical base are -0.0787 mm on surface 14A at h = 9.0 mm and +0.6064 mm on surface 15A at h = 9.5 mm. At a smaller comparison height of h = 5.0 mm, the departures are +0.0130 mm and +0.0573 mm respectively, but the rim values are the controlling figures for the rendered prescription. Surface 15A is the stronger aspherical correction surface at both heights. Both base radii are negative, so sign interpretation should be made relative to the patent's positive image-side X direction rather than by the visual concavity alone.

## Conditional Expressions

The patent gives ten conditional expressions. Numerical Example 3 satisfies all primary ranges and the preferred sub-ranges relevant to the example.

The printed text has two internal inconsistencies that were preserved as audit notes rather than silently normalized. Claim 9 prints the lower bound for fGn1/fGn2 as 1.1, but the detailed-description condition (8), the preferred ranges (8a)/(8b), and Table 1 use a range compatible with Example 3's 0.76 value. The condition table below therefore follows the detailed-description/Table 1 version. The printed preferred-range formula for condition (9a)/(9b) also repeats G2R1 in the denominator; the base condition and Table 1 make clear that the intended denominator is G2R1 - G2R2.


| Condition | Expression | Example 3 | Verification note |
|---|---|---:|---|
| (1) | PD/LD | 0.32 | PD = 16.12 mm, LD = 50.65 mm |
| (2) | f1/f | -1.45 | f1 = -23.966 mm, f = 16.486 mm |
| (3) | L12/L23 | 1.14 | 3.67 / 3.21 |
| (4) | (G2R2+G3R1)/(G2R2-G3R1) | -1.72 | 10.586 and 40.191 mm radii |
| (5) | fGn1/f1 | 1.08 | -25.79 / -23.97 |
| (6) | νdn/νdp | 1.76 | 65.44 / 37.16 |
| (7) | sk/LD | 0.25 | 12.54 / 50.65 |
| (8) | fGn1/fGn2 | 0.76 | -25.79 / -33.82 |
| (9) | (G2R1+G2R2)/(G2R1-G2R2) | 2.06 | 30.493 and 10.586 mm radii |
| (10) | f2/f | 1.31 | 21.533 / 16.486 |

Independent paraxial verification gives EFL = 16.4857 mm, rear focus from the last surface = 12.5468 mm, front-group focal length = -23.9663 mm, rear-group focal length = +21.5329 mm, and Petzval sum = +0.006265 mm⁻¹. These values agree with the patent tables to the precision expected from the rounded published prescription.

## Data-File Implementation Notes

The data file preserves the patent's radii, thicknesses, refractive indices, and aspherical coefficients without focal-length scaling. Semi-diameters are inferred because the patent omits clear-aperture data. The inferred apertures were checked against rim-slope limits, sd/|R| < 0.90 for the spherical limiting surfaces, element front/rear SD ratios below 1.25, positive edge thicknesses, and cross-gap sag clearance.

The rounded prescription gives PD = 16.12 mm, while Table 1 prints 16.13 mm; the 0.01 mm difference is treated as rounding in the tabulated example constants.

The stop position follows the patent exactly. Because the patent reports F/2.90 but Canon markets the production lens as f/2.8 and does not publish the actual stop radius, the file records `apertureDesign: 2.9`, `apertureMarketing: 2.8`, and uses an inferred stop semi-diameter for the marketed aperture.

The file records Canon RF mount and 135 full-frame format metadata. The optical trace field is kept at the patent value, while the production diagonal field is stored as projection metadata. That separation is necessary because the patent's 18.20 mm image height is not the full-frame half-diagonal.

## Sources

- JP 2022-085382 A, Japan Patent Office. Primary prescription source for all radii, thicknesses, refractive indices, Abbe numbers, aspherical coefficients, conditional expressions, and patent focus description.
- Canon Europe, Canon USA, Canon Camera Museum, and Canon regional product pages for production specifications: 16 mm focal length, f/2.8 aperture, 9 elements / 7 groups, one aspherical element, STM drive, 0.13 m minimum focusing distance, 0.26× maximum magnification, no lens IS, 43 mm filter thread, 69.2 × 40.2 mm dimensions, and 165 g weight.
- OHARA optical glass catalog and OHARA glass-data pages for S-BSM14, S-FSL5, S-LAH60, S-LAH55VS, S-LAH95, S-TIM28, and S-BSM15.
- HOYA optical glass catalog and cross-reference tables for FCD515.
