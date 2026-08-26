# CANON EF 180mm f/3.5 L Macro USM

## Patent Reference and Design Identification

- **Patent:** JP 1997-211319 A (特開平9-211319)
- **Application Number:** JP H8-34317 (特願平8-34317)
- **Filed:** 1996-01-29
- **Published:** 1997-08-15
- **Inventor:** Hideki Ogawa
- **Applicant:** Canon Inc.
- **Title:** *Macro Lens* (マクロレンズ)
**Embodiment analyzed:** Numerical Example 1

The prescription is Numerical Example 1 of JP 1997-211319 A. The job card fixes that example as the production correlation for the CANON EF 180mm f/3.5 L Macro USM; the patent itself does not identify the commercial lens by model name. The correlation rests on several convergent features rather than on a manufacturer statement that Example 1 became the production prescription.

1. Numerical Example 1 is a 180 mm, f/3.6 design, while Canon marketed the production lens as 180 mm f/3.5. The small aperture difference is retained rather than reconciled: the data file uses `apertureMarketing: 3.5`, `apertureDesign: 3.6`, and `nominalFno: 3.6`.
2. The example contains 14 elements in 12 air-separated optical groups, exactly matching Canon's published 12-group/14-element production specification.
3. Canon identifies production elements 2, 4, and 11 as UD elements. Those positions correspond to the three Example 1 elements having the same low-index, high-Abbe coordinate, nd = 1.49700 and νd = 81.6.
4. The patent publishes a floating focus in which L2 moves imageward and L3 moves objectward. Canon describes the production lens as moving its second and third focusing groups on different trajectories while maintaining constant external length.
5. The published example reaches 1.0×. Independent paraxial solution of the final data file gives 0.475566 m from subject plane to image plane at the 1.0× endpoint, consistent with Canon's rounded 0.48 m minimum focusing distance.
6. The application was filed on 1996-01-29, shortly before Canon's April 1996 market introduction of the production lens.

The patent Example 1 header on p. 6 gives `2ω = 13.8°`. Figure 12, the infinity aberration plot, instead labels the off-axis traces `ω = 13.8°`, while the 0.1×, 0.5×, and 1.0× plots in Figs. 13–15 label them `ω = 6.85°`. The model therefore follows the numerical-example header as the controlling full-field notation; that interpretation is also consistent with Canon's published diagonal production angle of 13°40′. A separate textual cross-reference in ¶0026 points to Fig. 45(A), although the surrounding argument clearly contrasts Fig. 56(A) and Fig. 56(B); this is treated as a source cross-reference error and does not alter any optical datum.

No uniform scaling is applied. The patent prescription is already a 180 mm design, and all radii, spacings, and derived dimensional quantities remain at the source scale.

## Optical Architecture

The patent describes four principal groups, while subdividing its first positive group into L1a and L1b. In front-to-rear order, the functional sequence is therefore L1a(+), L1b(+), L2(−), fixed stop, L3(+), and L4. The data file contains 14 physical glass elements and reports `groupCount: 12`, where “group” means an air-separated optical group: the two cemented pairs reduce 14 elements to 12 air-separated units. This is distinct from the patent's four principal-group nomenclature.

Numerical Example 1 is all-spherical. It contains no aspheric surfaces, no diffractive surface, no folded path, and no omitted cover plate, filter, or inactive dummy plane requiring an air-equivalent correction. The only non-lens optical plane is the active aperture stop at the patent's r18/SP position between L2 and L3 (¶0016, ¶0053).

Independent first-order calculation from the final TypeScript arrays gives the following functional-group focal lengths:

| Functional group | Computed EFL (mm) | Sign |
|---|---:|---|
| L1a | 85.623329 | Positive |
| L1b | 514.654104 | Positive |
| L1a + L1b | 75.268567 | Positive |
| L2 | -50.108430 | Negative |
| L3 | 205.195680 | Positive |
| L4 | 184.157663 | Positive |

The patent permits L4 to be positive or negative in the general invention (¶0016); Example 1 is positive by independent trace. The dominant focusing action is assigned to the compact negative L2 group, with L3 moving oppositely as a floating correction group. L1a, L1b, L4, the stop plane, and the image plane remain fixed in this embodiment.

