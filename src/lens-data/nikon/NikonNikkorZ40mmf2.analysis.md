# Nikon NIKKOR Z 40mm f/2 — Optical Analysis

**Patent:** JP 2021-189351 A
**Inventor:** Keigo Koida
**Assignee:** Nikon Corporation
**Filed:** June 2, 2020
**Published:** December 13, 2021
**Embodiment analyzed:** Example 4
**Production lens:** NIKKOR Z 40mm f/2 (released September 2021); also sold as the NIKKOR Z 40mm f/2 (SE)

---

## 1. Identification and Overview

JP 2021-189351A is a Nikon patent covering a family of compact, large-aperture prime lenses built around a three-group inner-focus architecture: a positive first group (G1), a positive second group (G2) serving as the focusing unit, and a negative third group (G3) acting as a field flattener. The patent presents seven numerical examples spanning focal lengths from 31.0 mm to 58.2 mm and maximum apertures from f/2.04 to f/2.89, all for full-frame (Ymax = 21.63 mm) coverage.

Example 4 corresponds to the production NIKKOR Z 40mm f/2. The identification is established through a convergence of hard specifications: the patent's design focal length of 41.194 mm and f/2.04 working aperture match the marketed 40 mm f/2; the design uses exactly 6 glass elements and 2 aspherical surfaces; and the patent's image circle of Ymax = 21.63 mm confirms full-frame FX coverage. Nikon's published specification of 6 elements in 4 groups is consistent with the patent's three focusing groups once the manufacturer's convention of counting air-separated lens components is applied; the patent itself notes that the lenses may be arranged as four lens components in total. Example 7 has almost the same focal length (f = 41.200 mm) but is an f/2.86, five-element design with a single front singlet, so Example 4 is the only candidate for the production f/2 lens. The match is an inference from specifications; the patent does not name a product. No ED (Extra-low Dispersion) glass is used, which aligns with the production lens's budget positioning and the absence of any ED marking in Nikon's published specifications.

### Key Parameters

| Parameter | Design (patent) | Marketed (Nikon) |
|-----------|:-----------:|:------------:|
| Focal length | 41.194 mm | 40 mm |
| Maximum aperture | f/2.04 | f/2 |
| Half-field angle ω | 27.72° | 28.5° (57° full) |
| Elements / groups | 6 / 3 (focusing groups) | 6 / 4 (optical components) |
| Aspherical elements | 2 | 2 |
| Close focus | Label β = −1/10; published gaps focus at 1.28 m, β ≈ −0.033 (calculated) | 0.29 m (MFD, 0.17×) |
| Total track TL / TL(air) | 59.81 / 59.265 mm | — |
| Back focus Bf / Bf(air) | 12.66 / 12.113 mm | — |
| Filter size | — | 52 mm |
| Diaphragm blades | — | 9 (rounded) |
| Weight | — | 170 g |

Table 4 labels its near-focus state "β = −1/10", but the published gaps do not reach that magnification. A paraxial solve of the tabulated D4/D10 values puts the object 1.223 m in front of surface 1, 1.28 m from the image plane, at β = −0.033 (calculated). The patent's own close-focus aberration plot, Fig. 8(B), agrees: it quotes an object height H0 = −656.68 mm for the 21.63 mm image height, which is β ≈ −0.033. The "−1/10" label is repeated for every example and looks like a template error. The data file keeps the published gaps and labels the near state 1.28 m. The production lens focuses to 0.29 m at 0.17×. The same paraxial model would need about 5.8 mm of G2 travel to get there (calculated). The patent does not publish that state, so the viewer does not extrapolate to it.

---

## 2. Optical Configuration

