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

Open at deployment, now closed: the coordinator settled the key and filename; cleanup addressed analysis wording and spacing, the private source link, element shapes and cemented labels, glass labels, subtitle and specs. The group rims are retained from the printed diameters; detailed rim-versus-figure measurement is closed by the semi-diameter pass below. No retail 12-inch product identity, physical iris position, focusing movement or measured full dispersion is established.

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

- Closed by the semi-diameter pass below: the printed 26.035/19.05 mm semi-diameters agree with calibrated Fig. 1 measurements. Off-axis rim vignetting is quantified below.
- A retail 12-inch counterpart and exact production prescription are unestablished; the Compendium's construction description conflicts with its reported patent engravings.
- The −2.23378% nominal-EFL residual remains; no numerical correction is supported.
- The iris position and radius are inferred, and stops through f/32 are not documented retail markings.
- The 15-degree field and 4x5 analysis format are modeling choices, not source coverage specifications.
- No focusing movement or retail minimum focus distance is established.
- Full measured dispersion and melt identity are unknown; the four glasses remain Unmatched and historical D is approximated by d. (closed 2026-11-13: the blanket Unmatched status is resolved by the L1 S-BAL11 spectral proxy; L2–L4 remain Unmatched, and full measured dispersion, historical melt identity and the D-to-d approximation remain open limitations.)
- Rendered-page review is incomplete: the required screenshot helper produced no image (thermal-monitor/DNS-watch errors); the browser fallback returned `MCP tool call requires approval, but approval policy is never`. That browser action was stopped without retry or workaround, as the addendum requires. No final UI appearance is claimed.

No git state changes, broad application checks, generation, downloads, formatter runs or server changes were made.

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local `patents/GB198958A.pdf`, printed p. 2, first numerical table (Example I), and PDF p. 3, Fig. 1. The title page identifies Horace William Lee and Kapella Limited, application 7 October 1922, complete specification accepted 14 June 1923. Source dimensions are inches converted by ×25.4, without production rescaling. Contrary to the assignment's starting note, these rims are printed dimensions, not inferred: p. 2 explicitly gives front-combination diameter 2.05 inches and back-combination diameter 1.5 inches.

The 600-dpi figure was measured in its local axis, tilted approximately 1.293° on the scan. Near-axis vertex x positions are approximately 1546, 1797, 1870, 3501, 3551 and 3667 px. Correcting the slight tilt gives S1–S6 span 2121.5 px / 90.170 mm = 23.53 px/mm; independently, S3–S4 gives 1631.4 px / 69.342 mm = 23.53 px/mm. The four glass thicknesses give approximately 23.53, 23.96, 24.61 and 22.84 px/mm, within about 5% of the common scale at the thin drawn interfaces. As a transverse/curvature check, the well-drawn S1 arc fits approximately 54.6 mm against printed 54.61 mm, and S4 approximately −34.8 mm against −34.29 mm. Front and rear full rim heights are approximately 1230 and 898 px, giving semi-diameters about 26.1 and 19.1 mm (roughly ±0.3 mm drawing uncertainty). The front/rear height ratio is approximately 1.37, versus printed 2.05/1.5 = 1.367. The figure is sufficiently to scale for a dimensional cross-check; printed diameters remain the governing authority.

| Surface | Before sd (mm) | After sd (mm) | Figure estimate (mm) | Evidence and disposition                                      |
| ------- | -------------: | ------------: | -------------------: | ------------------------------------------------------------- |
| 1       |         26.035 |        26.035 |                ≈26.1 | Printed front-combination diameter; square front body agrees. |
| 2       |         26.035 |        26.035 |                ≈26.1 | Cemented interface within the same square-cut front body.     |
| 3       |         26.035 |        26.035 |                ≈26.1 | Same printed front diameter and common drawn rim height.      |
| 4       |          19.05 |         19.05 |                ≈19.1 | Printed rear-combination diameter; square rear body agrees.   |
| 5       |          19.05 |         19.05 |                ≈19.1 | Plane cemented interface within the same rear body.           |
| 6       |          19.05 |         19.05 |                ≈19.1 | Same printed rear diameter and common drawn rim height.       |

No optical rim, land, cut, geometry override, stop radius or stop position changed. The front body remains higher than the rear body, with no steps inside either cemented body. No mechanical extension is supported. The data header and public analysis now record the figure agreement and geometric transmission. This closes the earlier calibrated-rim-measurement item.

All four element edge thicknesses are positive: L1 1.903, L2 7.589, L3 7.811 and L4 1.615 mm at their retained rims. The iris remains halfway along the 69.342-mm vertex air gap, 34.671 mm from each facing vertex. Even the extreme optical rims leave axial distances of 32.290 mm from S3 to the iris plane and 28.892 mm from that plane to S4. No iris relocation or radius change is recommended: the patent does not draw or dimension an iris, and the present inference has ample clearance. The derived f/6 physical radius remains 17.493250538 mm.

