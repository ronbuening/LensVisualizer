# Leica APO-Macro-Elmarit-TL 60 mm f/2.8 ASPH — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2016-090725 A, "マクロレンズ，撮像光学装置及びデジタル機器" (Macro Lens, Imaging Optical Apparatus and Digital Device).
**Applicant:** Konica Minolta, Inc. (コニカミノルタ株式会社), Tokyo, Japan.
**Inventor:** Hiroaki Tanaka (田中 宏明).
**Filed:** 31 October 2014 (特願 2014-223123).
**Published:** 23 May 2016.
**Embodiment analyzed:** Example 9 (第9実施例), §0054, §0110–§0116.

The following convergent evidence links Example 9 to the production Leica APO-Macro-Elmarit-TL 60 mm f/2.8 ASPH (order numbers 11086/11087):

1. **Element and group count:** 10 elements in 9 air-separated groups — matches the Leica specification exactly.
2. **Aspherical surface count:** 4 aspherical surfaces on two double-aspheric elements (L12 and L23). Some retailer sources describe this as "four aspherical elements"; the patent unambiguously shows two elements with two aspherical surfaces each. Leica-authorized press material and the Photo Review launch article specify "four aspherical surfaces," consistent with the patent.
3. **Focal length and aperture:** Patent EFL = 59.979 mm at f/2.9 design aperture, consistent with the marketed 60 mm f/2.8.
4. **Maximum magnification:** β = −1.0 (1:1 macro reproduction ratio) — matches the Leica specification.
5. **Image circle:** y′max = 14.2 mm (APS-C half-diagonal, 28.4 mm image circle) — matches Leica's TL/CL APS-C format.
6. **Focus mechanism:** Inner focus with a single moving group (Gr2) traveling toward the object; Gr1, aperture stop, and Gr3 all fixed — consistent with Leica's stated "internal focusing" design.
7. **Minimum focus distance:** Patent-computed MFD ≈ 164 mm (focal plane to object), consistent with the Leica specification of 16 cm.
8. **Patent timing and applicant:** Filed October 2014 by Konica Minolta; lens announced September 2016. Konica Minolta has designed and manufactured optical systems for Leica Camera AG under long-standing contract arrangements.
9. **Apochromatic designation:** The use of HOYA FCD100 super-ED glass (νd = 95.10) in the focus group is consistent with Leica's strict "APO" standard.

Among the eleven numerical examples in the patent, only two combine all the production-matching criteria: 1:1 magnification (β = −1.0), four aspherical surfaces on two elements (L12 in Gr1 and L23 in Gr2), and a super-ED fluorophosphate crown (FCD100, νd = 95.10) in the focus group. These are Examples 9 and 10. Examples 1–4 achieve only β = −0.5; Examples 5–8 and 11 achieve 1:1 but use S-FPL51 (νd ≈ 81.6) instead of FCD100, falling short of the APO chromatic standard; Example 7 has five aspherical surfaces and Example 8 has three, neither matching the production count of four.

Examples 9 and 10 differ principally in Gr1 glass choices (L12 uses S-BAL35 in Ex. 9 vs a higher-index glass in Ex. 10; L13 uses S-TIM28 vs a denser flint) and in element shapes (L11 is biconvex in Ex. 9 vs a positive meniscus in Ex. 10; L23 is a meniscus convex to image in Ex. 9 vs biconvex in Ex. 10). Without a production cross-section, either could be the implemented design. Example 9 is adopted here as the working match; the architectural analysis — group structure, focus mechanism, chromatic strategy, and aspherical surface roles — is essentially identical for both embodiments.

## Optical Architecture

The Leica APO-Macro-Elmarit-TL 60 mm f/2.8 ASPH is a three-functional-group inner-focus macro lens of positive–positive–negative power distribution. In terms of air-separated optical groups, the 10 elements form 9 groups:

