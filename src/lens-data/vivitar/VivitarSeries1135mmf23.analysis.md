## Patent Reference and Design Identification

**Patent:** GB 1,408,910  
**Application Number:** GB 41928/72  
**Priority:** US Ser. No. 179,304, filed 10 September 1971; US Ser. No. 286,920, filed 7 September 1972  
**Filed:** 8 September 1972  
**Published:** 8 October 1975  
**Inventor:** Ellis I. Betensky  
**Applicant:** Ponder & Best, Inc.  
**Title:** Improvements in or Relating to Photographic Lenses  
**Embodiment analyzed:** Table II / Figure 3

Table II is a 135 mm f/2.3 lens for a 24 × 36 mm image frame. It contains six air-spaced elements. The patent describes L6 as a negative meniscus compensator fixed relative to the film plane while the five-element front objective moves for focusing. The embodiment is identified with the production Vivitar Series 1 135mm f/2.3 Auto Telephoto from the following convergent evidence:

1. The patent and production literature both specify 135 mm and f/2.3.
2. Table II and the Vivitar owner’s manual both specify six elements in six groups.
3. The patent specifies the 24 × 36 mm frame, and the owner’s manual gives an 18° angle of acceptance.
4. The patent uses a translating L1-L5 objective and stationary rear compensator L6. Ponder & Best’s September 1974 lens sheet describes the production lens as using a “uniquely positioned rear compensating element.”
5. Vivitar specifies a minimum focusing distance of 3 ft (.9 m), substantially closer than the patent’s worked 1.5 m endpoint but consistent with additional travel of the same compensator architecture.

The prose on patent page 3 refers to this embodiment as “Figure 9.” The embodiment list on page 2, the Table II heading, Claim 9, and the drawing sheet all identify Figure 3. “Figure 9” is therefore a typographical error.

The corresponding United States patent is US 3,942,876, granted 9 March 1976. GB 1,408,910 is used for the transcription because Table II and Figure 3 are complete and legible.

## Optical Architecture

The corresponding US patent expressly classifies Figures 1 and 3-5 as lenses “of the so-called SONNAR type.” Figure 3 is an all-spherical six-element, six-group telephoto arranged as three principal objective groups followed by the compensator:

- L1-L2: a positive air-spaced front group, verified EFL +52.1545 mm;
- L3: a strong negative group before the aperture stop;
- L4-L5: a net-positive air-spaced group, verified EFL +82.5736 mm;
- L6: a weak negative meniscus fixed relative to the film plane.

The complete L1-L5 moving objective has a verified in-air EFL of +113.6194 mm. It translates toward the object for close focus, while L6 remains stationary. Increasing the L5-L6 airspace changes the finite conjugate and reduces the complete system’s EFL, thereby reducing the required objective travel compared with an otherwise similar unit-focusing lens.

At infinity, the first-vertex-to-film distance is 127.04 mm and the independently computed EFL is 135.2107 mm. The ratio $127.04/135.2107 = 0.93957$ is below unity, so the design is a telephoto under the patent’s definition. It is not in the more compressed $\text{FVD}/\text{EFL} \le 0.7$ class discussed for the patent’s 300 mm example.

The patent tabulates 59.67 mm from R12 to the film plane. The 24 × 36 mm diagonal is 43.2666 mm, so the condition $\text{BFL} \ge 0.7D$ requires 30.2866 mm and is satisfied. A paraxial trace of the rounded Table II values places the collimated focus 59.7117 mm behind R12, only 0.0417 mm beyond the tabulated film plane. Ponder & Best’s production sheet gives 59.78 mm, 0.0683 mm beyond the computed patent value. These small differences do not justify rescaling the prescription.

The patent does not tabulate the exact diaphragm station. Figure 3 places it within the 19.22 mm R6-R7 airspace. The data file divides that gap at its midpoint, 9.61 mm on each side of `STO`. This is an inferred station; the total patented airspace remains unchanged and the inserted stop surface is optically neutral.

## Element-by-Element Analysis

### L1 — Biconvex Positive, Nearly Plano-Convex

nd = 1.62280, νd = 56.9. Glass: S-BSM10 class (OHARA). f = +72.47 mm.

L1 is the stronger positive member of the front pair. R1 = +45.6583 mm supplies almost all of its surface power, while R2 = -3538.8 mm is effectively plane at the element’s scale. The data file retains the finite patented radius rather than replacing it with a plane.

OHARA S-BSM10 has nd = 1.62280 and νd = 57.05. It is a close modern class match, not proof of the production melt or supplier.

### L2 — Positive Meniscus, Convex to Object

nd = 1.51680, νd = 64.2. Glass: N-BK7 (SCHOTT) equivalent. f = +189.92 mm.

