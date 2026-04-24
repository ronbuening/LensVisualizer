# Nikon NIKKOR Z 35mm f/1.8 S — Optical Design Analysis

**Patent:** JP 2019-090947A (Published 2019-06-13)  
**Applicants:** Konica Minolta Inc. / Nikon Corporation  
**Inventors:** Yamada Keiko, Imashima Ryosuke, Tatsuno Wataru, Sato Haruo  
**Embodiment:** Example 4 (EX4)  
**Production match confidence:** High — convergent evidence across element count (11), group count (9), aspherical element count (3), ED element count (2), field angle (64.9° patent vs 63° Nikon spec), f-number (f/1.85 patent vs f/1.8 marketed), MFD (≈0.257 m scaled vs 0.25 m Nikon spec), and floating focus mechanism with three variable gaps. Note: EX1 shares the same EFL, f-number, and field angle as EX4, but has only 1 aspherical element (L23, 2 aspherical surfaces) versus EX4's 3 aspherical elements (L17, L23, L31, 6 aspherical surfaces). Nikon specifies 3 aspherical elements, uniquely matching EX4.

---

## 1. Overview

The NIKKOR Z 35mm f/1.8 S was one of the three launch lenses for Nikon's Z-mount mirrorless system in August 2018. It is an S-Line designation lens — Nikon's tier for highest optical performance — featuring 11 elements in 9 groups, with 2 ED (Extra-low Dispersion) glass elements, 3 aspherical elements, and Nano Crystal Coat. Nikon describes the lens as employing a "multi-focusing system" for high-speed, high-accuracy autofocus.

The patent JP 2019-090947A is a joint filing by Konica Minolta and Nikon (a collaboration that has produced several Z-mount lens designs). It presents four numerical examples of a positive–positive–negative three-group imaging lens with floating focus. Example 4 matches the production NIKKOR Z 35mm f/1.8 S across all verifiable parameters.

The prescription in the patent is normalized to a design EFL of 1.572 mm. All dimensional quantities in this analysis are presented both in normalized form and scaled to the 35 mm production focal length, using a scale factor of 22.26×.

---

## 2. Optical Architecture

### 2.1 Group Structure

The lens is a three-group design — positive, positive, negative — with the aperture stop located between Groups 1 and 2. From object to image:

**Group 1 (Gr1) — Positive, fixed during focus.** Seven elements in five air-separated components: one singlet, two cemented doublets, one singlet, and one aspherical singlet. Gr1 carries most of the system's refracting power and is responsible for the initial convergence of the wide-field, large-aperture light cone. Its focal length is approximately 46.5 mm (f₁/f = 1.33, from patent Table 2), placing it firmly within the patent's condition (1): 1.0 < f₁/f < 2.5.

**Aperture Stop (ST) — Fixed with Gr1.** Positioned in the air gap between L17 and L21. The stop semi-diameter at infinity focus is approximately 11.9 mm (scaled), narrowing slightly to 11.3 mm at minimum focus distance.

**Group 2 (Gr2) — Positive, moves toward the object during close focus.** Three elements: one negative meniscus, one biconvex positive (ED), and one aspherical positive meniscus. Gr2's focal length is approximately 55.9 mm (f₂/f = 1.60, from patent Table 2). During focus from infinity to MFD, Gr2 advances approximately 5.1 mm toward the object.

**Group 3 (Gr3) — Negative, moves toward the image during close focus.** A single aspherical negative meniscus element. Gr3's focal length is approximately −100.3 mm. During focus from infinity to MFD, Gr3 retreats approximately 4.6 mm toward the image plane.

The opposing focus movements of Gr2 and Gr3 constitute the "floating focus" (フローティングフォーカス) mechanism described in the patent. The Gr1–Gr2 air gap narrows while the Gr2–Gr3 air gap widens during close focus. This bidirectional movement allows the field curvature and spherical aberration changes introduced by each focus group to cancel each other, maintaining image quality from infinity to the 0.25 m minimum focus distance.

### 2.2 Variable Gap Conservation

