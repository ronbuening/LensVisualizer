# Audit Log - Sigma 85mm F1.4 DG HSM Art

Patent: JP 2018-005099 A, Example 4

## 2026-05-19 - Glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3 | `glass` | `FCD515 (HOYA)` | `FCD705 (HOYA)` | Patent nd/vd is 1.55032 / 75.50; FCD705 is exact. |
| L4 / S7 | `glass` | `NBFD3 (HOYA)` | `J-KZFH9 (Hikari)` | Patent nd/vd is 1.73800 / 32.26 and PgF 0.5898; J-KZFH9 is the exact d-code catalog match. |
| L5 / S9 | `glass` | `NBFD3 (HOYA)` | `J-KZFH9 (Hikari)` | Same patent glass as L4. |
| L7 / S13 | `glass` | `FCD515 (HOYA)` | `FCD705 (HOYA)` | Same patent glass as L2. |
| L10 / S18 | `glass` | `TAFD37 (HOYA)` | `E-FD15 (HOYA)` | Patent nd/vd is 1.69895 / 30.05; E-FD15 is exact. |
| L11 / S21 | `glass` | `NBFD3 (HOYA)` | `J-KZFH9 (Hikari)` | Same patent glass as L4/L5. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example 4; stored nd/vd and patent PgF values are retained.
- No radius, spacing, or asphere edits were needed in this scoped glass pass.

### Phase 4 - Analysis sync

- Updated the companion analysis names, repeated-glass narrative, and references for FCD705, J-KZFH9, and E-FD15.

## 2026-06-23 - APD badge correction

### Phase 1 - APD status corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1, L3-L5, L8-L14 | `apd` | `inferred` or `patent` | `false` | JP 2018-005099 A Example 4 publishes PgF for all glass rows, but these elements sit inside the patent's ordinary-material PgF/νd range and should not be highlighted as special APD glass. Their `dPgF` values remain for chromatic tracing. |
| L2, L6, L7 | `apd` | `patent` | retained | L2/L7 are the SLD low-dispersion elements, and L6 is the high-index anomalous-dispersion element called out by the patent/production design. |

### Phase 2 - Retained-information audit

- No surface, spacing, glass-name, or semi-diameter changes were made.
- Patent PgF-derived `dPgF` values were retained on every element so spectral analysis still uses the published partial-dispersion data.

### Phase 3 - Analysis sync

- Updated the companion analysis text to distinguish patent PgF data from APD viewer badges.

## 2026-07-29 - Glass classification follow-up

- Corrected L3 from the near but wrong E-ADF10 annotation to OHARA S-NBM51.
- The stored `nd=1.61340`, `vd=44.27` coordinate exactly matches S-NBM51 (`613443`); HOYA E-ADF10 is the
  adjacent but distinct `1.61310 / 44.36` row (`613444`).
- Synchronized the analysis and source list. No prescription values changed.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked Example 4 in local `patents/JP2018005099A.pdf`; S24 remains 1.67270 / 32.17 with its patent PgF
  data and R/d values unchanged.
- S24 `S-NBH52 (OHARA)` -> `S-TIM25 (OHARA)`, the exact same-vendor coordinate. S-NBH52 is the distinct
  1.67300 / 38.15 row.
- Synchronized the L13 element text, glass table, sourcing qualification, and references.

## 2026-07-30 - L9 catalog identity correction

- Rendered Example 4 in local `patents/JP2018005099A.pdf`, PDF page 19. S17 remains nd = 1.80420, νd = 46.50, PgF = 0.5571 with its R/d row unchanged.
- The prior `TAF105` label was not a valid match: current M-TAF105 is the distinct `1.77250 / 49.50` row.
- HOYA TAF3D is the exact `1.80420 / 46.50` catalog coordinate and evaluates to PgF = 0.55724, independently reproducing the patent partial-dispersion value.
- Relabeled L9 as a TAF3D catalog equivalent while leaving the production supplier unspecified. No prescription data changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent 27A gap with the patent's physical rear stack (Example 4, PDF pages 19–20 of local
  `patents/JP2018005099A.pdf`, rendered): d27 = 37.0799 / 47.4637 mm (infinity / 848 mm), then `rearPlates` LPF
  (符号の説明 designation) 1.4500 mm, nd 1.52301, νd 58.59, θgF 0.5449 (dPgF −0.00035 against the project normal
  line; C12 (HOYA) coordinate-compatible spectral proxy, as in the Sigma 105 mm pilot), and BF 1.0000 mm.
