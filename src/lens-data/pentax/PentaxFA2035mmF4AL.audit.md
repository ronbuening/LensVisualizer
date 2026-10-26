# Continuous-zoom review, 2026-10-23

Status: candidate awaiting independent repository integration and verified cloud delivery. Not deployed or manufacturer-validated.

US6246529B1 Example5, PDF17 col3 and Fig25/PDF15: G1 first moves imageward then objectward. Keep D10 and rear image distance piecewise linear and solve D7. The source-required reversal emerges near normalized zoom0.794. This is one constrained inferred visualization path, not unique recovered cam dimensions. No finite focus reconstructed.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

# Pentax FA 20–35mm F4 AL: independent qualified Stage4 audit

## Disposition

The corrected pair is approved only as USER_APPROVED_QUALIFIED_DELIVERY_LINEAR_ZOOM_APPROXIMATION. Last standard gate: READY_FOR_DATA. The standard zoom-reversal-keyframes and intermediate-parfocality checks remain FAIL. This is not READY_FOR_BATCH. Integration is INTEGRATION_PENDING.

The exact user approval, preceding question, and bounded scope remain in qualification.json. Approval permits the two native endpoints and linear interpolation with limitations. It does not waive native optical, aperture, geometry, source or analysis checks.

## Source, references and independence

The fixed card selects US6246529B1, Example5. Original patent and card bytes are unchanged. Tables5/7, Figures17/19/25, definitions and motion prose were independently re-extracted from rendered original pages before candidate access. Frozen baseline fingerprint:4feb42b7851e9ebda8147800b38008be6bc52af863b993f64a1d9202216079b7.

The baseline includes independent sequential and matrix calculations, complete original source rows/aspheres, source-precision results and fresh six-manufacturer catalog review. Its full code, inputs, results and hash manifest are preserved in evidence.independentPass. No prior author values were used to establish that baseline. Candidate dossiers were read only afterward. This continuation has prior-review exposure and does not claim a second blind pass.

Controlling project snapshot5c25e4289c6e090eb44177e907d901dfe3cef76c, source/reference hashes and exact file inventories are retained. The final verifier embeds a separately identified independent implementation, replays the original source baseline in an isolated temporary directory, independently parses the literal final data, and calculates final native optics, apertures and geometry. Actual Node execution is separately recorded and hash-bound; portable replay does not claim to rerun the app.

## Submitted failure and justified aperture correction

The first submitted qualified Stage3 archive was9f0fabd00453543428a5d97cabee377cc337bc4edb4574bb90000fcfe24c3ada, data7d7b6907c7a836ecf52da6c6fa305e1b3c5acfcca5e131f9281a5d0c80fd06c1. Its default fan passed, but independent native checks failed: the wide47.8degree chief hit exterior1 at16.268279934mm against15.5mm; the tele fullf/4ray first clipped exterior10, with source12 ultimately limiting the opening to approximatelyf/4.45247. These were unrelated to the approved motion approximation. The failed review and exact traces are preserved in evidence; they were not waived.

The author corrected only unpublished inferred clear radii, constrained by original Figures17/19, exact required ray envelopes, physical surfaces and current geometry policy. Front1 was increased15.5→17.6mm while rear2 stayed15.5mm; the rear surface's spherical-domain bound does not apply to the front cap. Other affected faces are enumerated below. No published radius, medium, aspheric term, spacing, endpoint, image plane or source quantity changed. The native iris remains an explicitly inferred existing from-nominal-fno schedule.

| Surface | Earlier inferred SD mm | Corrected inferred SD mm |
|---|---:|---:|
| 1 | 15.5 | 17.6 |
| 8 | 8.5 | 8.9 |
| 9 | 8.5 | 9.1 |
| 10 | 8.5 | 9.3 |
| 11 | 8 | 9.6 |
| 12 | 8 | 9.7 |
| 13 | 8 | 9.4 |
| 14 | 8 | 8.9 |
| 15 | 8 | 8.7 |
| 16 | 7 | 7.7 |
| 17 | 7 | 7.3 |
| 19A | 7.5 | 7.9 |

The corrected Stage3 archive511484b08b5e0c5e3c842f47fe94e3bc0496458726d97be1a4f9aed1945b402d and manifest2ae3c0ec3e444f3e8b9ed3f7653c07fbd6564dc333b95cb9b1000279b066e0a1 preserve the author handoff. Final data remains byte-identical to corrected data9f4a32eedaeb4ed81e86ac14905833ed4c26a60d2f1f3e1cb6fef86e3d2e5214. Stage4 updates review/disclosure and verification artifacts only.

