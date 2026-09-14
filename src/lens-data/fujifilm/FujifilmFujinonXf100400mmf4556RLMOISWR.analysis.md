## Patent Reference and Design Identification

**Patent:** US 2017/0090170 A1\
**Application Number:** US 15/268,864\
**Priority:** September 28, 2015 (JP 2015-189934)\
**Filed:** September 19, 2016\
**Published:** March 30, 2017\
**Inventor:** Taiga Noda\
**Assignee:** FUJIFILM Corporation\
**Title:** ZOOM LENS AND IMAGING APPARATUS\
**Embodiment analyzed:** Example 1

The prescription analyzed here is Example 1 of US 2017/0090170 A1. The patent itself does not name a commercial lens. For this LensVisualizer entry, Example 1 is correlated with the **FUJIFILM FUJINON XF 100-400mm f/4.5-5.6 R LM OIS WR**. That correlation is fixed for this project but remains an identification inference rather than a statement of manufacturer confirmation.

Several independent features converge on that identification:

1. Fujifilm specifies the production lens as 21 elements in 14 groups. The final model contains 21 glass elements and seven cemented doublets, yielding 14 air-separated optical groups, while the patent organizes those elements into six moving functional groups G1-G6 (¶0090).
2. The patent's three published focal lengths are 102.873, 178.159, and 387.872 mm, with F-numbers 4.62, 4.79, and 5.78. These lie close to the marketed 100-400 mm and f/4.5-5.6 range without any rescaling.
3. The patent gives full fields of 15.6°, 9.0°, and 4.2°. Fujifilm markets the lens with a 16.2°-4.1° angle-of-view range. The small differences are compatible with rounded marketing specifications and the patent's own numerical design states.
4. Fujifilm's current specification lists five ED elements and one Super ED element. The patent prescription contains six notably low-dispersion coordinate sets in corresponding positions, including four elements at nd = 1.49700, νd = 81.54 and one at nd = 1.43875, νd = 94.66. The data file treats these only as catalog-coordinate classes; it does not assign Fujifilm's ED or Super ED marketing labels to specific patent elements.
5. The patent places optical stabilization in the rear portion G2R of the second group (¶0075) and focus in G5 (¶0076). The production lens is an OIS, linear-motor autofocus lens, providing consistent mechanical context without proving the patent-to-product identity by itself.
6. The Japanese priority date is September 28, 2015, and Fujifilm lists the production lens release date as February 18, 2016. The chronology is therefore consistent with a design developed before product release.

The data file preserves the patent prescription at scale factor **s = 1**. No radii, thicknesses, focal lengths, or image-plane coordinates are uniformly rescaled. Example 1 is entirely spherical or plano; there are no aspherical coefficients and therefore no asphere-coefficient transformation.

The patent's plane-parallel optical member `PP`, represented by source surfaces 37-39 between the last lens and the image surface, is not part of the LensVisualizer lens prescription. It is a surrogate for cover glass, filters, or similar camera-side components (¶0059, ¶0087). The data file omits those surfaces and replaces their optical translation with an air-equivalent rear spacing after surface 36. No other active lens surface is removed.

## Optical Architecture

Example 1 is a six-functional-group zoom with paraxial power order **positive / negative / positive / positive / negative / positive**. The final data file contains 21 elements and 14 air-separated groups. The six patent groups are kinematic and functional units rather than the same thing as the 14 air-separated optical groups.

The computed isolated-group focal lengths from the final TypeScript prescription are shown below. These are focal lengths of each complete group treated as a subassembly in air. They are not the standalone focal lengths of individual elements and are not measures of each group's in-situ sensitivity inside the complete zoom.

| Functional group | Computed isolated-group EFL | Principal role supported by the patent |
| --- | ---: | --- |
| G1 | +190.898227 mm | Front positive group; chromatic and spherical-aberration control begins with L1A (¶0062) |
| G2 | -37.159725 mm | Principal magnification-changing group (¶0063) |
| G2F | +348.127643 mm | Front cemented sub-group aiding chromatic control during zooming (¶0072) |
| G2R | -33.307978 mm | Rear negative sub-group; stabilization unit location (¶0075) |
| G3 | +49.301103 mm | Principal positive refractive effect of the system (¶0064) |
| G4 | +50.603962 mm | Shares positive power with G3 and suppresses spherical-aberration variation (¶0065) |
| G5 | -31.997078 mm | Negative rear focusing group (¶0066, ¶0076) |
| G6 | +114.376640 mm | Positive final relay reducing peripheral ray incidence angle at the image plane (¶0067) |

