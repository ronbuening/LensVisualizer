## Patent Reference and Design Identification

**Patent:** WO 2025/013477 A1\
**Application Number:** PCT/JP2024/020567\
**Priority:** JP2023-114758, July 12, 2023\
**Filed:** June 5, 2024\
**Published:** January 16, 2025\
**Inventors:** Takuya Tanaka; Shunsuke Miyagishima\
**Applicant:** Fujifilm Corporation\
**Title:** *Imaging Lens and Imaging Device*\
**Embodiment analyzed:** Example 7, Tables 13–14, Figs. 15–16

The prescription represented here is Example 7 of WO 2025/013477 A1. The patent describes a three-group imaging lens in which G1 has positive refractive power, G2 has negative refractive power, and G3 has negative refractive power. During focusing from infinity toward the nearest object, G2 moves toward the image while G1 and G3 remain fixed relative to the image plane. The patent also identifies L34–L36 as the image-stabilization group, displaced transverse to the optical axis for shake correction (¶0183–¶0185; Fig. 15).

The production correlation is the fixed correlation selected for this model; it is not presented as a manufacturer-confirmed patent identification. Several independent facts converge on the FUJIFILM FUJINON GF 500mm f/5.6 R LM OIS WR:

1. Example 7 contains 21 physical glass elements in 14 air-separated groups, exactly matching Fujifilm's published production count.
2. Fujifilm states that the production lens contains five ED and two Super ED elements. The patent prescription contains seven elements with νd ≥ 75.50, a numerically compatible count, although the data file does not assign any individual patent glass to Fujifilm's ED or Super ED marketing categories.
3. The patent gives a design focal length of 485.45 mm; Fujifilm markets the lens as 500 mm.
4. The patent gives FNo = 5.70; Fujifilm markets the lens as f/5.6.
5. The patent gives a full field of 6.38°; Fujifilm specifies a 6.3° angle of view.
6. The patent places focusing in a single internal negative group, G2 = L21. Fujifilm describes a lightweight focusing mechanism driven by a linear motor.
7. Reconstructing the patent's single-group focus motion to Fujifilm's 2.75 m minimum focus distance gives an absolute paraxial magnification of 0.200312×, consistent with the manufacturer's rounded 0.2× specification.
8. The patent priority date precedes the May 2024 product announcement and June 2024 release.

Marketing and design quantities remain separate throughout the model. The production designation is 500 mm f/5.6, while the unscaled Example-7 prescription is retained at 485.45 mm and F/5.70. No uniform scaling was applied (`s = 1.000000`).

## Optical Architecture

The lens is a long-focus telephoto prime built around a positive-negative-negative patent macro-group sequence. Example 7 contains 21 elements in 14 air-separated groups, with seven cemented pairs. All surfaces in this embodiment are spherical.

The first macro-group, G1, extends from L11 through L15. It carries the main positive power and includes the patent's front portion GF = L11–L12. The model's paraxial reduction of the final TypeScript arrays gives G1 an equivalent focal length of +157.311 mm. G1 combines three positive lenses with a cemented negative-positive pair, so the group is strongly positive without requiring every individual component to be positive.

G2 is the single negative meniscus L21. Its standalone focal length is −111.793 mm, and because it is isolated by air on both sides its group equivalent focal length is the same value. G2 is the only axial focusing group in the patent mechanism. Moving this negative group imageward changes the conjugate while preserving the positions of G1 and G3 relative to the image plane.

G3 extends from L31 through L45 and includes the aperture stop. Although it contains several positive cemented subgroups, its complete paraxial equivalent focal length is −181.121 mm. The group therefore cannot be interpreted from the signs of its individual elements alone. Its internal sequence alternates strong positive and negative components around the stop, the stabilization group, and the rear relay.

The stabilization group is L34–L36, corresponding to surfaces 18–22. A paraxial reduction of that three-element subgroup gives an equivalent focal length of −37.688 mm. The patent specifies transverse motion of this group for shake correction; no stabilization decenter range is published for Example 7.

