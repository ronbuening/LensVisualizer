# NIKON AI AF DC-NIKKOR 105mm f/2 D

## Patent Reference and Design Identification

**Patent:** US 4,908,639 A<br>
**Application Number:** US 07/334,157<br>
**Priority:** 11 April 1988 (Japan 63-88454)<br>
**Filed:** 6 April 1989<br>
**Granted:** 13 March 1990<br>
**Inventor:** Masaaki Yanagisawa<br>
**Assignee:** Nikon Corporation<br>
**Title:** *Optical System Having a Variable Out-of-Focus State*<br>
**Embodiment analyzed:** Example 1 / Table 1

Example 1 is the fixed patent correlation for the NIKON AI AF DC-NIKKOR 105mm f/2 D represented here. The patent publishes a 105 mm, f/2, six-element/six-group design with a 23° full field, a rear-focus group, and an independent variable-spacing mechanism intended to alter the appearance of defocused foreground and background while retaining a sharp main subject. Its first embodiment is shown in Figure 3 and numerically specified in Table 1 and claim 4. The prescription is entirely spherical and is stated for the d line at 587.6 nm. (US 4,908,639, Fig. 3; Table 1; cols. 5–10.)

The production correlation rests on several convergent facts:

1. The patent example is nominally 105 mm f/2, matching Nikon's marketed focal length and maximum aperture.
2. Both the patent example and Nikon's production specifications use six elements in six groups.
3. The patent assigns focusing to the positive rearward group and uses a separate variable spacing between the positive first group and negative second group to control the out-of-focus state. Nikon describes the production lens as using Rear Focusing (RF) and Defocus Image Control (DC).
4. The patent's 23° full field closely corresponds to Nikon's marketed 23°20′ FX angle of view; these are kept separate as design and marketed values rather than forced to agree.
5. The patent was granted in 1990, while Nikon records the AI AF DC Nikkor 105mm f/2D as released in September 1993.

Nikon's manufacturer literature does not identify US 4,908,639 as the exact production prescription. The correlation therefore remains the selected patent-to-product mapping rather than a manufacturer-confirmed disclosure of production radii, spacings, or glass melts. Nikon specifies the production lens as Nikon F-bayonet, FX format, 105 mm f/2, 6 elements in 6 groups, 23°20′ FX angle of view, 0.9 m minimum focus, 0.13× maximum reproduction, nine diaphragm blades, Rear Focusing, and Defocus Image Control. [Nikon product specifications][nikon-specs]

## Optical Architecture

The patent architecture is best described directly by its functional groups rather than by forcing it into a classical named family. From object to image it consists of a positive forward group `GF`, the aperture stop, and a positive rearward group `GR`. The forward group itself is split into positive `G1` and negative `G2`. The resulting functional power sequence is therefore positive–negative before the stop, followed by a positive rear group.

The design contains six air-separated spherical elements in six groups. There are no cemented interfaces, no aspherical surfaces, and no scaling from the patent's published millimetre prescription. The isolated paraxial group focal lengths computed from the final prescription are approximately +79.449 mm for G1, −80.121 mm for G2, +191.544 mm for the combined forward group GF, and +86.575 mm for GR. These are standalone group EFLs evaluated from the prescription; they should not be read as additive in-situ contributions to the complete 104.944 mm system.

The distinguishing architectural choice is that G2 is both optically strong and axially adjustable relative to G1. The patent uses that separation to change spherical aberration and coma, while allowing astigmatism to change in a coordinated way so that the image field remains usable. GR then serves two purposes: ordinary rear focusing and image-plane compensation when the DC spacing is changed. (US 4,908,639, cols. 5–8.)

Although the patent describes the invention as a great-relative-aperture long-focus lens, the LensVisualizer terminology does not classify this prescription as telephoto. The verified first-surface-to-image track is 127.5752 mm and the infinity EFL is 104.9440 mm, giving `TL/EFL = 1.21565`, above the project criterion `TL/EFL < 1`. It is likewise not retrofocus: the published infinity back focal spacing of 52.7752 mm is less than the EFL.

