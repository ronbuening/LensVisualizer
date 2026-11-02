# ZeissSonnar50mmf15OptonContax — Consolidated Stage 1–3 Audit

## Job and controlling references

- **PATENT:** US2186621
- **LENS:** Zeiss Sonnar 50mm F1.5 Opton Contax
- **EMBODIMENT:** Example 1
- **OUTPUT STEM:** `ZeissSonnar50mmf15OptonContax`
- **Current stage:** 3 — analysis authoring from the verified Stage 2 data revision
- **Current pair:** `ZeissSonnar50mmf15OptonContax.data.ts` + `ZeissSonnar50mmf15OptonContax.analysis.md`
- **Integration status:** `INTEGRATION_PENDING` — closed 2026-10-20: integrated; see the last section.

The four-field card fixes the job. `US2186621.pdf` and the job card are retained as original package inputs. The current shared workflow contract is CHAT-1.0 (2026-09-11). The manifest records SHA-256 hashes for the current chat protocol, dossier contract, data/analysis specifications, template, defaults, taxonomy options, adding-a-lens guide, integration handoff, workflow guide, Prettier configuration, and prompt-pack checker actually available for this run.

## Extraction and source conventions

US 2,186,621, *Lens System*, names Ludwig Bertele as inventor and Zeiss Ikon Aktiengesellschaft as assignee. It was filed 1938-06-15, claims a German application dated 1937-07-13, and was granted 1940-01-09.

The job card says `Example 1`, while the patent itself does not print “Example 1” / “Example 2” labels. The fixed selection is therefore mapped to the **first numerical block in publication order**, associated with Figure 1. This is not a substitution: it is the first worked prescription in the selected patent. The patent explicitly labels Figure 1 as a prior-art lens system and points to US 1,975,678. The second numerical block belongs to Figure 2 and the patent's new four-unit form; it was not used.

The rendered source was inspected rather than trusting the mangled text extraction for the table. PDF page 2 visibly gives the first block as:

| Surface | Radius (mm) | Distance after (mm) | Medium after |
|---|---:|---:|---|
| R1 | +69.21 | d1 = 9.33 | nd 1.6710, v 47.2 |
| R2 | +433.84 | l1 = 0.38 | air |
| R3 | +35.86 | d2 = 11.81 | nd 1.6710, v 47.2 |
| R4 | +85.78 | d3 = 7.05 | nd 1.4892, v 70.1 |
| R5 | -846.31 (misread; the page prints -646.31 — corrected 2026-10-20, see last section) | d4 = 1.90 | nd 1.7394, v 28.2 |
| R6 | +23.51 | l2 = 15.24 | air |
| R7 | infinity | d5 = 2.48 | nd 1.5232, v 50.9 |
| R8 | +51.09 | d6 = 19.81 | nd 1.6578, v 51.2 |
| R9 | -22.12 | d7 = 4.57 | nd 1.5894, v 61.2 |
| R10 | -103.13 | unpublished image distance | air |

The same source paragraph publishes relative aperture 1:1.5 and focal length `f = 100 mm`. The prescription is seven elements in three air-spaced groups: L1; cemented L2-L3-L4; cemented L5-L6-L7. Figure 1 places an iris line in `l2`, between L4 and L5. US 1,975,678 independently states that the iris diaphragm lies between L4 and L5 and that the film is to the right. Neither document provides a numerical stop split or physical iris diameter for this exact selected table.

The adopted raw sign convention is object left / image right, with positive radius centers to the right. This matches the rendered Figure 1 and the surface shapes. Distances are positive physical front-to-rear spacings. The patent's `nd` / `v` notation is retained as native d-line / Abbe-d coordinates; the 587.56 nm numerical wavelength comes from the current LensVisualizer specification, not from the patent. No aspheres, asphere equation, line-index table, partial-dispersion data, rear plates, zoom states, or finite-focus spacings are published for this block.

## Model transformations planned for Stage 2

1. **Uniform scale:** the identified Contax Sonnar is nominally 50 mm, while the selected patent block is nominally 100 mm. The Stage 2 construction plan is `s = 0.5`. Every dimensional radius, spacing, inferred semi-diameter, and image-plane coordinate must be multiplied by 0.5. Indices and Abbe numbers remain unchanged. There are no asphere coefficients to transform. The scale is based on the nominal 50/100 correspondence; it is not adjusted to force the computed EFL to exactly 50 mm.
2. **Stop:** `l2` must be split at an iris position inferred from the rendered figure. Because the source does not give a physical diameter, Stage 2 may infer/calibrate the stop radius to the modeled nominal f/1.5. Such agreement is calibration, not independent confirmation of a patent stop diameter.
3. **Semi-diameters:** none are published. Stage 2 must derive them from traced aperture requirements and the source silhouette, then apply the current edge-thickness, actual rim-slope, shared-band cross-gap, off-axis-containment, and render-trim rules.
4. **Image plane:** use the independently calculated infinity BFD. Do not describe that BFD as a published source value.
5. **Focus:** no internal moving-group model is reconstructed.

## Independent first-order verification

The portable verifier implements the prescription twice: a sequential height/reduced-angle (`y`, `n*u`) tracer and an independently assembled 2 x 2 ABCD matrix. Their system matrices agree to floating-point precision. The air-to-air system determinant is 1.0.

### Raw 100 mm patent scale

| Quantity | Verified result |
|---|---:|
| Paraxial EFL | 99.5733486265 mm |
| Patent nominal EFL | 100 mm |
| Residual | -0.4266513735 mm |
| Source-precision comparison tolerance | +/-0.6485006286 mm |
| Vertex track R1 -> R10 | 72.5700000000 mm |
| BFD R10 -> infinity image | 44.5362492140 mm |
| Front vertex -> infinity image | 117.1062492140 mm |
| H1 from R1 | +16.7728798217 mm |
| H2 from R10 | -55.0370994125 mm |
| TL/EFL | 1.1760802547 |
| BFD/EFL | 0.4472707791 |

The EFL comparison is a pass without changing the source: the printed nominal `100 mm` has a half-unit rounding interval of 0.5 mm. A conservative finite-difference, worst-aligned half-LSD propagation of the table's 0.01 mm radii/spacings and 0.0001 indices adds 0.1485006286 mm, giving the recorded +/-0.6485006286 mm tolerance. The observed -0.42665 mm mismatch remains visible rather than being “fixed.”

Under the project definitions, this source model is **not** called telephoto because `TL/EFL = 1.1761 > 1`, and it is **not** retrofocus because `BFD/EFL = 0.4473 < 1`.

### Planned 0.5-scale model

Uniform rescaling was executed as a separate branch rather than by multiplying stored answers:

| Quantity | Verified scaled result |
|---|---:|
| EFL | 49.7866743133 mm |
| Nominal correlation target | 50 mm |
| BFD | 22.2681246070 mm |
| Vertex track | 36.2850000000 mm |
| Front vertex -> infinity image | 58.5531246070 mm |
| H1 from scaled R1 | +8.3864399109 mm |
| H2 from scaled R10 | -27.5185497062 mm |

