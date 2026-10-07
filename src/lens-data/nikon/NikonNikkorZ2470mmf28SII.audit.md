# NIKKOR Z 24-70mm f/2.8 S II: source-to-model audit

## Job and controlling references

- Fixed selection: WO2024214585A1, Example 2 / Table 2 / Figure 3.
- Authoritative original job-card stem: NikonNikkorZ2470mmf28SII.
- Original 85-page raster PDF SHA-256: c43b3c7becbf2292c17af13aa83da16c169c1942781694354ff0c9eef05b4d8f.
- CHAT-1.0 shared protocol, dossier contract, and four stage prompts, 2026-09-11.
- Project main freshly resolved to 3920234ab22de546bcaacaee275e35bd51eed0ca. Current data/analysis specs, template, defaults, taxonomy, types, project instructions and authoring/integration guides were retrieved read-only. Exact hashes are in the manifest.
- Work is a cloud-authored portable research package. No Git mutations, catalog integration, metadata generation, corpus sweeps or build were performed.

## Extraction and conventions

The author directly inspected the native raster original: title page 1; equation and conventions page 29; Example 2 text pages 32-34; Table 2 pages 34-36; Figure 3 page 69; conditional table pages 55-56 and definitions page 54. The full source rows and literal text are in evidence.json. The derivative lens-bench JSON was not used to seed the extraction or computations.

All 25 source rows survive: 24 refracting surfaces and one physical stop at source s14. Four cemented junctions are s4, s7, s12 and s20. Fourteen physical elements form ten air-separated components; seven named functional groups describe zoom/focus motion. These counts have distinct meanings.

Coordinates are mm, object to image, with positive radius center to the image side. The source indices are d-line 587.6 nm. Native asphere K belongs to sqrt(1-K*y^2/r^2); application k=K-1. Explicit A2=0 is preserved separately from unprinted trailing coefficients. Source blanks will become zero only in the implementation polynomial with disclosure. No scaling, added plate, glass substitution, source optimization or image-plane fitting is permitted.

The original final gap D25 is last glass to image: 11.855 / 22.479 / 29.495 mm at wide/middle/tele. The overview rounds the endpoint back focus to 11.85 / 29.50. No cover plate is prescribed. The source's optional general statement that a filter may exist behind a lens is not a numerical plate prescription.

## Numerical verification

The portable verifier implements reduced-angle ABCD multiplication and a separately coded sequential y/u recurrence. Their matrices agree across all six source states, with unit determinant. The calculations use the transcribed table, not any existing lens file. No stored calculated result is read as an input.

At infinity the native rounded table computes:

| State | EFL mm | Paraxial BFD mm | Authored final gap mm | First-vertex-to-image track mm |
|---|---:|---:|---:|---:|
| Wide | 24.699630 | 11.853844 | 11.855 | 154.461 |
| Middle | 49.999158 | 22.477725 | 22.479 | 154.461 |
| Tele | 67.879045 | 29.493697 | 29.495 | 154.469 |

The source prints only endpoint EFLs 24.70 and 67.87. It does not print the middle EFL or F-number. An application middle focal coordinate must be labeled calculated. Published endpoint f-number is 2.91, distinct from marketed f/2.8.

All seven group powers and all 14 standalone-in-air element focal lengths are recalculated, along with four cemented-component powers. Standalone element power is not its power at a cemented interface or an in-situ aberration allocation. Surface-by-surface Petzval terms use (nPrime-n)/(R*n*nPrime), including every glass/glass junction. The sum is 0.00208078017 mm^-1; its reciprocal is not the actual sagittal or tangential image-shell radius.

The two rear positive focusing groups G5/G6 move objectward. At wide, the source focus travel is -2.657 / -2.391 mm; at middle -7.545 / -6.414 mm; at tele -10.795 / -10.579 mm. Three resulting object conjugates are 164.990091 / 165.005252 / 164.978895 mm ahead of the first vertex. Their object-to-image distances are approximately 319.450091 / 319.465252 / 319.447895 mm. Thus the 165 mm reference is inferred as first-surface distance by consistent numerical evidence, not claimed to be explicitly defined in the printed table. It must not be set as closeFocusM=0.165 or confused with the product's varying MFD.

## Source discrepancies and resolution

1. Tele EFL 67.879045 differs from the source overview 67.87 by +0.009045 mm, outside the overview's half-last-digit alone. The first-order worst-case half-width from independently perturbing printed R/d/nd by half a last digit is 0.018591 mm. The raw mismatch remains in results.json; no radius, index or spacing is changed to force agreement.
2. Tele track 154.469 differs from printed TL154.46 by +0.009 mm. The summed half-last-digit spacing bound is 0.0125 mm. The seven-gap table also contains millimetric rounding nonconservation at focus. Source values are retained.
3. G4 computes -223.523271 mm against printed -223.50. This cancellation-sensitive subgroup deserves explicit input-rounding sensitivity in the final verifier. No correction is applied.
4. Native three-decimal condition values are retained separately from recomputation. Some differ by just over 0.0005 due to input rounding; no higher precision source assertion is manufactured.

## Glass review and spectral limits

Eleven distinct numeric nd/vd pairs were searched across the current project's six-vendor catalog as a discovery step. Primary checks then downloaded the official HOYA July 2026, OHARA July 2026 and SUMITA August 2026 AGF catalogs; read named rows in the Nikon/Hikari 2023 catalog; and checked SCHOTT N-SF66 and CDGM H-ZPK5 vendor material. Relevant rows, candidate residuals and byte/source identities are retained in evidence.json. Coverage is not claimed to be exhaustive across historical melts.

Several pairs have exact or near-exact public equivalents, often more than one. This does not prove the patent or production supplier. Numeric patent media remain authoritative; the application will use honest optical classes and will not import the third-party CODE V glass names, plate, cam, focus fitting, clear apertures or vignetting. OHARA L- and S-prefix alternatives remain distinct.

The conditional table adds genuine source spectral evidence for L10: native PgF-0.64435+0.00168*vd=0.030, rounded to three decimals. With vd20.88, the implied PgF is 0.6392716. The engine baseline is 0.6438-0.001682*vd, so the mapped dPgF is 0.03059176. That many digits reflects arithmetic, not source accuracy; source uncertainty is about +/-0.00051. No individual nC/nF/ng are supplied or invented. This single datum does not establish system-level APO performance.

## Modeling tasks before Stage 2 can pass

- Infer physical clear-aperture semi-diameters from Figure 3 and ray geometry. They are absent from the numerical table.
- Calibrate an explicitly inferred iris schedule to endpoint f/2.91; any middle f-number assumption remains labeled, because it is not printed.
- Check exact asphere sag geometry, edge thickness, rim slope, conic domain/policy, shared-band gaps and off-axis containment at six native and representative intermediate states.
- Preserve native zoom/focus spacing keyframes. Continuous interpolation is schematic, not an identified Nikon cam or a solved focus law.
- Read the final data file itself in the verifier and test malformed/mutated inputs.

## Independent review

