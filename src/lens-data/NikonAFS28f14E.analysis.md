# Optical Analysis: Nikon AF-S NIKKOR 28mm f/1.4E ED

**Patent:** JP2017-227799A, Example 1 (EX1)  
**Applicants:** Konica Minolta, Inc. / Nikon Corporation  
**Inventors:** Fukuda Yasunari 福田泰成 (Konica Minolta), Furuta Akiko 古田明子 (Nikon), Take Toshinori 武俊典 (Nikon), Sensui Takayuki 泉水隆之 (Nikon)  
*Note: Given-name romanizations are inferred from standard kanji readings.*  
**Filed:** 2016-06-23 | **Published:** 2017-12-28  

---

## 1. Production Correspondence

Example 1 of JP2017-227799A is identified as the production design for the **AF-S NIKKOR 28mm f/1.4E ED**, launched in May 2017. The identification rests on convergent criteria between the patent prescription and manufacturer specifications:

| Parameter | Patent EX1 | Production Spec |
|-----------|-----------|-----------------|
| Focal length | 28.41 mm | 28 mm |
| Maximum aperture | f/1.45 | f/1.4 |
| Full field angle 2ω | 75.42° | 75° (FX) |
| Elements / groups | 14 / 11 | 14 / 11 |
| ED elements | 2 | 2 |
| Aspherical elements | 3 (4 surfaces) | 3 |
| Close focus distance | ~250 mm (optical) | 280 mm (from focal plane) |
| Maximum reproduction ratio | — | 0.17× |

The patent's second focus position yields an object-to-image distance of approximately 250 mm (105.61 mm object-to-front-surface + 144.40 mm total track), which is *closer* than the production MFD of 280 mm. This is normal: the production autofocus mechanism limits the focus travel before reaching the optical design's full extension range. The 280 mm MFD is a mechanical constraint, not an optical one.

The patent is a joint filing between Konica Minolta and Nikon — a collaboration that produced several of Nikon's high-performance modern primes. The optical design was created with Konica Minolta's design expertise and manufactured under Nikon's production framework.

The production lens also features Nikon's **Nano Crystal Coat** and **Super Integrated Coat** (SIC) on select elements to suppress flare and ghosting — particularly important for a fast wide-angle lens that frequently encounters strong backlighting. Additionally, the front and rear elements carry a **fluorine coating** for environmental protection. These coatings are manufacturing features not specified in the patent prescription.

---

## 2. Optical Architecture

The lens follows a **positive-positive two-group** architecture (正正の２群構成, as the patent describes it), designed for SLR wide-angle use where a long back focal distance must clear the mirror box. Unlike a classic retrofocus design where the front group is net negative, here both groups are positive — the retrofocal back focal distance (BFD > f) is achieved through a strong negative *subgroup* within Gr1, not through the group-level power arrangement. The overall power distribution is:

- **Group 1 (Gr1):** Front group, 6 elements, **positive** overall power (f₁ = +151.32 mm). Fixed during focusing. Power arrangement: **−, −, +, −, +, +**.
- **Group 2 (Gr2):** Rear group, 8 elements plus the aperture stop, **positive** overall power (f₂ = +52.75 mm). Moves as a unit toward the object for close-focus. Power arrangement: **+, +, +, −, [stop], −, +, +, +**.

The total optical track is 144.38 mm at infinity focus (TL/f = 5.08), with a back focal distance of 38.47 mm. Since the F-mount flange-to-sensor distance is 46.5 mm, the rear element sits approximately 8 mm inside the barrel behind the lens mount flange — a common arrangement for wide-angle SLR lenses where the last element must be recessed to clear the mirror mechanism.

### 2.1 Group 1 — Internal Structure of the Positive Front Group

Although Gr1 is net positive (f₁ = +151.32 mm), its internal power sequence (−, −, +, −, +, +) begins with a strong negative subgroup that diverges the incoming wide-angle beam — providing the retrofocal behavior that extends the back focal distance beyond the system focal length. The rear elements of Gr1 then overpower this divergence to produce a weak net positive contribution, which the patent notes (paragraph [0039]) helps shorten the total track. Within Gr1 the element arrangement is nuanced:

