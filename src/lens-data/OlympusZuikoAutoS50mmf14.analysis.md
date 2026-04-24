# Olympus G.Zuiko Auto-S 50mm f/1.4 — Patent Analysis

## US Patent 4,094,588 · Example 1 · Nakagawa (1978)

**Patent:** US 4,094,588, "Large-Aperture Photographic Lens System"
**Inventor:** Jihei Nakagawa
**Assignee:** Olympus Optical Co., Ltd.
**Filed:** June 10, 1976 (Japanese priority: June 14, 1975)
**Granted:** June 13, 1978
**Production lens:** Olympus OM-System G.Zuiko Auto-S 1:1.4 f=50mm (later versions: Zuiko MC Auto-S 50mm f/1.4)

---

## 1. Design Overview

The patent describes a modified Double Gauss photographic lens of six components comprising seven glass elements. The design is arranged as a classic symmetric Double Gauss with the aperture stop in the central air space, specifically configured as:

- **Front group** (object side of stop): Three air-spaced meniscus elements (L1, L2, L3)
- **Rear group** (image side of stop): A cemented doublet (L4+L5), followed by two air-spaced positive elements (L6, L7)

The notation "G.Zuiko" in the production lens name encodes the element count: the letter prefix indicates seven elements ("G" being the seventh letter of the alphabet), following Olympus's naming convention for the OM system.

The design achieves f/1.4 maximum aperture over a 46° full field (2ω ≈ 46°, half-field ≈ 23°) for the 35mm format, in a compact package with a total optical track of approximately 44.2 mm (excluding back focal distance).

### Production specifications

| Parameter | Value |
|:--|:--|
| Focal length | 50 mm |
| Maximum aperture | f/1.4 |
| Minimum aperture | f/16 |
| Optical construction | 7 elements in 6 groups |
| Minimum focus distance | 0.45 m |
| Filter thread | 49 mm |
| Aperture blades | 8 |
| Mount | Olympus OM bayonet (46.00 mm FFD) |
| Dimensions | 60 × 37 mm |
| Weight | 229 g |

---

## 2. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All thirteen optical surfaces are spherical. The patent makes no mention of aspherical coefficients, conic constants, or higher-order polynomial terms anywhere in the specification.

This is characteristic of the era and design philosophy. In 1975, aspherical surfaces were extremely expensive to manufacture — precision glass molding (PGM) technology for consumer optics was still in its infancy in Japan, and hand-polished aspherics were reserved for ultra-premium designs. Nakagawa's approach instead relies on careful glass selection and the judicious balancing of surface curvatures to control aberrations, particularly the coma flare and chromatic spherical aberration that the patent identifies as the primary design challenges.

The all-spherical construction has a practical consequence: each surface can be ground and polished on conventional optical machinery, keeping manufacturing costs manageable for a consumer lens. The seven-element configuration provides sufficient degrees of freedom (thirteen surface curvatures, six center thicknesses, six air spacings, and seven glass types) to achieve the f/1.4 aperture with acceptable aberration correction across the field.

---

## 3. Prescription Data

The patent provides all dimensions normalized to a focal length of f = 1.0. The production lens has f ≈ 50 mm, giving a scale factor of ×50. Below, the prescription is presented in both normalized and scaled form.

### 3.1. Surface prescription (Example 1)

| Surface | R (norm.) | d (norm.) | nd | Medium | Element |
|:--|--:|--:|--:|:--|:--|
| r₁ | +0.6147 | 0.1158 | 1.6204 | → Glass L1 | L1 front |
| r₂ | +2.9052 | 0.0019 | 1.0 | → Air | L1 rear |
| r₃ | +0.4738 | 0.0777 | 1.6935 | → Glass L2 | L2 front |
| r₄ | +0.8002 | 0.0468 | 1.0 | → Air | L2 rear |
| r₅ | +1.0617 | 0.0203 | 1.5814 | → Glass L3 | L3 front |
| r₆ | +0.2764 | 0.3357 | 1.0 | → Air (STO) | L3 rear |
| r₇ | −0.2984 | 0.0193 | 1.7552 | → Glass L4 | L4 front |
| r₈ | +15.8469 | 0.1160 | 1.6935 | → Glass L5 | L4–L5 junction |
| r₉ | −0.5113 | 0.0019 | 1.0 | → Air | L5 rear |
| r₁₀ | −1.0617 | 0.0890 | 1.8061 | → Glass L6 | L6 front |
| r₁₁ | −0.4676 | 0.0023 | 1.0 | → Air | L6 rear |
| r₁₂ | +1.8784 | 0.0570 | 1.6935 | → Glass L7 | L7 front |
| r₁₃ | −2.2973 | (BFD) | 1.0 | → Air (image) | L7 rear |

