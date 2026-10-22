# Audit Log — Olympus G.Zuiko Auto-W 25mm f/2.8

Patent: JP S39-18282 Y1, sole numerical example / Figure 1.
Companions: `OlympusPenFZuiko25mmf28.data.ts` and `OlympusPenFZuiko25mmf28.analysis.md`.

## Source and reconstruction history

The original Japanese publication and May 1968 Ponder & Best literature establish a probable Pen F production association, with seven elements in five groups, f/2.8 and broadly compatible field. Bilingual technical-paper bylines established the Latin inventor names Saburo Yanagawa and Jihei Nakagawa; the historical applicant was normalized to Olympus Optical Co., Ltd.

Earlier transcription work recognized the scan's ambiguous 3/8 glyphs but retained an incorrect reading of R3/R4. The corrected reading below follows the patent prose and its numerical aberration evidence. It is a source-reading fix, not a patent erratum or an EFL fit.

Initial inferred semi-diameters were [18,18,14,6,6,6,6,6,6,6,6,6] mm. Axial clipping in the small rear components led to the current paired 6.79 and 6.32 mm rims, preserving square-cut faces. The front doublet's reduced rear rim follows Figure 1; the filter-thread size never supplied an optical aperture. The iris is inferred at the midpoint of the printed R8–R9 airspace. Prior exact-ray studies distinguished ordinary vignetting from material-boundary failures, and chief-ray admission from partial bundle coverage. Prior MTF convergence was conditional on the preceding prescription and nominal d-line/Abbe dispersion assumptions.

## 2026-10-22 — Deployment validation and fix-up pass

### Source reread and numerical prescription

Visually reread all three pages of `patents/JPS3918282Y1.pdf`, including both numerical tables, the R4 prose, Seidel table and Figures 1–2. The sole embodiment is normalized to f = 1; every dimensional value is uniformly multiplied by 25. Rechecked normalized rows:

- R1–R12: [3.147, −8.938, 0.7743, 0.9043, infinity, 0.4305, 2.545, 0.3170, −0.3403, −0.4464, −2.675, −0.5540].
- d1–d11: [0.149, 0.060, 1.283, 0.100, 0.010, 0.146, 0.039, 0.238, 0.039, 0.004, 0.119]. The d8 total remains 5.95 mm, split 2.975 + 2.975 mm at the inferred iris.
- N/V: [1.7015/41.1, 1.5163/64.0, 1.7170/47.9, 1.6385/55.5, 1.6889/31.1, 1.7283/28.3, 1.6228/56.9]. All surfaces are spherical or plane; no aspheric coefficients occur.

The mismatches were R3 and R4: 19.37 → 19.3575 mm and 22.62 → 22.6075 mm. The source prints normalized 0.7743 and 0.9043 in a typeface where 3 resembles 8. The explicit prose R4 = 0.9043 and computed A/P columns resolve the reading. Repeated table/prose evidence supports R1 = 3.147, N2 = 1.5163 and N6 = 1.7283. No further row, index, Abbe value or internal gap was changed.

An independent paraxial surface recurrence, using the actual corrected file and normalized marginal height 1, gives the following spherical Seidel A and Petzval P values. For incident slope u, height y, curvature c and index n, incidence is i = n(yc + u), refracted slope is u′ = [nu − y(n′ − n)c]/n′, A = −i²y(u′/n′ − u/n), and P = (n′ − n)c/(nn′). The flat iris is excluded and its two adjacent airspaces are combined.

| Surface | A calculated | A printed | P calculated | P printed |
|---|---:|---:|---:|---:|
| 1 | 0.007774519 | 0.007775 | 0.131008351 | 0.1310 |
| 2 | 0.004735538 | 0.004736 | 0.008031257 | 0.008031 |
| 3 | −1.360884855 | −1.361 | −0.439751906 | −0.4398 |
| 4 | 4.183134217 | 4.184 | 0.461781287 | 0.4618 |
| 5 | 0.447209228 | 0.4472 | 0 | 0 |
| 6 | 2.880776632 | 2.881 | 0.905193236 | 0.9052 |
| 7 | −0.301737650 | −0.3017 | 0.007156363 | 0.007155 |
| 8 | −5.015161405 | −5.015 | −1.286746474 | −1.287 |
| 9 | −12.108624650 | −12.11 | −1.238309575 | −1.238 |
| 10 | 3.481231864 | 3.482 | 0.943989131 | 0.9440 |
| 11 | −0.029434517 | −0.02945 | −0.143469577 | −0.1435 |
| 12 | 9.011081514 | 9.012 | 0.692745702 | 0.6927 |
| Sum | 1.200100436 | 1.201 | 0.041627796 | 0.04163 |

