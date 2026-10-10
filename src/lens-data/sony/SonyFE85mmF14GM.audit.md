# SonyFE85mmF14GM — Construction, Verification and Independent Audit (Stages 1–4)

Job: WO2017130571A1 · Sony FE 85mm F1.4 GM · Example 2 · stem `SonyFE85mmF14GM`.
This file consolidates construction-side verification (Parts A–C) and the Stage 4 source-first review (Part S4, current).
Parts C, B and A are retained records of Stages 3, 2 and 1; no independence is claimed for them. Revision history lives here,
not in the delivered data or analysis files.

# Part S4 — Stage 4: independent source-first audit

## S4-1. Job, inputs and reference versions

The job card (PATENT WO2017130571A1, LENS Sony FE 85mm F1.4 GM, EMBODIMENT Example 2, OUTPUT STEM SonyFE85mmF14GM) and the original patent PDF are byte-identical to the Stage 1–3 records (`2e2db50d…`, `afda3a34…`). All nine Stage 3 members matched the Stage 3 manifest on arrival. The uploads used `_` before the artifact suffix; they were renamed to `<stem>.<suffix>` without content change.

Controlling project references (LENS_DATA_SPEC, LENS_ANALYSIS_SPEC, template, defaults, Prettier configuration, chat protocol, dossier contract, Stage 4 prompt) were hash-identical to those recorded by Stage 3. The LensVisualizer clone used for targeted checks was at commit `3d44a1be91db853725ac841b65a9e228f2c544ef`, the commit recorded by Stage 3. The repository's newer LENS_DATA_SPEC was not re-assessed beyond the Stage 3 impact note; the targeted runtime checks below exercise the current validator directly.

The candidate verifier replayed against the Stage 3 package with exit 0. Its regenerated results differed from the packaged results only in `environment.platform` (container kernel build) and `environment.runUtc`; all numerical content was identical.

## S4-2. Exposure and independence

The candidate `.data.ts` was displayed in the conversation before any Stage 4 work. Its values were therefore visible: prescription, semi-diameters, glass labels, the five-decimal index restoration and the header notes. Project memory exposed workflow conventions but no results for this lens. The candidate analysis, audit, evidence, results, verifier and manifest were not opened until the baseline below had been frozen.

Independence is consequently procedural, not blind:

- **Source.** Tables 4, 5, 6 and 28, ¶0065 and ¶0067 were re-read from fresh 400–600 dpi PyMuPDF renders of PDF pages 23, 24 and 45 and re-typed.
- **Method.** New paraxial (y–u), 2×2 matrix, meridional real-ray, close-focus, Seidel, envelope and unseeded six-catalog glass code was written without consulting the candidate code.

Corrections were validated by the same reviewer; no third-party re-review exists.

## S4-3. Pass A baseline (frozen before reconciliation)

The baseline is stored in `evidence.independentPass.independentBaseline`. Its fingerprint is `5ae17cc1f60c9b7c0a466020ec1f7141741f9242e7c5739a3ff16b96961d1051`: the canonical sha256 of the sorted, compact JSON with 10-significant-digit floats. The fingerprint attests to record integrity only; it does not prove independence. The Pass A code ran on Python 3.12.3 with numpy 2.4.4, scipy 1.17.1, opticalglass 2.0.2 and PyMuPDF 1.28.2. It is ported to the standard library in the `STAGE 4` section of the verifier. `S4-BASELINE-REPLAY` reproduces the frozen numbers to a maximum relative deviation of 3.1 × 10⁻¹⁰.

| Quantity | Printed nd | Restored nd (HOYA 5-dp) | Patent |
|---|---|---|---|
| EFL (mm) | 86.784 | 86.848 | 86.85 |
| BFD in air (mm) | 16.827 | 16.861 | not published |
| Petzval sum (mm⁻¹) | 8.34 × 10⁻⁴ | 8.28 × 10⁻⁴ | — |
| Close state (object-to-image, \|β\|) | 856.7 mm, 0.116 | 857.6 mm, 0.116 | 0.85 m, 0.118 |
| Condition (5) | −12.62 | −12.58 | −12.59 |
| Real-ray F-number at EFL/(2 × 1.45) entry | 1.449 | 1.449 | 1.45 |

Additional baseline results:

- The other conditions reproduce Table 28 at its printed precision.
- D9 + D15 changes from 20.857 to 20.858 mm between the published states, which is source rounding.
- The fixed-stop close working F-number is 1.469, which does not reproduce the Fig. 4 label F/1.81.
- The asphere convention is the (1 + K) form with K = 0, so the patent K maps directly.

**Glass (unseeded, 1,087 glasses across HOYA, OHARA, SCHOTT, CDGM, HIKARI and SUMITA).** HOYA is coordinate-exact for all eight pairs: PCD4, FCD1, FCD515, E-F2, TAFD55, M-FDS910, E-FD4 and BAC4. HOYA FCD505 ties FCD515 exactly, with identical line indices. Non-HOYA coordinate-exact glasses exist only for three pairs:

- 1.497/81.61: N-PK52A, H-FK61, D-FK61.
- 1.755/27.53: H-ZF6, E-FD4L (HOYA).
- 1.569/56.04: H-BaK7.

## S4-4. Pass B reconciliation (four views)

**Raw patent and reviewer re-entry versus Stage 1 transcription.** All 20 surfaces, the asphere coefficients, Table 6 and Table 28 are identical (`S4-REENTRY-AGREE`).

**Implemented `.data.ts` versus reviewer re-entry.** The model equals the re-entry under MD-03 (restored nd), MD-04 (var) and MD-14 (BFD 16.861). The single STO, the downstream cemented `elemId` assignments, the var/base-d consistency and the omission of rear plates are all correct (`S4-DATA-VS-BASELINE`).

**Analysis versus reviewer recomputation.** Reviewer code regenerated 26 quantitative claims from the parsed data and found each verbatim in the analysis (`S4-CLAIMS-INDEP`). The claims cover:

- EFL, BFD, track and pupils.
- Marginal and chief heights.
- Seidel SI by surface and in total.
- CI/CII totals.
- Distortion at 50%, 70% and 100% of Y.
- Real longitudinal spherical aberration at infinity and at the close state.
- The close conjugate, close-state EFL and working F-number.
- Focus sensitivity.
- Asphere departures and term split, the curvature reversal at 11.01 mm and the sag maximum at 18.63 mm.
- The 13A envelope height of 19.61 mm.
- The L7 rim thickness.
- The calibrated real F-number.

Three items needed care on the reviewer side:

- The reviewer's first Seidel C-sums carried the opposite sign. Welford's chromatic sums have no leading minus sign, and the magnitudes agreed exactly. The slip was fixed in reviewer code only.
- Distortion and LSA reproduce under the analysis's stated conventions: distortion at the ideal image height, and LSA for the ray at the authored stop rim. With alternative conventions (real height fixed; EFL/(2 × 1.45) aperture) the values are +0.868% and −0.141 mm.
- The analysis's Abbe-linear LCA of −0.126 mm uses a symmetric F/C split about nd. A realistic P_d,C ≈ 0.3 split and the HOYA catalog line indices both give −0.128 mm, and the analysis reports −0.128 mm for the catalog case. This was judged an acceptable labelled convention, not an error.

The Example 1 sibling statement was checked from printed Table 1/3 values. The reviewer obtained an object-to-image distance of 864.5 mm with |β| 0.093 against 0.85 m / 0.095, a residual in the same direction as Example 2.

**Geometry and containment.** These were recomputed from the data with the reviewer envelope (`S4-ENVELOPE`, `S4-GEOM`):

- **Infinity bundles.** The f/1.45 axial bundle, the 0.6-field fan at ±0.75 stop and the full-field chief ray were traced at focusT 0, 0.25, 0.5, 0.75 and 1.
- **Finite-conjugate bundles.** The same bundles were traced from the paraxially conjugate object at focusT 0.25–1.
- **Containment margins.** Every surface clears its envelope. The minimum non-stop margin is 1.030 (surfaces 3 and 19). L1 has 1.055/1.053 and L2 has 1.030/1.034.
- **Geometry limits.** The minimum edge thickness is 0.543 mm (L2), the maximum rim slope is 47.2°, and the maximum cross-gap intrusion is 0.887 of the gap (18→19 and 6→7) against a 0.9 limit.

Coverage is meridional only.

**Manufacturer facts.** These were re-checked on 2026-10-02 against Sony MEA and Sony UK specification pages and the Sony Asia Alpha Universe page:

- 8 groups / 11 elements, with 1 XA and 3 ED elements.
- 29° angle of view (35 mm).
- AF 0.85 m / MF 0.8 m.
- 0.12× maximum magnification and 11 blades.

The production correlation is unchanged and remains unconfirmed by Sony at the example level.

## S4-5. Correction register (Stage 4)

| ID | File / location | Old | New | Evidence | Downstream |
|---|---|---|---|---|---|
| C4-01 | data.ts, L1 `glass` | `… (H-ZPK1A, K-PSKn2, N-PSK53A coordinates)` | `… (cf. H-ZPK1A, K-PSKn2, N-PSK53A; Δνd −0.008 to −0.011)` | Δνd −0.008/−0.011/−0.011 vs printed 63.40 exceeds the ±0.005 band of a two-decimal νd; the analysis already used that definition | LV resolution unchanged (PCD4, vendor-context); S2-GLASS, S4-GLASS-LABELS, LV-GLASS rerun |
| C4-02 | data.ts, L6 `glass` | `… (J-LASFH16, S-LAH99 coordinates)` | `… (cf. J-LASFH16, S-LAH99; Δνd −0.007, +0.009)` | Δνd −0.007/+0.009 vs printed 29.13; flagged by Stage 3 (D-9) | LV resolution unchanged (TAFD55) |
| C4-03 | data.ts, L9 `glass` | as C4-02 | as C4-02 | same coordinate | as C4-02 |
| C4-04 | data.ts header, APERTURE | "an entry ray at f/2.9" | "an axis-parallel entry ray at height EFL/(2 × 1.45)" | "f/2.9" reads as an F-number; the calibration ray height is 29.95 mm (stop 19.7664 mm; buildLens 19.7664 mm) | comment only |
| C4-05 | data.ts header, SEMI-DIAMETERS | reduced list omitted L1 | adds "≈5% at L1" | L1 margins 1.055/1.053 (edge-thickness bound already in B4) | comment only |
| C4-06 | analysis, L3 | — | FCD505/FCD515 tie disclosed | identical HOYA nd, νd, nC, nF, ng | analysis only |
| C4-07 | analysis, Glass Identification | — | explains coordinate-exact versus "cf." names in the data strings | supports C4-01…03 | analysis only |

