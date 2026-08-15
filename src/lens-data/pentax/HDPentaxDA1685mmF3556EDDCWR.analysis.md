## Patent Reference and Design Identification

**Patent:** JP 2016-114800 A\
**Application Number:** JP 2014-253683\
**Filed:** 2014-12-16\
**Published:** 2016-06-23\
**Inventor:** Yoichi Nomura\
**Applicant:** Ricoh Imaging Company, Ltd.\
**Title:** Zoom lens system\
**Embodiment analyzed:** Numerical Example 1

This analysis treats Numerical Example 1 as the fixed production correlation for the **HD PENTAX-DA 16-85mm f/3.5-5.6 ED DC WR**. The correlation is convergent rather than an explicit manufacturer statement that the production lens uses this patent example.

Several independent characteristics support the correlation:

1. Ricoh Imaging specifies the production lens as a PENTAX K-mount APS-C zoom with **16 elements in 12 groups**. Example 1 likewise contains 16 physical optical elements in 12 air-separated groups, organized into four moving functional zoom groups.
2. Ricoh Imaging markets a **16-85 mm f/3.5-5.6** range. Example 1 publishes 16.48, 35.00, and 82.45 mm infinity-focus states with rounded FNO values of 3.6, 4.4, and 5.8. The marketing and design values are therefore close but are not treated as numerically interchangeable.
3. The production specification states three aspherical optical elements. Example 1 has three aspherical surfaces, on the L21 hybrid lens, L34, and L41.
4. Example 1 holds image height at **Y = 14.24 mm** across the three tabulated zoom states, consistent with the APS-C format classification used by the production lens.
5. The applicant is Ricoh Imaging Company, Ltd., and the patent filing falls in the same product-development period as Ricoh Imaging's 2014 launch of the production lens.

Ricoh Imaging separately identifies the production lens as K-mount/APS-C, with a 0.35 m closest focusing distance, 0.26× maximum reproduction ratio, seven diaphragm blades, Quick-Shift Focus, and a built-in DC autofocus motor. Those product specifications are not used to alter the patent prescription or to infer an unpublished internal focus law.

## Optical Architecture

Example 1 is a four-functional-group **positive-negative-positive-positive** zoom. The patent identifies the groups as G1 through G4 and places the aperture stop between G2 and G3, immediately in front of G3; the stop moves with G3 (¶0019, ¶0039). The authored model preserves that location as the single `STO` plane.

The physical prescription contains **16 optical elements in 12 air-separated groups**. The data file contains 17 authored optical-media entries because physical lens L21 is a hybrid component: a 0.200 mm synthetic-resin aspheric layer is bonded to its glass substrate. The resin and glass are separate refractive media for tracing, while `elementCount` remains 16 to preserve the patent's physical count.

The four functional zoom groups have independently recomputed paraxial powers of:

| Functional group | Recomputed EFL | Patent EFL | Sign |
|---|---:|---:|---|
| G1 | +110.859368 mm | +110.86 mm | positive |
| G2 | -14.385511 mm | -14.39 mm | negative |
| G3 | +49.490447 mm | +49.49 mm | positive |
| G4 | +41.399499 mm | +41.40 mm | positive |

G1 is a relatively weak positive front group, while G2 is strongly negative. G3 is positive and moves together with the stop. G4 is another positive group, but internally follows the patent's positive-negative-positive power arrangement: L41 is positive, L42-L43 is a negative cemented unit, and L44 is positive (¶0025-¶0027).

The patent's generic motion diagram states that all four groups can move objectward from wide to tele, but ¶0021 explicitly permits alternative trajectories. Example 1 is one such case. With the image plane fixed and positions closed from the actual authored surface spacings plus the tabulated back-focus values, the group-anchor movements are:

| Segment | G1 | G2 | STO / G3 | G4 |
|---|---:|---:|---:|---:|
| Wide → mid | -19.373 mm | **+0.141 mm** | -14.339 mm | -18.550 mm |
| Mid → tele | -37.971 mm | **-15.465 mm** | -24.190 mm | -25.930 mm |

Negative values are objectward and positive values imageward. Thus G2 makes a small imageward excursion from wide to the intermediate state and then reverses objectward toward tele. This behavior follows the numerical spacing table and does not require a patent-value correction.

The stop **location** is source-published, but its clear diameter is not. The model uses an inferred stop semi-diameter of **6.95 mm**. With the actual prescription, this single physical stop gives modeled wide/mid/tele f-numbers of **3.585229851, 4.435970318, and 5.763925078**, which round to the patent's 3.6/4.4/5.8 table. The modeled f-numbers, rather than the marketing 3.5-5.6 range, govern the LensVisualizer aperture geometry.