**Back focal distance:** fᵦ = 0.7430 (normalized), ≈ 37.15 mm (scaled)

### 3.2. Verification summary

An independent paraxial ray trace via the ABCD transfer-matrix method confirms:

- **EFL:** 0.9999 (normalized) — matches patent f = 1.0 to four significant figures
- **BFD:** 0.7432 (normalized) — matches patent fᵦ = 0.7430 within rounding tolerance
- **Half-field angle:** arctan(21.63/50) ≈ 23.4°, consistent with the patent's 23° aberration plots
- **System matrix:** A = 0.74329, B = 0.96033, C = −1.00012, D = 0.05322

### 3.3. Dimensional summary (scaled to f ≈ 50 mm)

| Dimension | Value |
|:--|:--|
| Total optical track (r₁ to r₁₃) | 44.2 mm |
| Back focal distance (BFD) | 37.16 mm |
| Overall length (r₁ to image plane) | 81.3 mm |
| Central air gap d₆ (contains STO) | 16.79 mm |
| OM flange distance | 46.0 mm |
| Rear element clearance behind flange | ≈ 8.8 mm |

The BFD of 37.16 mm is well within the 46 mm OM flange focal distance, leaving approximately 8.8 mm for the rear lens barrel to recess into the mirror box — a comfortable margin that avoids interference with the reflex mirror.

### 3.4. Stop position

The patent figure (Fig. 1) shows the iris diaphragm positioned in the central air gap d₆ between L3 and L4. The patent does not specify the exact axial position of the stop. From the patent figure, the stop appears to be approximately 25% of the way through d₆ from r₆, yielding the following split for the data file:

| Gap segment | Normalized | Scaled (mm) |
|:--|--:|--:|
| r₆ to STO (d₆ pre) | 0.0839 | 4.20 |
| STO to r₇ (d₆ post) | 0.2518 | 12.59 |
| d₆ total | 0.3357 | 16.79 |

This placement puts the stop close to the rear surface of L3 and relatively far from the front surface of L4, consistent with a design where the front group contributes a weakly converging beam that continues to narrow through most of the air gap before reaching the strongly curved r₇.

---

## 4. Element-by-Element Analysis

### 4.1. Summary table

| Element | Shape | Power | f (norm.) | f (≈mm) | nd | νd | Glass family |
|:--|:--|:--|--:|--:|--:|--:|:--|
| L1 | Pos. Meniscus | Positive | +1.233 | +61.6 | 1.6204 | 60.3 | SK (dense Ba crown) |
| L2 | Pos. Meniscus | Positive | +1.526 | +76.3 | 1.6935 | 50.8 | LaK (La crown) |
| L3 | Neg. Meniscus | Negative | −0.649 | −32.4 | 1.5814 | 40.8 | BaF (Ba flint) |
| L4 | Biconcave | Negative | −0.388 | −19.4 | 1.7552 | 27.5 | SF (dense flint) |
| L5 | Biconvex | Positive | +0.716 | +35.8 | 1.6935 | 53.3 | LaK (La crown) |
| L6 | Pos. Meniscus | Positive | +0.972 | +48.6 | 1.8061 | 40.9 | LaSF (dense La flint) |
| L7 | Biconvex | Positive | +1.499 | +74.9 | 1.6935 | 50.8 | LaK (La crown) |

The cemented doublet L4+L5 has a combined focal length of approximately −1.105 (normalized), or about −55.2 mm — the doublet as a unit is a moderately strong negative component.

### 4.2. L1 — First positive meniscus (front crown)

**Shape:** Positive meniscus, convex toward the object. Both surfaces are positive-R (centers of curvature to the right), with R₁ = +0.6147 (strongly curved front) and R₂ = +2.9052 (weakly curved rear, nearly flat). The curvature ratio R₂/R₁ ≈ 4.7 indicates that most of the refractive power comes from the front surface.

**Glass:** nd = 1.6204, νd = 60.3. Six-digit code 620-603. This matches the dense barium silicate crown family: Schott SK16 (nd = 1.62041, νd = 60.32) or its HOYA equivalent BACD5. Confidence: exact match. The high Abbe number indicates low dispersion, important for controlling chromatic aberration.

