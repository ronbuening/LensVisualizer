# Qualified pre-integration audit
- Original GB376044 combined example only,8elements/4cemented doublets. No separate-member operational models or additional family counts.
- Inch units inferred from adjacent stated focal lengths, exact25.4conversion. Literal EFL12.344834707in vs12.25,+.774161% retained, no fitting. BFL11.3771374842in calculated, not printed.
- f6.8 source vs1921f4.5 quote and mismatched retail member focal lengths preserved. Maker family attribution only, no exact factory/serial/AnselAdams identity.
- Explicit nD/Abbe V. Rear blank values derived from repeated Chance identifiers; unnumbered glass remains unnumbered. Engine d approximation, no measured full curves or melt identity.
- Inferred midpoint centralgap iris and common-per-cemented-body caps30.5/30/26/22.5 selected by geometry before rays. Default.9 limits, no override or optical alteration. Independent full-cap geometry/iris review accompanies handoff.
- Native and strict isolated TypeScript pass; final optical data equals pilot except key/name. Supplied scripts reproduce scoped checks, not full application integration.
- Sparse source27.5°edge14OK12clipped/26, significant peripheral limitation. Not55°coverage, throughput, image-plane or MTF validation.
- Infinity/combined only. Current-corpus/app/lint/format/build/browser/MTF deferred, not passed. Initially hidden, unintegrated, undeployed; the hidden status is closed by the coordinator's later visibility update. Count only after final independent closure and verified private archive.

Important: inferred stop has only0.02324mm rear full-cap clearance. This is a mathematical geometry pass, not validated mechanical/manufacturing tolerance or shutter fit.

## 2026-11-13 — Deployment validation

Codex independently re-read the patent page images at 300 dpi: p. 3's complete-lens table (12 radii, eight glass thicknesses, three airspaces and eight glass rows), the nominal complete/member focal lengths, f/6.8 and about 55° field, and p. 4's four-doublet drawing. The table agrees with the delivered prescription after uniform inch-to-millimetre conversion; the drawing makes L5/L6 smaller than L7/L8 and prints neither an iris nor clear diameters.

Verdict: valid with notes. The independent validator cites Cooke's Compendium Series XV entry explicitly identifying “British patent GB376044, 1932, Horace W. Lee,” together with 10×8 coverage and the Science Museum's 312 mm f/6.8 retail example; this supports a family association, not a proven factory prescription.

Changes:

- File form: the external `../LensVisualizer/src/types/lensDataV2.js` import → `../../types/lensDataV2.js`; direct default object → `const LENS_DATA = { ... } satisfies LensDataV2Input` and `export default LENS_DATA`. Added one JSDoc block identifying the sole complete-lens example, the uniform ×25.4 inch-to-millimetre conversion with no further scaling, inferred stop/rims/back focus, repeated-identifier glass values, sodium-D approximation and infinity-only focus sentinel.
- Surfaces 7/8/9, L5/L6 `sd`: 26 → 22 mm, following the drawing's approximately 21.9 mm rim estimate. The validator reports an axial requirement of 21.2 mm and rear iris clearance increasing from 0.02324 to 1.70 mm. All other rims are retained at 30.5/30/22.5 mm for their respective doublets.
- `source.patentNumber`: `GB 376044` → `GB 376,044 A`; `source.example`: absent → `{ "label": "Sole example", "id": null }`, identifying the complete-lens table.
- `catalog.focalLengthMm.design`: 311.15 → 313.56 mm, matching the computed model EFL. The marketing value remains 311.15 mm.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`; `catalog.imageFormat`: absent → `"8x10"`, using canonical identifiers.
- `focus.description`: earlier internal marker and combined-infinity restriction → `Only the complete lens at infinity is modeled; separate member operating modes are not modeled.`
- Rounded floating-point conversion noise only: surface 3 d 3.2003999999999997 → 3.2004; surface 4 R 79.90839999999999 → 79.9084 and d 12.877799999999999 → 12.8778; surface 7 R −62.230000000000004 → −62.23; surface 8 R 180.00979999999998 → 180.0098; surface 9 R −59.20739999999999 → −59.2074; surface 10 d 7.188199999999999 → 7.1882; surface 11 R −29.209999999999997 → −29.21 and d 3.0479999999999996 → 3.048. No prescription fitting or other numerical changes were made.
- Analysis, inferred-apertures paragraph: 30.5/30/26/22.5 → 30.5/30/22/22.5 mm and 0.02324 mm clearance → the validator's 1.70 mm after the rim correction; replaced the earlier grid-selection explanation with the drawing evidence and retained the mechanical-tolerance qualification.

First-order results after the changes (`built.mjs`): EFL 313.55880155878856 mm; f/6.8; inferred stop radius 20.260950616713245 mm; total track 358.0672920995148 mm; declared half-field 27.5°. The stored inferred back focus remains 288.9792920995148 mm.

Audit results:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures. No rim raise is needed.
- `audit:image-circle`: one lens checked for 8x10, zero undersized surfaces, zero skipped; the format diagonal is 325.3 mm.
- `audit:field-coverage --below=1.01`: the then-hidden file skipped. An otherwise identical visible scratch copy gave 100% modeled corner coverage: 27.4° reaches 162.65 mm of the 162.65 mm format semi-diagonal; the corner chief ray is clear, diagnosis `ok`, zero skipped/unsolved. Closed: the coordinator subsequently made the assigned file visible; the cleanup pass checks that file directly below.
- The validator reports unchanged vignetting and 55.8% corner transmission limited by the front rim. That transmission is quoted from the independent report, not recomputed by the field-coverage check; chief-ray coverage does not establish full-pupil throughput or image quality.

Closed in cleanup: the coordinator set the name, key and filename; the pass below adds the subtitle and revises element types, glass labels and public prose, removing the private Drive reference. Closed in the semi-diameter pass below: the remaining inferred rims differ from drawing estimates by only about 1–4%, within measurement noise, and are retained. Exact factory identity, physical shutter accommodation, measured spectral curves and separate-member modes remain unverified. No application tests, typecheck, lint, build, generated files, server or git state changes were run in that pass; the earlier hidden status is closed by the coordinator's visibility update.

## 2026-11-13 — Cleanup and wording pass

The complete-lens table and both cells on patent p. 3, the glass explanation on p. 2 and the four-doublet drawing on p. 4 were re-read. Printed radii, thicknesses, airspaces, indices, Abbe numbers, rims and the midpoint stop remain unchanged. The earlier deployment rim correction is retained.

Added subtitle `GB 376,044 A, complete lens — Cooke Series XV Triple Convertible` and specs `8 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `f/6.8`, `CONVERTIBLE`. Element labels remain Element 1–8; types now follow the signed radii and calculated powers, with short position-specific roles. Both members of each pair carry `cemented`: C1 = L1/L2, C2 = L3/L4, C3 = L5/L6, C4 = L7/L8. Four matching `doublets` entries span surfaces 1–3, 4–6, 7–9 and 10–12. No anomalous-dispersion tags were added.

Glass labels changed from source/process descriptions to explicit Unmatched labels: L1/L8, nD 1.5472 / V 45.8, Chance 458; L2/L7, 1.5186 / 60.3, Chance 9322; L3/L6, 1.6437 / 48.3, not yet in Chance's catalogue; L4/L5, 1.5290 / 51.6, Chance 7863. Stored Δnd = 0 and ΔV = 0 for every element. An exhaustive catalog comparison found no row within both |Δnd| ≤ 0.0001 and |ΔV| ≤ 0.15; `trylabel.mjs` and `glasscheck.mjs` confirm deliberate non-resolution. No catalog spectral curve was substituted. The repeated-identifier inference for L5/L7/L8 remains explained in the header and analysis.

Focus distance 1000000000000000.0 → 1e15 is numerically unchanged; description now reads `Infinity focus only; only the complete lens is modeled.` Marketing minimum focus remains absent without a source. No other catalog metadata changed. The analysis now follows the identification/architecture/elements/glass/focus skeleton, retains the +0.774161% EFL residual and member focal lengths, and removes process sections, ray-count passages, broken spacing and the private link. Cooke's Compendium and Science Museum object 1979-559/1290 supply the cited Series XV association, 10×8 coverage, 312 mm f/6.8 lens and 26.5-inch (673 mm) front-cell comparison with approximately 645 mm calculated here. The museum's c.1920 date is explicitly distinguished from this later patent. Existing audit history and the dated deployment section are preserved, with stale hidden/cleanup lines marked closed.

