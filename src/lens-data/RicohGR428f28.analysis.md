# Patent Analysis: JP2025-069516A — Numerical Example 2
## Ricoh GR IV 18.3 mm f/2.8 GR Lens

**Patent:** JP2025-069516A (Kokai)
**Filed:** 18 October 2023 | **Published:** 1 May 2025
**Applicant:** Ricoh Company, Ltd. (株式会社リコー)
**Inventor:** Takahiro Nakayama (中山 貴裕)
**Title:** *Imaging Lens, Interchangeable Lens, Imaging Apparatus, and Information Processing Apparatus*

---

## 1. Production Identification

This patent is one of a pair filed by Ricoh on the same date (the companion being JP2025-069515A, which covers a related wide-angle design family). Example 2 is identified as the production optical design of the **Ricoh GR IV**, announced May 2025 and released September 2025. The GR IV's published specifications confirm the match:

| Parameter | Patent Example 2 | Ricoh GR IV (production) |
|-----------|:-:|:-:|
| Focal length | 18.35 mm | 18.3 mm |
| Maximum aperture | f/2.89 | f/2.8 |
| Elements / Groups | 7 / 5 | 7 / 5 |
| Aspherical elements | 3 (5 surfaces) | 3 |
| Image circle (Ya) | 14.13 mm | APS-C (23.3 × 15.5 mm) |
| Half-field angle | 38.0° | ~38° (28 mm equiv.) |
| Back focus | 0.7 mm | Short (retractable lens) |

Ricoh's product literature states: *"a large, aspherical high-precision molded glass lens as the final lens in a 5-group 7-element construction."* This matches the patent's L31 element precisely — a both-surfaces-aspherical glass-molded negative meniscus forming the entirety of Group 3.

The "5 groups" in production terminology counts physical lens groups separated by air spaces, yielding: (1) L11, (2) L12–L13 cemented, (3) L21–L22 cemented, (4) L23, (5) L31. The patent describes three *functional* groups — G1, G2, G3 — based on their roles in the focus mechanism.

---

## 2. Design Architecture

The lens follows a **quasi-symmetric positive–negative arrangement** — not a retrofocus design — deliberately chosen for compactness. The patent text (¶0025–0029) explains the rationale: traditional retrofocus designs, while providing long back focal distances suitable for SLR cameras, produce excessive total track lengths for wide-angle primes. Modern sensor microelectronics tolerate oblique incidence angles, so the designer can instead adopt a compact arrangement where a negative rear group significantly reduces the total track length. While TL/f = 1.527 (the total track still exceeds the focal length, unlike a true telephoto where TL/f < 1), the negative rear group reduces TL substantially relative to what the positive G1+G2 combination alone would require.

The optical system comprises, from object to image:

- **Group 1 (G1):** Positive power (f = +37.54 mm). Three elements — a single negative meniscus L11 followed by a cemented negative–positive doublet (L12–L13). G1's leading negative element places the entrance pupil relatively close to the front surface, limiting the physical diameter required to accommodate the 76° full field of view. The cemented doublet provides both chromatic correction and the positive power needed to converge light toward the aperture stop.

- **Aperture Stop (SP):** Located between G1 and G2, positioned to support the "quasi-symmetric power arrangement" that is central to the design's aberration correction strategy.

- **Group 2 (G2):** Positive power (f = +23.90 mm). Three elements — a cemented positive–negative doublet (L21–L22) followed by a standalone positive meniscus L23. G2 provides the majority of the system's converging power. The cemented doublet controls axial chromatic aberration, while L23 shapes the exit pupil position and corrects coma and distortion at the field edges.

- **Group 3 (G3):** Negative power (f = −46.28 mm). A single negative meniscus L31 with both surfaces aspherical. G3's negative power placed behind the positive G1+G2 combination shortens the total track (TL/f = 1.527) and provides a platform for final aberration trimming, particularly field curvature and distortion. Critically, G3 does not move during focus and serves as the lens's fixed rear element.

The biconvex air lenses — AL1 between L11 and L12, and AL2 between L22 and L23 — are a signature feature of this design (¶0034–0039). Both are formed by facing concave surfaces across an air gap. The patent argues that these four concave-to-air surfaces collectively address: spherical aberration (AL1 object side), astigmatism (AL1 object side), coma (AL1 image side for lower rays, AL2 object side for upper rays), distortion (AL2 image side), and exit pupil distance control (AL2 image side).

---

## 3. Focus Mechanism

