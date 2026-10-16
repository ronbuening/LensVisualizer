# Lens Patent - Tamron B00318-270 mm - 4 Audit

## Job, references, and disposition

- Fixed source: JP2010044103A, sole numerical embodiment / Figure1. Output stem: TamronB00318270mmf3563DiIIVC.
- Primary PDF and original extended research card are preserved unchanged. The exact selection is the sole disclosed embodiment; no source/example substitution occurred.
- Current project reference pin: 709dda72a0ddead8ee77b8306347429031f8b379. It supersedes the historical53470da5 handoff pin. All 250 reference files rehashed against the supplied verified manifest. No runtime was used before the independent freeze; the later targeted execution is documented below.
- Baseline frozen at 2026-10-05T01:00:54Z, fingerprint 644bec4aee49648936395e667c66306faa3b29033d03db69d8ebfd27706e89c6.
- Final disposition: ready for batch, subject to the declared pre-integration scope. Integration closed 2026-10-14 (see the last section).

## Pass A independence and exposure

The original card was read in full first. It contains transcription, geometry/correlation assertions, source caveats and references to earlier reviews. That exposure is unavoidable and disclosed; complete source blindness is not claimed. Before freeze, no candidate data/analysis, old audit/results, author reasoning, qualifications, old lens conversation, or sibling work was opened. Inputs were freshly entered after viewing the rendered original table, equation, coefficient blocks and figures. The Python implementation is fresh, using no project calculation code or prior verifier. The frozen baseline remains unchanged after candidate disclosure. It is retained as frozen evidence and an exact embedded verifier in the consolidated dossier; the source-only archive identity remains recorded.

## Extraction and conventions

PDF1 is the DPMA English PAJ wrapper. Printed pageN is PDFN+1. PDF7/printed6 paragraph0019 contains35 rows. PDF7-8 paragraph0020 supplies three stations and four variable gaps. PDF8 paragraphs0021-22 supplies the sag equation and three aspheres. PDF8 paragraph0023 supplies six group focal lengths. PDF9-11 contains Figures1-10 and the image height14.5 mm/curve definitions.

All 35 radii, distances, indices and Abbe numbers were independently entered from the rendered table. Surface15 is the flat air stop plane indicated by Figure1, not an optical zero-radius surface. Row35 has a native blank index; exit air is an explicit interpretation. No rear plate is printed or inserted. A=1 in the source denominator maps to conventional K=0; coefficient powers4,6,8,10 and all signs are preserved. No source geometry, scale or glass coordinate was corrected.

The source has21 non-air slices and 13 air-separated components. Manufacturer brochure PDF3 identifies18 glass lenses/13 groups, three hybrid positions and two LD positions. Three0.2 mm aspheric layers at 6,24,28 account for the difference between21 medium slices and 18 glass substrates. The French sheet's front orange singleton has no orange legend; its AD designation is not independently endorsed here. Native medium boundaries remain present.

## Independent first-order and movement results

Sequential height/reduced-angle tracing and independently assembled ABCD matrices agree within2.85e-14. Exact analytic-sag/Snell rays converge to the paraxial BFD to far better than1e-6 mm. Analytic zero-thickness biconvex reference checks pass.

| Native station | EFL mm | BFD mm | Published BF minus computed mm | First vertex to image mm |
|---|---:|---:|---:|---:|
| Wide |18.400111742|38.685126365|-0.000126365|145.4065|
| Middle |71.098274203|75.561807036|+0.000192964|196.4135|
| Tele |264.214146002|97.162977023|+0.000022977|235.4165|

All six group focal lengths reproduce the source to 0.0005 mm. The main groups are+108.563017430,-13.813012968,+45.229679899,+48.814590499 mm; LG3 front/rear are+26.821519707/-40.500029093 mm. Standalone slices, cemented/functional components and in-situ magnifications are separately reported and must not be conflated. Per-surface Petzval sum is+0.001845469941 mm^-1.

