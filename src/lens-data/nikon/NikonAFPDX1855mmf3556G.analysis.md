# Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 10,690,896 B2  
**Application Number:** 15/576,805; PCT/JP2016/065603  
**Priority Date:** May 29, 2015 (JP 2015-110078)  
**Filed:** May 26, 2016 (PCT); March 6, 2018 (US national phase)  
**Granted:** June 23, 2020  
**Inventors:** Kosuke Machida, Takeshi Suzuki, Takeru Uehara  
**Assignee:** Nikon Corporation  
**Title:** Variable Magnification Optical System, Optical Device, and Production Method for Variable Magnification Optical System  
**Embodiment analyzed:** First Example, FIG. 1 and Table 1

The First Example is the closest prescription match for the Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR. The patent example is a six-group negative-positive-negative-positive-negative-positive zoom covering f = 18.50, 35.00, and 53.40 mm at the wide, middle, and telephoto positions. Its stated F-numbers are 3.64, 4.62, and 5.88, with maximum image height Y = 14.25 mm. That gives a 28.50 mm image circle, matching Nikon DX format rather than a full-frame design.

The production match is supported by the same 18-55 mm class focal-length range, DX coverage, two aspherical elements, 12-element/9-group manufacturer count, AF-P stepping-motor focus system, and VR version of the lens. Nikon's public description identifies the lens as a 3.1× 18-55 mm DX normal zoom using two aspherical lens elements, a stepping motor for AF drive, and a VR mechanism rated at 4.0 stops at the telephoto end. The patent, in turn, identifies the second lens group as the vibration-reduction group and the third lens group as the focusing group.

The data file follows the patent's First Example exactly for radii, center thicknesses, refractive indices, Abbe numbers, variable zoom gaps, group focal lengths, and aspherical coefficients. The only non-patent geometric inputs are the semi-diameters, because Table 1 does not publish clear-aperture radii. These were estimated from ray-envelope and mechanical-clearance constraints and then reduced where necessary to maintain edge thickness and cross-gap sag clearance.

## Optical Architecture

The design is a compact DX-format negative-lead zoom. Its first group is negative, which supplies the wide-angle back-focus clearance required by a Nikon F-mount APS-C SLR lens. The group-power sequence is:

| Patent group | Elements | Power | Function |
|:--:|:--|:--:|:--|
| G1 | L11 hybrid, L12+L13 | Negative | Front field collector and wide-angle lateral-color correction |
| G2 | L21 | Positive | Zoom member and vibration-reduction group |
| G3 | L31 | Negative | Single-element inner-focus group |
| G4 | L41, L42+L43, stop | Positive | Principal relay group and stop-bearing positive group |
| G5 | L51+L52 | Negative | Aberration-compensating negative doublet |
| G6 | L61, L62 | Positive | Rear relay and image-side correction group |

The patent's zoom table gives variable gaps d6, d8, d10, d16, d19, and Bf. From the wide to telephoto state, d6 closes from 33.51 mm to 3.41 mm; this is the dominant zooming motion between G1 and the linked positive body. G2, G4, and G6 move together as a linked body. G3 floats in the fixed axial pocket between G2 and G4, while G5 floats in the fixed pocket between G4 and G6.

Two fixed-pocket relationships are important. Across all three zoom positions, d8 + L31 thickness + d10 = 9.99 mm, so the focusing lens L31 moves within a constant G2-G4 pocket. Likewise, d16 + G5 thickness + d19 = 13.84 mm, so G5 floats between the stop/G4 assembly and G6 without changing the linked-body spacing. This mechanical regularity is consistent with a low-cost retractable kit zoom: the barrel can be compact while still carrying separate focus, VR, and aberration-compensation functions.

## Element-by-Element Analysis

### L11 — Negative meniscus with bonded resin asphere

nd = 1.58913, νd = 61.22. Glass: J-SK5 (HIKARI); S-BAL35 / P-SK58A class. f = −42.34 mm for the glass body; f = −37.37 mm for the glass-plus-resin composite.

L11 is the front negative field-collecting element. Its glass body is a negative meniscus convex to the object side, followed by a thin resin layer on the image-side surface. The resin layer carries the aspherical surface at patent surface 3. The patent text explicitly describes the first lens as a glass negative meniscus whose image-side surface is formed with an aspherical resin surface.

The resin layer has nd = 1.56093 and νd = 36.64 and contributes only weak additional negative power by itself, approximately f = −324.42 mm. Its main optical purpose is not bulk power but economical placement of a strong aspherical correction near the front of the system, where chief-ray heights are large and distortion/field-curvature control is effective.

### L12 — Negative meniscus in G1 cemented doublet

nd = 1.62299, νd = 58.12. Glass: J-SK15 (HIKARI); N-SK15 / S-BSM15 / BACD15 class. f = −30.61 mm.

