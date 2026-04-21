# Fujifilm FUJINON XF 50mm f/1.0 R WR — Patent Design Analysis

**Patent:** US 2021/0231927 A1 — *Imaging Lens and Imaging Apparatus*
**Inventors:** Daiki Kawamura, Michio Cho (Fujifilm Corporation)
**Filed:** January 22, 2021 (priority: JP 2020-012799, January 29, 2020)
**Production example:** Example 3

---

## 1. Identification of Example 3 as the Production Design

The patent contains 20 numerical examples. Example 3 matches the production XF 50mm f/1.0 R WR on every published specification:

| Parameter | Example 3 (patent) | XF 50mm f/1.0 (Fujifilm) |
|---|---|---|
| Focal length | 49.549 mm | 50 mm |
| Maximum aperture | f/1.03 | f/1.0 |
| Full angle of view | 31.4° | 31.7° |
| Element count | 12 | 12 |
| Group count | 9 | 9 |
| Aspherical elements | 1 (2 aspherical surfaces) | 1 |
| ED elements | 2 (L12, L13) | 2 |
| Close focus | 0.7 m | 0.7 m |
| Focus type | Inner focus (G2 moves) | Internal focusing |

The 0.451 mm difference between the patent EFL (49.549 mm) and the marketed focal length (50 mm) is typical of manufacturer rounding. A paraxial ray trace through the full Example 3 prescription independently confirms f = 49.549 mm, matching the patent table exactly.

---

## 2. Optical Architecture

The lens is a two-group prime design:

- **First lens group (G1):** 7 elements (L11–L17), positive power (f₁ ≈ +114.5 mm), stationary during focus. Contains one cemented doublet (L15+L16).
- **Aperture stop (St):** Located between G1 and G2. Stationary. Stop semi-diameter ≈ 13.9 mm.
- **Second lens group (G2):** 5 elements (L21–L25), positive power (f₂ ≈ +34.9 mm), moves toward the object during focus. Contains two cemented doublets (L22+L23, L24+L25).

The f₁/f ratio of 2.31 and f₂/f ratio of 0.70 yield f₁/f₂ ≈ 3.28, placing most of the convergence burden on G2 relative to G1.

The 12 elements separate into **9 air-spaced groups** for Fujifilm's marketing classification:

| Group | Elements | Configuration |
|---|---|---|
| 1 | L11 | Singleton |
| 2 | L12 | Singleton |
| 3 | L13 | Singleton |
| 4 | L14 | Singleton |
| 5 | L15 + L16 | Cemented doublet |
| 6 | L17 | Singleton |
| 7 | L21 | Singleton |
| 8 | L22 + L23 | Cemented doublet |
| 9 | L24 + L25 | Cemented doublet |

The patent identifies a first unit (Gs1 = L11) and second unit (Gs2 = L12) within G1, separated by the largest air gap in G1 (10.03 mm). This configuration mirrors a wide-conversion front unit that suppresses sagittal coma at the wide entrance pupil (~48 mm diameter).

**Note on patent text:** The configuration description in ¶0179 contains apparent drafting errors. It describes L12 as a "positive meniscus lens convex toward the object side" and L13 as a "biconvex lens," but the numerical prescription shows L12 is biconvex (R₁ > 0, R₂ < 0) and L13 is a positive meniscus (R₁ > 0, R₂ > 0). The same paragraph describes G2 as beginning with a cemented lens, but the prescription data shows L21 is air-spaced (S16 exits to nd = 1.0). The numerical prescription is definitive; the prose descriptions are erroneous.

---

## 3. Element-by-Element Analysis

All element shapes are derived from the sign convention: R > 0 = convex toward object, R < 0 = concave toward object. Focal lengths are thin-lens values computed as f = 1/[(nd−1)(1/R₁ − 1/R₂)]. Doublet focal lengths are thick-lens values from full paraxial subsystem ray traces.

### 3.1 — Element 1 (L11): Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | S1 (R = −138.628) / S2 (R = +58.557) |
| Center thickness | 2.400 mm |
| nd / νd / θgF | 1.54072 / 47.23 / 0.56780 |
| ΔθgF | +0.003 (near-normal) |
| Thin-lens f | −76.1 mm |

