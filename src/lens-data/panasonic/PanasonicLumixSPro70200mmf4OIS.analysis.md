## Patent Reference and Design Identification

**Patent:** JP 2020-086133 A
**Application number:** 2018-220648
**Filed:** 2018-11-26
**Published:** 2020-06-04
**Inventors:** Ryosuke Sato; Takehisa Koyama
**Applicant:** Sigma Corporation
**Title:** Variable-power imaging optical system (author translation of 変倍結像光学系)
**Embodiment analyzed:** Numerical Example 6

The prescription is Numerical Example 6 of JP 2020-086133 A. The patent describes a fixed-overall-length zoom with seven functional power groups, internal focusing, and a transversely moving image-stabilization subgroup. The job card fixes this example as the production correlation for the PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S. (S-R70200). The patent itself does not name the Panasonic product, and the applicant is Sigma Corporation rather than Panasonic; the correlation therefore remains an informed identification rather than manufacturer confirmation.

The identification rests on convergent source facts:

1. The example contains 23 elements in 17 air-spaced groups, exactly matching Panasonic's published construction for the S-R70200.
2. Its computed focal states are 72.5016, 117.6055, and 193.9542 mm, while the production lens is marketed as 70-200 mm.
3. Its modeled maximum aperture is f/4.11-f/4.15 across the three states, corresponding to the rounded marketed f/4 specification.
4. The patent uses a 21.63 mm image height and full fields of 33.12°-12.34°; Panasonic specifies a full-frame L-Mount lens with a diagonal field of 34°-12°.
5. Both sources give one aspherical element and optical image stabilization, and the patent's rear stabilizing subgroup is accompanied by 0.4° stabilization-state aberration plots.
6. The patent application was filed on 2018-11-26, shortly before Panasonic announced the S-R70200 on 2019-02-01.

Panasonic also identifies one UED, three ED, and one UHR element in the production lens. The patent provides only `nd` and `νd`, not vendor glass names, line indices, or a mapping from those marketing classes to individual elements. The analysis therefore does not assign the UED, ED, or UHR labels to particular L-numbers.

## Optical Architecture

Numerical Example 6 is a seven-functional-group internal zoom with the power sequence

`G1(+) – G2(−) – G3(+) – STO – G4(+) – G5(−) – G6(+) – G7(−)`.

The data file contains 23 physical elements, 17 air-spaced groups, and seven patent functional groups. Six cemented pairs occur at L1-L2, L5-L6, L9-L10, L13-L14, L15-L16, and L19-L20. There is exactly one aperture stop, at patent surface 15, and one aspherical surface, the object-side surface of L23.

G1, G5, and G7 remain fixed relative to the image plane during zooming. G2 is the principal negative variator. G3 and the aperture stop move together; G4 and G6 provide image-plane compensation, and their trajectories reverse between the middle and telephoto control points. G6 also serves as the focus group. The front portion through G5 forms the principal converging and magnifying relay, while rear negative group G7 shortens the final conjugate and contains the stabilization unit. This division follows the patent's functional description in ¶¶0020-0026.

The computed functional-group focal lengths are:

| Group | Computed focal length (mm) | Function in the patent model |
| --- | ---: | --- |
| G1 | +107.7366 | Fixed positive front collector |
| G2 | -32.5021 | Principal negative variator |
| G3 | +92.0714 | Positive compensator moving with the stop |
| G4 | +82.3956 | Positive relay/compensator |
| G5 | -208.6609 | Fixed weak negative magnifying relay |
| G6 | +83.3673 | Positive internal focus group and zoom compensator |
| G7 | -61.7677 | Fixed negative rear group containing OIS subgroup G7a |

These are isolated functional-group powers computed from the final surface arrays. They are not obtained by adding standalone element powers; separations and cemented interfaces materially alter the net result.

The strict whole-system telephoto criterion `track/EFL < 1` is met only at the tele endpoint. After removal of the source filter and replacement by its air-equivalent translation, the active track/EFL ratio is 0.99513 at 193.95 mm. The wide and middle states have ratios above unity and are not described as telephoto by that strict test. The design is not retrofocus at any state because its rear focal distance is substantially shorter than the EFL.

### Zoom kinematics

Relative to the wide state, the principal group-front movements are:

| Group | Middle (mm) | Tele (mm) | Direction convention |
| --- | ---: | ---: | --- |
| G1 | 0.0000 | 0.0000 | Fixed |
| G2 | +19.6738 | +34.5571 | Positive is imageward |
| G3 | +4.2758 | +2.4220 | Reverses after the middle state |
| G4 | +1.9567 | +0.1002 | Reverses after the middle state |
| G5 | approximately 0 | approximately 0 | Fixed to source precision |
| G6 | -4.0739 | -0.0441 | Moves objectward, then nearly returns |
| G7 | approximately 0 | approximately 0 | Fixed to source precision |

The three patent states are interpolation control points rather than evidence of linear physical cams between them. The data model uses piecewise-linear interpolation only for visualization between the published states.

## Element-by-Element Analysis

Standalone element focal lengths below are thick-lens powers calculated with each element isolated in air. Cemented-unit and functional-group powers are stated separately where relevant; neither should be confused with the element's in-situ contribution inside the complete zoom.

### D1: L1-L2 front cemented pair

#### L1 — Negative meniscus, convex to object

`nd = 1.75520, νd = 27.53. Glass: 755275 — vendor unresolved. Standalone f = -288.3363 mm.`

L1 is the negative front member of the first cemented pair. Its high index and low Abbe number contrast with L2's lower index and much higher Abbe number. The element moderates the refractive burden on the strongly positive partner while supplying chromatic counter-power. It does not make G1 negative: the cemented pair is net positive and G1 remains a positive front group.

#### L2 — Biconvex positive

`nd = 1.49700, νd = 81.61. Glass: 497816 — vendor unresolved. Standalone f = +122.2890 mm.`

L2 supplies most of the positive power of D1. The L1-L2 cemented unit has a computed net focal length of +213.2038 mm, showing that the cemented interface and the negative front member reduce the isolated positive power of L2. The large Abbe-number separation is consistent with ordinary primary chromatic balancing, but no anomalous-dispersion or apochromatic claim follows from `nd/νd` alone.

### L3 — Positive meniscus, convex to object

`nd = 1.43700, νd = 95.10. Glass: 437951 — vendor unresolved. Standalone f = +213.8620 mm.`

L3 is a low-index, very high-Abbe positive meniscus separated from D1 by a 0.1501 mm air gap. It completes fixed group G1 and raises the full group to +107.7366 mm. Its weak standalone power permits positive convergence with relatively modest primary chromatic contribution. The production lens's UED/ED classification cannot be assigned specifically to L3 from the patent coordinates.

### L4 — Negative meniscus, convex to object (G2a)

`nd = 1.80610, νd = 33.27. Glass: 806333 — vendor unresolved. Standalone f = -84.3861 mm.`

L4 is the complete G2a subgroup and the first part of the principal negative variator. The patent deliberately places a large 11.3089 mm air space between G2a and G2b. Under the patent's two-subgroup power relation, that separation allows the required negative total power with weaker subgroup powers than a more compact cluster would require, reducing aberration generation and manufacturing-error sensitivity (¶¶0027-0037).

Its shape factor is -4.29769, inside the patent's permitted range. The object-side convex form reduces the incidence angle of the converging bundle arriving from G1, a point explicitly emphasized in ¶¶0030 and 0057.

### D2: L5-L6 cemented pair in G2b

#### L5 — Biconcave negative

`nd = 1.48749, νd = 70.44. Glass: 487704 — vendor unresolved. Standalone f = -46.1810 mm.`

L5 begins G2b with substantial negative standalone power. Its relatively high Abbe number contrasts with the dense low-Abbe positive L6, allowing the pair to control primary color while maintaining the negative variator's required net behavior.

#### L6 — Positive meniscus, convex to object

`nd = 1.84666, νd = 23.78. Glass: 847238 — vendor unresolved. Standalone f = +48.1494 mm.`

L6 nearly balances L5 in isolated focal magnitude. The cemented D2 unit is nevertheless weakly negative, with a computed net focal length of -709.7377 mm, because the shared interface and unequal indices prevent simple cancellation. This is a useful example of why standalone powers cannot be added algebraically to infer cemented or group behavior.

### L7 — Negative meniscus, concave to object

`nd = 1.77250, νd = 49.62. Glass: 773496 — vendor unresolved. Standalone f = -69.1835 mm.`

L7 is the rear negative singlet of G2b. Together with the weakly negative D2 pair it gives G2b a net focal length of -63.9642 mm; the separated combination of G2a and G2b then produces G2 at -32.5021 mm. L7 therefore carries a significant share of the rear variator power without forcing the cemented pair itself to be strongly negative.

### L8 — Biconvex positive (G3)

