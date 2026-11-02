## Patent Reference and Design Identification

**Patent:** US 3,749,478 A  
**Granted:** 31 July 1973  
**Priority:** 10 April 1971  
**Inventors:** Jihei Nakagawa; Sumio Nakamura  
**Assignee:** Olympus Optical Co., Ltd.  
**Title:** Lens system having a large aperture and long focal length  
**Example details:** Numerical table on PDF page 5, repeated in claim 3 on PDF page 6; normalized f = 1 uniformly scaled by 100.

This private candidate transcribes Example 2. Its proposed association with the Olympus Zuiko Auto-T 100mm f/2.8 remains unproven at the level of factory radii and spacing. The source audit reports a 1973 manufacturer catalog specification of five elements in five groups, 100 mm, f/2.8 and telephoto ratio 0.93. These agree with the patent architecture and first-order result, but do not establish an exact production prescription.

The source worker reported visually checking the original patent table, repeated claim and catalog page. This build used its exact readable handoff, independently verified as 7,796 bytes with SHA-256 `bc1b34711bd56913878adaee4ca6c440c7a00072f05f547acf7970ab9b00d841`. The builder did not obtain or inspect the source page pixels. The original source archive remains separately preserved on private Drive.

## Optical Architecture

The prescription has five spherical singlets, five air-separated groups and ten powered surfaces. Its element power sequence is positive–positive–positive–negative–positive. All ten signed radii are positive in the source orientation. The first three menisci form a converging assembly, L4 supplies the principal negative telephoto action, and L5 restores positive power behind a long air space. There are no aspheres, cemented interfaces or source-listed filter plates in this transcription.

All source radii and finite thicknesses were multiplied by exactly 100. The resulting powered track is 49.97000 mm. This dimensional normalization uses the marketed focal length as context; it is not a normalization to the computed EFL.

## Element-by-Element Analysis

### L1 — Positive meniscus

Reference n = 1.58913, source v = 61.11. Glass: unmatched literal patent glass; historical vendor identity unverified. Independently calculated isolated thick-lens EFL = +81.5493 mm.

L1 begins the converging front assembly. Both surfaces use the published positive curvature signs. No catalog glass substitution was used to change the source reference index.

### L2 — Positive meniscus

Reference n = 1.56873, source v = 63.16. Glass: unmatched literal patent glass. Isolated EFL = +147.2222 mm.

L2 adds positive power across the narrow 0.420 mm air gap following L1. Its inferred clear aperture is smaller than L1's; both clear radii are modeling assumptions.

### L3 — Positive meniscus

Reference n = 1.70154, source v = 41.10. Glass: unmatched literal patent glass. Isolated EFL = +198.6515 mm.

L3 completes the front positive assembly. Its calculated focal length differs from the source's stated normalized value of 2.0. The literal prescription was preserved rather than adjusted to reproduce that derived statement.

### L4 — Negative meniscus

Reference n = 1.78470, source v = 26.22. Glass: unmatched literal patent glass. Isolated EFL = −33.4013 mm.

The strongly curved rear surface, R = +19.600 mm, makes L4 negative. This rear face bows downstream into the long gap, so an iris located between the axial vertices must also be checked against the exact curved cap over its entire opening.

### L5 — Positive meniscus

Reference n = 1.78470, source v = 26.22. Glass: unmatched literal patent glass. Isolated EFL = +127.9903 mm.

L5 has the same printed n/v pair as L4 but positive isolated power. It follows a 25.780 mm source air gap. The inferred L5 aperture produces substantial edge clipping in the current model and was not enlarged after tracing.

## Glass Identification and Reference Convention

The numerical table supplies n and v without an explicit nd wavelength subscript. This model uses each literal n as the native reference index and assumes the conventional d-line interpretation at approximately 587.6 nm. That convention is supported by the source worker's report of d/g aberration plots and historical glass usage, but is an assumption rather than an explicit table definition.