The surface audit returns OK with no errors. The aperture audit reports one station within 3% of the stated f-number, zero rim limits, zero trace limits, zero iris limits and zero failures. The image-circle audit checks one lens with zero undersized and zero skipped. Traced 4x5 field coverage is 100% before and after: approximately 14.8° reaches 81.30 mm of the 81.30-mm semi-diagonal, with the corner chief ray clear. The independent meridional trace at Y = 81.30 mm finds no CLIPS-AXIAL or BLOCKS-CHIEF: axial marginal heights S1–S6 are 24.83, 24.32, 23.20, 12.48, 12.66 and 12.81 mm; chief-ray absolute heights are 16.36, 14.24, 13.11, 12.44, 14.13 and 15.22 mm. Minimum rim margins are approximately 1.20 mm for the on-axis marginal ray at S1 and 3.83 mm for the corner chief ray at S6. These scratch meridional heights set the stop from an exact nominal entrance ray and are distinct from the engine's paraxial stop construction; the aperture audit confirms the retained engine aperture.

`rimcost.mjs` against `.lens-work/base1123sd/CookeSeriesVIIITelephotoGB198958.data.ts`, with `--loo`, finds no changed element to restore and zero transmission loss at every sampled field. Geometric pupil transmissions, baseline → final, are identical: 0° 100.0% → 100.0%; 2.5° 99.1% → 99.1%; 4.9° 93.9% → 93.9%; 7.4° 85.5% → 85.5%; 9.9° 69.1% → 69.1%; 12.3° 50.4% → 50.4%; approximately 14.8° at the 4x5 corner 31.2% → 31.2%. These are full-pupil geometric transmission fractions, not measured illumination or cosine falloff. Real off-axis clipping is retained.

Engine quantities are unchanged: EFL 297.991428516 mm, f/6.000, declared half-field 15°, tracing half-field 17.843005868°, back focus 151.803226099 mm and total track 241.973226099 mm. The model is infinity-only, with no additional printed focus states to check.

The current/baseline model sketch and the 600-dpi patent crop were rendered and inspected. The matched-scale red-model/black-patent comparison is `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/viii/overlay.png`; source and model outlines agree within the scan/drawing noise. The supplied `v-viii/diagrams/smg_halfsection.jpg` is a photograph of a cutaway, not a calibrated maker construction diagram: it supplies no reliable independent rim dimensions or special-glass positions. The patent establishes four spherical elements in two cemented groups; no aspheres are present. A live-page check remains for the coordinator under this pass's no-browser instruction; the prior browser refusal was not retried.

Remaining limits are unchanged: no established retail 12-inch counterpart, the retrospective's conflicting three-element/GB 155,640 wording, the nominal-EFL residual, inferred iris, assumed format/field, unknown focus mechanics and unresolved full dispersion. No new name, metadata or transcription problem was found. Only the assigned three files were edited, with targeted formatting; no git changes, broad application checks, generation or servers were run. No sandbox refusal occurred during this pass.

## 2026-11-13 — Glass proxies and catalog metadata

- L1: `Unmatched (nD 1.5744 / V 57.7, Chance 9002)` → `S-BAL11 (spectral proxy; patent nD 1.5744 / V 57.7, Chance 9002; supplier and melt unspecified)`. The Ohara catalog row has nd = 1.572501 and νd = 57.74: Δnd = −0.001899 and Δν = +0.04 (catalog minus patent). This satisfies the repository's approximate |Δν| ≤ 0.25 and |Δnd| ≤ 0.002 proxy rule. The printed reference-line index and Abbe number remain unchanged; only the row's wavelength dependence is borrowed. This is not an exact match or an identification of historical glass, supplier or melt.
- L2–L4 retain `Unmatched (nD 1.6515 / V 33.4, Parra-Mantois 6661)`, `Unmatched (nD 1.5732 / V 51.9, Parra-Mantois 6062)` and `Unmatched (nD 1.6117 / V 37.4, Parra-Mantois 6695)`, respectively. No catalog row lies within the proxy Abbe window for these glasses.

`chan.mjs` compares `.lens-work/base1123glass/CookeSeriesVIIITelephotoGB198958.data.ts` with the assigned worktree data. C/d/F/g correspond to R/G/B/V; paraxial back-focus offsets are relative to d, in µm:

| Line | Before |  After |
| ---- | -----: | -----: |
| C    | +392.5 | +386.9 |
| d    |    0.0 |    0.0 |
| F    | −386.4 | −308.9 |
| g    | −191.3 |  −46.1 |

The g-line offset moves +145.2 µm toward the d-line focus because L1's catalog partial dispersion replaces the generic Abbe extrapolation. These are qualified model results, not measured chromatic performance. The corresponding paraxial quantities from `chan.mjs`, before → after, in mm, are:

| Line | EFL                 | Back focus          |
| ---- | ------------------- | ------------------- |
| C    | 298.5120 → 298.5043 | 152.1957 → 152.1901 |
| d    | 297.9914 → 297.9914 | 151.8032 → 151.8032 |
| F    | 297.4255 → 297.5318 | 151.4169 → 151.4943 |
| g    | 297.5897 → 297.7889 | 151.6119 → 151.7572 |

Catalog metadata: name `COOKE SERIES VIII TELEPHOTO 12 in f/6 (GB 198,958 Example I Design)` → `COOKE SERIES VIII TELEPHOTO 12 in f/6 (GB 198,958 Design)`. The analysis H1 already identifies the 12-inch f/6 Example I design and is retained. `catalog.fNumber.marketing: 5.6` → omitted; `catalog.fNumber.design: 6` remains. No 12-inch retail counterpart is established, so the family f/5.6 figure remains in the historical prose without becoming this design's marketing aperture. Example I remains the structured source example and the analysis's numerical prescription.
