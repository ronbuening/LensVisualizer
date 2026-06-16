## Patent Reference and Design Identification

**Patent:** US 5,557,473
**Application Number:** 222,867
**Filed:** April 5, 1994
**Granted:** September 17, 1996
**Priority:** JP 5-085987, April 13, 1993
**Inventors:** Yoshikazu Sugiyama, Haruo Sato
**Assignee:** Nikon Corporation, Tokyo, Japan
**Title:** Wide Angle Lens
**Classification:** G02B 9/62
**Claims:** 15
**Worked examples:** 3
**Embodiment analyzed:** Third Embodiment, Table 5 and FIG. 3

US 5,557,473 discloses a compact retrofocus wide-angle lens comprising a negative front group G₁ and a positive rear group G₂. The patent states the design goal directly: a lens of about 75° total field and about f/2.8 aperture ratio, with long back focus and improved correction of coma, distortion, and field curvature for SLR use. The Third Embodiment in Table 5 is transcribed here as the working prescription for the Nikon AF Nikkor 28mm f/2.8D.

The identification is supported by the following convergent evidence:

1. **Element and group count.** Table 5 gives six single, air-separated elements, matching Nikon's published 6 elements / 6 groups specification for the AF Nikkor 28mm f/2.8D.
2. **Focal length.** The patent prescription is f = 28.6 mm; Nikon markets the production lens as 28 mm.
3. **Aperture.** The patent gives FNO = 2.86, matching the production f/2.8 class.
4. **Field angle.** The patent gives 2ω = 75.4°. Nikon's published FX angle of view is 74°; the difference is small enough for production-level identification but should be treated as a patent-to-product convention difference rather than disassembly proof.
5. **Mount and format.** Nikon lists the production lens as Nikon F-Bayonet and FX/35mm format.
6. **All-spherical construction.** The patent contains no aspherical coefficients and no ED, fluorite, or anomalous partial-dispersion glass callout.
7. **Timing.** The Japanese priority date in 1993 and the US filing date in 1994 are consistent with the production D-type AF lens appearing in the mid-1990s.
8. **Assignee and inventors.** The assignee is Nikon Corporation; lead inventor Yoshikazu Sugiyama is also named on earlier Nikon wide-angle prior art cited by the patent.

The patent contains three worked examples with the same focal length, F-number, and field angle. Example 1 uses a meniscus L₁; Examples 2 and 3 use a biconvex L₁. The patent's statement that the component arrangement of L₂ through L₆ is the same between Examples 2 and 3 refers to the architectural sequence, not identical radii and glass. Example 3 remains a plausible production match but cannot be proven uniquely from the public patent without production disassembly.

## Optical Architecture

The lens is an all-spherical retrofocus wide-angle design with two major optical groups. G₁ is a divergent front group consisting of L₁ and L₂; G₂ is a convergent rear group consisting of L₃ through L₆. The sign sequence is positive / negative in the front group, then positive / negative / positive / positive in the rear group.

G₁ has a synthesized focal length of −38.23 mm, or f₁₂/f = −1.337. Its negative power establishes the long rear clearance required by an SLR wide-angle lens. L₁ contributes only weak positive power, while L₂ supplies the front group's dominant negative refraction.

G₂ has a computed focal length of +29.10 mm. L₃ is the strongest positive element and begins reconverging the beam after the inter-group air space. L₄ is the only negative element in G₂ and supplies a large negative Petzval contribution. L₅ and L₆ complete the rear convergence while keeping the last-element diameter and exit-pupil position under control.

The aperture stop S₂ is located between L₃ and L₄. The patent also lists a fixed stop S₁ between L₂ and L₃. In the data file this fixed stop is retained as an optically neutral flat surface labelled `S1`, while the true aperture stop is labelled `STO` as required by the LensVisualizer data format.

A paraxial y–nθ ABCD trace of the Table 5 prescription gives EFL = 28.6012 mm, back focal distance = 38.0898 mm from the rear vertex of L₆, and total track = 88.84 mm. The back focal distance is 1.332× the computed EFL. This is a back-vertex distance, not the Nikon F flange focal distance; it should not be read as though the rear element sits at the mount flange.

## Element-by-Element Analysis

