# Nikon NIKKOR Z DX 16-50mm f/3.5-6.3 VR — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2020/012638 A1 (international publication); re-published in Japan as JPWO2020/012638 A1.
**Title:** 変倍光学系、光学機器、および変倍光学系の製造方法 (Variable magnification optical system, optical apparatus, and method for manufacturing variable magnification optical system).
**Applicant:** Nikon Corporation, Tokyo.
**Inventors:** Yoko Komatsubara (小松原陽子), Takeshi Umeda (梅田武).
**Filed:** 13 July 2018 (priority, as PCT/JP2018/026486).
**Published:** 16 January 2020 (international), 10 June 2021 (Japanese re-publication).
**Embodiment analyzed:** Numerical Example 8 (第8実施例), Table 8 (¶0168).

The identification of Example 8 as the production NIKKOR Z DX 16-50mm f/3.5-6.3 VR rests on the following convergent evidence:

1. **Element and group count.** The production lens has 9 elements in 7 groups, including 1 ED element and 4 aspherical elements (Nikon published specifications). Example 8 contains 9 optical elements in 7 air-separated groups, with 1 ED fluorophosphate element (L24), 4 aspherical elements (L11, L21, L25, L31), and 5 aspherical surfaces.
2. **Focal length.** The design focal length range is 16.46–48.50 mm, matching the marketed 16–50 mm specification.
3. **Aperture.** Design f-numbers are f/3.56 (wide) to f/6.36 (tele), matching the marketed f/3.5–6.3 variable aperture.
4. **Image format.** The maximum image height is $Y_\text{max}$ = 14.20 mm, yielding an image circle diagonal of 28.4 mm — consistent with the DX/APS-C format (diagonal ≈ 28.35 mm).
5. **Field of view.** The wide-end full field angle is 2ω = 84.69°, consistent with 16 mm on a DX sensor. The tele-end value of 31.81° is consistent with 50 mm on DX.
6. **Optical stabilization.** The patent describes vibration reduction by decentering subgroup G2b perpendicular to the optical axis (¶0166), matching the production lens's in-lens VR.
7. **Internal focus.** Group G3 moves image-ward for close focusing (¶0165), consistent with the production lens's internal focusing design driven by a stepping motor.
8. **Patent timing.** The priority date of July 2018 precedes the lens announcement on 10 October 2019 by approximately 15 months, a typical Nikon patent-to-product interval.
9. **Camera system.** The patent describes the lens as suitable for a mirrorless camera (¶0178–0179), consistent with the Z mount.

All eight numerical examples in the patent share the same fundamental four-group architecture (negative–positive–negative–positive). Examples 1–7 differ from Example 8 in minor details — G2c glass choice, G4 element count, and one subgroup's power sign (Example 4 has a positive G2c). Example 8 most closely matches the production configuration in every verifiable parameter.

## Optical Architecture

The NIKKOR Z DX 16-50mm f/3.5-6.3 VR is a four-group zoom of the negative-lead type, with group powers arranged as negative–positive–negative–positive from object to image. The negative front group diverges the incoming beam before the positive variator group converges it, extending the back focal distance beyond what a purely positive system of equal focal length would produce. At the wide end, BFD = 10.05 mm — shorter than the 16.46 mm focal length (BFD/EFL = 0.61), so the design is not strictly retrofocus, but the negative-lead architecture provides sufficient clearance for the Nikon Z mount's 16 mm flange distance and the sensor assembly behind it.

The four principal groups are:

- **G1** (surfaces 1–5, f = −26.32 mm): Negative front group. Contains two elements — a negative meniscus hybrid composite asphere (L11) and a positive meniscus (L12). Acts as the wide-angle diverging collector, extending the back focal distance relative to the system's short focal length. G1 moves non-monotonically during zoom: image-ward then object-ward from wide to tele (¶0164).
- **G2** (surfaces 6–14, f = +18.31 mm): Positive variator and compensator group, the optical core. Subdivided into three subgroups: G2a (positive cemented doublet, f = +27.61 mm), the aperture stop, G2b (positive cemented doublet, f = +26.84 mm, also the VR element), and G2c (single negative meniscus, f = −42.13 mm). G2 moves object-ward during zooming.
- **G3** (surfaces 15–16, f = −24.13 mm): Negative focusing group. A single biconcave element (L31) with both surfaces aspherical. Moves object-ward during zooming and image-ward during focusing.
- **G4** (surfaces 17–18, f = +37.73 mm): Positive field-flattening group. A single positive meniscus (L41), concave toward the object. G4 is fixed relative to the image plane during both zooming and focusing.