### Zoom kinematics

At infinity focus, the final model transcribes the patent's three zoom positions at 102.873, 178.159, and 387.872 mm. The source variable spacings D5 and D13 change monotonically in opposite directions, while D22, D29, and the source D36 rear spacing reverse between the three published states. The modeled D36 values are the PP-normalized air-equivalent spacings rather than the physical source DD(36) values.

The stop is source-published at patent surface 22, immediately behind G3. It moves integrally with G3 during zooming (¶0084). Its axial placement is therefore not inferred. Its **semi-diameter is inferred**: the three published focal-length/F-number pairs imply paraxial stop radii of 9.045284, 9.045848, and 9.074770 mm, and `STO.sd = 9.055300420693245 mm` is their arithmetic mean.

The final normalized optical tracks from the first surface to the modeled image plane are 220.705561, 249.271561, and 279.766561 mm. Relative to the independently recomputed EFLs, `TL/EFL` is 2.1456, 1.3993, and 0.7214. Under the project's strict terminology, only the longest focal-length state qualifies as a telephoto-form configuration because only there is `TL/EFL < 1`. None of the three states is retrofocus: the traced back focal distances from surface 36 are 38.893038, 31.693805, and 32.616656 mm, each smaller than its corresponding EFL.

## Element-by-Element Analysis

The focal lengths in this section are the **standalone isolated-element focal lengths in air** stored in the final data file and independently recomputed from each element's two surfaces, center thickness, and nd. They must not be read as the element's in-situ contribution to the complete zoom. Cemented relationships are stated separately where present.

### G1 — Front positive group

#### L1A — Negative Meniscus

**nd = 1.83481, νd = 42.72. Glass: S-LAH55V class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -216.078143 mm.**

L1A is the negative front member of cemented doublet D1 with L1B. The patent explicitly assigns the negative 1A lens a role in correcting longitudinal chromatic aberration, lateral chromatic aberration, and spherical aberration (¶0062). Its high index and moderate dispersion place strong refractive leverage at the front of the system without making the entire first group negative.

#### L1B — Biconvex Positive

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +187.165023 mm.**

L1B is the positive cemented partner of L1A in D1. The patent discusses L1B together with L1C: the two positive lenses secure the positive power of G1 while suppressing spherical-aberration generation as the front group is kept compact (¶0062). The low-dispersion coordinate of L1B also makes the D1 pairing consistent with the patent's chromatic-correction function, but the data does not identify a supplier or production ED designation for this element.

#### L1C — Plano-Convex Positive

**nd = 1.43875, νd = 94.66. Glass: S-FPL55 class (OHARA coordinate equivalent; historical vendor identity unproven). Standalone f = +220.225573 mm.**

L1C is air-spaced behind D1 and completes G1. It has the lowest index and highest Abbe number in the final prescription. In the patent's description, L1B and L1C jointly provide the positive refractive power needed from the first group while controlling spherical aberration (¶0062). The S-FPL55 wording is deliberately a coordinate-class identification only; the data file does not claim that the 2015 design used a historical production melt sold under that exact catalog name.

### G2 — Negative variator with G2F and G2R sub-groups

#### L2A — Positive Meniscus

**nd = 1.60562, νd = 43.71. Glass: S-BAM4 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +77.622309 mm.**

L2A is the positive front member of cemented doublet D2, the patent's G2F sub-group. G2F precedes the negative G2R portion. The patent states that this positive-negative cemented unit contributes to correction of longitudinal chromatic aberration during magnification change and helps keep the lens system short (¶0072).

#### L2B — Negative Meniscus

**nd = 1.75500, νd = 52.32. Glass: S-YGH51 class (OHARA coordinate equivalent; S-LAH97 is post-priority). Standalone f = -101.272986 mm.**

L2B is cemented to L2A in D2 and supplies the negative member required by the G2F construction. Its catalog wording is temporally constrained: the same nd/νd coordinate was later associated with S-LAH97, but that glass designation postdates the 2015 patent priority. The final data therefore retains the S-YGH51-class wording rather than back-projecting a later catalog identity.

#### L2C — Biconcave Negative

