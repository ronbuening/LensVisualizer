# Olympus M.Zuiko Digital ED 75 mm F1.8 — Example 1 revision

## Job and reference versions

The user explicitly requested a remake using JP2013161076A Numerical Example 1 on 2026-10-06. This is a new source-first revision. The Example 2 package remains sealed and unchanged at Drive file 1zpLNPuNfxWISNNkTw6z_-hYmQFjSZMxv; its SHA-256 is 588a11f3f4b889cbdb062fcb2d8e832a745be10fed1603b79899f04b8f938853. The latest four-field card in this revision fixes Example 1 and retains the original output stem. The earlier card and selection remain in the historical package and Drive revision history after the authorized final card update.

The original patent PDF was freshly retrieved from the existing private Drive original and compared with the archived PDF. All 492,854 bytes match, SHA-256 39ab38ad56e986bae4ea49feb20c48622cc76cbccd68f7d480acaba6a87e3024. It has 37 PDF pages including the PAJ wrapper. The controlling workflow is CHAT-1.0 (2026-09-11), with archive hash ef9a25e06642c717e3cf4e8da327c3669260036082fdd5f5ef7d5631416b0224. Current LensVisualizer main was queried and pinned to 3920234ab22de546bcaacaee275e35bd51eed0ca. Seventy-three locally available project reference/engine files were each rehashed against the current non-truncated repository tree using Git blob hashes. Fresh fetched specifications, template, defaults, taxonomy, authoring/audit guides and the integration contract were read. Reference identities appear in the manifest.

The current project rearPlates contract supersedes the workflow kit's obsolete generic plate-omission sentence. Example 1 has no plate, so this version difference does not change the model.

## Extraction and conventions

Example 1 was transcribed from rendered PDF pages 17–18, printed pages 16–17, paragraph 0093; all twenty surfaces, both spacing states, five functional-group focal lengths and four spectral rows were re-entered. The conditional table is PDF page 28, printed page 27, paragraph 0102. Mechanism and shape descriptions are paragraphs 0068–0069, with Figure 1 on PDF page 29. The original cover identifies Sigma Corporation and inventor Yukihiro Yamamoto, filing 2012-02-03 and publication 2013-08-19.

Lengths are millimetres, positive z is object-to-image, and positive radii have image-side centers. Native nd values are d-line indices; the source rounds its wavelength label to 587.6 nm while the standard catalog reference is 587.56 nm. C/F/g labels are 656.3/486.1/435.8 nm. No spectral relocation of source values is performed. Surface 9 is the iris; surface 15 is the L7/L8 cemented interface. There are ten elements and nine air-separated groups, with no aspheres or camera-side plates.

Surface 20 is explicitly infinite in the numerical table. Paragraph 0068's final-element meniscus description conflicts with this plane rear surface. The numerical table and planar drawing control the implementation: L10 is plano-convex. The raw prose is not silently rewritten and the surface is not changed to a weak sphere.

## Product comparison

The actual user-supplied 460×340 JPEG pixels were materialized through Library and viewed before comparison. Its focus, scale and dimensional accuracy are unspecified. It is an orthographic-style schematic, so photographic perspective is not presumed; neither perspective correction nor geometric optimization is applied.

In the supplied diagram, the gap between L2 and L3 is about 15 pixels across a 279-pixel first-to-last vertex span (5.38%; approximately ±1 pixel per boundary). Example 1 gives 3.6300/69.8400 = 5.20%, whereas Example 2 gives 1.2100/71.0500 = 1.70%. This fixed-front-group spacing is a strong local resemblance in favor of Example 1; G2 focusing cannot change it. The planar last face also resembles Example 1. Conversely, the drawn flat L5 rear/L6 front pair is more literal in Example 2, whereas Example 1 retains weakly curved surfaces. The drawing does not establish a unique factory prescription. The previous unqualified statement that three shapes establish Example 2 is not carried into the new revision.

Fresh official Olympus and OM SYSTEM sources establish the 75 mm, f/1.8 product, Micro Four Thirds mount, ten/nine construction, three ED and two HR elements, single-element internal focus, 0.84 m minimum focus and 0.1× maximum magnification. The release announcement is dated 2012-05-24 and schedules Japanese availability for July 2012. Patent optical length and the marketed 69 mm barrel length have different reference planes. The Sigma/Olympus design-supply, licensing or manufacturing relationship remains unconfirmed.

