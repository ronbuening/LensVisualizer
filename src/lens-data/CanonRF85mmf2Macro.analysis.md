# Canon RF 85mm f/2 Macro IS STM — Optical Analysis

**Patent:** US 2021/0072505 A1, First Numerical Example (Kobayashi, Canon Kabushiki Kaisha)  
**Priority:** JP 2019-161981, September 5, 2019 · **Published:** March 11, 2021  
**Inventor:** Kana Kobayashi, Utsunomiya-shi, Japan

---

## 1. Patent-to-Production Correspondence

The Canon RF 85mm f/2 Macro IS STM (model 4234C002, announced July 2020) is a moderate-speed short-telephoto prime with half-macro capability, designed for the Canon RF mount. Canon's published specifications list 12 elements in 11 groups, one UD (Ultra-low Dispersion) element, a minimum focusing distance of 0.35 m, a maximum magnification of 0.5× (1:2), a 67 mm filter thread, a 9-blade aperture diaphragm, and a front-focusing design driven by an STM stepping motor.

US 2021/0072505 A1 contains six numerical examples. **Example 1** — the First Numerical Example — is the design that matches the production lens:

| Parameter | Example 1 (patent) | Production spec |
|---|---|---|
| Elements / Groups | 12 / 11 | 12 / 11 |
| Design EFL | 82.45 mm | 85 mm (marketed) |
| Maximum aperture | F/2.06 | f/2 (marketed) |
| Half-field angle ω | 14.70° | 14.25° (from 28°30′ diagonal) |
| Image height | 21.64 mm | 21.64 mm (full-frame diagonal half) |
| Maximum magnification | 0.5× (β = −0.5) | 0.5× |
| UD elements | 1 (L3, nd = 1.497, vd = 81.5) | 1 UD |
| Focus extension at 0.5× | 27.0 mm (computed) | ~28 mm (measured) |
| Overall optical track | 104.87 mm | — (barrel length 90.5 mm; not directly comparable) |

Note: Example 2 (the Second Numerical Example) has only 9 elements in 8 groups with an f/1.86 aperture — a different, faster design variant that does not correspond to the production lens.

The slight mismatch in marketed vs. design focal length (85 mm vs. 82.45 mm) is standard practice; Canon rounds to the nearest conventional focal length for marketing purposes.


## 2. System Architecture

The optical system divides into two principal groups:

**Front lens group L1** (surfaces 1–12, 6 elements in 5 groups): Positive refractive power. Contains the aperture stop. Moves as a single unit during focusing. EFL = +66.73 mm.

**Rear lens group L2** (surfaces 13–24, 6 elements in 6 groups): Negative refractive power. Fixed during focusing. Contains three negative lenses (L7, L10, L12) and three positive lenses (L8, L9, L11), with net negative power. The patent requires "at least two negative lenses and a positive lens" in the rear group (¶0030); this design exceeds that minimum. EFL = −165.06 mm.

The system uses a positive-front / negative-rear power distribution — the same architectural concept as a telephoto — with the total track ratio DL/f = 1.272. Since this ratio exceeds unity, the lens is not a telephoto in the strict optical sense (a true telephoto has DL/f < 1, meaning the physical length is shorter than the focal length). The patent itself describes this architecture as "telephoto type" (¶0039), referring to the power distribution rather than the compactness criterion. The rear group's negative power does compress the back focal distance significantly: the BFD of 17.60 mm is only 21% of the focal length. This BFD is shorter than the Canon RF mount's 20.0 mm flange distance, meaning L12 protrudes past the lens mount plane into the camera body — a characteristic advantage of mirrorless mounts that allows the designer to place negative correcting elements closer to the sensor for improved telecentricity and field flatness.

### Sub-group structure within L1

The aperture stop (surface 9) divides the front group into two optical subsystems:

**L1a** (surfaces 1–8, pre-stop): Four singlet elements, EFL = +291.6 mm. Weakly positive as a group, primarily responsible for initial convergence of the on-axis beam before the stop.

