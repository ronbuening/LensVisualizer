# Optical Analysis: NIKKOR Z 70-200mm f/2.8 VR S

**Patent WO2020/105104 A1 — Example 1 (Nikon Corporation)**

**Inventor:** Ken Uehara  
**Filed:** November 20, 2018 (PCT/JP2018/042763)  
**Published:** May 28, 2020  

---

## 1. Patent-to-Production Identification

Example 1 of WO2020/105104 describes a variable-magnification optical system with the following characteristics:

- **21 elements in 9 zoom groups** (18 marketing groups when cemented pairs are counted as single units)
- **Zoom ratio:** 2.74× (f = 71.5–196 mm)
- **Maximum aperture:** f/2.88 (wide) to f/2.88 (tele)
- **Image circle:** 43.4 mm diameter (Y = 21.70 mm half-height)
- **Two aspherical surfaces**, surfaces 26 and 37
- **Six elements** of nd = 1.49782, νd = 82.57 (ED glass)
- **One element** of nd = 1.43385, νd = 95.25 (fluorite, CaF₂)
- **One element** of nd = 1.66382, νd = 27.35, θgF = 0.6319 (SR glass)

The production NIKKOR Z 70-200mm f/2.8 VR S (released August 2020) is specified as 21 elements in 18 groups, incorporating 6 ED elements, 2 aspherical elements, 1 fluorite element, and 1 SR element — covering 70–200 mm at f/2.8 for an FX-format (43.2 mm diagonal) image circle. Every structural parameter matches. The slight differences in focal-length range (71.5–196 vs. 70–200) and f-number (2.88 vs. 2.8) are consistent with the normal tolerances between patent numerical examples and production-tuned designs. Example 1 is the production design basis.

---

## 2. Group Structure and Zoom/Focus Architecture

The lens comprises nine zoom groups with a classic positive-lead telephoto zoom architecture: G1(+)–G2(−)–G3(+) as the front variator section, followed by a rear relay of G4 through G9.

### 2.1 Group Summary

| Group | Power | f (mm) | Elements | Motion During Zoom |
|-------|-------|--------|----------|--------------------|
| G1 | + | +148.0 | L11+L12 (cemented), L13 | **Fixed** (relative to image plane) |
| G2 | − | −40.6 | L21, L22, L23, L24 | Moves (variator) |
| G3 | + | +110.7 | L31 | Moves toward image (W→T) |
| G4 | + | +69.8 | L41, L42 | **Fixed** |
| G5 | − | −62.6 | Stop + L51+L52 (cemented) | Moves (with aperture stop) |
| G6 | + | +56.9 | L61, L62+L63 (cemented), L64 | **Fixed** |
| G7 | − | −87.3 | L71, L72 | **Focus Group 1** (→ image side) |
| G8 | + | +66.6 | L81 | **Focus Group 2** (→ object side) |
| G9 | − | −76.3 | L91, L92 | **Fixed** |

During zooming from 71.5 mm (wide) to 196 mm (tele), G2, G3, G5, G7, and G8 translate axially, while G1, G4, G6, and G9 remain fixed relative to the image plane. G1 being fixed is a hallmark of modern internal-zoom telephoto designs — the front element does not move, enabling a sealed, weather-resistant barrel of constant length.

### 2.2 Functional Architecture

**Front variator (G1–G3):** The positive first group collects light and establishes the entrance pupil size. The negative second group is the primary variator — its large axial excursion (D5 changes from 1.6 mm at wide to 49.5 mm at tele) produces the magnification change. The positive third group acts as a compensator, moving image-side during zooming to maintain focus on the image plane while the variator moves.

**Central relay (G4–G6):** G4 and G6 are fixed positive groups that relay the image through the interior of the lens. G5, a cemented negative doublet carrying the aperture stop, moves during zooming. The stop traveling with G5 helps maintain relatively constant f-number across the zoom range (f/2.88 at both wide and tele).

