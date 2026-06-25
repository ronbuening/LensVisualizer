# JP 2013-3324 A — Example 2: Optical Design Analysis

## Patent Reference and Lens Identification

**Patent:** JP 2013-3324 A (Japanese Unexamined Patent Application Publication)
**Title:** 大口径レンズ (Large-Aperture Lens)
**Applicant:** Sigma Corporation (株式会社シグマ), Kawasaki, Kanagawa, Japan
**Inventor:** Uemura Yutaka (上村 豊)
**Filed:** June 16, 2011 (Priority: JP 2011-133790)
**Published:** January 7, 2013
**Classification:** G02B 13/00, G02B 13/18

This patent describes a family of fast normal-prime lens designs with f/1.4 aperture and inner-focus capability, optimized for lightweight focus groups suitable for video autofocus. The patent contains nine numerical examples spanning a range of element counts (8–11) and group architectures. **Example 2** is analyzed here. It is a 9-element / 7-group design with f = 25.00 mm, F/1.44, and 2ω = 48.61°.

### Identification as the Panasonic Leica DG Summilux 25mm f/1.4 ASPH

Internet speculation — notably from 43rumors.com and DPReview forum commentary — has linked this Sigma patent to the **Panasonic Leica DG Summilux 25mm f/1.4 ASPH (H-X025)**, released in 2011. The structural correspondence is extensive:

| Feature | Patent Example 2 | Panasonic Leica DG 25/1.4 |
|---|---|---|
| Elements / Groups | 9 / 7 | 9 / 7 |
| Aspherical lenses | 2 (3 surfaces) | 2 |
| Ultra-high-index element | 1 (nd = 2.001) | 1 (UHR) |
| Focus type | Inner focus (G2 → image) | Inner focus |
| Focal length | 25.00 mm | 25 mm |
| Maximum aperture | f/1.44 | f/1.4 |
| Image circle | ~22.6 mm diameter | Micro Four Thirds (~21.6 mm) |

However, the patent applicant is **Sigma Corporation**, not Panasonic or Leica Camera AG. Third-party reports indicate that for the Panasonic Leica DG Summilux line, Leica designs the optics and Panasonic manufactures in Japan. The design attribution therefore remains **unconfirmed**. Sigma may have contributed to the optical design under contract (OEM), or this may be a parallel Sigma design for the same focal-length/aperture class that was never independently produced. Sigma never released a 25mm f/1.4 lens for Micro Four Thirds.

The analysis below treats Example 2 strictly as a Sigma patent design. Where the Panasonic production lens is mentioned, it is for structural comparison only.

---

## Optical Architecture

Example 2 is a **modified double-Gauss** design arranged in three principal groups with positive–negative–positive power distribution:

- **G1** (positive, f = +32.8 mm): The main imaging group, comprising 7 elements in 5 air-separated sub-groups. G1 is subdivided into G1A (negative, f = −71.8 mm) and G1B (positive, f = +22.7 mm). G1 is fixed during focusing.
- **Aperture stop**: Fixed between G1 and G2, at the rear of G1 (¶0069).
- **G2** (negative, f = −40.3 mm): A single negative meniscus element (L8). This is the **focus group**, moving toward the image to focus from infinity to close range.
- **G3** (positive, f = +26.3 mm): A single biconvex element (L9). G3 is fixed; the back focal distance does not change during focusing.

The overall track length is 72.0 mm (front vertex to image), and the back focal distance is 21.16 mm — yielding BFD/EFL = 0.85, confirming this is **not** a retrofocus design (BFD < EFL). The BFD exceeds the Micro Four Thirds flange distance (19.25 mm) by only 1.91 mm, leaving minimal clearance for the mount and any protective rear element recess. This tight margin is characteristic of non-retrofocus fast primes for short-flange mirrorless systems.

The internal structure of G1 is defined by the **8.27 mm air gap** between L2 and L3 — the largest air space in the front group. This is the characteristic Gauss divergence gap, where the diverging beam from the negative front sub-group (G1A) crosses to the positive rear sub-group (G1B). The gap's length is critical: it controls the separation between the principal planes of G1A and G1B, and by extension the field curvature and coma balance of the entire front group.

