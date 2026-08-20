## Patent Reference and Design Identification

**Patent:** US 2025/0389929 A1\
**Application Number:** 19/243,548\
**Filed:** June 19, 2025\
**Priority:** JP 2024-101168, June 24, 2024\
**Published:** December 25, 2025\
**Inventor:** Takahiro Saito\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *Optical System and Imaging Apparatus Including Same*\
**Embodiment analyzed:** Numerical Example 1

The LensVisualizer prescription uses Numerical Example 1 of US 2025/0389929 A1 as the fixed correlation for the Canon RF 14mm f/1.4 L VCM. The patent itself does not identify a commercial product. The correspondence is therefore an architectural and numerical correlation rather than a manufacturer statement that the production lens uses this exact prescription.

The notation needs one explicit mapping. LensVisualizer element labels **L1–L18** correspond to patent lens labels **G1–G18**. LensVisualizer's three functional annotations **G1 (FIXED), G2 (FOCUS), and G3 (FIXED)** correspond to the patent's three lens groups **L1, L2, and L3**, respectively.

Several independent features converge on the selected production correlation:

1. Canon publishes an **18-element / 13-group** construction for the RF14mm F1.4 L VCM, exactly matching Numerical Example 1's 18 physical elements in 13 air-separated groups.
2. Canon markets the product as **14 mm f/1.4**; Numerical Example 1 is an unscaled **14.42 mm, Fno 1.46** design. The data file keeps the marketed and design values separate rather than forcing a scale transformation.
3. Canon specifies **three aspherical elements**. Example 1 contains five aspherical surfaces on three elements: data L1, L3, and L16. Canon's developer interview independently places two GMo aspherical elements in the front portion and one in the rear focus group.
4. Canon specifies one **fluorite** and one **UD** element. The production optical cross-section locates the UD element in the front portion of the lens, making data L2 / patent G2 the strongest location-based UD correlation. The negative data L5 / patent G5 has `nd = 1.43387`, `νd = 95.1` and is the convergent match for Canon's explicitly concave fluorite element.
5. Canon locates its **BR optical element immediately behind the aperture**, sandwiched between a convex and a concave lens. Example 1 has a `1.57060 / 20.08` resin-correlated member, data L11, between positive L10 and negative L12 in the cemented triplet immediately behind the stop.
6. Canon identifies a rear focus unit driven by VCM actuators. Example 1 likewise focuses by translating only the second functional group, data G2 / patent L2, while the front and rear functional groups remain fixed.
7. The product's **0.24 m** minimum focusing distance and **0.11×** maximum magnification are close to the patent's second focus state, which is tabulated at **−0.1×** and includes a disputed `240.532 mm` object-distance row discussed below.
8. The timing is consistent: Japanese priority was claimed in June 2024, the U.S. application was published in December 2025, and Canon announced the RF14mm F1.4 L VCM on February 4, 2026.

One shape-level discrepancy prevents treating the correlation as an exact production disclosure. Canon's developer interview describes the production focus-group GMo as a **concave** aspherical lens, whereas Example 1 places its focus-group aspherical surfaces 28 and 29 on data L16, a **positive biconvex** element. The selected patent/example remains the fixed LensVisualizer correlation, but this difference should remain visible whenever production identity is discussed.

The patent's own prose contains a separate internal label error at ¶0136. It first says that the second lens group L2 moves during focusing and then states that the first and third groups “L1 and L2” remain stationary. The abstract, ¶0032, and claim 1 consistently establish the intended stationary pair as **L1 and L3**; the analysis follows that internally consistent reading.

## Optical Architecture

Numerical Example 1 is a three-functional-group, wide-angle prime with a **positive–positive–negative** group-power sequence. It contains 18 elements in 13 air-separated groups and four cemented assemblies. The aperture stop lies inside the first functional group, after data L9 and before the post-stop cemented triplet C2. Patent ¶¶0032–0049 describe the same broad architecture: a positive front group, a positive moving second group, and a rear group whose negative power is used to control the rear ray geometry and Petzval balance.

