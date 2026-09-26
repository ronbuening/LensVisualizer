# MIRANDA AUTO EC 200mm f/3.5 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP1976-114926 (特開昭51-114926)\
**Application Number:** 特願昭50-39273\
**Filed:** 1975-04-02\
**Published:** 1976-10-09\
**Inventor:** Kunio Shimada (島田 邦夫)\
**Applicant:** ミランダカメラ株式会社\
**Title:** 小型軽量の大口径超望遠レンズ\
**Embodiment analyzed:** Example 1

The prescription is based on Example 1 of JP1976-114926. The patent gives a six-element, five-group, all-spherical telephoto design normalized to `f = 100`, with back focus 28.98, total optical track 78.94, aperture ratio approximately 1:3.5, and approximately ±6° field. Figure 1 shows three separated elements ahead of the diaphragm, one separated element behind it, and a cemented two-element rear group. The numerical prescription appears on PDF page 4 / printed page 184, while the section drawing is Figure 1 on PDF page 5 / printed page 185. [1]

The implemented model applies a uniform 2× dimensional scale to the patent example. Its computed effective focal length is 200.276737 mm, while the production lens was marketed as 200 mm. The manufacturer manual lists the Miranda Auto EC 200mm f/3.5 as a 5-group/6-element 35 mm-format lens with a 12° angle of view and 2.5 m closest focus. Those product facts, the patent applicant, the matching 5/6 architecture, the matching f/3.5 aperture, and the 2× focal scaling form a strong convergent correlation. The manufacturer source does not explicitly identify JP1976-114926 as the production prescription, so the attribution remains a correlation rather than manufacturer confirmation. [1][2]

One source discrepancy is material to the identification. Example 1 prints `N5 = 1.59680` with `V5 = 55.6`. Used literally, that value gives a gross mismatch to the patent's focal length, back focus, and Petzval sum. The implemented model instead uses `N5 = 1.69680`, while preserving the printed value in the audit record. With that one-digit correction, the source-scale model gives EFL 100.138368, BFD 29.055024, and normalized Petzval -0.0534865, consistent with the patent's 100, 28.98, and -0.053 at the precision of the table. The corrected coordinate also coincides with the published 697556 lanthanum-crown region, including SUMITA K-LaK14 at `nd = 1.69680`, `νd = 55.6`. This is an explicit source-correction inference, not a silent transcription change. [1][3][4]

## Optical Architecture

The final model is an all-spherical telephoto prime with six elements in five air-separated groups. Its physical sequence is L1, L2, L3, the diaphragm in the long D6 air space, L4, and a cemented L5/L6 rear doublet. The cemented interface is surface 10 in the model and carries the downstream L6 medium, consistent with the physical L5→L6 junction shown in Figure 1. [1]

The power distribution is asymmetric. L1 and L2 are positive, L3 is strongly negative, and the combined L1–L3 front block remains positive with a computed equivalent focal length of +214.31 mm. Behind the stop, L4 is positive, while the cemented L5/L6 pair is net negative; the complete L4–L6 rear block has a weak net negative power corresponding to -621.44 mm. These are powers calculated from the final scaled model, not separate quantities printed by the patent.

The overall R1-to-authored-image track is 157.88 mm. Dividing that track by the computed 200.276737 mm EFL gives `TL/EFL = 0.788309`, so the model satisfies the project definition of a telephoto design. The computed paraxial BFD is 58.110048 mm, well below the EFL, so it is not a retrofocus design. The authored final spacing remains 57.96 mm because it preserves exactly twice the patent's printed 28.98 back focus rather than replacing the source plane with the slightly different paraxial focus produced by the corrected index.

The patent explicitly describes the front section as an Ernostar-type lens system (エルノスター型レンズ系). It also expresses the compactness strategy through conditional inequalities governing refractive-index distribution, Abbe-number relationships, front-block thickness, the long central spacing, and selected surface curvatures. The analysis therefore uses the source's Ernostar identification together with the verified power distribution and published conditions, without assigning unsupported aberration responsibilities to individual surfaces. [1]

## Element-by-Element Analysis

### L1 — Biconvex Positive

