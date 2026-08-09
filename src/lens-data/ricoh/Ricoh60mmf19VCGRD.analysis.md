# RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL IV)

## Patent Reference and Design Identification

**Patent:** JP 2010-164839 A

**Application:** JP 2009-7970

**Filed:** 2009-01-16

**Published:** 2010-07-29

**Inventor:** Yoshifumi Sudoh

**Applicant:** Ricoh Co., Ltd.

**Title:** 結像レンズおよびカメラ装置および携帯情報端末装置 (*Imaging lens, camera apparatus, and portable information terminal apparatus*, translated)
**Embodiment analyzed:** Example 4

The modeled prescription is Example 4 of JP 2010-164839 A. The patent gives a infinity-state numerical example with a published focal length of 6.00 mm, F-number 1.99, maximum image height 4.90 mm, and half field angle 39.1° (¶0071, ¶0087–¶0091). The final data file computes a d-line effective focal length of 6.002506 mm and preserves the published design aperture as `nominalFno = 1.99`.

The production correlation is the one fixed by the job card: the Ricoh GR DIGITAL IV lens. Ricoh's product specifications describe a 6.0 mm f/1.9 fixed lens with 8 elements in 6 groups and two aspherical elements / two aspherical surfaces on a 1/1.7-inch-type camera. The 6.0 mm focal length, 8/6 construction, and asphere count agree with Example 4, but the marketed f/1.9 aperture is not numerically identical to Example 4's published F1.99 and is therefore kept separate in the data. The correlation is not manufacturer-confirmed, and it is not historically unique: Ricoh also published the same high-level 6.0 mm f/1.9, 8-element / 6-group, two-asphere specification for the GR DIGITAL III. The present analysis therefore treats the GR DIGITAL IV relationship as the fixed project correlation rather than as a claim that Ricoh identified Example 4 as the production prescription.

No dimensional scaling is applied. The patent prescription already lies at the production focal-length scale, so all radii, spacings, and aspheric coefficients remain at `s = 1.0`.

## Optical Architecture

The lens is an 8-element, 6-group, retrofocus-type wide-angle prime. The patent itself describes the architecture as similar to a retrofocus arrangement (¶0027), and the final prescription satisfies the project's quantitative definition because the computed back focal distance, 8.684199 mm from the final active lens surface, exceeds the 6.002506 mm effective focal length.

The patent divides the system about the aperture stop into first and second lens groups. The object-side first group contains a negative `1F` subgroup followed, across the largest air interval within that group, by a positive `1R` singlet (¶0062–¶0064). In the final data these are L1–L2 and L3 respectively. The `1F` subgroup has an isolated focal length of -8.188268 mm; L3, which is also the complete `1R` subgroup, has an isolated focal length of +16.828456 mm. These isolated values describe the subassemblies in air and should not be treated as additive in-situ contributions.

The stop lies between L3 and the rear imaging section. The image-side second group is divided into `2F` and `2R` (¶0065). `2F` contains the positive-negative-negative-positive sequence L4–L7, implemented as two cemented pairs separated by a 0.20 mm air gap. Its isolated net focal length is +19.186810 mm. The rear `2R` subgroup is the single positive L8, with an isolated focal length of +36.620423 mm. The patent assigns the rear subgroup a balancing role in aberration correction and exit-pupil control (¶0057–¶0059).

This partition is more informative than a simple front-negative/rear-positive label. The front two negative menisci establish the wide-angle ray geometry, while the positive pre-stop singlet and the compound positive rear system provide the principal imaging power. The unusually long 9.57 mm gap between L2 and L3 is also part of the patent's ghost-control strategy: the patent uses this spacing to help prevent reflections generated in the front negative pair from propagating through the later imaging groups (¶0039–¶0043).

