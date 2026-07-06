# Audit Log - KODAK AERO EKTAR 6 inch f/3.5

Patent: US 2,983,193, Fig. 2 prescription / Fig. 1 section

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["large-format-lens-board"]`.
- The represented design is an Aero Ektar/aerial-objective prescription, but surviving Aero Ektars are commonly encountered adapted to large-format press/view-camera lens boards rather than a stable cataloged still-camera bayonet.
- Local taxonomy already has `large-format-lens-board` for board/barrel-mounted large-format taking lenses, so no new aerial-camera category was introduced.
- Existing `imageFormat: "6x6"` was retained.

### Sources

- User direction in this task: classify Aero Ektar under `large-format-lens-board`.
- Speed Graphic / Aero Ektar secondary check: examples of Aero Ektars removed from aerial cameras and used on 4x5 Speed Graphic bodies, https://en.wikipedia.org/wiki/Speed_Graphic
- F24/K-24 secondary check: Eastman Kodak K-24 context for wartime aerial camera systems, https://en.wikipedia.org/wiki/F24_camera

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US2983193.pdf`. The patent publishes the f = 100 mm f/3.5 prescription table and section drawing, but no clear-aperture or semi-diameter table.
- The drawing shows a fast double-Gauss-like objective with large outer positive singles, smaller inner cemented groups around the central stop space, and a rear single that remains broad but smaller than the front mouth.
- Stored SDs follow that pattern after scaling to the 6 inch design: front surfaces are 39-43 mm, the inner groups are roughly 27.8-33.0 mm, the stop is 14.455 mm, and the final rear surface is 35.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/3.5 stop solution, ray-envelope clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
