## Patent Reference and Design Identification

**Patent:** JP-S62-108218 A (特開昭62-108218)
**Application Number:** 特願昭60-248546
**Filed:** 1985-11-06
**Published:** 1987-05-19
**Inventor:** Yoshinori Hamanishi
**Applicant:** Nippon Kogaku K.K.
**Title:** Large-Aperture-Ratio Telephoto Zoom Lens (大口径比望遠ズームレンズ)
**Embodiment analyzed:** Example 3 / Table 3 / Figure 1 optical section / Figures 3A–3D aberration plots

The prescription is the user-selected correlation for the **NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8 ED**. The patent itself does not identify a commercial lens model, so the production association is a correlation rather than a manufacturer statement that this patent is the product design.

Several independent points converge on that correlation. First, Example 3 is a four-functional-group zoom with a published 80.0–196.0 mm range and F-number 2.88, while the production lens was marketed as 80–200 mm f/2.8. Second, the example contains 16 elements in 11 air-separated physical groups, matching Nikon's production specification. Third, three elements in the example use the unusually low-dispersion coordinate nd = 1.49782, νd = 82.6; Nikon specifies three ED elements for the production 80–200 mm f/2.8D that retained the earlier optical design. Fourth, the example uses a 21.6 mm image height, corresponding to a 43.2 mm image circle and therefore to the 35 mm / FX format represented by the data file.

Nikon's historical account states that the smaller autofocus 80–200 mm f/2.8 ED was released in 1988 and that its optical design continued into the 1996 D version without noteworthy optical changes. Nikon's later D-version specification gives 80–200 mm, f/2.8, Nikon F bayonet, FX/35 mm coverage, 16 elements in 11 groups, and three ED elements. Those manufacturer sources establish the product-side identity and continuity used for the correlation; they do not replace the patent as the authority for the exact prescription.

The data file therefore keeps marketed and design quantities separate. `focalLengthMarketing` is 80–200 mm and `apertureMarketing` is f/2.8. The independently traced design endpoints are 79.99278 mm and 195.98427 mm, while both `apertureDesign` and `nominalFno` are 2.88. No uniform scale factor is applied.

The patent-published close states are also kept separate from later product marketing. The data model terminates at approximately 1.800 m object-to-image-plane distance because that is what the Example 3 finite-conjugate rows produce. Nikon's later D-version specification lists 1.5 m minimum focus distance; that later mechanical specification is not substituted for the patent state.

## Optical Architecture

Example 3 contains 16 physical glass elements in 11 air-separated groups. The patent organizes those physical groups into four functional zoom groups, G1 through G4. Claim 1 identifies G1 as a positive focusing group, G2 as a negative variator, G3 as a positive compensator that maintains the image-plane position, and G4 as a positive relay group. The independently calculated standalone group powers reproduce the required positive-negative-positive-positive sequence.

| Functional group | Standalone group focal length | Patent function | Zoom/focus behavior in the modeled endpoints |
|---|---:|---|---|
| G1 | +123.500000 mm | Positive focusing group | Fixed during zoom; moves objectward for close focus |
| G2 | -34.146299 mm | Negative variator | Moves 40.601 mm imageward from 80 to 196 mm |
| G3 | +86.835387 mm | Positive compensator | Moves 15.956 mm imageward from 80 to 196 mm |
| G4 | +112.999959 mm | Positive relay group | Fixed during zoom and focus; contains the aperture stop |

These focal lengths describe each functional group evaluated as a standalone optical unit in air. They are not the same as each group's in-situ contribution to the effective focal length of the assembled zoom.

The patent's structural discussion is unusually specific about G2 and G4. G2 is formed from two cemented negative components followed by a single negative component. G4 places the stop within the relay group, with two positive components on the object side of the stop and a negative component followed by a positive component on the image side. Example 3 implements that architecture directly: D2, D3, and L25 form the negative G2; L41, D5, the stop, L43, and L44 form G4.

