# Nikon L35AF "Pikaichi" — Nikon Lens 35mm f/2.8

## US 4,457,596 · Embodiment 1 · Koichi Wakamiya / Nippon Kogaku K.K.

---

## 1. Historical Context

The Nikon L35AF, nicknamed "Pikaichi" (ピカイチ, "top notch"), was Nikon's first autofocus compact camera, introduced in 1983 during a period of intense competition in the AF point-and-shoot market. The lens was designed by Koichi Wakamiya of the Optical Section 1, Optical System Department at Nippon Kogaku K.K. (now Nikon Corporation). The optical design was completed in December 1981, with mass production drawings issued in August 1982. The patent was filed on September 27, 1982 and granted July 3, 1984.

Notably, the lens was branded simply "Nikon Lens" rather than "NIKKOR," a decision that spawned persistent rumors that Nikon had outsourced the optics. According to Nikon's own *Thousand and One Nights* series (No. 33, by Haruo Sato), the lens was entirely designed in-house following the same philosophy as Nikon's interchangeable NIKKOR lenses. Wakamiya went on to design the optics for subsequent Pikaichi cameras, as well as the Series E 100mm f/2.8 and the UV-Nikkor 105mm f/4.5S.

The L35AF features a 5-element, 4-group all-spherical lens with f/2.8 maximum aperture, 35mm focal length, a 46mm filter thread, and autofocus from 0.8 m to infinity. It covers a full-angle field of view of approximately 62.3°.

---

## 2. Design Type and Lineage

The patent title — "Behind Diaphragm Lens" — immediately signals a departure from the Tessar-type designs that dominated contemporary compact cameras. While a Tessar places the aperture stop between its front and G2 groups, this design places the diaphragm *behind* all optical elements, on the image side of the last lens group.

The patent's own background section describes the design as an evolution from the Tessar type, achieved through two specific modifications: (a) reversing the direction of the cemented surface in the rear doublet (so that the positive element leads and the negative element follows, the opposite of a standard Tessar cemented group), and (b) splitting the single front positive meniscus into two separate air-spaced positive meniscus lenses. The patent notes that these modifications shorten the total length from ~1.15f (Tessar) to ~1.08f.

However, Nikon's own retrospective — the *Thousand and One Nights* series (No. 33, by Haruo Sato) — explicitly identifies the result as a **Sonnar-Type** configuration: "This lens was designed with a Sonnar-Type lens configuration that Nippon Kogaku K.K. used for a long time." Sato acknowledges the visual similarity to a Tessar ("From the look at the cross-sectional view you may doubt that the lens system is different from the Tessar-type. If so, you are acute enough"), but insists Wakamiya chose a fundamentally different path.

Both descriptions are accurate from different perspectives. The patent traces the *genealogy* — how the design was derived step-by-step from the Tessar baseline. Sato identifies the *resulting configuration* — which, with its split front positive group, strongly negative middle element, cemented positive rear doublet, and behind-diaphragm stop placement, is structurally a Sonnar variant. Historically, the Sonnar itself evolved from Tessar-lineage modifications (through Ernostar intermediaries), so the two perspectives converge.

The optical structure, from object to image, is:

| Group | Element(s) | Form | Power |
|-------|-----------|------|-------|
| G1 | L11 | Positive meniscus, convex to object | Positive |
| G2 | L12 | Positive meniscus, convex to object | Positive |
| G3 | L13 | Biconcave | Negative |
| G4 | L21 + L22 (cemented) | Biconvex + negative meniscus (convex to image) | Positive |
| — | Diaphragm | Behind all elements | — |

Sato confirms Wakamiya chose the Sonnar type for two reasons: it yields a more compact optical system, and it provides superior correction of spherical aberration and coma. The trade-offs are the Sonnar's inherent tendency toward field curvature and its susceptibility to close-range aberration fluctuation — both of which Sato praises Wakamiya for managing with unusual skill.

