# Olympus Zuiko Auto-T 85mm f/2 — Optical Design Analysis

## Patent: US 4,063,802 · Embodiment 1

**Inventors:** Toshihiro Imai, Yoshitsugi Ikeda
**Assignee:** Olympus Optical Co., Ltd., Tokyo, Japan
**Filed:** July 14, 1976 (Japanese priority: July 18, 1975)
**Granted:** December 20, 1977

---

## 1. Overview

US 4,063,802 describes a compact telephoto lens system of four components comprising five elements: two positive meniscus lenses, one negative meniscus lens, and one positive cemented doublet. The patent presents four numerical embodiments, all normalized to f = 100 mm. Embodiment 1 is analyzed here as the configuration most closely associated with the production Olympus Zuiko Auto-T 85mm f/2 for the OM system.

The design achieves a telephoto ratio of only 1.07, meaning the physical length from front vertex to image plane is just 7% longer than the focal length. For comparison, prior art designs of this type (such as the lens disclosed in Japanese Patent Publication No. 9466/55) had telephoto ratios of 1.2 or higher. This compactness was a primary design objective and is reflected in the twelve inequality conditions the patent specifies. All twelve conditions are satisfied by Embodiment 1.

The design is entirely spherical — no aspherical surfaces are used on any element.

### Production Context

The Olympus Zuiko Auto-T 85mm f/2 was produced in at least three major variants across the OM system's lifetime:

- **V1** (~1972): 6 elements in 4 groups, designated "F.Zuiko" (where the prefix "F" indicates six elements per the Olympus naming convention). This earlier design corresponds to a separate patent (US 3,848,972, Nakamura, 1974), which is listed as a reference in the present patent.
- **V2/V3/V4** (~1979 onward): 5 elements in 4 groups, designated "Zuiko" (the element-count prefix was dropped for later multicoated lenses). These versions correspond to the present patent, US 4,063,802.

The redesign from 6 to 5 elements eliminated one element while improving sharpness, contrast, and chromatic aberration correction, particularly at wide apertures.

### Key Production Specifications (Manufacturer)

| Parameter | Value |
|---|---|
| Focal length | 85 mm |
| Maximum aperture | f/2 |
| Minimum aperture | f/16 |
| Optical construction | 5 elements / 4 groups |
| Minimum focus distance | 0.85 m (1:6.9) |
| Angle of view | 29° |
| Filter diameter | 49 mm |
| Aperture blades | 8 |
| Dimensions (Ø × L) | 60 × 48 mm |
| Weight | 260 g |
| Mount | Olympus OM |

Note: The patent computes F/2.04 for Embodiment 1, while the production lens is marketed as f/2. This ~2% rounding is standard practice — manufacturers round to the nearest conventional f-stop for commercial designation.

---

## 2. Aspherical Surfaces

**There are no aspherical surfaces in this design.** The patent makes no reference to aspherical coefficients, conic constants, or polynomial surface departures anywhere in the text, claims, or numerical data. All nine optical surfaces are purely spherical. The aberration correction is achieved entirely through the choice of radii, spacings, and glass types across the five elements.

This is consistent with the design's era (mid-1970s) and the moderate aperture (f/2) and field angle (2ω ≈ 28°). Aspherical surfaces were not yet commonly employed in consumer SLR lenses at this time, and the telephoto configuration — with its relatively gentle ray angles compared to wide-angle or high-speed designs — does not demand aspherical correction to achieve adequate performance.

---

## 3. Optical Layout — Element by Element

The lens comprises four components arranged in a classical telephoto configuration: a positive front group (Components 1–2) followed by a negative spacer element (Component 3) and a positive cemented doublet (Component 4). The aperture stop is located in the large air gap d₆ = 20.05 mm between Components 3 and 4. (The patent prescription table does not include an explicit stop surface; its position is inferred from Fig. 1, which clearly shows the iris diaphragm in this gap. The exact axial position within the 20.05 mm gap is not specified.)

All prescription data below is at the patent normalization of f = 100 mm. To obtain production values at f = 85 mm, multiply all linear dimensions (R, d, sd) by 0.8503.

### 3.1 Element L1 — Positive Meniscus (Component 1)