L12 is the negative front member of the G1 rear cemented doublet. Its front surface is very weak, while the cemented interface to L13 is strongly curved. This places most of the element's paraxial power and chromatic contribution at the internal interface, where it can be paired directly with the following high-dispersion positive element.

### L13 — Positive meniscus in G1 cemented doublet

nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI); S-TIH53 / dense flint class. f = +39.18 mm.

L13 is a high-index, high-dispersion positive meniscus. Together with L12 it forms a weak negative doublet with f = −105.42 mm. The doublet is therefore not primarily a power generator; it is a chromatic and off-axis-aberration correction unit in the front negative group. The patent specifically prefers a first group that includes a negative lens cemented to a positive lens for correction of wide-angle aberrations.

### L21 — Biconvex positive, G2 / VR group

nd = 1.48749, νd = 70.31. Glass: J-FK5 (HIKARI); S-FSL5 / N-FK5 class. f = +76.67 mm.

L21 is the only element in G2. It participates in zooming as part of the linked G2-G4-G6 body and is also the vibration-reduction element. The patent states that vibration reduction is performed by moving the second lens group with a component perpendicular to the optical axis. A single positive singlet is a practical choice for a low-inertia VR group in a small APS-C zoom.

The low-dispersion FK glass keeps the chromatic burden of this positive moving element modest. It is not an ED glass in the usual photographic sense, but νd = 70.31 is substantially lower-dispersion than ordinary crown glass at similar index.

### L31 — Negative meniscus, G3 focusing group

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (HIKARI); S-LAH66 / N-LAF34 / TAF1 class. f = −60.90 mm.

L31 is the entire G3 group and is the lens's inner-focus element. It is a single thin negative meniscus that moves toward the object side when focusing from infinity to a closer subject. The patent describes this negative third group as the focusing group and emphasizes the advantage of keeping the focusing group small and light.

At infinity, L31 sits inside the constant G2-G4 pocket. The data file includes paraxially inferred close-focus values for Nikon's 0.25 m minimum focus distance by translating only L31 and holding the image plane fixed. At the telephoto state, the inferred L31 object-side shift is 4.06 mm, giving paraxial magnification about 0.387×, consistent with Nikon's stated 0.38× maximum reproduction ratio.

### L41 — Biconvex positive, front element of G4

nd = 1.48749, νd = 70.31. Glass: J-FK5 (HIKARI); S-FSL5 / N-FK5 class. f = +39.35 mm.

L41 is the front positive singlet of G4. It begins the main converging relay ahead of the stop and helps keep the relay group's chromatic error moderate by using the same low-dispersion FK glass as L21 and L42.

### L42 — Biconvex positive in G4 cemented doublet

nd = 1.48749, νd = 70.31. Glass: J-FK5 (HIKARI); S-FSL5 / N-FK5 class. f = +26.88 mm.

L42 is the strongest standalone positive element in the prescription. Its nearly symmetric radii, +25.50 and −25.50 mm, make it a compact positive power source ahead of the aperture stop. Cementing it to L43 converts that strong positive element into an achromatized positive doublet with combined f = +52.82 mm.

### L43 — Negative meniscus in G4 cemented doublet

nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI); S-TIH53 / dense flint class. f = −52.43 mm.

L43 is the high-dispersion negative partner in the G4 doublet. The L42/L43 pairing is a conventional low-dispersion positive plus high-dispersion negative achromatizing structure. The patent describes G4 as containing a single positive lens and a cemented lens for correction of spherical aberration and longitudinal chromatic aberration.

### Aperture stop

The stop is listed as surface 16 in the patent table and lies after L43. In the data file it is labeled `STO`. The stop moves with G4 during zooming. Its placement near the strong relay groups keeps chief-ray height under control and helps preserve the compact rear layout.

### L51 — Positive meniscus in G5 cemented doublet

nd = 1.75520, νd = 27.57. Glass: J-SF4 (HIKARI); S-TIH4 / N-SF4 / E-FD4 class. f = +26.09 mm.

L51 is a positive element made from a high-dispersion dense flint. That is not a conventional positive crown choice; it is used here because G5 as a cemented pair is a negative aberration-correction group, not a simple positive relay group. L51's high dispersion and strong cemented interface prepare the following negative element to generate a net negative doublet with controlled chromatic behavior.

### L52 — Biconcave negative in G5 cemented doublet

nd = 1.70154, νd = 41.02. Glass: J-BASF7 (HIKARI); S-BAH27 / BAFD7 class. f = −14.51 mm.

L52 is the strong negative rear member of G5. The L51/L52 cemented group has f = −31.47 mm and constitutes the fifth group's negative power. It floats between the stop/G4 side and G6 as the zoom changes, correcting zoom-dependent field and coma behavior in the rear half of the lens.

