# Tamron A065: source and construction audit

## Job and reference versions

The controlling originals are JP2025033505A, Numerical Example 1, and the unchanged card with stem TamronA06570180mmf28DiIIIVCVXDG2. The PDF is the 51-page original Japanese publication with a PAJ wrapper. The source selection remains a research construction correlation, not manufacturer confirmation of an identical production prescription.

The current-main reference remains 709dda72a0ddead8ee77b8306347429031f8b379, freshly resolved on 2026-10-05. The current data specification, including physical rear plates and hybrid-material treatment, controls. Original source files and the historical blocked archive remain unchanged. The historical Stage 1 archive SHA-256 is 54fe98f8c80374b990065e6d51c6838ecfb16fd933fb4c9ed49de7eadb2ce34e; the historical blocked Stage 2 archive is 6778616d00addb79595e0ee7cb558e0f6e64efca17da6ec12e564dd39d3ef3c9. They are historical records, not approvals of the current revision.

## Extraction and conventions

Original rendered PDF pages 19–22, printed pages 18–21, were transcribed directly. They provide Tables 1–6: surfaces 1–39, all three infinity and all three 850 mm configurations, system data, group powers and aspheres. Figure 1 on PDF page 34 confirms order, physical elements, stop, centered VC subgroup, cover plate and group-motion arrows. The original equation on PDF page 21 uses the standard 1+k convention. K=k; no conic conversion or length scaling is needed. All five aspheres have K=0 and A4–A10 terms, with A12=0. A14=0 is required schema padding, not a newly recovered source coefficient.

The prescription coordinates are nd and νd at 587.56 nm. Aberration-plot legends identify d, g and C wavelengths, but provide no element-specific line indices or normal-line deviations. No nC/nF/ng/dPgF data were fabricated. Positive radii have centers to the image side. Every raw surface row retains its literal precision, source block and location.

## Model transformations

Source surfaces 38–39 are explicitly identified as camera cover glass. They are represented physically through rearPlates: thickness 2.5 mm, nd 1.51680, νd 64.20, preceding source gap 17.2805 mm and trailing air 1 mm. The t/n reference exists only for independent first-order comparisons; it is not a hand-folded production-model gap.

Source L20 has a 0.2000 mm resin layer plus a 1.7000 mm substrate. Both media and their junction are retained. The application requires 21 material entries to represent the 20 physical lenses and 15 air-separated components. The resin is not an additional marketed lens.

All published states and literal gaps remain unchanged. The model close-focus endpoint is 0.85 m; the manufacturer's 0.3 m wide-end limit supplies no missing prescription. The continuous zoom/focus controls interpolate source spacings, and are not a recovered cam law. Only the three documented near states are certified in finiteConjugates. No lateral VC movement is invented.

The source gives no stop radius or mechanical clear apertures. The from-nominal-fno schedule is an explicitly inferred exact-ray iris calibration at the three infinity stations, held fixed with focus and interpolated with zoom. F-number agreement is calibration, not independent diaphragm measurement. Inferred glass semi-diameters combine source-figure plausibility, ray envelopes and geometric constraints.

## Exact bounded aperture authorization

The expressly authorized scope applies only to this A065 Example 1 model:

| Field | Authorized value |
|---|---:|
| Surface 13 SD | 14.25 mm |
| Surface 14 SD | 14.21 mm |
| Surface 27 SD | 14.54 mm |
| Surface 28A SD | 14.90 mm |
| Surface 29A SD | 14.92 mm |
| Lens-level gapSagFrac | 0.94 |

Only air boundary 13–14 may use the exception. All other air gaps are independently required to remain within 0.90. This is a narrowly scoped engineering representation, not an exception for other lenses, source repairs or additional aperture changes. The unchanged semantic payload is cryptographically bound after removing only these five SD fields and gapSagFrac. The verifier rejects either a changed source radius or a broadened 0.95 setting. The final public dossier records the semantic scope, without private approval-message identifiers.

The independently reviewed bounded proposal has SHA-256 fe982daed432f8b98256cfbe9a73811d9daefb0e25a155d0ba4a509fca286427. Reviewing that proposal does not constitute independent approval of the revised final data/analysis pair.

## Glass review

All 19 distinct nd/νd coordinates, including resin and cover, were compared against every coordinate row in the primary HOYA 20260707 catalog with obsolete types. Three nearest candidates and signed residuals are retained for each coordinate. Many coordinates match catalog families, but process variants and suppliers are not uniquely determined. Other vendors were not exhaustively checked. Coordinate codes therefore do not establish commercial identity. The resin and high-index unresolved-family labels are explicit about uncertainty. No catalog-derived spectral performance or apochromatism is claimed.

## Source first-order reproduction

Independent reduced-angle sequential and ABCD calculations agree within 1e-12. Computed infinity EFLs are 72.067202, 120.013370 and 174.654239 mm, against source 72.0664, 120.0114 and 174.6514 mm. Air-equivalent BF is 19.928707 mm; physical last-lens-to-image distance is 20.7805 mm. Physical tracks are 172.0001, 189.0483 and 197.8684 mm. All eight patent conditions and Table 26 quantities reproduce within the recorded tolerances. Condition 6 retains the absolute value expressly present in claim 4 and paragraph 0072; the abbreviated table heading does not override it.

Every surface Petzval term, principal plane, individual material power, cemented/functional-group power, source-state position and conjugate is reproducible in the verifier. Final-file standalone powers are separately recomputed and compared to each element's fl field. Source-to-implemented equality checks compare all six complete R/d/nd stacks, including physical cover rows. Aspheres are separately compared with the raw table. The approved aperture-only changes leave first-order values invariant.

## Geometry and physical-pupil verification

The historical ordinary-0.90 comparison remains a FAIL observation: the source-F2.9103 tele pupil needs a shared radius of at least 14.2084805 mm, while that ordinary rule permits only 13.9639747 mm. The retained comparison is not relabeled a numerical match. The actual current constructor still rejects the revised radii when the ordinary 0.90 setting is restored in a negative control.

