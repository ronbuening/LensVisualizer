# Audit Record — Zeiss Sonnar Superachromat f5.6 250mm CFE

Stages 1–3 (extraction, first-order verification, data construction and analysis authoring). This is a construction-verification record, not the independent Stage 4 audit. Stage 1 sections are retained; Stage 2 additions are in §13–§19; Stage 3 additions are in §20–§27. §10–§12 record the Stage 2 disposition and are superseded for Stage 3 by §26.

## 1. Job and reference versions

| Item | Value |
|---|---|
| Patent | US 3,883,229 (granted 1975-05-13; filed 1973-02-14; priority DE 2208163, 1972-02-22) |
| Inventors / assignee | Fritz Determann, Heinz Zajadatz / Carl Zeiss-Stiftung |
| Embodiment | Example 2 (printed "Example II"); repeated in claim 7 |
| Output stem | `ZeissSonnarSuperachromatf56250mmCFE` |
| Patent SHA-256 | `1c51f5c63b6533feb563d1108bb63491a9ca123671f0d1b35f436017911b0b3b` |
| Job card SHA-256 | `66c1db06984a342434d622b3a49bfe67dab488a966058261076b160ccd86e47a` |

Controlling project references were read from `/mnt/project/`. Their hashes are recorded in the manifest. They include `LensPatentChatProtocol.md` and `LensPatentDossierContract.md` (CHAT-1.0, 2026-09-11), `LensPatentStage1Extraction.txt`, `LENS_DATA_SPEC.md`, `LENS_ANALYSIS_SPEC.md`, `LENS_MOUNT_FORMAT_OPTIONS.md`, `TEMPLATE_data_ts.template`, `defaults.ts` and `prettierrc.json`. The project's taxonomy reference, authoring guide and integration handoff were not present in `/mnt/project/`; this is recorded as unavailable.

Operating-environment note. The prompts are written for ChatGPT (`/mnt/data`). This run used Claude's sandbox (`/home/claude` for work, `/mnt/user-data/outputs` for delivery). The stage directory and archive names follow the contract's naming.

## 2. Extraction and conventions

The PDF is image-only (10 pages of native 2320×3408 scans, about 280 dpi). All values were read visually from the native images. Every row was re-read at high zoom and cross-checked against the claim 7 repetition.

Example II has 12 spherical surfaces and 6 air-spaced elements. The parts are T1 = L1 + L2, T2 = L3, T3 = L4 + L5 and T4 = L6. The iris is drawn in gap d10.

The table publishes the following for each element: glass name, P** = (nF − ni)/(nF − nC), P* = (nF − nt)/(nF − nC), glass range number, and element power × structural length. It publishes no nd or νd. The d-line is defined as He 587.6 nm.

System values are focal length 1.0, back focus .4926, structural length .8875 (first vertex to image), 1:5.6 and half field 8.5°. The sign convention is the standard one: R > 0 means the center of curvature lies on the image side. No sign changes are needed for LensVisualizer.

The published powers were confirmed to be **thick-lens** powers. A thin-lens back-solve of L1 gives n = 1.583, which is incompatible with LaFN 8 (check C-CONV-THICK).

## 3. Model transformations (ledger: `evidence.modelingDecisions`)

- **MD-01: index recovery.** Element indices were back-solved from the published thick powers. Proposed nd values (5 decimals) are L1 1.73499, L2 1.43388, L3 1.68247, L4 1.62097, L5 1.68248, L6 1.56445. Using catalog nd instead is kept as a sensitivity branch.
- **MD-02: R3.** The description table gives .17249 and claim 7 gives .17248. This cannot be decided numerically (see CR-1). The description value is adopted.
- **MD-03: L1 power.** The description gives −.563798 and claim 7 gives −.56798. The claim value is a dropped digit.
- **MD-04: scale.** Proposed scale is s = 249.2 mm, the manufacturer's design focal length. The marketed nominal is 250 mm.
- **MD-05: stop.** Placement is a Stage 2 decision. Feasibility data are in §5.
- **MD-06: focus.** Unit-focus reconstruction is proposed.
- **MD-07: semi-diameters.** These are a Stage 2 task.

## 4. Glass review

Method: back-solved nd, combined with an unseeded search of six vendor catalogs plus the Schott 2008 obsolete-glass list, matching on (nd, P**, P*). The patent's P values were also replayed from catalog Sellmeier coefficients, which are stored in the evidence file for offline replay.

| El. | Patent name | n back-solved | Catalog (Schott 2008 AGF) | Δn | P**/P* catalog vs patent | Label |
|---|---|---|---|---|---|---|
| L1 | LaFN 8 | 1.734990 | LAFN8 1.735197 / 41.59 | −2.1e-4 (rounding bound 3.0e-4) | −1.9314/1.7494 vs −1.9321/1.7489 | LaFN8 class (735416) |
| L2 | Fluorspar | 1.433883 | CaF₂ (Lithotec) 1.433848 / 95.23 | +3.6e-5 | −1.7282/1.8032 vs −1.7237/1.7873 | CaF₂ crystal |
| L3, L5 | LaF 20 | 1.682473 / 1.682483 | LAF20 1.682476 / 48.20 | ≤ 7e-6 | −1.8633/1.7640 vs −1.8623/1.7634 | LaF20 class (682482) |
| L4 | F 11 | 1.620972 | **FN11** 1.620962 / 36.18 | +9e-6 | −2.0645/1.7305 vs −2.0746/1.7289 | FN11 class; patent name "F 11" |
| L6 | LF 8 | 1.564447 | LF8 1.564435 / 43.75 | +1.2e-5 | −1.9226/1.7525 vs −1.9217/1.7519 | LF8 class (564438) |

No catalog entry named "F 11" was found. FN11 matches the back-solved index to 1×10⁻⁵, while F2 and F9 miss by 5–9×10⁻⁴ and their P** is off by more than 0.07 in the same data. Every current-catalog alternative (N-F2, S-TIM 2, E-F2, H-F4, J-F2) is about 9×10⁻⁴ low.

L2 is a crystal, not a fluorophosphate glass. S-FPL53 and FCD100 differ by 3–5×10⁻³ in nd. The manufacturer data sheet confirms that "crystals" are used.

The Sellmeier data come from a 2008 Zemax-format Schott file redistributed in the KrakenOS repository, not from a file hosted by Schott. Labels are therefore class-level, not melt identities.

The patent gives no nC, nF, ng or PgF. Catalog-derived values (for example CaF₂ PgF 0.5388, FN11 0.5889) must be labeled as catalog-derived if Stage 2 uses them. All proposed nd values round-trip within the runtime window (Δn ≤ 0.003); the νd values are catalog values.

## 5. Numerical and geometry results (all from `verify.py`, results in `results.json`)

**First order.** The proposed model is the back-solved indices rounded to 5 decimals with R3 = .17249. Two independent implementations (y-nu trace and ABCD matrix) agree to within 1e-10.

| Quantity | Proposed model | Published | Back-solved, unrounded | Catalog indices |
|---|---|---|---|---|
| EFL | 1.000036 | 1.0 | 0.999995 | 1.000644 |
| BFD | 0.492608 | .4926 | 0.492582 | 0.493026 |
| Structural length | 0.887495 | .8875 | 0.887469 | 0.887913 |

- **Telephoto ratio** TL/EFL = 0.8875, so the design is a verified telephoto.
- **Principal planes** (normalized): H is 0.4273 in front of the first vertex and H′ is 0.5074 in front of the last vertex.
- **Petzval sum** Σφ/(nn′) = +0.0463 (normalized), giving a Petzval radius of −21.6 f.

**Element powers.** Values are standalone thick powers at f = 1, followed by focal length at the 249.2 mm scale.

