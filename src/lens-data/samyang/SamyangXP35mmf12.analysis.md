## Patent Reference and Design Identification

**Patent:** KR 10-2077265 B1\
**Application Number:** 10-2018-0084767\
**Filed:** 2018-07-20\
**Granted:** 2020-02-07\
**Published:** 2020-02-14\
**Inventors:** Jae Myung Yu; Hae Jin Lee; Jung Du Lee; Moon-Kyung Kim\
**Assignee:** Samyang Optics Co., Ltd.\
**Title:** 렌즈 광학계 및 이를 포함한 촬영 장치 (*Lens optical system and photographing apparatus including the same*)\
**Embodiment analyzed:** Example 3

This prescription is the project-selected correlation for the **SAMYANG XP 35mm f/1.2**. KR 10-2077265 B1 Example 3 is used as the fixed numerical source; the correlation is not presented as an explicit Samyang statement that the production lens uses this exact patent example.

The identification rests on several convergent points. First, Example 3 contains 12 glass elements in 10 air-separated groups, exactly matching Samyang's published optical-construction count. Second, the patent design focal length is 35.962279 mm and its infinity f-number is 1.254, while the production lens is marketed as 35 mm f/1.2. Third, Example 3 uses two double-sided aspherical elements, matching Samyang's published count of two aspherical elements. Fourth, the patent's infinity full field is 64.054°, close to Samyang's 64.5° full-frame specification. Fifth, the patent's printed near-state `D0 + OAL` aggregate is 0.340679976 m, while the plate-omitted LensVisualizer reference plane normalizes the same source object position to 0.339890654 m; both round to the marketed 0.34 m minimum focusing distance. The computed magnification magnitude is 0.18014, close to the marketed 0.17× value. Finally, the patent was filed on 2018-07-20, four months before Samyang announced the XP 35mm F1.2 on 2018-11-26.

Samyang identifies the production lens as a Canon EF, 135-format, manual-focus lens with a nine-blade diaphragm. These are product-identity fields and remain separate from the patent's exact optical-design quantities.

## Optical Architecture

Example 3 is a three-functional-group wide-angle design. From object to image, the groups are a **negative G13**, a **positive G23**, and a **positive G33**. The patent states that G13 remains fixed during focusing while G23 and G33 move independently toward the object when focusing from infinity to the nearest published distance (¶0048, ¶0062–¶0066). The numerical prescription confirms those power signs.

The isolated d-line group focal lengths computed from the final prescription are approximately −182.843184 mm for G13, +88.736798 mm for G23, and +50.896853 mm for G33. These are standalone group powers in air, not a statement that the groups retain those focal lengths unchanged when embedded in the complete system.

G13 contains five air-separated spherical elements. Its three leading negative elements expand the field and establish the long back-focus geometry, after which two positive elements partly recover convergence before the moving rear system. G23 consists of a positive singlet followed by a cemented positive/negative pair. G33 begins immediately behind the stop with a double-sided aspherical negative singlet, continues through a cemented positive/negative pair, and ends with a double-sided aspherical positive element.

The patent describes the lens arrangement around the stop as approximately double-Gauss-like (¶0047), but the complete design is materially asymmetric because of the large fixed negative front group. The computed Gaussian back focal distance from surface 23A is 38.161702 mm, greater than the 35.961900 mm computed EFL. Under the project criterion `BFD > EFL`, the complete design is therefore **retrofocus**. The first-to-last-lens vertex length is 126.006263 mm, so `TL/EFL = 3.503882`; it is not telephoto under the corresponding `TL/EFL < 1` criterion.

The aperture stop lies between G23 and G33. Its axial position is source-published, but its physical diameter is not. The data model therefore uses a calibrated stop semi-diameter of 17.2170145 mm so that the infinity paraxial entrance pupil reproduces the patent's F1.254 design value. This is a modeling inference, not a patent dimension.

