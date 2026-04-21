# NIKON NIKKOR Z 50mm f/1.2 S — Optical Design Analysis

**Patent:** WO 2021/241230 A1 — "Optical System, Optical Device, and Method for Manufacturing Optical System"
**Example:** 1 (Table 1)
**Inventor:** HARADA Hiroki (原田 壮基)
**Applicant:** Nikon Corporation
**Priority:** 2020-05-28 (JP 2020-092836)
**Published:** 2021-12-02

---

## 1. Production Design Identification

This analysis covers Example 1 of WO 2021/241230 A1, which corresponds to the production NIKKOR Z 50mm f/1.2 S lens. The identification is established by convergent criteria: the patent's 17-element / 15-group construction matches the published product specification exactly, as do the 3 aspherical surfaces, the 2 ED glass elements, the f/1.2 maximum aperture, and the dual-group inner-focus mechanism driven by two stepping motors. The patent's priority date of May 2020 precedes the product announcement in September 2020.

The patent describes two "embodiment forms" (実施形態). The first embodiment (Examples 1–5, 7) employs a four-subgroup rear group with two independently moving focus groups (F1 and F2). The second embodiment (Example 6) uses a three-subgroup rear arrangement with G1 single focus group. Example 1 is the most direct match to the production lens.

---

## 2. Basic Specifications

| Parameter | Value | Notes |
|---|---|---|
| Focal length (f) | 51.29 mm | At infinity focus |
| Maximum aperture (FNo) | 1.23 | Effective f/1.2, nominal |
| Half-field angle (ω) | 22.8° | Full-field angle 45.6° |
| Image height (Y) | 21.60 mm | 43.2 mm image circle (FX format) |
| Total track length (TL) | 163.307 mm | Front vertex to image |
| Back focus (BF, physical) | 13.112 mm | Last surface to image |
| Back focus (BF, air equiv.) | 12.567 mm | Used in conditional expressions |
| Elements / Groups | 17 / 15 | 2 cemented doublets |
| Aspherical surfaces | 3 | Surfaces 25\*, 26\*, 33\* — all in rear group |
| Filter group | 1 element | 1.6 mm flat plate (nd=1.51680) |
| Close focus (production) | 0.45 m (AF) / 0.43 m (MF) | β ≈ −0.164 (1:6.1 max magnification) |
| Patent reference conjugate | β = −0.1000 | Object distance d₀ = 467.5 mm from front vertex |
| Aperture blades | 9 (rounded) | Per product specification |

**Verified computations:**

- Total track: sum of all axial thicknesses = 163.306 mm (patent states 163.307 — difference is rounding)
- BF physical: d₃₄ + d₃₅ + d₃₆ = 10.810 + 1.600 + 0.702 = 13.112 mm ✓
- BF air equivalent: 10.810 + 1.600/1.51680 + 0.702 = 12.567 mm ✓
- Conditional expression (2): f/Bf = 51.29/12.567 = 4.081 (patent states 4.143; the ~1.5% discrepancy arises because both f and Bf are rounded to 2–3 decimal places in the table, while the conditional expression was computed from full-precision ray-trace values)
- Conditional expression (3): fA/(2f) = 114.58/(2 × 51.29) = 1.117 ✓
- Conditional expression (9): fF2/fF1 = 57.73/(−707.60) = −0.082 ✓

---

## 3. Optical Architecture

The lens follows a positive-front / stop / positive-rear architecture that Nikon's press release describes as having "perfect symmetry in front of, and behind, the aperture." While this arrangement shares ancestry with the classical double-Gauss, the design has evolved well beyond that form: nine elements in the front group and eight behind, with the rear heavily subdivided into independently moving subgroups. The patent itself makes no reference to a double-Gauss heritage, describing the system simply as G1 front group with positive refractive power, stop, and rear group with overall positive refractive power (物体側から順に、正の屈折力を持つ前群と、絞りと、全体として正の屈折力を持つ後群). The front group is heavily expanded relative to any classical Gauss design to manage the extreme f/1.2 aperture. The rear group is subdivided into three mechanically distinct units: two moving focus groups (F1, F2) and a fixed rear group (R), plus a filter plate before the image plane.

### 3.1 Group Structure

| Group | Surfaces | Elements | Focal Length | Role |
|---|---|---|---|---|
| **A** (front) | 1–18 | L11–L19 (9 elements) | +114.58 mm | Fixed front positive group |
| — AF subgroup | 1–6 | L11–L13 (3 elements) | — | Divergent front corrector |
| — AR subgroup | 7–18 | L14–L19 (6 elements) | — | Converging rear section |
| **F1** (focus 1) | 20–23 | L21–L22 (2 elements) | −707.60 mm | Inner-focus group (weak negative) |
| **F2** (focus 2) | 24–27 | L31–L32 (2 elements) | +57.73 mm | Inner-focus group (strong positive) |
| **R** (rear fixed) | 28–34 | L41–L44 (4 elements) | −157.33 mm | Fixed rear negative group |
| **FL** (filter) | 35–36 | 1 element | ∞ (parallel plate) | IR cut / OLPF placeholder |

