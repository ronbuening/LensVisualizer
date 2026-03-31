# NIKKOR-N 5cm f/1.1 — Patent & Optical Analysis

**Patent:** US 2,828,671 — "Wide Aperture Photographic Objectives"
**Inventor:** Saburo Murakami, Kawasaki City, Japan
**Assignee:** Nippon Kogaku K.K. (Nikon), Tokyo
**Filed:** January 3, 1957 (JP priority: April 10, 1956)
**Granted:** April 1, 1958
**Construction:** 9 elements in 6 components (groups)
**Design type:** Modified double-Gauss

---

## 1. Historical Context

The Nikkor-N 5cm f/1.1 was the fastest lens Nikon had ever produced when it was introduced in February 1956 for the Nikon S-mount rangefinder system. It held that distinction for over half a century, until the Nikkor Z 58mm f/0.95 S Noct arrived in 2019. The lens was the second production optic in history faster than f/1.2, following the Zunow 5cm f/1.1 released in 1953 by Teikoku Optical Industries.

The design was the work of Saburo Murakami, manager of Nikon's 3rd Mathematics Section in the Design Department. According to Nikon's own account (Haruo Sato, *Nikkor — The Thousand and One Nights*, No. 7), Murakami devoted two years of painstaking design work and prototyping to develop the lens. The designers of this era used only an abacus and logarithm tables to conduct ray tracing calculations — there were no electronic computers available for iterative optimization.

Approximately 2,593 units were manufactured across two barrel variants: 1,046 internal-mount (835 Nikon S bayonet, 211 Leica screw mount) and 1,547 external-mount units. The original internal-mount version proved problematic because the heavy front-loaded optics could distort the camera mount and cause rangefinder misalignment. The external-mount redesign of June 1959 solved this by encasing the focusing helicoid around the lens body rather than relying on the camera's internal focusing mechanism.

---

## 2. Optical Design Type

The Nikkor-N 5cm f/1.1 is a **modified double-Gauss** design. The classical Gauss objective uses two meniscus groups flanking a central aperture stop, but achieving f/1.1 with only four elements in two groups would produce unmanageable aberrations. Murakami's solution adds five elements — expanding the design from the typical six or seven elements of a fast Gauss to nine — while preserving the fundamental symmetry of the type.

The six components, front to rear, are:

| Component | Elements | Form | Role |
|-----------|----------|------|------|
| I | L1 | Positive meniscus, convex to object | Front power supplement |
| II | L2 | Positive meniscus, convex to object | Power distribution |
| III | L3 + L4 (cemented) | Negative meniscus, convex to object | Front achromatic doublet |
| *Stop* | — | Aperture diaphragm | — |
| IV | L5 + L6 (cemented) | Weakly positive meniscus, concave to object | Rear achromatic doublet |
| V | L7 | Plano-convex, flat rear | Rear power element |
| VI | L8 + L9 (cemented) | Positive meniscus, convex to object | Rear achromatic corrector |

The design philosophy, as described by Nikon, was to **lower the power of individual lens elements** compared to the alternative Sonnar-type approach (used by Zunow and others). By distributing the positive power across more elements — particularly the three lanthanum-glass positive elements (L3, L6, L7) — individual surface contributions to spherical aberration and coma are reduced. This is an especially attractive strategy for super-fast lenses, where aberrations scale rapidly with aperture.

The symmetry of the double-Gauss topology about the central stop yields inherently low distortion and small lateral chromatic aberration. Nikon's own evaluation notes that the spherical aberration curve is "almost straight," which is very unusual for a high-speed lens.

**A note on group count:** The patent unambiguously describes "six aligned and spaced components," with three cemented doublets (III, IV, VI). However, several third-party references cite the construction as "9 elements in 7 groups." The patent itself notes that "the lenses of each the third and fourth components of the objective of my invention may be slightly separated from each other rather than be intercemented." If one of the two central doublets was air-spaced rather than cemented in production, the count becomes seven air-separated groups. This is a plausible explanation for the discrepancy, and would not alter the optical behavior meaningfully given the very thin cement layers involved.

---

## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All 15 optical surfaces are spherical. This is entirely consistent with the era: the patent was filed in 1957, well before aspherical surface manufacturing became practical for photographic lenses. Nikon's first aspherical Nikkor, the AI Noct-Nikkor 58mm f/1.2, would not appear until 1977 — and Nikon explicitly traces its lineage to this very lens.

