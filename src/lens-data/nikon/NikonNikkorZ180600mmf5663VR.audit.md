# Nikon NIKKOR Z 180-600mm f/5.6-6.3 VR Audit

Patent: WO 2024/062958 A1, Example 2 / Figure 5 / Tables 5–8

## 2026-08-03 - Integration, Figure, and Glass Audit

### Prescription and Display Name

- Checked the new prescription and analysis against the retained local patent, including Example 2, Figure 5, and
  Tables 5–8.
- Confirmed the display name against Nikon's product page. `NIKON` remains the repository's maker prefix and
  `NIKKOR Z 180-600mm f/5.6-6.3 VR` is Nikon's product spelling, so no display-name correction was needed.

### Semi-Diameters

- Isolated PDF page 90, rendered it at 300 dpi, rotated it to the optical-axis orientation, and audited the Figure 5
  optical section. The active figure and modeled prescription have a median figure/data scale ratio of 1.022.
- Refined the front collector and G2/G3/G4/G6 optical rims:

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 1–2 | 46.8 | 47.0 |
| 3–5 | 40.5 | 40.7 |
| 6–7 | 38.7 | 38.9 |
| 8–9 | 25.0 | 25.3 |
| 13–14 | 21.75 | 22.0 |
| 15–16 | 21.25 | 21.6 |
| 17–18 | 21.0 | 21.2 |
| 19–20 | 19.75 | 20.1 |
| 36–38 | 13.5 | 13.7 |
| 39–41 | 14.5 | 14.8 |

- Rejected a 25.3 mm L7 trial based on the drawing's outer box because it crossed both adjacent air gaps; the retained
  20.5 mm value follows the optical rim rather than the drawn flange.
- The accepted values retain the same sampled on-axis ray-fan pass pattern across all three zoom positions at infinity
  and 2.4 m focus.
- `audit:image-circle` reports no undersized surfaces, and `audit:surface` passes the asphere-domain, edge,
  slope, and cross-gap checks. A 13.8 mm surfaces 36–38 trial was also rejected after the edge validator found a
  0.009 mm overrun.

### Glass Classification and Dispersion

- Relabeled L7 from a generic TAF3 class to exact HOYA `TAF3D`, matching the patent's 1.80420/46.50 coordinate and an
  existing coefficient-backed catalog row.
- Strict and trusted chromatic coverage rise from 24/26 to 25/26 elements. The only remaining fallback is the explicitly
  identified optical-resin layer, which is not a missing optical-glass catalog type.
- The analysis glass table and L7 narrative were synchronized with the data file.

### Verification

- `npm run test -- dispersion.test.ts`
- `npm run generate:glass-reports`
- Full repository gates are recorded in the integration commit.
