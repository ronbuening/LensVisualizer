# Miranda Auto E 50mm F1.4 — technical audit record

## Repository integration audit — 16 October 2026

This review supersedes the historical dossier's SDs, explicit Unmatched glass dispositions and integration-pending status below. Its source prescription and uncertainty disclosures remain applicable.

**Source:** exact local `patents/US_3634001_A.pdf`, PDF p.2 Figure 1 at 600 dpi; p.4 Example I and p.6 claim 4. All R/d/nd/νd values, the ×0.5 scale, midpoint stop and printed 35.53 mm image gap are preserved. The published BF discrepancy and infinity-only focus scope remain explicit in the analysis.

The automated figure-span measurement was contaminated by horizontal-axis ink and reached the crop edge; its absolute ENV/RIM outputs were rejected. Manual optical-rim comparison excludes the labels, leaders, axis and diaphragm symbol. Relative rim heights support a square front meniscus, smaller outer doublet rims and stepped central negative surfaces. Absolute clear radii remain inferred, with the exact on-axis f/1.4 beam as a lower bound.

| Surfaces | Previous SD (mm) | Revised SD (mm) | Figure/geometry basis |
| --- | --- | --- | --- |
| S1 / S2 | 19.8 / 19 | 18 / 18 | Square L1 rim, about 1.11× the first doublet rim |
| S3 / S4 | 17.3 / 17.3 | 16.2 / 16.2 | Shared front doublet rim |
| S5 / S6 | 12.9 / 12.9 | 12 / 12 | Smaller facing negative-surface rims |
| S7 / S8 | 16.5 / 16.5 | 15 / 15 | Rear doublet outer rim about 0.92× the front doublet |
| S9 / S10 | 17 / 17 | 15.4 / 15.4 | L6 rim; axial marginal height reaches 15.315 mm |
| S11 / S12 | 16.5 / 16.5 | 16 / 16 | Rear element nearly level with the front doublet |

The stop SD remains 11.492907311923025 mm. Exact f-number audit gives 1.399999998; surface/image-circle audits pass and all seven elements require zero hidden rendering trim. The declared 22.5° patent half-field reaches 94% of the full-frame corner height; the corner chief ray clears at about 23.8°, outside that declaration. The tighter figure-based rims retain off-axis vignetting: a fresh chief-centered 803-ray f/1.4 grid gives 558 transmitted, 181 rim-clipped and 64 first-patch noBracket misses, independently classified against the full first sphere. In the 343-sample domain through 13.5° and 0.75 pupil fraction, seven rays clip at S1/S9/S10; all 343 transmit at f/2–f/16. These current results replace the older, larger-rim counts below.

**Glass:** added official Hikari J-BASF8, J-LAK09 and J-BAF11 nine-term dispersion curves; paired them with existing Schott SF1 for 7/7 catalog-backed elements (previously 0/7). The native patent coordinates are unchanged. Selected proxy Abbe residuals are +0.13, +0.01, +0.21 and +0.03 respectively; historical suppliers/melts remain unconfirmed. J-LAK09 is distinct from J-LAK9. Sources and spectral qualification are in the analysis. Shared six-digit code bindings are retained. A 10,872-element resolution comparison also finds four expected changes in existing annotations that already name these Hikari alternatives: Nikkor-O 21mm L2/L7 and Vivitar Series 1 70–210mm L5/L6. The Vivitar's complete measured line indices remain authoritative.

**Metadata:** corrected the nested TypeScript import and canonicalized the assignee to `Miranda Camera Co., Ltd.`. Retained the established `MIRANDA AUTO E 50mm f/1.4` display name and the manufacturer-supported Miranda bayonet / 135 full-frame metadata. Explicitly recorded the patent's rectilinear 45° field and the manual's f/16 aperture limit. The seven-element E family is distinct from the older eight-element Auto Miranda 50mm f/1.4. Production prescription correlation remains unconfirmed; no release year, blade count or finite-focus law is invented. Added Miranda to the existing 2026-10-16 lens changelog entry.

