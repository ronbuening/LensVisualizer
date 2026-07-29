# NIKON AF ZOOM-NIKKOR 28-200mm f/3.5-5.6 G IF-ED

## Patent Reference and Design Identification

**Patent:** US 6,621,643 B2

**Application Number:** US 10/125,589

**Priority:** April 25, 2001; JP 2001-127816 and JP 2001-127830

**Filed:** April 19, 2002

**Granted:** September 16, 2003

**Inventor:** Haruo Sato

**Assignee:** Nikon Corporation

**Title:** *Zoom Lens System*

**Embodiment analyzed:** Example 1

The prescription is Example 1 of US 6,621,643 B2. The patent identifies a four-group positive–negative–positive–positive zoom in which all four groups move during zooming and the second group moves toward the object for closer focus. Example 1 supplies the complete d-line prescription, four aspherical surfaces, three infinity zoom stations, two additional finite-conjugate rows at each station, and seven numerical design conditions [1, cols. 9–12; Table 1].

The selected production correlation is the Nikon AF Zoom-Nikkor 28-200mm f/3.5-5.6 G IF-ED. This is a correlation between the fixed patent example and the marketed lens, not a claim that Nikon published Example 1 as an unchanged production master. The identification rests on convergent evidence:

1. Example 1 covers 29.1–192 mm, corresponding closely to the marketed 28–200 mm range.
2. The patent and Nikon's design history describe the same four-group positive–negative–positive–positive architecture with all groups moving during zooming [1, col. 10; 2].
3. The patent assigns closer focusing to translation of G2 toward the object, matching Nikon's account of an internal-focusing cam system [1, col. 10; 2].
4. Example 1 has four aspherical surfaces distributed across three physical components. Nikon describes the production lens as using four aspherical surfaces on three elements [2].
5. The compact master group Gm contains only a positive component and a negative component. Nikon likewise describes a two-element fourth group [2].
6. The example uses the same high-Abbe material in three positive elements, corresponding to Nikon's identification of ED glass as a principal means of reducing the element count [2].
7. The computed patent model focuses to 0.430 m from the image plane at all three zoom stations. Nikon gives 0.44 m throughout the marketed zoom range and a telephoto reproduction ratio of 1:3.2 [2].
8. The corrected Japanese priority date is April 25, 2001. Nikon states that optical design began in January 2001, was completed on February 21, 2001, and reached release in September 2003 [1, Certificate of Correction; 2].

Marketing and exact model values are deliberately separated:

| Quantity | Production marketing | Example 1 / computed model |
|---|---:|---:|
| Focal-length range | 28–200 mm | 29.099988–191.998482 mm |
| Maximum aperture | f/3.5–5.6 | f/3.6, f/4.6, f/5.9 at the three modeled stations |
| Minimum focus distance | 0.44 m | 0.430 m from the image plane |
| Telephoto reproduction ratio | 1:3.2 | approximately 1:3.175 from computed magnification |

The model remains at the patent's 1:1 scale. No radii, thicknesses, image-plane distances, or aspherical coefficients were scaled. Source surface 24, a neutral plane labeled fixed stop `SF`, is omitted because the patent gives no clear diameter and it does not change refractive medium. Its following 7.8500 mm air spacing is retained on data surface `23A`, preserving the axial position of source surface 25. The sole modeled aperture stop is the patent's surface 15, labeled `STO` in the data file.

The patent does not publish semi-diameters. Every authored semi-diameter is therefore a modeling inference constrained by traced rays, edge thickness, actual aspherical rim slope, conic domains, cross-gap clearance, off-axis containment, and render diagnostics. These values are not presented as manufacturer or patent dimensions.

## Optical Architecture

Example 1 is a four-group high-ratio zoom with power sequence positive–negative–positive–positive:

- **G1:** positive front group, comprising the cemented L11 doublet and L12.
- **G2:** strong negative variator and focusing group, comprising hybrid L21, L22, L23, and L24.
- **G3:** positive relay group behind the aperture stop, comprising L31, L32, and L33.
- **Gm:** compact positive master group, comprising double-aspherical L1 and hybrid negative L2.

