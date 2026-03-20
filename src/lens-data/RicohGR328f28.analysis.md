# Optical Analysis: Ricoh GR III Lens

## US 20190154946A1 — Example 5 (Production Design)

**Patent:** US 2019/0154946 A1, "Imaging Lens, Camera, and Portable Information Terminal Device"
**Applicant / Inventor:** Kazuyasu Ohashi (Chiba, JP)
**Assignee:** Not listed in the publication. Ohashi has a long record of lens patents assigned to Ricoh Co., Ltd. (e.g., EP2708930B1, US9864167B2, US20060193062A1), and the described design matches the Ricoh GR III. Assignment was likely recorded separately at the USPTO.
**Priority:** JP 2017-225118 (22 November 2017)
**Filed (US):** 26 September 2018
**Published:** 23 May 2019

---

## 1. Identification as the Ricoh GR III Production Lens

Example 5 of US 20190154946A1 (FIG. 5 / FIG. 23) is identified as the production optical design for the Ricoh GR III camera lens through convergent criteria:

| Parameter | Patent Example 5 | Ricoh GR III Spec |
|---|---|---|
| Focal length | 18.28 mm | 18.3 mm |
| F-number | 2.87 | 2.8 |
| Elements / Groups | 6 / 2 (optical) = 4 (physical) | 6 elements in 4 groups |
| Aspherical elements | 2 (3 aspherical surfaces) | 2 aspherical elements |
| Half angle of view | 38.2° | ~38° (28 mm equiv.) |
| Image circle | 28.4 mm (Y′ = 14.2 mm) | APS-C: 23.5 × 15.6 mm (diag. ≈ 28.4 mm) |

The patent describes two "lens groups" in the optical sense — a front group LO and a rear group LI, each with positive refractive power, separated by the aperture stop. In manufacturing terms, these six elements separate into four physically distinct units (two singlets and two cemented doublets), which is the "4 groups" cited in Ricoh's product specifications.

The patent's priority date of November 2017 aligns with the GR III development timeline (announced September 2018, released March 2019). The inventor is based in Chiba, Japan, consistent with Ricoh's optical design operations.

---

## 2. Overall Optical Configuration

The design is a compact wide-angle imaging lens with a quasi-symmetric power arrangement around the aperture stop. Despite the patent's "two-group" nomenclature, the physical layout comprises four separated units:

| Physical Group | Elements | Function |
|---|---|---|
| Group 1 | L11 (singlet) | Front negative meniscus with 1 aspherical surface (precision glass molded) |
| Group 2 | L12 + L13 (cemented doublet) | Positive doublet; chromatic correction in front group |
| Group 3 | L21 + L22 (cemented doublet) | Positive doublet; chromatic correction in rear group |
| Group 4 | L23 (singlet) | Rear meniscus with 2 aspherical surfaces (precision glass molded) |

The stop is located in the air gap between Groups 2 and 3, embedded within what the patent calls the "intermediate air lens" LAM. This placement is central to the patent's key innovation: achieving a substantially symmetric power distribution (negative–positive–negative) using only three air lenses between the outermost elements.

### 2.1 Air Lens Architecture

The patent's primary claim concerns the configuration of exactly three air lenses formed between the first and last glass elements. An "air lens" is the air gap between the image-side surface of one element and the object-side surface of the next, treated as an optical element in its own right.

**Air lens LAO (object-side):** Formed between L11 and L12, bounded by surfaces with R = +10.894 and R = −18.486. Both surfaces are convex as seen from within the air gap, making this a *biconvex air lens* with *negative* refractive power. LAO acts as a diverging element that helps balance the strong positive power of the cemented groups.

**Air lens LAM (intermediate):** Formed between L13 and L21, bounded by surfaces with R = −25.206 and R = +13.099. Both surfaces are concave as seen from within the air gap, making this a *biconcave air lens* with *positive* refractive power. The aperture stop sits inside LAM. This air lens provides concentrating power symmetrically distributed around the stop.

**Air lens LAI (image-side):** Formed between L22 and L23, bounded by surfaces with R = +12.744 and R = −16.835. Both surfaces are convex as seen from within the air gap, making this a *biconvex air lens* with *negative* refractive power. LAI mirrors LAO's role on the image side, completing the symmetric negative–positive–negative power arrangement.

