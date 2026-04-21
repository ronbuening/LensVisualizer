# Fujifilm XF 80mm f/2.8 R LM OIS WR Macro — Patent Optical Analysis

**Patent:** US 2018/0246292 A1 — Example 1
**Inventors:** Ryoko Tomioka, Daiki Kawamura (Fujifilm Corporation)
**Filed:** February 27, 2018 | **Priority:** JP 2017-036188, February 28, 2017

---

## 1. Production Lens Identification

Example 1 of US 2018/0246292 A1 is identified as the production design for the **Fujinon XF 80mm f/2.8 R LM OIS WR Macro** based on convergent criteria:

| Parameter | Patent Example 1 | Production Lens |
|---|---|---|
| Focal length | 78.79 mm | 80 mm (nominal) |
| Maximum aperture | f/2.88 | f/2.8 (nominal) |
| Full angle of view | 20.2° | 20.1° |
| Element/group count | 16 / 12 | 16 / 12 |
| Aspherical elements | 1 (double-sided) | 1 |
| ED elements | 3 (S-FPL51 × 2; S-FPM2 × 1, inferred) | 3 ED |
| Super ED elements | 1 (S-FPL55) | 1 Super ED |
| Focus type | Floating (G2 + G3), internal | Floating, internal |
| Image stabilization | G4a perpendicular shift | 5-stop OIS |
| Maximum magnification | β = −1.0 (1:1) | 1:1 |
| Minimum focus distance | ~0.25 m (inferred) | 0.25 m |

The patent focal length of 78.79 mm is rounded to the nominal marketing value of 80 mm. The computed f-number of 2.88 is rounded to f/2.8 for marketing. Fujifilm's official specification of "16 elements in 12 groups, including one aspherical, one Super ED, and three ED lenses" matches the patent prescription exactly. The patent's description of the floating focus system and vibration-proof mechanism also corresponds precisely to Fujifilm's marketing description of a "Floating Focus System" with "inner-focusing" and "5-stop OIS."

**Note:** Fujifilm has not publicly confirmed which patent example corresponds to the production lens. This identification is inferential, based on the above convergent criteria.

---

## 2. System Architecture

The XF 80mm f/2.8 Macro is a four-group design — positive/negative/positive/negative — with the fourth group subdivided into a vibration-proof subgroup (G4a) and a fixed rear subgroup (G4b). The P-N-P-N power arrangement positions some negative refracting power behind the stop, which shifts the rear principal plane forward of the physical lens and provides a moderate back focal distance suitable for the X-mount flange.

**Computed system parameters (paraxial ray trace, verified against patent):**

| Parameter | Value |
|---|---|
| Effective focal length | 78.786 mm (patent: 78.79 mm) |
| f-number (infinity) | f/2.88 |
| Half-field angle ω | 10.1° |
| Total optical track | 140.18 mm |
| Back focal distance | 27.42 mm (air, excl. PP); 31.27 mm (incl. PP) |
| Total track / EFL ratio | 1.78 |
| f-number at β = −1.0 | f/3.99 |

The total track / EFL ratio of 1.78 indicates the lens is substantially longer than its focal length — this is *not* a telephoto design in the classical sense (which would require a ratio below 1.0). The overall length of 140 mm is characteristic of a macro lens that must accommodate the large internal group travel required for 1:1 focusing while maintaining constant external length. The moderate negative power of G4 (|f₄/f| = 1.30) does shift the rear principal plane somewhat forward — the back focal distance of 27.4 mm is only 35% of the EFL — but the primary purpose of the four-group arrangement is to enable floating focus and integrated OIS rather than telephoto compaction.

### Group Powers and Roles

| Group | Elements | Focal Length | f_group / f_sys | Behavior During Focus |
|---|---|---|---|---|
| G1 | L11, L12, L13, L14 | +44.37 mm | 0.563 | Stationary |
| G2 | L21, L22+L23 | −31.02 mm | 0.394 | Moves toward image |
| G3 | L31, L32+L33 | +36.48 mm | 0.463 | Moves toward object |
| G4 | L41+L42, L43 | −25.58 mm | 0.325 | Stationary (VR group) |
| G5 | L51, L52+L53 | +39.54 mm | — | Stationary |
| G4 (total) | G4a + G4b | −102.40 mm | 1.300 | Stationary |

