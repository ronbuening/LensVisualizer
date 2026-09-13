## Patent Reference and Design Identification

**Patent:** US 3,771,853\
**Application Number:** 206,359\
**Priority:** 1970-12-15, Japan 45/11283\
**Filed:** 1971-12-09\
**Granted:** 1973-11-13\
**Inventor:** Soichi Nakamura\
**Assignee:** Nippon Kogaku K.K.\
**Title:** Four Component Zoom Lens\
**Embodiment analyzed:** Embodiment I / Example I

The prescription transcribed here is Example I of US 3,771,853, a 35 mm still-camera zoom design stated at F/4.5 with a published focal-length range of 28.85–44.19 mm and back focus of 38.299–48.467 mm. The numerical table is on PDF page 10 of the supplied grant, with the same Example I prescription repeated in claim 2 on PDF page 12. The patent describes four principal power groups arranged negative–positive–negative–positive and places the aperture stop between the third and fourth principal groups. It does not publish the stop diameter, exact stop coordinate, clear semi-diameters, or any finite-conjugate focusing state. (US 3,771,853, PDF pp. 8–12, especially p. 10, cols. 5–6.)

The production association is strong historically but is not exact enough to identify Example I as the production optical formula. Nikon's official retrospective names Soichi Nakamura as the developer of the Zoom-Nikkor 28–45mm f/4.5, dates completion of the design to May 1970, states that patent applications followed at about the same time, and notes a U.S. patent granted in 1973. Nikon's product history places the lens in 1975, and the retrospective gives an August 1975 release. Manufacturer literature, however, describes the production lens as 11 elements in 7 groups, whereas Example I contains 10 elements in 6 physical air-spaced groups. Nikon's retrospective also characterizes the production zoom as a negative–positive–positive three-group system with the rear master group split for correction, while this selected patent example is explicitly a four-principal-group negative–positive–negative–positive design. The data therefore treats Example I as a closely related developmental design rather than a manufacturer-confirmed final production prescription.

The identification rests on three convergent facts: the named designer and patent timing agree with Nikon's historical account; the patent's F/4.5, 35 mm format, and 28.85–44.19 mm design range closely match the marketed 28–45 mm lens; and the patent's wide/tele field figures are consistent with the marketed coverage. The direct contradictions in optical count and architectural description are retained rather than reconciled away.

The rendered patent table was used to resolve one OCR-sensitive value: the d-line index following surface 9 is 1.57501, including the terminal digit 1. This is a transcription correction to machine-readable text, not a correction to the patent. The September 17, 1974 Certificate of Correction changes a radius in Embodiment III, not Example I, so it does not alter this prescription.

## Optical Architecture

Example I contains 10 glass elements in 6 physical air-spaced groups, organized by the patent into four moving principal power groups. The computed first-order focal lengths of those principal groups are G1 = −50.12735 mm, G2 = +24.68872 mm, G3 = −18.63743 mm, and G4 = +26.23394 mm. These values reproduce the leading decimals printed by the patent. The physical-group count and the principal-power-group count describe different things: the former follows actual cemented/air-separated glass construction, while the latter follows the patent's zoom kinematics.

G1 comprises L1 followed by the cemented L2/L3 pair and is the front divergent group. G2 comprises the cemented L4/L5 pair plus L6 and is convergent. G3 is the cemented L7/L8 negative doublet. G4 is the cemented L9/L10 positive doublet. The stop lies between G3 and G4. This power sequence is the central architectural feature of the patent, which expressly develops a wide-angle zoom around a divergent first group while moving every principal group during zooming. (US 3,771,853, PDF pp. 8–10, equations (1)–(12) and Embodiment I.)

At the published wide endpoint, the final parsed prescription gives an effective focal length of 28.851368 mm and a rear-vertex back focal distance of 38.297555 mm. At the tele endpoint the corresponding values are 44.177102 mm and 48.466361 mm. The front-vertex-to-image-plane tracks are 112.4488 mm and 101.8540 mm. Under the project terminology, the design is retrofocus at both endpoints because BFD exceeds EFL, while it is not telephoto because total track divided by EFL remains greater than one. The patent itself describes the minimum-focal-length power arrangement as similar to an inverted-telephoto wide-angle lens; the computed classification uses the explicit project thresholds rather than that historical terminology alone.

The surface-by-surface Petzval sum of the final model is +0.003512774 mm⁻¹, calculated as φ/(n·n′) at every refracting surface. This is a system curvature diagnostic, not a claim that any single element independently determines the final field curvature. The zero-power stop contributes nothing to the sum.