**Optical role:** L1 provides the primary light-gathering power at the front of the system and begins converging the axial beam. As the first element, it experiences the largest beam diameter and therefore has the most influence on spherical aberration. Its meniscus shape (versus biconvex) distributes the refraction between both surfaces, reducing the spherical aberration contribution from each surface individually. The low-dispersion glass minimizes chromatic contributions from this high-power surface.

### 4.3. L2 — Second positive meniscus

**Shape:** Positive meniscus, convex toward the object. R₃ = +0.4738 (steep front) and R₄ = +0.8002 (moderately curved rear). The curvature ratio R₃/R₄ ≈ 0.59.

**Glass:** nd = 1.6935, νd = 50.8. Six-digit code 694-508. This falls in the lanthanum crown (LaK) family. No exact match was found in current standard catalogs — the glass may be an OHARA or HOYA formulation that has been discontinued or reformulated since 1975. The same glass is reused for L7.

**Optical role:** L2 shares the positive power of the front group with L1, but its steeper curvatures and higher refractive index give it a shorter radius ratio. This element contributes to spherical aberration correction through its shape factor — the bending of this meniscus helps balance the higher-order spherical aberration terms against L1. The air gap d₂ = 0.0019 between L1 and L2 is extremely thin (≈ 0.1 mm scaled), almost resembling a cemented contact but deliberately left as an air space for the additional refractive index discontinuity, which provides an extra design variable.

### 4.4. L3 — Third negative meniscus

**Shape:** Negative meniscus, convex toward the object. Both surfaces have positive R (R₅ = +1.0617 and R₆ = +0.2764), but since R₆ < R₅, the rear surface is much steeper, causing the element to diverge light.

**Glass:** nd = 1.5814, νd = 40.8. Six-digit code 581-408. This is a barium flint type glass (BaF family). Nearest catalog match: OHARA S-TIM25 (nd = 1.5814, νd = 40.75) — close but not exact (Δνd = 0.05). Confidence: near match. The lower refractive index (relative to L1 and L2) and moderate Abbe number are typical of the negative meniscus in front of the stop in Gauss-type designs.

**Optical role:** L3 is the critical negative element of the front group. Its steep concave rear surface (R₆ = +0.2764 toward image, meaning a concave face toward the stop) generates strong negative surface power (φ₆ = −2.10 normalized). This surface is one of the most important in the entire design: it largely determines the Petzval sum, coma balance, and astigmatism of the front group. The patent's condition (1) specifically constrains the relationship between r₆ and the opposing surface r₇, recognizing that these two surfaces straddling the stop are where most of the higher-order coma ("flare due to coma") originates.

The relatively low refractive index of L3's glass (1.5814) compared to L1 and L2 is deliberate. As condition (6) requires, maintaining large Abbe numbers for the first three elements establishes the chromatic correction baseline. By using a lower-index glass for the negative element, the designer accepts somewhat stronger curvatures but gains better chromatic balance.

### 4.5. L4 — Negative element of cemented doublet

**Shape:** Biconcave. R₇ = −0.2984 (strongly concave front, center of curvature to the left) and R₈ = +15.8469 (nearly flat rear → junction surface with L5). The junction radius is so long that this element is very nearly plano-concave, with essentially all its power concentrated in the front surface.

**Glass:** nd = 1.7552, νd = 27.5. Six-digit code 755-275. This is a dense flint glass: Schott SF4 (nd = 1.75520, νd = 27.53) or OHARA S-TIH4. Confidence: exact match. The high dispersion (low νd) provides the chromatic correction counterbalance within the cemented doublet.

**Optical role:** L4 is the thin (d₇ = 0.0193, ≈ 1.0 mm scaled), strongly negative flint component of the rear cemented doublet. Its front surface r₇ is one of the steepest in the system and is paired with r₆ across the central air gap — together, these two surfaces form the "waist" of the Double Gauss where the beam diameter is smallest and where aberration balancing is most critical. The patent specifically discusses this surface in condition (1): the radius |r₇| must be slightly larger than r₆ (by up to 10%) to prevent coma flare while maintaining spherical aberration control.

The very high dispersion (νd = 27.5) is the lowest Abbe number in the system and makes L4 the primary chromatic corrector in the rear group. Paired with L5's higher Abbe number in the cemented doublet, this flint/crown combination corrects longitudinal chromatic aberration.

### 4.6. L5 — Positive element of cemented doublet

