## Patent Reference and Design Identification

**Patent:** CN 115840281 A\
**Application Number:** 202310131487.6\
**Filed:** 2023-02-17\
**Published:** 2023-03-24\
**Inventor:** 刘谌\
**Applicant:** 深圳市雷影光电科技有限公司\
**Title:** 超广角大光圈微距自动对焦镜头\
**Embodiment analyzed:** Example 4

The prescription is the Example 4 numerical embodiment of CN 115840281 A. The patent describes a five-functional-group, large-aperture autofocus lens in which a single negative group moves for focusing while the other functional groups remain fixed relative to the image plane (¶0014). The corpus identifies this embodiment with the **VILTROX AF 27mm f/1.2 PRO XF**. That correlation is fixed for this record, but neither the patent nor Viltrox explicitly states that “Example 4” is the production prescription.

The correlation rests on convergent source and computed evidence:

1. Example 4 contains **15 elements in 11 physical air-separated groups**, matching Viltrox's published 15-element/11-group construction for the XF lens.
2. The final data model computes an infinity-focus EFL of **27.7066449 mm**, consistent with the patent's 27.7 mm value and the marketed 27 mm focal length.
3. The patent's aberration plots are labeled **f/1.2**, matching the marketed maximum aperture.
4. The patent gives a **27.6° half-field** (55.2° full field), while Viltrox publishes a 55.3° viewing angle for the XF version.
5. Example 4 contains **one physical aspherical element, L54, with two aspherical surfaces**. Viltrox states that the production lens contains one aspherical element and identifies that element as Hoya glass.
6. The patent specifies internal focusing by translating the single negative G4/L41 group. Viltrox describes the production lens as an internal-focusing design.
7. The published near-focus state traces to a modeled object-to-authored-image distance of **281.516 mm** and a transverse magnification magnitude of **0.1454**, consistent with Viltrox's 0.28 m minimum shooting distance and 0.15× maximum magnification.
8. The patent publication predates Viltrox's 2023-08-24 article on the 27 mm f/1.2 XF.

The patent title uses the term `微距` for close-focus capability, whereas Viltrox's article explicitly describes the production lens as non-macro while publishing 0.28 m minimum focus and 0.15× magnification. This is a difference in terminology and product positioning, not a numerical prescription conflict.

## Optical Architecture

The lens is best described here as a **five-functional-group wide-angle prime**, rather than assigning it to a historical named archetype that the patent does not claim. From object to image, the patent gives the power sequence

`G1 negative → G2 positive → STO → G3 positive → G4 negative → G5 positive`.

The 15 physical elements form 11 air-separated groups. Four of those physical groups are cemented doublets: L21+L22, L23+L24, L26+L27, and L51+L52. The patent's G1–G5 notation is therefore a **functional power grouping**, not the same thing as the 11-group physical construction quoted for the production lens.

Computed from the final data arrays at infinity, the functional-group focal lengths are approximately **G1 −210.011 mm, G2 +702.309 mm, G3 +32.112 mm, G4 −36.096 mm, and G5 +31.096 mm**. These are in-situ group powers. They should not be obtained by adding or averaging the standalone focal lengths stored on individual elements.

G1 is a weak negative front group composed of an air-spaced positive/negative pair. G2 is a long, weakly positive functional group containing three cemented doublets plus one positive singleton. The aperture stop follows G2. Immediately behind the stop, the relatively strong positive G3 and negative G4 form a closely coupled power pair; G4 is the sole focusing group. G5 then supplies the final positive relay and field-forming power, ending in the two-sided aspherical L54.

The design has a negative front functional group, but under the project's geometric classification it is **not retrofocus**: the infinity Gaussian BFD/EFL ratio is **0.5883**, below the required `BFD > EFL` threshold. It is also not telephoto under the project's `TL/EFL < 1` definition; the active air-equivalent track/EFL ratio is **3.9013**.