At infinity, the zooming action is entirely internal to the spacing between the four functional groups. G1 and G4 retain fixed axial stations, while G2 and G3 move imageward by different amounts. The patent publishes only the 80 mm and 196 mm endpoint rows for Example 3. LensVisualizer therefore interpolates the three variable group gaps linearly between those two endpoints; no intermediate focal-length prescription is represented as a published patent state.

Although the patent title uses the term “telephoto,” the project applies a stricter geometrical classification. The published infinity track is 217.233 mm. The resulting T.L./EFL ratios are 2.7157 at the wide endpoint and 1.1084 at the tele endpoint, both greater than 1. The prescription is therefore not classified as telephoto under the project's `T.L./EFL < 1` rule. Likewise, BFL/EFL is 0.8270 at wide and 0.3376 at tele, so neither endpoint is retrofocus under the `BFD > EFL` criterion.

## Element-by-Element Analysis

The focal lengths below are the standalone element focal lengths stored in the final data file and recomputed by the verification artifact. For a cemented pair, the separately stated cemented focal length is the net power of the bonded component. Neither quantity should be confused with the element's or component's in-situ contribution after interaction with the rest of the zoom.

### G1 — Positive Focusing Group

G1 contains the front cemented doublet D1 followed by the positive singlet L13. It is the only functional group that changes position for focus in the published finite-conjugate states.

#### D1 — L11 + L12

**L11:** nd = 1.80458, νd = 25.5. Glass: 805255 flint class (catalog unresolved). Standalone f = -314.883607 mm.

**L12:** nd = 1.49782, νd = 82.6. Glass: 498826 ED crown class (supplier unresolved). Standalone f = +144.989137 mm.

**Cemented D1:** net standalone f = +274.804301 mm.

L11 is a negative meniscus cemented to the biconvex positive L12. Their individual powers have opposite signs, but the cemented component is weakly positive. The pairing also combines a high-index, low-Abbe negative member with a very low-dispersion positive member. That sign-and-dispersion distribution is consistent with using the front component to carry positive power while moderating longitudinal color, an important requirement because G1 is both a large-aperture front group and the focusing group.

The patent treats the shape of the object-side cemented component of G1 as a controlled design variable. Its condition on the front component's shape factor is satisfied by Example 3, limiting the amount of front-group aberration variation introduced when G1 is displaced for close focus.

#### L13 — Positive Meniscus

**nd = 1.49782, νd = 82.6. Glass: 498826 ED crown class (supplier unresolved). Standalone f = +216.177700 mm.**

L13 is a second positive low-dispersion element in G1. Together with D1 it brings the full functional group to +123.500000 mm. Its relatively weak positive power supplements the front doublet without introducing another cemented junction. Because both L12 and L13 share the 1.49782/82.6 coordinate, two of the design's three production-correlated ED-class elements are concentrated in the focusing group.

The patent's close-focus scheme moves the entire G1 rather than altering an internal spacing within G1. L13 therefore remains rigidly spaced from D1 while the complete group translates.

### G2 — Negative Variator

G2 is the strongest functional group by absolute standalone power, at -34.146299 mm. Its structure follows the patent's stated pattern of two cemented negative components and one single negative component. During zooming from 80 to 196 mm, G2 moves 40.601 mm toward the image plane, the largest group motion in the prescription.

#### D2 — L21 + L22

**L21:** nd = 1.62588, νd = 35.6. Glass: 626356 flint class (F1 coordinate; supplier unresolved). Standalone f = +132.775918 mm.

**L22:** nd = 1.56384, νd = 60.8. Glass: 564608 crown class (N-SK11 coordinate; supplier unresolved). Standalone f = -51.393566 mm.

**Cemented D2:** net standalone f = -84.176064 mm.

D2 is a negative cemented component despite its positive front member. The strongly negative biconcave L22 dominates the pair's net power. The patent constrains the refractive indices of the negative components in G2 because excessive or insufficient index drives unfavorable spherical-aberration behavior and makes compactness more difficult. Example 3's index distribution satisfies the corresponding mean-index condition.

