# Sigma 15mm f/1.4 DG DN Diagonal Fisheye Art — consolidated Stage 4 audit

## Final disposition

Independent Stage 4 source-first review and justified aperture corrections are complete at released main 709dda72. Final readiness is limited to the demonstrated source/native-chief and default construction sampling listed below. No full-field/full-pupil/continuous-ray guarantee is made; unsolved physical-stop branches, later exterior misses and nondefault stress failures remain explicit. The final exact bytes and clean replay are bound by the manifest. INTEGRATION_PENDING.

## Historical Stages 1–3 record

The following earlier gate statements and candidate hashes are preserved as historical provenance. The Stage 4 findings and final manifest below supersede their disposition.

## Job and reference versions

Original card: JP2025099854A, Numerical Example 3, exact output stem Sigma15mmf14DGDNDiagonalFisheyeArt. Complete original PDF and card are preserved. Current main resolved directly as 709dda72a0ddead8ee77b8306347429031f8b379. The new specific plate rules govern the older generic stage wording. No repository mutation or integration occurred.

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

READY_FOR_DATA. Stage 1 mandatory checks passed with complete original-source extraction, first-order reproduction and a defined, source-supported transformation plan. The eight source-dependent exact-ray conditions and aperture/geometry checks remain explicit Stage 2 tasks.

## Pending integration

INTEGRATION_PENDING. Full TypeScript, Prettier, lint, shared corpus tests, build and live viewer checks were not run. A pinned-source targeted runtime execution in Stage 2, if performed, will be separately described and will not imply full application integration.

## Stage 2 construction and actual targeted runtime execution

The actual candidate is literal-only TypeScript with one type import and no executable payload. Every radius, physical spacing, medium and A4–A16 coefficient is compared with the raw Japanese source by the portable verifier. The strict JSON-subset loader rejects duplicate keys, NaN/Infinity, arithmetic, spreads, functions and leftover tokens; an intentional S34 sign mutation is detected. The source plane mapping keeps all optical media: 37 authored surfaces plus two runtime camera-side plate surfaces. No geometry or layout-policy overrides are authored.

Current 709dda72 `validateLensData`, `buildLens`, exact sequential/vector tracing, current-state entrance pupils, conjugate/focus selection, native off-axis geometry and production element-render diagnostics were executed through Node 24.19.0 type stripping. This is actual source execution, not a TypeScript compile or a React/browser test. The runtime artifact includes SHA-256 for all 138 imported source modules and binds the final data and driver hashes. No build or catalog-generation hook ran. The reusable driver accepts an explicit read-only source root and external output path.

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

READY_FOR_ANALYSIS binds to the finalized data/evidence/verifier/results and separately executed runtime records in the Stage 2 checkpoint. The original Stage 1 seven-file archive is preserved. Source uncertainty, partial off-axis transmission, physical-versus-UI pupil distinctions and unperformed integration checks remain explicit limitations. Independent Stage 4 has not begun.

Before final Stage 2 freeze, record-only corrections fixed an accidental local variable shadow that replaced results.sourceModel with one spectral row, corrected the exact off-axis transmission count to 13/25, and used the actual runtime quality enum `lineIndices`. No data or optical results changed. The first packaged record was retained as a superseded archive; this replacement checkpoint replays the corrected full source/implemented branches.

## Stage 3 analysis binding and quantitative-claim map

The complete Stage 2 checkpoint was frozen before analysis authoring. Stage 3 leaves the data, evidence, verifier, runtime driver and runtime report byte-identical to that checkpoint. Only the analysis, consolidated audit, results and manifest are added/refreshed. The reference pin remains 709dda72a0ddead8ee77b8306347429031f8b379. The unchanged governing data SHA-256 is `6e88e5cbce23d2047ae586b4725817bf18f21a8d0066ffc106d0798ce6caa89a`.

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
| MTF unsupported and certified near selector only | runtime.finiteConjugateSelectors | Actual 709dda72 mtfFiniteConjugate / assessMtfSupport results |

