# Minolta AF 70-200mm f/2.8 APO G (D) SSM: Patent Example 1 Review

## Patent Reference and Design Identification

**Patent:** JP 2004-109559 A
**Inventors:** Hiroyuki Matsumoto (松本博之), Mamoru Terada (寺田守)
**Applicant:** Minolta Co., Ltd.
**Filed:** September 19, 2002
**Published:** April 8, 2004
**Title:** Zoom Lens System (ズームレンズ系)
**Embodiment analyzed:** Example 1 (実施例1), Fig. 1

JP 2004-109559 A, *Zoom Lens System* (`ズームレンズ系`), was filed by Minolta Co., Ltd. on 2002-09-19 and published on 2004-04-08. The publication front page names Hiroyuki Matsumoto (`松本博之`) and Mamoru Terada (`寺田守`) as inventors. The reviewed prescription is Example 1 (`実施例1`), corresponding to Fig. 1.

Example 1 gives a constant-aperture zoom with patent focal lengths $f = 71.8, 105.0, 195.0$ mm and $F_{no} = 2.88$ at the wide, middle, and telephoto positions. A fresh paraxial trace of the numerical prescription gives $71.756668$, $105.008403$, and $195.006309$ mm, so the Example 1 transcription is internally consistent with the patent's rounded focal lengths.

The production-lens identification is convergent rather than absolutely demonstrative. The patent is a Minolta large-aperture inner-focus telephoto zoom for an SLR camera system, with a split positive first group, a negative variator, and a rear positive imaging group. Sony's first-party SAL70200G documentation identifies the production 70-200mm F2.8 G as a 19-element lens with four ED elements, internal focusing, SSM drive, a 77 mm filter, and a 1.2 m minimum focus distance. The patent table also contains 19 glass elements and four repeated very-low-dispersion elements at $n_d = 1.49310$, $ν_d = 83.58$, corresponding to L2, L3, L12, and L15.

The only material caveat is group count. The strict patent prescription has four cemented doublets, so it yields 15 air-separated glass clusters. Sony lists the production SAL70200G as 16 groups / 19 elements. This discrepancy is not large enough to defeat the identification, because manufacturer group counts can follow mechanical or coating-cell conventions, but it should remain visible. The data file therefore records the patent construction as 19 elements / 15 air-spaced optical clusters and treats the Sony specification as production-context evidence, not as a literal rewrite of the prescription.

No first-party engineer interview was located that publishes additional element-level optical data for this lens. The analysis therefore relies on the patent prescription, Sony first-party product documentation, and public glass catalogs. Secondary pages that merely repeat sales text were not used to override the patent numbers.

## Optical Architecture

Example 1 is a four-group photographic telephoto-range zoom of positive-negative-positive-positive power distribution:

| Group | Elements | Recalculated paraxial focal length | Function |
|---|---:|---:|---|
| Gr1F | L1-L3 | +194.56 mm | Large fixed front collector and primary axial-color correction |
| Gr1R | L4-L5 | +170.38 mm | Moving inner-focus group |
| Gr2 | L6-L10 | -27.00 mm | Strong negative variator |
| Gr3 | L11-L13 | +89.06 mm | Positive compensator / relay group |
| Gr4 | Stop + L14-L19 | +105.86 mm | Rear imaging group, pupil-side correction, SLR back-focus formation |

The first group is deliberately split. Gr1F is the large, fixed, front collector. Gr1R is a smaller positive group that moves for focusing. This is the patent's main departure from older large telephoto zooms that moved the entire front group; it reduces the autofocus moving mass and shortens focus travel while keeping the high-diameter front correction group stationary.

The zooming motion is concentrated in the variable spacings after Gr1R, Gr2, and Gr3. At infinity focus the patent table gives:

| Gap | Wide | Middle | Tele | Interpretation |
|---|---:|---:|---:|---|
| d9, after Gr1R | 1.980 mm | 15.965 mm | 29.959 mm | Opens as Gr2 moves rearward |
| d18, after Gr2 | 31.098 mm | 23.491 mm | 2.800 mm | Closes as Gr2 approaches Gr3 |
| d23, after Gr3 | 7.685 mm | 1.306 mm | 8.004 mm | Non-monotonic compensator spacing |

