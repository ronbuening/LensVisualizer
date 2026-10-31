# SIGMA 23mm f/1.4 DC DN | Contemporary — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2024-035865 A (特開2024-35865)\
**Application:** 特願2022-140462\
**Filed:** September 5, 2022\
**Published:** March 15, 2024\
**Inventor:** Kyosuke Murakami (村上 恭介)\
**Applicant:** Sigma Corporation\
**Title:** 大口径比光学系 (Large-Aperture-Ratio Optical System)\
**Worked examples:** 4\
**Example details:** 数値実施例1 / Numerical Example 1; Figure 1 and corresponding Figures 2–5

The October 30, 2026 original shape-and-glass review uses the exact local `patents/JP2024035865A.pdf`. The June 23 raw-geometry correction remains dated history in the audit; it was not a completed glass/source review and is not relabeled as one. The present review directly checks publication identity, all 24 source rows, all 13 media, three aspheric coefficient sets, both focus stations, named partial-dispersion evidence and native figures.

Numerical Example 1 is a positive/negative/positive inner-focus system with 13 elements in 10 groups. A fixed positive G1 is followed by STO, the single negative focus element G2/L21 and fixed positive G3. Source paragraphs 0057–0060 on pages 8–9 define this construction. Three cemented pairs join source rows 7–9,14–16 and20–22. The selected table has no filter, rear plate, hybrid layer or extra source medium. Surfaces 18,23 and24 alone are aspheric; no printed radius, spacing, coefficient, source index/Abbe pair, stop or focus control is changed.

The 23mm/f1.4 marketing metadata and four existing mount associations remain distinct from the source's 22.31mm/F1.46 infinity design. The 13/10 construction and close-focus distance support the prior provisional product association, but the patent does not identify a production prescription, manufacturing process or element-by-element SLD placement. No manufacturer fact is freshly verified by this original-only review.

## Exact Source Prescription and Controls

Numerical Example 1 is paragraph 0062, PDF/printed page 9: rows 1–24, all 13 nd/νd pairs, L13/L1p PgF and all three asphere sets. The summary, both source gap stations and group powers continue on page 10. Paragraphs 0047–0050, pages 7–8, define units, reference wavelengths, asphere convention and stop notation. All R/d/aspheres and controls remain exactly as transcribed. The design focal metadata changes from computed 22.3102623 to the literal printed 22.31mm; the computed EFL stays separately reported.

| Source quantity                 | Infinity | Near row labeled 0.25 m |
| ------------------------------- | -------: | ----------------------: |
| Focal length, mm                |    22.31 |                   22.51 |
| F-number                        |     1.46 |                    1.59 |
| Full field 2ω, degrees          |    67.85 |                   60.77 |
| Image height, mm                |    14.20 |                   14.20 |
| Summary total track, mm         |    94.32 |                   94.32 |
| d0, object to first surface, mm | Infinity |                  155.00 |
| d17, STO to L21, mm             |   3.2524 |                  7.3364 |
| d19, L21 to G3, mm              |   7.3908 |                  3.3069 |
| BF, mm                          |  18.7827 |                 18.7827 |

Only G2 moves imageward by 4.0840 mm. The literal d17+d19 sum changes by 0.0001 mm; literal tracks 94.3219/94.3220mm agree with the summary's rounded 94.32 mm. These small printed-coordinate differences are retained without forcing exact cam conservation. The near source object plane is 155 mm before surface 1, about 249.322 mm from the image, separately from the rounded 0.25 m label. Intermediate focus controls are illustrative interpolations, not additional source stations.

The stop is source row 17, fixed with G1/G3. No physical iris diameter or focus-dependent opening schedule is printed. The current derived physical radius is 10.609023030045 mm and remains unchanged. Source 1.46/1.59 labels and exact real working f-numbers are treated as separate conventions; no iris is tuned from a drawing or from a convention-dependent numerical difference.

## Native Figure, Heights and Outer Rims

Figure 1 on page 16 is a 2677×1661 one-bit original image embedded at about 825 ppi. Figures 2/3 on the same page are 1800×2325 native images at about 545 ppi. A 600 dpi page render downsamples Figure 1 and slightly upsamples the plots; it is not the native source resolution. Native crops were inspected without claiming extra information from magnification.

The optical axis is at native row 953±2; first vertex x≈346 and image-plane line x≈2562 give about 23.50 px/mm over the 94.3219 mm source track. Checks against intermediate vertices support that axial scale. Practical semi-height uncertainty is about ±0.25 mm, including stroke width, schematic curvature/scale and conservative rounding. The weak S16 cap/shoulder separation has about ±0.5 mm uncertainty. Brackets, source focus arrow, STO and image-plane strokes, leaders and axis ink are excluded.

Every element, concave end, cemented interface and aspheric pair was inspected. The source prints no clear/effective diameters; the following are source-figure reconstructions, not dimensioned factory clear apertures. Former filter-envelope/ray-envelope estimates were particularly oversized at the rear, where the native blank is about 11.2 mm high in radius rather than 14.5–15mm.