| Element | Power | Focal length (mm) |
|---|---|---|
| L1 | −0.6353 | −392.3 |
| L2 | +3.7384 | +66.7 |
| L3 | −2.7751 | −89.8 |
| L4 | +1.6807 | +148.3 |
| L5 | +1.0163 | +245.2 |
| L6 | −3.3810 | −73.7 |

All six reproduce the published power × SL within the 5-decimal index-rounding tolerance.

**Part powers.** T1 +3.0046, T2 −2.7751, T3 +2.6921, T4 −3.3810; L1–L5 combined +2.6796.

**Patent conditions.**
- Power characteristics A to E all pass. A = −0.5638 sits right at the −0.56 edge of the allowed range −0.74 ± 0.18.
- All published P**/P* values lie inside their stated glass ranges. Claim 1 prints Range 4 as "P** = 2.091" without the minus sign; this is treated as claim typography.

**Comparison with the manufacturer data sheet** (scaled ×249.19 so that EFL = 249.2 mm):

| Quantity | Model | Zeiss CFE sheet (2002) | Δ |
|---|---|---|---|
| BFD | 122.8 mm | 117.0 mm | +5.8 |
| First-to-last vertex | 98.4 mm | 103.9 mm | −5.5 |
| Total track | 221.2 mm | 220.9 mm | +0.3 |
| H in front of first vertex | 106.5 mm | 110.0 mm | −3.5 |
| H′ in front of last vertex | 126.4 mm | 132.1 mm | −5.7 |

**Stop feasibility.** The stop is scanned through d10; the fraction is measured from R10.

- **Fig. 2 estimate (0.81):** entrance pupil 130.7 mm behind the first vertex, exit pupil 4.9 mm in front of the last vertex.
- **Matching the Zeiss entrance pupil (136.8 mm):** requires a fraction of 0.90.
- **Matching the Zeiss exit pupil (8.1 mm):** requires a fraction of 0.63.

These two pupil conditions conflict because production is not Example II. Stage 2 must choose a stop position and disclose which condition it follows.

**Unit-focus feasibility.** With the object 3.0 m from the film, the model needs a BFD extension of +25.9 mm and gives magnification −0.1040, i.e. 1:9.62. The data sheet gives 1:9.6 (check C-FOCUS-UNIT).

**Geometry.** Semi-diameters, edge thickness and rim slope are Stage 2 tasks (NOT_RUN, requiredAt stage2). L6 is thin: 2.04 mm at the center.

## 6. Correction and discrepancy register

| ID | Item | Status |
|---|---|---|
| CR-1 | R3 .17249 (description) vs .17248 (claim 7) | Unresolved in source; description adopted (MD-02). **Correction to a pre-dossier chat statement:** an exploratory calculation had said BFD discriminates in favor of .17249. That calculation held L2's index fixed. With L2 re-solved from its published power, both readings give BFD 0.49258. At fixed index the difference is 1.4e-4 in BFD (0.04 mm at scale). |
| CR-2 | L1 power −.56798 (claim 7) vs −.563798 (description) | Claim dropped a digit; the claim value would imply n = 1.7414, 6.2e-3 above LaFN8 (C-L1-CLAIM). |
| CR-3 | Claim 1 Range 4 printed "P** = 2.091" | Sign omitted in the claim; the description (−2.091) is used. |
| CR-4 | "F 11" not a known catalog name | Labeled as FN11 class; not a correction to the patent. |
| CR-5 | Production vs Example II (BFD, vertex length, H, H′) | Documented contradiction; correlation is family-level. |
| CR-6 | Fluorite P* 1.7873 (patent) vs 1.8032 (Lithotec Sellmeier) | Recorded; IR-dispersion data differences; not used to change the prescription. |

## 7. Product correlation

The manufacturer data sheet (Carl Zeiss Camera Lens Division, 29.05.2002, Cat. No. 10 45 50) lists:

- 6 elements in 6 groups, f/5.6–45, f = 249.2 mm, 55×55 mm format, 18° diagonal field.
- Focusing ∞ to 3.0 m, maximum scale 1:9.6.
- Entrance pupil 136.8 mm behind the first vertex (Ø 44.6 mm); exit pupil 8.1 mm in front of the last vertex (Ø 22.5 mm).
- Hasselblad CFE mount with Prontor CFE shutter.
- "Very special optical glasses and crystals".
- Superachromatic correction from 400 to 1000 nm, T coating (not T*), and a focusing ring that rotates beyond infinity.

lens-db (third party, used only for the timeline) gives C 1972, CF 1982 and CFE 2001/2002.

The selection of Example II rests on several matching points: the same element and group count, the same f-number, the fluorite element, the matching total track, the Zeiss assignee, and a priority date in the year the lens was introduced. No primary source states that Example II is the production prescription, so this is a research correlation, not a manufacturer-confirmed attribution. Proposed metadata: `lensMounts: ["hasselblad-v"]`, `imageFormat: "6x6"`.

## 8. Focus disposition

Proposed status: **CONSTRAINED_RECONSTRUCTION**, by unit focusing. The only unknown is the close-focus BFD, constrained by the 3.0 m distance and checked against the 1:9.6 maximum scale. The unit-focus mechanism is inferred from the Hasselblad V helicoid architecture; the data sheet does not state it in words. Stage 2 must implement and re-verify this with the authored data.

## 9. Quantitative-claim map (facts for Stage 2/3)

| Future claim | Fact or result | Governing source |
|---|---|---|
| Element count, groups, spherical-only | F-ELEMENTS | PAT Ex. II; ZDS |
| EFL, BFD, telephoto ratio | F-EFL-NORM, F-BFD-NORM, F-TELE; `sourceModel.branches` | PAT + verify.py |
| Element and part powers, roles | `sourceModel.elementPowers`, `partPowers` | verify.py |
| Glass labels, νd, catalog spectral values | F-GLASS; `catalogSpectral` | AGF (catalog-derived) |
| Patent conditions A–E, glass ranges | C-COND-*, C-RANGE-* | PAT |
| Focal length 249.2 mm, pupils, close focus 3.0 m, 1:9.6 | F-FOCAL-MFR; `productCorrelation.manufacturerData` | ZDS |
| Focus mechanism | F-FOCUS, C-FOCUS-UNIT | inference plus ZDS constraints |

A manual check of interpretive prose and citations is deferred to Stage 3/4; there is no analysis text yet.

## 10. Independent review

Not performed. Stage 4 will do it. No independence is claimed at Stages 1–2.

## 11. Gate disposition

Stage 1: READY_FOR_DATA (retained). Stage 2: all mandatory CHAT_PREFLIGHT checks pass (92 PASS, 0 FAIL; the remaining checks are integration-only NOT_RUN). Gate: **READY_FOR_ANALYSIS**, bound to the data/evidence/verifier/results hashes in the manifest.

## 12. Pending integration

(Closed 2026-10-20: integrated into the repository.) `integrationStatus: INTEGRATION_PENDING`. Targeted LensVisualizer checks were run on this file (§17), but corpus tests, `generate:metadata` and the full build were not run, and the Node version used (22.22.2) is older than the repository's declared runtime (≥24.15).

## 13. Stage 2 entry gate

The incoming files matched the Stage 1 manifest hashes. Upload renaming (`_evidence.json` etc.) was normalized back to the dotted stem; contents are unchanged. The Stage 1 verifier reran with 64 PASS / 0 FAIL. Fig. 2 was re-inspected on the native scan; an independent rough estimate of the iris position (about 0.77 of d10) agrees with the Stage 1 measurement of 0.81 ± 0.05.