**L1b** (surfaces 10–12, post-stop): One cemented doublet, EFL = +55.1 mm. Strongly positive, providing the majority of the system's converging power. The ratio f(L1a)/f(L1b) = 5.30, indicating that the post-stop doublet carries roughly five times the refractive power of the pre-stop group.


## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** The patent lists no aspherical coefficient table for Example 1, and Canon's published specifications do not mention aspherical elements — a feature Canon consistently advertises when present (as in the RF 50mm f/1.2L USM or RF 85mm f/1.2L USM).

Achieving good correction in a 12-element, all-spherical design at f/2 with half-macro magnification is noteworthy. The lens relies instead on a generous element count, careful glass selection (including one UD element and one ultra-high-index niobium phosphate element), and the aberration-balancing architecture of the front-positive / rear-negative group structure to control the Petzval sum, spherical aberration, and chromatic aberration across the full focus range.


## 4. Element-by-Element Analysis

### 4.1 Element Table

| Element | Surfaces | nd | vd | Shape | fl (mm) | Glass ID |
|---|---|---|---|---|---|---|
| L1 | 1–2 | 1.60311 | 60.6 | Positive meniscus (convex→obj) | +200.6 | S-BSM14 / N-SK14 |
| L2 | 3–4 | 1.60311 | 60.6 | Positive meniscus (convex→obj) | +200.8 | S-BSM14 / N-SK14 |
| L3 | 5–6 | 1.49700 | 81.5 | Positive meniscus (convex→obj) | +101.5 | S-FPL51 **(UD)** |
| L4 | 7–8 | 1.68893 | 31.1 | Biconcave negative | −43.7 | S-TIM28 / FD60 |
| L5 | 10–11 | 1.84666 | 23.8 | Negative meniscus (convex→obj) | −95.1 | S-TIH53 |
| L6 | 11–12 | 1.90043 | 37.4 | Biconvex positive | +35.1 | S-LAH58 |
| L5+L6 | 10–12 | — | — | Cemented doublet | +55.1 | — |
| L7 | 13–14 | 1.72047 | 34.7 | Biconcave negative | −45.6 | S-TIH4 |
| L8 | 15–16 | 1.80400 | 46.5 | Biconvex positive | +85.4 | TAFD30 / N-LASF44 |
| L9 | 17–18 | 1.92286 | 20.9 | Positive meniscus (concave→obj) | +68.3 | S-NPH2 |
| L10 | 19–20 | 1.83400 | 37.2 | Biconcave negative | −34.6 | S-LAH55 |
| L11 | 21–22 | 1.83481 | 42.7 | Biconvex positive | +35.6 | S-LAH65 |
| L12 | 23–24 | 1.84666 | 23.8 | Negative meniscus (concave→obj) | −63.3 | S-TIH53 |

All focal lengths are thick-lens, standalone-in-air values. Glass identifications are exact catalog matches (Δnd < 0.001, Δvd < 0.1). Where two names are listed, the first is OHARA and the second is the Schott or HOYA equivalent; either may be the actual production glass. Canon may source from multiple suppliers or use proprietary melts with matching optical constants. Notably, L8 has no exact OHARA catalog match — HOYA TAFD30 (nd = 1.80400, vd = 46.57) is the closest, suggesting Canon may use HOYA glass or an in-house equivalent for this element.

### 4.2 Element Roles

**L1 (S-BSM14 / N-SK14, positive meniscus, fl = +200.6 mm):** First element, positioned closest to the object. Provides gentle positive power to begin converging the on-axis beam. Its weak curvature and moderate refractive index keep surface contributions to spherical aberration low. The nearly-flat rear surface (R2 = +2010 mm) minimizes off-axis coma at the extreme field edge. As a barium silicate crown, it offers good chemical durability for the front-exposed position.

**L2 (S-BSM14 / N-SK14, positive meniscus, fl = +200.8 mm):** Second element, same glass as L1. Continues the gentle convergence begun by L1. The use of identical glass in L1 and L2 simplifies manufacturing logistics. Its meniscus form with both radii positive (R1 = +61.5, R2 = +122.7 mm) keeps the element concentric around the incoming beam, minimizing oblique aberrations across the field.

