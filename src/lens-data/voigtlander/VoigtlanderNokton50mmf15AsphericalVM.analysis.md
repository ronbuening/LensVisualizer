## Patent Reference and Design Identification

**Patent:** JP 2022-012964 A
**Application Number:** JP 2020-115167
**Filed:** 2020-07-02
**Published:** 2022-01-18
**Inventor:** Yasuyuki Sugano
**Applicant:** Cosina Co., Ltd.
**Title:** Large-Aperture Imaging Lens (大口径撮像レンズ)
**Embodiment analyzed:** Example 2

The prescription is the fixed Example 2 correlation for the **VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM**. The patent does not name the production lens, and Cosina does not publicly identify a patent example number for it. The association is therefore an author correlation based on convergent evidence rather than a manufacturer-confirmed statement.

1. The patent example and production lens both use eight elements in seven groups, with one cemented doublet.
2. Example 2 places both aspherical surfaces on the final negative meniscus. Cosina's optical section marks the same final element as double-sided aspherical.
3. The patent reports a 49.60 mm design focal length and F/1.43 modeled aperture, corresponding to the marketed 50 mm and f/1.5 specifications without treating the rounded product values as prescription data.
4. The patent's 21.63 mm image height and 46.58° full field agree with 135-format coverage and Cosina's approximately 46.3° marketed field.
5. Example 2 publishes whole-lens extension from infinity to a 630 mm object-to-first-surface state. Reference-plane normalization gives an object-to-image distance of 699.10 mm, matching the marketed 0.7 m minimum focus.
6. The published F14 row keeps the internal gaps fixed and represents whole-lens extension. This is optically compatible with the commercial lens's manual, rangefinder-coupled focusing, although Cosina does not publish the production lens's internal optical motion.
7. Cosina filed the application in July 2020 and announced the production lens in October 2020, so the chronology is consistent with a production-development prescription.

The data file stores the canonical Leica M mount identifier and 135 full-frame format. It keeps the marketed 50 mm f/1.5 values separate from the exact design values used by the optical model.

## Optical Architecture

The lens is a compact modified double-Gauss derivative with a positive front group and a positive rear group arranged around a central stop. The patent describes the rear section as partially symmetric rather than fully symmetric: negative members stand near the stop and image end, while two positive rear members lie between them (¶0033–¶0038). The complete system contains eight elements in seven air-separated groups.

The front group 101 consists of three separated positive menisci followed by a negative meniscus, all convex toward the object. This repeated shell geometry distributes positive power while maintaining a short axial package. The rear group 102 begins with the cemented L5/L6 doublet Ja, followed by the strong positive L7 and the weak negative, double-aspherical final element LE. The rear group has an isolated focal length of +44.8456 mm, close to the patent's +44.84 mm value.

The computed first-to-last-surface track is 40.01 mm from the rounded table, while the system EFL is 49.5983 mm. Using the patent's 40.00 mm summary track gives `TLL/EFL = 0.80648`, so the design satisfies the project's strict telephoto criterion. Its 24.9725 mm computed back focal distance is shorter than the EFL; it is not retrofocus.

Power labels require care. L5 is −24.55 mm and L6 is +34.47 mm when each element is evaluated alone in air, but the cemented Ja pair is a weak net negative unit with an isolated focal length of −93.2927 mm. The following L7+LE rear-B assembly is positive at +32.0725 mm, and the complete rear group is strongly positive. Thus the positive standalone power of L6 does not make Ja a positive doublet, and the behavior of either component cannot be substituted for the in-system behavior of the rear group.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.88300, νd = 40.80. Glass: 883408 — dense lanthanum glass class (vendor unresolved). f = +101.27 mm.**

L1 is the first positive collector and the largest-diameter element. Its high index allows useful positive power with less curvature than a lower-index crown would require. The patent treats this distribution of front positive power as part of the compactness strategy: several moderate positive menisci replace a smaller number of more strongly powered elements (¶0042–¶0044).

L1 is not a catalog-resolved vendor glass in the data file. The six-digit class is retained because the `(nd, νd)` pair has exact or near-exact equivalents from several suppliers and does not identify the actual melt source.

### L2 — Positive Meniscus

**nd = 1.72916, νd = 54.67. Glass: 729547 — lanthanum crown class (vendor unresolved). f = +169.97 mm.**

L2 is the weakest standalone positive element in the system. Its higher Abbe number relative to L1, L3, and the front negative meniscus moderates the chromatic burden of the front group while continuing the object-convex meniscus progression.

