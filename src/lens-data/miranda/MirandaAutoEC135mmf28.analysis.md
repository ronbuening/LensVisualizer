## Patent Reference and Design Identification

**Patent:** JP1976-074627 (特開昭51-74627)\
**Application Number:** 特願昭49-147632\
**Filed:** 1974-12-24\
**Published:** 1976-06-28\
**Inventor:** Kunio Shimada (島田 邦夫)\
**Applicant:** ミランダカメラ株式会社\
**Title:** 小型軽量のエルノスター型望遠レンズ (*Compact and lightweight Ernostar-type telephoto lens*)\
**Embodiment analyzed:** Example 1

The data-file display identity is **MIRANDA AUTO EC 135mm f/2.8**. The prescription modeled here is Example 1 of JP1976-074627. The patent presents a five-element, four-group telephoto lens and gives one numerical prescription at infinity focus. The worked example is normalized to a published focal length of `f = 100.0`; the LensVisualizer model applies a uniform linear scale of 1.35 so that the prescription can be compared with the marketed 135 mm Miranda Auto EC lens. The scaling is a modeling transformation, not a claim that the patent itself publishes a 135 mm numerical table. The refractive indices and Abbe numbers remain unchanged under that scale. (JP1976-074627, printed pp. 157–160, especially the numerical example on p. 159 and Fig. 1 on p. 160.)

The production correlation is strong but is not manufacturer-confirmed patent attribution. Four points converge:

1. The patent and the Miranda product both use five elements in four groups.
2. The patent describes an aperture ratio around f/2.8, while Miranda's Auto EC lens table lists the 135 mm lens at f/2.8.
3. The patent states a field of about ±9°, corresponding to about 18° total, while the Miranda Auto EC table lists 18° for the 135 mm lens.
4. The patent filing and publication dates fall within the period associated by secondary documentation with the 1974–76 EC-series version.

The manufacturer-origin Miranda RE-II owner's manual lists the 135 mm Auto EC as 135 mm f/2.8, five elements in four groups, 18° angle of view, 1.5 m closest focus, 55 mm filter size, 82.5 mm length at infinity, and 360 g. Those are product specifications and are kept separate from the exact design quantities computed from the patent prescription. The same table lists f/22 as the minimum aperture. A later secondary sample sheet reports aperture-ring clicks only through f/16; that discrepancy is not used to alter the manufacturer specification. (Miranda RE-II Owner's Manual, “MIRANDA AUTO EC LENS SERIES,” printed p. 20 / PDF p. 22.)

## Optical Architecture

The source itself identifies the design as Ernostar-type. In the implemented model the architecture is positive–positive–negative–positive by air-spaced group power: two positive singlets form the front section, a strong negative meniscus follows, and the rear group is a cemented positive/negative pair whose combined standalone power remains positive. All nine refracting surfaces are spherical.

The verified scaled prescription has an effective focal length of 137.433861 mm at infinity. Its physical R1-to-R9 vertex length plus computed back focal distance gives `TL/EFL = 0.897236`, so it qualifies as telephoto under the project definition `TL/EFL < 1`. The back focal distance from R9 is 64.531597 mm, or about 0.46955 times the EFL, so the design is not retrofocus under the project criterion `BFD > EFL`.

The front pair supplies comparable positive standalone powers, while the third element has a much stronger negative standalone power. The rear cemented pair combines a positive L4 and negative L5 into a net-positive cemented group with standalone focal length 172.993578 mm. These standalone values describe each isolated element or cemented pair in air; they are not additive substitutes for the in-situ power of the separated system.

The patent's material and curvature inequalities define the design more specifically than the broad Ernostar label. In particular, the first two elements share a relatively high Abbe number, the third element is a high-index low-Abbe negative member, and the cemented rear pair uses a positive element of lower Abbe number cemented to a negative element of higher Abbe number. The patent explicitly constrains these contrasts; no stronger claim about individual aberration contributions is inferred solely from glass class or power sign.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.58913, νd = 61.0. Glass: S-BAL35R — supplier-neutral catalog proxy (historical production identity unproven). f = +104.036975 mm.`

L1 is the first positive collector in the front section. Its very weak rear curvature, compared with its front curvature, makes it a positive meniscus in the final model. Its standalone positive power is closely matched by L2, but the two elements are separated by a very small air gap rather than cemented.