The patent specifies three variable air gaps: d₁₃ (STO to Gr2), d₁₉ (Gr2 to Gr3), and d₂₁ (Gr3 to cover glass). Since Gr1 and the image plane are both stationary, the sum of all spacings from the rear of Gr1 to the image must be constant. Computational verification confirms this constraint is satisfied exactly:

| Gap | Infinity (POS1) | Close (POS2) |
|-----|-----------------|--------------|
| d₁₃ (STO → Gr2) | 0.514 (11.4 mm) | 0.283 (6.3 mm) |
| d₁₉ (Gr2 → Gr3) | 0.229 (5.1 mm) | 0.666 (14.8 mm) |
| d₂₁ (Gr3 → image) | 0.751 (16.7 mm) | 0.545 (12.1 mm) |
| **Sum** | **1.494** | **1.494** |

The total from L17's rear surface to the image plane is 2.5435 (normalized) at both focus positions, confirming zero discrepancy.

### 2.3 Telephoto Ratio

The BFD (last lens surface to image) is approximately 19.3 mm, and the EFL is 35 mm, yielding BFD/EFL = 0.55. This classifies the lens as a mild telephoto type — the back focal distance is shorter than the focal length. This is consistent with the 35mm focal length on Z-mount, where the 16 mm flange distance requires only modest clearance (the design clears the flange by approximately 3.3 mm).

### 2.4 Petzval Sum and Field Curvature

