# Fujifilm GA645 Professional Super EBC Fujinon 60 mm f/4 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 5,548,447
**Priority:** JP 6-059060, filed March 29, 1994
**Filed:** March 28, 1995
**Granted:** August 20, 1996
**Inventor:** Nobuaki Toyama
**Assignee:** Fuji Photo Optical Co., Ltd., Saitama-ken, Japan
**Title:** Photographic Lens System
**Embodiment analyzed:** Example 1, Table I, Fig. 1

US 5,548,447 describes a compact wide-angle photographic lens system for a lens-shutter camera. The patent objective is a lens with an angle of view near 60°, an F number between approximately f/2.8 and f/4, and an overall length approximately 1.1–1.2 times the focal length while retaining a large axial space for a between-the-lens shutter.

Example 1 is the best match to the Fujifilm GA645 Professional 60 mm f/4 lens for four reasons. First, the owner’s manual specifies a Super EBC Fujinon 1:4 f=60 mm lens with six components and seven elements, while Example 1 contains seven glass elements in six air-spaced groups, with L6 and L7 cemented into the final group. Second, the manual gives a 6 × 4.5 cm picture size of 56 × 41.5 mm, a 60° angle of view, a 0.7 m minimum focusing distance, and a 52 mm filter diameter; the patent’s Example 1 has $f = 100.00$, $F = 4.00$, and $2\psi = 59.2°$, so scaling the prescription by 0.6 gives a 60 mm f/4 design with the same field class. Third, the patent explicitly places the diaphragm between the front and rear groups and notes the large intergroup distance for a between-the-lens shutter. Fourth, Example 1 is the only all-meniscus embodiment among the 60° f/4 examples, and the patent states that all elements in Fig. 1 are meniscus elements.

The data file therefore transcribes Example 1 and scales all radii, thicknesses, air gaps, back focus, and inferred semi-diameters by $0.6$ for the production 60 mm lens. The optical analysis below gives most paraxial values at the patent normalization unless explicitly marked as production scale.

## Optical Architecture

The design is a compact, quasi-symmetric, all-spherical, seven-element lens-shutter wide-angle lens. The power sequence is:

$$
+\; +\; -\; + \; | \; \text{stop / shutter space} \; | \; +\; (-/+\ \text{cemented})
$$

The first group, G1, comprises L1–L4. It has a computed in-air group focal length of $+159.69$ mm at the patent scale. L1 and L2 form the main front positive collector pair. L3 is the principal front negative corrector. L4 completes the front group and helps set the ray geometry entering the diaphragm/shutter gap.

The second group, G2, comprises L5–L7. It has a computed in-air group focal length of $+150.97$ mm at the patent scale. L5 supplies almost all of the rear group’s positive power. L6 and L7 form a cemented negative-positive doublet whose combined focal length is approximately $+20{,}433$ mm at the patent scale, so the doublet is nearly afocal. Its function is correction rather than gross convergence.

The patent’s stated overall length is $L = 118.37$ mm at $f = 100$. The independently traced prescription gives $L = 118.336$ mm, the small difference being attributable to table rounding. Production scale gives a front-vertex-to-film distance of approximately $71.002$ mm at infinity focus.

The design is not retrofocus in the strict optical sense. At production scale the back focal distance is $44.452$ mm, while the effective focal length is $59.998$ mm, giving $\mathrm{BFD}/\mathrm{EFL} = 0.741$. The lens is also not a telephoto design because its total track is longer than its focal length, with $L/f \approx 1.18$.

## Element-by-Element Analysis

The focal lengths in this section are standalone in-air element focal lengths at the patent $f=100$ scale. Production-scale standalone focal lengths are $0.6$ times these values.

### L1 — Positive Meniscus, convex to object

$n_d = 1.83400$, $\nu_d = 37.34$. Glass: NBFD10 (HOYA), 834/373; S-LAH60V-class equivalent. $f = +119.6$ mm.

L1 is the front positive collector. Both radii are positive ($R_1 = +30.995$, $R_2 = +42.282$), so the element is a positive meniscus with its concave face toward the image side, matching the patent’s prose description of a first positive element with a concave image-end surface.

The high index lets L1 provide appreciable positive power without using a biconvex form. Because $\nu_d = 37.34$ is low for a positive element, L1 contributes substantial dispersion; it is not a crown element in the classical Abbe-number sense. Its chromatism is balanced primarily by the high-dispersion negative L3 and secondarily by the rear doublet.

