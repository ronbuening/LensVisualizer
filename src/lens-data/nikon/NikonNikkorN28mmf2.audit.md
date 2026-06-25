# Audit Log - Nikon Nikkor-N 28mm f/2

Patent: US 3,736,049, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass correction

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / 7 | `glass` | `LACL60 (HOYA) / equiv. LaK` | `E-LASF016 (Hikari) / J-LASF016 / LACL60 class` | Example 1 publishes `nd = 1.77250`, `vd = 49.5`; the existing project catalog's E-LASF016 class round-trips to the same patent pair and keeps the LACL60 historical class identity. |

- Retained L8 `Discontinued LaF/LaK type (1970s)` unresolved. Its `nd = 1.74443`, `vd = 47.9` pair was not verified against an exact coefficient-backed current public catalog entry.
- Retained the remaining SK16, LAF2/S-LAM2, BK7/S-BSL7, FDS9/SF56A, and LAK8/S-LAL8 labels.

### Phase 2 - Geometry and SD review

- Rechecked the normalized patent prescription and the existing scale to the 28 mm production focal length.
- The patent does not publish clear apertures. The stop remains inferred in the air gap between L6 and L7.
- Retained the existing semi-diameters. They follow the large retrofocus front group, narrower stop region, and smaller rear group in proportions that remain rational against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- Updated `NikonNikkorN28mmf2.analysis.md` to use the corrected L4 `E-LASF016 (Hikari) / J-LASF016 / LACL60 class` label.

### Verification

- Pending full Nikon batch verification.