The patent counts 12 physical elements in 11 air-separated groups. The data model contains 14 refractive material-layer records because each of the two hybrid components is represented as a thin resin layer bonded to a glass body. This material-layer split does not alter the physical `elementCount` of 12.

Independent thick-lens computation gives the following in-air functional-group powers at the wide-state internal spacings:

| Group | Net focal length | Function in the zoom |
|---|---:|---|
| G1 | +80.172 mm | Positive front collector and wide-angle entrance group |
| G2 | -14.737 mm | Negative variator and internal-focus group |
| G3 | +35.335 mm | Positive relay immediately behind the stop |
| Gm | +72.034 mm | Positive master group and final aberration-correction section |

These are in-situ group results, not the standalone focal lengths of the individual elements. The cemented and hybrid component powers are likewise separate quantities: L11 is +164.686 mm as a cemented doublet, hybrid L21 is -21.247 mm, and hybrid L2 is -93.303 mm.

All four groups move toward the object relative to the fixed image plane as the lens moves from wide to telephoto. Across the three published stations, none of the group trajectories reverses. The reference-surface movements from 29.1 to 192 mm are approximately -55.674 mm for G1, -19.685 mm for G2, -38.030 mm for G3, and -42.312 mm for Gm.

Under the project's strict classifications, the complete system changes character across the zoom range. At 29.1 and 50 mm, BFD exceeds EFL, so those states are retrofocus. At 192 mm, total track divided by EFL is 0.8893, so the long-end state is telephoto. These classifications apply to the complete optical system at each zoom station, not to every constituent group.

The central design economy is the two-component master group. The patent explains that a positive and a negative component are the minimum pair needed to retain chromatic correction in the rear group, while the aspherical surfaces provide additional degrees of freedom for spherical and off-axis correction [1, cols. 5–9]. Nikon's design history independently emphasizes the same reduction of the fourth group from the more usual four-to-six elements to two [2].

## Element-by-Element Analysis

### G1 — Positive Front Group

#### L11 — Cemented Positive Doublet

**L11a:** nd = 1.846660, νd = 23.78. Glass: `847238 — dense flint class`. Standalone f = -164.173 mm.

**L11b:** nd = 1.640000, νd = 60.09. Glass: `J-LAK01 (Hikari; patent code 640601)`. Standalone f = +81.429 mm.

L11a is a negative meniscus with its convex side toward the object. L11b is a positive rear member cemented directly to it. The two standalone powers must not be read as the power of the cemented assembly: with the shared interface retained, L11 is a net positive doublet with computed focal length +164.686 mm.

The doublet forms the leading part of G1. Its low-Abbe negative front member and higher-Abbe positive rear member provide opposite dispersion signs within a positive net component. This is a conventional achromatizing arrangement, but no apochromatic claim follows because the data contains no `dPgF` for either glass.

#### L12 — Positive Meniscus

**nd = 1.497820, νd = 82.52. Glass: `J-FKH1 (Hikari; patent code 498825)`. Standalone f = +151.513 mm.**

L12 is a positive meniscus with its convex side toward the object. It completes G1 after a 0.1000 mm air gap from L11. Its high Abbe number supplies low-dispersion positive power in the front group. Current Hikari J-FKH1 has the same `nd` and a `νd` difference of only 0.05, so the catalog model is used while preserving the patent's 498825 code.

Together, L11 and L12 produce G1's computed +80.172 mm focal length. G1 remains positive throughout zooming because its internal geometry does not change; its movement relative to the other groups changes the system focal length.

### G2 — Negative Variator and Focusing Group

#### L21 — Hybrid Negative Meniscus

**L21r:** nd = 1.553890, νd = 38.09. Glass: `Unmatched (optical resin, nd=1.553890, νd=38.09)`. Standalone f = -1328.983 mm.

**L21g:** nd = 1.834810, νd = 42.72. Glass: `835427 — lanthanum flint class`. Standalone f = -21.605 mm.

L21 is a bonded glass/resin component. The thin 0.0500 mm resin layer carries the object-side asphere `6A`; the glass body provides nearly all of the component's negative paraxial power. The very long standalone focal length of the resin layer shows why it should not be described as an independent powered lens in the physical count.