Clear semi-diameters are also not published. The data file therefore uses inferred modeling apertures derived from the verified ray envelopes, the patent optical sections, and current edge/rim/gap geometry constraints. They are not patent aperture data. No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or other non-participating plate is present in the Example 1 sequential prescription, so none is included and no air-equivalent rear-spacing compensation is required.

## Element-by-Element Analysis

### L11-L12 — Cemented Front Pair

**L11:** nd = 1.84666, νd = 23.8. Glass: `847238 (vendor-neutral optical code)`. Standalone f = **-139.191800 mm**.\
**L12:** nd = 1.77250, νd = 49.6. Glass: `773496 (vendor-neutral optical code)`. Standalone f = **+126.272069 mm**.

The patent describes L11 as an object-side-convex negative meniscus and L12 as an object-side-convex positive meniscus, cemented together (¶0040). Their standalone powers are substantial and opposite in sign, but the **cemented pair as a unit is only weakly positive**, with independently recomputed EFL **+1435.362189 mm**. This distinction is important: the cemented net power is not represented by either constituent's standalone focal length.

Together with L13, this pair forms the positive G1 front group. The patent's condition (4) constrains G1 as a whole rather than either cemented constituent individually.

### L13 — Positive Meniscus

**nd = 1.80400, νd = 46.6. Glass: `804466 (vendor-neutral optical code)`. Standalone f = +119.376823 mm.**

L13 is the second air-separated component of G1 and is described as an object-side-convex positive meniscus (¶0040). Its positive standalone power reinforces the weak net positive power left by the L11-L12 cemented pair. The patent does not assign a separate element-specific aberration function to L13, so the analysis does not infer one beyond its role in the verified positive G1 power distribution.

### L21 — Hybrid Negative Meniscus

**L21 resin layer:** nd = 1.52972, νd = 42.7. Glass: `Unmatched (synthetic resin; patent nd=1.52972, vd=42.7)`. Standalone f = **-743.136801 mm**.\
**L21 glass substrate:** nd = 1.88300, νd = 40.8. Glass: `883408 (vendor-neutral optical code)`. Standalone f = **-19.418324 mm**.

L21 is one physical negative meniscus but two authored optical media. The patent explicitly states that a synthetic-resin aspheric layer is bonded to the object-side surface of the glass negative lens (¶0023, ¶0041). Surface `6A` is the air-to-resin asphere, surface 7 is the resin-to-glass junction, and surface 8 returns to air.

The two-material L21 stack has recomputed net EFL **-18.924454 mm**. Paraxially, the thin resin layer is weak by itself relative to the glass substrate; the patent separately emphasizes the aspheric profile, stating that positive refractive action strengthens away from the optical axis (¶0023).

### L22 — Biconcave Negative

**nd = 1.77250, νd = 49.6. Glass: `773496 (vendor-neutral optical code)`. Standalone f = -24.711918 mm.**

L22 is a biconcave negative element in G2 (¶0041). Its substantial negative standalone power is consistent with the strongly negative net power of G2. No independent element-specific correction mechanism is stated in the patent, so its role is kept at the level supported by the group architecture.

### L23 — Biconvex Positive

**nd = 1.76182, νd = 26.5. Glass: `762265 (vendor-neutral optical code)`. Standalone f = +25.683342 mm.**

L23 is the positive element embedded within the otherwise negative-dominated G2 sequence (¶0041). Its standalone power is almost equal in magnitude to L22 but opposite in sign. The complete G2 group nevertheless has verified net EFL **-14.385511 mm**, illustrating why standalone element power cannot be substituted for in-situ group power.

### L24-L25 — Cemented Negative Unit

**L24:** nd = 1.80400, νd = 46.6. Glass: `804466 (vendor-neutral optical code)`. Standalone f = **-31.676811 mm**.\
**L25:** nd = 1.76182, νd = 26.5. Glass: `762265 (vendor-neutral optical code)`. Standalone f = **+60.788354 mm**.

The patent places this cemented pair at the image-side end of G2 and describes L24 as biconcave negative and L25 as biconvex positive (¶0041). The recomputed cemented-unit EFL is **-70.500942 mm**: despite the positive L25 constituent, the combined unit remains negative.

