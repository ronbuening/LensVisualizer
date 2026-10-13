## Patent Reference and Design Identification

**Patent:** JP 2025-099854 A  
**Application Number:** JP 2023-216807  
**Filed:** 2023-12-22  
**Published:** 2025-07-03  
**Inventor:** Yasumoto Oginome  
**Applicant:** Sigma Corporation  
**Title:** Large-aperture ultra wide-angle lens  
**Embodiment analyzed:** Numerical Example 3

The prescription is the unscaled Japanese Numerical Example 3, paragraph 0140, with the optical section in Fig. 11. The construction correlation with the SIGMA 15mm f/1.4 DG DN DIAGONAL FISHEYE | Art is strong, but an exact manufactured prescription is not confirmed. [1]

The principal convergent evidence is:

1. Sigma lists 21 elements in 15 groups with 4 FLD, 3 SLD and 2 aspherical elements, a 180° diagonal angle of view and a 38.5 cm minimum focus distance. Example 3 has 21 elements in 15 groups, with six cemented pairs and two double-sided aspherical elements, and is the only full-frame 21-element / 15-group example among the patent's fourteen. [1; 2]
2. Sigma's published construction section matches Fig. 11 element for element. It marks FLD glass at elements 4, 17, 18 and 19, SLD glass at elements 5, 12 and 13, and aspherical lenses at elements 9 and 21. Example 3 places low-dispersion glasses at the same seven positions: FCD100 (νd 95.10) at L4, L17 and L18, FCD1 (νd 81.61) at L19, FC5 (νd 70.44) at L5, FCD515 (νd 68.62) at L12 and FCD915 (νd 85.29) at L13; its aspherical elements are L9 and L21. The one class difference is L19, where the example lists an FCD1-class glass at a position Sigma marks FLD. Patent glass names are examples of compatible coordinates, rather than identified factory suppliers. [1, ¶0108; 2]
3. The patent's design values of 15.50 mm and F/1.46 lie close to the marketed 15 mm and F1.4. The source is expressly an equisolid fisheye, not a rectilinear design. [1, ¶0107; 2]
4. Sigma announced the lens on 2024-02-21, with launch on 2024-03-14, after the 2023 filing. The production variants are full-frame L-Mount and Sony E-mount. [3]

The source field is 185.73°, with image height 22.39 mm. These quantities are retained instead of being reduced to the advertised 180°. The published finite state is also distinct from the marketed minimum focusing distance of 0.385 m. No uniform scaling, radius-sign repair or marketing normalization is applied.

## Optical Architecture

The source divides the system into a negative first group G1, an air-space aperture stop, and a positive second group G2. G1 comprises L1–L11 and G2 comprises L12–L21. The front pair of strongly meniscus-shaped negative components accepts the extreme angular field, followed by a denser central/rear distribution of positive and negative elements. [1, ¶¶0135–0137]

At infinity the computed group focal lengths are -111.422312 mm and +41.147093 mm. The complete Gaussian EFL is 15.497818729 mm. These group quantities are net powers of the complete source groups; the individual element focal lengths below are isolated in-air values.

The physical first-surface-to-image track is 168.5001 mm. The computed physical back focus from the final lens vertex is 18.313306 mm; the corresponding air-equivalent value is 17.461513 mm after accounting for the 2.5 mm source plate. Both exceed the Gaussian EFL, supporting a retrofocus description at this infinity state and these specified reference planes. The 1.0000 mm BF row is the final air space after the plate, not the entire last-lens-to-image distance.

The isolated cemented-component focal lengths are:

| Component | Source surfaces | Net isolated focal length (mm) |
|---|---|---:|
| D1 | 5–7 | +6948.023 |
| D2 | 8–10 | +233.743 |
| D3 | 17–19 | -144.980 |
| D4 | 23–25 | -146.039 |
| D5 | 28–30 | -534.979 |
| D6 | 33–35 | -42.044 |

