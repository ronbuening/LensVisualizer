## Patent Reference and Design Identification

**Patent:** KR 10-1825708 B1\
**Application Number:** 10-2015-0147546\
**Filed:** 2015-10-22\
**Granted:** 2018-01-30\
**Inventors:** Jae Myung Ryu; Hae Jin Lee; Jung Du Lee\
**Assignee:** Samyang Optics Co., Ltd.\
**Title:** 텔레포토 단초점 렌즈계 및 이를 포함한 촬영 장치\
**Embodiment analyzed:** Numerical Example 1 / 제1 수치 실시예

The modeled prescription is Numerical Example 1 of KR 10-1825708 B1, correlated to the first-generation SAMYANG AF 50mm f/1.4 FE. The production correlation is supported by convergent evidence: the patent example contains 9 elements in 8 air-separated groups, three aspherical elements, a 51.038 mm-class focal length, F/1.44, a 23.50° half field, and a published close-focus magnification of 0.15 in magnitude. Those values align with the manufacturer's marketed 50 mm f/1.4, 9-element/8-group, three-aspherical-element, 47.0° full-frame lens with 0.45 m minimum focus and 0.15× maximum magnification.

The data file keeps marketing and design values distinct. The marketed focal length and maximum aperture are 50 mm and f/1.4, while the independently verified design values are 51.038626 mm and f/1.44. The optical prescription is unscaled (`s = 1.0`), so the patent radii, thicknesses, refractive indices, and aspherical coefficients are retained at their source scale.

The patent itself describes the design as a telephoto-type standard-angle lens. Under the LensVisualizer project taxonomy, however, the modeled system is not classified as telephoto because its normalized total track exceeds its effective focal length. The air-equivalent model track is 110.669397 mm, giving `TL/EFL = 2.16835`. It is likewise not retrofocus because the rear focal distance is smaller than the effective focal length.

## Optical Architecture

Numerical Example 1 is a 9-element, 8-group, all-refractive prime with three patent functional groups arranged positive-negative-positive. G1 contains L1 through L6 and is fixed during focusing; G2 consists solely of L7 and translates for focus; G3 contains L8 and L9 and remains fixed. The aperture stop lies between G1 and G2, immediately ahead of L7, as shown in patent Figure 1 and described in ¶0048-0050.

The patent characterizes G1 as a modified double-Gauss arrangement. Its independently computed paraxial EFL is +45.011 mm. The single-element G2 has an EFL of -53.438 mm, while G3 has a net EFL of +58.886 mm. These are isolated-group paraxial EFLs computed with each functional group placed in air; they should not be confused with the groups' position-dependent contribution inside the complete system or with standalone element powers.

The architecture is distinguished by the very small moving focus group. Patent ¶0049-0055 explicitly makes L7/G2 the sole focusing lens while G1 and G3 remain fixed, reducing the moving optical mass relative to a multi-element focusing group. The rear group then combines a strong positive aspherical element with a negative biconcave last element that the patent identifies as a field flattener near the image plane (¶0051-0052).

The ordinary sequential model omits the patent's optional S19-S20 optical-filter plate. Patent ¶0075 permits the optical system to be used without that plate, and the project specification excludes generic sensor-side filters and cover plates. Its infinity optical effect is preserved by replacing the physical `19.5 + 2.5 mm glass + 1.02158 mm air` rear path with a 22.1697867511 mm air-equivalent gap after surface 18. Patent D5 is printed after IMG and is not treated as a pre-image spacing.