With the authorized radii and 0.94 setting, actual boundary 13–14 has intrusion fraction 0.932720940703, leaving 0.255102009 mm physical air. Its margin below the 0.94 allowed intrusion is 0.027600009 mm. The greatest other air-gap fraction is 0.893119438101 at 9–10. The smallest material separation is the unchanged hybrid resin's 0.014236620 mm; the smallest air separation is 0.200000000 mm. These are mathematical optical-surface clearances, not manufacturing feasibility or tolerance certification. (Current value after the 2026-10-06 final review, last section: the resin rim is 15.0 mm and the smallest material separation is 0.143034573 mm; the 13–14 and 9–10 fractions above are unchanged.)

Shared-band geometry is checked at every published control corner. Fixed surface shapes and piecewise-bilinear axial gaps mean each interpolation cell's extreme gap occurs at a control corner. Actual rim slopes, conic domains, material thicknesses and air-gap intrusion remain valid. Native render diagnostics show zero hidden trimming at all 231 sampled zoom/focus states.

A fresh portable exact full-asphere/Snell tracer and the actual current engine independently execute 21 zoom × 11 focus × 21 radial pupil fractions, totaling 4,851 physical-iris rays per implementation. All pass. The six published endpoint configurations use exact source conjugates. Intermediate object distances are explicitly estimated inverse-distance diagnostics, not source claims. Finite sampling is not proof of ray clearance over a continuum. The portable boundary comparison allows 1e-8 mm roundoff; the engine traces just inside exact equality by less than 1e-9 mm. Neither is an aperture-size or geometry waiver.

All 231 tested format-corner chief rays reach 21.633 mm image height within 0.00011 mm. This establishes the tested chief-ray field coverage, not absence of off-axis pupil vignetting.

### Final aspheric departures

Polynomial departure from the spherical base at each final modeled aperture, independently checked against the current native profile evaluator:

| Surface | Modeled SD mm | Departure mm |
|---|---:|---:|
| 28A | 14.90 | −0.367803878 |
| 29A | 14.92 | −0.060193596 |
| 33A | 16.50 | +0.674712147 |
| 34A | 16.50 | +0.391482816 |
| 35A | 16.40 | +1.051350725 |

These are modeled-rim quantities, never published-aperture measurements. The 35A row is the Stage 2 record; since the 2026-10-06 final review (last section) surface 35A is modeled to 15.00 mm, where the departure is +0.704012049 mm. The other four rows are current.

## Current UI and finite-conjugate checks

The current constructor, validator, trace, field, render and finite-conjugate functions are actually executed from the pinned released source. Node's type-stripping loader is not TypeScript type checking. The 137 loaded TypeScript modules are individually fingerprinted in the runtime report. Two additional current UI source files were read directly from the same commit to verify off-axis safe-zone clamping and launch bindings; no React-hook/browser execution is claimed.

UI testing uses the exact default axial/off-axis fractions, supplemental axial boundary fractions, three actual aperture-control positions and both focus-tracking modes. It binds the current pupil to the current physical iris, and applies focusK only in focus-tracking mode. Off-axis tests use the actual projection-aware helper and the hook's rectilinear tracing-field clamp. Public trace adapters and engine first-hit status agree.

Rejected UI fan rays are retained as rejected. In the sampled off-axis grid, every noBracket event occurs before the first hit; an independent unbounded spherical intersection places each of those rays outside the authored front aperture. These are recorded front-aperture exclusions, not source-pupil transmission or successful rendered rays. No clipped or noBracket ray's ghost continuation counts as clearance evidence. Current display launch families differ from rays aimed at the physical source-conjugate pupil, so their rejected portions do not authorize further radius changes.

The actual finite-conjugate selector recognizes only the three documented 850 mm states: object-to-first-vertex distances 678.0000, 660.9517 and 652.1316 mm. It does not certify interpolated controls. No MTF-performance claim is made.

## Discrepancies and limitations retained

- Literal finite states have Gaussian defocus +0.032262756, +0.094284521 and +0.070863445 mm at the authored image plane. No focus merit criterion is supplied, so zero Gaussian defocus is not a source reference. The source spacings and image plane are untouched.
- Source 850 mm finite states do not reconstruct production 0.3 m wide-end close focus.
- The iris and semi-diameters are inferred. Five authorized upward-rounding adjustments provide small numerical ray clearance, not an 8–12% mechanical margin.
- The ordinary 0.90 comparison remains unfavorable; the specific approved treatment is separately checked.
- No exact glass supplier, melt, undisclosed spectral line data or numerical stabilization offsets are inferred.
- No full-corpus tests, metadata generation, build, viewer UI or integration were executed.

## Stage 2 gate and reproducibility

The replacement Stage 2 checkpoint earns READY_FOR_ANALYSIS only after the recorded applicable construction checks and clean portable/current-engine replays pass. It preserves source/evidence/verifier/data/results hashes and the semantic exception. It is separate from the historical blocked revision.

Portable replay, Python standard library:

    python TamronA06570180mmf28DiIIIVCVXDG2.verify.py --package-dir EXTRACTED_DIRECTORY --output EXTERNAL_RESULTS.json

Targeted actual-engine replay, Node 24 with the separately identified shared reference snapshot:

    node --disable-warning=ExperimentalWarning TamronA06570180mmf28DiIIIVCVXDG2.runtime.mjs CURRENT_SOURCES_ROOT EXTRACTED_DIRECTORY EXTERNAL_RUNTIME.json

Both commands write outside the sealed package. Portable replay recomputes source and final-file optics and physical ray clearance; it does not substitute a stored engine PASS for execution. The clean-extraction procedure separately re-executes the actual current-engine probe and compares stable results. Files and original-source hashes are checked after extraction. No archive member is edited by replay.

## Quantitative claim map