Reference impact check: the repository `LENS_DATA_SPEC.md` and `LENS_MOUNT_FORMAT_OPTIONS.md` (commit 902eab5) are newer than the project copies. The differences are the assignment-history rule for assignees and new cinema formats. Neither affects this file, because the front page names the assignee and the format is 6×6.

## 14. Stage 2 construction (ledger: MD-04 to MD-11)

| Item | Implementation |
|---|---|
| Scale (MD-04) | Every printed R and d × 249.2 exactly. EFL 249.209 mm. Stage 1 comparison tables had used s = 249.191; the effect is ≤ 0.01 mm. |
| Indices / glass (MD-01, MD-09) | nd = back-solved values rounded to 5 decimals. νd and dPgF come from the AGF Sellmeier data, with dPgF measured against the engine's normal line 0.6438 − 0.001682 νd. Labels are class-level. L2 alone has `apd: "inferred"`. No nC/nF/ng are stored, because the patent publishes none. |
| Stop (MD-05, MD-08) | STO placed in d10 at 0.81 from R10, splitting d10 into 16.40229 + 3.8474528 mm. STO.sd = 11.95 mm, the real marginal-ray height for EP Ø 44.58 mm (nominalFno 5.59). This value is calibrated to the Zeiss EP Ø 44.6 mm. |
| Back focus (MD-10) | 122.758 mm, the paraxial value 122.7578 rounded. The published .4926 × 249.2 = 122.756 mm. |
| Focus (MD-06) | Unit focus: `var["12"] = [122.758, 148.665]`, with closeFocusM 3.0 (object-to-image). Extension is 25.907 mm; magnification −0.10396 (1:9.62) against Zeiss 1:9.6. |
| Semi-diameters (MD-07) | Exact-ray envelopes of the full on-axis pupil and the 9.03° chief ray at INF, MID and CLOSE, +8%, rounded up to 0.1 mm, one value per element. L6 also covers rays transmitted through the stop, +3%. Result (mm): L1 24.1, L2 23.1, L3 22.2, L4 20.1, L5 18.7, STO 11.95, L6 12.9. |
| Metadata (MD-11) | key `zeiss-sonnar-superachromat-250f56-cfe`; maker "Carl Zeiss Oberkochen"; assignee "Carl-Zeiss-Stiftung" (corpus canonical form); `hasselblad-v` / `6x6`; "US 3,883,229" (no kind code printed). |

No cover glass, filters or dummy planes are present in the source; none were added.

## 15. Final-file recomputation (verify.py, Stage 2 branch)

The verifier loads the packaged `.data.ts` with a strict literal lexer/parser. It accepts only literals, rejects duplicate keys and leftover tokens, and uses no eval and no regex rewriting. A self-test confirms that malformed fixtures are rejected (duplicate key, spread, arithmetic, call, identifier-prefixed number, leftover tokens, missing comma). A mutation test confirms that an R5 change of +0.01% fails the source comparison. All quantities below are recomputed from the parsed values.

| Quantity (INF) | Parsed model | Source / reference | Treatment |
|---|---|---|---|
| EFL | 249.209 mm | 1.0 × 249.2 | Δ 0.009 mm, within source precision |
| BFD (paraxial) | 122.758 mm | .4926 × 249.2 = 122.756 | Δ 0.002 mm |
| Structural length | 221.164 mm | .8875 × 249.2 = 221.165 | Δ −0.001 mm |
| TL/EFL | 0.8875 | < 1 | Telephoto verified |
| H / H′ | 106.49 mm in front of V1 / 126.45 mm in front of last vertex | ZDS 110.0 / 132.1 | Production differs (CR-5) |
| Petzval sum | +1.859 × 10⁻⁴ mm⁻¹ (radius −5381 mm) | — | Surface-by-surface φ/(n n′) |
| Element powers | All six reproduce the published power × SL | Patent table | Within index-rounding tolerance |
| Part powers (mm⁻¹) | T1 +0.01206, T2 −0.01114, T3 +0.01080, T4 −0.01357 | — | — |
| Entrance pupil | 130.67 mm behind V1, Ø 44.58 mm | ZDS 136.8 mm, Ø 44.6 | Diameter calibrated; position from Fig. 2 |
| Exit pupil | 4.93 mm in front of last vertex | ZDS 8.1 mm | Production differs |

Geometry (all states; unit focus leaves the internal gaps unchanged):
- **Edge thickness:** minimum 0.95 mm, at L2, the binding constraint.
- **Rim slope:** maximum 35.2°, against a limit of 64.2°.
- **Gap intrusion:** maximum 0.36 of the gap (STO→L6), against a limit of 0.9.
- **SD ratio:** 1.0.

Exact-ray containment at INF, MID (focusT 0.5, object 5.38 m) and CLOSE:
- On-axis rays are limited only by the stop.
- The full-field chief ray passes.
- No post-stop vignetting occurs.

Modeled geometric transmission is 73–76% at 60% field and 51–52% at full field, clipped first at R1. These figures depend on the modeled SDs and are not production data.

## 16. Correction register additions

- **CR-7 — Prettier report.** An in-chat progress report said Prettier `--check` passed on the draft. That was wrong: the repository `.prettierignore` excludes `src/lens-data/`, so the file was silently skipped. The draft also contained a generator substitution bug (`yScFill: Y0.6`). The generator was fixed and Prettier was rerun with `--ignore-path /dev/null` against the attached configuration. Prettier rewrote the glass strings containing double quotes to single-quoted form. tsc and the strict parser both reject the old text.
- **CR-8 — STO.sd.** The draft used the paraxial value 12.06 mm. The final file uses the real-ray value 11.95 mm, matching runtime `stopPhysSD` (11.9497). The L6 SD was re-derived under the documented rule, changing from 13.1 to 12.9 mm.

## 17. LensVisualizer-scope runs (targeted, real code)

These ran on LensVisualizer commit 902eab5 (`npm ci --ignore-scripts`, Node 22.22.2) against an untracked root-level copy of the data file, with no git writes.

| Check | Status | Result |
|---|---|---|
| `tsc --noEmit` (TypeScript 5.9.3) | PASS | Type check succeeds |
| Prettier 3.8.1 `--check` | PASS | File conforms |
| `validateLensData` | PASS | No errors |
| `buildLens` | PASS | EFL 249.20903 mm; stopPhysSD 11.9497 mm |
| Render diagnostics at focusT 0 and 1 | PASS | Hidden trim 0.00 mm |
| `resolveCompatibleGlass` | PASS | L2 → CaF2; the others are intentionally unresolved and fall to the Abbe path with dPgF |
| Corpus tests, `generate:metadata`, full build | NOT_RUN | Integration only |

## 18. Quantitative-claim map additions (Stage 3)

| Claim | Fact / result | Governing |
|---|---|---|
| EFL, BFD, track, telephoto ratio, H/H′ | F2-EFL, F2-BFD, F2-TRACK, F2-TELE, F2-PRINCIPAL | data.ts (this revision) + verify.py |
| Element/part powers, fl fields | F2-POWERS | data.ts + PAT |
| Pupils, f-number (calibrated) | F2-PUPILS; C2-FNO | ZDS + MD-05/08 |
| Close focus, extension, 1:9.62 | F2-FOCUS | MD-06; ZDS |
| Vignetting / SD-dependent statements | F2-VIGNETTING | MD-07 (modeled) |
| Glass labels, νd, dPgF | F2-GLASS | AGF (catalog-derived) |
| Metadata strings (name, mounts, patent fields, specs) | F2-METADATA | ZDS, PAT, corpus canonical names |

A manual check of the interpretive prose remains a Stage 3/4 task. The data-file `role` strings make only patent-table statements (part, glass range, power characteristic).

## 19. Stage 2 limitations

