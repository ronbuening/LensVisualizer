# Audit Log - Sigma 40mm F1.4 DG HSM Art

Patent: JP 2020-012952 A, Example 1

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2020012952A.pdf`.
- Example 1 rows confirmed from local patent text:
  - S7 / L4: nd = 1.64769, vd = 33.84.
  - S11 / L7: nd = 1.60342, vd = 38.01.
  - S22 / L13: nd = 1.64769, vd = 33.84.
  - S24 / L14: nd = 1.62588, vd = 35.74.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7 | `E-FD15 (HOYA)` | `E-FD2 (HOYA)` | Exact nd/vd catalog match. |
| L7 / S11 | `E-F3 (HOYA)` | `S-TIM5 (OHARA)` | Exact nd/vd catalog match. |
| L13 / S22 | `E-FD15 (HOYA)` | `E-FD2 (HOYA)` | Same glass as L4. |
| L14 / S24 | `S-TIM35 (OHARA)` | `E-F1 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and source notes.

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L6 from `M-FCD500 (HOYA)` to `FCD705 (HOYA)`, the exact 1.55032 / 75.50 catalog match.
- Corrected L16 from `S-NBH56 (OHARA)` to `M-TAFD305 (HOYA)`, the exact 1.85135 / 40.10 catalog match.
- Synchronized the element narratives, glass table, manufacturing note, and sources.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L9 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-10-06 - L10 / L15 glass label

- Rechecked JP 2020-012952 A Example 1 rows 17 and 26 in the local PDF text: both print nd 1.59282, νd 68.63 and
  θgF 0.54, matching the stored values.