**Tested and reverted.** Adding "FCD505" to the L3/L8 glass strings changed LensVisualizer resolution from `only-compatible` to a two-candidate `index-residual` choice of the same glass. That adds token ambiguity with no numerical gain, so the data label stays FCD515 and the tie is disclosed in the analysis and in OI-S4-01.

**Parsed-value effect.** Only the three glass strings changed. `S3-DATA-UNCHANGED` now binds either to the Stage 2 bytes or to the recorded Stage 4 revision. For the latter it re-parses the file, reverts C4-01…03, and must match the Stage 2 parsed fingerprint `ca84cb1a…eaa4`.

**Final pair.** `.data.ts` sha256 `b43b31038ae00daf051144dfff5247382a9837a94d8972033c07fc45a8465b54` (parent `deeb61da…ec08d`); `.analysis.md` sha256 `0a9d164fe2b413d487784bff31fadcaf26baec30c802cdd8262e74741b2c6fe4` (parent `edb01fa3…c192`). Prettier 3.9.9 with `prettierrc.json` was run with `--write` then `--check`; the file is clean.

**No changes.** The prescription, semi-diameters, spectral fields, apd flags, focus model, metadata and every numerical statement in the analysis were left as they were.

## S4-6. Discrepancies retained (visible, not resolved by fiat)

- **Close state.** 0.85 m / β 0.118 (printed) against 857.6 mm / 0.116 (paraxial), with a distance reference the patent does not define (OI-03). Resolution: keep the published gaps and label; finiteConjugates is not declared.
- **Fig. 4 close F/1.81** against a fixed-stop working F-number of 1.469; the patent convention is undefined (OI-07).
- **Condition (5).** The printed −12.59 lies between the printed-index (−12.62) and restored-index (−12.58) values; G2a is near-afocal.
- **D9 + D15** is not conserved by 0.001 mm (source rounding).

## S4-7. Manual review of interpretive prose and citations

The following were re-read against the patent text and judged supported and adequately hedged:

- The double-Gauss reading (labelled interpretive).
- The G2-internal coma balance (¶0041, ¶0047, ¶0006; infinity-only caveat stated).
- The role of condition (2) (¶0028).
- The asphere's positive axial action weakening toward the rim (¶0035, ¶0088), together with the computed curvature reversal inside the clear aperture.
- The XA/ED element mapping (stated as inference).
- The heritage citations (¶0003–¶0005; ISR completed 17 Feb 2017; Article 19 amendment received 26 May 2017, PDF p. 53).
- The successor note (GM II).

No apochromatic or telephoto/retrofocus claim is made (TL/EFL 1.430; BFD < EFL). Third-person voice and νd notation are maintained. The page locators were checked against the 70-page map (Tables 4–6 PDF pp. 23–24; Table 28 PDF p. 45; drawing sheet 2/10 PDF p. 58; ISR PDF pp. 67–70).

## S4-8. Quantitative-claim map (Stage 4 additions)

| Analysis claim | Reviewer check | Governing revision |
|---|---|---|
| EFL 86.848, BFD 16.861, track 124.165, EP 46.80, XP 50.21 | S4-CLAIMS-INDEP (EFL/BFD/track/EP/XP) | data `b43b3103…` |
| Seidel totals and SI per surface (+1.246, −0.637, −1.531, +1.245); CI/CII totals +0.015/+0.004 | S4-CLAIMS-INDEP (SI1, SI13, SI15, SItot, CItot) | data `b43b3103…` |
| Distortion +0.88/+0.44/+0.22%; LSA −0.142 → −0.814 mm | S4-CLAIMS-INDEP (dist, LSA) | data `b43b3103…` |
| Close conjugate 857.6 mm / 0.116; close-state EFL 76.83; working F/1.469; sensitivity 0.747/0.726 | S4-CLAIMS-INDEP (close, closeEFL, wfno, sens) | data `b43b3103…` |
| Asphere −0.255 / −1.176 mm; terms −1.007/−0.245/+0.077; 11.01 mm; 18.63 mm; 19.61 mm; L7 rim 5.77 mm | S4-CLAIMS-INDEP (asphP, asphSD, asphT, asphK, asphS, asphEnv, L7) | data `b43b3103…` |
| Conditions (1)–(5), (7), (8) | S4-CONDITIONS | patent Table 28 + data |
| Cross-vendor glass statements | S4-GLASS-LABELS + glassEvidence rows | evidence G-A…G-H |
| Sony 8/11, 1 XA + 3 ED, 29°, 0.85/0.8 m, 0.12× | SRC-SONY-SPEC, SRC-SONY-UK, SRC-SONY-ASIA | productCorrelation.stage4Confirmation |

## S4-9. Checks

**CHAT_PREFLIGHT.** All mandatory Stage 1–4 checks pass in the consolidated verifier (57 checks). The Stage 4 checks are:

- S4-BASELINE-FROZEN
- S4-REENTRY-AGREE
- S4-BASELINE-REPLAY
- S4-CONDITIONS
- S4-DATA-VS-BASELINE
- S4-CLAIMS-INDEP
- S4-ENVELOPE
- S4-GEOM
- S4-GLASS-LABELS
- S4-CORRECTIONS
- S4-MUTATION (a reverted L1 label and an undersized s3 sd are each detected)

**LENSVISUALIZER (targeted, out of band).** These ran on the final data bytes at commit `3d44a1b` with tsx 4 and TypeScript 5.9.3 on Node 22.22.2. The repository declares Node ≥ 24.15; this deviation is recorded.

- `validateLensData({...LENS_DEFAULTS, ...data})`: no errors.
- `buildLens`: 20 surfaces, EFL 86.8477, stop sd 19.7664.
- `doLayout` + `computeElementRenderDiagnostics` at focusT 0, 0.25, 0.5, 0.75 and 1: no material trims and zero rendered cross-gap overlap.
- `explainCompatibleGlassResolution`: identical selections before and after the corrections. L7 resolves to none, as expected: M-FDS910 is absent from the runtime catalog and its explicit nC/nF/ng are used.
- `tsc` restricted to the data file with the repository tsconfig: exit 0.

No corpus sweep, metadata generation, build or prerender was run.

## S4-10. Gate disposition

All mandatory CHAT_PREFLIGHT checks pass on the final bytes. The applicable targeted LensVisualizer checks pass. The essential corrections are supported by primary evidence. The retained discrepancies are disclosed with defensible treatments. **Gate: READY_FOR_BATCH.** Closed 2026-10-10 by the deployment validation recorded at the end of this file.

## S4-11. Pending integration

Closed 2026-10-10: the files are in `src/lens-data/sony/` and the items below are covered by the repository's ordinary checks; see the 2026-10-10 section at the end of this file. The list as recorded at the time:

`integrationStatus: INTEGRATION_PENDING`. The following remain for the user-controlled batch session:

- Organizer move into `lens-data/sony/`.
- Metadata generation.
- Full-corpus validation, render and glass-report sweeps.
- The production build and prerender on the declared Node version.

The stem casing `F14` (fixed by the job card) differs from most sibling stems (`f14`). Whether to rename at integration is the maintainer's choice; the key `sony-fe-85mm-f14-gm` does not collide with the GM II key `sony-fe-85-f14-gm-ii`.


# Part C — Stage 3: analysis authoring and consistency gate

## C1. Entry gate

The Stage 2 package (gate READY_FOR_ANALYSIS, revision stage2-r1) was uploaded as individual files with `_` before the
artifact suffix; they were renamed to `<stem>.<suffix>` without content change. All seven hashes equalled the Stage 2
manifest, including the four checkpoint bindings (data `deeb61da…`, evidence `35628d15…`, verifier `b35ece5a…`, results
`a6dec37c…`). The Stage 2 verifier was replayed in a separate directory: exit 0, 35 checks, results identical to the
packaged results apart from `environment.runUtc`. Controlling project references are unchanged (hashes as in Part B and
the manifest).

## C2. What changed at Stage 3, and why

| Artifact | Changed? | Change | Consequence |
|---|---|---|---|
| `.data.ts` | **No** | — | Byte-identical to the Stage 2 revision (check S3-DATA-UNCHANGED). Prettier not rerun; the Stage 2 `--check` result still binds these bytes. |
| `.evidence.json` | Yes (sources only) | Added SRC-SONY-GM2-SPEC and SRC-SONY-GM2-IN (Sony manufacturer pages for the GM II); SRC-3P-GM2 marked superseded for hard specifications; `productCorrelation.variants` re-pointed; `productCorrelation.stage3Recheck` records today's re-read of SRC-SONY-SPEC and the 2016 release; `productCorrelation.siblingScreen` adds paraxial transcriptions of Examples 5 and 6 (Tables 13, 15, 16, 18). | No prescription, convention or ledger entry changed. All Stage 1/2 checks rerun against the new evidence hash and pass. |
| `.verify.py` | Yes | Stage derivation now recognises Stage 3; added `stage3_support` (Seidel sums, colour, asphere, focus, distortion, LSA, sibling screen) and the `stage3` consistency gate with in-memory mutation fixtures. | Every Stage 1/2 check is unchanged in logic and still passes. |
| `.results.json` | Regenerated | From the final files; adds `implementedModel.analysisSupport`, `implementedModel.analysisConsistency` (claim map) and facts F3-*. | Stable content reproducible (C7). |
| `.analysis.md` | New | Stage 3 deliverable. | — |