With the resin/glass junction retained, the hybrid component has a computed net focal length of -21.247 mm. Its placement at the front of G2 gives the asphere substantial leverage over the beam entering the strongest negative group.

#### L22 — Biconcave Negative

**nd = 1.772500, νd = 49.61. Glass: `773496 — lanthanum flint class`. Standalone f = -34.790 mm.**

L22 is an air-spaced biconcave member following L21. It adds negative power without introducing another cemented interface. In the fixed four-element G2 assembly, L22 shares the variator and focusing motion of the group rather than moving independently.

#### L23 — Biconvex Positive

**nd = 1.808090, νd = 22.76. Glass: `808228 — very dense flint class`. Standalone f = +22.399 mm.**

L23 is the sole positive member within the otherwise negative G2. Its high refractive index and low Abbe number are explicit patent design variables: Example 1 reports `np = 1.80809` and `νp = 22.76`, satisfying the patent limits `np < 1.85` and `νp < 27` [1, cols. 2 and 12].

The positive power moderates the aberration and dispersion balance of the strong negative group. It does not reverse the group sign; the complete G2 remains strongly negative at -14.737 mm.

#### L24 — Biconcave Negative

**nd = 1.772500, νd = 49.61. Glass: `773496 — lanthanum flint class`. Standalone f = -31.072 mm.**

L24 is the rear negative member of G2. It uses the same stored glass class as L22, giving the group a symmetric material choice around the positive L23 despite different radii and thicknesses.

The air gaps immediately before and after G2 are the focusing pair. During closer focus, the group translates rigidly toward the object: D5 decreases by exactly the amount that D14 increases, while every internal spacing in L21–L24 remains fixed.

### G3 — Positive Relay Group

#### L31 — Biconvex Positive

**nd = 1.497820, νd = 82.52. Glass: `J-FKH1 (Hikari; patent code 498825)`. Standalone f = +30.869 mm.**

L31 is the strongest standalone positive element in G3 and lies 0.5000 mm behind the aperture stop. Its high-Abbe material adds substantial positive power with comparatively low primary dispersion.

The position directly behind `STO` gives L31 high influence over axial marginal rays. The authored semi-diameter is inferred from the validated pupil and ray bundles, not from a published clear aperture.

#### L32 — Positive Meniscus

**nd = 1.497820, νd = 82.52. Glass: `J-FKH1 (Hikari; patent code 498825)`. Standalone f = +95.557 mm.**

L32 is a weaker positive meniscus using the same J-FKH1-coordinate material as L12 and L31. It extends the low-dispersion positive contribution through the relay group without adding another glass class.

#### L33 — Negative Meniscus

**nd = 1.846660, νd = 23.78. Glass: `847238 — dense flint class`. Standalone f = -53.558 mm.**

L33 is the negative rear member of G3. It uses the same dense-flint class as L11a. The positive L31 and L32 powers dominate, so the assembled G3 remains net positive with computed focal length +35.335 mm.

The high-dispersion negative L33 forms a chromatic counterweight to the two ED-class positive elements. The statement concerns the sign and Abbe pairing visible in the prescription; it does not imply secondary-spectrum correction beyond what the available spectral data can establish.

### Gm — Positive Master Group

#### L1 — Double-Aspherical Biconvex Positive

**nd = 1.516800, νd = 64.10. Glass: `517641 — borosilicate crown class`. Standalone f = +44.529 mm.**

L1 is a biconvex positive element with aspherical surfaces on both sides, labeled `22A` and `23A`. It is the principal positive component of the compact master group. The patent specifically assigns double aspheres to this positive component and describes the image-side profile as increasing curvature toward the effective aperture [1, cols. 8–10].

The data retains the code-level glass label because the patent does not identify a supplier. HIKARI/Nikon's J-BK7A shares code 517641 and nearly the same νd, but the analysis does not convert the stored class into a manufacturer-specific glass assertion [5].

#### L2 — Hybrid Negative Meniscus

