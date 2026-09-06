# CANON 8.8-220mm f/2.8-5.6 (Canon PowerShot G3 X)

## Patent Reference and Design Identification

**Patent:** JP 2016-148731 A\
**Filed:** 2015-02-10\
**Published:** 2016-08-18\
**Inventor:** Takashi Okada\
**Applicant:** Canon Inc.\
**Title:** Zoom lens and imaging device having the same\
**Embodiment analyzed:** Numerical Example 6 (実施例6)

The prescription transcribed here is Numerical Example 6 of JP 2016-148731 A. The patent describes a positive-lead zoom formed by six kinematic lens groups B1 through B6, with a positive-negative-positive-negative-positive-negative power sequence and B6 serving as the focus group (¶¶0017, 0026). The LensVisualizer data retains the Example 6 dimensions without uniform scaling.

The production correlation selected for this entry is the Canon PowerShot G3 X. Canon's Camera Museum records the camera as marketed in June 2015 with a fixed 25× zoom lens of 8.8–220.0 mm, maximum aperture f/2.8–5.6, a 1.0-inch CMOS sensor, and an all-new six-group zoom-lens design. Canon's support specification gives the same 8.8–220 mm range and focusing limits of 0.05 m at wide angle and 0.85 m at telephoto. These are production specifications; they are not substituted for the patent's exact numerical prescription.

Several points support the selected correlation without implying that Canon explicitly identified this patent as the production design:

1. **Architecture.** Example 6 is a six-kinematic-group positive-lead zoom, matching Canon's description of the G3 X as an all-new six-group zoom design.
2. **Design range.** The patent publishes 9.06 / 24.18 / 213.40 mm at f/2.88 / 4.41 / 5.77, close to but not identical with the marketed 8.8–220 mm f/2.8–5.6 range. The endpoints do not admit one common linear scale factor, so the patent design is preserved unscaled and the marketing values remain separate.
3. **Image field.** The Example 6 middle and tele image height is 7.89 mm, corresponding to a 15.78 mm effective diameter, close to the 15.86 mm diagonal used for the project's 1-inch-type format. At wide angle the patent deliberately reduces image height to 6.71 mm; ¶0087 states that wide-angle barrel distortion may be corrected by digital image stretching.
4. **Timing and layout.** The patent was filed in February 2015, before the G3 X was marketed in June 2015, and Figure 11 shows the same six labeled groups B1–B6 with SP between B3 and B4 and a rear GB block before the image plane.

The correlation is therefore architectural and chronological rather than an exact equality between marketing endpoints and patent focal lengths. No manufacturer source examined for this entry states that JP 2016-148731 A is the G3 X production prescription.

## Optical Architecture

The modeled prescription contains **18 glass elements in 13 air-separated optical assemblies**, organized into the patent's **six kinematic zoom groups** B1–B6. The 13-assembly count describes physically separate glass units; B1–B6 describe the six units that move together during zooming.

The functional-group powers recomputed from the final TypeScript prescription are:

| Kinematic group | Construction | Computed EFL | Sign |
|---|---|---:|---|
| B1 | L1–L3 | +83.900035 mm | positive |
| B2 | L4–L6 | −10.577043 mm | negative |
| B3 | L7–L10 | +20.936497 mm | positive |
| B4 | L11–L12 | −27.354152 mm | negative |
| B5 | L13–L16 | +18.421837 mm | positive |
| B6 | L17–L18 | −37.125504 mm | negative |

This reproduces the patent's positive-negative-positive-negative-positive-negative sequence. The zoom therefore derives its large focal-length change from changing separations among six powered groups rather than from a simple two-component variator-compensator pair.

At the three published infinity-focus states, the W→T group movements in the patent sign convention are B1 +51.10 mm, B2 −6.95 mm, B3 +21.03 mm, B4 +12.38 mm, B5 +21.03 mm, and B6 +24.79 mm. Positive means that the tele position lies more objectward than the wide position, following ¶0033. The sampled B3 and B5 trajectories are identical to numerical precision, consistent with ¶0024. The patent also states that SP follows the B3 trajectory during zooming (¶0020).