Not yet performed. The author's separate formulas are construction verification only. Stage 4 requires a fresh source-first reviewer, a frozen pre-reconciliation baseline and independent code. No independence claim is made at Stage 1.

## Gate disposition and integration

Stage 1 extraction and first-order preflight are documented here. Readiness is assigned only by the accompanying checked manifest after final replay. All repository integration remains pending. Project build/typecheck/lint/corpus/render sweeps are not claimed.

## Stage 2: implemented model and construction gate

The final data file uses the root-level template import, literal-only LENS_DATA and satisfies LensDataInput. A strict JSON-subset TypeScript-envelope parser consumes the actual file. Duplicate keys, runtime expressions, non-finite tokens and trailing code are rejected. A changed prescription radius is deliberately detected. No stub typechecker is presented as real TypeScript validation.

The source's six spacing states are reproduced directly. A floating-point comparison tolerance of 1e-12 mm accommodates arithmetic interpolation at a literal endpoint; it is not a source-data tolerance. The middle zoom coordinate is the calculated 49.9991579434 mm EFL. Its f/2.91 setting is explicitly assumed constant for iris calibration, not called published. finiteConjugates is omitted: the inferred first-surface reference is not elevated into explicit source certification for finite-distance MTF.

All physical SDs are estimated. Figure 3's approximately 4.85 pixels/mm axial scale yields about 30 mm at L1,23 mm at L2/L3,18 mm at G2/G3,13-13.5 mm at L9/L10,12.5 mm at G5,14 mm at G6 and18 mm at G7. Initial L2/L3 SD23.5 failed the real validator's 90% gap intrusion policy at s2A->s3;23.1 corrected the inferred geometry without changing any patent value. All SDs are disclosed in evidence. The runtime's inferred physical iris radii are8.452817/11.124640/12.390638 mm. Endpoint f/2.91 agreement is calibration, not independent diaphragm evidence.

Portable exact conic/polynomial geometry was evaluated at 25 states (zoom and focus each0,0.25,0.5,0.75,1), with 501 radial boundary samples. Minimum edge thickness is 0.851702 mm, worst actual sampled slope52.831786 degrees, and minimum90%-gap-policy margin0.102105 mm. No conic-domain failure, cross-gap violation or invalid edge was found.

Five hundred meridional exact Snell rays were attempted across those25 states, four field fractions and five pupil fractions.460 passed the modeled apertures;39 were vignetted; one full-wide outer-pupil aim reached a TIR limit. Every sampled chief ray and every core-field aim succeeded. No first clipping event occurred at a cemented junction. These are geometric containment probes, not measured vignetting or a full two-dimensional pupil certificate. The unprinted middle field was a22.52-degree modeling probe. Intermediate states are schematic and may be defocused at the authored plane. No image-plane fitting was used.

Targeted execution of actual project source at pinned main succeeded: validateLensData returned zero errors, the runtimeLens constructor reproduced first-order values, and production render diagnostics required zero hidden trim at all 25 states. The project exact tracer and portable independent implementation agreed within 9.13e-10 mm for the460 complete unclipped image rays. Clipped continuation rays are not compared as physical image rays; four of those terminate with the project's noBracket diagnostic after already clipping at G5's entrance. That is recorded, not converted into a successful ray.

The first project harness attempt used the wrong stopAt interpretation (a count, not a last index), then compared the final vertex to the image plane. These were harness errors, corrected using the actual tracer contract. No optical data changed to fix them. The final executable project script and its report are retained as two essential supporting files.

A portable plotted cross-section was visually compared to native Figure3 and preserved its topology/proportions. Actual prepared-state render diagnostics were run, but mounted browser UI testing, the public compatibility wrapper, TypeScript typecheck, Prettier, lint, full-corpus tests and build remain NOT_RUN for integration. No application integration is claimed.

## Stage 3: analysis consistency and claim map

The data file was not changed during Stage 3. Its SHA-256 remains 44a551293573611f1dc0c5df47ab4437a28c3b037363c4bac7971381ab5089f2. The inherited construction checks were rerun against the actual candidate before writing the analysis. The verifier was extended for the analysis without changing the optical model. The Stage 2 checkpoint remains preserved separately.

The analysis follows the current required section order and metadata block. Every element first line is checked against the parsed data for its name, class, nd, νd and standalone focal length. Every aspheric row is checked against the original coefficient transcription and the declared conic mapping. Source counts, design/marketing separation, inferred physical apertures, the unprinted middle coordinate/F-number, source rounding, finite-conjugate eligibility and interpolation limitations are disclosed. Primary-source links are conventional and portable.

| Analysis claim or section | Governing evidence / executed result |
|---|---|
| Patent metadata and fixed example | Original title page; evidence.conventions.metadata; original unchanged job card |
| Construction-based production association | Native Figure 3 and Example 2 prose; manufacturer construction; evidence.productCorrelation |
| 14 elements / 10 components / 7 motion groups | Raw surface/media boundaries; source_counts; implemented exact mapping |
| Seven group focal lengths | sourceModel.groups; independent sequential/ABCD input checks |
| Every element focal length | implementedModel.elements; source_model isolated-element branch; data fl rounded to six decimals |
| Four cemented powers | sourceModel.cemented; no medium substitution at glass/glass boundaries |
| No strict telephoto or retrofocus classification | implementedModel.architecturalRatios, infinity source stations |
| Glass comparison residual table | evidence.glassEvidence.nativeCoordinates; direct primary vendor rows |
| L10 PgF and converted dPgF | Native condition rows (3-1)/(3-2); sourceModel.partialDispersion; partial_dispersion_conversion |
| Focus travels / near conjugates | sourceModel.groupPositions / nearConjugates; actual var state equality; parsed zoomCloseFocusM |
| Inferred exact iris schedule | implementedModel.exactRays.irisCalibrationMm; actual project runtime irisMm; f-number calibration only |
| Coefficient table and native/app conics | rawPrescription.aspheres; asphere_1/2/22/23/25; analysis_asphere_* |
| Modeled-rim sagittae / sphere departures | implementedModel.asphereRimDepartures; undefined reference sphere at 2A explicitly retained |
| Condition values and inequalities | sourceModel.conditions; source source table; condition_bounds_*; spectral and field/aperture inputs identified |
| EFL/BFD/track/rounding discrepancy | implementedModel.states; source comparisons and input-rounding sensitivity |
| Petzval sum | implementedModel.petzval; individual phi/(n*nPrime) terms |
| Geometry and traced containment limits | implementedModel.geometry / exactRays; retained project report and exact-file hashes |

Manual prose and citation review found no manufactured-lens identity, supplier, APO or manufacturing-process assertion unsupported by the source. Interpretive descriptions remain limited to source layout, power signs, motion and supported constraints. Generic chromatic-balancing discussion is qualified; it is not an isolated aberration decomposition.

The fresh independent Stage 4 review is separate and still required. No Stage 3 claim is an independent final audit approval.


# Stage 4 source-first independent review

## Identity, revisions and independence

