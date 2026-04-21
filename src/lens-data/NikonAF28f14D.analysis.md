# Nikon AF Nikkor 28mm f/1.4D — Patent Analysis

**Patent:** US 5,315,441 · *Inverse Telephoto Large Aperture Wide Angle Lens*
**Inventors:** Kenji Hori, Wataru Tatsuno (Nikon Corporation)
**Priority:** January 16, 1992 (JP 4-005862)
**Filed (US):** September 13, 1993 · **Granted:** May 24, 1994
**Production embodiment:** Embodiment 1 (Table 1)

---

## 1. Production Identification

The patent contains two numerical examples. Embodiment 1 is identified as the production design basis through convergent criteria:

| Parameter | Embodiment 1 | Embodiment 2 | Production (Nikon spec) |
| :--- | :---: | :---: | :---: |
| Focal length | 28.62 mm | 28.80 mm | 28 mm |
| F-number | 1.41 | 1.41 | 1.4 |
| Angle of view (2ω) | 75.37° | 74.79° | 75.4° |
| Close-focus magnification | β = −1/10 | β = −1/10 | 1:8.3 (β ≈ −0.12) |
| Element / group count | 11 / 8 | 12 / 8 | 11 / 8 |
| Aspherical surfaces | 1 (S16) | 1 (S17) | 1 (ground glass) |

The decisive discriminators are the angle of view and element count. The production lens at 75.4° matches Embodiment 1 (75.37°, Δ = 0.03°) far more closely than Embodiment 2 (74.79°, Δ = 0.61°). Additionally, Embodiment 2 has 12 elements in 8 groups (L25 is realized as a cemented doublet in that variant), which does not match the production specification of 11 elements in 8 groups — only Embodiment 1 matches on this count. The computed EFL of 28.6205 mm from a paraxial ray trace of the Embodiment 1 prescription agrees with the patent-stated value of f = 28.6208 mm to four decimal places.

The production lens has a minimum focus distance of 0.35 m (from the film plane), which implies a maximum magnification somewhat higher than the patent's β = −1/10 (approximately 0.31 m object distance from the front element). The difference is consistent with the production design having slightly extended the focusing travel beyond the patent example.

---

## 2. Architecture and Design Philosophy

### 2.1 Inverse Telephoto (Retrofocus) Form

The Nikkor 28mm f/1.4D is an inverse telephoto design — a diverging front group followed by a converging rear section — which is the standard architecture for wide-angle lenses on SLR cameras that require a long back focal distance for mirror clearance. The patent describes four functional groups arranged from object to image:

- **G1** (negative) — a single negative meniscus element L11
- **G2** (positive) — four sub-groups: L21 (biconvex), L22 (negative meniscus), L4 (cemented doublet), L25 (biconvex)
- **Stop S** — between G2 and G3
- **G3** (negative) — two sub-groups: L6 (cemented doublet), L33 (positive meniscus, aspherical)
- **G4** (positive) — L8 (cemented doublet)

This produces the Nikon-specified "11 elements in 8 groups" count (8 air-separated sub-groups containing 11 physical glass elements, three of which are cemented doublets). The four functional macro-groups (G1–G4) define the focusing architecture, while the 8 sub-groups determine the optical correction degrees of freedom.

### 2.2 Nikon's "1001 Nights" Commentary

Nikon's own historical account (NIKKOR — The Thousand and One Nights, Tale No. 28, by Kouichi Ohshita) provides important context. Development began in the mid-1980s, motivated by the desire to create a "wide-angle Noct Nikkor" — a lens that would suppress sagittal coma flare at f/1.4 as the Noct-Nikkor 58mm f/1.2 had done at its aperture. The design required a precision ground-glass aspherical element, and a new grinding technique was developed concurrently with the optical design.

The first prototype was rejected by Nikon's quality assurance department: performance at close focus distances was inferior to the existing 28mm f/2. The design was restarted and entrusted to new designers. A total of four optical designers contributed before the lens reached production — an unusually large number for a single Nikon product. Volume production began circa 1993–1994, approximately ten years after development started.

Ohshita specifically highlights two design features: the strong biconvex element immediately before the diaphragm (L25 in the patent, with R₁ = 33.228 mm), and the "complicated focusing system" that evolved from the floating (CRC) mechanism used in the Nikkor 24mm f/2.8. He describes focusing as requiring the change of four air intervals to independently correct spherical aberration, coma, and astigmatism at close range.