The element's relatively low power is intentional rather than redundant. It spreads refraction across another air-spaced surface pair, reducing the incidence angles that would result from concentrating the same group power in fewer elements.

### L3 — Positive Meniscus

**nd = 1.84202, νd = 43.34. Glass: Unmatched (nd=1.84202, vd=43.34; code 842433). f = +54.59 mm.**

L3 is the strongest of the three front positive menisci. It supplies much of the convergence immediately before L4, while its rear surface participates in the patent's explicitly described negative air lens between surfaces 6 and 7 (¶0032).

No current public catalog match was sufficiently close to justify a vendor name. The unmatched annotation prevents a speculative glass assignment from being treated as Sellmeier-quality data.

### L4 — Negative Meniscus

**nd = 1.84666, νd = 23.78. Glass: 847238 — N-SF57/S-TIH53 class (vendor unresolved). f = −27.29 mm.**

L4 is a strongly negative, high-index, low-Abbe meniscus placed immediately before the stop. It opposes the accumulated positive power of L1–L3 and provides a strong dispersive counterweight. Its rear surface has the smallest-magnitude stop-facing radius in the front group, as required by the patent's curvature progression.

The 0.54 mm gap between L3 and L4 forms the curved negative air lens identified by the patent. In the validated geometry this is also the most restrictive shared-gap clearance, but it remains within the current cross-gap intrusion policy.

### Ja — L5/L6 Cemented Doublet

#### L5 — Biconcave Negative

**nd = 1.60286, νd = 37.37. Glass: Unmatched (nd=1.60286, vd=37.37; code 603374; near F5 class). f = −24.55 mm.**

L5 is the negative front member of Ja and the first powered element after the stop. Its biconcave form begins the rear partial symmetry by presenting a negative surface pair opposite the pre-stop negative meniscus.

The stored pair is only near the public F5 family. The explicit `Unmatched` annotation prevents a near-name from being resolved as an exact F5 Sellmeier glass. Example 2 publishes no `dPgF` or line-index data for L5, so the analysis does not attribute anomalous partial dispersion to it even though other patent embodiments discuss that option.

#### L6 — Biconvex Positive

**nd = 1.88300, νd = 40.80. Glass: 883408 — dense lanthanum glass class (vendor unresolved). f = +34.47 mm.**

L6 is the positive member of Ja and uses the same high-index class as L1. Surface 11 is the cemented interface and correctly carries L6's downstream index and element identity in the data file.

The high index contrast across the cemented interface gives the doublet a useful correction degree of freedom without introducing another air gap. Nevertheless, Ja is net negative when isolated: its computed focal length is −93.2927 mm. L6's positive standalone focal length must therefore not be read as the sign of the cemented pair.

### L7 — Biconvex Positive

**nd = 1.79316, νd = 47.24. Glass: Unmatched (nd=1.79316, vd=47.24; near 788474/475 lanthanum-flint class). f = +26.30 mm.**

L7 is the strongest positive standalone element. It restores convergence after the weakly negative Ja doublet and supplies the dominant positive power in the rear-B section before the final correction element.

The stored `(nd, νd)` pair falls just outside the project's confident catalog-match threshold. The data therefore retains an unmatched label rather than choosing a nearby lanthanum-flint entry and silently acquiring the wrong dispersion model.

### LE — Negative Meniscus with Two Aspherical Surfaces

**nd = 1.69453, νd = 30.66. Glass: L-TIM28P (OHARA). f = −127.32 mm.**

LE is a weak negative meniscus whose surfaces 15A and 16A are both aspherical. Its standalone power is much weaker than that of L4 or L5, so its principal function is not to overturn the rear group's positive power. It provides a final surface-shape correction where the field bundles are separated and can be adjusted with comparatively little disturbance to the earlier power balance (¶0048–¶0050).

L-TIM28P is an exact OHARA catalog match. The data stores `nC = 1.68796`, `nF = 1.71061`, and `ng = 1.72419`; these reproduce `νd = 30.66` within catalog rounding. The line data support higher-fidelity dispersion modeling for this element, but they do not support an APO claim for the complete lens.

L-TIM28P is an exact catalog-equivalent low-softening material and carries the listed line indices. Its catalog family is compatible with precision molding, but neither the patent nor the manufacturer source establishes the manufacturing process used for the production element.

## Glass Identification and Selection

The patent gives `nd` and `νd` for Example 2 but does not name suppliers. The data file therefore uses exact catalog names only where the numerical pair and authoritative catalog data justify them.

