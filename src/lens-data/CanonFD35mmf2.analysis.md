# Optical Analysis of US 3,748,022: Canon FD 35mm f/2

## Patent Identification

**US Patent 3,748,022** — *Reverse Telephoto Type Lens Prevented from the Deterioration of Image at the Time of Close Shot*

- **Inventor:** Akira Tajima (Kawasaki, Japan)
- **Assignee:** Canon Kabushiki Kaisha (Tokyo, Japan)
- **Filed:** March 3, 1972 (JP priority March 11, 1971, No. 46/12786)
- **Granted:** July 24, 1973
- **Classification:** US 350/214; Int. Cl. G02b 9/64

This patent discloses the optical formula for the **Canon FD 35mm f/2 S.S.C. (I)** — the first version of Canon's professional-grade 35mm wide-angle lens for the FD-mount system, and the first Canon wide-angle interchangeable lens to incorporate what Canon calls a "floating mechanism." This version is identified by its distinctive **concave front element** (R₁ < 0) and is known to employ **thoriated glass elements**, which produce the characteristic yellowing observed in aged examples. The single numerical embodiment given in the patent is the production design.

Canon marketed this lens beginning in March 1973. It was later succeeded by the S.S.C. (II) version (10 elements, 8 groups, convex front element, non-thoriated glass) and eventually by the New FD 35mm f/2 (also 10 elements, 8 groups).

---

## System Overview

The lens is a **reverse telephoto (retrofocus)** design with the following system-level parameters:

| Parameter | Normalized (f = 1) | Physical (f ≈ 35 mm) |
|---|---|---|
| Focal length (computed) | 0.9998 | 35.0 mm |
| Maximum aperture | f/2 | f/2 |
| Minimum aperture | — | f/16 |
| Angular field (2ω) | 64° | 64° |
| Back focal distance (computed) | 1.0844 | 37.95 mm |
| Back focal distance (patent) | 1.1066 | 38.73 mm |
| Closest focusing distance | — | 0.3 m |
| Maximum magnification | — | 0.194× |
| Filter diameter | — | 55 mm |
| Dimensions (∅ × L) | — | 67 × 60 mm |
| Weight | — | 370 g |

*Physical specifications from the Canon Camera Museum; optical parameters computed from the patent prescription.*

The computed BFD of 37.95 mm is approximately 2% shorter than the patent's stated 38.73 mm. This discrepancy reflects cumulative rounding in the normalized prescription — the patent carries most values to only 4 significant figures, and the accumulated effect across 17 surfaces produces a 0.78 mm BFD error. The EFL itself matches to 0.02%, confirming the prescription is correctly transcribed.

The back focal distance — substantially longer than the focal length — is the defining trait of the reverse telephoto configuration and provides the mirror clearance required for single-lens reflex cameras. The Canon FD mount has a flange-to-film distance of 42.0 mm.

---

## Structural Architecture: 9 Elements in 8 Groups

The lens comprises **9 elements arranged in 8 groups**, organized into three functional subgroups:

- **Group G1** (front, negative): Elements 1–2
- **Group II₁** (rear-front, positive): Elements 3–5
- **Group II₂** (rear-back, positive): Elements 6–9

Elements 7 and 8 form a **cemented doublet** sharing surface R₁₄. This is the only cemented group in the design.

A **variable air interval** (d₁₀) separates Groups II₁ and II₂. This interval changes during focusing, which is the central innovation of the patent.

### Verified Group Powers

The following group powers were computed via paraxial matrix ray tracing and verified against the patent's stated values:

| Group | Computed Power (φ) | Patent Value | Match |
|---|---|---|---|
| Group G1 (E1–E2) | −0.6575 | −0.6575 (φ₁) | Exact ✓ |
| Group II₁ (E3–E5) | +1.1551 | +1.1549 (φ₂) | ✓ (rounding) |
| Group II₂ (E6–E9) | +0.367 | — | — |
| Full system | +1.0002 | +1.0000 | ✓ |

The patent defines its key parameters as: φ₁ = power of Group G1, φ₂ = power of Group II₁, and D = 0.4762 = principal point interval between Groups G1 and II₁. It then forms the conditional inequality parameter α:

$$\alpha = \phi_1 + \phi_2 - D\phi_1\phi_2 = -0.6575 + 1.1549 - 0.4762 \times (-0.6575) \times 1.1549 = 0.859$$

This parameter has a direct physical meaning: it is the slope of the marginal ray at the variable air gap for a ray entering the lens at unit height with zero slope. A value of α = 0.859 indicates strong convergence — the marginal ray makes approximately 41° with the optical axis as it crosses the variable gap between Groups II₁ and II₂. The patent requires 0.35 < α < 1.0 for the floating mechanism to effectively correct field curvature without disturbing other aberrations.

---

## Aspheric Surfaces

**There are no aspheric surfaces in this design.** All 17 refracting surfaces are spherical, as is typical of early-1970s Canon wide-angle lens designs. The Canon FD 35mm f/2 S.S.C. achieves its aberration correction entirely through the careful balancing of spherical surface curvatures, glass selection, and the variable air interval focusing mechanism.

---

## Complete Prescription Table

All dimensions are normalized to f = 1. Physical dimensions in millimeters (f ≈ 35 mm, scale factor 35.0×) are provided in parentheses.

| Surface | R | d (to next) | N | V | Element | Medium |
|---|---|---|---|---|---|---|
| R₁ | −5.7760 | 0.0975 (3.41 mm) | 1.69700 | 48.5 | E1 | Glass |
| R₂ | −3.2310 | 0.0028 (0.10 mm) | — | — | — | Air |
| R₃ | +1.8160 | 0.0418 (1.46 mm) | 1.51633 | 64.0 | E2 | Glass |
| R₄ | +0.4944 | 0.3462 (12.12 mm) | — | — | — | Air |
| R₅ | −0.9749 | 0.0972 (3.40 mm) | 1.70154 | 41.1 | E3 | Glass |
| R₆ | −1.0820 | 0.0029 (0.10 mm) | — | — | — | Air |
| R₇ | +1.0720 | 0.0960 (3.36 mm) | 1.70000 | 48.0 | E4 | Glass |
| R₈ | +15.830 | 0.0419 (1.47 mm) | — | — | — | Air |
| R₉ | +1.3330 | 0.2890 (10.12 mm) | 1.77370 | 49.2 | E5 | Glass |
| R₁₀ | +124.10 | **Variable** | — | — | — | Air |
| R₁₁ | −3.8770 | 0.0279 (0.98 mm) | 1.76182 | 26.5 | E6 | Glass |
| R₁₂ | +0.8554 | 0.0905 (3.17 mm) | — | — | — | Air |
| R₁₃ | −1.1700 | 0.0280 (0.98 mm) | 1.80518 | 25.4 | E7 | Glass |
| R₁₄ | +13.960 | 0.1226 (4.29 mm) | 1.77370 | 49.2 | E8 | Glass (cem.) |
| R₁₅ | −0.6989 | 0.0029 (0.10 mm) | — | — | — | Air |
| R₁₆ | +1.9700 | 0.0827 (2.89 mm) | 1.80610 | 40.8 | E9 | Glass |
| R₁₇ | −3.2780 | — | — | — | — | — |

**Variable air interval d₁₀:** 0.1541 (5.39 mm) at infinity focus; 0.1345 (4.71 mm) at the patent's example magnification of 0.118×. The change Δd₁₀ = −0.0196 (−0.69 mm), representing approximately 1.96% of the focal length, is within the patent's stipulated 5% limit.

At the Canon Camera Museum's listed closest focus of 0.3 m (m = 0.194×), the variable gap is estimated at d₁₀ ≈ 0.1219 (4.27 mm), computed from the patent's stated linear proportionality between gap change and forward shift. The total gap decrease of −1.13 mm at MFD is approximately 3.2% of the focal length, still within the 5% limit.

### Aperture Stop Position

The patent does not explicitly label the aperture stop in its prescription table; however, the stop location can be determined from the patent's cross-section drawing (FIG. 1) and corroborated by the marginal ray trace. The iris diaphragm is located **within the variable air gap d₁₀**, between the rear surface of Element 5 (R₁₀) and the front surface of Element 6 (R₁₁). This placement is confirmed by the paraxial ray trace, which shows the marginal ray height decreasing smoothly through the gap: h = 10.13 mm at R₁₀, h = 9.61 mm at the estimated stop position, and h = 8.97 mm at R₁₁.