The front group G1 carries the bulk of the positive refracting power and collects light. The strongly negative G2 and strongly positive G3 form a focusing doublet that moves in opposition — a floating focus architecture that maintains aberration correction across the enormous focus range from infinity to 1:1. The overall negative G4 houses the OIS mechanism in G4a while G4b provides final chromatic and field curvature trimming near the image.

---

## 3. Air-Separated Groups (12 Groups)

The 16 elements divide into 12 air-separated optical groups, matching Fujifilm's published specification:

| # | Element(s) | Configuration | Parent Group |
|---|---|---|---|
| 1 | L11 | Standalone biconvex | G1 |
| 2 | L12 | Standalone biconvex | G1 |
| 3 | L13 | Standalone biconcave negative | G1 |
| 4 | L14 | Standalone biconvex (aspherical) | G1 |
| 5 | L21 | Standalone biconcave negative | G2 |
| 6 | L22 + L23 | Cemented doublet | G2 |
| 7 | L31 | Standalone biconvex | G3 |
| 8 | L32 + L33 | Cemented doublet | G3 |
| 9 | L41 + L42 | Cemented doublet | G4a |
| 10 | L43 | Standalone negative meniscus | G4a |
| 11 | L51 | Standalone positive meniscus | G4b |
| 12 | L52 + L53 | Cemented doublet | G4b |

---

## 4. Element-by-Element Analysis

### Group 1 — Front Positive Group (Stationary)

G1 is composed of four air-spaced elements and carries a net focal length of +44.37 mm. It remains fixed during both focusing and OIS operation, providing a mechanically stable front assembly that prevents dust intrusion and avoids disturbing macro subjects.

**L11 — Positive biconvex (Element 1)**
- Glass: nd = 1.72916, νd = 54.67 → **OHARA S-LAL18** (lanthanum crown)
- Thin-lens focal length: +82.2 mm
- Radii: R₁ = +119.842 mm, R₂ = −119.842 mm (symmetric biconvex)
- Role: First collector element. The symmetric biconvex form minimizes coma at the design conjugate. The moderate-index lanthanum crown provides good aberration correction without excessive surface curvatures.

**L12 — Positive biconvex (Element 2) — ED Glass**
- Glass: nd = 1.49700, νd = 81.54 → **OHARA S-FPL51** (Extra-low Dispersion)
- Thin-lens focal length: +75.7 mm
- Radii: R₁ = +59.897 mm, R₂ = −101.295 mm
- Role: Primary chromatic corrector in the front group. The anomalous partial dispersion of S-FPL51 enables correction of secondary spectrum. Paired with the neighboring flint L13, the Abbe number difference νd(L12) − νd(L13) = 45.84 satisfies the patent's Conditional Expression (3) (35 < Δν < 50), ensuring strong longitudinal chromatic aberration correction at infinity focus without overcorrection.

**L13 — Negative biconcave (Element 3)**
- Glass: nd = 1.62588, νd = 35.70 → **OHARA S-TIM35** (dense flint)
- Thin-lens focal length: −31.0 mm
- Radii: R₁ = −67.240 mm, R₂ = +27.219 mm
- Role: Chromatic counterpart to L12. The high-dispersion flint works against the low-dispersion ED glass to achromatize the front group. Its strong negative power also contributes to Petzval sum correction — critical for a macro lens that must maintain a flat field from infinity to 1:1.

**L14 — Positive biconvex, double asphere (Element 4) — Aspherical Element**
- Glass: nd = 1.58313, νd = 59.46 → **OHARA S-BAL41** (barium crown)
- Thin-lens focal length: +32.4 mm
- Radii: R₁ = +25.205 mm (asph), R₂ = −75.345 mm (asph)
- Role: This is the single aspherical element in the design, carrying aspherical correction on both surfaces. It is the strongest positive element in G1 and sits at the position of greatest marginal ray height within the front group, making it the most effective location for controlling spherical aberration. Both surfaces share KA = 1.0 (K = 0 in standard convention), meaning the base curves are spherical and all aspherical departure comes from the even-order polynomial coefficients A₄ through A₂₀. At the estimated clear aperture (h ≈ 13 mm), the front surface departs approximately −164 μm from its base sphere, while the rear departs −70 μm. Both departures are negative, meaning both surfaces are slightly flatter at the rim than their base spheres — the classic correction profile for undercorrected spherical aberration.