## Author numerical verification

Fresh author calculations use separate sequential reduced-angle and ABCD implementations. The printed prescription produces EFL 74.5616931749 mm and Gaussian infinity BFD 17.0001535437 mm. The published final gap 17.0008 mm is retained, including its +0.0006464563 mm source-rounded defocus. First-to-last vertex distance is 69.8400 mm and first-vertex-to-image length is 86.8408 mm. This is not a strict optical telephoto-ratio model: TL/EFL = 1.164684; BFD/EFL = 0.228001 is not retrofocus. The patent title's telephoto category is not used as proof of either ratio.

G1/G2/G3 focal lengths are +59.088747/−39.723588/+46.753290 mm. G1a and G1b are +95.456716 and +81.800977 mm. The L7/L8 cemented pair is +28.593086 mm; isolated member powers are distinguished from in-situ cemented interfaces. Surface-by-surface Petzval terms sum to +0.002326143539 mm⁻¹. Pupil and principal-plane values and all ten conditions are retained in results.

The published focus motion is +5.9170 mm imageward for G2, conserving d11+d13 = 13.9100 mm and fixed total track. At the unchanged image plane, the near-state calculation gives EFL 70.4674365 mm, magnification −0.1000221545, object-to-first-vertex distance 760.0860218 mm, and object-to-image distance 846.9268218 mm. This calculated patent endpoint is kept separate from the 0.84 m production specification. The nominal infinity model's tiny residual convergence caused by source rounding is not relabelled a finite published focus state. Near-state Gaussian infinity BFD is not the conjugate image distance or a physical near-focus defect.

The first exploratory condition-8 calculation used only the ED positive members; this was corrected before the Stage 1 freeze to average all positive G1a members L1–L3, as paragraph 0058 requires. All retained source comparisons then pass their documented precision tolerances. No source number was adjusted.

## Glass review

Fresh full primary catalogs were retrieved for HOYA (435 AGF entries), OHARA (433), SUMITA (433), SCHOTT (366) and HIKARI (392), and the complete June 2022 CDGM PDF was coordinate-screened. Every distinct source nd/vd pair was searched without starting with a preferred glass name. Candidate coordinates, differences, primary-source hashes and source rows are embedded in evidence. The screening tolerance is deliberately broader than exact-at-source-rounding agreement; both are recorded separately. Current/legacy and S-/L- families remain distinct. Multiple compatible catalog glasses exist and no vendor or melt is identified.

Only L1–L4 have source-published nC/nF/ng and theta_gF. The mismatch between ratios of rounded line indices and separately printed theta is checked with propagated source-rounding intervals. L5 and L6 do not inherit spectral values merely because their nd/vd match another element. Class-level names will preserve the patent numbers; a complete full-system dispersion model and APO claim are not supported.

## Stage 1 disposition and pending integration

The Stage 1 author verifier passes 44 source/numerical/glass checks. This is CHAT_PREFLIGHT construction evidence, not a fresh Stage 4 audit. Stage 2 must transparently infer clear semi-diameters and iris radius, validate geometry across endpoints and intermediate states, load the real data file, and preserve off-axis losses. Stage 4 requires the separate reviewer's frozen source-first baseline before candidate reconciliation.

No Git write, integration, CSV change, metadata generation, full-corpus test or production build has been performed. Repository-wide gates remain NOT_RUN and INTEGRATION_PENDING. The Stage 1 gate is READY_FOR_DATA only after clean extraction, member-hash verification and exact portable numerical replay.

## Stage 2 construction and actual project checks

All twenty native source rows and the two published variable gaps map directly into the final literal-only data object at scale1. Source radii, glass thicknesses, indices and prescribed image plane are unchanged. The stop remains source surface 9; the shared cemented interface owns downstream L8. The existing output stem is retained and the new archive is explicitly identified as Example 1.

The physical iris radius 11.9931733673 mm is inferred by tracing the infinity entrance radius EFL/(2×1.79) to the published iris plane. Its agreement with infinity F1.79 is calibration. Clear rims are inferred, not measured: L1=25 mm, L2=22 mm, L3=17 mm, L4=15.3 mm, L5=12.4 mm, L6=10.8 mm, L7/L8=11.5 mm, L9=11.3 mm, L10=11.7 mm. Initial L4 rims16 mm failed actual shared-band intrusion,1.59423 mm against1.467 mm allowed; reducing inferred L4 rims to 15.3 mm fixes geometry without changing the prescription. L6 rims were enlarged from 10.5 to 10.8 mm after exact field-edge checking. The format id was corrected to four-thirds while the mount remains micro-four-thirds. These initial failures and resolutions are preserved in evidence.

