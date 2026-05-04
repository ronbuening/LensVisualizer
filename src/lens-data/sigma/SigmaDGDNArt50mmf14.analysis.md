# Sigma 50mm F1.4 DG DN | Art — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2023-183894 A, "結像光学系" (Imaging Optical System)
**Applicant:** Sigma Corporation (株式会社シグマ), Kawasaki, Kanagawa, Japan
**Inventor:** Yukihiro Yamamoto (山本 幸広)
**Filing date:** June 17, 2022
**Publication date:** December 28, 2023
**Embodiment used:** Numerical Example 1 (数値実施例 1), described in ¶0062–0068 and ¶0136

The prescription in Numerical Example 1 is identified as the design basis of the production Sigma 50mm F1.4 DG DN | Art (Edition A023, released February 2023) on the basis of the following convergent evidence:

1. **Element and group count:** 14 elements in 11 groups — matches the manufacturer's published specification.
2. **Aspherical surface count:** Three aspherical lenses (five aspherical surfaces total) — matches the production lens's stated "3 aspherical lenses."
3. **SLD glass count:** The production lens specifies "1 SLD glass element." L5 (nd = 1.59282, νd = 68.62) is the primary chromatic correction element in the front-group achromatizing doublet and carries the highest Abbe number in the prescription — consistent with Sigma's SLD designation. L8 also uses a low-dispersion fluorophosphate-class mold glass (νd = 67.02), but Sigma counts it separately as one of the three aspherical lenses rather than as the SLD element.
4. **Focal length and f-number:** Patent f = 48.72 mm at F/1.45, compared to the marketed 50 mm at F/1.4 — within the typical patent-to-production rounding range.
5. **Half field angle:** Patent 2ω = 46.49° versus the manufacturer's stated 46.8°.
6. **Image height:** Y = 21.63 mm, consistent with a 43.26 mm image circle covering a full-frame 35 mm sensor.
7. **Focus mechanism:** A single negative meniscus lens (GR1) with both surfaces aspherical moves during focusing — matching Sigma's description of "a single double-sided aspheric lens as the focus element" driven by an HLA linear motor.
8. **Close focus distance:** The patent tabulates data at 1.0 m object distance; the production lens specifies MFD = 0.45 m, indicating the patent example does not document the full focus range.
9. **Patent timing:** Filed June 2022, seven months before the February 2023 product launch.
10. **Inventor attribution:** Yukihiro Yamamoto is the sole named inventor on the patent.

## Optical Architecture

The design is a two-group positive-positive arrangement — a positive front group GF followed by a positive rear group GR — with the aperture stop positioned between them, immediately object-side of the focus element (¶0068). The front group's internal structure is retrofocus-like (negative subgroup GF1 followed by positive subgroup GF2), while the rear group is a negative-focus-element relay followed by a positive-negative field-correcting pair. The overall power distribution is distinctly asymmetric, with GF carrying the bulk of the convergence and GR serving primarily as a weakly positive relay and field corrector.

**Group structure (front to rear):**

| Group | Elements | Power | f (mm) | Role |
|---|---|---|---|---|
| GF (Front group) | L1–L7 | Positive | +50.05 | Front collector and primary power |
| — GF1 (1st front subgroup) | L1, L2, L3 | Negative | −35.58 | Retrofocus-like negative front; controls distortion and Petzval curvature |
| — GF2 (2nd front subgroup) | L4, L5+L6, L7 | Positive | +25.47 | Main positive power, axial color correction |
| GR (Rear group) | L8–L14 | Positive | +156.95 | Relay and field correction |
| — GR1 (1st rear subgroup) | L8 | Negative | −64.16 | **Focus element** — single inner-focus lens |
| — GR2F (front half of 2nd rear) | L9+L10, L11 | Positive | +30.90 | Strong converging group, chromatic correction |
| — GR2R (rear half of 2nd rear) | L12+L13, L14 | Negative | −50.72 | Field flattener and image-side telecentricity |

The front group GF carries the bulk of the system's refractive power (f_GF = +50.05 mm, condition (5) f_GF/f = 1.027), while the rear group GR is weakly positive (f_GR = +156.95 mm, condition (1) f_GR/f = 3.221). Within GF, the negative-leading GF1 subgroup creates a retrofocus-like expansion of the beam, which is then collected by the strongly positive GF2. This negative-positive front arrangement suppresses positive distortion that would otherwise be substantial at the 46.5° field (¶0019).

