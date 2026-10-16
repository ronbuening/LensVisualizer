## Patent Reference and Design Identification

**Patent:** JP 2011-48232 A  
**Application Number:** JP 2009-197850  
**Filed:** 28 August 2009  
**Published:** 10 March 2011  
**Inventors:** Koji Hoshi; Kyoichi Miyazaki; Noriyuki Adachi  
**Applicant:** Panasonic Corporation  
**Title:** Optical system enabling short-distance photography and optical device using the same  
**Embodiment analyzed:** Numerical Example 3; Figure 7 and the numerical tables on PDF pages 11–12.

The file transcribes the selected patent example as a model of the Panasonic LEICA DG MACRO-ELMARIT 45mm f/2.8 ASPH. MEGA O.I.S. (H-ES045). The match is a convergent design attribution, not a Panasonic statement that the patent is the exact manufactured prescription.

1. Panasonic specifies fourteen elements in ten air-separated groups, including one aspherical element and one ED element. Example 3 has that topology, including four cemented pairs.
2. The official construction diagram marks the third physical element as aspherical and the eleventh as ED. The patent's only asphere is the rear surface of L3, S5; L11 carries the 1.49700/81.6 low-dispersion coordinate.
3. The patent gives 45.90 mm focal length and 26.5° full field; Panasonic markets 45 mm and 27°. These quantities remain distinct.
4. The Japanese product page identifies three-group floating inner focusing and optical stabilization. The patent describes three axial focus groups surrounding a separate laterally movable stabilization group.
5. The 2009 application date is consistent with Panasonic's listed 2009 release year. Timing supports the identification but does not prove it.

The production mount is Micro Four Thirds and the modeled image format is Four Thirds. Panasonic's approximately 0.15 m minimum focus distance is not used to infer the patent's distance convention or to alter its spacings. The model contains no invented sensor-cover stack.

## Optical Architecture

The design has six functional groups: G1 positive, G2 negative, G3 positive, G4 positive, G5 negative and G6 weakly positive. These functional groups are distinct from the ten air-separated optical groups used in the marketed element/group count.

| Functional group | Elements | Source surfaces | Isolated group focal length, mm | Source role |
|---|---|---|---:|---|
| G1 | L1–L3 | 1–5 | 25.3546 | Fixed front group |
| G2 | L4–L6 | 6–10 | -16.0042 | Imageward focus group |
| G3 | L7 | 11–12 | 68.8345 | Axially fixed OIS group |
| G4 | L8–L11 | 16–22 | 21.9127 | Objectward focus group |
| G5 | L12 | 23–24 | -27.1287 | Independent negative focus singlet |
| G6 | L13–L14 | 25–27 | 279.5522 | Fixed rear group |

Group powers are calculated for each functional group bounded by air. They are not individual aberration contributions. G6's small positive net power results from a cemented negative/positive pair; it is not an unpowered window. Paragraph 0024 associates the rear-group form with field-curvature correction and image-side telecentricity, but does not establish perfect telecentricity at every field and focus state.

The stop is the explicitly tabulated S14, 1.8 mm after S12. Neutral air reference planes S13 and S15 are omitted from the implemented list: 0.5 + 1.3 mm becomes the S12-to-stop gap, and 1.3 mm is added to each tabulated d15 value after the stop. Every refractive vertex and the stop coordinate are preserved. There is no synthetic cement layer.

At infinity the calculated EFL is 45.899615 mm and the first-vertex-to-authored-image distance is 79.405680 mm. The design is not classified as telephoto by track/EFL and does not satisfy BFD > EFL for a retrofocus classification. The last printed image gap is retained rather than replaced by a calculated best-focus plane.

## Element-by-Element Analysis

The focal lengths below are isolated thick-element values in air, calculated from each element's two vertex radii, center thickness and native d-line index. A member of a cemented pair does not have that isolated power in situ. Glass strings identify coordinate classes or modeling proxies; they do not identify the factory supplier or melt.

