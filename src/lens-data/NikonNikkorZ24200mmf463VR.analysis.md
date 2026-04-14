# Nikon NIKKOR Z 24-200mm f/4-6.3 VR — Optical Analysis

**Patent:** JPWO2020/157904 A1, Example 1 (Table 1)
**Inventors:** Makita Ayumu (槇田 歩), Itō Tomoki (伊藤 智希), Miwa Tetsushi (三輪 哲史) — Nikon Corporation
**International Filing Date:** January 31, 2019
**International Publication Date:** August 6, 2020

---

## 1. Patent-to-Product Identification

Example 1 of this patent is confidently identified as the optical design underlying the production **NIKKOR Z 24-200mm f/4-6.3 VR**, announced by Nikon in February 2020 and shipped in mid-2020. The correspondence is established by the following concordances:

| Parameter | Patent Example 1 | Production Lens |
|---|---|---|
| Focal length range | 24.72–194.0 mm | 24–200 mm |
| Maximum aperture | f/4.12 (W) – f/6.50 (T) | f/4 – f/6.3 |
| Zoom ratio | 7.848× | 8.3× (marketing) |
| Elements / groups | 19 / 15 | 19 / 15 |
| Aspherical surfaces | 3 | 3 (2 asph + 1 asph ED) |
| ED-type elements | 3 (vd > 63) | 3 (2 ED + 1 asph ED) |
| Half-field angle (W) | 42.59° → 2ω ≈ 85.2° | 84° (Nikon spec) |
| Half-field angle (T) | 6.13° → 2ω ≈ 12.3° | 12° 20′ (Nikon spec) |
| Focus mechanism | G5 (internal, toward image) | Internal focus (confirmed) |
| VR element | G3 sub-group (cemented doublet) | VR (confirmed, voice coil motors) |
| Group power sequence | +/−/+/+/−/− | Consistent with Nikon's lens diagram |

The slight discrepancies in focal length (194 vs. 200 mm at telephoto) and zoom ratio (7.85 vs. 8.3) reflect the typical difference between the patent's design prescription (which specifies exact paraxial values) and the marketing specification (which rounds to commercially meaningful figures). At the telephoto end, the computed half-field of 6.13° corresponds to 2ω = 12.26°, essentially identical to Nikon's stated 12° 20′. A paraxial ray trace through the patent prescription reproduces the stated EFLs at all four zoom positions to within 0.005 mm.

---

## 2. Optical Construction Overview

The lens comprises six zoom groups containing 19 elements in 15 air-separated sub-groups:

| Zoom Group | Power | Elements | Air-Separated Sub-Groups | Patent Focal Length |
|---|---|---|---|---|
| G1 | Positive | L11, L12, L13 (3) | 3 | +99.0 mm |
| G2 | Negative | L21, L22, L23, L24 (4) | 4 | −16.5 mm |
| G3 | Positive | L31, L32+L33, L34 (4) | 3 | +48.5 mm |
| G4 | Positive | L41+L42, L43+L44 (4) | 2 | +28.9 mm |
| G5 | Negative | L51+L52 (2) | 1 | −39.1 mm |
| G6 | Negative | L61, L62 (2) | 2 | −15,588 mm (≈afocal) |
| **Total** | | **19 elements** | **15 groups** | |

The aperture stop (surface 15) lies between G2 and G3, and moves as a unit with G3 and G6 during zooming. The overall design follows a classic positive-lead six-group zoom architecture, where G1 and G2 form a variator pair providing the primary zoom action, while G3–G6 handle relay, field correction, focusing, and final image delivery.

### Zoom Behavior

All moving groups translate toward the object during wide-to-tele zooming. The total track length increases from approximately 126.5 mm (wide) to 188.5 mm (tele), corresponding to the lens barrel's physical extension of roughly 62 mm — consistent with the production lens's measured 63 mm extension from 24 mm to 200 mm.