| Surface | R (mm) | d (mm) | Medium after |
|---|---|---|---|
| r₁ (front) | +59.514 | 7.34 | nd = 1.72 |
| r₂ (rear) | +387.226 | 0.18 (air gap) | air |

**Shape:** Both radii are positive, forming a meniscus convex toward the object. The front surface (R = 59.5) is far more strongly curved than the nearly-flat rear surface (R = 387.2), giving the element a steeply convex front and gently convex rear.

**Focal length:** f_L1 ≈ +96.8 mm (thick-lens, ABCD matrix computation)

**Glass:** nd = 1.720, νd = 50.25 (six-digit code: 720/503). This places the glass in the lanthanum crown (LaK) family. The nearest modern catalog match is OHARA S-LAH53 (nd = 1.720, νd = 50.31, Δνd = 0.06), though the 1970s glass may have been a now-discontinued formulation from OHARA or HOYA. Confidence: family-level.

**Optical role:** L1 is the first of two strong positive elements that collectively form the front converging group. Its high refractive index (1.72) is mandated by condition (9) of the patent (n₁ > 1.68) and serves two purposes: it provides converging power while keeping the Petzval sum low. A high-index positive element contributes less to field curvature than an equivalent low-index positive element. The meniscus shape directs the strongly curved surface toward the incoming collimated beam, which reduces the angle of incidence at each surface and thereby limits spherical aberration. No patent condition directly constrains L1's radii; instead, its curvature is set to balance power sharing with L2 while maintaining the total front-group focal length within condition (1) (0.4f < f₁₂ < 0.5f).

### 3.2 Element L2 — Positive Meniscus (Component 2)

| Surface | R (mm) | d (mm) | Medium after |
|---|---|---|---|
| r₃ (front) | +31.522 | 12.26 | nd = 1.623 |
| r₄ (rear) | +64.950 | 4.10 (air gap) | air |

**Shape:** Again both radii are positive, forming a meniscus convex toward the object. L2 has a more deeply curved front surface (R = 31.5) and is considerably thicker (12.26 mm) than L1, making it the most massive element in the design.

**Focal length:** f_L2 ≈ +86.2 mm

**Glass:** nd = 1.623, νd = 58.14 (six-digit code: 623/581). This glass falls in the dense phosphate crown (SK/PSK) family. No exact match was found in modern catalogs; it is likely a proprietary melt or discontinued catalog type from the 1970s OHARA or HOYA catalogs. The Abbe number (58.14) satisfies condition (12) (ν₁, ν₂ > 45), ensuring low chromatic contribution from the front group. Confidence: family-level.

**Optical role:** L2 is the strongest single element in the design, slightly more powerful than L1 (f_L2 ≈ 86 mm vs f_L1 ≈ 97 mm). Together with L1, it produces a combined focal length of f₁₂ = 45.3 mm — substantially shorter than the system focal length of 100 mm. This strong convergence is essential to the telephoto compression: it is the short f₁₂ that allows the back focal distance to be reduced, achieving the 1.07 telephoto ratio. L2's front radius r₃ is tightly constrained by condition (3) (0.28f < r₃ < 0.35f = 28.0 to 35.0 mm; actual r₃ = 31.522), and its rear radius r₄ by condition (4) (0.6f < r₄ < 0.75f = 60.0 to 75.0 mm; actual r₄ = 64.950). These radii are critical for spherical aberration control: too-short radii undercorrect, while too-long radii overcorrect.

### 3.3 Element L3 — Negative Meniscus (Component 3)

| Surface | R (mm) | d (mm) | Medium after |
|---|---|---|---|
| r₅ (front) | +145.777 | 1.65 | nd = 1.7847 |
| r₆ (rear) | +21.474 | 20.05 (air gap to stop/rear group) | air |

**Shape:** Both radii are positive, but the rear surface (R = 21.5) is far more strongly curved than the nearly flat front (R = 145.8). This produces a meniscus concave toward the image side — the classic "diverging telephoto spacer" shape. The element is thin (1.65 mm), consistent with its role as a field-flattening diverger rather than a power-sharing refractive element.

**Focal length:** f_L3 ≈ −32.3 mm (strong negative power)