### L1 — Biconvex Positive

nd = 1.51680, νd = 64.2. Glass: H-K9L (CDGM spectral proxy for 517642; supplier unconfirmed). f = +126.0684 mm.

This is the front positive singlet in G1. Its relatively low index and moderate dispersion distinguish it from the denser cemented pair that follows. The patent assigns the complete G1, rather than this element alone, a fixed positive front-group role.

### L2 — Negative Meniscus

nd = 1.92286, νd = 20.9. Glass: N-SF66 (Schott spectral proxy for 923209; supplier unconfirmed). f = -44.8102 mm.

L2 is the negative member of D1 with L3. It shares S4 directly with L3; the surface enters the downstream glass. Its high dispersion participates in the front cemented pair, but the patent does not isolate an individual aberration budget for L2.

### L3 — Biconvex Positive (1× Asph)

nd = 1.76930, νd = 49.3. Glass: MC-TAF101-100 (HOYA spectral proxy; source 1.76930/49.3 retained; supplier and melt unconfirmed). f = +18.2431 mm.

L3 is the positive member of D1 and terminates G1. Its image-side S5 is the sole asphere in this numerical example. MC-TAF101-100 supplies a qualified catalog spectrum, with n(d) 1.76901534 and νd 49.29 versus the retained source 1.76930/49.3 (residuals −0.00028466 and −0.01). It is the closest current compatible candidate in both coordinates; the curve does not identify the historical molded glass, supplier or melt.

### L4 — Plano-Concave

nd = 1.91082, νd = 35.2. Glass: K-LaSFn23 (Sumita spectral proxy for 911352; supplier unconfirmed). f = -23.0205 mm.

The plane front surface and concave rear surface form a negative singlet at the front of G2. G2 translates imageward during close focusing. The small following air gap between S7 and S8 imposes the most restrictive shared-rim geometry constraint in the model.

### L5 — Biconcave Negative

nd = 1.91082, νd = 35.2. Glass: K-LaSFn23 (Sumita spectral proxy for 911352; supplier unconfirmed). f = -14.1789 mm.

L5 is the negative member of D2, sharing S9 with L6. Together with L4 and L6 it belongs to the negative G2. The large isolated negative power is not the net power of D2 or G2.

### L6 — Positive Meniscus

nd = 1.94595, νd = 18.0. Glass: FDS18 (Hoya spectral proxy for 946180; supplier unconfirmed). f = +18.5091 mm.

L6 is the positive member of D2. Its νd = 18.0 is the Vp used by conditions (1) and (2), not an ED coordinate. Paragraphs 0036–0038 discuss balancing this strongly dispersive positive element against the negative element in the second focus group.

### L7 — Biconvex Positive

nd = 1.72916, νd = 54.7. Glass: TAC8 (Hoya spectral proxy for 729547; supplier unconfirmed). f = +68.8345 mm.

L7 alone forms positive G3. Paragraphs 0028–0032 identify G3 as the laterally moving stabilization group. Its axial position is nominally fixed during focus, and the aperture is placed behind it at a fixed local separation.

### L8 — Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: E-LASF016 (Hikari spectral proxy for 772496; supplier unconfirmed). f = +42.1164 mm.

L8 is the first positive singlet of G4. The complete positive G4 travels objectward during focusing. Its isolated shape and power do not establish a unique contribution to spherical aberration or coma.

### L9 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: J-SF03 (Hikari spectral proxy for 847238; supplier unconfirmed). f = -26.6371 mm.

L9 is the negative member of D3. Its νd = 23.8 supplies Vn in condition (2), paired conceptually with the dispersive positive L6 in G2. The comparison concerns the two moving functional groups, not a cemented pair spanning the stop.

### L10 — Biconvex Positive

nd = 1.72916, νd = 54.7. Glass: TAC8 (Hoya spectral proxy for 729547; supplier unconfirmed). f = +20.9728 mm.