Stage 3 manual claim/citation review: PASS. Source paragraph locators, signed radii, all 21 element headings and coordinate/power lines, complete coefficient columns, section order, native/marketed distinctions, catalog versus melt provenance, standalone versus compound power, and stop/SD inference were reviewed. Conditions 3–15 and 17–20 were additionally evaluated against their explicit source bounds using the frozen computed values; all 18 inequalities pass. Conditions 1–2 are identified as source field/calibration statements, and condition 16 retains its separate rounding-resolution qualification. The explanatory text does not claim isolated aberration assignments, measured production performance, a unique interpolated focus law, whole-field pupil certification or supported fisheye MTF.

The standalone source-image plate classification is a representation inference from its location (one millimetre ahead of the image) and Fig. 11's separation from the 21 lens elements; the Japanese source itself calls it F, a filter. It is fully retained optically and is not treated as optional or omitted. If a later primary source establishes a mandatory lens-holder role, its representation must be reopened under the new specific filter rule, retaining its physical prescription.

READY_FOR_AUDIT. This record and pair have not received an independent Stage 4 audit. Integration remains pending. Final portable Python and exact pinned-runtime clean-extraction reproductions must be completed on the final archive; their external paths and archive hash are reported outside this manifest to avoid self-reference.


## Stage 4 Pass A independence and frozen baseline

The reviewer first worked only from the original four-field card, complete unchanged Japanese publication, primary manufacturer/catalog sources and current contracts. Candidate/prior per-lens material was withheld until freeze. All 39 surface rows, four full aspheres, source states, field/projection, conditions and spectral conventions were freshly re-entered from rendered original pages. Adjoining raw-example material on source pages 27/52 was incidentally visible and was not used as numerical input; this exposure is disclosed. The exact pre-candidate seven-file fingerprint is a201472d13ddfc864d91c6a56cb9111105c03c3fc6c47786388e7e3e8a72201b; its manifest hash is bb2e1b2d9e8bc91d3e284f85855572956d6a89d983c960f41957d7477400e041. Full member hashes and original source inputs/results are retained under evidence.independentPass and results.independentBaseline.

The full newly written calculation path is retained in the consolidated verifier under ib_ function names. Names and I/O are adapted only for consolidation. It independently repeats sequential reduced-angle recursion, separately multiplied ABCD matrices, vector Snell and asphere intersection calculations, native 90°/92.865° chief solves, exact versus paraxial aperture definitions, source-rounding sensitivity, all 21 standalone and six cemented net powers, per-surface Petzval and glass-coordinate checks. Its stable numerical fingerprint still equals the frozen pre-candidate fingerprint09d6634bc56df5167d05fa84efb267ba1fcf493a548b6150c49394f590cf6806. This preserved result is a source/method-independence record, not a claim that a hash proves independence.

## Stage 4 exact candidate reconciliation

Incoming Stage 3 archive SHA256 df99e6e898175a444f11288b25c20a96dca13365a35de4cad92b31c36bfef800 was independently checked, including all 12 members. Incoming data SHA256 6e88e5cbce23d2047ae586b4725817bf18f21a8d0066ffc106d0798ce6caa89a and analysis SHA256 fce0019168f1240a4505f2e1569d2fdabb0ba89083b69e6f9237649411abb8fe were the reviewed starting pair. Fresh portable replay was exactly equal to the incoming stored JSON. The actual 138-module runtime dependency graph matched the released 709dda72 reference manifest, and fresh actual execution exactly reproduced the incoming runtime report. No unmerged engine branch was used.

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

READY_FOR_BATCH is earned for this exact final pair and documented CHAT_PREFLIGHT/targeted current-project scope after clean extraction and replay. It does not approve unresolved nondefault stress branches or certify integration. The final twelve-file archive includes unchanged original source/card, actual data/analysis, consolidated evidence/verifier/results/audit/manifest, and essential runtime driver/report/native geometry. Python3.12.14, NumPy2.3.5 and SciPy1.17.0 are required for portable full verification; Node24.19.0 plus the identified read-only 709dda72 source snapshot reproduce actual runtime execution. Outputs are written outside the package; stored results are never overwritten during replay. Repository compiler, Prettier, lint, corpus, build and live viewer remain NOT_RUN, requiredAt integration. INTEGRATION_PENDING.
