## Patent Reference and Design Identification

**Patent:** JP 2017-068114 A
**Filed:** 2015-09-30
**Published:** 2017-04-06
**Inventors:** Tetsushi Miwa; Hiroshi Yamamoto; Haruo Sato
**Applicant:** Nikon Corporation
**Title:** Fisheye Zoom Lens, Optical Apparatus, and Method for Manufacturing Fisheye Zoom Lens
**Embodiment analyzed:** Example 1 (第1実施例; Tables 1–4; Figures 1–3)

This analysis adopts **Example 1** as the fixed production correlation specified for the project. The correlation is not presented as manufacturer-confirmed, and the numerical example is not asserted to be the exact production prescription. The companion data file therefore preserves the patent’s published numerical prescription at 1:1 scale while keeping the marketed product specifications in separate metadata fields.

The strongest points of correspondence are the focal range, variable maximum aperture, fisheye field, two-group zoom architecture, internal focusing within the positive rear group, Nikon authorship, and the short interval between patent publication and product release. Nikon markets the production lens as an F-mount, FX-format 8–15 mm f/3.5–4.5 fisheye zoom. The patent example computes to 8.17997–15.45007 mm and publishes f/3.56351–4.67681. Nikon announced the production lens on 2017-05-31, less than two months after publication of the Japanese application.

The construction details do not coincide closely enough to identify Example 1 as the production formula:

| Criterion | Patent Example 1 | Nikon production specification | Interpretation |
| --- | ---: | ---: | --- |
| Focal range | 8.17997–15.45007 mm | 8–15 mm | Close correspondence |
| Maximum aperture | f/3.56351–4.67681 | f/3.5–4.5 | Close, but not identical |
| FX field | 178.284° at W; 175.002° at T | 180°–175° | Close correspondence |
| Physical elements | 18 | 15 | Direct mismatch |
| Air-spaced components / marketed groups | 13 | 13 | Numerical agreement, but not proof of identity |
| Aspherical content | One aspherical surface on L12 | Two aspherical lens elements | Direct mismatch |
| Low-dispersion content | Two J-FKH1-coordinate elements | Three ED elements | Direct mismatch |
| Published close state | β ≈ −0.03333; 0.352–0.573 m from focal plane | 0.16 m; 0.34× maximum ratio | Not the production minimum-focus state |

The patent directly publishes the prescription, zoom spacings, near-focus spacings, group powers, projection-related conditions, and one asphere for Example 1 (¶0075–0089). Product identity, mount, format, marketed focal range, marketed aperture, 15-element construction, three ED elements, two aspherical elements, and 0.16 m minimum focus distance come from Nikon’s product specification and launch release.

Several modeling boundaries are explicit:

- No uniform scaling was applied. Radii, thicknesses, image heights, focal lengths, and aspheric coefficients remain at the patent’s 1:1 scale.
- The patent’s aperture stop is explicitly surface 18; the data file labels this plane `STO`. Its axial placement is not inferred.
- The patent does not publish clear semi-diameters. The authored semi-diameters are ray-envelope-based modeling values checked against Figure 1 and the current geometric constraints. They are not source manufacturing diameters.
- The generic camera OLPF shown outside the Example 1 prescription is omitted, as are sensor cover glass, filters, inactive planes, and mechanical parts.
- Paragraph 0084 describes back focus as beginning at surface 31, but Table 1 places 1.7000 mm of glass between surfaces 31 and 32 and assigns the variable `BF` after surface 32. The sequential model therefore uses surface 32 to image, the only interpretation that reproduces the published total tracks.

## Optical Architecture

Example 1 is a straight-axis, all-refractive fisheye zoom with two principal power groups. **G1** is negative and contains five air-spaced singlets. **G2** is positive and is divided into **G2A**, the positive internal-focus subgroup, and **G2B**, the positive rear subgroup. The aperture stop lies between G2A and G2B. In the data model, the 18 physical elements form 13 air-spaced components: eight singlets and five cemented doublets.

The architecture is strongly retrofocus under the project criterion because the back focal distance exceeds the Gaussian effective focal length throughout the zoom range. It is not telephoto under the separate criterion `TL/EFL < 1`; total track is many times the focal length. The large negative front group compresses the extreme object field before the positive rear system forms the image at an SLR-compatible rear distance.

