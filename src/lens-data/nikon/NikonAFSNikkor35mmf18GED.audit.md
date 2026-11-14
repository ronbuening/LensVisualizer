# Source and numerical audit

Representative probable-family prescription; source literal millimetres retained.

- Native model SHA256: `40f4aa86ff0b3025ef11e3fc8861fdd53084cddd153d38f11007b28a09f3b3be`.
- Source archive SHA256: `d936835a371ac5a3087f35790c1fd7e7ebead2697c255e2718a5bc4bb3a65690`.
- Source CSV LF separator-only transport hash retained separately from original bytes.
- First-order methods agree; source/computed image-plane distinction retained.
- Geometry and all24 native format-reference fields pass at every advertised aperture; max delta0.0099676113.
- All raw clipping and0 aim-blocked engine failures remain in the evidence. No applied refocus or optical tuning.
- Type checking, corpus and compiled-viewer receipts are produced by the separate final integration run; this source writer does not assert those results. Closed 2026-11-02: that run belonged to the package; the checks below were made on the repo file.

## 2026-11-02 — Deployment validation and wording pass

Source re-read: JP 2015-118186 A, Table 1, checked against the text layer and the page images (pp. 12–13). All 21 R/d rows, 12 media, κ, A4–A10, D7 and Bf were compared with no mismatches. Equation (a) has κ inside the radical, so κ = 1 is K = 0. The patent's text never calls an element ED, anomalous or extra-low dispersion, so L22 carries `apd: "inferred"`, not `"patent"`.

Patent against model: f 34.5 / 34.517, F-number 1.86 / 1.86, Bf 38.42 / 38.4173 paraxial, TL 115.40 / 115.40, ω 32.68° / 32.677° at Y 21.60, G1 574.104 / 574.108, G2 50.927 / 50.927. Near state at D0 1019.325: paraxial β −1/29.9 against printed −1/30, defocus −0.0028 mm. Derived 0.25 m state: rigid G2 travel 8.239 mm, β −0.2402, defocus −0.0001 mm, against Nikon's 0.24×. Finite-object rays at both near states clear every rim at the fixed iris; worst axial margin 0.44 mm at surface 10.

Maker diagram: the coordinator viewed Nikon's section. ED marks the S10–S11 positive element (L22, 1.59319/67.90) and the aspherical element sits in the rear group. Example 1 fits the drawn axial spacings at 0.64 mm rms, Example 5 at 1.32 mm. Sibling note: Example 4 misprints R6 as 31.0797; 33.0797 restores f 35.000, Bf 38.876 and G1 322.745. Example 8 prints its variable gap as D8 for surface 7.

Fields changed in this pass: `subtitle`, `specs`, header comment, element `name`, `diagramLabel` and `role` (patent signs L11–L27, with L27r and L27g for the composite), `apd` and `apdNote` on L22. The analysis was reworded, and its test-run section replaced by a limits section. Optics are unchanged.

Open: Figure 1 draws lands on m2 (clear radius about 20 mm) and m14 (about 10.9 mm) that are not modeled, and they do not explain the narrower ray fans in the patent's coma plots. Both wait for the separate rim pass. Closed 2026-11-02: the rim pass below models both lands plus a third on m12, and traces the fans to radii the figure does not support.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: `patents/JP2015118186A.pdf` p. 31, Figure 1 (Example 1, infinity) and Figure 2(a), read from the embedded 898 × 1347 px 300 dpi bitmaps. Second check: Nikon's published section.

Scale: axial 10.02 px/mm from m1 to m21 (771.5 px / 76.98 mm), 10.017 from m1 to the image line (1156 px / 115.40 mm), 10.004 from m1 to m7. Transverse scale comes from arc fits with the axis and vertex free: 9.98 to 10.24 px/mm, mean 10.07, on nine surfaces. Rims use 10.05. The stop ticks sit at row 608 (z 55.87 mm against 55.88) and at 10.7 mm radius against a real marginal height of 10.71 mm, which confirms both directions. No stretch beyond about 0.7 %. One native pixel is about 0.1 mm, and each element was read on both sides by flood-filling its interior, so leader lines do not touch the readings.

