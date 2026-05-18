# Fujifilm Fujinon 18.5 mm f/2.8 (Fujifilm X70) — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2017/0075089 A1 (United States Patent Application Publication)
**Application Number:** 15/239,383
**Filed:** August 17, 2016
**Published:** March 16, 2017
**Priority:** JP 2015-179758, September 11, 2015
**Inventors:** Ryosuke Nagami, Takashi Suzuki (Saitama-shi, Japan)
**Applicant:** FUJIFILM Corporation, Tokyo (Japan)
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 1 (Tables 1–3, Figures 1 and 5)

The patent discloses four worked examples of a compact wide-angle imaging lens intended for digital cameras with large imaging sensors (APS-C to Four Thirds format). Example 1 is identified as the prescription most likely implemented in the production Fujifilm X70 based on the following convergent evidence:

1. **Element and group count.** The Fujifilm X70 lens is marketed as 7 elements in 5 groups. Example 1 contains exactly 7 glass elements arranged in 5 air-separated groups (two cemented doublets count as one air-separated group each, plus three singlets). The patent's own functional grouping into G1/G2/G3 is a higher-level abstraction; the air-separated count matches the manufacturer's published specification.
2. **Aspherical element count.** Fujifilm specifies two aspherical glass-molded elements. Example 1 has four aspherical surfaces distributed across exactly two elements (L23 and L31), each aspherical on both sides.
3. **Focal length.** The computed EFL of Example 1 is 19.129 mm, closely matching the marketed 18.5 mm focal length (design-to-marketing deviations of ~3% are routine in compact camera lenses, where the marketed value is typically rounded down).
4. **Maximum aperture.** Example 1 yields f/2.88, consistent with the marketed f/2.8.
5. **Field angle.** The patent's full angle of view is 72.8°. For a 23.6 × 15.6 mm APS-C sensor (half-diagonal ≈ 14.14 mm), the computed half-field angle from the design EFL is 36.4°, giving 2ω ≈ 72.8°, confirming APS-C coverage.
6. **Focus mechanism.** The patent describes unit focusing by integral movement of G1 + Stop + G2 with G3 fixed (¶0024, ¶0074). The X70's non-extending lens barrel and very fast startup are consistent with this compact internal-shift architecture.
7. **Patent timing.** Priority was filed September 11, 2015, approximately four months before the X70's public announcement in January 2016 — a typical lead time for production patent filings at Fujifilm.
8. **Camera form factor.** The patent's figures 9A/9B illustrate a compact camera without a reflex finder (¶0091), matching the X70's body style. The patent text explicitly discusses compatibility with APS-format sensors (¶0003).

Examples 2–4 represent alternative design variants with different field angles (80.0°, 73.2°, 77.6°) and focal lengths (17.22, 19.15, 16.98 mm), none of which match the X70's marketed specifications as closely as Example 1.


## Optical Architecture

The design is a three-group positive–positive–positive wide-angle lens arranged as: a positive first group G1, an aperture stop, a positive second group G2, and a positive third group G3. With all three groups positive and a BFD-to-EFL ratio of only 0.27 (back focus far shorter than the focal length), the overall power distribution creates telephoto-like compression — the total track is just 1.43× the EFL — well suited to a fixed-lens compact camera that needs no mirror-box clearance. The widely separated positive rear group G3 controls field curvature and exit-ray telecentricity for sensor compatibility.

