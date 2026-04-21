# Optical Analysis: Ricoh GR IIIx Lens

## US 2022/0026670 A1 — Example 3 (Production Design)

**Patent:** US 2022/0026670 A1, *Imaging Lens, Camera, and Portable Information Terminal Apparatus*
**Inventor:** Kazuyasu Ohashi (individual applicant, Chiba, Japan)
**Priority date:** March 7, 2019 (JP 2019-041727)
**PCT filed:** February 17, 2020 (PCT/JP2020/006106)
**Published:** January 27, 2022

---

## 1. Production Design Identification

Example 3 from US 2022/0026670 A1 is identified as the production design for the Ricoh GR IIIx through convergence of six independent criteria:

| Parameter | Patent Example 3 | Ricoh GR IIIx (manufacturer spec) | Match |
|---|---|---|---|
| Focal length | 26.05 mm | 26.1 mm | ✓ (within 0.2%) |
| Maximum aperture | f/2.87 | f/2.8 | ✓ (standard rounding) |
| Element count | 7 | 7 | ✓ |
| Group count (air-separated) | 5 | 5 | ✓ |
| Aspherical elements | 2 (L11, L41) | 2 | ✓ |
| Image circle | 28.4 mm diagonal (Y′ = 14.2 mm) | APS-C (23.5 × 15.6 mm, diag ≈ 28.2 mm) | ✓ |
| Half angle of view | 28.3° | ~28.3° (40 mm equiv.) | ✓ |

**Note on patent attribution:** The US publication lists the inventor Kazuyasu Ohashi as the individual applicant — no company is named. The connection to Ricoh is established through convergence of product specifications, not explicit assignment. The patent's detailed description of a portable information terminal apparatus with collapsible lens barrel and 24-megapixel-class sensor directly corresponds to the GR IIIx product. The inventor has prior optical patents in the compact camera and interchangeable lens space.

---

## 2. OCR Correction Note

In transcribing the patent, one critical OCR error was identified and corrected:

**Surface 2 radius of curvature:** The OCR output reads "224.908" but the correct value is **24.908 mm**. The leading "2" was erroneously prepended from the surface number. This was confirmed by independent verification: with R₂ = 24.908, the computed EFL is 26.051 mm, matching the patent's stated f = 26.05 mm to four significant figures. With the uncorrected value (224.908), the computed EFL is 24.999 mm — a 4% discrepancy that contradicts the patent. Cross-verification against Examples 1, 2, and 4 (where computed EFLs match their stated values to within 0.002 mm) confirms the correctness of both the ray trace methodology and the OCR correction.

Additionally, several of the conditional expression values listed under Example 3 (¶0221–0222) contain OCR artifacts. Of the sixteen conditional expressions recomputed from the corrected prescription, thirteen match exactly. The three discrepancies are: (a) nd₁P is printed as 1.834 and nd₂P as 1.833, but the actual glasses are L-LAH85V (nd = 1.854) and S-LAH58 (nd = 1.883) — the digits "5" and "8" were likely OCR'd as "3" in both cases; (b) r₁F/f is printed as 0.335, but 9.247/26.05 = 0.355 — a single-digit corruption; (c) f₄/f₁ is printed as 0.146, but the computed value is −0.146 — the negative sign was likely dropped in formatting. These discrepancies are confined to the conditional expression list; the underlying prescription data (radii, thicknesses, glass indices) produces an EFL and all other geometric ratios in exact agreement with the patent's stated values.

The glass name for surface 9 (L31) was also OCR-corrupted to "S-LAH58," which actually belongs to surface 6 (L22). The PgF value printed for S9 (0.5667) is likewise S-LAH58's partial dispersion, not the actual L31 glass. The true glass name is unreadable from the available patent scan; identification is discussed in §5.2.

---

## 3. Design Architecture

### 3.1 Group Structure

The lens follows a four-group power arrangement described by the patent as a "substantially symmetrical type with telephoto characteristics." Positive elements flank the aperture stop, with a weak first group and a negative rear group that shortens the back focal distance relative to a purely symmetric design.

| Group | Elements | Focal Length | Power | Role |
|---|---|---|---|---|
| G1 | L11 + L12 (cemented) | +443.0 mm | Very weakly positive | Aberration-correcting front doublet |
| G2 | L21, L22 | +48.3 mm | Positive | Primary converging group (pre-stop) |
| *Stop* | — | — | — | Aperture diaphragm |
| G3 | L31 + L32 (cemented) | +25.6 mm | Positive | Primary converging group (post-stop) |
| G4 | L41 | −64.9 mm | Negative | Telephoto-shortening field flattener |

