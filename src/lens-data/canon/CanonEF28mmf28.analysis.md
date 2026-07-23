## Patent Reference and Design Identification

**Patent:** JP S62-078520 A (`特開昭62-78520`)
**Application Number:** 昭60-219515
**Filed:** 2 October 1985
**Published:** 10 April 1987
**Inventor:** 松下 敬
**Applicant:** Canon Inc.
**Title:** *Wide-angle lens having an aspherical surface* (`非球面を有した広角レンズ`)
**Embodiment analyzed:** Numerical Example 1

The prescription is correlated here with the **CANON EF 28mm f/2.8**. The patent does not name the commercial lens, so the identification rests on convergent evidence rather than an express manufacturer statement:

1. Canon is the applicant, and the Japanese publication appeared in April 1987, the month Canon records for the product's market introduction.
2. Numerical Example 1 specifies `F = 1`, `FNO = 1:2.8`, and a full field of `74°`; the data file applies the documented uniform scale `s = 28` to obtain a 28 mm-class design.
3. The example contains five elements in five nominally air-separated groups, matching Canon's production record; the printed `D9 = 0.00` is addressed below as a source-precision limitation.
4. Its first element has an aspherical rear surface, while Canon identifies the production lens as using a molded-glass aspherical first element.

The marketed focal length remains `28 mm`. The scaled, rounded patent prescription computes an effective focal length of `28.2193758885 mm`; this design value is not substituted for the product designation. Canon's published `0.3 m` minimum focus and `0.13×` maximum magnification are likewise retained as production specifications rather than treated as patent spacing data.

## Optical Architecture

The design is a five-element, five-group retrofocus wide-angle prime with the power sequence

`negative meniscus — positive — stop — negative — positive — positive`.

L1 and L2 form the front section. The negative meniscus L1 expands the object-side ray bundle and is followed by the positive L2, which restores converging power before the aperture stop. L3 is a strong biconcave negative element immediately behind the stop. L4 and L5 form the positive rear section that completes image formation and leaves a long rear clearance.

Independent paraxial calculation from the final data arrays gives an effective focal length of `28.2194 mm` and a back focal distance of `37.1463 mm` from the last vertex. The ratio `BFD/EFL = 1.31634` establishes the design as retrofocus. The first-surface-to-image track is `85.0263 mm`, so `TL/EFL = 3.01305`; the system is not telephoto.

No elements are cemented. The standalone focal lengths stated below therefore describe individual elements evaluated in air. They are not equivalent to each element's in-situ contribution, which depends on the separations and the surrounding powered surfaces. As a further distinction, the computed L1–L2 and L3–L5 functional sections each have net positive power when evaluated separately, but their separated combination produces the substantially stronger complete system.

## Element-by-Element Analysis

### L1 — Negative Meniscus with Rear Asphere

**nd = 1.60311, νd = 60.7. Glass: S-BSM14 (OHARA catalog equivalent; patent class 603607). f = −40.134 mm.**

L1 is the sole negative element ahead of the stop and establishes the front-diverging character required for the long back focus. Its convex object-side surface and strongly shaped image-side asphere form a negative meniscus rather than a simple negative front group.

The patent's third inequality constrains the standalone first-element focal length to `−1.49 < f1/f < −1.35`; Numerical Example 1 gives `f1/f = −1.43335`. This power range limits how strongly the front element can diverge the bundle while preserving the compact five-element layout.

Surface `2A` carries the design's only asphere. Its role is not merely to add paraxial power: the higher-order departure gives the front element additional control over the wide-angle off-axis aberration burden without requiring another corrective element.

### L2 — Biconvex Positive

**nd = 1.78590, νd = 44.2. Glass: S-LAH51 (OHARA catalog equivalent; patent class 786442). f = +33.842 mm.**

L2 is the positive member of the front section. Its standalone power exceeds the magnitude of L1's negative power, and the separated L1–L2 section is net positive with a computed standalone section focal length of `+54.753 mm`.

Placed before the stop, L2 reconverges the expanded front bundle and helps establish the stop conjugates. Its high index permits substantial positive power without exceptionally steep surface curvatures. The air separation from L1 is also optically significant; the front section cannot be interpreted as a thin positive-negative pair.

### L3 — Biconcave Negative

