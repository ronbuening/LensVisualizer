# Fujifilm Fujinon GF45mmF2.8 R WR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0174231 A1; parent US 10,591,702 B2  
**Application Number:** 16/784,079  
**Filed:** February 6, 2020; parent filed February 22, 2018  
**Published:** June 4, 2020  
**Priority:** JP 2017-038049, March 1, 2017  
**Inventor:** Taiga Noda  
**Applicant:** FUJIFILM Corporation, Tokyo, Japan  
**Title:** Imaging Lens and Imaging Apparatus  
**Embodiment analyzed:** Example 1, Tables 1–3 and Fig. 1

Example 1 of US 2020/0174231 A1 is the closest patent embodiment for the production FUJINON GF45mmF2.8 R WR. The identification rests on several convergent points rather than on a single number.

1. The patent embodiment contains 11 elements in 8 air-spaced groups: G1 has three elements, G2 has six elements, and G3 has a rear cemented doublet. Fujifilm's product specification gives the production lens as 11 elements in 8 groups.
2. The patent embodiment has one aspherical element, L2f, with both of its surfaces marked as aspherical. Fujifilm's product specification states one aspherical element.
3. Two low-dispersion ED-type elements appear in the moving G2 group: L2b and L2e, both with nd = 1.49700 and νd = 81.61. Fujifilm specifies two ED elements.
4. The patent's specification table gives f = 44.690 mm and FNo. = 2.88. The marketed production lens is a 45 mm f/2.8 lens. This is the expected rounding relationship between patent design and production name.
5. The patent states 2ω = 67.8°, or ω = 33.9°. At f = 44.690 mm, that field corresponds to a paraxial image height of about 30.0 mm and a full design diagonal of about 60.0 mm, exceeding the 54.78 mm diagonal of Fujifilm's 44 × 33 mm GFX format.
6. The patent describes focusing by keeping G1 and G3 fixed relative to the image plane while moving G2 along the optical axis, with the stop moving integrally with G2. Fujifilm's public product material describes the production lens as using an inner-focus system that moves six elements.
7. The priority date predates the 2017 introduction of the GF45mmF2.8 R WR, matching the normal patent-to-product sequence for a contemporary Fujifilm GF lens.

The patent includes six examples with the same broad negative-positive-negative three-group architecture. Example 1 is the most direct match because it is the illustrated embodiment, has f = 44.690 mm, and matches the production lens's published element count, ED count, aspherical count, aperture class, and focusing mechanism.

## Optical Architecture

The design is a compact wide-angle, mirrorless, negative-positive-negative lens for the 44 × 33 mm digital medium-format image circle. In paraxial terms, the three primary groups are:

| Group | Elements | Refractive power | Verified focal length |
|---|---:|---:|---:|
| G1 | L1a–L1c | Negative | −66.281 mm |
| G2 | L2a–L2f plus stop | Positive | +43.467 mm |
| G3 | L3a–L3b | Negative | −106.150 mm |

The front group is a negative lead section that expands the wide field and reduces the angular burden on the following positive group. G2 is the primary converging group and also the complete moving focus group. G3 is a stationary rear negative correcting group positioned close to the image plane. The patent states that this combination is intended to keep both back focus and total lens length short while maintaining satisfactory aberration correction.

The design is not telephoto in the classical sense because the total track length is longer than the focal length, and it is not retrofocus in the strict 35 mm SLR sense because its air-equivalent back focal distance is only about 31.727 mm for a 44.690 mm design focal length. It is better described as a compact negative-lead mirrorless wide-angle design.

The total physical track through the patent's parallel plate PP is 110.197 mm from the first vertex to the image plane. When PP is omitted from the optical surface list and folded into an air-equivalent final distance, the modeled track is 109.107 mm. The air-equivalent back focal distance after the last glass surface is 25.000 + 3.200 / 1.51680 + 4.617 = 31.727 mm. This clears the Fujifilm G mount's 26.7 mm flange back while retaining enough space for the sensor cover stack and mechanical mount depth.