### L61 — Weak positive plastic asphere in G6

nd = 1.52444, νd = 56.21. Material: optical plastic specified by patent index, no public glass-catalog match. f = +1411.95 mm.

L61 is a near-zero-power positive meniscus whose rear surface, patent surface 21, is aspherical. The patent identifies this element as a plastic lens in the most image-side group. Its power is negligible compared with L62, so its purpose is mainly aspherical correction rather than focal-length contribution.

Because it is weakly powered, L61 can correct residual field-dependent aberrations without adding much chromatic or thermal sensitivity. Placing the plastic element before the final glass element also keeps the user-exposed rear element as glass, a durability preference noted in the patent.

### L62 — Rear positive meniscus

nd = 1.51680, νd = 63.88. Glass: J-BK7A (HIKARI); S-BSL7 / N-BK7 class. f = +48.14 mm.

L62 supplies most of G6's positive power. It is the final glass element before the image plane, and its strong rear surface contributes to final convergence and image-side field control. The patent's durability rationale for a glass final element applies directly here.

## Glass Identification and Selection

The prior draft over-identified several glasses as OHARA types that do not match the stored nd/νd pairs. The corrected data file uses HIKARI J-series exact matches where available, with cross-vendor classes listed only as equivalents. This is consistent with a Nikon patent because HIKARI is Nikon's optical-glass affiliate and publishes J-series catalog data matching these six-digit glass codes.

| Element | nd | νd | Corrected catalog identification | Note |
|:--|--:|--:|:--|:--|
| L11 glass | 1.58913 | 61.22 | J-SK5 (HIKARI), 589/612 | Equivalent class includes S-BAL35 / P-SK58A |
| L11 resin | 1.56093 | 36.64 | UV-curable resin | Patent material, not public glass catalog |
| L12 | 1.62299 | 58.12 | J-SK15 (HIKARI), 623/581 | Prior S-PHM52 assignment rejected |
| L13 | 1.84666 | 23.80 | J-SF03 (HIKARI), 847/238 | Dense flint; OHARA S-TIH53-class equivalent |
| L21 | 1.48749 | 70.31 | J-FK5 (HIKARI), 487/703 | OHARA S-FSL5 / Schott N-FK5 class |
| L31 | 1.77250 | 49.62 | J-LASF016 (HIKARI), 773/496 | Prior S-LAH55VS assignment rejected |
| L41 | 1.48749 | 70.31 | J-FK5 (HIKARI), 487/703 | Same as L21 |
| L42 | 1.48749 | 70.31 | J-FK5 (HIKARI), 487/703 | Same as L21 |
| L43 | 1.84666 | 23.80 | J-SF03 (HIKARI), 847/238 | Same as L13 |
| L51 | 1.75520 | 27.57 | J-SF4 (HIKARI), 755/276 | Prior S-TIH14 assignment rejected |
| L52 | 1.70154 | 41.02 | J-BASF7 (HIKARI), 702/410 | Barium dense flint class |
| L61 | 1.52444 | 56.21 | Optical plastic | Patent material, not public glass catalog |
| L62 | 1.51680 | 63.88 | J-BK7A / S-BSL7 / N-BK7 class | Patent νd is slightly below J-BK7A catalog νd; class assignment retained |

The design uses no ED glass. Chromatic correction is obtained through ordinary achromatized pairings: L12/L13 and L42/L43 use crown/FK plus dense-flint pairings, while L51/L52 uses a reversed high-dispersion positive plus moderate-dispersion negative pairing in the floating negative G5 group.

## Focus Mechanism

Focusing is performed by translating only G3/L31 toward the object side. The patent states this direction explicitly. Since the patent gives infinity-focus zoom tables but not close-focus gap tables for the production MFD, close-focus values in the data file are paraxial inferences rather than patent table entries.

The inference holds the image plane fixed, keeps all non-focusing zoom gaps at their patent values, and solves for the L31 shift that images an object located 0.25 m from the image plane. The results are:

| Zoom state | d8 infinity | d8 close | d10 infinity | d10 close | L31 shift object-side | Paraxial magnification |
|:--|--:|--:|--:|--:|--:|--:|
| 18.50 mm | 6.23 | 3.414 | 2.96 | 5.776 | 2.816 | −0.129× |
| 35.00 mm | 7.18 | 3.816 | 2.00 | 5.364 | 3.364 | −0.237× |
| 53.40 mm | 7.40 | 3.338 | 1.78 | 5.842 | 4.062 | −0.387× |

The telephoto value is the relevant maximum-magnification case and aligns with Nikon's 0.38× published maximum reproduction ratio. The sign is the paraxial image-sign convention; the displayed magnification magnitude is approximately 0.39×.