The sum $d9 + d18 + d23$ remains effectively constant: 40.763 mm, 40.762 mm, and 40.763 mm. That conservation check confirms the zoom-track transcription and the fixed total distance between the first-group rear region and the rear imaging group. Gr2 moves imageward in a nearly linear way from wide to telephoto, while Gr3 compensates image position through the non-monotonic d23 spacing.

The stop is the patent's r24 surface, immediately before Gr4. The stop semi-diameter implied by the patent $F_{no} = 2.88$ is 18.684 mm at all three zoom positions, within paraxial rounding. That constancy is a useful independent check: it means the surface order, zoom gaps, and stop placement are mutually consistent.

## Element-by-Element Analysis

### L1 - Negative Meniscus, Convex to Object, Cemented to L2

$n_d = 1.62004$, $ν_d = 36.30$. Glass: F2 / S-TIM2 class, vendor not specified. Standalone $f = -258.77$ mm.

L1 is the negative flint member of the first cemented doublet. It sits at the largest beam diameter in the system, so even modest negative power has substantial leverage over axial color, pupil behavior, and high-order spherical residuals. The glass is a conventional dense flint region around code 620/363. Public catalog entries such as Schott F2 and Ohara S-TIM2 are close, but the patent does not name a vendor.

The L1-L2 cemented interface has a much stronger curvature than the broad front surface. It supplies achromatizing power without adding an air-glass interface, a sensible choice for a large-aperture telezoom where flare and ghost control are important.

### L2 - Biconvex Positive ED/AD Element, Cemented to L1

$n_d = 1.49310$, $ν_d = 83.58$. Glass: proprietary Minolta AD/ED fluorophosphate-type; no exact public catalog match. Standalone $f = +199.99$ mm.

L2 is the first of four very-low-dispersion positive elements in the patent example. Its index/Abbe pair does not match public FCD1 / S-FPL51 exactly; those public catalog equivalents are roughly code 497/816, while the patent uses 493/836. It is therefore safer to describe L2 as a proprietary or special Minolta AD/ED fluorophosphate-type material rather than as a public catalog glass.

The L1-L2 doublet has only weak net positive power, tracing to approximately +874 mm. That is the signature of a front color-correcting doublet that shapes aberrations without acting as the dominant collector by itself.

### L3 - Positive Meniscus ED/AD Element, Convex to Object

$n_d = 1.49310$, $ν_d = 83.58$. Glass: proprietary Minolta AD/ED fluorophosphate-type; no exact public catalog match. Standalone $f = +249.91$ mm.

L3 is the second front-group ED/AD element. It completes Gr1F and gives the fixed front sub-group much of its positive power while preserving the low-dispersion front correction strategy started by L2.

The shallow positive-meniscus form helps maintain a long front principal-plane structure compatible with the strong negative variator behind it. In practical terms, L3 lets the lens behave like a high-speed telephoto-range zoom without forcing the moving focus group or Gr2 to carry all primary color correction.

### L4 - Negative Meniscus, Convex to Object, Moving Focus Group

$n_d = 1.71736$, $ν_d = 29.50$. Glass: HOYA E-FD1L / S-TIH1 / N-SF1 class. Standalone $f = -212.59$ mm.

L4 is the negative member of Gr1R, the patent's moving inner-focus group. The patent explicitly bounds the ratio of this negative element's focal length to the full Gr1R focal length. The recalculated value is $f_{1r1}/f_{1r} = -1.247742$, which falls inside the preferred range.

The element is not just a negative correction plate. Its power and dispersion are part of the focus-aberration control system. Moving a positive focus group in a fast zoom can create large focus-dependent changes in spherical aberration and field curvature; the negative L4 moderates those changes while allowing L5 to provide the group's net positive power.

### L5 - Positive Meniscus, Convex to Object, Moving Focus Group

$n_d = 1.69680$, $ν_d = 56.47$. Glass: unmatched lanthanum-crown region, near but not identical to public LAC14 / S-LAL14 / N-LAK14 families. Standalone $f = +93.41$ mm.

L5 supplies most of the positive power of Gr1R. Together L4-L5 trace to $f = +170.38$ mm, strong enough to focus the lens with a compact moving group but not so strong that focus-induced aberration changes become uncontrolled.

The object-side surface is more strongly curved than the image-side surface, matching the patent's claim language for the positive element in Gr1R. That form is consistent with an inner-focus group working immediately behind a large fixed front collector.