- **Group 1 (Gr1, surfaces 1–6, weakly positive):** Three air-separated singlets — L11 (biconvex positive), L12 (double-aspheric positive meniscus), L13 (biconcave negative). Gr1 has an extremely long focal length (f₁ ≈ 1365 mm, f/f₁ = 0.04), functioning essentially as a low-power front section that collects and pre-conditions the beam without imposing a strong convergence that would vary with focus. The aperture stop is fixed between Gr1 and Gr2.
- **Group 2 (Gr2, surfaces 8–13, positive, focus group):** Three air-separated singlets — L21 (biconvex positive, super-ED glass), L22 (negative meniscus), L23 (double-aspheric positive meniscus). Gr2 is the sole moving group during focusing, traveling up to 20 mm toward the object to achieve 1:1 magnification. f₂ ≈ 32.3 mm.
- **Group 3 (Gr3, surfaces 14–20, negative):** A cemented doublet (L31+L32), followed by two air-separated singlets (L33, L34). Gr3 is fixed and serves as a diverging relay/field-flattener group. f₃ ≈ −36.2 mm.

A parallel flat plate (surfaces 21–22, nd = 1.52249, νd = 59.48) representing the sensor cover glass and filter stack follows Gr3. It is excluded from the optical design surfaces in the data file per project convention.

The design's distinguishing architectural choice is the near-afocal front group: Gr1 contributes almost no net power (f₁ ≈ 1365 mm), so the beam entering the focus group (Gr2) changes only slightly between infinity and 1:1 magnification. This minimizes aberration variation during focusing — a critical requirement for a macro lens carrying the "APO" designation at all focus distances. The patent text (¶0028) discusses this balance explicitly: too much positive power in Gr1 would cause ray-height variation in Gr2 across the focus range, degrading spherical aberration and coma correction at close distances; too much negative power in Gr1 would widen the beam at infinity, enlarging the focus group and increasing its weight.

### Verification Summary

| Parameter | Patent value | Computed | Δ |
|---|---|---|---|
| EFL (infinity) | 59.979 mm | 59.975 mm | −0.004 mm |
| f₁ (Gr1) | 1364.623 mm | 1364.411 mm | −0.21 mm |
| f₂ (Gr2) | 32.315 mm | 32.315 mm | 0.000 mm |
| f₃ (Gr3) | −36.162 mm | −36.164 mm | −0.002 mm |
| f₂/f (cond. 2) | 0.54 | 0.539 | 0.4 < x < 0.68 ✓ |
| f₃/f (cond. 3) | −0.60 | −0.603 | −1.2 < x < −0.3 ✓ |
| f/f₁ (cond. 4) | 0.04 | 0.044 | −0.2 < x < 0.3 ✓ |
| Var gap sum (∞) | — | 25.657 mm | — |
| Var gap sum (1:1) | — | 25.658 mm | Δ = 0.001 mm ✓ |
| MFD | 16 cm (Leica) | 16.4 cm | consistent |

Petzval sum = 0.00291 mm⁻¹, corresponding to a Petzval field radius of approximately −344 mm. This is moderately well corrected for an f/2.8 macro design; the large air gap in Gr3 (d₁₆ = 12.475 mm between the cemented doublet and L33) provides the physical space needed for the strong negative meniscus L33 to flatten the field.

## Element-by-Element Analysis

### L11 — Biconvex Positive (Gr1, front element)

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) — dense flint. f = +115.7 mm.

L11 is a biconvex element in dense flint glass (R₁ = +123.8, R₂ = −469.0), with the front surface more strongly curved than the rear. Its primary role is to introduce a controlled amount of positive power at the front of the system while contributing substantial undercorrected chromatic aberration owing to its high dispersion. As the first element, it intercepts the full beam diameter and its high-dispersion glass establishes the initial chromatic balance that the downstream ED element (L21) will correct. The strongly asymmetric curvature (R₁ much shorter than R₂) means most of the refraction occurs at the front surface, which helps reduce coma contribution from this element.

