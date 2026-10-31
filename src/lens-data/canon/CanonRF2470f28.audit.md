# Audit Log - Canon RF 24-70mm f/2.8L IS USM

Patent: US 2019/0278068 A1, Numerical Example 5
Catalog version: ab 3a 508

## 2026-05-11 - Patent glass relabel and analysis sync

### Phase 1 - Glass corrections

| Element / surface | Field   | Before                            | After                                                                             | Justification                                                                                                                         |
| ----------------- | ------- | --------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| L6 / S9           | `glass` | `S-NPH53 (OHARA)`                 | `S-NBH56 (OHARA)`                                                                 | Patent [0100] row 9 lists nd=1.85478, vd=24.8; S-NBH56 round-trips to that pair in the current catalog.                               |
| L8 / S13          | `glass` | `S-TIM25 (OHARA)`                 | `S-FTM16 (OHARA)`                                                                 | Patent [0100] row 13 lists nd=1.59270, vd=35.3; S-FTM16 matches, while S-TIM25 does not.                                              |
| L10 / S17         | `glass` | `S-LAH59 (OHARA)`                 | `764485 - lanthanum crown (patent nd=1.76385, νd=48.5)`                           | Patent [0100] row 17 lists nd=1.76385, vd=48.5. No exact current catalog entry; retained as code-based patent glass.                  |
| L12 / S20         | `glass` | `S-NPH2 (OHARA)`                  | `TAFD40 (HOYA)`                                                                   | Patent [0100] row 20 lists nd=2.00069, vd=25.5; TAFD40 round-trips to the patent pair.                                                |
| L16 / S27         | `glass` | `S-NBH55 (OHARA)`                 | `738323 - niobium dense flint (patent nd=1.73800, νd=32.3)`                       | Patent [0100] row 27 lists nd=1.73800, vd=32.3. No exact current catalog entry; retained as code-based patent glass.                  |
| L18 / S30A        | `glass` | `S-LAH65V (OHARA) - PGM`          | `854404 - moldable high-index lanthanum glass (patent nd=1.85400, νd=40.4) - PGM` | Patent [0100] row 30 lists nd=1.85400, vd=40.4. No exact current catalog entry; retained as code-based patent glass with PGM role.    |
| L19 / S32         | `glass` | `S-LAH51 (OHARA)`                 | `S-LAH65 (OHARA)`                                                                 | Patent [0100] row 32 lists nd=1.80400, vd=46.6; S-LAH65 round-trips to that pair.                                                     |
| L21 / S36         | `glass` | `FDS30 (HOYA) or H-ZLaF92 (CDGM)` | `TAFD55 (HOYA) / S-LAH99 (OHARA)`                                                 | Patent [0100] row 36 lists nd=2.00100, vd=29.1; TAFD55 and S-LAH99 both match to patent precision and resolve in the current catalog. |

### Phase 2 - Retained-information audit

- Surface `R`, `d`, and `nd` values were checked against patent [0100] Numerical Example 5; no prescription values changed.
- Zoom positions and variable gaps `d 5`, `d 15`, `d 21`, `d 24`, `d 31`, `d 33`, and `d 37` match the Example 5 wide / intermediate / telephoto table.
- Aspheric surfaces 22A, 30A, 31A, 34A, and 35A retain the patent coefficients and `K = 0` convention from [0093] and [0100].
- Semi-diameters remain the file's documented render clear-aperture estimates, derived from the patent effective-diameter column and Canon's construction diagram.

### Phase 3 - Spectral / metadata enrichment

