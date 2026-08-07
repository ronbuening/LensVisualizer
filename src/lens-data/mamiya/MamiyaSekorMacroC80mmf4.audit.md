# Audit Log - Mamiya-Sekor Macro C 80mm f/4

Patent: JP S55-24081 B2, Example 1 / Figure 1
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Patent-figure semi-diameter audit

### Figure evidence

- Rendered patent PDF page 5 at high resolution and isolated the Figure 1 optical section from labels and leader lines.
- The original front floating doublet and rear cemented group were visibly oversized against the patent silhouette.
- The central elements and stop region agreed closely enough with the drawing to remain unchanged.
- The patent does not tabulate clear apertures, so the revised values are rounded figure-constrained inferences rather than source dimensions.

| Surfaces | Before | Figure estimate | After | Decision |
|---|---:|---:|---:|---|
| 1 | 16.5 mm | approximately 12.8 mm | 12.8 mm | Tightened to the front-doublet silhouette |
| 2 | 15.2 mm | approximately 12.8 mm | 12.8 mm | Tightened to the front-doublet silhouette |
| 3 | 10.5 mm | approximately 12.8 mm | 12.8 mm | Matched the shared rear rim shown for the doublet |
| 8 | 14.3 mm | approximately 10.6 mm | 10.6 mm | Tightened to the rear-group silhouette |
| 9 | 15.3 mm | approximately 11.4 mm | 11.4 mm | Tightened to the cemented-interface silhouette |
| 10 | 17.0 mm | approximately 12.8 mm | 12.8 mm | Tightened to the rear-group silhouette |

### Geometry and tracing checks

- The revised surfaces preserve positive edge thickness and valid spherical domains.
- Exact tracing retains clearance for the complete 0.6-field diagnostic bundles at infinity and the represented `beta = -1/2` state.
- `npm run audit:surface -- src/lens-data/mamiya/MamiyaSekorMacroC80mmf4.data.ts --sd 1=12.8 --sd 2=12.8 --sd 3=12.8 --sd 8=10.6 --sd 9=11.4 --sd 10=12.8` passed.
- `npm run audit:image-circle -- src/lens-data/mamiya/MamiyaSekorMacroC80mmf4.data.ts` reported zero undersized surfaces.

### Glass review

- Retained the six-digit patent-coordinate glass classes. The patent gives only `nd` and `vd`, and no unique coefficient-backed production identities were established.
