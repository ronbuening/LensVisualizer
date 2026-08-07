# Audit Log - Mamiya N 210mm f/8 L

Patent: JP 2000-028919 A, Example 1 / Figure 1
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Patent-figure semi-diameter audit

### Figure evidence

- Rendered patent PDF page 5 at high resolution and isolated the Figure 1 optical section from dimension labels and leader lines.
- The front three-element block was materially too tall in the original model. Its authored 19.2–22.5 mm surface semi-diameters exceeded the figure silhouette by roughly 25–31%.
- The rear group remained within normal raster, line-width, and crop uncertainty, so its existing semi-diameters were retained.
- The patent does not publish numerical clear apertures; these remain figure-constrained modeling inferences.

| Surfaces | Before | Figure estimate | After | Decision |
|---|---:|---:|---:|---|
| 1–2 | 22.5 mm | approximately 15.5 mm | 15.5 mm | Tightened to the front-meniscus silhouette |
| 3–5 | 19.2 mm | approximately 14.5 mm | 14.5 mm | Tightened to the cemented-doublet silhouette |
| 6–7 | 15.5 mm | approximately 14–16 mm | 15.5 mm | Retained within drawing uncertainty |
| 8–12 | 22.5–24.5 mm | approximately 20–24 mm | 22.5–24.5 mm | Retained within drawing uncertainty |

### Geometry and tracing checks

- The updated values preserve positive edge thickness, valid spherical domains, and the authored cross-gap geometry.
- `npm run audit:surface -- src/lens-data/mamiya/Mamiya7210mmf8NL.data.ts --sd 1=15.5 --sd 2=15.5 --sd 3=14.5 --sd 4=14.5 --sd 5=14.5` passed.
- `npm run audit:image-circle -- src/lens-data/mamiya/Mamiya7210mmf8NL.data.ts` reported zero undersized surfaces.

### Glass and identity review

- Retained the patent-coordinate glass classes because the patent supplies `nd` and `vd` without coefficient-backed production identities.
- Marked L2 as `APD (INFERRED)`: its `nd = 1.49700`, `vd = 81.6` coordinates identify the ED/APD fluorophosphate-crown class, while the note preserves that the patent supplies no partial-dispersion table or unique production melt.
- Corrected the display name from “Mamiya 7 210mm f/8 N L” to the production ordering “Mamiya N 210mm f/8 L.”

### Screenshot follow-up

- Re-measured the supplied site diagram against the isolated patent figure. The rear group differs by approximately 13–20%, below the audit procedure's approximately 25% strong-evidence threshold; leader-line contamination prevents an independent reliable measurement of the central elements.
- No additional semi-diameter change was justified. Element shapes, D1/D2 boundaries, functional-group labels, and rounded Abbe badges agree with the prescription.