Repository typecheck, formatting, lint, full corpus tests and production build pass. Regenerated glass reports contain zero catalog mismatches. Live diagram review confirms the rims, infinity-only focus disclosure and J-LAK09 polynomial in the doublet inspector; no renderer or optical-engine override was introduced.

## Historical dossier review — 2 October 2026

The following records refer to the original pre-integration files and pinned engine, not the revised apertures or proxy selections above.

## Job and reference versions

US3634001A, Example 1, exact stem MirandaAutoE50mmf14. Original card and PDF are retained unchanged. Controlling reference manifest: current main 66b394809241620190908def6caf9a81d3f3a6f5, SHA-256 53e75384742925ad35e09a1a169a05da0b9da2d41b18ed750419c548cb8c02cc. All 26 reference files match the freshly pinned tree; 218 engine dependencies were separately checked. CHAT-1.0 shared protocol and dossier contract apply. The current data specification supersedes older rear-plate guidance, but this source contains no rear plates.

## Extraction and conventions

The supplied PDF is a seven-page raster scan. Text extraction returned empty pages. The author directly read the cover, Fig.1/2, conditions and Example I, including a 300 dpi table crop. No candidate model seeded the extraction. Example I occupies PDF p.4 col.3; claim 4 on p.6 repeats the same prescription. There are 12 refracting boundaries, seven elements and five air-separated components. R4 and R7 are cemented boundaries; there is no synthetic cement. Indices are explicitly d-line (p.3 col.1). All surfaces are spherical; no rear plates or variable spacing are published. Positive radius points right; BF is from the last refracting vertex.

## Model transformations

Planned 0.5 uniform dimensional scale for the 50 mm target. The diagram establishes a stop in D5 but not its coordinate or diameter. The midpoint is an explicit Stage 2 inference; diameter will be calibrated with exact on-axis Snell tracing to f/1.4. No elements/planes are omitted. The marketed 0.43 m MFD supplies no optical motion law; NO_INTERNAL_RECONSTRUCTION uses empty var and an infinity-only 1e15 metre UI sentinel, never labeled real MFD.

## Glass review

Native names: BaSF8, SF1, LaK09 and BaF11. The publisher names glass families without manufacturers. A fresh scan of all available pinned OHARA, HOYA, Schott, Hikari, CDGM and Sumita catalog excerpts records nearest candidates and residuals. Hikari's official J-BASF/J-SF/J-LAK/J-BAF rows, Schott's official SF1 row and HOYA's current download index were checked. The retained 2026-07-07 HOYA AGF contains compatible E-FD1L and BAF11 rows. OHARA, CDGM and Sumita external retrieval attempts failed; their project excerpts are not falsely called newly authenticated catalogs. Full coverage and residuals are in evidence. Labels remain explicit Unmatched historical classes because coordinate compatibility does not identify the historical supplier/melt. No candidate spectral data are adopted.

## Numerical and geometry results

Independent sequential basis rays and ABCD agree to 1.42e-14. Native EFL is 100.007329649 mm, BFD 71.090294381 mm, first-to-last vertex track 98.58 mm and Petzval sum 0.00144152119749/mm. The source-normalized Petzval sum 0.144152120 is consistent with the printed 0.144. All eight patent conditions pass from the literal source. Stage 2 will determine and test the unpublished SDs; no geometry gate is claimed here.

## Correction and discrepancy register

No source number is changed. The printed BF=71.06 differs by +0.030294381 mm from the literal prescription, exceeding BF's 0.005 mm rounding interval; results retains the raw FAIL comparison. The fourth significant decimal of N5 is unpublished: N5=1.734 carries a half-last-place interval of ±0.0005. A sensitivity-only bisection within that interval reaches BF=71.06 while EFL remains within the printed 100.0 rounding cell. This is a defensible rounding-compatibility resolution, not proof of the missing melt value or permission to edit N5. The implemented image gap will retain BF×0.5, with its paraxial defocus disclosed.