The lens follows a positive–positive–negative three-group topology with an aperture stop positioned between G1 and G2. This is a Petzval-derived field-flattened architecture: the two positive front groups (G1 and G2) provide converging power, while the separated negative rear group (G3) flattens the strongly curved Petzval field surface that would otherwise result. The back focus is 12.66 mm physically and 12.113 mm air-equivalent, including a 1.6 mm filter plate (FL) in front of the image plane. The data file models that plate physically in `rearPlates` (patent surfaces 14–15, nd = 1.5168, νd = 63.88): every analysis traces it, but it is not drawn. That is shorter than the Z mount's 16 mm flange focal distance, so the last lens surface must sit a few millimetres behind the mount flange, inside the camera throat (derived from the patent back focus; the barrel layout is not published). The telephoto ratio (TL/f) is 1.44, meaning the lens is moderately longer than its focal length — typical for a standard prime of this class.

### Group Architecture

**Group 1 (G1, positive, f = +63.157 mm):** A cemented doublet of a biconvex high-index positive element (L11) and a biconcave negative flint (L12). This is a classical Fraunhofer-type achromatic doublet that provides the bulk of the system's converging power while correcting primary longitudinal chromatic aberration. G1 is fixed during focusing.

**Aperture Stop (S):** Located in the air space between G1 and G2, immediately behind G1. The stop position is fixed during focusing.

**Group 2 (G2, positive, f = +35.352 mm):** The focusing group, composed of two air-separated lens components — a cemented doublet with a hybrid aspherical resin layer (L21 + L22 glass + L22 resin), followed by a positive meniscus singlet (L23). G2 provides strong positive power and carries the system's primary aspherical corrector (surface 8A). During focusing, G2 translates axially toward the object, moving 1.21 mm when focusing to the patent's near state (1.28 m, calculated).

**Group 3 (G3, negative, f = −54.571 mm):** A single negative element (L31) with a hybrid aspherical resin layer on its object-facing surface. G3 acts as a field flattener and telecentric corrector, bending the off-axis ray bundles to reduce the angle of incidence on the sensor. G3 is fixed during focusing.

### Group Counting Convention

The patent describes three "groups" (群, *gun*) defined by the focusing mechanism — units that move together during focus. However, Nikon's published specification lists 4 groups, using the optical convention where each air-separated lens component counts as a separate group:

1. L11 + L12 (cemented doublet)
2. L21 + L22 glass + L22 resin (cemented assembly with hybrid aspherical)
3. L23 (singlet)
4. L31 resin + L31 glass (hybrid aspherical composite)

The air gap between components 2 and 3 (0.15 mm between surfaces 8A and 9) is the boundary that creates the fourth group in the manufacturer's count, even though components 2 and 3 move together mechanically as part of G2.

---

## 3. Element-by-Element Analysis

### L11 — Front Positive Crown (G1)

| Property | Value |
|----------|-------|
| Type | Biconvex positive |
| Glass | S-LAH55V (OHARA) catalog equivalent, code 835427 |
| nd / νd | 1.83481 / 42.73 |
| Surfaces | R₁ = +28.707, R₂ = −105.070 |
| Center thickness | 4.90 mm |
| Focal length | +27.5 mm (thick-lens) |

L11 is a high-index lanthanum dense flint (835427; S-LAH55V is the exact OHARA catalog equivalent) with a strongly positive biconvex shape. It provides the dominant converging power in G1. The high refractive index (1.835) allows stronger surface curvatures at reduced ray bending per surface, which helps control spherical aberration. The 835427 type is one of the most widely used lanthanum glasses in photographic lenses, combining a high index with moderate dispersion (νd = 42.73). The sharply different curvature between the front and rear surfaces (R₁ = +28.7 vs. R₂ = −105.1) gives L11 a strongly asymmetric "bent" biconvex shape, with most of the optical power concentrated on the steeply curved front surface.

The patent drawing (Fig. 7) shows L11 and L12 with a clear radius of about 11.0 mm. At that height L11 still has an edge thickness of about 2.1 mm, so the edge does not limit the rim. The f/2.04 axial beam needs 10.1 mm at surface 1, and a full-field beam without vignetting would need 12.4 mm. The drawn front rim therefore clips the outer part of the full-field beam at full aperture.

### L12 — Rear Negative Flint (G1)

