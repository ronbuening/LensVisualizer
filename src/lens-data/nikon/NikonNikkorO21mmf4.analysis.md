## Patent Reference and Design Identification

**Patent:** JP 1968-030782
**Application number:** Utility-model application Sho 42-100066
**Published:** December 14, 1968
**Inventor:** Zenji Wakimoto
**Applicant:** Nippon Kogaku K.K.
**Title:** *Super-wide-angle lens composed of four groups*
**Embodiment analyzed:** Example 2, Figure 2

The data file treats Example 2 as the fixed production correlation for the **NIKON NIKKOR-O 2.1cm f/4**. The patent publication does not name the production lens, and Nikon's historical article does not cite this publication number; the identification therefore rests on convergent technical evidence rather than an explicit manufacturer cross-reference.

1. Example 2 has eight elements in four air-separated groups. Nikon describes the production NIKKOR-O 2.1cm f/4 as an eight-element, four-group design with two cemented three-element groups surrounding the iris.
2. The patent gives `f = 100`, `F/4`, and a 92° full field. Uniform scaling by `s = 0.21` produces a computed EFL of 21.000059 mm while retaining the published f/4 aperture and 92° field.
3. The computed optical BFD is 7.346550 mm from the last optical vertex. Nikon describes approximately 7 mm between the rear of the production lens and the film plane. Those reference planes are not necessarily identical, so the agreement is corroborative rather than exact.
4. The 92° patent field is consistent with the 135 format declared in the data file: a 21.000059 mm rectilinear lens requires approximately 91.70° to reach the nominal 43.27 mm frame diagonal.
5. The patent identifies Zenji Wakimoto and Nippon Kogaku K.K.; Nikon attributes the production lens's distinctive symmetrical construction to Wakimoto and records both Nikon S and Nikon F versions introduced in 1959.

The patent prescription is normalized to `f = 100`. Every dimensional quantity in the model—radii, thicknesses, air gaps, stop position, semi-diameters, and image distance—has been scaled uniformly by `0.21`. The design has no aspheric surfaces, so no conic or polynomial coefficient transformation was required.

## Optical Architecture

The lens is an approximately symmetrical short-back-focus ultrawide with the power sequence

`negative — positive — STOP — positive — negative`.

Nikon describes the production design as a symmetrical “concave–convex–concave” wide-angle system and distinguishes it from a retrofocus construction. The computed BFD/EFL ratio is 0.349835, so the model is not retrofocus under the project definition, which requires `BFD > EFL`.

Groups I and IV are negative meniscus singlets. Groups II and III are cemented positive triplets arranged around the stop. Each triplet follows the standalone-power sequence positive–negative–positive, unlike the concave–convex–concave cemented unit Nikon contrasts with the Biogon. The two triplets are net positive despite their central negative elements.

The computed standalone or cemented-group EFLs at production scale are:

| Group | Construction | Computed EFL |
|---|---|---:|
| I | Negative singlet L1 | −23.417541 mm |
| II | Cemented triplet L2–L4 | +19.771380 mm |
| III | Cemented triplet L5–L7 | +27.962761 mm |
| IV | Negative singlet L8 | −20.474215 mm |

These values describe each isolated singlet or cemented group in air. They are not additive, and they do not equal each group's in-situ contribution after the large intervening air spaces and neighboring powers are included. The complete assembly produces an EFL of 21.000059 mm.

The approximately symmetric power distribution avoids the long rear clearance characteristic of a retrofocus lens and places the rear element close to the film plane, consistent with Nikon's account of mirror lock-up and an accessory finder for the F-mount version. The data model includes only the active optical prescription; it does not include the finder, mirror mechanism, barrel, filters, or any cover plate.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

`nd = 1.6201`, `νd = 60.1`. Glass: **620603 — SK16 / BSM16 / BACD16 class**. Standalone `f = −23.417541 mm`.

L1 is the front negative collector and constitutes Group I. Its weakly curved object-side surface and much stronger rear surface produce the negative meniscus power required at the entrance of the symmetrical ultrawide. In the assembled system it expands the angular bundle before the long air space leading to Group II. This role is inferred from the computed power and axial position rather than assigned by a separate patent statement.

### L2 — Biconvex Positive

`nd = 1.7264`, `νd = 37.8`. Glass: **723380 — BAFD8 / S-BAH28 / J-BASF8 class**. Standalone `f = +16.224290 mm`.

