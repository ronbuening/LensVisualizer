# Nikon Nikkor-N Auto 28mm f/2 — Patent Analysis

**Patent:** US 3,736,049 · Filed September 29, 1971 · Granted May 29, 1973
**Inventor:** Yoshiyuki Shimizu · **Assignee:** Nippon Kogaku K.K. (Nikon)
**Japanese Priority:** JP 45/85417, September 30, 1970
**Production lens:** Nikkor-N Auto 28mm f/2 (1970–1977), AI Nikkor 28mm f/2 (1977–1981), AI-S Nikkor 28mm f/2S (1981–2005)

---

## 1. Design Overview

US 3,736,049 describes a 9-element, 8-group retrofocus wide-angle lens with a maximum aperture of f/2 and an angle of field of 74.5°. The patent presents one worked numerical example at a normalized focal length of f = 100 mm. The production Nikkor-N Auto 28mm f/2 scales this design by a factor of approximately 0.282 to reach the marketed 28 mm focal length.

The design is structured as two optically distinct subassemblies:

- **Forward group G1 (L11–L15):** A substantially afocal reversed Galilean converter. The patent states f_C = 406.3 at the f = 100 scale. A thick-lens paraxial ray trace through surfaces r₁–r₉ yields a vertex-referenced EFL of approximately +1406 mm, while a thin-lens surface-power summation gives |f_C| ≈ 426 mm — much closer to the patent's figure. The large discrepancy between thick- and thin-lens results is characteristic of near-afocal systems, where the principal planes are strongly displaced and the effective focal length is highly sensitive to the computation convention. Regardless of which convention is adopted, Condition (1) (|f_C| > 3f = 300) is comfortably satisfied: the forward group is weakly powered. The ABCD matrix analysis confirms a system angular magnification of D ≈ 0.64 for the converter, consistent with the patent's stated value of "approximately 0.7" and its description of the group as "substantially afocal."

- **Rear group G2 (L21–L24):** A positive master lens group (computed f_M ≈ 149 mm at f = 100 scale) that forms the image. The master group follows Wakimoto's classic retrofocus rear-group topology of "convex–concave–convex–convex," a configuration Nikon identified in the *Thousand and One Nights* essay series (Tale 12) as foundational to virtually all subsequent Nikon wide-angle SLR lenses.

The aperture stop S is located in the air gap between L21 and L22, within the rear master group.

### Aspherical Surfaces

**There are no aspherical surfaces in this design.** All 17 optical surfaces are spherical. This is consistent with the era — while Nikon had used an aspherical surface on the OP Fisheye-Nikkor 10mm f/5.6 (for distortion control), the far more demanding application of aspherical surfaces for correcting spherical aberration and coma in fast interchangeable lenses did not arrive at Nikon until the Noct-Nikkor 58mm f/1.2 in 1977. Notably, the Noct-Nikkor was also designed by Yoshiyuki Shimizu, the same inventor as this 28mm f/2 patent — the *Thousand and One Nights* series (Tale 16) credits him with the aspherical design that "drastically reduced sagittal coma flare." The patent text, claims, and prescription table for US 3,736,049 make no mention of aspherical coefficients, conic constants, or non-spherical surface profiles.

### Key Computed Parameters (f = 100 mm scale)

| Parameter | Computed | Patent |
|---|---|---|
| System EFL | 99.32 mm | 100.0 mm |
| Back focal distance | 133.43 mm | 136.1 mm |
| BFD/EFL ratio | 1.344 | ~1.36 |
| Forward group f_C | 406–1406 (convention-dependent) | 406.3 |
| Rear group f_M | 149.1 mm | — |
| Total track (r1 to r17) | 226.6 mm | — |
| Half-angle of field ω | 37.25° | 37.25° |

The computed EFL of 99.32 mm is within 0.7% of the patent's stated 100.0 mm, well within rounding tolerance for the five-significant-figure precision of the tabulated radii and refractive indices. The BFD discrepancy (133.4 vs. 136.1) persists even after scaling to the patent's nominal f = 100 (which yields 134.4 mm), leaving a residual of about 1.75 mm. This likely reflects either a minor transcription ambiguity in one of the patent's radius or thickness values (common in scanned 1970s patents), or a difference in measurement convention — the patent's "B.F." may be measured to a best-focus plane shifted from the paraxial focus by residual spherical aberration.