Using the surface-by-surface Petzval formula, Σ φ/(n n′), the complete design gives a Petzval sum of +0.001523 mm⁻¹, equivalent to a Petzval radius of approximately 656.4 mm. That is a moderate positive residual, consistent with a large-format wide-angle lens where the negative rear group is used to control field curvature without forcing an excessively long back focus.

## Element-by-Element Analysis

### G1 — Front Negative Group

#### L1a — Negative Meniscus, concave toward image

nd = 1.56732, νd = 42.82, θgF = 0.57309. Glass: S-TIL26 (OHARA). Standalone f = −44.43 mm.

L1a is the first-a negative lens named in the patent. Its weak front curvature, R1 = +435.40597 mm, and much stronger rear curvature, R2 = +23.79676 mm, make it the dominant negative element in G1. The patent's conditional expression (5) controls this element's share of the G1 negative power, and Example 1 gives f1a/f1 = 0.67.

Its function is not simply to make the lens wider. It begins the beam expansion required for a 67.8° design field, reduces the burden on the G2 front positive surface, and helps set up a large but manageable chief-ray height through the central group.

The prior analysis identified this glass as S-BAM4. That identification is not supported by current catalog data. The patent's nd/νd pair, 1.56732 / 42.82, matches OHARA S-TIL26 directly; S-BAM4 is a different glass family and a different nd/νd coordinate.

#### L1b — Negative Meniscus, concave toward image

nd = 1.48749, νd = 70.44, θgF = 0.53062. Glass: 487/704 fluorocrown class, closest to HOYA FC5 / OHARA S-FSL5 / Schott N-FK5 family. Standalone f = −102.05 mm.

L1b is the first-b negative lens. It is weaker than L1a but much lower in dispersion. The patent explicitly uses the Abbe-number difference νd1b − νd1a to control on-axis chromatic aberration in G1; Example 1 gives 70.44 − 42.82 = 27.62, within the preferred range.

The exact public-catalog name is less certain than the element's optical role. The patent value is a 487/704 fluorocrown coordinate. OHARA S-FSL5 has the same nd but a slightly lower current catalog νd, while Schott N-FK5 and HOYA FC5-class glasses occupy the same practical region. The data file therefore records the glass as a class rather than as a single over-asserted catalog identity.

#### L1c — Positive Meniscus, convex toward object

nd = 1.83481, νd = 42.72, θgF = 0.56486. Glass: S-LAH55V (OHARA). Standalone f = +63.38 mm.

L1c is the positive lens at the image side of G1. Its high refractive index allows useful positive power with only moderate curvature, preventing the front group from becoming too strongly negative and helping control lateral color.

This is a dense lanthanum flint-type glass in optical-design terms. The earlier wording that treated it as a crown was imprecise: νd ≈ 42.7 places the element in flint territory despite its lanthanum family name. It is the compensating positive element used by the patent's conditional expression (2), where νd1b − νd1gp = 27.72.

### G2 — Moving Positive Focus Group

G2 consists of six elements and the aperture stop. The patent places the stop inside G2 and states that it moves integrally with the group during focusing. Paraxially, G2 has f = +43.467 mm and supplies the largest part of the lens's total positive power. The subgroup ahead of the stop has f2gf = +36.631 mm, and the subgroup behind the stop has f2gr = +49.730 mm. Their ratio, 0.737, agrees with the patent's Table 19 rounded value of 0.74.

#### L2a — Biconvex Positive

nd = 1.65160, νd = 58.55, θgF = 0.54267. Glass: S-LAL7 / S-LAL7Q (OHARA). Standalone f = +33.79 mm.

L2a is the first surface of G2 and is convex toward the object side, as preferred by the patent. It receives a diverging beam from G1 and bends it inward, establishing the positive power of the moving group.