The patent identifies the projection as approximately equisolid-angle through conditions (1) and (2). The data file accordingly uses `fisheye-equisolid` projection metadata rather than interpreting the extreme field with a rectilinear tangent mapping. The published image-circle diameters increase from 22.4 mm at the wide state to 43.2 mm at the tele state, changing from a circular-fisheye-sized image to full-frame diagonal coverage.

### Published zoom states

| State | Design EFL | Published FNo | Full field | Image circle | D1 | D2 | BF | Total track |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| W | 8.17997 mm | 3.56351 | 178.28426° | 22.4 mm | 18.71674 mm | 3.48126 mm | 38.05242 mm | 129.03610 mm |
| M | 11.84980 mm | 4.12559 | 177.69916° | 33.0 mm | 7.35774 mm | 3.48126 mm | 47.30267 mm | 126.92735 mm |
| T | 15.45007 mm | 4.67681 | 175.00154° | 43.2 mm | 1.45774 mm | 3.48126 mm | 56.37761 mm | 130.10229 mm |

At infinity focus, D1 contracts monotonically as focal length increases, bringing G1 and G2 closer together. Relative to the fixed image plane, G2 and the stop move monotonically toward the object. G1 moves imageward from W to M and then reverses toward the object from M to T. The three published positions are therefore necessary to preserve the front-group reversal rather than reducing the zoom to a two-endpoint interpolation.

### Patent-defined group powers

| Group | Composition | Computed in-situ focal length | Patent value |
| --- | --- | ---: | ---: |
| G1 | L11–L15 | −10.909972 mm | −10.91 mm |
| G2A / G2F | L21–L24 | +40.000071 mm | +40.00 mm |
| G2B | L25–L213 | +44.000038 mm | +44.00 mm |
| G2 | G2A + stop spacing + G2B | +27.500042 mm | +27.50 mm |

These are in-situ group powers calculated with the patent-defined internal spacings. They must not be confused with the standalone-in-air focal lengths listed for individual elements or with the net powers of the cemented components.

## Element-by-Element Analysis

### G1 — Negative Front Zoom Group

#### L11 — Negative Meniscus, Convex to Object

**nd = 1.72916, νd = 54.61. Glass: J-LAK18 (HIKARI). Standalone f = −34.335301 mm.**

L11 is the large-diameter front field-compressing element. Its strong negative meniscus form begins the retrofocus transformation while presenting a convex outer surface to the object field. Its authored semi-diameter is 18.9 mm, the largest in the design, but this value is a modeled clear aperture rather than a patent-published manufacturing diameter.

The glass assignment is a catalog-coordinate match, not a glass name supplied by the patent. The moderately high index with crown-like dispersion permits substantial negative bending without using the very low Abbe material that appears later in G1.

#### L12 — Aspherical Negative Meniscus, Convex to Object

**nd = 1.59201, νd = 67.05. Glass: 592670 low-dispersion crown class; closest M-PCD51 (HOYA), vendor unproven. Standalone f = −50.379098 mm.**

L12 carries the sole aspherical surface, 3A, on its object side. In modeling terms, the asphere supplements the negative front-group power while controlling the strong peripheral departure associated with the extreme fisheye field. The patent describes L12 as a negative meniscus with an aspherical object-side surface (¶0076).

The six-digit class label is retained because the patent gives only `nd` and `νd`; it does not identify a supplier. The closest public coordinate match is insufficient to establish a vendor-specific production glass.

#### L13 — Biconcave Negative

**nd = 1.59319, νd = 67.90. Glass: J-PSKH1 (HIKARI). Standalone f = −30.321059 mm.**

L13 supplies strong negative power near the center of G1. Its biconcave form reinforces the front group’s negative power after the aspherical meniscus. The high Abbe value keeps this added negative power from depending on a strongly dispersive flint.

This element is air-spaced from both L12 and L14; its standalone power therefore remains a useful first-order description, although its actual contribution depends on the surrounding separations and ray heights.

#### L14 — Positive Meniscus, Convex to Object

**nd = 1.80518, νd = 25.45. Glass: J-SF6 (HIKARI). Standalone f = +30.005674 mm.**

L14 is the only positive element in G1. Its high index and low Abbe number contrast sharply with the adjacent low-dispersion negative elements. The positive meniscus reduces the net negative power of the front group while supplying a strong chromatic and monochromatic balancing term inside G1.

