# Audit Log — Nikon AF-S VR Zoom-Nikkor 24-120mm f/3.5-5.6G IF-ED

Patent: US 2004/0218274 A1, Example 2, Figure 5

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 5 was compared directly with the supplied site screenshot. The reduced L33 aperture from integration matches the compact rear G3 member; no additional reliable deviation exceeds the action threshold.
- No additional SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added L11–L53 source identifiers as `diagramLabel` values and shortened the group annotations to G1–G5, matching Figure 5 and eliminating the screenshot's label collisions.
- Corrected the displayed product designation from `f/3.5-5.6 G` to `f/3.5-5.6G`.
- Marked L3AP and L51 as inferred ED/APD because the two `497816` elements match Nikon's two-ED production specification.
- Fifteen physical glasses resolve to Sellmeier curves. The only uncovered modeled medium is the unidentified bonded aspheric resin layer; it is intentionally not represented as optical glass.

### Verification

- `npm run generate:glass-reports` — 8 files / 15 tests passed.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 255 files / 2492 tests passed.
- `npm run build` — passed; 1097 routes prerendered.