`nd = 1.80450, νd = 39.64. Glass: 805396 — vendor unresolved. Standalone and group f = +92.0714 mm.`

L8 is the sole element of G3. It receives the diverging output from G2 and returns the bundle toward near-afocal incidence at the moving aperture stop. The patent states that this reduces exposure sensitivity to axial stop-position error (¶0022). Because the stop translates with G3, their relative 1.0008 mm spacing remains fixed.

### D3: L9-L10 cemented positive group G4

#### L9 — Negative meniscus, convex to object

`nd = 2.00100, νd = 29.13. Glass: 001291 — vendor unresolved. Standalone f = -72.8694 mm.`

L9 is a very high-index negative front component. It bends the nearly collimated bundle entering G4 without requiring an excessively curved low-index surface. Its negative power is overbalanced by L10, leaving the cemented pair net positive.

#### L10 — Biconvex positive

`nd = 1.59282, νd = 68.62. Glass: 593686 — vendor unresolved. Standalone f = +38.4255 mm.`

L10 is the dominant positive component of D3. The cemented pair and the complete G4 are identical in extent and have a computed net focal length of +82.3956 mm. The patent describes the G3-G4 spacing as a means of adjusting astigmatism while avoiding a corresponding deterioration of spherical aberration because G4 receives a nearly parallel bundle (¶0023).

### L11 — Positive meniscus, convex to object

`nd = 1.91082, νd = 35.25. Glass: 911353 — vendor unresolved. Standalone f = +92.4890 mm.`

L11 is the positive front element of fixed group G5. Its dense glass and meniscus form provide converging power before the separated negative L12. The element's positive standalone focal length does not determine the sign of G5; the air-spaced pair is net negative.

### L12 — Biconcave negative

`nd = 1.80000, νd = 29.84. Glass: 800298 — vendor unresolved. Standalone f = -62.4881 mm.`

L12 supplies the stronger negative component in G5. The complete air-spaced group has a weak net focal length of -208.6609 mm. In the patent's description, this negative group acts as a magnifying relay after the converging front system, helping shorten the optical track (¶0024). Its very small 0.6288 mm separation from L11 is the limiting inferred-aperture cross-gap in the model, but the authored rims retain positive physical clearance.

### D4: L13-L14 positive focus group G6

#### L13 — Biconvex positive

`nd = 1.48749, νd = 70.44. Glass: 487704 — vendor unresolved. Standalone f = +51.1099 mm.`

L13 provides the main positive power of the focus group. It is relatively low index and high Abbe, limiting primary chromatic change as the group translates through a converging beam.

#### L14 — Negative meniscus, concave to object

`nd = 1.69895, νd = 30.05. Glass: 699301 — vendor unresolved. Standalone f = -130.4464 mm.`

L14 is the negative cemented partner. D4 and G6 have the same extent and a net focal length of +83.3673 mm. The negative component reduces the positive group's aberration sensitivity during the large telephoto-end focus excursion. The patent assigns G6 both internal focusing and zoom compensation (¶0025).

### D5: L15-L16 front cemented unit of OIS subgroup G7a

#### L15 — Positive meniscus, concave to object

`nd = 1.84666, νd = 23.78. Glass: 847238 — vendor unresolved. Standalone f = +50.2364 mm.`

L15 is the positive front component of the transversely moving stabilization subgroup. Its dense low-Abbe glass is paired with the higher-Abbe negative L16. The inferred geometry gives L15 the model's smallest positive edge thickness, 0.3083 mm; it remains above zero in every defined state.

#### L16 — Biconcave negative

`nd = 1.59349, νd = 67.00. Glass: 593670 — vendor unresolved. Standalone f = -28.0399 mm.`

L16 dominates the sign of the D5 pair. The cemented unit is net negative at -63.7934 mm. Its higher Abbe number relative to L15 provides conventional primary-color opposition without establishing anomalous partial dispersion.

### L17 — Biconcave negative

`nd = 1.80100, νd = 34.97. Glass: 801350 — vendor unresolved. Standalone f = -60.5992 mm.`

L17 is separated from D5 and completes G7a. The complete stabilization subgroup has a computed focal length of -30.2716 mm. Because G7a is a compact negative group in a converging rear bundle, lateral displacement produces image deflection while limiting the moving mass and diameter, the principal rationale stated in ¶¶0025-0026.

### L18 — Biconvex positive

`nd = 1.49700, νd = 81.61. Glass: 497816 — vendor unresolved. Standalone f = +36.6088 mm.`

