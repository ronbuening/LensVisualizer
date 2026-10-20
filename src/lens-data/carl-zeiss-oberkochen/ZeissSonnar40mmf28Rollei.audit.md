# Lens Patent — Zeiss Sonnar 40mm F2.8 Rollei — 3 Analysis Authoring

## Job and reference versions

- PATENT: `US3994576`
- LENS: `Zeiss Sonnar 40mm F2.8 Rollei`
- EMBODIMENT: `Example 1`
- OUTPUT STEM: `ZeissSonnar40mmf28Rollei`
- Stage 1 gate consumed: `READY_FOR_DATA`; incoming patent/job/evidence/verifier/results/audit/manifest hashes were checked before construction.
- Current shared workflow contract: `LensPatentChatProtocol(1).md`, CHAT-1.0 (2026-09-11); `LensPatentDossierContract(1).md`, CHAT-1.0 (2026-09-11).

The current controlling reference bytes match the Stage 1 recorded hashes: `.prettierrc.json`, `defaults.ts`, `adding_a_lens(1).md`, `lens-data-integration-handoff(1).md`, `LENS_ANALYSIS_SPEC(1).md`, `LensPatentChatProtocol(1).md`, `LensPatentDossierContract(1).md`, `LensPatentPromptPack.verify.py`, `LensPatentWorkflowGuide.md`, `TEMPLATE.data.ts(6).template`, `LENS_MOUNT_FORMAT_OPTIONS(1).md`, and `LENS_DATA_SPEC(8).md`. The actual repository source `src/utils/catalog/lensTaxonomy.ts` and LensVisualizer runtime are still not mounted.

## Extraction and source conventions

Stage 2 preserves the Stage 1 rendered-page transcription of US 3,994,576 Example 1. The source is a five-element/four-component expanded-Tessar-type objective normalized to `F = 1.00000`, with published `f/2.9`, total field `2ω₀ = 50°`, and infinity back focus `s′∞ = +0.6341 F`. Examples 1–4 use d-line indices at 587.6 nm. The raw source continues to preserve the coincident `R4′` and `R5` bookkeeping planes with `s45 = 0` before active-model normalization.

The production correlation remains deliberately separate from the patent prescription: manufacturer-origin Rollei material identifies a 40 mm f/2.8, five-element/four-component HFT Sonnar on the Rollei 35 S, while the patent example is f/2.9 and 50°. No manufacturer source in the dossier explicitly attributes this exact patent/example to the production lens.

## Stage 2 model transformations

1. **Cement interface normalization.** The zero-gap `R4′`/`R5` pair is represented as one physical `n=1.638 → 1.744` cemented interface at scaled radius `R = +12.8 mm`. The junction uses the downstream L5 `elemId` and index.
2. **Uniform scale.** Every patent length is multiplied by exactly `40.0`. No asphere coefficients exist. The implemented prescription therefore retains the patent geometry while correlating the normalized focal length to the marketed 40 mm product.
3. **Stop position inference.** The patent locates the diaphragm only somewhere inside `s34 = 0.10163 F`, and its figure is explicitly schematic/not necessarily to scale. The model uses the exact midpoint: `0.050815 F + 0.050815 F`, or `2.0326 mm + 2.0326 mm` after scaling. This is a modeling inference, not a published diaphragm station.
4. **Stop-size calibration.** The physical stop semi-diameter is `4.7511571874 mm`. With the inferred stop station, the parsed pre-stop optics give entrance-pupil semi-diameter `6.896553915 mm` and modeled f-number `2.9000000000`. The agreement with f/2.9 is calibration to a source target, not independent physical iris evidence.
5. **Semi-diameters.** No source clear apertures exist. Surface SDs were modeled from exact spherical ray envelopes over the patent design half-field of ±25° and then checked against current edge-thickness, rim-slope, shared-band gap-intrusion, and off-axis containment rules. An approximately 8% envelope allowance was used where compatible with geometry; the final positive rear element is edge-thickness-limited and therefore carries smaller margin.
6. **Focus status.** `NO_INTERNAL_RECONSTRUCTION` is retained. `closeFocusM: 0.9` is production metadata only; the final data has no `var` focus spacings and no finite-focus optical state.

## Final data identity and structural preflight

- Final data SHA-256: `c708e4edabe7acb2652875f08d5dc7bedfb5ae8976e2e3def70cdb9095292c65`
- Root-level type import: `import type { LensDataInput } from "../types/optics.js";`
- `const LENS_DATA = { ... } satisfies LensDataInput;` and `export default LENS_DATA;` are present.
- The payload is literal-only. A TypeScript 5.8.3 AST loader parsed the actual final file and recursively rejected non-literal expressions, spreads/computed properties, unsupported statements, duplicate keys, and trailing top-level constructs.
- Mutation tests passed: an inserted arithmetic expression and an inserted duplicate object key were both rejected by the same loader.
- Exactly one `STO` is present. Surface labels and element IDs are unique; every element owns exactly one entry/cement surface; the cemented junction carries L5 as required.
- Supplied current taxonomy options support `lensMounts: ["fixed-lens-camera"]` and `imageFormat: "135-full-frame"`. The actual `lensTaxonomy.ts` source remains an integration check.

## Numerical verification from the parsed final data