---

## 3. Focusing Mechanism

### 3.1 Three-Group Floating Focus

The focusing system is the most innovative aspect of the design and the primary subject of the patent claims. Nikon markets this as CRC (Close Range Correction) — their term for floating-element focus systems that maintain aberration correction at short distances. Unlike conventional unit focusing (entire lens moves) or simple inner focusing (one internal group moves), this design employs a three-group floating focus with G1 fixed:

- **G1 (L11) is fixed** relative to the image plane (film/sensor).
- **G2 + Stop and G4 move together** toward the object — they are mechanically coupled.
- **G3 moves toward the object at a faster rate** than G2/G4, creating differential spacing changes.

This produces four simultaneously varying air gaps:

| Gap | Location | Infinity | Close (β = −1/10) | Change | Direction |
| :--- | :--- | ---: | ---: | ---: | :--- |
| d₂ | G1 → G2 | 13.900 mm | 10.375 mm | −3.525 mm | Decreasing |
| d₁₁ | G2 → G3 (includes stop) | 12.550 mm | 12.198 mm | −0.353 mm | Decreasing |
| d₁₆ | G3 → G4 | 0.500 mm | 0.853 mm | +0.353 mm | Increasing |
| BFD | G4 → Image | 38.103 mm | 41.628 mm | +3.525 mm | Increasing |

### 3.2 Movement Ratios (Verified)

The patent defines two key conditions governing the focus movement ratios:

**Condition (1): Δd₂ = Δd₄** — The second and fourth groups move by the same amount (3.5248 mm). This simplifies the lens barrel construction, since G2 and G4 can be carried on a single mechanical cam track.

**Condition (2): 0 < Δd₃/Δd₂ < 1.3** — The third group moves 10% more than G2/G4 (ratio = 1.100). This differential creates the gap changes between G2–G3 and G3–G4 that provide the aberration correction.

These values were independently verified by computation from the variable-gap data:

```
Δd₂ = 13.9000 − 10.3752 = 3.5248 mm  (G2 movement)
Δd₃ = Δd₂ + (d₁₁_inf − d₁₁_close) = 3.5248 + 0.3525 = 3.8773 mm  (G3 movement)
Δd₄ = Δd₃ − (d₁₆_close − d₁₆_inf) = 3.8773 − 0.3525 = 3.5248 mm  (G4 movement)
Δd₃/Δd₂ = 3.8773 / 3.5248 = 1.100 ✓
BFD_close = BFD_inf + Δd₄ = 38.1031 + 3.5248 = 41.6279 mm ✓
```

### 3.3 Aberration-Correction Logic

The patent text provides the physical reasoning behind this floating scheme:

The decrease in the G2–G3 spacing deviates spherical aberration positive and astigmatism negative. The increase in the G3–G4 spacing deviates spherical aberration negative and astigmatism negative. The spherical aberration changes cancel (positive + negative), while the astigmatism changes reinforce (negative + negative). This allows the designer to correct the close-focus astigmatism — which is characteristically over-corrected in conventional retrofocus focusing — without disturbing the spherical aberration balance.

### 3.4 Patent Condition Values (Embodiment 1)

| Condition | Expression | Range | Value | Status |
| :--- | :--- | :--- | ---: | :--- |
| (1) | Δd₂ = Δd₄ | — | 3.5248 = 3.5248 | Satisfied |
| (2) | Δd₃/Δd₂ | 0 – 1.3 | 1.100 | Satisfied |
| (3) | f₁/f | −4 to −2 | −2.783 | Satisfied |
| (4) | f₃/f | −3 to −1.2 | −1.906 | Satisfied |
| (5) | D₁₂/f | 0.35 – 0.65 | 0.485 | Satisfied |
| (6) | D₂₃/f | 0.35 – 0.5 | 0.438 | Satisfied |

Conditions (3) and (4) constrain the diverging powers of G1 and G3. The G1 power (f₁ = −79.66 mm) provides the retrofocus offset needed for the 38 mm back focus, while G3 (f₃ = −54.56 mm) provides a controlled negative correction zone for spherical aberration. Conditions (5) and (6) constrain the large air gaps that provide the physical space needed for the floating focus travel.

---

## 4. Group Focal Lengths

The following group focal lengths were computed from the Embodiment 1 prescription via paraxial ray trace (matrix method) and verified against the patent's stated condition ratios:

| Group | Elements | Focal Length | Role |
| :--- | :--- | ---: | :--- |
| G1 | L11 | −79.66 mm | Diverging front group; retrofocus offset |
| G2 | L21 + L22 + L4 + L25 | +44.98 mm | Main converging group |
| G3 | L6 + L33 | −54.56 mm | Negative correction group (spherical, coma) |
| G4 | L8 | +34.77 mm | Final converging group; field flattening, distortion control |

The overall system power is: f = 28.62 mm (f/1.41).

---

## 5. Element-by-Element Analysis

### 5.1 G1 — Front Diverging Group

**L11** (Surfaces 1–2): Negative meniscus, convex to object.
R₁ = +66.230 mm, R₂ = +25.126 mm, d = 2.00 mm.
nd = 1.51680, νd = 64.1 — **HOYA BSC7** (nd = 1.51680, νd = 64.20) or **Schott BK7** (nd = 1.51680, νd = 64.17); exact nd match. OHARA S-BSL7 (nd = 1.51633) is close but not exact.
f = −79.7 mm.

This is a relatively thin, strongly negative meniscus. Its role is to spread the incoming beam, establishing the retrofocus offset that provides the approximately 38 mm back focal distance needed for SLR mirror clearance. The choice of BK7 — a common, inexpensive, and well-characterized borosilicate crown — makes sense for this large-diameter front element, which is the most physically exposed and potentially the most costly to produce in large sizes. Its low refractive index and moderate Abbe number mean it contributes some longitudinal chromatic aberration, but G1's primary job is geometric: diverge the beam and set the field angle.

### 5.2 G2 — Main Positive Group

G2 is the most complex group, containing four air-separated sub-groups. Its collective focal length is +44.98 mm. The strong positive power here converges the divergent beam from G1 and directs it through the aperture stop.

**L21** (Surfaces 3–4): Biconvex positive.
R₁ = +89.207 mm, R₂ = −164.124 mm, d = 4.70 mm.
nd = 1.77279, νd = 49.4 — close to **OHARA S-LAM66** (nd = 1.77250, νd = 49.62); likely a Nikon-specified LaM-type lanthanum glass.
f = +75.4 mm.

L21 provides moderate positive power to begin converging the beam. The lanthanum crown glass (relatively high index, medium-high Abbe number) provides good correction per surface curvature, keeping the curvatures moderate and reducing higher-order aberrations.

**L22** (Surfaces 5–6): Negative meniscus, convex to object.
R₁ = +87.119 mm, R₂ = +23.125 mm, d = 1.50 mm.
nd = 1.48749, νd = 70.4 — **Schott FK5 / OHARA S-FSL5** (exact match).
f = −65.1 mm.

L22 is a thin negative meniscus in a low-dispersion fluorophosphate crown glass. Its role is primarily to correct longitudinal chromatic aberration and Petzval sum. The FK5-type glass has a relatively high Abbe number (low dispersion), making it effective for chromatic correction when paired with the higher-dispersion positive elements. The strong curvature of the rear surface (R₂ = 23.125 mm) creates significant negative power that counteracts the Petzval contribution from the positive elements, helping flatten the field.

**L4** (Surfaces 7–9): Cemented doublet (negative overall).

- **L23** (front): nd = 1.51860, νd = 69.9, d = 9.00 mm.
  R₁ = −49.577 mm, R₂(junction) = −15.690 mm.
  This is a thick meniscus element in a phosphate crown glass. The nd/νd pair (1.51860 / 69.9) does not correspond exactly to any current OHARA or Schott catalog type; it appears to be a 1990s-era glass that may have been discontinued or was a Nikon-specified melt. Its high Abbe number (69.9) identifies it as a low-dispersion crown.
  Individual f = +40.6 mm (positive as a standalone element).

- **L24** (rear): nd = 1.51454, νd = 54.6, d = 1.50 mm.
  R₁(junction) = −15.690 mm, R₂ = +462.539 mm.
  Negative meniscus, concave to object (the rear surface at R₂ = 462.5 mm is essentially flat). Another glass with no exact modern catalog match. The nd/νd pair (1.51454 / 54.6) places it in the crown-flint boundary region.
  Individual f = −29.5 mm (negative).

