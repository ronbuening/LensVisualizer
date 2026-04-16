# Canon RF 28-70mm f/2 L SD Tuning

## Summary
- Refined the Canon RF 28-70mm f/2 L USM semi-diameters to clean up the front-group silhouette and remove rear-group crowding/collision risk.

## Changes
- Reduced the L3 front and rear SDs to give the first singlet a cleaner taper.
- Rebalanced the rear block SDs from L12 through L18 so thin edges gained margin and the L16→L17 / L17→L18 region no longer crowds visually.
- Added a homepage changelog entry for the user-visible rendering fix.

## Verification
- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed

## Follow-ups
- Check the rendered SVG against the patent cross-section again if further by-eye SD tuning is needed on adjacent Canon RF zooms.