The dispersion signs are not arranged as a simple textbook crown-positive/flint-negative achromat. Instead, the component combines a lower-Abbe positive member with a higher-Abbe negative member while remaining net negative. The analysis therefore treats its exact chromatic contribution as a property of the complete group rather than assigning a conventional achromat label to D2 alone.

#### D3 — L23 + L24

**L23:** nd = 1.51680, νd = 64.1. Glass: 517641 BK7-class crown (supplier unresolved). Standalone f = -56.560596 mm.

**L24:** nd = 1.80458, νd = 25.5. Glass: 805255 flint class (catalog unresolved). Standalone f = +72.379367 mm.

**Cemented D3:** net standalone f = -261.546730 mm.

D3 is a second cemented negative component. Its net power is much weaker than D2's even though each member has substantial standalone power. This partial cancellation allows G2 to distribute negative power among several surfaces rather than concentrating it in a single very strong element.

The patent specifically calls for two cemented negative components in G2 before the final negative singlet. That division is part of the design's strategy for controlling aberration variation while the variator moves through a large axial range.

#### L25 — Biconcave Negative

**nd = 1.71300, νd = 54.0. Glass: 713540 lanthanum-crown class (supplier unresolved). Standalone f = -89.693816 mm.**

L25 is the rear singlet of G2 and supplies uncompensated negative power after the two cemented components. The patent uses the focal length of this rearmost negative component in one of its compactness and aberration-balance conditions. Example 3 gives `|f2/f23| = 0.380698`, inside the stated 0.30–0.45 range, where `f23` denotes this patent component and corresponds to L25 in the physical-element labeling used by the data file.

The combination D2 + D3 + L25 makes G2 a strong negative variator without requiring any one physical element to carry the full group power.

### G3 — Positive Compensator

G3 has a standalone focal length of +86.835387 mm. It consists of the positive singlet L31 followed by the cemented positive component D4. The patent assigns G3 the compensating role: its axial motion offsets the image-plane displacement that would otherwise result from the larger variator motion of G2.

#### L31 — Biconvex Positive

**nd = 1.51835, νd = 60.3. Glass: 518603 barium-lanthanum crown class (BALK3 coordinate; supplier unresolved). Standalone f = +121.344711 mm.**

L31 begins the compensator with moderate positive power and moderate-to-high Abbe number. Its first surface is very weakly curved compared with its rear surface, so most of the singlet's vergence change is associated with the stronger rear curvature.

Because the entire G3 translates as a rigid unit in the published endpoint model, L31's relationship to D4 is fixed during both zooming and focusing. G3 moves 15.956 mm imageward from the wide to the tele endpoint, substantially less than G2.

#### D4 — L32 + L33

**L32:** nd = 1.56384, νd = 60.8. Glass: 564608 crown class (N-SK11 coordinate; supplier unresolved). Standalone f = +63.245156 mm.

**L33:** nd = 1.75692, νd = 31.7. Glass: 757317 — E-LAF11 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = -77.421006 mm.

**Cemented D4:** net standalone f = +311.686059 mm.

D4 is a weak net-positive cemented component formed from a strong positive biconvex element and a negative meniscus. The pair therefore contributes less net power than either physical member suggests in isolation. That is a useful distinction in this prescription: L32 and L33 are individually strong, but their cemented net power is comparatively gentle.

The large dispersion separation between L32 and L33 provides a chromatic degree of freedom within the compensator. No anomalous-partial-dispersion claim is made, because the patent supplies only d-line index and Abbe data and the data file intentionally carries no line indices or `dPgF` values.

### G4 — Positive Relay Group and Stop Section

G4 is fixed in the four published states and has a standalone focal length of +112.999959 mm. The patent explicitly calls it the positive relay group. It contains the third 1.49782/82.6 low-dispersion element, a positive cemented component immediately before the stop, a strong negative meniscus immediately after the stop, and a final positive singlet.