Job: WO2024214585A1; Nikon NIKKOR Z 24-70mm f/2.8 S II; Example 2 / Table 2 / Figure 3; output stem NikonNikkorZ2470mmf28SII.

The Pass A baseline was frozen on 2026-10-06 at 19:53:42 UTC before any candidate was opened. Its content fingerprint is 76a069df30b08ab3ad371307338f5983f25893bd027823930bfe65d63d2a7aa8. Original patent SHA-256: c43b3c7becbf2292c17af13aa83da16c169c1942781694354ff0c9eef05b4d8f. The precise exposure note, separately re-entered inputs, fresh standard-library numerical path, independently retrieved glass data and results are retained under independentPass / independentBaseline. The fingerprint proves content identity, not independence by itself.

Pass B first inspected the Stage 3 candidate whose data SHA-256 is 44a551293573611f1dc0c5df47ab4437a28c3b037363c4bac7971381ab5089f2. All eleven inventory members were checked against that manifest and matched. The original PDF matched the separately used Pass A original. The unchanged full job card was read only after the baseline freeze. Its numerical interpretations did not provide Pass A input values.

Source extraction and first-order baseline calculation are fresh/source-first. The later independent exact model tracer was written after inspection of the author's verifier, so it is not described as a blind exact-trace implementation. It uses a distinct signed-angle Snell formulation and solves intersection in surface height using the global ray line, unlike the author's previous-ray-distance Newton intersection and vector Snell update. Exact-project execution is another separate evidence layer. No corpus, build, Git mutation, metadata generation, or mounted application UI review was performed.

## Four-way prescription and claim comparison

The original Table 2, frozen re-entry, implemented TypeScript and analysis agree on all 25 source planes, 24 refracting boundaries, fourteen physical elements, four cemented doublets, ten air-separated components and seven functional groups. All six tabulated spacing states match exactly. No numerical radius, thickness, refractive index, Abbe number or asphere coefficient correction is required. The stop is source plane 14; cemented entry assignments correctly use the downstream glass at planes 4, 7, 12 and 20. There is no source-prescribed camera plate, dummy surface, extra cement layer or separate focus reconstruction to add.

The five aspheric mappings all reproduce equation (a): application K = patent K − 1. There is no dimensional scaling. Blank A12 and absent A14 are disclosed zero-fill decisions, and source A2 is explicitly zero. Native d-line coordinates and the 587.6 nm reference are correct. The explicit L10 dPgF mapping is 0.03059176 under the current engine normal line 0.6438 − 0.001682νd; it derives from rounded patent excess 0.030 and is not a measured spectrum.

Fresh system EFL/BFD/principal-plane, element, cemented and functional-group powers, pupil positions/magnifications, Petzval, motion and conjugate calculations agree with the author's numerical answers. Infinity EFLs are 24.6996300987, 49.9991579434 and 67.8790451350 mm; BFDs are 11.8538438334, 22.4777245570 and 29.4936967529 mm. The source has a genuine printed-number mismatch at tele: 67.87 mm does not equal the rounded computed 67.879045 mm. The authored source prescription is retained. Its first-vertex-to-image tracks of 154.461/154.461/154.469 mm similarly retain the source's small constant-track rounding drift. Input-rounding sensitivity explains the scale without claiming that the printed summary was reproduced or silently adjusting any source number.

The near-state 165 mm label is numerically consistent with distance from the first vertex, yielding 319.45009/319.46525/319.44790 mm object-to-image distances and transverse magnifications −0.12498877/−0.25493161/−0.34867856. The reference-plane inference is correctly disclosed and production MFD is kept separate. All source conditions with sufficient independent numerical inputs are satisfied. Conditions (3-1)/(3-2) and field/aperture conditions (15)–(17) require source-input status rather than circular independent-verification claims.

Surface-by-surface Petzval is +0.00208078017089 mm⁻¹. No tabulated infinity station qualifies as first-order telephoto (track/EFL < 1) or retrofocus (BFD/EFL > 1). The analysis appropriately avoids both unsupported classifications and system APO claims. Source D8/D18 gap reversals must not be recast as actual group-motion reversals: every movable group's positions progress objectward across the three published zoom stations.

## Aperture and geometry findings and corrections

The original sparse 500-ray check was reproducible: the independent exact path agreed on complete unclipped image heights within 7.2e−14 mm and the real-project replay agreed with the author within 9.2e−10 mm. Sparse agreement was not treated as proof across untested fields, pupil radii or controls.

The independent expanded check discovered first clipping inside cemented components:

- Original s20 SD 12.5 mm: at zoomT 0.25, focusT 0.625, full probe field, pupil +0.75, s19 is 12.429062 mm, s20 is 12.501591 mm and the later s21 would be 13.008235 mm. The first intersection outside the aperture is the internal cemented interface. A second example at zoomT 0.75, focusT 0, field fraction 0.8, pupil +0.75 has s19 12.490745 and s20 12.502746 mm.
- Original s4 SD 23.1 mm: tele/infinity, full field, pupil −0.95 passes s3 at −23.073048 mm but reaches s4 at −25.228016 mm, followed by s5 at −25.214434 mm. Tightening the upstream inferred clear aperture is preferable to a large protruding junction.
- Original s7 SD 17.8 mm: a denser 69,741-ray grid found tele, focusT 0.875, field fraction 0.35, pupil −1 with s6 −17.795507, s7 −17.800383 and s8 −17.828374 mm. A small junction enlargement moves the first clip to the exit boundary.

Final recommended inferred-aperture corrections are s3 23.1→21.1 mm, s7 17.8→18.0 mm and s20 12.5→13.0 mm. All other SDs and all published optical quantities remain unchanged. These are clear-aperture estimates refined using the exact ray envelope, not patent transcription changes or manufacturing dimensions. The SD provenance and uncertainty must be updated to distinguish initial figure estimates from the refinements.

Superseded in part on 2026-10-06: the s3 reduction to 21.1 mm was reverted to 23.1 mm; s7 and s20 stand. See "2026-10-06 — Integration review corrections" below.

Rejected exploratory options remain part of the audit history, not final models. Setting s3 to 20.8 mm clipped the wide/infinity full-field chief, whose height is 20.966414 mm. Setting s4 to 25.5 mm passed the shared-band validator but relied on a pronounced tapered rim; equal-height extrapolation of L3's bounding spheres yields −0.3334 mm at radius 25.5 mm. The more conservative s3 restriction avoids relying on that extrapolated/tapered construction and retains all sampled chiefs. Final s4 stays 23.1 mm.

On the recommended final-aperture variant, fresh geometry across 81 zoom/focus states and 1,001 radial samples per shared boundary gives minimum material thickness 0.8517020003 mm, minimum 0.9-gap policy margin 0.135 mm, and maximum actual rim angle 45.47039796°. Actual project validation and render diagnostics have zero errors and zero hidden trim. The proposed final material was not accepted solely from display layout or a portable silhouette.

