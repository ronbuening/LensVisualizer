# Audit Log — Tamron SP 150-600mm f/5-6.3 Di VC USD (A011)

Patent: US 10,545,321 B2, Example 4, Figure 13

## 2026-08-17 — Patent-figure, display-name, movement, and glass review

### Semi-diameters

- Figure 13 was rendered from the local patent at high resolution and compared by relative group height.
- L18-L20 were materially smaller than the clearly drawn final group. Their envelopes were enlarged from 10.2 / 10.7 / 11.0-11.2 mm to 14.0 / 14.5 / 15.0 mm.
- The revised profile passes the full edge-thickness, rim-slope, sag-intrusion, SD-ratio, and image-circle checks.

| Element | Surfaces | Before | After | Evidence |
|---|---|---:|---:|---|
| L18 | 37-38 | 10.2 mm | 14.0 mm | Figure 13 final-group profile |
| L19 | 39 | 10.7 mm | 14.5 mm | Figure 13 final-group profile |
| L20 | 40, 42 | 11.0 / 11.2 mm | 15.0 mm | Figure 13 final-group profile |

### Display name and glass

- Verified the displayed name against Tamron's official `SP 150-600mm F/5-6.3 Di VC USD` product designation.
- All 20 physical glasses resolve to coordinate-compatible Sellmeier curves.
- L2, L3, and L9 now expose Tamron's three-LD production correlation as inferred diagram tags without asserting a supplier or patent line-index values.

### Movement and diagram labels

- Recomputed all published infinity and close-focus states. G4 alone moves objectward for closer focus, while the five-group zoom retains the patent's wide-middle-tele order.
- Replaced long sign/focus prose with the patent's concise `G1`-`G5` labels.

### Verification

- `npm run audit:surface -- src/lens-data/tamron/TamronSPA011150600mmf563VC.data.ts` — passed.
- `npm run audit:image-circle -- src/lens-data/tamron/TamronSPA011150600mmf563VC.data.ts` — zero undersized surfaces.
- `npm run generate:glass-reports` — passed.