L10 is the positive member of D3. Its source coordinate is shared with L7, although its radii and thickness differ. Equal material coordinates do not imply equal optical power or mechanical function.

### L11 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: H-FK61 (CDGM spectral proxy for 497816; supplier unconfirmed). f = +70.1575 mm.

L11 is the low-dispersion positive singlet at the rear of G4. Its placement matches the ED marking in Panasonic’s official construction diagram. The catalog-compatible proxy does not prove whether the production material is FCD1, a CDGM counterpart, or another coordinate-compatible melt.

### L12 — Biconcave Negative

nd = 1.48749, νd = 70.4. Glass: N-FK5 (Schott spectral proxy for 487704; supplier unconfirmed). f = -27.1287 mm.

L12 alone forms negative G5. It moves independently of G4 and is the lightweight single-element focus group highlighted by paragraph 0027. The source does not provide a continuous mechanical motion law between the three tabulated states.

### L13 — Biconcave Negative

nd = 1.48749, νd = 70.4. Glass: N-FK5 (Schott spectral proxy for 487704; supplier unconfirmed). f = -23.6833 mm.

L13 is the negative front member of the rear cemented pair D4. Its object-side surface is concave toward the object as specified for G6 in paragraph 0023. The paired rear group is weakly positive despite this negative member.

### L14 — Biconvex Positive

nd = 1.83481, νd = 42.7. Glass: J-LASF05 (Hikari spectral proxy for 835427; supplier unconfirmed). f = +23.0058 mm.

L14 is the positive rear member of D4. Its rear surface faces convexly toward image space. The final source BF follows S27 directly; no additional glass surfaces are dimensioned in the numerical table.

The four cemented net powers must be distinguished from the isolated element values above:

| Pair | Elements | Net focal length in air, mm |
|---|---|---:|
| D1 | L2 + L3 | +31.4644 |
| D2 | L5 + L6 | -58.0779 |
| D3 | L9 + L10 | +97.2026 |
| D4 | L13 + L14 | +279.5522 |

## Glass Identification and Selection

The source publishes nd and νd, not commercial glass designations or melt certificates. The following named catalog curves approximate dispersion while preserving the patent's original indices and Abbe numbers; they do not identify the production supplier or melt.

| Element | Source nd / νd | Dispersion proxy | Limit |
|---|---|---|---|
| L1 | 1.51680 / 64.2 | H-K9L (CDGM) | Coordinate-compatible proxy only |
| L2 | 1.92286 / 20.9 | N-SF66 (Schott) | Coordinate-compatible proxy only |
| L3 | 1.76930 / 49.3 | MC-TAF101-100 (Hoya) | Qualified spectral proxy; not an exact material identification |
| L4 | 1.91082 / 35.2 | K-LaSFn23 (Sumita) | Coordinate-compatible proxy only |
| L5 | 1.91082 / 35.2 | K-LaSFn23 (Sumita) | Coordinate-compatible proxy only |
| L6 | 1.94595 / 18.0 | FDS18 (Hoya) | Coordinate-compatible proxy only |
| L7 | 1.72916 / 54.7 | TAC8 (Hoya) | Coordinate-compatible proxy only |
| L8 | 1.77250 / 49.6 | E-LASF016 (Hikari) | Coordinate-compatible proxy only |
| L9 | 1.84666 / 23.8 | J-SF03 (Hikari) | Coordinate-compatible proxy only |
| L10 | 1.72916 / 54.7 | TAC8 (Hoya) | Coordinate-compatible proxy only |
| L11 | 1.49700 / 81.6 | H-FK61 (CDGM) | Coordinate-compatible proxy only |
| L12 | 1.48749 / 70.4 | N-FK5 (Schott) | Coordinate-compatible proxy only |
| L13 | 1.48749 / 70.4 | N-FK5 (Schott) | Coordinate-compatible proxy only |
| L14 | 1.83481 / 42.7 | J-LASF05 (Hikari) | Coordinate-compatible proxy only |

