# Audit Log - Canon RF 100mm f/2.8 L Macro IS USM

Patent: JP2021-47297A, Numerical Example 1 (Canon / Taki, Mori, Nakahara)
Catalog version: 952b877

## 2026-09-25 — Source-state review

Source-state review outcome: verified. All three authored candidates reviewed; normal-SA infinity,
half life-size and 1.4× Super Macro are enabled. Both finite distances are calculated; intermediate travel is not certified.

Source: local `patents/JP2021047297A.pdf`, visually inspected pages 9–11, paragraph 0054 / Numerical Example 1.
All 31 prescription rows and the three normal-SA spacing columns match the retained source geometry.
R15 is STO; no rear plate appears. Paragraph 0052 defines BF as air-equivalent; the existing 14.66 mm
air gap is retained without inventing a sensor stack. The first column uses magnification -1e-6 as its
numerical infinity representation, consistent with the text's infinity configuration.

| Gap (mm) | Infinity | -0.5× | -1.4× |
|---|---:|---:|---:|
| d15 / STO | 3.10 | 11.72 | 27.41 |
| d20 | 27.41 | 18.80 | 3.10 |
| d25 | 4.17 | 11.48 | 29.50 |
| d29 | 26.63 | 19.32 | 1.30 |
| BF | 14.66 | 14.66 | 14.66 |

| State | Exact focusT | Matrix A | Matrix B (mm) | Object before R1 (mm) | Object-to-image (mm) |
|---|---:|---:|---:|---:|---:|
| half-life-size | 0.6787635163962894 | -0.499985881793 | 106.396374787189 | 212.798758248315 | 375.178758248315 |
| super-macro | 1 | -1.399993095495 | 129.202077315537 | 92.287653225808 | 254.657653225808 |

Distances use s=-B/A at the authored image plane. Independent exact-ray roots at
0.01/0.005/0.0025 mm first-vertex heights reproduce the source distances within 0.0000017 mm;
axial image residuals are below 1.13e-10 mm. At the smallest height, exact magnifications are
-0.499985881819 and -1.399993096315, within 0.00283% and 0.00050% of the source values.
The middle state's d15+d20 sum is 0.01 mm longer than the endpoints, so its computed track is 162.38 mm
versus 162.37 mm at the endpoints. The discrepancy is published and retained. The infinity formal finite
solution is a rounded-table residual, not a new finite state.

Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-rf100f28-macro`.
Numeric precision supports repeatability, not source accuracy. The separate SA-adjustment columns are
not authored keyframes, and the previously recorded second-SA spacing inconsistency remains a source blocker.
The normal-SA states do not simulate an adjustable SA mechanism. Existing qualified glass matches and
clear-aperture limits remain unchanged; no prescription geometry, aperture, movement or image plane is altered.

## 2026-05-10 - Glass relabel + patent prescription audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / surface 2 | `glass` | `S-TIH18 (OHARA)` | `S-TIH14 (OHARA)` | Patent Numerical Example 1 row 2 lists nd=1.76182, vd=26.5. Catalog S-TIH14 round-trips this pair; S-TIH18 is nd=1.72151. |
| L6 / surface 10 | `glass` | `S-LAH79 (OHARA)` | `S-LAH99 (OHARA)` | Patent row 10 lists nd=2.00100, vd=29.1. Catalog S-LAH99 round-trips this pair; S-LAH79 is nd=2.00330, vd=28.27. |
| L7 / surface 11 | `glass` | `S-LAM54 (OHARA)` | `S-LAH66 (OHARA)` | Patent row 11 lists nd=1.77250, vd=49.6. Catalog S-LAH66 round-trips this pair; S-LAM54 is nd=1.756998. |
| L8 / surface 13 | `glass` | `S-LAL9 (OHARA)` | `S-LAL18 (OHARA)` | Patent row 13 lists nd=1.72916, vd=54.7. Catalog S-LAL18 round-trips this pair; S-LAL9 is nd=1.691002. |
| L9 / surface 16 | `glass` | `S-LAM51 (OHARA)` | `S-LAL59 (OHARA)` | Patent row 16 lists nd=1.73400, vd=51.5. Catalog S-LAL59 round-trips this pair; S-LAM51 is nd=1.699998. |
| L10 / surface 18 | `glass` | `S-LAM54 (OHARA)` | `S-LAH66 (OHARA)` | Patent row 18 repeats the same nd/vd pair as L7; same S-LAH66 relabel rationale. |
| L11 / surface 19 | `glass` | `S-NPH4 (OHARA)` | `946180 — ultra-high-index dense flint (nd=1.94595, νd=18.0)` | Patent row 19 lists nd=1.94595, vd=18.0. No current catalog entry matches; S-NPH4 is nd=1.89286, so a code-based label avoids a false Sellmeier match. |
| L12 / surface 21 | `glass` | `E-LAF8 (Hikari)` | `764485 — Hikari/CDGM lanthanum flint class (nd=1.76385, νd=48.5)` | Patent row 21 lists nd=1.76385, vd=48.5. No current catalog entry matches; the code-based label preserves the Hikari/CDGM attribution while leaving a future catalog upgrade path. |
| L13 / surface 23 | `glass` | `S-LAL9 (OHARA)` | `S-LAL18 (OHARA)` | Patent row 23 repeats the same nd/vd pair as L8; same S-LAL18 relabel rationale. |
| L14 / surface 24 | `glass` | `S-LAH78 (OHARA)` | `TAFD40 (HOYA)` | Patent row 24 lists nd=2.00069, vd=25.5. Catalog TAFD40 round-trips this pair; S-LAH78 is not currently catalog-resolved. |
| L16 / surface 28 | `glass` | `S-TIM28 (OHARA)` | `S-TIM25 (OHARA)` | Patent row 28 lists nd=1.67270, vd=32.1. Catalog S-TIM25 round-trips this pair; S-TIM28 is nd=1.68893. |

### Phase 2 - Retained-information audit

- Confirmed surface prescription rows 1-31 against JP2021-47297A Numerical Example 1: all stored `R`, infinity-position `d`, and element `nd` values match the patent table. No numeric prescription fields changed.
- Confirmed aperture stop row 15 and variable gaps `d15`, `d20`, `d25`, and `d29`. The project stores the infinity-to-1.4x endpoints: `d15` 3.10 -> 27.41, `d20` 27.41 -> 3.10, `d25` 4.17 -> 29.50, and `d29` 26.63 -> 1.30.
- Confirmed patent-reported design values already in the file: focal length 100.81 mm, F-number 2.92, image height 21.64 mm, total optical length 162.37 mm, and BF 14.66 mm.
- Confirmed single-lens focal lengths L1-L17 match the patent single-lens data table.
- Confirmed Example 1 has no aspherical coefficient table; retained `asph: {}`.
- Semi-diameters remain the existing render-tuned values derived from the patent effective-diameter table and Canon construction diagram matching.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes nd/vd only; no `dPgF`, `nC`, `nF`, or `ng` values were found, so no per-element spectral fields were added.
- Catalog relabeling upgrades Sellmeier resolution for L2, L6, L7, L8, L9, L10, L13, L14, and L16.
- Existing metadata (`subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `maker`, and `focusDescription`) already matched the patent and was retained.