**nd = 1.59522, νd = 67.73. Glass: S-FPM2 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -36.473279 mm.**

L2C is the negative front member of D3, the cemented pair inside G2R. The patent defines G2R as a net-negative rear portion of G2 and identifies it as the preferred stabilization group (¶0063, ¶0075). L2C's strong negative standalone power is balanced by L2D at the cemented interface.

#### L2D — Positive Meniscus

**nd = 1.78470, νd = 26.29. Glass: S-TIH23 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +67.438928 mm.**

L2D is the positive, high-dispersion cemented partner of L2C in D3. The large dispersion contrast across the pair is consistent with the patent's statement that the G2R cemented lens suppresses longitudinal and lateral chromatic-aberration fluctuations during zooming (¶0063). That statement is source-grounded; no stronger apochromatic or anomalous-dispersion claim is made.

#### L2E — Biconcave Negative

**nd = 1.81600, νd = 46.62. Glass: S-LAH59 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -62.251147 mm.**

L2E follows D3 as the negative single lens completing G2R. The patent states that this single negative lens distributes the negative power of G2R and helps suppress spherical aberration, astigmatism, and distortion (¶0063). Together, D3 and L2E form the rear negative sub-group that the patent proposes shifting perpendicular to the axis for camera-shake correction (¶0075).

### G3 — Principal positive group and stop-adjacent correction block

#### L3A — Biconvex Positive

**nd = 1.58913, νd = 61.13. Glass: S-BAL35 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +47.377306 mm.**

L3A is the positive singlet at the front of G3. The patent assigns G3 the principal positive refractive effect of the whole system (¶0064) and states that the front positive singlet helps reduce the diameters of G3 and later groups (¶0083). It precedes two cemented positive-negative correction pairs.

#### L3B — Biconvex Positive

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +37.395117 mm.**

L3B is the positive member of D4, the first cemented pair in G3. Its low-dispersion coordinate is paired with the much higher-index and lower-Abbe L3C. The patent describes the two G3 cemented pairs collectively as correcting longitudinal chromatic aberration and color bleeding associated with spherical-aberration color shifts (¶0083).

#### L3C — Biconcave Negative

**nd = 1.90043, νd = 37.37. Glass: TAFD37 class (HOYA coordinate equivalent; patent vendor unspecified). Standalone f = -29.633053 mm.**

L3C is the high-index negative partner of L3B in D4. Its nd is the highest in Example 1. The coordinate matches the HOYA TAFD37 class used in the data file, but the patent does not identify HOYA as the supplier. In optical terms, the strong index and dispersion contrast allows D4 to combine refractive and chromatic correction within a compact axial span.

#### L3D — Biconvex Positive

**nd = 1.58267, νd = 46.42. Glass: S-BAM3 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +25.851192 mm.**

L3D is the positive member of D5, the second G3 cemented pair. It is individually stronger than L3B in isolated focal length, but the cemented pair must be considered as a compound unit rather than as the arithmetic sum of its individual element powers.

#### L3E — Biconcave Negative

**nd = 1.51742, νd = 52.43. Glass: S-NSL36 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -23.501991 mm.**

L3E completes D5 and lies immediately ahead of the aperture stop. The patent treats D4 and D5 together as the two cemented correction pairs of G3 (¶0083). The stop then follows G3 and shares its zoom motion (¶0084), coupling this correction block closely to pupil geometry through the zoom range.

### G4 — Positive relay group

#### L4A — Biconvex Positive

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +54.010085 mm.**

L4A begins G4 after the stop. The patent assigns G4 positive refractive power shared with G3 and attributes to the group suppression of spherical-aberration generation and spherical-aberration fluctuation during zooming (¶0065). L4A supplies a positive front contribution using the same low-dispersion coordinate that recurs elsewhere in the design.

#### L4B — Negative Meniscus

**nd = 1.83481, νd = 42.72. Glass: S-LAH55V class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -53.365690 mm.**

L4B is an air-spaced negative meniscus between L4A and the rear cemented pair D6. The patent does not assign an element-specific aberration function to L4B; its role in the final model is best described conservatively as part of the balancing required for G4 to remain net positive while controlling the aberration behavior that the patent attributes to the group as a whole.

#### L4C — Negative Meniscus

**nd = 1.69700, νd = 48.52. Glass: S-LAM59 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -62.319784 mm.**

