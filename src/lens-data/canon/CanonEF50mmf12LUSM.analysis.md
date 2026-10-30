## Patent Reference and Design Identification

**Patent:** JP2007333790A\
**Application Number:** JP2006162239A\
**Filed / Priority:** 2006-06-12\
**Published:** 2007-12-27\
**Inventor:** Makoto Mitsusaka\
**Applicant:** Canon Inc.\
**Title:** Optical System and Optical Apparatus Having the Same\
**Example details:** Numerical Example 1

The companion data file treats JP2007333790A Example 1 as the fixed production correlation for the **CANON EF 50mm f/1.2 L USM**. The patent itself does not identify a commercial lens by model name, so the correlation is an authoring inference rather than a manufacturer-confirmed attribution.

The identification rests on several convergent facts:

1. Canon filed the application on 2006-06-12; Canon Camera Museum records the EF 50mm f/1.2L USM as marketed in January 2007.
2. Numerical Example 1 gives `f = 51.70 mm`, `Fno = 1.25`, and a full field `2ω = 45.4°`, while Canon markets the production lens as 50 mm f/1.2 with a 46° diagonal angle of view on full-frame cameras.
3. The prescription contains eight elements in six air-separated groups, matching Canon's published 8-element/6-group construction.
4. Example 1 uses one aspherical surface on the object-side face of the rear positive element PL3; Canon identifies one large high-precision aspherical lens element in the production design.
5. The patent describes a large-aperture Gauss-type standard lens for SLR use and places the aperture stop between positive front and rear groups, consistent with the production lens's format and timing.

The patent prescription is retained at source scale. No uniform scaling is applied (`s = 1`): the marketed 50 mm f/1.2 values remain separate from the modeled design EFL of 51.695042 mm and design aperture of f/1.25. Consequently, all aspheric coefficients are retained without scale transformation.

## Optical Architecture

Example 1 is a large-aperture Gauss-type standard lens. The patent places a positive front group `GF` before the aperture stop and a positive rear group `GR` after it. For Examples 1–6, `GF` is the three-element sequence G11–G12–G13: two positive menisci followed by a negative meniscus (¶¶0067, 0071–0072). Example 1's `GR` is the five-element sequence NL1–PL1–NL2–PL2–PL3, with NL1+PL1 and NL2+PL2 cemented and the object-side face of PL3 aspherical (¶¶0073–0075).

The power distribution is deliberately asymmetric. Computation from the final surface array gives the front functional group an air-to-air EFL of **+167.819 mm** and the rear functional group **+41.579 mm**. These are air-to-air functional-group segment powers, not standalone element focal lengths or a direct measure of each group's in-situ contribution inside the complete system. They confirm the patent's design rationale: the front group is weakly positive, while the rear group carries substantially stronger positive power so that a long SLR back focus can coexist with a large aperture (¶¶0052–0055).

The rear group distributes its correction and power among two cemented pairs and the final positive element. NL1+PL1 has a weak net positive EFL of **+228.138 mm**, although its separate members are individually strong negative and positive lenses. NL2+PL2 has a weak net negative EFL of **−392.986 mm**. These cemented net powers must not be confused with the standalone air-to-air focal lengths of NL1, PL1, NL2, and PL2. The final PL3 element remains a substantial standalone positive lens at **+54.540 mm**.

The patent explains this arrangement as a way to divide spherical-aberration, field-curvature, and distortion correction between the rear negative lenses while distributing positive rear power among PL1, PL2, and PL3 (¶¶0053–0055). PL3 also permits strong image-side positive power without concentrating the entire burden on one rear positive member.

## Element-by-Element Analysis

### L1 / G11 — Positive Meniscus

`nd = 1.772499, νd = 49.6. Glass: OHARA S-LAH66 spectral proxy; supplier and chemistry unresolved. f = +93.644 mm.`