Paragraph ¶0035 specifically attributes the image-side cemented pair in G2 to balancing axial and lateral chromatic aberration between the wide and tele ends. That statement is a patent design rationale. The present data can verify the prescription and paraxial powers, but without per-line indices or partial-dispersion data it does not independently quantify that chromatic correction.

### L31 — Biconvex Positive

**nd = 1.51633, νd = 64.1. Glass: `516641 (vendor-neutral optical code)`. Standalone f = +30.667290 mm.**

L31 begins the positive G3 group immediately behind the stop (¶0042). Its strong positive standalone power is one of the principal converging contributions within G3. The stop and G3 translate together through zoom, as specified by the patent.

### L32-L33 — Cemented Positive Unit

**L32:** nd = 1.51633, νd = 64.1. Glass: `516641 (vendor-neutral optical code)`. Standalone f = **+27.401008 mm**.\
**L33:** nd = 1.79952, νd = 42.2. Glass: `800422 (vendor-neutral optical code)`. Standalone f = **-31.516554 mm**.

The patent describes L32 as biconvex positive and L33 as an image-side-convex negative meniscus, cemented together (¶0042). The individual powers nearly oppose one another, but the cemented pair has a weak positive net EFL of **+162.923507 mm** after thickness and interface effects are included.

This is another case where standalone element powers and the cemented net must be kept separate. The pair remains part of the positive G3 group even though one constituent is strongly negative.

### L34 — Biconcave Negative Asphere

**nd = 1.74330, νd = 49.3. Glass: `743493 (vendor-neutral optical code)`. Standalone f = -36.182304 mm.**

L34 is the final element of G3 and carries the aspheric object-side surface `22A` (¶0024, ¶0042). The patent describes the peripheral behavior of this negative asphere as weakening its negative refractive action away from the axis. Paragraph ¶0036 specifically connects this rear G3 asphere with balancing spherical aberration, coma, and astigmatism between the wide and tele ends.

That aberration-control description is taken from the patent. The data file independently verifies L34's geometry, paraxial power, and aspheric coefficients, but it does not claim an independent full-field aberration decomposition beyond the source text.

### L41 — Biconvex Positive Rear Asphere

**nd = 1.49700, νd = 81.6. Glass: `497816 (vendor-neutral optical code)`. Standalone f = +43.228259 mm.**

L41 is the first element of G4 and carries the image-side asphere `25A` (¶0025, ¶0043). It has the higher Abbe number of the two outer positive G4 singletons in Example 1, with νd = 81.6. The patent makes this high-νd choice central to conditions (1) and (2).

Paragraph ¶0028 states that making L41 aspherical allows spherical aberration, coma, astigmatism, and distortion to be balanced over the zoom range. The patent further describes the surface profile as weakening positive refractive action away from the axis. These are source-stated design functions, not independent monochromatic-aberration measurements from the present paraxial verification.

### L42-L43 — Cemented Negative Unit

**L42:** nd = 1.61800, νd = 63.4. Glass: `618634 (vendor-neutral optical code)`. Standalone f = **+108.723291 mm**.\
**L43:** nd = 1.88300, νd = 40.8. Glass: `883408 (vendor-neutral optical code)`. Standalone f = **-26.857313 mm**.

L42 is biconvex positive and L43 is biconcave negative; together they form the central cemented component of G4 (¶0025, ¶0043). Their recomputed cemented-unit EFL is **-35.996612 mm**, confirming that the pair behaves as the patent's negative cemented unit even though its front constituent is positive.

The patent's G4 rationale is explicitly architectural: placing this negative cemented unit between positive L41 and positive L44 creates a more symmetric power distribution and is used for chromatic and off-axis aberration control (¶0027). The present model verifies the negative net power of the cemented unit and the positive net power of G4 as a whole.

### L44 — Biconvex Positive

**nd = 1.53775, νd = 74.7. Glass: `538747 (vendor-neutral optical code)`. Standalone f = +34.890060 mm.**

L44 is the final positive singleton of G4 and the last glass element in the prescription (¶0025, ¶0043). Its positive standalone power is somewhat stronger than L41's, while its νd remains above the patent's 73 threshold.

Together, L41 and L44 flank the negative L42-L43 cemented unit. Their standalone focal-length ratio is **1.238984941**, placing Example 1 inside both the patent's basic and preferred condition-(3) ranges.

## Glass Identification and Selection

The patent provides d-line `nd` and `νd` coordinates but no vendor glass names. The data file therefore uses vendor-neutral six-digit optical codes rather than assigning a specific OHARA, HOYA, SCHOTT, HIKARI, CDGM, or SUMITA identity from coordinate coincidence alone. The synthetic-resin layer is explicitly marked `Unmatched` because it is not a normal catalog glass assignment.

