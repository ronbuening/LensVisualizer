# Canon RF 85mm f/1.2L USM — Optical Analysis

**Patent:** US 2020/0012073 A1, Example 1 (First Numerical Embodiment)
**Inventor:** Satoshi Maetaki (Canon Kabushiki Kaisha)
**Published:** January 9, 2020 · **Priority:** JP 2018-127359, July 4, 2018

---

## 1. Overview

The Canon RF 85mm f/1.2L USM is a large-aperture short-telephoto prime designed for Canon's RF mirrorless mount. It represents a significant advance over its EF-mount predecessor (EF 85mm f/1.2L II USM, 8 elements / 7 groups) with a substantially more complex optical formula: 13 elements in 9 groups in production, employing Canon's proprietary Blue Spectrum Refractive (BR) optics, one aspherical element, and one Ultra-low Dispersion (UD) glass element.

The First Numerical Embodiment of US 2020/0012073 A1 presents a 14-element, 3-unit design with a computed effective focal length of 86.53 mm and a maximum aperture of f/1.24. These values closely approximate the production lens (85 mm, f/1.2). The element count includes the 1.00 mm Lp2 layer (Lens 9), which is one more than Canon's 13-element production count; the patent does not explain the difference, so Example 1 should be read as the closest disclosed design rather than a copy of the production prescription. The viewer therefore opens to the patent's f/1.24, not the marketed f/1.2: every effective diameter the patent publishes is sized for the f/1.24 pencil.

### Design-patent concordance

| Parameter           | Patent (Ex. 1)                                          | Production (Canon)       |
| ------------------- | ------------------------------------------------------- | ------------------------ |
| Focal length        | 86.53 mm                                                | 85 mm                    |
| Maximum aperture    | f/1.24                                                  | f/1.2                    |
| Elements / groups   | 14 / 9                                                  | 13 / 9                   |
| Aspherical surfaces | 1 (surface 8)                                           | 1 element                |
| BR optics element   | Lens 9 (nd = 1.60401; material not named in the patent) | 1 BR element             |
| UD element          | Lens 4 (nd = 1.49700; "UD" not used in the patent)      | 1 UD element             |
| Half-field angle    | 14.04°                                                  | 14.25° (diagonal 28°30′) |
| Close focus         | not tabulated (0.85 m calculated, β ≈ −0.126)           | 0.85 m (0.12×)           |
| Filter thread       | —                                                       | 82 mm                    |
| Overall length      | 134.49 mm (first vertex to image)                       | 117.3 mm (barrel)        |
| Image circle        | 43.28 mm (2 × 21.64)                                    | 43.2 mm (full-frame)     |

The two lengths measure different things. The patent's 134.49 mm runs from the first surface vertex to the image plane; the RF mount flange sits 20 mm in front of the sensor, so about 114.5 mm of the optical track lies ahead of the flange, consistent with Canon's 117.3 mm barrel length.

The patent's effective ray diameter at surface 1 (70.20 mm) is consistent with the production lens's 82 mm filter thread, which typically allows for a clear aperture of approximately 70–72 mm after accounting for the filter mount and barrel wall thickness.

It is worth noting that the patent's sixth example (Example 6) has 13 elements in 2 lens units with 2 aspherical surfaces — matching the production element count but not the aspherical count. No single patent example is an exact match to every production specification; Example 1 provides the most detailed prescription for the 3-unit, single-asphere configuration that represents the core design philosophy of the RF 85mm f/1.2L USM.

---

## 2. Optical Layout — Three Lens Units, Nine Groups

The patent organizes the 14 elements into three lens units defined by their focusing behavior:

**Unit L1** (positive, f₁ = 452.3 mm, f₁/f = 5.2): A cemented doublet of two elements forming a weakly positive front group. L1 is fixed during focusing.

**Unit L2** (positive, f₂ = 93.1 mm): The workhorse of the design, containing 8 elements in 5 air-separated groups. L2 carries the aperture stop, the aspherical surface, the BR optics element, and the UD glass element. L2 is the sole focusing group, translating bodily toward the object during close-focus.

