# Leica APO-Summicron 43mm f/2 ASPH — Optical Analysis

**Patent:** US 2024/0241349 A1, Example 1 (First Embodiment)
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.
**Inventors:** Takehiro Nishioka, Yoshiaki Kurioka
**Priority:** JP 2022-142614 (Sep. 8, 2022) · Published Jul. 18, 2024
**Production lens:** Leica APO-Summicron 43mm f/2 ASPH. (fixed to the Leica Q3 43)

---

## 1. Overview and Identification

This patent describes the imaging optical system fitted to the Leica Q3 43, a full-frame fixed-lens camera announced in September 2024. The connection between Example 1 and the production lens is established by convergent evidence: Example 1 has 11 elements in 5 power-grouped units (G1 through G5), which correspond to 8 air-separated physical groups — matching Leica's published specification of 11 elements in 8 groups. Seven aspherical surfaces span four elements, again matching the Leica specification of "four aspherical elements" bearing seven aspherical surfaces. The overall design f-number of 2.06 at f ≈ 41.7 mm is consistent with the marketed 43 mm f/2 designation. DPReview's review explicitly notes the lens was designed "per a design patented by Panasonic," confirming the link through the Panasonic–Leica L-Mount Alliance partnership.

Peter Karbe, Leica's chief lens designer, has stated that the APO correction allows the nominally f/2 lens to have a comparable depth-of-focus appearance to a conventional f/1.4 lens. The mechanism is that apochromatic correction sharpens the in-focus plane so dramatically that the transition from sharp to out-of-focus becomes steeper, creating a perceptual impression of shallower depth of field despite the geometrically identical f/2 cone angle.

### Key Specifications (Patent vs. Manufacturer)

| Parameter | Patent (Example 1, ∞) | Leica Published |
|---|---|---|
| Focal length | 41.71 mm (design EFL) | 43 mm (marketing) |
| Maximum aperture | f/2.06 (design) | f/2.0 (marketing) |
| Half-field angle | 27.50° | — |
| Full field (2ω) | 54.99° | — |
| Image height Y | 20.0 mm | 21.6 mm (sensor half-diagonal) |
| Total track length | 68.37 mm | — |
| Elements / groups | 11 / 5 (power groups) | 11 / 8 (air-separated) |
| Aspherical surfaces | 7 (on 4 elements) | 7 aspherical surfaces |
| Close focus (standard) | — | 0.6 m |
| Close focus (macro) | — | 0.27 m |
| Filter thread | — | E49 |
| OIS | L15 decentered ⊥ axis | Integrated OIS |

The marketing focal length of 43 mm corresponds to the diagonal of a 24×36 mm full-frame sensor (√(24² + 36²) = 43.27 mm), making this a geometrically "true normal" lens. The design EFL of 41.71 mm is the paraxial value; the difference from the marketed 43 mm reflects the standard industry practice of rounding to a nominal value.

---

## 2. Optical Configuration

The system follows a G1(+) – A – G2(+) – G3(−) – G4(+) – G5(−) architecture, where A denotes the aperture stop located between G1 and G2. The positive front group followed by alternating positive and negative rear groups is characteristic of modern inner-focus designs for mirrorless cameras, where the rear section must balance chromatic correction, field flattening, and independent focus motion within a compact package.

### Power-group to physical-group mapping

| Power Group | Sign | Elements | Air-Separated Subgroups | Physical Group # |
|---|---|---|---|---|
| G1 (+) | Positive | L11, L12, L13–L14 cemented, L15 | 4 subgroups | 1–4 |
| G2 (+) | Positive | L21–L22 cemented | 1 subgroup | 5 |
| G3 (−) | Negative | L31–L32 cemented | 1 subgroup | 6 |
| G4 (+) | Positive | L41 | 1 subgroup | 7 |
| G5 (−) | Negative | L51 | 1 subgroup | 8 |

This gives 4 + 1 + 1 + 1 + 1 = **8 air-separated groups**, matching the Leica specification.

### Element Summary