### L₁ — Biconvex Positive

nd = 1.64831, νd = 33.8. Glass: SF2-class dense flint, exact catalog identity uncertain. f = +204.49 mm.

L₁ is a very weak positive biconvex element. The first radius is R₁ = +137.071 mm, while the second radius is R₂ = −4003.097 mm, making the rear surface nearly flat. Its optical power is small relative to the full lens; its practical role is to introduce a controlled first refraction before the much stronger negative meniscus L₂.

The patent glass is close to Schott SF2 / N-SF2 and Ohara S-TIM22 class values, but it is not an exact current-catalog match. Schott SF2 and N-SF2 catalog values are nd = 1.64769 with νd ≈ 33.8, while the patent table uses nd = 1.64831. The correct treatment is therefore class-level identification rather than an exact glass assertion.

### L₂ — Negative Meniscus, Convex to Object

nd = 1.65160, νd = 58.5. Glass: S-LAL7 (Ohara). f = −31.65 mm.

L₂ is the dominant negative element in G₁. Both radii are positive, R₃ = +62.375 mm and R₄ = +15.301 mm, so the element is a negative meniscus with the convex side toward the object. The tight rear radius produces the strong negative refraction responsible for the inverted-telephoto action.

Condition (4) of the patent constrains the image-side radius of L₂, and Example 3 gives r₄/f = +0.535. The same surface is also a major source of lower-frame coma in the patent's discussion, which condition (5) then balances by constraining the rear surface of L₃.

The S-LAL7 identification is firm at the precision needed here: Ohara publishes S-LAL7 as nd = 1.65160 and νd = 58.55. This high-index, relatively high-Abbe lanthanum crown is a rational choice for a strong negative front element because it reduces chromatic burden while maintaining refractive power.

### L₃ — Biconvex Positive

nd = 1.79668, νd = 45.4. Glass: Unmatched lanthanum dense flint. f = +23.98 mm.

L₃ is the strongest positive element in the system and the first element of G₂. It receives a diverged beam after the long G₁–G₂ separation and begins the main rear-group convergence. Its biconvex form, R₆ = +26.626 mm and R₇ = −60.568 mm, concentrates most of the bending at the front surface.

The rear radius of L₃ is governed by condition (5), −9 ≤ r₆/f ≤ −0.9. Example 3 gives r₆/f = −2.118, matching the patent's condition table. The patent identifies this radius as part of the lower-frame coma correction mechanism.

The patent glass at nd = 1.79668 and νd = 45.4 is not matched exactly in the current manufacturer catalogs checked for this review. It is best described as an unmatched high-index lanthanum flint rather than forced into a named current glass. The data file therefore uses an explicit `Unmatched (...)` annotation.

### L₄ — Biconcave Negative

nd = 1.78470, νd = 26.1. Glass: SF56A (Schott). f = −18.28 mm.

L₄ is the sole negative element in G₂ and has the strongest standalone negative focal length in the system. Its biconcave form, R₉ = −26.792 mm and R₁₀ = +33.729 mm, creates a large negative Petzval contribution that partly offsets the positive Petzval terms of L₃, L₅, and L₆.

The element sits immediately behind the aperture stop. This placement makes it central to the patent's control of off-axis aberrations and exit-pupil behavior. L₄ is also the thickest element in Example 3 at 5.60 mm, consistent with the patent's strategy of increasing rear-section thickness to shift the exit pupil toward the final surface.

Schott publishes SF56A as nd = 1.78470 and νd = 26.08. This is an exact match for the patent at the precision used in the table.

### L₅ — Positive Meniscus, Concave to Object

nd = 1.69680, νd = 55.6. Glass: S-LAL14 (Ohara). f = +44.04 mm.

L₅ is a positive meniscus with both radii negative, R₁₁ = −77.113 mm and R₁₂ = −22.209 mm. Its concave side faces the object. The stronger rear curvature supplies the positive power while preserving a compact rear-group layout.

Together with L₆, L₅ is governed by patent condition (2), which keeps the mean refractive index of the two final positive elements between 1.65 and 1.8. Example 3 gives (N₅ + N₆)/2 = 1.7049. This range is a compromise: higher index helps Petzval correction, while excessive dispersion worsens lateral chromatic aberration.