This statement describes the power and glass opposition visible in the prescription; the patent does not publish a surface-by-surface aberration budget. No claim of apochromatic behavior follows from the `nd`/`νd` pair alone.

#### L15 — Rear Biconcave Negative

**nd = 1.59319, νd = 67.90. Glass: J-PSKH1 (HIKARI). Standalone f = −53.785155 mm.**

L15 closes G1 immediately before the variable D1 gap. It adds relatively weak negative power in air and shapes the beam delivered to the moving positive rear system. Because D1 changes from 18.71674 mm to 1.45774 mm across the zoom, L15’s interaction with L21 changes substantially even though the element itself is fixed within G1.

### G2A / G2F — Positive Internal-Focus Subgroup

G2A contains two singlets followed by one cemented doublet. The whole subgroup moves for focusing and has an in-situ focal length of +40.000071 mm. Its internal thicknesses remain fixed; focus is represented by equal-and-opposite changes in the air spaces before and after the subgroup.

#### L21 — Positive Meniscus, Convex to Object

**nd = 1.74400, νd = 44.81. Glass: J-LAF2 (HIKARI). Standalone f = +61.260606 mm.**

L21 begins the positive focus subgroup. Its weak positive standalone power receives the converging/diverging bundle emerging from G1 and begins the rear-system power build-up. The very weak rear curvature makes it optically closer to a positive meniscus than to a symmetric positive lens.

#### L22 — Negative Meniscus, Concave to Object

**nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI). Standalone f = −153.699390 mm.**

L22 is a weak negative singlet within the translating positive subgroup. Its high-index glass permits a small negative correction with relatively gentle net standalone power. Because it travels with G2A, its role is to moderate the focus subgroup’s aberration changes rather than to establish a separate focusing motion.

The `J-LASF08A class` wording records a close coordinate match with a small Abbe residual; it does not assert the exact commercial melt.

#### D1 — Cemented L23 + L24

**Cemented component net f = +59.171468 mm.** The pair is positive as a cemented component in air even though its individual members have much stronger and opposing standalone powers. The junction at surface 16 carries the downstream element identity L24 and introduces no synthetic cement layer.

##### L23 — Biconcave Negative

**nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI). Standalone f = −13.270741 mm.**

L23 is the strongly negative front member of D1. Its standalone focal length is not the power of the finished doublet; the following positive element and the cemented interface substantially change the component result.

##### L24 — Biconvex Positive

**nd = 1.67003, νd = 47.14. Glass: J-BAF10 (HIKARI). Standalone f = +11.728183 mm.**

L24 is the strong positive rear member of D1 and the last element of G2A. Its opposing power and higher Abbe number yield a moderately positive cemented net. Surface 17 then opens into the variable D2 gap leading to the fixed stop.

### G2B — Positive Rear Imaging Subgroup

G2B begins after the stop and contains four cemented doublets followed by one singlet. Its in-situ focal length is +44.000038 mm. The succession of alternating positive and negative cemented components redistributes power and dispersion through the rear half of the lens while retaining a positive subgroup total.

#### D2 — Cemented L25 + L26

**Cemented component net f = −75.180446 mm.** This is a weakly negative cemented component in air, despite the strong negative standalone power of L25 and positive standalone power of L26.

##### L25 — Negative Meniscus, Concave to Object

**nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI). Standalone f = −20.754214 mm.**

L25 is the first glass element after the stop and the negative front member of D2. Its position near the aperture gives it substantial leverage over axial and pupil-dependent aberrations, although the patent does not assign a unique aberration to this element.

##### L26 — Positive Meniscus, Concave to Object

**nd = 1.51823, νd = 58.82. Glass: J-K3 (HIKARI). Standalone f = +34.245571 mm.**

L26 provides the lower-index, higher-Abbe positive partner. The cemented pair remains net negative because the negative member and interface geometry dominate the component power.

#### D3 — Cemented L27 + L28

**Cemented component net f = +22.221738 mm.** D3 is the strongest positive cemented component in G2B by net power.

##### L27 — Biconvex Positive

**nd = 1.60342, νd = 38.03. Glass: J-F5 (HIKARI). Standalone f = +15.137405 mm.**

L27 supplies strong positive power in the middle of G2B. Its edge thickness is the smallest verified element edge thickness in the modeled geometry, 0.147975 mm, so its authored semi-diameter is constrained by both ray containment and physical edge clearance.

##### L28 — Negative Meniscus, Concave to Object

**nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI). Standalone f = −45.226735 mm.**

L28 moderates L27’s positive power and forms the cemented rear portion of D3. The two elements have relatively close Abbe numbers, so this component should not be described as an isolated high-order chromatic corrector from `νd` alone.

#### D4 — Cemented L29 + L210

**Cemented component net f = −26.600437 mm.** D4 is a net negative component formed from a strong high-index negative element and a very high-Abbe positive element.

##### L29 — Biconcave Negative

**nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI). Standalone f = −15.336887 mm.**

L29 supplies the negative portion of D4. Its high index concentrates negative surface power in a thin 0.7000 mm element.

##### L210 — Positive Meniscus, Convex to Object

**nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI). Standalone f = +36.340381 mm.**

L210 is the first of two J-FKH1-coordinate elements. Its unusually high Abbe number provides low-dispersion positive power against the dense negative partner. This supports an achromatizing interpretation, but the data contain no `nC`, `nF`, `ng`, or `dPgF`; the element is therefore not used to claim apochromatic or anomalous-partial-dispersion behavior.

#### D5 — Cemented L211 + L212

**Cemented component net f = +76.542496 mm.** D5 is a weakly positive cemented component in air.

##### L211 — Negative Meniscus, Convex to Object

**nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI). Standalone f = −39.928495 mm.**

L211 is the negative front member of the fourth rear doublet. Its meniscus orientation differs from L25 and L28, changing the distribution of bending while retaining the repeated high-index negative glass family.

##### L212 — Biconvex Positive

**nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI). Standalone f = +26.968738 mm.**

L212 is the second J-FKH1-coordinate positive element. It yields the positive net sign of D5 and continues the low-dispersion positive/high-index negative pairing used in D4.

#### L213 — Final Biconvex Positive

**nd = 1.48749, νd = 70.45. Glass: 487704 fluor-crown class; closest FC5 (HOYA), vendor unproven. Standalone f = +121.283297 mm.**

L213 is a weak final positive singlet preceding the corrected back-focus spacing. It has the lowest index in the prescription and a high Abbe number. Its modest power and rear position are consistent with final image-side correction and relay duties, but no manufacturer or patent text assigns a single named aberration to it.

The six-digit class is retained because the nearest public HOYA coordinate does not establish that Nikon used FC5 or any specific production glass.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not name glass vendors. The companion data file therefore distinguishes exact catalog-coordinate matches from class-level or nearest-coordinate assignments.

| Authored glass label | nd | νd | Elements | Basis and limitation |
| --- | ---: | ---: | --- | --- |
| J-LAK18 (HIKARI) | 1.72916 | 54.61 | L11 | Exact HIKARI coordinate match |
| 592670 low-dispersion crown class | 1.59201 | 67.05 | L12 | Closest public coordinate M-PCD51; vendor unproven |
| J-PSKH1 (HIKARI) | 1.59319 | 67.90 | L13, L15 | Exact HIKARI coordinate match |
| J-SF6 (HIKARI) | 1.80518 | 25.45 | L14 | Exact HIKARI coordinate match |
| J-LAF2 (HIKARI) | 1.74400 | 44.81 | L21 | Exact HIKARI coordinate match |
| J-LASF08A class (HIKARI) | 1.88300 | 40.66 | L22, L23, L25, L28, L29, L211 | `nd` exact; small `νd` residual retained as class-level wording |
| J-BAF10 (HIKARI) | 1.67003 | 47.14 | L24 | Exact HIKARI coordinate match |
| J-K3 (HIKARI) | 1.51823 | 58.82 | L26 | Exact HIKARI coordinate match |
| J-F5 (HIKARI) | 1.60342 | 38.03 | L27 | Exact HIKARI coordinate match; also coordinate-compatible with Schott F5 |
| J-FKH1 (HIKARI) | 1.49782 | 82.57 | L210, L212 | Exact HIKARI coordinate match; low-dispersion/ED-class coordinates |
| 487704 fluor-crown class | 1.48749 | 70.45 | L213 | Closest public coordinate FC5; vendor unproven |

The palette uses repeated high-index negative glass at six positions and reserves the highest-Abbe material for positive members L210 and L212. This is a clear first-order chromatic balancing pattern. It is not sufficient evidence for APO correction or anomalous partial dispersion. The data file intentionally stores no `nC`, `nF`, `ng`, or `dPgF` because neither the selected patent example nor the verified catalog assignment supplies those values at the required certainty.

