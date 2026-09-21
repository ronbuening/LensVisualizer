# LEICA SUMMILUX-SL 50mm f/1.4 ASPH. I — EP 3 136 147 A1, Example 1

## Patent Reference and Design Identification

**Patent:** EP 3 136 147 A1\
**Application Number:** 16184686.0\
**Priority:** 27 August 2015 — JP 2015-167595\
**Filed:** 18 August 2016\
**Published:** 1 March 2017\
**Inventors:** Daisuke Tanahashi; Yoshihito Souma\
**Applicant:** Konica Minolta, Inc.\
**Title:** *Imaging Lens System, Imaging Optical Device, and Digital Appliance*\
**Embodiment analyzed:** Example 1, corresponding to the first embodiment and Fig. 1

The prescription is transcribed from Example 1 of EP 3 136 147 A1. The patent describes a three-group, positive–positive–positive imaging lens in which the second group alone moves toward the object for close focusing while the first and third groups remain fixed relative to the image surface. Example 1 is the numerical prescription associated with the first embodiment shown in Fig. 1 (patent ¶¶0044–0048, 0052–0057; PDF pp. 8–11 and 18).

The production correlation is to the original 2016/2017-generation Leica Summilux-SL 50 mm f/1.4 ASPH., order no. 11180. This identification is a strong inference, not a manufacturer-confirmed patent attribution. No Leica primary source located for this analysis explicitly states that EP 3 136 147 A1, Example 1 is the production prescription.

Several independent features converge on that identification:

1. Example 1 contains 11 lens elements arranged in 9 glass groups, matching Leica's July 2016 technical data for the original lens.
2. The patent has four aspherical surfaces on exactly two elements, L23 and L32; Leica likewise specifies four aspherical surfaces on two lenses.
3. The patent uses internal focusing by moving only Gr2, and one of the focusing-group elements, L23, is aspherical. Leica describes the production lens as internally focusing and identifies an aspherical element in the focusing group.
4. The published close-focus state places the object plane 0.600 m from the image plane, matching Leica's 0.6 m working-range endpoint. The intermediate patent state similarly corresponds to 1.000 m object-to-image distance.
5. The patent image height is 21.64 mm, corresponding to a 43.28 mm image diagonal, consistent with 35 mm full-frame coverage; Leica specifies L-Mount and full-frame 35 mm format.
6. The patent's infinity-state design values, approximately 51.963 mm and f/1.440, occupy the same nominal 50 mm f/1.4 class without applying any scale factor.
7. The patent's 2015 priority and 2016 filing align with Leica's July 2016 technical documentation and September 2016 announcement of a January 2017 launch.

Two manufacturer specifications do not numerically coincide with the rounded patent first-order model and are therefore retained as limitations rather than forced matches. Leica publishes a 47.9° diagonal field angle and a largest reproduction ratio of 1:10 for the original lens; Example 1 prints 2ω = 45.218° at POS1, and independent paraxial refocus of the rounded POS3 prescription gives |m| = 0.107691, or approximately 1:9.286. These differences do not establish a different prescription, but they prevent an exact field-angle or reproduction-ratio identity claim. Leica's current same-name lens is also a distinct generation with 11 elements in 6 groups and a 0.5 m close-focus limit; its specifications are not mixed into the 2016/2017 correlation.

The modeled and marketed quantities are therefore kept separate. The data model stores a 50 mm marketing focal length and f/1.4 marketing aperture, while the verified infinity-state design values are 51.962733 mm and f/1.440. The prescription is not scaled to make the design focal length equal 50 mm.

## Optical Architecture

The design contains 11 physical lens elements in 9 glass groups, organized optically as three positive-power functional groups. Gr1 contains six elements, Gr2 contains three, and Gr3 contains two. The aperture stop lies between Gr1 and Gr2. At infinity, recomputation from the final prescription gives group effective focal lengths of +108.487 mm for Gr1, +72.909 mm for Gr2, and +194.606 mm for Gr3; the complete lens has an effective focal length of 51.962733 mm.

Gr1 is arranged negative–negative–positive–positive–positive–negative. It contains two cemented pairs, L12+L13 and L15+L16. The patent gives specific reasons for several features of this front group: the first two negative elements broaden the beam before the positive core, three consecutive positive elements distribute the required positive power, and the final negative element reduces the beam height presented to the focusing group by moving Gr1's rear principal point objectward (¶¶0026–0037).