No uniform scale is applied. The source GL plate immediately ahead of the image plane is a 2.8 mm, n=1.517 sensor-cover plate and is excluded from the active LensVisualizer prescription. Its optical effect is retained by replacing the source rear path with a documented **16.2747482 mm air-equivalent spacing** after surface 27A. The resulting active air-equivalent first-surface-to-image track is **108.0917482 mm**.

The patent does not publish clear semi-diameters or a physical stop diameter. The data file therefore treats all surface semi-diameters and the stop semi-diameter as modeling inferences. The stop semi-diameter is **13.0957725 mm**, calibrated by first-order pupil tracing so that the infinity state is exactly f/1.2. These inferred apertures are not patent-published dimensions.

## Element-by-Element Analysis

All focal lengths in the element headings below are **standalone thick-element focal lengths in air**, recomputed from each element's two vertex radii, center thickness, and stored index. They are distinct from cemented-doublet net power and from the element's behavior inside the complete optical train. Except where a patent paragraph is cited, the role descriptions are modeling interpretations of the final prescription rather than source claims.

### L11 — Positive Meniscus

**nd = 1.923, νd = 20.880. Glass: N-SF66 (catalog-equivalent spectral proxy; supplier unresolved). f = +87.781 mm.**

L11 is the positive member of the air-spaced G1 front pair. Its high refractive index permits substantial refraction without requiring extreme curvature, while its low Abbe number marks a strongly dispersive source coordinate. In the complete G1 pair, however, the following L12 is the stronger negative element, so the functional group remains net negative.

The catalog name is a spectral proxy, not a production-melt attribution.

### L12 — Negative Meniscus

**nd = 1.497, νd = 81.605. Glass: H-FK61 (catalog-equivalent spectral proxy; supplier unresolved). f = −57.502 mm.**

L12 supplies the dominant negative standalone power in G1. Its very high νd makes its source coordinate much less dispersive than L11's, so the air-spaced pair combines opposite powers with strongly different dispersion coordinates. The patent does not name L12 as an ED element, and the manufacturer statement that the production lens contains two ED elements cannot be mapped to a specific patent element from the available sources.

Together, L11 and L12 produce the computed G1 focal length of **−210.011 mm**.

### L21 — Biconcave Negative, D1 Front Member

**nd = 1.541, νd = 47.201. Glass: S-TIL2 (catalog-equivalent spectral proxy; supplier unresolved). f = −27.643 mm.**

L21 begins the first cemented pair in G2. Its standalone power is negative, but that number does not describe the complete D1 doublet because the rear surface is a glass-to-glass interface rather than an exit to air.

### L22 — Biconvex Positive, D1 Rear Member

**nd = 2.001, νd = 25.426. Glass: H-ZLaF90 (catalog-equivalent spectral proxy; supplier unresolved). f = +20.163 mm.**

L22 is the high-index positive partner of L21. The strong index step and shared cemented curvature make the D1 pair much weaker than either standalone element: the complete L21+L22 cemented group has a computed net focal length of **+64.896 mm**.

This is a useful example of why standalone element power, cemented net power, and in-situ group behavior must be kept separate.

### L23 — Positive Meniscus, D2 Front Member

**nd = 1.593, νd = 68.342. Glass: H-ZPK5 (catalog-equivalent spectral proxy; supplier unresolved). f = +40.101 mm.**

L23 is a relatively low-dispersion positive meniscus and the front member of the second cemented pair in G2. Its source coordinate contrasts strongly with the more dispersive negative L24 that follows it.

### L24 — Biconcave Negative, D2 Rear Member

**nd = 1.648, νd = 33.841. Glass: H-ZF1 (catalog-equivalent spectral proxy; supplier unresolved). f = −17.814 mm.**

L24 supplies stronger negative standalone power than L23 supplies positive power. Across the actual glass-to-glass interface, the complete L23+L24 cemented pair has a net focal length of **−32.429 mm**.

The positive/negative power split and the large νd difference provide chromatic-balancing leverage, but no APO designation follows from that observation.