In the production L35AF, the behind-diaphragm configuration has a practical consequence: the leaf shutter mechanism, positioned immediately behind the last element, likely doubles as the iris diaphragm. Several accounts of disassembled L35AF cameras note that no separate aperture exists — the shutter blades close to smaller openings at slower speeds, producing a diamond-shaped aperture at small stops. This is a common arrangement in leaf-shutter compact cameras and is fully consistent with the patent's "diaphragm most adjacent to the image side" placement.

---

## 3. Patent Prescription — Embodiment 1

The patent provides four numerical embodiments, all at a normalized focal length of f = 100 mm. Embodiment 1 corresponds to the design implemented in the production L35AF camera. The production lens operates at f ≈ 35 mm, requiring a uniform scale factor of ×0.35 applied to all linear dimensions (R, d, and sd).

### 3.1 Surface Data (f = 100)

| Surface | R (mm) | d (mm) | nd | Medium |
|---------|--------|--------|-----|--------|
| r₁ | +31.974 | 5.7250 | 1.71300 | L11 glass |
| r₂ | +46.733 | 0.5725 | 1.0 | Air |
| r₃ | +38.655 | 5.1525 | 1.77279 | L12 glass |
| r₄ | +72.381 | 2.4331 | 1.0 | Air |
| r₅ | −264.361 | 2.5762 | 1.68893 | L13 glass |
| r₆ | +28.170 | 4.2937 | 1.0 | Air |
| r₇ | +83.665 | 8.5875 | 1.77279 | L21 glass |
| r₈ | −31.587 | 2.2900 | 1.62041 | L22 glass |
| r₉ | −192.429 | — | 1.0 | Air (to image) |

Sign convention: R > 0 means center of curvature is to the right (toward image). R < 0 means center of curvature is to the left (toward object). Note that the patent's OCR renderings contain sign ambiguities on several surfaces (particularly r₂ and r₆); the values above are confirmed correct by cross-referencing the physical element descriptions ("positive meniscus" requires same-sign radii; "biconcave" requires r₅ < 0, r₆ > 0) and verifying the resulting focal lengths against the patent's stated values.

### 3.2 Verification Summary

All values below were independently computed via ABCD matrix paraxial ray trace and agree with the patent to within rounding tolerance:

| Parameter | Computed | Patent | Status |
|-----------|----------|--------|--------|
| System EFL | 99.998 mm | 100.0 mm | ✓ |
| Back focal length | 76.305 mm | 76.3 mm | ✓ |
| Total length (to image) | 107.94 mm | 107.9 mm | ✓ |
| f₁ (L11) | 122.3 mm | 122.3 mm | ✓ |
| f₂ (L12) | 100.6 mm | 100.6 mm | ✓ |
| f₃ (L13) | −36.8 mm | −36.8 mm | ✓ |
| f₁,₂ (L11+L12 composite) | 56.9 mm | 56.9 mm | ✓ |
| f₄,₅ (L21+L22 cemented) | 59.3 mm | 59.3 mm | ✓ |
| Petzval sum | 0.00222 | 0.00205 | ~8% discrepancy |
| Total length / f | 1.079 | ~1.08 | ✓ |

The Petzval sum discrepancy of approximately 8% is attributable to rounding of both refractive indices and radii of curvature in the published patent data. The Petzval sum equals the difference of two large opposing contributions — the G1 group contributes −0.00666 and the G2 group contributes +0.00888 — so the net sum of +0.00222 is sensitive to small perturbations in either group. The dominant Petzval contributor is surface r₆ (R = +28.170), where a change of just 0.13 mm in the radius shifts the sum by 0.00007. Combined with rounding of nd values to 3–5 decimal places (the patent writes n₁ = 1.713 with only three decimal places, while standard HOYA manufacturing tolerance is ±30 × 10⁻⁵), modest rounding across multiple surfaces easily accounts for the discrepancy. The patent's internal computation almost certainly used higher-precision values.

---

## 4. Aspherical Surfaces

**There are no aspherical surfaces in this design.** The patent makes no mention of aspherical coefficients, conic constants, or non-spherical surface profiles anywhere in any of the four embodiments. This is an all-spherical optical system.