The three numerical zoom states do not fully describe every reversal drawn or discussed in the patent. In particular, ¶0028 says that B6 moves objectward, then briefly imageward near the tele end, then objectward again. The W/M/T spacing table does not bracket that reversal. The data therefore uses only the three published states and does not insert a synthetic intermediate keyframe.

### Stop and source-plane normalization

Example 6 contains one source-table omission that must be interpreted rather than silently copied. Surface 20 is printed as a neutral infinity-radius plane with variable following spacing and 10.20 mm effective diameter, but the row lacks the aperture annotation used elsewhere in the patent. Paragraph 0019 states that Examples 4–7 place SP between B3 and B4, and Figure 11 visibly places SP in that gap. The data therefore relabels source surface 20 as the single `STO`. This is an author/modeling inference supported by the patent's prose and figure, not a claim that the numerical row itself contains the stop tag.

Source surface 12 is an air-to-air zero-power bookkeeping plane before B3. Because it has no refractive or blocking function, it is omitted from the ordinary sequential model and its 0.10 mm spacing is added to d11. The normalized W/M/T d11 values are therefore 28.43 / 15.98 / 0.45 mm.

The patent's surfaces 34–35 form GB, which ¶0021 describes as an optical block corresponding to a filter, faceplate, low-pass filter, infrared-cut filter, or similar sensor-side plate. The LensVisualizer prescription excludes that block. Its axial optical effect is retained by replacing the final spacing after surface 33 with the air-equivalent distance `d33 + 0.80/1.51633 + 0.80`, giving 10.457589641 / 25.487589641 / 35.247589641 mm at W/M/T.

No dimensional scale is applied. Consequently all radii, thicknesses, semi-diameters, image-plane distances, and aspheric coefficients remain in the patent's original scale, and no `A_p / s^(p-1)` coefficient transformation is required.

## Element-by-Element Analysis

### D1 — L1 Negative Meniscus + L2 Biconvex Positive, front cemented pair of B1

**L1:** nd = 1.91082, νd = 35.3. Glass: 911353 class (vendor unresolved). f = −126.906825 mm.\
**L2:** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (spectral proxy; production supplier unspecified). f = +93.598338 mm.

L1 is a negative meniscus cemented directly to the biconvex positive L2. The two standalone focal lengths describe the elements isolated in air; they should not be summed to infer the cemented assembly. Recomputed as a cemented pair, D1 has a weak net positive EFL of +368.145635 mm. The complete B1 group becomes much more strongly positive, +83.900035 mm, after the rear positive singlet L3 is included.

The patent specifies B1 as negative-positive-positive and states that distributing positive power across multiple positive lenses helps control tele-end coma while allowing larger surface radii (¶0076). The strongly different dispersions of L1 and L2 also provide a conventional chromatic balancing pair, but the patent supplies no line-index or partial-dispersion data from which an apochromatic claim could be made.

### L3 — Positive Meniscus, rear singlet of B1

**L3:** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (spectral proxy; production supplier unspecified). f = +106.805221 mm.

L3 is a positive meniscus in the same very-low-dispersion coordinate class as L2. Together L2 and L3 carry the positive power of the first group while L1 provides a weaker negative component. B1 as a whole is the positive lead group and undergoes the largest objectward W→T displacement, +51.10 mm in the patent sign convention.

### L4 — Negative Meniscus, front singlet of B2

**L4:** nd = 1.83481, νd = 42.7. Glass: 835427 class (vendor unresolved). f = −13.755745 mm.

L4 is a negative meniscus and the strongest negative singlet at the front of B2. B2 is the principal negative group immediately behind the positive front group. Its full-group EFL is −10.577043 mm, so its in-situ role is much stronger than would be conveyed by treating any one B2 element in isolation.

The patent describes B2 as negative-negative-positive and links that three-element arrangement to correction of wide-angle field curvature and lateral chromatic aberration (¶¶0077–0078). Example 6 uses three air-separated singlets rather than a cemented B2 pair.

### L5 — Biconcave Negative (1× Asph), second singlet of B2

**L5:** nd = 1.58313, νd = 59.4. Glass: S-BAL42 (spectral proxy; production supplier unspecified). f = −19.835154 mm.