### L6 - Biconcave Negative, First Component of Gr2

$n_d = 1.75450$, $ν_d = 51.57$. Glass: unmatched high-index crown, code 755/516. Standalone $f = -52.64$ mm.

L6 opens the negative variator. Its rear face is the dominant refracting surface, and it starts the strong divergence required for a 70-200mm-class zoom. The glass code is not a clean match to a public HOYA, Ohara, or Schott catalog entry found during review, so the data file marks it as unmatched rather than assigning a speculative name.

### L7 - Positive Meniscus, Concave to Object, Cemented to L8

$n_d = 1.84666$, $ν_d = 23.82$. Glass: FDS90 / N-SF57 / S-TIH53 dense-flint class. Standalone $f = +132.86$ mm.

L7 is a high-index dense-flint positive member inside the Gr2 cemented doublet. The patent prose describes it as a positive meniscus concave to the object side; that shape description is more precise than simply calling it a positive meniscus.

Its very high index lets the variator remain compact. Its high dispersion would be undesirable in isolation, but the cemented pairing with L8 allows the doublet to contribute net negative power while moderating color and field curvature.

### L8 - Biconcave Negative, Cemented to L7

$n_d = 1.67000$, $ν_d = 57.07$. Glass: unmatched moderate-index crown, code 670/571. Standalone $f = -37.88$ mm.

L8 is the negative member of the L7-L8 doublet. The pair traces to approximately $f = -52.00$ mm. The higher Abbe number relative to L7 offsets part of L7's dispersion while preserving a compact negative component within Gr2.

The small air gap after this doublet and the strong curves around L9 give Gr2 a concentrated correction zone. This is why Gr2 should not be interpreted as a simple four-singlet negative variator; it is a structured group with internal positive and negative powers.

### L9 - Positive Meniscus, Convex to Object, Third Component of Gr2

$n_d = 1.84666$, $ν_d = 23.82$. Glass: FDS90 / N-SF57 / S-TIH53 dense-flint class. Standalone $f = +72.04$ mm.

L9 is the patent's positive third component of Gr2. The recalculated condition value is $f_{23}/f_2 = -2.667584$, comfortably inside the claimed range.

A positive lens inside a negative variator prevents the variator from behaving like a crude negative block. It helps manage field curvature and astigmatism, especially at the telephoto end where the variable spacing after Gr2 collapses to only 2.800 mm.

### L10 - Negative Meniscus, Concave to Object, Fourth Component of Gr2

$n_d = 1.75450$, $ν_d = 51.57$. Glass: unmatched high-index crown, code 755/516. Standalone $f = -102.13$ mm.

L10 closes Gr2. The recalculated patent-condition value is $f_{24}/f_2 = +3.782044$, within the required range. Its role is to leave the variator with controlled ray angles before the long variable space to Gr3.

Because d18 changes from 31.098 mm at wide to 2.800 mm at telephoto, this element has to remain benign over a large change in neighboring air distance. Its moderate negative focal length helps prevent telephoto-end spherical and field residuals from becoming excessive.

### L11 - Biconvex Positive Relay Element

$n_d = 1.61800$, $ν_d = 63.39$. Glass: N-PSK53A / PCD4 / S-PHM52 class. Standalone $f = +130.53$ mm.

L11 begins Gr3. It restores convergence after the negative variator and sets up the ray geometry for the L12-L13 cemented group. The 618/634 code is a good match to catalog PSK/PHM/PCD glasses and supplies useful positive power with relatively high Abbe number.

### L12 - Biconvex Positive ED/AD Element, Cemented to L13

$n_d = 1.49310$, $ν_d = 83.58$. Glass: proprietary Minolta AD/ED fluorophosphate-type; no exact public catalog match. Standalone $f = +74.65$ mm.

L12 is the third ED/AD element. Its placement after Gr2 is important: residual color introduced or magnified by the variator can be corrected downstream rather than being left entirely to the front group.

The element is stronger than L2 or L3, reflecting its smaller beam diameter and its role as part of a positive relay/compensator group.

### L13 - Negative Meniscus, Concave to Object, Cemented to L12

$n_d = 1.74950$, $ν_d = 35.04$. Glass: HOYA E-LAF7 / N-LAF7 class. Standalone $f = -100.48$ mm.