All first-order lengths scale by exactly 0.5 within numerical tolerance. This is the construction target for Stage 2, not a second source prescription.

### Standalone element and cemented-group power

Standalone element powers are calculated with each physical element hypothetically placed in air. They must not be confused with cemented-group net power or in-situ full-system behavior.

| Element | Standalone power (mm^-1) | Standalone EFL in air (mm) |
|---|---:|---:|
| L1 | +0.0082322020 | +121.47418197 |
| L2 | +0.0119238004 | +83.86587900 |
| L3 | +0.0062653938 | +159.60688757 |
| L4 | -0.0323541362 | -30.90794922 |
| L5 | -0.0102407516 | -97.64908257 |
| L6 | +0.0380378174 | +26.28962616 |
| L7 | -0.0204925950 | -48.79811475 |

| Cemented / functional group | Net power in air (mm^-1) | Group EFL in air (mm) |
|---|---:|---:|
| G1 = L1 | +0.0082322020 | +121.47418197 |
| G2 = L2-L3-L4 | -0.0075678001 | -132.13879599 |
| G3 = L5-L6-L7 | +0.0110721286 | +90.31687015 |

The separated full system has positive net power `1/EFL = 0.01004284795 mm^-1`; group powers are not simply additive because the air separations and principal-plane positions matter.

### Petzval verification

Petzval is computed surface by surface as required, `phi/(n*n')`, not from an element shortcut.

| Surface | Petzval contribution (mm^-1) |
|---|---:|
| R1 | +0.005801993274 |
| R2 | -0.000925585364 |
| R3 | +0.011197879379 |
| R4 | -0.000851683747 |
| R5 | -0.000114131451 |
| R6 | -0.018081204219 |
| R7 | 0 |
| R8 | +0.001043326146 |
| R9 | +0.001173560910 |
| R10 | +0.003595770003 |
| **Sum** | **+0.002839924930** |

Its reciprocal magnitude is 352.12198378 mm. No sign-reversed “Petzval radius” is asserted because the project requirement here is the per-surface `phi/(n*n')` sum.

## Stop, pupil, aperture, focus, and geometry limits

The patent publishes **f/1.5**, but not enough aperture data to independently derive the entrance pupil or f-number. The verifier therefore deliberately records exact pupil/f-number verification as `NOT_RUN` for Stage 2. No stop diameter, entrance-pupil diameter, or inferred f-number is reported as a source fact.

Similarly, semi-diameter geometry is `NOT_RUN` for Stage 2 because no source semi-diameters exist. This is not a disguised geometry pass.

Focus disposition is **NO_INTERNAL_RECONSTRUCTION**. The selected block has no variable gaps or finite object-distance states. Historical product evidence indicates the Contax standard lens is translated by the camera focusing mechanism; that does not justify inventing internal group motion. Any close-focus representation in Stage 2 must be a disclosed unit-translation model supported by product/body evidence, not a reconstructed internal law.

## Glass review

Six distinct source coordinates are present. SCHOTT, OHARA, HIKARI/Nikon, CDGM, HOYA, and SUMITA authoritative catalog sources were checked or their current official catalog downloads were verified as available. The source never names a glass supplier. Accordingly, modern coordinate-compatible rows are retained as **candidates**, not historical melt identities.

| Source coordinate | Used in | Catalog evidence / residual | Stage 2 naming recommendation |
|---|---|---|---|
| 1.6710 / 47.2 | L1, L2 | SCHOTT N-BAF10 1.67003 / 47.11: dN = -0.00097, dV = -0.09 | coordinate/code 671472 or qualified class; no supplier claim |
| 1.4892 / 70.1 | L3 | HIKARI J-FK5 1.487490 / 70.31: dN = -0.00171, dV = +0.21 | coordinate/code 489701 or qualified fluor-crown class |
| 1.7394 / 28.2 | L4 | SCHOTT SF10: dN = -0.01115, dV = +0.21; N-SF4: dN = +0.01573, dV = -0.82 | `Unmatched` / dense-flint class, retain 739282 |
| 1.5232 / 50.9 | L5 | no defensible exact current named row established | `Unmatched` / crown-flint class, retain 523509 |
| 1.6578 / 51.2 | L6 | SCHOTT N-SSK5 1.65844 / 50.88: dN = +0.00064, dV = -0.32 | coordinate/code 658512 or qualified dense-crown class |
| 1.5894 / 61.2 | L7 | HIKARI J-SK5: dN = -0.00027, dV = +0.02; OHARA S-BAL35: -0.00027/-0.06; OHARA L-BAL35: -0.00027/0.00; SCHOTT N-SK5: -0.00027/+0.07 | generic 589612 / equivalent class unless supplier evidence appears |

Two glass-discipline points are important:

- OHARA `S-BAL35` and `L-BAL35` are retained as different catalog families even though both sit near the source coordinate; their prefixes are not collapsed.
- The source coordinate code **489701** must not be circularly “matched” to a catalog merely because a vendor's **e-line** code happens to resemble those digits. The selected patent coordinate is native `nd`/`vd`; d-line residuals control the comparison.

HOYA's official 2026 download page identifies current Excel data (2026-06-01) and a Zemax catalog including obsolete glasses (2026-07-07). SUMITA identifies Optical Glass Data 14.02.00 and all/discontinued Zemax data updated 2026-08-26. Their accessible web pages did not expose row-level nearest-neighbor tables in this run, so no HOYA or SUMITA product name is asserted from an incomplete search. CDGM's current 336-record database and equivalence columns were also consulted. This limitation is source coverage, not permission to assign a speculative name.

Catalog line indices retained in `evidence.json` belong to the candidate rows only. The patent itself publishes no `nC`, `nF`, `ng`, or `dPgF`, so no APO/anomalous-partial-dispersion claim is supportable from the selected source.

## Product identity and correlation

ZEISS states that Sonnar was developed in the early 1930s for the Zeiss Ikon Contax 35 mm camera. An archival Zeiss Ikon interchangeability brochure lists **SONNAR f/1.5, focal length 2 in / 50 mm, 543/60 J**. Secondary Opton-specific references place the West German Zeiss-Opton version around 1950-1953 and report a 7-element/3-group Contax RF lens with camera-body focusing.

This is enough to support the Stage 2 product metadata plan (`contax-rf`, `135-full-frame`) and the nominal 0.5 scale. It is **not** enough to call US2186621's first block a manufacturer-confirmed exact postwar Opton prescription. The patent itself says the selected block is prior art and cites US1975678. That contradiction/qualification must remain visible in the future data header and analysis.

## Correction and discrepancy register

1. **OCR table cleanup - transcription correction only.** The parsed patent text garbles signs, decimal commas, and row alignment. Rendered PDF page 2 was inspected and the table above is the controlling transcription. The patent bytes were not altered and no source numerical value was “corrected.”
2. **Example-label mapping - disclosed interpretation.** `Example 1` is mapped to the first numerical block because the patent lacks example labels. The second block was not substituted.
3. **EFL mismatch - retained.** Computed raw EFL is 99.57335 mm versus printed nominal 100 mm. The residual is within a source-precision-aware tolerance and remains recorded; no radius/index was changed to make it disappear.
4. **Stop - incomplete source data.** The iris interval is supported; its numerical location and diameter are not. Exact pupil/f-number is therefore deferred.
5. **Glass names - no silent supplier assignment.** Coordinate candidates are preserved with residuals; uncertain glasses remain code/class/Unmatched candidates.
6. **Production correlation - qualified.** Architecture/product evidence is strong, but exact Opton prescription identity is not manufacturer-confirmed.

