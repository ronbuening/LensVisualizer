## Patent Reference and Design Identification

**Patent:** US 3,482,900\
**Filed:** July 5, 1966\
**Priority:** Germany, July 8, 1965, Sch. 37,345\
**Granted:** December 9, 1969\
**Inventor:** Werner Wagner\
**Assignee:** Jos. Schneider & Co., Optische Werke\
**Title:** Varifocal Optical Objective\
**Embodiment analyzed:** Table I, the patent's sole worked numerical prescription; designated Example 1 by the project job card

The implemented prescription is the single numerical example in Table I of US 3,482,900. The patent describes a five-component varifocal objective for small still cameras, specifically including 24 × 36 mm film, with a nominal relative aperture of 1:2.8. Its worked zoom states are 48, 72, 85, and 96 mm. The patent also gives a common back focal length of 48.2 linear units and 14 physical glass elements arranged as ten air-spaced lens members. The data file preserves those design quantities without scaling. (US 3,482,900, pp. 3–5; Table I on p. 4.)

The production correlation to the Schneider-Kreuznach VARIOGON 2.8/45-100 is strong but not manufacturer-confirmed at the prescription level. The evidence converges in several ways:

1. Schneider's retrospective material identifies a high-speed Variogon 2.8/45-100 in the still-camera line and describes front focusing, mechanical focal-distance compensation, a click-stop diaphragm, and interchangeable adapter bases.
2. Period Schneider/Burleigh Brooks literature lists a 45-100 mm f/2.8 Variogon for 24 × 36 mm SLR use with 14 elements, a 1.2 m minimum focusing distance, f/22 minimum aperture, and 14 enumerated interchangeable socket entries.
3. The patent's worked design has 14 elements, an f/2.8 aperture target, a 24 × 36 mm intended format, an approximately 48-96 mm design range, and a close-focus design example of about 1.2 m.
4. One material contradiction remains: the period product brochure states 14 elements in 11 groups, whereas the patent prescription has 14 elements in ten air-spaced lens members. No accessed Schneider source states that Table I of US 3,482,900 is the exact production formula.

Accordingly, the data file keeps the marketed 45-100 mm range separate from the unscaled design EFL endpoints of approximately 48.060 and 96.043 mm. The period brochure does enumerate historical sockets, including Nikon F, Leicaflex, Canonflex, Exakta-family, Praktina, Minolta, Konica, C-mount, D-mount, and others. `lensMounts` nevertheless remains unset because the current LensVisualizer taxonomy does not cleanly represent the complete brochure list; authoring only the mappable subset would imply an unsupported exhaustiveness.

## Optical Architecture

The prescription is a five-component positive-negative-negative-positive-positive zoom system. Components I through IV form the varifocal front section; component V is a fixed positive basic objective. The patent itself describes the first component as substantially fixed, components II and III as axially movable negative components, component IV as fixed and positive, and component V as fixed and positive. It also notes that the front four-component section is intended to be more or less afocal around the median zoom position. (US 3,482,900, p. 3.)

The implemented model contains 14 physical glass elements and ten air-spaced patent lens members. Four interfaces are cemented: L1/L2, L5/L6, L7/L8, and L11/L12. All 24 refracting surfaces are spherical; there are no aspherical coefficients or diffractive phase surfaces.

The isolated component focal lengths recomputed from the final data are approximately +86.209 mm for I, -48.003 mm for II, -76.128 mm for III, +68.691 mm for IV, and +67.042 mm for V. Components I-IV reproduce the patent's rounded values within the adopted source-precision tolerance. The printed component-focal-length list gives `fV = -67.19 mm`; that sign conflicts with the patent's repeated description of V as positive and with the positive +67.042 mm computed from its prescription, so the negative sign is retained as a source discrepancy rather than used as the modeled power. The values are component powers, not substitutes for the standalone focal lengths of the individual elements or the net powers of the cemented members.

Zooming is accomplished by the three published variable air spaces d5, d10, and d13. Component II moves rearward continuously from the 48 mm state to the 96 mm state. Component III also moves rearward overall, while d10 itself decreases from 10.885 mm to 2.300 mm by the 85 mm state and then increases to 2.744 mm at 96 mm. The design therefore contains a real spacing reversal that is preserved by the four published keyframes. The sum d5+d10+d13 remains essentially constant at 25.55 mm to the precision of the source table.