- Source EFL, BF, tracks, principal planes, group powers, movement and conditions → results.sourceModel and facts, raw Tables 1–6 and 25–26.
- Final individual powers → results.implementedModel.elementStandalone; parsed final data.
- Exception scope and unaffected payload → evidence.modelingDecisions M-08 and authorized-semantic-scope.
- Historical ordinary-limit mismatch → results.comparisons ordinary-90-percent-policy and ordinaryPolicyConflict.
- Final physical geometry → results.implementedModel.sharedBandGeometry.
- Independent physical ray grid → results.implementedModel.physicalPupilGrid; actual grid → runtime.physicalPupilGrid.
- Current UI/corner/render/finite-state behavior → runtime.rows and verifier checks for public consistency, rejected field rays, corner/render and finite selection.
- Aspheric departures → results.implementedModel.geometryBase and runtime.nativeAsphereRims.
- Glass coordinates/candidates → evidence.glassEvidence and catalog residual checks.

## Independent review at the Stage 3 handoff (superseded below)

At that handoff, final Stage 4 review had not occurred. The historical source-first baseline and bounded proposal do not replace review of the final revised pair. INTEGRATION_PENDING remains separate. Repository typecheck, full tests, build and actual viewer inspection remain NOT_RUN at integration scope.

## Stage 3 analysis consistency and gate

Stage 3 began only after the authorized Stage 2 package passed clean Python and actual-engine replay and its checkpoint was frozen. The checkpoint archive SHA-256 is 1207bda3a81bfa9900a39cd9af2467aed968467adfbe7601857874f351ac1da7. Its data SHA-256 is ec47c1804998d9534a6a814d20021299ba306f85c85093dd864f5e4b53da98de.

The data, evidence, runtime program and runtime result remain byte-identical to that checkpoint. The verifier was extended only for analysis consistency and checkpoint binding; the full sourceModel/implementedModel numerical content is fingerprinted against the frozen Stage 2 result. No optical or source change occurred during analysis. All inherited checks are rerun rather than carried forward on the lens name alone.

The analysis follows the current required section order and includes all 21 material spans while explaining the 20-lens physical count. Its source facts, catalog-coordinate comparisons, isolated powers, model inferences and production specifications are distinguished. Conventional primary references identify original patent paragraphs/tables, manufacturer material and the checked catalog. The optional exception and the ordinary-policy comparison failure remain explicit.

The analysisClaims list in results supplies stable A-* identifiers, exact expected numerical rows and source/result pointers. It covers individual nd/νd/glass/fl lines, group powers and positions, source and computed EFLs, finite conjugates/travel/residuals, asphere coefficients and modeled-rim departures, all condition values/bounds, catalog residuals, Petzval/VC values, iris calibration and bounded geometry. Metadata, disclosure, portable-citation and Markdown-integrity checks are separate.

Manual interpretive and citation review completed: the element paragraphs make structural and source-supported observations, without assigning uncalculated individual aberration contributions. L16 is explicitly source-molded; L19's process is not asserted. The hybrid layer is not counted as another marketed lens. The unknown iris and clear apertures remain inferred. No APO/secondary-spectrum performance, smooth cam law, production minimum-focus reconstruction, lateral VC prescription, no-vignetting claim, or manufacturing feasibility certification is introduced. The five final polynomial departures are tied to the final inferred rims. Source-graph spectral line legends are not substituted for material line indices.

With these checks passed, this exact author pair is READY_FOR_AUDIT. It is not READY_FOR_BATCH: a final independent review of these exact revised bytes is still required. INTEGRATION_PENDING remains unchanged.


## Stage 4 independent source-first audit: 5 October 2026

The frozen source-only baseline was completed before candidate contents were opened. Its fingerprint is d58941310dd5e1464b65b286a64053808d30ccfa246c528cd9dffd4c35880b0e. Its original source extraction and source results are included byte-for-byte as independent.evidence.json and independent.results.json. The independent verifier retains the frozen calculation prefix; a separate adapter loads those inputs and reconciles the actual final data. The original complete baseline member hashes and code identity remain in evidence.independentPass. The earlier baseline itself was not rewritten.

Exposure is disclosed in the frozen record: initial directory filenames were visible, and the common condition page also showed unrelated Example 4 coefficients above the selected condition table; those values were not used. Candidate prescription, results, labels and reasoning were withheld until the source baseline had been frozen. Independent extraction, independent calculation and actual application execution are distinct evidence.

### Exact final scientific pair

The submitted Stage 3 archive SHA256 is 02a61ab9a46a3432308151c6e372443abc00eaee650f1d305698fb9928642626. Independent parsed comparison against the historical blocked candidate finds exactly the five approved inferred SD changes and the A065-only .94 setting. No other semantic field differs. Data and analysis bytes remain unchanged from the submitted Stage 3 pair:

- Data: ec47c1804998d9534a6a814d20021299ba306f85c85093dd864f5e4b53da98de
- Analysis: 206c27f12b05feece372a3ef445f9f676db53d2f37d300dfaa81281d1bf10cf8

All 39 physical source interfaces at all six states, every native material index/Abbe pair, the five source aspheric rows and unchanged inferred iris model agree with the frozen independently entered inputs. Actual final-file source EFLs remain 72.067201662,120.013370032,174.654239140 mm; near-state residual shifts remain +0.032262756,+0.094284521,+0.070863445 mm. No focus repair or image-plane motion was introduced.

### Strict G5 residual remains visible

The reviewer retains the raw group-G5 comparison: computed -727.676847736 mm versus printed -727.7090 mm, residual +0.032152264 mm, FAIL against its original 0.02 mm allowance. The author branch's coarser 0.4 mm comparison is historical and does not erase this stricter observation. A separate constructive rounding check solves nd33=1.583131844789, within the printed nd=1.58313 half-unit interval ±0.000005, reproducing the printed group power. It proves compatibility with source rounding, not the original hidden digits. Neither source nor candidate nd33 was changed.

The ordinary 0.90 aperture-policy comparison likewise remains FAIL. Its resolution is the exact approved bounded scope and positive geometry, not a fictitious numerical match. Both failed raw observations appear in consolidated results, alongside separate acceptance/resolution checks.