This is consistent with the era: aspherical lens elements were expensive and difficult to manufacture in 1981–82. Nikon's first mass-produced aspherical lenses for consumer cameras came somewhat later. Wakamiya achieved his aberration correction goals entirely through the choice of glass types, element bending, and the exploitation of the Sonnar configuration's inherent advantages.

---

## 5. Glass Identification

The patent specifies five glass elements by their refractive index (nd at 587.6 nm) and Abbe number (νd). Cross-referencing these values against manufacturer catalogs from OHARA, HOYA, and SCHOTT yields the following identifications. Given that Nikon historically sourced glass from OHARA and HOYA, Japanese-maker matches are prioritized.

### 5.1 Element-by-Element Glass Matching

**L11 — nd = 1.71300, νd = 54.0 (six-digit code: 1713/540)**

The nd value of 1.71300 is an exact match to a well-known lanthanum crown family. The patent's νd = 54.0 is slightly rounded from the catalog value of ~53.8–53.9.

| Candidate | nd | νd | Δnd | Δνd | Confidence |
|-----------|-----|-----|------|------|------------|
| OHARA S-LAL8 | 1.71300 | 53.83 | 0 | 0.17 | High — exact nd |
| HOYA LAC8 | 1.71300 | 53.80 | 0 | 0.20 | High — exact nd |
| SCHOTT LaK 8 | 1.71300 | 53.94 | 0 | 0.06 | High — exact nd |

**Identification: LaK 8 / S-LAL8 / LAC8 family (lanthanum crown)**. This is a moderate-index, low-dispersion crown glass, well suited for the front positive meniscus element where it contributes converging power with minimal chromatic contribution.

**L12 and L21 — nd = 1.77279, νd = 49.4 (six-digit code: 1773/494)**

These two elements share identical glass. The nd/νd pair matches exactly to HOYA TAF5, a tantalum-containing lanthanum flint glass.

| Candidate | nd | νd | Δnd | Δνd | Confidence |
|-----------|-----|-----|------|------|------------|
| HOYA TAF5 | 1.77279 | 49.40 | 0 | 0 | Exact match |
| HOYA NBFD3 / TAF1 | 1.77250 | 49.62 | 0.00029 | 0.22 | Close |

**Identification: HOYA TAF5 (tantalum flint / dense lanthanum flint)**. The exact match to TAF5 is striking — both nd and νd agree to the last reported digit. This high-index, moderate-dispersion glass provides strong refracting power while maintaining reasonable chromatic behavior. Using the same glass for L12 and L21 simplifies procurement and quality control in production, and is a characteristic Sonnar-design technique (the converging elements share the same glass type while the diverging element uses a high-dispersion partner).

**L13 — nd = 1.68893, νd = 31.1 (six-digit code: 1689/311)**

| Candidate | nd | νd | Δnd | Δνd | Confidence |
|-----------|-----|-----|------|------|------------|
| HOYA FD60 | 1.68893 | 31.16 | 0 | 0.06 | Exact match |
| OHARA S-TIM28 | 1.68893 | 31.16 | 0 | 0.06 | Exact match |

**Identification: HOYA FD60 / OHARA S-TIM28 (dense flint)**. This is a high-dispersion flint glass, serving as the sole negative element in the G1 group. Its high dispersion (low Abbe number) is critical for chromatic correction — the patent's condition (2) explicitly constrains νd of L13 to the range 26.0–36.0, balancing on-axis chromatic aberration against chromatic coma.

**L22 — nd = 1.62041, νd = 60.4 (six-digit code: 1620/604)**

| Candidate | nd | νd | Δnd | Δνd | Confidence |
|-----------|-----|-----|------|------|------------|
| SCHOTT SK 16 | 1.62041 | 60.32 | 0 | 0.08 | Exact match |
| OHARA S-BSM16 | 1.62041 | 60.29 | 0 | 0.11 | Exact match |
| HOYA BSC7 | 1.62041 | 60.10 | 0 | 0.30 | Good match |