**Shape:** Biconvex, though the front surface (the junction with L4) is nearly flat (R₈ = +15.8469). Essentially all of L5's positive power comes from its concave rear surface (R₉ = −0.5113).

**Glass:** nd = 1.6935, νd = 53.3. Six-digit code 694-533. This is a lanthanum crown, with the same refractive index as L2/L7 but a distinctly higher Abbe number (53.3 vs. 50.8). No exact match in current standard catalogs. This deliberate differentiation — using two glasses with identical nd but different νd — is a subtle but important design choice. The higher Abbe number of L5 provides a larger dispersion difference (Δν = 53.3 − 27.5 = 25.8) within the cemented doublet, strengthening chromatic correction.

**Optical role:** L5 is the thicker, positive component of the doublet. Its rear surface r₉ is constrained by condition (2) to lie within 0.48f < |r₉| < 0.55f. This range balances two competing requirements: strong enough curvature to correct upper-ray coma at intermediate field angles, but not so strong that paraxial spherical aberration becomes under-corrected. The patent notes that this surface (along with r₁₁) deliberately under-corrects spherical aberration for paraxial rays — a strategy that pays off at close focus distances, where the under-correction compensates for the over-correction that unit focusing would otherwise introduce.

The nearly flat cemented junction (R₈ = +15.8469, ≈ 792 mm scaled) means the doublet's chromatic correction depends almost entirely on the glass dispersion difference rather than the junction curvature. This is a "new achromat" approach — rather than using a strongly curved junction to separate the dispersive contributions, Nakagawa relies on the Δν between SF4-type and LaK-type glasses at a nearly flat interface, gaining manufacturing simplicity.

### 4.7. L6 — Fifth component (positive meniscus)

**Shape:** Positive meniscus, concave toward the object. Both surfaces have negative R (R₁₀ = −1.0617 and R₁₁ = −0.4676), with the rear surface significantly steeper, producing net positive power.

**Glass:** nd = 1.8061, νd = 40.9. Six-digit code 806-409. This matches the dense lanthanum flint family: Schott LaSF3 (nd = 1.80610, νd = 40.93) or its HOYA equivalent NBFD3. Confidence: exact match. This is the highest refractive index glass in the design.

**Note on glass composition:** Early production copies of the Zuiko 50mm f/1.4 (particularly the silver-nose generation) are confirmed to be measurably radioactive, indicating the use of thorium-doped optical glass in at least one element. Thorium oxide (ThO₂) was used by glass manufacturers in this era to achieve high refractive index with moderate dispersion. User reports and Geiger counter measurements indicate the radioactive element is toward the rear of the lens, which is consistent with L6 being the thorium-doped element — its high refractive index (nd = 1.8061) matches the profile of thoriated lanthanum glasses. However, this attribution is based on refractive index inference rather than confirmed materials data, and the specific element cannot be definitively identified from the patent alone. The characteristic yellow-brown discoloration that develops in thorium glass over decades is reversible through extended UV exposure.

**Optical role:** L6's high refractive index (1.8061) is the highest in the system and serves two purposes. First, it keeps the surface curvatures moderate despite strong positive power — a glass with lower nd would require steeper curves to achieve the same power, worsening higher-order aberrations. Second, the high index contributes favorably to the Petzval sum: positive power from a high-index glass produces less field curvature per unit of power than positive power from a low-index glass.

The rear surface r₁₁ is constrained by condition (3): 0.4f < |r₁₁| < 0.48f. Like r₉, this surface is part of the coma-correction strategy. The patent explains that r₉ and r₁₁ are deliberately set to longer radii than minimum spherical aberration would suggest, because the upper rays of intermediate field angles pass through the outer zones of these surfaces, and the resulting coma correction outweighs the modest spherical under-correction at the paraxial level.

### 4.8. L7 — Sixth component (positive biconvex)

**Shape:** Biconvex. R₁₂ = +1.8784 (weakly curved front) and R₁₃ = −2.2973 (weakly curved rear). Both surfaces have gentle curvatures, so L7 is only weakly positive.

**Glass:** nd = 1.6935, νd = 50.8. Six-digit code 694-508. Same glass as L2 — the LaK-type lanthanum crown. Reusing the same glass for L2 and L7 simplifies manufacturing logistics and suggests that this glass was a standard stock item for Olympus at the time.