The prior analysis called L2a the strongest positive element in the entire system. That is incorrect when standalone in-air focal lengths are compared. L2f is stronger at +29.63 mm; L2a is the second-strongest standalone positive element at +33.79 mm. L2a is still the strongest front-half positive element of G2 and has the most direct role in turning the G1-diverged beam back toward convergence.

#### L2b + L2c — Weakly Negative Cemented Doublet Ahead of the Stop

L2b: nd = 1.49700, νd = 81.61, θgF = 0.53887. Glass: FCD1 (HOYA) / S-FPL51 equivalent ED fluorophosphate. Standalone f = +37.24 mm.  
L2c: nd = 1.51742, νd = 52.43, θgF = 0.55649. Glass: S-NSL36 (OHARA). Standalone f = −35.77 mm.  
Combined doublet f = −491.77 mm.

The doublet is almost afocal in power but important chromatically. L2b is a low-dispersion ED positive element; L2c is its more normal-dispersion negative partner. The large Abbe separation lets the pair correct longitudinal color introduced by the strong positive surfaces around it without adding much net power.

The previous analysis's L2c = S-BSM2 assignment is wrong. The prescription value nd = 1.51742, νd = 52.43 matches OHARA S-NSL36. S-BSM2 is much higher in index and Abbe number and does not match this element.

#### Aperture Stop

The aperture stop is between the L2b+L2c doublet and the L2d+L2e doublet. In the patent table it is surface 12, with 9.300 mm to the next refracting surface. The stop belongs mechanically and optically to G2, not to the stationary barrel, and it moves with G2 during focusing.

For the patent's FNo. = 2.88 and f = 44.690 mm, the required entrance-pupil semi-diameter is 7.759 mm. Tracing from the front vertex to the stop plane gives a physical stop semi-diameter of 7.653 mm. That value is used in the data file.

#### L2d + L2e — Negative/Positive ED Cemented Doublet Behind the Stop

L2d: nd = 1.69895, νd = 30.05, θgF = 0.60174. Glass: E-FD15 / S-TIM35-class dense flint. Standalone f = −19.31 mm.  
L2e: nd = 1.49700, νd = 81.61, θgF = 0.53887. Glass: FCD1 (HOYA) / S-FPL51 equivalent ED fluorophosphate. Standalone f = +43.71 mm.  
Combined doublet f = −41.32 mm.

This doublet is a stronger chromatic and spherical-aberration corrector than the pre-stop L2b+L2c pair. L2d carries substantial negative power and high dispersion; L2e supplies low-dispersion positive power. The pair's large νd contrast, 81.61 − 30.05 = 51.56, is the strongest chromatic pairing in the lens.

The exact vendor label for L2d is not uniquely recoverable from the patent table alone. Its 699/301 coordinate corresponds to a HOYA E-FD15/SF15-type dense flint and is close to current OHARA S-TIM35. The prior analysis's E-FD7 assignment is not supported by the patent's nd/νd pair.

#### L2f — Biconvex Positive, Both Surfaces Aspherical

nd = 1.85400, νd = 40.38, θgF = 0.56890. Glass: L-LAH85V (OHARA, low-Tg moldable class). Standalone f = +29.63 mm.

L2f is the only aspherical element in Example 1. It is also the strongest standalone positive element in the design. Its first surface, R16 = +117.41651 mm, is weakly convex toward the object. Its rear surface, R17 = −31.18464 mm, is much stronger and carries the larger aspherical correction.

The earlier S-LAH65V label was a significant error. S-LAH65V is near nd = 1.804 and νd ≈ 46.6, not the patent value. The correct 854/404 coordinate is the OHARA L-LAH85V low-Tg moldable class. That is also consistent with a dual-sided molded glass asphere in a modern autofocus lens.

This element is a dense lanthanum flint by Abbe number, not a crown. Its high index permits strong positive power with a compact element, while the aspherical departures suppress the spherical aberration and field-dependent residuals that would otherwise be produced by such a strong rear converging surface.

### G3 — Stationary Rear Negative Group