**Role:** L11 is the concave-fronted negative element at the front of the production lens. As the first unit (Gs1) of the wide-conversion sub-structure, it diverges the on-axis beam before L12 reconverges it. The patent (¶0151) explains that this configuration reduces the angle of the maximum-field principal ray relative to the optical axis, suppressing sagittal coma. The concave front surface also helps correct spherical aberration (¶0153).

**Glass:** nd = 1.54072, νd = 47.23 — exact match to **Ohara S-FPM3** (fluorophosphate crown). High-confidence identification.

### 3.2 — Element 2 (L12): Biconvex Positive — ED Glass ①

| Property | Value |
|---|---|
| Surfaces | S3 (R = +75.896) / S4 (R = −105.013) |
| Center thickness | 11.800 mm |
| nd / νd / θgF | 1.59282 / 68.62 / 0.54414 |
| ΔθgF | +0.014 (mildly anomalous) |
| Thin-lens f | +74.3 mm |

**Role:** L12 is the **LB positive lens** identified by the patent — the positive lens with the highest Abbe number among all positive elements ahead of the stop. It is one of the lens's two ED elements. Its biconvex shape and 11.8 mm thickness indicate it carries substantial convergence, redirecting the divergent beam from L11. The glass exhibits mild anomalous partial dispersion contributing to secondary spectrum correction.

**Glass:** nd = 1.59282, νd = 68.62 — does not match any current Ohara catalog entry (nearest: S-FPM2 at nd = 1.59522, Δnd = 0.0024). The glass appears in multiple Fujifilm patents and may be sourced from Hikari, Sumita, CDGM, or as a Fujifilm-specified melt.

### 3.3 — Element 3 (L13): Positive Meniscus — ED Glass ②

| Property | Value |
|---|---|
| Surfaces | S5 (R = +45.460) / S6 (R = +399.214) |
| Center thickness | 10.800 mm |
| nd / νd / θgF | 1.59282 / 68.62 / 0.54414 |
| ΔθgF | +0.014 |
| Thin-lens f | +86.5 mm |

**Role:** L13 uses the same ED glass as L12 and is the **LC positive lens** — the positive lens with the second-highest Abbe number among elements ahead of the stop. Its meniscus shape (nearly plano-convex, R₂ ≈ 400 mm) contributes positive power while minimizing higher-order spherical aberration. Having both LB and LC in low-dispersion material shares the power burden, keeping the curvatures of each lens moderate (¶0137).

### 3.4 — Element 4 (L14): Positive Meniscus — LA Lens

| Property | Value |
|---|---|
| Surfaces | S7 (R = +44.954) / S8 (R = +63.848) |
| Center thickness | 4.320 mm |
| nd / νd / θgF | 1.95906 / 17.47 / 0.65993 |
| ΔθgF | **+0.047** (strongly anomalous) |
| Thin-lens f | +158.4 mm |

**Role:** This is the **LA positive lens** — the patent's core innovation element. It satisfies the patent's conditional expressions (1): 1.86 < NdA = 1.959 < 2.2, (2): 10 < νdA = 17.47 < 35. The strongly anomalous partial dispersion (ΔθgF = +0.047) provides controlled secondary spectrum that partially cancels the residual secondary spectrum from the ED elements. The very high refractive index prevents the radius of curvature from becoming excessively small despite the lens's relatively weak individual power.

**Glass:** nd = 1.95906, νd = 17.47, θgF = 0.65993 — exact match across all three constants to **Ohara S-NPH53** (high-density lanthanum flint). High-confidence identification.

### 3.5 — Elements 5–6 (L15 + L16): Cemented Doublet D1

**L15 (positive meniscus, convex toward object):**

| Property | Value |
|---|---|
| Surfaces | S9 (R = +36.127) / S10 junction (R = +60.177) |
| nd / νd / θgF | 1.78800 / 47.52 / 0.55545 |
| ΔθgF | −0.009 (below normal line) |
| Thin-lens f | +114.7 mm |

**L16 (negative meniscus, convex toward object):**

| Property | Value |
|---|---|
| Surfaces | S10 junction (R = +60.177) / S11 (R = +31.656) |
| nd / νd / θgF | 1.89286 / 20.36 / 0.63944 |
| ΔθgF | +0.031 (anomalous) |
| Thin-lens f | −74.8 mm |

**Doublet D1 combined f ≈ −431 mm** (thick-lens paraxial ray trace). The doublet is very weakly negative, contributing negative Petzval curvature for field flattening. L16's strong anomalous dispersion paired with L15's below-normal-line dispersion creates effective secondary spectrum correction within the doublet.