| Element | Shape | nd | νd | Glass (best match) | f (mm) | Asph | Cemented | Role |
|---|---|---|---|---|---|---|---|---|
| L11 | Biconcave | 1.64769 | 33.8 | S-TIM22 (OHARA) | −35.6 | — | — | Front negative; field flattening, retrofocus contribution |
| L12 | Biconvex | 2.00069 | 25.5 | S-NPH4 (OHARA) | +29.9 | — | — | Ultra-high-index positive; strong refraction at minimum curvature |
| L13 | Biconvex | 1.59282 | 68.6 | 593/686 (PK crown, uncertain ID) | +28.7 | — | D1 (with L14) | Positive crown; primary positive power in G1; APD glass |
| L14 | Biconcave | 1.76182 | 26.6 | S-TIH6 (OHARA) | −24.4 | — | D1 (with L13) | Negative flint; chromatic correction partner for L13 |
| L15 | Biconvex (2× Asph) | 1.58660 | 59.0 | 587/590 (HOYA FDS family) | +66.0 | 8A, 9A | — | OIS element; weak positive with aspherics for SA/coma |
| L21 | Biconcave (1× Asph) | 1.68948 | 31.0 | S-TIM28 / L-TIM28 (OHARA) | −22.3 | 10A | D2 (with L22) | Negative flint; aberration control at stop |
| L22 | Biconvex | 1.95375 | 32.3 | S-LAH99 / TAFD33 (OHARA) | +19.0 | — | D2 (with L21) | Ultra-high-index positive; primary power in G2 |
| L31 | Pos. Meniscus (convex to image) | 1.90366 | 31.3 | S-NPH53 / TAFD30 (OHARA) | +37.8 | — | D3 (with L32) | Positive meniscus; high-index short flint for Petzval correction |
| L32 | Biconcave | 1.69895 | 30.1 | S-TIM35 (OHARA) | −31.0 | — | D3 (with L31) | Negative flint; G3 diverging power for field correction |
| L41 | Biconvex (2× Asph) | 1.55332 | 71.7 | S-FPM3 / L-FPM3 (OHARA) | +40.0 | 16A, 17A | — | Fluorophosphate positive; main APD contributor; focus group |
| L51 | Neg. Meniscus (convex to image, 2× Asph) | 1.58660 | 59.0 | 587/590 (HOYA FDS family) | −31.2 | 18A, 19A | — | Rear field-flattener; G5 negative for Petzval balance |

---

## 3. Glass Selection and Chromatic Correction

The APO designation on this lens is not merely marketing. The glass selection reveals a deliberate apochromatic correction strategy built around several key material choices.

### 3.1 Ultra-High-Index Glasses

Three elements use glasses with refractive indices approaching or exceeding 1.9:

**L12 — S-NPH4 (nd = 2.00069, νd = 25.5).** This OHARA super-high-index heavy flint is one of the highest-index optical glasses in current production. Its extreme refractive index means that the same optical power can be achieved with much shallower curvatures than lower-index alternatives. For L12, this is critical: as a biconvex element contributing strong positive power to G1 (f = +29.9 mm), using S-NPH4 allows the surface radii (R3 = +37.97, R4 = −131.51) to remain moderate, reducing both spherical aberration and higher-order monochromatic residuals. The low Abbe number (25.5) means L12 also serves as the primary chromatic dispersion source in the front group, which is then corrected by L13.

**L22 — S-LAH99 (nd = 1.95375, νd = 32.3).** This ultra-high-index lanthanum glass carries the primary positive power of G2 (f = +19.0 mm), the strongest positive element in the rear half of the system. Its placement immediately behind the aperture stop, cemented to the negative L21, forms a powerful doublet that handles both axial color and spherical aberration in the post-stop region.

**L31 — S-NPH53 (nd = 1.90366, νd = 31.3).** Another ultra-high-index short flint, used as a positive meniscus in G3. The high index reduces curvature demands on the meniscus surfaces, limiting the introduction of higher-order astigmatism.

### 3.2 Anomalous Partial Dispersion Glasses

The APO correction depends on anomalous partial dispersion (APD) to bring a third wavelength (typically g-line at 435.8 nm) to a common focus alongside the standard d-line and C-line correction of an ordinary achromat.

