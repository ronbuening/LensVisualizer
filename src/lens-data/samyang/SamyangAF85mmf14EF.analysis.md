# Samyang AF85/1.4 EF

## Patent Reference and Design Identification

**Patent:** KR 10-2213072 B1
**Filed:** 2019-05-09
**Granted:** 2021-02-08
**Published:** 2021-02-08
**Inventors:** Jae Myung Ryu, Hae Jin Lee, Jeong Du Lee
**Assignee:** Samyang Optics Co., Ltd.
**Example details:** Tables 4–6, Figure 3

The prescription transcribes Example 2 at its original scale, including both printed focus states. The earlier publication KR20200129711A was also compared during the source review. The association with the Samyang AF 85mm f/1.4 EF rests on convergent evidence:

1. Samyang's EF specifications and its 2022 catalogue, page 19, describe nine glass elements in seven groups, rear cemented doublets and a hybrid asphere on L8. The construction diagram supports the element shapes and rear-group arrangement; it does not mark the iris.
2. The marketed 85 mm f/1.4, Canon EF, full-frame lens has a stated 0.9 m minimum focus distance. The patent model is close in focal length and aperture, but its literal near-focus distances differ from that marketing value, as explained below.
3. Example 2 fits the hybrid construction better than the ED-containing Example 3. This is evidence of a design-family association, not proof that the numerical prescription is the exact factory design. The EF product's reported 2018 release also precedes this patent's filing.

This is distinct from the AF 85mm f/1.4 FE already in the catalog. That model has eleven elements in eight groups and uses Example 3 of WO 2021/085655 A1, with an all-spherical construction. The EF source belongs to the KR family; the FE source belongs to a different WO family. The shared focal-length and aperture labels do not establish prescription identity.

## Optical Architecture

The design has nine glass elements in seven air-spaced groups, excluding the thin hybrid layer and camera-side filter. Four separate front elements precede the negative focusing element L5 and the stop. The rear section contains the L6–L7 and L8–L9 cemented doublets, with the hybrid layer on L8. These component and motion descriptions follow the transcribed surfaces and variable gaps; detailed aberration roles below are optical interpretations of that layout.

All twenty source optical, stop and filter rows are retained without rescaling or index fitting. The native calculated EFL is 84.548650747 mm at f/1.479, rather than the marketed f/1.4. Table 6 gives 84.499585 mm, whereas Table 10 gives 84.548355 mm and the prose gives 84.54 mm. These source differences remain unresolved.

The camera-side filter is a physical 2.5 mm plate. The image plane follows D4 after the plate. The printed D5 row follows Image and is retained only as source metadata; it is not propagated as an incoming image spacing. Its purpose remains unresolved. The independent source review supports this reading without correcting the source.

## Element-by-Element Analysis

The following glass values are published nd/νd pairs. The data file assigns no catalog glass or individual-element focal lengths, so none are asserted here. Element shapes and qualitative power roles are inferred from the transcribed curvatures, rather than presented as separate patent claims.

### L1 — Positive meniscus, convex to object

nd = 1.7725, νd = 49.62. Glass: unassigned catalog glass; approximate dispersion.

L1 opens the front collecting section. Its positive meniscus form contributes convergence before the remaining front elements.

### L2 — Positive meniscus, convex to object

nd = 1.7433, νd = 49.22. Glass: unassigned catalog glass; approximate dispersion.

L2 supplies another positive contribution in the front section. It is separated from L1 and L3 by air gaps.

### L3 — Negative meniscus

nd = 1.72825, νd = 28.32. Glass: unassigned catalog glass; approximate dispersion.

L3 introduces negative power between the front positive elements. Its lower Abbe number provides dispersion contrast with the surrounding glasses, although the available data do not establish a specific partial-dispersion correction.

### L4 — Positive meniscus, convex to object

nd = 1.7725, νd = 49.62. Glass: unassigned catalog glass; approximate dispersion.

L4 closes the front section before the variable gap D1. Its modeled rim is an inferred geometry limit, not a published mechanical dimension.

### L5 — Negative meniscus focusing element

nd = 1.8061, νd = 33.27. Glass: unassigned catalog glass; approximate dispersion.

L5 lies between D1 and D2. Their opposing changes describe its movement toward the image side for close focus, with the stop behind it.

### L6 + L7 — Rear cemented doublet

L6: nd = 1.54814, νd = 45.82. Glass: unassigned catalog glass; approximate dispersion.