The composite front half (Groups G1 + G2) has FL = +52.5 mm, and the composite rear half (Groups G3 + G4) has FL = +40.5 mm, giving a front-to-rear power ratio f₁₋₂/f₃₋₄ = 1.296. This near-unity ratio reflects the quasi-symmetric architecture, with a slight bias toward rear-group convergence that the patent describes as advantageous for coma, distortion, and lateral chromatic aberration correction.

Note on group counting: the patent defines four *power groups* (I–IV), but Ricoh's marketing specification counts five *air-separated groups*. The difference arises because the patent's Group G2 contains two air-separated elements (L21 and L22, separated by a 0.10 mm air gap), which count as separate groups under the marketing convention. The five air-separated groups are: {L11+L12}, {L21}, {L22}, {L31+L32}, {L41}.

### 3.2 Total Track and Telephoto Ratio

| Parameter | Value |
|---|---|
| Total track (L, S1 to image) | 32.94 mm |
| Telephoto ratio (L/f) | 1.264 |
| Lens total thickness (DT, S1 to S13) | 16.46 mm |
| DT/f | 0.632 |
| Back focal distance (S13 to filter front) | 14.378 mm |

The telephoto ratio of 1.264 is unusually compact for a semi-wide-angle lens, confirming the patent's design objective. For comparison, a symmetric double-Gauss design at this focal length would typically have L/f ≈ 1.5–1.8. The compactness is achieved by the negative rear group (Group G4), which pulls the rear principal plane forward without the severe off-axis penalty typical of telephoto designs at wider angles — a consequence of the quasi-symmetric aberration balancing described in ¶0073–0076 of the patent.

### 3.3 Exit Pupil and Chief Ray Angle

The patent's conditional expression (10) gives tan(θP_max) = 0.672 for Example 3, where θP_max is the angle of incidence of the principal ray at the maximum image height onto the image surface. This corresponds to θP_max ≈ 33.9° — substantially larger than the half angle of view ω = 28.3°. The exit pupil is therefore positioned relatively close to the image plane, causing oblique incidence at the sensor periphery. This is a deliberate design choice: the patent notes (¶0005, 0089) that modern sensors with optimized on-chip microlenses can tolerate chief ray angles of 30–40° without significant brightness or color shading, and that allowing non-telecentric exit geometry enables more compact lens types to be used. The negative rear group (Group G4) partially controls this exit pupil position, per conditional expression (6): f₄/f₁ = −0.146.

---

## 4. Element-by-Element Analysis

### 4.1 Element Summary

| # | Name | Shape | nd | νd | FL (mm) | Glass | Cemented |
|---|---|---|---|---|---|---|---|
| 1 | L11 | Pos. Meniscus (1× Asph) | 1.85400 | 40.38 | +15.86 | OHARA L-LAH85V | D1 |
| 2 | L12 | Neg. Meniscus | 1.78880 | 28.43 | −13.48 | OHARA S-NBH58 | D1 |
| 3 | L21 | Biconcave | 1.63980 | 34.47 | −25.89 | OHARA S-TIM27 | — |
| 4 | L22 | Biconvex | 1.88300 | 40.76 | +17.23 | OHARA S-LAH58 | — |
| 5 | L31 | Biconvex | 1.75500 | 52.32 | +9.12 | OHARA 755523 (TaC6; see §5.2) | D2 |
| 6 | L32 | Biconcave | 1.53172 | 48.84 | −13.40 | OHARA S-TIL6 | D2 |
| 7 | L41 | Neg. Meniscus (2× Asph) | 1.90270 | 31.00 | −64.86 | OHARA L-LAH86 | — |

All element focal lengths computed via thick-lens formula and verified by paraxial ray trace (EFL = 26.051 mm, matching patent f = 26.05 mm).

### 4.2 Detailed Element Roles

