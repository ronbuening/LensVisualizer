# Sony FE 135mm f/1.8 GM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2019/187633 A1 (JP re-publication), titled "撮像レンズ及び撮像装置" (Imaging Lens and Imaging Apparatus).
**Applicant:** Sony Corporation (000002185), Tokyo, Japan.
**Inventors:** Matsuoka Dai (松岡 大), Miyagawa Naoki (宮川 直己), Matsumoto Hiroyuki (松本 博之).
**International filing date:** 4 February 2019 (PCT/JP2019/003857).
**Priority date:** 30 March 2018 (JP 2018-67276).
**International publication date:** 3 October 2019.

**Embodiment used:** Numerical Example 1 (数値実施例 1), corresponding to the first embodiment (第1の実施の形態) described beginning at ¶0102 and tabulated in Tables 1–5 (pages 17–18).

The production lens is the **Sony FE 135mm F1.8 GM** (model SEL135F18GM), announced in February 2019 and shipped in spring 2019. The following convergent evidence identifies Example 1 as the production embodiment:

1. **Element and group count.** The patent prescribes 13 elements; the production lens is specified as 13 elements in 10 groups. Counting air-separated lens components in Example 1 yields exactly 10: five singlets in GR1, two components (one cemented doublet + one singlet) in GR2, one cemented doublet in GR3, and two components (one cemented doublet + one singlet) in GR4.
2. **Special element count.** The patent contains one aspherical surface (surface 9, on G5) matching Sony's "one XA element" specification. G2 (nd = 1.43700, νd = 95.10 — fluorophosphate, Super ED class) matches the "one Super ED element." G4 (nd = 1.59282, νd = 68.63 — S-FPM2 class) matches the "one ED element."
3. **Focal length and aperture.** Example 1 gives f = 130.950 mm, F/1.854 — consistent with the marketed 135 mm f/1.8 specification.
4. **Image circle.** Y = 21.633 mm corresponds to a 43.27 mm image diagonal, matching the 35 mm full-frame format (43.3 mm nominal).
5. **Close focus and magnification.** The patent publishes a maximum magnification of β = −0.25 at an object distance d0 = 559.6 mm from the front vertex. Combined with the optical track length of 145 mm, this gives MFD ≈ 705 mm — matching Sony's 0.7 m (0.25× magnification) specification.
6. **Focus mechanism.** The patent's dual floating focus system (GR2 moves toward image, GR3 moves toward object) matches Sony's published architecture of two focus groups driven by four XD linear motors.
7. **Patent timing.** Priority date of March 2018, 11 months before the product announcement in February 2019, is consistent with the Sony patent-to-market cycle for GM lenses.

## Optical Architecture

The Sony FE 135mm f/1.8 GM is a four-group prime lens with a positive–negative–positive–negative power distribution. From object to image, the groups are:

- **GR1** (positive, f = +70.1 mm): Five air-separated singlet elements (G1–G5). Fixed during focus. Contains the Super ED element (G2), the ED element (G4), and the XA aspherical element (G5). This group collects and converges the incoming beam, carrying the bulk of the system's positive power.
- **GR2** (negative, f = −49.4 mm): One cemented doublet (G6 + G7) plus one singlet (G8), totaling three elements. This is the **first focus group** (第1フォーカスレンズ群), which moves from object toward image during close-focus. It contains the anomalous-dispersion positive element G6 that the patent leverages for axial chromatic aberration control.
- **Aperture stop S**: Located between GR2 and GR3, fixed relative to the image plane.
- **GR3** (positive, f = +73.5 mm): One cemented doublet (G9 + G10). This is the **second focus group** (第2フォーカスレンズ群), which moves from image toward object during close-focus. Its counter-motion relative to GR2 implements the floating focus system.
- **GR4** (negative, f = −106.5 mm): One cemented doublet (G11 + G12) plus one singlet (G13), totaling three elements. Fixed during focus. This is the **final group** (最終レンズ群), which separates axial and peripheral ray bundles for independent correction of spherical aberration and field curvature.