The modeled infinity EFL is 180.009424 mm. The first optical vertex to image-plane track is 223.51 mm, giving TL/EFL = 1.241657. Under the project convention that “telephoto-form” requires TL/EFL < 1, this prescription is not telephoto-form even though Canon categorizes the product as a telephoto macro lens. Its 67.54 mm authored rear spacing also gives BFD/EFL = 0.375203, so it is not retrofocus by the project criterion BFD > EFL.

The patent specifies the stop location but does not publish its diameter. The data file's `STO` semi-diameter of 15.116513 mm is consequently a modeling inference, obtained by enforcing the published infinity design f/3.6 through the independently traced entrance pupil. Likewise, the patent does not tabulate clear semi-diameters. All authored surface `sd` values are modeling inferences constrained by the f/3.6 marginal bundle, representative off-axis rays, the proportions of the patent's Fig. 1 optical section, and the current edge-thickness, rim-slope, and shared-gap geometry limits. They are not source values.

## Element-by-Element Analysis

The focal lengths in this section are isolated-in-air thick-element EFLs computed from the final data file. They describe each element removed from the surrounding system and must not be confused with the element's in-situ contribution or with the focal length of a complete functional group.

### Element 1 (L1) — Positive Meniscus

**nd = 1.48749, νd = 70.2. Glass: 487702 — crown class (supplier unresolved). f = +562.086404 mm.**

Element 1 is the front member of L1a. Its isolated power is weakly positive, and its role in the data model is chiefly as part of the positive collecting front section rather than as a separately moving component. It remains fixed throughout focus.

### Element 2 (L2) — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 — low-dispersion / UD crown class (supplier unresolved). f = +112.405768 mm.**

Element 2 is a substantially stronger positive member of L1a. Canon identifies the second element of the production lens as UD. The patent provides only nd and νd for this coordinate; the data therefore records the production UD identification as a class annotation without assigning a specific supplier glass or importing unpublished line indices.

### Element 3 (L3) — Negative Meniscus

**nd = 1.80100, νd = 35.0. Glass: 801350 — high-index class (supplier unresolved). f = -180.113853 mm.**

Element 3 supplies negative isolated power inside the otherwise positive L1a assembly. Its placement between the stronger positive Elements 2 and 4 gives the front group an alternating positive-negative-positive power sequence, while the complete L1a remains strongly positive at 85.623329 mm EFL.

### Element 4 (L4) — Positive Meniscus

**nd = 1.49700, νd = 81.6. Glass: 497816 — low-dispersion / UD crown class (supplier unresolved). f = +150.787175 mm.**

Element 4 completes L1a and uses the same nd/νd coordinate as Element 2. Canon identifies the fourth production element as UD. As with Element 2, the data preserves that production classification but does not promote any coordinate-compatible public catalog glass to an asserted supplier identity.

### Element 5 (L5) — Negative Meniscus

**nd = 1.80518, νd = 25.4. Glass: 805254 — dense-flint class (supplier unresolved). f = -235.636073 mm.**

Element 5 is the negative L1b1 meniscus singled out in the patent's focusing-aberration argument. The patent explains that, as L2 moves imageward for close focus, the axial-ray height in L2 falls and its positive spherical-aberration contribution changes; L1b is configured so that its own contribution changes in the compensating direction (¶0022–¶0027). The rear surface of Element 5, surface 10 in the data file, has independently computed surface power φ = -0.02589836 mm⁻¹.

That surface enters conditional expression (1). Using the computed L1 focal length, `|φ| f1 = 1.949332`, inside both the patent's required 1.4–2.6 interval and its preferred 1.8–2.1 interval.

### Element 6 (L6) — Positive Meniscus

**nd = 1.48749, νd = 70.2. Glass: 487702 — crown class (supplier unresolved). f = +158.754640 mm.**

Element 6 is the positive L1b2 member. The patent states that this positive lens maintains L1b as a positive group while allowing the preceding negative meniscus to provide the desired focus-dependent aberration behavior (¶0026). The complete L1b group remains weakly positive, with a computed EFL of 514.654104 mm.

### Element 7 (L7) — Biconcave Negative

**nd = 1.88300, νd = 40.8. Glass: 883408 — high-index lanthanum class (supplier unresolved). f = -48.651521 mm.**

