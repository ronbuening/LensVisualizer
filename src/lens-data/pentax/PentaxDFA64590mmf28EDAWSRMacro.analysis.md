## Patent Reference and Design Identification

**Patent:** US 2013/0222925 A1
**Application Number:** US 13/777,324
**Priority:** JP 2012-041804 and JP 2012-041805, 2012-02-28; JP 2012-277048, 2012-12-19
**Filed:** 2013-02-26
**Published:** 2013-08-29
**Inventors:** Tatsuyuki Onozaki; Masakazu Saori
**Applicant / Assignee:** Pentax Ricoh Imaging Company, Ltd.
**Title:** *Close-Distance Correcting Lens System*
**Embodiment analyzed:** Numerical Embodiment 4, Figures 25–32 and Tables 13–16

The prescription represented here is Numerical Embodiment 4 of US 2013/0222925 A1. The patent describes a close-distance-correcting photographic lens having a positive first group and a negative second group, with different objectward travel during focusing. The first group contains a positive front subgroup, a negative image-stabilizing subgroup, the aperture diaphragm, and a positive rear subgroup; the negative subgroup is decentered laterally for image stabilization (¶0016, ¶0027, ¶0040–¶0043). Embodiment 4 is identified explicitly in ¶0356, with its optical layout, infinity and close-focus states, asphere data, and stabilization data given in Tables 13–16.

The production correlation is fixed to the PENTAX HD D FA645 MACRO 90mm f/2.8 ED AW SR. This is a source-based correlation rather than an explicit manufacturer statement that the patent embodiment is the production prescription. The correlation rests on the following convergent evidence:

1. The patent embodiment contains 11 elements in 9 air-separated groups, matching the manufacturer specification.
2. Its computed infinity focal length is 90.116294 mm and the published design f-number is 2.85, corresponding to the marketed 90 mm f/2.8 values after ordinary product rounding.
3. The patent image height of 34.85 mm gives a 69.7 mm full image-circle diameter, matching the nominal diagonal of the 645 format represented by the data file.
4. The published close state traces to a magnification of −0.500014 and an object-to-image-plane distance of 412.844 mm, matching the marketed 0.5× maximum magnification and 0.413 m minimum focusing distance.
5. The two elements at the 497816 optical position correspond to the manufacturer’s statement that the production lens uses two ED elements.
6. The single aspherical surface corresponds to the manufacturer’s statement that the production lens uses one glass-molded aspherical element.
7. The laterally movable cemented G1b pair corresponds to the lens-installed SR mechanism.
8. The differential motion of G1 and G2 corresponds to the manufacturer’s stated floating mechanism for close-range correction.
9. The earliest patent priorities, dated 2012-02-28, precede the product announcement of 2012-09-11.

The marketed 90 mm focal length and f/2.8 aperture remain separate from the exact design values of 90.116294 mm and f/2.85. Likewise, the manufacturer’s 34° digital angle of view is a cropped-sensor specification, whereas the patent’s 21.1° half field and 34.85 mm image height describe the larger 645 image circle. The manufacturer separately gives 42.5° on Film 645, close to the patent’s approximately 42.2° full field.

## Optical Architecture

The design is a two-group floating macro system rather than a direct derivative of a named classical form. Its primary power sequence is positive G1 followed by negative G2. G1 is itself divided into three functional subgroups around the diaphragm:

- **G1a:** L11–L13, positive overall.
- **G1b / SR:** cemented L14–L15, negative overall and laterally shiftable.
- **Aperture diaphragm:** between G1b and G1c.
- **G1c:** cemented L16–L17 followed by L18, positive overall.
- **G2:** L21–L23, negative overall.

The system contains 11 glass elements in 9 air-separated groups. The two cemented interfaces are L14–L15 and L16–L17. The aperture stop lies in air between the stabilizing subgroup and the rear positive portion of G1. No sensor cover, filter, inactive dummy plane, flare-cutter plane, or mechanical surface is included in the optical model.

