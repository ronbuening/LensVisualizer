# Minolta 135mm F2.8 MD Tele Rokkor — consolidated technical audit

## Follow-up diagram and movement review

Example 1 silhouette retains the small rear singlet. No further SD change is justified. Focus is disabled because the source has no spacing schedule; the 1.5 m production MFD remains metadata. L4 remains unresolved; nearby catalog flints do not meet the coordinate guard.

## Catalog integration — 2026-10-17

This section records the current catalog decisions. Earlier stages below retain the extraction history and may describe superseded rim or glass choices.

- **Optical-rim source:** JP S51-62037 A Example 1 / FIG. 1 (local PDF page 3, 600 DPI). Retained the front three rims and reduced both rear-element surfaces from 14.2 to 11.4 mm to follow the small rear optical component. The publication scan has axial skew; the finite rim estimate is not a production diameter.
- **Glass:** Three of four records now use qualified spectral proxies: K-LaK11 for L1/L2 and SF1 for L3. The L1/L2 patent Abbe value 58.5 is retained despite the proxy value near 57.3. L4 at 1.73300/28.2 remains unresolved; SF3 at 1.74000 is incompatible.
- **Metadata and V2:** Canonicalized the patent assignee to Minolta Camera Co., Ltd.; the printed Kabushiki Kaisha spelling is preserved in historical evidence. Minolta SR and 135 format were already present. Replaced the old infinity-distance sentinel with the production 1.5 m minimum-distance metadata; absent V2 gaps still disable finite-focus travel.


## Job and reference versions

Fixed original card: JPS5162037A / Minolta 135mm F2.8 MD Tele Rokkor / Example 1 /
Minolta135mmf28MDTeleRokkor. Original PDF and card are retained byte-for-byte.
Current main was freshly verified on 2026-10-02 at commit 66b394809241620190908def6caf9a81d3f3a6f5.
Fresh GitHub compare returned identical to batch5; a newly fetched complete recursive Git tree independently matched
26 controlling reference files and 218 read-only engine dependencies. Manifest lists their actual hashes.
No Git/repository writes, metadata generation, corpus sweep, build, integration or publication occurred.
The available authorized output workspace is used; no nonexistent mounts are assumed.

## Extraction and conventions

Text extraction was attempted first and returned three blank page separators. Original PDF pages were rendered at 220 dpi,
then selected table and Figure 1 at 450 dpi. The exact Example 1 table on PDF page 3 / printed 249 is the sole numerical source.
Example 2 has a handwritten radius alteration, which does not belong to Example 1 and is not imported here.
Eight positive radii, seven finite axial spacings, four air-separated elements, and three distinct nd/νd pairs are present.
The patent text (PDF pages 1–2) explicitly defines indices at the d line. No numerical SDs, physical stop, final image
distance, rear plates, aspheres or finite-focus spacings are published in the selected example.
A zero last propagation in the raw numerical branch means calculation terminates at the last vertex; it is not a claim
that the source gives zero BFD. Evidence preserves the unpublished d8 as null.

## Model transformations

Uniform scale 1.35 is explicitly the selected 135 mm production correlation divided by the patent normalization 100.
It is not a refit to force computed EFL to135. The final image plane will be the calculated Gaussian infinity BFD,
because the patent omits a rear image distance. No plate or published source plane is omitted.
Stage 2 must add one explicitly inferred iris halfway in the d6 airspace and calibrate its radius by exact on-axis
tracing to the stated f/2.8. This is an illustrative stop model; the patent drawing gives no physical stop coordinate.
SDs must be identified as modeled and checked against spherical rim, edge, gap, and finite off-axis ray geometry.
NO_INTERNAL_RECONSTRUCTION: empty variable gaps and the existing 1e15 infinity-only sentinel. No actual MFD is inferred.

## Glass review

The source has nd/νd only. Relevant catalog candidates and actual coverage are preserved in evidence.glassEvidence.
Coordinates are audited without assuming a supplier from the lens brand. No Sellmeier match, nC/nF/ng/dPgF or APO
performance is asserted unless backed by direct usable evidence. Conservative Unmatched labels preserve native coordinates.

## Numerical and geometry results

Source model: EFL 99.977132372844; BFD 41.700776269784; first-to-last vertex 55.356;
first vertex to computed Gaussian image 97.056776269784, all in normalized f=100 length units.
Sequential reduced-angle basis tracing and separately multiplied ABCD matrices agree below 1e-10.
TL/EFL 0.970789759280 is less than 1 and supports telephoto architecture at infinity. BFD/EFL 0.417103144290.
All published claim inequalities are evaluated from the unchanged source; none require a source correction.
Per-surface Petzval contributions and standalone thick-element focal lengths are retained in results.
Stage 1 has no application model or geometry pass. Stage 2 must execute those gates against the final parsed data bytes.