Ohara publishes S-LAL14 as nd = 1.69680 and νd = 55.53. The patent's rounded νd = 55.6 is consistent with that catalog entry.

### L₆ — Biconvex Positive

nd = 1.71300, νd = 54.0. Glass: S-LAL8 (Ohara). f = +42.82 mm.

L₆ is the final positive element. Its radii are R₁₃ = +84.648 mm and R₁₄ = −47.047 mm. It completes image formation and sets the 38.09 mm rear vertex distance in the infinity prescription.

Ohara publishes S-LAL8 as nd = 1.71300 and νd = 53.87. The patent's νd = 54.0 is the expected rounded form. As with L₅, the glass sits inside the condition-(2) index range for the final positive pair.

## Glass Identification and Selection

The glass palette is conventional for a compact 1990s all-spherical retrofocus lens: dense flints are used for strong aberration correction, while lanthanum crowns provide high refractive index with comparatively restrained dispersion.

| Element | Patent nd | Patent νd | Identification used                                     | Catalog basis                                | Role                                |
| ------- | --------: | --------: | ------------------------------------------------------- | -------------------------------------------- | ----------------------------------- |
| L₁      |   1.64831 |      33.8 | SF2-class dense flint; exact catalog identity uncertain | Schott SF2 / N-SF2 class close but not exact | Weak front positive                 |
| L₂      |   1.65160 |      58.5 | S-LAL7 (Ohara)                                          | Exact nd, rounded νd                         | Strong front negative               |
| L₃      |   1.79668 |      45.4 | Unmatched lanthanum dense flint                         | No exact current catalog match found         | Strong rear positive                |
| L₄      |   1.78470 |      26.1 | SF56A (Schott)                                          | Exact nd, rounded νd                         | Rear negative / Petzval correction  |
| L₅      |   1.69680 |      55.6 | S-LAL14 (Ohara)                                         | Exact nd, rounded νd                         | Positive meniscus / rear correction |
| L₆      |   1.71300 |      54.0 | S-LAL8 (Ohara)                                          | Exact nd, rounded νd                         | Final positive element              |

The surface-by-surface Petzval sum computes to +0.004966 mm⁻¹, corresponding to a Petzval radius of about +201.4 mm. This is a moderately positive result, consistent with the patent's explanation that the small number of negative elements tends to leave Petzval correction under pressure.

No ED, fluorite, anomalous partial-dispersion, or aspherical glass/plastic elements are present in the patent prescription. Chromatic correction is therefore classical crown/flint balancing, not secondary-spectrum suppression.

## Focus Mechanism

The patent publishes only the infinity-focus prescription. It does not give variable air-space tables, close-focus examples, or a production mechanical focus description.

Nikon USA gives the production lens as AF-capable, manual-focus capable, 0.85 ft minimum focus, 0.18× maximum reproduction, 6 elements / 6 groups, Nikon F-Bayonet, FX/35mm format, and 7 diaphragm blades. It does not publish the internal focus-group motion.

The data file therefore uses a first-order unit-extension model for visualization. Surface 14, the final back-focus gap, varies from 38.09 mm at infinity to 43.1665 mm at a 0.25 m metric reference close-focus state. A paraxial conjugate solve using 250 mm measured from the image plane gives transverse magnification m = −0.1775, effectively matching Nikon's published 0.18× maximum reproduction. This agreement makes the unit-extension model numerically useful, but it should not be read as proof that the production lens focuses as a rigid unit or that the patent contains a close-focus spacing table.

## Conditional Expressions

The patent defines six conditions. The following values were recomputed from Table 5 with a paraxial trace and checked against Table 6.

**Condition (1): 0.4 ≤ d₄/f ≤ 1**

The relevant air space between L₂ and L₃ includes the tabulated 21.10 mm spacing after surface 4 plus the 1.10 mm spacing after fixed stop S₁. Thus d₄ = 22.20 mm and d₄/f = 0.7762, matching the patent's 0.776.

**Condition (2): 1.65 ≤ (N₅ + N₆)/2 ≤ 1.8**

(N₅ + N₆)/2 = (1.69680 + 1.71300)/2 = 1.7049, matching the patent's rounded 1.7050.

