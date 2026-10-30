# CANON RF 50mm f/1.4 L VCM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2025/0251576 A1\
**Application Number:** 18/969,340\
**Filed:** December 5, 2024\
**Published:** August 7, 2025\
**Priority:** JP 2024-016858, filed February 7, 2024\
**Inventor:** Tomohiro Ino\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** Optical System and Image Pickup Apparatus

The exact local original is `patents/US-20250251576-A1.pdf`, Numerical Example 1, PDF p16 (printed p6), with Figure 1 on PDF p2 and infinity/close aberration Figures 2A/B on p3. Front-page dates and parties are directly verified. The production RF50mm F1.4 L VCM association remains a qualified correlation: the patent does not identify the marketed product or its production prescription.

The selected example states 48.50 mm, F1.46, maximum image height 21.64 mm and half-angle 24.04°. Marketing 50 mm/f1.4 remains separate. Fifteen modeled media include a 0.11 mm resin layer on a glass substrate; paragraphs 0024–0025 (PDF p12) explicitly support that hybrid construction and its object-side asphere. The composite counts as one of 14 physical elements in 11 air-separated groups. The source does not establish UV curing, glass molding, resin chemistry, glass chemistry or any supplier.

## Optical Architecture and Elements

The unit sequence is positive L1, positive moving L2, negative fixed L3, primary stop, positive moving L4/Lr1 and negative fixed L5/Lr2. Paragraph 0019 (PDF p11) fixes L1/L3/L5 relative to the image plane; paragraphs 0026 and 0031 (p12) move L2/L4 objectward. Literal infinity unit focal lengths are approximately +53.015, +124.708, −49.725, +38.048 and −96.431 mm. These quantities do not establish a unique named design family. Total track/EFL≈2.42 and BFL/EFL≈.302 distinguish the model from a strict telephoto or retrofocus classification.

| Medium | Published nd / vd | Shape and function                        | Compatible spectral proxy |
| ------ | ----------------- | ----------------------------------------- | ------------------------- |
| E1     | 1.92286 / 20.9    | Positive front meniscus                   | E-FDS1 (HOYA)             |
| E2     | 1.53352 / 52.8    | Source resin aspheric layer, bonded to E3 | Unresolved resin          |
| E3     | 1.65412 / 39.7    | Negative hybrid substrate                 | S-NBH5 (OHARA)            |
| E4     | 1.77047 / 29.7    | Negative front of D1                      | NBFD29 (HOYA)             |
| E5     | 1.76385 / 48.5    | Positive rear of D1                       | S-LAH96 (OHARA)           |
| E6     | 1.91082 / 35.2    | Positive collector completing L1          | TAFD35 (HOYA)             |
| E7     | 1.90043 / 37.4    | Positive L2 focus unit                    | TAFD37A (HOYA)            |
| E8     | 1.77047 / 29.7    | Plano-concave fixed L3                    | NBFD29 (HOYA)             |
| E9     | 1.59522 / 67.7    | Positive front of D2                      | S-FPM2 (OHARA)            |
| E10    | 1.73037 / 32.2    | Negative rear of D2                       | NBFD32 (HOYA)             |
| E11    | 1.49700 / 81.7    | High-Abbe positive in L4/Lr1              | FCD1 (HOYA)               |
| E12    | 1.80400 / 46.5    | Positive with two aspheric faces          | S-LAH65VS (OHARA)         |
| E13    | 2.00100 / 29.1    | Plano-convex front of D3                  | S-LAH99 (OHARA)           |
| E14    | 1.58144 / 40.8    | Biconcave rear of D3                      | S-TIL25 (OHARA)           |
| E15    | 1.72825 / 28.5    | Negative image-side meniscus              | S-TIH10 (OHARA)           |

D1 (E4/E5) and D3 (E13/E14) are weakly negative combinations of individually stronger elements; D2 (E9/E10) is negative within the positive L4 unit. Shared interfaces 4, 7, 17 and 24 remain refractive boundaries without invented opaque lands or extra cement media. The first boundary is the genuine resin/glass bond. Isolated element power does not describe the behavior of an entire cemented or spaced unit.

## Glass and Spectral Evidence — 2026-10-30