Independent thick-lens calculations from the final data arrays give isolated group focal lengths of +79.6463 mm for G1a, −120.5966 mm for the G1b cemented pair, +70.4529 mm for complete G1c, +59.9490 mm for complete G1, and −153.8380 mm for complete G2. These values describe the groups isolated in air. They do not equal their in-situ contributions inside the assembled lens, where separation, conjugates, and ray heights alter the effective action of each group.

The positive-front/negative-rear division supports the differential floating motion required for 0.5× focusing while retaining a comparatively large back focal distance for the 645 SLR system. The design is not structurally telephoto under the project criterion because total track divided by EFL is 1.9073 rather than less than 1. It is also not retrofocus under the project criterion because BFD divided by EFL is 0.7667 rather than greater than 1. The manufacturer’s term “medium telephoto” is therefore an angle-of-view category, not a statement about strict telephoto construction.

The patent emphasizes a compact focusing mechanism, close-range aberration correction, adequate medium-format back focus, and control of aberrations introduced when the stabilizing subgroup is decentered (¶0014–¶0016, ¶0048–¶0049). The architecture implements those aims by concentrating stabilization in the compact negative G1b doublet while allowing the larger positive G1 and negative G2 assemblies to follow different axial trajectories during focusing.

## Element-by-Element Analysis

### L11 — Negative Meniscus

**nd = 1.83481, νd = 42.7. Glass: 835427 - high-index lanthanum glass class (vendor unresolved). Isolated focal length in air: −59.736082 mm.**

L11 introduces negative power at the object side of an otherwise positive G1a subgroup. Its weakly curved front surface and much stronger rear surface form a negative meniscus. In isolation it is divergent, but in the assembled front group it expands the incident bundle before L12 and L13 restore convergence.

This distribution avoids placing the whole front-group power in one large positive element. The high refractive index permits useful surface power without extreme curvature, while the moderate Abbe number keeps L11 distinct from the two high-Abbe positive elements used elsewhere in G1.

### L12 — Positive Meniscus

**nd = 1.80610, νd = 33.3. Glass: 806333 - high-index lanthanum flint class (vendor unresolved). Isolated focal length in air: +73.021412 mm.**

L12 is the first strong positive member of G1a. Its positive meniscus form begins reconverging the bundle expanded by L11. The high index allows a relatively compact element to contribute substantial positive power.

The element’s moderate-to-low Abbe number means that it cannot by itself provide the front group’s chromatic correction. That burden is shared with the following high-dispersion-separation ED-class element L13. The resulting air-spaced pair distributes axial color correction across the front subgroup rather than relying on a cemented achromat at the entrance.

### L13 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 - ED fluorophosphate crown class (vendor unresolved). Isolated focal length in air: +91.911662 mm.**

L13 completes G1a as a positive biconvex element. Its very high Abbe number marks it as one of the two ED-class positions in the prescription. In conjunction with the higher-index, lower-Abbe L12, it supplies positive power while reducing the longitudinal color that would otherwise accompany the strong front-group convergence.

The element is air-spaced rather than cemented to L12. That separation gives the designer an additional bending and spacing degree of freedom for balancing spherical aberration, coma, and color. The complete L11–L13 subgroup remains positive, with an isolated EFL of +79.6463 mm.

### L14 — Biconcave Negative, Front Member of G1b

**nd = 1.63980, νd = 34.6. Glass: 640346 - E-FD7/S-TIM27-class dense flint (code equivalent). Isolated focal length in air: −46.182906 mm.**

L14 is the negative member of the cemented G1b stabilizing pair. Its biconcave form supplies most of the pair’s negative standalone power. Because the complete cemented pair is laterally decentered during stabilization, the optical properties of L14 are governed not only by centered aberration correction but also by the requirement to avoid excessive lateral chromatic error when shifted.

