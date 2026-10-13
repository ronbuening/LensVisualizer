# Sigma 15mm f/1.4 DG DN Diagonal Fisheye Art — consolidated Stage 4 audit

## Final disposition

Independent Stage 4 source-first review and justified aperture corrections are complete at the then-current released main. Final readiness is limited to the demonstrated source/native-chief and default construction sampling listed below. No full-field/full-pupil/continuous-ray guarantee is made; unsolved physical-stop branches, later exterior misses and nondefault stress failures remain explicit. The final exact bytes and clean replay are bound by the manifest. Integration: closed 2026-10-11 — the three files are in `src/lens-data/sigma/`; see the deployment validation section near the end of this log.

## Historical Stages 1–3 record

The following earlier gate statements and candidate hashes are preserved as historical provenance. The Stage 4 findings and final manifest below supersede their disposition.

## Job and reference versions

Original card: JP2025099854A, Numerical Example 3, exact output stem Sigma15mmf14DGDNDiagonalFisheyeArt. Complete original PDF and card are preserved. The then-current main was the reference. The new specific plate rules govern the older generic stage wording. No repository mutation or integration occurred.

## Extraction and conventions

Rendered original PDF pages 22, 28–29, 52 and 64 were inspected. PDF numbering is printed page plus one because the complete DPMA original includes a PAJ abstract. Example 3 is paragraph 0140, Fig. 11. All 39 numbered source planes, object distance, full coefficient table through A16, both focus states, group focal lengths, ray-condition data and EX3 condition column are preserved. Surface 34 is unambiguously −62.0139 mm. No US counterpart values enter this record. The literal equation uses 1+K and every selected K is zero. Paragraph 0107 explicitly says equisolid fisheye. Native 185.73° field and 22.39 mm image height are preserved.

Paragraph 0108 specifies d-line 587.56 nm and ΔPgF = PgF − 0.64833 + 0.00180 νd. Current engine uses 0.6438 − 0.001682 νd as its normal line, so source deviation must be converted. Surface indices retain their native d-line meanings. Paragraph 0109 measures the finite object distance from the first surface.

## Model transformations

No scale or source repair. Surface 20 becomes STO and aspheric labels acquire A. Source surfaces 38–39 are an image-adjacent 2.5 mm BSC7 filter 1 mm before the image. The source calls it F and does not call it optional. Stage 2 retains it with physical gaps in rearPlates. The rule for optional/removable filters does not apply. The 21 lens elements exclude this plate, consistent with Fig. 11 and paragraph 0093.

Focus is PUBLISHED: L8, surfaces 13–14, moves +2.0415 mm imageward; d12 grows from 3.9500 to 5.9915 mm while d14 falls from 8.7163 to 6.6748 mm. The track is unchanged. The source finite state is 435.2537 mm object-to-first-surface, not production MFD 0.385 m.

## Glass review

Each distinct named coordinate was checked directly against preserved primary HOYA 20260707 AGF records or the current primary OHARA glass table. HOYA coefficients were re-evaluated with the published Schott-polynomial formula. TAFD30 catalog νd is 40.81 versus source 40.80; FDS16-W catalog nd is 1.98612 versus 1.98613. Neither small discrepancy changes source data. Other coordinate matches are exact at tabulated precision. Source-listed names are coordinate-compatible examples, not proof of supplier or melt identity. OHARA S-prefixes remain S. HIKARI/Schott/CDGM/Sumita were not exhaustively surveyed because the source names coordinate-compatible examples. Relevant rows and coefficients are embedded for offline replay.

## Numerical results

Sequential reduced-angle and independently multiplied ABCD methods agree at both published focus states. At infinity, EFL = 15.497818729 mm, physical total first-surface-to-image track = 168.5001 mm, and BFD measured after source surface 39 = 0.999706029 mm. Source group focal lengths are reproduced within rounded-input tolerance: G1 −111.422311985 mm, G2 +41.147092573 mm. The verifier records individual in-air element powers, every surface Petzval term, principal planes, finite conjugate/magnification, gap conservation, and all applicable algebraic conditions. Printed exact-ray conditions are retained for Stage 2 rather than passed by assertion.

## Correction/discrepancy register

- No optical source correction applied.
- Preserving the negative S34 radius reproduces the Japanese printed values; the known positive counterpart sign must not be mixed in.
- Marketed 15 mm, F1.4, 180°, 38.5 cm differ from the native design quantities. No marketing normalization was applied.
- Source glass ΔPgF values require explicit normal-line conversion before application entry.
- Physical stop diameter and clear semi-diameters are unpublished. They remain Stage 2 inference tasks.

## Independent review

Not performed. This is author extraction and construction evidence, not Stage 4.

## Gate disposition

Stage 1 mandatory checks passed with complete original-source extraction, first-order reproduction and a defined, source-supported transformation plan. The eight source-dependent exact-ray conditions and aperture/geometry checks remain explicit Stage 2 tasks.

## Pending integration

Closed 2026-10-11: the files are integrated in `src/lens-data/sigma/` (see the deployment validation section). At this stage full TypeScript, Prettier, lint, shared corpus tests, build and live viewer checks were not run. A pinned-source targeted runtime execution in Stage 2, if performed, will be separately described and will not imply full application integration.

## Stage 2 construction and actual targeted runtime execution

The actual candidate is literal-only TypeScript with one type import and no executable payload. Every radius, physical spacing, medium and A4–A16 coefficient is compared with the raw Japanese source by the portable verifier. The strict JSON-subset loader rejects duplicate keys, NaN/Infinity, arithmetic, spreads, functions and leftover tokens; an intentional S34 sign mutation is detected. The source plane mapping keeps all optical media: 37 authored surfaces plus two runtime camera-side plate surfaces. No geometry or layout-policy overrides are authored.

The then-current `validateLensData`, `buildLens`, exact sequential/vector tracing, current-state entrance pupils, conjugate/focus selection, native off-axis geometry and production element-render diagnostics were executed through Node 24.19.0 type stripping. This is actual source execution, not a TypeScript compile or a React/browser test. The runtime artifact includes SHA-256 for all 138 imported source modules and binds the final data and driver hashes. No build or catalog-generation hook ran. The reusable driver accepts an explicit read-only source root and external output path.

### Aperture and clear-aperture treatment

The stop position is source-published. Its inferred physical radius is 16.2165087455 mm, calibrated by exact Snell tracing from 15.50/(2×1.46) = 5.3082191781 mm. Runtime F/1.46 agreement is a calibration result. The actual current-state UI pupil at infinity is 5.5410260695 mm, obtained from the physical iris and differential front-group pupil magnification; it is not the calibration pupil. Near focus changes the UI pupil to 5.5245039790 mm. Separately, a physical finite-source pupil radius of 4.9638631467 mm is solved against the same physical iris at the published object plane.

