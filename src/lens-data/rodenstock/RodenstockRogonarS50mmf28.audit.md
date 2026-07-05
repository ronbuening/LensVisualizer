# Audit Log - Rodenstock Rogonar-S 50mm f/2.8

Patent: DE 1,089,991, single numerical example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_1089991_B.pdf`. FIG. 1 shows the four-element enlarging objective.
- The patent uses arbitrary normalized units and does not publish clear-aperture semi-diameters. The data file scales the prescription to the 50 mm model and places the stop from the patent spacing note.
- FIG. 1 shows a larger front element, smaller inner element near the stop, and a rear group that grows again but remains below the first element height. Stored SDs match that profile: 13.2/11.5 mm before the stop, a 6.8568 mm stop, and 9.6-10.2 mm behind it.
- No SD values changed. Current values remain inferred from FIG. 1 and renderer edge/sag constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
