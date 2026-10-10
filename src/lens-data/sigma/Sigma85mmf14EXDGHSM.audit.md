# Sigma 85mm F1.4 EX DG HSM — technical audit

## Job and reference versions
JP2011170128A, Numerical Example5, unchanged four-field card. Current main14da71d94ed3ab6ccf7aef70066f1e49670440ed;248 reference/runtime blobs match its full recursive tree. CHAT-1.0 workflow. No unpublished #771 code, engine edits or publication.

## Extraction and conventions
Original34-page DPMA PDF and141-byte card match indexed SHA256 identities. Example5 occupies PDF18–19 (printed17–18), paragraph0088; Figure21 and its infinity/near aberration diagrams occupy PDF29. Twenty rows include stop14; eleven material intervals and eight air-separated bodies. S13 radius51.793 has three decimals. S10 K0 andA12=0 are printed. Equation4 PDF13 is the standard(1+K) conic plusA4–A12; millimetres and d-line coordinates are explicit in0080–0081. Full numerical rows and raw text are retained in evidence. Margin line numbers are excluded from table cells. No rear plate.

## Model transformations
The2026-10-08 READY clearance explicitly approves derived BF; the older index statement is preserved as history. Infinity Gaussian BF39.51207750611788mm is derived from unchanged source. Native d6 decreases15.2520→4.8554; rigidL2 including the stop moves10.3966mm objectward, and the last-to-image gap increases to49.90867750611788mm. Image andL1 remain fixed. Do not confuse this finite-conjugate image distance with the near configuration's infinity BFD40.66723808089702mm. Source native83.58mm/F1.46 remain separate from marketed85mm/f1.4.

## Glass review
Nine coordinates were freshly compared with six retained authoritative catalogs: HOYA, OHARA, Schott, Hikari, Sumita, CDGM. The catalogs were retrieved by previous work; this is a new coordinate audit, not a new network-retrieval claim. All candidates/residuals/provenance are retained. Coordinate1.58763/61.08 has no tight match and remains Unmatched. Compatible coordinates elsewhere do not prove production supplier, melt or dispersion.

## Numerical and geometry results
Stage1's executed sequential and matrix traces agree. Infinity EFL83.58292184593547mm rounds to83.58; all eight printed conditions reproduce source precision. Near object-to-image849.997925123055mm supports the approved850mm interpretation within0.0021mm; magnification−0.115772724311. Optical first-vertex-to-image track129.252977506118mm is fixed and exceeds EFL, so no strict telephoto ratio classification is claimed. Sufficient source data and authorized image reconstruction establish Stage1.

## Correction and discrepancy register
No source radii, thicknesses, glass values, focus d6, conic or coefficients changed. BF is unreported, not source-corrected. Figure23 prints nearF1.71; fixed-iris reproduction requires Stage2 convention checking and must not be silently claimed. Production nominal magnification1:8.6 and patent calculated reciprocal8.637614 remain separate. Apertures and stop size are unreported Stage2 tasks.

## Independent review
Stage1 construction calculations are author verification. A separate reviewer is performing a source-first extraction; no independent Stage4 gate earned yet. (Closed: see the Stage 4 reconciliation and the 2026-10-10 section below.)

## Gate disposition
READY_FOR_DATA. Stage2 must infer apertures and execute actual current-project type/schema/buildLens/ray/render checks; Stage3 analysis must bind the verified candidate; Stage4 remains source-first independent review. (Closed: the later stages are recorded below.)

## Quantitative-claim map
Native20/11/8/one-asphere and83.58/F1.46/Y21.63 → evidence.rawPrescription and original PDF18–19.
EFL/BF/track/powers/Petzval/conditions/near distance → results.sourceModel.states, executed verifier.
Manufacturer11/8,85mm,f1.4,85cm,1:8.6 and five mounts → official legacy product page and2010-10-14 Sigma release.

## Pending integration
Repository-wide tests, metadata generation, build/prerender, integration, publication and deployment were not performed and are outside scope. (Closed 2026-10-10: the three files are in `src/lens-data/sigma/`; corpus-level checks belong to the batch integration.)

