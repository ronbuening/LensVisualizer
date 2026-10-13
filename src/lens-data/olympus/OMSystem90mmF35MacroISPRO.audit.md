# Lens Patent — OMSystem90mmF35MacroISPRO — 4 Audit

## Job and reference versions

Fixed job: JP2024066164A, Example 1, OM SYSTEM M.Zuiko Digital ED 90mm F3.5 Macro IS PRO. Original patent and four-field card are unchanged. This is a per-lens, pre-integration dossier. The final disposition is qualified READY_FOR_BATCH only when the complete verifier exits successfully; integrationStatus remains INTEGRATION_PENDING. (Closed 2026-10-13: the lens is in the catalog; see the dated sections at the end.)

Original Stage3 candidate ZIP SHA256: `fb3d86b4c7c96d9e17ef24a46c44f6097ad108bed71fa8362b42aa9619991ebc` (1,171,848 bytes). Original runtime-support ZIP: `8676dd67eddb998b528a99f881d682a44bbb10b4b1db013698c7492847f658ee` (21,014,200 bytes). Original and final data SHA256: `88020196b37c8fec719d4752f08cb2255070f8dad5d145912a9d50db13531fca`.

The controlling main is `33ec433d56ed0044db432d6b0ff0395554d14696`. A fresh read-only connected-GitHub branch/tree check at 2026-10-12 19:16 UTC confirmed all 201 copied runtime/reference blobs against current main. The PassA check separately bound all 14 controlling project references. The supplied Chat Protocol, Dossier Contract, and Stage4 Audit procedure govern this review. No engine, repository, queue, index, or primary source was edited.

## Source-first independence and freeze

PassA was frozen at 2026-10-12 18:52:59 UTC before candidate disclosure. Baseline fingerprint: `61a03eafbfe67cb48a4ceec1500667500f2663bb08cad31c00c5c86a6978013d`. Source-input fingerprint: `1e1806e7f9d382d7649bcc6b53a0f112c2371584cc45a441cd0e5f704b940b7e`.

The complete 14-file frozen baseline, original catalog members, code, extracted coordinates, and results are retained unchanged in `stage4_support/independentPass/`. No later correction was written into those files. Final evidence.independentPass records the original hashes, exposure, and a separate reconciliation register. Final results.independentBaseline includes a fresh reexecution and clearly labeled post-disclosure branches. The verifier contains all custom Python implementations, including the original source-first recurrence/ABCD path, in separately named source sections.

Actual exposure: the initial handoff gave the fixed job, neutral source locations and a main pin, without author numerical conclusions. An initial directory listing exposed old artifact filenames, including hold/impact/audit names, but no contents were read. Main metadata exposed unrelated commit prose. A patent text search briefly showed Example6; those values were not inputs. Rendered p36 contains adjacent Example2 figures; only Example1 Figures3–4 were extracted. No prior conversation was searched. This is source/input/method independence, not a claim of perfect psychological blindness. Fingerprints establish integrity, not independence by themselves.

After PassA, the coordinator separately preserved and replayed the baseline before disclosing Stage3. PassB uses shared project code for actual application checks, and those checks are explicitly distinguished from fresh reviewer equations and primary-source reading. Reexecuting an author's script is repeatability evidence, not independent extraction.

## Extraction, conventions, and model transformations

Primary source reading covered original PDF pp.1,15–18,35–36. All 35 source planes, 18 physical lens elements, five cemented pairs, four focus states, five conditions, the four functional groups and G4 subgroups were re-entered. There are 13 air-separated lens assemblies. The stop is source plane15; OF is camera-side material, not a nineteenth lens element. All powered lens interfaces are spherical; no missing conic/polynomial table, coefficient scaling, or asphere mapping applies.

Distances are mm, object-to-image is positive z, positive radius puts the center imageward, and index reference is d. Patent wavelengths are d587.56, C656.27, F486.13, g435.84nm. Runtime catalog standard-line wavelengths have additional digits; those conventions are stated rather than silently interchanged. Prescription scale remains1. Marketing90mm/f3.5 does not replace patent88.21mm/FNO3.64 or Figure3FNO3.638.

The physical source tail is retained: source32-to33 air30.649mm, OF4.1082mm at nd1.51633/νd64.14, then air2.045mm to image35. The real runtime expands the rearPlates entry into two physical planes. No synthetic cement, plate omission, hand-folded final gap, changed sensor plane, R/d/n/ν correction, reconstructed source state, or gap-sag override was introduced.

Clear radii remain explicitly inferred from the schematic and constrained by geometry. The source prints neither physical clear radii nor iris diameter. The stop is calibrated at infinity by exact Snell tracing to nominal f/3.638, then held fixed in this implementation. The unusual finite FNO values are preserved as source facts, not imposed as a guessed iris law. The patent's operating-mode discussion does not supply the missing mode diameters.

## Independent numerical and reference-plane results

| Source state | EFL mm | H1 from V1 mm | H2 from V32 mm | Fixed-source-sensor magnification |
| --- | ---: | ---: | ---: | ---: |
| Infinity | 88.20762718 | 80.29661047 | -52.80558565 | -0.00001432 |
| β=-0.50 | 76.51453545 | 57.73132081 | -79.39976174 | -0.50040859 |
| β=-1.00 | 62.44319256 | 28.53331584 | -89.51931852 | -1.00058034 |
| β=-2.00 | 38.05718131 | -12.98079220 | -78.78781086 | -2.00051427 |

