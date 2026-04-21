# Nikon NIKKOR Z 35mm f/1.2 S — Optical Analysis

**Patent:** JP 2025-52870A (filed 2023-09-26, published 2025-04-07)
**Numerical Example:** 1 (Table 1)
**Inventors:** Sōki Harada, Toshiyuki Shimada (Nikon Corporation)

---

## 1. Overview and Patent-to-Product Mapping

JP 2025-52870A discloses a family of large-aperture optical systems intended for mirrorless cameras. Example 1 corresponds to the production **NIKKOR Z 35mm f/1.2 S**, announced by Nikon on February 5, 2025. The correlation is established by the following:

| Parameter | Patent Example 1 | Production Spec |
|---|---|---|
| Focal length | 34.4 mm | 35 mm |
| Maximum aperture | f/1.23 | f/1.2 |
| Half-field angle ω | 32.7° | ~31.5° (63° full) |
| Image circle (Y) | 21.7 mm | Full-frame (43.3 mm diagonal) |
| Elements / Groups | 17 / 15 | 17 / 15 |
| Total track (TL) | 163.99 mm (optical, first surface to image) | 150 mm (barrel length from flange) |
| Close focus | ~0.47 m at 0.10× (patent example) | 0.30 m at 0.20× |
| Close-focus magnification | 0.10× (patent example) | 0.20× (production allows closer) |
| Filter thread | — | 82 mm |
| Aperture blades | — | 11 (rounded) |

The slight discrepancy in focal length (34.4 vs 35 mm) reflects the standard practice of marketing a rounded value. The close-focus magnification difference (0.10× vs 0.20×) indicates the production lens permits closer approach than the patent's numerical example illustrates, likely via extended focus group travel.

Nikon's official description emphasizes that the Z 35mm f/1.2 S shares a "symmetrical optical layout" design concept with the Z 50mm f/1.2 S and Z 85mm f/1.2 S, forming a coherent "f/1.2 trio" with consistent rendering philosophy. The patent's abstract confirms the core design goal: a large-aperture system with aberrations well-corrected throughout the entire focusing range, suitable for both autofocus and manual focus operation.

---

## 2. Optical Architecture

The system follows a **positive-positive** (G1 group A + G4 group B) construction separated by the aperture stop, with quasi-symmetry about the diaphragm. This symmetrical approach is a deliberate design choice — Nikon's developer documentation states it "guides light naturally to the sensor" and enables the signature bokeh quality shared across the f/1.2 trio.

### 2.1 Structural Hierarchy

```
Object → [G1 Group A (+)] → [Aperture Stop S] → [G4 Group B (+)] → Image
              │                                            │
    ┌─────────┴──────────┐                    ┌────────────┼────────────┐
    AF (−)          AR (+)                   F1 (−)     F2 (+)      R (−)
  (s1–s8)        (s9–s17)                  (s19–22)   (s23–26)   (s27–33)
  FIXED           FIXED                   FOCUSING   FOCUSING    FIXED
```

### 2.2 Computed Group Focal Lengths

All values independently verified via ABCD matrix ray trace; they match the patent's stated values to within rounding:

| Group | Surfaces | Focal Length | Power Character |
|---|---|---|---|
| **A** (front) | 1–17 | +96.18 mm | Weak positive overall |
| — AF (obj.-side subgroup) | 1–8 | −24.72 mm | Strong negative (diverging) |
| — AR (img.-side subgroup) | 9–17 | +31.47 mm | Strong positive (converging) |
| **B** (rear) | 19–33 | +61.45 mm | Moderate positive |
| — F1 (focus group 1) | 19–22 | −219.4 mm | Weak negative |
| — F2 (focus group 2) | 23–26 | +44.77 mm | Moderate positive |
| — R (final group) | 27–33 | −130.7 mm | Moderate negative |

