# Audit Log — Fujifilm Fujinon GF 120mm f/4 R LM OIS WR Macro

Patent: US 2018/0059384 A1, Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L13 / 4 | `glass` | `S-TIH4 (OHARA)` | `S-NBH51 (OHARA)` | Patent Example 1 lists nd=1.74950, vd=35.28, θgF=0.58704; S-NBH51 is the matching Ohara/refractiveindex.info catalog glass. |
| L22 / 10 | `glass` | `S-TIL25 (OHARA)` | `S-NSL36 (OHARA)` | Patent Example 1 lists nd=1.51742, vd=52.43, θgF=0.55649; S-NSL36 matches the pair in the Ohara catalog source. |
| L32 / 15 | `glass` | `S-LAM51 (OHARA)` | `S-LAM52 (OHARA)` | Patent Example 1 lists nd=1.72000, vd=43.69, θgF=0.56995; S-LAM52 round-trips the patent pair. |
| L43 / 20 | `glass` | `S-NBH52V (OHARA)` | `E-F1 (HOYA)` | Patent Example 1 lists nd=1.62588, vd=35.70, θgF=0.58935; Hoya E-F1 is the exact sourced catalog match, so no generic code was used. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 1 rows against the extracted patent table; stored `nd`, `vd`, and element mapping already matched the patent values.
- No surface curvature, spacing, asphere, focus-gap, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-NBH51, S-NSL36, S-LAM52, and E-F1 already include manufacturer/refractiveindex.info-backed source data.
- No new Sellmeier or line-index catalog entry was required.

### Phase 4 — Analysis sync

- Updated the element prose and glass selection summary for L13, L22, L32, and L43.

## 2026-07-29 — Dispersion-coordinate follow-up

- Corrected L23 from `S-LAH52Q (OHARA)` to `S-NBH55 (OHARA)`. S-NBH55 exactly matches 1.80000 / 29.84; S-LAH52Q is the distinct 1.79952 / 42.24 glass.
- Synchronized the element narrative and glass summary.

## 2026-07-30 — L14 catalog-equivalent recovery

- Replaced the nonexistent `S-LAH85V` name with `L-LAH85V (OHARA catalog equivalent; production supplier
  unspecified)`.
- The patent retains 1.85150 / 40.78. Current OHARA L-LAH85V publishes 1.85400 / 40.38, which is inside the
  resolver's compatibility window but is not claimed as the production glass.
- Synchronized the element narrative and corrected the prior claim that all 14 rows were exact OHARA matches.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-24 gap (39.878 mm) with Table 1-continued's physical rear stack (PDF p. 21, sheet
  8): surface 24 d = 36.746 mm, then `rearPlates` PP 3.200 mm, nd 1.51680, νd 64.20, θgF 0.53430 (dPgF −0.00152),
  and 1.022 mm to the image plane. Glass label N-BK7 (resolver-compatible, as on the other GF files).
- Paraxial check against the previous data: EFL identical; defocus changes by 0.0003 mm at infinity and MOD, the
  rounding in the old fold (36.746 + 3.200/1.5168 + 1.022 = 39.8777 stored as 39.878). Physical track grows by
  1.090 mm to 172.98 mm, matching the analysis's 173.0 mm total length; `closeFocusM` (0.45 m manufacturer MFD) is
  unchanged.
