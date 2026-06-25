# Audit Log - Olympus M.Zuiko Digital ED 12-100mm f/4.0 IS PRO

Patent: JP2017-090535A, Numerical Example 1

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/JP2017090535A.pdf`.
- Numerical Example 1 confirms L4 at nd = 1.88227, vd = 37.18 and the existing zoom/spacer table. The patent does not publish mechanical clear apertures.
- The retained asphere coefficients, zoom spacings, surface geometry, focus-unit metadata, and inferred SDs were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S6 | `M-TAFD307 / MC-TAFD307-class (HOYA, moldable)` | `882372 - M-TAFD307 / MC-TAFD307-class (HOYA moldable high-index; no exact public catalog match)` | Same HOYA moldable high-index family, normalized to the six-digit code label because no exact public coefficient-backed row is available. |

### APD, high-index, and SD review

- No APD status changes: the patent excerpt reviewed lists nd/vd and asphere/zoom data but no partial-dispersion metadata for L4.
- L4 remains the dual-surface aspherical high-index variator element; the label now avoids an exact-catalog claim.
- No SD change: existing inferred apertures remain consistent with the zoom patent drawing and the data-file note that clear apertures are not patent-published.

### Analysis sync

- Updated the L4 element paragraph and glass summary row.