No numerical SDs are printed. Fig. 11 was inspected at equal axial/transverse scale. Curved optical extents, rather than flange rectangles, seeded the model. Initial 7→8 and 35→36 clear-aperture guesses violated current gap intrusion. Their final entry radii were reduced to 19.8 and 14.2 mm with raw prescription unchanged. The shared junction at 9 was expanded to 22.0 mm because the real default UI outer off-axis sample reaches it at 20.82305 mm. Surface 10 is an external boundary; it may vignette. The rear 37A radius is 14.6 mm to contain the native chief, while 36A remains 14.2 mm. No standard, hidden-trim allowance, conic rule or physical spacing was relaxed. Full source/initial/final rationale is in the transformation ledger.

All final 301-height shared-band/rim/edge checks at focusT 0, .25, .5, .75 and 1 pass. The actual production render diagnostics report maximum hidden trim 0 mm. The native `computeElementShapes` SVG was rendered and compared visually with Fig. 11: broad front menisci, six cemented pairs and rear grouping agree. Mechanical flanges intentionally are not modeled optical aperture.

### Current UI versus physical source and ghost behavior

The current native field selector yields the default 55.719° off-axis field in vector mode. The actual on-axis display uses h=fraction×currentEPSD and u=h×conjugateK. All 30 authored on-axis samples transmit across five focus states. Among 25 default off-axis samples, 13 transmit; the rest stop or miss at an external element boundary or stop, never at a cemented interface in this tested grid. At interpolated focusT .5 and .75, the positive outer off-axis display sample misses surface 8 after surface 7. This is retained as a missed entry boundary, not described as a transmitted ray. Exact native chiefs at 0°, 30°, 55.719°, 80°, 89°, 90° and 92.865° pass at all five geometry states. Finite-state large-field chief sweeps are geometry screening, not source-defined planar-object field certification. Physical near axial samples are separately generated from the published first-surface distance and solved physical iris. No ghost continuation is counted as transmitted.

The sequential engine's `reachedImagePlane` flag is false even for a complete ordinary sequential surface traversal. Completion in this audit requires all exact surfaces with status `ok`, followed by explicit straight propagation from the final surface to the authored image plane. This is distinct from ignoring a failed flag or counting a ghost. At native infinity edge the resulting image height is −22.3945738476 mm, within 0.005 mm of the printed magnitude 22.39 mm.

### Source ray-condition residuals and supported resolution

Exact 90° source-ray conditions 3, 4, 9, 10 and 20 reproduce the printed EX3 column at its stated precision. All five printed off-axis G2 heights and all height ratios reproduce rounding. At the nominal-center F/1.46 calibration, the five printed axial heights differ by −0.01629, −0.01202, −0.00972, −0.01063 and −0.00982 mm, exceeding a 0.005 mm height tolerance. These raw comparisons remain FAIL in results; they were not deleted or relabeled as exact reproduction.

The patent gives neither an exact physical iris nor more than two decimals for f/Fno. Independent f=15.50±0.005 and Fno=1.46±0.005 imply a bounded input-pupil interval. Solving each printed axial height ±0.005 mm yields an intersecting common pupil interval [5.3114740856, 5.3132516704] mm, wholly inside the independently printed f/Fno bounds. One common aperture therefore accounts for all five residuals. The acceptance check is this explicit rounding-resolution test; the implemented nominalFno remains 1.46 and all source numbers remain unchanged. The interval solve is a geometric uncertainty calculation, not a second authored stop or transmission certificate.

### Spectral fields and finite-conjugate selector

Each element retains source nd/νd, the converted source dPgF, and explicit catalog-example nC/nF/ng. HOYA line anchors are recalculated from primary catalog polynomial coefficients; OHARA anchors are direct manufacturer table values. They are catalog coordinates, not measured source-melt data. Real dispersion quality is now `lineIndices`. Finite-conjugate lookup selects only the published t=1 station; interpolated states remain uncertified. Current MTF explicitly rejects fisheye paths as `unsupported-path`; no MTF result is claimed.

### Stage 2 disposition

The Stage 2 result binds to the finalized data/evidence/verifier/results and separately executed runtime records in the Stage 2 checkpoint. The original Stage 1 seven-file archive is preserved. Source uncertainty, partial off-axis transmission, physical-versus-UI pupil distinctions and unperformed integration checks remain explicit limitations. Independent Stage 4 has not begun.

Before final Stage 2 freeze, record-only corrections fixed an accidental local variable shadow that replaced results.sourceModel with one spectral row, corrected the exact off-axis transmission count to 13/25, and used the actual runtime quality enum `lineIndices`. No data or optical results changed. The first packaged record was retained as a superseded archive; this replacement checkpoint replays the corrected full source/implemented branches.

## Stage 3 analysis binding and quantitative-claim map

The complete Stage 2 checkpoint was frozen before analysis authoring. Stage 3 leaves the data, evidence, verifier, runtime driver and runtime report byte-identical to that checkpoint. Only the analysis, consolidated audit, results and manifest are added/refreshed. The reference pin and the governing data file are unchanged.

| Analysis section / claim | Governing fact or result | Source / data binding |
|---|---|---|
| Patent metadata, selected example | evidence.job, sources.patent, original card | Original PDF front page/PAJ and card |
| Production identity, 21/15, 4 FLD, 3 SLD, 2 aspheres, native/marketed distinction | evidence.productCorrelation; results.facts.physicalElements/airSeparatedGroups/asphericSurfaces | Sigma official product/launch pages; patent Example 3 |
| Gaussian EFL, G1/G2 powers, track, back-focus reference planes | sourceModel[0] and implementedModel[0] | Actual parsed data R/d/nd with physical rear plate |
| Six cemented net powers | sourceModel[0].cementedGroups; implemented branch recomputation | Complete corresponding cemented stacks, in air |
| All 21 element nd/νd/glass and individual f lines | parsed data.elements; facts.firstOrder[0].elements | Source-mapped element coordinate; isolated air formula |
| Glass deviations and catalog spectral anchors | facts.spectral; checks.spectral-lines-*; evidence.glassEvidence | Primary HOYA records / OHARA rows; source ΔPgF normal-line formula |
| PUBLISHED focus motion, object plane, finite EFL/magnification/defocus | facts.focusTravelMm, sourceModel[1] and implementedModel[-1] | Source variable-spacing table and paragraph 0109 |
| All asphere coefficients | rawPrescription.aspheres; actual data.asph; model-source-mapping | Rendered literal equation PDF 22 and coefficient table PDF 29 |
| Asphere rim departures | facts.asphereDepartures | Actual final surface SDs and full polynomial; modeled apertures explicitly labeled |
| Conditions 5–8, 11–15, 17–19 | facts.algebraicConditions | Raw source plus independently recomputed first order |
| Conditions 3, 4, 9, 10, 20 | facts.runtime.conditionComparisons | Actual 90° vector source chief intersections and image propagation |
| Condition 16 ratios and nominal-center discrepancy | runtime.rayCondition16; results.comparisons.source-axial-height-* | Actual physical source axial ray and 90° chief; failed center values retained |
| Source aperture uncertainty interval | facts.runtime.sourceApertureInterval; runtime sourceApertureIntervals | Five independent rounded AXh intervals intersect source f/Fno bounds; no changed data |
| Physical and UI pupil distinctions | runtime.runtime and runtime.ui / physicalSource | Distinct calibrated, differential UI and first-vertex finite source constructions |
| 30 on-axis, 13/25 off-axis samples; native chief image height; zero hidden trim | runtime.ui, nativeChief, render, actual runtime checks | Final data, five focus samples, no ghosts counted |
| MTF unsupported and certified near selector only | runtime.finiteConjugateSelectors | Actual mtfFiniteConjugate / assessMtfSupport results |