- No `dPgF`, `nC`, `nF`, or `ng` values were added; the patent provides only nd/vd for Numerical Example 5.
- Existing metadata (`subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, mount, format, and focus description) was confirmed against the patent and production correlation.

### Phase 4 - Analysis sync

- Updated `CanonRF2470f 28.analysis.md` glass names and glass-map table to match the relabeled data file.
- Synced the pre-existing S-LAL18 correction for Elements 3 and 7; the analysis still referred to S-LAL14.
- Reworded unsupported exact-catalog claims for patent-only code labels and updated the ultra-high-index / PGM discussion.

## 2026-09-09 — First-added diagram audit, lens 38

Original Example 5 (PDF page 23), Figure 9 (page 10 at 600 dpi) and paragraphs 0084–0089/0093 checked. Restored all published effective diameters/2, corrected isolated element focal lengths and f/2.91 preset, qualified glass labels, and removed unsupported APD/molding/chemistry. Source radii, gaps, nd/vd and all five asphere coefficient sets remain unchanged. No filter or cover glass exists in this example.

Source limitation: numerical zoom data give L2 +0.36 mm net imageward motion despite the all-objectward narrative/arrows. Numerical tables are retained. Finite-focus motion is unpublished and disabled; corrected the former claim that L6 focus would change BF. Centered IS and legacy retail near-distance metadata are explicitly distinguished from modeled patent data.

Added the explicitly inferred zoom iris schedule from source station f-numbers; focus retains the current zoom iris. This corrects fixed-iris telephoto aperture mismatch without claiming a source physical-stop schedule. Regression verification passes.

## 2026-10-30 — Scoped shoulders and named source Abbe precision

Preserved the completed 2026-09-09 original source/shape/glass coverage and 2026-05-11 material history with their actual dates. Fresh scope is two newly resolved free-end shoulders and named printed Abbe precision; no re-dated whole-lens inspection is claimed. Direct original: `patents/US20190278068A1.pdf`, Numerical Example 5 [0100] PDF p.23/printed 11, Fig.9 p.10/sheet 9, Fig.10A/B p.11, Table 1 p.24, [0029] d/F/C/g definitions p.14 and [0093] equation p.20. All 37 R rows, 30 fixed d, seven infinity-gap arrays, five aspheres and 21 media remain source-checked, with unchanged controls.

| Surface / medium | Disposition                                | Exact source / constraint                                                                                                                                                       |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------- |
| S7               | Added outer 19.265; clear 14.595 unchanged | Primary ED29.19/2; native free-air step reaches the S6 blank height (ED38.53/2). Optical continuation 19.265 would exceed                                                       | R7  | 18.663. |
| S34A             | Added outer 16.485; clear 14.925 unchanged | Primary ED29.85/2; native front free-air step matches the S35A blank height ED32.97/2. No bonded interface here.                                                                |
| L1/S1 νd         | 22.8→22.76                                 | Table 1 Example 5 vd 1n; front negative Gin identified by source text/figure. Rounds back to primary 22.8.                                                                      |
| L15/S25 νd       | 81.5→81.54                                 | Table 1 Example 5 vfp; [0088] and Fig.9 identify Gfp after IS. Rounds back to primary 81.5; L5/L11 keep their own primary 81.5.                                                 |
| 21 media         | Same 21 curves, qualified                  | Explicit d reference; supplier/melt/chemistry/process unspecified. No source line indices or partials, no numeric override removed/added; prior unsupported APD remains absent. |

Native Fig.9 is 2560×3300 at 300ppi; active span approximately 1,288px/129.74mm =9.93px/mm, practical±0.7mm rim uncertainty. The older 600-dpi render was upsampling. Exact native crops resolve connected vertical free-end steps; 3× nearest-neighbor crops are viewing magnification only. Excluded leader/arrow/bracket/stop/image-plane ink. Outer walls are cap-anchored, not exact independently measured pistons. The 37-row source geometry, all 36 printed refracting caps and six curved cemented doublets remain unchanged; no opaque interface lands, disconnected wings, inferred cuts, source plates or speculative equal-height blocks.

Rejected scratch full optical S7 cap 19.265 with extension removed: slope 90° exceeds unchanged 64.2° guard, consistent with outer radius exceeding |R7|. The candidate retains source clear 14.595. S7–S8 physical gap 8.67 has sampled minimum 1.277650mm; L20 sampled minimum/center thickness 1.70mm; S35A–S36 air 0.15mm. All source constraints and guards remain unchanged. Small ambiguous rim differences are retained.

The [0086]/Fig.9 all-objectward narrative contradicts literal camera-relative L2 net +0.36mm; source table/control data remain and this existing source limitation is formalized in source.errata. No finite-focus table exists; focus stays disabled and source motion direction remains descriptive. Centered IS only. Two named Abbe precisions and source.example label normalization change source metadata/material precision, not R/d, aspheres, gaps, iris or focus controls.

Narrow surface/image-circle checks pass; 65/65 infinity aperture/field checks pass. Geometry-identical clone differs≤3.6×10⁻¹⁵mm; focus 0→1 has zero live position/iris change. Current iris 9.011390/11.039213/12.606889mm gives paraxialF2.91; real collimated 2.939369/2.965203/2.988002 is distinct from nominal-input stop heights 9.104236/11.257390/12.967065. Printed stop ED25.91 is not a proven physical iris schedule.

Collimated 65 × 3 × 97 grid: 18,915 rays, axial/chief clear, 3,337 ordinary clips, 119 bounded cap misses (75 first/44 next), zero seed/unexplained/unaimed failures. Source 21.64 endpoint grid: 873 rays, axial/chief clear, 155 clips, 10 bounded misses (five first/five next). No actual finite-object focus claim follows from inert controls. Worst illustrative intermediate infinity BF residual−1.046683mm atzoom 0.265625 is retained without fitting. All 1,365 contour states contain 21 connected/closed/finite paths with zero renderer trim. Actual final source-zoom SVGs compared with native Fig.9. Source fidelity, sampled runtime clearance and product correlation remain separate; finite/moved-IS/marginal/outer-piston/material limits are public in the [analysis](CanonRF2470f 28.analysis.md).
