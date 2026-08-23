# CANON RF 70-200mm f/4 L IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2021/0033835 A1\
**Application Number:** US 16/931,022\
**Priority:** JP 2019-138892, July 29, 2019\
**Filed:** July 16, 2020\
**Published:** February 4, 2021\
**Inventor:** Makoto Nakahara\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *Zoom Lens and Optical Apparatus*\
**Embodiment analyzed:** Numerical Example 1 / Example 1

The prescription transcribed in the data file is Numerical Example 1 of US 2021/0033835 A1. The project correlation is fixed to the CANON RF 70-200mm f/4 L IS USM. Canon does not identify this patent as the production prescription in its public product literature, so the match is a production-correlation inference rather than a manufacturer confirmation.

The correlation rests on several convergent points:

1. Numerical Example 1 contains 16 physical glass elements in 11 air-separated optical groups, matching Canon's published 16-element/11-group construction.
2. Four elements in the patent prescription use the repeated low-dispersion coordinate pair `nd = 1.49700`, `νd = 81.5`. The data file conservatively labels these as UD-class rather than assigning a vendor identity; their count matches Canon's published four-UD production specification.
3. The patent publishes infinity-focus zoom states of 72.27, 135.02, and 193.89 mm at f/4.08, f/4.08, and f/4.12. These are close to, but deliberately kept separate from, the product's marketed 70–200 mm constant-f/4 specification.
4. Figure 1 and ¶0022 show two independently directed focusing motions in L4 and L6. Canon describes the production lens as using separate focusing and floating groups driven by two Nano USM motors.
5. Canon publishes a 0.6 m minimum focusing distance throughout the zoom range and 0.28× maximum magnification at 200 mm. Those production quantities are metadata only in this model because Example 1 does not publish the close-focus spacing table required to reconstruct the internal focus state.
6. The patent's July 2019 priority, July 2020 filing, and February 2021 publication surround Canon's November 3, 2020 product announcement. Canon Camera Museum records the lens as marketed in March 2021.

The data file therefore keeps the production identity and the patent design numerics in separate fields. Marketed focal length is 70–200 mm and marketed maximum aperture is f/4; the modeled zoom coordinates remain the patent's 72.27/135.02/193.89 mm states with `nominalFno = 4.08/4.08/4.12`.

## Optical Architecture

Numerical Example 1 is a positive-leading, seven-unit zoom. In object-to-image order the lens-unit powers are positive, negative, positive, negative, positive, negative, negative. The final TypeScript prescription independently computes the unit focal lengths as approximately +151.612, −58.122, +49.468, −69.023, +37.786, −48.999, and −295.358 mm for L1 through L7, reproducing the patent's lens-unit table to the precision expected from its rounded radii and spacings.

The 16 elements form 11 air-separated optical groups. Five cemented pairs are annotated D1 through D5; the remaining six elements are air-spaced. Lens units and air-separated optical groups are therefore not interchangeable counts: a lens unit may contain more than one air-separated group, while a cemented pair remains one optical group but two physical elements.

L1 is the positive front unit. L2 is the fixed negative unit during the three published infinity zoom states. The aperture stop belongs to the L3 region in the patent's unit convention, followed by positive L3 (`Lp`), negative L4 (`Ln`), positive L5, negative L6, and weak negative rear unit L7 (`LRn`). The patent specifically identifies L4 as the negative unit immediately behind the stop that contains positive lens Gp, and identifies L7 as the rear negative unit in Example 1 (¶0025, ¶0041).

With the image plane held fixed, the wide-to-tele unit motions recomputed from the authored spacing arrays are −55.62 mm for L1, 0 mm for L2, −10.59 mm for L3, −2.49 mm for L4, −10.59 mm for L5, −27.26 mm for L6, and −15.22 mm for L7. These values reproduce the patent's tabulated M1, MLp, and MLn quantities for L1, L3, and L4. The only apparent reversal between the three tabulated stations is L2: its fixed-image start coordinate changes by about +0.02 mm at the middle state and returns at tele. Figure 1 identifies L2 as fixed during zooming; the fixed-image reconstruction shows that this 0.02 mm middle-state excursion is consistent with accumulated rounding in the published two-decimal spacing table rather than a physical reversal.