The lens comprises 7 elements in 5 air-separated groups (3 functional groups per the patent's own labeling):

- **G1** (f = +21.1 mm): Cemented doublet of a negative meniscus (L11) and a positive meniscus (L12). Serves as the primary convergent group and performs first-order chromatic correction.
- **G2** (f = +62.1 mm): A cemented doublet of a biconcave negative (L21) and a biconvex positive (L22), followed by an air-separated negative meniscus singlet (L23, both surfaces aspherical). Provides secondary chromatic correction and aberration balancing around the stop.
- **G3** (f = +128.2 mm): A biconcave negative singlet (L31, both surfaces aspherical) followed by a biconvex positive singlet (L32). Acts primarily as a field flattener and controls the exit-ray telecentric angle for sensor compatibility.

All three functional groups carry positive power. Distributing the total positive power across G1, G2, and G3 rather than concentrating it in a single group reduces individual surface curvatures and suppresses higher-order aberrations — a strategy the patent describes as advantageous for simultaneous miniaturization and wide-angle coverage (¶0050). The ratio f1/f2 = 0.340 satisfies the patent's Conditional Formula (1): 0 < f1/f2 < 2, ensuring a balanced power split between the two groups flanking the aperture stop (¶0051–0054).

The total track length is 27.41 mm, yielding a TL/(f·tan ω) ratio of 1.95 — well under the patent's upper limit of 2.4 for a "compact" design (¶0075). The sum of glass thicknesses occupies 50.4% of the total track (Σd/TL = 0.504), indicating a tightly packed optical system with minimal wasted air space.


## Element-by-Element Analysis

### L11 — Negative Meniscus (G1, front element)

nd = 1.59270, νd = 35.31. Glass: S-TIH1 (OHARA) — titanium-containing flint. f = −13.3 mm.

L11 is a negative meniscus with both surfaces convex toward the object (R₁ = +33.667 mm, R₂ = +6.365 mm). The more steeply curved rear surface dominates the element's net negative power. At only 0.500 mm center thickness, it is the thinnest element in the system.

As the first surface the incoming light encounters, L11 begins bending off-axis ray bundles inward. Its negative power introduces barrel-type field curvature and negative distortion that partially pre-compensate the pincushion contribution of the much stronger positive L12 behind it. The relatively low refractive index (1.593) and moderate dispersion (νd = 35.3) place S-TIH1 in the TIH (titanium-containing flint) family — a cost-effective choice for a front element that sees moderate ray heights and does not need the chromatic leverage of a high-index glass.

L11 is cemented directly to L12, eliminating one air–glass interface (two Fresnel reflections avoided) and simplifying alignment. The cemented interface at R₂ = +6.365 mm is the most steeply curved surface in G1 and carries the heaviest refractive burden in the doublet.

### L12 — Positive Meniscus (G1, rear element of cemented doublet)

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA) — high-index lanthanum glass. f = +8.0 mm.

L12 is the power engine of G1, contributing the bulk of the group's positive focal length (+21.1 mm). Its convex front surface is the cemented junction with L11 (R = +6.365 mm), and its weakly curved rear surface exits at R = +51.962 mm. The meniscus shape — convex toward the object — keeps the angles of incidence moderate on both surfaces despite the high power, which limits coma and higher-order spherical aberration.

S-LAH58 is one of the highest-index glasses in the OHARA LAH (lanthanum) family (nd = 1.883), chosen specifically for its combination of high index and moderate Abbe number (νd = 40.76). The high index allows L12 to achieve strong positive power with relatively gentle surface curvatures, suppressing surface-induced aberrations. The moderate dispersion, paired with the lower-index, lower-νd flint in L11, creates an effective achromatic correction across the cemented interface. Although both glasses have Abbe numbers below 50 (placing them in the "flint" region by classical convention), OHARA's LAH family occupies a distinct position in the glass map — high index with intermediate dispersion — enabling achromatic correction through a large refractive-index step at the cemented junction rather than through a wide Abbe-number spread.

S-LAH58 is used three times in this design (L12, L22, L32), indicating the designers relied heavily on this glass for its optical properties and likely its availability and moldability in Fujifilm's manufacturing process.

### L21 — Biconcave Negative (G2, front element of cemented doublet)

nd = 1.69895, νd = 30.13. Glass: S-TIH53 (OHARA) — titanium-containing flint. f = −6.5 mm.

L21 opens the second functional group with its concave-toward-object front surface (R = −10.752 mm). The patent notes that having the most object-side surface of G2 be concave prevents off-axis rays from being refracted to an extreme degree, suppressing aberration generation (¶0046). The biconcave shape gives L21 the strongest negative power of any element in the design (f = −6.5 mm), establishing a strong negative–positive power cancellation with the cemented L22 that follows.

S-TIH53 is a dense titanium flint with low Abbe number (νd = 30.13), making it the most dispersive glass in the system. Paired with the high-index, moderate-dispersion S-LAH58 of L22 across the cemented interface, this creates a potent achromatic doublet that addresses longitudinal chromatic aberration on the image side of the stop. The patent explains that the first two lenses of G2 (L21 + L22) are specifically tasked with correcting longitudinal chromatic aberration (¶0045).

