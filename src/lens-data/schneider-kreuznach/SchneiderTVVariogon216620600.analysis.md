# SCHNEIDER-KREUZNACH TV-VARIOGON 20-600mm f/2.1-6.6

## Patent Reference and Design Identification

**Patent:** US 3,912,373<br>
**Application Number:** 396,427<br>
**Priority:** Germany 2,245,105, September 14, 1972<br>
**Filed:** September 12, 1973<br>
**Granted:** October 14, 1975<br>
**Inventor:** Karl Macher<br>
**Assignee:** Jos. Schneider & Co., Optische Werke<br>
**Title:** *High-Speed Varifocal Objective with Large Focal Range*<br>
**Embodiment analyzed:** Example 1, FIG. 1, TABLE I, TABLE IA, TABLE IB

The prescription is the first numerical embodiment of Macher's seven-component 30× varifocal objective. The patent describes a substantially fixed positive first component, movable negative second and third components, a fixed positive fourth component containing the diaphragm, movable negative fifth and sixth components, and a fixed positive seventh component, followed by a plane-parallel prism P. Example 1 contains 31 lenses L1-L31. Its cementing topology yields 22 air-separated lens members/groups, while the prism is a separate optical block and is not counted among the 31 lenses. [US 3,912,373, PDF pp. 8-10 (printed cols. 1-6), FIG. 1 and TABLE I.]

The production-lens identification is a strong correlation rather than a manufacturer-supplied patent-number attribution. Schneider-Kreuznach's historical Variogon material identifies the optical structure of the **TV-Variogon 2.1-6.6 / 20-600 mm** at the shortest focal length and infinity focus, describes 31 lenses in 22 lens members, and gives the same eight operational subcomponents: fixed 1.2, 4, and 7; movable 2, 3, 5, and 6; and focusing unit 1.1. It also describes the two zoom pairs as being driven reciprocally through a differential mechanism. The manufacturer page does not identify US 3,912,373 by number, so the correspondence is based on this convergent optical and mechanical evidence rather than an explicit manufacturer patent citation. [Schneider-Kreuznach, “What is a VARIOGON lens?”, Fig. 4 and “Zoom lenses for television.”]

The modeled production correlation applies a uniform scale of **20×** to every patent length. Thus TABLE IB's 1.0-29.6 mm source stations become 20-592 mm model stations. The marketed 20-600 mm range remains a separate product specification; 592 mm is the scaled source endpoint, not a redefinition of the marketed 600 mm endpoint. No radius, spacing, or refractive index is tuned to make the rounded patent table reproduce the marketed endpoint.

## Optical Architecture

This is a seven-component mechanically compensated zoom with component-power sequence **positive - negative - negative - positive - negative - negative - positive**. The independently recomputed component focal lengths, after the 20× scaling, are:

| Component | Patent TABLE IA ×20 (mm) | Computed from final model (mm) | Relative residual |
|---:|---:|---:|---:|
| 1 | +138.020 | +138.630 | +0.442% |
| 2 | -43.340 | -43.248 | -0.211% |
| 3 | -73.000 | -72.944 | -0.077% |
| 4 | +44.140 | +44.138 | -0.005% |
| 5 | -106.200 | -106.254 | +0.051% |
| 6 | -49.260 | -49.179 | -0.165% |
| 7 | +55.460 | +55.190 | -0.486% |

All seven reproduce the scaled TABLE IA values within 0.5%. This local agreement is considerably tighter than the accumulated system-level agreement over the full 30× range and is an important check on sign convention, element boundaries, media, and spacing transcription.

The design separates zooming into two movement regimes. From the wide end through the patent's intermediate focal length, components 2 and 3 move while components 5 and 6 remain fixed. At the intermediate station the first pair stops; in the upper subrange components 5 and 6 move while components 2 and 3 remain fixed. The final model preserves the small reversal of component 3 between the first two published stations before it proceeds imageward to the 290 mm scaled station. The patent attributes these motions to two linked mechanisms, and Schneider's historical description likewise refers to reciprocal drive of two optical zoom components. [US 3,912,373, PDF p. 10, printed col. 5; TABLE IB; Schneider-Kreuznach Variogon history.]