The term *telephoto* is used here only under the project's strict `TL/EFL < 1` definition. The wide and middle states have `TL/EFL = 1.903195` and `1.302276`, respectively, and therefore do not qualify. The tele endpoint gives `TL/EFL = 0.995985` and narrowly does. None of the three states is retrofocus under the corresponding `BFD > EFL` test.

Example 1 is entirely spherical. No surface in the selected example carries an asphere marker and the final data file has an empty `asph` object. No scaling is applied to the patent prescription.

A source/model distinction is required at two non-glass planes. Patent surface 12 is explicitly the diaphragm and becomes the sole `STO` surface in the data file. Patent surface 6 is a plane air-to-air surface followed by 1.55 mm of air. Figure 1 separately labels a flare-cutting diaphragm `FP`; the sequential model therefore treats surface 6 as the probable inactive FP/control plane. Because it has no refractive power and is not an active blocker in LensVisualizer, it is omitted and its 1.55 mm following space is merged into patent gap d5. The authored gap 5 is therefore 2.59/40.93/58.21 mm at wide/middle/tele instead of the patent's raw d5 values of 1.04/39.38/56.66 mm. The omission preserves the axial station of the following powered surfaces.

The patent publishes no clear-aperture or stop-diameter table for Example 1. All surface semi-diameters in the data file are consequently modeling inferences, derived from the traced marginal/chief-ray envelopes and constrained by the production mechanical envelope. The stop's authored `sd = 12.70 mm` is likewise a modeled clear-radius envelope, not a patent dimension. The active wide-open iris radii implied by the modeled entrance pupil and the published design f-numbers are 9.2435, 11.3557, and 12.6903 mm across the three zoom states.

No sensor cover glass, filter plate, folded path, or mechanical component is included in the sequential optical model.

## Element-by-Element Analysis

The focal length quoted on each element line is the standalone thick-lens focal length of that physical element isolated in air, recomputed from the final data file. These values must not be confused with the net power of a cemented pair or with the in-situ power of the complete lens unit.

### L11 — Positive Meniscus

`nd = 1.48749`, `νd = 70.2`. Glass: **487702 — low-dispersion crown class (vendor unresolved)**. `f = +211.781 mm`.

L11 is the front positive collector in L1. Its relatively weak standalone positive power is followed by the cemented D1 pair, so the front unit's +151.612 mm in-situ unit power cannot be assigned to L11 alone. The data file deliberately keeps the glass at class level because several current catalogs reproduce or nearly reproduce the rounded coordinate pair without establishing a patent vendor.

### L12 — Negative Meniscus, D1 Front Member

`nd = 1.61340`, `νd = 44.3`. Glass: **613443 — medium-dispersion class (vendor unresolved)**. `f = −116.950 mm`.

L12 begins cemented pair D1 and is individually negative. Its rear surface is the cemented interface into L13; the interface is therefore authored with the downstream L13 element identity, as required by the data schema. The pair sits inside the overall positive L1 unit and supplies a sign-opposed partner to the low-dispersion positive member behind it.

### L13 — Positive Meniscus, D1 Rear Member

`nd = 1.49700`, `νd = 81.5`. Glass: **497815 — UD-class low-dispersion glass (vendor unresolved)**. `f = +95.103 mm`.

L13 is the first of four elements carrying the `1.49700/81.5` coordinate pair. Its positive power and much higher Abbe number oppose the negative, more dispersive L12 within D1. That pairing is consistent with chromatic balancing in the front unit, but the exact vendor identity is not established by the patent.

### L21 — Negative Meniscus

`nd = 1.51633`, `νd = 64.1`. Glass: **516641 — crown class (vendor unresolved)**. `f = −118.643 mm`.

L21 is the first member of the negative L2 unit. It is air-spaced from D1 and from the following D2 cemented pair. The complete L2 unit computes to −58.122 mm, so L21's standalone value is only one contribution to the unit's net negative power.

### L22 — Biconcave Negative, D2 Front Member

`nd = 1.54072`, `νd = 47.2`. Glass: **541472 — flint class (vendor unresolved)**. `f = −40.893 mm`.

L22 is the strongly negative member of cemented pair D2. Its biconcave geometry supplies substantial negative standalone power before the high-index positive partner L23. The data uses a class label because the patent gives optical coordinates rather than a vendor glass name.

### L23 — Positive Meniscus, D2 Rear Member

