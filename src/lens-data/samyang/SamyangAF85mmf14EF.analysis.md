# SAMYANG AF 85mm f/1.4 EF / F

## Patent Reference and Design Identification

**Patent:** KR 10-2213072 B1
**Filed:** 2019-05-09
**Granted:** 2021-02-01
**Published:** 2021-02-08
**Inventors:** Jae Myung Ryu, Hae Jin Lee, Jeong Du Lee
**Assignee:** Samyang Optics Co., Ltd.
**Example details:** Tables 4–6, Figure 3

Example 2 is modeled at original scale with both printed focus states. The earlier publication is KR20200129711A. The EF / F association rests on:

1. Samyang's EF and F specifications describe nine glass elements in seven groups and one hybrid asphere. Their shared construction diagram supports the rear cemented doublets and hybrid layer on L82; it does not mark the iris.
2. Both full-frame versions have a stated 0.9 m minimum focus distance and an f/1.4–16 aperture range. The patent model is close in focal length and aperture, but its printed near-focus distances differ from that marketing value, as explained below.
3. Example 2 fits the hybrid construction better than the ED-containing Example 3, supporting a design-family association rather than exact factory identity. The EF product's reported 2018 release and the Nikon F version's 11 April 2019 announcement both precede the patent's filing.

This is distinct from the AF 85mm f/1.4 FE already in the catalog. That model has eleven elements in eight groups and uses Example 3 of WO 2021/085655 A1, with an all-spherical construction. The EF / F association uses the KR family; the FE source belongs to a different WO family. The shared focal-length and aperture labels do not establish prescription identity.

## Optical Architecture

The design has nine glass elements in seven air-spaced groups, excluding the thin hybrid layer and camera-side filter. The patent's G12 contains L12–L42, G22 contains the negative focusing element L52, and G32 contains the L62–L72 and L82–L92 cemented doublets, with the stop immediately before it. The hybrid layer is on L82. The final digit 2 identifies Example 2, rather than a second member within an element. H is a display alias for the unnumbered hybrid layer; OD identifies the camera-side optical filter. These component and motion descriptions follow the transcribed surfaces and variable gaps; detailed aberration roles below are optical interpretations of that layout.

All twenty source optical, stop and filter rows are retained without rescaling or index fitting. The calculated EFL is 84.548650747 mm at f/1.479, rather than the marketed f/1.4. Table 6 gives 84.499585 mm, whereas Table 10 gives 84.548355 mm and the prose gives 84.54 mm. These source differences remain unresolved.

The camera-side filter is a physical 2.5 mm plate. The image plane follows D4 after the plate. The printed D5 row follows Image and is retained only as source metadata; it is not propagated as an incoming image spacing. Its purpose remains unresolved.

## Element-by-Element Analysis

The following glass values are published nd/νd pairs. Hoya catalog equivalents supply spectral proxies at the printed indices; production glasses and suppliers remain unconfirmed. The inspector's individual focal lengths are calculated for each isolated thick element in air at the d line, rather than specified by the patent. They describe neither the power of a cemented assembly nor an element immersed between its actual neighbours. The plane-parallel filter has no finite isolated focal length. Shapes and qualitative power roles are inferred from the curvatures, rather than presented as separate patent claims.

### L12 — Positive meniscus, convex to object

nd = 1.7725, νd = 49.62. Glass: TAF1 (Hoya) catalog equivalent.

L12 opens the front collecting section. Its positive meniscus form contributes convergence before the remaining front elements.

### L22 — Positive meniscus, convex to object

nd = 1.7433, νd = 49.22. Glass: NBF1 (Hoya) catalog equivalent.

L22 supplies another positive contribution in the front section. It is separated from L12 and L32 by air gaps.

### L32 — Negative meniscus

nd = 1.72825, νd = 28.32. Glass: E-FD10 (Hoya) catalog equivalent.

L32 introduces negative power between the front positive elements. Its lower Abbe number provides dispersion contrast with the surrounding glasses, although the available data do not establish a specific partial-dispersion correction.

### L42 — Positive meniscus, convex to object

nd = 1.7725, νd = 49.62. Glass: TAF1 (Hoya) catalog equivalent.

L42 closes the front section before the variable gap D1. Its square 20.2 mm rim follows Figure 3 subject to the near-state axial ray clearance; it is not a published mechanical dimension.

### L52 — Negative meniscus focusing element

nd = 1.8061, νd = 33.27. Glass: NBFD15 (Hoya) catalog equivalent.

L52 lies between D1 and D2. Their opposing changes describe its movement toward the image side for close focus, with the stop behind it.