L4C is the negative front member of D6. It is cemented to the positive L4D, forming the final compound component of G4. No independent source statement assigns a unique correction task to L4C, so the analysis does not infer one beyond its participation in the net-positive G4 relay.

#### L4D — Biconvex Positive

**nd = 1.51742, νd = 52.43. Glass: S-NSL36 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +27.830373 mm.**

L4D is the positive rear member of D6. The cemented pair closes a group whose complete isolated EFL remains positive despite its two negative members. This is a compound-group property and should not be confused with the standalone focal lengths listed for L4C and L4D.

### G5 — Negative internal focusing group

#### L5A — Negative Meniscus

**nd = 1.61800, νd = 63.33. Glass: S-PHM52 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -32.409035 mm.**

L5A is the first of two negative lenses at the front of G5. The patent states that placing the two negatives on the object side of G5 helps suppress aberration generation and fluctuations of astigmatism through zooming (¶0066). It also defines the ratio of L5A power to the complete G5 power in Conditional Formula (5).

#### L5B — Plano-Concave Negative

**nd = 1.49700, νd = 81.54. Glass: S-FPL51 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = -29.997988 mm.**

L5B is the second negative lens and the front member of D7. Its high Abbe number is explicitly relevant to the patent's material constraint: Conditional Formula (6) uses the mean Abbe number of L5A and L5B to balance chromatic correction against the curvature demands associated with high-Abbe materials (¶0081-¶0082).

#### L5C — Positive Meniscus

**nd = 1.69350, νd = 53.20. Glass: L-LAL13 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +28.508291 mm.**

L5C is cemented to L5B in D7 and completes the negative focusing group. The patent assigns the positive 5C lens a role in correcting fluctuations of lateral chromatic aberration through zooming in combination with L5A and L5B (¶0066). G5 as a complete group remains negative and is the only group moved in the reconstructed close-focus model.

### G6 — Final positive relay

#### L6A — Positive Meniscus

**nd = 1.54072, νd = 47.23. Glass: S-TIL2 class (OHARA coordinate equivalent; patent vendor unspecified). Standalone f = +114.376640 mm.**

L6A is the sole element of G6. The patent states that G6 reduces the incident angles of peripheral rays at the image plane (¶0067). It further argues that keeping G6 to a single positive lens avoids added thickness that would otherwise require stronger negative power in G2 or G5 and could increase spherical-aberration fluctuation (¶0085).

## Glass Identification and Selection

The final data file uses **catalog-coordinate class/equivalent labels**, not claimed supplier identities. US 2017/0090170 A1 publishes `nd`, `νd`, and `θgF`, but it does not name an optical-glass manufacturer. The published coordinates were compared with authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog data; the table below reports the coordinate classes retained in the data file.

| Working class in data | nd | νd | Elements | Provenance limitation |
| --- | ---: | ---: | --- | --- |
| S-LAH55V class | 1.83481 | 42.72 | L1A, L4B | OHARA coordinate equivalent; patent vendor unspecified |
| S-FPL51 class | 1.49700 | 81.54 | L1B, L3B, L4A, L5B | OHARA coordinate equivalent; patent vendor unspecified |
| S-FPL55 class | 1.43875 | 94.66 | L1C | Coordinate match; historical vendor identity unproven |
| S-BAM4 class | 1.60562 | 43.71 | L2A | OHARA coordinate equivalent; patent vendor unspecified |
| S-YGH51 class | 1.75500 | 52.32 | L2B | Historical OHARA coordinate equivalent with its own published curve |
| S-FPM2 class | 1.59522 | 67.73 | L2C | OHARA coordinate equivalent; patent vendor unspecified |
| S-TIH23 class | 1.78470 | 26.29 | L2D | OHARA coordinate equivalent; patent vendor unspecified |
| S-LAH59 class | 1.81600 | 46.62 | L2E | OHARA coordinate equivalent; patent vendor unspecified |
| S-BAL35 class | 1.58913 | 61.13 | L3A | OHARA coordinate equivalent; patent vendor unspecified |
| TAFD37 class | 1.90043 | 37.37 | L3C | HOYA coordinate equivalent; patent vendor unspecified |
| S-BAM3 class | 1.58267 | 46.42 | L3D | OHARA coordinate equivalent; patent vendor unspecified |
| S-NSL36 class | 1.51742 | 52.43 | L3E, L4D | OHARA coordinate equivalent; patent vendor unspecified |
| S-LAM59 class | 1.69700 | 48.52 | L4C | OHARA coordinate equivalent; patent vendor unspecified |
| S-PHM52 class | 1.61800 | 63.33 | L5A | OHARA coordinate equivalent; patent vendor unspecified |
| L-LAL13 class | 1.69350 | 53.20 | L5C | OHARA low-softening-family coordinate equivalent; patent vendor unspecified |
| S-TIL2 class | 1.54072 | 47.23 | L6A | OHARA coordinate equivalent; patent vendor unspecified |