**Rear focus and correction section (G7–G9):** G7 and G8 are the dual-group focusing system (see §4 below). G9 is a fixed negative group serving as a field flattener and final aberration corrector, incorporating one of the two aspherical elements. The overall negative power of the rear section (G7+G8+G9 combined) creates a telephoto ratio well below 1.0, keeping the physical length shorter than the focal length at the tele end.

---

## 3. Glass Identification and Element-by-Element Analysis

### 3.1 Glass Identification Methodology

Glass types were identified by matching the patent's nd/νd pairs against the HOYA Glass Cross Reference Index, which provides six-digit glass codes and equivalent designations across HOYA, Schott, OHARA, Hikari, Sumita, and CDGM catalogs. The six-digit code encodes nd (first three digits after the decimal) and νd (last three digits, ×10). Where no exact match exists in the cross-reference table, the identification is noted as uncertain. Nikon may use proprietary glass formulations or source from suppliers (Hikari, Sumita) whose full catalogs are not publicly cross-referenced; in such cases only the glass family and approximate properties are stated.

### 3.2 Specialty Glass Summary

| Designation | nd | νd | θgF | Patent Elements | Count |
|-------------|-------|-------|-------|-----------------|-------|
| ED (S-FPL52 equivalent) | 1.49782 | 82.57 | — | L12, L22, L24, L41, L42, L52 | 6 |
| Fluorite (CaF₂) | 1.43385 | 95.25 | — | L13 | 1 |
| SR (Nikon proprietary) | 1.66382 | 27.35 | 0.6319 | L23 | 1 |
| Aspherical | — | — | — | L62, L91 | 2 |

The six ED elements all share identical nd/νd values (1.49782/82.57), which is a near-exact match for OHARA S-FPL52 (nd = 1.49782, νd = 82.56). S-FPL52 is a fluorophosphate crown with extremely low dispersion and positive anomalous partial dispersion (ΔPgF > 0), making it ideal for secondary spectrum correction in telephoto systems. Nikon may manufacture an equivalent proprietary formulation, but the optical properties are functionally identical.

The fluorite element L13 (nd = 1.43385, νd = 95.25) is a calcium fluoride monocrystal. CaF₂ has the lowest refractive index and highest Abbe number of any practical optical material, providing unmatched chromatic correction per unit power. Its position in G1 — where it carries significant positive refracting power across the full aperture — maximizes its contribution to longitudinal chromatic aberration (LoCA) correction. The low density of CaF₂ (3.18 g/cm³ vs. ~3.5–4.5 for equivalent optical glasses) also contributes to weight savings in this large-diameter front element.

The SR element L23 (nd = 1.66382, νd = 27.35, θgF = 0.6319) is Nikon's proprietary Short-wavelength Refractive glass. This is a high-index, high-dispersion glass with strongly anomalous partial dispersion — it refracts short-wavelength (blue/violet) light far more than the normal-line relationship would predict. The patent verifies this through conditions (8)–(10):

- Condition (8): 18.0 < νdP < 35.0 → νdP = 27.35 ✓
- Condition (9): 1.83 < ndP + 0.01425 × νdP < 2.12 → 1.66382 + 0.3897 = **2.0536** ✓
- Condition (10): 0.702 < θgFP + 0.00316 × νdP → 0.6319 + 0.0864 = **0.7183** ✓

The physical meaning of condition (10) is particularly important: it quantifies the anomalous partial dispersion of the SR glass. A θgF + 0.00316×νd value of 0.7183, well above the threshold of 0.702, indicates that this glass has a much higher ratio of blue-to-violet dispersion relative to its overall F–C dispersion than normal glasses on the Abbe diagram. By placing this positive element in G2 — the negative variator group — Nikon creates a secondary-spectrum correction mechanism: the SR element's anomalous dispersion partially counterbalances the secondary spectrum generated by the ED and fluorite elements in the positive groups, achieving near-apochromatic chromatic correction across the zoom range.

### 3.3 Element-by-Element Descriptions