L18 begins the fixed positive G7b subgroup. Its strong positive power and high Abbe number help recover convergence after negative stabilizer G7a while avoiding unnecessary primary chromatic power.

### D6: L19-L20 cemented pair in G7b

#### L19 — Biconvex positive

`nd = 1.69895, νd = 30.05. Glass: 699301 — vendor unresolved. Standalone f = +26.2690 mm.`

L19 is a strong positive component. Its relatively low Abbe number is countered by the even lower-Abbe negative L20 at the shared interface.

#### L20 — Negative meniscus, concave to object

`nd = 1.84666, νd = 23.78. Glass: 847238 — vendor unresolved. Standalone f = -45.8976 mm.`

L20 reduces the strong positive power of L19. The cemented D6 pair remains positive, with a net focal length of +61.5148 mm. The pair therefore acts as a positive relay unit rather than an approximately neutral achromat.

### L21 — Biconcave negative

`nd = 1.72916, νd = 54.67. Glass: 729547 — vendor unresolved. Standalone f = -72.2015 mm.`

L21 introduces separated negative correction after D6. Its moderate dispersion and relatively weak standalone power distribute rear-group correction over several surfaces rather than concentrating it at the final element.

### L22 — Negative meniscus, concave to object

`nd = 1.83481, νd = 42.72. Glass: 835427 — vendor unresolved. Standalone f = -32.0125 mm.`

L22 is the strongest negative standalone element in the rear correction sequence after D6. It precedes the final positive aspherical meniscus and supplies the negative bending that the asphere must refine at the edge of the full-frame field.

### L23 — Positive meniscus, convex to object; one aspherical surface

`nd = 1.58913, νd = 61.25. Glass: 589613 — vendor unresolved. Standalone f = +66.8455 mm.`

L23 is the final refractive element and the only aspherical element in the model. Its positive meniscus power restores convergence after L21 and L22. The object-side asphere modifies the peripheral sag substantially while the weak rear spherical surface completes the element. G7b as a whole is positive at +48.8232 mm, but the separated combination of negative G7a and positive G7b is net negative at -61.7677 mm. That sign reversal again demonstrates that subgroup powers and separation, not simple power addition, govern the in-situ rear assembly.

## Glass Identification and Selection

The patent identifies no glass manufacturer or catalog names. The data file therefore uses six-digit `nd/νd` coordinates rather than speculative vendor identities. Eighteen distinct coordinates occur across 23 elements:

| Code | nd | νd | Elements |
| --- | ---: | ---: | --- |
| 755275 | 1.75520 | 27.53 | L1 |
| 497816 | 1.49700 | 81.61 | L2, L18 |
| 437951 | 1.43700 | 95.10 | L3 |
| 806333 | 1.80610 | 33.27 | L4 |
| 487704 | 1.48749 | 70.44 | L5, L13 |
| 847238 | 1.84666 | 23.78 | L6, L15, L20 |
| 773496 | 1.77250 | 49.62 | L7 |
| 805396 | 1.80450 | 39.64 | L8 |
| 001291 | 2.00100 | 29.13 | L9 |
| 593686 | 1.59282 | 68.62 | L10 |
| 911353 | 1.91082 | 35.25 | L11 |
| 800298 | 1.80000 | 29.84 | L12 |
| 699301 | 1.69895 | 30.05 | L14, L19 |
| 593670 | 1.59349 | 67.00 | L16 |
| 801350 | 1.80100 | 34.97 | L17 |
| 729547 | 1.72916 | 54.67 | L21 |
| 835427 | 1.83481 | 42.72 | L22 |
| 589613 | 1.58913 | 61.25 | L23 |

The palette alternates high-index, low-Abbe glasses with lower-index, higher-Abbe partners in each cemented pair. That arrangement supports primary axial and lateral chromatic correction while distributing monochromatic power. The exact secondary-spectrum behavior cannot be reconstructed from these coordinates alone. No element in the data file carries `nC`, `nF`, `ng`, or `dPgF`, and no public vendor Sellmeier identity is asserted. Consequently, the analysis makes no apochromatic or anomalous-partial-dispersion claim.

Panasonic's marketed UED/ED/UHR count remains a production specification, not an element-level identification in the patent model. A later catalog match could justify vendor-resolved spectral data only if the stored `nd/νd` pair and the candidate dispersion curve are independently verified.

## Focus Mechanism

G6, the cemented L13-L14 positive group, is the sole internal focus group in the patent example. From infinity to the published 1.000 m object-to-image condition it moves toward the object. The adjacent air gaps `d22` and `d25` change in equal and opposite directions to source-rounding precision, confirming rigid translation rather than internal deformation or a second focus group.