The patent places explicit limits on the index and Abbe number of this negative member. The stored values satisfy νd > 30 and nd < 1.7, while the Abbe-number difference from L15 remains within the specified range under conditions 1–4 for Numerical Embodiment 4 (Table 97).

### L15 — Positive Meniscus, Rear Member of G1b

**nd = 1.80518, νd = 25.5. Glass: 805255 - dense flint class (vendor unresolved). Isolated focal length in air: +71.721505 mm.**

L15 is cemented to L14 and is positive in isolation. The pair is nevertheless negative overall, with an isolated EFL of −120.5966 mm. This distinction is central to the design: the individual positive power of L15 does not make G1b positive once the shared interface, thicknesses, and L14 contribution are included.

The unusually high index and low Abbe number of L15 are part of the patent’s decenter-control strategy. The combination with L14 produces a compact negative stabilizing unit while keeping the specified lateral magnifications and chromatic conditions within range. In the centered lens it contributes to the correction of G1; when decentered, the complete pair shifts the image in the opposite direction to the lens-group displacement.

### L16 — Biconcave Negative, Front Member of the G1c Cemented Pair

**nd = 1.72825, νd = 28.3. Glass: 728283 - dense flint class (vendor unresolved). Isolated focal length in air: −31.627136 mm.**

L16 is a strong negative biconcave element immediately behind the diaphragm. It is cemented to L17. The L16–L17 doublet is negative overall when isolated, with an EFL of −144.8227 mm, despite the substantial positive power of L17.

Placed directly after the stop, L16 works at controlled ray heights and strongly influences the balance of spherical aberration and coma in the rear portion of G1. Its low Abbe number also provides the negative-dispersion partner for the ED-class L17.

### L17 — Biconvex Positive, Rear Member of the G1c Cemented Pair

**nd = 1.49700, νd = 81.6. Glass: 497816 - ED fluorophosphate crown class (vendor unresolved). Isolated focal length in air: +46.386499 mm.**

L17 is the second ED-class element in the prescription and the positive member of the cemented L16–L17 pair. Its high Abbe number counteracts the chromatic contribution of L16 while retaining strong positive power.

The cemented pair remains negative as a unit. The following positive L18 is therefore required to make complete G1c positive. This sequence—negative cemented achromat followed by a separate strong positive element—provides more correction freedom than a single positive doublet would offer, particularly as the G1–G2 separation changes with focus.

### L18 — Biconvex Positive with One Aspherical Surface

**nd = 1.80610, νd = 40.7. Glass: 806407 - high-index lanthanum glass class (vendor unresolved). Isolated focal length in air: +55.730188 mm.**

L18 is the positive rear member that changes G1c from a negative front doublet into a positive complete subgroup. Its high index provides strong convergence before the variable G1–G2 air space. The image-side surface, 15A, carries the prescription’s sole asphere.

The asphere allows the rear of G1 to adjust peripheral ray bending without adding another element. This is especially valuable in a macro design because the working conjugates and the separation from G2 change substantially between infinity and 0.5×. The manufacturer identifies one glass-molded aspherical element in the production lens; the patent identifies the aspherical surface but does not itself specify the production manufacturing process.

### L21 — Negative Meniscus, Front Element of G2

**nd = 1.63980, νd = 34.6. Glass: 640346 - E-FD7/S-TIM27-class dense flint (code equivalent). Isolated focal length in air: −79.455939 mm.**

L21 begins the negative rear group. Its nearly flat front surface and more strongly curved rear surface form a negative meniscus. In the assembled G2 it reduces convergence from G1 and helps establish the long rear conjugate required by the 645 SLR mount.

Its weak object-side curvature and much stronger image-side curvature produce negative power with modest bending at the front face. Within the isolated G2 calculation, L21 works with positive L22 and negative L23 to establish the group’s net power and principal-plane location.

### L22 — Biconvex Positive

**nd = 1.80610, νd = 33.3. Glass: 806333 - high-index lanthanum flint class (vendor unresolved). Isolated focal length in air: +56.267562 mm.**