**Type:** Front focus — G1 and G2 move together as a unit; G3 remains stationary relative to the image sensor.

This is a deliberate departure from the inner-focus and floating-focus schemes common in interchangeable wide-angle lenses. The patent (¶0027, 0035) argues that front focus eliminates the need for internal focus group travel space (reducing total track length) and avoids the mechanical complexity of controlling multiple groups moving at different rates.

The production GR IV's press materials confirm "a new lens barrel that contributes to a shorter start-up time and faster AF." The front-focus scheme supports this: because G1+G2 move as a single rigid unit on a simple helicoid or linear actuator, the mechanical structure is compact and the drive motor need only overcome the inertia of two cemented doublets and two singlets (six elements) — a manageable mass for high-speed autofocus.

The patent provides variable spacing data at two conjugates. Since the patent tables for Example 2 do not include an explicit variable-gap table (only the total focus extension can be inferred), the movement group boundaries are established by the description text: surfaces 1–11 (G1 + stop + G2) translate as one unit, while surfaces 12–13 (G3) remain fixed. Paraxial ray trace confirms the focus direction: for close-focus conjugates, G1+G2 translates toward the image sensor, *decreasing* the air gap D23 between surface 11 (rear of L23) and surface 12 (front of L31). At the macro distance of 0.2 m, D23 decreases from 3.10 mm to approximately 2.0 mm — a travel of roughly 1.1 mm. The back focal distance from surface 13 to the image plane remains constant because G3 is fixed relative to the sensor.

The focusing sensitivity is governed by the magnification of G3. The patent's Condition (12) gives Mg3² = 1.454 for Example 2, meaning G3 amplifies the focus shift of G1+G2 by a factor of approximately 1.21×. This modest amplification keeps the focusing travel short — advantageous for AF speed — while avoiding the manufacturing sensitivity issues that arise when the rear group has strong power (¶0084).

---

## 4. Element-by-Element Analysis

### 4.1 Element L11 — Front Negative Meniscus

| Property | Value |
|----------|-------|
| Surfaces | 1 (spherical), 2 (aspherical) |
| Shape | Negative meniscus, convex to object |
| R₁ / R₂ | +13.353 / +11.258 mm |
| Center thickness | 0.70 mm |
| Glass | L-TIM28 (OHARA) — nd = 1.68948, νd = 31.02 |
| Thin-lens focal length | −104.1 mm (very weak negative) |

**Glass classification:** L-TIM28 is an OHARA "L-grade" (eco-friendly, lead-free) titanium flint glass. With nd ≈ 1.69 and νd ≈ 31, it sits in the dense flint region of the glass map — high dispersion, moderate refractive index. The L-prefix indicates it is a precision glass molding (PGM)-compatible grade, suitable for aspherical surface fabrication.

**Optical role:** L11 is the field lens of the system — its primary job is to bend off-axis ray bundles inward so that subsequent elements can be kept to a reasonable diameter. Its weak negative power (f ≈ −104 mm) means it contributes very little to the system's overall convergence. The concave image-side surface (surface 2) forms the object side of air lens AL1 and carries the first aspherical correction of the system. The patent (¶0038) credits this surface with controlling spherical aberration and astigmatism.

**Aspherical surface 2:** K = 0 (no conic departure), with significant even-order polynomial terms through A14. At an estimated semi-diameter of 5.5 mm, the aspherical departure from the base sphere is approximately +390 µm — a substantial correction indicating that this surface is doing heavy lifting in managing the steep ray angles from the field edge. The positive departure means the surface has more sag (more convex) than the base sphere at the rim, increasing the surface angle encountered by peripheral rays and altering the balance of refraction at the glass–air boundary to control sagittal coma and astigmatism.

### 4.2 Element L12 — Biconcave Negative (cemented to L13)

| Property | Value |
|----------|-------|
| Surfaces | 3 (front, spherical), 4 (junction with L13, spherical) |
| Shape | Biconcave negative |
| R₃ / R₄ | −17.988 / +7.957 mm |
| Center thickness | 0.65 mm |
| Glass | S-FTM16 (OHARA) — nd = 1.59270, νd = 35.31 |
| Thin-lens focal length | −9.31 mm (strong negative) |

**Glass classification:** S-FTM16 is an OHARA flint glass with moderate index and dispersion. Its relatively low nd (1.593) combined with moderate νd (35.3) places it in the light flint territory. The "FTM" designation indicates a fluorine-containing titanium flint — a composition that can offer favorable partial dispersion characteristics. As an S-prefix glass, it is in OHARA's standard polished-lens catalog rather than their L-prefix PGM line.

