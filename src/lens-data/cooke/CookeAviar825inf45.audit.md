# Aviar GB Example I audit

Originally hidden (closed: the coordinator has made the lens visible), based on original GB 113590, without an exact factory 100 mm assertion. Independent review confirmed all eight GB radii, seven intervals and four glass pairs. GB −.8152 and US −.9152 second radii were preserved separately. The GB +0.637% EFL residual was retained without fitting; its normalization origin is explained in the dated deployment section below.

The original scale was ×100. Calculated infinity BFL 92.278731268 mm was derived, rather than a source image interval. Sodium D and the Abbe definition were explicit; the d reference was a disclosed approximation. No exact melt, full partial dispersion or finite-focus claim was made.

The original 12 mm rim inference and central-gap midpoint 1.81 / 1.81 mm were not source clear apertures or stop coordinates. Full-cap iris clearances were positive. The default 0.9 geometry limits were retained, without a source modification or geometry exception. Metadata source.example.id was corrected from I to 1 while retaining label Example I; the initial failure was recorded, with no optical change.

At that stage only key/name differed from the feasibility model. Isolated strict TypeScript checks and optical traversals were rerun. The 26 successful rays per field did not establish image-plane landing, MTF or commercial format. Full application, current-corpus, lint, format, build, browser and MTF work was deferred; those earlier checks did not constitute a release.

The maker's Compendium gave an explicit retrospective patent/product link. No exact retail example selection or exhaustive novelty claim was made. Example II was not modeled. At that stage there was no publication, PR or deployment.

## 2026-11-13 — Deployment validation

Codex independently re-read the local GB 113,590 A and US 1,361,207 A PDF page 2 images, checking Example I's eight radii, seven thicknesses/air spaces, four index/Abbe pairs, unit focal length and f/4.5. The GB page also explicitly defines sodium D and the Abbe ratio. The supplied independent validator's verdict is **valid with notes**: GB r2 = −.8152 is retained, while the US −.9152 is a misprint; the +0.637% focal-length residual is inherent in the patent's loose normalization, not an error to fit away.

The product association is strong at the Aviar family level: the validator's Cooke Compendium evidence explicitly links Series II f/4.5 Aviar to British patent 113590, Warmisham and four separate, uncemented glasses. It does not establish an exact production Example I or a commercial 100 mm Aviar.

Changes made:

- File form: two leading line comments and the misplaced `../LensVisualizer/src/types/lensDataV2.js` import → first-line `../../types/lensDataV2.js` type import, one JSDoc header, `const LENS_DATA = { ... } satisfies LensDataV2Input;` and `export default LENS_DATA;`. The header now states ×100 normalized-unit-to-millimetre conversion, calculated EFL 100.64 mm and the inherent +0.637% residual, the US r2 misprint and retained GB value, inferred 12 mm rims and central stop, and calculated infinity back focus.
- `name`: `Cooke Aviar 100mm-class f/4.5 (GB Example I representative)` → `COOKE AVIAR f/4.5 (GB 113,590 Example I Design)`, avoiding an unsupported commercial 100 mm name.
- `source.patentNumber`: `GB 113590` → `GB 113,590 A`. Existing `source.example` remains label `Example I`, id `1`, in the specified shape.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`; `catalog.imageFormat`: absent → `6x9`, as assigned for the representative's coverage checks.
- L1/L4 `vd`: `56.400000000000006` → `56.4`, removing floating-point noise.
- L1–L4 `focalLengthMm`: absent → `36.21`, `−38.32`, `−42.18`, `36.21` mm. The element probe independently confirms each rounded isolated-element value.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity representative only` → `Only the infinity-focus prescription is modeled; no finite-focus movement is reconstructed.`
- Analysis: US/GB radius difference without an explicit misprint finding → explicit US misprint and retained GB value; unresolved EFL discrepancy → inherent normalization residual; uncertified element-focal-length statement → the four probe-verified, calculated values, distinguished from patent-published data.