The manufacturer-source substitution follows the project rule that manufacturer data governs hard specifications over
third-party sources. Sony's SEL85F14GM specification page was re-read on 2026-10-02: 8 groups / 11 elements, AF 0.85 m /
MF 0.8 m, 0.12×, 11 blades, 77 mm filter, 820 g, 29°, unchanged from Stage 1. Two dealer/press summaries describe a
"Linear SSM"; Sony's release says ring-drive SSM, and the analysis follows Sony.

## C3. New computations (verify.py `stage3_support`), and their validation

All read the parsed `.data.ts`; catalog line indices come from `evidence.glassEvidence` (HOYA candidates of MD-12).

- **Seidel sums** (Welford convention; A4 asphere term `8·A4·(n′−n)·y⁴·(ȳ/y)^k`), marginal ray at paraxial F/1.45,
  chief ray for Y = 21.633 mm through the paraxial entrance pupil, infinity, d-line. Validation: exact real-ray
  transverse SA at 5% aperture vs the Seidel prediction for a spherical singlet (ratio 1.005), an A4 plate (1.010) and a
  curved A4 surface (1.004); full system 0.995; SIV = H²·Σφ/(nn′) to 1e−12. These fix the sign convention:
  TSA = +SI/(2n′u′), so positive SI is undercorrected.
- **Primary colour** CI/CII per surface, per element and per subgroup using the patent's nd/νd (Abbe-linear F−C).
  Independent check: Abbe-linear paraxial LCA (BFD_F − BFD_C = −0.12556 mm) equals −ΣCI/u′² (−0.12558 mm).
- **Catalog line foci** (C, F, g relative to d) under the HOYA inference; transverse colour of the paraxial chief ray.
- **Focus**: d(BFD)/d(G2 shift) at both published states; close-state EFL; real LSA at stop fractions 0.5/0.7/1.0.
- **Distortion**: real chief ray vs f·tanθ at 0.5/0.7/1.0 of Y (infinity).
- **Asphere 13A**: departure at the paraxial marginal height, real-ray envelope height and modeled sd; term breakdown;
  zero of local meridional curvature (11.01 mm) and of surface slope (18.63 mm).
- **Sibling screen**: element/group counts and νd > 65 counts of Examples 5 and 6; their printed-index EFL vs printed f
  (Ex. 5: within envelope; Ex. 6: 82.316 vs 82.45 mm, residual −0.134 mm inside the ±0.49 mm index/R/D rounding
  envelope). Example 6 conditions recomputed as a further transcription check agree with Table 28 within index rounding.

## C4. Correction and discrepancy register (Stage 3 additions)

| ID | Observation | Disposition |
|---|---|---|
| D-8 | Example 6 also has 8 groups / 11 elements, F/1.45 and one asphere. The Stage 1 statement ("only example with f ≈ 85–87 mm, Fno 1.45 and 8/11") is true but depends on its focal-length window. | Disclosed in the analysis identification section with the discriminators (f 82.45 vs 86.85 mm; β 0.115 vs 0.118; two vs three crowns with νd > 65). Correlation remains unconfirmed. No data change. |
| D-9 | Under the strict coordinate-exact test (nd rounds, \|Δνd\| ≤ 0.005) five coordinates are HOYA-only, including 2.001 / 29.13. The data labels for L6/L9 cite "J-LASFH16, S-LAH99 coordinates", which are within 0.01 but not exact. | Analysis states the strict result. Data label wording is a class note, not a model error; left unchanged and flagged for Stage 4. |
| D-10 | Condition (5) is index-sensitive because G2a is nearly afocal: restored −12.58, printed-index −12.62, Table 28 −12.59. | Disclosed in the analysis; both values lie well inside −35 < · < −4. |
| D-11 | Real-ray close-focus LSA (−0.814 mm at the calibrated aperture) is much larger than at infinity (−0.142 mm). | Reported as a model result; the Fig. 4 close-focus curves are only compared qualitatively (direction), because the patent's close-focus aperture convention (F/1.81) is unexplained (D-3/D-6). |
| D-12 | Paraxial C–F foci are not coincident (−0.126 mm Abbe-linear; −0.128 mm catalog). | Reported; no APO or secondary-spectrum claim. |

Draft corrections caught by the Stage 3 checks or manual review before delivery (author errors, not source issues):
the HOYA-only count ("four" → five); surface 15 described as the largest positive SI term (it is second, after
surface 1 by 0.001); stop-to-G2 motion direction (G2 moves toward the stop); the L7 edge thickening attributed wholly to
the asphere (4.59 mm of the 5.77 mm is the spherical meniscus form; 1.18 mm is aspheric departure); unsupported
statements of design intent and of secondary-spectrum behaviour inferred from glass class; "three anomalous elements"
when L7 also has positive catalog ΔPgF; a claim that L11 has little effect on the axial bundle (G3b SI is −0.277).

## C5. Manual review of interpretive prose and citations

Every ¶ citation was compared with the patent page images: ¶0001, ¶0003–¶0007, ¶0015–¶0018, ¶0024–¶0052, ¶0065–¶0071,
¶0082, ¶0084–¶0090 support the statements attached to them. The table locators (4, 5, 6, 13–18, 28), drawing sheet
2/10, the Article 19 amended claims (received 26 May 2017; claim 1 with (4A)) and the ISR (completed 17 February 2017;
five category-X citations against claim 1) were checked on the page images. Preferred ranges (1)′–(8)′ were read from
¶0026, ¶0029, ¶0033, ¶0039, ¶0042, ¶0048, ¶0052.

Interpretations are labelled as such in the text: the double-Gauss classification, the XA/ED element mapping, the
glass identities, the qualitative reading of Fig. 4 (sign of the C/g separation near the axis; direction of the
close-focus SA curves). Statements about Sony's drive and element counts cite Sony sources only. No sentence attributes
an aberration contribution to an element from its glass class or power sign alone; every such statement points to a
computed Seidel or ray-trace result. Seidel quantities are identified as model values, not patent values.

## C6. Quantitative-claim map

The executable claim map is `results.implementedModel.analysisConsistency.claimMap` (107 entries): each analysis string
is generated from its computed value and must occur verbatim (S3-CLAIMS). Ranking and comparative claims are
recomputed in S3-LOGIC. Governing data revision: `deeb61da…ec08d`. Summary by section:

| Analysis section | Claims | Result pointers |
|---|---|---|
| Identification | Y half-diagonal; Examples 5/6 values and counts; 11/8; one asphere; three νd > 65 crowns | formatHalfDiagonal; siblingScreen; F-STRUCT; S3-LOGIC |
| Optical Architecture | f1/f2/f3 and ratios; marginal heights; G2 length; chief/marginal ratio; TT, TL/EFL, BFD; pupils; type | groupFocal; groupOverEFL; marginal/chiefHeights; G2vertexLength; TT; BFD; EP/XP; F-TYPE |
| Element-by-Element | first lines (nd, νd, glass, f); EFL restored/raw; SI/CI/CII terms; G2a f; L7 edge, lines, θgF; thicknesses; G2b, G3a f; cond (2), (3), (8); L11 Petzval | S3-ELEMENTS; EFL; F-EFL.raw; seidelSurface/Group; elementColour; edgeL7; L7_thetaGF; elementThickness; conditions; petzvalByGroup |
| Glass Identification | table nd/νd/ΔPgF; HOYA-only coordinates; strongest positives; negative non-flint | S3-GLASS-TABLE |
| Focus Mechanism | D9/D15 table; travel; sensitivity; close EFL; close conjugate; working F/#; LSA | var; G2travel; focusSensitivity; EFL_close; closeObjToImage/Beta; realImageSpaceFno; LSA_real_mm |
| Aspherical Surfaces | coefficients; departures; term breakdown; curvature/slope zeros; SI terms | S3-ASPH; asphere13A; seidelTotal |
| Chromatic | subgroup CI/CII table; 60 % offset; LCA; TCA; catalog foci; F−C; ΔPgF range | seidelGroup; G2b_over_G2a_CI; abbeLinear*; catalogFocusOffsets; catalogFminusC |
| Aberration Strategy | group SI/SII/Petzval table; SI check; Petzval sum/radius; distortion | seidelGroup; fullSystemSIcheck; petzvalSum; distortionReal_pct |
| Conditional Expressions | model and Table 28 values; condition (5) bracket; preferred ranges | conditions; sourceModel.raw.conditions.5; PREFERRED_RANGES |
| Verification Summary | EFL; ω; F/#; travel; close; stop sd; front aperture | EFL; halfFieldDeg_fromY; realImageSpaceFno; stopSd_authored; frontClearApertureDiameter |

Marketed values (85 mm, F1.4, 0.12×, 29°, 0.85/0.8 m, 8/11, 11 blades) are source facts from SRC-SONY-SPEC/SRC-SONY-PR
and are kept separate from design values throughout.

## C7. Stage 3 checks

CHAT_PREFLIGHT (verify.py, all PASS): S3-DATA-UNCHANGED, S3-SUPPORT-SELFTEST, S3-SECTIONS, S3-META, S3-ELEMENTS,
S3-GLASS-TABLE, S3-ASPH, S3-CLAIMS, S3-LOGIC, S3-STYLE-DISCLOSURE-CITATIONS, S3-MUTATION. The mutation check alters the
analysis text in memory twelve ways (claim number, element nd, element focal-length sign, section heading, inventor
order, asphere coefficient, glass ΔPgF, HOYA-only count, an APO assertion, a dropped disclosure, an out-of-range ¶,
a ranking value); each fails its targeted check and the unaltered text passes all. All Stage 1/2 checks rerun and pass
with the new evidence and verifier. Two consecutive runs give identical results apart from `environment.runUtc`.
Package replay results are in the manifest (S3-PKG-*). LENSVISUALIZER-scope checks remain as recorded in Part B (run at
commit `3d44a1be` against these same data bytes); none was rerun at Stage 3.

