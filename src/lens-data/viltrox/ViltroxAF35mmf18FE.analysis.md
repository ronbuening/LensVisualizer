## Patent Reference and Design Identification

**Patent:** CN 211955963 U\
**Application Number:** 202020748872.7\
**Filed:** 2020-05-08\
**Granted / Published:** 2020-11-17\
**Inventors:** 刘瑞军; 陈宝锋\
**Assignee:** 深圳市雷影光电科技有限公司\
**Title:** 内合焦式成像镜头 (*Internal-focusing imaging lens*)\
**Embodiment analyzed:** Example 1

This prescription transcribes Example 1 of CN 211955963 U and is correlated to the legacy **VILTROX AF 35mm f/1.8 FE** for Sony E mount. The correlation is fixed for this record; it is a model identification based on convergent optical and product evidence, not a claim that Viltrox has published a patent-to-product cross-reference.

Several independent characteristics align. The production lens is a full-frame 35 mm f/1.8 autofocus prime, while Example 1 publishes a 34.5 mm focal length, 31.6° half-field, and aberration figures marked Fno 1.8. The prescription contains ten elements. When cemented pairs are counted as single physical assemblies between air spaces, the design contains eight air-separated groups, matching the production 10-element/8-group specification. The patent places aspheres on both faces of L23 and L31, giving two aspherical elements and four aspherical surfaces. The production specification likewise identifies two aspherical elements. The patent further uses a single moving internal-focus element, which is consistent with the production lens's internal-focusing description. The official Viltrox support page continues to list the legacy AF 35/1.8 FE separately from the later AF 35/1.8 EVO FE (APO), avoiding confusion between the 10/8 design analyzed here and the newer 13/10 successor.

Three source irregularities require explicit normalization. First, patent Fig. 1 places the aperture stop between L14 and L21, whereas Table 1 labels a later refracting row as `STP`. The model therefore uses the flat air row printed as surface 8 for `STO` and interprets the printed `STP` row as physical refracting surface 11. This placement also reproduces condition (1), `L1s/L = 0.443158207`, which rounds to the patent's 0.44. Second, both Table 1's asphere type tags and Table 3's coefficient-row labels identify surfaces 13–16, but the claims and ¶0083 explicitly assign both faces of L23 and both faces of L31 as aspheric. Once the stop-row error is corrected, those physical faces are surfaces 12–15. The model therefore treats the 13–16 table markings as the same +1 source-index error and maps the four coefficient sets to `12A`–`15A`. Third, paragraph ¶0091 states f/1.4, but the Example-1 aberration plots themselves are labeled Fno 1.8. The modeled f-number is therefore 1.8, consistent with the selected production lens.

The patent also inserts a 2.00 mm, nd = 1.52 parallel plate (`GL`) between L42 and the image plane and states that it may be replaced by air (¶0071). That plate is not part of the active LensVisualizer prescription. Its optical path is instead absorbed into an air-equivalent rear spacing of 24.435789474 mm from the L42 rear vertex to the modeled image plane.

No clear-aperture or semi-diameter table is published. The semi-diameters in the data file are therefore modeling quantities, not patent dimensions. They were constrained by the f/1.8 pupil geometry, the patent's 31.6° half-field, the optical-section proportions, and the current edge-thickness, rim-slope, cross-gap, and off-axis containment rules.

## Optical Architecture

The design is best described by the patent's own four-functional-group architecture rather than by forcing it into a classical named family. From object to image, the power sequence is **positive / positive / negative / positive**: G1, the aperture stop, G2, the moving G3 focus group, and fixed rear group G4 (CN 211955963 U ¶0057). The data file also records eight air-separated physical groups: L11; the cemented L12+L13 pair; L14; the cemented L21+L22 pair; L23; L31; L41; and L42.