## Check disposition

Mandatory Stage 1 `CHAT_PREFLIGHT` checks pass: job identity, original-byte fingerprints during verifier execution, selected-block structure, independent sequential/ABCD agreement, determinant, source EFL comparison, Petzval replay, power decomposition, uniform scaling, glass-coverage/residual replay, product-correlation disclosure, and focus disposition.

The following are intentionally later-stage checks:

- `exact_pupil_and_fnumber`: `NOT_RUN`, first required at Stage 2 after stop inference.
- `semi_diameter_geometry`: `NOT_RUN`, first required at Stage 2 after semi-diameter construction.
- real `buildLens()` / validator: `NOT_RUN`, Stage 2.
- production render diagnostics: `NOT_RUN`, Stage 2.
- runtime glass resolution: `NOT_RUN`, Stage 2.
- full project TypeScript typecheck: `NOT_RUN`, integration.

No Stage 1 blocker remains.

## Quantitative-claim map

| Claim | Governing fact/result | Source / revision |
|---|---|---|
| Patent f=100 mm, f/1.5 | `fact.source.nominal` | P1 rendered PDF p.2 |
| 7 elements / 3 groups / 10 surfaces | `fact.source.architecture` | P1 Fig.1 + p.2 table |
| Raw EFL 99.5733486265 mm | `fact.calc.raw.efl` | current evidence + verifier hashes in results |
| Raw BFD 44.5362492140 mm | `fact.calc.raw.bfd` | current evidence + verifier |
| Raw vertex track 72.57 mm | `fact.calc.raw.track` | current evidence + verifier |
| Scaled EFL 49.7866743133 mm | `fact.calc.scaled.efl` | MD2 + verifier scaled branch |
| Scaled BFD 22.2681246070 mm | `fact.calc.scaled.bfd` | MD2 + verifier scaled branch |
| Focus status | `fact.focus.status` | evidence.focus |
| Product-correlation qualification | `fact.correlation.status` | evidence.productCorrelation |

## Gate disposition and Stage 2 tasks

**Gate:** `READY_FOR_DATA`

Stage 2 must: construct the same-stem `.data.ts` from the verified first block; apply uniform `s=0.5`; infer/document the iris split and physical stop radius without calling it published; infer semi-diameters and run current geometry/render checks; use cautious glass code/class/Unmatched labels; preserve the qualified production correlation; keep `NO_INTERNAL_RECONSTRUCTION` unless a mechanism-constrained unit-focus representation is explicitly justified; and run the actual candidate through available LensVisualizer checks.

Repository/batch integration remains pending and is not part of this Stage 1 approval. (Closed 2026-10-20: integrated.)

## Stage 2 data construction checkpoint

### Entry gate and bound revision

The Stage 1 job remains fixed as **US2186621 / Zeiss Sonnar 50mm F1.5 Opton Contax / Example 1 / `ZeissSonnar50mmf15OptonContax`**. The original job-card and patent hashes replayed successfully before construction. The current controlling CHAT-1.0 protocol, dossier contract, data specification, template, defaults, taxonomy, authoring guide, integration handoff, workflow guide, Prettier configuration, and prompt-pack checker have the same hashes recorded by Stage 1.

The completed root-level candidate is `ZeissSonnar50mmf15OptonContax.data.ts`, SHA-256 `fdfdac5ba27b6b3010e463e6b2955390f35a457252cbc8fae957b0e560b863c8`. The verifier loads that exact file through the TypeScript 5.8.3 compiler AST, permits only the literal payload grammar, and rejects both an injected duplicate key and an injected runtime arithmetic expression. The portable loader confirms the required root type import, `satisfies LensDataInput`, and default export. This is not a LensVisualizer repository typecheck.

### Implemented transformations

The source prescription remains untouched in `rawPrescription`. The application model uniformly scales every source radius and physical spacing by `s = 0.5`. The single source air space `l2 = 15.24 mm` therefore becomes `7.62 mm`. Figure 1 places the iris close to the rear group; the modeled stop is set at 82% of that scaled gap from R6 toward R7, giving `6.2484 mm` before the stop and `1.3716 mm` after it. This is a drawing-based estimate, not a printed axial coordinate.

The stop semi-diameter is `9.311718684683 mm`. It was selected by paraxial pupil calibration so the parsed implemented model yields f/1.5; therefore agreement with the patent's f/1.5 statement is calibration, not independent evidence of the physical diaphragm diameter. The entrance-pupil semi-diameter is `16.595558104422 mm`.

The final image distance is the calculated infinity BFD, `22.268124607016 mm` from the last lens vertex. The patent does not print an image distance for the selected block.

All semi-diameters are modeled because the patent prints none. The authored set is 18.50, 18.30, 14.70, 13.75, 13.00, 9.80, STO 9.3117186847, 9.60, 9.50, 9.35, and 10.25 mm in sequential model order.

### Numerical verification from the parsed data file

The implemented sequential y–nu and ABCD matrices agree to the verifier tolerance. The resulting EFL is `49.786674313266 mm`, exactly the Stage 1 scaled calculation within floating-point tolerance and `-0.213325686734 mm` below the nominal 50 mm correlation target. The vertex track R1→R10 is `36.285000000000 mm`; the front vertex to infinity image is `58.553124607016 mm`. The air-to-air determinant is `1.000000000000`.

The Stage 2 Petzval sum is `0.005679849859253 mm^-1`, the expected 2× raw-scale sum under `s = 0.5`; its reciprocal magnitude is `176.060991889 mm`. Standalone element powers and cemented-group net powers were recomputed from the parsed data and kept separate from the full-system in-situ power. Authored `fl` fields agree with the independently recomputed standalone thick-element values.

### Geometry and ray containment

Portable geometry checks pass on the final candidate. The minimum sampled physical edge thickness is `0.203624477231 mm` (L1), and the largest actual spherical rim-slope angle is `57.713615295°`, below the current 64.2° policy. The R6→STO sub-gap is the limiting shared-band gap check: its sag intrusion is `4.580606636285 mm` against an allowed `5.623560000000 mm`, leaving `1.667793363715 mm` of axial clearance.

Exact meridional spherical tracing checks axial stop-edge rays, the default on-axis fan, the default 0.6-format-field off-axis fan at all configured pupil fractions, and a full-format chief ray. For the 36×24 mm format the rectilinear diagonal half-field is `23.485912069°`; the default 0.6 field is `14.091547242°`. The smallest non-stop clear margin among the finite exact samples is `0.172262016130 mm`. These finite rays do not prove clearance over every field/pupil point and are not labeled as production render validation.