## C8. Gate disposition

The analysis agrees with the verified data revision and its supporting results; all mandatory Stage 1–3 CHAT_PREFLIGHT
checks pass; the data did not change. **Gate: READY_FOR_AUDIT**, bound to the hashes in the manifest, subject to the
package replay checks recorded there.

## C9. Pending integration

Closed 2026-10-10 (see the section at the end of this file). As recorded at the time:

`integrationStatus: INTEGRATION_PENDING`. In addition to B11: the corpus analysis-file sweep and patent-metadata sweep
must include this `.analysis.md`; the viewer's Markdown/math rendering of the asphere equation and tables is untested.

# Part B — Stage 2: data construction and chat preflight

## B1. Inputs and reference versions

Stage 1 package (gate READY_FOR_DATA, revision stage1-r1). The uploaded artifacts used underscore names
(`SonyFE85mmF14GM_evidence.json` and so on); they were normalized to the dotted stem names without content change. All
seven byte hashes equal the Stage 1 manifest. The Stage 1 verifier was replayed in a clean directory: exit 0 and results
identical to the packaged results apart from `environment.runUtc`.

Entry re-inspection: Table 4 was re-rasterized from the patent (PDF p. 23, 5× zoom crops) and all 20 rows were compared with
`evidence.rawPrescription`; Tables 5 and 6 were compared against the page images. No discrepancy was found. No transcription
correction was made at Stage 2.

Controlling project references are unchanged from Stage 1 (hashes in the manifest). A read-only snapshot of the
LensVisualizer repository (commit `3d44a1be91db853725ac841b65a9e228f2c544ef`, source `SRC-LV-REPO`) was used for targeted
LENSVISUALIZER-scope checks. Its `LENS_DATA_SPEC.md` and `LENS_MOUNT_FORMAT_OPTIONS.md` are newer than the project copies.
Impact check: the differences concern `maker: null`, assignment-history assignees, `maxSdRatio`, `indexReferenceNote` and
additional mount/format ids; none applies to this lens. Template, defaults, analysis spec and Prettier configuration are
byte-identical to the project copies.

## B2. Implemented model

`SonyFE85mmF14GM.data.ts` (sha256 `deeb61da…ec08d`) uses the root-level template import, `const LENS_DATA`, a literal-only
payload, `satisfies LensDataInput`, and a default export. It was formatted with Prettier 3.9.9 using `prettierrc.json`
(`--check` clean).

Ledger decisions (evidence `modelingDecisions`):

| ID | Decision |
|---|---|
| MD-01 | Labels `STO` (patent surface 9) and `13A`; others numeric. |
| MD-02, MD-14 | No `rearPlates` (FL plate not tabulated). Surface 20 d = 16.861 mm, the computed paraxial infinity BFD (16.8607) rounded to 0.001 mm. |
| MD-03 | ACCEPTED. Five-decimal nd of the coordinate-exact HOYA glasses; each rounds to the printed value. Disclosed in the data header. |
| MD-04 | `var`: STO [17.857, 5.761], 15 [3.000, 15.097]; varLabels D9, D15. |
| MD-05, MD-10 | `nominalFno` = `apertureDesign` = 1.45; STO sd 19.77 = real-ray stop height of an axis-parallel entry ray at EFL/2.9 (the buildLens derivation). Calibration only. |
| MD-07, MD-13 | `closeFocusM` 0.85 with disclosure; `finiteConjugates` not declared. |
| MD-08 | No scaling; patent K used directly; A4–A8 as published; A10–A14 = 0. |
| MD-09 | 11 elements / 8 groups; doublets G2a (10–12), G2b (13A–15), G3a (16–18). |
| MD-11 | Modeled semi-diameters (B4). |
| MD-12 | Glass labels and spectral fields (B5). |
| MD-15 | Group annotations G1, G2 (FOCUS), G3; `apertureBlades` 11 from Sony's specification. |

Metadata: key `sony-fe-85mm-f14-gm` (no collision in the repository snapshot; the GM II file uses
`sony-fe-85-f14-gm-ii`); name `SONY FE 85mm f/1.4 GM`; maker Sony; `patentNumber` "WO 2017/130571 A1";
`patentAuthors` ["Masaki Maruyama", "Hiroyuki Matsumoto"] (front-page Latin forms; same spellings as existing corpus
entries); `patentAssignees` ["Sony Corporation"] (applicant at the 2017 publication, before the 2021 rename);
`patentYear` 2017; `lensMounts` ["sony-fe"]; `imageFormat` "135-full-frame". Marketed 85 mm / f/1.4 and design
86.85 mm / 1.45 are kept separate.

## B3. Aperture semantics

No stop diameter is published. buildLens replaces the authored STO sd with the real-ray stop height of an entry ray at
EFL/(2·nominalFno); the authored value equals that height (19.7664 mm). For this stop:

- the real image-space marginal ray at infinity gives 1/(2 sin U′) = 1.4486, consistent with the printed 1.45;
- the paraxial F-number of the same stop is 1.414. Stage 1's paraxial calibration (19.276 mm) differs by 2.5% because of
  pupil spherical aberration in G1.

Both statements are calibration consistency, not independent verification of a physical diaphragm.

## B4. Semi-diameters and geometry

All sds are modeled. Requirement envelope (exact meridional real-ray trace, verify.py `ray_requirements`):

- the axial ray reaching the stop rim;
- the off-axis fan at 0.6 of the half-field aimed at ±0.75, ±0.375 and 0 of the stop sd (the LensVisualizer default
  drawn fan);
- the full-field chief ray.

The infinity state is tested at both the paraxial half-field from Y = 21.633 mm (13.987°) and the runtime half-field
reported by buildLens (14.046°). Five focus samples are used: the two published states and three linear-interpolation
samples (focusT 0.25/0.5/0.75), which are not source states.

Target clearance was about 8%. It is reduced where geometry binds:

| Surface(s) | Clearance | Binding constraint |
|---|---|---|
| L1 (1, 2) | 5.5%, 5.3% | edge thickness |
| L2 (3, 4) | 2.9%, 3.3% | edge thickness 0.54 mm at the larger sd |
| 7 | 3.2% | 6→7 gap intrusion 2.680 of 2.723 mm allowed |
| 18, 19 | 3.4%, 2.6% | 18→19 gap intrusion 3.546 of 3.600 mm allowed |

Construction iteration: the first sd set, sized without the chief-ray requirement, let the full-field chief ray exceed
s19/s20 by up to 6% (s20: 16.21 vs 15.3 mm). The chief-ray requirement was added, and s18/s19/s20 became 15.9/15.9/17.5 mm.

Geometry results (portable re-implementation, every sampled state):

- **Edge thickness** (validator form): minimum 0.627 mm at L2. At the larger sd of each element: minimum 0.543 mm at L2; floor 0.3 mm.
- **Rim slope:** maximum 47.2° (limit 64.16°), asphere-inclusive.
- **Conic domain:** satisfied.
- **SD ratio:** within 3.
- **Shared-band intrusion:** within 0.9·gap at every gap.
- **Stop-plane clearances:** at least 1.49 mm before the stop. After the stop: 13.88 mm at infinity and 1.79 mm at the close state.

Coverage limits: meridional rays only. Sagittal/skew rays and complete full-field bundles are not covered; the latter are
heavily vignetted by design. The real validator and production render-trim diagnostics were run separately (B7).

## B5. Glass labels and spectral fields

Each label names the HOYA coordinate-exact candidate first, with a cross-vendor class note. Identification is
inferred, not proven.

The runtime resolver selected the named HOYA glass for every element except L7. M-FDS910 is absent from the runtime
catalog, so L7 stores the HOYA catalog line indices directly: nC 1.81140, nF 1.845532, ng 1.86682.

L2, L3 and L8 carry `apd: "inferred"` and catalog ΔPgF against the engine normal line (0.6438 − 0.001682 νd):

| Element | Glass | ΔPgF |
|---|---|---|
| L2 | FCD1 | +0.0323 |
| L3, L8 | FCD515 | +0.0157 |

The Stage 1 audit's "about +0.031" for FCD1 is refined to +0.0323 on the same normal line. No other element carries
spectral fields. No APO claim is supported.

## B6. Numerical results from the parsed data (verify.py implemented-model branch)

The strict literal loader parses the actual file. Every quantity below is recomputed from parsed values, not from a
hard-coded copy of the intended data.

| Quantity | Value |
|---|---|
| EFL ∞ (y-u = ABCD) | 86.8477 mm (published 86.85) |
| BFD, s20 to paraxial focus | 16.8607 mm (authored 16.861) |
| Track s1→image / TL/EFL | 124.165 mm / 1.430 (neither telephoto nor retrofocus) |
| H from s1 / H′ from s20 | +21.18 / −69.99 mm |
| Entrance / exit pupil | +46.80 mm from s1 / −50.21 mm from s20 (paraxial) |
| Petzval sum / radius | 8.285e−4 mm⁻¹ / −1207 mm |
| G2 travel toward object | 12.096 mm; D9+D15 20.857→20.858 (source rounding) |
| Close conjugate of published gaps | object 733.43 mm before s1; object-to-image 857.59 mm; β −0.1161 |
| Real working F/# (authored stop) | 1.449 ∞; 1.469 close |

Group focal lengths and conditions (1)–(5), (7), (8) equal the Stage 1 restored source model to 1e−9 and lie in their
claimed ranges, including amended (4A). Element fl values (thick lens in air) agree with the authored `fl` to 0.006 mm.

## B7. Check coverage

CHAT_PREFLIGHT (verify.py, all PASS):