## Stage 2 checkpoint
Actual candidate `56289fe2c4cc00ec5cbc2bf4b96913f4c1c730e029adfe35588b05b8005c9f1d` passes strict actual TypeScript, current-main `validateLensData`, `buildLens`, runtime glass resolution and native render diagnostics. Zero render trim at 21 focus samples. Finite outputs do not imply ray transmission: 210/231 default UI rays are nonclipped; one off-axis ray clips at every sampled focus position. The UI's focus-tracking launch convention is distinct from common finite-source sampling.

The sole geometry exception is the S11/S12 shared air band. Full native axial aperture requires radii at least 16.133131/16.078499 mm. Inferred 16.2/16.1 mm radii give intrusion 95.913659% and positive minimum gap 0.227899 mm. Default 90%, then 92/94/95%, fail; 96% is the smallest whole-percent allowance passing. Reducing either rim enough for 90% clips native F1.46 axial rays; source spacing/radius changes are prohibited. This exercises the standing staged allowance below 97%, retaining all other geometry checks. A larger inferred front-aperture trial did not improve the transmitted physical samples and was not retained.

Real-engine common-source pupil aiming spans five focus states (infinity, three calculated intermediate conjugates, source 850 mm) at two iris scales and 0/0.6/1 field fractions: 1,746 transmitted, 76 clipped, zero post-aim numerical trace failures, and 128 unresolved off-axis aims of 1,950 requests. The unresolved aims are unknown, not counted as physical blockage or success. All 650 on-axis samples transmit, including the full iris rim. Finite aperture sampling is not a continuous/full-pupil proof. Collimated near-state traces are preserved separately as defocused diagnostics.

Exact iris-calibrated infinity sine-NA F-number is 1.459877; near is 1.704046. Near printed F1.71 comparison fails its 0.005 rounding half-unit by approximately 0.000954 and remains a disclosed 0.35% source-convention discrepancy. No prescription or aperture adjustment was made to force the near value. It does not contradict the verified source spacings or approved image-plane derivation.

Stage 2 READY_FOR_ANALYSIS binds the final formatted data, evidence, verifier and results. No analysis was drafted before this checkpoint.

## Stage 3 claim and citation audit
Data bytes remain the Stage 2 approved revision. Stage 3 extends the same verifier to actively replay catalog spectra, exact Snell/asphere iris and near working aperture, and a separately solved near d6; the source numerical model is unchanged. The Figure 23 comparison is now a retained raw DISCREPANCY in results.comparisons. No readiness assertion claims it matched.

Claim map for the final analysis:
- Patent metadata and correlation → exact PDF cover/paragraph 0088/Figure 21; official legacy Sigma page, construction image and dated release. Manufacturer identity is architectural, not exact prescription proof.
- Architecture/group and doublet powers, EFL, track, BFD, Petzval → results.sourceModel.states[0].system/groups/cemented and matched implementedModel state 0.
- Each L1–L11 heading, type, coordinates, glass and signed standalone focal length → parsed final elements and verifier element-power checks. Interpretive role paragraphs distinguish source design constraints from author inference; no individual measured aberration contribution asserted.
- Spectral fields and DeltaPgF formula → selected authoritative coefficient rows in evidence.glassEvidence; executable spectral-fields checks from actual candidate. L6 remains without spectrum.
- Source d6, derived BF and focus travel → rawPrescription plus transformation D1; each implementedModel state's source-mapping check and fixed-image test. Exact850mm d6 solve → results.facts.computed.solvedNearD6.
- Near F1.704046 versus printed1.71 → executed exact portable ray and actual runtime finite-source comparison; results.comparisons retains mismatch.
- Asphere coefficients → source PDF19 and actual asph mapping; modeled19mm departure/sags → implementedModel.states[0].geometry.asphereDepartures.
- Eight condition results → sourceModel.states[0].conditions with source-precision checks; source definitions PDF9–11.
- 96% allowance/95.913659% intrusion/0.227899mm gap; minimum glass0.800191mm/max slope43.204064deg → actual parsed-data geometry and independent dense review. Override ledger in evidence.gapPolicy.
- Runtime 21 states/zero trim, physical1746/76/128 of1950 and650/650 axis, UI210/231 → evidence.runtimeRecord with exact data/code/current-main fingerprints. Counts are sampled coverage, not optical production certification.