### L22 — Biconvex Positive (G2, rear element of cemented doublet)

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = +5.7 mm.

L22 is the strongest positive element in the entire lens (f = +5.7 mm) and forms the second half of the G2 cemented doublet. Its biconvex shape (R₁ = +8.040 mm, R₂ = −10.931 mm) concentrates strong positive power immediately after the aperture stop, where marginal ray heights are moderate and the ratio of chief-ray height to marginal-ray height is favorable for controlling both spherical aberration and coma simultaneously.

The cemented interface between L21 and L22 (at R = +8.040 mm) is the surface with the largest refractive-index step in the design: Δnd = 1.88300 − 1.69895 = 0.18405. This large index difference across a steeply curved cemented surface provides powerful chromatic leverage — the achromatic correction here does not rely on extreme curvatures or exotic glasses, but rather on the magnitude of the index difference at the junction. The patent specifies that the rear surface of G2 should be convex (¶0046), which corresponds to the rear of L22 (R₂ = −10.931 mm, convex toward the image side). This convex exit surface moderates the refraction of off-axis rays leaving G2, suppressing field-dependent aberrations (¶0046).

The G2 cemented doublet (L21 + L22 combined) has a net focal length of +21.6 mm — almost identical to G1's focal length of +21.1 mm. This near-symmetry of positive power about the aperture stop helps suppress odd-order aberrations (coma, distortion, lateral chromatic aberration) by exploiting the cancellation that occurs when similar power distributions exist on both sides of the stop.

### L23 — Negative Meniscus with Two Aspherical Surfaces (G2, trailing singlet)

nd = 1.56867, νd = 58.50. Glass: unmatched moldable crown (no catalog match). f = −37.3 mm.

L23 is the first of two aspherical elements in the design. Both of its surfaces (S8 and S9) carry aspherical profiles defined by the patent's odd+even polynomial aspheric formula with 18 coefficients each (A3 through A20). The element has a meniscus shape in the paraxial region, with both surfaces concave toward the object (R₈ = −6.793 mm, R₉ = −10.816 mm).

L23 occupies a critical position as the most image-side element of G2, separated from the L21/L22 cemented doublet by a 1.170 mm air gap. At this location, principal ray heights for off-axis field angles are increasing as the beam diverges toward G3. The patent identifies this element as responsible for correcting lateral chromatic aberration and astigmatism (¶0045): the negative power at rising chief-ray heights creates a chromatic lever arm for lateral color, while the aspherical surfaces control the progressive astigmatic departure that would otherwise grow rapidly at the 72.8° full field angle.

The glass (nd = 1.56867, νd = 58.50) does not match any standard entry in the OHARA, HOYA, Schott, or CDGM catalogs within normal transcription tolerance. This is consistent with a proprietary or specialty moldable glass formulated for glass-molded aspherics (GMo). Its moderate index and low dispersion (crown-type) are typical of moldable compositions optimized for thermal stability during precision molding.

### L31 — Biconcave Negative with Two Aspherical Surfaces (G3, front element)

nd = 1.68201, νd = 31.43. Glass: unmatched moldable flint (no catalog match). f = −34.2 mm.

L31 is the second aspherical element and carries the most extreme aspherical departure in the design. In the paraxial region, the element is biconcave (R₁₀ = −39.362 mm concave toward object; R₁₁ = +58.138 mm concave toward image), but the aspherical polynomial transforms the peripheral profile dramatically. At estimated semi-diameters of approximately 6.2 mm (S10) and 6.5 mm (S11), the aspherical departures reach approximately 1100 µm and 120 µm respectively relative to their paraxial sphere equivalents — departures that completely dominate the surface shape at the periphery.

This extreme aspherization is the hallmark of modern compact camera field-flattener designs. L31 sits far from the aperture stop (separated by the full 4.493 mm air gap that serves as the focus travel space), where chief-ray heights are at their maximum. At these heights, the aspherical profiles directly sculpt the wavefront to correct field curvature, astigmatism, and distortion simultaneously — tasks that would require multiple additional spherical elements in a conventional design. The patent specifically notes that aspherical surfaces in G3 prevent off-axis rays from being refracted excessively, facilitating compact wide-angle correction (¶0049).