**Glass:** nd = 1.7847 (1.78472 at full precision from Embodiments 3–4), νd = 25.71 (six-digit code: 785/257). This is a dense flint glass in the SF family. The best match is **HOYA FD110** (nd = 1.78472, νd = 25.71), an exact match at full catalog precision. The low Abbe number (25.71) satisfies condition (12) (ν₃ < 28), which is necessary for chromatic aberration management: the strongly dispersive negative element partially compensates for the chromatic contribution of the positive front group. Confidence: high (exact match).

**Optical role:** L3 is the most optically consequential element despite being the thinnest. Its strong negative power (f ≈ −32 mm) accomplishes several critical tasks simultaneously:

1. **Telephoto compression.** L3's divergence lengthens the effective focal length of rays exiting the front group, allowing the entire system to achieve f = 100 mm while the front-group focal length is only 45.3 mm. Without L3, the back focal distance would be far too short for SLR mirror clearance.

2. **Petzval sum correction.** The high refractive index (1.7847) is critical here. The Petzval contribution of a negative element is negative (flattening), and a higher index reduces the magnitude of that contribution. The patent achieves a normalized Petzval sum of 0.140, compared to 0.292 for the prior art — a dramatic improvement in field flatness.

3. **Spherical aberration balancing.** The strongly curved rear surface r₆ introduces undercorrected spherical aberration that balances the overcorrection from the front group. Conditions (5) and (6) jointly constrain r₅ and r₆ to maintain this balance.

4. **Coma symmetry.** The condition |r₆/r₈| ≈ 1.0 (condition 7: 0.98 < |r₆/r₈| < 1.03; actual value 1.002) means the rear surface of L3 (r₆ = +21.474) and the cemented junction of the doublet (r₈ = −21.424) have nearly equal radii of curvature magnitude but opposite sign. These two surfaces face each other across the stop gap from opposite sides, creating approximate local concentric symmetry around the aperture. This exploits the classical principle that surfaces arranged symmetrically about the stop tend to cancel odd-order aberrations, particularly coma. The near-symmetry balances upper and lower coma, enabling the lens to be used with slight, well-controlled residual coma for a soft-focus portrait effect at wide apertures — a deliberate design feature noted in the patent text.

### 3.4 Elements L4 + L5 — Positive Cemented Doublet (Component 4)

| Surface | R (mm) | d (mm) | Medium after |
|---|---|---|---|
| r₇ (L4 front) | +174.254 | 8.94 | nd = 1.7 |
| r₈ (junction) | −21.424 | 1.06 | nd = 1.583 |
| r₉ (L5 rear) | −163.873 | BFD | air |

**L4 shape:** r₇ > 0, r₈ < 0 → biconvex. The front surface is very weakly curved (R = 174.3), while the cemented rear surface is strongly concave (R = −21.4). This produces a thick, asymmetric biconvex element with most of the curvature concentrated at the cemented junction.

**L5 shape:** r₈ < 0, r₉ < 0, with |r₈| < |r₉| → negative meniscus, concave toward the object. The element is thin (1.06 mm) and acts primarily as a chromatic corrector rather than a power element.

**Combined focal length:** f₄₅ ≈ +78.0 mm (thick-lens doublet)
**L4 alone (in air):** f_L4 ≈ +27.8 mm
**L5 alone (in air):** f_L5 ≈ −42.4 mm

**L4 glass:** nd = 1.700, νd = 48.08 (six-digit code: 700/481). Lanthanum crown (LaK) family. The index satisfies conditions (9) (n₄ > 1.68) and (10) (n₄/n₅ > 1.05; actual ratio = 1.074). No exact catalog match was found in modern databases; nd = 1.70 is an unusual value that may correspond to a discontinued 1970s glass type. Confidence: family-level.

**L5 glass:** nd = 1.583 (1.58313 at full precision from Embodiment 4), νd = 59.36 (six-digit code: 583/594). Barium crown (BaK) family. The nearest match is **OHARA S-BAL42** (nd = 1.58313, νd = 59.37, Δνd = 0.01). Confidence: high (near-exact match).

**Optical role:** The cemented doublet serves as the achromatic rear group. Its principal functions are:

1. **Chromatic aberration correction.** The Abbe number difference ν₅ − ν₄ = 11.28 satisfies condition (11) (ν₅ − ν₄ > 10). While this dispersion difference is modest compared to traditional achromats (which typically use Δν > 20), the index ratio n₄/n₅ = 1.074 compensates: the patent specifies condition (10) (n₄/n₅ > 1.05) precisely because a larger index difference allows effective achromatization with a smaller Abbe number spread. The doublet simultaneously corrects longitudinal chromatic aberration (axial color) and minimizes the variation of lateral chromatic aberration with image height.

2. **Additional positive power.** The doublet contributes f₄₅ = 78 mm of positive power, supplementing the front group. The ratio f₁₂₃/f₄₅ = 4.15 satisfies condition (2) (4 < f₁₂₃/f₄₅ < 6).

3. **Close-focus aberration correction via floating.** This component is the floating element described in the patent (see Section 5 below).

---

## 4. Glass Summary

| Element | nd | νd | Six-digit | Family | Catalog Match | Confidence |
|---|---|---|---|---|---|---|
| L1 | 1.720 | 50.25 | 720/503 | LaK | OHARA S-LAH53 (Δνd = 0.06) | Family |
| L2 | 1.623 | 58.14 | 623/581 | SK/PSK | No exact match (discontinued?) | Family |
| L3 | 1.7847 | 25.71 | 785/257 | SF | **HOYA FD110** (exact) | High |
| L4 | 1.700 | 48.08 | 700/481 | LaK | No exact match (discontinued?) | Family |
| L5 | 1.583 | 59.36 | 583/594 | BaK | **OHARA S-BAL42** (Δνd = 0.01) | High |

The design uses three distinct glass families: lanthanum crowns for the positive power elements (L1, L4), a dense phosphate crown for the second positive meniscus (L2), and a dense flint for the negative spacer (L3), with a lighter barium crown for the correcting element (L5). This distribution of high-index positive elements paired with a high-dispersion negative element is characteristic of well-corrected telephoto designs of the era.

Note: Embodiments 3 and 4 use different glass choices for L2 (nd = 1.61375, νd = 56.36 — an exact match for Schott SK4) and slightly different formulations for L4 and L5, suggesting that Olympus evaluated multiple glass combinations during the design process. The glass selections for L3 and L5 are highly consistent across all four embodiments, indicating that the SF-family diverger and BaK-family corrector were considered essential to the design's aberration balance.

---

## 5. Focusing Mechanism

The Olympus Zuiko 85mm f/2 employs a **floating rear-group** focusing system. Olympus production literature describes this as "a built-in automatic correction mechanism [that] compensates for aberrations at close focusing distances."

### How it Works

When focusing from infinity to close distances, the entire lens translates forward via the helicoid (unit focusing), but the fourth component (the L4+L5 cemented doublet) moves at a **slightly different rate** than the front three elements. Olympus describes this as a "built-in automatic correction mechanism," likely implemented via an internal cam. Because the rear group moves slightly less far forward than the front group, the air gap d₆ — the large spacing between L3 and the doublet — **increases** during close focusing. The back focal distance (BFD) also increases because the lens extends forward while the film plane remains fixed.

The patent provides quantitative data for this mechanism. For Embodiment 4, d₆ increases from 20.02 mm at infinity to 20.65 mm at 1/20× magnification, a change of +0.63 mm at the f = 100 normalization. (The patent does not provide a close-focus d₆ value for Embodiment 1 specifically, but the mechanism is the same across all embodiments.)

### Why it Matters

Without the floating correction, astigmatism worsens substantially at close focus, and the symmetry of off-axis coma degrades. The patent illustrates this with three sets of aberration curves for Embodiment 2: at infinity focus (Figs. 3A–3D), at 1/20× magnification without correction (Figs. 4A–4D), and at 1/20× with the rear group floated (Figs. 5A–5D). The improvement in astigmatism and coma symmetry with the floating correction is clearly visible in the patent figures.

This was an innovative feature for a telephoto lens of this era. The rear-group floating mechanism maintains high image quality across the full focusing range from infinity to 0.85 m without adding optical complexity or weight.