The optical track from the front vertex to the image plane is L = 145.0 mm, slightly exceeding the 131 mm focal length (L/f = 1.11). The design is therefore not a strict telephoto — rather, it is a four-group prime with a strongly negative final group that provides field flattening while keeping the back focal distance short (physical BFD ≈ 21.4 mm including filter, or BFD/EFL = 0.16). Placing the aperture stop between the two focus groups (GR2 and GR3) optimizes the symmetry of the power arrangement about the stop, which the patent notes (¶0050) is advantageous for distortion correction. It also allows either or both of the positive elements adjacent to the stop to serve as candidate image-stabilization elements in future derivatives, should lateral decentering be applied (¶0050). The Petzval sum is +0.000723 mm⁻¹ (Petzval radius ≈ 1384 mm), indicating a very flat field — the negative final group GR4 pulls the field flat against the combined positive power of GR1 and GR3.

## Element-by-Element Analysis

### G1 — Positive Meniscus, Convex to Object

nd = 1.61997, νd = 63.88. Glass: S-PHM52 (OHARA) — phosphate crown. f = +169.1 mm.

The front collector element. Its weak positive power (f ≈ 169 mm in a system of f ≈ 131 mm) keeps the surface curvatures moderate, limiting spherical aberration contribution from the outermost element where the marginal ray height is largest. The meniscus shape — both surfaces convex toward the object — bends the marginal ray gently inward while contributing minimal coma. The modest refractive index (1.62) and high Abbe number (63.9) are appropriate for a front element where chromatic contribution should be small.

### G2 — Positive Meniscus, Convex to Object (Super ED)

nd = 1.43700, νd = 95.10. Glass: FPL53 class (fluorophosphate, Super ED — 437/951). f = +160.2 mm.

This is the **Super ED element** marketed by Sony. With νd = 95.1, G2 is among the lowest-dispersion glasses in the design, placing it firmly in the anomalous partial dispersion regime. The six-digit glass code (437/951) is closest to OHARA S-FPL53 (439/950, Δnd ≈ 0.002), though the small residual suggests the patent may use a proprietary melt variant or an equivalent from another vendor. Positioned second in the front group where the marginal ray height remains large, G2 provides positive power with minimal chromatic contribution. Its very high Abbe number means its contribution to axial color is nearly negligible despite carrying substantial refractive power. The thick center section (d = 11.48 mm) is characteristic of fluorophosphate elements, which require generous center thickness for manufacturing stability. This element works in concert with the ED element G4 to pre-correct the chromatic balance of the axial bundle before it enters the focus groups.

### G3 — Negative Meniscus, Convex to Object

nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA) — dense barium flint. f = −72.3 mm.

The only negative element in GR1. Placed between two positive elements (G2 and G4), G3 introduces negative power to control the Petzval sum and correct field curvature that would otherwise be excessive from the five-element positive group. Its relatively high index (1.72) and low Abbe number (34.7) make it the primary chromatic partner for the low-dispersion G2 and G4 elements — the classic positive-ED / negative-flint achromatization strategy applied in a non-cemented configuration. The patent's conditional expression (4) governs the shape factor of this element: (r1 + r2)/(r1 − r2) = (208.52 + 41.46)/(208.52 − 41.46) = 1.496, confirming moderate bending that balances coma correction against spherical aberration contribution (¶0080–¶0083).

### G4 — Positive Meniscus, Convex to Object (ED)

nd = 1.59282, νd = 68.63. Glass: S-FPM2 (OHARA) — fluoro-phosphate crown, ED class. f = +82.7 mm.