**Subgroup A (L11 + L12):** Two negative meniscus elements, both convex toward the object. This double-negative entry gradually bends wide-angle rays rather than sharply refracting them at a single powerful surface, which is essential for controlling distortion, field curvature, and coma across the 75° field. L12 is a compound aspherical element with a UV-curing resin layer on its image side — the asphere on surface 5 provides early correction of distortion and field curvature.

**Subgroup B (L13):** A single strong biconvex positive element in a high-dispersion glass (S-TIH53, nd = 1.84666, νd = 23.8). Despite its very low Abbe number, this element is not an ED glass — it serves a different purpose. Positioned after the two negative menisci, L13 partially cancels the negative distortion they introduced while also beginning to converge the diverging beam. The use of a high-index, high-dispersion glass here allows the necessary refractive power with relatively mild curvatures, reducing spherical aberration contribution. The patent's condition (6) requires Nd13 > 1.8, which L13 satisfies at 1.84666.

**Subgroup C (L14 + L15, cemented doublet LS):** A negative cemented doublet consisting of a biconcave negative element (L14, S-BAL2) and a biconvex positive element (L15, S-LAH58 or equivalent). This is one of the most optically critical sub-assemblies in the design. The patent devotes three conditional expressions (conditions 1–3) entirely to governing the power balance between L14 and L15:

- Condition (1): φ14/φ = −0.47 — L14's negative power is moderate relative to the system
- Condition (2): φ15/φ = +0.25 — L15's positive power partially cancels L14
- Condition (3): φ14/φ15 = −1.84 — the negative element is roughly twice as strong as the positive

The resulting cemented doublet has a net negative focal length of −137.42 mm (verified by thick-lens matrix computation to match the patent value exactly). The patent text explains that this negative composite corrects field curvature (the Petzval sum contribution is negative, flattening the image surface) while the cemented construction eliminates decentration sensitivity that would otherwise produce severe axial coma. Condition (4) requires Nd15 > 1.8, met by L15 at 1.88300 — the high index allows gentler curvatures on the cemented interface, easing both manufacturing and spherical aberration.

**Subgroup D (L16):** A single biconvex positive element (S-LAH55V, f = +54.29 mm, verified to match the patent value exactly) that serves as the final element of Gr1. The patent explains that this positive element reduces the ray height entering Gr2, enabling a more compact focus group. It also drives the first group toward an afocal condition — when Gr1 is nearly afocal, moving Gr2 for focus causes minimal change in aberration balance, ensuring stable image quality from infinity to close focus.

### 2.2 Group 2 — The Focusing Group

Group 2 is a quasi-symmetric positive group built around the aperture stop. The power arrangement (+, +, +, −, [stop], −, +, +, +) is approximately symmetric about the stop, which is a deliberate design strategy explained in paragraph [0043] of the patent: symmetry about the stop inherently cancels odd-order aberrations, particularly coma, distortion, and lateral chromatic aberration.

**Pre-stop subgroup (L21 + L22 + L23/L24):** Two standalone positive elements followed by a positive-negative cemented doublet. L21 is a positive meniscus that gently converges the beam entering Gr2. L22 is a biconvex positive that continues the convergence. L23 and L24 form a cemented doublet — L23 is a biconvex positive in ED glass (S-FPM2) while L24 is a biconcave negative in a high-dispersion flint (S-TIH14). This pre-stop achromatic pair corrects axial chromatic aberration using the positive ED element's anomalous partial dispersion to attack secondary spectrum. The patent's condition (5) requires the lens immediately adjacent to the stop on the object side (L24 in EX1) to have a partial dispersion ratio θgF very close to the normal line (ΔPgF = 0.0007), ensuring that the glass nearest the stop does not introduce secondary spectrum at the location where the marginal ray height is smallest.