**Optical role:** L7 serves as a weak positive field-flattening and aberration-trimming element at the rear of the system. Its gentle curvatures and near-symmetric biconvex shape minimize its own aberration contributions while providing a small positive power boost. This element also helps control distortion and lateral chromatic aberration by adjusting the chief-ray exit angle. The very thin air gap d₁₁ = 0.0023 (≈ 0.12 mm scaled) between L6 and L7 is almost a contact — the two elements are very nearly touching, forming what could be considered a closely spaced doublet that acts nearly as a single thick component.

---

## 5. Glass Selection Strategy

The design uses four distinct glass types across seven elements:

| Glass | Used in | nd | νd | Six-digit code | Catalog match |
|:--|:--|--:|--:|:--|:--|
| SK16-type | L1 | 1.6204 | 60.3 | 620-603 | Schott SK16 / HOYA BACD5 — exact |
| LaK-type A | L2, L7 | 1.6935 | 50.8 | 694-508 | No exact current catalog match (likely discontinued OHARA or HOYA formulation) |
| BaF-type | L3 | 1.5814 | 40.8 | 581-408 | OHARA S-TIM25 family — close (Δνd = 0.05) |
| SF4-type | L4 | 1.7552 | 27.5 | 755-275 | Schott SF4 / OHARA S-TIH4 — exact |
| LaK-type B | L5 | 1.6935 | 53.3 | 694-533 | No exact current catalog match |
| LaSF3-type | L6 | 1.8061 | 40.9 | 806-409 | Schott LaSF3 / HOYA NBFD3 — exact |

A notable feature is the use of two glasses with identical refractive index (nd = 1.6935) but different Abbe numbers (50.8 for L2/L7 vs. 53.3 for L5). This is unusual and intentional: by keeping the nd identical, these elements produce identical monochromatic refraction at any given surface curvature, but differ in their chromatic contributions. This allows the designer to fine-tune chromatic correction independently of monochromatic aberration balance — effectively decoupling the two optimization problems at the glass-selection level.

The front group (L1, L2, L3) uses progressively lower refractive indices (1.6204 → 1.6935 → 1.5814) and lower Abbe numbers (60.3 → 50.8 → 40.8), which the patent's condition (6) constrains: (ν₁ + ν₂ − 2ν₃) / (2ν₃) = 0.362, satisfying the requirement 0.35 < 0.362 < 0.5. This ensures a chromatic balance that corrects longitudinal chromatic aberration of spherical aberration — the tendency for short-wavelength rays to have a different spherical aberration curve than long-wavelength rays.

---

## 6. Group Structure and Power Distribution

### 6.1. Front group (L1 + L2 + L3)

The front group, considered from r₁ to r₆ in air, has a combined focal length of approximately +3.13 (normalized), or about +156 mm scaled — a weakly positive group. This is consistent with a Double Gauss front group: two strong positive menisci followed by a strong negative meniscus, yielding a net positive but moderate power. The positive elements converge the beam, while the negative meniscus provides aberration correction and bends the chief ray toward the stop.

### 6.2. Rear group (L4+L5 + L6 + L7)

The rear group from r₇ to r₁₃ has a combined focal length of approximately +0.79 (normalized), or about +39 mm scaled — significantly more powerful than the front group. Despite this asymmetry, the design is not retrofocus: the BFD/EFL ratio is 0.74 (BFD = 37.2 mm vs. EFL ≈ 50 mm), well below the BFD/EFL > 1 threshold that defines a retrofocus arrangement. SLR mirror clearance is achieved not through power distribution but simply because the rear element protrudes approximately 8.8 mm behind the OM bayonet flange plane into the mirror box — a standard practice for normal and moderate-telephoto SLR lenses.

### 6.3. Cemented doublet (L4+L5)

The cemented doublet has a combined focal length of approximately −1.10 (normalized), or about −55 mm scaled. As a unit, it is a negative component — the dense flint L4 overpowers the crown L5 at the doublet level. This negative doublet, positioned immediately behind the stop, is critical for Petzval sum correction: its negative power from a high-index glass (L4, nd = 1.7552) drives the Petzval sum toward a flatter field.

---

## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed using the exact formula Σ[φᵢ/(nᵢ · n'ᵢ)] where φᵢ = (n'ᵢ − nᵢ)/Rᵢ, yields:

**Petzval sum = +0.148** (normalized to f = 1.0)

This corresponds to a Petzval radius of approximately 6.76 (normalized), or about **338 mm** when scaled to f = 50 mm.