The choice of a dense flint (νd = 23.78) as the front element is unusual for a macro lens — most designs place a positive crown here. In this architecture, L11's high dispersion is deliberately paired against L12 and L13 to create a nearly achromatic front group (Gr1), so that the chromatic state of the beam entering the focus group changes minimally with object distance.

### L12 — Positive Meniscus, Double-Aspheric (Gr1)

nd = 1.58313, νd = 59.38. Glass: S-BAL35 (OHARA) — barium crown. f = +105.2 mm.

L12 is the first of two double-aspheric elements in the design. Both surfaces (patent surfaces 3 and 4) carry aspherical departures. The element is a positive meniscus concave toward the object (R₃ = −103.1, R₄ = −38.5), strongly curved on the image side.

The front surface (S3) has a mild positive A₄ coefficient (+5.42 × 10⁻⁶), producing approximately +60 µm of aspherical departure at h = 10 mm. This departure bends the marginal rays slightly more than a sphere would, acting to reduce undercorrected spherical aberration from L11. The rear surface (S4) has only an A₄ term (+6.76 × 10⁻⁶), with all higher-order coefficients zero — a remarkably simple aspherical profile that shifts the base sphere by approximately +68 µm at h = 10 mm. The moderate aspherical departures on both surfaces (under 70 µm) are within the range of conventional CNC polishing. S-BAL35 carries OHARA's S-prefix (environmentally safe, for conventional polishing), not the L-prefix designated for precision glass molding; the aspherical surfaces are therefore likely produced by polishing rather than PGM.

L12's aspherical surfaces correct spherical aberration contributions from the front group, ensuring that the beam reaching the aperture stop is well-conditioned regardless of object distance. The patent (¶0032) notes that placing an asphere in Gr1 is particularly effective for suppressing spherical aberration.

### L13 — Biconcave Negative (Gr1)

nd = 1.68893, νd = 31.16. Glass: S-TIM28 (OHARA) — medium-index flint. f = −54.9 mm.

L13 is a biconcave negative element (R₅ = −38.6, R₆ = +1787.9) that serves as the diverging component of Gr1. Its negative power partially cancels the positive contributions of L11 and L12, yielding Gr1's overall near-afocal behavior (f₁ ≈ 1365 mm). L13's flint glass (νd = 31.16) also provides the final chromatic balance within Gr1: the three elements L11 (νd = 23.78), L12 (νd = 59.38), and L13 (νd = 31.16) together form an achromatized triplet configuration that is nearly color-neutral across the visible spectrum.

The nearly flat rear surface (R₆ = +1787.9 mm) means essentially all the diverging power is concentrated at the front surface, which faces the same direction as L12's rear surface. This close geometric pairing creates a strongly curved air space between L12 and L13 that functions as a diverging air lens, contributing to field curvature correction.

### Aperture Stop (between Gr1 and Gr2)

The aperture stop is fixed in position during focusing (¶0036). It sits in the air gap between Gr1 and Gr2. At infinity focus, the stop-to-Gr2 distance is 23.096 mm; at 1:1 magnification, this shrinks to 3.050 mm as Gr2 moves forward by 20 mm. Fixing the stop relative to Gr1 simplifies the mechanical design and ensures consistent vignetting behavior across the focus range. The patent notes (¶0036) that a fixed stop also reduces the weight of the moving focus group.

### L21 — Biconvex Positive, Super-ED (Gr2, focus group front)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — super-ED fluorophosphate crown. f = +32.5 mm.

L21 is the most optically significant element in the design and the keystone of the apochromatic correction. It is a biconvex positive element (R₈ = +27.2, R₉ = −29.6) with nearly symmetric curvature, providing the majority of Gr2's converging power. Its extremely low dispersion (νd = 95.10) means it contributes strong positive optical power with minimal chromatic aberration — the fundamental requirement for APO correction.