The aperture stop is placed between G1 and G2 rather than inside G1. The patent explains this choice at ¶0024–¶0027: placing the stop inside G1 would force G1 to be split into two mechanically separate barrel groups, making decentration adjustment of the rear sub-group (G1B) difficult because it would be sandwiched between the diaphragm unit and the focus mechanism. By placing the stop behind all of G1, the entire G1 barrel can be manufactured as a single unit with a single decentration adjustment, improving manufacturing yield.

### Power Distribution

| Group | Focal length | Power | Role |
|---|---|---|---|
| G1A | −71.8 mm | Negative | Front collector / field corrector |
| G1B | +22.7 mm | Positive | Main convergence, Gauss core |
| G1 (overall) | +32.8 mm | Positive | Primary imaging |
| G2 | −40.3 mm | Negative | Focus group (diverging relay) |
| G3 | +26.3 mm | Positive | Field flattener / reimaging |

### Petzval Sum

The Petzval sum is +0.00332 mm⁻¹, giving a Petzval radius of +301.6 mm — approximately 12× the focal length. This is a well-corrected value for a fast prime. The large positive Petzval radius indicates a gently inward-curving image surface, which the designer partially compensates with the strong positive field-flattening action of L9 in G3.

---

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

nd = 2.00060, νd = 25.46. Glass: **TAFD40 (HOYA)** — confirmed exact match. f = +29.8 mm.

L1 is the front element and the design's **ultra-high refractive index (UHR)** element. TAFD40 is one of the highest-index optical glasses commercially available, a niobium/tantalum dense flint with nd > 2.0. Its extreme refractive index allows the front meniscus to achieve strong positive power with relatively gentle curvature (R1 = +21.18, R2 = +63.53), which reduces the marginal ray's angle of incidence across the front surface and suppresses high-order spherical aberration at the full f/1.4 aperture.

The trade-off is TAFD40's high dispersion (νd = 25.46), which introduces substantial chromatic aberration. This is corrected downstream by the negative elements in G1A (L2) and the cemented doublets in G1B. The patent identifies L1 as the most distinctive element in the front group.

### L2 — Negative Meniscus, convex to object

nd = 1.83481, νd = 42.72. Glass: **S-LAH55V (OHARA)** — confirmed exact match. f = −16.3 mm.

L2 is a strongly negative meniscus (R1 = +58.35, R2 = +10.98). Together with L1, it forms **sub-group G1A**, which has overall negative power (f = −71.8 mm). G1A's negative front group functions as a field corrector: it pre-bends peripheral ray bundles to reduce the angle of incidence on the strongly curved inner surfaces of G1B, controlling coma and oblique spherical aberration for the steep lower marginal rays at f/1.4.

S-LAH55V is a lanthanum crown with moderate dispersion, making L2 an effective chromatic partner to L1. The L1/L2 pair partially achromatizes the front group despite both being meniscus elements rather than a classical crown-flint doublet.

### L3 + L4 — Cemented Doublet (negative overall, f = −106.4 mm)

**L3** (biconcave negative): nd = 1.84666, νd = 23.78. Glass: **S-TIH53 (OHARA)** — confirmed exact match. f = −11.1 mm.
**L4** (biconvex positive): nd = 1.88300, νd = 40.80. Glass: **S-LAH58 (OHARA)** — near-exact match (Δνd ≈ 0.04 from catalog value of 40.76). f = +14.5 mm.

This cemented doublet sits at the front of G1B and is the first element group the converging beam encounters after the wide air gap from G1A. The classic Gauss design places a strongly curved negative meniscus here; this patent generalizes it to a cemented biconcave/biconvex pair. The high-dispersion flint L3 (S-TIH53, νd = 23.78) paired with the lower-dispersion lanthanum crown L4 provides chromatic correction at the junction surface (R = +24.97), where the curvature mismatch between the two glasses generates the achromatizing effect.