`nd = 1.51454`, `νd = 54.6`. Glass: **515546 — KF3 class (supplier not established)**. Standalone `f = +138.10 mm`.

L1 is the first positive element of the front block. Its standalone power is positive, but its optical role is meaningful only together with L2 and L3: the complete front block is much weaker than the sum of the isolated positive powers because L3 strongly opposes them. The patent's first refractive-index condition treats the positive and negative elements as a system-level distribution, so L1 should not be assigned a specific aberration correction independently of its neighbors. [1]

The stored glass label is deliberately class-level. The patent supplies `nd` and `νd` but no manufacturer glass name, no line indices, and no partial-dispersion data. The coordinate is consistent with a 515546/KF3-class glass, but supplier identity is not established. [3]

### L2 — Positive Meniscus

`nd = 1.51633`, `νd = 64.0`. Glass: **516640 crown class / S-BSL7-equivalent**. Standalone `f = +106.76 mm`.

L2 is the second positive member of the front group and has a higher Abbe number than L1. The patent's condition `(V1 + V2)/2 > V3 + 20` explicitly couples the two positive front elements to the lower-Abbe L3. The source presents this relation as part of the front-section color-correction strategy; the model verifies the inequality with 59.3 on the left and 49.2 on the right. [1]

The S-BSL7 reference is an equivalence by coordinate rather than a historical supplier assignment. OHARA lists S-BSL7 at essentially the same refractive index and closely matching Abbe number, but the data file retains a class-level description rather than asserting that OHARA supplied the original production glass. [3]

### L3 — Biconcave Negative

`nd = 1.72151`, `νd = 29.2`. Glass: **722292 dense-flint class / S-TIH18-equivalent**. Standalone `f = -58.01 mm`.

L3 is the strongest negative standalone element in the front half. It reverses much of the power accumulated by L1 and L2 while leaving the full L1–L3 block positive. This positive-front / negative-compensator arrangement is the principal power pattern that enables the verified telephoto ratio.

Its high index and low Abbe number also place it on the opposite side of the patent's first two material conditions from L1 and L2. The first condition compares the mean index of the positive-element set with the two high-index negative elements; the second makes the front positive pair substantially higher in Abbe number than L3. Those relationships are source-published constraints. The exact division of monochromatic and chromatic aberration correction among L1, L2, and L3 is not independently isolated by the verification model. [1]

### L4 — Positive Meniscus

`nd = 1.57501`, `νd = 41.4`. Glass: **575414 flint class / S-TIL27-equivalent**. Standalone `f = +135.23 mm`.

L4 is the first glass element behind the diaphragm and is positive in isolation. Its position after the long D6 spacing makes it part of a rear section with substantially smaller ray heights than the front train in the verified on-axis trace. The complete L4–L6 block is nevertheless weakly negative because the cemented rear doublet contributes more negative power than L4 contributes positive power.

The S-TIL27 reference again indicates a coordinate-equivalent glass class, not a demonstrated original melt. No direct spectral line data were authored for L4 because the patent provides only `nd` and `νd`. [1][3]

### L5/L6 — Cemented Rear Doublet

**L5:** `nd = 1.69680`, `νd = 55.6`. Glass: **697556 lanthanum-crown class**. Standalone in air `f = -30.45 mm`.\
**L6:** `nd = 1.60342`, `νd = 38.0`. Glass: **603380 flint class**. Standalone in air `f = +47.30 mm`.

L5 and L6 share surface 10 and form the only cemented group in the design. Although L5 is negative and L6 positive as isolated elements in air, the cemented pair is net negative, with an equivalent focal length of -92.47 mm in the final scaled model. That cemented-group value is the relevant descriptor of the bonded pair; the isolated-element focal lengths are useful comparative quantities but do not describe the doublet's in-situ action by themselves.

The patent's condition `V5 > V6` is satisfied by 55.6 > 38.0. In the source discussion this condition belongs to the rear-section color-correction logic. It therefore supports describing the pair as deliberately dispersion-balanced, but the available `nd`/`νd` data do not justify an apochromatic or anomalous-partial-dispersion claim. [1]