For the data file, the stop is positioned at approximately 45% of d₁₀ from R₁₀, as inferred from the iris placement in FIG. 1. The stop semi-diameter is 9.6 mm, giving a pupil magnification of approximately 0.91 (entrance pupil SD = 8.75 mm at f/2).

The stop's location within the variable gap has a subtle but important consequence: as d₁₀ decreases during close focusing, the stop shifts fractionally closer to Group II₂, slightly altering the vignetting characteristics and off-axis illumination at close range. The patent's constraint that the gap change not exceed 5% of the focal length ensures this effect remains negligible.

---

## Element-by-Element Analysis

### Element 1 — Front Positive Meniscus (Group G1)

| Property | Value |
|---|---|
| Surfaces | R₁ = −5.776, R₂ = −3.231 |
| Thickness | 0.0975 (3.41 mm) |
| Glass | N₁ = 1.69700, V₁ = 48.5 |
| Shape | Positive meniscus (both surfaces concave toward object; center thicker than edges) |
| Element power | φ = +0.097 (weakly positive) |
| Focal length | +362.5 mm |
| Surface powers | φ₁ = −0.121, φ₂ = +0.216 |

Despite appearing to be a negative meniscus at first glance (both R values negative), Element 1 carries weak positive power because the rear surface is more strongly curved (|R₂| < |R₁|), making the element thicker at the center. Its primary role is to initiate the divergence of off-axis ray bundles entering Group G1, while its concave front surface — the first surface the incoming light encounters — is the defining visual characteristic that distinguishes the S.S.C. (I) from later versions of the Canon FD 35mm f/2. The large radii of curvature (both surfaces have absolute radii exceeding 113 mm) keep surface contributions to spherical aberration and coma manageable at this large aperture position.

**Glass identification:** N = 1.697, V = 48.5 places this glass at the boundary of the lanthanum crown and barium crown families (six-digit code 697485). In the Ohara catalog, the closest equivalent is **S-LAM2** or a barium crown in the SK family. Schott's nearest historical equivalent is **LaK N-2** or **SK14**.

### Element 2 — Strong Negative Meniscus (Group G1)

| Property | Value |
|---|---|
| Surfaces | R₃ = +1.816, R₄ = +0.4944 |
| Thickness | 0.0418 (1.46 mm) |
| Glass | N₂ = 1.51633, V₂ = 64.0 |
| Shape | Negative meniscus (both radii positive; thicker at edges) |
| Element power | φ = −0.752 |
| Focal length | −46.6 mm |
| Surface powers | φ₁ = +0.284, φ₂ = −1.044 |

Element 2 is the primary diverging element in Group G1 and the second-strongest negative element in the system after Element 6 (φ = −1.09). It carries nearly all of Group G1's negative power (−0.752 of the group's −0.658 total). The deeply curved rear surface R₄ = +0.4944 (17.3 mm radius, convex toward the object) is among the strongest individual surfaces in the lens.

**Glass identification:** N = 1.51633, V = 64.0 is an exact match for **BK7** (Schott) / **S-BSL7** (Ohara), the ubiquitous borosilicate crown glass. The use of inexpensive, well-characterized BK7 for this high-power diverging element is deliberate: its low refractive index means that the strong surface curvatures produce the necessary divergence without introducing excessive higher-order aberrations, and its high Abbe number (low dispersion) minimizes the chromatic contribution of this powerful negative element.

### Element 3 — Weakly Negative Meniscus (Group II₁)

| Property | Value |
|---|---|
| Surfaces | R₅ = −0.9749, R₆ = −1.082 |
| Thickness | 0.0972 (3.40 mm) |
| Glass | N₃ = 1.70154, V₃ = 41.1 |
| Shape | Negative meniscus (both surfaces concave toward object; front more steeply curved) |
| Element power | φ = −0.045 |
| Focal length | −785 mm |
| Surface powers | φ₁ = −0.720, φ₂ = +0.648 |