| Element | Adopted front clear sd | Adopted rear clear sd | Source outer outline and constraint                                       |
| ------- | ---------------------: | --------------------: | ------------------------------------------------------------------------- |
| L11     |                   17.4 |                  13.7 | Rear outer shoulder 17.4 preserves the inward concave cap                 |
| L12     |                   14.1 |                  12.6 | Rear outer shoulder 14.1                                                  |
| L13     |                   13.7 |                  13.7 | Weak rear curvature reaches the drawn blank; no independent land resolved |
| L14     |                   11.7 |          14.8(shared) | Front outer shoulder 14.8                                                 |
| L15     |           14.8(shared) |                  14.8 | Shared interface remains a clear curve, with no opaque land               |
| L16     |                   15.9 |                  15.9 | Native flat outer ends                                                    |
| L17     |                   15.9 |                  15.9 | Native flat outer ends                                                    |
| L18     |                   14.3 |          14.3(shared) | Native bonded profile                                                     |
| L19     |           14.3(shared) |                  12.5 | Existing weak optical cap retained; resolved rear outer outline 14.3      |
| L21     |                   10.9 |                  10.0 | Rear outer shoulder 10.9                                                  |
| L31     |                   11.2 |          11.2(shared) | Unused outer step at the bonded profile is not made into an opaque land   |
| L32     |           11.2(shared) |                  11.2 | One connected shared clear interface                                      |
| L33     |                   11.2 |                  11.2 | Biaspheric blank follows native outer height; coefficients unchanged      |

This changes 22 clear caps and adds five `rimExtensionSd` values at S2/S4/S7/S16/S19: 17.4/14.1/14.8/14.3/10.9 mm. Each extension preserves its adopted optical cap. S16's old 12.5 mm clear cap is retained because the weak inner cap limit is less precisely resolved than its outer stroke. There are no cuts, rimCutDepthSource exemptions, detached wings or unsupported opaque cemented-interface lands. The unused bonded outer step is a drawing/blank representation limitation, not a new refracting surface.

A full-clear S2=17.4 mm trial treats an outer blank beyond R16.8636 as an optical sphere, producing a 90° slope versus the unchanged 64.2° guard. It is rejected in favor of clear 13.7 plus outer 17.4. A S7 clear 11.6 mm trial also validates within the native uncertainty; 11.7 mm is adopted from the resolved knee rather than choosing a passing tolerance boundary. Treating S7's whole 14.8 mm outer shoulder as an optical cap is rejected from the native straight end even where geometry alone permits it. No R/d/asphere/control or guard is changed to fit the figure. Earlier June 23 raw-edge reductions are preserved as history; the current smaller source-supported outlines supersede those clear-cap estimates.

## Glass and Genuine Published Spectral Evidence

Paragraph 0047 on pages 7–8 explicitly identifies nd at d587.56 nm, νd at the d reference, and PgF for g435.84 nm/F486.13 nm. No individual nC/nF/ng indices are printed. Every one of the 13 modeled media is checked against the selected page 9 table. Reference wavelengths and all nd/νd pairs are preserved; no unsupported catalog-derived per-lens spectral field exists to remove or is introduced.

| Element / source row |      nd |    νd | Existing compatible spectral proxy          |
| -------------------- | ------: | ----: | ------------------------------------------- |
| L11/1                | 1.55032 | 75.50 | FCD705                                      |
| L12/3                | 1.51680 | 64.20 | N-BK7 (current resolution of prior aliases) |
| L13/5                | 1.94595 | 17.98 | FDS18; source PgF/APD retained              |
| L14/7                | 1.77047 | 29.74 | NBFD29                                      |
| L15/8                | 1.87071 | 40.73 | TAFD32                                      |
| L16/10               | 1.91082 | 35.25 | TAFD35                                      |
| L17/12               | 1.59282 | 68.62 | FCD515                                      |
| L18/14               | 1.59282 | 68.62 | FCD515                                      |
| L19/15               | 1.85451 | 25.15 | NBFD25                                      |
| L21/18               | 1.69350 | 53.20 | M-LAC130                                    |
| L31/20               | 1.56732 | 42.84 | E-FL6                                       |
| L32/21               | 1.76385 | 48.49 | S-LAH96                                     |
| L33/23               | 1.80610 | 40.73 | M-NBFD130                                   |

All 13 existing curve identities are unchanged. Labels now consistently call them qualified spectral proxies; they do not prove supplier, melt, chemistry, molding method, annealing grade or production procurement. Former borosilicate/lanthanum/flint/moldable/SLD implications are withdrawn as source facts. The three higher-Abbe positions can be described by their numeric dispersion without identifying a production material. No unidentified medium is assigned a newly invented chemistry or spectral fit.

