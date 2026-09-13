# NIKON NIKKOR-SW 75mm f/4.5 — JPS5357028A Example 1

## Patent Reference and Design Identification

**Patent:** JPS5357028A / 昭53-57028\
**Application Number:** 特願昭51-131221\
**Filed:** 1976-11-02\
**Published:** 1978-05-24\
**Inventor:** Ikuo Mori (森征雄)\
**Applicant:** Nippon Kogaku K.K. (日本光学工業株式会社)\
**Title:** 広角レンズ (Wide angle lens)\
**Embodiment analyzed:** Example 1

Example 1 is the numerical prescription transcribed here. The Japanese publication is the prescription authority; its Example 1 table gives a normalized focal length of 100 mm, aperture ratio 1:4.5, seven glass elements in four air-spaced components, and the complete spherical radius/thickness/index set. The final LensVisualizer model applies a uniform scale of 0.75 to correlate that normalized design with a 75 mm production lens while retaining the patent's refractive indices and Abbe numbers unchanged. [JPS5357028A, PDF p. 3 / printed p. 173, Example 1.]

The production correlation is strong but is not a manufacturer-confirmed patent attribution. Three lines of evidence converge:

1. Nikon's period large-format brochure specifies the Nikkor-SW 75mm f/4.5S as a 75 mm, f/4.5, seven-element/four-group lens. The same brochure lists 80° covering power wide open and 106° at f/16, with a 126 mm image circle wide open and 200 mm at f/16. These are production specifications, not prescription values used to alter the patent model.
2. Patent Example 1 is also f/4.5 and 7/4; multiplying every dimensional prescription quantity by 0.75 maps the published 100 mm normalization to a computed 74.9981 mm Gaussian EFL.
3. Nikon's historical *Thousand and One Nights No. 1* identifies the production Nikkor-SW 75mm f/4.5 as an application of the Wakimoto-type symmetrical wide-angle lineage. That statement establishes design-family context; it does not identify Ikuo Mori's JPS5357028A as the production patent.

The patent's Fig. 3 plots Example 1 aberrations to a 52° half-field coordinate. That 104° plotted full-angle extent is treated as performance-plot evidence only. It is not used as a published physical clear-aperture diameter or as proof that the modeled semi-diameters reproduce the production lens's covering power. [JPS5357028A, PDF p. 5 / printed p. 175, Fig. 3.]

## Optical Architecture

The prescription is an all-spherical four-component wide-angle system with power sequence **negative / positive / positive / negative**. From object to image it comprises the negative meniscus L1, the positive cemented triplet L2, diaphragm 10, the positive cemented doublet L3, and the negative meniscus L4. This sequence and the stop placement are stated directly in the patent; the implemented model preserves them. [JPS5357028A, PDF pp. 1–3 / printed pp. 171–173; Fig. 1 on PDF p. 4 / printed p. 174.]

The patent deliberately departs from exact front/rear symmetry. Its first condition, `d9 < d2`, shortens the separation between L3 and the rear negative component relative to the front-side separation. The patent states that this is intended to reduce the effective diameter of the rear component for swing-and-tilt use on a large camera, while acknowledging the resulting burden on off-axis astigmatism and meridional correction. The second condition, `d3 > d2`, uses the substantial thickness of L2A to improve the meridional correction compromised by that asymmetry. The third condition, `n2 > n3`, gives the L2A/L2B cemented interface converging action that the patent associates with spherical-aberration correction and also with distortion control. The preferred curvature and Abbe-number relations further constrain the same central groups. [US 4,176,915 A, description corresponding to Japanese pp. 2–3.]

The implemented infinity model has a Gaussian track of 122.7785 mm and an EFL of 74.9981 mm, so `TL/EFL = 1.6371`. Its rear-vertex BFD is 52.2485 mm, giving `BFD/EFL = 0.6967`. Under the project's quantitative terminology, it is therefore neither a telephoto system (`TL/EFL < 1` is false) nor a retrofocus system (`BFD > EFL` is false).

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex toward the object