### L25 — Biconvex Positive

**nd = 1.883, νd = 39.218. Glass: H-ZLaF68L (catalog-equivalent spectral proxy; supplier unresolved). f = +35.848 mm.**

L25 is the only air-spaced singleton inside G2. Its positive power lies between the second and third cemented pairs. The relatively high index permits this power to be carried with moderate curvatures and helps G2 remain only weakly positive as a complete functional group despite substantial positive and negative powers within it.

### L26 — Biconcave Negative, D3 Front Member

**nd = 1.847, νd = 23.785. Glass: H-ZF52 (catalog-equivalent spectral proxy; supplier unresolved). f = −14.483 mm.**

L26 is a strong negative element and the front member of the third cemented pair in G2. Its low νd makes it one of the more dispersive source coordinates in the prescription.

### L27 — Biconvex Positive, D3 Rear Member

**nd = 1.816, νd = 46.549. Glass: TAF5 (catalog-equivalent spectral proxy; supplier unresolved). f = +19.659 mm.**

L27 is the positive partner of L26. Although the two standalone focal lengths have opposite signs and similar magnitudes, the actual cemented L26+L27 pair is net negative, with a computed focal length of **−84.143 mm**. The result follows from the real refractive-index sequence and shared interface; it is not recoverable by simple arithmetic on the two standalone focal lengths.

### L31 — Biconvex Positive, G3

**nd = 1.911, νd = 35.250. Glass: TAFD35 (catalog-equivalent spectral proxy; supplier unresolved). f = +32.112 mm.**

L31 is both a physical singleton and the entire G3 functional group. It sits immediately behind the aperture stop and ahead of the moving negative G4 lens. The patent treats the G3/G4 power and dispersion relationship as a central design condition: G3 is fixed during focusing and is intended to offset chromatic effects associated with the moving G4 group (¶0020–0021).

### L41 — Biconcave Negative, G4 Focus Lens

**nd = 1.689, νd = 31.161. Glass: J-SF8 (catalog-equivalent spectral proxy; supplier unresolved). f = −36.096 mm.**

L41 is the complete G4 functional group and the only focusing element. The patent specifies that it moves imageward during focusing while G1, G2, G3, and G5 remain fixed relative to the image plane (¶0014).

Its negative focal length is close in magnitude to the positive G3 focal length, giving a computed `|F3/F4|` of **0.889635**, within the patent's required 0.7–1.5 range. The patent explicitly associates that balance with aberration control and compact aperture geometry (¶0015–0016).

### L51 — Biconvex Positive, D4 Front Member

**nd = 1.755, νd = 52.322. Glass: S-LAH97 (catalog-equivalent spectral proxy; supplier unresolved). f = +18.159 mm.**

L51 begins G5 with relatively strong positive standalone power. It is cemented directly to L52, whose standalone power is almost equal and opposite.

### L52 — Biconcave Negative, D4 Rear Member

**nd = 1.847, νd = 23.785. Glass: H-ZF52 (catalog-equivalent spectral proxy; supplier unresolved). f = −17.931 mm.**

L52 reuses the same source glass coordinate and catalog-equivalent dispersion anchor as L26. The L51+L52 cemented pair is nevertheless only weakly positive as a unit, with a computed net focal length of **+157.204 mm**. The pair therefore provides strong internal positive/negative refraction while contributing little net first-order power by itself.

### L53 — Biconvex Positive

**nd = 1.946, νd = 17.942. Glass: H-ZF88 (catalog-equivalent spectral proxy; supplier unresolved). f = +25.105 mm.**

L53 is a high-index, very low-νd positive element in the rear functional group. It provides substantial positive standalone power immediately ahead of the final aspherical element. The catalog curve supplies wavelength dependence without asserting patent-published partial dispersion.

### L54 — Negative Meniscus, Two Aspherical Surfaces