After these changes, the engine summary gives EFL **100.636959925 mm**, **f/4.5**, total track **110.958731268 mm** and physical stop radius **9.697421739 mm**. The element probe gives back focus **92.2787 mm** and zero rounded image-plane defocus. Prescription radii, thicknesses, gaps, indices and rims are unchanged; `visible: false` was retained at this stage (closed: the coordinator later set it to true).

Validation:

- Surface audit: **OK — no validation errors**.
- Aperture audit: one station within 3% of the stated f-number; **zero rim limits, trace limits, iris limits or failures**.
- Image-circle audit: **1 lens checked, 0 undersized, 0 skipped**, using the assigned 6x9 format (101 mm diagonal).
- Field-coverage audit: the hidden original is skipped. An otherwise identical scratch copy with `visible: true` gives **100% coverage**, modeled half-field **26.558883°**, image semi-height **50.50 mm / 50.50 mm**, and a clear format-corner chief ray with no rim clips. This confirms modeled coverage, not patent-published field performance.

Closed in later passes: key/file names, subtitle/specs and analysis wording, element types and glass labels, and the unsupported 100 mm marketing focal length. Remaining sodium-D reference and rim limitations are listed in the cleanup section below. The historical 6x9 assignment did not establish a documented commercial 100 mm variant. Full application checks and release work remain outside this assignment.

## 2026-11-13 — Rescale and rename

Codex applied the owner-approved uniform rescale to the delivered Example I model and checked the parsed lengths and engine results before and after. The independent validator's report re-read GB 113,590 A page 2 against US 1,361,207, confirming all eight radii, seven thicknesses/air spaces and four index/Abbe pairs; its verdict remains **valid with notes**, including the GB r2 = −.8152 value, US −.9152 misprint and inherent +0.637% EFL residual.

Reason: the validator's Cooke Compendium evidence links Series II f/4.5 Aviar to patent 113590, Warmisham and four separate uncemented glasses. It documents f/4.5 focal lengths of 5, 6, 7, 8¼ and 10½ inches, including the assigned **8¼ in = 209.55 mm**; the former 100 mm scale did not identify a documented retail focal length. This remains a qualified Example I representative, not proof of an exact factory prescription.

Changes made:

- Scale: patent-unit conversion ×100 → **×209.55**, applying **one factor ×2.0955** to every delivered model length by a script over the parsed numbers. All **29 stored lengths** were independently checked after serialization: eight numeric `R`, nine `d` (including both stop gaps and the final image-side interval), eight surface `sd`, and four element `focalLengthMm` values. Each new length equals the old value ×2.0955 to within 0.0000005 mm print rounding. No explicit stop radius, projection/field length or `imageCircleMm` is authored in this file; the engine-derived stop radius independently scales by the same factor. Indices, Abbe numbers, aperture settings and dimensionless values are unchanged. The infinity-only `closeFocusM` sentinel is retained; it is not a reconstructed finite-focus distance.
- `name`: `COOKE AVIAR f/4.5 (GB 113,590 Example I Design)` → **`COOKE AVIAR 8¼ in f/4.5`**.
- `catalog.focalLengthMm`: marketing **100 → 209.55 mm**; design **100 → 210.88 mm**, the traced EFL rounded to two decimals as assigned, rather than a fit of the optics to 209.55 mm.
- Surface `sd`: **12 → 25.146 mm** throughout; central stop gaps **1.81 / 1.81 → 3.792855 / 3.792855 mm**; final image-side interval **92.278731268 → 193.370081 mm**. The final interval is rounded to six decimal places, with less than 0.0000004 mm change from exact multiplication.
- Stored L1–L4 `focalLengthMm`: **36.21 / −38.32 / −42.18 / 36.21 → 75.878055 / −80.29956 / −88.38819 / 75.878055 mm**. These scale the delivered rounded labels exactly; the independent element probe gives 75.87 / −80.30 / −88.38 / 75.87 mm when freshly calculated and rounded to two decimals. No label was independently refitted.
- `catalog.imageFormat`: **6x9 → 5x7**, selected because the otherwise identical visible scratch copy gives **99.999999734% coverage** (displayed as 100%), exceeding the required 98%. `catalog.lensMounts` remains `["large-format-lens-board"]`; `key`, filenames and `visible: false` remain unchanged.
- Header and analysis: former ×100 / 100 mm identification → ×209.55 and the documented 8¼ in identification; scaled radii, gaps, rims, back focus, iris radius, clearance and focal-length statements updated. The +0.637% residual and explicit US r2 misprint notes are retained. Earlier sparse checks are identified as measurements at the former scale; the current 5×7 coverage result is recorded separately.