## Construction verification and quantitative claim map

This is author verification, not Stage 4 independence. Reused generic parser, matrix and sphere/Snell utilities have disclosed provenance; lens inputs were directly re-entered from the original. Source EFL/BF/track/principal planes/element focal powers/Petzval → results.sourceModel. Patent conditions → facts.conditions. Glass coordinate comparisons → facts.glassResiduals. No Seidel-aberration performance is independently reproduced; the source's claims remain attribution only.

## Gate disposition

Stage 1 earns READY_FOR_DATA with defined Stage 2 tasks for geometry, calibrated iris and targeted real checks. Raw BF comparison remains visible with an explicit precision resolution. The finite-focus law, exact diaphragm/SDs, release date, historical glass supply and exact production linkage are unavailable, without being fabricated.

## Pending integration

No Git writes, full builds, metadata generation, corpus sweep, integration or publication. Real project checks are NOT_RUN until executed against the final data bytes; full repository gates remain integration-only.

## Stage 2 construction checkpoint

The final literal data preserves every R/d/index and the printed BF after scale 0.5. D5 alone is split into equal 7.9175 mm parts around one flat STO. The actual final file is parsed by a lexer/parser that rejects duplicate keys, unsupported expressions/functions/spreads/computed keys, nonfinite numbers, malformed syntax and trailing tokens; eight negative fixtures execute. A +1 mm radius mutation fails the same mapping function used for production data.

The exact on-axis entrance ray at EFL/(2×1.4) sets the inferred physical stop radius to 11.492907311923 mm. The resulting paraxial-only pupil interpretation would yield f/1.447282; this is pupil aberration, not an independent disagreement with the calibrated exact f/1.4 convention. The current engine uses the same exact on-axis calibration and reports FOPEN=1.4. No physical diaphragm measurement is claimed.

Modeled SDs are ray-derived with geometric constraints; minimum element edge thickness is positive, spherical slopes remain below the current 64.158° limit, and the D5 shared-band intrusion remains below 0.9 of its gap. Actual production render diagnostics require 0 mm hidden trim. The geometry sampling is 1001 radial points per band; spherical sag monotonicity is also apparent in these boundaries. No maxSdRatio, gapSagFrac or layout override hides a failure.

The required finite field check uses 15 forward meridional launches at 0°, 13.5° and 22.5° with entrance-pupil fractions ±0.75, ±0.375 and 0, plus 18 skew launches. It finds no clipping at an internal cemented interface. Full pupil-rim stop-target diagnostics are deliberately retained separately: three unbracketed targets and two internal-rim clips occur outside the stated forward sampling. They are not relabeled successes; full-field/full-aperture containment is not established. This coverage is appropriate for the documented nominal model and default 0.6 half-field visualization, not a manufactured aperture certification.

Actual read-only buildLens/validateLensData, TypeScript 5.9.3, Prettier 3.8.1, render diagnostics, glass resolution and 33-ray tracing were executed against the verified current engine. Thirty-two rays return OK or clipped. One full-field ray returns raw `failed/noBracket` before any hit. Independently solving its first sphere gives radius 23.357 mm outside the authored 19.8 mm clear patch. It is therefore an expected finite-patch aperture miss; raw status and exact geometric evidence are embedded in the receipt, with no transmitted-ray claim. No internal cemented clip is present in these 33 cases. This classification does not use a diagnostic-exception authorization.

Historical glass labels intentionally select no runtime catalog entry. Coordinate-compatible alternatives remain audit evidence, not substituted materials. Real checks are recorded with the data SHA-256 and dependency proof; portable replay validates the receipt binding but does not claim to rerun unavailable repository code.

Stage 2 earns READY_FOR_ANALYSIS. Source BF discrepancy, absent close-focus law and aperture inference are unchanged. All source and model facts plus exact data revision are bound in the Stage 2 manifest.

## Stage 3 entry, claim map and manual review