The final prescription has an optical stack length of 200.966 mm from S1 to S36 and a total track of 267.287 mm from S1 to the image plane. Its computed EFL is 485.445637 mm, giving `TL/EFL = 0.550601`. Under the project criterion `TL/EFL < 1`, the design is therefore telephoto. Its computed BFD is 66.321740 mm, far shorter than the EFL, so it is not retrofocus.

The aperture stop is source-published at the position represented by `STO`, corresponding to patent surface 14. The patent does not publish the stop diameter. The modeled physical stop semi-diameter, 13.909661841 mm, is instead back-solved from the patent's FNo = 5.70 and is therefore a modeling inference. With that inferred stop, the final prescription recomputes to F/5.700000.

The patent gives no clear-aperture or semi-diameter table for Example 7. The authored semi-diameters are therefore model geometry, derived from exact spherical ray envelopes at infinity and at the reconstructed 2.75 m focus state and then constrained by edge thickness, actual rim slope, and cross-gap clearance. They are not patent-published aperture values.

## Element-by-Element Analysis

The focal length on each element line below is the element's standalone thick-lens focal length in air, as stored in the final data file. For cemented assemblies, a separate net focal length is given for the complete cemented pair. Neither quantity should be confused with the equivalent power of the complete patent macro-group in which the component operates.

### L11 — Plano-Convex Positive

`nd = 1.63980, νd = 34.47. Glass: S-TIM27 equivalent — vendor unresolved. Standalone f = +450.138 mm.`

L11 is the large first element and the first member of the patent's GF front portion. Its comparatively weak positive standalone power is distributed over a large clear aperture. In architectural terms it acts primarily as the first collector in G1 rather than as a compact high-power cell. Any more specific aberration assignment is an inference from its location and power, not an explicit patent statement.

### L12 — Positive Meniscus

`nd = 1.49700, νd = 81.61. Glass: 497816 class — vendor unresolved. Standalone f = +255.393 mm.`

L12 completes GF with L11. Its high Abbe number makes it a low-dispersion positive component relative to L11. The pairing allows the front portion to accumulate positive power while distributing refractive power and dispersion across two physically large lenses.

### L13 — Plano-Convex Positive

`nd = 1.43700, νd = 95.10. Glass: 437951 class — vendor unresolved. Standalone f = +114.151 mm.`

L13 is a substantially stronger positive element than L11 or L12 and uses the highest-Abbe class in the prescription. It sits after the long air separation following GF and begins the more compact rear part of G1. Its position and very high νd make it an important low-dispersion positive contributor, but the data do not establish a manufacturer glass trade name or an anomalous-dispersion classification.

### D1 — L14 + L15 Cemented Pair

`L14: nd = 1.80420, νd = 46.50. Glass: 804465 class — vendor unresolved. Standalone f = −47.914 mm.`\
`L15: nd = 1.43700, νd = 95.10. Glass: 437951 class — vendor unresolved. Standalone f = +89.560 mm.`

The pair is a cemented biconcave negative L14 followed by a biconvex positive L15. Calculated as a complete cemented assembly in air, D1 has net focal length **−103.368 mm**. This is a useful example of why the standalone focal lengths should not be algebraically substituted for the cemented result: the shared interface and finite thickness materially affect the pair power.

Within positive G1, D1 supplies a local negative contribution after the strong positive L13. The combination is consistent with distributing monochromatic and chromatic correction across the front group rather than forcing the front collector lenses to perform all correction themselves; that functional interpretation is inferred from the prescription rather than stated element-by-element by the patent.

### L21 — Negative Meniscus Focus Group G2

`nd = 1.69680, νd = 55.46. Glass: 697555 class — vendor unresolved. Standalone f = −111.793 mm.`

L21 is the complete G2 focusing group. The patent explicitly states that G2 moves toward the image when focus proceeds from infinity toward the nearest object, while G1 and G3 remain fixed relative to the image plane (¶0183–¶0184). Because G2 is a single air-spaced element, its standalone and group equivalent focal lengths coincide at −111.793 mm.