Gr2 is a positive–negative–positive inner-focusing group. The patent requires at least one negative element in the focusing group so that chromatic correction can be maintained as focus changes, while the overall group remains positive (¶0012 and ¶0046). In Example 1 the negative member is L22, between positive L21 and aspherical positive L23.

Gr3 is a fixed negative–positive pair. Its positive net power is comparatively weak in isolation, but it completes the system behind the moving focus group. Both surfaces of its positive element L32 are aspherical.

The three computed group focal lengths refer to each group treated as an isolated air-to-air subsystem. They are not the same quantity as the standalone focal length of any individual element, and they should not be interpreted as a direct aberration budget for the assembled lens.

## Element-by-Element Analysis

### L11 — Negative Meniscus, convex to object

**nd = 1.51680, νd = 64.17. Glass: 517642 class (supplier/melt unproven). Standalone f = −125.042 mm.**

L11 is the front element and the first of two consecutive negative elements in Gr1. The patent explicitly prefers a negative meniscus convex toward the object in this position. Together with the following negative element, it expands the axial beam before the positive central part of Gr1; the patent associates that arrangement with shortening the overall design while avoiding a single abrupt concentration of positive power (¶0027).

Its standalone focal length describes L11 in air only. In the assembled group, the large separations and the powers of L12–L16 determine the actual in-situ behavior.

### L12 — Biconcave Negative

**nd = 1.74077, νd = 27.76. Glass: 741278 class (supplier/melt unproven). Standalone f = −30.713 mm.**

L12 is the second negative front-group element and is cemented directly to positive L13. The patent identifies the first two Gr1 members as negative (¶0045), so the strong negative standalone power here is source-consistent.

The isolated cemented L12+L13 pair has a computed net focal length of approximately −276.738 mm. That weak negative pair power must not be confused with the complete Gr1, which remains positive at approximately +108.487 mm because of the following positive sequence and rear negative member.

### L13 — Biconvex Positive

**nd = 1.69680, νd = 55.46. Glass: 697555 class (supplier/melt unresolved). Standalone f = +41.328 mm.**

L13 is cemented to L12 and begins the run of three consecutive positive elements L13–L15. The patent states that distributing positive power across three successive positive elements permits a gentler succession of ray bends than concentrating the same power in fewer strongly curved surfaces (¶0033).

No source assigns a unique aberration contribution to L13, so its role is described here only by its placement, power sign, and participation in the cemented pair.

### L14 — Biconvex Positive

**nd = 1.92286, νd = 20.88. Glass: 923209 class (supplier/melt unproven). Standalone f = +56.153 mm.**

L14 is the middle member of the three-positive sequence in Gr1. Its d-line index exceeds 1.79 and therefore satisfies the patent's material condition (5) for at least one positive Gr1 element. The patent states generally that such a high-index positive element can supply power with gentler curvature and can support compactness and field-curvature control (¶¶0034–0035).

That statement is a patent-level design rule; it is not evidence that L14 alone is responsible for a specific measured aberration term in the complete prescription.

### L15 — Biconvex Positive

**nd = 1.59282, νd = 68.62. Glass: 593686 class (low-dispersion family; supplier/melt unresolved). Standalone f = +43.503 mm.**

L15 is the third consecutive positive element in Gr1 and is cemented to negative L16. Its νd of 68.62 exceeds the patent's condition (6) threshold of 60 for at least one positive Gr1 element. The patent notes that a high-Abbe positive element, particularly in a cemented combination with a negative element, can be useful for controlling axial chromatic error (¶¶0036–0037).

The isolated L15+L16 cemented pair has a computed net focal length of approximately −120.746 mm. This is the net power of that pair in isolation, not the behavior of the pair inside the complete front group.

### L16 — Biconcave Negative

**nd = 1.72825, νd = 28.32. Glass: 728283 class (supplier/melt unproven). Standalone f = −25.436 mm.**

L16 is the final element of Gr1 and the negative member cemented to L15. The patent specifically prefers the most image-side lens in Gr1 to be negative so that Gr1's rear principal point can move toward the object side and the ray height incident on the focusing group can be reduced (¶0026).

This is one of the clearer element-specific functional statements in the patent and does not require inferring a separate aberration contribution from the element's glass class.

