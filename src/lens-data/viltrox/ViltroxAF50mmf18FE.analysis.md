## Patent Reference and Design Identification

**Patent:** CN 211955966 U\
**Application Number:** 202020757775.4\
**Filed:** 2020-05-08\
**Granted:** 2020-11-17\
**Inventors:** 刘瑞军; 陈宝锋\
**Applicant:** 深圳市雷影光电科技有限公司\
**Title:** 内合焦式成像镜头 (*Internal-focusing imaging lens*)\
**Embodiment analyzed:** Example 1 (实施例1)

This analysis follows the fixed correlation to the **VILTROX AF 50mm f/1.8 FE**. The current Viltrox support archive retains the exact AF 50/1.8 FE model designation, while Viltrox's current full-frame F1.8 kit page identifies a 50 mm F1.8 prime within its Sony E-mount full-frame family. Those manufacturer sources establish product identity, mount, format, and marketed focal/aperture values; they do not constitute manufacturer confirmation that CN 211955966 U is the production prescription.

Several independent design facts make Example 1 internally consistent with the selected product correlation. The patent gives a 49 mm infinity focal length and Fno 1.8, while the final model computes an infinity EFL of 49.073753 mm. The patent also gives a 23.9° half-field, which is appropriate to a 36 × 24 mm image diagonal at this focal length. Example 1 contains 11 physical elements with one cemented pair, giving ten air-separated element groups, and uses a single-element internal focusing group. The data therefore retains the native patent scale, with `focalLengthMarketing = 50` mm and `focalLengthDesign = 49.073753` mm rather than forcing the prescription to exactly 50 mm.

The source and model differ in several documented ways that are necessary for a valid LensVisualizer representation. Patent `STP` is normalized to the canonical `STO` label. The source GL plane-parallel filter is excluded from the ordinary sequential model and its optical translation is folded into an air-equivalent rear spacing. The patent publishes no clear-aperture table, so all surface semi-diameters in the data are modeling values rather than source dimensions. Finally, the patent's asphere coefficient table contains a surface-numbering error: the four coefficient rows printed as 13–16 are mapped to physical surfaces 15A–18A because the prescription table, ¶0087, and Fig. 1 all identify the two faces of L23 and the two faces of L31 as the four aspheres.

No uniform scale factor is applied (`s = 1`). Consequently, radii, thicknesses, semi-diameters, and image-plane coordinates remain in the patent's native scale, and the asphere coefficients require no scale transformation.

## Optical Architecture

The patent describes a four-functional-group internal-focusing prime with power sequence **positive / positive / negative / positive** (¶0057). In LensVisualizer counting there are 11 physical elements in ten air-separated element groups, because L21 and L22 are cemented. The patent's functional groups are annotated separately as G1 through G4.

**G1** is a weak positive front group consisting of five elements: negative L11, positive L12, positive L13, positive L14, and negative L15. Independent thick-group calculation gives G1 a focal length of +186.985071 mm. This weak net power is the result of substantial cancellation between individually stronger positive and negative elements. The patent states that the positive G1 allocation brings the entrance pupil closer to the front of the lens, reduces the diameter of rays delivered to the rear groups, and helps control off-axis coma (¶0025, ¶0062).

The aperture stop follows G1. The patent labels the aberration plots Fno 1.8 but does not publish a physical stop diameter. The data therefore calibrates the authored stop semi-diameter to 11.960733 mm so that the modeled entrance pupil reproduces f/1.8 at infinity. This stop diameter is a modeling calibration, not a patent-published clear aperture.

**G2** is the strongest positive functional group, with independently calculated focal length +43.039659 mm. It consists of the cemented L21/L22 pair followed by the strongly positive double-aspheric L23. The cemented pair alone is not positive: its net focal length is -45.301529 mm. G2 becomes strongly positive only after L23 is included. This distinction is important because standalone element powers, cemented-pair power, and the in-situ group behavior are not interchangeable descriptions.