The independently traced infinity prescription has an effective focal length of **34.545216929 mm**, compared with the patent's rounded 34.5 mm and the production marketing value of 35 mm. Its active first-vertex-to-L42-rear track is **67.38 mm**, giving `TL/EFL = 1.950487100`; under the project's strict definition this is not a telephoto layout. The Gaussian back focal distance from the L42 rear vertex is **23.883594338 mm**, less than the EFL, so the design likewise does not meet the project's `BFD > EFL` criterion for a retrofocus lens. With positive axial distance directed imageward, the front principal plane lies **33.007637702 mm** imageward of the first vertex and the rear principal plane lies **10.661622591 mm** objectward of the L42 rear vertex.

The four functional groups have independently recomputed prescription powers of:

| Functional group | Sign | Group EFL |
| --- | ---: | ---: |
| G1 | positive | +49.516949 mm |
| G2 | positive | +47.407746 mm |
| G3 | negative | -107.488959 mm |
| G4 | positive | +252.490141 mm |

These group values must not be confused with the standalone focal lengths of individual elements. They incorporate the surfaces and internal spacings of each functional group as an assembly.

The two cemented pairs illustrate that distinction particularly clearly. L12 is a strong negative element and L13 a strong positive element, yet their cemented combination has only a weak net negative power, equivalent to approximately **-383.825656 mm** focal length in air. L21 and L22 form a substantially stronger negative cemented pair with a net focal length of approximately **-25.489125 mm**. G2 is nevertheless positive as a complete group because the following L23 is a comparatively strong positive element.

The principal architectural economy is G3: the entire internal-focus function is assigned to the single negative, two-sided-aspheric L31. The patent explicitly presents this as a means of reducing the moving mass and motor load while retaining correction through focus (¶0024, ¶0065). G1, G2, and G4 remain fixed relative to the image plane while L31 moves toward image space during close focusing.

## Element-by-Element Analysis

The focal lengths stated at the start of each subsection are the data file's **standalone element-in-air** values. They describe the isolated element, not its cemented assembly or its in-situ functional group.

### L11 — Negative Meniscus

**nd = 1.49, νd = 70.42. Glass: N-FK5 (catalog-equivalent spectral proxy; supplier unresolved). f = -51.569159 mm.**

L11 is the first negative member of G1. Its weakly curved object face and strongly curved image face form a negative meniscus that begins the angular redistribution before the more powerful central members of G1. Although its Abbe number is high, the source pair is only specified to two decimal places and does not support a unique vendor-melt identification.

In group terms, L11 should not be read as implying that G1 is negative. The following cemented pair and L14 reverse the net sign, and the independently traced G1 assembly is positive at +49.516949 mm EFL.

### L12 — Biconcave Negative, cemented with L13

**nd = 1.85, νd = 22.73. Glass: Unmatched (nd 1.85, vd 22.73 high-index flint class). f = -19.218309 mm.**

L12 is the strong negative member of the first cemented pair. Its low νd marks it as a highly dispersive component, but the source coordinate does not round-trip convincingly to a unique public catalog glass. The data therefore retains an explicit `Unmatched` class annotation rather than assigning a speculative melt.

At its rear surface L12 is cemented directly to L13; there is no synthetic cement layer in the model. The interface is owned by the downstream L13 medium, as required by the data schema.

### L13 — Biconvex Positive, cemented with L12

**nd = 1.83, νd = 37.22. Glass: Unmatched (nd 1.83, vd 37.22 high-index lanthanum/flint class). f = +23.061403 mm.**

L13 supplies the positive counterpart to L12. The two powers nearly cancel when treated as a cemented assembly: the pair's net focal length is approximately -383.825656 mm rather than either element's much shorter standalone value. This makes the doublet primarily a correction-bearing component inside G1 rather than the dominant source of the group's positive power.

L13's high refractive index allows substantial surface power without requiring extreme curvature on both faces. Its glass annotation remains class-level because the two-decimal patent coordinate is not sufficiently specific for a defensible vendor assignment.

### L14 — Biconvex Positive

**nd = 1.85, νd = 23.78. Glass: Dense-flint class (nd 1.85, vd 23.78; vendor unresolved). f = +34.271775 mm.**

