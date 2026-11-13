# Qualified pre-integration audit
- Literal original GB198958 EI, four glasses/two cemented doublets.12-inch f6 example, not exact retail15/20-inch f5.6 specimen. Manufacturer-reported inscription bridge, not independently inspected photo.
- Source groupdiameters2.05/1.5inch retained, caps26.035/19.05mm; iris midpoint of2.73inchgap entirely inferred before rays. Default.9 geometry limits, no override or optical fitting.
- EFL11.7319460046inch vs12inch,−2.23378% residual retained. Calculated BFL5.97650496452inch not printed. Infinity only; magnification2 NOT2:1macro.
- SourceEI catalog6695 vsEII6675 retained. Source nD and conventionally interpretedV, d-line approximation, no full measured spectral/melt identity claim.
- Native and isolated strict TypeScript pass. Final optical payload equals accepted pilot except key/name; independent full-cap geometry/iris pass, final independent review required. Closed: the deployment review is recorded below.
- Assumed10°half-field diagnostic:26/26/23/21/18 exits, remaining clipped. No source numerical field, throughput, image-plane landing, full-pupil or MTF validation.
- Current-corpus/app/lint/format/build/browser/MTF deferred and unpassed. Hidden, undelivered, unintegrated, undeployed. Count only after final review and verified private archive. Historical visibility status closed: the coordinator enabled visibility before cleanup; broader application and measured-performance claims remain unmade.

## 2026-11-13 — Deployment validation

Codex independently re-read all three page images of GB 198,958 A and compared them with the independent validator's report. Checked the title-page inventor, assignee and dates; Example I's six radii, four glass thicknesses, 2.73-inch separation, four nD/Abbe pairs, two group diameters and cemented joins; the nominal 12-inch f/6 statement, infinity-object wording and absence of focusing tables; and Fig. 1's four-element/two-doublet construction. The validator reports an exact transcription: lengths are multiplied by 25.4, with group semi-diameters 26.035/19.05 mm, and no numerical correction is supported.

Verdict: valid with notes. The validator's manufacturer-source evidence is the Cooke Compendium (https://cookeoptics.com/compendium/), which reports “198958” inscriptions on Series VIII 20-inch SN 202365 and 15-inch SN 418036 specimens; this strongly supports the family link but does not establish an exact retail counterpart for Example I's nominal 12-inch design, and the Compendium's conflicting three-lens/BP 155640 wording remains unresolved.