At fixed image plane all four group fronts move objectward from wide to tele: LG1-90.010 mm, LG2-23.606 mm, LG3-53.090 mm and LG4-58.478 mm. Three source stations do not prove a complete production motion curve. Tele TL/EFL=0.891006419 supports a telephoto ratio only at that station. Wide BFD/EFL>1 supports wide retrofocus behavior. Raw values and reference planes are in results.

The paragraph0020 last-digit comparisons use0.0005 mm tolerance. Middle EFL residual-0.000725797 mm and tele EFL residual+0.004146002 mm remain FAIL. Sensitivity to half-last-digit perturbations of source R/d/nd produces linearized EFL bounds0.003523/0.023596/0.150629 mm. This supports a rounding-scale interpretation, not a rigorous interval proof and not an optimized correction. The failed exact printed comparisons are retained.

## Source discrepancies and figure-state identification

1. Paragraph0024 f1/ft prints0.4030; the primary prescription gives0.410890254. f3/ft prints0.1737; the primary prescription gives0.171185686. These remain raw FAIL comparisons. The printed f2 ratio0.052 agrees at its stated precision. All three claimed inequality ranges hold. No waiver or primary-row change was applied.
2. Paragraph0026 explicitly calls Figure1 a telephoto section. Independently measured image-axis vertices contradict that caption. A fit using the source wide station gives1.025 px RMS residual, versus 98.820 px middle and 142.729 px tele. Wide fit scale is8.105990 px/mm. The evidence records the exact300-dpi crop command and seven pixel coordinates. Figure1 should be treated as wide-like geometry with a conflicting caption; never scale it using tele gaps solely from the caption. This is an inference from the unaltered source, not a rewritten caption or diagram.
3. Headline full fields76.5/23.1/6.3degrees differ from twice the coma100% incident angles39.51/11.22/3.093degrees. Independent2atan(14.5/f) evaluates76.479293/23.053768/6.282550degrees and rounds to all headline fields. Thus an ideal-projection field versus distortion-aware incident field distinction is supported. It is an inference; both published sets stay preserved.
4. VC captions refer to shifting LG3; claims2 and paragraph0011 specifically say only the negative rear subgroup shifts. Values+0.07 mm wide and+/-0.47 mm tele are preserved without inventing a decenter implementation.
5. Manufacturer current page lists minimum F22; the2008 French brochure lists F22-F40 across the zoom. Keep these source wordings distinct.

## Apertures, geometry and exact rays

No source clear-aperture or iris-diameter table exists. Native Fno calibration gives paraxial stop radii8.029265/7.980054/8.026796 mm. These are inferred, so reproducing Fno with them is calibration, not independent validation. No source asphere rim departures are quoted at invented apertures. Pass B separately computes the candidate-edge values at explicitly inferred SDs.

Fresh exact meridional tracing uses analytic surface sag/slope, Newton intersection and vector Snell refraction. It checks all three native stations at axis, headline half-field and coma100% angle, each with stop fractions-1,-0.8,0,+0.8,+1. All 15 axial native rays pass. All six nonzero-field chief rays pass; at the coma angles they land at 14.501746/14.504735/14.498442 mm. Corresponding d-line distortion estimates versus f*tan(theta) are-4.425741%,+2.843980%,+1.551381%, qualitatively consistent with Figures2/4/6.

Eleven direct off-axis rim-aim trials fail with non-forward intersections. Their raw failures and separate40-step chief-to-rim continuation failures are retained. This is not an all-pupil transmission certification: physical rim apertures are unpublished, and the extended sag surfaces can cross outside usable glass. Equal-height material/gap limits are recorded separately, including film6-7 first zero clearance14.832571 mm and film24-25 at 12.977813 mm. These are mathematical bounds, not selected SDs. These source-only checks did not certify candidate apertures. The actual candidate geometry and physical ray checks are addressed in Pass B below.

## Focus/conjugate diagnostics

