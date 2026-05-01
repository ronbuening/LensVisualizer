# Nikon Nikkor 35 mm f/2.8 — Nikon 35Ti  
### US Patent 5,243,468 · Fifth Embodiment (Table 5 / Claim 9)  
*Motoyuki Ohtake, Nikon Corporation — Filed 1 December 1992 · Granted 7 September 1993*

---

## 1. Introduction and Camera Context

The Nikon 35Ti, introduced in 1993, is among the most celebrated compact film cameras of the Japanese bubble-economy era. Competing alongside the Contax T2, Konica Hexar, and Leica Minilux, the 35Ti distinguished itself with a titanium shell, an analog dial instrument cluster on the top plate (reputedly manufactured by Seiko), and, most critically for its reputation, an exceptionally well-corrected 35 mm f/2.8 Nikkor prime lens. Period reviews — including a widely cited *Popular Photography* comparison — judged its optical performance superior to its rivals, describing it as "an SLR-quality optic."

The production lens contains **six elements in four groups**, all-spherical, with low-dispersion glass in the positive elements. This specification matches, exactly, the design described in US Patent 5,243,468, assigned to Nikon Corporation. The patent's fifth embodiment (Table 5 / Claim 9) is the specific variant whose geometry most naturally maps to the 35Ti body, as explained in Section 7 below. The 35Ti's close-focus distance is 0.40 m.

The patent is authored by Motoyuki Ohtake of Nikon's Ohmiya facility and claims priority to Japanese application JP 3-322186, filed December 6, 1991.

---

## 2. Design Architecture

### 2.1 Power Arrangement

The lens is of the **positive-dominant telephoto type** — a positive anterior unit (L1 + L2 + L3) paired with a negative posterior unit (L4). This arrangement, which Ohtake explicitly contrasts with the prior-art positive–negative–positive retrofocus construction, achieves compactness without the large back-focus clearance demanded by SLR mirror boxes. Because the 35Ti has no reflex mirror, a large back focal distance is unnecessary, and the design can take full advantage of this shorter architecture.

The power arrangement in full is:

| Component | Type | Power | Focal Length (normalized) | Focal Length (f≈35 mm) |
|-----------|------|-------|--------------------------|------------------------|
| L1 | Positive meniscus singlet | Positive | +128.7 mm | +45.04 mm |
| L2 | Cemented meniscus doublet | Positive | +235.9 mm | +82.52 mm |
| **Stop S** | Aperture / leaf shutter | — | — | — |
| L3 | Cemented meniscus doublet | Positive | +82.0 mm | +28.69 mm |
| L4 | Negative meniscus singlet | Negative | −87.7 mm | −30.70 mm |

*Focal lengths computed by paraxial subsystem trace (ABCD matrix method) from the patent prescription. All verified against the patent's stated conditional-expression values.*

The aperture stop S — which in the 35Ti doubles as the mechanical seat for the two-blade leaf shutter — is positioned in the air gap between L2 and L3. Its precise axial location within the 11.44 mm (normalized) gap is inferred from the patent figure (FIG. 2) rather than tabulated; it appears roughly 40 % of the way through the gap from the rear surface of L2, giving 4.576 mm from S5 to the stop and 6.864 mm from the stop to S6.

### 2.2 Near-Symmetry

The design achieves near-symmetry of positive refractive power around the aperture stop, which suppresses distortion and lateral chromatic aberration — key advantages for a wide-angle street lens. The combined positive power of L1+L2 (f_eff ≈ 83.3 mm normalized) is within ~1.5 % of the positive power of L3 alone (f₃ = 82.0 mm normalized). This near-equal distribution of positive power on both sides of the stop is the mechanism that controls odd-order aberrations.

L1 is a **positive meniscus singlet**. **L2 and L3** are cemented doublets structured differently relative to the stop:

- **L2**: the negative biconcave sub-element L21 is on the outer object side; the positive biconvex L22 faces the stop.
- **L3**: the negative biconcave sub-element L31 faces the stop directly; the positive biconvex L32 is on the outer image side.

This arrangement means the stop is flanked on its object side by L22 (positive) and on its image side by L31 (negative). The resulting positive–[stop]–negative configuration directly around the stop, together with the near-equal aggregate positive powers on each side, is the structural basis of Ohtake's aberration correction strategy.

The design is **not** a Double-Gauss, despite some secondary sources making that claim; the power sequence is positive–positive–positive–negative rather than the Double-Gauss's positive–negative–stop–negative–positive.

The lens heritage, per Nikon's own description, traces to a "symmetrical wide-angle lens" designed by Zenji Wakimoto in the 1950s; US Patent 4,394,073 (Wakimoto) is explicitly cited as prior art.

---

## 3. Prescription — Fifth Embodiment

The following prescription is drawn from Claim 9 of the patent (f = 100 normalized, FN = 2.88, 2ω = 62.9°). The body Table 5 contains two OCR transcription errors (surfaces 3 and 5 appear as −51.349 and −72.004, with the leading "1" dropped from each); the claim data, verified by the patent's own conditional-expression values, gives the correct radii.

A separate typographical error exists in the d₁₀ (back focal distance) value; see Section 3.2 below.

### 3.1 Surface Prescription

| Surf | Label | R (mm, norm.) | d (mm, norm.) | n_after | Medium | Element |
|:----:|:-----:|-------:|-------:|--------:|:------:|:-------:|
| 1 | S1 | +37.198 | 8.58 | 1.69680 | L1 glass | L1 |
| 2 | S2 | +57.533 | 4.01 | 1.00000 | Air | L1 rear |
| 3 | S3 | −151.349 | 2.86 | 1.59507 | L21 glass | L21 |
| 4 | S4 | +39.481 | 9.87 | 1.74443 | L22 glass | L21/L22 cement |
| 5 | S5 | −172.004 | 4.576† | 1.00000 | Air (pre-stop) | L22 rear |
| — | STO | flat | 6.864† | 1.00000 | — | Stop / shutter |
| 6 | S6 | −44.035 | 2.86 | 1.64831 | L31 glass | L31 |
| 7 | S7 | +89.874 | 12.59 | 1.84042 | L32 glass | L31/L32 cement |
| 8 | S8 | −37.774 | 3.72 | 1.00000 | Air | L32 rear |
| 9 | S9 | −26.149 | 4.72 | 1.56883 | L4 glass | L4 |
| 10 | S10 | −58.521 | 60.00‡ | 1.00000 | Air → film | L4 rear |

†Stop gap split: the patent's 11.44 mm total gap is divided 4.576 + 6.864 at the inferred 40 % stop position from FIG. 2.  
‡Corrected from patent's d₁₀ = 69.40; see Section 3.2.  
*R > 0 = center of curvature to the right (image side). d = axial distance to next surface. n_after = refractive index of the medium following each surface.*

**All surfaces are spherical. No aspherical coefficients are given in any of the five patent embodiments.**

**Production scaling:** All linear dimensions (R, d, semi-diameters) scale by the factor s = 35.0 / 100.0404 ≈ 0.34986 to reach the f ≈ 35 mm production focal length.

### 3.2 Back Focal Distance — Patent Error

The patent's Table 5 and Claim 9 both state d₁₀ = 69.40 mm (normalized). Independent paraxial ray tracing of the complete prescription yields a self-consistent back focal distance (BFD) of **60.00 mm**, not 69.40 mm. With d₁₀ = 60.00, the marginal ray residual at the image plane is effectively zero (y ≈ +0.000024 mm). With the stated 69.40, y = −0.094 mm — nearly a tenth of a millimeter of defocus, inconsistent with the sub-0.01 mm residuals in the other four embodiments.