The independent sequential reduced-angle and conventional-angle ABCD paths agree, including determinant/cardinal reconstruction, thin-lens/parallel-plate analytic tests and all18 isolated-element lensmaker powers. Final TypeScript values are parsed by the actual TypeScript AST, then independently passed through the frozen reviewer equations. The source and implemented paths agree without using stored answers as numerical inputs.

Infinity computed air BFD from V32 is35.40204153mm. Source air-equivalent image clearance is35.40330470mm. Physical image clearance is36.8022mm. V1–V32 track is116.6697mm; air-equivalent source-image track152.07300470mm; physical track153.4719mm. The β=-1 row retains its0.0001mm net spacing drift. Petzval sum is+0.0013046032988/mm, with every interface term preserved. It is not a full sagittal/tangential field-curvature result.

G1/G2/G3/G4 EFLs are+36.35774948/−26.60011297/+36.36053772/−68.53536670mm. G4a/G4b/G4c are−103.01263255/−27.03181490/+33.43372234mm. All five cemented pair powers are separately calculated; standalone element powers are never summed as cemented or in-situ power. All shape labels derive from signed radii and isolated power, and actual group/doublet bounds match the independent source topology.

G2 terminal movement is+17.0307mm; G3 is−24.8259mm. Group/stop positions, reversals, and complementary-gap conservation are checked, preserving source rounding. The normalized focus-keyframe positions and closeFocusM are rederived from the displayed printed-β conjugates. Interpolation is a model convenience, not a certified mechanical cam law.

Two legitimate conjugate definitions remain separate:

- Printed-β display labels solve u=(1/β−D)/C, then report best-image displacement without moving the source sensor. The finite u values are171.812,96.353,70.067mm, with physical object-to-source-image labels325.284,249.825,223.538mm.
- PassA instead solved the object conjugate focused on the fixed source sensor: u171.687335,96.316852,70.061673mm, yielding physical object-to-sensor distances325.159235,249.788652,223.533573mm.

Neither is a published object distance. Actual adaptive runtime K is separately solved; in particular2x has K≈0.0144725551/mm versus printed-β label K≈0.0142721427/mm. No finiteConjugates certification was fabricated.

Condition3 has the same harmless distinction: computed paraxial BFD/f≈0.401348984 versus fixed source-image air clearance/f≈0.401363304. The manuscript explicitly uses the latter; both round to the printed0.401. All five inequalities pass. Air track/EFL≈1.7240 is not a short-track telephoto ratio, and BFD<EFL does not support a retrofocus classification.

## Source discrepancies and glass review

Strict source comparisons remain in results. The printed total length152.0692mm differs by+0.003804703mm at infinity; computed BFD and four group EFLs miss some printed final digits. The actual source D2=1.46mm has a half-last-unit uncertainty0.005mm; independently executed index sensitivity also supports retention of the unaltered prescription. These are supported precision resolutions, not corrected patent numbers or silently widened raw comparisons. Finite fixed-iris first-order FNO and paraxial field diagnostics are not claimed to reproduce the published real-ray labels.

PassA originally counted3171 catalog rows across OHARA/HOYA/SCHOTT/HIKARI/CDGM/SUMITA, using current workbooks and supplied AGF variants. Stage3 counted3179. Fresh post-freeze reading found exactly8 CDGM rows on the separate “i line glass” worksheet omitted from PassA. They are recorded as a supplement. The frozen baseline count remains3171, and the supplemented coverage is3179. This correction did not require changing a glass label.

All19 medium assignments, including OF, were reconciled only after the independent six-maker coordinate search. S-series prefixes, S-FPL55 versus S-FPL53, L8/S-FPL51 versus L11/FCD1, FCD505/FCD515 ambiguity, TAFD37 versus TAFD37A, and S-BAL35 versus L-BAL35 distinctions were checked. Exact coordinate agreement cannot identify a supplier/melt. Maker partial-dispersion deviations are not copied into the project's different normal-line convention. No APO or measured secondary-spectrum claim is made.

Original AGF formulas independently reproduce17 of19 runtime assignments at C/d/F/g to numerical precision. FCD1 and TAFD37 use runtime Sellmeier fits rather than the original current HOYA polynomial coefficients. The strict equality comparisons FAIL and remain visible. Maximum line-index residuals are4.02793408e-6 and1.37568184e-6. A separate resolution checks that all four fitted line indices agree with the primary five-decimal HOYA table within half0.00001. This is limited support for an approximate spectral analogue, not exact Vd/PgF equality or a continuous wavelength-error bound. The final analysis now explicitly states this qualification. The source nd/νd fields and all data bytes are unchanged.

## Geometry, actual runtime, and macro qualifications

Actual targeted tests use TypeScript5.9.3, Prettier3.6.2, esbuild0.25.11, Node24.19.0 and Inkscape1.4, with the exact pinned project runtime/types/validator/render/glass code. No stubs replace real LensDataInput, buildLens, validation, renderer geometry or catalog resolver. Seven focus samples include four source states and three diagnostic midpoints. Production shape trim is0mm. Independently inspected infinity/2x PNGs use actual element paths; they are not a mounted full application or a complete plate/stop UI rendering.

Fresh analytic spherical geometry bounds radial endpoints and the minimum linear-interpolated gaps. Maximum actual rim angle is32.835676°, minimum lens thickness0.8mm, maximum shared-band intrusion fraction0.894195477 below default0.9. No override was needed. The radial sag-difference monotonicity proof applies to these spherical fixed-rim surfaces; interpolation gap bounds do not prove continuum ray containment.

