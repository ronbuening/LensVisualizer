# Audit Log — PENTAX SMC PENTAX-A ZOOM 35-70mm f/4

Patent: US 4,812,022, Example 3, Figure 9 and Table 3

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L7, 13–14 | 10.8 mm | 7.2 mm | A 300 dpi Figure 9 measurement makes the final meniscus distinctly smaller than L4–L6. The former value instead made it the rear group's largest element. |

The remaining profiles follow Figure 9 within the drawing tolerance. Leader curves around the section were excluded from the measurement.

### Labels and glass

- Normalized the patent assignee spelling to the repository's existing form.
- Identified OHARA S-LAM2 as a source-precision catalog equivalent for L4's patent 744447 coordinate. This supplies verified Sellmeier coverage without asserting the production supplier.
- All seven elements now have coordinate-compatible Sellmeier coverage.

### Verification

- `audit:surface` accepted the revised L7 rim.
- `audit:image-circle` reported zero undersized surfaces.