**L2r:** nd = 1.553890, νd = 38.09. Glass: `Unmatched (optical resin, nd=1.553890, νd=38.09)`. Standalone f = +265.961 mm.

**L2g:** nd = 1.804000, νd = 46.58. Glass: `804466 — lanthanum flint class`. Standalone f = -69.005 mm.

L2 is a bonded resin/glass component. The thin resin layer is positive as an isolated thick element in air, while the glass body is negative. Their cemented net is negative, with computed focal length -93.303 mm. This distinction is important: the positive standalone resin power does not make the physical L2 component positive.

The object-side surface `25A` is aspherical. The patent describes the negative master-group component as becoming more strongly negative toward the periphery, using the asphere to supplement the correction available from a two-component rear group [1, cols. 8–10].

L1 and L2 together form a net-positive Gm with computed focal length +72.034 mm. The 7.8500 mm air separation between them is also the spacing used in the patent's `dpn/dm` condition. The neutral source plane `SF` lies at the rear vertex of L1 but is omitted from the sequential data because no active diameter is published.

## Glass Identification and Selection

The patent supplies d-line index and Abbe number but does not name glass vendors. Most rows therefore retain six-digit classes or `Unmatched (...)` labels. Two Hikari classifications are strong enough to use as coordinate successors: current J-LAK01 differs from patent 640601 by the last rounded code digit, and current J-FKH1 has the exact `nd` of patent 498825 with only a 0.05 `νd` difference. The patent codes remain explicit rather than being presented as melt provenance.

| Stored glass annotation | nd | νd | Elements | Data status |
|---|---:|---:|---|---|
| `847238 — dense flint class` | 1.846660 | 23.78 | L11a, L33 | Exact six-digit class; vendor unresolved; representative `nC/nF/ng` stored |
| `J-LAK01 (Hikari; patent code 640601)` | 1.640000 | 60.09 | L11b | Current Hikari coordinate successor; representative `nC/nF/ng` stored |
| `J-FKH1 (Hikari; patent code 498825)` | 1.497820 | 82.52 | L12, L31, L32 | Current Hikari coordinate successor for the patent/production ED correlation |
| `Unmatched (optical resin, nd=1.553890, νd=38.09)` | 1.553890 | 38.09 | L21r, L2r | Hybrid optical resin; not treated as catalog glass |
| `835427 — lanthanum flint class` | 1.834810 | 42.72 | L21g | Code-level class; representative `nC/nF/ng` stored |
| `773496 — lanthanum flint class` | 1.772500 | 49.61 | L22, L24 | Code-level class; representative `nC/nF/ng` stored |
| `808228 — very dense flint class` | 1.808090 | 22.76 | L23 | Exact condition glass class; representative `nC/nF/ng` stored |
| `517641 — borosilicate crown class` | 1.516800 | 64.10 | L1 | Code-level class; no line-index triplet authored |
| `804466 — lanthanum flint class` | 1.804000 | 46.58 | L2g | Code-level class; representative `nC/nF/ng` stored |

The stored `nC`, `nF`, and `ng` values are catalog-derived representative class data. They are not values printed in the patent. They are omitted for the J-FKH1-coordinate rows, both resin layers, and 517641; J-FKH1 instead supplies source-backed formula-3 dispersion at runtime. The data contains no `dPgF`, and it makes no APO or patent-specific anomalous-partial-dispersion claim.

The broad material strategy is visible without assigning proprietary melt names. G1 combines a low-Abbe dense-flint negative with a higher-Abbe positive and adds an ED-class positive meniscus. G2 uses a high-index, low-Abbe positive inside a strong negative group. G3 pairs two ED-class positives with a dense-flint negative. Gm uses a moderate-index crown positive with a high-index negative hybrid. This distributes primary chromatic balancing across all four moving groups rather than concentrating it in a single achromat.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal-focus reconstruction was made.

The patent publishes infinity, β = -0.03333, and close-object spacing rows at each of the three zoom positions. The data file uses the published close rows 7-POS, 8-POS, and 9-POS. G2 moves toward the object while D5 decreases and D14 increases by the same amount. D21 remains unchanged, so the movement is a rigid translation of the complete second group.

