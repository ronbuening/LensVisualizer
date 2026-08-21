# Audit Log — Nikon AF Zoom-Micro Nikkor ED 70-180mm f/4.5-5.6D

Patent: US 5,717,527, seventh embodiment, Table 8.

## 2026-06-19 — Glass mismatch cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / surface 1 | `glass` | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | `861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)` | Patent Table 8 lists `νd=23.01`, `nd=1.86074`; the old label resolved to HOYA TAFD25 at `nd=1.90366`, so the safety net correctly rejected it. |
| L2 / surface 3 | `glass` | `TAFD25 / J-LASFH13HS class (Nikon/Hikari, 861/230)` | `861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)` | Same Table 8 row values as L1. The generated relabel candidate `S-NPH5` is numerically close but not source-backed for patent code 861/230. |

### Phase 2 — Retained-information audit

- Confirmed the affected stored values against local `patents/US5717527.pdf`: L1 and L2 remain `nd=1.86074`, `νd=23.01`.
- No radius, spacing, semi-diameter, or variable-gap changes were made in this pass.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, or `dPgF` rows were found for these elements in the extracted local patent text. The elements remain on the Abbe path until a coefficient-backed 861230 catalog source is found.

### Phase 4 — Analysis sync

- Updated the L1/L2 descriptions and glass-identification table to remove the misleading TAFD25/J-LASFH13HS class wording.

### Verification

- `npm run generate:glass-reports` — passed; catalog mismatches dropped to zero.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed.
- `npm run lint` — passed.

## 2026-07-29 — Glass coverage follow-up

- Current Hikari J-SFH2 provides a source-backed coordinate successor for L1/L2: it retains `nd=1.86074`, while
  current code `861231` / `vd=23.08` differs from the patent's `861230` / `vd=23.01` only in the last rounded digit.
- Hikari E-LAFH2 is an exact code and coordinate match for L15 (`804339`, `nd=1.80384`, `vd=33.89`).
- Relabeled all three elements and synchronized the analysis. This replaces the prior Abbe fallbacks with catalog
  dispersion without changing the patent prescription.

## 2026-07-30 - `748523` family review

- Rechecked the L5 patent row at `nd = 1.74810`, `vd = 52.30`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. The closest
  plausible rows are around `1.741 / 52.6` or `1.755 / 52.3`, outside the accepted d-line residual.
- Retained the explicit unmatched `748523` annotation without a supplier or APD claim. No prescription, zoom,
  focus, aperture, or semi-diameter values changed.

## 2026-08-11 — Phase 92 patent-coordinate catalog recovery

- Visually rechecked US 5,717,527 Table 8 on rendered PDF page 69: L3 is `1.61720 / 54.01`, L4 is
  `1.79504 / 28.56`, and L17 is `1.74077 / 27.63`.
- Recovered HOYA BACED1 (`1.617203 / 53.945664`) and matched the other rows to existing coefficient-backed
  J-LAFH3 (`1.79504 / 28.692277`) and E-FD13 (`1.74077 / 27.76`) models.
- Relabeled all three as supplier-neutral optical equivalents and synchronized the analysis. L6 `748523` remains
  unresolved; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Hikari's official 2022-07-01 catalog supplies the previously missing discontinued E-LAKH1 row at code `748523`,
  `nd = 1.748099`, `νd = 52.304982`, exactly matching L6 at the patent's printed precision.
- Relabeled L6 as a supplier-neutral E-LAKH1 catalog equivalent and synchronized the analysis. This supersedes the
  earlier current-catalog no-match disposition; no prescription, zoom, focus, aperture, or semi-diameter values changed.