The original Stage2 raw-zero-failure observation remains FAIL. Actual unchanged project classification and a separate reviewer exact vector-Snell/cap-root implementation agree on all77 default fan attempts:38 transmitted,24 explicitly clipped,15 raw failed intersection packets analytically proved to miss the next clear aperture. Those15 are blocked, never transmitted. There are0 unresolved and0 unsolved rays in this admitted default set. Independent inside-cap/zero-direction/missing-surface tests cannot falsely prove a miss. Actual unresolved/unsolved negative process tests must prevent approval.

The executed practical-impact checks retain full denominators for84 sets totaling122328 attempts:1001-point diameter,2048-point collimated disk, and1024 equal-area axial stop-annulus diagnostics, with both source-label and adaptive-K branches and C/d/F wavelengths where applicable. At2x, source-label axial annuli transmit867/1024 in each tested wavelength; adaptive-K gives880/881/880 of1024. These are unweighted geometric admission counts, not radiometric throughput. Historical incomplete Newton stop-aiming probes remain diagnostic failures/unsolved entries and are excluded from this admitted coverage. Neither dataset is full finite-object off-axis certification.

Mandatory interpretation limits remain prominent in data and analysis:

- Macro default fans are sparse; off-axis chromatic spread at1x/2x falls back to the chief ray alone.
- Spherical-aberration summary is unavailable at1x/2x.
- The tested2x near-bokeh fields retain13,13,9,7 of337 samples each.
- Some drawers send collimated light through close-focus geometry.
- Finite MTF is unavailable without certified finiteConjugates; none is supplied.
- Inferred fixed rims/iris do not prove a production aperture schedule or unvignetted macro coverage.
- No unrestricted finite-object off-axis, radiometric throughput, full UI, decentered IS or production-performance certification is claimed.

The user authorized qualified continuation with an implementation recheck. That authorization does not resolve genuine schema, geometry, unknown-intersection or claim failures; the verifier still fails closed on those.

## Correction register and claim map

R1 conjugate definition, R2 condition3 planes, R3 catalog scope, R4 paraxial versus exact stop calibration, R5 retained raw-failure disposition and R6 fitted spectra are detailed in evidence.independentPass.reconciliationRegister. Only R6 changed the clean analysis. No optical data, source, glass label or engine changed. Original Stage3 files and its manual review are preserved. The final manual review is newly bound to corrected analysis bytes; original Stage2/3 numerical and analysis gates are rerun.

| Analysis claims | Author claim records retained | Independent constraint |
| --- | --- | --- |
| Patent identity, dates, inventor, commercial correlation | S3 metadata / source claims | Original front pages; manufacturer originals; different-family Latin spelling explicitly limited |
| Group signs, counts and powers | S3-group / S3-net-power | S4 shapes/boundaries; frozen-source/native recurrence; full group matrices |
| All18 element powers, shapes, coordinates | S3-element-L1…L18 | Independent lensmaker/recurrence and signed-radii classification |
| Glass table, prefixes and OF | S3-glass / S3-OF-glass | Fresh six-maker raw extraction and original coefficient evaluation |
| Motion, source states, labels and defocus | S3-motion / S3-conjugate | Independent positions, gap conservation and both conjugate definitions |
| Five conditions, tracks, BFD, Petzval | S3-condition / scalar claims | Independent source/native matrices and each interface contribution |
| Macro availability and denominators | S3 macro claims | Actual fresh helpers plus independent77-ray exact-Snell classification |
| New fitted-spectrum residuals | S4-analysis-fitted-spectrum-caveat | Original HOYA AGF formulas versus actual runtime C/d/F/g values |

The complete79 prior claim records, including exact text and governing data hash, remain in results.stage3Analysis.claimMap. Two new numerical claims are checked by S4. Manual review read every scholarly section and citation context. Text matching alone is not treated as validation of design intent or aberration explanations.

## Gate disposition, replay, and pending integration

Canonical dossier has exactly9 root files and no nested archives. The bounded, separately manifested support archive supplies unchanged raw source originals, the immutable independent baseline, authentic previous checkpoints, exact shared runtime, and official toolchain distributions. Routine rendered pages/caches are excluded from the final support. The official npm .tgz distributions are declared executable dependencies, not hidden nested lens dossiers.

Run from any clean extraction directory:

```text
python OMSystem90mmF35MacroISPRO.verify.py --package-dir DOSSIER --support-dir SUPPORT/stage4_support --output OUTSIDE/results.json
```

The verifier includes all custom Python paths, validates declared support bytes, parses real final TypeScript, executes actual targeted application/compiler/render/catalog checks, reruns raw catalog extraction, runs the independent optical path and audits final manifest membership. Stored results are comparisons only, not numerical inputs. Output must be outside the dossier. Stable replay comparison excludes run timestamp, host platform and temporary work path only.

The final archive-only replay and negative-test receipts bind these exact final bytes. Raw patent comparison FAIL observations, two fitted-spectrum equality FAILs and the original runtime raw FAIL remain visible; each accepted discrepancy has an explicit, independently supported resolution. No actual unresolved required check is waived.

Pending implementation: mounted UI and warnings; close-focus sparse-ray/chief-fallback/SA/bokeh interpretation; collimated-versus-finite drawer semantics; finite-MTF guard; actual app source/metadata/corpus policies and production build. These remain NOT_RUN at integration scope. No batch integration, metadata generation, full-corpus/full-build or repository publication was attempted. (Closed 2026-10-13: the lens page renders at all four printed states and the close-focus limits are stated in the data header and the analysis; the test and build gate belongs to the integration batch and is not recorded here.)

## 2026-10-13 — Semi-diameter pass against the patent figure