The glass coordinate is preserved as a historical class rather than assigned to a modern supplier. Current catalogs contain close coordinate matches, but none establishes the actual melt used in a 1974 design.

### L2 — Positive Meniscus

`nd = 1.58913, νd = 61.0. Glass: S-BAL35R — supplier-neutral catalog proxy (historical production identity unproven). f = +103.526192 mm.`

L2 repeats the same index and Abbe coordinate as L1 and forms the second positive member of the front section. The patent specifically requires the mean Abbe number of the first two elements to exceed 55; the Example 1 value is 61.0. This is a source-grounded glass-selection constraint, not evidence of anomalous partial dispersion.

The two similar positive front elements divide the front positive power across separate surfaces rather than concentrating it in a single thick lens. The analysis does not assign a specific spherical-aberration or coma contribution to either element beyond what the patent conditions and verified first-order powers establish.

### L3 — Negative Meniscus

`nd = 1.78472, νd = 25.6. Glass: 785256 — dense-flint / J-SF11-coordinate class (supplier unproven). f = −40.760867 mm.`

L3 is the strongest negative standalone element in the prescription. It follows the two positive front singlets and precedes the large air space that contains the aperture stop and separates the front section from the rear cemented group.

Its index and Abbe number satisfy the patent's paired material condition `N3 > 1.7` and `V3 < 30`. Because the patent explicitly combines those constraints with the high-Abbe front pair, the low-Abbe negative element can be described as part of the design's chromatic balancing strategy. The available data do not support an apochromatic or anomalous-dispersion claim: the patent gives only d-line index and Abbe number, with no `nC`, `nF`, `ng`, or `dPgF` values.

### L4 — Biconvex Positive, front member of G4

`nd = 1.71736, νd = 29.5. Glass: 717295 — dense-flint class (S-TIH1 / H-ZF3 coordinate family; supplier unproven). f = +71.056841 mm.`

L4 is the positive member of the final cemented group. In the modeled prescription it is biconvex and has positive standalone power. Its rear surface is also the cemented interface to L5; in the LensVisualizer data that junction correctly carries the downstream L5 medium rather than an artificial cement layer.

The patent defines the rear pair as a positive element followed by a negative element and constrains their Abbe-number separation. L4's relatively low `νd = 29.5` is therefore a source-published part of the rear-group material pairing, not a supplier or modern catalog identification.

### L5 — Negative Meniscus, rear member of G4

`nd = 1.62041, νd = 60.2. Glass: J-SK16 — supplier-neutral catalog proxy for historical 620602. f = −119.611114 mm.`

L5 is the negative cemented partner of L4. Although L5 alone is negative, the verified L4+L5 cemented pair remains net positive, with standalone cemented-group focal length +172.993578 mm. The pair therefore closes the prescription as a weak positive rear group rather than as a net-negative telephoto group.

The patent requires the negative member's Abbe number to exceed that of the positive member by more than 20. Example 1 gives `60.2 − 29.5 = 30.7`, satisfying that condition. The 2026-09-26 audit uses the existing J-SK16 curve as a supplier-neutral spectral proxy: its 1.62041/60.25 coordinates match the patent within the catalog guard. This does not establish the historical manufacturer or melt.

## Glass Identification and Selection


The integration audit uses these runtime spectral curves: L1, L2: `S-BAL35R`; L3: `J-SF11`; L4: `S-TIH1`; L5: `J-SK16`. The coordinate/class descriptions below retain the source-identification context; catalog names are qualified proxies, not evidence of production suppliers.