The doublet's combined power is weakly negative (f = −106 mm), so its primary role is **not** power generation but rather the correction of longitudinal chromatic aberration and reduction of coma flare generated by the strong G1A/G1B air gap.

### L5 — Positive Meniscus, concave to object

nd = 1.88300, νd = 40.80. Glass: **S-LAH58 (OHARA)**. f = +109.1 mm.

L5 is a weakly positive meniscus (R1 = −54.33, R2 = −35.30) with both surfaces concave toward the object (¶0068: "物体側に凹面を向けた正メニスカスレンズ"). It is air-spaced from both the L3+L4 doublet and the L6+L7 doublet, functioning as a corrector plate within the Gauss core. Its weak power means it contributes negligibly to EFL, but the meniscus shape generates high-order aberration correction — particularly for oblique spherical aberration and coma at the f/1.4 aperture.

The glass (nd = 1.883) is the same high-index lanthanum crown used in L4 and L7. This three-fold reuse reduces the number of distinct glass types in the design to just five, simplifying manufacturing and inventory.

### L6 + L7 — Cemented Doublet (positive overall, f = +28.7 mm)

**L6** (negative meniscus, convex to object): nd = 1.84666, νd = 23.78. Glass: **S-TIH53 (OHARA)**. f = −60.3 mm.
**L7** (biconvex positive): nd = 1.88300, νd = 40.80. Glass: **S-LAH58 (OHARA)**. f = +19.5 mm.

This is the rear doublet of G1B and the last element before the aperture stop. It mirrors the glass pairing of L3+L4 — S-TIH53 flint cemented to lanthanum crown — forming the image-side half of the quasi-symmetric Gauss core. The doublet has strong positive power (f = +28.7 mm), providing most of G1B's convergence.

The junction surface (R = +21.43) is tightly curved, creating a strong refracting interface between the low-dispersion crown and high-dispersion flint. This is the primary chromatic correction surface in the rear half of G1, balancing the dispersion introduced by L1 and L3 in the front half. The near-symmetry of the L3+L4 and L6+L7 doublets about the air space containing L5 is characteristic of the Gauss design's coma-correcting geometry.

### Aperture Stop (STO)

The stop is located 1.018 mm behind L7's rear surface (the air gap from surface 12) and is fixed during focusing. The stop semi-diameter at full aperture determines the f/1.44 speed. The distance from the stop to the image plane is Ds = 39.4 mm.

### L8 — Negative Meniscus, convex to object (1× Aspherical)

nd = 1.73077, νd = 40.50. Glass: **M-LAF81 (Hoya, 731405)** — confirmed coefficient-backed match. f = −40.3 mm.

L8 is the sole element of **G2, the focus group**. It is a negative meniscus with R1 = +178.95 (nearly flat) and R2 = +25.25, and its object-side surface (S14) is aspherical. This is the lightest possible focus group — a single element — which the patent cites as essential for fast, quiet autofocus during video recording (¶0001, ¶0028).

The aspherical profile on S14 carries a strong negative A4 coefficient (−1.460×10⁻⁵), producing approximately −57 μm of departure from the spherical base at h = 8 mm. This negative departure on an already weakly convex surface (R = +179 mm) means the asphere is **flatter than the sphere** at the periphery — effectively reducing the surface's refractive power for marginal rays. The correction targets the residual spherical aberration that varies during focus travel: as L8 shifts toward the image, the ray heights on S14 change, and the asphere's profile is tailored to keep spherical aberration stable across the focus range. This is the patent's central insight for achieving low focus-breathing and minimal aberration variation.

**Focus travel:** L8 moves 1.14 mm toward the image when focusing from infinity to the patent's 1:40 magnification point (d0 ≈ 998 mm). The gap ahead of L8 (d13) increases from 2.80 to 3.94 mm, while the gap behind L8 (d15) decreases from 10.22 to 9.08 mm. The total gap sum is conserved exactly (Δd13 + Δd15 = 0), confirming pure inner-focus with no change in overall length. At the production MFD of 0.30 m, paraxial conjugate solving yields d13 = 7.85 mm and d15 = 5.17 mm — a total focus travel of approximately 5.05 mm and magnification of approximately 1:9.