L2 is the first positive member of the front cemented triplet. Its strong positive power begins the conversion of the expanded front bundle back toward convergence. At its rear surface it is cemented directly to L3; the interface therefore acts between two glasses rather than between glass and air.

### L3 — Biconcave Negative

`nd = 1.6484`, `νd = 33.8`. Glass: **648338 — SF2 / E-FD2 / J-SF2 class**. Standalone `f = −8.165977 mm`.

L3 is the negative central member of Group II. Its standalone power is stronger in magnitude than either adjacent positive element, but the cemented triplet remains net positive because the powers cannot be combined as thin isolated lenses. The shared interfaces and finite thicknesses materially change the triplet's effective power.

### L4 — Biconvex Positive

`nd = 1.5816`, `νd = 42.1`. Glass: **LF3 (Sumita coefficient-backed equivalent), 582420**. Standalone `f = +9.236690 mm`.

L4 completes the front cemented triplet and lies immediately before the stop-containing air space. Its strongly curved front surface supplies substantial positive power near the aperture. Nikon identifies the positive–negative–positive order close to the iris as the principal structural distinction of Wakimoto's design. The complete L2–L4 triplet has a computed net EFL of +19.771380 mm.

### L5 — Positive Meniscus, Convex to Image

`nd = 1.5170`, `νd = 58.8`. Glass: **518588–518590 — K3 / C3 / NSL3 class**. Standalone `f = +10.260017 mm`.

L5 begins the rear cemented triplet immediately after the stop. Its meniscus form and positive standalone power initiate the rear half of the lens. Although the architecture is approximately symmetric, L5 is not a literal mirror copy of L4: its index, Abbe number, curvatures, and thickness differ.

### L6 — Biconcave Negative

`nd = 1.6484`, `νd = 33.8`. Glass: **648338 — SF2 / E-FD2 / J-SF2 class**. Standalone `f = −7.878935 mm`.

L6 is the negative central member of Group III and reuses the same stored `nd/νd` pair and glass-class annotation as L3. Its placement between two positive elements reproduces the patent's positive–negative–positive triplet principle on the image side of the stop.

### L7 — Biconvex Positive

`nd = 1.7264`, `νd = 37.8`. Glass: **723380 — BAFD8 / S-BAH28 / J-BASF8 class**. Standalone `f = +16.945460 mm`.

L7 completes the rear cemented triplet. The L5–L7 assembly has a computed net EFL of +27.962761 mm, weaker than the front triplet in power magnitude. That difference is one reason the prescription should be described as approximately, not perfectly, symmetric.

### L8 — Negative Meniscus, Convex to Image

`nd = 1.6422`, `νd = 58.2`. Glass: **LAK6 (Sumita coefficient-backed equivalent), 643581**. Standalone `f = −20.474215 mm`.

L8 is the rear negative collector and constitutes Group IV. It receives the bundle after the long air space following Group III and completes the negative–positive–stop–positive–negative distribution. Its last surface is followed by the independently solved 7.346550 mm image distance; the patent does not print that final spacing.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It names no glass manufacturer and supplies no `nC`, `nF`, `ng`, `PgF`, or `dPgF` data. The data file therefore uses vendor-neutral six-digit codes and glass-family labels derived from the catalog audit rather than asserting historical supply.

| Stored class annotation | `nd` | `νd` | Elements | Status in the model |
|---|---:|---:|---|---|
| 620603 — SK16 / BSM16 / BACD16 class | 1.6201 | 60.1 | L1 | Shared current-catalog class code; vendor unresolved |
| 723380 — BAFD8 / S-BAH28 / J-BASF8 class | 1.7264 | 37.8 | L2, L7 | Nearest current-catalog class; vendor unresolved |
| 648338 — SF2 / E-FD2 / J-SF2 class | 1.6484 | 33.8 | L3, L6 | Shared current-catalog class code; vendor unresolved |
| LF3 (Sumita coefficient-backed equivalent), 582420 | 1.5816 | 42.1 | L4 | Coefficient-backed catalog equivalent; historical vendor unresolved |
| 518588–518590 — K3 / C3 / NSL3 class | 1.5170 | 58.8 | L5 | Closely corresponding crown classes; vendor unresolved |
| LAK6 (Sumita coefficient-backed equivalent), 643581 | 1.6422 | 58.2 | L8 | Coefficient-backed catalog equivalent; historical vendor unresolved |