**Post-stop subgroup (L25/L26 + L27 + L28):** A cemented doublet (L25 negative + L26 positive with aspherical image-side surface) mirrors the pre-stop achromatic pair. L27 is a biconvex positive in the same S-FPM2 ED glass as L23 — the second of the two ED elements in the design. L28 is a positive meniscus convex toward the image with both surfaces aspherical, providing the final correction for coma and field curvature at the image periphery.

---

## 3. Glass Identification

The following table presents glass identifications for all 14 elements, matched against the OHARA, SCHOTT, and HOYA catalogs by nd and νd. Patent values are often rounded to the nearest decimal, so small discrepancies (≤ 0.05 in νd) from catalog values are expected and do not indicate a mismatch.

| Element | nd | νd | Matched Glass | Catalog | Glass Type | Notes |
|---------|-------|-------|---------------|---------|------------|-------|
| L11 | 1.68893 | 31.2 | S-TIH18 | OHARA | Dense flint | |
| L12 (glass) | 1.71300 | 53.9 | S-BAL42 | OHARA | Barium crown | Base substrate of compound asphere |
| L12 (resin) | 1.51380 | 53.0 | UV-curing resin | — | Composite | Thin layer (~0.05 mm), forms aspherical profile |
| L13 | 1.84666 | 23.8 | S-TIH53 | OHARA | Dense flint | High-dispersion, high-index |
| L14 | 1.56883 | 56.0 | S-BAL2 | OHARA | Barium crown | Cemented with L15 |
| L15 | 1.88300 | 40.8 | S-LAH58 | OHARA | Lanthanum crown | Cond. (4): nd > 1.8 ✓ |
| L16 | 1.77250 | 49.6 | S-LAH55V | OHARA | Lanthanum crown | Low-CTE variant |
| L21 | 1.72916 | 54.7 | S-LAL14 | OHARA | Lanthanum crown | |
| L22 | 1.69680 | 55.5 | S-LAL61 | OHARA | Lanthanum crown | |
| L23 | 1.59282 | 68.6 | **S-FPM2** | OHARA | **Fluorophosphate (ED)** | ΔPgF ≈ +0.014 |
| L24 | 1.73800 | 32.3 | S-TIH14 | OHARA | Dense flint | Cond. (5): ΔθgF = 0.0007 |
| L25 | 1.80610 | 33.3 | S-TIH6 | OHARA | Dense flint | |
| L26 | 1.83220 | 40.1 | S-LAH60V | OHARA | Lanthanum crown | Image-side aspherical |
| L27 | 1.59282 | 68.6 | **S-FPM2** | OHARA | **Fluorophosphate (ED)** | Same glass as L23 |
| L28 | 1.69350 | 53.2 | S-LAL8 | OHARA | Lanthanum crown | Both surfaces aspherical |

### 3.1 ED Glass Elements

Nikon specifies two ED (Extra-low Dispersion) glass elements in the production lens. These are identified as **L23** and **L27**, both using S-FPM2 (OHARA) or its equivalent — a fluorophosphate glass with nd = 1.59282 and νd = 68.6.

S-FPM2 exhibits positive anomalous partial dispersion (ΔPgF ≈ +0.014), meaning its blue-violet dispersion is lower than predicted by the normal line relationship between partial dispersion and Abbe number. In practical terms, this allows the designer to correct secondary spectrum — the residual chromatic focus shift between blue and red wavelengths that persists even after primary achromatization.

The placement of these two ED elements is symmetric about the aperture stop: L23 sits in the pre-stop cemented doublet and L27 sits in the post-stop positive subgroup. This symmetric arrangement attacks both axial chromatic aberration (where the marginal ray height matters) and lateral chromatic aberration (where the chief ray height matters) simultaneously — a strategy that would not be as effective if both ED elements were on the same side of the stop.

### 3.2 Glass Map Distribution