The first-to-last-vertex track is about 96.50 mm at each published zoom state. Under the project's architectural definitions, the system is not classified overall as telephoto because track/EFL never falls below 1. BFD exceeds EFL only at the 48 mm state, by about 0.178 mm, so the complete zoom is not assigned an overall retrofocus classification either.

## Element-by-Element Analysis

### L1 — Negative Meniscus, front element of D1

`nd = 1.80518, νd = 25.46. Glass: 805255 coordinate class (supplier unresolved). f = -168.235 mm.`

L1 is the negative element of the first cemented member in component I. It is cemented to L2 at r2. The patent identifies this first member of component I as one of the cemented members used for chromatic correction. The computed standalone focal length given above describes L1 isolated in air; it should not be confused with the much weaker net power of the complete L1/L2 cemented member.

### L2 — Positive Meniscus, rear element of D1

`nd = 1.55232, νd = 63.49. Glass: 552635 coordinate class (supplier unresolved). f = +139.001 mm.`

L2 is the positive, higher-Abbe partner of L1. The L1/L2 cemented member has an isolated net focal length of approximately +889.409 mm, so the doublet by itself is only weakly positive. Component I becomes substantially stronger only when this cemented member is combined with the separate positive L3 across the small d3 air space.

### L3 — Positive Meniscus, rear member of component I

`nd = 1.62041, νd = 60.29. Glass: 620603 coordinate class (supplier unresolved). f = +93.275 mm.`

L3 is the second air-spaced member of component I. Together with the weakly positive L1/L2 member it yields the verified component-I focal length of approximately +86.209 mm. The patent treats component I as substantially fixed during zooming, while allowing limited axial adjustment of component I or one of its members for focusing.

### L4 — Negative Meniscus, forward member of component II

`nd = 1.62230, νd = 53.14. Glass: 622531 coordinate class (supplier unresolved). f = -48.445 mm.`

L4 is the forward negative member of the first moving zoom component. It is separated from the L5/L6 cemented member by the strongly curved biconvex air space d7 described explicitly in the patent. Its isolated focal length is important because the patent states a general condition requiring the magnitude of this member's focal length to be below 80% of that of component II. The worked prescription does not satisfy that condition: |f(L4)| is about 48.445 mm, while 0.8|fII| is 38.4 mm. The numerical prescription is nevertheless unambiguous, so the discrepancy is preserved rather than repaired.

### L5 — Biconcave Negative, front element of D2

`nd = 1.71300, νd = 53.89. Glass: 713539 coordinate class (supplier unresolved). f = -47.557 mm.`

L5 is the negative front element of the rear cemented member of component II. The patent identifies this rear member of component II as another cemented member used for chromatic correction. Its front surface r8 also supplies the reference power against which several deliberately flattened outer surfaces are compared in the patent's design conditions.

### L6 — Biconvex Positive, rear element of D2

`nd = 1.72830, νd = 28.66. Glass: S-TIH10 — coordinate-compatible spectral proxy (supplier unresolved). f = +48.975 mm.`

L6 is the positive cemented partner of L5. In isolation, the complete L5/L6 member is only weakly negative, with a computed net focal length of approximately -2703.012 mm. The much stronger approximately -48.003 mm power of complete component II therefore depends on the separated combination of L4, the d7 air space, and the L5/L6 member rather than on the cemented pair alone.

### L7 — Positive Meniscus, front element of D3

`nd = 1.60565, νd = 37.95. Glass: Unmatched (1.60565 / 37.95; supplier unresolved). f = +82.643 mm.`

L7 is the positive front element of the sole lens member in moving component III. It is cemented to L8 at r12. Because component III consists only of this cemented pair, the pair's computed net focal length is also the component focal length, approximately -76.128 mm.

### L8 — Negative Meniscus, rear element of D3

`nd = 1.71300, νd = 53.89. Glass: 713539 coordinate class (supplier unresolved). f = -40.444 mm.`

L8 is the negative rear element of component III. The patent specifies the cemented interface in this component as negatively refracting and forwardly concave. The final data preserve the source radius and downstream medium at the cemented interface rather than modeling an artificial cement layer.

### L9 — Biconvex Positive, component IV

`nd = 1.65844, νd = 50.84. Glass: 658508 coordinate class (supplier unresolved). f = +68.691 mm.`

L9 is the single fixed positive element of component IV. Its standalone focal length is therefore also the focal length of component IV. It sits immediately ahead of the fixed d15 diaphragm space and forms the last powered component of the varifocal front section before the fixed basic objective V.

### L10 — Positive Meniscus, first member of component V