The final dense independent check covers zoomT/focusT = 0…1 in 0.125 steps, 21 nonnegative field fractions 0…1 in 0.05 steps, and 41 pupil fractions −1…1 in 0.05 steps, totaling 69,741 rays. There are no first clips at cemented interfaces and no clipped chiefs. Centered sign symmetry was separately checked on the triggering configurations; a prior 6,561-ray grid also used both field signs. Ten outer aiming/TIR failures occur only at the wide full-field negative pupil rim and remain reported. This is finite meridional sampling, not a full two-dimensional pupil or continuum guarantee.

Narrow full-iris on-axis tele/near vignetting remains: s19 is reached at approximately 12.769650 mm for the extreme marginal ray against SD 12.5 mm, beginning near pupil radius fraction 0.979989. This is clipping at a component entry edge, not an internal cemented junction, and must be disclosed rather than represented as full-pupil transmission. It does not justify changing the source prescription or claiming a measured production aperture.

Superseded on 2026-10-06: s19 and s21 are now 12.9 mm and this on-axis restriction no longer occurs. See "2026-10-06 — Integration review corrections" below.

The inferred runtime iris schedule is exact marginal-ray calibration: 8.4528171170/11.1246400812/12.3906379185 mm. The earlier source-only paraxial inference was 8.3681724762/11.0049215723/12.2200650675 mm. This method distinction explains the difference; neither set is a published diaphragm dimension. The runtime f/2.91 agreement is calibration. Mid-station f/2.91 is explicitly assumed, and the inferred physical iris is retained through focus.

## Glass review and primary-source correction

No candidate supplier label is required in the model; its class-level strings are defensible and source nd/νd must remain unchanged. Independent primary HIKARI data nevertheless improve three illustrative compatibility rows:

- L1: replace the illustrative nearby HOYA LAC13 row (+0.000070/+0.040) with exact HIKARI Q-LAK53S (1.693430, 53.30; zero coordinate residual). Preserve the old alternative in evidence.
- L4: replace the illustrative nearby OHARA S-LAH53 row with exact HIKARI J-LASF03 (1.806100, 40.97; zero residual). Preserve the OHARA alternative and its original catalog-version residual in evidence.
- L13: replace the illustrative nearby OHARA S-BSM15 row with exact HIKARI Q-SK15S (1.622910, 58.30; zero residual). Preserve the old alternative in evidence.

Primary HIKARI source: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf, pages 183, 135 and 178 respectively in the freshly retrieved 2025-revision catalog. Other exact matches include J-PSKH4, J-FKH1 and J-SF03, while J-BK7A has +0.01 Abbe residual for L14. HOYA NBFD25, NBFD30 and NBFD29 match their native pairs; E-FDS1-family, SCHOTT N-SF66 and CDGM H-ZF62 illustrate the non-uniqueness of L10. HIKARI J-PSKH4 and HOYA PCD51 share source coordinates but differ slightly spectrally. No approximate OHARA S/L prefix substitution, APO inference or identical-melt claim is permitted.

The actual audit catalog scope is documented honestly: HIKARI full PDF coordinate pages, HOYA full manufacturer AGF and OHARA 2023-05 pocket rows; targeted SCHOTT/CDGM primary rows; SUMITA numerical retrieval unsuccessful during the fresh pass. Author-supplied later/current catalog excerpts remain identified as author evidence, not retrospectively claimed as independently retrieved. Catalog coefficients/line indices are candidate evidence, not silently substituted into the class-labelled numerical media.

Superseded on 2026-10-06: the class-level strings were replaced by catalog-compatible glass names and six-digit codes, so eleven elements now resolve to catalog dispersion curves; nd/νd are unchanged. See "2026-10-06 — Integration review corrections" below.

## Source prose and analysis corrections

Required source-discrepancy note: ¶0176 identifies G5/G6 as first/second positive groups, but the general condition-(6) definition and its 2.588 table value correspond to G2/G3. The two ratios are G2/G3 = 2.587499489 and G5/G6 = 0.663981670, the latter being focusing condition (9). The correct numerical implementation is already G2/G3; add explicit disclosure rather than altering the calculation.

Add explicit source-input checks for 68° < 2ωW (85.5°), 2ωT < 40° (34.0°), and 2 < FnoT < 4 (2.91), alongside source-input status of the two partial-dispersion conditions. A calibrated iris cannot independently validate the source f-number. Fields remain published assertions/probe limits rather than a certified maximum image-field calculation.

Minor wording improvements: replace “millimetric table-rounding differences” with “sub-0.01 mm table-rounding differences”; replace “The reconstruction is unscaled” with “The model is unscaled” to avoid suggesting a reconstructed focus law; qualify L14's focus-stationary sentence as “stationary to the source table's rounding precision.”

Quantitative claim map: metadata→original title page / Nikon official specifications; architecture/counts→Table 2 and Figure 3; element and cemented focal lengths→independent final-model powers; group powers/motion→independent groups and source station matrices; conjugates→image-plane ABCD solve; glass compatibility→frozen primary-catalog rows; coefficients/rim departures→source mapping and independent geometry; conditions→independent ratios plus explicitly source-input-only checks; modeled iris→exact marginal-ray calibration; field/ray/geometry limits→enumerated finite sampling and actual render diagnostics. The original analysis's section order and technical third-person voice are otherwise appropriate.

Nikon's current official specifications and construction drawing were independently re-opened: fourteen elements/ten groups, three aspheric and two ED positions, Nikon Z/FX, 24–70 mm f/2.8, multi-focus/internal-focus, 0.24–0.33 m MFD, eleven blades and 142 mm mount-to-front length are supported. The product drawing's topological/asphere/ED agreement is strong construction evidence, not proof that its manufacturing prescription equals the patent example.

## Actual project scope and outstanding gates

The identified real project dependency subset at commit 3920234ab22de546bcaacaee275e35bd51eed0ca was executed through the targeted command after command inspection. The original candidate and recommended final-aperture variant passed validateLensData, runtime construction, 25-state real render diagnostics, and matching complete physical ray paths. This is actual project evidence, separate from the portable calculation; it does not stand in for the public compatibility facade, real TypeScript typecheck, Prettier/lint, corpus tests, full build or mounted browser UI. Those remain NOT_RUN at integration scope as applicable.

If an expanded project aiming solver returns noBracket outside its SD-bounded intersection search, retain the raw failure and classify it as an already-blocked-ray limitation only when the independent mathematical ray establishes a prior aperture violation or the same outer TIR boundary for that exact state/field/pupil. Do not count it as an image ray. Any otherwise physically clear chief/core ray that cannot be traced remains a failure.

Final approval is pending the actual corrected Stage 4 bytes, all affected Stage 2/3 rechecks, source-baseline hash preservation, canonical inventory/hash verification and clean-extraction replay. This review of a proposed variant is not a final READY_FOR_BATCH approval. integrationStatus remains INTEGRATION_PENDING.

## Corrected-pair recheck, 2026-10-06 20:15 UTC