Component 4 is the fixed central positive unit and contains the aperture stop between L16 and L17. The source specifies only that diaphragm D lies in airspace d28. The final model therefore splits the scaled 2.4 mm d28 airspace into 1.2 mm before and 1.2 mm after a single `STO`; this stop position is a figure-based modeling inference, not a published dimension. The physical stop semi-diameter is likewise not published: it is calibrated to the final model's wide-state f/2.1 and then held fixed through zoom.

The rear plane-parallel prism P is retained optically through `rearPlates` rather than counted as a 32nd lens element. After scaling it is 66.0 mm thick at n_e = 1.518 and ν_e = 64.0, with the patent's 0.162 mm rear-face back-focus statement represented as a 3.24 mm rear gap to the authored image plane. The rounded prescription does not paraxially focus at that plane; the discrepancy is quantified below rather than removed by changing the source data.

The design is entirely spherical. No aspheric equation, coefficient table, or geometric asphere is published for Example 1, and the final data therefore contains no aspherical surfaces.

## Element-by-Element Analysis

The focal lengths in this section are **isolated-element focal lengths in air**, computed from the final data file. They are not in-situ contributions. Where lenses are cemented, the complete cemented assembly has its own independently computed net power, stated separately.

### Component 1 - Fixed Positive Front Assembly and Focusing Subcomponent

Component 1 is positive as an assembly even though its first two lenses are individually negative. The patent states that the component is substantially stationary during zooming and that L1 may have limited axial motion for focusing. [US 3,912,373, PDF pp. 8-10, printed cols. 2-5.]


#### L1 - Biconcave Negative

**L1:** n_e = 1.643, ν_e = 59.9. Glass: N-LAK21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -321.826 mm.

L1 is the front focusing member identified by the patent as the lens that may move axially for object-distance adjustment. Its negative isolated power should not be confused with the positive net power of component 1 as a whole. The final model does not assign it a finite-focus displacement because the patent gives no numerical travel.

#### L2 - Biconcave Negative

**L2:** n_e = 1.643, ν_e = 59.9. Glass: N-LAK21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -185.717 mm.

L2 is the second negative singlet in the otherwise positive front component. It remains part of the stationary zoom-side assembly; no independent motion is assigned to it.

#### L3 - Biconvex Positive

**L3:** n_e = 1.694, ν_e = 31.0. Glass: N-SF8 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +239.099 mm.

L3 is a positive singlet following the two front negative lenses. Its role here is described structurally rather than by assigning a specific aberration correction not quantified by the source.

#### L4-L5 - Cemented Doublet D1

**L4:** n_e = 1.680, ν_e = 54.9. Glass: LAC12 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +156.482 mm.

**L5:** n_e = 1.791, ν_e = 25.9. Glass: S-TIH23 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -129.555 mm.

The complete L4-L5 cemented assembly has a computed net focal length of **-868.181 mm** in air. This weak negative net power is distinct from the much stronger isolated powers of its two constituent lenses.

#### L6 - Biconvex Positive

**L6:** n_e = 1.643, ν_e = 59.9. Glass: N-LAK21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +225.956 mm.

L6 is a positive singlet in the rear half of component 1.

#### L7 - Biconvex Positive

**L7:** n_e = 1.643, ν_e = 59.9. Glass: N-LAK21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +288.114 mm.

L7 is another positive singlet in component 1. The patent lists L6-L8 as singlets rather than cemented members.

#### L8 - Positive Meniscus

**L8:** n_e = 1.643, ν_e = 59.9. Glass: N-LAK21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +330.345 mm.

L8 is the positive meniscus that terminates component 1 immediately before the first variable zoom airspace d15.

### Component 2 - First Movable Negative Zoom Component