The patent's design discussion gives G4 a major aberration-control role. It places the aperture stop inside this group to reduce the required optical diameter and to aid spherical-aberration and coma correction. It also specifies low-index positive glass on the object side of the stop, including low-index, low-dispersion glass in the positive member of the pre-stop cemented component, to relax cemented-surface curvature and improve higher-order chromatic spherical-aberration behavior. The same low-index positive region is described as counteracting the negative Petzval tendency produced by G2 and improving astigmatic correction.

#### L41 — Positive Meniscus

**nd = 1.49782, νd = 82.6. Glass: 498826 ED crown class (supplier unresolved). Standalone f = +106.920989 mm.**

L41 is the first element of the fixed relay group and the third element in the design with the 1.49782/82.6 coordinate. It therefore places low-dispersion positive power in the rear fixed section as well as in the front focusing group.

Its patent-controlled shape factor `q4A` is 1.120481, inside the stated 0.85–1.40 interval. The patent associates this condition with balancing spherical aberration and coma in the relay section.

#### D5 — L42a + L42b

**L42a:** nd = 1.48749, νd = 70.2. Glass: 487702 crown class (FK5 coordinate; supplier unresolved). Standalone f = +89.309670 mm.

**L42b:** nd = 1.80458, νd = 25.5. Glass: 805255 flint class (catalog unresolved). Standalone f = -360.036569 mm.

**Cemented D5:** net standalone f = +116.497955 mm.

D5 is the positive cemented component immediately before the aperture stop. L42a is nearly plano-convex and carries most of the pair's positive power; L42b is a much weaker nearly plano-concave negative member. The combination remains clearly positive.

This component closely matches the patent's stated material strategy. The positive member uses a low refractive index and high Abbe number, while the bonded negative member has much higher index and substantially lower Abbe number. The patent states that low-index, low-dispersion glass in this pre-stop positive component permits gentler cemented curvature and improves higher-order chromatic spherical-aberration correction. That statement is a patent design rationale, not a claim that the historical glass supplier was FK5 or any other modern catalog entry.

#### L43 — Negative Meniscus

**nd = 1.74400, νd = 45.1. Glass: 744451 — J-LAF2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = -40.839504 mm.**

L43 is the strongest negative standalone element in G4 and sits directly behind the modeled stop. Its image-side surface is much more strongly curved than its object-side surface, producing the negative-meniscus form specified by the patent for the post-stop component.

The patent defines a shape-factor condition for this element, `q4C`. Example 3 evaluates to -1.106949, within the allowed -1.30 to -0.70 range. The patent uses this shape constraint to control the post-stop contribution to aberration balance.

#### L44 — Biconvex Positive

**nd = 1.66755, νd = 42.0. Glass: 668420 — J-BASF6 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. Standalone f = +89.539445 mm.**

L44 is the final refracting element and restores positive power after L43. Its biconvex form completes the relay-group sequence positive / positive-cemented / stop / negative / positive described by the patent.

The last refracting surface is followed by the 66.158 mm source spacing to the image plane. At infinity the independently calculated BFL is 66.15718 mm at the wide endpoint and 66.15791 mm at the tele endpoint, so the source rear spacing is reproduced to the precision expected from the rounded prescription values.

## Glass Identification and Selection

The data file intentionally keeps its patent coordinates and treats compatible catalog curves as spectral proxies rather than historical supplier identities. The patent publishes d-line `nd` and `νd` only; it does not identify the melts by vendor, and a modern catalog coordinate match cannot establish which glass Nikon actually procured in the 1980s.