## Numerical source and motion review

Literal EFLs are20.603183309272/34.011153284341mm and BFDs36.909248900752/53.149395471527mm. Source image gaps36.90/53.15 remain literal. Standalone component/group powers, pupils, reference planes, Petzval contributions and optical counts independently agree. Ten photographic elements/eight groups require eleven material entries because the hybrid resin layer remains separate.

Condition1 computes0.528337061894 from printed endpoints against0.529, a strict half-unit FAIL. Its native rounded-input interval[0.527868852459,0.528805970149] overlaps the printed interval. Independently, a shared physical-table witness within0.782185907332 source half-units simultaneously matches both EFL/BFD summaries and condition1. Nonlinear condition1=.528510004792; all native EFL/BFD residuals remain within0.005mm. The portable verifier recomputes this witness from the perturbed source parameters and actual printed tolerances. It does not adopt those perturbations or erase literal failures. Condition2 and both governing broad inequalities pass.

Three rigid optical groups and two independent internal gaps leave one function undetermined after focal length and fixed-image infinity constraints. Fixed stop-to-G3 spacing adds no missing constraint. Independent source-only trajectories demonstrate nonunique reversal locations; no unique source cam was recovered. The user instead authorized literal endpoint linear interpolation. The real midpoint defocus is+2.098128mm; the21-point sampled maximum is+2.134752mm. G1's described reversal remains absent. No compensating focus or invented midpoint is inserted. Both source states are infinity;1e15m is a UI sentinel, not marketed MFD.

## Geometry, aperture and current runtime

Independent21-state,513-radius-per-band calculations retain positive edge thickness, actual rim slopes within the unchanged cap, and shared-band air-gap intrusion within the unchanged0.90reserve. The minimum sampled glass edge thickness is0.275271mm. The actual state-native renderer reports zero hidden trim across21zoom stations and both infinity-sentinel controls.

Independent exact stop-aiming confirms native source chiefs and full nativef/4axial edges clear. Full current physical-iris axial rays and exact format-corner chiefs also clear across21zoom samples. The minimum inferred-SD/required-envelope ratio is1.080231529 at11, preserving at least8percent clearance. These finite checks are not continuum proof.

Current taxonomy uses43.3mm diagonal, radius21.65mm. Its exact endpoint corner angles are47.831725322/32.660354183degrees. The geometric36×24mm corner radius21.633307653 was checked separately, with endpoint angles47.810284498/32.640499203degrees. Native source angles47.8/32.6 remain distinct and unchanged.

Actual normal UI rays use shared defaults: six axial fractions and five off-axis fractions at0.6field. All default axial rays transmit. Across21zoom×2focus settings, twelve off-axis rays first clip at exterior16/17; none first clips inside a cemented group. This matches the documented exterior-vignetting criterion. Full source-field outer-pupil diagnostics retain losses: at wide only the chief among the five tested edge-field pupil samples survives; tele retains four. No universal full-field/full-pupil illumination or production-vignetting claim is made. First physical clips remain separate from later ghost continuation.

Inferred endpoint iris radii are6.781221979842/8.753142418938mm from exact nativef/4calibration. Calibration is not independent source diaphragm evidence. No source aperture, application policy or ray margin exception was adopted.

## Glass, aspheres, metadata and analysis

All source nd/Abbe values and the hybrid boundary remain unchanged. The two native conics map directly to runtimeK; coefficients and geometric departures at corrected SDs were rechecked. Raw catalogs from six manufacturers were independently reviewed; no supplier/melt, line indices, anomalous dispersion or APO claim was adopted. Numerical Fraunhofer wavelengths are clearly model conventions, since the patent prints line labels without numerical wavelengths.

Primary Ricoh facts support the qualified production correlation; exact patent-to-production identity and release timing remain unconfirmed. Metadata, every material label/value and stored power, counts, focus scope, source conditions, aspheres, references and quantitative prose were reconciled against the final data and independent results. The analysis distinguishes source values, inferred apertures, calculated working values and approved interpolation.

## Reproduction and remaining work

The consolidated verifier retains genuine stage2FAILs for intermediate-parfocality and zoom-reversal-keyframes and returns nonzero accordingly. Every independent stage4check must pass. Manifest blockers explicitly preserve those accepted failures and their scope. This separate qualified approval cannot be interpreted as a normal Stage2/3/4gate advancement.