The G1 group A uses a **retrofocus-like internal structure**: the negative AF subgroup (f = −24.7 mm) precedes the positive AR subgroup (f = +31.5 mm), creating a diverging-then-converging beam path. This raises the marginal ray height through the positive elements (enhancing Petzval correction through the ratio −fAF/fAR = 0.79) and provides the back focal distance necessary for mirrorless camera flange clearance. The patent's condition formula (16) requires 0.40 < −fAF/fAR < 2.00; Example 1 yields 0.786.

The overall system focal length of 34.4 mm is produced by the combination of A at +96.2 mm and B at +61.5 mm, with the ratio fA/fB = 1.566 satisfying the patent's condition (9) for power balance (required range: 0.30–3.00).

---

## 3. Element-by-Element Analysis

The system contains **17 glass elements** arranged from object to image as follows. Focal lengths computed via thick-lens formulae.

### 3.1 G1 Group A — Object-Side Subgroup G2 (Negative, f = −24.7 mm)

**L11 — Negative Meniscus** (nd = 1.64000, νd = 60.1, f = −60.5 mm)
Glass code 640601. Best catalog match: **CDGM H-LAK3** (nd = 1.64000, νd = 60.09) — a lanthanum crown (LaK family). Convex toward the object. As the first element, L11 provides the initial bending of wide-angle off-axis ray bundles. Its negative power begins the characteristic diverging front section that raises marginal ray heights for elements downstream. The image-side surface (R = 31.1 mm) carries the steepest curvature in the AF subgroup and is identified in the patent as the surface R1 — the tightest image-facing convex surface among elements before the four positive lenses.

**L12 — Negative Meniscus, 2× Aspherical** (nd = 1.51680, νd = 64.1, f = −137.7 mm)
Glass code 517641. **Schott N-BK7** or equivalent standard borosilicate crown (OHARA S-BSL7 is close at nd = 1.51633). Both surfaces (s3, s4) carry polynomial aspherical profiles. This is one of three non-ED aspherical elements in the production lens. The aspherical surfaces on this weak negative meniscus correct higher-order spherical aberration and coma generated by the wide marginal ray bundle entering the lens at f/1.2. Since standard BK7 is not amenable to precision glass molding (its transition temperature is too high), L12 is likely manufactured as either a ground/polished asphere or a hybrid composite (resin-on-glass).

**L13 — Positive Meniscus** (nd = 1.92119, νd = 24.0, f = +99.5 mm)
Glass code 921240. **HOYA TAFD5F** or equivalent (HIKARI E-FDS3HT, CDGM H-ZF88A — all nd = 1.92119, νd = 24.06) — an ultra-high-index dense flint. This is one of the most exotic glasses in the system. Its extremely high refractive index (nd = 1.921) allows a positive meniscus shape (R1 = +73.5, R2 = +357.5) that contributes positive power and helps control the Petzval sum without introducing excessive surface curvatures. The high dispersion (νd = 24.0) means L13 generates significant chromatic aberration — this is intentionally balanced against the low-dispersion ED elements downstream in AR.

**L14 — Negative Meniscus** (nd = 1.73800, νd = 32.3, f = −54.1 mm)
Glass code 738323. **OHARA S-NBH52** (nd = 1.73800, νd = 32.33) — a dense barium flint. Concave toward the object. The patent identifies L14 as the negative lens Ln1, positioned immediately object-side of the four consecutive positive lenses. L14's object-side surface (R = −38.6 mm) is identified as R2 — the tightest object-facing concave surface among the elements at and before Ln1. The companion surface R1 is identified on L11's image side (R = +31.1 mm) — the tightest image-facing convex surface in the same element group. Although R1 and R2 are separated by two intervening elements (L12 and L13), their curvatures work together to form a distributed negative-power "shell" that reduces the Petzval sum. The patent's condition (3) governs the relationship (R2+R1)/(R2−R1) = 0.108, ensuring balanced field curvature and coma correction.

### 3.2 G1 Group A — Image-Side Subgroup G3 (Positive, f = +31.5 mm)