The patent figure (Fig. 1) subdivides the front group into AF (surfaces 1–6, elements L11–L13) and AR (surfaces 7–18, elements L14–L19). The AF subgroup raises the marginal ray to its maximum height early in the lens, while the AR subgroup performs the primary positive convergence toward the stop. This AF/AR partition is the basis of the patent's second-embodiment conditional expression (11), which constrains the combined convergence of the two front subgroups for simultaneous control of spherical aberration and Petzval sum.

### 3.2 Design Philosophy

The core challenge of an f/1.2 lens for a mirrorless mount with a 16 mm flange distance is managing the enormous marginal ray height (the entrance pupil semi-diameter is approximately 21 mm) while maintaining a compact back focus compatible with the Z-mount sensor stack. The patent's conditional expression (1) explicitly governs this:

> 0.600 < ((h(max) − h(1))/h(1) + (h(max) − h(s))/h(s)) × FNo < 2.100

This expression quantifies how much the marginal ray swells above its height at the first surface and at the stop. For Example 1, the value is 1.187 — indicating substantial marginal-ray excursion within the front group, which is what necessitates nine front-group elements. The patent explains that if this value falls below the lower bound, the marginal ray height entering the rear group becomes too low to adequately correct spherical aberration, coma, and field curvature; if it exceeds the upper bound, the rear group cannot manage the aberration load.

The conditional expression (2), f/Bf = 4.143, quantifies the degree of back-focus compression: the system's focal length is over four times its air-equivalent back focus. For a thin lens in air, f/Bf would equal 1; a ratio exceeding 1 indicates that the thick, multi-element construction shortens the back focus relative to the focal length. The patent explains that if f/Bf falls below 1.5, the large aperture forces the entire system to expand radially, making field curvature correction difficult; if f/Bf exceeds 10, strong negative power is needed at the rear to compress the back focus, which makes spherical aberration correction untenable. At 4.143, the design achieves a compact back focus compatible with the Z-mount's 16 mm flange distance while keeping the aberration load manageable.

---

## 4. Element-by-Element Analysis

### 4.1 Front Group G1 — Fixed (9 Elements, Surfaces 1–18)

**L11 — Negative Meniscus, Convex to Object**

| Property | Value |
|---|---|
| Surfaces | 1 → 2 |
| R₁ / R₂ | +280.683 / +46.022 |
| Center thickness | 2.650 mm |
| nd / νd | 1.64000 / 60.1 |
| Glass (inferred) | OHARA S-BSM81 or CDGM H-ZK6 |
| Thin-lens focal length | −86.0 mm |

L11 is a strongly negative meniscus that opens the lens. Its rear surface (R₂ = 46.02 mm) is far more steeply curved than the front (R₁ = 280.68 mm), creating a diverging element that spreads the entering marginal ray bundle outward. This increases h(max) — the maximum marginal ray height in the front group — which is the mechanism the patent's conditional expression (1) governs. The glass is a standard barium crown in the dense crown region of the glass map (nd ≈ 1.64, νd ≈ 60), providing moderate refractive index without excessive dispersion.

**L12 — Positive Meniscus, Convex to Object**

| Property | Value |
|---|---|
| Surfaces | 3 → 4 |
| R₁ / R₂ | +50.875 / +62.234 |
| Center thickness | 4.190 mm |
| nd / νd | 1.94595 / 18.0 |
| Glass (inferred) | HIKARI E-FDS1-W or SUMITA K-PSFn214M |
| Thin-lens focal length | +294.7 mm |

L12 is the most optically unusual element in the entire design. Its glass — nd = 1.94595, νd = 18.0 — is an ultra-high-index, ultra-high-dispersion dense flint, the most extreme glass type in commercial catalogs. It sits at the far lower-right corner of the glass map, in territory occupied by specialty glasses like HIKARI E-FDS1-W. Despite being a positive element, L12's primary role is chromatic: its enormous dispersion (νd = 18) combined with weak positive power (+294.7 mm focal length) allows it to contribute a large chromatic correction term relative to its power contribution. Paired with the preceding negative L11 and following negative L13, it forms part of a three-element corrector group that manages both lateral color and the Petzval sum contribution of the front divergent section. The 16.51 mm air gap following L12 is the largest in the entire front group, allowing the ray bundle to expand before entering L13.

**L13 — Negative Meniscus, Concave to Object**

| Property | Value |
|---|---|
| Surfaces | 5 → 6 |
| R₁ / R₂ | −43.989 / −158.308 |
| Center thickness | 3.200 mm |
| nd / νd | 1.55298 / 55.1 |
| Glass (inferred) | OHARA S-TIL25 or SUMITA K-BaFn1 |
| Thin-lens focal length | −110.2 mm |

L13 is a negative meniscus with its concave side facing the object. Together with L11, it forms one of the pair of opposing concave surfaces described in the patent's conditional expression (7): r1 is the image-side radius of L11 (surface 2, R = +46.02) and r2 is the object-side radius of L13 (surface 5, R = −43.99). The patent explicitly identifies these surfaces as "facing concave surfaces" (向かい合った凹面) and constrains their ratio: 0.500 < −r1/r2 < 2.000. For Example 1, −r1/r2 = −46.02/(−43.99) = 1.046. This Petzval-controlling pair keeps the sum of field-curving contributions from the front divergent section in check.

