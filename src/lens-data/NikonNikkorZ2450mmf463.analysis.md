# Nikon NIKKOR Z 24-50mm f/4-6.3 — Optical Analysis

**Patent:** JP 2021-189377 A (published 2021-12-13)
**Applicants:** Konica Minolta / Nikon Corporation
**Inventors:** Hirose Takumo, Yamada Keiko, Yamamoto Yasushi, Yamamoto Hiroshi
**Example:** No. 1 (corresponding to the First Embodiment, Figure 1)

---

## 1. Overview

The NIKKOR Z 24-50mm f/4-6.3 is Nikon's ultra-compact standard zoom lens for the Z-mount mirrorless system. Announced alongside the Nikon Z5 in July 2020, it was designed specifically to serve as a full-frame kit lens with an emphasis on minimizing size and weight. At 195 g and a collapsed length of 51 mm, it is the shortest and lightest full-frame zoom in its class.

The optical design is covered by JP 2021-189377 A, a joint filing by Konica Minolta and Nikon. The patent presents five numerical examples; Example 1 corresponds to the production lens configuration and is the focus of this analysis.

### Key Specifications (Manufacturer)

| Parameter | Value |
|---|---|
| Focal length | 24–50 mm |
| Maximum aperture | f/4 (wide) – f/6.3 (tele) |
| Optical formula | 11 elements in 10 groups |
| Special elements | 3 aspherical, 2 ED |
| Diaphragm | 7 blades, rounded |
| Close focus | 0.35 m (constant across zoom) |
| Filter thread | 52 mm |
| Focus method | Internal focus (stepping motor) |
| Mount | Nikon Z (FX) |
| Weight | 195 g |

### Design Classification

The design is a **negative-positive-negative-positive four-group zoom** (−+−+ power arrangement). This is a compact variation of the classic retrofocus zoom topology. Group 2 is internally subdivided by the aperture stop into a front sub-group (G2f) and a rear sub-group (G2r), giving it something of the character of a five-group design while maintaining four mechanically distinct moving units.

---

## 2. Design Architecture

### 2.1 Group Structure

The four groups and their compositions in Example 1 are:

**Group 1 (G1)** — Negative front group (f₁ = −32.86 mm). Contains three singlets: L1a (negative meniscus), L1b (biconcave aspherical, plastic), and L1c (positive meniscus, high-dispersion glass). The group provides the wide-angle coverage characteristic of a retrofocus design.

**Group 2 (G2)** — Positive variator (f₂ = +22.90 mm). This is the primary power group and the most complex, containing five elements across two sub-groups:

- **G2f** (front, f₂f = +45.48 mm): L2a (positive meniscus, ED glass) and a cemented doublet L2b+L2c (ED biconvex cemented to a negative biconcave). The doublet includes an explicit UV-cure cement layer (nd = 1.51400, d = 0.01 mm) between the elements.
- **G2r** (rear, f₂r = +38.95 mm): L2d (biconvex aspherical, molded glass) and L2e (negative meniscus).

The aperture stop sits between G2f and G2r, moving as a unit with the entire G2 assembly during zooming.

**Group 3 (G3)** — Negative focus group (f₃ = −34.44 mm). Contains two singlets: L3a (negative meniscus) and L3b (negative meniscus aspherical, plastic). This group serves as the internal focusing unit, translating toward the image during close-focus operation.

**Group 4 (G4)** — Positive rear group (f₄ = +79.05 mm). A single positive meniscus element L4a. G4 is mechanically fixed (does not move during zoom or focus). Note: the patent prose describes L4a as "convex toward the object," but both radii are negative (R₁ = −99.60, R₂ = −34.47 mm), indicating the element is convex toward the image. The cross-section drawing in Figure 1 confirms this; the patent text appears to contain an error on this point.

The total element count is 11 (3 + 5 + 2 + 1), arranged in 10 air-separated groups.

### 2.2 Zoom Mechanism

During zooming from wide (24.7 mm) to telephoto (48.5 mm):

