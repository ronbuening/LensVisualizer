## Patent Reference and Design Identification

**Patent:** US 3,057,257\
**Priority:** February 17, 1959 (Germany)\
**Filed:** February 11, 1960\
**Granted:** October 9, 1962\
**Inventors:** Günter Klemt; Karl Heinrich Macher\
**Assignee:** Jos. Schneider & Co., Optische Werke\
**Title:** High-Speed Photographic or Cinematographic Varifocal Objective\
**Embodiment analyzed:** Example 1 — the patent's sole worked numerical prescription, tabulated at the intermediate `f = 100` state

The selected prescription is a 13-element varifocal system built from a four-component front attachment and a fixed four-singlet basic objective. The patent identifies the zoom states as `f = 50`, `f = 100`, and `f = 200`, gives the full numerical prescription only for the `f = 100` state, and states an aperture ratio of 1:2.8 with a varifocal ratio of substantially 1:4. The job-card label “Example 1” is retained for project consistency; the patent itself does not print an “Example 1” heading. [US 3,057,257, PDF pp. 1–3; printed pp. 1–4.]

The patent prose contains one evident component-label typo, referring once to the “two intermediate components III and III.” The figures, surrounding description, and claim establish those movable components as II and III; the numerical model follows that source-supported reading. Ambiguous OCR characters in the numerical table were not treated as patent corrections: the rendered table on PDF page 3 governs the retained signs and values.

The production correlation is strong but remains an inference rather than a manufacturer-confirmed patent attribution. Four points converge:

1. Schneider's historical Variogon publication identifies a `Variogon 2.8/10-40 mm` for Normal-8 film and shows that lens in cross-section and as a production unit. [Schneider-Kreuznach, *Variogon – Zoom Lenses*, pp. 3–5.]
2. Uniform scaling by `s = 0.2` maps the patent's 50–200 focal-length range to 10–40 mm without changing refractive indices, Abbé numbers, or the relative optical architecture.
3. The patent uses two movable negative intermediate components between fixed positive front and rear components, while Schneider describes the traditional narrow-gauge Variogon as a mechanically compensated zoom with two moving groups and a fixed image plane. [US 3,057,257, PDF p. 2; Schneider-Kreuznach, pp. 2–5.]
4. Schneider dates development of adjustable-focal-length lenses to 1957 and states that production of the first Variogon 2.8/10-40 prototype began two years later, consistent with the patent's 1959 German priority. [Schneider-Kreuznach, p. 7.]

The LensVisualizer prescription therefore uses a production-normalized `0.2×` model. All radii, center thicknesses, air spaces, modeled semi-diameters, and the modeled image-plane spacing are scaled by 0.2 from the patent coordinate system. The prescription is entirely spherical, so no aspheric coefficient scaling is involved. The production Normal-8 frame is source-supported as 3.6 × 4.9 mm, and is now represented by canonical `normal-8`, with a 6.08 mm minimum coverage diagonal. This is a frame-coverage reference, not a measured outer limit of the image circle. A standardized mount for this exact historical variant is likewise not established in the available primary source and `lensMounts` is left unset.

## Optical Architecture

The design has 13 glass elements in 9 air-separated groups. In the patent's functional division, components I–IV form the variable-focal-length attachment and component V is a fixed basic objective. The attachment has the power sequence positive / negative / negative / positive. Component I is fixed and positive, components II and III are movable and negative, component IV is fixed and positive, and component V remains fixed behind the attachment. [US 3,057,257, PDF p. 2.]

Component I contains two air-separated groups: the front singlet L1 and the cemented L2+L3 pair. Component II is the cemented L4+L5 negative group. Component III is the cemented L6+L7 negative group. Component IV is the cemented L8+L9 positive group. The basic objective V consists of four air-separated singlets L10–L13. This gives nine physical air-separated groups even though the patent describes five larger functional components.

The computed focal lengths of components I–V in the scaled final model are +84.8462, −38.2230, −43.7634, +48.4964, and +18.2778 mm respectively. These are component powers, not the same quantities as the standalone powers of their constituent elements. In particular, the cemented L2+L3 pair is only weakly positive as a pair compared with the complete fixed component I, because L1 is a separate positive singlet ahead of it.