**nd = 1.84666, νd = 23.9. Glass: S-TIH53WN (OHARA catalog equivalent; patent class 847239). f = −17.660 mm.**

L3 is the strongest standalone element in the design and lies immediately behind the aperture stop. This location gives its negative power strong influence over the rear ray bundle and the balance between the two positive rear elements.

Its high refractive index and low Abbe number distinguish it from the other glasses. In the final prescription, L3's two surfaces also provide large negative Petzval contributions that oppose the positive contributions of the surrounding elements. This statement concerns the computed surface contributions; it does not identify the historical glass supplier or imply apochromatic correction.

### L4 — Biconvex Positive

**nd = 1.79952, νd = 42.2. Glass: S-LAH52 (OHARA catalog equivalent; patent class 800422). f = +25.168 mm.**

L4 is the stronger of the two final positive elements. Its first surface is nearly plane at the scale of the system, while its rear surface carries most of the element's refractive power. This distributes the rear-section power asymmetrically rather than as a conventional nearly symmetric biconvex lens.

The patent prints the following axial gap after L4 as `D9 = 0.00`. The data file retains that source-rounded value instead of inserting an arbitrary positive spacing. L4 and L5 nevertheless remain separate physical elements and groups, consistent with the patent section drawing and Canon's five-group production specification.

### L5 — Biconvex Positive

**nd = 1.78590, νd = 44.2. Glass: S-LAH51 (OHARA catalog equivalent; patent class 786442). f = +42.863 mm.**

L5 uses the same patent glass pair as L2 but at lower standalone power. It completes the positive rear section and contributes to the final convergence while preserving the rear clearance required by the retrofocus architecture.

The rear L3–L5 section has a computed standalone section focal length of `+55.100 mm`. That value describes the section evaluated in air; it is not a cemented-group power and does not replace the complete-system EFL.

## Glass Identification and Selection

The patent publishes only `nd` and `νd`. It does not identify manufacturers, trade names, C-, F-, or g-line indices, or partial-dispersion values. The final data file therefore preserves the patent's principal values while attaching present-day OHARA catalog equivalents for spectral modeling.

| Elements | Patent nd / νd | Data-file catalog equivalent | Current catalog residual, catalog − patent | Catalog line data stored in the model | dPgF |
|---|---:|---|---:|---|---:|
| L1 | 1.60311 / 60.7 | S-BSM14, class 603607 | Δnd 0; Δνd −0.06 | nC 1.60008; nF 1.61002; ng 1.61541 | −0.0019 |
| L2, L5 | 1.78590 / 44.2 | S-LAH51, class 786442 | Δnd 0; Δνd 0.00 | nC 1.78058; nF 1.79836; ng 1.80838 | −0.0069 |
| L3 | 1.84666 / 23.9 | S-TIH53WN, class 847239 | Δnd 0; Δνd −0.04 | nC 1.83653; nF 1.87201; ng 1.89403 | +0.0179 |
| L4 | 1.79952 / 42.2 | S-LAH52, class 800422 | Δnd 0; Δνd +0.02 | nC 1.79388; nF 1.81281; ng 1.82355 | −0.0060 |

These names are catalog-derived equivalences, not claims about Canon's 1980s procurement. Every selected OHARA glass reproduces the patent `nd` at the published precision; the current catalog `νd` residuals are no larger than `0.06`, which is below the resolution of the patent's one-decimal Abbe entries. A vendor-neutral cross-check also finds same-class alternatives from other current catalogs, so historical supplier identity remains underdetermined. The stored spectral fields describe the selected current catalog equivalents and allow wavelength-dependent modeling beyond a plain Abbe approximation. They do not establish that the production lens used these exact OHARA formulations, and they do not support an APO designation.

The palette follows a clear index-and-dispersion division. L1 uses the lowest-index, highest-Abbe glass. L2, L4, and L5 use high-index moderate-dispersion lanthanum-class equivalents. L3 uses the highest-index and lowest-Abbe pair, supplying strong negative power in a compact element and opposing the positive rear section. The final chromatic behavior depends on the complete separated system rather than on any one element or catalog label.

## Focus Mechanism

The focus status is `NO_INTERNAL_RECONSTRUCTION`.