### Group 2 — Negative Focusing Group (Moves Toward Image)

G2 has a net focal length of −31.02 mm and is one of two floating focus groups. During focusing from infinity to 1:1, G2 translates +15.35 mm toward the image, opening the gap between G1 and G2 from 2.34 mm to 17.69 mm.

**L21 — Negative biconcave (Element 5)**
- Glass: nd = 1.58913, νd = 61.13 → **OHARA S-BSM2** (barium crown)
- Thin-lens focal length: −31.2 mm
- Radii: R₁ = −115.008 mm, R₂ = +21.887 mm (both surfaces concave)
- Role: The leading element of the front focus group. Both surfaces are concave, with the strongly curved rear surface (R₂ = +21.9 mm) doing most of the diverging work. The relatively low-dispersion glass keeps chromatic contribution manageable during focus travel.

**L22 + L23 — Cemented doublet (Elements 6 + 7)**
- L22: nd = 1.67300, νd = 38.15 → Barium flint; **nearest catalog match: HOYA NBFD3** (nd = 1.67339, νd = 38.26; Δnd = +0.0004, Δνd = +0.11). No exact OHARA equivalent identified. Possible proprietary melt selection.
- L23: nd = 2.00069, νd = 25.46 → **OHARA S-NPH5** (ultra-high index dense flint)
- Standalone thin-lens focal lengths: L22 ≈ −29.3 mm, L23 ≈ +29.1 mm (near-zero combined power)
- Role: This is a chromatic corrector doublet — the two elements have nearly canceling powers, so their primary contribution is to the chromatic balance of G2 rather than its net refracting power. The use of S-NPH5 (nd = 2.001, one of the highest-index optical glasses commercially available) allows the cemented junction surface at R = +22.32 mm to carry strong chromatic correction with minimal surface curvature. The Abbe number difference of only 12.7 between L22 and L23 is unusually small for an achromatic doublet, reflecting the fact that this pair is optimized for chromatic fine-tuning during focus shift rather than primary achromatization.

### Aperture Stop

The aperture stop sits between G2 and G3 at surface 14 (R = ∞, a flat surface). At infinity focus, the gap from G2's rear surface to the stop is 20.39 mm, and from the stop to G3's front surface is 19.53 mm. Both gaps collapse dramatically at 1:1 focus (to 5.04 mm and 3.58 mm respectively), as the two focus groups converge toward the stop from opposite sides.

### Group 3 — Positive Focusing Group (Moves Toward Object)

G3 has a net focal length of +36.48 mm and is the second floating focus group. During focusing from infinity to 1:1, G3 translates 15.95 mm toward the object side, closing the gap between the stop and G3 while opening the gap between G3 and G4.

**L31 — Positive biconvex (Element 8) — Super ED Glass**
- Glass: nd = 1.43875, νd = 94.66 → **OHARA S-FPL55** (Super Extra-low Dispersion)
- Thin-lens focal length: +67.4 mm
- Radii: R₁ = +75.243 mm, R₂ = −48.692 mm
- Role: The most optically exotic element in the design. S-FPL55 is a calcium fluoride equivalent — its refractive index (1.439) and Abbe number (94.7) are nearly identical to crystalline fluorite (CaF₂: nd ≈ 1.434, νd ≈ 95.3), but it is a synthetic glass that can be polished conventionally. Its extreme anomalous partial dispersion makes it the most effective material available for correcting secondary spectrum. Placed at the front of the rear focus group, L31 provides the backbone of the lens's chromatic correction across the entire focus range. This is the element Fujifilm designates as the "Super ED" lens.