Manually reviewed all primary citations, numerical signs/rounding, reference planes and interpretive caveats. Links are ordinary portable URLs. No source prescription, data fields or optical scope changed during analysis. Stage 3 READY_FOR_AUDIT; final independent review remains required.

## Refinement before final Stage 4 seal: earlier 96% candidate superseded
The earlier 96% candidate and checkpoints above are preserved as history, not the final allowance. A finer search tests 95.1% through 95.9% at 0.1-percentage-point stages, then 95.91% and 95.92%. Every lower stage fails the same S11/S12 band; 95.92% passes. The final allowance is therefore `gapSagFrac: 0.9592`. It exceeds measured intrusion 0.9591365922517541 by 0.0000634077482459 as a fraction (0.006341 percentage points), equivalent to 0.000353631353 mm of numerical margin against this policy threshold. That margin is not a manufacturing tolerance. Actual minimum face separation remains 0.227899311353 mm. It is the smallest tested hundredth-percentage-point stage, not a mathematical minimum over real numbers.

Only the allowance and its explanatory text changed; no source radius, thickness, material, asphere, gap endpoint or inferred clear radius changed. Independent reviewer reproduced both failing 95.91% and passing 95.92%. All affected Stage 2/3 approvals were reopened: strict actual TypeScript, current-main schema/build/render/rays, portable geometry and cross-file checks rerun. Runtime has the same zero trim and all previous transmission/unknown-aim counts. Final revised data SHA-256: `429a707faa5b65a754675754c64b09890a6bce020842ddf80a2641a42dbb2613`. The initial Stage 2/3 archives remain unchanged in supporting storage; replacement checkpoints below supersede their readiness binding.

## Stage 4 independent reconciliation and final gate
A separate reviewer personally re-extracted the source before seeing a candidate and froze an independent baseline at 2026-10-09 01:53:38 UTC. The canonical baseline fingerprint is `e0892ec2ed8ee171249e53c680e09be75e2b4daa699f0ad55473cb06ff0cc81e`; the fresh original code fingerprint is `55359b3bd512dbd6e39a43def0b220380e96077ec39636f7d96fa5accb0e3dad`. Prior approximate EFL/BF and approved distance-reference information were visible in the assignment/clearance, so the claim is source/method independence, not blindness. The exact frozen baseline is included unchanged in evidence and checked canonically during replay.

Independent source re-entry, scalar/ABCD tracing, standalone powers, Petzval, finite image distance, exact iris/near sine-NA, eight conditions, six-catalog comparison and dense geometry agree within stated methods/precision. The reviewer uses printed f = 83.58 in conditions; the author uses reconstructed EFL = 83.582921846. Both reproduce all printed condition values; their unrounded values are not falsely equated. A compact branch copied from the frozen independent code is included in the consolidated verifier and runs without external paths or catalogs.

Independent dense checks cover 4,096 radial-band samples at five focus positions. True finite-conjugate meridional checks establish the sampled full axial pupil and corner chiefs; off-axis clipping/one independent unresolved aim remain explicit. Actual current-project checks were executed by the author and reviewed against their pinned source/data fingerprints. The reviewer did not independently rerun the entire native harness; source-code replay and author native execution are separate evidence.

The reviewer requested two prose corrections: “author-approved” became “user-approved”, and all eight inequality bounds with corrected paragraph range 0042–0067 were added. The final finer gap allowance supersedes initial 96% history. Revised exact pair approval binds data `429a707faa5b65a754675754c64b09890a6bce020842ddf80a2641a42dbb2613` and analysis `2b81a9f057417a5dd57ed9ea07624f66602f9f2301c59a195dbc5c8eff52e4a0`.

