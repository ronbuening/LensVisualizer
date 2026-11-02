# Audit Log — Canon RF 15-35mm f/2.8 L IS USM

Patent: US 2020/0257181 A1, Numerical Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field   | Before             | After              | Justification                                                                                |
| ----------------- | ------- | ------------------ | ------------------ | -------------------------------------------------------------------------------------------- |
| L2 / 3A           | `glass` | `S-LAH65V (OHARA)` | `L-LAH85V (OHARA)` | Patent Table 1 row 3 lists nd=1.85400, vd=40.4; catalog L-LAH85V matches, S-LAH65V does not. |
| L4 / 7            | `glass` | `S-NPH1 (OHARA)`   | `S-NBH56 (OHARA)`  | Patent Table 1 row 7 lists nd=1.85478, vd=24.8; S-NBH56 is the source-backed catalog match.  |
| L8 / 15           | `glass` | `TAFD25 (HOYA)`    | `TAFD40 (HOYA)`    | Patent Table 1 row 15 lists nd=2.00069, vd=25.5; TAFD40 round-trips this pair.               |
| L14 / 25          | `glass` | `TAFD45 (HOYA)`    | `TAFD65 (HOYA)`    | Patent Table 1 row 25 lists nd=2.05090, vd=26.9; TAFD65 round-trips this pair.               |
| L15 / 27A         | `glass` | `S-LAH65V (OHARA)` | `L-LAH85V (OHARA)` | Patent Table 1 row 27 lists nd=1.85400, vd=40.4; same glass as L2.                           |

### Phase 2 — Retained-information audit

- Checked the flagged prescription rows against patent Table 1; stored `R`, `d`, `nd`, and surface ownership already match the table, accounting for the documented omitted flare stop.
- No semi-diameter or asphere edits made.

### Phase 3 — Spectral / metadata enrichment

- No new patent line-index data found for these rows.
- Relabels use existing catalog entries sourced from manufacturer/Zemax data already recorded in `glassCatalogData.ts`.

### Phase 4 — Analysis sync

- Updated the companion analysis glass table, element prose, and catalog source list for L2, L4, L8, L14, and L15.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L6, L10, and L16 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.90 row.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked Numerical Example 1 / Table 1 in local `patents/US20200257181A1.pdf`; S19 remains
  1.83400 / 37.20 and its R/d row is unchanged.
- S19 `S-LAH55V (OHARA)` -> `S-LAH60 (OHARA)`, the exact same-vendor coordinate family. Synchronized the L11
  analysis table, IS-doublet text, and source list.

## 2026-09-09 — First-added diagram audit, lens 40

Original Example 1/pages 14–15 and Figures 1A–1B/page 2 verified. Restored A16 on S1/S3/S27, correcting an obsolete engine-limit claim and a large error in the stated omission size. Restored source SD=diameter/2 except S3 18.10 versus source 18.225 for the renderer clearance margin. Published iris diameters now drive a validated explicit zoom schedule; first preset f/2.91. Source prescription, six aspheres' other terms, source element FLs and zoom gaps retained. Qualified glass, removed unsupported APD/chemistry/coating claims and disclosed disabled finite focus. No cover glass/filter exists; omitted S21 flare-diaphragm clipping remains explicitly unmodeled.

Live wide/middle/tele, f/22 and zoom chart checked; physical source iris diameters reproduced. Added SP diagram annotation. Surface/image-circle and three focused regression tests pass after fixing a test-only floating-point equality.

## 2026-10-30 — Scoped reopening for resolved shoulders and runtime completeness

Reused unchanged conclusions from the actual **2026-09-09** completed shape-and-glass review. Canonical comparison with its raw reviewed configuration shows no optical difference after source.example normalization; the V2 conversion did not change the prescription. Today's source check addresses two omitted outer shoulders, label normalization and present-runtime qualifications. No extra reused lens is counted.

### Original and native evidence

Independently confirmed the first page of local `patents/US20200257181A1.pdf`, US 2020/0257181 A1, Yuichi Gyoda / Canon, August 13, 2020 (SHA-256 `100ea2446e461c2f01b478306c2dfc8737817b762dee8a772f9722bbbb0646eb`). Numerical Example 1: Surface data plus first four aspheres on PDF 14 / printed 5; remaining aspheres, Various data, explicit iris/flare station tuples and isolated focal lengths on PDF 15 / printed 6. Figures 1A/B are PDF 2 / sheet 1. The native 2560×3300 one-bit raster is 300 ppi; old 600 ppi views were 2× magnification. Native section scale is about 11.1 vertical / 11.0 axial pixels/mm, adopted measurement uncertainty ±0.6 mm. All elements, concave ends, four cemented interfaces and six aspheres were compared to actual rendered outlines; no hybrid, rear plate or source filter is present. Labels, PLL leaders, brackets, stops and motion arrows are excluded from glass extents.

### Shape disposition and retained constraints