**L32 + L33 — Cemented doublet (Elements 9 + 10) — Contains ED Glass**
- L32: nd = 1.49700, νd = 81.54 → **OHARA S-FPL51** (ED glass)
- L33: nd = 1.84666, νd = 23.78 → **OHARA S-NPH4** (high-index dense flint)
- Standalone thin-lens focal lengths: L32 ≈ +41.1 mm, L33 ≈ −90.7 mm; combined (thick-lens): approximately +75 mm
- Abbe number difference: 57.76 — the largest Δν in the design
- Role: Powerhouse achromatic doublet of the rear focus group. The enormous Δν provides aggressive chromatic correction, particularly important because this group moves during focusing. L32's S-FPL51 reinforces secondary spectrum correction. L33's S-NPH4 (nd = 1.847, νd = 23.78) provides a strong chromatic lever arm against L32 without requiring excessive surface curvatures.

### Group 4a — Vibration Reduction Group (OIS, Stationary Along Axis)

G4a has a net focal length of −25.58 mm and translates perpendicular to the optical axis for image stabilization, shifting the image on the sensor to compensate for camera shake. Its |f₄ₐ/f| = 0.325 satisfies Conditional Expression (1).

**L41 + L42 — Cemented doublet (Elements 11 + 12)**
- L41: nd = 2.00272, νd = 19.32 → **OHARA S-NPH7** (ultra-high index dense flint)
- L42: nd = 1.69700, νd = 48.52 → **OHARA S-LAM66** (lanthanum crown)
- Standalone focal lengths: L41 ≈ +52.6 mm (positive), L42 ≈ −24.3 mm (negative)
- Conditional (2): ν₄ₐᵦ − ν₄ₐₐ = 29.20 (within 18–35 range)
- Role: VR cemented doublet. L41's nd = 2.003 is one of the highest refractive indices used in production optics. The positive-negative arrangement provides internal achromatization of the VR group, suppressing chromatic aberration generation during lateral shift.

**L43 — Negative meniscus (Element 13) — ED Candidate**
- Glass: nd = 1.53775, νd = 74.70 → **OHARA S-FPM2** (fluorophosphate)
- Thin-lens focal length: −63.3 mm
- Radii: R₁ = +395.226 mm (nearly flat), R₂ = +31.350 mm (strongly curved)
- Conditional (9): ν₄ₐc = 74.70 (within 60–100 range)
- Role: Third element of the VR group. Its high νd of 74.70 satisfies Conditional Expression (9), which the patent identifies as important for suppressing chromatic aberration during OIS operation. S-FPM2 is a fluorophosphate glass with moderate anomalous partial dispersion — not as exotic as S-FPL51 or S-FPL55, but it sits above the normal line on the glass map and is the only remaining candidate to account for Fujifilm's third "ED" element designation.

### Group 4b — Rear Fixed Group (Stationary)

G4b has a net focal length of +39.54 mm and remains stationary during all operations.

**L51 — Positive meniscus (Element 14)**
- Glass: nd = 1.95375, νd = 32.32 → **OHARA S-LAH79** (ultra-high index lanthanum)
- Thin-lens focal length: +41.5 mm
- Radii: R₁ = +37.523 mm, R₂ = +709.784 mm
- Role: Strong positive element using ultra-high-index lanthanum glass. Its positive power partially counteracts G4a's negative power, bringing the net G4 power to a moderate −102.4 mm. Significant contributor to Petzval sum and field curvature control.

**L52 + L53 — Cemented doublet (Elements 15 + 16)**
- L52: nd = 1.51680, νd = 64.20 → **OHARA S-BSL7 / Schott N-BK7** (standard borosilicate crown)
- L53: nd = 1.95906, νd = 17.47 → **OHARA S-NPH53** (ultra-high index dense flint)
- Standalone focal lengths: L52 ≈ +48.2 mm, L53 ≈ −48.9 mm
- Abbe number difference: 46.73
- Role: The final optical doublet before the image plane. L53's νd = 17.47 (the lowest Abbe number in the design) provides extreme chromatic leverage. Position close to the sensor gives strong influence over lateral color correction.

---

## 5. The Aspherical Element — L14 in Detail

L14 is the sole aspherical element, carrying polynomial aspherical correction on both its front (surface 7) and rear (surface 8) surfaces. The aspherical form uses KA = 1.0 (equivalent to K = 0 in standard notation — spherical base curve) with all departure from the polynomial terms A₄ through A₂₀.