Like L23, the glass (nd = 1.68201, νd = 31.43) does not match any standard catalog entry. The higher index and lower Abbe number (flint-type) compared to L23 suggest a different moldable composition optimized for a different part of the glass map. The patent's Conditional Formula (4) requires Nd6 ≤ 1.75 (where Nd6 is the refractive index of the most object-side negative lens in G3), and L31's value of 1.682 comfortably satisfies this bound. Keeping the index moderate prevents the negative power of L31 from overwhelming G3's net positive power (¶0064).

### L32 — Biconvex Positive (G3, rear element)

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = +29.1 mm.

L32 is the final optical element before the sensor assembly. Its biconvex shape (R₁₂ = +124.770 mm, R₁₃ = −31.869 mm) provides the strong positive power needed to bring the diverging beam from L31 to focus while maintaining quasi-telecentric exit angles for compatibility with the APS-C sensor's microlens array. The rear surface (R₁₃ = −31.869 mm) is far more steeply curved than the front, concentrating most of the element's power on the exit side — a design choice that helps control the chief-ray angle of incidence on the sensor.

At 4.320 mm center thickness, L32 is the thickest element in the system. The substantial glass path is a consequence of the large clear aperture required at this position (the element must accommodate the full off-axis cone at ω = 36.4°) combined with the edge-thickness constraints imposed by the steep rear curvature. S-LAH58's high refractive index (1.883) is essential here: it minimizes the surface curvatures needed for a given power, keeping the sag depths and edge-thickness ratios within manufacturable bounds.

Together, L31 and L32 form a negative–positive field-flattening pair that is the optical heart of G3. The G3 group's net focal length of +128.2 mm is far weaker than G1 (+21.1 mm) or G2 (+62.1 mm), confirming that G3's primary role is field correction rather than converging power. The ratio f1/f3 = 0.165 satisfies Conditional Formula (2): 0 < f1/f3 < 0.6, which limits G3's share of the total power — important because G3's distance from the stop would amplify aberration variations with object distance if its power were too strong (¶0057).


## Glass Selection

The design uses a minimal palette of four distinct glass types across seven elements, three of which are the same OHARA S-LAH58 high-index lanthanum glass:

| Element | nd | νd | Glass | Type | Role |
|---------|------|-------|-------|------|------|
| L11 | 1.59270 | 35.31 | S-TIH1 (OHARA) | Titanium flint | Achromat flint partner in G1 doublet |
| L12 | 1.88300 | 40.76 | S-LAH58 (OHARA) | High-index lanthanum | Primary positive power in G1 |
| L21 | 1.69895 | 30.13 | S-TIH53 (OHARA) | Titanium flint | Achromat flint partner in G2 doublet |
| L22 | 1.88300 | 40.76 | S-LAH58 (OHARA) | High-index lanthanum | Primary positive power in G2 |
| L23 | 1.56867 | 58.50 | Unmatched (moldable crown) | Crown (GMo) | Lateral color / astigmatism corrector |
| L31 | 1.68201 | 31.43 | Unmatched (moldable flint) | Flint (GMo) | Aspherical field flattener |
| L32 | 1.88300 | 40.76 | S-LAH58 (OHARA) | High-index lanthanum | Final positive power / telecentric relay |

The chromatic correction strategy uses cemented doublet pairing rather than a classical crown–flint approach. Both G1 and G2 contain cemented doublets pairing a titanium flint (S-TIH series, νd ≈ 30–35) with S-LAH58 (νd = 40.76). The Abbe number difference across each cemented interface is modest — Δνd = 5.45 for G1 (L11/L12) and Δνd = 10.63 for G2 (L21/L22). In a classical achromat these values would be insufficient, but the large refractive-index step at each junction (Δnd = 0.290 in G1, Δnd = 0.184 in G2) provides the necessary chromatic leverage. The correction works because the refraction at a cemented surface is proportional to the product of the index difference and surface curvature; a large Δnd on a steep junction can compensate for a small Δνd. This is a pragmatic approach: in a compact 7-element system with 72.8° field coverage, strong secondary-spectrum correction is unnecessary, and the high-index doublet approach delivers adequate achromatic performance without requiring expensive ED or anomalous-dispersion glasses.

