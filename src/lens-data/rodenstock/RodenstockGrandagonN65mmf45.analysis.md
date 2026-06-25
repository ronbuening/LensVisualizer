## Patent Reference and Design Identification

**Patent:** DE 2444954 A1 (Offenlegungsschrift, Deutsches Patentamt)
**Application Number:** P 24 44 954.5-51
**Filed:** 20 September 1974
**Published:** 1 April 1976
**Inventors:** Franz Schlegel; Josef Weiß
**Applicant:** Optische Werke G. Rodenstock, München
**Title:** Achtlinsiges Weitwinkelobjektiv
**Embodiment analyzed:** Claim 4 / worked data set 4, f′ = 65 mm, 1:4.5
**Worked data sets in patent:** f′ = 100, 90, 75, and 65 mm

The prescription used here is the fourth worked data set in DE 2444954 A1. It is the only data set in the patent with f′ = 65 mm and an aperture ratio of 1:4.5. The production match to the Rodenstock Grandagon-N 65mm f/4.5 rests on convergent evidence:

1. The patent data set states f′ = 65 mm and 1:4.5, matching the production lens designation.
2. The prescription is an eight-element, four-group wide-angle objective. Rodenstock's Grandagon-N f/4.5 data sheet describes the 65, 75, and 90 mm f/4.5 Grandagon-N lenses as eight elements in four groups.
3. Rodenstock's production data for the 65 mm f/4.5 lists 105° coverage and a 170 mm image circle at the recommended working apertures, which agrees with the patent's stated design class and with the computed field from the 65 mm data set.
4. The applicant is Optische Werke G. Rodenstock, and the filing date is consistent with the Grandagon-N f/4.5 large-format wide-angle line.
5. The patent's other worked focal lengths, 90 and 75 mm, align with the published Grandagon-N f/4.5 focal-length family. The descriptive text says the special examples are for f = 90, 75, and 60, but the numerical fourth claim and table clearly give f′ = 65; the table is treated as authoritative.

The patent gives all refractive indices and Abbe numbers on the e-line convention, not the d-line convention. The data file therefore preserves the patent's n_e and ν_e values in the single-index `nd` / `vd` fields used by the LensVisualizer format. This is a field-name compromise for single-wavelength tracing, not a claim that the patent prescription was published at the d line.

## Optical Architecture

The design is a quasi-symmetric large-format wide-angle objective with eight elements in four air-spaced groups:

**negative meniscus — cemented positive triplet — STOP — cemented positive triplet — negative meniscus**

The two outer menisci are negative, strongly curved, and low-dispersion. They expand the angular acceptance of the system and help cancel the positive Petzval contribution of the central triplets. The two cemented triplets carry the main positive power and provide the crown/flint interfaces used for axial and lateral color correction.

The aperture stop lies inside the central air gap l₂. Claim 4 gives l₂ = 1.65 + 0.36 = 2.01 mm, meaning 1.65 mm from r₆ to the stop and 0.36 mm from the stop to r₇. This split has been retained in the data file rather than collapsing the stop into a single air space.

The patent emphasizes two design constraints: an image angle of at least 90° and an aperture ratio at least as fast as 1:5, while keeping construction length and lens diameters small. The 65 mm claim exceeds those minima: it is specified at 1:4.5, and the production Grandagon-N 65mm f/4.5 is rated for 105° coverage.

The total patent axial track from r₁ to r₁₂ is 65.96 mm. Independent paraxial tracing gives a back focal distance from r₁₂ of 44.82 mm, so the distance from the front vertex to the paraxial image plane is 110.78 mm. This optical back focal distance should not be confused with Rodenstock's production flange focal distance of 70.0 mm, which is a mechanical mounting reference for the shuttered large-format lens.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

n_e = 1.4662, ν_e = 65.56. Glass: Schott FK3 class, legacy fluorite crown. Standalone f = −48.67 mm.

L1 is the front negative field-widening meniscus, with r₁ = +65.88 and r₂ = +16.49. Both centers of curvature lie to the image side, so the element is a negative meniscus with its convex side facing the object. Its low index and low dispersion limit the chromatic burden of the strongly refracting outer group while providing negative Petzval contribution.