### Aspherical Coefficients

| Coefficient | Surface 7 (front) | Surface 8 (rear) |
|---|---|---|
| R (mm) | +25.2054 | −75.3450 |
| K | 0 | 0 |
| A₄ | −3.4417 × 10⁻⁶ | −5.6321 × 10⁻⁷ |
| A₆ | −1.0271 × 10⁻⁸ | −7.1694 × 10⁻⁹ |
| A₈ | +7.8474 × 10⁻¹¹ | +5.3448 × 10⁻¹¹ |
| A₁₀ | −1.3013 × 10⁻¹² | −8.2555 × 10⁻¹³ |
| A₁₂ | +5.9809 × 10⁻¹⁵ | +2.0691 × 10⁻¹⁵ |
| A₁₄ | +1.5650 × 10⁻¹⁷ | +8.6700 × 10⁻¹⁸ |
| A₁₆ | −3.3871 × 10⁻¹⁹ | −2.1215 × 10⁻²⁰ |
| A₁₈ | +1.5230 × 10⁻²¹ | −2.8133 × 10⁻²² |
| A₂₀ | −2.5293 × 10⁻²⁴ | +7.4217 × 10⁻²⁵ |

### Aspherical Departure from Base Sphere

| Height h (mm) | Surface 7 departure (μm) | Surface 8 departure (μm) |
|---|---|---|
| 3.0 | −0.3 | −0.1 |
| 6.0 | −4.9 | −1.0 |
| 9.0 | −27.6 | −7.4 |
| 12.0 | −107.2 | −40.2 |
| 13.0 | −164.5 | −70.2 |

Both surfaces are flatter at the rim than their base spheres (negative departure). The front surface carries approximately 2.3× more departure than the rear. The departures are well within conventional CNC polishing capability. Precision glass molding (PGM) is unlikely for this element: S-BAL41 has a glass transition temperature of approximately 557°C — above the typical PGM threshold — and is not listed in OHARA's moldable glass catalog.

The positioning of L14 within G1 is optimal: it sits at the last position in the front group, where the marginal ray height is still large but the chief ray has begun to converge toward the stop. This gives the aspherical correction strong leverage over both spherical aberration (via the marginal ray) and coma (via the chief ray height), which is why a single aspherical element suffices for the entire 16-element design.

---

## 6. Focusing Mechanism — Floating Focus

The lens employs a **floating focus** system with two independently moving groups (G2 and G3) driven by linear motors. G1 and G4 remain mechanically fixed along the optical axis.

### Variable Gap Behavior

| Gap | Location | Infinity (mm) | β = −1.0 (mm) | Change |
|---|---|---|---|---|
| DD[8] | G1 → G2 | 2.34 | 17.69 | +15.35 |
| DD[13] | G2 → Stop | 20.39 | 5.04 | −15.35 |
| DD[14] | Stop → G3 | 19.53 | 3.58 | −15.95 |
| DD[19] | G3 → G4 | 6.50 | 22.45 | +15.95 |
| **Sum** | | **48.76** | **48.76** | **0.00** |

The total variable gap sum is exactly conserved at 48.76 mm, confirming constant overall lens length during focusing. The two focus groups travel nearly equal distances in opposite directions: G2 retreats 15.35 mm toward the image while G3 advances 15.95 mm toward the object. At 1:1 magnification, the two groups nearly converge on the stop — the gap from G2 to the stop shrinks to 5.04 mm and from the stop to G3 to 3.58 mm.

### Why Floating Focus Matters for Macro

A conventional unit-focus macro lens suffers progressive aberration degradation as the conjugate ratio approaches 1:1, because the lens was optimized for a single conjugate. The floating focus approach splits the focusing function between two groups with opposite signs (G2 negative, G3 positive), allowing the designer to balance aberration contributions at both conjugates simultaneously. The patent's aberration diagrams (FIG. 9) confirm this: the spherical aberration curves at infinity (FNo = 2.88) and at β = −1.0 (FNo = 3.99) are both well-corrected.

---

## 7. Optical Image Stabilization