HOYA FCD100 is a super-ED (extra-low dispersion) fluorophosphate crown that surpasses the more common FCD1/S-FPL51 class (νd ≈ 81.6) in both Abbe number and anomalous partial dispersion. Its ΔPgF ≈ +0.0564 (HOYA catalog) is among the highest in any production optical glass, enabling secondary-spectrum correction: when paired with a short flint partner (L22), the combination can bring three wavelengths to a common focus rather than the two achievable with ordinary achromatic pairs. This three-wavelength correction is what earns the "APO" designation in Leica's nomenclature. The OHARA cross-reference table lists FCD100 as the HOYA equivalent of S-FPL53/S-FPL55, though the nd values differ (1.43700 vs 1.43875); the patent's nd = 1.43700 matches FCD100 exactly and does not match any OHARA catalog glass.

Placing the super-ED element as the leading element of the focus group (the most object-side element in Gr2) is a deliberate choice. The patent (¶0033–0034) explains that a positive element at the front of Gr2 converges the beam, reducing the diameter of downstream elements and thereby reducing the weight of the moving group. Condition (5) requires νdp ≥ 60 for this element; FCD100 with νd = 95.10 exceeds this condition by a large margin, simultaneously satisfying the chromatic and mechanical requirements.

### L22 — Negative Meniscus, Concave to Object (Gr2)

nd = 1.80610, νd = 33.27. Glass: S-TIH14 (OHARA) — dense flint. f = −42.3 mm.

L22 is the chromatic partner to L21. Its dense flint glass (νd = 33.27) provides the compensating negative chromatic contribution that, combined with L21's super-ED positive contribution, achieves apochromatic correction within the focus group. The meniscus shape (R₁₀ = −19.5, R₁₁ = −45.5, both concave to object) controls the Petzval contribution while maintaining the corrected state.

The Abbe number difference between L21 and L22 is Δν = 95.10 − 33.27 = 61.83, providing substantial chromatic leverage. The negative power of L22 (f = −42.3 mm) partially cancels L21's convergence, but the net group power remains strongly positive (f₂ ≈ 32.3 mm). The dense flint glass also has a negative ΔPgF, which is the precise complementary anomalous dispersion needed to correct the secondary spectrum introduced by FCD100's positive ΔPgF.

### L23 — Positive Meniscus, Double-Aspheric (Gr2, focus group rear)

nd = 1.58313, νd = 59.38. Glass: S-BAL35 (OHARA) — barium crown. f = +36.8 mm.

L23 is the second double-aspheric element and the rearmost element of the moving focus group. It uses the same S-BAL35 glass as L12, and like L12, both surfaces carry aspherical profiles. The element is a positive meniscus concave toward the object (R₁₂ = −502.2, R₁₃ = −20.6), with a nearly flat front surface and a strongly curved rear.

The front surface (S12) has a large negative A₄ coefficient (−1.85 × 10⁻⁵) producing approximately −270 µm of aspherical departure at h = 10 mm. This is the strongest aspherical correction in the entire design and serves to flatten the field curvature and suppress spherical aberration variation during focusing. The rear surface (S13) has a weaker positive A₄ (+4.51 × 10⁻⁶) with significant higher-order terms (A₆ through A₁₀), producing a more complex correction profile that addresses residual coma and astigmatism at the edge of the field.

The patent (¶0031) specifically recommends placing a double-aspheric positive element at the image side of Gr2: "At the image-side end of Gr2, the ray height changes most during focusing, so placing an asphere there can effectively suppress field curvature and spherical aberration variation." L23's position at the rear of the moving group means its aspherical surfaces see the largest ray-height variation during focusing, making them maximally effective for aberration control across the entire magnification range.

### L31 + L32 — Cemented Doublet (Gr3, front)

**L31:** nd = 1.91082, νd = 35.25. Glass: S-LAH79 (OHARA) — dense lanthanum flint (νd < 50). f = +35.7 mm (standalone in air).
**L32:** nd = 1.51742, νd = 52.15. Glass: S-NSL3 (OHARA) — normal crown. f = −23.2 mm (standalone in air).
**Doublet:** f ≈ −67 mm (thick-lens ABCD computation).

