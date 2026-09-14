# KONICA HEXANON 135mm f/3.5 — JP1955-009472 Example 1

## Patent Reference and Design Identification

**Patent:** JP1955-009472\
**Application Number:** 特願 昭29-2299\
**Filed:** 1954-02-08\
**Published:** 1955-12-26\
**Inventors:** Tomokazu Kazamaki; Fumio Kondo\
**Applicants:** Tomokazu Kazamaki; Fumio Kondo\
**Title:** 望遠写真レンズ (Telephoto photographic lens)\
**Embodiment analyzed:** Example 1

JP1955-009472 Example 1 is the fixed prescription source for this model. The patent gives a four-element,
four-group, all-spherical objective with a complete focal length of 100 mm. Its aberration plots are labeled for
f/3.5 and an 8°50′ off-axis field. The production-correlated data file applies a uniform scale factor of 1.35. That
preserves every optical proportion while moving the independently traced effective focal length from 99.996264 mm to
134.994957 mm. All dimensional prescription values are scaled by the same factor; refractive indices and Abbe numbers
are unchanged. There are no aspherical surfaces, so no aspheric coefficient transformation is applicable.
(JP1955-009472, pp. 1–2.)

The selected production correlation is the early Konica F/FS Hexanon 135mm f/3.5 rather than a later AR lens. A
Konica Camera Company F/FS specification sheet lists a 135mm f/3.5 telephoto with four elements in four groups,
f/3.5–16 aperture range, 18° angle of view, 6 ft closest focus, automatic diaphragm, and 55 mm filters. The patent's
17°40′ full plotted field differs from the rounded manufacturer figure by only 20′, and the uniformly scaled
prescription traces to 134.994957 mm. A Konica Camera Company price list effective July 1, 1961 separately lists the
135mm f/3.5 automatic telephoto for the Konica F and FS. These are convergent correlation points; neither manufacturer
document explicitly identifies JP1955-009472 as the production patent.

The timing is also compatible with the correlation. Konica's own technical history states that the Konica F was
commercialized in 1960. The 1954 filing therefore predates the camera system but falls within a plausible design lead
time. Timing alone is not treated as proof of patent-to-product identity.

## Optical Architecture

The model is a four-element, four-group telephoto objective composed entirely of air-spaced menisci in
positive–positive–negative–positive order. The two front crown-like elements form a strongly positive collecting
subsystem. L3 is the strongest standalone negative element. L4 is positive, but the isolated L3–L4 rear subsystem,
including their published air separation, remains net negative with an effective focal length of −76.354767 mm in the
scaled model. No cemented interfaces are present.

The telephoto classification follows the final scaled prescription rather than the patent title alone. Independent
paraxial tracing gives an effective focal length of 134.994957 mm and a first-vertex-to-Gaussian-image total track of
128.350515 mm, so `TL/EFL = 0.950780 < 1`. The back focal distance from R8 is 73.405515 mm, or
`BFD/EFL = 0.543765`; the design is therefore not retrofocus under the project definition. Relative to the first and
last refracting vertices, respectively, the principal-plane offsets are −13.324147 mm and −61.589443 mm, where a
negative sign denotes an objectward displacement from the stated vertex.

The patent text treats the air spacing between L2 and L3 as an aberration-correction degree of freedom. That spacing
separates the strongly positive front pair from L3 rather than forming a cemented achromat. The patent does not provide
a numerical diaphragm position, and Figure 1 does not clearly depict a stop symbol. LensVisualizer nevertheless
requires exactly one `STO`, so the data file places a modeled stop within the long published `d6 = 15.2 mm` air gap
between R6 and R7. The 12.5 mm / 2.7 mm source-scale split is an authoring choice, not a patent measurement; after
scaling it becomes 16.875 mm / 3.645 mm and preserves the published `d6` total exactly.