Source: local `patents/JP2024066164A.pdf`, page 35, Fig. 2 (Example 1), panel (A) at infinity and panel (B) at β = −2.00. The sheet is a 1-bit raster at 452 ppi and was read at that native resolution. The optical axis runs up the page with the object at the bottom and is tilted 0.33° (5.7 px per 1000 px), so every height was taken from the local axis position, on both sides of the axis. Panel (B) carries no leader lines on its left side and was the primary reading; panel (A) and the right side of (B) confirm each flat rim run to within 1 px.

Scale. Panel (A): first vertex at row 2354.5, surface 16 at 1503.0, last lens vertex at 1054.5, image plane at 647.0. Surface 1 to 32 is 1300.0 px for 116.6697 mm (0.08975 mm/px); surface 1 to 16 is 851.5 px for 76.3862 mm (0.08971); surface 16 to 32 is 448.5 px for 40.2835 mm (0.08982); surface 1 to image is 1707.5 px for 153.4719 mm (0.08988). Panel (B) gives 1300.5 px for the same glass span, 18.2 mm for D9 (table 18.2238) and 7.54 mm for D14 + D15 (table 7.5265), so (B) is the 2x state drawn to the same scale. 0.0898 mm/px was used; one pixel is 0.09 mm. Lines are 3 px wide, so a rim is the outermost ink minus 1 px. The stop marks of panel (A) end 103 to 104 px from the axis (9.2 to 9.3 mm against the calibrated 9.172 mm), which checks the radial scale independently of the lens rims.

| Element (surfaces) | Stored before | Figure, px left / right of (B) | Figure, mm | Stored after | Basis |
| --- | ---: | ---: | ---: | ---: | --- |
| L1 (1, 2) | 14.8 | 166 / 167 | 14.86 | 14.8 | agrees; kept |
| L2 (3, 4) | 14.8 | 162 / 162.5 | 14.48 | 14.5 | the figure draws L2 a step of 4 to 5 px below L1 on all four sides; the file had them level |
| L3 (5) | 13.7 | 156 / 156 | 13.92 | 13.9 | cemented-joint step of 4 to 5 px: L3 stands above L4 |
| L4 (6, 7) | 13.7 | 152 / 151 | 13.51 | 13.5 | square rim from the junction to surface 7; the junction carries L4's value |
| L5 (8, 9) | 12.7 | 141 / 141 | 12.57 | 12.7 | within 1 %; kept |
| L6 (10) | 11.0 | 127 / 127 | 11.31 | 11.3 | cemented-joint step of 3 to 4 px: L6 stands above L7 |
| L7 (11, 12) | 11.0 | 124 / 123 | 11.00 | 11.0 | agrees; kept |
| L8 (13, 14) | 10.3 | 112.5 / 112 | 9.99 | 10.3 | 3 % above the drawing, same order as drawn (below L7); kept as inside the noise band |
| L9 + L10 (16, 17, 18) | 11.6 | 129 / 129 | 11.49 | 11.6 | one square rim across both members; within 1 %; kept |
| L11 (19, 20) | 11.5 | 127.5 / 128 | 11.38 | 11.5 | within 1 %, 0.1 mm below the doublet as drawn; kept |
| L12 (21, 22) | 10.7 | 118 / 119 | 10.55 | 10.7 | within 2 %; kept |
| L13 (23) | 9.1 | 114 / 115 | 10.19 | 10.2 | 12 % short of the drawing |
| L14 blank (24) | 9.1 | 112 / 112.5 | 9.99 | 10.0 | 10 % short; L14 is drawn 2 to 3 px below L13, and the junction carries L14's value |
| L14 rear face (25) | 9.1 | curve ends 101 to 102 px | 9.1 to 9.2 | 9.1 | the concave face ends in a flat land that runs out to the blank edge; kept |
| L15 (26, 27) | 9.1 | 110 / 109.5 | 9.77 | 9.8 | square-cut, both faces reach the rim; drawn 0.2 mm below the L14 blank and 0.6 mm above the end of surface 25, and seated against L14's land |
| L16 (28, 29) | 11.0 | 122 / 124 | 10.96 | 11.0 | agrees; kept |
| L17 (30) | 11.5 | 128 / 129 | 11.45 | 11.5 | agrees; kept |
| L18 (31, 32) | 11.5 | 125 / 126 | 11.18 | 11.2 | cemented-joint step of 3 px on three clean sides: L18 stands below L17; square rim |

Twelve surfaces changed (3, 4, 5, 6, 7, 10, 23, 24, 26, 27, 31, 32). The largest are the image-stabilising doublet and L15, which the previous values held at 9.1 mm on all five faces. That number is right for surface 25 only: surfaces 25 and 26 would cross near 9.6 mm, so the drawing stops the concave face at about 9.15 mm and continues the blank as a flat land. The other changes are 0.2 to 0.4 mm and restore the order of neighbouring rims; each step was read as a difference inside one panel, where the reading is good to one pixel. The STO value was not touched.

Clearance, exact meridional real-ray trace at d-line, image height 10.82 mm, with the rear plate included so that the infinity half-field is 7.008° (table 2ω 14.02°):