Final disposition: READY_FOR_BATCH as a qualified patent-derived research model; INTEGRATION_PENDING. Qualifications are the approved derived absolute image plane, inferred apertures/95.92% shared-gap allowance, unmatched L6 spectrum, retained near-F-number discrepancy, observed off-axis clipping and unresolved pupil aims. No full-pupil, exact production throughput, finite-MTF certification, corpus build or deployment is claimed. A separate post-seal reviewer acceptance receipt must bind the unchanged final ZIP after clean extraction. (Closed 2026-10-10 by the deployment validation below, which also supersedes the 95.92% allowance with 0.96.)

## 2026-10-10 — Deployment validation and wording pass

Source re-read. JP 2011-170128 A was read again from the page images of the 34-page PDF: pp. 18–19 for Numerical Example 5, p. 13 for the asphere equation, p. 29 for Figures 21–23. Checked: 20 surface rows (R, d, nd, νd), the stop at surface 14, three cemented interfaces, κ and A4–A12 on surface 10, and d6 at infinity and 0.85 m. Mismatches: none. The patent's κ is the data file's K. The patent prints "B.F." without a value and gives no total length or field angle. Of the nine numerical examples only Example 5 has 11 elements in 8 groups (Examples 1, 4, 6 and 9 are 10/8; 2, 7 and 8 are 11/9; 3 is 12/10).

First-order values, patent against model. f 83.58 / 83.5829 mm. Fno 1.46 / 1.46: the real marginal ray at height f/(2 × 1.46) = 28.624 mm crosses the stop plane at 15.799 mm, the stored stop radius; a paraxial estimate from the same radius reads 1.405 and is not the patent's convention. Y 21.63 mm is reached at a 14.5° half-field. Derived, not printed: back focus 39.5121 mm and first-vertex-to-image 129.2530 mm. At d6 = 4.8554 mm with group L1 and the image plane fixed: object-to-image 849.998 mm, magnification −0.1158 (1:8.64), working F-number 1.704 against F1.71 in Figure 23. Conditions (1)–(6) compute to 0.991, 0.921, 0.032, 0.901, 2.932 and 41.07 against the printed 0.99, 0.92, 0.03, 0.90, 2.93 and 41.1.

Maker diagram. Sigma's construction drawing for the 85mm F1.4 EX DG HSM (https://www.sigma-global.com/lenses/85_14_specification_01.jpg) shows 11 elements in 8 groups in the same sequence as Figure 21: three front singlets, a cemented doublet, a negative meniscus, a biconcave element, the iris and two rear cemented doublets. It marks element 1 as SLD glass and element 6 as the aspherical lens, which matches L1 (1.49700 / 81.61) and the surface-10 asphere on L6. Sigma lists 0.85 m minimum focus, 1:8.6, nine blades, F16, a 77 mm filter and SA / EF / F / K / A mounts.

Fields changed in this pass. No R, d, nd, νd, asphere coefficient, semi-diameter or variable-gap value changed. The header comment, `subtitle`, `specs`, `focusDescription` and all eleven element `role` strings were reworded in plain terms. L1 gained `apd: "inferred"` with an `apdNote`. `gapSagFrac` went from 0.9592 to 0.96, the smallest two-decimal allowance that admits the S11/S12 rims (intrusion 95.91%; 0.95 fails); EFL, f-number, stop radius, back focus and both focus keyframes are unchanged. The analysis lost its process wording, and its "Verification Scope and Aperture Limitations" section became "Model Scope and Limitations".

Open: L6 (1.58763 / 61.08) has no catalog match. Its coordinates sit 0.0015 in nd and 0.17 in νd below the 1.58913 / 61.25 glass on the aspherical element of Examples 1 and 6–9, so an as-moulded value of that glass is a possibility, not an identification. The group labels L1 / L2a / L2b follow the patent and share names with elements L1 and L2.

## 2026-10-10 — Semi-diameter pass against the patent figure

Source. `patents/JP2011170128A.pdf`, PDF page 29 (printed 28), Figure 21. The drawing list names Figure 21 as the lens configuration of Example 5; Figures 22 and 23 are its longitudinal aberrations at infinity (Fno 1.46) and at close focus (Fno 1.71). The figure shows 3 + 4 + 4 = 11 elements in 8 groups, the count only Example 5 has, and it is drawn at the infinity state. No ray bundles are drawn; the L2a / L2b brackets, the S and S_NM leaders and the G2b leaders were kept outside the measuring windows.

