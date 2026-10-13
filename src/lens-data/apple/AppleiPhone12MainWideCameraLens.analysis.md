# APPLE WIDE 4.36mm f/1.6 (Apple iPhone 12)

## Patent Reference and Design Identification

**Patent:** US 2018/0364457 A1  
**Application Number:** 15/979,776  
**Priority:** US 62/522,594, filed 2017-06-20  
**Filed:** 2018-05-15  
**Published:** 2018-12-20  
**Inventors:** Yuhong Yao; Yoshikazu Shinohara; Lin-Yao Liao  
**Assignee:** Apple Inc.  
**Title:** Imaging Lens System  
**Embodiment analyzed:** Example 7 / lens system 710

The prescription is transcribed from Example 7, not from a teardown or manufacturer service document. The patent identifies lens system 710 as a seven-element refractive imaging lens with an aperture stop between the first and second elements and gives a design focal length of 4.361 mm, f/1.65, and 80.3° full field of view. The final LensVisualizer model computes an effective focal length of 4.356606 mm from the transcribed refracting sequence; the -0.004394 mm difference from the three-decimal patent value is within the source-precision tolerance used by the verifier. The patent's Example 7 table/figure combination gives a 5.999 mm physical track to the sensor and a 3.75 mm full-field semi-image height, reproducing TTL/ImageH = 1.599733 against the published 1.600. These are infinity-state quantities. [US 2018/0364457 A1, Fig. 7A–7C, Tables 7A–7F, ¶¶0141–0152.]

The production correlation is deliberately limited. Apple describes the iPhone 12 Main camera as f/1.6 with a seven-element lens and optical image stabilization, and announced the iPhone 12 on 2020-10-13, after the patent's 2017 priority and 2018 publication. Those facts are consistent with Example 7 but do not identify US 2018/0364457 A1 or Example 7 as the production prescription. The same broad seven-element, f/1.6 Wide-camera description also appears elsewhere in the iPhone 12 family, so the attribution is plausible rather than manufacturer-confirmed. The modeled f/1.65 remains separate from the marketed f/1.6.

The prescription is retained at the patent's native scale (`s = 1.0`). No production focal-length rescaling is applied. The 7.5 mm `imageCircleMm` metadata is the doubled 3.75 mm semi-image height shown in Fig. 7C, not an Apple-published active sensor dimension.

## Optical Architecture

Example 7 is a seven-element, seven-group, all-aspheric wide-angle small-format camera lens. In front-to-rear standalone power order, the elements are positive–positive–negative–positive–negative–positive–negative. There are no cemented groups. The first element is the only refracting element ahead of the stop; the remaining six elements follow it in six air-spaced groups. All fourteen refracting lens surfaces are aspheric.

The design does not require a classical named photographic lineage to describe it accurately. Its computed physical-track/EFL ratio is 1.376989, so it does not meet the project's `TL/EFL < 1` telephoto criterion; the patent likewise defines a non-telephoto system when TTL/f is greater than 1. Its physical back focal distance from the final lens vertex to the sensor, including the listed rear plate stack, is 1.125 mm in the source prescription, well below the 4.356606 mm computed EFL, so it also does not meet the project's `BFD > EFL` retrofocus criterion. [US 2018/0364457 A1, ¶¶0046–0048; Table 7A.]

The model has a fixed f/1.65 aperture; selectable aperture controls are disabled. The marketed f/1.6 remains a separate product specification.

The aperture stop is a modeling-sensitive part of this embodiment. Table 7A prints S2→Stop = +0.085 mm followed by Stop→S4 = -0.035 mm, while Fig. 7A and ¶0148 place the stop physically between L1 and L2. The implemented sequential model therefore preserves the 0.050 mm L1–L2 physical air gap but places a single neutral `STO` at its midpoint: 0.025 mm after L1 and 0.025 mm before L2. That axial split is an inference, not a patent dimension. The stop semi-diameter of 1.242442 mm is calibrated to the patent's f/1.65 target; it is not an independently published diaphragm radius.

The rear filter is not treated as an eighth lens element. The source gives 0.394 mm of air after L7, a 0.150 mm plane plate at `nd = 1.517`, `νd = 64.2`, and 0.581 mm of air to the image plane. The data file represents this through `rearPlates`, preserving the physical rear stack while keeping the ordinary lens prescription limited to the seven refracting elements. [US 2018/0364457 A1, Table 7A.]

