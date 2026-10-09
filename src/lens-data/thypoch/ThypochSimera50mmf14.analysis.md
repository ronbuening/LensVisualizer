## Patent Reference and Design Identification

**Patent:** CN118244463A  
**Application Number:** 202410671232.3  
**Filed:** 2024-05-28  
**Published:** 2024-06-25  
**Inventors:** Kuang Jian (邝健), Ouyang Xia (欧阳霞), Ye Bo (叶波), Li Zenghui (李增辉), Liu Xiaojuan (刘晓娟)  
**Applicant:** Shenzhen Dongzheng Optical Technology Co., Ltd. (深圳市东正光学技术股份有限公司)  
**Title:** 一种光学镜头及摄像头模组 (An optical lens and camera module; translated title)  
**Embodiment analyzed:** Example 1, Tables 1a–1g and Figures 1–8.

The companion prescription transcribes the application publication, without optical scaling or source-value optimization. Its association with the THYPOCH SIMERA 50mm f/1.4 is supported by the manufacturer's optical section and focus arrangement; it is not confirmation that the production prescription is numerically identical.

1. Both sections have eight powered elements in six air-separated components, with L2/L3 and L5/L6 cemented.
2. The ED element occupies L2, the double-sided aspheric element occupies L4 immediately behind the stop, and the final pair is negative L7 followed by positive L8.
3. The manufacturer's moving-front-assembly illustration agrees with patent G1 comprising the first six elements and stop, while L7/L8 form fixed rear G2.
4. The marketed 50mm f/1.4 full-frame lens, 43.2mm image circle and 0.45m sensor-plane minimum distance are broadly consistent with the selected normal-lens geometry. These marketed numbers do not replace the patent's F1.45, half-field 22.69° or first-surface object distance of 0.37m. The official product specifications list Leica M and Nikon Z mounts and 14 aperture blades.

The later grant, CN118244463B, published 2024-09-24, retains the Example 1 surface, focus-gap and asphere tables but revises several optical summaries. In particular, A prints f = 51.93mm and B prints 51.76mm. Direct calculation from their common surface table gives 51.763365mm. This analysis keeps A's published values and records the discrepancy; it does not construct a hybrid A/B prescription.

The model is a qualified reconstruction of the printed numerical example. Substantial exact-ray differences from the patent's aberration plots remain, and inferred apertures are not manufacturing measurements. Those limitations are quantified below.

## Optical Architecture

The design has two net-positive functional groups. Moving G1 consists of L1–L6 and the aperture stop; fixed G2 is the separated L7/L8 rear pair. This division concerns focusing mechanics, whereas the six-component count concerns air-separated optical bodies.

| Functional block | Elements / source surfaces | Calculated standalone group focal length | A publication summary |
|---|---|---:|---:|
| G1 | L1–L6, surfaces 1–11 including STOP | +55.040177mm | +55.52mm |
| G1A | L1–L3, surfaces 1–5 | +129.056448mm | +133.36mm |
| G1B | L4–L6, surfaces 7–11 | +50.306411mm | +50.17mm |
| G2 | L7–L8, surfaces 12–15 | +287.177460mm | +275.22mm |

G1A has relatively weak net positive power because the positive first meniscus precedes a net-negative cemented pair. G1B is more strongly positive, combining the aspheric meniscus with a net-positive cemented pair. G2 has weak net positive power from a negative/positive combination. These calculated power balances describe the transcribed surfaces; assigning individual aberration-control effects beyond the patent's statements is an optical interpretation.

The source includes a separate 0.85mm protective plate, CG, at surfaces 16/17, followed by 0.50mm of air to IMAGE. It is traced as a rear plate and excluded from the eight powered-element count. The last powered surface retains 25.55mm of physical air before CG. Their sum is the published physical rear distance of 26.90mm. This is distinct from the model's infinity Gaussian back focal distance of 26.642661mm, measured from the last powered lens vertex and including the plate.

## Element-by-Element Analysis