- The stop position is a figure estimate.
- Semi-diameters and vignetting are modeled.
- The close focus is a reconstruction.
- Glass labels are class-level, and dispersion uses catalog values plus the Abbe fallback for four elements.
- The model is Example II, not the production prescription (CR-5).

## 20. Stage 3 entry gate

| Item | Result |
|---|---|
| Inputs | Stage 2 dossier as uploaded (underscore-renamed: `_data.ts`, `_evidence.json`, …); normalized to the dotted stem, bytes unchanged |
| Hashes vs Stage 2 checkpoint | data `8a8ca092…`, evidence `ffb9f362…`, verifier `10f4398c…`, results `c4d2def1…`: all match |
| Verifier replay | Stage 2 verifier rerun on the current files: 92 PASS, 0 mandatory failures; output equal to packaged `results.json` except run timestamp |
| Controlling references | All 14 `/mnt/project/` references re-hashed; unchanged from the Stage 2 manifest; no impact check needed |
| Disposition | Stage 2 approval transfers to the same bytes; no reopening required |

## 21. Data revision status

The `.data.ts` did **not** change in Stage 3 (SHA-256 `8a8ca0925ee4bdb6a6b764e066aaef8afd209194814e40f91c5380c08fde8133`). The evidence file is also unchanged (`ffb9f362…`). No upstream data or source-model error was exposed by the analysis; the upstream-correction rule was not invoked. Stage 3 literature and the re-fetched data sheet are recorded here (§24) rather than in evidence, so the Stage 2 checkpoint binding of evidence remains valid. With the extended verifier, every Stage 1/2 check and the full `implementedModel` are reproduced bit-identically (Stage 3 values are added under `implementedModel.stage3`).

## 22. Verifier extension (Stage 3 branch)

`verify.py` derives Stage 3 from the presence of `<stem>.analysis.md`. New computations, all on the parsed data file:

| Check | What it establishes | Result |
|---|---|---|
| C3-POWER-DECOMP | Σ y_s φ_s / y₁ reproduces 1/EFL; per-element shares and marginal heights | PASS (residual < 1e-9) |
| C3-TELE-SPLIT / -BFD | Front L1–L5 f = 93.00 mm; L6 magnification 2.68 by EFL/f_front and by finite-conjugate trace; L6 image lands at the BFD | PASS |
| C3-PETZVAL-ELEM | Per-element Petzval terms sum to the surface-by-surface total | PASS |
| C3-CHROM-OFFSET | Paraxial colour proxy insensitive to offset vs unshifted catalog indices (max 0.8 µm) | PASS |
| C3-CHROM-EXTREMA | Proxy curve over 365–1014 nm has two interior extrema (406, 656 nm) | PASS |
| C3-CHROM-SENS | F–C residual nulled by 0.46–1.78 % dispersion change in one element | PASS |
| C3-CHROM-EXTREMA-ROBUST | ±1 % single-element dispersion scaling: L2, L3 or L4 changes the curve form (0 extrema) | PASS (executed; result is “form not stable”) |
| C3-CHROM-LIN | Linearized element terms; net F–C 0.46 % of largest term | PASS |
| C3-SA | Exact-ray zonal SA at d, f/5.59 | PASS |
| C3-DIST | Real-chief-ray distortion; spread 0.0028 % for stop fraction 0.76–0.86 | PASS |

Analysis gate: C3-CLAIMS (128 mapped strings, 0 missing), C3-CLAIMS-MUTATION (perturbed values detected), C3-META, C3-SECTIONS, C3-DISCLOSE, C3-STYLE, C3-LENGTH — all PASS. An external mutation (0.127 → 0.137 mm in the analysis) made C3-CLAIMS fail as intended.

Totals: 111 checks; 110 PASS; 1 NOT_RUN (LV-CORPUS, `requiredAt: integration`). Mandatory CHAT_PREFLIGHT checks for stages 1–3: all PASS.

## 23. Quantitative-claim map (Stage 3)

The executable map is `results.json#claimMap` (each entry: claim ID, exact text required in the analysis, provenance). Summary by analysis section:

| Analysis section | Claim IDs | Fact / result | Governing revision / source |
|---|---|---|---|
| Identification (ZDS differences) | Q-VL, Q-BFD, Q-ZDS-VL/-BFD/-H/-HP, Q-TRACK, Q-ZDS-HALF | F2-TRACK, F2-BFD, F2-PRINCIPAL, implementedModel.vertexLength | data.ts `8a8ca092…`; ZDS |
| Optical Architecture | Q-EFL, Q-TELE, Q-H, Q-HP, Q-FRONT-F/-IMG, Q-REAR-M, Q-T1–T4, Q-HEIGHTS, Q-PSHARE-*, Q-GEO-T1T2/T2T3 | F2-EFL, F2-TELE, F2-PRINCIPAL, F3-TELE-SPLIT, F2-POWERS.parts, F3-POWER-DECOMP | data.ts |
| Element-by-Element (first lines, headings) | Q-EL-*, Q-ELF-*, Q-ELH-* | data.ts `elements` (nd, vd, fl, type) | data.ts |
| Element-by-Element (prose) | Q-GEO-*, Q-L13-F/-LEN, Q-L4-SURF, Q-PZ-*, Q-L2-EDGE, Q-L2-DN, Q-DN-L35, Q-DN-L4, Q-SP-FN11/-FN11b | F3-SUBASSEMBLY, F3-PETZVAL-ELEM, F2-PETZVAL, implementedModel.geometry, F2-GLASS, sourceModel.catalogSpectral | data.ts; AGF (catalog-derived) |
| Glass Identification | Q-GT-*, Q-SP-MAX, Q-SP-002, Q-SP-DPGF | F2-GLASS, C-SPEC-*, sourceModel.catalogSpectral | AGF; PAT (P**, P* printed) |
| Focus Mechanism | Q-FOC-BFD/-OBJ/-M/-EXT | F2-FOCUS (CONSTRAINED_RECONSTRUCTION) | data.ts var; ZDS 3.0 m |
| Chromatic Correction Strategy | Q-CH-* (lines, extrema, spread, Rayleigh, linear terms, sensitivity, robustness) | F3-CHROM, F3-CHROM-LIN, F3-CHROM-SENS, C3-CHROM-EXTREMA-ROBUST | data.ts nd + AGF dispersion (proxy) |
| Conditional Expressions | Q-COND-A–E, Q-L1-CLAIM-N | C-COND-*, C-L1-CLAIM (printed patent values; margins computed) | PAT |
| Monochromatic Residuals | Q-SA-Z/-M, Q-DIST-*, Q-PZ-MM | F3-SA, F3-DIST, F2-PETZVAL | data.ts |
| Verification Summary | Q-VT-*, Q-HF, Q-EP, Q-XP, Q-STOP-SD, Q-STOP-FR, Q-VIG | F2-*, C2-FNO, C2-STOP-SD, C-STOP-FEAS, F2-VIGNETTING | data.ts; PAT × 249.2; ZDS |

Source-quoted values not numerically recomputed (printed patent figures, P**/P* table, A–E bands, D1+D2, half-fields of Examples I–V, column citations; ZDS specifications and statements) were checked manually against the PDF scans and the re-fetched data sheet (§24, §25).

## 24. Sources consulted in Stage 3