The two aspherical elements (L23, L31) use non-catalog moldable glasses that do not match any standard vendor entry. This is common in Fujifilm compact camera designs: the aspherical elements are precision glass-molded (PGM), and the glass compositions are selected primarily for their molding characteristics (low transformation temperature, good thermal stability, minimal index change under molding stress) rather than for specific Abbe-number targets.

No ED, super-ED, fluorite, or anomalous-partial-dispersion glasses are present. The design achieves acceptable chromatic performance through the brute-force approach of two well-placed achromatic doublets rather than through exotic glass selection.


## Focus Mechanism

The focus mechanism is a front-group unit-focusing system as described in ¶0024 and ¶0074. G1 (L11, L12) together with the aperture stop and G2 (L21, L22, L23) translate together as a rigid unit along the optical axis, while G3 (L31, L32) remains stationary relative to the image plane (sensor). The variable air gap between S9A (rear of L23) and S10A (front of L31) changes during focusing: at infinity focus this gap is 4.493 mm, and at close focus the G1+Stop+G2 assembly moves forward (toward the object), increasing the gap.

The close focus distance is 10 cm (0.10 m) per the manufacturer's specifications for the Fujifilm X70. Paraxial ray tracing at this conjugate gives an estimated S9A–S10A gap of approximately 8.7 mm — an extension of roughly 4.2 mm for the G1+Stop+G2 assembly. Because the X70 is a fixed-lens camera with the optics housed entirely inside the body, this internal movement is accommodated within the barrel without any external protrusion. The patent notes that this front-group focusing architecture requires less driving movement than a rear-focus system would (¶0074), which is advantageous for the compact camera's autofocus actuator.

The fixed G3 also means the image-side telecentricity remains constant at all focus distances, which is important for uniform illumination across the APS-C sensor's microlens array.

| Parameter | Infinity Focus | Close Focus (10 cm) |
|-----------|---------------|---------------------|
| Gap S9A–S10A | 4.493 mm | ~8.7 mm (estimated) |
| Focus travel | — | ~4.2 mm forward |
| BFD (air equiv.) | 5.093 mm | 5.093 mm (fixed) |
| G3 position | Fixed | Fixed |


## Aspherical Surfaces

The design contains four aspherical surfaces on two elements (L23 and L31). Fujifilm's published specifications describe these as "two aspherical glass-molded elements," consistent with precision glass-molding (PGM) fabrication.

### Aspherical formula convention

The patent (¶0082) defines the aspherical sag as:

$$Z_d = \frac{C \cdot h^2}{1 + \sqrt{1 - K_A \cdot C^2 \cdot h^2}} + \sum_{m=3}^{20} A_m \cdot h^m$$

where $C = 1/R$ is the paraxial curvature, $h$ is the radial height from the optical axis, and $K_A$ and $A_m$ are the aspherical coefficients. The key conventions are:

- **Conic constant:** The patent's $K_A$ corresponds to $(1 + K)$ in the standard ISO convention. All four surfaces have $K_A = 0$, which corresponds to $K = -1$ (paraboloid base curve). Rather than using a standard spherical base, the designers chose a parabolic base and let the full polynomial absorb all spherical departure.
- **Odd-order terms:** The polynomial includes odd powers of $h$ (A3, A5, A7, …, A19) in addition to the standard even powers. These odd-order terms are non-standard — most commercial lens-design software and ray-tracing renderers support only even-order aspherics (A4, A6, …). The odd-order terms provide additional degrees of freedom for shaping the radial sag profile, allowing finer control over the wavefront correction at different zonal heights than even-order polynomials alone can achieve.
- **Coefficient count:** Each surface carries 18 polynomial coefficients (A3 through A20), for a total of 72 aspherical degrees of freedom across the four surfaces.

### Refit methodology

The companion data file uses the standard even-order aspheric convention with $K = 0$ (spherical base) and coefficients A4 through A20. The patent's full sag profile (paraboloid base plus odd+even polynomial) was sampled densely across $h = [0, \text{SD}]$ for each surface, and a least-squares fit of the residual (patent sag minus spherical base sag) to the nine even-order terms (A4, A6, A8, A10, A12, A14, A16, A18, A20) was performed. Maximum fit residuals are approximately 0.1 µm on S8A, 0.5 µm on S9A, 7 µm on S10A, and 9 µm on S11A. The larger residuals on the G3 surfaces reflect the extreme aspherical departure and the significant odd-order contributions (A3 ≈ 7.2 × 10⁻³ on S10A, 5.6 × 10⁻³ on S11A) that even-order polynomials cannot fully reproduce. These residuals are acceptable for visualization purposes but are documented here for transparency.

