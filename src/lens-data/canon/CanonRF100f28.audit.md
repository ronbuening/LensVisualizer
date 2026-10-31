# Audit Log - Canon RF 100mm f/2.8 L Macro IS USM

Patent: JP2021-47297A, Numerical Example 1 (Canon / Taki, Mori, Nakahara)
Catalog version: 952b877

## 2026-05-10 - Glass relabel + patent prescription audit

### Phase 1 - Glass corrections

| Element / surface | Field   | Before            | After                                                              | Justification                                                                                                                                                                      |
| ----------------- | ------- | ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L2 / surface 2    | `glass` | `S-TIH18 (OHARA)` | `S-TIH14 (OHARA)`                                                  | Patent Numerical Example 1 row 2 lists nd=1.76182, vd=26.5. Catalog S-TIH14 round-trips this pair; S-TIH18 is nd=1.72151.                                                          |
| L6 / surface 10   | `glass` | `S-LAH79 (OHARA)` | `S-LAH99 (OHARA)`                                                  | Patent row 10 lists nd=2.00100, vd=29.1. Catalog S-LAH99 round-trips this pair; S-LAH79 is nd=2.00330, vd=28.27.                                                                   |
| L7 / surface 11   | `glass` | `S-LAM54 (OHARA)` | `S-LAH66 (OHARA)`                                                  | Patent row 11 lists nd=1.77250, vd=49.6. Catalog S-LAH66 round-trips this pair; S-LAM54 is nd=1.756998.                                                                            |
| L8 / surface 13   | `glass` | `S-LAL9 (OHARA)`  | `S-LAL18 (OHARA)`                                                  | Patent row 13 lists nd=1.72916, vd=54.7. Catalog S-LAL18 round-trips this pair; S-LAL9 is nd=1.691002.                                                                             |
| L9 / surface 16   | `glass` | `S-LAM51 (OHARA)` | `S-LAL59 (OHARA)`                                                  | Patent row 16 lists nd=1.73400, vd=51.5. Catalog S-LAL59 round-trips this pair; S-LAM51 is nd=1.699998.                                                                            |
| L10 / surface 18  | `glass` | `S-LAM54 (OHARA)` | `S-LAH66 (OHARA)`                                                  | Patent row 18 repeats the same nd/vd pair as L7; same S-LAH66 relabel rationale.                                                                                                   |
| L11 / surface 19  | `glass` | `S-NPH4 (OHARA)`  | `946180 — ultra-high-index dense flint (nd=1.94595, νd=18.0)`      | Patent row 19 lists nd=1.94595, vd=18.0. No current catalog entry matches; S-NPH4 is nd=1.89286, so a code-based label avoids a false Sellmeier match.                             |
| L12 / surface 21  | `glass` | `E-LAF8 (Hikari)` | `764485 — Hikari/CDGM lanthanum flint class (nd=1.76385, νd=48.5)` | Patent row 21 lists nd=1.76385, vd=48.5. No current catalog entry matches; the code-based label preserves the Hikari/CDGM attribution while leaving a future catalog upgrade path. |
| L13 / surface 23  | `glass` | `S-LAL9 (OHARA)`  | `S-LAL18 (OHARA)`                                                  | Patent row 23 repeats the same nd/vd pair as L8; same S-LAL18 relabel rationale.                                                                                                   |
| L14 / surface 24  | `glass` | `S-LAH78 (OHARA)` | `TAFD40 (HOYA)`                                                    | Patent row 24 lists nd=2.00069, vd=25.5. Catalog TAFD40 round-trips this pair; S-LAH78 is not currently catalog-resolved.                                                          |
| L16 / surface 28  | `glass` | `S-TIM28 (OHARA)` | `S-TIM25 (OHARA)`                                                  | Patent row 28 lists nd=1.67270, vd=32.1. Catalog S-TIM25 round-trips this pair; S-TIM28 is nd=1.68893.                                                                             |

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

## 2026-10-30 — reuse, identity/iris wording and current runtime

**Shape/glass coverage reused: 2026-09-09. No fresh shape/glass inspection claimed.** Canonical ingest comparison
of audited commit `c905777d9` with current V2 gives no prescription difference after only `source.example` and
`focus.published` provenance metadata are normalized. All 17 elements/pairs, 31 source surfaces/caps, four gap arrays,
three focus keyframes, aperture/iris authority and normal-SA-only scope are identical. The known S17/S18 concave-cap
guard limits and alternate-SA/table/figure conflicts remain explicit. No inferred cut, layer, rim extension or
unsupported spectral override is present; all 17 curves are qualified catalog proxies. Paragraph 0051, PDF page 9,
explicitly defines the d-line. This is a reused lens entry with narrow new documentation/runtime work, no fresh count.

The original front-page name spelling is 森 丈夫; analysis's older approximate Takehiro/丈大 is superseded. Romanized
names follow current catalog attribution without claiming that the Japanese original prints Latin readings. The
embedded Figure 1 section is native 150 ppi, so the September 9 600 dpi view was 4x magnification, not extra native
detail. Preserve the actual earlier review date.

Generic source stop diameter 30.81 mm / half 15.405 is envelope evidence. Current derived fixed iris is
15.1292861863 mm; no data, iris schedule, R/d, cap, glass or cam changes. The printed finite Fno 4.49/6.64 column is
not silently interpreted as a physical iris schedule or a reproduced exact working metric.

Fresh current-runtime follow-up: 66 focus positions including exact source middle, 528 aperture calls. Results are
527 traced and one infinity-wide-open S17 vignette. Infinity axial pupil is 169/193; close axial is 193/193. There is
no numeric exact working value at the vignetted infinity state. Middle/close exact working f/3.571497 and f/5.093627
differ from source 4.49/6.64; retain the convention/model discrepancy without fitting controls. Source close
conjugates focus numerically; infinity residual is −0.002683 mm from rounded rows. Worst interpolated residual is
−13.418988 mm at focus .859375 / displayed 0.296329 m. Intervals are illustrative, SA adjustment remains unavailable.
All 66 states / 1,122 rendered paths are finite, closed and connected with zero hidden trim. This runtime sample is
not a repeated original review, an all-state clearance claim or production validation.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 9,883 passed, 1,691 clipped, 6 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ ?` (6). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.254657653 |           0.254658 | 193 / 193 / 181                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 47.025139% at zoom 0, focus 0.05, aberration control 0: Gaussian 2.698090766 m versus label 5.093153065 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
