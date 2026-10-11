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

Open: Fig. 2 draws L1 square at 26.65 mm, the front of L2 at 21.84 mm and L4 at 13.96 mm. The stored 27 / 26, 23 and 15 mm are 1–7 % from those and were left alone as inside the measurement-noise band of this pass.

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

Open: L3's 1.7859 / 44.1 is labelled NBFD11 (HOYA, νd 43.93) here and S-LAH51 (OHARA, νd 44.20) in the 28 mm sibling, for the same printed pair.

Open: `lensMounts` lists the five SLR mounts of Sigma's product page; the 2006 Four Thirds version is not listed.

Open: the third-party 24 / 28 drawing named in the analysis has no entry in its Sources list; no link was supplied to this pass.

Open: the September 2004 catalogue statements in the analysis (PDF pages 5 and 12) were kept from the earlier text and were not re-read in this pass.

Open: the patent's near state is derivable as above (d11 2.30 mm, back focus 48.13 mm, object-to-image 180.3 mm, travel ratio 0.617 against 0.62) and could become a close-focus keyframe if the infinity-only scope is revisited.