| Surface | Before | Figure (left/right mean) | After | Evidence |
| --- | ---: | --- | --- | --- |
| 1 | 22.50 | 22.38 | 22.50 | Retained, 0.5 % |
| 2 | 22.50 | Edge 22.38, cap end 19.13, land at z 9.93 | 22.50, cut 8.15 (cap 19.05) | Land, q 0.854 |
| 3, 4 | 18.25 | 18.2 | 18.25 | Retained |
| 5 | 18.25 | 18.0, land about 0.4 wide | 18.25 | Retained, 1.4 %; land not modeled |
| 6, 7 | 17.75 | 17.56 | 17.75 | Retained, 1.1 % |
| 8, 9 | 14.25 | 14.28 | 14.25 | Retained |
| 10 | 13.00 | 13.53 | 13.50 | Step order, L22 proud of L23 |
| 11 | 13.00 | L22 13.53, L23 13.23 | 13.20 | L23 square; L22 tapers into the step |
| 12 | 13.00 | Edge 13.23, cap end 11.5 | 13.20, cut 2.25 (cap 11.49) | Land, q 0.871 |
| 14 | 12.25 | Edge 12.03, cap end 11.06 | 12.25, cut 4.22 (cap 11.05) | Land, q 0.914 |
| 15, 16 | 12.25 | 12.0 | 12.25 | Retained, 1.8 % |
| 17, 18 | 13.25 | 13.23 | 13.25 | Retained |
| 19 | 14.50 | 13.9 to 14.0 | 14.00 | Resin ends inside the glass on both sides |
| 20, 21 | 14.50 | 14.33 | 14.50 | Retained, 1.2 % |

Land shares and one-pixel ranges from ±(1 + q) / (edge px): m2 q 0.854 ± 0.008 at 225 px, m12 q 0.871 ± 0.014 at 133 px, m14 q 0.914 ± 0.016 at 121 px. Each cut radius sits inside its range against the stored `sd`. m2 and m14 sit at the low end, where the depth also matches the drawn land row to about 1 px. The audit log's earlier figure of about 20 mm for m2 was high: the cap ends at 19.1 mm.

S4 stays one value because a cemented face cannot draw the 0.2 mm step between L12 and L13, and S5 stays with it: that step would not show at the page's 5 px/mm. S14 to S16 at 12.0 would cost up to 1.5 points at 17.8° against this rim set, for a rim already inside the noise band, so they stay. S19's scan shows no slope reversal out to 16 mm, so its turnover does not bind.

Clearance. On-axis at F/1.86, infinity: worst margins S12 0.54, S10 0.65, S11 0.71, S8 0.76 mm, measured to cap ends. At the fixed 10.519 mm iris, β −1/30: S12 0.73, S10 0.94, S11 1.01, S8 1.05 mm. At 0.25 m: S12 0.80, S16 0.85, S14 1.06, S15 1.16 mm. `audit:aperture` finds no rim, trace or iris limit. LSA at pupil 1 / 0.85 / 0.7 / 0.5 is 0.033 / −0.025 / −0.043 / −0.030 mm, so no misprint sits behind any rim. Rim-cut beams over all 22 focus states: S2 reach 18.87 mm against cut 19.05, S12 10.97 against 11.49, S14 10.41 against 11.05, none clipped, none within margin. Image-circle floor clean; field coverage 100 %, corner 32.7° clear.

Corner illumination, full-pupil engine curve at infinity, 0 to 32.7° in steps of 2.97°. Starting rims: 100.0, 100.0, 99.3, 98.0, 95.0, 91.2, 86.8, 80.0, 72.2, 63.0, 53.0, 42.1 %. Final rims: 100.0, 100.0, 100.0, 99.8, 97.1, 93.2, 88.2, 80.9, 72.8, 63.3, 53.1, 42.1 %. Worst loss 0.0 points, worst gain 2.1 at 11.9°, from S10 only. The S19 cut costs nothing and meets the light rule. Engine half-field 32.68° and F/1.86 are unchanged, stop radius 10.519 mm. `tracingHalfField`, the engine's limit past the printed field, falls from 37.9° to 34.6° because the chief ray reaches the m2 land there; it stays above the 32.68° half-field, so the off-axis display scale stays 1.