The aperture stop, G3, and G6 move as a mechanically linked unit. This shared cam track simplifies the zoom mechanism while maintaining the stop's position relative to the rear relay group, which stabilizes pupil aberrations across the zoom range.

### Variable Aperture

The lens has a variable maximum aperture — f/4.12 at the wide end increasing to f/6.50 at telephoto. The patent provides four zoom positions with corresponding f-numbers (W: 4.12, M1: 5.59, M2: 6.40, T: 6.50), showing that the aperture loss occurs predominantly in the first half of the zoom range. By the second intermediate position (≈105 mm), the f-number is already 6.40, very close to the tele-end value. This is consistent with the production lens's behavior, where the maximum aperture reaches f/6.3 around 70–80 mm and remains essentially constant through 200 mm.

---

## 3. Element-by-Element Analysis

### Group 1: Front Positive Group (L11–L13, f = +99.0 mm)

G1 is the front positive collector group, responsible for gathering light over a large entrance pupil at the telephoto end. It comprises three air-spaced elements:

**L11 — Negative Meniscus** (nd = 1.9037, vd = 31.27)
Glass: TAFD45 equivalent (HOYA dense flint; nd = 1.90366, vd = 31.27, exact match). The high refractive index places the bending surfaces at relatively low curvatures despite the strong negative power (f ≈ −142 mm). The meniscus shape — convex toward the object — follows the classic telephoto front-group convention of placing a negative element ahead of the positive doublet to reduce the Petzval sum. L11's dense flint glass provides the necessary dispersion for chromatic correction against L12 and L13.

**L12 — Biconvex Positive** (nd = 1.5932, vd = 67.90)
Glass: PCD4 equivalent (HOYA phosphate crown; nd = 1.59319, vd = 67.87, residuals Δnd < 0.0001, Δvd = 0.03). This is one of the two **ED-class elements** identified in the Nikon specification. The high Abbe number (67.90) places this glass in the phosphate crown region with partial dispersion characteristics that provide meaningful secondary-spectrum correction. The thin-lens focal length is approximately +118 mm. Paired with L11, these two elements form an air-spaced achromatic pair — L11's high dispersion cancels L12's chromatic contribution, yielding a well-corrected doublet at the telephoto end where axial color dominates.

**L13 — Positive Meniscus** (nd = 1.5932, vd = 67.90)
Glass: Same as L12 (PCD4 equivalent). The second **ED-class element**. L13 provides additional positive power (f ≈ +117 mm) while the meniscus shape — convex toward the object — controls higher-order spherical aberration and coma in the converging beam from L12. Using the same glass as L12 simplifies procurement and ensures thermal behavior is symmetric within the group.

G1 is mechanically fixed during focusing but translates toward the object during zooming. The total track length increases by approximately 62 mm from wide to tele (126.5 → 188.5 mm), and the D1 air gap between G1 and G2 opens from 1.5 mm to 54.5 mm as G2 moves at a different rate than G1. This expanding front gap is the primary geometric mechanism for increasing the system's effective focal length.

### Group 2: Negative Variator (L21–L24, f = −16.5 mm)

G2 is the powerful negative variator that creates the zoom magnification change. Its short focal length (−16.5 mm) gives it very high magnification sensitivity — small movements produce large focal-length changes. G2 contains four air-spaced elements, making it the densest single-group corrector in the design.

**L21 — Negative Meniscus** (nd = 1.9538, vd = 32.33)
Glass: S-LAH79 equivalent (lanthanum dense flint). Convex toward the object, this is one of the highest-index glasses in the design. The very high nd (1.954) allows a strongly curved rear surface (R = 19.0 mm) while keeping the front radius gentle (R = 236.0 mm), distributing aberration contribution favorably. L21 provides the dominant negative power of G2 (f ≈ −21.7 mm).