The correction of higher-order aberrations (particularly sagittal coma at the periphery) without aspherical surfaces was the fundamental design challenge. Murakami's approach relied entirely on the choice of glass types, element curvatures, and thickness distribution to manage the aberration balance. This is one reason the lens uses nine elements rather than the seven that would become standard in later double-Gauss designs — the additional surfaces provide more degrees of freedom for aberration correction without resorting to aspheres.

---

## 4. Prescription Data

The patent provides a single worked numerical example at a normalized focal length of f = 100 mm, F/1.1, with a 46° field angle. The production lens at 50 mm is a linear scale of this prescription (factor ≈ 0.499).

### 4.1 Correction: Surface r₆ — Patent Typographical Error

During transcription of the patent, the radius of curvature of the cemented interface between L3 and L4 (surface r₆) required correction. The patent prints this value as **r₆ = +872.1** in both the worked example (page 2, column 2) and the repeated prescription in Claim 3 (page 3, column 2). Since the same value appears in two independently typeset sections of the document, this is a **typographical error in the original 1958 patent publication**, not a modern OCR artifact.

Paraxial ray tracing demonstrates that r₆ = +872.1 is inconsistent with the patent's own stated component focal length of f_III = −823.7. A radius of +872.1 produces an essentially afocal cemented pair (f_III ≈ −8,460), not the moderately negative component the patent describes.

A systematic numerical search yields **r₆ = +122.5** (exact: 122.495) as the value required to reproduce f_III = −823.7 exactly. With this correction, all six stated component focal lengths agree with the thick-lens paraxial ray trace to within 0.1%, and the computed system EFL = 100.17 mm, closely matching the patent's stated f = 100. The typographical corruption of "122" → "872" is consistent with transposed or misset digits during the 1958 typesetting process.

### 4.2 Verified Prescription Table (f = 100 scale)

| Surface | R (mm) | d (mm) | nd | Element | Medium after surface |
|---------|--------|--------|----|---------|----------------------|
| r₁ | +167.6 | 8.7 | 1.6073 | L1 | Glass (L1) |
| r₂ | +428.3 | 0.6 | 1.0 | — | Air |
| r₃ | +93.0 | 8.5 | 1.6073 | L2 | Glass (L2) |
| r₄ | +163.8 | 1.4 | 1.0 | — | Air |
| r₅ | +53.5 | 19.4 | 1.7700 | L3 | Glass (L3) |
| r₆ | +122.5* | 4.1 | 1.5927 | L4 | Glass (L4, cemented) |
| r₇ | +33.3 | 25.2 | 1.0 | — | Air (stop gap) |
| *STO* | ∞ | — | 1.0 | — | *Aperture stop* |
| r₈ | −42.6 | 5.4 | 1.6483 | L5 | Glass (L5) |
| r₉ | +135.7 | 20.5 | 1.7170 | L6 | Glass (L6, cemented) |
| r₁₀ | −58.1 | 0.6 | 1.0 | — | Air |
| r₁₁ | +116.3 | 11.0 | 1.7170 | L7 | Glass (L7) |
| r₁₂ | ∞ (flat) | 0.6 | 1.0 | — | Air |
| r₁₃ | +142.3 | 2.9 | 1.6259 | L8 | Glass (L8) |
| r₁₄ | +96.9 | 7.8 | 1.6385 | L9 | Glass (L9, cemented) |
| r₁₅ | +518.0 | BFL | 1.0 | — | Air → image |

*r₆ corrected from patent's printed value of +872.1 based on paraxial verification against patent-stated component focal lengths. See §4.1.

**Sign convention:** Positive R = center of curvature to the right (convex to incident light from object side). This matches the patent's stated convention.

**Stop position:** The patent does not explicitly specify the aperture stop location, but the figure clearly places it within the large 25.2 mm air gap between Components III and IV (between surfaces r₇ and r₈). This is the natural location for a double-Gauss design. The exact split is estimated at approximately the midpoint of the gap (12.6 / 12.6 mm), inferred from the figure.

### 4.3 Computed System Parameters (f = 100 scale)

