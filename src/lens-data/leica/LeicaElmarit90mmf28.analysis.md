# Leica Elmarit 90mm f/2.8 — Optical Analysis

**Patent:** US 2,995,980 · "Triplet Objective for Optical Apparatus"
**Inventors:** Otto Zimmermann and Georg Knetsch (Ernst Leitz G.m.b.H., Wetzlar)
**Filed:** December 11, 1957 · **Granted:** August 15, 1961
**Priority:** Germany, December 21, 1956
**Example analysed:** Sole numerical example (claim prescription)

---

## 1. Historical Context

The Leica Elmarit 90mm f/2.8 was introduced in 1959 for both the Leica screw mount (LTM) and the M bayonet mount (introduced 1954). It was one of the first Leica 90mm lenses to offer an f/2.8 maximum aperture — earlier 90mm optics for the Leica system, such as the Elmar 90mm f/4, were limited to f/4. Faster lenses existed — the Summarex 85mm f/1.5 and the Thambar 90mm f/2.2 — but these were specialised, low-volume instruments (the Thambar being a deliberate soft-focus design with under-corrected spherical aberration, produced in a run of only about 3,000 units from 1935).

The Elmarit 90mm f/2.8 remained in production until approximately 1974 and was succeeded by the Tele-Elmarit 90mm f/2.8, a shorter, more telephoto-ratio design with 5 elements in 4 groups, introduced in 1964. A further "Thin" Tele-Elmarit-M followed in 1974 with a reduced 4-element, 4-group formula. The modern Elmarit-M 90mm f/2.8 (1990–2008) represented a completely different design.