- Infinity: the f/3.638 marginal ray reaches 12.12 mm at surface 1 and 10.28 / 9.98 mm at surfaces 10 / 11, the tightest faces, where it clears by 1.0 mm. The corner chief ray is at most 7.81 mm high (surface 1) and clears every face by at least 3.5 mm. Longitudinal spherical aberration at the full pupil is 0.13 mm, so no coefficient is in doubt.
- β = −0.50 (object 171.69 mm ahead of surface 1) and β = −1.00 (96.32 mm), iris held at 9.172 mm: the on-axis ray is highest at 11.71 mm in the front group (surface 7 at β = −1.00) and 10.56 mm in G3, and clears every rim by at least 0.97 mm (surface 19 at β = −1.00); the chief ray for 10.82 mm image height clears by more than 4 mm.
- β = −2.00 (70.06 mm), iris held at 9.172 mm: the on-axis ray would need 13.87 / 13.79 mm at surfaces 8 / 9 and 13.72 mm at surface 7. L5 (12.7 mm, drawn 12.57 mm) therefore limits the on-axis beam to the equivalent of an 8.44 mm stop, working f/6.2 instead of f/5.7. This was already so before this pass and L5 is unchanged; the ray that L5 passes is 12.6 mm high at surface 7, so the new 13.5 mm there limits nothing further. The rim was not raised, because the drawing shows L5 at this height. Fig. 2(B) also draws the stop marks 73 px (6.5 mm) from the axis against 103 to 104 px in (A), and the printed FNO 0.51, set against the 0.362 that a 9.172 mm stop gives for this state, corresponds to 6.51 mm; with that stop the on-axis ray is 9.70 mm high at surface 8. The stop model itself was left as authored.
- The collimated-light trace through each close-focus state shows no clipped axial ray and no blocked chief ray.

Engine values before and after: focal length 88.2076 mm, f/3.638 and stop semi-diameter 9.172 mm are unchanged; the image-circle check reports no undersized surface; the traced corner coverage is 100 % at 7.0° (10.82 of 10.82 mm) both times. The engine's chief-ray field cap, which lies outside the 7.0° design field and is set by L18's rim, moves from 9.64° to 9.50°. Wide-open geometric transmission at infinity moves from 100 / 97.9 / 94.8 / 86.5 / 77.1 / 65.6 / 53.1 % to 100 / 99.0 / 95.8 / 90.6 / 82.3 / 74.0 / 61.5 % at 0 / 1.2 / 2.3 / 3.5 / 4.7 / 5.8 / 7.0°; nearly all of the gain comes from the L13 to L15 rims rising to their drawn height. The surface audit passes at the default cross-gap fraction 0.9 with no override. The 2x near-focus bokeh sample counts quoted in the analysis and the file header (13, 13, 9 and 7 of 337) are reproduced with both the old and the new rims. The 77-ray fan classification and the 122 328-attempt admission counts in the earlier sections were produced with the previous rims and were not run again.

Live check. The local page was rendered at infinity, β = −0.50, −1.00 and −2.00, and the infinity and 2x renders were laid over panels (A) and (B) of Fig. 2 at one scale. Vertices and rims fall on the drawn outline at both ends of the focus travel, apart from the differences listed next, and no elements touch in any of the four states. Remaining differences, all from the renderer drawing one straight rim between the two faces of an element: L3, L6, L13 and L17 taper toward their cemented joint where the figure draws a square rim with a narrow land at the joint, and L14 tapers from 10.0 mm to 9.1 mm where the figure draws a square block with a flat land on its rear face. L8 renders 0.3 mm taller than drawn.

Maker diagram. No manufacturer construction diagram was supplied for this pass and none was viewed. The analysis records the manufacturer's published count of 18 elements in 13 groups, which the model matches with five cemented pairs, and its two Super ED and four ED labels without element positions; the patent's νd 94.66 elements are L5 and L10, and its νd 68.6 to 81.6 elements are L2, L3, L8 and L11. The model has no aspherical surface. The patent figure of the modeled example governs the rims.

## 2026-10-13 — Metadata, special-glass tags and wording pass

Source re-read. The Example 1 table on PDF pages 17 and 18 was compared row by row with the file: R, D, Nd and νd of rows 1 to 32 (18 elements and the stop), the plate rows 33 and 34 (4.1082 mm at 1.51633 / 64.14, then 2.045 mm), and the four variable gaps D9, D14, D15 and D20 at all four states. Every value agrees; there are no aspheric coefficients to check.

Patent against model, first order: focal length 88.21 / 76.51 / 62.44 / 38.06 mm printed, 88.2076 / 76.5145 / 62.4432 / 38.0572 mm computed; full field 14.02° printed, 14.016° traced to the 10.82 mm image height; back focus in air 35.4033 mm printed, 35.4020 mm computed; total length in air 152.0692 mm printed, 152.0730 mm as the sum of the printed rows; magnification on the fixed image plane −0.5004 / −1.0006 / −2.0005 for the printed −0.50 / −1.00 / −2.00; group focal lengths 36.3582 / −26.6003 / 36.3606 / −68.5364 mm printed, 36.3577 / −26.6001 / 36.3605 / −68.5354 mm computed. FNO 3.64 printed; the stop is sized for 3.638.

Maker comparison. No manufacturer construction diagram was viewed. The manufacturer's specification page (explore.omsystem.com, M.Zuiko Digital ED 90mm F3.5 Macro IS PRO, read by the batch coordinator on 2026-10-13) lists 18 elements in 13 groups, 2 Super ED, 4 ED, 1 HR and 1 Super HR elements, 7 circular aperture blades, closest focusing distance 0.250 m or 0.224 m in S-MACRO, maximum magnification 1.00x or 2.00x in S-MACRO, and up to 4x with the MC-14 and MC-20 converters. The model has 18 elements in 13 groups (eight singlets and five cemented pairs), reaches −2.00, and labels its last state 0.2235 m. The page gives counts and no positions, so the special-glass tags are class-level: `apd: "inferred"` on L5 and L10 (νd 94.66, the only two glasses of that class) as the Super ED pair, and on L2 and L3 (νd 68.62), L8 (νd 81.54) and L11 (νd 81.61) as the four ED elements. L1 (νd 70.23) is not tagged: its catalog glass S-FSL5 lies close to the normal line (ΔPgF about +0.004, against +0.016 for FCD515 and +0.049 for S-FPL55 on the engine's line). The HR and Super HR elements are not assigned and carry no tag: six elements have nd above 1.78 (L4 2.001, L16 1.900, L13 1.855, L6 1.847, L9 and L18 1.789).

