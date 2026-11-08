# Zenitar35Literal audit companion

**Reviewed:** 6 November 2026
**Disposition:** Hidden, as-is literal research candidate for review; factory identity and full acceptance remain held.
**Prescription:** RU 2771147 C1, Table 1, native 36 mm / F1, nine elements in eight physical groups.
**Candidate key:** `zenitar-35-f1-ru2771147-literal-research`
**Paired data artifact:** `Zenitar35_Build_20261106/validation2/Zenitar35Literal.data.ts`
**Historical engine evidence binding:** `563081b4218efecc25fde9e6e0fe6a3774b69847`.
**Current replay/matrix binding:** `500ef5992d4230b3068f4703ab8093ec5313ccad`.

## Scope of This Companion

This audit consolidates already-recorded evidence and the source-grounded analysis. It is not a new independent optical review, ray trace, aperture sweep, aggregate run or browser test. The only new numerical work is isolated-element thick-lens power for descriptive first lines, plus direct source/input equality and document consistency checks. The new script does not import the engine, alter the prescription or optimize any value.

No original input, source, engine, prior result or earlier review was edited. No publication, commit, external transfer or upload was performed by this companion task. The analysis must remain paired with the hidden literal candidate; it does not authorize promotion to a retail-identity catalog entry.

## Source and Metadata

The original nine-page PDF is `Zenitar36_SourceCursor_20261106/RU2771147C1.pdf`. Its SHA-256 is `79c3be8201c4979bf2cb5edac77a19f1e95b7b5c2f0ea69c0d3dfb9755619835`.

The patent's bibliographic pages identify application 2021107901, filed 25 March 2021, published 27 April 2022, inventors Vladimir Aleksandrovich Bogdankov and Ilya Anatolevich Levin, and PAO KMZ as proprietor. The current integration snapshot at main `500ef599` has the same analysis specification as the retained build snapshot. Its updated `AGENTS.md`, integration-handoff guidance and full-name metadata requirement were checked. The original research input abbreviates the inventors to Vladimir Bogdankov and Ilya Levin and uses `source.example = {label: "Table 1", id: "1"}`. The current metadata rules require full personal names and distinguish a sole unnumbered example from a numbered table. The analysis therefore uses Vladimir Aleksandrovich Bogdankov and Ilya Anatolevich Levin, in source order, following the patent's own English p. 3 spelling; it describes the source as “Sole example” while retaining Table 1 in Example details. These are source-metadata corrections for integration, not optical changes. Krasnogorsk Mechanical Plant remains the normalized assignee. The historical input is preserved; the integration owner is responsible for applying and separately recording the two metadata corrections.

Printed pages 3 and 6–9 were rendered and visually inspected for the architecture, source table, inequalities and figures. The renderings are retained as `evidence/patent-3.png` and `evidence/patent-6.png` through `evidence/patent-9.png` in this companion directory. The original Table 1 agrees with the supplied transcription. The patent uses generic nᵢ and νᵢ labels; no d-line identity is claimed from those headings.

## Literal Mapping and Modeling Choices

The companion's read-only checks assert all eighteen radii/stop entries, eighteen intervals, eighteen following-medium assignments, seventeen non-stop face diameters and nine index/dispersion pairs against `source/TRANSCRIPTION.json`. The historical TypeScript literal was also compared structurally with `evidence/input_literal.json`. Any integrated metadata normalization must be distinguished from exact preservation of the optical input; the companion verifier permits only the specifically recorded inventor-name and sole-example metadata corrections.

| Item                | Source and candidate treatment                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scale               | Native 36 mm dimensions; no normalization to the retail 35 mm label                                                                               |
| Topology            | Nine glass pieces, eight physical groups, three functional components                                                                             |
| Refracting surfaces | Seventeen; the separate flat stop makes eighteen model rows                                                                                       |
| Doublet             | L5–L6, surface rows 9–11; shared interface row 10; no air gap at the cemented interface                                                           |
| Stop row            | Source row 12, printed `АД*`; candidate label `STO`, with no authored canonical stop semi-diameter                                                |
| Post-stop labels    | Model row labels 13–18 correspond to printed radius labels R12–R17; this is a numbering convention, not an omitted or inserted refracting surface |
| Face sizes          | Source diameters divided by two for authored surface semi-diameters                                                                               |
| Terminal interval   | Printed 17.3 mm retained after the final refracting surface                                                                                       |
| Index convention    | Generic source nᵢ and νᵢ mapped conditionally to schema nd and vd; all glass names remain unmatched                                               |
| Focus               | Infinity-only sentinel `closeFocusM = 1e15`; not a physical minimum-focus distance                                                                |
| Aperture controls   | Engine nominal F1 with authored controls through F16; this control list does not prove a production diaphragm schedule                            |
| Visibility          | `visible: false` remains part of the candidate                                                                                                    |