### Independent final rays and geometry

A third exact calculation path, the reviewer's independently authored 3D vector-Snell engine, uses bracketed physical-iris aiming and executes 4,851 axial samples over 21 zoom and 11 focus positions. It reproduces the final native envelope within 1e-6 mm. All six published endpoints retain exact source conjugates; intermediate inverse-distance diagnostics remain estimates. No rejected ray or ghost continuation is counted as transmitted.

The independent 1001-point shared-band scans confirm positive material/air separations, actual rim slopes below the ordinary limit, exception fraction 0.932720940703, retained air 0.255102009 mm, and maximum other-air fraction 0.893119438101. The minimum material thickness remains the unchanged resin's 0.014236620 mm (0.143034573 mm since the 2026-10-06 final review moved the resin rim to 15.0 mm). The approved SDs are minimal ray-derived upward rounding, not manufacturing margins. Final aspheric departures agree with both the frozen coefficient convention and native profile evaluation.

Figure1 is consistent with the small revised clear radii but does not publish them. The 13/14 change is under two pixels at the independent 2x source scale, while the schematic includes flanges. It cannot itself prove an exact clear-aperture diameter or create a policy exception. The original coarse-figure and source-only solver limitations remain in the frozen record; the later bracketed final-candidate checks resolve the modeled aperture question without rewriting that history.

### Glass, production evidence and analysis review

The independent source-only catalog work screened 1,023 manufacturer rows from HOYA, OHARA and HIKARI, supplemented by targeted SCHOTT/CDGM primary evidence; Sumita was checked only at its catalog entry point. Exact HIKARI coordinate candidates include J-KZFH1 for 1.61266/44.46 and Q-LASFH58S for 1.85108/40.12. The final coordinate-code/class annotations remain defensible without claiming supplier or melt identity. No source spectrum is invented, and the resin is not treated as a bulk-glass substitute.

The current primary Tamron page was independently reopened on 5 October 2026. It confirms the two mount variants, 20/15 production construction, the stated special-element counts, VXD/VC and wide/long MOD values. The rendered September 2023 brochure also confirms 9 circular blades and F22. Neither manufacturer document identifies the selected patent example as a confirmed factory prescription. The analysis's production correlation remains appropriately qualified. Structural prose, all quantitative tables, material counts, source graphs, equation, reference planes, coefficient signs, conditional expressions and stated limitations were reviewed against the primary source and fresh results.

### Replays and privacy

The exact submitted portable and native reports were re-executed first and reproduced their stable output. Current main 709dda72 native execution loads 137 fingerprinted modules and reproduces 231 corner/render states, 4,851 live physical-pupil rays, zero hidden material trim and rejection of the ordinary 0.90 negative control. The final source-inclusive archive must then pass clean extraction, exact membership/hash checks, consolidated portable replay and fresh native replay before its external delivery receipt is sealed.

Public provenance uses a semantic scope guard. No private approval-message identifiers are stored. The unnecessary original provider-sharing URL was removed from the P1 source record; original PDF bytes and hash remain authoritative. Recursive final scans include nested runtime strings, actual private-message token patterns and absolute executor roots. The only adapted author-core binding concerns appended independent review and that provider-URL normalization; the scientific pair and source numerical payload are unchanged.

The initial final-adapter replay exposed JSON object-key type normalization between a live integer-keyed result and its serialized frozen form. The adapter now canonicalizes through JSON before equality comparison. No numerical input, output, tolerance or frozen file was changed to resolve that adapter issue.

### Final audit disposition

When the final clean-package checks recorded in the manifest and external receipt pass, this exact pair earns READY_FOR_BATCH at chat-stage scope. It remains INTEGRATION_PENDING. Repository typecheck, full corpus/tests/build and actual viewer UI remain NOT_RUN at integration scope. Finite sampling is not continuum, full-field pupil, factory-cam, spectral-performance or manufacturing certification. No upload, integration or publication occurred in this review.

## 2026-10-06 — Integration glass and metadata pass

- **Glass labels.** The 18 code-only annotations (`NNNVVV — coordinate-code glass`) and the two
  `Unmatched (… TAFD40 coordinate family …)` rows were replaced by the catalog-equivalent names this log's glass
  review already identified: HOYA NBFD15-W, FCD1, FCD100, NBFD30, TAC6L, TAC8, FDS90-SG, TAFD40L-W, NBF1, FCD515,
  NBFD25, TAFD32, E-FDS1-W, M-BACD12 and TAFD25L, plus the exact HIKARI rows J-KZFH1 (1.61266/44.46) and Q-LASFH58S
  (1.85108/40.12). Every label keeps the "coordinate-equivalent class; supplier unconfirmed" qualifier. Stored nd and
  νd are unchanged.
- **Effect.** L8 and L10 (2.00069/25.46) now trace on the TAFD40L-W catalog curve instead of the Abbe fallback, and
  L20 resolves to the newly added HOYA TAFD25L row. 20 of 21 material spans use catalog Sellmeier data; the 0.2 mm
  hybrid resin L20r stays explicitly unmatched.
- **Analysis.** The per-element `Glass:` lines, the label-convention sentence and the catalog-limits paragraph were
  updated to match.
- **Metadata.** Display name corrected from `DI III` to Tamron's `Di III` casing. `lensMounts` (`sony-fe`,
  `nikon-z`) retained: Tamron announced the Nikon Z version of Model A065 on 2025-10-07. `imageFormat`
  `135-full-frame` retained.

## 2026-10-06 — Patent-figure semi-diameter pass

*Superseded in part by the final review at the end of this log, which changed L20 (35A/36/37) and surface 10 and
re-read the rims on both sides of the figure. The numbers below are this pass's record.*

**Outcome: no semi-diameter changed.** The stored rims already reproduce Figure 1; the A065-only `gapSagFrac`
0.94 exception and its five inferred rims (13/14/27/28A/29A = 14.25/14.21/14.54/14.90/14.92 mm) are untouched, so
the 0.255102 mm of air at boundary 13–14 and every quoted aspheric departure stand as written. Only the data-file
header's semi-diameter note was extended to record this pass.