The total element count is 9 elements in 7 air-separated groups: two elements in G1, two cemented pairs in G2a and G2b, one singlet in G2c, one singlet in G3, and one singlet in G4. The design achieves a zoom ratio of 2.95× with a total track that varies from 71.75 mm (wide) to 66.94 mm (mid) to 71.27 mm (tele), enabling the retractable barrel mechanism that makes this the most compact DX-format zoom Nikon has produced.

## Element-by-Element Analysis

### L11 — Negative Meniscus, Hybrid Composite Asphere (G1)

nd = 1.83481 (glass body), νd = 42.73; nd = 1.56093 (resin layer), νd = 36.64. Glass body: dense lanthanum flint (six-digit code 835/427). Resin: UV-curable optical resin. Combined f = −15.6 mm.

L11 is a negative meniscus with its convex surface facing the object, formed as a hybrid composite: a glass body (surfaces 1–2, center thickness 1.20 mm) with a thin aspherical resin layer (surfaces 2–3, center thickness 0.12 mm) bonded to the image-side glass surface. The outer resin surface (surface 3) carries the aspherical profile.

This element is the primary wide-angle diverger. Its strong negative power (f = −15.6 mm combined) dominates G1's overall negative contribution. The patent specifies a conic constant of κ = 0 for surface 3, which in the patent's convention (κ = 1 + K) corresponds to K = −1 in the standard sag equation — a paraboloidal base. This produces a surface whose sag grows as $h^2 / (2R)$ rather than the steeper spherical progression, yielding approximately −1.0 mm of departure from the spherical parent at an estimated semi-diameter of 10 mm. The paraboloidal base reduces the surface's refractive power progressively from center to edge, which is the primary mechanism for controlling field curvature and distortion at the wide end where marginal rays strike this surface at steep angles.

The paraboloidal interpretation (K = −1) is confirmed by edge-thickness analysis. Under the alternative interpretation (κ used directly as K, giving K = 0, a spherical base), the outer surface sag at h = 10 mm would be 6.13 mm versus the junction surface sag of 4.58 mm, producing a physically impossible edge thickness of −1.43 mm (surface crossing). With K = −1 the resin outer surface sag is 4.71 mm, yielding an edge thickness approaching zero — physically marginal but consistent with the thin resin layer pinching off near the element's rim, which is typical of hybrid composite construction.

The hybrid composite construction is a cost-effective manufacturing approach common in consumer zoom lenses: the glass body is conventionally polished (or molded), and the aspherical correction is applied entirely by the thin resin layer, avoiding the expense of precision glass molding or diamond turning for the high-index glass substrate.

### L12 — Positive Meniscus (G1)

nd = 1.92286, νd = 20.88, ng = 1.98281. Glass: S-NPH2 (OHARA) — ultra-high-index dense phosphate flint. f = +46.8 mm.

L12 is a positive meniscus with its convex surface facing the object. Its nd = 1.92286 and νd = 20.88 match OHARA S-NPH2 precisely, one of the highest-index glasses in commercial production. Despite its very high dispersion (νd ≈ 21), L12's role here is primarily structural rather than chromatic. The extremely high refractive index allows the positive meniscus to contribute partial correction of the field curvature generated by L11 without requiring strongly curved surfaces. The positive power of L12 (f ≈ +46.8 mm) partially compensates L11's strong negative contribution, producing a net G1 focal length of −26.32 mm.

The use of S-NPH2 here also lowers the Petzval contribution of G1: because Petzval curvature is proportional to surface power divided by the product of the bounding refractive indices, a high-index positive element contributes less inward Petzval curvature per unit of optical power than a lower-index glass would.

