# Audit Log - SIGMA 35mm F1.4 DG DN | Art

Patent: JP 2022-33487 A, Numerical Example 1

## 2026-06-23 - Sigma-folder patent glass sweep

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / S8 | `glass` | `Heavy flint, code 593/355 (vendor uncertain)` | `593355 — heavy flint (vendor uncertain; no exact public catalog match)` | Patent Example 1 stores nd/vd = 1.59270 / 35.45. No exact public catalog match was found, so the unbroken six-digit token preserves a future auto-upgrade path. |
| L7 / S11 | `glass` | `HOYA FCD10A (459/902)` | `459902 — HOYA FCD10A (ELD fluorophosphate crown; no coefficient-backed catalog entry yet)` | Patent nd/vd = 1.45860 / 90.19 and Sigma identifies the production class as ELD. The label keeps the HOYA identity while making the six-digit code machine-readable for later coefficient backfill. |

## 2026-08-07 - Near-complete glass opportunity

- Visually rechecked Example 1 in local `patents/JP2022033487A.pdf`; L5 is `nd=1.59270`, `νd=35.45`, `θgF=0.592569`.
- The coefficient-backed HOYA FF5 curve reproduces the patent nd/νd coordinate and θgF; its catalog code 593354 differs only from the patent-rounded 593355 token.
- Relabeled L5 as an FF5 catalog spectral equivalent while leaving Sigma's production supplier unspecified. Authored patent `dPgF` remains authoritative at g-line.
- Synchronized the analysis. No geometry or authored patent constants changed.

### Phase 2 - Retained-information audit

- Re-checked the extracted JP 2022-33487 A Example 1 prescription against the data file; surface radii, spacings, focus variables, and asphere coefficients were retained.
- The patent does not publish clear-aperture radii, so the F/1.4 renderer-safe semi-diameter estimates were retained.
- Existing close-focus extrapolation from the patent's single finite-focus state remains documented in the header and analysis.

### Phase 3 - Spectral / metadata enrichment

- Retained the existing patent-backed APD / `dPgF` assignments on the FLD, ELD, and SLD elements.
- L5 and L7 now use unbroken six-digit glass tokens where no coefficient-backed catalog entry is currently available.

### Phase 4 - Analysis sync

- Updated the companion analysis text and the special-low-dispersion table for the L5 and L7 glass-label changes.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: ΔθgF = θgF − (0.648285 − 0.00180123 × VD), stated in claim 1 (PDF p. 2), ¶0009 (PDF p. 4) and again in ¶0027 (PDF p. 8) of local `patents/JP2022033487A.pdf`.
- Patent prints absolute θgF, six decimals, for every glass in the Numerical Example 1 surface table (PDF p. 15); ¶0097 (PDF p. 13) defines the column as the g-/F-line partial dispersion ratio. No per-glass deviation is printed; the patent's deviations appear only as group averages in the conditional-expression table.
- The file had stored the patent's own ΔθgF (rounded to four decimals) in `dPgF`. The engine rebuilds ng from `dPgF` against 0.6438 − 0.001682·νd, so each value is now θgF − (0.6438 − 0.001682·νd), written to six decimals. No element authors nC/nF/ng and none uses `indexReference: "e"`.

| Element | νd | Patent θgF | Patent ΔθgF (own line) | `dPgF` before | `dPgF` after |
|---|---|---|---|---|---|
| L1 | 70.44 | 0.530491 | +0.009085 | 0.0091 | 0.005171 |
| L2 | 95.10 | 0.533516 | +0.056528 | 0.0565 | 0.049674 |
| L3 | 40.14 | 0.569968 | −0.006016 | −0.006 | −0.006317 |
| L4 | 49.50 | 0.551804 | −0.007320 | −0.0073 | −0.008737 |
| L5 | 35.45 | 0.592569 | +0.008138 | 0.0081 | 0.0081 (unchanged) |
| L6 | 44.27 | 0.563261 | −0.005284 | −0.0053 | −0.006077 |
| L7 | 90.19 | 0.535032 | +0.049200 | 0.0492 | 0.042932 |
| L8 | 75.50 | 0.539881 | +0.027589 | 0.0276 | 0.023072 |
| L9 | 70.44 | 0.530491 | +0.009085 | 0.0091 | 0.005171 |
| L10 | 25.15 | 0.610160 | +0.007176 | 0.0072 | 0.008662 |
| L11 | 75.50 | 0.539881 | +0.027589 | 0.0276 | 0.023072 |
| L12 | 32.32 | 0.590002 | −0.000067 | −0.0001 | 0.000564 |
| L13 | 44.27 | 0.563261 | −0.005284 | −0.0053 | −0.006077 |
| L14 | 49.50 | 0.551804 | −0.007320 | −0.0073 | −0.008737 |
| L15 | 29.74 | 0.594996 | +0.000280 | 0.0003 | 0.001219 |

- Left: L5. Its engine-line value is +0.008396; the stored 0.0081 is within 0.0003 of that (the two lines cross near νd ≈ 37.6), so it was not re-rounded. L3 differs from its engine-line value by 0.000317 and was changed.
- Cross-check of the patent's line: the L1/L2/L5 mean of the patent ΔθgF column is +0.0246 and the L13/L15 mean is −0.0025, matching conditions (1) and (3) in the patent's table (0.025, −0.003).
- Data file: header note and element-registry comment now state the convention and tabulate θgF, the patent ΔθgF and the stored value. No `apdNote` was added (no element carried one). nd, νd, glass labels, apd tags and surfaces are unchanged.
- Analysis: added one paragraph in §3 naming the patent's formula and the file's convention; L7 now says its +0.0492 is measured from the patent's line; the L10 text and §4.2 row no longer describe the +0.0072 / +0.0087 pair as a melt residual, since both come from the same θgF on two reference lines. Every ΔθgF in the conditional-expression checks is still the patent's.