Original source and frozen baseline bytes remain immutable. Clean extraction, full inventory/content hash checks, stable numerical replay and actual pinned-runtime record binding are required before final handoff. Typecheck, Prettier, corpus tests, full build, metadata generation and integration remain NOT_RUN. No repository change, unmerged code adoption, upload or publication occurred.

## Quantitative claim map

- Original identities, prescriptions, source locators, catalog records: evidence.rawPrescription and independentPass.frozenArtifacts.
- Independent source optics/powers/Petzval/pupils/motion: results.independentBaseline, recalculated on every replay.
- Corrected actual data mapping, full iris, native/format chiefs,21-state geometry and aperture margins: results.independentFinalModel and independent stage4checks.
- Source compatibility witness: results.independentSourcePrecisionWitness, with raw comparisons retained separately.
- Actual defaults, physical and ghost events, renderer and taxonomy-corner checks: runtime.json, bound by data/evidence/script/project hashes.
- Rejected undersized submission, exact first clips, old/new inferred values and independent runtime corroboration: evidence.independentPass.postExposureArtifacts.
- Scope of qualification and retained normal failures: qualification.json and manifest.blockers.


## V2 conversion — 2026-10-18

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. The earlier full-catalog test attempt on a prior revision was resource-killed and is not a pass; no full-catalog pass is claimed here. This format conversion is not deployment or complete optical acceptance.

Retained package status: Qualified endpoint-linear zoom approximation. Standard gate READY_FOR_DATA; reversal-keyframe and intermediate-parfocality FAIL. Not READY_FOR_BATCH.

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 170 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.009248900752240274mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.

## 2026-10-25 — Semi-diameter pass against the patent figure

Basis of the semi-diameters after this pass: estimated from FIG. 17 of US 6,246,529 B1 (cross-checked on FIG. 19), floor-checked by exact real-ray trace. The patent publishes no effective diameters, and the STO keeps its engine-derived radius.

Source and figure. `patents/US6246529.pdf`. The brief description of the drawings (PDF page 16, column 2) names FIG. 17 as the fifth embodiment at the short focal length extremity. FIG. 17 is on PDF page 11 (sheet 10); FIG. 19, the same example at the long extremity, is on PDF page 12. Both are clean line drawings with no ray bundles, and the group brackets sit above the axis. They were measured at the native 300 dpi raster (2320 × 3408 px per page). The drawn element centres sit about 2 px below the axis line, so each rim is half the distance between the drawn top and bottom edge lines, not a one-sided reading. The FIG. 19 axis is tilted about 0.5°, so heights there were read column by column.

Scale. In FIG. 17 the axis crossings run from x = 682 (surface 1) to x = 1580 (19A). That is 898 px for the 79.016 mm vertex span at the wide state, or 0.0880 mm/px. The sub-spans 1→8 (0.0879) and 8→19A (0.0882) agree within 0.4 %, and every intermediate crossing falls within 2 px of the prescription. FIG. 19 gives 0.0874 mm/px (1→7) and 0.0879 mm/px (11→19A). Its element heights read 1–3.6 % larger than FIG. 17's, so the figure column below is the mean of the two panels. Every element is drawn square-cut except L1, whose concave rear face meets a flat flange step well inside the front rim.

| Surface | Before mm | Figure mm | Ray floor mm | After mm | Evidence and decision |
|---|---:|---:|---:|---:|---|
| 1 | 17.6 | 18.6 | 16.28 chief, wide | 17.6 | +5.5 %, inside noise; kept |
| 2 | 15.5 | 14.3 | 13.10 chief, wide | 14.3 | −8 %; figure, maker diagram and the L1/L2 air gap agree; applied in the follow-up below |
| 3 / 4 / 5A | 14.0 | 14.1 | 11.97 / 11.01 / 10.87 chief | 14.0 | agree; hybrid layer kept with L2 |
| 6 / 7 | 12.3 | 12.5 | 9.56 / 9.06 chief | 12.3 | agree; kept |
| 8 | 8.9 | 8.8 | 8.16 axial, tele | 8.9 | agrees; kept |
| 9 / 10 | 9.1 / 9.3 | 8.8 | 8.33 / 8.59 axial, tele | 8.9 / 8.9 | squared to surface 8, as the cemented G2 pair is drawn square-cut |
| 11 / 12 | 9.6 / 9.7 | 8.35 | 8.89 / 8.96 axial, tele | 9.0 / 9.0 | figure 13–14 % smaller; lowered to the f/4 tele beam, square as drawn |
| 13 / 14 / 15 | 9.4 / 8.9 / 8.7 | 8.1 | 8.68 / 8.24 / 7.97 axial, tele | 8.7 / 8.7 / 8.7 | figure 7–14 % smaller; one radius at the surface 13 beam, square as drawn |
| 16 / 17 | 7.7 / 7.3 | 6.8 | 7.06 / 6.72 axial, tele | 7.1 / 7.1 | figure 7–12 % smaller, and L9 drawn clearly smaller than L10; floor-limited, square as drawn |
| 18 / 19A | 7.5 / 7.9 | 7.7 | 6.74 axial / 7.23 chief | 7.5 / 7.9 | within ±3 %; kept, so neither asphere's height changed |