The element is not a retrofocus front group by itself. It is the front half of a near-symmetric wide-angle construction; its role is better described as angular compression and aberration balancing ahead of the positive triplet.

### Front Cemented Triplet — L2 + L3 + L4

The front cemented triplet is the first main positive group. Its three glasses step down in index from the outer element toward the stop: L2 n_e = 1.6776, L3 n_e = 1.6250, and L4 n_e = 1.5629. This follows the patent's stated rule that the refractive indices of the cemented groups increase from the stop outward.

#### L2 — Negative Meniscus, Convex to Object

n_e = 1.6776, ν_e = 31.97. Glass: Schott SF5 / N-SF5 class. Standalone f = −84.58 mm.

L2 is the high-index, high-dispersion outer component of the front triplet. Its r₃ = +26.23 and r₄ = +14.96 form a negative meniscus in air. In situ, it supplies the flint side of the front achromatizing cemented interfaces.

The patent value is very close to current Schott N-SF5 e-line data, so the SF5 identification is one of the stronger glass matches in the design. The small difference is within the range expected between a 1974 patent value and current catalog rounding.

#### L3 — Biconvex Positive

n_e = 1.6250, ν_e = 52.86. Glass: Schott SSK2 class, dense special crown. Standalone f = +13.55 mm.

L3 is the main positive element of the front triplet. The nearly opposed radii r₄ = +14.96 and r₅ = −14.54, together with a 9.90 mm center thickness, make it a strong biconvex positive component.

Its crown-like dispersion makes it the positive partner between L2's dense flint and L4's intermediate-dispersion negative element. The r₄ and r₅ cemented surfaces therefore carry much of the front group's color correction and spherical/comatic balancing.

#### L4 — Biconcave Negative, Stop-Side Component

n_e = 1.5629, ν_e = 46.88. Glass: unmatched barium-flint / short-flint class. Standalone f = −22.97 mm.

L4 is the inner negative element of the front triplet. It is biconcave by sign convention, with r₅ = −14.54 and r₆ = +118.85. The r₅ cemented interface is strong; the r₆ surface is weak and faces the stop space.

No exact current catalog match was verified for the pair n_e = 1.5629 and ν_e = 46.88. The Abbe number places it on the flint side of the crown/flint boundary despite the moderate index. It is therefore kept as an unmatched class identification rather than assigned a precise modern catalog name.

### Rear Cemented Triplet — L5 + L6 + L7

The rear triplet is the second main positive group. It is not a mirror copy of the front triplet, but it repeats the same functional pattern: a weak stop-side negative component, a strong biconvex positive crown component, and a higher-index outer negative component.

#### L5 — Negative Meniscus, Stop-Side Component

n_e = 1.5846, ν_e = 59.19. Glass: unmatched barium crown / BaK class. Standalone f = −23.39 mm.

L5 begins the rear triplet immediately after the stop. It has a very weak front radius, r₇ = +292.16, and a much stronger rear radius, r₈ = +13.05. In air this is a negative meniscus.

The high Abbe number means L5 supplies negative power with comparatively low chromatic dispersion. This differs from the high-dispersion role of L2 and helps tune the rear half's chromatic balance.

#### L6 — Biconvex Positive

n_e = 1.6113, ν_e = 58.65. Glass: unmatched dense crown, SK-class. Standalone f = +11.47 mm.

L6 is the strongest single positive element in the prescription. Its r₈ = +13.05 and r₉ = −10.94 surfaces, combined with 9.55 mm center thickness, make it a short-focal-length biconvex element.

The glass is a dense crown by dispersion class. The current Schott N-SK4 catalog is close in Abbe number but not an exact refractive-index match to the patent's e-line value, so the element is identified by class rather than by a hard catalog assignment.

#### L7 — Negative Meniscus, Concave to Object

n_e = 1.6700, ν_e = 46.13 as printed in Claim 4. Glass: unmatched high-index barium-flint class. Standalone f = −42.75 mm.