At21 sampled focus positions, the actual current public project constructor/validator accepts the data, the real renderer applies zero material trim, and every default on/off-axis UI ray passes. Physical stop-aimed bundles at image heights0,6.48 and 10.8 mm retain documented off-axis vignetting; edge-stress UI rays also clip. A separate150-ray native skew grid samples both endpoints with pupil rings0,0.5,0.83 and 0.999999 and 8 azimuths on each nonzero ring:139 rays pass and 11 clip. These finite grids do not certify a continuous full pupil or factory throughput. Ghost continuation never counts as physical transmission. The generic native replay harness was adapted from prior workflow tooling, not represented as a new independent source calculation.

Three aperture quantities remain separate. The source first-order near working value 1.932075 reproduces the printed1.93 using an infinity-only paraxial iris estimate11.611156 mm. The implemented nonlinear infinity-calibrated iris instead gives exact near image-space NA-equivalent f-number1.917549; this comparison with1.93 is retained as a raw FAIL at 0.005. The native UI approximation gives 1.977239 and is also retained as a raw FAIL. Neither result is fitted away, nor is 1.93 advertised as an exact production exposure prediction. Preserving a source-defined first-order convention does not certify a factory physical iris.

The runtime half-field10.557823° is its clear-chief-ray limit for modeled apertures, not the patent half-angle8.235°. The UI default fraction 0.6 and the explicitly aimed source-image-height grids are separately labeled. The approximate intermediate UI distance law is compared with each calculated Gaussian conjugate in native results. Class-only labels all remain unresolved by the current glass catalog resolver, and aggregate dispersion quality remains Abbe-level.

The actual data file is loaded by a strict, bounded JSON-literal TypeScript parser. Duplicate keys, expressions, non-finite values and trailing syntax are rejected. Mutated surface sign and mixed-Example 2 spacing fixtures are detected. CHAT_PREFLIGHT and actual LensVisualizer execution scopes remain separate. Static TypeScript checking, Prettier, corpus tests and build/prerender are NOT_RUN at integration.

## Stage 3 analysis and quantitative claim map

The final analysis was written only after the verified Stage 2 checkpoint. The data file remains byte-identical; no optical field changed during prose authoring. The native SVG caption was shortened to prevent clipping before the replacement Stage 2 checkpoint was sealed; this presentation-only change did not alter any optical result.

Claim mapping:

- Identification, embodiment, maker/assignee, dates and counts: job/raw source cover and actual data metadata; primary manufacturer sourcesM1/M2 for product fields.
- Architecture and ratios: implementedModel[0].eflMm, bfdMm, firstLastVertexMm, firstVertexImageMm, groupsFocalLengthMm, principal/pupil values and telephoto/retrofocus ratios.
- Element paragraphs: actual parsed elements and implementedModel[0].elements; cementedL7L8FocalLengthMm is separate from isolated members.
- Glass and spectra: evidence.glassEvidence coordinate excerpts; facts.spectral and actual element nC/nF/ng/dPgF. Vendor compatibility remains explicitly weaker than identification.
- Focus values: actual var endpoints, facts.focusMovementMm, implementedModel[1] EFL, magnification and object distances; raw near state is |beta|0.10.
- Conditional table: facts.conditionValues, source ¶0058 positive/negative averages, and raw conditional values.
- Runtime/aperture limitations: nativeSummary and raw near_exact_image_NA_fNumber/near_native_UI_effectiveFNumber comparisons; distinct first-order result facts.nearParaxialWorkingFNumber.
- Sample counts and clipping: actual native states, physicalRays, uiRays and skewRays; output summaries enumerate all outcomes.
- Diagram local-gap comparison: retained actual pixel measurements with1 px contour uncertainty and the two independently source-entered gap/span ratios; illustrative registration, not an optimized prescription.

Manual review checked third-person technical prose, paragraph citations, the source's planar-last-surface contradiction, standalone versus cemented power, absence of unsupported APO/MTF or element-level aberration claims, and market/design separation. Structural and rounded numeric assertions are also executed in the portable verifier. Static TypeScript/Prettier/corpus/build tasks remain integration-only NOT_RUN; native execution is not substituted for them.

