# Audit Log — Nikon AF-S VR Zoom-Nikkor 200-400mm f/4G IF-ED

Patent: US 2005/0157403 A1, Example 1, Figure 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 1 and the supplied screenshot agree on the front collector, focusing subgroup, and tapered G2–G4 relay. No reliable height difference exceeds the audit threshold.
- No SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added L11–L49 source identifiers as `diagramLabel` values and shortened the seven cemented-pair annotations to their D11–D48 identifiers, removing the rear label collision.
- Corrected the displayed product designation from `f/4 G` to `f/4G`.
- Marked L12, L13, L14, and L47 as inferred ED/APD because their shared `498826` coordinate exactly matches Nikon's four-ED production count.
- All 24 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

### Verification

- `npm run generate:glass-reports` — 8 files / 15 tests passed.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 255 files / 2492 tests passed.
- `npm run build` — passed; 1097 routes prerendered.
