# LeicaColorplan90mmf25 — Consolidated Audit Record (Stages 1–4)

## Follow-up diagram and movement review

FIG. 1 rims agree with the revised silhouette. Near focus extends the image gap by 9.788 mm, moving the whole unit objectward relative to the fixed image plane; the endpoint remains reconstructed. All five glass records retain qualified catalog curves.

## Catalog integration — 2026-10-17

This section records the current catalog decisions. Earlier stages below retain the extraction history and may describe superseded rim or glass choices.

- **Optical-rim source:** US 3,076,383 FIG. 1 (local PDF page 1, 600 DPI). Scaled the first-to-last glass vertex span, excluding leaders and mechanical lines. The front rims are 25.0/24.5 mm; the cemented pair 17.1/17.1/14.0 mm; rear meniscus 12.0/13.5 mm; final element 15.2/15.6 mm. This follows the patent silhouette instead of imposing the reported 46 mm production barrel. The inferred stop and source prescription are retained.
- **Glass:** Five of five element records have compatible catalog spectral proxies. The patent prints e-line labels; the existing documented d-line interpretation remains a hypothesis. No production melt is identified.
- **Metadata and V2:** Added the projection-lens category and retained the 135 slide format. Display uses the historical Leitz branding and identifies the five-element version. Unit focus remains a reconstructed image-gap change, not a published finite-conjugate state.


# Stage 4 — Source-first independent audit (2026-09-30)

## S4.1. Job, inputs and reference versions

Job card (unchanged, sha256 `8dc672a9…9e43`): PATENT US3076383; LENS Leica Colorplan 90mm F2.5; EMBODIMENT Example 1;
OUTPUT STEM LeicaColorplan90mmf25. Patent PDF unchanged (sha256 `6d6dcde8…e7a`).

Candidate consumed (Stage 3, READY_FOR_AUDIT; uploaded as `<stem>_<artifact>` and normalized to `<stem>.<artifact>`,
bytes unchanged):

| File | Candidate sha256 |
|---|---|
| data.ts | `f3c8f6eab65b93004f627b2e61ca4c33758aaf2be8d966b0926432b646cafe0d` |
| analysis.md | `34dac0eccdc5b2d8e0f6b16b232f614e3837189cd19fb7f281573b95f5481f98` |
| evidence.json | `dd804aeecf8691bbae039e9f833d1a927e204d9407b868b918f96d69bf339983` |
| verify.py | `4f60f0f64de728c24a761c7c6a16eb0987d6ef8b532221ac9735b694d3c1fd04` |
| results.json | `6548101c1d31f47d531e6384b8a4420e121da221ac6693a15b6094eb893a33a9` |
| audit.md | `aae29c40900a98e757ded13bc4946ac26d5f385bbe4eb7d33c17b9651bfe8b3a` |
| manifest.json | `4053154d66127f21c5e279357614d3d53edf8cddf603203a1954578de244c648` |

Hashes agreed with the candidate manifest. The candidate verifier ran on the candidate bytes: ALL MANDATORY PASS.

Controlling references: project copies of LensPatentChatProtocol, LensPatentDossierContract, LensPatentStage4Audit,
LENS_DATA_SPEC, LENS_ANALYSIS_SPEC, TEMPLATE, defaults.ts and prettierrc.json (hashes in the manifest). The
LensVisualizer repository at `edd3254d294e6a433d72ac4e6437443023c52c26` (cloned 2026-09-30) carries byte-identical
specs, template, defaults and Prettier configuration; its LENS_MOUNT_FORMAT_OPTIONS differs from the project copy only
by added cine/8 mm formats (no effect, as recorded at Stage 1).

## S4.2. Exposure and independence scope

Before the baseline: the job card, the patent pages and the full candidate `.data.ts` were auto-displayed in the chat,
and project memory held generic methodology notes. The candidate analysis, audit, evidence, results, verifier and
manifest were not opened until the baseline was frozen. The review therefore claims procedural source/method
independence only; it does not claim blindness. The exposure note is stored verbatim in
`evidence.independentPass.exposureDisclosure`.

## S4.3. Pass A — independent baseline (frozen before reconciliation)

- Fresh re-extraction from new raster crops: Table 1 (PDF p. 2, 500 dpi), Claim 1 table (PDF p. 3, 400 dpi), FIG. 1
  (PDF p. 1, 600 dpi). All 9 radii, 9 spacings and 5 media pairs agree between Table 1 and Claim 1 except the r8
  decimal mark ("+2,267" vs "+2.267"). "Angle of image 27°" is the full field.
- Fresh code (numpy/scipy y–nu, separate ABCD, exact meridional tracer, brentq conjugate; opticalglass 2.0.2 unseeded
  six-catalog search of 1,087 glasses; PyMuPDF pixel measurement of FIG. 1).
- Results: EFL 0.9977918 (normalized), BFD 0.5778330 vs printed a9 0.5790; at s = 90: EFL 89.80126 mm, BFD 52.00497 mm,
  r1–image 111.045 mm; Petzval 0.0023877 mm⁻¹; front/rear groups +164.60/+86.80 mm; D1 −215.03 mm; L1–L5
  +126.15/+43.92/−29.29/−132.86/+60.54 mm; conditions PC1–PC4 and preferred limits satisfied (h(r6)/h(r1) 0.5497).
- FIG. 1 stop: fraction 0.533 ± 0.035 of a5 (9.27 mm behind r5); real f/2.5 marginal height there 10.745 mm; EP 49.17 mm
  behind r1. Drawing scale is nearly uniform (1,402–1,469 px per normalized unit over four segments).
- Glass: every Table 1 pair matches a d-line catalog coordinate at metric ≤ 0.00084; as e-line pairs the best matches
  are 0.0020–0.0072. Table 2 shows the same pattern. Independent conclusion: d-line values despite the n_e labels.
- Underdetermined: stop axial position, semi-diameters, production melts, close-focus range.
- Frozen fingerprint (sha256 of canonical JSON, `sort_keys`, separators `(',',':')`, UTF-8):
  `33ed1a2b65a56904e63f9edadab2db9726a66cd7ce1235dee51f5e1886cae1e7`. Stored unchanged in
  `evidence.independentPass.independentBaseline`; `S4-BASELINE-FINGERPRINT` rechecks it and `S4-BASELINE-REPLAY`
  reproduces its numbers with the packaged standard-library implementation.

## S4.4. Pass B — reconciliation (raw patent / baseline / data / analysis)

| Item | Raw patent | Independent baseline | Implemented data | Analysis | Disposition |
|---|---|---|---|---|---|
| Prescription | Table 1 = Claim 1 | re-read, identical | ×90 exactly | "uniform scaling by s = 90" | agree (S4-EXTRACTION-AGREE) |
| r8 | "+2,267" / "+2.267" | 2.267 | 204.03 | disclosed | agree (MD-01) |
| EFL | f = 1.00 | 0.99779 | 89.801 mm | 89.80 mm, −0.22% | agree; rounding explanation retained |
| a9 | 0.5790 | BFD 0.57783 | gap 52.004973 (computed BFD) | disclosed | agree (MD-10); raw mismatch stays visible |
| Stop | drawn only | 0.533 ± 0.035 | 9.26 mm (0.532) | disclosed as FIG. 1 estimate | agree within figure uncertainty |
| Stop SD | none | 10.745 at 0.533 | 10.746223 at 0.532 | calibration, disclosed | agree |
| Index line | labelled e | d-line | nd/vd, indexReference omitted (= d) | proposed label correction | agree; strengthened (see C3) |
| Focus | none | unit-focus 1 m gap 61.793 | 61.792966 | modelling endpoint | agree |

Independent calculation on the parsed final `.data.ts` (separate implementation, `S4-IMPL-CROSSCHECK`) reproduced the
author's EFL, entrance pupil (49.135 mm), Seidel ΣS_I (0.042406) and ΣS_II (−0.003378), third-order LSA (−0.530 mm),
exact LSA (−0.112/−0.180/−0.198/−0.157 mm), Petzval sag (0.555 mm), axial colour (−0.162 mm), lateral colour
(0.015 mm), exact tangential/sagittal shells and distortion at 8.1°, 9.546° and 13.5°, the stored BFD gap, the 1 m
unit-focus gap and the calibrated stop SD. Per-surface S_I, S_II and C_L values quoted in the analysis and the per-element
C_L split (crowns +0.188, flints −0.181, L3 86% of flint) were also reproduced.

Adversarial tests: correct example (Table 1, not Table 2); no sign or exponent error; no silent patent change; no
asphere or scaling omission; stop is the only STO; cemented junction r4 carries the downstream elemId 3; element shapes
(positive meniscus, plano-convex, plano-concave, negative meniscus, biconvex) and 5/4 counts agree with the radii;
standalone vs cemented vs group powers are labelled; no telephoto/retrofocus claim (TL/EFL 1.24, BFD/EFL 0.58); no
APO claim; marketed 90 mm / f/2.5 kept separate from design EFL 89.8.

Geometry (`S4-GEOMETRY`): edge thickness at own SDs 4.22–8.63 mm; air clearance at the smaller facing SD 3.22 mm
(r7–r8) and 9.30 mm (r2–r3); stop-plane clearances 6.07 mm (r5 side) and 5.68 mm (r6 side); maximum rim angle 38.6°
(r5) against the repository limit of 64.2°.

Secondary sources re-read: Cavina (all six attributions confirmed); Delta Lenses V1 (5/4, 46 mm barrel, 1958–1967);
Google Patents US 2,975,673 (Mandler and Wagner, Ernst Leitz Canada Ltd., priority Aug. 30, 1958, f/1.4 seven-element
Gauss aimed at the sagittal field zone) and US 2,995,980 (Zimmermann and Knetsch, granted Aug. 15, 1961, 5/3 triplet).
Corpus convention: `maker: "Leica"`, `patentAssignees: ["Ernst Leitz GmbH"]` (14 corpus files) — agrees.