Scale. The figure raster is about 400 ppi and was measured at 400 dpi with the axis on row 1718. Vertex crossings: S1 at column 432, S20 at 925, the image plane at 1142. That is 493 px for 89.7409 mm (0.18203 mm/px) and 710 px for 129.2530 mm (0.18205 mm/px). All nineteen glass vertices sit within 1 px of the prescription at d6 = 15.2520 mm, so the sheet is drawn to scale. Rim heights were read on both sides of the axis and agree to 1 px (0.2 mm).

| Surface | sd before (mm) | Figure 21 (mm) | Figure / before | sd after (mm) | Evidence |
|---|---|---|---|---|---|
| 1, 2 (L1) | 34 | 35.7 | 1.05 | 35.7 | rounded tip 196 px above and 197 px below the axis |
| 3, 4 (L2) | 29 | 31.0 | 1.07 | 31 | 170 / 171 px; the element ends in a fine edge |
| 5 (L3 front) | 25 | 26.4 | 1.06 | 26.4 | 145 / 146 px |
| 6 (L3 rear) | 25 | curve ends at 22.5; outer rim 26.4 | 0.90 | 22.5 | flat annulus in column 618 from 123.5 px out to the rim; the concave curve stops at its inner end |
| 7, 8, 9 (D1) | 21 | 21.5 | 1.02 | 21 (kept) | 118 / 119 px; the L4 shell is cut back so S8 leaves it at 19.1 mm while L5 runs to the full height |
| 10A (L6 front) | 19 | 19.1 | 1.01 | 19 (kept) | 105 / 106 px |
| 11 (L6 rear) | 16.2 | curve ends at 16.4; outer rim 19.1 | 1.01 | 16.2 (kept) | flat annulus in column 751 |
| 12 (L7 front) | 16.1 | curve ends at 16.4; outer rim 17.35 | 1.02 | 16.1 (kept) | L7 seats on the L6 annulus |
| 13 (L7 rear) | 17 | outer rim 17.35; curve ends at 15.8 | 1.02 / 0.93 | 17 (kept) | flat annulus in column 778; held at the outer rim |
| STO | 15.8 | 16.1 (inner ends of the iris marks) | 1.02 | 15.8 | comparison only; the stop is not part of this pass |
| 15–20 (D2, D3) | 18 | 17.7 | 0.98 | 18 (kept) | 97 / 98 px, one common height for all six surfaces |

The automatic figure screen (crop 0.128, 0.322, 0.2815, 0.413 of the page) agrees where it is clean: L1 35.65 / 35.90, L2 31.05, L3 26.44 / 26.68, D1 rim 21.59, D2 rim 17.95 mm. Its L6, L7 and L10 rows read the brackets and leaders and were not used.

Result: six semi-diameters changed, all in the fixed front group. The three front elements are drawn 5–7% larger than they were stored (1.7, 2.0 and 1.4 mm in radius), all in the same direction and well outside the 0.2 mm reading precision, so the difference is one of proportion rather than noise: L1 stood at 1.89 times the rear-group height in the model against 2.02 times in Figure 21, and is 1.98 times now. Surfaces 1–5 take the drawn rim heights. Surface 6 takes the height at which the figure ends the concave curve (22.5 mm) instead of running the curve out to the element's outer rim. Every rim from surface 7 rearward is within 2% of the drawing and is unchanged, as is the stop.

Flat rim annuli. Figure 21 draws L3, L6 and L7 with flat annuli outside the curved faces, which the renderer cannot show because it joins the two rim points of an element with one straight line. With surface 6 at 25 mm the rear of L3 ran out to a pointed corner 1.95 mm behind the drawn rear plane and the rim was 10.71 mm thick against 8.7 mm drawn; at 22.5 mm the rear corner sits on the drawn plane (z = 33.90 mm from the first vertex) and the rim is drawn as a chamfer from the 26.4 mm front edge. Surfaces 11 and 12 cannot rise: the two faces meet at 16.42 mm, the height at which the figure draws L6 and L7 in contact, and the stored 16.2 / 16.1 mm are the pair covered by the 0.96 gap allowance.