| ID | Source | Use | Check |
|---|---|---|---|
| ZDS | Carl Zeiss data sheet, Sonnar Superachromat 5.6/250 CFE, Cat. No. 10 45 50, printed 29.05.2002 (hasselbladhistorical.eu/pdf/lds/CFE250SA.pdf) | Identity, specifications, 400–1000 nm statement, T coating, focus ring beyond infinity, “first photo lens…” statement | Re-fetched 2026-10-01; text matches the Stage 1 transcription (6/6, 249.2 mm, EP 136.8 mm/Ø 44.6, XP 8.1 mm, H 110.0, H′ 132.1, BFD 117.0, vertex length 103.9, 1:9.6, 3.0 m, 2.7 m working distance) |
| HM63 | M. Herzberger, N. R. McClure, “The Design of Superachromatic Lenses,” Appl. Opt. 2(6), 553–560 (1963), doi:10.1364/AO.2.000553 | Definition of superachromat (four wavelengths) | Bibliographic data confirmed via the Optica abstract page |
| HP70 | M. Herzberger, H. Pulvermacher, “Die Farbfehlerkorrektion von Multipletts,” Optica Acta 17, 349–361 (1970) | Context for the patent's naming of Pulvermacher | Bibliographic data confirmed via multiple citing documents; full text not consulted |
| LDB | lens-db.com | Production timeline only (C 1972, CF 1982, CFE 2001) | Unchanged from Stage 1; third-party, no manufacturer conflict |

The patent does not cite HM63 or HP70; the analysis says so explicitly.

## 25. Manual review of interpretive prose and citations

Performed against the patent scans, the data file and the results (text matching alone does not validate these):

- **Identification argument.** The first draft called Example II “the only six-element f/5.6” example. This is false: Example IV is also six elements at 1:5.6. Corrected; the argument now uses half field (II 8.5°, IV 5.4°, ZDS 9°).
- **Chromatic curve form.** The first draft described the proxy curve as having the apochromatic (three-wavelength) form as a design property. C3-CHROM-EXTREMA-ROBUST showed that a 1 % dispersion change in L2, L3 or L4 removes both turning points. The analysis now reports the form only as a proxy observation and states that neither residual size nor form is a property of Example II. No APO or superachromatic performance claim is made; the ZDS statement is attributed and declared untestable with the proxy.
- **Linear chromatic terms.** The first-order sum (+0.077 mm) differs from the exact paraxial value (+0.052 mm); the analysis labels the terms as linearized and indicative of scale and sign only. The first criterion (residual < 1 % of the largest term for all pairs) failed for C–t (1.04 %); the check and prose were restricted to the F–C statement actually made (0.46 %), with all pairs < 2 % recorded.
- **Positive flint L4.** Stated as unusual in a conventional achromatic pairing and tied to the patent's partial-dispersion criterion (range 4), not to an asserted designer intent.
- **Fluorite enclosure.** Stated as a fact of the arrangement, with an explicit note that the patent gives no reason.
- **Prior-art claim.** Draft wording that the layout “follows the cited prior art” was unsupported; replaced by the patent's own statement that the four-part type is known (col. 1).
- **Herzberger/Pulvermacher.** Wording aligned with col. 1 (characterization and paraxial secondary-spectrum rules to Herzberger; paraxial chromatic difference of magnification to Herzberger with Pulvermacher). An unsupported “three glasses” attribution to HM63 was removed.
- **Track at patent scale.** .8875 × 249.2 = 221.165 exactly; written to three decimals to avoid a rounding ambiguity.
- **Column/line citations.** Read from the gutter line numbers on PDF pp. 5–9; approximate to the 5-line markers. Example II table locations (col. 4, cols. 5–6, claim 7 cols. 9–10) and Fig. 2 (sheet 1) verified.
- **Distinctions maintained.** Standalone element power vs height-weighted in-situ share vs part power; source fact vs catalog-derived vs computed vs modeling choice; model vs marketed (250 mm/f/5.6 vs 249.21 mm/f/5.59); reference planes stated for BFD, H/H′, pupils, close-focus distances.

## 26. Stage 3 gate disposition

All mandatory CHAT_PREFLIGHT checks for stages 1–3 pass (110 PASS; LV-CORPUS NOT_RUN, integration-only). Data and evidence unchanged; analysis agrees with data revision `8a8ca092…` and its results. Gate: **READY_FOR_AUDIT**, bound to the hashes in the Stage 3 manifest. No independence is claimed; the Stage 4 source-first audit remains to be done in a separate context. `integrationStatus: INTEGRATION_PENDING`.

## 27. Stage 3 limitations

- Chromatic statements rest on a paraxial catalog-dispersion proxy whose residual and curve form are within the effect of a ≤1.8 % dispersion error in one element; lateral colour and spherochromatism were not evaluated.
- SA and distortion are Example II model values at d, not production measurements.
- The LensVisualizer checks recorded in Stage 2 (tsc, Prettier, validateLensData, buildLens, render trim, glass resolution) remain valid because the data bytes are unchanged; they were not rerun in Stage 3. No LensVisualizer analysis-file corpus test (`analysisFiles`) was run.


---

# Stage 4 — Source-first independent audit (2026-10-01)

Sections §28–§38 are the Stage 4 record. Sections §1–§27 above are the author's Stage 1–3 construction record and are retained unchanged.

## 28. Inputs, identities and controlling references

| Candidate file (as uploaded) | SHA-256 | Note |
|---|---|---|
| US_3883229_A.pdf | `1c51f5c6…0b3b` | matches Stage 3 manifest |
| ZeissSonnarSuperachromatf56250mmCFE.txt | `66c1db06…e47a` | matches |
| `_data.ts` | `8a8ca092…8133` | matches; final bytes unchanged |
| `_analysis.md` | `8c4cfc15…2271` | matches; corrected in Stage 4 |
| `_evidence.json` | `ffb9f362…fedc7` (Stage 3) | updated |
| `_verify.py` | `2e912c83…167af689` | extended |
| `_results.json` | `6814fb23…804b3f` | regenerated |
| `_audit.md` | `7e22f2bc…aeada` | extended (this file) |
| `_manifest.json` | `14044a77…862b` | replaced |

The upload service replaced the `.` before each suffix with `_`; canonical `<stem>.<suffix>` names were restored byte-for-byte. Controlling references were read from `/mnt/project/` (hashes in the manifest). The repository copies at LensVisualizer commit `902eab5` of `LENS_DATA_SPEC.md` and `LENS_MOUNT_FORMAT_OPTIONS.md` differ from the project copies; the differences (assignee-from-assignment-history wording; new cinema formats) were checked and have no effect on this lens (OI-8).

## 29. Independence scope and exposure

Candidate .data.ts was displayed automatically in the chat context before Pass A (header notes, scale 249.2, back-solved indices, stop fraction 0.81). Project memory was loaded. The candidate analysis, audit, evidence, results, manifest and verifier were not opened before the baseline was frozen. Independence is procedural (fresh rendering/extraction and new code), not blind.

Pass A re-rendered the patent (PyMuPDF 1.28.2, 500–1200 dpi), re-typed Example II and claim 7, measured the Fig. 2 iris position from a 600 dpi raster, and computed everything with new code (thick-lens back-solve, y–nu trace, separate ABCD, Robb/Malitson catalog checks, unit-focus solve). The baseline was frozen before any candidate file other than the auto-displayed data file was opened: SHA-256 `2a9ec616…7f87` over the canonical JSON defined in `evidence.independentPass.frozenBaseline`. The digest documents what was frozen; it does not prove independence.

## 30. Pass A results (frozen baseline)