## S4.5. Correction and discrepancy register (Stage 4)

| ID | File / location | Old | New | Source and independent evidence | Downstream |
|---|---|---|---|---|---|
| C1 (MD-13) | data.ts L1, L2 `glass`; analysis §L1, §D1/L2 and glass table | "SSK5-type dense barium crown" | "SSK5-type extra-dense barium crown" | SSK is the extra-dense barium-crown class; HOYA equivalent BACED5 = barium crown extra dense (S-CAT-HOYA; reviewer search) | Prettier, tsc, validate, glass resolution rerun (unchanged names); S3-A-ELEMENTS |
| C1 (MD-13) | data.ts L5 `glass`; analysis §L5 and glass table | "SK18-type dense crown" | "SK18-type dense barium crown" | HOYA equivalent BACD18 = barium crown dense | same |
| C2 | analysis, field table row | "9.5°" | "9.55°" plus note "0.707 of the 13.5° half-field angle" | Values are those at 9.546° (author results key `9.546`); at 9.500° the reviewer obtains −0.115/−0.184 mm | claim C61 updated, C61b added |
| C3 | analysis Glass Identification; data.ts header | "rests on circumstantial catalogue evidence"; header "match no catalog glass as e-line pairs" | adds contemporaneous Leitz index conventions (US 2,975,673 e-line SF4 1.76167/27.34; US 2,995,980 D-line SF4 1.75520/27.5); header now states the 0.0020–0.0067 e-line miss | Header overstated: CDGM H-ZBaF3 sits 0.0020 from L1 as an e-line pair. Leitz values from Google Patents text; Schott SF4 stored coefficients give nd 1.75520, ne 1.76167 (S4-LEITZ-INDEX-CONVENTION) | MD-03 annotated; unmapped-number allow-list extended with the three patent literals |
| C4 | analysis Design Heritage; Sources | "a separate triplet-derived design by Otto Zimmermann and Georg Knetsch (US 2,995,980)" | "a separate five-element triplet derivative that secondary sources associate with … US 2,995,980"; Leica Wiki citation added; Google Patents links and index-line notes added to both Leitz patent entries | The patent-to-product link rests on secondary sources, not on the patent | none numerical |

No numerical model value changed. Rejected change: adding `projection` to override the LensVisualizer half-field
estimate (20.8°) — the spec reserves it for non-rectilinear or unusual ultrawide lenses (OI-10).

Raw discrepancies retained: DR-02 (printed e-line label vs d-line coordinates), EFL −0.22% from printed f = 1.00, a9
0.105 mm vs computed BFD. Their supported resolutions are unchanged.

## S4.6. Quantitative-claim map additions

| Analysis claim | Result | Governing revision |
|---|---|---|
| "is 0.707 of the 13.5° half-field" | C61b-F95FRAC (9.546/13.5) | data `5971b37f…` |
| "| 9.55° | −0.117 mm | −0.186 mm | −0.08% |" | C61-F95, fieldExact 9.546 | same |
| "1.76167 / 27.34", "1.75520 / 27.5" | S-US2975673, S-US2995980; S4-LEITZ-INDEX-CONVENTION | evidence r3 |
| "misses by 0.0020–0.0067" (data header) | glassEvidence.searchSummary; baseline glass table | evidence r3 |

All pre-existing claim IDs C01–C63 pass against the corrected analysis (S3-A-CLAIMS), and no unmapped decimal remains
(S3-A-UNMAPPED).

## S4.7. Manual review of interpretive prose and citations

Third-person technical voice, νd notation, no promotional language, section order per LENS_ANALYSIS_SPEC, no Aspherical
Surfaces section. Interpretive statements are labelled as the model's interpretation ("offered as interpretation of the
example, not as the inventors' stated rationale"). Column/line citations to the patent (col. 1 ll. 10–20, 21–31, 32–35,
36–58, 49–53; col. 2 ll. 14–15; col. 3 ll. 24–27) were checked against the rasters. Cavina, Delta Lenses and patent
citations support the sentences that cite them. The L4 "short flint" remark correctly records Cavina's description of
the fourth element and declines it on coordinate grounds.

## S4.8. Checks run in Stage 4

CHAT_PREFLIGHT: consolidated `verify.py` (stage 4 branch), 80 mandatory checks, 79 PASS, 1 NOT_APPLICABLE (S2-CONIC).
New: S4-BASELINE-FINGERPRINT, S4-BASELINE-REPLAY, S4-EXTRACTION-AGREE, S4-CONDITIONS, S4-IMPL-CROSSCHECK,
S4-GEOMETRY, S4-LEITZ-INDEX-CONVENTION. Mutation tests: a changed radius (14 checks fail), a tampered baseline
(fingerprint and replay fail) and a changed analysis number (claim and unmapped checks fail) each exit nonzero.

LENSVISUALIZER (repository `edd3254`, Node v22.22.2 while the repo declares ≥24.15, `npm ci --ignore-scripts`, file
placed root-first in `src/lens-data/`, no Git writes; final bytes `5971b37f…`):

| Check | Result |
|---|---|
| Prettier 3.8.1 with project config | `--write` leaves the file unchanged; `--check` passes |
| tsc 5.9.3 `satisfies LensDataInput` | exit 0; mutant `elemId: "3"` fails with TS2322 |
| validateLensData (defaults merged) | 0 errors; mutant r5 sd 19.0 rejected (rim slope 74.6° > 64.2°) |
| buildLens | EFL 89.801260, FOPEN 2.5, EP SD 17.960252, STO SD 10.746223, Petzval 0.0023877; halfField 20.805° (OI-10) |
| Render diagnostics | max trim 0.000 mm at focusT 0, 0.5, 1 (5 elements, both faces) |
| resolveCompatibleGlass | N-SSK5, N-SSK5, SF5, SF4, K-SK18 |

Not run (integration): catalog registration, organizer move, generate:metadata, full vitest corpus policies, build.

## S4.9. Gate disposition

The fresh source-first audit found no transcription, sign, scaling, structural, geometry or first-order error. Four
wording and citation corrections were made (none changes a model number) and every affected check was rerun on the
final bytes. All mandatory chat checks pass, and the applicable targeted LensVisualizer checks pass. Correction
validation was performed by the same reviewer who made the corrections; the validation is procedural, not independent
of that reviewer.

Gate: **READY_FOR_BATCH**. integrationStatus: **INTEGRATION_PENDING**.

## S4.10. Pending integration

Catalog registration and organizer placement; `generate:metadata`; full corpus policy tests and build on Node ≥ 24.15;
review of OI-07 (no slide-projector mount id) and OI-10 (runtime half-field estimate); optional retrieval of DE1112649B
(OI-08) and US 2,818,776 (OI-09).


# Stage 3 record (preserved)

Current stage: 3 (analysis authoring). Package revision: stage3-r1; parent: stage2-r1 (manifest SHA-256
`21493e64eca1473683901a050e754657cdc2124b7c6d37dfdc91473adde0f105`). This is a construction-side record. It is
**not** the Stage 4 independent audit, and nothing here claims independence.

## S3.1. Entry gate

| Item | Result |
|---|---|
| Incoming files | 8 Stage 2 files (uploaded as `<stem>_<artifact>`; normalized to `<stem>.<artifact>`, bytes unchanged) |
| Checkpoint binding | data `e6a82e06…`, evidence `289f565c…`, verifier `b6d3f35d…`, results `c8a7f0f9…` all equal the Stage 2 checkpoint |
| Originals | patent `6d6dcde8…` and job card `8dc672a9…` unchanged; four job-card fields unchanged |
| Stage 2 replay | Stage 2 verifier rerun in a clean directory: exit 0, 50 mandatory checks, every stable section identical to the packaged results |
| Project references | all ten hashed Stage 2 references unchanged; Stage 3 prompt `LensPatentStage3Analysis.txt` `ea8663e8…` read |

## S3.2. Upstream correction FC-01 — data file formatting (formatting only; values unchanged)

**Finding.** Prettier 3.8.1 with `/mnt/project/prettierrc.json`, run directly on the checkpoint data file, reports
three unformatted lines. These are the `glass:` strings of L1, L2 and L5, whose length requires a line break after
`glass:`. This contradicts the Stage 2 record (§6 below) that `prettier --check` passed.

**Cause.** At repository `7a345ea`, `.prettierignore` lists `src/lens-data/` and `*.md`, so `prettier --check` on a
file placed in that directory reports no issue for an ignored file. A related trap was observed in Stage 3: with
`--ignore-path /dev/null` the command also left the file untouched. The corpus is mixed for the same reason: some
lens files carry the wrapped `glass:` form, and many do not.

**Treatment.** Following the standing instruction to format the data file with the project configuration, Stage 3
ran `prettier --config /mnt/project/prettierrc.json --write` on a copy outside any ignored tree. It then ran
`--check` on the result, which now passes.

| | SHA-256 | Bytes changed |
|---|---|---|
| Old data (`READY_FOR_ANALYSIS` binding) | `e6a82e0609b67e86d39bb827e2c901ce678098851820256755a20067253be1cb` | — |
| New data | `f3c8f6eab65b93004f627b2e61ca4c33758aaf2be8d966b0926432b646cafe0d` | 3 lines wrapped |

**Equality and reruns.**
- The strict literal parser returns identical objects for the old and new files (`parsed equal: True`).
- The complete Stage 2 check set was rerun on the new bytes, and every check passes.
- The targeted LensVisualizer checks were **re-executed** on the new bytes at repository `7a345ea` (Node v22.22.2;
  `npm ci --ignore-scripts`; file placed at the root-first location `src/lens-data/`; the local clone was restored
  to a clean tree afterwards; no Git writes):

