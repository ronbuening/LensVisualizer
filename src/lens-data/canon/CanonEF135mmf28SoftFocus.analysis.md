# CANON EF 135mm f/2.8 Soft Focus

## Patent Reference and Design Identification

**Patent:** US 4,826,301
**Application Number:** US 06/926,648
**Filed:** November 3, 1986
**Priority:** November 11, 1985; November 25, 1985; March 6, 1986
**Granted:** May 2, 1989
**Inventor:** Keiji Ikemori
**Assignee:** Canon Kabushiki Kaisha
**Title:** Photographic System Having Soft Focus Function
**Embodiment analyzed:** Numerical Example 4

The prescription is the fixed Numerical Example 4 of US 4,826,301. The data model identifies it with the production CANON EF 135mm f/2.8 Soft Focus. The patent itself does not state that Example 4 became that commercial lens, so the correlation rests on convergent structural and functional evidence rather than an explicit manufacturer patent-to-product statement.

1. Canon lists the production lens as a 135 mm Canon EF lens with 7 elements in 6 groups, matching the modeled element and group counts.
2. Canon states that the fourth element is a molded-glass asphere that moves to generate spherical aberration. In Example 4, L4 is the single aspherical, forward-convex meniscus and is the independent soft-focus mover.
3. The patent separates soft-focus motion from ordinary focusing: component II controls spherical aberration, while rear component III-1 performs focusing and compensates image shift. The production description likewise identifies a moving fourth asphere and autofocus operation during soft-focus use.
4. Canon gives a closest focusing distance of 1.3 m and maximum magnification of 0.12×; these rounded production specifications are mutually consistent with the constrained rear-focus reconstruction used in the data model.
5. The patent was filed in 1986, and Canon records the production lens as marketed in October 1987, placing the design and product in the same development period.

One source/product difference is material. Canon markets the production lens as f/2.8, whereas Example 4 explicitly gives `FNO = 3.4–2.8`: f/3.4 in the normal position and f/2.8 in the soft-focus position. The model preserves that patent behavior through the clear aperture of moving L4 rather than replacing the Example 4 aperture behavior with the marketed scalar specification. The correlation is therefore structural and functional; it is not evidence that every production clear-aperture dimension is identical to the worked example.

The modeled design EFL is 135.043150 mm, while the production focal-length designation remains 135 mm. No dimensional scaling is applied.

## Optical Architecture

Example 4 is a seven-element, six-group objective that the patent describes as telephoto type, organized into component I, component II, and component III, with component III divided into III-1 and III-2. The front-to-rear power sequence is positive component I, negative component II, negative III-1, and positive III-2. The aperture stop follows component II.

Component I comprises L1–L3: two positive biconvex elements followed by a negative biconcave element. Independent computation gives the assembled L1–L3 component a focal length of +84.087368 mm, confirming the patent's positive-power description.

Component II is L4, a weak negative meniscus with an independently computed standalone focal length of -421.002617 mm. Its front surface, 7A, is aspherical. L4 moves axially to alter spherical aberration and, in Example 4, also changes the effective full-open beam diameter.

Component III begins with III-1, the cemented L5+L6 doublet. Although L5 alone is positive (+99.250341 mm) and L6 alone is negative (-36.882007 mm), their cemented assembly is net negative at -57.976146 mm. This distinction matters: the element powers describe isolated elements in air, while the III-1 value describes the assembled cemented group. III-1 is the ordinary rear-focus group and also supplies the patent-published image-shift compensation during soft-focus adjustment.

III-2 is the stationary L7 positive element, with an isolated focal length of +81.899684 mm. The complete II+III rear assembly remains net negative in the computed prescription, consistent with the patent's stated power distribution.

The patent calls the design a telephoto type. Under the project's strict geometric definition, the sharp infinity state only narrowly qualifies: the first-vertex-to-image track is 134.296973 mm against a 135.043150 mm EFL, giving `TL/EFL = 0.994475`. The published soft infinity state has `TL/EFL = 1.009172`, so the strict telephoto label is not extended to that state.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.62299, νd = 58.2. Glass: 623582 class (catalog vendor unresolved). f = +79.823006 mm.

L1 is the first positive collector in component I. Its relatively strong positive power establishes much of the front assembly's convergence before the beam reaches the soft-focus meniscus. The data file treats the six-digit glass designation only as a coordinate class; no manufacturer melt is asserted.

### L2 — Biconvex Positive

nd = 1.62299, νd = 60.7. Glass: SK16-class coefficient proxy (patent 623607; production supplier unspecified). f = +119.679934 mm.