### Zoom kinematics

The patent defines the objectward displacements of G2, G3, and G4 as ψ(x) = 1.0287x, x, and φ(x) = 0.8335x. G1 moves in the opposite direction, toward the image, by a nonlinear amount determined through equation (11) so that the image plane is maintained. Direct reconstruction from the literal endpoint gaps gives ψ/x = 1.028682 and φ/x = 0.833490, consistent with the printed four-decimal coefficients. No principal group reverses over the selected zoom interval. (US 3,771,853, PDF pp. 9–10.)

Only the wide and tele numerical states are published in the Example I prescription table. A two-keyframe linear interpolation of all variable gaps would not reproduce the patent's nonlinear G1 law: independent testing gives a maximum intermediate BFL error of about 1.1285 mm. The final data therefore uses 17 movement-law-derived keyframes. The literal published endpoint spacings remain unchanged, while the interior G1 path follows an endpoint-normalized form of equation (11) that reconciles the few-micrometer inconsistency produced by the patent's rounded coefficients and table values.

Across 1,601 dense samples, piecewise-linear interpolation of the authored 17-keyframe model remains within 0.005569 mm in BFL and 0.008215 mm in EFL of that endpoint-normalized equation-(11) curve. These intermediate states are modeling samples derived from the published movement law, not additional patent-published zoom stations.

### Aperture-stop model

The patent states only that a stop is interposed between G3 and G4. Figure 3 schematically places the iris within the surface-13-to-surface-14 air gap but does not dimension its axial position. The implemented model therefore chooses a deterministic two-thirds / one-third split for that gap and inserts one zero-power `STO`; the two-thirds coordinate is a modeling inference, not a measurement from the drawing. The total published spacing is preserved at every zoom state. At the wide endpoint the chosen split is 1.438933333 mm before the stop and 0.719466667 mm after it.

Because no physical diaphragm diameter is published, the model uses the current LensVisualizer `from-nominal-fno` aperture path. The station stop radii are calculated from the published F/4.5 target after fixing the inferred stop coordinate; they range from about 4.12227 mm at the wide end to 5.03357 mm at the tele end. The resulting f-number agreement is a calibration result, not independent evidence for the manufactured iris size. The same distinction applies to the derived entrance- and exit-pupil dimensions.

## Element-by-Element Analysis

### L1 — Negative Meniscus

nd = 1.54739, νd = 53.6. Glass: N-BALF5 (SCHOTT catalog equivalent; source coordinate 547536; production supplier unspecified). Standalone f = −126.702 mm.

L1 is the first element of G1 and supplies part of the front-group divergence required by the patent's negative first principal group. Its standalone focal length is substantially weaker than the complete G1 power of −50.127 mm, so its isolated power should not be equated with the in-situ first-group behavior. The element is air-spaced from the following cemented pair, giving G1 two physical groups within one kinematic principal group.

The patent's rationale is expressed at group level rather than as an element-by-element aberration attribution. Accordingly, the analysis does not assign a specific distortion, coma, or chromatic correction to L1 alone. The modern N-BALF5 annotation is a catalog-equivalent spectral proxy: SCHOTT publishes the same d-line index and νd = 53.63, consistent with the patent’s rounded 53.6. It does not establish the historical production supplier or melt.

### L2 — Positive Meniscus, first member of D1

nd = 1.84110, νd = 43.3. Glass: Unmatched (841433; nd=1.84110, νd=43.3). Standalone f = +96.080 mm.

L2 begins the first cemented pair in G1. It is positive as a standalone thick element, but it is cemented directly to the much stronger negative L3. The net paraxial focal length of the L2/L3 cemented unit D1 is −91.197 mm, showing why the positive sign of L2 by itself does not imply that the pair or the complete front group is convergent.

No authoritative catalog match was retained for the 1.84110/43.3 coordinate. The final data therefore preserves an explicit `Unmatched` label instead of assigning a speculative vendor glass. No line-index or partial-dispersion properties are attached to the element.

### L3 — Biconcave Negative, second member of D1

nd = 1.44628, νd = 67.2. Glass: Unmatched (446672; nd=1.44628, νd=67.2). Standalone f = −46.598 mm.