The most obvious chromatic pattern is the repeated use of high-Abbe crown-like coordinates against higher-index, lower-Abbe partners in cemented pairs and distributed groups. This is consistent with the patent's explicit chromatic-correction descriptions for G1, G2F/G2R, G3, and G5. It also provides convergent support for Fujifilm's production specification of six ED elements in total, one of them Super ED. It does **not** identify which patent coordinate became which production ED element.

Table 1's 21 glass `θgF` values are now retained as `dPgF = θgF - (0.6438 - 0.001682·νd)`.
The catalog supplies C/d/F and the engine preserves the patent ratio at g; no absolute line indices are fabricated.
Positive departures of at least 0.01 are marked patent-backed APD: L1B, L1C, L2C, L2D, L3B, L4A and L5B.
This includes a high-dispersion flint (L2D); APD does not mean ED, and neither establishes an APO designation.
S-YGH51 now uses its own published historical OHARA curve, rather than resolving the modern S-LAH97 name in a comment.
The glass names remain coordinate equivalents without a production supplier claim.

## Focus Mechanism

The patent specifies rear internal focusing by G5: the fifth lens group moves toward the image side when focus changes from infinity toward the nearest object (¶0076). It does not publish numerical close-focus spacings. Fujifilm specifies a production minimum focus distance of **1.75 m measured from the image plane** and a maximum reproduction ratio of **0.19x at the telephoto end**.

The data file therefore uses the focus status **`CONSTRAINED_RECONSTRUCTION`**. Only G5 moves. At every authored zoom position, D29 increases and D34 decreases by exactly the same amount, conserving `D29 + D34` and preserving the one-degree-of-freedom translation implied by the patent mechanism. The close-focus state is code-solved in the PP-omitted normalized model; it is not a patent-published spacing table.

| Zoom state | G5 imageward shift | D29 infinity → close | D34 infinity → close |
| --- | ---: | ---: | ---: |
| 102.873 mm | 1.589403 mm | 7.202000 → 8.791403 mm | 5.165000 → 3.575597 mm |
| 178.159 mm | 4.099677 mm | 7.574000 → 11.673677 mm | 17.208000 → 13.108323 mm |
| 387.872 mm | 14.851319 mm | 2.343000 → 17.194319 mm | 27.898000 → 13.046681 mm |

Independent paraxial verification of the final TypeScript arrays gives an absolute telephoto magnification of **0.188532x** at the modeled 1.75 m object distance, close to Fujifilm's rounded 0.19x specification. This agreement is a validation of the constrained model, not evidence that the reconstructed spacing row was published by Fujifilm or by the patent.

Fujifilm describes the production autofocus system as linear-motor driven. The motor mechanism is product metadata rather than part of the optical prescription and is not represented by additional optical surfaces.

## Chromatic Correction Strategy

The patent distributes chromatic correction through several physically separated regions rather than concentrating it in a single achromat. The front negative L1A is explicitly assigned both longitudinal and lateral chromatic correction (¶0062). G2F uses a cemented positive-negative pair to suppress longitudinal chromatic variation during zooming (¶0072), while the G2R cemented pair is described as suppressing both longitudinal and lateral chromatic fluctuation (¶0063). G3 then adds two more cemented positive-negative pairs, which the patent associates with longitudinal chromatic correction and suppression of color bleeding tied to spherical-aberration color shifts (¶0083).

The rear focusing group continues that strategy. The patent's two material/power constraints on G5—Conditional Formulas (5) and (6)—place limits on the negative L5A power relative to G5 and on the mean Abbe number of L5A and L5B. L5C is then identified as the positive member correcting lateral chromatic-aberration fluctuation in combination with the two negatives (¶0066, ¶0079-¶0082).