### Figure and scale

- Source: JP2025033505A, FIG. 1, PDF page 34 — a single wide-end, infinity-focus section with the optical axis
  vertical and the object at the bottom. Group brackets, leader lines, the movement arrows, the cover glass CG and
  the image plane IP were excluded; rims were read on the right-hand side, which carries no leader lines.
- Measured at the page's native 318 dpi raster. Surface-1 vertex to surface-37 vertex spans 2096 px for the
  wide-end 151.2196 mm, giving 13.861 px/mm (0.07215 mm/px). More than thirty intermediate vertex crossings land
  within 2 px of the prescription at that one scale, and the cover glass and image plane fall at 168.46, 170.98
  and 172.03 mm against 168.50, 171.00 and 172.00 mm, so the drawing is to scale axially.
- Radial scale equals axial scale: the drawn sag of surface 9 at the end of its curve is 74.5 px, which is the
  prescription sag at 14.96 mm, and the curve ends 205–207 px (14.8–14.9 mm) from the axis.
- The repository's automatic figure screen, cropped to the glass only, reports a median figure/data ratio of 1.011
  with every measurable element between 1.003 and 1.027 except L6 (1.114, contaminated by the L5 flange inside its
  rim window; the hand reading is 1.015) and L20 (1.062). It could not measure the 0.2 mm resin span.

### Stored values against the figure (all retained)

| Element | Surfaces | Stored SD mm | Figure outer rim | Figure curved extent where it differs | Rim ÷ larger stored |
|---|---|---|---:|---|---:|
| L1–L2 | 1/2/3 | 32 / 32 / 32 | 445 px = 32.10 mm | — | 1.003 |
| L3 | 4/5 | 31 / 31 | 432 px = 31.17 mm | — | 1.005 |
| L4 | 6/7 | 18.8 / 18.8 | 262 px = 18.90 mm | — | 1.005 |
| L5 | 8/9 | 17.4 / 14.95 | 244 px = 17.60 mm | concave 9 ends at 14.8–15.0 mm, flat seat beyond | 1.011 |
| L6 | 10/11 | 14.95 / 15.5 | 218 px = 15.73 mm | concave 11 ends at about 14.0–14.4 mm, flat seat beyond | 1.015 |
| L7 | 12/13 | 15.8 / 14.25 | 219 px = 15.80 mm | rear 13 merges with 14 from about 14.7 mm outward | 1.000 |
| L8 | 14/15 | 14.21 / 15.8 | 222 px = 16.02 mm | front 14 merges with 13 from about 14.7 mm outward | 1.014 |
| L9 | 17/18 | 17 / 17 | 239 px = 17.24 mm | — | 1.014 |
| L10 | 19/20 | 16.2 / 15.5 | 228 px = 16.45 mm | — | 1.015 |
| L11 | 20/21 | 15.5 / 15.5 | 219 px = 15.80 mm (knife edge) | — | 1.019 |
| L12–L13 | 22/23/24 | 15 / 15 / 15 | 209 px = 15.08 mm | — | 1.005 |
| L14–L15 | 25/26/27 | 14.5 / 14.5 / 14.54 | 203 px = 14.65 mm | — | 1.008 |
| L16 | 28A/29A | 14.90 / 14.92 | 206 px = 14.86 mm | — | 0.996 |
| L17–L18 | 30/31/32 | 13.1 / 13.1 / 13.1 | 184 px = 13.27 mm | — | 1.013 |
| L19 | 33A/34A | 16.5 / 16.5 | 232 px = 16.74 mm | — | 1.015 |
| L20r–L20 | 35A/36/37 | 16.4 / 16.4 / 16.4 | 240 px = 17.31 mm | concave resin face ends at about 14.6 mm, flat seat beyond | 1.055 |

The drawn stop marks have inner ends 210 px (15.15 mm) from the axis; the engine's wide-end iris radius from the
`from-nominal-fno` schedule is 15.0202 mm. The authored `STO` value of 17.0 mm was not touched.

### Values deliberately left alone

- **The five exception rims.** The figure does not contradict them. Surfaces 13 and 14 are drawn meeting at the
  rim: their arcs merge from about 14.7 mm outward, and the prescription's own contact height for the 3.7917 mm
  gap is 14.702 mm, so no clear radius above that is physical. The stored 14.25/14.21 mm sit 3 % inside it and
  0.01 mm or less above the 14.24/14.21 mm axial marginal heights. Surface 27 (14.54 mm) and L16 (14.90/14.92 mm)
  read 14.65 and 14.86 mm on the drawing, inside 1 %.
- **L6 rear and L5 rear.** The flanged outlines of L5 and L6 match the larger stored value of each element; the
  differing front/rear values reproduce the drawn concave extents to within about 10 % (surface 11) and 1 %
  (surface 9). Surface 10 stays at 14.95 mm with surface 9 because the 9–10 air gap is the model's second-tightest.
- **L20.** This is the largest remaining difference. The figure ends the thick resin line 202 px (about 14.6 mm)
  from the axis, where the drawn sag of 68.5 px equals the prescription's 4.92 mm, and continues the substrate as
  a flat seat to 17.31 mm; the rear face runs to 17.31 mm. Stored 16.4 mm is 12 % above the drawn resin extent and
  5 % below the drawn rear rim, both inside the 10–15 % band this procedure leaves alone. A figure-matched trial
  (35A = 36 = 14.6 mm, 37 = 17.3 mm) was checked without editing: it passes the surface validator, keeps the
  patent-field chief ray clear (13.06 mm at surface 36), and would raise the resin's rim thickness from
  0.014236620 mm to 0.172412 mm. It was not adopted because it would re-key the recorded 35A departure and the
  recorded minimum material separation for a difference of a few pixels in the drawing.

### Checks on the retained file

- Surface validator: no validation errors. Image-circle floor: 0 undersized.
- Traced corner coverage: 100 % at 72.07, 120.01 and 174.65 mm, corner chief clear at 16.3°, 9.7° and 6.7°
  reaching 21.65 mm.