`nd = 1.62041, νd = 60.29. Glass: 620603 coordinate class (supplier unresolved). f = +82.670 mm.`

L10 is the first positive singlet of the fixed basic objective. It follows the modeled aperture stop and begins component V. The patent's printed prose on page 4 misnumbers the later elements in this component, but Figure 1, Table I, and claim 1 agree that the sequence is L10, the L11/L12 doublet, L13, and L14.

### L11 — Negative Meniscus, front element of D4

`nd = 1.62364, νd = 36.75. Glass: Unmatched (1.62364 / 36.75; supplier unresolved). f = -36.975 mm.`

L11 is the negative front element of the cemented member in component V. The patent describes the second member of the basic objective as a cemented doublet used for improved chromatic performance. No modern supplier identity is assigned to L11 because the recorded authoritative catalog search did not establish a defensible exact current match.

### L12 — Positive Meniscus, rear element of D4

`nd = 1.62041, νd = 60.29. Glass: 620603 coordinate class (supplier unresolved). f = +26.749 mm.`

L12 is the positive partner of L11. The cemented L11/L12 member has a computed isolated focal length of approximately +122.206 mm. It contributes to the complete component-V focal length of approximately +67.042 mm together with L10, L13, and L14 and their intervening air spaces.

### L13 — Biconcave Negative, third member of component V

`nd = 1.64831, νd = 33.77. Glass: 648338 coordinate class (supplier unresolved). f = -31.718 mm.`

L13 is the negative singlet following the L11/L12 doublet. Its identity is one of the points affected by the page-4 prose numbering error; the corrected L13 assignment is established by Figure 1, the numerical table, and claim 1 rather than by silently renumbering the prescription.

### L14 — Biconvex Positive, final member of component V

`nd = 1.57957, νd = 53.86. Glass: 580539 coordinate class (supplier unresolved). f = +43.977 mm.`

L14 is the final positive singlet and terminates the refracting prescription at r24. Table I visibly prints the surface-power entry for r24 with the wrong sign. With `R = -35.89 mm` and the medium changing from `n = 1.57957` to air, the computed surface power is positive. The data retain the published radius and media and preserve the printed sign error separately in the audit record.

## Glass Identification and Selection

L6 uses S-TIH10 as a coordinate-compatible spectral proxy (1.72825 / 28.4606 versus patent 1.72830 / 28.66). Twelve of fourteen elements now resolve to catalog curves. L7 and L11 remain unresolved because their nearest catalog candidates are appreciably less specific; no production supplier is inferred.

The patent supplies only d-line refractive index and Abbe number. It names no glass manufacturer and publishes no C-, F-, or g-line indices or anomalous-partial-dispersion data. The catalog review therefore treats modern matches as coordinate equivalences rather than evidence of historical supplier or melt identity. The final data use six-digit coordinate-class labels where defensible and `Unmatched (...)` where the authoritative current catalog search did not establish a sufficiently close named match.

| Data-file glass label | nd | νd | Elements |
|---|---:|---:|---|
| 805255 coordinate class | 1.80518 | 25.46 | L1 |
| 552635 coordinate class | 1.55232 | 63.49 | L2 |
| 620603 coordinate class | 1.62041 | 60.29 | L3, L10, L12 |
| 622531 coordinate class | 1.62230 | 53.14 | L4 |
| 713539 coordinate class | 1.71300 | 53.89 | L5, L8 |
| S-TIH10 spectral proxy | 1.72830 | 28.66 | L6 |
| Unmatched (1.60565 / 37.95) | 1.60565 | 37.95 | L7 |
| 658508 coordinate class | 1.65844 | 50.84 | L9 |
| Unmatched (1.62364 / 36.75) | 1.62364 | 36.75 | L11 |
| 648338 coordinate class | 1.64831 | 33.77 | L13 |
| 580539 coordinate class | 1.57957 | 53.86 | L14 |

Authoritative catalog coverage recorded in the dossier includes SCHOTT, OHARA, HOYA, HIKARI, CDGM, and SUMITA. Several patent coordinates have exact or very close modern counterparts, but that does not identify the historical supplier. For the same reason, candidate catalog `nC`, `nF`, `ng`, or `dPgF` values are not copied onto the patent elements. The implemented model therefore supports ordinary Abbe-based dispersion only and does not support an APO or anomalous-partial-dispersion performance claim.