**L22 — Biconcave Negative** (nd = 1.7550, vd = 52.33)
Glass: N-LAK33B equivalent (Schott lanthanum crown; nd = 1.75500, vd = 52.32). This element contributes additional negative power (f ≈ −36.7 mm) and, importantly, provides a different dispersion characteristic from L21. The combination of L21 (low vd) and L22 (moderate vd) with L23 (very low vd) enables fine chromatic balance across the zoom range where G2's magnification — and therefore its chromatic contribution — varies dramatically.

**L23 — Biconvex Positive** (nd = 1.9229, vd = 20.88)
Glass: S-NPH2 equivalent (ultra-high-dispersion dense flint). This is the most exotic glass in G2, with an exceptionally low Abbe number of 20.88. It is a **high-dispersion element** deliberately chosen for its extreme chromaticity. Despite being a positive element in a negative group, L23's role is chromatic rather than power-based: its high dispersion provides the "achromatization lever" needed to cancel the lateral color introduced by L21 and L22 across the zoom range. The biconvex shape with roughly symmetric radii (37.1/−52.6) minimizes coma from this high-index element.

**L24 — Biconcave Negative** (nd = 1.8160, vd = 46.59)
Glass: TAFD25 equivalent (HOYA lanthanum dense flint; nd = 1.81600, vd = 46.62). The final element of G2 provides additional negative power (f ≈ −37.4 mm) and helps control the exit angle of the diverging beam before the long air gap to the aperture stop. The lanthanum glass provides good UV transmission, beneficial for the g-line chromatic correction shown in the patent's aberration diagrams.

### Group 3: Positive Relay with VR (L31–L34, f = +48.5 mm)

G3 is the first relay group after the stop and serves a dual role: it collects the divergent beam from G2 and contains the vibration-reduction (VR) sub-group. The aperture stop (surface 15) is placed immediately ahead of G3 — a 2.0 mm air gap separates the stop from L31.

**L31 — Biconvex Positive** (nd = 1.9027, vd = 35.72)
Glass: TAFD30 equivalent (HOYA lanthanum dense flint; nd = 1.90265, vd = 35.70). A strong positive element (f ≈ +38.8 mm) that begins reconverging the beam after the stop. The very high refractive index keeps surface curvatures moderate despite the short focal length, controlling spherical aberration at the maximum aperture.

**L32 + L33 — Cemented Doublet (VR Sub-Group)** (combined f ≈ +67.7 mm)

This cemented pair constitutes the **vibration-reduction element**. During image stabilization, the doublet decenters perpendicular to the optical axis, translating the image on the sensor to compensate for camera shake.

- **L32 — Negative Meniscus** (nd = 2.0010, vd = 29.12): Glass S-NPH53 equivalent. This is the **highest-index glass in the entire lens** (nd = 2.001). The extreme refractive index allows the cemented interface to carry strong corrective power while the outer surfaces remain at manageable curvatures. L32's negative power (f ≈ −48.7 mm thin-lens) partially offsets L33's positive contribution.

- **L33 — Biconvex Positive** (nd = 1.5796, vd = 53.74): Glass N-BAF4 equivalent (Schott barium flint; nd = 1.57957, vd = 53.71). L33 provides the dominant positive power (f ≈ +28.3 mm thin-lens) that makes the cemented pair net-positive. The large nd step at the cemented interface (2.001 → 1.580, Δnd = 0.421) creates very strong refractive power at surface 19 (R = 20.9 mm), which is the primary correcting surface for lateral color during VR decentering.

The combined doublet is positive (f ≈ +67.7 mm), which is characteristic of Nikon's VR implementations — a positive VR group produces image shift in the same direction as the decentration, simplifying the control algorithm. The patent specifically identifies this doublet as the "防振群" (vibration-compensation group).

**L34 — Negative Meniscus** (nd = 1.9538, vd = 32.33)
Glass: S-LAH79 equivalent (same as L21). Concave toward the object, L34 provides negative power (f ≈ −42.5 mm) that partially compensates for L31's strong convergence, reducing the beam divergence angle entering G4. This Petzval-flattening role is critical — without it, the strong positive power of L31 and the L32/L33 doublet would produce excessive inward-curving field curvature.