Element 3 sits at the front of Group II₁, immediately after the large 12.1 mm air gap that separates Groups G1 and II. It carries only very weak negative power (f = −785 mm). Its individual surfaces are individually strong (−0.720 and +0.648) but nearly cancelling, which is a hallmark of a field-correction element. The nearly concentric meniscus shape allows it to contribute strongly to the correction of astigmatism and Petzval field curvature without significantly altering the system's axial power balance.

**Glass identification:** N = 1.70154, V = 41.1 falls in the barium flint / lanthanum crown boundary (code 702411). Probable match: **Ohara S-BAH10** or **Schott N-SSK5**.

### Element 4 — Positive Meniscus (Group II₁)

| Property | Value |
|---|---|
| Surfaces | R₇ = +1.072, R₈ = +15.83 |
| Thickness | 0.0960 (3.36 mm) |
| Glass | N₄ = 1.70000, V₄ = 48.0 |
| Shape | Positive meniscus (convex front, nearly flat rear) |
| Element power | φ = +0.610 |
| Focal length | +57.3 mm |
| Surface powers | φ₁ = +0.653, φ₂ = −0.044 |

Element 4 contributes strong positive power, almost entirely from its front surface R₇. The near-flat rear surface (R₈ = +15.83, a radius of 554 mm) contributes negligible power but provides a degree of freedom for correcting higher-order aberrations. This element begins the convergence of the ray bundle that was diverged by Group G1.

**Glass identification:** N = 1.700, V = 48.0 is a lanthanum crown glass (code 700480). Probable match: **Ohara S-LAL7** or **Schott N-LAK22**.

### Element 5 — Thick Positive Meniscus (Group II₁)

| Property | Value |
|---|---|
| Surfaces | R₉ = +1.333, R₁₀ = +124.1 |
| Thickness | 0.2890 (10.12 mm) |
| Glass | N₅ = 1.77370, V₅ = 49.2 |
| Shape | Positive meniscus (convex front, essentially flat rear) |
| Element power | φ = +0.575 |
| Focal length | +60.9 mm |
| Surface powers | φ₁ = +0.580, φ₂ = −0.006 |

Element 5 is the thickest element in the system at 10.1 mm, accounting for roughly 29% of the total focal length. Like Element 4, virtually all its power comes from the front surface; the rear surface R₁₀ is nearly flat (radius 4344 mm). The extreme thickness is a deliberate design choice: thick positive elements allow the designer to control the position of the rear principal plane and fine-tune the back focal distance, which is critical in a retrofocus design that must clear the SLR mirror. The substantial glass path also provides leverage for correcting zonal spherical aberration.

**Glass identification:** N = 1.7737, V = 49.2 is a dense lanthanum crown (six-digit code 774492). No exact match exists in current (lead- and thorium-free) glass catalogs — the closest modern equivalents are Hoya MC-TAF115 (nd = 1.770, Vd = 49.5) and similar TAF-family glasses. The absence of a modern match is consistent with this being a **thorium-doped lanthanum crown** from the early 1970s, which achieved this combination of high index and low dispersion through thorium dioxide additions. This glass type is the strongest candidate for the radioactive element(s) documented in the S.S.C. (I) version. The same glass reappears in Element 8.

### Element 6 — Biconcave Negative Flint (Group II₂)

| Property | Value |
|---|---|
| Surfaces | R₁₁ = −3.877, R₁₂ = +0.855 |
| Thickness | 0.0279 (0.98 mm) |
| Glass | N₆ = 1.76182, V₆ = 26.5 |
| Shape | Biconcave (both surfaces concave, strong rear curvature) |
| Element power | φ = −1.090 |
| Focal length | −32.1 mm |
| Surface powers | φ₁ = −0.197, φ₂ = −0.891 |

Element 6 is the first element after the variable air gap and the strongest negative element by absolute power in the system. Despite being the thinnest element in the lens (under 1 mm), it carries enormous diverging power. The strongly curved rear surface R₁₂ = +0.855 (30 mm radius) dominates. Its low-V flint glass provides significant negative chromatic contribution (φ/V = −0.041), making it the most important single element for chromatic correction of the rear group.