The patent specifies LG2 objectward focusing but no finite object distances, focus spacings or law. Focus status stays NO_INTERNAL_RECONSTRUCTION. Manufacturer0.49m is rechecked; treating it as object-to-image distance is explicitly a convention, not a patent-provided reference-plane definition.

A separate diagnostic moves only rows6-14 objectward, reducing D5 and increasing D14 equally. At the three native zoom stations, paraxial solutions for490 mm object-to-image distance are0.872152/2.453159/9.874783 mm travel. Their magnifications are-0.047999/-0.156245/-0.275333. Tele's magnitude is not the manufacturer's1/3.5 exactly. All 15 exact axial finite diagnostic rays intersect the physical surfaces, but marginal image residual reaches0.113490 mm at tele; a paraxial solution is not exact stigmatic focus. No authored focus schedule, finiteConjugates certificate or production-mechanism equivalence is claimed. Fixed-native-spacing conjugates at 1000 and 2000 mm from the first vertex are also retained.

## Glass-coordinate review

Fresh primary-source checks include OHARA live tables, HOYA20260707 current+obsolete AGF, HIKARI catalog, SCHOTT2025 tables, CDGM H-FK61/H-FK61B and SUMITA K-FK5. Relevant rows, source hashes, locators and candidate residuals are embedded in evidence and recomputed in results. Coverage is not an exhaustive six-vendor global fit.

Exact or close candidates include multiple vendors for the same coordinates. For example1.49700/81.61 matches HOYA FCD1, SCHOTT N-PK52A and CDGM H-FK61/H-FK61B, while current OHARA S-FPL51 has81.54. Current S-LAH66N has49.55, not the native49.60. Supplier/melt identity remains unknown even for exact pairs; OHARA S-/L- prefixes are not interchangeable. The two hybrid-layer coordinates1.51460/49.96 and 1.53610/41.20 remain unmatched in the checked set. No catalog spectral values are presented as measured patent-glass data. No g-line, APO, partial-dispersion or MTF accuracy claim is made.

## Quantitative-claim map

- First order, group powers, principal planes, pupils: results.states and sourceModel; raw tables0018-0023.
- Movement and zoom ratio: sourceModel.movementImageFixed and facts.zoomRatio, image-fixed reference.
- Source conditions: sourceModel.conditions and rawPrescription.conditions.
- Figure-state contradiction: sourceModel.figure1AxialFits, evidence pixel coordinates and originalPDF9.
- Fields/distortion: sourceModel.fieldDefinitionChecks and states.exactRays; Figures2-7.
- Geometry bounds/Petzval/components: sourceModel.geometryLimits/perSurfacePetzval/functionalComponents.
- Finite diagnostics: states.LG2FiniteFocusDiagnostic/fixedSpacingFiniteConjugates; no production assertion.
- Glass: evidence.glassEvidence.catalogChecks and sourceModel.glassCoordinateComparisons.

## Pass B candidate reconciliation and corrections

Candidate Stage3 archive SHA-256: b1179a6f5db11086ba07e552dd96f2a0e12f97b87af3fe772325a636af7dc084. Candidate data SHA-256:7777fd0639280620069a8f051fe9a052d288f09115d1a3f2108ba7a2aaa2d955. Candidate analysis SHA-256:6f19a8b5eea43631e683b1965e36bb84be9d4bc93692fa1a63e037dc58a47a8e. Each was verified before opening. Original candidate and frozen baseline remain separate historical revisions; this final revision does not borrow an old byte-bound approval.

All 35 source rows, all 21 media and their index/Abbe pairs, three complete aspheres, stop mapping, all 12 variable gap values, source Fno/zoom coordinates, group spans, source conditions and counts reconcile with the frozen independent extraction. No R/d/nd/vd/asphere/SD/zoom/aperture values changed. Continuous piecewise-linear zoom remains available. No geometry repair, new exception or new focus reconstruction was introduced.