Every one of the fifteen media was checked against the selected original's surface table on p16. Paragraphs 0061–0063 (p15) define d 587.6 nm, F 486.1 nm, C 656.3 nm and vd=(Nd−1)/(NF−NC); paragraph 0070 defines the aberration plot's g 435.8 nm. All source nd/vd values remain literal and now carry explicit d-line provenance. Table 1 on p20 gives E1 vd1=20.881 in its condition summary, consistent with rounded prescription vd20.9; that genuinely printed summary value is retained as context rather than substituted into the prescription.

The selected example publishes no numerical C/F/g indices, partial-dispersion ratios/deviations or normal line. Removed 24 catalog-derived C/F/g overrides from eight media. Fourteen existing compatible curve identities remain unchanged, including FCD1 for E11; the source resin has no compatible catalog identification and remains unresolved. Catalog curves supply approximate spectral behavior, never proof of supplier, melt, composition or historical manufacturing process. Source index/Abbe data do not by themselves establish fluoride, fluorophosphate or lanthanum chemistry. E11's production UD association remains an inference; no source numerical APD or APO claim is added. Labels and public roles now carry those qualifications.

## Native Rim Review and Retained Constraints

The image-only original contains native 2560×3300 pages at approximately 300/301 ppi. A 600 dpi view would upsample about 2×. Figure 1's first-to-last vertex span of approximately 1,500 native pixels divided by the literal 102.85 mm optical track gives about 14.58 px/mm. Clean optical endpoints carry ±2–3 native pixels (±.14–.21 mm), with further schematic/calibration uncertainty. Group brackets, leaders, arrows and stop artwork are excluded from optical heights. No manufactured aperture dimensions are printed.

| Element/end set | Native inferred cap (mm) | Adopted clear/outer disposition                               |
| --------------- | ------------------------ | ------------------------------------------------------------- |
| E1, S1/2        | ≈23.0                    | Both 23.0; prior 28.8/24.5 removed                            |
| Hybrid S3A/4    | ≈21.7                    | Both 21.7, coextensive; prior 24/23.5 mismatch removed        |
| Hybrid rear S5  | Clear ≈20.2, blank ≈21.7 | Retain constrained clear 18.2; resolved outer 21.7            |
| D1 front S6     | ≈20.2                    | Retain constrained clear 18.2; resolved outer 20.2            |
| D1 S7/8         | ≈20.2                    | Both 20.2; shared interface remains optical                   |
| E6 S9/10        | ≈21.2                    | Both 21.2                                                     |
| E7 S11/12       | ≈17.7                    | Both 17.7                                                     |
| E8 S13/14       | ≈16.2                    | Both 16.2                                                     |
| D2 S16/17/18    | ≈14.4                    | Common 14.8 as qualified near-source beam floor               |
| E11 S19/20      | ≈16.9                    | Both 16.9                                                     |
| E12 S21A/22A    | ≈18.4                    | Both 18.4                                                     |
| D3 S23/24/25    | ≈18.7                    | Common 18.7; shared interface remains optical                 |
| Tail S26/27     | ≈18.7                    | S26 remains 16; S27 rises 16→16.1 as source-field chief floor |

All elements, concave ends, bonds and the hybrid layer were inspected in the source and actual SVG. S5/S6 optical caps remain below the native drawing because literal 20.2 mm caps give 10.829173 mm sag intrusion in the 9.65 mm gap, exceeding its unchanged 8.685 mm guard and physically overlapping. Retained 18.2 caps give 8.665970 mm intrusion; the added outer shoulders preserve those optical caps. The source hybrid has no disconnected resin wing: its coextensive 21.7 mm bonded layer stays positive, minimum thickness .0470798 mm at radius 15.2737 mm. No opaque land is invented at its bond or the cemented interfaces.

Tail S26 at native-inferred 18.7 would give 10.060026 mm intrusion in its 9.09 mm gap (allowed 8.181), physically overlapping. An outer-only 18.7 trial, while keeping clear 16, also fails policy at 8.277722 mm despite positive air. Both trials were rejected. The retained smaller S26 outline is a model constraint, not source proof that the native drawing has that cap. Source R/d, neighboring caps, stops, coefficients, controls and guard tolerances were not tuned to make a trial pass. No concave cuts are authored.

The two stated-beam floors are distinct from drawing measurements. Common D2=14.4 clips four of 49 axial samples at S18 in the genuine published −400 mm state: peak radius 14.791466724 mm, so 14.8 clears it. The Gaussian conjugate supplement reaches14.791818751. S27's old16 mm cap clips the published infinity 24.04° chief at16.097947211 mm;16.1 clears with a tight .002052789 mm sampled margin. These are inferred, source-state-supported cap floors within a non-production model, not dimensioned source rims. Baseline near-state hidden trim of 1.036638 mm at S14 and .836638 mm at S16 is eliminated.

