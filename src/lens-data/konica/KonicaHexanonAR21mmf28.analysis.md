## Patent Reference and Design Identification

**Patent:** JPS5517129A\
**Application Number:** JP8935378A\
**Filed:** 1978-07-24\
**Published:** 1980-02-06\
**Inventor:** Toshiko Shimokura\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** Retrofocus-type wide-angle lens\
**Embodiment analyzed:** Example 1

The prescription modeled here is Example 1 of JPS5517129A. The patent itself does not name a commercial lens, so the identification with the KONICA HEXANON AR 21mm f/2.8 is a production correlation rather than a manufacturer-confirmed patent mapping. The selected correlation is nevertheless specific: Example 1 is a normalized `f = 1` design at f/2.8 with a 92° full field, and the patent defines a nine-element, eight-group retrofocus architecture. The final data file applies a uniform scale of exactly 21.0000 to the patent dimensions, giving a computed design EFL of 20.9973 mm after the source table's rounding is retained.

Contemporaneous Konica literature identifies a 21 mm f/2.8 Automatic Ultra Wide Angle Hexanon with nine elements in eight groups, a minimum focusing distance of 0.2 m from the film plane, and a marketed 90° angle of view. The marketed angle is 2° narrower than the patent Example 1 full field of 92°; that difference is retained as a marketing-versus-design discrepancy rather than reconciled. Those are product specifications, not substitutes for the patent prescription. The data file therefore keeps the marketed 21 mm and f/2.8 identity separate from the computed design focal length, and uses `konica-ar` and `135-full-frame` as catalog metadata for the production lens.

All dimensional prescription values were scaled uniformly by 21.0000. No secondary rescaling was applied to force the rounded prescription to exactly 21.0000 mm EFL. Example 1 is entirely spherical, so there are no aspheric coefficients to transform under the scaling rule.

## Optical Architecture

The patent explicitly describes a retrofocus wide-angle lens composed of a four-group front section and a four-group rear section. Figure 1 on patent PDF page 6 (printed page 184) shows nine glass elements in eight air-separated groups, with a single cemented junction between L6 and L7. The data file preserves that structure without filters, cover plates, dummy planes, or other auxiliary optical surfaces.

The front section begins with positive meniscus L1 and then places three negative menisci, L2 through L4, in sequence. Computed from the final scaled data, groups G1-G4 together have an EFL of -13.3389 mm. This net-negative front block is the defining power distribution of the retrofocus arrangement: it expands the back focal distance relative to the system focal length while the rear section restores positive system power.

The rear section begins with strong biconvex positive L5, followed by the cemented L6-L7 group, which is net negative despite its positive L6 component, and ends with two positive menisci, L8 and L9. The aperture stop is in the air space between L5 and L6. Patent PDF page 5 (printed page 183) places it 0.07 normalized units behind surface 10; after scaling, the data representation preserves that station by splitting the source gap into 1.4700 mm from surface 10 to `STO` and 1.7388 mm from `STO` to surface 11.

The stop position is source-published, but its physical diameter is not. The modeled stop semi-diameter of 5.68157 mm is therefore a derived quantity chosen by paraxial solution so that the final scaled prescription realizes f/2.8. Likewise, the clear semi-diameters are modeling inferences rather than patent data. They were constrained by traced ray envelopes, the patent's Figure 1 proportions, edge-thickness and rim-slope limits, cross-gap geometry, and ray containment.

Using the project's classification tests on the final data, the first-to-last optical vertex length is 40.5237 mm and the EFL is 20.9973 mm, so `TL/EFL = 1.92995`; the lens is not telephoto under the project definition. The computed BFD is 34.5338 mm, giving `BFD/EFL = 1.64468`; because BFD exceeds EFL, the design is retrofocus under the same rule.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.71300`, `νd = 53.9`. Glass: `713539` six-digit d-line coordinate code. Standalone `f = +95.454 mm`.

L1 is the positive meniscus at the object side of the system. The patent describes its more strongly curved convex face as directed toward object space. Its positive standalone power does not make the front section positive overall; L2-L4 more than offset it, leaving G1-G4 strongly negative as a combined block.

### L2 — Negative Meniscus

`nd = 1.72000`, `νd = 43.7`. Glass: `720437` six-digit d-line coordinate code. Standalone `f = -25.330 mm`.

L2 is the first of three successive negative menisci and has the strongest standalone negative power of those three. The patent places the more strongly curved concave face toward image space. Within the front block, L2 supplies a large share of the divergence needed for the retrofocus back-focus extension.

### L3 — Negative Meniscus

`nd = 1.71700`, `νd = 47.9`. Glass: `717479` six-digit d-line coordinate code. Standalone `f = -44.507 mm`.

