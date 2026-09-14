# KONICA ZOOM-HEXANON AR 65–135mm f/4

## Patent Reference and Design Identification

**Patent:** JPS58-149014A
**Application Number:** 昭57-30550
**Filed:** 1982-03-01
**Published:** 1983-09-05
**Inventors:** Norikazu Arai; Hiroshi Miyamae; Shozo Ishiyama; Makoto Sakano; Tadashi Kojima
**Applicant:** Konishiroku Photo Industry Co., Ltd.
**Title:** ３レンズ群の１体移動によるズームレンズのフォーカシング方式 — focusing method for a zoom lens by integral movement of three lens groups
**Embodiment analyzed:** Example 3

Example 3 is the selected prescription for the KONICA ZOOM-HEXANON AR 65–135mm f/4. The patent describes a four-or-more-group zoom in which the three object-side functional groups can be translated together for focusing. Its Example 3 is explicitly a 65–135 mm class design with positive, negative, positive, positive functional-group powers.

The production correlation rests on converging, but distinct, evidence. Konica's own Hexanon sales literature lists a 65–135mm f/4 Auto lens with 13 elements in 9 groups, a 36°–18° viewing-angle range, 5 ft minimum focus, f/4–16 aperture range, and 55 mm filter thread. The patent prescription independently decomposes into 13 glass elements in 9 air-separated physical groups and covers 66.288–135.090 mm in its published numerical states. The manufacturer literature does not identify JPS58-149014A; the correlation is therefore a source-supported identification, not a claim of manufacturer confirmation of the patent relationship.

The chronology is important. The manufacturer brochure is marked `152K772` and `Copyright © Konica Camera Company, 1972` on its final page, whereas this patent application was filed in 1982 and published in 1983. JPS58-149014A is accordingly treated as a later focusing-method disclosure employing a formula correlated with the earlier production lens, not as the product's origin patent.

No dimensional scaling is applied. The production focal-length designation remains 65–135mm, while the final optical model computes 66.290292–135.094726 mm at infinity from the patent prescription. The marketed maximum aperture remains f/4; the modeled wide-open f-numbers are separately determined from the inferred stop model described below.

Two visually ambiguous source readings were adjudicated from the rendered patent tables before data construction: Table 7 telephoto `d8` is 3.102 mm, and Table 8 at `f = 128.601 mm`, `U = 1500 mm` is 19.680 mm. These are transcription resolutions of the printed source, not corrections to the patent. Example 3 contains no aspheres, no cover plate or filter plate, and no inactive dummy or flare-cutter plane requiring omission or air-equivalent rear-spacing compensation.

## Optical Architecture

The prescription contains 13 elements in 9 physical groups. The patent's four labeled groups are functional zoom groups rather than the physical air-separated group count:

| Functional group | Physical content | Verified paraxial sign | Group focal length |
|---|---|---:|---:|
| G1 | D1 = L1 + L2 | Positive | +121.340 mm |
| G2 | L3 + D2 (L4 + L5) | Negative | −39.397 mm |
| G3 | L6 + D3 (L7 + L8) | Positive | +50.034 mm |
| G4 | L9 + L10 + L11 + D4 (L12 + L13) | Positive | +308.317 mm |

These group focal lengths are paraxial in-group values calculated with the actual internal media and spacings. They are not the same quantities as the standalone element focal lengths listed in the data file. Likewise, the cemented-pair powers retain their shared glass interfaces rather than treating each element as an isolated lens in air.

The zoom motion is controlled by the patent's three variable inter-group spacings `d3`, `d8`, and `d13`, together with the published BFD. Across the three infinity states, `d3 + d8` remains exactly 29.150 mm. That invariant is consistent with the patent's coupling of the first and third functional groups during zooming. From wide to tele, `d3` increases from 3.576 to 26.048 mm while `d8` decreases from 25.574 to 3.102 mm; the rear separation `d13` increases from 5.000 to 27.472 mm. The published BFD changes only from 71.139 to 70.888 mm.

The aperture stop is not tabulated by the patent. The final model therefore inserts exactly one inferred `STO` plane 1.500 mm objectward of source surface 14, splitting the published `d13` air space without changing its total axial length. The physical stop semi-diameter is 10.6006209 mm. Exact spherical calibration of that fixed stop gives modeled infinity f-numbers of f/4.00332, f/3.99931, and f/3.99737 at the wide, middle, and tele stations. Because this is a constant-aperture zoom, the data file stores scalar `nominalFno = 4`; the three per-station values are diagnostics from the inferred fixed stop, not schema inputs. This stop placement and diameter are modeling inferences, not patent facts.