Validator and edges. The trial set passed the surface validator before it was applied and the edited file passes it with `gapSagFrac` untouched. Rim edge thickness is 1.96 mm on L1 and 0.90 mm on L2, so the 0.80 mm of L5 remains the thinnest edge; the steepest rim is still S8.

Clearance at infinity (exact meridional trace, stop radius 15.799 mm). The F/1.46 axial marginal ray clears every rim; the smallest margins are 0.022 mm at surface 12, 0.067 mm at surface 11 and 0.682 mm at surface 6 (front group: 7.08, 7.52, 3.70, 4.75, 1.88 and 0.68 mm on surfaces 1–6). The chief ray to Y = 21.63 mm (14.50°) clears every rim. Transmitted share of the meridional stop diameter, before and after: 83.9% and 86.8% at Y = 10.81 mm, 72.6% and 75.6% at 15.14 mm, 52.3% and 56.1% at 21.63 mm. The corner bundle was limited by surfaces 3 and 20 and is now limited by surfaces 5 and 20.

Clearance at 0.85 m (object 720.74 mm ahead of surface 1, same iris). The axial marginal ray clears every rim; the smallest margins are 0.344 mm at surface 12 and 0.366 mm at surface 11, and 3.01 mm at surface 6. The chief ray to Y = 21.63 mm (object height 187.65 mm) clears every rim. Transmitted share, before and after: 96.5% and 96.8%, 88.6% and 90.8%, 75.0% and 78.7% at the same three image heights. With group L2 advanced 10.3966 mm the doublet D1 sits behind the rear cup of L3; the smallest S6–S7 separation over the doublet's 21 mm radius is 4.10 mm (14.50 mm at infinity), and the rendered rims do not touch.

Model values. EFL 83.5829 mm, F/1.46 and the stop radius 15.799 mm are unchanged. The engine half-field went from 17.74° to 18.88° (still set by surface 3). Corner chief-ray coverage is 100% at 14.5°, the image-circle floor reports no undersized surface, and the surface validator is clean, before and after.

Rendered section. The local page was viewed at infinity and at 0.85 m after the edit. L1 and L2 now end in the fine edges the figure draws, L3 no longer carries a long rear point, and D1 clears L3 at close focus. Differences that remain come from the straight rim line: L3, L6 and L7 show slanted rims where the figure has square rims with stepped annuli.

Files touched. Six `sd` values in the data file and its header note. The header's sentence that larger front semi-diameters did not widen the off-axis bundles was replaced with the traced corner figures; the count of clipped rays in the default diagram given there and in the Stage 2 checkpoint above was taken with the earlier rims and was not recounted. The analysis's Model Scope and Limitations section now states the figure-measured front rims and the 56% corner share limited by S5 and S20. The aspheric surface 10 keeps its 19 mm rim, so the departure and sags quoted for it stand.

Open limitations. Figure 21 shows only the infinity state, so the 0.85 m state is checked by ray trace and rendering alone. The manufacturer's construction diagram was not viewed again in this pass; the comparison recorded in the section above stands.

## 2026-10-10 — Second review: diagram, labels and movement

Compared. The local page at infinity and at 0.85 m, the focus-movement overlay and the inspectors of elements 1, 6 and 8 were set beside Figure 21 (PDF page 29) and the patent text (paragraphs 0031, 0039, 0042, 0047, 0067–0069, 0078; Example 5 on PDF pages 18–19). This review ran against a time limit: the silhouette was compared by eye against a 400 dpi crop of Figure 21 and the first pass's enlarged crop of sub-group L2a, and the figure was not re-profiled.

| Field | Before | After | Evidence |
|---|---|---|---|
| Element 1 `apdNote` | said the patent gives only nd / νd | adds that the patent names the glass only as the low-dispersion medium GL of condition (7) and that paragraph 0069 prefers an anomalous-dispersion medium without saying the example uses one | paragraphs 0067–0069 (PDF pages 10–11); condition (7) value 81.61 on PDF page 19 |