This architecture is significant for several reasons. By limiting the system to exactly three air lenses, the number of air-glass interfaces (and therefore ghost-producing reflection surfaces) is minimized. The biconvex–biconcave–biconvex air-lens sequence creates a naturally symmetric correction environment that suppresses coma, distortion, and lateral chromatic aberration without requiring the asymmetric retrofocus configuration typical of wide-angle digital camera lenses.

---

## 3. Prescription Data

### 3.1 Surface Table (Infinity Focus)

From FIG. 23 of the patent: f = 18.28 mm, F/2.87, ω = 38.2°

| Surf. | R (mm) | d (mm) | n_d | ν_d | P_gF | Glass | Element |
|---|---|---|---|---|---|---|---|
| 01 | +17.034 | 0.70 | 1.51633 | 64.06 | 0.5333 | OHARA L-BSL7 | L11 front |
| 02\* | +10.894 | 2.46 | 1.0 | — | — | air | L11 rear (asph) |
| 03 | −18.486 | 0.60 | 1.63980 | 34.47 | 0.5922 | OHARA S-TIM27 | L12 front |
| 04 | +8.332 | 2.75 | 1.88100 | 40.14 | 0.5701 | HOYA TAFD33 | L13 (junction) |
| 05 | −25.206 | 1.10 | 1.0 | — | — | air | L13 rear |
| STO | ∞ | 1.20 | 1.0 | — | — | air | Aperture stop |
| 07 | +13.099 | 2.76 | 1.88100 | 40.14 | 0.5701 | HOYA TAFD33 | L21 front |
| 08 | −8.666 | 0.50 | 1.69895 | 30.13 | 0.6030 | OHARA S-TIM35 | L22 (junction) |
| 09 | +12.744 | 1.52 | 1.0 | — | — | air | L22 rear |
| 10\* | −16.835 | 1.00 | 1.88202 | 37.22 | 0.5769 | HOYA M-TAFD307 | L23 front (asph) |
| 11\* | −17.510 | 12.807 | 1.0 | — | — | air | L23 rear (asph) |
| 12 | ∞ | 1.40 | 1.51633 | 64.14 | — | Filter glass | IR/OLPF |
| 13 | ∞ | ~0.70 | 1.0 | — | — | air | to image plane Im |

Surfaces marked with \* are aspherical.

### 3.2 Aspherical Surface Coefficients

The aspherical sag equation used in the patent is:

Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + A₄h⁴ + A₆h⁶ + A₈h⁸ + A₁₀h¹⁰ + A₁₂h¹² + A₁₄h¹⁴

**Surface 02 (L11 rear — aspherical):**

| Coefficient | Value |
|---|---|
| K | 0.0 |
| A₄ | +2.49546 × 10⁻⁴ |
| A₆ | +5.30767 × 10⁻⁶ |
| A₈ | −1.77772 × 10⁻⁷ |
| A₁₀ | +2.52567 × 10⁻⁸ |
| A₁₂ | −9.46560 × 10⁻¹⁰ |
| A₁₄ | +1.70552 × 10⁻¹¹ |

Note: The A₆ exponent is partially illegible in the published patent figure due to superscript rendering; the value 10⁻⁶ is inferred from the coefficient magnitude and the consistent pattern across all eight examples (Examples 6 and 8 show A₆ coefficients of 5.63 × 10⁻⁶ and 5.09 × 10⁻⁶ respectively for their second surfaces).

**Surface 10 (L23 front — aspherical):**

| Coefficient | Value |
|---|---|
| K | 0.0 |
| A₄ | +2.21965 × 10⁻⁴ |
| A₆ | −7.84181 × 10⁻⁷ |

Higher-order coefficients (A₈ through A₁₄) are not listed for this surface, indicating they are zero or negligible.

**Surface 11 (L23 rear — aspherical):**

| Coefficient | Value |
|---|---|
| K | +7.28422 |
| A₄ | +6.02712 × 10⁻⁴ |
| A₆ | +8.85505 × 10⁻⁶ |
| A₈ | −5.39399 × 10⁻⁸ |
| A₁₀ | +4.60086 × 10⁻⁹ |

The large positive conic constant (K = +7.28) on surface 11 indicates a strongly oblate ellipsoidal base shape. This is the most heavily aspherized surface in the design, consistent with its role as the final corrector element responsible for field flattening and off-axis aberration control at the image side.