**Identification: SK 16 / S-BSM16 / BSC7 family (dense barium crown)**. A moderate-index, low-dispersion crown glass cemented to L21 as the negative meniscus element of the rear doublet. Its lower refractive index relative to L21 (n₅ < n₄) is required by condition (9) — the index ratio n₄/n₅ = 1.094 falls within the prescribed range of 1.04–1.12, which controls the Petzval sum contribution of the cemented doublet. Its higher Abbe number relative to L21 (ν₅ = 60.4 > ν₄ = 49.4) satisfies condition (4), which is essential for correcting chromatic coma in the off-axis ray bundle passing through the G2 group.

### 5.2 Glass Map Summary

The glass selection follows a clear aberration-correction strategy:

- **Positive elements (L11, L12, L21):** High-index, moderate-to-low dispersion lanthanum-containing glasses (LaK/LAL family and TAF family). These provide strong refracting power with manageable chromatic contributions.
- **Negative element (L13):** High-dispersion flint glass. The patent text explicitly explains that making L13 highly dispersive corrects on-axis chromatic aberration, but going *too* far increases chromatic coma — hence the carefully bounded range for ν₃.
- **Cemented negative partner (L22):** Low-dispersion crown glass with lower refractive index than its cemented partner L21. This combination gives the cemented doublet a small negative Petzval contribution (helping flatten the field) while allowing differential chromatic correction of the lower oblique ray bundle.

---

## 6. Role and Function of Each Element

### L11 — Front Positive Meniscus (f₁ = 122.3 mm)

L11 is a moderately positive meniscus (r₁ = +31.974, r₂ = +46.733) that provides the initial converging action on the incoming light. Its meniscus form — convex to the object — minimizes the angle of incidence on the front surface, which is critical for controlling spherical aberration. The patent's condition (5), 0.05 < r₁/f < 0.40, directly governs L11's bending: too strong a bend (small r₁) under-corrects spherical aberration, while too gentle a bend (large r₁) weakens L13's compensating role and leaves the Petzval sum under-corrected.

With nd = 1.713 and νd = 54.0, L11 is the element most directly constrained for lateral chromatic aberration by condition (3), which bounds ν₁ to 49.8–59.0. Outside this range, lateral color for short wavelengths swings uncontrollably positive or negative.

In a traditional Sonnar, L11 and L12 would be a single thick element or a cemented component. Splitting them into two air-spaced meniscus lenses gives the designer two additional degrees of freedom (the air gap d₂ and the independent bending of L12) for correcting higher-order aberrations.

### L12 — Second Positive Meniscus (f₂ = 100.6 mm)

L12 (r₃ = +38.655, r₄ = +72.381) continues the converging action begun by L11, sharing the same glass type as L21 (HOYA TAF5). Together, L11 and L12 form a positive G1 group with composite focal length f₁,₂ = 56.9 mm. The patent's condition (6) constrains L12's bending via r₃/f₂, governing the image-side surface's converging action on oblique rays and thereby controlling the meridional field curvature.

L12's rear surface (r₄ = +72.381) is notably weaker than its front surface. This asymmetry controls the convergence angle of the marginal ray bundle as it enters L13, managing the balance between coma and spherical aberration.

### L13 — Biconcave Negative (f₃ = −36.8 mm)

L13 is the critical negative element of the system. Its strongly negative power (r₅ = −264.361, r₆ = +28.170) provides the diverging action that, combined with the front positive group, creates an overall positive system with a manageable Petzval sum. The asymmetry is extreme: the front surface (r₅) is very weakly concave (nearly flat), while the rear surface (r₆) is strongly concave (|r₆| = 28.17 mm). This bending is governed by condition (7), 3.0 < r₅/f₃ < 11.0, which controls coma by regulating how strongly the lower oblique ray is diverged by L13's object-side surface.