### Glass, focus, and source qualification

The data file retains the seven patent `nd`/`νd` coordinates exactly. Supplier-specific historical melts remain unproved; labels therefore use coordinate/class or `Unmatched (...)` wording. No `nC`, `nF`, `ng`, or `dPgF` values are authored because the selected source does not publish them.

Focus remains **NO_INTERNAL_RECONSTRUCTION** with an empty `var` object. `closeFocusM: 0.9` is retained only as secondary Opton product metadata required by the schema; it does not define a traced finite-focus state or authorize an internal spacing reconstruction.

The selected US2186621 block remains explicitly identified by the patent as prior art. The 50 mm Zeiss-Opton correlation is therefore kept as a strong family/architecture inference, not a manufacturer-confirmed exact postwar prescription identity.

### Check disposition

All mandatory Stage 2 `CHAT_PREFLIGHT` checks pass. Real LensVisualizer `buildLens()/validateLensData()`, the real project `LensDataInput` typecheck, production render diagnostics, runtime glass resolution, and Prettier are `NOT_RUN` because the LensVisualizer repository/toolchain is not mounted. They remain `INTEGRATION_PENDING` and have not been renamed or approximated by the portable checks. (Closed 2026-10-20: repository checks run at integration; see the last section.)

### Quantitative-claim map — Stage 2 additions

| Claim | Governing fact/result | Revision |
|---|---|---|
| Implemented EFL `49.786674313 mm` | `fact.calc.implemented.efl` | parsed data SHA `fdfdac5ba27b6b3010e463e6b2955390f35a457252cbc8fae957b0e560b863c8` |
| Implemented BFD `22.268124607 mm` | `fact.calc.implemented.bfd` | same parsed revision |
| Modeled f/1.5 | `fact.calc.implemented.fnumber` | calibrated inferred stop; not independent stop evidence |
| Stop split 0.82 of l2 | `fact.model.stop` | Figure-1 modeling decision MD3 |
| Petzval `0.005679849859 mm^-1` | `fact.calc.petzval` | parsed data / surface replay |
| Modeled SD validity | `fact.geometry.modeled_sd` | finite portable geometry + exact-ray checks |
| Focus status | `fact.focus.status` | evidence.focus + empty parsed `var` |
| Production correlation qualification | `fact.correlation.status` | evidence.productCorrelation |

### Stage 2 gate

**Gate:** `READY_FOR_ANALYSIS`

The approval binds to the exact data/evidence/verifier/results revisions recorded by the Stage 2 manifest. Repository integration remains pending. (Closed 2026-10-20: integrated.)


## Stage 3 analysis authoring checkpoint

### Entry gate and Stage 2 checkpoint replay

Stage 3 consumed the canonical Stage 2 ZIP rather than assuming that the live working directory still represented the approved
package. The Stage 2 archive SHA-256 is `50565f897c8b96542ab6c5e866ea53b21ba13eaa5621ee6d409aad1861be7f08`; its
`US2186621.pdf` member is the exact 392,048-byte original with SHA-256
`1b4d7da0edce3270fd3ea844563ff81076de98fdb4052b7ea50abc6efe3a2c99`. The archive's data, evidence, verifier, and results
members match the Stage 2 checkpoint hashes recorded in the manifest.

A transient live-directory copy of the patent had acquired an appended C2PA Content Credentials incremental update after file
export, changing its size and SHA-256 while leaving the original PDF bytes as a complete prefix. That working-copy mismatch was
not treated as a data defect or ignored. Stage 3 reconstituted its inputs from the canonical Stage 2 archive/original upload,
restored the exact original bytes for replay, and reran the portable verifier. The replay passed with the approved data SHA-256
`fdfdac5ba27b6b3010e463e6b2955390f35a457252cbc8fae957b0e560b863c8` and no Stage 1/2 `CHAT_PREFLIGHT` blockers.

The controlling CHAT-1.0 protocol, dossier contract, current data/analysis specifications, template, defaults, taxonomy,
authoring guide, integration handoff, workflow guide, Prettier configuration, and prompt-pack checker have the same hashes as
the Stage 2 manifest. No controlling-reference revision changed between the Stage 2 checkpoint and Stage 3 authoring.

### Analysis construction and data-change disposition

The analysis was authored from the final parsed Stage 2 data revision and its freshly replayed calculated facts. No optical
surface, element, glass annotation, stop model, semi-diameter, focus disposition, product metadata, or structured patent field in
`ZeissSonnar50mmf15OptonContax.data.ts` changed during Stage 3. The data SHA-256 therefore remains
`fdfdac5ba27b6b3010e463e6b2955390f35a457252cbc8fae957b0e560b863c8`.

The prose preserves the principal source/model separations established upstream:

- the fixed `Example 1` job selection maps to US2186621's first numerical block / Figure 1 because the patent does not number its
  examples;
- the selected block is explicitly prior art in US2186621 and the Zeiss-Opton production correlation remains inferred rather
  than manufacturer-confirmed;
- the source prescription is nominally 100 mm f/1.5, while the implemented model uses the documented uniform `s = 0.5` scale;
- the stop coordinate is figure-inferred and its physical radius is f/1.5-calibrated, not source-published;
- the image distance and every semi-diameter are modeled/calculated rather than source-published;
- focus remains `NO_INTERNAL_RECONSTRUCTION`; `closeFocusM = 0.9` is secondary product metadata only;
- source `nd`/`νd` coordinates are retained without claiming historical supplier/melt identities or unsupported line-index /
  anomalous-partial-dispersion properties.

### Stage 3 consistency and citation checks

The extended portable verifier retains all Stage 1/2 numerical and geometry calculations and adds Stage 3-only checks when the
same-stem analysis file is present. The following Stage 3 `CHAT_PREFLIGHT` checks pass on the authored analysis:

- `analysis_metadata_consistency` — metadata block agrees with the fixed job, evidence, and structured patent fields;
- `analysis_required_sections` — required section order is present, useful conditional sections are included, and the all-
  spherical design does not invent an asphere section;
- `analysis_element_consistency` — L1–L7 order plus each first-line `nd`, `νd`, glass label, and standalone focal length agree
  with the parsed data and recomputed element powers at the analysis rounding;
- `analysis_disclosures_and_citations` — source/model limitations are stated and conventional patent/manufacturer URLs are
  present without ChatGPT-only citation tokens or readiness/process badges;
- `analysis_quantitative_claims` — headline EFL, raw-scale EFL, group powers, stop model, BFD, track, Petzval, and geometry
  values match freshly recomputed results at the displayed precision.

Citation review was also performed manually. Patent-derived statements identify US2186621 Figure 1 / PDF pages 1–2 or the
corroborating US1975678 reference; product-correlation statements use the recorded ZEISS / Zeiss Ikon sources; the secondary
Opton reference is identified as secondary; catalog discussion does not promote current coordinate neighbors to historical
supplier evidence.

### Quantitative-claim map — Stage 3 analysis