| Property | Value |
|----------|-------|
| Type | Biconcave negative |
| Glass | J-SF1 (HIKARI) catalog equivalent, code 717296 |
| nd / νd | 1.71736 / 29.57 |
| Surfaces | R₂ = −105.070 (cemented to L11), R₃ = +45.469 |
| Center thickness | 0.90 mm |
| Focal length | −44.1 mm (thick-lens) |
| Cemented to | L11 |

L12 is cemented to L11 to form the G1 achromatic doublet. The 717296 dense flint (Hikari J-SF1 matches the patent pair exactly) has high dispersion (νd = 29.57), providing the chromatic correction counterpart to L11. The doublet's published focal length is +63.157 mm, roughly 1.53× the system focal length. The cement interface at R₂ = −105.070 is weakly curved, indicating that L12 primarily contributes negative power and dispersive correction without strongly affecting the doublet's net convergence. As a biconcave element, L12 grows thicker toward the edges, so its edge thickness is not a binding constraint.

### L21 — Negative Flint (G2, cemented doublet front)

| Property | Value |
|----------|-------|
| Type | Biconcave negative |
| Glass | **755276 dense-flint class; catalog identity unresolved** |
| nd / νd | 1.7552 / 27.57 |
| Surfaces | R₅ = −16.536, R₆ = +105.597 |
| Center thickness | 0.90 mm |
| Focal length | −18.9 mm (thick-lens) |
| Cemented to | L22 |

L21 is a high-dispersion flint glass positioned at the front of G2's cemented assembly. Its strongly curved concave front surface (R₅ = −16.5 mm) gives it substantial negative power (f = −18.9 mm), making it the most powerfully diverging element in the system. This strong negative element, placed just behind the stop, is critical for correcting the spherical aberration and coma introduced by the preceding positive G1 doublet. The patent supplies the `1.75520 / 27.57` coordinate, but that coordinate does not match current OHARA PBM18Y (`1.595509 / 38.767`). Several catalog SF4-type flints come within 0.06 in νd (Schott SF4 1.75520 / 27.58, HOYA E-FD4 and OHARA S-TIH4 at 27.53 / 27.51), but none is an exact match and none is a Hikari glass. The label therefore stays as the unresolved 755276 class instead of naming a supplier.

### L22 — Positive Crown with Hybrid Asphere (G2, cemented doublet rear)

| Property | Value |
|----------|-------|
| Type | Biconvex positive (glass body) with cemented resin aspherical layer |
| Glass body | J-LASF015 (HIKARI) catalog equivalent, code 804466 |
| Resin layer | UV-curable photopolymer, nd = 1.56093, νd = 36.64 |
| Surfaces | R₆ = +105.597 (cemented to L21), R₇ = −33.838 (glass/resin junction), R₈* = −31.063 (resin rear, aspherical) |
| Glass center thickness | 4.55 mm |
| Resin center thickness | 0.10 mm |
| Glass body focal length | +32.3 mm (thick-lens) |
| Resin layer focal length | +666.5 mm (negligible power) |

L22 is the most structurally complex element in the lens. The glass body (804466 lanthanum flint, exactly matched by Hikari J-LASF015) provides strong positive power to balance L21's divergence, while the thin UV-curable resin layer bonded to its image-side surface carries the system's primary aspherical correction (surface 8A). This hybrid composite construction — where the aspherical shape is molded in low-melting-point resin rather than ground into the glass — is a classic Nikon cost-reduction technique that avoids the expense of glass-molded or polished aspherics. The resin layer itself has negligible optical power (f ≈ +667 mm); its sole purpose is to introduce the aspherical departure.

The cemented glass doublet L21 + L22 (glass body only, exiting into air) has a combined focal length of −55.0 mm from the thick-lens ABCD computation, acting as an achromatizing diverger that corrects both spherical and chromatic aberrations simultaneously.

### L23 — Positive Meniscus Singlet (G2, rear)

| Property | Value |
|----------|-------|
| Type | Positive meniscus, concave toward the object |
| Glass | S-LAH55V (OHARA) catalog equivalent, code 835427 |
| nd / νd | 1.83481 / 42.73 |
| Surfaces | R₉ = −397.823, R₁₀ = −21.512 |
| Center thickness | 6.76 mm |
| Focal length | +27.0 mm (thick-lens) |