| Data-file glass label | nd | νd | Elements |
|---|---:|---:|---|
| `847238` | 1.84666 | 23.8 | L11 |
| `773496` | 1.77250 | 49.6 | L12, L22 |
| `804466` | 1.80400 | 46.6 | L13, L24 |
| `Unmatched (synthetic resin)` | 1.52972 | 42.7 | L21 resin layer |
| `883408` | 1.88300 | 40.8 | L21 glass, L43 |
| `762265` | 1.76182 | 26.5 | L23, L25 |
| `516641` | 1.51633 | 64.1 | L31, L32 |
| `800422` | 1.79952 | 42.2 | L33 |
| `743493` | 1.74330 | 49.3 | L34 |
| `497816` | 1.49700 | 81.6 | L41 |
| `618634` | 1.61800 | 63.4 | L42 |
| `538747` | 1.53775 | 74.7 | L44 |

No element carries authored `nC`, `nF`, `ng`, or `dPgF` values, and no vendor-specific Sellmeier identity is asserted. Consequently, the analysis does **not** claim apochromatic correction or numerical anomalous-partial-dispersion performance.

The patent itself calls the high-νd outer positive elements L41 and L44 anomalous-dispersion materials (¶0025, ¶0029). Both therefore carry `apd: "patent"`, with notes that the source publishes no line-index or `dPgF` table. Ricoh's production construction diagram additionally marks the corresponding final L44 position as the product's single ED element. This supports the positional display annotation without establishing a production supplier.

## Focus Mechanism

The optical focus status is **NO_INTERNAL_RECONSTRUCTION**.

Example 1 publishes only infinity-focus zoom states. It does not provide a close-focus spacing table, a focusing-group identity, a motion law, object-distance series, or magnification series from which an internal focus model could be uniquely reconstructed. Therefore the four variable spacings in the data file are zoom-only: D5, D15, D23, and back focus. At every zoom position their `[infinity, close]` pairs are intentionally identical.

The production lens's **0.35 m** closest focusing distance and **0.26×** maximum reproduction ratio are manufacturer specifications and remain product metadata. Ricoh Imaging also documents Quick-Shift Focus and a built-in DC autofocus motor. These mechanical/operational facts do not identify which optical group moves during close focusing and are not used to invent one.

Accordingly, the LensVisualizer focus control does not represent an internal close-focus optical reconstruction for this lens. Any future focus model would require a separate primary source that constrains the optical mechanism.

## Aspherical Surfaces

Example 1 has three aspherical surfaces: `6A` on the L21 synthetic-resin layer, `22A` on the object side of L34, and `25A` on the image side of L41.

The patent defines rotationally symmetric sag as

