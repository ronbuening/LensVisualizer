# Wide Zoom Lenses 260330

## Summary
- Added two full-frame mirrorless ultra-wide zoom patents to the catalog: Nikon NIKKOR Z 14-24mm f/2.8 S and Canon RF 15-35mm f/2.8 L IS USM.

## Changes
- Added the Nikon Z 14-24mm f/2.8 S lens data and analysis content.
- Added the Canon RF 15-35mm f/2.8 L IS USM lens data.
- Refined Nikon front-group semi-diameters to satisfy geometry validation while staying visually closer to Nikon's published optical section.
- Documented that Nikon Figure 10 is treated as a schematic silhouette while Table 4 and Table 5 are followed literally for curvature and asphere math.
- Added a homepage changelog entry covering both wide zoom additions.

## Verification
- `npm run typecheck -- --pretty false` — passed
- `npm run test -- __tests__/lensCatalog.test.ts --reporter=dot` — passed

## Follow-ups
- If the Nikon front-group silhouette still feels too sharp, the remaining lever is presentation tuning rather than changing the patented asphere coefficients.