The rear group GR has a distinctive architecture. The single-element focus group GR1 is a lightweight negative meniscus sandwiched between the stop and the fixed positive relay GR2. Behind the focus group, GR2 is split into a positive front half (GR2F) and a negative rear half (GR2R). This positive-negative split in GR2 enables a small physical diameter for the rear elements while maintaining a wide image circle — the patent calls out this tradeoff explicitly at ¶0024. The negative GR2R functions as a field flattener, curving the image surface back toward the sensor plane and improving off-axis telecentricity.

The Petzval sum of the full system is 0.00127 mm⁻¹, corresponding to a Petzval radius of approximately 790 mm. The ratio of Petzval radius to focal length is ≈ 16.2 — a favorably flat Petzval field for a design of this speed and coverage. At the image corner (y = 21.63 mm), the uncorrected Petzval sag would be only ≈ 0.30 mm, well within the range that the remaining astigmatism and field-curvature balancing can manage. The deliberate use of multiple high-index glasses (L1, L7, L11 in particular) keeps the Petzval contributions per unit power small, and the negative subgroups (GF1, GR2R) provide explicit negative Petzval correction.

## Element-by-Element Analysis

### L1 — Biconvex Positive (GF11)

nd = 1.92286, νd = 20.88. Glass: S-NPH53 (OHARA) — ultra-high-index dense flint. f = +73.5 mm.

L1 is a strong biconvex element made from an extremely high-index short-flint glass (nd ≈ 1.923). Its positive power converges the incoming beam to reduce the diameter of subsequent elements. Despite its low Abbe number, L1's position at the front of the system — where the marginal ray height is large but the chief ray height is near zero — means it contributes primarily to axial chromatic aberration rather than lateral chromatic aberration. The choice of S-NPH53 (or its equivalent) provides a high refractive index that keeps the curvatures gentle for the required power, reducing higher-order spherical aberration. The patent describes GF11 as a positive-power lens component whose role is to reduce the diameter of the elements behind it (¶0020).

### L2 — Biconcave Negative (GF12)

nd = 1.51742, νd = 52.15. Glass: S-TIL25 (OHARA) — light titanium flint (Δνd ≈ 0.3 from catalog). f = −48.0 mm.

L2 is a biconcave diverging element with relatively low refractive index. Together with L3, it forms the negative pair within GF1 that balances distortion against Petzval curvature (¶0020). The patent specifies that GF12 has a concave image-side air surface (像側の空気面に凹面を向ける), which is confirmed by R4 = +28.0267 mm. As a negative element, L2 contributes negative Petzval field curvature, counteracting the positive Petzval of the system's converging elements. Its comparatively low refractive index (nd = 1.517) means the Petzval contribution per unit of negative power is relatively large — a thin-lens approximation gives Petzval ∝ φ/n², and the low n² denominator amplifies the negative contribution. L2's strong diverging power at a large ray height also introduces negative distortion to compensate for the positive distortion generated by the positive elements in GF2.

### L3 — Biconcave Negative (GF13)

nd = 1.80518, νd = 25.46. Glass: S-TIH6 (OHARA) — dense flint. f = −41.5 mm.

L3 is the second negative element in the GF1 subgroup. The patent states that GF13 has a concave object-side air surface (物体側の空気面に凹面を向ける), confirmed by R5 = −43.0741 mm. Together, L2 and L3 form a divergent pair whose combined focal length is f_L23 = −19.52 mm. The conditional expression (2) governs the ratio f_L23/f_GF = −0.390, which balances system compactness against distortion control: too strong and the radial beam expansion forces larger downstream elements; too weak and positive distortion cannot be adequately suppressed (¶0038–0040). L3 uses a much higher-index, more dispersive glass than L2. The high refractive index (nd = 1.805) allows L3 to achieve strong negative power with moderate surface curvatures, limiting higher-order aberration contributions. Notably, the high index actually *reduces* L3's Petzval contribution per unit of negative power relative to L2's low-index glass (Petzval ∝ φ/n²): L3 contributes approximately 0.307 × φ compared to L2's 0.434 × φ per unit power. The choice of dense flint for L3 is therefore driven primarily by aberration control and chromatic balance with L1 (both are high-dispersion glasses, allowing partial compensation of the axial color introduced by L1's positive power), rather than by field flattening.