The patent also gives no clear-aperture diameters or image height. All surface semi-diameters in the data model are therefore inferred from the modeled f/4 pupil, the 135-format diagonal field, exact spherical marginal/chief-ray envelopes, the Figure 3 silhouette, and the current edge-thickness, rim-slope, shared-gap, containment, and render-trim constraints. They should not be read as published mechanical dimensions.

## Element-by-Element Analysis

The focal lengths given below are standalone thick-element values in air, recomputed from each element's two radii, center thickness, and d-line index. For cemented pairs, the paragraph following the element lines states the separate cemented net power. Neither quantity by itself is the same as the element's contribution inside the complete zoom system.

### D1 — L1 + L2, cemented front positive group

**L1 — Negative Meniscus.** `nd = 1.74077`, `νd = 27.8`. Glass: `E-FD13 coefficient proxy (patent 741278; production supplier unspecified)`. Standalone `f = −96.734 mm`.

**L2 — Biconvex Positive.** `nd = 1.67003`, `νd = 47.3`. Glass: `S-BAH10 coefficient proxy (patent 670473; production supplier unspecified)`. Standalone `f = +53.606 mm`.

L1 and L2 form the first cemented pair. Although the isolated L1 member is negative, the cemented D1 combination is net positive, with a verified paraxial focal length of +121.340 mm. D1 is also the entirety of functional group G1. The difference between the two Abbe numbers is consistent with ordinary first-order chromatic balancing within a cemented pair, but the patent supplies no line-index or partial-dispersion data from which to make a more specific secondary-spectrum claim.

### L3 — Biconcave negative singlet

**L3 — Biconcave Negative.** `nd = 1.62041`, `νd = 60.3`. Glass: `J-SK16 coefficient proxy (patent 620603; production supplier unspecified)`. Standalone `f = −78.562 mm`.

L3 is the first physical component of the negative second functional group. It is separated by air from the following cemented pair, so its standalone negative power and its in-situ contribution are distinct. Together with D2, it produces the substantially stronger negative group power of G2, whose verified paraxial focal length is −39.397 mm.

### D2 — L4 + L5, cemented negative pair in G2

**L4 — Biconcave Negative.** `nd = 1.73500`, `νd = 49.8`. Glass: `TAC4 coefficient proxy (patent 735498; production supplier unspecified)`. Standalone `f = −29.916 mm`.

**L5 — Positive Meniscus.** `nd = 1.78472`, `νd = 25.7`. Glass: `H-ZF13 coefficient proxy (patent 785257; production supplier unspecified)`. Standalone `f = +47.154 mm`.

The L4/L5 cemented pair remains net negative despite the positive standalone power of L5; its verified cemented focal length is −82.379 mm. In the complete G2 assembly, the air-spaced L3 singlet and this cemented pair combine to the stronger net negative group cited above. The unusually low `νd` of L5 is a source fact, but no anomalous partial-dispersion behavior is inferred from that Abbe value alone.

### L6 — Biconvex positive singlet

**L6 — Biconvex Positive.** `nd = 1.62041`, `νd = 60.3`. Glass: `J-SK16 coefficient proxy (patent 620603; production supplier unspecified)`. Standalone `f = +100.320 mm`.

L6 leads functional group G3. It is air-spaced from D3 and provides positive standalone power before the cemented rear pair. The complete G3 assembly is net positive with a verified paraxial focal length of +50.034 mm.

### D3 — L7 + L8, cemented positive pair in G3

**L7 — Negative Meniscus.** `nd = 1.78472`, `νd = 25.7`. Glass: `H-ZF13 coefficient proxy (patent 785257; production supplier unspecified)`. Standalone `f = −75.056 mm`.

**L8 — Biconvex Positive.** `nd = 1.62041`, `νd = 60.3`. Glass: `J-SK16 coefficient proxy (patent 620603; production supplier unspecified)`. Standalone `f = +42.554 mm`.

D3 reverses the sign pattern of D2: its negative low-Abbe member is followed by a positive higher-Abbe member, and the cemented pair is net positive with `f = +98.171 mm`. Together with L6, it completes the positive third functional group. The pair's first-order power and dispersion contrast are directly supportable; more specific chromatic-performance claims would require spectral information absent from the patent.

### L9 — Biconcave negative singlet

**L9 — Biconcave Negative.** `nd = 1.53996`, `νd = 59.5`. Glass: `S-BAL12 coefficient proxy (patent 540595; production supplier unspecified)`. Standalone `f = −88.818 mm`.