**G3** is L31 alone, a negative double-aspheric meniscus with standalone focal length -90.418144 mm. It is the sole focusing group. The source specifies that this element moves toward the image during focusing while G1, G2, G4, and the image plane remain fixed (¶0057, ¶0067–0070).

**G4** is a positive rear compensating group formed by positive L41 and negative L42. Its isolated group focal length is +122.574172 mm. The patent describes G4 as part of the system's compensation strategy for maintaining image quality while retaining suitable positive power (¶0071–0074).

The calculated Petzval contributions show the same alternating balancing structure. Using the project convention `φ/(n·n′)`, G1 contributes -0.004062017 mm⁻¹, G2 +0.007546895 mm⁻¹, G3 -0.007408959 mm⁻¹, and G4 +0.006116333 mm⁻¹. The total is only +0.002192252 mm⁻¹, corresponding to a reciprocal magnitude of about 456.152 mm. These are computed paraxial results from the final data arrays rather than values printed by the patent.

The layout is neither telephoto nor retrofocus under the project definitions. The physical first-surface-to-image track exceeds the EFL, while the rear distance from L42 to the image is shorter than the EFL. No such architectural label is therefore assigned.

## Element-by-Element Analysis

### L11 — Biconcave Negative

`nd = 1.63, νd = 35.7. Glass: Unmatched (nearest 626357 flint family; patent nd≈1.63, νd≈35.7). f = -34.651679 mm.`

L11 is the first and one of the two negative members of G1. Its relatively strong negative standalone power offsets the positive middle members of the group and helps keep G1 weakly positive in aggregate. The element's low Abbe number is consistent with a flint-class role, but the source publishes only coarse `nd`/`νd` coordinates and no vendor identity.

Because L11 is followed by a strongly positive L12 rather than functioning as an isolated front negative group, its contribution must be interpreted within the full five-element G1 combination. The patent attributes G1's overall power distribution—not L11 alone—with the entrance-pupil and off-axis-coma effects discussed in ¶0025 and ¶0062.

### L12 — Biconvex Positive

`nd = 1.80, νd = 46.6. Glass: Unmatched (nearest 804466 high-index lanthanum family; patent nd≈1.80, νd≈46.6). f = +30.977957 mm.`

L12 is the strongest positive element in G1 by standalone focal length. Its high refractive index allows substantial positive power without requiring extreme surface curvature. Together with L13 and L14 it provides the positive core that offsets L11 and L15.

The nearest public catalog family is around code 804466, but its refractive-index residual exceeds the project's direct catalog-resolution window against the rounded patent coordinate. The element therefore remains explicitly unmatched rather than being promoted to a named vendor glass.

### L13 — Plano-Convex Positive

`nd = 1.80, νd = 46.6. Glass: Unmatched (nearest 804466 high-index lanthanum family; patent nd≈1.80, νd≈46.6). f = +121.875000 mm.`

L13 shares the same published `nd` and `νd` coordinates as L12 but carries much weaker positive standalone power. Its plano rear surface and moderate front curvature make it a lower-power contributor within the positive central section of G1.

In the group context, L13 contributes positive power without duplicating the stronger refracting action of L12. The repeated glass coordinates also avoid introducing an additional dispersion class inside the tightly packed front group.

### L14 — Positive Meniscus

`nd = 1.85, νd = 23.8. Glass: Unmatched (nearest 847238 dense-flint family; patent nd≈1.85, νd≈23.8). f = +95.652109 mm.`

L14 is a positive meniscus made from the highest-index and lowest-Abbe material in the prescription. This combination gives it significant refracting leverage while introducing a dispersion behavior very different from the neighboring high-index lanthanum-class positive elements.

The patent does not assign an element-specific aberration role to L14. In the computed architecture, its positive power participates in the cancellation that leaves G1 only weakly positive, while its low `νd` makes it one of the principal dispersion-balancing members available to the front group. No anomalous-partial-dispersion claim is made because no `nC`, `nF`, `ng`, or `dPgF` data are published or authored.

### L15 — Negative Meniscus

`nd = 1.62, νd = 36.3. Glass: 620363 — flint class (vendor unresolved). f = -42.851410 mm.`