Stage 3 manual claim/citation review: PASS. Source paragraph locators, signed radii, all 21 element headings and coordinate/power lines, complete coefficient columns, section order, native/marketed distinctions, catalog versus melt provenance, standalone versus compound power, and stop/SD inference were reviewed. Conditions 3–15 and 17–20 were additionally evaluated against their explicit source bounds using the frozen computed values; all 18 inequalities pass. Conditions 1–2 are identified as source field/calibration statements, and condition 16 retains its separate rounding-resolution qualification. The explanatory text does not claim isolated aberration assignments, measured production performance, a unique interpolated focus law, whole-field pupil certification or supported fisheye MTF.

The standalone source-image plate classification is a representation inference from its location (one millimetre ahead of the image) and Fig. 11's separation from the 21 lens elements; the Japanese source itself calls it F, a filter. It is fully retained optically and is not treated as optional or omitted. If a later primary source establishes a mandatory lens-holder role, its representation must be reopened under the new specific filter rule, retaining its physical prescription.

At the end of Stage 3 this record and pair had not received an independent Stage 4 audit and integration was pending; both are closed (Stage 4 below; integration 2026-10-11). Final portable Python and exact pinned-runtime clean-extraction reproductions must be completed on the final archive; their external paths and archive hash are reported outside this manifest to avoid self-reference.


## Stage 4 Pass A independence and frozen baseline

The reviewer first worked only from the original four-field card, complete unchanged Japanese publication, primary manufacturer/catalog sources and current contracts. Candidate/prior per-lens material was withheld until freeze. All 39 surface rows, four full aspheres, source states, field/projection, conditions and spectral conventions were freshly re-entered from rendered original pages. Adjoining raw-example material on source pages 27/52 was incidentally visible and was not used as numerical input; this exposure is disclosed. The pre-candidate seven-file fingerprint, its manifest hash, the member hashes and the original source inputs/results are retained under evidence.independentPass and results.independentBaseline.

The full newly written calculation path is retained in the consolidated verifier under ib_ function names. Names and I/O are adapted only for consolidation. It independently repeats sequential reduced-angle recursion, separately multiplied ABCD matrices, vector Snell and asphere intersection calculations, native 90°/92.865° chief solves, exact versus paraxial aperture definitions, source-rounding sensitivity, all 21 standalone and six cemented net powers, per-surface Petzval and glass-coordinate checks. Its stable numerical fingerprint still equals the frozen pre-candidate fingerprint. This preserved result is a source/method-independence record, not a claim that a hash proves independence.

## Stage 4 exact candidate reconciliation

The incoming Stage 3 archive checksum was independently checked, including all 12 members. The incoming data and analysis files were the reviewed starting pair. Fresh portable replay was exactly equal to the incoming stored JSON. The actual 138-module runtime dependency graph matched the released reference manifest, and fresh actual execution exactly reproduced the incoming runtime report. No unmerged engine branch was used.

The actual final TypeScript plus rearPlates is independently expanded and compared at both published focus states against the frozen 39-row source. Every R/d/nd and every asphere coefficient agrees. Standalone powers, groups, cemented net powers, Petzval, cardinals and finite conjugates agree with the independent source computations. Native Japanese S34 remains−62.0139mm. NominalFno 1.46, native 185.73° equisolid field, physical plate, source focus endpoints and all spectral values remain unchanged.

The five nominal-center axial-height comparisons still FAIL at 0.005mm. Their shared source-compatible aperture interval is retained as the separate, reproduced rounding resolution. Strict G1/G2 printed-output rounding comparisons likewise remain visible in the independent comparison records. Their residuals are within the separately executed half-cell input sensitivity bounds; this is not four-decimal source reproduction. Physical versus air-equivalent track is explicitly distinguished. No tolerance was enlarged merely to remove a failure.

## Stage 4 correction register and validation independence

### S4-C1: three inferred cemented-junction apertures

The original five-state default UI grid missed genuine first cemented-interface clipping between its samples. The exact current-state selector uses the differential entrance pupil, default rayTracksF=true, focusK, declared fisheye field 0.6×92.865°=55.719°, and the actual default fractions −0.75,−0.375,0,+0.375,+0.75. Ghost continuations are disabled and tracing stops at the first clip. All preceding physical hits are checked clear before recording a first interior event.

- S6 SD 23.0→23.3mm. The 101-focus-point original grid clips first at S6 for focusT 0.88–0.93, reaching 23.2161192mm at 0.93.
- S18 SD 17.6→18.0mm. It clips first at S18 for focusT 0.34–0.36, reaching 17.9077119mm at 0.36.
- S24 SD 17.6→18.0mm. Separate physically stop-targeted infinity rays at 85°,89° and90°, fraction+0.83 of the physical iris, first clip this junction at up to 17.8908616mm.

These are changes only to three inferred shared-junction SDs, approximately +1.3%,+2.3%,+2.3%. Fig.11's equal-scale optical extents support changes of this size within approximate drawing-reading precision. They do not import flange dimensions or change a source number. Before/after values and complete original first-hit witnesses are preserved in evidence.stage4Corrections. No upstream aperture was reduced to hide a downstream defect.