| Analysis claim | Governing fact/result | Basis / qualification |
|---|---|---|
| Source nominal 100 mm, f/1.5 | `fact.source.nominal` | P1, first numerical block |
| 7 elements / 3 groups | `fact.source.architecture` | P1 Fig. 1 + selected table |
| Uniform scale `s = 0.5` | `fact.model.scale` | MD2; 50 mm marketing / 100 mm source nominal |
| Raw calculated EFL `99.573349 mm` | `sourceModel.raw.eflMm` + `cmp.raw_efl` | raw patent-scale sequential/ABCD replay |
| Implemented EFL `49.786674 mm` | `fact.calc.implemented.efl` | parsed final data, infinity state |
| G1/G2/G3 isolated EFLs | `fact.calc.group_powers` | cemented-group net powers in air; not in-situ additive powers |
| Stop at 82% of scaled l2; radius `9.311719 mm` | `fact.model.stop` | Figure-1 position inference + f/1.5 calibration |
| L1–L7 standalone focal lengths | `fact.calc.element_powers` | parsed final data, each element hypothetically in air |
| Glass coordinates / class labels | `implementedModel.glassIntegrity` | source `nd`/`νd`; supplier identity unproved |
| Focus `NO_INTERNAL_RECONSTRUCTION` | `fact.focus.status` | evidence.focus + empty parsed `var` |
| BFD `22.268125 mm` | `fact.calc.implemented.bfd` | surface 10 vertex → paraxial infinity image |
| Vertex track `36.285000 mm` | `fact.calc.implemented.track` | surface 1 → surface 10 vertices |
| Petzval `+0.005679850 mm^-1` | `fact.calc.petzval` | surface-by-surface `phi/(n*nPrime)` |
| Edge/rim/exact-ray geometry values | `fact.geometry.modeled_sd` | modeled SDs; finite portable checks only |
| Production-correlation limitation | `fact.correlation.status` | evidence.productCorrelation |
| 50 mm f/1.5 Contax product context | evidence `M1` / `M2` | manufacturer history + archival manufacturer literature |
| 0.9 m close-focus metadata | evidence `S1` + parsed `closeFocusM` | secondary product metadata; no finite-focus optical state |

### Stage 3 gate

The Stage 3 analysis hash is bound into `results.json` and the package checkpoint. A clean archive rehearsal was safely
re-extracted, every non-manifest member matched its declared size and SHA-256, the exact original patent bytes were preserved,
and the portable verifier reproduced the Stage 3 pass and stable numerical results. The canonical Stage 3 archive is subjected
to the same clean-extraction/hash/replay procedure at final packaging.

**Gate:** `READY_FOR_AUDIT`

LensVisualizer repository validation remains `INTEGRATION_PENDING`; no repository-only check is promoted from `NOT_RUN` by the
portable analysis checks. (Closed 2026-10-20.)

## Stage 4 source-first independent audit

### Independence scope and frozen baseline

Stage 4 was not result-blind. Before the source-first pass began, the chat context had already exposed Stage 1–3 summaries and
portions of the candidate data, evidence, audit, and results. The independent pass therefore claims **source/method independence,
not blindness**: the selected table was re-entered from rendered US 2,186,621 pages and a fresh calculation path was executed
without loading the candidate/evidence/results as numerical inputs. The frozen baseline was saved before reconciliation.

The independent source input, standalone baseline script, and baseline result are retained under
`/mnt/transcripts/ZeissSonnar50mmf15OptonContax/`. The consolidated final verifier embeds the same independently re-entered
source rows and a separate `ind_*` calculation path so the final dossier does not depend on transcript files.

- frozen baseline fingerprint: `864a307dfed27ba2d4ae8b64734f1f40bfbc90910d1e4d6ca7599f0bb12663dd`
- independent source-input SHA-256: `cfcf01efdf29670d000758e6d9e6367b749c09fcca159e1bfa42bf64d8ec0172`
- standalone independent-code SHA-256: `35456850c9b55ae81992f05bdc2d5b05baa9ada3546db2becc1839f8e8e7bc30`
- standalone baseline-result SHA-256: `8326679faa4c83a3a62e5b9c85fea4c9ca22101f5f57c0d732e11d1c672da1ab`

The source-first baseline re-entered all ten patent surfaces, all seven element indices/Abbe values, the published `f=100 mm`
and `1:1.5` values, the fixed-state nature of the table, and the iris interval. The patent still leaves the numerical stop split,
stop diameter, semi-diameters, image distance, finite-focus prescription, exact historical glass melts, line-index/partial-
dispersion data, and source field/image-circle data underdetermined.

### Independent numerical baseline

The fresh sequential height/reduced-angle path and separately assembled ABCD product agree to floating-point precision. The
independently re-entered source prescription gives:

| Quantity | Stage 4 independent result | Reference plane / meaning |
|---|---:|---|
| Source-scale EFL | 99.573348626532 mm | infinity, air-to-air |
| Source-scale BFD | 44.536249214033 mm | R10 vertex to paraxial image |
| R1→R10 vertex track | 72.570000000000 mm | physical lens vertex track |
| Front vertex→image track | 117.106249214033 mm | vertex track + BFD |
| Front principal plane H1 | +16.772879821703 mm | from R1 vertex |
| Rear principal plane H2 | −55.037099412499 mm | from R10 vertex |
| `TL/EFL` | 1.176080254700 | not telephoto under the project definition |
| `BFD/EFL` | 0.447270779062 | not retrofocus under the project definition |
| Source-scale Petzval | +0.002839924929627 mm⁻¹ | surface-by-surface `phi/(n*nPrime)` |
| 0.5-scale EFL | 49.786674313266 mm | independent comparison model |
| 0.5-scale BFD | 22.268124607016 mm | R10 vertex to paraxial image |
| 0.5-scale Petzval | +0.005679849859253 mm⁻¹ | expected `1/s` scaling |

The raw focal-length residual against the printed 100 mm nominal is −0.426651373468 mm. A fresh half-LSD finite-difference
worst-aligned calculation gives ±0.648524435005 mm at source scale, so the printed nominal remains consistent with the table
without changing any patent number. The earlier Stage 1 historical section recorded ±0.648500628571 mm; Stage 4 supersedes that
verification tolerance with the independently recomputed value. The pass/fail conclusion is unchanged.

### Candidate reconciliation

Only after the baseline was frozen was the exact uploaded Stage 3 candidate opened and replayed. The original candidate hashes
were:

- data: `fdfdac5ba27b6b3010e463e6b2955390f35a457252cbc8fae957b0e560b863c8`
- analysis: `22b1d101b2848e6d8b2df07317f6ca209201f8d34b9fd2b3c272a3b85624ba17`
- evidence: `21dbde9730a63324db8c01f0a223900b95fcb44c22c284dfc5873f7ecc00f044`
- verifier: `77736cbb94925978fe47fdad9535e51e45e066e439056e99b83b37291bd97fc6`
- results: `daa7d3e6dd3fb3a95a8609ff672cc5476f56d4581466ec695732434e9b68e3a4`
- Stage 3 manifest: `1756b6b3ca03f5e338c3d499dc42050e5a5e15e46a9533ecb92fb207e390c8fa`