## Correction and discrepancy register

No selected source value was changed. Computed EFL differs from printed normalized100 by −0.022867627156,
within half the printed last unit; the exact residual remains in results.comparisons.
The production correlation is not manufacturer-confirmed. No alternative patent/example is substituted.
The absence of focus, iris and SD data is an explicit scope/modeling limitation, not a hidden diagnostic exception.
Current project references prescribe rearPlates for published rear plates, while the generic chat prompt describes
omission/air-equivalent conversion; this difference is not applicable because this source contains no rear plate.

## Independent review

Stages 1–3 are author verification only. Reused source-independent parser/matrix/spherical-ray utilities were inspected
and adapted from a prior portable verifier; no prior per-lens optical inputs, results, exceptions or approval is inherited.
A fresh Stage 4 auditor must extract from original source before reading this candidate and freeze its own baseline.

## Quantitative claim map

Stage 1 has no companion analysis. Source EFL/BFD/track/principal planes/element powers/Petzval map to sourceModel;
claim inequalities map to facts.conditions; raw EFL comparison maps to comparisons.source_EFL.
All lengths are identified by branch/reference plane; source normalization is separate from marketed 135 mm.

## Gate disposition

Stage 1 gate is earned only by executed checks and clean package replay, recorded in manifest and external package receipt.
No earlier stage sentence substitutes for the actual final hashes. No independent audit has yet occurred.

## Pending integration

Full project typecheck/corpus tests/metadata/build are not run by these per-lens stages. Available targeted real checks
will be recorded separately from portable CHAT_PREFLIGHT. Integration remains INTEGRATION_PENDING.

## Stage 2 construction and targeted execution

The final data contains four elements, eight refracting surfaces, one inferred STO, and no aspheres or moving gaps.
All original source R/d/nd values survive the 1.35 scale and d6 split. Gaussian image distance was computed because no
source rear image distance exists. EFL 134.969128703339mm; BFD 56.296047964209mm; vertex track 74.7306mm;
first-vertex-to-image track 131.026647964209mm. Physical iris radius 12.997804621459mm is f/2.8 calibration.
Exact first-order/power/Petzval values come from the final literal payload. The strict parser rejects duplicate keys,
spreads, expressions, computed properties, functions, nonfinite numbers, malformed arrays and trailing tokens.
Source-mapping mutations of a radius and an index are rejected.

Spherical rim/edge/shared-band checks pass. Minimum edge thickness 2.474917243833mm and maximum actual rim slope
56.991303266986 degrees. Thirty-nine exact three-dimensional sphere/Snell probes cover 0, 5.46 and 9.1 degree fields,
including 18 skew probes. Edge and iris vignetting are preserved. Finite sampling is not a continuous-field proof.
Actual pinned buildLens/validateLensData and TypeScript 5.9.3 pass; Prettier 3.8.1 passes. Production render diagnostics
show 0 mm trim. All four glass labels remain intentionally unresolved in the real runtime and use the Abbe approximation.

### Fresh single-probe diagnostic resolution

The raw full-field 9.1 degree negative rim ray returns failed/noBracket with zero hits in the actual default sequential
tracer. It is retained in results.comparisons and evidence; it is not rewritten as an ordinary successful trace.
Fresh diagnosis on these exact candidate bytes independently finds the mathematical front-sphere intersection at
rho 34.135754832538mm and z 10.971323600788mm, outside the declared 26.5 mm radius and the physical cap maximum
z 6.335449002025mm. The actual engine's expanded-bound single-surface intersection reproduces that point exactly.
The ordinary sequential bound ends at z 10.13175mm. Thus the probe misses the physical front aperture before it could
become a transmitted ray. The other 38 engine probes are okay or explicitly clipped. This bounded, candidate-specific
physical-miss proof resolves the raw diagnostic; no inherited exception, SD expansion, layout masking or engine edit
is used. The independent auditor must verify this reasoning afresh.

Full numerical inputs, parsed data fingerprints, saved raw results and exact targeted harness source are in evidence.
Portable replay checks saved engine-evidence binding and its own geometry; it does not pretend to rerun the project.

## Stage 3 claim and citation review