L13/L1p is the one genuine selected partial: page 9 prints PgF=0.6546 at νd17.98. Paragraphs 0029–0030 on page 6 explicitly identify L1p anomalous dispersion and condition (3), so the existing patent APD badge is supported by more than the printed ratio alone. The source's own normal is 0.64833−0.0018νd: its deviation is 0.038634, printed as 0.0386 in the condition summary. It is not the engine's deviation. Recovering the printed absolute PgF and using engine normal 0.6438−0.001682νd gives 0.04104236. The stored source-derived `dPgF:0.041042` is retained; its small rounding difference is below source precision. The four-place PgF has approximately ±0.00005 rounding uncertainty, and converted digits do not imply a more precise melt measurement. No partial or APD badge is invented for the other 12 media. The source d/g/C plots are contextual spectral evidence, not catalog supplier identification or an APO production claim.

## Current Runtime and All Focus States

Standard surface and image-circle checks pass. The standard aperture census reports one infinity station within its unchanged 3% criterion, and current-format chief coverage is at least 99%. The aperture census uses the paraxial iris convention scaled by actual beam clearance. It does not certify that the exact working f-number is within 3% of the source label.

The 65-state focus grid tests all eight aperture presets: 520/520 exact working calls trace before and after the native-cap changes. Wide-open exact working f-numbers are 1.543121958 at infinity and 1.675954722 at the 0.25 m display plane, respectively +5.693285%/+5.405957% from the source 1.46/1.59 labels. The fixed derived iris and nominal 1.46 control are retained; the source gives no physical schedule establishing an iris error. No tolerance is relaxed and neither exact-working discrepancy is reported as a 3% pass.

Collimated control-grid bundles cover axis, half/full current-format field and diagram field, each 193 pupil samples at all 65 focus states. Every axis passes 193/193. Current full-format bundles pass 107/193 at infinity and 141/193 at the near control. These launches are collimated directions through focus-adjusted geometry, not actual finite-object illumination. A 33.925° bounding-sphere vector chief at infinity clears all 24 surfaces and lands at |Y|14.200595 mm versus source 14.20 mm. The source near 30.385° half-field is not reused as a collimated finite-object launch.

The actual Gaussian finite-object supplement derives the full current matrix at each of 64 positive-focus controls, then inverse-solves object height to actual image targets Y=0/7.1/14.2mm. All 192 chief roots converge and physically clear; all 64 axial bundles pass 193/193. Pupil totals are 31,374 passed, 5,680 clipped, two failed no-bracket continuations at focus 0.984375/full actual image-height field, and zero unaimed. The source-near endpoint itself has no failed continuation. These finite-object launches are distinct from the collimated grid and from the display-distance working calculation.

The published object-plane endpoint is also checked directly: source d0=155 mm at focus 1, with the same actual image-height inverse solve. All three chiefs clear; axis/half/full bundles pass 193/179/136 of 193, with 71 clips and no failed/unaimed samples. This tests the printed object plane rather than assuming that a rounded 0.25 m label defines it.

The source-near Gaussian object distance is 155.037715 mm before the first surface, total 249.359715 mm and magnification −0.138397169. It is close to the printed 155 mm object plane, while the display label is 250 mm total. Infinity image residual relative to retained BF is +0.000665084 mm; the 0.25 m display-plane near residual is −0.012215792 mm. The largest sampled interpolation residual is −0.357315943 mm at focus 0.5625 (Gaussian total 371.984340 mm versus display 444.444444 mm). Relative Gaussian-distance/display-label discrepancy reaches 35.537688% near focus 0.015625 (Gaussian 10.313970 m versus display 16 m). Sparse endpoint data do not certify the assumed distance mapping or a production focus cam; the original gaps and controls are preserved.

## Render, Constraints and Production Scope

Actual generated SVGs at infinity, mid control and near were compared with native Figure 1 and its resolved shoulders. Across all 65 focus states, 845 element paths are finite, closed and connected, with zero hidden renderer trimming. The three bonded interfaces remain shared transparent curves; no land is used to fake a source square block at a bonded interface. Monolithic aspheric elements remain connected, with no independent resin wings.

Source-supported smaller caps reduce off-axis pupil transmission compared with the former envelope estimates. Axial clearance, full field chief clearance, full pupil survival and source blank fidelity are separate findings. No mechanical barrel, autofocus actuator, stabilization path, measured supplier spectrum or production electronic correction is modeled or certified. The patent-production correlation remains qualified.

## Sources and Review History

- Exact local `patents/JP2024035865A.pdf`, independently confirmed first page. Paragraphs 0029–0030/page 6 for named APD and source normal; paragraphs 0047–0057/pages 7–8 for wavelengths, asphere/stop/focus conventions; Numerical Example 1 paragraph 0062/pages9–10 for all source rows, media, coefficients and both focus stations. Native Figures 1–3/page 16; corresponding transverse Figures 4–5 continue on pages 16–17.
- [Audit](Sigma23mmf14DCDNC.audit.md), actual June 23 raw-geometry history and October 30, 2026 complete original shape/glass review. Existing 23 mm/f1.4 marketing/mount associations remain catalog metadata rather than an additional source-inspection claim.