The source prints refractive indices to **two decimal places**. The following values preserve that precision. `Unmatched` denotes the data file's unmatched native-coordinate class, not a named commercial glass; zero-padding inside its machine-readable labels is formatting only. Element focal lengths below are isolated thick-element values in air, not powers to be added directly across cemented interfaces.

### L1 — Positive meniscus, convex toward the object

nd = 1.95, νd = 32.28. Glass: Unmatched, high-index class; supplier unknown. f = +51.91 mm.

L1 supplies substantial positive power before the first cemented pair. Its high index is consistent with obtaining that power from a meniscus form, while its relatively low Abbe number contributes significant dispersion. Neither the source's rounded coordinate nor the product's high-index count establishes a catalog identity. The net G1A power must be evaluated together with L2/L3 and their spacing.

### L2 — Positive meniscus, ED member of D1

nd = 1.50, νd = 81.60. Glass: Unmatched, low-dispersion crown class; supplier unknown. f = +47.32 mm.

The patent explicitly identifies L2 as the high-Abbe element in Example 1, and the manufacturer's optical section marks the corresponding position as ED. Its positive power is paired with the much more dispersive negative L3. This is an achromatizing arrangement in first-order terms; native nd/νd alone cannot establish secondary-spectrum or apochromatic performance. See Table 1a and the discussion following Table 1c.

### L3 — Negative meniscus, dispersive member of D1

nd = 1.85, νd = 25.15. Glass: Unmatched, dense-flint class; supplier unknown. f = -21.18 mm.

L3 shares source surface 4 with L2 and ends at the strongly curved surface 5 ahead of the stop. The complete cemented pair has calculated focal length -52.091288mm, despite its positive first member. Its dispersion contrast with L2 permits chromatic balancing, but the rounded source table and fallback dispersion do not reproduce a measured glass melt.

### L4 — Positive meniscus with two aspherical faces

nd = 1.77, νd = 49.24. Glass: Unmatched, moderate-dispersion high-index class; supplier unknown. f = +140.24 mm.

L4 sits directly behind the stop and carries source aspheres 7 and 8, labeled 7A/8A in the model. Its paraxial power is modest relative to the adjacent cemented pair, while the two polynomial faces provide additional control of ray bending away from the axis. The patent identifies these faces as a means of reducing aberrations, particularly spherical aberration (¶0063). That statement is a source design intent; the transcribed model's residual spherical aberration is reported separately.

### L5 — Biconcave negative, front member of D2

nd = 1.60, νd = 38.01. Glass: Unmatched, flint class; supplier unknown. f = -22.78 mm.

L5 introduces negative power immediately before the strong positive L6. Their shared source surface 10 is a cemented boundary, not an additional diaphragm. In the inferred finite-body model, some oblique rays leave the shared outer envelope before that interface; this is treated as conditional body-edge vignetting rather than evidence for an internal iris.

### L6 — Biconvex positive, rear member of D2

nd = 1.88, νd = 39.22. Glass: Unmatched, high-index class; supplier unknown. f = +19.07 mm.

L6 contributes the strongest isolated positive power in the train. D2 as a whole is net positive, with calculated focal length +73.383964mm. Its two members have similar Abbe numbers, so their role should not be described as a conventional wide-Abbe crown/flint achromat solely from their opposite powers. Their bending, index contrast and location within G1B provide additional aberration-balancing variables.

### L7 — Biconcave negative, front member of fixed G2

nd = 1.65, νd = 33.89. Glass: Unmatched, flint class; supplier unknown. f = -50.68 mm.

L7 is separated from moving L6 by D11. Its negative power precedes L8's positive power, giving the fixed rear assembly a comparatively weak net result. Its negative surface-power/Petzval contributions oppose those of the following positive element. This does not, by itself, prove a flat field or successful correction at the image edge.

### L8 — Biconvex positive, final powered element

nd = 1.88, νd = 39.22. Glass: Unmatched, high-index class; supplier unknown. f = +44.66 mm.