| Parameter | Value |
|-----------|-------|
| EFL (paraxial) | 100.17 mm |
| BFL | 45.58 mm |
| Total track (lens + BFL) | 162.3 mm |
| Entrance pupil diameter | 91.1 mm |
| Petzval sum | +0.00330 mm⁻¹ |
| Petzval radius | 303 mm (~3× EFL) |

A Petzval radius of approximately 3× EFL is typical for a fast double-Gauss design and represents a reasonable — though not exceptional — degree of field curvature correction. A positive Petzval sum for a positive-power system means the Petzval surface curves inward (toward the lens), causing the best-focus surface to bow backward away from the image plane at wide field angles. Nikon's own evaluation acknowledges that "a minimal amount of curvature of field appears" and that "curvature of field is strong in faraway backgrounds," with resolving power dipping in intermediate zones. This is consistent with the computed Petzval curvature and the characteristic pattern of a double-Gauss where the sagittal and tangential field curves cross at an intermediate field angle, creating a zone of reduced sharpness between a well-corrected center and a partially recovered periphery.

### 4.4 Component Focal Lengths

| Component | Patent stated | Computed (thick-lens) | Agreement |
|-----------|-------------|----------------------|-----------|
| f_I (L1) | +447.7 | +447.8 | ✓ |
| f_II (L2) | +338.9 | +338.9 | ✓ |
| f_III (L3+L4) | −823.7 | −823.7 | ✓ |
| f_IV (L5+L6) | +2,309.5 | +2,308.2 | ✓ |
| f_V (L7) | +162.2 | +162.2 | ✓ |
| f_VI (L8+L9) | +300.2 | +300.2 | ✓ |

Every component focal length matches to within 0.1% after the r₆ correction. The patent's constraint that each component's absolute focal length exceeds 1.1f (= 110 mm) is satisfied by all six components, with f_V = 162.2 being the tightest case.

---

## 5. Element-by-Element Analysis

### L1 — Component I: Front Positive Meniscus

- **Shape:** Positive meniscus, convex to object (R₁ = +167.6, R₂ = +428.3)
- **Glass:** nd = 1.6073, νd = 59.5 — Dense Crown (SK family), code 607/595
- **Focal length:** +447.8 mm (very weak positive, 4.5× the system EFL)
- **Role:** L1 is a low-power positive meniscus that serves primarily to extend the front group, distributing the convergence burden more gently across the front half of the lens. Its weak power means it contributes minimally to aberration while allowing the subsequent elements to work at reduced incidence angles. This element is *not* one of the three lanthanum elements — it uses conventional barium-based dense crown glass, likely a HIKARI (Nikon subsidiary) equivalent of Schott SK4 or a similar 1950s-era dense crown.

### L2 — Component II: Second Positive Meniscus

- **Shape:** Positive meniscus, convex to object (R₃ = +93.0, R₄ = +163.8)
- **Glass:** nd = 1.6073, νd = 59.5 — same glass as L1
- **Focal length:** +338.9 mm (moderate weak positive, 3.4× EFL)
- **Role:** L2 is the stronger of the two front meniscus elements. It works together with L1 to gradually converge the on-axis marginal ray bundle before it enters the more strongly curved Component III. The pair L1 + L2 contributes gentle positive power from the front, akin to a "power supplement" that transforms the classical four-element Gauss core into a wider-aperture design. Using the same glass as L1 simplifies manufacturing and ensures matched chromatic behavior.

### L3 — Component III, front element (cemented doublet D1)