- **Extraction.** All twelve radii, eleven spacings, glass names, P**/P*, ranges and power × structural length values agree with the Stage 1 transcription (C4-EXTRACT). Claim 7 differs in R3 (.17248) and L1 power (−.56798); the latter implies n = 1.7414 and is a dropped digit (C4-CLAIM7-L1).
- **Index convention.** Thick-lens back-solve gives f = 0.999995, back focus 0.492582 (printed .4926) and structural length 0.887469 (printed .8875); a thin-lens reading gives f = 0.961 and is excluded (C4-THICK-CONV). y–nu and ABCD agree to machine precision.
- **Stop.** The Fig. 2 drawing is close to scale; the iris lies 0.81–0.82 of the way across d10 from R10 (estimate 0.815).
- **Scaled first order (249.2).** EFL 249.199 mm (unrounded indices), BFD 122.751 mm, vertex length 98.406 mm; H 106.48 mm in front of the first vertex, H′ 126.45 mm in front of the last vertex; EP 131.0 mm behind the first vertex at stop fraction 0.815; 3.0 m unit focus gives BFD 148.656 mm and 1:9.62.
- **Manufacturer data.** The Zeiss CFE data sheet (printed 29.05.2002) was re-read: 249.2 mm, 6/6, f/5.6, EP Ø44.6 mm at 136.8 mm, XP 8.1 mm in front of the last vertex, H 110.0 mm, H′ 132.1 mm, BFD 117.0 mm, vertex length 103.9 mm, f/45, ∞–3.0 m, 1:9.6. These equal the evidence record (C4-ZDS).

## 31. Pass B reconciliation (four views)

The raw patent, the frozen baseline, the implemented data (parsed by an independent literal parser, C4-PARSER) and the analysis agree:

- data.ts radii and spacings equal the re-extraction × 249.2 to < 1e-6 mm with d10 recombined across the STO (C4-SRC-R, C4-SRC-D); element nd equal the independent back-solve rounded to five decimals (C4-SRC-ND).
- Implemented EFL 249.209 mm, paraxial BFD 122.758 mm = authored d (C4-EFL-TS, C4-BFD-TS); close BFD 148.665 mm = var (C4-FOCUS).
- STO.sd 11.95 mm equals the real marginal height for EP Ø = EFL/5.59 (C4-STOP-CAL). This is calibration to the data-sheet pupil, not independent stop evidence. Stop fraction 0.81 lies inside the measured Fig. 2 range (C4-STOP-FIG2).
- Geometry: minimum edge 0.948 mm (L2), maximum rim slope 35.2°, maximum shared-band gap intrusion 36 % of the STO–L6 gap (C4-GEOM). L6 SD 12.9 mm covers the largest sampled ray height 12.39 mm (C4-CONTAIN-L6).
- Analysis numbers reproduced by the independent code (C4-ANALYSIS-IND): EFL, EP 130.67 mm, Petzval radius −5381 mm, SA (0.127 mm short at 0.7; 0.084 mm long at the margin), distortion (+0.16/+0.63/+1.41 %), close BFD, transmission at 60 % field (73 %). Full-field transmission is 50.2 % by this sampling versus "about 51 %" (C4-VIG-100, within the 1.5-point sampling tolerance). Also reproduced: height-weighted power shares, T1/T3/L1–L3/L1–L5 focal lengths, L6 magnification 2.68, stop fractions 0.90 (EP) and 0.63 (XP), the chromatic-proxy focus table, turning points (406, 656 nm), the 0.103 mm spread and the ±0.037 mm Rayleigh depth.

## 32. Glass re-audit

Independent sources: Robb & Mercado (1983) Buchdahl fits of the 1980 Schott catalog for LaFN8, LaF20, FN11 and LF8, and Malitson (1963) for CaF₂. Robb and the author's Schott 2008 AGF rows agree in nd within 6 × 10⁻⁷ (C4-ROBB-AGF). Residuals of the back-solved indices against the independent catalogs, with the worst-case back-solve envelope from ±½-digit rounding of R, d and the published power:

| Element | Back-solved | Catalog | Residual | Envelope |
|---|---|---|---|---|
| L1 | 1.734990 | 1.735196 | -2.06e-04 | ±3.0e-04 |
| L2 | 1.433883 | 1.433849 | +3.39e-05 | ±1.1e-05 |
| L3 | 1.682473 | 1.682476 | -3.48e-06 | ±1.0e-05 |
| L4 | 1.620972 | 1.620961 | +1.03e-05 | ±1.3e-05 |
| L5 | 1.682483 | 1.682476 | +6.92e-06 | ±9.4e-06 |
| L6 | 1.564447 | 1.564435 | +1.26e-05 | ±1.2e-05 |