L15 closes G1 with negative standalone power. Along with L11 it brackets the three positive middle members and materially reduces the net group power. Its rear surface is much more strongly curved than its front surface, producing the negative meniscus form recorded in the data.

L15 lies immediately before the aperture-stop gap, so its exit refraction directly shapes the rays reaching the stop. The patent's discussion of G1 as a whole links this front-group allocation to reduced rear-group ray diameters and off-axis coma control (¶0025, ¶0062).

### L21 — Biconcave Negative, Cemented J1 Front Member

`nd = 1.65, νd = 33.8. Glass: 648339 — dense-flint class (vendor unresolved). f = -16.419089 mm.`

L21 is the strongest negative standalone element in the prescription. It is cemented directly to L22, and the shared surface is owned in the data by the downstream L22 medium as required by the current data convention.

Although L22 is individually positive, the complete L21/L22 cemented pair remains net negative with calculated focal length -45.301529 mm. This net pair behavior is distinct from the positive power of G2 as a whole and is the principal reason the following L23 is optically decisive.

### L22 — Biconvex Positive, Cemented J1 Rear Member

`nd = 1.69, νd = 54.6. Glass: 691548 — lanthanum-crown class (vendor unresolved). f = +27.151668 mm.`

L22 is a positive, higher-Abbe partner to the negative lower-Abbe L21. The cemented contact eliminates an air gap at their shared surface and permits the pair to redistribute power and dispersion within a compact axial length.

Its positive standalone power does not make the cemented pair positive; the verified pair remains net negative. The pair's effect should therefore be understood as one component of G2's correction and power distribution rather than as a conventional positive cemented achromat.

### L23 — Biconvex Positive, Two Aspherical Surfaces

`nd = 1.81, νd = 41.0. Glass: K-VC89 (catalog-equivalent spectral proxy; supplier unresolved). f = +26.018750 mm.`

L23 supplies the dominant positive contribution that converts the negative cemented J1 pair into a strongly positive G2. Its high refractive index and substantial standalone power are consistent with the patent's requirement that the corresponding second-group element satisfy `1.80 ≤ Nd2c ≤ 1.95` and `40 ≤ Vd2c ≤ 60` (¶0063–0066).

Both surfaces of L23 are aspherical. This gives G2 higher-order shape freedom immediately after the cemented pair and before the moving negative focus element. The asphere coefficients are source values after correction of the patent's row-numbering error; they are not optimized or rescaled values.

### L31 — Negative Meniscus, Two Aspherical Surfaces, Focus Group

`nd = 1.50, νd = 81.6. Glass: J-FK01A (catalog-equivalent spectral proxy; supplier unresolved). f = -90.418144 mm.`

L31 is the complete G3 focusing group. The patent explicitly assigns negative power to this single element and states that G3 moves toward the image during focusing while the other groups remain fixed (¶0057, ¶0067–0070). From infinity to the published 0.5 m state, L31 translates imageward by 5.75 mm.

Its very high Abbe number places it in a low-dispersion fluorophosphate class, and the patent text describes the focusing lens as using ultra-low-dispersion glass together with aspherical surfaces to manage chromatic and monochromatic changes during focusing (¶0025). The catalog curve remains only a spectral proxy: no exact vendor glass, APO designation, or anomalous-partial-dispersion behavior is claimed because the patent supplies no line indices or `dPgF`.

Both surfaces of L31 are aspherical. This concentrates higher-order correction on the one component whose axial position changes with focus, a logical way to limit focus-dependent aberration changes without moving a heavier multi-element group.

### L41 — Biconvex Positive

`nd = 1.51, νd = 81.4. Glass: Unmatched (nd≈1.51, νd≈81.4 low-dispersion crown). f = +44.586215 mm.`

L41 supplies most of the positive standalone power in G4. Its unusually high Abbe number and low refractive index place it in a low-dispersion region, but current public catalog coordinates do not provide a sufficiently close refractive-index match to justify a named vendor assignment. The explicit `Unmatched (...)` label is therefore retained.

