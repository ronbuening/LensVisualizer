# Qualified pre-integration audit
- Original US2670659 EI,5elements/4airgroups. Corrected secondary citation2670649 explicitly excluded, no silent equivalence. Productphoto supports115mmf5.5 identity, patent bridge secondary/topological only; no exact factory/example selection.
-115×normalized representative, sourceillustration150mm distinct. Source a3=.00994 retained; all optics literal, no fitting. EFL115.0039016509mm,+.00339274% nominal.
- Printed BFL.82606 retained rather than calculated.826058319344; difference about.000193275mm atscale. Infinity only, no separatecomponents/prototypes/namesakes counts.
- Explicit source helium-d and Abbe nu; no sodiumD substitution, actualmelt/fullcurve/radioactivity inference.
- Central source diaphragm gap, inferred midpoint coordinate and geometry-only bodycaps20/15/11.5/15. Default.9limits, no override or ray-fitted aperture. Independent full-cap geometry/iris review passed.
- Native and isolated strict TypeScript pass; final optics same as acceptedpilot exceptkey/name. Initial25degree diagnostic preserved; source42.5degreeedge only7OK19clipped/26. No85degreecoverage/throughput/imageplane/MTF certification.
- Fullcurrent-corpus/app/lint/format/build/browser/MTF deferred and unpassed. Hidden/unintegrated/undeployed. Count only after final independent closure and complete privatearchive readback. Full source evidence external verifiedarchive linked; nonsupportive52MBcatalog not duplicated, not deleted.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images at 300/600 dpi and checked all nine radii, eight thicknesses and airspaces, five refractive-index/Abbe-number pairs, and the printed back focus against Example I at 115 times scale; no transcription mismatches were found. Codex independently re-read PDF pages 1–3, including the figures, bibliographic heading, Example I table, helium-d reference, normalized units, diaphragm space and back-focus entry. Verdict: valid with notes. The validator supports a representative Ultragon association through Cröll's patent-family citation, five-element/four-group construction and Example I's 173/224 mm cell focal lengths matching the reported 175/225 mm product cells; the conflicting L4 glass description prevents an exact factory-prescription claim.

Changes:

- Type import: `../LensVisualizer/src/types/lensDataV2.js` → `../../types/lensDataV2.js`, to use the worktree's type definition.
- File form: direct default object → `const LENS_DATA = { ... } satisfies LensDataV2Input;` followed by `export default LENS_DATA;`. Added one JSDoc header identifying the patent, example, 115 times scale, conversion to millimetres, inferred stop and rims, and printed rather than inferred back focus.
- `source.patentNumber`: `US 2670659` → `US 2,670,659 A`, the required publication-number form.
- `source.example`: absent → `{ label: "Example I", id: "1" }`, identifying the transcribed example.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`, the assigned canonical mount.
- `catalog.imageFormat`: absent → `"5x7"`, the official coverage reported by the validator. The image-circle audit found no undersized rims, so the conditional change to 4x5 was unnecessary. This metadata does not assert an unclipped 5x7 corner.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: representative infinity only, separate component modes not modeled` → `This model represents the lens at infinity, with no separate component modes modeled.`, replacing the internal marker with a plain sentence.
- Rounded floating-point noise only: surface 1 `d` 5.335999999999999 → 5.336; surface 4 and STO `d` 7.514099999999999 → 7.5141; surface 5 `R` -26.568450000000002 → -26.56845; surface 6 `R` 62.020649999999996 → 62.02065; surface 8 `d` 2.3954500000000003 → 2.39545. These retain the source precision and the existing midpoint stop placement.

All semi-diameters, the physical stop placement, prescription values at source precision and `visible: false` are retained. The analysis file is unchanged; no analysis correction was assigned.

After these changes, `built.mjs` gives EFL 115.00390165088358 mm, f/5.5, total track 128.0801 mm and stop semi-diameter 8.776238253884697 mm. The independent validator reports BFD 94.9967 mm against printed 94.9969 mm; `probe.mjs` confirms those rounded values after the changes.

Audit results:

- `npx prettier --check` on all three assigned files: passed.
- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within 3% of the stated f-number; zero rim, trace, iris or failed stations.
- `audit:image-circle`, 5x7: one lens checked, zero undersized, zero skipped. This is the lenient rim-floor check, not a guarantee of full corner transmission.
- `audit:field-coverage --below=1.01`: the hidden catalog entry was initially skipped. Repeated on an otherwise identical scratch copy with `visible: true`: one lens/one station, zero skipped; 42.5° reaches 106.69 mm of the 109.25 mm corner semi-diagonal, 97.6535% (reported as 98%). The 43.2202° corner ray clips at surfaces 6 (12.2778 > 11.5 mm), 7 (12.3013 > 11.5 mm), and 9 (15.2586 > 15 mm). The validator listed surfaces 6 and 9; the current audit additionally identifies surface 7. No rim or stop adjustment was made.

Open:

- Preserve the optional figure differences for later review: the validator estimates Fig. 2 body semi-diameters near 19/16/13/15 mm versus the retained 20/15/11.5/15 mm, and the stop near 0.63 of a2 from R4 versus the retained midpoint. Its optional 12.0 mm doublet clears the patent-angle probe, while a roughly 12.3 mm doublet needed at the 5x7 corner approaches the L4 knife edge. These are notes, not authorized changes.
- The later cleanup pass still owns file/key/name/subtitle/specs wording, element type and glass class labels, analysis spacing and voice, and private archive references. In particular, the validator attributes the 85° sentence to the Example II paragraph and confirms f/32 from Cröll; the analysis still needs those qualifications in that pass.
- The exact historical glass identity and exact production-to-example match remain unresolved. The retained 5x7 metadata records official coverage with a clipped design corner, not measured image quality or throughput.