L3 continues the negative-meniscus sequence with less standalone negative power than L2. Its glass coordinates are identical to L4 in the modeled prescription, but the two elements have different curvatures and thicknesses and therefore different standalone focal powers.

### L4 — Negative Meniscus

`nd = 1.71700`, `νd = 47.9`. Glass: `717479` six-digit d-line coordinate code. Standalone `f = -51.647 mm`.

L4 completes the patent's four-group front section. Together L1-L4 compute to -13.3389 mm EFL in the final scaled model. That group value is a standalone block power; it should not be confused with the individual elements' focal lengths or with each surface's in-situ contribution to a traced ray.

### L5 — Biconvex Positive

`nd = 1.75520`, `νd = 27.5`. Glass: `755275` six-digit d-line coordinate code. Standalone `f = +21.118 mm`.

L5 is the strong positive singlet immediately ahead of the stop. The patent gives it special weight through condition (4), requiring `0.8 f < f5 < 1.2 f`. Recomputed from the final data and normalized by the 21.0000 scale, `f5 = 1.005611 f`, well inside that interval. Its standalone focal length is therefore close to the complete lens's nominal focal length, although its in-situ action is moderated by the negative front block and the remaining rear groups.

### G6 — Cemented L6 + L7

**L6:** `nd = 1.60311`, `νd = 60.7`. Glass: `603607`. Standalone `f = +27.994 mm`.\
**L7:** `nd = 1.80518`, `νd = 25.4`. Glass: `805254`. Standalone `f = -15.870 mm`.

L6 and L7 share the cemented interface at surface 12. The data file assigns that interface to downstream element L7, matching the project's cemented-junction convention. The patent describes L6 as positive and L7 as biconcave negative, with the pair negative as a whole.

Independent computation from the final surfaces gives the cemented pair a net EFL of -38.6754 mm. This is distinct from both component focal lengths: L6 is individually positive, L7 is individually negative, and their bonded combination remains negative. The large difference in `νd` between the two glasses gives the pair substantial first-order chromatic balancing leverage, but the source supplies no line indices or partial-dispersion data from which an apochromatic or anomalous-dispersion claim could be made.

### L8 — Positive Meniscus

`nd = 1.69680`, `νd = 55.5`. Glass: `697555` six-digit d-line coordinate code. Standalone `f = +30.969 mm`.

L8 is the first of the two final positive menisci. The patent orients its concave face toward object space. Its positive power begins the final convergence after the net-negative cemented G6 group.

### L9 — Positive Meniscus

`nd = 1.69680`, `νd = 55.5`. Glass: `697555` six-digit d-line coordinate code. Standalone `f = +41.521 mm`.

L9 uses the same d-line glass coordinates as L8 but a weaker standalone positive power. It is the last refracting element before the source-published back-focus interval. Together the two rear menisci complete the positive rear-side power recovery characteristic of this patent architecture.

## Glass Identification and Selection

All physical elements resolve at runtime to coordinate-compatible catalog dispersion curves. These
curves provide spectral approximations and do not establish historical supplier or melt identity.

The patent publishes only d-line refractive index and Abbe number. It does not identify glass manufacturers or catalog designations, and it supplies no `nC`, `nF`, `ng`, `PgF`, or `dPgF` values. The final data file therefore uses six-digit coordinate codes rather than selecting a vendor identity from modern catalogs.

| Elements | Stored glass code | `nd` | `νd` | Data status |
|---|---:|---:|---:|---|
| L1 | `713539` | 1.71300 | 53.9 | d-line coordinate code; vendor unresolved |
| L2 | `720437` | 1.72000 | 43.7 | d-line coordinate code; vendor unresolved |
| L3, L4 | `717479` | 1.71700 | 47.9 | d-line coordinate code; vendor unresolved |
| L5 | `755275` | 1.75520 | 27.5 | d-line coordinate code; vendor unresolved |
| L6 | `603607` | 1.60311 | 60.7 | d-line coordinate code; vendor unresolved |
| L7 | `805254` | 1.80518 | 25.4 | d-line coordinate code; vendor unresolved |
| L8, L9 | `697555` | 1.69680 | 55.5 | d-line coordinate code; vendor unresolved |

The catalog audit found exact or near-exact coordinate analogues for most of these pairs in more than one current or legacy glass family. That multiplicity does not establish which melt Konishiroku used. Consequently, the analysis does not promote any OHARA, HOYA, SCHOTT, HIKARI, CDGM, or SUMITA analogue to an identified production glass.

The most conspicuous `νd` contrast occurs inside G6, from 60.7 in L6 to 25.4 in L7. That contrast is sufficient to describe first-order crown/flint-like chromatic balancing at the Abbe-number level, but not secondary-spectrum or APO behavior. The data deliberately omits spectral fields that the patent does not support.

## Focus Mechanism