- **Shape:** Positive meniscus, convex to object (R₅ = +53.5, R₆ = +122.5)
- **Glass:** nd = 1.7700, νd = 47.9 — **Lanthanum Crown/Flint (LaK/LaF)**, code 770/479
- **Focal length (standalone):** +109.9 mm
- **Role:** L3 is the first and most powerful of the three lanthanum elements. It carries the highest refractive index in the entire system (nd = 1.77). Its strongly curved front surface (r₅ = +53.5) does the bulk of the refracting in the front group, while the high refractive index keeps the surface curvatures more moderate than they would otherwise need to be — directly reducing spherical aberration contributions.

  The patent's conditional expressions require n₃ > 1.69 and 40 < ν₃ < 55. The lanthanum glass at nd = 1.77 satisfies this with comfortable margin. The condition n₃ > n₄ (1.770 > 1.593) ensures that the cemented interface contributes the correct chromatic correction: the high-index positive element paired with a lower-index, higher-dispersion negative element creates an achromatic doublet.

  **Glass note:** Nikon specifically credited "a newly developed type of optical glass made with the rare-earth element lanthanum" as a key design feature. George W. Morey had discovered the outstanding optical properties of lanthanum-containing glasses in the 1930s, and Eastman Kodak commercialized seven lanthanum glass types in the 1940s. After World War II, Schott's Walter Geffcken extended the range further into high-index territory. By the mid-1950s, lanthanum glasses were beginning to appear in Japanese photographic optics — the glasses used in this lens were likely manufactured by HIKARI Glass (Nikon's subsidiary) or OHARA.

### L4 — Component III, rear element (cemented doublet D1)