This is the **ED element** marketed by Sony. S-FPM2 is a fluoro-phosphate glass with νd = 68.63, exceeding the conventional threshold for ED classification (νd > 65). With a focal length of +82.7 mm, G4 is the strongest positive singlet in GR1, carrying a significant share of the group's +70 mm combined power. Its position downstream of the negative G3 allows it to recollect the diverged beam while the low-dispersion glass minimizes the chromatic penalty. The pairing of G2 (Super ED, νd = 95.1) and G4 (ED, νd = 68.6) with G3 (flint, νd = 34.7) distributes the achromatization burden across two low-dispersion elements, enabling tighter secondary spectrum correction than a single ED element could achieve alone.

### G5 — Positive Meniscus, Convex to Object (XA — 1× Aspherical)

nd = 1.58313, νd = 59.38. Glass: S-BAL35 (OHARA) — barium crown. f = +196.9 mm.

The **XA (extreme aspherical) element**. The front surface (surface 9) carries aspherical coefficients (see Aspherical Surfaces section below). The aspherical departure is dominated by the negative A4 term, which flattens the surface periphery relative to a sphere. Per the patent (¶0077), this weakens the positive power of the surface toward the rim, directly correcting the residual spherical aberration and sagittal coma flare generated by the preceding four spherical elements in GR1. The aspherical departure profile is monotonically negative out to the rim — a straightforward undercorrection profile that compensates for the overcorrected spherical contribution of the fast-converging positive group.

Sony's "XA" (extreme aspherical) designation refers to the manufacturing process. XA elements are ground and polished aspherics with surface form accuracy specified at approximately 0.01 μm, which eliminates the concentric ring artifacts ("onion-ring bokeh") that can appear with less precise molded aspherics.

G5 is the rearmost element of GR1 and represents the boundary between the fixed front group and the moving focus group GR2. Its relatively weak power (f ≈ +197 mm) means it functions primarily as an aberration corrector rather than a power element.

### G6 — Positive Meniscus, Convex to Object (Cemented with G7)

nd = 1.95906, νd = 17.47. Glass: dense flint (959/175, vendor uncertain — anomalous dispersion). f = +171.3 mm.

The most optically distinctive element in the design. With an extraordinarily high refractive index (nd = 1.959) and an extremely low Abbe number (νd = 17.47), G6 sits deep in the "super-flint" territory. The six-digit glass code (959/175) does not match standard OHARA catalog entries such as S-TIH53 (847/238) or S-NPH7 (953/203), suggesting a proprietary formulation or an equivalent from another vendor (possibly HIKARI or CDGM). The patent specifically identifies this element's anomalous partial dispersion properties through conditional expressions (2) and (3):

- Condition (2): νF1 < 22 → νd = 17.47 ✓
- Condition (3): θgF > 0.63 → θgF ≈ 0.660 ✓

Despite being a flint glass, G6 is a **positive** element — an unusual assignment. The patent explains (¶0060–0063) that because GR2 (the first focus group) has the larger axial ray diameter of the two focus groups, the chromatic correction within GR2 is critical. By placing a high-dispersion positive element at the point of maximum ray height within GR2, the designer can generate a large negative contribution to axial color that compensates for the positive chromatic contributions accumulated in GR1. The anomalous partial dispersion (high θgF) further enables secondary spectrum control.

G6 is cemented to G7, forming the object-side sub-component of GR2.

### G7 — Negative Meniscus, Convex to Object (Cemented with G6)

nd = 1.77250, νd = 49.62. Glass: lanthanum crown (772/496, class S-LAM). f = −48.2 mm.

The achromatizing partner to G6 in the cemented doublet. With moderate dispersion (νd = 49.6), G7 provides the negative power counterpart to G6's positive contribution. The combined G6 + G7 cemented doublet forms the "object-side lens component" (物体側レンズ成分) of GR2 and has net negative power — the negative G7 overpowers the positive G6. The cemented interface at R = 473.0 mm is relatively weak, meaning the chromatic correction relies primarily on the difference in dispersions between the two glasses rather than on strong interface curvature.

### G8 — Negative Meniscus, Convex to Object

nd = 1.72916, νd = 54.67. Glass: S-LAL14 (OHARA) — lanthanum crown. f = −190.2 mm.