### L21 — Positive Meniscus, convex to object

**nd = 1.83481, νd = 42.72. Glass: 835427 class (supplier/melt unproven). Standalone f = +84.680 mm.**

L21 is the first element of the moving Gr2 focusing group. In Example 1 it is a positive meniscus convex toward the object, followed by negative L22 and positive L23 (¶0048).

The patent defines Gr2 primarily by its positive net power and its motion. It does not provide a separate element-by-element aberration allocation for L21, so no stronger optical-role claim is made here.

### L22 — Biconcave Negative

**nd = 1.76182, νd = 26.61. Glass: 762266 class (supplier/melt unproven). Standalone f = −33.939 mm.**

L22 is the sole negative element in Example 1's focusing group. The patent states that at least one negative element is needed in Gr2 to provide sufficient chromatic correction within the moving group as object distance changes (¶0012). L22 is therefore the explicit realization of that requirement in this embodiment.

Its negative standalone power is embedded between two positive elements, leaving Gr2 positive overall at approximately +72.909 mm effective focal length.

### L23 — Biconvex Positive, two aspherical surfaces

**nd = 1.73077, νd = 40.51. Glass: 731405 class (supplier/melt unresolved). Standalone f = +34.499 mm.**

L23 completes the moving positive–negative–positive focusing group. Both of its surfaces are aspherical: source surfaces 16 and 17 are stored as 16A and 17A in the data file.

The patent and Leica's original technical material both place an aspherical element in the focusing group, which is an important part of the production correlation. Neither source publishes a separate quantitative aberration budget for L23, so the analysis does not assign a specific correction term to it beyond its verified power and geometry.

### L31 — Biconcave Negative

**nd = 1.69895, νd = 30.05. Glass: 699301 class (supplier/melt unproven). Standalone f = −59.885 mm.**

L31 is the negative front member of the fixed third group. The patent describes Gr3 in Example 1 as a biconcave negative element followed by a biconvex positive aspherical element (¶0048).

The pair is positive as a group despite L31's negative standalone power. The source gives no element-specific explanation for how L31 partitions aberration correction relative to L32.

### L32 — Biconvex Positive, two aspherical surfaces

**nd = 1.80860, νd = 40.42. Glass: L-LAH84 class (coordinate-compatible spectral proxy; native d 1.8086/40.42; supplier/melt unproven). Standalone f = +48.683 mm.**

L32 is the final refracting element and the positive member of Gr3. Both surfaces are aspherical, stored as 20A and 21A. The computed isolated Gr3 focal length is approximately +194.606 mm.

Because the source does not publish a per-surface aberration decomposition, the defensible statement is limited to L32's positive power, its fixed position, and the verified aspherical geometry.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number for every lens element but does not identify suppliers or melt names. The final data uses coordinate classes and qualified spectral proxies without asserting production supplier identities. All listed indices refer to the d-line at 587.56 nm.

| Element | Final glass label | nd | νd | Evidence level |
|---|---|---:|---:|---|
| L11 | 517642 class | 1.51680 | 64.17 | Coordinate class; supplier/melt unproven |
| L12 | 741278 class | 1.74077 | 27.76 | Coordinate class; supplier/melt unproven |
| L13 | 697555 class | 1.69680 | 55.46 | Coordinate class; supplier unresolved |
| L14 | 923209 class | 1.92286 | 20.88 | Coordinate class; supplier/melt unproven |
| L15 | 593686 class | 1.59282 | 68.62 | Low-dispersion coordinate family; supplier unresolved |
| L16 | 728283 class | 1.72825 | 28.32 | Coordinate class; supplier/melt unproven |
| L21 | 835427 class | 1.83481 | 42.72 | Coordinate class; supplier/melt unproven |
| L22 | 762266 class | 1.76182 | 26.61 | Coordinate class; supplier/melt unproven |
| L23 | 731405 class | 1.73077 | 40.51 | Coordinate class; supplier unresolved |
| L31 | 699301 class | 1.69895 | 30.05 | Coordinate class; supplier/melt unproven |
| L32 | L-LAH84 spectral proxy | 1.80860 | 40.42 | Coordinate class; supplier unresolved |