The actual corrected Stage 4 pair was reread with data SHA-256 dc681bf17ca08bc4903c49a73d3ed17a66dfaed763d1926771b8dd45515cf6c9 and analysis SHA-256 5af003450f87051dc3fa2825410d5eb201c742d3b09289115d46f1a7567286e1. The data's only numerical changes from the original candidate are exactly the three recommended inferred SDs (s3=21.1, s7=18.0, s20=13.0 mm). The source disagreement, improved HIKARI candidate examples, missing source-input condition bounds, SD refinement and narrow on-axis rim limitation are explicitly disclosed.

The final pair independently passed 39 technical checks, including 69,741 rays and the 81-state geometry scan. The actual-project report with SHA-256 34a9dba7e0b179c29bb0f5fa7d5de4670f89207eb74d4aa8180cb01f2334fbc5 was independently reconciled per record: all 1,072 failed aim/noBracket/TIR records correspond to an already-blocked physical ray or an outer-pupil limit; no clear ray was waived. For 4,599 clear complete paths, the independent/project maximum image-height residual was 9.1273477665e−10 mm. Six records that the author's unbounded continuation calls outer TIR are already clipped at front surface 1A in the independent physically terminated trace; these are consistent blocked dispositions, not successful image rays.

The corrected pair is technically acceptable. Final consolidated dossier approval still depends on preserved frozen baseline content, verifier/evidence binding, manifest inventory and clean-extracted package replay. No source-level check or applicable observed failure has been waived.


## Stage 4 consolidation and final recheck record

The applied aperture corrections are the final conservative variant: source/model s3 SD23.1 to21.1 mm; s7 SD17.8 to18.0 mm; s20 SD12.5 to13.0 mm. These are changes to inferred apertures only. Source radii, spacings, indices, Abbe values, coefficients, motion states and the image plane did not change. Final s4 remains23.1 mm. The old Stage2/3 data revision is preserved as historical provenance; its optical approval was reopened for these SD changes.

Superseded in part on 2026-10-06: s3 is 23.1 mm again, and s2A, s19 and s21 also changed. See "2026-10-06 — Integration review corrections" below.

The corrected author model was recomputed on 81 control states with 1,001 radial boundary samples. Minimum common-band material thickness remains 0.851702 mm and minimum0.9-gap-policy margin is 0.135 mm. The author's52.831786-degree maximum is sampled across each complete radial profile, while the independent45.470398-degree result is the actual surface-rim maximum. They are different reported scopes, not contradictory angle calculations; both remain below the current limit.

The expanded author exact-ray grid contains 6,561 targets, including both field signs and full iris fractions.4,599 are clear complete paths;1,944 meet modeled aperture boundaries and18 reach an outer aiming/TIR limit. No first clip occurs at a cemented junction and no sampled chief is clipped. The independent signed-angle implementation separately covers 69,741 denser targets and retains its 10 extreme-pupil limits. The full-iris near/tele s19 restriction remains disclosed.

Actual project execution uses the exact corrected data and the 73 pinned source/reference files identified in the shared archive. Validation reports zero errors, and81-state production render diagnostics report zero hidden trim.4,599 clear complete project rays agree with the portable implementation within 9.13e-10 mm.1,072 noBracket/TIR aiming diagnostics remain in the actual report. Every one was independently re-evaluated as an already aperture-blocked mathematical ray or the same outer limit; none was silently counted as a successful image ray. Six generic outer-TIR records are more specifically front-surface1A clipping under physically terminated tracing. The canonical verifier reproduces this per-record corroboration.

The source-first baseline retains its original pre-reconciliation file fingerprints and numerical content. Only its source-path and exposure-description metadata are normalized for this portable technical dossier. The original numerical extraction, source conventions, conditions, ambiguities and raw blocks have a separately checked canonical fingerprint. The frozen original first-order implementation is retained verbatim and executed in an isolated temporary directory on every portable replay. All its optical outputs agree exactly with the frozen results; the input-file hash changes only because of the explicitly normalized non-optical metadata.

The later signed-angle independent model implementation is incorporated with its uniquely prefixed helpers, without numerical changes. It independently parses the final candidate, checks all source states, calculates model powers/pupils/Petzval, checks geometry, reproduces 69,741 rays and repeats the symmetric regression cases. Its method independence is disclosed separately from the earlier source-first/blindness scope.

The analysis has been amended with the condition-(6) source naming contradiction, exact-coordinate HIKARI alternatives, explicit remaining condition bounds and source-input status, full-iris rim limitation, and final aperture provenance. Minor requested terminology was corrected. No glass supplier, spectrum, production identity or manufacturing method was inferred.

The updated final construction and analysis gates are rebound to the final data/evidence/verifier/results revision in the manifest. Exact independent final sign-off and canonical ZIP replay remain the last packaging step. The pending integration checks remain explicitly NOT_RUN.

### Damaged-dossier gate hardening

The final review required an explicit guard against silently skipping missing inputs. The verifier now derives the required stage from the highest of the manifest declaration and present artifacts. Every required nonempty canonical file is checked; Stage 4 additionally requires the preserved independent pass and the two retained project-execution files. Missing data, analysis, original PDF/card, evidence, audit, results or manifest produces a diagnostic JSON and nonzero exit rather than a lower-stage success. Missing independentPass also fails even if the rest of the Stage 4 package remains. Temporary damaged-dossier regression fixtures are retained in the verifier and run on each final replay. No optical data or analysis changed for this hardening.

## Final independent technical approval, 2026-10-06 20:37:49 UTC

The independent reviewer granted final technical approval after checking the exact final data, analysis and verifier. The nine damaged-dossier cases were independently exercised through the actual CLI: each wrote a FAIL diagnostic and exited with status 1. All eleven manifest members verified, and the independent model functions remained unchanged. No optical, source, geometry, glass or analysis blocker remains. This final sign-off supersedes the pending-review statements above, which are retained as dated history.

Approved exact SHA-256 values:

- data.ts: dc681bf17ca08bc4903c49a73d3ed17a66dfaed763d1926771b8dd45515cf6c9
- analysis.md: 23534c4a7872c781372d263c664880659d56c4a0eb38da2654c3f01ffd1b2db2
- verify.py: 19922242d0a622b7959d8feb579b86a1faf01e6c9919b7f2b59e93b1dbd9ceb2

The reviewer authorized READY_FOR_BATCH only once the final canonical archive passes inventory/hash verification and clean-extraction replay. The final manifest records that packaging result. Integration remains INTEGRATION_PENDING; the seven explicitly integration-only checks remain NOT_RUN. No integration approval is implied.

## 2026-10-06 — Integration review corrections

An independent review before integration re-read the patent from the rendered PDF pages: title page 1, equation page 29, Example 2 text pages 32–34, Table 2 pages 34–36, the conditional-value table pages 55–56 and Figure 3 page 69. It also opened Nikon's specification page and construction drawing for the S II.

Retained without change: all 25 prescription rows, the five aspheres with K = patent K − 1, all 42 variable-gap values (seven gaps, three zoom stations, infinity and near), the patent metadata, the focus and zoom description, and the Example 2 selection. Nikon's drawing shows 14 elements in 10 groups with aspherical L1, L13 and L14 and ED L8 and L11, which only Example 2 reproduces. No patent value was edited.