Element 7 is the front element of the moving L2 group and has the strongest isolated negative power among the non-cemented elements. L2 as a whole is the principal negative focusing group, with a computed EFL of -50.108430 mm. From infinity to 1.0×, this rigid group translates 29.38 mm imageward.

### Element 8 (L8) — Biconcave Negative, cemented to Element 9

**nd = 1.48749, νd = 70.2. Glass: 487702 — crown class (supplier unresolved). f = -64.540879 mm.**

Element 8 is the negative L2n member identified by the patent's condition (4). Its nd = 1.48749 and νd = 70.2 satisfy `N2n < 1.55` and `ν2n > 55`. The patent associates this low-index, high-Abbe negative member with control of residual chromatic aberration in the preceding positive system (¶0045–¶0047). That is a patent design rationale; the authored model does not attempt a line-by-line chromatic proof because no C/F/g indices or validated Sellmeier identity are available.

### Element 9 (L9) — Positive Meniscus, cemented to Element 8

**nd = 1.84666, νd = 23.9. Glass: 847239 — dense-flint class (supplier unresolved). f = +62.663609 mm.**

Element 9 is the positive member of the L2 cemented pair. The shared surface 16 correctly carries the downstream Element 9 identity and index in the data file.

Considered individually in air, Elements 8 and 9 have strong and nearly opposing powers. Considered as the cemented pair in air, however, their net EFL is +2002.361543 mm, or only about +0.499410 D. This near cancellation describes the isolated cemented pair, not the complete L2 group: the full L2 assembly, including Element 7 and its internal spacing, remains strongly negative at -50.108430 mm EFL.

### Element 10 (L10) — Plano-Convex Positive

**nd = 1.76200, νd = 40.1. Glass: 762401 — lanthanum class (supplier unresolved). f = +54.750656 mm.**

Element 10 is the positive front member of L3 and has the strongest isolated positive power in that group. Its rear face is plane in the published prescription. L3 moves objectward during close focusing, opposite the motion of L2.

### Element 11 (L11) — Biconvex Positive, cemented to Element 12

**nd = 1.49700, νd = 81.6. Glass: 497816 — low-dispersion / UD crown class (supplier unresolved). f = +83.051492 mm.**

Element 11 is the positive L3p member named in conditional expression (6). Its nd = 1.49700 and νd = 81.6 satisfy `N3p < 1.55` and `ν3p > 55` (¶0050–¶0051). Canon also identifies the eleventh production element as UD. The data preserves that manufacturer identification while leaving the supplier and detailed partial-dispersion behavior unresolved.

### Element 12 (L12) — Biconcave Negative, cemented to Element 11

**nd = 1.59270, νd = 35.3. Glass: 593353 — flint class (supplier unresolved). f = -34.091213 mm.**

Element 12 is the strong negative partner of Element 11. At their shared surface 22, the data correctly switches to the downstream Element 12 identity and index.

The isolated cemented E11/E12 pair has net EFL -61.302378 mm, or -16.312581 D. This does not make L3 negative in situ: the preceding strongly positive Element 10 and the group's internal geometry yield a complete L3 EFL of +205.195680 mm.

### Element 13 (L13) — Negative Meniscus

**nd = 1.83400, νd = 37.2. Glass: 834372 — high-index lanthanum class (supplier unresolved). f = -535.598550 mm.**

Element 13 is the weak negative front member of L4. The patent describes one preferred fourth-group form as a negative meniscus followed by a positive lens (¶0052), which is the arrangement used by Example 1.

### Element 14 (L14) — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: 487702 — crown class (supplier unresolved). f = +143.107597 mm.**

Element 14 is the final positive lens and completes L4. The pair of Elements 13 and 14 yields a positive L4 group with computed EFL 184.157663 mm. L4 remains fixed during the published Example 1 focus sequence, and the final 67.54 mm surface-to-image spacing is constant in every published focus row.

## Glass Identification and Selection

Example 1 uses nine distinct nd/νd coordinates. The patent does not name glass suppliers, and several public catalogs contain identical or near-identical six-digit coordinates. The data therefore uses generic class/code labels rather than assigning a vendor glass whose composition and partial dispersion are not established.