These component powers do not determine their individual aberration contributions in the assembled lens. In particular, a positive member of a cemented pair may belong to a negative net pair.

## Element-by-Element Analysis

Focal lengths in this section are calculated for each glass element standing alone in air, including its center thickness. They are not in-situ focal lengths, cemented-pair powers or measured production values. Glass labels identify the source's compatible examples with catalog coordinates checked independently.

### L1 — Negative Meniscus

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA; source-listed example). f = -138.0 mm.

The first negative meniscus is convex toward the object. Together with L2 it forms the broad-angle entrance section identified as N1 and N2 in the patent. Its optical extent is much larger on the front than on the rear; the modeled clear apertures omit the mechanical flange visible in Fig. 11. Conditions 3, 4 and 9 govern its off-axis chief-ray height, rear sag and oblique path length rather than its focal length alone. [1, ¶¶0009–0035, 0136]

### L2 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55-W (HOYA; source-listed example). f = -35.7 mm.

The second object-convex negative meniscus is N2. Its strongly curved rear face changes the direction of the extreme-field bundle before the closely spaced central elements. This is the source-described angular collection role of the N1/N2 pair, not a claim that power sign by itself determines an aberration contribution. [1, ¶¶0102–0104, 0136]

### L3 — Positive Meniscus

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA; source-listed example). f = +67.8 mm.

L3 is a positive meniscus convex toward the image and is cemented to L4 at source surface 6. The high-index member has positive isolated power, while the complete L3–L4 pair is only weakly positive. The distinct member and compound powers should not be interchanged. [1, ¶0136]

### L4 — Biconcave Negative

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; source-listed example). f = -68.3 mm.

L4 is the biconcave, high-Abbe member of D1, at one of the four positions Sigma's construction section marks as FLD glass. Its FCD100 coordinate is a source-listed glass example, not proof of a manufactured FLD blank from a particular supplier. The shared interface remains one optical surface with the following medium assigned to L4. [1, ¶¶0108, 0136; 2]

### L5 — Biconcave Negative

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA; source-listed example). f = -51.0 mm.

L5 is the biconcave member of D2, cemented to L6 at surface 9. Its isolated negative power is combined with a much higher-index positive member. Sigma's construction section marks this position as SLD glass; the example's FC5 is a fluor crown close to the normal line (source ΔPgF +0.0090), so the data file carries no special-dispersion tag for it. Fig. 11 draws the L5–L6 pair as a square-cut block; the modeled junction and the rear face of L6 both carry that block's rim (20.5 mm), while the concave front face of L5 stops slightly lower (19.8 mm), near where the drawing begins its flat mounting land. These are figure-estimated model apertures, not patent dimensions. [1, ¶0136, Fig. 11; 2]

### L6 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55-W (HOYA; source-listed example). f = +43.5 mm.

L6 is biconvex and forms a weakly positive compound pair with L5. Although both the material contrast and opposite powers are consistent with chromatic balancing, the analysis does not assign an isolated aberration correction to either member without a decomposition. The external rear surface can limit an off-axis bundle. [1, ¶0136]

### L7 — Biconcave Negative

nd = 1.60311, νd = 60.64. Glass: S-BSM14 (OHARA; source-listed example). f = -99.2 mm.

L7 is a separate biconcave element immediately before the focusing member. Its spherical geometry and source S-BSM14 coordinate are retained. It remains fixed in the published focus sequence. [1, ¶¶0136, 0138]

### L8 — Positive Meniscus

nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA; source-listed example). f = +214.5 mm.

L8 is the sole translated lens in the published example. It is an object-convex positive meniscus, and motion toward the image changes the two air gaps at surfaces 12 and 14 while leaving the rest of the system fixed. Neither its source S-TIM28 name nor its line data is replaced by the similarly named L-TIM28 family. [1, ¶¶0136, 0138]

### L9 — Biconvex Positive (2× Asph)