| Embodiment | Stated d (BFD, norm.) | Computed BFD (norm.) | Residual y |
|:----------:|:--------------:|:------------:|:----------:|
| 1 (Claim 5) | 57.48 | 57.49 | 0.00013 |
| 3 (Claim 7) | 59.74 | 59.75 | 0.00005 |
| **5 (Claim 9)** | **69.40** | **60.00** | **−0.094** |

The most informative observation is numerical: thick-lens paraxial computation yields a close-focus BFD of **69.51 mm** (normalized) at the patent's stated 0.40 m close-focus distance. The patent's value of 69.40 matches this to within 0.11 mm, which is well within the precision of the stated figures. The most likely explanation is therefore that the close-focus BFD was accidentally entered in the infinity-focus column of Table 5 — and the error was propagated verbatim into Claim 9. A secondary possibility is a simple digit transposition (60 → 69); both explanations are consistent with the numerical evidence, but the close-focus BFD coincidence is the more specific.

The production lens has BFD ≈ **21.0 mm** at f ≈ 35 mm scale (= 60.0 × 0.34986). This is consistent with the leaf-shutter compact body geometry.

---

## 4. Element-by-Element Description

### 4.1 L1 — Positive Meniscus (Component 1)

**Shape:** Both radii are positive (R₁ = +37.198, R₂ = +57.533), with R₁ < R₂. The front surface is more steeply curved than the rear, forming a positive meniscus with its convex face directed toward the object. The element is relatively thick (8.58 normalized, ≈ 3.0 mm at production scale), occupying the largest single axial space of any element in the design.

**Optical role:** L1 contributes the majority of the primary convergence needed to gather the wide-angle bundle at the stop. Its front surface carries the largest surface power in the system (φ₁ = (1.69680 − 1.0) / 37.198 = +0.01873 normalized⁻¹). The meniscus form — rather than a simple biconvex — reduces coma and astigmatism at the large off-axis angles required for 2ω ≈ 63°. The refractive power of each individual component is kept moderate (a stated design goal to reduce sensitivity to manufacturing decentre), with L1's power being roughly 78 % of the full-system power.

**Glass:** nd = 1.69680, νd = 55.6. This matches Hoya BACD5 (nd = 1.6968, νd = 55.5) within Δnd ≈ 0.0000, Δνd ≈ +0.1 — an effectively perfect match. BACD5 is a barium crown glass with moderate to high Abbe number, contributing relatively low chromatic dispersion for its refractive index class.

**Asphericity:** None. The patent text suggests an aspherical L1 could improve field curvature and astigmatism at wide angles; the production lens retains the spherical form.

---

### 4.2 L2 — Positive Cemented Meniscus Doublet (Component 2)

L2 comprises two cemented sub-elements. The combined group is a meniscus lens with its concave surface facing the object side and **net positive refractive power** (f₂ = +235.9 mm normalized). This is the weakest positive component in the system but plays a pivotal aberration-correction role.

#### 4.2a L21 — Negative Biconcave (front sub-element)

**Shape:** R₃ = −151.349, R₄ = +39.481 (cement surface). The front surface (S3) is concave toward the object; the rear cemented surface (S4) is convex toward the image. Both surfaces concave on their interior faces → biconcave. The element is thin (d₃ = 2.86 normalized ≈ 1.0 mm at production).

**Optical role:** Negative power to partially cancel the positive contribution of L22, producing a weakly positive net doublet. Critically, the negative sub-element's lower refractive index (n₂₁ = 1.59507) relative to L22's higher index (n₂₂ = 1.74443) creates a cemented surface (S4) with **positive refractive power**: φ₄ = (1.74443 − 1.59507) / 39.481 = +0.003783 mm⁻¹. This positive-powered cement surface in L2 is the key design innovation Ohtake describes: it generates high-order negative spherical aberration to offset the positive spherical aberration from the strongly curved front surfaces, enabling the f/2.88 aperture with high correction quality.