| Glass annotation | nd | νd | Elements | Status and optical role |
|---|---:|---:|---|---|
| 883408 — dense lanthanum glass class (vendor unresolved) | 1.88300 | 40.80 | L1, L6 | High-index positive glass; vendor cannot be selected from the pair alone. |
| 729547 — lanthanum crown class (vendor unresolved) | 1.72916 | 54.67 | L2 | Higher-Abbe positive glass for front-group power distribution. |
| Unmatched (code 842433) | 1.84202 | 43.34 | L3 | Strong front positive element; no defensible exact public match. |
| 847238 — N-SF57/S-TIH53 class (vendor unresolved) | 1.84666 | 23.78 | L4 | Dense, strongly dispersive negative partner before the stop. |
| Unmatched (code 603374; near F5 class) | 1.60286 | 37.37 | L5 | Negative member of Ja; near, but not identical to, public F5-family glasses. |
| Unmatched (near 788474/475 class) | 1.79316 | 47.24 | L7 | Strong rear positive element; nearest family remains outside confident-match tolerance. |
| L-TIM28P (OHARA) | 1.69453 | 30.66 | LE | Exact catalog-equivalent low-softening glass for the final double-aspherical element. |

Four of the five positive elements have `nd > 1.75`, and L1 and L6 exceed `nd = 1.85`. The positive-element mean Abbe number is 45.37, above the patent's required 38.0 threshold. This palette follows the patent's stated strategy of combining high-index positive lenses with a strongly dispersive pre-stop negative lens while preserving enough positive-glass dispersion to control axial color (¶0042–¶0044).

No element other than LE carries explicit line indices, and none carries a nonzero `dPgF` or APD flag. The data therefore supports ordinary chromatic modeling from catalog or Abbe information, not an apochromatic or anomalous-dispersion designation for the lens as a whole.

## Focus Mechanism

Example 2 publishes a unit-focus, whole-lens-extension state rather than an internally reconstructed focus model. The internal stop-to-Ja gap `ZD9` remains 5.30 mm and the Ja-to-L7 gap `ZD12` remains 0.15 mm. Only the air-equivalent rear spacing changes.

| State | Object reference | ZD9 | ZD12 | Rear spacing ZD16 |
|---|---:|---:|---:|---:|
| F10 infinity | Infinity | 5.30 mm | 0.15 mm | 25.00 mm |
| F14 close | 630.00 mm to surface 1 | 5.30 mm | 0.15 mm | 29.12 mm |

The published extension is 4.12 mm. For the rounded prescription, exact paraxial focus at a 630.00 mm object-to-first-surface distance would require 29.0875 mm, leaving a +0.0325 mm difference from the patent's published optimized spacing. The source value is retained unchanged.

Adding the 40.01 mm rounded optical track and exact paraxial close back focus to the 630.00 mm front reference gives 699.10 mm object-to-image distance. This explains the marketed 0.7 m minimum focus without equating the patent's first-surface reference to the camera's external distance mark. The corresponding paraxial magnification is approximately 1:12.05.

Cosina describes the production lens as manually focused and rangefinder coupled. The published F14 row provides a compatible whole-lens optical model, but it does not independently prove the internal production movement. The data does not attempt to model the helical thread, rangefinder cam, or mechanical mount datum.

## Aspherical Surfaces

Surfaces 15A and 16A are the two aspherical faces of LE. The patent uses a spherical-base rotationally symmetric equation:

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}.
$$

In the standard LensVisualizer form this is `K = 0`; no separate patent conic constant is present. No scaling was applied, so the coefficients are transcribed directly in millimeter-based units.

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) |
|---|---:|---:|---:|---:|---:|
| 15A | 0 | +7.2539e−5 | −2.5678e−7 | −2.8512e−11 | +7.3475e−13 |
| 16A | 0 | +1.0007e−4 | −2.0572e−7 | −1.5793e−10 | +1.0603e−12 |

Both surfaces have positive fourth-order terms, with negative sixth- and eighth-order terms moderating the growth before the positive tenth-order term becomes significant. At the verified modeled semi-diameter of 13.5 mm, the polynomial departure from the base sphere is +0.9713 mm on 15A and +2.1175 mm on 16A. These are model-rim values, not patent-published clear-aperture departures.

The rear surface carries the larger aspherical departure and the steeper modeled rim slope. This asymmetry is consistent with the patent's use of the final element to manage field-dependent residuals after the main rear positive power has been established.

## Air Lens and Aberration-Balancing Features

The 0.54 mm air space between surfaces 6 and 7 is a deliberately curved negative air lens. The patent identifies this feature as a means of improving spherical-aberration correction (¶0032). It is not an additional element or group in the data model; it is the air gap between L3 and L4.