| Correction | Previous wording | Final treatment and effect |
|---|---|---|
| Glass-label provenance | Substrate labels called their identifiers source d-line codes | Most now say derived d-line coordinate codes; the patent prints no codes. Optical values unchanged. |
| Surface25 proxy |772496 called a source code |Explicit E-LASF016 coordinate-compatible spectral proxy.772496 is the runtime proxy entry's key for nd1.772499; patent1.77250 would conventionally round773496. The exact prior proxy and every computed spectral channel remain unchanged. |
| M11 shape narrative |Called the19-20 singleton a meniscus despite a biconvex heading |States biconvex numerical signs and separates broad ¶0015 prose from the actual radii. No source edit. |
| Film chemistry |Resin layer/material wording |Hybrid layer/material wording; composite construction supported but chemistry not identified. |
| Dispersion formula type |Every catalog proxy called Sellmeier |Catalog-dispersion wording. HIKARI E-LASF016 uses a polynomial; J-SF03/J-LASF010 use power series. |
| Field definition |General warning only |Explicit headline ideal-projection derivation and actual coma incident-angle comparison are supplied, with full/half distinctions. |
| UI probe scope |Default-like launch reconstruction only |Actual released UI geometry helper and public traceRay executed and independently checked. |

The full official Tamron B003 page was inspected after freeze and directly supports three composite aspheres, two LD lenses and one AD lens. This does not identify a catalog supplier, actual melt or measured partial dispersion. The frozen observation that the French brochure does not label its orange swatch remains true.

## Current709 runtime, geometry, physical rays and rendering

The unchanged released validateLensData/buildLens and their real imports execute at 709dda72. All imported module hashes are checked. The original candidate native replay exactly reproduces the author's native JSON. The final label-only revision retains exact dispersion names, quality flags and C/d/F/g output channels.

The source-f-number inferred zoom iris uses current zoomApertureModel=from-nominal-fno. Runtime ray calibration gives8.095796112/8.091693610/8.100251502 mm stop radii, independently reproduced by the portable exact-angle tracer. These differ from the Pass A paraxial calibration because the conventions differ. Neither is a published physical iris schedule. The current permitted model convention remains explicitly disclosed.

Five executed zoom positions are0,0.25,0.5,0.75,1. Both repeated focus slots retain the infinity gaps. The intermediate image-plane minus paraxial-focus distances are+6.277951 mm at 0.25 and-11.054801 mm at 0.75. These are retained failures of parfocal behavior, not repaired or presented as a recovered cam. Only published source stations are approximately focused; near-focus readouts are not certified.

The actual validator accepts the final candidate. Independent and native checks cover material thickness, full aspheric sag, rim slope, conic domain, shared-band air-gap intrusion and source/candidate equality. An additional independent1001-sample radial check covers every optical medium. The three hybrid-film minima remain0.021204/0.058138/0.200000 mm. Native render diagnostics require zero hidden trim at all five states; all 21 native shapes are finite. Wide/tele SVGs generated by the real shape builder were rendered with PyMuPDF and visually inspected against source topology. This is native-shape verification, not full React application/UI screenshot coverage.

Exact14.5 mm image-height chiefs transmit at all five states. At source stations the native solved angles are39.507026/11.216637/3.093334degrees. Physical stop-aimed source/core meridional rays and eight-azimuth0.75-stop-radius core skew rays transmit in the stated sampling. Outer-field and unresolved aim trials remain recorded; no full-pupil throughput or continuum guarantee is claimed.

For current UI launch behavior, offAxisRayUtils.ts was fetched as exact709dda72 blob d1b0023bca886250173c91f3141dc743db56444e (SHA-256 d866da012496dc6c8313f0c11034239900f6d5852ceaf537534893f753bd952f). Its unchanged bytes are embedded in native.mjs and executed with the released optical modules. The matching useOffAxisRays callsite was inspected at blob 0e774948623e23516d84674e526fd2229fcb0122. This includes the actual UI safe-zone field selection, not only an approximate fraction of the analysis field.