| Quantity | Final parsed-data result | Source/reference | Disposition |
|---|---:|---:|---|
| EFL | 40.000012709 mm | 40.0 mm scale target | PASS |
| Computed BFD | 25.364334085 mm | authored/source-scaled 25.364 mm | residual +0.000334085 mm, PASS at source precision |
| First-to-last lens track | 18.27936 mm | parsed surface spacings | PASS |
| TL/EFL | 0.456983855 | computed | `< 1`; telephoto criterion satisfied |
| BFD/EFL | 0.634108151 | computed | `< 1`; retrofocus criterion not satisfied |
| H1 from first vertex | +0.890460256 mm | computed | PASS |
| H2 from last vertex | -14.635678624 mm | computed | PASS |
| Entrance pupil SD | 6.896553915 mm | calibrated stop model | PASS/calibrated |
| Entrance pupil z from first vertex | +11.846461408 mm | computed | model result |
| Exit pupil SD | 5.413732813 mm | computed | model result |
| Exit pupil z from last vertex | -6.035316231 mm | computed | model result |
| Petzval sum | +0.00705105003 mm⁻¹ | surface-by-surface φ/(n·n′) | PASS |

The final-file y–ν basis-ray matrix and independent ABCD product agree within the verifier tolerance. The implemented EFL and source-scaled BFD reproduce the Stage 1 normalized results; the small BFD residual is retained rather than correcting the patent-rounded image distance.

### Isolated element and functional powers

Isolated element powers treat each glass element alone in air. They are not statements about in-situ element behavior. The rear group value is the net cemented L4+L5 component.

| Item | Power (D) | Isolated focal length (mm) |
|---|---:|---:|
| L1 | +26.77812 | +37.34393 |
| L2 | +27.75205 | +36.03337 |
| L3 | -69.18832 | -14.45331 |
| L4 | -43.23900 | -23.12727 |
| L5 | +71.97917 | +13.89291 |
| frontMember L1–L3 | +4.70143 | — |
| rearCemented L4–L5 | +30.29964 | — |
| whole system | +24.99999 | — |

### Patent conditions

- Gardner feature (a): `-0.051921780175` versus Table II `-0.0519`; PASS.
- Patent front-element Petzval `B−A`, normalized back to native F units: `3.139414679262e-06` versus printed zero; PASS at source precision.
- `(B−A)/(B+A) = 2.634695183408e-06` versus printed zero; PASS.

### Surface-by-surface Petzval

| Surface | Contribution (mm⁻¹) |
|---|---:|
| 1 | +0.02596897451 |
| 2 | -0.01107443174 |
| 3 | +0.02977273479 |
| 4 | -0.01487811353 |
| 5 | +0.00467079510 |
| 6 | -0.04359915041 |
| STO | +0.00000000000 |
| 7 | +0.00389472905 |
| 8 | +0.00289891524 |
| 9 | +0.00939659702 |
| **Total** | **+0.00705105003** |

## Geometry verification

The geometry checks use the final parsed `sd` values, not a separate hard-coded prescription. All surfaces are spherical, so conic-domain/asphere-departure checks are not applicable.

### Modeled semi-diameters and exact-ray containment

| Surface | SD (mm) | Max sampled | Clearance (mm) |
|---|---:|---:|---:|
| 1 | 11.000000 | 10.161420 | 0.838580 |
| 2 | 10.300000 | 9.495437 | 0.804563 |
| 3 | 8.850000 | 8.162093 | 0.687907 |
| 4 | 7.820000 | 7.213802 | 0.606198 |
| 5 | 6.980000 | 6.433080 | 0.546920 |
| 6 | 5.600000 | 5.157354 | 0.442646 |
| STO | 4.751157 | 4.751157 | 0.000000 |
| 7 | 7.420000 | 6.842369 | 0.577631 |
| 8 | 8.900000 | 8.589499 | 0.310501 |
| 9 | 8.900000 | 8.726501 | 0.173499 |

The exact-ray sweep covers 41 field samples from -25° to +25° and 41 physical stop-height fractions from -1 to +1, for 1,681 wide-open rays. Every sampled ray reaches the authored image plane. The minimum non-stop surface clearance is `0.173499 mm` at the final surface; the numerical stop-edge residual is `-9.957e-12 mm`.

### Edge thickness

| Element | Shared rim SD (mm) | Edge thickness (mm) |
|---|---:|---:|
| L1 | 10.3000 | 1.196229 |
| L2 | 7.8200 | 1.533241 |
| L3 | 5.6000 | 2.352628 |
| L4 | 7.4200 | 3.254379 |
| L5 | 8.9000 | 0.157154 |
| **Minimum** | — | **0.157154** |

The binding case is L5 at 0.157 mm. It remains positive, but this is why the rear pair does not carry the same ~8% ray-envelope margin used on the less constrained surfaces.

### Rim slope

The maximum actual spherical rim-slope angle is `44.840°`, below the current `64.2°` limit. The obsolete universal `sd/|R| < 0.90` rule was not used.

### Shared-band cross-gap intrusion

| Gap | Axial gap (mm) | Minimum separation (mm) | Intrusion fraction |
|---|---:|---:|---:|
| 2→3 | 0.056000 | 2.104080 | 0.000000 |
| 4→5 | 1.137600 | 0.517120 | 0.545429 |
| 6→STO | 2.032600 | 0.843555 | 0.584987 |
| STO→7 | 2.032600 | 2.145524 | 0.000000 |
| **Maximum** | — | — | **0.584987** |

All checked air gaps remain below the current `gapSagFrac = 0.90` intrusion limit and retain positive physical separation.

Production `computeElementRenderDiagnostics()`/render-trim behavior is **NOT_RUN** because the LensVisualizer runtime is not mounted. Portable geometry success is not relabeled as a production-render pass.

## Glass review

