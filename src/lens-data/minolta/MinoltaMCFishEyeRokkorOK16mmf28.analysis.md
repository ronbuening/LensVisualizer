## Patent Reference and Design Identification

**Patent:** US 3,589,798<br>
**Filed:** March 25, 1969<br>
**Priority:** March 25, 1968 (Japan 19328/68)<br>
**Granted:** June 29, 1971<br>
**Inventor:** Toshinobu Ogura<br>
**Assignee:** Minolta Co., Ltd.<br>
**Title:** *Wide-Angle Lens System with Corrected Lateral Aberration*<br>
**Embodiment analyzed:** Example / Embodiment II

US 3,589,798 describes an extreme wide-angle lens for a 35 mm single-lens-reflex camera, with an f/2.8 relative aperture, a back focal distance greater than twice the focal length, and nominal 180° diagonal coverage. The project assignment fixes Embodiment II as the prescription for the MINOLTA MC FISH-EYE ROKKOR-OK 16mm f/2.8. That correlation is an authorial identification rather than a documented statement by Minolta that the production lens is Example II.

Several independent product characteristics support the assignment. Period Minolta literature lists a 16mm f/2.8 MC Fish-eye Rokkor with 11 elements in 8 groups, 180° angle of view, a built-in filter, and 0.3 m minimum focus; the photographed front ring carries the ROKKOR-OK designation. A Minolta lens directory likewise gives 180° diagonal, 137° horizontal, and 86° vertical angles of view for the 16mm f/2.8 MC Fisheye Rokkor, together with the same 11-element/8-group construction and built-in filter system. These production facts closely match the patent's focal length class, aperture, field, element count, filter placement, and SLR back-focus objective.

The patent contains internal numerical discrepancies that are preserved rather than silently reconciled. The Embodiment II body heading prints a 150° full field, whereas claim 2 specifies 180°, Figure 5 reaches a 90° half-field, and Minolta's production literature specifies 180° diagonal coverage. The data file therefore uses 180° as the production/claim field while retaining the 150° heading as a source contradiction. The Embodiment II body table also prints `d20 = 0.280`, while claim 2 prints `d20 = 0.285`; the data file uses the claim-2 value. With `d20 = 0.285`, the individual spacings sum to 4.0335 although the patent prints `Σd = 4.0336`. No spacing is adjusted merely to force agreement with that printed sum.

The patent prescription is normalized to `f = 1`. Every dimensional optical quantity in the data file is uniformly scaled by 16 to model the 16 mm production-correlated lens. The selected embodiment is entirely spherical, so no aspherical coefficient scaling is applicable.

## Optical Architecture

The design is an extreme retrofocus fisheye organized around a strongly divergent front section and a positive rear section. The patent's physical construction contains 11 elements in 8 groups because the removable plane-parallel filter is counted as G6. LensVisualizer excludes filters from ordinary sequential prescriptions, so the active model contains 10 refracting elements in 7 air-separated groups: G1, G2, the cemented G3/G4 pair, G5, the cemented G7/G8 pair, the cemented G9/G10 pair, and G11.

The first three elements are negative. G1 and G2 are large negative menisci convex toward the object, followed by the biconcave G3. The patent places positive G4 and G5 before the stop region, then uses five refracting elements behind the stop: G7 through G11. This distribution produces the long clearance required by a 35 mm SLR mirror while keeping the optical focal length near 16 mm.

Independent paraxial computation from the authored surfaces gives an effective focal length of 15.99998 mm and a back focal distance of 36.38036 mm from the final refracting surface. The ratio `BFD/EFL = 2.27377`, so the design satisfies the project's retrofocus criterion. Its active first-to-last-surface track is 63.97655 mm, longer than the focal length; it is therefore not telephoto under the project's `TL/EFL < 1` definition.

The patent does not publish a numerical stop station. It states only that the stop is normally between G5 and G7. The data file therefore makes an explicit modeling choice: G6 is removed, its 0.0933-normalized thickness at `n = 1.5994` is replaced by the paraxially equivalent air distance `t/n`, and the single `STO` is placed at the air-equivalent station corresponding to the filter's rear face. This puts the stop 2.53335 mm behind surface 10 and 4.7696 mm ahead of surface 13. Its 5.81748 mm physical semi-diameter is solved so that the entrance pupil gives the verified f/2.8 model; it is not a published aperture dimension.