## Stage 4 correction register (initial)

The independent reviewer identified two provenance overstatements. First, paragraph 0087 explicitly gives 587.56nm for nd, while paragraph 0061 gives the rounded587.6nm; both are now recorded. Second, the successful first-order near-f-number reconstruction does not prove the source adopted that precise convention. The final analysis now calls it a paraxial reconstruction, and explicitly states that the patent leaves the physical iris and precise pupil-aberration/NA convention unspecified. Earlier stage wording suggesting a source-defined convention is superseded by this correction. Neither change alters the data, source numbers or computed optical outputs. The mismatched exact-NA and UI diagnostics remain visible.

The generic nominal-infinity result originally exposed a finite mathematical conjugate of approximately 8.6 km because the preserved source image plane is 0.000646 mm behind Gaussian infinity focus. Final state-facing object-distance fields are null and explicitly mean published INF. The unchanged finite calculation is retained under roundingDiagnostic, and raw matrices/magnification remain intact. This is a representation correction, not a refocus or optical edit.

## Final independent review and gate qualification

A fresh reviewer froze its separate source transcription, calculation code and catalog search before candidate exposure. Fingerprint40f666b407bd56fb7759d4f7b4a1eb4003c3a8832f9f7a53dbff19f67bc416be binds six unchanged content files. Those files are embedded exactly in evidence; the consolidated verifier executes the frozen source code and reconciles final source rows and optical quantities. A digest preserves content, not cryptographic proof of independence.

The reviewer then read the exact Stage 3 candidate, independently parsed its actual data, wrote a closed-form spherical-intersection/Snell path distinct from the author's Newton implementation, and passed 948 checks. All 567 independent physical samples match native classifications:477 transmitted,90 clipped. Maximum image-height disagreement is 6.819e-10 mm and per-surface height disagreement1.325e-9 mm. Minimum sampled glass thickness is 0.9 mm, maximum rim angle42.488794 degrees, and minimum shared-band air clearance0.176794 mm. The stop-straddling gap from surface 8 to 10 was included. Native output was separately rerun and matched exactly; all 138 loaded-module hashes were checked, and both SVG sections/captions were visually inspected.

The final data SHA-256 is 97328c1f5f1a64106152691499c82e81caa0d8e09c892a1db0bdf5df7a11c4fb; final analysis SHA-256 is 93b1602cb8aec191f2561ad9867bf89648f2acc4621cb9e557538174c5f3072e. The reviewer accepted that exact corrected pair with the aperture/production limitations. The independent full audit/code/results/native-comparison record is embedded in evidence, with original reviewed candidate hashes preserved. Consolidation changes evidence/verifier/results/audit hashes only, and final manifest/replay checks bind the delivered bytes.

Post-freeze diagram registration fits translation plus one common axial scale to fixed-group vertices, then predicts G2 at each published endpoint. Fixed-vertex RMS is 1.995 px for Example 1 and 5.269 px for Example 2. This supports the requested Example 1 selection while remaining an illustrative artwork comparison; the largest Example 1 residual exceeds line-width precision and factory identity is unconfirmed. The supplemental Example 2d5 transcription correction from 5.70 to 5.7200 is recorded separately and does not change the frozen Example 1 baseline.

READY_FOR_BATCH is limited to this source-faithful patent-correlation model with an inferred fixed iris and clear apertures. It does not certify production identity, a full pupil, exact finite-conjugate exposure, APO performance or site integration. The two raw near-f-number failed comparisons remain in results. Static typecheck, formatting, corpus sweeps and build remain integration-only NOT_RUN.

Portable replay commands, from an extracted dossier:

    python OlympusMZuiko75mmf18.verify.py --package-dir . --output ../portable-replay.json

For actual native replay, extract the exact shared reference archive linked in evidence/manifest, then run:

    node OlympusMZuiko75mmf18.native.mjs <shared-root>/project OlympusMZuiko75mmf18.data.ts ../native-replay.json

For full independent Pass B replay, materialize evidence.independentPass.stage4.frozen.files verbatim into a temporary directory, save its freeze object as independent_freeze.json, and materialize passB_verify.py from reconciliation.files alongside them. Run that script with --package-dir pointing at the final extracted dossier and --output outside it. No package output should be overwritten while testing.