Changes:
- File form: the incorrect `../LensVisualizer/src/types/lensDataV2.js` import → `../../types/lensDataV2.js`; direct `export default {` → `const LENS_DATA = { ... } satisfies LensDataV2Input;` followed by `export default LENS_DATA;`. Added one source header recording Example I, scale factor 1, inch-to-mm conversion, inferred midpoint stop and calculated back focus, source-derived rims, assumed field and spectral qualification. No comments occur inside the data object.
- Name: `Cooke Series VIII 12-inch f/6 (patent EI representative)` → `COOKE SERIES VIII TELEPHOTO (GB 198,958 Example I Design)`, as assigned.
- `catalog.focalLengthMm.marketing`: 304.8 → omitted. `LensCatalogV2Input` permits this field to be absent, and `apple/AppleiPhone12MainWideCameraLens.data.ts` is an existing design entry with only `focalLengthMm.design`. The validator found no attested 12-inch retail size. `design: 304.8` remains the source's nominal design value.
- `source.patentNumber`: `GB 198958` → `GB 198,958 A`; `source.example`: absent → `{ label: "Example I", id: "1" }`.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`; `catalog.imageFormat`: absent → `"4x5"`, as assigned. These are canonical identifiers; 4x5 is an assigned analysis format, not a numerical patent field specification.
- `projection.fullFieldDeg`: 20 → 30; `projection.maxTraceFieldDeg`: 10 → 15. Both limits now allow the approximately 14.8-degree 4x5 corner. The validator's original declared-field coverage was 66%; the new traced coverage is 100%. No rim was enlarged.
- `focus.description`: former process placeholder → `Infinity only; the patent tabulates no focusing data, so no focus movement is modeled.`
- Removed only obvious conversion noise: R1 54.60999999999999 → 54.61, R2 −157.98799999999997 → −157.988, thickness 3.0479999999999996 → 3.048, front semi-diameters 26.034999999999997 → 26.035 and rear semi-diameters 19.049999999999997 → 19.05. Prescription values otherwise remain as delivered; no fitting or optimization was performed.
- Analysis: the 10-degree sample counts are now identified as the earlier diagnostic; the current assumed 15-degree half-field and assigned 4x5 corner are stated. Other analysis wording is left for the cleanup pass.

First-order values after these changes, from `built.mjs`: EFL 297.99142851621065 mm, f/6.000, physical stop semi-diameter 17.493250537513028 mm, half-field 15 degrees and total track 241.97322609880797 mm. The inferred final back-focus interval remains 151.80322609880798 mm. The validator's EFL result is 11.732 inches, −2.23% against the nominal 12 inches, with EFL/BFD 1.96; that discrepancy is retained.

Audits run from the main checkout against this data file: `audit:surface` OK, no validation errors; `audit:aperture` one station within 3% of the stated f-number, with zero rim, trace or iris limits and zero failures; `audit:image-circle` one lens checked, zero undersized, zero skipped (4x5 diagonal 162.6 mm, semi-diagonal 81.30 mm). `audit:field-coverage --below=1.01` skips the hidden original; on a scratch copy differing only in `visible: true`, it reports 100%, modeled 14.8 degrees → 81.30 mm of 81.30 mm, corner 14.8 degrees clear, one station OK and zero skipped. The delivered file remains `visible: false` (historical status, closed by the coordinator's visibility change before cleanup). These are model checks, not measured retail performance. No application tests, typecheck, lint, build, generated outputs or servers were run, as instructed.

Open at deployment, now closed: the coordinator settled the key and filename; cleanup addressed analysis wording and spacing, the private source link, element shapes and cemented labels, glass labels, subtitle and specs. The group rims are retained from the printed diameters; detailed rim-versus-figure measurement remains open. No retail 12-inch product identity, physical iris position, focusing movement or measured full dispersion is established.

## 2026-11-13 — Cleanup and wording pass

Re-read the validator and deployment reports and the cached images of all three patent pages, including both numerical tables and Fig. 1. The table identifies L1 as Chance C 9002 and L2–L4 as Parra-Mantois P.M. 6661, 6062 and 6695; these vendor distinctions are preserved. Example II prints P.M. 6675 for the same last-glass nD/ν. No optical value, stop position or rim was changed.

Fields changed: subtitle absent → `GB 198,958 A, Example I — Cooke Series VIII telephoto design`; specs absent → `4 ELEMENTS / 2 GROUPS`, `DESIGN f = 12 in`, `F/6`, `ALL SPHERICAL`. Types now follow the radii: Biconvex Positive, Biconcave Negative, Plano-Concave Negative, Plano-Convex Positive. Element labels stay `Element N`; roles identify the positive/negative members of each doublet. Both L1/L2 carry `cemented: C1`, both L3/L4 carry `cemented: C2`, with `doublets` spanning surfaces 1–3 and 4–6. No APD tags were added. `focus.closeFocusM` is written as `1e15` with identical numeric value; its description is now `Infinity focus only; the patent tabulates no focusing data.` No other catalog metadata was added.

Glass relabels, all with Δnd = 0 and Δν = 0 relative to the previous source constants:
- L1: Chance9002 with explanatory suffix → `Unmatched (nD 1.5744 / V 57.7, Chance 9002)`.
- L2: Parra-Mantois6661 with explanatory suffix → `Unmatched (nD 1.6515 / V 33.4, Parra-Mantois 6661)`.
- L3: Parra-Mantois6062 with explanatory suffix → `Unmatched (nD 1.5732 / V 51.9, Parra-Mantois 6062)`.
- L4: Parra-Mantois6695/sourceEII6675 with explanatory suffix → `Unmatched (nD 1.6117 / V 37.4, Parra-Mantois 6695)`; the discrepancy is explained in the header and analysis.

An exhaustive catalog-row and curve check found zero matches for each glass at |Δnd| ≤ 0.0001 and |Δν| ≤ 0.15. `trylabel.mjs` and `glasscheck.mjs` confirm all four remain unresolved with Abbe fallback. No nC/nF/ng anchors were present or added.

The public analysis now follows identification, architecture, cemented-element analysis, glass, focus and model-limit sections. It preserves the −2.23378% EFL residual, source versus inferred dimensions, historical D versus d approximation and f/32 limitation; removes process/test/sample-count/private-link passages; fixes spacing; and explains Lee/Kapella, the Compendium's 15/20-inch patent engravings, retail f/5.6 and the conflicting three-element/GB 155,640 description. The Compendium was checked live at https://cookeoptics.com/compendium/. The analysis is shorter (664 → 618 whitespace-separated words).

Engine values before → after are identical: EFL 297.99142851621065 → 297.99142851621065 mm; FOPEN 6 → 6; halfField 15 → 15 degrees; stop radius 17.493250537513028 → 17.493250537513028 mm; BFD 151.80322609880798 → 151.80322609880798 mm; total track 241.97322609880797 → 241.97322609880797 mm. `probe.mjs` retains both static focus keyframes at EFL 297.9914, BFD 151.8032 and f/6.000. From the assigned worktree, `audit:surface` returns OK with no validation errors; `audit:aperture` reports one station within 3%, zero rim/trace/iris limits and zero failures; `audit:field-coverage --all` reports one station at ≥99%, zero unsolved and zero skipped.

Open:
- The printed 26.035/19.05 mm semi-diameters are unchanged. Fig. 1 visually agrees with two unequal cemented bodies; calibrated rim-versus-figure measurements remain unperformed, and off-axis rim vignetting remains possible.
- A retail 12-inch counterpart and exact production prescription are unestablished; the Compendium's construction description conflicts with its reported patent engravings.
- The −2.23378% nominal-EFL residual remains; no numerical correction is supported.
- The iris position and radius are inferred, and stops through f/32 are not documented retail markings.
- The 15-degree field and 4x5 analysis format are modeling choices, not source coverage specifications.
- No focusing movement or retail minimum focus distance is established.
- Full measured dispersion and melt identity are unknown; the four glasses remain Unmatched and historical D is approximated by d.
- Rendered-page review is incomplete: the required screenshot helper produced no image (thermal-monitor/DNS-watch errors); the browser fallback returned `MCP tool call requires approval, but approval policy is never`. That browser action was stopped without retry or workaround, as the addendum requires. No final UI appearance is claimed.

No git state changes, broad application checks, generation, downloads, formatter runs or server changes were made.