Stop at close focus. This refines the stop reading in the previous section. The stop marks of Fig. 2 end 103 to 104 px from the axis in panel (A) and 73 px in panel (B): 9.29 mm and 6.56 mm at 0.0898 mm/px, each ± 0.15 mm for a blunted arrow tip on a 1-bit raster. As focal length over paraxial entrance-pupil diameter, the 9.172 mm stop gives 3.612 / 2.306 / 1.221 / 0.362 at the four states, so the printed 2.714 / 1.607 / 0.509 correspond to semi-diameters of 7.79 / 6.97 / 6.53 mm. Traced working f-numbers on axis, 1/(2 sin u′), are 3.64 / 3.90 / 4.40 / 5.71 with the 9.172 mm stop (6.17 at 2x once L5's rim limits the beam) and 5.46 / 6.13 / 7.95 at the three finite states with a 6.51 mm stop. The manual quoted in the analysis lists effective f/4.5 at 1x in the ordinary range and f/6.3 at 1x and f/8 at 2x in S-MACRO, which match 4.40, 6.13 and 7.95. The 2x figure, the printed FNO and the manual therefore agree on a stop of about 6.5 mm in the close range. The 0.5x and 1x printed values do not fit a single second diameter on this reading, and Fig. 2 has no panel for those states. The model was not changed: it keeps 9.172 mm at every state. The analysis paragraph that said the diameters were unavailable now states the figure reading and this comparison.

Fields changed in the data file: the header comment (rewritten as plain statements under FOCUS, REAR PLATE, SEMI-DIAMETERS, STOP, CLOSE-FOCUS ANALYSIS LIMITS and GLASS; every optical statement kept); `role` on all 18 elements (position and job in the group, replacing one repeated sentence about catalog spectra); `apd` and `apdNote` on L2, L3, L5, L8, L10 and L11; `apertureBlades: 7`. `subtitle`, `specs`, `focusDescription`, the teleconverter comment and the rear-plate `source` were already final and were not touched; `focusDescription` was checked and contains no false statement. Group, doublet and variable-gap labels needed no change. No `R`, `d`, `nd`, `vd`, `sd`, `var`, glass label or focus field was edited.

Analysis: removed the description of how values were cross-checked, references to the supplying package and certification wording; restated the close-focus limits in plain terms with the same facts and numbers; added the class-level basis of the special-glass tags and the manufacturer's specification page as source 11; replaced the iris paragraph as described above. It has 498 lines, as before, and no HTML comments. In this file two stale pending notes in the earlier sections were closed in place.

Result. Engine values are identical before and after this pass: focal length 88.2076 mm, f/3.638, stop 9.172 mm, half-field cap 9.499°, back focus 35.4020 mm and the four focus keyframes. The surface audit reports no validation errors. The lens page was viewed after the edits: title, patent line, specification line and focus panel read cleanly, the six tagged elements show as inferred, and the element inspector shows the new note and role.

No open items. Known limits, recorded rather than open: the two-mode iris of the patent is not modeled, and the element positions of the manufacturer's special glasses are not confirmed by a construction diagram.

## 2026-10-13 — Second review: diagram, labels and movement

What was compared. The local lens page (infinity, β = −0.50, −1.00 and −2.00, the focus-movement overlay at both ends, and the inspector of all 18 elements) against `patents/JP2024066164A.pdf`: Fig. 2 panels (A) and (B) on page 35, the Example 1 text and table on pages 15 to 18, and the aberration plots of Figs. 3 and 4 on page 36. The figure was measured again from scratch on the embedded 1-bit raster itself (1281 × 1981 px, 452 ppi, extracted without resampling), with a separate reader from the first pass. The element outlines of the live page were taken from the page's own SVG and laid over both panels.

Scale and state of the figure. The dash-dot axis is tilted 5.6 px per 1000 px in both panels and every height was taken from the local axis. Panel (A): surface 1 to 32 is 1299.5 px for 116.6697 mm (0.08978 mm/px), surface 1 to 16 is 851 px for 76.3862 mm (0.08976), surface 1 to the image is 1707 px for 153.4719 mm (0.08991); all 31 axis crossings (28 lens-vertex runs, the stop mark included, the two plate faces and the image plane) fall within 0.25 mm of the infinity prescription. Panel (B) has the same 1299.5 px glass span and D9 = 202.5 px (18.18 mm, table 18.2238), D14 = 52 px (4.67, table 4.632), D15 = 32 px (2.87, table 2.8945), D20 = 317.5 px (28.51, table 28.352), so it is the 2x state at the same scale. The radial scale was checked on a sag: the flat land behind surface 25 lies 30.5 px (2.74 mm) behind its vertex, which a 16.7825 mm radius reaches at 9.19 mm, and the curve leaves the land 101 to 102 px (9.1 to 9.2 mm) from the axis.

Rims: no value changed. Outer rim of each element, in mm, as the mean of both sides of each panel (outermost ink less one pixel for the 3 px line):

| Element (surfaces) | Panel (B) | Panel (A) | Stored |
| --- | ---: | ---: | ---: |
| L1 (1, 2) | 14.86 | 15.04 | 14.8 |
| L2 (3, 4) | 14.50 | 14.64 | 14.5 |
| L3 (5) | 13.92 | 14.10 | 13.9 |
| L4 (6, 7) | 13.53 | 13.67 | 13.5 |
| L5 (8, 9) | 12.57 | 12.75 | 12.7 |
| L6 (10) | 11.31 | 11.40 | 11.3 |
| L7 (11, 12) | 11.00 | 11.13 | 11.0 |
| L8 (13, 14) | 10.01 | 10.15 | 10.3 |
| L9 + L10 (16, 17, 18) | 11.49 | 11.54 | 11.6 |
| L11 (19, 20) | 11.36 | 11.49 | 11.5 |
| L12 (21, 22) | 10.55 | 10.59 | 10.7 |
| L13 (23) | 10.19 | 10.28 | 10.2 |
| L14 blank (24) | 10.00 | 10.07 | 10.0 |
| L14 rear face (25) | curve ends 9.1 to 9.2 | same | 9.1 |
| L15 (26, 27) | 9.76 | 9.83 | 9.8 |
| L16 (28, 29) | 10.95 | 11.05 | 11.0 |
| L17 (30) | 11.45 | 11.54 | 11.5 |
| L18 (31, 32) | 11.18 | 11.27 | 11.2 |

Panel (A) draws the elements 1 to 2 px taller than panel (B). Every stored value lies within 0.15 mm of one of the two panels except L8, which is 0.15 to 0.3 mm (2 %) above the drawing and was left as inside the reading error. The order of neighbouring heights is as drawn throughout (L1 above L2, L3 above L4, L6 above L7 above L8, the L9 + L10 pair above L11, L12 above L13 above L14 above L15, L17 above L16 and L18). The first pass's values are confirmed.

Places where the page and the figure visibly differ, all from the renderer joining an element's two rim points with one straight edge:

- L14 is drawn as a square block 10.0 mm high whose concave rear face ends at 9.1 to 9.2 mm in a flat land; the page slopes its rim from 10.0 mm at surface 24 to 9.1 mm at surface 25. Raising surface 25 is not available: surfaces 25 and 26 would meet at 9.6 mm and the validator's cross-gap limit stops the shared band at 9.1 mm. The figure settles which face stops short: surface 26 runs to L15's full rim (its curve meets the rim line 13 to 15 px on the object side of its vertex, and its sag at 9.8 mm is 14.8 px), and L15's front corner sits one to two pixels from L14's land, while surface 25 ends on the land. The stored pair (9.1 and 9.8) is therefore the drawn arrangement, not a validator artefact.
- At the four stepped cemented joints (L3/L4, L6/L7, L13/L14, L17/L18) the figure draws both members square, the taller one 0.2 to 0.4 mm above the other, with the cemented curve running to the taller member's rim. One surface carries one value, so one member must taper. The junction carries the lower member's value, which keeps the member with the longer rim square in each pair (rim lengths 3.0 against 1.7 mm for L4 and L3, 3.7 against 1.4 mm for L7 and L6, 4.1 against 1.4 mm for L14 and L13, 3.2 against 2.3 mm for L18 and L17). Giving each pair one common height would square all eight elements and lose the drawn steps; that was not done.
- The camera-side plate OF is traced but not drawn, and the page draws the infinity iris at 2x where panel (B) draws a smaller one; both are as intended and described below.

Labels: one change.

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| `groups` | G1, G2, G3, G4 (surfaces 21 to 32) | G1, G2, G3, G4a (21 to 22), G4b/IS (23 to 27), G4c (28 to 32) | Fig. 2 brackets G1, G2, G3, G4a, G4b and G4c in one row with G4 beneath; ¶0112 names the three subgroups and ¶0128 names G4b as the image-stabilizing group; the element roles and the analysis already refer to G4a, G4b and G4c, which the diagram did not show |

The page packs group labels into rows by width, so a G4 label beside its three subgroups would land between G4b and G4c; the subgroup row was used alone. The focus-movement overlay now lists six rows, with G4a, G4b/IS and G4c fixed. The header comment gained a GROUPS paragraph, and the analysis one sentence in the architecture section.

Checked and found correct:

- Element designations. `name` and `diagramLabel` are L1 to L18, the reference signs of Fig. 2 and of ¶0120 to ¶0126; the inspector heads each element "Element n" followed by the same L-number, and the analysis uses the same names. Each `type` agrees with the signs of the two radii and with the patent's wording for all 18 elements (L1 and L9 negative menisci convex to the object, L4 negative meniscus convex to the image, L6 positive meniscus convex to the image, the rest biconvex or biconcave as stated).
- Cemented brackets. Five, one per cemented pair, with the right surfaces: D1 5 to 7 (L3 + L4), D2 10 to 12 (L6 + L7), D3 16 to 18 (L9 + L10), D4 23 to 25 (L13 + L14), D5 30 to 32 (L17 + L18). The inspector shows a "Doublet Dn" badge on those ten elements and on no other.
- Bracket and gap labels. No cemented-bracket text equals a variable-gap text: the brackets are D1 to D5 and the gaps D9, D14, D15 and D20. The gap labels are the patent's own upper-case notation (¶0131 and the table). Both sets share the letter D; the header now says which is which.
- No aspheric surface: the Example 1 table has no aspheric data and the file has no `asph` entry or A-suffixed label.
- Stop at surface 15 between L8 and L9, 48.67 mm behind the first vertex (figure 48.7 mm in both panels).
- Special-glass tags. The patent text designates no anomalous-dispersion or named glass; its only material statement is that G3 has at least two positive elements with an Abbe number of 80 or more (L10 and L11). `apd: "inferred"` is therefore the right kind on all six. On the engine's normal line the catalog glasses give ΔPgF +0.049 for L5 and L10 (νd 94.66), +0.031 for L8 and L11 (νd 81.5 and 81.6), +0.016 for L2 and L3 (νd 68.62), and +0.004 for L1 (νd 70.23), the only other crown above νd 62; no untagged element fits the maker's two Super ED and four ED counts better. All 18 glass labels resolve in the catalog.

Movement. The four `var` arrays hold the table's columns in the printed order, infinity first and β = −2.00 last. G2 moves toward the image by 4.2120, 9.4019 and 17.0307 mm and G3 toward the object by 7.2754, 13.8514 and 24.8259 mm; D9 + D14 is 22.8558 mm and D15 + D20 is 31.2465 mm at every state (22.8557 at β = −1.00), so the stop, G1 and G4 stay fixed, as ¶0127 states. Panel (B) shows the same: G2 16.8 mm imageward and G3 24.9 mm objectward of their panel (A) positions, stop unmoved. On the page the slider reads ∞, 33 cm, 25 cm and 22 cm at the four keyframes with the table's gaps and focal lengths 88.21, 76.51, 62.44 and 38.06 mm; the far-end label is 22 cm against the maker's 0.224 m, and the β = −1.00 label 25 cm against the maker's 0.250 m. The overlay draws G2 moving right and G3 moving left by 24.83 mm at most.

Field behaviour against the patent's plots, by a separate exact chief-ray trace with Coddington sagittal and tangential foci, through the plate, at the 10.82 mm image height (the plots' solid curve is the sagittal focus and the dashed one the tangential):

