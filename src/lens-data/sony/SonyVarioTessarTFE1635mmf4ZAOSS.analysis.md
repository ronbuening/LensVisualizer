## Patent Reference and Design Identification

**Patent:** JP 2015-166834 A\
**Application Number:** JP2014-041750\
**Filed:** 2014-03-04\
**Published:** 2015-09-24\
**Inventor:** Masaharu Hosoi (細井 正晴)\
**Applicant:** Sony Corporation\
**Title:** Zoom lens and imaging apparatus (ズームレンズおよび撮像装置)\
**Embodiment analyzed:** Numerical Example 1 / 第1の実施の形態

The prescription is the first numerical example of Sony's four-group wide-angle zoom patent. The patent itself does not name a commercial lens. In this data pair, Example 1 is correlated to the **SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS** (SEL1635Z). That correlation is an author/modeling identification rather than a statement made by Sony in the patent.

Several independent features converge on that identification:

1. The patent gives design focal lengths of 16.48, 24.07, and 33.95 mm with F-numbers of 4.07, 4.08, and 4.09. Sony markets the SEL1635Z as a constant-F4 16-35 mm zoom.
2. Numerical Example 1 contains 12 physical lenses in 10 air-separated lens units, matching Sony's published 12-element / 10-group production specification.
3. Five physical lenses in the patent carry one or more aspherical surfaces: L11, L12, L22, L31, and L44. Sony specifies five aspherical elements for the production lens. The patent uses eight aspherical surfaces in total.
4. Three positive elements have the very-high authored Abbe-number values 81.5 or 81.6: L23, L42, and L43. That count is consistent with Sony's statement that the production lens uses three ED elements, although the patent does not identify those rows as production ED melts.
5. The patent assigns optical image stabilization to lateral motion of L21 (JP ¶0042), while Sony specifies Optical SteadyShot for the SEL1635Z.
6. Table 2 gives half-fields of 54.04°, 41.55°, and 31.80°, corresponding to full fields of 108.08°, 83.10°, and 63.60°. Sony's rounded 35 mm-format specification is 107°-63° at the focal-range endpoints.
7. The patent was filed in March 2014, before Sony publicly presented the SEL1635Z at Photokina 2014.

The prescription is retained at its native dimensions. No uniform scale factor is applied: the marketed 16-35 mm endpoints are not related to the patent's 16.48-33.95 mm endpoints by one common multiplier. Consequently, no radii, spacings, image-plane coordinates, or aspherical coefficients are rescaled, and no `A_p / s^(p-1)` coefficient transformation is performed.

Two source issues require explicit separation from the authored model. First, JP ¶0033 prints an aspherical-sag numerator proportional to `y²c²`; that expression is dimensionally inconsistent. The computation and data use the standard `c·y²` numerator while retaining the patent's conic constant without conversion. Second, JP ¶0032 explicitly defines both refractive coordinates at the d line, even though several printed `n` values sit closer to modern catalog `n_e`. The patent's stated d-line convention controls: the raw pairs are preserved, no `indexReference: "e"` assignment is made, and a catalog curve is used only when its d-line pair passes the project's existing compatibility guard.

The selected Japanese publication controls the transcription. In particular, surface 3 has the 1.800 mm thickness visibly printed in JP Table 1; a discrepant family text transcription is not substituted. Table 2's numerical F-numbers control over slightly inconsistent figure annotations.

The patent does not publish clear apertures or surface semi-diameters. Every `sd` in the data file, including the maximum stop envelope, is therefore a modeling quantity derived from traced ray bundles and geometry checks rather than a patent value. A high-resolution Figure 1 review enlarged the visibly broad L13/L14 and compact GR2-GR4 rims while retaining the project's edge-thickness, aspheric-slope, and shared-gap limits. The axial stop placement itself is a source fact: JP ¶0043 places the aperture stop between L21 and L22. No sensor cover glass, filter, inactive dummy or flare-cutter plane, or mechanical component is included, and Example 1 contains no omitted rear plate requiring an air-equivalent back-focus correction.

## Optical Architecture