The patent provides one prescription and no focus-distance table, magnification state, moving-group designation, or variable spacing. The data file accordingly contains no `var` entries and makes no claim of unit, inner, rear, or floating focus.

Canon's product record gives mechanical manual focusing, a closest focusing distance of `0.3 m`, and maximum magnification of `0.13×`. The mechanical designation does not identify which optical group moves, and the rounded production specifications do not determine an internal trajectory or an optical object distance measured from a defined reference plane. The analysis therefore does not convert them into invented close-focus spacings.

## Aspherical Surface

The only aspherical surface is `2A`, the rear surface of L1. The patent writes the sag as

$$
X(H)=\frac{(1/R)H^2}{1+\sqrt{1-(H/R)^2}}+AH^2+BH^4+CH^6+DH^8+EH^{10}.
$$

For Numerical Example 1, the base radius is infinite, so the spherical term is zero. The published coefficients in the normalized `F = 1` system are `A = 0.8787`, `B = 0.5712`, `C = 0.5094`, `D = 0.8715`, and `E = 2.244`.

LensVisualizer has no independent quadratic polynomial coefficient. The `AH²` term is therefore represented exactly, rather than fitted, by a standard conic with

- `R = 1/(2A)`,
- `K = −1`,
- the patent's `B`, `C`, `D`, and `E` terms stored as `A4`, `A6`, `A8`, and `A10`.

The `K = −1` value is a schema reparameterization. It does not mean that the patent identifies its original plane-plus-polynomial surface as a paraboloid.

The data uses the uniform scale `s = 28`. All radii, spacings, semi-diameters, and image-plane distances are multiplied by 28. Each polynomial coefficient of order `p` is transformed as

$$
A_{p,\mathrm{scaled}}=\frac{A_{p,\mathrm{patent}}}{28^{p-1}},
$$

while `K` remains unchanged. The stored surface is therefore:

| Stored term | Value |
|---|---:|
| R | 15.9326277455 mm |
| K | −1 |
| A4 | 2.6020408163 × 10⁻⁵ mm⁻³ |
| A6 | 2.9598437407 × 10⁻⁸ mm⁻⁵ |
| A8 | 6.4589388377 × 10⁻¹¹ mm⁻⁷ |
| A10 | 2.1212925685 × 10⁻¹³ mm⁻⁹ |
| A12, A14 | 0 |

At the stored `16.3 mm` semi-diameter, the mapped surface departs from the patent's original plane by `11.332570 mm`. Of that total, `8.337922 mm` is the exactly mapped quadratic term and `2.994649 mm` is the higher-order `H⁴`–`H¹⁰` departure. Direct evaluation of the scaled patent polynomial and the stored conic-plus-polynomial representation agrees to `1.8 × 10⁻15 mm`. Canon separately describes the production first element as a molded-glass asphere; that manufacturing statement belongs to the product record, not to the numerical prescription itself.

## Modeling Assumptions and Source Limitations

The patent is normalized to `F = 1`. The `s = 28` scale maps the nominal patent focal length to the marketed 28 mm class without forcing the rounded prescription to compute exactly `28.000 mm`. The residual design EFL is consistent with the limited precision of the printed radii, spacings, and indices.

The patent does not publish a back focal distance or image plane. The final rear spacing of `37.1463355411 mm` is the independently computed paraxial image distance from surface 11.

No clear semi-diameters or physical stop diameter are published. The data-file semi-diameters are inferred from the f/2.8 pupil solution, exact and paraxial ray containment, the `37°` patent half-field, the patent section drawing, and the geometry constraints. The physical stop semi-diameter `6.2903636859 mm` is derived from the published f-number; it is not a patent table value.

The printed `D7 = 0.01` becomes `0.28 mm` under the uniform scale. The final shared aperture leaves only `0.00561 mm` of calculated rim clearance, so the data uses `gapSagFrac: 1` rather than modifying the patent spacing. The printed `D9 = 0.00` is also retained. Because the facing surfaces open away from their common axial station, no positive surrogate or hidden render trim is required.

No cover glass, filter, inactive dummy plane, flare cutter, or mechanical component appears in the sequential model. No omitted plate requires an air-equivalent rear-spacing correction.

## Conditional Expressions

