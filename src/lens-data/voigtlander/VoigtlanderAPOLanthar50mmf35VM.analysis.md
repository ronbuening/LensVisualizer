# VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 Type II VM

## Patent Reference and Design Identification

**Patent:** JP 2025-108279 A
**Application number:** 特願2024-2112
**Filed:** 2024-01-10
**Published:** 2025-07-23
**Inventors:** Yoshihisa Yomogida; Yuki Shibata
**Applicant:** 株式会社コシナ
**Title:** 光学レンズ系 (Optical lens system)
**Embodiment analyzed:** Example 1 / 第1実施形態

The data file transcribes Example 1 at the patent's native scale. The example is an eight-element, six-group, all-spherical design with a computed effective focal length of 49.101 mm and a published f-number of 3.56. These exact design values are kept separate from the production designation of 50mm f/3.5.

The identification with the production VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 Type II VM rests on convergent evidence rather than an explicit manufacturer statement that Example 1 is the released prescription. Type I uses the same published optical section, but the modeled 0.35 m close-focus metadata is specific to Type II:

1. Example 1 and the production lens both have eight elements in six groups and no aspherical surfaces.
2. The computed 49.101 mm focal length and f/3.56 aperture correspond closely to the marketed 50mm f/3.5 class.
3. The patent publishes a 23.94° half field, or 47.88° full field, while Cosina lists 45.7° for the finished lens. The difference is consistent with design-field versus product-specification conventions and is not treated as an exact match.
4. Cosina's optical-section drawing has the same element topology and marks four special-dispersion positions that map to L1, L4, L6, and L8 in the modeled prescription.
5. The patent was filed in January 2024; Cosina announced the product in July 2024 and released it on 2024-08-29.
6. The Type I and Type II product pages show the same optical construction while publishing different mechanical minimum-focus endpoints.

The prescription therefore represents the common optical formula rather than the exterior Type I and Type II barrel variants.

## Optical Architecture

The design is a modified Gaussian normal lens organized around a partially symmetric positive core. In object-to-image order, the functional power sequence is a front negative meniscus, the positive six-element core, and a rear negative meniscus. Within the core, the arrangement about the stop is:

- L2 positive meniscus;
- cemented L3/L4 positive-negative pair;
- aperture stop;
- cemented L5/L6 negative-positive pair;
- L7 positive element.

The eight elements form six air-spaced groups because L3/L4 and L5/L6 are cemented. The patent describes the two outer negative menisci as a means of reducing field curvature and correcting the Petzval and chromatic balance while retaining the distance-change behavior of the central Gaussian-type structure (¶0027–0029).

The independently computed effective focal length is 49.101170846 mm. The displayed Table 2 spacings give 36.59 mm from surface 1 to surface 15, whereas Table 1 states an optical overall length of 36.58 mm. Both source values are retained. Using the Table 1 value, `OAL/EFL = 0.74499`, so the system meets the project's numerical telephoto criterion. Its back focal distance is 33.142203436 mm, less than the focal length, so it is not retrofocus.

When isolated in air while retaining the published internal spacings, the complete partially symmetric core, L2 through L7, has an equivalent focal length of 32.956239035 mm. The corresponding isolated front section, L2 through L4, is +44.922978 mm; the isolated rear section, L5 through L7, is +37.247689 mm. These are isolated-subassembly EFLs, not in-situ powers, and they are distinct from both standalone element powers and cemented-pair net powers.

The computed Petzval sum is +0.003207057727 mm⁻¹ under the project's `φ/(n·n′)` convention, corresponding to a reciprocal radius of approximately +311.81 mm. This is a first-order verification result, not a substitute for the patent's full aberration plots.

All surfaces are spherical. The data file therefore contains no conic constants or polynomial asphere coefficients.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

`nd = 1.48749`, `νd = 70.44`. Glass: `487704 — low-dispersion crown; vendor identity not unique`. Standalone `f = −96.247 mm`.

L1 is the object-side negative shell outside the positive core. The patent assigns the paired outer negative elements a role in Petzval, field-curvature, and chromatic correction while preserving the partially symmetric behavior of the central structure. Its meniscus form also avoids the stronger symmetry disruption that a biconcave outer element would introduce (¶0008, ¶0027).

Cosina's production section marks the corresponding position as an anomalous-partial-dispersion element. The mapping is recorded in the data as an inference; no line indices or `dPgF` value are available for quantitative spectral modeling.

### L2 — Positive Meniscus