- **Loading and parsing:** S2-DATA-LOAD; S2-LOADER-SELFTEST (eight malformed fixtures derived from the real file rejected, positive fixture accepted).
- **Source and structure:** S2-SOURCE-COMPARE (75 field comparisons), S2-STRUCT, S2-META.
- **Numerics:** S2-PARAXIAL, S2-ELEMENTS-CONDITIONS, S2-FOCUS, S2-STOP.
- **Geometry and glass:** S2-GEOM, S2-SD, S2-GLASS.
- **Style:** S2-STYLE-SCAN (portable scan only, not Prettier).
- **Mutation:** S2-MUTATION (R-sign flip, oversize L2 sd, oversize 18/19 sds and undersize s16 sd are each detected).

LENSVISUALIZER scope (run out of band against commit `3d44a1be`; the portable verifier reports these NOT_RUN):

- **tsc 5.9.3** with the repository tsconfig restricted to this file: 0 errors. A mutated copy with a string `nd` failed with TS2322 as expected.
- **validateLensData:** 0 errors. Mutations (L2 sd 32 → edge crossing; 18/19 sd 17.5 → gap intrusion) were reported by the real validator.
- **buildLens:**
  - EFL 86.8477;
  - stopPhysSD 19.7664;
  - EP sd 29.9475;
  - FOPEN 1.45;
  - halfField 14.046°;
  - offAxisFieldDeg 8.428°.
- **computeElementRenderDiagnostics** at focusT 0/0.25/0.5/0.75/1: no trim on any surface (maximum 0 mm; tolerance 0.25 mm).
- **Runtime glass resolution:** HOYA selection for 10 elements; L7 unresolved by name and carried by explicit line indices.

Environment: Node 22.22.2 (repository engines field requests ≥ 24.15; only an EBADENGINE warning), tsx 4.21.0,
dependencies installed with `npm ci --ignore-scripts`. No generate:metadata, corpus test, build or repository write.
These are targeted file-level checks; integration remains pending.

## B8. Correction and discrepancy register (Stage 2 additions)

| ID | Observation | Disposition |
|---|---|---|
| D-1…D-4 | As Part A §6 | Unchanged. D-2 is disclosed in the data header and focusDescription; D-4 implemented as MD-02/MD-14. |
| D-5 | Paraxial stop calibration (19.276 mm) ≠ runtime real-ray stop (19.766 mm) | Runtime semantics adopted; both F-number readings reported (B3). |
| D-6 | Real-ray close working F/# 1.469 vs Fig. 4 header 1.81 | D-3 persists with real rays; convention unexplained; not a construction input. |
| D-7 | FCD1 ΔPgF "about +0.031" (Stage 1 prose) vs +0.0323 recomputed | Refinement, same baseline; the data uses +0.0323. |

There are no transcription corrections and no proposed corrections to the patent.

## B9. Quantitative-claim map (seed for Stage 3; governing data revision `deeb61da…ec08d`)

| Prospective claim | Result pointer | Source |
|---|---|---|
| EFL 86.85 design / 85 marketed | implementedModel.EFL; C2-EFL | Table 6; Sony spec |
| F/1.45 design; stop calibrated | F2-APERTURE; S2-STOP | Table 6 (calibration) |
| 11/8, one asphere, three doublets | S2-STRUCT; F-STRUCT | Table 4; Sony spec |
| Element powers / types / roles | implementedModel.elements | data + verify.py |
| Group powers, conditions (1)–(8), (4A) | implementedModel.groupFocal / conditions; S2-ELEMENTS-CONDITIONS | Table 28; amended claims |
| Inner focus, 12.10 mm travel, close conjugate caveat | implementedModel.G2travel / closeObjToImage / closeBeta | Table 6; D-2 |
| Petzval behaviour | implementedModel.petzvalSum / petzvalTerms | verify.py |
| Pupil positions, TL/EFL, not telephoto/retrofocus | implementedModel.* | verify.py |
| Glass identities, ED/APD statements | S2-GLASS; MD-12; F-GLASS | catalogs (inferred) |
| SD/geometry statements | S2-SD; S2-GEOM; LV render diagnostics (manifest) | modeled |

Interpretive prose and citations in the analysis need a manual check; text matching cannot validate them.

## B10. Gate disposition

All mandatory Stage 1 and Stage 2 CHAT_PREFLIGHT checks pass, and the targeted LENSVISUALIZER checks that were run also
pass. There is no unresolved substantive blocker. **Gate: READY_FOR_ANALYSIS**, bound to the data/evidence/verifier/results
hashes in the manifest.

## B11. Pending integration

Closed 2026-10-10 (see the section at the end of this file). As recorded at the time:

`integrationStatus: INTEGRATION_PENDING`. The following remain for the batch session:

- the repository-wide typecheck/test suite;
- generate:metadata organization into `lens-data/sony/`;
- the corpus render-diagnostics, patent-metadata and analysis-file sweeps.

The out-of-band checks above were run at commit `3d44a1be` only and must be repeated at the integration commit.

# Part A — Stage 1 record (retained)


Job: WO2017130571A1 · Sony FE 85mm F1.4 GM · Example 2 · stem `SonyFE85mmF14GM`.
Stage: 1 (construction-side extraction and first-order verification). This is not the independent Stage 4 review.

## 1. Job and reference versions

The original four-field job card (`SonyFE85mmF14GM.txt`) and the original patent PDF (`WO_2017130571_A1.pdf`, 4,146,942 bytes) are packaged unchanged; their hashes are in the manifest and in `evidence.sources`. The job card fields were parsed by the verifier and equal `evidence.job` (check S1-JOB-ID).

Controlling project references read for this stage (sha256 recorded in the manifest): LensPatentStage1Extraction.txt, LensPatentChatProtocol.md (CHAT-1.0, 2026-09-11), LensPatentDossierContract.md (CHAT-1.0), LensPatentWorkflowGuide.md, LENS_DATA_SPEC.md, LENS_ANALYSIS_SPEC.md, LENS_MOUNT_FORMAT_OPTIONS.md, TEMPLATE_data_ts.template, defaults.ts, prettierrc.json. The taxonomy source file, adding-a-lens guide and integration handoff named by the protocol are not present in the project and were not consulted; LENS_MOUNT_FORMAT_OPTIONS.md supplies the current mount/format ids (`sony-fe`, `135-full-frame`).

Environment adaptation: the protocol's `/mnt/data` handoff paths belong to a different chat runtime. This dossier was built in `/home/claude` and delivered under `/mnt/user-data/outputs/`. `/mnt/transcripts` is read-only here, so no transcript journal entry was written.

## 2. Extraction and conventions

The PDF has no text layer. All numerical values were read from PyMuPDF rasters at 300–500 dpi; signs and exponents were checked on dedicated crops. Page map: PDF page = printed page + 2 for description pages; drawing sheet 2/10 is PDF page 58.

| Item | Locator |
|---|---|
| Lens data, 20 surfaces | [表4] Table 4, PDF 23 (printed 21) |
| Asphere, surface 13: K 0, A4 −4.98661E−06, A6 −2.69634E−09, A8 1.87534E−12 | [表5] Table 5, PDF 23 |
| f 86.85, Fno 1.45, ω 13.99°, D9 17.857→5.761, D15 3.000→15.097, 0.85 m, β 0.118 | [表6] Table 6, PDF 24 |
| Conditions, Example 2 column | [表28] Table 28, PDF 45 |
| Lens section and aberration plots (Y = 21.633, close Fno 1.81) | Fig. 3 / Fig. 4, PDF 58 |
| Definitions, asphere equation, wavelengths | [0065], [0067], [0082] |
| Example 2 description | [0084]–[0090] |

Conventions: R > 0 has its centre of curvature on the image side, confirmed by the prose of [0085]. Indices are d-line, printed to three decimals. The asphere equation is the standard (1+K) form, so the LensVisualizer K equals the patent K with even orders A4–A8 only. Blank index cells mean air, never zero. Surface 9 is the stop (INF radius). The blank distance after surface 20 means the back distance is not published. No scaling is applied.

The transcription was not independently re-extracted by a second reviewer. Its correctness is supported by numerical closure: EFL, all seven Table 28 values, f·tan ω against Y, and gap conservation all reproduce (section 5).

## 3. Model transformations (proposed for Stage 2)

The ordered ledger is `evidence.modelingDecisions`:

- **MD-01:** labels `STO` and `13A`.
- **MD-02:** no `rearPlates`. The FL plate is drawn but not tabulated, so surface 20 d is the computed paraxial infinity BFD in air.
- **MD-03:** recommended 5-decimal index restoration (1.593→1.59282, 1.620→1.62004, 1.821→1.82115, 1.755→1.75520, 1.569→1.56883; 1.618, 1.497 and 2.001 are unchanged). Every restored value rounds to the printed one.
- **MD-04:** two-state `var` on `STO` and `15`.
- **MD-05:** stop semi-diameter from F/1.45 calibration.
- **MD-06:** semi-diameters derived in Stage 2.
- **MD-07:** `closeFocusM` 0.85 with disclosure; no reconstruction to the MF 0.8 m limit.
- **MD-08:** no scaling.
- **MD-09:** 11 elements / 8 groups with doublets 10–12, 13A–15 and 16–18.

## 4. Glass review

An unseeded scan covered all 1,087 usable entries of the bundled HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalogs; catalog files are identified by sha256 in `evidence.sources`. The patent publishes only nd (three decimals) and νd, so νd is the discriminating coordinate and spectral support is catalog-derived only.