---

## 2. Element-by-Element Analysis

*Note on Seidel aberration data: The patent includes a table of Seidel aberration factors for all 17 surfaces (page 5, columns I–V). The OCR scan of this table contains numerous digit-level corruptions (dropped leading digits, garbled decimals). Where Seidel values are cited below, they have been cross-checked against the legible portions of the scan and the patent's stated sums; values that could not be confirmed are noted as uncertain. All qualitative interpretations of element roles are also supported by the patent's prose descriptions, independent of the Seidel figures.*

### L11 — Negative Meniscus, Convex to Object

| Property | Value |
|---|---|
| Surfaces | r₁ = +227.238, r₂ = +76.224 |
| Thickness | d₁ = 11.189 mm |
| Glass | nd = 1.62299, Vd = 58.1 |
| Thick-lens focal length | −189.5 mm |
| Shape | Both radii positive → meniscus convex to object side |

**Glass identification:** The nd/Vd pair 1.62299/58.1 (six-digit code 623/581) matches Schott SK16 (nd = 1.62299, Vd = 58.14) almost exactly. An equivalent OHARA or HOYA designation from the 1970s Japanese catalog would have been available under a different trade name but with functionally identical optical constants. This is a barium silicate crown with moderate dispersion.

**Optical role:** L11 is the first element the patent's reversed Galilean converter encounters from the object side. Its negative meniscus form diverges the incoming beam, establishing the wide field of view characteristic of a retrofocus design. The convex-to-object shape keeps the angle of incidence on the front surface moderate, limiting surface contributions to spherical aberration and coma. The Seidel table confirms that surface 1 (r₁) contributes negligible spherical aberration (I = +0.020) and small positive coma (II = +0.029), while surface 2 (r₂) contributes substantial negative spherical aberration (I = −2.042) and positive coma (II = +0.403). The strong rear-surface contribution is a hallmark of steeply curved negative meniscus elements in retrofocus designs, and it is one of the aberration budgets the patent's five conditions are designed to manage.

**Same glass as L13:** The patent uses identical glass (n₁ = n₃) for L11 and L13, the two negative meniscus elements in the converter. This simplifies manufacturing logistics and provides symmetry in the chromatic correction of the front group.

---

### L12 — Positive Meniscus, Convex to Object (Nearly Flat Rear)

| Property | Value |
|---|---|
| Surfaces | r₃ = +237.762, r₄ = +5956.748 |
| Thickness | d₃ = 16.434 mm |
| Glass | nd = 1.744, Vd = 44.9 |
| Thick-lens focal length | +332.5 mm |
| Shape | Both radii positive → meniscus convex to object; r₄ nearly flat (R ≈ 5957 mm) |

**Glass identification:** nd = 1.744, Vd = 44.9 (code 1744/449) is an excellent match to Schott LAF2 or OHARA S-LAM2 (nd = 1.74400, Vd = 44.72–44.79). This is a lanthanum flint — a high-index glass with moderate dispersion, commonly used in the 1970s for elements requiring strong refractive power without excessive chromatic contribution.

**Optical role:** L12 is interposed between the two negative meniscus elements (L11 and L13) and serves primarily to correct the negative distortion generated by L11. The patent text states this explicitly: "the positive lens L12 interposed therebetween serves to correct the negative distortional aberration." With r₄ ≈ 5957 mm (effectively flat), nearly all of L12's refractive power is concentrated on the front surface r₃, producing a gentle positive contribution. Its Seidel distortion contributions (V = +0.091 at surface 3, −0.379 at surface 4) show it actively managing the distortion balance within the forward group.

The thick center section (d₃ = 16.434 mm) is notable. At the production 28 mm scale, this corresponds to about 4.6 mm, which contributes to reducing the effective front diameter — a trick Nikon used across many fast wide-angle designs of this era to keep the filter size at 52 mm.

---

### L13 — Negative Meniscus, Convex to Object

| Property | Value |
|---|---|
| Surfaces | r₅ = +213.252, r₆ = +63.986 |
| Thickness | d₅ = 6.993 mm |
| Glass | nd = 1.62299, Vd = 58.1 |
| Thick-lens focal length | −149.4 mm |
| Shape | Both radii positive → meniscus convex to object side |

