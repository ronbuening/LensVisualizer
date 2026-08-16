# Audit Log - Nikon AI AF-S NIKKOR ED 500mm f/4D IF

Patent: US 5,745,306 A, Example 2, Fig. 4 (PDF page 7)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 4. The prior integration correction reducing terminal L3c surfaces 22/23 from `20.3 / 20.5` mm to `16.5 / 17.0` mm matches the visibly smaller final element in the source.
- The G11/G12 front train, compact moving G2, stop, and remaining G3 proportions are consistent with the figure. Leader and bracket contamination makes the automated rim screen unsuitable for further changes.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering and added the missing `3 ED ELEMENTS` display specification.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements without inventing source partial-dispersion data.
- Resolved L21's patent code `773495` to the compatible M-TAF1 catalog curve; production supplier identity remains unspecified. L13 remains unresolved because no unique defensible public match was found.
- Restored concise source labels G1, G2, G3, and L14.
- Confirmed constrained negative-G2 travel is 10.8362 mm imageward toward near focus. This prime lens has no zoom travel.

### Verification

- Per-lens image-circle audit: passed with 0 undersized surfaces.
- Per-lens surface validator and regenerated glass-report suite: passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test` (2,493 tests), and `npm run build` (1,112 prerendered routes): passed.