### L2 — Positive Meniscus, convex to object

$n_d = 1.78590$, $\nu_d = 43.93$. Glass: NBFD11 (HOYA), 786/439; S-LAH51-class equivalent. $f = +115.4$ mm.

L2 is the second positive meniscus in the front group. The air gap behind L1 is only $d_2 = 0.16$ mm at the patent scale, so L1 and L2 behave like a closely separated positive pair. Splitting the front positive power between two menisci reduces the surface burden that would arise from a single stronger collector.

The NBFD11-class glass has a slightly higher Abbe number than L1’s NBFD10 glass, so it supplies positive power with less dispersion per unit power. Its repetition in L7 is part of the lens’s limited-glass-palette strategy.

### L3 — Negative Meniscus, convex to object

$n_d = 1.80518$, $\nu_d = 25.50$. Glass: FD60 (HOYA), 805/255; S-TIH6 equivalent. $f = -49.0$ mm.

L3 is the main negative element in the front group. Both surfaces have positive radii, but the rear surface is much steeper ($R_6 = +22.314$ versus $R_5 = +53.065$), giving net negative power.

The low Abbe number makes L3 the primary front-group achromatizing element. It counteracts the longitudinal chromatic contribution from L1, L2, and L4, and it supplies a large negative Petzval contribution. The air lens between L3 and L4 is controlled by the patent’s fourth condition, $(R_6 - R_7)/(R_6 + R_7)$, which is directed at field curvature.

### L4 — Positive Meniscus, convex to object

$n_d = 1.72342$, $\nu_d = 37.99$. Glass: BAFD8 (HOYA), 723/380; S-BAH28 equivalent. $f = +136.8$ mm.

L4 is the final positive meniscus before the stop and shutter space. Its curvatures are milder than those of the first three elements, and its computed focal length is weaker than L1 or L2. This is consistent with the patent’s first condition, $0.28 < f/f_4 < 2.55$, which governs spherical aberration, coma, and field curvature.

The corrected glass identification matters here. The patent pair $n_d = 1.72342$, $\nu_d = 37.99$ corresponds to HOYA BAFD8 at code 723/380, not to HOYA NBFD3. NBFD3 is an 805/396 glass and is not a match for L4.

### Diaphragm and shutter space

The diaphragm is fixed between L4 and L5. The patent does not give an exact stop split within $d_8$, but Fig. 1 places the diaphragm in that gap and the text states that this intergroup space accommodates a between-the-lens shutter. In the data file, the $d_8 = 11.48$ mm patent-scale air space is divided equally around the stop. At production scale this gives $3.444$ mm from L4 to the stop and $3.444$ mm from the stop to L5.

For the f/4 model, an entrance pupil radius of approximately $7.5$ mm corresponds to a physical stop semi-diameter of approximately $5.61$ mm at the chosen midpoint position.

### L5 — Positive Meniscus, concave to object

$n_d = 1.83400$, $\nu_d = 37.34$. Glass: NBFD10 (HOYA), 834/373; S-LAH60V-class equivalent. $f = +134.2$ mm.

L5 is the main positive element of the rear group. Both radii are negative ($R_9 = -52.783$, $R_{10} = -36.938$), producing a positive meniscus whose concavity faces the object side. It is a partial counterpart to L1 across the diaphragm and uses the same NBFD10 glass.

The patent’s second condition, $0 < f/f_5 < 1.80$, controls L5 power. Example 1 gives $f/f_5 = 0.745$, so L5 is strong enough to form the rear positive group but not so strong that it dominates the spherical aberration balance.

### L6 — Negative Meniscus, concave to object, cemented with L7

$n_d = 1.64769$, $\nu_d = 33.90$. Glass: E-FD2 class (HOYA), 648/338 nominal cross-reference, with patent $\nu_d = 33.90$. $f = -39.6$ mm.

L6 is the negative member of the rear cemented doublet. Its strongly curved front surface ($R_{11} = -24.232$) and nearly flat cemented interface ($R_{12} = -453.111$) give it substantial standalone negative power.

The glass should not be called EF2. HOYA E-F2 is a 620/363 glass and does not match the patent. The relevant HOYA cross-reference is E-FD2 at code 648/338, close to the patent’s 648/339 pair. The remaining $\nu_d$ difference is small enough to treat the identification as class-level rather than exact catalog identity.

### L7 — Positive Meniscus, concave to object, cemented with L6