| Functional group | Patent group | Elements | State | Independently verified focal length | Principal role |
|---|---|---|---|---:|---|
| G1 (FIXED) | L1 | L1–L12 | Fixed | +36.2812 mm | Front negative-power distribution, aperture, and most of the primary chromatic/aberration correction |
| G2 (FOCUS) | L2 | L13–L16 | Moves toward object at close focus | +28.3504 mm | Rear focusing group; preserves a positive net power despite a net-negative front cemented pair |
| G3 (FIXED) | L3 | L17–L18 | Fixed | −57.2743 mm | Rear negative cemented group controlling image-side ray geometry and field balance |

The front group begins with three consecutive negative lenses. Patent ¶¶0042–0043 states the purpose explicitly: distributing the required negative refractive power among three lenses reduces the burden on each element and suppresses barrel distortion and field curvature while retaining sufficient back focus. The following positive members then restore the group to a net positive focal length. Patent ¶¶0153–0158 further associates the front meniscus/aspherical arrangement with distortion, astigmatism, field curvature, and chromatic correction.

The second functional group has four elements. Its front cemented pair C3 is net negative in isolation, while L15 and L16 supply enough positive power to make the complete focus group positive. That distinction matters: the positive **group** focal length does not mean every constituent or every cemented subassembly is positive.

The third functional group is exactly the cemented pair C4. Its isolated focal length, **−57.2743 mm**, is therefore also the focal length of the complete G3 functional group. Patent ¶0171 assigns this positive/negative cemented rear pair to magnification-chromatic and astigmatism correction.

Independent paraxial tracing of the infinity state gives an effective focal length of **14.4176265 mm** and a back focal length of **13.9940664 mm** from the last surface, reproducing the patent's 14.42 mm and 14.00 mm values to the table precision. The first vertex to image-plane track is **118.50 mm**. Under the project's strict terminology, the design is neither telephoto (`TL/EFL = 8.2191`) nor retrofocus (`BFD/EFL = 0.97062`, below unity).

No uniform production scaling is applied. All radii, axial spacings, and aspherical coefficients remain at the patent's Example 1 scale. The marketed 14 mm / f/1.4 values are metadata; the modeled design remains 14.4176 mm / Fno 1.46.

The patent publishes neither clear apertures nor an absolute stop diameter. The authored surface semi-diameters are therefore modeling values derived from the patent drawing, pupil geometry, ray containment, and the current geometry limits. The stop semi-diameter is modeled as **11.504 mm**, consistent with the paraxial f/1.46 pupil constraint, but it is not a patent-published iris dimension. No sensor cover, optical filter, inactive dummy plane, flare-cutter plane, or mechanical rear gel-holder component is included in the sequential optical model.

## Element-by-Element Analysis

### L1 — Negative Meniscus, two aspherical surfaces

`nd = 1.58313, νd = 59.4. Glass: 583594 — BAL42-class crown (OHARA S-/L-family unresolved). f = −40.86 mm.`

L1 is the large front negative meniscus and carries aspherical surfaces 1A and 2A. It supplies the first share of the distributed front negative power discussed in ¶¶0042–0043. Patent ¶¶0153–0154 identifies the first negative menisci and their aspherization as important to distortion, field-curvature, and astigmatism control. Canon's production interview places one of its two front GMo aspheres at the large front element, providing a strong positional correlation without proving material identity.

### L2 — Negative Meniscus, front low-dispersion element

`nd = 1.49700, νd = 81.65. Glass: 497817 — S-FPL51/FCD1-class low-dispersion crown. f = −97.46 mm.`

L2 is the weakest of the first three negative lenses by standalone power, which is consistent with the patent's strategy of spreading the front negative power among several elements. Its high Abbe number also places low dispersion early in the train. Table 2 identifies patent G2 as one of the high-`νd` negative lenses satisfying condition (14). Canon's production cross-section labels the marketed UD element in this front region, making L2 the strongest location-based UD correlation; the patent does not identify a Canon melt or vendor catalog glass.