The cemented doublet L4 as a whole has f = −87.89 mm (negative). The two glasses have very similar refractive indices (Δnd = 0.004) but meaningfully different dispersions (Δνd = 15.3). This means the cemented junction surface has almost no optical power for monochromatic aberrations (the nd values nearly match), but it provides significant chromatic correction via the dispersion difference. This is a classic achromatic corrector configuration. The patent text identifies L4 as a "double-concave negative lens" in the generic design description, though the actual Embodiment 1 realization is this cemented compound meniscus.

**L25** (Surfaces 10–11): Biconvex positive (strong curvature).
R₁ = +33.228 mm, R₂ = −85.405 mm, d = 9.00 mm.
nd = 1.80411, νd = 46.5 — close to **OHARA S-LAH55** (nd = 1.80440, νd = 46.50) or **Schott N-LASF35**.
f = +30.8 mm.

L25 is the most powerful single element in the design and sits immediately before the aperture stop. Nikon's own account specifically calls attention to this "double-convex element with a large curvature." Its front radius (33.228 mm) is the smallest of any positive surface in the system, and at 9.00 mm center thickness in a very high-index lanthanum glass, it dominates the converging power of G2. The strong front curvature is essential for controlling sagittal coma flare: by refracting the marginal rays steeply before they reach the stop, L25 reduces the angular divergence of off-axis ray bundles and limits the coma-generating asymmetry that would otherwise emerge from the upstream negative elements.

### 5.3 Stop (Between G2 and G3)

The aperture stop is located in the air gap between surfaces 11 and 12 (d₁₁ = 12.55 mm at infinity). The patent prescription table does not include the stop as a separate surface row — this is common in Nikon patents of this era. The patent states that the stop moves with G2 during focusing (column 5, line 14: "the stop S is arranged to move together with the second lens group G2 which is moved less").