**Glass identification:** Same glass as L11 — Schott SK16 type (barium silicate crown).

**Optical role:** L13 is the second negative meniscus of the converter group. The patent explains the rationale for splitting the negative power across two separate elements (L11 and L13) rather than using a single strong negative element: "The use of two separate negative lenses such as the negative meniscus lenses L11 and L13 is directed to divide the share of refractive power in addition, thereby reducing the spherical aberration and coma."

L13 is somewhat stronger than L11 (f = −149.4 mm vs. −189.5 mm), and its rear surface r₆ = +63.986 has a significantly shorter radius than L11's rear surface r₂ = +76.224. The Seidel data shows surface 6 (r₆) as one of the strongest individual contributors to negative spherical aberration in the entire system (I = −8.111), balanced by the immediately following surface 7 (r₇, L14 front) which contributes a massive positive spherical aberration (I = +7.005). This tight pairing of large opposing contributions across the L13-rear/L14-front air-glass interface is a deliberate design feature — it generates the high-order spherical aberration correction demanded by the f/2 aperture.

---

### L14 — Biconvex Positive (Cemented to L15)

| Property | Value |
|---|---|
| Surfaces | r₇ = +117.098, r₈ = −134.266 |
| Thickness | d₇ = 23.427 mm |
| Glass | nd = 1.7725, Vd = 49.5 |
| Thick-lens focal length | +84.4 mm |
| Shape | R₁ > 0, R₂ < 0 → biconvex |

**Glass identification:** nd = 1.7725, Vd = 49.5 (code 1772/495) matches HOYA LACL60 (nd = 1.77250, Vd = 49.60) or an older OHARA equivalent near-exactly. This is a lanthanum crown — high refractive index with relatively low dispersion, a premium glass type for the era.

**Optical role:** L14 is the strongest positive element in the forward group, and it forms the front component of the cemented doublet (L14+L15). The cemented junction surface r₈ is critical to the design — it is the surface addressed by patent Condition (2):

> 1/5f > (n₅ − n₄)/r₈ > 1/10f, with n₄ − n₅ > 0.1

This condition specifies that the refractive power at r₈ must fall within a defined window. The computed value (n₅ − n₄)/r₈ = (1.51680 − 1.7725)/(−134.266) = +0.001904 lies between the limits of 1/(5×100) = 0.002000 and 1/(10×100) = 0.001000. The refractive index step n₄ − n₅ = 0.2557 comfortably exceeds 0.1.

The patent explains that this junction power is "considerably greater than expected for the interface between two lenses and is effective for the correction of a high degree of spherical aberration which must of course be taken into consideration in an optical system having a brightness amounting to F2." In effect, the large index step at the cemented junction creates a strong internal surface that generates negative spherical aberration to counterbalance the positive contributions from the outer surfaces — a technique essential at f/2 where high-order spherical aberration dominates.

---

### L15 — Biconcave Negative (Cemented to L14)

| Property | Value |
|---|---|
| Surfaces | r₈ = −134.266 (shared junction), r₉ = +321.241 |
| Thickness | d₈ = 15.743 mm |
| Glass | nd = 1.51680, Vd = 64.2 |
| Thick-lens focal length | −181.1 mm |
| Shape | R₁ < 0, R₂ > 0 → biconcave |

**Glass identification:** nd = 1.51680, Vd = 64.2 (code 1517/642) is a near-exact match to Schott BK7 (nd = 1.51680, Vd = 64.17), one of the most common and well-characterized optical glasses ever produced. OHARA S-BSL7 and HOYA BSC7 are Japanese equivalents.

**Optical role:** L15 completes the cemented doublet and closes the forward converter group. Its low-index BK7-type glass against L14's high-index lanthanum crown creates the large refractive index step at r₈ that Condition (2) demands. The BK7-type glass also provides high Abbe number (low dispersion), making the L14+L15 doublet an effective achromatic corrector within the forward group. The combined doublet focal length is +142.7 mm.

The biconcave form ensures that L15 contributes negative power, partially offsetting L14's strong positive contribution and helping maintain the forward group's near-afocal character. The Seidel table shows that surfaces 8 and 9 (r₈ and r₉) contribute relatively modestly to all aberrations — the heavy lifting of the cemented junction is done at the refractive index boundary, not by strong surface curvatures.

---