The earlier package sized surfaces 8–17 at about 1.08 times the required ray envelope, a policy margin rather than figure evidence. This pass follows the repository procedure instead. Where the drawing is smaller than the f/4 tele axial beam, the rim sits at that beam rounded up to 0.1 mm. Where the drawing is larger than the beam, the rim follows the drawing. The figure itself draws L6, the L7/L8 pair and L9 about 3–7 % inside the f/4 tele beam, so those three stay larger than drawn.

Clearance after the edit, from an exact meridional trace over all 201 zoom stations at infinity with Y = 21.65 mm: no axial clip and no chief block. The tightest axial margins at the tele f/4 beam are 0.02 mm at surface 13, 0.04 mm at 12 and 16, and 0.11 mm at 11. The repo validator passes at the default 0.90 gap-sag fraction. The image-circle check reports nothing undersized, and traced corner coverage reaches 21.65 mm at all 201 stations. Engine values did not move: EFL 20.603 mm, f/4 at every station, half-field 42.612° and every zoom half-field entry unchanged. Only the drawn stop-housing radius moved, 9.3 → 8.9 mm. The engine's geometric transmission, wide open at infinity, keeps the 47.8° wide corner at 55.2 %. Between 26.9° and 44.8° at wide it falls by 1.0–3.1 points (41.9°: 86.5 → 84.4 %), and at mid zoom and tele by at most 2.7 points (tele 32.7°: 93.2 → 91.9 %). This was sampled at normal density, infinity and 21 zoom positions. All 126 default axial rays still transmit. Default off-axis rays clipped 7 of 105 before (first clip at 16 or 17) and 10 of 105 after, all first clipping at exterior surface 16, one ray per state from zoom t = 0.55 to tele. The analysis claim of one exterior clipped off-axis default ray at tele and none at a cemented interface still holds. A replicate of the 0 / 60 / 100 % source-field fans gives the same survivor counts before and after: chief aimed through the stop centre, with the five default off-axis offsets at 47.8° and 32.6°.

Live render. Checked at 20.6 mm and 34.01 mm against FIG. 17 and FIG. 19, with a figure/render overlay kept outside the repo. The G2 pair and both G3 doublets now render square-cut as drawn, and L9 now renders smaller than L10 as in both figures. L6 and the L7/L8 pair remain about 7–8 % taller than drawn because the beam needs that height. L1's front rim sits about 1 mm below the drawn outer edge, which is within noise.

Manufacturer construction diagram, a low-resolution Ricoh image. It shows 10 elements in 8 groups: L1, the hybrid L2, L3, the cemented G2 pair, the stop, L6, cemented L7/L8, L9 and L10, matching the data. It colours element 2 (the hybrid) and element 10 (the last) as aspherical, matching surfaces 5A and 19A. Its G2 pair, L6 and L7/L8 are drawn at about one height, consistent with the new values. Its L1 rear face ends at about 0.78 of the front rim, as the patent figure (0.77) does, against 0.88 in the data.

### Surface 2 follow-up

Both figure panels (14.1 and 14.4 mm) and the maker diagram put the rim of L1's concave rear face about 1 mm below the earlier 15.5 mm. At 15.5 mm the rendered L1 rim also reached axially behind L2's front rim, where the figure leaves about 1 mm of air. Trials at 14.3, 14.5 and 14.8 mm all pass. No trial shows a blocked chief at the 21.65 mm corner at any of the 201 stations; the largest chief height at surface 2 stays 13.10 mm at wide, with the full corner bundle at 13.81 mm. Traced corner coverage stays 201/201, and the validator passes. Engine geometric transmission is identical to the 15.5 mm case at every sampled field at wide and tele: 55.2 % at the 47.8° wide corner, 94.8 % at 32.9° (about 0.7 of 47.8°), 91.9 % at the 32.7° tele corner. The coordinator accepted the paraxial half-field drop, so 14.3 mm, the figure value, is applied.