### 3.6 — Element 7 (L17): Negative Meniscus

| Property | Value |
|---|---|
| Surfaces | S12 (R = +177.124) / S13 (R = +27.861) |
| Center thickness | 1.520 mm |
| nd / νd / θgF | 1.80809 / 22.76 / 0.63073 |
| ΔθgF | +0.026 |
| Thin-lens f | −40.9 mm |

**Role:** Last element of G1. Strongest negative power in the front group. Positioned where the marginal ray is converging toward the stop, it provides Petzval field flattening, first-order chromatic correction via high dispersion, and shapes the pupil geometry entering the stop.

### 3.7 — Element 8 (L21): Aspherical Negative Meniscus

| Property | Value |
|---|---|
| Surfaces | S15 asph (R = −14.645) / S16 asph (R = −18.731) |
| Center thickness | 2.550 mm |
| nd / νd / θgF | 1.68863 / 31.20 / 0.60109 |
| Thin-lens f | −97.5 mm |
| Shape | Negative meniscus, concave toward object |
| Conic constants | K = 0 (spherical base) on both surfaces |

**Role:** The lens's sole aspherical element. Both surfaces carry polynomial departures from a spherical base, extending to 20th order with odd-power terms (A3, A5, A7…) in the patent's formulation. Positioned immediately behind the stop, L21 is the primary corrector for residual spherical aberration and higher-order coma.

**Aspherical profile note:** The dominant aspherical contribution comes from A4 (≈5×10⁻⁵ on both surfaces). The patent's odd-order terms provide additional radial profile shaping — since h = √(x² + y²), odd powers of h remain rotationally symmetric. A3 = 0 on both surfaces, but A5 through A19 (odd) are non-zero and non-negligible. The data file includes only even-order coefficients A4–A14; odd-order terms and higher even terms (A16–A20) are omitted, making the aspherical profile approximate at large aperture heights.

### 3.8 — Elements 9–10 (L22 + L23): Cemented Doublet D2

**L22 (biconvex positive):** R₁ = +49.661, R₂ = −32.522; nd/νd = 1.88300/39.22; thin-lens f = +22.3 mm

**L23 (biconcave negative):** R₁ = −32.522 (junction), R₂ = +32.522; nd/νd = 1.69895/30.05; thin-lens f = −23.3 mm

**Doublet D2 combined f ≈ +306 mm** (thick-lens). This weakly positive doublet is the chromatic corrector within the focusing group. The near-balanced positive and negative powers minimize net power change during focusing while providing strong chromatic correction. The patent (¶0167) requires at least two cemented lenses in G2 to suppress chromatic aberration fluctuations during focus travel. The symmetric curvature at the junction/exit (|R₁₈| = |R₁₉| = 32.522 mm) minimizes coma at the cemented interface.

### 3.9 — Elements 11–12 (L24 + L25): Cemented Doublet D3

**L24 (biconvex positive):** R₁ = +42.224, R₂ = −28.754; nd/νd = 1.88300/39.22; thin-lens f = +19.4 mm

**L25 (negative meniscus, concave toward object):** R₁ = −28.754 (junction), R₂ = −178.143; nd/νd = 1.62005/36.35; thin-lens f = −55.3 mm

**Doublet D3 combined f ≈ +31.0 mm** (thick-lens). This is the primary power-carrying doublet of G2. It performs the final convergence toward the image plane and dominates focus sensitivity. The strong positive biconvex element (L24) uses the same high-index LaF glass as L22, paired with a weaker negative meniscus (L25) for chromatic and field curvature correction.

---

## 4. Focus Mechanism

The lens employs **inner focusing** with G2 as the sole moving group:

| Parameter | Infinity focus | Close focus (0.7 m) | Change |
|---|---|---|---|
| DD[14] (Stop → G2) | 11.466 mm | 7.025 mm | −4.441 mm |
| DD[22] (G2 → image) | 14.401 mm | 18.842 mm | +4.441 mm |

G2 moves **4.441 mm toward the object** when focusing from infinity to 0.7 m. The sum of gap changes is exactly zero, confirming the total track length is constant and all motion is internal. At close focus, the effective f-number increases from 1.03 to 1.16 (approximately ⅓-stop loss), and the half-field angle drops marginally from 15.7° to 15.6° — indicating minimal focus breathing.