`nd = 1.57250, νd = 57.5. Glass: 573575 — barium crown coordinate class (vendor unresolved). f = -46.5133 mm.`

L1 is the complete first divergent component. Its meniscus orientation is explicitly part of the patent architecture. In the final model it remains a standalone negative component; no catalog glass supplier is asserted from the coordinate alone.

### L2 — Cemented Positive Triplet

#### L2A — Biconvex Positive

`nd = 1.80218, νd = 44.4. Glass: 802444 — high-index crown/lanthanum coordinate class (vendor unresolved). f = +19.1630 mm.`

L2A is the strongly positive front member of the triplet. The patent makes its center thickness `d3` larger than the L1-to-L2 air separation `d2`; this is condition (2), tied in the patent text to meridional-field correction. Its rear surface also participates in the preferred `|r4| < r3` curvature relation.

#### L2B — Biconcave Negative

`nd = 1.67163, νd = 38.8. Glass: 672388 — dense-flint/lanthanum coordinate class (vendor unresolved). f = -20.6775 mm.`

L2B is cemented directly to L2A and L2C. Because `n2 > n3`, the L2A/L2B cemented interface has the converging action described by the patent. The patent associates this condition with maintaining a large relative aperture while controlling spherical aberration and distortion; the analysis does not assign a separate numerical aberration contribution to L2B by itself.

#### L2C — Positive Meniscus

`nd = 1.52000, νd = 70.1. Glass: 520701 — low-index high-Abbe crown coordinate class (vendor unresolved). f = +66.4046 mm.`

L2C completes the triplet. The three standalone element powers do not describe the behavior of the cemented component in isolation from its interfaces: recomputing L2 as one air-to-air cemented triplet gives a net EFL of **+32.9701 mm**. Its Abbe number also completes the patent's preferred relation `νd2 > νd3 < νd4`.

### L3 — Cemented Positive Doublet

#### L3A — Positive Meniscus

`nd = 1.60717, νd = 40.2. Glass: 607402 — barium flint (BAFD3 coordinate-compatible dispersion proxy; supplier unresolved). f = +21.3436 mm.`

L3A is the positive first member of the rear cemented component. The final model retains the patent's d-line coordinate directly rather than promoting a catalog-equivalent supplier identity.

#### L3B — Negative Meniscus, convex toward the image

`nd = 1.71736, νd = 29.5. Glass: 717295 — dense flint coordinate class (vendor unresolved). f = -35.7607 mm.`

L3B has negative standalone power in the implemented prescription even though the cemented L3 component as a whole is positive. Recomputing the complete air-to-air L3 doublet gives a net EFL of **+90.5611 mm**. The patent's preferred chromatic relation for this component is `νd5 > νd6`; the implemented values are 40.2 and 29.5 respectively.

### L4 — Negative Meniscus, convex toward the image

`nd = 1.73350, νd = 51.0. Glass: 734510 — lanthanum crown (TAC4 coordinate-compatible dispersion proxy; supplier unresolved). f = -62.6663 mm.`

L4 is the complete fourth divergent component. The patent specifically connects the short L3-to-L4 separation required by condition (1) with reducing the effective rear diameter for swing-and-tilt photography on a large-format camera. The authored semi-diameter of L4 is nevertheless a modeled clear aperture, not a recovered Nikon production diameter.

## Glass Identification and Selection

The patent publishes native d-line `nd` and `νd` values but does not name a glass supplier or melt. The final data therefore uses supplier-neutral six-digit coordinate classes. Catalog review found several compatible named glasses, but coordinate agreement is evidence of an optical class or equivalent, not historical production provenance.