---

## 4. Element-by-Element Analysis

### 4.1 L11 — Front Negative Meniscus (OHARA L-BSL7)

| Property | Value |
|---|---|
| Shape | Negative meniscus, concave toward image |
| Radii | R₁ = +17.034, R₂ = +10.894 |
| Center thickness | 0.70 mm |
| Glass | OHARA L-BSL7 (n_d = 1.51633, ν_d = 64.06) |
| Focal length (thick lens) | −60.9 mm |
| Aspherical surfaces | 1 (rear surface, S02) |

**Glass:** L-BSL7 is a low-softening-temperature borosilicate crown glass in Ohara's catalog. The "L-" prefix designates Ohara's series of glasses formulated for precision glass molding (PGM), with controlled viscosity-temperature characteristics that allow forming at lower temperatures than standard "S-" type glasses while maintaining equivalent optical properties. Its optical constants (n_d = 1.5163, ν_d = 64.06) are closely analogous to Schott N-BK7. It lies on the Abbe normal line (ΔP_gF = −0.003), exhibiting no anomalous partial dispersion.

**Optical role:** L11 is the patent's "first negative lens with a concave surface facing the image side." Its weak negative power (f ≈ −61 mm, f₁/f = −3.33) introduces a slight retrofocus-like property into the otherwise symmetric design, which serves two purposes: it shifts the exit pupil away from the image plane for better telecentricity at the sensor, and it widens the achievable field of view. The patent's conditional expression [9] constrains this element's power to the range −4.0 < f₁/f < −2.2, and Example 5 sits near the middle of this range.

**Aspherical surface (S02):** The rear surface of L11 carries a conventional (K = 0) asphere with six polynomial terms through A₁₄. The coefficients produce a surface that departs from the spherical base shape increasingly toward the rim, primarily correcting spherical aberration and field curvature generated by the steep meniscus shape. Its position at the front of the lens, where the beam diameter is largest, gives it strong leverage for correcting pupil-dependent aberrations. The use of L-BSL7 (a PGM-compatible glass) indicates this element is manufactured by precision glass molding, allowing the aspherical surface to be formed directly in the pressing operation.

---

### 4.2 L12 — Negative Flint Element in Front Doublet (OHARA S-TIM27)

| Property | Value |
|---|---|
| Shape | Biconcave |
| Radii | R₁ = −18.486, R₂ = +8.332 (cemented junction) |
| Center thickness | 0.60 mm |
| Glass | OHARA S-TIM27 (n_d = 1.63980, ν_d = 34.47) |
| Focal length (thick lens) | −8.9 mm |

**Glass:** S-TIM27 is a medium-index flint glass with moderately high dispersion (ν_d = 34.47). Its partial dispersion ratio P_gF = 0.5922 lies slightly above the Abbe normal line (ΔP_gF = +0.006), which is typical for this class of titanium-containing flints.

**Optical role:** L12 is the negative (diverging) component of the front cemented doublet. Its strong negative power (f ≈ −8.9 mm) combined with the high dispersion provides the chromatic correction needed to offset the positive dispersion of L13. The biconcave shape with a steep image-side radius (R₂ = +8.332) means the junction surface with L13 carries significant refractive power, which is advantageous for correcting higher-order chromatic aberrations.

---

### 4.3 L13 — Positive High-Index Element in Front Doublet (HOYA TAFD33)

| Property | Value |
|---|---|
| Shape | Biconvex |
| Radii | R₁ = +8.332 (cemented junction), R₂ = −25.206 |
| Center thickness | 2.75 mm |
| Glass | HOYA TAFD33 (n_d = 1.88100, ν_d = 40.14) |
| Focal length (thick lens) | +7.4 mm |

**Glass:** TAFD33 is a high-refractive-index glass from Hoya's dense tantalum flint family. At n_d = 1.881, it is among the highest-index glasses in common production use. Despite its "flint" classification, ν_d = 40.14 places it in the moderate-dispersion range — significantly less dispersive than traditional dense flints. Its partial dispersion ratio (P_gF = 0.5701) falls slightly below the normal line (ΔP_gF = −0.006), meaning it exhibits a mild negative anomalous dispersion.