| Check | Result on `f3c8f6ea…` |
|---|---|
| LV-PRETTIER | `--check` passes, config from `/mnt/project/prettierrc.json`, run outside the ignored tree |
| LV-TSC-LENSDATAINPUT | `tsc` 5.9.3, single-file tsconfig extending the repository config: exit 0; `elemId: "4"` mutant → TS2322 |
| LV-VALIDATE | `validateLensData` with defaults merged: 0 errors |
| LV-BUILDLENS | EFL 89.80125959, FOPEN 2.5, halfField 20.805°, Petzval 0.0023877381 — identical to Stage 2 |
| LV-RENDER | `computeElementRenderDiagnostics2` on `doLayout(0,0)`: max `trimAmount` 0 on all 10 element faces |
| LV-GLASS-RESOLVE | `resolveCompatibleGlass(…, "d")`: N-SSK5, N-SSK5, SF5, SF4, K-SK18 |

**Consequence.** The Stage 2 `READY_FOR_ANALYSIS` approval does not carry over to the new bytes. The Stage 3 gate
below binds to them after the reruns. The Stage 2 LV-PRETTIER record is superseded; it is preserved unedited in the
Stage 2 section below.

## S3.3. Verifier extension (Stage 3 branch)

`verify.py` now derives the stage from the artifacts present and adds 23 `stage3` checks. All of them recompute from
the parsed data file. They fall into two groups.

**Computation checks (13):**
- S3-EXACT-2IMPL: the Stage 1 exact tracer and the new direction-cosine tracer agree to 1e-9 on the axial marginal ray.
- S3-GROUPS: group focal lengths from the data equal the source model × s.
- S3-SEIDEL-SIV-PETZVAL: Σ S_IV = H² Σ φ/(nn′).
- S3-SEIDEL-SI-EXACT: third-order LSA agrees with the exact p = 0.02 limit (ratio 1 ± 0.01).
- S3-SEIDEL-FIELD-CODDINGTON: third-order field curves agree with Coddington traces at 0.5° (±2%).
- S3-SEIDEL-COMA-EXACT: third-order coma agrees with exact rim rays (±5%).
- S3-SEIDEL-DIST-EXACT: third-order distortion agrees with the exact chief ray (±5%).
- S3-STOP-SENSITIVITY: the signs of S_II, S_III, S_V and C_T are unchanged across the FIG. 1 stop range.
- S3-LSA-FULL: exact full-aperture LSA equals the Stage 1 value.
- S3-CHROM-AXIAL and S3-CHROM-LATERAL: Seidel primary colour agrees with finite-difference paraxial traces.
- S3-CHROM-ELEMENT-SUM: the per-element C_L split closes on the total.
- S3-CONDITIONS-DATA: PC1–PC4 hold under both normalizations.

**Analysis checks (10):**
- S3-A-META, S3-A-SECTIONS, S3-A-ELEMENTS, S3-A-STRUCTURE.
- S3-A-CLAIMS: 81 mapped literals.
- S3-A-UNMAPPED: no decimal number outside the claim table or the enumerated source literals.
- S3-A-DISCLOSURES: 15 required disclosures.
- S3-A-STYLE and S3-A-LENGTH.
- S3-A-DATA-BINDING: the analysis is checked against the parsed final data revision whose hash is recorded.

Mandatory total at Stage 3: 73 checks, 72 PASS plus 1 NOT_APPLICABLE (S2-CONIC).

**Sign conventions established by the checks.** Longitudinal aberration is dz = −S/(2n′u′²). Transverse aberration is
ε = +(∂W/∂ρ)/(n′u′), with u′ = −0.2 the paraxial image-space marginal angle. With these conventions:
- a positive S_I or C_L is undercorrecting;
- lateral colour is +C_T/u′;
- distortion is +S_V/(2u′) relative to the paraxial image height.

**Development defects found and fixed before delivery** (none reached the package):
- The first lateral-colour conversion used −C_T/u′. The finite-difference check failed, and the sign was corrected to
  the convention already validated for coma and distortion.
- The S3-A-META check compared `str(1963.0)` with "1963". The parser returns floats; the check now uses `int()`.
- The S3-A-ELEMENTS lookup matched L1's line for L2, because both share an identical glass prefix. The lookup is now
  anchored to each element's own heading.
- The S3-A-STYLE check matched "our" inside "four". It now uses word-boundary regexes.

**Mutation tests** (outside the package; each produced exit 1):

| Mutation | Checks that failed |
|---|---|
| r6 S_I −0.441 → −0.444 | S3-A-CLAIMS, S3-A-UNMAPPED |
| L1 fl +126.2 → +126.3 | S3-A-ELEMENTS, S3-A-CLAIMS, S3-A-UNMAPPED |
| stop sd 10.746 → 10.75 | S3-A-CLAIMS, S3-A-UNMAPPED |
| correlation disclosure removed | S3-A-DISCLOSURES |
| "legendary" inserted | S3-A-STYLE |
| stray "0.123 mm" inside a mapped literal | S3-A-CLAIMS |
| "## Focus Mechanism" renamed | S3-A-SECTIONS |

## S3.4. Principal computed results used by the analysis (`results.analysisSupport`)

Model: parsed data, stored indices, INF state, paraxial infinity image plane, modelled stop.

**Groups.** Front (L1 + D1) +164.6 mm; D1 −215.0 mm; rear (L4 + L5) +86.8 mm. The rear group carries 1.0345 × the
system power. The strongest surfaces are r5 (−0.0341 mm⁻¹) and r6 (−0.0306 mm⁻¹).

**Petzval.** +0.04293 / −0.04054 mm⁻¹ (positive / negative terms). The net is 5.56% of the positive terms; r5 and r6
supply 93.4% of the negative terms. The Petzval radius is −418.8 mm.

**S_I.** +0.7007 / −0.6583 (positive / negative); r5 and r6 supply 98.3% of the negative total. Third-order LSA is
−0.530 mm.

**Exact LSA (d, monochromatic).**
- By pupil fraction: −0.112 mm at 0.5; −0.180 mm at 0.7071; −0.197 mm at 0.866; −0.157 mm at 1.0.
- Extremum: −0.198 mm at 0.839.

**Exact field and distortion (Coddington along real chief rays).**

| Half-field | Tangential | Sagittal | Distortion |
|---|---|---|---|
| 8.1° | −0.081 mm | −0.139 mm | −0.047% |
| 9.546° | −0.117 mm | −0.186 mm | −0.079% |
| 13.5° | −0.274 mm | −0.314 mm | −0.262% |

The Petzval sag at 13.5° is −0.555 mm.

**Coma.** r5 −0.090 and r6 +0.232; the total is −0.0034 (−0.0014 to −0.0055 across the stop range).

**Primary colour (Abbe-derived).**
- Axial colour, BFD(F) − BFD(C): −0.1615 mm.
- Lateral colour at 13.5°: +0.015 mm (0.069% of the image height).
- C_L by glass: crowns +0.188, flints −0.181, net +0.0065.
- L3 supplies 85.6% of the flint contribution.

**Glass residuals** (data equivalents, from stored catalogue coefficients): |Δnd| ≤ 0.00046 and |Δνd| ≤ 0.083 for
N-SSK5, SF5, SF4 and K-SK18. Read as e-line pairs, the nearest-glass index misses are 0.0020–0.0067.

## S3.5. Source work in Stage 3

- **Cavina (S-WEB-CAVINA)** was re-read in full. It confirms the 1959 computation by Mandler and Wagner at Midland,
  the 1960 release for the Prado 250/500, the 5/4 construction, the "short flint" description of element 4, the
  statement that the 1964 Elmarit-R 90/2.8 is conceptually identical, the companion 50 mm f/2.8 of the original
  project, the CF version of 1982, and the partial recomputation for the Super-Colorplan.
- **Delta Lenses V1 / V2a** were re-read via search extracts: V1 is 5/4 with a 46 mm barrel, dated 1958–1967; V2a
  (1967) is 6/4.
- **New context sources:**
  - S-PAT-US2975673: Mandler/Wagner, Leitz Canada, f/1.4 seven-element Gauss, priority Aug. 30, 1958.
  - S-PAT-US2995980: Zimmermann/Knetsch triplet objective, granted Aug. 15, 1961. The corpus file
    `leica/LeicaElmarit90mmf28` is that design, not the Elmarit-R.
- **US 2,818,776 (Hayes et al.)**, the sole cited reference, was not located (OI-09). The analysis says so.
- **Manufacturer precedence.** No Leitz primary document was found. No hard specification conflict between a
  manufacturer and a third party arises: the only manufacturer-originated values are the engraved 90 mm and
  1:2.5, and the patent and model agree with them.

## S3.6. Quantitative-claim map (analysis literal → executed result → governing revision)

Every row is executed by S3-A-CLAIMS: the literal must occur in the analysis and equal the rounded computed value.
Element `fl` strings and glass labels are additionally checked by S3-A-ELEMENTS. Metadata is checked by S3-A-META.