Coma fans, Figure 2(a), as a fraction of the launch pupil, lower ray then upper. The abscissa was set from the d curves: at Y 10.8 the plot rises +0.040 mm at −0.72 and +0.025 mm at −0.66, against +0.037 and +0.025 mm traced. The d curves otherwise agree with the trace to about 0.01 mm.

| Y, mm | Patent fan ends | Model, final rims | Model limits |
| ---: | --- | --- | --- |
| 10.8 | −0.72 / +0.725 | −0.92 / +0.915 | S6 / S18 |
| 15.1 | −0.535 / +0.60 | −0.78 / +0.835 | S6 / S18 |
| 18.4 | −0.38 / +0.48 | −0.665 / +0.765 | S6 / S18 |
| 21.6 | −0.29 / +0.355 | −0.54 / +0.68 | S6 / S18 |

The earlier short-side reading of 0.37 at Y 21.6 was high: the two sides read 0.29 and 0.355. A one-rim fit across the four fields gives S6 at r 14.80 mm (rms 0.020 of the pupil; S5 at 14.6 and S7 at 14.1 are close behind) for the lower ray, and S19 at r 11.45 mm (rms 0.010; S20 at 11.50) for the upper ray. S18 at 11.10 fits too but would clip the 11.67 mm axial ray. The fits are tight, so the fans do behave like a fixed aperture near each of those surfaces, but the figure draws 17.56 mm at S6 and 13.95 mm at S19, and the fan radii fall 16 to 18 % short of those. Figure and fans do not agree on any surface, so no rim moved for the fans. The lands do not explain them either: at the fan ends the rays reach only 17.2 mm at m2, 8.2 mm at m12 and 8.4 mm at m14, all inside the cap ends. The likeliest reading is a mechanical flare aperture or design vignetting the drawing does not show.

Nikon's section agrees on 11 elements in 8 groups, element 6 (L22) as ED and element 11 (L27) as the aspherical element. Its L23 and L24 rims show the same cut-back corners as m12 and m14. Proportions differ: at 5.46 px/mm it draws L12/L13 at about 19.8 mm and L24/L25 at about 13.6 mm, against 18.2 and 12.0 in Figure 1, and L21 to L23 nearly level at 14.6 mm. The figure of the modeled example governs, and no rim followed the maker's drawing.

The rendered section was compared with the figure at infinity, β −1/30 and 0.25 m: all three lands, the L22 and L23 step and the resin end draw as in Figure 1. Limitations: the S5 land and the S4 step are not drawn, and rims within the noise band keep their earlier values.

## 2026-11-02 — Second review: diagram, labels and movement

Compared: the local page at 3× device scale and through `?el=`, `?mv=focus`, `?focus=` and patent-positions mode, against the native 898 × 1347 px bitmap of Figure 1 (p. 31), Figure 2 (p. 31), the text and Table 1 (pp. 11–13), and Nikon's section. The figure was re-read by a separate flood fill of each element on both sides of the axis, at 10.02 px/mm along it and 10.05 across it. The readings below agree with the earlier pass to within two pixels, except that the S5 land reads 0.55 mm wide, not 0.4.

Lands and cuts. Light cost is measured against baseline rims with every land removed, wide open, at infinity, β −1/30 and 0.25 m. `rimcost.mjs` keeps `rimCutDepthMm` in its baseline, so the lands were measured by deleting them from the file in a separate run of the same `computeVignettingCurve` call. Beam reach is `rimCutBeamReach` over every field and focus state.

