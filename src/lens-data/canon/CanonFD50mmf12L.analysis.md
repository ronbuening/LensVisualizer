# Canon FD 50mm f/1.2 L

**Patent:** US 4,364,644 — "Gauss Type Large Aperture Photographic Objective"  
**Inventor:** Keiji Ikemori, Canon Kabushiki Kaisha  
**JP Priority:** 27 November 1979 (JP 54-153258) · **US Filed:** 24 November 1980 · **US Granted:** 21 December 1982  
**Implemented example:** Example 1 — normalised to f = 100 mm (production scale k = 0.500 → f = 50 mm)  
**Lens construction:** 8 elements / 6 groups, 1 aspherical surface  
**Optical class:** Modified Double-Gauss with aspherical correction

---

## 1. Historical Context and Significance

The Canon FD 50mm f/1.2 L was introduced in 1980 as the prestige standard lens of Canon's FD-mount SLR system, wearing the then-new "L" (Luxury) designation that Canon reserved for its highest-performance optical instruments. It was contemporaneous with the Canon F-1 professional body and represented Canon's definitive answer to the challenge of building a 50mm lens at maximum aperture — a challenge the optical industry had been wrestling with since the 1950s. It was produced until approximately 1987, when the FD system was superseded by the EF autofocus mount.

The f/1.2 aperture occupies a rarefied space in lens design. A stop wider than f/1.4 admits approximately 36% more light (the area ratio (1.4/1.2)² ≈ 1.361), but the penalty in aberrational burden is severe: every major aberration grows with high powers of the aperture radius, and the already-difficult "sagittal flare" characteristic of Gauss designs — the soft, glowing halo visible at wide apertures — becomes extremely difficult to control. The lens described in this patent is a direct evolution of Canon's earlier aspherical 50mm f/1.2 (JP Patent Sho 47-19386), updated with higher-refractive-index glasses, an extended image circle sufficient for the 46° diagonal of the 35mm format, and a refined aspherical prescription on the second element's front surface.

The use of an aspherical surface in a production lens in 1980 was notable. Canon produced aspherical elements by hand grinding and polishing, a labour-intensive process that contributed to the lens's premium price and modest production volumes. The peak aspherical departure on R3 is approximately 39 μm at the aperture edge in the normalised prescription (19 μm production) — mechanically demanding for the era and essential for the design's performance goals.

---

## 2. Optical Design Philosophy — The f/1.2 Gauss Problem

The symmetric or near-symmetric Double-Gauss form has dominated large-aperture normal lens design since the 1890s. Its strength is that near-symmetry around the central diaphragm provides automatic first-order cancellation of coma, lateral colour, and distortion. Its central weakness is sagittal flare: the surfaces immediately surrounding the diaphragm must be strongly curved in the negative sense to control Petzval field curvature and chromatic balance, and those strongly curved surfaces produce asymmetric ray bundles at oblique angles — particularly in the sagittal plane — that appear as soft, veiling glare at wide apertures.

In an all-spherical f/1.2 Gauss design, controlling flare while simultaneously maintaining acceptable spherical aberration and field curvature requires raising the refractive indices of the positive elements as high as available glass catalogues permit. Ikemori's solution is to use high-index glasses throughout while also introducing an aspherical surface to perform the flare-correction duty that would otherwise require even more extreme (and physically unavailable) glass indices. The aspherical surface on R3 — the front surface of the second element — is configured so that positive power decreases with distance from the axis, pre-correcting the over-corrected spherical aberration that the flattened stop-adjacent surfaces would otherwise leave uncompensated.