### L62 + L72 — Rear cemented doublet

L62: nd = 1.54814, νd = 45.82. Glass: E-FEL1 (Hoya) catalog equivalent.

L72: nd = 1.7859, νd = 43.93. Glass: NBFD11 (Hoya) catalog equivalent.

The biconcave L62 and biconvex L72 share the interface at surface 13. Their opposite power contributions and refractive-index contrast provide rear-group correction freedom; their similar Abbe numbers alone do not prove an achromatic pairing.

### Hybrid layer + L82 + L92 — Aspherical rear cemented group

Hybrid layer: nd = 1.517, νd = 52. Material: Unmatched resin; approximate dispersion.

L82: nd = 1.7725, νd = 49.62. Glass: TAF1 (Hoya) catalog equivalent.

L92: nd = 1.64769, νd = 33.84. Glass: E-FD2 (Hoya) catalog equivalent.

The 0.130 mm hybrid layer precedes the positive L82 substrate. Its exposed surface 15 is aspherical. L82 and the negative meniscus L92 share surface 17, forming the last glass doublet. The layer is modeled separately to preserve the source thickness and index; it does not increase the maker's nine-glass-element count. The prescription does not establish the layer's chemistry or supplier.

### Camera-side filter — Plane-parallel plate

nd = 1.5168, νd = 64.2. Glass: BSC7 (Hoya) catalog equivalent.

Surfaces 19–20 represent the published filter. Its thickness and the physical gaps on either side remain explicit; the plate is excluded from the production lens's element/group count.

## Glass Identification and Selection

| Location      |      nd |    νd | Catalog spectral proxy |
| ------------- | ------: | ----: | ---------------------- |
| L12, L42, L82 |  1.7725 | 49.62 | TAF1 (Hoya)            |
| L22           |  1.7433 | 49.22 | NBF1 (Hoya)            |
| L32           | 1.72825 | 28.32 | E-FD10 (Hoya)          |
| L52           |  1.8061 | 33.27 | NBFD15 (Hoya)          |
| L62           | 1.54814 | 45.82 | E-FEL1 (Hoya)          |
| L72           |  1.7859 | 43.93 | NBFD11 (Hoya)          |
| Hybrid layer  |   1.517 |    52 | Unmatched resin        |
| L92           | 1.64769 | 33.84 | E-FD2 (Hoya)           |
| Rear filter   |  1.5168 |  64.2 | BSC7 (Hoya)            |

The nine lens glasses and rear filter use Hoya spectral proxies at the printed indices within the site's proxy tolerance (|Δnd| ≤ 0.003, |Δνd| ≤ 0.25). Production glasses and suppliers remain unconfirmed. The unmatched resin retains Abbe-based dispersion: E-CF6 and J-KF6 meet that window but do not establish its dispersion. The resin's 1.51700/52.00 pair recurs in Example 3, but neither table gives a material name, extra spectral indices or partial dispersion. These curves do not prove apochromatic correction or reconcile the source's focal-length and back-focus discrepancies. Neither mount's specifications identify ED positions; no element is tagged for anomalous partial dispersion.

Figure 4 shows C/d/F transverse fans rather than longitudinal-focus or distortion plots. At the outer on-axis pupil, its approximate C/d/F image errors are +0.044/+0.010/0.000 mm (reading uncertainty about 0.003 mm). The calculated errors at the unchanged source image plane are +0.0261/−0.0050/−0.0135 mm. A common image-plane displacement of approximately 0.045 mm toward the object accounts for most of this difference; it is not applied. Since the d-line error also differs, these fans do not identify an erroneous dispersion row. The resin's unmeasured dispersion remains an additional uncertainty.

## Focus Mechanism

The variable gaps describe single-element internal focusing by G22 (L52), which moves 4.928652 mm toward the image. G12, G32, the stop and the filter remain fixed relative to the first vertex; the image plane moves 0.180011 mm imageward as D4 increases. Both published endpoints are ordered infinity to near; the patent supplies no intermediate focus cam.

| Source gap        |    Infinity | Printed near state |
| ----------------- | ----------: | -----------------: |
| D1, after L42     |   1.6125 mm |        6.541152 mm |
| D2, after L52     |  10.4271 mm |        5.498448 mm |
| D3, before filter |     37.3 mm |            37.3 mm |
| D4, after filter  | 0.507836 mm |        0.687847 mm |

The near object distance D0 is 813.676935 mm before the first vertex. Adding the physical image track gives 926.326382 mm from object to image, despite the source's 0.9 m heading. The modeled close-focus endpoint records 0.926326 m; the maker's 0.9 m minimum is retained separately as a marketing specification. The calculated paraxial conjugate is approximately 0.92647534 m and is distinct from the printed source distance.