The negative sign is central to the inner-focus mechanism: translating a compact negative group between fixed positive/negative macro-groups changes the system conjugate without moving the large front assembly.

### L31 — Plano-Convex Positive

`nd = 1.49700, νd = 81.61. Glass: 497816 class — vendor unresolved. Standalone f = +59.356 mm.`

L31 is the first element of G3 and lies immediately before the stop region. It is a strong positive low-dispersion element. Its location makes it part of the transition from the moving negative G2 into the stop and the more densely packed correction cells behind it.

### D2 — L32 + L33 Cemented Pair

`L32: nd = 1.92119, νd = 23.96. Glass: 921240 class — vendor unresolved. Standalone f = −24.256 mm.`\
`L33: nd = 1.55032, νd = 75.50. Glass: 550755 class — vendor unresolved. Standalone f = +43.391 mm.`

D2 follows the stop and combines a very high-index, low-Abbe negative meniscus with a high-Abbe positive meniscus. Its computed cemented net focal length is **−53.589 mm**. The large dispersion contrast across the cemented pair is consistent with chromatic balancing, while its net negative power contributes to the overall negative equivalent power of G3.

### D3 — L34 + L35 Cemented Pair

`L34: nd = 1.84666, νd = 23.84. Glass: 847238 class — vendor unresolved. Standalone f = +32.847 mm.`\
`L35: nd = 1.83481, νd = 42.72. Glass: 835427 class — vendor unresolved. Standalone f = −22.613 mm.`

D3 is the front cemented pair of the image-stabilization group. Its computed cemented net focal length is **−74.637 mm**. L34 is individually positive while L35 is strongly negative; the cemented pair is therefore negative as a unit.

The patent identifies L34–L36, not merely D3, as the stabilization group. The optical action of image stabilization must consequently be interpreted from the three-element subgroup rather than from D3 alone.

### L36 — Biconcave Negative

`nd = 1.94595, νd = 17.98. Glass: 946180 class — vendor unresolved. Standalone f = −77.334 mm.`

L36 is the air-spaced third member of the stabilization group and has the lowest Abbe number in the prescription. Together with D3 it forms the negative L34–L36 stabilization unit. The full subgroup's equivalent focal length is −37.688 mm, substantially different from either D3's cemented net focal length or L36's standalone focal length.

### D4 — L37 + L38 Cemented Pair

`L37: nd = 1.63980, νd = 34.47. Glass: S-TIM27 equivalent — vendor unresolved. Standalone f = +23.720 mm.`\
`L38: nd = 1.77250, νd = 49.62. Glass: 773496 class — vendor unresolved. Standalone f = −33.980 mm.`

D4 is the first cemented pair after the stabilization group. Although it combines a very strong positive L37 with a strong negative L38, the complete cemented pair is positive with computed net focal length **+69.398 mm**. This pair begins the sequence of net-positive rear cemented cells that relay the beam toward the final image plane.

### D5 — L39 + L40 Cemented Pair

`L39: nd = 1.59551, νd = 39.24. Glass: 596392 class — vendor unresolved. Standalone f = +29.302 mm.`\
`L40: nd = 1.49700, νd = 81.61. Glass: 497816 class — vendor unresolved. Standalone f = −35.210 mm.`

D5 has computed cemented net focal length **+139.139 mm**. L40 is notable because the high-Abbe 497816 class is used here as a negative element, rather than only in positive elements. The rear group therefore uses dispersion selection across both power signs rather than following a simple low-dispersion-positive/high-dispersion-negative pattern.

### D6 — L41 + L42 Cemented Pair

`L41: nd = 1.87070, νd = 40.73. Glass: 871407 class — vendor unresolved. Standalone f = −25.116 mm.`\
`L42: nd = 1.84666, νd = 23.84. Glass: 847238 class — vendor unresolved. Standalone f = +20.446 mm.`

D6 combines two high-index glasses with opposite powers. Its computed cemented net focal length is **+94.478 mm**. The pair remains positive despite L41's strong standalone negative power because the positive L42 and the shared interface dominate the pair-level result.