| Claim | Section | Analysis literal | Result pointer | Basis |
|---|---|---|---|---|
| C01-EFL | Patent Reference | `EFL 89.80 mm` | `implementedModel.efl_mm` | final data f3c8f6ea |
| C02-DIAG | Patent Reference | `diagonal of 43.12 mm` | `sourceModel.field` | Table 1 source model |
| C03-135 | Patent Reference | `43.27 mm for the 24` | `sourceModel.field` | Table 1 source model |
| C04-FRONT | Optical Architecture | `f = +164.6 mm` | `analysisSupport.groupFocalLengths_mm` | final data f3c8f6ea |
| C05-REAR | Optical Architecture | `f = +86.8 mm` | `analysisSupport.groupFocalLengths_mm` | final data f3c8f6ea |
| C06-REARSHARE | Optical Architecture | `1.03 times the system power` | `analysisSupport.rearGroupPowerOverSystem` | final data f3c8f6ea |
| C07-D1 | Optical Architecture | `net negative (f = −215.0 mm)` | `analysisSupport.groupFocalLengths_mm` | final data f3c8f6ea |
| C08-R5POW | Optical Architecture | `r5 has a surface power of −0.0341` | `analysisSupport.surfacePowers_perMm` | final data f3c8f6ea |
| C09-R6POW | Optical Architecture | `r6 −0.0306 mm` | `analysisSupport.surfacePowers_perMm` | final data f3c8f6ea |
| C10-R3POW | Optical Architecture | `+0.0228 mm⁻¹ for r3` | `analysisSupport.surfacePowers_perMm` | final data f3c8f6ea |
| C11-BFD | Optical Architecture | `back focal distance of 52.00 mm` | `implementedModel.bfd_mm` | final data f3c8f6ea |
| C12-BFDRATIO | Optical Architecture | `(BFD/EFL = 0.579)` | `implementedModel.bfdOverEfl` | final data f3c8f6ea |
| C13-TTL | Optical Architecture | `image length is 111.04 mm` | `implementedModel.totalTrackInf_mm` | final data f3c8f6ea |
| C14-H | Optical Architecture | `plane lies 34.53 mm` | `analysisSupport.principalPlanes_mm` | final data f3c8f6ea |
| C15-HP | Optical Architecture | `rear principal plane 21.24 mm` | `analysisSupport.principalPlanes_mm` | final data f3c8f6ea |
| C16-HCROSS | Optical Architecture | `13.28 mm ahead` | `analysisSupport.principalPlanes_mm` | final data f3c8f6ea |
| C17-STOPZ | Optical Architecture | `which is 36.71 mm behind r1` | `analysisSupport.principalPlanes_mm` | final data f3c8f6ea |
| C18-L1FL | L1 | `f = +126.2 mm` | `implementedModel.elementFocalLengths_mm` | final data f3c8f6ea |
| C19-L2FL | D1 | `f = +43.9 mm` | `implementedModel.elementFocalLengths_mm` | final data f3c8f6ea |
| C20-L3FL | D1 | `f = −29.3 mm` | `implementedModel.elementFocalLengths_mm` | final data f3c8f6ea |
| C21-L4FL | L4 | `f = −132.9 mm` | `implementedModel.elementFocalLengths_mm` | final data f3c8f6ea |
| C22-L5FL | L5 | `f = +60.5 mm` | `implementedModel.elementFocalLengths_mm` | final data f3c8f6ea |
| C23-L1SHARE | L1 | `about a quarter of the positive power` | `analysisSupport.L1_shareOfFrontPositivePower` | final data f3c8f6ea |
| C24-SI-R1 | L1 | `(S_I = +0.155)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C25-SI-R3 | D1 | `(S_I = +0.123)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C26-SI-R4 | D1 | `(S_I = −0.011)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C27-CL-R4 | D1 | `(C_L = −0.031)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C28-SI-R5 | D1 | `(S_I = −0.206)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C29-SII-R5 | D1 | `coma (S_II = −0.090)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C30-L3SHARE | D1 | `86% of the flint contribution` | `analysisSupport.seidel` | final data f3c8f6ea |
| C31-CL-L3L2 | D1 | `(C_L = −0.155 against +0.105 from L2)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C32-SI-R6 | L4 | `(S_I = −0.441)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C33-SI-R7 | L4 | `(S_I = +0.094)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C34-SII-R6 | L4 | `coma (S_II = +0.232)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C35-CL-L4 | L4 | `(C_L = −0.026)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C36-PC4-R6 | L4 | `is 0.550 of its height` | `analysisSupport.seidel` | final data f3c8f6ea |
| C37-SI-R9 | L5 | `(S_I = +0.327)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C38-GL-DN | Glass Identification | `within 0.0005 and with νd to within 0.1` | `analysisSupport.equivalentResiduals` | final data f3c8f6ea |
| C39-GL-EMISS | Glass Identification | `misses by 0.0020–0.0067 in index` | `analysisSupport.eLineNearestIndexMiss` | final data f3c8f6ea |
| C40-GL-SIB | Glass Identification | `four lie within 0.0003` | `analysisSupport.siblingPattern` | final data f3c8f6ea |
| C41-CROWN | Glass Identification | `contribute C_L = +0.188 and the two flints −0.181` | `analysisSupport.chromaticPrimary` | final data f3c8f6ea |
| C42-CLNET | Glass Identification | `only 3.4% of the crown` | `analysisSupport.chromaticPrimary` | final data f3c8f6ea |
| C43-AXCOL | Glass Identification | `axial colour is −0.16 mm` | `analysisSupport.chromaticPrimary` | final data f3c8f6ea |
| C44-LATCOL | Glass Identification | `13.5° is 0.015 mm, or 0.07%` | `analysisSupport.chromaticPrimary` | final data f3c8f6ea |
| C45-GAPINF | Focus Mechanism | `\| ∞ \| 52.00 mm \|` | `implementedModel.bfd_mm` | final data f3c8f6ea |
| C46-GAPCLOSE | Focus Mechanism | `\| 1.0 m \| 61.79 mm \| 9.79 mm \| −0.109 \|` | `implementedModel.closeFocus` | final data f3c8f6ea |
| C47-SIPOS | Aberration Correction Strategy | `(S_I total +0.701` | `analysisSupport.seidel` | final data f3c8f6ea |
| C48-R5R6SI | Aberration Correction Strategy | `supply 98% of the overcorrecting` | `analysisSupport.seidel` | final data f3c8f6ea |
| C49-SINET | Aberration Correction Strategy | `The net third-order sum is 6%` | `analysisSupport.seidel` | final data f3c8f6ea |
| C50-LSA3 | Aberration Correction Strategy | `aberration of −0.53 mm` | `analysisSupport.seidel` | final data f3c8f6ea |
| C51-LSAMARG | Aberration Correction Strategy | `marginal ray to −0.157 mm` | `analysisSupport.lsaExact_mm` | final data f3c8f6ea |
| C52-LSAEXT | Aberration Correction Strategy | `extreme of −0.198 mm at 0.84` | `analysisSupport.lsaExact_mm` | final data f3c8f6ea |
| C53-LSATAB | Aberration Correction Strategy | `\| Exact LSA (mm) \| −0.112 \| −0.180 \| −0.198 \| −0.157 \|` | `analysisSupport.lsaExact_mm` | final data f3c8f6ea |
| C54-ZONE | Aberration Correction Strategy | `roughly 0.04 mm relative` | `analysisSupport.lsaExact_mm` | final data f3c8f6ea |
| C55-PTZSUM | Aberration Correction Strategy | `The Petzval sum is 0.00239 mm⁻¹` | `analysisSupport.petzval` | final data f3c8f6ea |
| C56-PTZR | Aberration Correction Strategy | `radius of −419 mm (about −4.7 f)` | `analysisSupport.petzval` | final data f3c8f6ea |
| C57-PTZCANCEL | Aberration Correction Strategy | `cancel 94% of the positive` | `analysisSupport.petzval` | final data f3c8f6ea |
| C58-PTZR5R6 | Aberration Correction Strategy | `alone provide 93% of the negative` | `analysisSupport.petzval` | final data f3c8f6ea |
| C59-PTZSAG | Aberration Correction Strategy | `Petzval surface lies 0.555 mm` | `analysisSupport.petzval` | final data f3c8f6ea |
| C60-F81 | Aberration Correction Strategy | `\| 8.1° \| −0.081 mm \| −0.139 mm \| −0.05% \|` | `analysisSupport.fieldExact` | final data f3c8f6ea |
| C61-F95 | Aberration Correction Strategy | `\| 9.5° \| −0.117 mm \| −0.186 mm \| −0.08% \|` | `analysisSupport.fieldExact` | final data f3c8f6ea |
| C62-F135 | Aberration Correction Strategy | `\| 13.5° \| −0.274 mm \| −0.314 mm \| −0.26% \|` | `analysisSupport.fieldExact` | final data f3c8f6ea |
| C63-COMA | Aberration Correction Strategy | `(−0.090 and +0.232), and the system total (−0.0034)` | `analysisSupport.seidel` | final data f3c8f6ea |
| C64-COMARANGE | Aberration Correction Strategy | `ranges from −0.0014 to −0.0055` | `analysisSupport.stopSensitivity` | final data f3c8f6ea |
| C65-DIST | Aberration Correction Strategy | `reaching −0.26% at` | `analysisSupport.fieldExact` | final data f3c8f6ea |
| C66-PC1 | Conditional Expressions | `\| 1.128; 0.080 \|` | `sourceModel.conditions` | Table 1 source model |
| C67-PC2 | Conditional Expressions | `\| 0.7289; 0.0867 \|` | `sourceModel.conditions` | Table 1 source model |
| C68-PC3 | Conditional Expressions | `\| 0.4929; 0.0549 \|` | `sourceModel.conditions` | Table 1 source model |
| C69-PC4TAB | Conditional Expressions | `\| 0.5–0.6 \| 0.550 (paraxial) \|` | `sourceModel.conditions` | Table 1 source model |
| C70-PC4RANGE | Conditional Expressions | `(0.550–0.593)` | `sourceModel.conditions` | Table 1 source model |
| C71-PC4R6EX | Conditional Expressions | `real f/2.5 marginal ray (0.561)` | `sourceModel.conditions` | Table 1 source model |
| C72-PC4EX | Conditional Expressions | `are 0.615, 0.613 and 0.606` | `sourceModel.conditions` | Table 1 source model |
| C73-NORMDIFF | Conditional Expressions | `by less than 0.003` | `analysisSupport.conditionsFromData` | final data f3c8f6ea |
| C74-EFLNORM | Verification Summary | `89.80 mm (0.99779 normalised)` | `sourceModel.firstOrder + implementedModel` | Table 1 source model |
| C75-EFLPCT | Verification Summary | `\| −0.22%; within the ±0.0078` | `sourceModel.roundingSensitivity` | Table 1 source model |
| C76-A9 | Verification Summary | `\| 0.5790 (52.11 mm) \| 52.00 mm paraxial BFD (0.5791 of EFL)` | `sourceModel.firstOrder + implementedModel` | Table 1 source model |
| C77-A9DIFF | Verification Summary | `the 0.105 mm difference` | `implementedModel.bfd_mm vs a9 x s` | final data f3c8f6ea |
| C78-EPD | Verification Summary | `diameter (35.92 mm)` | `implementedModel.entrancePupilDiameter_mm` | final data f3c8f6ea |
| C79-STOPSD | Verification Summary | `Its semi-diameter (10.746 mm)` | `implementedModel.stopSdReal_mm` | final data f3c8f6ea |
| C80-EPZ | Verification Summary | `pupil lies 49.13 mm behind r1` | `implementedModel.entrancePupilFromR1_mm` | final data f3c8f6ea |
| C81-STOP926 | Verification Summary | `placed 9.26 mm behind r5` | `evidence MD-05` | evidence ledger |

