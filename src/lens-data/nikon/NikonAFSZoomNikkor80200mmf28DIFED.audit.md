# Audit Log — Nikon AI AF-S Zoom-Nikkor 80-200mm f/2.8D IF-ED

Patent: JP 2000-19398 A, Example 1, Figure 1 and Table 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| Patent L43 / data L16, 28–29 | 14.5 / 14.2 mm | 10.6 / 10.4 mm | A 300 dpi Figure 1 hand measurement makes L43 slightly smaller than L44/L45; the prior data made it about 30% larger. Both revised surfaces pass geometry validation. |

The patent-published SD anchors at surfaces 1, 6, 10, and 17 remain unchanged. The other silhouettes were within the figure-audit tolerance.

### Labels and glass

- Added the patent-facing L11a–L45 `diagramLabel` mapping and shortened group/component annotations to the labels printed in Figure 1.
- Corrected the displayed product designation from `f/2.8 D` to Nikon's `f/2.8D` styling.
- Marked the five `498825` positions as inferred ED/APD candidates because their count matches Nikon's five-ED production specification. No patent line indices or `dPgF` values were invented.
- All 18 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

### Verification

- `audit:surface` accepted the revised 28/29 SD pair.
- `npm run generate:glass-reports` — 8 files / 15 tests passed.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 255 files / 2492 tests passed.
- `npm run build` — passed; 1097 routes prerendered.