L5 is also where the numerical source correction occurs. The printed `N5 = 1.59680` is retained as the raw source fact, while 1.69680 is used in the implemented optical model because it simultaneously restores the patent's first-order focal length, back focus, and Petzval sum. The 1.69680/55.6 coordinate is directly represented in the SUMITA catalog as K-LaK14 and is close to OHARA S-LAL14, and the data file explicitly qualifies K-LaK14 as a proxy for this correction hypothesis, not the printed coordinate. [1][3][4]

## Glass Identification and Selection


The integration audit uses these runtime spectral curves: L1: `KF3`; L2: `S-BSL7`; L3: `S-TIH18`; L4: `S-TIL27`; L5: `K-LaK14`; L6: `J-F5`. The coordinate/class descriptions below retain the source-identification context; catalog names are qualified proxies, not evidence of production suppliers.

The patent identifies its glasses only by d-line refractive index and Abbe number. It does not name a supplier, provide Sellmeier coefficients, or publish `nC`, `nF`, `ng`, `PgF`, or `dPgF`. Consequently, the data file names qualified catalog equivalents without claiming historical melts. Catalog line indices found for candidate equivalents are evidence for classification only and are not copied into the lens elements as if they were patent data.

| Element | `nd` | `νd` | Source-coordinate classification | Evidence level |
|---|---:|---:|---|---|
| L1 | 1.51454 | 54.6 | 515546 — KF3 class | exact coordinate class; supplier unproven |
| L2 | 1.51633 | 64.0 | 516640 crown / S-BSL7-equivalent | close catalog equivalent |
| L3 | 1.72151 | 29.2 | 722292 dense flint / S-TIH18-equivalent | close catalog equivalent |
| L4 | 1.57501 | 41.4 | 575414 flint / S-TIL27-equivalent | close catalog equivalent |
| L5 | 1.69680 | 55.6 | 697556 lanthanum-crown class | corrected coordinate; catalog-supported |
| L6 | 1.60342 | 38.0 | 603380 flint class | coordinate class; multiple catalog equivalents |

The palette follows the patent's three material inequalities. Condition 1 makes the mean refractive index of the four positive-designated elements lower than the mean of L3 and L5. Condition 2 separates the front positive pair's mean Abbe number from L3 by more than 20. Condition 3 makes L5's Abbe number larger than L6's. These are verified source relationships; they are stronger evidence than attempting to infer design intent from modern catalog names alone. [1]

No APO label is warranted. The model has no authored line-index or partial-dispersion fields, and the candidate catalog names do not establish that the production lens actually used those catalog melts.

## Focus Mechanism

The optical focus status is **NO_INTERNAL_RECONSTRUCTION**. JP1976-114926 publishes one static Example 1 prescription and no close-focus spacing table, movable-group law, or alternate focus state. The data file therefore has no `var` entries and does not invent internal motion.

The Miranda manual gives a 2.5 m closest-focus distance for the production 200mm f/3.5. That figure is retained as product metadata, not converted into a patent focus model. The available sources are insufficient to determine whether the production optical unit moved rigidly, used an internal compensator, or followed another optical motion law. [2]

## Conditional Expressions

The patent states ten design conditions. Evaluated on the corrected 2× model, all remain satisfied; dimensional conditions scale with the 2× prescription while dimensionless relationships are unchanged. The table below reports the implemented values used by the verifier. [1]

| Condition | Implemented evaluation | Result |
|---|---:|---|
| `(N1+N2+N4+N6)/4 < (N3+N5)/2` | 1.552325 < 1.709155 | Pass |
| `(V1+V2)/2 > V3 + 20` | 59.3 > 49.2 | Pass |
| `V5 > V6` | 55.6 > 38.0 | Pass |
| `0.1f < D1+D2+D3+D4+D5 < 0.25f` | 20 < 32.04 < 50 mm | Pass |
| `0.1f < D6 < 0.25f` | 20 < 33.16 < 50 mm | Pass |
| `D8 > 0.08f` | 25.84 > 16 mm | Pass |
| `-2.0 < f/R2 < 0.5` | -2.0 < -0.724113 < 0.5 | Pass |
| `0.4f < R4` | 80 < 349 mm | Pass |
| `0.2f < R6 < 0.3f` | 40 < 48.28 < 60 mm | Pass |
| `-R8 < f` | 54.92 < 200 mm | Pass |