### Phase 4 - Analysis sync

- Updated `CanonRF100f28.analysis.md` element narratives, D2/D3/D4 prose, glass map, repeated-glass summary, and anomalous glass-power pairing notes for the corrected labels.
- Regenerated `agent_docs/generated/catalog-mismatches.generated.md` and `agent_docs/generated/glass-relabel-candidates.generated.md`; this lens no longer appears in either report.
- Regenerated `agent_docs/generated/unresolved-glass.generated.md`; only the intentional 946180 and 764485 code-based labels remain for this lens.

## 2026-09-09 — First-added audit, lens 33

Rechecked original JP2021047297A pp. 9–11 and Figure 1 (p. 17, 600 dpi). Retained all 31 source radii/gaps, 17 nd/vd pairs and source individual focal lengths. Restored published half-diameters, with explicitly documented S17/S18 renderer limits 13.25 mm (source 13.49/13.46). BF14.66 is already air-equivalent under paragraph52; no plate/filter rows. Corrected initial aperture2.8→2.92, calculated close-focus0.26→0.254657653m and middle keyframe0.693003→0.678763516. Preserved the source middle-station0.01mm rounding difference. Qualified catalog names and removed unsupported supplier/chemistry/design-intent claims; elements11/12 now name compatible FDS18/S-LAH96. Normal SA setting is explicit; no unsupported all-focus SA adjustment claim. Original scan confirms the second0.5× SA configuration's d15+d20 sum discrepancy, left as follow-up. Production baseline inspected. Surface/image-circle and no-hidden-trim probes pass; local interaction review completed: infinity, closest focus, intermediate focus 0.68, f/32 and motion chart (25.33 mm maximum travel). Three source/geometry tests pass; batch gates pending. Figure 1(C) does not reproduce the numerical closest-focus group separations, retained as a further source limitation.
