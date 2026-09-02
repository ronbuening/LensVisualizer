# Universal Relationship Map Constellation Refinements

Branch: `ronbuening/RefineUniversalRelationshipMap`

## Summary

- Replaced the catalog-wide map's dominant single-assignee ring with deterministic multi-hub neighborhoods.
- Refined hub placement so corporate-history connections take priority over unique shared patents, followed by
  neighborhood size.

## Changes

- Corporate-family and major-assignee hubs own their nearest graph nodes and lay them out in capacity-limited local
  rings.
- The contracted hub graph selects its center and inner orbits lexicographically by corporate links, shared patents,
  and node count; circular insertion keeps strongly related hubs adjacent.
- Soft neighborhood halos preserve every individual relationship edge at consistent within/between-neighborhood
  brightness.
- Local ring and arc spacing were increased to improve readability without changing inter-neighborhood clearance.

## Verification

- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — 270 files / 2,588 tests passed.
- `npm run build` — passed; 1,233 routes prerendered.
- Live-catalog geometry probe — all 1,670 edges positioned, zero halo collisions, zero out-of-bounds nodes.

## Follow-ups

- Browser visual QA was unavailable because no browser was connected; review the final spacing and constellation shape
  interactively during PR review.