The patent publishes no clear apertures. Surface semi-diameters in the data file are likewise modeling quantities derived from the validated ray envelopes at the two published focus endpoints and checked against the optical section in Figure 5. They should not be read as manufacturing drawings or source-published clear apertures.

## Element-by-Element Analysis

### L1 (L13) — Negative Meniscus

**nd = 1.84666, νd = 23.78. Glass: 847238 — high-index flint class (vendor unspecified). Standalone f = −82.917497 mm.**

L1 is the first element of the fixed negative front group. Its meniscus form begins the strong field-expanding action required by the retrofocus architecture while keeping both surface curvatures less extreme than a comparably powered biconcave element would require. The high refractive index is consistent with that compact-power role; the specific production glass melt is not identified by the patent.

The relatively low Abbe number means L1 contributes substantial chromatic power as well as negative monochromatic power. The runtime uses a compatible catalog curve for estimated spectral behavior; the patent does not establish the actual melt or its secondary spectrum.

### L2 (L23) — Negative Meniscus

**nd = 1.49700, νd = 81.61. Glass: 497816 — low-dispersion crown class (vendor unspecified). Standalone f = −125.127786 mm.**

L2 continues the negative front-group action but does so with exceptionally low d-line dispersion compared with L1 and L3. In first-order terms it is weaker than either neighboring negative element. Its high Abbe number gives the designer a way to distribute negative power without imposing the same primary chromatic burden as the high-dispersion negative glasses around it.

The 497816 coordinate is not assigned to a particular vendor in the final data. Samyang’s official construction marks this second element ED; the diagram tag is inferred through the production correlation, since the patent itself makes no such material designation.

### L3 (L33) — Biconcave Negative

**nd = 1.75520, νd = 27.53. Glass: 755275 — dense-flint class (vendor unspecified). Standalone f = −59.143577 mm.**

L3 is the strongest standalone negative element in G13 by focal-length magnitude. Its biconcave form reinforces the front-group divergence after L1 and L2 and helps establish the ray-height expansion needed for a wide field with a long rear clearance.

Its relatively high index and low Abbe number contrast with L2's low-dispersion glass. The pair contributes a broad dispersion spread within G13, but the available data do not support a claim of anomalous partial dispersion or apochromatic correction.

### L4 (L43) — Plano-Convex Positive

**nd = 2.00100, νd = 29.13. Glass: 001291 — very-high-index glass class (vendor unspecified). Standalone f = +72.076923 mm.**

L4 is the first positive element after the three leading negatives. Its role is to begin recovering convergence while G13 remains net negative as a subsystem. The very high refractive index allows meaningful positive power with one plane surface and a moderate curved rear surface.

Because the first group is specified as entirely spherical (¶0063), L4's correction contribution comes from ordinary curvature, spacing, and glass selection rather than an aspheric figure.

### L5 (L53) — Plano-Convex Positive

**nd = 1.92286, νd = 20.88. Glass: 923209 — dense high-dispersion flint class (vendor unspecified). Standalone f = +106.746419 mm.**

L5 is the final element of fixed G13. It adds positive power after L4 but does not reverse the group's overall sign; the isolated five-element G13 remains negative at −182.843184 mm. Its plane rear surface also creates a simple reference boundary immediately before the variable G13–G23 spacing.

The very low Abbe number makes L5 a strong-dispersion component. The design consequently uses a wide range of dispersions within G13 rather than relying on a single low-dispersion material to control color.

### L6 (L63) — Biconvex Positive

**nd = 1.83481, νd = 42.72. Glass: 835427 — high-index glass class (vendor unspecified). Standalone f = +64.670249 mm.**

L6 is the front singlet of moving G23 and supplies the principal positive action ahead of the cemented L7/L8 pair. It converts the divergent bundle leaving G13 into a more strongly converging bundle approaching the stop.