The cemented doublet L31+L32 is the leading element assembly of the fixed rear group Gr3. L31 is a positive meniscus convex toward the image, made of the highest-index glass in the entire design (nd = 1.91082). L32 is a biconcave negative element cemented to L31's rear, made of a much lower-index crown.

This doublet has overall negative power (f ≈ −67 mm), consistent with Gr3's diverging function. The high-index / low-index cement interface (R₁₅ = −31.27, with nd dropping from 1.91082 to 1.51742) provides strong negative refraction at the junction, which is the primary source of Gr3's diverging power. The large index step (Δnd = 0.393) at the cement surface also provides substantial chromatic correction within Gr3, acting as a secondary achromatic corrector downstream of the focus group.

S-LAH79 (nd = 1.91082) is one of the highest-index lanthanum flints in the OHARA catalog. Despite its relatively low Abbe number (νd = 35.25, placing it firmly in the flint family), the lanthanum content gives it a high refractive index that permits the doublet to achieve a large amount of negative power without requiring excessively steep curvatures, which helps control higher-order aberrations — particularly the zonal spherical aberration and oblique spherical that are problematic at macro magnifications.

### L33 — Negative Meniscus, Concave to Object (Gr3)

nd = 1.56883, νd = 56.04. Glass: S-BAL2 (OHARA) — barium light crown. f = −31.4 mm.

L33 is a strong negative meniscus (R₁₇ = −15.0, R₁₈ = −95.8) that contributes the majority of the field-flattening correction. It sits 12.475 mm behind the cemented doublet — this large air gap is a signature feature of the design, providing the physical separation needed for L33's strong diverging power to act on the off-axis ray bundles effectively.

The choice of a moderate-index crown rather than a flint glass is deliberate: L33's primary function is geometric (field flattening via Petzval contribution) rather than chromatic. A lower-dispersion glass minimizes the chromatic disturbance introduced by this strongly curved element. The front surface radius (R₁₇ = −15.0 mm) is the smallest radius in the entire design, indicating extreme curvature — this surface is the most powerful single refracting surface in the system and the primary driver of Gr3's negative Petzval contribution.

### L34 — Biconvex Positive (Gr3, rear element)

nd = 1.72916, νd = 54.67. Glass: S-LAL18 (OHARA) — lanthanum crown. f = +49.9 mm.

L34 is a biconvex positive element (R₁₉ = +38.3, R₂₀ = −721.4) that serves as the final optical element before the image plane. Its positive power partially compensates L33's strong negative contribution, fine-tuning the exit pupil position and telecentricity for compatibility with the digital sensor. The lanthanum crown glass (νd = 54.67) provides a moderate Abbe number that does not significantly disturb the chromatic correction established upstream.

The gap between L33 and L34 is only 0.300 mm — the thinnest air space in the design — making these two elements nearly in contact. Despite this proximity, they are not cemented; the thin air gap provides an additional refracting interface for aberration control that would be lost in a cemented configuration.

## Glass Selection and Chromatic Strategy

| Element | Glass | nd | νd | Class | Role |
|---|---|---|---|---|---|
| L11 | S-TIH53 (OHARA) | 1.84666 | 23.78 | Dense flint | High-dispersion front collector |
| L12 | S-BAL35 (OHARA) | 1.58313 | 59.38 | Barium crown | Polished aspheric substrate |
| L13 | S-TIM28 (OHARA) | 1.68893 | 31.16 | Medium flint | Gr1 diverger / achromatizer |
| L21 | FCD100 (HOYA) | 1.43700 | 95.10 | Super-ED fluorophosphate | APO primary corrector |
| L22 | S-TIH14 (OHARA) | 1.80610 | 33.27 | Dense flint | APO chromatic partner |
| L23 | S-BAL35 (OHARA) | 1.58313 | 59.38 | Barium crown | Polished aspheric substrate |
| L31 | S-LAH79 (OHARA) | 1.91082 | 35.25 | Dense lanthanum flint | High-index doublet component |
| L32 | S-NSL3 (OHARA) | 1.51742 | 52.15 | Normal crown | Doublet diverger |
| L33 | S-BAL2 (OHARA) | 1.56883 | 56.04 | Barium light crown | Field flattener |
| L34 | S-LAL18 (OHARA) | 1.72916 | 54.67 | Lanthanum crown | Exit pupil / telecentric corrector |