The zoom model contains three authored focal-length keyframes: 10, 20, and 40 mm. The 20 mm keyframe preserves the patent's scaled published spacing triplet exactly: `d5 = 24.85 mm`, `d8 = 6.82 mm`, and `d11 = 12.94 mm`. The 10 and 40 mm spacings are not patent-published. They are constrained reconstructions solved from three conditions: the target system focal length, conservation of the patent's constant variable-gap sum, and an afocal condition for the I–IV attachment. The resulting scaled gap triplets are 2.610625 / 25.902033 / 16.097342 mm at 10 mm and 39.893455 / 3.511915 / 1.204631 mm at 40 mm.

The final-data paraxial EFLs are 10.000000000014 mm at the reconstructed wide state, 20.004667796217 mm at the published midpoint, and 39.9999999999999 mm at the reconstructed tele state. The slight midpoint residual is inherited from the rounded patent prescription; the source table itself computes to 100.023338981086 before the `0.2×` scale, rather than exactly 100. The published midpoint is therefore retained rather than replaced by the nearby exact-afocal 20 mm counterfactual.

Across the nine tested authored and intermediate zoom states, components II and III move rearward while components IV and V remain fixed. The scaled sum `d5 + d8 + d11` remains 44.61 mm throughout. Finite sampling supports the implemented piecewise-linear path but does not prove that another mechanical interpolation law was impossible in the production lens. Schneider's retrospective describes traditional Variogons as mechanically compensated by radial cams; the patent, by contrast, emphasizes that its two negative components can be arranged so displacement approaches a linear function. The LensVisualizer path models the optical spacing states, not a historically verified production cam law.

## Element-by-Element Analysis

### L1 — Biconvex Positive Singlet

`nd = 1.52542`, `νd = 64.55`. Glass: `Unmatched (nd=1.52542, νd=64.55; supplier unresolved)`. Standalone `f = +113.4967 mm`.

L1 is the first and largest-aperture element in fixed component I. The patent describes the corresponding front member as nearly plano-convex, while the numerical radii give it finite curvature on both sides. In the implemented scaled model its two clear semi-diameters are 21.23 and 21.21 mm, values inferred from ray containment rather than published production dimensions.

Its positive standalone power is only one part of component I's total +84.8462 mm focal length. Because L1 is separated by a small air gap from the following cemented pair, its contribution should not be conflated with the net power of L2+L3 or with the in-situ power of the whole front component.

### L2 — Biconvex Positive Member of D1

`nd = 1.62041`, `νd = 60.29`. Glass: `S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +86.8431 mm`.

L2 is the positive member of cemented pair D1 in component I. Its rear surface is the cemented interface to L3, so the interface medium in the data belongs to the downstream element L3 rather than to an artificial cement layer.

The patent coordinate exactly coincides with current OHARA S-BSM16 in `nd/νd`, but the patent names no supplier. The production file therefore keeps a supplier-neutral coordinate-class annotation instead of asserting that Schneider used OHARA glass.

### L3 — Biconcave Negative Member of D1

`nd = 1.76182`, `νd = 26.52`. Glass: `S-TIH14 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = −111.1561 mm`.

L3 is the negative member of the cemented D1 pair. Taken in isolation its power is negative, while the complete L2+L3 cemented pair has a much weaker positive net focal length of +355.5424 mm. That distinction is important: the standalone element powers describe each air-surrounded element, whereas the cemented pair is evaluated with its real internal glass-to-glass interface.

The `nd/νd` coordinate is an exact match to current OHARA S-TIH14, but supplier identity remains unproved. No patent line indices or partial-dispersion data are available to justify a stronger spectral identification.

### L4 — Positive Meniscus Member of D2

`nd = 1.75520`, `νd = 27.53`. Glass: `E-FD4 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +83.8642 mm`.

L4 is the front member of moving component II. Although L4 alone is positive, its cemented combination with L5 is negative, with net focal length −38.2230 mm. This illustrates why the sign of a constituent element should not be used as a shortcut for the power of the moving zoom component.

The coordinate is an exact current match to HOYA E-FD4L, while OHARA S-TIH4 is a close coordinate neighbor in `νd`. The data file deliberately keeps the supplier unresolved rather than treating a modern catalog equivalent as a historical Schneider glass identity.

### L5 — Biconcave Negative Member of D2

`nd = 1.50378`, `νd = 66.73`. Glass: `PC1 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = −26.3005 mm`.

L5 supplies the stronger negative standalone power within component II and shares its front surface with L4 at the cemented interface. The cemented D2 group is the first movable negative component of the varifocal attachment.

The patent specifically places the strongly concave outer surfaces of the two negative moving components toward one another across the variable `d8` air space. In the final model L5's rear surface 8 and L6's front surface 9 form that facing pair. [US 3,057,257, PDF p. 2.]