### L3 — Biconcave Negative, rear aspherical surface

`nd = 1.80400, νd = 46.5. Glass: 804465 — S-LAH65V/VS-class high-index crown. f = −34.81 mm.`

L3 is the strongest of the first three front negative elements after L1 and carries the aspherical rear surface 6A. In Example 1, patent ¶0154 specifically identifies G1 and G3 as the two front aspherical lenses used to strengthen distortion and astigmatism correction. Its high index permits substantial negative power without requiring the extreme curvatures that a lower-index glass would require for the same standalone power.

### L4 — Positive Meniscus

`nd = 1.66565, νd = 35.6. Glass: 666356 — dense-flint class (catalog identity unresolved). f = +87.85 mm.`

L4 is the first positive element after the three-lens negative front train. Patent ¶¶0156–0157 assigns this positive fourth lens a direct role in correcting barrel distortion and magnification chromatic aberration generated by the preceding negative sequence. Its moderate standalone positive power begins the recovery toward the net-positive G1 functional group.

### L5 — Biconcave Negative, fluorite-correlated

`nd = 1.43387, νd = 95.1. Glass: CaF2 fluorite (Canon production-correlation inference; patent G5 coordinates). f = −61.56 mm.`

L5 is a strongly low-dispersion negative element. Table 2 lists patent G5 at `νd = 95.10` among the high-Abbe negative lenses used by condition (14). Canon states that the RF14mm F1.4 L VCM uses one fluorite element and, unusually for this material in Canon lenses, that it is a **concave** lens used to suppress lateral chromatic aberration toward the periphery. The combination of shape, location, and `nd/νd` makes L5 the convergent production fluorite correlation; it is not a public optical-glass catalog assignment.

### L6 + L7 — C1 cemented positive/negative pair

- **L6:** `nd = 1.75500, νd = 52.3. Glass: 755523 — TAC6L/S-LAH97-class lanthanum crown. f = +20.57 mm.`
- **L7:** `nd = 1.84666, νd = 23.8. Glass: 847238 — N-SF57-equivalent dense flint. f = −62.22 mm.`

The isolated C1 cemented pair has a computed focal length of **+29.4283 mm**. This is a computed cemented-stack value; the standalone L6 and L7 powers remain those shown above. Patent ¶0158 states that a positive/negative cemented lens in the first functional group can favorably correct axial and magnification chromatic aberration. C1 provides that pairing before the final pre-stop elements.

### L8 — Biconvex Positive

`nd = 1.83481, νd = 42.7. Glass: 835427 — TAFD5G-class high-index crown. f = +46.32 mm.`

L8 is an uncoupled positive element between C1 and the final negative element ahead of the stop. Together with L4 and the net-positive C1 pair, it supplies positive power needed to make the complete front group positive after the strongly negative front cluster. Its high index keeps that positive contribution compact.

### L9 — Negative Meniscus, pre-stop anomalous-dispersion datum

`nd = 1.77047, νd = 29.74. Glass: 770297 — NBFD29-class dense flint. f = −52.48 mm.`

L9 is the last refracting element before the aperture stop. The patent publishes `θgF = 0.5951` for patent G9 and includes it among the negative lenses evaluated by conditions (6) and (7). Patent ¶¶0079–0089 explains that selected negative lenses with controlled partial dispersion can reduce excessive short-wavelength axial chromatic aberration. The data file stores a SCHOTT-normal-line `dPgF = +0.00132268` derived from the published `θgF`; this is not the same quantity as the patent's own `ΔθgFn` normal-line residual.

### L10 + L11 + L12 — C2 post-stop cemented triplet with BR resin

- **L10:** `nd = 2.00100, νd = 29.1. Glass: 001291 — TAFD55/S-LAH99-class high-index flint. f = +24.97 mm.`
- **L11:** `nd = 1.57060, νd = 20.08. Glass: Unmatched (Canon BR optical resin). f = +198.37 mm.`
- **L12:** `nd = 1.66565, νd = 35.64. Glass: H-ZBaF4 catalog equivalent for patent 666356; production supplier unspecified. f = −33.37 mm.`

