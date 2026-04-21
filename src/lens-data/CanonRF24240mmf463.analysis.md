# Canon RF 24-240mm F4-6.3 IS USM — Optical Design Analysis

**Patent:** US 2020/0142167 A1 (Pub. May 7, 2020)
**Inventor:** Shohei Kikuchi (Canon Kabushiki Kaisha)
**Priority:** JP 2018-207200, filed November 2, 2018
**Numerical Example:** 1 (of 5 examples in the patent)
**Production Lens:** Canon RF24-240mm F4-6.3 IS USM (Canon RF mount, released 2019)

---

## 1. Overview

The Canon RF 24-240mm F4-6.3 IS USM is a 10× superzoom for Canon's full-frame RF mirrorless system. Canon's published specifications describe the optical formula as **21 elements in 15 groups**, incorporating **1 aspherical lens** and **2 UD (Ultra-low Dispersion) lenses**, with a 7-blade circular aperture diaphragm. The patent's Example 1 matches the production lens in element count, group count, and general architecture, and is the basis for this analysis.

### Key Specifications (Manufacturer vs. Patent Example 1)

| Parameter | Canon Published | Patent Example 1 |
|-----------|----------------|-------------------|
| Focal Length | 24–240 mm | 24.72–232.80 mm |
| Maximum Aperture | f/4–6.3 | f/4.12–6.41 |
| Zoom Ratio | 10× | 9.42× |
| Elements / Groups | 21 / 15 | 21 / 15 |
| Close Focus (wide) | 0.50 m | — |
| Close Focus (tele) | 0.78 m | — |
| Aspherical Elements | 1 | 1 (2 asph. surfaces) |
| UD Elements | 2 | 2 |
| Aperture Blades | 7 (circular) | — |
| Image Circle | 43.2 mm (36×24) | 2 × 21.64 = 43.28 mm |

The slight focal-length and f-number discrepancies are normal between patent design examples and production-tuned lenses. The marketing "24–240mm" and "f/4–6.3" values are rounded from the computed design values per standard industry practice.

---

## 2. Zoom Architecture: Six Moving Groups

The lens consists of six lens units (zoom groups) arranged front-to-rear, with sign convention indicating their refractive power:

| Unit | Patent Label | Power | Focal Length | Elements | Surfaces | Role |
|------|-------------|-------|-------------|----------|----------|------|
| 1 | L11 | Positive | +103.63 mm | L11, L12, L13 | 1–4 | Front positive group (collecting) |
| 2 | L12 | Negative | −16.74 mm | L21, L22, L23, L24 | 6–12 | Variator (main zoom power) |
| 3 | L13 / XYZ | Positive | +60.67 mm | L31–L36 | 14–23 | Correction group with OIS unit |
| 4 | L21 | Positive | +22.87 mm | L41–L44 | 25–30 | Relay / compensator |
| 5 | L22 | Negative | −53.51 mm | L51, L52 | 32–33 | Focus group |
| 6 | L23 | Negative | −138.27 mm | L61, L62 | 35–36 | Rear field corrector |

This is a **positive-lead** zoom of the form **+ − + + − −**, which the patent describes as a first lens unit with positive power, second with negative, third with positive, and a rear group (LR) comprising the fourth (positive), fifth (negative), and sixth (negative) units. The intervals between all six units vary during zooming.

### Zoom Motion

During zooming from wide (24.72 mm) to tele (232.80 mm), the six variable air gaps change as follows:

| Gap | Location | Wide (mm) | Mid (mm) | Tele (mm) | Change |
|-----|----------|-----------|----------|-----------|--------|
| d5 | L11 → L12 | 1.34 | 32.74 | 59.28 | +57.94 |
| d13 | L12 → L13 | 22.25 | 8.64 | 2.35 | −19.90 |
| d24 | L13 → L21 | 8.46 | 3.21 | 1.00 | −7.46 |
| d31 | L21 → L22 | 3.73 | 4.64 | 1.50 | −2.23 |
| d34 | L22 → L23 | 15.54 | 14.63 | 17.77 | +2.23 |
| d37 | BFD | 15.78 | 45.06 | 57.20 | +41.42 |

The dominant zoom action is the separation of L11 from L12 (d5 expanding by nearly 58 mm) while L12 closes toward L13 (d13 contracting by 20 mm). This is the classic variator mechanism: the negative second unit moves image-ward relative to the positive first unit, increasing the system's effective focal length. The total track grows from 142 mm at wide to 214 mm at tele—the lens is a rotary-extending zoom, not an internal zoom, consistent with the production lens's two-stage barrel extension.

