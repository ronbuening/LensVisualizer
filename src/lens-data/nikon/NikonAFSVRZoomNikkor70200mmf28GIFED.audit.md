# Audit Log — Nikon AF-S VR Zoom-Nikkor 70-200mm f/2.8G IF-ED

Patent: US 2003/0133200 A1, Example 1, Figure 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L47, 35–36 | 14.0 / 14.0 mm | 15.8 / 15.7 mm | A 300 dpi Figure 1 hand measurement shows L47 and L48/L49 at essentially equal aperture; the smaller integration value was an overcorrection. |

The remaining silhouettes match Figure 1 within the audit tolerance, and the restored pair passes geometry validation.

### Labels and glass

- Added L11–L49 source identifiers as `diagramLabel` values and shortened group/doublet annotations to prevent collisions while preserving the patent labels.
- Corrected the displayed product designation from `f/2.8 G` to `f/2.8G`.
- Marked L12, L13, L31, L32, and L47 as inferred ED/APD because the repeated `498825` coordinate exactly matches Nikon's five-ED production count.
- All 21 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

### Verification

- `audit:surface` accepted the restored 35/36 SD pair.
- `npm run generate:glass-reports` — 8 files / 15 tests passed.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 255 files / 2492 tests passed.
- `npm run build` — passed; 1097 routes prerendered.