The chromatic correction strategy operates at two levels. Within Gr1, the triplet L11–L12–L13 spans Abbe numbers from 23.78 to 59.38, forming an achromatic front section that is nearly color-neutral. Within Gr2, the L21–L22 pair (νd = 95.10 vs 33.27, Δν = 61.83) provides the apochromatic correction that earns the "APO" designation. The super-ED glass FCD100 has strongly anomalous partial dispersion (ΔPgF ≈ +0.0564 per HOYA catalog), and its pairing with the dense flint S-TIH14 (negative ΔPgF) enables three-wavelength color correction — bringing the d, C, and F (or g) lines to a substantially common focus.

This two-tier chromatic strategy is architecturally important for a macro lens: because Gr2 moves during focusing, its chromatic contribution changes with magnification. By making Gr2 internally apochromatic (rather than relying on chromatic balance between groups), the design ensures that the residual chromatic aberration remains small at all focus positions from infinity to 1:1 — a requirement for the Leica "APO" standard.

The glass palette mixes OHARA and HOYA vendors. Nine of ten elements use OHARA glasses (all with exact nd/νd matches), while L21 uses HOYA FCD100 (nd = 1.43700, νd = 95.10 — exact match). OHARA does not have a catalog glass at this precise index and Abbe number; S-FPL55 (nd = 1.43875, νd = 94.66) and S-FPL53 (nd = 1.43875, νd = 94.93) both differ in nd by 0.00175. This cross-vendor selection is not unusual in Konica Minolta patents.

## Focus Mechanism

The lens uses inner focus with a single moving group (Gr2, elements L21–L23). During focusing from infinity to 1:1 magnification:

| Parameter | Infinity | 1:1 (β = −1.0) |
|---|---|---|
| d₇ (stop → L21) | 23.096 mm | 3.050 mm |
| d₁₃ (L23 → L31) | 2.561 mm | 22.608 mm |
| Sum | 25.657 mm | 25.658 mm |
| EFL | 59.979 mm | 30.258 mm |
| F-number | f/2.9 | f/4.15 |
| Object distance | ∞ | 67.5 mm (from S1) |

Gr2 travels 20.046 mm toward the object (d₇ decreases from 23.096 to 3.050 mm), and the gap behind it (d₁₃) increases by the same amount. The variable gap sum is conserved to within 0.001 mm, confirming that the total optical track length remains constant — the hallmark of internal focusing. The lens barrel length does not change during focusing, consistent with Leica's specification and favorable for close-up work where the subject is very near the front element.

An interesting practical detail reported in third-party reviews is that the production lens automatically stops down to f/4 at closest focus, even when f/2.8 is selected. The patent data shows the paraxial f-number at 1:1 as f/4.148 (compared to f/2.9 at infinity), an increase driven by the inner-focus kinematics: as Gr2 moves forward, the system's effective focal length shortens (from 59.98 mm to 30.26 mm) and the system's working numerical aperture decreases, raising the f-number. The production lens's firmware-enforced f/4 limit at close focus aligns well with this optical constraint. Leica's customer service has confirmed that the automatic aperture adjustment preserves apochromatic image quality at all focus distances — the design is optimized for f/4 at 1:1, not for wide-open 1:1 performance.