- Exact meridional trace at the patent half-fields 16.3157°, 9.7406° and 6.7314°, with infinity gaps and again
  with the 850 mm gaps: no surface clips the axial marginal ray or blocks the chief ray. Tightest axial margins are
  the documented ones, 14.24 mm against 14.25 mm at surface 13 and 14.21 mm against 14.21 mm at surface 14.
- Engine build: EFL 72.0672 / 120.0134 / 174.6542 mm, f/2.9104 / 2.9109 / 2.9103, iris radii 15.0202 / 14.6402 /
  14.9100 mm — unchanged, as no optical field was edited.
- The five quoted polynomial departures (28A −0.367803878, 29A −0.060193596, 33A +0.674712147, 34A +0.391482816,
  35A +1.051350725 mm) and the resin's 0.014236620 mm rim thickness were recomputed at the stored rims and agree
  to the last printed digit.
- Rendered page compared with the figure at matched scale at the wide end, and inspected at 120 mm, 174.65 mm and
  the 0.85 m endpoints: element order, rim steps between groups and the stop position agree, with no overlap at
  any station.

### Open limitations

- The renderer joins unequal front and rear rims with a straight chamfer, so the flat mounting seats drawn on L5,
  L6, L8 and L20 appear as slanted edges rather than steps. That is a drawing convention, not a rim error.
- The figure is a wide-end section only; the middle and long stations have no drawn counterpart to compare.
- The scratch clearance tracer omits `rearPlates`, placing its image plane 3.5 mm short. Asked for a 21.6 mm image
  height it therefore over-reads the wide half-field as 16.92° (patent 16.3157°). This is a tool limitation, not a
  resin-layer solver failure and not a lens defect; the patent half-fields were used for the clearance statements
  above.

## 2026-10-06 — Final diagram, label and movement review

Second pass over the local lens page against JP2025033505A FIG. 1 (PDF page 34) and Numerical Example 1 (PDF pages
19–22, ¶0106–0131, Tables 1–6). Four semi-diameters, the group and cemented-pair annotations, the spec line, four
inferred-APD tags, element roles, variable-gap labels and the cover-plate glass label changed. No R, d, nd, νd,
aspheric coefficient, variable gap, `STO` value, `gapSagFrac` or exception rim (13/14/27/28A/29A) was touched.

### Figure SD review

- **Scale re-derived.** At the page's native 318 dpi raster the surface-1 and surface-37 vertices are 2096 px apart
  for the wide-end 151.2196 mm: 13.861 px/mm, as the first pass found. Radial check on L20: the flat seat lies
  67.7 px (4.88 mm) in front of the 35A vertex, the prescription sag of 35A at 14.55 mm, and the 35A line reaches
  the seat 201.5 px (14.54 mm) from the element centre. Axial and radial scales agree.
- **Both-side readings.** Every element outline is symmetric about a line 2 px to the right of the drawn dash-dot
  axis, and the outline pen is 4 px wide. The first pass read outermost ink on the right side from the drawn axis,
  which over-reads each rim by about 4 px (0.3 mm). Read on both sides at line centres the outer rims are:

  | Element | Larger stored SD mm | Figure outer rim mm | Figure ÷ stored |
  |---|---:|---:|---:|
  | L1–L2 | 32 | 31.85 | 0.995 |
  | L3 | 31 | 30.91 | 0.997 |
  | L4 | 18.8 | 18.65 | 0.992 |
  | L5 | 17.4 | 17.35 | 0.997 |
  | L6 | 15.5 | 15.44 | 0.996 |
  | L7 | 15.8 | 15.55 | 0.984 |
  | L8 | 15.8 | 15.76 | 0.997 |
  | L9 | 17 | 16.95 | 0.997 |
  | L10 | 16.2 | 16.20 | 1.000 |
  | L11 | 15.5 | 15.55 | 1.003 |
  | L12–L13 | 15 | 14.83 | 0.989 |
  | L14–L15 | 14.54 | 14.39 | 0.990 |
  | L16 | 14.92 | 14.61 | 0.979 |
  | L17–L18 | 13.1 | 13.02 | 0.994 |
  | L19 | 16.5 | 16.49 | 0.999 |
  | L20 (before this pass) | 16.4 | 17.03 | 1.038 |

  The stop marks' inner ends are 208 px (15.01 mm) from the centre; the engine's wide-end iris radius is 15.0202 mm.
- **Changes (before → after).**

  | Surface | Before mm | After mm | Evidence |
  |---|---:|---:|---|
  | 10 (L6 front) | 14.95 | 15.5 | FIG. 1 draws L6 as a square-edged plate, both faces to 15.44 mm. The stored 14.95/15.5 pair rendered a slanted edge. The 9–10 gap is checked over the shared band, still 14.95 mm, so its fraction stays 0.893119438101. |
  | 35A (resin face) | 16.4 | 15.0 | FIG. 1 ends the concave resin face at a flat seat: the 35A line at 14.55 mm, the junction line at 14.8 mm, the outer edge of the resin stroke at 15.0 mm. 16.4 mm was the last 0.1 mm step with positive resin thickness, not a drawn extent. |
  | 36 (junction) | 16.4 | 15.0 | Same seat; kept equal to 35A. |
  | 37 (L20 rear) | 16.4 | 17.0 | The rear face runs to the 17.03 mm outer rim, above L19's 16.49 mm. The stored value drew L20 below L19. |

- **Why 15.0 mm and not the drawn 14.6–14.7 mm.** A 14.6 mm resin rim cuts the sampled corner transmission at
  infinity focus from 0.5685 to 0.5381 (wide) and from 0.4724 to 0.4171 (long); 14.7 mm gives 0.5533 and 0.4322 and
  lowers the engine's wide half-field bound to 17.99°. Rays that pass every other aperture reach at most 14.90 mm on
  35A and 14.92 mm on 36 (infinity focus, 21 zoom states, fields 0.5–1.0 of the corner, 61 × 121 pupil grid), so
  15.0 mm is the smallest 0.1 mm value that clips none of them. The same scan gives 14.63 mm on surface 10 and
  16.15 mm on surface 37.