**Unit L3** (positive, f₃ = 845.7 mm): A weakly positive rear group of 4 elements in 3 air-separated groups. L3 is fixed during focusing and serves primarily to control the exit ray angle for compatibility with digital sensor microlens arrays.

The nine air-separated groups, from front to rear, are listed below. The patent numbers individual lenses G1–G14 (¶0068), so Lp1 is G3 and Lp2 is G9; the group numbers here are air-spaced groups, not the patent's Gn.

| Air-spaced group | Elements      | Type                                | Unit |
| ---------------- | ------------- | ----------------------------------- | ---- |
| 1                | L1 + L2       | Cemented doublet                    | L1   |
| 2                | L3 (Lp1)      | Singlet — positive meniscus         | L2   |
| 3                | L4            | Singlet — positive meniscus (UD)    | L2   |
| 4                | L5            | Singlet — negative meniscus (asph.) | L2   |
| —                | STO           | Aperture stop                       | L2   |
| 5                | L6 + L7       | Cemented doublet                    | L2   |
| 6                | L8 + L9 + L10 | Cemented triplet (Lp2 layer)        | L2   |
| 7                | L11 + L12     | Cemented doublet                    | L3   |
| 8                | L13           | Singlet — biconcave                 | L3   |
| 9                | L14           | Singlet — biconvex                  | L3   |

---

## 3. The Aspherical Surface — Surface 8

Only one surface in the design is aspherical: the front surface of Lens 5 (surface 8 in the patent numbering). This is a concave meniscus element located immediately before the aperture stop, placing it at the ideal position to control spherical aberration — the marginal ray height is still substantial (effective ray diameter 41.24 mm per the patent) but the beam is converging, making aspherical correction highly efficient.

### Aspherical coefficients

The surface uses the standard even-polynomial sag equation with a spherical base (K = 0):

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (h/R)^2}} + B \cdot h^4 + C \cdot h^6 + D \cdot h^8$$

| Coefficient    | Value                |
| -------------- | -------------------- |
| R              | 75.484 mm            |
| K              | 0.0 (spherical base) |
| B (4th order)  | −2.2875 × 10⁻⁶       |
| C (6th order)  | −2.1286 × 10⁻¹⁰      |
| D (8th order)  | +2.6709 × 10⁻¹³      |
| E (10th order) | 0.0                  |

### Aspherical departure from the base sphere

| Height h (mm) | Sphere sag (mm) | Aspherical sag (mm) | Departure (μm) |
| ------------- | --------------- | ------------------- | -------------- |
| 5.0           | 0.1658          | 0.1643              | −1.4           |
| 10.0          | 0.6653          | 0.6423              | −23.1          |
| 15.0          | 1.5054          | 1.3878              | −117.5         |
| 20.0          | 2.6978          | 2.3250              | −372.8         |

