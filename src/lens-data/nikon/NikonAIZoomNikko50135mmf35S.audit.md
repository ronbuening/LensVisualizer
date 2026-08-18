# Audit Log - Nikon AI Zoom-Nikkor 50-135mm f/3.5S

Patent: US 4,497,547, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Example 1 against the current data file. No data changes were made in this pass.
- Retained the unresolved code rows:
  - `670576` lanthanum-crown code, no confirmed current public catalog match.
  - `672389` short-flint / S-NBH-class code, no confirmed current public catalog match.
  - `796410` lanthanum-flint / S-LAH52-class code, no confirmed current public catalog match.
  - `J-LAFH3 (HIKARI; 795286)`, no coefficient-backed public catalog match verified in the current resolver.
- Retained the catalog-backed or class-level rows already present for `S-TIH6`, `S-LAL12`, `S-BAH11`, `S-LAL14`, `S-LAH64`, `S-LAL8`, `N-SK11 / BACD11`, `S-NSL3`, `S-BSL7 / N-BK7`, `N-BAF10`, and `S-BAH27`.
- The high-index lanthanum/flint roles remain represented by the glass labels; no new metadata field was required.

### Phase 2 - Geometry and SD review

- Confirmed the data follows the patent's infinity-focus zoom states and published variable gaps.
- The patent gives total `G3-G4` variable gap `D3` and draws the aperture stop between G3 and G4, but it does not tabulate the exact stop split or clear apertures.
- Retained the documented inferred stop split before group 4 and the existing semi-diameters. They keep the stop near f/3.5 across the patent zoom states, fit the 62 mm filter constraint, and remain proportionally plausible against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives `nd`/`vd` only. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.

## 2026-07-30 - Patent 670576 catalog-equivalent recovery

- Rechecked 3L1 against the patent row `nd = 1.67025`, `vd = 57.6`.
- Discontinued OHARA S-LAL52 (`1.669999 / 57.327972`, code `670573`) is the closest coefficient-backed row and
  is inside the runtime d-line safety window.
- Relabeled 3L1 as the S-LAL52 optical equivalent while leaving the production supplier unspecified.
  The `672389` and `796410` rows remain unresolved; no prescription or zoom data changed.

## 2026-08-18 — 672389 and 796410 coefficient assignments

- Visually rechecked `patents/US4497547.pdf`, PDF page 10, Example 1. The two rows remain `1.67163 / 38.9` and `1.79631 / 41.0`.
- OHARA S-BAH32 matches 672389 within `Δnd = -0.001651`, `Δνd = +0.371`; HOYA NBFD2 matches 796410 within `Δnd = +0.000889`, `Δνd = +0.144`.
- Relabeled both rows as catalog equivalents while leaving their production suppliers unspecified. No prescription or zoom geometry changed.