| Coordinate | Elements | Coordinate-exact candidates (nd rounds; abs(Δνd) ≤ 0.005) | Notes |
|---|---|---|---|
| 1.618 / 63.40 | L1 | HOYA PCD4 | CDGM H-ZPK1A, SUMITA K-PSKn2, SCHOTT N-PSK53A at Δνd ≈ −0.01; OHARA S-PHM52 at −0.07 |
| 1.497 / 81.61 | L2 | HOYA FCD1, SCHOTT N-PK52A, CDGM D-FK61/H-FK61 family | Fluorophosphate ED class; OHARA S-FPL51 not coordinate-exact (νd 81.54) |
| 1.593 / 68.62 | L3, L8 | HOYA FCD515 (= FCD505 coordinates) | Nearest non-HOYA: SUMITA K-GFK68 (Δνd −0.25, nd 1.5924 does not round), CDGM H-ZPK5 (Δνd −0.28) |
| 1.620 / 36.30 | L4, L5 | HOYA E-F2 | OHARA S-TIM2 at Δνd −0.04 |
| 2.001 / 29.13 | L6, L9 | HOYA TAFD55 / TAFD55-W | HIKARI J-LASFH16, OHARA S-LAH99 within 0.01 |
| 1.821 / 24.06 | L7 (aspheric) | HOYA M-FDS910 (precision-moulding glass) | Nearest non-HOYA: SUMITA K-CD180 (Δnd −0.015, Δνd +0.35) — not coordinate-compatible |
| 1.755 / 27.53 | L10 | HOYA E-FD4 / E-FD4L, CDGM H-ZF6 | OHARA S-TIH4 at −0.02 |
| 1.569 / 56.04 | L11 | HOYA BAC4, CDGM H-BaK7 | SCHOTT N-BAK4 at −0.06 |

HOYA is coordinate-exact for all eight coordinates, and the aspheric L7 coincides with a HOYA moulding glass. This is convergent evidence, not proof of supplier or melt. Recommended label form for Stage 2: the HOYA name with a cross-vendor class note where alternatives tie (G-B, G-G, G-H).

Spectral evidence comes from catalog dispersion formulae only and applies only if the candidate is accepted. The ΔPgF figures below are against the Schott normal line, and Stage 2 must recompute them against the engine baseline:
- FCD1: about +0.031.
- FCD515: about +0.016.
- M-FDS910: about +0.020.

No apochromatic claim is supported.

## 5. Numerical results (verify.py, paraxial, d-line)

The y–u sequential trace and the reduced-angle ABCD agree to 1e−9, with det M = 1. The analytic self-tests (thick singlet, thin pair) pass.

| Quantity | Printed nd | Restored nd (MD-03) | Published |
|---|---|---|---|
| EFL ∞ (mm) | 86.784 | 86.848 | 86.85 |
| BFD, s20 to paraxial focus, air (mm) | 16.827 | 16.861 | not published |
| Track s1 to image (mm) | 124.131 | 124.165 | — |
| TL/EFL | 1.430 | 1.430 | — |
| H from s1 / H′ from s20 (mm) | +21.26 / −69.96 | +21.18 / −69.99 | — |
| Entrance pupil from s1 (mm) | +46.80 | +46.80 | — |
| Exit pupil from s20 (mm) | −50.22 | −50.21 | — |
| Stop semi-diameter at F/1.45 (calibration) | 19.26 | 19.28 | not published |
| Petzval sum Σφ/(nn′) (mm⁻¹) / radius | 8.34e−4 / −1199 | 8.28e−4 / −1207 | — |
| EFL at the close state (mm) | 76.77 | 76.83 | — |

- **EFL tolerance.** The raw-branch EFL residual is −0.066 mm. This lies inside the worst-case printed-index envelope of ±0.49 mm, with RSS about ±0.12. The restored branch is within 0.002 mm.
- **Lens type.** The design is neither telephoto (TL/EFL > 1) nor retrofocus (BFD < EFL).
- **Group powers** (restored, standalone in air):
  - G1 +156.26
  - G2 +79.47
  - G3 −204.41
  - G2a −1000.0
  - G2b +74.22
  - G3a +288.86
  - G3b −112.37
- **Element powers** (standalone thick lens in air, restored):
  - L1 +139.25
  - L2 +172.05
  - L3 +221.31
  - L4 −66.09
  - L5 −31.00
  - L6 +31.80
  - L7 −96.88
  - L8 +43.90
  - L9 +42.07
  - L10 −47.04
  - L11 −112.37

**Conditions, restored (raw values in `results.comparisons`), against Table 28:**

| Condition | Computed | Table 28 |
|---|---|---|
| (1) f3b/f3a | −0.389 | −0.39 |
| (2) (r1+r2)/(r1−r2) | −1.471 | −1.47 |
| (3) f2b/f2 | 0.934 | 0.93 |
| (4) f1/f3 | −0.764 | −0.76 |
| (5) f2a/f2 | −12.58 | −12.59 |
| (7) f2b/f2a | −0.074 | −0.07 |
| (8) r_2a/f | −0.662 | −0.66 |

All lie within their claimed ranges, including amended condition (4A), −1.5 < f1/f3 < 0.2. Condition (6) is not applicable to Example 2.

**Focus.** G2 moves 12.096 mm toward the object, and D15 grows by 12.097 mm, so gap conservation holds to the 0.001 mm rounding. The field check gives f·tan ω = 21.637 mm against the plotted Y = 21.633 mm. For the asphere ([0088]), surface 13 has positive paraxial power (+0.00669 mm⁻¹) and its meridional curvature falls monotonically toward the paraxial axial-marginal height. That sampling height is calculated, not published, so no departure is quoted at Stage 1.

**Geometry.** None at Stage 1. Semi-diameters, edge thickness, rim slope, gap intrusion and render trim are Stage 2 checks (NOT_RUN, requiredAt stage2).

## 6. Correction and discrepancy register

No transcription corrections were needed. No proposed corrections to the patent itself.

| ID | Observation | Evidence | Disposition |
|---|---|---|---|
| D-1 | Printed-index EFL 86.784 vs published 86.85 | C-EFL-raw / C-EFL-restored | Within source precision; MD-03 restoration explains it (86.848). Not a source error. |
| D-2 | Printed close gaps focus at an object-to-image distance of 857.6 mm (restored; 856.7 raw), not 850; abs(β) in focus is 0.1161, not 0.118 | C-CLOSE-DIST-*, C-CLOSE-BETA-* (raw MISMATCH retained) | S1-CLOSE-RESOLUTION PASS. The same-direction mismatch recurs in Example 1 (864.5 mm, 0.093 vs 0.095) although its EFL reproduces, so this is a source convention rather than an Example 2 transcription error. The two alternative readings both fail. If the 0.85 m is measured from the image plane, the image is defocused by +0.10 mm with abs(β) 0.1175. If it is measured from surface 1, the image is defocused by −1.34 mm. Fig. 4 shows close-focus paraxial focus on the image plane. Treatment: keep the published gaps; closeFocusM 0.85 with disclosure (MD-07). |
| D-3 | Fig. 4 close-focus header F/1.81 vs paraxial stop-limited working F/1.51 (calibrated stop) | C-WFNO-* (INCONSISTENT retained) | Same pattern in Example 1 (1.51 vs 1.80). Cause not established; the patent convention is unknown. Not a construction input (OI-07). |
| D-4 | FL plate drawn, not tabulated; back distance blank | Table 4, Fig. 3, [0072] | MD-02; optional source limitation. |

## 7. Manufacturer correlation

Sony's specification page gives the following:
- E-mount, 35 mm full frame.
- 85 mm, F1.4–16, 11 blades.
- 8 groups / 11 elements.
- Minimum focus AF 0.85 m, MF 0.8 m.
- Maximum magnification 0.12×.
- 77 mm filter, 820 g.

Sony's 3 February 2016 release states one XA element, three ED elements, and a ring drive SSM moving a large, heavy focus group, with availability in March 2016.

Example 2 matches on several points:
- The 8/11 construction.
- A single aspheric element.
- Three low-dispersion crowns (L2, L3, L8).
- The 0.85 m close state (equal to the AF minimum focus) with β 0.118 ≈ 0.12×.
- Inner focus by G2.
- Priority date 2016-01-26.

The MF 0.8 m limit is not represented by any published state. The 2024 FE 85mm F1.4 GM II is a different design. No Sony source names this patent, so the correlation is strong but unconfirmed.

Proposed metadata for Stage 2:
- patentNumber "WO 2017/130571 A1".
- patentAuthors ["Masaki Maruyama", "Hiroyuki Matsumoto"].
- patentAssignees ["Sony Corporation"].
- patentYear 2017.
- lensMounts ["sony-fe"], imageFormat "135-full-frame".

## 8. Focus status

**PUBLISHED.** There are two published states (D9, D15), and G2 is the only moving group. No reconstruction is proposed.

## 9. Quantitative-claim map (seed for Stage 3)

| Prospective claim | Result pointer | Governing source |
|---|---|---|
| EFL 86.85 mm design / 85 mm marketed | F-EFL, C-EFL-* | Table 6; Sony spec |
| 11 elements / 8 groups, one asphere, three doublets | F-STRUCT | Table 4; Sony spec |
| Group and element powers, roles | sourceModel.*.groupFocal / elements | Table 4 + verify.py |
| Conditions (1)–(8), (4A) | C-COND*-restored | Table 28; amended claims |
| Inner focus, G2 travel 12.1 mm | sourceModel.*.G2travel | Table 6 |
| Close-state magnification and distance caveat | C-CLOSE-* | Table 6; D-2 |
| Glass identities and APD statements | F-GLASS | catalogs; section 4 |
| Petzval behaviour | sourceModel.*.petzvalSum/Terms | verify.py |

Stage 3 must re-point these to the Stage 2 data revision. Interpretive prose still needs a manual check; text matching alone does not validate it.

## 10. Gate disposition

All mandatory Stage 1 CHAT_PREFLIGHT checks pass:
- Identity, hashes, extraction structure.
- Self-tests and y-u/ABCD agreement.
- EFL raw and restored.
- Conditions, field, gap conservation.
- Close-focus discrepancy resolution.
- Asphere behaviour, glass replay.
- Manufacturer record and focus status.

F-number verification is NOT_APPLICABLE because no stop diameter is published. Remaining items are Stage 2 tasks or integration-only. **Gate: READY_FOR_DATA.**

