# Audit Log - Olympus M.Zuiko Digital 14-42mm f/3.5-5.6 II

Patent: US 8,994,842 B2, Common Example A / Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8994842.pdf`. Common Example A is illustrated by FIGS. 1A-1C; Example 1 shares that cross-section and adds the first focusing-mode data.
- The patent publishes aperture-diameter values in semidiameter form for close focus. The Common Example A values are 5.36785, 5.56235, and 5.97654 mm across wide/standard/tele; Example 1 lists 5.11456, 5.27903, and 6.35081 mm for its corresponding close-focus table.
- The stored state-independent stop SD of 6.0 mm sits within those patent aperture anchors and is close to the common tele value. FIGS. 1A-1C show a larger G1, compact G2/G3 around the stop, and a larger rear G4; stored element SDs follow that shape.
- No SD values changed. Current values remain constrained by the patent AD table, figure silhouette, and ray-clearance checks.

### Verification

- `npm test -- elementRenderDiagnostics`