**G1 — First Lens Group (positive, f = +148.0 mm, fixed)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L11 | Neg. meniscus (convex to object) | 2.00100 | 29.12 | S-LAH99 / TAFD55 / J-LASFH16 (001-291) | −317 mm |
| L12 | Plano-convex positive (cemented with L11) | 1.49782 | 82.57 | S-FPL52 — ED glass (498-826) | +171 mm |
| L13 | Pos. meniscus (convex to object) | 1.43385 | 95.25 | CaF₂ — Fluorite (434-952) | +244 mm |

L11 and L12 form a cemented doublet. L11 is identified as S-LAH99 (OHARA) or its equivalents HOYA TAFD55 and Hikari J-LASFH16, a lanthanum dense flint glass. At nd = 2.001, this is among the highest refractive indices available in commercial optical glass — a property that keeps surface curvatures moderate despite the strong negative power needed for achromatization. Its Abbe number (29.12) provides the dispersion needed to counterbalance L12's low-dispersion ED glass. The doublet is designed so the chromatic contributions of L11 (high dispersion, negative power) and L12 (low dispersion, positive power) nearly cancel. L13, the fluorite singlet, adds positive power while contributing minimal residual color — CaF₂ at νd = 95.25 introduces almost no dispersion per unit of refracting power.

**G2 — Second Lens Group (negative, f = −40.6 mm, variator)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L21 | Neg. meniscus (convex to object) | 1.60300 | 65.44 | S-PHM53 (OHARA) or equiv. (603-654) | −116 mm |
| L22 | Biconcave negative | 1.49782 | 82.57 | S-FPL52 — ED glass (498-826) | −135 mm |
| L23 | Pos. meniscus (convex to object) | 1.66382 | 27.35 | **SR glass** (Nikon proprietary, θgF = 0.6319) | +173 mm |
| L24 | Biconcave negative | 1.49782 | 82.57 | S-FPL52 — ED glass (498-826) | −80 mm |

G2 is the critical variator group. Its net negative power (−40.6 mm) creates the divergence needed for zooming — as it moves away from G1 toward the tele end, the system focal length increases. L21 is a phosphate crown glass (S-PHM53 or equivalent, code 603-654), with relatively low dispersion (νd = 65.44) that keeps the group's chromatic contribution manageable despite its moderate negative power. The chromatic design of G2 is remarkable: two ED elements (L22, L24) provide the bulk of the negative refracting power with minimal chromatic contribution, while the SR element (L23) provides a controlled amount of positive power with strongly anomalous dispersion. This internal achromatization of the variator is essential because G2's contribution to the system's chromatic aberration changes significantly with zoom position.

**G3 — Third Lens Group (positive, f = +110.7 mm, compensator)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L31 | Pos. meniscus (convex to object) | 1.94595 | 17.98 | HOYA FDS18 / CDGM H-ZF88 (946-180) | +112 mm |

A single ultra-high-index positive meniscus that moves toward the image during zooming from wide to tele. This glass (HOYA FDS18 or equivalent, code 946-180) has one of the highest refractive indices commercially available (nd = 1.946), allowing it to achieve the required positive power with gentle surface curvatures and thereby minimizing the spherical aberration contribution of this moving group. The very low Abbe number (17.98) is acceptable here because the element operates at reduced aperture (behind the variator) and its chromatic contribution is partially balanced by the ED elements in neighboring groups.

**G4 — Fourth Lens Group (positive, f = +69.8 mm, fixed relay)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L41 | Biconvex positive | 1.49782 | 82.57 | S-FPL52 — ED glass (498-826) | +127 mm |
| L42 | Pos. meniscus (convex to object) | 1.49782 | 82.57 | S-FPL52 — ED glass (498-826) | +156 mm |

Both elements are ED glass — an unusual choice reflecting Nikon's commitment to chromatic correction. By using two ED singlets instead of a conventional crown-flint pair, G4 contributes strong positive power to the relay while adding almost no longitudinal chromatic aberration. The cost is a slight undercorrection of higher-order monochromatic aberrations (no high-index corrector element), which is compensated by the aspherical surface in G6.