L22 is the positive central element of G2. It balances the negative powers of L21 and L23 while preserving a negative net group. The high index permits strong positive power in a compact thickness.

Its placement between two negative elements forms a negative-positive-negative rear-group sequence. This arrangement gives the designer independent control over rear-group power, principal-plane location, and aberration balance. The element’s stored clear aperture is the geometry model’s tightest edge-thickness case, but the final validated semi-diameters retain a positive minimum edge thickness of 0.311310 mm.

### L23 — Biconcave Negative, Final Element

**nd = 1.56883, νd = 56.0. Glass: 569560 - barium crown class (vendor unresolved). Isolated focal length in air: −79.365343 mm.**

L23 completes G2 and leaves the rear group negative overall. Its biconcave form contributes negative power while its higher Abbe number, relative to L21 and L22, moderates the rear group’s chromatic contribution.

As the last element, L23 strongly affects the rear principal plane and back focal distance. The complete G2 has an isolated EFL of −153.8380 mm. L23’s higher Abbe number distinguishes it from the lower-Abbe L21 and L22 positions while the three-element group remains negative overall.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not identify a manufacturer, melt,
composition, C-line index, F-line index, g-line index, or anomalous partial-dispersion value for any element. The final
data file therefore retains six-digit optical-position codes and broad glass classes rather than asserting a patent
vendor. The `640346` position exactly matches HOYA E-FD7 and the S-TIM27 class, so the vendor-published E-FD7
polynomial is used as a code-equivalent dispersion source without claiming that the patent elements were made by HOYA.

| Code / class label | nd | νd | Elements | Function in this prescription |
|---|---:|---:|---|---|
| 835427 - high-index lanthanum glass class (vendor unresolved) | 1.83481 | 42.7 | L11 | High-index front negative meniscus |
| 806333 - high-index lanthanum flint class (vendor unresolved) | 1.80610 | 33.3 | L12, L22 | Strong positive power in front and rear groups |
| 497816 - ED fluorophosphate crown class (vendor unresolved) | 1.49700 | 81.6 | L13, L17 | Two high-Abbe positive elements |
| 640346 - E-FD7/S-TIM27-class dense flint | 1.63980 | 34.6 | L14, L21 | Negative stabilizer and rear-group elements; coefficient-backed code equivalent |
| 805255 - dense flint class (vendor unresolved) | 1.80518 | 25.5 | L15 | High-index positive member of G1b |
| 728283 - dense flint class (vendor unresolved) | 1.72825 | 28.3 | L16 | Negative member of rear G1 cemented pair |
| 806407 - high-index lanthanum glass class (vendor unresolved) | 1.80610 | 40.7 | L18 | Positive aspheric-bearing element |
| 569560 - barium crown class (vendor unresolved) | 1.56883 | 56.0 | L23 | Final negative rear-group element |

The catalog audit found exact or near-exact optical positions in more than one manufacturer’s catalog for several
pairs. That result supports the class labels but prevents a defensible vendor or melt identification. A six-digit
optical code is an nd/νd position, not a unique composition identifier. E-FD7 supplies coefficient-backed dispersion
for L14 and L21 solely because its published coordinate is exact; the rest of the unresolved rows remain Abbe-modeled.

The two 497816 elements are consistent with the manufacturer’s statement that the production lens contains two ED
elements. That correlation does not establish a particular ED glass such as S-FPL51, FCD1, N-PK52A, or another
cross-vendor equivalent. Accordingly, those ED elements do not import catalog line indices or Sellmeier coefficients
from any one candidate.

The 806407 position of L18 is consistent with several high-index lanthanum-family catalog positions, including catalog families intended for precision molding. This is compatible with the manufacturer’s identification of a glass-molded aspherical element, but the patent does not name the glass or its forming process. The analysis therefore treats “glass-molded” as a manufacturer statement about the production lens, not a prescription-table fact.

## Focus Mechanism