The eight-member Stage 2 archive was clean-extracted and replayed before analysis. The data and evidence bytes are unchanged during Stage 3. The verifier is extended only to validate the analysis; results refresh to include its fingerprint and those checks. The preceding Stage 2 archive/manifest remain immutable and identified by the Stage 3 parentPackage.

Quantitative and interpretive claims map as follows:

| Analysis claim | Governing evidence/result | Review |
|---|---|---|
| Patent identity/dates/inventor/assignee/Example 1 | PAT PDF p.1 and p.4; data structured metadata | Source wording manually compared; metadata tokens executed |
| Product 50 mm, f/1.4, 7/5, 35 mm format/bayonet, 46°, 0.43 m | Manufacturer manual PDF pp.4–5; evidence.productCorrelation | Exact embodiment link remains unconfirmed; no date invented |
| Seven elements/five components and shape labels | Raw R signs/element IDs; parsed data.elements; structure check | L1 and L6 positive menisci, L2/L5/L7 biconvex positive, L3/L4 biconcave negative |
| Five component power signs and two cemented EFLs | facts.compoundGroups | Isolated compounds in air, distinguished from seven standalone elements |
| Element index/Abbe/glass/fl lines | parsed elements and implementedModel.elements | All seven numbers/labels checked in analysis_elements_conditions and numeric claims |
| Conditions (1)–(8) and their rationale | PAT p.3 cols.1–2; facts.conditions | Absolute-value versus signed surface-power distinction retained |
| Native Petzval 0.144152 and scaled sum | sourceModel/implementedModel.petzval arrays | Per-surface phi/(n*nPrime), not thin-lens sum; normalization stated |
| EFL/BFD/track/principal planes/TL tests | implementedModel, exact parsed data | Reference planes and infinity state explicit; no retrofocus/telephoto assertion |
| Glass candidate comparisons/residuals | facts.glassResiduals; evidence.glassEvidence | Compatible modern rows do not prove historical supplier; spectral claims withheld |
| Stop radius/f-number calibration/paraxial difference | facts.pupil and actual builder receipt | Exact calibration not independent physical-diameter proof |
| BF discrepancy and rounding witness | comparisons.published_bfd; facts.sourceRounding | Raw mismatch visible; printed BF and N5 retained |
| Geometry, zero trim, finite rays/noBracket | facts.geometry/forwardBundles/exactSkew; applicationChecks | Defined sample scope only; extra full-rim nonarrival/clipping limitations stated |
| Infinity-only focus | evidence.focus, empty parsed var, 1e15 sentinel | Marketed MFD distinct; no movement law or close-focus optical claim |

Manual prose review found no unsupported supplier identity, release year, APO/partial-dispersion claim, focus law, measured diaphragm, independent physical SD or full-aperture field certification. Patent aberration rationale is attributed to the patent and not represented as reproduced Seidel performance. The analysis is 184 lines with the current required all-spherical section skeleton and conventional source links. It contains no readiness labels or revision-log narrative.

## Stage 3 disposition

READY_FOR_AUDIT is earned for the exact packaged candidate. Construction data did not change during analysis; only analysis checks and the consolidated record were added. A fresh source-first Stage 4 reviewer must still freeze an independently extracted baseline before opening the candidate or these numerical findings. Integration remains pending.

## Stage 4 source-first independent review, 2 October 2026

### Freeze, exposure and candidate identity

A separate source-first baseline was completed before the reviewer opened the candidate data, analysis, author evidence, results, audit or checkpoints. The original seven-page PDF was rendered and reviewed directly; Example I was re-entered from a 300 dpi table crop, its claim repetitions were checked, and the unexplained Seidel header was examined at 600 dpi. A fresh scalar reduced-angle trace and separate height/slope matrix implementation were executed. Four raw historical glass coordinate families were independently searched against primary vendor documents. The freeze report explicitly discloses its exact visible context and limitations; a fingerprint is not claimed to cryptographically prove blindness.