**L11 — Front positive meniscus (aspherical).** The strongest converging element in the front half of the system (ahead of the stop), L11 carries the primary telephoto-shortening positive power that the patent identifies as key to compactness (¶0076, 0080). Its front surface is aspherical, allowing correction of spherical aberration and coma at high ray heights without requiring additional elements. The glass is OHARA L-LAH85V (nd = 1.854, νd = 40.4), a precision-moldable lanthanum dense flint — the "L-" prefix denotes OHARA's low-Tg moldable glass series, confirming this element is manufactured by precision glass molding (PGM), not conventional grinding and polishing. This is consistent with Ricoh's stated use of "aspherical high-precision molded glass lenses." The high refractive index (>1.85) reduces surface curvatures for a given power, which the patent identifies as essential to controlling aberration sensitivity (conditional expression 15: nd₁P > 1.75).

**L12 — Rear negative meniscus of first doublet.** Cemented to L11, L12 provides chromatic correction within Group G1. Its glass, OHARA S-NBH58 (nd = 1.789, νd = 28.4), is a high-dispersion niobium-barium flint. The low Abbe number paired against L11's moderate Abbe number creates the dispersion differential needed for achromatic correction of the front doublet. The cemented junction at R = 24.908 mm allows L11 and L12 to "properly exchange aberrations with each other" (¶0086). The combined doublet D1 has FL ≈ +443 mm — near-afocal — meaning Group G1 contributes primarily to aberration correction rather than convergence. The patent notes that the first group may have either positive or negative net power (¶0070); in Example 3, it is very weakly positive.

**L21 — Biconcave negative element.** The front element of Group G2, L21 introduces the concave-toward-object surface that the patent identifies as critical for reducing the diameter of Group G1 and correcting coma of lower rays (¶0075). Its glass, OHARA S-TIM27 (nd = 1.640, νd = 34.5), is a moderate-index titanium flint — relatively inexpensive and easy to manufacture. The weak negative power (FL = −25.9 mm) works in concert with L22's stronger positive power to produce the net positive convergence of Group G2 while maintaining the coma-correcting concave surface.

**L22 — Biconvex positive element.** The principal converging element ahead of the stop, L22 uses OHARA S-LAH58 (nd = 1.883, νd = 40.8), one of the highest-index lanthanum glasses available. The very high refractive index permits strong positive power (FL = +17.2 mm) from relatively gentle curvatures (R₆ = +17.395, R₇ = −113.651), which reduces higher-order aberrations at this critical convergence point. Its convex-toward-object surface faces the convex-toward-image surface of L31, creating the pair of opposing convex surfaces straddling the stop that the patent describes as the foundation of the quasi-symmetric aberration-correction strategy (¶0074). The patent requires nd₂P > 1.75 (conditional expression 16); at 1.883, L22 exceeds this comfortably.

**L31 — Biconvex positive element (front of rear cemented group).** The primary converging element behind the stop, L31 has the shortest focal length of any element in the system (FL = +9.1 mm), making it the strongest single contributor to system power. Its glass (nd = 1.755, νd = 52.3) is a high-index, low-dispersion lanthanum crown — the old OHARA designation TaC6 (Tantalum Crown), glass code 755523 (see §5.2 for full identification). The strong positive power with low dispersion anchors the chromatic correction of the rear group, balancing the dispersive contributions of the front group across the stop. The convex image-side surface of L31 faces L22's convex object-side surface, completing the quasi-symmetric opposing-convex architecture.

**L32 — Biconcave negative element (rear of rear cemented group).** Cemented to L31, L32 forms doublet D2 with a net positive FL of +25.6 mm. The glass is OHARA S-TIL6 (nd = 1.532, νd = 48.8), a low-index titanium crown. The large index differential at the L31/L32 junction (Δnd = 0.223) creates strong chromatic correction at this interface, while the negative power compensates for field curvature and Petzval sum contributions from the strong positive elements. The concave image-side surface of L32 (R₁₁ = +33.044) faces the concave object-side surface of L41 (R₁₂ = −18.000), creating the pair of opposing concave surfaces that the patent describes as critical for aberration balancing on the image side (¶0074).

**L41 — Rear negative meniscus (aspherical).** The sole element of Group G4, L41 provides the negative rear power that creates the telephoto shortening of the total track. Its glass is OHARA L-LAH86 (nd = 1.903, νd = 31.0), another precision-moldable ("L-" prefix) lanthanum dense flint with the highest refractive index in the system. The patent marks both surfaces as aspherical (S12* and S13*), though only S13 has published aspherical coefficients. The rear surface (S13) shows large aspherical departure — up to 91 µm at h = 5 mm. This heavy aspheric correction on L41 is responsible for controlling field-dependent aberrations (astigmatism, distortion, and coma flare) that would otherwise be severe with the telephoto-shortened back focal distance. The patent explicitly identifies aspherical surfaces on Group G1 and Group G4 elements as having "a large advantageous effect on correction of astigmatism, coma aberration, and distortion" (¶0112). The object-side concave surface of L41 has stronger paraxial curvature than the image-side surface (|1/R₁₂| > |1/R₁₃|), satisfying the patent requirement that Group G4 "has on the object side a surface having a stronger refractive power than a surface on the image side" (¶0054).