| Data-file glass label | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| 487702 — crown class (supplier unresolved) | 1.48749 | 70.2 | 1, 6, 8, 14 | Generic coordinate class |
| 497816 — low-dispersion / UD crown class (supplier unresolved) | 1.49700 | 81.6 | 2, 4, 11 | Production positions identified by Canon as UD; supplier unresolved |
| 801350 — high-index class (supplier unresolved) | 1.80100 | 35.0 | 3 | Generic coordinate class |
| 805254 — dense-flint class (supplier unresolved) | 1.80518 | 25.4 | 5 | Generic coordinate class |
| 883408 — high-index lanthanum class (supplier unresolved) | 1.88300 | 40.8 | 7 | Generic coordinate class |
| 847239 — dense-flint class (supplier unresolved) | 1.84666 | 23.9 | 9 | Generic coordinate class |
| 762401 — lanthanum class (supplier unresolved) | 1.76200 | 40.1 | 10 | Generic coordinate class |
| 593353 — flint class (supplier unresolved) | 1.59270 | 35.3 | 12 | Generic coordinate class |
| 834372 — high-index lanthanum class (supplier unresolved) | 1.83400 | 37.2 | 13 | Generic coordinate class |

The stored index/Abbe values are treated as d-line nd/νd coordinates. The patent's ¶0054 labels the quantities only as refractive index and Abbe number, but the numerical coordinate system and the patent's d/g aberration notation are consistent with ordinary d-line glass coding. No e-line conversion is applied.

No element in the data file carries `nC`, `nF`, `ng`, or `dPgF`. Consequently, the analysis does not claim apochromatic correction, quantify anomalous partial dispersion, or promote Canon's “UD” production label into a specific optical-glass identity. The manufacturer identification is useful for production correlation and glass-class context, but the modeled chromatic behavior remains limited to the data actually stored.

## Focus Mechanism

Example 1 publishes four focus states: infinity, 0.1×, 0.5×, and 1.0×. The patent's moving gaps are:

| Gap | ∞ | 0.1× | 0.5× | 1.0× |
|---|---:|---:|---:|---:|
| d12 | 2.20 | 5.19 | 17.03 | 31.58 |
| d17 | 32.31 | 29.32 | 17.48 | 2.93 |
| d18 | 17.54 | 15.39 | 7.93 | 1.10 |
| d23 | 28.15 | 30.30 | 37.76 | 44.59 |
| d27 | 67.54 | 67.54 | 67.54 | 67.54 |

The invariants `d12 + d17 = 34.51 mm` and `d18 + d23 = 45.69 mm` hold at every published row. They establish that L2 and L3 each move as rigid groups while the stop remains at a fixed absolute axial station. From infinity to 1.0×, L2 moves 29.38 mm imageward and L3 moves 16.44 mm objectward. L1a, L1b, L4, and the image plane remain fixed, so the first-vertex-to-image track stays 223.51 mm.

This is a **PUBLISHED** focus model, not a reconstructed mechanism. There is nevertheless a current schema limitation in the viewer: prime-lens `var` values store only `[infinity, close]` endpoints. The data file therefore uses the exact published infinity and 1.0× spacings as the runtime endpoints and preserves the exact 0.1× and 0.5× source rows in the data header and audit. Intermediate runtime positions are linear interpolation between the endpoints; they should not be mistaken for a claim that Canon's published intermediate trajectories are linear.

At the 1.0× endpoint, a paraxial object-distance solution from the final data gives lateral magnification -1.000360 and subject-plane-to-image-plane distance 0.475566 m. The data's `closeFocusM: 0.48` deliberately retains Canon's marketed rounded minimum focusing distance rather than replacing it with the computed design value.

Canon's manual also distinguishes nominal maximum aperture from close-focus effective f-number: it lists effective f/3.8 at 1:10 and f/5.8 at 1:1. The patent aberration plots are very similar, showing about f/3.9 at 0.1× and f/5.8 at 1.0×. These close-focus effective values do not replace the authored `nominalFno: 3.6`, which is the infinity design f-number controlling the modeled stop and pupil geometry.

## Chromatic Correction Strategy