- **Numbers that moved with the rims.** Polynomial departure of 35A at its rim: +1.051350725 mm at 16.40 mm →
  +0.704012049 mm at 15.00 mm. Resin rim thickness, still the smallest material separation: 0.014236620 mm →
  0.143034573 mm (the layer is 0.2000 mm on axis, 0.3020 mm near 10 mm height, and would reach zero just past
  16.5 mm). The next thinnest edge is L11 at 0.421576560 mm. The 13–14 boundary keeps fraction 0.932720940703 and
  0.255102009 mm of air. The header note, the analysis asphere table and the L6, L20r and L20 paragraphs were
  updated, and the three earlier statements of the old values in this log now point here.
- **Engine build.** EFL 72.0672 / 120.0134 / 174.6542 mm, f/2.9104 / 2.9109 / 2.9103 and iris radii 15.0202 /
  14.6402 / 14.9100 mm are unchanged. The half-field bound, the largest field whose chief ray clears every rim, moved
  from 18.3256° / 11.2159° / 7.6308° to 18.3348° / 11.3124° / 7.6777°: it was set by surface 37 at 16.4 mm and is
  now set by surface 36 at 15.0 mm. Both sets lie 12–16 % beyond the patent half-fields 16.3157° / 9.7406° /
  6.7314°. The default off-axis display field at the wide end goes from 10.995° to 11.001°. This is the only
  engine-derived change and follows from giving the rear face its drawn rim.
- **Checks on the edited file.** Surface validator: no errors. Image-circle floor: 0 undersized. Traced corner
  coverage: 100 % at 72.07, 120.01 and 174.65 mm. Corner chief ray over 21 zoom × 11 focus states: reaches 21.65 mm
  in all 231 with no rim clipped; its largest heights are 9.30 mm on 10, 13.02 mm on 35A, 13.07 mm on 36 and
  14.19 mm on 37. Relative-illumination curves (13 fields × 201 pupil rays) at the same 231 states: identical to
  the curves of the file before this pass. Exact meridional trace at the patent half-fields with infinity and
  850 mm gaps: no axial clip and no blocked chief ray; tightest axial margins are still 14.24 against 14.25 mm on
  13 and 14.21 against 14.21 mm on 14. Render diagnostics: zero trimmed surfaces over the 231 states. On-axis
  marginal heights on the changed surfaces are 14.31 mm (10, now larger) and at most 3.63 mm (35A/36/37).
- **Rendered page.** Re-shot at 72.07, 120.01 and 174.65 mm, each at infinity and at 0.85 m, and compared with
  FIG. 1 at the wide end: L6 is now a square-edged plate, L20 ends its concave face inside a thick rim that stands
  above L19, and no elements overlap at any station.