LaFN8, LaF20 and FN11 lie inside their bare envelopes; LF8 exceeds its envelope by 6 × 10⁻⁷, which is covered by the 1 × 10⁻⁵ catalog-fit allowance of C4-NDCAT-SCHOTT (Robb's fit error for LF8 is up to 3.3 × 10⁻⁵). L1 is a near-concentric meniscus whose power is the difference of two nearly equal curvatures, so its envelope (±3.0 × 10⁻⁴) is thirty times wider than the others'. The CaF₂ residual (+3.4 × 10⁻⁵ against Malitson; +3.3 × 10⁻⁵ against the Lithotec row) exceeds its 1.1 × 10⁻⁵ envelope and is attributed to crystal-data sources (C4-NDCAT-CAF2). Class-level labels, νd and ΔPgF are confirmed; Robb-derived ΔPgF differ from the AGF-derived data values by ≤ 0.0006. No APO/superachromatic performance claim is made by the analysis beyond the manufacturer's attributed statement; the proxy section is correctly hedged.

**Auditor correction to the Pass A checkpoint.** The chat checkpoint described the L1 residual as notable. The envelope calculation made in Pass B shows it is within source precision. The frozen baseline is unchanged; the reinterpretation is recorded as annotation 1 in `evidence.independentPass`.

## 33. Correction register (Stage 4)

| ID | Location | Old | New | Evidence | Downstream |
|---|---|---|---|---|---|
| CR-9 | analysis.md, L1 section; Glass Identification | No quantitative statement of the L1 index residual | Paragraph stating the −2.1 × 10⁻⁴ residual and the ±3.0 × 10⁻⁴ rounding envelope; one index-test sentence in Glass Identification | C4-NDCAT-SCHOTT; §32 | Analysis hash changed; C3 claim gate and floor re-run (PASS) |
| CR-9 | evidence.glassEvidence.assignments[L1] | "nd within back-solve precision" | "within the source rounding envelope (−2.07e-4 vs ±3.0e-4)" | §32 | evidence hash changed; verifier re-run |
| CR-10 | analysis.md Sources; evidence.sources | Robb (1983) not cited | Robb & Mercado, Appl. Opt. 22, 1198 (1983), doi:10.1364/AO.22.001198; ROBB, MAL, LVREPO source records | §32 | none numerical |

The data file is unchanged (`8a8ca092…8133`); no correction to the patent itself is proposed. Prettier 3.8.1 `--check` with `/mnt/project/prettierrc.json` (`--ignore-path /dev/null`) passes on these bytes.

## 34. Discrepancy register (carried, all disclosed)

- R3 .17249 (description) vs .17248 (claim 7): description adopted; with L2's index refit from its published power the two are first-order indistinguishable; with a fixed index the description value reproduces .4926.
- L1 power −.563798 vs −.56798 (claim 7): claim digit dropped.
- Range-4 P** sign missing in claim 1: description's −2.091 used.
- Production vs Example II: vertex length 98.41 vs 103.9 mm, BFD 122.76 vs 117.0 mm; EP/XP positions require conflicting stop fractions (0.90 vs 0.63). Family-level correlation only.
- Fluorspar P* (patent 1.7873) vs modern CaF₂ data (1.803): outside range 2 when recomputed; spectral data source difference; not used by the model.

## 35. Citation and prose review

Checked against sources: patent front page and column/line references (cols. 1–4, claims 1, 3, 7); Example II–V statistics (half-fields 3.7–8.6°, apertures 1:6.3–1:4, fluorspar placement); cited prior art; Zeiss data sheet; lens-db C (1972), CF (1982) and CFE (October 2001) entries; Herzberger & McClure, Appl. Opt. 2(6), 553–560 (1963), doi:10.1364/AO.2.000553; Herzberger & Pulvermacher, Optica Acta 17, 349–361 (1970). No unsupported superlatives; third-person voice; νd notation; source fact / catalog-derived / modeling-choice distinctions are maintained. The "Sonnar is a product designation" statement is correctly hedged. Analysis length 251 lines (vintage all-spherical guidance 100–200; the extra length is the chromatic-proxy and monochromatic sections, which are substantive).

## 36. Stage 4 checks

| ID | Status | Description |
|---|---|---|
| C4-EXTRACT | PASS | Stage 4 re-extraction equals the Stage 1 raw transcription (R1-R12, d1-d11) |
| C4-EFL-PAT | PASS | Back-solved thick-lens indices reproduce printed f = 1.0 |
| C4-BFD-PAT | PASS | Back-solved model reproduces printed back focus .4926 |
| C4-TRACK-PAT | PASS | Back-solved model reproduces printed structural length .8875 |
| C4-ABCD | PASS | y-nu and ABCD implementations agree on EFL |
| C4-THICK-CONV | PASS | Thin-lens reading of the powers is excluded (L1 thin n far from any LaFN glass) |
| C4-CLAIM7-L1 | PASS | Claim-7 L1 power -.56798 implies n far from LaFN 8; description -.563798 adopted |
| C4-NDCAT-SCHOTT | PASS | Back-solved nd of the four Schott-named glasses lies within the source rounding envelope (+1e-5 catalog/fit allowance) of the 1980 Schott catalog |
| C4-NDCAT-CAF2 | PASS | CaF2 back-solved nd vs Malitson within 5e-5 (crystal-data source allowance; outside the 1.1e-5 rounding envelope, recorded) |
| C4-ROBB-AGF | PASS | Robb 1980-catalog nd agrees with the Schott 2008 AGF rows used by the model |
| C4-SRC-R | PASS | data.ts radii equal re-extracted radii x 249.2 |
| C4-SRC-D | PASS | data.ts spacings (d10 recombined across STO) equal re-extracted d x 249.2 |
| C4-SRC-ND | PASS | data.ts element nd equals independent back-solve rounded to 5 decimals |
| C4-STOP-FIG2 | PASS | Stop fraction in data.ts lies within the independently measured Fig. 2 iris range |
| C4-EFL-TS | PASS | Implemented EFL vs 249.2 mm design focal length |
| C4-BFD-TS | PASS | Implemented paraxial BFD equals the authored last-surface d |
| C4-STOP-CAL | PASS | STO.sd equals the real marginal height for EP diameter EFL/5.59 (calibration, not independent stop evidence) |
| C4-FOCUS | PASS | Unit-focus back focus for 3.0 m object-to-image equals var['12'][1] |
| C4-GEOM | PASS | Edge >= 0.3 mm, rim slope < 64.2 deg, shared-band gap intrusion <= 0.9 gap (independent sag code) |
| C4-CONTAIN-L6 | PASS | L6 SD covers every sampled ray passing the front apertures and stop (0, 60%, 100% of 9.03 deg, infinity) |
| C4-ANALYSIS-IND | PASS | Analysis numerical statements reproduced by the independent implementation (exact text present) |
| C4-VIG-100 | PASS | Full-field geometric transmission vs analysis 'about 51%' (independent 41x41 sampling) |
| C4-ZDS | PASS | Recorded Zeiss data-sheet values equal the auditor's fresh reading of the 2002 sheet |
| C4-PARSER | PASS | Independent literal parser accepts the file and rejects duplicate-key, spread and trailing-content fixtures |

Verifier run: stage 4, 137 checks, 135 PASS, 0 FAIL, 2 NOT_RUN (integration-only: LV-CORPUS, LV-TSC-FULL); no mandatory failures.

## 37. LensVisualizer-scope checks (re-executed independently)

Repository clone at commit `902eab588dc5…` (same as the author's), `npm ci --ignore-scripts`, Node 22.22.2 (repository declares ≥24.15 <25), TypeScript 5.9.3, Prettier 3.8.1; untracked root-level copies of the data and analysis; one temporary single-lens vitest file; no git writes; temporary files deleted afterwards.

| Check | Status | Result |
|---|---|---|
| validateLensData | PASS | no errors |
| buildLens | PASS | EFL 249.20903 mm; stopPhysSD 11.9497 mm; EP SD 22.2906 mm; FOPEN 5.59 |
| Render diagnostics, focusT 0 / 0.5 / 1 | PASS | hidden material trim 0.00 mm |
| resolveCompatibleGlass | PASS | L2 → CaF2; L1, L3–L6 unresolved by design (obsolete Schott) → Abbe + dPgF path |
| Scoped strict tsc on the data file | PASS | 0 errors |
| Prettier --check (attached config) | PASS | conforms |
| Analysis structural floor (this file) | PASS | metadata lines present; 17 H2/H3 |
| Full-project tsc | NOT_RUN (integration) | 15 errors, all from missing `src/generated/*.json` produced by `generate:metadata` (forbidden here); none in the data file |
| Corpus tests, generate:metadata, build | NOT_RUN (integration) | — |

Runtime `halfField` is 10.45°, the aperture-limited traceable field of the modeled SDs; the 6×6 format half-field (9.03°) used for SD design and analysis is unaffected.

## 38. Gate disposition

All mandatory CHAT_PREFLIGHT checks for Stages 1–4 pass on the final bytes; the clean-extraction replay is recorded in the manifest. **READY_FOR_BATCH**, bound to the final hashes in the manifest. `integrationStatus: INTEGRATION_PENDING`. Pending at integration: corpus tests, `generate:metadata`, full-project typecheck and build under Node ≥24.15, and organization of the root-level pair into `src/lens-data/carl-zeiss-oberkochen/`. (Closed 2026-10-20: integrated into the repository in `src/lens-data/carl-zeiss-oberkochen/`.)

## 2026-10-20 — Deployment validation and wording pass

Source re-read. The scanned patent tables for Example II (description, PDF pp. 6–7, and claim 7, p. 9) were read from page images. All 12 radii, 11 thicknesses, the back focus (.4926) and the structural length (.8875) were checked after scaling by 249.2, with no mismatch. The stop split of d10 (16.402 + 3.847 mm) sums to the printed .081259. There are no aspheres. The six element indices were back-solved again from the printed "power × structural length" values with the thick-lens formula and reproduce the file's nd values to five decimals (1.73499, 1.43388, 1.68247, 1.62097, 1.68248, 1.56445). The two printed source conflicts (R3 .17249 or .17248; L1 power −.563798 or −.56798) are handled as the header states. A Malitson CaF₂ Sellmeier gives nd 1.43385, P** −1.727 and P* 1.803, against the patent's −1.7237 and 1.7873, which supports reading "Fluorspar" as CaF₂.

First order, patent (× 249.2) against model: EFL 249.20 / 249.209 mm, back focus 122.756 / 122.758 mm, first vertex to image 221.165 / 221.164 mm, relative aperture 1:5.6 / F/5.59. The patent half-field is 8.5°; the model is traced to the 6×6 corner, 9.03°, where an exact chief ray lands at 40.16 mm (+1.4 % pincushion) with heights of 19.6 mm at surface 1 and 1.5 mm at L6, inside the modeled semi-diameters. The close state gives 3000 mm object to film at 1:9.62; the Hasselblad instructions give 3.00 m (2.75 m from the front of the lens) and 1:9.6. The surface, image-circle and field-coverage audits pass (coverage 100 %, corner clear).

Maker comparison. No manufacturer cross-section image was available. The Zeiss data sheets and dealer listings give 6 elements in 6 groups with a crystal element for the CF and CFE; Fig. 2 of the patent shows six separate elements with the iris between L5 and L6, and its element diameters are in the same proportions as the modeled semi-diameters. Example II is the only example in the patent with six elements, f/5.6 and a field wide enough for 6×6 (Example IV covers only 5.4°).

Fields changed in this pass: `name` (now "CARL ZEISS SONNAR SUPERACHROMAT 250mm f/5.6 (Hasselblad V)", without a single version letter, since no source compares the C, CF and CFE optics), `subtitle`, `specs`, the focus description, the L2 `apdNote`, the L3 `role`, and the header comment (draft-import lines removed, process wording replaced). In the analysis, the title follows the new name, the "Verification Summary" heading is now "Model Scope and Limitations", process wording was removed from the focus section, and one sentence on the version history was added. No optical value changed.

Open: L2 carries νd 95.23 from the 2008 Schott file, while the repository CaF₂ catalog entry gives 95.1; left for the glass pass. Open: no source states that the 1972 C version uses the same optics as the CF and CFE.

## 2026-10-20 — Second review: diagram, labels and movement

Compared: the local page (infinity, 3.0 m, focus-movement overlay, element inspectors for L1, L2, L4 and L6) against Fig. 2 of US 3,883,229 (PDF p. 2, rendered at the native 281 dpi and at 562 dpi) and the Example II table (PDF p. 6).

Figure scale. Vertex crossings on the axis give 9.30 px/mm from the R1 vertex to the R11 vertex (896 px for 96.36 mm); single spans run 9.07–9.65 px/mm, so the figure is close to scale but not exact. Rim heights were read on both sides of the axis and averaged.

| Element | Fig. 2 rim (mm) | Stored sd | Ratio stored/figure | Axial marginal floor (f/5.59, infinity) |
|---|---|---|---|---|
| L1 | 22.5 | 24.1 | 1.07 | 22.29 (S1) |
| L2 | 21.5 (21.0 at 562 dpi) | 23.1 → 22.2 | 1.07 → 1.03 | 21.37 (S3) |
| L3 | 21.8 | 22.2 | 1.02 | 20.49 (S5) |
| L4 | 18.8 | 20.1 | 1.07 | 18.58 (S7) |
| L5 | 17.7 | 18.7 | 1.06 | 17.31 (S9) |
| L6 | 12.5 | 12.9 | 1.03 | 11.27 (S11); transmitted off-axis bundle 12.54 (S12) |

The figure is drawn at, or just above, the axial-beam envelope, and the model's rims run a fairly uniform 2–7 % above it. The one visible silhouette difference was L2. Fig. 2 draws the fluorspar element no taller than L3 and shorter than L1, with a flat edge land about 1.9 mm wide. The site drew it taller than L3, with a near knife edge (0.95 mm at sd 23.1). L2 (surfaces 3 and 4) was changed from 23.1 to 22.2 mm. This equals L3, gives a 1.76 mm edge and leaves 3.9 % over the S3 axial marginal ray. At 3.0 m the marginal ray at S3 is lower (20.52 mm). The other rims agree within the figure's scale noise and were kept. L1 cannot follow the figure lower without nearly touching the entrance-pupil ray, and it is the vignetting aperture.

Change effects. The surface validator passes. The image-circle check and field coverage (100 %) pass. The nearest-pupil real-ray trace at the 6×6 corner (9.03°, chief ray at 40.16 mm) shows no axial clip or chief-ray block. The engine half-field goes from 10.45° to 10.32°, limited at S3; this is still above the patent's 8.5° and the 9.03° corner. The f-number stays 5.59 and the EFL stays 249.21 mm. A full two-dimensional pupil-grid trace at infinity gives these geometric transmissions before and after: 1.5° 97.6 → 94.9 %, 3° 88.8 → 86.1 %, 5.42° (60 %) 73.7 → 71.4 %, 8.5° 54.3 → 52.9 %, 9.03° 51.1 → 49.9 %. The engine's meridional curve gives 96.4 → 94.8 % at 1.5° and 59.9 → 59.4 % at 8.9°. L2 now trims the upper rim of near-axis oblique bundles. This vignetting is figure-derived and is kept.

Checked and found correct. Element names L1–L6 and part brackets T1 (S1–S4), T2 (S5–S6), T3 (S7–S10) and T4 (S11–S12) follow the patent's own notation in Fig. 2 and the text. No cemented groups and no doublet brackets are needed. Element types agree with the signs of R. The stop sits in d10 between L5 and L6, where Fig. 2 draws the iris. There are no aspheres or asphere markers. The inspectors show the stored types, indices, focal lengths, glass labels and roles. Focus: keyframe 0 is infinity (BF 122.758 mm). The close keyframe moves the whole unit 25.91 mm toward the object (BF 148.665 mm); all four parts move by the same amount in the overlay, and the slider's far end reads 3.00 m. There are no zoom stations. The patent prints no aberration plots, so there is nothing to compare with the model's aberration tabs.

Glass. The five glass names and their P**/P* values in Example II (PDF p. 6) are the same as in Example I. They are real catalog glasses, not optimizer-floated values. CaF₂ resolves to the repository CaF2 row. The four Schott names do not resolve. Using vendor AGF Sellmeier data, P** = (nF − ni)/(nF − nC) and P* = (nF − nt)/(nF − nC), the nearest current-catalog equivalents are:
- L4 "F 11": Ohara TIM11 (in the repository catalog) gives nd −1.5×10⁻⁵, P** +0.0006 and P* −0.0003 against the patent, with νd 35.88 against the stored 36.18. Hoya's obsolete F11 (621360, not in the catalog) gives −0.8×10⁻⁵, −0.0001 and −0.0009.
- L3/L5 "LaF 20": Hoya's obsolete LAFL20 (682482, not in the catalog) gives nd +1×10⁻⁵, νd 48.20, P** +0.006 and P* −0.004.
- L1 "LaFN 8": no row lies within the resolver's ±0.003 window. The nearest is 731/405 (Hoya M-LAF81, Ohara L-LAM69), at Δnd −4.2×10⁻³.
- L6 "LF 8": only the 567/428 LF6 family (Sumita LF6, Hoya FL6, Ohara PBL26) lies within ±0.003. At Δnd +2.9×10⁻³ and Δνd −0.9 it is a different glass, not an equivalent.

These glass findings are reported for the coordinator. No glass field was changed.

Open. The L2 `apd` stays "inferred". The patent names the material ("Fluorspar") and chooses all its glasses by partial dispersion (col. 1), which would support "patent". L2's νd 95.23 against the CaF2 row (95.1 listed, 95.00 evaluated) is still open.

Coordinator follow-up, same day (glass backfill from this review): added HOYA LAFL20 (obsolete; AGF 2026-07-07 NM/CD
row, code 682482) to the catalog; L3 and L5 now read `LaF20 class (Schott, obsolete, 682482; patent "LaF 20") ≈ LAFL20
(Hoya)` and resolve to it (Δnd +1 × 10⁻⁵). L4 now reads `… ≈ TIM11 (OHARA)` and resolves to OHARA TIM11 (Δnd
−1.5 × 10⁻⁵); its vd field moved 36.18 → 35.88 to the resolved row. L2 vd 95.23 → 95.0 (the repository CaF₂ curve
evaluates to 95.00), and L2 `apd` "inferred" → "patent" (the table names "Fluorspar" and the text selects glasses by
partial dispersion). A corpus-wide resolution dump before and after changed only these four elements. L1 (LaFN8) and
L6 (LF8) stay unresolved: no catalog row lies within the index window.