The corrections were rechecked by the auditor's separate actual-model sag/slope/derivative-root calculation and actual released-project validator/constructor/exact-trace/render calls. The same reviewer authored these corrections and reviewed their outputs; the original frozen source baseline remains independent, while correction validation is not misrepresented as a fresh blind third-party review. All current rim/domain/edge/shared-band limits pass without override, including derivative-root extrema on shared radial bands. Endpoint bounds suffice for axial separation because the only variable gaps are affine and the surfaces/SDs are fixed. This does not establish continuous ray behavior. Real render diagnostics show zero hidden trim at the two authored endpoints and three intermediate samples; the final native SVG was rendered and visually compared with the original Fig.11.

### S4-C2 through S4-C5: source qualification and privacy

The header, plate source string and analysis now explicitly identify camera-side ownership as an inference. The source calls F a filter; its 2.5mm BSC7 prescription is retained with 14.8136mm before and 1.0000mm after. No optional/removable wording exists and no optional-filter omission is applied. The specific current filter contract governs. If primary evidence later establishes a lens-holder role, representation must be reopened with physical values retained.

The analysis discloses the missing-clear-plus typography between A12/A14 in the printed equation, while retaining its separately defined additive orders and all unchanged coefficients. It also separates the patent's double-sided asphere fact from the manufacturer's more general two-aspheric-element statement. Private account, Drive, queue and revision identifiers were removed from authored deliverables. The original public patent and four-field card are unchanged.

## Stage 4 exact sampling and remaining limitations

1. Default construction: 101 focus samples from 0 to 1 at 0.01 spacing, five exact default off-axis fractions, current-state pupil/focus selectors. All 505 samples avoid first cemented clipping after correction. Exterior/stop clipping and missed entry paths remain nontransmitted. The original two S8 misses at focusT 0.5/0.75 remain visible. The original five-state grid still has 30/30 transmitted on-axis rays and 13/25 off-axis rays.
2. Native chiefs: 0°,30°,55.719°,80°,89°,90°,92.865° across focusT 0,0.25,0.5,0.75,1. All tested native chiefs complete. The true native edge remains 92.865°, without a marketing or rectilinear cap. Finite-state extreme chiefs are geometry checks, not certification of the patent's full planar finite object field.
3. Independent physical-stop infinity sweep: 19 angles 0,10,20,30,40,50,55.719,60,65,70,75,80,82.5,85,87.5,89,90,91,92.865° and 19 iris fractions −.99,−.95,−.9,−.83,−.75,−.65,−.5,−.375,−.2,0,.2,.375,.5,.65,.75,.83,.9,.95,.99. Roots are searched in a bounded first-surface-hit interval and the converged branch closest to the chief is selected. Of 361 targets, 176 complete, 159 first clip at exterior/stop boundaries, 25 remain unsolved and one later misses exterior entry 36A after clear exit 35. No solved tested first clip is cemented after correction. All 336 solved first-surface launch inputs were independently propagated through the actual project's bounding-sphere vector path, with every classification matching.
4. Physical finite axial sweep: 19 solved physical-iris fractions at the source 435.2537mm first-vertex object plane, separately from UI focusK; all tested paths transmit.
5. Nondefault diagnostic stress: 13 focus values, 12 field angles and 11 differential-pupil offsets produce 1716 cases 459 complete; 362 fail to complete an intersection path; 49 are first interior clip or unresolved interface events. These are retained raw diagnostics, not silently classified as transmission. They are not physical-stop-targeted rays and lie outside the demonstrated default-field construction requirement. No universal full-native-field pupil acceptance is claimed. Unsolved branches are unresolved, not proof of physical impossibility.

All state/field/fraction lists and first-failure classifications are in the executable results. The added scope does not license a new exception, changed geometry policy, source repair, artificial cement or disappearance of prior failures. Final readiness is confined to the source/native-chief and default-construction requirements demonstrated here, with the stated remaining branches and nondefault stress limitations.

## Stage 4 final quantitative-claim map and gate

The earlier map is updated by the final parsed-model results and final hashes in the manifest. Independent input/model agreement, geometry extrema, physical-stop targets, finite axial probes and source/raw discrepancies are under results.independentBaseline.passB. Current-project dense default rays, physical branch crosschecks, nondefault diagnostics and module hashes are in the final runtime.json. The source-normal-line conversion and catalog coordinates are compared independently against the frozen primary extraction. Launch timing/specifications, patent locators, glass prefixes, reference planes, inferred aperture labels and explanatory source/inference distinctions were manually reviewed.

Stage 4 manual claim/citation review: PASS. No APO, measured MTF, factory-melt identity, exact production prescription, full-pupil transmission, continuum guarantee, React/browser or integration acceptance is asserted. Current fisheye MTF remains unsupported; only the authored near-state finite selector is certified.

Batch readiness is earned for this exact final pair and the documented targeted current-project scope after clean extraction and replay. It does not approve unresolved nondefault stress branches or certify integration. The final twelve-file archive includes unchanged original source/card, actual data/analysis, consolidated evidence/verifier/results/audit/manifest, and essential runtime driver/report/native geometry. Python3.12.14, NumPy2.3.5 and SciPy1.17.0 are required for portable full verification; Node24.19.0 plus the identified read-only source snapshot reproduce actual runtime execution. Outputs are written outside the package; stored results are never overwritten during replay. Repository compiler, Prettier, lint, corpus, build and live viewer were not run at this stage and are required at integration. Integration: closed 2026-10-11 — the files are in `src/lens-data/sigma/` and load in the repository engine and surface validator (deployment validation section); repository-wide checks run with the batch.

## 2026-10-11 — Semi-diameter pass against the patent figure

Scope: `sd` values and the semi-diameter notes only. Radii, spacings, indices, aspheric coefficients, focus data, the rear plate and the calibrated stop (16.2165 mm) are untouched.

### Source and scale

- Source: `patents/JP2025099854A.pdf`, PDF page 64 (printed p. 63), 図11, the infinity cross-section of Numerical Example 3 (tables on PDF pp. 28–29). The sheet is a 2600 × 1572 px bitmap at 413 ppi; it was measured at that native resolution on the lower half of the section, which carries no leader lines.
- Axis: the dash-dot line is rows 1316–1318 (centre 1317). Vertex crossings: surface 1 at x = 713, surface 37A at x = 2589, image plane at x = 2817.5.
- Scale: 150.1865 mm over 1876 px gives 80.06 µm/px; 168.5001 mm over 2104.5 px gives 80.07 µm/px. The vertices of surfaces 5, 15A, 21 and 33 land within 1 px of the positions that scale predicts.
- Transverse check: drawn curves compared with the prescription spheres at fixed sag read 0.985–0.99 of the axial scale in the front group (surfaces 1–4), 0.98 at surfaces 7 and 8, and 0.99–1.00 in the rear group (surfaces 29, 31, 35). The drawing is equal-scale to about 1.5 %, which is the reading uncertainty of every figure value below.
- The repository's automatic figure screen on the same sheet returns a median figure/data ratio of 1.000 and 110.19 µm/px at 300 dpi, the same scale.
- Stop: the drawn aperture ticks begin 198 px (15.85 mm) from the axis against the calibrated 16.2165 mm, a ratio of 0.98.