The patent is assigned to Ernst Leitz G.m.b.H. in Wetzlar, and the inventors — Zimmermann and Knetsch — were Wetzlar-based optical designers. Although some secondary sources have attributed the Elmarit 90mm to Walter Mandler (who led Leitz Canada's optical design), the patent record does not support this for the first version.

The lens uses 12 aperture blades, has a minimum focusing distance of 1 metre, measures approximately 52 mm in diameter by 94 mm in length, and weighs approximately 330 g. The optical head detaches from the focusing helicoid, allowing it to be used on the Visoflex reflex housing for close-up work.

---

## 2. Design Type and Topology

The patent describes a **modified Cooke Triplet** — the classic positive–negative–positive three-group configuration — in which the middle and rear components are each cemented doublets. The resulting layout is **5 elements in 3 groups**:

| Group | Elements | Configuration | Role |
|:------|:---------|:--------------|:-----|
| I | L1 | Singlet | Front positive collector |
| II | L2 + L3 | Cemented doublet | Middle negative corrector |
| III | L4 + L5 | Cemented doublet | Rear positive image-former |

This architecture preserves the Cooke Triplet's fundamental three-group power distribution (P–N–P) while adding two cemented interfaces, which provide extra degrees of freedom for correcting chromatic aberrations — particularly the sphero-chromatic aberration that limited earlier f/2.8 triplets at longer focal lengths.

Notably, this is **not a telephoto design**. The total optical track (front vertex to image) is 121.8 mm at f = 100 normalisation — a telephoto ratio of 1.22, meaning the lens is 22% longer than its focal length. This explains the relatively long barrel (94 mm from mount to front). The subsequent Tele-Elmarit 90mm f/2.8 (1964, 5 elements in 4 groups) adopted a true telephoto configuration — as the "Tele-" prefix indicates — achieving a substantially shorter barrel.

---

## 3. Patent Prescription

The patent gives all linear dimensions normalised to an equivalent focal length of f = 100 mm. For the 90 mm production lens, a uniform scale factor of 0.9 applies to all radii, thicknesses, and air spacings.

The patent contains two tables: an "example" table in the specification text and a claim table in the single claim. These are identical except for the first radius: the example table gives r₁ = +44.65 while the claim table gives r₁ = +44.05. Paraxial ray tracing confirms that the claim value yields EFL = 100.12 mm (0.12% from nominal), whereas the example value gives 101.88 mm (1.9% off). **The claim table value r₁ = +44.05 is adopted as correct throughout this analysis.**

### 3.1 Prescription Table (f = 100 mm normalisation)

| Surface | R (mm) | Spacing | to next (mm) | nd | νd |
|:--------|-------:|:--------|-------------:|------:|-----:|
| r₁ | +44.05 | d₁ | 6.70 | 1.69100 | 54.8 |
| r₂ | −267.94 | a₁ | 7.00 | (air) | |
| r₃ | −49.04 | d₂ | 5.40 | 1.75520 | 27.5 |
| r₄ | −26.71 | d₃ | 3.00 | 1.63980 | 34.6 |
| r₅ | +34.87 | a₂ | 4.80 | (air) | |
| r₆ | −1326.67 | d₄ | 3.00 | 1.62588 | 35.6 |
| r₇ | +29.16 | d₅ | 9.27 | 1.74400 | 44.9 |
| r₈ | −49.93 | (BFD) | 82.59 | (air) | |

**Sign convention (per patent):** positive radii denote surfaces convex toward the front (object side); negative radii denote surfaces concave toward the front. This is the standard optical convention where positive R places the centre of curvature to the right.

### 3.2 Computed System Parameters (ABCD matrix, f = 100 mm normalisation)

| Parameter | Value |
|:----------|------:|
| Effective focal length (EFL) | 100.12 mm |
| Back focal distance (BFD) | 82.59 mm |
| Front focal distance (FFD) | −81.75 mm |
| Total track (r₁ to image) | 121.76 mm |
| Element/gap sum (r₁ to r₈) | 39.17 mm |
| Entrance pupil semi-diameter (f/2.8) | 17.88 mm |
| Petzval sum | 0.00202 mm⁻¹ |
| Petzval radius | 494.5 mm |
| Petzval sum × EFL | 0.202 |

The ABCD system matrix determinant is exactly 1.000 (air-to-air system), confirming the trace is self-consistent. The patent text states that a ray height of 17.9 mm corresponds to f/2.8 at f = 100 mm; our computed value of 17.88 mm agrees to 0.1%.

### 3.3 Scaled Production Parameters (f = 90 mm)

| Parameter | Value |
|:----------|------:|
| EFL | ≈ 90.1 mm |
| BFD | ≈ 74.3 mm |
| Total track | ≈ 109.6 mm |
| Half-field angle (24 × 36 mm format) | 13.5° |
| Full field angle | 27.0° |
| Entrance pupil semi-diameter (f/2.8) | 16.1 mm |
| Filter thread | 39 mm (E39) |

---

## 4. Aspherical Surfaces

**There are none.** The patent specifies eight spherical surfaces with no aspherical coefficients, aspherical sag equations, or references to non-spherical surfaces anywhere in the text. This is consistent with the era — aspherical surfaces on production photographic objectives were extremely rare in the late 1950s. Leitz did not introduce aspherical elements into serial production until significantly later. The design achieves its correction entirely through choice of glass types, the two cemented interfaces, and careful power distribution across the spherical surfaces.

---

## 5. Glass Identification

The patent provides nd and νd values for each element. Matching against the SCHOTT optical glass catalog (the primary supplier for Leitz Wetzlar in this era) yields the following identifications:

### L1 — nd = 1.69100, νd = 54.8

**Identification: SCHOTT LaK9** (lanthanum crown)
**Confidence: Confirmed.** The catalog value for LaK9 is nd = 1.69100, νd = 54.7; the refractive index is an exact match and the Abbe number differs by 0.1, well within normal melt-to-melt variation (Schott's standard tolerance on νd is ±0.8%). Six-digit glass code: 1691/548.

LaK9 is a lanthanum crown (LaK) glass with moderately high refractive index and relatively low dispersion. In the 1950s, lanthanum-containing glasses were among the newer "highly refracting, weak dispersing" glasses that the patent specifically credits with enabling the f/2.8 aperture — an advance over the prior f/6.3 triplet designs. Its high nd allows strong positive power with moderate surface curvatures, reducing spherical aberration contributions.

### L2 — nd = 1.75520, νd = 27.5

**Identification: SCHOTT SF4** (dense flint)
**Confidence: Confirmed.** Both nd and νd are exact catalog matches. Six-digit glass code: 1755/275.

SF4 is a dense flint glass with very high refractive index and high dispersion. Within the middle doublet, L2 is the positive element despite the group being negative overall. The patent explicitly states that "the glass of the positive lens of the negative component has a smaller 'Nu' value [lower Abbe number, i.e. higher dispersion] than the glass of the negative lens." SF4's νd = 27.5 satisfies this condition relative to L3's νd = 34.6.

### L3 — nd = 1.63980, νd = 34.6

**Identification: Flint-family glass, nearest catalog match SCHOTT F6**
**Confidence: Family-level only.** The nearest modern SCHOTT catalog glass is F6 (nd = 1.63636, νd = 35.4), but the discrepancy is significant: Δnd = 0.00344, Δνd = 0.8. Six-digit glass code: 1640/346.

This glass falls in the flint (F) region of the Abbe diagram but does not match any glass in the current Schott catalog exactly. In the 1950s, Schott's catalog included glass types that have since been discontinued or reformulated — particularly lead-containing flints that were later replaced with eco-friendly equivalents. The patent value nd = 1.63980 / νd = 34.6 likely represents a specific historical glass type or melt batch available to Leitz in 1956–1957. Alternatively, Leitz may have used glass from another supplier (e.g., their own internal melts, or Chance-Pilkington glass). At family level, it is unambiguously a flint glass.

### L4 — nd = 1.62588, νd = 35.6

**Identification: SCHOTT BaSF1** (barium dense flint)
**Confidence: Confirmed.** The catalog value for BaSF1 is nd = 1.62588, νd = 35.7; the refractive index is an exact match and νd differs by 0.1. Six-digit glass code: 1626/356.

BaSF1 is a barium-containing dense flint with moderate refractive index and moderate dispersion. Within the rear doublet, L4 serves as the negative element. Its nd is significantly lower than L5's nd (Δnd = 0.118), which creates a strong refractive index difference at the cemented interface — important for controlling spherical aberration.

### L5 — nd = 1.74400, νd = 44.9

**Identification: SCHOTT LaF2** (lanthanum flint)
**Confidence: Confirmed.** The catalog value for LaF2 is nd = 1.74400, νd = 44.7; the refractive index is an exact match and νd differs by 0.2. Six-digit glass code: 1744/449.

LaF2 is a lanthanum flint glass — high refractive index with moderate dispersion. This is another of the "new" glass types referenced in the patent. Lanthanum flint occupies a region of the Abbe diagram that was not accessible with classical crown/flint glass combinations, enabling the rear doublet to achieve strong positive power with improved chromatic performance. L5 is by far the thickest element in the system (d₅ = 9.27 mm at f = 100 scale) and carries the strongest individual positive power (EFL = +26.1 mm).

### Glass Summary

| Element | nd | νd | Glass | Family | Confidence |
|:--------|------:|-----:|:------|:-------|:-----------|
| L1 | 1.69100 | 54.8 | LaK9 | Lanthanum crown | Confirmed |
| L2 | 1.75520 | 27.5 | SF4 | Dense flint | Confirmed |
| L3 | 1.63980 | 34.6 | (F-type) | Flint | Family only |
| L4 | 1.62588 | 35.6 | BaSF1 | Barium dense flint | Confirmed |
| L5 | 1.74400 | 44.9 | LaF2 | Lanthanum flint | Confirmed |

Four of the five glasses are confidently identified to the specific Schott catalog type. Two of the five (L1 and L5) are lanthanum-containing glasses — these were the enabling technology for this design's f/2.8 aperture at 90 mm focal length.

---

## 6. Element-by-Element Optical Analysis

### L1 — Front Positive Collector (Group I)

| Property | Value |
|:---------|------:|
| Surfaces | r₁ = +44.05, r₂ = −267.94 |
| Thickness | 6.70 mm |
| Shape | Biconvex (strongly convex front, nearly flat rear) |
| Glass | LaK9 (nd = 1.691, νd = 54.8) |
| Element EFL | +55.2 mm |

L1 is the front positive collector of the triplet. Its strongly convex front surface (r₁ = +44.05) provides the majority of the element's optical power, while the rear surface (r₂ = −267.94) is nearly flat — the radius of curvature is 6× the EFL, so this surface contributes only weak positive power. The element is effectively a plano-convex lens oriented convex-toward-object.

In the context of the triplet, L1's role is to collect the incoming light cone and begin converging it. Its relatively high index (nd = 1.691) allows the front surface to achieve the needed power without excessive curvature, which limits the spherical aberration contribution from this surface. With νd = 54.8, L1 is the least dispersive element in the system, which is appropriate for the element carrying the most surface power — any chromatic contribution from L1 is kept moderate.

The large air gap a₁ = 7.00 mm after L1 allows the ray bundle to spread spatially before entering Group II, which is important for the triplet's off-axis correction strategy.

### L2 — Positive Element of the Middle Doublet (Group II)

| Property | Value |
|:---------|------:|
| Surfaces | r₃ = −49.04 (front), r₄ = −26.71 (cemented rear) |
| Thickness | 5.40 mm |
| Shape | Positive meniscus (concave toward object) |
| Glass | SF4 (nd = 1.755, νd = 27.5) |
| Element EFL | +70.3 mm |
| Cemented to | L3 |

L2 is a positive meniscus with both surfaces concave toward the front. The rear surface r₄ is steeper than the front surface r₃ (|R₄| = 26.71 < |R₃| = 49.04), which produces net positive power. Despite belonging to the negative middle group, L2 is individually positive — the group's negative power comes from the much stronger negative power of L3.

The seemingly paradoxical choice of a highly dispersive glass (SF4, νd = 27.5) for a positive element within a negative group is the core of the patent's innovation. The patent states that the refractive index difference between L2 and L3 must be at least 0.07 — and at 0.115, the actual design significantly exceeds this minimum. This large Δnd at the cement surface (r₄) creates a strong cemented interface that enables correction of sphero-chromatic aberration (the variation of spherical aberration with wavelength), which was the principal limitation of earlier triplet designs at f/2.8.

The cemented surface r₄ has a radius of −26.71 mm. The patent specifies that this radius should lie between 0.18f and 0.40f (i.e., 18–40 mm for f = 100). At r₄/f = 0.267, the design falls squarely within this range.

### L3 — Negative Element of the Middle Doublet (Group II)

| Property | Value |
|:---------|------:|
| Surfaces | r₄ = −26.71 (cemented front), r₅ = +34.87 (rear) |
| Thickness | 3.00 mm |
| Shape | Biconcave |
| Glass | F-type flint (nd = 1.640, νd = 34.6) |
| Element EFL | −23.2 mm |
| Cemented to | L2 |

L3 is a strongly negative biconcave element. Its power (EFL = −23.2 mm) is the strongest of any element in the system, making it the dominant negative contributor. The combination of L2 (+70.3 mm) and L3 (−23.2 mm) yields a net group EFL of −32.8 mm.

L3 uses a flint glass with higher νd (34.6) than L2's SF4 (27.5). In a conventional achromatic doublet, the crown (high-νd) element is positive and the flint (low-νd) element is negative. Here the arrangement is reversed: the more dispersive glass is positive and the less dispersive glass is negative. This "reversed doublet" configuration within the negative group is deliberate — it allows the cemented interface to correct the sphero-chromatic zone that limited earlier designs. The patent's prose describes this as the essential insight of the invention.

### L4 — Negative Element of the Rear Doublet (Group III)

| Property | Value |
|:---------|------:|
| Surfaces | r₆ = −1326.67 (front, nearly flat), r₇ = +29.16 (cemented rear) |
| Thickness | 3.00 mm |
| Shape | Biconcave (weakly, with nearly flat front) |
| Glass | BaSF1 (nd = 1.626, νd = 35.6) |
| Element EFL | −45.6 mm |
| Cemented to | L5 |

L4 has a nearly flat front surface (r₆ = −1326.67; the 1/R contribution is negligible) and a moderately curved rear surface (r₇ = +29.16). The result is effectively a plano-concave element contributing moderate negative power.

Within the rear doublet, L4 serves the traditional role of the flint (negative, lower-νd) element. Its primary function is chromatic: it introduces negative dispersion that partially cancels the positive dispersion of L5, achromatising the rear group. The refractive index step at the cemented surface r₇ is substantial (Δnd = 0.118, from 1.626 to 1.744), providing a strong refractive interface for controlling both chromatic and spherical aberrations.

### L5 — Main Positive Element of the Rear Doublet (Group III)

| Property | Value |
|:---------|------:|
| Surfaces | r₇ = +29.16 (cemented front), r₈ = −49.93 (rear) |
| Thickness | 9.27 mm |
| Shape | Biconvex |
| Glass | LaF2 (nd = 1.744, νd = 44.9) |
| Element EFL | +26.1 mm |
| Cemented to | L4 |

L5 is the optically strongest positive element in the entire system (EFL = +26.1 mm) and is by far the thickest element (d₅ = 9.27 mm, 38% more than the next thickest element L1). Its biconvex shape with the steeper surface toward the front (r₇ = +29.16 vs. |r₈| = 49.93) concentrates power on the cemented interface where the refractive index transition is most favourable.

The choice of LaF2 (lanthanum flint) is critical. With nd = 1.744 and νd = 44.9, LaF2 provides high refractive power per unit curvature while maintaining moderate dispersion. The combination of L4 (BaSF1, νd = 35.6) and L5 (LaF2, νd = 44.9) has a Δνd of 9.3, which is modest for an achromatic doublet — but the high-index glass allows the doublet to function effectively as both an image-forming group and a chromatic corrector.

The rear surface r₈ = −49.93 is the final optical surface before the image. Its moderate concave curvature contributes to the lens's field curvature correction by bending the marginal ray bundle appropriately before it reaches the focal plane.

---

## 7. Group Power Distribution

The classic Cooke Triplet distributes power as positive–negative–positive across three separated groups, with the negative group controlling the Petzval sum and chromatic aberrations.

| Group | EFL (mm) | Power (mm⁻¹) | Role |
|:------|:---------|:-------------|:-----|
| I (L1) | +55.2 | +0.01811 | Front positive; collects light, begins convergence |
| II (L2+L3) | −32.8 | −0.03046 | Middle negative; Petzval correction, chromatic balance |
| III (L4+L5) | +54.9 | +0.01821 | Rear positive; image formation, final chromatic correction |

Groups I and III have nearly identical focal lengths (+55.2 and +54.9 mm, respectively), which is a signature of a symmetric or quasi-symmetric triplet — this symmetry helps correct coma and distortion across the field. The middle group's stronger negative power (−32.8 mm) is needed to yield a net system focal length of 100 mm despite the two positive groups being only ~55 mm.

---

## 8. Chromatic Correction Strategy

### 8.1 The Patent's Central Claim

The patent identifies sphero-chromatic aberration as the fundamental limitation of prior triplet designs at f/2.8 with longer focal lengths. Sphero-chromatic aberration is the wavelength dependence of spherical aberration — at full aperture, different wavelengths focus at different distances from the paraxial focus, producing coloured halos that cannot be corrected by simple defocusing.

The patent's solution is to introduce a cemented surface in the middle (negative) component with specific glass constraints:

1. The positive element (L2) of the negative group must use a glass with *lower* Abbe number (higher dispersion) than the negative element (L3). This is the reverse of a conventional achromatic doublet.
2. The refractive indices of the two glasses must differ by at least 0.07 (the actual design achieves 0.115).
3. The cement radius (r₄) should lie between 0.18f and 0.40f.

### 8.2 How It Works

In a conventional achromatic doublet (crown positive, flint negative), the cemented interface primarily corrects axial colour — the longitudinal shift of focus between wavelengths. But sphero-chromatic aberration is a higher-order effect involving the interaction of spherical aberration and chromatic dispersion across the full aperture.

By reversing the doublet arrangement in the middle group (highly dispersive positive element, less dispersive negative element), the cemented interface generates a specific pattern of wavefront correction that counteracts the sphero-chromatic contribution of the outer positive groups. The large refractive index difference at r₄ (1.755 to 1.640) creates a powerful refracting interface that acts preferentially on the zonal rays — those at intermediate aperture heights where the sphero-chromatic zone is strongest.

The rear doublet (Group III) uses a more conventional arrangement (lower-νd negative + higher-νd positive) to handle the remaining chromatic balance, but with lanthanum glasses rather than classical crown/flint, giving access to a more favourable region of the Abbe diagram.

### 8.3 Correction Curves

The patent's Figure 2 shows longitudinal spherical aberration curves for wavelengths C (656 nm), e (546 nm), F (486 nm), and g (436 nm), plotted as percentage of focal length versus ray height. The patent notes that the maximum aberration across all wavelengths is approximately 0.25% of the focal length (i.e., ±0.25 mm at f = 100 mm), which represents good control of the sphero-chromatic zone out to the full f/2.8 aperture (ray height 17.9 mm).

---

## 9. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computation yields:

| Surface | R | n → n′ | Petzval contribution |
|:--------|------:|:-------|---------------------:|
| r₁ | +44.05 | 1.000 → 1.691 | +0.009277 |
| r₂ | −267.94 | 1.691 → 1.000 | +0.001525 |
| r₃ | −49.04 | 1.000 → 1.755 | −0.008774 |
| r₄ | −26.71 | 1.755 → 1.640 | +0.001501 |
| r₅ | +34.87 | 1.640 → 1.000 | −0.011189 |
| r₆ | −1326.67 | 1.000 → 1.626 | −0.000290 |
| r₇ | +29.16 | 1.626 → 1.744 | +0.001429 |
| r₈ | −49.93 | 1.744 → 1.000 | +0.008544 |
| **Sum** | | | **+0.002022** |

The Petzval radius (1/ΣPetzval) is 494.5 mm, and the Petzval sum normalised by EFL is 0.202. For a photographic lens covering the 24 × 36 mm format, this represents good field curvature control. The negative middle group (surfaces r₃–r₅) contributes −0.018462 to the Petzval sum, nearly cancelling the combined positive contributions of Groups I and III (+0.020484). The residual of +0.002022 leaves a slight inward (positive) field curvature — the Petzval surface curves toward the lens — which is the conventional choice for negative-film photography where film flatness is imperfect and a slight inward bias is preferable.

---

## 10. Focus Mechanism

The patent provides a single set of air spacings with no variable-gap table. This indicates **unit focusing**: the entire optical assembly translates forward along the optical axis to focus on closer objects. The camera body's flange-to-film register distance (27.80 mm for Leica M mount) is fixed; the helicoid extends the lens forward, increasing the distance from the rear element to the film plane.

For the production lens at f = 90 mm, the helicoid extension required to focus at the minimum distance of 1 metre is approximately:

$$
\Delta = \frac{f^2}{s - f} = \frac{90^2}{1000 - 90} \approx 8.9\;\text{mm}
$$

This is a modest extension, consistent with the compact helicoid design of the Elmarit 90mm f/2.8. The lens barrel incorporates a helicoid focusing ring that rotates to translate the optical head axially, a design that also permits the head to be unscrewed entirely for use on the Visoflex bellows adapter.

Unit focusing is optically simple — all aberration balances remain exactly as designed, since the element separations do not change. The only optical consequence is a slight change in magnification (and hence effective focal length) at close focus, which is negligible at the 1 m minimum distance.

---

## 11. Aperture Stop Position

The patent does not explicitly specify the aperture stop position in the prescription table. From the patent's Figure 1, the iris diaphragm is located in the second air gap (a₂ = 4.80 mm), between Groups II and III. This is the standard position for a Cooke Triplet design — the stop sits at or near the negative group, which is the natural location for minimising the asymmetric off-axis aberrations (coma, lateral colour) by exploiting the quasi-symmetry of the positive groups flanking the stop.

For the data file, the stop is placed at the centre of the a₂ air gap, splitting it into two equal intervals of 2.40 mm (scaled to 2.16 mm at production). This is an estimate based on Figure 1; the precise stop position within the gap does not significantly affect the paraxial system parameters (EFL, BFD, Petzval sum) but does influence the entrance pupil position and off-axis ray tracing.

The 12-blade iris diaphragm produces a nearly circular aperture across all f-stops, which contributes to the smooth bokeh character noted by users of this lens.

---

## 12. Design Merits and Limitations

### Merits

The Zimmermann–Knetsch Elmarit achieves several notable outcomes for its era:

The Petzval sum normalised to EFL (0.202) is well-controlled for a 5-element design, reflecting the effectiveness of the strong negative middle group in balancing the positive contributions of Groups I and III. The use of lanthanum glasses (LaK9, LaF2) in two of the five elements was forward-looking and essential to the performance at f/2.8. The reversed doublet in the middle group — with the higher-dispersion glass in the positive role — was the key innovation that enabled control of sphero-chromatic aberration at the full f/2.8 aperture, which the patent correctly identifies as the limiting factor in prior triplet designs. The near-symmetry of Groups I and III (EFL = +55.2 and +54.9 mm) provides inherent correction of odd-order aberrations (coma, distortion, lateral colour) across the field.

### Limitations

As a 5-element, all-spherical design from 1957, the Elmarit 90mm f/2.8 has limitations relative to later designs. Users have noted a tendency toward flare under direct illumination — with only 6 air-glass surfaces (the two cemented interfaces are glass-to-glass and produce no first-surface reflections), the potential for ghost images is limited to C(6,2) = 15 pairings, but the single-layer coatings of the era (MgF₂) had higher residual reflectance per surface than modern multi-coatings. The contrast performance wide open is described as having a period-characteristic softness — "that late '50s–'60s (early-M) look" — which some photographers value as a rendering quality rather than a flaw.

The 1 m minimum focusing distance, while standard for the era, limits the lens's close-up utility without the Visoflex adapter.

---

## 13. Summary

The Leica Elmarit 90mm f/2.8 (US 2,995,980) is a modified Cooke Triplet with 5 elements in 3 groups, achieving f/2.8 at a 90 mm focal length through the use of lanthanum glasses and an innovative reversed-dispersion cemented doublet in the middle group. The design is entirely spherical, with no aspherical surfaces. It is not a telephoto — the total track exceeds the focal length by 22% (telephoto ratio 1.22). Focusing is by unit extension of the entire optical assembly. The optical prescription is well-balanced, with near-symmetric positive groups flanking a powerful negative middle group, yielding a Petzval sum normalised to EFL of 0.202 and sphero-chromatic correction within 0.25% of the focal length at full aperture.

Five glass types are used: Schott LaK9 (confirmed), SF4 (confirmed), an F-family flint (family-level identification only), BaSF1 (confirmed), and LaF2 (confirmed). The two lanthanum glasses (L1 and L5) are the enabling materials for the design's performance.