Numbers in the analysis that are source or modelling literals rather than computed results are enumerated in
S3-A-UNMAPPED. They are:
- patent prescription and condition values;
- the 20.4 mm SD bound, the 9.26 mm stop offset and the 8.1°/0.75 SD rule (evidence MD-05 and MD-07);
- the sample fields and zones;
- the f/1.4 of US 2,975,673;
- the opticalglass package version.

## S3.7. Manual review of interpretive prose and citations

Each interpretive statement was checked against computed results; text matching alone does not validate it.

**Corrections made before delivery:**
- "L5 is the strongest positive singlet" was false (L2 +43.9 mm is stronger). It was replaced with "the stronger of
  the two air-spaced positive lenses".
- "Radii nearly mirror each other" overstated the symmetry. It now reads that the conditions bound corresponding
  radii within 0.1 f.
- "The weaker of the two positive lenses" was ambiguous. It now names the patent's positive lenses, L1 and L5.
- The Example 2 glass statement was overstated: the SF10-type row misses by 0.0034. It now states the verified
  pattern (all five rows closer as d-line; four within 0.0003).
- "Lead-containing classic" glasses was an unsupported chemistry claim, changed to "classic (pre-N)".
- "Reduces the double-Gauss to five elements" wrongly implied the patent claims the five-element form, which the
  patent calls known. Reworded.
- "Every value by two paraxial methods" overstated the method. It now distinguishes the paraxial and exact methods.
- The principal-plane sentence was imprecise. It now gives the crossed planes (13.28 mm) and the stop position.

**Framing checks:**
- Every Seidel-based role statement carries the stop-dependence and "not the patent's reasoning" framing.
- No aberration role is inferred from glass class or power sign alone.
- Standalone, cemented-net and in-situ quantities are labelled separately.

**Deliberate exclusions:**
- Chromatic statements are limited to Abbe-derived first order. There is no APO or ΔPgF claim.
- The zonal-SA remark does not compare against the prior art, because no prior-art prescription is available.
- Cavina's "short flint" label for L4 is reported and not adopted (DR-07).
- The 1958 production date is shown as a contradiction (DR-05/DR-11).
- The Elmarit-R statements are attributed to Cavina and labelled unverified.

**Citations.** Patent citations use column and line references from the rendered grant pages. The Claim 1 e-line
statement is cited as col. 3, ll. 24–27, a range that brackets the phrase. Every web source is given with its URL.
The analysis contains no chat-only citation tokens.

## S3.8. Discrepancy register (Stage 3 additions)

| ID | Item | Treatment | Status |
|---|---|---|---|
| DR-12 | Stage 2 "Prettier --check passes" versus the unformatted checkpoint bytes | FC-01; the check was rerun and passes on the new bytes | resolved; correction recorded |
| DR-13 | The corpus `LeicaElmarit90mmf28` (1959 triplet) could be confused with Cavina's Elmarit-R 90/2.8 (1964) | Disambiguated in the analysis's heritage section | resolved (prose) |

Items carried forward and still visible: DR-02 (index label), DR-05/DR-11 (1958 date), DR-06 (later 6/4 versions),
DR-07 (short flint), DR-09 (a9 difference), and CMP-PC4-EXACT.

## S3.9. Gate disposition

**Data changed during Stage 3:** yes, formatting only (FC-01). Parsed values are identical, and every Stage 2 chat
and LensVisualizer check was rerun on the new bytes. **Evidence changed:** yes, additively. It gained two
context-source records, re-check notes on two web sources, and open issue OI-09; no raw-prescription or
modelling-decision content changed.

All 73 mandatory chat checks for Stage 3 pass (72 PASS, 1 NOT_APPLICABLE). The analysis agrees with the verified data
revision `f3c8f6ea…` and with the results produced from it. There is no unresolved substantive blocker.

**Gate: READY_FOR_AUDIT**, bound to the data, evidence, verifier, results and analysis hashes in the manifest.
`integrationStatus` remains `INTEGRATION_PENDING`. LV-CORPUS-POLICY, catalog registration, organizer placement,
metadata generation and the full build remain integration tasks.

Stage 4 should re-extract Table 1, Claim 1 and the condition text from the rasters before reading this record.

---

# Stage 2 record (preserved)

Current stage: 2 (data construction). Package revision: stage2-r1; parent: stage1-r1. This is a construction-side
record. It is **not** the Stage 4 independent audit, and nothing here claims independence.

## 1. Stage 2 entry gate

| Item | Result |
|---|---|
| Incoming files | 7 Stage 1 files; SHA-256 of every file equals the Stage 1 manifest |
| Legacy names | uploads used `<stem>_<artifact>`; normalized to `<stem>.<artifact>`, bytes unchanged (MD-12) |
| Job card | four fields unchanged |
| Stage 1 replay | Stage 1 verifier rerun from a clean directory: exit 0; stable results identical to packaged `results.json` |
| Fresh source spot-check | Table 1 (p.2) and Claim 1 (p.3) re-rendered; every r, a, n, ν agrees with the evidence transcription |

Reference revisions: project copies of `LENS_DATA_SPEC.md`, `LENS_ANALYSIS_SPEC.md`, the template, `defaults.ts` and
`prettierrc.json` are byte-identical to the LensVisualizer repository at `7a345ea` (2026-09-29).
`LENS_MOUNT_FORMAT_OPTIONS.md` differs: the repository adds four cinema formats only. There is no effect on this lens
(`135-full-frame`, no mount id).

## 2. Stage 2 construction decisions (ledger: `evidence.modelingDecisions`)

| ID | Decision |
|---|---|
| MD-03 | **Index reference `d`** (values unchanged). See §3 and DR-02. |
| MD-04 | Uniform scale s = 90 confirmed; EFL 89.801260 mm. |
| MD-05 | STO 9.26 mm after r5 (FIG. 1); STO sd 10.746223 mm = real f/2.5 marginal height (calibration). |
| MD-07 | Modeled SDs: 20.4 / 19.0 / 17.1 / 15.2 / 12.3 / STO / 11.0 / 12.0 / 12.1 / 12.6 mm (r1…r9); L1 capped by the 46 mm original barrel. |
| MD-08 | Unit focus on the image gap only; `closeFocusM` 1.0 m object-to-image modeling endpoint; gap 52.004973 → 61.792966 mm. |
| MD-09 | key `leica-colorplan-90mm-f25`; maker `Leica`; name `LEICA COLORPLAN 90mm f/2.5`; assignee `Ernst Leitz GmbH` (corpus canonical); `lensMounts` omitted. |
| MD-10 | Image gap = parsed model's paraxial BFD 52.004973 mm (printed a9 × 90 = 52.11 mm kept as a visible comparison). |
| MD-11 | Fixed aperture: `nominalFno` 2.5, `fstopSeries` [2.5], `maxFstop` 2.5. |

No rear plates, filters, dummy planes or synthetic cement exist. The stop is the only inserted plane; the a5 split
preserves 17.406 mm exactly (S2-STOP-SPLIT). The `.data.ts` contains no `projection`, `opticalPath`,
`perspectiveControl`, `aberrationControl` or `finiteConjugates`: nothing in the source or model requires them.

## 3. Index-reference decision (MD-03 / DR-02)