The "image-side lens component" (像側レンズ成分) of GR2. G8 is a weakly negative meniscus that forms the trailing element of the first focus group. Together with the G6–G7 doublet, GR2 has a combined focal length of −49.4 mm. During focus, the entire GR2 assembly (G6 + G7 + G8) translates toward the image, increasing the separation d1 from GR1 while decreasing d2 (the gap before the stop). The lanthanum crown glass (νd = 54.7) provides moderate dispersion in a position where the axial ray height is already reduced by the converging power of GR1.

### G9 — Negative Meniscus, Convex to Object (Cemented with G10)

nd = 1.74077, νd = 27.76. Glass: titanium flint (741/278, class S-TIH). f = −127.9 mm.

The front element of the GR3 cemented doublet (second focus group). G9 is a negative meniscus made of a moderately high-dispersion titanium flint. The six-digit glass code (741/278) is consistent with the OHARA S-TIH family. Positioned immediately behind the aperture stop, it encounters the axial bundle at a relatively narrow diameter, which limits its aberration contribution. Its primary function is as the achromatizing partner to G10 — the low-dispersion positive rear element of the doublet.

### G10 — Biconvex Positive (Cemented with G9)

nd = 1.61997, νd = 63.88. Glass: S-PHM52 (OHARA) — phosphate crown. f = +46.8 mm.

The rear element of the GR3 doublet and the principal positive-power element of the second focus group. With f = +46.8 mm, G10 carries the bulk of GR3's +73.5 mm combined power. Its biconvex shape (R1 = +42.85, R2 = −85.57) concentrates the refraction symmetrically, minimizing coma and astigmatism at this near-symmetric position behind the stop. The same glass as G1 (S-PHM52, νd = 63.9) provides low chromatic contribution while the cemented interface with G9 handles the achromatization. During focus toward close distances, GR3 moves toward the object (opposing the motion of GR2), implementing the floating focus system that controls field curvature and distortion variation across the focus range (¶0046).

### G11 — Positive Meniscus, Concave to Object (Cemented with G12)

nd = 1.80610, νd = 33.27. Glass: lanthanum heavy flint (806/333, vendor uncertain). f = +50.9 mm.

The front element of the GR4 doublet (final group). G11 is concave toward the object — its center of curvature for R = −692.7 mm faces to the left — giving it a meniscus shape that wraps around the diverging beam emerging from GR3. With f = +50.9 mm, it strongly converges the axial rays, separating them from the peripheral rays before the final correcting elements (¶0086). The six-digit glass code (806/333) does not match OHARA S-LAH64 (788/474) or any other standard OHARA entry in the May 2023 pocket catalog; the glass may be sourced from HOYA (TAFD30, 806/333 — exact match) or another vendor.

### G12 — Biconcave Negative (Cemented with G11)

nd = 1.51742, νd = 52.15. Glass: S-NSL36 (OHARA) — light flint. f = −66.0 mm.

The rear element of the GR4 doublet. S-NSL36 (code 517/522) is a low-index light flint that provides the negative power counterpart to G11. The combined G11 + G12 doublet has a focal length of approximately +225 mm (weakly positive) — it forms the "object-side lens component" (物体側レンズ成分) of the final group. This component's primary role is to converge the axial bundle while introducing controlled astigmatism and field curvature compensation in preparation for the final correcting element G13. The cemented interface at R = −38.95 mm is the strongest curvature in the rear group, carrying the burden of chromatic correction within GR4.

### G13 — Negative Meniscus, Concave to Object

nd = 1.89190, νd = 37.13. Glass: lanthanum heavy flint (892/371, class S-LAH). f = −70.9 mm.