The lens uses a published two-group floating focus system. The patent states that both the positive first group G1 and the negative second group G2 move toward the object when focusing from infinity to close distance, but by different amounts (¶0016, ¶0026–¶0027, ¶0040–¶0042). Numerical Embodiment 4 publishes the infinity and −0.50:1 endpoints directly; no intermediate or close-focus spacing has been reconstructed.

The final data file stores the two published variable spacings:

| Variable spacing | Infinity | −0.50:1 close state | Change |
|---|---:|---:|---:|
| D15, between G1 and G2 | 5.680 mm | 11.958 mm | +6.278 mm |
| Back focal distance after surface 21 | 69.090 mm | 98.180 mm | +29.090 mm |

The table is expressed in the patent’s first-surface reference frame, so the first-surface-to-image distance grows from 171.880 mm to 207.248 mm. Normalizing both states to a fixed image plane gives the physical group movements: G2 translates 29.090 mm toward the object, while G1 translates 35.368 mm toward the object. The movement ratio is 0.822494911, within every applicable patent range.

The lens-alone paraxial EFL changes from 90.116294 mm at infinity to 84.907637 mm at the close endpoint. This is a consequence of the changing G1–G2 separation and should not be confused with the marketed 90 mm infinity focal length.

Finite-conjugate tracing of the published close state gives an object distance of 205.596 mm from the first vertex, a first-surface-to-image distance of 207.248 mm, and an object-to-image-plane distance of 412.844 mm. The latter is the appropriate comparison to the manufacturer’s 0.413 m minimum focusing distance. The calculated lateral magnification is −0.500014.

The patent gives f/2.85 at infinity and f/4.06 at the close endpoint. With the inferred entrance and exit pupils, the standard macro effective-f-number expression gives f/4.070, consistent with the rounded close-state value. The data file retains `nominalFno: 2.85`, because the exact modeled infinity f-number controls the stop and pupil geometry; the marketed aperture remains f/2.8.

## Aspherical Surfaces

The prescription contains one aspherical surface: surface 15A, the image-side surface of L18. The patent uses the standard rotationally symmetric conic equation (¶0342–¶0343):

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+\cdots,
$$

where $c=1/R$. The published coefficient is already the standard conic constant; no conversion from an alternative κ convention is required.

| Surface | Base radius | K | A4 | Higher nonzero terms |
|---|---:|---:|---:|---|
| 15A | −183.734 mm | 0 | +1.173 × 10⁻⁶ mm⁻³ | None published |

Because K = 0, the conic base is spherical. The positive A4 term increases the image-side sag relative to that spherical
base at larger ray heights. At the final verified semi-diameter of 19.9 mm, the A4 departure is +0.183954 mm. This
value is quoted only at the validated modeled clear aperture; the patent itself does not publish the semi-diameter.

No uniform scale factor was applied. The radius and A4 coefficient therefore remain exactly in the patent’s dimensional scale. No transformation of the form $A_p/s^{p-1}$ was required.

## Modeling Disclosures and Limits

The patent does not publish clear semi-diameters or a physical stop diameter for Embodiment 4. The semi-diameters in the data file are modeling inferences derived from the f/2.85 pupil solution, infinity and close marginal/chief-ray envelopes, the Figure 25 section, and the current geometry constraints. They are not manufacturing dimensions.

The inferred physical stop semi-diameter is 15.533311 mm. The corresponding entrance-pupil semi-diameter is 15.809876 mm, located 36.927507 mm behind the first surface in the adopted coordinate system. The stop dimension is therefore a paraxial model result, not a patent-table value.

The final inferred apertures use the Figure 25 outline unless the infinity or close-focus ray envelope requires a larger
clear aperture. They pass the standalone geometry gate at both focus endpoints and preserve every normal-density
on-axis and 0.60-field ray that reached the image side before the revision. The repository `buildLens()`,
`validateLensData()`, image-circle audit, and render diagnostics report no edge-thickness, conic, cross-gap, or hidden
trim failures.