### L21 — Biconvex Positive (First Element of Master Group)

| Property | Value |
|---|---|
| Surfaces | r₁₀ = +297.203, r₁₁ = −106.388 |
| Thickness | d₁₀ = 17.483 mm |
| Glass | nd = 1.51680, Vd = 64.2 |
| Thick-lens focal length | +153.9 mm |
| Shape | R₁ > 0, R₂ < 0 → biconvex |

**Glass identification:** Same as L15 — BK7 / S-BSL7 type.

**Optical role:** L21 is the first positive element of the master group G2 and the first element after the large air gap d₉ that separates the converter from the master lens. It begins the process of converging the beam toward the image plane. Patent Condition (3) governs its shape:

> r₁₀ > |−r₁₁|

This evaluates to 297.203 > 106.388, which is satisfied. The condition ensures the rear surface r₁₁ carries stronger curvature (and thus more refractive power) than the front surface r₁₀. The patent explains this asymmetry is "meant to correct the inner coma" — the weaker front surface reduces the surface's contribution to coma, while the shape "tends to provide a positive sine condition and produce an outer coma, thereby negating the inner coma produced by the afocal reversed Galilean conversion C."

The Seidel data illustrates this: surface 11 (r₁₁) is among the strongest contributors to spherical aberration in the system (I = +6.568) and carries the largest coma contribution of any surface (II = −2.078). Together with the opposing contribution from surface 12 (r₁₂, L22 front), this pair forms the most intense aberration-balancing interface in the master group.

---

### L22 — Biconcave Negative

| Property | Value |
|---|---|
| Surfaces | r₁₂ = −67.133, r₁₃ = +253.497 |
| Thickness | d₁₂ = 18.881 mm |
| Glass | nd = 1.78470, Vd = 26.1 |
| Thick-lens focal length | −65.9 mm |
| Shape | R₁ < 0, R₂ > 0 → biconcave |

**Glass identification:** nd = 1.78470, Vd = 26.1 (code 1785/261) matches HOYA FDS9 (nd = 1.78472, Vd = 26.08) or Schott SF56A near-exactly. This is a dense flint glass — the highest-dispersion glass in the design and the only element with Vd below 30.

**Optical role:** L22 sits immediately behind the aperture stop and is the strongest negative element in the master group (f = −65.9 mm). It is governed by patent Condition (4):

> 0.55f < |−r₁₂| < 0.73f

This evaluates to 55.0 < 67.133 < 73.0, satisfied. The patent explains that L22 "serves to change a convergent light beam passed through the biconvex lens L21, which has a large negative spherical aberration, into a divergent light beam and, thereby, correct the spherical aberration in a positive sense while greatly increasing the back focus."

This is a critical dual role: L22 both corrects the spherical aberration from L21 and acts as the primary mechanism for extending the back focal distance. The strong negative power diverges the beam, pushing the focus point further from the lens — essential for clearing the SLR mirror box. Its high-dispersion dense flint glass provides the chromatic counterbalance to the surrounding BK7 elements (L15, L21) and the lanthanum glasses (L14, L23, L24).

The Seidel data confirms L22's importance: the patent's aberration factor table shows surface 12 (r₁₂) carrying one of the largest spherical aberration contributions in the system, with substantial coma (II = +1.993) that directly opposes surface 11's coma of opposite sign. (Note: the exact magnitude of surface 12's spherical aberration coefficient is uncertain due to OCR corruption in the patent scan; the value appears to be in the range of −0.6 to −10.6.) The tight spacing between L21's rear (r₁₁) and L22's front (r₁₂) — separated only by the stop and air gap d₁₁ — creates an intense aberration-balancing pair.

---

### L23 — Positive Meniscus, Concave to Object

| Property | Value |
|---|---|
| Surfaces | r₁₄ = −244.755, r₁₅ = −76.923 |
| Thickness | d₁₄ = 11.888 mm |
| Glass | nd = 1.74443, Vd = 47.9 |
| Thick-lens focal length | +146.3 mm |
| Shape | Both radii negative → meniscus concave to object side |