This source language supports discussion of chromatic correction, but not an apochromatic classification. The authored `dPgF` values preserve the patent's partial dispersion without establishing an APO designation.

## Conditional Expressions

US 2017/0090170 A1 defines six principal conditions and preferred narrower ranges for the group powers and G5 materials. The final TypeScript arrays independently reproduce the following values:

| Condition | Computed from final data | Preferred patent range | Result |
| --- | ---: | --- | --- |
| `f2/f1` | -0.194657 | `-0.25 < f2/f1 < -0.15` | Pass |
| `f2/f3` | -0.753730 | `-0.8 < f2/f3 < -0.7` | Pass |
| `f2/f2R` | 1.115640 | `1.0 < f2/f2R < 1.25` | Pass |
| `f5/f1` | -0.167613 | `-0.2 < f5/f1 < -0.1` | Pass |
| `f5A/f5` | 1.012875 | `0.9 < f5A/f5 < 1.2` | Pass |
| `(νd5A + νd5B)/2` | 72.435 | `50 < (...) < 75` | Pass |

These values agree with the rounded Example 1 entries in patent Table 25. The group focal lengths used in the first five ratios are isolated complete-group or complete-element paraxial focal lengths, computed consistently from the final prescription rather than inferred from the commercial 100-400 mm marketing range.

## Image Stabilization

The patent identifies G2R as the preferred camera-shake correction group and proposes moving it perpendicular to the optical axis (¶0075). G2R comprises the cemented L2C+L2D pair followed by L2E, and its computed isolated-group focal length is **-33.307978 mm**. The patent's stated rationale is that this location provides stabilization sensitivity while limiting the required transverse travel and aberration variation.

Fujifilm's production lens is marketed with Optical Image Stabilization, and Fujifilm's product material describes linear-motor actuation in the stabilization system. This mechanical correspondence is one part of the production correlation. The LensVisualizer data file, however, is a centered sequential prescription and does not author decentered OIS positions or a transverse stabilization variable. The OIS discussion here therefore describes the patent and product mechanism; it is not a simulated off-axis stabilization state.

## Verification Summary

The final data preserves the patent's d-line prescription without scaling. Independent reduced-angle `y-ν` tracing and a separate ABCD basis-ray calculation were rerun against the actual TypeScript arrays and agree numerically. The three infinity states reproduce the patent focal lengths within 0.051 mm:

| State | Patent f | Computed EFL | Modeled F-number from authored stop | Patent F No. |
| --- | ---: | ---: | ---: | ---: |
| Wide | 102.873 mm | 102.863094 mm | 4.614445 | 4.62 |
| Intermediate | 178.159 mm | 178.141182 mm | 4.784521 | 4.79 |
| Telephoto | 387.872 mm | 387.821474 mm | 5.791673 | 5.78 |

The production 100-400 mm and f/4.5-5.6 values remain marketing specifications. They are not substituted for the design focal lengths or for the modeled f-number used to control stop and pupil geometry.

The patent's `PP` plate surrogate is omitted by design. The source physical DD(36) values of 36.048, 28.853, and 29.788 mm become air-equivalent modeled rear spacings of **38.904561, 31.709561, and 32.644561 mm** after the two plate translations and final 1.000 mm air spacing are normalized. The traced back focal distances from surface 36 are 38.893038, 31.693805, and 32.616656 mm, keeping the normalization residual below 0.028 mm in every state.

The semi-diameters are not patent-published. They are modeling inferences derived from traced on-axis and off-axis rays, the patent section drawing, and external mechanical bounds. The integration rim review below supersedes the initial geometry extrema, which were calculated at the smaller
pre-audit semi-diameters. The updated prescription passes the repository surface and image-circle checks.

Petzval was independently recomputed surface by surface as `φ/(n·n′)` from the final prescription, giving **0.001061927758 mm⁻¹**. This is a computed design result, not a patent-published quantity.

No patent numerical value was silently corrected. The source PDF's parsed text contains OCR corruption in several Table 1-3 cells; the rendered patent page was used to preserve the printed values. In particular, the telephoto `DD(22)` entry in Table 3 is **24.280 mm**. This is an OCR normalization, not a correction to the patent itself.

## Sources and References