**L13 — Six-digit code 593/686 (nd = 1.59282, νd = 68.6).** This glass sits in the phosphate crown (PK) region of the glass map, characteristic of low-dispersion positive crown glasses. The closest standard catalog match is OHARA S-FPM2 (nd = 1.59522, νd = 67.73), but with non-trivial residuals (Δnd = +0.0024, Δνd = −0.87), suggesting the patent may use a specialty melt, a glass from a secondary supplier (CDGM, Sumita), or intentionally rounded values. Regardless of the specific designation, a glass at this position on the nd/νd diagram will have positive anomalous partial dispersion (ΔPgF > 0). Paired with the normal-dispersion flint L14 (S-TIH6, νd = 26.6) in a cemented doublet, L13's APD helps pull the short-wavelength (blue/violet) focus closer to the long-wavelength focus, reducing secondary spectrum in the front group.

**L41 — S-FPM3 (nd = 1.55332, νd = 71.7).** This fluorophosphate glass is the cornerstone of the APO correction. With a high Abbe number (71.7) and positive APD, it provides the same kind of secondary-spectrum reduction as ED (extra-low dispersion) glass does in telephoto designs, but here applied to a fast normal lens. L41 is a powerful biconvex element (f = +40.0 mm) with two aspherical surfaces — the most optically complex single element in the design. The patent's Inequality (7) requires νd4G > 62, and the actual value of 71.7 provides substantial margin, indicating that chromatic correction was a primary design driver for this element.

**L15 and L51 — Six-digit code 587/590 (nd = 1.58660, νd = 59.0).** Both the OIS element and the rear field-flattener use the same glass, a crown in the BAL/BAM region of the glass map. The closest catalog match is in the HOYA FDS family (nd = 1.58660, νd = 59.01, exact to five decimal places), available in PGM-compatible grades. While not as strongly anomalous as fluorophosphate glass, the νd = 59.0 of these elements contributes to keeping the overall secondary spectrum low. The patent's Inequality (8) requires νd5G > 50 for L51; the value of 59.0 satisfies this comfortably.

### 3.3 Optical Cement

All three cemented doublets (D1 = L13+L14, D2 = L21+L22, D3 = L31+L32) use the same cement with nd = 1.56732 and νd = 42.8, matching OHARA S-BAM4. The patent explicitly lists the cement as a 0.01 mm thick optical surface at each junction — an unusually detailed treatment that acknowledges the cement's non-negligible refractive contribution.

### 3.4 Cover Glass

The parallel plate P (nd = 1.51680, νd = 64.2) matches OHARA L-BSL7, the low-softening-temperature variant of BK7-equivalent glass. In the Q3 43, this represents the combined IR-cut / low-pass filter stack in front of the sensor.

### 3.5 Petzval Sum

The computed Petzval sum is +0.00098 mm⁻¹, yielding a Petzval radius of approximately −1019 mm. This is exceptionally well-corrected — nearly flat Petzval field. The deliberate use of high-index glasses throughout the design (five elements with nd > 1.68) is the primary mechanism: high-index positive elements contribute less to the Petzval sum per unit of optical power than low-index ones, while the strong negative elements (L11, L14, L21, L32, L51) provide the necessary Petzval counter-bending. The result is a lens that can deliver sharp corners on the Q3 43's demanding 60-megapixel sensor even at full aperture.

---

## 4. Aspherical Surfaces

Seven surfaces across four elements carry aspherical profiles, making this one of the most aggressively aspherized normal-focal-length designs in current production. All aspherical departures below are computed at the estimated clear-aperture semi-diameter (SD) for each surface, derived from paraxial marginal and chief ray traces at f/2.06 with 8% mechanical clearance.

### 4.1 L15 — Surfaces 8A and 9A (OIS Element)

Both surfaces of the image-stabilization element are aspherical. The departures from the base sphere are approximately −197 μm on surface 8A (SD ≈ 9.4 mm) and −146 μm on surface 9A (SD ≈ 9.1 mm). Both surfaces have K = 0 (spherical base), with the aspheric profile defined entirely by even-order polynomial coefficients through A14.