### L6 — Biconcave Negative Member of D3

`nd = 1.50378`, `νd = 66.73`. Glass: `PC1 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = −25.4443 mm`.

L6 is the negative front member of moving component III. Its outer front surface faces the rear surface of component II across the variable `d8` gap, matching the patent's geometric description of the two moving negative components.

L6 and L7 together form cemented group D3 with a net focal length of −43.7634 mm. The complete component is therefore somewhat weaker in negative power than the D2 group in absolute focal-power terms, consistent with the patent's requirement that the rear negative component have a larger absolute focal length than the forward one.

### L7 — Positive Meniscus Member of D3

`nd = 1.75520`, `νd = 27.53`. Glass: `E-FD4 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +60.0624 mm`.

L7 is the positive rear member of cemented moving group D3. Its material coordinate is the same as L4 and therefore carries the same supplier-neutral treatment. The pair's net power, rather than L7's positive standalone power, governs the paraxial behavior of component III.

No separate aberration-control function is assigned to L7 in the patent or the data model. The analysis therefore confines its interpretation to the element's documented place in the cemented moving component and the verified group power.

### L8 — Biconvex Positive Member of D4

`nd = 1.62041`, `νd = 60.29`. Glass: `S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +25.2439 mm`.

L8 is the positive member of fixed component IV. It is cemented to L9 and sits behind the second moving negative component, separated from it by variable air space `d11`.

The D4 cemented group has net focal length +48.4964 mm in the scaled model. This fixed positive component closes the four-component supplementary attachment before the 9.0 mm total air space leading to the basic objective and modeled stop region.

### L9 — Negative Meniscus Member of D4

`nd = 1.62004`, `νd = 36.34`. Glass: `F2 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = −52.6923 mm`.

L9 is the negative rear member of the positive D4 cemented pair. The patent coordinate is very close to legacy Schott F2 (`nd = 1.62004`, `νd ≈ 36.37`) but differs slightly in Abbé number, so the data retains only an F2-class near-match rather than an exact glass identity.

Its placement immediately before the long air space to component V makes it the final glass element of the variable attachment. The following aperture-stop location is inferred; the patent does not tabulate a stop surface.

### L10 — Biconvex Positive Singlet

`nd = 1.62041`, `νd = 60.29`. Glass: `S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +19.7874 mm`.

L10 is the first singlet of the fixed basic objective V and lies 1.0 mm behind the modeled aperture stop. The stop placement is not a patent dimension: the implemented model splits the scaled 9.0 mm space from surface 14 to L10 into 8.0 mm before the stop and 1.0 mm after it.

Because component V is fixed, its post-stop optical matrix is unchanged with zoom. The complete component V has a computed focal length of +18.2778 mm, distinct from L10's standalone value.

### L11 — Positive Meniscus Singlet

`nd = 1.62041`, `νd = 60.29`. Glass: `S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +42.9240 mm`.

L11 is the second positive singlet of component V. It is separated from L10 by only 0.03 mm in the scaled prescription, preserving the patent's very small `d16` air space rather than collapsing the pair into a cemented group.

The same 1.62041 / 60.29 coordinate occurs in several elements across the design. Repetition of a coordinate is not evidence that all such elements came from a specific modern catalog product or melt.

### L12 — Biconcave Negative Singlet

`nd = 1.69895`, `νd = 30.05`. Glass: `E-FD15 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = −7.5122 mm`.

L12 is the negative singlet within the otherwise positive basic objective. Its standalone negative power is the strongest by magnitude among the four singlets of component V.

The patent coordinate exactly matches current HOYA E-FD15L in `nd/νd`, but supplier identity is not stated by Schneider or the patent. Consequently the data file does not invoke HOYA's catalog dispersion as if it were patent-supplied spectral evidence.

### L13 — Biconvex Positive Singlet

`nd = 1.65830`, `νd = 57.29`. Glass: `K-LaK11 — coordinate-compatible spectral proxy (supplier unresolved)`. Standalone `f = +10.6029 mm`.

L13 is the final positive singlet and the last refracting element in component V. Its catalog coordinate is extremely close to SUMITA K-LaK11 (`νd = 57.30` in the current catalog evidence), but the 0.01 Abbé-number difference and absent supplier attribution justify the supplier-neutral label used in the data file.

The patent does not publish the distance from surface 22 to the film. The LensVisualizer model adds a 12.295743886292 mm rear spacing, chosen from the fixed basic objective / exact-afocal endpoint rear focal distance. This is a modeling choice rather than a transcribed patent dimension.