### L4 — Biconvex Positive, 2× Aspherical (GF2, 1st element)

nd = 1.76450, νd = 49.10. Glass: 764/491 — aspherical mold glass (likely a proprietary Sigma or HOYA mold composition). f = +45.6 mm.

L4 is the first aspherical element and the first element of the positive subgroup GF2. Both surfaces are aspherical. Surface 7 (front) carries a hyperboloidal conic constant K = −2.021, meaning the surface flattens rapidly toward the edge — significantly departing from a sphere. Surface 8 (rear) has K = +0.318, an oblate ellipsoid. Both surfaces carry polynomial coefficients through A18.

At the ray heights where L4 operates (near the marginal ray maximum), the aspherical front surface predominantly corrects third- and fifth-order spherical aberration. The hyperboloidal shape (K < −1) on the front surface produces a negative sag departure of roughly −436 µm at 90% of the clear aperture — a substantial flattening that would be impossible to achieve with spherical surfaces alone at this f-number. The rear surface provides a smaller compensating departure (+147 µm at the same height). Together, the two aspherical surfaces on L4 form the primary spherical aberration corrector for the front group. The patent notes that all GF2 elements should total five or fewer lenses to control overall length (¶0021); the use of aspherical surfaces on L4 achieves what would otherwise require additional spherical elements.

### L5 + L6 — Cemented Doublet (GF2, achromatizing pair)

**L5:** nd = 1.59282, νd = 68.62. Glass: K-VC89 (Sumita) or FCD515 (Hoya) class — **SLD (Super Low Dispersion) fluorophosphate crown**. Biconvex positive. f = +43.1 mm.

**L6:** nd = 1.69895, νd = 30.05. Glass: S-TIH11 (OHARA) — short flint. Negative meniscus, concave to object. f = −57.1 mm.

Individual f: L5 = +43.1 mm, L6 = −57.1 mm. Combined doublet f = +151.5 mm.

This cemented doublet is the primary axial color corrector in the front group. The patent states that GF2 must contain a cemented lens to control axial chromatic aberration (¶0021). L5 is the strongest candidate for the production lens's single SLD element: it is a low-dispersion fluorophosphate crown with νd = 68.62, the highest Abbe number in the prescription. It is paired with the short-flint L6 (νd = 30.05), giving an Abbe difference of Δνd ≈ 38.6. The SLD glass likely exhibits anomalous partial dispersion (positive ΔPgF), which would provide secondary spectrum correction beyond what a normal crown–flint pair achieves.

The doublet's combined power is weakly positive (+151.5 mm), meaning it contributes only modestly to the overall convergence while doing significant chromatic work. The weak positive power also keeps the Petzval contribution small, avoiding over-correcting the field curvature.

### L7 — Biconvex Positive (GF2, last element)

nd = 1.88300, νd = 40.80. Glass: S-LAH58 (OHARA) — lanthanum-series dense crown. f = +60.7 mm.

L7 is the final element of the front group and provides additional convergence before the aperture stop. The high-index lanthanum glass keeps the curvatures moderate for its focal length, contributing minimal higher-order aberration at the large beam diameter it operates with. L7 also serves as the "exit" element of GF2, delivering a converging cone into the stop region.

### Aperture Stop (S)

The aperture stop is located between L7 (surface 13) and L8 (surface 15), positioned at surface 14. At infinity focus, the stop-to-focus-element gap is d14 = 3.55 mm. The patent states the stop is immediately object-side of GR1 and adjacent to it (¶0068). This placement ensures that the maximum field-angle bundle passes through the center of the aperture, avoiding the vignetting asymmetry that would occur if the stop were displaced from the focus group (¶0026).

### L8 — Negative Meniscus, convex to object, 2× Aspherical (GR1 — FOCUS ELEMENT)

nd = 1.59201, νd = 67.02. Glass: 592/670 class — aspherical mold glass (consistent with Hoya FCD505 or a Sigma proprietary equivalent). f = −64.2 mm.

L8 is the lens's single focus element and its most optically distinctive component. It is a negative meniscus with both surfaces convex toward the object (R15 = +89.357 mm, R16 = +26.444 mm), and both surfaces are aspherical with K = 0 and polynomial coefficients through A18. This is the element that Sigma describes as "a single double-sided aspheric lens as the focus element," driven by the HLA (High-response Linear Actuator) linear motor.