L23 is the strongest positive element in the system (f = +27.0 mm) and the thickest glass element (6.76 mm). It uses the same 835427 high-index glass as L11. The strongly concave rear surface (R₁₀ = −21.5 mm) dominates its converging power, while the nearly flat front surface (R₉ = −397.8 mm) contributes almost nothing. This meniscus geometry — concave to the object, convex to the image — minimizes the angle of incidence on each surface relative to the marginal ray, which is the classical strategy for controlling higher-order spherical aberration in a strongly positive element.

L23 is the element referenced by the patent's Condition (13), which requires that the highest-index glass in the system appear in G2's most image-side element. The patent notes that keeping Nmax below 1.8500 helps control field curvature and reduces cost — a deliberate constraint reflecting the lens's budget positioning.

### L31 — Negative Field-Flattener with Hybrid Asphere (G3)

| Property | Value |
|----------|-------|
| Type | Biconcave negative (glass body) with cemented resin aspherical layer on object side |
| Resin layer | UV-curable photopolymer, nd = 1.56093, νd = 36.64 |
| Glass body | E-CF6 (HOYA) catalog equivalent, code 517522 |
| Surfaces | R₁₁* = −29.55 (resin front, aspherical), R₁₂ = −36.30 (resin/glass junction), R₁₃ = +1084.406 (glass rear, nearly flat) |
| Resin center thickness | 0.10 mm |
| Glass center thickness | 1.30 mm |
| Glass body focal length | −67.9 mm (thick-lens) |
| Resin layer focal length | −284.8 mm (weak negative) |
| Composite focal length | −54.7 mm (thick-lens) |

L31 is the sole element in G3 and serves as the system's field flattener. Its moderate negative power (f = −54.7 mm) flattens the Petzval field curvature generated by the strongly positive G1 and G2. The aspherical resin layer on the object side (surface 11A) provides field-dependent correction of astigmatism and coma, which is especially important at the wide half-field angle of 27.7°.

The glass body is classified as biconcave by the patent: the front surface (R₁₂ = −36.3) is concave from the glass's perspective, and the rear surface (R₁₃ = +1084.4) is very weakly concave toward the image. In practice, R₁₃ is so nearly flat that the element behaves almost as plano-concave, but the finite curvature means it is technically biconcave as the patent describes.

The glass body uses HOYA E-CF6, a low-index crown flint (nd = 1.517, νd = 52.2). E-CF6 (1.51742 / 52.15) is the closest glass in the repository catalog, 0.05 in νd from the patent value. OHARA S-NSL36 has the same index but νd = 52.43, 0.23 away. The label is a catalog equivalent; the patent does not name a supplier. The choice of a low-index glass for the field flattener keeps the Petzval contribution moderate (avoiding over-correction) while the nearly flat rear surface ensures that the exiting ray bundle is only weakly refracted, maintaining reasonable telecentricity for the sensor.

---

## 4. Aspherical Surfaces

The lens employs two aspherical surfaces, both formed as thin UV-curable resin layers bonded to glass substrates — Nikon's hybrid composite ("複合型非球面") construction. This approach avoids the cost of glass-molded aspherics while providing the necessary wavefront correction for an f/2 aperture.

### Sag Equation and Conic Convention

The patent uses the sag formula:

> X(y) = (y²/R) / {1 + √(1 − κ · y²/R²)} + A₄y⁴ + A₆y⁶ + A₈y⁸ + A₁₀y¹⁰ + A₁₂y¹²

where κ is the conic parameter. In the standard notation used by the renderer (K = conic constant), the relationship is **K = κ − 1**. Both aspherical surfaces in this design use κ = 1.0000, giving **K = 0** — a spherical base curve with polynomial aspherical departure only.

### Surface 8A (L22 Resin Rear — Primary Spherical Aberration Corrector)