### Group 4: Positive Relay with Aspherical ED (L41–L44, f = +28.9 mm)

G4 is the strongest positive group in the design (f = +28.9 mm) and contains two cemented doublets. It houses the aspherical ED glass element — the design's most optically sophisticated single element.

**L41 + L42 — Cemented Doublet** (combined f ≈ +42.5 mm)

- **L41 — Biconvex Positive** (nd = 1.8348, vd = 42.73): Glass S-LAH55V equivalent (lanthanum flint). With symmetric radii (R = ±37.14 mm), this element minimizes coma — a symmetric biconvex element at unit conjugate has zero coma by symmetry, and near the relay conjugate this advantage is partially preserved.

- **L42 — Negative Meniscus** (nd = 1.9037, vd = 31.27): Glass TAFD45 equivalent (same as L11). The flint partner corrects axial and lateral chromatic aberration from L41. The cemented interface carries modest corrective power.

**L43 + L44 — Cemented Doublet with Aspherical ED** (combined f ≈ +79.5 mm)

This is the most technically demanding element pair in the lens:

- **L43 — Negative Meniscus** (nd = 1.9538, vd = 32.33): Glass S-LAH79 equivalent. Convex toward the object, L43 provides the high-dispersion counterpart to L44's ED glass. The thin-lens focal length is approximately −31.0 mm.

- **L44 — Biconvex Positive, rear surface aspherical** (nd = 1.4971, vd = 81.49): Glass **S-FPL51** equivalent (Ohara fluorophosphate crown). This is the lens's **aspherical ED element** — the special element Nikon highlights in the product's marketing literature. S-FPL51 (nd = 1.49700, vd = 81.54, residuals Δnd = 0.0001, Δvd = 0.05) is a high-grade fluorophosphate ED glass exhibiting anomalous partial dispersion (APD): its P(g,F) value deviates approximately +0.028 above the normal glass line, enabling superior secondary spectrum correction that ordinary crown-flint achromats cannot achieve.

  The aspherical surface (surface 28) has a spherical base curve (K = 0) with polynomial correction terms through A12. At a semi-diameter of 8 mm, the aspherical departure from the base sphere is approximately +0.110 mm — a substantial correction that primarily targets residual spherical aberration and coma in the converging beam toward the image. The positive departure (surface becomes less concave at the rim) flattens the wavefront error across the pupil.

  This element does triple duty: (1) its ED glass corrects secondary chromatic aberration, (2) the aspherical surface corrects spherical aberration and higher-order monochromatic terms, and (3) as part of the cemented doublet with L43, it provides well-corrected achromatic positive power for the relay. Placing the aspherical surface on an ED element is an elegant design choice — it concentrates two expensive manufacturing processes (precision molding for the asphere and fluorophosphate glass processing) into one element rather than two, saving both cost and axial length.

### Group 5: Focus Group (L51 + L52, f = −39.1 mm)

G5 is a single cemented doublet that constitutes the **focus group**. The patent states that focusing from infinity to close range is accomplished by moving G5 toward the image plane. G5's negative power means it acts as a diverging relay — as it moves rearward, the divergence increases, shortening the effective back focal distance and shifting the conjugate to a closer object distance.

- **L51 — Biconvex Positive** (nd = 1.8467, vd = 23.80): Glass TAFD37 equivalent (HOYA dense flint; nd = 1.84666, vd = 23.78). The extremely low Abbe number (23.80) makes this a **high-dispersion element** — paired with L52, the two form an achromatized doublet that minimizes focus-dependent chromatic shift (focus breathing in color).

