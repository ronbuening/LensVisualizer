# Audit Log — Nikon AI AF Zoom-Nikkor 18-35mm f/3.5-4.5D IF-ED

Patent: US 2001/0030812 A1, Example 2, Figure 4A

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 4A was compared directly with the supplied site screenshot. The front L13/L14 ordering corrected during integration matches the source; the remaining reliable height differences are below the 25% action threshold.
- No additional SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added source identifiers L11–L27 as `diagramLabel` values and shortened `G2a (IF)` to the patent's `G2a`; the header already states the inner-focus mechanism.
- Corrected the displayed product designation from `f/3.5-4.5 D` to `f/3.5-4.5D`.
- Marked L26 as inferred ED/APD because it is the unique `498825` element and Nikon specifies one production ED element.
- Eleven physical glasses resolve to Sellmeier curves. The only uncovered modeled medium is the unidentified bonded compound-asphere layer, so adding an optical-glass catalog row would be false precision.

### Verification

- `npm run generate:glass-reports` — 8 files / 15 tests passed.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 255 files / 2492 tests passed.
- `npm run build` — passed; 1097 routes prerendered.