Twenty-four of 25 default UI fan rays pass. The tele+0.75 sample at 2.780606degrees retains native noBracket before the first recorded physical hit. Independent analytic-sag/vector-Snell intersection places the ray on surface1 at 33.912987817 mm radius, beyond the30.5 mm aperture. The earliest physical obstruction is therefore entrance vignetting, not a cemented-surface error. The native ghost continuation is not physical transmitted light. No aperture was enlarged or engine fix borrowed to suppress this limitation.

## Final quantitative claim map and semantic review

- Analysis identification/counts/special elements: unchanged source table and manufacturer page/brochure; production correlation caveat retained.
- Element/component/group powers: fresh calculations in sourceModel and independentBaseline.standaloneMediaChecks; all 21 stored fl values independently checked.
- Glass table and proxy terminology: final native.dispersion plus exact original/final dispersion fingerprint comparison; vendor identity not inferred.
- Zoom/finite focus section: implementedModel states, finiteFixedOpticsDiagnostic and repeated var vectors; no near reconstruction.
- Asphere coefficients/departures/film edges: source equality, actual-SD portable geometry and independentBaseline.independentAsphereRims/independentMaterialEdges.
- Source conditions/figure/field distinctions: frozen source baseline, figure axial fits and fieldDefinitionChecks; raw failed comparisons preserved.
- Actual UI clipping: native.states.currentUI and independentBaseline.currentUIIndependentPhysicalChecks.
- Overall prose: manual review corrected the M11 meniscus statement, unsupported material-chemistry wording and uniform-Sellmeier terminology. Numerical string matching was not treated as sufficient semantic review.

## Final gate, portable replay and pending integration

All applicable chat construction, analysis and independent Stage4 checks pass for the exact final hashes listed in the manifest. Source printed-summary failures, source-precision residuals, figure-caption contradiction, interpolation defocus and physical entrance vignette remain explicitly recorded. These supported dispositions are not fictitious raw numerical matches or general waivers.

The package contains unchanged original PDF/card, clean root-level data/analysis, consolidated evidence/verifier/results/audit/manifest, the native verifier/results and two unchanged manufacturer sources:13 files. The frozen independent inputs/code are contained in evidence/verify.py; fresh replayed baseline results are retained in independentBaseline. No prior calculated answers are substituted for fresh numerical inputs.

Portable command: python TamronB00318270mmf3563DiIIVC.verify.py --package-dir . --output /absolute/path/outside/package/replay.json

Native replay adds --runtime-root pointing to the identified exact current-main shared source snapshot and requires Node24 with registerHooks/stripTypeScriptTypes. The supplementary UI helper is already embedded, so no network retrieval or unrecorded lens input is required. Full package membership/SHA checks and clean extracted portable/native replays are required before release; the manifest records the completed result.

Static TypeScript compilation, full lint/format/corpus/build/metadata/SEO checks and live React/browser presentation remain NOT_RUN at integration scope.

Ready for batch; integration closed 2026-10-14 (next section).

## 2026-10-14 — Deployment validation and wording pass

Source re-read: all 35 rows of ¶0019 (R, d, nd, νd), the 4 variable gaps at 3 zoom states (¶0020) and 3 aspheres × 4 coefficients (¶0021–0022) were checked against the rendered page images (printed pages 6–7). No mismatches. The patent's A = 1.0 maps to K = 0; the stop is the flat surface 15.

Patent vs model: EFL 18.40/71.10/264.21 vs 18.4001/71.0983/264.2141 mm; BF 38.685/75.562/97.163 vs paraxial 38.6851/75.5618/97.1630 mm; group focal lengths f1/f2/f3/f4/f3a/f3b 108.563/−13.813/45.230/48.815/26.822/−40.500 reproduced exactly. The patent's F/3.50/5.24/6.32 are matched by the f-number calibration with stop radii 8.096/8.092/8.100 mm (nearly one fixed iris). The corner chief ray reaches 14.5 mm at 39.51°/11.22°/3.09°, matching the coma-figure angles. Image-circle and field-coverage audits pass at all stations; clearance shows no axial clipping or chief-ray blocking.