---

## 5. Glass Identification

Six of the seven glasses are explicitly named in the patent and confirmed against the OHARA catalog. The seventh requires identification by nd/νd matching.

### 5.1 Confirmed Glasses

| Element | Patent designation | nd | νd | PgF | Glass family | Manufacturing |
|---|---|---|---|---|---|---|
| L11 | OHARA L-LAH85V | 1.85400 | 40.38 | 0.5688 | Lanthanum dense flint | Precision glass mold (L-prefix) |
| L12 | OHARA S-NBH58 | 1.78880 | 28.43 | 0.6009 | Niobium-barium high-dispersion flint | Conventional polish (S-prefix) |
| L21 | OHARA S-TIM27 | 1.63980 | 34.47 | 0.5922 | Titanium medium-index flint | Conventional polish |
| L22 | OHARA S-LAH58 | 1.88300 | 40.76 | 0.5667 | Lanthanum dense flint | Conventional polish |
| L32 | OHARA S-TIL6 | 1.53172 | 48.84 | 0.5631 | Titanium low-index crown-flint | Conventional polish |
| L41 | OHARA L-LAH86 | 1.90270 | 31.00 | 0.5943 | Lanthanum dense flint | Precision glass mold (L-prefix) |

### 5.2 L31 Glass Identification

The L31 glass (nd = 1.75500, νd = 52.32) had its catalog name corrupted by OCR — the patent scan erroneously shows "S-LAH58" for surface 9, which is the glass used on surface 6 (L22). The PgF value printed for S9 (0.5667) is likewise S-LAH58's partial dispersion ratio, not the actual L31 glass. The true PgF for this glass is not recoverable from the corrupted text.

By nd/νd matching, the glass occupies the high-index lanthanum crown region of the glass map. Its OHARA six-digit glass code would be 755523. In OHARA's cross-reference tables, glass code 755523 corresponds to the old designation **TaC6** (Tantalum Crown 6) — a glass from OHARA's historical catalog that is not part of the current standard S-prefix product line. The Schott equivalents at this position are N-LAK33B and N-LAK21 (both nd = 1.755, νd = 52.3). The HOYA equivalent is TAC6.

The nearest current OHARA catalog glasses are S-LAL61 (nd = 1.741, νd = 52.6) and S-LAL59 (nd = 1.734, νd = 51.5), neither of which matches to patent precision. The glass may be available from OHARA as a special-order item, or the production lens may use a substitute from the same glass-map region. This glass position — high index with relatively low dispersion — places it squarely in the category Ricoh describes in marketing materials as "high-refractive index low-dispersion glass."

---

## 6. Aspherical Surfaces

The lens contains two aspherical elements (L11 and L41), each manufactured by precision glass molding. The patent prescription marks three surfaces with an asterisk denoting aspherical: S1 (L11 front), S12 (L41 front), and S13 (L41 rear). However, the aspherical coefficient tables provide data for only two of these — S1 and S13. Surface 12 is marked aspherical but has no published coefficients in the Example 3 data section.

This is likely not an error. Since L41 is manufactured by precision glass molding (confirmed by the L-LAH86 moldable glass), both surfaces are typically formed in the same molding operation and can carry aspherical profiles at no additional manufacturing cost. Surface 12 may have very mild asphericity (small coefficients that round to zero at the publication precision), or its coefficients may simply have been omitted from the published text. For the data file, S12 is included in the aspherical table with K = 0 and all polynomial coefficients set to zero. Only the two surfaces with published coefficients are quantified below.

### 6.1 Surface 1 (L11 front) — Correction of on-axis and near-axis aberrations

| Coefficient | Value |
|---|---|
| K (conic) | 0.0 |
| A₄ | −2.63557 × 10⁻⁵ |
| A₆ | −6.86204 × 10⁻⁷ |
| A₈ | +9.51319 × 10⁻⁹ |
| A₁₀ | −2.99238 × 10⁻¹⁰ |