The aspherical departures on L15 serve a dual purpose. First, they correct residual spherical aberration from the front group at the marginal ray height near the stop. Second, because L15 moves perpendicularly to the optical axis during image stabilization, the aspherical profiles must be designed to maintain correction quality over the full decentering range — a considerably tighter design constraint than for a stationary aspheric. The patent states that the image blur compensation displacement at infinity is 0.401 mm.

### 4.2 L21 — Surface 10A (Front of Post-Stop Doublet)

The object-side surface of L21 carries a significant conic constant (K = −0.420) along with polynomial terms through A10 (higher orders are zero). The prolate-ellipsoid base shape (K < 0) reduces the surface slope at the rim compared to a sphere of the same vertex radius, which helps control coma and oblique spherical aberration for off-axis ray bundles passing through the stop.

The combined aspheric departure at the clear aperture (SD ≈ 7.1 mm) is approximately −60 μm, with the polynomial terms (−64 μm) dominating over the mild conic contribution (+3 μm). The conic sets the bulk wavefront shape while the polynomial provides fine high-order correction.

### 4.3 L41 — Surfaces 16A and 17A (Focus Group)

L41 is a biconvex fluorophosphate element with aspherics on both surfaces. The front surface (16A) at SD ≈ 11.9 mm has moderate departure (−114 μm) while the rear surface (17A) at SD ≈ 14.2 mm shows a much larger +610 μm departure — the rear surface flattens significantly relative to its base sphere (R = −24.52 mm), creating a pronounced "bent" profile that redirects the converging beam.

Both surfaces have K = 0 with polynomial coefficients through A14. The asymmetric departure pattern (negative on front, positive on rear) indicates that the aspherics are primarily working to control the field-dependent behavior of G4 as a focusing group: since L41 moves during focus (see §5), the aspherical profiles must maintain correction quality across the entire internal-focus range from infinity to the standard minimum focus distance of 0.6 m.

### 4.4 L51 — Surfaces 18A and 19A (Rear Field-Flattener)

The rear-most glass element carries the largest aspherical departures in the entire system. Surface 18A has K = −0.276 (a prolate ellipsoid) plus polynomial terms yielding a total departure of approximately +3,785 μm — nearly 3.8 mm of aspheric departure from the base sphere at SD ≈ 15.3 mm. The conic contributes approximately +1,126 μm, with the polynomial terms adding a further +2,659 μm. Surface 19A adds −106 μm of departure at SD ≈ 16.2 mm.

The extreme aspherization of surface 18A reflects L51's role as a field-flattener operating close to the image plane. Its base radius is only −17.17 mm, producing a steeply curved spherical surface, and the large SD-to-radius ratio (sd/|R| ≈ 0.89) places the clear aperture near the geometric limit of the sphere. The prolate conic and polynomial terms together reshape this steep surface to redirect the strongly diverging off-axis beam, correcting astigmatism, field curvature, and distortion without introducing excessive higher-order residuals. At this position, ray heights vary strongly with field angle, so the aspherical departures primarily affect off-axis performance rather than on-axis spherical aberration.

### 4.5 Manufacturing Implications

The four aspherical elements span two glass types:

- **L15 and L51** use the 587/590 glass (best match: HOYA FDS family, nd = 1.58660). HOYA offers this glass in PGM-compatible ("M-" prefix) grades, making it a standard choice for high-volume aspherical element production via precision glass molding.
- **L41** uses OHARA S-FPM3 (nd = 1.55332), a fluorophosphate glass. OHARA offers L-FPM3 as the low-Tg PGM variant with identical optical constants. Given the production volumes of the Q3 43, PGM is the likely manufacturing method.
- **L21** uses S-TIM28 (nd = 1.68948). OHARA offers L-TIM28 as the PGM variant, suggesting this element is also glass-molded.

---

## 5. Focus Mechanism

The lens uses a **floating-element inner focus** system with two independently moving groups. During focus from infinity to close range, both G2 (L21–L22 cemented doublet) and G4 (L41 singlet) translate toward the object along the optical axis. The remaining three groups (G1, G3, G5) and the aperture stop remain stationary.