Before → after, identical: EFL 313.55880155878856 → 313.55880155878856 mm; FOPEN 6.8 → 6.8; half-field 27.5 → 27.5°; stop radius 20.260950616713245 → 20.260950616713245 mm; BFD 288.9792920995148 → 288.9792920995148 mm; total track 358.0672920995148 → 358.0672920995148 mm. The two probe endpoints retain the same static prescription and infinity focus. Surface audit: OK, no validation errors. Aperture audit: one lens/one station within 3%, zero rim/trace/iris limits and zero failures. Field-coverage audit with `--all`: one lens/one station ≥99%, zero unsolved and zero skipped.

Closed in the semi-diameter pass below: retained rims versus drawing estimates remain 30.5/30/22/22.5 mm versus approximately 30.2/28.9/21.9/22.8 mm; the differences are within noise. Iris position and clear diameters are inferred; physical shutter fit and manufacturing tolerances are undetermined. Exact factory/serial prescription identity and the historical cell focal-length differences remain unresolved. Measured spectral curves, separate-cell configurations and retail minimum focus remain unavailable; the production minimum aperture marking is unconfirmed, so the existing model settings through f/32 are retained. Full commercial field/image-quality and MTF claims remain unsupported by chief-ray coverage. Rendered page inspection is incomplete: `shot.sh` produced no PNG, and the browser navigation tool returned `MCP tool call requires approval, but approval policy is never`; that inspection was stopped without a retry or workaround. No application tests, typecheck, lint, build, generators, formatting commands, dev server or git-state mutations were run, as required by the cleanup scope.

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local `patents/GB376044A.pdf`, p. 3 complete-lens table and p. 4 sole drawing. The scan is native 300 dpi; a fresh native-resolution crop and the model sketch were inspected. The complete prescription uses inches converted uniformly by ×25.4. No optical rim, stop, spacing, radius, glass or metadata value changed in this pass.

The approximate first-to-last vertex positions are x = 974.5 and 1698 px, giving 723.5 px / 69.088 mm = 10.472 px/mm. Independent spans: surfaces 1–3 give 143 px / 13.716 mm = 10.425 px/mm; surfaces 4–6 give 171 px / 16.1036 mm = 10.619 px/mm. The lower front-surface arc, at offsets of approximately 200/240/280 px from the axis, has sags of 20.5/29/40 px; the spherical relation R = (h² + sag²)/(2 sag) gives radii approximately 986/1008/1000 px. Against R1 = 93.98 mm this implies 10.5–10.7 px/mm, supporting the transverse scale to a few percent. The local axis slopes slightly across the scan and is taken near y = 1699–1705 px.

The drawing is nevertheless schematic locally: L5 is approximately 17.5 px thick versus 2.413 mm × 10.472 = 25.3 px, a roughly 31% compression. Its nominal 300-dpi source resolution, thick strokes, sloping axis and C2 bevel therefore do not support exact face-by-face cuts or lands. Common outer-rim proportions and step order are usable; the approximate millimetre readings below are global-scale comparisons, not printed clear diameters. The C2 corner treatment does not uniquely distinguish an optical truncation from a blank bevel.

| Surfaces / body | Before sd (mm) | After sd (mm) | Approximate drawing sd (mm) | Decision |
| --- | ---: | ---: | ---: | --- |
| 1, 2, 3 / C1, L1/L2 | 30.5 each | 30.5 each | 30.2 | Retained; about 1.0% above drawing. |
| 4, 5, 6 / C2, L3/L4 | 30 each | 30 each | 28.9 | Retained; about 3.8% above common outer rim, within noise; no invented bevel/land geometry. |
| 7, 8, 9 / C3, L5/L6 | 22 each | 22 each | 21.9 | Retained; about 0.5% above drawing and smaller than C4. The earlier 26 → 22 mm integration change is already in the saved baseline. |
| 10, 11, 12 / C4, L7/L8 | 22.5 each | 22.5 each | 22.8 | Retained; about 1.3% below drawing, within noise. |

Surface audit: OK, no validation errors. Aperture audit: one lens/one station within 3% of f/6.8, zero rim, trace or iris limits and zero failures. Image-circle audit: one lens checked, zero undersized and zero skipped. Field coverage: 100%, corner 27.4° reaching 162.65 mm, clear chief ray, zero unsolved/skipped. Exact meridional tracing at Y = 162.65 mm gives no axial or chief-ray clipping; axial heights at surfaces 9 and 12 are 21.20 and 21.57 mm, leaving approximately 0.80 and 0.93 mm rim clearance. The unvignetted upper corner bundle cannot be found by that meridional solve; ordinary pupil clipping remains, independently quantified by the full-pupil calculation below.