The chromatic strategy is visible at the level of index/Abbe placement and patent constraints, but not at the level of verified secondary-spectrum ray tracing. Canon identifies Elements 2, 4, and 11 as UD in the production lens; the three corresponding data elements share nd = 1.49700 and νd = 81.6. Two lie in the fixed positive L1a group and one is the positive member of the moving L3 cemented pair.

The patent additionally constrains the negative L2n member, Element 8, to low refractive index and high Abbe number (`N2n < 1.55`, `ν2n > 55`) and applies the same form of constraint to the positive L3p member, Element 11 (`N3p < 1.55`, `ν3p > 55`). The patent states that these choices support chromatic correction (¶0045–¶0051).

Those statements are source-level design intent, not a license to infer detailed partial-dispersion behavior. Because the patent does not publish C/F/g indices or `dPgF`, and because the generic glass labels are not validated supplier Sellmeier identities, the data file cannot independently establish APO behavior or quantify secondary-spectrum correction.

## Conditional Expressions

The patent gives six principal numerical conditions relevant to Example 1. Recalculation from the final TypeScript prescription gives:

| Condition | Computed value | Patent requirement | Result |
|---|---:|---|---|
| (1) `|φ| f1` | 1.949332414 | 1.4 < value < 2.6; preferred 1.8 < value < 2.1 | Pass; preferred range also passed |
| (2) `f1b / f1` | 6.837570116 | 2 < value < 15 | Pass |
| (3) `f1a / f1` | 1.137570869 | 1.05 < value < 1.74; preferred 1.10 < value < 1.45 | Pass; preferred range also passed |
| (4) L2n glass | N2n = 1.48749, ν2n = 70.2 | N2n < 1.55 and ν2n > 55 | Pass |
| (5) `|f2| / f` | 0.278365593 | 0.15 < value < 0.45 | Pass |
| (6) L3p glass | N3p = 1.49700, ν3p = 81.6 | N3p < 1.55 and ν3p > 55 | Pass |

The computed group focal lengths differ slightly from the rounded values in patent Table 1 because the prescription itself is printed to finite radius and index precision. The largest of the checked group-level differences is L1b: 514.654104 mm computed from the printed prescription versus 514.975 mm in the patent's Table 1. This is retained as source precision, not “corrected” by altering the prescription.

## Verification Summary

The final data file reproduces the patent's infinity first-order behavior at printed prescription precision. Independent reduced-angle sequential tracing and an ABCD matrix product give the same system matrix to better than 1 × 10⁻¹² elementwise. The infinity EFL is 180.009424 mm against the patent's nominal 180 mm. Optical BFL from surface 27 is 67.554224 mm, 0.014224 mm longer than the printed d27 = 67.54 mm.

The 1.0× endpoint solves to magnification -1.000360 and 0.475566 m subject-to-image distance. The fixed 223.51 mm first-vertex-to-image track is conserved across all four published focus rows. The Petzval sum, evaluated surface by surface as `φ/(n n′)`, is +0.000555440 mm⁻¹.

The inferred clear-aperture model is geometrically conservative rather than a claim about Canon's mechanical drawings. Across the audited focus range, the smallest calculated positive element edge thickness is 0.740087 mm, the maximum actual spherical rim angle is 36.0231°, and the minimum shared-gap physical clearance is 0.375397 mm. Example 1 is all-spherical, so no conic-limit or asphere-departure check applies. Representative ray sampling shows ordinary vignetting at some air-separated rims toward the close-focus/off-axis extremes, but no representative ray first-clips at either cemented interface.

## Sources / References

- JP 1997-211319 A (特開平9-211319), *Macro Lens*, Hideki Ogawa / Canon Inc.; especially ¶0016–¶0017, ¶0022–¶0027, ¶0035–¶0055, Numerical Example 1 on p. 6, Table 1, and Figs. 1, 12–15, 56.
- Canon Camera Museum, “EF180mm f/3.5L Macro USM”: https://global.canon/en/c-museum/product/ef334.html
- Canon Camera Museum (Japanese), “EF180mm F3.5L マクロ USM”: https://global.canon/ja/c-museum/product/ef334.html
- Canon, *EF180mm f/3.5L MACRO USM 使用説明書*: https://cweb.canon.jp/manual/ef/macro/ef180f35lmacrousm-ja.pdf