**Glass:** nd = 1.59507, νd = 35.5. Six-digit catalog code 595355. No exact match was found in the standard Schott, Ohara, Hoya, or Hikari catalogs for this combination of nd and νd. The nearest candidates in light flint territory differ by 0.5–1.0 units in νd; this glass may be a proprietary early-1990s formulation or a catalog glass subsequently discontinued.

#### 4.2b L22 — Positive Biconvex (rear sub-element, cemented to L21)

**Shape:** Cemented front surface shared with L21 at S4 (R = +39.481). Rear surface S5 (R = −172.004) weakly convex toward the image. Biconvex.

**Optical role:** Principal positive element of the L2 group. Its higher refractive index than L21 is the mechanism by which the cemented surface acquires positive power. The rear surface S5, with very long radius, carries modest positive power and together with S4 produces the net positive doublet while the weak outer curvature limits astigmatism. Patent condition (1) — ψ₂M · r₂₂ = −0.651 — prescribes the specific balance between the cement-surface power and the rear-surface radius for optimal aberration correction.

**Glass:** nd = 1.74443, νd = 49.5. Six-digit code 744495. No standard catalog glass was identified with an exact match. This glass is likely a proprietary Nikon or Hoya formulation from the early 1990s, possibly a forerunner of what later catalogs describe as an anomalous-partial-dispersion lanthanum crown. Its relatively high Abbe number (49.5) for nd = 1.74443 places it above the nominal glass line — this "low-dispersion" characteristic (noted in Nikon's product literature for the 35Ti) minimizes chromatic aberration from this strongly positive sub-element.

---

### 4.3 Aperture Stop S

The aperture stop is situated in the air gap between L2 and L3 (the 11.44 mm normalized gap, t₂ in the patent's notation). In the Nikon 35Ti, this is also the location of the two-blade electromagnetic leaf shutter. From the patent figure (FIG. 2), the stop appears roughly 40 % of the way through this gap from the rear surface of L22; the stop position is not tabulated in the prescription.

The placement of the stop between positive L2 and positive L3 creates a near-symmetric distribution of positive refractive power on both sides of the stop. This substantially reduces distortion and keeps lateral chromatic aberration balanced across the 62.9° field.

---

### 4.4 L3 — Positive Cemented Meniscus Doublet (Component 3)

L3 is the optically dominant component: f₃ = +82.0 mm normalized (+28.69 mm at production scale), the shortest focal length of any component. Like L2, it is a cemented meniscus doublet with its concave surface facing the stop. The **defining feature of the fifth embodiment** is that L32 is exceptionally thick (d₇ = 12.59 mm normalized ≈ 4.4 mm production), far thicker than in any of the other four embodiments.

#### 4.4a L31 — Negative Biconcave (front sub-element)

**Shape:** R₆ = −44.035, R₇ = +89.874 (cement). S6 is concave toward the stop; S7 is convex toward the image. Biconcave. Thin (d₆ = 2.86 normalized ≈ 1.0 mm at production).

**Optical role:** The strongly concave front surface (S6) is the primary spherical-aberration corrector in the posterior half of the lens. Because this concave surface directly faces the stop, off-axis rays pass through it at moderate angles, limiting off-axis aberration generation. The surface shares the spherical-aberration correction duty with the L2 cemented surface (S4), allowing the correction load to be distributed. Patent condition (2), r₃₁/f₃ = −0.537, governs the balance between the front-surface curvature of L3 and the component's focal length.

**Glass:** nd = 1.64831, νd = 33.8. Six-digit code 648338. This matches Ohara S-TIM22 (equivalent to Schott N-SF2 family: nd = 1.64769, νd = 33.82) within Δnd = +0.001 and Δνd = −0.02 — a very close match.

#### 4.4b L32 — Positive Biconvex (rear sub-element, cemented to L31)

**Shape:** R₇ = +89.874 (shared cement surface). R₈ = −37.774, convex toward image. Biconvex. **Notably thick** (d₇ = 12.59 normalized ≈ 4.4 mm at production). This is the distinguishing feature of the fifth embodiment — in Embodiments 1–4, the equivalent element is only ~10 mm normalized.

**Optical role:** Primary convergence in the rear half of the system. The thick element geometry pushes the physical rear face of L3 far toward L4, dramatically reducing the L3–L4 air gap to t₃ = 3.72 mm (condition (5): t₃/t₂ = 0.325). Patent condition (4), ψ₃M/ψ = 0.214, sets the contribution of the L3 cement surface to the overall power. The cement surface (S7) is weakly positive — it assists spherical aberration correction without contributing so heavily that astigmatic difference at wide field angles becomes intractable.

**Glass:** nd = 1.84042, νd = 43.3. Six-digit code 840433. Very high refractive index for a moderately dispersive glass. No exact match was found in the standard Ohara, Schott, or Hoya published catalogs. L32 is likely either a proprietary Nikon formulation or an early-1990s catalog entry subsequently discontinued. Like L22, its high nd combined with above-average νd places it in the anomalous-partial-dispersion region of the glass map, above the standard Abbe line.

The combination of conditions (6) and (7) — Np = mean(n_L1, n_L22, n_L32) = 1.761 > 1.70, and Nn = mean(n_L21, n_L31, n_L4) = 1.604 < 1.70 — ensures that the positive-element refractive indices are substantially higher than the negative-element refractive indices. This purposeful "index inversion" relative to the conventional achromat rule suppresses the Petzval sum (see Section 6), enabling the flat field required for 35 mm format coverage at 62.9° full angle.

---

### 4.5 L4 — Negative Meniscus (Component 4)

**Shape:** R₉ = −26.149, R₁₀ = −58.521. Both radii negative, with |R₉| < |R₁₀|, so the front surface is more steeply curved. L4 is a negative meniscus with its **concave face toward the object (stop side)**. Relatively thin (4.72 normalized ≈ 1.65 mm at production).

**Optical role:** L4 is the negative posterior element that gives the design its telephoto-type characteristic. With f₄ = −87.7 mm normalized (−30.70 mm at production), it carries nearly equal and opposite power to L3. Its primary functions are:

1. **Field curvature and astigmatism correction.** The concave front surface directly facing the stop generates significant negative contributions to the Petzval sum, partially compensating the positive contributions from L1 and the biconvex elements.
2. **Distortion correction.** In conjunction with the near-symmetric positive groups flanking the stop, L4's rear negative surface helps keep distortion near zero across the field.
3. **Focal-length extension (telephoto-type mechanism).** The anterior positive group (L1+L2+L3) alone has an effective focal length of only ~57.2 mm normalized (≈ 20.0 mm at production scale). L4's negative power extends the system EFL to 100.0 mm normalized (35 mm production) — an increase by a factor of ~1.75× while adding negligible physical length.

**Glass:** nd = 1.56883, νd = 56.0. This matches Schott N-BAK4 (nd = 1.56883, νd = 56.04) within Δnd ≈ 0.0000, Δνd = −0.04 — an excellent match. Its low refractive index (meeting condition (7): n_L4 = 1.569 < 1.70) ensures that L4's negative power contributes negatively to the Petzval sum.

---

## 5. Verified Conditional Expressions

All seven conditional expression values for the fifth embodiment were independently computed and match the patent's stated values within rounding:

| Cond. | Expression | Computed | Patent | Interpretation |
|:-----:|:----------:|:--------:|:------:|:--------------|
| (1) | ψ₂M · r₂₂ | −0.651 | −0.651 | L2 cemented surface power × rear radius |
| (2) | r₃₁ / f₃ | −0.537 | −0.537 | L3 front surface relative to L3 focal length |
| (3) | ψ₁₋₄ / ψ | 0.890 | 0.891 | Mean component power vs system power |
| (4) | ψ₃M / ψ | 0.214 | 0.214 | L3 cemented surface power vs system power |
| (5) | t₃ / t₂ | 0.325 | 0.325 | Gap ratio, L3–L4 vs stop gap |
| (6) | Np | 1.761 | 1.761 | Mean positive-element refractive index |
| (7) | Nn | 1.604 | 1.604 | Mean negative-element refractive index |

Conditions (1)–(5) govern specific aberration balances; conditions (6) and (7) mandate high-index positive elements and lower-index negative elements to reduce Petzval sum and control field curvature and astigmatism. Condition (3) yields 0.890 vs. patent's 0.891 — a rounding discrepancy of 0.001, consistent with the limited precision of the printed conditional values.

---

## 6. Optical System Summary

| Parameter | Normalized (f=100) | Production (f≈35 mm) |
|:----------|:------------------:|:--------------------:|
| EFL | 100.04 mm | 35.00 mm |
| F-number (design) | f/2.88 | f/2.88 |
| F-number (marketed) | — | f/2.8 |
| Full angle of view | 62.9° | 62.9° (35 mm format) |
| Back focal distance | 60.00 mm¹ | 20.99 mm |
| Lens length (S1 to S10) | 60.65 mm | 21.22 mm |
| Total track | 120.65 mm | 42.21 mm |
| Telephoto ratio | 1.206² | 1.206 |
| Entrance pupil SD | 17.37 mm | 6.08 mm |
| Petzval sum | 0.001469 mm⁻¹ | 0.004199 mm⁻¹ |
| Petzval radius | 680.7 mm | 238.2 mm |
| Elements / Groups | 6 / 4 | 6 / 4 |
| Aspherical surfaces | 0 | 0 |

¹ Corrected from patent's d₁₀ = 69.40 (normalized), which corresponds to the close-focus BFD at 0.40 m; see Section 3.2.

² Telephoto ratio = total track / EFL = 120.65 / 100.04 = 1.206. Because TR > 1, the total optical track is slightly *longer* than the focal length — this is not a "telephoto" in the strict geometric sense (which requires TR < 1). The design's compactness relative to an SLR retrofocus comes instead from a short back focal distance: BFD / EFL = 60.0 / 100.04 ≈ 0.60. See Section 7.

---

## 7. Why the Fifth Embodiment?

Embodiments 1–4 share the FIG. 1 layout with relatively conventional element spacings. The fifth embodiment (FIG. 2) is distinguished by two characteristics:

- **Thick L32** (d₇ = 12.59 normalized; ~25 % thicker than Embodiments 1–4's ~10 mm): The biconvex positive rear element of L3 is substantially more massive, mechanically and optically.
- **Very short t₃** (3.72 normalized vs 8.57–9.71 in Embodiments 1–4; t₃/t₂ = 0.325 vs 0.712–0.895): The gap between L3 and L4 is reduced to roughly one-third of the stop gap, making the posterior group highly compact.

The net effect is that, **with a comparable total track to the other embodiments** (~120–121 mm normalized), the fifth embodiment compresses the rear portion of the lens so that L4 sits very close to L3. This suits the 35Ti's shallow body depth (36 mm external depth; lens barrel depth considerably less). The design achieves its compatibility with the compact body not through a telephoto ratio below 1, but through a short back focal distance: BFD = 60.0 normalized = 0.60 × EFL. In an SLR retrofocus design, BFD would exceed EFL; here, BFD is 40 % shorter than EFL, which is the geometrically critical property for fitting the lens into the compact body.

Condition (3): ψ₁₋₄/ψ = 0.891 for the fifth embodiment is the highest in the series (range 0.584–0.891), reflecting the redistribution of refractive power toward the stronger L3/L4 combination that enables the compact geometry.

---

## 8. Aspherical Surfaces — Design vs. Production

**In the patent:** No numerical embodiment provides aspherical coefficients. The text explicitly states that introducing an aspherical surface into L1 or L4 could improve astigmatism and field curvature correction, and that aspherizing L2 or L3 could improve spherical aberration correction. This is offered as a performance enhancement pathway, not a disclosed design.

**In production:** All available specifications for the Nikon 35Ti — including Nikon's own product documentation, retail listings, and multiple independent camera databases — describe the lens as six elements in four groups with no mention of aspherical surfaces. The production lens is all-spherical, consistent with the patent's tabulated designs.

---

## 9. Focus Mechanism

Focusing is achieved by the **totally axially moving system**: the entire lens assembly — all elements together, fixed relative to one another — translates forward (toward the object) as focus distance decreases from infinity to 0.40 m. No internal group movements occur; all surface spacings within the barrel remain constant during focus.

The focusing helix advances the entire barrel toward the object, and the BFD increases as focus distance decreases. Thick-lens paraxial computation (using the front principal plane position H, located 3.32 mm behind S1) yields an extension of **3.33 mm** at the rated 0.40 m close-focus distance, giving a close-focus BFD of **24.32 mm** at production scale (69.51 mm normalized). This computed close-focus BFD matches the patent's erroneously listed d₁₀ = 69.40 (normalized) to within 0.11 mm, as discussed in Section 3.2.

---

## 10. Glass Identification Summary

| Element | nd | νd | Six-Digit Code | Best Catalog Match | Δnd | Δνd | Confidence |
|:-------:|:--:|:--:|:--------------:|:------------------:|:---:|:---:|:----------:|
| L1 | 1.69680 | 55.6 | 697556 | Hoya BACD5 (1.6968 / 55.5) | ≈0 | +0.1 | High |
| L21 | 1.59507 | 35.5 | 595355 | No standard catalog match identified | — | — | Low |
| L22 | 1.74443 | 49.5 | 744495 | No standard catalog match | — | — | Unidentified |
| L31 | 1.64831 | 33.8 | 648338 | Ohara S-TIM22 / Schott N-SF2 equiv. (1.64769 / 33.82) | +0.001 | −0.02 | High |
| L32 | 1.84042 | 43.3 | 840433 | No standard catalog match | — | — | Unidentified |
| L4 | 1.56883 | 56.0 | 569560 | Schott N-BAK4 (1.56883 / 56.04) | ≈0 | −0.04 | High |

L22 and L32 — both positive elements with unusually high Abbe numbers for their refractive index class — are most likely proprietary Nikon or Hoya formulations from the early 1990s. Nikon's marketing description of "low-dispersion glass" in the 35Ti lens refers specifically to these two glasses, whose elevated νd values relative to their nd positions them above the standard glass line and enable the chromatic aberration control required for edge-to-edge sharpness on 35 mm film.

---

## 11. Sources

- **Patent:** US 5,243,468. Ohtake, Motoyuki. "Wide Angle Objective Lens." Nikon Corporation, September 7, 1993. Filed December 1, 1992. Priority: JP 3-322186, December 6, 1991.
- **Production specifications:** Multiple first-party and third-party sources confirm 6 elements / 4 groups; see Nikon product documentation and Camera Lane, BuyMoreFilm, Select/C0 retail specifications (consistent across sources).
- **Lens design heritage:** Wikipedia, "Nikon Ti cameras" (references Zenji Wakimoto's "symmetrical wide-angle lens" as design ancestor and cites US 4,394,073 as prior art, consistent with the patent itself).
- **Camera review:** Richards, Dan. *Popular Photography* comparison (cited in Wikipedia and multiple secondary sources): "the nod for optical quality has to go to the Nikon 35Ti."
- **Related Nikon history:** Nikkor — The Thousand and One Nights, No. 38, Nikon Corporation (imaging.nikon.com), for lineage context of Nikon 35 mm f/2.8 SLR designs.
- **Paraxial computations:** Independent Python ABCD matrix trace; all conditional expression values and BFD / extension values independently verified against patent-stated quantities.