L5 is a biconcave negative element with its object-side surface 8A aspherical. Its lower index and much higher Abbe number than L4 and L6 give B2 a broad dispersion spread rather than a set of similar glasses. The 8A asphere is also the largest aspheric departure in the design at the stored 7.75 mm semi-diameter derived from the patent's 15.50 mm effective diameter, so L5 combines substantial negative power with a significant non-spherical correction surface.

### L6 — Biconvex Positive, rear singlet of B2

**L6:** nd = 1.94595, νd = 18.0. Glass: 946180 high-dispersion-flint class (vendor unresolved). f = +30.242077 mm.

L6 is a biconvex positive element made from the highest-dispersion coordinate in the prescription. Its positive power opposes the two negative singlets geometrically while its very low Abbe number gives B2 a strong dispersion lever. This supports the patent's statement that the B2 composition is arranged to manage wide-angle field curvature and lateral color, with a coordinate-compatible catalog curve used only as a spectral proxy.

### L7 — Biconvex Positive (2× Asph), front singlet of B3

**L7:** nd = 1.85135, νd = 40.1. Glass: 851401 class (vendor unresolved). f = +24.080129 mm.

L7 is a biconvex positive singlet whose two faces, 13A and 14A, are both aspherical. It begins the positive B3 relay directly after the long B2-to-B3 variable gap. The complete B3 group has EFL +20.936497 mm.

Paragraph 0079 explains that Examples 6 and 7 use four elements in B3: a positive singlet, a cemented positive-negative pair, and a rear positive singlet. The patent attributes the multiple positive elements to distributing positive power, reducing manufacturing sensitivity, and shifting the group's principal point objectward so that the B2–B3 separation can become small near telephoto.

### D2 — L8 Biconvex Positive + L9 Biconcave Negative, cemented pair of B3

**L8:** nd = 1.69350, νd = 53.2. Glass: S-LAL13 (spectral proxy; production supplier unspecified). f = +28.981050 mm.\
**L9:** nd = 2.00100, νd = 29.1. Glass: 001291 high-index-lanthanum class (vendor unresolved). f = −15.499430 mm.

D2 combines a moderate-dispersion positive L8 with a very high-index, higher-dispersion negative L9. Their standalone powers are opposite, and the cemented pair itself is net negative, with computed EFL −36.428420 mm. That negative cemented contribution sits inside the overall positive B3 group, where L7 and L10 supply enough positive power to bring the complete group to +20.936497 mm.

This distinction between standalone, cemented-net, and whole-group power is important: the cemented pair is not a self-contained positive relay even though it lies inside a positive functional group.

### L10 — Biconvex Positive, rear singlet of B3

**L10:** nd = 1.60311, νd = 60.6. Glass: 603606 crown class (vendor unresolved). f = +28.712535 mm.

L10 is the final positive singlet of B3. Its high Abbe number relative to the negative L9 helps complete the dispersion balance of the group without requiring a second cemented junction. B3 terminates immediately before the stop gap; the patent places SP after B3 in Examples 4–7 (¶0019).

### D3 — L11 Biconcave Negative (1× Asph) + L12 Positive Meniscus, cemented B4

**L11:** nd = 1.85135, νd = 40.1. Glass: 851401 class (vendor unresolved). f = −13.615048 mm.\
**L12:** nd = 1.80518, νd = 25.5. Glass: S-TIH6 (spectral proxy; production supplier unspecified). f = +26.969855 mm.

B4 is entirely represented by the D3 cemented pair: a biconcave negative L11 followed by a positive meniscus L12. The object-side face of L11 is aspherical surface 21A. Recomputed as a cemented unit, D3 has EFL −27.354152 mm, identical to the B4 group power because no other element belongs to B4.

The patent specifies this negative-positive cemented construction for B4 in every embodiment (¶0080). B4 moves objectward by +12.38 mm from wide to tele in the published state table.

### L13 — Biconvex Positive, front singlet of B5

**L13:** nd = 1.59282, νd = 68.6. Glass: 593686 low-dispersion-crown class (vendor unresolved). f = +40.655482 mm.

L13 is a biconvex positive singlet at the front of the positive B5 group. Its relatively high Abbe number and moderate index contrast with the high-index negative member that follows. B5's complete group EFL is +18.421837 mm.