The group as a whole is positive even though the following cemented pair is net negative in isolation. That distinction is important: L6 and the downstream doublet operate as one spaced functional group, so their in-system behavior cannot be inferred from the standalone element powers alone.

### L7 (L73) / L8 (L83) — Cemented Positive/Negative Pair C1

**L7: nd = 1.71300, νd = 53.94. Glass: 713539 — lanthanum crown class (vendor unspecified). Standalone f = +43.428181 mm.**\
**L8: nd = 1.72825, νd = 28.32. Glass: 728283 — flint class (vendor unspecified). Standalone f = −29.465370 mm.**

L7 and L8 share the cemented interface at surface 14. Their standalone powers have opposite signs and their Abbe numbers differ substantially. The cemented pair by itself has a computed net focal length of −133.002163 mm, even though L7 is a strong positive element. This negative cemented contribution follows the positive L6 singlet, leaving the complete G23 positive at +88.736798 mm.

The crown/flint dispersion contrast is consistent with ordinary achromatizing practice, but the patent supplies only `nd` and `νd`. No claim is made that this pair provides apochromatic or anomalous-dispersion correction.

### L9 (L93) — Biconcave Negative, Double-Sided Asphere

**nd = 1.68863, νd = 31.19. Glass: E-FD8 catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = −34.600387 mm.**

L9 is the first glass element immediately image-side of the aperture stop and is the first element of G33. Both of its surfaces, 17A and 18A, are aspherical. The patent explicitly emphasizes placing an asphere immediately behind the stop to improve central imaging performance while keeping the aspheric diameter smaller than it would be in the front group (¶0049).

The numerical Example 3 table and Figure 5 show a 0.100 mm air gap after L9. This makes L9 an air-separated singlet, not part of the L10/L11 cemented pair. The generic prose in ¶0065 describes a possible three-element cemented arrangement, but that wording does not match Example 3's numerical topology.

E-FD8 supplies a compatible dispersion curve while retaining the patent nd/νd; the production supplier remains unspecified.

### L10 (L103) / L11 (L113) — Cemented Positive/Negative Pair C2

**L10: nd = 1.49700, νd = 81.61. Glass: 497816 — low-dispersion crown class (vendor unspecified). Standalone f = +29.623573 mm.**\
**L11: nd = 1.59270, νd = 35.45. Glass: 593354 — flint class (vendor unspecified). Standalone f = −36.266196 mm.**

L10 and L11 share the cemented interface at surface 20. Unlike C1, this positive/negative pair is net positive in isolation, with a computed cemented focal length of +97.612214 mm. It therefore contributes positive relay power within G33 after the negative L9 singlet.

The 497816/593354 dispersion contrast again provides conventional crown/flint color balancing. Neither member of this rear pair is ED-marked in Samyang’s production construction diagram; its single ED position is the second element, L23.

### L12 (L123) — Biconvex Positive, Double-Sided Asphere

**nd = 1.85343, νd = 40.54. Glass: L-LAH85V catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = +31.658456 mm.**

L12 is the final glass element and a strong positive member of G33. Both surfaces, 22A and 23A, are aspherical. The patent specifically states that an aspheric lens at the image-side end of G33 can be used to correct astigmatism and distortion (¶0049), which makes L12 the field-correction counterpart to the stop-adjacent L9 asphere.

Its high index supports strong positive power in a compact rear element. The rear surface is also the reference from which the data model's air-equivalent image distance is measured after removal of the patent's sensor-side optical plate.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not identify the glass manufacturer or melt names. The final data uses neutral six-digit coordinate classes and qualified catalog equivalents. All twelve elements resolve to compatible coefficient-backed dispersion curves, without promoting those equivalents into source identities.