Stage 2 tasks:
1. Decide MD-03 and state it in the header and analysis.
2. Calibrate the stop semi-diameter to F/1.45.
3. Derive semi-diameters under the current geometry rules.
4. Author surface 20 d as the computed BFD, with no `rearPlates`.
5. Set closeFocusM 0.85 with the D-2 disclosure, and decide whether to declare finiteConjugates.
6. Write honest glass labels.
7. Format with Prettier per `prettierrc.json`.

## 11. Pending integration

Closed 2026-10-10 (see the section at the end of this file). As recorded at the time:

`integrationStatus: INTEGRATION_PENDING`. NOT_RUN (requiredAt integration):
- buildLens / validateLensData.
- LensDataInput type check.
- Render diagnostics.
- Runtime glass resolution.

## 2026-10-10 — Deployment validation, focus-group rims and wording pass

This section is the current record. Where it gives a number that also appears in Parts S4–A above, this section governs.

**Source re-read.** WO 2017/130571 A1 (`patents/WO_2017130571_A1.pdf`, a scan with no text layer). Tables 4–6 on PDF pp. 23–24 were read from 300 dpi renders: 20 radii, 19 thicknesses and gaps, 11 nd/νd pairs, K and A4/A6/A8 of surface 13, and D9/D15 at both states. No mismatch. The stored nd differ from the print only by the five-decimal restoration (MD-03); every νd is as printed. ¶0065 states the d-line (587.6 nm) for Nd and νd, the Fig. 4 plots are drawn at 656.28 / 587.56 / 435.84 nm, and every printed index rounds from the catalogue nd of the inferred HOYA glass and none from its ne, so the indices are d-line values. Table 4 ends at surface 20 with no back distance, plate rows or total length, and ¶0072 says the filter values are omitted; the computed back distance and the absence of `rearPlates` stand.

**Patent against model.** f 86.85 / 86.848 mm (86.784 mm with the printed indices); Fno 1.45 / 1.449 (real ray; the stop is calibrated to it); ω 13.99° / 13.987° by atan(Y/f), engine half-field 14.05°; conditions (1)–(4), (7), (8) reproduce and (5) is −12.59 / −12.58. Close state: 0.85 m and β 0.118 printed, 857.6 mm and |β| 0.1161 in the model. Example 1, traced as a control, reproduces its f = 71.99 mm and shows the same residual (864.5 mm, 0.093 against 0.095), so the residual is a convention of the patent, not a transcription fault. Bibliographic data on the front page (publication 3 August 2017, Sony Corporation, Maruyama and Matsumoto, priority 26 January 2016) agree with the data file.

**Maker diagram.** Sony's construction diagram on the sony.jp product page shows 11 elements in 8 groups with the same cemented pairs, XA on element 7 and ED on elements 2, 3 and 8. That matches the asphere on surface 13A and the `apd: "inferred"` tags on L2, L3 and L8, which were left as they were. It draws the L5–L8 group clearly smaller than the rear of L4 and than the stop region. Among the patent's nine examples only Example 2 combines f ≈ 85 mm, the 11/8 construction, the asphere on the front of L7 and three low-dispersion crowns; Example 6 (f 82.45 mm, 11/8) has its asphere on surface 15 and two such crowns.

**Focus-group rims, surfaces 10–15.** Evidence: Fig. 3 on PDF p. 58 (sheet 2/10) at its native 300 dpi. The optical axis is at y = 884 px. Vertex crossings at x = 560.5 (S1), 863 (S10) and 1167.5 px (S20) give 5.657 px/mm over S1–S20 (107.304 mm) and 5.654 px/mm over S10–S20 (53.859 mm); the drawing is at the infinity state. As a check of the vertical scale, L1 measures 32.3 mm (stored 31.6) and the stop opening 19.6 mm (stored 19.77). Both doublets are drawn square-cut, each at one height. Outline centre-lines: L5–L6 at y = 782 and 985 (101.5 px, 17.9 mm); L7–L8 at y = 785.5 and 981.75 (98.1 px, 17.3 mm).

| Surface | Stored | Figure | Figure / stored | New | F/1.45 axial ray, infinity |
|---|---|---|---|---|---|
| 10 | 21.0 | 17.9 | 0.85 | 17.9 | 16.49 |
| 11 | 21.4 | 17.9 | 0.84 | 17.9 | 16.41 |
| 12 | 21.3 | 17.9 | 0.84 | 17.9 | 15.80 |
| 13A | 21.2 | 17.3 | 0.82 | 17.3 | 15.63 |
| 14 | 21.0 | 17.3 | 0.82 | 17.3 | 15.19 |
| 15 | 20.3 | 17.3 | 0.85 | 17.3 | 14.08 |

The stored values had been sized to pass the full stop beam at the close state. They exceeded the stop (19.77 mm) and, on 13A, the 18.63 mm height at which the polynomial sag turns back. Fig. 4 heads its close-focus plots Fno = 1.81 against 1.45 at infinity, so in the patent's design the focus group, not the stop, limits the close-state axial beam; that beam is therefore not a floor for these rims. The floor used is the F/1.45 axial ray at infinity (last column). The stop and every surface outside 10–15 are unchanged. The repository's surface validator accepted the trial set before the edit and the edited file afterwards.

Clearance after the edit:

- **Infinity.** The F/1.45 axial ray clears every surface, 1/(2 sin U′) = 1.449, and the corner chief ray (13.87°) reaches Y = 21.63 mm with no surface blocking it. Corner coverage is 100% and the image-circle check reports nothing.
- **Close state** (object 733.45 mm before surface 1). The ray through the stop edge would need 19.41 / 20.00 / 19.74 / 19.61 / 19.13 / 18.71 mm on surfaces 10–15 and exceeds the new rims by 1.51 / 2.10 / 1.84 / 2.31 / 1.83 / 1.41 mm. The limiting ray grazes 13A, passes the stop at 17.81 mm (90.1% of its radius) and gives a working F-number of 1.64 (1.469 with the earlier rims; 1.81 printed). This is a cross-check, not a target: the rims were not adjusted toward 1.81, which would need a clear aperture at L7–L8 some 12–16% smaller than drawn.
- **Spherical aberration at the aperture passed.** −0.142 mm at infinity and −0.378 mm at the close state (−0.814 mm with the earlier rims). A ray at F/1.81 gives −0.22 mm, against about −0.25 mm read from Fig. 4.
- **Off-axis.** At the close gaps the full unvignetted corner bundle is now cut by 30–45% of its half-width on surfaces 11–15 (14–27% before); at infinity the focus-group rims do not touch it.

Engine values are unchanged: EFL 86.8477 mm, F/1.45, half-field 14.05°, stop radius 19.766 mm, back distance 16.8607 mm and both focus keyframes. Only the drawn stop-housing height follows the neighbouring rims (21.0 to 19.77 mm). On the rendered page the focus group now sits below the stop edge and level with the rear group, as in Fig. 3; at the close state the outermost drawn rays (5/6 of the aperture) pass just inside its rim and every drawn ray reaches the image.

Numbers in the earlier parts that this change supersedes: the 19.61 mm envelope height on 13A, the close working F-number 1.469, the close-state LSA −0.814 mm, the asphere departure −1.176 mm at 21.2 mm (terms −1.007 / −0.245 / +0.077) and the L7 rim thickness 5.77 mm. Current values: departure −0.504 mm at 17.3 mm (A4 −0.447, A6 −0.072, A8 +0.015), −0.330 mm at 15.63 mm, L7 rim thickness 4.00 mm.

**Fields changed in this pass.**

- Data file: `sd` of surfaces 10–15; the header's semi-diameter note (close-focus note re-wrapped); `subtitle` now "WO 2017/130571 A1, Example 2 — inferred production correlation"; `specs` now "11 ELEMENTS / 8 GROUPS", "DESIGN f = 86.85 mm", "DESIGN F/1.45", "1 ASPHERICAL SURFACE / 1 ELEMENT", "INNER FOCUS (G2)" (the 2ω line dropped).
- Analysis: the close-state F-number paragraph in Focus Mechanism; the heights and departures in Aspherical Surfaces; the L7 rim thickness; the summary section renamed "Model Scope and Limitations" and reduced to model properties, with the two sources of the semi-diameters; Sony's construction diagram cited for the XA and ED positions (source 8); two wording trims.
- This log: the pending-integration notes and the final gate line closed in place.

Open:

- Closed 2026-10-10: HOYA M-FDS910 was added to the runtime glass catalogue from the vendor's formula-1 row (nd 1.82115, νd 24.06, code 821241). L7 now resolves to it, and its stored nC / nF / ng, which equalled the catalogue values (1.811400 / 1.845532 / 1.866820), were removed from the data file; the traced channel indices are unchanged.
- The 0.85 m label against the 857.6 mm paraxial conjugate of the printed gaps. With the object 850 mm from the image plane the model gives β 0.1175 and places the paraxial image 0.10 mm behind the image plane.
- The close-state F-number: 1.64 in the model against 1.81 printed.
- Closed 2026-10-10: the rims outside surfaces 10–15 (surfaces 1–8 and 16–20) were re-measured against Fig. 3 in the section "Semi-diameter pass against the patent figure" below. Surfaces 16 and 17 changed; the rest were kept.
- File stem and key follow a different pattern from the GM II sibling (`SonyFE85mmF14GM` / `sony-fe-85mm-f14-gm` against `SonyFE85mmf14GMII` / `sony-fe-85-f14-gm-ii`).

## 2026-10-10 — Semi-diameter pass against the patent figure

This section closes the open item above for the rims outside the focus group: surfaces 1–8 (G1) and 16–20 (G3). Surfaces 10–15 and the stop were not touched. Where it gives a value for surfaces 16 or 17 that also appears earlier in this file, this section governs.