nd = 1.77377, νd = 47.17. Glass: MC-TAF401 (HOYA; source-listed example). f = +61.8 mm.

L9 is a positive biconvex element with both faces aspheric, source surfaces 15 and 16. The patent supplies even-order coefficients through A16. Its MC-TAF401 designation is listed as a compatible glass example. The aspheric departures are evaluated over modeled clear apertures only. [1, ¶¶0108, 0111, 0136, 0140]

### L10 — Negative Meniscus

nd = 1.86966, νd = 20.02. Glass: FDS20-W (HOYA; source-listed example). f = -49.7 mm.

L10 is the object-convex negative-meniscus member of D3 immediately before the stop region. Its high-dispersion FDS20-W coordinate differs substantially from the high-index member L11. The complete pair has negative net isolated power. [1, ¶0136]

### L11 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55-W (HOYA; source-listed example). f = +72.4 mm.

L11 is an object-convex positive meniscus cemented to L10 at surface 18. Its positive isolated power does not make the complete pair positive. The following air space separates this pair from the source-published stop at surface 20. [1, ¶¶0135–0136, 0140]

### L12 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA; source-listed example). f = +122.2 mm.

L12 is the first element of positive system group G2. This separately mounted biconvex element has the source FCD515 coordinate, a low-dispersion glass with anomalous partial dispersion (source ΔPgF +0.0192), at one of the three positions Sigma's construction section marks as SLD glass. It is followed by a finite air gap before D4; no additional focusing motion is inferred. [1, ¶0137; 2]

### L13 — Biconvex Positive

nd = 1.48071, νd = 85.29. Glass: FCD915 (HOYA; source-listed example). f = +58.3 mm.

L13 is a biconvex high-Abbe member, cemented to L14. Sigma's construction section marks this position as SLD glass, not FLD; the FCD915 coordinate, a low-dispersion glass with anomalous partial dispersion (source ΔPgF +0.0413), is consistent with that marking. The isolated compound D4 power is negative despite the positive power of L13. [1, ¶0137; 2]

### L14 — Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA; source-listed example). f = -41.6 mm.

L14 is an image-convex negative meniscus forming D4 with L13. Its source NBFD25 coordinate supplies a markedly different dispersion from the high-Abbe partner. The shared surface 24 is preserved without an invented cement layer. [1, ¶0137]

### L15 — Biconvex Positive

nd = 1.98613, νd = 16.48. Glass: FDS16-W (HOYA; source-listed example). f = +59.8 mm.

L15 is the biconvex LP1 element called out in Fig. 11. Its source index, Abbe number and source-normal-line deviation satisfy conditions 11–13. The patent uses that material criterion as part of its chromatic design argument; this does not establish a measured production APO specification. [1, ¶¶0061–0075, 0137, 0140; Fig. 11]

### L16 — Negative Meniscus

nd = 1.76634, νd = 35.82. Glass: S-NBH59 (OHARA; source-listed example). f = -52.8 mm.

L16 is an object-convex negative meniscus cemented to L17 at surface 29. Its S-NBH59 coordinate retains the source S-prefix. The patent gives a negative deviation relative to its own normal line, which must be kept distinct from the converted engine value. [1, ¶¶0108, 0137]

### L17 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; source-listed example). f = +58.5 mm.

L17 is the biconvex high-Abbe member of D5, at one of Sigma's four marked FLD positions. In the source ray-condition table the entry interface at surface 29 is one of the five positions selected by condition 16. The shared interface therefore has both a geometrical and a specifically tabulated ray-height role. [1, ¶¶0115, 0137, 0140; 2]

### L18 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; source-listed example). f = +53.8 mm.

L18 is a separate biconvex high-Abbe element. Its source FCD100 coordinate repeats the material class used by L4 and L17 and, like them, it sits at a position Sigma's construction section marks as FLD glass. It is also included in the condition-16 ray-height table. [1, ¶¶0137, 0140; 2]