The patent includes a plane-parallel plate `F` behind the lens as a representative low-pass filter, infrared-cut filter, and/or sensor cover glass (¶0067). That plate is not an active lens element in the LensVisualizer model and is omitted. Its first-order propagation effect is absorbed into the normalized rear air spacing described in the verification section below.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = -21.845645 mm.`

L1 is the first negative lens of the patent's `1F` front subgroup. Its rear face is the concave surface involved in the patent's ghost-reflection discussion. Together with L2, it spreads the incoming field before the positive sections of the system and establishes the front-end geometry required for the wide angular coverage (¶0031–¶0035).

The final data include `nC = 1.49514`, `nF = 1.50123`, `ng = 1.50451`, and `dPgF = +0.0280` for S-FPL51. The very high `νd` is directly relevant to the patent's preference for low-dispersion glass in the first negative subgroup (¶0044–¶0046). The line data justify discussing this glass's dispersion behavior, but they do not by themselves justify an APO designation for the complete lens.

### L2 — Negative Meniscus with Rear Asphere

`nd = 1.51633, νd = 64.06. Glass: L-BSL7 (OHARA). f = -14.974371 mm.`

L2 is the second negative lens of `1F`. The patent specifies a meniscus form with a convex object-side surface and identifies the second negative lens as the preferred location for an asphere (¶0020, ¶0049). In Example 4 its rear surface is patent surface 4, labeled `4A` in the data file.

The L1 rear surface and L2 front surface have the same radius sign in the patent convention. The patent treats reflections between these front surfaces as a potential source of bright off-axis ghost images and uses the front-group power ratio, curvature relationships, and the long L2-to-L3 air space to control those reflected paths (¶0035–¶0048). The rear asphere on L2 is separately described as particularly effective for distortion correction, with additional utility for coma correction (¶0049).

The historical OHARA `L-BSL7` designation is retained exactly rather than modernized to a current `S-BSL7` label. The final element also carries `nC = 1.51385`, `nF = 1.52191`, `ng = 1.52620`, and `dPgF = -0.0045`.

### L3 — Biconvex Positive Singlet (`1R`)

`nd = 1.80400, νd = 46.57. Glass: S-LAH65 (OHARA). f = +16.828456 mm.`

L3 is the sole element of the positive `1R` subgroup and sits immediately before the aperture stop. The patent explicitly prefers a single positive element here for compactness and calls for a relatively high-index, moderate-dispersion material, giving the preferred ranges `1.7 < nd < 1.9` and `35 < νd < 55` (¶0050). The Example 4 values lie within both ranges.

The patent also describes the pre-stop positive subgroup and the positive rear group as facing one another across the stop so that their power balance can be used to control coma (¶0033). L3 therefore should not be interpreted only from its isolated positive focal length; its optical role depends strongly on its stop-adjacent position and interaction with the later `2F` group.

The glass is retained as historical S-LAH65. The final data use the historical OHARA line values `nC = 1.79882`, `nF = 1.81608`, `ng = 1.82570`, and `dPgF = -0.0090`, rather than substituting a later S-LAH65V or S-LAH65VS suffix variant.

### L4 — Positive Meniscus, Front Member of Cemented Pair D1

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +14.831177 mm.`

L4 begins the patent's `2F` subgroup and is cemented directly to L5. It is a positive low-dispersion member positioned just behind the stop. The patent explains that the two positive-negative portions of the four-element `2F` subgroup operate at different off-axis ray heights, giving the designer leverage over both axial and lateral chromatic aberration (¶0054–¶0055).

Its standalone positive power is substantial, but the behavior of the cemented D1 pair is very different from either component considered separately.

### L5 — Negative Meniscus, Rear Member of Cemented Pair D1

`nd = 1.69895, νd = 30.13. Glass: S-TIM35 (OHARA). f = -15.029575 mm.`

L5 is the first negative element in the patent's positive-negative-negative-positive `2F` sequence. It is cemented to L4 at surface 9; the data file correctly assigns that cemented interface to the downstream L5 glass.

Although L4 and L5 have isolated focal lengths of approximately +14.83 mm and -15.03 mm, their cemented pair is nearly afocal when isolated in air: D1 has a computed net focal length of approximately -2214.57 mm. This is an important distinction between standalone element power and cemented-pair power. In the full system, D1 remains optically important because it changes ray angles, chromatic balance, and aberration distribution at a stop-adjacent location even though its isolated net paraxial power is very small.

The final S-TIM35 line data are `nC = 1.69222`, `nF = 1.71542`, `ng = 1.72941`, and `dPgF = +0.0103`.

### L6 — Negative Meniscus, Front Member of Cemented Pair D2

`nd = 1.65412, νd = 39.68. Glass: S-NBH5 (OHARA). f = -42.339755 mm.`