**G5 — Fifth Lens Group (negative, f = −62.6 mm, with aperture stop)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| Stop | — | — | — | — | — |
| L51 | Biconcave negative (cemented with L52) | 1.92286 | 20.88 | N-SF66 (Schott) / E-FDS1 (HOYA) (923-209) | −35 mm |
| L52 | Biconvex positive (cemented with L51) | 1.49782 | 82.57 | S-FPL52 — ED glass (498-826) | +80 mm |

The L51+L52 cemented doublet is located immediately behind the aperture stop. L51 uses Schott N-SF66 or its equivalent (code 923-209), an ultra-high-index dense flint with nd = 1.923 and νd = 20.88. Its extremely high index and low Abbe number provide the negative refracting power and dispersion needed to achromatize with the ED positive element L52. The net negative power of this doublet (−62.6 mm) also contributes to Petzval sum correction — negative power from high-index glass reduces the Petzval sum without adding proportional field curvature.

**G6 — Sixth Lens Group (positive, f = +56.9 mm, fixed relay)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L61 | Neg. meniscus (convex to object) | 1.85026 | 32.35 | Dense flint (code 850-324, no exact catalog match) | −156 mm |
| L62 | Biconvex positive **[ASPH]** (cemented with L63) | 1.59306 | 66.97 | PCD51 (HOYA) / J-PSKH4 (Hikari) (593-670) | +48 mm |
| L63 | Neg. meniscus (concave to object, cemented with L62) | 1.62004 | 36.40 | S-TIM2 (OHARA) / N-F2 (Schott) (620-364) | −216 mm |
| L64 | Pos. meniscus (convex to object) | 1.80100 | 34.92 | Dense flint (code 801-349, no exact catalog match) | +127 mm |

G6 is the most complex fixed group and the optical heart of the rear relay. L62 carries the first aspherical surface (surface 26), which provides the primary correction of spherical aberration and coma for the full-aperture beam passing through the relay. L62's glass is identified as HOYA PCD51 or Hikari J-PSKH4 (code 593-670), a phosphate crown — notably, PCD51 is explicitly designated as a precision-glass-moldable (PGM) material in the HOYA catalog, confirming that this aspherical element is likely manufactured by glass pressing. L63 is S-TIM2 (OHARA) or Schott N-F2, a standard flint glass (code 620-364) that provides the chromatic correction partner for L62 within the cemented doublet.

L61 (code 850-324) and L64 (code 801-349) have no exact matches in the HOYA/Schott/OHARA/Hikari cross-reference tables. Both are high-index, moderate-dispersion glasses in the dense flint or lanthanum flint region of the glass map. They may be proprietary Nikon formulations or sourced from suppliers (Sumita, CDGM, or others) whose catalog data is not fully represented in the available cross-references.

**G7 — Seventh Lens Group (negative, f = −87.3 mm, first focus group)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L71 | Pos. meniscus (concave to object) | 1.94595 | 17.98 | HOYA FDS18 / CDGM H-ZF88 (946-180) | +142 mm |
| L72 | Neg. meniscus (convex to object) | 1.71300 | 53.96 | S-LAL8 (OHARA) / N-LAK8 (Schott) (713-540) | −54 mm |

G7 is the first of two focus groups. L71 is the same ultra-high-index glass as L31 (HOYA FDS18, code 946-180). L72 is identified as S-LAL8 (OHARA) or Schott N-LAK8 (code 713-540), a lanthanum crown glass. Note the unusual combination: L71 is individually positive despite being part of a net-negative group. This "reversed" element arrangement — positive high-index flint followed by negative lanthanum crown — is a deliberate design choice to control the change in spherical aberration during focus. By splitting the group's negative power between a positive and a strong negative element, the designer can balance the higher-order aberration contributions so that image quality degrades minimally as focus distance changes. The choice of lanthanum crown (rather than a lower-index barium crown) for L72 provides a favorable Petzval contribution for the negative element, helping to control field curvature variation during focus.