**L3 (S-FPL51, positive meniscus, fl = +101.5 mm) — UD element:** The sole UD (Ultra-low Dispersion) element. S-FPL51 is a fluorophosphate crown with anomalous partial dispersion (positive APD; the Pg,F value lies well above the normal glass line). This element carries roughly twice the refractive power of L1 or L2, providing the strongest positive contribution in the pre-stop group. Its low dispersion (vd = 81.5) and anomalous dispersion characteristics enable simultaneous correction of axial chromatic aberration and secondary spectrum. Paired with the high-dispersion negative L4 immediately behind it, L3 forms the primary achromatic pair of the pre-stop subsystem.

**L4 (S-TIM28 / FD60, biconcave negative, fl = −43.7 mm):** The sole negative element in L1a, and the strongest element (by refractive power) in the pre-stop group. S-TIM28 is a titanium medium flint with moderate-to-high dispersion (vd = 31.1), making it the chromatic counterpart to L3. Its biconcave form generates strong negative spherical aberration to partially balance the positive contributions accumulated by L1–L3. Additionally, its negative Petzval contribution combats the field curvature introduced by the three preceding positive meniscus elements. The relatively large air gap following L4 (d8 = 4.90 mm) separates it from the aperture stop and provides design freedom for controlling the pupil aberrations.

**L5+L6 (S-TIH53 / S-LAH58, cemented doublet, fl = +55.1 mm):** The only cemented element in the entire system, positioned immediately after the aperture stop. L5 is a negative meniscus of extremely high dispersion flint (nd = 1.847, vd = 23.8, fl = −95.1 mm individually), and L6 is a biconvex positive of dense lanthanum flint (nd = 1.900, vd = 37.4, fl = +35.1 mm individually — the second-highest refractive index in the system after L9). Together they form a powerfully converging doublet that provides the dominant positive refractive power of the front group.

This doublet serves multiple critical roles. Its position immediately after the stop means it operates at the narrowest beam diameter, keeping the element physically small despite its strong power. The very high index of L6 (nd = 1.900) allows strong curvature at the cemented junction (R = 46.967 mm) while maintaining manageable ray angles, correcting higher-order spherical aberration generated by the preceding elements. The Δvd between L5 and L6 (~13.6) provides the chromatic correction needed for the post-stop converging beam. The patent specifically notes (¶0042) that having "at least one positive lens and one negative lens at the image side of the aperture stop" in the front group facilitates correction of spherical aberration and field curvature changes during focusing.

**L7 (S-TIH4, biconcave negative, fl = −45.6 mm):** The first element of the rear group L2 and the lens element F described in the patent. Its position at the front of the fixed rear group is specifically called out (¶0040) as preferring "a lens element F having a negative refractive power closest to an object in the rear lens group." This negative singlet receives the converging beam from L1 and sharply reduces its convergence, nearly collimating the beam before it enters the remaining rear elements. This suppresses changes in off-axis aberrations (field curvature, distortion) during the large focus excursion from infinity to 0.5× magnification. Its biconcave form also generates strong negative Petzval contribution.

**L8 (TAFD30 / N-LASF44, biconvex positive, fl = +85.4 mm):** A lanthanum dense flint element providing positive power in the rear group. Its nd/vd combination (1.804/46.5) places it in the high-index, moderate-dispersion region of the glass map, providing useful converging power without excessive chromatic contribution. Together with L9, it helps maintain the Petzval balance while keeping the beam collimated enough to traverse the remaining air gaps toward the rear of the lens.

**L9 (S-NPH2, positive meniscus concave→object, fl = +68.3 mm):** A niobium phosphate glass with the highest refractive index in the system (nd = 1.923) and the lowest Abbe number (vd = 20.9). S-NPH2 exhibits anomalous partial dispersion, and its extreme dispersion makes it a potent chromatic corrector when paired with the UD element L3 across the system. Despite being a positive meniscus, its concave-toward-object orientation and high index allow it to introduce strong higher-order aberration contributions that balance those from the front group, particularly at close focus distances.