$$
x = \frac{c y^2}{1 + \sqrt{1 - (1+K)c^2y^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + \cdots
$$

with `c = 1/R`. This is already the standard LensVisualizer conic convention, so **no conic-constant conversion is applied**. All three Example 1 conic constants are `K = 0`.

No prescription scale factor is applied. Therefore the patent's radii, spacings, and aspheric coefficients are stored at source scale, and no coefficient transformation is required. Had a linear scale `s` been applied, an `A_p` coefficient would require division by `s^(p-1)`; here `s = 1`.

| Surface | Element | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| `6A` | L21 resin layer | 0 | +1.598e-5 | -2.837e-8 | -5.046e-12 | +6.249e-14 |
| `22A` | L34 | 0 | +1.291e-5 | -4.793e-9 | -2.705e-11 | 0 |
| `25A` | L41 | 0 | +4.185e-5 | -4.956e-8 | +7.569e-11 | -7.196e-13 |

The patent explicitly identifies L21 as a hybrid resin-on-glass asphere. It does not establish an equivalent manufacturing process for `22A` or `25A`, so those two surfaces are described only as aspherical glass-lens surfaces rather than as molded, polished, or replicated aspheres.

The data-file semi-diameters are inferred rather than published. At those **modeled** apertures, the verified polynomial departures from the spherical-conic base are approximately +184.2 µm at `6A` (11.00 mm SD), +80.991 µm at `22A` (9.00 mm SD), and +369.3 µm at `25A` (10.00 mm SD). These are modeling diagnostics at inferred apertures, not patent clear-aperture departure specifications.

## Chromatic Correction Strategy

The patent frames Example 1 around chromatic correction, especially in G4. Its supported design logic can be separated into three levels.

First, the source specifies a positive-negative-positive G4 substructure. L41 and L44 are positive singletons, while L42-L43 is a negative cemented unit. Paragraph ¶0027 states that the central negative cemented component contributes to chromatic correction while the near-symmetric power arrangement also supports control of other aberrations.

Second, the source identifies the outer positive G4 elements as anomalous-dispersion materials and constrains their d-line Abbe numbers. In Example 1, L41 has νd = 81.6 and L44 has νd = 74.7. These values satisfy the patent's conditions (1) and (2). The `apd: "patent"` tags preserve that explicit source classification, while the absence of line indices and `dPgF` prevents a numerical partial-dispersion model from being invented.

Third, the patent assigns a separate chromatic role to the image-side L24-L25 cemented pair in G2 (¶0035). Its recomputed net power is negative, while its constituents have opposite standalone signs. This provides a second cemented refractive-power balance outside G4. Again, the present verification can establish the geometry and paraxial powers but cannot independently reproduce secondary-spectrum behavior without C/F/g-line data.

## Conditional Expressions

Example 1 satisfies the patent's four principal conditional expressions and the relevant preferred subranges.

| Condition | Patent requirement | Example 1 value | Result |
|---|---|---:|---|
| (1) | At least one of L41/L44 has νd > 73 | L41 = 81.6; L44 = 74.7 | pass |
| (1′) | At least one of L41/L44 has νd > 80 | L41 = 81.6 | pass |
| (2) | L41 νd > 73 | 81.6 | pass |
| (2′) | L41 νd > 80 | 81.6 | pass |
| (3) | 0.85 < f(L41)/f(L44) < 1.5 | 1.238984941 | pass |
| (3′) | 1.0 < f(L41)/f(L44) < 1.3 | 1.238984941 | pass |
| (4) | 5.0 < f(G1)/fw < 8.0 | 6.726903390 | pass |
| (4′) | 6.4 < f(G1)/fw < 8.0 | 6.726903390 | pass |

The focal-length ratios use independently recomputed standalone L41/L44 powers and the recomputed G1 group power together with the published 16.48 mm wide-state focal length. They are not taken only from the rounded condition table.

## Verification Summary

Paraxial evaluation of the authored Example 1 prescription in reduced-angle `[y, ν]` form and ordinary `[y, θ]` ABCD form gives the following results; the two forms agree to numerical precision.

| State | EFL from data | Patent f | BFD from data | Patent fB | Modeled f/# |
|---|---:|---:|---:|---:|---:|
| Wide | 16.480103489 mm | 16.48 mm | 38.986048461 mm | 38.99 mm | 3.585229851 |
| Mid | 34.998832290 mm | 35.00 mm | 57.540077230 mm | 57.54 mm | 4.435970318 |
| Tele | 82.441996888 mm | 82.45 mm | 83.456191676 mm | 83.47 mm | 5.763925078 |

The modeled semi-diameters maintain positive element edge thickness; the minimum verified edge thickness is **0.205279 mm** in the L21 resin layer. Maximum actual rim slope is **51.301°**, and the largest shared-gap sag-intrusion ratio is **0.831372** against the current 0.90 limit. The default 0.6-field first-order bundle is contained at all three authored zoom states.

At the full 42.1° patent wide half-field, the first-order full-pupil envelope exceeds several modeled G2/rear semi-diameters, with the first exceedance at external surface `6A`. Because the patent does not publish clear apertures, this is treated as modeled mechanical vignetting at the extreme full-field pupil rather than evidence for enlarging internal cemented interfaces beyond the verified geometry limits.

No patent source value has been corrected. The only numerical distinction requiring care is the G2 movement measurement: using the actual authored spacings and back-focus values gives +0.141 mm wide-to-mid and -15.465 mm mid-to-tele, whereas using the patent's separately rounded total-length column gives approximately +0.144 mm and -15.464 mm. The data-file result is used consistently here.


## Sources / References

- JP 2016-114800 A, **Zoom lens system**, Ricoh Imaging Company, Ltd., Numerical Example 1; especially ¶0019-¶0044, Tables 1-4, Table 33, Figs. 1-6, and Fig. 49.
- Ricoh Imaging, **HD PENTAX-DA 16-85mmF3.5-5.6ED DC WR** product page: https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/hdpentax-da-16-85/
- Ricoh Imaging, **HD PENTAX-DA 16-85mmF3.5-5.6ED DC WR launch announcement**, 2014-10-30: https://news.ricoh-imaging.co.jp/rim_info2/2014/20141030_019036.html