All surface semi-diameters are likewise modeling inferences. They were constrained by the traced ray envelopes, the patent's Figure 2 silhouette, and Minolta's published field and mechanical dimensions. They are not represented as patent prescription values.

The source documents identify the lens as a fisheye but do not name an equidistant, equisolid, stereographic, or orthographic mapping law. The data file uses `fisheye-equisolid` only as a LensVisualizer reference projection because the traced chief-ray image heights are close to a 16 mm equisolid mapping through the central and manufacturer-published vertical/horizontal field. This is a modeling inference, not a manufacturer or patent claim.

## Element-by-Element Analysis

### G1 — Negative Meniscus, Convex to Object

**nd = 1.6204, νd = 60.3. Glass: 620603 — SK16/BSM16/BACD16 class. Standalone f = −36.578 mm.**

G1 is the dominant front collector in the retrofocus section. Its large negative meniscus begins bending extreme-field bundles before they encounter the smaller inner elements. The patent explicitly assigns the first three negative elements the dual purpose of limiting excessive ray inclination at roughly 90° half-field and obtaining the long back focal distance needed by an SLR.

The stored glass label is a class-level identification, not a claimed vendor identity. Modern SK16/BSM16/BACD16-family catalog coordinates lie close to the patent's `nd`/`νd` pair, but the patent itself names no glass maker.

### G2 — Negative Meniscus, Convex to Object

**nd = 1.6176, νd = 52.7. Glass: K-SSK1 (SUMITA catalog equivalent; patent 618527; production supplier unspecified). Standalone f = −48.464 mm.**

G2 continues the front negative action with a less dispersive requirement than a dense flint. SUMITA K-SSK1 is the only reviewed catalog curve inside the project compatibility guard and is used as a spectral equivalent without asserting Minolta's production supplier. Its optical role is best understood as part of the distributed front negative section rather than as an isolated power contributor.

The authored patent coordinates remain unchanged; the named curve supplies only the modeled wavelength dependence.

### D1 — Cemented G3/G4 Pair

**G3: nd = 1.6205, νd = 60.3. Glass: 620603 — SK16/BSM16/BACD16 class (melt/rounding residual). Standalone f = −42.267 mm.**<br>
**G4: nd = 1.7495, νd = 34.9. Glass: H-LaF4 (CDGM catalog equivalent; patent 750349; production supplier unspecified). Standalone f = +40.079 mm.**

G3 is biconcave and G4 biconvex. Their standalone powers are large and opposite in sign, but the cemented pair is only weakly positive as an assembled unit: the computed cemented net power is +0.00311961 mm⁻¹, corresponding to an equivalent focal length of about +320.553 mm. This distinction is important; the isolated-element focal lengths do not describe the pair's in-situ behavior.

The patent specifically places convergent G4, together with G5, between the first three divergent elements and the stop to assist correction of the large lateral chromatic aberration generated by the extreme front section. Its Abbe-number conditions govern this front-side chromatic balance.

### G5 — Plano-Convex Positive

**nd = 1.7330, νd = 28.2. Glass: Unmatched (733282 dense flint; no compatible public coefficient row). Standalone f = +47.470 mm.**

G5 is the final positive element ahead of the stop/filter region. The data file's rear surface is plane, making the element plano-convex in the scaled Example II prescription. Its low Abbe number is part of the front-side chromatic strategy specified by the patent, but no anomalous-dispersion behavior is inferred from `nd` and `νd` alone.

The element's relatively strong positive standalone power partially counteracts the first three negative elements before the aperture region. The complete front section nevertheless functions as the retrofocus front block rather than as a simple succession of isolated thin lenses.

### D2 — Cemented G7/G8 Pair

**G7: nd = 1.6214, νd = 61.2. Glass: N-SK16 / S-BSM16 / J-SK16 catalog-equivalent crown class (patent 621612; supplier unspecified). Standalone f = +21.743 mm.**<br>
**G8: nd = 1.7330, νd = 28.2. Glass: Unmatched (733282 dense flint; no compatible public coefficient row). Standalone f = −26.544 mm.**