The shared dependency is a separately verified owner-only Drive archive, Olympus75_Example 1_SharedReferences_3920234.zip, SHA-256 dd3c34cb19ee52c403946b625c6e34321d22e6459a55f7395fa171eb5f756ded. It contains exact pinned project code plus controlling references and primary catalogs. Its fresh Drive download and all 266 payload hashes were verified. Main was rechecked at 2026-10-06T22:26Z and remains 3920234ab22de546bcaacaee275e35bd51eed0ca.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of JP 2013-161076 A Example 1 from page images: 20 of 20 surface rows, the stop position and both focus states agree; engine f 74.5617 mm, total length 86.8408 mm. The rendered section matches the OM System construction diagram: 10 elements in 9 groups, ED at elements 2, 3 and 5, HR at 8 and 10. The applicant is Sigma and neither company confirms the link, so the attribution stays a disclosed correlation. Example 4 fits the diagram's vertex spacing about as well but lacks the three-ED, two-HR glass map.

No data change at deployment.

L5 (1.49700 / 81.61) has no line indices while the same glass at L2 and L3 does, so it traced on the Abbe estimate, and all ten glass labels were coordinate classes. Closed the same day: see the integration section at the end of this log.

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: `patents/JP2013161076A.pdf`, PDF page 29 (printed page 28), Fig. 1 — Numerical Example 1 at infinity, optical axis horizontal, native raster about 400 dpi, measured at 400 dpi. The maker reference is Olympus's published construction diagram for the M.Zuiko Digital ED 75mm f/1.8 (460 × 340 px, unscaled).

Scale. The drawn axis slopes 0.33° across the sheet, so every height is half the top-to-bottom distance of the feature. Along the axis the surface 1 vertex is at x = 447.5 px, surface 20 at 1261 px and the image plane at 1461.5 px: 813.5 px for 69.84 mm and 1014 px for 86.8408 mm, both 11.66 px/mm within 0.3%. All nineteen lens-surface vertex crossings sit within 2.2 px (0.19 mm) of the infinity prescription, so the sheet is Example 1 drawn to scale. Across the axis the sheet is taller: fitting the drawn arcs of surfaces 1, 3, 5 and 10 to their tabulated radii gives 12.62, 12.61, 12.75 and 12.68 px/mm, and the stop marks end 151 px from the axis against the 11.993 mm iris (12.59 px/mm). Heights therefore use 12.65 px/mm (0.0791 mm/px). Reading them with the axial scale would overstate every rim by 8.5%.

| Surface | Before | Fig. 1 | After | Evidence |
|---|---:|---|---:|---|
| 1, 2 (L1) | 25 | rim 26.0 | 25 | +4%, inside measurement noise; maker about 24.8 |
| 3 (L2 front) | 22 | rim 22.9 | 22 | +4%, noise |
| 4 (L2 rear) | 22 | curve ends 20.0–20.1, flat annulus to the rim | 22 | 9–10% over, at the threshold; the maker diagram draws this curve to the tip; retained |
| 5 (L3 front) | 17 | rim 17.2 | 17 | agrees |
| 6 (L3 rear) | 17 | curve ends 14.5 (14.3–14.7), flat annulus to the rim | 14.5 | 17% over. At 17 mm the rim drew 2.0 mm thick against 1.0 mm in the figure and hooked past L4's front corner. Axial F/1.79 ray needs 14.25 mm |
| 7 (L4 front) | 15.3 | rim 15.65 | 15.3 | +2%, noise |
| 8 (L4 rear) | 15.3 | curve ends 12.9–13.2, flat annulus to the rim | 13 | 18% over. At 15.3 mm the R = 22.6517 mm sphere reached 5.95 mm of sag against the 5.76 mm gap to the stop, so L4's rim drew 0.19 mm behind the stop plane; at 13 mm the sag is 4.10 mm, as drawn. Axial ray 12.43 mm, full-field bundle 12.86 mm, so nothing new is clipped. The maker diagram ends this curve at about 12.7 mm |
| STO | 11.993 | marks at 11.9 | 11.993 | not touched |
| 10, 11 (L5) | 12.4 | rim 12.5 | 12.4 | agrees |
| 12 (L6 front) | 10.8 | rim 10.1 | 10.1 | 7% over; moved with surface 13 so the element keeps the drawn proportion. Maker about 10.3. Axial ray 9.12 mm |
| 13 (L6 rear) | 10.8 | curve ends 9.25, flat annulus to the rim | 9.3 | 17% over. Sag 2.97 mm before, 2.16 mm after. Axial ray 8.52 mm |
| 14, 15, 16 (L7, L8) | 11.5 | rims 11.2; the cemented junction ends at 10.1 with L8's face continuing to 11.2 | 11.5 | −3%, noise; surface 15 also serves L8's front face, which reaches the rim |
| 17, 18 (L9) | 11.3 | rim 11.0; curves end 10.0 and 9.8 with flats on both faces | 11.3 | see below |
| 19, 20 (L10) | 11.7 | rim 11.5 | 11.7 | −2%, noise |