| Zoom station | D5 infinity → close | D14 infinity → close | G2 travel toward object | Computed close β | Object-to-image distance |
|---:|---:|---:|---:|---:|---:|
| 29.1 mm | 2.16928 → 0.79962 mm | 19.14864 → 20.51830 mm | 1.36966 mm | -0.08066591 | 429.999954 mm |
| 50 mm | 9.21209 → 7.41055 mm | 12.10583 → 13.90737 mm | 1.80154 mm | -0.13668985 | 429.999828 mm |
| 192 mm | 38.15808 → 29.90142 mm | 0.80311 → 9.05977 mm | 8.25666 mm | -0.31492115 | 429.999022 mm |

At every zoom station, `D5 + D14` is conserved to numerical precision. The focus travel increases substantially toward the telephoto end, consistent with Nikon's description of an internal-focusing cam that compensates the focal-length dependence of focus-group movement [2].

The authored BF values are the independently computed infinity back focal distances and remain fixed between infinity and close states: 39.147734, 56.529568, and 81.459502 mm. This represents a fixed image plane. The finite-conjugate residuals remain within the precision of the patent's printed movement table.

The model's 0.430 m distance is measured from object plane to image plane. The patent's `D0` is measured only to the first optical vertex, so the comparison requires adding the optical vertex track and BF. Nikon's marketed 0.44 m and 1:3.2 values are kept as production specifications rather than substituted into the patent spacing table [2].

## Aspherical Surfaces

Example 1 has four aspherical surfaces on three physical components:

- `6A`: object-side resin surface of hybrid L21.
- `22A`: object-side surface of positive master-group element L1.
- `23A`: image-side surface of L1.
- `25A`: object-side resin surface of hybrid L2.

The patent writes the conic term as

$$
S(h)=\frac{h^2/R}{1+\sqrt{1-\kappa h^2/R^2}}+\sum C_p h^p.
$$

LensVisualizer uses the standard denominator

$$
1+\sqrt{1-(1+K)h^2/R^2},
$$

so every tabulated patent coefficient was converted with `K = κ - 1`. The patent writes odd terms as powers of absolute radial height, such as $C_3|h|^3$ and $C_5|h|^5$. These terms remain rotationally symmetric and are stored directly as `A3` and `A5`.

No scaling was applied. Consequently, the polynomial coefficients retain the source units mm$^{1-p}$ without an `A_p/s^{p-1}` transformation.

### Surface 6A — Hybrid L21 Front

Patent κ = 6.2788; stored standard `K = 5.2788`.

```text
A3  = -1.1851e-6
A4  =  1.4170e-6
A6  = -9.0614e-9
A8  = -8.3202e-11
A10 =  1.3488e-12
A12 = -3.8798e-15
A14 =  0
```

This is a molded resin asphere on a thin layer bonded to L21's negative glass body. Its paraxial power is weak compared with the glass body, so its principal modeled role is higher-order profile control at the entrance to G2.

### Surface 22A — L1 Front

Patent κ = -99.9999; stored standard `K = -100.9999`.

```text
A3  = -2.3379e-6
A4  = -1.6150e-5
A6  = -2.1098e-7
A8  =  7.4305e-10
A10 =  1.7382e-11
A12 =  0
A14 =  0
```

The strongly negative conic constant has no finite positive-K real-height limit. This front asphere works with `23A` across the finite thickness of L1, allowing the two surfaces to act at different ray heights and incidence angles.

### Surface 23A — L1 Rear

Patent κ = 2.1022; stored standard `K = 1.1022`.

```text
A3  = -3.5074e-6
A4  = -1.2621e-5
A6  = -5.8347e-8
A8  = -4.5042e-10
A10 =  2.2333e-11
A12 = -3.2891e-15
A14 =  0
```

This is the second asphere on L1. The patent specifically associates the double-aspherical positive component with control of spherical and off-axis aberrations in the compact master group [1, cols. 8–10].

### Surface 25A — Hybrid L2 Front

Patent κ = 576.7229; stored standard `K = 575.7229`.