The patent publishes no clear-aperture table. The stop position is source-published, but its physical semi-diameter and all other surface semi-diameters are modeling inferences. The stop semi-diameter, 16.742525 mm, was back-solved from the verified f/1.44 model. The remaining semi-diameters were derived from exact marginal/chief-ray tracing in both defined focus states and checked against the patent optical section, edge thickness, actual aspheric rim slope, cross-gap intrusion, and off-axis containment.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.64769, νd = 33.84. Glass: 648338 class (vendor not identified by patent). f = -72.046 mm.`

L1 is the front negative meniscus. It is not powerful enough by itself to define the front subsystem: its role must be read together with the immediately following positive L2. Patent ¶0044-0046 specifies that the first two elements have a positive combined focal length, allowing the following element diameters to be kept smaller.

The independently computed L1+L2 subsystem, including the actual 0.2 mm air gap between them, has `f12 = +72.4721 mm`. That is a subsystem result; L1's standalone focal length remains negative.

### L2 — Plano-Convex Positive

`nd = 2.00069, νd = 25.46. Glass: 001255 class (vendor not identified by patent). f = +36.092 mm.`

L2 is the strongest positive element in the front pair and has a plane rear surface in this numerical example. Patent ¶0046 places a positive lens immediately in front of the first aspherical element so that the beam is already converging when it reaches L3. The patent's stated purpose is to reduce the required diameter of that asphere and lower assembly sensitivity.

The positive L2 more than offsets L1's negative standalone power in the two-element front subsystem. This is a clear case where the combined subsystem behavior differs from the sign of the first element alone.

### L3 — Double-Aspherical Negative Meniscus

`nd = 1.68400, νd = 31.30. Glass: Unmatched (684313 class; catalog identity unresolved). f = -65.665 mm.`

L3 carries aspherical surfaces 5A and 6A. The patent specifically associates this G1 aspherical element with correction of astigmatism and, more generally, field curvature (¶0046, ¶0059). It is therefore one of the principal non-spherical correction elements in the fixed front group.

The data file does not promote a vendor glass identity for the 1.68400/31.30 coordinate. No public-catalog identity was sufficiently defensible to replace the generic coordinate class, so the element remains explicitly unmatched.

### L4/L5 — Cemented Negative/Positive Pair

`L4: nd = 1.72825, νd = 28.32. Glass: 728283 class (vendor not identified by patent). f = -22.864 mm.`\
`L5: nd = 1.69680, νd = 55.46. Glass: 697555 class (vendor not identified by patent). f = +28.205 mm.`

L4 is biconcave and L5 biconvex. They are cemented at surface 8, with the junction using the downstream L5 index in the data model. Patent ¶0047 explicitly permits and depicts this L4/L5 cemented arrangement in Example 1.

Their standalone powers are strong and opposite in sign, but the cemented pair as a whole is only weakly negative. The independently computed cemented-group EFL is approximately -344.591 mm. This distinction is important: neither standalone focal length describes the net action of the bonded pair.

The large Abbe-number difference between the two members is consistent with the patent's broader G1 chromatic strategy, but the source provides no line indices or anomalous-partial-dispersion data. The pair is therefore described only as a high/low-dispersion pairing consistent with the patent's G1 chromatic-allocation rationale, not as an APO or anomalous-dispersion construction.

### L6 — Biconvex Positive

`nd = 1.88300, νd = 40.80. Glass: 883408 class (vendor not identified by patent). f = +41.858 mm.`

L6 is the final positive element of fixed group G1 and lies immediately ahead of the aperture stop. Together with the preceding elements, it leaves G1 with positive net power. Its placement also completes the rear half of the modified double-Gauss-like front group described in patent ¶0053.

No specific standalone aberration-control function is assigned to L6 by the source, so its interpretation is kept at the group-power and layout level rather than attributing an unsupported correction role.

### L7 — Double-Aspherical Negative Meniscus, Focus Group

`nd = 1.68400, νd = 31.30. Glass: Unmatched (684313 class; catalog identity unresolved). f = -53.438 mm.`

L7 is the entire G2 focusing group. Its two aspherical faces are surfaces 13A and 14A. Patent ¶0049-0050 states that G2 consists of one negative meniscus convex toward the object and that only this group moves during focusing.

Because G2 contains only L7, the standalone element power and the group power are identical. In the constrained fixed-sensor model, L7 moves 6.794937 mm toward the image side from infinity to the 0.45 m close-focus state. The adjacent D1 and D2 gaps change in opposite directions while their sum remains 20.32961 mm.

Patent ¶0054-0056 explains the design motivation for keeping the moving group to one element and notes the need for aspherical correction in a large-aperture system with such a compact focusing group. The analysis does not extend that statement into an unverified claim about specific residual aberration magnitudes.

### L8 — Double-Aspherical Biconvex Positive

`nd = 1.68970, νd = 52.70. Glass: K-VC80-M catalog-equivalent (patent coordinates retained; production supplier unspecified). f = +35.065 mm.`

L8 is the positive front member of G3 and carries aspherical surfaces 15A and 16A. Its positive standalone power dominates the negative L9 strongly enough that the two-element rear group remains net positive at approximately +58.886 mm EFL.

The 1.68970/52.70 source coordinate is not assigned to OHARA L-LAL15. OHARA's current L-LAL15 catalog lists `nd = 1.69304`, `νd = 52.93` and `ne = 1.69616`, `νe = 52.70`; `1.68970` is its C′-line index rather than its d-line index. Pairing `1.68970` with `52.70` would therefore mix spectral reference systems. The patent pair is retained exactly; SUMITA K-VC80(M) supplies a coordinate-compatible dispersion proxy, without claiming that it was the production material or resolving the patent spectral ambiguity.

### L9 — Biconcave Negative Field-Flattener Element

`nd = 1.56883, νd = 56.04. Glass: 569560 class (vendor not identified by patent). f = -62.304 mm.`

L9 is the final glass element and is biconcave. Patent ¶0051-0052 explicitly describes the rear biconcave lens as a field flattener positioned near the image plane to assist field-curvature correction in a mirrorless camera geometry.

Its standalone focal length independently reproduces the patent's Table-10 `flast` value to the precision of the printed prescription. In situ, however, L9 is not a standalone negative rear cell: it follows the much stronger positive L8, leaving G3 with net positive power.

## Glass Identification and Selection

The patent is vendor-silent. The data file therefore preserves the source `nd`/`νd` pairs and uses generic coordinate classes or explicit `Unmatched` labels rather than asserting a manufacturer that the patent does not name.

| Element(s) | Glass annotation in data | nd | νd | Status |
|---|---|---:|---:|---|
| L1 | 648338 class (vendor not identified by patent) | 1.64769 | 33.84 | Coordinate class retained |
| L2 | 001255 class (vendor not identified by patent) | 2.00069 | 25.46 | Coordinate class retained |
| L3, L7 | Unmatched (684313 class; catalog identity unresolved) | 1.68400 | 31.30 | No defensible catalog identity |
| L4 | 728283 class (vendor not identified by patent) | 1.72825 | 28.32 | Coordinate class retained |
| L5 | 697555 class (vendor not identified by patent) | 1.69680 | 55.46 | Coordinate class retained |
| L6 | 883408 class (vendor not identified by patent) | 1.88300 | 40.80 | Coordinate class retained |
| L8 | K-VC80-M catalog-equivalent (patent coordinates retained; production supplier unspecified) | 1.68970 | 52.70 | Compatible K-VC80(M) proxy; source ambiguity and supplier uncertainty retained |
| L9 | 569560 class (vendor not identified by patent) | 1.56883 | 56.04 | Coordinate class retained |

Patent condition 3 divides the fixed front group around L3 and requires the mean Abbe number before that asphere to be lower than the mean for the subsequent G1 lenses. Using the stored prescription values gives `vf = 29.6500`, `vr = 41.5267`, and `vf/vr = 0.713999`, which lies inside the stated 0.6-0.9 interval. This supports the patent's stated chromatic-allocation logic without implying apochromatic correction.

No element carries `nC`, `nF`, `ng`, or `dPgF` in the final data file because the source does not publish those per-element quantities and the vendor identities are not uniquely established. Consequently, no APO, anomalous-dispersion, or secondary-spectrum claim is made here.

## Focus Mechanism

The source mechanism is inner focus with one translating lens. G1 and G3 remain fixed, and L7/G2 moves imageward for closer focus. The patent publishes both an infinity row and a close row, but the published close row also changes image-side D4/D5 bookkeeping even though the physical camera sensor should remain fixed.

For that reason, the final data file uses `CONSTRAINED_RECONSTRUCTION`, not a literal transcription of the patent's close row. The reconstruction is code-solved with the source mechanism held fixed: only L7 moves, D1+D2 is conserved, and the sensor/reference plane is fixed.

| State | D1 after STO (mm) | D2 after 14A (mm) | D1 + D2 (mm) | Status |
|---|---:|---:|---:|---|
| Infinity | 2.001780 | 18.327830 | 20.329610 | Patent-published and data base state |
| Patent close row | 8.700090 | 11.629510 | 20.329600 | Source-published, not used as fixed-sensor model state |
| Modeled close, 0.45 m | 8.796717 | 11.532893 | 20.329610 | Constrained reconstruction in data |

The modeled G2 travel is +6.794937 mm toward the image side. The reconstructed finite-conjugate matrix has a B residual of approximately `-3.3e-10`, and the paraxial magnification is -0.149516. Those values are computed checks, not source-published performance specifications.

The reference-plane comparison also requires restoring the physical thickness difference of the omitted filter plate. The air-equivalent model has a geometric object-to-IMG distance of 449.148207 mm at the close state. Adding back the omitted plate's 0.851793 mm physical-minus-reduced thickness gives 450.000000 mm to the physical sensor reference plane, matching the manufacturer's rounded 0.45 m minimum focusing distance.

The manufacturer also specifies 0.15× maximum magnification. The source patent close row uses `m = -0.15`, while the fixed-sensor reconstruction gives -0.149516 paraxially. The agreement is consistent with the intended production correlation, but the sign difference is simply the ordinary inverted real-image convention.

## Aspherical Surfaces

Example 1 uses six aspherical surfaces on three elements: 5A and 6A on L3, 13A and 14A on L7, and 15A and 16A on L8. Patent ¶0071-0074 uses the standard conic-constant form

`Z = cY² / [1 + sqrt(1 - (1 + K)c²Y²)] + A4Y⁴ + A6Y⁶ + A8Y⁸ + A10Y¹⁰ + A12Y¹² + ...`

The source therefore maps directly to the project's standard `K`; no conic conversion is required. Every Example-1 asphere has `K = -1`. No dimensional scaling was applied, so no coefficient transformation was required.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 5A | -1 | -3.638351e-6 | -3.191320e-9 | -4.204817e-12 | +6.048832e-15 | 0 |
| 6A | -1 | +8.780333e-6 | +6.142542e-9 | +1.134598e-11 | -1.127929e-14 | 0 |
| 13A | -1 | -5.688391e-5 | +2.633654e-7 | -9.029458e-10 | +1.808817e-12 | -1.590491e-15 |
| 14A | -1 | -5.606567e-5 | +3.230809e-7 | -1.207755e-9 | +2.733286e-12 | -2.838987e-15 |
| 15A | -1 | -5.079978e-7 | -1.413043e-9 | +1.094572e-11 | -1.561120e-14 | 0 |
| 16A | -1 | +2.189271e-6 | -5.682527e-9 | +1.737121e-11 | -2.077513e-14 | 0 |

The patent does not publish clear-aperture heights, so departure magnitudes are quoted only at the verified modeled semi-diameters. Surface 5A departs from the same-radius sphere by -0.932 mm at 20.0 mm semi-diameter, while 6A is much closer to its spherical reference at +0.056 mm departure at 18.6 mm. The L7 focus element has the largest modeled edge departures: -2.029 mm on 13A at 16.6 mm and -3.336 mm on 14A at 15.6 mm. L8 is more modest at the modeled rim, with -0.068 mm on 15A and +0.347 mm on 16A, both at 16.8 mm.

Those departures describe the geometric difference from the same-radius spherical bases; they are not direct measurements of aberration contribution. Patent text provides the stronger interpretive basis: the G1 asphere is associated with astigmatism/field-curvature correction, and the patent discusses aspherical correction as important when a large-aperture lens uses a single-element focusing group.

The semi-diameters used for these edge values are modeling inferences. Geometry verification found a maximum actual rim angle of 47.443° at surface 6A, a minimum element edge thickness of 1.634 mm, positive clearance against every shared-band cross-gap test, and positive exact-ray clearance at both defined focus endpoints.

## Conditional Expressions

The patent gives three design inequalities relevant to Example 1.

1. `1.1 ≤ f12/f ≤ 1.9`. From the final data arrays, `f12/f = 1.419946`, so the model satisfies the condition.
2. The detailed description gives `0.2 ≤ bf/f12 ≤ 0.35`, whereas Claim 8 prints the upper bound as 1.9. The source therefore contains an internal contradiction that is preserved rather than silently reconciled. Using the source physical S18-to-IMG distance excluding post-IMG D5 gives `bf/f12 = 0.317661`; using the air-equivalent modeled rear gap gives 0.305908. Both satisfy the narrower 0.2-0.35 description interval and necessarily the broader Claim-8 interval.
3. `0.6 ≤ vf/vr ≤ 0.9`. Using the stored Abbe numbers gives `vf/vr = 0.713999`, which satisfies the condition.

Patent Table 10 also prints `bf = 23.0235 mm`. That number numerically incorporates the infinity D5 value even though Table 1 places D5 after IMG. The data file therefore does not use Table-10 `bf` as its sequential rear gap. It instead retains the physically normalized no-filter spacing described above.

## Verification Summary

Independent y-ν tracing and an ABCD basis-ray cross-check were run from the final TypeScript arrays. The infinity matrix gives EFL 51.038626 mm, differing from the patent Table-10 value 51.0384 mm by only +0.000226 mm. The modeled entrance-pupil diameter is 35.443490 mm and recomputes the stored wide-open f-number as 1.440000.

The computed last-vertex BFL is 22.170383 mm. The authored air-equivalent rear gap is 22.169787 mm, a difference of 0.000596 mm that is consistent with the printed prescription precision. Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.001796229 mm⁻¹; that value is retained as a computed diagnostic rather than converted into a claim about measured field curvature.

The final geometry checks cover both infinity and the constrained close-focus state. The tightest positive shared-gap margin is 0.342 mm between 6A and 7, and the minimum non-stop exact-ray clearance is 0.606 mm at infinity and 0.687 mm at close focus. These checks support the authored semi-diameters but do not make them patent-published apertures.

The source itself contains two interpretation issues relevant to the model: Claim 8 and the detailed description give different upper bounds for Eq. 2, and Table 10's `bf` incorporates D5 even though Table 1 prints D5 after IMG. Neither changes the active S1-S18 prescription.

## Sources

- Republic of Korea Patent KR 10-1825708 B1, *텔레포토 단초점 렌즈계 및 이를 포함한 촬영 장치*, Numerical Example 1, especially ¶0042-0059, ¶0060-0075, Tables 1-3, Table 10, and Figure 1.
- LK Samyang, first-generation AF 50mm F1.4 FE product page: https://www.lksamyang.com/en/product/product-view.php?seq=155
- LK Samyang, AF 50mm F1.4 FE instruction manual: https://www.lksamyang.com/files/2017/9/1506614929848/AF50mmF1.4_Eng.pdf
- LK Samyang corporate history, 2016 autofocus-lens launch context: https://www.lksamyang.com/en/about/history.php
- OHARA, L-LAL15 optical-glass data sheet: https://www.ohara-inc.co.jp/assets/product/pdf/jllal15.pdf