First-order comparison (old → new):

- Engine EFL: **100.636959924994 → 210.884749522826 mm**; ratio **2.095499999999999**, differing from exact ×2.0955 multiplication by only 0.000000000000114 mm numerical roundoff.
- Paraxial BFD: **92.278731268277 → 193.370081372674 mm**; ratio ×2.0955 within numerical roundoff. The stored final interval differs from calculated best focus only by print rounding; `probe.mjs` reports defocus −0.0000 mm.
- Total track including image-side interval: **110.958731268 → 232.514021 mm**; exact scaled value 232.514021372094 mm, with the 0.000000372 mm difference solely from rounding that interval.
- Physical iris radius: **9.697421739097 → 20.320947254277 mm**, ratio ×2.0955 within numerical roundoff. `built.mjs` reports **f/4.5 → f/4.5**; `probe.mjs` independently reports **4.500 → 4.500**.

Audits, run from the main checkout against this worktree file:

- Surface: **OK — no validation errors**.
- Aperture: **1 lens / 1 station within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures**.
- Image circle: **1 lens checked, 0 undersized, 0 skipped**, for the 5×7 format's 218.5 mm diagonal.
- Field coverage: hidden original skipped, as expected. The visible scratch copy has **100% coverage**, modeled half-field **27.286873°**, image semi-height **109.249999710 / 109.25 mm**, a converged edge solution and a clear format-corner chief ray with no rim clips. This is model coverage, not a measured production image circle or source field specification.

Closed in later passes: key/file naming, subtitle/specs and analysis wording, element types and glass labels. Remaining sodium-D reference and rim limitations are listed below. The former unsupported 100 mm marketing value was resolved by the rescale. Full application checks and release work remain outside this assignment.

## 2026-11-13 — Cleanup and wording pass

Added the subtitle “GB 113,590 A, Example I — Cooke Aviar f/4.5, scaled to 8¼ in” and specs “4 ELEMENTS / 4 GROUPS”, “ALL SPHERICAL”, “f/4.5”. The header states the patent-to-millimetre conversion once and retains the residual, US r2 misprint, inferred rims/stop and calculated image interval. L1/L4 are Biconvex Positive; L2/L3 are Biconcave Negative, matching their radius signs. Labels remain Element 1–4; short roles identify the outer positive and inner negative components. All four groups are air-separated: no `cemented` tags or `doublets` entries are needed. No `apd` tags were added.

All four former glass labels “Source sodiumD/V explicitly defined; d-reference engine approximation” became Unmatched labels with the printed values: L1/L4 nD 1.6116 / V 56.4, L2 nD 1.5682 / V 43.4, L3 nD 1.5502 / V 45.8. Stored Δnd = 0 and ΔV = 0 for every relabel; catalog Δnd/ΔV are not applicable because no catalog row was assigned. `glasscheck.mjs` confirms unresolved-by-design Abbe fallback for each. Its closest weighted candidates also fail the exact-row limits: BACD8 differs by about −0.00043 / −0.63 for L1/L4, E-FL6 by −0.00088 / −0.56 for L2, and LLF7 by −0.00151 / −0.37 for L3. The existing `indexReference: "d"` remains unchanged.

Focus `closeFocusM` changed only in notation from 1000000000000000.0 to 1e15. Description: “Only the infinity-focus prescription is modeled; no finite-focus movement is reconstructed.” → “Infinity focus only; no finite-focus movement is specified.” No catalog minimum focus distance was added without a source. Existing mount, format, focal-length and patent metadata were retained.