- Corrected L10 and L15 from `PCD51 (HOYA)` to `FCD515 (HOYA) / FCD505 class`. HOYA PCD51 is the 593/670 phosphate
  crown (nd 1.59349, νd 67.00, ΔPgF +0.0055); the patent pair is the HOYA fluorophosphate FCD515 / FCD505 coordinate
  (1.59282, νd 68.63 before HOYA's 2019 value update, 68.62 since; ΔPgF +0.0156), which also agrees with the stored
  dPgF 0.015. The label previously resolved to M-PCD51 through an alias (Δnd −8e-4, Δνd −1.6) and now resolves to
  FCD515 (Δnd 4e-6, Δνd −0.01).
- Synchronized the two element lines, the glass table, the `apdNote` wording (fluorophosphate, not phosphate) and the
  catalog source line. No geometry, nd, νd or dPgF changed.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: ¶0017 (local `patents/JP2020012952A.pdf`, PDF page 6), `ΔPgF = PgF − 0.64833 + 0.00180 × Vd`. The
  patent's line is therefore `0.64833 − 0.00180 × νd`, not the engine's `0.6438 − 0.001682 × νd`.
- Numerical Example 1 (PDF pages 11–12; ¶0059, PDF page 10, defines the column) prints an absolute `PgF` column for
  every glass row, but to two decimals only. The condition table (¶0093, PDF page 18) additionally prints condition (9)
  `VnA × ΔPgFnA = 5.36` for the G1A negative lenses (L2, L3; νd 95.10): the patent's own deviation is
  5.36 / 95.10 = +0.056362, so `PgF = 0.533512`, which rounds to the table's 0.53.
- Every stored `dPgF` was the two-decimal table `PgF` referred to the patent's line and rounded to three decimals
  (0.53 → +0.05285 at νd 95.10, 0.54 → +0.02757 at νd 75.50, 0.54 → +0.01520 at νd 68.63); the analysis glass table
  carries the same column for all eleven glasses.
- A two-decimal `PgF` has a ±0.005 rounding band (0.010 wide), wider than the gap between the two lines at these νd
  (0.0067, 0.0044, 0.0036). It settles which convention the stored numbers were in but cannot fix the value, so each value now
  comes from the most precise traceable figure and is checked against the printed two decimals: the patent's
  condition (9) for the FCD100 row, and the repo catalog curve for FCD705 and FCD515 (catalog-derived, stated in the
  `apdNote`), as in the two-decimal θgF rulings already recorded for other lenses.

| Element | νd | Source figure | Stored before | Stored after |
|---|---:|---|---:|---:|
| L2 | 95.10 | Patent condition (9) `VnA × ΔPgFnA = 5.36` (PDF page 18): patent deviation +0.056362, `PgF = 0.533512`; table `PgF = 0.53` (surface 3, PDF page 11) | 0.053 | 0.049670 |
| L3 | 95.10 | Same condition (9) figure; table `PgF = 0.53` (surface 5, PDF page 11) | 0.053 | 0.049670 |
| L6 | 75.50 | Table `PgF = 0.54` (surface 10, PDF page 11; patent-line deviation +0.027570); catalog HOYA FCD705 `PgF = 0.5400` | 0.028 | 0.023177 |
| L10 | 68.63 | Table `PgF = 0.54` (surface 17, PDF page 12; patent-line deviation +0.015204); catalog HOYA FCD515 `PgF = 0.5441` | 0.015 | 0.015751 |
| L12 | 95.10 | Table `PgF = 0.53` (surface 21, PDF page 12), the same glass row as L2/L3; `PgF = 0.533512` from condition (9) | 0.053 | 0.049670 |
| L15 | 68.63 | Table `PgF = 0.54` (surface 26, PDF page 12; patent-line deviation +0.015204); catalog HOYA FCD515 `PgF = 0.5441` | 0.015 | 0.015751 |

- For review: converting the two-decimal table figures alone would give +0.046158 (0.53 at νd 95.10), +0.023191 (0.54
  at νd 75.50) and +0.011636 (0.54 at νd 68.63). The first is superseded by the patent's own condition (9) value; the
  second equals the catalog-derived value within 0.00002; the third would sit 0.0041 below the FCD515 curve from
  rounding alone, so the catalog figure is stored instead. The FCD100 catalog curve (`PgF = 0.5336`, +0.049777)
  agrees with the condition (9) value within 0.0002.
- L12: condition (9) is defined for the G1A negative lenses only. Its `PgF` is applied to L12 because the row is the
  same glass (nd 1.43700, νd 95.10, `PgF` 0.53), so one glass does not carry two g-line indices in one lens.
- The 2026-10-06 remark that the stored 0.015 "agrees" with FCD515 was a coincidence: 0.015 was 0.54 on the patent's
  line (+0.0152), and the rounding of 0.5441 to 0.54 nearly cancelled the gap between the lines.
- All six `apdNote` strings now quote the printed figure, the patent's own deviation and the runtime value; a header
  note in the data file names both lines. The analysis keeps the patent's ΔPgF in the element text, the glass table
  and condition (9), states the stored values separately, and its condition (9) footnote now gives the recovered
  `PgF` as 0.5335 (was "approximately 0.5337", which would give 5.38).
- Left: nothing. No other element carries `dPgF` and none was added; no element authors `nC`/`nF`/`ng` or uses
  `indexReference: "e"`. No `nd`, `νd`, glass label, `apd` tag or surface changed.
- Second read, same day: the formula (PDF page 6), the sixteen Example 1 glass rows (PDF pages 11–12) and
  condition (9) = 5.36 for all four examples (PDF pages 18–19) were re-read from the local PDF and the six values
  recomputed; none changed. 5.36 is itself a two-decimal print, so the FCD100 value carries ±0.00005
  (+0.049617 to +0.049723). The repo catalog also holds FCD505 (`PgF` 0.5443, +0.015973), 0.0002 from the FCD515
  figure stored for L10/L15. The L10/L15 `apdNote` and the analysis now also give the FCD515 catalog `PgF` on the
  patent's line (+0.0193), so the stored +0.015751 is not read as the table's +0.015.