### L43 — Biconcave Negative

`nd = 1.49700, νd = 81.61. Glass: 497816 class — vendor unresolved. Standalone f = −41.249 mm.`

L43 is an air-spaced high-Abbe negative element between D6 and the final cemented pair. It provides a strong negative interruption within an otherwise net-positive sequence of rear cemented cells. As with L40, its use of the 497816 high-Abbe class on a negative element broadens the distribution of low-dispersion glass through the rear relay.

### D7 — L44 + L45 Cemented Pair

`L44: nd = 1.78880, νd = 28.43. Glass: S-NBH58 (OHARA) equivalent — patent vendor not named. Standalone f = +24.449 mm.`\
`L45: nd = 1.98613, νd = 16.48. Glass: 986165 class — vendor unresolved. Standalone f = −27.482 mm.`

D7 is the final cemented pair and has computed net focal length **+144.513 mm**. L45 is the highest-index and lowest-Abbe element in the prescription, whereas L44 is the only element for which the final data file carries a qualified named catalog equivalence.

The catalog label on L44 is deliberately phrased as an equivalence. OHARA's current S-NBH58 entry exactly matches the patent coordinates `nd = 1.78880`, `νd = 28.43`, and specific gravity 3.33, but the patent does not identify a vendor. The data therefore do not assert that Fujifilm actually specified OHARA S-NBH58.

## Glass Identification and Selection

The patent publishes `Nd`, `νd`, `θgF`, and specific gravity for Example 7 but does not name glass manufacturers. The final data file consequently uses conservative six-digit optical classes except where a catalog equivalence is unusually well supported.

| Data-file glass annotation | nd / νd | Elements | Status |
|---|---:|---|---|
| S-TIM27 equivalent — vendor unresolved | 1.63980 / 34.47 | L11, L37 | Coordinate-compatible catalog proxy; patent θgF retained |
| 497816 class — vendor unresolved | 1.49700 / 81.61 | L12, L31, L40, L43 | Generic class |
| 437951 class — vendor unresolved | 1.43700 / 95.10 | L13, L15 | Generic class |
| 804465 class — vendor unresolved | 1.80420 / 46.50 | L14 | Generic class |
| 697555 class — vendor unresolved | 1.69680 / 55.46 | L21 | Generic class |
| 921240 class — vendor unresolved | 1.92119 / 23.96 | L32 | Generic class |
| 550755 class — vendor unresolved | 1.55032 / 75.50 | L33 | Generic class |
| 847238 class — vendor unresolved | 1.84666 / 23.84 | L34, L42 | Generic class |
| 835427 class — vendor unresolved | 1.83481 / 42.72 | L35 | Generic class |
| 946180 class — vendor unresolved | 1.94595 / 17.98 | L36 | Generic class |
| 773496 class — vendor unresolved | 1.77250 / 49.62 | L38 | Generic class |
| 596392 class — vendor unresolved | 1.59551 / 39.24 | L39 | Generic class |
| 871407 class — vendor unresolved | 1.87070 / 40.73 | L41 | Generic class |
| S-NBH58 (OHARA) equivalent — patent vendor not named | 1.78880 / 28.43 | L44 | Exact catalog-coordinate equivalence; vendor unproven |
| 986165 class — vendor unresolved | 1.98613 / 16.48 | L45 | Generic class |

Table 13 publishes `θgF` for every element. The model preserves all 21 values through the explicit conversion `dPgF = θgF - (0.6438 - 0.001682 × νd)`. The seven low-dispersion elements have positive deviations of +0.023201 to +0.049798 and carry patent-backed APD annotations. These values retain the patent g-line behavior when a compatible catalog curve supplies the other wavelengths. Complete `nC`/`nF`/`ng` triplets remain unauthored; no APO performance or production supplier identity is inferred.