L8 uses the same printed coordinate as L6. It supplies positive rear-group power and directs the beam through the explicit protective plate toward IMAGE. The source's negative-then-positive final pair is an important construction distinction from the alternative examples, whose rear ordering differs.

## Glass Identification

| Native nd / νd | Location | Supported description |
|---|---|---|
| 1.95 / 32.28 | L1 | High index, comparatively high dispersion |
| 1.50 / 81.60 | L2 | Patent-identified ED / high-Abbe member |
| 1.85 / 25.15 | L3 | Strongly dispersive negative partner |
| 1.77 / 49.24 | L4 | Moderate-dispersion aspheric glass coordinate |
| 1.60 / 38.01 | L5 | Negative flint-class member |
| 1.88 / 39.22 | L6, L8 | Shared high-index coordinate |
| 1.65 / 33.89 | L7 | Negative rear flint-class member |
| 1.52 / 64.20 | CG | Source protective-plate coordinate |

The author searched preserved HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM primary catalog data at every distinct source coordinate. No tight six-vendor match justified assigning an exact named glass to these rounded numbers. The evidence record retains candidate residuals and vendor distinctions; similarity after rounding is not identity.

The active labels deliberately use `Unmatched`, and every powered element and CG uses the runtime's Abbe-number dispersion approximation. No measured nC/nF/ng, anomalous partial dispersion, melt identity or supplier is supplied. Consequently, chromatic strategy can be discussed from powers and Abbe numbers, but secondary-spectrum and APO performance are not established.

## Focus Mechanism

G1, including the first six elements and stop, translates toward the object relative to fixed G2 and the image plane. D11, the air between source surfaces 11 and 12, increases by 9.32mm. The data use coordinates relative to the current first vertex; that coordinate choice must not be confused with the camera-fixed mechanical frame.

| Published state | D0: object to first surface | D11 | First vertex to IMAGE |
|---|---:|---:|---:|
| Infinity | Infinity | 0.39mm | 68.79mm |
| Near | 370mm | 9.71mm | 78.11mm |

The reference plane of D0 follows the object-row spacing in Table 1a and its identification in Table 1b/¶0060. The corresponding authored near object-to-image distance is 448.11mm, which is close to, but not substituted for, the manufacturer's 0.45m specification.

Using the rounded source media and retained image plane, the calculated Gaussian near conjugate is instead 355.750194mm from the first vertex, or 433.860194mm object-to-image. The published 370mm configuration remains authored, with its residual defocus. The source magnification summary is 0.16; the model's paraxial image-matrix factor is approximately -0.164069. No focus spacing or image plane is tuned to remove these differences.

Only the two gap states are published. Intermediate gaps are interpolation samples, not a measured cam law. The marketed lens is manually focused; no autofocus drive or stabilized group is inferred from this patent.

The physical iris radius, 11.109050316mm, is inferred by exact infinity F1.45 calibration and then held fixed. At the published near state, the inferred rims admit approximately 0.987387578 of its on-axis radius, corresponding to 0.974934229 geometric disc area. This is modeled near-focus vignetting, not photometric transmission or a certified finite-distance working f-number. The original 0.90 gap policy is retained throughout.

## Aspherical Surfaces

The source uses the standard conic-plus-even-polynomial sag equation,

$$z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+A_{14}h^{14}+A_{16}h^{16},\qquad c=1/R.$$

K is copied directly, and both source values are zero. Radii and sag use millimetres, so A_p has units mm^(1-p). Source surfaces 7/8 map to 7A/8A; every printed coefficient, including zero A14/A16, is retained.

| Coefficient | 7A | 8A |
|---|---:|---:|
| K | 0 | 0 |
| A4 | -7.31e-06 | -3.42e-08 |
| A6 | -5.17e-09 | -7.62e-09 |
| A8 | 3.21e-10 | 3.35e-10 |
| A10 | 5.91e-13 | 4.39e-13 |
| A12 | -1.47e-14 | -1.24e-14 |
| A14 | 0 | 0 |
| A16 | 0 | 0 |