The patent states that system parameters such as power distribution, lens shape, aperture location, spacing, and material may be selected to control aberrations, but it does not assign a unique aberration-correction function to each element. The element descriptions below therefore distinguish source statements from paraxial or geometric observations rather than inferring design intent from power sign alone. [US 2018/0364457 A1, ¶¶0004, 0048, 0052–0065.]

## Element-by-Element Analysis

### L1 — Positive Meniscus, Two Aspheric Surfaces

`nd = 1.678, νd = 55.3. Glass: 678553 lanthanum-crown class (supplier/material unconfirmed). f = +5.653969 mm.`

L1 is the first lens and the only refracting element before the aperture stop. Its standalone focal length makes it the strongest positive element in the front pair. Because it lies ahead of the stop, it also participates directly in imaging the physical stop into the entrance pupil; this is a geometric consequence of placement rather than a claim about manufacturing intent. Both L1 surfaces are aspheric (1A and 2A).

The patent does not identify the physical material supplier. Its `nd`/`νd` coordinate is compatible with several lanthanum-crown catalog families, but ¶0042 explicitly allows injection-molded plastic as well as glass. The data therefore stores a coordinate-class label rather than a named melt.

### L2 — Biconvex Positive, Two Aspheric Surfaces

`nd = 1.545, νd = 56.0. Glass: Unmatched (545560 patent material coordinate). f = +23.144737 mm.`

L2 sits immediately after the inferred stop position. It is a comparatively weak positive element in standalone air power. Together with L1 and the preserved 0.050 mm inter-element air gap, the verified paraxial source model gives the L1+L2 pair a composite focal length of 4.639681 mm. The stop itself is optically neutral, so its normalized midpoint placement does not alter this first-order pair power.

The 1.545/56.0 material coordinate recurs on L4, L6, and L7. No defensible exact current catalog identity was established for that coordinate, so the repeated material is kept as `Unmatched` rather than assigned to a vendor by analogy.

### L3 — Negative Meniscus, Two Aspheric Surfaces

`nd = 1.671, νd = 19.5. Glass: Unmatched (671195 patent material coordinate). f = -13.762403 mm.`

L3 is the first negative-power element in the sequence and uses the lower-Abbe of the two repeated patent material coordinates. Its standalone negative power follows the positive L1–L2 front pair. Both surfaces are aspheric (6A and 7A).

The low `νd` value establishes comparatively high d-line dispersion relative to the 56.0-coordinate material, but the patent does not publish element-level `nC`, `nF`, `ng`, or `dPgF`. The model therefore does not promote this coordinate into an anomalous-dispersion or apochromatic material claim.

### L4 — Positive Meniscus, Two Aspheric Surfaces

`nd = 1.545, νd = 56.0. Glass: Unmatched (545560 patent material coordinate). f = +11.433731 mm.`

L4 returns the standalone power sequence to positive. Its front paraxial radius is very long compared with its rear surface, but the thick-element calculation remains positive when the actual 0.603 mm center thickness and refractive index are included. Both surfaces are aspheric (8A and 9A).

The analysis does not assign L4 a specific field-curvature or coma function because the patent does not isolate those contributions by element. Fig. 7C instead reports the performance of the complete lens system.

### L5 — Negative Meniscus, Two Aspheric Surfaces

`nd = 1.671, νd = 19.5. Glass: Unmatched (671195 patent material coordinate). f = -8.022455 mm.`

L5 is the stronger of the two negative elements using the 1.671/19.5 coordinate. The patent explicitly singles out the shape of this fifth element through the ratio `(R9 + R10)/(R9 - R10) < -2`. From the final parsed prescription, the ratio is -4.540453, reproducing the Table 7F value -4.540 to source precision. [US 2018/0364457 A1, ¶¶0062, 0065; Tables 7A, 7F.]

Both L5 surfaces are aspheric (10A and 11A). The element sits ahead of the final positive–negative L6/L7 pair, but no per-element aberration assignment is asserted beyond the patent's explicit shape condition.

### L6 — Positive Meniscus, Two Aspheric Surfaces

`nd = 1.545, νd = 56.0. Glass: Unmatched (545560 patent material coordinate). f = +7.679541 mm.`

L6 is a relatively strong positive rear element. The patent identifies L6 as positive and separately states the condition `Vd6 > 45`; Example 7 uses `νd = 56.0`, satisfying that condition. Both surfaces are aspheric, matching the patent's description of the sixth element in the broader embodiment family. [US 2018/0364457 A1, ¶¶0058, 0063, 0065; Table 7A.]