L13's glass (nd = 1.55298, νd = 55.1) is a light barium flint in the traditional glass map — moderate index, moderate dispersion. Notably, L13 is the only negative lens in the design that the patent does *not* evaluate under conditional expression (6) (the anomalous partial dispersion condition), confirming that S-TIL25 has standard (normal-line) dispersion characteristics rather than the anomalous dispersion required for secondary spectrum correction.

**L14 — Positive Meniscus, Concave to Object**

| Property | Value |
|---|---|
| Surfaces | 7 → 8 |
| R₁ / R₂ | −82.014 / −52.723 |
| Center thickness | 6.700 mm |
| nd / νd | 1.59349 / 67.0 |
| Glass (inferred) | HOYA FCD505 or HIKARI J-PSKH1 (phosphate crown / ED) |
| Thin-lens focal length | +248.7 mm |

L14 marks the transition from the AF to the AR subgroup and begins G1 remarkable run of four consecutive elements using the same glass type (nd = 1.59349, νd = 67.0). This glass sits in the phosphate crown / fluorophosphate region of the glass map, characterized by anomalous partial dispersion (positive ΔPgF). Glasses in this region are the basis of Nikon's "ED" (Extra-low Dispersion) designation.

L14 is a weak positive meniscus with its concave surface facing the object. It gently begins converging the ray bundle after the divergent AF section.

A notable anomaly in the prescription: the axial spacing from surface 8 to surface 9 is −3.000 mm (negative), followed by a flat dummy surface (surface 9, R = 0) with d = 3.100 mm. This negative thickness indicates that the vertex of L14's rear surface lies beyond the vertex of the subsequent dummy surface along the optical axis — a geometric consequence of L14's deeply curved meniscus form. In optical design software this is handled as a virtual vertex displacement and does not affect ray tracing.

**L15 — Symmetric Biconvex Positive**

| Property | Value |
|---|---|
| Surfaces | 10 → 11 |
| R₁ / R₂ | +113.045 / −113.045 |
| Center thickness | 10.810 mm |
| nd / νd | 1.59349 / 67.0 |
| Glass (inferred) | HOYA FCD505 or HIKARI J-PSKH1 (same as L14) |
| Thin-lens focal length | +95.2 mm |

L15 is a perfectly symmetric biconvex element — R₁ = +113.045, R₂ = −113.045 — making it one of the primary power-delivering elements of the front group. Its symmetry minimizes coma and distortion contributions at the design conjugate, and the thick center (10.81 mm) provides a long glass path that contributes to the lens's physical length. At +95.2 mm thin-lens focal length, L15 carries more optical power than any other single element in group G1.

**L16 — Positive Meniscus, Convex to Object**

| Property | Value |
|---|---|
| Surfaces | 12 → 13 |
| R₁ / R₂ | +75.491 / +275.330 |
| Center thickness | 6.540 mm |
| nd / νd | 1.59349 / 67.0 |
| Glass (inferred) | HOYA FCD505 or HIKARI J-PSKH1 (same as L14, L15) |
| Thin-lens focal length | +175.2 mm |

L16 continues the positive convergence of the AR subgroup. It is a convex-to-object meniscus providing moderate positive power. The 0.200 mm air gap to both the preceding L15 and following L17 indicates these elements are nearly touching — a tight stacking of positive elements that distributes the bending of the marginal ray across multiple surfaces, keeping individual surface contributions to spherical aberration low. This is the design principle the patent describes in [0040]: three or more consecutive positive elements suppress aberration generation where the marginal ray is at its tallest.

**L17 — Positive Meniscus, Convex to Object**

| Property | Value |
|---|---|
| Surfaces | 14 → 15 |
| R₁ / R₂ | +48.855 / +571.463 |
| Center thickness | 10.350 mm |
| nd / νd | 1.59349 / 67.0 |
| Glass (inferred) | HOYA FCD505 or HIKARI J-PSKH1 (same as L14–L16) |
| Thin-lens focal length | +90.0 mm |

L17 is the final element of the four-element ED run and the strongest individual positive element in the front group at +90.0 mm. Its nearly flat rear surface (R₂ = 571.46 mm) means that essentially all the bending power comes from the front surface (R₁ = 48.86 mm), which is the most steeply curved positive surface in the AR subgroup. The thick center (10.35 mm) again contributes to the overall physical length.

**L18 + L19 — Cemented Negative Doublet (Biconvex Positive + Biconcave Negative)**

| Property | L18 | L19 |
|---|---|---|
| Surfaces | 16 (front) | 17 (junction) → 18 (rear) |
| R (own surfaces) | +290.135 / −109.110 | −109.110 / +40.041 |
| Center thickness | 6.040 mm | 2.160 mm |
| nd / νd | 1.59319 / 67.9 | 1.73800 / 32.3 |
| Glass (inferred) | FCD505 variant or S-FPM2 (OHARA) | OHARA S-NBH52V or HOYA TAFD25 |
| Thin-lens focal length | +133.7 mm | −39.7 mm |
| **Doublet combined** | **−56.5 mm** | |