| Zoom state | G6 objectward travel (mm) | Computed magnification at 1.000 m | Imaging residual B (mm) |
| --- | ---: | ---: | ---: |
| Wide | 2.6344 | 0.083887× | -0.031281 |
| Middle | 6.2169 | 0.132239× | -0.020072 |
| Tele | 16.7858 | 0.221928× | -0.011197 |

The small residuals are consistent with the patent's four-decimal radii and spacings. The patent's 1 m condition is measured from object plane to image plane: the object-to-first-surface distance plus the 193.72 mm source physical track equals 1000 mm to rounding.

Panasonic markets a 0.92 m closest focusing distance and approximately 0.25× maximum magnification. Those are production specifications and are not encoded as an internal optical reconstruction. The data file therefore sets the modeled close-focus endpoint to the published 1.000 m state and does not extrapolate G6 travel to 0.92 m.

The patent explains that G6 receives a converging bundle, which limits spherical-aberration change and reduces the diameter of the following stabilization unit. It also links G6's positive power and magnification to reduced image-height change during focus wobbling (¶¶0025 and 0038-0050). Panasonic's 2019 launch release separately states that the production lens uses a high-precision linear motor and a mechanism intended to suppress focus breathing. Those product statements do not establish a second optical focus group, and none is modeled.

## Aspherical Surfaces

Surface `40A`, the object-side surface of L23, is the sole asphere. The patent uses the standard conic form

`z(h) = (h²/R) / [1 + sqrt(1 - (1 + K)(h/R)²)] + Σ A_p h^p`.

The stored conic constant therefore requires no conversion:

- `R = +33.5263 mm`
- `K = 0`
- `A4 = -1.12050E-05 mm^-3`
- `A6 = +2.28367E-08 mm^-5`
- `A8 = -6.93799E-11 mm^-7`
- `A10 = +9.63136E-14 mm^-9`
- `A12 = 0`
- `A14 = 0`

At the modeled semi-diameter of 16.7 mm, the verified sag is 3.821930 mm. The spherical base would have a sag of 4.455304 mm, so the polynomial departure is -0.633374 mm. The actual rim angle is 23.7459°. This departure is quoted only at the inferred model semi-diameter; the patent does not publish a clear aperture for surface 40.

The negative fourth-order term dominates the peripheral correction and makes the surface shallower than its spherical base at the modeled rim. Higher orders shape the transition rather than changing the underlying spherical conic (`K = 0`). The patent does not state whether L23 is molded, polished, or hybrid, so no manufacturing process is assigned.

No scale factor was applied. Radii, thicknesses, image coordinates, and asphere coefficients remain at the native Numerical Example 6 scale; no `A_p/s^(p-1)` transformation was required.

## Model Scope and Source Normalization

The patent's plane-parallel filter F, surfaces 42-43, is excluded from the active lens sequence. Its paraxial translation is preserved by replacing the 2.1074 mm plate at `nd = 1.51680` with the air-equivalent distance `2.1074/1.51680 = 1.389372 mm`. The final air spacing from surface 41 to the image plane is therefore the published 30.3551 mm air gap plus the plate's air equivalent and the state-specific published BF.

The resulting surface-41-to-image spacings are 32.092572, 32.094872, and 32.092972 mm at wide, middle, and tele. The independently computed rear focal distances from surface 41 are 32.089844, 32.092190, and 32.089692 mm, differing by only -0.0027 to -0.0033 mm.

The aperture stop position is published at source surface 15. Its physical semi-diameter is not published; the data file uses 12.7 mm, solved from the three patent EFL/f-number states and constrained to one physical stop. The recomputed f-numbers are 4.1459, 4.1052, and 4.1411.

All lens semi-diameters are modeling inferences. They were derived from axial and full-field ray bundles over all six published zoom/focus states, compared with the optical section in Figure 66, and constrained by positive edge thickness, actual aspheric rim slope, conic validity, cross-gap clearance, off-axis containment, and render-trim limits. The tightest modeled air gap is between surfaces 20 and 21: the rims retain 0.046835 mm physical clearance. No layout parameter is used to hide a geometric intersection.

The close-focus variable-spacing table prints `d16` for the stop-to-G4 gap. Surface 16 is a refracting surface and the repeated values are those of the infinity `d15` row; the data therefore preserves the raw discrepancy in documentation but maps the row to the `STO` variable key, labeled `D15`.

