# MAMIYA-SEKOR CS 35mm f/2.8

## Patent Reference and Design Identification

**Patent:** JP1978-066222 (特開昭53-66222)
**Filed:** 26 November 1976
**Published:** 13 June 1978
**Inventor:** Katsunori Ebara
**Applicant:** Mamiya Koki Co., Ltd.
**Title:** Photographic Lens (写真レンズ)
**Embodiment analyzed:** Example 1

JP1978-066222 describes a compact retrofocus photographic objective composed of six air-spaced elements. Example 1 is used here as the fixed prescription correlated with the production Mamiya-Sekor CS 35mm f/2.8. The manufacturer source does not identify the patent, so the correlation rests on convergent design and product evidence rather than an explicit manufacturer statement:

1. The patent example and the manufacturer manual both specify six elements in six groups.
2. The patent gives F/2.8, matching the marketed maximum aperture.
3. The patent is normalized to $f = 100.000$; uniform scaling by $s = 0.35$ produces the 35 mm production class and a traced design EFL of 34.98833094 mm.
4. The patent states a 62° full field, while the manufacturer manual lists 63° for the production lens.
5. Figure 1 and the manufacturer's lens-section drawing show the same broad sequence: a large front negative meniscus, a thick positive second element, a smaller pre-stop meniscus, and a compact three-element rear section.
6. The 1976 filing and 1978 publication are consistent with the Mamiya NC/CS system period represented by the manual.

The modeled prescription contains one disclosed source correction. Page 125 clearly prints the rear radius of G6 as $r_{62} = -47.0848$ at the normalized scale. Taken literally, that table traces to an EFL of 40.70146610 mm rather than the published 100.000 mm. The model adopts $r_{62} = -457.0848$ as a one-digit insertion hypothesis, not as a confirmed erratum. This value agrees with the weak rear curvature drawn in Figure 1 and yields an EFL of 99.96665984 mm before scaling. The exact one-parameter radius required to force 100.000 mm would be −457.99795549 mm, but that fitted value is not used because it has no direct source support.

Every dimensional prescription value is then scaled by 0.35. Refractive indices and Abbe numbers remain unchanged. The design is entirely spherical, so no conic constant or polynomial coefficient requires transformation.

## Optical Architecture

The prescription is a six-element, six-group retrofocus objective with the element-power sequence negative–positive–negative–negative–positive–positive. Its defining feature is the combination of a large negative front meniscus and an unusually thick positive second element. The front meniscus extends the back focus, while G2 restores strong positive power without eliminating the wide-angle clearance created by G1.

The scaled model has an EFL of 34.98833094 mm and a back focal distance of 37.51991298 mm. The ratio $\mathrm{BFD}/\mathrm{EFL} = 1.07235504$ satisfies the retrofocus criterion. The total track from the first optical surface to the image plane is 76.17352798 mm, giving $\mathrm{TL}/\mathrm{EFL} = 2.17711237$; the design is therefore not telephoto. The shorter first-to-last lens-surface span is 38.653615 mm, or $L/\mathrm{EFL} = 1.10475733$, and is reported separately rather than used for the telephoto test.

For descriptive purposes, the six elements can be divided into three air-spaced blocks. Their isolated subassembly EFLs are approximately +26.119 mm for G1–G2, −15.638 mm for G3–G4, and +20.508 mm for G5–G6. These are standalone block calculations, not unique allocations of in-situ system power. There are no cemented-net powers because all six elements are air-spaced. The complete objective obtains its focal length from the interaction of all six elements and the intervening air spaces.

The stop lies between G3 and G4. This location separates the large front retrofocus collector from the compact central and rear correction section. The patent does not tabulate the stop coordinate or diameter; both are modeling inferences discussed in the verification summary.

## Element-by-Element Analysis

### G1 — Negative Meniscus, convex to object

**$n_d = 1.48749$, $\nu_d = 70.1$. Glass: S-FSL5 catalog equivalent (production supplier not established; patent 487701). Standalone $f = -46.4892$ mm.**

G1 is the largest element and supplies the strongly divergent entrance section required by the retrofocus architecture. Its positive front and rear radii form a negative meniscus whose rear surface carries most of the element's negative power. In the assembled lens, this front divergence is what permits the rear focal distance to exceed the system EFL.

The relatively low index and high Abbe number are also required by the patent's material condition for the first and third elements. S-FSL5 is used as a current catalog-equivalent dispersion model because its coordinates closely reproduce the patent pair; this does not establish a historical supplier or production melt.

### G2 — Biconvex Positive