The engine's paraxial half-field, which surface 2 limits at the wide end, falls from 42.612° to 40.322°. The per-station half-field changes only from 20.6 to 23.1 mm, the first 40 of 201 stations, and is unchanged from there to tele. The default off-axis fan at wide moves from 25.57° to 24.19°. The default-ray census is unchanged at 126/126 axial rays transmitted and 10/105 off-axis rays clipped, all first at surface 16. In the live render L1's flange step now sits ahead of L2's front rim, as in FIG. 17.

### Coordinator glass and metadata changes

These were made in the same integration pass, outside the semi-diameter work. Glass labels are now catalog equivalents with the production supplier unspecified. They are OHARA S-LAH66 (L1), S-LAH65V (L2 and L5), S-TIH53 (L3 and L9), S-NSL36 (L4), S-BSM28 (L6), S-FSL5 (L7), S-LAH53 (L8) and HIKARI J-SK5 (L10). OHARA S-BAL35's νd of 61.14 does not round to the printed 61.2, which is why L10 takes the HIKARI glass. The resin layer L2R stays unmatched. Every label resolves at the patent coordinate.

The display name is now "PENTAX SMC FA 20-35mm f/4 AL". The subtitle and spec lines were rewritten, and the catalog design f-number is 4. The close-focus distance now holds Ricoh's marketed 0.3 m instead of a 1e15 placeholder, and focus remains unmodeled. The focus description states the inferred zoom path: linear G2–stop and back-focus laws with the G1–G2 spacing solved for infinity focus. The analysis was revised to match these changes. It covers the glass table and element lines, the zoom-path and focus prose (the path now reproduces a G1 reversal near 31.1 mm), the colour-model statement and the new surface-2 half-field. Package-process status lines and evidence-file references were removed, and the source facts and numbers kept. The source-field survivor counts now quote this pass's replicate: chief aimed through the stop centre, default offsets, 5/5 and 3/5 at wide 60 % and 100 %, 4/5 and 4/5 at tele. The package's earlier 1/5 at wide 100 % came from a different pupil-aiming method that could not be reproduced here.

## 2026-10-25 — Second review: diagram, labels and movement

This review is independent of the semi-diameter pass above. It compared the local page with FIG. 17 (wide, PDF page 11) and FIG. 19 (tele, PDF page 12) of `patents/US6246529.pdf`. It also used the patent text on PDF pages 16–20 and the coordinator's capture of the Ricoh construction diagram. The page was checked at 20.6, 27 and 34.01 mm, at `focus=1`, in both zoom-motion overlays, and in the L2R and L10 inspectors.

Re-measurement. The rims were read again from the native 2320 × 3408 raster. In FIG. 17 the vertex crossings run from x = 683 (surface 1) to x = 1579.5 (19A). That is 896.5 px for 79.016 mm, or 0.0881 mm/px; the sub-spans 1→8 and 8→19A give 0.0880 and 0.0882. In FIG. 19 the 58.28 mm tele span covers 663.5 px, or 0.0878 mm/px. Each rim is half the spacing between the drawn top and bottom edges. FIG. 17 gives L1 front 18.55 mm (FIG. 19: 18.73) and L1 rear-face end 14.2 (14.3). L2 and its resin layer read 14.1, L3 12.5, G2 8.8, L6 8.4, L7/L8 8.1 and L9 6.8 (FIG. 19: 7.0). L10 reads 7.7 (FIG. 19: 7.9) and is drawn square-cut. These agree with the first pass within 0.2 mm.

Silhouette differences on the page before this review:

- L10 rendered with a slanted bevel, front 7.5 mm and rear 7.9 mm, where both figures draw a square-cut block.
- L1's front rim sits 0.95–1.1 mm (5–6 %) below the drawn rim. The drawn flange step shows as a straight slant from the 17.6 mm front rim to the 14.3 mm rear-face rim, because the renderer cannot draw a step.
- L6, the L7/L8 pair and L9 render 4–8 % taller than drawn. The f/4 tele axial beam needs that height (9.0, 8.7 and 7.1 mm against beams of 8.96, 8.68 and 7.06 mm), so they stay.
- Everything else overlays the figure within one or two pixels: the hybrid L2/L2R block, L3, the G2 pair, the stop position and every vertex spacing.