| Data annotation | nd | νd | Elements | Interpretation used in the model |
|---|---:|---:|---|---|
| 805255 flint class (catalog unresolved) | 1.80458 | 25.5 | L11, L24, L42b | High-index, high-dispersion flint class |
| 498826 ED crown class (supplier unresolved) | 1.49782 | 82.6 | L12, L13, L41 | Very low-dispersion positive glass; production-correlated with Nikon's three ED elements |
| 626356 flint class (F1 coordinate; supplier unresolved) | 1.62588 | 35.6 | L21 | Flint-class member of D2 |
| 564608 crown class (N-SK11 coordinate; supplier unresolved) | 1.56384 | 60.8 | L22, L32 | Crown-class glass used in G2 and G3 |
| 517641 BK7-class crown (supplier unresolved) | 1.51680 | 64.1 | L23 | Low-index crown member of D3 |
| 713540 lanthanum-crown class (supplier unresolved) | 1.71300 | 54.0 | L25 | Higher-index rear negative member of G2 |
| 518603 barium-lanthanum crown class (BALK3 coordinate; supplier unresolved) | 1.51835 | 60.3 | L31 | Positive compensator singlet |
| 757317 — E-LAF11 spectral proxy; supplier unresolved | 1.75692 | 31.7 | L33 | Negative member of D4 |
| 487702 crown class (FK5 coordinate; supplier unresolved) | 1.48749 | 70.2 | L42a | Low-index, low-dispersion positive member of D5 |
| 744451 — J-LAF2 spectral proxy; supplier unresolved | 1.74400 | 45.1 | L43 | Strong post-stop negative meniscus |
| 668420 — J-BASF6 spectral proxy; supplier unresolved | 1.66755 | 42.0 | L44 | Final positive relay element |

The three 498826 elements are the most conspicuous chromatic signature in the prescription. Their νd = 82.6 is far above the other materials in the example, and the selected production correlation is independently supported by Nikon's specification of three ED elements. Two are placed in G1, where the focusing group carries large front-aperture rays, and one is placed in the fixed relay G4.

The data file does not attach `nC`, `nF`, `ng`, or `dPgF` to any element. It also marks every element `apd: false`. Consequently, the analysis does not describe the lens as apochromatic and does not claim anomalous partial dispersion. Nikon's production literature may discuss ED glass and chromatic correction, but the patent prescription itself provides only d-line index and Abbe-number information.

## Focus Mechanism

The patent publishes the focus motion; no close-focus reconstruction is used. G1 is the positive focusing group identified in Claim 1, and only the air gap after G1 changes between infinity and the finite-conjugate state at a given zoom endpoint. G2, G3, and G4 retain their endpoint zoom positions during focusing.

| Published state | d5 (G1→G2) | d13 (G2→G3) | d18 (G3→G4) | Published f or β |
|---|---:|---:|---:|---:|
| 80 mm infinity | 1.834 mm | 26.536 mm | 18.005 mm | f = 80.0 mm |
| 196 mm infinity | 42.435 mm | 1.891 mm | 2.049 mm | f = 196.0 mm |
| 80 mm close | 12.330 mm | 26.536 mm | 18.005 mm | β = -0.055 |
| 196 mm close | 52.931 mm | 1.891 mm | 2.049 mm | β = -0.135 |

At either focal-length endpoint, d5 increases by 10.496 mm while d13 and d18 remain unchanged. In a fixed image-plane frame, that is a 10.496 mm objectward translation of the entire G1. The identical stroke at both endpoints is a source-published mechanism constraint, not an inferred simplification.

Independent conjugate tracing gives β = -0.055057 at the wide close state and β = -0.134869 at the tele close state, reproducing the patent's rounded values. The corresponding object-to-image-plane distances are 1799.862 mm and 1800.127 mm. `closeFocusM` is therefore 1.8 m in the data model.

The later D-version 1.5 m minimum focus distance is a production mechanical specification from Nikon, not an Example 3 spacing row. It is deliberately not used to extend the LensVisualizer focus slider beyond the patent's published finite state.

## Chromatic Correction Strategy

The patent's chromatic strategy is distributed rather than confined to one achromat. G1 carries two of the three 498826 low-dispersion elements, placing low-dispersion positive power in the moving focusing group. G4 carries the third in L41, while D5 adds another low-index, relatively low-dispersion positive member at L42a.