**Glass identification:** nd = 1.74443, Vd = 47.9 (code 1744/479) does not have an exact match in current catalogs. The closest identified candidate is OHARA S-LAM51 (nd = 1.74330, Vd = 49.22), with residuals of Δnd = +0.00113 and ΔVd = −1.32. This suggests a discontinued 1970s-era lanthanum flint glass — possibly an older OHARA, HOYA, or Sumita melt that has since been reformulated or removed from production catalogs. The glass sits in the lanthanum crown/flint boundary region of the Abbe diagram.

**Optical role:** L23 works in conjunction with L22 to extend the back focus. Patent Condition (5) governs the combined spacing through the L22–L23 region:

> 0.25f < d₁₂ + d₁₃ + d₁₄ < 0.45f

This evaluates to 25.0 < 35.664 < 45.0, satisfied. The patent explains: "there is no positive refractive power acting between these surfaces, and therefore a greater value of d₁₂ + d₁₃ + d₁₄ may result in a longer back focus." The concave-to-object meniscus form bends the divergent beam from L22 back toward convergence while maintaining the extended back focal distance. The Seidel contributions from surfaces 14 and 15 are moderate, confirming that L23's role is more about managing the beam path than generating large aberration corrections.

---

### L24 — Biconvex Positive (Nearly Flat Front)

| Property | Value |
|---|---|
| Surfaces | r₁₆ = +875.524, r₁₇ = −127.295 |
| Thickness | d₁₆ = 12.238 mm |
| Glass | nd = 1.713, Vd = 53.9 |
| Thick-lens focal length | +156.7 mm |
| Shape | R₁ > 0, R₂ < 0 → biconvex; front nearly flat (R₁ ≈ 876 mm) |

**Glass identification:** nd = 1.713, Vd = 53.9 (code 1713/539) is an excellent match to Schott LAK8 or OHARA S-LAL8 (nd = 1.71300, Vd = 53.83–53.87). This is a lanthanum crown — high index with moderate-to-low dispersion.

**Optical role:** L24 is the final image-forming element. Its nearly flat front surface (r₁₆ ≈ +876 mm) minimizes aberration contributions from the entrance face, while the more strongly curved rear surface r₁₇ provides the final positive refraction that brings the beam to focus. The Seidel data shows surface 17 (r₁₇) contributes significant positive spherical aberration (I = +5.258), which helps fine-tune the overall spherical aberration balance established by the L21–L22 pair upstream.

---

## 3. Focusing Mechanism

The patent describes a single variable air gap for focusing: d₉, the spacing between the rear surface of L15 (r₉) and the front surface of L21 (r₁₀). This is the gap between the forward converter group G1 and the rear master group G2.

At the f = 100 mm scale, the patent states that for a close-up magnification of β = −1/10, the change in d₉ is −2.2 mm. At the production 28 mm scale, this corresponds to approximately −0.62 mm of group spacing change.

This focusing scheme constitutes Nikon's **Close-Range Correction (CRC)** system. In a conventional unit-focus design, the entire lens moves as a rigid body, and field curvature worsens progressively at close range — a severe problem for fast wide-angle lenses. The CRC mechanism instead changes the relative spacing between the two optically distinct groups during focusing: the helicoid moves the entire lens, while a secondary cam adjusts d₉, causing the front and rear groups to travel at slightly different rates. The patent explains the rationale: "the combination of a substantially afocal reversed Galilean conversion C and a master lens M is successful in enabling the spacing d₉ therebetween to be variable in accordance with the photographing distance so as to virtually negate the curvature of image field in the positive sense."

Contemporary Nikon literature and third-party teardowns confirm this mechanism. The original product brochure states that the rear group "shifts its relative position to other elements according to focused distance." Richard Haw's technical disassembly of the production lens identifies this as "CRC on the front block," referring to the front group's cam-driven differential movement.