L7: nd = 1.7859, νd = 43.93. Glass: unassigned catalog glass; approximate dispersion.

The biconcave L6 and biconvex L7 share the interface at surface 13. Their opposite power contributions and refractive-index contrast provide rear-group correction freedom; their similar Abbe numbers alone do not prove an achromatic pairing.

### Hybrid layer + L8 + L9 — Aspherical rear cemented group

Hybrid layer: nd = 1.517, νd = 52. Glass/material: unassigned; approximate dispersion.

L8: nd = 1.7725, νd = 49.62. Glass: unassigned catalog glass; approximate dispersion.

L9: nd = 1.64769, νd = 33.84. Glass: unassigned catalog glass; approximate dispersion.

The 0.130 mm hybrid layer precedes the positive L8 substrate. Its exposed surface 15 is aspherical. L8 and the negative meniscus L9 share surface 17, forming the last glass doublet. The layer is modeled separately to preserve the source thickness and index; it does not increase the maker's nine-glass-element count. The prescription does not establish the layer's chemistry or supplier.

### Camera-side filter — Plane-parallel plate

nd = 1.5168, νd = 64.2. Glass: unassigned catalog glass; approximate dispersion.

Surfaces 19–20 represent the published filter. Its thickness and the physical gaps on either side remain explicit; the plate is excluded from the production lens's element/group count.

## Glass Identification and Selection

| Location | nd | νd | Identification |
| --- | ---: | ---: | --- |
| L1, L4, L8 | 1.7725 | 49.62 | Published pair; catalog glass unassigned |
| L2 | 1.7433 | 49.22 | Published pair; catalog glass unassigned |
| L3 | 1.72825 | 28.32 | Published pair; catalog glass unassigned |
| L5 | 1.8061 | 33.27 | Published pair; catalog glass unassigned |
| L6 | 1.54814 | 45.82 | Published pair; catalog glass unassigned |
| L7 | 1.7859 | 43.93 | Published pair; catalog glass unassigned |
| Hybrid layer | 1.517 | 52 | Published pair; material unassigned |
| L9 | 1.64769 | 33.84 | Published pair; catalog glass unassigned |
| Rear filter | 1.5168 | 64.2 | Published pair; catalog glass unassigned |

The palette combines positive and negative elements with differing indices and dispersions. It supports an approximate dispersion model, without identifying historical suppliers or proving apochromatic correction. No catalog substitution or index adjustment was made to reconcile the source's focal-length and back-focus discrepancies.

## Focus Mechanism

The variable gaps describe single-element internal focusing by L5. The front section, stop and rear glass groups keep their internal spacings; the source also changes the short image gap after the filter. Both published endpoints are represented, but no intermediate focus cam has been certified.

| Source gap | Infinity | Printed near state |
| --- | ---: | ---: |
| D1, after L4 | 1.6125 mm | 6.541152 mm |
| D2, after L5 | 10.4271 mm | 5.498448 mm |
| D3, before filter | 37.3 mm | 37.3 mm |
| D4, after filter | 0.507836 mm | 0.687847 mm |

The near object distance D0 is 813.676935 mm before the first vertex. Adding the physical image track gives 926.326382 mm from object to image, despite the source's 0.9 m heading. The modeled close-focus endpoint records 0.926326 m; the maker's 0.9 m minimum is retained separately as a marketing specification. The calculated paraxial conjugate is approximately 0.92647534 m and is distinct from the literal source distance.

The source's near f/1.584 and 11.939° half-field remain source claims. The modeled physical iris retains its infinity-derived semi-diameter of 15.090708516 mm; the validator gives a fixed-iris near working f-number of 1.483. No iris adjustment was used to force the printed near f-number.

The rear-plate representation currently allows only a fixed trailing gap, so it cannot preserve both printed D4 endpoints. Holding D4 fixed and moving its 0.180011 mm change into D3 would relocate the near-state filter. The filter therefore remains explicit until a variable trailing gap can be represented without moving it. The source's D5 values, −0.005027/−0.133249 mm after Image, remain non-propagated metadata.

## Aspherical Surfaces

Surface 15, on the hybrid layer over L8, is the sole authored asphere. The source uses the standard conic sag convention containing (1 + K); K = −1 is retained unchanged. The even radial coefficients are copied at the original millimetre scale, with no coefficient rescaling.

