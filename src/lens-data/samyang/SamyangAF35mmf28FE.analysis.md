## Patent Reference and Design Identification

**Patent:** KR 10-2127451 B1\
**Application Number:** KR 10-2018-0065114\
**Filed:** 2018-06-05\
**Granted:** 2020-06-22\
**Published:** 2020-06-26\
**Inventor:** Moon-Kyung Kim\
**Assignee:** Samyang Optics Co., Ltd.\
**Title:** 내부 초점 방식 렌즈계 및 이를 포함한 촬영 장치 (translated: “Internal-focusing lens system and photographing apparatus including the same”)\
**Embodiment analyzed:** Example 4

This prescription is the selected correlation for the **SAMYANG AF 35mm f/2.8 FE**. The Korean grant does not identify Example 4 by retail product name, so the production correlation is an author inference rather than a manufacturer or patent statement. The analysis nevertheless treats the user-selected patent and embodiment as fixed; no sibling example is substituted.

The correlation rests on several convergent points:

1. Samyang specifies the production lens as a 35 mm f/2.8 autofocus prime for full-frame Sony E mount, while Example 4 is a 35.18 mm, F2.90 design. The final modeled prescription gives an infinity EFL of 35.182840213 mm and uses the patent design aperture F/2.899, keeping those design values separate from the marketed 35 mm and f/2.8.
2. The production lens is specified as **7 elements in 6 groups**. Example 4 contains the same seven elements and six air-separated optical groups.
3. Samyang specifies **two aspherical lenses**. Example 4 likewise places aspheric surfaces on two physical elements: L2 has surface 3A, while L7 has surfaces 13A and 14A. Thus three aspherical surfaces occur on two aspherical elements.
4. Samyang specifies a 0.35 m minimum focusing distance and 0.12× maximum magnification. The patent close state gives a magnification of 0.123. Although its column heading says `TL=0.3m`, the published D0 plus OAL equals 348.5219835 mm, consistent with approximately 0.35 m measured from image sensor to object.
5. Samyang's instruction manual explicitly describes the production lens as an **inner-focus** design. Example 4 focuses by translating the two-element G2 group while G1 and G3 remain fixed.
6. Samyang announced the AF 35mm F2.8 FE on 2017-06-05 and stated global availability from July 2017. The patent application followed on 2018-06-05, so the filing chronology is compatible with a post-release patent filing for the same optical concept.

Samyang also markets one HR element in the production lens. No HR designation is assigned to an individual element here because the patent's refractive-index coordinates are internally mixed and the final data file deliberately avoids an unsupported vendor/material identity.

The patent's rendered Example 4 optical section is Figure 7. Paragraph ¶0113 calls it Figure 9, but Figure 9 is the later camera-system schematic; that figure reference is treated as a source typo, not silently propagated.

## Optical Architecture

Example 4 is a compact, rectilinear, three-functional-group inner-focus prime. Its seven elements form six air-separated optical groups: L1 / L2 / L3 / L4 / cemented L5+L6 / L7. The patent then organizes those physical groups into three functional groups:

- **G1:** fixed front group, L1+L2, with the aperture stop immediately behind it.
- **G2:** translating two-element focusing group, L3+L4.
- **G3:** fixed rear group, cemented L5+L6 followed by L7.

Independent first-order matrices from the final data file give the following functional-group powers at infinity, using each functional group between in-air boundaries:

| Functional group | Power (mm⁻¹) | Standalone group EFL (mm) | Sign |
|---|---:|---:|---|
| G1 | +0.038561460 | +25.932628 | Positive |
| G2 | −0.030354919 | −32.943590 | Negative |
| G3 | +0.020250513 | +49.381466 | Positive |

These computed signs matter because patent ¶0059 describes G14, G24, and G34 as negative. The Example 4 numerical prescription instead gives **positive / negative / positive**. The numerical prescription governs the model and this analysis; the contradictory prose remains documented as a patent source error.