#### L3a + L3b — Cemented Rear Doublet

L3a: nd = 1.85026, νd = 32.27, θgF = 0.59299. Glass: S-LAH71 (OHARA). Standalone in-air f = +143.17 mm.  
L3b: nd = 1.58144, νd = 40.75, θgF = 0.57757. Glass: S-TIL25 (OHARA). Standalone in-air f = −62.65 mm.  
Combined G3 doublet f = −106.15 mm.

G3 is a stationary cemented doublet close to the image plane. The patent states that a third group consisting of a positive lens followed by a negative lens suppresses lateral chromatic aberration and astigmatism. Because this group is near the image plane, it has strong leverage over field curvature, distortion, and lateral color.

The earlier glass identifications, S-NBH56 for L3a and S-BAM12 for L3b, do not match the patent. L3a's nd/νd coordinate matches S-LAH71. L3b's coordinate matches S-TIL25. S-NBH56 is a far higher dispersion glass, and S-BAM12 is a different barium glass with a substantially different index.

The L3a standalone focal length is useful only as an in-air diagnostic. Within the cemented doublet, the element works through an interface into L3b, so its in-situ contribution is not equivalent to a separated positive singlet. The combined group focal length, −106.15 mm, is the physically meaningful number for G3 behavior.

## Glass Identification and Selection

The patent gives nd, νd, and θgF for every element, but it does not name catalog glass types. The identifications below are based on matching the patent coordinates to current public OHARA and HOYA catalog data. Where the match is not unique, the glass is labeled by class rather than by a single asserted catalog name.

| Element | Patent nd | Patent νd | θgF | Corrected identification | Confidence and note |
|---|---:|---:|---:|---|---|
| L1a | 1.56732 | 42.82 | 0.57309 | S-TIL26 (OHARA) | Direct match. Prior S-BAM4 label rejected. |
| L1b | 1.48749 | 70.44 | 0.53062 | 487/704 fluorocrown class | High confidence class; exact vendor not asserted. |
| L1c | 1.83481 | 42.72 | 0.56486 | S-LAH55V (OHARA) | Direct/near-direct match; dense lanthanum flint. |
| L2a | 1.65160 | 58.55 | 0.54267 | S-LAL7 / S-LAL7Q (OHARA) | Direct coordinate match. |
| L2b | 1.49700 | 81.61 | 0.53887 | FCD1 (HOYA) / S-FPL51 equivalent | ED fluorophosphate. |
| L2c | 1.51742 | 52.43 | 0.55649 | S-NSL36 (OHARA) | Direct match. Prior S-BSM2 label rejected. |
| L2d | 1.69895 | 30.05 | 0.60174 | E-FD15 / S-TIM35 class | Dense flint class; vendor not uniquely asserted. |
| L2e | 1.49700 | 81.61 | 0.53887 | FCD1 (HOYA) / S-FPL51 equivalent | Second ED fluorophosphate. |
| L2f | 1.85400 | 40.38 | 0.56890 | L-LAH85V (OHARA low-Tg class) | Moldable high-index lanthanum flint class. Prior S-LAH65V label rejected. |
| L3a | 1.85026 | 32.27 | 0.59299 | S-LAH71 (OHARA) | Direct match. Prior S-NBH56 label rejected. |
| L3b | 1.58144 | 40.75 | 0.57757 | S-TIL25 (OHARA) | Direct match. Prior S-BAM12 label rejected. |

The chromatic strategy is conventional but carefully distributed. The two ED elements are both in G2, one before and one after the stop. L2b is paired with moderate-dispersion S-NSL36 in a nearly power-neutral doublet. L2e is paired with a strong high-dispersion negative flint in a more powerful rear doublet. G1 also contains a deliberate chromatic split: L1a is moderate-dispersion negative glass, L1b is low-dispersion negative glass, and L1c is high-index positive dense lanthanum flint.

The earlier draft over-relied on plausible Japanese glass-family names rather than matching every nd/νd coordinate. The corrected analysis uses the six-digit glass-code logic first and only then assigns catalog names.