Catalog-coordinate research found public glasses close to or coincident with several of these nd/νd pairs, but coordinate agreement alone does not establish the production supplier or melt. The model uses coordinate-compatible catalog curves as spectral proxies, including L-LAH84 for L32. No production supplier is asserted, and no element-specific nC, nF, ng, or dPgF values are copied into the prescription.

Leica's July 2016 technical material states that the production lens uses four glasses with anomalous partial dispersion. That production-level statement cannot be mapped reliably onto particular patent elements from the available evidence. Accordingly, no individual element is labeled APD and no apochromatic-performance claim is inferred from the patent's nd/νd table alone.

## Focus Mechanism

Focusing is fully published rather than reconstructed. Gr1 and Gr3 remain stationary relative to the image surface while Gr2 moves toward the object as focus moves from infinity toward the close limit (patent ¶0044). The source gives three physical states:

| Source state | Object distance to image plane | D11: stop to Gr2 (mm) | D17: Gr2 to Gr3 (mm) | Gr2 objectward travel from infinity (mm) |
|---|---:|---:|---:|---:|
| POS1 | Infinity | 10.989 | 3.491 | 0.000 |
| POS2 | 1.000 m | 6.424 | 8.055 | 4.565 |
| POS3 | 0.600 m | 2.867 | 11.613 | 8.122 |

The adjacent-gap sums are 14.480, 14.479, and 14.480 mm, respectively. Their agreement to the published 0.001 mm spacing precision supports a pure translation of Gr2 rather than an internal change of shape or spacing within the group.

The LensVisualizer data preserves all three published states at normalized focus coordinates 0, 0.6, and 1. Intermediate coordinates are piecewise-linear viewer interpolation between those source keyframes. They are modeling convenience only and are not presented as a published continuous mechanical focus law.

The effective focal length changes from 51.962733 mm at infinity to 51.173181 mm at the 1.0 m state and 50.622893 mm at the 0.6 m state. These are recomputed first-order values from the final model, not marketing focal lengths.

## Aspherical Surfaces

Example 1 has four aspherical surfaces: source surfaces 16, 17, 20, and 21, corresponding to data labels 16A, 17A, 20A, and 21A. They are the two faces of L23 and the two faces of L32.

The patent uses the standard conic form

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+\sum_j A_j h^j,
$$

where $c=1/R$. This is the same standard conic-constant convention used by the data model, so no K remapping is required. All four Example 1 surfaces have K = 0. The patent publishes even orders through A16; all A12, A14, and A16 terms are zero in Example 1.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 16A | 0 | −1.3716e−6 | +6.8119e−9 | 0 | 0 |
| 17A | 0 | +2.6675e−6 | +5.9131e−9 | −8.3101e−12 | +1.7159e−14 |
| 20A | 0 | +8.1707e−7 | +6.9086e−9 | 0 | 0 |
| 21A | 0 | +1.5593e−6 | +5.5370e−9 | +1.0950e−11 | −6.5642e−15 |

At the final modeled semi-diameters, the computed polynomial departures from the K = 0 conic base are approximately +0.0790 mm at 16A, +0.4760 mm at 17A, +0.8570 mm at 20A, and +0.7066 mm at 21A. These values describe the authored geometry at modeled clear apertures; the patent itself does not publish those semi-diameters.

The departure magnitude is relatively modest at 16A and substantially larger at the rear face of L23 and both faces of L32. That is a geometric comparison only. The available sources do not support assigning a particular spherical-aberration, coma, or field-curvature correction budget to any one of these four surfaces.

## Conditional Expressions

The patent defines the complete system power as P and the powers of Gr1, Gr2, and Gr3 as P1, P2, and P3. Recomputed from the final data at infinity, the relevant power ratios are:

| Condition | Patent range | Preferred range | Final-data value | Result |
|---|---:|---:|---:|---|
| (1) P1/P | 0.2 < x < 0.6 | 0.3 < x < 0.55 | 0.47898 | Satisfied |
| (2) P1/P2 | 0.3 < x < 0.9 | 0.4 < x < 0.75 | 0.67205 | Satisfied |
| (3) (P1+P3)/P | 0.45 < x < 1.0 | x < 0.8 | 0.74599 | Satisfied |
| (4) P2/P | 0.3 < x < 0.95 | 0.6 < x < 0.85 | 0.71271 | Satisfied |