### Variable Air Gaps

| Gap | Location | Infinity | Middle | Close | Δ(close−∞) | Meaning |
|---|---|---|---|---|---|---|
| d11 | Stop → G2 front | 8.500 | 7.638 | 6.498 | −2.002 | G2 advances toward object |
| d15 | G2 rear → G3 front | 2.398 | 3.260 | 4.400 | +2.002 | Space opens behind G2 |
| d19 | G3 rear → G4 front | 4.563 | 3.377 | 1.811 | −2.753 | G4 advances toward object |
| d21 | G4 rear → G5 front | 5.271 | 6.457 | 8.024 | +2.753 | Space opens behind G4 |

Two critical observations emerge:

1. **Complementary gap conservation:** d11 + d15 = 10.898 mm at all focus positions (constant within 0.001 mm), and d19 + d21 = 9.834 mm at all focus positions. This means the total track length from the stop to G3, and from G3 to G5, remains constant during focus. The overall lens length does not change. This is the hallmark of a well-designed inner-focus system: the barrel does not extend during focusing.

2. **Differential motion:** G4 moves 37% farther than G2 (2.753 mm vs. 2.002 mm). This differential creates the "floating" element behavior that maintains correction quality across the focus range. If both groups moved the same amount, as in a simpler unit-focus or single-group IF design, the balance of spherical aberration and field curvature would shift substantially at close focus. The independent motion allows each group to track its optimal position.

The patent (§0049–0050) explicitly states that G2 and G4 move toward the object during close focusing, while G1, G3, and G5 remain fixed at constant distances from the image plane.

### Macro Mode

The Leica Q3 43 extends its close-focus capability to 0.27 m through a separate macro mechanism. According to reviewer observations, engaging the macro ring physically advances the entire optical assembly forward by approximately 3 mm, changing the lens-to-sensor distance. This mechanical extension is distinct from the internal electronic focusing and explains why the macro mode forces the maximum aperture to f/2.8 (the increased extension shifts the effective f-number). This macro extension mechanism is not described in the patent, which covers only the internal focus system.

---

## 6. Image Stabilization

The patent (§0051) identifies L15 as the image blur compensation lens. This element — the rearmost element of G1, positioned immediately before the aperture stop — translates perpendicularly to the optical axis to counteract camera shake.

L15 is a weak positive singlet (f = +66.0 mm) with both surfaces aspherical. Its position near the stop is optimal for OIS because the marginal ray height is relatively small there (minimizing the induced aberration from decentering), while the chief ray height is near zero (minimizing the shift of the image field). The patent's lateral aberration diagrams (Fig. 1C) show that the compensated state (Dec = 0.401 mm) maintains excellent correction out to 70% of the field, with lateral chromatic aberration staying well within ±0.04 mm across the pupil — confirming that the aspherical profiles on L15 were explicitly optimized for decentered performance.

---

## 7. Conditional Expression Verification

The patent defines ten inequalities that characterize the design space. All values were independently verified using the prescription data:

| Ineq. | Expression | Range | Computed | Patent Value | Status |
|---|---|---|---|---|---|
| (1) | f1/f | 1.0 – 1.5 | 1.246 | 1.25 | ✓ |
| (2) | \|f5/f\| | 0.5 – 1.0 | 0.747 | 0.75 | ✓ |
| (3) | f2/f4 | 1.8 – 3.4 | 2.374 | 2.37 | ✓ |
| (4) | BF/Y | 0.1 – 0.5 | 0.300 | 0.30 | ✓ |
| (5) | TL/Y | 3.0 – 3.8 | 3.419 | 3.42 | ✓ |
| (6) | nd2Gp | > 1.8 | 1.954 | 1.95375 | ✓ |
| (7) | vd4G | > 62 | 71.7 | 71.68 | ✓ |
| (8) | vd5G | > 50 | 59.0 | 59.01 | ✓ |
| (9) | (1−β4×β4)×β4r×β4r | 0.4 – 1.0 | 0.72 | 0.72 | ✓ |
| (10) | \|(1−β)×βr\| | 0.2 – 10 | 0.54 | 0.54 | ✓ |

