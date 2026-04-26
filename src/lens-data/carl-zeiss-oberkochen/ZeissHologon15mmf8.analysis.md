# Carl Zeiss Hologon 15 mm f/8 — Optical Analysis

**Patent:** DE 1,241,637 B (Auslegeschrift), Example 1  
**Inventors:** Dr. Erhard Glatzel, Dr. Hans Schulz  
**Applicant:** Carl Zeiss, Heidenheim/Brenz  
**Filed:** 28 September 1966 · **Published:** 1 June 1967  
**Production variants:** Contarex Hologon (1969), Leica M Hologon (1972)

---

## 1. Introduction and Historical Context

The Hologon — from the Greek *holos* ("complete") and *gonia* ("angle") — is a three-element, three-group ultra-wide-angle lens designed by Dr. Erhard Glatzel at Carl Zeiss Oberkochen in 1966. It represents one of the most radical simplifications in wide-angle lens design ever realized for a production photographic objective. While most ultra-wide designs of its era required 7–10 or more elements to cover field angles beyond 90°, the Hologon achieves a full 110° diagonal field of view on 35 mm format with just three glass elements and no aspherical surfaces.

The design is an "inverted triplet" — negative outer menisci flanking a positive biconvex core — which inverts the element-power arrangement of the classic Cooke triplet (positive–negative–positive). This inversion is what the patent calls the "second solution" (Lösung mit negativen Außenlinsen) from the thin-lens theory of symmetric three-element objectives.

The Contarex Hologon 8/15 was first shown as a prototype at Photokina 1966, with production beginning in 1969. It was permanently mounted to a dedicated Zeiss Ikon camera body because its extremely short back focal distance (~4.5 mm) precluded compatibility with any existing reflex or rangefinder mount. An additional 225 units were later adapted to Leica M mount in 1972; these gained a focusing helicoid and could focus to 0.2 m. The lens was among the first at Zeiss to be designed with the aid of a computer — an IBM 7090 purchased specifically for optical computation at a cost equivalent to roughly $28 million today.

The subsequent Carl Zeiss Hologon 16 mm f/8 T* for the Contax G system (1994) replaced the three-element design with a five-element, three-group construction in which the front and rear menisci were each split into cemented doublets of the same glass types — "a technical trick to simplify manufacturing," as H.H. Nasse of Carl Zeiss described it — that preserved the optical formula while relaxing the extreme centering and polishing tolerances of the original.

---

## 2. Design Architecture: The Inverted Symmetric Triplet

### 2.1 Structural overview

The Hologon consists of three air-separated singlets arranged symmetrically about a central aperture stop:

| Position | Element | Type | Power | Glass type |
|----------|---------|------|-------|------------|
| Front | L_I | Thick negative meniscus | φ₁ = −1.144 | SF6 (dense flint) |
| Center | L_II | Thick biconvex positive | φ₂ = +2.738 | LAK8 (lanthanum crown) |
| Rear | L_III | Thick negative meniscus | φ₃ = −1.119 | SF6 (dense flint) |

The aperture stop sits at the center of L_II — literally inside the positive element. There is no room between the elements for a conventional iris diaphragm; the aperture is fixed at f/8.

### 2.2 Design symmetry and its consequences

The lens is approximately (but not exactly) symmetric about the stop plane. The front negative meniscus (φ₁ = −1.144) and rear negative meniscus (φ₃ = −1.119) have nearly equal power magnitudes, while the central positive element carries the bulk of the converging power (φ₂ = +2.738). The approximate symmetry yields several major advantages, well-known in classical lens design:

**Inherent aberration cancellation.** Odd-order aberrations — coma, distortion, and lateral chromatic aberration — cancel to first order in a symmetric system operating at unit magnification. While the Hologon operates at effectively infinite conjugate ratio (object at infinity), the high degree of symmetry still results in extraordinarily low distortion and negligible lateral color. The patent explicitly claims correction of distortion (Verzeichnung), and contemporary reports describe the lens as producing images with "virtually zero exaggeration of spatial relationships." For reference, the Biogon 4.5/21 — another Zeiss symmetric wide-angle — achieves less than 0.1% radial deviation (40 µm); the Hologon is understood to perform comparably.