| Coefficient | Value |
|-------------|-------|
| R | −31.0626 mm |
| K | 0 |
| A₄ | +3.51503 × 10⁻⁵ |
| A₆ | +5.19649 × 10⁻⁸ |
| A₈ | +2.28989 × 10⁻¹⁰ |
| A₁₀ | −1.66287 × 10⁻¹² |
| A₁₂ | 0 |

At the 11.3 mm rim measured from Fig. 7, the total aspherical departure from the base sphere is about +686 μm, so the surface becomes less steeply curved toward the rim. The A₄ term dominates (+573 μm at h = 11.3 mm). A₆ adds +108 μm, and the A₈ and A₁₀ terms (+61 and −56 μm) nearly cancel. The positive sign of A₄ means the surface flattens relative to the sphere at the margin — this is the classic correction profile for undercorrected spherical aberration in a fast positive system.

Surface 8A sits near the convergence zone of the marginal ray within G2 and therefore has maximum leverage over on-axis spherical aberration. The aspherical departure here is the primary mechanism that allows the lens to achieve f/2 performance without additional glass elements.

### Surface 11A (L31 Resin Front — Field Aberration Corrector)

| Coefficient | Value |
|-------------|-------|
| R | −29.55 mm |
| K | 0 |
| A₄ | +7.47127 × 10⁻⁶ |
| A₆ | +2.62883 × 10⁻⁸ |
| A₈ | −6.53514 × 10⁻¹¹ |
| A₁₀ | +1.25069 × 10⁻¹³ |
| A₁₂ | −2.28970 × 10⁻¹⁷ |

At the 16.4 mm rim measured from Fig. 7, the total departure is about +877 μm, and the profile is more complex than on surface 8A. A₄ and A₆ contribute almost equally (+541 and +512 μm), A₈ takes back 342 μm and A₁₀ adds 176 μm. This balance indicates a correction profile tuned to field-dependent aberrations. The oscillating signs of A₈ through A₁₂ suggest fine-tuning of the aspherical profile to balance astigmatism and field curvature across the image field.

Surface 11A is located far from the stop, deep in the diverging rear group where chief ray heights are large. This is the optimal position for correcting field-dependent aberrations — astigmatism, field curvature, and oblique coma — because the aspherical departure experienced by off-axis ray bundles is substantially different from that experienced by on-axis rays.

### Division of Labor

The two aspherical surfaces implement a clean division of correction responsibilities: surface 8A handles on-axis (spherical) aberrations near the stop, while surface 11A handles off-axis (field) aberrations far from the stop. This is the textbook two-asphere strategy for a fast wide-normal prime, and it allows Nikon to achieve f/2 performance with only 6 glass elements — a remarkably low count for this specification.

---

## 5. Focusing Mechanism

The lens uses inner focusing (IF), where only G2 translates axially while G1, the aperture stop, and G3 remain fixed relative to the image plane. This design choice has several practical consequences.

### Variable Air Gaps

| Gap | Surface | Infinity | Near state (patent) | Change |
|-----|---------|:--------:|:---------:|:------:|
| D4 | STO → G2 front | 11.250 mm | 10.042 mm | −1.209 mm |
| D10 | G2 rear → G3 front | 13.790 mm | 14.999 mm | +1.209 mm |

The total track remains constant at 59.81 mm physically, including the filter plate (59.265 mm air-equivalent). G2 moves 1.21 mm toward the object when focusing from infinity to the patent's near state. Although the table labels that state β = −1/10, the gaps focus at 1.28 m object-to-image, β ≈ −0.033 (calculated; see Section 1). The viewer's focus scale therefore ends at 1.28 m, not at the production lens's 0.29 m. The focusing movement is small because G2's image displacement coefficient γ = (1 − β₂²) · β₃² = 1.108 is close to unity — meaning the image shifts almost exactly as much as G2 moves. This near-unity γ value is by design: Condition (1) of the patent constrains γ to the range 0.90–1.50, optimizing for compact focus travel while maintaining good aberration balance during focus.

### Practical Implications