| Glass annotation in data | nd | νd | Element(s) | Interpretation |
|---|---:|---:|---|---|
| 847238 — high-index flint class | 1.84666 | 23.78 | L1 | High-index, high-dispersion negative front-group material |
| 497816 — low-dispersion crown class | 1.49700 | 81.61 | L2, L10 | Very low-dispersion crown coordinate used in both G13 and G33 |
| 755275 — dense-flint class | 1.75520 | 27.53 | L3 | Dense, relatively high-dispersion negative material |
| 001291 — very-high-index glass class | 2.00100 | 29.13 | L4 | Very-high-index positive front-group material |
| 923209 — dense high-dispersion flint class | 1.92286 | 20.88 | L5 | Very high index and very low Abbe number |
| 835427 — high-index glass class | 1.83481 | 42.72 | L6 | High-index positive G23 singlet |
| 713539 — lanthanum crown class | 1.71300 | 53.94 | L7 | Lower-dispersion member of cemented pair C1 |
| 728283 — flint class | 1.72825 | 28.32 | L8 | Higher-dispersion negative member of C1 |
| E-FD8 catalog-equivalent | 1.68863 | 31.19 | L9 | Compatible dispersion proxy; production identity unspecified |
| 593354 — flint class | 1.59270 | 35.45 | L11 | Negative member of cemented pair C2 |
| L-LAH85V catalog-equivalent | 1.85343 | 40.54 | L12 | High-index final positive aspheric element |

Samyang's production specification describes the lens as using two aspherical, three HR, and one ED element. The patent directly establishes the two aspherical elements in Example 3, but it does not label individual elements with Samyang's HR or ED marketing categories. The official construction drawing resolves the single ED position as the second element, L23, despite the 1.49700/81.61 coordinate appearing twice. L23 therefore carries an inferred ED/APD display tag through the product correlation. This does not establish a patent-measured anomalous partial dispersion or a production glass supplier. The drawing marks L13, L43, and L53 as HR; these already receive the viewer’s generic high-index color from their retained indices.

No element in the final data carries `nC`, `nF`, `ng`, or `dPgF`. The analysis therefore makes no apochromatic or anomalous-partial-dispersion claim. Chromatic comments are limited to what can be inferred from the published d-line Abbe numbers.

## Focus Mechanism

The patent uses a published two-state floating internal-focus mechanism. G13 is fixed; G23 and G33 move independently toward the object as focus moves from infinity to the nearest published state (¶0048, ¶0062). The data file transcribes only those two endpoints and does not invent intermediate trajectories or reversals.

| Authored variable spacing | Infinity | Nearest published state | Change |
|---|---:|---:|---:|
| G13→G23 gap after surface 10 | 6.795765 mm | 1.000000 mm | −5.795765 mm |
| G23→STO gap after surface 15 | 7.732498 mm | 6.565902 mm | −1.166596 mm |
| Surface 23A→IMG, air-equivalent | 38.162369751 mm | 45.168708751 mm | +7.006339000 mm |

From the front-side gap changes, G23 moves 5.795765 mm objectward and G33 moves 6.962361 mm objectward. G33 therefore moves 1.166596 mm farther toward the object than G23 over the published endpoint range. The rear air-equivalent gap changes by a slightly different amount because it also incorporates the published change in the omitted plate-to-image spacing; it should not be interpreted as a direct mechanical travel measurement for G33. In the viewer’s fixed-image-plane coordinates this introduces a common −0.043978 mm shift: G13 −0.043978 mm, G23 −5.839743 mm, and G33 −7.006339 mm. The focus text distinguishes this reference-plane effect from mechanical motion. Diagram groups use the embodiment-specific G13/G23/G33 labels; cemented pairs use C1/C2 to avoid confusion with the D1/D2 air gaps.

The patent's nearest-state object distance `D0 = 175.678043 mm` is measured from the front optical reference. Its printed `D0 + OAL` aggregate is 340.679976 mm, but the ordinary LensVisualizer prescription omits the 2.500 mm sensor-side plate and replaces it with its paraxial air equivalent. To preserve the published object position relative to surface 1, the authored model therefore uses `closeFocusM = 0.339890653751 m`. Samyang markets the production lens at 0.34 m MFD. The final model recovers `D0 = 175.678043 mm` from that normalized distance and gives a finite-conjugate transverse magnification of −0.180139915, compared with the patent's magnitude 0.180120 and the production lens's rounded 0.17× specification.