### Figure readings and decisions

Figure values are the optical extent, where the curved surface ends; flat mounting annuli and flange blocks are excluded.

| Surface | Before (mm) | Figure (mm) | Figure / before | After (mm) | Evidence |
|---|---:|---:|---:|---:|---|
| 1 | 44.5 | 44.3 | 0.99 | 44.5 | Front curve runs into the flange top at 553 px. Kept. |
| 2 | 34.5 | 33.9–34.0 | 0.98 | 34.5 | Curve ends at the flange step, 423–425 px. Kept. |
| 3 | 33.5 | 33.3 | 0.99 | 33.5 | Curve meets the L2 block edge at 416 px. Kept. |
| 4 | 23.0 | 23.0 | 1.00 | 23.0 | Curve ends at the flange step, 287 px. Kept. |
| 5, 6 | 23.0, 23.3 | 23.0 | 1.00, 0.99 | 23.0, 23.3 | Both reach the D1 outer edge at 287.5 px. Kept. |
| 7 | 23.0 | 19.0–19.2 | 0.83 | 19.5 | The concave curve ends at 236–240 px and a flat annulus runs on to the 23.0 mm outer edge. The old value was the outer edge. Changed. |
| 8 | 19.8 | 18.9–19.1 | 0.96 | 19.8 | Curve ends at 236–239 px, flat annulus to 20.5 mm. Inside reading noise. Kept. |
| 9 | 22.0 | 20.5 | 0.93 | 22.0 | Junction reaches the D2 outer edge at 256 px. Kept, see limitations. |
| 10 | 20.5 | 20.5 | 1.00 | 20.5 | Kept. |
| 11, 12 | 20.2 | 20.25 | 1.00 | 20.2 | 253 px. Kept. |
| 13, 14 | 19.5 | 19.45 | 1.00 | 19.5 | 243 px. Kept. |
| 15A, 16A | 18.5 | 18.3 | 0.99 | 18.5 | 229 px. Kept. |
| 17, 18, 19 | 17.6, 18.0, 17.6 | 17.45 | 0.99, 0.97, 0.99 | unchanged | 218 px. Kept. |
| 21, 22 | 17.6 | 17.45 | 0.99 | 17.6 | 218 px. Kept. |
| 23, 24, 25 | 17.6, 18.0, 17.6 | 17.4 | 0.99, 0.97, 0.99 | unchanged | 217 px. Kept. |
| 26, 27 | 17.5 | 17.5 | 1.00 | 17.5 | 219 px. Kept. |
| 28, 29, 30 | 17.0 | 16.8 | 0.99 | 17.0 | 209.5 px. Kept. |
| 31, 32 | 16.8 | 16.6 | 0.99 | 16.8 | 207 px. Kept. |
| 33, 34 | 16.2 | 16.0 | 0.99 | 16.2 | 200 px. Kept. |
| 35 | 16.2 | 13.8–13.9 | 0.85 | 13.9 | The concave curve ends at 172–174 px and a flat annulus runs on to the 16.0 mm outer edge. The old value was the outer edge. Changed. |
| 36A | 14.2 | 15.7 | 1.11 | 15.7 | Square-cut rim, both faces reach the edge at 196 px. Changed. |
| 37A | 14.6 | 15.7 | 1.08 | 15.7 | Same square rim; one height for both faces. Changed. |

Four surfaces changed. Surface 7 takes 19.5 mm, between the direct reading (19.0–19.2 mm) and the height the prescription sphere has at the drawn annulus plane (19.7 mm), so it sits just under its facing partner, surface 8, as drawn. Surfaces 35, 36A and 37A are a linked set: the packaged model had carried the L20 rear face to the outer edge, which pushed its rim about 1.2 mm further back than the drawn annulus plane and forced L21 down to 14.2 mm to clear it. With surface 35 left at 16.2 mm the validator refuses the drawn L21 rim (combined sag 3.71 mm against 3.054 mm allowed of the 3.393 mm gap at 15.7 mm); with surface 35 at its drawn 13.9 mm the same rim passes with no override. Neither asphere turns over: slopes run monotonically to 16.5 mm (0.081 on 36A, −0.108 on 37A).

Asphere departures recomputed at the new rims and written into the analysis table: 36A −155.763 µm at 15.7 mm (was −103.111 µm at 14.2 mm) and 37A −32.068 µm at 15.7 mm (was −14.285 µm at 14.6 mm). The same routine reproduces the four previously published departures to the last digit.

### Clearance results

The field-coverage audit skips this lens because of its fisheye projection, and the scratch clear-aperture probe launches with tan(field) and stops at about 74.5°, so the edge of the field was traced separately: a meridional exact trace launched on the first surface with collimated bundles, the rear plate included. It reproduces the published image height, −22.3946 mm at 92.865°.

- Repository validator: no errors. Image-circle floor: 0 undersized. Hidden render trim: 0 mm at focusT 0, 0.25, 0.5, 0.75 and 1.
- Engine summary unchanged: half-field 92.865°, F/1.46, EFL 15.4978 mm, stop 16.2165 mm.
- Axial marginal ray at F/1.46: no clip at either focus state. Tightest margin 0.92 mm at surface 26 (16.58 of 17.5 mm). At the changed surfaces it reads 9.81 of 19.5, 7.73 of 13.9, 7.00 of 15.7 and 6.38 of 15.7 mm.
- Chief ray at 92.865°: not blocked. Tightest margins 12.78 of 13.9 mm at surface 35, 21.64 of 23.0 at surface 4, 14.24 of 15.7 at surface 37A and 33.04 of 34.5 at surface 2; 16.29 of 19.5 at surface 7. With the near-focus spacings the same chief ray reads 12.76 mm at surface 35.
- Meridional share of the stop diameter that passes every rim, before to after: unchanged through 55.7° (76.2 %); 65° 69.3 to 68.2 %; 75° 57.4 to 56.3 %; 80° 51.3 to 48.9 %; 85° 44.4 to 42.3 %; 88.4°, the 21.6 mm frame corner, 33.9 to 36.3 %; 90° 28.9 to 31.6 %; 92.865° 20.9 to 23.9 %. The corner bundle is now limited by surfaces 2 and 35 instead of 2 and 37A. The corner vignetting is kept, not widened away.
- Engine geometric transmission, before to after: unchanged to 60°; 0.479 to 0.469 at 65.9°; 0.313 to 0.302 at 77.9°; 0.229 unchanged at 83.9°; 0.125 to 0.135 at 89.8°; 0.083 to 0.104 at 92.8°.
- Dense meridional scan, 75 field angles to 92.865° by 1,781 first-surface heights: 12,496 of 15,888 traced rays transmit after the pass against 12,509 before at infinity, and 12,543 against 12,562 of 15,980 with the near-focus spacings. First clips that land on a cemented interface fall from 16 to 4 at infinity and from 10 to 1 at near focus; all are on surface 9 between 42.7° and 51.5°.