$n_d = 1.78590$, $\nu_d = 43.93$. Glass: NBFD11 (HOYA), 786/439; S-LAH51-class equivalent. $f = +44.8$ mm.

L7 is the positive member of the cemented rear doublet. The common cemented radius is very weak ($R_{12}/R_{13} = -453.111$), while the final surface is much stronger ($R_{14} = -32.880$). Its standalone in-air power is therefore positive, but in the cemented assembly it largely balances L6.

The doublet focal length is approximately $+20{,}433$ mm at the patent scale, so $f/f_{67} = 0.00489$ from the independently traced prescription. The patent lists $0.0029$; because the doublet is almost afocal, this ratio is extremely sensitive to radius and index rounding. Both values have the same optical meaning: the L6–L7 doublet is a chromatic and field corrector, not a significant power group.

## Glass Identification and Selection

The corrected glass palette is:

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Corrected catalog identification | Code | Role |
|---|---:|---:|---|---|---|
| L1, L5 | 1.83400 | 37.34 | NBFD10 (HOYA), S-LAH60V-class equivalent | 834/373 | High-index positive menisci |
| L2, L7 | 1.78590 | 43.93 | NBFD11 (HOYA), S-LAH51-class equivalent | 786/439 | Positive menisci with lower dispersion than L1/L5 |
| L3 | 1.80518 | 25.50 | FD60 (HOYA), S-TIH6 equivalent | 805/255 | High-dispersion negative corrector |
| L4 | 1.72342 | 37.99 | BAFD8 (HOYA), S-BAH28 equivalent | 723/380 | Moderate positive power before stop |
| L6 | 1.64769 | 33.90 | E-FD2 class (HOYA) | 648/339 patent; 648/338 catalog class | Negative doublet member |

The earlier NBFD10/NBFD11 repetition is optically useful. L1/L5 repeat the same 834/373 high-index flint on opposite sides of the stop. L2/L7 repeat the 786/439 glass in the front collector pair and final doublet. This keeps the material palette small and supports symmetry-based cancellation of lateral color and coma.

No element in this design is an ED or anomalous-partial-dispersion element. The chromatic correction strategy is classical: positive high-index flints are balanced by a very high-dispersion negative front element and a local negative-positive cemented corrector at the rear.

## Focus Mechanism

The patent publishes only a single infinity-focus prescription. It does not provide variable spacing tables for inner focus, rear focus, or floating correction. The production GA645 uses autofocus, but the prescription evidence supports a unit-focus model for the data file: the optical block is treated as translating as a unit, so only the final back-focus distance changes relative to the film plane.

At production scale, the independently traced infinity BFD is $44.4518$ mm. Assuming the camera’s 0.7 m minimum focusing distance is measured from the film plane, exact finite-conjugate paraxial solving gives:

| State | Object distance from front vertex | BFD to film plane | Change from infinity |
|---|---:|---:|---:|
| Infinity | $\infty$ | 44.4518 mm | 0 mm |
| 0.7 m | 622.729 mm | 50.7215 mm | +6.2697 mm |

The previous thin-lens-style interpretation that compared a 65.6 mm image distance directly against the last-surface BFD is not valid, because the 65.6 mm value is measured from a principal-plane reference, not from the last lens surface. The corrected unit-focus extension is therefore approximately 6.27 mm, not approximately 21 mm.

## Aspherical Surfaces

There are no aspherical surfaces in Example 1. The patent provides no aspheric equation, no conic constants, and no aspheric coefficient tables for any of the numerical examples. The data file therefore uses `asph: {}`.

## Conditional Expressions

The six principal patent conditions and the two preferred all-meniscus conditions are satisfied by Example 1.

| Condition | Expression | Allowed range | Computed value | Status |
|---|---|---:|---:|---|
| (1) | $f/f_4$ | 0.28 to 2.55 | 0.7308 | Pass |
| (2) | $f/f_5$ | 0 to 1.80 | 0.7453 | Pass |
| (3) | $f/f_{67}$ | -1.15 to 0.65 | 0.0049 | Pass |
| (4) | $(R_6 - R_7)/(R_6 + R_7)$ | -0.55 to -0.17 | -0.4166 | Pass |
| (5) | $(R_{10} - R_{11})/(R_{10} + R_{11})$ | 0.03 to 0.31 | 0.2077 | Pass |
| (6) | $(R_{11} - R_{14})/(R_{11} + R_{14})$ | -0.45 to 0.10 | -0.1514 | Pass |
| (7) | $f/f_4$ preferred all-meniscus range | 0.28 to 1.36 | 0.7308 | Pass |
| (8) | $(R_6 - R_7)/(R_6 + R_7)$ preferred range | -0.65 to -0.28 | -0.4166 | Pass |