The native fields named `nd` and `vd` hold those literal values with an explicit reference note on every element. No manufacturer glass, Sellmeier curve, measured partial dispersion, spectral line indices or anomalous-dispersion claim has been assigned. Only reference-index monochromatic calculations are validated here. Any engine-generated dispersion estimate lies outside this report's scope.

## Focus Mechanism and Computed Infinity Plane

The catalog describes a straight helicoid and a 1 m minimum object distance. Those product facts do not supply a finite-conjugate optical prescription. The candidate is fixed at infinity: all spacings are scalar, no focus travel is authored, and only focusT = 0 was validated. The retail 1 m distance is descriptive only. This integration descendant uses current main’s finite closeFocusM=1e15 infinity-only convention, with no varying gaps or validated finite endpoint.

No back focal length or final image spacing is printed in the supplied numerical table. An independent reduced-angle ABCD calculation, using refraction power −(n₂−n₁)/R and translation d/n, gives the final-surface matrix:

$$M=\begin{pmatrix}0.42849164171141213&53.35352340915903\\-0.009995346889306065&1.0891998357183217\end{pmatrix}.$$

With air on both sides, EFL = −1/C = **100.0465527685 mm** and BFL = −A/C = **42.8691116433 mm**. The determinant is 1. The image plane is therefore z = **92.8391116433 mm** from the first vertex. S10's final d is this **computed paraxial infinity BFL**, not a printed distance. Native construction independently reproduces the EFL and iris transfer values.

The +0.0465528% EFL residual relative to the nominal 100 mm remains. The front-three-element EFL is 40.5233613 mm rather than the printed scaled value 40.7 mm; L3 is 198.651457 mm rather than 200 mm. The source audit found the repeated table and claim consistent, and did not justify a transcription correction. The resulting first-order telephoto ratio is 0.9279591.

## Stop and Clear-Aperture Assumptions

The stop plane and opening are not numerically printed. A manufacturer section reported by the source worker suggests an iris behind L4, without a calibrated axial coordinate. Three hypotheses were tested at z = 28.085, 34.530 and 40.975 mm, corresponding to 25%, 50% and 75% of the S8–S9 axial gap. The midpoint is the baseline by construction; it was not selected by maximizing performance.

The ordinary native prime rule determines the iris from the literal prescription's computed EFL and f/2.8. No authored iris semi-diameter overrides that rule. Exact cap checks certify the complete disk from axis to wide-open rim using monotonic spherical caps; no plane intersects glass.

| Stop z (mm) | Native iris radius (mm) | Minimum gap to S8 glass (mm) | Minimum gap to S9 glass (mm) |
|---:|---:|---:|---:|
| 28.085 | 10.194593 | 3.585080 | 19.335000 |
| 34.530 | 9.449075 | 10.461924 | 12.890000 |
| 40.975 | 8.703557 | 17.296551 | 6.445000 |

These checks cover the operating disk and closing stroke, not a blade or mount assembly outside it. No proposed case was rejected for cap intersection.

No optical semi-diameters are printed. Before native tests, each singlet received a shared front/rear SD equal to 1.10 times the larger paraxial axial marginal-ray height at that singlet, rounded upward to 0.01 mm. The EP radius is 17.865456 mm at f/2.8. The frozen L1–L5 SDs are **19.66, 18.70, 17.38, 13.37 and 8.76 mm**. Full-field paraxial envelopes were retained as diagnostics, not used to force edge transmission. Native geometry accepts this vector without relaxing checks or changing source dimensions. The vector was identical for all stop tests.

## Verification Summary and Limits

Native construction and exact-cap checks passed for all three stop hypotheses. Twelve 16-cell stop-lattice cases cover the three stops at f/2.8 and the baseline at f/5.6, each at 0°, 6°05′ and the patent's 12°10′ half field. Each case contains 208 stop samples. All axial f/2.8 samples pass; off-axis clipping is retained. Baseline f/2.8 counts are 208/0, 154/54 and 60/148 passing/clipped. At f/5.6 they are 208/0, 208/0 and 168/40. There are no unaimed or unresolved samples. Proven pre-stop misses remain physical clipping, with raw failed-intersection receipts retained. The largest accepted intersection residual over these cases is below 1.1 × 10⁻¹⁴ mm against the native 10⁻¹² mm tolerance.