`nd = 1.88300`, `νd = 40.81`. Glass: `883408 — high-index lanthanum crown; vendor identity not unique`. Standalone `f = +61.211 mm`.

L2 begins the front half of the positive core. Its high index satisfies the patent condition requiring at least one front-core positive element with `nd > 1.72`. The patent states that this index level permits weaker surface curvatures than a lower-index alternative, limiting sagittal and tangential coma while supporting a compact assembly (¶0010, ¶0040).

### D1 — Cemented L3/L4 Pair

**L3:** `nd = 1.72916`, `νd = 54.67`. Glass: `729547 — lanthanum crown; vendor identity not unique`. Standalone `f = +17.606 mm`.
**L4:** `nd = 1.60342`, `νd = 38.01`. Glass: `603380 — F5-class flint; vendor identity not unique`. Standalone `f = −15.657 mm`.

L3 is a strong biconvex positive element cemented to the biconcave L4. The interface at surface 6 is assigned to downstream element L4 in the data model. Although the standalone powers are large and opposite, the cemented pair has a weak positive equivalent focal length of approximately +313.386 mm. Adding L2 and the published intervening spacing gives the isolated L2–L4 front-core subassembly an EFL of +44.923 mm.

L4 presents its stop-side surface as a concavity toward the aperture, matching the patent's defining geometry for the cemented core pairs. The manufacturer section marks the corresponding element as a special-dispersion position, but the available sources do not support a numerical anomalous-dispersion claim.

### D2 — Cemented L5/L6 Pair

**L5:** `nd = 1.56732`, `νd = 42.84`. Glass: `567428 — FL6/S-TIL26-class light flint; vendor identity not unique`. Standalone `f = −35.344 mm`.
**L6:** `nd = 1.49700`, `νd = 81.61`. Glass: `497816 — FCD1/S-FPL51/N-PK52A-class fluorophosphate crown; vendor identity not unique`. Standalone `f = +65.801 mm`.

L5 is the biconcave negative member immediately behind the stop, cemented to the positive L6 at surface 10. The pair's net equivalent focal length is approximately −79.890 mm. It remains misleading, however, to describe the rear core as negative: an isolated L5–L7 subassembly retaining the published air spacing has a positive EFL of +37.248 mm.

L6 satisfies the patent's rear-positive dispersion condition with `νd = 81.61`. The rendered source page and Table 2 establish this value; the parsed text around ¶0039 is corrupt. Cosina's section marks L6 as a special-dispersion element, but the patent supplies only `nd` and `νd`, not the line data needed to model secondary-spectrum behavior.

### L7 — Biconvex Positive

`nd = 1.71300`, `νd = 53.94`. Glass: `713539 — LAK8/LAC8-class lanthanum crown; vendor identity not unique`. Standalone `f = +28.497 mm`.

L7 is the principal positive collector at the rear of the partially symmetric core. It converts the net-negative standalone behavior of the L5/L6 cemented pair into the positive rear-core section. Its placement before the final negative meniscus also helps establish the long rear air space without making the design retrofocus.

### L8 — Negative Meniscus, convex to image

`nd = 1.68893`, `νd = 31.16`. Glass: `689312 — FD8/SF8/S-TIM28-class dense flint; vendor identity not unique`. Standalone `f = −127.948 mm`.

L8 is the image-side outer negative meniscus. It is substantially weaker than the central positive elements and has a longer-magnitude focal length than L1. The patent treats L1 and L8 as the outer negative pair that moderates Petzval and distance-dependent behavior around the central core (¶0027–0029).

Cosina marks the corresponding production element as a special-dispersion position. As with L1, L4, and L6, the data records the positional mapping but does not assign unverified line indices, Sellmeier coefficients, or `dPgF`.

## Glass Identification and Selection

The patent identifies the optical materials only by d-line index and Abbe number. Cross-checking those pairs against current OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita catalogs yields multiple exact or near-equivalent candidates for every element. The data therefore uses six-digit or class descriptions instead of asserting a manufacturer that the patent does not name.

| Element | `nd` | `νd` | Data-file identification | Function in the modeled design |
|---|---:|---:|---|---|
| L1 | 1.48749 | 70.44 | 487704 low-dispersion crown | Front outer negative meniscus |
| L2 | 1.88300 | 40.81 | 883408 high-index lanthanum crown | Front-core positive meniscus |
| L3 | 1.72916 | 54.67 | 729547 lanthanum crown | Positive member of D1 |
| L4 | 1.60342 | 38.01 | 603380 F5-class flint | Negative member of D1 |
| L5 | 1.56732 | 42.84 | 567428 FL6/S-TIL26-class light flint | Negative member of D2 |
| L6 | 1.49700 | 81.61 | 497816 fluorophosphate crown class | Positive member of D2 |
| L7 | 1.71300 | 53.94 | 713539 LAK8/LAC8-class lanthanum crown | Rear-core positive collector |
| L8 | 1.68893 | 31.16 | 689312 FD8/SF8/S-TIM28-class dense flint | Rear outer negative meniscus |