The rearmost glass element and the "image-side lens component" (像側レンズ成分) of GR4. G13 is a strongly negative meniscus with both surfaces concave toward the object (R1 = −51.88, R2 = −292.74), giving it the character of a field-flattening element. Its high refractive index (nd = 1.892) enables the steep curvature of R1 while keeping the surface angle within practical limits. As the last powered element before the image plane, G13 operates on a beam where the axial and peripheral rays are well-separated (per the patent's design philosophy in ¶0086), allowing it to independently correct the peripheral aberrations — primarily coma, lateral color, and residual field curvature — without disturbing the on-axis correction established by G11 + G12.

The patent notes (¶0090) that the image-side surface of the rearmost lens in the final group (R2 = −292.74 mm) is convex toward the image, which suppresses ghost reflections from the sensor cover glass.

The conditional expression (5) governing the GR4 component balance yields FGL1/FGL2 = +225.5/(−70.9) = −3.18, satisfying −12 < FGL1/FGL2 < −1.5 (¶0085–0089).

## Glass Selection

The design uses 10 distinct glasses across 13 elements. The following table summarizes the glass palette. Where the glass cannot be unambiguously resolved to a single catalog entry, the six-digit code (nd × 1000 / νd × 10) and glass family designation are given.

| Element | nd | νd | Glass | Role |
|---|---|---|---|---|
| G1, G10 | 1.61997 | 63.88 | S-PHM52 (OHARA, 620/639) | Phosphate crown; moderate-index, low-dispersion base glass |
| G2 | 1.43700 | 95.10 | FPL53 class (437/951) — **Super ED** | Fluorophosphate; closest catalog match S-FPL53 (OHARA, 439/950, Δnd ≈ 0.002) |
| G3 | 1.72047 | 34.71 | S-NBH8 (OHARA, 720/347) | Dense barium flint; achromatizing partner to G2/G4 |
| G4 | 1.59282 | 68.63 | S-FPM2 (OHARA, 593/686) | Fluoro-phosphate — **ED** class |
| G5 | 1.58313 | 59.38 | S-BAL35 (OHARA, 583/594) | Barium crown; substrate for XA aspherical surface |
| G6 | 1.95906 | 17.47 | Dense flint (959/175, vendor uncertain) | Anomalous-dispersion flint; θgF ≈ 0.660 — for axial color control in GR2 |
| G7 | 1.77250 | 49.62 | Lanthanum crown (772/496, class S-LAM) | Achromatizing partner to G6 |
| G8 | 1.72916 | 54.67 | S-LAL14 (OHARA, 729/547) | Lanthanum crown; weak corrector in GR2 |
| G9 | 1.74077 | 27.76 | Titanium flint (741/278, class S-TIH) | Achromatizing partner to G10 |
| G11 | 1.80610 | 33.27 | Lanthanum heavy flint (806/333, vendor uncertain) | Strong converger in GR4; possible HOYA TAFD30 match |
| G12 | 1.51742 | 52.15 | S-NSL36 (OHARA, 517/522) | Light flint; negative partner to G11 |
| G13 | 1.89190 | 37.13 | Lanthanum heavy flint (892/371, class S-LAH) | Field-flattening / correcting element |

Glass identifications for G1/G10, G3, G4, G5, G8, and G12 are confident matches (Δnd < 10⁻⁴, Δνd < 0.1) to published OHARA catalog entries. The remaining four glasses (G2, G6, G7, G9, G11, G13) are identified to the glass family level via six-digit code; exact catalog names could not be confirmed against the May 2023 OHARA pocket catalog and may correspond to other vendors (HOYA, HIKARI, CDGM) or to proprietary formulations.

The chromatic correction strategy centers on three mechanisms:

1. **Primary achromatization in GR1** via the Super ED / ED / flint triplet (G2 + G4 vs. G3). The two low-dispersion positive elements and one high-dispersion negative element distribute the achromatic load, reducing individual element curvatures and the associated higher-order monochromatic aberrations.
2. **Focus-group achromatization in GR2** via the anomalous-dispersion G6 (959/175, θgF = 0.660). The patent's conditional expressions (2) and (3) specifically govern this element, requiring νd < 22 and θgF > 0.63 to ensure adequate axial color control in the first focus group.
3. **Rear-group achromatization in GR4** via the G11 + G12 cemented doublet, using a lanthanum heavy flint / light flint pairing.

## Focus Mechanism

The Sony FE 135mm f/1.8 GM uses a **floating inner-focus** system with two independently moving groups and four variable air gaps. The focus groups are:

- **GR2** (G6 + G7 + G8): Moves from object toward image when focusing to close distances.
- **GR3** (G9 + G10): Moves from image toward object when focusing to close distances.

Both GR1 (front group) and GR4 (rear group) are fixed relative to the image plane, which simplifies the mechanical structure, provides weather sealing (the front element does not move), and reduces the total mass of the moving groups.

The variable spacings at the three published focus positions are:

| Gap | Surface | ∞ (β = 0) | −0.03× | MFD (β = −0.25) |
|---|---|---|---|---|
| d1 (GR1 → GR2) | 10 | 3.000 | 3.960 | 10.850 |
| d2 (GR2 → Stop) | 15 | 17.088 | 16.128 | 9.238 |
| d3 (Stop → GR3) | 16 | 12.691 | 11.599 | 5.927 |
| d4 (GR3 → GR4) | 19 | 11.964 | 13.057 | 18.728 |

The total internal track is conserved (sum of d1 + d2 + d3 + d4 = 44.743 mm at all focus positions), confirming that the overall optical length is constant — a hallmark of internal focus designs.

At the marketed MFD of 0.7 m, the patent gives an object distance of 559.6 mm from the front vertex, yielding β = −0.25 (0.25× magnification). The focus travel is approximately 7.85 mm for GR2 and 6.76 mm for GR3, keeping the moving mass small. Sony's implementation uses four XD (extreme dynamic) linear motors — two per group — to achieve rapid, quiet autofocus suitable for both stills and video.

## Aspherical Surfaces

The design has one aspherical surface: the front surface of G5 (surface 9). The patent uses the standard even-polynomial sag equation:

$$Z(h) = \frac{ch^2}{1 + \sqrt{1 - (1+\kappa) c^2 h^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

where $c = 1/R$ is the base curvature and $\kappa$ is the conic constant. The patent uses the convention where $\kappa = 0$ corresponds to a sphere, consistent with the standard $K$ in the data file. The coefficients for surface 9 are:

| Parameter | Value |
|---|---|
| R | 71.0840 mm |
| κ | 0.000000 (sphere) |
| A (A4) | −1.343732 × 10⁻⁶ |
| B (A6) | −3.875437 × 10⁻¹⁰ |
| C (A8) | −7.218747 × 10⁻¹⁴ |
| D (A10) | +1.266821 × 10⁻¹⁶ |

The aspherical departure relative to the best-fit sphere is dominated by the negative A4 term. This progressive flattening weakens the positive power of the surface toward the periphery, directly compensating for the overcorrected spherical aberration that would otherwise accumulate from the strongly positive front group. The patent (¶0077–0078) explicitly notes that this aspherical profile allows negative power to be distributed across multiple elements in GR1 while reducing the total element count, and that it corrects spherical aberration and sagittal coma flare.

Sony designates this element as **XA** (extreme aspherical), indicating a polished glass asphere manufactured with sub-0.01 μm surface form accuracy. The high surface precision eliminates concentric ring structures in the bokeh pattern, which is a specific quality target for GM-series lenses.

## Conditional Expressions

The patent defines five conditional expressions. Example 1 satisfies all five:

| Condition | Expression | Range | Value | Status |
|---|---|---|---|---|
| (1) | f / ff | 0.4 – 1.0 | 0.483 | Satisfied |
| (2) | νF1 | < 22 | 17.47 | Satisfied |
| (3) | θgF | > 0.63 | 0.660 | Satisfied |
| (4) | (r1 + r2) / (r1 − r2) | 1.0 – 10.0 | 1.496 | Satisfied |
| (5) | FGL1 / FGL2 | −12 to −1.5 | −3.18 | Satisfied |

Conditions (1)–(3) govern the chromatic balance and convergence ratio of the front and focus groups. Condition (1) ensures that GR1 + GR2 converge the axial bundle sufficiently to keep the stop diameter and GR3 mass small (¶0052–0054). Conditions (2)–(3) mandate anomalous dispersion glass in GR2 for axial color correction (¶0060–0065). Condition (4) constrains the shape factor of G3 to balance sagittal coma flare (¶0080–0083). Condition (5) governs the power ratio of the two sub-components of GR4 to enable independent correction of axial and peripheral aberrations (¶0085–0089).

Note: The patent's Table 26 lists the condition (5) value for Example 1 as −3.152, while independent computation from the sub-component focal lengths (FGL1 = +225.5 mm, FGL2 = −70.9 mm) yields −3.18. The small discrepancy (≈ 1%) is within the rounding tolerance of the published prescription.

## Verification Summary

All patent-published quantities were independently verified via paraxial y–nu ray trace:

| Quantity | Patent | Computed | Δ |
|---|---|---|---|
| EFL | 130.950 mm | 130.956 mm | +0.006 mm |
| Half-field ω | 9.38° | 9.38° | < 0.01° |
| GR1 focal length | 70.146 mm | 70.193 mm | +0.047 mm |
| GR2 focal length | −49.415 mm | −49.513 mm | −0.098 mm |
| GR3 focal length | 73.516 mm | 73.590 mm | +0.074 mm |
| GR4 focal length | −106.474 mm | −106.610 mm | −0.136 mm |
| f / ff (condition 1) | 0.483 | 0.483 | exact |
| Shape factor (condition 4) | 1.496 | 1.496 | exact |
| FGL1/FGL2 (condition 5) | −3.152 | −3.18 | −0.03 |
| Petzval sum | — | +0.000723 mm⁻¹ | — |
| Petzval radius | — | 1384 mm | — |

The small residuals (< 0.15 mm in group focal lengths) arise from the finite precision of the published prescription data and are well within acceptable tolerance.

## Design Heritage and Context

The Sony FE 135mm f/1.8 GM belongs to the class of fast 135 mm primes that emerged in the late 2010s for mirrorless full-frame systems. While Sony previously offered the A-mount 135mm f/1.8 SAL-135F18Z (a Zeiss Sonnar-type design with 11 elements in 8 groups and a single-group internal focus), the FE GM is an entirely new optical architecture — a four-group P–N–P–N layout with dual floating focus, sharing only the focal length and maximum aperture with its A-mount predecessor.

The patent's prior art discussion (¶0004–0009) cites JP H09-159911 (a three-group design with a single focus group) and JP 2017-173409 (a four-group floating-focus design with large, heavy focus elements). The invention specifically addresses the latter's shortcoming: the excessive size and weight of the focus groups, which limited AF speed. By constraining the convergence ratio (condition 1) so that the axial bundle is already well-converged when it reaches the focus groups, the design achieves small focus-group diameters and low moving mass — enabling the high-speed XD linear motor AF that has become a defining feature of the production lens.

The patent (¶0268) notes that the design targets a focal length of approximately 135 mm for 35 mm full-frame image sensors, suitable for interchangeable-lens digital cameras used for both still and video capture.

## Sources

- WO 2019/187633 A1 (JPWO2019187633A1), "撮像レンズ及び撮像装置," Sony Corporation, published 3 October 2019. Numerical Example 1, Tables 1–5, Figures 1–5.
- Sony Corporation, SEL135F18GM product specifications (sony.ca/electronics/camera-lenses/sel135f18gm/specifications). Accessed 2025.
- OHARA Optical Glass Catalog (May 2023 pocket edition), for glass nd/νd cross-reference.
- HOYA Glass Cross Reference Index, for cross-vendor glass identification.