| Field | Before | After | Evidence |
|---|---|---|---|
| Surface 2A sd | 30 | 24.0 | Figure 3, measured at 300 dpi with 13.45 px/mm from first vertex to image plane, ends L1's curved rear surface about 24.0 mm from the axis; a flat annulus continues to the 30 mm rim. Traced full-field rays reach at most 23.07 mm there, the wide chief ray 21.98 mm. At 30 mm the polynomial was extrapolated past a slope inflection near 27 mm and reached 20.88 mm of sag against the 14.774 mm axial gap, so L1 drew wrapped around L2/L3. At 24.0 mm the sag is 13.451 mm and the rim angle 51.2°. |
| Surface 3 sd | 21.1 | 23.1 | Figure 3 shows L2 at about 23.7 mm. At 21.1 mm the wide/near chief ray to the 21.70 mm image height, 21.12 mm high at surface 3, was blocked; the wide/infinity chief ray cleared the rim by only 0.15 mm; and the middle-station full-field rim ray, 22.12 mm high, was clipped. 23.7 mm fails the 90 % gap-intrusion rule at 2A→3 (13.96 mm against 13.30 mm allowed); 23.1 mm passes. |
| Surfaces 19 and 21 sd | 12.5 | 12.9 | The tele/near on-axis marginal ray at the infinity-calibrated 12.391 mm iris reaches 12.770 mm at surface 19 and 12.596 mm at surface 21. Figure 3 shows G5 between 12.2 mm (L11) and 12.9 mm (L12). |
| Element glass labels | Class-only strings on all 14 elements | Catalog names on 11 elements; six-digit codes on L1, L4 and L13 | Exact project-catalog coordinate matches: J-PSKH4 (L2, L6, L11), NBFD25 (L3, L7), J-SF03 (L5), J-FKH1 (L8), NBFD30 (L9), E-FDS1 (L10), NBFD29 (L12) and J-BK7A (L14). The largest residuals are Δnd 4.9×10⁻⁶ and Δνd 0.00. No nd or νd changed. |
| First specs entry | 14 ELEMENTS / 10 OPTICAL COMPONENTS | 14 ELEMENTS / 10 GROUPS | Sibling convention; Nikon publishes 14 elements in 10 groups. |

Results on the edited file:

- The surface validator reports no errors, and the image-circle audit reports no undersized surface.
- A real meridional trace to image heights 21.60 and 21.70 mm, at all three zoom stations in both the infinity and near rows, finds no on-axis clipping and no blocked chief ray. The half-fields for 21.70 mm at infinity are 42.72°, 22.62° and 17.01°, against the patent's 42.75° and 17.0° at the ends.
- First-order values are unchanged: EFL 24.6996, 49.9992 and 67.8790 mm; paraxial back focus 11.854, 22.478 and 29.494 mm; f/2.91 at all three stations with inferred iris radii 8.453, 11.125 and 12.391 mm.
- The real-chief analysis half-field is 42.72° at wide/infinity and 43.04° at wide/near; it was 42.98° at wide/near, short of the image corner. The engine's raw paraxial wide half-field, which sets only the diagram's off-axis fan, moved from 39.39° to 37.15° because 2A now limits it instead of surface 3.
- Eleven elements resolve to catalog dispersion curves. The L4 code resolves to the code-equivalent CDGM H-ZLaF52A row (νd 41.02); L1 and L13 use Abbe-based dispersion. L10's g-line index still comes from the stored dPgF, and catalog E-FDS1 evaluates the patent expression at 0.0297 against the tabulated 0.030. No apd tag changed.

Open limitations:

- HIKARI lists Q-LAK53S (693533), J-LASF03 (806410) and Q-SK15S (623583) at the L1, L4 and L13 coordinates, but the project glass catalog has no rows for them.
- With surfaces 3 and 4 both at 23.1 mm, outer tele full-field rays can first clip at the L2/L3 cemented junction (the tele rim ray is 23.62 mm high at surface 3 and 26.27 mm at surface 4); the earlier no-first-clip-at-a-junction property was given up for the figure-based rim.
- The rendered lens page was not inspected in the app.
- The middle focal length and f-number, and the reference plane of the 165 mm near state, remain unprinted; the earlier sections' treatment stands.

## 2026-10-06 — Semi-diameter pass against the patent figure

Source: `patents/WO2024214585A1.pdf`, PDF page 69 (sheet 3/15, 図3), the one cross-section of Example 2, drawn at the wide-angle end focused at infinity with L1–L14 labelled. PDF page 67 (図1) is Example 1 with thirteen elements and was not used. The page is a 300 dpi one-bit raster and was measured at that resolution. The optical axis runs vertically at x = 1249.5 px with the object at the bottom.

Scale: the first vertex is at y = 2655.5 px and the image plane at y = 576 px, 2079.5 px for the 154.461 mm wide/infinity track, so 13.46 px/mm (0.0743 mm/px). Three other spans agree: first vertex to surface 25A gives 13.45 px/mm, surface 13 to surface 25A 13.48 px/mm, and the D5 air gap 13.52 px/mm. Every vertex crossing lies within 3.5 px (0.26 mm) of the position the wide/infinity prescription predicts, so the sheet is Example 2 drawn to scale. Rims were read on the right-hand side, which carries no leader lines, and on the left wherever the leaders allow; the two sides differ by up to 0.5 mm and the figure values below are their mean. Flat mounting annuli were located from their straight ink runs.

| Surface | Before | Figure 3 | Figure ÷ before | After | Evidence |
|---|---:|---:|---:|---:|---|
| 1A | 30 | 30.1 | 1.00 | 30 | L1's outer rim. |
| 2A | 24.0 | 24.0 | 1.00 | 24.0 | Inner end of L1's flat rear annulus, 24.2 mm on the right and 23.9 mm on the left; the annulus runs on to the 30.1 mm rim. |
| 3 | 23.1 | 23.6 | 1.02 | 23.1 | L2's rim, 23.7 mm right and 23.4 mm left. Already at the validator's gap-intrusion limit against 2A. |
| 4, 5 | 23.1 | 22.4 | 0.97 | 23.1 | L3 is drawn 1.3 mm smaller than L2, with a step at the junction. Inside measurement noise. |
| 6, 7, 8 | 17.8 / 18.0 / 17.8 | 17.75 | 0.99–1.00 | 17.8 / 18.0 / 17.8 | G2's common rim. |
| 9, 10, 11 | 18 | 18.5 | 1.03 | 18 | Rims of L6 and L7. |
| 12, 13 | 18 | 17.75 | 0.99 | 18 | L8 is drawn 0.75 mm smaller than L7. |
| STO | 8.37 | 8.3 | — | 8.37 | Inner ends of the drawn stop ticks (8.2 and 8.4 mm). Not editable in this pass, and consistent. |
| 15, 16 | 13 | 13.1 | 1.01 | 13 | L9's rim. |
| 17, 18 | 13.5 | 13.5 | 1.00 | 13.5 | L10's rim. |
| 19, 20 | 12.9 / 13.0 | 12.15 | 0.94 | 12.9 / 13.0 | L11's rim. The tele/near on-axis marginal ray needs 12.77 mm at surface 19 and 12.68 mm at surface 20, so the ray floor governs. |
| 21 | 12.9 | 12.75 | 0.99 | 12.9 | L12's rim; the same ray needs 12.60 mm. |
| 22A, 23A | 14 | 14.0 | 1.00 | 14 | L13's rim. Both drawn rim corners sit where the aspheric sags at 14.0 mm (−2.43 and −3.20 mm) put them. |
| 24 | 18 | 16.0 | 0.89 | 16.0 | Changed; see below. |
| 25A | 18 | 17.9 | 0.99 | 18 | L14's outer rim. |