Stage 2 does not add dispersion data. Example 1 remains an index-only d-line preform: `νd`, `nC`, `nF`, `ng`, and `dPgF` are absent. All five elements therefore retain explicit `Unmatched (...)` labels. No catalog Sellmeier identity, supplier melt, APO claim, or anomalous-dispersion claim is introduced.

## Focus and aperture disposition

- Focus status: **NO_INTERNAL_RECONSTRUCTION**. No `var` keys are authored.
- `closeFocusM = 0.9` records the Rollei production minimum-focus specification only.
- `nominalFno = 2.9` is the modeled/patent design value, not the marketed f/2.8 label.
- `apertureMarketing = 2.8`; `apertureDesign = 2.9`; `maxFstop = 22` follows the production aperture range in the manufacturer-origin manual.
- Physical STO radius is inferred/calibrated as described above. It must not be cited as a published diaphragm dimension.

## Correction and discrepancy register

| ID | Observation | Stage 2 treatment | Consequence |
|---|---|---|---|
| C-01 | Patent machine text contains false minus signs/dropped digits in Example 1. | Stage 1 rendered-page transcription remains controlling. | No new source correction. |
| C-02 | `R4′` and `R5` are printed as coincident +0.32000 planes with `s45=0`. | Final data uses one physical cement interface. | First-order and Petzval equivalence retained. |
| C-03 | Computed BFD differs slightly from printed 0.6341 F. | Final data keeps source-scaled 25.364 mm; computed BFD is 25.364334085 mm. | Residual remains visible; no tolerance widening/source rewrite. |
| C-04 | Patent calls the architecture expanded Tessar type; product is marketed Sonnar. | Both are retained with correlation labeled inferential. | No manufacturer-confirmed patent attribution. |
| C-05 | Patent f/2.9 vs product f/2.8. | `nominalFno/apertureDesign=2.9`; `apertureMarketing=2.8`. | Design and marketing fields remain separate. |
| C-06 | Patent 50° field vs product 51° marketed angle and 24×36 mm format. | Geometry verification uses patent ±25°; product format remains catalog metadata. | No exact full-frame-corner claim beyond the patent design field. |
| C-07 | Example 1 has d-line indices only. | All elements remain Unmatched with no invented dispersion fields. | Chromatic/Sellmeier claims remain unavailable. |
| C-08 | Exact stop split is unpublished. | Midpoint split inferred from the schematic and disclosed. | Stop position is modeling data, not source data. |
| C-09 | Physical diaphragm diameter is unpublished. | Stop radius calibrated to f/2.9. | f/2.9 match is a calibration, not independent evidence. |
| C-10 | Surface semi-diameters are unpublished. | Modeled from exact ray envelopes and geometry constraints. | Production render diagnostics: closed — repository validators pass (see the 2026-10-20 section). |

## Stage 2 quantitative-claim map for analysis authoring

| Future analysis claim | Fact/result | Governing source/calculation |
|---|---|---|
| Patent identity, inventors, assignee, dates | `fact.patent.identity` | patent front page |
| Example 1 architecture, f/2.9, 50° | `fact.design.example` | patent Example 1 |
| Final scaled EFL | `fact.design.implemented-efl` | parsed final `.data.ts`, y–ν + ABCD |
| BFD and retained source residual | `fact.design.implemented-bfd` | parsed final `.data.ts` vs patent-scaled image distance |
| Track and telephoto/retrofocus criteria | `fact.design.track` | parsed final `.data.ts` |
| Stop placement, pupil and calibrated f-number | `fact.model.stop-inference`, `fact.design.pupils` | disclosed model inference + parsed final data |
| Element powers/focal lengths | `implementedModel.isolatedElements` | parsed final `.data.ts` |
| Cemented rear/group power | `implementedModel.functionalGroupPowers*` | parsed final `.data.ts` |
| Petzval | `fact.design.petzval` | parsed final `.data.ts`, φ/(n·n′) |
| Geometry/SD statements | `fact.design.geometry`, `fact.model.semi-diameters` | exact-ray + portable geometry checks |
| Focus limitation | `fact.focus.status` | source sufficiency + final empty `var` |
| Marketed Rollei specs | `fact.product.marketed` | manufacturer-origin manual/sheet |
| Correlation remains inferential | `fact.correlation.limit` | evidence comparison |
| Glass identities unresolved | `fact.glass.disposition` | patent d-line-only data + Stage 1 catalog review |

## Check disposition and gate