**Near-concentric menisci.** The patent specifies that the centers of curvature of each negative meniscus lie extremely close to each other — within roughly 2.3% of the element thickness, far below the patent's claimed 50% limit. This means each thick meniscus is nearly concentric: both surfaces share approximately the same center of curvature, which lies close to the stop. The consequence is that each meniscus acts almost like a thick shell of glass centered on the pupil, and chief rays traverse it at nearly normal incidence regardless of field angle. This geometry is the fundamental mechanism by which the Hologon controls oblique aberrations — astigmatism, field curvature, and coma — over its enormous 110° field.

---

## 3. Patent Design Theory

The patent does not simply present a prescription; it derives the Hologon from first principles as a family of solutions to a thin-lens problem. This theoretical framework is worth summarizing, as it reveals *why* the design takes the form it does.

### 3.1 The three-element thin-lens problem

Glatzel and Schulz begin with three thin lenses of powers φ₁, φ₂, φ₃ separated by distances d₁ and d₂. They impose three conditions simultaneously:

1. **Total power normalization:** the system focal length equals a target value (normalized to 1).
2. **Back focal distance:** the rear focal point falls at a prescribed distance s′ behind the last lens.
3. **Petzval sum:** the quantity φ₁/n₁ + φ₂/n₂ + φ₃/n₃ equals a target value P.

For the symmetric case (φ₁ = φ₃, d₁ = d₂, n₁ = n₃), these three conditions reduce to a system that can be solved in closed form. The patent introduces the parameter x = √[(1−s′)/2] and derives that the product d₁·φ₁ = ±x (Eq. 6 in the patent), where the sign choice selects between two families of solutions.

### 3.2 The two solution families

The positive root gives the conventional solution with **positive outer lenses** and a negative center — essentially a Cooke triplet arrangement. This family produces moderate wide-angle designs with manageable aberration residuals but limited field angle.

The negative root gives the **inverted** solution with **negative outer lenses** and a positive center. The patent states that "a practical worked example of this second solution has not previously been known" — the Hologon is presented as the first realization. This family naturally produces extremely wide field coverage because the negative outer elements diverge incoming light, expanding the field acceptance.

### 3.3 Generalized solution with unequal indices

The patent extends the derivation to n₁ ≠ n₂ and P ≠ 0 (Eq. 9–10), introducing the ratio n₁/n₂ as an additional free parameter. This allows the designer to choose glass types (and therefore dispersion properties) while still satisfying the three optical conditions. The numerical example uses n₁/n₂ = 1.80518/1.71300 = 1.0538, and the patent's computed s′ = 0.87828 is the distance from the rear principal plane of the last lens to the system focal point (not the vertex-to-focus distance, which is the shorter BFD = 0.3028f).

Note: The patent contains a single numerical example (Ausführungsbeispiel). There is no "Example 2" or alternative prescription.

---

## 4. Aspherical Surfaces

**The Hologon has no aspherical surfaces.** Every surface in the prescription is spherical. The patent table lists only radii of curvature (R values) and makes no mention of conic constants or polynomial aspheric coefficients.

This is one of the most remarkable aspects of the design. An all-spherical triplet covering 110° at f/8 with near-zero distortion was — and remains — an extraordinary achievement. The correction relies entirely on the precise choice of glass types, the extreme thickness of the elements (each meniscus is thicker than the air spaces flanking it), and the near-concentric geometry of the menisci about the stop. As discussed in Section 8, the true Petzval sum for this design is very close to zero, producing a nearly flat image field.