### S8A and S9A — L23 (G2 trailing singlet)

Both surfaces of L23 carry moderate aspherical departure. The dominant even-order terms (A4 on the order of −4 × 10⁻³ to −2.5 × 10⁻³ in the patent's native convention) introduce negative fourth-order spherical aberration correction, flattening the peripheral wavefront. The significant odd-order terms (A3 ≈ 1.4–1.7 × 10⁻³, A5 ≈ 1–3 × 10⁻³) provide additional radial profile control, allowing the optimizer to fine-tune the balance of correction at different zonal heights.

L23's aspherical surfaces correct the aberrations of the G2 group as a whole. The cemented doublet L21/L22 ahead of it corrects chromatic aberration but inevitably introduces residual monochromatic aberrations (spherical, coma, astigmatism). L23's aspherical profiles are optimized to clean up these residuals before the beam crosses the large air gap to G3, where any uncorrected aberration would be amplified by the high chief-ray angles.

### S10A and S11A — L31 (G3 front element)

The aspherical departure on L31 is an order of magnitude larger than on L23. The patent's A3 coefficients on L31 are the largest odd-order terms in the design (7.16 × 10⁻³ on S10A, 5.60 × 10⁻³ on S11A), providing additional radial profile control that enables smoother transitions in the sag curve between the paraxial center and the heavily corrected periphery. The combined effect of these two highly aspherized surfaces transforms L31 from a paraxially biconcave element into one whose peripheral shape behaves more like a steeply curved meniscus, which is the primary mechanism for field curvature correction in this design.

Without L31's aspherical contribution, the lens system's Petzval sum (computed at 0.0104 mm⁻¹, corresponding to a Petzval radius of approximately 96 mm or about 5× the focal length) would produce an inward-curving image surface incompatible with a flat sensor. L31's strongly negative aspherical departure at the rim artificially flattens the tangential and sagittal image surfaces across the full 72.8° field. The patent's aberration plots (Figure 5) show the effectiveness of this strategy: astigmatism remains below approximately 150 µm across the full field, and distortion stays within ±1–2%.


## Verification Summary

Independent paraxial ray tracing (ABCD/y-nu method) applied to the Example 1 prescription confirms the patent's published values:

| Parameter | Computed | Patent | Match |
|-----------|----------|--------|-------|
| EFL | 19.129 mm | 19.129 mm | Exact |
| Back focus (air equiv.) | 5.093 mm | 5.092 mm | ±0.001 |
| Total length (TL) | 27.406 mm | 27.405 mm | ±0.001 |
| f1/f2 | 0.340 | 0.340 | Exact |
| f1/f3 | 0.165 | 0.165 | Exact |
| f·tan ω / R3f | −0.358 | −0.358 | Exact |
| D12/(f·tan ω) | 0.826 | 0.827 | ±0.001 |
| Σd/TL | 0.504 | 0.504 | Exact |
| TL/(f·tan ω) | 1.943 | 1.945 | ±0.002 |

All conditional formulae (1) through (7) and their tightened variants (1-1) through (7-1) are satisfied by Example 1.


## Sources

- US 2017/0075089 A1: "Imaging Lens and Imaging Apparatus," Nagami and Suzuki, filed August 17, 2016, published March 16, 2017.
- JP 2015-179758: Japanese priority application, September 11, 2015 (incorporated by reference in the US publication).
- Fujifilm X70 product specifications: 18.5 mm f/2.8, 7 elements in 5 groups, 2 aspherical glass-molded elements, minimum focus distance 10 cm, APS-C X-Trans CMOS II sensor (23.6 × 15.6 mm).
- OHARA optical glass catalog (current edition): S-TIH1 (nd = 1.59270, νd = 35.31), S-LAH58 (nd = 1.88300, νd = 40.76), S-TIH53 (nd = 1.69895, νd = 30.13).