## Focus Mechanism

The lens uses inner focus. During focusing, G1 and G3 remain stationary with respect to the image plane, while the entire six-element G2 group and the stop move along the optical axis. The patent gives the mechanism but does not provide a close-focus variable-spacing table for Example 1.

For the data file, the close-focus state is therefore modeled rather than copied from a patent table. Fujifilm publishes 0.45 m minimum focus and 0.14× maximum magnification. Treating 0.45 m as measured from the sensor plane, and using the patent's 110.197 mm physical front-vertex-to-image track, gives a front-vertex-to-object distance of 339.803 mm. Solving the paraxial focus condition with G2 moving as a rigid body gives a 4.953 mm objectward shift of G2.

| Variable gap | Infinity value | Modeled close-focus value | Change |
|---|---:|---:|---:|
| Surface 6 to surface 7, before G2 | 6.800 mm | 1.8468 mm | −4.9532 mm |
| Surface 17 to surface 18, after G2 | 1.890 mm | 6.8432 mm | +4.9532 mm |

This model predicts paraxial magnification of approximately 0.136×, which is close to Fujifilm's published 0.14×. The difference is within expectation because the manufacturer specification is rounded and measured mechanically, while the model uses paraxial optics and assumes the production lens follows the patent embodiment without production tolerance changes.

## Aspherical Surfaces

The design has two aspherical surfaces, both on L2f: surface 16 and surface 17.

The patent uses the sag equation:

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_{m=3}^{12} A_m h^m
$$

where C = 1/R. In this patent convention, KA = 1 corresponds to a spherical base. In the standard LensVisualizer conic convention this is K = 0. The polynomial is unusual for the renderer because it includes both odd and even powers from A3 through A12. A3 is zero on both surfaces, but A5, A7, A9, and A11 are active.

### Patent coefficients, surface 16

| Coefficient | Value |
|---|---:|
| KA | 1.0000000E+00 |
| A3 | 0.0000000E+00 |
| A4 | +2.5111094E−06 |
| A5 | −8.1916033E−07 |
| A6 | +3.0328098E−08 |
| A7 | +4.4686427E−09 |
| A8 | −2.4426688E−10 |
| A9 | −1.0799226E−11 |
| A10 | +6.5637730E−13 |
| A11 | +1.3638985E−14 |
| A12 | −5.6762959E−16 |

Surface 16 is the weakly curved front surface of L2f. At h = 12 mm, the departure from the spherical base is about −16 µm. At the modeled 17.0 mm clear semi-diameter, the original patent polynomial departure is about +88 µm. Its role is zonal trimming rather than gross aberration correction.

### Patent coefficients, surface 17

| Coefficient | Value |
|---|---:|
| KA | 1.0000000E+00 |
| A3 | 0.0000000E+00 |
| A4 | +1.0876283E−05 |
| A5 | −1.3848879E−06 |
| A6 | +1.6586534E−07 |
| A7 | −7.3663085E−09 |
| A8 | −3.4202876E−10 |
| A9 | +5.5683892E−11 |
| A10 | −1.3869137E−12 |
| A11 | −7.6139587E−14 |
| A12 | +3.4342285E−15 |

Surface 17 is the stronger rear surface of L2f and carries the main aspherical correction. The departure is approximately +27 µm at h = 8 mm, +66 µm at h = 10 mm, and +141 µm at h = 12 mm. At the modeled 19.0 mm clear semi-diameter, the departure reaches about +1.595 mm. The positive departure means the actual rear surface is less deeply concave than the spherical base at the rim, reducing excessive marginal refraction on this strong converging surface.

### Even-order refit used in the data file

LensVisualizer's current asphere model accepts even-order coefficients only. The data file therefore uses an even-order least-squares refit of the full patent departure, not a direct coefficient transcription. The fit was performed over each modeled semi-diameter and uses standard K = 0.