The Stage 2 manifest/checkpoint, original hashes and data/evidence/verifier/results bytes were checked before writing.
An entry replay exactly equaled Stage 2 results. Data, evidence and verifier are unchanged during analysis authoring.

Claim map (all model computations govern the data fingerprint recorded by Stage 2):
- Identification metadata → evidence.patentMetadata plus unchanged original cover.
- Manufacturer 4/4, aperture, field, MFD, mount/format → evidence.productCorrelation and MFR1/MFR2 page locators.
- Architecture EFL/BFD/vertex track/total track/TL-EFL/principal planes → results.implementedModel.
- Source EFL and unchanged scaling residual → results.sourceModel and comparisons.source_EFL.
- Element signed focal lengths and power signs → implementedModel.elements; glass coordinates/names → parsed data.
- Glass comparator coordinates/residuals → evidence.glassEvidence.entries and facts.glassResiduals.
- Petzval sum and L3 rear contribution → implementedModel.petzvalSum and petzval[label=6].
- Physical iris/entrance-pupil calibration and paraxial f-number → facts.pupil.
- Exact field samples and aperture feasibility → facts.forwardBundles/exactSkew/geometry; finite scope disclosed.
- Six condition statements → facts.conditions with C1a/C1b/C2a/C2b/C2c/C3.
- No finite focus, sentinel semantics, absent aspheres/plates → evidence.focus plus final var/asph/closeFocusM.

Manual prose/citation review: all sections use third-person technical language; standalone element powers are not
misrepresented as in-situ additive power; no supplier, spectral, production-attribution or unmodeled-focus claim is
asserted. All optical quantitative claims are mapped to executed source or final-model calculations. Primary source
citations include usable URLs and original page/figure locators. Catalog matches remain comparator evidence only.

## Stage 4 independent audit — final controlling disposition

The preceding Stage 1–3 sections are retained as dated author history. This section and the final manifest bind the
independent review to the final files. PASS A was completed before candidate/prior-dossier contents were opened;
only filenames had appeared in the source worker's directory inventory. The original patent's three pages were
independently rendered at 300 dpi; the selected table/claims were enlarged and every radius, spacing, material pair,
condition and index convention was re-entered. Fresh reduced-angle and independently accumulated ABCD calculations
were executed. The independent manufacturer and six-vendor research did not start from candidate glass labels.

Frozen fingerprint: `2ce697b96ad9e2b4ea0d877e7bef1ffdbd1a01960c99755049303f33db5e2f31`.
The freeze inventory, exposure statement, exact original independent inputs/code/results and findings are preserved
under evidence.independentPass, with baseline numerical results in results.independentBaseline. The baseline has not
been rewritten during reconciliation. Original candidate data hash:
`4495bdd5f0b0c8aa31d32c955157afc4b71823cc8ada8606edba79e11a320dbe`.
Original candidate archive hash:
`ff0813f32be7ec1894b43caa83fe86255be9ea7a0ad4578cf739963615b34d55`.

### Source/model reconciliation and correction register

The fresh extraction agrees with all eight original radii, seven spacings, four material pairs, d-line convention,
f=100 normalization, shape/power sequence and selected-example conditions. No patent value, sign or precision was
changed. The original raw d8 remains null; the computed rear image distance is a model transformation. The selected
production association remains a convergent correlation rather than manufacturer-confirmed patent identity.

S4-C1 — The candidate listed f/22 but inherited maxFstop=16. Inspection of the actual DiagramControls implementation
showed that it filters fstopSeries against L.maxFstop, hiding the existing f/22 choice. Both independently checked
manufacturer brochures publish the f/22 limit (MFR1 printed27 and MFR2 printed36). The final data therefore declares
maxFstop:22. This is the only data-value change. It restores a source-backed control; no optical surface, material,
stop, SD, scale, focus variable or image distance changed. Because the bytes changed, type/schema/default-ray/render/
glass checks were rerun and earlier author approvals were not silently transferred.

S4-C2 — Prior metadata and embedded probe scripts contained machine-local engine/screenshot/virtual paths. They are
replaced by source locators, root-relative identifiers and a supplied projectRoot argument. The final Python verifier
contains both the independent baseline math and the fresh exact-ray/analytic geometry code. The exact real-project
probe is retained in evidence.runtimeVerification.harnesses and can be emitted and run by the portable verifier.
No hidden helper script, execution directory or former transcript is a dependency.

S4-C3 — The analysis now separates its expanded verified sampling, raw trace diagnostics and application-derived
field from the patent field. The optical calculations remain numerically unchanged. All added numerical claims map
to results.facts.stage4 and the freshly bound actual execution record in evidence.runtimeVerification.