| Item | Before | After | Evidence |
|---|---|---|---|
| Surface 18 `sd` | 7.5 | 7.9 | L10 drawn square-cut at 7.7 / 7.9 mm in FIG. 17 / 19. Raising the front face to the stored 19A rim squares it without moving the asphere's rim. Floors at 18 are 6.74 mm axial and 6.52 mm chief. |
| L2R `type` | Negative Meniscus | Negative Meniscus (1× Asph) | Carries 5A, marked 5* in Table 5 |
| L10 `type` | Positive Meniscus | Positive Meniscus (1× Asph) | Carries 19A, marked 19* in Table 5 |
| `role`, all 11 entries | Package text "Native material segment; standalone air focal length does not express its cemented or in-situ power." | One-line roles from the patent's element description (PDF page 18, column 6, Embodiment 3, which Embodiment 5 follows) | The old text was the same for every entry and described uncemented L1, L3, L6, L9 and L10 as cemented |
| `diagramLabel` | Absent; the diagram drew ids 1–11, so L3 showed as 4 and L10 as 11 | L1–L10, plus L2R on the resin layer | The patent gives no element designations; sequential numbers now match the names and the ten-element count |
| Group bracket text | G1 / G2 / G3 | G1 (−) / G2 (+) / G3 (+) | Column 3: negative first lens group 10, positive second 20, positive third 30 |

The analysis now says L10 carries one 7.9 mm radius on both faces, and its L2R and L10 headings match the new type strings.

Clearance after the edit. An exact meridional trace at Y = 21.65 mm over all 201 stations finds no axial clip and no chief block. The validator passes at the default 0.90 gap-sag fraction, the image-circle check reports nothing undersized, and traced corner coverage reaches 21.65 mm at all 201 stations. The engine values did not change: EFL 20.603 mm, f/4 at every station, half-field 40.322°, and every per-station half-field. Surface 18's own field limit rises from 45.8° to 47.3° at wide and from 38.2° to 39.6° at tele, still above 19A's 43.4° and 35.9°. The engine's wide-open geometric transmission at infinity is identical at wide, mid and tele, before and after. It is 55.2 % at the 47.8° wide corner, 81.0 % at 39.1° at mid zoom and 91.9 % at the 32.7° tele corner. The default-ray census is unchanged: 126 of 126 axial rays pass and 10 of 105 off-axis rays clip, each clipping first at surface 16.

Checked and found correct:

- Group brackets cover surfaces 1–7, 8–10 and 11–19A, as the Embodiment 3 text gives them (PDF page 18). The cemented brackets are HYBRID 3–5A, D1 8–10 and D2 13–15.
- Only 5A and 19A are aspheric, matching 5* and 19* in Table 5 (PDF page 19), with the coefficients on PDF page 20.
- The stop sits between surfaces 10 and 11, 1.700 mm ahead of 11, and moves with G3 at every station, as column 3 states.
- There are no `apd` tags. The patent prints only nd and ν, and the maker diagram marks only the aspherical elements.
- The 201 zoom stations ascend from 20.6 to 34.01 mm, and the two printed ends are labelled Wide and Tele. Gap 7 falls monotonically from 14.851 to 1.200 mm and gap 10 from 8.485 to 1.400 mm. The back focus rises monotonically from 36.90 to 53.15 mm.
- Measured from the image plane, G1's front vertex goes from 115.916 to 111.231 mm at 31.15 mm, then back to 111.430 mm at tele. That is 4.685 mm toward the image and a 0.199 mm reversal toward the object. G2 goes from 78.505 to 87.670 mm, 9.165 mm toward the object, and G3 from 61.820 to 78.070 mm, 16.250 mm toward the object. Both move monotonically. This matches column 3 and FIG. 25 (PDF page 15), and the zoom-motion overlay shows the same directions at both ends.
- Focus is not modelled. The slider reads "Not modeled", `focus=1` draws the infinity geometry, and the focus description and the gap labels G1–G2, G2–STO and BF are accurate.
- The maker diagram, a low-resolution Ricoh image, shows 10 elements in 8 groups. It colours element 2 (the hybrid) and the last element as aspherical, which matches 5A on L2R and 19A on L10.

Open item for the owner. Raising surface 1 to 18.6 mm, the mean of the two figure panels, would put L1's front rim on the drawing. That trial passes the validator, clips nothing and leaves the half-field unchanged. It changes one engine number: transmission at the 47.8° wide corner rises from 55.2 to 69.8 %, with every other sampled field identical. It was not applied, because the gap is about 5.5 % and the widening would improve a vignetting figure. The L1 flange step and the floor-limited heights of L6, L7/L8 and L9 remain as described above.