L14 is the final positive element of G1 and sits immediately in front of the corrected aperture-stop position. It carries substantial positive standalone power and therefore contributes strongly to the transition from the mixed-sign front elements to the net-positive G1 assembly.

Its placement relative to the stop is important to the patent's first conditional expression. The corrected stop station gives `L1s/L = 0.443158207`, within the claimed 0.3–0.5 range. The patent associates this interval with maintaining a useful balance between front- and rear-group diameters and off-axis correction (¶0059–¶0061).

### L21 — Biconcave Negative, cemented with L22

**nd = 1.70, νd = 30.05. Glass: E-FD15 (catalog-equivalent spectral proxy; supplier unresolved). f = -15.030855 mm.**

L21 begins G2 immediately after the stop and is the strongest negative standalone element in the prescription. It is cemented to L22, producing a strongly negative achromatizing subassembly before the positive aspheric L23.

The L21+L22 pair has a net focal length of approximately -25.489125 mm. The full G2 assembly nevertheless becomes positive because L23 contributes +21.366331 mm standalone power after the doublet.

### L22 — Biconvex Positive, cemented with L21

**nd = 1.50, νd = 81.59. Glass: J-FK01A (catalog-equivalent spectral proxy; supplier unresolved). f = +37.804715 mm.**

L22 is the low-dispersion positive member of the second cemented pair. Its very high νd contrasts sharply with L21's νd = 30.05 and establishes a strong dispersion differential inside the pair. This is a source-supported chromatic design fact at the Abbe-number level; it does not establish apochromatic behavior or a unique ED glass family.

The production specification describes two ED elements. L22 is one of the two high-Abbe coordinates in the selected prescription, but the data does not claim a manufacturer-confirmed element-to-ED-material mapping beyond the low-dispersion class annotation.

### L23 — Biconvex Positive, two-sided asphere

**nd = 1.81, νd = 41.01. Glass: K-VC89 (catalog-equivalent spectral proxy; supplier unresolved). f = +21.366331 mm.**

L23 completes G2 and changes the subassembly from the negative L21+L22 cemented-pair power to the net-positive G2 power of +47.407746 mm EFL. Both of its surfaces, `12A` and `13A`, are modeled as aspheric in accordance with the patent's explicit statement that both faces of L23 are aspheres (¶0083).

The element sits directly ahead of the moving focus element. Its two aspheric surfaces therefore provide a fixed correction stage immediately before the geometry changes introduced by G3 motion. The patent attributes the aspheric strategy to maintaining field and off-axis correction through focus, but it does not publish a separate aberration budget assigning a unique correction term to L23 alone.

### L31 — Negative Meniscus, two-sided asphere, moving focus group

**nd = 1.69, νd = 53.15. Glass: K-VC80-M (catalog-equivalent spectral proxy; supplier unresolved). f = -107.488959 mm.**

L31 is the entire G3 functional group and the only element that moves during focusing. Its two modeled aspheric surfaces are `14A` and `15A`. The element has relatively weak negative standalone power, but its location between strong positive G2 and weak positive G4 makes a 4.92 mm axial translation sufficient to change the system conjugate from infinity to the patent's nearest-focus row.

The patent emphasizes the mechanical significance of this arrangement: focusing can be performed by moving only one lens element, reducing moving mass while using a glass asphere to help maintain correction during the motion (¶0024, ¶0065). The data file preserves the published motion rather than reconstructing an unreported focus path.

### L41 — Biconvex Positive

**nd = 1.49, νd = 81.59. Glass: Unmatched (ED-class 1.49/81.59; common 497816 family differs by delta-n about +0.007). f = +50.452742 mm.**

L41 is a weak positive, high-Abbe member of fixed rear group G4. The patent describes this rear positive element as an ultra-low-dispersion component used with the negative L42 to further correct residual color (¶0024). At the level of the printed prescription, the very high νd supports the low-dispersion characterization.