C2 is the cemented triplet immediately behind the stop. Its isolated net focal length is **+59.2977 mm**, even though the rear member L12 is strongly negative. Patent ¶¶0115–0122 describes the benefit of placing a positive partial-dispersion-correcting member in a cemented triplet near the aperture, where axial ray height is large, to strengthen axial chromatic correction.

L11 is the most distinctive material in the prescription. The patent gives patent G11 `θgF = 0.7782` and a large positive condition-(15) residual. The data file converts this to a SCHOTT-normal `dPgF = +0.16817456`. Canon independently describes the production BR element as a molded resin immediately behind the stop, bonded between convex and concave glass members, with unusually strong refraction in the short-wavelength blue region. The positional and spectral fingerprints are therefore unusually specific, although the patent never names “BR” as a commercial material.

L12 carries `θgF = 0.5824` and derived `dPgF = -0.00145352`. Its negative power and cemented placement complete the triplet's power and dispersion balance rather than functioning as an isolated corrective lens.

### L13 + L14 — C3 cemented pair at the front of the focus group

- **L13:** `nd = 1.43875, νd = 94.66. Glass: 439947 — S-FPL55-class ED/UD crown. f = +36.96 mm.`
- **L14:** `nd = 1.77047, νd = 29.74. Glass: 770297 — NBFD29-class dense flint. f = −25.61 mm.`

C3 begins the moving G2 functional group. In isolation the cemented pair is **net negative**, with a computed focal length of **−77.2687 mm**. The complete focus group nevertheless remains positive because L15 and L16 add greater positive power downstream.

L13 is an extreme low-dispersion positive member, but Canon's published optical cross-section places the marketed UD element in the front portion of the production lens. The data file therefore treats L13 as a low-dispersion catalog-class match, not as the production UD identification.

L14 provides the negative partner and carries patent `θgF = 0.5951`, giving the same derived SCHOTT-normal `dPgF = +0.00132268` as L9. Patent ¶¶0161–0166 describe a negative/positive cemented combination near the object side of the second functional group as a means of stabilizing axial chromatic correction through focus.

### L15 — Biconvex Positive, low-dispersion

`nd = 1.49700, νd = 81.65. Glass: 497817 — S-FPL51/FCD1-class low-dispersion crown. f = +36.91 mm.`

L15 is a strong positive lens in the moving group and supplies low-dispersion positive power after the net-negative C3 pair. Table 2 identifies patent G15 as one of the high-Abbe positive lenses satisfying condition (12). The complete G2 focal length of +28.3504 mm depends materially on L15 and L16; it cannot be inferred from C3 alone.

### L16 — Biconvex Positive, two aspherical surfaces

`nd = 1.85400, νd = 40.4. Glass: 854404 — L-LAH85V-class high-index crown. f = +52.63 mm.`

L16 is the final element of the moving focus group and carries aspherical surfaces 28A and 29A. Patent ¶¶0169–0170 explains why an image-side lens of the second group is made strongly relevant to focus stability: its geometry is used to reduce variations in astigmatism, coma, and angle of view as the group moves. The high-index positive element also supplies part of the net positive group power.

Canon confirms that the production rear focus group contains a GMo aspherical element, which is a strong positional match. Canon also describes that production GMo as concave, however, whereas Example 1's L16 is positive biconvex. That difference is retained as a production-correlation limitation rather than reconciled by altering the patent prescription.

### L17 + L18 — C4 rear cemented group

- **L17:** `nd = 1.59282, νd = 68.6. Glass: 593686 — FCD505/FCD515-class low-dispersion crown. f = +39.24 mm.`
- **L18:** `nd = 1.91650, νd = 31.6. Glass: 917316 — S-LAH88-class high-index lanthanum flint. f = −23.32 mm.`

