# Qualified pre-integration audit
- Original US2670659 EI,5elements/4airgroups. Corrected secondary citation2670649 explicitly excluded, no silent equivalence. Productphoto supports115mmf5.5 identity, patent bridge secondary/topological only; no exact factory/example selection.
-115×normalized representative, sourceillustration150mm distinct. Source a3=.00994 retained; all optics literal, no fitting. EFL115.0039016509mm,+.00339274% nominal.
- Printed BFL.82606 retained rather than calculated.826058319344; difference about.000193275mm atscale. Infinity only, no separatecomponents/prototypes/namesakes counts.
- Explicit source helium-d and Abbe nu; no sodiumD substitution, actualmelt/fullcurve/radioactivity inference.
- Central source diaphragm gap, inferred midpoint coordinate and geometry-only bodycaps20/15/11.5/15. Default.9limits, no override or ray-fitted aperture. Independent full-cap geometry/iris review passed.
- Native and isolated strict TypeScript pass; final optics same as acceptedpilot exceptkey/name. Initial25degree diagnostic preserved; source42.5degreeedge only7OK19clipped/26. No85degreecoverage/throughput/imageplane/MTF certification.
- Fullcurrent-corpus/app/lint/format/build/browser/MTF deferred and unpassed. Hidden/unintegrated/undeployed at this initial audit; closed by the subsequent deployment and cleanup passes for integration and visibility. Count only after final independent closure and complete privatearchive readback. Full source evidence external verifiedarchive linked; nonsupportive52MBcatalog not duplicated, not deleted.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images at 300/600 dpi and checked all nine radii, eight thicknesses and airspaces, five refractive-index/Abbe-number pairs, and the printed back focus against Example I at 115 times scale; no transcription mismatches were found. Codex independently re-read PDF pages 1–3, including the figures, bibliographic heading, Example I table, helium-d reference, normalized units, diaphragm space and back-focus entry. Verdict: valid with notes. The validator supports a representative Ultragon association through Cröll's patent-family citation, five-element/four-group construction and Example I's 173/224 mm cell focal lengths matching the reported 175/225 mm product cells; the conflicting L4 glass description prevents an exact factory-prescription claim.

Changes:

- Type import: `../LensVisualizer/src/types/lensDataV2.js` → `../../types/lensDataV2.js`, to use the worktree's type definition.
- File form: direct default object → `const LENS_DATA = { ... } satisfies LensDataV2Input;` followed by `export default LENS_DATA;`. Added one JSDoc header identifying the patent, example, 115 times scale, conversion to millimetres, inferred stop and rims, and printed rather than inferred back focus.
- `source.patentNumber`: `US 2670659` → `US 2,670,659 A`, the required publication-number form.
- `source.example`: absent → `{ label: "Example I", id: "1" }`, identifying the transcribed example.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`, the assigned canonical mount.
- `catalog.imageFormat`: absent → `"5x7"`, the official coverage reported by the validator. The image-circle audit found no undersized rims, so the conditional change to 4x5 was unnecessary. This metadata does not assert an unclipped 5x7 corner.
- `focus.description`: internal marker and infinity/component-mode wording → `This model represents the lens at infinity, with no separate component modes modeled.`, replacing the internal marker with a plain sentence.
- Rounded floating-point noise only: surface 1 `d` 5.335999999999999 → 5.336; surface 4 and STO `d` 7.514099999999999 → 7.5141; surface 5 `R` -26.568450000000002 → -26.56845; surface 6 `R` 62.020649999999996 → 62.02065; surface 8 `d` 2.3954500000000003 → 2.39545. These retain the source precision and the existing midpoint stop placement.

All semi-diameters, the physical stop placement, prescription values at source precision and the then-hidden visibility setting were retained. Visibility was subsequently enabled by the coordinator. The analysis file was unchanged in this deployment pass; its cleanup is recorded below.

After these changes, `built.mjs` gives EFL 115.00390165088358 mm, f/5.5, total track 128.0801 mm and stop semi-diameter 8.776238253884697 mm. The independent validator reports BFD 94.9967 mm against printed 94.9969 mm; `probe.mjs` confirms those rounded values after the changes.

Audit results:

- `npx prettier --check` on all three assigned files: passed.
- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within 3% of the stated f-number; zero rim, trace, iris or failed stations.
- `audit:image-circle`, 5x7: one lens checked, zero undersized, zero skipped. This is the lenient rim-floor check, not a guarantee of full corner transmission.
- `audit:field-coverage --below=1.01`: the hidden catalog entry was initially skipped. Repeated on an otherwise identical scratch copy with `visible: true`: one lens/one station, zero skipped; 42.5° reaches 106.69 mm of the 109.25 mm corner semi-diagonal, 97.6535% (reported as 98%). The 43.2202° corner ray clips at surfaces 6 (12.2778 > 11.5 mm), 7 (12.3013 > 11.5 mm), and 9 (15.2586 > 15 mm). The validator listed surfaces 6 and 9; the current audit additionally identifies surface 7. No rim or stop adjustment was made.

Open:

- Rim review closed by the semi-diameter pass below; the historical validator estimates were Fig. 2 body semi-diameters near 19/16/13/15 mm versus 20/15/11.5/15 mm. The stop near 0.63 of a2 from R4 versus the midpoint remains a coordinator decision. The doublet's 5×7 knife-edge limitation is quantified below.
- Closed by the cleanup pass below: subtitle/specs wording, element types and glass labels, analysis spacing and voice, private archive references, attribution of the 85° sentence to Example II, and confirmation of f/32 from Cröll. File/key/name choices remain the coordinator's.
- The exact historical glass identity and exact production-to-example match remain unresolved. The retained 5x7 metadata records official coverage with a clipped design corner, not measured image quality or throughput. (closed 2026-11-13: the corner-clipping limitation is resolved by S5–S7 = 12.31 mm, S8/S9 = 15.3 mm and a declared 86.5° full field / 43.25° maximum trace half-field; historical glass identity, exact production association, image quality and throughput remain unresolved.)

## 2026-11-13 — Cleanup and wording pass

Re-read the existing patent page renders: bibliographic heading, Figs. 1–2, all nine radii, eight thicknesses/airspaces, five helium-d/Abbe pairs and p0′ in Example I. No transcription mismatch was found. Example I prints L2's index as 1.72800, so its five-decimal precision governs the glass comparison. Cröll's large-format article, pp. 15–17 and Table 7, confirms f/5.5–32 and the 175 mm front / 225 mm rear convertible cells; its Fig. 1c on p. 3 is a schematic, not a to-scale maker drawing. Independent paraxial calculation gives Example I cell focal lengths of 173.2/223.6 mm versus Example II's 199.7/188.4 mm at the same scale. The L4 discrepancy is retained: Example I 1.60921/58.8 versus Example II 1.65953/57.0 and Cröll's Apo-Lanthar-glass description.

Added the subtitle “US 2,670,659 A, Example I — Ultragon 115mm f/5.5, scaled ×115” and specs “5 ELEMENTS / 4 GROUPS”, “ALL SPHERICAL”, “f/5.5–32”, “CONVERTIBLE: FRONT 175 mm / REAR 225 mm”. Header wording now states the cell-based association and uncertainty without process language. Element types now follow the radius signs: Positive Meniscus / Negative Meniscus / Biconcave Negative / Biconvex Positive / Negative Meniscus. Labels remain Element 1–5; roles identify each member's place in the two cells. L3 and L4 both carry `cemented: "C1"`, with a C1 doublets bracket from surface 5 to 7. No apd tags were added.

All five former “Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified” labels became “Unmatched (nd … / V …)” with their printed pairs: L1 1.62095/60.3, L2 1.72800/28.4, L3 1.51443/54.7, L4 1.60921/58.8, L5 1.56866/56.2. No catalog row meets |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. Nearest candidates checked with glassnear and trylabel were N-SK16 (Schott), SF10 (Schott), KF3 (Sumita), SK3 (Sumita), and BAC4 (Hoya). Their catalog-minus-patent Δnd/Δνd are respectively −0.00054/+0.02, +0.00025/+0.01, +0.00011/−0.10, −0.00040/+0.10, +0.00017/−0.16, so none was adopted. Relabeling changes source nd/νd by zero; no spectral fields were present to remove. The d-line reference is unchanged.

Focus closeFocusM is written as 1e15 with the same numeric value. Description is now “Infinity focus only; separate front- and rear-cell configurations are not modeled.” No minimum focus distance was sourced or added. Existing mount, format, source identities, visibility and aperture settings remain unchanged.

The analysis now follows the patent identification, architecture, element, glass and focus sections, retaining the first-order results and source limits. Removed process/test passages, private links and broken spacing. Corrected the f/32 attribution and Example II's 85° sentence, and explained the cell-length comparison and L4 conflict. Historical audit sections remain; stale cleanup and visibility statements are marked closed in place.

Before/after built and probe outputs are identical: EFL 115.00390165088358 mm; FOPEN 5.5; halfField 42.5°; stop radius 8.776238253884697 mm; BFD 94.9967 mm; printed last gap 94.9969 mm; total track 128.0801 mm. Both focus keyframe probe lines are unchanged. All prescription surfaces, refractive indices, Abbe numbers, rims and the stop placement are unchanged.

Surface audit: OK — no validation errors. Aperture audit: one station within 3% of stated f-number; zero rim limits, trace failures, iris failures or failed stations. Field-coverage audit: one station in the 90–99% band, none below 90%, zero skipped; consistent with the earlier 97.6535% result. Formatting was intentionally skipped per the addendum. The prescribed screenshot helper produced no image, and the browser-access host was unavailable. The native Safari fallback was denied by the computer-use tool (“Computer Use was not approved to use Safari”); that action stopped without retry. Rendered-page review could not be completed. No file edit or audit command was denied.

Open:

- Rim review closed by the semi-diameter pass below: the doublet now has common 12.1 mm rims. Stop remains at a2's midpoint; Fig. 2 suggests about 0.63·a2 from R4, still unapplied. (closed 2026-11-13: the common doublet rim is now 12.31 mm and the rear-singlet rims are 15.3 mm, clearing the corner chief ray; the inferred midpoint stop remains unchanged.)
- The declared field reaches about 98% of the 5×7 corner semi-diagonal: 106.69/109.25 mm. The semi-diameter pass below clears the declared chief ray, while the 43.2202° corner still clips at surfaces 6, 7 and 9. Full 85° commercial coverage, image quality and throughput are not established by this model. (closed 2026-11-13: the 86.5° full field / 43.25° maximum trace half-field and enlarged rims give 100% geometric corner coverage with a clear chief ray; image quality and throughput remain unestablished.)
- Exact historical glass identities, radioactive composition and the exact production-to-example match remain unresolved. DE 868,524 has not been independently compared; no to-scale maker diagram was found.
- Minimum focus distance, finite-focus spacings and separate convertible-cell configurations are not supplied by this model.
- Rendered title, subtitle/specs and focus-panel review remains open: the screenshot helper produced no image, the browser-access host was unavailable, and the native Safari fallback was denied by the computer-use tool.

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local `patents/US2670659A.pdf`, PDF p. 1, Figs. 1–2, compared with Example I on PDF p. 3 at ×115. The complete figure sheet and bibliographic page were inspected, followed by 600 dpi figure crops. PDF p. 2 identifies Albrecht Wilhelm Tronnier, assignor to “Voigtlander, A. G., Braunschweig”; application 29 July 1952, Swiss priority 30 August 1951, patented 2 March 1954, US 2,670,659.

### Drawing scale and rim evidence

At 600 dpi, Fig. 2's axis is approximately y=4698, with first/last vertices x=1752/2780. The 33.0832 mm modeled vertex span gives 31.07 px/mm. A clean upper front arc gives a fitted radius of approximately 847 px (0.55 px RMS), versus R1=28.13015 mm: 30.11 px/mm, about 3% different. Thus the overall axial and transverse scales agree approximately. They do not prove local dimensional fidelity: the first element is about 187 px thick, or 6.02 mm at the span scale, versus 5.336 mm in Example I, a 13% difference. Fig. 2's local spacings and doublet proportions cannot supply exact Example I clear diameters.

Fig. 1 is more plainly schematic. Its first/last vertices are about x=1680/2678 at y≈2438, giving 30.17 px/mm. First-element thickness is about 190 px (6.30 versus 5.336 mm); the first air gap is drawn approximately 62 px (2.06 versus 0.0322 mm). A front-arc fit gives about 32.2 px/mm but is contaminated near the upper leader. These figures therefore govern relative rim heights and step order only. Their inclined bevels and annotation strokes are not read as additional clear spherical aperture; no inferred opaque lands were added.

Approximate body-height readings below show the uncertainty between drawings, rather than measured effective diameters. The native scan has roughly 2 px-wide raster steps at 600 dpi; leader/edge interpretation and schematic construction dominate the uncertainty.

| Surfaces | Before sd (mm) | Fig. 1 / Fig. 2 body-height equivalents (mm) | Final sd (mm) | Decision |
| --- | ---: | ---: | ---: | --- |
| 1, 2 | 20.0 each | ≈18.5 / 19.2 | 20.0 each | Within roughly 4–8% drawing noise; retain the front meniscus. |
| 3, 4 | 15.0 each | ≈14.3 / 15.8 | 15.0 each | Both readings within roughly 6%; retain the neighbouring step order. |
| 5 | 11.5 | ≈11.8 / 12.8 | 12.1 | Keep one common doublet rim with 6/7; no unsupported bevel/land reconstruction. |
| 6 | 11.5 | ≈11.8 / 12.8 | 12.1 | Declared-edge chief height 11.80 mm exceeds the baseline rim. |
| 7 | 11.5 | ≈11.8 / 12.8 | 12.1 | Declared-edge chief height 12.05 mm; 12.1 is the smallest passing tenth. |
| 8, 9 | 15.0 each | ≈14.5 / 15.0 | 15.0 each | Within drawing noise; no increase for an undeclared corner. |

The only numerical edits are 5, 6 and 7: 11.5→12.1 mm (+0.6 mm, +5.2%) each. The common rim preserves the doublet's straight shared edge. LSA before raising was −0.143/−0.389/−0.410/−0.276 mm at pupil fractions 1/0.85/0.7/0.5; there is no evidence here for a prescription repair. Both clear-aperture solvers agree on the chief heights. At the final rims, axial marginal heights on 5/6/7 are 8.41/8.65/8.83 mm and declared-edge chief heights are 8.46/11.80/12.05 mm. No axial or declared-edge chief clip remains. An upper unvignetted full-bundle ray is unavailable at that field; the pupil-lattice result below retains real off-axis loss.

### Field, light and corner limits

Before/after built results: EFL 115.0039016509 mm, f/5.5, half-field 42.5°, physical stop radius 8.776238254 mm and total track 128.0801 mm, all unchanged. The engine's separate `tracingHalfField` estimate rises 37.3676°→38.7820°; it is not the declared analysis edge. Surface audit passes with no errors; aperture audit has one passing station and zero rim/trace/iris/failed stations; image-circle audit has one checked, zero undersized, zero skipped. Field-coverage audit has one solved station, zero skipped, unchanged 106.686457/109.25 mm (97.6535%). Its limiting reason is the declared 42.5° projection, not a guarantee that the physical corner is clear.

The final `rimcost.mjs --loo` comparison against `base1124sd/VoigtlanderUltragon115mmf55.data.ts` gives 35.6%→43.1% geometric transmission at 42.5°. At 39.7° it is 46.4%→54.0%; at 34.0°, 64.1%→71.4%; the axial value stays 100%. No sampled field loses light, so the lands/cuts budget is met. These are geometric pupil fractions, not photometric relative illumination. The physical 5×7 corner is at 43.220170°, beyond the declared model field; its illumination was not calculated. The rejected supplemental diagnostic described below was not retried.

At the 5×7 corner, surfaces 6/7/9 require 12.277756/12.301282/15.258585 mm against final 12.1/12.1/15.0 mm. Surface 6 is the first clipped surface; 7 and 9 also clip. A whole-set trial with doublet 5/6/7=12.31 mm and rear singlet 8/9=15.3 mm passes the surface validator and clears that chief ray. It is broadly compatible with Fig. 2 proportions, but approaches the L4 knife edge and requires finer precision than the drawing supports. The next rounded tenth, 12.4 mm, has negative L4 edge thickness (−0.081 mm). The Fig. 2 ≈13 mm body height cannot be extended as a common clear spherical rim in Example I. The trial is not applied; the least change clearing the declared field is retained.

### Render, stop recommendation and remaining scope

Viewed the baseline and final model sketches and the matched-scale side-by-side `overlay.png` under scratch `sd/ultragon/`. The final common doublet rim is closer to Fig. 2 while remaining compatible with Fig. 1's schematic proportions. Front/rear singlet steps remain intact. The sketch joins rims directly and does not model bevels or lands. No browser was run; the coordinator's live page check remains open.

The existing secondary drawing, Cröll Fig. 1c on article p. 3, was inspected: it agrees on five elements/four groups and the rear cemented doublet. It explicitly says “not to scale”; no manufacturer construction diagram was found, and no special-glass or aspherical positions can be certified from it. The modeled elements are all spherical. The historical L4 product-glass conflict remains documented in the analysis.

Recommend coordinator review of the inferred stop at roughly 0.63 of a2 from R4: that would split the 15.0282 mm gap approximately 9.47/5.56 mm rather than 7.5141/7.5141 mm, moving the iris about 1.95 mm toward the image. This is schematic positional evidence, not a tabulated dimension. No stop position or radius change was applied. No new name/metadata mismatch was found; the existing Example II attribution of the 85° sentence and uncertain production-to-example association remain material qualifications.

Sandbox refusal: an attempted relative write of a supplemental `corner.mjs` diagnostic targeted the read-only main checkout and returned `operation not permitted`. That diagnostic was abandoned, without retry or alternate execution. All assigned-file edits and normal audits succeeded.

Formatting checks passed on all three assigned files, and the scoped whitespace diff check was clean. A structured comparison with the saved baseline confirms that only surface sd fields 5/6/7 changed; all surface R/d/media/stop fields match the baseline. The two Markdown sidecars were formatted; the data file received narrow edits only.

## 2026-11-13 — Glass proxies and catalog metadata

All five former Unmatched labels now use the spectral-proxy labels below. Catalog values and differences are from the current repository glass catalog; Δ is catalog minus the unchanged printed helium-d/Abbe pair.

| Element | Old label → new label | Catalog nd / νd | Δnd / Δνd |
| --- | --- | --- | --- |
| L1 | `Unmatched (nd 1.62095 / V 60.3)` → `N-SK16 (spectral proxy; patent nd 1.62095 / V 60.3; supplier and melt unspecified)` (Schott row) | 1.62041 / 60.32 | −0.00054 / +0.02 |
| L2 | `Unmatched (nd 1.72800 / V 28.4)` → `SF10 (spectral proxy; patent nd 1.72800 / V 28.4; supplier and melt unspecified)` (Schott row) | 1.72825 / 28.41 | +0.00025 / +0.01 |
| L3 | `Unmatched (nd 1.51443 / V 54.7)` → `KF3 (spectral proxy; patent nd 1.51443 / V 54.7; supplier and melt unspecified)` (Sumita row) | 1.51454 / 54.60 | +0.00011 / −0.10 |
| L4 | `Unmatched (nd 1.60921 / V 58.8)` → `SK3 (spectral proxy; patent nd 1.60921 / V 58.8; supplier and melt unspecified)` (Sumita row) | 1.60881 / 58.90 | −0.00040 / +0.10 |
| L5 | `Unmatched (nd 1.56866 / V 56.2)` → `BAC4 (spectral proxy; patent nd 1.56866 / V 56.2; supplier and melt unspecified)` (Hoya row) | 1.56883 / 56.04 | +0.00017 / −0.16 |

These rows meet the repository's proxy rule of about 0.25 in Abbe number and about 0.002 in index. The engine keeps each printed index at its helium-d reference line and borrows only the row's wavelength dependence; printed nd/νd are unchanged. These are not exact glass matches and identify no historical glass, supplier or melt. Historical composition and the L4 production-to-example conflict remain unresolved.

`chan.mjs` compares the supplied `base1124glass/VoigtlanderUltragon115mmf55.data.ts` pre-relabel baseline with the current data. R/G/B/V correspond to C/d/F/g. Paraxial back-focus offsets relative to d are:

| Line (channel) | Before (µm) | After (µm) |
| --- | ---: | ---: |
| C (R) | +269.9 | +268.4 |
| d (G) | 0.0 | 0.0 |
| F (B) | −496.0 | −469.0 |
| g (V) | −766.1 | −705.9 |

Absolute C/d/F/g back focus is 95.2666/94.9967/94.5007/94.2306 mm before → 95.2651/94.9967/94.5277/94.2908 mm after. The d-line EFL remains 115.0039 mm. These are modeled paraxial results from catalog dispersion proxies, not measured chromatic performance.

Rims and field: S5–S7 increase 12.1 → 12.31 mm and S8/S9 increase 15.0 → 15.3 mm. These are the least rims clearing the approximately 43.2° chief ray to the full 5×7 corner; the earlier unapplied whole-set trial is now the adopted geometry. A common 12.4 mm doublet rim fails the L4 edge check (−0.081 mm edge thickness). Projection `fullFieldDeg` increases 85 → 86.5 and `maxTraceFieldDeg` increases 42.5 → 43.25. Geometric field coverage increases 97.65% → 100%, reaching the full 109.25 mm corner semi-diagonal and agreeing with the official 5×7 coverage Cröll lists. At the 43.2202° corner, S6/S7/S9 chief heights of 12.2778/12.3013/15.2586 mm clear the current 12.31/12.31/15.3 mm rims. The earlier 43.1% pupil-lattice result belongs to the previous rims at 42.5°; it is not a current-edge or corner transmission measurement. Full-pupil transmission, illumination and image quality remain unestablished.

The analysis describes the final proxy palette, current rims and declared field in present tense. Name, mounts and `5x7` format are unchanged. The current data header already records the rim and coverage rationale; this text-only assignment makes no data-file edits.

Scoped `npx prettier --write` and `npx prettier --check` on the two Markdown files completed successfully. A byte comparison against the saved pre-edit data file confirms no data-file change. No tool call or edit was denied during this text update.