The patent specifically emphasizes the pre-stop positive part of G4. Its text states that using low-index, low-dispersion glass in the positive lens of the cemented component immediately object-side of the stop allows the cemented surface to be made more gently curved and helps correct higher-order chromatic spherical aberration, particularly toward shorter wavelengths. L42a is the physical element in Example 3 that satisfies that description most directly.

The same section explains that low-index positive lens components ahead of the stop help counteract the negative Petzval tendency of G2 and improve astigmatic correction. The independently summed Petzval result for the complete prescription is small and positive, +0.0008730952 mm^-1 in the adopted sign convention, consistent with a design in which large positive and negative surface contributions are closely balanced.

That balance should not be conflated with an APO designation. The prescription lacks the line-index and partial-dispersion data required to substantiate an apochromatic or anomalous-dispersion claim in the LensVisualizer model.

## Conditional Expressions

The patent defines a series of conditions governing functional-group power, refractive-index selection, component power, and shape. The expressions below are evaluated from the final data prescription. Patent component labels `f21`, `f22`, and `f23` refer respectively to the first cemented negative component D2, the second cemented negative component D3, and the rear negative singlet L25 in the data file. The patent defines shape factor as `q = (rb + ra) / (rb - ra)`, with `ra` the object-side radius and `rb` the image-side radius of the relevant component.

| Condition | Example 3 value | Patent range | Result |
|---|---:|---:|:---:|
| (1) f4 / (f1 · Fn) | 0.317701 | 0.24–0.45 | Pass |
| (2) |f4 / (f2 · Fn)| | 1.149059 | 0.85–1.30 | Pass |
| (3) f4 / (f3 · Fn) | 0.451845 | 0.33–0.55 | Pass |
| (4) mean of the two lowest G2 negative-component indices | 1.54032 | 1.45–1.60 | Pass |
| (5) mean of the first two pre-stop G4 positive-component indices | 1.492655 | 1.45–1.65 | Pass |
| (6) |f2 / f1| | 0.276488 | 0.20–0.30 | Pass |
| (7) |f2 / f23| | 0.380698 | 0.30–0.45 | Pass |
| (8) q4A, object-side positive component L41 | 1.120481 | 0.85–1.40 | Pass |
| (9) |f2 / f21| | 0.405653 | 0.30–0.50 | Pass |
| (10) |f2 / f22| | 0.130555 | 0.10–0.14 | Pass |
| (11) q4C, post-stop negative L43 | -1.106949 | -1.30–-0.70 | Pass |
| (12) q1A, object-side cemented component D1 | 0.921843 | 0.75–1.10 | Pass |

The five quantities printed directly beneath Example 3's Table 3 are reproduced to the displayed source precision: 0.318, 1.149, 0.452, 1.5403, and 1.4927.

## Modeling Inferences and Scope

The prescription surfaces, refractive indices, Abbe numbers, focal/zoom endpoint spacings, and 66.158 mm rear spacing are patent-transcribed quantities. Several visualization fields are necessarily modeled because the patent does not publish them.

The aperture stop is the most important inference. The patent drawing places stop S inside the 11.400 mm air interval after source surface 23 and before source surface 24, but it gives neither the axial offset within that interval nor the stop diameter. The data file preserves the source interval by splitting it symmetrically: 5.700 mm from surface 23 to `STO` and 5.700 mm from `STO` to surface 24. This midpoint is a modeling choice, not a measured patent dimension.

The physical stop semi-diameter is likewise inferred. The authored `STO.sd` is 14.759011 mm, solved from the actual TypeScript prescription so that the wide-infinity entrance pupil gives F/2.88. With the same fixed stop, the tele-infinity model gives F/2.880021, reproducing the patent's constant endpoint aperture to source precision. Because the inserted `STO` is optically neutral air-to-air, the 5.700/5.700 mm split does not alter the source's first-order refracting prescription.