The production Nikkor-N Auto 28mm f/2 focused to 0.3 m (corresponding to approximately 1:10 reproduction ratio, consistent with the patent's β = −1/10 example). The later AI-S version (1981) extended close focus to 0.25 m. The aberration plots in the patent (Figures 2D–2F) demonstrate excellent correction at β = −1/10, with the patent noting "negligible" variation in spherical aberration and distortion between infinity and close focus.

---

## 4. Glass Summary

The design uses nine glass elements drawn from seven distinct glass types. The glass selection reflects the state of the art in early-1970s Japanese optical manufacturing, with significant use of lanthanum-bearing glasses for their favorable combination of high refractive index and moderate dispersion.

| Element | nd | Vd | Code | Probable Glass Type | Category |
|---|---|---|---|---|---|
| L11, L13 | 1.62299 | 58.1 | 623/581 | Schott SK16 / OHARA equiv. | Barium silicate crown |
| L12 | 1.74400 | 44.9 | 1744/449 | Schott LAF2 / OHARA S-LAM2 | Lanthanum flint |
| L14 | 1.77250 | 49.5 | 1772/495 | HOYA LACL60 / OHARA equiv. | Lanthanum crown |
| L15, L21 | 1.51680 | 64.2 | 1517/642 | Schott BK7 / OHARA S-BSL7 | Borosilicate crown |
| L22 | 1.78470 | 26.1 | 1785/261 | HOYA FDS9 / Schott SF56A | Dense flint |
| L23 | 1.74443 | 47.9 | 1744/479 | Discontinued LaF/LaK type | Lanthanum flint (border) |
| L24 | 1.71300 | 53.9 | 1713/539 | Schott LAK8 / OHARA S-LAL8 | Lanthanum crown |

Four of the nine elements use lanthanum-bearing glasses (L12, L14, L23, L24), reflecting the premium material cost of this design. L11 and L13 use barium silicate crowns — high-quality but less exotic. The single dense flint element (L22) provides the essential high-dispersion counterweight for chromatic correction. The two BK7 elements (L15, L21) serve as low-cost, low-dispersion "anchor" glasses in the cemented doublet and the leading master group element.

The L23 glass (1.74443/47.9) is the only type without a confident modern catalog match, suggesting it may have been reformulated or discontinued in the intervening five decades.

---

## 5. Patent Condition Verification

All five patent conditions are verified against the computed prescription:

| Condition | Expression | Required | Computed | Status |
|---|---|---|---|---|
| (1) | \|f_C\| > 3f | > 300 | 406.3 (patent) | ✓ |
| (2a) | (n₅ − n₄)/r₈ | 0.001 < x < 0.002 | 0.001904 | ✓ |
| (2b) | n₄ − n₅ | > 0.1 | 0.2557 | ✓ |
| (3) | r₁₀ > \|r₁₁\| | — | 297.2 > 106.4 | ✓ |
| (4) | 0.55f < \|r₁₂\| < 0.73f | 55.0–73.0 | 67.133 | ✓ |
| (5) | 0.25f < d₁₂+d₁₃+d₁₄ < 0.45f | 25.0–45.0 | 35.664 | ✓ |

---

## 6. Petzval Sum and Field Curvature

The computed Petzval sum (using the exact surface-by-surface formula Σ φᵢ/(nᵢ·nᵢ')) is +0.00116 mm⁻¹ at the f = 100 mm scale, corresponding to a Petzval radius of curvature of approximately 861 mm (about 8.7× the focal length). This is a reasonably well-corrected Petzval sum for a retrofocus wide-angle of this era, reflecting the careful balancing of positive and negative powers across the two groups. The positive Petzval sum indicates a tendency toward inward (undercorrected) field curvature, which the patent compensates through the controlled introduction of astigmatism — visible in the aberration plots (Figures 2B, 2E) where the tangential and sagittal focus surfaces bracket the Petzval surface.

---

## 7. Historical Significance

The Nikkor-N Auto 28mm f/2 was a landmark lens when introduced in 1970. At the time, most 28mm lenses for SLR cameras offered a maximum aperture of f/3.5 or at best f/2.8. Achieving f/2 at this focal length while maintaining a back focus greater than 1.2× the focal length (necessary for the Nikon F mirror clearance) and a full 74.5° field of view was a significant engineering achievement.

The design's longevity speaks to its optical soundness: the 9-element, 8-group optical formula was confirmed unchanged through the AI version (1977), and the AI-S version (1981–2005) retained the same basic optical configuration with updated coatings and mechanical refinements — a production span of 35 years across four variants (Nikkor-N Auto, Nikkor-N·C Auto with multi-coating from 1973, AI, and AI-S). The CRC focusing mechanism — varying d₉ between the two main groups — was an early and effective implementation of what would become a standard Nikon feature across their wide-angle prime lineup.

Nikon's *Thousand and One Nights* essays (Tales 12 and 28) place this lens in the lineage of Zenji Wakimoto's foundational retrofocus topology discovery and identify it as a direct precursor to the AI AF Nikkor 28mm f/1.4D (1994), which extended the f/2 design concept to f/1.4 — a development that required four different optical designers and the addition of an aspherical element to achieve adequate sagittal coma correction at the wider aperture. Tale 28 specifically notes the 28mm f/2 as the benchmark against which the 28mm f/1.4D's performance was measured, and that the quality assurance department initially rejected the f/1.4 prototype because it was "inferior in the shorter focusing ranges" compared to the established 28mm f/2.

The inventor, Yoshiyuki Shimizu, went on to design the Noct-Nikkor 58mm f/1.2 (1977) — Nikon's first interchangeable lens to use an aspherical element for aberration correction. The progression from the all-spherical 28mm f/2 to the aspherical Noct-Nikkor represents a key chapter in Shimizu's career and in Nikon's evolution toward aspherical lens technology.

---

## 8. Production Specifications

The following specifications are confirmed from manufacturer sources and cross-referenced third-party documentation:

| Parameter | Nikkor-N Auto (1970) | AI Nikkor (1977) | AI-S Nikkor (1981) |
|---|---|---|---|
| Optical formula | 9 elements / 8 groups | unchanged | unchanged |
| Maximum aperture | f/2 | f/2 | f/2 |
| Minimum aperture | f/16 | f/16 | f/16 |
| Angle of view | 74° | 74° | 74° |
| Close focus | 0.3 m | 0.3 m | 0.25 m |
| Filter thread | 52 mm | 52 mm | 52 mm |
| Focus mechanism | CRC (variable d₉) | CRC | CRC |
| Diaphragm blades | 7 | 7 | 7 |

---

## 9. Data File Production Notes

The companion data file (`NikonNikkorN28mmf2.data.ts`) was produced by scaling the patent prescription from f = 100 mm to f = 28 mm (scale factor ×0.28) and applying the following methodology:

### Scaling

All radii of curvature, axial thicknesses, and semi-diameters were uniformly scaled by the factor 28/100 = 0.28. The resulting computed EFL is 27.81 mm, consistent with Nikon's marketed 28 mm within rounding convention.

### Semi-Diameter Estimation

Semi-diameters were estimated using a two-step approach:

1. **Initial estimate:** Combined marginal ray (at f/2) and chief ray (at 60% of full half-field angle) heights, with clearance multipliers scaled by position — front converter elements received larger multipliers (~2× marginal height) to accommodate the wide-field off-axis beam, while post-stop master group elements used smaller multipliers (~1.15×).

2. **Constraint enforcement:** Initial estimates were reduced where necessary to satisfy the renderer's validation rules: edge thickness ≥ 0.5 mm per element, sd/|R| < 0.90, and cross-gap sag overlap within each air gap. The tightest constraint was the air gap between L22's rear surface (r₁₃) and L23's front surface (r₁₄): both surfaces curve into this 1.37 mm gap (r₁₃ has positive R, r₁₄ has negative R), limiting the clear aperture in this region to approximately 9.5 mm SD at the 28 mm production scale. This is consistent with the physical expectation of some mechanical vignetting in the tight interior of a fast retrofocus design.

### Stop Position

The patent states the stop is between L21 and L22 but does not specify its exact axial location. From Fig. 1, the stop appears positioned approximately 60% of the way through the d₁₁ air gap (measured from L21's rear surface), yielding a split of 3.41 mm (r₁₁ to STO) and 2.27 mm (STO to r₁₂) at the 28 mm scale.

### Variable Air Spacings

The data file implements a two-gap CRC focus system:

- **d₉** (surface "9"): converter-to-master gap. Patent specifies Δd₉ = −2.2 mm at f = 100 for β = −1/10. Scaled to 28 mm: infinity value = 1.469 mm, close-focus value = 0.853 mm.
- **BFD** (surface "17"): back focal distance to image plane. Computed via paraxial ray trace for object at 0.3 m total conjugate: infinity value = 37.361 mm, close-focus value = 33.374 mm.

### Verified Parameters at 28 mm Scale

| Parameter | Computed |
|---|---|
| EFL | 27.81 mm |
| BFD | 37.36 mm |
| BFD/EFL | 1.344 |
| Total track (S1–S17) | 63.44 mm |
| Stop physical SD (f/2) | 8.9 mm |