| State | Distortion, model / plot | Sagittal focus, model / plot | Tangential focus, model / plot |
| --- | ---: | ---: | ---: |
| Infinity | −0.21 % / −0.1 to −0.2 % | −0.004 / about 0 | −0.010 / about 0 |
| β = −0.50 | −0.61 % / −0.60 to −0.64 % | −0.021 / −0.021 | −0.065 / −0.063 |
| β = −1.00 | −0.77 % / −0.76 to −0.83 % | −0.029 / −0.029 | −0.097 / −0.091 |
| β = −2.00 | −0.47 % / −0.51 to −0.56 % | −0.057 / −0.061 | −0.167 / −0.17 |

At infinity both foci bow to −0.022 and −0.017 mm at 0.7 of the field (plot −0.021 mm), and the half-field for 10.82 mm is 7.008° (table 14.02° full). Signs and sizes agree at all four states, so no radius, gap or index carries a sign or digit error that the axial checks would miss.

Stop statements. The stop marks of Fig. 2 end 103 to 104 px from the axis in panel (A) (9.25 to 9.34 mm) and 72 to 73 px in panel (B) (6.46 to 6.55 mm), inside the 9.3 and 6.6 ± 0.15 mm the header and analysis quote. A separate on-axis trace gives, with the 9.172 mm stop, working f-numbers 3.64 / 3.90 / 4.40 / 5.71 and ray heights of 13.72, 13.87 and 13.79 mm at surfaces 7, 8 and 9 at 2x, so L5 (12.7 mm) passes only the beam of an 8.44 mm stop, f/6.17; a 6.53 mm stop gives f/6.11 at 1x and f/7.92 at 2x. The statements in the header and the analysis are accurate. One addition: the full-aperture ends of the spherical-aberration curves are +0.13 mm at infinity, −0.15 mm at β = −0.50, +0.02 mm at β = −1.00 and −0.27 mm at β = −2.00, and the model gives +0.129, −0.156, +0.024 and −0.275 mm with stops of 9.172, 7.79, 6.97 and 6.52 mm, the sizes the printed FNO values imply; the 9.172 mm stop would give −0.172, +0.323 and +0.227 mm at the three finite states. The patent's computed data therefore use a different stop at each printed state, which the header and the analysis now say. The stop and the model were not changed.