L9 is retained although both of its concave curves end 12–13% inside the stored value. It is drawn as a square-cut block level with L8 and L10 in both the patent figure and the maker diagram; the renderer cannot draw flats, so taking both faces at the curve ends would draw L9 1.6–1.8 mm shorter than L8 and L10, a step neither drawing shows. It would also cut the pupil passed at the 10.80 mm corner from 82% to 65% on the strength of a schematic alone. The cost of retaining it is a rim drawn 4.9 mm long against 4.3 mm in the figure.

Maker diagram. It agrees with the model on 10 elements in 9 groups with L7 and L8 cemented, marks ED at elements 2, 3 and 5 and HR at elements 8 and 10, and shows no aspherical element. Scaled from its 279 px vertex span, the rims read about 24.8, 22.0, 16.9, 16.1, 12.2, 10.3, 12.0, 10.8, 11.2 and 11.3 mm for L1–L10 (±0.3 mm), the same order as Fig. 1 and the render: L1 tallest, falling to L6, with the rear group nearly level. Two differences from the patent figure are recorded and the patent figure governs: the maker draws L7's blank taller than L8 (12.0 against 10.8 mm) where Fig. 1 draws them level, and it draws L3's rear face to the tip where Fig. 1 draws a flat annulus. The maker diagram shows stepped flanges on L4, L6, L7 and L9, consistent with the flats in Fig. 1.

Clearance after the edit. The validator accepts the file; the image-circle floor lists no surface; traced field coverage is 100% (10.82 of 10.82 mm at 8.3°); the aperture census traces f/1.79 limited by the iris. Engine focal length 74.5617 mm and half-field 10.558° are unchanged. The exact F/1.79 axial ray clears every rim, with the least margin 0.25 mm at surface 6, and the chief ray to Y = 10.80 mm (ω = 8.24° at infinity, about 7.5° at |β| = 0.10) is unobstructed. The render trims no material at 21 focus positions. A skew-ray pupil census gives, before → after: 84.5% → 81.9% of the on-axis pupil area at Y = 10.80 mm at infinity, 101.6% → 93.7% at 7.2 mm, and 97.0% → 88.6% at the corner at |β| = 0.10. Surface 8 contributes none of that; surfaces 6, 12 and 13 add the mid-field loss the figure's clear apertures imply. The ray-sample counts in the Stage 2 and final-review sections above (231 default rays, 567 meridional samples, the 150-ray skew grid) were taken with the earlier rims.

Open limitations. The renderer joins unequal front and rear rims with a straight edge, so L3, L4 and L6 draw a chamfer where Fig. 1 shows a flat annulus and a cylindrical rim; L4's is the most visible. Surface 4 and both faces of L9 keep rims beyond the drawn curve ends. Fig. 1 is a schematic section with no effective-diameter table, so every value remains an estimate.

## 2026-10-08 — Integration: glass labels and metadata