The Petzval sum — computed as Σ φᵢ/(nᵢ·n'ᵢ) across all 20 refracting surfaces — is +0.0547 (normalized), yielding a Petzval field radius of approximately 408 mm (scaled), or 11.7× the focal length. The positive sum indicates a mildly inward-curving natural image surface. This is a well-corrected value for a fast wide-angle lens; the six negative elements (L11, L13, L14, L17, L21, L31) substantially counteract the Petzval contributions of the strong positive elements, particularly L12, L15, and L16. Gr3's single negative element (L31) plays a disproportionate role here — positioned at the rear of the system where it has maximum lever arm on the field, it acts as a dedicated field flattener whose aspherical surfaces provide the final fine correction to flatten the natural Petzval curvature across the full image circle.

### 2.5 Conditional Expressions

The patent defines six conditional expressions. All are satisfied by EX4:

| Condition | Expression | EX4 Value | Range |
|-----------|-----------|-----------|-------|
| (1) | f₁/f | 1.33 | 1.0–2.5 |
| (2) | f₂/f | 1.60 | 1.2–3.0 |
| (3) | \|f₃/f₂\| | 1.79 | 1.2–4.0 |
| (4) | \|d_2Gr/d_3Gr\| | 1.12 | 0.1–1.5 |
| (5) | d_npr1/f₁ | 0.46 | 0.1–0.6 |
| (6) | θgF − (−0.0018νd + 0.6484) for L22 | +0.019 | >0.009 |

Conditions (1)–(3) govern the power balance among the three groups. Condition (4) constrains the ratio of Gr2 and Gr3 focus travel, ensuring balanced aberration correction. Condition (5) positions Gr1's rear principal point behind its last surface — this shortens the effective separation between Gr1 and Gr2, moderating Gr2's positive power requirement and thereby reducing spherical aberration sensitivity during focus. Condition (6) requires the positive crown element in Gr2 (L22) to exhibit positive anomalous partial dispersion, enabling secondary spectrum correction within the focus group itself.

---

## 3. Element-by-Element Analysis

### 3.1 Group 1 — Front Fixed Group

#### L11 — Negative Meniscus (concave image side)

| Property | Value |
|----------|-------|
| Surfaces | 1, 2 |
| R₁ / R₂ | +4.6232 / +0.8784 |
| nd / νd | 1.51680 / 64.13 |
| Thick-lens fl | −47.2 mm (scaled) |
| Glass ID | S-BSL7 (OHARA) or N-BK7 (Schott). Exact match: Δnd < 0.001, Δνd ≤ 0.05. |

L11 is the front element: a steeply curved negative meniscus in ordinary borosilicate crown glass. Its strong negative power diverges the entering light cone, increasing the ray height on subsequent positive elements. In this telephoto-type design (BFD/EFL = 0.55), L11 serves as a field-widening element — its negative power expands the angular acceptance of the system, allowing the downstream positive groups to cover the full 63° field at f/1.8 while keeping the back focal distance short enough for the Z-mount's 16 mm flange. The use of inexpensive, durable BSL7-type glass in the front position is a practical choice: it is mechanically robust, chemically resistant, and the front element's large diameter (≈37 mm clear aperture) makes cost a consideration.

#### L12 + L13 — Cemented Doublet (D1)

| Property | L12 | L13 |
|----------|-----|-----|
| Surfaces | 3 (front) → 4 (junction) | 4 (junction) → 5 (rear) |
| Type | Biconvex Positive | Biconcave Negative |
| R values | +4.0730 / −2.0290 | −2.0290 / +3.2358 |
| nd / νd | 1.95375 / 32.33 | 1.60342 / 38.03 |
| Thick-lens fl | +32.3 mm / −45.7 mm | |
| Doublet fl | +99.1 mm (scaled) | |
| Glass ID (L12) | S-LAH79 (OHARA). Exact match. Ultra-high-index La flint. |
| Glass ID (L13) | S-TIM2 (OHARA). Near-exact (Δνd = 0.02). Light titanium flint. |

This doublet is weakly positive overall, combining an ultra-high-index lanthanum glass (nd = 1.954, the highest refractive index in the entire design) with a lighter titanium flint. The extreme refractive index of S-LAH79 provides strong positive power with relatively weak curvatures, which helps control higher-order spherical aberration at the wide f/1.8 aperture. Notably, both glasses sit below the conventional crown-flint boundary (νd < 50), so this is not a traditional achromatic doublet — the Abbe number differential (Δνd ≈ 5.7) is modest and both materials are on the low-νd side of the glass map, indicating that D1 prioritizes monochromatic aberration correction (primarily coma and astigmatism balancing at the cemented interface) over chromatic correction. The chromatic correction burden is delegated to the ED elements downstream.

#### L14 + L15 — Cemented Doublet (D2)

| Property | L14 | L15 |
|----------|-----|-----|
| Surfaces | 6 (front) → 7 (junction) | 7 (junction) → 8 (rear) |
| Type | Biconcave Negative | Biconvex Positive (equi-convex) |
| R values | −1.2945 / +1.7517 | +1.7517 / −1.7517 |
| nd / νd | 1.68893 / 31.16 | 1.85150 / 40.78 |
| Thick-lens fl | −23.5 mm / +23.9 mm | |
| Doublet fl | +192.6 mm (scaled) | |
| Glass ID (L14) | S-TIH14 (OHARA). Exact match. Dense titanium flint. |
| Glass ID (L15) | S-LAH51 (OHARA). Exact match. High-index La crown. |

This doublet is also weakly positive, but with a different glass strategy: a dense flint (low νd = 31.16) cemented to a high-index lanthanum crown (νd = 40.78). The Abbe number differential of ≈9.6 provides meaningful chromatic correction. Note that L15 is equi-convex (|R₇| = |R₈| = 1.7517), which is the optimal shape for minimizing spherical aberration from a single element at this conjugate. This doublet carries significant positive power (each element has fl ≈ ±24 mm) and is the primary workhorse for converging the wide marginal ray bundle, with the cemented interface providing a buried surface for aberration correction.

#### L16 — Biconvex Positive (ED Element #1)

| Property | Value |
|----------|-------|
| Surfaces | 9, 10 |
| R₁ / R₂ | +1.1917 / −3.5528 |
| nd / νd | 1.49700 / 81.61 |
| Thick-lens fl | +41.0 mm (scaled) |
| Glass ID | S-FPL51 (OHARA). Match: Δnd = 0.000, Δνd = 0.07. Fluorophosphate ED crown. |

L16 is the first ED element — an OHARA S-FPL51 fluorophosphate crown with νd = 81.6, among the lowest dispersion glasses in common use. From the OHARA catalog: nd = 1.49700, νd = 81.54, θgF = 0.5375, ΔPgF = +0.028. This glass lies above the normal line on the θgF–νd diagram, exhibiting positive anomalous partial dispersion that enables correction of secondary chromatic aberration.

L16 is one of the more steeply curved positive elements in Gr1, with an asymmetric biconvex shape (R₁ = 1.19 mm versus |R₂| = 3.55 mm) that concentrates most of its refracting power at the front surface. However, its primary significance is not its curvature — L12 and L15 carry more positive power (fl = +32.3 and +23.9 mm, respectively, versus +41.0 mm for L16). Rather, L16's role is defined by its ED glass: with νd = 81.6, it has by far the lowest dispersion of any element in the design. Its position immediately before the aperture stop means it handles the full marginal ray height at wide aperture, maximizing the chromatic correction efficiency of its low-dispersion fluorophosphate material.

#### L17 — Negative Meniscus (concave image side, 2× aspherical)

| Property | Value |
|----------|-------|
| Surfaces | 11A, 12A |
| R₁ / R₂ | +4.1556 / +1.9836 |
| nd / νd | 1.83441 / 37.28 |
| Thick-lens fl | −102.5 mm (scaled) |
| Glass ID | S-LAH55VS (OHARA), probable. Near-match: Δnd = 0.000, Δνd = 0.09. High-index La crown. |

L17 is the first aspherical element — a thin negative meniscus in a high-index lanthanum glass, with both surfaces aspherical. Its position at the rear of Gr1, immediately before the stop, is strategically important: it is the last element the marginal ray encounters before the iris, and its aspherical surfaces provide fine control over the residual spherical aberration and coma that accumulate through the preceding six elements.

The glass identification requires comment. The patent values (nd = 1.83441, νd = 37.28) match OHARA S-LAH55VS with Δνd = 0.09, which is within typical manufacturing tolerance. The "VS" suffix in OHARA's naming indicates a "Very Stable" variant optimized for precision molding — consistent with the aspherical surfaces on this element. However, an exact catalog-sheet confirmation was not available from the 2018 pocket catalog. The identification is rated as probable.

**Aspherical departure (surface 11, front):** K = −4.9288 (strongly prolate hyperbolic base curve). At the 13.1 mm semi-diameter, the total departure from a sphere is +39 µm — the surface is steeper than a sphere at the rim, adding material. The large negative conic constant flattens the base conic relative to a sphere, and the even-order polynomial terms (A₄ = −9.58×10⁻², A₆ = +5.04×10⁻¹, A₈ = −4.62×10⁻¹) produce a complex, non-monotonic departure profile.

**Aspherical departure (surface 12, rear):** K = −0.4693 (mildly prolate). Departure at the 12.4 mm semi-diameter is +122 µm — again steeper than sphere. This is the larger departure of the two and dominates the aspherical correction. The combination of both surfaces produces a net wavefront correction that addresses residual spherical aberration and higher-order zonal errors from the preceding thick, high-index elements.

### 3.2 Aperture Stop

The aperture stop is positioned between Gr1 and Gr2 and is fixed relative to Gr1 and the image plane during focusing. Its semi-diameter decreases from 11.87 mm at infinity to 11.33 mm at MFD, indicating that the iris adjusts slightly during focus (consistent with Nikon's electronic aperture control). Nikon specifies a 9-blade rounded diaphragm.

Placing the stop between two positive groups (Gr1 ahead, Gr2 behind) creates a quasi-symmetric arrangement around the iris. This is advantageous for coma suppression — the patent explicitly notes that having positive groups facing each other across the stop helps reduce coma.

### 3.3 Group 2 — Positive Focus Group

#### L21 — Negative Meniscus (concave object side)

| Property | Value |
|----------|-------|
| Surfaces | 14, 15 |
| R₁ / R₂ | −0.9917 / −5.7790 |
| nd / νd | 1.61293 / 36.94 |
| Thick-lens fl | −43.7 mm (scaled) |
| Glass ID | S-TIM25 (OHARA). Near-exact: Δnd = 0.000, Δνd = 0.02. Titanium flint. |

L21 is the first element of the focus group, positioned immediately behind the stop. Its concave-toward-object shape diverges the converging beam from Gr1, as the patent explains: "placing a negative lens with a concave surface toward the object allows the beam from Gr1 to diverge gently, suppressing abrupt aberration changes during focusing." The titanium flint glass has moderate dispersion and refractive index.

#### L22 — Biconvex Positive (ED Element #2)

| Property | Value |
|----------|-------|
| Surfaces | 16, 17 |
| R₁ / R₂ | +2.1244 / −1.3918 |
| nd / νd | 1.59282 / 68.62 |
| Thick-lens fl | +32.6 mm (scaled) |
| θgF / ΔθgF | 0.5441 / +0.019 (from patent Table 2) |
| Glass ID | Fluorophosphate crown with anomalous partial dispersion. See discussion below. |

L22 is the strongest positive element in Gr2 and the second ED element. It is the only element in the lens for which the patent explicitly provides θgF data (condition 6), confirming it has significant positive anomalous partial dispersion: ΔθgF = +0.019, well above the 0.009 minimum required by condition (6).

**Glass identification — a note of caution.** The patent values nd = 1.59282, νd = 68.62 do not closely match any single glass in the OHARA 2018 catalog. The nearest OHARA glass is S-FPM2 (nd = 1.59522, νd = 67.74), but the residuals are substantial: Δnd = 0.0024, Δνd = 0.88. Notably, S-FPM2 shares an essentially identical θgF value (0.5442 vs. the patent's 0.5441), indicating both glasses belong to the same fluorophosphate compositional family. The discrepancy in nd and νd may indicate: (a) a glass from a different supplier (HOYA, HIKARI, or Sumita) in the fluorophosphate crown region; (b) a variant melt or development composition not listed in the standard OHARA catalog; or (c) deliberately adjusted refractive data in the patent to obscure the exact glass choice. This identification is classified as *family-level only* (fluorophosphate crown) rather than exact catalog match.

The identical nd/νd pair (1.59282/68.62) appears in all four patent examples at this same optical position, confirming it is a deliberately selected material, not a design placeholder.

**Chromatic role.** L22 is the most positively powered element in Gr2 (fl = +32.6 mm), and its anomalous partial dispersion is the mechanism by which secondary chromatic aberration is corrected within the moving focus group. By embedding a high-ΔθgF positive crown inside the focus group, the patent ensures that axial chromatic aberration changes during focus tracking remain minimal — essential for maintaining sharp focus at video frame rates and for contrast-detect AF performance.

#### L23 — Positive Meniscus (convex image side, 2× aspherical)

| Property | Value |
|----------|-------|
| Surfaces | 18A, 19A |
| R₁ / R₂ | −8.4171 / −2.8176 |
| nd / νd | 1.69350 / 53.20 |
| Thick-lens fl | +135.0 mm (scaled) |
| Glass ID | L-LAL14 (OHARA), probable. Near-match: Δnd = 0.000, Δνd = 0.14. Low-Tg La crown for PGM. |

L23 is the second aspherical element. Its meniscus shape (concave object, convex image) provides weak positive power (fl ≈ +135 mm) — much weaker than L22 — indicating its primary role is aberration correction, not power contribution.

The glass identification as L-LAL14 (or the conventional S-LAL14) is rated as probable. The "L-" prefix in OHARA's nomenclature denotes low-softening-temperature glass specifically engineered for precision glass molding (PGM), which is the expected manufacturing method for aspherical elements in a mass-produced lens. The Δνd = 0.14 residual is slightly above the typical 0.1 threshold for an exact match but is consistent with the known tolerance ranges in patent glass data.

**Aspherical departure (surface 18, front):** K = +15.33 — a strongly hyperboloidal base surface. This is the most extreme conic constant in the entire design. At the 13.3 mm semi-diameter, the departure is −530 µm — for this concave surface (R < 0), the negative departure means the aspherical profile is *more* deeply concave than the parent sphere, curving further toward the object at the rim. The conic height limit check passes (sd/h_max = 0.29, well below the 0.98 maximum). The hyperboloidal base combined with the polynomial terms (A₄ = −2.06×10⁻¹) produces a surface with a complex inflection profile that corrects field-dependent aberrations (coma, astigmatism) introduced by the focus group's axial movement.

**Aspherical departure (surface 19, rear):** K = −0.9347 (nearly paraboloidal). Departure at the rim is +218 µm — for this concave surface (R < 0), the positive departure means the aspherical profile is *less* deeply concave than the parent sphere at the rim, with the glass extending further toward the image plane. The near-parabolic conic substantially reduces the curvature at the rim compared to the sphere, and the higher-order terms (A₆, A₈, A₁₀ all non-zero) introduce fine corrections. The combination of surfaces 18 and 19 together manages the field curvature variation during focus.

### 3.4 Group 3 — Negative Focus Group

#### L31 — Negative Meniscus (concave object side, 2× aspherical)

| Property | Value |
|----------|-------|
| Surfaces | 20A, 21A |
| R₁ / R₂ | −1.8973 / −6.9348 |
| nd / νd | 1.58313 / 59.46 |
| Thick-lens fl | −100.3 mm (scaled) |
| Glass ID | L-BAL42 (OHARA), probable. Near-match: Δnd = 0.000, Δνd = 0.08. Low-Tg Ba crown for PGM. |

L31 is the sole element of Gr3 and the third aspherical element. It is a negative meniscus with its concave surface toward the object — the patent specifically identifies this orientation as beneficial for suppressing field curvature variation during focus (condition 7). Its negative power partially compensates the strong positive power of Gr1 and Gr2, establishing the overall telephoto-type configuration.

The glass identification as L-BAL42 is rated as probable. Like L23, the "L-" prefix indicates a PGM-compatible glass, consistent with the two aspherical surfaces. L-BAL42 is a barium crown with moderate refractive index and dispersion — well-suited for a field-flattening element where chromatic contribution should be neutral.

**Aspherical departure (surface 20, front):** K = −0.1889, departure at 14.4 mm semi-diameter = −674 µm. For this concave surface (R < 0), the negative departure means the aspherical profile is *more* deeply concave than the parent sphere — a large departure indicating substantial wavefront reshaping. The front surface of L31 faces the widening air gap (d₁₉) and sees the off-axis ray bundle after it has been through the full aperture of the lens, making this the primary surface for controlling field curvature and astigmatism at the image plane.

**Aspherical departure (surface 21, rear):** K = 0 (spherical base curve), departure = −850 µm. Despite the zero conic constant, the polynomial terms (A₄ through A₁₀) produce the largest absolute departure of any surface in the design — the aspherical profile is significantly more deeply concave than the sphere at the rim. This surface is the last optical element before the image, and its large departure serves as the final wavefront corrector — flattening the Petzval field curvature and controlling distortion across the full 63° field of view.

### 3.5 Cover Glass / Filter Stack

A single parallel plate (nd = 1.51680, νd = 64.13, thickness ≈ 1.65 mm scaled) models the combined cover glass and IR-cut/OLPF stack in front of the sensor. The BF (cover glass rear to image) is ≈ 0.95 mm scaled.

---

## 4. Aspherical Surfaces — Summary

The three aspherical elements (L17, L23, L31) account for six aspherical surfaces total. Each element has both surfaces aspherical, and all three are positioned at critical locations in the optical path:

| Element | Position | Surfaces | Max Departure (scaled) | Primary Correction Role |
|---------|----------|----------|----------------------|------------------------|
| L17 | Rear of Gr1, before stop | 11A, 12A | +122 µm | Residual SA & coma from front group |
| L23 | Rear of Gr2, focus group | 18A, 19A | −530 µm | Field curvature change during focus |
| L31 | Gr3, field flattener | 20A, 21A | −850 µm | Final field flattening & distortion |

The aspherical departures escalate dramatically from front to rear: L17's surfaces are relatively mild (tens of µm), while L31's rear surface departs by nearly a millimeter from a sphere. This pattern reflects the increasing off-axis ray heights toward the image end of the lens, where field-dependent aberrations dominate and require proportionally larger corrections.

Both L23 and L31 are identified with L-prefix (low-Tg) OHARA glasses, indicating precision glass molding. L17's glass (S-LAH55VS) has a "VS" designation suggesting it may also be produced by a precision process, though the S-prefix technically denotes conventional (polished) glass. The boundary between polished aspherics and molded aspherics in modern high-end lens production is fluid — computer-controlled grinding and polishing can achieve the departures seen on L17, while the larger departures on L23 and L31 strongly favor molding.

---

## 5. Glass Selection Strategy

### 5.1 Glass Map

The 11 elements span a broad region of the nd–νd glass map:

| Region | Elements | nd Range | νd Range |
|--------|----------|----------|----------|
| Fluorophosphate crowns (ED) | L16, L22 | 1.497–1.593 | 68.6–81.6 |
| Lanthanum crowns/flints | L12, L15, L17, L23 | 1.694–1.954 | 32.3–53.2 |
| Titanium flints | L13, L14, L21 | 1.603–1.689 | 31.2–38.0 |
| Barium/boro-silicate crowns | L11, L31 | 1.517–1.583 | 59.5–64.1 |

The design uses OHARA glasses almost exclusively, with all identifiable glasses being S-prefix (eco-friendly, lead/arsenic-free) or L-prefix (PGM-compatible) types.

### 5.2 Chromatic Correction Architecture

The lens employs a two-pronged chromatic correction strategy:

**Primary spectrum correction** is achieved through conventional high/low dispersion pairings within the cemented doublets (D1: L12/L13 with Δνd ≈ 5.7; D2: L14/L15 with Δνd ≈ 9.6) and through the power balance between the high-νd elements (L16, L22) and the low-νd elements (L12, L14).

**Secondary spectrum correction** relies on the two ED elements:

- **L16 (S-FPL51):** A classic fluorophosphate ED crown with very high νd = 81.6 and positive ΔPgF = +0.028. Positioned at a strong positive-power location in Gr1, its extremely low dispersion enables effective primary chromatic correction when paired with the higher-dispersion flint elements. Its anomalous partial dispersion (θgF above the normal line) simultaneously addresses secondary spectrum — the residual chromatic error that persists even after primary achromatization.

- **L22 (fluorophosphate crown):** Moderate νd = 68.6 but strong positive anomalous dispersion (ΔθgF = +0.019). Unlike L16, L22's ED behavior comes primarily from its anomalous partial dispersion rather than extremely low total dispersion. Its placement in the moving focus group means it maintains chromatic correction stability across the entire focus range.

### 5.3 Refractive Index Distribution

The design makes strategic use of very high refractive indices in Gr1 — S-LAH79 at nd = 1.954 (L12) and S-LAH51 at nd = 1.852 (L15) — to achieve the necessary positive power with manageable curvatures. These high-index elements are exclusively in the fixed front group, where thermal and mechanical stability are less critical than in the lightweight focus groups. The focus groups (Gr2, Gr3) use moderate-index glasses (nd = 1.58–1.69), keeping element weight low for fast AF response, as the patent explicitly emphasizes.

---

## 6. Focus Mechanism

### 6.1 Multi-Focusing System

Nikon markets this lens as employing a "multi-focusing system." The patent's floating focus mechanism directly corresponds to this: both Gr2 (3 elements, positive) and Gr3 (1 element, negative) are independently driven focus groups.

The focus movements at MFD (0.25 m) are:

| Group | Direction | Travel | Elements | Estimated Weight Impact |
|-------|-----------|--------|----------|----------------------|
| Gr2 | → Object | 5.1 mm | 3 (L21, L22, L23) | Moderate — includes ED glass |
| Gr3 | → Image | 4.6 mm | 1 (L31) | Very light — single thin meniscus |

The combined focus group comprises only 4 elements (of 11 total), and the patent notes that keeping the focus group count low is essential for fast AF in contrast-detection systems. The single-element Gr3 is particularly advantageous: its low mass allows rapid bidirectional movement with minimal actuator load.

### 6.2 Aberration Balance During Focus

The patent provides a detailed description of the aberration-cancellation mechanism: Gr2's forward movement primarily introduces positive field curvature change and spherical aberration undercorrection, while Gr3's backward movement introduces opposing field curvature change. The ratio of their movements is governed by condition (4): |d_2Gr/d_3Gr| = 1.12, indicating that Gr2 moves slightly more than Gr3. This asymmetry fine-tunes the balance between field curvature and spherical aberration correction.

---

## 7. Physical Parameters (Scaled to 35 mm)

| Parameter | Computed | Nikon Spec |
|-----------|----------|------------|
| Focal length | 35.0 mm | 35 mm |
| Maximum aperture | f/1.85 (design) | f/1.8 (marketed) |
| Field angle (2ω) | 64.9° (design) | 63° (FX) |
| Elements / Groups | 11 / 9 | 11 / 9 |
| ED elements | 2 (L16, L22) | 2 |
| Aspherical elements | 3 (L17, L23, L31) | 3 |
| Total track (S1 to image) | ≈101 mm | — |
| BFD (last lens to image) | ≈19.3 mm | — |
| MFD (object to image) | ≈257 mm | 250 mm |
| Max reproduction ratio | ≈0.20× (thin-lens estimate) | 0.19× |
| Front element CA | ≈37 mm diameter | 62 mm filter thread |
| Weight | — | 370 g |

The computed MFD of 257 mm is within 3% of Nikon's specified 0.25 m, a close match considering that the patent prescription is normalized and the production lens may have slight prescription adjustments. The thin-lens magnification estimate at MFD (|m| ≈ 0.20×) is consistent with Nikon's specified 0.19× maximum reproduction ratio; the slight overestimate is expected from the thin-lens approximation, which does not account for thick-lens principal plane positions.

---

## 8. Design Lineage and Context

This patent is a joint Konica Minolta / Nikon filing, continuing a collaboration between the two companies on Z-mount optical designs. The positive–positive–negative three-group architecture with floating focus is a modern wide-angle prime design for mirrorless cameras with short flange distances. The placement of positive groups on both sides of the aperture stop creates a quasi-symmetric power arrangement that the patent explicitly cites as beneficial for coma suppression, though the overall configuration is considerably more asymmetric than a classical double-Gauss — seven elements before the stop versus four behind it. The design priorities — lightweight focus groups for contrast AF, wide aperture with controlled field curvature, and secondary spectrum correction within the focus group — reflect the specific demands of the Nikon Z system at its 2018 launch.

The lens was one of the first three NIKKOR Z lenses, alongside the Z 24–70mm f/4 S and Z 50mm f/1.8 S. The Z 50mm f/1.8 S shares many architectural features with this design (the same positive–positive–negative three-group scheme with floating focus appears in its patent as well), suggesting a deliberate design-family approach for the S-Line f/1.8 primes.

---

## 9. Methodology and Limitations

All numerical results in this analysis were computed via Python paraxial ray trace from the patent's EX4 prescription. The computed system EFL (1.624 mm) differs from the patent's stated value (1.572 mm) by approximately 3.3%. This discrepancy is concentrated entirely in Group 1: the independently computed Gr1 focal length (2.168 mm) differs from the patent's Table 2 value (2.089 mm) by 3.8%, consistent with accumulated rounding errors across Gr1's 12 refracting surfaces. By contrast, the computed Gr2 and Gr3 focal lengths match the patent's Table 2 values to better than 0.1% (f₂ = 2.511 vs 2.512; f₃ = −4.506 vs −4.507), providing confidence in the trace methodology. All scaled dimensional quantities in this document use the patent-stated EFL of 1.572 mm (scale factor 22.26×) rather than the computed value. Element focal lengths are thick-lens computations using paraxial surface powers.

Aspherical departures are computed at the patent's semi-diameter values using the full sag equation with conic constant and even-order polynomial coefficients. The patent provides coefficients through A₁₂ for all aspherical surfaces; the highest non-zero order varies by surface (A₈ for surfaces 11, 12; A₆ for surfaces 18, 20; A₁₀ for surfaces 19, 21).

Glass identifications are made against the OHARA 2018 pocket catalog (Oct. 2018) and corroborated with refractiveindex.info Zemax catalog data (2017-11). Confidence tiers: "exact match" (Δnd < 0.001, Δνd < 0.1), "near-match" (Δnd < 0.001, Δνd < 0.2), and "family-level" (compositional family identified but no single catalog glass matches within tolerances). One element (L22) could not be identified to better than family level.

Semi-diameters are taken directly from the patent's "Ri" (有効半径) column and are not independently computed.

---

*Analysis based on JP 2019-090947A (Konica Minolta / Nikon, 2019), OHARA Glass Catalog (Oct. 2018 / May 2023), and Nikon first-party product specifications from nikonusa.com.*