The patent states that its indices refer to a wavelength of "587.6 microns." That unit is dimensionally inconsistent with the Fraunhofer d line represented by the numerical coordinate. The dossier preserves the raw wording but normalizes the modeled reference to 587.6 nm. This is a unit correction, not a refractive-index conversion.

## Focus Mechanism

The patent allows component I, or one of its members, to move axially for focusing but gives no numerical finite-focus prescription. It also uses approximately 1.2 m as a close-focus design illustration for a roughly 50-100 mm lens. Schneider retrospective material describes the production 2.8/45-100 as front focusing. These statements establish the general focusing concept but do not establish which exact internal member in the production lens follows which displacement law. (US 3,482,900, pp. 3 and 5; Schneider-Kreuznach Variogon retrospective.)

The data therefore use `NO_INTERNAL_RECONSTRUCTION`. `closeFocusM = 1.2` is retained as product/design metadata, while every authored focus pair in the zoom variable-gap table is identical at infinity and close focus. No internal finite-focus motion, focus travel, close-focus EFL, or magnification is claimed from the model.

## Zoom Kinematics and First-Order Verification

The source publishes four zoom states. Recalculation from the final parsed data reproduces the focal lengths and the common 48.2 mm source BFD within the adopted 0.1 mm source-precision tolerance:

| Published state | Computed EFL | Computed BFD from r24 | First-to-last vertex track |
|---:|---:|---:|---:|
| 48 mm | 48.060354 mm | 48.238561 mm | 96.501 mm |
| 72 mm | 72.062900 mm | 48.236893 mm | 96.500 mm |
| 85 mm | 85.047179 mm | 48.230618 mm | 96.500 mm |
| 96 mm | 96.043050 mm | 48.234034 mm | 96.500 mm |

From the 48 mm state, component II translates rearward by approximately 13.906, 18.602, and 21.650 mm at the 72, 85, and 96 mm states. Component III translates rearward by approximately 6.045, 10.017, and 13.509 mm over the same states. The d10 air space narrows from 10.885 mm to 2.300 mm and then reopens to 2.744 mm at the final state; the four-keyframe model therefore retains the patent's reversal rather than replacing it with a monotonic interpolation.

The surface-by-surface Petzval sum is `+0.0033459719 mm^-1`, computed as `phi/(n*n')` at each of the 24 refracting surfaces. The corresponding optional signed radius using `-1/P` is approximately `-298.867 mm`. This is a first-order curvature quantity only; it is not, by itself, a claim about corrected field curvature or image quality.

## Aperture Stop, Pupils, and Modeled Geometry

The patent does not dimension a physical diaphragm. It states only that the fixed 2.5 mm air space d15 could accommodate a diaphragm. The implemented model therefore introduces exactly one `STO` at the midpoint of d15: 1.25 mm behind r15 and 1.25 mm ahead of r16. This position is a modeling inference.

The stop semi-diameter of 12.005 mm is likewise modeled. It was calibrated so that the parsed prescription reproduces the patent's f/2.8 aperture target at all four published zoom states. The resulting modeled f-numbers range from 2.799866 to 2.800137 at those states. Agreement with f/2.8 verifies the calibration; it does not constitute independent evidence that the production diaphragm had a 24.010 mm physical diameter.

The same calculation gives an entrance-pupil semi-diameter increasing from approximately 8.582 mm at the 48 mm state to 17.151 mm at the 96 mm state. The fixed rear section gives an exit-pupil semi-diameter of approximately 14.647 mm, located 33.786 mm objectward of r24 in the verifier's sign convention. These are modeled first-order pupil quantities, not manufacturer dimensions.

No semi-diameters are published in the patent. The final data therefore use modeled clear semi-diameters. Exact spherical tracing first checked the full on-axis f/2.8 pupil and the configured off-axis visualization bundle at all four published states plus three interpolated midpoint states, where the minimum non-stop clearance is approximately 0.292 mm. A denser check over 121 linearly interpolated zoom positions, 81 on-axis pupil samples, and 61 samples across each configured off-axis pupil band found no trace failures and a minimum non-stop clearance of approximately 0.290 mm. Separate checks give a minimum modeled element edge thickness of approximately 0.631 mm, a maximum actual spherical rim slope of approximately 1.718 against the current 2.065 limit, and a maximum shared-gap sag-intrusion ratio of approximately 0.538 against the 0.90 limit. These are construction checks for the authored model; they do not substitute for production LensVisualizer render diagnostics or prove clearance over every continuous pupil, field, and zoom coordinate.

## Patent Conditions and Source Discrepancies