G11 is the positive member of the patent's first front subgroup `L1a` (¶0067). Its standalone power is moderate compared with the complete lens. In the assembled design it contributes to the deliberately weak positive `GF` rather than acting as an isolated 93.6 mm objective.

The element begins the large entrance cone and is followed by a very small 0.24 mm air gap before G12. Its role is therefore best understood as part of the three-element front power distribution, not as an independent aberration corrector.

### L2 / G12 — Positive Meniscus

`nd = 1.834807, νd = 42.7. Glass: HOYA TAFD5G spectral proxy; supplier and chemistry unresolved. f = +91.211 mm.`

G12 is the positive member of the patent's `L1b` subassembly, immediately followed by negative meniscus G13 (¶0067). It has nearly the same standalone focal length as G11 but uses a higher-index, lower-Abbe source-coordinate glass class.

Together G12 and G13 shape the front group's net power and ray angles approaching the stop. The patent permits the three front elements to be treated collectively as `GF` in Examples 1–6 (¶¶0071–0072), which is the more useful interpretation for in-system behavior.

### L3 / G13 — Negative Meniscus

`nd = 1.639799, νd = 34.5. Glass: OHARA S-TIM27 spectral proxy; supplier and chemistry unresolved. f = −48.976 mm.`

G13 is the negative meniscus completing the front group. Its stronger standalone negative power offsets the two preceding positive menisci, leaving `GF` weakly positive overall. Its image-side surface is strongly curved and lies immediately before the long air space leading to the aperture stop.

This power balance is consistent with the patent's stated Gauss-type strategy: a relatively weak positive front group and stronger positive rear group facilitate the required SLR back focus while retaining a large aperture (¶0052).

### L4 / NL1 — Biconcave Negative, first member of D1

`nd = 1.728250, νd = 28.5. Glass: OHARA S-TIH10 spectral proxy; supplier and chemistry unresolved. f = −28.394 mm.`

NL1 is the first lens after the stop and the negative member of the first cemented pair. Example 1 explicitly cements NL1 to PL1 (¶0074). The strongly negative standalone focal length does not describe the cemented pair's net behavior: NL1+PL1 together have only weak positive net power, EFL **+228.138 mm**.

The patent assigns the rear negative lenses NL1 and NL2 a shared correction role, particularly for spherical aberration, field curvature, and distortion (¶0054). NL1 therefore operates as part of a distributed rear correction structure rather than as an isolated diverging group.

### L5 / PL1 — Biconvex Positive, second member of D1

`nd = 1.882997, νd = 40.8. Glass: OHARA S-LAH58 spectral proxy; supplier and chemistry unresolved. f = +29.088 mm.`

PL1 is the high-index positive partner cemented to NL1. Its standalone positive power is close in magnitude to NL1's negative power, which explains the weak net positive power of the complete D1 cemented pair.

PL1's rear surface also forms the object-side boundary of the patent's explicitly identified negative air lens with NL2. That air lens is the 0.45 mm gap between surfaces 10 and 11, not the separate 0.15 mm gap between PL2 and PL3 (¶0075).

### L6 / NL2 — Biconcave Negative, first member of D2

`nd = 1.698947, νd = 30.1. Glass: OHARA S-TIM35 spectral proxy; supplier and chemistry unresolved. f = −36.915 mm.`

NL2 follows the negative PL1–NL2 air lens and is cemented to PL2 in Example 1 (¶0074). It supplies the second negative contribution in the rear group. The patent places this lens specifically to divide correction with NL1 rather than forcing one rear negative member to carry the full burden (¶¶0053–0054).

Although NL2 is a strong negative element by itself, the NL2+PL2 cemented pair is only weakly negative in net terms, with EFL **−392.986 mm**. This distinction between member power and cemented-pair power is important to the rear group's actual function.

### L7 / PL2 — Biconvex Positive, second member of D2

`nd = 1.834807, νd = 42.7. Glass: HOYA TAFD5G spectral proxy; supplier and chemistry unresolved. f = +45.248 mm.`

