# Audit Log - Nikon AF Zoom-Nikkor 28-80mm f/3.5-5.6

Patent: JP H11-030748 A, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPA 1999030748-000000.pdf`. Example 1 is illustrated by FIG. 1 on the publication cover page, with FIGS. 2-4 as its aberration sheets.
- The patent publishes the Example 1 prescription and zoom data, but no full per-surface clear-aperture table.
- FIG. 1 shows the front group as the largest section, with a compact G2 and rear G3/G4 region. Stored SDs follow that silhouette: 28.5-14.6 mm through G1, about 7.0-10.8 mm around the stop and middle group, and 8.6-10.5 mm at the final group.
- No SD values changed. Current values remain inferred from the patent drawing and ray-clearance constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