This subgroup is the heart of the G1 group: **four consecutive positive lenses** (L15–L18) flanked by a negative element (L19). The patent identifies this configuration as critical for correcting spherical aberration, field curvature, and chromatic aberration simultaneously. Having at least four positive lenses in sequence allows the total positive power to be divided among many low-power surfaces, each contributing modest aberration while collectively achieving the strong convergence needed for an f/1.2 design.

**L15 — Plano-Convex Positive** (nd = 1.95375, νd = 32.3, f = +65.5 mm)
Glass code 954323. **OHARA S-LAH79** — an ultra-high-index lanthanum glass (nd = 1.954). This is identified as "Lens H" in the patent — the high-index element satisfying condition (1): 1.650 < nH < 2.100 and condition (2): 25.00 < νH < 60.00. It is also the first of the four positive lenses (designated L1 in the patent's notation). Its front surface is flat (plano), and its rear surface (R = −62.5 mm) does all the refracting. The ultra-high index permits strong positive power from a single surface with relatively gentle curvature, reducing surface contributions to both spherical aberration and Petzval sum. The refractive index difference between L15 (nd = 1.954) and the lowest-index positive lens in the quartet (L18, nd = 1.593) is Δn = 0.361, satisfying condition (6): 0.100 < nHM − nLm < 0.450. This deliberate index spread allows the designer to balance higher-order aberration contributions across the positive lens sequence.

**L16 — Biconvex Positive (Symmetric)** (nd = 1.59349, νd = 67.0, f = +78.4 mm)
Glass code 593670. Phosphate crown, ED-type (closest catalog: **OHARA S-FPM2** at nd = 1.59522, νd = 67.7 — approximate; the patent value nd = 1.59349 does not exactly match any published catalog entry and may represent a proprietary melt or minor catalog variant). This is one of the 3 ED elements in the production spec. The symmetric biconvex form (R1 = +91.1, R2 = −91.1 mm) minimizes coma at this position in the lens. The patent identifies L16 as "lens L2" — the second of the four positive lenses — and condition (17) governs its shape factor: (R22+R21)/(R22−R21) = 0.000, confirming equiconvex symmetry.

**L17 — Positive Meniscus** (nd = 1.59349, νd = 67.0, f = +118.0 mm)
Same glass as L16: glass code 593670, phosphate crown (ED-type). Another of the 3 non-aspherical ED elements. Its weaker positive power (compared to L15 and L16) and meniscus form (R1 = +54.8, R2 = +240.1) help manage the ray bundle convergence before it enters L18.

**L18 — Biconvex Positive** (nd = 1.59319, νd = 67.9, f = +64.5 mm)
Glass code 593679. Phosphate crown, ED-type (nearest catalog match: **OHARA L-PHM52** at nd = 1.59294, νd = 67.9 — very close, Δnd = 0.00025). The third non-aspherical ED element. L18 is the last of the four positive lenses, contributing strong positive power (f = +64.5 mm) before handing off to the cemented negative element L19.

The 3rd and 4th positive lenses (L17 and L18) satisfy patent conditions (7) and (8), which require nd between 1.450–1.700 and νd between 50–85 for these specific positions, ensuring they use low-dispersion glass to minimize chromatic contribution where the marginal ray height is decreasing toward the stop.

**L19 — Biconcave Negative (cemented to L18)** (nd = 1.73800, νd = 32.3, θgF = 0.5896, f = −37.4 mm)
Glass code 738323. **OHARA S-NBH52** — same glass type as L14 (dense barium flint). The patent identifies L19 as "Ln2" (the negative lens at the image side of the G1 group) and also as the negative component Pn2 adjacent to the four positive lenses. The cemented doublet L18+L19 has a combined focal length of **−98.6 mm** — a net negative power unit that serves as an achromatic corrector. The junction surface (R = −55.0 mm) creates a strong negative interface between the low-dispersion L18 (νd = 67.9) and the higher-dispersion L19 (νd = 32.3), providing powerful axial color correction. The partial dispersion ratio θgF = 0.5896 is listed in the patent and satisfies condition (11): 0.600 < θgF + 0.0021×νd < 0.663, yielding 0.657.

### 3.3 Aperture Stop

Surface 18 is the aperture stop (STO), positioned in the air gap between the G1 group A and G4 group B. At infinity focus, the STO-to-F1 distance is 19.09 mm, providing substantial working space for the focusing mechanism. The production lens uses 11 rounded aperture blades.

### 3.4 G4 Group B — Focus Group G5 (Negative, f = −219.4 mm)

**L41 — Plano-Concave Negative** (nd = 1.72047, νd = 34.7, f = −53.1 mm)
Glass code 720347. **OHARA S-NBH55** (nd = 1.72047, νd = 34.71) — a dense barium flint. Concave toward the object, flat on the image side. A strong negative element that begins the G4 group by diverging the converging beam from the G1 group. This re-divergence is critical for the floating focus mechanism.

**L42 — Biconvex Positive** (nd = 1.59319, νd = 67.9, f = +73.0 mm)
Glass code 593679, the same ED-type phosphate crown used in L18 and L45 (nearest catalog: OHARA L-PHM52). The positive-negative pair L41+L42 forms the G5 focus group with a combined focal length of −219.4 mm (very weak negative). This near-zero net power means F1's primary role is aberration correction rather than significant beam redirection — it acts as a "variator" that adjusts spherical and field aberrations as it translates along the axis during focusing.

### 3.5 G4 Group B — Focus Group G6 (Positive, f = +44.77 mm)

**L43 — Biconvex Positive, 1× Aspherical** (nd = 1.59294, νd = 67.9, f = +78.9 mm)
Glass code 593679. **OHARA L-PHM52** — a **PGM-designated** (Low-Tg, glass-moldable) variant of the ED phosphate crown. The "L-" prefix in Ohara's catalog indicates this glass is specifically formulated for precision glass molding. This is the **aspherical ED element** cited in Nikon's production specifications — the only element that is simultaneously aspherical and ED-type. The rear surface (s24) carries the aspherical profile. The aspherical correction on this surface manages residual spherical aberration in the converging beam of F2.

**L44 — Positive Meniscus, 1× Aspherical** (nd = 1.77503, νd = 47.3, f = +93.4 mm)
Glass code 775473. **OHARA L-LAH85** — another PGM-designated glass, a lanthanum-type with moderate dispersion. Front surface (s25) is aspherical. The two PGM-molded aspherical elements L43 and L44 sit in sequence within F2, providing high-precision wavefront correction exactly where it matters most — in the moving focus group. Their aspherical profiles carry the highest-order coefficients in the system (up to A16), indicating the designer invested maximum correction capability in the focus group to maintain performance across the entire focusing range.

### 3.6 G4 Group B — Final Group G7 (Negative, f = −130.7 mm)

**L45 — Positive Meniscus** (nd = 1.59319, νd = 67.9, f = +135.6 mm)
Glass code 593679, ED-type phosphate crown (same glass as L18, L42). A weak positive meniscus that begins the final group.

**L46 — Plano-Convex Positive (cemented to L47)** (nd = 1.94594, νd = 17.98, θgF = 0.6546, f = +95.2 mm)
Glass code 946180. **OHARA S-NPH7** — an ultra-high-index, ultra-high-dispersion glass with **strong anomalous partial dispersion**. The front surface is convex (R = +90.1 mm) and the rear junction is flat (R = ∞). This element is identified in the patent as "Lens Lp" — a special element satisfying condition (14): θgF + 0.0021×νd > 0.670 (value: 0.692) and condition (15): 15.00 < νd < 35.00 (value: 17.98). S-NPH7 has one of the most extreme partial dispersion characteristics of any commercial glass — its θgF of 0.6546 places it far from the normal line on the θgF-νd diagram. This anomalous dispersion allows L46 to correct secondary chromatic aberration (the residual color that persists after primary achromatization). The patent notes that Lp is preferably located in the final group G7 of the G4 section — placing the secondary-spectrum corrector near the image plane maximizes its effect on lateral (transverse) color while minimizing its contribution to axial aberrations.

**L47 — Plano-Concave Negative (cemented to L46)** (nd = 1.78880, νd = 28.4, f = −47.9 mm)
Glass code 789284. **OHARA S-NBH56**. The cemented doublet L46+L47 has a combined focal length of **−102.7 mm**, forming a powerful negative achromat with anomalous partial dispersion correction. The junction is flat (R = ∞), so all the negative refracting power comes from L47's rear surface (R = +37.8 mm). This geometry simplifies manufacturing of the cemented interface.

**L48 — Biconcave Negative, 1× Aspherical** (nd = 1.62372, νd = 58.4, f = −156.1 mm)
Glass code 624584. No exact catalog match identified; likely a proprietary or uncommon formulation in the barium crown / lanthanum crown family. The final glass element before the sensor (R1 = −124.6, R2 = +448.6 — both surfaces concave). Front surface (s32) is aspherical. As the last refracting element, L48 performs final telecentricity correction and manages residual field aberrations. The production lens includes a low-pass filter stack (nd = 1.51680, 1.6 mm thick) between L48 and the sensor. The back focal distance (air-equivalent from L48's rear surface to the paraxial image) is 12.43 mm — sufficient for the Nikon Z mount's 16 mm flange distance.

---

## 4. Aspherical Surfaces

The design employs **5 aspherical surfaces** across **4 elements**, matching the production specification of "3 aspherical elements + 1 aspherical ED element." All aspherical surfaces use a spherical base conic (K = 0) with even polynomial deformation terms. The patent's aspherical equation uses κ (kappa) = 1 + K; all examples list κ = 1.00000, confirming K = 0 (spherical base).

| Surface | Element | R (mm) | Max Order | Location |
|---|---|---|---|---|
| s3 (front) | L12 | +149.9 | A12 | AF subgroup (front of lens) |
| s4 (rear) | L12 | +47.9 | A14 | AF subgroup |
| s24 (rear) | L43 | −821.3 | A16 | G6 focus group |
| s25 (front) | L44 | +65.7 | A16 | G6 focus group |
| s32 (front) | L48 | −124.6 | A10 | R final group |

The aspherical surfaces are concentrated in two zones: the front of the lens (L12, correcting the wide incoming beam) and the focus mechanism (L43, L44, maintaining correction across the focus range). The rear element L48 provides a minor tertiary correction near the image plane.

Classification for the production specification:

- **3 aspherical elements** (non-ED): L12, L44, L48
- **1 aspherical ED element**: L43 (OHARA L-PHM52, νd = 67.9, PGM-molded)

---

## 5. Glass Selection and ED Elements

The 17 elements use approximately 10 distinct glass types. Nikon specifies "3 ED elements + 1 aspherical ED element" for a total of 4 ED-designated elements. Based on the refractive indices and Abbe numbers in the prescription, the ED elements are identified as follows:

**ED elements (non-aspherical):** Nikon specifies 3 ED elements. Six elements in the prescription use phosphate crown glass with νd ≈ 67–68: L16, L17, L18, L42, L43, and L45. Since L43 is separately counted as the aspherical ED element, the 3 non-aspherical ED elements are drawn from the remaining five (L16, L17, L18, L42, L45). Without access to Nikon's lens construction diagram color-coding, a definitive assignment cannot be made, but L16, L17, and L18 — the three ED-glass elements within the critical four-consecutive-positive-lens sequence in subgroup G3 — are the most likely candidates based on their role in primary chromatic correction.

**Aspherical ED element:** L43 (glass code 593679, nearest catalog: OHARA L-PHM52, νd = 67.9)

Several other elements share the same or similar glass (L42, L45 use the 593679 phosphate crown) but may not be counted among the "3 ED elements" in the marketing spec. Nikon may reserve the ED designation for elements where the low-dispersion property is *functionally critical* to the primary achromatization scheme — i.e., the positive lenses in the consecutive-four sequence within AR — rather than applying it to every element that uses a phosphate crown substrate.

The two most optically exotic glasses are:

1. **S-LAH79** (L15, nd = 1.954, νd = 32.3) — among the highest-index glasses in commercial production, enabling strong positive power from a single plano-convex surface
2. **S-NPH7** (L46, nd = 1.946, νd = 18.0, θgF = 0.655) — a specialty anomalous-dispersion glass for secondary spectrum correction, positioned near the image plane in the final group

A third notable glass is **TAFD5F or equivalent** (L13, nd = 1.921, νd = 24.0), an ultra-high-index dense flint used as a positive meniscus in the AF subgroup. Together, these three elements account for the three highest refractive indices in the system (all nd > 1.92), and their strategic placement is central to the Petzval sum control.

---

## 6. Focusing System

The patent describes a **floating focus** (multi-focus) system with two independently moving groups in the G4 section. This matches Nikon's marketing terminology of "Multi-Focus System" with "two high-precision STM autofocus motors."

### 6.1 Focus Group Assignments

| Component | Elements | Role During Focus |
|---|---|---|
| G1 group A (s1–17) | L11–L19 | **Fixed** — no movement |
| Focus group G5 (s19–22) | L41, L42 | Moves forward (toward object) |
| Focus group G6 (s23–26) | L43, L44 | Moves forward (toward object) |
| Final group G7 (s27–33) | L45–L48 | **Fixed** — no movement |

### 6.2 Focus Travel (Infinity → 0.31 m)

| Gap | ∞ (mm) | Close (mm) | Change |
|---|---|---|---|
| d18 (STO → F1) | 19.089 | 13.738 | −5.351 |
| d22 (F1 → F2) | 2.019 | 3.693 | +1.674 |
| d26 (F2 → R) | 2.000 | 5.676 | +3.676 |
| d33 (R → filter) | 10.380 | 10.380 | 0.000 |

F1 advances **5.351 mm** toward the object, while F2 advances **3.677 mm** — a movement ratio of 0.687. The differential movement between the two groups is what makes this a "floating" focus: by varying the relative spacing of F1 and F2, the system compensates for the aberration changes (particularly spherical aberration and field curvature) that would otherwise degrade image quality at close focus.

The patent's condition (13) governs the power balance between focus groups: fF2/|fF1| = 44.77/219.4 = 0.204, within the required 0.00–0.50 range. The weak negative power of F1 (f = −219 mm) means it primarily acts as an aberration variator, while the stronger positive F2 (f = +44.77 mm) does the heavy lifting of refocusing the image.

Since both the G1 group and the final group G7 are fixed, the lens maintains a **constant overall length** during focusing — a defining feature of internal-focus (IF) designs and essential for weather sealing.

---

## 7. Petzval Sum and Field Curvature

The computed **Petzval sum is +0.001579 mm⁻¹**, corresponding to a Petzval radius of **+633 mm**. For a 35mm f/1.2 lens, this is exceptionally well-corrected — the positive sign is the expected direction for any positive optical system, and the very small magnitude indicates the designer has nearly flattened the Petzval surface. For comparison, a simple f = 34.4 mm singlet in BK7 would have a Petzval sum of ~+0.019 mm⁻¹ — the Z 35/1.2 achieves a value more than an order of magnitude smaller.

This outstanding field flatness is achieved through the deliberate structural asymmetry within the G1 group: the strong negative AF subgroup (f = −24.7 mm) precedes the strong positive AR subgroup (f = +31.5 mm), creating a large separation between positive and negative power contributions. The ratio −fAF/fAR = 0.786 quantifies this balance. The patent's prose (paragraph 77, regarding condition 16) explains that this configuration "raises the marginal ray high through the [front] group A and then lowers it through the [G4] group B, thereby reducing the Petzval sum and simultaneously correcting spherical aberration and field curvature." In other words, the G1 group's internal retrofocus arrangement lifts the marginal ray to large heights where the positive elements' Petzval contributions are partially offset by the negative elements' contributions at high ray heights, and the G4 group then brings the ray back down to form the image.

---

## 8. Chromatic Aberration Strategy

The design employs a multi-tier chromatic correction strategy:

**Primary achromatization** is handled by the cemented doublets (L18+L19 in the G1 group, L46+L47 in the G4 group) and by the distributed ED glass across the four consecutive positive lenses L15–L18. The large Abbe number difference across the L18/L19 cement junction (67.9 vs 32.3, Δν = 35.6) provides powerful primary color correction.

**Secondary spectrum correction** relies on the anomalous partial dispersion glass S-NPH7 in L46 (θgF = 0.6546). Nikon's production documentation states that "three ED glass elements and one aspherical ED glass element enable effective correction of various lens aberrations" — but the secondary spectrum correction actually depends more critically on L46's anomalous dispersion than on the ED elements' low dispersion. The ED elements suppress primary longitudinal color; L46 attacks the residual secondary color that the ED elements alone cannot eliminate.

The front-group negative element L19 also contributes to secondary correction — its θgF = 0.5896 and condition (11) value of 0.657 are specifically called out in the patent, indicating the designer tuned L19's glass choice to minimize secondary spectrum in the large-aperture G1 group where axial color is most damaging.

---

## 9. Coatings

The production lens employs three anti-reflective coating technologies across its 30 glass-air interfaces:

- **Meso Amorphous Coat** — Nikon's highest-performance AR coating, using a mesoporous structure with ultra-low refractive index. Applied to critical surfaces where ghost/flare suppression is paramount.
- **Nano Crystal Coat** — Nikon's established nano-structure coating, particularly effective against diagonal incidence.
- **ARNEO Coat** — Addresses near-vertical incidence reflections.

The combination of all three coatings is consistent with Nikon's most premium lens offerings (Plena, Noct-class).

---

## 10. Design Philosophy and Context

The NIKKOR Z 35mm f/1.2 S represents Nikon's "no compromise" approach to large-aperture prime lens design. Several characteristics distinguish it from more conventional 35mm designs:

**High element count for power distribution.** The 17-element design distributes refractive power across many surfaces, keeping surface curvatures moderate despite the extreme f/1.2 aperture. The four consecutive positive lenses in AR are individually weak (f = +65 to +118 mm) but collectively provide the convergence needed for f/1.2 — spreading the aberration load across many surfaces rather than concentrating it on a few steep ones.

**Ultra-high-index glass usage.** Two elements (L13 at nd = 1.921, L15 at nd = 1.954) employ glasses at or near the upper limit of commercial production. These ultra-high-index materials are essential for controlling the Petzval sum while maintaining the necessary power at f/1.2 — without them, achieving flat-field performance at this aperture would require even more elements.

**PGM aspherical elements in the focus group.** Placing the two most heavily corrected aspherical elements (L43, L44) inside the moving focus group G6 ensures that aberration correction tracks with focus position. This is a sophisticated choice that directly enables the patent's stated goal of maintaining performance "from infinity to close focus."

**Quasi-symmetrical layout.** The G1 group has a negative-then-positive structure; the G4 group mirrors this with a positive-then-negative arrangement (F2 positive, R negative). This approximate symmetry about the aperture stop inherently suppresses odd-order aberrations (coma, distortion, lateral color) — particularly important for a wide-angle lens intended for documentary and street photography where distortion-free rendering is valued.

---

*Analysis based on JP 2025-52870A Example 1 prescription data, verified by independent paraxial ray trace (ABCD matrix method) and thick-lens focal length computation. Glass identifications are best-estimate catalog matches based on nd/νd pairs; production glasses may differ from catalog designations. Manufacturer-published specifications (focal length, aperture, element count) from Nikon Corporation product pages and press releases, February 2025.*