PL2 is the positive partner cemented to NL2 and reuses the same source-coordinate glass class as G12. The patent notes that off-axis rays pass relatively far from the axis through PL2 and PL3, giving these rear positive lenses substantial leverage over field curvature and distortion (¶¶0057–0059).

PL2 is separated from PL3 by only 0.15 mm. That narrow spacing is part of the rear compactness but is not the air lens that the patent identifies as negative; the named negative air lens lies upstream between PL1 and NL2.

### L8 / PL3 — Biconvex Positive with one aspherical surface

`nd = 1.804000, νd = 46.6. Glass: CDGM H-ZLaF50D spectral proxy; supplier and chemistry unresolved. f = +54.540 mm.`

PL3 is the final positive element and carries the design's only aspherical surface on its object-side face, data surface `14A` (patent surface 14). The patent treats PL3 as an important means of maintaining strong image-side positive power and long back focus while distributing aberration correction across several rear positive elements (¶0055).

Because off-axis bundles are especially far from the axis at PL3, the patent prefers placing the asphere here and making its positive refractive power weaken toward the periphery. The stated purposes are efficient correction of spherical aberration, field curvature, distortion, and particularly coma (¶¶0059–0061).

## Glass Identification and Selection

Paragraph 0092 on PDF page 10/printed 10 explicitly defines every index and Abbe number relative to the d line.
All eight source pairs match the original Numerical Example 1 table. It names no supplier or catalog designation and
publishes no element C/F/g indices, partial dispersion or source APD identity. Each medium now explicitly declares
`indexReference: "d"`; all eight existing compatible curves remain qualified spectral proxies. No per-lens spectral
override was present to remove. Compatibility does not establish a historical supplier, melt or chemistry.

| Medium | Source nd / νd  | Qualified compatible curve | Optical form                     |
| ------ | --------------- | -------------------------- | -------------------------------- |
| L1     | 1.772499 / 49.6 | S-LAH66                    | Positive Meniscus                |
| L2     | 1.834807 / 42.7 | TAFD5G                     | Positive Meniscus                |
| L3     | 1.639799 / 34.5 | S-TIM27                    | Negative Meniscus                |
| L4     | 1.728250 / 28.5 | S-TIH10                    | Biconcave Negative, D1           |
| L5     | 1.882997 / 40.8 | S-LAH58                    | Biconvex Positive, D1            |
| L6     | 1.698947 / 30.1 | S-TIM35                    | Biconcave Negative, D2           |
| L7     | 1.834807 / 42.7 | TAFD5G                     | Biconvex Positive, D2            |
| L8     | 1.804000 / 46.6 | H-ZLaF50D                  | Biconvex Positive, front asphere |

The patent's conditional expressions deliberately couple the rear-group positive and negative indices to Petzval behavior and require PL3 to have both relatively high refractive index and `νP3 > 40` (¶¶0042–0049). These statements establish the patent's design intent, but they do not establish anomalous partial dispersion or apochromatic correction. No such source evidence is present. Proxy curve behavior does not turn the optional APD flags into source measurements.

## Focus Mechanism

The patent states that every embodiment focuses by moving the **entire lens system** (¶0085). The optical topology is therefore unit focus: no internal air gap changes during focusing.

Numerical Example 1 publishes only the infinity prescription. The finite-focus state in the data file is explicitly a **CONSTRAINED_RECONSTRUCTION**, not a patent spacing row. Canon publishes a closest focusing distance of 0.45 m and a maximum magnification of 0.15×. Treating the 0.45 m value as object-to-image-plane distance, a finite-conjugate solve of the final prescription gives a physical solution with the last-surface-to-image distance increasing from the authored `D15 = 38.88 mm` to **45.947215 mm**. The corresponding paraxial magnification is **−0.147276×**, consistent with Canon's rounded 0.15× specification.

