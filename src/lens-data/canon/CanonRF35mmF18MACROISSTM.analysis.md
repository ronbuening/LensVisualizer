## Patent Reference and Design Identification

**Patent:** US 2019/0113711 A1\
**Application Number:** US 16/158,603\
**Priority:** JP 2017-200167, 16 October 2017\
**Filed:** 12 October 2018\
**Published:** 18 April 2019\
**Inventor:** Shinya Okuoka\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *Optical System and Image Pickup Apparatus*\
**Embodiment analyzed:** Example 1 / Numerical Data 1

This prescription uses Example 1 as the fixed production correlation for the CANON RF 35mm f/1.8 MACRO IS STM. The
patent itself does not name the production lens, and the cited Canon product materials do not identify this patent as the
production prescription. The correlation is therefore an author/modeling identification supported by convergent design
and product evidence rather than manufacturer confirmation.

The principal points of convergence are:

1. Numerical Data 1 contains 11 elements in 9 air-spaced groups, exactly matching Canon's published production
   construction.
2. The patent example has one aspherical surface. Canon's production block diagram identifies one aspherical lens,
   which is consistent with the selected example without establishing the exact production surface by itself.
3. The patent design is 36.00 mm at f/1.85, while Canon markets the production lens as 35 mm f/1.8. The data file keeps
   these design and marketing quantities separate rather than scaling the prescription.
4. The patent image height is 21.64 mm. A 36 × 24 mm frame has a 21.633 mm half-diagonal, and Canon's EOS R uses a
   35 mm full-frame sensor. The data file therefore uses the canonical `135-full-frame` format.
5. At the patent's published close state, the image-pickup magnification is β = -0.5. Independent conjugate tracing gives
   an object-plane-to-image-plane distance of 169.415 mm, consistent with Canon's published 0.17 m minimum focusing
   distance and 0.5× maximum magnification after reference-plane normalization.
6. Patent ¶0043 identifies the front positive lens G2F of L2 as a transversely movable image-stabilization element.
   Canon's production block diagram marks an IS unit, and Canon describes the production lens as using Hybrid IS.
7. The 16 October 2017 priority date precedes Canon's 5 September 2018 EOS R system announcement, and Canon Camera
   Museum records the RF35mm F1.8 MACRO IS STM as marketed in November 2018.
8. Example 1 is approximately a 62° full-field design; Canon publishes a 63° diagonal angle of view for the production
   lens, consistent with the 36.00 mm design focal length versus the rounded 35 mm marketed focal length.

No dimensional scaling is applied. The asphere coefficients therefore remain exactly in the patent's millimeter-based
coordinate system; no coefficient transformation is required. Numerical Data 1 contains no sensor cover glass, filter,
dummy plane, or mechanical surface. The optional low-pass/IR plate permitted generically by patent ¶0040 is not present
in the selected numerical example and is omitted from the model.

## Optical Architecture

The design is a fixed-focal-length, three-unit positive-positive-negative system rather than a classical retrofocus or
telephoto layout. It contains 11 glass elements in 9 groups, with two cemented doublets and one aspherical surface. In
front-to-rear order the patent divides the lens into positive unit L1, the aperture stop, positive unit L2, and negative
unit L3 (¶0027, ¶0042).

- **L1, E1-E4:** positive as a complete unit, although it begins with the strongly negative G1F element. Patent Table 1
  gives `f1 = +99.201 mm`; independent tracing of the rounded prescription gives +99.2409 mm.
- **L2, E5-E9:** the strongest positive unit. Patent Table 1 gives `f2 = +41.431 mm`; independent tracing gives
  +41.4323 mm. It contains the designated stabilization lens G2F and ends with the positive G2R lens.
- **L3, E10-E11:** a weakly negative rear unit. Patent Table 1 gives `f3 = -148.840 mm`; independent tracing gives
  -148.8313 mm.

The complete infinity prescription gives an independently verified effective focal length of 36.0091 mm from the
rounded surface table, matching the patent's 36.00 mm specification within source precision. The back focal length is
11.6698 mm against the patent's 11.66 mm.