**Condition (3): −1.6 ≤ f₁₂/f ≤ −1**

The synthesized focal length of L₁ + L₂ is −38.2339 mm. Dividing by EFL = 28.6012 mm gives −1.3368, matching the patent's −1.337.

**Condition (4): 0.43 ≤ r₄/f ≤ 0.6**

r₄ = +15.301 mm. r₄/f = +0.5350, matching the patent's 0.535.

**Condition (5): −9 ≤ r₆/f ≤ −0.9**

r₆ = −60.568 mm. r₆/f = −2.1177, matching the patent's −2.118.

**Condition (6): 0.2 ≤ rear-section axial measure / f ≤ 0.5**

The patent text describes thicknesses behind the aperture stop, but Table 6's numerical value can only be reproduced if the measure includes the L₄, L₅, and L₆ center thicknesses plus the two intervening air gaps: 5.60 + 1.15 + 2.20 + 0.10 + 3.00 = 12.05 mm. Dividing by EFL gives 0.4213, matching the patent's 0.4218 within rounding and patent-table precision. Using only the three glass center thicknesses would give 0.3776 and would not match Table 6.

## Verification Summary

| Quantity               |           Patent / source value |             Recomputed value | Note                                       |
| ---------------------- | ------------------------------: | ---------------------------: | ------------------------------------------ |
| Effective focal length |                         28.6 mm |                   28.6012 mm | ABCD trace                                 |
| F-number               |                            2.86 |                         2.86 | Stop semi-diameter set to 7.128875 mm      |
| Full field             |                           75.4° |           75.4° design field | Patent value retained                      |
| Back focal distance    |                        38.09 mm |                   38.0898 mm | Rear vertex to image plane                 |
| Total track            | not tabulated as a single value |                     88.84 mm | Sum of all Table 5 d values, including BFD |
| G₁ focal length        |               condition-derived |                  −38.2339 mm | L₁+L₂ synthesized group                    |
| G₂ focal length        |                   not tabulated |                  +29.0954 mm | L₃–L₆ synthesized group                    |
| Petzval sum            |                   not tabulated |               +0.004966 mm⁻¹ | Surface-by-surface φ/(n·n′)                |
| Close-focus model      |             Nikon 0.25 m, 0.18× | BF = 43.1665 mm, m = −0.1775 | Unit-extension approximation               |

Semi-diameters are inferred, not patent-published. The estimates intentionally clip some extreme paraxial off-axis bundles because the patent table lacks real clear apertures and because several strongly curved elements impose hard geometry constraints. The L₄/L₅ inter-element air gap is the binding rear-group constraint: at the selected 6.85 mm shared semi-diameter, signed sag intrusion remains below 90% of the 1.15 mm gap.

## Design Heritage and Context

The patent cites earlier compact retrofocus wide-angle designs as insufficient either for SLR back focus or for coma control at the upper and lower frame edges. Its solution is a compact six-element arrangement with a carefully constrained front negative group, a rear-group stop placement, and a thickened rear section that draws the exit pupil toward the final surface.

Other Nikon 28mm f/2.8 lenses use different optical constructions, so this analysis should not be generalized to every Nikon 28mm f/2.8. This paired file transcribes only the six-element, six-group prescription in US 5,557,473, Table 5, which is the construction consistent with Nikon's published 6/6 specification for the AF Nikkor 28mm f/2.8D.

## Sources

US Patent 5,557,473, Sugiyama and Sato, “Wide Angle Lens,” Nikon Corporation, granted September 17, 1996.

Nikon USA, “AF Nikkor 28mm f/2.8D,” product page and technical specifications, model 1922: https://www.nikonusa.com/p/af-nikkor-28mm-f28d/1922/overview

Ohara Corporation, S-LAL7, S-LAL14, and S-LAL8 optical glass catalog pages and datasheets: https://oharacorp.com/glass/s-lal7/ ; https://oharacorp.com/glass/s-lal14/ ; https://oharacorp.com/glass/s-lal8/

Schott, SF56A, SF2, and N-SF2 optical glass datasheets: https://www.schott.com/shop/advanced-optics/en/Optical-Glass/SF56A/c/glass-SF56A