The baseline was frozen at 2026-10-02T22:06:32Z with SHA-256 fingerprint `73639cc8d913aae1f0ee9d07bdfac361fc0ea9a27076c78c8eef94e757af04ab`. The original independent input/code/results/report text and full freeze manifest are retained verbatim under evidence.independentPass; the final portable program reconstructs their hashes together with the unchanged original PDF/card. Nothing in the frozen baseline was rewritten after candidate exposure. Pre-exposure functions are preserved in a visibly separated verifier section, with names prefixed only to prevent collisions. The original frozen code bytes remain separately preserved for identity verification.

The reviewed Stage 3 archive is SHA-256 `e0fb86a9fe2d93513c82c4e6745acd962553885871ba90943e1ca45dccd14440`; the candidate data is SHA-256 `80a1e4ade39fcecbed535d04c5504bb38cba3bc870ed472a0b7ad5cf0fba8654`. Every source prescription value agrees with the independent extraction. All twelve R/d/index/element boundaries, both cemented joins and the 0.5 scale were checked. Only the disclosed neutral midpoint STO splits D5. The final data retains exactly those original candidate bytes.

### Source discrepancy independently resolved without altering the prescription

The raw native BF comparison remains FAIL: calculated 71.090294380918 mm versus printed 71.06 mm, residual +0.030294380918 mm, tolerance 0.005 mm. That observation remains in results.comparisons; no tolerance is widened and no printed value is silently changed.

The reviewer independently solved the N5 rounding-cell question using the pre-exposure numerical path. A sensitivity-only N5 of 1.734257055180 yields BF=71.06 mm and EFL=99.972872061167 mm. The index lies inside the printed N5=1.734 rounding cell and the EFL rounds to the printed 100.0 mm. This confirms a defensible compatibility explanation, not the actual original melt index or proof of why the patent rounded as it did. The actual model retains N5=1.734 and the published scaled image gap 35.53 mm, including the disclosed +0.015147190459 mm computed paraxial-focus offset. The separate discrepancy-resolution acceptance check passes.

The independent source EFL is 100.007329649436 mm and normalized Petzval is 0.144152119749. The scalar-versus-slope-matrix maximum difference is 2.78e-16. All patent conditions pass. Standalone elements, cemented compound powers, functional blocks, principal planes, pupils, scaling and telephoto/retrofocus criteria agree with the final candidate and prose. The source's Seidel t₁/l₁=0.59394 remains an undefined parameter; its conditional entrance-pupil interpretation from the baseline is not adopted as an exact source stop coordinate.

### Fresh geometry and ray checks

The post-exposure independent ray path uses stable quadratic roots, the physical sphere hemisphere, and normal/tangential Snell decomposition. It does not call the author's intersection or refraction functions. It independently reproduces all 33 original launch paths to a maximum per-hit radius difference of 4.27e-14 mm. This is a new implementation written after candidate exposure, distinct from the genuinely pre-exposure first-order path. Correction validation is not presented as another blind review.

Analytic spherical sag differences have their extrema at endpoints on these shared valid radial intervals. Those exact bounds independently verify positive element edge thickness, actual rim angle, spherical domain, and shared-band air-gap intrusion. Minimum edge thickness is 0.2545452256 mm. Maximum rim angle is 59.5106456°, below the current 64.1580672° policy. Maximum shared-band sag-intrusion/gap ratio is 0.89863134, below the default 0.9 budget; the tight central gap is therefore explicitly checked rather than hidden by layout. No geometry-policy override is used.

A fresh 803-ray grid covers fields 0°, 2.25°, 4.5°, 6.75°, 9°, 11.25°, 13.5°, 15.75°, 18°, 20.25° and 22.5°; radial pupil fractions 0, 0.17, 0.375, 0.5, 0.75, 0.83 and 1; and twelve azimuths in 30° increments away from the center. All 343 samples within field ≤13.5° and pupil fraction ≤0.75 transmit. This is broader than the current template/default off-axis bundle (offAxisFieldFrac=0.6 and fractions −0.75, −0.375, 0, 0.375, 0.75), and includes intermediate field and skew directions. The on-axis full marginal ray independently reproduces the calibrated stop radius; its f-number agreement remains calibration rather than measured iris evidence.