**L10 (S-LAH55, biconcave negative, fl = −34.6 mm):** The strongest negative element in the system by focal length. Its symmetric biconcave form (R1 = −57.965, R2 = +57.965 mm — perfectly equal and opposite radii) is unusual and noteworthy: this bending factor of exactly q = 0 eliminates the shape-dependent coma contribution, leaving only the conjugate-dependent term. At the operational conjugate within the rear group, this results in very low residual coma from this element, making it function primarily as a Petzval corrector and spherical aberration generator. The equal-radius biconcave form is a classic design choice when the designer wants strong negative power with minimal off-axis asymmetric aberrations.

**L11 (S-LAH65, biconvex positive, fl = +35.6 mm):** The strongest positive singlet in the system and the element identified in the patent as Gp — the positive lens adjacent to Gn (L12) at the object side (¶0048). The patent's conditional expression (7) states f2p/f = 0.431, confirmed by computation. This element provides the strong positive power needed near the image plane to correct magnification chromatic aberration and distortion aberration. Its biconvex form with substantial thickness (d = 9.02 mm) introduces significant principal plane separation, which the designer exploits to fine-tune the exit pupil position and telecentricity for the mirrorless sensor.

**L12 (S-TIH53, negative meniscus concave→object, fl = −63.3 mm):** The final glass element before the image plane, identified in the patent as Gn — the negative lens closest to the image (¶0034). It shares the same glass as L5 (S-TIH53, nd = 1.847, vd = 23.8). Its position close to the image plane (Dn/DL = 0.168) means it operates in a region where off-axis rays are spread apart and the chief ray height is near-maximum, making it highly effective for correcting field curvature (through its negative Petzval contribution) and controlling the exit angle of marginal field rays onto the sensor. The patent constrains Dn/DL < 0.23 (inequality 2) to ensure the off-axis flux remains high enough at this element for effective correction.


## 5. Glass Selection Strategy

The 12 elements use ten distinct glass types spanning a wide range of the nd–vd diagram:

| Glass | nd | vd | Category | Elements |
|---|---|---|---|---|
| S-FPL51 | 1.497 | 81.5 | Fluorophosphate crown (UD) | L3 |
| S-BSM14 / N-SK14 | 1.603 | 60.6 | Barium silicate crown | L1, L2 |
| S-TIM28 / FD60 | 1.689 | 31.1 | Titanium medium flint | L4 |
| S-TIH4 | 1.720 | 34.7 | Titanium heavy flint | L7 |
| TAFD30 / N-LASF44 | 1.804 | 46.5 | Lanthanum dense flint | L8 |
| S-LAH55 | 1.834 | 37.2 | Lanthanum heavy flint | L10 |
| S-LAH65 | 1.835 | 42.7 | Lanthanum heavy flint | L11 |
| S-TIH53 | 1.847 | 23.8 | Titanium heavy flint | L5, L12 |
| S-LAH58 | 1.900 | 37.4 | Lanthanum heavy flint | L6 |
| S-NPH2 | 1.923 | 20.9 | Niobium phosphate heavy flint | L9 |

The strategy follows a clear pattern: the front pre-stop group uses conventional, cost-effective crowns (S-BSM14 / N-SK14) for the outer elements and the premium UD glass (S-FPL51) for secondary spectrum correction, paired with a single titanium flint (S-TIM28) for achromatization. The post-stop doublet and rear group escalate to higher-index lanthanum and niobium glasses, where the increased refractive power per surface permits stronger aberration correction with fewer elements.

Two glasses with anomalous partial dispersion are present:

- **S-FPL51** (L3): Strong positive APD. Canon's designation: UD (Ultra-low Dispersion). The fluorophosphate crown family lies well above the normal Pg,F line, enabling effective secondary spectrum correction when paired with high-dispersion flints.

- **S-NPH2** (L9): Niobium phosphate heavy flint with known positive APD. The Pg,F value for S-NPH2 also deviates from the normal line, complementing S-FPL51 for apochromatic correction across the system.


## 6. Focusing Mechanism

The lens uses **unit focusing**: the entire front group L1 (surfaces 1–12, containing 6 elements in 5 groups plus the aperture stop) translates forward as a rigid unit along the optical axis. The rear group L2 remains fixed relative to the image plane.