| Parameter | Surface 15 |
| --- | ---: |
| K | −1 |
| A4 | −3.2762714e-06 |
| A6 | −1.057203e-08 |
| A8 | 5.094887e-11 |
| A10 | −1.935791e-13 |
| A12 | 2.319653e-16 |

The negative A4 term contributes a negative sag departure from the conic base; the higher even terms shape the outer profile. This is a description of the prescribed surface, not evidence of a particular molding process or measured production performance.

## Verification Summary and Limitations

The independent validator re-read Tables 4–6 on PDF pages 12–13, the asphere equation on page 11, Figure 3 on page 18, and the front-page bibliography. It found no transcription mismatches in the twenty rows, eleven nd/νd pairs, conic and five coefficients, or both endpoints of D1–D4.

The original OAL, in-air back-focus and total-length summary conflicts remain unresolved. The validator compares a source air back focus of 39.403047 mm with 39.457638 mm calculated, and a source OAL of 112.418323 mm with 112.469436 mm calculated. The calculated after-filter infinity back focus is 0.509431 mm versus the stored 0.507836 mm. Residual paraxial image-plane offsets are +0.001595473 mm at infinity and +0.001772322 mm near focus. Neither source plane was refocused.

The default geometry check limits signed gap-sag intrusion to 90%, with no override. Initially larger rims crossed at L4 and L7; common semi-diameters of 23 mm at L4 and 18 mm in the rear section corrected those bounds without changing source radii or thicknesses. The authored surface semi-diameters, in source-row order with the stop marked separately, are:

30, 30, 28, 28, 27, 27, 23, 23, 23, 23, STOP, 18, 18, 18, 18, 18, 18, 18, 24, 24 mm.

These are geometry-limited inferred apertures, not patent-published or factory-measured rims. The runtime may further constrain them; equivalence between the authored and rendered rims has not been established here. Native geometry and export checks reported no errors and identical exported optics. The later surface, aperture and image-circle checks passed; the aperture check proposed no rim increases. A visibility-only scratch check reported full field coverage, which does not mean that every ray in an edge bundle is transmitted.

The clipping review used a 32 × 32 equal-area circular stop lattice, giving 812 samples per field, with no discarded samples or outlier filter:

| State | Field angles | Transmitted samples |
| --- | --- | --- |
| Infinity | 0°, 7.1195°, 14.239° | 812, 684, 344 |
| Printed near state, literal D0 | 0°, 5.9695°, 11.939° | 812, 686, 440 |

Thus 57.6355% of infinity-edge samples and 45.8128% of near-edge samples are blocked. The original review left 314 infinity and 248 near unbracketed intersections awaiting independent proof. The subsequent validator's analytic whole-line sphere checks confirmed that the blocked launch lines miss the 30 mm front cap. These remain model-sampled geometric fractions, not measured illumination, coating transmission or factory vignetting. The inferred rims cannot establish production illumination.

All 812 axial lattice samples passed at both states, as did the separately aimed marginal endpoint at normalized radius 1. The sampled axial RMS radius is 0.0029263 mm at infinity and 0.0899632 mm near focus at the unchanged source planes. The validator found that the near RMS improves to 0.017048 mm at a plane 0.358718 mm forward, attributing that difference to source spherical aberration rather than a transcription or last-gap error. No such refocus was applied. These calculations do not demonstrate agreement with factory MTF. The exploratory near-focus extension to 14.239° is separate from the source's 11.939° near edge.

The entry remains hidden in the data file. Full-application regression, compatibility with the current main branch, compiled-browser review and remote CI were outside the recorded review. The source transcription and clipping checks above do not establish those results or exact production identity.

## Sources

- [KR 10-2213072 B1](https://patents.google.com/patent/KR102213072B1/ko), Example 2, Tables 4–6 and 10, Figure 3, asphere equation and front-page bibliography; earlier publication KR20200129711A.
- [Samyang AF 85mm F1.4 EF specifications](https://www.lksamyang.com/ko/product/product-view.php?seq=379), [manufacturer construction diagram](https://www.lksamyang.com/upload/editor/1559813077), and Samyang's 2022 catalogue, page 19. These support the construction association, not exact numerical identity.
- [WO 2021/085655 A1](https://patents.google.com/patent/WO2021085655A1/en), the separate patent source for the catalog's AF 85mm f/1.4 FE model.
- [Samyang AF 85mm F1.4 FE specifications](https://www.lksamyang.com/ko/product/product-view.php?seq=417), for the different eleven-element/eight-group construction.