| State                            | Internal spacings    | S15-to-image gap |
| -------------------------------- | -------------------- | ---------------: |
| Infinity                         | Patent values, fixed |         38.88 mm |
| 0.45 m reconstructed close focus | Unchanged            |     45.947215 mm |

The modeled extension relative to the patent-authored infinity image gap is therefore **7.067215 mm**. This is a code-solved modeling quantity; the patent does not publish close-focus travel or a finite-focus spacing table. Canon identifies ring-type USM as the production focus drive, but that mechanical actuator specification does not imply a separate internal floating optical group.

## Aspherical Surfaces

Example 1 has one aspherical surface: patent surface 14, represented as `14A` in the data file, on the object-side face of PL3 / L8 (¶0075; Numerical Example 1).

The patent writes the sag as

`X = ((1/R)H²) / (1 + sqrt(1 - (H/R)²)) + A·H² + B·H⁴ + C·H⁶ + D·H⁸ + E·H¹⁰`.

The conic base is therefore an ordinary sphere. In the LensVisualizer standard conic convention this maps to **K = 0**. Patent coefficient `A` on `H²` is zero; the remaining polynomial coefficients map directly to the project terms because the prescription is unscaled:

| Data term |             Value |
| --------- | ----------------: |
| K         |                 0 |
| A4        |  −1.44531e−6 mm⁻³ |
| A6        | +2.50160e−10 mm⁻⁵ |
| A8        | −1.46123e−13 mm⁻⁷ |
| A10       |                 0 |
| A12       |                 0 |
| A14       |                 0 |

The A12/A14 zeros are schema padding, not additional coefficients published by the patent.

At the **modeled** semi-diameter of 19.0 mm, the final asphere is **−0.179067 mm** from its spherical base. This departure is a computed value at an inferred clear-aperture radius; the patent does not publish a surface semi-diameter, so it is not a source-specified aspheric departure.

The patent's qualitative prescription is that positive refractive power at PL2 or PL3 should weaken with increasing ray height, with PL3 preferred because its off-axis ray heights are greatest (¶¶0059–0061). The negative fourth-order coefficient is consistent with that intended peripheral relaxation in Example 1.

The patent allows an asphere to be formed by polishing or by applying a resin layer to a spherical surface (¶¶0082–0083). Canon's production description identifies a large high-precision aspherical lens element, but the available sources do not establish a specific manufacturing process for the modeled surface. The analysis therefore does not classify it as molded, polished, or hybrid.

## Conditional Expressions

The patent defines six principal rear-group conditions in ¶0042 and preferred ranges in ¶0052. Computation from the final data file gives the following values:

| Quantity          | Example 1 value | General condition | Preferred condition | Result |
| ----------------- | --------------: | ----------------- | ------------------- | ------ |
| `(NP1 + NP2) / 2` |        1.858902 | `> 1.83`          | `> 1.84`            | Pass   |
| `(NN1 + NN2) / 2` |       1.7135985 | `< 1.79`          | `< 1.78`            | Pass   |
| `NP3`             |        1.804000 | `> 1.75`          | `> 1.78`            | Pass   |
| `νP3`             |            46.6 | `> 40`            | `> 43`              | Pass   |
| `fPL3 / f`        |        1.055038 | `0.68–1.75`       | `0.80–1.70`         | Pass   |
| `DAL / f`         |        0.484186 | `> 0.32`          | `0.350–0.65`        | Pass   |

For condition (6), the printed general inequality is one-sided, `0.32 < DAL/f`; ¶0050 separately recommends an upper value of 0.7 for easier aberration correction. Example 1 also lies inside that recommendation as well as the tighter preferred range.

The patent states that conditions (1) and (2) make a small Petzval sum and reduced field curvature easier to obtain, while conditions (3)–(6) govern the rear asphere's correction leverage, PL3 chromatic balance, back focus, and stop-to-asphere spacing (¶¶0044–0050). Surface-by-surface computation from the final prescription gives a Petzval sum of **+0.002991881 mm⁻¹**, corresponding to a reciprocal magnitude of about **334.24 mm**.