L9 is the first element of the rear master group G4. Its standalone negative power is embedded within a rear group that is weakly positive overall, illustrating why isolated-element focal length should not be equated with in-situ group behavior.

### L10 — Plano-convex positive singlet

**L10 — Plano-Convex Positive.** `nd = 1.72342`, `νd = 38.0`. Glass: `S-BAH28 coefficient proxy (patent 723380; production supplier unspecified)`. Standalone `f = +53.338 mm`.

L10 follows L9 across a narrow air space and contributes positive power to the rear master group. Its rear surface is plane in the source prescription. That plane is a glass/air boundary, not the aperture stop; treating source surface 17 as an iris would be a source error.

### L11 — Biconcave negative singlet

**L11 — Biconcave Negative.** `nd = 1.63636`, `νd = 35.4`. Glass: `S-TIM6 coefficient proxy (patent 636354; production supplier unspecified)`. Standalone `f = −37.934 mm`.

L11 is another negative component within G4. The rear master group therefore alternates positive and negative standalone contributions rather than behaving as a single weak positive lens. Its net group power is the result of all four physical components and their air spaces.

### D4 — L12 + L13, final cemented positive pair

**L12 — Negative Meniscus.** `nd = 1.55671`, `νd = 58.7`. Glass: `BAL15Y coefficient proxy (patent 557587; production supplier unspecified)`. Standalone `f = −44.298 mm`.

**L13 — Biconvex Positive.** `nd = 1.65160`, `νd = 58.6`. Glass: `J-LAK7R coefficient proxy (patent 652586; production supplier unspecified)`. Standalone `f = +24.975 mm`.

The final cemented pair is net positive with a verified cemented focal length of +53.321 mm. L12 and L13 have nearly equal Abbe numbers, so their pairing should not be described as an anomalous-dispersion or apochromatic correction mechanism. Combined with L9–L11 and the intervening spaces, D4 contributes to the weak positive G4 master-group power of +308.317 mm.

## Glass Identification / Selection

The patent specifies d-line `nd` and `νd` coordinates but names no glass supplier. Current catalogs from OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA provide compatible coefficient curves for every element. OHARA BAL15Y exactly reproduces the patent's `557587` coordinate and supplies L12's spectral proxy, but the annotation leaves the production supplier unspecified. No proxy line-index or partial-dispersion fields are copied into the patent data.

| Optical class | `nd` | `νd` | Used in | Data disposition |
|---|---:|---:|---|---|
| E-FD13 proxy (741278) | 1.74077 | 27.8 | L1 | Supplier-neutral coefficient proxy |
| S-BAH10 proxy (670473) | 1.67003 | 47.3 | L2 | Supplier-neutral coefficient proxy |
| J-SK16 proxy (620603) | 1.62041 | 60.3 | L3, L6, L8 | Supplier-neutral coefficient proxy |
| TAC4 proxy (735498) | 1.73500 | 49.8 | L4 | Qualified coordinate-compatible proxy |
| H-ZF13 proxy (785257) | 1.78472 | 25.7 | L5, L7 | Supplier-neutral coefficient proxy |
| S-BAL12 proxy (540595) | 1.53996 | 59.5 | L9 | Supplier-neutral coefficient proxy |
| S-BAH28 proxy (723380) | 1.72342 | 38.0 | L10 | Supplier-neutral coefficient proxy |
| S-TIM6 proxy (636354) | 1.63636 | 35.4 | L11 | Supplier-neutral coefficient proxy |
| BAL15Y proxy (557587) | 1.55671 | 58.7 | L12 | Supplier-neutral coefficient proxy |
| J-LAK7R proxy (652586) | 1.65160 | 58.6 | L13 | Supplier-neutral coefficient proxy |

The prescription contains useful contrasts in ordinary Abbe number, especially within D1, D2, and D3, but the patent does not publish `nC`, `nF`, `ng`, or `dPgF`. Those fields are intentionally absent from the data model. Consequently, the analysis does not attribute anomalous partial dispersion or apochromatic behavior to any element.

## Focus Mechanism

The focus status is **PUBLISHED**. The patent states that the first three functional groups are translated together toward the object for focusing, while the rear master group remains fixed. In the sequential data model, this common forward translation is represented by increasing only the pre-stop portion of the source `d13` space; the inferred stop, G4, and BFD remain fixed during focus.

Patent Table 8 gives focus travel as a function of object-to-image distance `U`, not front-vertex object distance. At `U = 1500 mm`, the published wide and tele movements are 4.694 mm and 22.040 mm. Direct paraxial conjugate solves from the final prescription give 4.698795 mm and 22.045760 mm respectively, both within the patent's stated 0.07 mm approximation accuracy. The data file intentionally retains the published endpoint movements rather than replacing them with the solved values.