Paragraph 0081 describes Examples 3–7 as using a positive singlet, a cemented negative-positive pair, and another positive singlet in B5. As in B3, the patent states that distributing positive power across multiple positives reduces individual-element manufacturing sensitivity.

### D4 — L14 Negative Meniscus + L15 Biconvex Positive, weak cemented pair of B5

**L14:** nd = 2.00100, νd = 29.1. Glass: 001291 high-index-lanthanum class (vendor unresolved). f = −22.392014 mm.\
**L15:** nd = 1.51742, νd = 52.4. Glass: 517524 crown class (vendor unresolved). f = +22.503133 mm.

L14 and L15 have nearly equal-magnitude standalone focal lengths of opposite sign. Their cemented combination is correspondingly weak, with computed EFL +2125.507870 mm. This is not evidence that either element is optically unimportant: the large individual powers and large dispersion contrast can still alter aberrations strongly while their first-order powers nearly cancel.

In situ, the surrounding positive L13 and L16 dominate the net B5 power, bringing the complete group to +18.421837 mm. The near cancellation of D4 is therefore an example of why cemented-net power and element-level correction function should be kept conceptually separate.

### L16 — Biconvex Positive, rear singlet of B5

**L16:** nd = 1.48749, νd = 70.2. Glass: 487702 low-dispersion-crown class (vendor unresolved). f = +31.216298 mm.

L16 is the rear biconvex positive singlet of B5 and uses one of the lowest-dispersion coordinates in the rear half of the design. B5 follows the same sampled zoom trajectory as B3, as stated in ¶0024 and reproduced by the W/M/T spacing solution.

### D5 — L17 Negative Meniscus (1× Asph) + L18 Positive Meniscus, cemented B6 focus group

**L17:** nd = 1.85135, νd = 40.1. Glass: 851401 class (vendor unresolved). f = −12.496889 mm.\
**L18:** nd = 1.69895, νd = 30.1. Glass: 699301 flint class (vendor unresolved). f = +18.084611 mm.

D5 is the complete B6 focus group. L17 is a negative meniscus with aspherical object-side surface 31A; L18 is a positive meniscus cemented to it. Their standalone focal lengths are −12.496889 mm and +18.084611 mm, while the cemented pair is net negative at −37.125504 mm. Because B6 contains no additional elements, this cemented-net value is also the B6 group EFL.

The patent explicitly uses B6 as the focusing group and states that Examples 5, 6, and 8 cement the negative and positive members together (¶0082). It also links the two-element focus group to lower moving mass and discusses the ratio of the negative and positive member focal lengths as part of lateral-chromatic control (¶¶0070–0072). The present data models only the published infinity-focus zoom positions; no finite-object B6 displacement is invented.

## Glass Identification and Selection