The result is an 8-element design split into a front corrector group (L1, plus the L2+L3 cemented doublet with the aspherical surface), and a rear positive group (L4+L5 negative cemented doublet behind the stop, followed by L6, L7, and L8 providing the bulk of the system's positive power and the BFD extension needed for the SLR mirror box). One further structural decision defines this design distinctly from a conventional unit-focus Gauss: **element L8 is mechanically fixed** during focus adjustment. Only L1 through L7 extend forward as a rigid unit. This is discussed in detail in Section 10.

---

## 3. OCR Errors: Two Corrected Radii of Curvature

Independent computational verification of the Example 1 prescription against the patent's own Table 1 — which tabulates f₆, f₇, f₈, and all eight conditional expression values for each example — revealed two transcription errors in the digitised patent text. Neither error is present in the original printed document; both originate in typographical ambiguities introduced during PDF scanning.

### Error 1 — Surface R1: 208.673 → **108.673 mm**

The digit "2" in "208.673" is a misread of "1". Evidence:

- With R1 = 208.673 mm, the system EFL computes to approximately −94 mm — physically impossible for a camera lens.
- With R1 = 108.673 mm, the EFL is exactly 100.000 mm, satisfying the stated focal-length normalisation.
- Examples 2–4 list R1 values of 103.145, 108.718, and 131.824 mm respectively. A value of 208.673 mm would be an anomalous outlier; 108.673 mm is fully consistent with this range.

### Error 2 — Surface R9: −36.428 → **−316.428 mm**

The leading digits "31" were dropped during scanning. Evidence:

- With R9 = −36.428 mm (as OCR reads), the sixth-element focal length f₆ computes to approximately −73 mm (diverging). Table 1 reports f₆ = 131.43 mm (converging) — impossible with this value.
- Binary search on R9 whilst holding all other parameters at their corrected values yields R9 = −316.419 mm as the unique solution simultaneously satisfying EFL = 100.000 mm and f₆ = 131.43 mm.
- The value −316.428 mm produces EFL = 99.999 mm and f₆ = 131.43 mm, within rounding of Table 1.
- Example 2 lists R9 = −326.673 mm and Example 3 lists R9 = −313.046 mm. The corrected value −316.428 mm falls within this range; −36.428 mm does not.

All eight patent conditional expressions are satisfied to full precision with these two corrections applied, confirming them unambiguously.

---

## 4. Optical Prescription

### 4.1 Normalised Prescription (f = 100 mm, F/1.2, 2ω = 46°)

Values as tabulated in Example 1 of US 4,364,644, with OCR errors corrected (marked †).

| Surface | R (mm) | d (mm) | n_d | ν_d | Element |
|:-------:|:------:|:------:|:---:|:---:|:-------:|
| R1  |  108.673 †  |  8.682  | 1.80400 | 46.6 | L1 |
| R2  |  416.217    |  0.291  | 1.00000 | —    | air |
| R3 ‡ |  78.3267   | 22.870  | 1.74400 | 44.7 | L2 |
| R4  |  384.362    |  3.992  | 1.63636 | 35.4 | L3 (cemented to L2) |
| R5  |   41.6885   | 30.851 ✶| 1.00000 | —    | air (stop in gap) |
| R6  |  −37.8277   |  2.326  | 1.80518 | 25.4 | L4 |
| R7  |  720.81     | 17.328  | 1.81600 | 46.6 | L5 (cemented to L4) |
| R8  |  −64.003    |  0.291  | 1.00000 | —    | air |
| R9  | −316.428 †  |  7.752  | 1.88300 | 40.8 | L6 |
| R10 |  −85.8858   |  0.194  | 1.00000 | —    | air |
| R11 | 1219.053    |  6.492  | 1.77250 | 49.6 | L7 |
| R12 | −158.904    |  0.388 ✦| 1.00000 | —    | air (focus gap) |
| R13 |  745.854    |  3.488  | 1.62299 | 58.2 | L8 (fixed) |
| R14 | −1221.648   |  —      | 1.00000 | —    | image |

† OCR error corrected (see Section 3). ‡ Aspherical surface. ✶ Aperture stop located within gap D5; axial position inferred from patent Fig. 1. ✦ Variable gap (focus mechanism; see Section 10).

### 4.2 Production Prescription (f ≈ 50 mm; all values scaled ×0.500)

| Surface | R (mm) | d (mm) | n_d | ν_d |
|:-------:|:------:|:------:|:---:|:---:|
| R1  |   54.337 |  4.341 | 1.80400 | 46.6 |
| R2  |  208.109 |  0.146 | 1.00000 | —    |
| R3 ‡ |  39.163 | 11.435 | 1.74400 | 44.7 |
| R4  |  192.181 |  1.996 | 1.63636 | 35.4 |
| R5  |   20.844 | 15.426 ✶| 1.00000 | —   |
| R6  |  −18.914 |  1.163 | 1.80518 | 25.4 |
| R7  |  360.405 |  8.664 | 1.81600 | 46.6 |
| R8  |  −32.002 |  0.146 | 1.00000 | —    |
| R9  | −158.214 |  3.876 | 1.88300 | 40.8 |
| R10 |  −42.943 |  0.097 | 1.00000 | —    |
| R11 |  609.527 |  3.246 | 1.77250 | 49.6 |
| R12 |  −79.452 |  0.194 ✦| 1.00000 | —   |
| R13 |  372.927 |  1.744 | 1.62299 | 58.2 |
| R14 | −610.824 |  —     | 1.00000 | —    |

### 4.3 Optical Formula Layout

```
              [Diaphragm, D5 gap]
  ─────────────────────┴────────────────────────────
  L1      L2──────L3        L4──L5    L6   L7   L8
     D2  ║ R3  R4  R5  D5  R6  R7 R8   R9 R10 R11 R12 R13 R14
  R1  R2 ╚═══════════╝        ╚══════╝
  ◄──────────── L1–L7 move as unit for focus ──────► L8 fixed
```

Cemented groups: L2+L3 (junction at R4), L4+L5 (junction at R7). Six air-separated groups total.

---

## 5. Aspherical Surface Analysis

### 5.1 Coefficients and Formula

Surface R3 (front surface of L2) is the sole aspherical surface. The patent employs the sag formula:

$$X(H) = R\!\left(1 - \sqrt{1 - \frac{H^2}{R^2}}\right) + AH^2 + BH^4 + CH^6 + DH^8 + EH^{10}$$

where X is the axial departure measured in the direction of light propagation, H is the height from the optical axis, and R = 78.3267 mm is the paraxial base radius (normalised). This is algebraically equivalent to the standard even-polynomial aspherical form with conic constant K = 0 and coefficients A₄ = B, A₆ = C, A₈ = D, A₁₀ = E.

#### Aspherical coefficients (f = 100 normalisation)

| Coeff. | Value | Status |
|:------:|:-----:|:------:|
| A | 0 | Confirmed — paraxial radius is the vertex radius |
| B (= A₄) | −1.172337 × 10⁻⁷ mm⁻³ | Confirmed |
| C (= A₆) | +6.303928 × 10⁻¹¹ mm⁻⁵ | Confirmed |
| D (= A₈) | −6.418568 × 10⁻¹⁴ mm⁻⁷ | **Inferred** — OCR partially obscured; value reconstructed from the partially legible digit sequence and cross-comparison with Examples 2–4 (D ranges −6.41 to −6.54 × 10⁻¹⁴ across all four examples) |
| E (= A₁₀) | +2.08995 × 10⁻¹⁷ mm⁻⁹ | **Strongly inferred** — explicitly legible and identical across Examples 2, 3, and 4; same value strongly implied for Example 1 |

The A = 0 coefficient confirms that the paraxial radius R = 78.3267 mm is the actual vertex radius; all aspherical departure is carried by the H⁴ and higher-order terms.

#### Aspherical coefficients (production scale, f ≈ 50 mm)

When all lengths scale by k = 0.5, each coefficient scales as B_prod = B/k³, C_prod = C/k⁵, D_prod = D/k⁷, E_prod = E/k⁹:

| Coeff. | Production value |
|:------:|:----------------:|
| B (= A₄) | −9.3787 × 10⁻⁷ mm⁻³ |
| C (= A₆) | +2.0173 × 10⁻⁹ mm⁻⁵ |
| D (= A₈) | −8.2158 × 10⁻¹² mm⁻⁷ |
| E (= A₁₀) | +1.0701 × 10⁻¹⁴ mm⁻⁹ |

### 5.2 Aspherical Departure (f = 100 normalisation; all four polynomial terms included)

| H (mm) | Sphere sag (mm) | Departure Δ (mm) | Δ / sag |
|:------:|:--------------:|:----------------:|:-------:|
|  5  | 0.1598 | −0.000072 | −0.05% |
| 10  | 0.6410 | −0.001116 | −0.17% |
| 15  | 1.4497 | −0.005369 | −0.37% |
| 20  | 2.5964 | −0.016152 | −0.62% |
| 25  | 4.0968 | −0.038205 | −0.93% |
| 30  | 5.9729 | −0.078780 | −1.32% |

At the full aperture zone (H ≈ 25–30 mm at f = 100 normalisation), the departure of roughly −1% of the sphere sag is small in percentage terms but optically significant because it alters the marginal-ray refraction angle sufficiently to modify spherical aberration by several wavelengths. Production-scale departures are half the normalised values at the corresponding physical aperture heights (Δ_prod = k × Δ_norm = 0.5 × Δ_norm).

> **Note on OCR:** As stated above, coefficients D and E are inferred from partial OCR. The departure values at H ≥ 20 mm are therefore dependent on inferred coefficients and should be verified against a clean scan of the patent or the original JP 54-153258 filing before use in a data file.

### 5.3 Physical Significance

The leading coefficient B is negative, meaning the polynomial departure is negative at all heights in the table. The surface is *less* steeply curved at large aperture zones than the paraxial sphere — it effectively flattens outward toward the front of the lens as the ray height increases. This progressively weakens the positive refracting power of R3 toward the aperture rim.

The direct consequence is an under-corrected marginal ray contribution at the element level — exactly what is needed to cancel the over-corrected (outward-bending) sagittal ray fan produced by the flattened stop-adjacent surfaces R5 and R6. Without this correction, controlling sagittal flare at f/1.2 would require either steeper curvatures at R5/R6 (worsening field curvature and astigmatism) or glass indices beyond what was commercially available in 1980. The aspherical surface frees these other design parameters from the flare-correction duty, allowing them to be optimised for field curvature, astigmatism, and chromatic performance simultaneously.

---

## 6. Glass Identification

The patent tabulates n_d (d-line, 587.6 nm) and ν_d (Abbe number) for each element without naming glasses. The following identifications are made by matching (n_d, ν_d) pairs to manufacturer catalogues using the six-digit glass code convention. An asterisk (*) denotes a provisional match; the exact commercial designation may differ from modern catalogue entries.

| Elem. | n_d | ν_d | 6-digit code | Best catalogue match | Δn_d | Δν_d | Quality |
|:-----:|:---:|:---:|:------------:|:--------------------:|:----:|:----:|:-------:|
| L1 | 1.80400 | 46.6 | 804466 | OHARA S-LAH58 (1.80400 / 46.57) | 0.00000 | −0.03 | Excellent |
| L2 | 1.74400 | 44.7 | 744447 | OHARA S-LAH52 (1.74400 / 44.80) | 0.00000 | +0.10 | Good |
| L3 | 1.63636 | 35.4 | 636354 | OHARA S-TIM27 (1.63636 / 35.37) | 0.00000 | −0.03 | Excellent |
| L4 | 1.80518 | 25.4 | 805254 | Schott SF6 / OHARA S-TIH6 (1.80518 / 25.43) | 0.00000 | +0.03 | Excellent |
| L5 | 1.81600 | 46.6 | 816466 | OHARA S-LAH59 (1.81600 / 46.62) | 0.00000 | +0.02 | Excellent |
| L6 | 1.88300 | 40.8 | 883408 | OHARA S-LAH64 (1.88300 / 40.76) | 0.00000 | −0.04 | Excellent |
| L7 | 1.77250 | 49.6 | 773496 | OHARA S-LAL18 (1.77250 / 49.60) | 0.00000 | 0.00 | Exact |
| L8 | 1.62299 | 58.2 | 623582 | OHARA S-BAL35 (1.62280 / 57.08) | −0.00019 | −1.12 | Moderate* |

**Notes:**

**L4 (Schott SF6 / S-TIH6):** Dense flint glass with the lowest Abbe number in the design (ν_d = 25.4), placed immediately adjacent to the diaphragm in the rear doublet. The large dispersion contrast with L5 (Δν = 46.6 − 25.4 = 21.2) provides thorough rear-group chromatic correction.

**L6 (S-LAH64):** At n_d = 1.883, the highest-index glass in the design. The Δν_d residual of −0.04 is negligible; this is a reliable identification. The high index is essential for bending the rear-group rays sharply toward the axis without extreme curvatures.

**L2 (S-LAH52):** The Δν_d residual of +0.10 is the second-largest in the design (after L8) but still falls within the uncertainty expected of 1979-era glass melts; this identification is considered good.

**L8 (provisional):** The Δν_d residual of −1.12 between the patent value (ν_d = 58.2) and S-BAL35 (ν_d = 57.08) is the largest in the design and is flagged accordingly. OHARA S-BAL35 and the equivalent Schott SK10 are the closest standard-catalogue matches; both fall short. Canon may have used a proprietary crown formulation for this fixed rear element in 1980 production, or a Japanese domestic glass no longer listed in current catalogues.

---

## 7. Computed Optical Properties

All values computed via paraxial y-nu ray trace (ABCD transfer matrices) from the corrected Example 1 prescription.

### 7.1 System Metrics

| Parameter | Normalised (f = 100) | Production (f = 50) |
|:---------:|:-------------------:|:-------------------:|
| EFL | 99.999 mm | 50.000 mm |
| BFD (R14 to image) | 71.271 mm | 35.636 mm |
| FFL (object-side) | −4.487 mm | −2.244 mm |
| Total track L (R1→R14) | 104.945 mm | 52.473 mm |
| L / f | 1.0495 | 1.0495 |
| Front principal plane H (from R1) | +95.513 mm | +47.756 mm |
| Rear principal plane H′ (from R14) | −28.728 mm | −14.364 mm |
| Petzval sum | +0.002191 mm⁻¹ | +0.004382 mm⁻¹ |
| Petzval radius | 456.4 mm = 4.56f | 228.2 mm = 4.56f |

> **Note on BFD:** The production BFD of 35.636 mm from R14 to the film plane, combined with the FD mount's 42.0 mm flange-to-film distance, places R14 approximately 6.4 mm behind the mounting flange face — a small inward protrusion into the camera body, consistent with the Canon FD 50mm f/1.2 L's physical construction.

### 7.2 Element Focal Lengths (paraxial, normalised)

| Element | f (norm.) | f (prod.) | Character |
|:-------:|:---------:|:---------:|:---------:|
| L1 | +180.65 mm | +90.3 mm | Weakly positive |
| L2 | +128.14 mm | +64.1 mm | Moderately positive |
| L3 | −73.82 mm | −36.9 mm | Moderately negative |
| L2+L3 (doublet) | −265.59 mm | −132.8 mm | Net diverging |
| L4 | −44.58 mm | −22.3 mm | Strongly negative |
| L5 | +72.76 mm | +36.4 mm | Moderately positive |
| L4+L5 (doublet) | −179.10 mm | −89.6 mm | Net diverging |
| L6 | +131.43 mm | +65.7 mm | Moderate positive |
| L7 | +182.35 mm | +91.2 mm | Weak positive |
| L8 | +743.87 mm | +371.9 mm | Very weak positive |

### 7.3 Marginal Ray Heights at Each Surface (Normalised, EP semi-diameter = 41.67 mm)

| Surface | y (norm. mm) | y (prod. mm) | Element |
|:-------:|:------------:|:------------:|:-------:|
| R1 | 41.667 | 20.83 | L1 front |
| R2 | 40.183 | 20.09 | L1 rear |
| R3 | 40.116 | 20.06 | L2 front (aspherical) |
| R4 | 32.095 | 16.05 | L2/L3 junction |
| R5 | 30.624 | 15.31 | L3 rear |
| R6 | 26.452 | 13.23 | L4 front |
| R7 | 27.003 | 13.50 | L4/L5 junction |
| R8 | 31.081 | 15.54 | L5 rear |
| R9 | 31.091 | 15.55 | L6 front |
| R10 | 31.576 | 15.79 | L6 rear |
| R11 | 31.536 | 15.77 | L7 front |
| R12 | 30.705 | 15.35 | L7 rear |
| R13 | 30.559 | 15.28 | L8 front |
| R14 | 29.697 | 14.85 | L8 rear |

The slight increase in ray height from R8 through R10 — where the rear group is momentarily divergent — is characteristic of this optical form, with the beam re-converging through L6 onward.

---

## 8. Element-by-Element Optical Roles

### L1 — Front Positive Meniscus (n_d = 1.804, ν_d = 46.6; f₁ = +180.65 mm)

Shape: Positive meniscus. Both radii are positive (R1 = +108.67, R2 = +416.22), placing both centres of curvature to the right of their respective surfaces. The front surface is convex toward the object; the rear surface, with its centre also to the right, is concave toward the image — making both surfaces curve in the same sense and identifying the element as a positive meniscus. L1 serves as the primary light-gathering element, contributing the most to collecting the cone of rays from the entrance pupil. The choice of high-index glass (S-LAH58 type, n_d = 1.804) allows the required power to be achieved with weaker curvatures than a lower-index glass would require, reducing higher-order spherical aberration. The meniscus form, with both radii approximately concentric to the entrance pupil, reduces off-axis ray deviation and therefore coma and astigmatism contributions. The minimum gap D2 = 0.291 mm (normalised; 0.146 mm production) is mechanical clearance.

### L2 — Positive Element, Aspherical Front Surface (n_d = 1.744, ν_d = 44.7; part of doublet)

Shape: Strong positive meniscus with the aspherical surface R3 facing forward and the cemented junction R4 at the rear. L2 contributes substantial positive power while its aspherical front surface performs the critical role of pre-correcting sagittal flare and spherical aberration. The aspherical departure progressively weakens the positive refracting power toward the aperture rim, creating an under-corrected marginal-ray contribution at the element level that offsets the over-correction from the stop region. See Section 5 for the full aspherical analysis.

### L3 — Negative Element, Cemented to L2 (n_d = 1.636, ν_d = 35.4; part of doublet)

Shape: Negative meniscus cemented to L2's rear, with the shared junction at R4 = +384.362 (nearly flat) and the strongly convex exit surface R5 = +41.69. The strong positive curvature of R5 — in the sense from glass to air — makes it a diverging surface (φ₅ = (1.0 − 1.636)/41.69 = −0.0153 mm⁻¹) and the primary Petzval-correction contributor in the front group. The refractive-index step Δn_d = 1.744 − 1.636 = 0.108 (satisfying condition 7) and the corresponding Abbe contrast provide chromatic balance. The **combined L2+L3 doublet** has a net focal length of −265.59 mm (strongly diverging), so the front group as a whole (L1 plus L2+L3) is near-afocal — appropriate for a Gauss design that places most of its positive power in the rear group.

### L4 — Biconcave (near-plano-concave), Dense Flint (n_d = 1.805, ν_d = 25.4; part of doublet)

Shape: Biconcave. R6 = −37.83 mm (negative radius: centre of curvature to the LEFT of the surface) makes the front surface concave toward the incoming beam. R7 = +720.81 mm (positive radius: centre to the RIGHT) makes the rear surface concave toward the outgoing beam. Opposite-sign radii → the element is biconcave, not a meniscus. The front surface is steeply curved (|R6| = 37.83 mm) while the rear is nearly flat (|R7| = 720.81 mm), so the element is more precisely described as near-plano-concave with the strongly curved face toward the stop. L4 is placed immediately behind the diaphragm and is the primary location for sagittal flare control in any Gauss design. The strongly negative R6 is constrained by conditions (4) and (5) to balance flare removal against Petzval field curvature. The dense flint glass (SF6 type) provides the large dispersion needed to achieve rear-group chromatic correction when cemented to L5.

### L5 — Positive Element, Cemented to L4 (n_d = 1.816, ν_d = 46.6; part of doublet)

Shape: Asymmetric biconvex. R7 = +720.81 mm (positive radius: centre to the RIGHT) makes the front surface convex toward the incoming beam; R8 = −64.003 mm (negative radius: centre to the LEFT) makes the rear surface convex toward the outgoing beam. Opposite-sign radii → biconvex. The front surface is nearly flat (|R7| very large) while the rear carries the dominant power. L5 provides the main positive power of the rear inner group. Its high index (n_d = 1.816) delivers this power with low curvatures, controlling higher-order aberrations. The Abbe contrast with L4 (Δν = 21.2) ensures thorough chromatic correction of the doublet. The **combined L4+L5 doublet** has a net focal length of −179.10 mm (slightly diverging), a consequence of the dominant strong negative curvature at R6; this net-negative contribution assists Petzval-sum correction.

### L6 — Positive Meniscus (n_d = 1.883, ν_d = 40.8; f₆ = +131.43 mm)

Shape: Both surfaces concave toward the front (R9 = −316.43, R10 = −85.89), forming a positive meniscus with rearward convexity. The stronger rear curvature at R10 provides the dominant convergence. At n_d = 1.883 — the highest index in the design — L6 achieves the shortest focal length of the three rear positive singlets with moderate curvatures. Condition (6) specifies f₆ < f₇ < f₈, ensuring that L6 provides the strongest rear-group convergence and begins folding the wide-angle chief ray bundle promptly, keeping the diameters of L7 and L8 manageable.

### L7 — Biconvex (n_d = 1.7725, ν_d = 49.6; f₇ = +182.35 mm)

Shape: Biconvex with a near-flat front (R11 = +1219.05, nearly planar) and a more strongly curved rear (R12 = −158.90 mm). The asymmetric biconvex form concentrates most of the convergence at R12, reducing the spherical aberration per unit of power relative to a symmetric form. L7 is the last element in the seven-element focusing group; its relatively high Abbe number (ν_d = 49.6) contributes to longitudinal chromatic correction in the rear group.

### L8 — Positive Weak Field Corrector (n_d = 1.623, ν_d = 58.2; f₈ = +743.87 mm)

Shape: Very weakly biconvex. R13 = +745.85 mm (positive, centre right → front surface convex toward object) and R14 = −1221.65 mm (negative, centre left → rear surface convex toward image); opposite-sign radii confirm the element is biconvex, though both surfaces are so gently curved that the element is functionally near-plano in appearance. With a focal length of about 7.4× the system focal length, L8 contributes minimal on-axis refracting power. Its roles are threefold: first, as a Petzval-sum fine-corrector (the relatively low n_d = 1.623 and crown-type glass contribute small positive Petzval sum despite positive power); second, as a stability anchor — because L8 is fixed, it provides a constant reference for the final image-forming geometry across the focus range; and third, as a mild lateral-colour corrector via its high Abbe number (ν_d ≈ 58). The glass identification is provisional (see Section 6, note on L8).

---

## 9. Aperture Stop Placement

The diaphragm is located within gap D5 — the 30.851 mm (normalised; 15.43 mm production) air space between R5 and R6 — the widest gap in the design. The patent states "a diaphragm being arranged in a space between the 3rd and 4th lenses." The exact axial position within D5 is not tabulated; inspection of patent Fig. 1 places it approximately mid-gap at t ≈ 15.426 mm from R5.

At maximum aperture (f/1.2), the **entrance pupil** semi-diameter is:

$$\text{SD}_{\text{EP}} = \frac{f}{2 \times F/\#} = \frac{100}{2 \times 1.2} \approx 41.7 \text{ mm (normalised)} \approx 20.8 \text{ mm (production)}$$

This is the image of the physical stop formed by the front group. The **physical stop** itself is smaller: a marginal ray trace from the entrance pupil (y = 41.67 mm at R1, u = 0) through the corrected production prescription gives a beam semi-diameter of approximately 28.5 mm (normalised) at the mid-gap stop position, corresponding to **14.3 mm in the production lens**. The front group (L1 through the D5 gap) images the physical stop to the entrance pupil with a lateral magnification of approximately 1.46×.

The marginal ray heights across D5 confirm the geometry: the beam contracts from ~30.6 mm (normalised) at R5 to the stop at ~28.5 mm, then continues contracting to ~26.5 mm at R6 before the rear group begins converging the rays. The large physical extent of D5 is a deliberate design choice: it gives the stop considerable axial separation from both adjacent doublets, allowing independent control of marginal and principal ray angles and supporting the wide 46° full field.

---

## 10. Focusing Mechanism

The patent states explicitly: "focusing of the objective in the embodiment of the present invention is performed by moving the 1st to 7th lenses only, while the 8th lens remains stationary. Hence, excellent image quality can be maintained throughout the focusing range. Particularly, when the range of variation of coma and astigmatism can be reduced to zero."

This is a **split-unit focus** scheme: the seven-element front assembly (L1 through L7, including the stop and both cemented doublets) moves as a rigid body via the focus helicoid, while L8 — mounted at the rear of the barrel near the camera flange — remains at a fixed distance from the film plane. The sole variable air gap during focusing is D12 (between R12 and R13), which increases as L1–L7 extend forward for close focus.

**Mechanical rationale:** The FD mount's flange-to-film distance is fixed at 42.0 mm. By mounting L8 to the stationary rear barrel (the portion bolted to the camera), the designer ensures that L8 always maintains the same geometry relative to the film. The helicoid ring drives L1–L7 forward without disturbing the rear corrector.

**Optical rationale:** All inter-element spacings within the L1–L7 group are preserved across the focus range, so the aberration correction optimised for infinity focus is maintained to good approximation at all distances. Only the D12 gap changes — and L8's weak power (f₈ ≈ 7.4f) means this change contributes negligible chromatic or geometric aberration. The varying D12 gap also provides a continuous, mild field-correction adjustment as subject distance decreases.

### Focus Extension Table

A paraxial ray trace with the corrected production prescription yields:

| Object distance | Gap D12 (production) | L1–L7 forward shift |
|:---------------:|:-------------------:|:-------------------:|
| ∞ | 0.194 mm | 0.000 mm |
| 0.6 m (MFD) | ≈ 6.384 mm | ≈ 6.190 mm |

The ≈6.2 mm extension is consistent with the physical design of the Canon FD 50mm f/1.2 L focus ring mechanism. Canon's stated minimum focus distance is 0.6 m from the film plane.

---

## 11. Patent Conditional Expression Verification

All eight conditions specified in the patent are verified against the Example 1 prescription. Computed values match patent Table 1 to ≥ 4 significant figures.

| # | Expression | Range | Computed | Table 1 | Pass |
|:-:|:---------:|:-----:|:--------:|:-------:|:----:|
| (1) | (D3+D4) / (D6+D7) | 1.24–1.40 | **1.367** | 1.367 | ✓ |
| (2) | L / f | 1.00–1.10 | **1.049** | 1.049 | ✓ |
| (3) | (N1+N2+N5+N6+N7) / 5 | 1.78–1.89 | **1.8039** | 1.8039 | ✓ |
| (4) | f / R5 | 2.17–2.56 | **2.399** | 2.399 | ✓ |
| (5) | f / \|R6\| | 2.44–2.70 | **2.644** | 2.644 | ✓ |
| (6) | f₆ < f₇ < f₈ | monotone | **131.43 < 182.35 < 743.87** | 131.43, 182.35, 743.87 | ✓ |
| (7) | n₂ − n₃ | 0.08–0.22 | **0.1076** | 0.1076 | ✓ |
| (8) | f / R4 | 0.10–0.50 | **0.260** | 0.26 | ✓ |

**Condition interpretation:**

**(1)** Governs the apportionment of total glass thickness between the two cemented doublets. The numerator (D3 + D4 = 22.87 + 3.99 = 26.86 mm normalised) is the combined thickness of the front doublet L2+L3; the denominator (D6 + D7 = 2.33 + 17.33 = 19.65 mm) is the combined thickness of the rear doublet L4+L5. This ratio controls how the correction of spherical aberration and coma is shared between the two doublet groups: too low a ratio (front doublet too thin relative to rear) shifts the aberration burden rearward and degrades coma balance; too high a ratio increases the overall track length and worsens higher-order aberrations in the front group.

**(2)** Defines overall compactness: at L/f = 1.049 the lens is 4.9% longer than its focal length — compact for an f/1.2 design.

**(3)** Enforces high-index glass throughout the five positive elements. The average n_d = 1.804 sits within the commercially achievable range of 1979; the upper bound of 1.89 represented the practical catalogue ceiling at that date.

**(4) and (5)** Together constrain the curvatures of R5 and R6 to balance flare removal against field curvature: too-strong curvature (above upper bound) worsens Petzval sum; too-weak curvature (below lower bound) leaves residual sagittal flare.

**(6)** Ensures the three rear positive singlets carry progressively weaker power from stop outward, keeping the rear element diameters compact.

**(7)** Controls the n_d step at the L2/L3 cemented interface (n₂ − n₃ = 0.108), governing Petzval correction by the doublet.

**(8)** Normalises the power of the cemented junction R4 (f/R4 = 0.260), balancing the astigmatism compensation provided by R4 against the distortion it introduces.

---

## 12. Aberration Correction Architecture

### Spherical Aberration

Primary spherical aberration correction is divided between the aspherical R3 and the curvature of R5/R6. The negative B coefficient of R3 reduces over-corrected zonal spherical aberration from the aperture rim. The flattened stop-adjacent surfaces (constrained by conditions 4 and 5) introduce less marginal-ray over-correction than an all-spherical design of the same aperture.

### Coma and Sagittal Flare

The dominant sagittal flare source in a Gauss design is the negative-curvature surface immediately behind the stop (R6). The aspherical pre-correction on R3 generates over-corrected coma at the element level, which is designed to cancel the under-corrected contribution from the stop region. The patent's stated advantage over the prior-art JP 47-19386 design is specifically this: the aspherical R3, combined with higher-index glasses throughout, achieves adequate sagittal flare correction while keeping the average positive-element index within the physically available range (condition 3 upper bound = 1.89).

### Field Curvature

Controlled by the Petzval sum. The net-negative doublets (L2+L3 and L4+L5) reduce the otherwise large Petzval contribution from the high-index positive elements. Conditions (4) and (5) are specifically the Petzval-control parameters for R5 and R6. The computed Petzval radius of 4.56f represents good field correction for the 23° half-field, consistent with the patent's aberration curves showing tangential and sagittal fields within ±0.5 mm from 0° to 23°.

### Astigmatism and Distortion

Conditions (7) and (8) jointly address these. The controlled power of the cemented junction R4 (condition 8: f/R4 = 0.260) provides astigmatism to offset the contribution from the aspherical R3 and the negative outer elements. The near-concentric form of R4 (with respect to the diaphragm) simplifies simultaneous correction of astigmatism and distortion alongside the aspherical surface.

### Chromatic Aberrations

The two cemented achromats (L2+L3 and L4+L5) handle primary longitudinal and lateral chromatic correction. L2+L3 corrects the chromatic divergence of the high-index front elements; L4+L5 corrects the rear group. The higher Abbe number of L8 (ν_d ≈ 58, crown-glass territory) provides a fine-tuning correction for lateral colour at the image plane.

---

## 13. Design Lineage and Context

The Canon FD 50/1.2 L stands in a direct lineage from earlier Canon large-aperture Gauss designs, explicitly cited in the patent's prior art section:

**JP 47-19386 (Canon, 1972):** An earlier Canon Gauss design using an aspherical surface for flare and aberration correction. The FD 50/1.2 L is described in the patent as using "the same aspherical surface position" but substituting higher-refractive-index glasses and adding the eight design conditions to achieve a wider image angle (46° full diagonal vs narrower earlier designs).

The use of a single aspherical surface in a double-Gauss design to control wide-aperture flare was uncommon when the FD 50/1.2 L was introduced. Contemporaneous designs from other manufacturers typically relied entirely on spherical optics and accepted greater wide-aperture flare. The lens's reputation for characteristic rendering at full aperture — with "swirly" bokeh and sagittal line curvature — reflects the controlled but not fully eliminated sagittal coma inherent in any f/1.2 Gauss design, aspherical surface notwithstanding.

The Canon FD 50/1.2 L was succeeded in the EF mount era by the Canon EF 50mm f/1.2 L USM (released 2007), which employs a substantially different optical formula with a large-diameter aspherical element achieving markedly lower aberration levels at full aperture. The FD design remains influential as a particularly well-documented example of the state of the art in early-1980s large-aperture prime design.

---

## 14. Notes, Uncertainties, and Production Correspondence

**Aspherical coefficient uncertainty:** Coefficients D and E for Example 1 are partially obscured by OCR degradation in the available PDF scan. The values D = −6.418568 × 10⁻¹⁴ mm⁻⁷ and E = +2.08995 × 10⁻¹⁷ mm⁻⁹ are inferred from the partially legible digit sequences and from the consistent pattern across Examples 2–4. These should be verified against a clean scan or the original JP 54-153258 filing before use in a data file. The aspherical departure table in Section 5.2 includes all four polynomial terms; values at H ≥ 20 mm depend on the inferred D and E.

**Glass identification:** Six of eight elements have residuals ≤ 0.10 ν_d from catalogue standard glasses and are considered reliable identifications. L2 (Δν_d = +0.10) is a good match. L8 (Δν_d = −1.12) is flagged as provisional; Canon may have used a proprietary crown formulation for this era.

**Scale factor:** The prescription normalises to EFL = 99.999 mm, yielding a clean scale factor of k = 0.50000 to reach the production f = 50 mm. All R, d, and sd values in a data file should be multiplied by 0.500.

**Production correspondence:** Canon's published specifications for the FD 50mm f/1.2 L (8 elements / 6 groups, one aspherical surface, minimum focus 0.6 m, FD breech-lock mount) are fully consistent with Example 1 of this patent. The computed total optical track of 52.47 mm, combined with the 42.0 mm FD flange distance and BFD = 35.64 mm, places R14 approximately 6.4 mm behind the mounting flange face — consistent with the slight rearward protrusion of the rear element visible in photographs of the physical lens.

---

*Analysis prepared using paraxial y-nu ray tracing (ABCD transfer matrix method). All computed values verified against patent Table 1; two OCR errors in the prescription were identified and corrected (see Section 3). Glass catalogue matches based on OHARA, Schott, and HOYA current and historical catalogues; six-digit codes derived from rounded patent values. Aspherical departure values computed from all four polynomial terms including inferred D and E. Patent coefficients D and E for Example 1 are inferred from partial OCR — see Section 5.1.*