Under the project's architectural definitions, the lens is neither telephoto nor retrofocus. The published total lens
length divided by verified EFL is about 2.234, so the `TL/EFL < 1` telephoto condition is false. The verified back focal
length divided by EFL is about 0.324, so the `BFD > EFL` retrofocus condition is also false. The compact mirrorless
packaging should therefore not be described as a retrofocus architecture merely because the lens is a wide-angle design.

The patent labels surface 8 as the aperture stop but defines its tabulated 20.16 mm "effective diameter" as a ray-envelope
diameter, not a mechanical diaphragm diameter (¶0064). Using 20.16 mm as the physical stop would produce about f/1.80.
The data model instead uses an inferred physical stop semi-diameter of 9.80523 mm so that the verified entrance-pupil
diameter reproduces the published f/1.85 design state. This stop size is a modeling inference, not a value printed by the
patent.

## Element-by-Element Analysis

### E1 / G1F — Negative Meniscus

`nd = 1.80810, νd = 22.8. Glass: 808228 class (vendor unresolved). Standalone f = -43.02 mm.`

E1 is the patent's G1F lens, the first optical element and the required front negative member of L1. Its negative
standalone power is substantial, but it operates inside an L1 unit whose net power is positive. Patent condition (4)
constrains the G1F Abbe number; Table 1 gives the higher-precision conditional value `G1vd = 22.76`, while Numerical Data
1 rounds the element entry to 22.8. The data file correctly preserves 22.8 on E1 rather than substituting the Table 1
conditional value.

The combination of high refractive index and low Abbe number gives E1 strong refractive leverage at the front of the
system. Any more specific claim about partial dispersion would exceed the source data because the patent supplies no
line indices or anomalous-partial-dispersion measurement for this element.

### E2 — Biconvex Positive

`nd = 2.00100, νd = 29.1. Glass: 001291 class (vendor unresolved). Standalone f = +47.64 mm.`

E2 supplies strong positive power immediately behind G1F. Together, E1 and E2 form the front power transition that allows
L1 to remain positive despite beginning with a negative meniscus. The very high index reduces the curvature required for
a given positive surface power, while its lower Abbe number gives a different first-order chromatic contribution from
the following higher-Abbe E3 material. This is a statement about the published `nd/νd` coordinates, not a claim of a
specific vendor glass or anomalous dispersion.

### E3-E4 / D1 — Cemented Negative-Positive Pair

- `E3: nd = 1.51742, νd = 52.4. Glass: 517524 class (vendor unresolved). Standalone f = -24.44 mm.`
- `E4: nd = 1.90043, νd = 37.4. Glass: 900374 class (vendor unresolved). Standalone f = +19.66 mm.`

E3 is biconcave and E4 is a positive meniscus. They share patent surface 6, so the interface is a true glass-to-glass
cemented junction; the data model assigns that surface to downstream E4 and adds no synthetic cement layer.

The standalone element powers should not be added as if the pair were separated in air. With the published cemented
interface retained, independent calculation gives the E3+E4 doublet a net EFL of **+97.306 mm**. It therefore contributes
weak positive power as a cemented pair even though E3 is individually negative and E4 individually positive. The pair
completes L1 ahead of the aperture stop.

### E5 / G2F — Biconvex Positive, Stabilization Lens

`nd = 1.69680, νd = 55.5. Glass: 697555 class (vendor unresolved). Standalone f = +74.53 mm.`

E5 is the first positive lens of L2 and corresponds to the patent label G2F. Patent ¶0043 specifically identifies this
lens as the positive member that can move with a component perpendicular to the optical axis during image stabilization.
In the centered prescription it is a moderate positive singlet placed directly behind the stop.

The LensVisualizer data does not invent an IS decenter amplitude or an off-axis stabilized state. The patent establishes
the transverse function but does not publish a decenter range in Numerical Data 1, so the authored prescription remains
the centered optical state.

### E6 — Aspherical Negative Meniscus

`nd = 1.58313, νd = 59.4. Glass: 583594 class (vendor unresolved). Standalone f = -101.03 mm.`

E6 is a weak negative meniscus with the design's only aspherical surface, `11A`, on its object-side face. It sits inside
the positive L2 unit between G2F and the rear cemented pair. Its negative standalone power provides a local counterterm
to the surrounding positive lenses, while the aspherical departure adds radial correction freedom without adding an
extra element.