| Element | `nd` | `νd` | Authored glass label | Catalog-audit disposition |
|---|---:|---:|---|---|
| L1 | 1.57250 | 57.5 | 573575 — barium crown coordinate class | Exact/near cross-vendor equivalents exist; supplier unresolved |
| L2A | 1.80218 | 44.4 | 802444 — high-index crown/lanthanum coordinate class | No defensible named assignment retained |
| L2B | 1.67163 | 38.8 | 672388 — dense-flint/lanthanum coordinate class | No defensible named assignment retained |
| L2C | 1.52000 | 70.1 | 520701 — low-index high-Abbe crown coordinate class | No defensible named assignment retained |
| L3A | 1.60717 | 40.2 | 607402 — barium flint coordinate class | SUMITA BASF3 is an exact catalog-coordinate match; provenance unresolved |
| L3B | 1.71736 | 29.5 | 717295 — dense flint coordinate class | Exact CDGM H-ZF3 and equivalent-family matches exist; provenance unresolved |
| L4 | 1.73350 | 51.0 | 734510 — lanthanum crown coordinate class | No current authoritative named assignment retained |

The final prescription does **not** author candidate catalog `nC`, `nF`, `ng`, or `dPgF` values onto these elements. The patent evidence therefore supports native d-line/Abbe-level material identification only. In the current LensVisualizer runtime, some supplier-neutral six-digit coordinate labels can resolve to coordinate-compatible catalog dispersion entries and act as coefficient-backed spectral proxies; such a resolved curve is an equivalence model, not evidence of the historical Nikon melt or supplier. It does not by itself support an apochromatic or anomalous-partial-dispersion claim. The patent itself limits the glass-selection discussion here to the Abbe-number relations used for axial and off-axis chromatic correction.

## Focus Mechanism

The patent publishes one infinity-design prescription and no internal focusing trajectory. The focus status is therefore **NO_INTERNAL_RECONSTRUCTION**: `var` and `varLabels` are empty, and no lens group moves inside the modeled prescription.

Finite-object focusing for a view-camera lens is obtained by camera standard/bellows displacement, which lies outside this lens model. The required `closeFocusM = 1.0` value is only a finite schema/UI placeholder and is not a Nikon minimum-focus-distance specification or a computed close-focus state.

## Conditional Expressions

Uniform scaling preserves all dimensional inequalities, while the refractive-index and Abbe-number inequalities are unchanged. The final parsed model independently verifies every condition applied to Example 1:

| Patent condition | Implemented values | Result | Patent-stated purpose |
|---|---:|---|---|
| `d9 < d2` | 8.2725 < 13.395 mm | Pass | Reduce rear-component effective diameter; facilitate swing/tilt |
| `d3 > d2` | 20.4225 > 13.395 mm | Pass | Improve meridional correction affected by condition (1) |
| `n2 > n3` | 1.80218 > 1.67163 | Pass | Give the L2A/L2B interface converging action; support spherical/distortion correction |
| preferred `|r4| < r3` | 23.7075 < 26.95725 mm | Pass | Assist correction while retaining the large relative aperture |
| `νd2 > νd3 < νd4` | 44.4 > 38.8 < 70.1 | Pass | Preferred chromatic relation in L2 |
| `νd5 > νd6` | 40.2 > 29.5 | Pass | Preferred chromatic relation in L3 |

The purpose descriptions above are the patent's stated design rationale; they should not be read as a decomposition of measured aberration contribution by individual element.

## Model Normalization and Verification

The final model applies `s = 0.75` to every radius, center thickness, air spacing, and image-plane distance. Example 1 contains no aspheres, so no conic or polynomial coefficient transformation is required. Recomputing the final parsed prescription gives **EFL = 74.9981159 mm**.

The image plane is placed at the Gaussian BFD recomputed from the scaled rounded prescription: **52.2485380 mm** from the rear vertex of surface 11. The linearly scaled printed patent `Bf` is **52.2547500 mm**, leaving a preserved computed-minus-printed residual of **-0.0062120 mm** rather than forcing the model to the rounded source number.

The patent places diaphragm 10 inside the source `d6` gap but gives no numeric station or physical diameter. After scaling, that 2.73 mm gap is split at its neutral midpoint, **1.365 mm + STO + 1.365 mm**. The modeled stop semi-diameter, **8.5942006 mm**, is then calibrated paraxially so the entrance-pupil diameter is **16.6662480 mm** and the model reproduces f/4.5. This agreement is calibration, not independent evidence for the physical production iris diameter.