The public analysis now describes the lens rather than file production or validation counts. It retains Warmisham, the +0.637% EFL residual, US r2 misprint, all source citations, element focal-length rounding, inferred dimensions and spectral limitations. The Cooke Compendium was re-read live: Series II f/4.5 Aviar, 1921–c.1963, four separate uncemented glasses, patent 113590 and Warmisham; its 1962 Burke & James advertisement explicitly lists the 8¼ in f/4.5 Aviar for 5×7 plates. This supports the existing catalog values, without establishing an exact factory Example I prescription.

Engine results before → after are identical: EFL 210.88474952282579 → 210.88474952282579 mm; FOPEN 4.5 → 4.5; halfField 39.39008628712742 → 39.39008628712742°; physical stop radius 20.32094725427708 → 20.32094725427708 mm; BFD 193.370081372674 → 193.370081372674 mm; total track 232.514021 → 232.514021 mm. Complete `built.mjs` and `probe.mjs --elements` outputs compare identically, including both focus keyframes. The built halfField is an engine default, distinct from the approximately 27.286873° 5×7 corner angle.

Surface audit: OK, no validation errors. Aperture audit: 1 lens / 1 station within 3% of the stated f-number; zero rim, trace or iris limits and zero failures. Field-coverage audit: 1 station at ≥99%, none unsolved or skipped.

Open:

- Closed by the semi-diameter pass below: every rim was compared with both Fig. 1 scans. The drawings support relative heights rather than absolute diameters; L2/L3 now have smaller rims, while L1/L4 retain the baseline inference and the f/4.5 beam remains clear. No printed clear apertures or iris coordinates were found.
- The central-gap midpoint stop and calculated infinity back focus are not patent dimensions; an exact production prescription and numerical patent field remain unestablished.
- The patent states sodium D while the existing model reference setting is helium d; full partial dispersion is unavailable. Exact glass/melt identities remain unknown.
- A retail minimum focus distance, finite-focus movement and minimum aperture are not established by the cited sources. The existing f-stop settings through f/22 remain display choices, rather than a sourced retail aperture range.
- Closed by the second review below: fresh live page and all four inspector PNGs were inspected, including title/specs and static-focus text. The earlier screenshot failure no longer blocks the page review.

No command or edit was denied. Full application checks and release work remain outside this cleanup assignment.

## 2026-11-13 — Semi-diameter pass against the patent figure

Sources inspected: local GB113590A.pdf, PDF page 4 Fig. 1, for Example I (numerical table on PDF page 2), and the cleaner US1361207A.pdf, PDF page 1 Fig. 1. Fig. 2 is the different Example II and was excluded. The prescription remains the GB version at ×209.55; the US r2 misprint is not used.

### Figure scale and evidence limits

The first-to-last vertex interval is 39.143940 mm. At 300 dpi, approximate GB vertex x coordinates are 962, 1087, 1140, 1161, 1262, 1282, 1341 and 1459 px: 497 px gives 12.6967 px/mm. Independent outer-element thickness checks give 125/9.534525 = 13.1103 and 118/9.534525 = 12.3761 px/mm, within about 3.3% of that span scale. However, the inner thicknesses are 21 and 20 px instead of the predicted 26.6 px, about 21% and 25% short; the rear inter-element gap is about 15% too long after the same fit.

At the US scan's native 72 dpi, the vertices are approximately 1080.5, 1158, 1192.5, 1205, 1267, 1279, 1314 and 1385 px: 304.5 px gives 7.77898 px/mm. The two outer-element thickness scales are 8.12835 and 7.44662 px/mm, about +4.5% and −4.3%. The inner thicknesses are about 23% and 26% short, independently confirming that the figure is schematic. A transverse check of the unobstructed upper R1 arc at height 160 px finds about 27 px sag: (160² + 27²)/(2 × 27) = 487.6 px radius, or 7.82 px/mm against R1 = 62.36208 mm. This agrees with the US axial span to about 0.5%, but does not cure the inner-thickness discrepancy. Neither figure draws a measurable iris tick.