The departure from a best-fit sphere is negative (the aspherical surface is flatter than the sphere at the rim), reaching approximately −26 µm at h = 5 mm. This reduces the marginal-ray convergence angle relative to a spherical surface, compensating for the excessive refraction that the steep front curvature would otherwise impose on rays at high aperture heights. The A₄ term dominates, with A₆ providing a secondary correction that becomes significant above h ≈ 3 mm. This is characteristic of a primary spherical aberration corrector — the dominant fourth-order term addresses third-order SA, while the sixth-order term addresses fifth-order SA residuals.

### 6.2 Surface 13 (L41 rear) — Correction of field-dependent aberrations

| Coefficient | Value |
|---|---|
| K (conic) | 0.0 |
| A₄ | +1.30975 × 10⁻⁴ |
| A₆ | −3.75252 × 10⁻⁷ |
| A₈ | +5.96446 × 10⁻⁸ |
| A₁₀ | −8.12812 × 10⁻¹⁰ |

The departure is positive and much larger — +91 µm at h = 5 mm — meaning the aspherical surface curves more steeply toward the axis at the rim than a sphere would. The A₄ coefficient is 5× larger than that of S1, and the A₈ term remains significant well into the mid-zone. This heavy aspherization is characteristic of a field flattener / distortion corrector, where off-axis ray bundles require substantially different local curvature than on-axis rays. The positive departure increases the local negative power at the rim, pulling the tangential field surface inward (toward the sensor) and reducing the pincushion distortion tendency of the telephoto-shortened design. The patent's aberration plots for Example 3 (Fig. 13) show that distortion is held to less than or equal to 1.5% in absolute value across the full APS-C image circle (¶0419) — a result that would not be achievable with spherical surfaces alone in this compact configuration.

---

## 7. Focus Mechanism

The patent describes focusing by "movement of the whole imaging lens in the optical-axis direction, or through movement of the light-receiving element" (¶0428). No variable air gaps are provided in the prescription for any numerical example, confirming that the design uses **unit focus** — the entire 7-element optical assembly translates as a rigid unit along the optical axis.

This is consistent with the GR IIIx's mechanical design: the collapsible lens barrel extends from the body for shooting and retracts for transport, and the autofocus motor drives the entire lens group.

The unit-focus approach is the simplest mechanically and introduces no aberration variation with focus distance (the optical design is optimized for infinity and used unchanged at all distances). The tradeoff is that the full lens mass must be moved for autofocus, which limits AF speed — a known characteristic of the GR IIIx relative to interchangeable-lens cameras with inner-focus designs.

Close focus: 0.2 m (normal mode), 0.12 m (macro mode, per GR IIIx specifications).

---

## 8. Chromatic Correction Strategy

The lens uses two cemented doublets (D1 at the front, D2 at the rear) as its primary chromatic correction mechanism. The glass pairings follow a classical approach of pairing high-index, moderate-dispersion lanthanum glasses with lower-index, higher-dispersion flints or crown-flints.

**Doublet D1 (L11 + L12):** L-LAH85V (νd = 40.4) paired with S-NBH58 (νd = 28.4). The Abbe number difference Δνd = 11.9 is modest, reflecting the near-afocal nature of this doublet — it does not need to achromatize a strong net power. Instead, D1's role is to establish the chromatic balance of the front group as a whole, ensuring that the strong positive power of L22 does not introduce excessive axial color.

**Doublet D2 (L31 + L32):** 755523/TaC6 (νd = 52.3) paired with S-TIL6 (νd = 48.8). The Abbe number difference Δνd = 3.5 is very small. However, the refractive index difference at the junction is large (Δnd = 0.223), meaning the junction surface carries significant power for correcting both chromatic and monochromatic aberrations. The small Δνd indicates that D2's chromatic correction is primarily through the combination of strong junction curvature with modest dispersion difference — a strategy that relies on the high absolute refractive indices to maintain achromatic balance while allowing the junction to do double duty for field curvature control.

Ricoh's marketing materials describe the use of "high-refractive index low-dispersion glass lenses" — a direct reference to glasses like L31 (nd = 1.755, νd = 52.3), which combines high refractive index with genuinely low dispersion, occupying the upper-left region of the glass map. L22 (nd = 1.883, νd = 40.8) is high-index with moderate dispersion, contributing to the power-arrangement compactness rather than to chromatic correction per se.

---

## 9. Corrected Surface Prescription