The broader grid has 25 internal R7 clips. Full-rim clipping begins at 11.25°, includes the default 13.5° field, and some 0.83-pupil launches also clip at 22.5°. Thus the original wording that referred only to internally clipped “extreme-field” cases was too narrow. It is corrected in the analysis. The default-bundle requirement passes; full-aperture off-axis containment is not claimed. This is finite sampling, not proof over a continuum. No measured production clear aperture is inferred from it.

### Actual application reruns and raw status handling

The actual engine remains pinned to commit `66b394809241620190908def6caf9a81d3f3a6f5`. Immediately before these reruns, all 218 recorded dependency files were hashed and still matched the dependency proof. Actual buildLens/validateLensData, TypeScript 5.9.3 strict/noEmit against the real LensDataInput, Prettier 3.8.1, runtime glass resolution, render diagnostics, the original 33-ray harness and the new 803-ray harness were executed read-only. No repository files were created or edited.

EFL=50.003664824718 mm, exact-convention FOPEN=1.4, and zero hidden render trim are confirmed. Prepared geometry is identical at focus controls 0, 0.5 and 1, consistent with the infinity-only sentinel and empty variable-gap set. Those are UI control checks, not newly invented finite-focus states. Eight actual aperture sweeps, each using the required 343-ray domain, returned no unexpected failure and no internal cemented clipping; smaller irises produce expected STO clipping.

The wider actual grid contains 45 raw failed/noBracket returns, all before the first hit. The independent full-sphere calculation places every one outside the first clear aperture: minimum sphere-intersection radius 21.4380674 mm versus 19.8 mm authored clear radius. Each is therefore separately classified as a physical finite-aperture miss, never as a transmitted ray. All 25 internal clips match between the independent and production tracer. Successful/explicit-clipped first-hit radii agree to 3.01e-10 mm. Raw failed/noBracket statuses and the FAIL raw count comparison remain visible; a separate, executed physical-miss classification check passes. This is not an exception authorization or the suppression of a failed required-domain ray. The required default/interior domain has zero such raw failures.

The portable verifier reconstructs the new ray grid and validates real-receipt binding to the final data. It does not pretend that Python reruns the repository engine, typechecker or renderer. Full repository/corpus/build/publication checks remain NOT_RUN and integration-only.

### Glass and manufacturer evidence upgrades

The original author-era catalog retrieval limitations remain part of the historical record above. The independent pass now supplies fresh OHARA 25-04 per-glass sheets, HOYA 2026-07-07 including obsolete glass, Hikari 2025-06-01, Schott Optical Glass 2025, and identified vendor-authored CDGM 2022/Sumita 2023 mirror evidence. Local hashes are retained where bytes were obtained; no hash is invented for Sumita's readable web PDF after a direct-download 404. Ten independent vendor coefficient rows are numerically replayed, and all six vendors have explicit coordinate-residual records. This is targeted family checking, not a full nearest-neighbor catalog sweep. Original melt/supplier identity remains unproved, and candidate spectral indices/deviations remain evidence only.

The exact original historical-class Unmatched labels are defensible for the limited model. No modern analogue's nC/nF/ng/dPgF or APD label is inserted. The OHARA S-prefix remains distinct from L-prefix; vendor deviation normal-line conventions are not conflated. The modern LaK09-family Abbe residuals especially prevent an exact spectral-melt claim.

The Auto Sensorex EE manufacturer manual reproduction freshly consulted explicitly names Auto Miranda-E 50mm f/1.4 with 7 elements/5 groups and modified Gauss construction. It supports family correlation, bayonet/film application and marketed specifications but not the exact patented prescription or release year. Its host additions and historical-reproduction status are now described accurately. The 0.43 m production MFD still supplies no permissible internal focus law.

### Correction register and downstream revalidation