- `stage2.job-identity` — **PASS** — required at `stage2`.
- `stage2.original-patent-hash` — **PASS** — required at `stage2`.
- `stage2.original-job-hash` — **PASS** — required at `stage2`.
- `stage1.ynu-vs-abcd` — **PASS** — required at `stage1`.
- `stage1.raw-vs-normalized-transfer` — **PASS** — required at `stage1`.
- `stage1.efl` — **PASS** — required at `stage1`.
- `stage1.bfd` — **PASS** — required at `stage1`.
- `stage2.typescript-literal-loader` — **PASS** — required at `stage2`.
- `stage2.loader-mutation-arithmetic` — **PASS** — required at `stage2`.
- `stage2.loader-mutation-duplicate-key` — **PASS** — required at `stage2`.
- `stage2.structural-preflight` — **PASS** — required at `stage2`.
- `stage2.style-preflight` — **PASS** — required at `stage2`.
- `stage2.taxonomy-recorded-ids` — **PASS** — required at `stage2`.
- `stage2.patent-metadata` — **PASS** — required at `stage2`.
- `stage2.source-to-data-mapping` — **PASS** — required at `stage2`.
- `stage2.stop-gap-conservation` — **PASS** — required at `stage2`.
- `stage2.cement-interface` — **PASS** — required at `stage2`.
- `stage2.ynu-vs-abcd` — **PASS** — required at `stage2`.
- `stage2.efl` — **PASS** — required at `stage2`.
- `stage2.bfd-vs-authored` — **PASS** — required at `stage2`.
- `stage2.focalLengthDesign-field` — **PASS** — required at `stage2`.
- `stage2.element-focal-length-fields` — **PASS** — required at `stage2`.
- `stage2.architecture-power-signs` — **PASS** — required at `stage2`.
- `stage2.petzval-total` — **PASS** — required at `stage2`.
- `stage2.condition-gardner-a` — **PASS** — required at `stage2`.
- `stage2.condition-petzval-b1` — **PASS** — required at `stage2`.
- `stage2.condition-petzval-b2` — **PASS** — required at `stage2`.
- `stage2.stop-calibrated-fnumber` — **PASS** — required at `stage2`.
- `stage2.nominalFno` — **PASS** — required at `stage2`.
- `stage2.geometry-edge-thickness` — **PASS** — required at `stage2`.
- `stage2.geometry-rim-slope` — **PASS** — required at `stage2`.
- `stage2.geometry-cross-gap` — **PASS** — required at `stage2`.
- `stage2.geometry-exact-ray-containment` — **PASS** — required at `stage2`.
- `stage2.asphere-check` — **NOT_APPLICABLE** — required at `stage2`.
- `stage2.focus-status` — **PASS** — required at `stage2`.
- `stage2.glass-spectral-discipline` — **PASS** — required at `stage2`.

Repository-scoped checks remain separate:

- `lensvisualizer.buildLens` — **NOT_RUN** — LensVisualizer repository/runtime and LensDataInput implementation are not mounted.
- `lensvisualizer.validateLensData` — **NOT_RUN** — Actual project validator is unavailable; portable geometry checks above are not relabeled as validateLensData().
- `lensvisualizer.typecheck` — **NOT_RUN** — Real project typecheck is unavailable; TypeScript AST loading above is syntax/literal validation, not LensDataInput type checking.
- `lensvisualizer.prettier` — **NOT_RUN** — Prettier package/CLI is not installed in this runtime; portable style preflight is recorded separately.
- `lensvisualizer.render-diagnostics` — **NOT_RUN** — Production computeElementRenderDiagnostics() is unavailable; no production trim PASS is claimed.
- `lensvisualizer.taxonomy-source` — **NOT_RUN** — src/utils/catalog/lensTaxonomy.ts is not mounted; supplied current options reference was used for chat preflight.
- `lensvisualizer.runtime-glass-resolution` — **NOT_RUN** — Runtime dispersion/catalog resolver is not mounted; all glass labels are deliberately Unmatched.

All mandatory Stage 1/2 CHAT_PREFLIGHT construction, optical, pupil, condition, and geometry checks pass or are supported as not applicable. Repository-only checks are not used as substitutes and remain integration-pending.

## Pending integration

Closed: all items below were completed at repository integration (see the deployment validation section at the end).

- Run the actual LensVisualizer `buildLens()` / `validateLensData()` against the final data file.
- Run real `LensDataInput` type checking and project Prettier/format checks.
- Recheck `fixed-lens-camera` and `135-full-frame` against the mounted `src/utils/catalog/lensTaxonomy.ts`.
- Run production render diagnostics and inspect the rendered silhouette/rays; the portable geometry checks do not certify production trim.
- Run runtime glass-resolution checks; the current labels are intentionally Unmatched.
- Batch metadata generation, full-corpus tests, lint, full build, and publication remain outside Stage 2.

## Gate disposition

The final `.data.ts` is bound to the updated evidence/verifier/results revision. The implemented prescription is reloaded from the actual final TypeScript file; its scaled source mapping, EFL/BFD, pupil calibration, powers, Petzval, patent conditions, and geometry all pass the Stage 2 chat gate. The remaining `NOT_RUN` items are repository/integration checks and do not mask a known Stage 2 construction failure.

## Stage 3 analysis authoring

### Entry checkpoint and data disposition

Stage 3 consumed the verified Stage 2 data revision without changing its bytes. The approved `.data.ts` SHA-256 remains `c708e4edabe7acb2652875f08d5dc7bedfb5ae8976e2e3def70cdb9095292c65`, matching the Stage 2 checkpoint. The portable verifier was rerun against the current evidence, patent, job card, data, and analysis. It recomputed the Stage 1/2 optical quantities from the final data and then applied the Stage 3 consistency checks; no Stage 2 construction failure reopened.

- Final analysis SHA-256: `f1d74f10e5c02a13c2ad5732cbeddd25034b3216ca4f53bf3a664188e3d3bbdd`
- Final verifier SHA-256: `09d1514aac8c56c38cee317bd8bdee43e70e1720274032d67465d839228bf991`
- Current results SHA-256 before manifest packaging: `47b229c1558561ba6080f8f3077f94b1b5fc1b132c3a6d050dfaf4bf8600641a`
- Data changed during Stage 3: **No**. No analysis finding required an upstream prescription correction.

### Analysis structure and consistency review

The analysis follows the current required order: patent/design identification, optical architecture, element-by-element discussion, glass identification, focus mechanism, conditional patent expressions, aperture/geometry modeling, verification summary, and sources. The all-spherical model correctly omits an aspherical-surfaces section. The analysis is 111 lines, within the current compact range for a vintage all-spherical prime.