Baseline → final engine values: EFL 313.558801559 → 313.558801559 mm; nominal f-number 6.8 → 6.8; declared half-field 27.5 → 27.5°; tracing half-field 41.212526796 → 41.212526796°; stop radius 20.260950617 → 20.260950617 mm. Infinity is the only printed operating state; there are no zoom or finite-focus states to add. `rimcost.mjs` with the saved `base1123sd` file and `--loo` finds identical rims, no cuts/lands to restore, and 0.0 percentage-point loss at every sampled field. Full-pupil geometric transmission at fields 0/5.5/11.0/16.5/21.9/27.4° is 100.0/97.6/91.4/84.4/71.5/55.8% before and after. This is geometric transmission, not measured relative illumination including cos-fourth falloff.

Full-cap iris-plane clearance is 0.162442 mm to surface 6 and 1.696450 mm to surface 7. The patent draws no iris and prints neither its position nor a clear diameter. No stop change is recommended from this evidence; retain the inferred SII midpoint and calculated f/6.8 radius. Physical shutter/iris accommodation remains for the coordinator to assess if a hardware envelope becomes available; these mathematical clearances are not manufacturing tolerances.

The matched-scale model/patent overlay is kept at `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/xv/overlay.png`. The sketch retains the four doublets and their step order; baseline and final model outlines coincide. No live browser check was attempted under this assignment; the coordinator handles it. No maker construction diagram is available in the validator materials, so no maker-image comparison or special-glass position claim is made. All eight elements are spherical; higher-index glass occupies L3/L6 in the patent table.

The p. 1 bibliography reads Horace William Lee and Kapella Limited, GB 376,044, application 31 July 1931, complete accepted 7 July 1932. No new name/metadata discrepancy was found; exact retail/factory identity remains qualified as in the existing analysis. No sandbox refusal occurred in this pass; the earlier browser refusal recorded above was neither retried nor bypassed. No tests, typecheck, lint, build, generators, server or git-state mutations were run.

## 2026-11-13 — Glass proxies and catalog metadata

The six relabelled elements retain their printed nD/V values, d-line reference convention and historical Chance identifiers. In the labels below, the catalog row supplies wavelength dependence only; the engine anchors the index at the element's printed reference value. Signed differences are catalog minus printed. These rows meet the repository's proxy rule of about |Δνd| ≤ 0.25 and |Δnd| ≤ 0.002, not an exact glass match or evidence of a historical supplier or melt.

| Elements | Old label → new label | Catalog nd / νd | Δnd / Δνd |
| --- | --- | --- | --- |
| L1/L8 | `Unmatched (nD 1.5472 / V 45.8, Chance 458)` → `S-TIL1 (spectral proxy; patent nD 1.5472 / V 45.8, Chance 458; supplier and melt unspecified)` | 1.548141 / 45.784277 (Ohara) | +0.000941 / −0.015723 |
| L2/L7 | `Unmatched (nD 1.5186 / V 60.3, Chance 9322)` → `BALK3 (spectral proxy; patent nD 1.5186 / V 60.3, Chance 9322; supplier and melt unspecified)` | 1.518350 / 60.300000 (Sumita) | −0.000250 / 0.000000 |
| L4/L5 | `Unmatched (nD 1.5290 / V 51.6, Chance 7863)` → `SBF2 (spectral proxy; patent nD 1.5290 / V 51.6, Chance 7863; supplier and melt unspecified)` | 1.529440 / 51.640000 (Hoya) | +0.000440 / +0.040000 |

L3/L6 retain `Unmatched (nD 1.6437 / V 48.3, not yet in Chance's catalogue)` because no catalog row fits the proxy Abbe window. The earlier all-Unmatched and no-substituted-curve statements describe the pre-relabel state. S-TIL1 is from the repository's vendor-published Ohara catalog; BALK3 is from Sumita's all-glass catalog including discontinued rows. SBF2 is the legacy Hoya row distributed with Koko/KDP-2, not a current Hoya publication. None establishes historical Chance glass identity.

`chan.mjs` compares the supplied pre-relabel baseline `.lens-work/base1123glass/CookeSeriesXV1225inf68.data.ts` with the current assigned data file. Channels R/G/B/V correspond to C/d/F/g. Paraxial back focal distances and shifts relative to d are:

| Line / channel | BFD before → after (mm) | BFD shift versus d, before → after (µm) |
| --- | --- | --- |
| C / R | 289.5723 → 289.4971 | +593.0 → +517.8 |
| d / G | 288.9793 → 288.9793 | 0.0 → 0.0 |
| F / B | 287.9827 → 288.0062 | −996.6 → −973.1 |
| g / V | 287.5541 → 287.5714 | −1425.2 → −1407.9 |