For reference, the complete corrected prescription for Example 3:

| Surface | R (mm) | d (mm) | nd | νd | Element | Note |
|---|---|---|---|---|---|---|
| 1* | 9.247 | 2.91 | 1.85400 | 40.38 | L11 (front) | Asph, PGM |
| 2 | 24.908 | 0.70 | 1.78880 | 28.43 | L11→L12 junction | Cemented (D1) |
| 3 | 7.360 | 2.01 | 1.0 (air) | — | L12 rear | — |
| 4 | −22.769 | 0.70 | 1.63980 | 34.47 | L21 (front) | — |
| 5 | 61.496 | 0.10 | 1.0 (air) | — | L21 rear | — |
| 6 | 17.395 | 2.32 | 1.88300 | 40.76 | L22 (front) | — |
| 7 | −113.651 | 1.20 | 1.0 (air) | — | L22 rear | — |
| STO | ∞ | 1.20 | 1.0 (air) | — | Stop | — |
| 9 | 24.522 | 2.57 | 1.75500 | 52.32 | L31 (front) | — |
| 10 | −9.139 | 0.60 | 1.53172 | 48.84 | L31→L32 junction | Cemented (D2) |
| 11 | 33.044 | 1.15 | 1.0 (air) | — | L32 rear | — |
| 12* | −18.000 | 1.00 | 1.90270 | 31.00 | L41 (front) | Asph, PGM (no published coeffs) |
| 13* | −26.676 | 14.378 | 1.0 (air) | — | L41 rear → BFD | Asph, PGM |
| 14 | ∞ | 1.40 | 1.51633 | 64.14 | Filter | IR-cut / cover glass |
| 15 | ∞ | 0.70 | 1.0 (air) | — | → Image | — |

System parameters (computed, verified against patent):
- f = 26.05 mm, F/2.87, 2ω = 56.6°, Y′ = 14.2 mm
- Total track: 32.94 mm, telephoto ratio: 1.264
- Focus: unit focus (whole lens translates)

---

## 10. Semi-Diameter Estimation

The patent does not list semi-diameters. The values used in the data file were estimated through the following procedure:

1. **Paraxial marginal ray trace** at EP semi-diameter (f/(2F) = 4.54 mm) gives the on-axis beam footprint at each surface.
2. **Paraxial chief ray trace** at half-field angle ω = 28.3° gives the off-axis chief ray height. The chief ray was weighted at approximately 50% (partial field) to account for the significant vignetting typical of compact camera lenses.
3. **Combined SD** = (|h_marginal| + 0.5 × |h_chief|) × 1.10 (10% mechanical clearance).
4. **Constraint enforcement**: SD/|R| < 0.90, edge thickness > 0.1 mm, front/rear SD ratio ≤ 1.25, cross-gap sag overlap check. The S3 (L12 rear, R = +7.360 mm) to S4 gap is the tightest constraint — the strong curvature of S3 creates large sag that limits the maximum usable clear aperture in this region.
5. All constraints were verified computationally; all pass.

These estimates represent the minimum clear aperture needed for on-axis and moderate off-axis performance. Actual production clear apertures may be slightly larger (accommodating more field coverage) or smaller (if vignetting is accepted at intermediate field heights).

---

## 11. Summary

The Ricoh GR IIIx lens is a carefully optimized 7-element design that achieves remarkable compactness (telephoto ratio 1.264) for a semi-wide-angle 40 mm-equivalent lens covering an APS-C image circle. The quasi-symmetric power arrangement — positive groups flanking the stop with a weak front group and a negative rear group — allows efficient correction of coma, distortion, and lateral chromatic aberration while maintaining a short total track suitable for a pocketable camera body.

Two precision-glass-molded aspherical elements (L11 at the front and L41 at the rear) serve complementary roles: L11 corrects primarily on-axis aberrations (spherical aberration and near-axis coma), while L41's heavily aspherized rear surface corrects field-dependent aberrations (astigmatism, distortion, and peripheral coma). The use of very high-index lanthanum glasses throughout (three elements with nd > 1.85, including the ultra-high-index L-LAH86 at nd = 1.903) keeps surface curvatures moderate despite the strong powers required, controlling higher-order aberrations and manufacturing sensitivity.

The unit-focus mechanism trades AF speed for mechanical simplicity and optical consistency across the focus range — a design choice appropriate for the GR IIIx's street-photography and snapshot mission.