- Candidate data: unchanged, including all R/d/n/v, SDs, stop, scale, image gap, glass labels and infinity-only disclosure.
- Analysis glass-evidence paragraph: replaced author-era partial fresh-catalog coverage with the independently obtained six-vendor source coverage and its exact mirror/download limitations. Added direct source links and corrected Schott source vintage.
- Analysis manufacturer source: aligned the citation and page locator with the freshly inspected historical reproduction rather than describing it as an untouched archived scan.
- Analysis stop section: added the unexplained 0.59394 header disclosure; no new iris coordinate was adopted.
- Analysis field-verification paragraph: replaced the imprecise “extreme-field” limitation with the measured 11.25° onset, 13.5° full-rim limitation, 343 required-domain samples, 803 broader samples, 25 internal clips and 45 separately classified first-aperture noBracket misses.
- Evidence transformation wording: changed obsolete “Stage2 will split” wording to the actual implemented midpoint transformation. Raw source and frozen baseline were preserved.

All constructor/parser/source-mapping, numerical, geometry, exact-trace, focus, glass-disposition and analysis gates were rerun on the final files. The independent reviewer manually compared the final interpretive prose and citations; token matching is supplemental rather than the basis of that review.

### Updated quantitative claim map

| Final analysis claim | Executed/source support |
|---|---|
| Every patent R/d/n/v; 7/5; d-line; spherical; cementing | Frozen inputs and independent_source_candidate_mapping |
| Source and scaled EFL/BFD/track/principal planes/Petzval; no telephoto/retrofocus | independentBaseline.recomputedSource and independentReview.candidateModel |
| Element and cemented-group focal powers; conditions | Author-recomputed implementedModel/facts, compared against independent source/model path |
| BF fail and compatibility witness, unchanged image gap | Raw published_bfd comparison; independent_bfd_rounding_resolution |
| Exact iris calibration versus paraxial f/1.447282 | facts.pupil; independent_exact_stop_calibration |
| Current catalog coordinates, supplier ambiguity | Frozen six-vendor rows and independentReview.glassComparisons; independent_catalog_spectral_replay |
| Source t₁/l₁ = 0.59394 undefined | Frozen 600 dpi header reading and explicit conditional hypothesis |
| Geometry and zero trim | independent_spherical_geometry and actual render receipts |
| 803 rays / 343 required rays / 25 internal clips / 45 external misses | independentReview.exactGrid, noBracketClassification and actual extended receipt |
| No full-aperture containment, clipping starts at 11.25° | Independent grid with first internal clip and retained peripheral statuses |
| Eight apertures and invariant focus controls | stage4Application.extended.apertureSweeps/statesEqual |
| Family-only production link and no reconstructed MFD law | Fresh manual source, frozen source scope, final data.var/focusDescription |

### Stage 4 final disposition

READY_FOR_BATCH is earned for the final nine-file dossier and its stated default-bundle/infinity-only scope. The raw BF and wider-grid noBracket comparisons remain visible with independent, executed resolutions. Peripheral internal full-rim clipping remains disclosed, not green-labeled as universal containment. No essential source value or candidate optical value was changed. The manifest binds approval to the exact final bytes and records clean extraction/replay. INTEGRATION_PENDING remains separate; no Git writes, full build, corpus sweep, integration, upload or publication was performed.


## 2026-10-16 — Live diagram, glass-color and travel review

Rechecked Figure 1 (US_3634001_A.pdf p.2) against the local page. The square front rim and stepped central doublets remain appropriate; no additional SD change is supported. All seven named spectral proxies still resolve. Infinity-only focus stays disabled. Miranda is one canonical assignee; its spelled-out Company Limited source variant is now guarded against reintroduction.

All six release lenses retain 81/81 catalog-backed elements; no additional curve is needed to fill a coverage gap. Surface, image-circle and aperture audits pass at all ten infinity/zoom stations. The sole field-coverage limitation is Miranda's explicitly declared 22.5° half-field (94% of the full-frame corner); no rim clips its corner chief ray. No new changelog entry was added.