Accordingly, this is a **relative-height reading**, not a claim of printed or precisely scaled clear diameters. Clean top/bottom rim extents, excluding callout leaders and labels, give approximate GB half-heights L1/L2/L3/L4 = 269.5/255.5/248.5/264.5 px and US = 187/175.5/172/180 px. The inner/first-element ratios are approximately 0.94–0.95 for L2 and 0.92–0.93 for L3; the rear outer height differs from the front by only about 2–4%, within the keep range. Using the retained outer inference as the reference gives L2 about 23.6 mm and L3 about 23.2 mm. These correct the visible flat-height sequence even though their reductions are below 10%; they are proportion and step-order corrections, not absolute-scale cuts to the earlier 0.10 f estimate.

### Rim decisions

| Surfaces | Initial sd, mm | Final sd, mm | Evidence and decision |
| --- | ---: | ---: | --- |
| 1, 2 (L1) | 25.146 each | 25.146 each | Outer reference retained; US absolute reading is within roughly 5%, and the stated axial beam needs 23.432 mm at S1. |
| 3, 4 (L2) | 25.146 each | 23.6 each | L2 is lower than the outer elements in both drawings; relative-height inference, −1.546 mm per face. |
| 5, 6 (L3) | 25.146 each | 23.2 each | L3 is slightly lower than L2 in both drawings; relative-height inference, −1.946 mm per face. |
| 7, 8 (L4) | 25.146 each | 25.146 each | Outer-element height difference is within drawing/scan uncertainty; retained rather than cutting corner light for an uncertain reading. |

Each element keeps equal-height face endpoints. Small drawn chamfers on the inner elements are not reliable enough to reconstruct as lands or unequal optical rims. No rim extensions, rim-cut depths or geometry exceptions are introduced. The stop radius and position are unchanged.

### Clearance, field and light

Trial substitutions passed the surface validator and real-ray checks before edits. Final surface audit is **OK — no validation errors**. Aperture audit reports one station within 3% of f/4.5, with **zero rim, trace or iris limits and zero failures**. Image-circle audit: **1 checked, 0 undersized, 0 skipped**. Field coverage: **100%**, a clear chief ray at the 109.25 mm 5×7 corner, approximately **27.286873°**. Infinity is the only printed/modelled focus state.

The meridional clearance table gives axial marginal heights at S1–S8 of approximately 23.43, 22.92, 21.84, 21.03, 20.89, 21.17, 21.78 and 22.09 mm. The smallest surface margin is about **1.71 mm at S1**; no CLIPS-AXIAL or BLOCKS-CHIEF flags occur. Both chief-ray root-selection tools agree. Their lower full-field marginal solve reports no ray; this remains a full-bundle limitation rather than an axial/chief clearance claim. The full-pupil lattice below independently measures the surviving corner bundle.

Calculated edge thicknesses L1–L4 are **2.37910 / 8.27834 / 7.69077 / 2.37910 mm**. Minimum axial distances from the full optical rims to the inferred iris plane are **0.766890 mm on L2** and **1.213708 mm on L3**, increased from 0.349646 / 0.756231 mm. **Iris recommendation: retain its midpoint and f/4.5-derived radius; no relocation or radius change is justified by these figures.**

Engine before → after: EFL **210.884749523 → 210.884749523 mm**, FOPEN **4.5 → 4.5**, engine halfField **39.390086287 → 39.390086287°**, physical stop radius **20.320947254 → 20.320947254 mm**, BFD **193.370081373 → 193.370081373 mm**. The engine half-field is a default, distinct from the traced format corner. The only changed built diagnostic is the derived stop-housing radius, **25.146 → 23.2 mm**, following the adjacent rim.

The final rimcost full-pupil comparison against the saved base1123sd file, including one-element-at-a-time restores, gives **74.6% → 74.6%** geometric transmission at the 5×7 corner and **0.0 percentage-point loss** at every sampled field. At fields 0.0/2.7/5.5/8.2/10.9/13.6/16.4/19.1/21.8/24.6/27.3°, both curves are 100.0/100.0/100.0/100.0/100.0/98.9/96.9/93.8/88.7/82.7/74.6%. Each inner-element restore wins back 0.0 points. Ordinary off-axis vignetting is retained; these are geometric pupil fractions, not cosine-fourth-weighted measured illumination.

### Render and remaining limits