The production lens is manual focus according to Samyang. The patent describes only the optical group motion and does not establish the detailed production helicoid or cam geometry, so the analysis does not infer a mechanical linkage beyond the published group movements.

## Aspherical Surfaces

Example 3 uses four aspherical surfaces on two elements: 17A and 18A on L9, and 22A and 23A on L12. The patent's Eq. 5 uses the standard conic convention adopted by LensVisualizer:

`Z = (c h²) / (1 + √(1 − (1 + K)c²h²)) + A4 h⁴ + A6 h⁶ + A8 h⁸ + ...`

where `c = 1/R`. The patent's `K` values therefore require no conversion. No uniform scale factor is applied to this prescription, so the aspheric coefficients are transcribed without dimensional rescaling.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 17A | −3.378571 | −3.752406E−05 | 1.692010E−07 | −6.857060E−10 | 1.390576E−12 | −1.189133E−15 | 0 | — |
| 18A | −11.593490 | 1.059712E−05 | 2.149157E−08 | −1.091410E−10 | 1.185565E−13 | 0 | 0 | — |
| 22A | 3.286256 | −2.968122E−06 | −8.169816E−09 | 3.128738E−11 | −6.398702E−15 | −3.487114E−16 | 1.001273E−18 | −1.177006E−21 |
| 23A | −0.472800 | 1.224110E−06 | −1.054896E−08 | 6.441324E−11 | −2.469135E−13 | 5.602042E−16 | −6.187521E−19 | — |

The L9 pair is positioned immediately behind the stop, matching the patent's stated strategy of concentrating aspheric correction in a smaller-diameter rear group rather than in the large front elements (¶0049, ¶0052). L12 places the second double-sided asphere at the image-side end of G33, where the patent associates it with astigmatism and distortion correction.

The patent does not publish clear apertures. At the final modeled semi-diameters, the independently verified departures from the same-radius sphere are −1.031361 mm at 17A (`sd = 14.9 mm`), −0.884216 mm at 18A (`sd = 16.6 mm`), −1.675555 mm at 22A (`sd = 22.0 mm`), and −0.489070 mm at 23A (`sd = 22.5 mm`). These departure values describe the authored model apertures, not source-published edge points.

## Conditional Expressions

KR 10-2077265 B1 gives four principal conditional expressions for the design. Example 3 satisfies all four when the source's Table 10 convention is followed.

| Condition | Patent bounds | Patent Table 10 | Recomputed from final data |
|---|---:|---:|---:|
| D2i / f2 | 0.05 ≤ value ≤ 0.30 | 0.207 | 0.207056 |
| D2i / D2n | 0.90 ≤ value ≤ 1.30 | 1.068 | 1.067798 |
| Rfront / f2 | 0.60 ≤ value ≤ 1.00 | 0.766 | 0.766458 |
| frear / f3 | −0.80 ≤ value ≤ −0.50 | −0.680 | −0.679814 |

The first two expressions require a source-interpretation note. Paragraphs 0069 and 0073 describe `D2i` and `D2n` as the distance from the rear vertex of G23 to the stop. Read literally, Example 3 would produce 0.087140 and 1.177675, which do not match Table 10. The tabulated 0.207 and 1.068 values are reproduced only when the distance is taken from the rear G23 vertex at surface 15 through the stop to the first G33 vertex at surface 17A, i.e. `D2 + 10.641 mm`. The final data preserves the published spacings; the analysis records this source-definition inconsistency rather than silently altering the prescription.