## Glass Identification / Selection

The patent supplies only `nd` and `νd`. It does not publish `nC`, `nF`, `ng`, `PgF`, or `dPgF`, and the final data file does not add those fields from catalog proxies. The glass annotations therefore remain intentionally conservative. Catalog matches below identify coordinate equivalence or class only; they do not establish the historical supplier or melt.

| Patent `nd / νd` | Elements | Catalog evidence reviewed | Data-file treatment |
|---|---|---|---|
| 1.52542 / 64.55 | L1 | HOYA PC3: 1.525420 / 64.619542 | PC3 spectral proxy; supplier unresolved |
| 1.62041 / 60.29 | L2, L8, L10, L11 | Exact coordinate match to OHARA S-BSM16 | S-BSM16 spectral proxy |
| 1.76182 / 26.52 | L3 | Exact coordinate match to OHARA S-TIH14 | S-TIH14 spectral proxy |
| 1.75520 / 27.53 | L4, L7 | Exact coordinate match to HOYA E-FD4L; OHARA S-TIH4 is close in `νd` | E-FD4 spectral proxy |
| 1.50378 / 66.73 | L5, L6 | Legacy PC1: 1.503779 / 66.88712 | PC1 spectral proxy; supplier unresolved |
| 1.62004 / 36.34 | L9 | Very close to legacy Schott F2 at `νd ≈ 36.37` | F2 spectral proxy |
| 1.69895 / 30.05 | L12 | Exact coordinate match to HOYA E-FD15L | E-FD15 spectral proxy |
| 1.65830 / 57.29 | L13 | SUMITA K-LaK11 agrees to catalog precision (`νd = 57.30`) | K-LaK11 spectral proxy |

All thirteen elements now resolve to compatible catalog dispersion curves. L1 uses the manufacturer-published legacy HOYA PC3 polynomial; supplier identity remains unresolved.

No apochromatic or anomalous-partial-dispersion claim follows from these data. An `nd/νd` match alone does not identify secondary-spectrum behavior, and the model deliberately avoids importing modern catalog line indices as though they were part of the 1959 prescription.

## Focus Mechanism

Schneider's historical account states that the camera-to-subject distance in the narrow-gauge Variogon family is set with the front group. The production photograph of the Variogon 2.8/10-40 shows a near focus-scale mark at 1 m, and a secondary exact-variant camera reference independently lists manual focusing from 1.0 m to infinity. [Schneider-Kreuznach, *Variogon – Zoom Lenses*, pp. 4–5; Lippisches Kamera Museum, “Nizo Heliomatic 8 Focovario.”]

The data model nevertheless uses `NO_INTERNAL_RECONSTRUCTION`. Neither the patent nor the recovered manufacturer material publishes the axial travel of the front group at finite object distance. A 1.0 m minimum focus distance is insufficient to solve that missing mechanical state uniquely. Accordingly, `closeFocusM: 1.0` is metadata only: every zoom gap's infinity and close-focus values are identical, and no focus-dependent internal motion is invented.

This is a deliberate limitation. The viewer can report the production near-limit metadata, but the prescription should not be interpreted as an exact finite-conjugate 1 m optical model.

## Conditional Expressions

The patent imposes three quantitative conditions on components I–IV. Recalculation from the final scaled data preserves all three because uniform scaling changes lengths but not their ratios.

1. **Rear positive component relative to front positive component.** The patent requires `f4 <= 0.75 f1`. The final model gives `f4/f1 = 0.571580`, so the condition is satisfied.
2. **Relative powers of the two negative moving components.** Interpreting the patent's wording in the magnitude sense required by its own negative focal-length values, the condition is `|f3| >= 1.10 |f2|`. The final model gives `|f3|/|f2| = 1.144950`, so the condition is satisfied.
3. **Constant moving-gap sum.** The patent requires the constant sum of the three variable air spaces to be less than `f4`. The scaled model holds `d5 + d8 + d11 = 44.61 mm` while the computed component-IV focal length is 48.4964 mm, so the condition is satisfied.

The calculated component powers differ slightly from the patent's representative focal values after scaling. Those residuals are preserved rather than hidden: the final component values are +84.8462, −38.2230, −43.7634, +48.4964, and +18.2778 mm, versus scaled source values +84.8, −38.2, −43.8, +48.4, and +18.268 mm. The source describes the tabulated values as representative and the claim uses “substantially” for the attachment power proportions.

## Aperture, Image Plane, and Geometry Modeling