The patent states several design conditions in addition to the numerical table. Recalculation from the final model gives the following dispositions:

| Condition | Result | Comment |
|---|---|---|
| C01: `|f(L4)| < 0.8|fII|` | Fails | 48.445 mm is not below the 38.4 mm limit. This is retained as a source inconsistency. |
| C02: `|fII| > 1.5 ×` maximum component-II displacement | Passes | 48.0 mm exceeds the 32.475 mm threshold. |
| C03: component II has the smallest component focal-length magnitude and is `< 0.8|fIII|` | Passes | The worked component focal lengths satisfy the stated comparison. |
| C04: `|r7/r8| < 0.4` | Passes | The computed ratio is approximately 0.1550. |
| C05: selected flattened-surface powers are smaller in magnitude than r8 | Passes | Recomputed directly from radius and medium transitions. |
| C06: cemented radii are shorter than the corresponding component focal lengths | Passes | Recomputed from the tabulated radii and component powers. |
| C07: maximum change of d10 is `< 0.3|fII|` | Passes | 8.585 mm is below the 14.4 mm limit. |
| C08: d5 is near zero at minimum focal length; d10 and d13 are small at maximum focal length | Passes as a descriptive condition | The published endpoints are d5 = 0.638 mm, d10 = 2.744 mm, d13 = 0.518 mm. |
| C09: d5+d10+d13 remains constant | Passes | The four sums span only 0.001 mm, consistent with table rounding. |

Several source errors or contradictions are deliberately left visible. Table I prints the r24 surface-power sign as negative even though its radius and media require positive refracting power. The component-focal-length list likewise prints `fV = -67.19 mm` even though component V is explicitly positive and computes to +67.042 mm from the same prescription. The wavelength reference is printed as 587.6 microns but modeled as the d line at 587.6 nm. The prose on patent page 4 shifts the labels in component V and appears to create an L15, whereas Figure 1, Table I, and claim 1 consistently establish L11/L12 as the doublet, L13 as the negative singlet, L14 as the final positive singlet, and 14 total elements. Finally, the period product brochure's 14-element/11-group specification does not exactly match the patent formula's 14 elements in ten air-spaced members.

None of these discrepancies is hidden by changing an unrelated numerical value or widening a verification tolerance.

## Verification Summary

The final model was parsed from the actual `.data.ts` rather than from a duplicate hard-coded prescription. A TypeScript AST loader and an independent strict literal parser agree on the authored payload, and intentional duplicate-key and r24-radius mutations are detected by the verification program.

First-order calculations use two implementations: sequential height/reduced-angle tracing and independently composed physical-slope ABCD matrices. Across the four published zoom states and three midpoint samples, their maximum matrix disagreement is below `5 × 10^-14`. The published-state air-to-air matrix determinants remain unity to numerical precision.

The numerical verification separates four different categories that should not be conflated: source-published values, final-data computations, catalog-equivalence evidence, and modeling inferences. In particular, the f/2.8 result is a stop calibration; the 12.005 mm stop semi-diameter and all authored clear semi-diameters are not patent dimensions. The 1.2 m minimum focusing distance is retained without an invented internal focus law. Historical glass supplier identity remains unresolved, so modern catalog matches do not become historical glass attributions.

## Sources / References

1. Werner Wagner, **"Varifocal Optical Objective," US Patent 3,482,900**, filed July 5, 1966, priority July 8, 1965, granted December 9, 1969. Figure 1 and the specification are on PDF/printed pp. 1-5; the numerical prescription and four zoom states are in Table I on printed p. 4; the repeated claim table is on printed pp. 5-6.
2. Schneider-Kreuznach, **"What Is a Variogon Zoom Lens? Vario-Optics Explained."** https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/what-is-a-variogon-lens
3. Schneider-Kreuznach, **"Variogon - Zoom Lenses"** retrospective PDF. https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf
4. Burleigh Brooks Inc. / Schneider-Kreuznach, **"Schneider Vario-Lens Systems for Single Lens Reflex Cameras"** period brochure scan, archived by Pacific Rim Camera. https://www.pacificrimcamera.com/rl/00068/00068.pdf
5. Current authoritative glass-catalog evidence recorded in the dossier: SCHOTT Advanced Optics, OHARA optical-glass catalogs, HOYA Optics Division, HIKARI General Optical Glass, CDGM Optical Glass Database, and SUMITA Optical Glass Data Book, version 14.02 (2026-08-21). These sources are used only for modern coordinate-equivalence review, not as proof of the historical supplier.