## Image Stabilization

The fixed rear group G7 is divided into negative subgroup G7a and positive subgroup G7b. G7a comprises D5 (L15-L16) and L17 and has a computed focal length of -30.2716 mm. The patent specifies that G7a moves perpendicular to the optical axis to correct image motion, while G7b remains fixed (¶0026).

The design places G7a after the converging focus group G6, where the beam diameter is reduced. This arrangement lowers the required clear aperture of the moving unit and is consistent with the patent's aim of reducing stabilizer mass. The patent supplies aberration plots for a 0.4° stabilization condition but does not publish the mechanical decenter required to obtain that correction. No decenter range is invented in the data or analysis.

Panasonic specifies optical image stabilization and compatibility with the camera's Dual I.S. 2 system for the production lens. Those are product-level system facts. The optical prescription models only the centered state; the transverse motion is documented functionally rather than encoded as a continuous decenter control.

## Conditional Expressions

Numerical Example 6 satisfies every patent condition. Condition (3) contains a source contradiction: the claims and explanatory text use an upper bound of 0.65, while the worked-example summary table prints 0.85. The example value passes either version.

| No. | Patent condition | Example 6 value | Result |
| --- | --- | ---: | --- |
| 1 | `0.35 < G2at/G2t < 0.80` | 0.529274 | Pass |
| 2 | `1.40 < G2af/G2f < 5.40` | 2.596615 | Pass |
| 3 | `0.19 < f6/ft < 0.65` (summary table: 0.85) | 0.429853 | Pass under both bounds |
| 4 | `1.20 < MR²(1 - M6²) < 6.00` | 2.261733 | Pass |
| 5 | `0.19 < M6 < 0.75` | 0.498700 | Pass |
| 6 | `-0.85 < f7/ft < -0.17` | -0.318484 | Pass |
| 7 | `-8.0 < (G2a2 + G2a1)/(G2a2 - G2a1) < -1.5` | -4.297687 | Pass |

Conditions (1), (2), and (7) govern the weakly powered, widely separated G2a/G2b variator architecture and the convex-to-object shape of L4. Conditions (3)-(5) regulate G6 focus power, magnification, and image-plane sensitivity. Condition (6) bounds the negative power of fixed rear group G7 so that it shortens the system without excessive aberration burden.

## Verification Summary

Sequential reduced-angle tracing with `[y, ν = n·u]` and an independent ABCD matrix assembly reproduce the three patent focal states:

| State | Patent EFL (mm) | Computed EFL (mm) | Error (mm) | Modeled f/# |
| --- | ---: | ---: | ---: | ---: |
| Wide | 72.5000 | 72.501598 | +0.001598 | 4.1459 |
| Middle | 117.6000 | 117.605463 | +0.005463 | 4.1052 |
| Tele | 193.9500 | 193.954168 | +0.004168 | 4.1411 |

The direct trace and ABCD matrices agree to `1.42×10^-14`. Every functional-group focal length agrees with the patent table within 0.01 mm; the largest discrepancy is 0.005592 mm at G4.

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`. The sum is `0.002213585115 mm^-1`, corresponding to `R_P = -451.755839 mm` under the stated sign convention. This is a paraxial field-curvature diagnostic, not a prediction of the final best-focus surface after higher-order astigmatism and field correction.

The inferred geometry has a maximum actual rim angle of 59.3181°, a minimum positive edge thickness of 0.3083 mm, and no shared-band cross-gap intrusion. Full-field clipping begins only at air-spaced unit entrances, not at cemented interfaces or within glass elements. These checks support the diagram model but do not convert inferred semi-diameters into published mechanical clear apertures.

## Sources

- JP 2020-086133 A, Numerical Example 6, included patent PDF; especially ¶¶0020-0060, ¶¶0127-0137, the Numerical Example 6 tables, and Figure 66.
- Panasonic, “LUMIX S PRO 70-200mm F4 O.I.S. Lens S-R70200 — Specs,” official product specification: <https://www.panasonic.com/au/consumer/lumix-cameras-video-cameras/lumix-camera-lenses/lumix-s-lenses/s-r70200gc.specs.html>.
- Panasonic North America, “Panasonic Launches Three L-Mount Interchangeable Lenses for the LUMIX S Series Full-frame Digital Single Lens Mirrorless Camera,” 2019-02-01: <https://na.panasonic.com/news/panasonic-launches-three-l-mount-interchangeable-lenses-for-the-lumix-s-series-full-frame-digital-single-lens-mirrorless-camera>.