L7 is the outer component of the rear triplet, bounded by r₉ = −10.94 and r₁₀ = −22.96. Both centers of curvature lie to the object side, so the element is a negative meniscus concave to the object.

The prior analysis treated the Abbe number as 48.13 by analogy to Claims 1–3. That analogy is understandable because the first three worked data sets print n_e = 1.6700 / ν_e = 48.13 in the same glass position, and a BaF11-class glass fits that value. Claim 4, however, prints ν_e = 46.13. The corrected analysis and data file preserve the Claim 4 value and mark the glass as unmatched. If the original Rodenstock table contains a typographical error, the evidence is circumstantial; it is not appropriate to overwrite the transcribed claim value in the prescription.

### L8 — Negative Meniscus, Concave to Object

n_e = 1.4891, ν_e = 70.22. Glass: Schott FK5 / N-FK5 class. Standalone f = −43.55 mm.

L8 is the rear negative field-widening meniscus, bounded by r₁₁ = −16.79 and r₁₂ = −83.54. It mirrors L1 functionally, though it uses a different fluorite-crown glass.

The current Schott N-FK5 e-line values are an excellent match to the patent. L8 is therefore one of the secure glass identifications in the design.

## Glass Identification and Selection

The patent does not name glass catalogs. It publishes only n_e and ν_e values. The table below therefore distinguishes exact or close catalog-class identifications from unmatched class assignments.

| Element | Patent n_e | Patent ν_e | Identification used | Confidence | Note |
|---|---:|---:|---|---|---|
| L1 | 1.4662 | 65.56 | Schott FK3 class | High class match | Legacy fluorite crown; not a current standard N-glass entry. |
| L2 | 1.6776 | 31.97 | Schott SF5 / N-SF5 class | High | Current N-SF5 e-line data closely matches. |
| L3 | 1.6250 | 52.86 | Schott SSK2 class | Moderate-high | Dense special crown class. |
| L4 | 1.5629 | 46.88 | Unmatched barium-flint / short-flint class | Class only | No exact current public catalog match verified. |
| L5 | 1.5846 | 59.19 | Unmatched barium crown / BaK class | Class only | Crown-like dispersion; likely historical Schott BaK/BAL-family glass. |
| L6 | 1.6113 | 58.65 | Unmatched dense crown, SK-class | Class only | Current N-SK4 is nearby but not exact. |
| L7 | 1.6700 | 46.13 | Unmatched high-index barium-flint class | Class only | Claim 4 prints 46.13; 48.13 would fit BaF11 by analogy to Claims 1–3, but was not adopted. |
| L8 | 1.4891 | 70.22 | Schott FK5 / N-FK5 class | High | Current N-FK5 e-line data closely matches. |

The glass strategy is conventional but carefully balanced. The two outer elements use low-dispersion fluorite crowns to keep strongly curved field-widening elements from dominating chromatic error. The two central positive elements are dense crowns. The negative elements inside the cemented triplets provide the dispersion contrast needed for achromatization without exceeding the patent's stated index ceiling of n ≤ 1.7.

No anomalous partial-dispersion data is published, and no apochromatic claim is made from the Abbe numbers alone.

## Focus Mechanism

The optical prescription has no internal variable spacings. Focusing is by unit movement of the complete lens relative to the image plane, as is normal for a large-format shutter-mounted lens used on a view camera or helicoid-mounted technical camera.

The data file models the focus slider as a change in the final back-focus distance only. The infinity value is the computed paraxial BFD from r₁₂, 44.8246 mm. The close-focus value, 52.6393 mm, models a 0.7 m subject distance measured from the image plane, corresponding to approximately 0.12× magnification. This is a practical visualization state rather than an internal optical prescription from the patent; the patent itself provides only the infinity-focus design.

| Focus state | Modeled subject distance | Final air space from r₁₂ | Notes |
|---|---:|---:|---|
| Infinity | ∞ | 44.8246 mm | Paraxial BFD from the Claim 4 prescription. |
| Close | 0.7 m | 52.6393 mm | Unit-focus extension; camera/helicoid dependent. |

## Aspherical Surfaces

The design is entirely spherical. DE 2444954 A1 gives only spherical radii and does not provide aspherical coefficients.