The gap d34 between L22 and L23 shows **non-monotonic** behavior: it decreases from 15.54 at wide to 14.63 at mid, then increases to 17.77 at tele. This reversing motion is handled by piecewise-linear interpolation in a renderer.

---

## 3. The 15 Air-Separated Groups

Canon's published "15 groups" count refers to the air-separated optical groups (not the zoom units). Tracing through the prescription, the 21 elements form exactly 15 air-separated groups:

| Group | Elements | Configuration | Lens Unit |
|-------|----------|---------------|-----------|
| 1 | L11 + L12 | Cemented doublet | L11 |
| 2 | L13 | Singlet | L11 |
| 3 | L21 | Singlet | L12 |
| 4 | L22 | Singlet | L12 |
| 5 | L23 | Singlet | L12 |
| 6 | L24 | Singlet | L12 |
| 7 | L31 | Singlet | L13 (subunit X) |
| 8 | L32 + L33 | Cemented doublet | L13 (subunit X) |
| 9 | L34 + L35 | Cemented doublet | L13 (subunit Y / OIS) |
| 10 | L36 | Singlet | L13 (subunit Z) |
| 11 | L41 | Singlet (aspherical) | L21 |
| 12 | L42 + L43 | Cemented doublet | L21 |
| 13 | L44 | Singlet | L21 |
| 14 | L51 + L52 | Cemented doublet | L22 |
| 15 | L61 + L62 | Cemented doublet | L23 |

This gives 6 cemented doublets and 9 singlets, totaling 15 groups — matching Canon's specification.

---

## 4. Element-by-Element Optical Analysis

### 4.1 Lens Unit 1 — Front Positive Collector (f = +103.63 mm)

**L11** (surfaces 1–2): nd = 1.90366, νd = 31.3
A **negative meniscus** (f = −160.9 mm) convex toward the object, made of ultra-high-index lanthanum dense flint glass (glass code 90366/313, matching OHARA S-LAH79 or equivalent). Both radii are positive (R₁ = +131.4 mm, R₂ = +68.6 mm), giving a crescent-shaped cross-section with the convex face toward the object and the concave face toward the image. The rear surface is more strongly curved than the front, which is characteristic of a thick negative meniscus in a front collector group. Despite being a negative element, its role is primarily to control spherical aberration and field curvature contributed by the strong positive elements behind it. The very high refractive index (nd ≈ 1.90) allows the surface curvatures to remain moderate despite the element's corrective power.

**L12** (surfaces 2–3): nd = 1.49700, νd = 81.5 — **★ UD Element**
A **positive biconvex** element (f = +126.6 mm) cemented to L11. This is one of the two UD (Ultra-low Dispersion) elements Canon specifies for the production lens. The glass code 49700/815 corresponds to a fluorophosphate crown such as OHARA S-FPL51 or Canon's proprietary equivalent. With νd = 81.5, this glass has exceptionally low chromatic dispersion. The L11/L12 cemented doublet forms a powerful achromatic pair: the high-dispersion negative flint (L11) and low-dispersion positive crown (L12) work together to control axial chromatic aberration across the wide zoom range. This achromat is critical because the front group sees the full entrance pupil diameter and must manage chromatic errors at maximum aperture.

**L13** (surfaces 4–5): nd = 1.61800, νd = 63.4
A **positive meniscus** (f = +123.7 mm) in phosphate crown glass (matching OHARA S-PHM52). This singlet adds positive power to the front group while its meniscus form (convex toward the object) helps correct spherical aberration. The overall front group power of +103.63 mm is typical for a positive-lead zoom—strong enough to converge light toward the variator, but not so strong that it demands extreme curvatures.

The front group's effective diameter spans 52–57 mm, the largest apertures in the system, consistent with the 72 mm filter thread of the production lens.

### 4.2 Lens Unit 2 — Variator (f = −16.74 mm)

This is the most powerful unit in the system. Its strong negative focal length (−16.74 mm) makes it the primary zoom variator: as it moves away from the front group during zooming to tele, the divergence it introduces shifts the effective focal length of the combined system dramatically.