No source radius, interval, index, dispersion value or face diameter was tuned. No gap-sag allowance override, cap adjustment, artificial plate, altered terminal distance or hidden display trim is credited.

## Descriptive Element Powers

`calculate_element_powers.py` reads the literal input and computes isolated thick-lens powers in air using the printed scalar reference index. It cross-checks the closed-form lensmaker result against the equivalent reduced-angle two-surface matrix expression. This is an elementary descriptive calculation, not a new system optical validation.

| Element | Conditional isolated focal length, mm |
| ------- | ------------------------------------: |
| L1      |                                 -59.4 |
| L2      |                                 +84.7 |
| L3      |                                -133.6 |
| L4      |                                 +54.4 |
| L5      |                                 +39.6 |
| L6      |                                 -23.5 |
| L7      |                                 +79.9 |
| L8      |                                 +53.6 |
| L9      |                                 -84.5 |

Full-precision values, radii, thicknesses and input hashes are in `evidence/ISOLATED_ELEMENT_POWERS.json`. L5 and L6 are hypothetically separated into air only for these descriptors; the actual candidate retains their glass-to-glass interface. No claim of individual aberration correction or actual cemented-group focal length is inferred from this table.

The analysis's element descriptions follow the patent's explicit shapes, component membership and claim language. All four material pairs remain unmatched. The analysis does not invent glass catalog names, ED/APO classifications, named focusing mechanisms, per-element correction budgets or partial-dispersion data.

## Recorded Numerical Findings

All figures below come from the recorded historical build and the separately executed current-integration replay/matrix, except the descriptive focal-length table above. This companion author inspected those records without rerunning them.

### First-order and aperture conventions

- Conditional paraxial EFL: 36.0137942607 mm.
- Conditional Gaussian BFL: 17.4096248977 mm.
- Source terminal interval: 17.3 mm, retained. Difference: 0.1096248977 mm. No source-typo resolution is asserted.
- Canonical engine-F1 iris diameter: 31.4674271482 mm.
- Printed source iris diameter: 30.8 mm. The canonical diameter exceeds it by 0.6674271482 mm, approximately 2.167% of the printed diameter. The printed iris implies approximately F1.0216697126 in the retained paraxial pupil convention.
- A separate diagnostic use of 30.8 mm does not make it equivalent to exact canonical F1.

### Optical run inventory and scope correction

| Existing evidence                         | Actual scope                                                                                                          | Result and limit                                                                                                                                                                           |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `validation3/SOURCE_EDGE_IRIS.json`       | Three requested radii 0, 10.75 and 21.5 mm; reference spectrum; canonical engine F1 and separate printed-iris control | Both three-field controls converge through 50 lp/mm at supported maximum grid 256; printed iris is not exact F1                                                                            |
| `validation4/SOURCE43_ELEVEN_FIELDS.json` | Eleven requested radii from 0 to 21.5 mm; reference spectrum; canonical engine F1 only                                | Ten fields converge through 50 lp/mm. Actual interior height approximately 19.349992 mm converges only through 30 lp/mm at grid 256. All eleven report zero failed and unaimed rays        |
| `validation5/PHOTOPIC_SOURCE43.json`      | Three requested radii 0, 10.75 and 21.5 mm; five-line 470–650 nm photopic estimate; canonical engine F1 only          | Three fields converge through 50 lp/mm, zero failed/unaimed rays; returned radii approximately 0, 10.750783 and 21.500478 mm. All nine glasses use conditional estimated normal dispersion |
| `followup/MTF256.json`                    | Earlier generic-format field, including the 21.65 mm radius associated with a 43.3 mm diagonal                        | The edge retains a 50 lp/mm convergence limitation; it is distinct from the source's 21.5 mm edge                                                                                          |
| `followup/MTF512.json`                    | Unsupported grid-size request                                                                                         | Rejected as invalid input; no rays or optical result from a 512-grid run                                                                                                                   |

`CLAIM_SCOPE_CORRECTION.md` supersedes inherited printed-iris wording in the raw validation4/5 scope strings. Their actual mode arrays contain only `engine_f1`. No eleven-field printed-iris run and no photopic printed-iris run exist in the cited evidence. Historical files are retained, not rewritten to hide that metadata defect.

