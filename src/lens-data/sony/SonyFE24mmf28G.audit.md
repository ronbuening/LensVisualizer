# Audit Log - SONY FE 24mm f/2.8 G

Patent: JP 2022-030896 A, Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2022030896A.pdf`. Example 1 is shown by FIG. 1 on PDF page 19.
- The patent publishes clear-aperture H values. Stored surface SDs use those H values, with the stop semi-diameter paraxially adjusted to 5.6105 mm to reproduce the patent Fno = 2.884 while treating patent H = 5.769 as the local clear/effective radius.
- FIG. 1 shows a compact G1, a stop just before the moving G2, and a rear G3 that grows slightly toward the image side. Current SDs match the H-backed silhouette: 8.93 mm at the front, a 5.6105 mm stop, and rear surfaces increasing to 9.64 mm before the folded cover-glass gap.
- No SD values changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 across PDF pages 12–13 (rendered page 13 confirms the text layer): surface 18 d = 18.907;
  surfaces 19–20 are cover glass CG, 2.500 mm, nd 1.51680, νd 64.20 (no θgF, no H); 20 → IMG is 1.000 mm. Table 2
  BF = 21.555 = 18.907 + 2.500/1.51680 + 1.000. The last gap is not focus-variable.
- Surface 18 now stores the patent's 18.907 mm, with `rearPlates` CG (N-BK7, the 1.51680 / 64.2 catalog match) and
  gapAfter 1.000 mm. Paraxial check against the previous data: EFL identical; defocus changes by 0.0002 mm at both
  focus keyframes (rounding in the old 21.555). Physical track grows by 0.852 mm to 60.852 mm.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: ¶0037 (PDF page 8) defines 異常分散性 (`ΔPgF`) as the deviation of the g–F partial dispersion ratio
  from the straight line through glass C7 (PgF 0.5393, νd 60.49) and glass F2 (PgF 0.5829, νd 36.30). The patent
  prints the two points, not a closed formula; they give slope (0.5829 − 0.5393)/(36.30 − 60.49) = −0.0018024 and
  intercept 0.5393 + 0.0018024 × 60.49 = 0.648327, so `ΔPgF = PgF − (0.648327 − 0.0018024 × νd)`. That is not the
  engine's line `0.6438 − 0.001682 × νd`. Condition (4), `0.012 ≤ ΔPgF1b ≤ 0.100`, uses this deviation (claim 2 on PDF
  page 2; ¶0036, whose text is at the top of PDF page 8).
- Example 1 Table 1 (PDF page 12, re-read on the rendered page; rows 18–20 on page 13) prints a `ΔPgF` column only,
  with no absolute PgF / θgF anywhere, and fills it on two rows: surface 10 (L5) 0.0374 and surface 15 (L7) 0.0369.
  Table 21 (PDF page 18) repeats 0.0374 for condition (4).
- The stored `dPgF` values were those two patent deviations copied directly. Each is now the PgF the patent's line
  implies minus the engine line: L5 0.0374 + 0.648327 − 0.0018024 × 81.61 = 0.538633, minus 0.506532 = +0.032101;
  L7 0.0369 + 0.648327 − 0.0018024 × 81.56 = 0.538223, minus 0.506616 = +0.031607.

| Element | νd | Source figure | Stored before | Stored after |
|---|---:|---|---:|---:|
| L5 | 81.61 | Patent `ΔPgF = 0.0374` on its C7–F2 line (Table 1, surface 10, PDF page 12); implied PgF 0.5386 | 0.0374 | 0.032101 |
| L7 | 81.56 | Patent `ΔPgF = 0.0369` on its C7–F2 line (Table 1, surface 15, PDF page 12); implied PgF 0.5382 | 0.0369 | 0.031607 |

- The conversion uses the two-point line exactly as the patent defines it. The commonly quoted rounding of the same
  line, `0.64833 − 0.0018 × νd`, would give +0.032300 and +0.031806; the 0.0002 difference is the rounding of the
  slope at νd ≈ 81.6, and the patent's own points were preferred. Cross-check only, not a source: the catalog curves
  for the labelled glass class give PgF 0.5377 (FCD1) and 0.5375 (S-FPL51), next to the implied 0.5386 / 0.5382,
  whereas reading the old numbers on the engine line would have meant PgF 0.5439 / 0.5435.
- Both `apdNote` strings now quote the patent's `ΔPgF`, the patent's line, the implied PgF and the runtime value; a
  header note in the data file names both lines. In the analysis the patent-line coefficients were tightened from the
  loose "0.6484 − 0.001803νd" to the two-point values the conversion uses, and the stored values are now stated
  separately; every `ΔPgF` quoted for condition (4) and in the glass table remains the patent's own.
- Left: nothing. The other eight elements carry no `dPgF` and none was added (the patent's `ΔPgF` column is blank on
  their rows); no element authors `nC`/`nF`/`ng` or uses `indexReference: "e"`. No `nd`, `νd`, glass label, `apd`
  tag or surface changed.