In combination with negative L42, L41 leaves G4 net positive. The patent identifies G4 as a positive compensating group intended to maintain appropriate system power and image performance (¶0071–0074).

### L42 — Negative Meniscus

`nd = 1.67, νd = 33.1. Glass: Unmatched (nd≈1.67, νd≈33.1 dense flint). f = -65.410752 mm.`

L42 is the final powered element and supplies negative standalone power behind L41. Its moderate-high refractive index and relatively low Abbe number provide a strong contrast to L41's high-`νd` material.

The available public catalog coordinates did not support assigning a specific dense-flint name while preserving both the stored `nd` and `νd`. It remains explicitly unmatched rather than being forced to a nearby catalog glass. The positive L41 plus negative L42 combination yields the verified positive G4 focal length of +122.574172 mm.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. Catalog curves below are coordinate-compatible spectral proxies, not identifications of the production supplier or melt. The authored patent indices remain unchanged; no catalog-derived `nC`, `nF`, `ng`, or `dPgF` values are stored as if they were measured source data. The runtime compatibility guard checks the evaluated catalog index within ±0.003 and Abbe number within ±2.

| Element | Patent nd / νd | Runtime catalog curve |
| --- | --- | --- |
| L11 | 1.63 / 35.7 | Unmatched; patent Abbe fallback |
| L12 | 1.8 / 46.6 | Unmatched; patent Abbe fallback |
| L13 | 1.8 / 46.6 | Unmatched; patent Abbe fallback |
| L14 | 1.85 / 23.8 | Unmatched; patent Abbe fallback |
| L15 | 1.62 / 36.3 | E-F2 |
| L21 | 1.65 / 33.8 | SF2 |
| L22 | 1.69 / 54.6 | K-LaK9 |
| L23 | 1.81 / 41 | K-VC89 |
| L31 | 1.5 / 81.6 | J-FK01A |
| L41 | 1.51 / 81.4 | Unmatched; patent Abbe fallback |
| L42 | 1.67 / 33.1 | Unmatched; patent Abbe fallback |

5/11 elements resolve to catalog dispersion. Explicitly unmatched elements retain the patent-derived Abbe fallback. No APO or patent-backed anomalous-partial-dispersion claim follows from the proxy assignments.

## Focus Mechanism

The focus status is **PUBLISHED**. Example 1 gives two complete spacing states and specifies that only G3/L31 moves. No constrained reconstruction is used.

| Focus state | Patent object distance | D1 after L23 (mm) | D2 after L31 (mm) | D1 + D2 (mm) |
|---|---:|---:|---:|---:|
| Infinity | ∞ | 1.00 | 8.61 | 9.61 |
| Published close state | 0.5 m | 6.75 | 2.86 | 9.61 |

From infinity to the published close state, D1 increases by 5.75 mm while D2 decreases by 5.75 mm. The sum remains exactly 9.61 mm at the published precision, so the mechanism is a pure imageward translation of L31 by 5.75 mm with the surrounding groups fixed. The final data reproduces those spacings directly.

The patent's 0.5 m entry is not automatically equivalent to the production lens's sensor-plane minimum focusing distance. The source does not define the object-distance reference plane and does not publish magnification for Example 1. The data therefore uses 0.5 m only as the source's published close-state coordinate and states that limitation explicitly in `focusDescription`.

The internal movement changes first-order system behavior. Recalculation from the final arrays gives EFL 49.073753 mm at infinity and 46.687632 mm in the published close configuration. This is focus breathing in the paraxial configuration sense; it is a computed property of the two source states, not a manufacturer specification.

## Aspherical Surfaces

The patent states that both faces of L23 and both faces of L31 are aspherical (¶0087). The final data therefore uses four aspherical labels: **15A, 16A, 17A, and 18A**.

The patent's equation is already in the project-standard conic form:

$$
z(y)=\frac{(1/R)y^2}{1+\sqrt{1-(1+K)(y/R)^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+A_{12}y^{12}.
$$

Here `K = 0` is a spherical conic base. All four Example 1 aspheres use `K = 0`, so no conic-convention conversion is required.

The source coefficient table is internally misnumbered. It prints coefficient rows 13, 14, 15, and 16 even though the Example 1 prescription marks physical surfaces 15–18 as aspherical and ¶0087 explicitly assigns the four aspheres to L23 and L31. The final data records the documented source correction `13→15A`, `14→16A`, `15→17A`, `16→18A`. The radii themselves are not altered.

| Data surface | Raw patent row | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 15A | 13 | 0 | -3.17e-6 | -1.74e-8 | +2.02e-10 | -8.90e-13 | +2.15e-15 |
| 16A | 14 | 0 | +9.97e-6 | -1.43e-8 | +1.80e-10 | -8.20e-13 | +2.20e-15 |
| 17A | 15 | 0 | +5.09e-5 | -3.64e-7 | +1.29e-9 | -2.03e-12 | 0 |
| 18A | 16 | 0 | +5.94e-5 | -3.67e-7 | +1.28e-9 | -2.02e-12 | 0 |

Because `s = 1`, these coefficients are copied at the native patent scale. No `A_p / s^(p-1)` transformation is needed.

The patent does not publish clear semi-diameters. The model therefore derives semi-diameters from calibrated f/1.8 marginal rays, the normal off-axis bundle, the patent optical section, and geometry constraints. Asphere departures can consequently be quoted only at those authored modeling semi-diameters, not as patent aperture specifications. At the validated data radii, the departures from the spherical base are -0.083587 mm at 15A (sd 14.7 mm), +0.551367 mm at 16A (sd 14.7 mm), +0.531204 mm at 17A (sd 14.0 mm), and +0.770658 mm at 18A (sd 13.6 mm).

The signs and magnitudes indicate that the two L31 surfaces carry especially strong polynomial reshaping at the modeled rim, which is consistent with placing substantial higher-order correction on the moving focus element. That interpretation is based on the verified sag departures and element location, not on an explicit manufacturing-process statement by the patent.

## Conditional Expressions

CN 211955966 U gives six design conditions. The source's final summary table prints the Example 1 values alongside them. Several conditions reproduce directly from the rounded prescription; two power-ratio entries and one sign convention require qualification.

| Condition | Patent bound | Example 1 source table | Independent check from rounded data | Status |
|---|---|---:|---:|---|
| (1) G1 power ratio | `2.5 ≤ F1/F ≤ 3.8` | 3.53 | 3.816022 using F=49 mm | source value retained; rounded data do not reproduce it exactly |
| (2) L23 index | `1.80 ≤ Nd2c ≤ 1.95` | 1.81 | 1.81 | reproduced |
| (3) L23 Abbe number | `40 ≤ Vd2c ≤ 60` | 41 | 41 | reproduced |
| (4) G4 power ratio | `2.5 ≤ F4/F ≤ 3.5` | 2.68 | 2.501514 using F=49 mm | source value retained; rounded data do not reproduce it exactly |
| (5) front-to-stop ratio | `0.4 ≤ TH15/F ≤ 0.5` | 0.47 | 23.03/49 = 0.470000 | reproduced |
| (6) L31 shape ratio | `-2.5 ≤ (Ra+Rb)/(Ra-Rb) ≤ -1.5` | -1.9 | +1.899812 from the printed formula and printed radii | direct source sign contradiction |

Condition (6) contains the clearest source error. Example 1 prints `Ra = +100.00 mm` and `Rb = +31.03 mm`. Those radii are optically consistent with L31 as a negative meniscus and are preserved. Substitution into the patent's printed expression gives +1.899812, while the summary table and stated admissible interval are negative. Reversing only the denominator gives -1.899812, reproducing the source table. The data does not silently flip either radius or alter the lens shape; the contradiction is retained as a patent-text issue.

The G1 and G4 ratio discrepancies are different. The rounded surface prescription produces functional-group focal lengths of +186.985071 mm and +122.574172 mm, respectively, which do not reproduce the source table's 3.53 and 2.68 ratios when divided by the printed 49 mm system focal length. A source-precision sensitivity calculation using the displayed rounding intervals gives a 2.5–97.5% range of about 3.527–4.163 for F1/F, so the source value 3.53 is compatible with the rounded inputs. The corresponding G4 range is about 2.424–2.584, which does not reach the source value 2.68. These source summary values are therefore cited as published values rather than substituted into the data model.

## Verification Summary

The final TypeScript arrays were independently recomputed using both sequential height/reduced-angle tracing and an ABCD matrix formulation. The two methods agree to floating-point precision at both published focus states.

| Quantity | Infinity | Published 0.5 m configuration |
|---|---:|---:|
| EFL (mm) | 49.073752888 | 46.687632148 |
| BFL from surface 22 vertex (mm) | 31.744476320 | 27.188518798 |
| Front principal plane H1 from surface 1 (mm) | +33.141247306 | +29.971082307 |
| Rear principal plane H2 from surface 22 (mm) | -17.329276569 | -19.499113350 |

The patent's source rear path contains a 2.00 mm plane-parallel GL filter of `nd = 1.52`, preceded by 28.44 mm of air and followed by 1.00 mm of air (¶0075). Because filters are excluded from the ordinary lens model, the final surface-22 rear spacing is normalized to the paraxially equivalent air distance

`28.44 + 2.00/1.52 + 1.00 = 30.755789 mm`.

This normalization changes the modeled axial coordinate of the image plane but does not change the powered prescription or EFL. The source's physical surface-22-to-image distance is 31.44 mm; the authored air-equivalent value is 30.755789 mm. The rounded powered prescription independently gives an infinity paraxial BFL of 31.744476 mm, so the Gaussian focus lies 0.988687 mm behind the preserved source image plane in the air-equivalent model. The data keeps the source IMG location rather than shifting it to force exact paraxial focus, because the patent tabulates radii and refractive indices only to coarse precision.

The semi-diameter model passes the edge-thickness, actual rim-slope, conic, cross-gap, normal off-axis containment, and published-focus endpoint checks. These semi-diameters remain modeling inferences because the patent does not publish clear apertures. The tightest modeled air gap is between surfaces 8 and 9; the facing surfaces remain physically separated at the authored rim.


### Patent-figure SD review (2026-09-10 UTC)

Reviewed the local `patents/CN211955966U.pdf`, PDF page 18, Figure 1, at 600 dpi. The existing SDs were retained: direct optical-rim inspection did not establish a figure discrepancy large enough to override the ray-clearance and physical-geometry constraints. Labels, group brackets, and focus arrows were excluded from the comparison. All semi-diameters remain modeling inferences. Surface and image-circle audits were run for this prescription.

## Sources and References

- **Primary patent:** CN 211955966 U, *内合焦式成像镜头*, Example 1. Primary locations used here include ¶¶0057–0075; Example 1 Tables 1–3; ¶¶0087–0095; Fig. 1; and the final condition-summary table.
- **Viltrox support archive:** [AF 50/1.8 FE](https://viltrox.com/pages/af-50-1-8-fe) — current manufacturer support page for the exact product designation and manual/firmware archive.
- **Viltrox product-family page:** [AF F1.8 Full-Frame Lenses Kit for Sony E-Mount](https://viltrox.com/products/viltrox-af-e-mount-f1-8-full-frame-lenses-kit-protective-case) — manufacturer identification of the 50 mm F1.8 as part of the Sony E-mount full-frame family.
- **OHARA Optical Glass Catalog:** https://oharacorp.com/glass-catalog/
- **HOYA Optical Glass Data:** https://www.hoya-opticalworld.com/english/datadownload/index.html
- **SCHOTT Optical Glass:** https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- **HIKARI Optical Glass Catalog:** https://www.hikari-g.co.jp/optical_glass/catalog/
- **CDGM Optical Glass Database:** https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
- **SUMITA Optical Glass:** https://www.sumita-opt.co.jp/en/download/
- **HOYA cross-reference index:** https://www.hoyaoptics.eu/glass-cross-reference-index — used only for class-level coordinate comparison; cross-vendor matches are not treated as identical compositions.