Component 2 is the first movable negative zoom component. It comprises negative singlet L9 followed by the cemented L10-L12 triplet. Its computed net focal length is -43.248 mm, versus the scaled TABLE IA value -43.340 mm.


#### L9 - Negative Meniscus

**L9:** n_e = 1.792, ν_e = 47.2. Glass: N-LAF21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -89.424 mm.

L9 is a negative meniscus at the front of component 2 and is air-separated from the following triplet.

#### L10-L12 - Cemented Triplet T1

**L10:** n_e = 1.761, ν_e = 27.4. Glass: SF4 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +148.024 mm.

**L11:** n_e = 1.716, ν_e = 53.6. Glass: N-LAK8 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -29.371 mm.

**L12:** n_e = 1.723, ν_e = 29.3. Glass: SF1 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +58.402 mm.

The full cemented triplet has a computed net focal length of **-95.230 mm** in air. That assembly-level value, not the sign of any single member, is the appropriate standalone description of the triplet's net power.

### Component 3 - Second Movable Negative Zoom Component

Component 3 is a cemented two-lens negative component separated from component 2 by variable airspace d21 and from fixed component 4 by variable airspace d24. It is the member that shows the verified small reversal near the wide end before its longer imageward travel in the lower zoom subrange.

#### L13-L14 - Cemented Doublet D2


**L13:** n_e = 1.716, ν_e = 53.6. Glass: N-LAK8 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -40.313 mm.

**L14:** n_e = 1.727, ν_e = 29.0. Glass: S-TIH18 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +92.154 mm.

The L13-L14 doublet has a computed net focal length of **-72.944 mm**, effectively the same as the complete component because component 3 contains no other lenses.

### Component 4 - Fixed Positive Central Component and Aperture Stop

Component 4 is fixed during zooming and has the strongest positive component-level power in the system, with a computed focal length of +44.138 mm. The aperture stop lies between L16 and L17. The patent specifically locates diaphragm D in d28 but gives neither its exact fractional position within the gap nor its diameter. [US 3,912,373, PDF p. 9, printed col. 3; FIG. 1.]


#### L15 - Biconvex Positive

**L15:** n_e = 1.503, ν_e = 56.2. Glass: K10 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +130.611 mm.

L15 is the first positive singlet in component 4.

#### L16 - Biconvex Positive

**L16:** n_e = 1.503, ν_e = 56.2. Glass: K10 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +130.469 mm.

L16 is the second positive singlet and lies immediately ahead of the inferred stop plane.

#### L17-L18 - Cemented Doublet D3

**L17:** n_e = 1.499, ν_e = 66.8. Glass: BSC3 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +56.603 mm.

**L18:** n_e = 1.761, ν_e = 27.4. Glass: SF4 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -93.517 mm.

The post-stop L17-L18 doublet has a computed net focal length of **+128.880 mm** in air. The patent's general discussion favors multielement stationary fourth and seventh components, each including negative refracting material, as part of its aberration-control strategy; the present analysis does not assign a more specific aberration contribution to this doublet than the patent itself states. [US 3,912,373, PDF p. 8, printed col. 2.]

### Component 5 - First Upper-Range Movable Negative Component

Component 5 is a single cemented doublet. It is stationary in the lower zoom subrange and becomes movable after the 290 mm scaled station, while components 2 and 3 remain fixed.

#### L19-L20 - Cemented Doublet D4


**L19:** n_e = 1.761, ν_e = 27.4. Glass: SF4 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +40.756 mm.

**L20:** n_e = 1.734, ν_e = 28.5. Glass: S-TIH10 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -29.351 mm.

The complete L19-L20 doublet has a computed net focal length of **-106.254 mm**, matching the complete component-5 power because no additional lenses belong to this component. The patent specifically notes compound members in at least some components, particularly the fifth, as advantageous for suppressing spherical aberration; that statement is a source claim, not an independently decomposed aberration budget. [US 3,912,373, PDF p. 8, printed col. 2.]