**Glass identification:** N = 1.76182, V = 26.5 is a dense barium flint or short flint glass (code 762265). Probable match: **Ohara S-TIH6** or **Schott N-SF5**.

### Elements 7–8 — Cemented Doublet (Group II₂)

#### Element 7 (Cemented Front — Dense Flint)

| Property | Value |
|---|---|
| Surfaces | R₁₃ = −1.170, R₁₄ = +13.96 |
| Thickness | 0.0280 (0.98 mm) |
| Glass | N₇ = 1.80518, V₇ = 25.4 |
| Shape | Biconcave |
| Element power | φ = −0.691 |
| Focal length | −50.7 mm |

#### Element 8 (Cemented Rear — Lanthanum Crown)

| Property | Value |
|---|---|
| Surfaces | R₁₄ = +13.96, R₁₅ = −0.699 |
| Thickness | 0.1226 (4.29 mm) |
| Glass | N₈ = 1.77370, V₈ = 49.2 |
| Shape | Biconvex (very weak front, strongly curved rear) |
| Element power | φ = +1.105 |
| Focal length | +31.7 mm |

#### Cemented Doublet Net Properties

| Property | Value |
|---|---|
| Net power | φ = +0.481 (positive) |
| Net focal length | +72.7 mm |
| Chromatic balance | φ₇/V₇ + φ₈/V₈ = −0.027 + 0.022 = −0.005 (nearly achromatic) |

The cemented doublet at R₁₄ is a classic achromatic pair using a thin, high-dispersion negative flint element (E7) bonded to a thicker, lower-dispersion positive crown element (E8). The nearly flat cemented interface R₁₄ = +13.96 (489 mm radius) means refraction at the cement is minimal — the chromatic and Petzval correction comes primarily from the strong outer surfaces R₁₃ and R₁₅.

**Glass identification for E7:** N = 1.80518, V = 25.4 is a confirmed exact match for **Schott SF6**, the classical dense flint glass (lead silicate, code 805254). In the Ohara catalog: **S-TIH14**. This was one of the most widely used high-dispersion flint glasses in the 1970s.

**Glass identification for E8:** N = 1.7737, V = 49.2 — the same thoriated dense lanthanum crown as Element 5, confirming the designer's strategy of using matched glass types across the system for fabrication economy and thermal stability.

### Element 9 — Positive Biconvex (Group II₂, Rear)

| Property | Value |
|---|---|
| Surfaces | R₁₆ = +1.970, R₁₇ = −3.278 |
| Thickness | 0.0827 (2.89 mm) |
| Glass | N₉ = 1.80610, V₉ = 40.8 |
| Shape | Biconvex |
| Element power | φ = +0.651 |
| Focal length | +53.8 mm |
| Surface powers | φ₁ = +0.409, φ₂ = +0.246 |

The final element provides positive power distributed across both surfaces (roughly 60/40 front-to-rear). As the rearmost glass element, it plays a critical role in controlling the exit pupil position — essential for SLR viewfinder compatibility — and contributes to final field flattening. The high-index glass (N = 1.806) keeps surface curvatures moderate relative to the power delivered, minimizing aberration contributions at this position where off-axis ray heights are smallest.

**Glass identification:** N = 1.8061, V = 40.8 is a dense lanthanum flint, near the LaF/LaSF boundary (code 806408). Probable match: **Ohara S-LAH53** or **Schott N-LASF43**.

---

## Focusing Mechanism and the Floating Element System

The central innovation of this patent is the **close-focus aberration correction via a variable air interval** — what Canon calls the **"floating mechanism"** in their product literature. In a conventional reverse telephoto lens of this era, focusing was accomplished by shifting the entire lens assembly forward (unit focusing). While adequate for moderate subject distances, this approach caused significant deterioration of image quality at close range — specifically, field curvature and astigmatism worsened dramatically.

Tajima's solution subdivides the positive rear group II into two sub-groups (II₁ and II₂) and introduces a variable air spacing between them that changes in proportion to the forward focusing shift. Canon's Camera Museum describes this as moving "a part of the optical system separated from the focusing lens group to minimize fluctuation of aberrations caused by focusing distance change."

### How it works