The independent source rows reconcile exactly with the dossier raw transcription. After the documented `s=0.5` transform, all
ten implemented refracting-surface radii, physical spacings, and indices reconcile with the independent source rows; the split
R6→STO plus STO→R7 distance preserves the scaled `l2=7.62 mm`, and the downstream `elemId` assignments at cemented junctions
are correct. Independent and parsed-candidate EFL, BFD, track, Petzval, all seven standalone element powers, and all three
isolated cemented-group powers agree within the consolidated verifier tolerances.

The parsed implemented model verifies:

| Quantity | Final result |
|---|---:|
| EFL | 49.786674313266 mm |
| BFD from R10 | 22.268124607016 mm |
| R1→R10 vertex track | 36.285000000000 mm |
| Entrance-pupil radius | 16.595558104422 mm |
| Entrance-pupil position | +32.293518314183 mm from R1 |
| Exit-pupil radius | 11.211773263457 mm |
| Exit-pupil position | −11.367195183354 mm from R10 |
| Modeled f-number | 1.500000000000 |
| Petzval sum | +0.005679849859253 mm⁻¹ |
| G1 isolated EFL | +60.737090984023 mm |
| G2 isolated EFL | −66.069397997395 mm |
| G3 isolated EFL | +45.158435076866 mm |

The f/1.5 result remains a **calibration**: the patent publishes f/1.5 and the iris interval, but not a numerical stop position
or diameter. The modeled stop is at 82% of the scaled R6→R7 gap from R6 and its 9.311718684683 mm radius was calibrated to the
published aperture. It is not independent evidence of a historical physical diaphragm size.

### Geometry and aperture audit

All authored semi-diameters remain modeled because the patent publishes none. The current portable geometry path verifies the
same final values after the Stage 4 edits:

- minimum sampled element edge thickness: 0.203624477231 mm (L1);
- maximum actual spherical rim-slope angle: 57.713615295032° (surface 9), below the supplied 64.2° policy;
- largest shared-gap utilization: 0.733084731497; the R6→STO gap remains the limiting shared-band check with
  1.667793363715 mm physical clearance after sag intrusion;
- minimum non-stop margin among the finite exact meridional ray set: 0.172262016130 mm (surface 2).

The exact-ray set covers axial stop-edge rays, the configured on-axis fan, the default 0.6-format off-axis fan across all
configured pupil fractions, and a full-format chief ray. These finite samples do not establish continuum clearance and do not
substitute for the real LensVisualizer production renderer/trim diagnostic.

### Glass re-audit

Stage 4 repeated the coordinate search without starting from the candidate glass strings. Authoritative current SCHOTT, OHARA,
HIKARI/Nikon, HOYA, SUMITA, and CDGM sources were checked. Close modern rows exist for several coordinates, but they do not
establish historical supplier or melt identity. The source remains native `nd/νd`; no patent `nC`, `nF`, `ng`, or `dPgF` values
exist, so no APO or anomalous-partial-dispersion claim is supported.

The conservative Stage 4 dispositions are:

| Source `nd/νd` | Elements | Stage 4 disposition |
|---|---|---|
| 1.6710 / 47.2 | L1, L2 | retain 671472 coordinate/class; supplier unproved |
| 1.4892 / 70.1 | L3 | retain 489701 fluor-crown class; supplier unproved |
| 1.7394 / 28.2 | L4 | retain `Unmatched (739282 — dense-flint class; supplier unconfirmed)` |
| 1.5232 / 50.9 | L5 | **retain only `Unmatched (523509 — supplier unconfirmed)`** |
| 1.6578 / 51.2 | L6 | retain 658512 dense-crown class; supplier unproved |
| 1.5894 / 61.2 | L7 | retain generic 589612 crown class; supplier indeterminate |

OHARA S- and L-prefix families remain distinct. Current catalog coordinates are model annotations only, never historical
provenance claims.

### Product identity, mount, format, and focus review

The patent itself labels the selected Figure 1 block as prior art and cites US 1,975,678. ZEISS manufacturer history supports
Sonnar/Contax lineage, and period/postwar Zeiss literature supports the 50 mm f/1.5 Contax product family and seven-element
construction. Carl Zeiss 1956 Contax literature gives the 50 mm f/1.5 a 3 ft closest distance. A specialist secondary history,
however, states that the 1950 Zeiss-Opton 50/1.5 had a “new optical design.” No primary manufacturer source located in this audit
ties the exact postwar Opton formula to the selected US2186621 first block.

The clean pair therefore retains the production name only as a **family/architecture correlation target**. It does not assert
manufacturer-confirmed exact prescription continuity. `contax-rf` and `135-full-frame` remain the appropriate canonical
metadata for the represented product family. `closeFocusM=0.9` is retained as a rounded catalog/UI value consistent with the
manufacturer-published 3 ft family specification and Opton-specific secondary records; it is not a finite-conjugate optical
state. Focus remains `NO_INTERNAL_RECONSTRUCTION` and `var` remains empty.

### Stage 4 correction register

| # | Old | New | Evidence / reason | Downstream effect |
|---|---|---|---|---|
| 1 | L5 glass `Unmatched (523509 — crown-flint class; supplier unconfirmed)` | `Unmatched (523509 — supplier unconfirmed)` | Patent supplies only 1.5232/50.9; fresh six-catalog audit found no defensible named match or narrower class | Data + analysis wording only; no optical number changes; glass and analysis checks rerun |
| 2 | Analysis metadata `US 2,186,621 A` | `US 2,186,621` | Supplied grant image prints 2,186,621 without kind code; data already used the exact grant identifier | Analysis metadata/source wording synchronized; no optical effect |
| 3 | 0.9 m described as secondary-only Opton metadata | 0.9 m explicitly described as rounded product-family metadata, with primary Carl Zeiss 3 ft source and secondary Opton corroboration | Manufacturer source preferred where available; exact Opton focus prescription still unpublished | `closeFocusM` numerical value unchanged; `focusDescription`, evidence, and analysis disclosure strengthened |
| 4 | Exact Opton continuity merely “unconfirmed” | Added secondary historical caution that the 1950 Zeiss-Opton version used a new optical design | Adversarial product-correlation check | Correlation wording tightened; selected patent/example remains fixed; no source prescription substitution |
| 5 | Stage 1 source EFL tolerance ±0.648500628571 mm | Stage 4 independent tolerance ±0.648524435005 mm | Fresh independent half-LSD finite-difference replay | Results/verifier updated; source residual remains a pass and no prescription value changes |
| 6 | Verification Summary said the data file was evaluated “rather than through a separately re-entered copy” | It now records separate source re-entry and parsed-model calculation paths | That Stage 3 wording became stale after the required Stage 4 source-first pass | Analysis wording only; quantitative values unchanged |

A TypeScript-AST parsed-value comparison of the original and final `.data.ts` files found only two payload changes: the L5
`glass` string and `focusDescription`. Every numerical optical field, surface, stop, semi-diameter, focal-length field, focus
scalar, and structured patent/taxonomy field is unchanged.

### Final verifier and check disposition

