# Audit Log — Nikon AI AF VR Zoom-Nikkor 80-400mm f/4.5-5.6D ED

Patent: US 6,141,156 A, Working Example 4, Figure 7

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 7 and the supplied site screenshot agree on the large G1 collector, compact G2 subgroups, and tapered G3–G6 relay. No reliable element-height deviation exceeds the audit threshold.
- No SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added L11a–L61b source identifiers as `diagramLabel` values and removed redundant focus/VR words from the patent-facing annotations.
- Corrected the displayed product designation from `f/4.5-5.6 D` to `f/4.5-5.6D`.
- Marked L11b, L12, and L32a as inferred ED/APD: Nikon uniquely locates two production ED elements in G1 and one in G3. The patent still supplies no line-index or `dPgF` table.
- All 17 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

### Verification

- `npm run generate:glass-reports` — 8 files / 15 tests passed.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 255 files / 2492 tests passed.
- `npm run build` — passed; 1097 routes prerendered.