L2 is a weak positive meniscus separated from L1 by 0.34 mm. R3 = +45.5236 mm is steeper than R4 = +77.8311 mm, giving the element positive power. The air-spaced L1-L2 pair has a verified EFL of +52.1545 mm and provides the principal convergence ahead of L3.

The patented nd/νd pair agrees with current SCHOTT N-BK7 within rounding. This is a catalog-equivalent identification rather than a vendor attribution.

### L3 — Biconcave Negative

nd = 1.80518, νd = 25.5. Glass: SF6 class (SCHOTT legacy). f = -34.85 mm.

L3 is the strongest standalone element by absolute power. R5 = -145.2645 mm is weakly concave and R6 = +35.1509 mm is strongly concave. The steeper image-side surface therefore carries the larger negative surface-power contribution, matching the patent’s description of the negative group.

Its low Abbe number makes L3 the principal dispersive negative member paired against the positive front group. SCHOTT’s legacy SF6 class is closer in Abbe number to the printed pair than the modern N-SF6 value, but the patent does not name a manufacturer.

### L4 — Biconvex Positive

nd = 1.64769, νd = 33.8. Glass: N-SF2 (SCHOTT) equivalent. f = +47.58 mm.

L4 is the strongest positive standalone element and the first glass after the stop. R7 = +95.1885 mm is weaker than R8 = -44.2681 mm, concentrating much of the positive refraction at the rear surface.

Current SCHOTT N-SF2 values, nd = 1.64769 and νd = 33.82, agree with the patent to rounding. Because νd is well below 50, L4 is a flint despite its positive optical power.

### L5 — Negative Meniscus, Concave to Object

nd = 1.62230, νd = 53.1. Glass: N-SSK2 class (SCHOTT). f = -100.17 mm.

Both L5 radii are negative: R9 = -37.3576 mm and R10 = -95.1509 mm. The front surface is steeper, yielding a negative meniscus with its concave side toward the object. L5 completes the net-positive L4-L5 group and lies immediately ahead of the sole variable airspace.

With νd = 53.1, L5 is on the crown side of the conventional νd ≈ 50 crown/flint division. Current N-SSK2 is a close class match rather than an exact historical identification.

### L6 — Negative Meniscus, Fixed Compensator

nd = 1.54814, νd = 45.8. Glass: LLF1 (SCHOTT) equivalent. f = -296.44 mm.

L6 is the stationary compensator central to the patent. Both radii are positive, R11 = +62.1185 mm and R12 = +44.4264 mm, with the rear surface steeper. The resulting meniscus is negative and has its concave side toward the image, as required by Claim 6.

The verified standalone focal length satisfies the patent’s corrector limits:

- $|f_{L6}| = 296.436\ \mathrm{mm} \ge 2\,\mathrm{BFL} = 119.340\ \mathrm{mm}$;
- $|f_{L6}| = 296.436\ \mathrm{mm} \le 3f = 405.632\ \mathrm{mm}$.

As the front objective moves forward, L6 remains fixed relative to the film plane. The system EFL falls from 135.2107 mm at infinity to 130.2285 mm at the patent’s 10.40 mm gap endpoint. This is the focal-length reduction described by the patent; L6 is not a separately moving floating group.

## Glass Identification and Selection

The patent gives only nd and νd, not glass names or line-by-line dispersion data. The following entries are catalog equivalents or classes established by comparing the printed pairs against manufacturer data. They do not establish the actual production glass supplier.

| Element | Patent nd | Patent νd | Catalog candidate | Catalog nd | Catalog νd | Δnd | Δνd | Assessment |
|---|---:|---:|---|---:|---:|---:|---:|---|
| L1 | 1.62280 | 56.9 | S-BSM10 (OHARA) | 1.62280 | 57.05 | 0.00000 | +0.15 | Close class match |
| L2 | 1.51680 | 64.2 | N-BK7 (SCHOTT) | 1.51680 | 64.17 | 0.00000 | -0.03 | Match within rounding |
| L3 | 1.80518 | 25.5 | SF6 (SCHOTT legacy) | 1.80518 | 25.43 | 0.00000 | -0.07 | Close class match |
| L4 | 1.64769 | 33.8 | N-SF2 (SCHOTT) | 1.64769 | 33.82 | 0.00000 | +0.02 | Match within rounding |
| L5 | 1.62230 | 53.1 | N-SSK2 (SCHOTT) | 1.62229 | 53.27 | -0.00001 | +0.17 | Close class match |
| L6 | 1.54814 | 45.8 | LLF1 (SCHOTT) | 1.54814 | 45.75 | 0.00000 | -0.05 | Match within rounding |