Fujifilm's production specification states that the lens contains five ED and two Super ED elements. The patent prescription contains seven elements with νd of 75.50 or higher: L12, L13, L15, L31, L33, L40, and L43. That numerical correspondence strengthens the selected production correlation, but it does not establish a one-to-one mapping between those seven patent glasses and Fujifilm's ED/Super ED labels.

## Focus Mechanism

The patent defines an inner-focus mechanism in which only G2 = L21 moves axially. From infinity toward nearest focus, G2 moves imageward; G1 and G3 remain fixed relative to the image plane (¶0183–¶0184; Fig. 15). No Example-7 finite-distance spacing table is published.

The final data file therefore uses a **CONSTRAINED_RECONSTRUCTION**, not a claimed patent focus row. Fujifilm specifies a minimum focus distance of 2.75 m measured from the focal plane. The patent infinity model has a 267.287 mm total track from S1 to the image plane, so the reconstructed finite object is placed 2482.713 mm in front of S1. The only solved degree of freedom is the patent-defined G2 translation, with the adjacent-gap sum constrained to remain constant.

| Spacing | Infinity | Reconstructed 2.75 m |
|---|---:|---:|
| D9, before G2 | 2.001000 mm | 14.868863573 mm |
| D11, after G2 | 15.000000 mm | 2.132136427 mm |
| D9 + D11 | 17.001000 mm | 17.001000 mm |

The reconstructed G2 travel is therefore **12.867863573 mm imageward**. Recalculation from the final TypeScript arrays gives a finite-conjugate imaging residual effectively zero at the stated precision and a lateral magnification of −0.200312129, or 0.200312× in magnitude. Fujifilm's published maximum magnification is 0.2×, so the rounded production specification is independently consistent with the constrained reconstruction.

Fujifilm states that the production lens uses a linear motor for autofocus. That is a manufacturer mechanical specification. The optical patent establishes the moving lens group and direction but does not by itself identify the production motor.

## Chromatic Correction Strategy

The design distributes low- and high-dispersion glasses through both G1 and G3 rather than concentrating all high-Abbe material in the front group. High-Abbe positive elements occur at L12, L13, L15, L31, and L33, while the same 497816 class is used in the negative L40 and L43. This arrangement is consistent with chromatic balancing across multiple separated correction cells.

Several cemented pairs deliberately combine large dispersion differences. D1 combines νd = 46.50 and 95.10; D2 combines 23.96 and 75.50; D5 combines 39.24 and 81.61. Such pairings provide the degrees of freedom expected for longitudinal and lateral chromatic correction, but the exact aberration allocation is an interpretation of the prescription rather than an element-by-element patent claim.

Fujifilm states separately that the production lens uses five ED and two Super ED elements to suppress chromatic aberration. Because the patent does not name those commercial categories and the published partial dispersion does not identify those commercial categories, this analysis does not elevate the manufacturer statement into a patent-glass identity or an APO claim.

## Image Stabilization

Example 7 identifies L34–L36 as the stabilization group. Figure 15 shows that group moving in a direction perpendicular to the optical axis, and the patent text describes this transverse displacement as the shake-correction mechanism (¶0183–¶0185).

The final prescription recomputes patent condition (16), `fIS/f`, as −0.0776368 against the Table-38 value −0.078. Condition (17), `|(1−βIS)×βISR|`, recomputes to 2.8807617 against 2.881. An independent affine paraxial check predicts a 2.8807400 mm image displacement for a 1 mm transverse displacement of the modeled L34–L36 subgroup, agreeing in magnitude with condition (17). This is a first-order verification of the patent stabilization-group sensitivity; it is not a prediction of production stabilization stops.

Fujifilm rates the production lens at 6.0 stops of OIS. That figure is a manufacturer performance specification and is not derived from the patent's paraxial decenter condition. The patent does not publish the production actuator travel or a maximum optical decenter for Example 7.

## Conditional Expressions

The patent supplies 34 conditional expressions across its embodiments. The final TypeScript prescription was independently recomputed against Table 38. All applicable Example-7 values reproduce the published table to its displayed precision except conditions (26) and (28), which contain internal source inconsistencies. Condition (34) is not applicable because Example 7 has no aspherical surface.