During focusing from infinity to 1.0 m, L8 translates 3.205 mm toward the image. The gap before L8 (d14) increases from 3.55 mm to 6.76 mm while the gap behind it (d16) decreases from 16.81 mm to 13.61 mm — the total mechanical path is conserved. The front group GF, the aperture stop, and the entire GR2 group remain fixed relative to the image plane (¶0068), making this a single-element inner-focus design.

The aspherical departures on L8 are very large — up to approximately −1.5 mm on the front surface and −2.4 mm on the rear surface at 90% of the estimated clear aperture. These are among the most heavily aspherized surfaces in the prescription. Both surfaces carry negative A4 coefficients (surface 15: −3.008 × 10⁻⁵; surface 16: −3.285 × 10⁻⁵), which flatten the sag profile at the margins relative to the spherical base. On surface 15, which is a converging surface (φ = +0.0066 mm⁻¹), this reduces the positive power at the edge. On surface 16, which is a diverging surface (φ = −0.0224 mm⁻¹), the flattening reduces the magnitude of the negative power at the edge. The combined effect is to make L8 less negative at large ray heights — a progressive weakening that varies with focus position as L8 translates and the beam intercepts different zones of the aspherical profile. Because L8 moves during focusing, the aspherical profiles must be designed to maintain aberration balance at all focus positions, not just infinity — a significantly more demanding design constraint than a fixed aspherical element.

The choice of a high-νd mold glass (νd = 67.02) for the focus element is deliberate: it minimizes the chromatic shift introduced by the moving element during focus breathing. A dispersive focus element would cause visible color shifts between infinity and close-focus.

The use of a single lightweight element as the entire focus group is the core mechanical innovation of this design. By concentrating all focusing motion in one small negative meniscus, Sigma could use the HLA linear motor for fast, quiet, and precise AF — the patent explicitly motivates this at ¶0018 and ¶0022.

### L9 + L10 — Cemented Doublet (GR2F, achromatizing pair)

**L9:** nd = 1.75500, νd = 52.32. Glass: Lanthanum crown (755/523 class). Biconvex positive. f = +25.2 mm.

**L10:** nd = 1.85451, νd = 25.15. Glass: Dense flint (855/252, no exact catalog match confirmed) — nearest candidate S-TIH53 (OHARA, nd = 1.84666) disagrees by Δnd ≈ 0.008. Negative meniscus, concave to object. f = −27.6 mm.

Individual f: L9 = +25.2 mm, L10 = −27.6 mm. Combined doublet f = +223.7 mm.

The L9+L10 cemented doublet is the first element of GR2F and serves as the rear group's chromatic corrector. The patent requires GR2F to contain a positive cemented doublet (¶0025). The crown–flint pairing (Δνd ≈ 27.2) corrects the axial and lateral chromatic aberration introduced by the strongly positive GR2F subgroup. The doublet's combined power is weakly positive, keeping its Petzval contribution manageable.

### L11 — Biconvex Positive (GR2F, rear element)

nd = 2.00100, νd = 29.13. Glass: TAFD65 (Hoya) — ultra-high-index titanium-doped flint. f = +34.5 mm.

L11 is the most powerfully converging singlet in the rear group and uses the highest-index glass in the entire prescription (nd = 2.001). This extreme refractive index allows the element to provide strong positive power with moderate curvatures, keeping higher-order aberrations in check. At nd = 2.001, the Petzval contribution per unit power is minimized (for a thin lens in air, Petzval ∝ φ/n², and the large n² denominator suppresses the positive Petzval contribution), which is essential for maintaining flat-field performance through the rear group. L11's position immediately after the achromatizing doublet L9+L10 means it operates on a partially color-corrected beam, limiting the chromatic aberration it would otherwise generate.

### L12 + L13 — Cemented Doublet (GR2R, field flattener pair)

**L12:** nd = 1.94595, νd = 17.98. Glass: Ultra-dispersive flint (946/180, no exact catalog match confirmed). Biconvex positive. f = +61.5 mm.

**L13:** nd = 1.62004, νd = 36.30. Glass: S-TIM22 (OHARA) — medium flint. Biconcave negative. f = −37.2 mm.