### Component 6 - Second Upper-Range Movable Negative Component

Component 6 moves with component 5 in the upper zoom subrange. It contains an L21-L22 cemented pair followed by negative singlet L23. The complete component has a computed focal length of -49.179 mm.

#### L21-L22 - Cemented Doublet D5


**L21:** n_e = 1.761, ν_e = 27.4. Glass: SF4 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +42.986 mm.

**L22:** n_e = 1.792, ν_e = 47.2. Glass: N-LAF21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -32.923 mm.

The L21-L22 doublet has a computed net focal length of **-159.522 mm** in air.

#### L23 - Biconcave Negative

**L23:** n_e = 1.792, ν_e = 47.2. Glass: N-LAF21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -71.643 mm.

L23 is a negative singlet following the doublet. Together with the preceding cemented pair it yields the stronger negative component-level behavior verified from TABLE IA.

### Component 7 - Fixed Positive Rear Component

Component 7 is the fixed rear positive assembly. It contains eight lenses, including two cemented doublets, and precedes prism P. The patent's general discussion states that the stationary seventh component is preferably a multielement group including a negative refracting member; it also identifies the seventh component, and toward the upper end the first component, as especially relevant to aberration control. Those statements are retained at the component level rather than converted into unsupported per-element aberration assignments. [US 3,912,373, PDF p. 8, printed col. 2.]


#### L24 - Biconvex Positive

**L24:** n_e = 1.489, ν_e = 70.2. Glass: N-FK5 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +120.962 mm.

L24 is the first positive singlet of component 7.

#### L25-L26 - Cemented Doublet D6

**L25:** n_e = 1.489, ν_e = 70.2. Glass: N-FK5 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +76.204 mm.

**L26:** n_e = 1.694, ν_e = 31.0. Glass: N-SF8 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -236.454 mm.

The L25-L26 doublet has a computed net focal length of **+111.756 mm** in air.

#### L27 - Positive Meniscus

**L27:** n_e = 1.489, ν_e = 70.2. Glass: N-FK5 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +110.614 mm.

L27 is a positive meniscus between the first rear doublet and negative L28.

#### L28 - Negative Meniscus

**L28:** n_e = 1.792, ν_e = 47.2. Glass: N-LAF21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -56.177 mm.

L28 is a negative meniscus and is air-separated from both neighboring members.

#### L29-L30 - Cemented Doublet D7

**L29:** n_e = 1.792, ν_e = 47.2. Glass: N-LAF21 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = -43.070 mm.

**L30:** n_e = 1.489, ν_e = 70.2. Glass: N-FK5 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +52.098 mm.

The L29-L30 cemented pair has a computed net focal length of **-321.049 mm** in air.

#### L31 - Positive Meniscus

**L31:** n_e = 1.489, ν_e = 70.2. Glass: N-FK5 — native e-line compatible spectral proxy (supplier unresolved). Isolated f = +87.714 mm.

L31 is the final positive meniscus before the rear airspace and plane-parallel prism P.

## Glass Identification / Selection

TABLE I is explicitly tabulated in native **n_e / ν_e** coordinates. The data preserves those values with `indexReference: "e"`. Catalog curves are evaluated at C′/e/F′ before comparison; named curves below are compatible spectral proxies, not historical supplier or melt identifications. No source line indices or anomalous partial-dispersion values are invented. L17 uses the obsolete HOYA BSC3 polynomial as a qualified native e-line proxy: Δne = +0.001136 and Δνe = −1.826, within the unchanged compatibility guards. This identifies a usable dispersion curve, not the production supplier. Coefficients: [HOYA July 7, 2026 Zemax catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), BSC3 row.