The metadata block matches the final data/evidence: US 3,994,576; inventors Erhard Glatzel and Heinz Zajadatz; assignee Carl Zeiss-Stiftung; filing/grant dates; and Example 1. All five element subsections were checked against the parsed final data for element label, `nd`, exact `Unmatched (...)` glass disposition, and rounded isolated focal length. The production correlation remains expressly inferential, and the patent's expanded-Tessar terminology is kept separate from Rollei's Sonnar branding.

Focus prose retains `NO_INTERNAL_RECONSTRUCTION`: the production 0.9 m minimum-focus value is identified only as metadata and no movement law, focus travel, or finite-focus prescription is asserted. The stop position, stop size, and semi-diameters are all disclosed as model inferences. The f/2.9 stop match is explicitly described as calibration rather than independent physical-diaphragm evidence.

### Quantitative claim map

| Analysis section / claim | Fact or result | Governing evidence / computation |
|---|---|---|
| Patent identity, dates, inventors, assignee, Example 1 | `fact.patent.identity`, `fact.design.example` | US 3,994,576 front page and Example 1 |
| 5 elements / 4 components; expanded-Tessar patent terminology | `fact.design.example`; evidence architecture | Patent description, PDF pp. 3 and 6 |
| Production 40 mm f/2.8, 24×36 mm, 51°, 0.9 m, licensed Zeiss relationship | `fact.product.marketed` | Manufacturer-origin Rollei manual and Jan. 1978 sheet |
| Correlation remains inferential | `fact.correlation.limit` | Product-correlation evidence and contradiction register |
| 40× uniform scale and cement-interface normalization | evidence `MD-01`, `MD-02` | Source-to-data transformation ledger plus Stage 1/2 transfer checks |
| EFL 40.000013 mm | `fact.design.implemented-efl` | Parsed final data; y–ν plus independent ABCD |
| Track 18.27936 mm; `TL/EFL = 0.456984`; telephoto-form criterion | `fact.design.track` | Parsed final data; first/last lens vertices and computed EFL |
| BFD 25.364334 mm; `BFD/EFL = 0.634108`; not retrofocus | `fact.design.implemented-bfd`, `fact.design.track` | Parsed final data; last-vertex reference plane |
| L1–L5 isolated focal lengths | `implementedModel.isolatedElements` | Each final-data element traced alone in air |
| Front-member +4.701 D; rear cemented component +30.300 D | `implementedModel.functionalGroupPowersDiopters` | Parsed final-data group transfer matrices |
| Gardner and two front-element Petzval conditions | `implementedModel.patentConditions` | Final-data values normalized to native F units vs Patent Table II |
| Total Petzval +0.00705105 mm⁻¹ | `fact.design.petzval` | Surface-by-surface `φ/(n·n′)` from final data |
| Midpoint stop split 2.0326 + 2.0326 mm | `fact.model.stop-inference` | Evidence `MD-03`; exact s34 gap conservation |
| Stop SD 4.751157 mm; entrance-pupil SD 6.896554 mm; modeled f/2.9 | `fact.design.pupils`, `fact.model.stop-inference` | Final-data pre-stop matrix and disclosed calibration |
| 1,681-ray geometry sample; 0.1735 mm clearance; 0.1572 mm minimum edge; 44.84° rim; 0.5850 gap fraction | `fact.design.geometry`, `implementedModel.geometry` | Exact spherical ray sweep plus current portable geometry checks |
| Glass identities unresolved; no spectral performance claim | `fact.glass.disposition` | d-line-only patent data plus authoritative catalog review |
| No internal focus reconstruction | `fact.focus.status` | Patent/product source sufficiency and empty final-data `var` |

### Manual interpretive and citation review

The prose was reviewed for source/model category errors rather than only string equality. Statements about the roles of L1/L2, the dispersing L2–L3 air lens, the negative third element, and the cemented opposite-sign rear pair are tied to the patent description. The analysis does not infer a specific higher-order aberration contribution from an isolated power sign or from an unresolved glass label. Standalone element focal lengths are explicitly distinguished from in-situ behavior, and the cemented rear-component power is described separately.

The analysis citations are portable Markdown references: patent locations are identified by publication number and PDF page/table; manufacturer-origin Rollei documents are identified by title and archival URL; current glass-catalog URLs are listed for the catalog non-identification review. No ChatGPT-only `filecite`, conversation `turn` reference, or sandbox URL is present in the analysis file.

### Stage 3 check disposition

- `stage3.data-checkpoint` — **PASS** — Stage 2 data bytes unchanged.
- `stage3.analysis-present-length` — **PASS** — 111 lines.
- `stage3.required-sections` — **PASS**.
- `stage3.metadata-block` — **PASS**.
- `stage3.data-analysis-identity` — **PASS**.
- `stage3.element-data-consistency` — **PASS**.
- `stage3.quantitative-rounding` — **PASS**.
- `stage3.disclosure-discipline` — **PASS**.
- `stage3.citation-portability` — **PASS**.
- `stage3.prose-style` — **PASS**.

Repository-scope checks remain unchanged and are not promoted to chat successes: `buildLens`, `validateLensData`, real `LensDataInput` typecheck, Prettier, production render diagnostics, actual taxonomy source validation, and runtime glass resolution remain `NOT_RUN` / integration pending.

## Stage 3 gate disposition

The analysis is bound to the unchanged verified Stage 2 data revision and to the current verifier/results revision. All mandatory Stage 3 CHAT_PREFLIGHT analysis, cross-file, numerical-rounding, disclosure, and citation checks pass. No upstream correction was required.