The variable air interval d₁₀ sits in a region where the axial ray bundle is convergent. The patent's analysis shows that the marginal ray at this gap has a slope of α = 0.859 (approximately 41° to the axis). The patent's key insight is that changing an air interval in a region of convergent light produces strong correction of field curvature and astigmatism, minimal change to the system's focal length and f-number, and negligible change to spherical aberration and coma.

This last point is counterintuitive. One might expect that changing any internal spacing would disturb all aberrations. However, Tajima demonstrates that when the beam is convergent (α > 0), the rear sub-group II₂ has a longer effective focal length, which attenuates its sensitivity to spacing changes. In the limiting case α → 1, the effective focal length of II₂ approaches infinity, and the system's total power becomes completely insensitive to the variable gap.

### Numerical behavior at the embodiment

At infinity focus, d₁₀ = 0.1541 (5.39 mm). The patent demonstrates the correction at 0.118× magnification, where the gap decreases to d₁₀ = 0.1345 (4.71 mm). The change of −0.69 mm is approximately 2% of the focal length. The Canon Camera Museum lists the lens's actual closest focus as 0.3 m with a maximum magnification of 0.194×, indicating that the floating mechanism operates over a wider range than the patent's single example point.

At MFD 0.3 m (m = 0.194×), the estimated d₁₀ is approximately 4.27 mm, computed from the patent's linear proportionality relation. The total gap change of −1.13 mm (3.2% of EFL) remains well within the 5% limit. The system EFL changes by approximately −0.6% at close focus (from 35.0 to 34.6 mm), confirming the patent's claim that the focal length is substantially preserved.

The patent's aberration diagrams (Figures 2–4) demonstrate:

- **At infinity (Fig. 2):** All aberrations are well corrected. Spherical aberration is balanced, astigmatism is small, and distortion is within approximately −1.5%.
- **At close focus without correction (Fig. 3):** Astigmatism and field curvature deteriorate dramatically. The sagittal and tangential focal surfaces diverge, producing visibly soft corners.
- **At close focus with the variable interval (Fig. 4):** The field curvature and astigmatism are restored to near-infinity levels. Spherical aberration shows only modest change.

---

## Glass Selection Strategy

Tajima's glass choices reveal a coherent design philosophy:

### Crown/flint pairing for chromatic correction

The chromatic correction strategy divides the elements into two functional roles based on the sign of their φ/V contribution: elements with positive φ/V contribute chromatic overcorrection, while those with negative φ/V contribute undercorrection. An achromatic system has Σφ/V = 0.

**Undercorrecting elements** (negative φ/V): E2 (−0.012), E3 (−0.001), E6 (−0.041), E7 (−0.027)

**Overcorrecting elements** (positive φ/V): E1 (+0.002), E4 (+0.013), E5 (+0.012), E8 (+0.022), E9 (+0.016)

The two strongest undercorrectors are E6 and E7 — the high-dispersion flint glasses (V = 26.5 and 25.4) in Group II₂. Their combined undercorrection of −0.068 is balanced primarily by E5 and E8 (the matched lanthanum crown pair) and by E4 and E9.

Note that E9, despite its moderate Abbe number (V = 40.8), acts as a chromatic *overcorrector* because it carries positive power — the sign of the power, not just the dispersion, determines the chromatic role.

### Lanthanum glasses for Petzval correction

Five of the nine elements (E1, E4, E5, E8, E9) use glasses in the lanthanum crown or lanthanum flint families. These high-index, relatively low-dispersion glasses allow the designer to achieve strong refractive power from moderate surface curvatures while keeping the Petzval sum under control.

### Thoriated glass elements

The Canon FD 35mm f/2 S.S.C. (I) is well documented as containing thorium-doped glass elements. Thorium dioxide (ThO₂) was added to optical glass in the 1960s–1970s to achieve high refractive indices with low dispersion — a combination difficult to obtain with conventional glass compositions. The characteristic yellowing observed in aged examples of this lens is caused by radiation-induced color center formation in the thoriated elements.