| Native coordinate | Elements / optical block | Identification status |
|---|---|---|
| n_e 1.643, ν_e 59.9 | L1, L2, L6, L7, L8 | N-LAK21 spectral proxy |
| n_e 1.694, ν_e 31.0 | L3, L26 | N-SF8 spectral proxy |
| n_e 1.680, ν_e 54.9 | L4 | LAC12 spectral proxy |
| n_e 1.791, ν_e 25.9 | L5 | S-TIH23 spectral proxy |
| n_e 1.792, ν_e 47.2 | L9, L22, L23, L28, L29 | N-LAF21 spectral proxy |
| n_e 1.761, ν_e 27.4 | L10, L18, L19, L21 | SF4 spectral proxy |
| n_e 1.716, ν_e 53.6 | L11, L13 | N-LAK8 spectral proxy |
| n_e 1.723, ν_e 29.3 | L12 | SF1 spectral proxy |
| n_e 1.727, ν_e 29.0 | L14 | S-TIH18 spectral proxy |
| n_e 1.503, ν_e 56.2 | L15, L16 | K10 spectral proxy |
| n_e 1.499, ν_e 66.8 | L17 | BSC3 native e-line proxy |
| n_e 1.734, ν_e 28.5 | L20 | S-TIH10 spectral proxy |
| n_e 1.489, ν_e 70.2 | L24, L25, L27, L30, L31 | N-FK5 spectral proxy |
| n_e 1.518, ν_e 64.0 | Prism P | N-BK7 spectral proxy |

The palette spans a wide range of refractive index and Abbe number, but those two coordinates alone do not establish partial-dispersion behavior or exact historical melt identity. Chromatic tracing uses the qualified catalog curves where compatible; exact historical dispersion remains unknown.

## Focus Mechanism

The patent states that front lens L1 of component 1 may be limitedly adjusted axially for focusing. It does not publish the L1 travel, any corresponding finite object distance, or a finite-conjugate spacing table. [US 3,912,373, PDF p. 10, printed col. 5.]

The final model accordingly uses **NO_INTERNAL_RECONSTRUCTION**. Every zoom-dependent `var` entry has identical infinity and close values, so the viewer receives the nine published infinity-focus zoom geometries without invented internal focus motion. The stored `closeFocusM = 0.85 m` is secondary product metadata from a 1983 *Broadcast Engineering* specification table; it is not used as an optical constraint and does not certify a modeled 0.85 m state.

This distinction is important because the source gives enough information to identify the focusing *mechanism* but not enough to determine a unique focusing *law*. A production minimum object distance by itself cannot resolve the missing L1 displacement and reference geometry.

## Verification Summary

### Scaled system behavior from the rounded prescription

The table below is computed directly from the final `.data.ts`, including prism P. “Station” is the 20× transform of the TABLE IB focal-length label; “EFL” is the Gaussian effective focal length of the rounded implemented prescription; “BFD” is the Gaussian back focal distance measured from the rear face of prism P; and “modeled f/#” is the f-number the one wide-open iris gives at that station, as stored in `nominalFno`.

| Scaled TABLE IB station (mm) | Computed EFL (mm) | Computed BFD from prism rear (mm) | Modeled f/# |
|---:|---:|---:|---:|
| 20 | 19.833 | 4.648 | 2.100 |
| 40 | 39.602 | 4.694 | 2.094 |
| 80 | 79.014 | 4.842 | 2.087 |
| 140 | 137.664 | 5.212 | 2.087 |
| 200 | 196.048 | 5.731 | 2.096 |
| 290 | 283.255 | 6.819 | 2.081 |
| 400 | 394.669 | 9.666 | 2.899 |
| 500 | 503.895 | 13.222 | 3.701 |
| 592 | 613.643 | 17.433 | 4.507 |

These values expose a contradiction inside the source. It is recorded as an `unresolved` entry in `sourceErrata` and is not reconciled by retuning. Every radius, thickness, index, and TABLE IB airspace in the file is the printed value multiplied by 20: the reprint of TABLE I in claim 3 agrees with the description, and the two airspace sums that must stay constant, d15 + d21 + d24 = 117.74 mm and d31 + d34 + d39 = 32.60 mm, hold at all nine stations. Even so, the computed EFL departs from the scaled station labels by −0.83% at 20 mm, −2.33% at 290 mm, and +3.66% at 592 mm, and the Gaussian BFD runs from 4.648 mm to 17.433 mm where the patent's 0.162 mm back focus from the rear face of prism P scales to a fixed 3.24 mm.