L3 completes D1 and provides the dominant negative standalone power within that cemented pair. Together L2 and L3 form the second physical group inside G1. The complete G1, which also includes L1 and the intervening air space, has a computed focal length of −50.12735 mm; that in-situ group value is the appropriate quantity for discussing the zoom architecture.

The unusually low index and high Abbe number of the stored coordinate are source facts, but the patent does not identify the melt and the authoritative catalog audit did not establish a defensible named match. The final file therefore leaves the glass unmatched and does not infer fluorite, ED, anomalous dispersion, or apochromatic behavior from the coordinate alone.

### L4 — Biconvex Positive, first member of D2

nd = 1.63930, νd = 45.0. Glass: BAF12 (SUMITA catalog equivalent; source coordinate 639450; production supplier unspecified). Standalone f = +25.945 mm.

L4 is the strong positive member at the front of G2. It is cemented to negative L5, producing a D2 net focal length of +48.925 mm. G2 then adds the separate positive singlet L6, and the complete principal group has a computed focal length of +24.68872 mm.

The patent discusses the second through fourth principal groups as a coordinated moving subsystem and requires G2 to be positive. It does not isolate L4 as the source of a particular aberration correction. The final annotation uses SUMITA BAF12 as a modern catalog-equivalent spectral proxy because the current coefficient-backed catalog row reproduces the 1.63930/45.0 coordinate. The patent remains vendor-silent, so this is not a historical supplier attribution.

### L5 — Negative Meniscus, second member of D2

nd = 1.74400, νd = 44.9. Glass: H-LaF3B (CDGM catalog equivalent; source coordinate 744449; production supplier unspecified). Standalone f = −53.246 mm.

L5 opposes L4 within the cemented D2 pair while leaving the pair net positive. This opposing-power structure gives G2 a cemented front unit rather than a single strong positive element. Its paraxial contribution is best understood through the verified D2 and G2 net powers rather than by attributing a specific aberration to the element solely from its shape or index.

CDGM H-LaF3B reproduces the stored 1.74400/44.9 coordinate and is used as a modern catalog-equivalent spectral proxy. The patent is vendor-silent, so the annotation does not identify the historical production melt.

### L6 — Positive Meniscus

nd = 1.57501, νd = 41.3. Glass: 575413 — light-flint coordinate class (supplier unresolved). Standalone f = +48.014 mm.

L6 is the rear positive singlet of G2, separated from D2 by a 0.1 mm air gap. In combination with D2 it raises the net convergence of G2 to +24.68872 mm. The verified index value 1.57501 is the rendered-table reading from Example I; the terminal digit is easily lost in OCR and is retained explicitly in the final data.

The stored glass description is a coordinate class rather than a supplier claim. Candidate catalog line indices were deliberately not copied into the element because they would describe candidate modern catalog glasses, not source-published spectral data for this patent element.

### L7 — Positive Meniscus, first member of D3

nd = 1.69895, νd = 30.0. Glass: SF15 (SUMITA catalog equivalent; source coordinate 699300; production supplier unspecified). Standalone f = +37.325 mm.

L7 is the positive component of G3's cemented doublet. Its standalone sign is positive, but the much stronger negative L8 makes the complete cemented unit negative. Because G3 consists only of D3, the cemented-unit focal length and the principal-group focal length coincide at −18.63743 mm.

This distinction between constituent and cemented powers is important for the patent's negative–positive–negative–positive group sequence. SUMITA SF15 is used as a coefficient-backed modern equivalent at the exact stored coordinate; no production supplier identity is asserted.

### L8 — Biconcave Negative, second member of D3

nd = 1.80518, νd = 25.5. Glass: H-ZF7LA (CDGM catalog equivalent; source coordinate 805255; production supplier unspecified). Standalone f = −12.493 mm.

L8 supplies the strong negative constituent power that makes D3, and therefore G3, divergent. The aperture stop follows this doublet in the source layout. The patent specifically requires the third principal group to be negative and uses its focal length and spacing in conditions governing the second-to-fourth-group power arrangement. (US 3,771,853, PDF pp. 8–10.)

CDGM H-ZF7LA is the current exact-code catalog equivalent for 805255 and is therefore used instead of the earlier ambiguous SF6-class wording; SCHOTT SF6 has the nearby code 805254. The patent supplies no glass maker, melt name, Sellmeier coefficients, or line indices, so the catalog name remains a modern proxy rather than a source fact.

### L9 — Negative Meniscus, first member of D4

nd = 1.72825, νd = 28.3. Glass: H-ZF4A (CDGM catalog equivalent; source coordinate 728283; production supplier unspecified). Standalone f = −30.233 mm.