Table 8 has no row exactly at the modeled middle zoom station of 92.433 mm. The middle close-focus state therefore evaluates the published mechanism in code, giving a common forward shift of 9.458720 mm at `U = 1500 mm`. This is an evaluation of a published mechanism, not a constrained reconstruction of an otherwise unpublished focus system.

Konica's sales literature gives a marketed minimum focus of 5 ft, approximately 1.5 m. The data file retains `closeFocusM = 1.5` as the product specification while explicitly keeping the patent's `U` reference plane distinct. Numerical equality of the two distances is not treated as evidence that the catalog and patent measure from the same plane.

## Verification Summary

Independent reduced-angle sequential tracing and a separate ABCD calculation reproduce the three published infinity states from the final data arrays:

| State | Patent focal length | Computed EFL | Patent BFD | Computed BFD | Modeled f-number |
|---|---:|---:|---:|---:|---:|
| Wide | 66.288 mm | 66.290292 mm | 71.139 mm | 71.142704 mm | 4.00332 |
| Middle | 92.433 mm | 92.436510 mm | 71.031 mm | 71.034680 mm | 3.99931 |
| Tele | 135.090 mm | 135.094726 mm | 70.888 mm | 70.891773 mm | 3.99737 |

The largest focal-length residual is 0.004726 mm and the largest BFD residual is 0.003773 mm, consistent with the rounded source prescription. The surface-by-surface Petzval sum, using `φ/(n·n′)`, is `+0.001637570137 mm⁻¹`, corresponding to a signed image Petzval radius of `−610.661 mm` under the project convention.

The inferred semi-diameters satisfy the current modeled geometry checks for element edge thickness, actual spherical rim slope, shared-band cross-gap clearance, and the required off-axis chief-ray containment across all six authored zoom/focus states. Outer-pupil stress rays vignette at some middle-close and tele configurations; the clear apertures are not enlarged beyond the geometry constraints merely to suppress that modeled vignetting.

## Design Heritage and Context

The optical prescription and the focusing patent belong to different chronological layers of the product history. Konica literature already lists the 65–135mm f/4 Auto with the same 13-element/9-group specification in brochure 152K772, copyrighted 1972. A decade later, JPS58-149014A addresses a focusing method for zoom lenses and uses Example 3 as a 65–135 mm worked design.

That chronology explains the analytical treatment adopted here. The production lens identity, Konica AR mount, 135-format use, marketed 65–135mm range, f/4 aperture, 36°–18° viewing angle, 5 ft minimum focus, and 55 mm filter specification come from manufacturer literature. The exact radii, thicknesses, indices, Abbe numbers, zoom spacings, and published focus movements come from Example 3. The stop position, stop diameter, and all semi-diameters are later modeling inferences required to render and trace a complete LensVisualizer model.

No aspheric coefficient transformation is applicable because the design is entirely spherical, and no dimensional scale factor is applied. No cover glass, filter, inactive dummy plane, or mechanical part is represented in the sequential optical model.

## Sources / References

1. **JPS58-149014A**, `３レンズ群の１体移動によるズームレンズのフォーカシング方式`, Example 3. Patent front page; Table 7 prescription and zoom spacings; Table 8 focus movement; Table 9 coordinate transform; Figure 3 optical section.
2. **Konica, “Konica Hexanon Lenses for Autoreflex Cameras.”** Manufacturer sales literature. The 65–135mm f/4 Auto entry gives 9 groups / 13 elements, 36°–18° viewing angle, 5 ft minimum focus, f/4–16 aperture, and 55 mm filter: https://www.pacificrimcamera.com/rl/01702/01702.pdf
3. **Pacific Rim Camera Reference Library, Konica bibliography.** Lists “Konica SLR Lens Sales Brochure 152K772, 1972”: https://www.pacificrimcamera.com/rl/rlKonicaMisc.htm
4. **OHARA optical-glass catalog and data resources:** https://oharacorp.com/optical-glass/catalog-data-notes/
5. **HOYA optical-glass data and cross-reference resources:** https://www.hoya-opticalworld.com/english/datadownload/index.html and https://www.hoyaoptics.eu/glass-cross-reference-index
6. **SCHOTT optical-glass catalog resources:** https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
7. **HIKARI / Nikon optical-glass catalog:** https://www.nikon.com/business/components/lineup/materials/optical-glass/
8. **CDGM optical-glass database:** https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. **SUMITA optical-glass resources:** https://www.sumita-opt.co.jp/en/download/