Because only G2 moves, the front element is fixed and the overall lens length does not change during focusing — the hallmark of an IF design. It also means the lens can use a lightweight stepping motor (STM) to drive only the relatively small and light G2 group, enabling the fast, quiet autofocus performance Nikon advertises for video work. The constant-length barrel also simplifies weather sealing and mechanical design, contributing to the lens's low weight of 170 g.

---

## 6. Chromatic Correction Strategy

With no ED glass and no anomalous partial dispersion materials anywhere in the system, the lens relies entirely on classical achromatic doublet pairing for chromatic correction. The system uses two achromatic cemented pairs:

**G1 doublet (L11 + L12):** 835427 lanthanum glass (νd = 42.73) cemented with 717296 dense flint (νd = 29.57). The Abbe number difference of 13.16 provides moderate chromatic leverage. This pair corrects primary longitudinal chromatic aberration for the front converging group.

**G2 cemented pair (L21 + L22):** The unresolved 755276-class flint (νd = 27.57) is cemented with the 804466 lanthanum glass (νd = 46.60). The Abbe number difference of 19.03 is larger, providing stronger chromatic correction in the group that carries the most optical power. The flint-ahead configuration (negative flint L21 in front, lower-dispersion positive L22 behind) is the Steinheil achromat topology, which is preferred in post-stop positions because it reduces the Petzval contribution while maintaining chromatic correction.

The absence of ED glass means that secondary spectrum (the residual chromatic aberration after primary achromatization) is not explicitly controlled. This is a deliberate trade-off consistent with the lens's budget positioning — secondary spectrum becomes increasingly visible at long focal lengths and very fast apertures, but at 40 mm f/2 its effect on image quality is modest, particularly when combined with Nikon's in-camera chromatic aberration correction algorithms.

---

## 7. Petzval Sum and Field Curvature

The computed Petzval sum is **+0.00330 mm⁻¹**, corresponding to a Petzval radius of approximately 303 mm. The ratio of Petzval radius to focal length is 7.4×, which is a reasonable value for a standard prime but not exceptional — by comparison, well-corrected double-Gauss designs often achieve ratios above 10×.

The negative G3 group is the key contributor to field flattening. Without G3, the strongly positive G1 and G2 would produce a Petzval radius much too short (field curvature too strong). L31's negative power lengthens the Petzval radius, while its aspherical surface (11A) provides additional field-dependent correction of astigmatism that the Petzval sum alone cannot address.

---

## 8. Glass Selection and Cost Philosophy

The glass bill for this lens reflects Nikon's deliberate cost optimization. A few observations:

**Repeated glass types reduce inventory cost.** Two of the six glass elements (L11 and L23) use the same 835427 glass. This halves the number of distinct glass blanks that must be stocked for this element position.

**No exotic or specialty glasses.** The five glass types are ordinary catalog types, and the patent names no anomalous-dispersion glass. Three have exact catalog equivalents: 835427 (OHARA S-LAH55V), 717296 (Hikari J-SF1) and 804466 (Hikari J-LASF015). L31's 517522 is within 0.05 in νd of HOYA E-CF6. L21's 755276 is within 0.06 of several SF4-type flints but has no exact match.

**Hybrid composite aspherics instead of glass-molded.** The two aspherical surfaces are formed in UV-curable resin (nd = 1.56093, νd = 36.64 — a standard Nikon photopolymer), bonded to conventionally polished glass substrates. This is substantially cheaper than precision-molded glass aspherics (as used in S-line lenses) or ground-and-polished aspherics, at the cost of slightly reduced environmental durability and coating flexibility.

**Maximum refractive index constrained below 1.85.** Condition (13) of the patent explicitly limits the highest nd in the system to below 1.8500. This excludes expensive ultra-high-index glasses (such as S-LAH79, nd = 2.003) and keeps the glass bill within commodity pricing. The actual maximum of 1.83481 (L11 and L23) is well below this ceiling.

These choices collectively enable the lens's remarkably low retail price of approximately $300 USD — less than half the cost of the S-line NIKKOR Z 50mm f/1.8 S, which uses 12 elements including 2 ED and 2 aspherical elements.