`nd = 2.00069`, `νd = 25.5`. Glass: **001255 — high-index flint class (vendor unresolved)**. `f = +62.257 mm`.

L23 is cemented directly to L22 and has positive standalone power despite its high dispersion. The pair remains part of the net-negative L2 unit. The `2.00069/25.5` coordinate is compatible with more than one modern catalog family, so the file does not promote a coordinate match to a vendor identity.

### L31 — Biconvex Positive, L3 / Lp

`nd = 1.49700`, `νd = 81.5`. Glass: **497815 — UD-class low-dispersion glass (vendor unresolved)**. `f = +49.468 mm`.

L31 is the single physical element in positive lens unit L3 (`Lp`), so its standalone focal length and the complete unit focal length are the same to calculation precision. The aperture stop lies 0.27 mm ahead of its front surface in the published wide-state sequence. During zooming the L3/stop region moves toward the object relative to the fixed image plane by 10.59 mm from wide to tele.

### L41 — Biconcave Negative, D3 Front Member

`nd = 1.76385`, `νd = 48.5`. Glass: **764485 — lanthanum-crown class (vendor unresolved)**. `f = −17.536 mm`.

L41 is the strongly negative front member of D3 and provides most of the pair's negative standalone tendency. It is the first element of L4, the patent's negative unit `Ln` immediately behind L3.

### L42 / Gp — Biconvex Positive, D3 Rear Member

`nd = 1.80610`, `νd = 40.7`. Glass: **NBFD13 (HOYA)**. `f = +24.196 mm`.

L42 is the patent's positive lens Gp. Unlike the other glass identities in the prescription, this one is explicit: ¶0033 names HOYA NBFD13 and gives `νd = 40.73` and `θgF = 0.5671`. The final data file supplements the rounded patent surface row with current HOYA catalog values `nC = 1.80022`, `nF = 1.82001`, `ng = 1.83123`, and `ΔPgF = −0.0078`.

The distinction between standalone and cemented power is especially important here. Gp by itself is positive at +24.196 mm, while the L41+L42 cemented D3 pair is the complete L4 lens unit and computes to −69.023 mm. Thus the patent's phrase “positive lens Gp included in the negative lens unit Ln” is reproduced literally by the prescription rather than being a naming paradox.

The patent assigns Gp a specific chromatic role. Paragraphs 0028–0035 describe using a material with a suitably small anomalous partial-dispersion quantity in this post-stop negative unit to control longitudinal and lateral chromatic aberration, especially toward the telephoto end. This is the one place where the data file carries explicit line-index and `dPgF` fields, so partial-dispersion discussion is supported rather than inferred from Abbe number alone.

### L51 — Negative Meniscus, D4 Front Member

`nd = 2.05090`, `νd = 26.9`. Glass: **051269 — very-high-index flint class (vendor unresolved)**. `f = −36.678 mm`.

L51 begins cemented pair D4 inside positive lens unit L5. Its high index and strong dispersion accompany a negative standalone contribution that is followed by the low-dispersion positive L52. No vendor name is asserted because the patent does not identify one.

### L52 — Biconvex Positive, D4 Rear Member

`nd = 1.49700`, `νd = 81.5`. Glass: **497815 — UD-class low-dispersion glass (vendor unresolved)**. `f = +37.771 mm`.

L52 is the third `1.49700/81.5` element and is cemented to L51. The sign and dispersion contrast within D4 gives L5 a compact internal positive/negative balance. The complete L5 unit is nevertheless positive, with an independently recomputed focal length of +37.786 mm after the air-spaced L53 is included.

### L53 — Biconvex Positive

`nd = 1.83481`, `νd = 42.7`. Glass: **835427 — lanthanum class (vendor unresolved)**. `f = +40.542 mm`.

L53 is air-spaced by 0.15 mm from D4 and completes the positive L5 unit. Its high-index biconvex form adds positive power behind the chromatically opposed D4 pair. The same `1.83481/42.7` coordinate reappears in L61, but the two elements have opposite shapes and standalone powers.

### L61 — Biconcave Negative, D5 Front Member

`nd = 1.83481`, `νd = 42.7`. Glass: **835427 — lanthanum class (vendor unresolved)**. `f = −30.021 mm`.

L61 begins cemented pair D5 and is strongly negative. D5 is the complete L6 lens unit, one of the two units for which Figure 1 shows a dotted focus motion. The patent indicates that L6 moves imageward when focusing from infinity toward a short distance.