### Live comparison

The local page was captured at infinity and at closest focus after the edit and compared with 図11. L21 now stands almost as tall as the D6 doublet, as drawn, and no longer sits inside the L20 rim. No elements overlap at either focus state and the on-axis fan is unclipped.

Manufacturer section (coordinator-viewed; no image was supplied to or downloaded for this pass): 21 elements in 15 groups, matching 図11 element for element; aspherical elements L9 and L21; FLD at L4, L17, L18 and L19; SLD at L5, L12 and L13. The patent figure of the modeled example governs the proportions.

### Open limitations

- The renderer joins unequal front and rear rims with a straight bevel. L1, L2, L5 and now L4 and L20 therefore show a bevel where the figure draws a square block with a flat mounting annulus.
- Surface 9 stays at 22.0 mm, 1.5 mm above the drawn D2 rim (figure/data 0.93, under the threshold for a change). It was raised in the packaged model so that a sampled off-axis ray reaching 20.82 mm does not first clip at the cemented interface. Lowering it to the drawn 20.5 mm would square the D2 rim and passes the validator, at the cost of putting that sample on the junction. The dense scan above shows a few meridional rays still first clip on surface 9 at 22.0 mm. Closed 2026-10-11: lowered to 20.5 mm in the second review below, with no change in transmitted rays.
- Surface 29 has one value for two drawn extents: the figure cuts the L16 rim with a flat annulus at about 14.5 mm while the L17 front continues on the same curve to 16.8 mm. The shared 17.0 mm is kept, so L16 renders about 1.4 mm thicker at the rim than drawn.
- Near-focus rim checks used collimated bundles through the near-focus spacings. That screens the geometry; it is not a trace from the finite planar object, which has no meridional object point near 90°.
- The sample counts in the analysis section on model apertures were taken on the packaged apertures and were not re-run. Only exterior rims moved, so none of those first clips can have moved onto a cemented interface. Closed 2026-10-11: those sample counts were removed from the analysis in the wording pass below.

## 2026-10-11 — Deployment validation and wording pass