| Item | Verdict | Figure | Baseline | Final | Light cost | Beam reach |
| --- | --- | --- | --- | --- | ---: | --- |
| S2 land | Keep, slight | Cap end 19.15, edge 22.39 | No land, 22.50 | Cut 8.15, cap 19.05 | 0.0 | 18.87 |
| S5 land | Added, slight | Cap end 17.46, edge 18.01, q 0.970 ± 0.011 | No land, 18.25 | Cut 3.21, cap 17.69 | 0.0 | 17.51 |
| S12 land | Keep, slight | Cap end 11.64, edge 13.23 | No land, 13.00 | Cut 2.25, cap 11.49 | 0.0 | 10.97 |
| S14 land | Keep, slight | Cap end 11.24, edge 12.04 | No land, 12.25 | Cut 4.22, cap 11.05 | 0.0 | 10.41 |
| S19 cut | Keep, slight | 13.83 (13.78 / 13.88) | 14.50 | 14.00 | 0.0 | Not a land |

No land was removed: each only redraws the rim outside every beam, and each stands where the figure draws it. The S5 land is new. Figure 1 draws it on both sides, it passes the validator and the beam rule with 0.18 mm in hand against a 0.05 mm margin, and it costs nothing. Its plane sits about 3 px behind the figure's, because the figure's m5 arc is drawn flatter than R 50.34 at the rim; the depth follows the measured q as the data spec asks. S2, S12 and S14 sit within 2 px of this pass's cap readings and stay.

Worst loss from `rimcost.mjs`, final file against baseline: 0.0 points at infinity, best gain 2.1 at 11.9°. Separately, against baseline rims with no lands, every sample at all three focus states gains or holds. Corners are unchanged at 42.1 % at 32.68° (infinity), 45.7 % at 32.40° (β −1/30) and 64.2 % at 30.47° (0.25 m). The S10 to S12 raises stay at 13.50, 13.20 and 13.20, on figure readings of 13.53, 13.23 and 13.23.

Rims read 22.39 (S1), 18.21 (S3), 18.01 (S4, S5), 17.56 (S6, S7), 14.28 (S8, S9), 12.04 and 11.99 (S14 to S16), 13.23 (S17, S18) and 14.28 (S20, S21) in the figure, so all stored values sit within 2.2 % and stay. L21 and L27 draw level in Figure 1 and L27 stands 0.25 mm taller on the page; that is inside the noise band and it is a baseline value. L22 tapers from 13.50 to 13.20 across its 1.04 mm edge where the figure draws it square at 13.53, because a cemented face holds one height. Setting S11 to 13.50 would square L22 but wedge L23 and lose the step, so it stays.

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| S5 `rimCutDepthMm` | None | 3.21 | Above |
| Surface label of the asphere | `19` | `19A`, with the H1 bracket's `fromSurface` | The data spec's convention; 441 V2 files use a suffix. The patent stars surface 19 |
| `cemented` on L27r, L27g | `H1` | Removed | The inspector read "DOUBLET H1" on one physical lens, ¶0074. `NikonAFSDXNikkor1680mmf284EEDVR` and `NikonAFSDXNikkor1024mmf3545GED` set the precedent. The H1 bracket stays and now only the C groups carry a doublet badge |

Labels found correct. Element names and `diagramLabel` agree and follow the patent's signs. Every `type` agrees with the signs of R and ¶0072 to ¶0074. Roles are true: L14 is G1's strongest positive element and all three C groups are negative, as the patent's cemented negative lenses are. Stored element focal lengths match the thick-lens formula in air to 0.001 mm on all twelve entries. The resin's +419.53 mm is that formula's value for its 0.150 mm meniscus, of the same order as other Nikon layers (L2r +589.8, L21r −382.8). Brackets G1 and G2 are the patent's top level; G2a and G2b are not drawn, so there is no parent and subgroup pair. C1 to C3 and H1 span the right surfaces and clash with neither D7 nor BF. The stop is at m13 between L23 and L24. L22 shows "APD (INFERRED)": Nikon's section colours element 6 as ED and element 11 as aspherical, which are L22 and L27, and the patent's text names neither.