- **G1** executes a non-monotonic "U-turn" trajectory: it first moves toward the image (wide → middle), then reverses and moves toward the object (middle → tele).
- **G2** moves monotonically toward the object, covering approximately 16.3 mm of travel. Since the stop moves with G2, this creates a compact zoom mechanism.
- **G3** also moves monotonically toward the object, but less than G2, causing the G2–G3 and G3–G4 gaps to increase.
- **G4** is stationary.

The variable air spacings at infinity focus are:

| Gap | Wide | Middle | Tele | Behavior |
|---|---|---|---|---|
| d6 (G1–G2) | 19.97 | 10.33 | 3.17 | Decreases (primary zoom gap) |
| d17 (G2–G3) | 8.66 | 10.00 | 11.94 | Increases |
| d21 (G3–G4) | 4.45 | 10.37 | 17.61 | Increases |
| BFD (G4–image) | 11.44 | 11.38 | 11.30 | Slight decrease |

The dramatic 16.8 mm reduction in d6 from wide to tele is the principal zooming action, with G1 and G2 closing together as the focal length increases.

### 2.3 Focus Mechanism

Group 3 is the dedicated focus group. During close focusing (minimum distance 0.35 m per manufacturer specification), G3 translates toward the image plane. This is an internal focusing (IF) design: the overall lens length does not change during focus, and the front element does not rotate — both advantages for filter use and mechanical simplicity.

The computed close-focus G3 translations (at 0.35 m from sensor) are:

| Zoom Position | G3 shift Δ (mm) | d17 (∞ → 0.35 m) | d21 (∞ → 0.35 m) |
|---|---|---|---|
| Wide (24.7 mm) | +1.63 | 8.66 → 10.29 | 4.45 → 2.82 |
| Middle (34.7 mm) | +2.45 | 10.00 → 12.45 | 10.37 → 7.91 |
| Tele (48.5 mm) | +3.73 | 11.94 → 15.67 | 17.61 → 13.88 |

The increasing G3 translation at longer focal lengths is characteristic of internal-focus zoom designs. At wide angle, the focus group leverages the stronger magnification through the preceding optics to achieve adequate focus shift with minimal movement. At telephoto, the reduced magnification from G1+G2 demands a proportionally larger physical translation of G3.

G3's compact two-element construction enables the fast, quiet stepping motor autofocus that Nikon specifies for this lens.

### 2.4 Note on Back Focal Distance

The prescription table in the patent lists d23 = 9.90 mm as the last surface-to-image distance, but paraxial ray trace yields BFL = 11.438 mm at wide (matching the patent's BF column exactly: 11.438 / 11.381 / 11.301 at wide / middle / tele). The BF values are the correct last-surface-to-paraxial-image distances. The discrepancy with d23 = 9.90 is most likely due to a sensor cover glass or IR-filter stack that the patent prescription does not explicitly include, consistent with the patent's note that "a parallel plate (e.g., sensor cover glass, optical low-pass filter, IR-cut filter) may be placed as needed."

---

## 3. Aspherical Surfaces

Three of the eleven elements are aspherical, each with both surfaces carrying aspherical departures — yielding six aspherical surfaces total. All three aspherical elements use K = 0 (the base conic is a sphere in every case), with the aspherical profile defined entirely by the polynomial coefficients.

### 3.1 L1b — Group 1 Distortion Corrector (Surfaces 3, 4)

L1b is a biconcave negative singlet (R₁ = −298.15, R₂ = +93.31 mm) fabricated from optical-grade cyclo-olefin polymer (nd = 1.53048, νd = 55.72), consistent with Zeon ZEONEX E48R or an equivalent COP resin grade widely used in camera lens aspherics. Both surfaces are weakly curved, and the aspherical departure at the clear aperture is substantial relative to the modest spherical sag.

The patent explains that L1b's aspherical profile serves to correct the negative distortion inherent to the wide-angle retrofocus front group. The claim language specifies a condition on the product f₁·φ₁₂ (where φ₁₂ is L1b's power), bounding L1b's contribution to prevent either excessive negative distortion or over-corrected astigmatism. For Example 1, f₁·φ₁₂ = 0.246, sitting comfortably within the prescribed range of −0.03 to 0.27.