**Image circle coverage:** At infinity, f × tan(15.7°) = 13.93 mm image height, yielding a 27.9 mm image diagonal. The Fujifilm X-mount APS-C sensor diagonal is 28.2 mm, so coverage is tight with expected vignetting at extreme corners at f/1.0.

---

## 5. Special Glass Designations

| Designation | Element | nd | νd | ΔθgF | Function |
|---|---|---|---|---|---|
| **LA** | L14 | 1.95906 | 17.47 | +0.047 | Secondary spectrum correction via anomalous dispersion |
| **LB** (max νd) | L12 | 1.59282 | 68.62 | +0.014 | Primary longitudinal chromatic aberration correction |
| **LC** (2nd νd) | L13 | 1.59282 | 68.62 | +0.014 | Shared chromatic correction; reduces LB curvature burden |

The two negative lenses with the smallest Abbe numbers in G1 (L16: νd = 20.36, L17: νd = 22.76; average νdn1 = 21.56) also exhibit anomalous dispersion (average ΔθgFn1 = +0.028), aiding secondary spectrum correction.

---

## 6. Semi-Diameter Estimation

Semi-diameters are not listed in the patent and were estimated by combined marginal + chief ray trace at f/1.03 and ω = 15.7°. The entrance pupil semi-diameter is EP/2 = f/(2·FNo) ≈ 24.05 mm; the stop semi-diameter (marginal ray height at the stop) is ≈ 13.9 mm.

Front-group semi-diameters are constrained by the production lens's 77 mm filter thread (inner clear aperture ≈ 73–74 mm, SD ≈ 36–37 mm). The computed full-field rim ray semi-diameters at the front surfaces exceed 40 mm, confirming that the production lens vignettes at the field edge at f/1.0 — consistent with known behavior. The data file uses marginal-ray-based SDs with partial chief-ray contribution, accepting vignetting at the field edge.

Rear-group semi-diameters are constrained by edge thickness requirements on the biconvex elements (L22, L24), which limit their usable aperture to SD ≈ 15–16 mm despite full rim rays reaching SD ≈ 19 mm.

---

## 7. Data File Notes

The companion `.data.ts` file is at patent scale (f ≈ 49.549 mm, not rescaled to marketed 50 mm). Key limitations relative to the full patent prescription:

1. **Aspherical coefficients truncated:** Only even-order A4–A14 included. The patent's odd-order terms (A5, A7, …, A19) and higher even terms (A16, A18, A20) are omitted. The aspherical surface profile is approximate, particularly at large aperture heights.

2. **Back focal distance includes PP equivalent:** The last surface d = DD[22] + 2.850 (PP glass) + 1.000 (air) = 18.251 mm at infinity. The parallel plate (PP) itself is not modeled as separate surfaces.

3. **Variable gaps:** Two gaps change during focus — the stop-to-G2 gap ("STO") and the back focal distance ("22"). Their changes cancel exactly (−4.441 + 4.441 = 0).

---

## 8. Summary

The XF 50mm f/1.0 R WR is a 12-element, 9-group inner-focus prime with an f/1.0 aperture for APS-C mirrorless. Its design is characterized by:

- A **diverging front element** (concave first surface) from a wide-conversion lens heritage, suppressing sagittal coma at the ~48 mm entrance pupil.
- A **chromatic triplet** (LA + LB + LC) in the front group that balances first-order and second-order chromatic aberration without fluorite or extreme anomalous-dispersion glasses.
- A **single doubly-aspherical element** (L21) immediately behind the stop, carrying 20th-order polynomial figuring for residual aberration correction.
- A **lightweight 5-element focusing group** with two cemented doublets for chromatic stability across the focus range.

The design is all-glass, all-refractive — no diffractive surfaces, no hybrid resin aspherics, and no fluorite. Verified glass identifications: L11 = Ohara S-FPM3, L14 = Ohara S-NPH53 (both exact on nd, νd, θgF). The ED glass (L12, L13; nd = 1.59282, νd = 68.62) does not match any current Ohara catalog entry and remains unidentified.

---

*Analysis based on US 2021/0231927 A1, Example 3. EFL independently confirmed at 49.549 mm via paraxial ray trace. Element focal lengths are thin-lens values; doublet focal lengths are thick-lens values from subsystem ray traces. Semi-diameters estimated from combined marginal + chief ray trace with physical constraints.*