The most probable thoriated elements in this design are **E5 and E8** (N = 1.7737, V = 49.2). This glass occupies a position on the Abbe diagram (high index, moderately low dispersion) that was historically the primary domain of thoriated lanthanum crowns. No exact match for this glass exists in modern thorium-free catalogs, which explains why Canon needed to redesign the lens with an additional element when thoriated glass was phased out.

### Economic glass pairing

The repeated use of N₅ = N₈ = 1.7737 (the same dense lanthanum crown in both Element 5 and the cemented rear of Element 8) reduces the number of distinct glass types in the bill of materials from nine to eight. This is a practical manufacturing consideration that would have been important in the early 1970s Canon production environment.

### Summary table of glass families

| Element | N | V | Code | Family | Role |
|---|---|---|---|---|---|
| E1 | 1.697 | 48.5 | 697485 | Lanthanum/barium crown | Moderate n, low dispersion |
| E2 | 1.516 | 64.0 | 516640 | Borosilicate crown (BK7) | Low n, very low dispersion |
| E3 | 1.702 | 41.1 | 702411 | Barium flint | Field correction |
| E4 | 1.700 | 48.0 | 700480 | Lanthanum crown | Positive power with low dispersion |
| E5 | 1.774 | 49.2 | 774492 | Dense lanthanum crown (prob. thoriated) | High n, low dispersion |
| E6 | 1.762 | 26.5 | 762265 | Dense barium flint | Strong chromatic corrector |
| E7 | 1.805 | 25.4 | 805254 | Dense flint (SF6, exact match) | Achromatic doublet flint |
| E8 | 1.774 | 49.2 | 774492 | Dense lanthanum crown (prob. thoriated) | Achromatic doublet crown |
| E9 | 1.806 | 40.8 | 806408 | Dense lanthanum flint | High n, moderate dispersion |

---

## Petzval Sum and Field Curvature

The computed Petzval sum of the system is **0.183** (normalized), giving a Petzval radius of **191.7 mm** (5.48 normalized units). For reference, a "perfect" flat-field lens would have a Petzval sum of zero (infinite Petzval radius), while a simple positive thin lens has a Petzval sum equal to its power divided by its refractive index.

The reverse telephoto architecture inherently helps control the Petzval sum because the strong negative front group (φ_I = −0.658) makes a large negative Petzval contribution that partially cancels the positive contributions of the rear group. The use of high-index lanthanum glasses further reduces the Petzval sum by delivering refractive power from smaller surface curvatures. A Petzval radius of 192 mm — about 5.5× the focal length — is a reasonable value for a 35mm wide-angle lens. The remaining field curvature is managed through astigmatism balancing and the variable air interval correction at close focus.

---

## Notes on the Patent Format

A note on reading the prescription data is warranted, as the format used in this patent — common to many early-1970s Japanese optical patents — can be ambiguous. The convention employed is:

- **R** values are listed sequentially for all refracting surfaces
- **d** values represent the axial distance from each surface to the next
- **N** and **V** values for each glass element are printed on the line of the **air gap following** that element, not on the element's own thickness line

This means that N₁ = 1.697 appearing on the d₂ line actually describes the glass filling d₁ (between R₁ and R₂). The convention breaks at cemented groups where consecutive glass thicknesses have no intervening air gap, causing multiple N values to appear on consecutive d lines (as seen with N₇, N₈, N₉ on d₁₄, d₁₅, d₁₆).

The correct assignment was verified computationally: the group powers match the patent's stated values (φ₁ = −0.6575, φ₂ = 1.1549) only under this interpretation, and the full system power evaluates to 1.0002 ≈ 1.0 as required.

---

## References

1. US Patent 3,748,022 — Tajima, A. "Reverse Telephoto Type Lens Prevented from the Deterioration of Image at the Time of Close Shot." Canon Kabushiki Kaisha. Filed March 3, 1972; granted July 24, 1973.
2. Canon Camera Museum. "FD35mm f/2 S.S.C. (I)." Product page with confirmed specifications (9 elements, 8 groups; MFD 0.3 m; max magnification 0.194×; marketed March 1973). https://global.canon/en/c-museum/product/fd142.html
3. Schott AG. *Optical Glass Pocket Catalog.* Glass code 805254 (SF6 / N-SF6). Confirmed match for N₇ = 1.80518, V₇ = 25.4.