### L21 — Negative Meniscus, Aspherical (G2a, front element of cemented doublet)

nd = 1.83441, νd = 37.28, ng = 1.86310. Glass: dense lanthanum flint (six-digit code 834/373). f = −32.8 mm (standalone, in air).

L21 is a negative meniscus with its convex surface facing the object. Its front surface (surface 6) is aspherical (K = 0, polynomial corrections to 10th order). In situ within the G2a cemented doublet, L21 serves as the high-index flint partner to L22's lanthanum crown. Its νd = 37.28 places it firmly in flint territory, and the negative power of this meniscus, combined with the positive power of L22 behind it, produces a net positive cemented doublet (f ≈ +27.6 mm) that corrects axial chromatic aberration in the stop region.

The aspherical surface on L21's front face introduces negative C4 and C6 coefficients (C4 = −1.405×10⁻⁵, C6 = −4.760×10⁻⁸), which progressively weaken the surface's curvature toward the rim. This corrects zonal spherical aberration across the zoom range, where the marginal ray height on this surface changes substantially between wide (small) and tele (large) positions.

### L22 — Positive Meniscus (G2a, rear element of cemented doublet)

nd = 1.75500, νd = 52.34, ng = 1.77295. Glass: lanthanum crown (six-digit code 755/523). f = +14.4 mm (standalone, in air).

L22 is a positive meniscus with its convex surface facing the object, cemented to the rear of L21 to form the G2a doublet. Its Abbe number of 52.34 places it at the crown–flint boundary — technically a light crown — providing moderate chromatic contrast against L21's νd = 37.28 (Δνd ≈ 15.1). G2a provides secondary axial chromatic correction near the stop; the primary achromatic load falls on G2b, whose ED–flint pairing offers substantially greater dispersion contrast.

L22's relatively high index (1.755) keeps the cemented interface's angular refraction within practical bounds while the doublet's net positive power (f ≈ +27.6 mm) contributes the main converging action of G2.

### L23 — Negative Meniscus (G2b, front element of cemented doublet / VR group)

nd = 1.95375, νd = 32.33, ng = 1.99206. Glass: S-LAH79 (OHARA) — ultra-high-index dense lanthanum flint. f = −28.1 mm (standalone, in air).

L23 is a negative meniscus with its convex surface facing the object, forming the flint component of the G2b cemented doublet (the VR group). The nd/νd pair of 1.95375/32.33 matches OHARA S-LAH79 (catalog: nd = 1.95375, νd = 32.32; Δνd = 0.01). At nd ≈ 1.954, S-LAH79 is among the densest commercially available optical glasses. The extreme refractive index serves two purposes: it minimizes the Petzval contribution of this high-power negative surface, and it provides strong chromatic contrast against its cemented partner L24 (νd = 81.61), yielding effective axial color correction near the stop.

As part of the VR group, L23 moves perpendicular to the optical axis to correct image blur. The cemented construction ensures that the doublet moves as a rigid unit during decentering, maintaining the internal chromatic correction even under VR displacement. The patent notes that decentering-induced coma is corrected by the surrounding subgroups G2a and G2c (¶0009).

### L24 — Biconvex Positive, ED Element (G2b, rear element of cemented doublet / VR group)

nd = 1.49700, νd = 81.61, ng = 1.50451. Glass: S-FPL51 (OHARA) or FCD1 (HOYA) class — ED fluorophosphate crown. f = +13.5 mm (standalone, in air).

L24 is the sole ED (Extra-low Dispersion) element in the design and the strongest individual positive element (f ≈ +13.5 mm standalone). Its nd = 1.49700 and νd = 81.61 match the S-FPL51/FCD1 family of fluorophosphate crowns to within catalog tolerance (S-FPL51: nd = 1.49700, νd = 81.54; FCD1: nd = 1.49700, νd = 81.61). These are anomalous-partial-dispersion glasses with positive ΔP~g,F~, meaning their blue-wavelength dispersion is lower than predicted by the Schott normal line. This property is exploited in the cemented pair with L23 to reduce secondary spectrum — the residual chromatic error that conventional crown–flint achromats cannot eliminate.