**G8 — Eighth Lens Group (positive, f = +66.6 mm, second focus group)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L81 | Biconvex positive | 1.90265 | 35.77 | J-LASFH9A (Hikari, code 903-358) or S-LAH93 (OHARA, code 905-350, approx.) | +66 mm |

G8 is a single-element focus group — the lightest possible moving group for fast autofocus response. L81 is identified as Hikari J-LASFH9A (code 903-358, exact) or approximately OHARA S-LAH93 (code 905-350), a lanthanum dense flint glass. Its high refractive index (1.903) achieves the needed positive power (+66.6 mm) with a symmetric biconvex form (R = ±119.4 mm), which inherently minimizes coma at the center of the field for any given conjugate ratio.

**G9 — Ninth Lens Group (negative, f = −76.3 mm, fixed field corrector)**

| Element | Shape | nd | νd | Glass (six-digit code) | f (thin lens) |
|---------|-------|-------|-------|-------|------|
| L91 | Neg. meniscus (concave to object) **[ASPH]** | 1.51696 | 64.14 | S-BSL7 (OHARA) / N-BK7 (Schott) (517-641, approx.) | −214 mm |
| L92 | Neg. meniscus (concave to object) | 1.56384 | 60.71 | S-BAL41 (OHARA) / N-SK11 (Schott) (564-607) | −121 mm |

G9 is fixed at the rear of the optical system, closest to the image plane. L91 carries the second aspherical surface (surface 37), positioned where it has maximum leverage over field-dependent aberrations — astigmatism, field curvature, and lateral color. L91's glass (code 517-641) closely matches S-BSL7 (OHARA) or N-BK7 (Schott), a common borosilicate crown. OHARA manufactures a moldable variant, L-BSL7, which would be consistent with this element being produced by precision glass molding. L92 is identified as S-BAL41 (OHARA) or Schott N-SK11 (code 564-607), a barium crown with moderate index and dispersion. The combined negative power of G9 (−76.3 mm) is essential for Petzval sum correction — without it, the strong positive power of the preceding groups would produce unacceptable field curvature for a 43.4 mm image circle.

---

## 4. Focusing Mechanism

### 4.1 Dual-Group Internal Focus