The patent does not identify how the production asphere is manufactured. The analysis therefore does not classify it as
molded, polished, or hybrid/composite.

### E7-E8 / D2 — Cemented Positive-Negative Pair

- `E7: nd = 1.88300, νd = 40.8. Glass: 883408 class (vendor unresolved). Standalone f = +16.25 mm.`
- `E8: nd = 1.85478, νd = 24.8. Glass: 855248 class (vendor unresolved). Standalone f = -13.54 mm.`

E7 is a strong positive meniscus cemented to biconcave E8 at surface 14. The shared surface is assigned to downstream E8
in the data model, preserving the physical glass-to-glass transition.

Although E7 and E8 have large opposite standalone powers, the cemented pair is not a simple arithmetic cancellation.
Independent thick-lens calculation of surfaces 13-15 gives the complete D2 pair a net EFL of **-68.170 mm**. The pair is
therefore net negative in isolation while it remains embedded in the overall positive L2 unit. The contrast between
`νd = 40.8` and `νd = 24.8` provides first-order dispersion leverage, but no vendor-specific partial-dispersion behavior
is asserted.

### E9 / G2R — Biconvex Positive

`nd = 1.90043, νd = 37.4. Glass: 900374 class (vendor unresolved). Standalone f = +31.00 mm.`

E9 is the rear positive member G2R of L2 and provides strong positive power before the variable L2-to-L3 air gap. The
patent explicitly uses the ratio of its rear and front radii in conditional expression (5): `L2R1 = +800.000 mm` and
`L2R2 = -28.799 mm`, giving `|L2R2/L2R1| ≈ 0.0360`. The patent explains this ratio as a control on focus-dependent field
curvature (¶0055).

The variable spacing follows E9, so the rear vertex of this element is also the front boundary of the only focus gap
stored in the data file.

### E10 / G3P — Positive Meniscus

`nd = 1.69680, νd = 55.5. Glass: 697555 class (vendor unresolved). Standalone f = +144.87 mm.`

E10 is the positive G3P member of the fixed rear unit L3. Its standalone positive power is weak compared with the strong
negative E11 that follows. The pair is air-spaced rather than cemented, so L3's net behavior depends on both individual
powers and their 11.79 mm separation.

### E11 / G3N — Negative Meniscus

`nd = 1.59270, νd = 35.3. Glass: 593353 class (vendor unresolved). Standalone f = -68.42 mm.`

E11 is the final negative G3N lens. Together with E10 it makes L3 net negative, with an independently traced unit EFL of
-148.831 mm from the rounded prescription. L3 remains fixed during the published focus motion, so this rear negative
unit also stabilizes the image-side reference geometry while L1 and L2 move objectward.

The last refracting surface is followed by the fixed 11.66 mm patent back-focus spacing. No sensor cover or optional
filter plate is inserted into that interval because none appears in Numerical Data 1.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number coordinates but no vendor names or catalog glass types.
The data file therefore uses six-digit coordinate-class labels and explicitly marks vendor identity as unresolved.
Authoritative catalog cross-checking found multiple plausible vendor materials at many of these coordinates, so choosing
a single vendor solely from `nd/νd` would overstate the evidence.

| Data class | nd | νd | Elements | Authored identification |
|---|---:|---:|---|---|
| 808228 | 1.80810 | 22.8 | E1 | vendor unresolved |
| 001291 | 2.00100 | 29.1 | E2 | vendor unresolved |
| 517524 | 1.51742 | 52.4 | E3 | vendor unresolved |
| 900374 | 1.90043 | 37.4 | E4, E9 | vendor unresolved |
| 697555 | 1.69680 | 55.5 | E5, E10 | vendor unresolved |
| 583594 | 1.58313 | 59.4 | E6 | vendor unresolved |
| 883408 | 1.88300 | 40.8 | E7 | vendor unresolved |
| 855248 | 1.85478 | 24.8 | E8 | vendor unresolved |
| 593353 | 1.59270 | 35.3 | E11 | vendor unresolved |