**$n_d = 1.69480$, $\nu_d = 55.5$. Glass: Unmatched ($n_d = 1.69480$, $\nu_d = 55.5$; nearest public 697555 lanthanum-crown family). Standalone $f = +22.2337$ mm.**

G2 is the strongest positive singlet and is exceptionally thick relative to the rest of the prescription. It restores convergence after G1 and forms the positive part of the front retrofocus block. The patent makes this thickness a structural condition: normalized $d_2 = 31.382$ mm exceeds $d_{23} + d_3 + d_{34} = 17.1169$ mm.

No current public catalog entry exactly matches the stored index and Abbe pair. The nearest common lanthanum-crown family is centered near $n_d = 1.69680$, so the element remains explicitly unmatched rather than being assigned a vendor glass that would not reproduce the prescription coordinates.

### G3 — Negative Meniscus, convex to image

**$n_d = 1.48749$, $\nu_d = 70.1$. Glass: S-FSL5 catalog equivalent (production supplier not established; patent 487701). Standalone $f = -126.8165$ mm.**

G3 is a weak negative meniscus immediately before the diaphragm. Its magnitude is much lower than the negative powers of G1 and G4, so its role is chiefly corrective rather than establishing the principal retrofocus geometry. It repeats the same low-index, high-Abbe coordinate pair used by G1 and satisfies the same patent material condition.

Because only $n_d$ and $\nu_d$ are published, the S-FSL5 assignment is a catalog-equivalent model rather than a production-glass identification. It supplies catalog dispersion for tracing without supporting an apochromatic or historical-melt claim.

### G4 — Biconcave Negative

**$n_d = 1.75520$, $\nu_d = 27.5$. Glass: 755275 dense-flint class, catalog family unresolved. Standalone $f = -18.5777$ mm.**

G4 is the strongest negative element and begins the compact post-stop section. Its high index and low Abbe number provide a pronounced power-and-dispersion contrast with G3 and the following positive elements. In the isolated G3–G4 block, the pair remains negative, with an EFL of approximately −15.638 mm.

The element is air-spaced from both neighbors. Its rear surface faces the strongly curved front surface of G5 across a narrow 1.1242 mm axial air gap, making that interface the limiting geometry for the inferred clear apertures.

### G5 — Positive Meniscus, convex to image

**$n_d = 1.74400$, $\nu_d = 44.8$. Glass: 744448 lanthanum-flint class, catalog family unresolved. Standalone $f = +33.7970$ mm.**

G5 reverses the strong negative power of G4 and starts the rear positive block. Both radii are negative, forming a positive meniscus with its stronger curvature on the image-side surface. Its intermediate Abbe number places it between the dense-flint G4 and the higher-Abbe positive G6.

The data support a lanthanum-flint class designation but not a unique vendor or historical melt. Its optical contribution is stated here as standalone power; no cemented-net value exists because G5 is separated from G4 and G6 by air.

### G6 — Biconvex Positive

**$n_d = 1.71300$, $\nu_d = 53.9$. Glass: 713539 lanthanum-crown class, catalog family unresolved. Standalone $f = +53.1429$ mm.**

G6 completes the rear positive block and sends the converging bundle across the long back-focus space to the image plane. Its front surface supplies most of its standalone power, while the modeled rear surface is weakly curved. The weak rear curvature is consistent with the patent drawing and is essential to bringing the traced focal length close to the published normalization.

The G5–G6 isolated block has an EFL of approximately +20.508 mm. That block value is not a substitute for the full-system EFL, because its in-situ action depends on the ray state delivered by the four preceding elements.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not name manufacturers or glass codes, and it gives no C-, F-, or g-line indices and no partial-dispersion deviation. Most glass strings therefore remain class or six-digit-coordinate annotations. G1 and G3 use S-FSL5 as a current catalog-equivalent dispersion model, not as a claim about the actual production melts.

| Elements | Stored coordinates | Data-file identification | Interpretation |
|---|---:|---|---|
| G1, G3 | 1.48749 / 70.1 | S-FSL5 catalog equivalent | Current spectral model; production supplier remains unresolved |
| G2 | 1.69480 / 55.5 | Unmatched | Nearest public lanthanum-crown family differs by about +0.002 in $n_d$ |
| G4 | 1.75520 / 27.5 | 755275 — dense-flint class | Strong high-index, low-Abbe negative glass class |
| G5 | 1.74400 / 44.8 | 744448 — lanthanum-flint class | Positive high-index glass with intermediate dispersion |
| G6 | 1.71300 / 53.9 | 713539 — lanthanum-crown class | Rear positive crown-class glass |