L2 adds positive power while retaining a comparatively high Abbe number. Its printed index/Abbe pair is preserved exactly from the patent. Existing SK16-family catalog curves fall within the resolver's coordinate guard and provide a qualified coefficient proxy, but no exact public glass reproduces both printed coordinates and no production vendor is assigned.

### L3 — Biconcave Negative

nd = 1.80518, νd = 25.4. Glass: 805254 class (catalog vendor unresolved). f = -98.021477 mm.

L3 is the negative member that completes component I. Its high index and low Abbe number contrast with L1 and L2, allowing the front component to retain positive net power without assigning all correction to the rear groups. No exact vendor identity or partial-dispersion behavior is claimed from the six-digit class alone.

### L4 — Negative Meniscus, One Aspherical Surface

nd = 1.58313, νd = 59.4. Glass: 583594 class (catalog vendor unresolved). f = -421.002617 mm.

L4 is component II and the defining control element of the design. It is a forward-convex negative meniscus located in a converging beam immediately ahead of the aperture stop. The patent states that rearward movement of a negative component II introduces under-corrected spherical aberration while attempting to limit changes in other aberrations. Example 4 uses exactly that arrangement (US 4,826,301, cols. 7–10).

The front surface 7A is aspherical. Canon's production record independently describes the fourth element as a moving molded-glass asphere used to generate spherical aberration; this is one of the strongest pieces of production-correlation evidence, but it does not by itself prove that the production prescription is numerically identical to Example 4.

### L5 — Positive Meniscus, Cemented Member of III-1

nd = 1.75520, νd = 27.5. Glass: 755275 class (catalog vendor unresolved). f = +99.250341 mm.

L5 is the positive member of the cemented III-1 focusing doublet. Its isolated positive power must not be confused with the power of the cemented assembly: combined with L6 at their shared interface, III-1 is net negative.

### L6 — Biconcave Negative, Cemented Member of III-1

nd = 1.54072, νd = 47.2. Glass: 541472 class (catalog vendor unresolved). f = -36.882007 mm.

L6 supplies the dominant negative isolated power in III-1. Together L5 and L6 form the patent's negative front sub-component of component III. The cemented pair has a computed focal length of -57.976146 mm and translates as a unit for ordinary rear focusing.

### L7 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: 487702 class (catalog vendor unresolved). f = +81.899684 mm.

L7 is the stationary positive III-2 sub-component. It follows the moving negative III-1 group and completes the rear architecture without participating in either the modeled ordinary focus motion or the patent-published soft-focus compensation motion.

## Glass Identification / Selection

The patent publishes d-line refractive index and Abbe number but does not identify suppliers or glass trade names. The data therefore uses supplier-neutral coordinate classes and qualified catalog-equivalent coefficient proxies. These improve chromatic tracing without establishing what Canon purchased or melted for production.

| Element | Data-file glass annotation | nd | νd | Status |
|---|---|---:|---:|---|
| L1 | 623582 class | 1.62299 | 58.2 | Coordinate class; vendor unresolved |
| L2 | SK16-class coefficient proxy | 1.62299 | 60.7 | Source pair preserved; compatible curve, supplier unspecified |
| L3 | 805254 class | 1.80518 | 25.4 | Coordinate class; vendor unresolved |
| L4 | 583594 class | 1.58313 | 59.4 | Coordinate class; vendor unresolved |
| L5 | 755275 class | 1.75520 | 27.5 | Coordinate class; vendor unresolved |
| L6 | 541472 class | 1.54072 | 47.2 | Coordinate class; vendor unresolved |
| L7 | 487702 class | 1.48749 | 70.2 | Coordinate class; vendor unresolved |

No element carries authored nC, nF, ng, or dPgF data because Numerical Example 4 does not publish those quantities and no exact vendor melt is established. Catalog-equivalent curves do not change that limitation. Consequently, the analysis makes no apochromatic or anomalous-partial-dispersion claim. The patent's chromatic aberration plots show system behavior, but they do not supply the element-level spectral data needed to infer a particular anomalous-dispersion strategy.

## Focus Mechanism

The patent describes rear focusing. III-1, the cemented L5+L6 negative doublet, moves rearward for shorter object distances while III-2 remains stationary (US 4,826,301, cols. 3–4 and 7–8). This focus motion is distinct from movement of L4 for the soft-focus effect.