## Focus, Launch Scope and Field Coverage

| Gap | Source infinity (mm) | Source near (mm) |
| --- | -------------------: | ---------------: |
| d10 |                 3.76 |             1.46 |
| d12 |                 3.66 |             5.96 |
| d15 |                11.67 |             7.27 |
| d22 |                 2.68 |             7.08 |

The literal close object position is −400 mm from the image plane; paragraph 0068 (p15) defines that reference. With the 117.51 mm literal model track, the object is 282.49 mm ahead of S1. Actual finite-object launches use that plane. The Gaussian conjugate inferred from the same near gaps is 399.791635 mm object-to-image, and its paraxial magnification is −.155179252; a source −400 mm plane has nonzero matrix residual B=−.032333865 mm. These small differences remain explicit rather than claiming exact conjugacy. Source gaps and the existing linear control interpolation are unchanged. Intermediate slider states are illustrative, not published source focus rows.

Three scopes are kept separate: the published collimated infinity state; the literal published 400 mm finite plane; and a 65-position Gaussian finite-object supplement at 0:1/64:1. A second 65-position collimated geometry sweep checks the authored focus-adjusted shapes without pretending to be actual finite focus. Both 65-state grids pass 3,185/3,185 axial samples and 195/195 chiefs, with 0 failed seeds and 0 hidden trim. Gaussian-grid bundles at 0/.6/1 are 49/38/6 at infinity, 49/36/8 at half and 49/36/10 near; collimated near is 49/38/17. These off-axis survivor counts show vignetting, not complete transmission.

Finite .6/1 probes use paraxial object fields yObject=(21.65×fraction)/A; they are not inverse-solved distorted sensor corners. The literal 400 mm plane is also tested separately using source 21.64 mm as the paraxial image reference: .6/1 chiefs land at 13.052354/21.896866 mm, bundles 36/10 of 49. A first-vertex 24.04° object-angle convention gives 19.755399 mm at the largest finite point and 19/49 rays; no source object-field height is printed, so this is an additional convention-specific probe. No full finite-corner reach is claimed from either field construction.

At infinity, the direct source 24.04° chief reaches 21.921115 mm and the bundle transmits 4/49 samples after the S27 correction. This is distinct from the paraxial source image-height reference 21.64 mm. The model's roughly +1.33% distortion is consistent with native Figure 2A's approximately +1.3±.1% reading. The separate generic inverse image-height audit reaches the 21.65 mm full-frame reference and passes 100%. Source plot agreement, sampled runtime clearance and production correlation remain separate conclusions.

## Aspheres, Source Residual and Verification

All three source aspheres—3A on resin and 21A/22A on E12—retain literal K0 and A4–A12. All powered radii, physical thicknesses, index pairs, primary iris 13.552522602 mm and focus/zoom definitions are unchanged. No molding process follows from the catalog proxy for E12. Prepared vertices match baseline exactly across all 65 focus states. Fourteen glass curves and the unresolved resin resolver result also match baseline.

Literal infinity EFL 48.499053489 mm and BFL 14.659917138 mm closely reproduce source 48.50/14.66; near EFL is 44.134871258 mm. Source overall 117.49 mm differs from the literal 117.51 mm sum. Paragraph 0065 includes back focus in overall length, so the .02 mm discrepancy is recorded in structured unresolved source errata; no unique source-supported correction or extra plate is established.

All 15 material SVG paths are finite, closed and connected at 65 focus states and nine duplicate display combinations, with no hidden renderer trimming; 14 physical counted elements include the resin/glass composite. Narrow surface, image-circle, aperture and inverse-field audits pass (0 undersized, 0 raises); the full cut probe finds no inferred cuts. The retained S5/S6/S26 constraints, source length residual, inferred rims/iris and finite-field conventions limit claims of physical or production fidelity. The original 2026-07-04 audit date is preserved; this fresh review is 2026-10-30.

## Sources

- Local original US20250251576A1, front p1; Figure 1 p2; Figures 2A/B p3; paragraphs 0019/0024–0026/0031 pp11–12; definitions 0061–0070 p15; Numerical Example 1 p16; Table 1 p20.
- Existing product correlation and catalog-proxy history are preserved as qualified context; no family publication or external prescription substitutes for the selected original.