The absence of aspheric surfaces, however, contributes directly to the lens's legendary manufacturing difficulty. Every parameter — radius, thickness, centering, and index homogeneity — must be held to extremely tight tolerances across glass elements that are nearly hemispherical in shape. Polishing a deeply curved, nearly hemispherical meniscus to sub-wavelength surface accuracy on both faces is among the most demanding operations in classical optics.

---

## 5. Glass Identification

### 5.1 L_I and L_III — The outer menisci

| Property | Patent value | Schott SF6 | Residual |
|----------|-------------|------------|----------|
| n_d | 1.80518 | 1.80518 | 0.00000 |
| ν_d | 25.46 | 25.43 | +0.03 |

**Identification: Schott SF6** (six-digit glass code 805254). SF6 is a classical dense flint glass in the Schott catalog, characterized by high refractive index and high dispersion. The original formulation contains lead oxide (PbO) as an essential component for achieving its optical properties. The refractive index match is exact; the Abbe number residual of +0.03 falls well within Schott's Step 4 tolerance of ±0.8%.

The modern lead-free equivalent, N-SF6 (nd = 1.80518, νd = 25.36), has a slightly larger Abbe number deviation of +0.10, making the classical SF6 the closer and historically appropriate match for a 1966 design.

SF6 has a density of 5.18 g/cm³ — quite heavy, which contributes to the Hologon's surprisingly hefty feel despite its small size (the Leica M version weighs 110 g). The glass has relatively poor transmission in the deep blue and ultraviolet, but for a photographic lens operating at f/8 this has negligible practical impact.

### 5.2 L_II — The central positive element

| Property | Patent value | Schott LAK8 / N-LAK8 | Residual |
|----------|-------------|----------------------|----------|
| n_d | 1.71300 | 1.71300 | 0.00000 |
| ν_d | 53.89 | 53.83 | +0.06 |

**Identification: Schott LAK8** (six-digit glass code 713538). LAK8 is a lanthanum crown glass — a rare-earth-containing optical glass with moderately high refractive index and low dispersion. The "LaK" designation indicates lanthanum crown (La = lanthanum, K = Kron/crown). The refractive index match is exact; the Abbe number residual of +0.06 is again well within tolerance.

Lanthanum crown glasses were among the important new glass types that became available in the post-war period, enabling designers like Glatzel to achieve combinations of high index and low dispersion that were previously impossible. For the Hologon, using a high-index, low-dispersion glass for the central positive element while pairing it with high-dispersion flint for the negative elements is the key to achieving chromatic correction.

### 5.3 Chromatic design condition

The patent's second claim specifies a formal condition for chromatic correction: the reciprocal Abbe numbers of the outer elements must each exceed that of the center element by at least 0.01. From the prescription:

- 1/ν₁ = 0.03928
- 1/ν₂ = 0.01856
- 1/ν₃ = 0.03928

The differences 1/ν₁ − 1/ν₂ = 1/ν₃ − 1/ν₂ = 0.0207, satisfying the condition by roughly a factor of two. This ensures that the high-dispersion negative elements can compensate the chromatic aberration of the positive element without requiring excessively strong powers.

---

## 6. Prescription and Computed Parameters

### 6.1 Patent prescription (normalized to f = 1.0000)

| Surface | Radius (×f) | Spacing (×f) | n_d | Element |
|---------|-------------|--------------|-----|---------|
| S1 (r₁) | +0.7760 | 0.5319 (d₁) | 1.80518 | L_I front |
| S2 (r₂) | +0.2562 | 0.1802 (d₂) | 1.0 (air) | L_I rear |
| S3 (r₃) | +0.3779 | 0.2550 (d₃/2) | 1.71300 | L_II front → STO |
| STO | (at center of L_II) | 0.2550 (d₃/2) | 1.71300 | Aperture stop |
| S4 (r₄) | −0.3672 | 0.1603 (d₄) | 1.0 (air) | L_II rear |
| S5 (r₅) | −0.2419 | 0.3491 (d₅) | 1.80518 | L_III front |
| S6 (r₆) | −0.5989 | BFD | 1.0 (air) | L_III rear |