### L19 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA; source-listed example). f = +52.5 mm.

L19 is the positive biconvex member of D6. Sigma's construction section marks this position as its fourth FLD element, whereas the example lists an FCD1-class glass (source ΔPgF +0.0373) here; it is the one position where the example's glass class differs from the production marking. The Japanese source gives its shared rear radius as −62.0139 mm. Preserving this sign is necessary to reproduce the printed source first-order values; the opposite sign in the known US counterpart is not a substitute for the selected publication. [1, ¶0140, PDF p. 29; 2]

### L20 — Biconcave Negative

nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA; source-listed example). f = -22.0 mm.

L20 is a biconcave negative element cemented to L19. It makes D6 negative as an isolated compound component. The source TAFD35 coordinate is retained rather than adjusted to improve a catalog fit. The following gap and next asphere place a material constraint on inferred clear apertures. [1, ¶¶0137, 0140]

### L21 — Biconvex Positive (2× Asph)

nd = 1.80610, νd = 40.73. Glass: MC-NBFD130 (HOYA; source-listed example). f = +99.8 mm.

L21 is the final biconvex aspheric element, with source surfaces 36 and 37. Its MC-NBFD130 coordinate is a source-listed compatible example. The source image-adjacent filter F follows this element and is traced separately; it is not counted as a twenty-second lens element. [1, ¶¶0093, 0119, 0137, 0140]

## Glass Identification and Selection

The patent defines its indices at the d-line, 587.56 nm. It explicitly identifies the names in the glass column as examples matching the refractive-index, Abbe-number and partial-dispersion coordinates. They therefore support named coordinate examples, not melt provenance or a confirmed production supplier. [1, ¶0108]

| Source example / catalog | nd | νd | Source ΔPgF | Elements |
|---|---:|---:|---:|---|
| TAFD30 (HOYA) | 1.88300 | 40.80 | -0.0094 | L1, L3 |
| TAFD55-W (HOYA) | 2.00100 | 29.13 | +0.0035 | L2, L6, L11 |
| FCD100 (HOYA) | 1.43700 | 95.10 | +0.0564 | L4, L17, L18 |
| FC5 (HOYA) | 1.48749 | 70.44 | +0.0090 | L5 |
| S-BSM14 (OHARA) | 1.60311 | 60.64 | +0.0022 | L7 |
| S-TIM28 (OHARA) | 1.68893 | 31.07 | +0.0079 | L8 |
| MC-TAF401 (HOYA) | 1.77377 | 47.17 | -0.0078 | L9 |
| FDS20-W (HOYA) | 1.86966 | 20.02 | +0.0310 | L10 |
| FCD515 (HOYA) | 1.59282 | 68.62 | +0.0192 | L12 |
| FCD915 (HOYA) | 1.48071 | 85.29 | +0.0413 | L13 |
| NBFD25 (HOYA) | 1.85451 | 25.15 | +0.0071 | L14 |
| FDS16-W (HOYA) | 1.98613 | 16.48 | +0.0468 | L15 |
| S-NBH59 (OHARA) | 1.76634 | 35.82 | -0.0047 | L16 |
| FCD1 (HOYA) | 1.49700 | 81.61 | +0.0373 | L19 |
| TAFD35 (HOYA) | 1.91082 | 35.25 | -0.0028 | L20 |
| MC-NBFD130 (HOYA) | 1.80610 | 40.73 | -0.0058 | L21 |

HOYA's primary catalog agrees closely with the printed coordinates. Two small differences remain explicit: its current TAFD30 νd is 40.81 rather than the patent's 40.80, and its FDS16-W nd is 1.98612 rather than 1.98613. The data retains the patent values. OHARA's S-BSM14, S-TIM28 and S-NBH59 coordinates match their source rows; S- and L-family prefixes are not interchangeable. [4, 5]