### L9 — Biconvex Positive (2× Aspherical)

nd = 1.77250, νd = 49.62. Glass: **S-LAH66 (OHARA)** — near-exact match (Δνd ≈ 0.02 from catalog value of 49.60). f = +26.3 mm.

L9 is the sole element of **G3**, the fixed rear group. Both surfaces (S16 and S17) are aspherical, making L9 the most heavily corrected element in the design. G3's strong positive power (f = +26.3 mm, nearly equal to the system EFL) performs two critical functions:

1. **Field flattening.** L9's positive power at a large distance from the stop bends peripheral ray bundles to reduce the exit angle at the image plane. This is essential for digital sensors, which require near-telecentric illumination at the corners. The Petzval contribution of L9 partially offsets the inward field curvature from the positive front groups.

2. **Astigmatism and distortion correction.** The dual aspherical surfaces allow independent control of sagittal and tangential field curvature. On S16 (front), the positive A4 = +2.36×10⁻⁶ adds slight overcorrection to the spherical base, while on S17 (rear, R = −27.10), the stronger positive A4 = +1.33×10⁻⁵ flattens the concave surface at the rim, reducing positive power for marginal rays. These two aspheres work as a pair to control both on-axis and off-axis residual aberrations simultaneously.

---

## Glass Identification and Selection

The design uses only **six distinct glass types** across nine elements — a remarkably constrained palette for a 9-element f/1.4 design.

| Glass | nd | νd | Vendor match | Elements | Class |
|---|---|---|---|---|---|
| TAFD40 | 2.00060 | 25.46 | HOYA (exact) | L1 | Ultra-high-index dense flint |
| S-LAH55V | 1.83481 | 42.72 | OHARA (exact) | L2 | Lanthanum crown |
| S-TIH53 | 1.84666 | 23.78 | OHARA (exact) | L3, L6 | Dense titanium flint |
| S-LAH58 | 1.88300 | 40.80 | OHARA (Δνd = 0.04) | L4, L5, L7 | Lanthanum crown |
| M-LAF81 | 1.73077 | 40.50 | Hoya (exact, 731405) | L8 | Moldable lanthanum flint |
| S-LAH66 | 1.77250 | 49.62 | OHARA (Δνd = 0.02) | L9 | Lanthanum crown |

The current labels use coefficient-backed catalog rows for every powered glass class. HOYA is selected where it gives the exact high-index or moldable match (TAFD40 for L1, M-LAF81 for L8), while OHARA remains the closest catalog-backed labeling for the repeated S-TIH53/S-LAH58 doublets and the S-LAH66 rear asphere.

### Chromatic Strategy

The design's chromatic correction relies on two mechanisms:

1. **Cemented doublet achromatism.** Both cemented doublets (L3+L4, L6+L7) pair the high-dispersion S-TIH53 flint (νd = 23.78) with the lower-dispersion lanthanum crown S-LAH58 (νd ≈ 40.8). The large Δνd ≈ 17 at each junction provides strong primary chromatic correction.

2. **Front-element dispersion compensation.** L1 (TAFD40, νd = 25.46) contributes large positive chromatic aberration due to its strong power and high dispersion. L2 (S-LAH55V, νd = 42.72), though a meniscus rather than a classic flint, partially compensates via its negative power and moderate dispersion. The residual is absorbed by the doublets downstream.

No ED (extra-low dispersion) or anomalous-partial-dispersion glasses are used. The patent does not publish line indices (nC, nF, ng), so secondary-spectrum performance cannot be assessed from the prescription alone. This is consistent with a standard achromat rather than an apochromatic design.

---

## Focus Mechanism

The lens employs **inner focus** via the single-element negative G2 group (L8).

| Parameter | Infinity | Close (1:40, patent) | Close (MFD 0.30 m, derived) |
|---|---|---|---|
| d13 (stop → L8) | 2.800 mm | 3.938 mm | 7.854 mm |
| d15 (L8 → L9) | 10.219 mm | 9.081 mm | 5.165 mm |
| Bf (L9 → image) | 21.160 mm | 21.160 mm | 21.160 mm |
| EFL | 25.00 mm | 25.32 mm | 26.12 mm |
| Fno | 1.44 | 1.47 | — |