```text
A3  = -6.9399e-6
A4  = -3.8277e-5
A5  =  6.5412e-8
A6  = -5.6657e-9
A8  = -7.0116e-10
A10 =  3.7914e-12
A12 =  1.6919e-14
A14 =  0
```

The printed Table 1 value for `C12` is `0.16919E-13`. OCR rendered it as `0.16919-13`; the data uses the value confirmed from the rendered patent page, `1.6919e-14`. This is an explicit source-reading correction, not an optical optimization.

Surface `25A` has the tightest real conic domain of the four aspheres. Its authored semi-diameter remains below the current validator's 0.98 conic-domain limit, and the Stage 2 geometry check found no conic or rim-slope trim.

## Chromatic Correction Strategy

The patent prescription uses d-line indices and Abbe numbers. It plots d- and g-line aberration curves but does not provide per-element C-, F-, or g-line indices, Sellmeier coefficients, or anomalous partial-dispersion deviations [1, Table 1 and Figs. 2–4]. The analysis therefore does not characterize the system as apochromatic.

Three physical elements—L12, L31, and L32—share `nd = 1.497820` and `νd = 82.52`. Nikon identifies ED glass as one of the means by which the production design reduced element count [2]. Current Hikari J-FKH1 supplies the source-backed coordinate-successor dispersion model; retaining patent code 498825 in each label makes clear that the classification does not prove the historical melt.

The ED-class elements are distributed between G1 and G3 rather than concentrated in one cemented group. L12 supplies low-dispersion positive power in the front group; L31 and L32 provide low-dispersion positive power behind the stop. Dense-flint negatives L11a and L33 provide opposing dispersion in those positive groups.

G2 uses the unusual high-index, low-Abbe positive L23 inside a net-negative group. The patent treats its `np` and `νp` as explicit design conditions. This arrangement provides a chromatic degree of freedom while retaining the strong negative group power required for a 6.6× zoom.

Gm contains a crown-class positive L1 and a lanthanum-flint negative hybrid L2. The two-component master group is the minimum physical pair used by the patent to retain chromatic correction while reducing the rear group thickness [1, cols. 5–9].

## Conditional Expressions

The first embodiment defines seven conditions. Example 1 satisfies each condition when recomputed from the final prescription arrays.

| No. | Patent condition | Example 1 displayed value | Independently computed | Result |
|---:|---|---:|---:|---|
| 1 | $0.10 < X_{dw}/f_t < 0.54$ | 0.395 | 0.395410 | Satisfied |
| 2 | $0.20 < f_1/f_t < 0.55$ | 0.418 | 0.417564 | Satisfied |
| 3 | $0.03 < |f_2|/f_t < 0.20$ | 0.0768 | 0.0767558 | Satisfied |
| 4 | $0.23 < d_{pn}/d_m < 0.90$ | 0.611 | 0.610895 | Satisfied |
| 5 | $0.2 < f_3/f_m < 1.0$ | 0.491 | 0.490530 | Satisfied |
| 6 | $n_p < 1.85$ | 1.80809 | 1.80809 | Satisfied |
| 7 | $\nu_p < 27$ | 22.76 | 22.76 | Satisfied |

`Xdw` is the first-to-last optical-vertex distance at the wide end, excluding BF. `f1`, `f2`, `f3`, and `fm` are the computed functional-group focal lengths. `dpn/dm` describes the separation and total axial extent of the two-component master group. `np` and `νp` refer to positive element L23 in G2 [1, cols. 1–2 and 12].

The largest difference between the patent's rounded displayed condition value and the recomputation is 0.000470 for `f3/fm`. All differences are consistent with the precision of the printed values.

## Verification Summary

The final TypeScript arrays were independently parsed and traced rather than assumed to match the Stage 1 transcription. Sequential height/reduced-angle tracing and an independent ABCD multiplication agree to machine precision.

| Zoom station | Published focal length | Computed EFL | BFD | Total track to image | Track / EFL |
|---:|---:|---:|---:|---:|---:|
| Wide | 29.1 mm | 29.099988 mm | 39.147734 mm | 115.066454 mm | 3.954175 |
| Intermediate | 50.0 mm | 49.999893 mm | 56.529568 mm | 130.012128 mm | 2.600248 |
| Telephoto | 192.0 mm | 191.998482 mm | 81.459502 mm | 170.740122 mm | 0.889278 |