The repeated 900374 and 697555 coordinates are retained consistently on their respective elements; no attempt is made to
assign different vendors to identical patent coordinates. No element carries `nC`, `nF`, `ng`, or `dPgF`, because the
selected patent does not publish those element-specific data. Consequently, the prescription supports ordinary d-line
and Abbe-based chromatic interpretation only. It does not support an APO or anomalous-partial-dispersion claim.

## Focus Mechanism

Example 1 has a published integral focusing motion rather than a reconstructed floating model. Patent ¶0036 states that
L1 and L2 move integrally toward the object while L3 remains fixed. Numerical Data 1 expresses that motion with a single
variable spacing after surface 17:

| Focus state | d17, L2-to-L3 gap | Source status |
|---|---:|---|
| Infinity | 0.95 mm | published |
| β = -0.5 | 18.25 mm | published |

The 17.30 mm gap increase is equivalent to a 17.30 mm objectward translation of the combined L1+L2 assembly relative to
the fixed L3 and image plane. The internal L1-to-L2 spacing remains unchanged, as does the 11.66 mm rear image space.
The data model therefore has focus status **PUBLISHED**; no constrained reconstruction or unmeasured internal degree of
freedom is introduced.

At the close state, independent conjugate tracing gives a lateral magnification of -0.499672. Using the published fixed
back focus gives a first-surface-to-image-plane track of 97.74 mm, a conjugate object distance of 71.675 mm from the first
vertex, and an object-plane-to-image-plane distance of 169.415 mm. The last quantity agrees with Canon's marketed 0.17 m
minimum focusing distance after the reference planes are normalized, and the calculated magnification agrees with the
marketed 0.5× value.

Canon's product name identifies STM, and its technical specifications list AF with full-time manual focus. The patent
establishes the optical unit motion but does not specify the production actuator, so motor behavior is not inferred from
the prescription.

## Aspherical Surfaces

Only surface 11 of Numerical Data 1 is aspherical; the data file labels it `11A`. It is the object-side surface of E6.
Patent ¶0065-¶0066 uses the standard conic convention

`X = (H²/R) / [1 + sqrt(1 - (1 + K)(H/R)²)] + A4 H⁴ + A6 H⁶ + A8 H⁸ + A10 H¹⁰`.

Accordingly, the authored conic constant is the ordinary `K`, with `K = 0` representing a spherical base. No `κ` or
`KA` conversion is required.

| Coefficient | Surface 11A value |
|---|---:|
| K | 0.00000e+000 |
| A4 | -4.61997e-005 mm^-3 |
| A6 | -9.22837e-008 mm^-5 |
| A8 | -4.60687e-010 mm^-7 |
| A10 | +1.65555e-013 mm^-9 |

The data schema also carries `A12 = 0` and `A14 = 0` as unused required fields; these are not additional patent terms.
No scaling is applied to the prescription, so the patent coefficients are entered without dimensional transformation.

At the patent-published effective semi-height of 8.55 mm, independent evaluation gives a polynomial departure of
-0.295752 mm from the spherical/conic base. The negative A4 term supplies most of that departure, with smaller negative
A6 and A8 contributions and a very small positive A10 contribution. This value is quoted at the patent's verified
ray-envelope semi-height; it is not presented as a manufactured edge departure or a measured production surface.

## Conditional Expressions

The patent derives six dimensionless or material-coordinate conditions for this architecture (¶0044-¶0058). Using the
higher-precision Table 1 quantities for Example 1, the selected prescription satisfies the tightest preferred ranges:

| Condition | Example 1 value | Tightest preferred range | Result |
|---|---:|---|---|
| `sk / TD` | 0.144935 | `0.08 < x < 0.17` | pass |
| `f1 / f2` | 2.394367 | `1.2 < x < 2.8` | pass |
| `|f / f3|` | 0.241870 | `0.20 < x < 0.29` | pass |
| `G1vd` | 22.76 | `20 < x < 28` | pass |
| `|L2R2 / L2R1|` | 0.035999 | `< 0.25` | pass |
| `G1ST / STGR` | 0.435607 | `0.40 < x < 0.70` | pass |