1. **US 2017/0090170 A1**, Taiga Noda, *ZOOM LENS AND IMAGING APPARATUS*, published March 30, 2017. Primary prescription source: Fig. 1; ¶0057-¶0098; Tables 1-3 and 25.
2. **FUJIFILM, XF100-400mmF4.5-5.6 R LM OIS WR specifications.** Product identity, 21-element/14-group construction, 100-400 mm range, 16.2°-4.1° field, F4.5-F5.6 aperture, 1.75 m focus range, 0.19x telephoto magnification, nine rounded blades, 77 mm filter, and external dimensions: https://www.fujifilm-x.com/en-us/products/lenses/xf100-400mmf45-56-r-lm-ois-wr/specifications/
3. **FUJIFILM lens manual BL00004742-104.** Current manufacturer manual; Japanese specification states six ED elements in total, one of them Super ED, and describes linear-motor focus drive: https://dl.fujifilm-x.com/support/manual/lenses/lens_xf100-400_manual_02.pdf
4. **FUJIFILM Mall Japan, XF100-400mmF4.5-5.6 R LM OIS WR.** Manufacturer release date and Japanese production specifications: https://mall-jp.fujifilm.com/shop/g/g16501109/
5. **FUJIFILM, “XF100-400mmF4.5-5.6 R LM OIS WR — The Final Piece.”** Manufacturer discussion of optical-glass placement, linear-motor focusing, and OIS implementation: https://www.fujifilm-x.com/en-us/stories/xf100-400mmf45-56-r-lm-ois-wr-the-final-piece/
6. **OHARA optical-glass catalog resources:** https://oharacorp.com/glass-type/optical-glass/
7. **HOYA optical-glass catalog resources:** https://www.hoya-opticalworld.com/english/datadownload/index.html


## Integration Audit — 2026-09-11 UTC

Inspected the exact local US 2017/0090170 A1, PDF page 2, Fig. 1 wide panel at 600 dpi; screening crop `0.39,0.367,0.608,0.438; axis=0.3995`. Corrected the automatic axis detection before interpreting the screen (180.90 µm/pixel). Enlarged inspection supports the changes below. G5 cannot reach its drawn approximately 10.8 mm outline: S31–S32 would overlap. Its 8.3 mm clear aperture passes. L4B–D retain their smaller rims because the larger outlines cause gap overlap or negative edge thickness. OHARA S-BAM3 brings coverage to 21/21, as a coordinate-compatible curve rather than a production-vendor identity.

Display name checked against the manufacturer product designation; the existing FUJINON XF name, aperture and R/LM/OIS/WR suffixes are correct. Structured patent assignee metadata uses the existing canonical `Fujifilm Corporation` spelling.

| Surfaces | Previous SD (mm) | Updated SD (mm) |
| --- | ---: | ---: |
| 14–15 (L3A) | 12.7 | 15.9 |
| 23–24 (L4A) | 9.1 | 11.5 |
| 30–31 (L5A) | 6.9 | 8.3 |
| 32–34 (L5B/C) | 7.0 | 8.3 |
| 35–36 (L6A) | 11.3 | 14.2 |


## Diagram and Spectral Review — 2026-09-11 UTC

Reviewed the local site against Fig. 1 at wide and tele, and checked focus travel relative to the fixed image plane.
The second pass enlarged S16–S18 from 12.2 to 14.8 mm, S19–S21 from 11.2 to 13.2 mm, and S27–S29 from 8.7 to
9.8 mm. The 600 dpi figure suggests approximately 15.2, 13.6, and 11.3 mm respectively. The latter two are capped
below the figure outlines: 13.5 mm gives negative L3D edge thickness; 11.2 mm gives negative L4D edge thickness.
These are clear optical rims, not mechanical blanks. The earlier first-pass rim table remains a record of that pass.

Focus is correctly infinity-to-close: only G5 moves imageward, +1.589403 mm wide and +14.851319 mm tele.
From wide to tele, camera-frame group shifts are G1 −59.061, G2 +2.593, G3 −24.535, G4 −11.614, G5 −16.473,
and G6 +6.260 mm. G2 reaches +7.897 mm and G6 +7.195 mm at the middle keyframe before reversing.
The original ordered zoom/focus spacing arrays agree with Table 3 and Fig. 1; no reversal or reordering is needed.

The 21 `θgF` entries were read directly from Table 1, PDF page 24. The new APD colors distinguish patent-backed
partial dispersion from inferred vendor matches; all 21 elements continue to use catalog dispersion.
