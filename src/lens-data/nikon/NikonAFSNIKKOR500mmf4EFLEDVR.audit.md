# Audit Log - Nikon AF-S NIKKOR 500mm f/4E FL ED VR

Patent: JP 2015-215560 A, Example 1, Fig. 1 (PDF page 18)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Compared the current diagram directly with Fig. 1. The large two-fluorite front section, smaller G1 rear elements, compact G2, stop gap, and G3a/G3b/G3c rear train follow the source silhouette.
- Dense leaders and group brackets make the automated rim screen unreliable on several thin rear elements. Zoomed visual comparison found no strong evidence for an SD change above the approximately 25% threshold.
- No SD was changed.

### Materials, labels, and movement

- Retained the official two-fluorite and three-ED element counts. L11/L12 are tagged fluorite and L15/L32/L35 carry inference-qualified ED tags.
- Resolved patent coordinate `553551` to the exact-coordinate J-KZFH4 catalog curve while explicitly retaining its post-filing status and declining to assert it as the historical glass identity.
- Restored the source group labels G2 and G3b while keeping focus and VR roles in metadata.
- Confirmed published G2 travel is 13.898 mm imageward from infinity to the near endpoint. This prime lens has no zoom travel.

### Verification

- Per-lens image-circle audit: passed with 0 undersized surfaces.
- Per-lens surface validator and regenerated glass-report suite: passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test` (2,493 tests), and `npm run build` (1,112 prerendered routes): passed.