- Glass. The ten class labels are replaced by the HOYA row at each coordinate: BACD5 (L1, L6), FCD1 (L2, L3, L5), E-FD5 (L4), FD60 (L7), TAFD25 (L8), E-LAF7 (L9) and TAFD35 (L10). HOYA is the one vendor with a row at all seven coordinates to the printed precision, and the published nC, nF and ng of L1 to L4 equal the HOYA catalog values to five decimals (L4's ng 1.69999 is E-FD5; OHARA S-TIM25 gives 1.70011). L1 to L4 keep their published line indices; L5 to L10 moved from the Abbe estimate to the catalog curves, so all ten elements carry trusted dispersion data. Stored nd and νd are unchanged.
- `apd: "inferred"` added to L2, L3 and L5, the three positions Olympus's diagram marks ED.
- Subtitle recased to the catalog form and now names the Sigma patent. Display name, mount, format, `specs` and the nine-blade count reviewed and left as authored.

## 2026-10-08 — Second review: diagram, labels and movement

An independent second look at the lens as the local site draws it, against `patents/JP2013161076A.pdf` Fig. 1 (PDF page 29), the Example 1 tables on PDF pages 17–18, paragraph 0068 and Olympus's construction diagram. The page was shot at infinity, at the |β| = 0.10 end, with the focus-movement overlay at both ends and with the element inspector open on elements 2, 5, 6, 8 and 10. Every figure height below was measured again from the 400 dpi raster, not copied from the section above.

Scale, re-derived. Fig. 1 is embedded at 401 × 403 ppi, so the PDF does not stretch it; the difference is in the drawing. Along the axis the surface 1 vertex is at x = 447.5 px, surface 20 at 1261 px and the image line at 1461.5 px, which is 11.66 px/mm, and the other vertex crossings sit within 1.5 px (0.13 mm) of the infinity prescription. Across the axis, fitting the drawn arcs to their tabulated radii gives 12.61 (surface 1), 12.56 (surface 3), 12.66 (surface 5), 12.65 (surface 8) and 12.7 px/mm (surface 10), mean 12.63. Two features the first pass did not use agree: the image line is 273 px long, so its half-length is the printed Y = 10.80 mm at 12.64 px/mm, and the stop marks end 302 px apart, 11.96 mm from the axis against the 11.993 mm iris. The sheet is therefore drawn 8.3% taller than wide; the first pass's 12.65 px/mm and 8.5% are confirmed to 0.2%. The axis slopes 5 px across the figure, so heights are half the top-to-bottom distance.

Figure heights at 12.63 px/mm: L1 26.0 mm, L2 22.9, L3 17.2, L4 15.7, L5 12.5, L6 10.1, L7/L8 11.2, L9 11.05 and L10 11.5 mm, against 25, 22, 17, 15.3, 12.4, 10.1, 11.5, 11.3 and 11.7 mm stored; all within 4%, and the drawn order of heights is the stored order. Concave curves end short of the rim, at a flat annulus, on surface 4 (20.4 mm by the junction, 21.5 mm by the plane of the annulus), surface 6 (14.3 to 14.9 mm), surface 8 (12.9 to 13.2 mm), surface 13 (9.2 to 9.4 mm), surface 17 (10.1 mm) and surface 18 (9.9 mm).

Where the site and Fig. 1 visibly differed before this pass: L3 ended in a pointed tip, L4 had a sloping top from 15.3 mm at the front to 13 mm at the rear, and L6 had a sloping top from 10.1 to 9.3 mm, where the figure draws all three square-cut with a flat annulus and a cylindrical rim. L9's rim drew 4.9 mm long against 4.3 mm. The group labels under L5 and L6 ran together as "G1b +G2 − IF".

Each of the three bevelled elements was judged on one test: carried to the drawn rim height, does the concave face stay in front of the next drawn object, as it does in Fig. 1?

| Element | Full-height rear face | Fig. 1 | Decision |
|---|---|---|---|
| L6 (surface 13) | at 10.1 mm the rim is 3.24 mm long and stays 2.9 mm clear of L7 at the near end of the focus travel; nothing is passed | flat top 2.9 mm long, annulus 0.9 mm high | squared: surface 13 9.3 → 10.1 mm |
| L3 (surface 6) | at 17 mm the rim reaches z = 25.77 mm, 0.37 mm behind L4's front corner (z = 25.40 mm at 15.3 mm), and the rim is 2.04 mm long; the glass does not touch (0.18 mm air at L4's rim) | annulus 0.3 mm in front of L4's front face, rim 1.0 to 1.1 mm long | curve end kept at 14.5 mm |
| L4 (surface 8) | at 15.3 mm the sag is 5.95 mm against the 5.76 mm gap, 0.19 mm behind the stop plane | annulus 1.5 mm in front of the stop marks | curve end kept at 13 mm |

Changes.