L6 is the second negative element in the `2F` sequence and is cemented to L7. The patent attributes additional design freedom to this second negative lens, specifically noting its usefulness in reducing the chromatic difference of coma (¶0056). Its isolated negative power is comparatively weak, so its effect is better understood through the cemented D2 combination and its position within the complete `2F` group.

The data retain `nC = 1.64923`, `nF = 1.66571`, `ng = 1.67517`, and `dPgF = -0.0036` for S-NBH5.

### L7 — Biconvex Positive, Rear Member of Cemented Pair D2

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +13.093199 mm.`

L7 completes the positive-negative-negative-positive `2F` sequence. It is cemented to L6 at surface 12, where the prescription transitions into the downstream S-FPL51 medium. The isolated D2 cemented pair has a net focal length of +19.422247 mm, so unlike D1 it is a clearly positive subassembly.

The repeated use of S-FPL51 in L4 and L7 places low-dispersion positive glass on both sides of the two negative members of `2F`. This arrangement is consistent with the patent's description of using the split negative section and differing off-axis ray heights to balance axial chromatic aberration, lateral chromatic aberration, and chromatic coma (¶0054–¶0056).

### L8 — Biconvex Positive Rear Singlet with Front Asphere (`2R`)

`nd = 1.51633, νd = 64.06. Glass: L-BSL7 (OHARA). f = +36.620423 mm.`

L8 is the complete `2R` rear subgroup. The patent assigns this rear singlet two principal functions: balancing residual aberrations and controlling the exit-pupil distance (¶0057–¶0058). Example 4 uses an aspherical front surface, patent surface 14 and data surface `14A`.

The patent states that an asphere in `2R` can improve coma correction and that the front-group and rear-group aspheres can complement one another (¶0059). L8 therefore acts as a relatively weak positive finishing element whose value lies in both pupil control and final aberration balancing rather than in primary system power alone.

Its historical L-BSL7 line data match those used for L2: `nC = 1.51385`, `nF = 1.52191`, `ng = 1.52620`, and `dPgF = -0.0045`.

## Glass Identification and Selection

All five distinct active glass identities are explicitly named by the patent as OHARA materials. The final data preserve those source identities and attach line-index / partial-dispersion fields directly to each element.

| Glass | nd | νd | dPgF | Elements | Design use |
|---|---:|---:|---:|---|---|
| S-FPL51 (OHARA) | 1.49700 | 81.54 | +0.0280 | L1, L4, L7 | Very-low-dispersion negative front element and positive rear-group partners |
| L-BSL7 (OHARA) | 1.51633 | 64.06 | -0.0045 | L2, L8 | Moderate-index crown used in the second front negative and rear balancing singlet |
| S-LAH65 (OHARA) | 1.80400 | 46.57 | -0.0090 | L3 | High-index positive pre-stop singlet |
| S-TIM35 (OHARA) | 1.69895 | 30.13 | +0.0103 | L5 | Higher-dispersion negative member of D1 |
| S-NBH5 (OHARA) | 1.65412 | 39.68 | -0.0036 | L6 | Negative member of D2 with a distinct partial-dispersion signature |

The patent places particular emphasis on the glass choice in the front negative subgroup. It gives `νd > 60` as a preferred condition for those negative lenses (¶0044); both L1 at 81.54 and L2 at 64.06 satisfy that criterion. The patent also discusses anomalous partial dispersion as an additional route to secondary-spectrum control (¶0045–¶0046). The final data contain sufficient line data and `dPgF` values to discuss the palette quantitatively: S-FPL51 carries the strongest positive deviation in the modeled set at `+0.0280`, while the other glasses span smaller positive and negative deviations.

That spectral information does not imply that the complete lens is apochromatic. The patent claims reduced chromatic aberration and chromatic coma, not an APO designation, and the analysis does not promote the lens beyond what the line data and patent text support.

Two historical naming points are intentionally preserved. `L-BSL7` remains the historical OHARA `L-` family name rather than being relabeled as a modern S-BSL7 entry, and S-LAH65 remains the unsuffixed historical designation. For S-LAH65, the final data use the historical OHARA catalog row corresponding to the patent coordinates rather than borrowing line data from current S-LAH65V or S-LAH65VS variants.

## Focus Mechanism

The modeled focus status is `NO_INTERNAL_RECONSTRUCTION`. JP 2010-164839 A publishes the Example 4 infinity prescription but does not provide a focus-spacing table, moving-group trajectory, object-distance series, or magnification series from which an internal focus mechanism can be uniquely reconstructed.

Accordingly, the final data contain no focus `var` entries and no modeled close-focus optical state. The `closeFocusM = 0.01` metadata value comes from Ricoh's production specification for macro shooting distance, measured from the front of the lens. It is a product-level shooting-distance specification only; it is not treated as a principal-plane object distance and is not used to infer a group displacement.

No claim is therefore made that the production lens uses unit focus, inner focus, rear focus, or a particular floating mechanism. Any such assignment would require an additional source that constrains the actual moving optical group or groups.

## Aspherical Surfaces

Example 4 contains two aspherical surfaces, data surfaces `4A` and `14A`, corresponding to patent surfaces 4 and 14. The patent uses the standard conic-constant form (¶0075):

$$
z(h)=\frac{C h^2}{1+\sqrt{1-(1+K)C^2h^2}}+A_4h^4+A_6h^6+\cdots,
\qquad C=\frac{1}{R}.
$$

No conic-convention conversion is required. Because the model is unscaled (`s = 1.0`), the polynomial coefficients are copied at source scale; no `A_p/s^(p-1)` transformation is applied.

### Surface 4A — rear surface of L2

The patent publishes:

- `K = -0.40000`
- `A4 = -4.16841e-4`
- `A6 = -9.42561e-6`
- `A8 = -1.58154e-7`
- `A10 = -3.26524e-9`
- `A12 = -3.61500e-11`
- `A14 = +2.19580e-14`
- `A16 = +8.93836e-15`
- `A18 = -1.95337e-15`

This is the more strongly shaped of the two aspheres. Its location on the second front negative lens matches the patent's stated preference for using that surface to reduce distortion while also contributing to coma correction (¶0049). In the complete architecture it works before the long air interval to L3, so its effect is coupled to both wide-angle ray bending and the ghost-control geometry of the front subgroup.

### Surface 14A — front surface of L8

Example 4 publishes the polynomial terms:

- `A4 = -2.85929e-4`
- `A6 = +1.93947e-6`
- `A8 = -1.43395e-7`
- `A10 = +2.11542e-9`

Example 4 does not print a conic constant for surface 14. The data file uses `K = 0` as an explicit modeling inference. This is consistent with the patent's standard equation and with Example 2, where the corresponding surface explicitly prints `K = 0.0`; no polynomial coefficient is imported from another example. The authored `A12` and `A14` entries are zero because Example 4 provides no higher non-zero terms.

The patent assigns the rear asphere primarily to coma improvement and describes it as complementary to the front asphere (¶0059). The final model preserves that two-asphere arrangement without adding any unreported surface deformation.

## Chromatic Correction Strategy

The lens uses dispersion contrast in both the front negative subgroup and the four-element `2F` rear subgroup. In `1F`, both negative elements satisfy the patent's preferred `νd > 60` criterion, reducing the tendency of the strongly off-axis front rays to generate lateral chromatic error (¶0044–¶0046). L1's S-FPL51 also supplies a comparatively large positive `dPgF` in the final catalog data.

Behind the stop, the design alternates low-dispersion S-FPL51 positive elements with more dispersive negative elements. D1 pairs S-FPL51 with S-TIM35; D2 pairs S-NBH5 with S-FPL51. The patent explicitly links the different ray heights at the two positive-negative portions of `2F` to simultaneous control of axial and lateral chromatic aberration and credits the second negative element with additional freedom over chromatic coma (¶0055–¶0056).

The resulting strategy is therefore distributed rather than concentrated in a single achromat. The front group controls field-dependent color before the stop, while the cemented rear pairs exploit both dispersion contrast and position-dependent ray height. The data support this description through explicit `nC`, `nF`, `ng`, and `dPgF` fields on every element.

## Conditional Expressions

The patent gives five principal conditional expressions plus the supplementary condition (1A). Recalculation from the final prescription reproduces the published Example 4 values to the precision of the source table.

| Condition | Strict patent range | Computed from final data | Patent Table 8 | Literal result |
|---|---|---:|---:|---|
| (1) `A_1F-1R / D_1` | `0.5 < x < 0.7` | 0.598125 | 0.598 | Pass |
| (2) `f1_2 / f1_1` | `0.4 < x < 0.8` | 0.685462 | 0.685 | Pass |
| (3) `R22 / R12` | `0.4 < x < 0.8` | 0.662667 | 0.663 | Pass |
| (4) `H12 / R12` | `0.5 < x < 0.8` | **0.800000** | **0.800** | **Fail at strict upper boundary** |
| (5) `(R21-R12)/(R21+R12)` | `0.2 < x < 0.4` | 0.335047 | 0.335 | Pass |
| (1A) `A_1-2 / D_1` | `0.05 < x < 0.3` | 0.140000 | 0.140 | Pass |

Condition (4) is a direct source contradiction rather than a transcription error. Claim 3 / ¶0017 uses the strict upper bound `< 0.8`, while Example 4 gives `H12 = 6.00 mm` and `R12 = 7.500 mm`, producing exactly `0.800000` at source precision; Table 8 itself prints `0.800`. The model does not alter either source value to force compliance.

## Image Stabilization

Ricoh's GR DIGITAL IV documentation identifies its vibration correction as image-sensor shift. The production lens name therefore carries no optical-stabilizer suffix, and patent Example 4 contains no decentered or movable stabilization lens group. The final optical data add none.

## Verification Summary

The final data file separates marketed values from exact modeled values. The production metadata use 6.0 mm and f/1.9, while independent paraxial recomputation from the authored surfaces gives `EFL = 6.002506 mm` and the modeled aperture is `F/1.99`. The physical stop semi-diameter is not printed by the patent; it is inferred from the actual prescription and F/1.99 as `3.305882 mm`. The stop axial position itself is published by the patent.

The patent's `H` column is treated as maximum ray-height evidence rather than as a list of mechanical clear apertures. The authored surface semi-diameters are therefore modeling inferences based on the published `H` values, the Example 4 optical section, the F/1.99 pupil solution, and ray / geometry containment checks. They are not represented as patent-published lens diameters.

The plane-parallel filter / cover plate `F` at patent surfaces 16–17 is omitted from the active LensVisualizer prescription. A first-order check retaining the patent's 1.50 mm, `n = 1.50000` plate places the paraxial image `0.604199 mm` behind its rear face. Removing the plate therefore gives an air-equivalent surface-15 rear spacing of `7.08 + 1.50/1.50000 + 0.604199 = 8.684199 mm`. This gives a normalized first-surface-to-image track of `45.944199 mm`. The front principal plane lies `13.878076 mm` imageward of surface 1, and the rear principal plane lies `2.681693 mm` imageward of surface 15; the latter plus the `6.002506 mm` EFL reproduces the normalized BFD.

Sequential height/reduced-angle tracing and an independent ABCD matrix product agree to machine precision for the final arrays (`max |Δ| = 0`). The same data produce a Petzval sum of `+0.0159871 mm^-1`. These are computed model results, not values printed by the patent.

No scaling, close-focus reconstruction, optical stabilization group, dummy surface, filter element, or synthetic cement layer is introduced. The only source omission resolved by inference is the missing `K` for surface 14A; it is carried as `K = 0` and disclosed above.

## Sources and References

1. **JP 2010-164839 A**, Ricoh Company, Ltd., Yoshifumi Sudoh, published 2010-07-29. Example 4 prescription and asphere data are in Table 7 / ¶0087–¶0089; conditional values are in Table 8 / ¶0090–¶0091; architectural discussion is in ¶0027–¶0059; the filter / cover plate `F` is described in ¶0067.
2. **Ricoh GR DIGITAL IV specifications**, Ricoh Imaging: https://www.ricoh-imaging.co.jp/english/products/gr-digital4/specs.html
3. **Ricoh GR DIGITAL IV / GR DIGITAL III comparison**, Ricoh Imaging: https://www.ricoh-imaging.co.jp/english/r_dc/support/faq/bp/grd4/gr04000.html
4. **GR DIGITAL IV lens-name-ring service**, Ricoh Imaging: https://www.ricoh-imaging.co.jp/japan/dc/support/repair/customized/grd4.html
5. **OHARA optical-glass catalog**, current catalog landing page: https://www.ohara-inc.co.jp/en/product/catalog/
6. **OHARA Material Property Catalog (2022)**, official obsolete-glass data used to verify the historical L-BSL7 and S-LAH65 Sellmeier rows: https://www.ohara-inc.co.jp/wp-content/uploads/2019/12/OHARA_MaterialPropertyCatalog_202207.txt