G7 and G8 form a cemented positive/negative meniscus pair convex toward the image. Their strong standalone powers largely cancel: the cemented net power is +0.00331042 mm⁻¹, or an equivalent focal length of about +302.076 mm.

The pair begins the five-element rear section identified by the patent as responsible for controlling longitudinal chromatic aberration and residual lateral chromatic aberration after the stop. The large Abbe-number contrast between G7 and G8 is therefore source-significant even though no specific modern glass pair can be asserted from the patent coordinates alone.

### D3 — Cemented G9/G10 Pair

**G9: nd = 1.7400, νd = 37.5. Glass: Unmatched (740375 high-index flint; no compatible public coefficient row). Standalone f = −28.978 mm.**<br>
**G10: nd = 1.5688, νd = 56.0. Glass: 569560 — BAK4/BAC4/BaK7 class. Standalone f = +26.409 mm.**

G9 is biconcave and G10 biconvex. As with D1 and D2, the individual powers are much stronger than the cemented pair's net power. D3 is positive at +0.00594320 mm⁻¹, equivalent to about +168.259 mm focal length.

This pair contributes to the rear correction and relay action while maintaining the long back-focus geometry. The patent's fourth Abbe-number condition requires `V10 > V9`, which this pair satisfies by a wide margin.

### G11 — Biconvex Positive

**nd = 1.5168, νd = 64.2. Glass: 517642 — BK7/BSC7/K9L class. Standalone f = +54.131 mm.**

G11 is the final positive singlet. It completes the positive rear section and leaves the paraxial focus 36.38036 mm behind its rear surface in the scaled model. Its crown-like `nd`/`νd` coordinates align closely with BK7/BSC7/K9L-family catalog values, but the authored label remains a class identification because the patent does not specify a vendor.

## Glass Identification and Selection

The patent publishes refractive indices and Abbe numbers but no trade names or glass vendors. The data file therefore uses explicit unmatched labels and compatible modern catalog equivalents with the production supplier explicitly unspecified. The table below records the authored modeling choices; it does not elevate an equivalent curve into a historical source fact.

| Element(s) | nd | νd | Authored glass identification |
|---|---:|---:|---|
| G1 | 1.6204 | 60.3 | 620603 — SK16/BSM16/BACD16 class |
| G2 | 1.6176 | 52.7 | K-SSK1 catalog equivalent (patent 618527) |
| G3 | 1.6205 | 60.3 | 620603 — SK16/BSM16/BACD16 class (melt/rounding residual) |
| G4 | 1.7495 | 34.9 | H-LaF4 catalog equivalent (patent 750349) |
| G5, G8 | 1.7330 | 28.2 | Unmatched 733282 dense flint |
| G7 | 1.6214 | 61.2 | N-SK16 / S-BSM16 / J-SK16 catalog-equivalent class (patent 621612) |
| G9 | 1.7400 | 37.5 | Unmatched 740375 high-index flint |
| G10 | 1.5688 | 56.0 | 569560 — BAK4/BAC4/BaK7 class |
| G11 | 1.5168 | 64.2 | 517642 — BK7/BSC7/K9L class |

No element carries `nC`, `nF`, `ng`, or `dPgF` in the data file because the selected patent does not publish those quantities. The analysis therefore makes no apochromatic or anomalous-partial-dispersion claim. The patent's chromatic correction arguments are based on the published Abbe-number relationships and the distribution of positive and negative power, not on verified anomalous partial dispersion.

## Focus Mechanism

Minolta's period literature specifies a 0.3 m minimum focusing distance for the production lens. US 3,589,798 Example II, however, provides only a single prescription and no focus-spacing table, magnification row, or description of an internally moving optical group.