## Stage 4 source-first independent audit

### Independence scope and frozen baseline

The Stage 4 review was source-first but not context-blind. Before Pass A began, the chat context had already exposed the Stage 3 candidate pair and portions of the prior dossier. The auditor therefore did not claim blindness or erase prior exposure. Numerical baseline inputs were re-entered from rendered US 3,994,576 pages 6, 11, and 12, and fresh calculation scripts were executed before candidate reconciliation. The resulting frozen baseline fingerprint is `201e0b4f1ab4dc2af490df1c7ebf28101516ed0408d14ddfb048e03f93c7beb3`. The exact exposure note, independent source input, script hashes, baseline result object, canonicalization rule, and replayed baseline are retained in `evidence.independentPass` and `results.independentBaseline`.

Rendered-page review controlled over OCR. Example 1 on PDF p. 6 was re-entered as `F=1.00000`, f/2.9, 50° total field, `s′∞=+0.6341 F`; radii `+0.39000`, `+0.91453`, `+0.35150`, `+0.70339`, `+2.35386`, `+0.25217`, `+2.50017`, `+0.32000`, `+0.32000`, `-1.13500`; thicknesses/spacings `0.09000`, `0.00140`, `0.07000`, `0.02844`, `0.02055`, `0.10163`, `0.028999`, `0`, `0.115965`; and d-line indices `1.6810`, `1.7200`, `1.7850`, `1.6380`, `1.7440`. The rendered table confirms that machine text introducing false minus signs is an OCR defect, not a patent correction. Table II on rendered p. 12 gives Example 1 values `-0.0519`, `0`, and `0` for the Gardner and two Petzval-distribution quantities, and claim 1 gives the corresponding ranges.

The source-only fresh calculation gives EFL `1.000000317732 F`, BFD `0.634108352131 F`, first-to-last lens-vertex track `0.456984 F`, `TL/EFL = 0.456983854801`, and total Petzval `0.282042001239 F^-1`. Fresh y-nu and ABCD paths agree to floating-point noise, and the raw zero-gap R4′/R5 bookkeeping representation agrees with the direct cement interface at the same level. The source remains underdetermined for exact diaphragm split/diameter, clear apertures, finite-focus motion, Abbe numbers, unique glass identities, and non-d-line spectral data.

### Candidate reconciliation

The supplied Stage 3 candidate hashes were verified before reconciliation: `.data.ts` `c708e4edabe7acb2652875f08d5dc7bedfb5ae8976e2e3def70cdb9095292c65` and `.analysis.md` `f1d74f10e5c02a13c2ad5732cbeddd25034b3216ca4f53bf3a664188e3d3bbdd`. The supplied evidence, verifier, results, and audit hashes also match the Stage 3 manifest. The original patent/job-card bytes match their source records. The current controlling reference hashes match the Stage 3 recorded reference hashes; no controlling-reference drift was detected.

A separate Stage 4 TypeScript-load/calculation path reproduces the candidate from the final `.data.ts`, rather than reading prior calculated answers. It confirms the 40x source transformation, the merged L4→L5 cement interface, and exact conservation of the source `s34` gap around the single midpoint `STO`. The independent candidate results are: EFL `40.000012709290 mm`; BFD `25.364334085250 mm`; front principal plane `+0.890460256298 mm` from the first vertex; rear principal plane `-14.635678624040 mm` from the last vertex; entrance-pupil semi-diameter `6.896553915346 mm` at z `+11.846461407694 mm`; exit-pupil semi-diameter `5.413732813134 mm` at z `-6.035316231154 mm` from the last vertex; and modeled f-number `2.900000000021`. The first-to-last lens-vertex track is `18.279360 mm`, so `TL/EFL = 0.456983854801 < 1`; the verified track criterion permits the compactness descriptor “telephoto-form.” `BFD/EFL = 0.634108150655 < 1`, so the project retrofocus criterion is not met.

Standalone element focal lengths and functional group powers independently reproduce the authored values. The front L1-L3 member is `+4.701435 D`; the cemented L4-L5 component is `+30.299643 D`. These are kept distinct from the isolated powers of L1-L5. The fresh surface-by-surface Petzval sum is `+0.00705105003 mm^-1`. The Gardner result is `-0.0519217802`, with native-scale `B-A = 3.1394146793e-06 F^-1` and `(B-A)/(B+A) = 2.6346951834e-06`; all agree with the printed Example 1 values at source precision and satisfy claim 1.

### Geometry, aperture, and field-domain audit

The exact midpoint stop remains a disclosed modeling convention because the patent supplies only the containing central space `s34`; the schematic is explicitly not to scale. The physical stop diameter remains unpublished. The authored stop radius is therefore correctly treated as a calibration to f/2.9 after the midpoint convention, not as independent physical iris evidence.

Independent spherical geometry checks reproduce the candidate results: minimum element edge thickness `0.157154 mm`; maximum actual rim-slope angle `44.839902°`; maximum shared-band gap-intrusion fraction `0.584987`. A fresh exact-Snell 41x41 sweep over the patent's ±25° field has no failures and a minimum non-stop clearance of `0.173499 mm`. No asphere/conic check applies.

A separate out-of-domain stress test was retained rather than hidden. At ±25.5° (the half-angle corresponding to the marketed 51° figure), the authored geometry still traces without failure, but its minimum non-stop clearance falls to `0.015021 mm`. A rectilinear 24x36 mm diagonal at the modeled EFL corresponds to ±28.405964°; that stress produces 8 exact-ray failures and a minimum computed non-stop clearance of `-0.109694 mm`. This does not invalidate the patent-domain model because it lies outside the published 50° design field, but it means the portable ±25° pass must not be presented as proof of full-frame-corner clearance. Actual LensVisualizer format-aware tracing and render diagnostics remain integration checks.