Note: The stop is physically located at the center plane of L_II (after d₃/2 = 0.2550f). Total center thickness of L_II is d₃ = 0.5099f.

### 6.2 Computed system parameters (verified by independent ray trace)

| Parameter | Normalized (f=1) | Scaled (f=15 mm) | Patent value |
|-----------|-------------------|-------------------|--------------|
| Effective focal length | 1.0001 | 15.00 mm | 1.0000 |
| Back focal distance | 0.3030 | 4.545 mm | 0.3028·f |
| Total track (S1 to image) | 2.034 | 30.51 mm | 1.7313·f + BFD |
| Total glass+air length | 1.731 | 25.97 mm | 1.7313·f |
| f-number | — | f/8.0 | 1:8.0 |
| Full field angle (diagonal) | — | 110.5° | ±60° (half-angle) |

### 6.3 Element focal lengths

| Element | Thick-lens power (×1/f) | Focal length (×f) | Scaled (mm) |
|---------|-------------------------|--------------------|-------------|
| L_I | −1.1443 | −0.874 | −13.1 |
| L_II | +2.7380 | +0.365 | +5.48 |
| L_III | −1.1187 | −0.894 | −13.4 |

The positive center element is extraordinarily strong — its focal length is only about one-third of the system focal length. The negative menisci are also very strong, each with absolute focal length shorter than the system EFL. These extreme individual powers, nearly canceling in combination, are characteristic of wide-angle symmetric designs.

---

## 7. Role of Each Element

### 7.1 L_I — Front negative meniscus (SF6)

**Shape:** Thick negative meniscus, concave toward the image. Both surfaces curve toward the right (r₁ = +0.776f, r₂ = +0.256f), with the rear surface much more strongly curved. The inner surface (r₂ = 3.8 mm at production scale) is very tightly curved relative to the element's 8.0 mm center thickness, giving L_I the deeply bulging profile visible in the patent drawing and often described as "nearly hemispherical" in the photographic literature.

**Optical role:** L_I performs three functions simultaneously:

1. **Field angle expansion.** The strong negative power diverges incoming ray bundles, effectively increasing the angular acceptance of the system. This is the inverted-telephoto principle — L_I acts as a wide-angle converter for the positive core L_II, stretching the field from the moderate angle that L_II alone could cover to the full 110°.

2. **Petzval field flattening.** A negative element inherently contributes a negative Petzval term at the surface level, counteracting the positive contributions from L_II. The patent observes that the deep meniscus bending and extreme glass thickness of L_I allow the design to achieve a flat image field even though the patent's own thick-lens power calculation suggests a large positive Petzval residual. As discussed in Section 8, the true surface-by-surface Petzval sum is −0.030, confirming that the field is very nearly flat.

3. **Quasi-concentric oblique-ray control.** The near-concentricity of L_I's two surfaces about the stop (their centers of curvature differ by only 0.012f, or 2.3% of the element thickness) means that off-axis chief rays pass through the glass at nearly normal incidence to both surfaces. This minimizes astigmatism and coma contributions from this element, regardless of field angle.

### 7.2 L_II — Central biconvex positive (LAK8)

**Shape:** Nearly equi-biconvex (|r₃|/|r₄| = 1.03), thick, with the aperture stop at its center plane.

**Optical role:** L_II is the converging heart of the system. It collects the diverging ray bundles from L_I, forms the real image, and carries the entire positive power of the lens. Several aspects deserve emphasis:

1. **Power concentration.** With φ₂ = +2.738 (normalized) — roughly 2.7× the system power — L_II dominates the image formation. The nearly equi-biconvex shape distributes this power approximately equally between its two surfaces, which minimizes spherical aberration for an on-axis ray bundle (the principle behind a "best-form" singlet).