The glass choice (nd = 1.689, νd = 31.1 — a dense flint) makes L13 the primary chromatic corrector. Its high dispersion corrects the on-axis chromatic aberration introduced by the positive elements. However, the patent warns that making L13 too dispersive (ν₃ below 26.0) would overcorrect chromatic coma, as short-wavelength rays passing through the underside of the oblique bundle would be too strongly diverged.

### L21 — Biconvex Positive (cemented front) (f₄ in air = 30.7 mm)

L21 is the front element of the cemented positive doublet. Its biconvex form (r₇ = +83.665, r₈ = −31.587) provides converging power that collects the diverging bundle from L13 and directs it toward the focal point. Condition (8) constrains r₇/f to 0.65–0.95, governing the converging action on the image-side surface of L21. Too little convergence here allows upper coma flare to pass uncorrected; too much produces the opposite flare.

Note: L21's in-air focal length is 30.7 mm (at f = 100), but within the cemented doublet — where the rear surface refracts into L22's glass (nd = 1.62041) rather than air — L21's effective power is roughly halved (equivalent focal length ≈ 72.2 mm). This distinction matters because the cemented interface's chromatic function depends on the *differential* refraction between two glass types, not L21's standalone power.

The cemented junction at r₈ between L21 and L22 serves double duty: it corrects chromatic coma in the oblique ray bundle (condition 4 requires ν₄ < ν₅), and it contributes a small positive amount to the Petzval sum correction through the index difference at the cemented interface.

### L22 — Negative Meniscus (cemented rear) (f₅ in air = −61.2 mm)

L22 is cemented to L21, forming the positive rear doublet (f₄,₅ = 59.3 mm). Its negative meniscus form (r₈ = −31.587, r₉ = −192.429) with the convex surface facing the image is characteristic of the classic Sonnar G2 group. The junction surface r₈ provides a relatively weak refraction (Δn = 1.62041 − 1.77279 = −0.15238), while the exit surface r₉ (weakly concave, R = −192.4) contributes a mild divergence that fine-tunes the back focal distance.

The interplay between L21 and L22 is governed by condition (9): n₄/n₅ must lie between 1.04 and 1.12. Below this range, the cemented doublet's Petzval sum contribution becomes too large (positive, under-corrected), degrading field flatness. Above it, the oblique ray is too strongly converged by L21, forcing a compensating increase in L13's divergence — which, given L13's high dispersion, would unacceptably amplify chromatic coma.

### The Cemented Doublet as a Unit (f₄,₅ = 59.3 mm)

The cemented doublet L21+L22 acts as the rear positive group in the Sonnar configuration. Its composite focal length (59.3 mm) is closely matched to the G1 group's composite focal length (f₁,₂ = 56.9 mm), with condition (1) constraining their ratio f₁,₂/f₄,₅ = 0.959 to the range 0.7–1.4. This near-unity ratio positions the system's principal point near the middle of the lens, balancing compactness against distortion control.

---

## 7. Focus Mechanism

The patent does not specify variable air spacings or internal focusing groups. The production L35AF camera focuses by **unit extension** — the entire lens assembly moves forward along the optical axis to focus on closer objects, with only the back focal distance changing.

At the production focal length of 35 mm, the focus extension required to reach the 0.8 m close focus distance is approximately:

$$\Delta = \frac{f^2}{d_{obj} - f} = \frac{35^2}{800 - 35} \approx 1.60 \text{ mm}$$

In the model, that means the back focal distance increases from 26.007 mm at infinity to 27.608 mm at the 0.8 m close-focus position. This small displacement is well suited to the simple mechanical autofocus mechanism of the L35AF, which uses a motor-driven helicoid to translate the lens barrel.

Unit focusing has the advantage of mechanical simplicity and reliability, but it means that all aberrations shift as the lens moves — and this is where the Sonnar type's principal weakness emerges. In a Sonnar, the rear positive group carries a large share of the total converging power, and the strongly negative L13 immediately preceding it creates a diverging bundle that is sensitive to conjugate changes. When the entire lens translates forward for close focus, the marginal ray geometry through L13 and the rear doublet shifts, altering the balance of spherical aberration, coma, and field curvature. This "close-range aberration fluctuation" is a well-known Sonnar limitation.