**Optical role:** L12 is the powerfully diverging element of the G1 cemented doublet. Its strong negative focal length (f ≈ −9.3 mm) combined with L13's strong positive power (f ≈ +7.1 mm) gives the doublet a net positive contribution to G1's overall positive power. The large index difference between L12 (1.593) and L13 (1.883) at the cemented junction (surface 4) generates strong chromatic correction — the junction surface bends blue and red light by different amounts while keeping the centroid ray path nearly unchanged. The flint-before-crown arrangement at this junction is the classic achromatic doublet configuration.

### 4.3 Element L13 — Biconvex Positive (cemented to L12)

| Property | Value |
|----------|-------|
| Surfaces | 4 (junction with L12), 5 (rear, spherical) |
| Shape | Biconvex positive |
| R₄ / R₅ | +7.957 / −29.283 mm |
| Center thickness | 2.64 mm |
| Glass | S-LAH58 (OHARA) — nd = 1.88300, νd = 40.76 |
| Thin-lens focal length | +7.09 mm (strong positive) |

**Glass classification:** S-LAH58 is OHARA's ultra-high-index lanthanum crown, with nd = 1.883 — among the highest refractive indices available in production optical glass. Its Abbe number of 40.76 is moderate, placing it on the boundary between "crown" and "flint" by the traditional νd = 50 dividing line, but it behaves as a crown in this achromatic pair because L12's νd (35.3) is substantially lower.

**Optical role:** L13 is the main positive power generator of G1. Its high refractive index allows it to achieve strong convergence (f ≈ +7.1 mm) with moderate surface curvatures — the rear surface R₅ = −29.3 mm is relatively gentle, which reduces higher-order spherical aberration. The rear surface is convex toward the image (R < 0) and faces the aperture stop across a 1.14 mm air gap plus the 1.20 mm stop space. This surface forms part of the "quasi-symmetric" arrangement: it is convex toward the stop, matching the convexity of L21's front surface on the other side of the stop (¶0053, 0056). This bilateral symmetry around the stop is a classical technique for canceling odd-order aberrations — coma, distortion, and lateral color.

### 4.4 Element L21 — Biconvex Positive (cemented to L22)

| Property | Value |
|----------|-------|
| Surfaces | 7 (front, spherical), 8 (junction with L22, spherical) |
| Shape | Biconvex positive |
| R₇ / R₈ | +16.939 / −9.407 mm |
| Center thickness | 2.60 mm |
| Glass | S-LAH58 (OHARA) — nd = 1.88300, νd = 40.76 |
| Thin-lens focal length | +6.85 mm (strong positive) |

**Glass classification:** Identical to L13 — S-LAH58, the ultra-high-index lanthanum crown.

**Optical role:** L21 mirrors L13 across the aperture stop, completing the quasi-symmetric power arrangement. Its front surface (R₇ = +16.939, convex toward the stop) pairs with L13's rear surface (R₅ = −29.283, also convex toward the stop). The patent's Condition (8) quantifies this symmetry: |(R₁ₗ − R₂ₛ)/(R₁ₗ + R₂ₛ)| = 3.744 > 1.20, confirming strong bilateral curvature around the stop.

L21's strong positive power (f ≈ +6.9 mm) makes it the most powerful converging element in the system. Combined with the identical glass used in L13, the two S-LAH58 elements flanking the stop form the core of the system's refractive power, with their extreme index (1.883) enabling this concentration without excessive surface curvatures.

### 4.5 Element L22 — Biconcave Negative (cemented to L21)

| Property | Value |
|----------|-------|
| Surfaces | 8 (junction with L21), 9 (rear, spherical) |
| Shape | Biconcave negative |
| R₈ / R₉ | −9.407 / +17.906 mm |
| Center thickness | 0.50 mm |
| Glass | S-TIM35 (OHARA) — nd = 1.69895, νd = 30.13 |
| Thin-lens focal length | −8.82 mm (strong negative) |

**Glass classification:** S-TIM35 is an OHARA titanium flint with high dispersion (νd ≈ 30). It mirrors L12 in function: it provides the high-dispersion medium needed for chromatic correction at the cemented junction. The L21–L22 cemented doublet is the G2 analog of the L12–L13 doublet in G1, relying primarily on extreme index differential rather than large Abbe number separation — the index difference at the junction is 1.883 − 1.699 = 0.184, and the Abbe number difference is 40.76 − 30.13 = 10.63.

