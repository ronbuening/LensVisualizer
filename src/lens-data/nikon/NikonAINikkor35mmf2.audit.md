# Audit Log — Nikon AI Nikkor 35mm f/2

Patent: US 3,507,558, single numerical example.

## 2026-06-24 — Patent recheck, glass status, and SD provenance

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / surface 6 | `glass` | `Legacy 515/546 crown/light-flint class (exact melt uncertain)` | unchanged | Patent example confirms `nd=1.51454`, `νd=54.62`. No coefficient-backed public catalog match was verified for `515546`; retaining the explicit legacy/code-family label is more honest than forcing a near catalog glass. |
| L6 / surface 9 | `glass` | `Legacy 744/494 lanthanum-flint class (exact melt uncertain)` | unchanged | Patent example confirms `nd=1.74443`, `νd=49.4`. The row remains code-family `744494`; no exact coefficient-backed public catalog source was found. |
| L7 / surface 11 | `glass` | `Legacy 767/462 dense lanthanum-flint class (exact melt uncertain)` | unchanged | Patent example confirms `nd=1.76684`, `νd=46.2`. The row remains code-family `767462`; no exact coefficient-backed public catalog source was found. |

### Phase 2 — Retained-information audit

- Rechecked local `patents/US3507558.pdf` against the data file and companion analysis sidecar.
- The normalized patent table is `f=1.0`, `2ω=62°`, `F:2`, `B.f=1.1337`; current data uses the documented `×35.000` scale factor.
- Surface radii, axial thicknesses, refractive indices, and Abbe numbers in the data file agree with the patent table after scaling and rounding.
- The patent does not publish per-surface clear apertures or semi-diameters. It only states that the front lens diameter can be about `1.3f` and the filter/attachment diameter about `1.5f`; the current `sd` values remain renderer-safe estimates constrained by the f/2 pupil trace, off-axis clearance, 52 mm attachment standard, and edge/sag checks.

### Phase 3 — Spectral / metadata enrichment

- No `nC`, `nF`, `ng`, `θgF`, `Pg,F`, or `dPgF` rows were found in the extracted local patent text.
- APD status remains `false` for all elements. High-index status remains descriptive only: L1, L5, L6, L7, and L8 are high-index glasses by `nd`, but the patent does not identify them as anomalous-dispersion materials.

### Phase 4 — Analysis sync

- Current analysis sidecar already matches this audit: it identifies the scaled prescription, explains the front-diameter note, treats L4/L6/L7 as unresolved legacy code-family glasses, and avoids APO/APD claims.

### Verification

- Pending batch verification after the Nikon audit pass.