C4 is the entire fixed rear G3 functional group. Its isolated net focal length is **−57.2743 mm**, reproducing the patent's `f3 = −57.275 mm`. Patent ¶0171 identifies the rear positive/negative cemented lens as a contributor to magnification-chromatic and astigmatism correction. Patent ¶¶0152 and 0068–0075 also explain the broader reason for a negative rear group: it sets image-side ray angles and reduces the positive Petzval burden while preserving peripheral correction.

## Glass Identification and Selection

The patent supplies refractive indices and Abbe numbers but does not name glass vendors or melts. Catalog names in the data file are therefore **class or equivalent labels** unless manufacturer evidence independently identifies a material. Fifteen distinct `nd/νd` coordinate pairs occur.

Two same-coordinate catalog ambiguities are left explicit. OHARA publishes both S-BAL42 and low-Tg L-BAL42 at code 583594 and `nd = 1.58313`, `νd = 59.38`, so L1 cannot be assigned to either family from the patent coordinates alone. HOYA likewise uses code 593-686 for both FCD505 and FCD515-family entries, so L17 is kept at the dual-family class level rather than promoted to a unique melt.

| Data element(s) | `nd` | `νd` | Data-file glass identification | Status / role |
|---|---:|---:|---|---|
| L1 | 1.58313 | 59.4 | 583594 — BAL42-class crown (OHARA S-/L-family unresolved) | Coordinate match; family/vendor unresolved |
| L2, L15 | 1.49700 | 81.65 | 497817 — S-FPL51/FCD1-class low-dispersion crown | L2 is strongest production UD-location correlation; vendor/melt unresolved |
| L3 | 1.80400 | 46.5 | 804465 — S-LAH65V/VS-class high-index crown | Catalog-class match |
| L4 | 1.66565 | 35.6 | Unmatched patent 666356 dense flint | No published partial-dispersion basis for a catalog proxy |
| L5 | 1.43387 | 95.1 | CaF2 fluorite | Canon production-correlation inference at the patent G5 coordinate |
| L12 | 1.66565 | 35.64 | H-ZBaF4 catalog equivalent | Patent `dPgF` remains authoritative; production supplier unspecified |
| L6 | 1.75500 | 52.3 | 755523 — TAC6L/S-LAH97-class lanthanum crown | Cross-vendor class match |
| L7 | 1.84666 | 23.8 | 847238 — N-SF57-equivalent dense flint | Catalog-equivalent class |
| L8 | 1.83481 | 42.7 | 835427 — TAFD5G-class high-index crown | Catalog-class match |
| L9, L14 | 1.77047 | 29.74 | 770297 — NBFD29-class dense flint | Patent `θgF = 0.5951`; derived `dPgF = +0.00132268` |
| L10 | 2.00100 | 29.1 | 001291 — TAFD55/S-LAH99-class high-index flint | Very-high-index class |
| L11 | 1.57060 | 20.08 | Unmatched (Canon BR optical resin) | Manufacturer-supported proprietary resin correlation |
| L13 | 1.43875 | 94.66 | 439947 — S-FPL55-class ED/UD crown | Low-dispersion class; not assigned as production UD element |
| L16 | 1.85400 | 40.4 | 854404 — L-LAH85V-class high-index crown | Catalog-class match |
| L17 | 1.59282 | 68.6 | 593686 — FCD505/FCD515-class low-dispersion crown | Same-code HOYA family ambiguity; vendor/melt unresolved |
| L18 | 1.91650 | 31.6 | 917316 — S-LAH88-class high-index lanthanum flint | Catalog-class match |

The palette uses three distinct chromatic mechanisms rather than relying on one nominal “ED” category. First, high-Abbe negative and positive members such as L2, L5, L13, L15, and L17 reduce ordinary d-line dispersion. Second, the patent explicitly controls partial dispersion in selected negative elements L9, L12, and L14. Third, the post-stop L11 resin has an unusually large positive partial-dispersion deviation and is placed in a cemented triplet where the patent expects strong axial-color leverage.