The patent states five inequalities governing the front-element asphere, L2 rear curvature, L1 power, and stop placement. In condition 1, the prose's `R5` denotes the object-side surface of the third lens; because the numerical table inserts the stop as table position R5, this is surface R6 in the transcribed sequence.

With

$$
\phi=8(N-N')(B-A^3),
$$

and the patent's native `F = 1` normalization, Numerical Example 1 gives:

| Condition | Computed value | Required interval | Result |
|---|---:|---:|---|
| $f^4\phi/R5$ | 0.749998 | 0.7 to 2.2 | Satisfied |
| $R4/f$ | −4.882000 | −6.0 to −4.5 | Satisfied |
| $f1/f$ | −1.433352 | −1.49 to −1.35 | Satisfied |
| $l1/f$ | 1.190000 | 1.0 to 1.2 | Satisfied |
| $l2/l1$ | 0.268908 | 0.16 to 0.28 | Satisfied |

Here `f1` is the standalone focal length of L1, `l1` is the axial distance from the L1 asphere to the stop, and `l2` is the distance from the rear of L2 to the stop. These conditions describe the patent's design domain; they are not production tolerances.

## Aberration-Correction Strategy

The patent addresses a central compact-retrofocus problem: reducing element count and axial length tends to increase the burden of wide-angle off-axis correction. Its principal response is to place the only asphere on the rear of the first negative meniscus, where the surface can alter higher-order ray bending early in the system while the subsequent positive element and stop position retain the required first-order power distribution.

The remaining spherical elements divide the correction burden around the stop. L2 restores front-section power; L3 supplies strong negative power immediately behind the stop; and L4–L5 provide the final positive convergence. Surface-by-surface Petzval calculation gives a sum of `+0.00584434 mm⁻¹`, corresponding to a signed Petzval radius of `−171.106 mm`. The relatively modest sum results from cancellation among much larger positive and negative surface terms, particularly the negative contributions associated with the mapped L1 asphere and L3.

The patent's aberration plots for Numerical Example 1 show the intended assessment at f/2.8 and fields extending to `ω = 37°`. The data model does not convert those plots into unreported numerical aberration values.

## Verification Summary

The final data arrays reproduce the following independently checked quantities:

| Quantity | Computed result |
|---|---:|
| Effective focal length | 28.2193758885 mm |
| Modeled f-number | 2.8000000000 |
| Back focal distance from surface 11 | 37.1463355411 mm |
| First-surface-to-last-vertex track | 47.8800000000 mm |
| First-surface-to-image track | 85.0263355411 mm |
| BFD/EFL | 1.3163414984 |
| Signed Petzval radius | −171.1057131987 mm |

The paraxial matrix determinant is unity to numerical precision, and a collimated paraxial ray closes on the assigned image plane with a residual of approximately `4.4 × 10⁻16`. The inferred apertures pass the edge-thickness, actual rim-slope, conic-domain, shared-gap, and analytic render-trim checks. Exact meridional rays reach the image plane at the patent's `37°` half-field for the verified central pupil zones; outer zones vignette at physical apertures rather than traversing invalid geometry.

## Sources and References

1. **JP S62-078520 A**, *Wide-angle lens having an aspherical surface*, Canon Inc., published 10 April 1987. Numerical Example 1 is on printed pages 113–114; Figure 1 and the corresponding aberration plots are on printed page 115.
2. **Canon Camera Museum**, [EF28mm f/2.8](https://global.canon/en/c-museum/product/ef264.html). Source for product identity, April 1987 introduction, five-element/five-group construction, five diaphragm blades, 0.3 m closest focus, 0.13× maximum magnification, and the molded-glass first-element asphere.
3. **OHARA**, current catalog entries for [S-BSM14](https://oharacorp.com/glass/s-bsm14/), [S-LAH51](https://oharacorp.com/glass/s-lah51/), [S-TIH53WN](https://oharacorp.com/glass/s-tih53wn/), and [S-LAH52](https://oharacorp.com/glass/s-lah52/). These support the data file's present-day catalog-equivalent labels and line-index annotations, not historical procurement attribution.
4. **Companion model:** `CanonEF28mmf28.data.ts`. This is the authority for labels, stored indices, glass annotations, element focal lengths, asphere coefficients, semi-diameters, and focus-state representation.