The patent publishes only d-line refractive index `nd` and Abbe number `νd` for Example 6. It does not name vendor glasses and does not publish element-level `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The final data uses coordinate classes and qualified spectral proxies without asserting production-glass supplier identities.

Cross-catalog comparison shows why that restraint is necessary: several rounded `nd/νd` pairs correspond to more than one authoritative catalog family at source precision. The labels below are consequently descriptive classes, not manufacturer assignments.

| Data glass label | nd | νd | Elements | Design role visible from the prescription |
|---|---:|---:|---|---|
| 911353 class (vendor unresolved) | 1.91082 | 35.3 | L1 | high-index negative front member |
| S-FPL51 (spectral proxy; production supplier unspecified) | 1.49700 | 81.5 | L2, L3 | very-low-dispersion positive members in B1 |
| 835427 class (vendor unresolved) | 1.83481 | 42.7 | L4 | strong negative B2 member |
| S-BAL42 (spectral proxy; production supplier unspecified) | 1.58313 | 59.4 | L5 | aspheric negative B2 member |
| 946180 high-dispersion-flint class (vendor unresolved) | 1.94595 | 18.0 | L6 | very-high-dispersion positive B2 member |
| 851401 class (vendor unresolved) | 1.85135 | 40.1 | L7, L11, L17 | repeated aspheric/powered members in B3, B4, B6 |
| S-LAL13 (spectral proxy; production supplier unspecified) | 1.69350 | 53.2 | L8 | positive half of B3 cemented pair |
| 001291 high-index-lanthanum class (vendor unresolved) | 2.00100 | 29.1 | L9, L14 | high-index negative cemented members |
| 603606 crown class (vendor unresolved) | 1.60311 | 60.6 | L10 | rear positive of B3 |
| S-TIH6 (spectral proxy; production supplier unspecified) | 1.80518 | 25.5 | L12 | positive half of negative B4 cemented pair |
| 593686 low-dispersion-crown class (vendor unresolved) | 1.59282 | 68.6 | L13 | front positive of B5 |
| 517524 crown class (vendor unresolved) | 1.51742 | 52.4 | L15 | positive half of B5 cemented pair |
| 487702 low-dispersion-crown class (vendor unresolved) | 1.48749 | 70.2 | L16 | rear positive of B5 |
| 699301 flint class (vendor unresolved) | 1.69895 | 30.1 | L18 | positive member of B6 focus doublet |

The most conspicuous chromatic strategy in the raw coordinates is the repeated pairing of lower-dispersion positive members with higher-dispersion negative or corrective members. B1 uses νd = 81.5 positive glass against the νd = 35.3 front negative; B3 pairs νd = 53.2 positive L8 with νd = 29.1 negative L9; B5 pairs νd = 29.1 negative L14 with νd = 52.4 positive L15; and B6 combines νd = 40.1 negative L17 with νd = 30.1 positive L18. These are conventional dispersion-balancing relationships visible from `nd/νd`, not evidence of apochromatic correction.

No APO, anomalous-partial-dispersion, fluorite, or specific ED-brand claim is made. Even the 1.49700/81.5 coordinate, although characteristic of very low dispersion, is not assigned a vendor-specific Sellmeier model because the patent does not uniquely identify one.

All 18 elements now resolve to compatible catalog dispersion curves. L2/L3 use S-FPL51, L5 uses S-BAL42, L8 uses S-LAL13, and L12 uses S-TIH6 as qualified spectral proxies. Their patent coordinates are unchanged and their production suppliers remain unspecified. The glass table above records these qualified matches.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**.

The patent directly identifies B6 as the focus group (¶0026) and gives the mathematical definition of focus sensitivity (¶¶0031–0032). It also publishes infinity-focus zoom trajectories and Table 1 focus-sensitivity values. What Example 6 does not publish is a finite-object variable-spacing row, a close-focus B6 displacement, a finite-object magnification, or an object-distance reference plane suitable for reconstructing the production mechanism.

Accordingly, every focus vector in the data repeats the infinity-focus spacing at each of the three zoom positions. The data field `closeFocusM: 0.05` records Canon's marketed wide-end minimum focusing distance only; Canon separately specifies 0.85 m at telephoto. Neither number is converted into an internal B6 shift.

From the final prescription, finite-difference translation of B6 at infinity gives focus sensitivities of:

- **ESW = −0.709798533** at wide angle;
- **EST = −2.900608411** at telephoto;
- **EST/ESW = 4.086523534**.

ESW and EST/ESW round to the patent's Table 1 values, while the recomputed EST differs slightly from the printed −2.903: the rounded prescription gives −2.900608, a +0.002392 difference. This source-precision discrepancy does not require or justify constructing a close-focus state. The larger magnitude at telephoto means that a given axial B6 displacement produces a larger image-plane shift at the tele endpoint; this is a paraxial sensitivity statement, not a claim about the unpublished production focus travel.

The focus doublet itself illustrates the distinction among three levels of power. L17 alone is −12.496889 mm, L18 alone is +18.084611 mm, and the cemented B6 pair is −37.125504 mm. In the complete zoom, the practical image-plane response of that group is further modified by the magnification of the optics before and after B6, which is why the focus sensitivity varies strongly with zoom position.

## Aspherical Surfaces

Example 6 contains five aspherical surfaces: **8A, 13A, 14A, 21A, and 31A**. They occur on L5, both faces of L7, L11, and L17 respectively.

Paragraph 0085 uses the standard conic form employed by LensVisualizer:

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+
A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+A_{14}h^{14}.
$$

The patent's `K` therefore maps directly to the data-file conic constant. There is no alternative `κ` convention to convert. Because the prescription is not scaled, every coefficient below is transcribed at its original dimensional scale.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 8A | −2.88261e−1 | 5.18781e−6 | 3.53315e−7 | −1.05067e−8 | 8.98958e−11 | −1.09215e−13 | −1.59647e−15 |
| 13A | −1.48216e0 | 6.19282e−6 | 9.61653e−9 | 7.61929e−10 | −7.64441e−12 | 0 | 0 |
| 14A | 0 | 8.37711e−6 | 0 | 0 | 0 | 0 | 0 |
| 21A | 3.92664e0 | 2.64469e−5 | −2.16176e−8 | 4.35581e−9 | −5.19006e−11 | 0 | 0 |
| 31A | 0 | 4.85523e−6 | 1.67665e−7 | −2.66552e−9 | 2.25666e−11 | 0 | 0 |

At stored semi-diameters obtained by halving the patent's published effective diameters, the computed asphere-minus-sphere departures are:

| Surface | Semi-diameter | Departure |
|---|---:|---:|
| 8A | 7.75 mm | +54.023 µm |
| 13A | 6.50 mm | −19.285 µm |
| 14A | 6.50 mm | +14.954 µm |
| 21A | 6.30 mm | +16.240 µm |
| 31A | 6.55 mm | +16.426 µm |

Surface 8A therefore carries the largest absolute departure among the five at the stored clear semi-diameter derived from the published effective diameter. Surface 21A has the only strongly positive conic constant; its authored 6.30 mm semi-diameter remains well within the real conic domain. All five aspheres also pass the final data's actual rim-slope and edge-geometry checks.

No manufacturing process for these aspheres—molded, polished, or hybrid—is specified in the material used for this transcription, so no fabrication method is assigned.

## Conditional Expressions

The patent is organized around the focusing behavior of the rear negative group and gives eleven principal inequalities. The final prescription closely tracks the Example 6 Table 1 values and satisfies the stated inequalities as follows:

| Condition | Patent inequality | Computed Example 6 value | Result |
|---|---|---:|---|
| EST/ESW | 3.50 < EST/ESW < 10.00 | 4.086524 | satisfied |
| f6/M6 | −5.00 < f6/M6 < −0.90 | −1.497600 | satisfied |
| M6/LT | 0.10 < M6/LT < 0.25 | 0.159544 | satisfied using Table 1 LT convention |
| Rr/M6 | 0.50 < Rr/M6 < 9.00 | 2.096410 | satisfied |
| M1/M2 | −30.0 < M1/M2 < −2.0 | −7.352518 | satisfied |
| SKW/ft | 0.030 < SKW/ft < 0.090 | 0.048969 | satisfied |
| SKT/LT | 0.030 < SKT/LT < 0.280 | 0.226863 | satisfied using Table 1 LT convention |
| ESW | −1.20 < ESW < −0.50 | −0.709799 | satisfied |
| EST | −4.50 < EST < −1.70 | −2.900608 | satisfied |
| f6/ft | −0.30 < f6/ft < −0.10 | −0.173971 | satisfied |
| f6n/f6p | −0.90 < f6n/f6p < −0.40 | −0.691023 | satisfied |

Two of these expressions expose an internal inconsistency in the patent's definition of `LT`. Paragraph 0045 defines LT as the distance from the first lens surface to the last lens surface. From the rounded Example 6 prescription that distance is 119.87 mm at telephoto. The published Table 1 values `M6/LT = 0.160` and `SKT/LT = 0.227`, however, are reproduced only when LT is taken as the numerical table's tele **lens total length**, 155.38 mm, which extends to the image plane.

Using the prose definition would give `M6/LT ≈ 0.2068` and `SKT/LT ≈ 0.2941`; the latter would no longer match Table 1 and would exceed the claim-7 upper bound of 0.280. The analysis therefore preserves the contradiction. The 155.38 mm convention is used only to reproduce the patent's Table 1 conditional values; it is not substituted for the normalized LensVisualizer active track.

## Image Stabilization

Paragraph 0029 states that image shake is corrected by moving B2 with a component perpendicular to the optical axis, and notes that B4 could alternatively be moved for the same purpose. This is a patent design statement about lateral group motion.

The model represents the centered sequential prescription and the axial W/M/T zoom states only. It does not contain a decenter range or a dynamic stabilization state, so no stabilization displacement, correction angle, or performance quantity is inferred. The B2 group remains the patent's designated stabilization candidate in the interpretation of the design, but the LensVisualizer record does not simulate that motion.

## Verification Summary

Independent paraxial recomputation of the modeled prescription used sequential height/reduced-angle tracing and a separate ABCD matrix product. The two methods agree at the matrix level within numerical precision for the three published zoom states.

| State | Patent focal length | Recomputed EFL | Recomputed BFL | Air-equivalent rear spacing |
|---|---:|---:|---:|---:|
| Wide | 9.06 mm | 9.062966611 mm | 10.446804578 mm | 10.457589641 mm |
| Middle | 24.18 mm | 24.178096589 mm | 25.484088007 mm | 25.487589641 mm |
| Tele | 213.40 mm | 213.296029721 mm | 35.224494089 mm | 35.247589641 mm |

The small differences between recomputed EFL/BFL and the printed patent values are consistent with propagation of the patent's rounded three-decimal radii and two-decimal variable spacings. The tele EFL difference is approximately −0.104 mm, or −0.049% of the published value.

The paraxial f-number check requires active physical stop diameters of 9.860711 mm, 10.089709 mm, and 10.106983 mm at W/M/T to reproduce the patent's f/2.88, f/4.41, and f/5.77 values. All three lie inside the published 10.20 mm surface-20 clear envelope. The data therefore uses the patent's modeled f-number array for `nominalFno` while retaining f/2.8–5.6 as marketing metadata.

Surface-by-surface Petzval, computed as `φ/(n·n′)` through the last active refracting surface, sums to +0.001265336640 mm⁻¹, corresponding to a Petzval radius of +790.303520 mm under the adopted sign convention.

The patent effective diameters are used directly as clear apertures by halving them to obtain the data-file semi-diameters. No semi-diameter is reduced for layout. The minimum computed element edge thickness is 0.716020 mm at L12, and the maximum actual rim-slope angle is 44.235823° at surface 7. The tightest shared air gap is between surfaces 17 and 18: at the shared 6.40 mm clear band, sag intrusion is 93.9167% of the 0.57 mm axial gap, leaving +0.034675 mm physical clearance. The data consequently uses `gapSagFrac: 0.95` rather than shrinking the published aperture.

The modeled prescription contains exactly one stop, five aspherical surfaces, 18 elements, 13 air-separated assemblies, five cemented pairs, and six kinematic groups. The S12 dummy-plane omission, S20 stop correction, GB removal with air-equivalent rear spacing, absence of uniform scaling, and absence of a finite-focus reconstruction are all reflected consistently in the data and in this analysis.

## Sources and References

1. **JP 2016-148731 A**, Canon Inc., Takashi Okada, *Zoom lens and imaging device having the same*, published 2016-08-18. Numerical Example 6 is the prescription source. Relevant passages include ¶¶0017–0029, ¶¶0030–0045, ¶¶0076–0087, ¶0093, Figure 11, and Table 1.
2. **Canon Camera Museum — PowerShot G3 X.** Canon Inc. Product record: marketed June 2015; 8.8–220.0 mm lens; f/2.8–5.6 maximum aperture; 1.0-inch CMOS sensor; six-group zoom-lens description. https://global.canon/en/c-museum/product/dcc831.html
3. **Canon U.S.A. — PowerShot G3 X support/specifications.** Focal range 8.8–220 mm; maximum aperture f/2.8 W / f/5.6 T; focusing range 0.05 m–∞ W and 0.85 m–∞ T. https://www.usa.canon.com/support/p/powershot-g3-x
4. **OHARA optical glass catalog.** https://www.ohara-inc.co.jp/en/product/01000/
5. **HOYA Optics glass catalog.** https://www.hoya-opticalworld.com/english/
6. **SCHOTT Advanced Optics glass catalog.** https://www.us.schott.com/shop/advanced-optics/en/search/
7. **HIKARI / Nikon Business optical glass catalog.** https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/
8. **CDGM optical glass database.** https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. **SUMITA optical glass data.** https://sumita-opt.co.jp/en/download/