The modeled semi-diameters increase substantially through L6 and L7 because the traced bundles broaden toward the image side. Those apertures are construction values derived for LensVisualizer geometry, not patent-listed clear apertures.

### L7 — Negative Meniscus, Two Aspheric Surfaces

`nd = 1.545, νd = 56.0. Glass: Unmatched (545560 patent material coordinate). f = -16.719608 mm.`

L7 is the final refracting element and has negative standalone power in the extracted Example 7 prescription. Its two surfaces are aspheric (14A and 15A), and both use `K = -1` in the implemented standard conic convention. The rear vertex is followed by the 0.394 mm physical air gap to the source-listed rear filter plate.

The seventh element is not described as a generic field flattener in the patent, and the analysis does not assign that role merely because of its location. The patent's system-level Fig. 7C is the appropriate source for field-curvature, astigmatism, and distortion behavior of the complete design.

## Glass Identification and Material Selection

The prescription publishes d-line refractive indices and Abbe numbers, not supplier glass names. The patent also expressly permits plastic or injection-molded plastic lens elements, with glass given as another possible transparent material. Consequently, the catalog work is used only to classify coordinates and to prevent false material naming. [US 2018/0364457 A1, ¶0042; ¶0169; Table 7A.]

| Patent coordinate | Elements / plate | Authored identification | Evidentiary status |
|---|---|---|---|
| 1.678 / 55.3 | L1 | `678553 lanthanum-crown class (supplier/material unconfirmed)` | Multiple authoritative catalog families are coordinate-compatible; no supplier or physical material is established. |
| 1.545 / 56.0 | L2, L4, L6, L7 | `Unmatched (545560 patent material coordinate)` | No defensible exact current catalog identity retained. |
| 1.671 / 19.5 | L3, L5 | `Unmatched (671195 patent material coordinate)` | No defensible exact current catalog identity retained. |
| 1.517 / 64.2 | rear IR/filter plate | `517642 BK7-type rear plate class (supplier unconfirmed)` | Coordinate-compatible crown families exist; the plate is modeled separately from the seven lens elements. |

The authored elements contain no `nC`, `nF`, `ng`, or `dPgF` fields. Figure 7C plots system aberrations at several wavelengths, but it does not provide the missing material line indices. The analysis therefore makes no APO, anomalous-partial-dispersion, or supplier-specific Sellmeier claim.

## Focus Mechanism

The selected patent example provides only an infinity prescription. It contains no focus-state spacing table, moving-group identity, focus travel, magnification sequence, or finite-conjugate prescription. The data status is therefore **NO_INTERNAL_RECONSTRUCTION**, `var` is empty, and no internal focus movement is modeled.

Apple's iPhone 12 technical specification documents autofocus-related `100% Focus Pixels` on the Main camera, but this does not determine which optical element or group moves. The data field `closeFocusM = 0.12` is not treated as an iPhone 12 Main optical fact: it is a UI-only same-generation fallback from Apple's separate WWDC21 statement that the iPhone 12 Pro Wide camera has a 12 cm minimum focus distance. It does not create a 0.12 m traced prescription, and the selected Main camera's minimum focus distance remains unavailable in the cited manufacturer material.

No focus breathing, close-focus EFL, or finite-distance aberration claim can be made from this model. All verified prescription quantities in this analysis refer to the published infinity state.

## Aspherical Surfaces

All fourteen refracting surfaces are aspheric. The patent defines sag with the standard conic denominator `sqrt(1 - (1 + K)c²r²)`, so the LensVisualizer `K` values are used directly: `K = 0` is a spherical conic base and `K = -1` is a paraboloidal base. [US 2018/0364457 A1, ¶0170, Tables 7B–7E.]

The rendered equation in ¶0170 contains an internal source defect: it visibly omits the `A12 r^12` term and prints a fixed minus sign before `A14 r^14`, while Tables 7B–7E supply signed `A12` and signed `A14` columns. For numerical modeling, each signed table coefficient is used with its corresponding even power; the printed equation is therefore not treated as internally self-consistent. No scaling transform is applied because `s = 1.0`.

The nonzero authored coefficients are listed below in `mm^(1-p)` for an `A_p r^p` term. Source surface numbers map to the `A`-suffixed data labels shown here; zero high-order terms are omitted from the table for readability.