The design uses a wide spread across the glass map. On the crown side, lanthanum crowns (S-LAH and S-LAL families) provide high refractive index with moderate dispersion for the positive power elements, while the two fluorophosphate elements (S-FPM2) deliver low dispersion with anomalous partial dispersion for chromatic correction. On the flint side, dense titanium flints (S-TIH family) supply the high-dispersion negative elements needed for achromatization. The single high-dispersion positive element L13 (S-TIH53, νd = 23.8) is a deliberate outlier — a rare case of a positive element in a very high-dispersion glass, used here for its extremely high refractive index (nd = 1.84666) which permits strong positive power with mild curvatures.

---

## 4. Aspherical Surfaces

The design uses **4 aspherical surfaces on 3 elements**: one compound (resin-on-glass) asphere in the front group, one glass-molded asphere in a cemented doublet, and one element with both surfaces aspherical in the rear. All surfaces follow the standard aspheric sag equation:

$$Z(h) = \frac{ch^2}{1 + \sqrt{1 - (1+K)c^2h^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12} + A_{14} h^{14}$$

where c = 1/R is the base curvature and K is the conic constant.

### 4.1 Surface 5 — L12 Image Side (Compound Asphere)

| Parameter | Value |
|-----------|-------|
| R | 27.197 mm |
| K | −1.81201 |
| A₄ | +5.07910 × 10⁻⁶ |
| A₆ | −6.20262 × 10⁻⁹ |
| A₈ | +1.15776 × 10⁻¹¹ |
| A₁₀ | −2.04179 × 10⁻¹⁴ |
| A₁₂ | +1.90900 × 10⁻¹⁷ |

**Conic type:** Hyperboloid (K < −1). This is the only surface in the design with a non-trivial conic constant. The hyperboloidal base profile flattens the surface more aggressively than a paraboloid at the rim, and the polynomial coefficients provide fine correction on top of this.

**Sag departure from sphere:** The asphere departs from a best-fit sphere by −528 µm at h = 16 mm (full aperture), curving *less* than the sphere. This strong departure corrects distortion and field curvature generated by the first two negative meniscus elements. The compound asphere construction (thin UV-curing resin layer, 0.05 mm center thickness, applied to the glass substrate surface 4) makes this large departure manufacturable: the glass substrate is ground and polished as a sphere, and the resin layer is UV-cured against an aspherical mold to create the final profile. This is standard practice for high-departure aspheres where precision glass molding would be difficult or where the base glass (S-BAL42) is not amenable to molding.

**Optical role:** Corrects distortion and field curvature at wide field angles. Positioned in the front group where off-axis ray heights are largest, this asphere has maximum leverage over field-dependent aberrations.

### 4.2 Surface 23 — L26 Image Side (In Cemented Doublet)

| Parameter | Value |
|-----------|-------|
| R | −131.725 mm |
| K | 0 |
| A₄ | +3.38686 × 10⁻⁶ |
| A₆ | −1.03975 × 10⁻⁹ |
| A₈ | +5.14761 × 10⁻¹¹ |
| A₁₀ | +1.18111 × 10⁻¹⁴ |
| A₁₂ | −1.11410 × 10⁻¹⁶ |

**Conic type:** Spherical base (K = 0) with polynomial departure only.

**Sag departure from sphere:** Modest — +38 µm at h = 10 mm, curving *less concave* than the base sphere. This is the smallest aspherical departure in the design, reflecting the surface's position near the stop where ray heights are relatively small.

**Optical role:** Fine-tunes spherical aberration correction in the post-stop achromatic doublet. Being on the image side of L26 (which is the positive element of the L25/L26 cemented pair), it operates on the converging beam after the stop and primarily addresses residual higher-order spherical aberration that the spherical surfaces alone cannot correct. The patent description (paragraph [0044]) notes that placing aspheres near the stop specifically targets spherical aberration correction.

### 4.3 Surfaces 26 and 27 — L28 Both Sides (Rear Meniscus)

**Surface 26 (object side):**

| Parameter | Value |
|-----------|-------|
| R | −280.388 mm |
| K | 0 |
| A₄ | −1.45264 × 10⁻⁵ |
| A₆ | −2.74974 × 10⁻⁸ |
| A₈ | +4.08509 × 10⁻¹¹ |
| A₁₀ | −1.22050 × 10⁻¹³ |
| A₁₂ | +2.18038 × 10⁻¹⁵ |
| A₁₄ | −3.26000 × 10⁻¹⁸ |

**Surface 27 (image side):**

| Parameter | Value |
|-----------|-------|
| R | −55.502 mm |
| K | +1.61294 |
| A₄ | −4.86948 × 10⁻⁶ |
| A₆ | −2.36249 × 10⁻⁸ |
| A₈ | +7.19463 × 10⁻¹¹ |
| A₁₀ | −3.12054 × 10⁻¹³ |
| A₁₂ | +2.11838 × 10⁻¹⁵ |
| A₁₄ | −2.42000 × 10⁻¹⁸ |

**Conic types:** Surface 26 has a spherical base (K = 0) with polynomial-only departure. Surface 27 is an **oblate ellipsoid** (K = +1.61), which flattens the surface at the rim compared to a sphere — an unusual choice that provides strong correction of field-edge aberrations.

**Sag departures from sphere:** Surface 26 reaches −653 µm at h = 14 mm — the largest departure in the entire design. Surface 27 reaches −419 µm at h = 16 mm. Both surfaces curve more concave than their base spheres, meaning the element is effectively thinner at the rim than its spherical equivalent.

**Optical role:** L28 is the last element before the image plane, positioned where off-axis ray bundles are most spread and where the chief ray height is approaching its maximum. Its dual aspherical surfaces primarily correct **coma and field curvature** at the image periphery — aberrations that are most visible in the corners of the frame on high-resolution sensors. The patent (paragraph [0044]) explicitly notes that aspheres placed on the image-side elements effectively correct coma and field curvature. This element is critical to the lens's ability to maintain sharp corners from f/1.4 onward, which reviewers have consistently praised.

The large aspherical departures on both surfaces (over half a millimeter each) make this element a strong candidate for **precision glass molding** (PGM), given the S-LAL8 glass type which has a relatively low transformation temperature. The alternative would be CNC grinding and polishing of each surface individually, but the dual-asphere configuration and production volume favor molding.

---

## 5. Focusing Mechanism

The lens uses a **rear-focus** design: Group 2 translates as a rigid unit along the optical axis toward the object for close focusing, while Group 1 remains fixed relative to the image sensor.

### 5.1 Variable Air Gaps

| Gap | Location | d (∞) | d (close) | Δd |
|-----|----------|-------|-----------|-----|
| D12 | Gr1 → Gr2 | 7.70 mm | 1.42 mm | −6.28 mm |
| D27 | BFD (last surface → image) | 38.47 mm | 44.77 mm | +6.30 mm |

Gr2 moves **6.28 mm toward the object** during focusing from infinity to the closest distance, while the back focal distance increases by 6.30 mm. The total track length changes by only 0.02 mm — effectively constant, which is consistent with a lens that does not change physical length during focusing (confirmed by Nikon's production specifications and reviewer observations).

### 5.2 Why Rear Focus?

The rear-focus architecture offers several advantages for this design:

1. **Speed:** Moving Gr2 (8 elements, ~47 mm track) is faster than moving the entire 14-element assembly because the moving mass is smaller and the travel distance is short (6.28 mm).
2. **Constant length:** The barrel does not extend during focusing, improving weather sealing and handling balance.
3. **Aberration stability:** Because Gr1 is designed to be nearly afocal (f₁ = +151.32 mm is weak relative to the system focal length), the beam entering Gr2 changes only modestly with focus, minimizing aberration degradation at close distances. The patent explicitly credits this property (paragraph [0035]).
4. **No front element rotation:** The front element is fixed, which simplifies use of polarizing and graduated filters.

### 5.3 Close Focus Performance

The patent's paragraph [0052] notes that for the third embodiment (EX3, not the production design), a **floating focus** scheme was considered — splitting Gr2 into a pre-stop and post-stop sub-group that move with different velocities. This would further correct field curvature at close distances. The production design (EX1) uses the simpler single-group rear focus, suggesting that the aberration stability achieved by Gr1's near-afocal design was sufficient to meet Nikon's image quality targets across the focus range.

---

## 6. Element-by-Element Optical Roles

Focal lengths labeled "patent" are thick-lens values stated in the patent or verified by independent matrix computation. Values labeled "TL" are thin-lens approximations and carry typical thin-lens tolerances (1–3%).

### Group 1 — Front Group (Fixed)

| Element | Type | f (mm) | Glass | Optical Role |
|---------|------|--------|-------|--------------|
| **L11** | Neg. meniscus, convex to object | −74.6 (TL) | S-TIH18 | First element of the negative entry subgroup. Gently bends wide-angle rays inward, beginning the beam divergence that creates the long back focal distance. The meniscus shape (convex toward the object) minimizes the angle of incidence on the front surface, reducing surface reflection losses and Seidel aberration contributions. |
| **L12** | Neg. meniscus, convex to object (compound asphere) | −57.8 (patent) | S-BAL42 + resin | Second negative element continuing the beam divergence. The aspherical image-side surface (surface 5, hyperboloidal K = −1.81) provides the primary correction of distortion and field curvature across the 75° field. The compound construction places the asphere on a resin layer, allowing large departure (>500 µm) without compromising the glass substrate quality. The thick-lens compound focal length (−57.8 mm) was verified by 3-surface matrix computation. |
| **L13** | Biconvex positive | +86.2 (TL) | S-TIH53 | Strong positive element that partially compensates the negative distortion of L11–L12 and begins converging the beam. The unusually high-dispersion glass (νd = 23.8) is chosen for its very high refractive index (1.847), which reduces surface curvatures and thus higher-order spherical aberration — the patent requires nd > 1.8 (condition 6). |
| **L14** | Biconcave negative (cemented) | −60.8 (patent) | S-BAL2 | Negative component of the L14/L15 field-flattening cemented doublet. Contributes negative Petzval sum to flatten the field. Its power is governed by condition (1): φ14/φ = −0.47. |
| **L15** | Biconvex positive (cemented) | +112.0 (patent) | S-LAH58 | Positive component of the cemented doublet. High-index (1.883) glass keeps cemented-interface curvature gentle, easing manufacturing and reducing aberration sensitivity. Governed by condition (2): φ15/φ = +0.25. The doublet composite has net negative focal length (−137.4 mm, verified). |
| **L16** | Biconvex positive | +54.3 (patent) | S-LAH55V | Terminal positive element of Gr1. Converges the beam to reduce ray heights entering Gr2, enabling a more compact focusing group. Also drives Gr1 toward an afocal condition (f₁ = +151 mm), stabilizing aberration across the focus range. |

### Group 2 — Rear Group (Focusing, moves as unit)

| Element | Type | f (mm) | Glass | Optical Role |
|---------|------|--------|-------|--------------|
| **L21** | Pos. meniscus, convex to object | +93.9 (TL) | S-LAL14 | First element of Gr2. Gently converges the beam entering the rear group, sharing the positive power burden with L22 to minimize spherical aberration (patent paragraph [0042]). |
| **L22** | Biconvex positive | +93.8 (TL) | S-LAL61 | Second positive element continuing the gradual convergence. Together with L21, this pair delivers the initial positive power of Gr2 with minimal higher-order aberration. |
| **L23** | Biconvex positive (cemented, **ED**) | +56.2 (TL) | **S-FPM2** | Positive ED element — first of two. Part of the pre-stop achromatic cemented pair with L24. The fluorophosphate glass's anomalous partial dispersion (ΔPgF ≈ +0.014) corrects secondary spectrum in axial chromatic aberration. |
| **L24** | Biconcave negative (cemented) | −25.2 (TL) | S-TIH14 | Negative flint in the pre-stop achromatic pair. Its partial dispersion is nearly on the normal line (ΔPgF = 0.0007, condition 5), ensuring minimal secondary spectrum contribution at the stop location where marginal ray height is smallest. |
| | *[Aperture Stop — ST]* | | | |
| **L25** | Biconcave negative (cemented) | −19.8 (TL) | S-TIH6 | Negative flint in the post-stop achromatic pair, mirroring L24's role on the object side. This symmetry around the stop inherently cancels odd-order aberrations. |
| **L26** | Biconvex positive (cemented, image-side asph) | +41.8 (TL) | S-LAH60V | Positive element with aspherical image-side surface (surface 23). Fine-tunes spherical aberration in the converging post-stop beam. Part of the L25/L26 cemented pair that mirrors L23/L24. |
| **L27** | Biconvex positive (**ED**) | +33.6 (TL) | **S-FPM2** | Second ED element — same glass as L23. Positioned symmetrically opposite L23 relative to the stop, it corrects lateral chromatic aberration where the chief ray height is significant. This is the strongest positive element in Gr2, providing substantial convergence toward the image. |
| **L28** | Pos. meniscus, convex to image (2× asph) | +99.8 (TL) | S-LAL8 | Final element before the image. Both surfaces aspherical — surface 26 has the largest departure in the design (−653 µm at the rim) and surface 27 uses an oblate ellipsoidal base (K = +1.61). Corrects coma and field curvature at the image periphery, critical for corner sharpness on high-resolution sensors. |

---

## 7. Conditional Expression Verification

The patent defines six conditional expressions. The following values are verified computationally from the prescription data and match the patent's Table 1 for EX1.

| Condition | Expression | Range | EX1 Value | Status |
|-----------|-----------|-------|-----------|--------|
| (1) | φ14/φ | −0.7 < x < −0.3 | **−0.47** | ✓ |
| (2) | φ15/φ | 0.1 < x < 0.4 | **0.25** | ✓ |
| (3) | φ14/φ15 | −3.0 < x < −1.5 | **−1.84** | ✓ |
| (4) | Nd15 | > 1.8 | **1.883** | ✓ |
| (5) | θgF − (−0.00162·νd + 0.6415) | < 0.012 | **0.0007** | ✓ |
| (6) | Nd13 | > 1.8 | **1.847** | ✓ |

The paraxial ray trace yields f = 28.410 mm, matching the patent's stated value exactly. The thick-lens focal lengths for L14 (−60.83 mm), L15 (+112.04 mm), L16 (+54.29 mm), and the cemented doublet LS (−137.42 mm) were independently verified by matrix computation and match the patent's values to the listed precision.

---

## 8. Semi-Diameter Estimation

The patent does not list semi-diameters (half clear apertures) for the optical surfaces. For the accompanying data file (`NikonAFS28f14E.data.ts`), semi-diameters were initialized from a paraxial ray trace of the marginal ray (on-axis, at f/1.45) and chief ray (full-field, y' = 21.6 mm), then rebalanced surface-by-surface against the patent / Nikon construction-diagram silhouette.

**Method:** At each surface, the baseline semi-diameter is set to the maximum of the upper and lower rim ray heights (|y_chief ± y_marginal|) with approximately 8% mechanical clearance added. The marginal ray was scaled to the entrance pupil semi-diameter of 9.80 mm (f/2·FNO = 28.41/2.90), and the chief ray was scaled to produce the patent's maximum image height of 21.6 mm. Those baseline values were then tapered where needed to better match the published silhouette while preserving lens-data validation margins.

**Front group SDs** remain anchored by the production lens's 77 mm filter thread at the first surface, while the **rear group SDs** are trimmed relative to the raw ray-clearance estimate to reproduce the more compact published rear-cell silhouette. The **aperture stop SD** is set to 9.80 mm (the paraxial entrance pupil half-diameter at f/1.45).

These estimates are inherently approximate. The real production lens likely trims the rear-group apertures slightly to introduce controlled natural vignetting at f/1.4 — a standard practice that reduces off-axis aberrations while sacrificing only modest corner illumination.

---

## 9. Design Philosophy and Context

The AF-S NIKKOR 28mm f/1.4E ED represents the final generation of high-performance F-mount primes before Nikon's transition to the Z-mount mirrorless system. Several design choices reflect this maturity:

**Conservative use of exotic materials.** Unlike some contemporaries (e.g., the Zeiss Otus 28mm f/1.4, which uses a 16-element / 13-group design with more exotic glass types), this design achieves its chromatic correction with just two ED elements of the same fluorophosphate type. The remaining twelve elements use conventional lanthanum crowns and titanium flints from the OHARA catalog. This pragmatic approach keeps manufacturing costs manageable while still delivering performance that reviewers have noted approaches (though does not quite match) the substantially heavier and more expensive Otus.

**Aspherical strategy.** Three aspherical elements (four surfaces) is moderate for a 14-element f/1.4 design. The compound asphere on L12 handles the large-departure front-group correction that would be difficult with glass molding, while the two glass aspheres (L26 and L28) provide precision correction near and after the stop. The dual-asphere L28 is the most aggressively shaped element in the design and is positioned where it has maximum leverage over corner image quality — the aberration that matters most on 36 × 24 mm and 45-megapixel sensors.

**Rear-focus simplicity.** The single-unit rear focus (Gr2 as a whole) is mechanically simpler and optically sufficient because of the carefully designed near-afocal front group. The patent does describe a floating-focus variant (EX3) that could further improve close-focus performance, but the production design opted for the simpler mechanism — a pragmatic choice that favors AF speed and reliability.

---

## 10. Data File Notes

The accompanying `NikonAFS28f14E.data.ts` file encodes this prescription for the interactive lens diagram renderer.

**Compound asphere modeling:** The patent counts L12 (glass substrate + UV-curing resin layer with center thickness ≤1 mm) as a single element, per paragraph [0023]. For the data file, L12 is modeled as two element entries (id 2 = glass substrate, id 3 = resin layer) using the cemented doublet surface pattern, since the renderer needs the glass-resin junction surface to compute correct element geometry. This gives 15 element entries in the file for what the patent counts as 14 elements.

**Focal lengths in element entries:** Where the patent provides thick-lens values (L14, L15, L16, cemented doublet LS), these are used directly. For the compound L12 elements, each sub-component carries its own thin-lens focal length (glass: −67.3 mm, resin: −367.5 mm), with the compound thick-lens value (−57.8 mm) noted in the role description. All other elements use thin-lens approximations.

**Layout tuning:** `scFill = 0.52` and `yScFill = 0.42` were chosen to balance the lens's substantial total track (144.4 mm) against the large front-element diameter (~71 mm) in the SVG viewport.

---

## 11. Sources

- **JP2017-227799A** — Full patent text and prescription data (JPO, published 2017-12-28)
- **Nikon product page** — AF-S NIKKOR 28mm f/1.4E ED specifications (imaging.nikon.com)
- **OHARA optical glass catalog** — Glass identification by nd/νd matching
- **Paraxial ray trace** — EFL verification and semi-diameter estimation computed independently from prescription data (Python)
- **Thick-lens matrix computation** — Element and group focal lengths verified via ABCD transfer matrices
- **Aspherical sag calculations** — Departure from sphere computed at selected ray heights

---

*Analysis prepared from patent JP2017-227799A Example 1. Glass identifications are inferential, based on catalog nd/νd matching — the patent does not specify glass trade names. Semi-diameters are estimated from paraxial ray trace, not patent-listed. Focal length values labeled "TL" are thin-lens approximations; patent-stated thick-lens values are used where available and noted as "patent."*