Maker comparison: Tamron specifies 18 elements in 13 groups with three hybrid aspheres, two LD and one AD elements. The brochure construction diagram marks the hybrids at the prescription's resin positions (surfaces 6, 24, 28), LD at the two 497816 positives (L2, L11) and AD at the 618634 lens (L3). Figure 1's caption says telephoto but its spacings match the wide column.

Fields changed: name → "TAMRON AF 18-270mm f/3.5-6.3 Di II VC LD Aspherical [IF] MACRO (B003)"; subtitle → "JP 2010-044103 A, sole embodiment — B003 production correlation"; specs added; elements renamed M1–M21 → L1–L18 with resin layers L4r/L13r/L15r and substrates L4g/L13g/L15g, diagramLabel added, labels "Element N", per-element roles, class-style glass strings (resolved catalog glass unchanged for every element), apd "inferred" with notes on L2, L11 (LD) and L3 (AD); zoomLabels → 18 mm / 270 mm; focusDescription and header rewritten in plain terms; analysis reworded and the verification section replaced by "Model Scope and Limitations".

Zoom stations: linear interpolation between the three printed states left up to −13.5 mm of paraxial defocus (near zoomT 0.85). Ten solved stations were added (13 in all; printed states at indices 0, 6 and 12 in publishedStations, numerically unchanged): LG1, LG3 and LG4 follow a quadratic in log focal length through their printed positions, LG2 is solved for paraxial focus on the fixed image plane, at focal lengths spaced evenly in log f within each interval. Gaps stay positive; worst remaining defocus is 0.92 mm near 240 mm (0.86 mm on a 0.05 zoomT grid). Solved-station f-numbers (3.72–6.28) are those of the near-constant iris. audit:surface reports no errors.

Open: none.


## 2026-10-14 — Patent-rim, dispersion and metadata audit

Source: Figure 1, PDF page 9 (printed page 8); sole embodiment.

No SD, mount or format correction is justified. The wide-like diagram was inspected at 600 dpi; its telephoto caption remains contradictory, as previously documented. Optical rims agree with the existing front/variator/relay proportions; hatched resin layers and leader lines are excluded from envelope measurements.

All eighteen glass substrates already reach coordinate-compatible catalog dispersion. Three resin bodies (L4r/L13r/L15r, two distinct nd/νd coordinates) have no defensible catalog curve and stay unresolved. The official Tamron B003 archive confirms Canon EF and Nikon F versions, APS-C coverage and the full AF / Di II / VC / LD / Aspherical / IF / MACRO designation. The display qualifier is capitalized to ASPHERICAL under the catalog naming convention; B003 remains distinguished from the later B008 PZD.


## 2026-10-14 — Local-viewer review

The local wide/tele diagrams were compared with JP2010044103A Figure 1 (PDF page 9, rotated), whose geometry matches the wide row despite its telephoto caption. The optical front outline now descends through 29.0/28.5/28.5 mm first-doublet rims and 27.0 mm next-singlet rims, replacing 30.5/30.0 mm. Axial aperture and APS-C image-corner chief coverage remain available throughout zoom. The existing cemented/hybrid component IDs now have drawing brackets as well as inspector membership.

All four groups move objectward overall during zoom; the solved LG2 path retains its roughly 1.2 mm imageward return near tele. Focus remains unavailable because no near spacings are printed. The two LD and one AD positions remain inferred from Tamron's production diagram, not patent-specified identities; the three resin layers retain Abbe fallback. The patents supply no resin trade name or spectral curve to backfill. Tamron Co., Ltd., Canon EF/Nikon F and APS-C metadata are correct.