**Optical role:** L13 is the positive (converging) workhorse of the front group. Its very high refractive index allows strong curvature at relatively modest surface radii, which helps keep the total lens diameter small — a critical constraint for a pocketable camera. The 2.75 mm center thickness (the thickest element in the design) reflects the steep biconvex shape needed at this index.

**Front doublet as a unit (L12 + L13):** The cemented pair has a combined focal length of +32.9 mm. The doublet corrects longitudinal chromatic aberration by pairing the high-dispersion negative flint (L12) with the moderate-dispersion positive element (L13). The index difference at the cemented junction (Δn = 1.881 − 1.640 = 0.241) is large, which means the junction surface contributes meaningful refractive power and helps distribute aberration correction across the interface.

---

### 4.4 L21 — Positive High-Index Element in Rear Doublet (HOYA TAFD33)

| Property | Value |
|---|---|
| Shape | Biconvex |
| Radii | R₁ = +13.099, R₂ = −8.666 (cemented junction) |
| Center thickness | 2.76 mm |
| Glass | HOYA TAFD33 (n_d = 1.88100, ν_d = 40.14) |
| Focal length (thick lens) | +6.3 mm |

**Glass:** Identical to L13 — the same HOYA TAFD33 glass type. Using the same glass in both positive doublet elements simplifies procurement, thermal matching, and manufacturing logistics.

**Optical role:** L21 is the positive component of the rear cemented doublet, positioned immediately after the aperture stop. With a focal length of only +6.3 mm, it is the strongest individual element in the system. The steep image-side radius (R₂ = −8.666) at the junction with L22 creates a powerful refracting surface. L21 provides the majority of the system's converging power on the image side of the stop, and its position near the stop gives it strong leverage for controlling spherical aberration and axial chromatic aberration.

---

### 4.5 L22 — Negative Flint Element in Rear Doublet (OHARA S-TIM35)

| Property | Value |
|---|---|
| Shape | Biconcave |
| Radii | R₁ = −8.666 (cemented junction), R₂ = +12.744 |
| Center thickness | 0.50 mm |
| Glass | OHARA S-TIM35 (n_d = 1.69895, ν_d = 30.13) |
| Focal length (thick lens) | −7.3 mm |

**Glass:** S-TIM35 is a dense flint with the highest dispersion of any glass in this design (ν_d = 30.13). It also exhibits the most significant anomalous partial dispersion in the system: P_gF = 0.6030 versus the normal-line value of 0.5931, giving ΔP_gF = +0.010. This positive anomaly means the blue-violet end of the spectrum is dispersed more than normal-line glasses would predict, which is relevant for secondary spectrum control.

**Optical role:** L22 is the negative (diverging) component of the rear cemented doublet, and corresponds to the patent's "third negative lens" disposed on the object side of the rear meniscus (L23). Being biconcave, it has concave surfaces facing both the object and image sides. Its strong negative power (f ≈ −7.3 mm) and very high dispersion counterbalance L21's positive power and moderate dispersion. The resulting rear cemented doublet (L21 + L22) has a combined focal length of +26.2 mm, shorter than the front doublet's +32.9 mm. This asymmetry (fF/fR = 2.29, with the front group weaker) is by design — it slightly favors the rear group's converging power to maintain adequate telecentricity and exit pupil distance for the APS-C sensor.

**Rear doublet as a unit (L21 + L22):** Combined focal length +26.2 mm. The doublet's junction surface (R = −8.666) carries a large index step (Δn = 1.699 − 1.881 = −0.182, or equivalently power is contributed by both the index change and the curvature), concentrating chromatic correction at a single bonded interface where alignment is guaranteed.

---

### 4.6 L23 — Rear Meniscus Corrector (HOYA M-TAFD307)

| Property | Value |
|---|---|
| Shape | Negative meniscus, concave toward object |
| Radii | R₁ = −16.835, R₂ = −17.510 |
| Center thickness | 1.00 mm |
| Glass | HOYA M-TAFD307 (n_d = 1.88202, ν_d = 37.22) |
| Focal length (thick lens) | ≈ −1620 mm (very weak) |
| Aspherical surfaces | 2 (both surfaces, S10 and S11) |