L11 has the 497816 coordinate and uses H-FK61 as a spectral proxy. Its catalog curve gives PgF ≈ 0.53801 and ΔPgF ≈ +0.03147 relative to the Schott normal line, supporting an inferred APD highlight at the production lens's ED position. This is a catalog-based inference, not a patent designation of anomalous glass.

The patent supplies no nC, nF, ng or partial-dispersion measurements. Catalog proxies provide modeled dispersion for all fourteen elements, including MC-TAF101-100 for L3. These approximations do not establish apochromatic performance or measured production chromatic behavior.

## Focus Mechanism

Paragraph 0025 fixes G1, G3 and G6 axially in the intended mechanism while G2, G4 and G5 move by different amounts. The literal spacing rows introduce small residual changes in nominally fixed anchors, including a −0.04922 mm G3 drift relative to the image plane at 0.5×. Their cause is unresolved; displayed-digit rounding does not establish an explanation. Those differences, including the variable BF, remain in the data instead of being silently regularized.

| Source state | d5 | d10 | d15 | d22 | d24 | BF |
|---|---:|---:|---:|---:|---:|---:|
| infinity | 1.73160 | 9.00430 | 10.57370 | 2.09730 | 7.06000 | 15.01368 |
| 0.5x | 5.48230 | 5.22770 | 4.96890 | 4.77560 | 10.00340 | 15.04600 |
| 1x | 9.25130 | 1.48530 | 1.09080 | 8.36650 | 10.27940 | 15.00427 |

All spacings are in mm. The implemented post-stop gap is d15 + 1.3 mm because the neutral S15 reference plane is omitted.

Relative to the infinity first-vertex frame, the 1× state moves the G2 front vertex +7.5197 mm imageward, G4 −9.4822 mm objectward and G5 −3.2130 mm objectward. These tabulated-state displacements are not a measured cam law. The G3 and G6 anchor residuals are retained as consequences of the source rows.

| Published state | Calculated EFL, mm | Paraxial magnification at printed image plane | Calculated object-to-first-vertex distance, mm | Calculated object-to-image distance, mm |
|---|---:|---:|---:|---:|
| infinity | 45.899615 | ∞ object | ∞ | ∞ |
| 0.5x | 41.487347 | -0.499824 | 107.082653 | 186.511653 |
| 1x | 33.050594 | -1.002016 | 65.506398 | 144.909068 |

These conjugates are solved from the native radii, media, spacings and printed BF. They are not additional published measurements. The UI close-focus coordinate is based on the calculated 1× object-to-image distance; the middle keyframe uses the ratio of the calculated close and intermediate distances. No finiteConjugates certification is declared. The production 0.15 m and 0.19 m guide values remain separate.

Paragraph 0018 explicitly states that straight lines joining the diagrammed group positions do not describe the actual motion between them. Accordingly, intermediate piecewise-linear spacing interpolation is only a visualization approximation. Geometry sampling of that interpolation does not certify the production focusing mechanism or its optical performance.

### Aperture and exposure convention

The table gives F2.89, F4.32 and F5.75, whereas Figure 8(a) labels infinity F2.88. The table controls the model's infinity opening and the discrepancy is retained.

The physical iris diameter is not tabulated. The model uses one fixed iris calibrated by actual exact marginal tracing to the infinity nominalFno of 2.89. Its radius is 6.965710700110 mm. A separate paraxial calibration would give 6.865927595277 mm; those are different model calculations, not competing source dimensions.

The fixed-iris model does not reproduce the finite table labels as image-side cone f-numbers. Independent first-order checks of entrance/exit pupil magnification and object/image cone conversion confirm the distinction. A simple nominal-aperture macro-exposure convention resembles the source trend, but its exact definition is not established by the table. No undocumented variable iris schedule is inferred or implemented.

Panasonic's production manual separately distinguishes the nominal F2.8 displayed by the camera from effective aperture, giving approximate exposure-guide values f/4.5 at 0.5× and f/5.6 at 1× (VQT2H15-1, printed p.13). Those production guide values are not replacements for the patent table or for modeled cone calculations.