The initial reporting harness mistakenly required `reachedImagePlane` for successful sequential traces, a flag used by folded paths. That reporting error was corrected offline from complete saved traces; no ray bundle was rerun. Sequential native status `ok` and the final image transfer give the valid image landings. Original attempt receipts and the correction script are included.

Four native geometric MTF calls compare the three stops at f/2.8 and the baseline at f/5.6, with the computed infinity plane fixed. Curves sample 0, 10, 20, 30, 40 and 50 lp/mm at center, half full-frame image height and the full-frame corner. All twelve fields converge within the normal absolute 0.01 band by grids of 32–128 cells; all have zero failed/unaimed samples and zero unknown flux fraction. These are geometric, reference-index results without diffraction or full-spectrum validation.

At the midpoint stop, simulated sagittal/tangential contrast at 30 lp/mm is **0.6162/0.6162 centrally**, **0.5186/0.6689 at half image height**, and **0.7595/0.3932 at the full-frame corner**. The corner bundle retains only 3,784 of 12,892 final-grid samples, about 29.35%; its normalized contrast does not imply high relative illumination. This stop-sample fraction is not a radiometric illumination calculation. At f/5.6, central contrast is 0.9430/0.9430 and corner contrast 0.8531/0.5430.

Across all three stop hypotheses, f/2.8 30 lp/mm central sagittal contrast spans 0.6157–0.6166 and corner sagittal/tangential contrast spans 0.7595–0.7642 / 0.3923–0.3981. These small differences are comparable to the accepted sampling tolerance and do not identify the historical stop plane. Clipping distributions do change.

The exact patent half-field chief lands at approximately 21.82–21.84 mm image radius, slightly outside the native 135-format reference corner of 21.65 mm (the calculated 36 × 24 mm physical corner is 21.6333 mm). The MTF's corner angle is approximately 12.066–12.077°, and must not be called the patent's 12°10′ field. The separate ray tests use the exact patent angles. The initial MTF preflight stopped before any MTF call when it found this distinction; that receipt is retained.

The native focus diagnostic reports an axial best-focus shift near −0.05464 mm at f/2.8, consistent with spherical-aberration focus dependence even though the paraxial plane agrees exactly. That diagnostic did not alter the prescription, final d, or the reported MTF plane. No best-focus, finite-focus, diffraction, polychromatic, historical stop-identity or measured production-performance conclusion is claimed.

## Sources and Reproducibility