### Variable Gaps (Infinity → Close Focus)

The design has two independently variable gaps during focusing. The stop is mechanically part of the front group (L1–L3 + iris), so the gap from L3's rear surface to the stop (d₆ₐ) remains constant. The two variable gaps are:

1. **d₆ᵦ (stop to L4 front):** Increases during close focusing because the rear group lags behind the front group.
2. **BFD (L5 rear to image plane):** Increases because the entire lens extends forward while the film plane stays fixed.

Close-focus variable gap values were computed for the 0.85 m MFD using a self-consistent model: the floating ratio (Δd₆ / total extension) was estimated at 12.6% from Embodiment 4's data (Δd₆ = 0.63 mm at an extension of approximately 5 mm for 1/20× magnification), and the imaging equation was solved iteratively to ensure the system correctly forms an image at the film plane for an object at 0.85 m. At production scale (f = 85 mm), the resulting values are:

| Gap | Surface label | Infinity (mm) | Close focus (mm) | Change |
|---|---|---|---|---|
| d₆ᵦ (stop → L4) | STO | 10.25 | 11.79 | +1.54 |
| BFD (L5 → image) | 9 | 44.01 | 54.71 | +10.70 |

The total extension of approximately 12.2 mm (at production scale) is consistent with the expected unit-focus extension for an 85 mm lens at 0.85 m MFD.

**Note on close-focus magnification:** The computed magnification at 0.85 m is approximately 1:7.9, which is about 14% lower than the manufacturer's stated 1:6.9. This discrepancy likely arises from the estimated floating ratio: the actual production cam profile may produce a larger d₆ change (and correspondingly smaller BFD change) than the linear extrapolation from Embodiment 4's 1/20× data point, and the production lens may differ slightly from Embodiment 1's prescription.

---

## 6. Paraxial Verification

Independent ABCD matrix ray trace verification was performed on the patent prescription for Embodiment 1. All computations use thick-lens (transfer + refraction matrix) methods.

### System Parameters

| Parameter | Computed | Patent | Δ |
|---|---|---|---|
| EFL | 99.962 mm | 100 mm | −0.04% |
| BFD (f_B) | 51.757 mm | 51.807 mm | −0.10% |
| Telephoto ratio | 1.074 | 1.07 | +0.4% |
| f₁₂ | 45.317 mm | 45.317 mm | exact |
| f₁₂₃ | 323.592 mm | 323.67 mm | −0.02% |
| f₄₅ | 77.984 mm | 78.016 mm | −0.04% |
| f₁₂₃/f₄₅ | 4.149 | (condition: 4–6) | ✓ |

All computed values agree with the patent's stated values to within rounding tolerance. The tiny discrepancies (< 0.1%) are consistent with the patent's use of truncated decimal values.

### Element Focal Lengths

| Element | Focal Length (mm) | Power |
|---|---|---|
| L1 | +96.8 | Weak positive |
| L2 | +86.2 | Moderate positive |
| L3 | −32.3 | Strong negative |
| L4 (in air) | +27.8 | Strong positive |
| L5 (in air) | −42.4 | Moderate negative |
| L4+L5 doublet | +78.0 | Net positive |

### Petzval Sum

The surface-by-surface Petzval sum Σ (n'−n)/(n·n'·R) = 0.001400 at f = 100. Expressed as the normalized Petzval sum P × f = **0.140**, which matches the patent's stated value for Embodiment 1. (Note: the scanned patent text renders this as "0.40," which is an OCR artifact — the leading "1" was lost in scanning. The value 0.140 is consistent with Embodiments 2–4 at 0.130, 0.135, and 0.124 respectively, and with the patent's claim that the Petzval sum is improved over the prior art value of 0.292.) The corresponding Petzval radius is ~714 mm, or about 7.1× the focal length — indicating excellent field flatness for a telephoto lens.

### Patent Condition Verification

All twelve design conditions specified in the patent are satisfied by Embodiment 1:

| Condition | Requirement | Actual | Status |
|---|---|---|---|
| (1) | 0.4f < f₁₂ < 0.5f | f₁₂ = 45.317 | ✓ (40.0 < 45.3 < 50.0) |
| (2) | 4 < f₁₂₃/f₄₅ < 6 | 4.149 | ✓ |
| (3) | 0.28f < r₃ < 0.35f | r₃ = 31.522 | ✓ (28.0 < 31.5 < 35.0) |
| (4) | 0.6f < r₄ < 0.75f | r₄ = 64.950 | ✓ (60.0 < 65.0 < 75.0) |
| (5) | 1.4f < r₅ < 2f | r₅ = 145.777 | ✓ (140.0 < 145.8 < 200.0) |
| (6) | 0.18f < r₆ < 0.24f | r₆ = 21.474 | ✓ (18.0 < 21.5 < 24.0) |
| (7) | 0.98 < \|r₆/r₈\| < 1.03 | 1.002 | ✓ |
| (8) | 1.3f < r₇ < 1.8f | r₇ = 174.254 | ✓ (130.0 < 174.3 < 180.0) |
| (9) | n₁, n₄ > 1.68; n₂ > 1.6 | 1.72, 1.7, 1.623 | ✓ |
| (10) | n₄/n₅ > 1.05 | 1.074 | ✓ |
| (11) | ν₅ − ν₄ > 10 | 11.28 | ✓ |
| (12) | ν₁, ν₂ > 45; ν₃ < 28 | 50.25, 58.14, 25.71 | ✓ |

---

## 7. Design Heritage

The Imai/Ikeda design sits within a recognizable lineage of telephoto lens formulas descending from the Ernostar (Bertele, 1923) and subsequently the Sonnar (Bertele, 1931). The shared architectural pattern is a sequence of positive meniscus elements followed by a negative spacer and a rear positive group, with the stop placed in the large gap between the diverging element and the rear group.

The key differences from a classical Sonnar are:

1. **No cemented triplet.** The original 1931 Sonnar (6 elements / 3 groups) used a cemented triplet as its middle group (before the stop) and a cemented doublet as its rear group. The Imai/Ikeda design eliminates the triplet entirely, using only singlets and a single rear cemented doublet in a 5/4 configuration. This reduces element count and opens air spaces between the front elements that provide additional degrees of freedom.

2. **Four groups vs. three.** By air-spacing each of the first three elements (with gaps as small as d₂ = 0.18 mm between L1 and L2), the Imai/Ikeda design has four independent groups compared to the Sonnar's three. Each air gap provides an additional design variable for aberration balancing.

3. **Floating rear group.** The Imai/Ikeda design employs a floating rear doublet that maintains image quality at short distances. This capability was also present in the earlier Nakamura design, though the specific implementation differs with the change in element count.

The redesign from the earlier 6-element Nakamura formula (US 3,848,972, 1974) to the present 5-element design necessarily involved simplifying one cemented doublet into a singlet — this is the only way to reduce element count by one while maintaining the same four-group architecture. This eliminated one optical surface (the cemented junction), reducing internal absorption and removing one surface contribution to higher-order aberrations. Photographic comparisons by contemporary reviewers indicate the redesign improved sharpness and aberration correction at wide apertures.

---

## 8. Prescription Summary (Patent Scale, f = 100)

| Surface | R (mm) | d (mm) | nd (after) | Element |
|---|---|---|---|---|
| r₁ | +59.514 | 7.34 | 1.720 | L1 front |
| r₂ | +387.226 | 0.18 | 1.0 (air) | L1 rear |
| r₃ | +31.522 | 12.26 | 1.623 | L2 front |
| r₄ | +64.950 | 4.10 | 1.0 (air) | L2 rear |
| r₅ | +145.777 | 1.65 | 1.7847 | L3 front |
| r₆ | +21.474 | 20.05 | 1.0 (air) | L3 rear |
| — | (stop) | — | — | Aperture |
| r₇ | +174.254 | 8.94 | 1.700 | L4 front |
| r₈ | −21.424 | 1.06 | 1.583 | L4/L5 junction |
| r₉ | −163.873 | (BFD) | 1.0 (air) | L5 rear |

**f = 100, F/2.04, BFD = 51.8, telephoto ratio = 1.07**

To scale to production (f = 85 mm), multiply all R, d, and sd values by **0.8503**.