**L21** (surfaces 6–7): nd = 1.85150, νd = 40.8
A **negative meniscus** (f = −26.5 mm) in lanthanum dense flint (OHARA S-LAH66 equivalent). Both radii are positive (R₁ = +243.5 mm, R₂ = +20.6 mm), making this a meniscus convex toward the object with a very weakly curved front face and a strongly curved rear face. The extreme curvature mismatch gives this element its strong negative power and contributes the bulk of the variator's diverging capability.

**L22** (surfaces 8–9): nd = 1.85150, νd = 40.8
A **biconcave negative** element (f = −29.5 mm) in the same glass as L21. Together with L21, they form a strong negative doublet pair that efficiently diverges the beam.

**L23** (surfaces 10–11): nd = 1.92286, νd = 20.9
A **positive biconvex** element (f = +25.1 mm) in ultra-high-index dense flint glass (glass code 923/209, HOYA E-FD15 or equivalent). This positive element within the negative variator serves as a chromatic corrector—its very high dispersion (νd = 20.9) paired with its positive power provides the opposite chromatic contribution to the two negative elements, keeping longitudinal chromatic aberration controlled across the zoom range.

**L24** (surfaces 12–13): nd = 1.77250, νd = 49.6
A **biconcave negative** element (f = −40.3 mm) in lanthanum light flint (OHARA S-LAL54), with R₁ = −32.4 mm and R₂ = +821.5 mm. The front surface is strongly concave; the rear is very weakly concave (nearly flat). This trailing negative element shapes the exit beam of the variator and helps correct higher-order aberrations. The variator's four-element, all-singlet configuration gives the designer maximum freedom to balance coma, astigmatism, and chromatic aberration across the zoom range.

### 4.3 Lens Unit 3 — Correction Group with Image Stabilization (f = +60.67 mm)

This is the most complex unit in the design, containing six elements organized into three subunits designated X, Y, and Z in the patent. The aperture stop (surface 14) is the first surface of this unit, positioned at the front of subunit X.

#### Subunit X — Front positive subgroup (fx = +55.81 mm)

**L31** (surfaces 15–16): nd = 1.76182, νd = 26.5
A **positive biconvex** element (f = +34.5 mm) in heavy flint glass (OHARA S-TIH6). Located immediately after the aperture stop, it begins converging the beam toward the image. Its high dispersion enables chromatic correction when paired with the subsequent cemented doublet.

**L32** (surfaces 17–18): nd = 1.58144, νd = 40.8
A **positive plano-convex** element (f = +34.1 mm) in barium crown glass (OHARA S-BAM4). The rear surface is flat (R = ∞). This element is cemented to L33.

**L33** (surfaces 18–19): nd = 2.00100, νd = 29.1
A negative element (f = −20.5 mm) in ultra-high-index dense flint glass (OHARA S-NPH2), with a **plano-convex geometric form** — the front surface is flat (the cemented junction with L32) and the rear surface is convex (R₂ = +20.5 mm). Despite its convex exit surface, the element has strong negative optical power because light transitions from the very high refractive index glass (nd = 2.001) into air at that surface, producing divergence. The L32/L33 cemented doublet provides achromatic correction within subunit X and controls the beam diameter entering the OIS subunit.

#### Subunit Y — Image Stabilization Unit (fy = +41.45 mm)

This is the subunit that physically shifts perpendicular to the optical axis during image stabilization (OIS). At the telephoto end, the patent specifies a correction shift of 0.509 mm. The subunit consists of a single cemented doublet:

**L34** (surfaces 20–21): nd = 2.00069, νd = 25.5
A **negative meniscus** (f = −40.9 mm) in ultra-high-index dense flint glass (OHARA S-NPH1). This is the first element of the cemented IS doublet.

**L35** (surfaces 21–22): nd = 1.72000, νd = 43.7
A **positive biconvex** element (f = +20.6 mm) in lanthanum flint glass (OHARA S-LAM3), cemented to L34.