### L62 — Positive Meniscus, D5 Rear Member

`nd = 1.72825`, `νd = 28.5`. Glass: **728285 — dense-flint class (vendor unresolved)**. `f = +74.629 mm`.

L62 is the positive rear member of D5. Although positive in isolation, the cemented L61+L62 pair remains net negative: the complete L6 unit computes to −48.999 mm. Its wide-to-tele zoom displacement is −27.26 mm in the fixed-image coordinate system, a separate motion from the unmodeled close-focus displacement.

### L71 — Negative Meniscus

`nd = 1.49700`, `νd = 81.5`. Glass: **497815 — UD-class low-dispersion glass (vendor unresolved)**. `f = −84.740 mm`.

L71 is the fourth `1.49700/81.5` element. Unlike the other three repeated low-dispersion elements, it is individually negative. It is separated from L72 by a 0.15 mm air gap and forms the front part of rear lens unit L7 (`LRn`).

### L72 — Biconvex Positive

`nd = 1.85478`, `νd = 24.8`. Glass: **855248 — high-index flint class (vendor unresolved)**. `f = +121.788 mm`.

L72 is a positive, high-index/high-dispersion rear element. In combination with negative L71 and the intervening air gap, the complete L7 unit is only weakly negative at −295.358 mm. The patent uses this rear negative unit as part of its compactness strategy (¶0041); the project nevertheless reserves the term *telephoto* for the strict total-length/EFL test described above.

## Glass Identification and Selection

The patent's Numerical Example 1 gives d-line refractive index and Abbe number but does not name the vendor for most rows. The data file therefore uses coordinate classes rather than speculative catalog identities. This prevents a close numerical match in a modern catalog from being mistaken for evidence about Canon's actual melt selection.

| Stored glass label | nd | νd | Elements | Identification status |
|---|---:|---:|---|---|
| 487702 low-dispersion crown class | 1.48749 | 70.2 | L11 | Vendor unresolved |
| 613443 medium-dispersion class | 1.61340 | 44.3 | L12 | Vendor unresolved |
| 497815 UD-class low-dispersion glass | 1.49700 | 81.5 | L13, L31, L52, L71 | Vendor unresolved; four occurrences correlate with Canon's four-UD product specification |
| 516641 crown class | 1.51633 | 64.1 | L21 | Vendor unresolved |
| 541472 flint class | 1.54072 | 47.2 | L22 | Vendor unresolved |
| 001255 high-index flint class | 2.00069 | 25.5 | L23 | Vendor unresolved |
| 764485 lanthanum-crown class | 1.76385 | 48.5 | L41 | Vendor unresolved |
| NBFD13 (HOYA) | 1.80610 | 40.7 | L42 / Gp | Patent-explicit identity; current HOYA line data stored |
| 051269 very-high-index flint class | 2.05090 | 26.9 | L51 | Vendor unresolved |
| 835427 lanthanum class | 1.83481 | 42.7 | L53, L61 | Vendor unresolved |
| 728285 dense-flint class | 1.72825 | 28.5 | L62 | Vendor unresolved |
| 855248 high-index flint class | 1.85478 | 24.8 | L72 | Vendor unresolved |

Only NBFD13 is promoted to a named catalog glass. The patent itself supplies the identity and the partial-dispersion rationale (¶0033), while the current HOYA catalog supplies the spectral line indices stored in the data file. Recalculation from those stored line indices gives `νd = 40.732693` and `θgF = 0.566953`; these closely reproduce the patent's rounded `40.73` and `0.5671` without replacing the patent values.

No apochromatic classification is asserted. The patent discusses suppression of longitudinal and lateral chromatic aberration, but the data file has direct higher-order spectral information only for Gp. The other class-level elements fall back to their authored d-line `nd/νd` representation unless a future, defensible catalog identity supplies validated Sellmeier data.

## Focus Mechanism

The production lens uses an electronic floating-focus system with two independently driven lens groups. Canon identifies one as the focusing group and one as the floating group, each driven by a Nano USM motor. Canon also publishes a minimum focusing distance of 0.6 m throughout the zoom range and a maximum magnification of 0.28× at 200 mm.