The principal architectural choice is the small moving G2 group. The patent repeatedly emphasizes internal focusing with fixed outer groups (¶0051, ¶0074, ¶0124). Placing the focusing group close to the stop reduces the required clear diameter of the moving optics and therefore reduces the mass that the autofocus actuator must move (¶0073–¶0074). In the modeled infinity state, G2 is itself negative despite containing one negative and one weak positive element.

The aperture stop is explicitly published as surface 5 and is normalized to the single LensVisualizer label `STO`. Its axial placement is a source fact; its semi-diameter is not. The authored `STO.sd = 6.073525663 mm` is a modeling inference back-solved from the verified infinity prescription and F/2.899, not a patent aperture dimension.

The patent calls this family “telephoto type” because its effective focal length is longer than its back focal distance (¶0052). The verified Example 4 Gaussian BFD is 19.510224994 mm and its EFL is 35.182840213 mm. Under the project's stricter full-track terminology, however, the first-vertex-to-Gaussian-image track is 46.648832044 mm, giving track/EFL = 1.325897; this analysis therefore does not use **telephoto** as the LensVisualizer architectural label. It is also not **retrofocus**, because BFD/EFL = 0.554538 and thus BFD is not greater than EFL.

The patent's plane-parallel Filter at source surfaces 15–16 is omitted from the ordinary lens stack. The final data file instead uses the patent's filter-absent infinity `in Air` value, 19.70032771 mm, as the rear air spacing after surface 14A. This preserves the source's stated plate-omitted distance without adding a synthetic cover plate. The patent's OAL, `in Air`, and independently derived Gaussian image plane do not completely reconcile, so no additional hidden correction is introduced.

## Element-by-Element Analysis

The focal lengths below are **standalone element focal lengths in air**, recomputed from each element's authored radii, thickness, and stored refractive index. They are not in-situ effective focal lengths of the complete lens.

### L1 — Negative Meniscus, Fixed Front Element

**nd = 1.73432, νd = 28.32. Glass: Unmatched (728283-728285 class; mixed e-line-like n / d-line νd). f = −40.101460 mm.**

L1 is the front member of fixed G1. Patent ¶0060 describes L14 as a negative meniscus convex toward the image side. Its standalone negative power establishes a divergent front contribution before the much stronger positive L2. The combined G1 matrix is nevertheless positive, so L1 should not be interpreted as defining the sign of the complete front functional group.

The patent's design rationale places a negative first element at the front of the wide-angle system (¶0053). In the complete prescription, that negative contribution is balanced immediately by L2 and by the stop position behind L2.

### L2 — Biconvex Positive with One Aspherical Surface

**nd = 1.77641, νd = 49.70. Glass: Unmatched (773496 class; mixed e-line-like n / d-line νd). f = +16.606041 mm.**

L2 is the strong positive member of fixed G1. Its object-side surface, 3A, is aspherical; the rear surface is spherical. The strong standalone positive power of L2 outweighs L1 within G1, producing the computed positive G1 power of +0.038561460 mm⁻¹.

The patent states that an asphere near the aperture stop can be used to correct spherical aberration and coma (¶0080). Surface 3A occupies exactly that location in Example 4, immediately in front of the stop-side air space. That patent statement supports the correction role; the data file does not attempt to apportion a numeric aberration budget to this surface.

### L3 — Negative Meniscus, First Focus-Group Element

**nd = 1.62408, νd = 36.30. Glass: Unmatched (620363-620364 class; mixed e-line-like n / d-line νd). f = −22.623692 mm.**

L3 is the first member of translating G2. Its standalone power is negative and substantially stronger in magnitude than the positive standalone power of L4. The pair therefore remains net negative in its in-air functional-group matrix.

The patent places the focusing group close to the stop to control its diameter and moving mass (¶0073–¶0074). L3's front surface is only weakly curved, while its rear surface is much stronger; the resulting negative element is part of a focus group designed to move as a rigid two-element unit rather than as an independently floating element.

### L4 — Positive Meniscus, Second Focus-Group Element

**nd = 1.93323, νd = 20.88. Glass: Unmatched (923209 class; mixed e-line-like n / d-line νd). f = +71.203757 mm.**