The source defines ΔPgF = PgF − 0.64833 + 0.00180 νd. The data file's dPgF uses the normal line PgF,normal = 0.6438 − 0.001682 νd, so each stored deviation is the source ΔPgF + 0.00453 − 0.000118 νd. The source deviations in the table remain the appropriate values for evaluating the patent conditions.

Explicit nC, nF and ng are stored directly on each element. The HOYA values are calculated from the manufacturer's catalog polynomial coefficients; OHARA values are direct catalog-table anchors. They are catalog-example line indices, not measured source-melt values. Together with the converted source dPgF, they retain considerably more spectral information than nd/νd alone. The MC-TAF401 and MC-NBFD130 labels resolve to HOYA's M-TAF401 and M-NBFD130 catalog entries. This evidence does not establish production APO performance or a measured MTF result.

Six elements carry an inferred special-dispersion tag in the data file: L4, L17, L18 and L19 at Sigma's four FLD positions, and L12 and L13 at two of its three SLD positions; L5 is left untagged. L15, the patent's LP1, carries the patent-designated tag instead: paragraphs 0061–0062 and condition 13 describe LP1 as a positive element of a glass with positive anomalous partial dispersion.

## Focus Mechanism

The patent tabulates both focus states. Paragraph 0138 identifies L8 as the translated element. From infinity to the finite source state, it moves 2.0415 mm toward the image. The two changing gaps are:

| Air gap | Infinity (mm) | Published finite state (mm) |
|---|---:|---:|
| d12, before L8 | 3.9500 | 5.9915 |
| d14, after L8 | 8.7163 | 6.6748 |

All other prescribed spacings and the image plane remain fixed. The gaps conserve their total length. The source object distance is 435.2537 mm from the first surface, or 603.7538 mm from the image plane after including the full physical track. The data file's close-focus limit is therefore this patent state, about 0.604 m from the image plane; the marketed minimum focus distance of 0.385 m lies beyond the patent's tabulated range. At that state the EFL is 15.3236 mm and the paraxial magnification is −0.033. The rounded prescription leaves a paraxial focus residual of −0.0003 mm, which is not removed.

Intermediate focus positions linearly interpolate the two source spacings; they are not published states. The marketed lens uses an HLA linear autofocus actuator, but the cited sources do not prove that its production internal travel exactly follows this patent example. [2]

The source image-adjacent F plate is represented as camera-side based on its one-millimetre image adjacency and separation from the 21 counted lens elements. This ownership is a modeling inference: the patent calls it a filter without explicitly stating camera-side ownership or optionality. It is retained with its physical 2.5 mm thickness, 14.8136 mm preceding gap and 1.0000 mm trailing gap. It is not omitted or manually replaced by an air-equivalent final spacing.

## Aspherical Surfaces

L9 carries surfaces 15A and 16A; L21 carries 36A and 37A. The source defines the sag terms by the following additive conic-plus-polynomial interpretation:

z(y) = (y²/r) / [1 + √(1 − (1 + K)(y/r)²)] + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹² + A14 y¹⁴ + A16 y¹⁶.

The rendered equation has no clearly printed plus sign between the A12 and A14 terms; the prose defines them as separate orders and the table lists separate coefficients. This typographical ambiguity is retained without changing any coefficient. Every selected K is zero, so the source and data-file conic coefficients are identical. Coefficient Aₚ has units mm^(1−p). The selected example publishes no odd-order terms. No asphere refit or omitted higher-order repair is used. [1, ¶0111]