| Field | Before | After | Evidence |
|---|---|---|---|
| surface 13 `sd` | 9.3 | 10.1 | Fig. 1 draws L6 square-cut at 10.10 mm (255 px top to bottom); the full-height face passes no neighbour at any focus position; the validator accepts it |
| `groups` text | G1a +, G1b +, G2 − IF, G3 + | G1a, G1b, G2 IF, G3 | the patent's own group notation; the longer labels collided under L5 and L6 at infinity. Surface ranges unchanged |
| L4 and L10 `role` | "condition8", "Example1" | "condition (8)", "Numerical Example 1" | missing spaces |
| `focusDescription` | "\|beta\|=0.10" | "\|β\| = 0.10" | the patent's symbol |
| header note, analysis | — | — | rim rationale and the pupil-census figures follow the new surface 13 value |

Clearance after the edit. The validator accepts the file, the image-circle floor lists no surface, traced field coverage is 100% (10.82 of 10.82 mm at 8.3°), the aperture census is within 3% of f/1.79, and no face is trimmed at 21 focus positions. Engine focal length 74.5617 mm, half-field 10.558° and f/1.79 are unchanged. The exact F/1.79 axial ray clears every rim (least margin 0.25 mm at surface 6; 8.52 mm needed at surface 13) and the chief ray to Y = 10.80 mm (ω = 8.24° at infinity) is unobstructed at both focus ends. The skew-ray pupil census moves, before → after: 81.9% → 82.7% of the on-axis pupil area at Y = 10.80 mm at infinity, 93.7% → 96.6% at 7.2 mm, and 88.6% → 93.5% at the corner at |β| = 0.10. Surface 12 at 10.1 mm and surface 6 at 14.5 mm still cut the mid-field bundle, and the rear group still limits the corner. These figures replace those in the first-pass section above.

Checked and found correct.

- Prescription: the 20 surface rows, both d11/d13 states, image height and the group focal lengths on PDF pages 17–18 agree with the file.
- Groups: the patent's group table starts G1a at surface 1, G1b at 10, G2 at 12 and G3 at 14, with the stop at surface 9; the four `groups` ranges (1–8, 10–11, 12–13, 14–20) bracket L1–L4, L5, L6 and L7–L10. Fig. 1 also brackets G1 over G1a, the stop and G1b; the site draws one row of labels, so the outer bracket is not repeated.
- Cemented component: one, L7 + L8, surfaces 14–16, labelled D1 on the bracket and on both elements.
- Element names: Fig. 1 carries no element reference signs. The text uses L1ap, L1am, L2m and L3p only as symbols in conditions (7) to (10), so the sequential L1–L10 stand and do not clash with the G-numbered groups.
- Element types against the signs of R: L1–L3 and L5 positive menisci convex to the object, L4, L6 and L7 negative menisci convex to the object, L8 biconvex, L9 biconcave, L10 plano-convex by the table (paragraph 0068 calls it a meniscus; already recorded).
- No aspheric surface in the table; none is marked on the site.
- Stop drawn at surface 9 between L4 and L5.
- Tags: the patent calls the G1a positive glass "low dispersion" (paragraph 0059) and nowhere names anomalous dispersion or a special glass, so no element is tagged from the patent. The three `inferred` tags sit on L2, L3 and L5, where the maker's diagram is coloured ED; its two HR elements are L8 and L10, the two highest indices.
- Focus: index 0 of both `var` pairs is infinity (2.67 and 11.24 mm) and index 1 is |β| = 0.10 (8.587 and 5.323 mm). d11 grows and d13 shrinks by 5.917 mm, so G2 moves 5.917 mm toward the image, as paragraph 0068 and the arrow under G2 state; G1a, G1b and G3 do not move. The overlay shows one moving group with 5.92 mm of travel toward the focus plane, and the slider's far end reads 85 cm for the calculated 0.847 m.

Maker diagram. Ten elements in nine groups with L7 and L8 cemented, ED at elements 2, 3 and 5 and HR at 8 and 10, the same order of heights as Fig. 1. It draws L4, L6 and L9 with stepped rims, consistent with the flats in Fig. 1, and it draws L3's rear face to the tip, resting against L4's front corner, where Fig. 1 draws a flat annulus; the patent figure governs.

Open limitations. The renderer has no flat annulus, so L3 keeps a pointed tip and L4 a sloping top where Fig. 1 draws square-cut blocks. Setting surface 6 to 17 mm would square L3, passes the validator and raises the census to 84.4%, 98.8% and 96.0%, at the cost of a rim twice as long as drawn that reaches 0.37 mm behind L4's front corner; it was tried on the page and not kept. Surface 4 and both faces of L9 keep rims beyond the drawn curve ends, as before.