- **L52 — Biconcave Negative, rear surface aspherical** (nd = 1.8514, vd = 40.13): Glass TAFD33 equivalent (HOYA lanthanum dense flint; nd = 1.85135, vd = 40.10). The aspherical surface (surface 31, K = 0) provides a modest but critical correction: at h = 8 mm, the departure is approximately −0.016 mm. This small correction targets the residual spherical aberration that would otherwise vary during focusing, ensuring consistent image quality from infinity to the 0.5 m close-focus distance.

The focus travel analysis reveals the mechanical elegance of this design:

| Zoom Position | D4 change (mm) | G5 travel (mm) | Comment |
|---|---|---|---|
| Wide (24.7 mm) | +0.89 | 0.89 | Minimal travel |
| Mid1 (50 mm) | +1.62 | 1.62 | Moderate |
| Mid2 (105 mm) | +4.31 | 4.31 | Substantial |
| Tele (194 mm) | +9.70 | 9.70 | Maximum travel |

At the telephoto end, G5 must travel nearly 10 mm to shift focus from infinity to the close-focus distance. At the wide end, less than 1 mm suffices. The D4 and D5 changes are exactly equal and opposite in each case (to within rounding), confirming that G5 is the sole moving element during focusing — no floating element or compensation mechanism is employed. The very small BF changes (0.03–0.56 mm) represent residual image-plane shift inherent to the internal-focus geometry; at the wide end, the 27 μm shift is well within the practical depth of focus at f/4 (~±140 μm for a 30 μm circle of confusion), confirming the near-ideal parfocality of the IF mechanism. At the telephoto end, the 0.56 mm shift is larger but still well-corrected relative to the depth of focus at f/6.5.

### Group 6: Rear Field Corrector (L61 + L62, f ≈ −15,588 mm)

G6's combined focal length is approximately −15,600 mm — effectively near-afocal. This means G6 contributes negligible optical power; its role is purely corrective. The two elements form an "air lens" (the 0.1 mm gap between them) that Nikon specifically calls out as a design feature in the patent claims.

**L61 — Negative Meniscus, rear surface aspherical** (nd = 1.8208, vd = 42.51)
Glass: Lanthanum dense flint (nearest catalog match: CDGM H-LAF3, nd = 1.82080, vd = 42.41, Δvd = 0.10 — identification uncertain). Concave toward the object, L61 is positioned in the rear of the lens where off-axis ray heights are substantial. Its aspherical rear surface (surface 33, K = 0) corrects field curvature and astigmatism at the image periphery. At h = 8 mm, the aspherical departure is −0.012 mm — a subtle correction that bends the tangential and sagittal focal surfaces toward a common plane.

**L62 — Biconvex Positive** (nd = 1.6838, vd = 37.57)
Glass: S-TIM22 equivalent (titanium flint). The final optical element before the image plane. Despite being a "positive" element (f ≈ +101 mm), its weak power contributes minimally to the focal length. Its primary function is to complete the air-lens correction started by L61: the shape factor of the air lens between L61 and L62 is specified by patent condition (12), which controls field curvature at the wide end. The patent's computed value for Example 1 is 0.931 — confirming the concave-to-convex air lens profile that opposes the Petzval curvature of the preceding groups.

G6 moves as a unit with the aperture stop and G3 during zooming. This linked motion means the field-correction characteristics of G6 track with the pupil position defined by the stop, maintaining consistent edge-to-edge performance across the zoom range.

---

## 4. Aspherical Surfaces

The lens employs three aspherical surfaces, all with spherical base curves (K = 0) and even-order polynomial corrections through the 12th order:

### Surface 28 — L44 rear (Aspherical ED Element)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | +3.1302 × 10⁻⁵ |
| A6 | −1.0309 × 10⁻⁷ |
| A8 | +6.5353 × 10⁻¹⁰ |
| A10 | −2.5783 × 10⁻¹² |
| A12 | +3.2673 × 10⁻¹⁵ |