The condition table intentionally uses Table 1's 22.76 for `G1vd`, whereas the E1 prescription row stores the rounded
22.8. Likewise, Table 1 gives `G1ST = 20.873 mm` and `STGR = 47.917 mm`, while direct sums of the printed surface spacings
are 20.870 mm and 47.910 mm. These are source-precision differences, not corrected prescription values.

## Image Stabilization

Patent ¶0043 designates G2F, corresponding to E5, as a positive lens that can move with a component perpendicular to the
optical axis for image stabilization. This places stabilization inside the positive L2 unit rather than in the fixed
rear L3 unit.

Canon's Camera Museum block diagram for the RF35mm F1.8 MACRO IS STM marks an IS unit, and Canon's product description
identifies Hybrid IS for macro shooting. These production facts strengthen the selected patent correlation, but they do
not prove that every production dimension or actuator detail is identical to Example 1.

The patent does not publish a transverse decenter range for G2F in Numerical Data 1. The centered LensVisualizer data
therefore contains no invented IS displacement state. Its IS annotation identifies the optical role only.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD matrix calculation reproduce the patent's first-order
quantities from the rounded surface prescription:

| Quantity | Independent result | Patent / source value |
|---|---:|---:|
| Effective focal length | 36.00912695 mm | 36.00 mm |
| Back focal length | 11.66975788 mm | 11.66 mm |
| Front principal point from first surface | +27.85432464 mm | +27.86 mm |
| Rear principal point from last surface | -24.33936907 mm | -24.34 mm |
| Entrance pupil from first surface | +14.33859255 mm | +14.34 mm |
| Exit pupil from last surface | -45.97637476 mm | -45.98 mm |
| Modeled wide-open f-number | 1.84999957 | 1.85 |
| Close-state magnification | -0.49967185 | -0.5 |

The small residuals are consistent with the patent's three-decimal radii and mostly two-decimal spacings. Summing the
printed spacings with the printed 11.66 mm back focus gives 80.44 mm, while substituting the traced 11.66976 mm BFL gives
80.44976 mm, which rounds to the patent's stated 80.45 mm total lens length. No patent radius, spacing, or index is altered
to force these totals.

The model retains the patent's effective-diameter half-values as non-stop semi-diameters because the patent defines them
as ray-envelope diameters. These are not asserted to be mechanical glass edge diameters. Surface 2 to surface 3 is the
most restrictive authored air gap: the retained envelopes leave positive physical clearance but consume about 91.77% of
the 1.92 mm gap in sag. The data file therefore uses `gapSagFrac = 0.92` to preserve the published ray envelope rather
than shrinking a source-supported aperture for a generic layout margin.

The only non-source semi-diameter is the aperture stop, whose 9.80523 mm semi-diameter is inferred from the published
f/1.85 constraint. No cover plate, filter, inactive dummy surface, or synthetic cement layer is added. No source error is
silently corrected; the small track and Table 1 spacing differences are retained as ordinary printed-rounding effects.

## Sources

- Okuoka, Shinya. **US 2019/0113711 A1, *Optical System and Image Pickup Apparatus*.** Canon Kabushiki Kaisha,
  published 18 April 2019. Example 1 / Numerical Data 1 is the prescription source.
- Canon Camera Museum. **RF35mm F1.8 MACRO IS STM.**
  https://global.canon/en/c-museum/product/rf473.html
- Canon Inc. **Canon expands its EOS system of cameras and lenses with the launch of the new EOS R System.**
  5 September 2018. https://global.canon/en/news/2018/20180905.html
- Canon Camera Museum. **EOS R.** https://global.canon/en/c-museum/product/dslr877.html
- Canon U.S.A. **RF35mm F1.8 Macro IS STM — technical specifications.**
  https://www.usa.canon.com/shop/p/rf35mm-f1-8-macro-is-stm
## Integration audit — 2026-09-11 UTC

US 2019/0113711 A1, Fig. 1, PDF p2 (600 dpi; crop 0.27,0.44,0.675,0.615). Retained the published effective-aperture-derived SDs and documented cemented-interface envelope. The E6/E7 automated measurement picks up the neighboring larger doublet outline; it does not justify overriding the aperture table.

Surface validation and image-circle audits passed. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.