Numerical Example 1 is a four-moving-group wide-angle zoom with power sequence **negative-positive-positive-negative** (JP ¶0035). The data file's `groupCount: 10` refers to the ten air-separated lens units used by the production-style element/group count; it should not be confused with the patent's four functional zoom groups GR1-GR4.

The architecture is:

| Functional group | Composition | Computed group focal length | Principal function in the patent/model |
|---|---|---:|---|
| GR1 | L11, L12, L13, L14 | -30.8337 mm | Negative front group establishing the wide-angle front power distribution |
| GR2 | L21, stop, cemented L22+L23 | +53.8868 mm | Positive group containing the lateral OSS element and the aperture stop region |
| GR3 | L31 | +50.5398 mm | Single positive internal focusing group |
| GR4 | cemented L41+L42, L43, L44 | -75.7906 mm | Negative rear group central to the patent's short-back-focus strategy |

All four groups move axially during zooming from wide to tele (JP ¶0040). GR3 additionally translates by itself for focusing from infinity toward near distance (JP ¶0041). L21 is a separate lateral-motion stabilization element within GR2 (JP ¶0042).

The front group is net negative even though L14 is a strong positive biconvex element. This distributes the front-group power over three negative components and one positive component instead of concentrating the full divergence in a single lens. The rear group is also net negative, but its internal sequence is negative-positive-positive-negative. The patent specifically attributes this rear arrangement to the simultaneous requirements of short back focus, lateral-color control, and coma control (JP ¶0018, ¶0028).

By the project's geometric classification, the design is retrofocus at every published zoom state because the published back focal distance exceeds the computed EFL at wide, mid, and tele. It is not telephoto under the corresponding project definition because total track divided by EFL is greater than one at all three states. These are computed classifications; the patent itself describes the lens as a compact wide-angle zoom rather than using those project labels.

The physical lens count is 12. The `elements` array has 13 modeling entries because L12 is a hybrid composite: its glass substrate and its thin bonded aspheric resin layer are optically distinct media. That extra modeling entry does not increase the physical patent element count.

## Element-by-Element Analysis

The first line of each subsection reproduces the authored `nd` and `νd` schema fields and the data file's glass annotation. Catalog names are qualified coefficient proxies, not claims about Sony's production supplier or melt. Focal lengths listed for individual entries are independently recomputed standalone powers in air. Cemented or composite net powers are stated separately where applicable.

### L11 — Negative Meniscus with Two Aspheres

**nd = 1.77173, νd = 49.2. Glass: `M-TAF1 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone f = -29.1827 mm.**

L11 is the first and strongest front negative component of GR1. The patent describes it as a negative meniscus convex toward the object, with both surfaces aspherical (JP ¶0036). Its paraxial power is therefore distinctly negative before the rest of GR1 is considered.

The paired 1A/2A aspheres sit where ray heights are largest in the prescription. Their placement gives the designer substantial surface-shape freedom before the beam reaches the more strongly curved following lenses. It is reasonable to interpret that placement as part of the wide-field aberration strategy, but the patent does not assign a unique aberration term to L11 alone.

### L12 — Hybrid Negative Meniscus: Glass Substrate plus Bonded Aspheric Resin

**L12 substrate: nd = 1.83945, νd = 42.7. Glass: `Unmatched (mixed-coordinate patent row; 835427 class)`. Standalone substrate f = -54.7245 mm.**\
**L12 resin: nd = 1.53699, νd = 41.7. Glass: `Unmatched (aspheric resin, patent-only optical constants)`. Standalone resin-layer f = +443.5929 mm.**

The patent describes L12 as a negative meniscus whose spherical image-side surface carries an adhered aspherical resin layer (JP ¶0036). The data therefore represents L12 with two optical-material entries, `L12g` and `L12r`, joined as hybrid unit H1. This is a modeling decomposition of one physical lens.

The glass substrate is substantially negative in isolation. The 0.150 mm resin layer is only weakly positive paraxially; its principal modeled significance is the non-spherical outer surface 5A rather than a large standalone power. When the glass and resin are evaluated together in their actual prescription media, the hybrid composite has a computed net focal length of **-62.1695 mm**.

The patent does not identify a commercial resin formulation. Accordingly, the resin is intentionally left `Unmatched` and no inferred mineral-glass equivalent is used.

### L13 — Negative Meniscus

**nd = 1.80831, νd = 46.5. Glass: `Unmatched (mixed-coordinate patent row; 804466 class)`. Standalone f = -102.7999 mm.**

L13 is the third negative component of GR1. The patent describes it as a negative meniscus concave toward the object (JP ¶0036). Its standalone negative power is weaker than that of L11 or the L12 composite, so it acts as a distributed correction/power component within the front group rather than as the primary diverging lens.

No surface on L13 is aspherical. Its contribution must therefore be interpreted through its spherical curvatures, spacing, and glass coordinate pair rather than through an independently adjustable aspheric departure.

### L14 — Biconvex Positive

**nd = 2.00912, νd = 29.1. Glass: `Unmatched (mixed-coordinate patent row; 001291 dense-flint class)`. Standalone f = +48.1494 mm.**

L14 is the positive rear component of the otherwise negative GR1 (JP ¶0036). Its strong positive power partially offsets the three preceding negative lenses while leaving the complete group at approximately -30.83 mm.

The authored Abbe number is much lower than those of the very-low-dispersion positive elements farther back in the system. That contrast is relevant to the first-order chromatic power distribution, but it does not establish a production melt or patent partial-dispersion value.

### L21 — Positive Meniscus / OSS Element

**nd = 1.57124, νd = 56.0. Glass: `BAC4 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone f = +148.1107 mm.**