The source specifies a 43 mm image diameter. The generic 43.3 mm format diagonal is a separate convention, not a substitute source dimension. The earlier null source-edge solve was a search-bracket limitation; the later expanded-bracket diagnostic found the edge without changing the prescription. Neither an initial bracket failure nor numerical MTF nonconvergence is automatically a physical lens failure.

The initial bounded 64-grid MTF records and early sparse field/pupil checks are not promoted to accepted full-field optical curves. Geometrical pupil fractions are not measured radiometric transmission. Numerical convergence is not optical-quality certification or proof of the unknown source glass model.

### Current fixed-infinity source43 matrix

The current integration owner supplied `Zenitar35_Integration_500ef599_20261106/numerical/matrix/SOURCE43_MATRIX.json`. Its 198 unique cases cover nine canonical F-numbers (1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16), eleven requested source-field radii at 2.15 mm spacing from 0 to 21.5 mm, and two spectra (reference and estimated photopic), all at unchanged infinity/design focus and the retained terminal interval. The record contains 197 fields converged through 50 lp/mm and one unconverged field: F1/reference at requested 19.35 mm, converged through 30 lp/mm. Failed and unaimed ray totals are zero. The supported grid cap remains 256.

This matrix uses fourteen fields from the current-engine replay (eleven F1/reference and three F1/photopic) plus 184 additional fields, without duplicate case counting. All 198 cases use the canonical paraxial iris for their F-number. The three-field printed-iris control remains separate. The photopic spectral model remains conditional on the unknown source reference line and estimated normal dispersion.

The same integration's `REPLAY_SUMMARY.json` records six successful current-engine replay steps. Native state, full modeled geometry, aperture-pupil sweep, three-field source-edge/iris controls, eleven-field reference and three-field photopic result files are byte-identical to their retained historical outputs. The matrix source-file hashes and per-field membership were checked by the companion verifier; this is stored-result verification, not a rerun.

`SUMMARY_CLASSIFICATION_CORRECTION.json` preserves a summary-only error: the initial classifier compared field status with `ok` rather than `converged`, overlisting healthy fields as holds. Raw optical outputs and the 197-through-50 count were unchanged. The corrected summary lists only the existing F1/reference 19.35 mm hold, and the original summary remains retained.

The requested sampled canonical-iris aperture/field/two-spectrum matrix is therefore performed, with one numerical hold, rather than unrun. This does not establish continuous-field convergence, finite-focus behavior, a full printed-iris matrix, a generic 43.3 mm-corner matrix, manufacturer mechanical details or factory identity. It also does not turn the conditional spectral assumptions into source-verified glass data.

### Full modeled geometry

`validation6/STATUS.md` and `GEOMETRY_RESULTS.json`, supported by `geometry_review_20261106/REVIEW.md`, close the older shared-cap-only omission for the unchanged infinity cross-section:

- Nine native polygons each have 194 finite vertices, positive area, no nonadjacent self-contact/intersection and zero hidden trim.
- All 36 native and continuous element-pair tests pass. L5–L6 is the intended cemented contact; zero-area shared contact is not overlapping glass.
- The continuous supplement covers the spherical faces and the renderer's actual straight shoulder connectors, including outer shoulders and nonadjacent pairs.
- Minimum noncemented axial separation is 0.5 mm, not a claimed minimum Euclidean distance.
- The whole zero-thickness stop plane has 1.3 mm minimum clearance to modeled glass. The minimum is at radius zero inside the optical opening.
- Nine canonical aperture controls F1–F16 and a separately labeled 30.8 mm printed-iris band pass their full radial blade-band checks. Wide-open canonical blade-band clearance is 2.3740158264 mm; printed-iris blade-band clearance is 1.6460806889 mm. These are not the whole-plane 1.3 mm minimum.
- Independent review used separate reconstruction, dense branch samples and bounded minimization for 138 minima, agreeing with the stored analytic minima within 2.85e-14 mm. This supports the recorded analytic-method review; it is not formal interval arithmetic.

These checks validate the specified spherical/straight-shoulder model, not manufactured shoulders, barrel or iris housing, finite blade thickness or actual blade shapes. They do not constitute a browser-interaction test. The older handoff and initial independent review predate this extension; their outer-shoulder hold is now closed only within this stated modeled scope.

## Independent Review and Historical Attempt Accounting

The retained independent source/build review is complete as a bounded audit. It compared the original table, input mapping, selected scripts and stored results, and checked 4,720 engine-snapshot files. It did not reproduce the optical runs. The later independent geometry review independently checked the corrected extraction, method and stated geometry scope. Neither review establishes factory identity or full application acceptance.