For the remaining expressions, `Rfront` is the 68.013 mm object-side radius of L6, `f2` is the computed +88.736798 mm G23 focal length, `frear` is the standalone −34.600387 mm focal length of the stop-adjacent L9, and `f3` is the computed +50.896853 mm G33 focal length.

## Verification Summary

The final prescription was checked independently using sequential reduced-angle `y–ν` tracing and an ABCD matrix calculation. The two methods agree to machine precision for the authored arrays. At infinity the computed EFL is 35.961900060 mm, only −0.000378940 mm from the patent's 35.962279 mm value; the computed value is stored in `focalLengthDesign`. The recalibrated modeled entrance pupil gives F1.2540000, matching the authored and patent design value F1.254.

The computed Gaussian BFL from 23A is 38.161701693 mm. The corresponding first-order architecture therefore satisfies the project's retrofocus criterion. The Petzval sum, evaluated surface by surface as `φ/(n·n′)`, is +0.001520361987 mm⁻¹, with a reciprocal magnitude of about 657.738 mm.

At the nearest published focus state, finite-conjugate tracing gives matrix imaging term `B = −0.004522774 mm` and transverse magnification −0.180139915. The residual is consistent with the source precision and supports the published close-focus spacing row.

Several source and modeling distinctions are carried explicitly in the data and this analysis:

- The patent's rear 2.500 mm, `nd = 1.51680` optical plate is treated as sensor-side optical glass and omitted from the ordinary lens prescription. Its paraxial effect is preserved by replacing the rear train with `D3 + 2.5/1.5168 + D4`. Table 9's `OAL`/`in Air` bookkeeping numerically includes the negative `D5`, but propagating `D5` as optical space moves the near paraxial imaging term from about −0.0045 mm to +0.3423 mm and breaks the published magnification match. `D5` is therefore retained as source bookkeeping rather than active optical space.
- The physical stop diameter is not published; the data uses a calibrated stop size that reproduces the patent's infinity F-number.
- Surface semi-diameters are inferred model clearances, not patent dimensions.
- Focus status is `PUBLISHED`; no intermediate focus trajectory is reconstructed.
- No dimensional scaling is applied, so radii, spacings, and aspheric coefficients remain at the patent scale.
- Paragraph 0047 calls G13 positive while also describing it as diverging; the claims, Example 3 description, and computed power all establish G13 as negative.
- Paragraph 0065's generic three-element cemented wording for part of G33 does not match Example 3 Table 7 or Figure 5, which show L9 air-separated from the cemented L10/L11 pair.

## Sources and References

1. **KR 10-2077265 B1**, *렌즈 광학계 및 이를 포함한 촬영 장치*, Samyang Optics Co., Ltd., Example 3. Primary numerical sources: Eq. 5 and Tables 7–10, pp. 10–15; optical layout and focus motion: Figure 5, p. 20; relevant design discussion: ¶0048–¶0066.
2. **Samyang Optics, XP 35mm F1.2 product page.** Official production specifications: Canon EF mount, 12 elements in 10 groups, ASP 2 / HR 3 / ED 1, 0.34 m MFD, 0.17× maximum magnification, 64.5° full-frame angle of view, nine aperture blades, and F1.2–F16. <https://www.lksamyang.com/en/product/product-view.php?seq=397>
3. **Samyang Optics, “Samyang Optics Launches the Premium Photo Lens — XP 35mm F1.2,” 2018-11-26.** Official launch timing and production identity. <https://www.lksamyang.com/en/about/notice-view.php?seq=558>
4. **Samyang Optics 2022 Optical Catalogue**, XP 35mm F1.2 entry, p. 25. Manufacturer catalogue confirmation of 12 elements in 10 groups, F1.2–F16, nine blades, and 0.34 m MOD. <https://www.lksamyang.com/upload/file/2022_SAMYANG_OPTICS_Catalogue_EN.pdf>

The live-site follow-up verified the manufacturer construction image: <https://www.lksamyang.com/upload/editor/1568170384>.