Individual f: L12 = +61.5 mm, L13 = −37.2 mm. Combined doublet f = −97.8 mm.

This cemented doublet is net negative and forms the first component of the field-flattening GR2R subgroup. The glass pairing is unusual: L12 uses an ultra-dispersive glass (νd = 17.98), among the most dispersive optical glasses available commercially. Its extreme dispersion provides strong chromatic correction leverage, and at its position near the image plane — where chief ray heights are large — L12 is primarily correcting lateral (transverse) chromatic aberration. The combination with the medium-flint L13 produces a net negative doublet that addresses the image-side lateral color imbalance accumulated from the strongly positive GR2F subgroup, while simultaneously contributing negative Petzval curvature for field flattening.

### L14 — Negative Meniscus, concave to object, 1× Aspherical (GR2R, last optical element)

nd = 1.68948, νd = 31.02. Glass: S-TIM28 (OHARA) — flint. f = −109.8 mm.

L14 is the final optical element before the image plane. It is a negative meniscus with a concave object-facing surface (R25 = −35.52 mm, R26 = −68.56 mm). Its rear surface (surface 26) is aspherical with K = 0 and polynomial coefficients through A18, producing a positive sag departure of approximately +290 µm at the rim.

The patent requires GR2R to include a negative lens with its concave surface facing the image (像側の空気面に凹面を向けた負レンズ, ¶0025). L14 fulfills this requirement. Its negative power and position near the image plane provide field curvature correction and help control astigmatism across the wide image circle. The aspherical rear surface (surface 26) provides the final fine-tuning of the field curvature balance. Surface 26 is itself a converging surface (φ = +0.010 mm⁻¹), and the positive A4 coefficient (+1.028 × 10⁻⁵) increases its convergence toward the rim. The net effect is to make L14 progressively less negative at larger image heights, shaping the residual field curvature and astigmatism across the image circle.

## Glass Identification and Selection

The prescription uses 10 distinct glass types across 14 elements. The glass palette spans an unusually wide range of refractive indices (nd = 1.517 to 2.001) and dispersions (νd = 17.98 to 68.62).

| Element | nd | νd | Glass (best match) | Role |
|---|---|---|---|---|
| L1 | 1.92286 | 20.88 | S-NPH53 (OHARA) | Ultra-high-index front positive; reduces curvatures |
| L2 | 1.51742 | 52.15 | S-TIL25 (OHARA) | Light titanium flint; negative for distortion/Petzval |
| L3 | 1.80518 | 25.46 | S-TIH6 (OHARA) | Dense flint; negative Petzval contributor |
| L4 | 1.76450 | 49.10 | 764/491 mold glass | Aspherical SA corrector |
| L5 | 1.59282 | 68.62 | K-VC89 (Sumita) or FCD515 (Hoya) | **SLD** — axial color correction |
| L6 | 1.69895 | 30.05 | S-TIH11 (OHARA) | Short flint; chromatic partner to L5 |
| L7 | 1.88300 | 40.80 | S-LAH58 (OHARA) | Lanthanum crown; final GF convergence |
| L8 | 1.59201 | 67.02 | 592/670 mold glass (FCD505 class) | Low-dispersion aspheric focus element |
| L9 | 1.75500 | 52.32 | Lanthanum crown (755/523) | Rear achromat crown |
| L10 | 1.85451 | 25.15 | Dense flint (855/252, uncertain) | Rear achromat flint |
| L11 | 2.00100 | 29.13 | TAFD65 (Hoya) | Ultra-high-index positive; minimized Petzval per φ |
| L12 | 1.94595 | 17.98 | Ultra-dispersive flint (946/180, uncertain) | Lateral color correction |
| L13 | 1.62004 | 36.30 | S-TIM22 (OHARA) | Medium flint; chromatic partner to L12 |
| L14 | 1.68948 | 31.02 | S-TIM28 (OHARA) | Flint; aspherical field-flattening element |

The chromatic correction strategy relies on two distinct mechanisms operating at different positions in the lens. In the front group, the L5+L6 cemented doublet provides the primary axial color correction using an SLD crown (L5, νd = 68.62) paired with a short flint (L6, νd = 30.05). In the rear group, the L9+L10 doublet performs a secondary chromatic correction pass with a lanthanum crown (νd = 52.32) and dense flint (νd = 25.15). The most spectrally exotic element is L12 (νd = 17.98), whose ultra-high dispersion contributes to lateral color correction at the image periphery — essential for maintaining color-free corners on the 43 mm full-frame image circle.