The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`. Its `var` table is empty and the modeled prescription remains at the published infinity state. No unit-focus, internal-focus, or floating-focus mechanism is assigned from inference, and the 0.3 m product specification is retained only as product metadata rather than converted into invented optical movement.

## Aberration Correction Strategy

The patent's design rationale is unusually explicit for this vintage fisheye. The first three negative elements are used to temper the inclination of rays entering at extreme field while simultaneously creating the long back focal distance. The positive G4 and G5 elements ahead of the stop then participate in correcting the lateral chromatic aberration generated in that front section.

Behind the stop, G7 through G11 form the five-element rear correction section. The patent associates their Abbe-number relationship with longitudinal chromatic correction and further correction of residual lateral color. Conditions on the G7/G8 curvatures are presented as measures for controlling the Petzval tendency and spherical aberration, while the final curvature condition addresses spherical aberration, astigmatism, and coma without sacrificing the required long back focus.

Independent computation from the final data arrays gives a Petzval sum of +0.00143260 mm⁻¹ using the project convention `φ/(n·n′)` surface by surface. This is a computed property of the modeled prescription, not a value printed by the patent.

## Conditional Expressions

All six inequalities resolved from the patent are satisfied by the final scaled data. The Abbe-number conditions are scale-independent; the dimensional threshold in condition (c) is scaled consistently from the patent's `f = 1` normalization.

| Patent condition | Computed value | Required relation | Result |
|---|---:|---:|---|
| `V1 + V2` | 113.0 | `> 105` | Pass |
| `V3 / (V4 + V5)` | 0.955626 | `> 0.6` | Pass |
| `(V7 + V11) / V8` | 4.446809 | `> 3` | Pass |
| `V10 − V9` | 18.5 | `> 0` | Pass |
| `(N8−1)/r15 − (N7−1)/r14` | −0.0114739 mm⁻¹ | `< −0.003125 mm⁻¹` | Pass |
| `r16/r13 − r19/r17` | 0.532010 | `≥ 0.2` | Pass |

These conditions support the patent's own explanation of the design's chromatic, Petzval, spherical-aberration, astigmatism, and coma balancing. They do not by themselves identify specific modern glass melts or establish apochromatic correction.

## Verification Summary

The scaled final data reproduces the intended first-order design closely. Sequential height/reduced-angle tracing and an independent ABCD multiplication give the same system matrix to floating-point precision, with EFL = 15.99998 mm and BFD = 36.38036 mm. The authored rear gap equals the computed BFD.

The inferred stop geometry is self-consistent with the modeled aperture. Its 5.81748 mm physical semi-diameter maps through the front group to a 2.85714 mm entrance-pupil semi-diameter, giving f/2.8 from the verified EFL. This validates the chosen stop size but does not convert its inferred axial station into a source fact.

The inferred semi-diameters also satisfy the local spherical-geometry checks applied to the final arrays. The largest modeled rim slope is 62.20°, the minimum element edge thickness is 0.514 mm, and the tightest positive shared-gap sag ratio is 0.883 against the project's 0.90 limit. Full-pupil spherical rays at the authored fractions clear the prescription at 0°, 43°, 54°, and the manufacturer-published 68.5° horizontal half-field. Higher-field chief rays were also traced clear at 75° and 80°, although increased vignetting toward the 90° diagonal edge is expected from the inferred apertures.

The field trace also explains, but does not prove, the data file's equisolid reference choice: chief-ray image heights are very close to a 16 mm equisolid reference at 43° and 54°, with increasing departure at wider field. Because neither Minolta nor the patent publishes the projection equation, this remains explicitly a viewer-modeling convention.

## Sources / References

1. Toshinobu Ogura, *Wide-Angle Lens System with Corrected Lateral Aberration*, US 3,589,798, assigned to Minolta Co., Ltd., filed March 25, 1969, granted June 29, 1971. Embodiment II and claim 2 supply the prescription; Figure 5 supplies the second-embodiment 90° half-field aberration presentation.
2. Minolta Camera Co., *The Minolta SR System of Creative Photography*, period manufacturer literature, printed p. 7 (scan p. 10): 16mm f/2.8 MC Fish-eye Rokkor, 11 elements in 8 groups, 180° angle of view, 0.3 m minimum focus, built-in filter, f/2.8–f/16 diaphragm; the product photograph shows the ROKKOR-OK barrel designation.
3. Minolta, *Lens Directory*, section IV-45: 16mm f/2.8 MC Fisheye Rokkor technical data, including 180° diagonal, 137° horizontal, and 86° vertical angles of view, 11 elements in 8 groups, 0.3 m minimum focus, and built-in turret filters.