Semi-diameters are not tabulated by the patent. The data file therefore uses derived clear semi-diameters based on code-traced on-axis and off-axis rays across all four published states, the 21.6 mm image height, the patent optical section, mechanical constraints, and the current geometry checks. The 38.0 mm front semi-diameter is a modeling value; Nikon's later 77 mm filter specification supplies only a production mechanical upper bound, not a patent clear-aperture measurement.

All surfaces are spherical. `asph` is empty, so no aspheric equation, conic convention, coefficient scaling, or aspheric departure applies. No cover glass, filter, inactive dummy plane, flare cutter, or mechanical component is present in the sequential model. No scaling is applied to the patent prescription.

The only non-published continuous behavior is the viewer's zoom interpolation. Example 3 supplies endpoint gap values at 80 mm and 196 mm; LensVisualizer interpolates those gaps between the two positions for display. Intermediate states are therefore model interpolation, not additional patent examples.

## Verification Summary

The final data file was recomputed from its actual TypeScript arrays with sequential height/reduced-angle tracing and an ABCD check. The endpoint residuals are at the level expected from the patent's rounded tables.

| State | EFL | BFL | First vertex→image | Calculated β |
|---|---:|---:|---:|---:|
| 80 mm infinity | 79.992778 mm | 66.157181 mm | 217.233 mm | approximately 0 |
| 196 mm infinity | 195.984273 mm | 66.157907 mm | 217.233 mm | approximately 0 |
| 80 mm close | 88.257646 mm | 61.298783 mm | 227.729 mm | -0.055057 |
| 196 mm close | 193.190719 mm | 40.102529 mm | 227.729 mm | -0.134869 |

The ABCD determinants are unity to floating-point precision. The surface-by-surface Petzval sum is +0.0008730952 mm^-1, corresponding to a signed Petzval radius of approximately +1145.35 mm in the adopted convention.

The modeled stop gives F/2.87999994 at wide infinity and F/2.88002120 at tele infinity. The 21.6 mm image height gives paraxial infinity half-fields of 15.1109° and 6.2894°, consistent with Nikon's rounded production full angles of 30°10′ and 12°20′ without using those marketing angles to alter the patent prescription.

The authored semi-diameters pass the independent geometry gate across all four published states. The minimum element edge thickness is 0.261662 mm, the maximum actual spherical rim-slope angle is 30.914°, and the worst positive shared-gap sag intrusion is 0.871386 of the available gap, below the current 0.90 limit. The sampled 60%-field ray bundles do not use a cemented interface as a hidden first aperture.

These checks establish numerical consistency of the analysis with the final data file. Repository-specific `buildLens()` validation, production render-trim diagnostics, and corpus tests remain integration-stage checks when the LensVisualizer repository is available.

## Sources / References

1. **JP-S62-108218 A (特開昭62-108218)**, Yoshinori Hamanishi, Nippon Kogaku K.K., filed 1985-11-06, published 1987-05-19. Example 3 / Table 3 supplies the prescription, endpoint variable spacings, F-number, image height, group definitions, and patent conditional expressions; Figure 1 supplies the optical section, while Figures 3A–3D are the Example 3 aberration plots.
2. **Nikon Imaging — NIKKOR: The Thousand and One Nights No. 67**, “Striving for silent focusing! Secrets behind development of a fast telephoto zoom lens.” Nikon's historical discussion states that the smaller autofocus 80–200 mm f/2.8 ED was released in 1988 and that its optical design continued into the 1996 D version without noteworthy optical changes. https://imaging.nikon.com/imaging/information/story/0067/
3. **Nikon USA — AF Zoom-NIKKOR 80-200mm f/2.8D ED.** Production metadata used only for the correlation and mechanical/marketing fields: 80–200 mm, f/2.8, Nikon F bayonet, FX/35 mm, 16 elements / 11 groups, three ED elements, 1.5 m MFD for the later D version, 77 mm filter, and rounded FX angles of view. https://www.nikonusa.com/p/af-zoom-nikkor-80-200mm-f28d-ed/1986/overview