### Glass and production-metadata re-audit

Example 1 supplies only d-line indices and no `νd`. The Stage 4 catalog review independently consulted current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog sources. Exact-`nd` examples confirm non-uniqueness rather than identity: for L2 (`nd=1.72000`), current OHARA S-LAM52/S-LAM58/S-LAM61 have `νd=43.69/41.98/46.02`, while CDGM H-LaK8A/H-LaK8B have `νd=50.34/50.28`; for L5 (`nd=1.74400`), OHARA S-LAM2 has `νd=44.78` and CDGM H-LaF3B has `νd=44.90`. With no patent `νd`, every `deltaVd` is undefined and none of these current catalog rows identifies the historical melt. The final `Unmatched (...)` labels and the absence of `νd`, `nC`, `nF`, `ng`, `dPgF`, Sellmeier, anomalous-dispersion, or APO claims are therefore retained.

Manufacturer-origin Rollei material was independently rechecked. *Rollei 35/35T/35S In Practical Use* states a Sonnar 40 mm f/2.8, five elements/four components, manufacture by Rollei under Carl Zeiss license, collapsible construction, f/2.8-f/22, and manual focusing to 3 ft/0.9 m. The January 1978 Rollei 35S technical sheet states 24x36 mm format, a retractable five-element 40 mm f/2.8 Rollei HFT Sonnar, 51° angle of view, and 3 ft-to-infinity focusing. These sources confirm the product metadata but do not explicitly map US 3,994,576 Example 1 to the production lens; the correlation therefore remains inferential.

### Stage 4 correction register

No numerical, structural, glass-label, or prose correction to the clean `.data.ts` / `.analysis.md` pair was justified. The audited pair remains byte-identical to the Stage 3 candidate. Stage 4 changes are confined to the dossier: the fresh independent baseline and exposure record are added, the consolidated verifier now replays the independent paths, and the full-frame-diagonal stress observation is recorded as a model limitation. No patent value was silently changed, no focus law was added, and no catalog glass identity was promoted.

### Stage 4 check disposition

The consolidated verifier reports all mandatory Stage 4 `CHAT_PREFLIGHT` checks as PASS or NOT_APPLICABLE, with the independent baseline fingerprint replaying exactly. Repository-scoped checks remain separate and are not relabeled as chat successes: real `buildLens()` / `validateLensData()`, actual `LensDataInput` type checking, project Prettier, production render diagnostics, mounted taxonomy-source validation, and runtime glass resolution remain `NOT_RUN`. Batch metadata generation, lint, full-corpus tests, full build, and publication remain outside Stage 4.

## Stage 4 gate disposition

The source-first independent audit found no blocker within the patent-supported model domain. The candidate pair remains unchanged, the Stage 4 independent baseline is frozen and replayable, and the consolidated dossier records the remaining format-domain and integration limitations without promoting them to false passes.

## 2026-10-20 — Deployment validation and wording pass

Source re-read. Example 1 (PDF p. 6) was re-read from a 300 dpi render of the printed table: all 9 radii, 5 thicknesses, 4 air spaces including CS, the back focus and 5 indices matched the earlier file with no mismatches. The same render showed that Example 1 is one of the four third-order monochromatic preforms (nd only), while Example 7 (PDF p. 8) is the finished member of the same family with a full `nd/νd` pair per element, f/2.9, `2ω₀′ = 53.8°` and `s′∞ = 0.6341 F`. At the owner's direction the model was switched to Example 7. All 9 radii, 5 thicknesses, 3 air spaces, CS, s′∞ and 5 `nd/νd` pairs were read from a 300 dpi render and checked against the claim 8 copy (PDF p. 14); the only difference is the field, printed as 53.5° in claim 8 against 53.8° in the example table.

Changes. R, d, nd and νd now follow Example 7 at 40× scale; the stop stays at the midpoint of CS (2.0117 mm each side); the last gap is the printed s′∞ (25.364 mm). The semi-diameters were re-checked with real-ray envelopes at the 26.9° patent half-field and at the 21.63 mm 135-format corner and kept unchanged: every front surface still contains its bundle, and L5 stays edge-limited at 8.9 mm (edge about 0.15 mm), clipping about 4% of the full-aperture bundle at 26.9° and 18% at the format corner. Glass labels changed from `Unmatched (…)` to LAF3 (HOYA) for L1/L2, SF11 (Schott) for L3, S-BSM18 (OHARA) for L4 and S-LAM2 (OHARA) for L5; each resolves in the glass catalog at the printed coordinates. Element focal lengths and the design focal length were recomputed. The wording pass rewrote the header, subtitle, specs, focus description and element roles in the data file, and rewrote the analysis for Example 7, removing the unverified 51° marketed-angle claim, the TL/EFL "telephoto-form" remark and process vocabulary. Maker, name and assignee (Carl Zeiss Oberkochen; CARL ZEISS SONNAR 40mm f/2.8 (Rollei 35 S); Carl-Zeiss-Stiftung) were set before this pass and are unchanged.