The fourth-a lens group (G4a) serves as the vibration-proof group, translating perpendicular to the optical axis. This mechanism is rated at 5 stops of stabilization in the production lens.

### VR Group Design Rationale

**Conditional (1):** |f₄ₐ/f| = 0.325 — keeps the VR group's power strong enough (|f₄ₐ| = 25.58 mm) that only modest lateral shifts are needed to achieve the required image displacement.

**Conditional (8):** |(1 − β₄ₐ) × β₄ᵦ| = 1.450 — controls the "VR sensitivity," the ratio between the image shift and the lateral translation of G4a. A value of 1.45 means the image moves 1.45× further than the lens group, providing good correction amplification while keeping sensitivity manageable.

The three-element construction of G4a (cemented doublet + singlet) minimizes aberration degradation during off-axis displacement. The cemented pair (L41 + L42) provides internal achromatization so the group doesn't generate chromatic aberration as it shifts. The separated singlet L43, made from S-FPM2 (ν₄ₐc = 74.70, satisfying Conditional Expression 9), provides additional chromatic fine-tuning.

---

## 8. Glass Selection Strategy

The design uses 10 distinct glass types across 16 elements.

### Summary Table

| Element | Catalog Glass | nd | νd | Classification | Special Property |
|---|---|---|---|---|---|
| L11 | S-LAL18 | 1.72916 | 54.67 | Lanthanum crown | — |
| L12 | S-FPL51 | 1.49700 | 81.54 | ED glass | Anomalous partial dispersion |
| L13 | S-TIM35 | 1.62588 | 35.70 | Dense flint | — |
| L14 | S-BAL41 | 1.58313 | 59.46 | Barium crown | Aspherical substrate |
| L21 | S-BSM2 | 1.58913 | 61.13 | Barium crown | — |
| L22 | *(see note)* | 1.67300 | 38.15 | Barium flint | Nearest: HOYA NBFD3 |
| L23 | S-NPH5 | 2.00069 | 25.46 | Ultra-high index flint | nd > 2.0 |
| L31 | **S-FPL55** | 1.43875 | 94.66 | **Super ED** | **Fluorite-equivalent APD** |
| L32 | S-FPL51 | 1.49700 | 81.54 | ED glass | Anomalous partial dispersion |
| L33 | S-NPH4 | 1.84666 | 23.78 | High-index dense flint | — |
| L41 | S-NPH7 | 2.00272 | 19.32 | Ultra-high index flint | nd > 2.0 |
| L42 | S-LAM66 | 1.69700 | 48.52 | Lanthanum crown | — |
| L43 | S-FPM2 | 1.53775 | 74.70 | Fluorophosphate | Moderate APD |
| L51 | S-LAH79 | 1.95375 | 32.32 | Ultra-high index lanthanum | nd ≈ 1.95 |
| L52 | S-BSL7 | 1.51680 | 64.20 | Borosilicate crown (N-BK7) | — |
| L53 | S-NPH53 | 1.95906 | 17.47 | Ultra-high index flint | Lowest νd in design |

**Note on L22:** The patent values nd = 1.67300, νd = 38.15 have no exact match in the current OHARA catalog. The nearest identified glass is **HOYA NBFD3** (nd = 1.67339, νd = 38.26; Δnd = +0.0004, Δνd = +0.11), which is within typical melt variation tolerance. OHARA S-BAH32 (nd = 1.66998, νd = 39.27) is a more distant second candidate. This may reflect a proprietary melt selection or a glass from a secondary supplier.

### Chromatic Correction Architecture

The design achieves chromatic correction through four achromatic "engines" distributed across the lens:

1. **G1 air-spaced pair (L12/L13):** S-FPL51 (νd = 81.5) vs. S-TIM35 (νd = 35.7), Δν = 45.8. Primary achromatization and secondary spectrum correction for the front group.

2. **G3 cemented doublet (L32/L33):** S-FPL51 (νd = 81.5) vs. S-NPH4 (νd = 23.8), Δν = 57.8. The largest Abbe number difference in the design, providing aggressive chromatic correction in the rear focus group.

3. **G4a cemented doublet (L41/L42):** S-NPH7 (νd = 19.3) vs. S-LAM66 (νd = 48.5), Δν = 29.2. Internal achromatization of the VR group.