The first three conditions govern the material distribution explicitly discussed by the patent. The remaining conditions constrain front thickness, the long central spacing, a rear air gap, and selected curvatures. Passing them confirms that the scaled corrected prescription remains inside the patent's stated design domain; it does not by itself quantify residual image aberrations.

## Verification Summary and Modeling Disclosures

The final model preserves the patent's normalized design through a uniform scale factor of 2.0. All radii and axial distances are doubled, while refractive indices and Abbe numbers are unchanged. There are no aspherical surfaces or coefficients to transform. The computed EFL is 200.276737 mm, and the paraxial 43.3 mm-diagonal rectilinear field is 12.3395°, consistent with the patent's approximately 12° full field and the manufacturer's 12° specification. [1][2]

The patent places the diaphragm somewhere inside D6 but gives neither a numerical stop coordinate nor a physical diameter. The implemented stop is therefore a modeling inference: it is placed at 92.5% of D6 from R6 toward R7, giving 30.673 mm from R6 to the stop and 2.487 mm from the stop to R7 after scaling. Its 15.310159 mm semi-diameter is calibrated so the paraxial entrance pupil reproduces f/3.5. The resulting 57.221927 mm entrance-pupil diameter and modeled f-number 3.499999886 are calibration-dependent results, not independent measurements of the production diaphragm. Figure 1 supports the qualitative stop location but not those dimensions. [1]

The patent also publishes no clear-aperture or semi-diameter table. Every surface semi-diameter in the model is therefore a constructed value. The portable geometry verification finds positive edge thickness for all six elements, with a minimum of 0.284621 mm at L6, and a maximum actual spherical rim slope of 35.049°. Exact spherical Snell tracing clears the complete on-axis f/3.5 bundle and the current default off-axis pupil fractions `[-0.75, -0.375, 0, +0.375, +0.75]` at both ±3.6° field signs; a stricter supplemental set using ±0.83, ±0.50, and ±0.17 also clears. At the full ±6° patent field, 74 of 101 sampled pupil positions survive at each field sign; the extreme zones are vignetted at external boundaries. These checks validate the authored geometry at the sampled states, not the production LensVisualizer renderer or a continuum of field and pupil positions.

The corrected final prescription reproduces the patent's printed Petzval result closely. Surface-by-surface `φ/(n·n′)` sums to -0.0002674327 mm⁻¹ in the 2× model; normalized by the scaled patent focal length `f = 200`, this is -0.0534865 versus the patent's -0.053. This agreement is one of the independent numerical reasons for treating `N5 = 1.59680` as a source error rather than as the implemented glass index. [1]

The data revision analyzed here does not include sensor cover glass, filters, inactive dummy planes, or mechanical parts. No close-focus prescription is reconstructed. The Miranda mount is also not encoded because the current project taxonomy has no canonical Miranda-specific mount identifier; the image format is `135-full-frame`, supported by the manufacturer's 24×36 mm specification. [2]

## Sources

1. **Japan Patent Office.** JP1976-114926 (特開昭51-114926), *小型軽量の大口径超望遠レンズ*, inventor Kunio Shimada (島田 邦夫), applicant ミランダカメラ株式会社, filed 1975-04-02, published 1976-10-09. Primary numerical prescription: PDF p.4 / printed p.184; optical section Figure 1: PDF p.5 / printed p.185; front-page metadata: PDF p.1 / printed p.181; explanatory conditions: PDF pp.1–3 / printed pp.181–183.
2. **Miranda Camera Co., Ltd.** *Miranda dx-3 Owners' Manual*. Technical data and 35 mm format: PDF p.17; Miranda Auto EC lens table: PDF p.27. Archived scan: https://www.cameramanuals.org/miranda_pdf/miranda_dx-3.pdf
3. **OHARA INC.** Optical Glass / Glass Type catalog, used for coordinate-class comparison including S-BSL7, S-TIH18, S-TIL27, S-LAL14, and S-TIM5: https://www.ohara-inc.co.jp/en/product/01000/
4. **SUMITA OPTICAL GLASS, Inc.** Zemax optical-glass catalog, used for KF3 and K-LaK14 coordinate checks: https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