- Paraxial check against the previous data: EFL identical; defocus changes by at most 0.00024 mm (rounding in the
  old 39.032 / 49.416). Physical track grows by 0.498 mm and now matches the patent's printed 166.36 mm total length.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: ¶0023 (local `patents/JP2018005099A.pdf`, PDF page 6), `ΔPgF = PgF − 0.64833 + 0.00180 × νd`. The
  patent's line is therefore `0.64833 − 0.00180 × νd`, not the engine's `0.6438 − 0.001682 × νd`; the two cross near
  νd 38.4.
- Numerical Example 4 (PDF page 19) prints an absolute `PgF` column for every glass row (¶0080, PDF page 12, defines
  the column). The condition table (¶0131, PDF page 24) additionally prints the patent's own deviation for the three
  G1 negative elements only: ΔPgFLm1 = −0.0053 (L3), ΔPgFLm2 = −0.0005 (L4), ΔPgFLm3 = −0.0005 (L5).
- Every stored `dPgF` was the patent `PgF` referred to the patent's line and rounded to four decimals. Each is now
  the patent `PgF` minus the engine line, six decimals, unless it already agreed within 0.0003.

| Element | νd | Source figure (Example 4, PDF page 19) | Stored before | Stored after |
|---|---:|---|---:|---:|
| L1 | 54.67 | Patent `PgF = 0.5452` (surface 1); patent-line deviation −0.004724 | −0.0047 | −0.006645 |
| L2 | 75.50 | Patent `PgF = 0.5399` (surface 3); patent-line deviation +0.027470 | 0.0275 | 0.023091 |
| L3 | 44.27 | Patent `PgF = 0.5633` (surface 5); patent ΔPgFLm1 = −0.0053 (PDF page 24) | −0.0053 | −0.006038 |
| L4 | 32.26 | Patent `PgF = 0.5898` (surface 7); patent ΔPgFLm2 = −0.0005 (PDF page 24) | −0.0005 | 0.000261 |
| L5 | 32.26 | Patent `PgF = 0.5898` (surface 9); patent ΔPgFLm3 = −0.0005 (PDF page 24) | −0.0005 | 0.000261 |
| L6 | 20.88 | Patent `PgF = 0.6388` (surface 11); patent-line deviation +0.028054 | 0.0281 | 0.030120 |
| L7 | 75.50 | Patent `PgF = 0.5399` (surface 13); patent-line deviation +0.027470 | 0.0275 | 0.023091 |
| L8 | 40.80 | Patent `PgF = 0.5654` (surface 15); patent-line deviation −0.009490 | −0.0095 | −0.0095 (unchanged) |
| L9 | 46.50 | Patent `PgF = 0.5571` (surface 17); patent-line deviation −0.007530 | −0.0075 | −0.008487 |
| L10 | 30.05 | Patent `PgF = 0.6028` (surface 18); patent-line deviation +0.008560 | 0.0086 | 0.009544 |
| L11 | 32.26 | Patent `PgF = 0.5898` (surface 21); patent-line deviation −0.000462 | −0.0005 | 0.000261 |
| L12 | 40.80 | Patent `PgF = 0.5654` (surface 22); patent-line deviation −0.009490 | −0.0095 | −0.0095 (unchanged) |
| L13 | 32.17 | Patent `PgF = 0.5962` (surface 24); patent-line deviation +0.005776 | 0.0058 | 0.006510 |
| L14 | 40.10 | Patent `PgF = 0.5694` (surface 26); patent-line deviation −0.006750 | −0.0067 | −0.0067 (unchanged) |

- L4, L5 and L11 change sign: the same `PgF = 0.5898` is 0.0005 below the patent's line and 0.0003 above the
  engine's at νd 32.26. The patent's condition (4) is still evaluated with the patent's −0.0005 in the analysis.
- L2, L6 and L7 `apdNote` strings now quote the patent `PgF`, the patent's own deviation and the runtime value; a
  header note in the data file names both lines. The analysis keeps the patent's ΔPgF in the element text, glass
  table and conditions (4) and (6), and now states the stored values separately.
- Left: L8 and L12 (engine-line value −0.009774, stored −0.0095, difference 0.000274) and L14 (engine-line value
  −0.006952, stored −0.0067, difference 0.000252) already agree with the correct value within 0.0003 and keep their
  four-decimal figures. The `rearPlates` LPF `dPgF = −0.00035` was already the patent `PgF = 0.5449` minus the
  engine line (−0.000352) and is unchanged. L13 uses the patent `PgF = 0.5962`, not the S-TIM25 catalog curve
  (0.5989); the patent decides. No element authors `nC`/`nF`/`ng`, and no `nd`, `νd`, glass label, `apd` tag or
  surface changed.