The Abbe number contrast within the G2b doublet is Δνd = 81.61 − 32.33 = 49.28, which is exceptionally large. This allows the doublet to achieve strong chromatic correction with moderate surface curvatures, keeping the overall cemented group compact — a critical requirement since G2b must physically decentre during VR operation without mechanical interference with adjacent groups.

### L25 — Negative Meniscus, Aspherical (G2c)

nd = 1.79526, νd = 45.25, ng = 1.81739. Glass: dense lanthanum flint (six-digit code 795/452). f = −42.1 mm.

L25 is a negative meniscus with its convex surface facing the object, constituting G2c as a single-element subgroup. Its front surface (surface 13) is aspherical with K = 0 and a strongly negative C4 = −8.284×10⁻⁵, which flattens the surface toward the rim. G2c's negative power (f = −42.13 mm for the subgroup) serves as a compensating element after the positive G2b, controlling coma and spherical aberration in the exit cone from G2. Notably, this is the element whose glass differs from Examples 1–7 in the patent: Example 8 uses nd = 1.79526/νd = 45.25, while Examples 1–7 share nd = 1.80139/νd = 45.45. The distinction is minor — both are dense lanthanum flints in the same region of the glass map — but it may reflect a manufacturing or availability substitution specific to the production design.

G2c also plays a role in compensating the decentering aberrations of G2b during VR operation. The patent (¶0009) specifically states that G2a (in front of G2b) and G2c (behind it) together suppress decentering coma and peripheral image degradation during vibration reduction.

### L31 — Biconcave Negative, Dual-Aspherical (G3 — Focus Group)

nd = 1.80139, νd = 45.46, ng = 1.82357. Glass: dense lanthanum flint (six-digit code 801/455). f = −24.1 mm.

L31 is a biconcave negative element and the sole component of G3, the focusing group. Both surfaces are aspherical: surface 15 (front, R = −29.6878) and surface 16 (rear, R = +56.3004), each with K = 0 in the standard convention. This is the most aspherically active element in the system.

Surface 15's dominant polynomial coefficient is C4 = −1.284×10⁻⁴ (negative), which increases the surface's diverging power toward the rim, steepening the biconcave profile. Surfaces 15 and 16 together carry strong higher-order terms (C6 on the order of 10⁻⁶, with alternating signs), forming a correction profile that primarily targets field curvature variation during focus travel. The patent (¶0053) states that the aspherical surfaces on G3 enable the focusing mechanism to be compact while maintaining field curvature correction from infinity to close focus.

The shape factor R2/R1 = 56.3004/(−29.6878) = −1.896 satisfies the patent's conditional expression (10): −20.00 < R2f3/R1f3 < −1.00, with the computed value of −1.896 falling well within range. This shape — more strongly curved on the object side — biases the element's negative power toward the front surface, which helps suppress ghost reflections from the image-side surface where light converges more steeply after passing through G2.

During focusing from infinity to close range, L31 translates image-ward along the optical axis. The focus sensitivity at the wide end is (−fγw) = 1.250 (condition (5)), meaning the image plane shifts 1.25 mm for every 1 mm of G3 movement. This moderate sensitivity allows precise autofocus positioning with a stepping motor while keeping the physical travel compact — consistent with the retractable barrel design.

The dual-aspherical construction on the focus group is optically motivated: because L31 translates during focusing, the aberration balance shifts as the element moves through varying conjugate geometries. Two aspherical surfaces provide enough degrees of freedom to maintain correction across the full focus range without requiring additional elements — a direct contributor to the lens's extreme compactness and light weight (135 g).

### L41 — Positive Meniscus, Concave to Object (G4 — Field Flattener)

nd = 1.95375, νd = 32.33, ng = 1.99206. Glass: S-LAH79 (OHARA) — same ultra-high-index dense lanthanum flint as L23. f = +37.7 mm.

