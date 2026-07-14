# Audit Log — Schneider-Kreuznach Super-Symmar HM 120mm f/5.6

Patent: US 4,773,745, first numerical example and Fig. 1

## 2026-07-14 — Fig. 1 semi-diameter silhouette correction

### Phase 1 — Glass corrections

- No glass, refractive-index, or dispersion fields changed in this pass.

### Phase 2 — Retained-information audit

The patent does not publish clear-aperture diameters. Fig. 1 was therefore measured as a relative silhouette, normalized to the existing 21.5 mm semi-diameter at surface 1, and then constrained by the prescription's spherical-rim, positive edge-thickness, and cross-gap-sag limits.

| Surface(s) | Before `sd` (mm) | After `sd` (mm) | Fig. 1 justification |
| --- | ---: | ---: | --- |
| 2–3 | 18.5 / 18.5 | 17.0 / 17.0 | The facing L1/L2 surfaces share a rim height, with the front doublet clearly inset from surface 1. |
| 4–5 | 16.0 / 14.5 | 16.5 / 13.5 | L2's cemented junction stays close to its front height, followed by the drawing's stronger rear taper. |
| 6–7 | 9.0 / 8.5 | 9.8 / 9.5 | L3 remains the smallest glass group but is slightly taller relative to L2 than in the original render. |
| 8–9 | 15.0 / 15.0 | 13.5 / 13.5 | The thick central L4 doublet is distinctly shorter than L1 and the rear groups in Fig. 1. |
| 10 | 13.5 | 13.5 | Retained as the common L4 rim anchor. |
| 11–12 | 14.0 / 15.5 | 16.5 / 16.5 | L5 has nearly level rims and forms the first step of the rearward expansion. |
| 13–14 | 18.5 / 20.0 | 20.5 / 20.5 | L6 is nearly as tall as L1 and has level outer rims in the patent section. |

- Surface 1 remains 21.5 mm and anchors the normalized drawing reconstruction.
- `STO` remains 10.29 mm because it is derived from the reconstructed f/5.6 entrance pupil, not from a drawn patent diaphragm.
- No radius, thickness, index, stop coordinate, focal metadata, or focus spacing changed.

### Phase 3 — Spectral / metadata enrichment

- No spectral or identity metadata changed.

### Phase 4 — Analysis sync

- Updated the verification summary to describe the normalized Fig. 1 rim progression.
- Updated the derived geometry values: maximum `sd/|R|` 0.691557, maximum within-element SD ratio 1.264706, minimum edge thickness 2.307763 mm, and maximum cross-gap intrusion 59.9873%.

### Verification

- `npm run test -- elementRenderDiagnostics` — passed (5 tests).
- `npm run typecheck && npm run format:check && npm run lint && npm run test` — passed (192 files, 2,311 tests).
- `npm run build` — passed; 548 routes prerendered and sitemap generated.
- Local Diagram and Off-Axis browser views — corrected silhouette confirmed; expected ghost/vignetted rays only; no application console errors.