L4 is the second element of G2. Its standalone positive power is comparatively weak, so the L3+L4 focus group remains net negative. The two lenses translate together; no independent L3/L4 spacing change is published or modeled.

Patent ¶0078 describes the two focus-group glasses as a dispersion pair intended to help restrain chromatic change during focusing. The final data preserves the published Abbe values, but no element-level line indices or anomalous-partial-dispersion data are available. Accordingly, this analysis records the patent's intended chromatic role without claiming apochromatic or anomalous-dispersion behavior.

### L5 — Biconvex Positive, Front Member of Cemented Doublet J1

**nd = 1.83945, νd = 42.72. Glass: Unmatched (835427-835431 class; mixed e-line-like n / d-line νd). f = +9.779848 mm.**

L5 is the strong positive component of the cemented L5+L6 pair in fixed G3. Its standalone power is +0.102251075 mm⁻¹, the largest positive standalone element power in the modeled prescription.

At surface 11, L5 is cemented directly to L6. In the data model that cemented interface correctly carries the downstream L6 index and `elemId`; there is no synthetic cement layer.

### L6 — Biconcave Negative, Rear Member of Cemented Doublet J1

**nd = 1.65222, νd = 33.84. Glass: Unmatched (648337-648339 class; mixed e-line-like n / d-line νd). f = −12.712037 mm.**

L6 is the negative partner of L5. The individual powers must not be confused with the power of the cemented pair: L5 alone is strongly positive, L6 alone is negative, while the **cemented L5+L6 combination is net positive**, with computed power +0.030816744 mm⁻¹ and standalone cemented-group EFL +32.449891 mm.

Patent ¶0054 explicitly assigns the cemented pair a chromatic-correction role. That source statement is retained, but the lack of validated spectral-line data prevents a stronger claim about secondary-spectrum correction. When L7 and the following spacing are included, the complete functional G3 remains positive at +0.020250513 mm⁻¹.

### L7 — Negative Meniscus with Two Aspherical Surfaces

**nd = 1.69385, νd = 31.19. Glass: Unmatched (689311-689313 class; mixed e-line-like n / d-line νd). f = −86.873115 mm.**

L7 is the final physical element and is fixed during focusing. Patent ¶0060 describes it as a meniscus convex toward the image side. Its standalone negative power is weak relative to the preceding positive cemented doublet, so the complete G3 remains net positive.

The patent assigns L7 a field-flattening role (¶0054) and places the rear-most aspheric element near the image side to improve astigmatism and distortion control (¶0079). Both surfaces, 13A and 14A, are aspherical in Example 4. Paragraph ¶0065 also explains the image-side convex form as a way to spread light reflected from sensor-side cover glass and thereby reduce a potential ghost path. These are patent-stated design intentions; the analysis does not infer a measured flare or field-curvature performance value from them.

## Glass Identification and Selection

The final data file deliberately does **not** assign vendor catalog glasses. Patent Table 10 labels its index column `nd`, yet the seven index values systematically resemble e-line indices while the accompanying Abbe values resemble d-line `νd`. Using `indexReference: "e"` would therefore be equally misleading because the source does not provide corresponding `νe` values. The raw source pairs are retained exactly for prescription fidelity and EFL reproduction, while the `glass` fields use explicit `Unmatched (...)` class annotations.

| Element | Stored `nd` slot | Stored νd | Data-file glass annotation |
|---|---:|---:|---|
| L1 | 1.73432 | 28.32 | Unmatched (728283-728285 class; mixed e-line-like n / d-line νd) |
| L2 | 1.77641 | 49.70 | Unmatched (773496 class; mixed e-line-like n / d-line νd) |
| L3 | 1.62408 | 36.30 | Unmatched (620363-620364 class; mixed e-line-like n / d-line νd) |
| L4 | 1.93323 | 20.88 | Unmatched (923209 class; mixed e-line-like n / d-line νd) |
| L5 | 1.83945 | 42.72 | Unmatched (835427-835431 class; mixed e-line-like n / d-line νd) |
| L6 | 1.65222 | 33.84 | Unmatched (648337-648339 class; mixed e-line-like n / d-line νd) |
| L7 | 1.69385 | 31.19 | Unmatched (689311-689313 class; mixed e-line-like n / d-line νd) |