## Aspherical Surfaces

The patent marks surfaces 3 and 21 as aspherical. In the data file these are labeled `3A` and `21A`.

The conic constant required correction during review. The patent equation is written in κ form:

`x = (h²/r) / [1 + sqrt(1 − κ(h/r)²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰ + ...`

LensVisualizer uses the standard conic convention:

`x = (h²/R) / [1 + sqrt(1 − (1 + K)(h/R)²)] + ...`

Therefore the conversion is `K = κ − 1`. Since the patent lists κ = 0.0000 for both surfaces, both data-file conic constants must be K = −1, not K = 0. This is a substantive correction from the prior draft and from the first pass of the data transcription.

| Surface | Patent κ | Data-file K | A4 | A6 | A8 | A10 |
|:--|--:|--:|--:|--:|--:|--:|
| 3A | 0.0000 | −1 | +1.43618E−05 | +3.23919E−08 | −6.25295E−11 | +2.95784E−13 |
| 21A | 0.0000 | −1 | +2.43150E−05 | −6.35221E−09 | +2.24760E−10 | −3.95108E−12 |

At the adopted semi-diameters, the polynomial departure alone is +1.000 mm at h = 14.7 mm on surface 3A and +0.332 mm at h = 11.8 mm on surface 21A. Including the parabolic base surface, the total sags are +7.337 mm and +1.092 mm respectively.

## Image Stabilization

Vibration reduction is performed by G2/L21. The patent states that the second lens group moves in a direction having a component perpendicular to the optical axis. The production VR version is therefore represented by the same optical prescription; the data file annotates L21 as the VR group but does not attempt to model decentered stabilization states.

## Conditional Expressions

The patent's three principal power-balance expressions are satisfied by the First Example. Independent paraxial group calculations give:

| Expression | Patent limit | Patent value | Computed value | Interpretation |
|:--|:--|--:|--:|:--|
| (−fA) / fB | 0.30 < value < 0.60 | 0.52 | 0.524 | G1 negative power balanced against G6 rear positive power |
| (−fC) / fB | 0.40 < value < 0.72 | 0.6711 | 0.671 | G5 negative group balanced against G6 |
| fD / fB | 0.20 < value < 0.50 | 0.49 | 0.487 | G4 positive group close to upper limit relative to G6 |

Here fA is G1, fB is G6, fC is the second group from the image side (G5), and fD is the third group from the image side (G4). The values put the design near the high-power rear-relay side of the allowed range, especially in expression (3).

## Verification Summary

Independent paraxial ray tracing was re-run from the patent prescription using a y-nu ABCD formulation. The computed results match the patent table within rounding error:

| Quantity | Patent value | Computed value |
|:--|--:|--:|
| EFL, wide | 18.50 mm | 18.4999 mm |
| EFL, middle | 35.00 mm | 35.0092 mm |
| EFL, telephoto | 53.40 mm | 53.4187 mm |
| BFL, wide | 43.85 mm | 43.8606 mm |
| BFL, middle | 59.92 mm | 59.9448 mm |
| BFL, telephoto | 75.82 mm | 75.8418 mm |
| G1 focal length | −24.58 mm | −24.5821 mm |
| G2 focal length | +76.67 mm | +76.6672 mm |
| G3 focal length | −60.89 mm | −60.8980 mm |
| G4 focal length | +22.86 mm | +22.8625 mm |
| G5 focal length | −31.47 mm | −31.4718 mm |
| G6 focal length | +46.90 mm | +46.9030 mm |

The Petzval sum was computed surface-by-surface as Σ φ/(n n′), not by thin-lens element approximation. The result is +0.0017618 mm⁻¹, corresponding to a Petzval radius of −567.6 mm under the image-space sign convention used here.

Semi-diameter verification was also re-run after applying the corrected conic convention. The limiting adopted edge thicknesses are approximately 0.43 mm for L21, 0.47 mm for L41, 0.47 mm for L51, 0.43 mm for L62, and 0.475 mm for the L11 resin layer. The maximum sd/|R| ratio is 0.862 on surface 3A. No adopted surface exceeds the renderer's spherical/conic or cross-gap clearance constraints.

## Sources

1. US 10,690,896 B2, Machida, Suzuki, and Uehara, assigned to Nikon Corporation, especially FIG. 1 and Table 1.
2. Nikon Corporation, “AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR / AF-P DX NIKKOR 18-55mm f/3.5-5.6G,” news release, January 5, 2016.
3. Nikon Imaging Japan product page, “AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR.”
4. HIKARI Glass optical-glass catalog, 2023 edition; J-series glass data and individual glass PDFs.
5. OHARA comparative table and optical-glass pocket catalog, used only for cross-vendor class references.