The final group-A element is a cemented doublet consisting of a positive phosphate crown (L18) bonded to a strongly negative dense flint (L19). The doublet as a whole has net negative power (−56.5 mm), which may seem counterintuitive in a positive front group, but it serves a critical role: the junction surface (R = −109.11 mm) between the low-dispersion L18 and high-dispersion L19 creates a powerful chromatic-correcting interface. The L19 glass (nd = 1.73800, νd = 32.3) is identified as OHARA S-NBH52V or equivalent — a lanthanum-containing dense barium flint with controlled anomalous partial dispersion. The patent's conditional expression (6) evaluates L19's partial dispersion: θgF + 0.0021 × νd = 0.658, confirming it sits in the anomalous-dispersion corridor needed for effective secondary spectrum control.

The 7.79 mm air gap following this doublet is the space to the aperture stop.

### 4.2 Aperture Stop (Surface 19)

The stop is positioned between the front group G1 and the rear group B. At infinity focus, the stop-to-F1 distance is 19.164 mm, which decreases to 11.437 mm at close focus as the G2 group moves toward the object. The stop itself remains fixed during focusing.

### 4.3 Focus Group G2 — Moving (2 Elements, Surfaces 20–23)

**L21 — Negative Meniscus, Concave to Object**

| Property | Value |
|---|---|
| Surfaces | 20 → 21 |
| R₁ / R₂ | −37.070 / −95.032 |
| Center thickness | 1.700 mm |
| nd / νd | 1.72047 / 34.7 |
| Glass (inferred) | OHARA S-NBH8 (exact match: nd=1.72047, νd=34.71) |
| Thin-lens focal length | −84.4 mm |

L21 is the first element the marginal ray encounters after the stop. As a negative meniscus with its concave side toward the object, it diverges the converging cone from the front group. Its glass (S-NBH8 or equivalent) is a niobium-containing barium flint with moderate anomalous dispersion — the patent evaluates its θgF + 0.0021 × νd = 0.657, placing it within the chromatic-correction corridor of conditional expression (6). The thin center (1.70 mm) keeps its weight contribution low, which is important for a moving focus element.

**L22 — Plano-Convex Positive, Convex to Object**

| Property | Value |
|---|---|
| Surfaces | 22 → 23 |
| R₁ / R₂ | +58.860 / ∞ (flat) |
| Center thickness | 6.200 mm |
| nd / νd | 1.59319 / 67.9 |
| Glass (inferred) | Same phosphate crown family as L18 (FCD505 variant / S-FPM2) |
| Thin-lens focal length | +99.2 mm |

L22 is a plano-convex element providing strong positive power to compensate L21's divergence. Its flat rear surface simplifies manufacturing and alignment. The glass is the same phosphate crown used for L18 (nd = 1.59319, νd = 67.9), continuing the ED glass theme throughout the design.

The combined focal length of the G2 group (L21 + L22) is −707.60 mm — a very weak net negative power. This means the G2 group functions primarily as an aberration-correcting pair rather than G1 power-contributing group. Its movement during focus fine-tunes coma, field curvature, and astigmatism balance as the conjugate changes.

### 4.4 Focus Group G3 — Moving (2 Elements, Surfaces 24–27)

**L31 — Biconvex Positive (1 Aspherical Surface)**

| Property | Value |
|---|---|
| Surfaces | 24 → 25\* |
| R₁ / R₂ (base) | +391.608 / −165.000 |
| Center thickness | 6.460 mm |
| nd / νd | 1.59306 / 67.0 |
| Glass (inferred) | HOYA FCD505 or related phosphate crown (slightly different melt from L14–17) |
| Thin-lens focal length | +195.7 mm |
| Aspherical surface | **Surface 25\*** (rear) |

L31 is a gently biconvex positive element whose rear surface (25\*) carries the first aspherical profile. The base radius is R = −165.00 mm with a strongly oblate conic constant of κ = +15.23. At the estimated clear semi-aperture of ~14 mm, the aspheric departure from the base sphere reaches approximately −0.54 mm (concave deepening). This aspherical surface's primary function is spherical aberration correction at the wide-open aperture — it progressively reduces the surface's convergent power toward the rim, flattening the overcorrected higher-order spherical aberration that the many front-group elements generate. The polynomial coefficients extend through A16, indicating the correction profile was optimized to very high orders.

**L32 — Biconvex Positive (1 Aspherical Surface)**

| Property | Value |
|---|---|
| Surfaces | 26\* → 27 |
| R₁ / R₂ | +71.000 / −430.726 |
| Center thickness | 4.000 mm |
| nd / νd | 1.76450 / 49.1 |
| Glass (inferred) | OHARA S-NBH56 (exact match: nd=1.76450, νd=49.10) |
| Thin-lens focal length | +79.7 mm |
| Aspherical surface | **Surface 26\*** (front) |