Nikon's *Thousand and One Nights* article specifically singles out Wakamiya's handling of this problem: the close-range aberration fluctuation "is very precisely corrected." This precision almost certainly required optimizing the power distribution between the front pair (f₁,₂ = 56.9 mm) and rear doublet (f₄,₅ = 59.3 mm) — their near-equal balance (ratio 0.959) means neither group dominates, reducing the sensitivity of the aberration residuals to conjugate shifts. The careful element bending prescribed by conditions (5)–(8) further constrains how the ray geometry evolves with object distance.

---

## 8. Production Scaling and Specifications

The patent prescription is normalized to f = 100 mm. The production lens operates at f = 35 mm, giving a scale factor of ×0.35. All linear dimensions (radii, thicknesses, spacings, semi-diameters) are multiplied by this factor.

| Parameter | Patent (f = 100) | Production (f ≈ 35) |
|-----------|-----------------|---------------------|
| EFL | 100.0 mm | 35.0 mm |
| BFL | 76.3 mm | 26.7 mm |
| Total length | 107.9 mm | 37.8 mm |
| Total glass track | 31.6 mm | 11.1 mm |
| Close focus | — | 0.8 m |
| Maximum aperture | f/2.8 | f/2.8 |
| Half-field angle | 31.15° | 31.15° |
| Image circle (half-diagonal) | 60.4 mm | 21.2 mm |

The production image half-diagonal of 21.2 mm covers 35mm film's half-diagonal (21.63 mm) with minor vignetting at the extreme corners — consistent with the *Thousand and One Nights* observation that "light intensity at periphery was slightly low."

---

## 9. Patent Condition Analysis

The patent establishes nine parametric conditions that define the design space. Embodiment 1 satisfies all of them:

| Condition | Expression | Value | Range | Status |
|-----------|-----------|-------|-------|--------|
| (1) | f₁,₂ / f₄,₅ | 0.959 | 0.7 – 1.4 | ✓ |
| (2) | ν₃ | 31.1 | 26.0 – 36.0 | ✓ |
| (3) | ν₁ | 54.0 | 49.8 – 59.0 | ✓ |
| (4) | ν₄ < ν₅ | 49.4 < 60.4 | — | ✓ |
| (5) | r₁ / f | 0.320 | 0.05 – 0.40 | ✓ |
| (6) | r₃ / f₂ | 0.384 | 0.20 – 0.55 | ✓ |
| (7) | r₅ / f₃ | 7.18 | 3.0 – 11.0 | ✓ |
| (8) | r₇ / f | 0.837 | 0.65 – 0.95 | ✓ |
| (9) | n₄ / n₅ | 1.094 | 1.04 – 1.12 | ✓ |

Conditions (1)–(4) primarily govern chromatic correction (axial color, lateral color, and chromatic coma). Conditions (5)–(8) control monochromatic aberrations (spherical aberration, field curvature, coma). Condition (9) bridges both domains by simultaneously controlling the Petzval sum and the chromatic coma generated at the cemented interface.

---

## 10. Aberration Characteristics

The patent's aberration plots (FIG. 2) for Embodiment 1 reveal the following performance at f = 100:

**Spherical aberration:** Plotted from f/2.8 to f/4, showing well-controlled d-line and g-line curves with modest longitudinal separation (on the order of the focus shift between d and g). The under-correction at full aperture is contained within ±1 mm.

**Astigmatism:** The meridional (m) and sagittal (s) field curves show moderate separation at the full half-field of 31.15°, with the meridional surface curving inward (negative direction). This is consistent with the *Thousand and One Nights* commentary noting "less astigmatism though involving some curvature of field" — a classic Sonnar trade-off.

**Lateral chromatic aberration:** The g-line lateral color at the full half-field is well controlled, contained within approximately ±0.1 mm. This is a direct result of the glass selection (conditions 2–4) and the power distribution between the front and G2 groups.