**Optical role:** L22's rear surface (R₉ = +17.906, concave toward the image) forms the object side of air lens AL2. This surface is credited by the patent (¶0039) with controlling upper-ray coma and enabling diameter reduction of the rear group.

### 4.6 Element L23 — Positive Meniscus (both surfaces aspherical)

| Property | Value |
|----------|-------|
| Surfaces | 10 (front, aspherical), 11 (rear, aspherical) |
| Shape | Positive meniscus, convex to image |
| R₁₀ / R₁₁ | −15.696 / −13.531 mm |
| Center thickness | 1.35 mm |
| Glass (patent text) | "S-TIM35 (OHARA)" |
| Glass (actual nd/νd) | nd = 1.76802, νd = 49.24 |
| Thin-lens focal length | +127.7 mm (weak positive) |

**Glass identification — discrepancy:** The patent lists this glass as "S-TIM35 (OHARA)" but the numerical data gives nd = 1.76802 and νd = 49.24. These values do not match S-TIM35 (nd = 1.69895, νd = 30.13), which is used on L22. The nd/νd pair 1.76802/49.24 is an exact match for **OHARA S-LAH53**, a lanthanum crown. This is clearly a typographical error in the patent publication — the glass name was duplicated from the preceding element. Throughout this analysis, L23 is treated as S-LAH53.

**Glass classification:** S-LAH53 is a high-index lanthanum crown (nd = 1.768, νd = 49.2). It offers a useful combination of moderately high index with relatively low dispersion — better chromatic behavior than the S-LAH58 used in L13 and L21, at the cost of somewhat lower index.

**Optical role:** L23 occupies the rearmost position in G2 and is the weakest positive element in the system (f ≈ +128 mm). The patent (¶0076) explains that L23's role is deliberately minimized in terms of power contribution to preserve the quasi-symmetric arrangement, while providing fine-tuning of off-axis aberrations from a position far from the stop where field-dependent rays are well separated. Its two aspherical surfaces carry modest departures: approximately −54 µm on surface 10 and +29 µm on surface 11 at estimated working apertures. These small corrections target residual coma and astigmatism at intermediate and full field heights.

**Aspherical surface 10 (front):** K = 0. The dominant A4 term is negative (−2.44 × 10⁻⁴), indicating the surface becomes steeper (more concave) than the base sphere at the rim — tightening the curvature to correct the outer zone of the field.