The stop diameter and clear apertures are likewise modeling quantities. `STO.sd = 11.213190 mm` is chosen so that the
modeled entrance pupil recovers the published f/3.5 aperture. The modeled element semi-diameters are 22.5, 21.5, 16.0,
and 12.5 mm from front to rear. JP1955-009472 publishes no numerical clear-aperture or semi-diameter table.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.51633, νd = 64.0. Glass: 516640 crown class; S-BSL7 coefficient proxy. f = +125.364 mm.`

L1 is the front positive meniscus and begins the high-positive-power front subsystem. Both radii are positive in the
project's left-to-right sign convention, but the object-side surface has substantially greater curvature than the rear
surface, leaving the element positive in isolation. Its 64.0 Abbe number places it in a crown-like region of the
prescription's glass coordinates.

L1 is separated from L2 by the source `d2 = 0.2 mm` air gap, scaled to 0.27 mm. No cemented relationship is modeled,
and the patent publishes no element-specific C-, F-, or g-line indices for L1.

### L2 — Positive Meniscus

`nd = 1.51633, νd = 64.0. Glass: 516640 crown class; S-BSL7 coefficient proxy. f = +91.541 mm.`

L2 repeats L1's d-line glass coordinates but carries greater standalone positive power. Together L1 and L2 form the
front subsystem used explicitly in the patent's `F1,2` condition. In the final scaled prescription their combined
effective focal length is +53.784041 mm.

The air gap after L2 is specifically discussed by the patent as a free degree of freedom for aberration correction. The
data file preserves the published separation under uniform scaling rather than merging the front pair into a synthetic
or cemented group.

### L3 — Negative Meniscus

`nd = 1.67270, νd = 32.2. Glass: 673322 dense-flint class; H-ZF2 coefficient proxy. f = −38.880 mm.`

L3 is the only standalone negative element and has the greatest absolute standalone element power in the prescription.
Its first surface is weakly curved while its second surface is strongly curved, producing the negative meniscus power
that establishes the rear-negative contribution of the telephoto architecture.

The patent places an inclusive upper-bound condition on L3's first-surface curvature,
`0 < 1/R5 ≤ 1/F`. The source value `R5 = 280.00 mm` satisfies that relation for `F = 100 mm`. The long air space after
L3 is preserved at the published total spacing; only its subdivision by the modeled `STO` is inferred.

### L4 — Positive Meniscus

`nd = 1.64769, νd = 33.9. Glass: 648339 flint class; E-FD2 coefficient proxy. f = +118.383 mm.`

L4 is a positive meniscus behind the modeled aperture stop. It restores positive standalone power after L3, while the
L3–L4 subsystem as a whole remains negative when isolated with its published spacing. L4 is air-spaced from L3 and is
not part of a cemented doublet.

Its radii and center thickness are direct 1.35-scaled patent values. The stop coordinate and semi-diameter are modeling
choices and do not alter the published R6–R7 total separation.

## Glass Identification / Selection

JP1955-009472 supplies d-line refractive index and Abbe number but names no glass manufacturer, catalog, or historical
melt. The final data retains supplier-neutral coordinate classes while naming compatible coefficient curves as
catalog-equivalent proxies. Those proxies improve wavelength-dependent tracing; they do not identify the production
glass supplier or historical melt:

| Elements | Stored class | Patent nd / νd | Authoritative modern comparison | Residual Δnd / Δνd | Status |
| --- | --- | ---: | --- | ---: | --- |
| L1, L2 | 516640 crown class | 1.51633 / 64.0 | OHARA S-BSL7, code 516641: 1.51633 / 64.14 | 0.00000 / +0.14 | Coefficient proxy; production supplier unspecified |
| L3 | 673322 dense-flint class | 1.67270 / 32.2 | CDGM H-ZF2, code 673322: 1.67270 / 32.17 | 0.00000 / −0.03 | Coefficient proxy; production supplier unspecified |
| L4 | 648339 flint class | 1.64769 / 33.9 | HOYA E-FD2, code 648338: 1.64769 / 33.84 | 0.00000 / −0.06 | Coefficient proxy; production supplier unspecified |

The six-digit coordinate and close `nd`/`νd` match do not establish that any modern vendor family was the patent's
historical melt. S-BSL7, H-ZF2, and E-FD2 are therefore used only as compatible dispersion-curve proxies, with the
production supplier left unspecified.

No `nC`, `nF`, `ng`, or `dPgF` values are published for the selected patent example, and none are copied into the
authored prescription. The catalog resolver can use the qualified proxy curves for wavelength-dependent tracing, but
the patent still does not support an apochromatic or anomalous-partial-dispersion claim.

## Focus Mechanism

JP1955-009472 Example 1 publishes no object-distance table, focus-spacing table, magnification state, or internal
focusing motion. The data file therefore remains `NO_INTERNAL_RECONSTRUCTION`: `var` is empty and the optical
prescription represents the infinity state only.

The `closeFocusM` value of 1.8288 m is product metadata derived from the 6 ft closest-focus specification in Konica
F/FS literature. It is not used to solve a close-focus optical state and does not imply a particular internal or
unit-focusing mechanism. No focus travel or moving-group behavior is asserted from the patent.

## Conditional Expressions

The patent defines `F1,2` as the combined focal length of L1 and L2 and `F1,2,3` as that of L1 through L3. The printed
conditions are:

1. `0 < 1/R5 ≤ 1/F`
2. `F1,2 ≤ F/1.5`
3. `F/0.5 ≤ F1,2,3`

All three pass when recomputed from the final TypeScript prescription and mapped back through the 1.35 scale. In the
patent normalization, `F1,2 = 39.840030 mm` and `F1,2,3 = 289.853092 mm`; with `F = 100 mm` they satisfy the second
and third inequalities. The first relation passes directly with `R5 = 280.00 mm`. No source value is adjusted to make
these conditions pass.

## Verification Summary

Fresh reduced-angle tracing and an independently assembled ABCD matrix agree to machine precision. At patent scale the
prescription gives `EFL = 99.996264 mm`, rather than exactly 100 mm because the published table is rounded. Uniform
1.35× scaling gives `EFL = 134.994957 mm`, `BFD = 73.405515 mm`, an R1-to-R8 vertex length of 54.945000 mm, and a
first-vertex-to-image total track of 128.350515 mm.

For the explicitly modeled stop placement, the entrance-pupil diameter is 38.569988 mm and the recovered paraxial
f-number is 3.500000. The exit-pupil diameter is 22.960673 mm; its paraxial image lies 6.956840 mm objectward of R8.
These pupil quantities describe the authored stop model, not a stop coordinate printed by the patent.

The modeled clear apertures satisfy the current geometry checks used for this sequential all-spherical prescription.
The minimum computed element edge thickness is 1.187444 mm, the maximum actual spherical rim angle is 41.376702°, and
the greatest positive shared-gap sag usage is 0.163195 of the available gap, below the default 0.90 limit. Exact
spherical-ray checks at the project's default 0.6 × 8°50′ field remain inside the authored clear apertures, with a
maximum semi-diameter utilization of 0.939619. At the full published 8°50′ field, the modeled clear apertures vignette
part of the negative-side pupil bundle; this is not used as a claim about the production barrel because the patent
publishes no clear-aperture dimensions.

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is +0.001721848361 mm⁻¹ for the 135 mm-scaled prescription.
It is a first-order calculation from the final model, not a value published by JP1955-009472.

## Sources

- **Primary optical source:** 特許公告 昭30-9472, `JP1955-009472`, 望遠写真レンズ, Example 1, supplied two-page patent
  scan. The numerical prescription on p. 1 and Figures 1–4 on pp. 1–2 establish the optical form, d-line glass
  coordinates, f/3.5 aberration plot, 8°50′ off-axis plots, and conditional expressions.
- **Konica Camera Company, Konica F/FS lens specification and price literature:**
  <https://www.pacificrimcamera.com/rl/01878/01878.pdf>. Manufacturer-authored archival scan used for the early F/FS
  135mm f/3.5 product specifications: 4 elements / 4 groups, 18° angle, 6 ft closest focus, f/3.5–16, automatic
  diaphragm, and 55 mm filter size.
- **Konica Camera Company price list, effective July 1, 1961:**
  <https://www.pacificrimcamera.com/rl/01881/01881.pdf>. Manufacturer-authored archival scan confirming the 135mm
  f/3.5 automatic telephoto as a Konica F/FS product by that date.
- **Konica, “コニカカメラの技術史,” Konica Technical Report, Vol. 6 (1993):**
  <https://research.konicaminolta.com/jp/pdf/technology_report/1993/pdf/2.pdf>. Manufacturer technical history used
  only for the 1960 commercialization date of the Konica F system.
- **OHARA, Glass Type / S-BSL7:** <https://www.ohara-inc.co.jp/en/product/01000/>. Current authoritative catalog used
  only for the 516641 coordinate comparison.
- **CDGM Optical Glass:** <https://www.cdgmgd.com/>. Manufacturer catalog used for the H-ZF2 coefficient proxy and
  673322 coordinate comparison.
- **HOYA Optical Glass data downloads:** <https://www.hoya-opticalworld.com/english/datadownload/index.html>.
  Manufacturer catalog used for the E-FD2 coefficient proxy and 648338 coordinate comparison.