The patent places stop `S` between G2 and GR in Figure 3 but gives no numerical stop coordinate or diameter. Metric extraction from Figure 3 places the stop at approximately `z = 36.000 mm` from surface 1, 8.000 mm behind surface 6 in the corrected infinity state. The model inserts one explicit `STO` plane at that axial station and keeps it fixed while G2 and GR execute the patent-published DC motions; Figure 3 brackets `S` separately from G2, and the patent's movement description names G2 and GR—not the stop—as the DC movers. The inferred stop semi-diameter is 15.696454 mm, selected so the verified entrance pupil reproduces the modeled f/2 aperture. Position and diameter remain modeling inferences rather than tabulated patent values.

The clear semi-diameters are also modeling quantities because the patent does not tabulate them. They were derived from the Figure 3 section and checked against ray envelopes and current geometry rules. The principal deliberate departure from the drawing estimate is L3: Figure 3 implies approximately 19.98–20.0 mm, while the model uses 19.5 mm so surfaces 4 and 5 retain positive rim clearance across their 2.5 mm air gap under the current cross-gap policy.

Nikon's production manual separately lists a protective glass lens covering. It is not part of the six-element Example 1 prescription and is excluded from this patent model. [Nikon lens manual][nikon-manual]

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.670249, νd = 57.53. Glass: 670575 — J-LAK02 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +79.449492 mm.`

L1 is the complete first lens group G1. The patent explicitly describes the first embodiment's G1 as a positive meniscus whose convex surface faces the object. As the foremost positive group, it establishes the ray-height distribution presented to G2 and supplies substantial positive power before the stop. (US 4,908,639, col. 7.)

In the published operating scheme G1 remains fixed while G2 changes position for defocus control and GR moves for focusing. L1's standalone focal length is therefore also the standalone focal length of G1; no cemented or grouped-power distinction is required for this element.

### L2 — Positive Meniscus

`nd = 1.693500, νd = 53.72. Glass: 694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved. f = +120.613524 mm.`

L2 is the positive front member of the two-element G2 assembly. Its own power is positive, but it works with the much stronger negative L3 so that G2 as a whole has a verified isolated EFL of −80.121275 mm.

The internal L2–L3 geometry remains fixed in all four patent states. Defocus control changes the air spacing ahead of L2, moving the complete G2 assembly relative to G1 rather than changing the spacing between L2 and L3. This distinction matters because the patent's aberration-control mechanism belongs to the motion of the negative group as a unit, not to an internal floating separation within G2.

### L3 — Negative Meniscus

`nd = 1.688930, νd = 31.08. Glass: 689311 — S-TIM28 (OHARA) coordinate-compatible spectral proxy; production supplier unresolved. f = −42.522864 mm.`

L3 is the strong negative member that makes the combined G2 group negative despite L2's positive standalone power. Its position after L2 and before the stop gives the moving G2 assembly the leverage required by the patent's spherical-aberration and coma control scheme.

The modeled L3 clear semi-diameter is 19.5 mm. This is not a patent prescription value: the Figure 3 drawing implies a value near 20 mm, but that full drawing-derived radius would leave insufficient modeled rim clearance across the preceding 2.5 mm air gap. The smaller clear aperture preserves the source silhouette closely while satisfying the current geometric validation policy.

### L4 — Negative Meniscus

`nd = 1.717360, νd = 29.46. Glass: 717295 — supplier-neutral optical glass code. f = −62.157172 mm.`

L4 is the negative front member of GR. The rearward group nevertheless has positive net power because the following L5 and L6 are both positive. The negative-positive-positive sequence produces a verified isolated GR focal length of +86.574880 mm.

GR is the moving focusing group described by the patent. L4 therefore participates in both the ordinary rear-focus displacement from infinity toward the finite conjugate and the smaller image-plane compensation displacement associated with DC adjustment. Assigning a more specific aberration-correction role to L4 alone would go beyond the source; the patent treats GR functionally as a group.

### L5 — Positive Meniscus

`nd = 1.766840, νd = 46.80. Glass: 767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +87.173975 mm.`

L5 is the positive middle member of GR. Together with L6 it overcomes L4's negative standalone power and gives the moving rear group its positive net power. The element is air separated from both neighbors, so its listed focal length is an isolated single-element result rather than a cemented-group quantity.

Because the patent assigns focusing and image-plane compensation to GR as a whole, L5 moves with L4 and L6 in every published rear-group displacement. Its role is therefore best interpreted in the context of the complete positive rear group rather than as an independently floating corrector.

### L6 — Biconvex Positive

`nd = 1.796681, νd = 45.37. Glass: 797454 — J-LASF017 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved. f = +83.162594 mm.`

L6 is the final positive element and the second positive member of GR. Its biconvex form closes the six-element prescription immediately ahead of the published back focal spacing.

The final surface-to-image spacing changes whenever GR moves, but the physical image plane remains fixed in the four published states. L6 therefore translates with the rest of GR while the back focal gap changes by the equal and opposite amount needed to retain the common image-plane station.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify glass manufacturers or melt names, and it supplies no `nC`, `nF`, `ng`, Sellmeier coefficients, partial-dispersion ratios, or `dPgF` values. The final data retains the source coordinates and uses compatible catalog curves as spectral proxies without promoting them to production-glass identities.

| Element | Glass annotation | nd | νd | Standalone f (mm) | Functional location |
|---|---|---:|---:|---:|---|
| L1 | 670575 — J-LAK02 spectral proxy; supplier unresolved | 1.670249 | 57.53 | +79.449492 | G1 |
| L2 | 694537 — H-LaK6A spectral proxy; supplier unresolved | 1.693500 | 53.72 | +120.613524 | G2, positive member |
| L3 | 689311 — S-TIM28 spectral proxy; supplier unresolved | 1.688930 | 31.08 | −42.522864 | G2, negative member |
| L4 | 717295 — supplier-neutral optical glass code | 1.717360 | 29.46 | −62.157172 | GR, negative member |
| L5 | 767468 — J-LASFH2 spectral proxy; supplier unresolved | 1.766840 | 46.80 | +87.173975 | GR, positive member |
| L6 | 797454 — J-LASF017 spectral proxy; supplier unresolved | 1.796681 | 45.37 | +83.162594 | GR, positive member |

The dispersion spread is visible in the published `nd`/`νd` pairs, but Abbe data alone is not sufficient to establish anomalous partial dispersion, apochromatic correction, or exact secondary-spectrum behavior. No APO or anomalous-dispersion claim is therefore made for this prescription.

## Focus Mechanism

The patent uses rear focusing. In the corrected state, G1 and G2 retain their mutual 5.0000 mm spacing while GR translates toward the object as the lens focuses from infinity to the published finite conjugate. The four patent rows are not zoom positions; they are one infinity state and three finite states that combine focus with spherical-aberration control. (US 4,908,639, Table 1.)

| Published state | d2: G1→G2 (mm) | d6: G2→GR total (mm) | Bf (mm) |
|---|---:|---:|---:|
| Infinity, corrected | 5.0000 | 30.0000 | 52.7752 |
| 1:30, corrected | 5.0000 | 25.2089 | 57.5663 |
| 1:30, under-corrected | 5.2000 | 25.3702 | 57.2050 |
| 1:30, over-corrected | 4.9000 | 25.1293 | 57.7459 |

At the corrected 1:30 state the patent gives `D0 = 3100.4970 mm` from the object to surface 1 and a rounded magnification `β = −0.0333`. The verified model keeps the surface-1-to-image track at 127.5752 mm in every published state, so the finite endpoint corresponds to 3.2280722 m from object to image plane. That 3.228 m value is the LensVisualizer `closeFocusM` because it is the nearest internally modeled published state.

This is deliberately different from Nikon's marketed 0.9 m minimum focus distance. No unreported internal spacing has been invented to extend the patent prescription to 0.9 m. Nikon's 0.9 m figure remains a production specification, while the modeled focus endpoint remains the patent's 1:30 state. [Nikon product specifications][nikon-specs]

From infinity to the corrected finite state, the front vertex of GR moves 4.7911 mm toward the object. The image plane does not move. In the corrected focus path, the inferred stop splits the patent's single `d6` air space: surface 6 to `STO` remains 8.0000 mm, while the spacing from `STO` to GR changes from 22.0000 to 17.2089 mm. The final surface-to-image spacing correspondingly changes from 52.7752 to 57.5663 mm. During DC adjustment, both sub-gaps around the inferred stop vary so that the stop itself remains at the Figure-3-derived `z = 36.000 mm` station.

The focus status is therefore `PUBLISHED` at the two corrected endpoints. LensVisualizer interpolates between those endpoint spacings for the focus slider, but that interpolation is a display model rather than a separately published Nikon mechanical cam law.

## Defocus Image Control Mechanism

The patent's central mechanism is not conventional soft focus. Its stated objective is to keep the main object sharply imaged while altering the character of defocused foreground or background by changing spherical aberration and coma; astigmatism is allowed to change with them so that field flatness remains controlled. (US 4,908,639, cols. 2–7.)

With G1 fixed, moving the negative G2 group toward the image side produces the patent's under-corrected state. Moving G2 toward the object produces the over-corrected state. GR then moves in the same axial direction as G2 to compensate the accompanying image-plane shift. The patent's finite rows quantify those motions relative to the corrected 1:30 state:

- Under-correction moves G2 0.2000 mm imageward and GR 0.3613 mm imageward.
- Over-correction moves G2 0.1000 mm objectward and GR 0.1796 mm objectward.

The resulting DC motion is encoded independently from the ordinary focus motion. At the published finite endpoint, the model's `R / UNDER`, center, and `F / OVER` settings reproduce the patent's under-corrected, corrected, and over-corrected rows exactly while holding the inferred stop at `z = 36.000 mm`. This requires surface-6-to-stop spacings of 7.8000, 8.0000, and 8.1000 mm and corresponding stop-to-GR spacings that preserve each patent `d6` total. Nikon's production manual uses the same R/F user terminology: turning the DC ring toward `R` is specified for background blur and toward `F` for foreground blur. [Nikon lens manual][nikon-manual]

The patent publishes the under- and over-corrected numerical rows only at the 1:30 finite conjugate. It does not supply a continuous two-dimensional focus-by-DC spacing law. LensVisualizer necessarily layers the same DC spacing deltas over intermediate focus positions so the two controls can coexist in the interface. Those off-plane focus×DC combinations are a disclosed mechanism-constrained visualization, not published patent states and not a claim about Nikon's production cam geometry.

## Conditional Expressions

The patent gives three power-ratio conditions for the design. Using the independently recomputed isolated group focal lengths together with the patent's stated complete-system focal length `f = 105 mm` reproduces Table 3 as follows:

| Patent condition | Verified value | Result |
|---|---:|---|
| `0.5 < |f2/f| < 1.0` | 0.76306 | Satisfied |
| `0.5 < |f1/f2| < 1.5` | 0.99162 | Satisfied |
| `0.7 < fR/f < 0.9` | 0.82452 | Satisfied |

The first condition constrains the negative G2 power relative to the complete system so that spherical aberration, coma, and astigmatism can be varied with practical group travel. The second constrains the G1/G2 power balance and, in the patent's discussion, also bears on movement magnitude and manufacturable edge thickness. The third applies specifically to the positive rear-focus group and is intended to limit focusing travel and aberration variation at short distance. (US 4,908,639, cols. 6–8; Table 3.)

## Verification Summary

Independent paraxial calculation from the final TypeScript arrays gives an infinity EFL of 104.944017 mm against the patent's nominal 105 mm. The residual is consistent with the source precision of radii, spacings, and six-decimal indices. The infinity back focal length calculated from the last optical surface is 52.774316 mm versus the published 52.7752 mm, and the ABCD determinant is unity to floating-point precision.

The inferred stop model gives an entrance-pupil diameter of 52.472010 mm and a modeled f-number of 1.99999996. Because the patent specifies f/2 but does not tabulate stop size or position, this agreement validates the chosen model internally; it does not convert the stop inference into a source fact.

The finite corrected, under-corrected, and over-corrected states reproduce the patent's published `d2`, total `d6`, and `Bf` values exactly, and the corrected stop model keeps the inferred `STO` plane at `z = 36.000 mm` in all three DC states. Their independently traced magnifications are −0.0333425, −0.0334099, and −0.0333086 respectively, consistent with the patent's rounded `−0.0333` value.

The Figure-3-derived clear apertures also pass the local geometric checks used for this model. All element edge thicknesses remain positive, with the smallest at 2.253 mm; the largest spherical rim-slope angle is 48.192°, below the current 64.2° limit; and every endpoint focus/DC state satisfies the cross-gap clearance checks. A fresh exact spherical Snell trace of the representative 6.9° off-axis bundle remains inside all glass clear apertures in each of the four exact published states, with the highest checked surface-fill ratio approximately 0.994 at corrected infinity focus.

The independently summed Petzval contribution, using `φ/(n·n′)` surface by surface, is `+0.001347915 mm⁻¹`, corresponding to a signed Petzval radius of approximately +741.886 mm under the adopted convention. This is a computed diagnostic rather than a patent-tabulated quantity.

No source values were silently corrected, no uniform scale was applied, and no continuous production minimum-focus prescription was reconstructed. The model's departures from direct source transcription are limited to the Figure-3-derived fixed stop position and inferred stop diameter, inferred clear semi-diameters, the L3 clear-aperture reduction required for geometric clearance, and the interface-driven interpolation/layering of published movement endpoints.

## Sources and References

1. **US 4,908,639 A**, Masaaki Yanagisawa, *Optical System Having a Variable Out-of-Focus State*, Nikon Corporation, granted 13 March 1990. Primary prescription source: Example 1 / Table 1, Figure 3, Table 3, and claim 4.
2. **Nikon USA**, AF DC-NIKKOR 105mm f/2D product specifications: 105 mm f/2, Nikon F-bayonet, FX, 6 elements/6 groups, 23°20′ FX angle, 0.9 m MFD, 0.13× reproduction, 9 blades, Rear Focusing, and De-Focus Control. [Product page][nikon-specs]
3. **Nikon**, AF DC-Nikkor 105mm f/2D instruction manual. Manufacturer source for Rear Focusing, DC-ring R/F operation, 6-element/6-group specification, 0.9 m focus scale, 23°20′ angle of view, Nikon F mount, and the separately listed protective glass lens covering. [Instruction manual][nikon-manual]
4. **Nikon Imaging**, *NIKKOR — The Thousand and One Nights No. 59*. Historical manufacturer source identifying September 1993 as the release of the AI AF DC Nikkor 105mm f/2D. [Historical article][nikon-history]

[nikon-specs]: https://www.nikonusa.com/p/af-dc-nikkor-105mm-f2d/1932/overview
[nikon-manual]: https://download.nikonimglib.com/archive2/MDXKK00KX4kn0262kin065ixa945/AFDC105_2D_%2827_DL%2902.pdf
[nikon-history]: https://imaging.nikon.com/imaging/information/story/0059/index.html