L9 begins the final cemented doublet and is negative as a standalone element. It is followed directly by strong positive L10, giving the D4 pair a net positive focal length of +26.23394 mm. Because G4 consists only of this doublet, the cemented-unit and principal-group powers again coincide.

The patent expressly describes the fourth group of Embodiment I as a cemented concave/convex doublet and places the stop ahead of it. The data follows that structure exactly; the stop itself is the only added zero-power plane, inserted solely to represent the published iris location qualitatively. CDGM H-ZF4A is the current LensVisualizer catalog equivalent for the 728283 coordinate; SCHOTT SF10 is a nearby but different-code 728284 glass, so the final annotation avoids the earlier ambiguous SF10/ZF4 label. (US 3,771,853, PDF p. 10 and claim 2 on PDF p. 12.)

### L10 — Biconvex Positive, second member of D4

nd = 1.83330, νd = 36.8. Glass: 833368 — lanthanum flint (S-LAH60 coordinate-compatible dispersion proxy; supplier unresolved). Standalone f = +14.641 mm.

L10 is the strong positive constituent of the rear doublet and brings G4 to a net +26.23394 mm. The fourth group's positive power and its spacing from the image plane are central to several of the patent's first-order conditions, including the requirement S4 > f4 at the minimum-focal-length state.

The integration audit uses S-LAH60 as a coordinate-compatible spectral proxy for 1.83330/36.8, without assigning the historical supplier. As elsewhere in the design, the absence of source line-index data prevents any claim of anomalous partial dispersion or apochromatic correction.

## Glass Identification and Selection

The patent specifies only d-line refractive index and Abbe number for each element. It does not name glass suppliers, melts, glass families, line indices, partial-dispersion ratios, or Sellmeier coefficients. The final data therefore preserves the native nd/νd coordinates. Where a current authoritative catalog provides a defensible coordinate-compatible equivalent, the annotation names that modern catalog glass explicitly so LensVisualizer can use its coefficient-backed dispersion as a modeling proxy; this does not establish the historical supplier or melt. Coordinates without a defensible exact/current catalog resolution remain class-level or `Unmatched (...)`. The audit checked authoritative OHARA, HOYA, HIKARI, SCHOTT, CDGM, and SUMITA material.

| Element | nd | νd | Final glass annotation | Evidence status |
| --- | ---: | ---: | --- | --- |
| L1 | 1.54739 | 53.6 | N-BALF5 (SCHOTT catalog equivalent; source coordinate 547536; production supplier unspecified) | Catalog-equivalent proxy; historical supplier unproven |
| L2 | 1.84110 | 43.3 | Unmatched (841433) | No defensible named match retained |
| L3 | 1.44628 | 67.2 | Unmatched (446672) | No defensible named match retained |
| L4 | 1.63930 | 45.0 | BAF12 (SUMITA catalog equivalent; source coordinate 639450; production supplier unspecified) | Exact-coordinate catalog-equivalent proxy |
| L5 | 1.74400 | 44.9 | H-LaF3B (CDGM catalog equivalent; source coordinate 744449; production supplier unspecified) | Exact-coordinate catalog-equivalent proxy |
| L6 | 1.57501 | 41.3 | 575413 — light-flint coordinate class (supplier unresolved) | QF3 spectral proxy; supplier unresolved |
| L7 | 1.69895 | 30.0 | SF15 (SUMITA catalog equivalent; source coordinate 699300; production supplier unspecified) | Exact-coordinate catalog-equivalent proxy |
| L8 | 1.80518 | 25.5 | H-ZF7LA (CDGM catalog equivalent; source coordinate 805255; production supplier unspecified) | Exact-code catalog-equivalent proxy |
| L9 | 1.72825 | 28.3 | H-ZF4A (CDGM catalog equivalent; source coordinate 728283; production supplier unspecified) | Exact-code catalog-equivalent proxy |
| L10 | 1.83330 | 36.8 | 833368; S-LAH60 spectral proxy | Coordinate-compatible, supplier unresolved |

No `nC`, `nF`, `ng`, or `dPgF` fields are authored because the patent does not publish those element-specific values. At positions with the named catalog-equivalent annotations above, current LensVisualizer can resolve compatible catalog coefficients and use them as modern spectral proxies; only L2 and L3 remain limited to the lower-quality fallback supported by their stored coordinates. These catalog proxies do not establish the historical glass supplier or patent-specific spectral behavior, and they do not justify an APO or anomalous-dispersion performance claim.