Paraxial EFL before → after (mm): C 314.1795 → 314.1044; d 313.5588 → 313.5588; F 312.4958 → 312.5191; g 312.0126 → 312.0292. The REF result equals d in both files. These are modeled paraxial results from proxy and Abbe-derived dispersion, not measured historical chromatic performance.

No name, mount, format or field change is assigned; catalog metadata is unchanged. The data file is read-only for this assignment. The analysis describes the final proxy labels, catalog coordinates and differences, and the remaining unmatched pair; existing audit lines are retained. No `Open:` item is resolved by this assignment. Formatting is scoped to the two assigned Markdown files.

## 2026-11-13 — Second review: diagram, labels and movement

Compared the local GB376044A.pdf front page, glass explanation on p. 2, complete-lens table on p. 3 and sole drawing on p. 4 with the current localhost:5211 page and all eight element inspectors. The prior validator found no maker construction diagram; its family association and eight-element/four-doublet count are retained without claiming a maker-image inspection. The patent drawing governs the silhouette.

The fresh native-resolution ink readings agree with the earlier global scale. A strip 20–40 px above the local axis puts the first/third vertices near x = 974/1117 px: 143 / 13.716 = 10.426 px/mm. The fourth/sixth crossings near 1153/1324 give 171 / 16.1036 = 10.619 px/mm. The first/last crossings near 974/1695 give 721 / 69.088 = 10.436 px/mm, within 0.4% of the overlay's 10.472 px/mm fit. The earlier transverse front-arc fit supports approximately 10.5–10.7 px/mm. Local L5 compression and C2 bevels remain schematic, so the drawing establishes common-body proportions rather than precise optical lands.

New rim readings use the midpoint of each ink stroke, taking half the full top-to-bottom height to remove local axis slope. At x = 1080/1250/1490/1590 px, top/bottom midpoints are approximately 1383.5/2016.5, 1400.5/2005, 1473/1933 and 1465.5/1944 px. Dividing their half-heights by 10.472 gives the following independent comparison.

| Body / surfaces | Baseline sd (mm) | Before → final sd (mm) | Fresh figure reading (mm) | Verdict |
| --- | ---: | --- | ---: | --- |
| C1 / 1–3 | 30.5 each | 30.5 → 30.5 each | 30.2 | Keep: within reading noise. |
| C2 / 4–6 | 30 each | 30 → 30 each | 28.9 | Keep: approximately 4% difference; schematic bevel gives no new optical cut or land. |
| C3 / 7–9 | 22 each | 22 → 22 each | 22.0 | Keep: smaller than C4, as drawn. |
| C4 / 10–12 | 22.5 each | 22.5 → 22.5 each | 22.8 | Keep: within reading noise. |

Lands and cuts: none against the saved base1123sd file; no `rimExtensionSd` or `rimCutDepthMm`. The earlier integration reduction of C3 is already in that baseline. Full-pupil `rimcost.mjs --loo` reports a worst loss of 0.0 percentage points, with no element restoration candidates. Baseline/final transmissions at fields 0/2.7/5.5/8.2/11.0/13.7/16.5/19.2/21.9/24.7/27.4° are identically 100.0/99.9/97.6/94.7/91.4/88.5/84.4/78.4/71.5/64.1/55.8%. Retain the genuine peripheral clipping.

All eight inspectors displayed `FL = −`. Added the isolated thick-element-in-air focal lengths from `probe.mjs --elements`, rounded to two decimals and already agreeing with the analysis:

| Element | Before focalLengthMm | Final focalLengthMm (mm) |
| --- | --- | ---: |
| L1 | absent | −125.74 |
| L2 | absent | +134.86 |
| L3 | absent | +94.78 |
| L4 | absent | −117.25 |
| L5 | absent | −87.12 |
| L6 | absent | +70.32 |
| L7 | absent | +101.39 |
| L8 | absent | −94.25 |

Appended to `focus.description`: `The patent does not specify focus travel or a minimum focus distance.` The analysis now states the same limit and uses the site's proxy tolerance wording consistently. No rim, spacing, radius, index, Abbe number, glass label, tag, bracket, aperture, catalog or source field changed.