The source's near f/1.584 and 11.939° half-field remain source claims. The modeled physical iris retains its semi-diameter of 15.090708516 mm, derived from infinity f/1.479; the fixed-iris near working f-number is 1.483. No iris adjustment was used to force the printed near f-number.

The filter remains drawn because its trailing gap D4 changes with focus. A separate rear-plate representation allows only a fixed trailing gap; moving D4's 0.180011 mm change into D3 would relocate the near-state filter. Both physical gaps are preserved. The source's D5 values, −0.005027/−0.133249 mm after Image, remain non-propagated metadata.

## Aspherical Surfaces

Surface 15, on the hybrid layer over L82, is the sole asphere. The source uses the standard conic sag convention containing (1 + K); K = −1 is retained unchanged. The even radial coefficients are copied at the original millimetre scale, with no coefficient rescaling.

| Parameter |     Surface 15 |
| --------- | -------------: |
| K         |             −1 |
| A4        | −3.2762714e-06 |
| A6        |  −1.057203e-08 |
| A8        |   5.094887e-11 |
| A10       |  −1.935791e-13 |
| A12       |   2.319653e-16 |

The negative A4 term contributes a negative sag departure from the conic base; the higher even terms shape the outer profile. This is a description of the prescribed surface, not evidence of a particular molding process or measured production performance.

## Model Scope and Limitations

The source's in-air back-focus and overall-length summaries remain inconsistent with the prescription. The source gives an air back focus of 39.403047 mm versus 39.457638 mm calculated, and an overall length of 112.418323 mm versus 112.469436 mm calculated. The calculated after-filter infinity back focus is 0.509431 mm versus the stored 0.507836 mm. Residual paraxial image-plane offsets are +0.001595473 mm at infinity and +0.001772322 mm near focus. Neither source plane was refocused.

The inferred rims follow Figure 3 at the source scale, subject to axial clearance at both printed focus states. The near-state beam requires slightly larger front-section optical caps than the drawing alone suggests. L42 has a square 20.2 mm rim; the rear doublets and L82's hybrid layer share 18 mm rims. Flat lands on the rear faces of L22, L32 and L52 extend their optical caps to drawn body radii of 26.3, 24.1 and 18 mm, respectively. The surface clear semi-diameters, in source-row order with the stop marked separately, are:

30, 30, 26.3, 25.6, 24.1, 21, 20.2, 20.2, 18, 16, STOP, 18, 18, 18, 18, 18, 18, 18, 24, 24 mm.

These are inferred clear apertures, not patent-published or factory-measured rims. The model reaches the full-frame corner, but some edge rays are blocked. Geometric clipping is substantial at the source's field edge: 57.6355% at infinity (14.239°) and 45.8128% at the printed near state (11.939°). Analytic sphere intersections confirm that blocked incoming lines miss the 30 mm front cap. These calculated fractions exclude coating losses and do not establish production illumination.

Axial rays pass at both states. The calculated axial RMS radius is 0.0029263 mm at infinity and 0.0899632 mm near focus at the unchanged source planes. The near RMS improves to 0.017048 mm at a plane 0.358718 mm forward; the much smaller paraxial offset indicates source spherical aberration rather than a mistaken last gap. That refocus is not applied. These calculations do not demonstrate agreement with factory MTF. A near-focus field of 14.239° extends beyond the source's 11.939° near edge.

## Sources

- [KR 10-2213072 B1](https://patents.google.com/patent/KR102213072B1/ko), Example 2, Tables 4–6 and 10, Figure 3, asphere equation and front-page bibliography; earlier publication KR20200129711A.
- [Samyang AF 85mm F1.4 EF specifications](https://www.lksamyang.com/ko/product/product-view.php?seq=379), [AF 85mm F1.4 F specifications](https://www.lksamyang.com/en/product/product-view.php?seq=422&title=), and their [shared construction diagram](https://www.lksamyang.com/upload/editor/1559813077); Samyang's 2022 catalogue, page 19, also documents the EF construction. These support the association, not exact numerical identity.
- [Samyang's Nikon F announcement, 11 April 2019](https://www.lksamyang.com/ko/about/notice-view.php?seq=650).
- [WO 2021/085655 A1](https://patents.google.com/patent/WO2021085655A1/en), the separate patent source for the catalog's AF 85mm f/1.4 FE model.
- [Samyang AF 85mm F1.4 FE specifications](https://www.lksamyang.com/ko/product/product-view.php?seq=417), for the different eleven-element/eight-group construction.