## Negative Air Lens

The patent explicitly calls the air lens **between PL1 and NL2** negative in Example 1 (¶0075). In the data file this is the **0.45 mm** gap from surface 10, the rear face of PL1, to surface 11, the front face of NL2.

This placement matters because the rear group's correction strategy is not just a sequence of glass powers. The two strongly curved glass-air boundaries create an air-space contribution that the patent says makes correction of astigmatic difference easier (¶0056). The separate 0.15 mm spacing between PL2 and PL3 is not the air lens identified by the patent.

## Verification Summary

The final data arrays reproduce the patent prescription at source scale. Independent reduced-angle tracing and ABCD accumulation give an EFL of **51.695042 mm**, agreeing with the patent's rounded 51.70 mm headline value. The Gaussian paraxial BFD from surface 15 is **38.333791 mm**, whereas the patent-authored image-plane spacing `D15` is **38.88 mm**. The data retains the source `D15`; the 0.546209 mm difference remains a source image-distance discrepancy. The source does not establish a designer best-focus rationale, and no source-supported correction was found.

The patent publishes neither glass-surface semi-diameters nor a physical stop diameter. The data file therefore uses inferred semi-diameters. The stop semi-diameter, **14.591344 mm**, is derived from the modeled f/1.25 entrance pupil and computed pupil magnification; the remaining surface apertures are geometry-modeling values constrained by marginal rays, Figure 1, and the current edge/slope/cross-gap rules. These dimensions are not represented as patent measurements.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical part is added to the sequential model because Numerical Example 1 publishes none. No omitted plate therefore requires an air-equivalent rear-spacing correction. The camera schematic in Figure 15 is system context rather than an additional prescription surface.

No numerical patent value is intentionally corrected. OCR/readback ambiguities were resolved against the rendered publication, and the final data retains the printed Example 1 values. The only schema-level label changes are patent surface 7 → `STO` and aspherical patent surface 14 → `14A`.

### Native original shape and all-focus review — 2026-10-30

Fresh inspection uses Numerical Example 1 ¶0097 and the explicit d-line definition ¶0092 on PDF page 10,
the E=0 asphere continuation at page 11, and Figure 1/2 on page 16. The PDF is image-only, with native
1656 × 2339 page images at 200 dpi. The optical crop was read without upsampling; a 600 dpi view is an enlargement.
First/last vertices span roughly 460 pixels over a 57.72 mm optical track, about 8 native px/mm. Two-pixel reading
uncertainty is approximately ±0.25 mm before schematic/stroke uncertainty; adopted heights retain ±0.5–1 mm
uncertainty. Labels, leaders, unit/stop brackets and the image-plane line are excluded from rim readings.

Figure 1 resolves three concave-end shoulders. S6 becomes clear 15.2/outer 17.95 mm, S8 clear 14.7/outer 16.75,
and S11 clear 16.75/outer 18.9, using `rimExtensionSd` without a flat cut. Native cap/outer half-height ratios are
roughly 0.84/0.86/0.87 (about ±0.02 reading uncertainty plus schematic variation), versus adopted ratios
0.847/0.878/0.886. Source R/d, the entire S14 polynomial, stop coordinate and the existing unit-focus control are
unchanged. A 16.5 mm S11 cap trial is too small for the source infinity axial boundary 16.690807 mm; 16.75 is retained.
Bonded S9/S12 remain transparent transitions with no opaque lands. No extra hybrid medium is prescribed: a generic
resin-manufacturing option does not establish a separate layer for this example. The final asphere/rear outline is
retained; no additional independently resolved optical-cap step is fabricated from the small edge strokes.