L41 is a positive meniscus with its concave surface facing the object, forming the fixed rear group G4. Its primary role is Petzval field flattening: the positive meniscus, positioned close to the image plane with strongly curved surfaces (R17 = −345.38, R18 = −32.78), bends the field flat without introducing substantial spherical aberration because the marginal ray height is small at this position.

The choice of S-LAH79 (nd ≈ 1.954) for this element is driven by Petzval optimization. A positive element's Petzval contribution is proportional to φ/(n·n'), and maximizing the refractive index minimizes this contribution per unit of optical power. This allows L41 to provide positive power for field flattening while adding minimal inward Petzval curvature — counteracting the outward Petzval tendency of the overall negative-led design.

The element's generous center thickness of 4.20 mm and relatively large radii ratio suggest that it also contributes to telecentricity at the image plane, directing chief rays toward near-normal incidence on the sensor — important for digital sensors where off-axis light falloff increases with chief ray angle.

## Glass Selection

The glass palette for this 9-element design uses 6 distinct glass types plus one optical resin:

| Element | nd | νd | Six-digit code | Catalog match | Role |
|---------|------|-------|------|------|------|
| L11 body | 1.83481 | 42.73 | 835/427 | Dense LaF class | Wide-angle diverger substrate |
| L11r resin | 1.56093 | 36.64 | — | Optical resin | Hybrid asphere correction layer |
| L12 | 1.92286 | 20.88 | 923/209 | S-NPH2 (OHARA) | High-index Petzval reducer in G1 |
| L21 | 1.83441 | 37.28 | 834/373 | Dense LaF class | Flint partner in G2a achromat |
| L22 | 1.75500 | 52.34 | 755/523 | LaK class | Crown partner in G2a achromat |
| L23 | 1.95375 | 32.33 | 954/323 | S-LAH79 (OHARA) | High-index flint in G2b achromat + VR |
| L24 | 1.49700 | 81.61 | 497/816 | S-FPL51 / FCD1 | ED crown in G2b achromat |
| L25 | 1.79526 | 45.25 | 795/452 | Dense LaF class | G2c VR compensator |
| L31 | 1.80139 | 45.46 | 801/455 | Dense LaF class | Focus group (dual asphere) |
| L41 | 1.95375 | 32.33 | 954/323 | S-LAH79 (OHARA) | Field flattener |

The chromatic strategy centers on the G2b doublet (L23 + L24). The Abbe number contrast of Δνd ≈ 49.3 is the largest in the system, and the ED glass (L24) provides anomalous partial dispersion for secondary spectrum reduction. The G2a doublet (L21 + L22) provides a secondary achromatic correction site with a more modest Δνd ≈ 15.1. Together, these two cemented pairs — both positioned near the aperture stop where axial ray bundles are tallest — control longitudinal chromatic aberration across the full zoom range.

Two of the three confidently identified catalog glasses are OHARA types: S-NPH2 (L12) and S-LAH79 (L23, L41). The ED element L24 matches both OHARA S-FPL51 (νd = 81.54) and HOYA FCD1 (νd = 81.61); the closer νd match favors FCD1, but both are standard ED fluorophosphate crowns with interchangeable optical behavior. The remaining four glass types (L11 body, L21, L25, L31) are dense lanthanum flints in the nd = 1.79–1.84, νd = 37–46 region; their exact catalog identities cannot be determined from the patent data alone without full Sellmeier coefficients, and they may include OHARA L-prefix moldable glass variants consistent with the production lens's compact, cost-optimized design.

## Focus Mechanism

The lens employs inner focusing via Group G3, consisting of the single biconcave element L31. During focusing from infinity to close range, G3 translates image-ward along the optical axis, increasing the air gap d14 (between G2c and G3) and decreasing the air gap d16 (between G3 and G4). Groups G1, G2, and G4 remain stationary during focus.

The patent publishes only infinity-focus spacings for Example 8, so the close-focus gap values cannot be directly transcribed. However, the focus mechanism's behavior is characterized by conditional expression (5): the focus sensitivity (−fγw) = 1.250 at the wide end, meaning each millimeter of G3 travel shifts the image plane by 1.25 mm. This moderate magnification ratio allows precise stepping-motor positioning while keeping total focus travel compact.