These six-digit-style class annotations are descriptive class ranges, not supplier identifications and not Sellmeier-resolved materials. An independent catalog-coordinate check supports the mixed-coordinate diagnosis rather than a vendor assignment. Representative class anchors include HOYA E-FD10L (728283), OHARA S-LAH66 (773496), HOYA E-F2 (620363), SCHOTT N-SF66 (923209), CDGM H-ZLaF55D (835427), CDGM H-ZF1 (648338), and HIKARI J-SF8 (689312). Across those seven anchors, the stored source index differs from catalog `ne` by no more than 0.000303, while its difference from catalog `nd` is 0.00391–0.01037; the stored Abbe value differs from catalog `νd` by no more than 0.10. The pattern is therefore much more consistent with e-line-like index values paired with d-line Abbe values than with a coherent d-line or e-line coordinate set.

The patent does not publish element-level `nC`, `nF`, `ng`, `PgF`, or `dPgF`. Consequently, the data file contains none of those fields and this analysis makes no APO or anomalous-partial-dispersion claim. The production specification's “1 HR” marketing designation likewise cannot be assigned to a particular L1–L7 element from the final data without stepping beyond the verified source coordinates.

## Focus Mechanism

Example 4 uses a **published inner-focus** mechanism; no constrained reconstruction is present. G1 and G3 remain fixed, while G2 (L3+L4) translates toward the image side as object distance decreases. The two variable air spaces are the stop-to-G2 gap D1 and the G2-to-G3 gap D2.

| Published focus state | D1 = STO→L3 (mm) | D2 = L4→G3 (mm) | D1 + D2 (mm) | Published |MAG| |
|---|---:|---:|---:|---:|
| Infinity | 2.000000000 | 3.665607050 | 5.665607050 | — |
| Intermediate (`MAG=-1/40`) | 2.523725915 | 3.141881136 | 5.665607051 | 0.025 |
| Close row (`TL=0.3m` heading) | 4.638416687 | 1.027190363 | 5.665607050 | 0.123 |

The infinity-to-close G2 translation is **2.638416687 mm toward the image side**. The maximum spread in D1+D2 over the three published states is only 1.0×10⁻⁹ mm at the printed precision, so the two changing gaps describe a rigidly translating focus group rather than a floating change of internal G2 geometry. Independent conjugate tracing gives a maximum solved image-distance variation from surface 14A of 0.000111 mm across the same three source states, supporting the fixed-image internal-focus interpretation.

The intermediate data-file focus coordinate `focusT = 0.237653048385` is a normalized UI mapping derived from the current LensVisualizer distance convention. It is not a patent-published mechanical coordinate. The underlying D1/D2 values themselves are published.

The patent's close column is internally inconsistent in its distance label. It is headed `TL=0.3m`, but the same row gives D0 = 302.0219835 mm and OAL = 46.500 mm, summing to 348.5219835 mm. Samyang defines minimum focusing distance from image sensor to object and specifies 0.35 m for the production lens. The final model therefore retains the patent's published spacing row while using `closeFocusM: 0.35`; it does not rewrite or reconstruct the patent spacings.

## Aspherical Surfaces

Example 4 contains three aspherical surfaces on two physical elements: **3A on L2**, and **13A plus 14A on L7**. Patent Equation 5 is already in the standard conic form used by LensVisualizer:

$$
z(y)=\frac{c y^2}{1+\sqrt{1-(1+K)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+\cdots
$$

Accordingly, the published `K` values are used directly; there is no κ-to-K conversion. No uniform dimensional scaling is applied (`s = 1`), so the asphere coefficients are also unscaled. The patent publishes terms through A10 for Example 4; the data representation carries A12 and A14 as zero.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 3A | −1.741990 | −3.454513e−05 | −7.997276e−09 | −1.303060e−09 | +1.178286e−11 |
| 13A | −0.5397246 | +1.749280e−04 | +1.372817e−06 | −2.796398e−08 | +3.650418e−11 |
| 14A | −2.462853 | −3.441633e−05 | +2.149737e−06 | −2.785146e−08 | +1.053277e−10 |

At the final **verified modeled** semi-diameters, the departures from the corresponding same-radius sphere are:

- **3A at 6.8 mm:** −0.099610283 mm.
- **13A at 7.7 mm:** +1.649818428 mm.
- **14A at 8.4 mm:** +1.467726748 mm.

These departures are computed model diagnostics, not patent clear-aperture data; Example 4 publishes no semi-diameters. Surface 3A is the stop-adjacent asphere that the patent associates with spherical-aberration and coma correction (¶0080). The paired rear aspheres on L7 occupy the location the patent associates with stronger astigmatism and distortion correction near the image side (¶0079), while the element as a whole is also described as a field flattener (¶0054).

No manufacturing method—molded glass, hybrid resin, polished asphere, or otherwise—is assigned because the cited patent/example and final data do not establish one.

## Conditional Expressions

The patent gives four principal conditions for this lens family. Example 4 contains two internal table contradictions, so the conditions are evaluated directly from the final prescription rather than from the printed ratio column in Table 13.

| Patent condition | Example 4 computed value | Printed Table 13 ratio | Result against printed bounds |
|---|---:|---:|---|
| `0.01 ≤ LF/LT ≤ 0.12` | 0.097220048 | 0.10 | Pass |
| `0.52 ≤ 1/na ≤ 0.64` | 0.571262556 | 0.57 | Pass |
| `0.03 ≤ LSF/LT ≤ 0.14` | 0.073695750 | 0.58 | Pass by direct computation; printed ratio is inconsistent |
| `0.05 ≤ VL/VH ≤ 0.22` | 0.575206612 | 0.07 | Fail by direct computation; patent is internally contradictory |

For the third condition, Table 13 itself gives `LSF = 2.0 mm` and `LT = 27.13801 mm`, which imply approximately 0.0737, not 0.58. The final prescription gives 0.073695750 and therefore satisfies the stated inequality.

For the fourth condition, Example 4's two focusing lenses have `VL = 20.88` and `VH = 36.30`, so `VL/VH = 0.575206612`. That cannot satisfy the printed upper limit of 0.22, and it cannot yield Table 13's 0.07. The contradiction is preserved rather than “corrected” by changing the source values or formula.

## Verification Summary

The final data file was checked quantitatively from its own TypeScript arrays using independent sequential height/reduced-angle tracing and an ABCD reconstruction. The two matrix constructions agree exactly at the reported precision.

Key first-order results are:

- **Infinity EFL:** 35.182840213 mm; patent Table 12 states 35.17940614 mm, a +0.003434073 mm (+0.00976%) residual.
- **Modeled wide-open f-number:** F/2.899000000 from the inferred stop semi-diameter, matching the authored design F/2.899.
- **Entrance pupil:** +2.930706426 mm from the first vertex, semi-diameter 6.068099381 mm. The pupil size depends on the inferred physical stop semi-diameter; the axial location follows from the published stop plane and prescription.
- **Exit pupil:** −18.490823502 mm from surface 14A, semi-diameter 6.554164970 mm under the same inferred-stop model.
- **Front principal plane H1:** +5.539912635 mm from the first vertex.
- **Rear principal plane H2:** −15.672615220 mm from surface 14A.
- **Gaussian BFL:** 19.510224994 mm from surface 14A.
- **Active first-to-last-lens length:** 27.138607050 mm.
- **Petzval sum:** +2.301876353×10⁻³ mm⁻¹ using surface-by-surface `φ/(n·n′)`; reciprocal diagnostic 434.428200 mm.

The Petzval reciprocal is only a first-order curvature diagnostic; it is not asserted as the final aberration-corrected image-surface radius.

Because Example 4 does not publish semi-diameters, all lens-surface `sd` values in the data file are modeling inferences. They were set from exact on-axis and off-axis ray containment across all three published focus states, then checked against the current geometry policy. The minimum computed edge thickness is 0.911328391 mm, the maximum actual rim angle is 50.757310°, the worst positive shared-band cross-gap intrusion is 0.836004615 of its gap against a 0.90 limit, and all 21 modeled exact-ray containment cases pass. These are validation properties of the authored model, not patent mechanical dimensions.

Several source/reference-plane discrepancies remain intentionally visible:

- Patent Table 10 gives 16.862 mm from surface 14 to the Filter, while Table 12 gives a filter-absent `in Air` distance of 19.70032771 mm. The latter is used as the final model's rear air spacing after omitting the Filter.
- The authored 19.70032771 mm rear spacing is 0.190102716 mm longer than the independently derived Gaussian BFL of 19.510224994 mm.
- The source OAL of 46.500 mm differs from the Gaussian first-vertex-to-image track by −0.148832044 mm and from the authored filter-absent track by −0.338934760 mm. No unreported rear-spacing correction is inserted to force agreement.
- Table 13 prints `LT = 27.13801 mm`, while direct summation of the Example 4 active lens stack gives 27.13860705 mm, a 0.00059705 mm source-level discrepancy.
- Patent ¶0059's functional-group power signs conflict with the numerical prescription, as described above.

No dimensional scaling is applied. The marketed 35 mm / f/2.8 values remain catalog metadata, while the modeled patent design remains 35.182840213 mm / F2.899.

## Sources and References

1. **KR 10-2127451 B1**, Samyang Optics Co., Ltd., Moon-Kyung Kim, Example 4. Primary prescription source: Tables 10–13, Equation 5, Figures 7–8, and paragraphs cited above.
2. **Samyang AF 35mm F2.8 FE — official product page.** Production identity and marketed specifications: Sony E mount, full-frame, 35 mm f/2.8, 7 elements in 6 groups, 2 ASP / 1 HR, 0.35 m minimum focus, 0.12× maximum magnification, and 7 aperture blades. https://www.lksamyang.com/en/product/product-view.php?seq=151
3. **Samyang AF 35mm F2.8 FE — official instruction manual.** Confirms Sony E / full-frame use, 7 elements in 6 groups including two aspherical lenses, 0.35 m minimum focusing distance measured from image sensor to object, 0.12× maximum magnification, and inner-focus construction. https://www.lksamyang.com/files/2017/9/1506614827116/AF35mmF2.8_Eng.pdf
4. **Samyang announcement, 2017-06-05.** Announces the AF 35mm F2.8 FE and states global availability from July 2017. https://www.lksamyang.com/en/about/notice-view.php?seq=399
5. **HOYA E-FD10L official data sheet.** Catalog class 728283; `nd = 1.72825`, `ne = 1.73432`, `νd = 28.32`. https://www.hoya-opticalworld.com/common/pdf2019/E-FD10L.pdf
6. **HOYA optical-properties reference (F2).** Catalog class 620363; `nd = 1.62004`, `ne = 1.62409`, `νd = 36.30`. https://www.hoya-opticalworld.com/english/technical/002.html
7. **OHARA S-LAH66 official data.** Catalog class 773496; `nd = 1.77250`, `ne = 1.776208`, `νd = 49.60`. https://oharacorp.com/glass/s-lah66/
8. **SCHOTT N-SF66 official data sheet.** Catalog class 923209; `nd = 1.92286`, `ne = 1.93322`, `νd = 20.88`. https://media.schott.com/api/public/content/c2e0c3a77dcb4c94b349424ee621ee32
9. **CDGM H-ZLaF55D official data sheet.** Catalog class 835427; `nd = 1.834810`, `ne = 1.839455`, `νd = 42.73`. https://www.cdgmgd.com/webapp/pdf/H-ZLaF55D.pdf
10. **CDGM H-ZF1 official data sheet.** Catalog class 648338; `nd = 1.647690`, `ne = 1.652216`, `νd = 33.84`. https://www.cdgmgd.com/webapp/pdf/H-ZF1.pdf
11. **HIKARI J-SF8 official catalog.** Catalog class 689312; `nd = 1.688930`, `ne = 1.694153`, `νd = 31.16`. https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