L21 is the front lens of positive GR2. It is a relatively weak positive meniscus in standalone paraxial power. The aperture stop lies immediately behind it, before L22 (JP ¶0043).

Its most distinctive source-defined function is image stabilization. JP ¶0042 specifies that L21 is shifted perpendicular to the optical axis when camera shake occurs. The data models the centered prescription only; it does not author a decenter magnitude because the patent does not publish one for Example 1.

### L22 + L23 — Cemented GR2 Doublet D1

**L22: nd = 1.74688, νd = 49.3. Glass: `Unmatched (mixed-coordinate patent row; 74349x lanthanum class)`. Standalone f = -52.5347 mm.**\
**L23: nd = 1.49845, νd = 81.5. Glass: `S-FPL51 (OHARA catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone f = +30.8270 mm.**

The patent describes L22 as a negative meniscus with an aspherical object-side surface and L23 as a positive meniscus, cemented together (JP ¶0037). The cemented interface is surface 14, which correctly carries the downstream L23 material in the data model.

The two isolated powers should not be mistaken for the behavior of the cemented unit. In the actual prescription media, D1 has a computed net focal length of **+85.9450 mm**. The doublet therefore remains positive overall despite L22's negative standalone contribution.

L23's very-high authored Abbe-number value is consistent with the production lens's use of ED material, but exact production-glass identity is not established. The compatible S-FPL51 curve supplies a qualified spectral proxy; it does not turn the production correlation into a melt identification or establish patent-authored partial dispersion.

### L31 — Biconvex Positive Focus Lens with Two Aspheres

**nd = 1.48914, νd = 70.3. Glass: `J-FK5 (HIKARI catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone f = +50.5398 mm.**

L31 is the sole element of GR3 (JP ¶0038). Its standalone focal length is therefore also the focal length of the complete focusing group to the precision of the paraxial model.

Both surfaces, 16A and 17A, are aspherical. This is significant because GR3 moves during focusing and also changes axial position with zoom. Giving the translating focus lens two aspherical surfaces provides shape freedom at the element whose conjugates vary with both controls. That statement is a modeling interpretation of the architecture; the patent does not isolate a numerical aberration contribution for L31.

The close-focus states in the data file move L31 toward the object relative to its infinity position. Those positions are constrained reconstructions described in the Focus Mechanism section, not values published in the patent.

### L41 + L42 — Cemented GR4 Doublet D2

**L41: nd = 1.80831, νd = 46.5. Glass: `Unmatched (mixed-coordinate patent row; 804466 class)`. Standalone f = -21.0194 mm.**\
**L42: nd = 1.49845, νd = 81.6. Glass: `S-FPL51 (OHARA catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone f = +52.6802 mm.**

L41 and L42 form the first cemented unit in GR4 (JP ¶0039). L41 is a strong negative meniscus and L42 is a positive meniscus. Their in-prescription cemented net focal length is **-32.6942 mm**, so D2 remains a strongly negative unit despite the positive L42 component.

The high authored Abbe-number value of L42 places a low-dispersion positive component directly inside the rear negative group. This arrangement is consistent with the patent's explicit statement that positive lenses in GR4 are used to improve lateral chromatic aberration and coma (JP ¶0018, ¶0028). The statement is group-level; it does not establish a unique aberration share for L42 alone.

### L43 — Biconvex Positive

**nd = 1.49845, νd = 81.6. Glass: `S-FPL51 (OHARA catalog-equivalent coefficient proxy; production supplier unspecified)`. Standalone f = +22.9585 mm.**

L43 is the strongest positive element in GR4 by standalone focal length and is the most image-side positive lens of that group. The patent's condition (c) is defined specifically from this lens's two radii, `r1p = 20.480 mm` and `r2p = -23.194 mm` (JP ¶0024-¶0026).

The resulting computed shape factor is -0.0621422, near the center of the allowed and preferred ranges. The patent explains that pushing this shape too far in either direction increases off-axis ray deviation and coma at one of the two surfaces. L43 is therefore not merely a positive-power insert; its bending is an explicit design variable in the claimed aberration balance.

Its authored `νd` slot is 81.6, again consistent with the production lens's three-ED-element count, but no exact melt or partial-dispersion behavior is asserted.

### L44 — Rear Biconcave Negative with Two Aspheres

**nd = 1.77767, νd = 47.1. Glass: `Unmatched (mixed-coordinate patent row; 774472 lanthanum-flint class)`. Standalone f = -32.1414 mm.**

L44 is the final optical element of GR4 and of the complete prescription. The patent describes it as a biconcave lens with both surfaces aspherical (JP ¶0039).

The rear negative lens has a direct architectural role in the patent. JP ¶0028 states that the image-side negative lens bends off-axis rays so that the back focus can be shortened. Because L44 is the final negative member of the Example 1 sequence, that statement applies directly to this element's position in the design.

The paired rear aspheres, 23A and 24A, provide additional shape freedom in the same group whose power ratio to GR3 is central to the patent's compactness condition. No sensor cover or other powered plate follows 24A in the authored model.

## Glass Identification and Selection

JP ¶0032 explicitly states that the refractive-index and Abbe-number columns are d-line coordinates at 587.6 nm. That source convention controls even though several printed indices happen to lie unusually close to modern e-line values. The prescription therefore preserves the patent numbers in the historical `nd`/`vd` schema slots and does not set `indexReference: "e"`.

The catalog audit found qualified d-line coefficient proxies for six of the twelve mineral-glass media. Every selected curve remains inside the standard `Δn ≤ 0.003` and `Δν ≤ 2` compatibility guard. These are supplier-neutral optical equivalents for chromatic tracing: the vendor in the catalog name identifies the coefficient source, not Sony's production supplier. The other six mineral rows and the bonded resin remain explicitly unresolved.

| Element(s) | Authored nd | Authored νd | Data-file glass annotation | Interpretation limit |
|---|---:|---:|---|---|
| L11 | 1.77173 | 49.2 | `M-TAF1 (...)` | Qualified d-line proxy; Δn = +0.00077, Δν = +0.26 |
| L12 substrate | 1.83945 | 42.7 | `Unmatched (... 835427 class)` | Class-level only |
| L12 resin | 1.53699 | 41.7 | `Unmatched (aspheric resin, patent-only optical constants)` | No mineral-glass match |
| L13, L41 | 1.80831 | 46.5 | `Unmatched (... 804466 class)` | Class-level only |
| L14 | 2.00912 | 29.1 | `Unmatched (... 001291 dense-flint class)` | Class-level only |
| L21 | 1.57124 | 56.0 | `BAC4 (...)` | Qualified d-line proxy; Δn = -0.00241, Δν = +0.04 |
| L22 | 1.74688 | 49.3 | `Unmatched (... 74349x lanthanum class)` | Class-level only |
| L23 | 1.49845 | 81.5 | `S-FPL51 (...)` | Qualified d-line proxy; Δn = -0.00145, Δν = +0.05 |
| L31 | 1.48914 | 70.3 | `J-FK5 (...)` | Qualified d-line proxy; Δn = -0.00165, Δν = +0.01 |
| L42, L43 | 1.49845 | 81.6 | `S-FPL51 (...)` | Qualified d-line proxy; Δn = -0.00145, Δν = -0.05 |
| L44 | 1.77767 | 47.1 | `Unmatched (... 774472 lanthanum-flint class)` | Class-level only |

No element carries patent-authored `nC`, `nF`, `ng`, or `dPgF`. Six of thirteen modeled media now resolve to validated coefficient curves; the six unresolved mineral rows and L12 resin continue to use the Abbe fallback. The proxy curves improve catalog color completeness without supporting a claim of apochromatic correction or a specific production secondary spectrum.

Sony's production specification states that the SEL1635Z uses three ED elements. The patent/data correlation makes L23, L42, and L43 the natural counterparts because they are exactly the three physical lenses with authored Abbe-number values near 81.5-81.6. That mapping is a correlation inference, not an explicit patent labeling of those elements as Sony production ED glass.

## Focus Mechanism

The source-defined focus mechanism is simple: GR3, consisting only of L31, moves axially for focusing from infinity toward near distance (JP ¶0041). The patent publishes no finite-object spacing table for Numerical Example 1, so it does not supply close-focus values for D15 and D17.

The data file therefore uses the declared focus status **CONSTRAINED_RECONSTRUCTION**. Sony specifies a 0.28 m minimum focus distance for the SEL1635Z, and Sony's support documentation defines minimum shooting distance as subject-to-image-sensor distance rather than working distance from the front element. At each of the three zoom positions, one variable is solved: GR3 is translated while D15+D17 is conserved, matching the single-moving-group mechanism. The finite-object system is solved to satisfy the paraxial imaging condition at a 280 mm object-to-image-plane distance.

| Zoom state | D15 at infinity | D15 at reconstructed close | D17 at infinity | D17 at reconstructed close | GR3 shift toward object | Computed |m| |
|---|---:|---:|---:|---:|---:|---:|
| Wide, 16.48 mm | 5.491 mm | 4.465987 mm | 2.300 mm | 3.325013 mm | 1.025013 mm | 0.098674× |
| Mid, 24.07 mm | 5.300 mm | 3.632748 mm | 2.491 mm | 4.158252 mm | 1.667252 mm | 0.137728× |
| Tele, 33.95 mm | 4.703 mm | 2.024823 mm | 3.087 mm | 5.765177 mm | 2.678177 mm | 0.197204× |

The tele reconstruction predicts approximately 0.1972× magnification, compared with Sony's rounded 0.19× production specification. That agreement is a cross-check on the constrained model, not evidence that Sony published the reconstructed D15/D17 values.

No motor type or detailed production focusing actuator is inferred from the patent. The analysis is limited to the source-defined moving group and the disclosed paraxial reconstruction.

## Aspherical Surfaces

Numerical Example 1 uses eight aspherical surfaces on five physical lenses: 1A and 2A on L11, 5A on the bonded resin surface of L12, 13A on L22, 16A and 17A on L31, and 23A and 24A on L44 (JP ¶0046).

JP ¶0033 defines radial height `y`, axial sag `x`, paraxial curvature `c`, and conic constant `κ`. The printed square-root term contains `(1+κ)c²y²`, so the tabulated `κ` is already the standard conic constant `K`; no `K = κ - 1` or similar conversion is appropriate. The printed numerator, however, contains the dimensionally invalid `y²c²`. The model uses the standard form:

`x = c y² / [1 + sqrt(1 - (1+K)c²y²)] + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹²`

The patent publishes coefficients only through A12. The data file includes `A14: 0` solely because the current schema requires an A14 field; that zero is a modeling/schema value, not a patent coefficient.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 1A | -1.0000 | 1.5215e-05 | -2.4220e-08 | 2.8219e-11 | -1.9560e-14 | 5.5900e-18 |
| 2A | -0.8006 | 5.8285e-06 | 2.3793e-08 | -4.9708e-11 | 1.1524e-13 | 0 |
| 5A | -0.7179 | 2.1334e-05 | 1.2458e-08 | -1.6800e-10 | 4.0809e-13 | -5.8401e-16 |
| 13A | 0 | -8.6923e-06 | -2.5058e-08 | 1.1660e-10 | -5.7880e-13 | 0 |
| 16A | 0 | 1.0633e-05 | -3.6480e-08 | 8.8691e-10 | -1.1156e-11 | 0 |
| 17A | 0 | -1.0859e-06 | -7.5619e-08 | 8.8706e-10 | -1.1124e-11 | 0 |
| 23A | 0 | 2.1652e-05 | -5.8231e-07 | 2.9815e-09 | -1.2507e-11 | 0 |
| 24A | 0 | 6.1977e-05 | -4.6543e-07 | 2.6378e-09 | -7.1537e-12 | 0 |

The surface placement distributes aspheric freedom across the entire optical train rather than concentrating it in one region. The two L11 surfaces operate at the front of the negative wide-angle group; 5A is a thin hybrid-composite resin asphere; 13A is on the negative member immediately behind the stop; 16A/17A are both surfaces of the translating focus lens; and 23A/24A are the two surfaces of the final rear negative element. This distribution is consistent with controlling aberration changes across wide field, zoom, and focus, but the patent does not provide a per-surface aberration budget and none is invented here.

Because the patent publishes no clear-aperture table, no asphere departure in the data file is a patent clear-aperture value. Independent geometry calculation gives polynomial departures from the corresponding conic base only at the final modeled semi-diameters. Representative model values are +3.308263 mm at 1A for `sd = 26.5 mm`, +1.741264 mm at 2A for `sd = 19.0 mm`, −0.428497 mm at 23A for `sd = 11.1 mm`, and +0.475075 mm at 24A for `sd = 11.1 mm`.

No scale is applied to the prescription, so the aspherical coefficients above are copied in the patent's native dimensional system. There is no coefficient scaling or focal-length normalization.

## Chromatic Correction Strategy

The patent's chromatic discussion is concentrated in GR4. JP ¶0018 states that providing two or more positive lenses in the fourth group improves lateral chromatic aberration and coma generated by that group. JP ¶0028 further explains that placing the two positive lenses between negative lenses improves those aberrations while the rear negative lens helps shorten back focus.

Example 1 implements that concept literally as L41(-) + L42(+) + L43(+) + L44(-), with L41/L42 cemented. The two positive elements L42 and L43 both carry the authored `νd` value 81.6. The GR2 doublet adds another positive, L23, at 81.5. Those three positions align numerically with Sony's three-ED-element production specification.

The power pairing is also distributed rather than concentrated. In GR2, L22 is -52.5347 mm alone and L23 is +30.8270 mm alone, but their cemented net is +85.9450 mm. In GR4, L41 is -21.0194 mm alone and L42 is +52.6802 mm alone, while their cemented net is -32.6942 mm. These cemented net values describe the actual paired units more meaningfully than treating each standalone focal length as an independent lens in air.

No stronger spectral conclusion is justified. The data file has no exact glass resolution, no line indices, and no `dPgF`. Accordingly, the lens is discussed as using a strong low-/high-dispersion power distribution and production-correlated ED positions, not as an APO design or as a quantified secondary-spectrum correction.

## Aberration Correction Strategy and Design Philosophy

The central patent problem is compactness in a mirrorless wide-angle zoom. The background notes that mirrorless cameras permit shorter back focus than reflex systems and that earlier negative-positive-positive-negative zooms did not make GR4 sufficiently negative to shorten the rear distance as desired (JP ¶0002-¶0006).

The claimed solution strengthens the negative role of GR4 while constraining its relationship to the positive GR3. This is not done by a single strong rear negative lens alone. Example 1 uses a four-element GR4 with a negative cemented front unit, two positive components in total, and an aspheric rear negative lens. The patent's conditions (a), (b), and (c) then bound the power balance and the bending of the most image-side positive lens.

Aspheric surfaces are placed at four strategically different locations: the high-ray-height front group, the hybrid L12 rear surface, the stop-adjacent GR2 doublet, the moving focus lens, and the final rear negative lens. That architecture gives the design independent shape variables in the regions most affected by field angle, pupil position, focus motion, and rear-ray bending. This is an interpretation of the prescription topology rather than a patent-provided aberration decomposition.

The modeled first-order result confirms the intended short-back-focus architecture without requiring a hidden cover plate or dummy surface. Published BFD remains greater than EFL, so the design meets the project's retrofocus criterion at every sampled focal length even though the patent's objective is to reduce BFD relative to earlier mirrorless wide-angle zooms.

## Conditional Expressions

The patent places three principal numerical conditions on the architecture. The values below are recomputed from the final TypeScript arrays rather than copied from the rounded summary table.

### Condition (a): GR3 / GR4 power ratio

`-2.0 < f3/f4 < -0.35`

Preferred range (JP ¶0020):

`-1.7 < f3/f4 < -0.43`

With computed group focal lengths `f3 = +50.5398 mm` and `f4 = -75.7906 mm`, Example 1 gives:

`f3/f4 = -0.6668344`

It satisfies both the claim range and the preferred range. The patent explains that making GR4 too negative increases its aberrations, particularly lateral chromatic and coma, while making it insufficiently negative fails to shorten back focus enough (JP ¶0019).

### Condition (b): GR2 / GR3 power ratio

`0.4 < f2/f3 < 1.5`

Preferred range (JP ¶0023):

`0.44 < f2/f3 < 1.35`

With `f2 = +53.8868 mm` and `f3 = +50.5398 mm`:

`f2/f3 = +1.0662242`

It satisfies both ranges. The patent links this balance to controlling zoom-dependent spherical aberration and the spherical/axial-color burden assigned to GR3 (JP ¶0022).

### Condition (c): shape of the most image-side positive lens in GR4

`-0.4 < (r1p+r2p)/(r1p-r2p) < 0.4`

Preferred range (JP ¶0026):

`-0.3 < (r1p+r2p)/(r1p-r2p) < 0.3`

For L43, `r1p = +20.480 mm` and `r2p = -23.194 mm`, giving:

`(r1p+r2p)/(r1p-r2p) = -0.0621422`

Again, both ranges pass. The patent explains that excessive bending toward either surface increases off-axis ray deviation and coma (JP ¶0025).

## Image Stabilization

Image stabilization is source-defined rather than inferred. JP ¶0042 identifies L21, the first lens in GR2, as the vibration-compensation lens and specifies translation perpendicular to the optical axis when shake occurs.

The production SEL1635Z is likewise specified by Sony as having Optical SteadyShot. This is one of the independent features supporting the selected production correlation. The patent does not publish a stabilization decenter range for Numerical Example 1, and the data file does not invent one. The centered sequential prescription therefore represents the nominal optical axis; stabilization motion is described but not parameterized as a user control.

No claim is made that the patent's exact actuator, suspension, or control implementation is identical to the production mechanism. The correlation is at the optical-function level: a laterally shifted L21-type element in the patent and an OSS production lens.

## Verification Summary

The final data file was quantitatively re-evaluated from its own TypeScript arrays. Sequential height/reduced-angle tracing and an independent ABCD construction agree to better than `1e-12` in every matrix coefficient at the three published zoom states.

| State | EFL from final data | Patent f | Difference | BFD from final data | Patent d24 | Difference |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 16.481323 mm | 16.48 mm | +0.001323 mm | 25.897488 mm | 25.839 mm | +0.058488 mm |
| Mid | 24.068920 mm | 24.07 mm | -0.001080 mm | 33.922156 mm | 33.876 mm | +0.046156 mm |
| Tele | 33.954895 mm | 33.95 mm | +0.004895 mm | 43.717947 mm | 43.762 mm | -0.044053 mm |

The EFL agreement is at the precision expected from the patent's printed radii, thicknesses, and indices. The BFD residuals are approximately 0.04-0.06 mm and are retained rather than removing source-precision differences by altering a table value.

The structured endpoint `focalLengthDesign` values are the independently recomputed EFLs, 16.481322652906 mm and 33.954895472609 mm. The rounded 16.48 / 24.07 / 33.95 mm values remain the patent Table 2 zoom-position labels and are not substituted for the computed design metadata.

Surface-by-surface Petzval, computed as `φ/(n·n′)`, sums to **+0.002162540909 mm⁻¹** using the raw authored patent indices. This is a computed design quantity rather than a patent-published number.

The final model also reproduces the patent's rounded group focal lengths to within 0.01 mm. The independently recomputed condition values are -0.6668344, +1.0662242, and -0.0621422 for conditions (a), (b), and (c), respectively; all claim and preferred ranges pass.

The patent does not publish semi-diameters, so the data's clear-aperture model was checked adversarially at wide, mid, and tele, for both infinity and reconstructed close focus. The Figure 1 rim review enlarged L13/L14 and the GR2-GR4 elements while preserving the source-shaped steps and the stricter local geometry floors. The independently checked local geometry has a minimum modeled edge thickness of **0.244217 mm** in the L12 resin layer, a maximum actual aspheric rim-slope angle of **55.5444°** at 2A, and a worst shared-gap sag intrusion of **0.898443×** the gap at 2A→3 against the 0.90 limit. The project surface-domain and image-circle audits pass for the final set.

The physical stop radius is not published. Using the exact final-data EFL and the per-zoom design F-numbers gives operational wide-open stop radii of approximately **6.535253, 7.602985, and 8.958842 mm** at wide, mid, and tele. The authored `STO.sd = 8.97 mm` is a modeled maximum envelope with small clearance, not a source iris diameter.

The focus reconstruction satisfies the 280 mm object-to-image imaging condition at all three zoom states while preserving D15+D17. Its tele magnification of 0.197204× differs by +0.007204× from Sony's rounded 0.19× specification. The close-focus positions remain model-derived and are not represented as published patent states.

## Sources and References

1. **JP 2015-166834 A**, Sony Corporation, Masaharu Hosoi, filed 2014-03-04, published 2015-09-24. Numerical Example 1, especially ¶0032-¶0049 and Tables 1-4.
2. **Sony SEL1635Z specifications**, Sony: https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel1635z/specifications — production mount, format, focal range, element/group count, aperture, angle of view, 0.28 m minimum focus, 0.19× maximum magnification, seven blades, and Optical SteadyShot.
3. **Sony Vario-Tessar T* FE 16-35mm F4 ZA OSS product page**, Sony Electronics: https://electronics.sony.com/imaging/lenses/full-frame-e-mount/p/sel1635z — five aspherical elements and three ED elements; production model identity.
4. **Sony Photokina 2014 press release**, Sony Group: https://www.sony.com/en/SonyInfo/News/Press/201409/14-087/ — contemporaneous SEL1635Z product naming, E-mount identification, and ED-glass statement.
5. **Sony support: Macro lenses**, Sony USA: https://www.sony.com/electronics/support/articles/00268247 — defines minimum shooting distance as the distance from the subject to the image-sensor surface, used only to normalize the constrained 0.28 m focus reconstruction.
6. **OHARA optical-glass catalog / pocket catalog**, OHARA: https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf — independent nd/νd/ne coordinate checks for representative glass classes.
7. **SCHOTT Optical Glass data downloads**, SCHOTT: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads — independent catalog-coordinate checks for N-BAK4, N-LAF35, N-FK5, and N-PK52A-class materials.
8. **HIKARI optical-glass catalog**, HIKARI: https://www.hikari-g.co.jp/optical_glass/catalog/ — independent coordinate check for the J-FK5 / 487703 class.
9. **HOYA optical-glass data downloads**, HOYA Optics: https://www.hoya-opticalworld.com/english/datadownload/index.html — cross-reference and class-code checks.
10. **SUMITA optical-glass / precision-molding material data**, SUMITA Optical Glass: https://www.sumita-opt.co.jp/en/products/preform.html — low-dispersion class cross-check including K-PFK80.
11. **CDGM optical-glass database**, Chengdu Guangming Optical & Electronic: https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=18&url=database — cross-vendor class checks used only to test coordinate consistency; no CDGM melt is asserted as the production glass.