Source re-read: `patents/JP2025099854A.pdf`, whose text layer is born-digital and was checked against page renders of PDF pp. 28–29 (Numerical Example 3), p. 22 (aspheric equation), p. 52 (Table 1) and p. 64 (図11). All 39 source rows (37 surfaces plus the filter plate and BF row carried in `rearPlates`), 21 nd/νd/glass rows, 32 aspheric terms (K and A4–A16 on four surfaces; the patent's equation uses 1 + K, as the engine does) and the two variable gaps at both tabulated states were compared with the data file. Mismatches: none. All 22 stored `dPgF` values equal the printed ΔPgF moved to the engine's normal line.

Patent against model, first order: f 15.50 / 15.4978 mm; F-number 1.46 / 1.4598 from the real marginal ray through the calibrated stop; total length 168.50 / 168.5001 mm; paraxial focus 0.0003 mm from the image plane; G1 −111.4197 / −111.4223 mm; G2 41.1473 / 41.1471 mm. The 92.865° chief ray lands at 22.395 mm against the printed Y = 22.39 mm. The 90° chief heights at surfaces 26, 29, 31, 33 and 36 reproduce the condition-16 table to 0.01 mm, and conditions 3, 5, 14, 15, 19 and 20 reproduce the printed EX3 column. Near state: d12 5.9915 and d14 6.6748 mm as printed; the model focuses on an object 435.25 mm ahead of surface 1 at magnification −0.033. The ideal equisolid image height for f = 15.50 mm at 92.865° is 22.46 mm (model −0.30 %); the 21.63 mm frame corner corresponds to a half-field of 88.3°.

Maker comparison: Sigma lists 21 elements in 15 groups with 4 FLD, 3 SLD and 2 aspherical elements, a 180° diagonal angle of view, 11 blades, minimum focus 38.5 cm, L-Mount and Sony E-mount, announced 2024-02-21. Sigma's published section matches 図11 element for element: aspherical elements 9 and 21, FLD at 4, 17, 18 and 19, SLD at 5, 12 and 13. Example 3 is the only full-frame 21-element / 15-group example of the patent's fourteen (Example 4 is 21 / 15 at f = 8.15 mm). At the seven marked positions the example lists FCD100 at L4, L17 and L18, FCD1 at L19 (marked FLD), FC5 at L5, FCD515 at L12 and FCD915 at L13.

Fields changed in this pass. No optical value changed: EFL 15.4978 mm, F/1.46, half-field 92.865°, stop radius 16.2165 mm and both focus keyframes are identical before and after, and the repository surface validator reports no errors.

- Data file: `subtitle`, `specs`, `focusDescription`, the 21 element `role` strings and the wording of the header comment. `apd: "inferred"` with an `apdNote` on L4, L17, L18 and L19 (Sigma's FLD positions) and on L12 and L13 (two of Sigma's SLD positions).
- L5, Sigma's third SLD position, stays `apd: false`. The example's FC5 (1.48749 / 70.44) has `dPgF` +0.0052, no larger than the +0.0046 of the TAFD55-W elements in the same lens, so the glass does not support a special-dispersion tag.
- Analysis: the FLD/SLD mapping is corrected (L13 is an SLD position, L19 an FLD position), the maker comparison is stated, the display name and the L9/L21 glass labels are mirrored, the aperture section is renamed "Model Scope and Limitations", and the sample counts that described how the file was checked are removed.
- This log: hash values and status tokens removed; pending-integration lines closed in place.

Open:

- Surface 9 is stored at 22.0 mm against a drawn 20.5 mm (see the semi-diameter section above). Closed 2026-10-11: set to 20.5 mm in the second review below.
- `closeFocusM` is the patent's 0.604 m state rather than the marketed 0.385 m.
- L15 (LP1, FDS16-W) is the element the patent itself describes as a positive-anomalous-dispersion glass (¶0061–0062, conditions 11–13); it carries `apd: false`. Closed 2026-10-11: the data file carries `apd: "patent"` on L15; checked in the second review below.

## 2026-10-11 — Second review: diagram, labels and movement

An independent second look at the lens as the local site draws it, against 図11 (PDF p. 64) and the Example 3 text and tables (PDF pp. 27–29, reference signs in ¶0222). The page was captured at infinity, at closest focus, with the focus-movement panel open at both ends of the range and with the off-axis display on; the inspector was read for elements 1, 2, 4, 5, 8, 9, 12, 13, 15, 17, 18, 19 and 21.

### Figure re-measured

The sheet was profiled again from scratch at its native 413 ppi. Axis row 1317. Thirty-four vertex crossings were located and fitted to the prescription: 150.1865 mm over 1876 px gives 0.08006 mm/px, and every vertex lands within 1.3 px of its predicted position. The plate F (2774 and 2805 px) and the image plane (2817.5 px) agree with the 14.8136 / 2.5 / 1.0 mm rear spacings. The drawn state is infinity: surface 12 to 13 is 50 px (4.00 mm against D12 = 3.95; the near state would be 75 px). Stop ticks sit at x = 1843 px (predicted 1843.4), between L11 and L12, with inner ends 198 px (15.85 mm) from the axis.

Rim readings (line centres, lower half, which carries no leaders):

| Surfaces | Stored before this review (mm) | Figure, this review (mm) | Note |
|---|---:|---:|---|
| 1 | 44.5 | 44.3 | front arc meets the flat rim at 553 px |
| 2 | 34.5 | 33.9 | arc ends where the flat land begins, 423 px |
| 3 | 33.5 | 33.3 | 416 px |
| 4 | 23.0 | 22.9 | land begins at 286 px |
| 5, 6 | 23.0, 23.3 | 23.1 | L3–L4 block rim, 288 px |
| 7 | 19.5 | 18.8–19.3 | land begins at 235–241 px |
| 8 | 19.8 | 18.8–19.1 | land begins at 235–238 px |
| 9, 10 | 22.0, 20.5 | 20.5 | L5–L6 block rim, 256 px on both sides of the axis |
| 11, 12 | 20.2 | 20.25 | 253 px |
| 13, 14 | 19.5 | 19.5 | 243.5 px |
| 15A, 16A | 18.5 | 18.3 | 229 px |
| 17–19 | 17.6, 18.0, 17.6 | 17.45 | 218 px |
| 21, 22 | 17.6 | 17.45 | 218 px |
| 23–25 | 17.6, 18.0, 17.6 | 17.4 | 217 px |
| 26, 27 | 17.5 | 17.5 | 219 px |
| 28, 29, 30 | 17.0 | 16.8 | 210 px; the L16 rear land begins at 180 px (14.4 mm) |
| 31, 32 | 16.8 | 16.5 | 206.5 px |
| 33, 34 | 16.2 | 16.0 | 200 px |
| 35 | 13.9 | 13.6–13.85 | land begins at 170–173 px |
| 36A, 37A | 15.7 | 15.7 | square rim, 196 px |

These agree with the first pass to within one or two pixels on every surface. The one stored value that departed visibly from the drawing was the L5–L6 junction.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Surface 9 `sd` | 22.0 mm | 20.5 mm | 図11 draws L5–L6 as a square-cut block with a flat rim at 256 px (20.50 mm) above and below the axis, level with L7 (20.25 mm) and well under the L3–L4 block (23.1 mm). At 22.0 mm the page drew a pointed roof over the junction, 1.5 mm above both neighbours. |
| Element `diagramLabel` | none (the page showed 1–21) | `L1` … `L21` | 図11 and ¶0136–0137 designate the elements L1–L21, in the same order as the data file. |
| `groups` | G1 (negative) 1–19, G2 (positive) 21–37A | the same two, plus N1 (1–2), N2 (3–4), L8 (focus lens) (13–14) and LP1 (26–27) | 図11 brackets N1 under L1 and N2 under L2, draws the focusing bracket and arrow under L8, and leads LP1 to L15 (the leader starts inside L15 at x = 2116 px, between vertices 26 and 27). ¶0136 defines N1 = L1 and N2 = L2; ¶0061 defines LP1. |
| Header comment | junctions 6, 9, 18 and 24 above the drawing | junction 9 at the drawn rim; note on slanted edges and on the label sources | follows the two changes above |
| Analysis | L5 paragraph and the model-scope paragraph described the 22.0 mm junction; the tag sentence omitted L15 | junction text now gives 20.5 mm and its source; one sentence added on the L15 tag | consistency with the data file |

The focus-movement panel is the reason the L8 entry matters. The panel takes its rows from `groups` and measures each row by the midpoint of its end surfaces. With only G1 and G2 authored, both rows are fixed (surfaces 1, 19, 21 and 37A do not move) and the panel reported a maximum travel of 0.00 mm for a lens whose focusing element moves 2.04 mm. With the L8 row it reports 2.04 mm toward the focus plane. The label is long enough to stay on the second label row at every focus position; a shorter text jumped rows part-way through the travel and touched the G1 label.

### Clearance with surface 9 at 20.5 mm

The scratch clear-aperture probe launches with the tangent of the field angle and does not solve the chief ray past about 74.5°, and the field-coverage audit skips fisheye projections, so the field edge was traced with a separate meridional exact trace launched on the first surface, rear plate included. It reproduces the first pass: the 92.865° chief ray lands at 22.3946 mm with margins 12.78 of 13.9 mm at surface 35, 21.64 of 23.0 at surface 4, 14.24 of 15.7 at 37A and 33.04 of 34.5 at surface 2.

- Ray floors at surface 9: axial marginal ray at F/1.46 12.39 mm in both focus states; 92.865° chief ray 13.24 mm at infinity and 13.13 mm with the near spacings.
- Repository surface validator: no errors before and after. Image-circle floor: 0 undersized. Hidden render trim: 0 mm at focus positions 0, 0.25, 0.5, 0.75 and 1.
- Engine summary identical before and after: EFL 15.4978 mm, F/1.46, half-field 92.865°, paraxial tracing half-field 44.42°, stop radius 16.2165 mm.
- Engine wide-open geometric transmission, 32 field angles from 0° to 92.8°: identical at every angle (for example 0.552 at 59.9°, 0.469 at 65.9°, 0.302 at 77.9°, 0.135 at 89.8°, 0.104 at 92.8°).
- Meridional share of the stop diameter passing every rim, identical before and after: 92.6 % at 30°, 76.2 % at 55.7°, 68.2 % at 65°, 56.2 % at 75°, 49.0 % at 80°, 42.3 % at 85°, 36.1 % at 88.4°, 31.6 % at 90°, 24.0 % at 92.865°.
- Dense meridional scan, 75 field angles by 1,781 first-surface heights: 12,496 rays transmit at infinity and 12,543 with the near spacings, the same counts before and after. Of the rays aimed inside the stop, 15 (infinity) and 12 (near) now meet their first rim at surface 9 instead of at a later one (surface 10, 6 mm further on, in the 65° fan examined ray by ray). No transmitted ray is lost.
- The page's default off-axis display (55.7°) has one sample that reaches surface 8 at 19.16 mm and surface 9 at 20.82 mm. At 22.0 mm it passed the junction and stopped at surface 10 (20.87 against 20.5 mm); it now stops at the junction. It never reached the image: it also exceeds surfaces 11 to 17 and the stop (16.84 against 16.22 mm).

### Square-block tests, not applied

図11 draws L1, L2, L4, L5 and L20 with a flat mounting land and a cylindrical edge; the page joins the two rim points with a straight edge. Equal front and rear heights were tried for each.

- L1, surface 2 at 44.5 mm: the validator accepts it, but the rear bowl would then end 24.69 mm behind the front vertex against a drawn land plane at 14.97 mm, wrapping L2, and the engine transmission rises at the field edge (0.135 to 0.146 at 89.8°, 0.104 to 0.115 at 92.8°). Rejected.
- L2, surface 4 at 33.5 mm: not possible; the radius is 25.85 mm and the rim-slope limit caps the surface at 23.27 mm.
- L4, surface 7 at 23.3 mm: the validator accepts it, but the rim would end at 41.88 mm, on the plane of the L5 front land (41.87 mm in the drawing), and the transmission rises between 78° and 84° (0.302 to 0.313, 0.260 to 0.271, 0.229 to 0.240). Rejected; the drawn curve end governs.
- L20, surface 35 at 16.2 mm: the validator refuses it (combined sag 3.71 mm against 3.054 mm allowed before L21).
- L5, surface 8 at 20.5 mm: accepted by the validator and no change in transmission, but the drawn curve ends at 18.8–19.1 mm and the stored 19.8 mm is already above it; a further rise would halve the drawn air space between the L4 and L5 rims (0.66 mm against 1.28 mm drawn). Left at 19.8 mm; with the junction at 20.5 mm the L5 edge now slopes by 0.7 mm over its 9.8 mm length.
- Junctions 6, 18 and 24 at their block heights (23.0, 17.6, 17.6 mm): accepted by the validator, same transmitted-ray counts and the same transmission curve; 108 rays aimed inside the stop would then meet their first rim at junction 24. These three stand 0.3–0.6 mm above the drawing, under one and a half pixels on the page, and were left as the earlier corrections set them.

### Checked and found correct

- Cemented brackets: D1 5–7 (L3 + L4), D2 8–10 (L5 + L6), D3 17–19 (L10 + L11), D4 23–25 (L13 + L14), D5 28–30 (L16 + L17), D6 33–35 (L19 + L20). These are the six cemented pairs of ¶0136–0137 and of 図11; each member carries the matching `cemented` value. 21 elements in 15 air-separated groups.
- Group brackets: G1 over surfaces 1–19 (L1–L11) and G2 over 21–37A (L12–L21), as the patent's group table gives them (G1 from surface 1, G2 from surface 21) with the stated powers (−111.42 and +41.15 mm).
- Element types against the signs of R and ¶0136–0137, all 21: L1, L2, L10, L16 negative menisci convex to the object; L14 negative meniscus convex to the image; L3 positive meniscus convex to the image; L8, L11 positive menisci convex to the object; L4, L5, L7, L20 biconcave; L6, L12, L13, L15, L17, L18, L19 biconvex; L9 and L21 biconvex with two aspherical faces. Role strings and stored focal lengths agree with the paraxial values.
- Aspherical markers: 15A, 16A, 36A and 37A, the four surfaces the table stars, and no others; the page draws two markers over L9 and two over L21.
- Stop: surface 20, drawn between L11 and L12.
- Tags: L15 carries the patent tag. ¶0061–0062 and condition (13) define LP1 as a positive G2 element of a glass with positive anomalous partial dispersion, 図11 leads LP1 to L15, and the example lists FDS16-W at ΔPgF +0.0468. This supersedes the open line in the previous section, written while the element still carried `false`. The inferred tags on L4, L17, L18, L19 (maker FLD positions) and L12, L13 (maker SLD positions) follow the maker record quoted in the previous section; the patent text speaks of special low-dispersion glass behind the stop only in general terms (¶0062) and designates none of these elements, so they stay inferred. L5 (FC5, +0.0090) and L10 (FDS20-W, +0.0310, a negative element the patent does not single out) stay untagged.
- Glass: all 21 labels and the plate are the names printed in the patent's glass column and all resolve in the catalogue.
- Focus: `var` index 0 is the infinity column and index 1 the near column of the patent table (D12 3.9500 to 5.9915, D14 8.7163 to 6.6748). In the engine, surface 13 moves from 60.0862 to 62.1277 mm, 2.0415 mm toward the image, while surfaces 12 and 15A and the image plane stay put. ¶0138 and the arrow under L8 in 図11 give the same direction. The slider's far end reads 60 cm, the patent's 435.25 mm object distance plus the 168.50 mm track.
- Rear plate F: traced from `rearPlates` and not drawn; 図11 draws it 1 mm ahead of the image plane.

### Live page after the edits

At infinity and at closest focus the L5–L6 pair is a flat-topped block level with L7, the elements are labelled L1–L21, and the lower rows read N1, N2, G1 (negative), LP1 and L8 (focus lens), G2 (positive), each under the right elements. L8 sits visibly closer to L9 at closest focus. The movement panel lists six rows, five fixed and L8 moving 2.04 mm toward the image. No elements overlap in either state.

### Open limitations

- L1, L2, L4 and L20 still show a slanted edge where the figure draws a square corner with a flat land. No pair of semi-diameters reproduces a land; it needs a drawing feature.
- Surface 29 remains one value for two drawn extents (L16 land from 14.4 mm, L17 front to 16.8 mm).
- The G1 and G2 labels sit on different label rows because LP1 lies under the G2 label's position and is packed first.
- Maker section: not viewed in this review; the element and special-glass positions are quoted from the previous section.

## 2026-10-11 — Moulded-glass labels

The labels of L9 and L21 are now the names the patent lists, `MC-TAF401 (HOYA; source-listed example)` and `MC-NBFD130 (HOYA; source-listed example)`, without the "M-TAF401 / M-NBFD130 dispersion data" suffix that was there only so the label would resolve. The glass catalog now carries MC-TAF401 and MC-NBFD130 as aliases of M-TAF401 and M-NBFD130: HOYA's 2026-07-07 catalog file gives each pair the same nd, νd and dispersion coefficients. Both elements resolve to the same catalog rows as before, and their stored C, F and g indices are unchanged.