**nd = 1.822, νd = 42.715. Glass: M-TAFD51 (catalog-equivalent spectral proxy; supplier unresolved). f = −79.596 mm.**

L54 is the fifteenth and final lens element and is the only aspherical physical element in the patent embodiment. Both of its surfaces are aspherical. The manufacturer independently states that the production lens's single aspherical element is Hoya glass; the patent coordinate itself does not resolve uniquely to a current Hoya trade name. The model uses M-TAFD51 only as a coordinate-compatible spectral proxy; the production melt remains unresolved.

The patent places explicit radius constraints on L54 and states that satisfying them supports system compactness (¶0017). More detailed attribution of individual aberrations to L54 would be an optical interpretation rather than a direct patent statement.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. Catalog curves below are coordinate-compatible spectral proxies, not identifications of the production supplier or melt. The authored patent indices remain unchanged; no catalog-derived `nC`, `nF`, `ng`, or `dPgF` values are stored as if they were measured source data. The runtime compatibility guard checks the evaluated catalog index within ±0.003 and Abbe number within ±2.

| Element | Patent nd / νd | Runtime catalog curve |
| --- | --- | --- |
| L11 | 1.923 / 20.88 | N-SF66 |
| L12 | 1.497 / 81.605 | H-FK61 |
| L21 | 1.541 / 47.201 | S-TIL2 |
| L22 | 2.001 / 25.426 | H-ZLaF90 |
| L23 | 1.593 / 68.342 | H-ZPK5 |
| L24 | 1.648 / 33.841 | H-ZF1 |
| L25 | 1.883 / 39.218 | H-ZLaF68L |
| L26 | 1.847 / 23.785 | H-ZF52 |
| L27 | 1.816 / 46.549 | TAF5 |
| L31 | 1.911 / 35.25 | TAFD35 |
| L41 | 1.689 / 31.161 | J-SF8 |
| L51 | 1.755 / 52.322 | S-LAH97 |
| L52 | 1.847 / 23.785 | H-ZF52 |
| L53 | 1.946 / 17.942 | H-ZF88 |
| L54 | 1.822 / 42.715 | M-TAFD51 |

15/15 elements resolve to catalog dispersion. Explicitly unmatched elements retain the patent-derived Abbe fallback. No APO or patent-backed anomalous-partial-dispersion claim follows from the proxy assignments.