The single variable air gap is d12 — the spacing between the rear surface of the cemented doublet L5+L6 and the front surface of L7:

| Focus condition | β (magnification) | d12 (mm) | Extension from ∞ |
|---|---|---|---|
| Infinity | 0 | 2.52 | — |
| Near (β = −0.02) | −0.02 | 3.60 | +1.08 mm |
| Close (β = −0.5) | −0.50 | 29.52 | +27.0 mm |

The 27.0 mm extension at maximum magnification closely matches the ~28 mm measured by reviewers on the production lens, providing additional confidence in the Example 1 identification.

This unit-focus approach, where the entire front group including the aperture stop extends together, is mechanically straightforward and well-suited to the STM stepping motor drive. The trade-off is that the moving mass is substantial (6 elements), which partly explains why reviewers note that focus speed on long-distance changes is slower than USM-driven alternatives. Canon addresses this practically with the three-position focus limiter switch (Full / 0.5 m–∞ / 0.35–0.5 m) to reduce travel time in typical use scenarios.

The patent's analysis of aberration stability during focusing reveals the design rationale for the rear group's composition. With the entire front group moving 27 mm during focus excursion to 0.5×, the convergence angle of the beam entering the fixed rear group changes dramatically. The rear group's configuration — beginning with negative element F (L7), followed by a positive-positive-negative-positive-negative power sequence (L8–L12) — provides the aberration resilience needed to maintain image quality across this large focus range. The patent specifically notes (¶0030) that including at least two negative lenses and one positive lens in the fixed rear group allows it to "cancel the spherical aberration and the positive Petzval sum generated by the front lens group," suppressing the aberration fluctuation during focusing.


## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computed from the prescription yields:

**Σ(φ / n·n′) = +0.00166 mm⁻¹**

This corresponds to a Petzval field curvature radius of approximately −601 mm. For context, a single thin lens of equivalent focal length (82.5 mm) and average refractive index (~1.65) would have a Petzval sum of approximately 0.0074 mm⁻¹, so this 12-element design reduces the Petzval sum by a factor of roughly 4.4×.

The residual Petzval sag at the full-field corner (image height 21.64 mm) is approximately 0.39 mm, which substantially exceeds the geometric depth of focus at f/2 (±0.060 mm for a 30 µm circle of confusion). This means the Petzval correction alone is insufficient for flat-field imaging — the design relies on carefully balanced astigmatic contributions to flatten the actual best-focus surface. This is visible in the patent's aberration plots (Figs. 2A–2C), where the sagittal (ΔS) and meridional (ΔM) field curves are controlled to approximately ±0.2 mm at full field, well within the practical tolerance for portraiture and close-up work. The combination of moderate Petzval correction and astigmatic field-flattening is a standard approach in telephoto-architecture portrait lenses, and its effectiveness here across the full focus range from infinity to 0.5× magnification is a testament to the rear group's corrective capability.


## 8. Image Stabilization

The production lens incorporates optical image stabilization (up to 5 stops, or 8 stops when combined with R5/R6 IBIS) with Hybrid IS capability that compensates for both angular and shift-type shake during macro shooting. The patent US 2021/0072505 A1 does not discuss the IS mechanism — this is standard practice for Canon, as IS optics are typically covered in separate patent families. Since the production lens's 12 elements in 11 groups matches the patent's element count exactly, the IS function is implemented by decentering one or more of the existing elements perpendicular to the optical axis during stabilization, rather than by adding additional IS-specific elements.

Based on the lens architecture, the most probable IS group candidates are elements within the fixed rear group L2, where a shift perpendicular to the axis can redirect the image without conflicting with the focus mechanism. The Hybrid IS capability — compensating for both angular tilt and translational shift — is particularly important for macro work, where at 0.5× magnification the translational component of camera shake dominates over angular tilt.


## 9. Patent Conditional Expressions

The patent defines eleven conditional inequalities governing the design space. All values for Example 1 are verified by independent computation:

| Inequality | Expression | Computed | Patent Table | Range |
|---|---|---|---|---|
| (1) | \|f1/f2\| | 0.404 | 0.404 | 0.01–0.70 |
| (2) | Dn/DL | 0.168 | 0.168 | 0.00–0.23 |
| (3) | \|f/f2\| | 0.500 | 0.500 | 0.00–1.00 |
| (4) | \|β\| | 0.500 | 0.500 | > 0.30 |
| (5) | f1/f | 0.809 | 0.809 | 0.30–1.00 |
| (6) | Da/DL | 0.693 | 0.693 | 0.30–0.90 |
| (7) | f2p/f | 0.431 | 0.431 | 0.00–0.80 |
| (8) | f1a/f1b | 5.295 | 5.296 | 0.05–8.00 |
| (9) | skd/DL | 0.168 | 0.168 | 0.01–0.40 |
| (10) | \|fn\|/f | 0.768 | 0.768 | 0.05–1.20 |
| (11) | DL/f | 1.272 | 1.272 | 0.95–1.50 |

Note on inequality (3): The patent's printed formula (¶0043) writes this as |f1/f2| < 1.00, which is identical to inequality (1) with wider bounds. However, the description in ¶0044 states it "defines the relationship between the focal length f2 of the rear lens group L2 and the focal length f of the optical system OL," and the table value of 0.500 matches |f/f2| = 82.45/165.06 = 0.500, not |f1/f2| = 0.404. The formula as printed appears to contain a typographical error; the intended expression is |f/f2|.


## 10. Comparison with the EF 85mm f/1.8 USM

The Canon EF 85mm f/1.8 USM (1992) uses a simpler design with 9 elements in 7 groups and no special glass elements. The RF 85mm f/2 Macro IS STM adds three elements and four additional air-spaced groups, with the added complexity directed toward three goals absent from the older lens: half-macro focusing capability (0.5× vs. 0.13×), optical image stabilization (elements for IS decentering), and improved field flatness for digital sensors (the additional negative elements in the rear group provide telecentricity and Petzval correction that film-era designs did not require). The EF 85mm uses rear focusing (the front element neither rotates nor extends), whereas the RF 85mm uses front-group extension — a trade Canon accepted to accommodate the much larger focus excursion needed for 0.5× magnification. The 1/3-stop sacrifice in maximum aperture (f/2 vs. f/1.8) is a deliberate trade to accommodate the extended focus range without excessive aberration degradation at close distances.


## 11. Summary of Key Design Characteristics

The Canon RF 85mm f/2 Macro IS STM, as represented by Example 1 of US 2021/0072505 A1, is a conservatively designed, all-spherical, 12-element prime with positive-front / negative-rear power distribution and the following distinguishing features:

1. **No aspherical surfaces.** Correction is achieved entirely through element count, glass diversity, and the front-positive / rear-negative power distribution.

2. **One UD element** (L3, S-FPL51 fluorophosphate crown) paired with high-dispersion flints for chromatic correction and secondary spectrum suppression.

3. **Unit focusing** of the entire 6-element front group, with 27 mm of extension at 0.5× magnification. The STM motor drives the group directly.

4. **Fixed 6-element rear group** with negative total power, designed to absorb the aberration variation caused by the large focus excursion. The rear group's three negative lenses (L7, L10, L12) and three positive lenses (L8, L9, L11) provide the Petzval and spherical aberration compensation that the patent identifies as essential for maintaining performance across the focus range.

5. **Controlled Petzval sum** (0.00166 mm⁻¹, reduced ~4.4× from an equivalent singlet) combined with astigmatic field-flattening to ensure flat-field performance suitable for macro work on digital sensors.

6. **Integrated IS capability** using elements within the fixed rear group, supporting 5-stop angular stabilization and hybrid IS for macro-range translational shake compensation.

7. **Nine-blade aperture diaphragm** producing near-circular bokeh highlights at moderate apertures.

---

*Analysis based on US 2021/0072505 A1, Example 1; Canon USA product specifications; and independent paraxial ray trace verification. Glass identifications are best-match catalog equivalents from OHARA, HOYA, and Schott — Canon may use proprietary designations or alternative suppliers with matching optical constants. IS group identification is inferred from the architectural constraints; the specific IS element(s) are not disclosed in this patent.*
