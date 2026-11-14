# Scoped audit — independent final review completed
- Original E2 source visual check and matrix calculations preserved separately Samyang85EF_Diagnostic_20261113; independent source review supports actual Image afterD4.
- PILOT preparation reproducible: python prepare.py.
- Native currentreadonly4caca439: node --import ../LensVisualizer/scripts/ts-js-specifier-hook-register.mjs native.mjs (run fromworkspace withcompletepaths as needed).
- validate.mjs: canonicalgeometryerrors[]. states.mjs preserves bothruntimefocusstates.
- diagnostics.mjs:812samples ×3fields ×2states, fixedsourceplane, actualnearD0. FOCUS=1 fornear.
- endpoint.mjs: chief+8axialfractions throughradius1 passbothstates.
- validate-export.mjs: actualexporterrors[],identicalOptics=true,visiblefalse (historical; visibility is now true).
- Independent sourceparity/capparity/noBracketproof pending — closed by the independent source and clipping review recorded below. No completedlenscount or deliveryauthorization inferred.


## 2026-11-13 — Deployment validation

The independent samyang85 validator re-read the patent page images: Tables 4–6 on PDF pages 12–13 (20 surface rows, 11 nd/Vd pairs, the conic and five asphere coefficients, and both endpoints of D1–D4), the asphere equation on page 11, Figure 3 on page 18, and the front-page bibliography. No transcription mismatches were found. Verdict: valid with notes as a qualified Example 2 patent model; the maker’s EF specifications and construction diagram support the 9-glass/7-group, hybrid-L8 association, without proving exact production identity. The 11/8 FE product is a different construction; the validator’s product evidence is the [maker’s EF page](https://www.lksamyang.com/ko/product/product-view.php?seq=379) and [EF construction diagram](https://www.lksamyang.com/upload/editor/1559813077).

Changes by the samyang85 integration agent:

- `source.patentNumber`: `KR 102213072 B1` → `KR 10-2213072 B1`, the required house form.
- `focus.closeFocusM`: 0.9 → 0.926326 m, the validator’s object-to-image distance for the printed near state. Printed first-vertex distance 813.676935 mm plus physical image track 112.649447 mm gives 926.326382 mm; this is distinct from the calculated paraxial conjugate of approximately 0.92647534 m.
- `catalog.closeFocusM.marketing`: absent → 0.9 m, preserving the maker’s minimum-focus specification separately.
- Data header: abbreviated description → one source/Example 2 comment stating scale factor 1, source millimetres with no conversion, inferred stop/rims, literal back-focus gaps, the plate limitation below, and the non-propagated D5 note.
- Analysis: added the explicit 0.926326 m versus 0.9 m distinction and the reason the plate remains explicit. Other wording, names, keys, specs, element types and glass labels are reserved for the cleanup pass.

Plate decision: no migration was made. The source has a 37.3/37.3 mm gap D3 before the 2.5 mm, nd 1.5168 / Vd 64.2 plate, and a varying D4 of 0.507836/0.687847 mm after it. The Rear Plates spec, `RearPlateData` type and ViltroxAF35mmf18FE precedent provide only scalar `gapAfterMm`; generated plate surfaces cannot carry an authored variable gap. Fixing D4 and moving its 0.180011 mm difference into D3 would relocate the near-state plate rather than preserve the physical source gaps. Under the assignment’s exact-representation exception, the delivered plate, both gap rows and all source optical values remain unchanged. D5 after Image remains metadata and is excluded from propagation.

Verification from the main checkout against the assigned data file:

- `built.mjs`: OK. EFL 84.54865074703312 mm, f/1.479, stop semi-diameter 15.090708515822355 mm, physical track 112.469436 mm, half-field 14.239°.
- `probe.mjs`, before and after the metadata edits: identical output at both states. Infinity EFL 84.5487 mm and after-filter BFD 0.5094 mm; near EFL 84.2393 mm, BFD −8.4999 mm and magnification −0.1091. Its near output holds the image at the infinity best-focus offset; that convention is not the literal source D0 calculation above. The plate was not moved, and exact comparison confirms elements, surfaces, gaps and aperture are unchanged, so these optical quantities have zero change.
- `audit:surface`: OK — no validation errors.
- `audit:aperture --raise`: no rim limit; zero deficient surfaces, zero flagged lenses and zero proposed raises.
- `audit:image-circle`: 1 checked, 0 undersized, 0 skipped, with `135-full-frame` retained.
- `audit:field-coverage --below=1.01`: the hidden original was skipped. A scratch copy differing only in visibility and its type-import path reports 100% coverage, modeled 14.2° reaching 21.65 mm of 21.65 mm, clear corner, 0 unsolved and 0 skipped. The assigned data remains `visible: false` (historical; closed by the coordinator's visibility change to true).

Open: move the camera-side plate only when its varying trailing gap can be represented without relocating it; retain source-qualified product identity, inferred rims and the validator’s disclosed off-axis blockage. Names/keys, readable wording, generic element types, glass labels and the rims-versus-figure presentation remain for cleanup (closed by the coordinator and the cleanup section below; no rim changes). Earlier pending-review lines above are historical; the independent source re-read is documented here. Application/browser checks and remote CI were outside this integration scope. No sandbox refusals occurred.

## 2026-11-14 — Cleanup and wording pass

Only this lens's data, analysis and audit companions were edited. The coordinator's identity, visibility, mount, image format, marketing focus distance and optical geometry were retained. The header, element labels, shape types, roles, focus description and source-erratum prose now use plain technical wording. The new subtitle is “KR 10-2213072 B1, Example 2 — the EF version's 9/7 construction.” Specs now state 9 ELEMENTS / 7 GROUPS, 1 HYBRID ASPHERICAL ELEMENT, F/1.4–16 and MINIMUM FOCUS 0.9 m. The aperture list retains its 1.479 opening and adds the maker's endpoint of 16. The [maker's EF specifications](https://www.lksamyang.com/ko/product/product-view.php?seq=379) were re-read for these construction, aperture and focus values; the maker publishes no ED positions, so no anomalous-partial-dispersion tags were added.

Every previous glass string was “Published nd/Vd, unassigned catalogue glass; approximate dispersion.” Hoya catalog labels now resolve through the repository's glass resolver. At catalog-row precision, Δnd = 0 for all ten glass/filter entries; Δνd = +0.01 for TAF1 at L1, L4 and L8, and 0 for all other matches. Relabels: L1/L4/L8 → TAF1 (HOYA); L2 → NBF1 (HOYA); L3 → E-FD10 (HOYA); L5 → NBFD15 (HOYA); L6 → E-FEL1 (HOYA); L7 → NBFD11 (HOYA); L9 → E-FD2 (HOYA); rear filter → BSC7 (HOYA). These are dispersion equivalents, not proof of supplier or melt identity. The hybrid layer remains “Unmatched resin (nd 1.517 / νd 52).” No catalog-copied spectral indices were present to remove, and no printed indices were changed.

Both members of L6–L7 are tagged C1, and both glass members of L8–L9 are tagged C2. Two doublet brackets span surfaces 12–14 and 16–18. The separately drawn 0.130 mm resin layer is excluded from C2, so the two-glass doublet is not labeled a triplet. The camera-side filter is a Plane-Parallel Plate and remains drawn with its unchanged focus-dependent trailing gap.

Analysis changes: normalized the title and element/glass descriptions; retained the separate 11/8, all-spherical WO-family FE comparison, source contradictions, focus distances, asphere coefficients and numerical optical limitations; replaced the verification heading with “Model Scope and Limitations”; removed review history, ray-grid counts, stale visibility and application-process prose. The front-page image confirms registration/grant on 2021-02-01 and B1 publication on 2021-02-08; the analysis previously used the latter for both events. Historical audit entries remain, with stale pending/visibility/cleanup statements marked closed in place.

Engine before → after: EFL 84.54865074703312 → 84.54865074703312 mm; FOPEN 1.479 → 1.479; halfField 14.239 → 14.239°; stop semi-diameter 15.090708515822355 → 15.090708515822355 mm; physical image track 112.469436 → 112.469436 mm. Probe output is identical at both focus keys: infinity EFL 84.5487 / BFD 0.5094 mm / f-number 1.479, near EFL 84.2393 / BFD −8.4999 mm / infinity-equivalent f-number 1.264 / magnification −0.1091. The near probe retains its infinity best-focus offset convention; 1.264 is not the finite working f-number. Surfaces, gaps, indices, reference lines, nominal aperture and focus keyframes also compare equal to the independently validated prescription. Surface audit: OK, no errors. Aperture audit: no rim limit, no trace/iris failures, one station within 3% of the stated f-number. Field coverage with --all: one station ≥99%, zero unsolved, zero skipped.

Figure 3 and the stored maker diagram were viewed again. They support the front-to-rear taper, two glass doublets and hybrid layer; they do not establish absolute clear rims or a maker-marked iris. No radii, thicknesses, gaps, aspheres, rims or stop values changed.

Open:
- Figure-based rim calibration is closed by the semi-diameter section below; absolute production dimensions and production edge illumination remain unestablished. The 30 mm front cap and substantial source-field clipping are retained. The aperture audit reports no axial rim limit.
- The rear-plate format needs variable trailing-gap support before the filter can move out of the drawn elements without relocating it. D3 is fixed; D4 changes by 0.180011 mm. D5's purpose after Image remains unresolved.
- The source's focal-length, air-back-focus and overall-length summaries disagree with the prescription; its 0.9 m near heading and f/1.584 near claim differ from the stated geometry and fixed-iris result. No numerical reconciliation or refocus was applied.
- Exact production identity, glass suppliers and resin chemistry remain unproven; the finite-focus cam between the two published endpoints is unspecified.
- The required headless page-view attempt produced thermal/DNS diagnostic errors and no screenshot; rendered-page review remains incomplete. Full application checks and remote CI were not run in this scope.

Denial: a mistaken backup-copy destination in the main checkout was refused with “Operation not permitted.” That backup change was stopped without retry or alternate copy. No lens edit or optical audit was refused. Formatting commands were skipped as directed by the addendum.

## 2026-11-14 — Semi-diameter pass against the patent figure

Source: the local `patents/KR102213072B1.pdf`, Example 2, Tables 4–6 on PDF pages 12–13, Figure 3 on page 18 (upper infinity and lower near-focus panels). Paragraph [0087] explicitly associates Example 2 with Figure 3. Page 19 is Figure 4, the lateral-aberration fans, not a second construction. No effective-diameter column is printed. Scale factor is 1; these remain inferred clear apertures, not production dimensions.

At 600 dpi the upper-panel axis is y≈1968 px. The S1–S19 vertex span is 1883 px / 109.4616 mm = 17.2024 px/mm; independently S3–S18 is 1095 px / 63.6206 mm = 17.2114 px/mm. The long rear air gap checks at 641 px / 37.3 mm = 17.1850 px/mm. Thus the drawing's axial scale is approximately 17.2 px/mm. A circle fit to the clean S1 cap gives radius 1346 px, or 78.27 mm at that scale, versus the table's 73.203 mm: the contours are illustrative to about 7% in curvature, so radial readings carry a few percent systematic uncertainty. Upper/lower rim symmetry and the lower panel independently reproduce the relative heights. Leader arrows, group brackets, axis strokes and label leaders were excluded; flat lands were distinguished from optical cap endpoints.

The clean drawn body radii are approximately L1 30.4, L2 25.7, L3 23.4, L4 20.1, L5 17.9, both rear doublets 17.9 and filter 22.5 mm. The rear faces of L2, L3 and L5 visibly end in lands: their optical endpoints are approximately 23.4, 19.5 and 15.8 mm. The first trial based solely on body heights clipped the printed near axial beam; the final set retains its numerical floors. A trial adding L2's land while keeping its 28 mm body also crossed the front face by 0.060 mm, so the body was brought down coherently with its cap. Neither issue required a prescription or tolerance change.

| Surface | Before clear sd, mm | Final clear sd, mm | Final land outer radius, mm | Evidence / limiting requirement |
| --- | ---: | ---: | ---: | --- |
| 3 | 28 | 26.3 | — | Figure L2 body ≈25.7; near axial height 26.247825 |
| 4 | 28 | 25.6 | 26.3 | Figure rear-face land; near axial height 25.547468 |
| 5 | 27 | 24.1 | — | Figure L3 body ≈23.4; near axial height 24.021778 |
| 6 | 27 | 21.0 | 24.1 | Figure rear-face land; near axial height 20.940371 |
| 7 | 23 | 20.2 | — | Figure L4 ≈20.1; near axial height 20.179065 |
| 8 | 23 | 20.2 | — | Keeps L4 square; near axial height 19.772382 |
| 9 | 23 | 18.0 | — | Figure L5 body ≈17.9; infinity physical-stop axial height 17.049899 |
| 10 | 23 | 16.0 | 18.0 | Figure cap ≈15.8; nominal-f/1.479 meridional probe requires 15.92 |

Eight clear radii changed; the largest reduction is S10, 23 → 16 mm. Three opaque extensions restore the drawn body outlines without reopening the caps. S1/S2 stay 30 mm, within the figure's uncertainty. S12–S18 stay 18 mm, including the complete L8 substrate/resin/L9 run; the asphere is unchanged. S19/S20 stay 24 mm because their difference from the ≈22.5 mm drawing is within the measurement band and the existing plate clears the corner. No inner apertures, cut depths, glass, powered geometry, focus gaps or metadata changed. `gapSagFrac` remains 0.90.

The surface audit reports OK, no errors; aperture audit reports no rim, trace or iris limit; image-circle audit checks one lens with zero undersized and zero skipped; field coverage remains 100%, 21.65/21.65 mm with a clear corner and zero unsolved. The meridional clear-aperture probes at both gap endpoints have no axial/chief obstruction flags. Their pre-existing extreme `LOWER no-ray-found` remains; that probe's axial column is evaluated at infinity even with its near-gap option, so it was not used to establish finite-conjugate floors. Independent aimed traces use the actual 813.676935 mm source object distance at near focus and the unchanged physical stop. Exact axial rays through normalized stop radii 0, 0.5, 0.7, 0.85 and 1 clear both states; the smallest new near marginal clearance is 0.020935 mm at S7. All 812 axial lattice samples transmit at each state, and both source-edge chief rays clear. Infinity LSA at normalized pupil 1/0.85/0.7/0.5 remains −0.027/−0.011/−0.011/−0.024 mm. No asphere departure statement needs recomputation because S15's rim is unchanged.

Engine before → after: EFL 84.548650747 → 84.548650747 mm; f/1.479 → f/1.479; declared half-field 14.239 → 14.239°; tracing half-field 15.725570 → 15.725570°; physical stop radius 15.090708516 → 15.090708516 mm. The fixed iris was not changed to force the marketed f/1.4 or the source's near f/1.584. No iris/stop change is recommended from this evidence.

The committed starting rims in `.lens-work/base1125sd/SamyangAF85mmf14EF.data.ts` are the illumination baseline. The engine's `rimcost --loo` gives infinity corner transmission 43.1 → 43.1% at 14.239°, worst loss 0.0 percentage points over its sampled fields. A scratch copy changing only the runtime focus selection to 1 gives near corner transmission 46.7 → 46.7% at the engine's ≈11.9° edge, worst loss 0.5 points at zero field; restoring L2 wins back those 0.5 points. Other element restores win back 0.0 points at displayed precision. These satisfy the three-point budget. The engine near curve itself has 87.4 → 86.9% axial transmission under its pupil convention; it is distinct from the explicit fixed-physical-stop/source-conjugate trace, whose axial transmission is 100%.

The separate 812-ray source-conjugate lattice preserves the earlier disclosed source-edge blockage: infinity 57.6355 → 57.6355% (42.3645% transmitted), near 45.8128 → 45.8128% (54.1872% transmitted). Front-cap blockage remains dominant. Across seven source-field samples per state, the final cuts cost at most 0.2463 points near focus and 0.0 points at infinity. These are geometric fractions, not measured factory illumination; the engine and explicit-source traces use different pupil/field conventions and should not be conflated.

Matched-scale model/figure comparisons were rendered and viewed at both focus endpoints. The scratch sketch was extended to draw the three `rimExtensionSd` lands, since the supplied sketch otherwise draws straight cap joins. Black is final, blue is the committed baseline; the smaller L3/L4/L5 outlines and rear-face lands follow the source taper while preserving near-state clearance. Files: `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-4b6LS6/fcefa615-105e-4bd7-925a-ed68ad81cb71/scratchpad/sd/samyang85/overlay.png` and sibling `overlay-near.png`. This is a sketch comparison, not a live browser check; the coordinator retains the live-page check.

The stored maker EF image was viewed: nine glass elements / seven groups, front-to-rear taper, L6–L7 and L8–L9 cemented pairs and the highlighted L8 hybrid asphere agree. The low-resolution artwork is only a proportion check; its front section is slightly taller relative to the rear groups. It marks no ED positions and no iris. The different FE design is not the dimensional reference. The patent front page confirms inventors 류재명 / 이해진 / 이정두 (Jae Myung Ryu / Hae Jin Lee / Jeong Du Lee), Samyang Optics Co., Ltd., KR 10-2213072 B1, filing 2019-05-09, registration 2021-02-01 and publication 2021-02-08. No new naming or bibliographic mismatch was found.

Open limits retained: production prescription and dimensions, supplier/resin identity, intermediate focus cam, source summary discrepancies, near f-number, variable plate-gap representation and D5's meaning. No stop relocation is justified. No sandbox refusal occurred in this semi-diameter pass.

## 2026-11-14 — Glass labels, name and mount metadata

Glasscheck resolves ten of eleven modeled material entries: all nine lens glasses and the published rear filter use compatible HOYA catalog rows; the separate hybrid resin remains unresolved by design with Abbe-based dispersion. Glass labels were already present and remain unchanged. Each old → new label and resolved row is listed below. Deltas are catalog minus printed values, using the catalog Sellmeier index at 587.5618 nm and its calculated Abbe number; they are not changes to the prescription.

| Element / entry | Old → new label | Resolved HOYA row | Δnd | Δνd |
| --- | --- | --- | ---: | ---: |
| L1 / 1 | TAF1 (HOYA) → TAF1 (HOYA) | TAF1 | +2.897247e-8 | +0.004284 |
| L2 / 2 | NBF1 (HOYA) → NBF1 (HOYA) | NBF1 | −6.779474e-7 | +0.001598 |
| L3 / 3 | E-FD10 (HOYA) → E-FD10 (HOYA) | E-FD10 | −2.174405e-7 | +0.000486 |
| L4 / 4 | TAF1 (HOYA) → TAF1 (HOYA) | TAF1 | +2.897247e-8 | +0.004284 |
| L5 / 5 | NBFD15 (HOYA) → NBFD15 (HOYA) | NBFD15 | −6.081088e-7 | −0.000596 |
| L6 / 6 | E-FEL1 (HOYA) → E-FEL1 (HOYA) | E-FEL1 | −1.217390e-7 | +0.000728 |
| L7 / 7 | NBFD11 (HOYA) → NBFD11 (HOYA) | NBFD11 | −3.127807e-6 | +0.004383 |
| Hybrid layer / 8 | Unmatched resin (nd 1.517 / νd 52) → Unmatched resin (nd 1.517 / νd 52) | None | — | — |
| L8 / 9 | TAF1 (HOYA) → TAF1 (HOYA) | TAF1 | +2.897247e-8 | +0.004284 |
| L9 / 10 | E-FD2 (HOYA) → E-FD2 (HOYA) | E-FD2 | −1.759915e-7 | +0.000565 |
| Published rear filter / 11 | BSC7 (HOYA) → BSC7 (HOYA) | BSC7 | −1.783974e-6 | −0.001742 |

The hybrid resin is an exception to the addendum's generic “no row inside the tolerance” explanation. A full catalog scan finds HOYA E-CF6 (Δnd +0.000419901, Δνd +0.150805) and Hikari J-KF6 (+0.000420010, +0.203782) inside the numeric window, but neither establishes the resin's dispersion or chemistry. Its existing unmatched label is retained as assigned. The analysis states that limitation rather than claiming no coordinate-compatible glass exists. The ten catalog curves remain spectral stand-ins anchored at the printed indices, not supplier identifications; exact production glasses remain unconfirmed. The stale analysis claim of TAF1 νd 49.63 was removed: the current catalog calculation is 49.624284, matching the printed 49.62 to two decimals.

Name and mount scope: the data already reads “SAMYANG AF 85mm f/1.4 EF / F,” with Canon EF and Nikon F mount ids and a subtitle covering both versions; no data-file edit was needed. The analysis H1 and product statements now cover both mounts while retaining the distinct 11/8 FE / WO-family comparison. The [maker's F product page](https://www.lksamyang.com/en/product/product-view.php?seq=422&title=) specifies Nikon F, nine elements in seven groups, one hybrid asphere, f/1.4–16 and 0.90 m minimum focus, and links the same construction image 1559813077 as the EF page. The [official Korean announcement](https://www.lksamyang.com/ko/about/notice-view.php?seq=650) confirms 11 April 2019; [Photography Blog's contemporary announcement](https://www.photographyblog.com/news/samyang_af_85mm_f1_4_f_mf_14mm_f2_8_z_and_mf_85mm_f1_4_z_nikon_lenses) is corroborating context. The addendum's Chinese notice URL was inaccessible and Photography Blog returned HTTP 403 on direct opening; the official Korean notice and manufacturer product text were available. Existing semi-diameter findings and optical limitations are retained.

Before/after built and probe output is identical: EFL 84.54865074703312 mm, FOPEN 1.479, half-field 14.239°, physical stop radius 15.090708515822355 mm, infinity after-filter BFD 0.5094 mm and near BFD −8.4999 mm; focus keys remain 0 and 1. Surface audit reports OK with no errors. No command or edit was refused by the sandbox. The required headless page-view attempt emitted thermal-notification and DNS-watch errors with no screenshot output; it was not retried. Rendered-page review remains open for the coordinator. No optical or data-file changes were made.