- **Differences that remain.**
  - Flat mounting seats become straight chamfers because the renderer joins a front rim and a rear rim with one
    line: L5 (rear seat from 14.95 to 17.4 mm; surface 9 cannot grow, since the 9–10 gap fraction is 0.893 at
    14.95 mm and passes 0.90 at 15.0 mm), L8 (front seat outside the locked 14.21 mm rim), L10 (junction 20 runs
    into L11's knife edge just short of 15.9 mm) and L20 (seat from 15.0 to 17.0 mm). L1's rear annulus outside
    the cemented surface is not drawn; L1–L2 share a 32 mm rim.
  - L7 and L8 are drawn touching at about 14.7 mm; the model keeps the authorised 14.25 / 14.21 mm rims. L16 is
    drawn to 14.61 mm against the authorised 14.90 / 14.92 mm (+2 %). L7's front rim is 1.6 % above the drawing.
    Each is under 1.5 px on the rendered page, and the first two are fixed by the exception.
  - L20's resin face stops 0.2–0.45 mm outside the drawn 14.55–14.8 mm for the transmitted-ray reason above.
  - FIG. 1 is a wide-end section only; the middle and long stations have no drawn counterpart.

### Diagram labels and movement order

- **Elements.** 21 material entries for 20 lenses, labelled L1–L19, L20r (resin) and L20, in patent order. Every
  `type` string was checked against the signed radii and ¶0112–0116: L1 negative meniscus and L2 biconvex
  (cemented), L3 positive meniscus; L4 positive, L5 and L6 negative, L7 positive menisci convex to the object, L8
  negative meniscus concave to the object; L9 positive meniscus, L10 negative and L11 positive menisci (cemented),
  L12 biconcave and L13 positive meniscus (cemented), L14 biconvex and L15 biconcave (cemented), L16 biconvex; L17
  biconvex and L18 biconcave (cemented); L19 biconvex, L20 negative meniscus concave to the object with the resin
  layer on its object side. No type changed. Asphere markers sit on 28A, 29A, 33A, 34A and 35A, the five ASPH rows
  of Table 1, and the "(Asph)" suffixes on L16, L19 and L20r agree.
- **Groups.** Ranges match ¶0119 (1–5, 6–15, 16–29 including the stop, 30–32, 33–37). Labels changed from
  `G1`…`G5` to FIG. 1's own bracket labels `G1 (P)`, `G2 (M1)`, `G3 (M2)`, `G4 (F)`, `G5 (R)`.
- **Cemented pairs.** `doublets` was empty, so the diagram drew no cemented labels. Added D1 (1–3), D2 (19–21),
  D3 (V) (22–24), D4 (25–27), D5 (30–32) and H1 (35A–37), each spanning exactly the bonded surfaces. Element
  `cemented` names `VC` and `F` became `D3` and `D5` so the series is continuous; "V" is the patent's name for the
  vibration-compensation pair and "F" stays on the group label.
- **Stop, plate, readouts.** `STO` is source surface 16, 1.0000 mm ahead of L9, labelled S in the figure. The
  cover glass stays a traced, undrawn rear plate (2.5 mm after 17.2805 mm of air, 1.0 mm to the image). Added
  `varLabels` D(5), D(15), D(29), D(32) in the patent's d(n) notation; the page had no gap readouts.
- **Spec line, roles.** Added `specs` (20 elements / 15 groups, design f = 72.07–174.65 mm, design F/2.91, 5
  aspherical surfaces on 3 elements, 1 XLD + 3 LD inferred). Added a one-line `role` to every element stating its
  group, cemented partner and any function the patent assigns (V pair, focusing pair, glass-molded L16, hybrid L20).
- **Zoom order and direction.** Stations run 72.0664 → 120.0114 → 174.6514 mm and every `var` row lists
  wide / middle / long in that order; all twelve infinity values and all twelve 850 mm values equal Tables 3 and 4.
  Front-vertex positions from the image plane, wide / middle / long: G1 172.0001 / 189.0483 / 197.8684 mm
  (objectward 17.0482 then 8.8201, total 25.8683); G2 154.1188 / 137.2686 / 128.8043 mm (imageward 16.8502 then
  8.4643, total 25.3145); G3 104.7992 / 102.2525 / 104.6145 mm (imageward 2.5467, then objectward 2.3620); G4
  60.7549 / 57.8347 / 63.1778 mm (imageward 2.9202, then objectward 5.3431); G5 43.0343 mm throughout. This is
  ¶0109 and the figure arrows exactly: G1 to the object, G2 to the image, G3 and G4 on loci convex toward the image
  (the documented G3/G4 reversal), G5 fixed. Nothing was mis-ordered.
- **Focus order and direction.** `focusPositions` is infinity → 0.85 m. Only d(29) and d(32) change. G4 moves
  toward the image by 2.2707 / 6.4626 / 12.6742 mm at wide / middle / long, as ¶0110 states; d(32) falls by
  2.2706 / 6.4626 / 12.6741 mm, equal and opposite within the 0.0001 mm table rounding. d(0) plus the near-state
  physical track is 850.0002 / 850.0000 / 850.0001 mm, so `closeFocusM` 0.85 and the three `finiteConjugates` distances
  (678.0000 / 660.9517 / 652.1316 mm from the first vertex) are right. Patent-positions mode offers all three
  stations with both focus states.
- **Overlays.** The zoom overlay shows G1 moving objectward and G2 imageward with 25.87 mm maximum travel, G3 and
  G4 short reversing tracks and G5 fixed; the focus overlay shows only G4 moving toward the image (12.67 mm at the
  long end). Both agree with the arrows.
- **Focus text.** `focusDescription` reworded to name G4 as the patent's group F and to quote the three travels;
  the direction it stated was already correct.

### Glass and color completeness

- All 20 glass spans resolve to a catalog Sellmeier row whose coordinates match the stored pair (largest residuals
  |Δnd| 4.9 × 10⁻⁶ at NBFD25 and |Δνd| 0.02 at FCD1). The 0.2 mm resin L20r traces on the Abbe estimate by design.
- The cover plate carried no glass label and traced on the Abbe estimate. Labelled it
  `BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed)`, the exact 1.51680 / 64.20 row already listed in
  the analysis; it now traces on that curve. EFL and f-number are unchanged.
- The patent prints no θgF, PgF or line indices and never calls a material anomalous or low-dispersion, so no
  `dPgF`, `nC`, `nF` or `ng` was authored and no element is tagged `apd: "patent"`.
- Added `apd: "inferred"` with a note to four elements by the corpus class convention: L3 (FCD100 class, catalogue
  ΔPgF ≈ +0.050), L2 (FCD1 class, +0.031), L11 and L14 (FCD515 class, +0.016). Tamron's product page lists one XLD
  and three LD elements, the same count. Which production element is which grade is not confirmed. The dense
  flints with positive catalogue ΔPgF (L17 E-FDS1 class, L7 FDS90 class, L8/L10 TAFD40L-W class) stay untagged.

### Identity and metadata

- Front page: publication 特開2025-33505, published 2025-03-13, applicant 株式会社タムロン, sole inventor 山中 久幸.
  `patentNumber` `JP 2025-033505 A`, `patentAuthors` `Hisayuki Yamanaka`, `patentAssignees` `Tamron Co., Ltd.` and
  `patentYear` 2025 are correct. `subtitle` names Numerical Example 1.
- Tamron's Model A065 page (read 2026-10-06): 70-180mm F/2.8 Di III VC VXD G2, 20 elements in 15 groups, one XLD,
  three LD, two GM and one hybrid aspherical element, Sony E and Nikon Z mounts, full frame, minimum object
  distance 0.3 m at 70 mm and 0.85 m at 180 mm. `elementCount` 20, `groupCount` 15 (2 + 5 + 5 + 1 + 2 air-separated
  components), `lensMounts`, `imageFormat`, `focalLengthMarketing` [70, 180] and `apertureMarketing` 2.8 agree.
  The two GM positions correspond to L16 and L19 and the hybrid to L20.
- `focalLengthDesign` (72.0672–174.6542 mm computed, patent 72.0664–174.6514), `apertureDesign` 2.9104,
  `nominalFno`, `zoomPositions` and `closeFocusM` 0.85 (the patent's 850 mm states, not the 0.3 m production wide
  limit) are retained. Display name `TAMRON 70-180mm f/2.8 Di III VC VXD G2` left as normalised.

### Open limitations

- The half-field bound is an engine construct beyond the format corner; its small rise is recorded above. No
  analysis field, f-number or relative-illumination value changed.
- Stage 2–4 hashes and the bounded-scope comparison earlier in this log describe the frozen package pair. The file
  now differs from it by today's integration labels and by this pass's four ordinary rims and annotations; the five
  authorised rims and `gapSagFrac` are as approved.
- The 4,851-ray on-axis physical-iris grid of Stage 2 was not re-run. The changed rims cannot affect it: surface 10
  grew, and the axial bundle stays below 4 mm on 35A, 36 and 37.