The patent asserts e-line data three times: the column headers n_e / ν_e, the definition text, and Claim 1 ("in
reference to the e-line"). The last is stronger than Stage 1 recorded.

Against this, eight of the nine distinct coordinates in Tables 1–2 equal classic Schott **d-line** catalog pairs to
the printed precision. Read as e-line pairs, none matches any of the six catalogs within 0.001 (GL-D-HYPOTHESIS).

| Printed | Classic Schott d-line type |
|---|---|
| 1.658 / 50.8 | SSK5 |
| 1.673 / 32.2 | SF5 |
| 1.755 / 27.5 | SF4 |
| 1.639 / 55.5 | SK18 |
| 1.744 / 44.9 | LaF2 |
| 1.717 / 47.9 | LaF3 |
| 1.713 / 53.9 | LaK8 |
| 1.728 / 28.7 | SF10 |

The printed values are therefore stored unchanged as nd/νd.

- **Status:** a proposed correction of the patent's *label*, not of any numerical value and not a transcription
  correction. The raw label is preserved in `rawPrescription`.
- **Consequence:** the monochromatic paraxial model is identical under either reading. The decision affects the
  reference wavelength, glass resolution and dispersion modeling.
- **Residual source gap:** the German priority document DE 1112649 B was identified through the Google Patents family
  listing but not retrieved (OI-08).

## 4. Glass review (runtime resolution)

The final glass strings were resolved with the repository's `resolveCompatibleGlass(…, "d")` against its catalog.
All five resolve inside the runtime window (|Δn| ≤ 0.003, |Δν| ≤ 2):

| Element | Resolved | Δn | Δν |
|---|---|---|---|
| L1, L2 | N-SSK5 (Schott) | +0.00044 | +0.08 |
| L3 | SF5 (Schott) | −0.00030 | +0.01 |
| L4 | SF4 (Schott) | +0.00020 | +0.08 |
| L5 | K-SK18 (Sumita) | −0.00046 | 0.00 |

Lead SSK5 and SK18 are absent from the runtime catalog. Labels read "catalog equivalent … production melt
unspecified". No nC/nF/ng/dPgF values are published, so none are stored and no APD claim is made.

## 5. Implemented-model results (recomputed from the parsed `.data.ts`)

The verifier loads the actual `.data.ts` with a strict literal lexer/parser (no `eval`). Parser self-tests reject:
- duplicate keys
- arithmetic
- spreads
- calls
- bare identifiers
- computed keys
- template strings
- leftover tokens

**First order and pupils:**

| Quantity | Value | Note |
|---|---|---|
| EFL | 89.801260 mm | y-nu = ABCD; equals 90 × normalized EFL |
| BFD | 52.004973 mm | equals the authored image gap |
| r1–r9 track | 59.04 mm | |
| r1 to image | 111.044973 mm | TTL/EFL 1.2366; not telephoto |
| BFD/EFL | 0.5791 | not retrofocus |
| H from r1 | +34.528 mm | |
| H′ from r9 | −37.796 mm | |
| EP | 49.135 mm behind r1; ⌀ 35.9205 mm | calibrated f/2.5 |
| Stop sd (real) | 10.746223 mm | paraxial value 10.762243 mm |
| Petzval sum | 0.0023877 mm⁻¹ | radius −418.81 mm |

**Element focal lengths** (standalone, thick lens in air; stored to 0.1 mm):

| L1 | L2 | L3 | L4 | L5 |
|---|---|---|---|---|
| +126.15 mm | +43.92 mm | −29.29 mm | −132.86 mm | +60.54 mm |

**Close state:** 1.0 m object-to-image. Gap 61.792966 mm (bisection = Newton to 1e-6), extension 9.788 mm,
m = −0.1090.

**Geometry** (spherical surfaces, both focus states):
- **Edge thickness** (at the smaller rim of each element): L1 6.18, L2 5.74, L3 8.63, L4 7.95, L5 4.35 mm.
- **Rim slopes:** at most 38.6° (r5), against the 64.16° limit.
- **Gap intrusion:** 0.344 of the r5→STO gap and 0.303 of STO→r6; the other gaps open at the rim.
- **Axial marginal:** the f/2.5 ray lies inside every SD.
- **Chief ray at 13.5°:** inside every SD.
- **Off-axis fans (8.1°):** unclipped to ±0.75 pupil.
- **Wider fans:** at 12.48°, the diagram's 0.6 × engine half-field, and at 13.5°, rays first clip at r1, r6 or r7,
  which are air-facing surfaces. They never clip at the cemented junction r4.
- **Vignetting:** full-aperture off-axis vignetting is intended and is disclosed.
- **Scope:** sampling is meridional at the listed fields; it is not a continuum or sagittal proof.

**Mutation tests** (run outside the package):
- A duplicate `key` in the data makes S2-LOAD fail (exit 1).
- Changing r6 from −24.651 to −24.61 fails eight implemented-model checks (exit 1).
- The built-in S2-MUTATION-DETECT check confirms that the r6 sign flip is detected.

## 6. LensVisualizer-scope checks actually run (repository `7a345ea`, targeted, no Git writes)

| Check | Tool | Result |
|---|---|---|
| Prettier | 3.8.1, `/mnt/project/prettierrc.json` (identical to the repository config) | formatted; `--check` passes |
| `satisfies LensDataInput` | `tsc` 5.9.3 with a single-file tsconfig extending the repository config | exit 0; the `elemId: "4"` mutant fails with TS2322 (exit 2) |
| `validateLensData` | repository source, Node + repository `.js→.ts` specifier hook, defaults merged | 0 errors; a mutant with r5 sd 19.0 is rejected for rim slope 74.6° |
| `buildLens` | same | builds; EFL 89.801260, FOPEN 2.5, EP sd 17.960252, STO sd 10.746223, halfField 20.805°, Petzval 0.0023877 |
| Render diagnostics | `computeElementRenderDiagnostics` on `doLayout(0,0)` | max trim 0.000 mm on every surface |
| Glass resolution | `resolveCompatibleGlass` | all five resolve (§4) |

Environment limitations:
- Node v22.22.2 was used; the repository declares Node ≥ 24.15.
- Dependencies were installed with `npm ci --ignore-scripts`. No `generate:metadata`, full test suite, full-corpus
  sweep or build was run.
- Catalog registration, organizer placement and the full-corpus policy tests remain integration tasks.

## 7. Correction and discrepancy register (Stage 2 additions)

| ID | Item | Treatment | Status |
|---|---|---|---|
| DR-02 | Printed e-line label vs d-line catalog coordinates | d adopted (MD-03); raw label kept | resolved as a documented proposed correction; visible |
| DR-09 | Printed a9 × 90 = 52.11 mm vs paraxial BFD 52.004973 mm | image gap = paraxial BFD (MD-10); CMP-A9-SCALED residual −0.105 mm retained | resolved by treatment; mismatch visible |
| DR-10 | FIG. 1 heights not to a single scale | used qualitatively only (MD-07) | disclosed |
| DR-11 | Production start date "1958" (German Leica wiki; Delta) vs July 1959 priority | third-party contradiction carried from DR-05 | unresolved, outside the data |

## 8. Quantitative-claim map (data strings → results)

| Data field / claim | Value | Result pointer | Basis |
|---|---|---|---|
| `focalLengthDesign`, specs "f ≈ 89.8 mm" | 89.8 | F-DATA-EFL | parsed data |
| specs "F/2.5 (FIXED)"; `nominalFno` | 2.5 | F-FNO; MD-11 | patent + third-party mechanism |
| specs "2ω = 27° (PATENT)" | 27° | F-FIELD | patent assertion |
| specs / counts "5 ELEMENTS / 4 GROUPS" | 5/4 | F-COUNTS; S2-STRUCTURE | Table 1 / FIG. 1 |
| element `fl` values | see §5 | F-DATA-ELFL; S2-ELEMENT-FL | parsed data |
| element `type` strings | radius signs | S2-ELEMENT-TYPE | parsed data |
| element `glass` strings | §4 | F-GLASS-LABELS; runtime resolution | catalogs |
| header "EFL 89.801 mm" | 89.801 | F-DATA-EFL | parsed data |
| header "52.004973 mm", "52.11 mm", "0.105 mm" | | S2-IMAGE-GAP; CMP-A9-SCALED | parsed data vs source |
| header "9.26 mm" stop | | MD-05; S2-STOP-SPLIT | FIG. 1 estimate |
| header "46 mm barrel", L1 20.4 mm | | MD-07; S-WEB-DELTA-V1; S-WEB-ALLPHOTO | third-party mechanical bound |
| header "8.1 deg", "x 1.08", "x 1.04" | | MD-07; S2-CONTAIN-* | modeling rule |
| header / `focusDescription` "1.0 m", "61.792966 mm" | | F-DATA-CLOSE; S2-CLOSE-GAP | modeling endpoint |
| header Schott type list | §3 | glassEvidence; GL-D-HYPOTHESIS | catalog inference |

Manual check of the interpretive prose in the data file:
- The role strings describe position and sign only; no aberration-mechanism claims are made.
- "weakly negative" for L4 is supported by −132.9 mm against the 89.8 mm system focal length.
- "stronger face toward the image" for L5 is supported by |r9| = 47.16 mm against r8 = 204.03 mm.

## 9. Gate disposition

All 50 mandatory chat checks pass: 27 from Stage 1 and 23 from Stage 2, including one NOT_APPLICABLE (conic). There
is no unresolved substantive blocker. Real LensVisualizer checks were run where targeted execution was possible, and
all passed. Repository-wide gates remain `INTEGRATION_PENDING`.

**Gate: READY_FOR_ANALYSIS**, bound to the data, evidence, verifier and results hashes in the manifest's Stage 2
checkpoint.

Stage 3 must carry these disclosures:
- the index-reference decision;
- the figure-derived stop and calibrated diameter;
- the modeled SDs with intended full-aperture off-axis vignetting;
- the 1.0 m modeling endpoint;
- that the production attribution is a research correlation, not a manufacturer confirmation.

It must not describe the broad specification form of PC4 as holding at full aperture (CMP-PC4-EXACT).

---

# Stage 1 record (preserved)


Stage: 1 (construction-side extraction record; **not** the Stage 4 independent audit). Package revision: stage1-r1.
Scope label for every check below: `CHAT_PREFLIGHT`. No LensVisualizer code was executed.

### S1.1. Job and reference versions

| Field | Value |
|---|---|
| PATENT | US3076383 (US 3,076,383; granted 5 Feb 1963; filed 26 Jul 1960; DE priority 29 Jul 1959) |
| LENS | Leica Colorplan 90mm F2.5 |
| EMBODIMENT | Example 1 (Table 1 / FIG. 1; identical data in Claim 1) |
| OUTPUT STEM | LeicaColorplan90mmf25 |
| Inventors | Walter Mandler; Erich Wagner (Midland, Ontario) |
| Assignee (raw) | Ernst Leitz G.m.b.H., Optische Werke, Wetzlar, Germany |
| Patent PDF SHA-256 | `6d6dcde8a9115eba094efb9262d5400e930d1dc353bbec7fd9dea755d61eee7a` |
| Job card SHA-256 | `8dc672a9a8a1e35a1444ff829339505789a2d6d30b3a62dfebc40963e129de43` |

Controlling project references read for this stage (bytes in `/mnt/project/`, SHA-256):

```
0cd49c0a05231cb8d273d1f1b1d1ab85eeebcf455b6d33de943a5a02906e99e7  LENS_ANALYSIS_SPEC.md
26e79f8ab045e9484a17edc73c902e75c5c4c19b02bca001c645489a19b6b634  LENS_DATA_SPEC.md
44aed8060cfb07a145d6380aad86970dafce46a461ad3ec3cbe93ec08a504a0a  LENS_MOUNT_FORMAT_OPTIONS.md
72ba2a4b28b4f339ad9222f2daa96a467b359cfd486aea5072d15f01741a108e  LensPatentChatProtocol.md
b6ddc19bf656238ed970137ea49081066d34d7c54f5012b3eed762a771ef159b  LensPatentDossierContract.md
c06bbde912ac14a0d92cfa436559d55389b6c0395bb77c0a32553c01fb8e5f72  LensPatentStage1Extraction.txt
379e6bd9a52daa621fb361120cde226a9e29cceb0d79dc0e96fd4f5e54b6de51  TEMPLATE_data_ts.template
2f013eed8318264f130bd0783fec4458624e53780b7edc83180df00f86b95e1e  defaults.ts
6cf80666a5e24499fb5eb5ecf800ee301c9be08fcd26a154ea4ef7c9afcbc0b2  prettierrc.json
```

`/mnt/transcripts/` is read-only in this runtime; no transcript journal entry could be written.

### S1.2. Extraction and conventions

The PDF is a 2017 ImageMagick rendering of the grant: one ~300 dpi raster per page with an unreliable OCR layer. All
values were read from the native rasters (page 2 Table 1, page 3 Claim 1) and cross-checked row by row; the two tables
agree in every radius, spacing, index and Abbe entry. Header: "Focal length f=1.00. Angle of image: 27°. Relative
aperture 1:2.5" (Claim 1: "Field angle=27°").

Transcription correction MD-01: Table 1 prints `r8=+2,267`; Claim 1 prints `r8=+2.267`. The comma is typographic;
2.267 is used. This is a reading correction, not a correction to the patent.

Conventions: light left→right; radius positive when the centre of curvature lies to the right. This is confirmed by the
text (r5 = +0.219 and r6 = −0.2739 are the concave faces toward the diaphragm) and by FIG. 1. Values are normalized to
f = 1.00. a9 is air from the r9 vertex to the image-receiving plane; no plates are listed. The 27° angle is treated as the
full field (half-field 13.5°), which reproduces the 24×36 diagonal (check FIELD-135). The patent orientation is photographic;
projection use reverses the light path, and the model keeps the patent orientation.

Architecture (MD-02): five elements in four air-separated groups.
- L1: positive meniscus.
- D1: L2 plano-convex cemented at the plane r4 to L3 plano-concave; the component is concave toward the stop.
- Stop D in a5.
- L4: negative meniscus, concave toward the stop.
- L5: biconvex.

The design is all-spherical with no variable spacings.

### S1.3. Model transformations (summary of `evidence.modelingDecisions`)

| ID | Kind | Disposition |
|---|---|---|
| MD-01 | transcription correction r8 | applied |
| MD-02 | element/group mapping, STO in a5 | applied |
| MD-03 | index-column label e→d (values unchanged) | **proposed**; Stage 2 decision |
| MD-04 | uniform scale s = 90 | recommended; alternative s = 90.19918 (EFL = 90.00) |
| MD-05 | stop at FIG. 1 fraction 0.5321 ± 0.075 of a5 | Stage 2 task |
| MD-06 | rear spacing | none needed (a9 physical air) |
| MD-07 | semi-diameters | Stage 2 task |
| MD-08 | focus: unit, no internal motion | NO_INTERNAL_RECONSTRUCTION |
| MD-09 | metadata (135-full-frame; omit lensMounts; patent fields; maker by assignee) | Stage 2 to confirm |

Proposed scaled prescription (s = 90, printed index column; for Stage 2 reference, not a data file):

| Surface | R (mm) | d after (mm) | n after |
|---|---|---|---|
| r1 | 54.36 | 8.379 | 1.658 |
| r2 | 147.87 | 4.689 | 1.0 |
| r3 | 28.899 | 10.062 | 1.658 |
| r4 | ∞ | 4.32 | 1.673 |
| r5 | 19.71 | 17.406 | 1.0 |
| r6 | -24.651 | 7.047 | 1.755 |
| r7 | -36.702 | 0.846 | 1.0 |
| r8 | 204.03 | 6.291 | 1.639 |
| r9 | -47.16 | 52.11 | 1.0 |

### S1.4. Glass review

An unseeded search was run over every evaluable glass in the SCHOTT (122), OHARA (134), HOYA (238), HIKARI (144), SUMITA
(128) and CDGM (321) workbooks bundled with opticalglass 2.0.2. File hashes are in
`evidence.sources`. The metric is √(Δn² + (Δν/50)²). Each printed pair was tested both as an e-line pair (at C′/e/F′) and as
a d-line pair (at C/d/F).

| Coordinate | Printed | Best as d-line (dist) | Best as e-line (dist) |
|---|---|---|---|
| G1 | 1.658/50.8 | J-SSK5 (hikari) 0.00084 | H-ZBaF3 (cdgm) 0.00203 |
| G2 | 1.673/32.2 | SF5 (schott) 0.00036 | N-SF5 (schott) 0.00613 |
| G3 | 1.755/27.5 | K-SFLD4 (sumita) 0.00021 | SF4 (schott) 0.00716 |
| G4 | 1.639/55.5 | K-SK18 (sumita) 0.00046 | K-SK18 (sumita) 0.00603 |

Sibling Table 2 (diagnostic only, not modeled):

| Row | Printed | Best d (dist) | Best e (dist) |
|---|---|---|---|
| S1 | 1.744/44.9 | H-LaF3B 0.00000 | LAF2 0.00673 |
| S2 | 1.717/47.9 | H-LaF2 0.00023 | LAF3 0.00499 |
| S3 | 1.728/28.7 | N-SF10 0.00336 | P-SF69 0.00599 |
| S4 | 1.755/27.5 | K-SFLD4 0.00021 | SF4 0.00716 |
| S5 | 1.713/53.9 | K-LaK8 0.00006 | J-LAK8 0.00459 |

**Finding.** The column is headed n_e/ν_e, but its values reproduce d-line coordinates of ordinary catalog types (SSK5, SF5,
SF4 and SK18 families) within table rounding. Read as e-line, three of the four rows miss by 0.0023–0.0067 in index. Table 2
repeats the pattern.

The treatment is proposed as MD-03 and preserved as a visible discrepancy (DR-02). Coordinate compatibility is not supplier
or melt identity. Current-catalog names are equivalents, not attributions to the 1959 melts. No spectral data are published,
so no APD or apochromatic claim is supportable.

Proposed labels if the d-line reading is adopted:
- G1 (L1, L2): SSK5-type dense barium crown.
- G2 (L3): SF5-type dense flint.
- G3 (L4): SF4-type dense flint.
- G4 (L5): SK18-type dense crown.

If e is retained, use class wording or `Unmatched (...)`.

### S1.5. Numerical results (normalized f = 1 unless stated; s = 90 in mm)

**First order** (INF state; y–nu trace plus ABCD, agreeing to 1e-12):

| Quantity | Normalized (f = 1) | s = 90 (mm) |
|---|---|---|
| EFL | 0.997792 | 89.801 |
| BFD | 0.577833 | 52.005 |
| FFD | -0.614148 | — |
| Track r1–r9 | 0.656 | 59.04 |
| r1 to image | 1.233833 | 111.045 |

Further first-order values:
- Principal planes: H at 0.383644 from r1; H′ at -0.419959 from r9.
- TTL/EFL is 1.236564, so the design is not telephoto. BFD/EFL is 0.579112, so it is not retrofocus.

**Source comparisons:**
- EFL 0.997792 vs printed 1.00 gives a residual of -0.002208 (-0.221%).
- The linearized worst-case rounding bound is ±0.007802; the uniform-RSS bound is ±0.001859.
- The mismatch is therefore explainable by source rounding (FO-EFL-ROUNDING PASS). It is **not** a numerical reproduction.
- BFD/EFL = 0.579112 vs a9 = 0.5790 gives a residual of +0.000112 (FO-BFD-A9 PASS).

**Standalone elements** (thick lens in air):

| Element | Surfaces | n | f (norm.) | f (mm, s = 90) |
|---|---|---|---|---|
| L1 | r1–r2 | 1.658 | 1.4017 | 126.15 |
| L2 | r3–r4 | 1.658 | 0.4880 | 43.92 |
| L3 | r4–r5 | 1.673 | -0.3254 | -29.29 |
| L4 | r6–r7 | 1.755 | -1.4762 | -132.86 |
| L5 | r8–r9 | 1.639 | 0.6726 | 60.54 |

| Group | f (norm.) | f (mm, s = 90) |
|---|---|---|
| D1 (L2+L3 cemented) | -2.3892 | -215.03 |
| Front group (L1, D1) | 1.8289 | 164.60 |
| Rear group (L4, L5) | 0.9645 | 86.80 |

The group composition reproduces the system power exactly (GRP-COMPOSITION).

**Petzval:**
- Σ φ/(n n′) = 0.214896 per unit f, computed surface by surface with two algebraic forms.
- Petzval radius = -4.653 f (-418.8 mm at s = 90).

**Patent conditions:**

| Condition | Result |
|---|---|
| PC1 | Σ\|r1\|+\|r9\| = 1.128 (≥ 1.00); difference 0.08 (≤ 0.10) |
| PC2 | Σ = 0.7289 (≥ 0.70, preferred ≤ 2.00); difference 0.0867 |
| PC3 | Σ = 0.4929 (≥ 0.45, preferred ≤ 1.00); difference 0.0549 |
| PC4, paraxial height ratios | r6 0.549737, r7 0.592951, r8 0.591736, r9 0.579112 (all within 0.5–0.6) |
| PC4, exact ratios at f/2.5 (h = 0.199558) | r6 0.561125, r7 0.614802, r8 0.613225, r9 0.606092 |

The Claim 1 wording (r6 only) holds both paraxially and exactly. The specification's broader wording (all lenses after the
diaphragm) holds paraxially, but real f/2.5 marginal rays exceed 0.6 on r7–r9. This is recorded as CMP-PC4-EXACT; see §6.