2. **Stop integration.** The patent states that the stop ("Blende") sits at the center of the positive lens with a fixed diameter ("festem Durchmesser"). As Kidger (2004) notes, the thickness of the central positive lens necessitates placing the aperture stop inside it, making a variable-diameter iris mechanism physically impossible. The fixed f/8 aperture is thus a direct consequence of embedding the stop within a thick glass element.

3. **Chromatic correction anchor.** The low-dispersion lanthanum crown glass (νd = 53.89) ensures that L_II introduces relatively little chromatic aberration per unit of refractive power. The outer flint elements, with their higher dispersion (νd = 25.46), then cancel the residual chromatic error through their negative contributions.

### 7.3 L_III — Rear negative meniscus (SF6)

**Shape:** Thick negative meniscus, concave toward the object. Both surfaces curve toward the left (r₅ = −0.242f, r₆ = −0.599f). The inner surface (r₅ = 3.6 mm at production scale) is tightly curved relative to the 5.2 mm center thickness, giving a similarly deeply curved profile to L_I, though noticeably thinner.

**Optical role:** L_III is the symmetry partner of L_I, performing the same three functions — field angle compression (converting the strongly converging cone from L_II into a gentler cone that reaches focus at the image plane), Petzval flattening, and concentric oblique-ray control — in reverse order. However, the symmetry is only approximate. L_III is noticeably thinner than L_I (0.349f vs. 0.532f, a 34% reduction), its outer radius is less steep (|r₆| = 0.599f vs. |r₁| = 0.776f), and its power (φ₃ = −1.119) is slightly weaker than φ₁ (−1.144). The air gaps also differ (d₄ = 0.160f vs. d₂ = 0.180f). This deliberate asymmetry is what optimizes performance for an object at infinity and a real image, rather than for the unit-magnification conjugate where perfect symmetry would be ideal.

The rear vertex of L_III sits only about 4.5 mm from the film/sensor plane in the production 15 mm version. This extremely short back focal distance is the fundamental reason why the original Contarex Hologon required a dedicated camera body with no mirror, no conventional shutter mechanism in the light path, and no standard lens mount.

---

## 8. Petzval Sum and Field Curvature

The Petzval sum is one of the most revealing computed quantities for this design. The patent and the surface-level calculation yield strikingly different numbers, and understanding why they differ illuminates the core principle of the Hologon.

### 8.1 The patent's calculation

The patent reports the element powers as φ₁ = −1.1440, φ₂ = +2.7388, φ₃ = −1.1188 and computes:

> φ₁/n₁ + φ₂/n₂ + φ₃/n₃ = **+0.3453**

This positive value would suggest significant inward (Petzval-type) field curvature. Yet the patent claims — and the lens demonstrates — a flat image field. The patent explains this by stating that "the value of the Petzval sum P in the approximation valid for thin lenses can remain considerably greater than zero, even with a flattened image field," because of the large glass thicknesses and strong meniscus bending.

### 8.2 The true surface-by-surface Petzval sum

The Petzval sum is fundamentally a surface-level invariant: Σ (n′−n) / (R·n·n′), where the sum runs over all optical surfaces. This quantity depends only on surface curvatures and refractive indices — it is completely independent of element thicknesses or spacings. Computing it for all six surfaces of the Hologon gives:

> **True Petzval sum = −0.030**

This is confirmed by the mathematically equivalent calculation using *thin-lens element powers*. Each element's thin-lens power is φ_thin = (n−1)(1/R₁ − 1/R₂), ignoring the thickness term. Dividing each by its index and summing gives the same result: −0.030.

### 8.3 Why the numbers disagree

The patent's 0.3453 and the true −0.030 differ because the patent uses **thick-lens element powers** in a formula that is only valid for **thin-lens powers**. The thick-lens power includes an additional positive term proportional to element thickness:

> φ_thick = (n−1)[1/R₁ − 1/R₂ + (n−1)d / (n·R₁·R₂)]