Being plastic (injection-molded or compression-molded), L1b is the cheapest aspherical element to manufacture. Its position in the front group — far from the aperture stop — means it handles large beam diameters but sees relatively low ray angles, making it well-suited to the gentle aspherical corrections typical of distortion control.

Coefficients (A4 through A8 only; higher orders are zero):

| Surface | A4 | A6 | A8 |
|---|---|---|---|
| S3 | +1.997 × 10⁻⁵ | −8.244 × 10⁻⁸ | −2.122 × 10⁻¹¹ |
| S4 | +1.731 × 10⁻⁵ | −1.058 × 10⁻⁷ | −1.530 × 10⁻¹⁰ |

### 3.2 L2d — Group 2 Rear Aberration Corrector (Surfaces 14, 15)

L2d is a biconvex positive singlet (R₁ = +22.66, R₂ = −32.27 mm) fabricated from a precision-glass-moldable (PGM) optical glass (nd = 1.58313, νd = 59.46), matching HOYA M-BACD12 — a barium crown glass in HOYA's PGM lineup with a low transition temperature suitable for high-precision press molding.

L2d sits immediately after the aperture stop, in the G2r sub-group. Its position gives it maximum leverage over spherical aberration and coma. The patent states that L2d's aspherical surfaces correct the spherical aberration and coma generated by the G2f sub-group. With a strong positive power of f = +23.5 mm, L2d is the second-strongest individual element in the entire system.

Coefficients:

| Surface | A4 | A6 | A8 |
|---|---|---|---|
| S14 | −1.983 × 10⁻⁵ | +1.056 × 10⁻⁷ | +4.372 × 10⁻⁹ |
| S15 | +3.677 × 10⁻⁵ | +1.034 × 10⁻⁷ | +4.942 × 10⁻⁹ |

**Note on patent errata:** The published patent text prints the A6 coefficient for surface 14 as `1.05587E-01`, which is physically impossible (it would produce millimeters of aspherical departure at tiny heights). Cross-referencing with Example 2's corresponding surface and verifying against the magnitude of neighboring coefficients confirms the correct value is `1.05587E-07`. The exponent digit "7" was corrupted to "1" in the published document.

### 3.3 L3b — Group 3 Focus Aberration Corrector (Surfaces 20, 21)

L3b is a weakly negative meniscus (R₁ = −135.80, R₂ = −189.24 mm) made from the same COP resin as L1b (nd = 1.53048, νd = 55.72). Both surfaces carry aspherical profiles with coefficients extending to the 16th order, making L3b the most richly aspherical element in the design.

The patent explains L3b's role via condition (4), which bounds the product f₃·φ₃₂ between −0.19 and +0.21. For Example 1, φ₃₂ = −0.001 mm⁻¹ (L3b's paraxial power is essentially zero, corresponding to f ≈ −915 mm), yielding f₃·φ₃₂ ≈ 0.038. L3b is effectively a "corrector plate" in the focus group, designed to suppress coma variation during focus travel. By making L3b's aspherical profile high-order (through A16), the designers can finely tune the off-axis aberration balance as G3 translates during focusing — preserving image quality across the full focus range from 0.35 m to infinity.

Since L3b is plastic and located in the lightweight focus group, it contributes minimally to the group's inertia, enabling the fast stepping-motor AF.

Coefficients:

| Surface | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---|---|---|---|---|---|---|
| S20 | −5.931 × 10⁻⁵ | −2.833 × 10⁻⁶ | +1.137 × 10⁻⁷ | −2.412 × 10⁻⁹ | +2.819 × 10⁻¹¹ | −1.748 × 10⁻¹³ | +4.563 × 10⁻¹⁶ |
| S21 | −3.197 × 10⁻⁵ | −2.142 × 10⁻⁶ | +7.432 × 10⁻⁸ | −1.366 × 10⁻⁹ | +1.384 × 10⁻¹¹ | −7.402 × 10⁻¹⁴ | +1.644 × 10⁻¹⁶ |

