# Leica ELCAN 50mm f/2 — Optical Analysis

**Patent:** US 3,649,104 — *Four Component Objective*
**Filed:** July 30, 1970 (German priority: August 1, 1969 — P 19 39 099.9)
**Granted:** March 14, 1972
**Inventors:** Garry Edwards, Walter Mandler, Erich Wagner
**Assignee:** Ernst Leitz GmbH, Wetzlar, Germany
**Design center:** Ernst Leitz Canada (ELCAN), Midland, Ontario

## 1. Context and Production History

US 3,649,104 discloses a family of four-element, four-group photographic objectives across nineteen worked examples. The patent's central thesis is that four surfaces of unusually high refractive power — previously considered uncorrectable — can be combined to yield imaging quality rivaling the more complex double-Gauss ("Gauss-type") designs. The patent expresses this through normalized refractive power conditions on four critical surfaces:

- φ₁₁ (front of L11): 1.5 ≤ φ ≤ 2.0
- φ₂₁ (front of L12): 1.4 ≤ φ ≤ 2.4
- φ₂₂ (rear of L12): −2.0 ≤ φ ≤ −1.0
- φ₃₂ (rear of L13): −3.7 ≤ φ ≤ −2.5

**Example 3** is an f/2, 45° field design — the fastest wide-angle variant in the patent — and is the embodiment most consistent with the production 50mm f/2 ELCAN lens supplied with the Leica KE-7A military camera system. The patent's 19 examples span from f/2 to f/4.3 and field angles from 6° to 45°, demonstrating the versatility of the design form across focal lengths and speed classes. Only Examples 1, 2, and 3 share the f/2, 45° field specification matching the ELCAN production lens; the remaining examples address slower, narrower-field telephoto and long-focus applications. Among the three f/2 variants, Example 3 uses the lowest-index glasses — consistent with the patent's stated goal of employing "the most inexpensive glasses" — making it the most cost-effective candidate for military mass production. Approximately 460 KE-7A kits were produced in 1972 for the U.S. military, plus roughly 55 civilian surplus units. The lens features four air-spaced (non-cemented) elements, a construction chosen specifically for thermal shock resistance and tolerance of explosive concussion in combat environments.

## 2. Prescription — Example 3

The patent prescription is normalized to f = 100 mm. All radii, thicknesses, and spacings are scaled by ×0.5 for the 50 mm production lens. The following table gives the patent-scale values.

| Surface | Radius (mm) | Spacing (mm) | nd | νd | Element |
|:-------:|------------:|-------------:|------:|------:|:-------:|
| r₁ | +37.8820 | 10.3776 | 1.6940 | 54.5 | L11 |
| r₂ | +190.3362 | 0.1922 | 1.0 | — | air |
| r₃ | +32.1397 | 5.9575 | 1.6734 | 46.8 | L12 |
| r₄ | +49.9450 | 3.2670 | 1.0 | — | air |
| r₅ | +200.4813 | 1.5374 | 1.7471 | 27.4 | L13 |
| r₆ | +23.4264 | 21.9082 | 1.0 | — | air |
| r₇ | +95.2488 | 11.5306 | 1.7546 | 34.7 | L21 |
| r₈ | −424.3870 | (BFD) | 1.0 | — | air |

**Back focal distance (s′):** 50.5074 mm (patent scale)

### 2.1 Sign Convention Note

During transcription, the signs of r₅ and r₆ required particular care. The patent's OCR-scanned text is ambiguous on these surfaces, but the correct signs are determined uniquely by requiring: (a) the computed BFD matches the patent's stated s′ = 50.5074 mm, (b) the computed normalized powers match the patent's stated φ values, and (c) the computed EFL confirms the f = 100 normalization. A systematic search over all sign and digit-drop permutations confirms that r₅ = +200.4813 and r₆ = +23.4264 (both positive) is the only combination satisfying all three conditions simultaneously, yielding EFL = 100.002 mm and BFD = 50.510 mm.

This sign pattern is independently confirmed by cross-validation against **Example 1**, which uses the same surface sign structure (r₁ through r₇ all positive, only r₈ negative) and yields EFL = 100.005 mm with BFD = 49.484 mm against the patent's stated s′ = 49.4781 — a match within 0.006 mm.

A minor transcription discrepancy exists for a₃ (L12 thickness): the patent description section gives 5.9575, while the claims section appears to show 5.9375 — likely an OCR or typographical error. Computational verification confirms a₃ = 5.9575 as correct.

### 2.2 Paraxial Verification

Computed via ABCD matrix transfer:

| Parameter | Patent Scale | Production (×0.5) |
|:----------|------------:|------------------:|
| EFL | 100.002 mm | 50.00 mm |
| BFD | 50.510 mm | 25.25 mm |
| FFL | 96.23 mm | 48.12 mm |
| Total track | 105.28 mm | 52.64 mm |
| Track / EFL | 1.053 | 1.053 |

The total track ratio of 1.053 is remarkably compact — barely longer than its own focal length — consistent with the patent's claim that these designs are "shorter by about 15 percent" compared to equivalent triplet objectives.

Normalized surface powers, verified computationally against patent-stated values:

| Surface | Patent φ | Computed φ | Δ |
|:-------:|:--------:|:----------:|:---:|
| φ₁₁ | +1.832 | +1.832 | 0.000 |
| φ₂₁ | +2.095 | +2.095 | 0.000 |
| φ₂₂ | −1.348 | −1.348 | 0.000 |
| φ₃₂ | −3.189 | −3.189 | 0.000 |

All four match to within rounding of the fourth decimal place.

## 3. Element-by-Element Analysis

### 3.1 Element L11 — Front Positive Meniscus

**Shape:** Positive meniscus, convex toward object
**Radii:** R₁ = +37.882, R₂ = +190.336 (production: +18.94, +95.17)
**Thickness:** 10.378 mm (production: 5.19 mm)
**Glass:** nd = 1.6940, νd = 54.5
**Focal length:** +66.3 mm (production: +33.1 mm)

L11 is the strongest positive element, with the shortest positive focal length in the system. Its strongly convex front surface carries the highest positive surface power (φ₁₁ = +1.832). At production scale, L11 is 5.19 mm thick — a substantial piece of glass relative to its 18.94 mm front radius. The large glass path inside L11 introduces higher-order aberration contributions that participate in the balancing of the residual zone corrections that the patent identifies as its key innovation.

**Glass identification:** The nd/νd pairing of 1.6940/54.5 closely matches Schott **LaK9** (nd = 1.6910, νd = 54.71). LaK9 is a lanthanum crown glass. Production records confirm that the first element used LaK9 in the manufactured lens. LaK9 is radioactive due to its lanthanum oxide content, and the slight yellowing observed in surviving ELCAN lenses over decades of storage is characteristic of this glass family.

### 3.2 Element L12 — Second Positive Meniscus

**Shape:** Positive meniscus, convex toward object
**Radii:** R₃ = +32.140, R₄ = +49.945 (production: +16.07, +24.97)
**Thickness:** 5.958 mm (production: 2.98 mm)
**Glass:** nd = 1.6734, νd = 46.8
**Focal length:** +118.0 mm (production: +59.0 mm)

L12 sits only 0.19 mm (patent scale) behind L11 — essentially in contact — forming a closely spaced front doublet. L12's front surface carries the system's second-highest power (φ₂₁ = +2.095), while its rear surface provides a significant negative counter-power (φ₂₂ = −1.348). The air space between L11 and L12 (a₂ = 0.192 mm, production: 0.10 mm) is extraordinarily thin — essentially a polished gap.

**Glass identification:** The nd/νd pairing of 1.6734/46.8 is close to Schott **BaF10** (nd = 1.6700, νd = 47.11). Production records describe this element as using "Leitz glass," suggesting a proprietary formulation.

### 3.3 Element L13 — Diverging Negative Meniscus

**Shape:** Negative meniscus, both surfaces convex toward object
**Radii:** R₅ = +200.481, R₆ = +23.426 (production: +100.24, +11.71)
**Thickness:** 1.537 mm (production: 0.77 mm)
**Glass:** nd = 1.7471, νd = 27.4
**Focal length:** −35.6 mm (production: −17.8 mm)

L13 is the sole diverging element and the thinnest element in the system. The front surface is nearly flat (R₅ = +200.5), while the rear surface is steeply curved (R₆ = +23.4), producing the most extreme power in the entire design: φ₃₂ = −3.189. The patent's central innovation claim rests heavily on this surface. The strongly powered rear surface of L13 generates large negative contributions to spherical aberration, astigmatism, and coma that cancel the correspondingly large positive contributions from the front surfaces of L11 and L12.

**Glass identification:** The nd/νd of 1.7471/27.4 places this glass in the dense flint (SF) region. The closest standard match is Schott **SF4** (nd = 1.7552, νd = 27.58).

### 3.4 Element L21 — Rear Biconvex Positive

**Shape:** Biconvex positive
**Radii:** R₇ = +95.249, R₈ = −424.387 (production: +47.62, −212.19)
**Thickness:** 11.531 mm (production: 5.77 mm)
**Glass:** nd = 1.7546, νd = 34.7
**Focal length:** +104.1 mm (production: +52.0 mm)

