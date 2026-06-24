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