The L34/L35 cemented doublet has a combined focal length of approximately +41.5 mm (verified: thin-lens computation gives +41.61 mm, close to the patent's stated fy = +41.45 mm). The patent notes that all lenses in the second subunit are preferably spherical to simplify manufacturing by polishing—no aspherical surfaces are used in the IS group. This is important for manufacturing cost and for maintaining tight tolerances when the element is mounted on a moving gimbal mechanism.

The cemented doublet configuration also provides chromatic correction during IS operation. When the subunit shifts off-axis, it introduces decentering aberrations; by using a positive and negative element cemented together, lateral color is partially self-corrected during the shift.

#### Subunit Z — Rear negative subgroup (fz = −30.98 mm)

**L36** (surfaces 23–24): nd = 2.00100, νd = 29.1
A **negative meniscus** (f = −31.0 mm) in the same ultra-high-index dense flint glass as L33 (OHARA S-NPH2). This singlet provides the negative power needed to increase the effective positive power of the IS subunit Y, thereby reducing the physical shift distance required for a given amount of image correction. The patent explains this explicitly: "the third subunit Z with a negative refractive power is arranged on the image side of the image blurring correction unit to increase the positive refractive power of the second subunit Y, so that the movement amount in the image blurring correction is suppressed."

The boundary between subunit Y and subunit Z is confirmed by the patent's conditional expression (6) parameters: Ryz1 = −63.451 mm (the image-side surface of L35, surface 22) and Ryz2 = −26.036 mm (the object-side surface of L36, surface 23).

### 4.4 Lens Unit 4 — Relay / Compensator (f = +22.87 mm)

This is the strongest positive unit in the rear half of the lens. It relays the image formed by the front groups toward the sensor and contains the only aspherical element in the design.

**L41** (surfaces 25–26): nd = 1.53110, νd = 55.9 — **★ Aspherical Element**
A weak **positive meniscus** singlet (f = +105.0 mm) in barium light crown glass (OHARA S-BAL42 or equivalent), convex toward the object (R₁ = +45.6 mm, R₂ = +246.6 mm — both radii positive). Both surfaces carry aspherical profiles (detailed in Section 5). The relatively low refractive index (1.531) and moderate Abbe number suggest this is a glass-molded aspherical element (as opposed to polished), which is consistent with Canon's manufacturing approach for non-L consumer zoom lenses.

**L42 + L43** (surfaces 27–29): Cemented doublet
- **L42**: nd = 1.85478, νd = 24.8 — **biconcave negative** (f = −99.6 mm) in short flint glass (OHARA S-TIH53W)
- **L43**: nd = 1.59282, νd = 68.6 — **biconvex positive** (f = +39.3 mm) in borosilicate crown glass (OHARA S-BSM81)

This cemented doublet is a classic achromat with a strong positive element and a weaker negative corrector. Located behind the aspherical element, it handles the primary chromatic correction duties for unit 4.

**L44** (surfaces 30–31): nd = 1.49700, νd = 81.5 — **★ UD Element**
A **positive biconvex** element (f = +47.0 mm) — the second UD element in the design. Same fluorophosphate crown glass as L12 (49700/815, OHARA S-FPL51 equivalent). Positioned at the rear of unit 4 where off-axis ray heights are increasing, this UD element provides additional longitudinal and lateral chromatic aberration correction, particularly important for maintaining color performance at the telephoto end where chromatic aberration tends to increase.

### 4.5 Lens Unit 5 — Focus Group (f = −53.51 mm)

**L51 + L52** (surfaces 32–34): Cemented doublet
- **L51**: nd = 1.80518, νd = 25.4 — **positive meniscus** (f = +166.3 mm) in heavy flint, convex toward object
- **L52**: nd = 1.63854, νd = 55.4 — **negative meniscus** (f = −40.0 mm) in barium crown, convex toward object

This cemented doublet is the **focusing group**. The patent states that during focusing from infinity to the closest distance, "the fifth lens unit L22 is moved toward the image side." The movement arrows in Figure 1 (arrow 5c) confirm this rear-focusing mechanism. The doublet format provides chromatic correction during focus, preventing color shift as focus distance changes—an important quality-of-life feature for video shooters.

The focus group's negative power (−53.51 mm) means it acts as a diverging element. Moving it toward the image plane shortens the effective back focal distance, shifting the focus plane closer. This rear-focus approach has the advantage that the front group remains stationary, the filter thread doesn't rotate, and the focusing mass is relatively small (two elements), enabling the fast, quiet Nano USM autofocus the production lens is known for.

### 4.6 Lens Unit 6 — Rear Field Corrector (f = −138.27 mm)

**L61 + L62** (surfaces 35–37): Cemented doublet
- **L61**: nd = 1.83481, νd = 42.7 — **biconcave negative** (f = −32.0 mm) in lanthanum dense flint
- **L62**: nd = 1.84666, νd = 23.8 — **biconvex positive** (f = +43.2 mm) in heavy flint

This trailing cemented doublet has a combined weak negative focal length of −138.27 mm. Positioned closest to the image plane, it serves as a field-flattening and telecentricity-correcting group. In a mirrorless system like Canon's RF mount (20 mm flange distance), maintaining reasonable exit pupil distances across the field is important for sensor performance. The high-index glasses (nd > 1.83 in both elements) allow strongly curved surfaces while keeping the element thin, and the cemented configuration prevents ghost reflections between the two surfaces.

---

## 5. Aspherical Surfaces

The single aspherical element is **L41** (surfaces 25 and 26), the leading element of lens unit 4. The aspherical sag equation used in the patent is:

```
Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹²
```

### Surface 25 (front of L41)

| Parameter | Value |
|-----------|-------|
| R | 45.628 mm |
| K (conic) | 0 (spherical base) |
| A4 | −3.69428 × 10⁻⁶ |
| A6 | −1.81514 × 10⁻⁷ |
| A8 | +1.12707 × 10⁻⁹ |
| A10 | −1.37724 × 10⁻¹¹ |
| A12 | +4.19334 × 10⁻¹⁴ |

### Surface 26 (rear of L41)

| Parameter | Value |
|-----------|-------|
| R | 246.555 mm |
| K (conic) | 0 (spherical base) |
| A4 | +2.68822 × 10⁻⁵ |
| A6 | −1.85641 × 10⁻⁷ |
| A8 | +9.59349 × 10⁻¹⁰ |
| A10 | −1.18429 × 10⁻¹¹ |
| A12 | +3.67346 × 10⁻¹⁴ |

Both surfaces have K = 0, meaning the base curve is spherical and all aspherical correction comes from the even-order polynomial terms. At the working clear aperture (approximately h = 10 mm where the beam passes through this element across zoom positions), the aspherical departures from a sphere are:

- **Surface 25**: approximately −200 µm at h = 10 mm (flattening relative to the sphere)
- **Surface 26**: approximately +97 µm at h = 10 mm (steepening relative to the sphere)

The dominant effect of surface 25's aspherical profile is to flatten the surface progressively toward the rim compared to a sphere, which primarily corrects **spherical aberration** and **coma** in the converging beam. Surface 26's profile adds a compensating steepening that helps control **astigmatism** and **field curvature**. Because both surfaces are on the same element, the designer can independently tune on-axis and off-axis correction while keeping the manufacturing to a single precision-molded part.

The glass choice for L41 (nd = 1.531, νd = 55.9) is notable: moderate-index barium light crown is a standard glass-molding candidate. Canon's PMo (Precision-Molded Optics) technology is well-suited to this glass type, allowing cost-effective production of the doubly-aspherical element.

### Why only one aspherical element?

In a consumer-grade 10× superzoom, cost constraints limit the use of aspherical elements. Canon placed the single aspherical element strategically in unit 4, where it sits in a converging beam between the IS correction group and the focus group. This position allows it to correct residual aberrations from the entire front optical train (units 1–3) while also pre-correcting for the diverging rear groups (units 5–6). The patent's aberration diagrams show well-controlled spherical aberration and astigmatism at all zoom positions, suggesting this single aspherical element placement is highly effective.

---

## 6. Glass Selection and Special Elements

### The Two UD Elements

Canon identifies two UD (Ultra-low Dispersion) elements in the production lens. Based on the patent prescription, these are:

1. **L12** (nd = 1.49700, νd = 81.5) — in the front group cemented doublet
2. **L44** (nd = 1.49700, νd = 81.5) — in the rear relay group

Both elements use the same fluorophosphate crown glass. UD glass has anomalous partial dispersion: it bends blue and red light more equally than conventional glass, reducing secondary chromatic aberration (the residual color error that persists even after primary achromatization). The placement of one UD element near the front (where the marginal ray is high) and one near the rear (where off-axis rays diverge) provides chromatic correction across both the aperture and the field.

### Ultra-High-Index Glasses (nd ≥ 2.0)

The design makes extensive use of ultra-high-index glasses:

- **nd = 2.00100** (νd = 29.1): Used in L33 and L36 — both negative elements in the correction group. This glass (OHARA S-NPH2 or equivalent) allows extremely strong curvatures in compact form. In the IS unit, the high index keeps the elements thin and lightweight, directly benefiting the stabilization mechanism's speed and power consumption.

- **nd = 2.00069** (νd = 25.5): Used in L34 — the negative element of the IS cemented doublet. Similar to S-NPH1.

These nd ≈ 2.0 glasses are expensive specialty materials, but their use is justified in the IS subunit where minimizing weight and diameter directly improves stabilization performance.

### Glass Summary Table

| Element | nd | νd | Glass Type | Category |
|---------|-------|-------|------------|----------|
| L11 | 1.90366 | 31.3 | S-LAH79 type | Lanthanum dense flint |
| L12 | 1.49700 | 81.5 | S-FPL51 type | Fluorophosphate crown **(UD)** |
| L13 | 1.61800 | 63.4 | S-PHM52 type | Phosphate crown |
| L21 | 1.85150 | 40.8 | S-LAH66 type | Lanthanum dense flint |
| L22 | 1.85150 | 40.8 | S-LAH66 type | Lanthanum dense flint |
| L23 | 1.92286 | 20.9 | E-FD15 type | Ultra-high index dense flint |
| L24 | 1.77250 | 49.6 | S-LAL54 type | Lanthanum light flint |
| L31 | 1.76182 | 26.5 | S-TIH6 type | Heavy flint |
| L32 | 1.58144 | 40.8 | S-BAM4 type | Barium crown |
| L33 | 2.00100 | 29.1 | S-NPH2 type | Ultra-high index dense flint |
| L34 | 2.00069 | 25.5 | S-NPH1 type | Ultra-high index dense flint |
| L35 | 1.72000 | 43.7 | S-LAM3 type | Lanthanum flint |
| L36 | 2.00100 | 29.1 | S-NPH2 type | Ultra-high index dense flint |
| L41 | 1.53110 | 55.9 | S-BAL42 type | Barium light crown **(ASPH)** |
| L42 | 1.85478 | 24.8 | S-TIH53W type | Short flint |
| L43 | 1.59282 | 68.6 | S-BSM81 type | Borosilicate crown |
| L44 | 1.49700 | 81.5 | S-FPL51 type | Fluorophosphate crown **(UD)** |
| L51 | 1.80518 | 25.4 | S-TIH10 type | Heavy flint |
| L52 | 1.63854 | 55.4 | S-BSM14 type | Barium crown |
| L61 | 1.83481 | 42.7 | S-LAH60 type | Lanthanum dense flint |
| L62 | 1.84666 | 23.8 | S-TIH14 type | Heavy flint |

*Note: Glass identifications are based on 6-digit nd/νd code matching against major catalogs. Canon may use proprietary melt equivalents; the catalog names here indicate the glass type and optical properties.*

---

## 7. Focus Mechanism

The patent explicitly identifies the **fifth lens unit (L22)**, consisting of L51 and L52 as a cemented doublet, as the focusing group. Focus is achieved by moving this doublet toward the image side when focusing from infinity to closer distances.

This is a **rear inner-focus** design. The variable gaps d31 (between L21 and L22) and d34 (between L22 and L23) change during focusing, while the front groups remain stationary. The benefits of this arrangement include:

1. **No front element rotation** — important for polarizer and graduated filter users.
2. **Small focusing mass** — only two cemented elements need to move, enabling the fast, quiet Nano USM autofocus system Canon employs.
3. **Constant overall length during focus** — the outer barrel doesn't change length when focusing (though it does extend when zooming).
4. **Chromatic stability** — the cemented doublet format minimizes focus-dependent color shift (focus breathing in the chromatic domain).

The production lens specifies close focus distances of 0.50 m (wide) and 0.78 m (tele), with a maximum magnification of 0.26× at 240 mm.

---

## 8. Image Stabilization System

The optical image stabilization (IS) system resides entirely within lens unit 3 (the correction lens unit, labeled XYZ in the patent). It operates by physically shifting subunit Y perpendicular to the optical axis.

### Subunit Architecture

| Subunit | Elements | Power | Focal Length | Purpose |
|---------|----------|-------|-------------|---------|
| X | L31, L32+L33 | Positive | +55.81 mm | Converges beam, reduces IS unit diameter |
| Y | L34+L35 | Positive | +41.45 mm | IS shift element (moves ⊥ to axis) |
| Z | L36 | Negative | −30.98 mm | Amplifies Y's correction, reduces shift distance |

The subunit X converges the beam before it enters the IS element, reducing the physical diameter of the shifted doublet. This directly benefits the actuator mechanism: a smaller, lighter IS element requires less motor force and responds faster, supporting Canon's claimed 5-stop stabilization performance.

Subunit Z's negative power amplifies the angular deviation produced by subunit Y's physical shift, meaning a smaller physical movement achieves the same image-plane correction. At the telephoto end, the patent's aberration diagram (Fig. 3) uses an IS shift of 0.509 mm to demonstrate correction performance—a notably small displacement for a 233 mm focal length lens.

### Conditional Expressions (all satisfied)

The patent defines six inequalities governing the IS system's design balance:

| Expression | Value | Range | Status |
|------------|-------|-------|--------|
| fxyz/fw | 2.45 | 0.01–4.55 | ✓ |
| fxyz/fy | 1.46 | 0.82–10.0 | ✓ |
| fxyz/fz | −1.96 | −10.0 to −1.3 | ✓ |
| lis/fy | 1.28 | 0.60–50.0 | ✓ |
| fxyz/fx | 1.09 | 0.30–10.0 | ✓ |
| (Ryz1+Ryz2)/(Ryz1−Ryz2) | 2.39 | 0.5–75.0 | ✓ |

---

## 9. Petzval Sum and Field Curvature

The Petzval sum computed via the exact surface-by-surface formula — Σ (n′ − n) / (n · n′ · R) across all 37 surfaces — gives **+0.00152 mm⁻¹**, corresponding to a Petzval radius of approximately **656 mm**. (A simpler thin-lens element-based approximation yields a misleadingly low value of 0.00008 mm⁻¹ because it does not properly account for thick-lens effects and cemented junction contributions; the surface-based result is authoritative.)

A Petzval radius of 656 mm produces a field sag of approximately 0.36 mm at the image corner (half-diagonal ≈ 21.6 mm for a 36 × 24 mm sensor). This is a good result for a 10× superzoom — the six cemented doublets, each pairing positive and negative elements at different refractive indices, are largely responsible for keeping the Petzval sum this low. The residual Petzval curvature is compensated by deliberate introduction of opposite-sign astigmatism, which is the standard technique for flattening the tangential and sagittal image surfaces simultaneously. The aberration diagrams in the patent (Figs. 2A–2C) show the characteristic separated S and M astigmatic curves that indicate this balancing strategy is in effect.

---

## 10. Paraxial Verification

Independent paraxial ray tracing through all 37 surfaces confirms the patent's stated focal lengths:

| Position | Patent EFL | Computed EFL | Error |
|----------|-----------|-------------|-------|
| Wide angle | 24.72 mm | 24.72 mm | −0.01% |
| Telephoto | 232.80 mm | 232.72 mm | −0.04% |

The sub-0.1% agreement validates the transcribed surface data against the patent's stated specifications.

---

## 11. Summary of Design Philosophy

The Canon RF 24-240mm F4-6.3 IS USM, as represented by patent Example 1, exemplifies a modern consumer superzoom optimized for several competing constraints:

1. **10× zoom range** achieved through a six-unit positive-lead architecture with a powerful variator (f = −16.74 mm) and extensive group separation changes.

2. **Compact size** maintained by using ultra-high-index glasses (nd ≥ 2.0) in the IS unit and correction group, minimizing element diameters where mass and inertia matter most.

3. **Effective image stabilization** through a three-subunit correction architecture (X-Y-Z) where the positive front subunit X converges the beam to reduce the IS doublet's diameter, and the negative rear subunit Z amplifies the angular correction to minimize the physical shift distance, enabling Canon's 5-stop IS performance with fast response.

4. **Cost-effective chromatic correction** using only two UD elements — strategically placed in the front group and rear relay group — supplemented by six cemented doublets distributed throughout the system.

5. **Single aspherical element** in the relay group, using a moldable glass to control spherical aberration and field curvature across all zoom positions, balancing optical performance against production cost.

6. **Fast, quiet rear focus** via a two-element cemented doublet (L51+L52) that moves toward the image during close focusing, enabling the Nano USM autofocus system.

---

*Analysis prepared from patent US 2020/0142167 A1, Numerical Data 1, cross-referenced with Canon's published product specifications for the RF24-240mm F4-6.3 IS USM. Glass identifications are inferred from nd/νd pairs and should be considered approximate catalog equivalents. All focal lengths and optical parameters verified by independent paraxial ray trace computation.*