The production lens's minimum focus distances, as published by Nikon, vary by zoom position: 0.25 m at 16 mm, 0.20 m at 24 mm, 0.23 m at 35 mm, and 0.30 m at 50 mm, with a maximum reproduction ratio of 0.2×. The shortest MFD occurs not at the wide end but at an intermediate 24 mm zoom position — a non-monotonic variation characteristic of inner-focus zoom designs where the focus group's imaging conjugates change as the zoom position alters the axial ray geometry through the system.

The patent (¶0173) notes that the G3 focusing group is suitable for autofocus drive by ultrasonic, stepping, or VCM motors. The production lens uses a stepping motor (STM) for quiet, smooth autofocus suited to video recording.

| Parameter | Wide (16 mm) | Tele (50 mm) |
|-----------|-------------|-------------|
| d14 (G2c↔G3), infinity | 5.34 mm | 13.02 mm |
| d16 (G3↔G4), infinity | 3.66 mm | 16.92 mm |
| MFD (published) | 0.25 m | 0.30 m |

## Image Stabilization (VR)

Vibration reduction is achieved by decentering Group G2b — the cemented doublet comprising L23 (S-LAH79 flint) and L24 (S-FPL51/FCD1 ED crown) — perpendicular to the optical axis (¶0166). This is a standard lens-shift VR mechanism.

The placement of the VR group between G2a and G2c within the positive G2 assembly is deliberate. The patent (¶0009) explains that G2a (in front of G2b) and G2c (behind it) together correct the decentering-induced coma and peripheral image plane tilt that would otherwise degrade image quality during VR operation. By sandwiching the VR group between two correction subgroups, the design maintains acceptable off-axis performance even at maximum decentering displacement.

The production lens achieves VR compensation equivalent to 4.5 stops of shutter speed advantage (CIPA standard, measured at the maximum telephoto position on a DX-format camera), which is competitive for a consumer-grade kit zoom.

## Aspherical Surfaces

The design uses five aspherical surfaces on four elements. All aspherical surfaces are specified in the patent using the sag equation:

$$S(y) = \frac{y^2 / R}{1 + \sqrt{1 - \kappa \cdot (y/R)^2}} + C_4 y^4 + C_6 y^6 + C_8 y^8 + C_{10} y^{10}$$

where κ is the patent's conic constant, related to the standard conic constant by K = κ − 1. The polynomial extends to 10th order only; no higher-order terms are used.

### Surface 3 — L11 resin outer surface (R = 11.5762 mm)

| Parameter | Value |
|-----------|-------|
| κ (patent) | 0.0000 |
| K (standard) | −1.0000 (paraboloid) |
| C4 | +3.80785 × 10⁻⁵ |
| C6 | +3.24996 × 10⁻⁸ |
| C8 | −7.75872 × 10⁻¹¹ |
| C10 | −1.57872 × 10⁻¹² |

This is the most strongly aspherized surface in the system. The K = −1 paraboloidal base produces a surface whose sag grows as h²/(2R) rather than the steeper spherical progression, yielding approximately −1.0 mm of departure from the spherical parent at sd ≈ 10 mm. The positive C4 adds a small correction to the paraboloidal base, slightly steepening the mid-zone. This surface is the primary wide-angle field corrector, flattening the field curvature and reducing distortion at the wide end where ray heights on L11 are largest.

The hybrid composite construction (resin on glass) makes the paraboloidal base economical to manufacture: the resin layer can be UV-cured against a precision mold without requiring the glass substrate itself to carry the full aspherical departure.

### Surface 6 — L21 front surface (R = 14.5813 mm)

| Parameter | Value |
|-----------|-------|
| K (standard) | 0.0000 (spherical base) |
| C4 | −1.40463 × 10⁻⁵ |
| C6 | −4.76006 × 10⁻⁸ |
| C8 | +2.18077 × 10⁻¹⁰ |
| C10 | −1.70904 × 10⁻¹¹ |