| Surface | Fit radius | Max residual | RMS residual | Edge departure, patent | Edge departure, refit |
|---|---:|---:|---:|---:|---:|
| 16A | 17.0 mm | 0.175 µm | 0.051 µm | +0.087712 mm | +0.087785 mm |
| 17A | 19.0 mm | 0.111 µm | 0.050 µm | +1.594924 mm | +1.594817 mm |

These residuals are far below normal drafting or rendering significance. The analysis document preserves the original odd/even patent coefficients, while the data file stores the even-order refit required by the renderer.

## Conditional Expressions

The patent defines six conditional expressions for the architecture. Recalculation from the Example 1 prescription gives the same rounded values as Table 19.

| # | Expression | Computed | Patent table | Meaning |
|---|---|---:|---:|---|
| (1) | νd1b − νd1a | 27.62 | 27.62 | G1 axial color control |
| (2) | νd1b − νd1gp | 27.72 | 27.72 | G1 axial and lateral color balance |
| (3) | R2g1 / f1 | −0.4146 | −0.41 | G2 front curvature versus G1 power |
| (4) | f2gf / f2gr | 0.7365 | 0.74 | Stop-side power balance in G2 |
| (5) | f1a / f1 | 0.6703 | 0.67 | L1a power share in G1 |
| (6) | f1b / f1 | 1.5397 | 1.54 | L1b power share in G1 |

All six expressions satisfy the broader and preferred patent ranges.

## Verification Summary

The prescription was re-entered and independently traced with a paraxial ABCD / y-nu matrix calculation. The following values are from that independent calculation, not from the prior draft.

| Quantity | Verified value |
|---|---:|
| Effective focal length | 44.6902025 mm |
| Patent specification focal length | 44.690 mm |
| Patent design F-number | 2.88 |
| Entrance pupil semi-diameter required by f/FNo | 7.75868 mm |
| Physical stop semi-diameter | 7.65317 mm |
| Air-equivalent BFD after L3b | 31.7255 mm by ray trace; 31.7267 mm by folded PP sum |
| G1 focal length | −66.2813 mm |
| G2 focal length | +43.4669 mm |
| G3 focal length | −106.1496 mm |
| G2 front subgroup focal length | +36.6309 mm |
| G2 rear subgroup focal length | +49.7305 mm |
| Petzval sum | +0.00152347 mm⁻¹ |
| Petzval radius | 656.4 mm |

Semi-diameters are not published in the patent. The data file therefore uses inferred clear apertures constrained by edge thickness, surface-sag overlap, element semi-diameter ratios, the 62 mm production filter thread, and the renderer's spherical rim limits. Surfaces 5, 7, 9, 15, and 16A are additionally trimmed to avoid large visual overhangs against their local element boundaries. These estimates should be read as mechanically plausible visualization apertures, not as Fujifilm production drawings.

## Sources

- US 2020/0174231 A1, Taiga Noda, FUJIFILM Corporation, "Imaging Lens and Imaging Apparatus," published June 4, 2020. Primary source for Example 1 prescription, grouping, focus mechanism, conditional expressions, and aspherical coefficients.
- US 10,591,702 B2, parent patent, granted March 17, 2020. Same disclosure family.
- FUJIFILM Corporation, "FUJINON GF45mmF2.8 R WR" official specifications. Used for production element/group count, aspherical and ED count, focus range, maximum magnification, aperture, filter size, dimensions, and weight.
- FUJIFILM Corporation press-release material for GF45mmF2.8 R WR. Used for the production statement that the inner-focus system moves six elements.
- OHARA Corporation public glass data sheets and catalog downloads. Used to verify S-TIL26, S-LAH55V, S-LAL7/S-LAL7Q, S-NSL36, L-LAH85V, S-LAH71, and S-TIL25 assignments.
- HOYA Group Optics Division glass-designation and cross-reference material. Used to verify the FCD1 497/816 ED coordinate and to classify the HOYA dense-flint equivalents.