The patent's Table 1 prints the corresponding Example 1 values as 0.480, 0.673, 0.747, and 0.713. The small differences from the recomputed figures are consistent with calculation from rounded prescription entries and rounded printed group focal lengths.

Condition (5) requires at least one positive Gr1 element with nd > 1.79; L14 satisfies it at nd = 1.92286. Condition (6) requires at least one positive Gr1 element with νd > 60; L15 satisfies it at νd = 68.62. These conditions support the patent's stated use of high-index positive power and a low-dispersion positive member within the front group (¶¶0034–0037).

## Verification Summary

Sequential height/reduced-angle tracing and a separately implemented ABCD calculation reproduce the final prescription's infinity-state effective focal length as 51.962733 mm. The corresponding patent value is 51.964 mm. The same calculations give 51.173181 mm versus 51.175 mm at POS2 and 50.622893 mm versus 50.624 mm at POS3.

The final-data group focal lengths are +108.486854 mm for Gr1, +72.908994 mm for Gr2, and +194.605619 mm for Gr3. Surface-by-surface Petzval summation using $\phi/(n n')$ gives +0.00193522 mm⁻¹, equivalent to a radius of approximately +516.737 mm under that sign convention.

The source rear plane-parallel plate PT is intentionally omitted from the LensVisualizer prescription because it represents sensor-cover/filter glass. Its first-order effect is replaced by 23.5195886 mm of air from 21A to the image plane, equivalent to the source path of 21.790 mm air + 1.410 mm glass at nd = 1.51680 + 0.800 mm air. ABCD comparison verifies the raw and normalized rear paths to numerical precision. This is a reference-plane normalization, not a claim that the physical plate is absent from the manufactured camera system.

The patent specifies the stop plane but not its physical diameter. The data therefore uses a stop semi-diameter of 15.4255966 mm calibrated to the patent's infinity-state f/1.440 through the independently recomputed entrance-pupil magnification. Agreement with f/1.440 is consequently a calibration result, not independent evidence for the production diaphragm diameter.

The patent publishes no clear-aperture semi-diameters. The front surface is estimated at 26.5 mm from FIG. 1 optical rims. Rear L32 uses 21.5 mm at 20A and 19.5 mm at 21A: the latter is capped below the polynomial slope reversal near 20 mm, even though the schematic suggests a larger rim. Remaining apertures retain the ray-envelope estimates. These are modeled optical extents, not mechanical blank diameters or production dimensions.

A source/model discrepancy remains intentionally visible. From the rounded patent prescription, the paraxial image plane falls approximately 0.0753 mm, 0.0834 mm, and 0.0846 mm behind the printed image plane at POS1, POS2, and POS3. The source radii and spacings are not altered to force those residuals to zero. The printed surface-row total lengths also differ from the stated 142.000 mm by only 0.001–0.002 mm, consistent with table rounding.

## Sources and References

1. European Patent Office, **EP 3 136 147 A1**, *Imaging Lens System, Imaging Optical Device, and Digital Appliance*, published 1 March 2017. Example 1 prescription and aspheres: PDF pp. 10–11; embodiment description: ¶¶0044–0048; numerical-example definitions: ¶¶0052–0057; Fig. 1: PDF p. 18; conditional expressions: ¶¶0010, 0020–0037 and Table 1 on PDF p. 15.
2. Leica Camera AG, **LEICA SUMMILUX-SL 50 mm f/1.4 ASPH. — Technical Data**, as at July 2016: https://leica-camera.com/sites/default/files/pm-55409-160915_Datenblatt_Summilux-SL-50mm-ASPH_e.pdf
3. Leica Camera AG, **Summilux-SL 50 f/1.4 ASPH. — original 2016-generation product page**: https://leica-camera.com/en-GB/photography/lenses/sl/summilux-sl-50mm-f1-4-asph-black-2016
4. Leica Camera AG, **New lenses expand the Leica SL-System**, press release dated 19 September 2016: https://leica-camera.com/en-NZ/Company/Press-Centre/Press-Releases/Press-Releases-2016/Press-Release-New-lenses-expand-the-Leica-SL-System
5. Leica Camera AG, **Summilux-SL 50 f/1.4 ASPH. — current generation product page** (generation-disambiguation only): https://leica-camera.com/en-int/photography/lenses/sl/summilux-sl-50mm-f1-4-asph-black-anodized-finish