## Focus Mechanism

The focus status is **PUBLISHED**, not reconstructed. Example 1 designates all of G2A—L21 through L24—as the focus group G2F. For a change from infinity to the published near state, G2A moves toward the image. The stop and G2B remain fixed relative to the image plane during focus (¶0078).

| Zoom state | D1 infinity | D1 near | D2 infinity | D2 near | G2A imageward travel | Computed β | Object distance from focal plane |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| W | 18.71674 mm | 19.24919 mm | 3.48126 mm | 2.94882 mm | 0.53245 mm | −0.03329825 | 0.352460 m |
| M | 7.35774 mm | 7.69258 mm | 3.48126 mm | 3.14643 mm | 0.33484 mm | −0.03330229 | 0.461387 m |
| T | 1.45774 mm | 1.71937 mm | 3.48126 mm | 3.21963 mm | 0.26163 mm | −0.03330219 | 0.573028 m |

At each zoom position, the increase in D1 is matched by the decrease in D2 to within 0.00001 mm, preserving the axial position of the stop-side fixed structure. The computed magnifications agree with the patent’s β = −0.03333 to within 3.2×10⁻5.

The data field `closeFocusM = 0.3524603` represents the wide-state near row because the schema requires a single value. It is not the production lens’s marketed minimum focus distance. Nikon specifies 0.16 m from the focal plane and a maximum reproduction ratio of 0.34× for the production lens; those production values are not substituted into this patent model.

## Aspherical Surfaces

Only surface **3A**, the object-side surface of L12, is aspherical. The patent writes the conic term as

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-K_{\mathrm{pat}}y^2/r^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}.
$$

The project convention instead uses `1 − (1 + K)y²/R²` under the square root. Therefore

$$
K_{\mathrm{project}}=K_{\mathrm{pat}}-1.
$$

Patent `Kpat = 1.0000` becomes project `K = 0.0000`, a spherical conic base. No scale factor was applied, so the polynomial coefficients required no transformation.

| Surface | R | K | A4 | A6 | A8 | A10 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 3A | 59.7861 mm | 0.0000 | 2.04342×10⁻6 mm⁻³ | −1.19834×10⁻8 mm⁻⁵ | −1.95003×10⁻11 mm⁻⁷ | 0 |

At the accepted modeled semi-diameter of 10.7 mm, the polynomial departure from the conic base is **+5.450701 µm**. This value is computed at the authored clear aperture; it is not a patent-published departure or a manufacturing-zone specification. The patent does not identify the surface as molded, polished, or hybrid, so no manufacturing process is assigned.

## Chromatic Correction Strategy

The first-order chromatic structure alternates glass power and dispersion rather than concentrating all low-dispersion material in one group. G1 combines high-Abbe negative elements L12, L13, and L15 with the low-Abbe, high-index positive L14. G2A uses opposing dense negative and positive glasses in D1. G2B repeats high-index negative members, then introduces the two highest-Abbe positive elements in D4 and D5.

The two J-FKH1-coordinate elements have `νd = 82.57` and are defensibly described as low-dispersion or ED-class coordinates. The production lens is marketed with three ED elements, but Example 1 contains only two such obvious coordinate matches. That difference is another reason the patent example is treated as an approximate correlation rather than the production formula.

No line-index or partial-dispersion data are authored. Consequently, the model supports discussion of ordinary longitudinal and lateral chromatic balancing only at the Abbe level. It does not support an APO designation, a secondary-spectrum magnitude, or a claim that either J-FKH1-coordinate element has anomalous partial dispersion.

## Conditional Expressions

Example 1 satisfies all thirteen conditions reported for the embodiment. The values below were recomputed from the final data arrays rather than copied from the patent’s rounded Table 4.