L13 is the high-index flint partner to L12. The L12-L13 doublet has only weak net positive power, tracing to approximately +279 mm, so its function is achromatizing and aberrational rather than simple power addition.

The compact high-index negative element lets the ED/AD positive member work effectively without excessive curvature or thickness.

### L14 - Weak Negative Meniscus, Convex to Object, Stop-Side Group

$n_d = 1.78100$, $ν_d = 44.55$. Glass: unmatched high-index mid-dispersion glass, code 781/446. Standalone $f = -941.68$ mm.

L14 is optically weak in isolation, but its placement just after the stop makes it significant. It is the first element of Gr4f and is the negative element referenced by the patent's image-side front-group condition. The ratio $f_{If1}/f_{If} = -8.113286$ shows why it appears weak as a standalone element but still matters in the stop-side correction group.

### L15 - Biconvex Positive ED/AD Element, Cemented to L16

$n_d = 1.49310$, $ν_d = 83.58$. Glass: proprietary Minolta AD/ED fluorophosphate-type; no exact public catalog match. Standalone $f = +68.74$ mm.

L15 is the fourth ED/AD element and the positive member of the rear cemented doublet. Its role differs from the front ED/AD pair. L2 and L3 address primary axial color at high beam diameter; L12 and L15 clean up residual axial and lateral color after zoom magnification has occurred.

Because L15 lies close to the stop, it also has substantial leverage over spherical aberration and coma. It is one reason the design can remain all-spherical.

### L16 - Biconcave Negative Flint, Cemented to L15

$n_d = 1.62004$, $ν_d = 36.29$. Glass: F2 / S-TIM2 class, vendor not specified. Standalone $f = -203.56$ mm.

L16 is the flint partner to L15. The L15-L16 doublet traces to approximately +98.74 mm, and Gr4f as a whole traces to +116.07 mm. This doublet is the rear analogue of the front ED/flint strategy but placed near the pupil to affect both color and pupil-side aberrations.

### L17 - Biconvex Positive Element of Gr4r

$n_d = 1.59270$, $ν_d = 35.45$. Glass: HOYA FF5 / S-FTM16 class. Standalone $f = +125.49$ mm.

L17 starts the rear sub-group Gr4r. It adds convergence after the Gr4f doublet and before the strong negative L18. Its flint-like dispersion is moderated by the adjacent rear components rather than by a cemented partner.

### L18 - Negative Meniscus, Concave to Object, Rear Field-Correction Element

$n_d = 1.80610$, $ν_d = 33.27$. Glass: HOYA NBFD15-W / NBFD15. Standalone $f = -57.31$ mm.

L18 is the compact high-index negative field-correction element near the image plane. The patent's condition for the second element of the image-side rear group gives $f_{Ir2}/f_{Ir} = -0.110694$, identifying this element as an intentional rear negative corrector rather than a residual packaging element.

Its rear location gives it strong leverage over field curvature and oblique aberrations while leaving the large front group and variator free to handle aperture and zoom-power requirements.

### L19 - Final Biconvex Positive Element

$n_d = 1.71700$, $ν_d = 47.86$. Glass: LAF3 / S-LAM3 / N-LAF3 class, close but not exact. Standalone $f = +94.66$ mm.

L19 restores convergence after L18 and helps form the roughly 51.2 mm back focal distance. Its high index and moderate Abbe number are typical of a final positive element used to balance back-focus, field shape, and image-side ray angles in an SLR telephoto zoom.

## Glass Identification / Selection

The patent publishes only $n_d$ and $ν_d$. It does not publish vendor names, $n_C$, $n_F$, $n_g$, $θ_{gF}$, or $Δ P_{gF}$. Exact spectral modeling is therefore not possible from the patent alone. The data file uses exact vendor names only where public catalog pairs match closely; otherwise it uses class or `Unmatched (...)` labels.