| Source face           | Clear sd retained | New outer rim | Native evidence                                                                                               |
| --------------------- | ----------------: | ------------: | ------------------------------------------------------------------------------------------------------------- |
| S2A, E1 rear air face |             18.92 |         27.52 | Long symmetric straight stroke beyond the curved cap in both zoom sections                                    |
| S4A, E2 rear air face |             15.74 |         18.10 | Short symmetric straight stroke to E2's front blank height; conservative cap anchor within native uncertainty |

Zero clear-cap changes, two `rimExtensionSd` additions and zero cuts. Keep S3=18.10 rather than printed 18.225: the source-cap trial repeats 9.59 mm sag intrusion versus 9.513 permitted in 10.57 mm air, at all three zooms. This is the previously dated rendering margin, not a new source correction. S2A clear 27.52 trial fails slope 89.0° >64.2°. S4A clear 18.10 passes geometry but is rejected because source effective diameter 31.48 defines clear 15.74; an outer blank is not clear aperture. Other rear strokes are weak curves/adjacent ink without an independently resolved cap-to-land transition, so no speculative land is added. Cemented interfaces retain full connected curved caps, without opaque bonded lands. All R/d, full source A16/A14 terms, stops, gaps, presets and disabled-focus/centered-IS controls are protected.

### Glass and source qualifications

All sixteen source nd/νd pairs remain unchanged and were compared with the same original table. Paragraph 0060 explicitly defines d 587.6 nm, F 486.1 nm and C 656.3 nm with νd=(Nd−1)/(NF−NC); paragraph 0061 defines standard (1+K). Existing 16/16 compatible catalog curves remain qualified spectral proxies, not supplier/melt/chemistry identification. There are zero per-lens spectral overrides, zero source partial measurements and zero inferred APD annotations; no new glass value or identity is authored. Unchanged September glass conclusions retain their actual date. `source.example.label` becomes normalized Numerical Example 1, matching the native heading, without changing the selected example.

### Actual runtime and SVG

Surface and image-circle checks pass with the retained S3 margin. A 65-position clone matches actual z/sd/current iris with maximum difference zero. All 65 format chiefs reach ≥99%. The aperture census is within 3% at 11/65; source wide/middle pass, tele f/2.791057 versus 2.91 has S17 limiting, and 53 intermediate iris-convention discrepancies remain, worst −5.601269%. This is distinct from exact aimed-rim working f-number: wide/middle 2.909700/2.909847 match printed 2.91 closely; tele is vignetted at S11, without a numeric exact-working value. Across 65 zooms×7 presets, 454/455 calls trace and one tele wide-open call is vignetted, with before/after classifications identical. Dedicated source iris tuples 16.52/20.93/26.65 remain authoritative; no schedule or threshold is changed.

Vector bounding-sphere chiefs at source half-fields reach 20.884283/22.015042/22.210586 mm without clipping versus source Y 21.64, retained as rounded source/model differences. Current-iris 193-point pupil bundles at 65×4 fields retain source axial 193/193/169 and corner 98/136/132, exactly before/after. The omitted flare diaphragm's clipping remains unavailable, finite focus disabled and IS centered.

Source back-focus residuals are −0.000209/+0.004311/+0.002639 mm; largest interpolated residual −1.632517 mm at zoom 0.28125 (actual EFL 19.167711, displayed 20.259375). Preserve source gaps and qualify interpolation as illustrative, not focus preserving. Actual rendered SVG comparison confirms both shoulders and connected elements. Across 65 available states, 1,040 paths are finite, closed and connected, with zero hidden trim. Source fidelity, sampled runtime clearance and production identity remain separate.

### 2026-10-30 — Literal flare-plane restoration trial

Reopened the previously omitted flare plane because its source dimensions are complete. PDF page 14 / printed 5 gives fixed d20=3.52 and source row 21; PDF page 15 / printed 6 gives d21=7.04/1.27/−1.05 and the dedicated flare diameters 25.93/22.49/21.91 (radii 12.965/11.245/10.955). The source is unambiguous. Combined intervals 10.56/4.79/2.47 preserve all optical vertices.

The literal scratch restoration retained every R/d, published iris and aggregate gap, but validation rejects `gaps["21"].values[2][0]` and `[2][1]`: `thickness=-1.05 is negative`. Tele places the annular plane 1.05 mm beyond the next front vertex; it is not an ordinary non-overlapping axial interval. A second independent limitation is `SurfaceV2Input.sd:number`: only the primary stop accepts a station schedule, leaving no source-faithful secondary radius tuple. The wide-radius diagnostic was not adopted as a constant aperture. No refraction reordering, generalized-path reclassification, constant-diameter substitute or tolerance relaxation is used.

Retain the current optical prescription and explicit source-model limitation, with complete source numbers in the data header and analysis. The original remains usable; source review has no blocker. Full source-illumination fidelity remains unavailable until a generic model supports the secondary aperture's crossing position and varying radius. Current actual geometry and all earlier reported aperture, pupil, SVG and working outcomes are revalidated separately from that missing physical clipping.