The design makes heavy use of high-index glasses. Four of the fourteen elements have nd ≥ 1.88 (L1, L7, L11, L12), and L11 at nd = 2.001 is among the highest-index glasses used in any commercial photographic lens. This aggressive use of high-index materials serves two purposes: it keeps surface curvatures moderate at the large clear apertures required by F/1.4, and it reduces the Petzval sum contributions per unit of optical power.

## Focus Mechanism

The lens uses a single-element inner focus system. L8 (GR1) — a single negative meniscus with both surfaces aspherical — is the sole moving element during focusing. All other elements, the aperture stop, and the image plane are fixed.

| Parameter | Infinity | 1.0 m (patent) | 0.45 m (computed) |
|---|---|---|---|
| Object distance (from surface 1) | ∞ | 872.83 mm | 322.82 mm |
| d14 (stop → L8) | 3.5500 mm | 6.7551 mm | 12.3996 mm |
| d16 (L8 → L9) | 16.8119 mm | 13.6068 mm | 7.9623 mm |
| BF (L14 → image) | 19.3272 mm | 19.3272 mm | 19.3272 mm |
| System focal length | 48.72 mm | 48.72 mm | — |
| F-number | 1.45 | 1.52 | — |
| Total track | 127.18 mm | 127.18 mm | 127.18 mm |

Focusing from infinity to 1.0 m requires L8 to translate 3.205 mm toward the image; to the production MFD of 0.45 m, the total travel is 8.850 mm. The mechanical travel is conserved: at every focus position, Δd14 = −Δd16 exactly. The back focal distance remains constant, confirming that the system is a true inner-focus design with no change in overall length.

The patent motivates the single-element focus group on grounds of focus motor load reduction (¶0004–0005, ¶0018, ¶0022). Because GR1 consists of just one element, the focus group is lighter than multi-element alternatives — enabling the HLA linear motor to achieve fast acceleration and high tracking responsiveness. The conditional expression (6) governs the focus sensitivity: $(1 - \beta_{R1}^2) \cdot \beta_{R2}^2 = -0.859$, within the range −2.0 to −0.33. This balances the trade-off between focus travel (smaller sensitivity → more travel → larger lens) and decentering tolerance (higher sensitivity → smaller manufacturing tolerance).

The production lens achieves a minimum focus distance of 0.45 m (1:6.8 magnification). The patent only tabulates data at 1.0 m, but the 0.45 m spacings in the data file were computed via paraxial marginal-ray brentq on the patent prescription, extending L8's travel to 8.850 mm. This extrapolation assumes the paraxial focus model is adequate at 0.45 m; the actual production lens may include firmware refinements not documented in the filed prescription.

## Aspherical Surfaces

The design contains five aspherical surfaces on three elements — matching Sigma's stated "3 aspherical lenses." The aspherical sag equation used is the standard form with a conic constant K and even-order polynomial coefficients (¶0129–0130):