## Chromatic Correction Strategy

Chromatic correction is concentrated in the two cemented triplets. The front triplet pairs the high-dispersion SF5-class L2 with a strong SSK2-class positive element and an intermediate-dispersion negative stop-side element. The rear triplet uses a lower-dispersion stop-side negative element, a dense crown positive element, and a high-index negative outer element.

The near-symmetric layout also suppresses lateral color. In a fully symmetric wide-angle lens, odd aberrations and lateral color cancel strongly at unit magnification. This design is not perfectly symmetric and is used at infinity, but the front/rear balancing remains central to its distortion and lateral-color control.

## Verification Summary

The prescription was re-extracted from Claim 4 and independently traced at the patent's e-line indices. The following values are from a paraxial y–n·u matrix trace, not from the prior analysis.

| Quantity | Patent / production reference | Recomputed value | Comment |
|---|---:|---:|---|
| Stated focal length | 65 mm | 64.8270 mm | 0.27% below nominal; consistent with rounded patent data. |
| Aperture ratio | 1:4.5 | 1:4.5 by stop sizing | Stop semi-diameter set to 7.5445 mm. |
| Total axial track r₁→r₁₂ | — | 65.9600 mm | Sum of all patent thicknesses and air spaces. |
| BFD from r₁₂ | — | 44.8246 mm | Optical back focus, not mechanical flange focal distance. |
| Front vertex to image | — | 110.7846 mm | Track plus BFD. |
| Production image circle | 170 mm | 105.28° from 85 mm / 64.827 mm | Matches the 105° production specification. |
| Petzval sum | — | +0.0002175 mm⁻¹ | Surface-by-surface Σ φ/(n·n′). |
| Petzval radius | — | +4598 mm | Approximately 71× the computed EFL. |

Group and element focal lengths, recomputed in air from the extracted prescription:

| Component | Focal length |
|---|---:|
| L1 | −48.67 mm |
| Front triplet L2+L3+L4 | +44.17 mm |
| Rear triplet L5+L6+L7 | +36.45 mm |
| L8 | −43.55 mm |
| Front half L1–L4 | +203.36 mm |
| Rear half L5–L8 | +103.55 mm |
| Complete objective | +64.83 mm |

The Petzval value was computed surface by surface using φ/(n·n′). Element-level thin-lens approximations were not used.

## Design Heritage and Context

DE 2444954 A1 positions the invention against earlier German wide-angle objective designs that either reached only about f/5.6 or required excessive construction length and outer element diameter. Rodenstock's solution keeps the Biogon-like near-symmetry but uses cemented triplets on both sides of the stop to reduce the number of air-glass interfaces and to concentrate chromatic correction at cemented surfaces.

The result is not a retrofocus lens in the SLR sense. Its optical back focal distance is shorter than the production mechanical flange focal distance and is only about 0.69× the focal length when measured from r₁₂. The lens achieves large-format wide-angle coverage through the near-symmetric negative-positive-positive-negative power distribution rather than by forcing a long back focus.

## Sources

**Primary patent:** DE 2444954 A1, *Achtlinsiges Weitwinkelobjektiv*, Optische Werke G. Rodenstock, filed 20 September 1974, published 1 April 1976. Claim 4 supplies the f′ = 65 mm prescription.

**Production specifications:** Rodenstock / LINOS Grandagon-N data sheet, *Photo Optics / Digital Imaging: Lenses for Analog Professional Photography*, confirming the Grandagon-N f/4.5 65–90 mm lenses as eight elements in four groups, 105° field angle, and the 65 mm f/4.5 as 4×5 in. coverage with 170 mm image circle. B&H / Arca-Swiss product data confirms 65 mm, f/4.5, 4×5 in., 105°, 8 elements / 4 groups, 170 mm image circle, and 70.0 mm mechanical flange focal distance.

**Glass references:** SCHOTT optical glass data sheets for N-SF5, N-FK5, and N-SK4 were used as current catalog checks. Historical FK3, SSK2, BaK/BaF, and SK-class assignments remain class-level identifications unless explicitly marked as secure above.