| Element(s) | Patent $n_d / ν_d$ | Data-file glass label | Confidence | Notes |
|---|---:|---|---|---|
| L1, L16 | 1.62004 / 36.30, 36.29 | F2 / S-TIM2 class | High class match | Flint partners for ED/AD positives |
| L2, L3, L12, L15 | 1.49310 / 83.58 | Proprietary Minolta AD/ED fluorophosphate-type | Medium | Production documentation confirms four ED elements, but public FCD1/S-FPL51 is not an exact match |
| L4 | 1.71736 / 29.50 | HOYA E-FD1L / S-TIH1 / N-SF1 class | High | Dense flint negative in focus group |
| L5 | 1.69680 / 56.47 | Unmatched lanthanum-crown region | Low-medium | Near LAC14/S-LAL14/N-LAK14 families, but not exact |
| L6, L10 | 1.75450 / 51.57 | Unmatched high-index crown | Low-medium | No exact public match retained |
| L7, L9 | 1.84666 / 23.82 | FDS90 / N-SF57 / S-TIH53 class | Medium-high | Very high-index dense flint in Gr2 |
| L8 | 1.67000 / 57.07 | Unmatched moderate-index crown | Low | Negative member of Gr2 doublet |
| L11 | 1.61800 / 63.39 | N-PSK53A / PCD4 / S-PHM52 class | High | Positive relay glass |
| L13 | 1.74950 / 35.04 | HOYA E-LAF7 / N-LAF7 class | High | Negative partner to L12 |
| L14 | 1.78100 / 44.55 | Unmatched high-index mid-dispersion | Low | Weak stop-side negative |
| L17 | 1.59270 / 35.45 | HOYA FF5 / S-FTM16 class | High | Positive rear relay element |
| L18 | 1.80610 / 33.27 | HOYA NBFD15-W / NBFD15 | High | Rear negative field corrector |
| L19 | 1.71700 / 47.86 | LAF3 / S-LAM3 / N-LAF3 class | Medium-high | Final positive element; patent Abbe is slightly lower than common catalog entries |

The chromatic strategy is distributed. L2 and L3 suppress primary axial color before Gr2. L12 and L15 then correct residual color after the variator and near the stop. Dense flints and lanthanum flints are likewise distributed through L1, L4, L7, L9, L13, L16, L18, and L19. This supports the production APO/ED designation qualitatively, but it does not justify claiming a computed apochromatic crossing because the patent lacks partial-dispersion data.

## Focus Mechanism

The patent's focusing mechanism is inner focus by movement of Gr1R, the two-element L4-L5 group. Gr1F remains fixed; the large front elements do not move for focus. This is central to the invention because the patent criticizes earlier front-group-extension zooms for moving a heavy, large-diameter first group and increasing autofocus time and battery load.

The patent does not publish a finite-distance focus-spacing table for Example 1. The data file therefore uses the patent's published infinity zoom positions plus a paraxial close-focus reconstruction from Sony's official 1.2 m minimum focus distance. The reconstruction moves Gr1R objectward by approximately 12.795 mm at all three zoom positions. This leaves the front focus gap d5 at about 0.915 mm and increases d9 by the same amount.

| Zoom position | d5 at infinity | d5 at 1.2 m model | d9 at infinity | d9 at 1.2 m model | Paraxial magnification at 1.2 m |
|---|---:|---:|---:|---:|---:|
| Wide | 13.710 mm | 0.914722 mm | 1.980 mm | 14.775278 mm | -0.0788 |
| Middle | 13.710 mm | 0.914737 mm | 15.965 mm | 28.760263 mm | -0.1153 |
| Tele | 13.710 mm | 0.914787 mm | 29.959 mm | 42.754213 mm | -0.2142 |

The telephoto close-focus magnification of approximately 0.214× agrees with Sony's published maximum magnification of 0.21× within the expected tolerance of a paraxial reconstruction. The close-focus row should still be treated as an implementation model, not as a direct patent disclosure.

## Aspherical Surfaces

Example 1 is all-spherical. The patent states that aspherical surfaces are marked by an asterisk next to the radius number and then defined by an aspheric sag equation. The Example 1 prescription on pages 15-17 has no asterisked radius and no aspherical coefficient table for the example.

The correct data-file representation is therefore:

```ts
asph: {}
```

This matters analytically. Some secondary summaries of this lens family have implied aspherical content, but neither the patent's Example 1 construction table nor Sony's first-party SAL70200G description identifies an aspherical element. The all-spherical correction instead comes from cemented achromats, distributed ED/AD elements, the split positive inner-focus first group, and a carefully structured negative variator.

## Conditional Expressions