Surface 24 is the only value changed. Figure 3 ends L14's concave front curve at a flat annulus whose inner end is 16.1 mm from the axis on the right and 15.9 mm on the left, and the annulus continues to the 17.9 mm rim. The annulus lies 5.7–5.9 mm ahead of the surface-24 vertex, a depth the R = −25.2494 mm sphere reaches at 16.0–16.2 mm, so the two readings agree. At the stored 18 mm the sphere ran on to 7.54 mm of sag: the rim drew 6.7 mm long against 5.0 mm in the figure, and at tele/infinity (D23 = 3.863 mm) L14's front corner sat 0.5 mm ahead of L13's rear rim corner. At 16.0 mm the sag is 5.72 mm, the rim spans 4.9 mm, and L14 stays 1.3 mm behind L13's rim in that state. Surface 25A keeps 18 mm because the convex rear surface does reach the drawn rim.

Results on the edited file:

- The surface validator reports no errors, the image-circle audit reports no undersized surface, and the traced corner coverage is 21.70 of 21.70 mm at all three stations (42.7°, 22.6° and 17.0°).
- A real meridional trace to the 21.70 mm image height at the three zoom stations, in the infinity and near rows, finds no on-axis clipping and no blocked chief ray. At surface 24 the on-axis marginal ray reaches at most 5.32 mm and the corner chief ray at most 14.32 mm (wide/infinity).
- The unvignetted corner bundle would reach 16.30 mm at surface 24, but the other rims cut it first. With every other stored rim and the station iris applied to collimated meridional fans from the axis to the full half-field, the highest surviving ray at surface 24 is 15.39 mm at wide/infinity, 15.31 mm through the wide near-row spacings, and at most 14.28 mm at the middle and tele stations. The number of surviving sampled rays is the same with surface 24 at 16.0 mm and at 18.0 mm in all six states, so the change removes no light the model previously passed.
- On-axis marginal maxima over the six states, traced from the 165 mm object point for the near rows with the infinity-calibrated iris held: 16.60 mm at surface 8 (stored 17.8), 17.16 mm at surface 9 (18), 12.46 mm at surface 16 (13), 13.07 mm at surface 18 (13.5), and 12.77 / 12.68 / 12.60 mm at surfaces 19 / 20 / 21 (12.9 / 13.0 / 12.9).
- Engine values are identical before and after: EFL 24.6996, 49.9992 and 67.8790 mm; f/2.91 at all three stations with iris radii 8.453, 11.125 and 12.391 mm; raw paraxial half-fields 37.15°, 25.95° and 21.37°, still limited by 2A at wide and by 23A at the other two stations. Surface 24 would limit at 42.0°, 27.7° and 23.3°.
- The local lens page was inspected at 24.7, 50 and 67.87 mm, each at infinity and at closest focus. Element proportions follow Figure 3, no elements overlap in any of the six views, and L14 no longer reaches forward around L13 at the tele end.

Open limitations:

- The renderer joins unequal front and rear rims with a straight edge, so L1 and L14 draw with a chamfer where Figure 3 shows a flat annulus and a cylindrical rim.
- The drawn steps inside the cemented groups (L3, L8 and L11 are 1.3, 0.75 and 0.6 mm smaller than their partners) are not reproduced; each is inside the 5–8 % measurement noise, and L11's would fall below the ray floor.
- Rim readings carry about ±0.25 mm from the 3 px line width and the left/right asymmetry of the drawing. Figure 3 is a patent schematic, not a dimensioned drawing.
- No aspheric semi-diameter changed, so the rim-departure table in the analysis file stands; surface 24 is spherical.

## 2026-10-06 — Glass labels and display tags

Glass labels. The earlier open limitation is closed: HIKARI's Q-LAK53S (693533), J-LASF03 (806410) and Q-SK15S
(623583) were added to the project glass catalog from the vendor's 2025-06-01 data workbook (nine-term power
series; coefficient-evaluated 1.693430 / 53.30, 1.806100 / 40.98 and 1.622910 / 58.30). L1, L4 and L13 now carry
those names in place of six-digit code labels, so all fourteen elements trace on catalog dispersion curves; L4
previously traced on the code-equivalent CDGM H-ZLaF52A row (νd 41.02) and L1 and L13 on the Abbe approximation.
The bare code 806410 stays bound to H-ZLaF52A for other lenses. Stored nd and νd are unchanged, and the labels
remain catalog-compatible inferences: Q-LAK53S and Q-SK15S are precision-molding grades, which fits the two
double-aspheric elements but does not establish how they were made.

Display tags. L8 (J-FKH1 class, νd 82.57, catalog ΔPgF +0.034 against the engine normal line) and L11 (J-PSKH4
class, νd 67.00, catalog ΔPgF +0.005) now carry `apd: "inferred"`, matching the two positions Nikon's construction
diagram marks as ED and the treatment of the other NIKKOR Z models in the catalog. L2 and L6 share L11's pair but
are not marked by Nikon and stay untagged. L10 keeps `apd: false` with its condition-derived `dPgF`, because a
published partial-dispersion bound alone is not an anomalous-dispersion designation.

Spec lines. `specs` now gives the design focal range and f-number, five aspherical surfaces on three elements
(L1, L13, L14) and the two inferred ED positions, in the form used by the other catalog zooms; the internal
"functional groups" and "six-state prescription" notes were dropped from the display line and remain in the header.

## 2026-10-06 — Second review: diagram, labels and movement

An independent second look at the lens as the local site draws it. The page was captured at 24.7, 50 and 67.87 mm,
each at infinity and at closest focus, with both group-movement overlays and the element inspector, and set beside
`patents/WO2024214585A1.pdf`: Figure 3 (PDF page 69), the Example 2 text ¶0164–0176 (PDF pages 32–34), Table 2
(PDF pages 34–36), the condition (3-2) text ¶0057–0060 (PDF page 14) and the front page.

