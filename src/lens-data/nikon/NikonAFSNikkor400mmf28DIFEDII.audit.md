# Audit Log - Nikon AI AF-S NIKKOR ED 400mm f/2.8D II IF

Patent: US 6,239,919 B1, Example 4, Fig. 10 (PDF page 11)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Rechecked the current cross-section directly against Fig. 10. The prior integration correction reducing terminal L33 surfaces 22/23 from `21.0 / 21.5` mm to `15.5 / 16.0` mm matches the source's small last positive element.
- The front G1F, G1R, moving G2, and rear G3 taper remain consistent with the figure. Crossing rays and group brackets contaminate the automated screen, so no unsupported follow-up SD edit was made.

### Materials, labels, identity, and movement

- Corrected the display name and suffix styling to Nikon's official ordering: `NIKON AI AF-S NIKKOR ED 400mm f/2.8D II IF`.
- Marked active positions 1, 2, and 5 as inference-qualified ED elements, matching Nikon's published three-ED layout without inventing patent partial-dispersion values.
- Confirmed the reconstructed production endpoint moves negative G2 12.333140 mm imageward; the patent's own 3.8 m row gives 10.85845 mm in the same direction. This prime lens has no zoom travel.

### Verification

- Per-lens image-circle audit: passed with 0 undersized surfaces.
- Per-lens surface validator and regenerated glass-report suite: passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test` (2,493 tests), and `npm run build` (1,112 prerendered routes): passed.