The exact source pair is unusual. Common public 497816-family low-dispersion glasses lie near nd ≈ 1.497 rather than the printed 1.49, while the same patent prints L22 as 1.50/81.59. Because the source is internally ambiguous, the data deliberately preserves **nd = 1.49** and does not silently replace it with a more familiar catalog coordinate.

### L42 — Negative Meniscus

**nd = 1.65, νd = 33.65. Glass: H-ZF1 (catalog-equivalent spectral proxy; supplier unresolved). f = -60.447356 mm.**

L42 is the final refractive element and the negative partner to L41 in G4. Its lower νd creates the large dispersion separation used by patent condition (5): `νd(L41) - νd(L42) = 47.94`.

The pair does not behave like a strongly powered rear relay. The complete G4 group has only +252.490141 mm EFL, so its role is comparatively weak in first-order power while remaining important to rear-group chromatic and field correction. The active data prescription ends at L42's rear surface; the patent's following GL plate is omitted and replaced by the air-equivalent image spacing described above.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. Catalog curves below are coordinate-compatible spectral proxies, not identifications of the production supplier or melt. The authored patent indices remain unchanged; no catalog-derived `nC`, `nF`, `ng`, or `dPgF` values are stored as if they were measured source data. The runtime compatibility guard checks the evaluated catalog index within ±0.003 and Abbe number within ±2.

| Element | Patent nd / νd | Runtime catalog curve |
| --- | --- | --- |
| L11 | 1.49 / 70.42 | N-FK5 |
| L12 | 1.85 / 22.73 | Unmatched; patent Abbe fallback |
| L13 | 1.83 / 37.22 | Unmatched; patent Abbe fallback |
| L14 | 1.85 / 23.78 | Unmatched; patent Abbe fallback |
| L21 | 1.7 / 30.05 | E-FD15 |
| L22 | 1.5 / 81.59 | J-FK01A |
| L23 | 1.81 / 41.01 | K-VC89 |
| L31 | 1.69 / 53.15 | K-VC80-M |
| L41 | 1.49 / 81.59 | Unmatched; patent Abbe fallback |
| L42 | 1.65 / 33.65 | H-ZF1 |

6/10 elements resolve to catalog dispersion. Explicitly unmatched elements retain the patent-derived Abbe fallback. No APO or patent-backed anomalous-partial-dispersion claim follows from the proxy assignments.

## Focus Mechanism

The focus model is **PUBLISHED**, not reconstructed. CN 211955963 U states that G3 alone moves toward image space while G1, G2, and G4 remain fixed relative to the image plane (¶0057, ¶0065). Example 1 publishes the two variable air spaces at both infinity and its nearest-focus row:

| Focus state | D1 after `13A` | D2 after `15A` | D1 + D2 |
| --- | ---: | ---: | ---: |
| Infinity | 1.00 mm | 8.69 mm | 9.69 mm |
| Patent nearest row | 5.92 mm | 3.77 mm | 9.69 mm |

The constant 9.69 mm sum shows that the surrounding fixed groups do not move: L31 simply translates **4.92 mm imageward**. The independently traced EFL changes from **34.545216929 mm** at infinity to **32.931776271 mm** at the patent nearest-focus state. This is focus breathing in the first-order optical sense, not a change in the marketed 35 mm product designation.

The patent labels the nearest row as 0.3 m. A paraxial conjugate solve through the patent's original GL/image-plane stack places that row at approximately 295.575 mm from the first lens vertex, consistent with the rounded source label, with transverse magnification **-0.111971808** (`|m| ≈ 0.112×`). The production lens is marketed with a 0.4 m minimum focus distance and 0.1× maximum magnification. The data therefore uses `closeFocusM: 0.3` so that the modeled endpoint remains the actual patent state, while retaining the production values only as marketing context.

## Aspherical Surfaces

Example 1 uses four aspheric surfaces: both faces of L23 and both faces of L31. In the corrected data labels these are `12A`, `13A`, `14A`, and `15A`. The patent's equation is the standard even-order rotationally symmetric form:

$$
z = \frac{(1/R)h^2}{1+\sqrt{1-(1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}.
$$

The patent therefore uses the standard conic constant convention in which **K = 0 is a spherical base**. No Fujifilm-style κ-to-K conversion is required. Example 1 tabulates K = 0 for every asphere and gives nonzero coefficients through A10. The data stores unreported higher terms as zero.

| Data surface | Patent coefficient row | K | A4 | A6 | A8 | A10 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| `12A` | 13 | 0 | -7.55e-6 | +3.58e-9 | -1.28e-11 | +1.11e-13 |
| `13A` | 14 | 0 | +1.05e-5 | -5.18e-9 | -2.37e-11 | +3.64e-14 |
| `14A` | 15 | 0 | +9.27e-5 | -5.08e-7 | +1.65e-9 | -2.56e-12 |
| `15A` | 16 | 0 | +1.03e-4 | -4.96e-7 | +1.57e-9 | -2.41e-12 |

The two L23 surfaces have comparatively modest polynomial departures at the modeled clear apertures, while the moving L31 surfaces carry much larger positive departures. Because the patent does not publish semi-diameters, these departure values are valid only at the **modeled** semi-diameters used by LensVisualizer:

| Surface | Modeled semi-diameter | Departure from K=0 base sphere |
| --- | ---: | ---: |
| `12A` | 14.8 mm | -0.298111616 mm |
| `13A` | 14.8 mm | +0.413134283 mm |
| `14A` | 15.5 mm | +1.754167873 mm |
| `15A` | 15.5 mm | +2.368625745 mm |

The patent specifically associates the moving aspheric focus element with maintaining field flatness and balancing off-axis aberrations through focusing (¶0024). That statement supports the functional interpretation of L31, but it does not justify assigning a quantitative aberration contribution to any one coefficient or surface.

## Chromatic Correction Strategy

Chromatic correction is distributed across both the central cemented pair and the rear group. L21/L22 combines a νd = 30.05 negative element with a νd = 81.59 positive element. Farther back, L41/L42 combines νd = 81.59 and 33.65. The patent explicitly identifies the rear high-Abbe positive element and stronger negative element as a means of correcting residual color from the preceding groups (¶0024).

This is a conventional high-/low-dispersion balancing strategy at the Abbe-number level. It is not sufficient evidence for secondary-spectrum or apochromatic claims because the prescription contains no element-specific C-, F-, or g-line indices and no `dPgF`. The glass choices are therefore discussed as low-dispersion, dense-flint, lanthanum, or unmatched classes only to the extent supported by the stored source coordinates.

The Petzval sum of the active infinity prescription, computed surface by surface as `φ/(n·n′)`, is **+0.003278932637 mm⁻¹**. This is a first-order field-curvature scale rather than a direct prediction of the final corrected image surface; the patent's aspheric and higher-order correction cannot be inferred from the Petzval sum alone.

## Conditional Expressions

The patent defines five design conditions. Recalculation from the corrected Example-1 prescription reproduces four of the intended ranges directly and exposes an internal contradiction in condition (4).

| Condition | Claimed range | Recomputed Example-1 value | Assessment |
| --- | --- | ---: | --- |
| (1) `L1s/L` | 0.3–0.5 | 0.443158207 | within range |
| (2) `(Cvob2 - Cvim3)/φ` | 3–4 | 3.179957567 | within range |
| (3) `F4/F` | 6–13 | 7.318554819 | within range |
| (4) `BFL/F`, literal L42-rear-to-IMG distance | 0.6–0.7 | 0.728115942 | outside range |
| (5) `νd4a - νd4b` | 30–50 | 47.940000000 | within range |

Condition (4) is not repaired by altering the prescription. The patent literally defines BFL as the axial distance from the L42 rear surface to IMG; with the printed 22.12 mm air gap, 2.00 mm GL plate, and 1.00 mm final air gap, that distance is 25.12 mm and `BFL/F = 0.728115942`. After omitting GL, the model preserves the source image-plane translation with the air-equivalent 24.435789474 mm rear spacing, which gives **0.708283753** against the patent's 34.5 mm focal length and is still outside the stated interval. Only the system's **Gaussian** BFL divided by computed EFL gives **0.691371960**, which falls inside the interval but does not match the patent's literal axial-distance definition. The source's final summary table is also inconsistent with the Example-1 prescription: it prints 0.65 for condition (2), 6.81 for condition (3), 1.73 for condition (4), and 47.75 for condition (5). Those summary values are not substituted into the model.

## Verification Summary

The final data file contains 19 listed surfaces including exactly one `STO`, ten refractive elements, two cemented pairs, and four aspheric surfaces. The GL plate is excluded from the active prescription and its optical path is represented by the air-equivalent rear spacing. No scaling is applied; all radii, thicknesses, and aspheric coefficients remain at the patent's native dimensional scale.

Independent reduced-angle sequential tracing and a separate ABCD/basis-ray matrix calculation agree to numerical precision. At infinity the model gives EFL = **34.545216929 mm**, Gaussian BFL = **23.883594338 mm**, and f-number = **1.800000000** from the modeled entrance pupil. At the published nearest-focus state the EFL becomes **32.931776271 mm**. The G3 travel is **4.92 mm**, exactly matching the D1/D2 spacing change.

The inferred semi-diameters were checked at both focus endpoints. The smallest modeled element edge thickness is **0.273904920 mm** at L13. The maximum modeled rim-slope angle is **38.980541°** at surface 10. The tightest cross-gap margin is **0.068079224 mm** at the S2/S3 boundary under the current 90% gap-sag rule. Exact-meridional aperture checks at the default off-axis field of 18.96° show the extreme negative pupil seed clipping first at exposed surface 2, while the other default seeds remain contained; no tested ray first clips at either cemented junction. At the full 31.6° half-field, the extreme seeds are vignetted at exposed outer surfaces rather than within a cemented pair. These results establish internal consistency of the modeled apertures; they are not manufacturer dimensions.

The production specification and the patent model remain deliberately separate where their reference conditions differ. The catalog identity is 35 mm f/1.8 with a marketed 0.4 m MFD, whereas the numerical prescription is a 34.545 mm infinity design whose published close-focus row is labeled 0.3 m. The analysis preserves both without forcing one set of values to replace the other.

### Patent-figure SD review (2026-09-10 UTC)

Reviewed the local `patents/CN211955963U.pdf`, PDF page 17, Figure 1, at 600 dpi. The existing SDs were retained: direct optical-rim inspection did not establish a figure discrepancy large enough to override the ray-clearance and physical-geometry constraints. Labels, group brackets, and focus arrows were excluded from the comparison. All semi-diameters remain modeling inferences. Surface and image-circle audits were run for this prescription.

## Sources / References

1. **CN 211955963 U**, *内合焦式成像镜头*, Example 1. Filed 2020-05-08; granted/published 2020-11-17. Prescription Tables 1–3; focus Table 2; Fig. 1; ¶0024, ¶0057–¶0071, ¶0073–¶0091.
2. **Viltrox official support — AF 35/1.8 FE:** https://viltrox.com/pages/af-35-1-8-fe
3. **Viltrox Taiwan official legacy product page — AF 35/1.8 FE:** https://www.viltrox.com.tw/product/viltrox-50mm-f1-8-fe-e-mount-lnvt3518fe/
4. **Viltrox official AF 35mm F1.8 FE manual:** https://cdn.shopify.com/s/files/1/0104/0380/7298/files/AF_35mm_F1.8_FE_Manual.pdf?v=1710126982
5. **SCHOTT optical-glass catalog:** https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d
6. **OHARA optical-glass catalog:** https://oharacorp.com/glass-type/
7. **HOYA optical-glass technical data:** https://www.hoya-opticalworld.com/english/technical/001.html
8. **HIKARI optical-glass catalog:** https://www.hikari-g.co.jp/optical_glass/
9. **CDGM optical-glass database:** https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=18&url=database
10. **SUMITA optical-glass data downloads:** https://www.sumita-opt.co.jp/en/download/