## Aspherical Surface

The only asphere is S5 on the rear of L3. Equation (1), PDF page 9, uses the standard denominator containing 1 + κ, so model K equals the printed κ directly. No conic conversion or dimensional scaling is applied.

| Surface | K | A4, mm⁻³ | A6, mm⁻⁵ | A8, mm⁻⁷ | A10, mm⁻⁹ |
|---|---:|---:|---:|---:|---:|
| S5A | 0 | 9.64948e-6 | −3.28988e-8 | 3.85170e-10 | −2.58623e-12 |

At the model's inferred 9.5 mm semi-diameter, the polynomial departure from the spherical base is +0.064480227 mm and the total sag is −0.120575040 mm. The actual rim-slope angle is about 0.912999°. These values describe the stored model aperture, not a patent-published clear aperture. The polynomial changes the outer profile while preserving the vertex curvature. The patent does not establish a specific manufacturing process for this element.

## Image Stabilization

G3 consists of L7 alone. Paragraph 0032 describes the Example 3 stabilization comparison using a 0.30° system tilt and a 0.50 mm lateral movement of G3. These are source demonstration conditions, not an asserted operating limit of the commercial lens. The centered sequential prescription does not implement lateral stabilization, mechanical feedback or decentered aberration performance.

## Conditions and Verification Limits

| Condition | Calculated/source-coordinate value | Stated description bound |
|---|---:|---|
| Vp, L6 | 18.0 | 15.8 < Vp < 22.9 |
| Vp − Vn, L6 minus L9 | −5.8 | < 0 |
| Vp3, L7 | 54.7 | 30.5 < Vp3 < 82.5 |
| f3 / f | 1.499675 | 0.8 < f3 / f < 3.2 |

The final row follows paragraph 0041. Claim 8 instead states the strict lower bound 1.5, and the computed ratio is slightly below that bound; Table 1 rounds it to 1.5. The model does not equate the two conditions or adjust the prescription to satisfy the claim wording.

The surface-by-surface Petzval sum is +0.002295149485 mm⁻¹. This first-order curvature sum alone is not a prediction of corrected image-field curvature. The paraxial infinity BFD is 15.013047462 mm versus the printed image gap 15.01368 mm; the printed image plane is retained. No source typo is asserted from that difference alone.

All stored clear apertures are modeling estimates. Actual current-main geometry and element-render diagnostics pass the tested native and intermediate configurations with default limits and zero hidden trim. Full sampled axial bundles and image-height chief rays pass. Outer off-axis bundles vignette at exposed boundaries, so no completely unvignetted field or measured illumination is claimed. These checks do not establish diffraction-limited, MTF or production-tolerance performance.

## Sources

- Japan Patent Office, JP 2011-48232 A, original publication PDF: Example 3 pp.11–12; equation (1) p.9; Figures 7–9 p.15; paragraphs 0018–0032 and 0036–0042. [Publication record](https://patents.google.com/patent/JP2011048232A/en).
- Panasonic, [H-ES045 official Japanese product page and optical construction diagram](https://panasonic.jp/dc/products/H-ES045.html).
- Panasonic, [H-ES045 specifications](https://help.na.panasonic.com/answers/features-and-specifications-lumix-lens-model-h-es045/).
- Panasonic, [H-ES045 product guide and release year](https://help.na.panasonic.com/camera-camcorder/lens-and-accessories/h-es045/).
- Panasonic, [H-ES045 operating instructions, VQT2H15-1](https://help.na.panasonic.com/wp-content/uploads/2023/02/HES045_VQT2H15_ENG_ESP.pdf), printed p.13, nominal and effective aperture guidance.
- OHARA, HOYA, Schott, HIKARI, CDGM and Sumita original vendor catalog files, with versions, source URLs, row locators and coordinate residuals retained in the accompanying evidence. Catalog spectra are model proxies, not production glass certificates.