`validation6/BINDING_CHECK.json` records that all 4,720 engine files match the retained commit. The older qualified-handoff hash changed because the handoff had already been additively updated with completed-review and scope-correction notes; numerical/source evidence still matched the older audit. This is a historical document revision, not evidence of a changed optical input. Snapshot identity is not live remote-main freshness.

The following unsuccessful attempts remain distinguishable:

1. Earlier schema ingestion attempts required schema-only layout/source-metadata fixes. Their retained results are not optical failures.
2. The initial source-edge inversion did not bracket the requested height. A later wider analysis search addressed the bracket without optical tuning.
3. The unsupported 512-grid request was rejected before an optical run.
4. The first validation6 extractor read spans/display from the wrong state object and produced an incomplete export. The geometry checker stopped with `KeyError` before geometry checks. Its script and partial state remain preserved. Only the corrected complete extraction contributes to the geometry pass.

## Production Attribution and Open Holds

`Zenitar35_AttributionFollowup_20261106/REPORT.md` supports a credible 35 mm F1 product hypothesis but not an exact factory table:

- The official Zenit store supports maker, nominal 35/F1, M mount and 9/8 topology, plus a retail 0.8 m closest-focus specification.
- The 35.9886 mm archive value was seen only in a search-index result; the page itself was not recovered. It must retain that qualification.
- The interview's patent-link placement is editorial, not a personal table-to-product identification by Bogdankov.
- Contemporary 2018 product coverage predates the 2021 patent filing. The source was not scaled to force agreement with a product name.

Remaining holds are explicit source spectral reference and actual glass identity; canonical-versus-printed iris convention; unresolved terminal/BFL difference; the 19.35 mm reference 50 lp/mm convergence hold; separate generic 21.65 mm edge limitation; finite-focus prescription and manufactured movement; finite-focus and full printed-iris matrices, behavior between the sampled canonical-iris states, and untested generic-format-corner states; factory prescription identity; and manufacturer mechanical details.

The historical records establish only a focused input TypeScript pass, not a whole-application typecheck, build, lint/test aggregate or interactive browser gate. Any later integration owner must report its gates separately with their own engine/input binding. This companion makes no claim that an unperformed gate passed and does not expand the prescription's release status.

## Evidence Paths and Reproduction

Paths below are relative to the shared work root, unless described as within this companion directory:

- `Zenitar36_SourceCursor_20261106/RU2771147C1.pdf`, `source.txt`, `TRANSCRIPTION.json` and `independent_review/REVIEW.md`.
- `Zenitar35_AttributionFollowup_20261106/REPORT.md`.
- `Zenitar35_Build_20261106/evidence/input_literal.json`, `source/TRANSCRIPTION.json`, `source/RESULTS.json` and `evidence/LITERAL_DIAGNOSTICS.json`.
- `Zenitar35_Build_20261106/validation2/Zenitar35Literal.data.ts`.
- `Zenitar35_Build_20261106/QUALIFIED_REVIEW_HANDOFF.md` and `CLAIM_SCOPE_CORRECTION.md`.
- `Zenitar35_Build_20261106/independent_review/REVIEW.md`.
- `Zenitar35_Build_20261106/validation3/`, `validation4/`, `validation5/` and `followup/` records named above.
- `Zenitar35_Build_20261106/validation6/STATUS.md`, `GEOMETRY_RESULTS.json`, `BINDING_CHECK.json`, and corrected/attempt-one extraction evidence.
- `Zenitar35_Build_20261106/geometry_review_20261106/REVIEW.md` and `INDEPENDENT_RESULTS.json`.
- `Zenitar35_Integration_500ef599_20261106/numerical/REPLAY_SUMMARY.json`, `matrix/SOURCE43_MATRIX.json`, its hashed source records, `matrix/SOURCE43_MATRIX_INITIAL_CLASSIFICATION.json` and `matrix/SUMMARY_CLASSIFICATION_CORRECTION.json`.
- Within this companion directory: `calculate_element_powers.py`, `verify_companions.py`, `evidence/ISOLATED_ELEMENT_POWERS.json`, `evidence/INPUT_HASHES.json` and `evidence/COMPANION_CHECKS.json`.

Run `python calculate_element_powers.py` and `python verify_companions.py` from this directory to reproduce only the new descriptive calculation and static document/input checks. These scripts use the fixed shared-root input locations and never run the optical engine. The checks are not a substitute for the existing independent reviews or a future application gate.