| No. | Expression | Recomputed value | Required interval | Result |
| ---: | --- | ---: | --- | --- |
| 1 | `Yw / {2 fw sin(θw/2)}` | 0.97549949 | 0.50–2.50 | Pass |
| 2 | `Yt / {2 ft sin(θt/2)}` | 1.01085735 | 0.50–2.50 | Pass |
| 3 | `θw` | 89.14213° | ≥ 50° | Pass |
| 4 | `θt` | 87.50077° | ≥ 50° | Pass |
| 5 | `nd2an1 − nd2ap1` | 0.17598500 | 0.01–0.50 | Pass |
| 6 | `νd2ap1 − νd2an1` | 5.31500000 | −10–30 | Pass |
| 7 | `|f2A1| / (−f1)` | 3.66637713 | 1.00–25.00 | Pass |
| 8 | `|f2B1| / (−f1)` | 4.03301118 | 1.00–7.50 | Pass |
| 9 | `f2 / (−f1)` | 2.52063365 | 1.80–3.20 | Pass |
| 10 | `|f2F| / (−f1)` | 3.66637713 | 1.00–6.00 | Pass |
| 11 | `(r1 + r2) / (r1 − r2)` | 1.70039438 | 0.80–2.30 | Pass |
| 12 | `Bfw / fw` | 4.65192868 | 3.5–8.0 | Pass |
| 13 | `TLw / fw` | 15.77462350 | 12.0–18.0 | Pass |

Conditions (1) and (2) express the relationship between image height, focal length, and half-field for the intended equisolid-angle mapping. Conditions (5) and (6) constrain the average index and Abbe separation between positive and negative glasses in G2A. Conditions (7)–(10) govern the relative group and focus-group powers. Conditions (11)–(13) constrain the front-element shape, back-focus ratio, and total-track ratio.

## Verification Summary

The final data arrays were checked with sequential height/reduced-angle tracing and an independent ABCD assembly. The fresh Stage 4 implementations agree to a maximum matrix difference of 2.84×10⁻14.

| State | Computed EFL | Published EFL | Computed BFD | Authored BF gap | Computed total track | Published total track |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| W | 8.17997970 mm | 8.17997 mm | 38.05268217 mm | 38.05242 mm | 129.03592 mm | 129.03610 mm |
| M | 11.84981914 mm | 11.84980 mm | 47.30300294 mm | 47.30267 mm | 126.92717 mm | 126.92735 mm |
| T | 15.45011797 mm | 15.45007 mm | 56.37803732 mm | 56.37761 mm | 130.10211 mm | 130.10229 mm |

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is **−0.000944736702 mm⁻¹**, corresponding to a signed equivalent Petzval radius of **−1058.495979 mm** under the adopted convention. This is a paraxial field-curvature invariant, not the final fisheye image-surface shape after higher-order correction.

Because the patent provides no clear-aperture table, every semi-diameter in the data file is a modeling inference. The accepted apertures contain the configured W/M/T on-axis marginal rays, the published near-state rays, and the vignetting-limited 0.60-field off-axis samples used by the renderer; they are not asserted to pass an unvignetted full stop pupil at the extreme fisheye field. The most restrictive region is the 1.0000 mm air space between surfaces 12 and 13: both are authored at 5.5882 mm, leaving 0.000151 mm axial clearance at the shared rim. The model therefore uses `gapSagFrac = 1.0` for this source-limited geometry instead of the shared 0.9 default. Layout controls are not used to conceal invalid overlap.

The minimum modeled element edge thickness is 0.147975 mm at L27, and the maximum actual rim-slope angle is 51.2241° at surface 2. The values are model-validation results, not manufacturing tolerances.

## Sources

1. **JP 2017-068114 A**, *Fisheye Zoom Lens, Optical Apparatus, and Method for Manufacturing Fisheye Zoom Lens*, Example 1, Tables 1–4 and Figures 1–3. Attached patent PDF; filed 2015-09-30 and published 2017-04-06.
2. Nikon Corporation, **AF-S Fisheye NIKKOR 8-15mm f/3.5-4.5E ED — product specification**: <https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/fisheye/af-s_fisheye8-15mmf35-45e_ed/>
3. Nikon Corporation, **Launch release**, 2017-05-31: <https://www.nikon.com/company/news/2017/0531_lens_01/>
4. HIKARI Glass Co., Ltd., **Optical Glass Catalog**: <https://www.hikari-g.co.jp/optical_glass/catalog/>
5. HOYA Corporation, **Optical Glass Data Download**: <https://www.hoya-opticalworld.com/english/datadownload/index.html>
6. Companion files `NikonAFSFisheye815mmf3545EED.data.ts`, `NikonAFSFisheye815mmf3545EED.audit.md`, `NikonAFSFisheye815mmf3545EED.stage4-verify.py`, and `NikonAFSFisheye815mmf3545EED.stage4-results.json` for the final modeled arrays, provenance decisions, and independent calculations.
