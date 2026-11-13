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

- Preserve the optional figure differences for later review: the validator estimates Fig. 2 body semi-diameters near 19/16/13/15 mm versus the retained 20/15/11.5/15 mm, and the stop near 0.63 of a2 from R4 versus the retained midpoint. Its optional 12.0 mm doublet clears the patent-angle probe, while a roughly 12.3 mm doublet needed at the 5x7 corner approaches the L4 knife edge. These are notes, not authorized changes.
- Closed by the cleanup pass below: subtitle/specs wording, element types and glass labels, analysis spacing and voice, private archive references, attribution of the 85° sentence to Example II, and confirmation of f/32 from Cröll. File/key/name choices remain the coordinator's.
- The exact historical glass identity and exact production-to-example match remain unresolved. The retained 5x7 metadata records official coverage with a clipped design corner, not measured image quality or throughput.

## 2026-11-13 — Cleanup and wording pass

Re-read the existing patent page renders: bibliographic heading, Figs. 1–2, all nine radii, eight thicknesses/airspaces, five helium-d/Abbe pairs and p0′ in Example I. No transcription mismatch was found. Example I prints L2's index as 1.72800, so its five-decimal precision governs the glass comparison. Cröll's large-format article, pp. 15–17 and Table 7, confirms f/5.5–32 and the 175 mm front / 225 mm rear convertible cells; its Fig. 1c on p. 3 is a schematic, not a to-scale maker drawing. Independent paraxial calculation gives Example I cell focal lengths of 173.2/223.6 mm versus Example II's 199.7/188.4 mm at the same scale. The L4 discrepancy is retained: Example I 1.60921/58.8 versus Example II 1.65953/57.0 and Cröll's Apo-Lanthar-glass description.

Added the subtitle “US 2,670,659 A, Example I — Ultragon 115mm f/5.5, scaled ×115” and specs “5 ELEMENTS / 4 GROUPS”, “ALL SPHERICAL”, “f/5.5–32”, “CONVERTIBLE: FRONT 175 mm / REAR 225 mm”. Header wording now states the cell-based association and uncertainty without process language. Element types now follow the radius signs: Positive Meniscus / Negative Meniscus / Biconcave Negative / Biconvex Positive / Negative Meniscus. Labels remain Element 1–5; roles identify each member's place in the two cells. L3 and L4 both carry `cemented: "C1"`, with a C1 doublets bracket from surface 5 to 7. No apd tags were added.

All five former “Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified” labels became “Unmatched (nd … / V …)” with their printed pairs: L1 1.62095/60.3, L2 1.72800/28.4, L3 1.51443/54.7, L4 1.60921/58.8, L5 1.56866/56.2. No catalog row meets |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15. Nearest candidates checked with glassnear and trylabel were N-SK16 (Schott), SF10 (Schott), KF3 (Sumita), SK3 (Sumita), and BAC4 (Hoya). Their catalog-minus-patent Δnd/Δνd are respectively −0.00054/+0.02, +0.00025/+0.01, +0.00011/−0.10, −0.00040/+0.10, +0.00017/−0.16, so none was adopted. Relabeling changes source nd/νd by zero; no spectral fields were present to remove. The d-line reference is unchanged.

Focus closeFocusM is written as 1e15 with the same numeric value. Description is now “Infinity focus only; separate front- and rear-cell configurations are not modeled.” No minimum focus distance was sourced or added. Existing mount, format, source identities, visibility and aperture settings remain unchanged.

The analysis now follows the patent identification, architecture, element, glass and focus sections, retaining the first-order results and source limits. Removed process/test passages, private links and broken spacing. Corrected the f/32 attribution and Example II's 85° sentence, and explained the cell-length comparison and L4 conflict. Historical audit sections remain; stale cleanup and visibility statements are marked closed in place.

Before/after built and probe outputs are identical: EFL 115.00390165088358 mm; FOPEN 5.5; halfField 42.5°; stop radius 8.776238253884697 mm; BFD 94.9967 mm; printed last gap 94.9969 mm; total track 128.0801 mm. Both focus keyframe probe lines are unchanged. All prescription surfaces, refractive indices, Abbe numbers, rims and the stop placement are unchanged.

Surface audit: OK — no validation errors. Aperture audit: one station within 3% of stated f-number; zero rim limits, trace failures, iris failures or failed stations. Field-coverage audit: one station in the 90–99% band, none below 90%, zero skipped; consistent with the earlier 97.6535% result. Formatting was intentionally skipped per the addendum. The prescribed screenshot helper produced no image, and the browser-access host was unavailable. The native Safari fallback was denied by the computer-use tool (“Computer Use was not approved to use Safari”); that action stopped without retry. Rendered-page review could not be completed. No file edit or audit command was denied.

Open:

- Stop remains at a2's midpoint; Fig. 2 suggests about 0.63·a2 from R4. Retained body semi-diameters 20/15/11.5/15 mm differ from the validator's figure estimates of about 19/16/13/15 mm. Optional 12.0 mm doublet rims would clear the patent-angle probe; about 12.3 mm for the 5×7 corner approaches L4's knife edge. No optical changes were made.
- The 5×7 corner remains about 98% covered geometrically: 106.69/109.25 mm, with the 43.2202° corner clipping at surfaces 6, 7 and 9. Full 85° commercial coverage, image quality and throughput are not established by this model.
- Exact historical glass identities, radioactive composition and the exact production-to-example match remain unresolved. DE 868,524 has not been independently compared; no to-scale maker diagram was found.
- Minimum focus distance, finite-focus spacings and separate convertible-cell configurations are not supplied by this model.
- Rendered title, subtitle/specs and focus-panel review remains open: the screenshot helper produced no image, the browser-access host was unavailable, and the native Safari fallback was denied by the computer-use tool.