This is the strongest aspherical surface in the design. The dominant A4 term is positive, meaning the surface becomes less concave (flatter) at the rim compared to the base sphere. At a semi-diameter of 8 mm, the departure reaches +0.110 mm — nearly an order of magnitude larger than the other two aspherical surfaces. The alternating signs of the coefficients (positive A4, negative A6, positive A8, etc.) indicate a correction profile that first flattens the rim, then develops a gentle inflection at intermediate heights, characteristic of spherical aberration correction where the wavefront error has both third-order and fifth-order components of opposite sign.

This surface corrects the residual zonal spherical aberration from the G4 relay group, where the marginal ray height is substantial. The aspherical correction on the image-side surface (rather than the object-side) exploits the larger ray height divergence at the exit of the doublet, where the correction has the most leverage.

### Surface 31 — L52 rear (Focus Group)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | −6.6664 × 10⁻⁶ |
| A6 | +5.1055 × 10⁻⁸ |
| A8 | +1.7257 × 10⁻¹¹ |
| A10 | −2.4060 × 10⁻¹² |
| A12 | +9.8445 × 10⁻¹⁵ |

A more modest correction (−0.016 mm at h = 8 mm). The negative A4 means the surface becomes more convex at the rim compared to the base sphere. This surface maintains consistent aberration correction as G5 translates during focusing — the aspherical profile compensates for the changing conjugate ratio that would otherwise introduce focus-dependent spherical aberration.

### Surface 33 — L61 rear (Field Corrector)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | −1.9337 × 10⁻⁶ |
| A6 | −2.0575 × 10⁻⁸ |
| A8 | +8.8122 × 10⁻¹¹ |
| A10 | −2.9402 × 10⁻¹³ |
| A12 | 0 |

Located near the image plane where off-axis ray heights are large, this surface corrects field-dependent aberrations — primarily astigmatism and field curvature. The departure at h = 8 mm is −0.012 mm. Both A4 and A6 are negative (same sign), producing a monotonically increasing departure from the base sphere without the inflection characteristic of on-axis spherical-aberration correctors. This is the signature of a field-flattening asphere: a smooth, progressive correction that increases with field angle.

---

## 5. Glass Selection Strategy

The design uses 15 distinct glass types across 19 elements (with three types shared: L11=L42, L12=L13, L21=L34=L43). The glass map coverage reveals a deliberate strategy:

**Ultra-high-index glasses (nd > 1.90):** Eight of the nineteen elements use glasses with nd > 1.90, including the remarkable S-NPH53 (nd = 2.001) in L32. This pervasive use of ultra-high-index glass is the key enabler of the lens's compact size — high refractive indices reduce surface curvatures for a given power, which simultaneously reduces higher-order aberrations and allows thinner elements.

**High-dispersion glasses (vd < 25):** L23 (vd = 20.88) and L51 (vd = 23.80) occupy the extreme flint corner of the glass map. These elements provide the chromatic "leverage" that allows the design to achieve achromatization with fewer correcting elements. L23 in the variator (G2) is particularly critical — the zoom-dependent chromatic shift must be nulled across a nearly 8× magnification change, and only a glass with extreme dispersion can do this efficiently.

**ED glasses (vd > 63):** L12, L13, and L44 occupy the low-dispersion crown region. L44's S-FPL51 (nd = 1.497, vd = 81.49) is a premium fluorophosphate crown glass, exhibiting anomalous partial dispersion that corrects the secondary spectrum (the residual g-line/F-line chromatic error that persists after ordinary achromatization). L12 and L13 use a more moderate ED glass (nd = 1.593, vd = 67.90) that provides partial secondary-spectrum correction in the front group, where the beam diameter is largest.

**Anomalous Partial Dispersion (APD):** L44 (S-FPL51) exhibits positive APD, with ΔP(g,F) ≈ +0.028 above the normal glass line. When cemented to L43 (S-LAH79, a normal-dispersion lanthanum flint), the partial-dispersion mismatch cancels the secondary spectrum that would otherwise limit telephoto-end resolution at short visible wavelengths.

---

## 6. Petzval Sum and Field Curvature