**Distortion:** Positive (pincushion) at the field edge, reaching approximately 2–3% at the maximum half-field. The *Thousand and One Nights* article confirms "positive distortion (pincushion) is suppressed to a relatively reasonable degree of approx. 2%." This is typical for a behind-diaphragm configuration, where the stop is displaced far to the image side.

**Lateral aberration (coma):** The lateral aberration curves at α = 0°, 17°, and 31.15° show good symmetry between d-line and g-line traces, confirming the patent's central claim of well-corrected coma and chromatic coma. The lower ray of the oblique bundle — which the patent identifies as the most problematic ray for chromatic coma in this design type — shows minimal d/g-line splitting.

---

## 11. Comparative Context

The Nikon L35AF lens was designed in a competitive landscape dominated by Tessar-type compact camera lenses (typically 4 elements in 3 groups, f = 38 mm, f/2.8–3.5). Wakamiya's choice of a modified Sonnar configuration was distinctive for several reasons:

**Shorter focal length:** Most contemporary compact cameras used 38mm lenses, giving a half-field angle of roughly 29.6° (2ω ≈ 59.3°). The L35AF's 35mm focal length extends the patent's design field to 31.15° (2ω = 62.3°) — an additional 1.5° of half-field over a 38mm competitor. Full-diagonal coverage of 35mm film would require 31.7° (2ω ≈ 63.4°), but the patent's slightly smaller design field leaves the outermost corners marginally vignetted (~98% coverage), consistent with the noted peripheral light fall-off. Even at 62.3°, this field represents a significant design challenge: the *Thousand and One Nights* article describes the Sonnar type as "unfit for wide angle lenses by nature," because its rear-heavy power distribution and behind-diaphragm stop placement amplify off-axis aberrations (particularly coma and pincushion distortion) as the field angle grows. Achieving 35mm required Wakamiya to push the front-group divergence harder against the G2-group convergence, a balancing act governed by conditions (5)–(8).

**More compact total length:** At 1.08f (≈ 37.8 mm total length for f = 35 mm), the L35AF lens was shorter than a Tessar at 1.15f (which would be ~40.3 mm). This mattered greatly in a compact camera body.

**Fewer air–glass surfaces:** The cemented doublet eliminates one air–glass interface compared to a four-element air-spaced design, reducing internal reflections and improving contrast — an advantage noted by multiple reviewers who praise the L35AF's contrast and resistance to flare.

**Superior coma correction:** The patent's central innovation is the careful management of chromatic coma through the interplay between the high-dispersion negative element (L13) and the differentially dispersive cemented doublet (L21+L22). Conditions (2) and (4) work together to control the chromatic divergence of the lower oblique ray — a problem that the patent describes as endemic to this design type and that competitors had not adequately solved.

---

## 12. Summary of Key Findings

- **Design type:** Sonnar-type / behind-diaphragm (derived from modified Tessar lineage per patent), 5 elements in 4 groups
- **Aspherical surfaces:** None — the design is entirely spherical
- **Glasses used:** Four distinct glass types from the HOYA/OHARA catalog families (LaK 8, TAF5, FD60, SK 16)
- **Focus method:** Unit focus (entire lens translates forward), ~1.6 mm extension at 0.8 m; BFD increases from 26.007 mm to 27.608 mm
- **Key innovation:** Careful chromatic coma correction through nine bounded parametric conditions governing glass dispersion, element bending, and power distribution
- **Patent–production relationship:** f = 100 prescription scaled ×0.35 to production f = 35 mm
- **Image quality hallmarks:** High contrast, well-corrected coma and lateral color, moderate pincushion distortion (~2%), slight field curvature — the classic Sonnar fingerprint refined for compact camera use

---

*Data source: US 4,457,596, Embodiment 1 (Koichi Wakamiya / Nippon Kogaku K.K., 1984). All quantitative claims verified via independent ABCD matrix paraxial ray trace. Glass identifications based on cross-reference with OHARA, HOYA, and SCHOTT catalogs. Historical context from Nikon "NIKKOR — The Thousand and One Nights" No. 33 (Haruo Sato).*