### Fresh exact geometry, rays, controls and real-project checks

An independent quadratic spherical-cap intersection/vector Snell implementation generated735 samples: all seven
f-stop settings, fields0°,±2.73°,±5.46°,±9.1°, with nine meridional and six skew samples per combination.
The actual pinned engine and independent path agree at common hits within9.9681e-10mm. There are711 transmitted
samples and24 physical clips/misses. Twenty-two receive explicit engine clipping; two symmetric wide-open full-field
rim samples retain raw failed/noBracket diagnostics. For each, both the fresh analytic front-sphere intersection and
an expanded-bound actual engine intersection lie at radius34.13575483245mm, beyond the26.5mm declared aperture and
beyond the actual front cap's maximum z6.33544900202mm. Those mathematical continuations do not intersect transmitted
glass. These two specific, retained diagnostics have a positive physical-miss explanation; no global exception, rim
expansion, layout masking, engine change or unexplained failure is hidden.

The actual application helper/default fractions were checked for231 rays across seven apertures and focus values
0,0.5,1:222 ordinary traces and9 explicit clips. Public ray wrappers remain finite. Independent intersections agree
within9.0558e-10mm. All three focus positions have identical axial geometry and image position, independently checking
the infinity-only sentinel. The application's derived default off-axis field10.42313227718° exceeds the patent's
9.1° half-field; this extra application sampling is not a sourced field or a performance claim.

Fresh actual buildLens/validateLensData, TypeScript5.9.3 and Prettier3.8.1 pass. Actual glass resolution remains
unresolved for all four deliberately Unmatched labels, preserving the Abbe approximation. Production element-render
diagnostics at all three focus-control positions show0mm trim. Analytic monotonic spherical-cap endpoint checks
independently establish the continuous shared-band edge/gap extrema for this all-positive-radius model: minimum
edge thickness2.47491724383mm, maximum rim slope56.99130326699°, and positive iris clearance3.47660023148mm from
the entire preceding spherical rim. Ray clearance is still finite-sampling evidence, not a continuous-field proof.

All218 prior pinned engine dependencies rehashed successfully. A fresh relative-import closure from the exact harness
modules additionally verified146 project files, including the actual default-ray UI helper and TypeScript hook,
against the pinned recursive Git tree; no mismatch or unresolved import occurred. The merged dependency list is
retained for optional project replay. No repository files, Git state, metadata, corpus or build artifacts were written.

### Manufacturer/catalog evidence and limitations

Both manufacturer PDFs were independently retrieved and their hashes matched the author sources. The named XD-11
brochure's four-element135mm lens section,35mm/Minolta SLR bayonet specifications, the SLR-system guide's lens/spec
pages and its back-cover code were visually checked. Exact production start and direct patent-to-product confirmation
remain unestablished. No focus law follows from the marketed1.5m MFD.

The independent six-vendor baseline supports retaining all native coordinates as Unmatched. L1/L2's near-index
lanthanum-crown candidates differ by approximately1.2 Abbe units; L3 has multiple SF1-family comparators with small
but explicit νd residuals; no checked candidate satisfies both runtime windows for L4. Loose runtime matching is
not evidence of melt identity. No vendor line indices or anomalous-dispersion/APO claim was inserted.

A supplementary attempt to repeat hash retrieval of three author-cited catalog variants had an unestablished polling
outcome after an authorization check and was not restarted. It is not relied upon for readiness. The already retrieved,
hashed and frozen independent OHARA/HOYA/Hikari/Sumita/Schott/CDGM evidence remains the source-first basis; original
author variant citations and their previously recorded provenance remain distinguishable.

### Portable commands and final approval scope

Normal offline reproduction, writing outside the dossier:

    python Minolta135mmf28MDTeleRokkor.verify.py --package-dir <extracted-dossier> --output <external-results.json>

Optional read-only real-project reproduction against the declared pinned dependency bytes:

    python Minolta135mmf28MDTeleRokkor.verify.py --package-dir <extracted-dossier> --project-root <projectRoot> --output <external-results.json>

Both modes were executed successfully before final packaging. The optional mode calls the pinned Node hook and
included harness directly; it never invokes npm lifecycle hooks. The final archive is approved only after exact
membership/hash validation, safe clean extraction, unchanged-original checks and an external replay match. The final
manifest records that earned pre-integration gate. Full-project typecheck/corpus/metadata/build remain NOT_RUN at
integration scope. Integration status remains INTEGRATION_PENDING.