The patent states an aperture ratio of 1:2.8 but does not publish a physical iris position or diameter. The final model therefore inserts a single inferred stop in the scaled `d14` air space, 8.0 mm behind surface 14 and 1.0 mm ahead of L10. Schneider's historical narrow-gauge description places a beamsplitter in front of the iris in reflex-viewfinder versions, supporting the general stop region but not this exact axial dimension. [Schneider-Kreuznach, pp. 5–6.]

The modeled stop semi-diameter is 3.26390153782 mm. It is calibrated so the exact-afocal reconstructed 10 and 40 mm endpoints are f/2.8. The resulting modeled f-numbers are 2.800000 at 10 mm, 2.800737 at the rounded published 20 mm midpoint, and 2.800000 at 40 mm. This agreement is a calibration result; it is not independent evidence that the physical production diaphragm had that exact diameter.

The patent also omits surface semi-diameters. The data file's semi-diameters are modeled clear apertures derived from exact spherical meridional tracing to the Normal-8 frame corner over nine zoom states, including intermediate piecewise-linear samples. The portable geometry check traced 567 rays. Across that sampled set, the minimum surface-ray clearance is 0.020280 mm, the minimum element edge thickness is 0.023526 mm, the maximum actual rim-slope angle is 34.8285°, and the largest shared-gap sag-intrusion fraction is 0.526944 against the 0.90 project limit.

Those geometry numbers establish the portable modeled geometry only. They do not claim a production barrel clearance, a measured production element diameter, or a passed LensVisualizer render-trim diagnostic. The patent-figure and glass integration review is recorded in the companion audit log.

The final image plane is likewise modeled. Surface 22 is followed by 12.295743886292 mm of air to the fixed film plane. The reconstructed 10 and 40 mm states focus there to numerical precision. The preserved rounded 20 mm source state has a paraxial BFD of 12.303799682189 mm and therefore focuses approximately 0.008056 mm behind the chosen fixed plane. That residual is consistent with the patent's statement that back-focus shifts during zoom are negligible; it is not removed by altering the published midpoint spacings.

## Verification Summary

The final TypeScript prescription was parsed and recomputed directly rather than duplicated in a separate hard-coded model. The portable verifier used a TypeScript AST literal loader when available and retained a strict literal-parser fallback. Deliberate mutations containing an arithmetic expression and a duplicate object key were rejected, demonstrating that unsupported syntax and duplicate keys are detectable.

First-order system matrices were checked with independent height/reduced-angle ray propagation. At the three authored zoom keyframes the scaled EFLs are 10.000000000014, 20.004667796217, and 39.9999999999999 mm. The physical r1-to-r22 track remains 80.44 mm at every state because the three variable gaps preserve a constant 44.61 mm total and the fixed groups do not move.

The surface-by-surface Petzval sum, calculated as `Σ φ/(n·n′)` from the final scaled data, is 0.00811257108467110 mm⁻¹. The value is independent of the zoom spacings because the radii and refractive-index sequence do not change with zoom.

The final model contains all 22 patent refracting surfaces plus the one neutral modeled stop. No sensor cover glass, filter, inactive dummy plane, or synthetic cement layer is added. The prescription has no aspherical surfaces and no diffractive phase data.

## Sources / References

1. Klemt, Günter, and Karl Macher. **US Patent 3,057,257, “High-Speed Photographic or Cinematographic Varifocal Objective.”** Filed February 11, 1960; German priority February 17, 1959; granted October 9, 1962. Numerical prescription and claims: PDF pp. 2–3 / printed pp. 2–4.
2. Jos. Schneider Optische Werke GmbH / Schneider-Kreuznach. **“Variogon – Zoom Lenses.”** Historical manufacturer publication, especially pp. 2–7. https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf
3. Lippisches Kamera Museum. **“Nizo Heliomatic 8 Focovario.”** Secondary exact-variant camera reference used only to corroborate the 1.0 m near-focus limit. https://www.lippisches-kameramuseum.de/Filmkameras/Braun_Nizo_Heliomatic_8_Focovario.htm
4. OHARA Corporation. **Optical Glass Catalog**, including S-BSM and S-TIH families. Catalog-coordinate evidence only; not supplier attribution.
5. HOYA Corporation, Optics Division. **Optical Glass Data Download.** Catalog-coordinate evidence only; not supplier attribution.
6. SCHOTT. **Optical Glass Catalog / Datasheets.** Legacy F2 coordinate comparison only.
7. SUMITA Optical Glass, Inc. **Optical Glass Data.** Catalog-coordinate evidence only; not supplier attribution.