The consolidated verifier now contains the original Stage 1–3 replay plus the separately re-entered Stage 4 baseline inputs and
`ind_*` calculation functions. Final execution reports 33 `PASS`, 5 `NOT_RUN`, 3 `NOT_APPLICABLE`, and no `FAIL` checks.
Mandatory Stage 4 `CHAT_PREFLIGHT` checks therefore pass.

The following real LensVisualizer checks remain `NOT_RUN` because the repository/toolchain is not mounted in this runtime:

- actual `buildLens()` / `validateLensData()`;
- production `computeElementRenderDiagnostics()` / render-trim validation;
- runtime glass-catalog resolution;
- real project `LensDataInput` typecheck / tsconfig;
- actual Prettier check with the supplied configuration.

These are integration-scope checks, not portable substitutes. They remain `INTEGRATION_PENDING` and no corpus, renderer,
compiler, or runtime-glass acceptance is claimed. (Closed 2026-10-20: see the last section.)

### Stage 4 quantitative-claim map

| Clean-pair claim | Governing Stage 4 result / source |
|---|---|
| Source nominal 100 mm, f/1.5 | original US2186621, rendered first numerical block |
| 7 elements / 3 groups | original US2186621 Figure 1/table; product-family seven-element corroboration is separate |
| Scale `s=0.5` | disclosed model transform from source nominal 100 mm to 50 mm correlation target |
| Raw EFL 99.573349 mm | `independentBaseline.raw.eflMm` + candidate source replay |
| Implemented EFL 49.786674 mm | `implementedModel.cardinal.eflMm`, independently reconciled to scaled baseline |
| BFD 22.268125 mm | `implementedModel.cardinal.bfdFromLastVertexMm`, independently reconciled |
| G1/G2/G3 isolated EFLs | parsed-model `cementedGroupPowers`, independently reconciled |
| Stop 82%, radius 9.311719 mm, f/1.5 | disclosed model inference/calibration; source publishes only iris interval and nominal f/1.5 |
| L1–L7 standalone focal lengths | parsed-model `standaloneElementPowers`, independently reconciled |
| Petzval +0.005679850 mm⁻¹ | surface-by-surface `phi/(n*nPrime)` in both independent and parsed-model paths |
| Geometry values | final modeled SDs + portable exact/geometry checks; production render test pending (closed 2026-10-20) |
| `NO_INTERNAL_RECONSTRUCTION` | source has one fixed state; final `var={}` |
| Product correlation limitation | manufacturer family evidence + patent prior-art role + secondary “new optical design” caution |
| L5 `Unmatched (523509)` | patent coordinate + fresh six-catalog Stage 4 re-audit |

### Stage 4 gate

All mandatory chat-source/model/geometry/glass/analysis/review checks pass on the corrected pair. The original patent and job
card remain byte-identical. Repository-only checks remain pending at integration scope. (Closed 2026-10-20.)

**Gate:** `READY_FOR_BATCH`  
**Integration status:** `INTEGRATION_PENDING` — closed 2026-10-20; see below.

## 2026-10-20 — Deployment validation and wording pass

Source re-read. The Figure 1 table on PDF page 2 was re-read from page renders at 300, 600 and 1200 dpi: 10 radii, 9
thicknesses and air gaps, and 7 nd / νd pairs. There are no aspheres and no variable gaps. One mismatch was found: R5. The PDF
text layer reads `-846, 31`, and the earlier stages carried −846.31, but the printed glyphs are −646.31. Both 6s in "646" match
the 6 in "69,21" and differ from the closed 8 in "85,78". This is a misread of the text layer, not a source erratum. All
other rows agree with the file at ×0.5. The l2 split (6.2484 + 1.3716) sums to 7.62.

First-order, patent scale (stated f = 100, 1:1.5; no BF, field angle or close-focus data printed). With R5 = −846.31 the EFL
was 99.573 (−0.43 %). The tolerance argument in the Stage 1 register is superseded. With R5 = −646.31 the EFL is 99.987 and the
BFD 44.915. At ×0.5 the model gives EFL 49.9934 mm, BFD 22.4576 mm, TL 58.7426 mm, Petzval +0.005609 mm⁻¹, engine stop radius
9.569 mm, f/1.5 and half-field 26.54° (from the 135 format; the patent states none). Before the fix the same model gave EFL
49.7867, BFD 22.2681, TL 58.5531 and stop radius 9.506. audit:surface is OK and the image circle is 100 % (21.65 mm) before and
after. In clearap, the axial-marginal and full-field rim columns are empty behind R6; the accepted US 1,975,678 Sonnar file
shows the same, so this is a tool limitation for this layout.

Product match. Fig. 1 is printed "Prior Art Lens System", and the text cites US 1,975,678 for it. The claimed invention is
the four-unit Fig. 2 system, so this table is a 1937 calculation of the 7/3 Contax Sonnar 50/1.5. It is not a numerical
duplicate of the US 1,975,678 example already in the catalog. L6 glass is identical and L2 nearly so, but the other five
glasses change, and R4, R5, R8 and R10 differ materially. No maker cross-section was found that can tell the two calculations
apart. No source ties the prescription to the postwar Zeiss-Opton lens; one secondary history says the 1950 Opton lens had a
"new optical design", and a forum reading of the Zeiss production records says the formula was unchanged. The file was
retitled as a Carl Zeiss Jena Sonnar (US 2,186,621 design), and the Opton claims were removed.

Fields changed in this pass:
- Surface 5 R: −423.155 → −323.155.
- Surface 10 d: 22.268125 → 22.457601 (recomputed paraxial BFD).
- focalLengthMm: L3 79.803 → 77.647 and L4 −15.454 → −15.322; design EFL 49.787 → 49.993.
- Assignee: "Zeiss Ikon AG", to match the corpus.
- Header comment, subtitle, specs, L1 role, focus description and source comments reworded; Opton attribution and process
  vocabulary removed.
- Analysis: identification rewritten around the prior-art status and the R5 reading; numbers updated; the verification
  section renamed "Model Scope and Limitations".

Open: none.

## 2026-10-20 — Second review: diagram, labels and movement

What was compared. The local page (infinity; the file has no zoom and no traced focus state) was set beside Fig. 1 of
patents/US2186621.pdf (drawing sheet, PDF p. 1), rendered at 300 and 600 dpi. The figure is drawn to axial scale: vertex
crossings on the axis give R1→R10 = 582 px at 300 dpi for 36.285 mm at ×0.5, i.e. 0.0623 mm/px. R4→R9 gives 0.0620 mm/px,
and every intermediate vertex lands within 2 % of the prescription. The R1 sag at the drawn rim (136 px at 600 dpi, about 4.2 mm)
also implies a 16.6 mm rim, matching the drawn height. Heights were read on both sides of the axis and averaged. The leader
lines spoil the automatic profile in places, so those rims were read by eye at 600 dpi. No maker construction diagram was
viewed. The stage records give 7 elements in 3 groups, all spherical, which agrees with Fig. 1.