The component table locates most of the disagreement. Component 1 computes +138.630 mm against TABLE IA's +138.020 mm, and component 7 computes +55.190 mm against +55.460 mm. Rounding the printed radii and thicknesses to 0.01 and the indices to 0.001 allows a one-standard-deviation spread of ±0.22 mm and ±0.09 mm on those two focal lengths, so each residual is close to three times its spread, while components 2-6 lie within 1.6 times theirs. Example 2 (TABLE II) prints components 1-6 at 1.257 times the Example 1 values, and its first component shows the same excess: 8.712 against TABLE IIA's 8.675 in patent units. With component 1 scaled uniformly to the TABLE IA focal length and nothing else changed, the nine stations compute 19.865, 39.791, 79.786, 139.886, 200.377, 291.764, 402.010, 503.444, and 597.102 mm, between −0.68% and +0.86% of their labels, and the Gaussian BFD stays between 3.90 mm and 4.64 mm. TABLES IA and IB therefore describe a first component about 0.44% stronger than the one TABLE I prints. No single printed radius, thickness, or index is isolated: a change to any one of several values in L6-L8 (r11 to r15, or one of the three indices) would bring component 1 to the TABLE IA focal length and every station within 1% of its label, both examples print those values consistently, and rounding alone is unlikely but not excluded. The file keeps the printed prescription.

### Aperture model

The patent prints no per-station f-number. Its text states that, with the diaphragm opening left unchanged, the relative aperture has a constant value of 1:2.1 from the minimum to the intermediate focal length and decreases progressively to a final 1:6.3 at the maximum focal length. It then describes, as a further feature shown in FIG. 1 and claimed in claims 8-10, a diaphragm coupled to the zoom mechanism that opens in proportion to the focal length in the upper subrange and holds 1:2.1 over the entire range. [US 3,912,373, PDF p. 10, printed col. 5; PDF p. 15, printed col. 16.]

The source does not publish the physical iris diameter. The file models the unchanged opening (`zoomApertureModel: "fixed-iris"`). The authored `STO` semi-diameter, **22.20096 mm**, is the paraxial marginal-ray height of f/2.1 at the 20 mm station. The wide-open iris used in tracing is the height the real f/2.1 marginal ray reaches at the stop at that station, 22.353 mm, and it is kept at every station. `nominalFno` stores the f-numbers that one radius gives: f/2.094, 2.087, 2.087, and 2.096 at 40, 80, 140, and 200 mm by real marginal ray, and f/2.081, 2.899, 3.701, and 4.507 at 290, 400, 500, and 592 mm paraxially, because the real ray of that aperture cannot be traced to the stop at those stations.

Nothing ahead of the stop moves above the intermediate focal length, so with an unchanged iris the f-number rises in proportion to the focal length. By the patent's own focal lengths that gives 2.1 × 29.6 / 14.5 = 4.29 at the maximum focal length, not the 1:6.3 its text states; the file's f/4.507 is the same ratio taken with the computed focal lengths, 2.0806 × 613.643 / 283.255. The model reproduces neither the patent's 1:6.3 nor the marketed f/6.6 and adopts neither; `apertureMarketing` and the product name retain the separate marketed designation.

### Petzval, semi-diameters, and geometry scope

The final model's surface-by-surface Petzval sum is **-0.00155146 mm⁻¹**, computed as φ/(n·n′) at each refracting surface; the two plane prism faces contribute zero. This is a first-order curvature sum, not an independently measured image-field result.