The principal dispersion contrast is between the high-Abbe G1/G3 pair and the low-Abbe dense-flint G4, with G2, G5, and G6 occupying intermediate high-index crown or lanthanum classes. This supports ordinary chromatic balancing within the prescription. It does not support an APO designation or any anomalous-partial-dispersion claim.

## Focus Mechanism

The patent publishes only the infinity prescription. It contains no finite-object spacing table, focus travel, magnification, or internal-group movement. The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`, with empty `var` and `varLabels` objects and one defined optical state.

The manufacturer manual lists a minimum focusing distance of 0.4 m, also printed as 1.5 ft. Those rounded values are not exact conversions and the manual does not define the measurement reference plane. The 0.4 m value is retained only as catalog metadata required by the data schema. It is not used to reconstruct unit extension, floating movement, close-focus magnification, or a second prescription state.

## Conditional Expressions

The patent claim uses dimensional and glass-coordinate conditions to define the design family. The dimensional and glass-coordinate evaluations use the published normalized values; uniform scaling does not change their truth values.

| Patent condition | Evaluation | Result |
|---|---:|---|
| $d_2 > d_{23} + d_3 + d_{34}$ | 31.382 > 17.1169 | Pass |
| $d_{23} < d_{34}$ | 2.572 < 10.355 | Pass |
| $\nu_1, \nu_3 > 64$ | 70.1, 70.1 | Pass |
| $n_1, n_3 < 1.53$ | 1.48749, 1.48749 | Pass |
| $L < 1.3f$ | 110.4389 < 130.0000, using the published $f = 100.000$ | Pass |

The first condition formalizes the unusual thickness of G2 relative to the following gap, G3, and the stop-containing air space. The glass conditions isolate G1 and G3 as low-index, high-Abbe elements within an otherwise higher-index palette.

## Verification Summary

The final model reproduces the corrected and scaled prescription with the following computed first-order quantities:

| Quantity | Computed value |
|---|---:|
| EFL | 34.98833094 mm |
| Back focal distance | 37.51991298 mm |
| Front principal plane from first surface | +27.19472395 mm, imageward |
| Rear principal plane from last surface | +2.53158204 mm, imageward |
| First-to-last lens-surface length | 38.65361500 mm |
| First surface to image plane (total track) | 76.17352798 mm |
| $\mathrm{BFD}/\mathrm{EFL}$ | 1.07235504 |
| $\mathrm{TL}/\mathrm{EFL}$ | 2.17711237 |
| Entrance-pupil diameter | 12.49583248 mm |
| Modeled wide-open f-number | 2.80000000 |
| Petzval sum, $\sum \phi/(n n')$ | +0.00532620032 mm⁻¹ |
| Signed Petzval reciprocal | +187.7511 mm |

The diaphragm position is inferred from Figure 1. The scaled G3–G4 air space of 3.62425 mm is split into 1.00000 mm from the rear of G3 to `STO` and 2.62425 mm from `STO` to G4. The physical stop semi-diameter is 6.735052411883 mm, solved at that inferred axial position to reproduce F/2.8 in the modeled entrance-pupil geometry.

The patent supplies no semi-diameters. The model derives them from the marginal and chief-ray envelopes, the 31°–32° published field, the patent silhouette, and physical geometry limits. The complete on-axis F/2.8 bundle and the default 18.6° displayed off-axis fan are contained. At the full 31° edge field, representative central pupil rays pass while outer pupil rays are vignetted; the model does not claim a fully unvignetted F/2.8 corner pupil.

The closest facing surfaces are G4 rear and G5 front. Their inferred apertures retain a positive 0.039902 mm rim air clearance. The model uses `gapSagFrac = 0.97` for this gap rather than reducing the clear apertures below the on-axis F/2.8 bundle. The minimum element edge thickness is 0.848755 mm, and the maximum spherical rim-slope angle is 63.7493°.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical component appears in the patent prescription, and none is added to the model. No omitted plate requires an air-equivalent rear-spacing correction. The design contains no cemented interfaces, aspheres, diffractive surfaces, folded path, zoom state, or reconstructed focus state.

## Sources

1. Katsunori Ebara, “Photographic Lens” (写真レンズ), JP1978-066222, Mamiya Koki Co., Ltd., filed 26 November 1976, published 13 June 1978, especially pp. 123–125 and Figures 1–2.
2. *Mamiya NC1000/NC1000S Instruction Manual*, “Mamiya-Sekor CS Lenses,” printed p. 26. The table gives 35 mm, f/2.8, 6 groups/6 elements, 63°, f/16, and 0.4 m minimum focus for the production lens.
3. OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA official optical-glass catalogs and cross-reference tables, consulted only to test class-level matches to the patent's $n_d$/$\nu_d$ coordinates. The patent coordinates remain authoritative.