---

## 9. Semi-Diameter Estimation and Vignetting

The patent does not list semi-diameters. The stored values are measured from the Example 4 cross-section (Fig. 7), scaled from the drawn vertex spacing of surfaces 1 to 13. The drawn rims are about 11.0 mm for the G1 doublet and 8.4 mm for the concave front of L21, which sits inside a flat annulus. The L21/L22 cemented component measures 11.0 mm, with the aspherical resin layer reaching 11.3 mm. L23 measures 13.5 mm, the L31 resin and front surface 16.4 mm, and the flat rear face of L31 17.6 mm. The stop tick in the figure starts at 8.8 mm from the axis, which is also the stored stop radius.

A real-ray trace at f/2.04 and ω = 27.7° confirms that every drawn rim passes the full axial beam and the full-field chief ray. At surface 1 the axial beam is 10.1 mm high, and an unvignetted full-field beam would need 12.4 mm. The 11 mm front rim and the rims in G2 therefore clip part of the full-field beam at full aperture, which is ordinary optical vignetting for a small, light lens. The rear group has the largest diameters in the system because the field flattener sits far from the stop, where the chief ray is highest (16.2 mm at the last surface).

---

## 10. Conditional Expression Verification

The patent defines 16 conditional expressions that govern the design space. All computed values for Example 4 fall within the specified ranges and agree with the patent's tabulated values to within rounding tolerance:

| Condition | Expression | Computed | Patent | Range |
|-----------|-----------|:--------:|:------:|:-----:|
| (1) | {1−β₂²}·β₃² | 1.107 | 1.108 | 0.90–1.50 |
| (2) | (G1d+G2d+G3d)/DT | 0.417 | 0.417 | 0.28–0.45 |
| (5) | (G1d+G2d)/G3d | 13.04 | 13.04 | 9.00–16.0 |
| (8) | f₂/f | 0.861 | 0.858 | 0.70–1.00 |
| (9) | (−f₃)/f | 1.329 | 1.325 | 0.60–2.50 |
| (10) | f₁/f | 1.535 | 1.533 | 0.90–2.50 |
| (13) | Nmax | 1.835 | 1.835 | < 1.850 |
| (15) | f/Ymax | 1.905 | 1.904 | 1.30–3.00 |

The small residuals between computed and patent values (typically < 0.5%) are consistent with rounding of the patent's tabulated surface data. The group focal lengths computed from the table are 0.2–0.4% longer than the tabulated ones (G1 +63.26, G2 +35.49, G3 −54.74 mm against +63.157, +35.352, −54.571 mm), while the system focal length agrees to 0.015%. Every prescription row was re-read against the published page, so this is a small inconsistency within the source, not a transcription error.

---

## 11. Design Context

The NIKKOR Z 40mm f/2 occupies a specific niche in Nikon's Z-mount lineup: a lightweight, affordable, non-S-line prime optimized for size, weight, and cost rather than peak optical performance. The 40 mm focal length sits between the classical 35 mm and 50 mm prime positions, offering a natural perspective that is wide enough for environmental portraits and street photography yet tight enough for subject isolation.

The optical design achieves its compact form through several architectural decisions. The three-group IF topology eliminates the need for a complex floating-element rear group. The hybrid composite aspherics avoid the size and weight penalty of glass-molded elements. The constraint on maximum refractive index (Condition 13) keeps glass costs low. And the inner-focus mechanism needs only 1.2 mm of G2 travel to reach the patent's 1.28 m near state; about 5.8 mm would be needed for the production 0.29 m (calculated). Either way the moving group is small enough for a light stepping motor.

The lens's optical trade-offs — acknowledged by reviewers — include the lack of advanced coatings (Nano Crystal Coat, ARNEO) and glass technology (ED, SR) found in Nikon's S-line optics. The result is somewhat elevated flare and ghosting in backlit conditions, modest vignetting at f/2, and uncorrected secondary spectrum. These are deliberate trade-offs that keep the lens at 170 g and $300, making it arguably the most accessible full-frame prime in the Z-mount system.