These reproduce the printed pattern and resolve the R3/R4 ambiguity, with small residuals from the printed rounded prescription. Exact agreement at every printed last digit is not claimed: maximum absolute A residual is 0.001375350; sum-A residual is −0.000899564. Sum-P residual is −0.000002204. The other Seidel columns and d/g plots were not independently reproduced.

### First-order values, focus and rims

The patent's nominal scaled f is 25 mm and aperture is f/2.8; it does not print a terminal BFD. The corrected computed EFL is 24.999684043 mm, a −0.001264% residual. Independent calculation and the runtime agree. Before → after:

| Quantity | Before | After |
|---|---:|---:|
| EFL, mm | 25.016502935 | 24.999684043 |
| Gaussian infinity BFD, mm | 25.854587344 | 25.840428922 |
| First-to-image distance at infinity, mm | 80.529587344 | 80.515428922 |
| Runtime stop radius, mm | 4.702950515 | 4.701090764 |
| Nominal entrance-beam radius, mm | 4.467232667 | 4.464229293 |
| Paraxial entrance-pupil radius, mm | 4.489097 | 4.486226570 |
| Paraxial stop f-number | 2.78636 | 2.786270784 |
| Entrance-pupil position from R1, mm | 30.580927825 | 30.569851187 |
| Exit-pupil position from R12, mm | −7.199476757 | −7.199476757 |
| Runtime exit-pupil radius, mm | 5.902511447 | 5.899983157 |
| Runtime matrix B, mm | 32.037755429 | 32.033969813 |
| Petzval sum, mm⁻¹ | 0.001666255820 | 0.001665111822 |
| Runtime half-field, degrees | 27.836013516 | 27.845612421 |
| Close endpoint object-to-image distance | infinity only | 250.000000 mm |
| Close back gap, mm | 25.854587344 (static) | 29.359093472 |

The radius correction explains the power, pupil and field differences; the computed infinity gap explains the shorter track. Nominal f/2.8 and internal track 54.675 mm remain unchanged. Unit focus now varies only the back gap after surface label 12. For matrix [A B; C D], solving −(B + D b)/(A + C b) + 54.675 + b = 250 gives b = 29.359093471974667 mm, versus infinity −A/C = 25.84042892228762 mm. Travel is 3.5186645496870455 mm. The independent probe gives object distance 165.965907 mm ahead of R1 and magnification −0.1407. The 0.25 m endpoint approximates the maker's 10 in = 0.254 m; finite spacing is derived rather than patent-tabulated.

Both before and after, the surface audit reports no validation errors and the aperture audit is within 3% of stated f/2.8, with no rim, trace or failed cases. After the radius correction, the exact nominal f/2.8 axial ray reaches R4 at 6.786983998 mm and R6 at 6.313401356 mm. Existing rims 6.79 and 6.32 mm clear by 0.003016002 and 0.006598644 mm. R5 and R7 also clear (heights 6.659881107 and 5.651306715 mm). The raise audit proposes zero changes. The suggested 6.85/6.40 mm values are unnecessary for the current runtime's stated on-axis beam; no rim was raised. Square-cut paired faces remain equal. No gap allowance override is needed: minimum edge thickness is 0.912047 mm, maximum rim angle 49.2090°, and gap intrusion 87.7933%, below the default 90%.

Other changed runtime outputs are drawing quantities derived from track, scale and field: SC/YSC 7.376170915 → 7.377467995; grid pitch 5.368639156 → 5.367695261; ray lead 28.185355570 → 28.180400123; blade-stub fraction 0.170996014 → 0.171006532; off-axis default angle 16.701608109° → 16.707367453°. Remaining numeric runtime fields are unchanged, apart from closeFocusM 0.254 → 0.25 and negligible floating-point variation in the exit-pupil position.

### Maker-diagram comparison