L21 is the field-correcting rear element. Both surfaces contribute positive power: the front surface (φ = +0.792) provides the bulk of L21's converging power, while the nearly flat rear surface (φ = +0.178) adds fine-tuning. L21's primary roles are: completing the converging power to achieve f/2, contributing to lateral color correction, and using its substantial thickness to fine-tune field curvature and astigmatism balance.

**Glass identification:** The nd/νd of 1.7546/34.7 falls in the lanthanum flint region. The closest standard match is Schott **LAFN7** (nd = 1.7495, νd = 34.95). Production records confirm L21 used "lanthanum Flint glass."

## 4. Aspherical Surfaces

The patent specifies **no aspherical surfaces.** All eight refractive surfaces are spherical. This is consistent with the patent's design philosophy: correction is achieved entirely through power distribution across four high-power spherical surfaces, combined with judicious glass selection and spacing. The all-spherical construction was also advantageous for the military application, as spherical surfaces are easier to manufacture, more robust to re-polishing in the field, and simpler to test interferometrically.

## 5. Petzval Sum and Field Curvature

| Element | Petzval contribution (×f) |
|:-------:|:-------------------------:|
| L11 | +0.866 |
| L12 | +0.446 |
| L13 | −1.612 |
| L21 | +0.553 |
| **Total** | **+0.253** |

The system Petzval sum is positive and small (Petzval radius ≈ +197 mm at production scale), indicating a slightly undercorrected Petzval field. The dominant negative contribution comes from L13 (−1.612), whose high-index, strongly powered rear surface provides the bulk of the Petzval flattening. The characteristic corner softness at wide apertures — consistently reported by users — is more attributable to residual higher-order astigmatism and coma than to Petzval curvature. Stopping down to f/4 substantially improves corner performance.

## 6. Chromatic Correction Strategy

The four glasses span a wide Abbe number range: 54.5, 46.8, 27.4, 34.7. The **front pair** (L11 + L12) introduces positive longitudinal chromatic aberration. The **negative element** L13, with its very low Abbe number (νd = 27.4, dense flint), provides a strong overcorrecting chromatic contribution. The air-spaced construction means there are no cemented achromatic doublets — achromatization is achieved entirely through power-dispersion balance across separated elements.

## 7. Focusing Mechanism

- **Type:** Unit focusing (entire optical assembly translates as a rigid unit)
- **Close focus:** 0.762 m (30 inches / 2.5 feet)
- **Only BFD changes** during focus — no internal floating groups

Unit focusing is the simplest and most mechanically robust focus implementation, aligning with the lens's military design requirements. The production BFD of 25.25 mm is approximately 2.55 mm shorter than the Leica M flange-to-film distance of 27.80 mm, meaning the rear element (L21) protrudes roughly 2.5 mm into the camera body cavity.

## 8. Aperture Stop

The aperture stop is located in the air gap between L12 and L13 (spacing a₄ = 3.267 mm at patent scale, 1.63 mm at production). The patent does not list the stop as a separate surface in the prescription table. The stop position is inferred from the drawing, where the iris diaphragm is shown just ahead of L13. The production lens has a **10-blade aperture diaphragm** with stops from f/2 to f/16.

## 9. Design Lineage and Significance

The ELCAN 50mm f/2 belongs to the "four-component objective" or "Ernostar derivative" family — characterized by four separated positive-positive-negative-positive singlets. Walter Mandler is reported to have considered the 50mm focal length "overstretched" for this four-element form, which was originally more comfortable in the 90mm range. Nevertheless, the combination of f/2 speed, extremely compact size (total track barely exceeding the focal length), and four-element simplicity was precisely what the military specification required: a lens cheaper to produce than the Summicron, robust enough for combat, and optically adequate for military documentation photography.

## 10. Summary of Glass Types

| Element | Patent nd/νd | Production Glass | Family | Role |
|:-------:|:------------:|:----------------:|:------:|:----:|
| L11 | 1.6940 / 54.5 | LaK9 (lanthanum crown) | Crown | Primary positive power |
| L12 | 1.6734 / 46.8 | Leitz proprietary (≈BaF10) | Barium flint | Secondary positive |
| L13 | 1.7471 / 27.4 | Dense flint (≈SF4) | Dense flint | Sole diverging element |
| L21 | 1.7546 / 34.7 | LAFN7 (lanthanum flint) | LaF | Rear positive |

All four glasses are conventional polished types with no anomalous partial dispersion (APD). The patent explicitly notes that the "most inexpensive glasses" were used, keeping manufacturing costs comparable to those of triplet objectives despite the superior four-element performance.