The differing Abbe numbers provide dispersion contrast within the cemented triplets, consistent with ordinary achromatic balancing. The available data do not support an APO designation or a claim of anomalous partial dispersion. LF3 and LAK6 supply coefficient-backed catalog equivalents for wavelength tracing; they are not claims that Sumita supplied the production melts.

## Focus Mechanism

The patent provides no finite-conjugate prescription, variable-spacing table, minimum-focus distance, magnification, or movement constraint. Its rigid internal spacings and Nikon's account of manual distance-scale focusing are consistent with conventional unit focus, but do not prove a production movement law. The model therefore labels its unit-focus motion as inferred.

Unit focus leaves every internal spacing unchanged and translates the complete optical assembly relative to the image plane. In the sequential data this is represented by varying only the final BF gap. A finite-conjugate paraxial solve increases that gap from 7.346550 mm at infinity to 7.875786 mm at the 0.9 m catalog endpoint, an inferred extension of 0.529236 mm.

The 0.9 m endpoint is secondary catalog metadata rather than a patent value. The close state is a useful first-order unit-focus model, not a patent-published prescription or a validation of the production lens's close-range aberrations or reproduction ratio.

## Conditional Expressions

The patent states ten design conditions. Recalculation from the scaled TypeScript prescription gives the following scale-normalized results:

| Patent condition | Computed value | Result |
|---|---:|---|
| `2 < Σ(d+l)/f < 4` | 2.261794 | Pass |
| `0.5 < l1/f < 1` | 0.571398 | Pass |
| `0.04 < l2/f < 0.1` | 0.054800 | Pass |
| `0.5 < l3/f < 1` | 0.552398 | Pass |
| `0.8 < Σ(dII+dIII+l2)/f < 1.5` | 1.061797 | Pass |
| `0.8 < |fI|/f < 1.5` | 1.115118 | Pass |
| `0.8 < |fIV|/f < 1.5` | 0.974960 | Pass |
| `n1 > 1.6` | 1.6201 | Pass |
| `r12/|fI| > 0.5` | 0.540210 | Pass |
| `r12 > r21` | 12.6504 mm > 12.3942 mm | Pass |

The final radius-order condition is the narrowest dimensional margin: `r12 − r21 = 0.2562 mm` after scaling. No patent value was altered to make the inequalities pass.

## Verification Summary

The complete scaled prescription gives a computed EFL of 21.000059 mm, distinct from the marketed 21 mm value. The physical stop was sized for the published f/4 aperture and produces a computed wide-open f-number of 3.99999969. The first-to-last optical-vertex track is 47.497800 mm, and the solved BFD is 7.346550 mm.

The stop position is not tabulated. Figure 2 places stop B within the 1.1508 mm scaled gap between Groups II and III, so the model divides that gap at its midpoint: 0.5754 mm before and after `STO`. The resulting physical stop semi-diameter is 3.296263 mm. Both the position and diameter are disclosed modeling inferences.

The patent also omits clear apertures. The surface semi-diameters were measured from the Figure 2 section, rounded to 0.1 mm, and then checked against exact infinity tracing, edge thickness, actual spherical rim slope, shared-gap intrusion, and off-axis containment. This preserves the source silhouette while keeping the inferred apertures geometrically valid.

The surface-by-surface Petzval calculation, using `φ/(n·n′)`, gives `−0.004050815 mm⁻¹`, corresponding to a project-convention Petzval radius of `+246.863918 mm`. This is a computed paraxial property of the modeled prescription, not a manufacturer specification.

The patent's page-3 Seidel table prints `VI` in a column where the conventional five-sum notation would use `IV`. That source anomaly is preserved in the audit and was not used to alter any prescription value.

The 46° nonparaxial chief ray reaches 21.566243 mm at the solved paraxial image plane, while the sampled full bundle reaches 21.848644 mm. These results are consistent with the declared 135-format coverage and the patent's 92° full field. The close-focus state models only inferred unit extension; it does not imply patent-validated close-range aberration performance.

## Sources

- Japanese utility-model application publication **JP 1968-030782**, *Super-wide-angle lens composed of four groups*, Example 2 and Figures 2–3, published December 14, 1968.
- Nikon Corporation, **“NIKKOR — The Thousand and One Nights No. 1: NIKKOR-O 2.1cm F4.”** Official historical article: https://imaging.nikon.com/imaging/information/story/0001/
- Stage 1 and Stage 2 calculation and glass-audit artifacts accompanying `NikonNikkorO21mmf4.data.ts`.