The sequence is crown-crown-flint-flint-crown-flint when the conventional νd ≈ 50 boundary is applied. L4 is a positive-power flint, while L5 is a negative-power crown.

Adding SCHOTT's official LLF1 Sellmeier record closes the only catalog gap exposed by this prescription. All six elements now have coefficient-backed catalog dispersion, with the equivalence qualifications in the table preserved.

No ED, fluorite, or anomalous-partial-dispersion material is specified. Because the source provides only nd and νd, the data file omits nC, nF, ng, and ΔPgF. The prescription supports ordinary achromatic balancing, not a substantiated apochromatic claim.

## Focus Mechanism

The mechanism is front-objective focusing with a fixed rear compensator. L1-L5 move together toward the object; L6 and the R12-to-film spacing remain fixed. Only the R10-R11 airspace changes.

| State | R10-R11 gap (mm) | Object distance from front vertex (mm) | Object distance from film plane (mm) | System EFL (mm) | Magnification | Front-vertex-to-film distance (mm) |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | 0.8700 | ∞ | ∞ | 135.2107 | 0 | 127.0400 |
| Patent close endpoint | 10.4000 | 1471.8925 | 1608.4625 | 130.2285 | -0.09950 (1:10.05) | 136.5700 |
| Data-file 0.900 m endpoint | 21.0811 | 752.7489 | 900.0000 | 125.0635 | -0.21135 (1:4.73) | 147.2511 |
| Exact 3 ft reference | 20.6229 | 767.6071 | 914.4000 | 125.2766 | -0.20656 (1:4.84) | 146.7929 |

The patent states that 0.87-10.40 mm covers infinity to approximately 1500 mm. The independently solved front-vertex conjugate at 10.40 mm is 1471.9 mm, consistent with that rounded statement. The corresponding distance measured from the film plane is 1608.5 mm.

Vivitar’s owner’s manual prints the minimum distance as “3 ft. (.9m),” treating the imperial and metric figures as rounded equivalents. The data file uses the published metric endpoint, 0.900 m. Extending the same unscaled Table II prescription to that distance requires a 21.0811 mm R10-R11 gap and predicts 1:4.73 paraxial magnification. Using exact 3 ft instead produces the separate reference values shown above.

Ponder & Best’s September 1974 sheet specifies 1:4.5 maximum magnification. That is about 5.14% greater than the 0.900 m paraxial magnification derived from the rounded patent table. The manufacturer value is retained as the production specification, but it is not used to rescale or alter Table II. The difference can arise from rounded product distances, production prescription or melt adjustments, and the distinction between paraxial and published reproduction-ratio conventions.

The patent-range travel is 9.53 mm, or 7.05% of the infinity EFL. The extrapolated 0.900 m endpoint uses 20.2111 mm of objective travel. The latter is explicitly a production-distance model beyond the patent’s worked 10.40 mm gap endpoint.

## Chromatic Correction Strategy

The positive L1-L2 group uses crown-class glasses with νd = 56.9 and 64.2, while the strong negative L3 uses a dense flint at νd = 25.5. This is the principal longitudinal-color balance. Behind the stop, the strong positive L4 is itself a flint, and negative L5 is a crown; their signs and dispersions add correction freedom rather than repeating a simple positive-crown/negative-flint achromat.

L6 is a weak negative flint. Its principal patented role is focus compensation, but its dispersion participates in the complete-system balance. The available data support describing the lens as conventionally achromatized, not apochromatic.

## Conditional Expressions

The Table II example satisfies the patent’s principal first-order conditions:

| Condition | Requirement | Verified Table II value | Result |
|---|---|---:|---|
| Telephoto form | EFL > front-vertex distance | 135.2107 mm > 127.0400 mm | Pass |
| Rear clearance | BFL ≥ 0.7 × image diagonal | 59.67 mm ≥ 30.2866 mm | Pass |
| Corrector lower-power bound | $|f_c| \ge 2\,\mathrm{BFL}$ | 296.436 mm ≥ 119.340 mm | Pass |
| Negative-corrector upper bound | $|f_c| \le 3f$ | 296.436 mm ≤ 405.632 mm | Pass |
| Corrector form | Negative meniscus, concave side imageward | L6 radii +62.1185 / +44.4264 mm | Pass |

## Data-File Modeling and Semi-Diameters

No uniform scaling is applied. Every patented radius and axial distance is retained at the Table II value. The computed EFL is 135.2107 mm, only +0.2107 mm or +0.1561% from the marketed 135 mm designation; this is ordinary nominal focal-length rounding.