The patent examples are infinity-state prescriptions and provide no variable focus-spacing table. The final data therefore has `var: {}` and carries the focus status `NO_INTERNAL_RECONSTRUCTION`. No group translation, floating compensation, or close-focus spacing has been invented.

The production specification of 0.2 m minimum focus from the film plane is retained as catalog metadata because `closeFocusM` is required by the data schema. It does not define an optical state in this model and should not be read as evidence for unit focus, internal focus, or any particular mechanical focusing arrangement.

## Conditional Expressions

The patent's conditions on PDF page 1 (printed page 179) define the intended power, spacing, refractive-index, and Abbe-number regime. Recomputed from the final scaled data and normalized back to the patent's `f = 1` units, Example 1 satisfies every stated condition.

| Condition | Patent expression | Recomputed Example 1 value | Result |
|---|---|---:|---|
| (1) | `1.8 f < Σd < 2.1 f` | 1.9297 | Pass |
| (2a) | `0.30 f < d4+d6+d8 < 0.42 f` | 0.3519 | Pass |
| (2b) | `0.6 f < |f1,2,3,4| < 0.7 f`, with negative front-block power | 0.635188 | Pass |
| (3) | `1.68 < (n2+n3+n4)/3 < 1.74` | 1.7180 | Pass |
| (4) | `0.8 f < f5 < 1.2 f` | 1.005611 | Pass |
| (5) | `1.3 f < r13 < 2.2 f` | 1.7751 | Pass |
| (6) | `1.67 < (n8+n9)/2 < 1.73` | 1.6968 | Pass |
| (7a) | `43 < (ν2+ν3+ν4)/3 < 53` | 46.5 | Pass |
| (7b) | `53 < ν6 < 65` | 60.7 | Pass |

Conditions (2b) and (4) are also useful cross-checks on the interpretation of the prescription table: the recomputed front-block EFL and L5 standalone EFL reproduce the values printed with Example 1 to the patent's stated precision.

## Verification Summary

The final scaled data recomputes to an EFL of 20.997276 mm. The source-scaled rear image gap is 34.5366 mm, while independent paraxial calculation gives a BFD of 34.533835 mm; the 0.002765 mm difference is consistent with the rounded patent prescription and is not removed by rescaling or by changing the authored rear gap.

The stop solution gives an entrance-pupil semi-diameter of 3.749514 mm and a modeled f-number of 2.800000 for the 5.681574 mm physical stop semi-diameter. These aperture dimensions are computed model quantities, not published mechanical measurements.

The independently recomputed Petzval sum is 0.00570648 mm^-1 using the surface-by-surface convention `φ/(n·n')`. The same calculation reproduces the patent's printed Petzval column and total at source precision before scaling.

Because the patent does not publish clear apertures, every surface semi-diameter in the model is inferred. The resulting geometry has a maximum actual spherical rim angle of 46.56°, a minimum element endpoint edge thickness of 0.954 mm, and a minimum cross-gap headroom of 0.0154 mm under the current 90% shared-band intrusion rule. The tightest gap is between surfaces 13 and 14, which is why surface 13 is held to a 6.20 mm semi-diameter. These values describe validation of the modeled geometry; they are not historical manufacturing dimensions.

No patent radius, thickness, refractive index, Abbe number, stop station, or focal quantity was corrected. The non-source construction choices are the uniform 21.0000 scale, the explicit stop-plane insertion at the published axial station, the derived stop size, and the inferred semi-diameters.

## Sources

1. **JPS5517129A**, *Retrofocus-type wide-angle lens*, Toshiko Shimokura, Konishiroku Photo Industry Co., Ltd., published 1980-02-06. The supplied scan is the prescription authority. Example 1 is on PDF page 4 (printed page 182); the stop statement is on PDF page 5 (printed page 183); Figure 1 is on PDF page 6 (printed page 184); the patent conditions begin on PDF page 1 (printed page 179).
2. **Konica / Berkey Marketing Companies**, 1980 lens literature, entry for the 21 mm f/2.8 Automatic Ultra Wide Angle Hexanon. Archival manufacturer-literature scan: <https://www.pacificrimcamera.com/rl/02831/02831.pdf>.
3. **Google Patents**, JPS5517129A bibliographic cross-reference and English abstract: <https://patents.google.com/patent/JPS5517129A/en>.
4. **OHARA optical-glass catalog resources:** <https://www.ohara-inc.co.jp/en/product/01000/>.
5. **HOYA optical-glass catalog resources:** <https://www.hoyaoptics.eu/glass-polished-lenses>.
6. **SCHOTT optical-glass catalog resources:** <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>.
7. **HIKARI optical-glass catalog resources:** <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/>.
8. **CDGM optical-glass database:** <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>.
9. **SUMITA optical-glass data:** <https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf>.