- [US3749478A](https://patents.google.com/patent/US3749478A/en), Example 2 and repeated claim 3, as transcribed and visually checked by the source worker.
- [Private readable source handoff](https://drive.google.com/file/d/1ORMIxW75f-zTeNxN9L0KBfwO493C2kQs/view), exact text verified locally.
- [Private source archive](https://drive.google.com/file/d/1M-kD2x8SAwU3TgddrrkucY1P8aIKZQjg/view), original patent/catalog evidence retained by the source worker; builder binary/pixel access unavailable.
- Repository base: `8d3e53faf45d5ee139fbcdfba76d0c8185ac777b`. Independent matrix arithmetic, aperture derivation, native scripts, raw traces, rejected/preflight receipts and native result JSON accompany this private pair. No installation, publication, PR, merge or deployment was performed.


## Native Monochromatic Diffraction and Historical Line-Path Comparison — 1 November 2026

The earlier four `method: geometric` calls remain preliminary geometric diagnostics and have not been relabeled. This historical stage used the native diffraction estimator and a line-based optical-path comparison now withdrawn as coordinate-correct validation, at the same literal indices, inferred apertures, midpoint stop and computed infinity plane. Native wavelength is **587.5618 nm**, an explicitly assumed d-line convention. Both f/2.8 and a bounded f/5.6 comparison were evaluated with **focus: design**, applied shift **0 mm**. The best-focus diagnostics remain unapplied.

The original geometric prose used the calculated 36 × 24 mm corner radius (21.6333 mm) where it should have named the engine's rounded **21.65 mm** reference. The actual saved geometric corner heights are about 21.64995–21.64999 mm, half heights about 10.825 mm, and their angles 12.06565–12.07663°. Those results do not validate the exact patent half field. Original files and archive are preserved; this V2 corrects the prose.

At the exact patent angles, native chief rays give the following mapping on the unchanged computed infinity plane:

| Angle | Chief image radius (mm) | Fraction of original native 21.65 mm reference |
|---:|---:|---:|
| 0° | 0 | 0 |
| 6°05′ | 10.700689074512 | 0.494258155867 |
| 12°10′ | 21.818627827030 | 1.007788814182 |

The product API only accepts image-height fractions up to 1. To include the patent edge without changing optical geometry, a transient diagnostic clone omits only `catalog.imageFormat`; its normal native axis resolver returns a modeled-edge reference of 30.313398762275 mm. The requested fractions become 0, 0.353001956608 and 0.719768442930. Every optical/source/aperture/focus field has the same fingerprint as the original; the clone is not installed or saved as a new prescription and asserts no extra historical coverage. Native field inversion returns the requested angles within 1.43 × 10⁻⁷° and image heights within 2.68 × 10⁻⁷ mm. The historical line-path comparison needed no axis clone and launched the three exact angles directly; that does not establish coordinate-correct OPL validation.

The normal product `computeMtfSteps` run uses `method: diffraction`, `spectrum: reference`, `useResolvedReference: false`, native grid ladder 16–256, and 0, 10, 20, 30, 40, 50 lp/mm. It shears the actual traced pupil and obtains phase from ray landings. All six fields converge with zero unknown flux. At f/2.8 the final grids are 64, 64 and 128; at f/5.6 they are 32, 32 and 64. At 30 lp/mm the f/2.8 center, half-patent-field and exact patent-edge S/T values are 0.568772/0.568772, 0.490025/0.660933 and 0.722357/0.301288.

The historical line-based optical-path comparison followed the repository's report workflow: `traceMtfLattice` with `opticalPath: true`, then `mtfWaveLattice` and `waveLatticeOtf`. It measures unwrapped OPL relative to the chief image point, but its fixed stop-grid rows/columns do not hold the orthogonal direction cosine fixed in coupled maps. It therefore does not establish a coordinate-correct two-dimensional pupil shear. It shares the exact ray tracer with the product method and is not an independent ray-tracer check. Every grid's complete aimed lattice, transmitted OPL ray records, and native blocked/failed/unaimed counts are archived.

All six historical line-path fields passed the implementation’s numerical contracts, which are reproducibility/sampling receipts rather than coordinate-correct validation: unknown flux fraction ≤ 0.005, at least 16 transmitted samples, maximum neighbor phase step < 0.25 wave (the repository OPL report criterion), and successive-grid absolute change ≤ 0.01 through the sampled 50 lp/mm band. Both final and immediately preceding grids meet phase/flux quality gates. Coarse phase-undersampled and unconverged levels remain in the evidence.

| f/# | Field | Historical line-path final grid | Maximum phase step (wave) | Last grid delta | Withdrawn line-path 30 lp/mm S/T |
|---:|---|---:|---:|---:|---:|
| 2.8 | 0° | 64 | 0.094191 | 0.008824 | 0.573014 / 0.573014 |
| 2.8 | 6°05′ | 128 | 0.104836 | 0.004123 | 0.483377 / 0.659826 |
| 2.8 | 12°10′ | 256 | 0.073995 | 0.003168 | 0.745135 / 0.302648 |
| 5.6 | 0° | 32 | 0.040174 | 0.005239 | 0.845300 / 0.845300 |
| 5.6 | 6°05′ | 32 | 0.067999 | 0.007435 | 0.808005 / 0.851478 |
| 5.6 | 12°10′ | 128 | 0.073996 | 0.002375 | 0.790205 / 0.408220 |

Every recorded level has zero failed or unaimed samples and zero unknown flux; clipping is retained. At the f/2.8 exact edge, the final 256 grid passes 14,766 and blocks 36,702 stop samples (about 28.69% transmit). This sample fraction is not a radiometric illumination result. At f/5.6 the final edge grid passes 10,650 and blocks 2,242 samples.

Recorded differences between the product estimate and the withdrawn line-path comparison are historical comparisons, not a validated physical error estimate. On the same final f/2.8 edge bundle, sagittal contrast differs by 0.024049 at 30 lp/mm and by a maximum **0.033687 at 50 lp/mm**, despite each route's grid convergence. At f/5.6 edge the maximum is **0.016666**. The center and half-field same-bundle gaps are below 0.008. These differences remain unexplained; they are retained rather than tuned away or presented as agreement within 0.01. No engine, intersection tolerance, source radius, source spacing, reference index, inferred SD or image-plane change was made.

The new `diffraction/summary.json`, readable checkpoint and scripts contain complete curves, target/readback mapping, all grid quality records, raw-file hashes and exact explicit call counts. The former source and production-identity limitations still apply. The normal product curves are qualified native scalar, reference-index, infinity estimates; the historical line-path curves remain withdrawn as coordinate-correct validation. No polychromatic, finite-focus or measured production-lens conclusion follows.


## Coordinate-path withdrawal and current-main integration

The mandatory additive [coordinate qualification](https://drive.google.com/file/d/1n8sUcjmGO6ckhX9MS_kRAAd0tv_0FDST/view) supersedes every earlier suggestion that phase/grid convergence of waveLatticeOtf provides coordinate-correct OPL validation. Fixed native stop-grid rows/columns vary the orthogonal direction cosine in all20 saved Olympus comparison grids, including axial cases. The stored phase/grid flags, arrays, old curves and numerical differences remain reproducible historical receipts, but are not an independent physical reference, corrected full-pupil validation, per-curve error bound or evidence that every curve has a large error. No production sheared-estimator bug is established. The two native computeMtfSteps diffraction jobs and four earlier geometric jobs are separate from this reference path and retain their qualified native simulation scope. No replacement physical-reference claim is made.

This private current-main descendant changes only type import and presentation/state metadata: qualified visible name, privateQAvisibility, descriptive focus text and existing finite closeFocusM=1e15 infinity-only convention. Every source radius/spacing/index/Abbe value, frozen SD, stop hypothesis/iris rule, aperture menu and computed92.8391116433mm plane is unchanged. Essential reconstruction/inferred-aperture-stop/infinity/factory limitations are visible without full analysis. Historical source, geometric, diffraction and withdrawal evidence remains unchanged. No new optical retuning, finite motion, full spectrum or factory identity is asserted. Existing rawfocus1 SUMMARY/BREATHING quirks are separately documented; no new UI patch is required.


### Current native field reference

The unchanged prescription with the declared catalog format uses native reference radius 21.650000 mm. Its chart corner inverts to 12.076634282 degrees, distinct from the source half-field 12.166666667 degrees. The exact source-edge chief height is 21.818627827 mm, or fraction 1.007788814 of this native axis. The chart corner is inside the source edge; the source edge and catalog format are still separate coordinates and historical coverage claims. Mapping uses the normal current-main chief-field resolver without MTF/OTF evaluation, optical retuning or source-field substitution.


### Assignee spelling normalization

The source handoff uses “Olympus Optical Company Limited”. This integration descendant uses the current corpus spelling “Olympus Optical Co., Ltd.” for the same assignee; the original attribution remains in the preserved input. The initial corpus refusal is retained. This metadata normalization changes no optical or source numerical value.


### Existing f/22 menu and maximum metadata

The original authored menu already lists f/22 and the archived manufacturer catalog specifies a minimum aperture of22. The original omitted maxFNumber inherited the native default16, so the compiled viewer exposed only six of the seven authored settings. This descendant explicitly sets maxFNumber22 to expose that existing last setting. The nominal f/2.8 iris, physical wide-open stop, all source geometry and the unchanged fStops list remain fixed. The initial clamped-control refusal is retained; this is a metadata correction, not source retuning or selection by MTF.