The patent text on condition (4) contains an OCR-prone denominator in some copies; the operative expression is $(R_6 - R_7)/(R_6 + R_7)$, as confirmed by the numerical value $-0.42$.

## Petzval Sum and Field Correction

Using the surface-by-surface Petzval expression $\sum \phi/(n n')$, where $\phi = (n' - n)/R$, the Example 1 prescription gives:

$$
\sum \frac{\phi}{n n'} = 0.0012953\ \mathrm{mm}^{-1}
$$

at the patent scale. The corresponding Petzval radius is approximately $772.0$ mm, or about $7.72 f$. At production scale, the Petzval radius scales to approximately $463.2$ mm.

L3 and L6 provide the two major negative-power corrections against the positive Petzval contributions from L1, L2, L4, L5, and L7. The patent aberration plots for Example 1 show astigmatism and distortion held to low levels at the stated 29.6° half-field.

## Data-File Scaling and Semi-Diameter Notes

The data file is scaled to production focal length by multiplying all patent radii and axial distances by $0.6$. The cemented interface listed as patent $R_{12} = R_{13} = -453.111$ with $d_{12} = 0$ is represented as one physical cemented interface labeled `12`; the duplicate zero-thickness surface is intentionally omitted.

The patent does not publish clear apertures or semi-diameters. The semi-diameters in the data file are therefore renderer estimates, not measured mechanical apertures. They were constrained by paraxial marginal/chief-ray tracing, the $sd/|R| < 0.90$ spherical limit, element front/rear SD ratio $\le 1.25$, positive edge thickness, and signed cross-gap sag clearance. The resulting values are intentionally conservative in the tightly spaced L2–L4 and L5–L6 regions.

## Verification Summary

All calculations below were recomputed from the Example 1 prescription, using the physical cemented L6/L7 interface once rather than refracting twice at the duplicate $R_{12}/R_{13}$ entry.

| Quantity | Independent calculation | Patent / expected value | Comment |
|---|---:|---:|---|
| EFL, patent scale | 99.9972 mm | 100.00 mm | Matches within table rounding |
| BFD, patent scale | 74.0863 mm | 74.12 mm implied by $L$ | Matches within table rounding |
| Total track, patent scale | 118.3363 mm | 118.37 mm | Matches within table rounding |
| EFL, production scale | 59.9983 mm | 60 mm | Scale factor $0.6$ |
| BFD, production scale | 44.4518 mm | — | Used in data file |
| Total track, production scale | 71.0018 mm | — | Used in data file |
| Front group focal length | +159.691 mm | — | Patent scale |
| Rear group focal length | +150.972 mm | — | Patent scale |
| Rear doublet focal length | +20,433 mm | nearly afocal | Patent condition (3) |
| Petzval sum | 0.0012953 mm$^{-1}$ | — | Surface-by-surface formula |
| Close-focus BFD at 0.7 m | 50.7215 mm | — | Unit-focus model |

## Design Context

This design is best understood as a compact medium-format lens-shutter wide-angle rather than as an SLR retrofocus lens. Its principal constraints are field coverage, a usable shutter/diaphragm gap, and short total length. The all-meniscus construction and the repeated glass pairs are conservative choices: they avoid aspherical manufacturing, keep the glass palette limited, and rely on curvature distribution and stop symmetry for aberration correction.

The design’s most distinctive feature is the near-afocal rear doublet. L5 supplies the rear group’s positive power, while L6/L7 handles chromatic and field correction with little net change to the system focal length. This is a practical way to keep the lens compact while preserving the leaf-shutter space required by the camera architecture.

## Sources

1. US Patent 5,548,447, Nobuaki Toyama, “Photographic Lens System,” granted August 20, 1996.
2. Fujifilm GA645 / GA645W Owner’s Manual, specifications section: 56 × 41.5 mm frame, Super EBC Fujinon 1:4 f=60 mm lens, six components / seven elements, 60° angle of view, 0.7 m minimum focus, and 52 mm filter diameter.
3. HOYA GROUP Optics Division, Glass Cross Reference Index. Used for HOYA glass-code identification and cross-vendor equivalents.
4. OHARA optical glass catalog and datasheets. Used only as cross-reference support for S-series equivalents, not as the primary identity when the HOYA code gives the closer match.