The patent defines d, F, C, and g Fraunhofer wavelengths as 587.6, 486.1, 656.3, and 435.8 nm and publishes `θgF` only for selected elements. Complete `nC/nF/ng` triplets are not published for Example 1 and are not invented in the data file. The stored `dPgF` values are derived from the published `θgF` values using the SCHOTT Pg,F normal line; they must not be confused with the patent's separately defined `ΔθgF` conditional-expression residuals.

No apochromatic designation is asserted. The prescription and Canon's product documentation plainly contain substantial chromatic-correction measures, but the available source data do not justify converting that into a formal APO claim.

## Focus Mechanism

The patent uses a published rear/inner-focus state rather than a reconstructed one. Data G2, corresponding to patent lens group L2 and surfaces 23–29A, translates **toward the object** from infinity to the close state. Data G1 and G3 remain fixed with respect to the image plane. This agrees with the abstract, ¶0027, ¶0032, claim 1, and the variable-spacing table for Numerical Example 1.

| Variable gap | Infinity | Patent close state | Change |
|---|---:|---:|---:|
| D22 | 5.08 mm | 4.08 mm | −1.00 mm |
| D29 | 2.20 mm | 3.21 mm | +1.01 mm |

The two rounded gaps imply approximately 1.00–1.01 mm of group translation. Patent Table 1 gives the signed movement quantity `M2 = −1.005 mm`; under the patent's sign definition, the negative value denotes motion toward the object. The 0.01 mm mismatch in the sum of the two rounded neighboring gaps is retained rather than forcing exact conservation.

The second focus column is labeled at **−0.1×** lateral magnification. It also prints “First surface from object plane = 240.532 mm.” Literal use of 240.532 mm as the distance from the object to the first lens surface fails the paraxial conjugate: when the image plane is re-focused for that literal object distance, the rounded close-state prescription gives about −0.054× rather than −0.1×. Treating 240.532 mm as an **object-plane to image-plane** distance instead brings the calculated state close to the stated magnification, and solving the rounded paraxial prescription exactly gives an object-to-image conjugate of about 239.15 mm at −0.10098×. The data file therefore preserves the printed 240.532 mm value in the audit but interprets its reference plane as an image-plane-referenced MFD/total conjugate for comparison. The internal focus spacings themselves remain fully published; there is no reconstructed focus motion.

Canon specifies a **0.24 m** minimum focusing distance and **0.11×** maximum magnification for the production lens, which is consistent with that normalized close-state scale. Canon also specifies **two VCM focus motors**. The optical prescription, however, contains only one moving optical group. The mechanical use of two actuators therefore should not be read as evidence for two independently moving lens groups in this model.

## Aspherical Surfaces

Numerical Example 1 has five aspherical surfaces on three elements: **1A and 2A on L1, 6A on L3, and 28A and 29A on L16**. Patent ¶0176 defines the sag as

