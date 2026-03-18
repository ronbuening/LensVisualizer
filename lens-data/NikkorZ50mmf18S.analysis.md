# Optical Design Analysis: Nikon NIKKOR Z 50mm f/1.8 S

## Patent Reference and Design Identification

This analysis is based on **Example 9 (第9実施例)** of Japanese patent publication **JP WO2019/220618 A1**, filed by Nikon Corporation on May 18, 2018 (PCT/JP2018/019269), with inventors Saburo Masugi and Tomoyuki Koshima. The patent covers an optical system, optical apparatus, and method of manufacturing the optical system, classified under IPC G02B 13/00 and G02B 13/18.

Example 9 corresponds to the production NIKKOR Z 50mm f/1.8 S based on the following confirmation criteria:

- **Element/group count**: 12 elements in 9 air-separated groups, matching Nikon's published specification exactly.
- **Special elements**: 2 aspherical elements and 2 ED (Extra-low Dispersion) elements, again matching the published specification.
- **Minimum focus distance**: The patent's close-focus object distance computes to exactly 400.0 mm, identical to the production lens's published 0.4 m minimum focus distance.
- **Focal length and aperture**: f = 51.60 mm at f/1.85, consistent with the marketed 50 mm f/1.8 (nominal values are routinely rounded for marketing purposes).
- **Field of view**: 2ω = 45.8°, consistent with Nikon's published specification.

The optical system designated as LS(9) in the patent comprises three functional lens groups arranged from the object side: a first lens group G1 with positive refractive power, a second lens group G2 with positive refractive power (the focusing group), and a third lens group G3 with negative refractive power.

---

## System-Level Specifications

| Parameter | Value |
|-----------|-------|
| Focal length (f) | 51.60 mm |
| F-number (FNO) | 1.85 |
| Half angle of view (ω) | 22.9° |
| Full angle of view (2ω) | 45.8° |
| Image height (Y) | 21.70 mm (full-frame 43.4 mm diagonal) |
| Total length (TL) | 92.330 mm |
| Back focus, air equivalent (BFa) | 12.554 mm |
| Total length, air equivalent (TLa) | 91.784 mm |

The 16 mm Z-mount flange distance and 55 mm inner diameter afforded the designers significant freedom compared to F-mount constraints, particularly in allowing larger rear elements and a short back focus — enabling the negative-power rear group that is central to this design's aberration correction strategy.

---

## Lens Group Architecture

### First Lens Group (G1) — Positive Power, Fixed

**Focal length**: 73.63 mm
**Role**: Primary light-gathering and initial aberration correction. G1 is fixed during focusing.

G1 consists of six elements arranged from the object side:

1. **L11 + L12 — Cemented Doublet** (Surfaces 1–3)
   - L11: Biconcave negative meniscus (nd = 1.67270, νd = 32.2)
   - L12: Positive meniscus, convex toward object (nd = 1.94595, νd = 18.0)

   This front cemented doublet serves as an **aberration pre-corrector**. The leading negative element, placed at the very front of the system, is unusual for a lens of this type — most traditional double-Gauss derivatives begin with a positive element. The patent (paragraph 0054) specifically notes that placing a negative lens at the front of G1 enables effective coma correction. L12 uses an ultra-high-index, ultra-low-dispersion short flint glass (nd = 1.94595, the highest refractive index in the system), which provides strong chromatic correction in a compact cemented pair. The large index difference between L11 and L12 at the cemented interface creates a powerfully correcting buried surface.

2. **L13 — Positive Meniscus** (Surfaces 4–5)
   - Concave toward object (nd = 1.72916, νd = 54.6)

   A lanthanum crown glass element that provides positive power and continues the light convergence initiated by the cemented pair. Its meniscus shape helps control the angle of incidence on subsequent surfaces, reducing higher-order spherical aberration.