Around the stop, the magnitude of the front stop-facing radius is smaller than that of the rear stop-facing radius. The patent associates this relation with sagittal-coma control and defines it through condition 8 (¶0045–¶0047). The rear section then uses partial symmetry and the final aspherical meniscus to balance residual off-axis aberrations rather than relying on a single strongly powered field lens.

The surface-by-surface Petzval computation gives a sum of +0.00327666 mm⁻¹, corresponding to a signed Petzval radius of −305.19 mm under the audit convention. This is a paraxial curvature measure, not a prediction of the optimized tangential or sagittal image surfaces shown in the patent aberration plots.

## Conditional Expressions

All nine patent conditions pass when evaluated from the patent-defined scalar values retained by the data model.

| Condition | Required interval | Example 2 value | Result |
|---|---|---:|---|
| `TLL/AFL` | `0.68 < x < 1.00` | 0.80645 | Pass |
| `TLi/AFL` | `0.8 < x < 1.4` | 1.31048 | Pass |
| `IMD/AFL` | `0.2 < x` | 0.50403 | Pass |
| `TL1/TL2` | `0.8 < x < 1.6` | 1.18337 | Pass |
| `TL2A/TL2B` | `0.6 < x < 1.6` | 0.77406 | Pass |
| `TLL/(AFL/FNO)` | `1.0 < x < 1.5` | 1.15323 | Pass |
| `TL2/(FL2/FNO)` | `0.3 < x < 0.6` | 0.41044 | Pass |
| `SR1/TLS` | `1.0 < x < 1.5` | 1.22857 | Pass |
| `FLE/AFL` | `−4.0 < x < −0.8` | −2.56694 | Pass |

The conditions collectively constrain compactness, front/rear balance, rear-section aspect ratio, stop-space curvature, and the weak negative power of the final element. They do not by themselves establish production identity; the correlation depends on the separate architectural and product evidence given above.

## Modeling Boundaries and Verification

The patent publishes the stop location but not its physical diameter or any mechanical clear semi-diameters. The model's stop radius of 10.76247 mm is inferred from the patent EFL/FNO and the computed front-group pupil matrix. All surface semi-diameters are modeling values derived from marginal and chief-ray envelopes, the official Cosina optical-section proportions, and geometry constraints; they are not manufacturer dimensions.

The inferred geometry has a minimum element edge thickness of 0.5926 mm, a maximum actual rim angle of 63.673°, and a minimum shared-gap policy clearance of 0.01028 mm. Required on-axis and off-axis bundles pass at both published focus states. These checks establish internal consistency of the modeled apertures but do not replace factory drawings or production clear-aperture data.

The patent states that sensor faceplates, infrared-cut filters, low-pass filters, and similar plates are omitted from the table and folded into an optically equivalent rear air distance (¶0077). The data therefore contains no synthetic cover-glass or filter element. No dummy or flare-cutter planes are present.

No uniform scale factor was applied. The printed surface spacings sum to 40.01 mm although the patent summary gives `TLL = 40.00 mm`; including the 25.00 mm rear space gives 65.01 mm rather than the summarized `TLi = 65.00 mm`. The rounded surface values and the summary values are preserved separately. The published 29.12 mm close rear spacing is likewise retained rather than replaced by the exact paraxial result.

Independent sequential height/reduced-angle tracing and ABCD multiplication give `EFL = 49.598277 mm`, `BFD = 24.972488 mm`, and a modeled f-number of 1.429951. The two matrix methods agree to 1.1e−15 for the test rays, and all standalone element focal lengths reproduce the stored patent values within 0.036 mm. These computed values support the transcription but do not alter the source prescription.

## Sources

- JP 2022-012964 A, Example 2, especially ¶0031–¶0056, Table 2, ¶0080–¶0085, and Figures 6–8.
- [Cosina, NOKTON Vintage Line 50mm F1.5 Aspherical II VM — official English product page](https://www.cosina.co.jp/voigtlander/en/vm-mount/nokton-vintage-line-50mm-f1-5-aspherical-ii/)
- [Cosina, official Japanese product page](https://www.cosina.co.jp/voigtlander/vm-mount/nokton-vintage-line-50mm-f1-5-aspherical-ii/)
- [Cosina, official optical-section diagram](https://www.cosina.co.jp/wp/wp-content/uploads/2021/09/50_15ii_VM_LDe.svg)
- [OHARA, L-TIM low-transition-temperature optical glasses](https://oharacorp.com/glass-type/l-tim/)
- Official OHARA, HIKARI, SCHOTT, HOYA, SUMITA, and CDGM catalog and cross-reference data used in the glass audit.