Engine values before and after: focal length 88.2076 mm, f/3.638, stop 9.172 mm and half-field cap 9.499° are identical; the surface audit reports no validation errors, the image-circle check no undersized surface, the traced corner coverage 100 % at 7.0°, and the clearance trace no clipped axial ray or blocked chief ray. The corner chief ray clears every rim by at least 3.5 mm at all four states. No rim changed, so vignetting is unchanged. For the record, the figures in the earlier section are meridional-fan fractions; a full-pupil count over a 240 × 240 grid gives 100 / 100 / 98.1 / 93.3 / 84.2 / 73.3 / 59.4 % at 0 / 1.2 / 2.3 / 3.5 / 4.7 / 5.8 / 7.0° with the present rims, and 48.1 % at 7.0° with the rims as they stood before the first pass.

Live page after the edits: the label row under the diagram reads G1, G2, G3, G4a, G4b/IS, G4c on one line at infinity and at 2x, nothing overlaps, and the outlines fall on the drawn ones at both ends of the travel apart from the differences listed above.

Open limitations: the bevel on L14 and the tapers on L3, L6, L13 and L17 remain; L8 renders 0.2 mm taller than drawn; the patent's smaller close-focus stops are not modeled; the maker's special-glass positions are still unconfirmed by a construction diagram.