The patent conditions were recalculated directly from the Example 1 prescription using surface powers $\phi = (n' - n)/R$ and a sequential paraxial ABCD trace in $(y, n u)$ coordinates.

| Patent condition | Recalculated value | Result | Meaning |
|---|---:|---|---|
| $-1.5 < f_{1r1}/f_{1r} < -0.1$ | -1.247742 | Pass | L4 is strong enough to stabilize focus aberrations |
| $-5 < f_{23}/f_2 < -0.6$ | -2.667584 | Pass | L9 moderates Gr2 field curvature |
| $1 < f_{24}/f_2 < 4.5$ | +3.782044 | Pass | L10 closes Gr2 without excessive power |
| $-100 < f_{If1}/f_{If} < 1$ | -8.113286 | Pass | L14 is weak but functionally placed near the stop |
| $0.5 < f_{If}/f_{If23} < 1.5$ | +1.175532 | Pass | L15-L16 supplies most of Gr4f power |
| $2.5 < f_{Ir}/f_I < 1000$ | +4.890273 | Pass | Rear sub-group Gr4r is weaker than full Gr4 but meaningful |
| $-0.35 < f_{Ir2}/f_{Ir} < -0.01$ | -0.110694 | Pass | L18 is the intended rear negative field corrector |

The Petzval sum, recalculated surface by surface as $\sum \phi/(n n')$, is $+0.001371776\ \mathrm{mm}^{-1}$, corresponding to an approximate Petzval radius of $-728.98$ mm under the sign convention used here. This is a small field-curvature term relative to the focal-length scale and is consistent with the design's distributed rear correction.

## Data-File Implementation Notes

The `.data.ts` file transcribes the patent prescription directly from the front surface through the final image plane. It excludes sensor cover glass, filters, and all mechanical parts.

The patent does not publish semi-diameters. The data file therefore uses conservative estimated semi-diameters rather than official production clear apertures. The estimates were constrained by the production 77 mm filter class, the patent drawing proportions, edge thickness, front/rear surface diameter ratios, and cross-gap sag intrusion over the zoom and reconstructed focus ranges. The resulting values are adequate for rendering and paraxial inspection but should not be used as manufacturing data.

The final surface's distance to image is carried as a zoom-only variable back focus because the recalculated BFD changes by about 0.005 mm across the three zoom positions due to patent rounding. This preserves the paraxial image plane for each position in the viewer.

## Verification Summary

The independent paraxial check used ray vector $(y, n u)$. Each refracting surface applied $q' = q - \phi y$, followed by translation $y' = y + d q'/n'$.

| Zoom position | Patent focal length | Recalculated EFL | Recalculated BFD |
|---|---:|---:|---:|
| Wide | 71.8 mm | 71.756668 mm | 51.216172 mm |
| Middle | 105.0 mm | 105.008403 mm | 51.216068 mm |
| Tele | 195.0 mm | 195.006309 mm | 51.211360 mm |

The EFL match verifies the surface transcription. The nearly constant BFD and the conserved $d9+d18+d23$ sum verify the zoom-gap assignment. The stop semi-diameter derived from $F_{no}=2.88$ is constant to within paraxial rounding across all three positions. Edge-thickness, element-ratio, and cross-gap checks were rerun for the estimated semi-diameters before delivery.

Element focal lengths in this document are standalone in-air thick-lens focal lengths. Group focal lengths and patent-condition values are sequential paraxial group values for the stated ranges. Those quantities are intentionally not interchangeable.

## Sources / References

- JP 2004-109559 A, *Zoom Lens System* (`ズームレンズ系`), Minolta Co., Ltd., filed 2002-09-19, published 2004-04-08; Example 1, Fig. 1, and pages 15-17 construction data.
- Sony Corporation, *Lenses and Accessories Selection Guide*, SAL70200G product page and lens technology notes.
- Sony Corporation, *SAL70200G 70-200mm F2.8 G Operating Instructions*, Sony document family for SAL70200G.
- HOYA Group Optics Division, *Glass Cross Reference Index* and relevant product sheets for E-FD1L, E-LAF7, FF5, NBFD15/NBFD15-W, and related glass families.
- Ohara and Schott public catalog/cross-reference data for S-TIM2, S-TIH1, S-PHM52, S-FTM16, N-PSK53A, N-SF57, N-LAF7, and N-LAF3 class comparisons.