$$
x(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+A_{14}h^{14}+A_{16}h^{16}.
$$

The patent's `k` is therefore the standard conic constant **K** used by LensVisualizer; no `κ → K` conversion is needed. The Example 1 table contains no nonzero odd-order terms and no nonzero terms above A12. No uniform scaling has been applied, so the coefficients are transcribed without transformation.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 1A | L1 | 0 | -9.44889e-6 | -2.78211e-9 | +1.38292e-11 | -1.87056e-14 | +7.67401e-18 |
| 2A | L1 | -6.82090e-1 | -2.16920e-6 | -9.17628e-9 | -2.33882e-10 | +8.26939e-13 | -1.85607e-15 |
| 6A | L3 | 0 | +2.29625e-5 | +1.76297e-8 | +4.18666e-10 | -2.45395e-12 | +6.29348e-15 |
| 28A | L16 | 0 | -2.17900e-5 | -7.22596e-9 | -1.48661e-10 | +1.85432e-12 | -3.03305e-15 |
| 29A | L16 | 0 | -1.07831e-5 | -3.03321e-9 | -5.03844e-11 | +1.22127e-12 | -1.50312e-15 |

The two front aspherical elements follow the patent's stated strategy for distortion and astigmatism correction in the strongly negative front section (¶¶0153–0154). The rear pair on L16 follows the patent's separate strategy of controlling astigmatism, coma, and angle-of-view variation in the moving second group (¶¶0169–0170). Canon's production interview likewise attributes its three GMo elements to sagittal-flare and peripheral point-image control.

Canon identifies the production aspheres as **GMo (glass-molded)** elements. The patent itself does not require Example 1 to be manufactured by that process; ¶0172 allows glass, plastic/organic, or bonded aspherical constructions in the broader disclosure. The production manufacturing statement is therefore external correlation evidence, not a property inferred solely from the Example 1 coefficient table.

The patent does not publish clear apertures for these surfaces. Because the LensVisualizer semi-diameters are inferred modeling values, no asphere-departure-at-rim figures are quoted as patent data.

## Chromatic Correction Strategy

The chromatic strategy spans the entire lens rather than being confined to one cemented achromat. Patent ¶¶0079–0089 and ¶¶0111–0122 explicitly separate two types of dispersion control: selected negative lenses with constrained short-wavelength partial dispersion, and positive members with high positive partial-dispersion deviation placed where axial ray height is favorable.

The production correlation adds three manufacturer-identified special materials. Canon states that its concave fluorite element suppresses lateral chromatic aberration toward the periphery; this aligns with data L5. Canon's optical cross-section places the single marketed UD element in the front portion, aligning most strongly with data L2. Canon's BR resin sits immediately behind the stop, aligning with data L11 and with the patent's high-`θgF` positive member in the post-stop triplet.

The four data elements carrying structured `dPgF` are:

- L9: `θgF = 0.5951`, derived SCHOTT-normal `dPgF = +0.00132268`.
- L11: `θgF = 0.7782`, derived SCHOTT-normal `dPgF = +0.16817456`.
- L12: `θgF = 0.5824`, derived SCHOTT-normal `dPgF = -0.00145352`.
- L14: `θgF = 0.5951`, derived SCHOTT-normal `dPgF = +0.00132268`.

These values support discussion of partial-dispersion behavior for those four elements. They do not supply full line-index dispersion curves, and they do not justify an APO label for the complete lens.

## Conditional Expressions

US 2025/0389929 A1 gives a broad set of design inequalities and explains their optical purposes in ¶¶0034–0131. Numerical Example 1 satisfies every applicable base condition. The evaluated values below come from the patent definitions and the independently checked Example 1 data; conditions (6), (7), (12), (14), and (15) apply to more than one listed lens where shown.

| No. | Patent condition | Example 1 value | Result |
|---:|---|---|---|
| 1 | `0.50 < f2/f < 3.00` | 1.96595 | Satisfied |
| 2 | `0.20 < sk/f < 1.20` | 0.970874 | Satisfied |
| 3 | `0.30 < f1/f2 < 3.00` | 1.28047 | Satisfied |
| 4 | `−1.50 < f/f3 < 1.50` | −0.251768 | Satisfied |
| 5 | `−1.50 < (R22−R21)/(R22+R21) < 1.50` | −0.292663 | Satisfied |
| 6 | `−0.015 < ΔθgFn < 0.015` | G9 −0.0046950; G12 −0.0025766; G14 −0.0046950 | Satisfied |
| 7 | `−0.20 < Ndn − (−0.0145425νdn + 2.28725) < 0.05` | G9 −0.0842861; G12 −0.1033053; G14 −0.0842861 | Satisfied |
| 8 | `0.50 < (1−β2²)β3² < 2.50` | 1.41675 | Satisfied |
| 9 | `0.00 < sk/|f3| < 0.80` | 0.244435 | Satisfied |
| 10 | `0.20 < ΣDair/(L−sk) < 0.70` | 0.385656 | Satisfied |
| 11 | `2.00 < L/f < 15.00` | 8.21775 | Satisfied |
| 12 | `60.00 < νd2p < 100.00` | G13 94.66; G15 81.65 | Satisfied |
| 13 | `−0.200 < M2/DSP < −0.005` | −0.0205606 | Satisfied |
| 14 | `60.00 < νd1n < 100.00` | G2 81.65; G5 95.10 | Satisfied |
| 15 | `0.050 < ΔθgFp < 0.250` | G11 0.144301 | Satisfied |
| 16 | `0.30 < (DSP+sk)/L < 0.80` | 0.530633 | Satisfied |
| 17 | `0.50 < f1/f < 5.00` | 2.51734 | Satisfied |

The patent gives narrower preferred ranges after the base expressions. The table above uses the principal published bounds because they state the design constraints without duplicating the full sequence of progressively narrowed alternatives. The source's Table 1 and Table 2 give rounded Example 1 values consistent with the independent evaluations.

## Verification and Modeling Boundaries

The final authored prescription reproduces the patent's first-order quantities without rescaling. Independent height/reduced-angle tracing and an ABCD composition agree, and the sequential infinity-state model gives:

- **EFL:** 14.4176265 mm, versus patent 14.42 mm.
- **BFL:** 13.9940664 mm, versus patent 14.00 mm.
- **Total track:** 118.500 mm, versus patent 118.50 mm.
- **G1 / patent L1 focal length:** +36.2812 mm, versus 36.30 mm.
- **G2 / patent L2 focal length:** +28.3504 mm, versus 28.349 mm.
- **G3 / patent L3 focal length:** −57.2743 mm, versus −57.275 mm.
- **Petzval sum:** +0.002927098 mm⁻¹, corresponding to a Petzval-radius magnitude of about 341.635 mm under the adopted sign convention.

The modeled aperture and semi-diameters are not source facts. The authored stop semi-diameter of **11.504 mm** differs from the paraxially inferred f/1.46 value by only about **0.000043 mm**. With the final modeled semi-diameters, the minimum computed element edge thickness is **0.07394 mm**, the maximum actual rim-slope angle is **59.91°**, the maximum shared-band cross-gap fraction is **0.84852** against the 0.90 limit, and the default 0.6-field exact meridional trace retains a minimum non-stop clear-aperture margin of **0.15949 mm** in both published focus states. These are validation results for the authored geometry, not dimensions published by Canon or the patent.

No plate, dummy plane, or filter has been removed from Numerical Example 1, because the example does not contain one. Patent ¶0175 explicitly notes that optical members corresponding to filters are excluded from the numerical-example optical length. The production lens's rear gelatin-filter holder is mechanical product hardware and does not create an additional refracting plane in this prescription.

## Sources and References

1. **US 2025/0389929 A1**, *Optical System and Imaging Apparatus Including Same*, Takahiro Saito / Canon Kabushiki Kaisha. Principal references: abstract; ¶¶0026–0178; Fig. 1; Numerical Example 1; Tables 1–2.
2. Canon U.S.A., **RF14mm F1.4 L VCM support specifications**: https://www.usa.canon.com/support/p/rf14mm-f1-4-l-vcm
3. Canon U.S.A., **launch release**, February 4, 2026: https://www.usa.canon.com/newsroom/2026/20260204-lenses
4. Canon Japan, **RF14mm F1.4 L VCM developer interview**, February 5, 2026: https://personal.canon.jp/articles/interview/developer-rf14-f14l-vcm
5. OHARA, **current optical-glass catalog**: https://www.ohara-inc.co.jp/en/product/01000/
6. HOYA, **Optical Glass catalog portal**: https://www.hoya-opticalworld.com/english/
7. SCHOTT, **Optical Glass technical data**: https://www.schott.com/en-gb/products/optical-glass/technical-details
8. Sumita Optical Glass, **glass/preform catalog**: https://www.sumita-opt.co.jp/en/products/preform.html

Catalog names are used as coordinate-compatible class/equivalent labels unless the source independently establishes material identity. The patent does not name glass vendors, and the production fluorite, UD, BR, and GMo identifications are kept separate from the patent's exact prescription quantities.