H-ZLaF90 and H-ZPK5 use the complete K1–L3 coefficient sets from the official CDGM [H-ZLaF90 datasheet](https://www.cdgmgd.com/webapp/pdf/H-ZLaF90.pdf) and [H-ZPK5 datasheet](https://www.cdgmgd.com/webapp/pdf/H-ZPK5.pdf), accessed 2026-09-10. M-TAFD51 is a compatible spectral proxy for L54; the manufacturer's Hoya statement does not establish that specific production glass.

## Focus Mechanism

The focus state is **PUBLISHED**, not reconstructed. The patent specifies that only G4/L41 moves and that it moves toward the image side during focusing; G1, G2, G3, and G5 remain fixed relative to the image plane (¶0014). Example 4's focus table gives the two adjacent air gaps as follows:

| Gap | Infinity | Nearest published state | Change |
|---|---:|---:|---:|
| D1, surface 18 | 0.940 mm | 6.030 mm | +5.090 mm |
| D2, surface 20 | 6.020 mm | 0.930 mm | −5.090 mm |

The sum D1+D2 remains **6.960 mm**, so L41 translates **5.09 mm imageward** without changing the total axial span between G3 and G5. This is a one-element internal-focus mechanism.

Viltrox describes the production XF lens as using internal focusing driven by an STM and lead-screw mechanism. The optical data model reproduces the published internal-group motion but does not model the motor or mechanical transmission.

The patent labels its nearest state `0.158 m`, but it does not define the reference plane for that number. The data file therefore preserves the value only in the focus description and uses Viltrox's sensor-referenced **0.28 m** minimum shooting distance for `closeFocusM`. No attempt is made to reinterpret 0.158 m as a first-surface or sensor-plane distance.

With the final active prescription, the computed EFL changes from **27.7066449 mm** at infinity to **28.6083781 mm** at the nearest published focus state, a 3.25% increase. The finite-conjugate solution gives **281.516 mm** from object to the authored image plane and `|m| = 0.14537`, providing an independent consistency check against the marketed 0.28 m and 0.15× specifications.

The physical stop diameter is not published. With the fixed inferred stop used in the data file, the paraxial f-number changes from exactly **f/1.2000** at infinity to **f/1.2391** at the nearest focus state as the EFL breathes. The patent's close-focus aberration plot remains labeled f/1.2; that label is treated as the nominal design aperture rather than evidence for a published variable stop.

## Aspherical Surfaces

L54 carries the only aspherical surfaces in Example 4. Source surfaces 26 and 27 are normalized to data labels **26A** and **27A**. No prescription scaling is applied, so the source radii and aspheric coefficients are used without dimensional rescaling.

The patent uses the standard rotationally symmetric conic form

$$
z(y)=\frac{(1/r)y^2}{1+\sqrt{1-(1+K)(y/r)^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+A_{12}y^{12}.
$$

Here `K` is already the conventional conic constant. Both Example 4 surfaces have **K = 0**, so the base conic is spherical and the polynomial terms supply the aspheric departure. No `κ`-to-`K` conversion is required.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 26A | 0 | −4.681E−05 | −1.994E−07 | +1.171E−09 | −3.720E−12 | +3.200E−15 |
| 27A | 0 | −4.079E−05 | −4.070E−08 | −3.876E−10 | +5.398E−12 | −1.781E−14 |

The patent publishes no aperture heights for these surfaces. The data-file semi-diameters are therefore modeled rather than source dimensions. At the validated modeled edges, the polynomial departure from the spherical base is **−2.627112 mm at 14.2 mm** on 26A and **−1.893779 mm at 14.0 mm** on 27A. These values describe the authored model edges only and must not be read as patent-published edge departures.

Viltrox states that the production lens uses one Hoya aspherical element, consistent with the one-element/two-surface asphere count in Example 4. The available manufacturer source does not identify a manufacturing process such as molding versus polishing, so no process is assigned here.

## Chromatic Correction Strategy

The patent explicitly links the fixed positive G3 and moving negative G4 groups through both power and dispersion conditions. Condition (5) combines `F3`, `F4`, `νd3`, and `νd4`, and the patent states that the fixed G3 group is intended to counter dispersion introduced by the focusing G4 group, with the remaining materials selected to reduce lateral chromatic aberration (¶0020–0021).

In Example 4, L31/G3 has `νd = 35.250` and L41/G4 has `νd = 31.161`, while their computed focal lengths are +32.112 mm and −36.096 mm. The resulting final-data value for condition (5) is **177592**, comfortably above the patent's lower limit of 4700.

G2 and G5 also contain several cemented positive/negative pairs with large differences in νd. That arrangement provides ordinary chromatic-balancing degrees of freedom, but the patent does not publish enough material identity to assign a specific ED or anomalous-dispersion role to each element. Viltrox's statement that the production lens contains two ED elements remains a product-level fact rather than an element mapping for this prescription.

Runtime catalog curves supply the modeled dispersion law; no surrogate line indices or partial-dispersion fields override them. Accordingly, no apochromatic designation is inferred from them.

## Conditional Expressions

CN 115840281 A places five explicit inequalities on the design (¶0015–0021). The final TypeScript arrays satisfy all five. The patent's Table 13 point values for conditions (4) and (5) do not reproduce exactly from the rounded three-decimal prescription, but the inequalities remain unambiguous.

| Condition | Patent requirement | Final-data computation | Patent Table 13, Example 4 | Status |
|---|---|---:|---:|---|
| (1) | `0.7 ≤ |F3/F4| ≤ 1.5` | 0.889635 | 0.89 | Satisfies |
| (2) | `1.2 ≤ R1/R2 ≤ 2` for L54 | 1.530349 | 1.53 | Satisfies |
| (3) | `R2 > 0` for L54 rear surface | +21.220 mm | +21.22 mm | Satisfies |
| (4) | `2.5 ≤ F234/FL ≤ 8.5` | 4.833805 | 4.92 | Satisfies |
| (5) | `|(F3·νd3·F4·νd4)/(F3·νd3+F4·νd4)| > 4700` | 177592.1 | 150960 | Satisfies |

Conditions (1) and (4) constrain how power is distributed among the central groups, while conditions (2) and (3) constrain the final aspherical element's vertex radii. Condition (5) couples focusing-group power to dispersion. The discrepancy between the recomputed and printed point values for (4) and (5) is retained as a source-precision effect; no patent value is silently altered.

## Verification Summary

The final data arrays have been independently evaluated with both a sequential reduced-angle (`y, ν = n·u`) trace and an ABCD matrix product. At infinity the two first-order implementations agree to **2.22×10⁻16** in maximum matrix-element difference; at the nearest focus state they agree to machine zero in the stored comparison.

Key computed first-order results are:

| Quantity | Infinity | Nearest published focus |
|---|---:|---:|
| EFL | 27.7066449 mm | 28.6083781 mm |
| Gaussian BFD from 27A vertex | 16.2993751 mm | 12.1158676 mm |
| Modeled f-number with fixed STO | 1.200000 | 1.239055 |

The active prescription's Petzval sum, evaluated surface by surface as `φ/(n·n′)`, is **+0.00276423195 mm⁻¹**, corresponding to a reciprocal magnitude of **361.764 mm**. This is a first-order curvature diagnostic, not a direct prediction of the final corrected field surface.

The modeled semi-diameters and stop are not patent dimensions. They were validated against positive element edge thickness, actual spherical/aspherical rim slope, conic-domain limits, shared-band cross-gap intrusion, and exact meridional containment at both defined focus states. The model retains real wide-open edge-field vignetting where ray envelopes exceed physically valid apertures rather than enlarging surfaces beyond the geometry limits.

There is no focus reconstruction, zoom model, folded path, filter, inactive dummy surface, or prescription scale factor. The only source-plane normalization is the documented omission of the sensor-cover plate and conversion of the final rear path to its air-equivalent spacing.

### Patent-figure SD review (2026-09-10 UTC)

Reviewed the local `patents/CN115840281A.pdf`, PDF page 33, Figure 4-1, at 600 dpi. The existing SDs were retained: direct optical-rim inspection did not establish a figure discrepancy large enough to override the ray-clearance and physical-geometry constraints. Labels, group brackets, and focus arrows were excluded from the comparison. All semi-diameters remain modeling inferences. Surface and image-circle audits were run for this prescription.

## Sources and References

1. **CN 115840281 A**, `超广角大光圈微距自动对焦镜头`, filed 2023-02-17, published 2023-03-24. Example 4 prescription and focus/asphere data: Tables 10–13; optical section and aberration plots: Figures 4-1 through 4-7; architecture and conditions: ¶0014–0021.
2. **Viltrox, AF 27mm F1.2 Pro APS-C Lens for Fujifilm X-Mount**, current product page: https://viltrox.com/products/viltrox-af-27mm-f-1-2-pro-xf-mount
3. **Viltrox, “Unleashing Creativity with the Viltrox 27mm F1.2 XF Lens,” 2023-08-24**: https://viltrox.com/blogs/insights/unleashing-creativity-with-the-viltrox-27mm-f1-2-xf-lens
4. **CDGM optical-glass catalog/database**, current catalog release used for L11–L53 dispersion-coordinate anchors: https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
5. **HOYA Optical World data downloads**, current catalog used for the L54 Hoya-family dispersion anchor: https://www.hoya-opticalworld.com/english/datadownload/index.html