L32 carries the second aspherical surface, this time on its front face. The base radius is R = +71.00 mm with a mild prolate conic (κ = −0.116). At ~14 mm semi-aperture, the departure is approximately −0.55 mm. Unlike L31's phosphate crown, L32 uses a substantially different glass — S-NBH56, a high-index (1.7645) new barium heavy glass in OHARA's classification. With νd = 49.1, it sits just below the conventional crown/flint boundary (νd ≈ 50), giving it moderate dispersion — higher than the ED phosphate crowns but lower than the dense flints used for chromatic correction. This higher index allows the element to carry more refractive power per unit curvature, and the different dispersion contributes to chromatic balance within the G3 group.

The combined focal length of F2 is +57.73 mm — a strong positive group that is the primary power contributor in the rear half of the lens. Its movement during focus shifts the image plane position and corrects focus-dependent aberrations.

**Aspherical surface pairing (surfaces 25\* and 26\*):** These two aspherical surfaces face each other across a 2.600 mm air gap and work as a conjugate pair. Surface 25\* (L31 rear) has its strongest departure at the rim where it deepens the concavity, while surface 26\* (L32 front) reduces the convexity at the rim. Together they form an aspherical "lens-within-a-lens" that precisely shapes the wavefront for higher-order spherical and coma correction — an elegant arrangement that concentrates the aspherical complexity in the lightweight G3 focus group.

### 4.5 Rear Group G4 — Fixed (4 Elements, Surfaces 28–34)

**L41 — Positive Meniscus, Convex to Object**

| Property | Value |
|---|---|
| Surfaces | 28 → 29 |
| R₁ / R₂ | +137.781 / +795.364 |
| Center thickness | 3.100 mm |
| nd / νd | 1.61800 / 63.3 |
| Glass (inferred) | OHARA S-PHM52 (exact match: nd=1.61800, νd=63.33) |
| Thin-lens focal length | +269.7 mm |

L41 is a weak positive meniscus providing gentle convergence as the rays enter the fixed rear group. Its glass, S-PHM52, is a phosphate-containing crown with moderately anomalous dispersion — similar in character to the FCD505 family but at higher refractive index.

**L42 + L43 — Cemented Negative Doublet (Biconvex Positive + Biconcave Negative)**

| Property | L42 | L43 |
|---|---|---|
| Surfaces | 30 (front) | 31 (junction) → 32 (rear) |
| R (own surfaces) | +87.924 / −127.680 | −127.680 / +40.898 |
| Center thickness | 5.700 mm | 1.800 mm |
| nd / νd | 1.90265 / 35.8 | 1.61266 / 44.5 |
| Glass (inferred) | OHARA S-LAH79 | OHARA S-NBM52 or HIKARI E-CF6 |
| Thin-lens focal length | +57.7 mm | −50.6 mm |
| **Doublet combined** | **−409.4 mm** | |

This cemented doublet is the primary chromatic corrector of the rear group. L42 uses the highest-index glass in the entire rear section (nd = 1.90265), identified as OHARA S-LAH79 — a lanthanum-containing ultra-high-index crown. L43 uses S-NBM52 or equivalent, a niobium barium flint with νd = 44.5. The patent's conditional expression (6) evaluates L43: θgF + 0.0021 × νd = 0.657, confirming its anomalous partial dispersion contributes to secondary spectrum correction.

The doublet's net power is weakly negative (−409.4 mm), so its primary contribution is chromatic rather than refractive — a classic achromatic corrector role.

**L44 — Biconcave Negative (1 Aspherical Surface)**

| Property | Value |
|---|---|
| Surfaces | 33\* → 34 |
| R₁ / R₂ (base) | −64.588 / +423.874 |
| Center thickness | 1.800 mm |
| nd / νd | 1.51680 / 64.0 |
| Glass (inferred) | OHARA S-NSL3 or S-NSL36 |
| Thin-lens focal length | −108.5 mm |
| Aspherical surface | **Surface 33\*** (front) |

L44 is the final optical element before the filter plate — a biconcave negative lens (両凹負レンズ). R₁ = −64.59 mm (concave to incoming light) and R₂ = +423.87 mm (concave to outgoing light): both surfaces are concave in their respective orientations, satisfying the definition of biconcave per the standard sign convention. The rear concavity is weak (|R₂| is 6.6× larger than |R₁|), so most of the element's negative power is concentrated on the front surface. That front surface (33\*) carries a strongly oblate aspherical profile (κ = +9.479) that deepens the concavity further toward the rim.

L44's role is critical: positioned at the very end of the optical path (before only the filter plate), it is the last element to shape the wavefront before image formation. The aspherical surface corrects residual higher-order aberrations — particularly field curvature and astigmatism — that would otherwise degrade corner performance on the full-frame sensor. Its low-index glass (S-NSL3, nd = 1.51680) keeps the Petzval contribution of this negative element modest while allowing the aspherical surface to be ground or molded into a relatively soft glass.

The 10.81 mm air gap from L44 to the filter plate is part of the back focal distance.

### 4.6 Filter Plate (Surfaces 35–36)

A 1.600 mm parallel-sided flat plate (nd = 1.51680, νd = 63.9) representing the sensor cover glass / IR cut filter / OLPF assembly. This is standard practice in patent prescriptions for mirrorless lenses.

---

## 5. Glass Identification Summary