No semi-diameter changed. No other field changed.

Silhouette. The front group now matches the figure in height order and proportion (L1 over L2 over L3, fine edges on the first two elements). Three differences remain, all of the kind the first pass recorded. Element 3 is a squared block in Figure 21 and a wedge on the page, because surface 6 stops at the 22.5 mm curve end while surface 5 runs to 26.4 mm; raising surface 6 to 26.4 mm would carry the concave face 3.2 mm behind the drawn rear plane (to z = 37.1 mm), past the front rim corner of the doublet at 0.85 m (z = 36.97 mm at 21 mm height), so the curve-end value stays. Element 6 and element 7 are drawn as squared blocks with flat annuli and render with slanted rims; surfaces 11 and 12 cannot rise because the faces meet at 16.42 mm. In the doublet the figure cuts the thin front shell back with a flat top while its positive partner runs to the full height; the model keeps all three surfaces at 21 mm. The two rear doublets agree with the figure. No value of `gapSagFrac` other than 0.96 is proposed.

Labels found correct. Group brackets L1 (surfaces 1–6), L2a (7–13) and L2b (15–20) cover the elements the figure brackets; the patent's outer L2 bracket (7–20) is represented by the two FOCUS suffixes. Doublet brackets D1 (7–9), D2 (15–17) and D3 (18–20) match the three cemented interfaces of the table. Surface 10 is the only starred surface and the only `A` label and `asph` entry; it is the surface the patent calls S_NM. The stop is drawn between elements 7 and 8 at surface 14. All eleven `type` strings agree with the signs of R. Element 1 keeps `apd: "inferred"`: the patent identifies a low-dispersion medium, not an anomalous one, for this example.

Element designations: open. The patent uses L1, L2, L2a and L2b for groups and names only the four elements of L2b (G2b1–G2b4, paragraph 0047 and Figure 21). The diagram avoids a clash because it prints the numerals 1–11 under the elements, but the inspector shows the element `name` (L1, L2, …) beside brackets that use the same letters for groups, and the analysis writes "group L1 comprises elements L1–L3". Proposed and not applied: rename the elements E1–E11 (the convention of the Sigma Macro 105mm f/2.8 and Canon EF 300mm f/2.8 files, which also have L-named groups) in `name`, the role strings, the header comment and every element reference in the analysis, and record G2b1–G2b4 in the `label` of elements 8–11.

Movement found correct. Index 0 of both variable gaps is infinity (d6 15.2520 mm, image gap 39.5121 mm) and index 1 is 0.85 m (4.8554 mm, 49.9087 mm). The overlay shows L1 fixed and L2a and L2b both moving 10.40 mm toward the object from infinity to close focus, which is the direction of the Figure 21 arrow and of paragraph 0031; the published travel is 10.3966 mm. The slider reads ∞ at the start and 85 cm at the far end.

Glass. The Example 5 table gives nd and νd only; the text names no glass and prints no further line indices or partial dispersion for element 6 (1.58763 / 61.08), which stays unmatched.

Model values, unchanged by this review: EFL 83.5829 mm, F/1.46, stop radius 15.799 mm, engine half-field 18.88°. The chief ray to Y = 21.63 mm (14.50°) is not blocked and the F/1.46 axial marginal ray is not clipped at any rim; corner chief-ray coverage is 100%, the image-circle floor reports no undersized surface and the surface validator reports no errors. The inspector of element 1 was viewed again after the edit and shows the new note.

Coordinator follow-up to the second review. The naming clash it reported was resolved: elements are now named E1–E11 in the data file (`name`), its header and the analysis, because the patent uses L1 and L2 (with L2a / L2b) for its lens groups and the page showed element "L1" beside group bracket "L1". Group brackets (L1 FIXED, L2a FOCUS, L2b FOCUS), `diagramLabel` numerals 1–11, `label` strings, cemented-pair brackets D1–D3 and every optical value are unchanged. Sections of this log written before this note use the earlier L1–L11 element names; element Ln there is En now.