4. **G4b cemented doublet (L52/L53):** S-BSL7 (νd = 64.2) vs. S-NPH53 (νd = 17.5), Δν = 46.7. Final chromatic trim near the image plane.

The Super ED element L31 (S-FPL55) sits between these pairs, providing the critical anomalous partial dispersion correction that reduces secondary spectrum.

### Ultra-High Index Glasses

Three elements use glasses with nd approaching or exceeding 2.0: L23 (2.001), L41 (2.003), and L51/L53 (1.954/1.959). These ultra-high-index materials allow strong refractive power with reduced surface curvature, reducing higher-order aberrations. The tradeoff is high dispersion, so each appears cemented to or paired with a lower-dispersion partner.

---

## 9. Conditional Expression Verification

All nine of the patent's conditional expressions are satisfied by Example 1:

| # | Expression | Computed Value | Required Range | Status |
|---|---|---|---|---|
| (1) | \|f₄ₐ/f\| | 0.325 | 0.25 – 0.45 | ✓ |
| (1-1) | \|f₄ₐ/f\| | 0.325 | 0.29 – 0.42 | ✓ |
| (2) | ν₄ₐᵦ − ν₄ₐₐ | 29.2 | 18 – 35 | ✓ |
| (2-1) | ν₄ₐᵦ − ν₄ₐₐ | 29.2 | 27 – 35 | ✓ |
| (3) | ν₁ᵦ − ν₁c | 45.8 | 35 – 50 | ✓ |
| (4) | f₁/f | 0.563 | 0.5 – 0.7 | ✓ |
| (4-1) | f₁/f | 0.563 | 0.55 – 0.67 | ✓ |
| (5) | \|f₂/f\| | 0.394 | 0.35 – 0.6 | ✓ |
| (5-1) | \|f₂/f\| | 0.394 | 0.38 – 0.57 | ✓ |
| (6) | f₃/f | 0.463 | 0.4 – 0.5 | ✓ |
| (6-1) | f₃/f | 0.463 | 0.42 – 0.5 | ✓ |
| (7) | \|f₄/f\| | 1.300 | 0.5 – 2.0 | ✓ |
| (7-1) | \|f₄/f\| | 1.300 | 0.6 – 1.5 | ✓ |
| (8) | \|(1−β₄ₐ)×β₄ᵦ\| | 1.450 | 1.0 – 2.0 | ✓ |
| (8-1) | \|(1−β₄ₐ)×β₄ᵦ\| | 1.450 | 1.3 – 1.6 | ✓ |
| (9) | ν₄ₐc | 74.70 | 60 – 100 | ✓ |
| (9-1) | ν₄ₐc | 74.70 | 70 – 100 | ✓ |

All values satisfy both the primary and tightened conditional expression ranges.

---

## 10. Design Summary

The Fujifilm XF 80mm f/2.8 R LM OIS WR Macro (as represented by Example 1) is a four-group positive-negative-positive-negative macro lens with floating focus and integrated optical image stabilization. Its 16 elements span 10 distinct glass types, ranging from the fluorite-equivalent S-FPL55 (νd = 94.7) to the ultra-high-dispersion S-NPH53 (νd = 17.5), with three elements using nd > 1.95. A single double-sided aspherical element in the front group controls spherical aberration and coma across the entire focus range.

The design's defining achievement is maintaining high optical performance across an enormous conjugate range — from infinity to 1:1 magnification — while simultaneously providing 5-stop image stabilization and a sealed, constant-length barrel. The floating focus architecture, with G2 and G3 traveling ±15–16 mm in opposite directions, allows independent optimization at both conjugates rather than accepting the progressive degradation inherent in simpler unit-focus designs.

---

*Document prepared from US 2018/0246292 A1, Example 1 prescription data. Glass identifications are inferential based on nd/νd matching against published catalog values (OHARA, HOYA). L22 glass identification remains uncertain — nearest match is HOYA NBFD3 (Δnd = +0.0004, Δνd = +0.11). All focal lengths and conditional expression values independently computed via paraxial ray trace and verified against the patent's Table 28.*