At the model's inferred radii of 11.00mm and 10.95mm, the departures from their spherical bases are approximately -0.078181mm and +0.029646mm. Under the stated axis convention these are respectively objectward and imageward departures. They describe the chosen modeled apertures, not published clear diameters. The combined polynomial profile, not the sign of A4 alone, determines the local slope. No molding, polishing or hybrid-resin manufacturing process is established by these tables.

## Conditional Expressions

The model preserves every printed interval and summary. Using the calculated EFL with the source's M = 0.16, physical BFL = 26.90mm and H = 21.60mm gives S/(f M BFL/H) ≈ 0.903597, satisfying S ≤ f M BFL/H. The model also gives TTL/f ≈ 1.328932, fG1/f ≈ 1.063304 and fG1A/fG1 ≈ 2.344768, within the stated intervals 1–1.5, 0.85–1.20 and 2.05–2.65. L2 meets the source's νd ≥ 81.6 condition.

The A summary ratios and some group focal lengths do not exactly reproduce from its surface table. The later B summary is closer to the direct calculation, but the source disagreement remains recorded rather than silently repaired.

## Verification Scope and Source-Model Limitations

The native source-table EFL is 51.763365mm. It is distinct from the printed A summary 51.93mm, the B summary 51.76mm and marketed 50mm. Likewise, the physical rear distance 26.90mm is distinct from the Gaussian BFD 26.642661mm.

More substantially, unvignetted source-surface diagnostic traces through the fixed iris give final outgoing-ray axis-intercept residuals of **-1.310996mm at infinity and -2.083606mm at the published near state**, relative to the authored image plane. Marginal-minus-paraxial longitudinal differences are approximately -1.053658mm and -1.716111mm. At the near state, the full-iris diagnostic ray lies outside the inferred 8A rim; these diagnostics are separate from transmission through the clipped finite-body model. These do not reproduce the source's plotted aberration behavior. The original two-decimal index precision and unknown spectra remain limitations, but rounding has not been proved to explain the entire discrepancy. No prescription adjustment is made to force a match.

A qualified finite test uses **71,720 explicit physical entrance-cap launches** across 40 field/focus groups. Raw native outcomes remain 38,081 OK, 28,315 clipped and 5,324 failed. Independent geometry/refraction calculations classify the failed launches as 1,506 finite-cap misses in air and 3,818 total-internal-reflection cases with no transmitted branch. These physical dispositions are separate from the engine's unchanged failed statuses.

The earlier custom inverse grid retains **140 unsupported stop targets**. They are not counted as successful rays or globally proved inaccessible. The explicit forward sample supplies the bounded containment evidence; it does not certify an entire continuous pupil/field domain, stray light, throughput, MTF or manufacturing tolerances.

Actual construction/validation and sampled rendering checks pass with zero trim. Source and intermediate states satisfy the retained geometric policies. Straight-edge finite-body interpretations are supported qualitatively by the drawings, while their absolute radii, edge treatment and production tolerances remain inferred or unknown. Repository-wide integration checks remain separate from this per-lens package.

## Sources

- [CN118244463A original application publication](https://patents.google.com/patent/CN118244463A/en): cover; Example 1 Tables 1a–1g, PDF pages 7–10; Figures 1–8, PDF pages 18–22.
- [CN118244463B grant](https://patents.google.com/patent/CN118244463B/en): same-application comparison, Tables 1a–1e on PDF pages 8–10; A remains controlling.
- [Thypoch Simera 50mm official product page](https://thypoch.com/en/simera/50mm): marketed construction, mounts, aperture, image circle and minimum-focus specification.
- [Manufacturer optical-section image](https://framerusercontent.com/images/yklnt80Xzxrox5YhgZqtKRyVYhg.webp?width=2400&height=962): element order, ED/asphere positions and moving-front-assembly correlation.

The evidence dossier preserves exact original-file hashes, the complete six-vendor catalog-search record, current runtime-reference identities, earlier held checkpoints and independent source/numerical reviews. Those records distinguish source assertions, calculated quantities and inferred model geometry.