No cover glass, filter, inactive dummy plane, flare cutter, or mechanical part appears in the selected embodiment, so none was removed or converted to an air-equivalent spacing. The source prescription required no numerical correction. Rendered patent pages were used only to restore signs, decimal points, and notation lost in machine parsing.

The focus status is **PUBLISHED**. The data file contains only the two source endpoints and does not invent an intermediate internal-focus law. Interpolation between them is a viewer behavior rather than an additional patent state.

The patent supplies no nC, nF, ng, or dPgF values. The E-FD7 code-equivalent adds coefficient-backed dispersion only
for L14 and L21; the remaining rows retain Abbe modeling. Chromatic calculations therefore cannot support an
apochromatic or anomalous-partial-dispersion claim. The two ED-class identifications are based on nd/νd position and
manufacturer correlation only.

## Chromatic Correction Strategy

The design uses two high-Abbe positive elements at L13 and L17. L13 is air-spaced behind the high-index positive L12 in G1a, while L17 is cemented to the strong negative L16 in G1c. These placements give the front and rear portions of G1 separate chromatic balancing points.

G1b uses a different strategy. Its negative L14 and positive L15 both have comparatively low Abbe numbers, but their index and dispersion difference are constrained by the patent to reduce lateral color when the cemented pair is decentered. Conditions 1–4 address this stabilizer-specific balance rather than general axial achromatism.

The rear group combines negative L21, positive L22, and negative L23. L23’s νd of 56.0 is materially higher than the values of L21 and L22, allowing the final negative element to moderate rear-group chromatic power while G2 remains negative overall.

Only nd and νd are known. These data support a description of an ED-assisted achromatic strategy, but not a claim of apochromatic correction, secondary-spectrum elimination, or anomalous partial-dispersion behavior.

## Image Stabilization

The image-stabilizing unit is G1b, the cemented L14–L15 pair. The patent specifies that this subgroup moves in a direction orthogonal to the optical axis to change image position and correct shake (¶0016). The pair is negative overall, compact, and located ahead of the diaphragm.

Table 16 gives the image displacement LI for a 1.00 mm lateral movement LV of the stabilizing pair:

| Focus state | Published LV | Published LI | Independent first-order LI |
|---|---:|---:|---:|
| Infinity | 1.00 mm | −0.75 mm | −0.751895 mm |
| −0.50:1 close state | 1.00 mm | −1.01 mm | −0.988039 mm |

The negative sign means that the image shifts opposite the subgroup displacement under the patent convention. The infinity result agrees within 0.00190 mm/mm. The close result differs by 0.02196 mm/mm from the two-decimal source value; this is consistent with rounding and the distinction between a first-order affine calculation and the patent’s finite-decenter evaluation.

The relevant lateral-magnification factors are β1b = 2.98101687 and βR = 0.379553818. Their combination reproduces the infinity stabilization sensitivity to the precision expected from the rounded source table. The manufacturer’s approximately 3.5-stop SR effectiveness is a product-level performance statement and is not derived from this first-order prescription model.

## Conditional Expressions

Table 97 gives the condition values for Numerical Embodiment 4. The applicable set is conditions 1–4 and 6–9; condition 5 belongs to the single-negative G1b alternative used by later embodiments in the first series. Conditions 10–23 describe the separate 13th–28th-embodiment architecture and are not applicable to this prescription. The strengthened form 2′ is also satisfied.

| Condition | Patent Table 97 | Independent result from Table 13 | Required interval | Result |
|---|---:|---:|---|---|
| 1 | 34.57 | 34.6 | > 30 | Pass |
| 2 | 9.27 | 9.1 | 0 < value < 20 | Pass |
| 2′ | 9.27 | 9.1 | 0 < value < 15 | Pass |
| 3 | 1.640 | 1.6398 | < 1.7 | Pass |
| 4 | 1.805 | 1.80518 | > 1.8 | Pass |
| 5 | — | — | Single-negative G1b alternative | N/A |
| 6 | 2.98 | 2.98101687 | 2.5 < value < 3.2 | Pass |
| 7 | 0.38 | 0.379553818 | 0.35 < value < 0.50 | Pass |
| 8 | 2.57 | 2.56614656, with f2 < 0 | 1.9 < value < 3.9 | Pass |
| 9 | 0.822 | 0.822494911 | 0.74 < value < 0.88 | Pass |