| Surface | K | Nonzero polynomial coefficients |
|---|---:|---|
| 1A | 0 | A4=-3.44743000e-2; A6=6.74888000e-3; A8=-2.96218000e-2; A10=1.55924000e-2; A12=-2.21316000e-3 |
| 2A | 0 | A4=-6.27155000e-2; A6=-5.09915000e-3; A8=2.72039000e-2; A10=-1.52933000e-2; A12=3.28068000e-3 |
| 4A | 0 | A4=-1.11696000e-2; A6=-2.28545000e-2; A8=7.69463000e-2; A10=-5.26124000e-2; A12=1.40864000e-2; A14=-1.09968000e-3 |
| 5A | 0 | A4=9.28600000e-3; A6=-9.71708000e-3; A8=-9.62688000e-3; A10=5.24733000e-3; A12=-9.15930000e-4; A14=2.48834000e-4 |
| 6A | 0 | A4=-7.32015000e-2; A6=2.60355000e-2; A8=-1.44950000e-2; A10=5.26982000e-3; A12=1.39273000e-3; A14=-6.60225000e-4 |
| 7A | 0 | A4=-8.04783000e-2; A6=4.62935000e-2; A8=-3.49531000e-2; A10=2.27973000e-2; A12=-7.83022000e-3; A14=1.17663000e-3 |
| 8A | 0 | A4=-3.26817000e-2; A6=-6.23032000e-3; A8=2.17401000e-3; A10=-4.85828000e-3; A12=1.71949000e-3; A14=2.96148000e-4 |
| 9A | 0 | A4=-7.74378000e-2; A6=6.26289000e-2; A8=-6.82425000e-2; A10=4.92366000e-2; A12=-1.83752000e-2; A14=2.63725000e-3 |
| 10A | 0 | A4=4.05724000e-2; A6=3.09326000e-4; A8=3.80031000e-2; A10=-3.48428000e-2; A12=1.94087000e-2; A14=-6.10262000e-3; A16=7.94906000e-4 |
| 11A | 0 | A4=-3.86026000e-2; A6=2.05060000e-2; A8=2.28231000e-2; A10=-2.75874000e-2; A12=1.36669000e-2; A14=-3.27438000e-3; A16=3.04947000e-4 |
| 12A | -1 | A4=-6.18155000e-2; A6=3.38178000e-2; A8=-1.91914000e-2; A10=5.51249000e-3; A12=-8.64167000e-4; A14=6.82043000e-5; A16=-2.05288000e-6 |
| 13A | 0 | A4=1.02626000e-2; A6=-1.73677000e-3; A8=-4.53206000e-3; A10=1.73567000e-3; A12=-2.91549000e-4; A14=2.41326000e-5; A16=-7.96272000e-7 |
| 14A | -1 | A4=-1.72955000e-1; A6=5.19549000e-2; A8=-1.06579000e-2; A10=1.52322000e-3; A12=-1.36015000e-4; A14=6.61824000e-6; A16=-1.32761000e-7 |
| 15A | -1 | A4=-1.72321000e-1; A6=6.08467000e-2; A8=-1.69687000e-2; A10=3.18908000e-3; A12=-3.87618000e-4; A14=2.95229000e-5; A16=-1.28364000e-6; A18=2.41956000e-8 |

The coefficient signs are not interpreted as isolated aberration contributions. Their optical effect depends on the complete surface curvature, ray height, neighboring elements, and stop geometry. The geometric verification instead evaluates the resulting full aspheric sag and slope at the modeled clear apertures. Because those semi-diameters are inferred rather than patent-published, any quoted rim departure is a model result rather than a source specification.

## Patent Conditions

The patent gives several dimensionless relationships for this design family in ¶0065 and compactness criterion `TTL/ImageH < 1.7` in ¶0066. Re-evaluating them from the final parsed data gives:

| Condition | Final-model value | Requirement | Result |
|---|---:|---|---|
| `fsystem / f12` | 0.938988 | `0.6 < value < 1.4` | Satisfied |
| `|fsystem/f3| + |fsystem/f5|` | 0.859610 | `0.55 < value < 1.15` | Satisfied |
| `(R9 + R10)/(R9 - R10)` | -4.540453 | `< -2` | Satisfied |
| `(Vd1 + Vd3)/Vd2` | 1.335714 | `0.8 < value < 3` | Satisfied |
| `Vd6` | 56.0 | `> 45` | Satisfied |
| `TTL / ImageH` | 1.599733 | `< 1.7` | Satisfied |