Numerical Example 4 does not publish an ordinary-focus spacing table. The data therefore uses a `CONSTRAINED_RECONSTRUCTION` rather than presenting close focus as a source-published state. The reconstruction keeps component I, L4, the aperture-stop station, L7, and the image plane fixed; only III-1 translates. The adjacent gaps D9 and D12 conserve their 25.80 mm sum.

| Focus state | D9 (mm) | D12 (mm) | III-1 position |
|---|---:|---:|---|
| Infinity, sharp | 6.000000 | 19.800000 | Patent base position |
| 1.3 m, sharp | 15.007511 | 10.792489 | Reconstructed 9.007511 mm rearward travel |

The close endpoint is solved to Canon's marketed 1.3 m minimum focusing distance, measured from the focal plane. Independent conjugate tracing gives paraxial magnification -0.124136 at that endpoint. Canon lists maximum magnification as 0.12×; the small difference is consistent with the manufacturer values being rounded rather than with a second unconstrained focus model.

No intermediate or close-focus spacings are attributed to the patent. The model linearly exposes the reconstructed endpoint for visualization, but the physical constraint is the III-1-only translation and the conserved D9+D12 spacing sum.

## Aspherical Surfaces

Surface 7A, the front surface of L4, is the only asphere. The patent writes the sag as a spherical base plus even radial powers:

`X = [(1/R)H²] / [1 + sqrt(1 - (H/R)²)] + A·H² + B·H⁴ + C·H⁶ + D·H⁸ + E·H¹⁰`.

This equation uses the ordinary sphere as the base term. Accordingly, the LensVisualizer conic constant is `K = 0`. The patent's quadratic coefficient A is zero, so the remaining coefficients map directly to the LensVisualizer even-order polynomial:

| LensVisualizer term | Value |
|---|---:|
| K | 0 |
| A4 | -5.880 × 10⁻⁷ mm⁻³ |
| A6 | -1.588 × 10⁻¹⁰ mm⁻⁵ |
| A8 | -2.038 × 10⁻¹² mm⁻⁷ |
| A10 | +2.540 × 10⁻¹⁶ mm⁻⁹ |
| A12 | 0 |
| A14 | 0 |

The dominant negative polynomial terms reduce the marginal sag relative to the reference sphere. At the verified 15.675574 mm semi-diameter of 7A, independent computation gives a polynomial departure of -45.062089 µm and an actual rim angle of 30.418836°. That radius is a model-verified clear semi-diameter, not a patent-published aperture height.

Canon identifies the fourth production element as molded glass (GMo). The data therefore describes the single L4 asphere as glass-molded. No dimensional scaling has been applied, so the patent coefficients are used directly; no `A_p/s^(p-1)` coefficient transformation is required.

## Soft-Focus and Aperture-Control Mechanism

The normal-to-soft spacing table is source-published and is modeled separately from ordinary focus. From the normal position to the maximum soft position, L4 moves rearward by 9.20 mm: D6 increases from 0.80 to 10.00 mm while D8 decreases from 17.57 to 8.37 mm. The sum D6+D8 remains 18.37 mm, showing a pure translation of L4 between fixed neighboring stations.

At the same time, III-1 moves forward by 2.40 mm for image-shift compensation: D9 decreases from 6.00 to 3.60 mm and D12 increases from 19.80 to 22.20 mm. D9+D12 remains 25.80 mm. These are patent-published soft-control positions, not ordinary focus endpoints.

The patent further makes Example 4's effective full-open aperture state-dependent. L4's effective diameter is selected from the axial beam in the soft position, so when L4 is moved forward to the normal position it becomes the limiting aperture and makes the system darker. The source gives f/3.4 in normal photography and f/2.8 in soft-focus photography (US 4,826,301, cols. 7–10; Figs. 10A, 10B, 12, and 13).

The data expresses that mechanism without inventing a moving diaphragm. `nominalFno = 2.8` defines the full-open pupil reference; the L4 clear radii are inferred from the soft-state f/2.8 axial bundle. Exact tracing then gives an effective sharp-state f-number of 3.341365 and a soft-state value of 2.800000. The sharp result is therefore a model computation consistent with the patent's rounded f/3.4, not a separately published stop diameter.

The patent publishes no clear semi-diameters. Surface 7A and surface 8 are assigned inferred soft-state clear radii of 15.675574 mm and 14.574842 mm, and the remaining semi-diameters are conservative ray-envelope values constrained against the patent's Figure 10 silhouette and the current geometry rules. The axial station of the aperture stop itself is not inferred: it is the patent's R9 stop row. Its authored 14.114355 mm semi-diameter is computed from the full-open f/2.8 pupil semantics.