Inequality (9) defines the position sensitivity of the fourth lens group G4 during focus. Here β4 is the lateral magnification of G4 at infinity, and β4r is the composite lateral magnification of all elements image-side of G4. The value of 0.72 falls in the "more preferably satisfied" range of 0.6–0.8 (Inequalities 9c/9d), indicating that G4's motion is well-optimized for a balance between focus sensitivity and aberration stability across the focus range.

Inequality (10) governs the OIS compensation ratio. Here β is the lateral magnification of the image blur compensation lens (L15) at infinity, and βr is the composite lateral magnification of all elements between L15 and the image plane. The product |(1−β)×βr| = 0.54 defines the ratio of image shift to lens decentering, indicating that each millimeter of L15 lateral displacement produces approximately 0.54 mm of image shift — a moderate ratio allowing effective stabilization without demanding excessive mechanical travel.

---

## 8. Design Philosophy

This lens represents a sophisticated modern approach to the classical "fast normal" design problem, distinguished by several notable features:

**Starting-point negative.** L11's biconcave negative element at the very front of the system is an unusual choice for a ~43 mm normal lens. Its primary role is aberration management rather than power contribution: by pre-diverging the incoming beam before it encounters the strong positive elements L12 and L13, L11 controls the ray heights and incidence angles on downstream surfaces, reducing the higher-order monochromatic residuals that would otherwise be introduced by the steep curvatures of the high-index positives. L11 also contributes to Petzval correction — as a negative element with moderate index (nd = 1.648), it bends the Petzval surface backward, counteracting the positive elements' inward-curving contribution. The overall system BFD of ~6 mm against an EFL of ~42 mm yields BFD/EFL ≈ 0.14, confirming this remains a compact, slightly telephoto-ratio configuration appropriate for a mirrorless fixed-lens camera with a short flange distance.

**Three cemented doublets in rapid succession.** The rear half of the lens contains three cemented doublets (D2, D3) plus the powerful L41 singlet, all operating at high ray incidence angles immediately after the stop. This dense packing of high-index doublets is characteristic of modern computational optimization — each doublet provides a paired correction "knob" for simultaneous chromatic and monochromatic aberration control that would be impossible to achieve with singlets alone.

**Extreme index range.** The design spans an extraordinary range of refractive indices, from 1.553 (L41, S-FPM3) to 2.001 (L12, S-NPH4). This 0.45-unit range is among the widest in any production camera lens. The high-index elements minimize surface curvatures and thus higher-order aberrations, while the low-index fluorophosphate elements provide the anomalous dispersion needed for APO correction.

**Aspherics placed for maximum leverage.** Rather than distributing aspherics uniformly, the design concentrates them at four strategic positions: at the OIS element (L15, near the stop for SA correction), at the first post-stop surface (L21, for coma and oblique SA), and at the two rear elements (L41 and L51, for field curvature, astigmatism, and distortion). No aspherics appear on the front three elements (L11, L12, L13/L14), where the ultra-high-index glasses already provide sufficient curvature latitude.

---

## 9. Patent Comparison Across Embodiments

The patent presents five embodiments, all sharing the G1(+)–A–G2(+)–G3(−)–G4(+)–G5(−) architecture. Examples 1–4 have 11 elements; Example 5 has 12 (an additional element L21 in G1, bringing it to six elements before the stop).

Example 1 was selected as the production design based on its match with the Leica Q3 43's published specifications (11 elements / 8 groups / 7 aspherical surfaces), its aberration performance (the tightest SA correction at f/2.06 across all embodiments per the longitudinal aberration plots), and its image stabilization compensation distance of 0.401 mm.

---

*Analysis based on US 2024/0241349 A1, Example 1. All element focal lengths, inequality values, and glass identifications independently verified via thick-lens computation and catalog matching. Aspherical departures computed from patent polynomial coefficients at paraxially ray-traced semi-diameters. Petzval sum verified via surface-by-surface computation. Manufacturer specifications sourced from Leica Camera AG product pages and DPReview.*