**Note on patent errata:** The published patent labels these two aspherical data blocks as surfaces 21 and 22, but the asterisk (*) markers in the surface data table are on surfaces 20 and 21. Cross-referencing with the identical surface numbering in Example 2 (where the data correctly labels these blocks as surfaces 20 and 21) confirms the surface numbers are shifted by +1 in the Example 1 publication. Additionally, the A8 coefficient for surface 20 is printed as `1.13683E-01` — the same exponent corruption seen in surface 14's A6. The correct value is `1.13683E-07`, confirmed by comparison with Example 2's nearly identical coefficient `1.167194E-07`.

---

## 4. Glass Selection and Material Strategy

The eleven elements use just six distinct glass types (plus optical cement), reflecting a cost-conscious design philosophy. Two elements are molded plastic, which represents an unusually high plastic count for a full-frame interchangeable lens and underscores the budget orientation.

### 4.1 Element-by-Element Glass Identification

| Element | nd | νd | Glass Code | Catalog Match | Type |
|---|---|---|---|---|---|
| L1a | 1.69680 | 55.46 | 697.555 | OHARA S-BSM10 | Barium crown |
| L1b | 1.53048 | 55.72 | 530.557 | COP resin (ZEONEX-type) | Plastic (cyclo-olefin polymer) |
| L1c | 1.92286 | 20.88 | 923.209 | OHARA S-NPH2 | Ultra-high-dispersion flint |
| L2a | 1.49700 | 81.61 | 497.816 | HOYA FCD1 / S-FPL51 | ED (fluorophosphate) |
| L2b | 1.49700 | 81.61 | 497.816 | HOYA FCD1 / S-FPL51 | ED (fluorophosphate) |
| (cement) | 1.51400 | 27.05 | — | UV-cure adhesive | Optical cement |
| L2c | 1.70154 | 41.24 | 702.412 | HOYA NBFD12 | Lanthanum flint |
| L2d | 1.58313 | 59.46 | 583.595 | HOYA M-BACD12 | PGM barium crown |
| L3a | 1.83481 | 42.72 | 835.427 | OHARA S-LAH55V / HOYA TAFD5G | Dense lanthanum flint |
| L3b | 1.53048 | 55.72 | 530.557 | COP resin (ZEONEX-type) | Plastic (cyclo-olefin polymer) |
| L4a | 1.64769 | 33.84 | 648.338 | OHARA S-TIM22 | Titanium flint |

All ten glass identifications match catalog values to five decimal places in nd and two decimal places in νd, indicating exact catalog glasses rather than custom melts.

### 4.2 Material Strategy

**ED Glass (L2a, L2b).** Both ED elements use the same glass — HOYA FCD1 (or its OHARA equivalent S-FPL51). With νd = 81.61, this is a standard fluorophosphate ED glass that Nikon has used extensively across their Z-mount lineup. Placing both ED elements in the G2 front sub-group, where the marginal ray height is near maximum, provides the strongest possible leverage for axial chromatic correction.

**Ultra-High-Dispersion Flint (L1c).** L1c uses S-NPH2 (νd = 20.88), one of the most dispersive conventional glasses available. Paired against L1a's S-BSM10 (νd = 55.46), it forms a widely separated "air-spaced achromat" that corrects lateral chromatic aberration across the wide field angle. The Abbe number difference |νp − νn| = 34.57 satisfies the patent's condition (3) range of 34–40.