Moving L4 alone shifts the computed Gaussian image plane by -4.921971 mm. Adding the patent-published III-1 compensation reduces the paraxial residual to -0.330226 mm, removing approximately 93.3% of that Gaussian shift. The remaining paraxial residual is not treated as a source error: the patent discusses compensation of the best-focus plane while deliberately introducing large spherical aberration, and best focus in that condition need not coincide with the Gaussian paraxial plane.

## Conditional Expressions

The patent gives the general soft-focus power condition

`-0.8 < f/fII < 0.1`,

and for the fourth embodiment the tighter condition

`-0.5 < f/fII < 0`,

where `f` is the complete-system focal length and `fII` is the focal length of component II. Using the independently recomputed sharp-infinity EFL and L4 standalone power gives

`f/fII = -0.320765584`.

The selected Example 4 prescription therefore satisfies both the general and the embodiment-specific ranges.

## Modeling Boundaries

The prescription is transcribed without dimensional scaling. No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical component is included. Numerical Example 4 ends at optical surface R14 and does not publish the final image-plane spacing; the data therefore uses the independently computed sharp-infinity paraxial BFD of 59.576973 mm as surface 14's rear spacing to the fixed image plane.

No patent radius, thickness, refractive index, or Abbe value is replaced by a catalog approximation. In particular, L2 retains the printed 1.62299/60.7 pair. The semi-diameters and stop radius are modeling inferences because the patent publishes no clear-aperture table. Those inferred dimensions are not presented as source facts.

The normal/soft control endpoints are patent-published. The 1.3 m ordinary-focus endpoint is not; it remains explicitly identified as a constrained reconstruction. The production lens's marketed 135 mm and f/2.8 values remain separate from the design's computed 135.043150 mm EFL and Example 4's state-dependent f/3.4-to-f/2.8 aperture behavior.

## Verification Summary

Independent computation from the final TypeScript arrays gives a sharp-infinity EFL of 135.043150 mm, only 0.043150 mm above the patent's rounded 135 mm value. A sequential height/reduced-angle trace and an independent ABCD matrix product agree to the reported numerical precision.

The final geometry was checked over a 5×5 focus-by-soft-control grid. The smallest modeled element edge thickness is 1.495695 mm, the largest actual rim angle is 33.755871°, and the tightest shared-gap geometry retains 0.973363 mm margin under the current 0.90-gap intrusion rule. The verified chief ray at the published field edge (ω = 9.1°, corresponding to the 18.2° full field) reaches the image side in all tested states. These values are model validation results, not patent specifications.

The prescription's surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is +0.001742724487 mm⁻¹. With the stated convention `RP = -1/ΣP`, the corresponding signed Petzval radius is -573.814167 mm.

The data file therefore preserves the source prescription, the patent-published soft-control kinematics, and the separate constrained ordinary-focus model without conflating source, catalog, manufacturer, and computed quantities.

## Sources

- Keiji Ikemori, **US 4,826,301**, “Photographic System Having Soft Focus Function,” Canon Kabushiki Kaisha, filed November 3, 1986; granted May 2, 1989. Numerical Example 4, Figures 10(A), 10(B), 12, and 13. <https://patents.google.com/patent/US4826301A/en>
- Canon Camera Museum, **EF135mm f/2.8 Soft Focus (with Softfocus mechanism)**. Canon records October 1987 marketing, 7 elements in 6 groups, six diaphragm blades, 1.3 m closest focusing distance, 0.12× maximum magnification, and the moving fourth molded-glass aspherical element. <https://global.canon/en/c-museum/product/ef268.html>
- Canon, **EOS M50 Mark II Product Manual — Close-up Mode**. Canon states that lens minimum focusing distance is measured from the camera's focal-plane mark; this establishes the reference plane used for the 1.3 m reconstruction. <https://cam.start.canon/en/C007/manual/html/UG-02_BasicShooting_0110.html>
- OHARA INC., current optical-glass type tables and cross-vendor comparative table. <https://www.ohara-inc.co.jp/en/product/01000/> and <https://www.ohara-inc.co.jp/en/product/01002/>
- HOYA Optics Division, current optical-glass data downloads. <https://www.hoya-opticalworld.com/english/datadownload/index.html>
- SCHOTT, current optical-glass datasheets and catalog downloads. <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>
- HIKARI GLASS CO., LTD., current optical-glass catalog. <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>
- CDGM Glass Co., Ltd., optical-glass data sheets/database. <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>
- SUMITA OPTICAL GLASS, Inc., current optical-glass data downloads. <https://www.sumita-opt.co.jp/en/download/>