| Coefficient | 15A | 16A | 36A | 37A |
|---|---:|---:|---:|---:|
| K | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |
| A4 | -2.23652E-06 | 4.05148E-07 | -1.04802E-06 | 1.87054E-06 |
| A6 | -2.25040E-09 | -3.08367E-09 | -1.09807E-08 | -7.69431E-09 |
| A8 | 3.84549E-12 | 1.68754E-12 | -3.35729E-12 | -8.98365E-11 |
| A10 | 3.11662E-15 | 2.86917E-14 | 1.59525E-13 | 6.98929E-13 |
| A12 | -6.72119E-17 | -1.86935E-16 | -2.69304E-16 | -2.03111E-15 |
| A14 | 1.49463E-19 | 4.08499E-19 | 0.00000E+00 | 2.18373E-18 |
| A16 | -8.65376E-23 | -2.97153E-22 | 0.00000E+00 | 0.00000E+00 |

At the data-file clear apertures, the full polynomial departure from the corresponding base sphere is:

| Surface | Modeled semi-diameter (mm) | Departure (µm) |
|---|---:|---:|
| 15A | 18.5 | -326.894 |
| 16A | 18.5 | -49.959 |
| 36A | 15.7 | -155.763 |
| 37A | 15.7 | -32.068 |

These heights are inferred model apertures, not patent-published SDs. All four total departures are negative at the selected rims; the sign of A4 alone would not establish that result, particularly at 16A and 37A. Higher orders materially shape the peripheral sag. The patent identifies geometric aspheres; the compatible MC glass names do not by themselves establish a particular production fabrication process.

## Conditional Expressions

The source conditions use native equisolid ray heights and its own partial-dispersion normal line. Extreme-field quantities are evaluated with a 90° object-side chief ray because the full field exceeds 180°. They are not evaluated using a rectilinear tangent approximation. [1, ¶¶0009–0101, 0219]

| Condition | Example-3 value or computed result | Interpretation |
|---|---:|---|
| 1: 2ω ≥ 160° | 185.73° | Published native full field, supported by exact edge-chief trace |
| 2: Fno < 1.9 | 1.46 | Published calibration target, not independent iris measurement |
| 3: −6.0 < x < −1.1 | -1.819114 | N1 chief height / image chief height |
| 4: 0.50 < x < 1.80 | 0.904558 | Rear sag N1 / rear sag N2 |
| 5: 0.4 < x < 5.0 | 3.867686 | Isolated fN1 / fN2 |
| 6: 1.5 < x < 6.0 | 3.166945 | N1 shape factor |
| 7: 1.2 < x < 5.0 | 1.721215 | N2 shape factor |
| 8: 0.4 < x < 3.0 | 1.839947 | N1/N2 shape-factor ratio |
| 9: 1.8 < x < 5.0 | 2.941310 | Oblique path through N1 / axial thickness |
| 10: 0.3 < x < 3.5 | 0.794079 | Oblique paths through N1 / N2 |
| 11: x > 1.60 | 1.986130 | LP1 nd |
| 12: x < 35.0 | 16.480000 | LP1 νd |
| 13: x > 0.018 | 0.046800 | LP1 source ΔPgF |
| 14: −0.40 < x < 0.70 | -0.139091 | System f / G1 f |
| 15: −0.8 < x < 2.7 | -0.369290 | G2 f / G1 f |
| 17: x > 0.004 | 0.038220 | Mean source ΔPgF of selected condition-16 positive elements |
| 18: x > 1.7 | 1.883000 | N1 negative-member nd |
| 19: 5.00 < x < 12.00 | 8.600857 | Last-lens vertex span / air-equivalent source back focus |
| 20: 2.5 < |x| < 18.0 | 6.850204 | Last-lens vertex span / native 90° chief image height |

The computed values satisfy the listed source bounds. In this table x denotes the ratio or coordinate named in the final column.

Condition 16 selects the five source entry positions 26, 29, 31, 33 and 36. The computed axial/chief height ratios are 2.36494, 1.76577, 1.22557, 0.83801 and 0.52552, each inside 0.3–2.7 and consistent with the source's one-decimal ratios. The printed off-axis heights reproduce within 0.005 mm.