3. **L14 — Composite Aspherical Element** (Surfaces 6–8)
   - Thin aspherical layer on object side (nd = 1.56093, νd = 36.6, thickness = 0.100 mm) — likely UV-curing resin; see discussion below
   - Lanthanum dense flint glass body, meniscus convex toward object (nd = 1.80400, νd = 46.6)

   This is the **first of two aspherical elements** in the system. The patent prescription data shows two consecutive surfaces with distinct optical materials forming this element: a 0.100 mm layer of nd = 1.56093, νd = 36.6 on the aspherical object side, followed by a 5.622 mm glass body of nd = 1.80400, νd = 46.6. The patent text itself (paragraph 0125) states only that the object-side surface is aspherical and does not specify the manufacturing method. However, the prescription data strongly suggests a **composite (hybrid) aspherical construction** — a thin layer of UV-curing optical resin molded to an aspherical profile on the surface of a conventional glass substrate — based on three observations: (1) the 0.100 mm thickness is far too thin to be a self-supporting glass element; (2) the material nd = 1.56093, νd = 36.6 does not match any catalogued optical glass from the major suppliers (Ohara, Schott, Hoya, CDGM), but falls squarely within the typical range of UV-curing optical resins (nd ≈ 1.50–1.57, νd ≈ 33–42); and (3) this identical material appears across numerous examples in the patent, always as an extremely thin layer on aspherical surfaces, consistent with a single proprietary resin formulation used as a standard manufacturing process. This identification, while inferential, represents the standard interpretation any optical engineer would give this prescription pattern and is consistent with Nikon's documented use of "compound-type aspherical lens elements" elsewhere in their product lines.

   The aspherical surface primarily targets **spherical aberration and coma** at wide apertures, operating on the converging marginal ray bundle before the aperture stop. The aspherical coefficients for surface 6 are (note: κ = 1 denotes a spherical base in this patent's convention; see equation discussion in the Aspherical Surface Analysis section):

   - κ = 1.00000 (sphere)
   - A4 = −4.74106 × 10⁻⁷
   - A6 = −3.40824 × 10⁻¹⁰
   - A8 = 2.15394 × 10⁻¹²
   - A10 = −1.54492 × 10⁻¹⁵

   The negative A4 coefficient indicates that the surface becomes less curved (flatter) toward the periphery compared to its base sphere, which is the classic correction profile for reducing positive spherical aberration in a converging beam.

4. **L15 + L16 — Cemented Doublet** (Surfaces 9–11)
   - L15: Biconvex positive (nd = 1.59319, νd = 67.9) — **ED glass**
   - L16: Biconcave negative (nd = 1.64769, νd = 33.7)

   This is the inner cemented doublet positioned immediately before the aperture stop, playing a critical role in **axial chromatic aberration correction**. L15 uses an ED (Extra-low Dispersion) glass — likely Ohara S-FPM2 or Hoya FCD1 class — characterized by anomalous partial dispersion. When paired with L16's dense flint glass (high dispersion, νd = 33.7), the doublet achieves chromatic correction superior to what normal crown-flint pairs can provide. The anomalous partial dispersion of the ED glass means it corrects not just primary chromatic aberration (at two wavelengths) but also secondary spectrum, reducing the residual color fringing that limits resolution in conventional designs.

**Aperture Stop (S)** — Located at Surface 12, between G1 and G2. The patent (paragraph 0026) notes that placing the stop on the image side of G1 enables good correction of coma and astigmatism at close focus distances.

### Second Lens Group (G2) — Positive Power, Focusing Group

**Focal length**: 48.76 mm
**Role**: Internal focusing group. Moves 7.911 mm toward the object when focusing from infinity to closest distance.

G2 consists of three elements:

5. **L21 — Biconcave Negative Lens** (Surfaces 14–15)
   - nd = 1.64769, νd = 33.7

   This is a diverging element placed at the front of the focusing group. The patent (paragraph 0024) emphasizes that placing a negative lens at the object-most position of G2 is desirable for correcting field curvature. As the focusing group moves, the ray geometry through this element changes, and its negative power helps maintain a flat field across the image plane at varying focus distances. Surface 13 is a virtual (dummy) surface with zero thickness used as a reference plane in the optical design data.

6. **L22 — Biconvex Positive Lens, Double Aspherical** (Surfaces 16–17)
   - nd = 1.77377, νd = 47.2

   This is the **second aspherical element** and the most optically sophisticated single element in the system. Both surfaces are aspherical, making it a double-asphere — a particularly expensive element to manufacture, requiring precise alignment of both aspherical profiles to a common optical axis.

   **Surface 16 (object side) aspherical coefficients:**
   - κ = 1.00000
   - A4 = −1.95205 × 10⁻⁷
   - A6 = 1.94342 × 10⁻⁸
   - A8 = −8.61846 × 10⁻¹¹
   - A10 = −2.07763 × 10⁻¹³

   **Surface 17 (image side) aspherical coefficients:**
   - κ = 1.00000
   - A4 = 1.47643 × 10⁻⁵
   - A6 = 2.08671 × 10⁻⁸
   - A8 = 8.44852 × 10⁻¹¹
   - A10 = −6.93210 × 10⁻¹³

   The image-side surface (17) carries significantly larger aspherical departure than the object side (A4 is roughly 75× larger), meaning it does the heavy lifting of the aspherical correction. This element, sitting within the focusing group, primarily corrects **spherical aberration, coma, and their variation during focusing**. Placing the asphere in the moving group is a deliberate design choice: as the group shifts, the aspherical correction tracks with the changing ray geometry, maintaining image quality across the focus range. The high-index lanthanum glass (nd = 1.77377) enables strong optical power in a thin element, reducing the group's mass and thereby the load on the stepping motor (STM) autofocus actuator.

7. **L23 — Positive Meniscus, Concave Toward Object** (Surfaces 18–19)
   - nd = 1.49782, νd = 82.6 — **Super ED glass**

   This is the second ED element and uses an anomalous-partial-dispersion fluorophosphate glass matching the Ohara S-FPL53 or Hoya FCD100 specification. With νd = 82.6, this is one of the lowest-dispersion optical glasses commercially available. Its placement within the focusing group means it provides **in-situ chromatic correction that tracks with focus position**, preventing longitudinal chromatic aberration (LoCA) from degrading as the lens focuses closer. This is a 6.400 mm thick element — the thickest in G2 — which provides substantial positive power to maintain the group's overall converging function while keeping dispersion minimal.

   Together, the three G2 elements form a modified triplet: negative-positive-positive. The negative leading element controls field curvature; the double-aspherical middle element handles monochromatic aberrations; and the trailing ED element suppresses chromatic errors. This combination allows the focusing group to maintain high optical performance from infinity to close focus while remaining compact and lightweight enough for responsive autofocus.

### Focusing Mechanics

| Parameter | Infinity | Close Focus (β = −0.1565) |
|-----------|----------|---------------------------|
| Object distance (D0) | ∞ | 307.67 mm |
| Stop-to-G2 gap (D12) | 10.320 mm | 2.409 mm |
| G2-to-G3 gap (D19) | 6.356 mm | 14.267 mm |
| Total focus travel | — | 7.911 mm |
| Overall object distance | ∞ | 400.0 mm (0.40 m) |

During focusing from infinity to close range, G2 moves 7.911 mm toward the object along the optical axis. The gap between the aperture stop and G2 contracts from 10.320 mm to 2.409 mm, while the gap between G2 and G3 expands correspondingly. G1 and G3 remain fixed. This inner-focus architecture eliminates any change in the lens's physical length and prevents the front element from rotating — both important for filter use and weather sealing.

### Third Lens Group (G3) — Negative Power, Fixed

**Focal length**: −81.76 mm
**Role**: Field flattening, final aberration correction, and telecentricity control.

G3 consists of three elements:

8. **L31 + L32 — Cemented Doublet** (Surfaces 20–22)
   - L31: Positive meniscus, concave toward object (nd = 1.94595, νd = 18.0)
   - L32: Negative meniscus, concave toward object (nd = 1.64769, νd = 33.7)

   This cemented pair uses the same ultra-high-index short flint glass (nd = 1.94595) seen in L12, now functioning in a different context. L31's positive power combined with L32's negative power creates a net weakly-negative doublet that performs **lateral chromatic aberration correction** and contributes to field flattening. The cemented interface between two relatively high-dispersion glasses with different partial dispersions provides a buried surface for fine-tuning color correction independent of monochromatic power. The patent (paragraph 0025) confirms that having both positive and negative elements in G3 enables good correction of chromatic aberration and other residual aberrations.

9. **L33 — Plano-Concave Negative Lens** (Surfaces 23–24)
   - Concave toward object, flat on the image side (nd = 1.64769, νd = 33.7)

   The final optical element is a simple plano-concave diverging lens. Its flat rear surface (R = ∞) simplifies manufacturing and mounting. This element acts as a **field flattener**, counteracting the natural Petzval curvature of the positive-power system. The negative rear group is a hallmark of modern mirrorless lens design made possible by the short flange distance — with F-mount SLR lenses, the mirror box precluded placing negative elements this close to the image plane. The close proximity to the sensor means L33 operates on nearly-focused ray bundles, allowing it to flatten the field without introducing significant new aberrations.

**Optical Filter (FL)** — Surfaces 25–26, a 1.600 mm thick plate of nd = 1.51680, νd = 64.1 (standard BK7-equivalent glass). This represents the exchangeable optical filter described in the patent — in the production lens, this corresponds to the combined thickness of the camera's IR-cut filter and sensor cover glass.

---

## Aspherical Surface Analysis

The lens contains three aspherical surfaces distributed across two elements:

| Surface | Element | Location | A4 Magnitude | Primary Correction Role |
|---------|---------|----------|-------------|------------------------|
| 6 | L14 (probable composite) | G1, before stop | 4.74 × 10⁻⁷ | Spherical aberration, coma |
| 16 | L22 (object side) | G2, focusing group | 1.95 × 10⁻⁷ | Fine spherical, focus tracking |
| 17 | L22 (image side) | G2, focusing group | 1.48 × 10⁻⁵ | Primary spherical, coma, focus tracking |

Surface 17 carries by far the largest aspherical departure (its A4 coefficient is roughly 30× and 75× larger than surfaces 6 and 16, respectively). This makes it the primary aspherical corrector in the system. Its placement on the image side of L22 within the focusing group is strategically important: as G2 translates during focusing, the aspherical correction automatically adapts to the changing ray geometry.

The aspherical surface equation used in the patent is the even polynomial form (paragraph 0061):

X(y) = (C·y²) / [1 + √(1 − κ·C²·y²)] + A₄y⁴ + A₆y⁶ + A₈y⁸ + A₁₀y¹⁰

where X(y) is the sag at height y from the axis, C = 1/R is the paraxial curvature, κ is the conic constant, and Aᵢ are the aspherical coefficients. **Convention note:** This patent uses the convention where κ appears directly under the radical (not as 1+κ). In this convention, κ = 1 denotes a spherical base surface and κ = 0 a paraboloid. All three aspherical surfaces in Example 9 have κ = 1.00000 — meaning they are polynomial departures from a spherical base. This differs from the Zemax/ISO convention where K = 0 is a sphere; the conversion is K_Zemax = κ_patent − 1.

---

## Glass Selection and Chromatic Correction Strategy

The design employs 8 distinct glass types across 12 elements (several types are reused). The chromatic correction strategy is layered across all three groups:

### ED Glass Pair

The two ED elements work in concert despite being in different groups:

- **L15** (G1, nd = 1.59319, νd = 67.9): A moderate-ED glass with anomalous partial dispersion, likely in the Ohara S-FPM2 / Hoya FCD1 family. Located in G1's inner cemented doublet before the stop, it corrects axial chromatic aberration for the primary convergence of the entrance pupil.

- **L23** (G2, nd = 1.49782, νd = 82.6): A super-ED fluorophosphate glass, likely Ohara S-FPL53 or Hoya FCD100. This is among the most effective anomalous-dispersion glasses available. Its position within the focusing group means it provides chromatic correction that tracks with focus, preventing LoCA from degrading at close distances.

### Ultra-High-Index Elements (nd = 1.94595)

Two elements use this extreme refractive index (L12 in G1 and L31 in G3). This glass — likely Ohara S-NPH2 — has a very low Abbe number (νd = 18.0) meaning high dispersion, but its extremely high refractive index allows strong optical power from gentle surface curvatures. In cemented doublets, it enables large index differences at buried surfaces, which is the mechanism for chromatic correction at those interfaces. The symmetric placement of these elements near the front and rear of the system contributes to overall chromatic balance.

### Dense Flint Group (nd = 1.64769, νd = 33.7)

This glass type appears in four elements: L16, L21, L32, and L33. Its moderate-high dispersion makes it useful as the negative-power partner in achromatic combinations. The repeated use of a single glass type also simplifies procurement and reduces manufacturing cost.

### Complete Glass Map

| Element | nd | νd | Glass Class | Optical Role |
|---------|-----|-----|-------------|-------------|
| L11 | 1.67270 | 32.2 | Dense flint (S-TIH6 class) | Front negative corrector |
| L12 | 1.94595 | 18.0 | Ultra-high-index short flint (S-NPH2) | Chromatic correction, high-power cemented surface |
| L13 | 1.72916 | 54.6 | Lanthanum crown (S-LAL18 class) | Positive convergence |
| L14 layer | 1.56093 | 36.6 | Probable UV-curing optical resin (inferred) | Aspherical layer on glass substrate |
| L14 glass | 1.80400 | 46.6 | Lanthanum dense flint (S-LAH65V class) | Aspherical convergence element |
| L15 | 1.59319 | 67.9 | ED glass (S-FPM2 / FCD1 class) | Primary chromatic correction |
| L16 | 1.64769 | 33.7 | Dense flint (S-TIH14 class) | Achromatizing partner to L15 |
| L21 | 1.64769 | 33.7 | Dense flint (S-TIH14 class) | Field curvature control in focus group |
| L22 | 1.77377 | 47.2 | Lanthanum dense flint (S-LAH60 class) | Double-aspherical corrector |
| L23 | 1.49782 | 82.6 | Super ED glass (S-FPL53 / FCD100) | Focus-tracking chromatic correction |
| L31 | 1.94595 | 18.0 | Ultra-high-index short flint (S-NPH2) | Rear chromatic balance |
| L32 | 1.64769 | 33.7 | Dense flint (S-TIH14 class) | Lateral color correction |
| L33 | 1.64769 | 33.7 | Dense flint (S-TIH14 class) | Field flattener |

---

## Conditional Expression Compliance

The patent defines ten conditional expressions that constrain the design space. Example 9 satisfies all of them, and the values below have been independently recalculated and verified against the patent's stated values:

| Expression | Formula | Computed Value | Patent Value | Range |
|------------|---------|---------------|--------------|-------|
| (1) | FNO × (f1/f) | 2.640 | 2.645 | 0.50–5.50 |
| (2) | TLa / f | 1.779 | 1.779 | 0.50–5.00 |
| (3) | f2 / (−f3) | 0.596 | 0.596 | 0.20–1.20 |
| (4) | f / f2 | 1.058 | 1.058 | 0.010–5.000 |
| (5) | f1 / f2 | 1.510 | 1.510 | 0.010–5.000 |
| (6) | BFa / f | 0.243 | 0.243 | 0.100–0.500 |
| (7) | fF / fR | 0.748 | 0.748 | 0.10–3.00 |
| (8) | TLa / (−f3) | 1.123 | 1.123 | 0.30–4.00 |
| (9) | TLa / f1 | 1.247 | 1.247 | 0.50–4.00 |
| (10) | 2ω | 45.8° | 45.8° | 15.0°–85.0° |

The slight discrepancy in condition (1) (2.640 computed vs. 2.645 stated) is attributable to intermediate rounding in the patent's group focal length values, which are given to only two decimal places.

**Interpretation of key conditions:**

- **Condition (1)** effectively constrains the F-number contribution of G1 alone. At 2.645, G1 operates at roughly f/2.6 — fast enough to require careful coma correction (hence the front negative element and aspherical L14) but not so fast as to demand extreme glass curvatures.

- **Condition (3)** at 0.596 represents the balance between G2 and G3 power. Values in the range of 0.5–0.7 indicate that G2's focusing power is well-matched to G3's field-flattening power, minimizing aberration variation during focusing (paragraph 0021–0023).

- **Condition (6)** at 0.243 means the back focus is roughly a quarter of the focal length — short enough to exploit the Z-mount's close flange distance, but long enough to accommodate the sensor stack and filter.

---

## Design Philosophy and Context

The NIKKOR Z 50mm f/1.8 S represents a fundamental departure from the double-Gauss designs that dominated Nikon's 50mm lens lineup for over 50 years. Where the classic AI Nikkor 50mm f/1.8 achieved its performance with 6 elements in 4 groups and no special glass, this Z-mount successor uses twice as many elements with ED glass and aspherical surfaces.

The positive-positive-negative (G1-G2-G3) group structure with inner focusing through G2 is an architecture well-suited to mirrorless systems. The fixed negative rear group acts as a permanent field flattener sitting close to the sensor — a position that was physically impossible in SLR designs due to the mirror box. This architectural freedom is the primary reason mirrorless 50mm lenses have achieved performance levels that were previously the exclusive domain of exotic designs like the Zeiss Otus.

The inner-focus design also means the lens maintains a constant physical length and the front element does not rotate, facilitating the weather-sealed construction that earned the lens its S-Line designation. The lightweight focusing group (three elements, one made of low-density ED glass) is readily driven by the stepping motor for quiet, fast autofocus suited to both stills and video.

---

## References

1. JP WO2019/220618 A1. "Optical System, Optical Apparatus, and Method for Manufacturing Optical System." Nikon Corporation. Filed 2018-05-18, Published 2019-11-21.
2. JP 2012-234169 A. Referenced as prior art (inner-focus single focal length optical system).
3. Nikon Corporation. "NIKKOR Z 50mm f/1.8 S" product specifications. Nikon Imaging.