Movement. ¶0075 and the Figure 1 arrow give G1 fixed and G2 moving objectward as one body. Keyframe 0 is infinity (D7 9.215, BF 38.42) and the last is 0.25 m (D7 0.976, BF 46.659), with travel 8.239 mm. D7 falls by what BF gains at both near states, and the stop gaps do not change. The group chart shows G1 still and G2 8.24 mm toward the object. The slider reads ∞, 1.13 m at keyframe 0.22032 and 25 cm at the far end. 0.25 / 1.134725 m gives 0.22032, and D0 + TL is the patent's 1.1347 m. Patent-positions mode offers ∞ and 1.13 m, the latter with D7 8.06 and BF 39.57, so `published: [1]` lands on the printed row.

Colour. The patent plots d and g only (¶0061, ¶0080), so C and F have nothing to compare. Both axes in Figure 2 lean about 2 px over 300, so readings are from the local axis at 108 px/mm, one pixel being 0.009 mm. Separation of g from d at pupil 1 / 0.8 / 0.7 / 0.5 / 0 reads 0.088 / 0.093 / 0.074 / 0.037 / 0 mm, against 0.076 / 0.081 / 0.064 / 0.031 / −0.007 mm traced, within about a pixel. The d curve crosses the axis near pupil 0.9 in both. Both lines read about 0.02 mm positive of the trace at mid-pupil, which is the plot's offset, since d is exact from Table 1. Figure 2(b) reads the same way at NA 0.26. Lateral colour reads +0.024 mm at Y 21.6, −0.006 mm at Y 8 and zero near Y 15, against +0.026, −0.0056 and Y 15.1. No line disagrees beyond the reading error, so no element is implicated.

Distortion reads −2.51, −1.65 and −0.93 % at Y 21.6, 15.1 and 10.8, against −2.44, −1.64 and −0.94 % traced.

Astigmatism at Y 21.6, T d / T g / S d / S g, in mm:

| Source | T d | T g | S d | S g |
| --- | ---: | ---: | ---: | ---: |
| Figure 2(a) | −0.153 | −0.028 | 0.00 | +0.13 |
| Ray through the stop centre (the app's −0.251 T d) | −0.248 | −0.153 | −0.024 | +0.090 |
| Ray aimed at the paraxial entrance pupil | −0.182 | −0.074 | −0.023 | +0.092 |

Sagittal curves agree within 0.03 mm for d and 0.04 mm for g over the field. The meridional gap is not a prescription fault. Coddington and finite-ray T agree at −0.248, and moving the reference ray by 3.6 % of the stop radius, where a paraxial-pupil aim puts it, recovers most of the gap and leaves S unchanged. The patent's plot most likely uses that ray.

Resin L27r, nd 1.5361, νd 41.21: the patent calls it a thin aspherical plastic resin layer (¶0074, p. 12) and gives no name, supplier, extra line index or partial dispersion anywhere. `Unmatched` stands.

Validator clean, image-circle floor clean, field coverage 100 %, `audit:aperture` finds no rim, trace or iris limit, no `CLIPS-AXIAL` or `BLOCKS-CHIEF`. Engine half-field 32.68°, `tracingHalfField` 34.64°, F/1.86 and stop radius 10.519 mm are unchanged. No `Open:` line remains.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.marketing: 1.8` from the product name, so the wide-open readout names the marked f/1.8 beside
  the design f/1.86. No optical value changed.

## 2026-11-14 — Published finite conjugates

Patent: JP2015118186A, Numerical Example 1.

| State (zoom/keyframe) | Field | Before | After | Source and axial residual |
| --- | --- | --- | --- | --- |
| 0/1 | `focus.conjugates` | None | 1019.325 mm, `first-surface` | PDF p. 13, Numerical Example 1, Table 1, ［可変間隔データ］, 近距離 column, Ｄ０ row; Ｄ０ = 1019.325; D7=8.063 mm. Image minus authored plane: +0.0027720062 mm (+0.65935028 diffraction depths), `consistent`. Alternate reference: 35.116546760485456 depths. |

Reference definition (¶0066, PDF p. 11; units ¶0069): “また、物体からレンズ最前面までの距離をＤ０とする。”

Authored BF=39.572 mm follows the fixed G1/image-plane constraint in ¶0075; it is not a separate printed near BF row.