The entrance pupil half-diameter is H = 10.1 mm (from the patent's aberration plot annotation, Fig. 2), giving an entrance pupil diameter of 20.2 mm and an effective f-number of 28.62 / 20.2 = 1.42, consistent with the stated f/1.41.

**Stop position estimate for the data file:** The stop position within the 12.55 mm gap was estimated from the Fig. 1 cross-section drawing at approximately 40% of the gap from G2, yielding a split of 5.00 mm (L25 rear to stop) and 7.55 mm (stop to L6 front). Since the stop moves with G2, only the stop-to-G3 portion is a variable gap — it changes from 7.55 mm at infinity to 7.1975 mm at close focus (decreasing by 0.3525 mm, which equals the differential movement of G3 relative to G2). The L25-to-stop portion (5.00 mm) is fixed because both move with G2.

A paraxial marginal ray traced at the entrance pupil height H = 10.1 mm arrives at the estimated stop position with a beam height of 13.6 mm, establishing the physical stop semi-diameter at 13.6 mm for the data file.

### 5.4 G3 — Negative Correction Group

G3 has a collective focal length of −54.56 mm. It provides the controlled negative power zone that is essential for correcting spherical aberration at f/1.4, and it contains the lens's single aspherical surface.

**L6** (Surfaces 12–14): Cemented doublet (negative overall).

- **L31** (front): nd = 1.74810, νd = 52.3, d = 3.60 mm.
  R₁ = −23.276 mm, R₂(junction) = −19.731 mm.
  Meniscus, concave to object (weakly positive as a standalone element).
  Close to **OHARA S-LAM7** (nd = 1.74950, νd = 52.33). Lanthanum crown glass.
  Individual f = +120.7 mm (weakly positive).

- **L32** (rear): nd = 1.75520, νd = 27.6, d = 1.00 mm.
  R₁(junction) = −19.731 mm, R₂ = −568.331 mm.
  Negative meniscus, concave to object (rear surface nearly flat at R₂ = −568 mm).
  **OHARA S-TIH4** (nd = 1.75520, νd = 27.53) — good match. Dense flint glass.
  Individual f = −27.1 mm (negative).

The L6 doublet as a whole has f = −32.17 mm (strongly negative). The combination of a lanthanum crown (L31) with a dense flint (L32) provides achromatic negative power. The nearly matched indices (Δnd = 0.007) at the cemented junction again minimize monochromatic aberrations at the interface while the large dispersion difference (Δνd = 24.7) provides chromatic correction. The negative power of L6 is positioned just past the stop to over-correct spherical aberration intentionally, which is then balanced by the aspherical correction on L33.

**L33** (Surfaces 15–16): Positive meniscus, concave to object. **One surface aspherical.**
R₁ = −122.249 mm, R₂ = −46.473 mm (base radius), d = 3.50 mm.
nd = 1.77279, νd = 49.4 — same glass as L21. Lanthanum crown.
f = +95.1 mm (weakly positive).

Surface 16 (the image-side surface of L33) is the lens's only aspherical surface. The patent describes this as a ground-glass asphere — consistent with the precision grinding technique that Nikon developed concurrently with this lens design, and which was also applied to the AF Zoom-Nikkor 20–35mm f/2.8D.

### 5.5 The Aspherical Surface (Surface 16)

The aspherical surface on L33 is defined by the following coefficients (patent notation, where C₂ᵢ corresponds to the 2i-th order term):

| Parameter | Patent Value | Data File Mapping |
| :--- | :--- | :--- |
| Base radius R | −46.473 mm | R (surface "16A") |
| Conic constant K | +1.974 | K (oblate ellipsoid) |
| C₄ (= A4) | +1.644 × 10⁻⁵ | A4 |
| C₆ (= A6) | +1.610 × 10⁻⁸ | A6 |
| C₈ (= A8) | +1.721 × 10⁻¹¹ | A8 |
| C₁₀ (= A10) | −6.229 × 10⁻¹⁴ | A10 |

The patent's aspherical sag equation uses the standard (1+K) conic convention, matching the data file specification:

```
Z(h) = (h²/R) / [1 + √(1 − (1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰
```

The conic constant K = +1.974 (oblate ellipsoid) is notably large and positive, which means the base conic already departs significantly from spherical. Combined with the higher-order terms, the departure from a best-fit sphere becomes substantial at the edge of the clear aperture:

| Height h (mm) | Spherical sag (mm) | Aspherical sag (mm) | Departure Δ (µm) |
| ---: | ---: | ---: | ---: |
| 2 | −0.043 | −0.043 | +0.2 |
| 4 | −0.172 | −0.169 | +3.6 |
| 6 | −0.389 | −0.370 | +18.8 |
| 8 | −0.694 | −0.633 | +61.1 |
| 10 | −1.089 | −0.934 | +154.5 |
| 12 | −1.576 | −1.242 | +333.7 |

At h = 12 mm the departure is approximately 334 µm — a very large asphericity by camera-lens standards, which is consistent with Nikon's description of a "high aspherical degree" that required the development of a new grinding process. The aspherical surface has less curvature (less negative sag) than the base sphere at all heights, meaning it bends marginal rays less than a spherical surface would. This is the classic correction strategy for negative spherical aberration in a fast lens: the aspherical surface reduces the refraction of rays at the edge of the aperture, pulling them back toward the paraxial focus.

The mathematical height limit where the conic discriminant reaches zero is h = |R|/√(1+K) = 46.473/√2.974 = 26.9 mm — well above the estimated semi-diameter of 18.0 mm for this surface. The data file validator enforces sd ≤ 0.98 × 26.9 = 26.4 mm for surfaces with K > 0.

### 5.6 G4 — Final Positive Group

**L8** (Surfaces 17–19): Cemented doublet (positive overall).

- **L41** (front): nd = 1.80411, νd = 46.5, d = 9.30 mm.
  R₁ = +722.991 mm (nearly flat), R₂(junction) = −21.000 mm.
  Nearly plano-convex positive element. Same glass as L25: **OHARA S-LAH55 / Schott N-LASF35 type**.
  Individual f = +25.5 mm (strong positive).

- **L42** (rear): nd = 1.86074, νd = 23.0, d = 1.50 mm.
  R₁(junction) = −21.000 mm, R₂ = −28.251 mm.
  Negative meniscus, concave to object. Very dense, very dispersive flint glass. The nd/νd pair (1.86074 / 23.0) does not match any current OHARA, Schott, or HOYA catalog type exactly; it is likely a 1990s-era specialty glass, possibly from Sumita or a Nikon-specified melt.
  Individual f = −105.1 mm (weakly negative).

The L8 doublet as a whole has f = +34.77 mm (strongly positive). As the patent text explains, constituting the final positive element (L8) as a cemented doublet allows the designer to maintain a long back focus while suppressing distortion. The strongly positive L41 (nearly plano-convex in a very high-index glass) provides the final converging power needed to form the image, while L42 (in a very dense flint) controls chromatic aberration and acts as a field-flattener. The large index difference at the cemented junction (Δnd = 0.057) provides both chromatic correction and some residual monochromatic correction, while the high-index/low-Abbe flint helps control the lateral color and distortion that are characteristic of retrofocus wide-angle designs.

**Edge thickness note:** The steeply curved junction surface (R = −21.0 mm) combined with the nearly flat front surface creates a tight edge-thickness constraint for L41. At the maximum allowable semi-diameter of 17.44 mm (computed from the edge-thickness limit), the edge thickness falls to approximately 0.4 mm. The data file uses SD = 17.0 mm for L41 surfaces, providing adequate margin.

---

## 6. Glass Summary

| Element | nd | νd | Best catalog match | Type | Confidence |
| :--- | ---: | ---: | :--- | :--- | :--- |
| L11 | 1.51680 | 64.1 | HOYA BSC7 / Schott BK7 | Borosilicate crown | Exact (nd) |
| L21 | 1.77279 | 49.4 | OHARA S-LAM66 type | Lanthanum crown | Close |
| L22 | 1.48749 | 70.4 | Schott FK5 / OHARA S-FSL5 | Fluorophosphate crown | Exact |
| L23 | 1.51860 | 69.9 | No current catalog match | Phosphate crown | Unresolved |
| L24 | 1.51454 | 54.6 | No current catalog match | Crown/light flint | Unresolved |
| L25 | 1.80411 | 46.5 | OHARA S-LAH55 / Schott LASF35 | Lanthanum dense crown | Close |
| L31 | 1.74810 | 52.3 | OHARA S-LAM7 type | Lanthanum crown | Close |
| L32 | 1.75520 | 27.6 | OHARA S-TIH4 | Dense flint | Good |
| L33 | 1.77279 | 49.4 | Same as L21 | Lanthanum crown | Close |
| L41 | 1.80411 | 46.5 | Same as L25 | Lanthanum dense crown | Close |
| L42 | 1.86074 | 23.0 | No current catalog match | Very dense flint | Unresolved |

The unresolved glasses (L23, L24, L42) likely correspond to 1990s-era OHARA, HOYA, or Sumita types that have since been discontinued or reformulated as part of the industry-wide shift to lead-free and arsenic-free glass compositions. The patent's nd/νd values are design-exact values, and the actual production glasses would have been selected from available catalog types with melt-to-melt tolerances. Two glasses are used twice (L21/L33 and L25/L41), reducing the number of distinct glass types to nine.

---

## 7. Semi-Diameter Estimation

The patent does not list semi-diameters (clear apertures). Semi-diameters for the data file were estimated via paraxial ray trace using the following methodology:

### 7.1 Ray Trace Parameters

Two rays were traced through the full system (with inserted stop) at infinity focus:

- **Marginal ray:** Launched at height H = 10.1 mm (entrance pupil semi-diameter from patent Fig. 2) with zero angle (parallel to axis).
- **Chief ray:** Launched at the half-field angle ω = 37.685° (2ω = 75.37° from patent), computed to pass through the center of the aperture stop via two-ray interpolation.

### 7.2 SD Estimation Formula

At each surface, the semi-diameter was estimated as:

```
SD_raw = |y_marginal| + 0.70 × |y_chief|
```

The 0.70 factor accounts for approximately 30% off-axis vignetting at full field, which is typical for f/1.4 wide-angle designs. This was then clamped to three hard constraints enforced by the data file validator:

1. **sd < 0.9 × |R|** — prevents extreme surface slopes at glass-air boundaries
2. **Front/rear SD ratio ≤ 1.25** — within each element, ensures consistent rendering
3. **Edge thickness > 0** — sag difference must not exceed center thickness

### 7.3 Critical Constraints

Several surfaces in this fast, wide-angle design operate near their constraint limits:

| Surface | |R| (mm) | SD (mm) | sd/|R| | Limiting factor |
| :--- | ---: | ---: | ---: | :--- |
| S2 (L11 rear) | 25.126 | 22.5 | 0.895 | Near sd/|R| limit |
| S6 (L22 rear) | 23.125 | 20.5 | 0.886 | Near sd/|R| limit |
| S8 (L4 junction) | 15.690 | 14.0 | 0.892 | Near sd/|R| limit; drives L23 front SD via ratio constraint |
| S18 (L8 junction) | 21.000 | 17.0 | 0.810 | Edge thickness of L41 limits to ~17.4 mm max |

The L4 cemented doublet is notable: the steeply curved junction surface at R = −15.690 mm constrains the physical clear aperture of the entire doublet. However, the nearly matched refractive indices at this junction (Δnd = 0.004) mean that the actual refraction at the surface is negligible despite the extreme curvature, so the sd/|R| constraint (which primarily addresses total internal reflection at glass-air boundaries) is conservative here. A similar situation exists at the L8 junction (R = −21.0 mm), where the edge-thickness constraint rather than the sd/|R| limit is the binding factor.

---

## 8. Design-Level Observations

### 8.1 The Sagittal Coma Strategy

The patent does not explicitly discuss sagittal coma correction, but Nikon's historical account identifies it as the primary design driver. The strategy is visible in the prescription:

The front group (G1, L11) has relatively low curvature for a 28mm retrofocus — the front surface radius of 66.23 mm is quite gentle compared to, for example, the Nikkor 28mm f/2 designs of the same era. By keeping G1's curvature low, the designer minimizes the amount of sagittal coma generated at the concave surfaces of the diverging group. The "missing" diverging power is supplied instead by L22 (in G2), which is placed in a region where the beam is more controlled.

Meanwhile, the strong biconvex L25 immediately before the stop acts as a "coma corrector" — its steep front surface refracts the marginal and off-axis ray bundles into a more symmetric configuration before they cross the stop plane. The aspherical L33, positioned just after the stop, provides the fine-tuning of spherical aberration and residual coma that cannot be achieved with spherical surfaces alone at f/1.4.

### 8.2 Role of Each Cemented Doublet

- **L4 (G2):** Achromatic correction doublet. Nearly matched indices (Δnd = 0.004) suppress monochromatic junction-surface aberrations; large dispersion difference (Δνd = 15.3) provides longitudinal chromatic correction for the positive G2 group.

- **L6 (G3):** Achromatic negative doublet. Similar strategy to L4 (Δnd = 0.007, Δνd = 24.7) but in a negative configuration. Controls axial and lateral chromatic aberration in the correction zone behind the stop.

- **L8 (G4):** Power/corrector doublet. The larger index difference at the junction (Δnd = 0.057) means this doublet has both chromatic and monochromatic corrective function. The strong positive power of L41 (f = 25.5 mm) combined with the weak negative L42 provides a positive, partially achromatic final group that controls distortion and field curvature while maintaining the back focus.

### 8.3 Comparison with Embodiment 2

Embodiment 2 (f = 28.8 mm, 2ω = 74.79°) has the same four-group architecture but uses slightly different glasses and curvatures. A key structural difference is that L25 in Embodiment 2 is a cemented doublet (L5a: nd = 1.79668 + L5b: nd = 1.80458) rather than a single biconvex element, bringing the total to 12 elements in 8 groups — which does not match the production specification of 11 elements. Other differences include a higher-index front element (L11: nd = 1.56384 vs 1.51680). Embodiment 2 was likely an earlier or alternative optimization that was not selected for production.

---

## 9. Production Context

The Nikon AF Nikkor 28mm f/1.4D was announced in 1993 and entered production from approximately 1994 to 2005, with roughly 7,000 units manufactured — making it one of the rarest Nikkor lenses of the autofocus era. It was succeeded in 2017 by the AF-S Nikkor 28mm f/1.4E ED, which uses a completely different design (14 elements in 11 groups, 3 aspherical surfaces, 2 ED elements, Nano Crystal Coat).

The lens was marketed as an AF-D type with mechanical screw-drive autofocus, 72mm filter thread, and 9 diaphragm blades. Its 520 g weight and all-metal construction reflected the premium build quality of Nikon's professional lens line of the 1990s.

---

## Sources

- US Patent 5,315,441, "Inverse Telephoto Large Aperture Wide Angle Lens," Hori & Tatsuno, Nikon Corporation, granted May 24, 1994.
- Ohshita, K. "NIKKOR — The Thousand and One Nights, No. 28: Ai AF Nikkor 28mm f/1.4D." Nikon Corporation, https://imaging.nikon.com/imaging/information/story/0028/
- Stafford, S. *The Nikon Compendium*, p. 170 (as quoted in forum sources).
- OHARA Optical Glass Catalog, 2023 edition.
- Schott Optical Glass Catalog, current edition.
- Nikon AF Nikkor 28mm f/1.4D product specifications (Nikon Corporation).