Labels and tags checked: L1/L8 are negative menisci, L2/L7 positive menisci, L3/L6 biconvex positive and L4/L5 biconcave negative, agreeing with R signs and isolated powers. Sequential L1–L8 names avoid inventing designations absent from the patent's R/D/S notation. C1/C2/C3/C4 bracket surfaces 1–3/4–6/7–9/10–12 and contain exactly the matching cemented pairs. No extra parent brackets, aspheric suffixes, asphere coefficients or anomalous-dispersion tags are warranted. The patent's high-index crown description for L3/L6 establishes neither anomalous dispersion nor an ED tag.

Movement verdict: all four doublets have zero displacement between the probe's focus endpoints. There are no variable gaps, focus keyframes or zoom stations. EFL/BFD at both endpoints remain 313.5588/288.9793 mm; no finite-focus state is inferred. The movement overlay explicitly says there is no modeled focus or zoom group movement. `focus=1` leaves the optics and infinity distance unchanged.

Glass: all six existing spectral labels resolve within the site's proxy tolerance. `trylabel.mjs` confirms S-TIL1 1.548141/45.784277, BALK3 1.51835/60.3 and SBF2 1.52944/51.64. The glass check's curve-derived BALK3 Abbe value rounds to 60.33, whereas its catalog row prints 60.3; both remain inside the site's proxy tolerance. No exact replacement is supported. L3/L6 repeat 1.6437/48.3 in the sole complete-lens example, both explicitly “Not yet in catalogue” (p. 3); p. 2 identifies the new high-index crown generically. Neither page supplies additional line indices, partial dispersion or a further glass identifier. This is a repeated material within one example, not evidence of another numerical example. The nearest existing row is Sumita BAF9, approximately 1.64329/47.72. The nearest vendor-file entry is obsolete HOYA BAF9, 1.64328/47.94 in `HOYA20260707_include_obsolete.agf`: Δnd = −0.00042, ΔV = −0.36, outside even the site's proxy tolerance. No missing catalog row is proposed. All eight glasses retain V; there is no constant-index or nd-only medium. Six borrow spectral curves and two use Abbe-based dispersion. The patent prints no C/d/F/g aberration plots, astigmatism plots or distortion plots, so no source-curve comparison is available; measured spectral completeness remains unresolved.

Assignee review only: p. 1 names Horace William Lee and Kapella Limited as applicants. The stored corporate assignee `Kapella Limited` matches the corpus spelling in the Series VIII and Speed Panchro entries; Lee is correctly stored as author. No consolidation variant or source-field change is proposed.

Surface audit reports OK, no validation errors. Aperture audit reports one station within 3% of f/6.8 and zero rim, trace, iris or failed stations. Image-circle audit reports zero undersized/skipped; corner coverage is 100%, reaching 162.65 mm at 27.4°, with a clear chief ray and zero unsolved/skipped. Exact meridional tracing finds no axial/chief clips; axial heights at surfaces 9/12 are 21.20/21.57 mm. The upper corner bundle solve still returns no ray and does not replace the full-pupil transmission calculation. Engine before → final: EFL 313.558801559 → 313.558801559 mm; f-number 6.8 → 6.8; half-field 27.5 → 27.5°; tracing half-field 41.212526796 → 41.212526796°. No stop edit is recommended: the inferred SII midpoint has full-cap front/rear clearance 0.162442/1.696450 mm and the drawing prints no iris position.

Closed: the earlier incomplete live-page inspection is now completed through the supplied screenshot queue. Post-edit page, all eight inspectors, `focus=1` and the movement overlay were read. All eight focal lengths now display with the expected signs, C1–C4 remain correctly placed, no false triplet appears, and the expanded focus text is readable. Overlay: `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/xv/rv-overlay.png`; red final and blue baseline outlines coincide over the patent. Live page: `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/xv/rv-page.png`; inspector images are `rv-el-1.png` through `rv-el-8.png` beside it.

Open: physical shutter accommodation and manufacturing clearance remain unknown; mathematical iris clearance is not a hardware tolerance.

Open: historical melt/spectral identity, exact factory prescription, separate-member modes and retail minimum focus remain unestablished. No new discrepancy outside the allowed edit list was found.

Both assigned Markdown files pass the scoped Prettier check, and the three-file diff has no whitespace errors. Final element probes reproduce all eight stored focal lengths.

No sandbox permission refusal occurred in this review. The historical browser refusal remains recorded above; no browser tool was used here. No changelog, shared data, generators, application tests, typecheck, lint, build, server or git state was changed.