- **Shape:** Negative meniscus, convex to object (R₆ = +122.5, R₇ = +33.3)
- **Glass:** nd = 1.5927, νd = 35.4 — Light Flint (LLF family), code 593/354
- **Focal length (standalone):** −78.5 mm
- **Role:** L4 is the chromatic correction partner to L3. Its lower Abbe number (higher dispersion) balances the chromatic aberration introduced by L3's positive power. The cemented pair III has a combined focal length of −823.7 mm — a very weak negative meniscus that acts primarily as a chromatic corrector rather than a significant power element.

  The strongly curved rear surface r₇ = +33.3 (with r₇/f = 0.333, satisfying the patent's 0.25f–0.40f condition) is the most steeply curved surface in the front group. The patent identifies the combination of conditions on r₅, r₇, n₃, n₄, and ν₃ as jointly responsible for minimizing coma and astigmatism; r₇'s curvature is a critical degree of freedom within that system.

### L5 — Component IV, front element (cemented doublet D2)

- **Shape:** Biconcave negative (R₈ = −42.6, R₉ = +135.7)
- **Glass:** nd = 1.6483, νd = 33.8 — Flint (F family), code 648/338
- **Focal length (standalone):** −49.4 mm
- **Role:** L5 is the strongest negative element in the system. Positioned immediately behind the aperture stop, it forms the front half of the rear achromatic doublet (Component IV). Its high dispersion (low νd) and strong negative power are essential for chromatic correction of the rear group.

  The patent requires n₆ > n₅ (1.717 > 1.648) and n₆ > 1.70, ensuring that the lanthanum positive element L6 dominates the refractive behavior of this cemented pair. The combined Component IV has an extremely weak positive focal length of +2,309 mm — it is nearly afocal and serves primarily for aberration correction rather than power contribution.

### L6 — Component IV, rear element (cemented doublet D2)

- **Shape:** Biconvex positive (R₉ = +135.7, R₁₀ = −58.1)
- **Glass:** nd = 1.7170, νd = 47.9 — **Lanthanum Crown (LaK)**, code 717/479
- **Focal length (standalone):** +59.4 mm
- **Role:** L6 is the second lanthanum element and the strongest single positive element in the rear group. Its biconvex form provides strong convergence immediately behind the stop. The lanthanum glass (shared with L7) provides high refractive index with moderate dispersion, allowing the biconvex curvatures to be less extreme than they would with conventional crown glass.

  The rear surface r₁₀ = −58.1 (|r₁₀|/f = 0.580, satisfying the patent's 0.50f–0.65f condition) is critical for the aberration balance of the rear group. L6 is extraordinarily thick (d₉ = 20.5 mm at f = 100, or about 10.2 mm at 50 mm production scale) — one of the most massive individual elements in any normal-focal-length photographic lens of this era.

### L7 — Component V: Single Plano-Convex

- **Shape:** Plano-convex (R₁₁ = +116.3, R₁₂ = flat)
- **Glass:** nd = 1.7170, νd = 47.9 — **Lanthanum Crown (LaK)**, same glass as L6, code 717/479
- **Focal length:** +162.2 mm (1.62× EFL)
- **Role:** L7 is the third lanthanum element and the principal power element of the rear group — at f = 162.2, it is the shortest focal length of any single component. Its plano-convex form with the flat surface facing the image is geometrically simple but optically significant: the single curved surface contributes positive power while the flat rear surface contributes zero power and no primary (Seidel) aberrations, making L7 a clean, efficient power contributor.

  Using the same lanthanum glass as L6 was a practical choice — it reduces the number of distinct glass types that must be stocked and melted, and ensures consistent chromatic behavior between these two key rear-group elements.

### L8 — Component VI, front element (cemented doublet D3)

- **Shape:** Negative meniscus, convex to object (R₁₃ = +142.3, R₁₄ = +96.9)
- **Glass:** nd = 1.6259, νd = 35.6 — Light Flint (LF family), code 626/356
- **Focal length (standalone):** −497.5 mm (very weak negative)
- **Role:** L8 is a weak negative element providing final chromatic correction in the rear group. Its meniscus form means it contributes minimally to Petzval field curvature — a meniscus element's contributions to Petzval sum nearly cancel between its two surfaces. This makes it an effective chromatic tuning element without disturbing the already well-corrected field curvature.

### L9 — Component VI, rear element (cemented doublet D3)

- **Shape:** Positive meniscus, convex to object (R₁₄ = +96.9, R₁₅ = +518.0)
- **Glass:** nd = 1.6385, νd = 55.5 — Dense Crown (SK/LaK border), code 639/555
- **Focal length (standalone):** +185.3 mm
- **Role:** L9 is the final element and the rearmost positive power contributor. Its high Abbe number (low dispersion) paired with L8's high-dispersion flint forms the third and final achromatic doublet. Component VI collectively has a focal length of +300.2 mm, contributing moderate positive power while correcting residual longitudinal chromatic aberration.

  L9's glass (nd = 1.6385, νd = 55.5) falls near the boundary between dense crown and lanthanum crown territory. It is *not* identified as one of the three lanthanum elements in Nikon's account, suggesting it uses a conventional barium-based dense crown. Its relatively high Abbe number distinguishes it from the LaK glasses of L3, L6, and L7 (which all have νd = 47.9).

---

## 6. Glass Types and the Lanthanum Innovation

### 6.1 The Three Lanthanum Elements

Nikon's own documentation identifies the key innovation as "the use of a newly developed type of optical glass made with the rare-earth element lanthanum (La) in three convex (positive) lenses." These three elements are:

| Element | nd | νd | Code | Position |
|---------|-----|-----|------|----------|
| L3 | 1.7700 | 47.9 | 770/479 | Positive element, front cemented doublet |
| L6 | 1.7170 | 47.9 | 717/479 | Positive element, rear cemented doublet |
| L7 | 1.7170 | 47.9 | 717/479 | Positive element, single plano-convex |

All three share the same Abbe number (νd = 47.9), and L6/L7 use identical glass. The lanthanum content provides refractive indices of 1.717–1.770, which is substantially higher than what conventional crown glasses could achieve at the same dispersion level. For comparison, a non-lanthanum crown with νd ≈ 48 would typically have nd around 1.52–1.56 — the lanthanum glasses provide roughly 0.16–0.25 higher refractive index.

This higher index means less surface curvature is needed to achieve a given optical power, which directly reduces the spherical aberration, coma, and astigmatism contributions from each surface. Nikon credits this innovation with "significant improvements in spherical aberration, curvature of field, sharpness, and image flatness."

### 6.2 The Flint Elements

The three negative elements (L4, L5, L8) use conventional flint glasses with νd in the 33–36 range. These are paired with the high-index positive elements in cemented doublets to form achromatic correctors:

| Element | nd | νd | Code | Family |
|---------|-----|-----|------|--------|
| L4 | 1.5927 | 35.4 | 593/354 | Light Flint (LLF) |
| L5 | 1.6483 | 33.8 | 648/338 | Flint (F) |
| L8 | 1.6259 | 35.6 | 626/356 | Light Flint (LF) |

### 6.3 Glass Manufacturer

Given that Nikon's glass subsidiary HIKARI Glass Co., Ltd. was the primary supplier for Nikon optics, the glasses were most likely HIKARI types. The exact 1956-era HIKARI catalog designations are not publicly documented, but the nd/νd values would correspond to types in the J-SK, J-LaK, J-LaF, J-F, and J-LF families of the modern HIKARI catalog (which has evolved significantly since the 1950s). Some glasses may have been sourced from OHARA or imported from Schott.

### 6.4 Glass Census

Seven distinct glass types are used across nine elements, with two duplications (L1 = L2 and L6 = L7):

| Glass type | nd | νd | Elements | Family |
|-----------|-----|-----|----------|--------|
| 607/595 | 1.6073 | 59.5 | L1, L2 | Dense Crown (SK) |
| 770/479 | 1.7700 | 47.9 | L3 | Lanthanum Crown/Flint (LaK/LaF) |
| 717/479 | 1.7170 | 47.9 | L6, L7 | Lanthanum Crown (LaK) |
| 593/354 | 1.5927 | 35.4 | L4 | Light Flint (LLF) |
| 648/338 | 1.6483 | 33.8 | L5 | Flint (F) |
| 626/356 | 1.6259 | 35.6 | L8 | Light Flint (LF) |
| 639/555 | 1.6385 | 55.5 | L9 | Dense Crown (SK) |

The use of identical glass for L6 and L7 is notable: both are lanthanum crown elements in the rear group, and sharing a glass type was a practical decision that reduced manufacturing complexity.

---

## 7. Focusing Mechanism

The patent does not specify variable air gaps or internal focusing groups. This is consistent with the lens's intended use on the Nikon S rangefinder system, which employed **unit focusing** — the entire optical assembly translates forward as a single unit to focus at closer distances. The only spacing that changes is the back focal distance (distance from the last optical surface to the film plane).

The minimum focus distance for the Nikkor-N 5cm f/1.1 was **0.9 m (3 feet)** on the S-mount cameras, with a 12-blade aperture diaphragm stopping down to f/16 (some sources indicate f/22 on certain variants). The lens uses 62 mm filters and weighs approximately 355 g (12.25 oz) in the internal-mount version. The required focus extension (the additional forward translation of the lens group from infinity to MFD) can be estimated from the thin-lens conjugate relationship:

For an object at 0.9 m and EFL ≈ 50 mm (production scale), the focus extension is approximately f²/(object_distance − f) ≈ 2.9 mm. This modest extension is well within the travel range of the focusing helicoid.

---

## 8. Aberration Characteristics

Nikon's evaluation of the lens (by Haruo Sato, who personally tested and compared it against competing designs including the Zunow 5cm f/1.1) identifies the following aberration characteristics:

**Strengths:**

- The spherical aberration curve is "almost straight" — highly unusual for a lens this fast. This means the longitudinal spherical aberration varies nearly linearly with aperture zone, without the rapid higher-order undulations that plague most f/1.1 designs. This is a direct consequence of the distributed power and lanthanum glass.
- Very small astigmatism.
- Low distortion (a benefit of the symmetric double-Gauss topology).
- Small lateral chromatic aberration.
- Moderate field curvature correction (Petzval radius ≈ 3× EFL, computed), adequate for the design's intended use and comparable to other fast double-Gauss designs of the period.

**Weaknesses:**

- Considerable sagittal coma at the periphery, particularly wide open. This produces the characteristic "vortex" or "swirly" blur pattern visible in the backgrounds of images shot at f/1.1.
- "Rugby-ball" vignetting from the mechanical cat's-eye effect at wide apertures, compounding the coma to create arc-shaped blur in the peripheral out-of-focus regions.
- Peripheral contrast and resolving power degrade due to coma flare from f/1.1 to f/1.4.
- Moderate curvature of field in distant backgrounds, causing resolving power to dip in the intermediate zone but recover somewhat at the extreme periphery.

**Practical performance by aperture:**

- **f/1.1–f/1.4:** Sharp center, but coma flare creates a soft veil in the intermediate and peripheral regions. Contrast drops slightly at the exact center.
- **f/2–f/2.8:** Marked improvement in contrast and resolution from center to intermediate regions. At f/2.8, the entire image except parts of the periphery is sharp. Excellent blur quality.
- **f/4–f/5.6:** The entire image is sharp with excellent blur rendering. Optimal for portraiture at f/2.8–f/4.
- **f/8–f/16:** Uniformly sharp across the field; moderately high contrast.

---

## 9. Patent Conditional Expressions — Verification

The patent specifies several conditional relationships that the design must satisfy. All are verified against the computed prescription:

| Condition | Required | Actual | Status |
|-----------|----------|--------|--------|
| n₃ > 1.69 | n₃ > 1.69 | n₃ = 1.770 | ✓ |
| 40 < ν₃ < 55 | Abbe number of L3 | ν₃ = 47.9 | ✓ |
| n₃ > n₄ | Index of positive > negative in D1 | 1.770 > 1.593 | ✓ |
| 0.45f < r₅ < 0.60f | Outer convex of Comp. III | r₅/f = 0.534 | ✓ |
| 0.25f < r₇ < 0.40f | Outer concave of Comp. III | r₇/f = 0.332 | ✓ |
| n₆ > 1.70 | Refractive index of L6 | n₆ = 1.717 | ✓ |
| 37 < ν₆ < 55 | Abbe number of L6 | ν₆ = 47.9 | ✓ |
| n₆ > n₅ | Index of positive > negative in D2 | 1.717 > 1.648 | ✓ |
| 0.35f < |r₈| < 0.50f | Outer concave of Comp. IV | |r₈|/f = 0.425 | ✓ |
| 0.50f < |r₁₀| < 0.65f | Outer convex of Comp. IV | |r₁₀|/f = 0.580 | ✓ |
| 0.20f < d₇ < 0.35f | Central air gap (stop region) | d₇/f = 0.252 | ✓ |

The conditions on n₃ > n₄ and n₆ > n₅ encode a fundamental design principle: in each cemented doublet, the positive (converging) element must have a higher refractive index than its negative (diverging) partner. This ensures that the positive element does its work with less surface curvature, reducing spherical aberration contributions, while the higher-dispersion negative element provides chromatic correction.

---

## 10. Structural Summary at Production Scale (50 mm)

Applying the linear scale factor of 0.499 (from f = 100 patent to f ≈ 50 production):

| Parameter | Patent (f = 100) | Production (f ≈ 50) |
|-----------|-----------------|---------------------|
| EFL | 100.17 mm | ~50.0 mm (nominally; see note) |
| BFL | 45.58 mm | ~22.7 mm |
| Lens track | 116.7 mm | ~58.3 mm |
| EP diameter | 91.1 mm | ~45.5 mm |
| Front element semi-diameter | ~49 mm | ~24.5 mm (49 mm diameter) |
| Filter size | — | 62 mm |

**Production focal length note:** The patent normalizes the prescription to f = 100.0. The production lens is marketed as "5cm" (50 mm). The actual production focal length was likely close to 51.6 mm — the traditional Nikon normal-lens actual focal length inherited from the Leica ecosystem, as documented in Nikon's *Thousand and One Nights* No. 49. However, no confirmed production EFL measurement has been published for this specific lens, so the scaled values above use the 50 mm nominal. At 51.6 mm the scale factor would be 0.515 rather than 0.499, increasing all linear dimensions by approximately 3%.

The BFL of approximately 22.7 mm at production scale is well inside the Nikon S-mount flange distance of 34.85 mm. This means the rear elements of the lens protrude significantly into the camera body — approximately 12.1 mm behind the lens mount flange. This is typical of fast rangefinder lenses, which do not require the long back focal distance needed by SLR mirror boxes. It is one reason the f/1.1 speed was achievable for rangefinder cameras but would not be matched for SLR normal lenses until decades later.

---

## 11. Design Legacy

The Nikkor-N 5cm f/1.1 occupies a pivotal position in Nikon's optical heritage. Nikon explicitly identifies it as the conceptual ancestor of the AI Noct-Nikkor 58mm f/1.2 (1977), which added a single hand-ground aspherical surface to correct the sagittal coma that was the 5cm f/1.1's primary weakness. The Noct-Nikkor, in turn, inspired the Nikkor Z 58mm f/0.95 S Noct (2019), which uses multiple aspherical surfaces and modern computer optimization to surpass f/1.0 while maintaining image quality that the 1956 design could not have achieved.

The modified double-Gauss with lanthanum glass positive elements became the template for virtually all subsequent fast normal lenses. Murakami's insight — that distributing power across more elements with high-index glass was preferable to the Sonnar approach of correcting aberration with more aberration — proved to be the correct long-term design strategy. The lens stands as a testament to what was achievable through human ingenuity, an abacus, and a table of logarithms.