Actual generated SVGs at infinity, half focus and close focus match the native section's shoulder class. All 21 focus
states have eight finite, closed, connected paths and zero hidden renderer trim. All 3087 full-open pupil launches
are aimed and all 63 chiefs clear. The source infinity state has 49/31/15 axial/0.6-field/corner survivors of 49.
Half focus is 45/31/17 and inferred close 45/32/17. All 20 sampled finite states retain 45/49 axial samples, 949 of 1029
axial samples pass in total. Their first boundary clip is S10 at longer distances and bonded S9 near close focus.
Source infinity aperture, surface, image-circle and runtime format-corner checks pass; no complete finite full-iris
clearance claim is made. Bond clipping is disclosed rather than hidden with an opaque interface.

A full-clearance widening trial (D1 faces to 17.3 mm and rear faces to 19.7 mm) fails the unchanged S10–S11 guard:
0.42 mm intrusion versus 0.405 mm allowed across 0.450 mm. It is rejected with no source-gap or tolerance tuning.
At the next authored stop, f/1.4, all 49 axial samples clear at all 21 states, with 3087 aimed launches and 63 clear
chiefs again. That narrower sampled aperture does not replace the published f/1.25 target.

Table half-angle 22.7° gives image height 21.337279 mm; Figure 2's 22.71° gives 21.347615 mm (98.6–98.7% of modeled
135-format radius). The separately solved runtime corner is about 23.0° and clear. The source D15=38.88 mm stays
0.546209 mm imageward of the Gaussian plane; native table continuation and Figure 1 show no source plate that
explains it. The September 25 source-plane audit remains a historical record; best-focus intent is unresolved.
Half focus gives 750.481728 mm and close 450.000016 mm conjugates; these remain inferred unit-focus states, not
source spacings. Source fidelity, sampled clearance and production correlation are distinct conclusions.

## Sources

- Canon Inc., **JP2007333790A, 光学系及びそれを有する光学機器 / Optical System and Optical Apparatus Having the Same**, filed 2006-06-12, published 2007-12-27. Numerical Example 1 and Figures 1–2. https://patents.google.com/patent/JP2007333790A/ja
- Canon Camera Museum, **EF50mm f/1.2L USM**. Product timing, 8-element/6-group construction, 0.45 m closest focus, 0.15× maximum magnification, eight diaphragm blades, and production aspherical-element description. https://global.canon/en/c-museum/product/ef392.html
- Canon U.S.A., **EF 50mm f/1.2L USM**. Marketed focal length/aperture, 46° diagonal angle of view on full-frame cameras, 8-element/6-group construction, and 0.45 m closest focus. https://www.usa.canon.com/shop/p/ef-50mm-f-1-2l-usm

## September 2026 catalog audit

The S-TIM27 catalog curve now models the 640345 position: its evaluated nd = 1.6397988 and νd = 34.4664 closely match the patent. All eight elements have compatible coefficient-backed dispersion. This is a catalog-equivalent model, not a production-supplier identification; patent coordinates remain authoritative. Figure 1 on page 16 was inspected at 600 dpi. Its optical rims agree with the existing SDs within drawing uncertainty, so they are retained.

## Historical live-diagram follow-up (undated; superseded by 2026-10-30 cap review)

The second live-site comparison straightened G11/G12 and the second cemented pair: S2 is now 22.0 mm, S4 20.0 mm, S6 16.5 mm, and S11 18.9 mm. Other radii remain unchanged, including the 19.0 mm asphere aperture. These optical-rim refinements reduce artificial taper without copying mechanical steps. A larger 18.5 mm G13 front rim was rejected by the cross-gap rule. The source whole-unit focus direction remains objectward, with both GF and GR moving by the same reconstructed 7.067215 mm.

## Image-plane source audit (2026-09-25)

Source image-plane audit: all R/d/nd/vd and S14 coefficients match
JP2007333790A Example 1 (PDF pp.10–11). EFL 51.695042 agrees with
51.70, but printed D15=38.88 is not paraxial BFL 38.333791 mm.
No source plate or supported correction explains the -0.546209 mm
offset. Retain the published image distance; best-focus intent is unproven.
