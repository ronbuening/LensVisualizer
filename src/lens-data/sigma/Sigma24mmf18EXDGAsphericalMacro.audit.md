# Sigma 24mm F1.8 EX DG ASPHERICAL MACRO: source-first audit

## Job and reference versions
JP2001330771A Numerical Example 2; original card and 124,619-byte PDF unchanged. The card and index retain historical source holds (the card's hold on the missing image distance, "do not model", is closed, 2026-10-11; see the last section); October8 READY explicitly approves derived infinity BF38.58mm. Parent recovered no close-endpoint approval. This dossier is infinity-only. Current main14da71d94ed3ab6ccf7aef70066f1e49670440ed: all248 reused project/reference blobs checked against freshly retrieved tree. Workflow Library archive checked byte-for-byte against retained prompt files.

## Extraction and conventions
Original PDF5/printed4 paragraphs0024–0029 directly supplies f24.69/Fno1.85/full field82.44°, all22 table rows, both coefficient sets, d11=5.96/2.30 for infinity/OBJ50. Original PDF4/printed3 paragraph0016 explicitly names d-line; paragraph0017 equation maps standard K=A−1=0. Both0.2mm layers remain explicit, asphere s5 on front of first resin and s15 on rear of second. No source scaling or omissions.10 glass bodies plus2 films,9 air components,2 moving functional groups. The wrapper names Shizuka Takemoto and Norikazu Yokoi; applicant Sigma; filed2000-05-22, published2001-11-30.

## Model transformations
Approved image gap38.58mm is a derived infinity assumption; calculated Gaussian BFD38.579155506 leaves0.000844494mm residual. Published near gap retained in raw evidence; assumed OBJ50-to-s1 yields image48.134601016mm and m−0.383318827. The note48.14 is not the exact rounded calculation. Neither this reference plane nor near image gap is authorized for active model. No finiteConjugates certification. Iris/rim inference is Stage2 work.

## Glass review
Nine coordinates independently searched across retained OHARA, HOYA, Schott, HIKARI, CDGM, Sumita catalogs (>1000 entries). Full candidate residuals and relevant source coefficients in evidence. Reuse is explicitly retained catalog verification, not fresh network retrieval. No material supplier identified by the patent. Two resin entries1.5184/52.1 remain unmatched; native1.60625/63.1 has no sufficiently close catalog match. Any remaining coordinate-equivalent names are spectral proxies, not identified production melts.

## Numerical results
ABCD matrix and sequential reduced-angle recurrences agree. Infinity EFL24.689902525 and BFD38.579155506mm; G1−298.269125573/G2+43.689361657mm; actual claimed inequalities pass. Surface Petzval, individual/cemented/subgroup powers, pupil locations and first-order paths are in results. Hmax absent: departure/Hmax source values cannot independently determine physical clear apertures.

## Correction/discrepancy register
1. READY note says descriptive pages missing: false for the unchanged original. PDF5 contains the selected descriptive/numerical content. No new Google transcription required; no numerical changes.
2. Printed condition3=0.72 vs infinity0.726612832 exceeds rounding tolerance0.005. Keep raw comparison FAIL and validate actual0.6–0.8 inequality. Hypothetical near0.721574120 rounds0.72, but state is not expressly assigned; do not claim repair.
3. Derived close48.14 note differs from exact48.134601016 by0.005398984mm. Calculation-only, no active source correction.
4. Exact production correlation remains unconfirmed. The correctly labeled September2004 catalogue PDF5 and12 control identity; current official diagram inconsistency retained as historical source caution.

## Independent review
Stage4 reviewer is obtaining fresh source-first baseline separately; not yet an approval. (Closed: superseded by the Stage4 disposition below.)

## Gate disposition
Stage1 portable source and first-order checks pass for authorized infinity-only construction. Stage2 must size physically defensible rims/iris and run actual project type/schema/build/render/exact-ray checks. Stages2–4 not yet earned. (Closed: historical Stage1 status; the later sections record the completed work.)

## Pending integration
No repository edits, batch generation, corpus tests, production build, deployment or index changes. (Closed 2026-10-11: historical; the three files are in `src/lens-data/sigma/` and the dated sections below record the changes made there.)

## Stage2 construction and exact runtime
Final inferred surface radii appear in data/evidence. s18/s19=11.35/11.36mm preserve the native-F1.85 exact axial marginal height11.34302098/11.35418343mm. The source does not publish an iris diameter: current-main runtime calibrates entrance radius6.672946628mm to actual stop13.512993540mm; the paraxial-only estimate12.378810993mm is not that physical iris. Under this explicit calibration the default90% shared-band cap11.18898010mm cannot pass the full native axial bundle. A genuine counterfactual with default-cap rims passes schema/render but clips32/257 axial samples at s18. At0.01mm inferred-rim precision, actual validator fails92.65% and passes92.66%; adopted gapSagFrac0.9266 retains0.133719248mm positive clearance. Both resin layers retain positive minimum thickness; slope bounds unchanged; no engine edits.

Real strict TypeScript, validator, builder and production shape/render diagnostics pass against fresh-main verified code.13,878 exact rays cover41.22° native half-field, paraxial sensor-angle proxy and separately solved41.787111879° physical sensor-corner aim, at six field fractions and full/half/quarter entrance radii;257 samples per bundle. All aims converge; zero unknown/numerical failures. Native full-axis257/257, all sampled half/quarter-pupil bundles257/257 and five default fan rays pass. Full-pupil off-axis bundles retain geometric clipping: this is a qualified aperture model, not measured production vignetting or full-field/full-pupil certification.63 no-motion focus/zoom control probes retain identical valid geometry; maximum actual hidden trim0mm.

Catalog-derived explicit C/F/g indices are retained for coordinate-equivalent glasses; runtime resolves six distinct labels on eight material entries but BAFD8 is not present in current catalog. BAFD8 still uses its explicit vendor coefficients' spectral indices, not an invented resolver match. Both resin films and final glass retain native Abbe fallback.

Stage2 READY_FOR_ANALYSIS is bound by the checkpoint manifest after clean replay. Source comparisons and unapproved close hypothesis remain explicitly qualified.

## Stage3 revision and quantitative-claim map
Stage2 r2 replaces the initial checkpoint only to add explicit data-header/focus-description disclosure of the necessary allowance and pupil limits; optical values are identical. The exact data hash binds the rerun runtime/type checks. Analysis uses this r2 data unchanged.

| Analysis or metadata claim | Executed/source fact |
|---|---|
| Name/version/patent/authors/date/example | Unchanged card; original PDF1 wrapper; data structured metadata |
| 10 glass /2films /9components /22rows | Source rows and model-counts checks |
| Native and marketed f/Fno/field/MOD/magnification/mounts | Source paragraphs0024/0028; catalogue PDF5/12; productCorrelation |
| Full-system EFL/BFD/track/principal planes/Petzval | results.implementedModel.firstOrder.system and authoredTrack |
| G1/G2 and six subgroup focal lengths | results.implementedModel.firstOrder.groups/subgroups |
| Per-entry standalone in-air powers | results.implementedModel.firstOrder.materials; parsed elements.fl |
| Hybrid/doublet net powers | results.implementedModel.firstOrder.cemented |
| Coefficients/K/units/layer orientations | Original ¶0017/0025–0027; parsed asph and source mapping |
| Modeled departures/rim geometry | implementedModel.geometry.asphereDepartures/rims/bands |
| Catalog coordinates and spectra/proxy residuals | glassEvidence coordinate audit/selections; actual runtime spectral record |
| Infinity image residual | implementedModel.firstOrder.imageDefocus |
| Unreleased near EFL/image/magnification/distances/travel/ratio | sourceModel.states[1].firstOrder/finiteHypothesis; sourceModel.unreleasedCloseTravel |
| Conditional inequalities and printed residuals | sourceModel.states[0].firstOrder.conditions; results.comparisons |
| Physical vs paraxial stop/pupil radius | runtimeRecord.summary.ep/stopPhysSD; facts.sourceStopRadiusParaxial |
| Necessary local92.66% allowance and positive gap | implementedModel.geometry.bands; exactAxialMarginal; runtimeRecord.checks minimal-local-override |
| Actual type/schema/build/render/current-main | runtimeRecord.checks and current-project-integrity |
| 13,878 exact rays/default fan/corner/clipping | runtimeRecord.summary and bundles; results.comparisons full-field-full-pupil-containment |

Manual review confirms roles are qualified architectural interpretations, source paragraphs support group-level design accounts, shared-interface in-air powers are not added, no APO or exact factory-formula claim is made, and unreleased near calculations are not labeled active. The raw condition3 and full-field/full-pupil failures remain visible. No semantic data change occurred during analysis.

### Claim-map bookkeeping correction before independent reconciliation
The unreleased finite-conjugate helper originally reported objectToImage using the legacy48.14mm hint,180.31mm, while its solved image and analysis correctly gave48.134601016/180.304601016mm. The helper now reports the solved objectToImage180.304601016 and retains adoptedObjectToImage180.31 separately. No source input, data byte, active geometry, or analysis number changed. Stage2r3/Stage3r2 refresh affected source-result/verifier bindings.

## Stage4 independent disposition
Independent source-first reviewer APPROVED the exact data/analysis pair for the qualified infinity-only scope. Data SHA91f453531006f826161a0c867e42de60453caf5225d7629364da43f1bf211050; analysis SHA7d9d99174177f1fce7f7dc956da3d921bab2d16dd3d6f86d50eb5a466de693c2. The unchanged baseline, all22 independently re-entered source rows, separate matrix/sequential/exact-Snell code and report are retained under independentPass and supporting evidence.

Independence is source/method separation, not blindness: the historical card/clearance exposed rounded BF and close expectations. No author numerical arrays/data/analysis/glass labels were consulted before the baseline freeze. Original typed-key canonical fingerprint1b631c7a67f17ec739ece80e40bee5d7f8bb1fc7baafc3604b634488b3b650c5 remains valid under the specified integer-key restoration; baseline JSON file SHA4052b08bc76e227f694d51eb8a0174ca40623534c410444534566b1a67c9f0a7 is retained separately.

The embedded independent fragment adds96 executed checks. Independent native Node loading matches the strict literal parser; nine malformed syntax fixtures and sixteen substantive source/model/baseline mutation probes are rejected. Independent spectral evaluation reproduces all nine enriched entries; computed catalogue Abbe differences remain proxies. Fresh exact scalar tracing confirms the iris distinction, critical radii, both positive film minima and necessity of0.9266. Application reexecution repeats the reviewed real-project harness, not a newly invented independent3D engine.

Final mandatory checks pass; raw source condition3, historical near-image rounding and full-field/full-pupil containment comparisons remain FAIL with supported qualified dispositions. Baseline Hmax and unapproved near reconstruction remain unknown/unreleased. No data or analysis correction was required after the review; the source-only finite-distance bookkeeping correction was already recheckpointed. Final canonical nine-file archive must pass clean extraction/replay and receive an external reviewer exact-byte receipt. READY_FOR_BATCH remains scoped and INTEGRATION_PENDING; no publication, engine/repository/CSV/index edit or file move occurred. (Status closed 2026-10-11; superseded by the dated sections below.)

## 2026-10-11 — Semi-diameter pass against the patent figure

Source. `patents/JP2001330771A.pdf`, PDF page 7 (printed page 6), Fig. 2, the lower of the two sections on the sheet; Fig. 1 above it is Numerical Example 1. The optical axis is horizontal and the sheet is a 200 dpi bitmap; it was measured at 400 dpi. The front page (PDF page 1) gives publication 2001-330771 A of 30.11.2001, application 2000-149429 filed 22.05.2000, applicant Sigma Corp, inventors Takemoto Shizuka and Yokoi Norikazu, matching the data file. The table on PDF page 5 was re-read against the data file: all 22 rows (r, d, n, ν), both aspheric coefficient sets and d11 = 5.96 mm agree.

Scale. Vertex crossings read beside the axis put surface 1 at x = 498.5 px and surface 22 at x = 2416.5 px: 1918 px for 85.83 mm, 44.75 µm/px. A second span, surface 8 to surface 19, is 1102 px for 49.04 mm, 44.50 µm/px (0.6 % apart). Every interior vertex lies within 0.45 mm of the printed spacing (largest at surfaces 14 and 15A, where the 6 px stroke width swallows the 0.2 mm resin layer). The radial scale equals the axial scale: in the column 6.35 mm behind the first vertex, surfaces 2 and 3 are drawn at heights of 22.98 and 12.98 mm against 22.87 and 12.94 mm for R = 130.23 and 45.56 mm. The axis is the row at 3374.5 px. Rims were taken as half the distance between the upper and lower rim lines, which removes the leader lines on the upper side and the 3 px by which the rear group is drawn above the axis; the two sides agree within 2 px for the front group and within 6 px (0.27 mm) for the rear group. The inner end of each flat land was read on both sides the same way.

| Surface | Before | Fig. 2 | After | Evidence |
|---|---:|---:|---:|---|
| 1 / 2 | 27 / 26 | 26.65 | 27 / 26 | Within 1–2.5 %; kept. Fig. 2 draws the rim square. |
| 3 | 23 | 21.84 | 23 | 5 % above the drawing; kept. |
| 4 | 16.5 | 17.6–17.8 | 17.5 | Fig. 2 ends the concave curve at the inner end of L2's rear land (17.62 mm on the lower side, 17.80 mm on the upper), and the land stands where R = 19.5 mm puts a 17.7 mm rim (x = 883 px predicted, 880.5 px drawn). Raised to the largest value the rim-slope limit admits (slope 2.03 against 2.06; 17.6 mm is refused at 2.10). |
| 5A / 6 | 17 / 17 | 16.85 | 16.9 / 16.9 | Lowered by 0.1 mm onto the drawn rim because the gap check from surface 4 is read at the shared height: 17.0 mm gives 7.09 mm of sag in the 7.56 mm gap (93.8 %) and is refused, 16.9 mm gives 6.96 mm (92.1 %). Resin layer and glass front stay equal. |
| 7 | 17 | outer rim 16.85, curve end 14.9–15.1 | 16.9 | Fig. 2 draws L3 as a flat-topped block with a rear land. Kept equal to the front, as on the 28 mm sibling, so the flat top is drawn. |
| 8 / 9 | 15 | 13.96 | 15 | 7 % above the drawing; kept. |
| 10 / 11 | 15 | 14.36 | 15 | 4 %; kept. |
| 13 / 14 / 15A | 15 | 14.52 | 15 | 3 %; kept. |
| 16 / 17 | 14 | 13.42 | 14 | 4 %; kept. |
| 18 | 11.35 | curve ends at 9.2–9.4 | 11.35 | Fig. 2 gives L8 a rear land from about 9.3 mm to the 13.42 mm rim, standing just ahead of L9. The drawn curve end is below the F/1.85 axial ray (11.343 mm), so the ray height governs; kept. |
| 19 | 11.36 | 13.60 | 14 | Fig. 2 draws L9 square to its rim. Raised to the retained rear value so both faces share one height. |
| 20 | 14 | 13.60 | 14 | 3 %; kept. |
| 21 / 22 | 15 | 14.74 | 15 | 2 %; kept. |

The stop was not touched; Fig. 2 draws the stop line to 13.45 mm, and the working radius is 13.513 mm. The repo's automatic figure screen (page 7, crop 0.145, 0.5895, 0.738, 0.8494) returned the same rims where it could isolate an element: L1 26.59–26.77, L2 21.95–22.01, L4 14.10, L5 14.51, L6 14.51–14.63, L7 13.44–13.62, L8 13.62–13.74 mm. Its rows for R1 and L3 read L2's rim, because L3 sits inside L2's outline, and its rows for L9 and L10 read the d20 label under L10; those were discarded.

Overall agreement. The stored rims run about 3 % above the drawing (median ratio 0.97). Against that scale, surface 4 stood 10 % below the drawn shape and surface 19 about 20 % below; nothing else departed by more than 5 %.

Surfaces 4 and 5A. Fig. 2 draws the front corner of L3 inside the mouth of L2, with the end of r4 touching it. The two faces would meet at 17.34 mm. With surface 4 at 17.5 mm and L3 at 16.9 mm, the rear tip of L2 stands 0.53 mm behind and 0.6 mm above L3's front corner, and the air between the faces at 16.9 mm is 0.598 mm. The gap check at that height is 92.09 %, which passes on the file's existing `gapSagFrac` of 0.9266 and would not pass at the default 0.90. Trial heights for L3 with surface 4 at 17.5 mm:

| L3 (5A, 6, 7) | Sag sum in the 7.56 mm gap | Air at the rim | Smallest two-decimal `gapSagFrac` |
|---:|---:|---:|---:|
| 16.7 | 6.712 mm (88.78 %) | 0.848 mm | default 0.90 |
| 16.8 | 6.835 mm (90.41 %) | 0.725 mm | 0.91 |
| 16.9 | 6.962 mm (92.09 %) | 0.598 mm | 0.93 (the file has 0.9266) |
| 17.0 | 7.092 mm (93.81 %) | 0.468 mm | 0.94 |

Surfaces 18 and 19. The two faces would meet at 11.78 mm, so one of them has to stop short. Before this pass both stopped near 11.35 mm; now only the concave rear of L8 does, which Fig. 2 draws with the land, and the front of L9 runs to full height as drawn. The gap check is unchanged, because it is read at the shared height of 11.35 mm: 1.686 mm of combined sag in the 1.820 mm gap (92.65 %), with 0.134 mm of air. `gapSagFrac` was not edited. The stored 0.9266 is the smallest four-decimal value that admits 11.35 mm; as a two-decimal value it would be 0.93 (0.92 refuses 11.35 mm), which would admit surface 18 up to 11.37 mm.

Clearance after the change. The validator reports no errors and the render diagnostics report no hidden trim. The F/1.85 axial marginal ray clears every rim; the smallest margin is still 0.007 mm at surface 18 (11.343 of 11.35 mm), and surface 19 now has 2.646 mm (11.354 of 14 mm) against 0.006 mm before. The chief ray to the 21.63 mm corner (41.78°) clears every rim: 13.48 of 17.5 mm at surface 4, 11.56, 11.43 and 10.29 of 16.9 mm at surfaces 5A, 6 and 7, 7.12 of 11.35 mm at surface 18, 7.89 of 14 mm at surface 19. The image-circle floor lists no undersized surface, traced corner coverage is 100 % (21.65 mm) before and after, and the aperture check is within 3 % of F/1.85 with no rim clip.

Engine values. Focal length 24.690 mm, F/1.85 and stop radius 13.513 mm are unchanged. The paraxial half-field estimate rises from 40.58° to 42.25°, now above the patent's 41.22°; surface 4 limits it in both cases.

Vignetting. A meridional real-ray fan (analytic sphere intersection, stop radius 13.513 mm) gives the width of the transmitted beam at the stop, of 27.03 mm, before and after: 24.57 and 24.60 mm at 14.62° (35 % of the corner field), 23.45 and 23.50 mm at 20.89°, 21.24 and 21.30 mm at 29.25°, 18.85 and 18.94 mm at 35.51°, 12.89 and 14.42 mm at the patent's 41.22°, 12.27 and 13.62 mm at the 41.78° corner. One edge of the beam is cut by surface 18 where surface 19 cut it before. The corner gain comes from surface 4: at 16.5 mm it cut the other edge of the corner beam, and at 17.5 mm the rear of L1 (surface 2, 26 mm) does. L3 at 16.9 mm cuts nothing (the fan is identical with L3 at 17.0 mm), and in the fan every ray that cleared the old rims clears the new ones. The model still passes only about half the stop width at the corner.

Aspheres. Surface 5A moved from 17 to 16.9 mm, so its departure from the base sphere at the rim is +0.590253 mm (it was +0.609277 mm at 17 mm); the slope rises steadily to the rim, with no turnover. Surface 15A keeps 15 mm and +0.663296 mm. The analysis was updated for the 5A departure, for how the semi-diameters were derived, and for surfaces 4, 18 and 19.

Live render. The local page at infinity (the only modeled state; the focus slider is inactive and the closest-focus view is identical) shows L9 as a square-rimmed element, the rear tip of L8 meeting the front of L9 as in Fig. 2, and L3's front corner just inside the mouth of L2. The renderer joins unequal front and rear rims with a straight edge, so the flat lands of L2 and L8 appear as slanted edges, and L1 shows a 1 mm step that Fig. 2 does not draw.

Maker diagram. No maker image was viewed in this pass. Sigma's own web page for this lens shows the 20mm F1.8 section, so it gives no usable section; the coordinator of this pass reports that a third-party 24 / 28 comparison drawing agrees with Fig. 2 in layout, and the analysis records the September 2004 catalogue's 10 elements in 9 groups with the aspherical elements in the Fig. 2 positions. Fig. 2 itself shows 10 elements in 9 groups, five ahead of the stop and five behind, resin aspheres on the front of element 3 and the rear of element 6, and one cemented pair (elements 7 and 8). The patent figure governs the rims.

Open: Fig. 2 draws surface 4 to about 17.7 mm; the model stops at 17.5 mm because of the rim-slope limit (17.7 mm has a rim angle of 65.2° against the 64.2° limit).

Closed 2026-10-11: Fig. 2 draws L1 square at 26.65 mm, the front of L2 at 21.84 mm and L4 at 13.96 mm. The then-stored 27 / 26, 23 and 15 mm were 1–7 % from those; the rim section below sets them to the drawn values.

Open: the gap from surface 4 to surface 5A now relies on the 0.9266 allowance that was set for surfaces 18 and 19. Holding L3 at 16.7 mm would pass at the default allowance, 0.15 mm below the drawn rim.

## 2026-10-11 — Deployment validation and wording pass

Source re-read from the page images of JP 2001-330771 A (`patents/JP2001330771A.pdf`). The prescription and variable-gap tables are images on PDF page 5; the coefficients are text on the same page. All 22 rows of Numerical Example 2 (R, d, nd, νd), both aspheric surfaces (A, A2, A4–A10, 12 entries) and the infinity value of the one variable gap d11 agree with the data file: no mismatches, and no row equals Example 1. The patent's conic A enters as 1 − A(H/R)², so A = 1 is K = 0; A2 is 0 on both surfaces. Resin layers as printed: surfaces 5–6 on the front of L3 and surfaces 14–15 on the rear of L6, each 0.2000 mm, 1.51840 / 52.1, aspheric on the air side. The three examples are f = 27.10 mm, F/1.86, 77.2° (Example 1), 24.69 mm, F/1.85, 82.44° (Example 2) and 27.27 mm, F/1.87, 76.8° (Example 3); the patent has no 20 mm example.

Patent against model. Focal length 24.69 / 24.6899 mm. F-number 1.85 / 1.85: the stop radius of 13.513 mm comes from a real axial ray at the F/1.85 pupil height (paraxial 12.379 mm; the stored 14 mm is not the working radius). 2ω 82.44° is the paraxial angle for a 21.63 mm image height, which the traced chief ray reaches at 41.78°. Conditions (1) and (6) 0.08 / 0.083, (4) 1.25 / 1.247, (3) 0.72 / 0.727. On-axis longitudinal spherical aberration is −0.06 to −0.10 mm across the F/1.85 pupil, in line with Fig. 6. The condition (5) values 0.027 and 0.033 correspond to heights of 15.9 mm on surface 5 and 13.6 mm on surface 15, the F/1.85 axial marginal ray height there (13.57 mm). The patent prints no back focus and no total length (row 22 of the table carries a radius only). The 38.58 mm image distance is the paraxial d-line back focus of the printed table (38.5792 mm), the same basis as the 28 mm sibling's 38.52 mm, and the job card's hold on the missing image distance is closed on that basis.

`sourceErrata`. The entry about the missing back focus was removed: a value the patent does not print is a limit of the model's scope, not a contradiction within the source, and it is stated in the header, `focusDescription` and the analysis. The condition (3) entry stays, as one sentence: the patent prints 0.72 where its own table gives 17.94 / 24.69 = 0.727, outside rounding.

Near state. The patent tabulates only d11 = 2.30 mm at OBJ = 50 (5.96 mm at infinity); d12 from the stop to surface 13 stays 4.69 mm, so the stop travels with G2. Reading OBJ as 50 mm from the object to the first vertex gives a paraxial image distance of 48.13 mm, magnification 1:2.61 (the patent states 1:2.6 for Fig. 7), an object-to-image distance of 180.3 mm (Sigma's minimum focus distance is 0.18 m) and a G1/G2 travel ratio of 0.617 against the printed condition (2) value 0.62. The model stays infinity-only because the patent prints no image distance for the near state.

Checks on the files as they stand after the semi-diameter pass. The surface validator reports no errors, the image-circle floor lists no undersized surface and traced corner coverage is 100 % (21.65 mm). The F/1.85 axial ray clears every rim (smallest margin 0.007 mm at surface 18) and the corner chief ray clears every rim. Full-aperture off-axis beams are clipped first at surface 18, from the smallest field angles (3 % of one side of the beam at 3°, 58 % at the corner).

Maker data. Sigma's product page (https://www.sigma-global.com/en/lenses/24_18/) lists 10 elements in 9 groups, 84.1°, 9 blades, F22, 0.18 m, 1:2.7, a 77 mm filter and SA / Canon EF / Nikon F / Pentax / Sony A mounts. The lens construction image on that page (https://www.sigma-global.com/lenses/24_18_specification_01.jpg) is the 20mm F1.8 drawing, 13 elements in 11 groups, the same image as on the 20mm page; the coordinator of this pass confirmed that by viewing both, and reports a third-party side-by-side drawing of the 24 mm and 28 mm lenses that agrees with the five-plus-five layout of Fig. 2. Fig. 2 therefore governs the section. No `apd` tags are set: Sigma marks no special-dispersion glass in this lens and the patent names none. Wikipedia gives 2001 as the year of introduction, and a Four Thirds version was announced on 2006-09-26.

Glass label. The coordinator changed L1's label to `BAFD8 (HOYA) / S-BAH28 (OHARA) coordinate-equivalent class; supplier unconfirmed`, which resolves to S-BAH28 (1.72342 / 37.96) in the repo catalog; the stored C, F and g indices, from the HOYA BAFD8 dispersion formula, are unchanged. The analysis mirrors the label.

Changed in this pass, with no optical value changed: header comment (all but the semi-diameter note), `subtitle`, `specs`, element `label` and `role` strings, `doublets` text (H1, H2), `focusDescription`, and `sourceErrata` (one entry removed, one reworded). The analysis was reworded in plain technical language. Its maker comparison now states the product-page figures and the wrong construction image, the resin-layer headings and descriptions follow the 28 mm sibling, the glass table lost its qualification column, the focus section gives the near-state reading, condition (5) is related to ray heights, and the last section, renamed "Aperture, Semi-Diameters and Model Limits", is reduced to properties of the model. The statement that beams of half and quarter pupil radius pass at every field was removed: a meridional trace at half the stop radius shows the corner beam clipped on one side at surface 18 (12.02 mm needed, 11.35 mm available). Engine values are identical before and after this pass: focal length 24.689902524838644 mm, F/1.85, stop radius 13.51299353984896 mm, half-field 42.24751553162327°, paraxial back focus 38.5792 mm, no focus travel.

Closed 2026-10-11: L3's 1.7859 / 44.1 was labelled NBFD11 (HOYA, νd 43.93) here and S-LAH51 (OHARA, νd 44.20) in the 28 mm sibling, for the same printed pair; both files now use S-LAH51.

Closed 2026-10-11: `lensMounts` listed the five SLR mounts of Sigma's product page without the 2006 Four Thirds version; `four-thirds` is now included.

Open: the third-party 24 / 28 drawing named in the analysis has no entry in its Sources list; no link was supplied to this pass.

Open: the September 2004 catalogue statements in the analysis (PDF pages 5 and 12) were kept from the earlier text and were not re-read in this pass.

Open: the patent's near state is derivable as above (d11 2.30 mm, back focus 48.13 mm, object-to-image 180.3 mm, travel ratio 0.617 against 0.62) and could become a close-focus keyframe if the infinity-only scope is revisited.

## 2026-10-11 — Front-group rims, Four Thirds mount and glass check

Rims. Four elements now take the heights the semi-diameter pass above read from Fig. 2 (PDF page 7) and left as open items. A second reading of the sheet at 200 dpi, 11.18 px/mm from the 85.83 mm between the first and last vertices, agrees with them within 0.2 mm.

| Element | Surfaces | Was (mm) | Now (mm) | Fig. 2 (mm) | F/1.85 axial ray (mm) |
|---|---|---:|---:|---:|---:|
| L1 | 1, 2 | 27 / 26 | 26.65 / 26.65 | 26.65, square | 6.67 / 6.50 |
| L2 front | 3 | 23 | 21.9 | 21.84–22.01 | 6.49 |
| L4 | 8, 9 | 15 / 15 | 14.0 / 14.0 | 13.96–14.10 | 11.38 / 12.88 |
| L5 | 10, 11 | 15 / 15 | 14.5 / 14.5 | 14.51 | 13.46 / 13.33 |

L5 moves with L4 so that the 0.5 mm step the figure draws between them is kept. L6 and L10 (15 mm against 14.5–14.7 mm drawn), L7–L8 (14 mm against 13.4–13.7 mm) and L9 (14 mm against 13.8 mm) are within 3% and stay. The surface validator reports no errors, no surface clips the axial beam or blocks the corner chief ray, the image-circle check reports nothing undersized and the field-coverage trace is unchanged at 100%. The engine's wide-open vignetting curve at infinity is identical before and after at all 15 field samples (geometric transmission 88.5% at 41.8°). That curve samples the meridional section only; the full-pupil sweep in the second review below finds that L4 at 14.0 mm narrows oblique beams by 4–10% of pupil area between 30° and 41°. Engine values are unchanged: EFL 24.689903 mm, F/1.85, stop radius 13.512994 mm. The live page shows L1 square-rimmed and L4 a step below L5, as in Fig. 2.

Mount. Sigma's press release of 2006-09-26 announced this lens for Four Thirds together with three others (reproduced at https://www.photographyblog.com/news/sigma_announces_4_new_four_thirds_lenses); `lensMounts` now ends with `four-thirds`. `imageFormat` stays `135-full-frame`, the format the design covers.

Glass. L3 (1.7859 / 44.1) is relabelled from NBFD11 (HOYA, νd 43.93) to S-LAH51 (OHARA, νd 44.20), the nearer of the two to the printed 44.1 and the label the 28 mm sibling uses for the same printed pair; its stored C, F and g indices and ΔPgF are the S-LAH51 values of that file. L10 (1.60625 / 63.1) stays `Unmatched`: the patent prints 63.1 for this index in Example 2 (PDF page 5) and in Example 1, which the 28 mm sibling file follows, so it is not a misprint of HOYA LBC3N's 63.72, the only catalog row at that index. The two 1.51840 / 52.1 entries are the hybrid resin layers. The local HOYA, OHARA and Sumita catalog files have no row within 1.5e-5 and 0.03 of any of the three.

## 2026-10-11 — Second review: diagram, labels and movement

Compared. The local page (infinity, `focus=1`, both movement overlays, and the inspector for R1, L3, L6, R2, L8 and L10) against Fig. 2 on PDF page 7 and the text and tables on PDF pages 2–5 of `patents/JP2001330771A.pdf`. Fig. 2 was measured again from scratch on its native 200 dpi bitmap (1280 × 728 px, extracted from the PDF). The axis is rows 336–337. Surface 1 crosses it at column 68 and surface 22 at 1027: 959 px for 85.83 mm, 11.17 px/mm; surface 3 to surface 13 gives 11.19 and the stop to surface 22 gives 11.20, so 11.19 px/mm was used. No vertex is more than 5 px (0.45 mm) from its printed position. Rims are the mean of the upper and lower rim lines. The curve of surface 4 meets L2's rear land at 17.6–17.7 mm, where R = 19.5 mm puts it (land 11.22 mm behind the vertex, 17.65 mm), so the radial scale equals the axial scale there; mid-height points on surfaces 3, 4 and 7 are drawn 1.5–3 % inside the printed radii, which is the accuracy of the drawing.

Rims changed. The four components behind the stop stood 2–4.5 % above the drawing after the front group had been set to its drawn heights, so L4 rendered level with L7–L8 and L9 (Fig. 2 draws it 0.5 and 0.4 mm taller) and L6 rendered 0.5 mm above L5 (drawn 0.15 mm above). They now take the drawn heights; this replaces the sentence in the section above that left them as within 3 %.

| Element | Surfaces | Before (mm) | Fig. 2, upper / lower rim (px) | Fig. 2 (mm) | After (mm) | F/1.85 axial ray (mm) |
|---|---|---:|---:|---:|---:|---:|
| L6 and R2 | 13, 14, 15A | 15 | 163.5 / 161 | 14.50 | 14.5 | 13.70 |
| L7–L8 | 16, 17 | 14 | 151.5 / 148.5 | 13.40 | 13.4 | 12.33 |
| L9 | 19, 20 | 14 | 153.5 / 150.5 | 13.58 | 13.6 | 11.51 |
| L10 | 21, 22 | 15 | 165.5 / 164.5 | 14.75 | 14.7 | 11.44 |

Rims kept, with this reading: L1 26.61 mm drawn (26.65 stored), front of L2 21.81 (21.9), surface 4 curve end 17.6–17.7 (17.5, the rim-slope limit), L3 16.82 (16.9), L4 13.94 (14.0), L5 14.34 (14.5, 1 % above, not repainted). The curve of surface 7 ends at 14.8–14.9 mm and that of surface 18 at 8.7–9.0 mm (its land stands 1.03 mm behind the vertex, 9.3 mm on R = 42.88 mm). Fig. 2 draws the stop line to 13.40 mm; the working radius is 13.513 mm and the STO entry was not touched.

Squared blocks. Fig. 2 draws L2, L3 and the L7–L8 pair as flat-topped blocks with a rear land. L3 already has one height on all three surfaces. Surface 18 cannot follow: 11.355 mm is refused (1.69 mm of combined sag against 1.686 mm allowed in the 1.82 mm gap) and the two faces meet at 11.78 mm. Surface 4 cannot follow: 17.6 mm is refused (rim slope 2.10, 64.5° against 64.2°) and its radius, 19.5 mm, is below L2's 21.9 mm rim. L2 and L8 therefore keep a bevel on the page; the drop on L8 is now 2.05 mm instead of 2.65 mm. Surface 7 at its drawn curve end of 15.0 mm passes the validator but would turn L3's flat top into a third bevel, so it stays at 16.9 mm; its rear face ends in a point 1.6 mm behind the drawn land (7.71 mm behind the vertex against 6.12 mm).

Vignetting. The engine's wide-open curve at infinity is the same before and after at all 15 field samples: 100.0, 97.9, 96.9, 94.8, 93.8, 93.8, 92.7, 91.7, 91.7, 90.6, 90.6, 89.6, 89.6, 88.5 and 88.5 % from 0° to 41.8°. That curve samples only one entrance-pupil radius either side of the chief ray, so a sweep over every launch height was added with the engine's exact tracer. The transmitted meridional fan (13.35, 13.03, 13.08, 13.59, 14.03, 14.20 and 13.72 mm at 0, 10, 20, 30, 35, 41.22 and 41.78°) and the transmitted pupil area over all skew rays (139.9, 135.8, 138.4, 146.2, 152.9, 157.7 and 155.2 mm² at the same angles) are identical with the old and the new rear rims: one edge of every oblique beam is cut by surface 18 at 11.35 mm before any other rear rim is reached, the other by L4 or L1. The same sweep shows that the earlier change of L4 from 15 to 14.0 mm did narrow the oblique beams, which the engine curve cannot see: the pupil area at 30, 35, 38 and 41.22° is 146.2, 152.9, 156.1 and 157.7 mm² against 152.7, 164.4, 173.5 and 168.2 mm² with L4 at 15 mm (4–10 % less). L4 is drawn at 13.94 mm, so that is vignetting of the drawn rim and it stays; L5 and the front of L2 have no effect and L1 only at the corner (155.2 against 157.5 mm² at 41.78°).

Engine values are unchanged by this review: focal length 24.689903 mm, F/1.85, stop radius 13.512994 mm, half-field 42.2475° (surface 4 limits it). The surface validator reports no errors, no surface clips the axial beam or blocks the corner chief ray, the image-circle check lists nothing undersized, corner coverage is 100 % (21.65 mm) and the aperture check is within 3 %. Surface 15A now ends at 14.5 mm, where its departure from the base sphere is +0.580476 mm (+0.663296 mm at 15 mm); the analysis quotes the new value.

Labels changed.

| Field | Before | After | Evidence |
|---|---|---|---|
| `groups` | G1 (1–11), G2 (13–22) | G1a (1–2), G1b (3–7), G1c (8–11), G2a (13–15A), G2b (16–18), G2c (19–22) | The upper bracket row of Fig. 2 (第1a群 to 第2c群) and claims 1–2. The element roles, conditions (3) and (4) and claim 3 are written in these terms. With all eight labels the page puts G1 between G1b and G1c and drops G2 to a second row; the six read as one row under the right elements. |
| `type` of R1, R2 | Hybrid resin negative / positive meniscus | Hybrid Resin Negative / Positive Meniscus (1× Asph) | Each layer carries one aspheric surface (5 and 15, ¶0026–0027). |
| `focusDescription` | "both groups advance and the gap d11 … closes … at an object distance of 50 mm" | names G1 and G2 by their sub-groups, gives the printed travel ratio 0.62, says the gap narrows, and gives OBJ = 50 as printed with its reading | Claim 1, ¶0006, table on PDF page 5. |

Checked and found correct. The patent designates no individual elements, so L1–L10 in sequence is right; R1 and R2 are the 0.2 mm resin layers, labelled "Element 3 resin layer" and "Element 6 resin layer". Every `type` agrees with the signs of the radii, and every `role` is true. Only 5A and 15A carry the aspheric marker and an `asph` entry. H1 (5A–7), H2 (13–15A) and D1 (16–18) bracket the two hybrids and the one cemented pair. The stop is surface 12, 5.96 mm behind L5 and 4.69 mm ahead of L6, and is drawn there. No `apd` tag is set and none is due: the patent text gives only the d-line index and Abbe number of each glass (¶0016) and names no glass or dispersion class. The front page gives publication 2001-330771 A of 30.11.2001, applicant Sigma Corp, inventors Takemoto Shizuka and Yokoi Norikazu, as in the data file. No maker image was viewed; the record above (10 elements in 9 groups, resin aspheres on the front of element 3 and the rear of element 6, no special-dispersion glass marked) is consistent with the labels.

Movement. The model has no variable gap and no zoom. The focus slider is shown as not modeled, the diagram at `focus=1` is pixel-identical to infinity, and the movement overlay reports no modeled movement. The patent's focusing (claim 1, ¶0005) moves G1 and G2 toward the object with the gap between them decreasing: d11 5.96 → 2.30 mm at OBJ = 50, d12 fixed at 4.69 mm, so the stop goes with G2. A paraxial trace made for this review, with the object 50 mm ahead of surface 1, gives an image distance of 48.135 mm, 1:2.61, G2 advancing 9.555 mm and G1 5.895 mm, a ratio of 0.617 against the printed 0.62. `focusDescription` states this direction and ratio.

Open: the page cannot draw the rear lands of L2 and L8 (it shows bevels) or of L3 (it shows a pointed rear rim).

Open: the resin layers are named R1 and R2, which are also the labels of the first two radii in Fig. 2 (r1, r2); most hybrid lenses in the catalog name such a layer after its glass (L3r, L6r). Left unchanged because the 28 mm sibling uses the same names; that file also still has G1 / G2 and the lower-case resin types.

Open: the movement overlay now counts six groups; the patent's focusing units are G1 and G2.