The lens uses a dual-group internal focusing system (termed "multi-focusing" in Nikon's marketing). Focusing from infinity to the closest subject distance involves two groups moving in opposite directions:

- **G7 (first focus group, negative):** Moves toward the image plane (rearward)
- **G8 (second focus group, positive):** Moves toward the object (forward)

At the telephoto end, the patent specifies:
- G7 movement: mTF1 = −11.525 mm (image-side)
- G8 movement: mTF2 = +11.525 mm (object-side)
- Movement ratio: mTF1/mTF2 = −1.000

The equal-and-opposite movement of G7 and G8 is an elegant design feature: the total track length of the system remains constant during focus, and the mechanical cam design is symmetric, simplifying the focusing mechanism.

### 4.2 Variable Air Spacings During Focus

At the telephoto end (f = 196 mm), the three air gaps that change during focus behave as follows:

| Gap | Between | At infinity | At close focus | Change |
|-----|---------|-------------|----------------|--------|
| D30 | G6 → G7 | 4.107 mm | 15.633 mm | +11.526 mm |
| D34 | G7 → G8 | 27.710 mm | 4.659 mm | −23.051 mm |
| D36 | G8 → G9 | 3.913 mm | 15.438 mm | +11.525 mm |

The gap before G7 (D30) increases as G7 retreats; the gap between G7 and G8 (D34) decreases dramatically as both groups converge toward each other; and the gap after G8 (D36) increases as G8 advances forward. The net effect is that the focusing elements "squeeze together" in the center while the surrounding air spaces expand symmetrically.

### 4.3 Advantages of Dual-Group Focus

The dual-group focus architecture satisfies the patent's central condition:

**Condition (1):** 0.80 < (−fF1)/fF2 < 5.00

For Example 1: (−fF1)/fF2 = (−(−87.281))/66.648 = **1.31**, well within the range.

This condition ensures that the ratio of focusing group powers is balanced such that:

1. **Spherical aberration variation during focus is minimized.** If one focusing group were much stronger than the other, its aberration contribution would dominate at close focus, degrading image quality. The balanced ratio keeps both groups contributing roughly equally.

2. **Focus breathing is suppressed.** By moving two groups in opposite directions, the magnification change during focus (which causes the field of view to visibly change — "focus breathing") is largely cancelled. This is critical for video applications, where focus breathing is highly objectionable.

3. **Focusing speed is maximized.** Both groups are lightweight — G7 contains only two elements and G8 is a single element. The production lens uses stepping motors (STM) to drive each group independently, achieving the fast, quiet focusing required for mirrorless autofocus systems.

The patent also specifies that these focus groups have transverse magnifications at the telephoto infinity position of βTF1 = 0.514 (G7) and βTF2 = 1.472 (G8), with their ratio βTF1/βTF2 = 0.349 satisfying condition (3): 0.10 < 0.349 < 1.00. This ensures that neither group operates near unit magnification (where sensitivity to manufacturing tolerances would be highest) or near zero magnification (where it would contribute negligibly to the focusing action).

---

## 5. Aspherical Surface Analysis

### 5.1 Surface 26 — L62 Front (G6, Fixed Relay Group)

| Parameter | Value |
|-----------|-------|
| Paraxial R | 58.683 mm |
| κ (conic constant) | 0.00 |
| A4 | −2.00 × 10⁻⁶ |
| A6 | +8.31 × 10⁻¹⁰ |
| A8 | −6.83 × 10⁻¹² |
| A10 | +2.63 × 10⁻¹⁴ |
| A12 | −3.55 × 10⁻¹⁷ |

**Position and function:** Surface 26 is the front surface of L62, the positive element in G6's cemented doublet. It sits in a fixed group behind the aperture stop where the on-axis beam diameter is still substantial (roughly the stop diameter). The negative A4 coefficient indicates that the surface becomes progressively flatter (less curved) toward the edge relative to the base sphere — a classic correction for positive spherical aberration. The alternating signs of higher-order coefficients (−, +, −, +, −) suggest a carefully balanced aspherical departure that controls both third-order and fifth-order spherical aberration simultaneously.

**Manufacturing note:** L62's glass is identified as HOYA PCD51 or Hikari J-PSKH4 (code 593-670), a phosphate crown. HOYA's "PCD" prefix designates this as a glass specifically developed for precision glass molding, confirming that this asphere is manufactured by glass pressing rather than grinding and polishing — consistent with the production economics of a high-volume zoom lens.

### 5.2 Surface 37 — L91 Front (G9, Fixed Field Corrector)

| Parameter | Value |
|-----------|-------|
| Paraxial R | −83.230 mm |
| κ (conic constant) | 0.00 |
| A4 | +1.18 × 10⁻⁶ |
| A6 | +1.63 × 10⁻⁹ |
| A8 | −7.32 × 10⁻¹² |
| A10 | +2.41 × 10⁻¹⁴ |
| A12 | −2.65 × 10⁻¹⁷ |

**Position and function:** Surface 37 is the front surface of L91, the leading element of the fixed rear group G9. Positioned close to the image plane, this surface has maximum leverage over field-dependent aberrations. The positive A4 coefficient (opposite sign from surface 26) indicates that this surface becomes more curved toward the edge — it overcorrects the peripheral zone to compensate for the field curvature and astigmatism accumulated through the preceding 20 elements. This is a field-flattening asphere.

**Manufacturing note:** L91's glass (code 517-641) closely matches S-BSL7/N-BK7. OHARA manufactures a moldable variant (L-BSL7), suggesting this element may also be produced by precision glass molding. However, BK7-family glasses have relatively high transformation temperatures (Tg ≈ 557°C), which makes them less ideal for PGM than the phosphate crowns; it is also possible this element is produced by CNC grinding or hybrid methods. The patent does not specify manufacturing method, so this remains inferential.

---

## 6. Chromatic Correction Strategy

The chromatic correction of this zoom lens is built on a three-tier strategy:

**Tier 1 — Primary achromatism (LoCA correction):** The six ED elements (all S-FPL52 equivalents at νd = 82.57) and one fluorite element (νd = 95.25) provide the bulk of the LoCA correction. These very-low-dispersion positive elements are paired with high-index, high-dispersion negative partners (L11 at νd = 29.1, L51 at νd = 20.9) in classic achromatic configurations. The resulting two-color correction brings the red (C-line) and blue (F-line) foci into coincidence.

**Tier 2 — Secondary spectrum correction:** The SR element (L23, νd = 27.35, θgF = 0.6319) addresses the residual secondary spectrum — the focus difference between the corrected C/F wavelengths and the intermediate d-line. Its anomalous partial dispersion (ΔPgF well above the normal line) creates a chromatic contribution that is disproportionately weighted toward blue/violet wavelengths, partially cancelling the secondary spectrum that the ED and fluorite elements introduce. The patent's condition (10) explicitly quantifies this anomalous-dispersion requirement.

**Tier 3 — Zoom-invariant correction:** By distributing the specialty glass across multiple zoom groups (ED elements appear in G1, G2, G4, G5; fluorite in G1; SR in G2), the chromatic correction remains balanced as groups move during zooming. The variator G2 is internally achromatized (two ED elements + one SR element), which is critical because its contribution to system chromatic aberration changes most dramatically with zoom position. Without this internal achromatization, the lens would have good color correction at one zoom position but significant lateral color or longitudinal color shift at others.

---

## 7. Production Context

The NIKKOR Z 70-200mm f/2.8 VR S was introduced on January 7, 2020 and released for sale in August 2020. Its production specifications match Example 1:

| Parameter | Patent Example 1 | Production Spec |
|-----------|-------------------|-----------------|
| Elements / Groups | 21 / 18 (marketing) | 21 / 18 |
| ED elements | 6 (nd = 1.498, νd = 82.6) | 6 |
| Fluorite elements | 1 (nd = 1.434, νd = 95.2) | 1 |
| SR elements | 1 (nd = 1.664, νd = 27.4) | 1 |
| Aspherical elements | 2 (surfaces 26, 37) | 2 |
| Focal length | 71.5–196 mm | 70–200 mm |
| Maximum aperture | f/2.88 | f/2.8 |
| Image diameter | 43.4 mm | 43.2 mm (FX) |
| Diaphragm blades | — (not in patent) | 9 (rounded) |
| Close focus (wide) | — | 0.50 m |
| Close focus (tele) | — | 1.0 m |
| Weight | — | 1360 g (without foot) |

The lens was subsequently succeeded by the NIKKOR Z 70-200mm f/2.8 VR S II (announced February 2026), which uses a revised 18-element/16-group design — three fewer elements — with Super ED and aspherical ED elements, achieving a 26% weight reduction to 998 g. The Mark II represents a different patent and a fundamentally different optical design, not a minor revision of Example 1.

---

## Sources

- WO2020/105104 A1 (WIPO), filed November 20, 2018, published May 28, 2020. Inventor: Ken Uehara, assignee: Nikon Corporation. Example 1 (Table 1), paragraphs [0082]–[0096].
- Nikon Corporation, "NIKKOR Z 70-200mm f/2.8 VR S" product page: 21 elements / 18 groups, 6 ED, 2 aspherical, 1 fluorite, 1 SR. imaging.nikon.com.
- Nikon Corporation, "NIKKOR Z 70-200mm f/2.8 VR S II" press release, February 24, 2026: 18 elements / 16 groups, revised design.
- HOYA GROUP Optics Division, "Glass Cross Reference Index" (cross-references HOYA, Schott, OHARA, Hikari, Sumita, CDGM by six-digit glass code). hoya-opticalworld.com.
- OHARA optical glass catalog: S-FPL52 (nd = 1.49782, νd = 82.56); CaF₂ (nd ≈ 1.434, νd ≈ 95.2).
- Nikon Rumors, "Nikon's new short-wavelength refractive (SR) lens element explained," March 29, 2020.