Viewed Ponder & Best page B-6, May 1968, including the 25mm f/2.8 cross-section and specifications. Its large front cemented component, wide separation and small four-component rear section agree with the patent's 2+1+2+1+1 arrangement. It states seven elements/five groups, 62° field, 10 in minimum focus and a 43 mm screw accessory size. The neighboring 25mm f/4 and 20mm f/3.5 have different counts. The diagram supports a qualified production association but cannot determine precision radii or clear-aperture heights. Figure 1 supports paired square-cut small-element rims and the front doublet's reduced rear face.

### Public fields and documentation

| Field | Old → new |
|---|---|
| name | OLYMPUS G.ZUIKO AUTO-W 25mm f/2.8 (Pen F, May 1968) → OLYMPUS G.ZUIKO AUTO-W 25mm f/2.8 |
| subtitle | JPS3918282Y1 sole embodiment; qualified probable B-6 stock 18-9121 correlation → JP S39-18282 Y1, Sole Example — qualified production correlation |
| visible | false → true |
| catalog.specs | Four process/product-detail lines → 7 ELEMENTS / 5 GROUPS; DESIGN f = 25.00 mm; DESIGN F/2.80; ALL SPHERICAL; RETROFOCUS |
| surfaces R3 / R4 | 19.37 / 22.62 → 19.3575 / 22.6075 mm |
| surfaces[12].d / gaps | Fixed 25.854587343561995 mm after label 12 → omitted surface d and BF values [[25.84042892228762, 29.359093471974667]] under gap key "12" |
| focus.closeFocusM | 0.254 → 0.25 m |
| focus.description | Static infinity-only statement → whole-lens unit focus with calculated 0.25 m image-plane endpoint |
| L1–L7 glass | Unidentified historical melt; catalog equivalents not adopted → Unidentified glass |
| L1–L7 indexReferenceNote | Identical per-element spectral-reference boilerplate → removed; uncertainty retained in the header and analysis |
| L1 role | Positive front member of the widely separated front cemented negative group. → Positive front doublet member |
| L2 role | Strong negative rear member of the front doublet, with figure-supported reduced rear rim. → Negative front doublet member |
| L3 role | Positive plano-convex singlet before the rear doublet. → Positive plano-convex singlet |
| L4 role | Positive front member of the rear doublet. → Positive rear doublet member |
| L5 role | Negative rear member of the rear doublet, before the iris. → Negative rear doublet member |
| L6 role | Negative meniscus after the iris. → Negative meniscus after the iris |
| L7 role | Positive rear meniscus; both literal radii are negative. → Positive rear meniscus |
| Header | Administrative/source-selection terminology → technical provenance, corrected source readings and explicit conjugate calculation |
| Analysis | Processing narrative and stale infinity-only/performance assertions → public identification, corrected first-order/Seidel/pupil values, unit focus and qualified limits |
| Audit | Processing instructions and duplicated status history → substantive source/rim history and this dated change record |

The former four specs were “May 1968 Ponder & Best B-6: stock 18-9121; 62° field; 7 elements / 5 groups”; “Product MFD 10 inches (0.254 m) is metadata, not a modeled focus state”; “43 mm screw accessory size is mechanical, not a clear aperture”; and “Selected card source branch; alternative ambiguous glyph readings preserved.” Their true product facts remain in the analysis. Element names L1–L7 and labels Element 1–7 already match neighboring Olympus entries. Patent bibliographic fields already follow corpus conventions. Obsolete filename self-references and administrative citations were removed; the four primary-source citations remain.

### Remaining scope

The image-circle audit reports one lens checked, zero undersized and zero skipped. Field coverage reaches about 14.95 mm of the modeled 15 mm corner; the exact corner center ray clips at surface 1 (about 18.05 mm against an 18 mm rim). No rim was widened for off-axis coverage.

Open: iris station and clear apertures are inferred; historical melts and the source N/V spectral reference are unresolved. The small printed-A residuals and the other Seidel columns/d–g plots remain unverified beyond the stated calculation. Current full-field pupil transmission, corrected-prescription MTF and finite-focus aberration performance were not recalculated. The former MTF convergence and approximately −0.101146 mm best-axial offset belong to the preceding transcription. No factory-performance claim follows from them. Broad repository tests, formatting tools, build and metadata generation were deliberately excluded by the assignment; changes remain uncommitted.