$$z = \frac{(1/R) \cdot y^2}{1 + \sqrt{1 - (1+K)(y/R)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12} + A_{14} y^{14} + A_{16} y^{16} + A_{18} y^{18} + A_{20} y^{20}$$

All five surfaces are tabulated through A18 or A20 in the patent. A20 = 0 for all surfaces.

### Surface 7 — L4 front (GF2, aspherical SA corrector)

| Coeff. | Value |
|---|---|
| K | −2.02050 |
| A4 | −2.80220 × 10⁻⁶ |
| A6 | −1.95380 × 10⁻⁹ |
| A8 | +3.31270 × 10⁻¹¹ |
| A10 | −2.64290 × 10⁻¹³ |
| A12 | +1.27320 × 10⁻¹⁵ |
| A14 | −3.54970 × 10⁻¹⁸ |
| A16 | +5.35560 × 10⁻²¹ |
| A18 | −3.32250 × 10⁻²⁴ |

K = −2.021 is a hyperboloid (K < −1). This surface flattens dramatically at the edge, departing from a sphere by approximately −436 µm at 90% of the clear aperture. Its primary role is to reduce the zone of marginal spherical aberration at F/1.4. The negative departure indicates undercorrection relative to a sphere, meaning this surface bends marginal rays less than a sphere would — compensating for the overcorrecting tendency of the strongly curved spherical surfaces elsewhere in GF2.

### Surface 8 — L4 rear

| Coeff. | Value |
|---|---|
| K | +0.31820 |
| A4 | +1.14230 × 10⁻⁶ |
| A6 | −1.63190 × 10⁻⁹ |
| A8 | +1.28480 × 10⁻¹¹ |
| A10 | −8.06900 × 10⁻¹⁴ |
| A12 | +3.81260 × 10⁻¹⁶ |
| A14 | −1.11810 × 10⁻¹⁸ |
| A16 | +1.86670 × 10⁻²¹ |
| A18 | −1.26950 × 10⁻²⁴ |

K = +0.318 is an oblate ellipsoid. The departure is positive (+147 µm at 90% aperture), partially compensating the front surface. Together, surfaces 7 and 8 form a matched aspherical pair that corrects spherical aberration through at least seventh order.

### Surfaces 15 and 16 — L8, the focus element

**Surface 15 (front):**

| Coeff. | Value |
|---|---|
| K | 0 |
| A4 | −3.00787 × 10⁻⁵ |
| A6 | +1.93193 × 10⁻⁷ |
| A8 | −1.11198 × 10⁻⁹ |
| A10 | +4.90017 × 10⁻¹² |
| A12 | −1.69805 × 10⁻¹⁴ |
| A14 | +4.46514 × 10⁻¹⁷ |
| A16 | −7.37293 × 10⁻²⁰ |
| A18 | +5.31567 × 10⁻²³ |

**Surface 16 (rear):**

| Coeff. | Value |
|---|---|
| K | 0 |
| A4 | −3.28460 × 10⁻⁵ |
| A6 | +1.86930 × 10⁻⁷ |
| A8 | −9.29090 × 10⁻¹⁰ |
| A10 | +2.53160 × 10⁻¹² |
| A12 | −2.79790 × 10⁻¹⁵ |

A14 through A20 are zero per the patent — surface 16 uses only five polynomial terms, fewer than the other aspherical surfaces. (spherical base), with all correction carried in the polynomial terms. The A4 coefficients are an order of magnitude larger than those on L4 (approximately −3 × 10⁻⁵ versus −3 × 10⁻⁶), indicating much stronger aspherical departures. At 90% of the estimated SD, surface 15 departs by approximately −1.5 mm and surface 16 by approximately −2.4 mm — these are heavily aspherized surfaces.

This is the hallmark of the design's focusing strategy: by concentrating a large share of the system's higher-order aberration correction onto the moving element, the aspherical profiles can be optimized to provide focus-position-dependent correction. As L8 translates, the ray heights on its surfaces change, and the polynomial aspherical terms respond differently at different heights. This provides an intrinsic correction for focus-induced aberration shifts — particularly spherical aberration and coma variations at close range. Both surfaces are glass-molded aspherics (inferred from the glass type, which is consistent with precision glass mold compositions used for this purpose).

### Surface 26 — L14 rear (field-flattening asphere)

| Coeff. | Value |
|---|---|
| K | 0 |
| A4 | +1.02840 × 10⁻⁵ |
| A6 | +6.27260 × 10⁻⁹ |
| A8 | −7.05150 × 10⁻¹¹ |
| A10 | +1.82840 × 10⁻¹² |
| A12 | −1.69670 × 10⁻¹⁴ |
| A14 | +7.80240 × 10⁻¹⁷ |
| A16 | −1.73940 × 10⁻¹⁹ |
| A18 | +1.46540 × 10⁻²² |

Surface 26 has a positive A4 coefficient, producing a positive sag departure that increases with height. Because surface 26 is itself a *converging* surface (φ₂₆ = +0.0101 mm⁻¹; it transitions from glass to air through a negative radius), the positive departure increases the local convergence toward the periphery. The net effect on L14 as a whole — which is negative (f = −109.8 mm) — is to make L14 progressively *less negative* at larger image heights. This graduated weakening of the negative field-flattening power toward the image edge shapes the residual field curvature and astigmatism balance across the image circle, fine-tuning the Petzval correction that the paraxial-level negative power of L14 provides. The departure is moderate (+290 µm at 90% of the estimated clear aperture). The glass type (S-TIM28 class, a moldable flint) is consistent with precision glass molding.

## Conditional Expressions

The patent defines six conditional expressions governing the power balance of the design. All are satisfied by Example 1:

| Condition | Expression | Range | EX1 value | Satisfied |
|---|---|---|---|---|
| (1) | f_GR / f | 1.40 – 20.00 | 3.221 | ✓ |
| (2) | f_L23 / f_GF | −1.00 – −0.15 | −0.390 | ✓ |
| (3) | (1 − β_R2F) · β_R2R | 0.71 – 2.50 | 1.177 | ✓ |
| (4) | D_GR / D_GF | 0.45 – 1.50 | 0.928 | ✓ |
| (5) | f_GF / f | 0.75 – 2.00 | 1.027 | ✓ |
| (6) | (1 − β_R1²) · β_R2² | −2.0 – −0.33 | −0.859 | ✓ |

Condition (1) keeps the rear group weakly positive — strong enough for size reduction but not so strong as to generate excessive aberration (¶0033–0036). Condition (6) is the focus sensitivity, governing the trade-off between AF travel and decentering tolerance for the moving focus element (¶0057–0059).

## Verification Summary

The following quantities were independently verified by paraxial y-nu ray trace:

| Quantity | Patent | Computed | Δ |
|---|---|---|---|
| System EFL | 48.72 mm | 48.725 mm | < 0.01% |
| f_GF | 50.05 mm | 50.05 mm | exact |
| f_GR | 156.95 mm | 156.95 mm | exact |
| f_GF1 | −35.58 mm | −35.58 mm | exact |
| f_GF2 | 25.47 mm | 25.47 mm | exact |
| f_L23 | −19.52 mm | −19.52 mm | exact |
| f_GR1 | −64.16 mm | −64.16 mm | exact |
| f_GR2 | 55.68 mm | 55.68 mm | exact |
| f_GR2F | 30.90 mm | 30.90 mm | exact |
| f_GR2R | −50.72 mm | −50.72 mm | exact |
| Marginal ray at image | 0 | 0.000012 mm | negligible |
| Variable gap sum (d14+d_L8+d16) | — | 22.2398 mm (all positions) | conserved |
| BF at close focus | 19.3272 mm | 19.3272 mm | conserved |
| Petzval sum | — | 0.00127 mm⁻¹ | R_P ≈ 790 mm |
| MFD = 0.45 m focus solution | — | d14 = 12.400, d16 = 7.962 | brentq converged |

All group focal lengths match the patent to the displayed precision. The marginal ray closes to within 12 nm of zero at the image plane, confirming correct transcription.

Conditional expressions (3), (4), and (6) were independently verified by computing subgroup lateral magnifications from the marginal ray trace (β = nu_in / nu_out at subgroup boundaries):

| Quantity | Computed |
|---|---|
| β_R1 | 3.269 |
| β_R2 | 0.298 |
| β_R2F | 0.202 |
| β_R2R | 1.475 |
| (3) (1 − β_R2F) · β_R2R | 1.177 ✓ |
| (4) D_GR / D_GF = 49.10 / 52.89 | 0.928 ✓ |
| (6) (1 − β_R1²) · β_R2² | −0.859 ✓ |

## Sources

1. JP 2023-183894 A, "結像光学系," Sigma Corporation, published December 28, 2023. Inventor: Yukihiro Yamamoto.
2. Sigma Corporation, "50mm F1.4 DG DN | Art" product page, https://www.sigma-global.com/en/lenses/a023_50_14/ — production specifications: 14 elements / 11 groups, 3 aspherical lenses, 1 SLD element, f = 50 mm, F/1.4, MFD 0.45 m, 11-blade diaphragm, 72 mm filter, HLA autofocus motor.
3. Sigma Corporation press release, February 7, 2023: "SIGMA Introduces 50mm F1.4 DG DN | Art for Full-Frame Mirrorless Cameras."
4. OHARA Inc., optical glass catalog — nd/νd reference data for S-NPH53, S-TIL25, S-TIH6, S-TIH11, S-LAH58, S-TIM22, S-TIM28.
5. Hoya Corporation, optical glass catalog — nd/νd reference data for TAFD65, FCD515/FCD505.
6. Sumita Optical Glass Inc., optical glass catalog — nd/νd reference data for K-VC89.