For the Hologon's deeply curved, extremely thick menisci, this correction is enormous:

| Element | Thin-lens power | Thick-lens power | Difference |
|---------|-----------------|------------------|------------|
| L_I | −2.105 | −1.144 | +0.961 |
| L_II | +3.828 | +2.738 | −1.090 |
| L_III | −1.984 | −1.119 | +0.865 |

The thickness correction roughly *halves* the magnitude of each negative meniscus's power. When these reduced thick-lens powers are plugged into the Petzval formula φ/n, the negative elements contribute far less negatively than they do at the surface level, inflating the result to +0.345. The true Petzval sum, computed from surface curvatures alone, correctly reflects the balance of all six surfaces and comes out very close to zero.

### 8.4 Field curvature in practice

A Petzval sum of −0.030 (normalized to f = 1) corresponds to a Petzval radius of −33f, or approximately −494 mm for the 15 mm lens. The negative sign means the Petzval surface curves gently backward (away from the lens). At the extreme corner of the 35 mm frame (half-diagonal 21.6 mm), the Petzval surface sag is approximately h²/(2|R|) ≈ 0.47 mm — modest in absolute terms but not entirely negligible relative to the circle of confusion (0.030 mm). In practice, the field flatness of the Hologon is further improved by balancing the residual Petzval curvature against astigmatism, a standard aberration-balancing technique. The patent explicitly claims correction of both astigmatism and field curvature, and the lens is reported to deliver uniform sharpness across the field at its working aperture of f/8.

---

## 9. Focus Mechanism

### 9.1 Contarex Hologon (1969)

The original Contarex-mounted Hologon was a **fixed-focus lens** with no focusing mechanism whatsoever. The lens was set at its hyperfocal distance. For a 15 mm f/8 lens with a circle of confusion of 0.030 mm:

- **Hyperfocal distance:** H = f²/(N·c) = 15²/(8 × 0.030) = **937.5 mm ≈ 0.94 m**
- **Near focus limit** (when focused at H): H/2 ≈ **0.47 m**

Everything from roughly half a meter to infinity falls within the acceptable depth of field at f/8. Given the lens's extreme wide-angle perspective, most practical subjects are rendered acceptably sharp without any focus adjustment.

### 9.2 Leica M Hologon (1972)

The Leica M adaptation added a focusing helicoid, enabling close focus to 0.2 m (approximately 8 inches). The focusing mechanism is **unit focus** — the entire optical assembly moves forward as a rigid unit on the helicoid. There are no internal focusing groups or variable air spaces; the only dimension that changes during focus is the back focal distance (the gap between the rear element and the film plane).

The patent prescription does not define variable air spacings or a close-focus configuration, so the Leica M version's focus travel was presumably determined empirically during the adaptation process.

---

## 10. Concentricity and Manufacturing

### 10.1 Near-concentric geometry

The patent's first claim establishes that the centers of curvature of each negative meniscus lie closer together than 50% of the element thickness. The computed values are far tighter:

| Element | |CoC_front − CoC_rear| | Element thickness | Ratio |
|---------|--------------------------|-------------------|----|
| L_I | 0.012f (0.18 mm) | 0.532f (7.98 mm) | 2.3% |
| L_III | 0.008f (0.12 mm) | 0.349f (5.24 mm) | 2.3% |

Both menisci are concentric to within roughly 2% of their thickness — meaning their two surfaces share nearly identical centers of curvature, located close to the aperture stop. This is a much tighter concentricity than the patent formally claims, and it is what gives the Hologon its extraordinary wide-field correction.

### 10.2 Manufacturing difficulty

The near-hemispherical shape of the outer elements presents severe manufacturing challenges. As H.H. Nasse of Carl Zeiss wrote, "the precision requirements for the shape of the lenses and their centering are extremely high." Each element must be:

- **Ground and polished** on deeply curved surfaces approaching hemispherical geometry, where conventional flat-lap and spindle techniques become progressively less effective.
- **Centered** to sub-arcminute accuracy across both surfaces. Any wedge or decenter in the outer menisci directly introduces coma and astigmatism that the symmetric design cannot self-correct.
- **Index-homogeneous** throughout the thick glass body, especially for the SF6 elements (>8 mm center thickness), where index striations cause wavefront distortion.

The front and rear elements were hand-polished and hand-assembled. The difficulty (and cost) of this process is the direct reason why the later 16 mm Hologon for the Contax G system replaced each monolithic meniscus with a cemented doublet of the same glass types — a "technical trick" that eased manufacturing without altering the optical formula.

---

## 11. Vignetting and the Graduated ND Filter

The Hologon's cos⁴θ vignetting at the extreme field corner (θ ≈ 55°) amounts to approximately cos⁴(55°) ≈ 0.11 — a falloff of roughly 3.2 stops from center to corner. This is an inherent geometric consequence of any lens with the exit pupil close to the image plane and no telecentric rear group.

To compensate, Carl Zeiss supplied a graduated neutral-density center filter (a 4× ND filter that is darkest at the center and clear at the edges). The 4× factor corresponds to two stops of attenuation at the center while transmitting fully at the edges, which corrects most — but not all — of the 3.2-stop falloff, leaving approximately 1.2 stops of residual vignetting at the extreme corners. The tradeoff is a two-stop loss of effective speed: with the filter mounted, the effective maximum aperture becomes f/16 rather than f/8.

It should be noted that cos⁴ represents the minimum falloff for an unvignetted system; real illumination loss also includes mechanical vignetting from element rims, which typically makes the total falloff worse. At f/8 with deeply curved surfaces, the actual corner darkening may exceed the cos⁴ prediction, which is consistent with the 4× filter factor being calibrated to the measured lens behavior rather than to the theoretical curve.

---

## 12. Summary of Key Design Characteristics

- **3 elements in 3 groups** — among the simplest corrected wide-angle designs ever produced for this field coverage
- **All spherical surfaces** — no aspherics of any kind
- **Two glass types only** — SF6 (dense flint, nd = 1.80518, νd = 25.46) for both negative menisci, and LAK8 (lanthanum crown, nd = 1.71300, νd = 53.89) for the biconvex positive
- **Fixed f/8 aperture** — the stop is inside the central element with no room for an iris
- **Near-zero Petzval sum** (−0.030) — the true surface-level Petzval sum is nearly flat, despite the patent's thick-lens approximation suggesting otherwise
- **Near-concentric menisci** (concentricity ratio ~2.3%) — the mechanism for wide-field oblique-ray control
- **Back focal distance of ~4.5 mm** — requiring dedicated camera integration
- **No focusing elements** — unit focus (entire lens moves) in the Leica M version; fixed focus in the Contarex version
- **110° diagonal field of view** on 35 mm format with extremely low distortion

---

## 13. References

1. DE 1,241,637 B, "Dreilinsiges Weitwinkelobjektiv," Glatzel & Schulz, Carl Zeiss (filed 28 Sep 1966, published 1 Jun 1967). Auslegeschrift (published examined application). Contains one numerical example.
2. US 3,661,447, "Three lens element wide angle objective," Hans Schulz, Ris Ruth, et al., Carl Zeiss (issued 9 May 1972). The corresponding US patent, which expands the design to three worked examples covering different field angles and apertures (120° f/8, 110° f/5.6, 90° f/8).
3. H. H. Nasse, "Distagon, Biogon and Hologon," *Camera Lens Blog* No. 41, Carl Zeiss AG Camera Lens Division, December 2011.
4. Schott AG, *Optical Glass Data Sheets*: SF6 (805254.518), N-LAK8 (713538.375).
5. M. J. Kidger, *Intermediate Optical Design*, SPIE Press, 2004, pp. 15–16 (discussion of the Hologon stop placement).