No semi-diameters are published in the patent. The final semi-diameter profile is therefore modeled from the patent/manufacturer silhouettes, secondary clear-aperture context, and code-checked geometry. The portable checks find a minimum positive element edge thickness of 0.385 mm, maximum spherical rim slope of 41.56°, and positive shared-gap clearance under the current 90% gap-sag policy. The original representative exact meridional sample covered 41 zoom samples and 328 rays at ±30% of the physical stop with no misses; its highest surface utilization was 81.68%. A wider independent check at ±40% of the physical stop and ±60% of the modeled half-field still traces all 328 rays but reaches **102.07%** of surface 39's stored semi-diameter (8.574 mm ray height versus 8.400 mm SD). At the project's default ±83% pupil fraction, only 206 of 328 attempted rays complete the same exact-spherical path, and the worst completing ray reaches 191.22% of the stored surface-39 SD.

The missing source apertures cannot be repaired by merely enlarging the stored profile. An independent paraxial full-stop envelope with 8% clearance would require expansion on 32 surfaces; when those proposed apertures are subjected to the current spherical geometry rules, L3, L4, L6, L7, and L8 acquire negative modeled edge thickness and 90 sampled air-gap states fail the shared-band clearance rule. The semi-diameters must therefore be treated as schematic interior-pupil geometry pending source-backed apertures or a defensible replacement model. They are not production clear-aperture dimensions and do not establish full-pupil vignetting performance or LensVisualizer production-render acceptance.

### Rear prism and image plane

Prism P remains an optically active, source-listed rear block but is not included in the 31-lens count. In the final model it is represented with `rearPlates`, with 66.0 mm physical thickness and 3.24 mm of authored air to the image plane after its rear face. This preserves the scaled source geometry even though the rounded prescription's Gaussian focus does not coincide with that authored plane.

## Sources / References

1. Karl Macher, **US Patent 3,912,373**, *High-Speed Varifocal Objective with Large Focal Range*, filed September 12, 1973; priority Germany 2,245,105, September 14, 1972; granted October 14, 1975. Prescription used: Example 1, FIG. 1, TABLE I, TABLE IA, TABLE IB, supplied PDF pp. 1 and 8-10. Public patent record: <https://patents.google.com/patent/US3912373A/en>.
2. Schneider-Kreuznach, **“What is a VARIOGON lens?”**, especially “Zoom lenses for television” and the caption identifying the optical structure of the 30-fold **TV-Variogon 2.1-6.6 / 20-600 mm** at shortest focal length and infinity focus: <https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/what-is-a-variogon-lens>.
3. Schneider-Kreuznach, **“Variogon - Zoom Lenses”** historical PDF: <https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf>.
4. *Broadcast Engineering Spec Book*, December 1983, Schneider TV lens table. Used only for secondary product context such as the 0.85 m minimum object distance; its BFD reference plane is not used to override the patent/model reference plane: <https://www.worldradiohistory.com/Archive-All-BC-Engineering/BE/80s/BE-1983-12-SB.pdf>.


## Integration audit

The October 2, 2026 UTC audit reviewed the exact local patent figure, checked optical rims against edge and gap constraints, and reviewed compatible catalog dispersion. The sibling audit log records retained dimensions, changes and unresolved source limits. Catalog curves are qualified spectral proxies, with production supplier/melt identity unconfirmed.

## Image-format reference

Schneider’s [manufacturer advertisement](https://www.worldradiohistory.com/Archive-All-BC-Engineering/BME/80s/BME-1980-09.pdf) lists the 2.1/20–600 among lenses for 1¼-inch pickup tubes. `imageFormat: "1.25-inch-tube"` uses the nominal 16 × 12 mm target documented in LENS_MOUNT_FORMAT_OPTIONS.md. The patent correlation remains qualified; this does not identify a production camera/prism or establish full-pupil coverage.

At wide infinity, the current aperture-contained chief-ray edge reaches about 8.72 mm, 87% of the nominal 10.00 mm tube-format corner. Surface 21 limits that field; the unclipped corner path reaches about 18.18 mm radius there versus the authored 15.8 mm. This remains a qualified reconstruction with inferred optical rims; the format assignment does not establish production corner illumination.