The patent does not provide clear semi-diameters, so the data file’s apertures are inferred rather than patented dimensions. At the midpoint stop, the f/2.3 entrance pupil has a paraxial semi-diameter of 29.3936 mm. The front-group pupil magnification gives a physical stop semi-diameter of 17.0167 mm.

An on-axis marginal ray and a diagonal chief ray were traced through every surface. A fully unvignetted diagonal f/2.3 bundle would require approximately 39.5421 mm at R1, which is incompatible with the strongly curved L1 geometry at the patented 12.15 mm center thickness. The selected apertures preserve representative near-marginal on-axis rays while permitting clipping at the outermost pupil edge and ordinary wide-open off-axis mechanical vignetting. The rear L5-L6 apertures step down from 16.5 to 15.5 mm to follow Figure 3 more closely without creating renderer trims.

The inferred apertures were independently checked against the project’s geometric constraints:

- maximum element front/rear SD ratio: 1.1277 at L2;
- minimum computed edge thickness: 1.1947 mm at L4;
- maximum signed cross-gap sag intrusion: 88.7794% of the R4-R5 air gap;
- maximum SD/|R|: 0.6483 at R1.

These checks establish renderability and physical plausibility. They do not convert the inferred apertures into production measurements.

## Verification Summary

All values below were recalculated from the unscaled Table II radii, thicknesses, nd values, and focus spacing with an independent reduced-angle $[y,n\theta]$ matrix trace and a separate finite-conjugate solve. Element focal lengths are standalone in-air values; the design has no cemented interfaces.

| Quantity | Patent / manufacturer value | Independently computed | Difference / interpretation |
|---|---:|---:|---|
| EFL at infinity | 135 mm nominal | 135.2107 mm | +0.2107 mm (+0.1561%) marketing rounding |
| Patent R12-to-film distance | 59.67 mm | 59.7117 mm paraxial BFL | +0.0417 mm from printed precision |
| Production BFL sheet | 59.78 mm | 59.7117 mm from Table II | Manufacturer value is +0.0683 mm |
| Front-vertex-to-film distance | 127.04 mm | 127.0400 mm | Exact axial sum |
| Diagonal full field | 18° nominal | 18.1802° | From 43.2666 mm diagonal and computed EFL |
| Telephoto ratio | EFL > FVD | 0.93957 | Telephoto; not in the ≤0.7 compressed class |
| L6 focal length | -296.4 mm | -296.4362 mm | -0.0362 mm |
| Surface-by-surface Petzval sum | not stated | +0.000363732 mm⁻¹ | Petzval radius +2749.3 mm |

The Petzval sum uses the surface expression $\Phi/(nn')$ at every refracting surface. It describes paraxial mean field-curvature tendency only; it does not establish flat tangential and sagittal image surfaces at f/2.3.

| Element / subassembly | Verified standalone or in-air EFL (mm) |
|---|---:|
| L1 | +72.4718 |
| L2 | +189.9170 |
| L3 | -34.8479 |
| L4 | +47.5813 |
| L5 | -100.1655 |
| L6 | -296.4362 |
| L1-L2 air-spaced group | +52.1545 |
| L1-L5 moving objective | +113.6194 |
| L4-L5 air-spaced group | +82.5736 |

## Design Heritage and Context

The patent’s novelty is not merely the presence of another rear element. It fixes the compensator relative to the film plane and coordinates that stationary weak power with a translating front objective. The patent states that a properly selected compensator opposes the off-axis aberration change that would otherwise accompany close focusing. With negative L6 power, the arrangement also reduces the complete-system focal length as the objective moves forward, shortening the required travel.

Figure 3 is Sonnar-derived in the terminology of the patent, but it is not a classical cemented Sonnar. Every element is air-spaced, and the stationary rear compensator gives the design a distinct focusing architecture.

Subcontractor, serial-number, and unsupported production-construction claims are omitted because they are unnecessary for identifying the optical embodiment and are not established by the reviewed primary sources.

## Sources

1. GB 1,408,910, *Improvements in or Relating to Photographic Lenses*, Ponder & Best, Inc., published 8 October 1975: pp. 1-8, Table II, Claim 9, and drawing Figure 3.
2. US 3,942,876, *Telephoto Lens*, Ellis I. Betensky, granted 9 March 1976.
3. Vivitar Corporation, *135mm f2.3 Automatic Telephoto Lens — Owner’s Manual*, 4/73, specifications p. 15.
4. Ponder & Best, Inc., *Vivitar Series 1 135mm f2.3 Automatic Telephoto Lens*, September 1974, Section 3, Series 1, p. 6.
5. OHARA, S-BSM10 optical-glass datasheet.
6. SCHOTT, N-BK7, SF6/N-SF6, N-SF2, N-SSK2, and LLF1 optical-glass catalog data.