The patent supplies only `nd` and `νd` values, and it identifies no glass supplier. Current authoritative catalogs supply qualified spectral proxies and material families, without establishing historical melts. All five elements now resolve to coefficient-backed catalog curves. The newly added OHARA S-BAL35R coefficients come from its [25-04 manufacturer datasheet](https://www.ohara-inc.co.jp/assets/en/product/pdf/esbal35r.pdf); its modern radiation-resistant formulation is not asserted to have been used in 1974.

| Element(s) | Patent coordinate (`nd / νd`) | Material / proxy description | Current catalog evidence | Interpretation |
|---|---:|---|---|---|
| L1, L2 | 1.58913 / 61.0 | `S-BAL35R — catalog proxy` | OHARA S-BAL35R 1.58913 / 60.95; Hikari J-SK5 1.58913 / 61.22 | Crown-class coordinate; the modern OHARA `R` suffix is not projected backward onto 1974 production. |
| L3 | 1.78472 / 25.6 | `785256 — dense-flint / J-SF11-coordinate class` | Hikari J-SF11 1.78472 / 25.64; OHARA S-TIH11 and SCHOTT N-SF11 1.78472 / 25.68 | Dense-flint family; supplier unresolved. |
| L4 | 1.71736 / 29.5 | `717295 — dense-flint class` | CDGM H-ZF3 1.71736 / 29.50; OHARA S-TIH1 1.71736 / 29.52 | Excellent coordinate match across current catalogs; supplier still unresolved. |
| L5 | 1.62041 / 60.2 | `J-SK16 — catalog proxy` | Hikari J-SK16 1.62041 / 60.25; OHARA S-BSM16 1.62041 / 60.29; CDGM H-ZK9B 1.62041 / 60.34 | The small Abbe-number difference permits a qualified spectral proxy; the patent values remain unchanged. |

The palette uses two distinct dispersion contrasts that the patent itself calls out: the high-Abbe L1/L2 pair against low-Abbe L3, and the low-Abbe positive L4 against high-Abbe negative L5 in the cemented rear group. That supports discussion of achromatizing material pairing at the patent-condition level. It does not support claims of anomalous partial dispersion, secondary-spectrum optimization, or APO behavior because no verified line-index or `dPgF` data are available for the historical glasses.

## Focus Mechanism

The optical model uses `NO_INTERNAL_RECONSTRUCTION`. JP1976-074627 Example 1 publishes only an infinity-focus prescription and does not provide finite-conjugate spacing tables, moving-group kinematics, or a focus-travel law. The data file therefore contains no focus `var` entries.

The Miranda RE-II manual lists 1.5 m as the closest focus of the production 135 mm Auto EC. That number is retained as marketed metadata (`closeFocusM = 1.5`) but is not converted into an invented close-focus prescription. A minimum focusing distance by itself does not determine whether the production lens used pure unit extension, a hidden floating motion, or a prescription that differed mechanically from the patent example.

## Conditional Expressions

JP1976-074627 defines the design with twelve numbered conditions plus a total-length condition. The verifier evaluates them both on the patent's own `f = 100.0` normalization and on the final uniformly scaled prescription. Uniform scaling leaves the dimensionless normalized values unchanged.

| Condition | Example 1 / scaled-model value | Result |
|---|---:|---|
| `0.12 f < D3 + D4 + D5 < 0.20 f` | 0.1483 f | Pass |
| `D4 > 0.05 f` | 0.0715 f | Pass |
| `0.10 f < D6 < 0.20 f` | 0.1769 f | Pass |
| `(V1 + V2)/2 > 55`, `V3 < 30` | 61.0; 25.6 | Pass |
| `1.5 < (N1 + N2)/2 < 1.63`, `N3 > 1.7` | 1.58913; 1.78472 | Pass |
| `−0.2 < f/R2 < 0.3` | 0.073067 | Pass |
| `0.21 f < R3 < 0.30 f` | 0.2513 f | Pass |
| `0.4 f < R4 < 0.7 f` | 0.5191 f | Pass |
| `0.5 f < R5 < 5 f` | 1.0830 f | Pass |
| `3.6 < f(N3−1)/R6 < 4.6` | 4.070124 | Pass |
| `|1/R7 − 1/R8| f < 4.0` | 2.665071 | Pass |
| `V5 − V4 > 20` | 30.7 | Pass |
| Total length `< 0.95 f` | 0.90456 f using source BFD | Pass |

Passing these inequalities does not resolve the patent's separate first-order inconsistency. The numerical surface table still computes an EFL and BFD different from the printed `f = 100.0` and `BFD = 46.916`; the model preserves that discrepancy rather than widening a tolerance or altering a radius.

## Verification Summary

The implemented prescription is the patent surface table scaled uniformly by 1.35. Sequential height/reduced-angle tracing and a separately implemented ABCD calculation agree on the scaled effective focal length, 137.433861 mm. The corresponding paraxial back focal distance from R9 is 64.531597 mm. The model's `focalLengthMarketing = 135` therefore remains distinct from `focalLengthDesign = 137.433861`.

The source discrepancy is material. At the raw patent scale the surface table computes EFL 101.802860 mm rather than the printed 100.0 mm, and BFD 47.801183 mm rather than the printed 46.916 mm. Normal half-last-digit perturbations of the displayed source values do not bridge those differences. After scaling, the printed BFD would be 63.336600 mm, while the unmodified scaled surface table focuses at 64.531597 mm. The data file places the image plane at the latter computed focus and retains the former as a failed source comparison.

The aperture stop is not dimensioned by the patent. Fig. 1 places it inside D6, so the model splits D6 with the stop at 54.5% of the R6-to-R7 interval, measured from R6. Its semi-diameter, 13.289306 mm, is calibrated so that the paraxial entrance pupil gives f/2.8 for the computed design EFL. The resulting entrance-pupil semi-diameter is 24.541761 mm. Agreement with f/2.8 is therefore a calibration result, not independent evidence for a production diaphragm diameter.

The patent also publishes no clear apertures. The surface semi-diameters in the model are inferred from the final ray geometry and were checked for positive edge thickness, actual spherical rim slope, shared-gap clearance, and finite exact spherical-ray containment. The representative ±5.4° field fan is contained for all tested pupil samples. At the full published ±9° field, the core samples remain contained while the outer `0.75` pupil sample is clipped by the first two surfaces on the outward side. This finite diagnostic is retained as modeled front-group vignetting and is not presented as a measured production-vignetting result.

Surface-by-surface Petzval evaluation using `φ/(n·n′)` gives a scaled sum of +0.000874038 mm⁻¹. That number is a verified first-order property of the implemented prescription; by itself it is not an exact prediction of best-focus field curvature or off-axis image quality.

No aspherical coefficients, diffractive phase data, sensor cover plate, filter, dummy flare-cutter plane, or special folded path is present in the selected example. The model therefore remains an ordinary sequential, all-spherical refractive prescription.

## Sources / References

1. Japanese Patent Office. **JP1976-074627 (特開昭51-74627)**, *小型軽量のエルノスター型望遠レンズ*. Filed 1974-12-24; published 1976-06-28. Example 1 and conditions on printed pp. 157–159; optical layout and aberration plots on printed p. 160. Original four-page patent PDF is included in the dossier.
2. Miranda Camera Co., Ltd. **Miranda RE-II Owner's Manual**, “MIRANDA AUTO EC LENS SERIES” table, printed p. 20 / PDF p. 22. Archival scan: https://butkus.org/chinon/miranda/miranda_re-ii/miranda_re-ii.pdf
3. Buttler, Pekka. **“Data sheet: Miranda EC Auto 135 mm f/2.8.”** JAPB, 2026. Used only as secondary evidence for the EC-version timing, mount subtype, and sample-specific measurements; not as proof of patent attribution. https://japb.net/gear/gear-review-index/ds_miranda-135f28-ec/
4. OHARA Corporation. Current optical-glass catalog pages used for coordinate comparison: https://oharacorp.com/optical-glass/radiation-resistant-glass/ ; https://oharacorp.com/glass-type/s-tih-s-nph/ ; https://oharacorp.com/glass-type/s-bsm/
5. Hikari Glass Co., Ltd. Current J-SF and J-SK catalog pages used for coordinate comparison: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/ ; https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sk/
6. SCHOTT. Current optical-glass catalog, used for N-SF11 coordinate comparison: https://media.schott.com/api/public/content/e13dfb26ab7e44c792ba5c12f7382f1f?download=true&v=93796fb8
7. CDGM / 成都光明光电股份有限公司. Current optical-glass database, used for H-ZF3 and H-ZK9B coordinate comparison: https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
8. HOYA Group Optics Division, **Glass Cross Reference Index**, and Sumita Optical Glass, **Optical Glass Catalog 2024-07**, were consulted for cross-vendor coverage in the glass-coordinate audit. https://www.hoya-opticalworld.com/english/products/crossreference.html ; https://www.sumita-opt.co.jp/download_files/cn/catalog/cn-catalog-2407.pdf