The five printed axial heights are not reproduced to 0.005 mm when the rounded source F/1.46 is treated as an exact aperture. Their center-value residuals range from approximately −0.0163 to −0.0097 mm. This discrepancy is retained. Independently bounded f/Fno rounding and all five height-rounding intervals admit one common entrance radius, 5.3114741–5.3132517 mm. Consequently the source observations are compatible with one slightly different unprinted exact iris. The implemented nominal aperture remains the printed 1.46; no source or coefficient is altered to force exact center-value agreement.

## Model Scope and Limitations

The diaphragm diameter and clear SDs are not tabulated. The stop is calibrated from the source f-number and the clear apertures are estimated from the optical extents in Fig. 11, floor-checked by exact rays and held inside current geometric limits. Mechanical flange outlines are not treated as transparent aperture. Three cemented-junction radii sit 0.3–0.6 mm above the drawing (S6 at 23.3 mm, S18 at 18.0 mm and S24 at 18.0 mm) so that off-axis rays do not first clip at a cemented interface; the fourth, S9, carries the drawn 20.5 mm rim of the square-cut L5–L6 block. The exterior rims follow the drawn optical extents of Fig. 11, scaled from its vertex spacing. The concave faces S7 (19.5 mm) and S35 (13.9 mm) stop where the drawing begins their flat mounting annuli, and L21 carries the square rim the figure draws (15.7 mm on S36A and S37A). None of these values is a source-published aperture. A first-surface-launch meridional trace passes the native 92.865° chief ray with its tightest margins at S35 (12.78 of 13.9 mm) and S37A (14.24 of 15.7 mm), and passes about 36 % of the stop diameter at the 21.6 mm frame corner; that corner bundle is limited by S2 and S35.

The modeled iris radius is 16.2165 mm, set so that a real axial ray entering at 5.3082 mm, which is 15.50 mm / (2 × 1.46), just passes it. The paraxial entrance-pupil radius of the same iris is 5.5410 mm at infinity and 5.5245 mm at the near state. These are real-ray and paraxial descriptions of one iris and are not interchangeable.

The chief ray at the full 92.865° half-field reaches an image height of 22.395 mm, agreeing with the source's 22.39 mm at its rounding precision; an ideal equisolid mapping with f = 15.50 mm would give 22.46 mm, a departure of about −0.3 % at the edge. The 90° chief ray lands at 21.92 mm, so the 21.63 mm corner of a 36 × 24 mm frame corresponds to a half-field of about 88.3°, a diagonal of roughly 176.6° against the marketed 180°. Near-focus behavior at the extreme field is not a source-defined case, because a planar object 435 mm ahead of the lens has no object point near 90°.

The viewer does not compute MTF for fisheye projections. No measured production MTF, full-field pupil transmission or chromatic performance is implied.

## Sources

1. Japan Patent Office, JP 2025-099854 A, published 2025-07-03, Numerical Example 3, ¶0140, printed pp. 27–28 / original PDF pp. 28–29; conventions ¶¶0107–0119; Fig. 11 on printed p. 63 / PDF p. 64; EX3 condition column in Table 1, printed p. 51 / PDF p. 52. [Complete original publication via DPMA](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025099854A).
2. Sigma Corporation, [15mm F1.4 DG DN DIAGONAL FISHEYE product specifications and construction](https://www.sigma-global.com/en/lenses/a024_15_14/), accessed 2026-10-04.
3. Sigma Corporation, [Launch schedule of Sigma 15mm F1.4 DG DN DIAGONAL FISHEYE Art](https://www.sigma-global.com/en/news/2024/02/21/010252/), 2024-02-21.
4. HOYA, [Optical Glass Catalog 20260707 including obsolete materials](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), primary manufacturer AGF records for the coefficients and coordinate rows of the listed glasses.
5. OHARA Inc., [Optical glass product table](https://www.ohara-inc.co.jp/product/01000/), S-BSM14, S-TIM28 and S-NBH59 rows, accessed 2026-10-04.