Exact full-aperture longitudinal spherical aberration (monochromatic, printed indices): -0.001742 f (-0.157 mm).

**Stop and pupils** (provisional; FIG. 1-derived stop, EP calibrated to the printed f/2.5):
- FIG. 1 was verified close to scale; every drawn gap is within 0.008 f (FIG-SCALE).
- The stop sits 0.1029 f after r5 (9.2625 mm).
- Paraxial stop semi-diameter: 0.1196 f (10.7619 mm); EPD 35.9205 mm.
- Entrance pupil: 49.1419 mm behind r1, cross-checked by ABCD and y–nu.
- Exit pupil: -25.2277 mm from r9; pupil magnification 0.86004.
- Across the stop-position uncertainty, the stop semi-diameter ranges from 0.1180 to 0.1212 f.
- Matching f/2.5 is a calibration, not independent evidence of the diaphragm diameter.

**Field:** the paraxial image diagonal at ±13.5° and s = 90 is 43.1187 mm, against 43.27 mm for 24×36.

**Unit-focus kinematics** (s = 90; object-to-image distance; bisection trace cross-checked with Newton):

| Object to image (m) | BFD (mm) | Extension (mm) | m |
|---|---|---|---|
| 0.8 | 64.997 | 12.992 | -0.1447 |
| 1.0 | 61.793 | 9.788 | -0.1090 |
| 1.5 | 58.079 | 6.074 | -0.0676 |
| 2.0 | 56.413 | 4.408 | -0.0491 |
| 3.0 | 54.854 | 2.849 | -0.0317 |
| 5.0 | 53.674 | 1.669 | -0.0186 |
| 10.0 | 52.825 | 0.820 | -0.0091 |