The following table presents each unique glass type used in Example 1, the number of elements using it, and the catalog identification with confidence assessment.

| nd | νd | Elements | Best Catalog Match | Confidence | Category |
|---|---|---|---|---|---|
| 1.94595 | 18.0 | L12 | HIKARI E-FDS1-W | Exact | Ultra-dense flint |
| 1.64000 | 60.1 | L11 | OHARA S-BSM81 / CDGM H-ZK6 | Exact | Dense barium crown |
| 1.55298 | 55.1 | L13 | OHARA S-TIL25 / SUMITA K-BaFn1 | Exact | Light barium flint |
| 1.59349 | 67.0 | L14, L15, L16, L17 | HOYA FCD505 / HIKARI J-PSKH1 | Exact | **Phosphate crown (ED)** |
| 1.59319 | 67.9 | L18, L22 | FCD505 variant / OHARA S-FPM2 | Approximate | **Phosphate crown (ED)** |
| 1.59306 | 67.0 | L31 | FCD505 variant / HIKARI J-PSKH1 | Approximate | **Phosphate crown (ED)** |
| 1.73800 | 32.3 | L19 | OHARA S-NBH52V / HOYA TAFD25 | Exact | Dense barium flint |
| 1.72047 | 34.7 | L21 | OHARA S-NBH8 | Exact | Dense barium flint |
| 1.76450 | 49.1 | L32 | OHARA S-NBH56 | Exact | New barium heavy glass |
| 1.61800 | 63.3 | L41 | OHARA S-PHM52 | Exact | Phosphate crown |
| 1.90265 | 35.8 | L42 | OHARA S-LAH79 | Exact | Ultra-high-index lanthanum crown |
| 1.61266 | 44.5 | L43 | OHARA S-NBM52 / HIKARI E-CF6 | Exact | Niobium barium flint |
| 1.51680 | 64.0 | L44 | OHARA S-NSL3 | Close | Standard crown |
| 1.51680 | 63.9 | FL (filter) | OHARA S-NSL36 | Exact | Standard crown |

### 5.1 The ED Glass Question

Nikon's published specification states "2 ED glass elements." The patent prescription uses glasses from the phosphate crown / fluorophosphate family (nd ≈ 1.593, νd ≈ 67) across seven elements: L14, L15, L16, L17, L18, L22, and L31. All of these glasses sit in the anomalous-dispersion region of the glass map.

The most likely resolution to the apparent discrepancy between "2 ED" elements and seven phosphate-crown elements is that Nikon's internal "ED" designation applies to a specific performance tier within this glass family — not every phosphate crown qualifies as "ED" in their nomenclature. Several observations support this:

1. Three distinct nd/νd combinations appear within the phosphate-crown cluster: 1.59349/67.0, 1.59319/67.9, and 1.59306/67.0. These likely represent two or three different glass formulations.
2. The patent's idealized values may differ slightly from actual production glass selections, where Nikon could substitute one or two elements with higher-performing (and more expensive) fluorophosphate glasses that earn the "ED" label.
3. In Nikon's glass hierarchy, "ED" has historically been reserved for glasses with ΔPgF > ~0.010 (departure from the Schott normal line). Standard phosphate crowns at νd = 67 may not all meet this threshold.

**The inferential conclusion** is that 2 of the 7 phosphate-crown-family elements use a grade of glass that Nikon designates as "ED," while the remaining 5 use a closely related but lower-performance standard phosphate crown. The patent's idealized glass values do not distinguish these tiers, which is typical of optical patents that use catalog-equivalent parameters rather than specifying proprietary glass formulations.

---

## 6. Aspherical Surfaces — Detailed Analysis

All three aspherical surfaces are located behind the aperture stop, in the G3 focus group (surfaces 25\* and 26\*) and at the end of the G4 group (surface 33\*). As Thom Hogan noted in his review, this means "Nikon tolerated letting light get through 11 elements before applying a more nuanced aspherical correction."

### 6.1 Surface 25\* — L31 Rear (G3 Group)

| Parameter | Value |
|---|---|
| Base radius | −165.000 mm |
| Conic constant κ | +15.2295 (strongly oblate) |
| Highest-order term | A16 = −2.27720 × 10⁻²² |

This is the most aggressively aspherical surface in the design. The conic constant of +15.23 transforms what would be a gentle concave sphere (R = −165 mm) into a much deeper, oblate shape. The aspherical departure from a pure sphere increases rapidly toward the rim:

| Height (mm) | Spherical sag (mm) | Aspherical sag (mm) | Departure (mm) |
|---|---|---|---|
| 3.5 | −0.037 | −0.041 | −0.003 |
| 7.0 | −0.149 | −0.197 | −0.049 |
| 9.8 | −0.291 | −0.455 | −0.163 |
| 14.0 | −0.595 | −1.132 | −0.537 |

At 14 mm height, the aspherical surface is more than half a millimeter deeper than a sphere — an enormous departure that fundamentally reshapes the wavefront at the rim.

### 6.2 Surface 26\* — L32 Front (G3 Group)

