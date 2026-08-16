# Audit Log - Nikon AF-S NIKKOR 400mm f/2.8E FL ED VR

Patent: JP 2015-215559 A, Example 1, Fig. 1 (PDF page 45)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Compared the current diagram directly with Fig. 1. The dominant L11 front element, L12/L13 front pair, G1b doublet, compact focus group, stop, and four rear cemented-pair labels reproduce the source's relative silhouette.
- Figure leaders, group brackets, and crossing rays contaminate the automated rim screen. The zoomed source figure does not support any further SD adjustment above the audit's approximately 25% evidence threshold.
- No SD was changed.

### Materials, labels, and movement

- Added the official `2 FLUORITE + 2 ED` display specification. L11/L12 are the source-and-production-correlated fluorite elements; L15/L31 are the two inferential ED positions in this embodiment.
- Restored the source group labels G2 and G3b; focus and VR roles remain in group metadata rather than crowding the diagram.
- Confirmed published G2 travel is 15.400 mm imageward toward near focus. The source's +0.024 mm Bf endpoint change remains preserved and documented. This prime lens has no zoom travel.

### Verification

- Per-lens image-circle audit: passed with 0 undersized surfaces.
- Per-lens surface validator and regenerated glass-report suite: passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test` (2,493 tests), and `npm run build` (1,112 prerendered routes): passed.