The commercial `APO-LANTHAR` designation is part of the production lens name. It is not treated here as a quantitative apochromatic-performance result. Cosina's section identifies four special-dispersion elements, but the selected patent does not publish `nC`, `nF`, `ng`, `Pg,F`, or `dPgF`, and no unique catalog glass was selected solely to obtain a Sellmeier model. The available data therefore supports only Abbe-based chromatic tracing.

## Focus Mechanism

The patent specifies unit focusing: the complete optical system moves toward the object from infinity to a near distance (¶0016, ¶0022). It publishes no finite-distance optical prescription, variable-spacing table, object-distance table, or magnification table.

Accordingly, the data file contains no focus variables and defines only the infinity optical state. The required `closeFocusM` field is set to 0.35 m as production metadata for the Type II variant; it does not represent a reconstructed close-focus prescription. Cosina publishes 0.45 m for Type I and 0.35 m for Type II while showing the same optical formula. The differing endpoints are therefore treated as mechanical focus-travel variants.

## Conditional Expressions

Example 1 satisfies all applicable patent conditions when evaluated from the final data arrays.

| Patent condition | Evaluated value | Result |
|---|---:|---|
| Rear-core positive lens has `νd > 70` | L6: 81.61 | Pass |
| Front-core positive lens has `nd > 1.72` | L2: 1.88300; L3: 1.72916 | Pass |
| `1.25 < Hf/Hr < 1.45` | 1.359119644 | Pass |
| `0.48 < fsy/f < 0.72` | 0.671190492 | Pass |
| `0.73 < fsy/BF < 1.15` | 0.994388894 | Pass |
| `0.9 < OAL/BF < 1.55` | 1.103728666 using Table 1 OAL | Pass |
| All lenses are spherical | true | Pass |

The exact marginal-ray solution gives `Hf = 6.916126 mm` and `Hr = 5.088681 mm`, reproducing the patent's rounded 6.92 mm, 5.09 mm, and 1.36 values.

## Verification and Modeling Disclosures

The final TypeScript arrays reproduce an EFL of 49.101170846 mm and a back focal distance of 33.142203436 mm. The authored stop semi-diameter of 5.197982 mm is inferred from the modeled f/3.56 entrance pupil because the patent does not publish a physical stop diameter.

The patent also omits clear apertures. Surface semi-diameters were derived from Cosina's official optical-section SVG by fitting its axial vertices to the patent prescription, then checked against exact spherical on-axis and 0.6-field ray envelopes. They are modeling inputs, not patent table values. The resulting geometry has positive edge thickness throughout, a maximum rim angle of 35.09°, and a maximum positive shared-gap intrusion of 48.35% of the corresponding air gap. No layout control was used to conceal invalid geometry.

No plate, filter, sensor cover, inactive dummy plane, or mechanical surface was omitted from Example 1 because none appears in its active prescription. No rear-spacing compensation was therefore required. No dimensional scaling was applied, and no asphere-coefficient transformation is applicable.

The 0.01 mm discrepancy between the 36.58 mm Table 1 OAL and the 36.59 mm sum of displayed Table 2 spacings is preserved rather than silently reconciled. Sequential calculations use the Table 2 spacings; the patent's OAL-based conditional expression is reported with the Table 1 value.

## Sources

- Cosina Co., Ltd., JP 2025-108279 A, Example 1, Tables 1–2 and Figures 1–2, published 2025-07-23.
- Cosina, [VOIGTLÄNDER APO-LANTHAR 50mm F3.5 Type I VM product page](https://www.cosina.co.jp/voigtlander/en/vm-mount/apo-lanthar-50mm-f3-5-type-i/).
- Cosina, [VOIGTLÄNDER APO-LANTHAR 50mm F3.5 Type II VM product page](https://www.cosina.co.jp/voigtlander/vm-mount/apo-lanthar-50mm-f3-5-type-ii/).
- Cosina, official `VM-50_35_apo-LDe.svg` optical-section drawing.
- OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita current optical-glass catalogs, as tabulated in the accompanying glass audit.