For a 50mm f/1.4 lens covering the 35mm format, a Petzval radius of 338 mm is a reasonable value. It indicates a gently inward-curving image surface. Typical Double Gauss designs of this era achieve Petzval radii in the 200–400 mm range; the Nakagawa design sits comfortably within this range. The residual field curvature is partially compensated by astigmatism correction (visible in the patent's astigmatism plots, where the sagittal and meridional curves diverge gently to the field edge at 23°).

---

## 8. Focusing Mechanism

### 8.1. Unit focusing

The patent does not describe a specific internal focusing mechanism, and the production Olympus Zuiko 50mm f/1.4 uses conventional **unit focusing** — the entire optical assembly translates forward as a rigid unit when focusing from infinity to close distances. The only dimension that changes is the back focal distance (the air gap between r₁₃ and the film plane).

The patent provides aberration plots at both infinite distance (∞) and at a magnification of 1/50, corresponding to an object distance of approximately 2.55 m from the lens. The production lens focuses down to 0.45 m, corresponding to a magnification of approximately 1:7.2 (m ≈ −0.139).

### 8.2. Close-focus back focal distance

For unit focus at 0.45 m MFD (measured from the film plane), the paraxial imaging condition was solved using the system matrix. The BFD increases from 37.16 mm at infinity to 44.12 mm at close focus, corresponding to a lens extension of approximately 6.96 mm. In the data file, this is modeled as a single variable gap:

| Focus position | BFD (mm) | Object distance from r₁ (mm) |
|:--|--:|--:|
| Infinity (∞) | 37.16 | ∞ |
| Close focus (0.45 m) | 44.12 | 361.7 |

### 8.3. Close-focus aberration behavior

A key design goal stated in the patent is minimizing the degradation of image quality at close focus distances. Nakagawa notes that "Gauss type standard photographic lenses show some degradation in performance, though not so remarkably, for photographing objects at short distance. This degradation can be traced mainly to aggravation of spherical aberration, especially that of short-wavelength rays."

The design addresses this through conditions (2) and (3), which intentionally under-correct spherical aberration at infinity. As the lens translates forward for close focus, the changing conjugate ratio tends to over-correct spherical aberration. Because the design starts from an under-corrected state, the net spherical aberration at close focus remains acceptably small — the two effects partially cancel. The patent's aberration plots (Figures 2A vs. 2D) confirm that the spherical aberration curves at infinity and at 1/50 are substantially similar in shape and magnitude.

---

## 9. Semi-Diameter Estimation

### 9.1. Methodology

Semi-diameters were estimated by tracing a marginal ray at f/1.4 (EP SD = 17.86 mm) and a chief ray at 23° half-field through the scaled prescription. The chief ray contribution was scaled by offAxisFieldFrac = 0.60, and approximately 8% mechanical clearance was applied to the combined beam footprint. The resulting values were then validated against three physical constraints:

1. **Edge thickness ≥ 0.7 mm** for each element
2. **Cross-gap sag overlap ≤ 90%** of the air gap thickness for each air space
3. **Front-group cap at 23 mm SD** imposed by the 49 mm filter thread

### 9.2. Binding constraints

The edge thickness constraint proved to be the binding limit for the front group elements. L1's meniscus geometry restricts its SD to approximately 18.9 mm before the edge falls below 0.5 mm, yet the f/1.4 marginal ray requires a minimum of 17.86 mm — leaving only about 1 mm of headroom for off-axis beam contribution. L2 is similarly constrained, with its steeper curvatures imposing a maximum SD of approximately 17 mm for a 0.5 mm edge.

The most severe constraint is the slope limit on surface r₆ (L3 rear). With R₆ = 13.82 mm scaled, the maximum SD for a slope angle of 64.2° (sd/|R| = 0.90 for a sphere) is approximately 12.4 mm. However, the f/1.4 marginal ray reaches 13.1 mm at this surface. Setting SD = 12.4 mm means the rendered aperture is marginally smaller than the true f/1.4 beam — the steep rear surface of L3 becomes the effective vignetting aperture, trimming the outermost rays before they reach the stop. This is a genuine physical characteristic of high-aperture Double Gauss designs where the negative meniscus surfaces operate at extreme slopes.

These tight constraints confirm that the production lens vignettes significantly at full field and full aperture — a well-known characteristic of f/1.4 Double Gauss designs, which typically lose 1–2 stops of illumination at the extreme corners when wide open.

The cross-gap constraints were not binding for this design. The thin air gaps d₂ (0.095 mm), d₉ (0.095 mm), and d₁₁ (0.115 mm) have favorable surface geometries where the boundary surfaces curve away from each other, providing increasing clearance at larger aperture heights.

### 9.3. Final semi-diameter values

| Surface | Label | SD (mm) | Limiting constraint |
|:--|:--|--:|:--|
| r₁ | 1 | 18.5 | L1 edge thickness |
| r₂ | 2 | 18.5 | L1 edge thickness |
| r₃ | 3 | 16.5 | L2 edge thickness |
| r₄ | 4 | 15.0 | Marginal ray + off-axis margin |
| r₅ | 5 | 13.0 | Marginal ray + margin |
| r₆ | 6 | 12.4 | R₆ slope limit (sd/|R| = 0.90) |
| STO | STO | 10.3 | f/1.4 marginal ray at stop |
| r₇ | 7 | 11.5 | Marginal ray + margin |
| r₈ | 8 | 13.0 | Cemented junction (doublet) |
| r₉ | 9 | 13.0 | L5 edge thickness / marginal ray |
| r₁₀ | 10 | 14.0 | Marginal ray + off-axis |
| r₁₁ | 11 | 14.0 | L6 edge thickness |
| r₁₂ | 12 | 14.0 | Marginal ray + off-axis |
| r₁₃ | 13 | 14.0 | Marginal ray + off-axis |

---

## 10. Patent Conditions

The patent specifies six conditions that define the design space. All are verified against Example 1:

### Condition (1): r₆ < |r₇| < 1.1 × r₆

This constrains the curvature matching between the rear surface of L3 and the front surface of L4 — the two surfaces that straddle the central air gap and aperture stop. They must be nearly equal in curvature (within 10%) to prevent coma flare.

Verification: 0.2764 < 0.2984 < 0.3040 → **Pass** (|r₇|/r₆ = 1.080)

### Condition (2): 0.48f < |r₉| < 0.55f

Constrains the rear surface of the cemented doublet (L5 rear). Balances coma correction against spherical aberration.

Verification: 0.48 < 0.5113 < 0.55 → **Pass**

### Condition (3): 0.4f < |r₁₁| < 0.48f

Constrains the rear surface of L6. Works in concert with condition (2) for coma correction.

Verification: 0.40 < 0.4676 < 0.48 → **Pass**

### Condition (4): 0.45f < Dₐ < 0.5f

Dₐ is the total axial distance from the front of L2 to the front of L4 (= d₃ + d₄ + d₅ + d₆). This controls astigmatism correction and, in combination with condition (5), the total system length.

Verification: Dₐ = 0.4805; 0.45 < 0.4805 < 0.50 → **Pass**

### Condition (5): 0.12f < D_b < 0.15f

D_b is the total thickness of the cemented doublet (= d₇ + d₈). Controls the effectiveness of coma correction in conjunction with conditions (2) and (3).

Verification: D_b = 0.1353; 0.12 < 0.1353 < 0.15 → **Pass**

### Condition (6): 0.35 < (ν₁ + ν₂ − 2ν₃) / (2ν₃) < 0.5

This condition governs the Abbe number balance of the front three elements, requiring sufficiently large Abbe numbers to establish the basis for correcting chromatic aberration of spherical aberration (longitudinal chromatism).

Verification: (60.3 + 50.8 − 81.6) / 81.6 = 29.5 / 81.6 = 0.362; 0.35 < 0.362 < 0.50 → **Pass**

All six conditions are satisfied by Example 1.

---

## 11. Aberration Characteristics

The patent provides aberration plots for Example 1 at both infinite conjugate (Figures 2A–2C) and at 1/50 magnification (Figure 2D). Key observations from these plots:

**Spherical aberration (Figure 2A, ∞):** The curves for d-line and g-line show moderate under-correction (the curves bend to the left, toward negative values). This is the intentional under-correction discussed above — it provides a "reserve" that prevents over-correction at close focus. The separation between d-line and g-line curves is small, indicating well-corrected chromatic aberration of spherical aberration (spherochromatism), which is the patent's primary stated achievement.

**Astigmatism (Figure 2B):** The sagittal (S) and meridional (M) field curves diverge gradually to the field edge at 23°. The amount of astigmatism is moderate for an f/1.4 design and consistent with the Petzval radius computed above.

**Distortion (Figure 2C):** Very low distortion, well under 2% at the field edge. This is typical of symmetric Double Gauss designs, where the near-symmetry about the stop naturally cancels odd-order distortion.

**Spherical aberration at 1/50 (Figure 2D):** The curves are very similar to the infinity case (Figure 2A), confirming the design goal of stable aberration performance across the focus range. The slight increase in g-line aberration at close focus is consistent with the expected conjugate shift effect, but remains well controlled.

---

## 12. Design Context and Significance

### 12.1. Double Gauss heritage

The Nakagawa design is a refined seven-element variant of the Double Gauss configuration that has been the dominant architecture for fast standard lenses since the 1920s. The classic six-element Double Gauss (as exemplified by the Zeiss Biotar or Leitz Summicron) uses two cemented doublets flanking the stop. Nakagawa's modification splits the front doublet into three separate meniscus elements (L1, L2, L3) while retaining the cemented doublet only in the rear group (L4+L5). This seven-element layout, with three separate front menisci, was a well-established variant by the 1970s and was used by several Japanese manufacturers for their fast fifties.

### 12.2. Comparison with contemporaries

The Zuiko 50mm f/1.4 competed with the Canon FD 50mm f/1.4 (SSC and later New FD), the Nikon Nikkor 50mm f/1.4 (Ai and Ai-S), and the Minolta MC/MD 50mm f/1.4. All of these share the basic seven-element Double Gauss layout. Nakagawa's contribution lies in the specific optimization priorities: the patent emphasizes coma flare suppression and chromatic spherical aberration correction as the primary goals, with close-focus stability as a secondary objective. The resulting design achieves these goals while maintaining a particularly compact form factor — at 37 mm in length and 229 g, the Zuiko 50/1.4 was notably smaller and lighter than most of its competitors.

### 12.3. Production variants

The Olympus 50mm f/1.4 was produced in several generations between 1972 and 2002. The earliest version, available from the 1972 launch of the OM-1, used single-layer coatings (sold as "G.Zuiko Auto-S"), while later versions received multicoating ("Zuiko MC Auto-S" and eventually just "Zuiko Auto-S"). Some sources indicate that the optical formula was revised in later production runs (approximately from serial number 1.1 million onward), though the element count and group configuration remained the same throughout.

US Patent 4,094,588 was filed in June 1976 with Japanese priority from June 1975 — approximately three to four years after the lens entered production. This timeline gap is not unusual; Japanese manufacturers frequently patented optical designs after production began, sometimes filing patents for improvements or refinements to existing formulas rather than the original design. Whether this patent documents the original 1972 optical formula filed belatedly, or represents a refinement applied during production, cannot be determined from the patent alone.

---

## Appendix A: Patent Condition Derivations (Numerical)

For completeness, the intermediate quantities used in the condition checks:

| Quantity | Definition | Value |
|:--|:--|--:|
| r₆ | R of L3 rear surface | +0.2764 |
| \|r₇\| | \|R\| of L4 front surface | 0.2984 |
| \|r₉\| | \|R\| of L5 rear surface | 0.5113 |
| \|r₁₁\| | \|R\| of L6 rear surface | 0.4676 |
| Dₐ | d₃ + d₄ + d₅ + d₆ | 0.4805 |
| D_b | d₇ + d₈ | 0.1353 |
| ν₁ | Abbe number of L1 | 60.3 |
| ν₂ | Abbe number of L2 | 50.8 |
| ν₃ | Abbe number of L3 | 40.8 |

## Appendix B: Paraxial Ray Trace Verification

System matrix (ABCD method, 13 surfaces):

| Entry | Value |
|:--|--:|
| A | 0.74329 |
| B | 0.96033 |
| C | −1.00012 |
| D | 0.05322 |

EFL = −1/C = 0.99988 ≈ 1.000
BFD = −A/C = 0.74320 ≈ 0.743

Front group (r₁–r₆) EFL: +3.127 (normalized), ≈ +156 mm
Rear group (r₇–r₁₃) EFL: +0.789 (normalized), ≈ +39 mm
Cemented doublet (L4+L5) EFL: −1.105 (normalized), ≈ −55 mm

## Appendix C: Element Focal Length Verification

Standalone in-air thick-lens focal lengths, independently computed:

| Element | φ (norm.) | f (norm.) | f (≈mm) |
|:--|--:|--:|--:|
| L1 | +0.8111 | +1.233 | +61.6 |
| L2 | +0.6552 | +1.526 | +76.3 |
| L3 | −1.5411 | −0.649 | −32.4 |
| L4 | −2.5798 | −0.388 | −19.4 |
| L5 | +1.3960 | +0.716 | +35.8 |
| L6 | +1.0292 | +0.972 | +48.6 |
| L7 | +0.6673 | +1.499 | +74.9 |