**Plastic Aspherics (L1b, L3b).** The choice of cyclo-olefin polymer (nd = 1.53048) for two aspherical elements is a deliberate cost and weight reduction strategy. COP resins such as Zeon's ZEONEX E48R (nd ≈ 1.53, νd ≈ 56) offer good optical clarity, low birefringence, and stable refractive index, at a fraction of the cost of molded glass aspherics. The tradeoff is greater thermal sensitivity (dn/dT ≈ −1.1 × 10⁻⁴/°C vs. ~10⁻⁶ for glass), which can shift focus in extreme temperatures. However, since both plastic elements carry weak net power (L1b ≈ −134 mm, L3b ≈ −915 mm), the thermal focus shift is minimal.

**PGM Molded Glass (L2d).** L2d uses HOYA M-BACD12, a barium crown glass in HOYA's precision glass molding (PGM) lineup. Unlike the plastic aspherics, this molded glass element occupies a high-convergence position just after the stop and carries strong positive power (+23.5 mm), demanding the tighter tolerances and better thermal stability that glass provides.

**Optical Cement (S10–S11 interface).** The cemented doublet L2b+L2c uses a UV-curable adhesive with nd = 1.51400, νd = 27.05. The cement layer is 0.01 mm thick — effectively an infinitesimal bonding film. Both the junction surface and the L2c front surface share the same radius (R = −20.356 mm), confirming this is a conventional cemented interface.

---

## 5. Element Roles and Optical Function

### 5.1 Individual Element Focal Lengths

| Element | Focal Length (mm) | Power | Role |
|---|---|---|---|
| L1a | −28.2 | Strong negative | Primary G1 diverging element |
| L1b | −133.8 | Weak negative | Aspherical distortion corrector |
| L1c | +86.6 | Moderate positive | Chromatic corrector (high-dispersion) |
| L2a | +46.2 | Strong positive | Primary G2f power element (ED) |
| L2b+L2c | ≈ 0 (f ≈ −1930) | Near-zero | Achromatic corrector pair |
| L2b (alone) | +25.4 | Strong positive | ED biconvex in cemented doublet |
| L2c (alone) | −24.2 | Strong negative | Flint biconcave in cemented doublet |
| L2d | +23.5 | Strong positive | Post-stop aberration corrector (asph) |
| L2e | −45.0 | Moderate negative | Field flattener / coma corrector |
| L3a | −35.8 | Strong negative | Primary G3 negative element |
| L3b | −915 | Near-zero | Focus-invariant corrector plate (asph) |
| L4a | +79.1 | Moderate positive | Rear field corrector |

### 5.2 Functional Analysis

**G1: Wide-Angle Front Group.** The three-element front group provides the negative power that creates the retrofocus configuration necessary for wide-angle coverage (half-field 41.3° at 24 mm) with adequate back focal distance for the Z-mount's 16 mm flange distance. L1a carries the bulk of the diverging power; L1b adds a small negative contribution while serving primarily as an aspherical distortion corrector; L1c acts as a chromatic corrector, using its extreme dispersion (νd = 20.88) to balance the lateral color introduced by L1a's refraction at large ray heights.

**G2f: Achromatic Power Core.** The G2f sub-group provides positive power through L2a while using the cemented doublet L2b+L2c for chromatic correction. The doublet is deliberately designed to have near-zero net power (the composite focal length is approximately −1930 mm) — its purpose is not to contribute net refractive power but to generate a strong chromatic separation. L2b alone has f = +25.4 mm and L2c alone has f = −24.2 mm; these nearly cancel, but the combination of high-dispersion flint (L2c, νd = 41.24) and low-dispersion ED glass (L2b, νd = 81.61) creates effective achromatization of the axial color.

**G2r: Spherical Aberration Control.** After the aperture stop, L2d's molded aspherical surfaces provide the primary spherical aberration and coma correction, while L2e (a negative meniscus with its concave side toward the image) contributes field-flattening power and controls the Petzval sum.

**G3: Focus Group.** L3a provides the negative power needed for the focus group to shift the image position during close focusing, while L3b (an aspherical "corrector plate" with near-zero power) ensures that coma and other off-axis aberrations remain stable as G3 translates. The use of high-order aspherical coefficients (through A16) on L3b allows fine-grained control of the aberration balance across the full focus range.

