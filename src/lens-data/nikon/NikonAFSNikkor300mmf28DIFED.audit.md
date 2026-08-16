# Audit Log - Nikon AI AF-S NIKKOR ED 300mm f/2.8D IF

Patent: US 5,745,306 A, Example 1, Fig. 1 (PDF page 2)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 1. The prior integration correction reducing terminal L33 surfaces 21/22 from `22.5 / 23.5` mm to `16.0 / 16.5` mm is supported by the source's visibly smaller last element.
- The remaining G11, G12, G2, and rear G3 proportions agree within the audit's visual tolerance. Figure rays and leaders contaminate automated rim readings, so no additional changes were taken from that screen.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering: `NIKON AI AF-S NIKKOR ED 300mm f/2.8D IF`.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements, matching Nikon's published three-ED layout without inventing patent partial-dispersion values.
- Restored concise source group labels G1, G2, and G3.
- Confirmed published negative-G2 travel is 10.8239 mm imageward toward near focus. This prime lens has no zoom travel.

### Verification

- Per-lens image-circle audit: passed with 0 undersized surfaces.
- Per-lens surface validator and regenerated glass-report suite: passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test` (2,493 tests), and `npm run build` (1,112 prerendered routes): passed.