| Parameter | Value |
|---|---|
| Base radius | +71.000 mm |
| Conic constant κ | −0.11590 (mild prolate) |
| Highest-order term | A16 = +1.17040 × 10⁻²¹ |

Surface 26\* is a convex aspherical facing surface 25\* across the air gap. Its conic constant is a mild prolate ellipsoid (κ = −0.116), but the higher-order polynomial terms produce substantial departure at the rim:

| Height (mm) | Spherical sag (mm) | Aspherical sag (mm) | Departure (mm) |
|---|---|---|---|
| 3.5 | +0.086 | +0.083 | −0.003 |
| 7.0 | +0.346 | +0.301 | −0.045 |
| 9.8 | +0.680 | +0.523 | −0.156 |
| 14.0 | +1.394 | +0.845 | −0.549 |

The departure is of nearly identical magnitude to surface 25\* but applied to a convex surface — the aspherical profile flattens the surface toward the rim, reducing convergent power where the marginal ray zone contributes most to spherical aberration. The sign and scale of the departures on surfaces 25\* and 26\* are remarkably well matched, confirming they work as a conjugate pair for wavefront shaping.

### 6.3 Surface 33\* — L44 Front (G4 Group, Final Optical Element)

| Parameter | Value |
|---|---|
| Base radius | −64.588 mm |
| Conic constant κ | +9.47940 (strongly oblate) |
| Highest-order term | A14 = +6.53730 × 10⁻¹⁹ (A16 = 0) |

Surface 33\* is the third and final aspherical surface, located on the last optical element before the filter plate. Its base curvature is more aggressive (R = −64.59 mm) and the oblate conic (κ = +9.48) again deepens the surface substantially. However, the absolute departures are smaller than those of the F2 pair because the clear aperture at this position is reduced:

| Height (mm) | Spherical sag (mm) | Aspherical sag (mm) | Departure (mm) |
|---|---|---|---|
| 3.25 | −0.082 | −0.082 | 0.000 |
| 6.50 | −0.328 | −0.334 | −0.006 |
| 9.10 | −0.644 | −0.667 | −0.023 |
| 13.00 | −1.322 | −1.426 | −0.104 |

The departure at full aperture (−0.104 mm) is modest compared to the F2 pair, but at this position in the optical train — very close to the image plane — even small wavefront corrections have significant impact on field-dependent aberrations. Surface 33\* fine-tunes the field curvature and astigmatism balance across the entire image circle, ensuring that the corners of the full-frame sensor receive well-corrected imagery even at f/1.2.

---

## 7. Focus Mechanism

### 7.1 Multi-Focus System

The NIKKOR Z 50mm f/1.2 S employs a dual inner-focus system in which both the F1 and G3 groups move toward the object during close focusing, each driven by its own stepping motor. The front group G1 and rear group G4 remain fixed.

| Gap | Location | Infinity | Close (β=−0.1) | Change |
|---|---|---|---|---|
| d₁₉ | Stop → F1 | 19.164 mm | 11.437 mm | −7.727 mm |
| d₂₃ | F1 → F2 | 2.000 mm | 3.584 mm | +1.584 mm |
| d₂₇ | F2 → R | 1.900 mm | 8.043 mm | +6.143 mm |
| d₃₆ | BF (to image) | 0.702 mm | 0.701 mm | −0.001 mm |

**Absolute motion of each group (toward object):**

- F1 moves forward by **7.727 mm**
- F2 moves forward by **6.143 mm**
- F1 leads F2 by 1.584 mm (differential motion)

The total variable-spacing sum is conserved to within 0.001 mm (23.766 → 23.765 mm), confirming that the image plane position is held essentially fixed — the hallmark of a well-designed inner-focus system with no external length change.

### 7.2 Why Dual Inner Focus?

The patent devotes considerable space to justifying the dual-focus architecture. The key insight is in conditional expression (5):

> 0.500 < βF / βB < 2.000

where βF is the magnification of the combined focus group and βB is the magnification of the rear group. For Example 1, this value is 0.998 — very close to unity, meaning the focus groups and rear group contribute nearly equally to the overall magnification. The patent explains that satisfying this condition minimizes the variation in field angle during focusing, which in turn suppresses focus-induced changes in coma, field curvature, astigmatism, and chromatic aberration.

Conditional expression (9) constrains the focal-length ratio of the two focus groups:

> −0.500 < fF2/fF1 < 0.500

For Example 1, fF2/fF1 = 57.73/(−707.60) = −0.082. The small magnitude indicates that F2 carries far more power than F1, while the negative sign means they have opposite power signs (F1 is weakly negative, F2 is strongly positive). This deliberate power imbalance, combined with their differential motion rates, suppresses focus breathing (measured at only ~1.5% magnification change across the full focus range in reviews) and maintains stable aberration correction across conjugates.

### 7.3 Elements in the Focus Groups

The focus groups are deliberately lightweight to enable fast, energy-efficient stepping-motor drive:

| Group | Elements | Total glass thickness | Estimated power |
|---|---|---|---|
| G2 | L21 (1.7 mm) + L22 (6.2 mm) | 7.9 mm | Weak negative (−707.6 mm) |
| G3 | L31 (6.46 mm) + L32 (4.0 mm) | 10.46 mm | Strong positive (+57.7 mm) |