**G4: Rear Field Lens.** The single-element rear group acts as a field lens, bending the chief ray toward the optical axis to improve telecentricity (important for mirrorless sensor compatibility) and providing a final positive correction to the Petzval sum. L4a is a positive meniscus with both radii negative (R₁ = −99.60, R₂ = −34.47 mm), meaning both surfaces are concave toward the object and the element's convex side faces the image.

---

## 6. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed using the standard formula P = Σ φᵢ/(nᵢ·n'ᵢ), is:

**Σ φᵢ/(nᵢ·n'ᵢ) = +0.0016 mm⁻¹**

This yields a Petzval radius of approximately **+630 mm** — indicating an essentially flat Petzval surface. For a lens covering an image half-diagonal of 21.7 mm, this represents excellent Petzval correction at the paraxial level.

The near-zero Petzval sum arises from a careful balance of positive and negative element contributions. The strong positive elements (L2a, L2d, L4a) contribute positive Petzval, while the negative elements (L1a, L2e, L3a) contribute negative Petzval. The doublet L2b+L2c, with its near-zero net power, contributes minimally. The ultra-high-dispersion L1c element (S-NPH2, nd = 1.923) plays a key role: its high refractive index reduces its Petzval contribution per unit of power, allowing it to carry significant chromatic correction duty while adding relatively little field curvature.

Despite the excellent paraxial Petzval correction, the patent's astigmatism plots (Figures 6A–6C) show tangential and sagittal field curvatures diverging toward the field edge, reaching approximately ±0.25 mm at maximum image height. This residual is dominated by higher-order field-dependent aberrations (oblique astigmatism) rather than Petzval curvature, which is typical for compact wide-angle zoom designs where the retrofocus front group introduces significant off-axis aberrations that the aspherical elements can only partially correct.

---

## 7. Aberration Performance

The patent provides longitudinal aberration plots (Figures 6A–6C) at wide, middle, and telephoto positions. Key observations:

**Spherical aberration** is reasonably well-controlled at all zoom positions, with d-line residuals within approximately 0.25 mm at wide and tightening to about 0.15 mm at tele. The g-line (435.8 nm) shows modest secondary spectrum — up to ~0.3 mm of longitudinal chromatic spread at the marginal zone — indicating the two-ED-element design provides good but not apochromatic correction.

**Astigmatism** shows tangential and sagittal surfaces diverging toward the field edge, reaching approximately ±0.25 mm at maximum image height. This residual is dominated by higher-order oblique astigmatism from the retrofocus front group rather than Petzval curvature, which is well-corrected at the paraxial level.

**Distortion** is the design's most visible optical concession. At 24 mm, barrel distortion reaches approximately −3.5% at the image edge (with a slight mustache waviness near the corners). By 35 mm it transitions to pincushion, reaching approximately +4% at 50 mm. Nikon's Z cameras apply mandatory in-camera correction profiles that cannot be disabled, so the user never sees the raw optical distortion in JPEG output. RAW processors also apply the correction metadata automatically. This is a deliberate design strategy: by tolerating higher optical distortion, the designers can reduce element count and overall lens diameter.

---

## 8. Optical Condition Expressions

The patent specifies eight condition expressions that bound the design space. Example 1's computed values are:

| Condition | Expression | Limits | Value | Status |
|---|---|---|---|---|
| (1) | f₂f / f₂r | 0.4 – 1.6 | 1.168 | ✓ |
| (2) | f₁ · φ₁₂ | −0.03 – 0.27 | 0.246 | ✓ |
| (3) | \|νp − νn\| | 34 – 40 | 34.57 | ✓ |
| (4) | f₃ · φ₃₂ | −0.19 – 0.21 | 0.038 | ✓ |
| (5) | f₁ / f₂ | −1.6 – −1.3 | −1.435 | ✓ |
| (6) | f₁ / fw | −1.5 – −1.3 | −1.329 | ✓ |
| (7) | f₂ / f₃ | −0.7 – −0.4 | −0.665 | ✓ |
| (8) | f₁ / BF | −3.1 – −2.8 | −2.873 | ✓ |

The condition values cluster near the centers of their ranges, suggesting Example 1 represents a balanced, non-extreme design point — consistent with a production lens intended for broad manufacturing tolerance.

---

## 9. System Summary at Each Zoom Position

| Parameter | Wide | Middle | Tele |
|---|---|---|---|
| EFL (mm) | 24.73 | 34.71 | 48.50 |
| F-number | 4.08 | 5.12 | 6.34 |
| Half-field ω (°) | 41.27 | 32.01 | 24.10 |
| Image height y' (mm) | 21.70 | 21.70 | 21.70 |
| Total track TL (mm) | 85.70 | 83.31 | 85.33 |
| BFL (mm) | 11.44 | 11.38 | 11.30 |

The zoom ratio is 1.96×, and the f-number varies from 4.08 to 6.34 — a 1.55× ratio, which Nikon rounds to the marketed f/4–6.3 specification. The total track varies non-monotonically (shortest at middle), reflecting the G1 U-turn behavior.

### Verified Group Focal Lengths

| Group | Patent (mm) | Computed (mm) | Delta |
|---|---|---|---|
| G1 (surfaces 1–6) | −32.856 | −32.856 | 0.000 |
| G2 (surfaces 7–17) | +22.899 | +22.899 | 0.000 |
| G3 (surfaces 18–21) | −34.440 | −34.440 | 0.000 |
| G4 (surfaces 22–23) | +79.052 | +79.052 | 0.000 |

All group focal lengths match the patent values to three decimal places, confirming the prescription data is correctly transcribed (with aspherical errata corrected).

---

## 10. Notes on Patent Errata

During transcription and verification, two classes of errors were identified in the published patent text for Example 1's aspherical data:

**Exponent corruption.** Two aspherical coefficients have their exponents printed as `E-01` when the correct values are `E-07`. Specifically:

- Surface 14, A6: printed `1.05587E-01`, correct value `1.05587E-07`
- Surface 20, A8: printed `1.13683E-01`, correct value `1.13683E-07`

These were confirmed by cross-reference with Example 2's corresponding coefficients (which are printed correctly) and by physical plausibility analysis — an A6 value of 0.1 would produce tens of millimeters of sag departure at the clear aperture, which is nonsensical.

**Surface number shift.** The two aspherical data blocks for L3b's surfaces are labeled as surfaces 21 and 22 in the published text, but the asterisk markers in the surface prescription table and the element descriptions both identify surfaces 20 and 21 as the aspherical pair. Example 2 correctly labels the corresponding blocks as surfaces 20 and 21, confirming the Example 1 labels are shifted by +1.

---

## 11. Conclusion

The Nikkor Z 24-50mm f/4-6.3 is a study in cost-effective optical design under severe packaging constraints. By limiting the zoom range to 2×, accepting a variable aperture, and tolerating higher-than-usual distortion (corrected electronically), the designers achieved an 11-element optical system that fits within an extraordinarily compact 51 mm collapsed length at 195 g.

The glass selection strategy uses only two genuine ED elements (both HOYA FCD1 / S-FPL51 fluorophosphate), two plastic aspherics (ZEONEX-type COP resin), and one molded glass aspheric (HOYA M-BACD12) — a materials palette that enables efficient high-volume manufacturing while keeping costs at the kit-lens level.

The internal focusing mechanism via the lightweight two-element G3 group enables the fast stepping-motor AF performance that Nikon specifies, and the stationary G4 rear field lens provides the telecentricity needed for modern mirrorless sensors. The paraxial Petzval sum is well-corrected (R ≈ 630 mm), though higher-order off-axis aberrations — particularly oblique astigmatism and distortion — remain the primary optical compromises, mitigated by aspherical surfaces and mandatory in-camera electronic correction.

Optically, the lens performs above expectations for its class — a conclusion shared by most reviewers, who consistently note the image quality overachieves relative to the modest specifications and price point.