The aspherical departure is uniformly negative, meaning the surface is _flatter_ than the base sphere at all zones. At 20 mm the departure is −373 µm, and at the clear-aperture rim (20.62 mm, half the patent's 41.24 mm effective diameter) it reaches −421 µm — a substantial correction. The dominant 4th-order term (B < 0) is the primary spherical aberration corrector, while the 8th-order term (D > 0) provides a small restorative kick at high zones, preventing over-correction at the rim. The 6th-order term (C < 0) is comparatively weak, acting as a smooth bridge between the two.

This aspherical element is large-diameter (effective ray diameter ~41 mm) and made from high-index glass (nd = 1.85478), which presents significant manufacturing challenges. Canon markets this as a "large diameter aspherical element" and it is likely produced by precision glass molding (PGM) given the glass type and the scale involved.

### Role in aberration control

Surface 8 is positioned just before the stop, where marginal ray heights are still high but the chief ray is crossing toward zero. This placement means the aspherical correction predominantly affects spherical aberration (which depends on marginal ray height to the fourth power) with minimal impact on field-dependent aberrations like coma and astigmatism. For an f/1.2 lens where third-order spherical aberration is the dominant challenge, this is optimal.

---

## 4. Glass Identification and Material Analysis

The design uses 12 distinct materials across 14 elements (L5/L6 and L10/L11 share a glass). The prescription lists nd/νd, with two genuine anomalous-partial-dispersion deviations separately in Table 1. Names below are compatible catalog-coordinate proxies, not proof of historical supplier, melt or composition.

### Complete glass table

| Element  | nd      | νd   | Code    | Probable glass family | Notes                                                   |
| -------- | ------- | ---- | ------- | --------------------- | ------------------------------------------------------- |
| L1       | 1.61800 | 63.4 | 618/634 | PCD4 (HOYA)           | Phosphate crown                                         |
| L2       | 1.72047 | 34.7 | 720/347 | S-NBH8 (OHARA)        | Dense flint (Schott N-KZFS8 has the same code)          |
| L3 (Lp1) | 1.92286 | 20.9 | 923/209 | PBH21 (OHARA)         | Ultra-high-index dense flint                            |
| L4       | 1.49700 | 81.5 | 497/815 | S-FPL51 (OHARA)       | High-Abbe medium; UD association and chemistry inferred |
| L5       | 1.85478 | 24.8 | 855/248 | S-NBH56 (OHARA)       | High-index niobium flint (aspherical)                   |
| L6       | 1.85478 | 24.8 | 855/248 | S-NBH56 (OHARA)       | High-index niobium flint                                |
| L7       | 1.88300 | 40.8 | 883/408 | S-LAH58 (OHARA)       | Lanthanum heavy flint                                   |
| L8       | 1.54072 | 47.2 | 541/472 | S-TIL2 (OHARA)        | Light flint; object-side element of the triplet         |
| L9 (Lp2) | 1.60401 | 20.8 | 604/208 | No catalog match      | Canon BR optics (inferred)                              |
| L10      | 1.95375 | 32.3 | 954/323 | S-LAH98 (OHARA)       | Ultra-high-index lanthanum                              |
| L11      | 1.95375 | 32.3 | 954/323 | S-LAH98 (OHARA)       | Same as L10                                             |
| L12      | 1.62004 | 36.3 | 620/363 | S-TIM2 (OHARA)        | Titanium flint                                          |
| L13      | 1.68893 | 31.1 | 689/311 | S-TIM28 (OHARA)       | Titanium flint                                          |
| L14      | 1.90043 | 37.4 | 900/374 | TAFD37A (HOYA)        | Lanthanum/tantalum dense flint                          |

### Key material observations

**Ultra-high-index glasses (nd > 1.9):** Four elements (L3, L10, L11, L14) employ glasses with nd exceeding 1.90 — an exceptionally aggressive choice that allows strong positive refractive power without proportionally large Petzval sum contributions. The verified Petzval sum for the entire system is 0.00107 mm⁻¹, yielding a Petzval radius of 934 mm — remarkably flat for a lens of this speed.

**Inferred UD association (L4):** Source 1.49700/81.5 is compatible with the retained S-FPL51 spectral proxy. Its association with the production UD count remains inferred; the tuple and catalog curve do not establish fluorophosphate or other historical chemistry. It is a strong positive meniscus (isolated focal length +97.8 mm) in the front half of L2.

**Inferred BR association (L9):** Source Lp2 has nd 1.60401/vd 20.8 and genuinely published anomalous dispersion. The patent does not name BR or identify glass/polymer chemistry. The unmatched medium remains unidentified; its BR association is product correlation only. L8/L10 carry the layer at a shared optical triplet interface.

---

## 5. Blue Spectrum Refractive (BR) Optics — Lens 9

The production BR name is used here only as an inferred correlation. The selected source identifies Lp2 through its optical tuple and anomalous partial dispersion; it does not establish whether the actual medium is glass, resin or another organic material. Its genuine spectral evidence is retained independently of that unresolved identity.

### Physical construction

In this design, the BR element (Lens 9) is just 1.00 mm thick at center, sandwiched between two conventional glass elements in the cemented triplet L8–L10:

- **L8** (S-TIL2, nd = 1.54072, νd = 47.2) — the biconcave negative element on the object side
- **L9** (nd = 1.60401, νd = 20.8, ΔθgF = 0.092) — the Lp2 layer (BR material, inferred)
- **L10** (nd = 1.95375, νd = 32.3) — the biconvex positive element on the image side

The junction surfaces are R₈₋₉ = 58.169 mm and R₉₋₁₀ = 77.751 mm, giving Lens 9 a weakly positive meniscus shape (fl = +375.2 mm). The extremely long focal length means Lens 9 contributes minimal refractive power but exerts strong chromatic influence through its anomalous dispersion.

### Chromatic correction strategy

The patent's core invention places two positive lenses with anomalous partial dispersion symmetrically about the aperture stop:

**Lp1 (Lens 3)** — before the stop, nd = 1.92286, νd = 20.9, ΔθgF = 0.008. This ultra-high-index dense flint has only modestly anomalous dispersion. Positioned where marginal ray heights are high and chief ray heights are moderate, it contributes significant primary chromatic aberration through its very high dispersion (low νd), which is compensated by the negative elements in the system. Its placement in the design is specifically motivated by its anomalous partial dispersion — even a modest ΔθgF of 0.008, acting on a positive element at high marginal ray height, meaningfully reduces the on-axis secondary spectrum.

**Lp2 (Lens 9 / BR)** — after the stop, nd = 1.60401, νd = 20.8, ΔθgF = 0.092. The BR element has dramatically higher anomalous dispersion — over 11× that of Lp1. Positioned where chief ray heights are growing (light is diverging toward the image), it primarily addresses lateral chromatic aberration (chromatic aberration of magnification) at the secondary spectrum level. Its νd is similar to Lp1's, but its anomalous dispersion is far stronger, enabling correction of the g-line and F-line residuals that conventional achromatization leaves behind.

The patent explains that Lp1 alone would overcorrect lateral chromatic aberration because its strong positive power at a high marginal ray position creates an imbalance. Lp2, placed symmetrically after the stop, cancels the excess lateral correction while preserving the longitudinal correction. The ratio DL1/DL2 = 1.61 quantifies this near-symmetry (a value of 1.0 would indicate perfect mirror-image placement about the stop).

---

## 6. Element-by-Element Functional Analysis

### Front Group — Unit L1 (fixed)

**Lens 1** — Biconvex positive (fl = +80.5 mm), nd = 1.618, νd = 63.4.
The first element is a moderately positive biconvex crown serving as the front collecting element. Its phosphate crown glass provides low dispersion and moderate refractive index, keeping primary chromatic aberration under control at the enormous entrance pupil (~70 mm effective ray diameter). It is cemented to Lens 2.

**Lens 2** — Biconcave negative (fl = −88.7 mm), nd = 1.720, νd = 34.7.
The rear element of the front cemented doublet, a dense flint (720/347) with higher dispersion. Together with L1, this forms a weakly positive doublet (combined focal length = 452.3 mm, f₁/f = 5.2). The cemented interface corrects primary axial color introduced by L1, while the weak combined power means L1 contributes only modestly to the Petzval sum. The group's primary role is to gently pre-converge the beam entering the much more powerful L2 unit.

### Focusing Group — Unit L2 (movable)

**Lens 3 (Lp1)** — Positive meniscus (fl = +134.4 mm), nd = 1.923, νd = 20.9.
The first positive lens with anomalous partial dispersion (ΔθgF₁ = 0.008). This high-index low-Abbe coordinate with a qualified PBH21 spectral proxy is powerfully refracting in a meniscus form that minimizes surface aberrations. As a positive element with very high dispersion (νd = 20.9), L3 contributes significantly to primary longitudinal chromatic aberration — its strong wavelength-dependent power is then compensated by the negative flint elements (L5, L6) through conventional achromatization. However, L3's position in the design is driven primarily by its anomalous partial dispersion: even after the system's primary crown-flint chromatic balance is established, a secondary spectrum residual persists, and L3's modest ΔθgF = 0.008 provides a small but meaningful correction to this residual at the on-axis level. Its very high refractive index (1.923) keeps the Petzval contribution manageable despite the strong positive power.

**Lens 4 (UD)** — Positive meniscus (fl = +97.8 mm), nd = 1.497, νd = 81.5.
The high-Abbe positive element, using a compatible S-FPL51 curve; UD and chemistry are inferred. This is the strongest positive power contributor in the front half of L2 (fl = +97.8 mm), and its extremely low dispersion (νd = 81.5) means it introduces very little primary chromatic aberration per unit of refractive power — a highly efficient "crown" element. S-FPL51-class glasses also possess significant anomalous partial dispersion, making L4 a contributor to secondary spectrum correction alongside Lp1 and the BR element. The thick meniscus form (11.43 mm center thickness) also helps control spherical aberration and coma.

**Lens 5 (Aspherical)** — Negative meniscus (fl = −52.5 mm), nd = 1.855, νd = 24.8.
The sole aspherical element, a strongly negative meniscus positioned immediately before the aperture stop. Its aspherical front surface (surface 8) corrects the dominant higher-order spherical aberration that would otherwise overwhelm the image at f/1.2. The negative power also contributes to the telephoto ratio, helps flatten the Petzval field, and provides chromatic balancing against the preceding positive elements. Made from high-index flint glass to allow the aspherical correction without excessive curvature.

**Aperture Stop (STO)** — Located between surfaces 9 and 11 (d = 10.68 + 4.51 = 15.19 mm from L5 rear to L6 front). The 9-blade diaphragm sits in this air gap.

**Lens 6 + Lens 7 (cemented doublet L6–L7)** — Combined fl = +223.8 mm.
L6 is a strongly negative biconcave S-NBH56 flint (fl = −27.9 mm, nd = 1.855, νd = 24.8), cemented to L7, a strongly positive biconvex element (fl = +26.6 mm, nd = 1.883, νd = 40.8). This is a classic achromatic doublet positioned just after the stop, where it corrects axial color and spherical aberration in the diverging beam. The combined group is weakly positive, maintaining beam convergence toward the image.

**Lens 8 + Lens 9 + Lens 10 (cemented triplet L8–L10)** — Combined fl = +137.9 mm.
The BR optics assembly. L8 is a negative biconcave S-TIL2 element (fl = −48.6 mm, nd = 1.541), L9 is the thin Lp2 layer (BR material, inferred; fl = +375.2 mm, nd = 1.604), and L10 is a strongly positive biconvex element (fl = +41.7 mm, nd = 1.954). The triplet as a whole is moderately positive, providing the secondary chromatic correction (secondary spectrum reduction) that is the patent's central innovation. The BR element's extreme anomalous dispersion (ΔθgF = 0.092) cancels the lateral chromatic overcorrection from Lp1 in the front group.

### Rear Group — Unit L3 (fixed)

**Lens 11 + Lens 12 (Doublet)** — Combined fl = +188.4 mm.
L11 is a strongly positive biconvex element (fl = +41.4 mm, nd = 1.954, νd = 32.3), cemented to L12, a negative biconcave element (fl = −51.6 mm, nd = 1.620, νd = 36.3). This achromatic doublet in the rear group helps control chromatic aberration in the strongly converging beam approaching the image plane. The ultra-high-index glass of L11 keeps the Petzval contribution small.

**Lens 13** — Biconcave negative (fl = −61.9 mm), nd = 1.689, νd = 31.1.
A weakly negative singlet that provides field curvature correction and helps control astigmatism in the outer field zones. Its titanium flint glass (S-TIM28) balances the chromatic residuals from the preceding doublet.

**Lens 14** — Biconvex positive (fl = +86.3 mm), nd = 1.900, νd = 37.4.
The final element is a strongly positive biconvex at the source 1.90043/37.4 coordinate; its TAFD37A curve is a compatible proxy and does not identify historical chemistry. This element serves two purposes: it provides positive power to reduce the convergence angle of the exit rays (bringing them closer to perpendicular incidence on the sensor for better microlens compatibility), and it contributes final chromatic balancing. Its focal length (+86.3 mm) is almost identical to the system focal length, and its strong convergence helps place the exit pupil 38 mm in front of the image plane — far enough that ray angles at the sensor remain moderate across the field.

---

## 7. Focusing Mechanism

### Unit focus of L2

The entire L2 unit (elements 3–10 and the stop) translates bodily toward the object when focusing from infinity to close distance. This is an internal focusing design: L1 and L3 remain stationary, the front element does not rotate or extend, and the overall physical length of the lens housing is constant.

The two variable air gaps are:

| Gap     | Surface | Infinity (patent) | Close (0.85 m, calculated) | Change    |
| ------- | ------- | ----------------- | -------------------------- | --------- |
| L1 → L2 | d₃      | 14.36 mm          | 1.61 mm                    | −12.75 mm |
| L2 → L3 | d₁₇     | 1.64 mm           | 14.39 mm                   | +12.75 mm |

The patent tabulates only the infinity gaps. The close values are a paraxial solve that moves L2 alone, holds the image plane fixed and places the object approximately 850.0 mm from the image under the current canonical model (β ≈ −0.126, against Canon's 0.12× maximum magnification). The resulting L2 shift of 12.75 mm is substantial — nearly the entire available gap between L1 and L2 is consumed at minimum focus distance. Because only L2 moves, Δd₃ + Δd₁₇ = 0 and the total track stays at 134.49 mm.

### Why L2 focus works

The patent designates L2 as a positive group with f₂ = 93.1 mm, close to the system focal length (f₂/f = 1.08). When L2 moves forward, the effective object distance for L2 decreases while the effective throw to the image (through L3) increases, refocusing the system onto progressively closer objects. The ratio f₂/f ≈ 1 means the focus sensitivity is high (small L2 movements produce large changes in object distance), but the 0.85 m minimum focus distance still requires a 12.75 mm stroke — a consequence of the long focal length and only moderate f₂/f ratio.

Because all of the chromatic correction elements (Lp1/BR/UD) move together with the stop, focus breathing effects on chromatic performance are minimized. The patent states this advantage in ¶0036: because the first positive lens, the stop and the second positive lens all sit in the focusing unit, chromatic aberration fluctuation during focusing is reduced.

---

## 8. Computed Optical Parameters

All values independently verified by paraxial ray trace (ABCD matrix / y-nu method).

### System parameters

| Parameter               | Value                                     |
| ----------------------- | ----------------------------------------- |
| Effective focal length  | 86.53 mm                                  |
| F-number (design)       | f/1.24                                    |
| Half-field angle (ω)    | 14.04°                                    |
| Image height            | 21.64 mm (full-frame 43.28 mm diagonal)   |
| Overall optical length  | 134.49 mm                                 |
| Back focal distance     | 14.91 mm                                  |
| Entrance pupil position | 113.67 mm behind front surface            |
| Exit pupil position     | −38.04 mm (38 mm in front of image plane) |
| Petzval sum             | 0.00107 mm⁻¹                              |
| Petzval radius          | 934 mm                                    |

### Unit focal lengths

| Unit | Focal length (mm) | Power contribution                |
| ---- | ----------------- | --------------------------------- |
| L1   | +452.3            | Weak positive collector           |
| L2   | +93.1             | Primary power; focusing           |
| L3   | +845.7            | Weak positive; exit pupil control |

### Element focal lengths (thick-lens, standalone in air)

| Element    | Shape             | fl (mm) | Glass (nd/νd) | Role                                       |
| ---------- | ----------------- | ------- | ------------- | ------------------------------------------ |
| L1         | Biconvex (+)      | +80.5   | 1.618/63.4    | Front crown                                |
| L2         | Biconcave (−)     | −88.7   | 1.720/34.7    | Front flint                                |
| L3 (Lp1)   | Pos. meniscus (+) | +134.4  | 1.923/20.9    | APD corrector (axial CA)                   |
| L4 (UD)    | Pos. meniscus (+) | +97.8   | 1.497/81.5    | UD glass (low-dispersion positive)         |
| L5 (asph.) | Neg. meniscus (−) | −52.5   | 1.855/24.8    | Spherical aberration corrector             |
| L6         | Biconcave (−)     | −27.9   | 1.855/24.8    | Post-stop doublet flint                    |
| L7         | Biconvex (+)      | +26.6   | 1.883/40.8    | Post-stop doublet crown                    |
| L8         | Biconcave (−)     | −48.6   | 1.541/47.2    | Triplet object-side element                |
| L9 (BR)    | Pos. meniscus (+) | +375.2  | 1.604/20.8    | BR optics (lateral CA)                     |
| L10        | Biconvex (+)      | +41.7   | 1.954/32.3    | Triplet image-side element, positive power |
| L11        | Biconvex (+)      | +41.4   | 1.954/32.3    | Rear doublet crown                         |
| L12        | Biconcave (−)     | −51.6   | 1.620/36.3    | Rear doublet flint                         |
| L13        | Biconcave (−)     | −61.9   | 1.689/31.1    | Field flattener                            |
| L14        | Biconvex (+)      | +86.3   | 1.900/37.4    | Exit angle control                         |

---

## 9. Design Philosophy — Summary

The Canon RF 85mm f/1.2L USM exemplifies several trends in modern high-performance lens design:

**Ultra-high-index glass usage:** Four elements exceed nd = 1.90, allowing the design to distribute positive power across many surfaces while keeping the Petzval sum remarkably low (R_P = 934 mm). Without these materials, an f/1.2 design at 85 mm would suffer from pronounced field curvature.

**Lp2 for secondary spectrum:** The source anomalous-partial-dispersion medium contributes to the g/F secondary spectrum; its BR/organic association remains inferred. By placing the BR element after the stop — symmetrically opposite the Lp1 element before the stop — the design achieves simultaneous correction of both longitudinal and lateral secondary chromatic aberration.

**Single aspherical surface efficiency:** Rather than using multiple aspherical surfaces, the design achieves spherical aberration control with a single well-placed aspherical surface on a high-index substrate, immediately before the stop. The 0.42 mm departure at the rim indicates a heavily worked asphere, but the K = 0 (spherical) conic base with only three non-zero polynomial terms suggests the manufacturing challenge is primarily in the departure magnitude rather than in surface complexity.

**Internal focusing with chromatic stability:** By placing all chromatic correction elements within the moving L2 group, the design ensures that chromatic performance is invariant across the focus range — a critical advantage for a portrait lens that must maintain consistent color rendition from infinity to minimum focus distance.

**No optical image stabilization:** Unlike many modern RF-mount lenses, the RF 85mm f/1.2L USM omits in-lens optical stabilization. This is a deliberate trade-off: the large, fast optical formula leaves little room for a stabilization group without compromising image quality or increasing size further. Users rely on in-body image stabilization (IBIS) available in newer EOS R bodies.

### Patent conditional expression validation

The patent defines 18 conditional expressions that bound the design space. Example 1 satisfies all of them, with key values confirming the design intent:

| Expression  | Meaning                     | Value  | Bounds     |
| ----------- | --------------------------- | ------ | ---------- |
| (1) ΔθgF1   | Lp1 anomalous dispersion    | 0.01   | 0.005–0.40 |
| (2) ΔθgF2   | Lp2 anomalous dispersion    | 0.09   | 0.005–0.40 |
| (3) DL1/DL2 | Symmetry about stop         | 1.61   | 0.50–3.00  |
| (4) nd1     | Lp1 refractive index        | 1.9229 | 1.80–2.40  |
| (13) fp1/f2 | Lp1 power relative to L2    | 1.44   | 0.50–5.00  |
| (14) fp2/f2 | Lp2 power relative to L2    | 4.03   | 0.50–10.0  |
| (15) f1/f   | L1 power relative to system | 5.23   | 1.50–45.0  |
| (16) f2/f   | L2 power relative to system | 1.08   | 0.50–1.50  |
| (18) Fno    | Aperture ratio              | 1.24   | 0.50–2.50  |

---

_Analysis verified by independent paraxial ray trace. All focal lengths, unit powers, Petzval sum, and variable-gap values confirmed to within rounding tolerance of the patent prescription._

## Scoped source-normal correction — 2026-10-30

The completed shape/prescription review remains **2026-09-23**, with May 19, June 4 and July 29 glass/provenance history preserved. Current optical semantic equality to that review was proved excluding only the later `source.example` annotation. This reopening addresses a reproducible spectral-convention error, not a fresh inspection of unchanged source rims or the other media. Source geometry, clear caps, aspheres, index/Abbe pairs, iris and focus controls are unchanged.

The exact local original `patents/US20200012073A1.pdf`, PDF p22/printed p2 paragraph 0038 equation(c), defines a **cubic** normal:

`Nsource(v) = −1.665e−7 v³ +5.213e−5 v² −5.656e−3 v +.7278`

`ΔθgF = θgF − Nsource(vd)`

Native Table 1 PDF p36/printed p16 gives Lp1/L3 Δθ=.008 at vd 20.90 and Lp2/L9 Δθ=.092 at vd 20.80. Those genuine source deviations are retained in the notes and source-condition discussion. The old active fields copied them directly into engine `dPgF`, which uses `.6438−.001682 vd`; the two definitions are different. This corrects the authored data convention, not a patent misprint.

| Element | Genuine source Δθ | Source cubic normal | Reconstructed absolute θ | Correct engine dPgF |
| ------- | ----------------: | ------------------: | -----------------------: | ------------------: |
| L3/Lp1  |              .008 |      .6308404720215 |           .6388404720215 |      .0301942720215 |
| L9/Lp2  |              .092 |       .631210404352 |            .723210404352 |       .114396004352 |

The public `normalLinePgF(vd, dPgF)` reconstructs both source absolute ratios within 1e−15, as do the actual compiled `(ng−nF)/(nF−nC)` ratios. Extra digits preserve arithmetic reproducibility; the printed deviations have only three decimal places (about ±.0005 if rounded), with additional source coefficient/Abbe rounding. These are not newly published precision measurements. Paragraph 0038 explicitly defines d 587.6/F 486.1/C 656.3/g 435.8 nm. Actual runtime ng changes L3 1.981794571878→1.982775325890 and L9 1.645058217595→1.645708573873; these ng values are model reconstructions, not printed source line indices. Catalog C/F curves remain qualified approximations and the unmatched Lp2 medium remains unresolved.

All existing catalog curve identities are unchanged. Source d geometry and all 65 prepared focus states agree exactly before/after; every actual SVG path is identical, finite, closed and connected with 0 hidden trim. The source shape review is reused at its actual September 23 date. Labels now explicitly qualify L4 UD/chemistry and L9 BR inference, and the L5 role names modeled f1.24.

Both 65-position d-line launch grids remain clear: 3,185/3,185 axial rays and 195/195 chiefs, 0 failed seeds. One is collimated in every focus-adjusted geometry; the other uses actual finite-object Gaussian conjugates at nonzero focus (half 1546.703537 mm, near 850.003712 mm object-to-image), which remain inferred rather than published close states. Gaussian d-line bundles at 0/.6/1 pass 49/36/17 infinity, 49/38/22 half and 49/43/24 near. Finite field heights `(21.65×fraction)/A` are paraxial object-field probes, not inverse-solved sensor corners. No full finite-corner claim is made.

A 65-state actual-Gaussian axial comparison traces 3,185 rays per channel before/after: C/d/F terminal-ray hashes are byte-identical; g changes as intended, with maximum terminal-coordinate difference .018175287 mm and all 3,185 axial samples still passing. Full g-line 65-state field grids retain 195/195 chiefs and 0 failed seeds; total survivors change 6,950→6,944 of 9,555, showing the actual off-axis consequence rather than claiming a passing axial bundle proves all-field transmission. Endpoint g bundles remain 49/34/15,49/38/22 and49/43/24. No caps or cams are tuned to spectral output.

Narrow canonical surface, image-circle, aperture and field audits and the full no-inferred-cut probe are checked on the result. Source fidelity, sampled runtime clearance and production correlation remain separate. The source/count mismatch, retained S20 cap constraint, calculated focus travel, inferred BR/UD identities and qualified spectral proxies remain limitations.