No semi-diameters are published. The initial ray-envelope apertures were refined during integration to match the patent optical rims; see the dated review below. Positive edge thickness and production render-trim checks pass. The inferred apertures do not establish the production covering-power specification or the full patent aberration-plot extent.

The surface-by-surface Petzval sum, computed as `φ/(n·n′)` at every refracting surface, is **+9.41699×10⁻⁵ mm⁻¹** on the implemented 75 mm scale. This value is reported as a first-order property of the model; it is not used by itself to claim a measured flat-field performance level.

## Sources and References

1. Japan Patent Office, **JPS5357028A / 昭53-57028**, *広角レンズ* (Wide angle lens), published 1978-05-24. Prescription: PDF p. 3 / printed p. 173; construction: pp. 1–4 / printed pp. 171–174; Example 1 aberration plots: PDF p. 5 / printed p. 175.
2. Ikuo Mori, **US 4,176,915 A**, *Wide angle lens*, same patent family; English-language reference for the condition explanations and terminology: https://patents.google.com/patent/US4176915A/en
3. Nikon Corporation, **NIKKOR — The Thousand and One Nights No. 1**, discussion of the Wakimoto-type symmetrical wide-angle lineage and identification of the Nikkor-SW 75mm f/4.5 within that family: https://imaging.nikon.com/imaging/information/story/0001/
4. Nikon Corporation, **Nikon Large Format Lenses**, SW-series specification table, p. 3 of the hosted scan: https://mr-alvandi.com/downloads/large-format/nikon-large-format-lenses.pdf
5. Authoritative glass-catalog sources consulted for coordinate matching: OHARA (https://www.ohara-inc.co.jp/en/product/catalog/), HOYA (https://www.hoya-opticalworld.com/english/datadownload/index.html), SCHOTT (https://www.schott.com/en-us/products/optical-glass-p1000267/downloads), HIKARI (https://www.hikari-g.co.jp/optical_glass/catalog/), CDGM (https://www.cdgmgd.com/database/toWebDatabase.htm?url=database), and SUMITA (https://www.sumita-opt.co.jp/en/download/).


## Integration Review — 2026-09-13 UTC

JP_S5357028_A.pdf p. 4, Fig. 1 was inspected at 600 dpi after clockwise rotation (crop 0.13,0.21,0.43,0.47; page-axis 0.345), giving 42.75 μm/pixel at the authored scale. Ray overlays and stepped mechanical blanks were excluded.

| Surfaces | Previous SDs (mm) | Refined SDs (mm) |
|---|---|---|
| 3 / 4 | 20.0 / 18.5 | 16.0 / 10.2 |
| 5 / 6 | 12.0 / 11.5 | 10.2 / 10.2 |
| 7 / 8 | 10.5 / 10.5 | 9.0 / 9.0 |

The image-circle floor warns about surfaces 10/11, but explicitly flags this ultra-wide exit-pupil proxy as unreliable. Exact chief-ray solves pass the complete refracting stack at 28.385°, 40°, and the 4×5 diagonal angle 47.308°; the 52° sample clips at surface 10. At 47.308°, the rear optical hit heights are 14.193 and 16.805 mm, inside the retained 15/20 mm rims. No claim of full-pupil corner illumination follows from these chief-ray checks.

BAFD3 and TAC4 supply closely compatible spectral proxies for L3A and L4 (respectively Δnd ≈ 0, Δνd = +0.16; Δnd = +0.0005, Δνd = +0.05). Coverage rises from 2/7 to 4/7. The three other unmatched coordinates are retained without asserting a modern glass family or supplier. The Nikkor-SW display name is retained.

The optical prescriptions, stop calibration, and source focus/zoom states are preserved. Surface validation, image-circle screening, and the shared render-diagnostics corpus were run during integration. Catalog proxies preserve patent nd/νd and do not identify the historical supplier, melt, or anomalous partial dispersion.