Silhouette. Figure 3 was measured again from the 300 dpi raster without reusing the earlier readings. The first
vertex is at y = 2655.5–2656 px and the image plane at y = 576.5 px, 13.46 px/mm for the 154.461 mm track; all
24 lens-surface vertex crossings sit within 3 px of the wide/infinity prescription. Outer ink edges on the
right-hand side read L1 29.9–30.2 mm, L2 23.7, L3 22.3, L4/L5 17.7, L6 and L7 18.5, L8 17.7, L9 13.1, L10 13.6,
L11 12.2, L12 13.0, L13 14.1 and L14 18.0 mm (line centres about 0.1 mm less). L1's flat rear annulus begins 24.2 mm
from the axis on the right and 23.9 mm on the left. L14's front annulus begins at 16.1 mm (right) and 15.95 mm
(left), 5.72 mm ahead of the surface-24 vertex, which is where the R = −25.2494 mm sphere is 16.0 mm high. Every
reading agrees with the earlier pass to 0.1 mm, so no semi-diameter was changed. The places where page and figure
still differ are the ones already recorded: L1 and L14 draw a straight chamfer where the figure has a flat annulus
and a cylindrical rim, and the drawn steps inside the cemented pairs (L3 1.3 mm, L8 0.75 mm and L11 0.8 mm below
their partners) are not reproduced. Squaring L1 or L14 is not available: surface 2A at 30 mm sags 20.88 mm into a
14.774 mm gap, and surface 24 at 18 mm puts L14's corner ahead of L13's rim at the tele end. L6 and L7 are drawn
0.75 mm taller than G2 and L8 and render 0.2 mm taller than G2, so the drawn order of heights is kept.

| Field | Before | After | Evidence |
|---|---|---|---|
| `doublets` bracket text | L2/L3, L4/L5, L7/L8, L11/L12 | D1, D2, D3, D4 | At 67.87 mm D5 closes to 1.238 mm and the first two labels sat about 3 px apart on the page. The patent gives the cemented lenses no names (¶0166–0170 call them cemented negative or positive lenses), and D1–Dn is the bracket convention of the other NIKKOR Z zooms in the catalog. Surface ranges 3–5, 6–8, 11–13 and 19–21 are unchanged and match the four junctions at surfaces 4, 7, 12 and 20. |
| Element `cemented` | absent | D1 on L2 and L3, D2 on L4 and L5, D3 on L7 and L8, D4 on L11 and L12 | The inspector now shows a doublet badge that names the same bracket. |

Checked and found correct, nothing changed:

- Group brackets G1 to G7 are the patent's notation and cover surfaces 1–5, 6–8, 9–13, 14–18 (stop, L9, L10),
  19–21, 22–23 and 24–25, the start surfaces of the patent's group focal-length table (1, 6, 9, 14, 19, 22, 24).
- Element names L1 to L14 are the figure's own designations. Every `type` string agrees with the signs of the
  radii and with ¶0166–0172. The types carry no aspheric count; the inspector adds its own badge, ×2 for L1 and
  L13 and ×1 for L14.
- The aspheric suffix is on surfaces 1, 2, 22, 23 and 25, the five rows Table 2 marks with an asterisk, and on no
  other. The stop is drawn between L8 and L9, as source surface 14.
- L8 and L11 keep `apd: "inferred"`. Nikon's specification page lists 10 groups and 14 elements with two ED and
  three aspherical lenses, eleven blades and multi-focus internal focusing. Its construction drawing could not be
  opened in this review, so the two ED positions rest on the earlier reading of that drawing.
- L10 keeps `apd: false`. ¶0057–0060 bound its partial dispersion and say the lens corrects the secondary spectrum
  of lateral colour, without calling the glass anomalous or naming it.
- `varLabels` D5, D8, D13, D18, D21, D23 and D25 are Table 2's names; `zoomLabels` and `focusDescription` read
  correctly, and the focus slider ends at 32 cm against the calculated 0.3195 m object-to-image distance.
- Front page: WO 2024/214585 A1, published 17 October 2024, inventor Fumiaki Ohtake, applicant Nikon Corporation.

Zoom travel. All 42 variable-gap values were read again from PDF page 36 and equal the stored `var` arrays, which
list wide, middle and tele in the order of `zoomPositions` (24.7, 49.999, 67.87). Front-vertex positions measured
from the image plane at infinity:

| Group | Wide | Middle | Tele | Wide to middle | Middle to tele |
|---|---:|---:|---:|---:|---:|
| G1 | −154.461 | −154.461 | −154.469 | 0.000 | −0.008 |
| G2 | −87.384 | −124.723 | −128.752 | −37.339 | −4.029 |
| G3 | −78.828 | −105.576 | −120.247 | −26.748 | −14.671 |
| G4 | −63.978 | −78.179 | −83.997 | −14.201 | −5.818 |
| G5 | −41.777 | −54.768 | −60.798 | −12.991 | −6.030 |
| G6 | −29.018 | −32.527 | −37.558 | −3.509 | −5.031 |
| G7 | −13.155 | −23.779 | −30.795 | −10.624 | −7.016 |

G1 is fixed to the table's rounding and G2 to G7 move toward the object in both intervals with no reversal, as
¶0174 states and as Figure 3's arrows show (vertical for G1, sloping toward the object for the rest, shallowest
for G6). The page's zoom overlay shows the same seven tracks and a largest travel of 41.42 mm.

Focus travel. Index 0 of each `var` pair is the infinity row and index 1 the 165 mm row. From infinity to near G5
moves −2.656, −7.544 and −10.795 mm and G6 −2.390, −6.413 and −10.579 mm at wide, middle and tele, both toward the
object as ¶0175 and the figure's two focus arrows state; G1 to G4 and G7 stay within 0.001 mm. The focus overlay
shows only G5 and G6 moving, 2.66 mm at the wide end and 10.80 mm at the tele end.

Display rays at closest focus. In all three near states the outermost on-axis display ray stops at the iris. The
page launches that ray at 0.83 of the entrance-pupil radius at the first-surface plane, diverging from the object
point 164.9 mm ahead. It reaches the stop plane at 8.53, 11.40 and 12.96 mm against the modelled iris radii of
8.453, 11.125 and 12.391 mm, which are calibrated at infinity and held through focus because the patent prints no
near-state f-number. Its last drawn point is surface 13 and it clears every element rim before the stop (16.4 mm
at surfaces 9 to 11 against 18 mm at tele), so the cut is the modelled fixed iris and not a semi-diameter. The
entrance-pupil radius itself is the same at infinity and near, since both focusing groups lie behind the stop.

Results on the edited file: the surface validator reports no errors, the image-circle audit no undersized surface,
and the traced corner coverage is 21.70 of 21.70 mm at all three stations. The real-ray trace output is identical
before and after: half-fields 42.72°, 22.62° and 17.01° at infinity, f/2.91 with iris radii 8.453, 11.125 and
12.391 mm, no on-axis clipping and no blocked chief ray in the infinity or near rows. The engine's raw paraxial
half-fields stay 37.15°, 25.95° and 21.37°. The page was captured again in the six states; the four brackets read
D1 to D4 without crowding at the tele end, and the inspector shows the doublet badge on the eight cemented elements.

Open limitations:

- The chamfered rims of L1 and L14 and the unreproduced cemented steps remain as described in the previous section.
- The ED positions were not re-read from Nikon's construction drawing in this review.
- The near-state iris is a modelling assumption; a diaphragm that opened with focus would pass the display ray.