The selected patent embodiment gives only the *directions* of the internal focus motions. Figure 1 and ¶0022 show L4 moving toward the object side and L6 toward the image side when focusing from infinity toward a short distance. Example 1 does not publish the numerical close-focus gaps, close object distance, or close-focus magnification needed to solve both internal group positions over the zoom range.

For that reason the data file's focus status is **NO_INTERNAL_RECONSTRUCTION**. Every zoom `var` entry stores identical infinity/close values, so the focus control does not fabricate a hidden cam law. `closeFocusM = 0.6` remains production metadata only. No total focus travel is claimed because the patent does not provide it and the product specifications do not expose the internal group displacements.

The distinction matters because the L4 and L6 focus motions are independent of their zoom motions. The W-to-T zoom displacements quoted in the architecture section describe the published infinity zoom family, not close-focus travel.

## Chromatic Correction Strategy

The most explicit chromatic design choice in the patent is the positive Gp element embedded within net-negative L4. Paragraphs 0028–0035 explain that lateral chromatic aberration becomes difficult as a compact positive-leading zoom is shortened, and that the post-stop negative unit provides a useful ray-height location for correction. Gp is then assigned an anomalous-dispersion condition to control the g-line contribution.

The final data represents this strategy at two levels. First, L42/Gp carries the patent-explicit NBFD13 identity and current HOYA `nC`, `nF`, `ng`, and `dPgF` values. Second, four other elements use the repeated `1.49700/81.5` low-dispersion coordinate pair. Their locations span the front unit, L3, L5, and L7, distributing low-dispersion power across the zoom rather than concentrating it in a single group.

The four repeated rows correlate numerically with Canon's statement that the production lens contains four UD elements, but the patent does not label those four rows “UD” or name their vendor. Accordingly, the analysis treats the match as correlation evidence and the data labels them UD-*class*, not as manufacturer-confirmed glass identities.

## Conditional Expressions

The patent's central material condition is written around

`Q = θgF − (−1.665×10⁻⁷νd³ + 5.213×10⁻⁵νd² − 5.656×10⁻³νd + 0.7268)`.

A source contradiction must be preserved. Summary ¶0005 and claim 17 print an internally impossible form with a positive lower bound, `+0.1000 < Q < −0.0001`. Body ¶0026 instead prints `−0.1000 < Q < −0.0010`, while claim 1 prints `−0.1000 < Q < −0.0001`. No value in the data file has been altered to “repair” the source. The prescription is unambiguous, and Numerical Example 1's own Table 1 gives `Q = −0.0046`, which is compatible with the coherent body and claim-1 forms.

The following values are independently recomputed from the final prescription where the condition is defined by prescription geometry or powers. Conditions (5) and (6) use the patent's own published `SKw = 14.44 mm`, `LDw = 137.50 mm`, and `fw = 72.27 mm`, because those are the source quantities to which Table 1 applies. For condition (1), the value shown uses the current HOYA line indices stored on Gp; the patent's own rounded Table 1 value remains −0.0046.

| Condition | Coherent patent range | Recomputed value | Result |
|---|---|---:|---|
| (1) Q | `−0.1000 < Q < −0.0010` in ¶0026; claim 1 relaxes upper bound to `−0.0001` | −0.00470213 | Passes both coherent forms |
| (2) νdp | `20 < νdp < 50` in ¶0026; claim 1 uses `25 < νdp < 50` | 40.732693 from stored HOYA line indices | Pass |
| (3) Dwp/Dtp | `0.10 < Dwp/Dtp < 0.70` | 0.595202399 | Pass |
| (4) ndp | `1.65 < ndp < 2.10` | 1.8061 | Pass |
| (5) SKw/fw | `0.05 < SKw/fw < 0.50` | 0.199806282 | Pass |
| (6) LDw/fw | `1.0 < LDw/fw < 3.5` | 1.902587519 | Pass |
| (7) fGp/f1 | `0.10 < fGp/f1 < 1.20` | 0.159588948 | Pass |
| (8) f2/f1 | `−0.80 < f2/f1 < −0.10` | −0.383362639 | Pass |
| (9) fRn/f1 | `−3.00 < fRn/f1 < −0.10` | −1.948115262 | Pass |
| (10) \|MLp/M1\| | `0 < \|MLp/M1\| < 0.50` | 0.190399137 | Pass |
| (11) \|MLn/M1\| | `0 < \|MLn/M1\| < 0.40` | 0.044768069 | Pass |
| (12) νdL1Pave | `65 < νdL1Pave < 99` | 75.85 from authored rounded surface values | Pass |