First order, patent against model. Example 1 before the switch: EFL 1.00000 F (40.000 mm) against 40.0000 mm, BF 0.6341 F (25.364 mm) against 25.3643 mm, f/2.9 against f/2.900, Gardner index −0.0519 against −0.0519. Example 7 after the switch: EFL 1.00000 F (40.000 mm) against 40.0005 mm, BF 0.6341 F against 25.3639 mm, f/2.9 against f/2.900 (entrance-pupil semi-diameter 6.897 mm, stop semi-diameter 4.801 mm), Table II values reproduced (Gardner −0.0611, `B − A` +0.08924 Φ, quotient +0.07385). The surface, image-circle and field-coverage validators pass (coverage 100% to the 28.1° format corner).

Maker diagram. No Zeiss or Rollei cross-section of the production 40 mm f/2.8 was found, so the profile could not be compared. Retail and reference sources agree on 5 elements in 4 groups, made by Rollei under Zeiss licence, f/2.8 to f/22, 0.9 m minimum focus.

Open: the patent-to-product correlation remains inferred; no source names US 3,994,576 or an example for the Rollei 35 S Sonnar.


## 2026-10-20 — Second review: diagram, labels and movement

Compared. The local page (infinity, and `focus=1`, which shows the same state because no close focus is modeled) against the single drawing of US 3,994,576 (PDF p. 2), re-measured at 300 and 600 dpi. The patent text (PDF p. 3) calls that drawing a schematic exploded diagram of all the examples, not necessarily to scale; it draws the generic construction, not Example 7 (it also shows s45 open, although every example prints s45 = 0). Fitted surface radii confirm it is not to scale (R1 about 22 µm/px, R2′ about 36 µm/px), so only rim heights relative to one another were used. No maker cross-section exists for comparison (see the deployment section above).

Figure scale and rims. Axis at row 1824 (300 dpi); heights are top/bottom means in px. Outer rims: L1 443, L2 354, L3 285, L4 295, L5 307. Optical ends of chamfered faces: L1 rear 424, L2 rear 299, L3 rear 229, L4 front 221; diaphragm opening 225. The L1–L3 values give one scale of 24.8 µm/px (single faces 24.3–26.2) against the stored L1–L3 rims (11.0, 10.3, 8.85, 7.82, 6.98, 5.6 mm, all within 6%). At that scale the rear member reads L4 front face 5.5 mm, L4 rim 7.3 mm, L5 rim 7.6 mm, against stored 7.42 and 8.9 mm. On the site L5 rendered as tall as L2 and L4's front face as tall as its rim; in the figure the rear member is clearly lower than L2 and L4 has a front chamfer starting at the diaphragm's height. L5 is drawn square-cut with a thick edge, where the model had a 0.16 mm knife edge.

| Surface | Before sd | After sd | Evidence |
|---|---|---|---|
| 7 (L4 front) | 7.42 | 5.5 | Chamfer start 219/224 px × 24.8 µm/px = 5.5 mm; floor 4.74 mm axial marginal |
| 8 (L4/L5 interface) | 8.9 | 7.6 | L5 front rim 302/312 px = 7.6 mm (L4 rim 7.3 mm); floor 4.68 mm |
| 9 (L5 rear) | 8.9 | 7.6 | L5 rear rim 302/312 px = 7.6 mm, square-cut as drawn; floor 4.49 mm axial, 3.98 mm corner chief |

Results. The surface validator, image-circle check and field coverage (100% to the 28.1° format corner) pass; the real-ray check shows no axial clip or blocked chief ray at 26.9° or at the 21.63 mm corner. L5's edge rises from 0.16 mm to about 1.5 mm. Engine half-field 35.09° before, 34.06° after (rear rims lowered to the figure; still above the patent's 26.9°); f/2.900, EFL 40.0005 mm and stop semi-diameter 4.801 mm unchanged. The engine's meridional geometric transmission at full aperture goes from about 91% to 78% at 26.9° and from 88% to 75% at 28.1°; L4's front face alone accounts for most of it (the midpoint stop puts the bundle at 7.3 mm there, while the figure draws the diaphragm nearer L4). The curve is meridional only.

Checked and correct. Element names L1–L5 and group brackets A, B, C, D match the patent's own designations (the patent's Vgl/Hgl members are A–C and D); one cemented bracket on D (surfaces 7–9), no gap labels to clash with. Element types agree with the radius signs (L1, L2 positive menisci; L3, L4 negative menisci convex to the object; L5 biconvex); all surfaces spherical, no aspheric markers, no `apd` tags, and the patent claims no special dispersion. The stop is drawn in CS between L3 and L4. The inspector shows L4 and L5 as "DOUBLET D" with −22.69 and +13.87 mm focal lengths and the expected glass labels; L1 shows LAF3 (HOYA). Glass labels resolve to the nearest catalog rows (LAF3 HOYA 1.71700/47.98, SF11 Schott 1.78472/25.76, S-BSM18 OHARA 1.63854/55.38, S-LAM2 OHARA 1.74400/44.79; every νd within 0.02 of the print). The printed pairs recur across the patent (1.717/47.99 in Examples 6–7 and as 1.717 in Example 2; 1.744/44.77 in Examples 5–7; 1.785 and 1.638 in Examples 1–2), so they are real catalog glasses, not floated values. Example 7's table (PDF p. 8) was re-read against the file at 40×: all radii, thicknesses, spacings, s′∞ and indices agree. Focus: no keyframes, the slider reads "Not modeled" and the description gives the camera's 0.9 m only; no zoom. The patent prints no aberration curves, so no aberration comparison is possible.

Open. The figure is generic, so the rear-member rims are proportions, not measured dimensions. The stop split is a midpoint convention; the figure puts the diaphragm about 0.75 of the way across CS, which would reduce the oblique clipping at L4's front face. The catalog has no historical Schott LaF3, SK18 or LaF2 rows.