At the patent's verification point (1:40 magnification, d0 = 998 mm), L8 translates 1.14 mm toward the image. The gap conservation is exact (Δd13 + Δd15 = 0), confirming that G1 and G3 are both stationary and the overall length is constant during focusing.

The production Panasonic Leica DG Summilux 25mm f/1.4 achieves MFD = 0.30 m — substantially closer than the patent's verification point. Paraxial conjugate solving for the production MFD yields d13 = 7.85 mm and d15 = 5.17 mm, corresponding to approximately 5.1 mm of focus travel and a magnification of roughly 1:9. The data file encodes these derived close-focus values.

The focus group consists of a single meniscus element weighing on the order of 1–2 grams, which enables fast, quiet stepping-motor drive suitable for contrast-detection AF during video recording. The patent emphasizes this lightweight focus group as the design's primary advantage over classical Gauss lenses that use whole-lens focusing (¶0008–¶0013).

---

## Aspherical Surfaces

Three surfaces are aspherical, distributed across two elements. The patent specifies the standard conic sag equation (¶0126–0127):

$$z = \frac{(1/r)\,y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4\,y^4 + A_6\,y^6 + A_8\,y^8 + A_{10}\,y^{10} + A_{12}\,y^{12}$$

All three surfaces use K = 0 (spherical base), so the aspherical departure is entirely carried by the polynomial terms A4–A12.

### Surface 14 (L8 front — focus element)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | −1.45960 × 10⁻⁵ |
| A6 | −4.88750 × 10⁻⁸ |
| A8 | +1.60790 × 10⁻⁹ |
| A10 | −1.31650 × 10⁻¹¹ |
| A12 | +3.93750 × 10⁻¹⁴ |

At the estimated marginal ray height of ~8 mm, the total departure is approximately **−57 μm** (the asphere is flatter than the base sphere). The dominant term is A4, contributing −60 μm; the higher-order terms oscillate in sign, providing fine correction. The negative departure on this weakly convex surface (R = +178.9 mm) reduces peripheral power, functioning as a spherical-aberration compensator that tracks with focus position as L8 translates along the axis.

### Surface 16 (L9 front)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | +2.35710 × 10⁻⁶ |
| A6 | +4.18840 × 10⁻⁷ |
| A8 | −8.84660 × 10⁻⁹ |
| A10 | +8.62400 × 10⁻¹¹ |
| A12 | −2.88020 × 10⁻¹³ |

At h ≈ 7 mm, the higher-order terms dominate the profile shape. The A6 term contributes substantially at this height, partially cancelled by A8, with A10 adding further correction. This oscillatory high-order profile is characteristic of a surface designed to correct field-dependent aberrations — the asphere steepens the rim to increase convergence of peripheral field rays, correcting both sagittal and tangential field curvature simultaneously.

### Surface 17 (L9 rear)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | +1.32510 × 10⁻⁵ |
| A6 | +2.76170 × 10⁻⁷ |
| A8 | −5.50220 × 10⁻⁹ |
| A10 | +5.28870 × 10⁻¹¹ |
| A12 | −1.63960 × 10⁻¹³ |

At h ≈ 6 mm, the departure is approximately +24 μm. The A4 term dominates (+17 μm), with each successive term contributing smaller corrections. S17 is the rear surface of biconvex L9 — it is convex toward the image (R = −27.10). The positive aspherical departure makes the surface **less strongly convex** at the periphery, reducing positive power for marginal rays. This is the conjugate correction to S16's steepening: S16 adds convergence at the rim while S17 subtracts it, and the pair together shape the exit wavefront to achieve flat-field imaging across the Micro Four Thirds frame.

### Manufacturing Note

L8 is now labeled as Hoya M-LAF81, a moldable lanthanum flint that exactly matches the patent nd/νd tuple and the 731405 code. L9 remains an OHARA S-LAH66 class match rather than a named moldable grade. Panasonic product literature describes the lens as using glass-molded aspherical lenses, so the production L9 may use a moldable equivalent with the same nominal nd/νd even though the patent does not specify the manufacturing method for each aspherical surface.

---

## Conditional Expressions

The patent defines seven conditional inequalities governing the design space. Example 2's computed values (with system EFL = 25.00 mm) fall within all specified ranges:

| Condition | Expression | Range | Example 2 |
|---|---|---|---|
| (1) | \|f2/f\| | 0.85 – 2.5 | 1.61 ✓ |
| (2) | \|Ds/f2\| | 0.75 – 2.0 | 0.98 ✓ |
| (3) | f1/f | 0.5 – 2.0 | 1.31 ✓ |
| (4) | \|f1A/f1\| | 1.0 – 5.0 | 2.87 (patent table) † |
| (5) | \|f1B/f1\| | 0.5 – 1.5 | 0.91 (patent table) † |
| (6) | f3/f | 0.7 – 1.5 | 1.05 ✓ |
| (7) | β2/β3 | 4.0 – 50.0 | 25.80 (patent table) |

Values marked ✓ were independently verified by ABCD paraxial ray trace and match the patent table. Values marked † are taken from the patent's own table on page 23; independent ABCD-matrix computation yields |f1A/f1| = 2.19 and |f1B/f1| = 0.69. The systematic discrepancy in conditions (4) and (5) appears across all nine examples and likely arises from a difference in how the patent's design software defines sub-group focal lengths (e.g., including the inter-sub-group air gap as part of one sub-group, or using a different principal-plane convention). The system-level conditions (1)–(3) and (6), which use the full group G1 and system EFL, all match exactly.

Condition (1) constrains G2's negative power: too strong (below 0.85) increases decentration sensitivity and focus-dependent aberration variation, requiring more elements in the focus group; too weak (above 2.5) requires excessive focus travel, enlarging the lens.

Condition (7) governs focus breathing — the ratio of G2 and G3 transverse magnifications determines how much the image magnification changes during focusing. The relatively high value of 25.80 for Example 2 suggests moderate focus breathing, which the patent acknowledges as a trade-off against keeping G1's power manageable without aspherical surfaces in the front group (¶0055).

---

## Verification Summary

| Parameter | Computed | Patent | Error |
|---|---|---|---|
| EFL (infinity) | 24.998 mm | 25.00 mm | 0.007% |
| EFL (close, 1:40) | 25.324 mm | 25.32 mm | 0.014% |
| \|f2/f\| | 1.614 | 1.61 | rounding |
| \|Ds/f2\| | 0.977 | 0.98 | rounding |
| f1/f | 1.311 | 1.31 | rounding |
| f3/f | 1.053 | 1.05 | rounding |
| Variable gap conservation | 0.0000 mm | — | exact |
| Petzval sum | +0.00332 mm⁻¹ | — | — |
| Image circle diameter | 22.58 mm | — | — |

The computed EFL agrees with the patent value to better than 0.02% at both infinity and close focus, confirming the prescription transcription. All independently verifiable conditional expressions match the patent table exactly at stated precision. The image circle (22.6 mm) slightly exceeds the Micro Four Thirds sensor diagonal (21.6 mm) by approximately 4%, providing corner illumination margin consistent with production practice.

---

## Sources

1. JP 2013-3324 A. *Large-Aperture Lens.* Sigma Corporation / Uemura Yutaka. Published January 7, 2013. Example 2 (数値実施例2), ¶0065–0071, ¶0131.
2. OHARA Optical Glass Catalog (2024 edition). Cross-referenced for S-LAH55V, S-TIH53, S-LAH58, and S-LAH66.
3. HOYA Optical Glass Catalog. Cross-referenced for TAFD40, M-LAF81, and TAFD30 alternate matches.
4. Panasonic. *LEICA DG SUMMILUX 25mm / F1.4 II ASPH. (H-XA025) Product Page.* Referenced for production lens specifications (9 elements / 7 groups, 2 aspherical lenses, 1 UHR element, MFD 0.30 m, 46 mm filter, inner focus with stepping motor).