Table 13 prints the two G1b Abbe numbers to one decimal place, whereas Table 97 retains more precision in conditions 1 and 2. The resulting 9.1 versus 9.27 difference is therefore a source-precision effect, not evidence of a prescription error. The remaining independently calculated values reproduce Table 97 at its displayed precision.

These conditions constrain the stabilizing doublet’s dispersion and index, the lateral magnifications around G1b, the relative powers of G1 and G2, and the differential focus motion. Passing them shows that the transcription is internally consistent with the patent’s first embodiment family; it does not establish production identity by itself.

## Verification Summary

The final data arrays reproduce the load-bearing source quantities without scaling:

| Quantity | Final-array result | Source / comparison |
|---|---:|---|
| Infinity EFL | 90.116294 mm | 90.12 mm in Table 14 |
| Infinity BFL | 69.091167 mm | 69.09 mm in Table 14 |
| Infinity first-surface-to-image track | 171.880000 mm | 171.88 mm in Table 14 |
| Close first-surface-to-image track | 207.248000 mm | 207.25 mm rounded in Table 14 |
| Close magnification | −0.500014 | −0.50:1 in Table 14 |
| Object-to-image-plane distance | 412.843996 mm | 0.413 m marketed MFD |
| Modeled infinity f-number | 2.849999985 | 2.85 in Table 14 |
| Macro effective f-number | 4.070372 | 4.06 in Table 14 |
| G1 / G2 objectward travel | 35.368 / 29.090 mm | Derived from published spacings |
| Petzval sum | +0.001004333 mm⁻¹ | Surface-by-surface φ/(n·n′) |

The sequential height/reduced-angle trace and the ABCD matrix agree to below 10⁻¹² at both published endpoints. The Petzval reciprocal is approximately +995.685 mm under the adopted sign convention. This is a first-order surface-power sum, not a complete prediction of the finite-field image surface.

The prescription’s correspondence with the patent tables is therefore quantitative, while the link to the production lens remains a convergent technical correlation based on construction, focal length, aperture, image circle, close-focus conjugate, special-element count, stabilization layout, floating motion, and timing.

## Sources

1. Onozaki, Tatsuyuki, and Masakazu Saori. “Close-Distance Correcting Lens System.” US 2013/0222925 A1, published 2013-08-29. Numerical Embodiment 4, Figures 25–32, Tables 13–16. https://patents.google.com/patent/US20130222925A1/en
2. Ricoh Imaging Company, Ltd. “HD PENTAX-D FA645 MACRO 90mm F2.8 ED AW SR.” Product announcement, 2012-09-11. https://www.ricoh-imaging.co.jp/english/news/2012/20120911_6.html
3. Ricoh Imaging Company, Ltd. “HD PENTAX-D FA645 MACRO 90mmF2.8ED AW SR.” Official product specification page. https://www.ricoh-imaging.co.jp/english/products/lens/645/macro/hdpentax-d-fa645-macro-90/
4. OHARA optical-glass catalog. https://www.ohara-inc.co.jp/en/product/catalog/
5. HIKARI optical-glass catalog. https://www.nikon.com/business/components/lineup/materials/optical-glass/
6. HOYA optical-glass cross-reference and catalog resources. https://www.hoyaoptics.eu/glass-cross-reference-index
7. SCHOTT optical-glass catalog resources. https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads
8. CDGM optical-glass catalog resources. https://www.cdgmgd.com/
9. SUMITA optical-glass catalog resources. https://www.sumita-opt.co.jp/en/download/