A spherical base with mild polynomial correction. The negative C4 weakens the surface's curvature toward the rim, reducing overcorrected zonal spherical aberration from the converging beam entering G2. The departure from the sphere is modest (approximately −0.04 mm at sd ≈ 7 mm), consistent with a fine-tuning role rather than a primary correction.

### Surface 13 — L25 front surface (R = 19.2894 mm)

| Parameter | Value |
|-----------|-------|
| K (standard) | 0.0000 |
| C4 | −8.28392 × 10⁻⁵ |
| C6 | −8.50079 × 10⁻⁷ |
| C8 | +1.22452 × 10⁻⁸ |
| C10 | −3.42932 × 10⁻¹¹ |

Stronger polynomial correction than surface 6, with C4 roughly 6× larger. The negative C4 and strongly negative C6 combine to flatten this surface progressively toward the rim, reducing the diverging power of L25's front surface at higher ray heights. This corrects coma in the exit beam from G2, particularly at intermediate and tele zoom positions where the beam diameter through G2c is largest.

### Surfaces 15 and 16 — L31 front and rear (R = −29.6878 mm and R = +56.3004 mm)

**Surface 15 (front):**

| Parameter | Value |
|-----------|-------|
| K (standard) | 0.0000 |
| C4 | −1.28382 × 10⁻⁴ |
| C6 | +4.23515 × 10⁻⁶ |
| C8 | −9.86336 × 10⁻⁸ |
| C10 | +1.12907 × 10⁻⁹ |

**Surface 16 (rear):**

| Parameter | Value |
|-----------|-------|
| K (standard) | 0.0000 |
| C4 | −8.33049 × 10⁻⁵ |
| C6 | +3.48272 × 10⁻⁶ |
| C8 | −6.94588 × 10⁻⁸ |
| C10 | +6.14665 × 10⁻¹⁰ |

L31 carries the strongest polynomial aspherical correction of any element after L11. Both surfaces share a similar coefficient profile: strongly negative C4 with positive C6 and alternating higher-order signs, producing an oscillating correction profile that targets multiple aberration zones simultaneously. The negative C4 on both surfaces of this biconcave element steepens the diverging geometry at the rim, increasing negative power zonally. The positive C6 partially compensates at higher zones, creating a correction profile that specifically targets sagittal field curvature variation during focus travel.

The dual-aspherical construction on the focus group is optically motivated: because L31 translates during focusing, the aberration balance shifts as the element moves through varying conjugate geometries. Two aspherical surfaces provide enough degrees of freedom to maintain correction across the full focus range without requiring additional elements.

All four aspherical elements (L11 hybrid, L21, L25, L31) appear to be manufacturable by precision glass molding (PGM) or resin molding. The patent (¶0176) explicitly notes that aspherical surfaces may be produced by grinding, glass molding, or hybrid composite (resin on glass), and the production lens's consumer price point strongly suggests molded rather than polished aspherics throughout.

## Zoom Kinematics

During zooming from wide (16.46 mm) to tele (48.50 mm), three variable air gaps change:

| Gap | Location | Wide | Mid | Tele | Trend |
|-----|----------|------|-----|------|-------|
| d5 | G1 ↔ G2 | 23.92 | 6.40 | 2.00 | Decreasing |
| d14 | G2 ↔ G3 | 5.34 | 10.17 | 13.02 | Increasing |
| d16 | G3 ↔ G4 | 3.66 | 11.54 | 16.92 | Increasing |

The large decrease in d5 (−21.92 mm from wide to tele) drives the primary zoom action: G2's positive power draws closer to G1, increasing the system's net positive power and lengthening the focal length. The simultaneous increase in d14 and d16 maintains focus compensation and controls field curvature across the zoom range.

Group G1 follows a non-monotonic path (¶0164): it moves image-ward during early zoom travel, then reverses to move object-ward at longer focal lengths. This is visible in the total track variation: TL decreases from 71.75 mm (wide) to 66.94 mm (mid), then increases to 71.27 mm (tele). G4 remains fixed relative to the image plane throughout.

## Conditional Expressions

The patent defines thirteen conditional expressions governing the design space. Example 8 satisfies all of them:

| Condition | Expression | Range | Example 8 value |
|-----------|-----------|-------|-----------------|
| (1) | f11 / f1 | 0.10 – 1.20 | 0.594 |
| (2) | f12 / (−f1) | 0.50 – 4.00 | 1.779 |
| (3) | f22 / ft | 0.200 – 1.700 | 0.553 |
| (4) | f21 / ft | 0.150 – 2.000 | 0.569 |
| (5) | (−fγw) | 1.00 – 2.00 | 1.250 |
| (6) | f21 / f22 | 0.05 – 3.00 | 1.029 |
| (7) | (−f3) / fw | 0.50 – 3.00 | 1.466 |
| (8) | G2 / TLt | 0.100 – 0.500 | 0.208 |
| (9) | G4 / TLt | 0.020 – 0.200 | 0.059 |
| (10) | R2f3 / R1f3 | −20.00 – −1.00 | −1.896 |
| (11) | (−f23) / ft | −16.00 – 5.00 | 0.869 |
| (12) | 2ω (wide) | 50.0° – 120.0° | 84.69° |
| (13) | Bfa / fw | 0.20 – 0.90 | 0.638 |

Condition (6) is notable: f21/f22 = 1.029, indicating that the G2a and G2b subgroups have nearly equal focal lengths (27.61 vs 26.84 mm). This balanced power distribution between the two achromatic doublets — both positioned near the stop — distributes the chromatic correction load evenly and keeps aberration balance stable across the zoom range.

## Petzval Field Curvature

The surface-by-surface Petzval sum, computed via $\sum \varphi_i / (n_i \cdot n_i')$ at each refracting surface, is +0.00230 mm⁻¹, yielding a Petzval radius of approximately 435 mm. This was verified independently by paraxial ABCD ray trace. At the wide-end focal length of 16.46 mm, the Petzval radius-to-EFL ratio is about 26 — a moderate value indicating that the design relies on a combination of Petzval correction (high-index glasses, the negative G1/G3 groups) and aspherical field flattening (particularly L31's dual aspherical surfaces) to achieve a flat field. The fixed positive rear group G4, constructed from the ultra-high-index S-LAH79, contributes the final Petzval flattening near the image plane.

## Verification Summary

All numerical quantities were independently verified by paraxial ABCD ray trace (Python, d-line):

| Parameter | Patent value | Computed value | Δ |
|-----------|-------------|----------------|---|
| EFL (wide) | 16.46 mm | 16.461 mm | +0.001 |
| EFL (mid) | 35.04 mm | 35.043 mm | +0.003 |
| EFL (tele) | 48.50 mm | 48.493 mm | −0.007 |
| G1 focal length | −26.32 mm | −26.32 mm | 0.00 |
| G2 focal length | +18.31 mm | +18.31 mm | 0.00 |
| G3 focal length | −24.13 mm | −24.13 mm | 0.00 |
| G4 focal length | +37.73 mm | +37.73 mm | 0.00 |
| G2a focal length | +27.61 mm | +27.61 mm | 0.00 |
| G2b focal length | +26.84 mm | +26.84 mm | 0.00 |
| G2c focal length | −42.13 mm | −42.13 mm | 0.00 |
| Petzval sum | — | +0.00230 mm⁻¹ | — |
| Petzval radius | — | 435 mm | — |

## Sources

1. WO 2020/012638 A1. "Variable magnification optical system, optical apparatus, and method for manufacturing variable magnification optical system." Nikon Corporation. Published 16 January 2020. Example 8, Table 8.
2. Nikon USA product page, NIKKOR Z DX 16-50mm f/3.5-6.3 VR (product 20084). Accessed May 2026. https://www.nikonusa.com/p/nikkor-z-dx-16-50mm-f35-63-vr/20084/overview
3. OHARA optical glass catalog. Reference entries: S-NPH2 (nd = 1.92286, νd = 20.88), S-LAH79 (nd = 1.95375, νd = 32.32), S-FPL51 (nd = 1.49700, νd = 81.54).
4. HOYA optical glass catalog. Reference entry: FCD1 (nd = 1.49700, νd = 81.61).