The model sketch was compared at matched axial scale with US Fig. 1, with initial rims in blue and final rims in black. Scratch artifact: `sd/aviar/overlay.png` under the supplied scratchpad root; model source is `sd/aviar/model.svg`. The intended outer > L2 > L3 height order is restored. This replaces the live browser check under the batch addendum; the coordinator must still inspect the rendered page.

The supplied maker-linked image in `v-aviar/diagrams/commons_aviar_960.png` was viewed. It is a patent redraw, not an independent production section: four spherical air-separated elements / four groups, positive outer and negative inner elements, and lower inner rims agree. No special-glass or aspheric positions are identified; all four modeled elements remain spherical. It corroborates grouping and broad proportions only.

GB front page inspected: Arthur Warmisham and Taylor, Taylor & Hobson Limited are the applicants; publication 113,590, application 27 November 1917, complete accepted 28 February 1918. US drawing sheet reads A. Warmisham, 1,361,207, application 7 January 1918 and patent date 7 December 1920. No new name, mount or format discrepancy was found. The already disclosed sodium-D source versus retained helium-d setting remains outside this SD assignment, as do exact production identity and unsourced retail focus/minimum-aperture limits.

Tools completed: surface, aperture, image-circle and field-coverage audits; clearap and clearap2; built and element probe; final rimcost with leave-one-element-out restores; matched-scale model sketch and figure inspection. No tool call or edit was refused. Broad application tests and git state changes were not run, per assignment.

## 2026-11-13 — Glass proxies and catalog metadata

The current labels replace the pre-relabel baseline's Unmatched labels for L1, L3 and L4. Differences below are catalog minus printed; the stored patent nD/V pairs remain unchanged (stored ΔnD = 0 and ΔV = 0).

| Element | Old label → new label | Catalog nd / νd | Δnd / Δν |
| --- | --- | --- | --- |
| L1 | `Unmatched (nD 1.6116 / V 56.4)` → `SK1 (spectral proxy; patent nD 1.6116 / V 56.4; supplier and melt unspecified)` | 1.61025 / 56.5 (Sumita) | −0.00135 / +0.10 |
| L3 | `Unmatched (nD 1.5502 / V 45.8)` → `S-TIL1 (spectral proxy; patent nD 1.5502 / V 45.8; supplier and melt unspecified)` | 1.548141 / 45.784277 (Ohara) | −0.002059 / −0.015723 |
| L4 | `Unmatched (nD 1.6116 / V 56.4)` → `SK1 (spectral proxy; patent nD 1.6116 / V 56.4; supplier and melt unspecified)` | 1.61025 / 56.5 (Sumita) | −0.00135 / +0.10 |

L2 retains `Unmatched (nD 1.5682 / V 43.4)` and Abbe fallback: no catalog row lies within the proxy Abbe window. The proxy rule allows about 0.25 in Abbe number and about 0.002 in index; the S-TIL1 index difference is explicitly −0.002059. The engine keeps the printed index at each element's reference line and borrows only the catalog wavelength dependence. These labels identify neither the historical glass nor its supplier or melt. The existing helium-d reference remains an approximation to the patent's sodium-D definition; full partial dispersion and measured chromatic performance remain unknown.

`chan.mjs`, run from the worktree against `.lens-work/base1123glass/CookeAviar825inf45.data.ts` and the current data file, gives the following paraxial results (before → after). Focus offsets are BFD relative to the d/G channel; C/d/F/g correspond to R/G/B/V.

| Line / channel | EFL, mm | BFD, mm | BFD offset from d/G, µm |
| --- | --- | --- | --- |
| C / R | 211.2215 → 211.2102 | 193.6968 → 193.6853 | +326.7 → +315.2 |
| d / G | 210.8847 → 210.8847 | 193.3701 → 193.3701 | 0.0 → 0.0 |
| F / B | 210.3883 → 210.4245 | 192.8988 → 192.9357 | −471.3 → −434.4 |
| g / V | 210.2658 → 210.3589 | 192.7980 → 192.8920 | −572.1 → −478.1 |