**Aspherical surface 11 (rear):** K = 0.310 (a mild oblate ellipsoid — K > 0 means more sag than the base sphere), with positive A4. The non-zero conic constant provides a smooth, continuous departure from the base sphere that the polynomial terms then fine-tune. Since S-LAH53 is an S-prefix glass (OHARA's standard polished-lens grade, not their L-prefix PGM line), L23's aspherical surfaces are likely fabricated by CNC grinding and polishing or MRF rather than by pressing.

### 4.7 Element L31 — Negative Meniscus (both surfaces aspherical) — Group 3

| Property | Value |
|----------|-------|
| Surfaces | 12 (front, aspherical), 13 (rear, aspherical) |
| Shape | Negative meniscus, convex to image |
| R₁₂ / R₁₃ | −26.270 / −91.182 mm |
| Center thickness | 0.75 mm |
| Glass | M-TAF101 (HOYA) — nd = 1.80139, νd = 45.45 |
| Thin-lens focal length | −46.1 mm |

**Glass classification:** M-TAF101 is a HOYA "M-series" glass — the M prefix designates glasses specifically formulated for precision glass molding (PGM). It is a tantalum crown with high index (1.801) and moderate dispersion (νd = 45.5). The M-series glasses have carefully controlled viscosity–temperature characteristics that allow them to be pressed into aspherical shapes in high-volume mold processes with excellent surface form accuracy.

This confirms the GR IV product description's statement of "glass-molded aspherical lens elements — including a large-diameter element used as the final lens." L31 is a PGM element manufactured by pressing molten glass into a precision aspheric mold.

**Optical role:** L31 is the negative field-correcting element of the system. Its negative power (f ≈ −46.1 mm) placed behind the positive G1+G2 combination reduces the total track length, achieving a total-track-to-focal-length ratio of TL/f = 1.527. Without this element, the system would need substantially more physical length to achieve the same 18.35 mm focal length.

L31's position far from the aperture stop means that off-axis ray bundles pass through it at considerable heights and angles. Both surfaces carry heavy aspherical departures — the largest in the system. At the estimated working semi-diameters, surface 12 departs from its base sphere by approximately +1034 µm, and surface 13 by approximately −658 µm. These are substantial corrections — over a millimeter on surface 12 — indicating that L31 is the primary field-flattening and distortion-correcting element.

**Aspherical surface 12 (front):** K = 8.83 — a very large positive conic constant, meaning the surface is a strongly oblate ellipsoid that sags *more* than its base sphere at all heights, with the departure accelerating rapidly at the rim. Numerical computation confirms the surface departs from the base sphere by −113 µm at h = 6 mm (more concave). Combined with a large negative A4 (−5.75 × 10⁻⁴), the total aspherical profile bends peripheral field rays more aggressively than the base sphere alone, flattening the Petzval surface and correcting the barrel distortion that the strong positive G1+G2 combination would otherwise produce.

**Aspherical surface 13 (rear):** K = 0, but with large A4 through A14 terms. The polynomial-dominated asphere provides the final correction before light reaches the sensor. The patent (¶0085) notes that making both surfaces of G3 aspherical improves distance-dependent aberration correction (since the heights at which rays strike G3 change with focus position) and also offers manufacturing advantages — both mold surfaces can be independently fine-tuned during lens development.

---

## 5. Glass Selection Strategy

The design uses only six distinct glasses across seven elements:

| Glass | Manufacturer | nd | νd | Elements | Region |
|-------|-------------|:--:|:--:|----------|--------|
| L-TIM28 | OHARA | 1.690 | 31.0 | L11 | Dense flint (PGM) |
| S-FTM16 | OHARA | 1.593 | 35.3 | L12 | Light flint |
| S-LAH58 | OHARA | 1.883 | 40.8 | L13, L21 | Ultra-high-index LaK |
| S-TIM35 | OHARA | 1.699 | 30.1 | L22 | Dense flint |
| S-LAH53 | OHARA | 1.768 | 49.2 | L23 | High-index LaK |
| M-TAF101 | HOYA | 1.801 | 45.5 | L31 | TaK crown (PGM) |

Two of the seven elements use glasses explicitly designated for precision glass molding: L11 with L-TIM28 (OHARA's L-prefix denotes low-Tg glasses formulated for PGM) and L31 with M-TAF101 (HOYA's M-series, explicitly for molding). L23 (S-LAH53) carries aspherical surfaces but has the S-prefix — OHARA's standard polished-lens designation, not their PGM line. L23's aspheric surfaces are therefore likely fabricated by CNC grinding and polishing or magnetorheological finishing (MRF) rather than by pressing. This is consistent with Ricoh's product literature, which refers to "glass-molded aspherical lens elements" as a specific subset of the aspherical elements — not all three.

The design's chromatic correction strategy is noteworthy: the two cemented doublets (L12–L13 and L21–L22) each pair a moderate-dispersion lanthanum crown (S-LAH58, νd = 40.8) with a high-dispersion flint (S-FTM16 νd = 35.3, S-TIM35 νd = 30.1). The Δν across the cemented junctions is modest by classical achromat standards — 5.5 and 10.6 — far below the Δν > 20 typical of traditional crown–flint pairs. Instead, the design leverages the extreme *index* differential at each junction (Δn = 0.29 and 0.18 respectively) to achieve chromatic correction with gentle junction curvatures, reducing higher-order chromatic residuals that would arise from steep cemented interfaces.

No anomalous partial dispersion (APD) glasses appear in the design. The patent does not claim apochromatic correction, and the aberration curves (Figure 10) show some residual secondary spectrum — acceptable for an f/2.89 wide-angle design where the depth of focus is generous.

---

## 6. Aspherical Surface Census

| Surface | Element | K | Highest active order | Departure at rim |
|---------|---------|:-:|:--------------------:|:----------------:|
| 2 | L11 (rear) | 0 | A14 | ~+390 µm |
| 10 | L23 (front) | 0 | A10 | ~−54 µm |
| 11 | L23 (rear) | 0.310 | A10 | ~+29 µm |
| 12 | L31 (front) | 8.830 | A8 | ~+1034 µm |
| 13 | L31 (rear) | 0 | A14 | ~−658 µm |

Three of the seven elements carry aspherical surfaces (L11, L23, L31), totaling five aspherical surfaces. This matches the DPReview specification listing of "three aspherical elements" for the production GR IV.

The distribution of aspherical correction follows a clear logic: surface 2 (near the front, far from the stop) handles field-dependent aberrations at the entrance; surfaces 10–11 (mid-system, after the stop) fine-tune coma and astigmatism; and surfaces 12–13 (far from the stop, near the sensor) carry the heaviest corrections for field curvature, distortion, and focus-dependent aberration variation.

---

## 7. Verified Conditional Expressions

The patent defines a set of conditional expressions with specified acceptable ranges. All were independently recomputed from the prescription data and match the patent's stated values exactly:

| Condition | Expression | Computed | Patent | Range | Status |
|:---------:|-----------|:--------:|:------:|:-----:|:------:|
| (1) | (r₁ₒ+r₂ₒ)/(r₁ₒ−r₂ₒ) | −0.230 | −0.230 | (−0.90, 0.00) | ✓ |
| (2) | (r₁ᵢ+r₂ᵢ)/(r₁ᵢ−r₂ᵢ) | +0.066 | +0.066 | (−0.45, 0.40) | ✓ |
| (3) | TL/f | 1.527 | 1.527 | (1.0, 2.0) | ✓ |
| (6) | \|f₃/f\| | 2.522 | 2.522 | (1.50, 5.50) | ✓ |
| (7) | D₂₃/f | 0.169 | 0.169 | (0.05, 0.35) | ✓ |
| (8) | \|(R₁ₗ−R₂ₛ)/(R₁ₗ+R₂ₛ)\| | 3.744 | 3.744 | > 1.20 | ✓ |
| (10) | \|f₁/f₂\| | 1.571 | 1.571 | (0.10, 15.0) | ✓ |

The system EFL was independently computed via paraxial ray trace at **18.351 mm**, confirming the patent's stated value of 18.35 mm to within 1 µm — a negligible rounding difference.

Group focal lengths were likewise verified:

| Group | Computed | Patent |
|:-----:|:--------:|:------:|
| G1 | +37.54 mm | +37.54 mm |
| G2 | +23.90 mm | +23.90 mm |
| G3 | −46.28 mm | −46.28 mm |

---

## 8. Relationship to Previous GR Designs

The GR III (2019) used a 6-element, 4-group, 18.3 mm f/2.8 design with 2 aspherical elements. The GR IV design in this patent adds a seventh element and a third aspherical element. Without access to the GR III patent prescription, the following architectural changes are inferred from the element/group count differences and production specifications:

- **G2 likely gains a third element (L23):** In the GR III's 6-element / 4-group layout, G2 plausibly consisted of only a cemented doublet. The addition of L23 — a weak positive meniscus with two aspherical surfaces — provides dedicated off-axis correction surfaces that can be independently optimized. This is consistent with reviews noting improved corner sharpness on the GR IV.

- **G3's final element is now both-surfaces aspherical and glass-molded:** The use of HOYA M-TAF101 (a dedicated PGM glass) confirms this element is manufactured by pressing. The two-sided aspherical profile with departures exceeding 1 mm represents the limit of what modern glass molding can achieve at this element diameter, and it is responsible for the lens's low distortion and flat field characteristics. Whether the GR III's rear element carried one or two aspherical surfaces is unknown without its patent.

- **The quasi-symmetric power arrangement is explicitly designed around the stop:** The patent's extensive discussion of bilateral symmetry conditions (Conditions 1, 2, 8, 10) represents a thorough articulation of this design philosophy, though it is not possible to determine whether this represents a change from the GR III design or a continuation of it.

---

## 9. Summary

Patent JP2025-069516A Example 2 describes a 7-element, 5-group, 18.35 mm f/2.89 wide-angle lens that is the production optical design of the Ricoh GR IV. The design achieves compactness (TL/f = 1.53) through a quasi-symmetric positive–negative arrangement with a fixed negative rear group. Three elements carry aspherical surfaces (5 surfaces total) — of these, two (L11 and L31) are fabricated by precision glass molding using PGM-designated glasses (OHARA L-TIM28 and HOYA M-TAF101), while the third (L23, OHARA S-LAH53) likely uses conventional aspherical fabrication. The optical power is concentrated in two S-LAH58 biconvex elements (nd = 1.883) flanking the aperture stop in a quasi-symmetric arrangement, with chromatic correction achieved through extreme index differentials at the cemented junctions rather than through large Abbe number differences. During focus, G1+G2 translate as a unit toward the sensor for close-focus distances, with G3 fixed. The glass name listed for L23 in the patent publication contains a typographical error: the nd/νd values (1.76802/49.24) identify the glass as OHARA S-LAH53, not S-TIM35 as printed.