The focus group weight is minimized by the three-singlet construction using relatively thin elements: L21 (5.4 mm), L22 (0.9 mm), L23 (4.4 mm), with a total glass thickness of only 10.7 mm and modest diameters. Condition (5) (νdp ≥ 60, patent ¶0033–0034) ensures that L21's positive power converges the beam early in Gr2, allowing L22 and L23 to be smaller and lighter — supporting the quiet, high-speed autofocus demanded by video recording on TL-system cameras.

## Aspherical Surfaces

The design employs four aspherical surfaces on two elements: L12 (surfaces 3 and 4, both aspheric) and L23 (surfaces 12 and 13, both aspheric). Both elements use S-BAL35 (OHARA), a barium crown glass carrying OHARA's S-prefix designation (conventional polishing grade, not the L-prefix used for precision glass molding). The aspherical surfaces are therefore inferred to be polished glass aspherics rather than PGM-molded.

The sag equation used in the patent (¶0060, equation AS) is:

$$Z(h) = \frac{c \cdot h^2}{1 + \sqrt{1 - (1+K) \cdot c^2 \cdot h^2}} + \sum A_j \cdot h^j$$

where $c = 1/R$, $K$ is the conic constant, and $A_j$ are the polynomial coefficients. All four surfaces have $K = 0$ (spherical base curve); the aspherical correction is entirely in the polynomial terms.

### Surface 3 (L12 front, concave to object)

R = −103.089 mm. A₄ = +5.4249 × 10⁻⁶, A₆ = +6.0883 × 10⁻⁹, A₈ = −6.9548 × 10⁻¹². Aspherical departure at h = 10 mm: approximately +60 µm (surface becomes less concave at the rim). The positive A₄ term reduces the effective concavity at the margin, acting to reduce undercorrected spherical aberration from the front group.

### Surface 4 (L12 rear, concave to object)

R = −38.467 mm. A₄ = +6.7595 × 10⁻⁶; all higher-order coefficients are zero. Departure at h = 10 mm: approximately +68 µm. This is the simplest aspherical profile in the design — only A₄ is used, producing a smooth fourth-order correction that is straightforward to manufacture by CNC polishing. The surface similarly reduces effective concavity at the margin.

Note: The OCR of the patent document for surface 4's aspheric table (¶0112) contains formatting artifacts; the coefficient values were reconstructed from the tabular layout and cross-checked for physical consistency with the surface shape described in ¶0054. The same surface in Examples 10 and 11 (¶0119, ¶0126) shows the same pattern — only A₄ non-zero — confirming the reconstruction.

### Surface 12 (L23 front, nearly flat, concave to object)

R = −502.215 mm. A₄ = −1.8527 × 10⁻⁵, A₆ = −1.5091 × 10⁻⁷, A₈ = +1.2319 × 10⁻⁹, A₁₀ = −5.6523 × 10⁻¹². Departure at h = 10 mm: approximately −270 µm. This is the strongest aspherical surface in the design. The large negative A₄ term makes the nearly flat base sphere significantly more concave at the rim, effectively creating a zone of increasing negative power that counteracts the field curvature introduced by the positive elements upstream. The higher-order terms (A₆ through A₁₀) fine-tune the correction at intermediate and marginal zones.

### Surface 13 (L23 rear, strongly concave to object)

R = −20.577 mm. A₄ = +4.5088 × 10⁻⁶, A₆ = −1.3825 × 10⁻⁷, A₈ = +1.1438 × 10⁻⁹, A₁₀ = −5.2275 × 10⁻¹². Departure at h = 10 mm: approximately −31 µm. The relatively small departure on this strongly curved surface provides a subtle zonal correction that addresses higher-order coma and astigmatism at the edge of the APS-C field.

The patent (¶0031) provides the rationale for placing the double-aspheric element at the image side of Gr2: it is the position where ray height changes most during focusing, so aspherical correction there has the largest leverage over focus-dependent aberrations (principally field curvature and spherical aberration).

## Conditional Expressions