**Glass:** M-TAFD307 is a precision-glass-molding (PGM) compatible glass from Hoya's catalog, as indicated by the "M-" prefix. At n_d = 1.882 and ν_d = 37.22, it is a high-index moderate-dispersion flint, very similar in optical properties to TAFD33 but specifically formulated for the thermal and mechanical requirements of the PGM process. PGM involves pressing softened glass into precision molds at temperatures above the glass transition point, producing finished aspherical surfaces directly without post-grinding or polishing. Like L11's Ohara L-BSL7 (which carries Ohara's "L-" PGM designation), this glass was selected specifically to enable molded aspherical manufacturing.

**Optical role:** L23 is the most unusual element in the design. Despite having the highest refractive index of any element (n_d = 1.882), its nearly concentric radii (R₁ = −16.835 vs R₂ = −17.510, a difference of only 0.675 mm) give it almost zero paraxial refractive power (f ≈ −1620 mm). In a thin-lens sense, it is nearly an optically flat plate curved into a meniscus shape.

This near-zero power is intentional. L23 functions primarily as an *aspherical corrector plate* rather than a conventional refracting element. Its two aspherical surfaces — one with a standard polynomial departure (S10) and one with a strongly oblate conic base (K = +7.28 on S11) — provide the final, precise correction of field curvature, astigmatism, coma, and distortion across the full image circle. The high refractive index amplifies the effect of the aspherical departures: at n_d = 1.882, even small surface deformations produce significant optical path differences, allowing tight aberration correction with modest physical departures from the base sphere.

The patent explicitly states that it is "preferable for both the lens closest to the object and the lens closest to the image in the rear lens group LI to have an aspherical surface" because this configuration is "very advantageous for correction of astigmatism, coma aberration, and distortion aberration" (paragraph [0122]). L23 carries both of the rear group's aspherical surfaces on a single molded element, which is the most cost-effective manufacturing approach.

L23's position in the optical train — as the last glass element before the long back focal distance — gives its aspherical surfaces maximum leverage for correcting off-axis aberrations (particularly tangential field curvature and distortion) because the chief ray height is largest here relative to the marginal ray height.

The patent's conditional expression [10] constrains the ratio of L11's focal length to L23's focal length: −0.4 < fFF/fRR < 0.6, with Example 5 yielding fFF/fRR = 0.038 — almost exactly zero. This confirms that L23 carries negligible paraxial power and that its role is purely corrective.

---

## 5. Glass Selection Strategy

The design uses five distinct glass types from two manufacturers (Ohara and Hoya). The glass selection reflects several engineering priorities:

### 5.1 Chromatic Correction

The two cemented doublets use a consistent strategy: pair a high-index moderate-dispersion positive element (HOYA TAFD33, ν_d = 40.14) with a lower-index high-dispersion negative element (S-TIM27 or S-TIM35, ν_d = 30–34). The Abbe number difference across each junction is approximately 6–10 units, which provides adequate longitudinal chromatic correction for the f/2.8 aperture and 18.3 mm focal length.

None of the glasses exhibit strong anomalous partial dispersion (the largest |ΔP_gF| is 0.010 for S-TIM35). This design does not attempt apochromatic correction — secondary spectrum is accepted within the tolerances appropriate for an APS-C compact camera pixel pitch of approximately 3.9 μm.

### 5.2 High-Index Strategy

Three of the six elements use glasses with n_d > 1.88 (TAFD33 and M-TAFD307). This high-index strategy is fundamental to the design's compactness. Higher refractive indices allow a given refractive power to be achieved with shallower surface curvatures, which simultaneously reduces element diameters, relaxes manufacturing tolerances, and lowers higher-order aberrations. This is why Ricoh's marketing specifically highlights "high-refractive index, low dispersion glass" as a key technology of the GR III lens.

### 5.3 Manufacturing Compatibility

The glass selection shows careful attention to manufacturing:

- **L-BSL7** (L11): Ohara's "L-" prefix denotes low-softening-temperature glass formulated for precision glass molding. L11's aspherical rear surface is produced by PGM.
- **S-TIM27 and S-TIM35** (L12, L22): Ohara's "S-" prefix designates their eco-friendly series (lead-free, arsenic-free, RoHS compliant). These are conventional glasses used for the cemented doublet components, which have only spherical surfaces and are manufactured by standard grinding and polishing.
- **HOYA TAFD33** (L13, L21): Used in both cemented doublets, reducing the number of distinct glass types in procurement. Manufactured by conventional methods (spherical surfaces only).
- **HOYA M-TAFD307** (L23): Hoya's "M-" prefix designates PGM-compatible glass. Both of L23's aspherical surfaces are produced by precision glass molding.

In total, two of the six elements (L11 and L23) are precision glass molded — exactly the two elements that carry aspherical surfaces. The remaining four elements use conventionally processed glasses with spherical surfaces only.

---

## 6. Aspherical Surfaces

The design uses three aspherical surfaces on two elements — the minimum number of aspherical surfaces needed for adequate correction in a compact 6-element wide-angle design.

**Surface 02 (L11 rear):** Positioned at the front of the system where beam diameter is large. This asphere has the widest clear aperture and acts primarily on the marginal ray, correcting spherical aberration and its interaction with field curvature. The conic constant is zero, so the departure from the base sphere is entirely driven by the polynomial terms. The coefficients through A₁₄ indicate a complex surface profile needed to correct higher-order aberrations across the full f/2.8 aperture.

**Surface 10 (L23 front):** Positioned near the image, where it primarily affects the chief ray at field angles. With only two polynomial terms (A₄ and A₆) and a zero conic constant, this is a gentle asphere that fine-tunes astigmatism and field curvature at intermediate field heights.

| Coefficient | Value |
|---|---|
| K | 0.0 |
| A₄ | +2.21965 × 10⁻⁴ |
| A₆ | −7.84181 × 10⁻⁷ |

**Surface 11 (L23 rear):** The most aggressive asphere in the design, with K = +7.28 and four polynomial terms. This is the last refracting surface before the image plane and carries the heaviest correction burden for off-axis aberrations — particularly tangential coma, sagittal field curvature, and distortion at the field edge. The large conic constant creates a strongly non-spherical base shape that cannot be described by polynomial terms alone, indicating that the surface profile departs substantially from a sphere across its clear aperture.

Both aspherical elements are manufactured by precision glass molding: L11 uses Ohara L-BSL7 (a low-Tg glass carrying Ohara's "L-" PGM designation) and L23 uses Hoya M-TAFD307 (carrying Hoya's "M-" moldable designation). In the PGM process, the aspherical mold inserts are diamond-turned and polished to nanometer-level accuracy, then a glass preform is heated and pressed into the mold cavity. This is the standard production method for aspherical elements in compact cameras, producing finished surfaces directly without post-grinding or polishing.

---

## 7. Focus Mechanism

The patent states that "focusing can be performed by moving the imaging lens 31 as a whole" (paragraph [0123]). This is **unit focusing** — the entire optical assembly translates along the axis as a rigid unit, and only the back focal distance changes.

Unit focusing is the simplest possible focus mechanism: no internal groups move relative to each other, no cam tracks are needed within the lens barrel, and aberration balance is maintained across the focus range (since all element spacings are fixed). The tradeoff is that aberrations may shift slightly at close distances because the object conjugate changes without any compensating adjustment in the lens spacing.

The Ricoh GR III implements this as a retractable lens barrel that extends from the camera body when powered on. Normal focusing range is approximately 10 cm to infinity; a dedicated macro mode extends the barrel further, achieving a minimum focus distance of 6 cm from the front of the lens. The patent does not include variable air spacing data for Example 5, which is consistent with unit focusing (no internal gaps change).

---

## 8. Verified Conditional Expressions

The patent defines ten conditional expressions that constrain the design for optimal performance. All values were independently computed from the prescription data using paraxial ray-transfer matrix methods and verified against the patent's stated values.

| Expression | Formula | Computed | Patent | Match |
|---|---|---|---|---|
| [1] | (r₁ₒ + r₂ₒ)/(r₁ₒ − r₂ₒ) | −0.258 | −0.258 | ✓ |
| [2] | (r₁ᵢ + r₂ᵢ)/(r₁ᵢ − r₂ᵢ) | −0.138 | −0.138 | ✓ |
| [3] | (r₁ₘ + r₂ₘ)/(r₁ₘ − r₂ₘ) | +0.316 | +0.316 | ✓ |
| [4] | fF / fR | 2.294 | 2.294 | ✓ |
| [5] | Y′ / f | 0.777 | 0.777 | ✓ |
| [6] | tan(θP max) | — | 0.769 | (†) |
| [7] | L / f | 1.613 | 1.613 | ✓ |
| [8] | DT / f | 0.798 | 0.798 | ✓ |
| [9] | f₁ / f | −3.330 | −3.331 | ✓ |
| [10] | fFF / fRR | 0.038 | 0.038 | ✓ |

(†) Expression [6] uses θP max, the angle at which the chief ray at maximum image height strikes the sensor plane. This differs from the half field angle ω = 38.2° because of the non-telecentric exit pupil and any residual distortion. The value tan(θP max) = 0.769 corresponds to θP max ≈ 37.6°, indicating that the chief ray at the image corner strikes the sensor at approximately 37.6° from the normal. This is a relatively steep angle that is explicitly addressed in the patent: "it is possible to construct a system that allows the angle between the chief ray and the optical axis at the maximum image height to be about 35 to 40 degrees" (paragraph [0105]), relying on advances in on-chip microlens optimization and image processing for APS-C sensors with pixel pitches around 3.9 μm.

### 8.1 System-Level Parameters (Computed)

| Parameter | Value |
|---|---|
| System EFL | 18.285 mm |
| Entrance pupil diameter | 6.37 mm |
| Front group focal length (fF) | 62.6 mm |
| Rear group focal length (fR) | 27.3 mm |
| Front doublet focal length (L12+L13) | +32.9 mm |
| Rear doublet focal length (L21+L22) | +26.2 mm |
| Total track (surface 01 to image) | 29.50 mm |
| Total lens thickness (surface 01 to 11) | 14.59 mm |
| Back focal distance (surface 11 to image) | 14.91 mm (including 1.40 mm filter + 0.70 mm air) |

---

## 9. Aberration Performance

The patent includes aberration curves for Example 5 in FIG. 13. The aberration diagrams show d-line and g-line traces for spherical aberration, astigmatism (sagittal and meridional), distortion, and coma at multiple field heights (0.0y′ through y′ = 14.2 mm).

Key observations from the published curves:

- **Spherical aberration** is well-corrected to within approximately ±0.15 mm across the full aperture, with the g-line (blue) showing slightly more residual aberration than the d-line — consistent with the moderate secondary spectrum expected from a non-apochromatic design.
- **Astigmatism** is held below ±0.20 mm across the field, with sagittal and meridional surfaces tracking closely up to about 0.7y′ before diverging somewhat in the far corners.
- **Distortion** is less than ±2.0% across the full field — remarkably low for a 38° half-angle wide-angle lens. The negative (barrel) distortion characteristic is partially corrected optically rather than relying entirely on digital correction. Ricoh's product literature confirms that uncorrected RAW files from the GR III show very low geometric distortion.
- **Coma** is well-contained through 0.7y′, with some residual outer coma appearing at 0.9y′ and the full field edge — consistent with the performance tradeoff expected at f/2.8 in a 6-element design.

---

## 10. Summary of Key Design Features

The GR III lens design achieves an exceptional balance of compactness, optical performance, and manufacturability within only six elements:

1. **Quasi-symmetric power arrangement** around the aperture stop — negative–positive–negative distribution via three air lenses — provides natural correction of coma, distortion, and lateral chromatic aberration without requiring the extended back focus of a true retrofocus layout.

2. **High-index glass strategy** (three elements at n_d > 1.88) enables compact element diameters and shallow curvatures while maintaining adequate refractive power.

3. **Two aspherical elements, three aspherical surfaces** — with the front asphere (L11, precision glass molded from Ohara L-BSL7) correcting pupil-plane aberrations and the rear double-asphere (L23, precision glass molded from Hoya M-TAFD307) correcting field-plane aberrations — provide the correction degrees of freedom that would otherwise require two or three additional spherical elements.

4. **Unit focusing** eliminates internal moving groups, reducing mechanical complexity and enabling the retractable barrel design essential for the GR III's pocketable form factor.

5. **Only three air lenses** (air gaps between non-cemented elements) minimizes the number of air-glass interfaces that produce ghost reflections and flare, a characteristic highlighted in the patent as a fundamental advantage of the design architecture.

---

*Analysis based on US 20190154946A1, Example 5 (FIG. 5, FIG. 23). Prescription data transcribed from the patent publication. Focal lengths, group powers, and conditional expressions independently verified by paraxial ray-transfer matrix computation. Glass properties referenced against Ohara and Hoya published catalog data. Production identification based on convergent criteria matching Ricoh GR III published specifications.*