The REF channel remains EFL 210.8847 mm, BFD 193.3701 mm and zero offset from G. These are model predictions using qualified catalog proxies, not measured production colour correction. No name, mount, format or field metadata changes are assigned or present in the baseline/current data comparison. The analysis glass section and L1/L3/L4 paragraphs describe the current labels. Existing open limitations remain unresolved by these proxies.

## 2026-11-13 — Second review: diagram, labels and movement

Compared the supplied live page and all four inspectors with local GB113590A.pdf, PDF pages 1–4, especially Example I on page 2 and Fig. 1 on page 4, and US1361207A.pdf Fig. 1 on PDF page 1. The GB prescription at ×209.55 remains authoritative. The earlier maker-diagram record corroborates four separate spherical elements / four groups and no special-glass markings; no new manufacturer construction image was obtained or claimed.

### Diagram and labels

The native US figure was independently measured beside its local axis, excluding the lower callouts. In the saved 600 × 610 px crop, near-axis S1/S8 crossings are approximately x = 101.5 / 404: 302.5 px over 39.143940 mm gives 7.728 px/mm. Outer thicknesses give 8.023 and 7.394 px/mm; each inner thickness gives about 5.965 px/mm, roughly 23% below the span scale. The upper R1 arc's approximately 27 px sag at 160 px height gives a radius of about 488 px, or 7.82 px/mm. These independently confirm a schematic figure, with no reliable absolute clear diameters. Upper rim heights about the local axis are approximately 188 / 176 / 172 / 180 px for I–IV, within a few pixels of the earlier reading. The relative inner heights and square joins remain appropriate; small drawn inner chamfers do not justify a new land or unequal face heights.

| Field | Before → after | Evidence / verdict |
| --- | --- | --- |
| Element names, ids 1–4 | L1/L2/L3/L4 → I/II/III/IV | Patent Fig. 1 and the Example I glass table use Roman element designations. |
| Diagram labels, ids 1–4 | implicit numeric ids → explicit I/II/III/IV | Same patent designations; each agrees with its element name. |
| Inspector labels, ids 1–4 | Element 1–4 → Element I–IV | Keeps inspector headings consistent with the diagram and patent. |

The analysis now uses the same designations. Types and roles need no change: I/IV have radius signs +/− and are biconvex positive; II/III have signs −/+ and are biconcave negative. All four stored isolated-element focal lengths are present and sensible: the inspector displays +75.88 / −80.3 / −88.39 / +75.88 mm. The element probe gives freshly rounded +75.87 / −80.30 / −88.38 / +75.87 mm; their previously disclosed rounding differences remain immaterial. No cemented components, group hierarchy, aspheres or APD tags are supported by this example, so no brackets or tags were added. The iris remains between II and III with the inferred 3.792855 / 3.792855 mm split; neither figure supports a more precise numerical location.

### Lands, cuts and light

No rim changed in this review. The cumulative cuts against the saved base1123sd file remain:

| Surfaces | Baseline sd, mm | Final sd, mm | Figure reading | Light cost / verdict |
| --- | ---: | ---: | --- | --- |
| 3/4 (II) | 25.146 each | 23.6 each | About 0.94 of front outer height; lower than I/IV | 0.0 points; keep, slight-loss budget satisfied. |
| 5/6 (III) | 25.146 each | 23.2 each | About 0.92 of front outer height; slightly lower than II | 0.0 points; keep, slight-loss budget satisfied. |

I/IV stay at 25.146 mm on both faces. There are no rim extensions, cut depths or geometry exceptions. Full-pupil `rimcost.mjs --loo` gives final worst loss **0.0 percentage points** at every sampled field; each inner-element restore gains 0.0 points. Geometric corner transmission is **74.6% baseline → 74.6% before review → 74.6% final** at approximately 27.286873°, distinct from cosine-fourth-weighted illumination. The meridional engine curve agrees, without replacing the full-pupil result.

### Movement and engine checks

I, II, III and IV each have **0 mm focus travel and 0 mm zoom travel**: no variable gap, focus keyframe or zoom station is authored. Both endpoint probes return EFL 210.884749523 mm, BFD 193.370081373 mm and f/4.5. The patent supplies one fixed numerical prescription per example and no finite-focus mechanism; the static-focus description is correct and no finite object-distance test applies. The live focus-endpoint view keeps the same geometry and infinity label; the movement dialog states that no focus or zoom group movement is modeled.