Table 7F prints the corresponding rounded values 0.943, 0.868, -4.540, 1.34, 56.0, and 1.600. The small differences in the first two ratios arise because the independent calculation uses the extracted rounded surface data to recompute standalone/composite powers rather than treating the Table 7F ratios as exact inputs. The source mismatch remains visible rather than being hidden by widening tolerances.

## Image Stabilization

Apple lists optical image stabilization for the iPhone 12 Main camera. That manufacturer fact is not converted into a LensVisualizer decentering or stabilization model because Example 7 publishes no OIS group, decenter range, or stabilized prescription. The current data therefore represents the centered optical state only. The production OIS feature supports product-family correlation but does not identify the patent embodiment or justify an inferred moving optical group.

## Modeling and Geometry Disclosures

The source does not publish clear semi-diameters. Every `sd` in the data file is therefore modeled from exact meridional ray envelopes and then checked against the current edge-thickness, aspheric rim-slope, conic-domain, shared-band cross-gap, and off-axis-containment policies. The maximum verified actual rim slope is 59.028° and the minimum conic radicand at an authored rim is 0.072963. The tightest shared-band air-gap case is 13A→14A, where computed sag intrusion uses 89.6139% of the 0.450 mm vertex gap against the 90% policy ceiling.

At half of the published 80.3° full field (40.15°), the exact-meridional model finds tested positive-side pupil samples vignetted at surface 10A while the tested surviving bundle remains contained. This is recorded as modeled edge-field vignetting, not as a source-published relative-illumination result. The portable check also finds no semi-diameter reduction required under the replayed geometry policies, but that is not a substitute for the LensVisualizer production render diagnostic, which remains an integration-stage check.

The rear plate is traced as a source-listed plane-parallel optical plate through `rearPlates`; it is not drawn as an eighth element. The physical 0.394 + 0.150 + 0.581 mm rear stack corresponds to an air-equivalent propagation of 1.073879 mm. The paraxial model gives 1.072121 mm back focal distance from the L7 rear vertex, a -0.001758 mm residual within the rounded source prescription's verification tolerance.

## Verification Summary

At infinity, independent reduced-angle and conventional ABCD formulations both give EFL = 4.356605701 mm. Surface-by-surface Petzval summation using exactly `φ/(n·n′)` gives 0.059485328 mm⁻¹. The calibrated stop model gives f/1.64999956 against the patent target f/1.65; this agreement verifies the calibration, not an unpublished diaphragm size. The physical S1-to-sensor track is 5.999 mm.

The modeled clear apertures also pass the portable edge-thickness, actual-rim-slope, conic-domain, shared-band gap, and sampled exact-meridional containment checks described above. These results verify the authored prescription under the portable model; they do not substitute for LensVisualizer's project-level type checking, runtime glass resolution, or production render diagnostics, which remain separate integration checks.

## Sources and References

1. Yao, Yuhong; Shinohara, Yoshikazu; Liao, Lin-Yao. **Imaging Lens System.** US Patent Application Publication **US 2018/0364457 A1**, published 2018-12-20. Example 7 / lens system 710: Fig. 7A–7C (PDF pp. 20–22), Tables 7A–7F (PDF pp. 43–44), ¶¶0042–0066, ¶¶0141–0152, and ¶¶0169–0171.
2. Apple. **iPhone 12 — Technical Specifications.** https://support.apple.com/en-us/111876 — manufacturer source for the Main camera's marketed f/1.6 aperture, seven-element lens, optical image stabilization, and 100% Focus Pixels.
3. Apple Newsroom. **Apple announces iPhone 12 and iPhone 12 mini: A new era for iPhone with 5G.** 2020-10-13. https://www.apple.com/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/ — launch timing and marketed Wide-camera aperture.
4. Apple Developer. **What's new in camera capture — WWDC21 Session 10047.** 2021-06-08. https://developer.apple.com/videos/play/wwdc2021/10047/ — source for the separate iPhone 12 Pro Wide 12 cm minimum-focus-distance example used only as the documented UI fallback.
5. OHARA INC., SCHOTT, HIKARI GLASS, CDGM, HOYA, and SUMITA current optical-glass catalog resources, as recorded in the dossier evidence. These sources are used for coordinate-class screening only; no supplier identity is inferred for the patent materials.