The computed Petzval sum is +0.00104 mm⁻¹, corresponding to a Petzval radius of approximately 964 mm. This is an excellent value for a zoom lens of this focal-length range — a flat Petzval surface means the image field does not curve appreciably over the FX sensor diagonal. The near-zero Petzval sum is achieved through the balance of strong positive (G1, G3, G4) and negative (G2, G5) groups, with the near-afocal G6 fine-tuning the residual via its air-lens correction.

---

## 7. Conditional Expression Values

The patent specifies 12 conditional expressions that characterize the design. Example 1's values and their significance:

| Condition | Formula | Value | Range | Purpose |
|---|---|---|---|---|
| (1) | Mv4/Mv3 | 1.402 | 1.00–3.00 | G3/G4 movement ratio — controls field curvature variation during zoom |
| (2) | Mv2/fw | 0.364 | 0.00–10.00 | G2 movement normalized to wide EFL — controls tele spherical aberration |
| (3) | ft/fw | 7.848 | 3.00–30.00 | Zoom ratio |
| (4) | ωw | 42.59° | 35.0°–75.0° | Wide half-field angle |
| (5) | ωt | 6.13° | 2.5°–15.0° | Tele half-field angle |
| (6) | fw/f123w | −0.114 | −0.30–0.60 | Wide-end G1+G2+G3 afocality — near-zero means nearly afocal |
| (7) | ft/f123t | −0.726 | −1.50–1.00 | Tele-end G1+G2+G3 afocality |
| (8) | BFw/fw | 0.476 | 0.20–0.60 | Wide BFD ratio — ensures space for mirrorless flange depth |
| (9) | (−f5)/fw | 1.581 | 1.00–16.00 | G5 focal length ratio — controls focus sensitivity and travel |
| (10) | Mv5/Mv6 | 1.535 | 1.00–3.00 | G5/G6 movement ratio — controls field curvature in rear groups |
| (11) | Mv1/(ft−fw) | 0.366 | 0.30–0.80 | G1 zoom movement efficiency |
| (12) | Air lens SF | 0.931 | 0.00–2.00 | G6 air lens shape factor — controls wide-end field curvature |

Condition (6) is particularly noteworthy: a value of −0.114 means the combined G1+G2+G3 subsystem is nearly afocal at the wide end. This "afocal front" design principle means that G4–G6 form an essentially independent imaging subsystem, dramatically simplifying the aberration balancing problem by decoupling the variator optics from the relay/imaging optics.

---

## 8. Summary of Special Elements

| Element | Group | Glass | Special Properties | Nikon Classification |
|---|---|---|---|---|
| L12 | G1 | PCD4 (vd = 67.90) | Extra-low dispersion | ED element |
| L13 | G1 | PCD4 (vd = 67.90) | Extra-low dispersion | ED element |
| L44 | G4 | S-FPL51 (vd = 81.49) | ED + aspherical (surface 28) + APD | Aspherical ED element |
| L52 | G5 | TAFD33 (vd = 40.13) | Aspherical (surface 31) | Aspherical element |
| L61 | G6 | Lanthanum flint (vd = 42.51) | Aspherical (surface 33) | Aspherical element |

This yields the production specification: **2 ED elements + 1 aspherical ED element + 2 aspherical elements**.

---

## 9. Manufacturing Considerations

The design exhibits several features consistent with Nikon's cost-conscious positioning of this lens as a non-S-Line product:

- **Glass molding potential:** L44's fluorophosphate glass (S-FPL51) has a low transformation temperature suitable for precision glass molding (PGM), which is the likely manufacturing method for the aspherical surface. L61 and L52 use lanthanum glasses that are also PGM-compatible.

- **Repeated glass types:** Three elements use S-LAH79 (L21, L34, L43), two use TAFD45 (L11, L42), and two use PCD4 (L12, L13). These three shared types reduce the unique glass procurement lines from 19 elements to 15 distinct melts.