Silhouette differences found. On the site L1 was much taller than the front triplet: 18.5 against 14.7, a ratio of 1.26.
Fig. 1 draws 16.5 against 14.5, a ratio of 1.14. The front triplet is drawn as one square-cut block with a flat land at
14.5 mm across L2, L3 and L4, and L4 then chamfers down to the R6 rim. The site stepped it down instead: 14.7, 13.75, 13.0.
The rear triplet is drawn with L5 and L6 square-cut at about 10.1 mm and L7 bevelled up to a flat land at about 11.7 mm.
The site had 9.6, 9.5, 9.35 and 10.25. In addition, clearap showed the f/1.5 axial marginal ray at 13.04 mm on R5, against
the stored 13.0 (CLIPS-AXIAL). The R5 correction made earlier today raised that ray height.

| Surface | Before | Fig. 1 (mm) | After | Evidence and reason |
|---|---:|---:|---:|---|
| 1 | 18.5 | 16.5 (top 16.7, bottom 16.2) | 17.0 | Figure 11 % smaller; held above the f/1.5 axial marginal ray (16.66) |
| 2 | 18.3 | 16.5 | 17.0 | Square-cut with R1 as drawn; axial ray 16.45 |
| 3 | 14.7 | 14.45 | 14.5 | Square-cut block |
| 4 | 13.75 | 14.45 | 14.5 | Square-cut block; axial ray 13.72 |
| 5 | 13.0 | 14.45 | 14.5 | Fixes the axial clip (ray 13.04); square-cut block |
| 6 | 9.8 | 10.1–10.3 drawn; drawn R6 sag implies 9.7 | 9.8 (kept) | Within noise |
| 7 | 9.6 | 10.1 | 9.9 | Square-cut L5/L6 block |
| 8 | 9.5 | 10.1 | 9.9 | Square-cut L5/L6 block |
| 9 | 9.35 | 10.1 | 9.9 | Square-cut; 10.0 would exceed the rim-slope limit (sin 0.904 > 0.90) |
| 10 | 10.25 | 11.6–11.8 | 11.6 | Figure 13 % larger; L7 drawn rising above L5/L6 |
| STO | engine 9.57 | iris blade tip at about 9.8 | unchanged | Not edited |

Results after the edit. audit:surface reports no validation errors, and the image circle is 100 % (21.65 mm). Field
coverage is clear to the 22.8° corner. audit:aperture is within 3 % of f/1.5, and the clearap CLIPS-AXIAL flag is gone. As
recorded earlier, clearap's ray columns stay empty behind R6 for this layout. EFL is 49.993 mm and FOPEN 1.500 before and
after; the engine stop radius stays 9.569 mm. The engine half-field rose from 26.54° to 27.78° because of the wider rear rims.
The engine's meridional transmission curve at infinity was 97.9 / 89.5 / 76.3 / 63.7 / 36.3 % at 2.8 / 8.5 / 14.2 / 17.1 /
22.8°. After the edit it reads 96.4 / 88.0 / 75.0 / 66.1 / 40.1 %. The smaller L1 adds a little vignetting near the axis, and
the wider rear rims remove some at the corner. The curve is meridional only. The batch vig tool calls an engine function that
no longer exists, so these numbers came from a scratch copy that calls computeVignettingCurve through createAnalysisRequest.

Labels and brackets. The elements already carry cemented T1 (L2–L4) and T2 (L5–L7), and the analysis prose uses those
names. `doublets` was empty, so the site drew no cemented brackets. T1 (3–6) and T2 (7–10) were added. No gap labels exist,
so nothing collides with them. The patent names its lenses L1–L7 and its air spaces l1, l2. It calls the groups the
"first", "second" and "third lens unit" and has no G notation, so the G1–G3 brackets were kept. Element names and diagram
labels are L1–L7, matching the patent. Types agree with the radius signs: L1 and L2 are positive menisci, L3 is biconvex,
L4 biconcave, L5 plano-concave, L6 biconvex, and L7 a negative meniscus, which the patent calls "concavo-convex". Roles
match the text: L3 is lower in index than L2 and L4, L5 lower than L6, and G2 is net negative (−65.4 mm). There are no
aspheres and no `apd` tags, and the patent names no special glass. The stop is drawn in l2 between L4 and L5, as in Fig. 1.
The inspector for L4, L6 and L7 shows the stored type, glass and role, and the "TRIPLET T1/T2" badges are correct.

Movement. There is no zoom. The file models no focus state, so the slider reads "Not modeled" and nothing moves. The
description of unit focus through the Contax helicoid is correct. For the coordinator, a paraxial unit extension for this
prescription is 3.138 mm at a 0.9 m object-to-image distance and 3.082 mm at 3 ft, with infinity BFD 22.4576 mm. The patent
prints no aberration plots, so the model's aberrations could not be compared with the source.

Glass. The patent names no glass types; the text only stresses the indices of L3 (1.4892) and L5 (1.5232). It prints no
line indices other than nd and ν. None of the Fig. 1 pairs recurs in the patent's Fig. 2 example (1.6689/48.8, 1.4645/65.7,
1.7219/28.7, 1.5325/46.2, 1.6043/56.3; PDF p. 3). L6, 1.6578/51.2, is identical to L6 of the US 1,975,678 Sonnar, so it is a
real stock glass. That file labels it `Unmatched` too, so neither label resolves. The labels for L1/L2, L3, L4, L5 and L6 do
not resolve. L7's "589612 — crown class" resolves through its code to Sumita SK5 (1.58913/61.2, Δnd −0.00027). That does
not reproduce the printed 1.5894. The nearest row for L5 is Sumita KF5 (1.5231/50.9, Δnd −0.0001).

Coordinator follow-up, applied the same day. L7's glass changed from "589612 — crown class (supplier unconfirmed)" to
"Unmatched (589612 — crown class, near SK5; supplier unconfirmed)", so it no longer resolves to Sumita SK5 by code. L6 changed
from "658512 — dense-crown class (supplier unconfirmed)" to "Unmatched (658512 — SSK-class dense crown, near N-SSK5; supplier
unconfirmed)", matching the US 1,975,678 Sonnar's disposition. Focus now follows that sibling file. It is a modeled unit focus
through the Contax helicoid: `gaps["10"]` is labelled "BF (modeled)" and runs from 22.457601 at infinity (keyframe 0) to
25.595534. The close value is the exact paraxial image distance for a 0.9 m object-to-image endpoint (object 838.12 mm from
R1, magnification −0.0628), a 3.13793 mm extension. closeFocusM stays 0.9, and surface 10 now takes its d from `gaps`. The
probe tool gives 900.00 mm object-to-image at t = 1, and EFL, f/1.5, the half-field (27.78°) and the stop are unchanged.
audit:surface is OK, the image circle is 100 %, field coverage is clear, and clearap at focus 1 shows no axial clip or chief
block. On the site's focus movement overlay, G1, G2 and G3 move together 3.14 mm toward the object, and the slider's far end
reads 90 cm. The header, focus description and analysis call the extension a modeled helicoid extension, not a patent value.

Open: the figure's L4 flat land followed by a chamfer cannot be drawn by the renderer's single rim edge, so the site shows
one bevel from R5 to R6.