**Mutation tests** (run in chat, outside the package):
- Appending one byte to the patent → SRC-HASH FAIL, exit 1.
- Flipping the sign of r6 → FO-EFL-ROUNDING, FO-BFD-A9, COND-PC4-SPEC-PARAXIAL and FIELD-135 FAIL, exit 1.

**Check register:**

| Check | Status | Required at |
|---|---|---|
| SRC-HASH | PASS | stage1 |
| SRC-JOBCARD | PASS | stage1 |
| SRC-TABLE-CLAIM | PASS | stage1 |
| FO-EFL-YNU-ABCD | PASS | stage1 |
| FO-BFD-YNU-ABCD | PASS | stage1 |
| FO-ABCD-DET | PASS | stage1 |
| FO-FFD-REVERSE | PASS | stage1 |
| FO-EFL-ROUNDING | PASS | stage1 |
| FO-BFD-A9 | PASS | stage1 |
| EL-POWER-2WAY | PASS | stage1 |
| GRP-COMPOSITION | PASS | stage1 |
| PTZ-2WAY | PASS | stage1 |
| COND-PC1 | PASS | stage1 |
| COND-PC2 | PASS | stage1 |
| COND-PC3 | PASS | stage1 |
| COND-PP1 | PASS | stage1 |
| COND-PC4-CLAIM | PASS | stage1 |
| COND-PC4-SPEC-PARAXIAL | PASS | stage1 |
| EXACT-PARAXIAL-LIMIT | PASS | stage1 |
| FIG-SCALE | PASS | stage1 |
| PUPIL-2WAY | PASS | stage1 |
| FIELD-135 | PASS | stage1 |
| SCALE-S90 | PASS | stage1 |
| UNITFOCUS-NEWTON | PASS | stage1 |
| GLASS-COEF-REPLAY | PASS | stage1 |
| GLASS-SEARCH-REPLAY | PASS | stage1 |
| GL-D-HYPOTHESIS | PASS | stage1 |

### S1.6. Correction and discrepancy register

| ID | Item | Source value | Treatment | Status |
|---|---|---|---|---|
| DR-01 | r8 typography | "+2,267" (Table 1) / "+2.267" (Claim 1) | read 2.267 | resolved (transcription) |
| DR-02 | Index column label | n_e/ν_e | proposed d-line reading, values unchanged (MD-03) | open → Stage 2 decision; raw label preserved |
| DR-03 | Stated f = 1.00 | 1.00 | computed 0.997792; within rounding bound | resolved as rounding; mismatch kept visible |
| DR-04 | PC4 specification wording at full aperture | 0.5–0.6 "lenses following the diaphragm" | holds paraxially; exact f/2.5 r7–r9 ratios 0.614802–0.606092 | disclosed; claim (r6) satisfied |
| DR-05 | Production start date | Delta Lenses: 1958 | patent priority Jul 1959; Cavina: introduced 1960 | third-party contradiction recorded |
| DR-06 | Later-version element count | Delta: 6/4 from 1967; Cavina: 5/4 through the 1990s | outside this job; correlation limited to the original version | recorded |
| DR-07 | L4 glass description | Cavina: "short flint" | printed 1.755/27.5 is an ordinary dense flint | third-party claim not supported |
| DR-08 | Brand | job card "Leica" | original production marked Leitz Wetzlar; assignee Ernst Leitz | job label preserved; Stage 2 naming |

Process note: during this stage the first verifier draft combined the claim and specification readings of PC4 into one
check, which failed on the exact r7–r9 ratios. It also mis-ordered the CDGM Sellmeier coefficients, which the
coefficient-replay check caught. The coefficient order was fixed. PC4 was split into its claim and paraxial-specification
checks, and the exact-ray observation was retained as a visible comparison, not deleted.

### S1.7. Product correlation and marketed values

The convergent evidence supports this example as the original Leitz Colorplan 1:2.5/90 projection lens, with five elements
in four groups:
- the inventors (Mandler and Wagner at Midland) match those credited by M. Cavina;
- the 1959 design date and c. 1960 introduction fit the patent's priority date;
- the architecture matches;
- the focal ratio and the 24×36 field match.

Marketed values (90 mm, f/2.5) rest on the barrel engraving as reported by several third parties. No Leitz primary
literature was retrieved, so the manufacturer-precedence rule could not be applied beyond the engraving. The attribution is
a research correlation, **not** manufacturer-confirmed.

The lens has a fixed aperture and no helicoid; it is focused by the projector mount.

### S1.8. Focus disposition

`NO_INTERNAL_RECONSTRUCTION`: unit focus, with only the image-side gap varying. No manufacturer minimum distance exists.
Stage 2 must choose `closeFocusM` as a labeled modeling endpoint, using the kinematic table above.

### S1.9. Independent review

Not performed (Stage 4). Nothing in this file claims independence.

### S1.10. Quantitative-claim map (Stage 1 facts → results)

| Fact ID | Value source | Governing basis |
|---|---|---|
| F-EFL-NORM / F-EFL-S90 | results.sourceModel.firstOrder.efl / scaledModel.efl_mm | Table 1 + MD-01, MD-04 |
| F-BFD-S90, F-TTL-S90, F-TRACK-S90 | results.scaledModel | Table 1, MD-04 |
| F-FNO, F-FIELD | evidence.rawPrescription.systemHeader | patent assertion |
| F-COUNTS | MD-02 | Table 1 / FIG. 1 |
| F-PETZVAL | results.sourceModel.petzval | computed |
| F-CONDITIONS | results.sourceModel.conditions | computed vs patent text |
| F-STOP-EST | results.sourceModel.stopEstimate | FIG. 1 estimate |
| F-INDEXREF | results.sourceModel.glass | catalog inference (MD-03) |
| F-FOCUS | evidence.focus | mechanism (secondary sources) |

No analysis prose exists yet. Stage 3 must map every quantitative claim to these IDs or to later results, and must manually
check interpretive prose.

### S1.11. Gate disposition

All 27 mandatory Stage 1 chat checks pass. The primary-source extraction is complete and
cross-checked, the conventions are established, and the first-order model is reproducible in two implementations.
Transformations are ledgered, and the one labeling discrepancy has a supported proposed treatment that does not change the
numerical prescription.

**Gate: READY_FOR_DATA**, subject to clean-extraction replay of the packaged dossier.

Stage 2 tasks:
- Decide MD-03, the index reference.
- Confirm MD-04, the scale.
- Finalize the stop position and calibrate the stop diameter.
- Derive semi-diameters and run the geometry checks.
- Choose and label `closeFocusM`.
- Confirm the canonical assignee, maker and display name.
- Format the `.data.ts` with the project Prettier configuration.

### S1.12. Pending integration

`integrationStatus: INTEGRATION_PENDING`. The following are `NOT_RUN` at integration scope: TypeScript `LensDataInput`
type-check, Prettier on the data file, `buildLens()` / `validateLensData()`, render diagnostics and runtime glass
resolution. No data file exists at Stage 1. Taxonomy gaps to raise at integration: a slide-projector barrel mount id, and
the canonical Ernst Leitz assignee spelling and maker slug.