Before → final engine EFL is **210.884749523 → 210.884749523 mm**, half-field **39.390086287 → 39.390086287°**, f-number **4.5 → 4.5** and stop radius **20.320947254 → 20.320947254 mm**. The engine default half-field remains distinct from the traced 5×7 corner. Surface audit is **OK — no validation errors**; aperture audit has **zero rim, trace or iris limits and zero failures**; image-circle audit has **1 checked, 0 undersized, 0 skipped**; field coverage is **100%**, with a clear 109.25 mm corner chief ray. The meridional trace has no CLIPS-AXIAL/BLOCKS-CHIEF flags; its lower full-field marginal solve remains `no-ray-found`, as previously disclosed. The full-pupil calculation separately measures the surviving bundle.

### Glass, colour and attribution

Every element was checked with `glasscheck.mjs --near 3`, `glassnear.mjs`, the vendor AGF search and a complete coordinate-window scan of the available catalog and four AGF files. No exact row meets |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15 for any element. The existing SK1 labels on I/IV and S-TIL1 on III stand under the site's proxy tolerance; `trylabel.mjs` resolves both. Their catalog-minus-printed differences remain −0.00135 / +0.10 and −0.002059 / −0.015723 respectively. No allowed alternative offers a clearly smaller Abbe difference at the same index tolerance, and no new catalog row is proposed.

II remains `Unmatched (nD 1.5682 / V 43.4)`. Its closest AGF candidate PBL26Y is 1.56732 / 42.86 (Δnd −0.00088, Δν −0.54); catalog E-FL6 is 1.56732 / 42.84 (Δν −0.56). Neither meets the site's proxy tolerance. GB PDF page 2 names this glass only as **light flint**, defines sodium D and V = (nD − 1)/(nF − nC), and gives no supplier, glass code, individual line indices or partial dispersion. The pair does not recur in Example II, whose negative elements are 1.6206 / 36.2 heavy flint. This one-example occurrence establishes no optimizer history.

All four media carry nd/vd; none is constant-index or nd-only, and no source-printed nC/nF/ng or partial-dispersion value is missing. Neither publication prints C/d/F/g aberration, astigmatism or distortion plots to compare numerically. The existing model colour predictions therefore remain qualified by the unresolved II curve, catalog proxies and sodium-D/helium-d reference difference; no measured chromatic agreement is claimed.

GB PDF page 1 names Arthur Warmisham and Taylor, Taylor & Hobson Limited as applicants. The existing corporate assignee spelling agrees with the front page and the Series XI / Series II corpus entries; no Aviar spelling consolidation is proposed. Warmisham's co-applicant status is already disclosed in the analysis and is not changed into a corporate-family assertion.

### Live render and remaining limits

After the label edits, inspected `sd/aviar/rv-page.png`, `rv-el-1.png` through `rv-el-4.png`, `rv-focus1.png` and `rv-mv-focus.png` under the supplied scratchpad root. I–IV are readable without collisions; every inspector has the correct type, role, index, Abbe number, focal length and qualified glass label. The title, four-element/four-group specs, 5×7 badge, f/4.5 setting, iris position and static-focus text are consistent. The matched-scale red-model / blue-baseline side-by-side is `sd/aviar/rv-overlay.png`. This closes the earlier rendered-page-review limitation.

Open: the sodium-D source still uses the retained helium-d reference setting, outside the allowed edits. Exact historical glass/melt identity, full partial dispersion, exact production-example identity, numerical patent field, clear diameters and stop coordinates remain unestablished. Retail minimum focus and minimum aperture are also unsourced. The previously disclosed lower marginal-ray solve remains incomplete; it does not invalidate the clear axial/chief rays or full-pupil corner measurement.

No tool call or edit was denied by a permission check. Initial relative-path screenshot/render requests failed the helpers' absolute-path argument validation; corrected absolute paths succeeded. No changelog, source/assignee field, numerical prescription or git state was changed. Broad application checks were not run, as required by the assignment.