The maximum absolute EFL discrepancy from the patent's displayed values is 0.00152 mm. The surface-by-surface Petzval sum, computed as $\phi/(n n')$ at every refracting surface, is `+0.00140643613 mm⁻¹`. A radius written as `-1/ΣP` under that explicit convention would be approximately -711.0 mm; the sum is the primary quantity because Petzval-radius sign conventions vary.

### Stop and Pupil Modeling

The patent identifies the location of the aperture stop but does not publish its clear radius. The data file therefore uses the exact modeled f-number array `[3.6, 4.6, 5.9]` to control pupil geometry.

The authored base `STO.sd` is 8.156585 mm, derived from the wide-state paraxial pupil. The independent runtime-style exact trace, which includes the aspherical surface normals, derives physical stop radii of 8.24235, 8.25305, and 8.61409 mm at the three zoom stations. These are modeling results, not patent aperture dimensions.

### Semi-Diameter and Geometry Validation

The final semi-diameters are inferred. The patent-figure pass reduced L12's envelope and enlarged the hybrid L21 envelope to follow Figure 1 more closely. The targeted geometry gate passes edge-thickness, rim-slope, conic-domain, cross-gap, render-trim, and selected infinity/close/off-axis ray checks.

The non-default `gapSagFrac: 0.915` is used because the telephoto axial marginal ray requires an 8.8 mm semi-diameter at surface 19. At the 19→20 boundary, the shared-band sag intrusion is 2.45778 mm across a 2.70000 mm axial gap, leaving 0.24222 mm of physical clearance. The parameter does not conceal an overlap.

### Source Corrections and Omissions

The following source and modeling actions are explicit:

- The Certificate of Correction changes the two Japanese priority application numbers from 2000-127816 and 2000-127830 to 2001-127816 and 2001-127830.
- Surface `25A` uses `A12 = 1.6919e-14`, confirmed from the rendered patent page.
- Patent conic coefficient κ was converted to standard `K = κ - 1`.
- Odd polynomial powers are radial absolute-height terms.
- Source surface 24 (`SF`) is omitted as an optically neutral plane with no published clear diameter; its 7.8500 mm spacing is preserved on `23A`.
- No sensor cover glass, filter, folded path, or mechanical component is included.
- No uniform scale was applied.
- Close-focus states are published, not reconstructed.

## Sources

1. **US 6,621,643 B2**, Haruo Sato, *Zoom Lens System*, Nikon Corporation, granted September 16, 2003; Certificate of Correction issued January 6, 2004. The unmodified patent PDF is included with the lens job package.
2. Nikon, [“NIKKOR—The Thousand and One Nights No. 65: The AF Zoom-Nikkor 28-200mm f/3.5-5.6G IF-ED”](https://imaging.nikon.com/imaging/information/story/0065/), by Haruo Sato.
3. Nikon, [“Product History: 2000's”](https://imaging.nikon.com/imaging/information/products_history/2000/).
4. OHARA, [Optical Glass Catalog Download](https://www.ohara-inc.co.jp/en/product/catalog/).
5. Nikon Business / HIKARI, [J-BK Optical Glass Catalog](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/bk.html).
6. SCHOTT Advanced Optics, [N-SF57 optical-glass data](https://www.schott.com/shop/advanced-optics/en/Optical-Glass/N-SF57/c/glass-N-SF57) and [N-LAK21 optical-glass data](https://www.schott.com/shop/advanced-optics/en/Optical-Glass/N-LAK21/c/glass-N-LAK21), used only as representative class checks rather than vendor identification.
7. HOYA Optics Europe, [Optical Glass Catalogue](https://www.hoyaoptics.eu/download/optical-glass-catalogue), used in the cross-vendor class audit.
8. Nikon/Hikari, [Optical Glass Catalog 2023](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf), J-FKH1 and J-LAK01 formula-3 data.