| Eq. | Expression | Recomputed | Table 38 | Status |
|---:|---|---:|---:|---|
| 1 | FNo × (TL/f) | 3.138427 | 3.138 | Verified |
| 2 | TL/f | 0.550601 | 0.551 | Verified |
| 3 | dF/dL1St | 0.118266 | 0.118 | Verified |
| 4 | dF/dAmax | 0.228906 | 0.229 | Verified |
| 5 | dL1/dF | 0.309470 | 0.309 | Verified |
| 6 | NL1 | 1.639800 | 1.640 | Verified |
| 7 | NL1 + 0.01νL1 | 1.984500 | 1.985 | Verified |
| 8 | θL1 + 0.0025νL1 | 0.678505 | 0.679 | Verified |
| 9 | TL/(f tan ω) | 9.879162 | 9.879 | Verified |
| 10 | f1/f | 0.324054 | 0.324 | Verified |
| 11 | \|f2/f\| | 0.230289 | 0.230 | Verified |
| 12 | \|f3/f\| | 0.373103 | 0.373 | Verified |
| 13 | \|(1−β2²)β3²\| | 7.995877 | 7.996 | Verified |
| 14 | N2ave + 0.01ν2ave | 2.251400 | 2.251 | Verified |
| 15 | θ2ave + 0.0025ν2ave | 0.681250 | 0.681 | Verified |
| 16 | fIS/f | −0.077637 | −0.078 | Verified |
| 17 | \|(1−βIS)βISR\| | 2.880762 | 2.881 | Verified |
| 18 | NaveISn | 1.890380 | 1.890 | Verified |
| 19 | νaveISn | 30.350000 | 30.35 | Verified |
| 20 | θaveISn | 0.609685 | 0.610 | Verified |
| 21 | Bf/(f tan ω) | 2.451310 | 2.451 | Verified |
| 22 | dL1St/f | 0.253277 | 0.253 | Verified |
| 23 | dEnp/f | 0.703481 | 0.703 | Verified |
| 24 | dExp/f | −0.229174 | −0.229 | Verified |
| 25 | dF/f1 | 0.092435 | 0.092 | Verified |
| 26 | dIS/dStG3r | 0.083382 | 0.088 | Source discrepancy |
| 27 | νISRn | 81.610000 | 81.61 | Verified |
| 28 | θISRn | 0.538870 | 0.743 | Source discrepancy |
| 29 | NaveISRn | 1.724666 | 1.725 | Verified |
| 30 | νaveISRn | 54.010000 | 54.01 | Verified |
| 31 | θaveISRn | 0.572390 | 0.572 | Verified |
| 32 | SG2 | 3.670000 | 3.67 | Verified |
| 33 | SGISn | 4.040000 | 4.04 | Verified |
| 34 | Asphere curvature-ratio condition | — | — | Not applicable |

For condition (26), the patent defines `dStG3r` as the on-axis distance from stop St to the most image-side lens surface of G3. Using that literal reference gives `dIS = 6.505 mm`, `dStG3r = 78.014 mm`, and a ratio of **0.08338247**, not the Table-38 value 0.088. The table is reproduced if the denominator is instead measured from S15, the first refracting surface after the stop, to S36: 73.528 mm, giving 0.08846970. The prescription is not altered to force the table value.

For condition (28), the prose defines `θISRn` as the raw g–F partial-dispersion ratio of the qualifying negative lens after the stabilization group. The relevant Example-7 value is **0.53887**, whereas Table 38 gives 0.743. The table is reproduced by the transformed quantity `θ + 0.0025ν = 0.742895`, suggesting a formula/table drafting inconsistency. The data file converts the raw patent `θgF` to the documented `dPgF` convention, not to the condition-(28) transformed expression.

## Verification Summary

Independent recomputation from the final TypeScript arrays gives the following first-order values:

| Quantity | Computed | Patent / source |
|---|---:|---:|
| EFL | 485.445637 mm | 485.45 mm |
| BFD | 66.321740 mm | 66.32 mm |
| Total track, S1 to image | 267.287000 mm | Table-13 spacing sum |
| TL/EFL | 0.550601 | — |
| Modeled F-number | 5.700000 | 5.70 |
| Entrance-pupil position from S1 | +341.501563 mm | Condition (23) consistent |
| Exit-pupil position relative to image | −111.251357 mm | Condition (24) consistent |
| Petzval sum, Σφ/(n·n′) | +9.53172657×10⁻⁵ mm⁻¹ | Derived |
| Petzval reciprocal | 10491.279 mm | Derived |
| Reconstructed close magnification | 0.200312× | Fujifilm 0.2× rounded |

The Petzval value above is only the first-order surface sum. It is not treated as a direct prediction of the fully corrected field-curvature surface.

The modeled semi-diameters also pass the independent geometry gate used for this data file. The minimum element edge thickness is 0.369361 mm at L15; the maximum actual spherical rim-slope angle is 42.719731° at surface 30; the tightest shared-band cross-gap margin is 0.063885 mm at S20→S21; and all 40 selected exact spherical rays clear the authored apertures across infinity and the reconstructed 2.75 m state. These checks validate the modeled geometry but do not convert the inferred semi-diameters into source-published dimensions.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical part is present in the selected Example-7 prescription, so none is added to the model and no omitted plate requires an air-equivalent rear-spacing correction. No scaling is applied. Example 7 is all spherical, so there are no aspherical coefficients and therefore no asphere coefficient transformation.

## Sources

- **Primary patent:** WO 2025/013477 A1, *Imaging Lens and Imaging Device*, Example 7. Principal locations: ¶0183–¶0185; Table 13 (PDF p.48 / printed p.46); Table 14 (PDF p.49 / printed p.47); Table 38 (PDF p.71 / printed p.69); Fig. 15 (PDF p.107 / figure sheet 15/37).
- **FUJIFILM lens manual:** *GF500mmF5.6 R LM OIS WR Owner's Manual*, specifications including 21 elements / 14 groups, five ED and two Super ED elements, 500 mm, f/5.6, 6.3°, 2.75 m MFD measured from the focal plane, 0.2× maximum magnification, nine aperture blades, dimensions, weight, and filter size. https://dl.fujifilm-x.com/support/manual/lenses/lens_gf500mmf56_r_lm_ois_wr_01.pdf
- **FUJIFILM product page:** production linear-motor AF description and 6.0-stop OIS specification. https://www.fujifilm-x.com/global/products/lenses/gf500mmf56-r-lm-ois-wr/
- **FUJIFILM launch notice, May 16, 2024:** June 2024 release timing and GFX 43.8 × 32.9 mm sensor context. https://www.fujifilm-x.com/en-sg/news/introducing-fujinon-gf500mmf56-r-lm-ois-wr/
- **OHARA S-NBH58:** current catalog coordinates `nd = 1.78880`, `νd = 28.43`, specific gravity 3.33, used only to support the qualified L44 equivalence. https://oharacorp.com/glass/s-nbh58/

### Patent-rim and glass audit (2026-09-11 UTC)

Fig. 15 (PDF p.107) was inspected at 600 dpi. Its 200.967 mm glass span gives 54.51 µm/px. Clean front and rear rims agree with the authored SDs to about 12%; apparent outliers at L21 and L34–L36 are travel-arrow and bracket contamination. The optical rims at those positions are approximately 19, 11.3, 11.3, and 11.3 mm, not the automatic 26–33 mm envelope. SDs were retained. Surface and image-circle audits passed.

L11 and L37 now explicitly resolve to the existing OHARA S-TIM27 curve (catalog nd=1.639799, νd=34.47); all 21 elements have catalog dispersion while retaining Table 13 partial dispersion. [OHARA S-TIM27 datasheet](https://www.ohara-inc.co.jp/assets/en/product/pdf/estim27.pdf) independently confirms the optical class. This is a spectral proxy, not a production-glass identification.