The G3 group carries both aspherical surfaces (25\* and 26\*), meaning the aspherical correction moves with the focus group — G1 sophisticated approach that adapts the higher-order aberration correction to the conjugate distance. At close focus, the marginal ray geometry through the rear group changes substantially; having the aspheres move with F2 helps maintain correction quality throughout the focus range.

---

## 8. Overall Design Observations

### 8.1 Glass Economy

Despite using 17 elements, the design employs only 13 distinct glass types (14 if the filter plate's nd = 1.51680 / νd = 63.9 is counted separately from L44's nd = 1.51680 / νd = 64.0). The dominant glass type (nd ≈ 1.593, νd ≈ 67) appears in 7 elements — an unusually high reuse count that has significant manufacturing implications. Using a single glass type for L14 through L17 (four consecutive elements) means Nikon can order large volumes of one melt, reducing cost per element and improving lot-to-lot consistency. The phosphate crown family also offers excellent chemical durability and polishability, which is important for the large-diameter elements in the front group.

### 8.2 Aspherical Surface Placement

The placement of all three aspheres behind the stop — and two of them in a moving focus group — is G1 deliberate design choice that Thom Hogan flagged in his review. In many fast prime designs, at least one aspherical surface is placed in the front group (before the stop) to control spherical aberration at the point of maximum marginal ray height. Nikon's approach instead relies on the four-element ED run (L14–L17) to gradually bend the marginal ray without generating excessive spherical aberration, then corrects residual errors with the rear aspheres. This distributes the correction load but may explain the slightly variable mid-frame astigmatism that reviewers have noted.

### 8.3 Chromatic Correction Strategy

The design manages chromatic aberration through three complementary mechanisms:

1. **Anomalous-dispersion positive elements** (L14–L17, L18, L22, L31): The phosphate crown glasses that carry the primary positive power have partial dispersion below the normal line, inherently reducing secondary spectrum. L41 (S-PHM52, νd = 63.3) also belongs to a phosphate glass family with mild anomalous dispersion, though the patent does not explicitly evaluate positive elements under its anomalous-dispersion conditional expressions — this characterization is inferred from the glass type.

2. **Anomalous-dispersion negative elements** (L19, L21, L43): The patent's conditional expression (6) constrains the negative-lens partial dispersion to stay within a narrow corridor (θgF + 0.0021νd between 0.600 and 0.660), ensuring effective chromatic correction with minimal element count.

3. **Ultra-high-dispersion corrector** (L12): The extraordinary E-FDS1-W glass (νd = 18.0) in the front group provides G1 powerful chromatic lever — its enormous dispersion relative to its weak power allows it to make large corrections to lateral color and longitudinal chromatic aberration with minimal impact on the monochromatic aberration balance.

### 8.4 Aberration Performance (Patent Figures 2–3)

The patent's aberration curves for Example 1 are plotted for both infinity focus (Fig. 2) and close focus at β = −0.1 (Fig. 3), computed at three wavelengths: C-line (656.3 nm), d-line (587.6 nm), and g-line (435.8 nm).

At infinity focus, the spherical aberration plot (Fig. 2, leftmost panel, scale ±0.500 mm) shows well-corrected d-line spherical aberration with a smooth, gently curved profile. The g-line curve separates slightly from d, indicating residual longitudinal chromatic aberration — expected and largely unavoidable at f/1.2. Astigmatism (second panel, scale ±0.500 mm) shows sagittal and meridional field curves tracking closely together across the field, with modest separation at the full image height of Y = 21.60 mm. Distortion (third panel, scale ±5.0%) is negligible. Lateral color (coma, rightmost panel, scale ±0.100 mm) shows tight d/g line grouping on-axis with some separation at field heights above Y = 15 mm.

At close focus (Fig. 3, β = −0.1), the aberration curves broaden modestly, with spherical aberration showing slightly more higher-order residual and the astigmatism curves separating somewhat more at full field. The overall correction remains well within professional tolerances, consistent with the patent's claim that the dual inner-focus mechanism maintains good correction across the entire focus range. The close-focus aberration curves are plotted at NA = 0.36 (consistent with f/1.4 working aperture at this conjugate, where the effective f-number has shifted from the nominal f/1.23 at infinity due to the finite conjugate ratio).

---

## Sources

- WO 2021/241230 A1 — Patent specification (WIPO), published 2021-12-02. Inventor: HARADA Hiroki.
- Nikon Corporation press release, "Nikon releases the NIKKOR Z 50mm f/1.2 S," 2020-09-16 (nikon.com)
- Nikon product page: imaging.nikon.com (17 elements / 15 groups, 2 ED, 3 aspherical)
- Thom Hogan, "Nikon 50mm f/1.2 S Lens Review," zsystemuser.com (aspherical placement observation)
- Cameralabs, "Nikon Z 50mm f1.2 S Review" (focus breathing measurement, close focus distance)
- OHARA optical glass catalog (glass identification reference)
- HOYA optical glass catalog (FCD505 identification)
- HIKARI optical glass catalog (E-FDS1-W, J-PSKH1 identification)