Table 1 reports 75.89 for condition (12). The difference from 75.85 is attributable to precision: the surface prescription prints the two relevant L1 positive-lens Abbe numbers as 70.2 and 81.5, whose arithmetic mean is 75.85, whereas Table 1 evidently uses more precise underlying glass coordinates.

## Image Stabilization

Canon's production specifications identify an optical Image Stabilizer and the Camera Museum block diagram marks an IS unit. That production feature is not represented as a decentered optical state in the selected patent data file. Numerical Example 1's authored surfaces contain no `opticalPath`, decenter, tilt, or dedicated stabilization-control field, and the patent's Figure 1 does not assign an IS displacement to a lens unit.

Consequently, this analysis does not infer which patent unit is the production IS group or assign a stabilization travel. The production IS system is part of the product correlation, not a modeled degree of freedom in this prescription.

## Verification Summary

The final data file was re-evaluated by independent sequential height/reduced-angle tracing with ray vector `[y, ν = n·u]` and by a separate ABCD multiplication. The maximum basis-ray disagreement across the three zoom states is `2.84×10⁻14`.

| Infinity state | Patent focal length (mm) | Computed EFL (mm) | Patent SK/BFD (mm) | Computed BFD (mm) | Patent overall length (mm) | Computed track (mm) |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 72.27 | 72.257446 | 14.44 | 14.427572 | 137.50 | 137.52 |
| Middle | 135.02 | 135.025187 | 24.23 | 24.238168 | 175.84 | 175.84 |
| Tele | 193.89 | 193.918671 | 29.66 | 29.673553 | 193.12 | 193.14 |

The residuals are at the scale expected from a source table whose radii/thicknesses are mostly printed to 0.001–0.01 mm. No radius-sign correction or uniform focal-length scaling is required.

The surface-by-surface Petzval calculation, using `P_i = φ_i/(n_i n'_i)`, sums to `+0.000373515525 mm⁻¹`, corresponding to a reciprocal magnitude of approximately 2677.265 mm. This is a first-order curvature diagnostic, not a direct prediction of the final aberrated field surface.

The inferred semi-diameter geometry remains physically separate from the patent prescription. Across the modeled states, the targeted geometry checks give a minimum positive element edge thickness of 0.418474 mm and a maximum spherical rim-slope angle of 47.613° at surface 26. Shared-band cross-gap checks pass for all three defined zoom states, and the full-field off-axis first-clipping test never first-clips a ray at a cemented junction. These results validate the authored geometry surrogate; they do not convert the inferred semi-diameters into patent-published dimensions.

## Sources

1. Makoto Nakahara, **US 2021/0033835 A1, “Zoom Lens and Optical Apparatus,”** Canon Kabushiki Kaisha, published February 4, 2021. Numerical Example 1; especially ¶0021–¶0035, ¶0041–¶0058, Figure 1, and Table 1. Public copy: https://patents.google.com/patent/US20210033835A1/en
2. Canon U.S.A., **RF70-200mm F4 L IS USM — Technical Specifications.** Product/support data used for marketed 70–200 mm f/4 identity, RF mount, 16 elements/11 groups, four UD lenses, 0.6 m MFD, 0.28× maximum magnification, nine-blade diaphragm, dual Nano USM focus/floating system, filter diameter, and mechanical envelope. https://www.usa.canon.com/support/p/rf70-200mm-f4-l-is-usm
3. Canon U.S.A., **“Canon Adds Two RF Lenses And PIXMA PRO Printer Ideal For The Enthusiast Photographer,”** November 3, 2020. Used for announcement timing and the two-motor floating-focus description. https://www.usa.canon.com/newsroom/2020/20201103-lens
4. Canon Camera Museum, **RF70-200mm F4 L IS USM.** Used for marketing date, construction summary, production block diagram, and focus/floating description. https://global.canon/en/c-museum/product/rf501.html
5. HOYA Group Optics Division, **Optical Glass Data, HOYA Excel catalog, updated June 1, 2026.** Used only for the patent-explicit NBFD13 spectral fields stored in the data file. https://www.hoya-opticalworld.com/english/datadownload/index.html