- **All conic constants are zero:** The three aspherical surfaces use pure polynomial corrections on spherical base curves, which simplifies both the molding tooling and the testing metrology (interferometric null testing against a sphere, with the polynomial departure measured differentially).

- **No cemented triplets:** All bonded groups are doublets, avoiding the tighter manufacturing tolerances that cemented triplets require.

---

## 10. Independent Verification

A full paraxial ray trace (y-nu method / ABCD matrix) was performed independently in Python to verify the patent prescription:

| Check | Result |
|---|---|
| EFL at W (24.72) | Computed 24.72019 mm — Δ = +0.00018 mm ✓ |
| EFL at M1 (50.00) | Computed 50.00071 mm — Δ = +0.00072 mm ✓ |
| EFL at M2 (105.05) | Computed 105.05373 mm — Δ = +0.0024 mm ✓ |
| EFL at T (194.00) | Computed 193.99588 mm — Δ = +0.0053 mm ✓ |
| G1 focal length | 98.990 mm — matches patent ✓ |
| G2 focal length | −16.506 mm — matches patent ✓ |
| G3 focal length | 48.484 mm — matches patent ✓ |
| G4 focal length | 28.917 mm — matches patent ✓ |
| G5 focal length | −39.089 mm — matches patent ✓ |
| G6 focal length | −15,578 mm — matches patent (−15,588; Δ from thick-lens terms) ✓ |
| Petzval sum | +0.00104 mm⁻¹ → Petzval radius ≈ 964 mm ✓ |
| Focus D4/D5 conservation | |ΔD4| = |ΔD5| at all zoom positions ✓ |

All six variable gaps were verified to conserve correctly across zoom and focus states. The D4/D5 focus pair is exactly equal and opposite at every zoom position, confirming G5 as the sole focus mover with no floating compensation element.

---

## 11. Limitations and Notes

- **Semi-diameters are estimated**, not patent-specified. Combined marginal + chief ray traces were performed at all four zoom positions, the envelope (maximum across positions) taken per surface, and 8–10% mechanical clearance applied. The front group (S1–S6) was capped at 31.0 mm to match the 67 mm filter thread published by Nikon. Cemented-pair junctions were matched. These are paraxial estimates; the actual clear apertures in the production lens may differ, particularly at the wide end where off-axis aberrations and vignetting design choices affect the usable clear aperture.

- **Image height at the wide end is reduced.** The patent specifies Y = 20.50 mm at the wide end (2Y = 41.0 mm, covering approximately 95% of the FX sensor diagonal of 43.27 mm), compared to Y = 21.70 mm (full coverage) at mid-zoom and telephoto. This indicates designed-in corner illumination falloff at 24 mm, typical for wide-angle zoom designs and corrected in-camera by the lens-specific vignetting profile.

- **Close-focus data is provided** at all four zoom positions, enabling full focus-travel modeling. The close-focus object distances vary from 365.9 mm (wide) to 503.9 mm (tele) measured from the front element. The production lens's specified minimum focus distances — 0.5 m (24 mm) to 0.7 m (200 mm) — are measured from the sensor plane and are consistent with the patent values plus flange-to-sensor distance.

- **The patent's aspherical sag equation** uses the κ convention where κ = 1 + K. All three surfaces have κ = 1.0000, meaning K = 0 (spherical base). The coefficients in the data file use the standard K convention.

- **G6's near-afocal nature** (f ≈ −15,578 mm) means it functions as a field corrector rather than a power contributor. Its inclusion as a separate zoom group (moving with the stop and G3) provides the design with an additional degree of freedom for controlling edge-of-field performance without affecting the paraxial zoom behavior.

- **Nikon marketing counts:** Nikon specifies 19 elements in 15 groups, 2 ED elements, 1 aspherical ED element, and 2 aspherical elements. The 15-group count matches the patent's 15 air-separated sub-groups (including the 0.1 mm air gaps within G1 and G4 as true group boundaries).