**Source and scale.** WO 2017/130571 A1 (`patents/WO_2017130571_A1.pdf`), Fig. 3 on PDF p. 58 (sheet 2/10): Example 2 at infinity, read at the scan's native 300 dpi. The dash-dot axis is at y = 884 px. Outline centre-lines cross the axis at x = 560.5 (S1), 602.5 (S2/S3), 639.5 (S4/S5), 670.5 (S6), 685.5 (S7), 703 (S8), 863 (S10), 871.5 (S11), 934.5 (S14), 1017.5 (S15), 1036 (S16), 1119.5 (S17), 1136.5 (S18), 1158 (S19) and 1167.5 px (S20). S1–S20 (107.304 mm) gives 5.657 px/mm and S10–S20 (53.859 mm) gives 5.654 px/mm; every crossing lies within 3 px (0.5 mm) of its prescription position, so the drawing follows Table 4 axially.

The radial scale was checked on features that do not depend on a rim reading:

- The stop ticks end 111 px from the axis: 19.6 mm against 19.77 mm stored.
- The outlines of surfaces 18 and 19, each 3 px wide, merge 89 px from the axis. The prescription leaves a 3 px (0.54 mm) gap at 15.7 mm, which is 88.9 px.
- Surface 19 follows its prescribed sag to within 0.5 px at 60, 80 and 86 px from the axis.
- The outline of surface 1 runs 3–4% outside its prescribed arc. That sets the noise level for the front group.

**Rims read from the figure.** Heights are outline centre-lines, read on one side and confirmed on the other.

| Surface | Stored | Figure | Figure / stored | New | What the figure shows |
|---|---|---|---|---|---|
| 1 | 31.6 | 32.3 | 1.02 | 31.6 | front arc runs to a knife-edge tip 182.5 px from the axis |
| 2 | 31.2 | 29.2 | 0.94 | 31.2 | arc ends about 165 px out; a flat annulus runs on to the tip |
| 3 | 29.2 | 30.1 | 1.03 | 29.2 | front arc runs to a knife-edge tip at 170.5 px |
| 4 | 29.0 | 26.5 | 0.91 | 29.0 | arc ends about 150 px out; a flat annulus runs on to the tip |
| 5 | 27.3 | 27.3 | 1.00 | 27.3 | front arc runs to a tip at 154.5 px |
| 6 | 26.1 | 24.0 | 0.92 | 26.1 | arc merges with surface 7 at 135 px; a flat annulus runs on to the tip |
| 7 | 24.7 | 25.6 | 1.04 | 24.7 | front arc reaches L4's outer cylinder, a flat run 45 px long at 145 px |
| 8 | 22.0 | 20.8 | 0.95 | 22.0 | concave arc ends on a flat rear annulus about 118 px from the axis |
| 16 | 18.3 | 17.3 | 0.95 | 17.3 | G3a is a square-cut block, a flat run about 100 px long |
| 17 | 16.9 | 17.3 | 1.02 | 17.3 | same block |
| 18 | 15.9 | 16.9 | 1.06 | 15.9 | meets surface 19 at the rim |
| 19 | 15.9 | 16.9 | 1.06 | 15.9 | meets surface 18 at the rim; L11's outer cylinder is at 17.9 mm |
| 20 | 17.5 | 17.9 | 1.02 | 17.5 | L11 is a square-cut block, a flat run 26 px long |

**Changed: L9, surfaces 16 and 17.** The outer edges of the G3a outline lie 100 px (upper side) and 99 px (lower side) from the axis. Those are the readings of the L7–L8 doublet, which the section above set to 17.3 mm from the same figure, and 3 px less than L5–L6 and L11 (103 / 102 px, 17.9 mm). The stored set tapered from 18.3 mm at the front of L9 to 15.9 mm at the rear of L10, 14% of the drawn height, and put the front of L9 above every other rim behind the stop. Both faces of L9 now carry the drawn height. The single-surface difference on 16 is 5.5%, inside the absolute scale noise; the change rests on the square-cut shape and on the like-for-like reading against L7–L8, which is good to about 1 px.

**Kept, and why.**

- **Front faces of L1–L3 (1, 3, 5).** Each front arc is drawn out to a knife-edge tip. The prescription's edge thickness at the drawn tip heights is 0.27 mm (L1 at 32.3 mm) and 0.15 mm (L2 at 30.1 mm). The stored rims of L1 and L2 stop 0.7 and 0.9 mm lower, which leaves 0.52 and 0.51 mm of edge; surface 5 agrees. Differences of 0–3% are noise.
- **Rear faces of L1–L3 (2, 4, 6).** The figure ends each concave rear arc on a flat annulus that runs on to the tip, at about 29.2, 26.5 and 24.0 mm (the outline goes exactly perpendicular to the axis from there, where the arc would drift a further 3–4 px). Those heights are 6–9% below the stored values, and they are at or below the F/1.45 axial ray, which needs 29.62, 28.06 and 24.19 mm. The drawn flats therefore cannot be the clear apertures of an F/1.45 lens at this scale, and the axial ray is the floor. The stored values sit 5.3%, 3.3% and 7.9% above that floor; lowering them to it would be a change of 3–7%, inside the noise, so they were kept. Surfaces 6 and 7 touch at 26.1 mm by the prescription, which is the stored value of surface 6.
- **L4 (7, 8).** Drawn flanged: outer cylinder at 25.6 mm, a flat rear annulus, and the concave rear arc ending at 20.8 mm. The stored 24.7 / 22.0 mm give the same stepped shape, each within 5.5%. Surface 8 was not lowered: 20.8 mm would leave 1.9% over the F/1.45 axial ray (20.41 mm).
- **Surfaces 18 and 19.** The figure draws L10 and L11 meeting at their rims. By the prescription they touch at 16.87 mm. The stored 15.9 mm is 6% below that, the corner chief ray needs 15.18 / 15.30 mm (15.38 / 15.50 mm at the engine half-field), and the surface validator's cross-gap limit of 0.9 of the 4.0 mm gap admits 16.0 mm at most. Nothing was raised, and `gapSagFrac` was not requested. For reference, rims of 16.5 / 16.7 / 16.8 mm would need 0.96 / 0.98 / 1.00.
- **Surface 20.** 2% below the drawn 17.9 mm; L11 still stands above G3a as drawn.

**Clearance after the edit.**

- **Checks.** The surface validator accepted the trial set and the edited file with no errors. The image-circle check reports nothing, and corner coverage is 100% (13.9° reaching 21.65 mm).
- **Infinity.** On surfaces 16 / 17 the F/1.45 axial ray is at 12.03 / 9.09 mm and the corner chief ray (13.87°, Y = 21.63 mm) at 14.01 / 14.93 mm, against 17.3 mm. No surface clips the axial ray or blocks the chief ray.
- **Drawn off-axis fan.** At 0.6 of the field (8.43°) the ray through +0.75 of the stop radius would need 16.82 / 15.49 mm on 16 / 17 at infinity and 14.35 / 13.08 mm at the close gaps.
- **Transmitted bundle.** A dense meridional scan with every rim applied passes the same share of the stop diameter before and after the edit. At infinity: 100 / 92.3 / 80.2 / 74.4 / 60.6 / 42.4% at 0 / 5 / 8.43 / 9.8 / 12 / 13.87°. At the close state (object 733.45 mm before surface 1): 90.1 / 88.7 / 85.1 / 80.5 / 72.6 / 60.4% at 0 / 5 / 8 / 10 / 12 / 13.3°. The rays surface 16 now stops were already stopped at surface 18. The close-state axial share of 90.1% is the working F-number of 1.64 recorded above.
- **Engine values.** Unchanged: EFL 86.8477 mm, F/1.45, half-field 14.046°, stop radius 19.766 mm. The rims that limit the field are still 19 (14.0°), 18 (14.7°) and 20 (15.1°); surface 17 moved from 15.7° to 16.1°, and surface 16 (17.4°) replaces surface 15 (18.2°) as the fifth.

**Rendered page.** At infinity and at the close state L9 draws as a square block level with L7–L8 and just below L5–L6, as in Fig. 3. L10 steps down to 15.9 mm at its rear and L11 rises from 15.9 to 17.5 mm, where the figure draws the two meeting at a common rim. Every drawn on-axis ray reaches the image at both states.

**Maker diagram.** Not viewed again in this pass. The comparison recorded in the section above stands: 11 elements in 8 groups with the same cemented pairs, XA on element 7, ED on elements 2, 3 and 8, and the L5–L8 group drawn smaller than the rear of L4.

**Fields changed in this pass.**

- Data file: `sd` of surfaces 16 (18.3 to 17.3) and 17 (16.9 to 17.3), and the header's semi-diameter note.
- Analysis: the two bullets on the sources of the semi-diameters in "Model Scope and Limitations". No aspherical surface changed, so no departure was recomputed.
- This log: the open item above closed in place.

Numbers in the earlier parts that this change supersedes: the envelope margins of surfaces 16 and 17 in Parts B4 and S4-4 (about 8% over the envelope). Surface 16 now clears the 0.6-field fan ray by 2.9%, below the 1.030 minimum quoted in S4-4.

Open:

- **Mid-field bundles at infinity.** The focus-group rims set in the section above bound the upper edge of off-axis bundles from about 5° of field. At 0.6 of the field the passed bundle ends at 0.714 of the stop radius, so the ray through +0.75 of the stop radius is stopped in the focus group (it would need 17.84 mm on surface 15 against a rim of 17.3 mm). That section's statement that the focus-group rims do not touch the bundle at infinity holds for the corner bundle, whose upper edge is set by surface 18, and not for mid-field bundles. The equality of the transmitted bundle before and after this pass holds with those rims as they stand; with wider focus-group rims surface 16 would become a limiter near 0.6 of the field.
- **Surfaces 18 and 19.** Their 15.9 mm rims are the upper-ray limit of G3 from about 12° of field. At 16.8 mm, just under the drawn contact height, the corner bundle would pass 49.3% of the stop diameter instead of 42.4%.
- **Rear faces of L1–L4.** The model does not reproduce the flat annuli the figure draws behind surfaces 2, 4, 6 and 8; its rear arcs run 5–9% further out than drawn.
- **Scope of the trace.** Meridional rays only.