## Focus Mechanism

Example I publishes zoom motion at infinity but no finite-conjugate focusing prescription, no focus-group identity, no close-focus spacings, and no focus drive description. The optical focus status is therefore `NO_INTERNAL_RECONSTRUCTION`. No internal group travel is invented from the marketed minimum focus distance.

The `closeFocusM` value of 0.6 m in the data is production metadata drawn from manufacturer literature for the marketed Zoom-Nikkor 28–45mm f/4.5. It does not define a modeled optical conjugate. Every authored zoom `var` pair has identical infinity/close values, so the data contains zoom movement only and no focus differential. LensVisualizer should therefore treat the close-focus optical state as unavailable rather than interpolate a fictitious internal focusing law.

## Conditional Expressions

The patent's first-order construction is unusually explicit for a zoom design of this period. Conditions (1)–(9) define the minimum-focal-length group powers and inter-principal-plane spacings; conditions (10)–(12) define the zoom displacement ordering, first-group compensation, and resulting combined focal length. The final verification evaluates these conditions from the selected prescription rather than accepting the printed group values as calculation inputs. (US 3,771,853, PDF pp. 8–10.)

| Patent condition | Expression / meaning | Verified disposition |
| --- | --- | --- |
| (1) | f1 < 0, f2 > 0, f3 < 0, f4 > 0 | Pass: −50.12735, +24.68872, −18.63743, +26.23394 mm |
| (2) | S4 > f4 | Pass: 38.80836 > 26.23394 mm |
| (3) | S3 + |f3| < f4·S4/(S4−f4) | Pass: 23.98771 < 80.96567 mm |
| (4) | |f3| > S3 > 0 | Pass: 18.63743 > 5.35028 > 0 mm |
| (5) | f4 − |f3| − S3 ≥ 0 | Pass: +2.24624 mm |
| (6) | Patent inequality relating f2−S2 to f3, f4, S3, and S4 | Pass: 15.03583 < 24.73371 mm |
| (7) | S2 > 0 | Pass: 9.65289 mm |
| (8) | 2|f3| > f2 > |f3| | Pass: 37.27486 > 24.68872 > 18.63743 mm |
| (9) | |f1| + S1 equals the printed rational expression in f2, f3, f4, S2, S3, S4 | Residual +0.004361 mm; retained as source-rounding discrepancy |
| (10) | ψ(x) ≥ x > φ(x) | Pass from coefficients 1.0287 ≥ 1 > 0.8335 |
| (11) | G1 imageward displacement y is determined from S1, |f1|, ψ(x), and P | Direct five-state trace self-consistent to floating-point precision |
| (12) | Overall focal length follows the patent's four-group expression | Direct full-prescription and group-expression values agree to floating-point precision at tested states |

Equation (9) is not forced to exact equality. Its 0.004361 mm residual is retained because the group focal lengths and several prescription values are printed at limited precision. The same rounding produces small equation-(11)-to-table endpoint differences in the original source model. The final model preserves the literal table endpoints and confines the reconciliation to the interior modeled movement curve.

## Verification Summary

The quantitative optical checks are recomputed from the final prescription rather than from a separate hard-coded copy of the intended model. Independent height/reduced-angle tracing is cross-checked with a separately implemented basis-ray/ABCD calculation, so the endpoint cardinal quantities are not supported by a single numerical path alone.

At the published endpoints, independent height/reduced-angle tracing and a separately implemented basis-ray/ABCD cross-check agree at floating-point precision. The final model computes 28.851368 mm EFL and 38.297555 mm BFL at the wide state, and 44.177102 mm EFL and 48.466361 mm BFL at the tele state. These remain within the source-precision tolerances of the printed 28.85/44.19 mm focal lengths and 38.299/48.467 mm back-focus values.

The semi-diameters are modeling inferences because the patent publishes no clear apertures. The initial exact-ray-envelope estimates were reviewed against Fig. 3 during integration. The front assembly was enlarged to match the optical rims; the rear rims were then isolated manually; published zoom anchors are preserved. Earlier rim-slope and gap-intrusion extrema from the smaller front assembly are superseded by the current surface and render-diagnostics checks.

The integration checks below exercise production validation, runtime glass resolution, and render diagnostics.