The patent defines five conditional inequalities governing the macro lens design. Example 9 satisfies all five, including the tighter sub-conditions (2a), (3a), (4a), and (5a):

| Condition | Expression | Range | Ex. 9 value | Status |
|---|---|---|---|---|
| (1) | β (closest focus) | β ≤ −0.45 | −1.0 | ✓ |
| (2) | f₂/f | 0.40 < x < 0.68 | 0.539 | ✓ |
| (2a) | f₂/f | 0.45 < x < 0.63 | 0.539 | ✓ |
| (3) | f₃/f | −1.20 < x < −0.30 | −0.603 | ✓ |
| (3a) | f₃/f | −1.00 < x < −0.40 | −0.603 | ✓ |
| (4) | f/f₁ | −0.20 < x < 0.30 | 0.044 | ✓ |
| (4a) | f/f₁ | −0.15 < x < 0.20 | 0.044 | ✓ |
| (5) | νdp (L21) | νdp ≥ 60 | 95.10 | ✓ |
| (5a) | νdp (L21) | νdp ≥ 65 | 95.10 | ✓ |

Condition (2) constrains Gr2's focal length relative to the system EFL: if f₂/f is too small, Gr2's positive power is too strong and astigmatism varies excessively during focusing; if too large, the focus travel required for 1:1 magnification becomes prohibitively long (¶0021). Example 9 sits near the center of the (2a) range at 0.539.

Condition (3) constrains Gr3's negative power: too weak (f₃/f closer to 0) and the focus travel increases while back focus becomes insufficient; too strong (f₃/f more negative) and spherical aberration in Gr2 becomes difficult to control because marginal ray heights increase (¶0025). Example 9 at −0.603 is near the center of the (3a) range.

Condition (4) constrains Gr1's power and is the most distinctive condition in the design. With f/f₁ = 0.044, Gr1 is very nearly afocal — its focal length is 23× that of the system. This near-afocal state ensures that the beam characteristics entering Gr2 change only modestly across the focus range, which is essential for controlling spherical aberration and coma variation at macro magnifications.

## Design Heritage and Context

This patent belongs to a lineage of Konica Minolta macro lens designs for Leica's mirrorless camera systems. The three cited prior art references (JP 2011-180226A, JP 2008-257088A, JP 2011-048232A) represent earlier macro lens approaches that either used floating focus (multiple moving groups, mechanically complex) or single-group focus with more elements in the moving group (heavier, slower AF). The present invention's contribution is the combination of single-group inner focus (for mechanical simplicity and AF speed) with a near-afocal front group (for focus-invariant aberration correction), enabled by strong aspherical correction in both Gr1 and Gr2.

The production lens was announced on 1 September 2016 as the sixth TL-mount lens and the first macro lens in Leica's TL system. It carries the "APO" designation, which under Leica's internal standard requires apochromatic correction at all apertures and all focus distances — a requirement met by the FCD100/S-TIH14 pairing in the focus group and verified by the aberration plots in the patent (Figures 39–40) showing well-corrected lateral color at both infinity and 1:1.

## Sources

1. JP 2016-090725 A (Konica Minolta, Inc. / Tanaka Hiroaki), published 23 May 2016. Full text and figures consulted.
2. Leica Camera AG product specification: APO-Macro-Elmarit-TL 60 mm f/2.8 ASPH (11086/11087). Accessed via leica-camera.com.
3. OHARA Inc. optical glass catalog (2018 edition). Used for glass identification of S-TIH53, S-BAL35, S-TIM28, S-TIH14, S-LAH79, S-NSL3, S-BAL2, S-LAL18.
4. HOYA Corporation optical glass catalog. Used for identification of FCD100 (nd = 1.43700, νd = 95.10).
5. PhotoArk review of the Leica APO-Macro-Elmarit-TL 60 mm f/2.8 (photoark.co.uk). Production behavior note regarding automatic aperture stop-down at closest focus.