The prescription is unscaled: s = 1.0. No sensor cover glass, rear filter, dummy plane, or mechanical part is present, and no air-equivalent rear-spacing correction is required. All optical surfaces are spherical, so there is no asphere equation, conic conversion, coefficient scaling, or aspheric departure to report.

## Design Heritage and Context

The patent should be read as part of the design development that led to Nikon's early wide-angle normal-to-wide zoom work rather than as a literal production service prescription. Nikon's retrospective links Nakamura's 1970 design activity to the 28–45mm f/4.5 and notes the associated U.S. patent timing, which makes the historical relationship substantive. At the same time, the manufacturer-published 11/7 production construction and three-group architectural description contradict Example I's 10/6 physical construction and four principal power groups.

That distinction matters analytically. The patent explains a specific four-component solution to the wide-angle zoom problem and provides enough numerical detail to reconstruct its first-order behavior. The production lens supplies the market identity, mount, format, release timing, and minimum focus metadata. The two sources converge historically but are kept separate wherever their optical details conflict.

## Sources

United States Patent Office. **US 3,771,853, “Four Component Zoom Lens,”** Soichi Nakamura, assigned to Nippon Kogaku K.K., granted November 13, 1973; Certificate of Correction dated September 17, 1974. Prescription and movement law: supplied grant PDF pp. 8–12, especially Embodiment I on p. 10 and claim 2 on p. 12.

Nikon Corporation. **NIKKOR — The Thousand and One Nights No. 15: Zoom Nikkor 28-45mm F4.5.** https://imaging.nikon.com/imaging/information/story/0015/index.html

Nikon Corporation. **Our Product History: 1970's.** https://imaging.nikon.com/imaging/information/products_history/1970/

Nikon / Nikon Inc. **Nikkor lenses catalog, Zoom-Nikkor 28-45mm f/4.5 specification entry** (archival scan hosted by Pacific Rim Camera). https://www.pacificrimcamera.com/rl/01037/01037.pdf

Glass-coordinate review used authoritative catalog material from OHARA, HOYA, HIKARI, SCHOTT, CDGM, and SUMITA as recorded in the dossier evidence. SCHOTT N-BALF5, CDGM H-LaF3B/H-ZF7LA/H-ZF4A, and SUMITA BAF12/SF15 are used only as modern catalog-equivalent modeling proxies; the patent itself is vendor-silent and no historical supplier assignment is made.


## Integration Review — 2026-09-13 UTC

US3771853.pdf p. 4, Fig. 3 was inspected at 600 dpi (crop 0.34,0.18,0.83,0.385; page-axis 0.287), giving 43.80 μm/pixel. Manual readings exclude the rear-group leaders and front bevels.

| Surfaces | Previous SDs (mm) | Refined SDs (mm) |
|---|---|---|
| 1 / 2 | 19.09 / 17.66 | 27.3 / 23.0 |
| 3 / 4 / 5 | 15.77 / 15.33 / 13.96 | 23.0 / 23.0 / 17.8 |

Rear-group SDs were refined again in the local-diagram follow-up below; the calibrated iris is retained. CDGM QF3 adds the 575413 curve; S-LAH60 supplies a compatible 833368 spectral proxy (Δnd = +0.0007, Δνd = +0.36). Coverage rises from 6/10 to 8/10; 841433 and 446672 remain unresolved. “Developmental design” is included in the display name because this patent's 10/6 construction differs from the production lens's 11/7 construction.

The optical prescriptions, stop calibration, and source focus/zoom states are preserved. Surface validation, image-circle screening, and the shared render-diagnostics corpus were run during integration. Catalog proxies preserve patent nd/νd and do not identify the historical supplier, melt, or anomalous partial dispersion.

New coefficient source: [CDGM Optical Glass Data Sheet, June 2022](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf), H-LaK67 printed p. 140, QF3 p. 145, H-BaF2 p. 171. Polynomial rows are retained in their published form; they are not converted to fabricated Sellmeier coefficients.

The local-diagram follow-up isolated Fig. 3 rear optical rims from the dimension leaders at 600 dpi. Surfaces 6–8 now use 11.6 mm, 9–10 use 8.6 mm, 11–12 use 6.3 mm, 13 uses 5.1 mm, and 14–16 use 7.1 mm. These remain figure-derived estimates. The rear-group silhouette now follows the patent more closely; image-circle screening and the 101-position render-trim sweep pass. The computed zoom range is 28.85–44.18 mm, separately from the patent’s rounded 28.85–44.19 mm range.
