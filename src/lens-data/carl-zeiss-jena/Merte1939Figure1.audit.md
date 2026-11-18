# Audit Log - Merté / Zeiss US2171274 Figure 1

Patent: US2171274 Figure 1. Data stem: `Merte1939Figure1`.

## 2026-11-17 - Source-literal isolated build

- Visually checked original Figure1/table sheet; retained signed radii, n_d/V, all thicknesses and total airspaces. Figure2 C-line embodiment remains a separate hold, not a second build.
- Computed paraxial infinity BFD; source focal residual +0.0276745% retained rather than fitted away.
- Estimated iris at midpoint of first17.61mm air gap. The Arizona reconstruction was not independently consulted for this build and is not treated as patent authority. Clear rims are heuristic, without gap-sag override.
- No exact production model, factory prescription or melt identity established.

### Fresh scoped verification

| Gate | Result | Evidence |
|---|---|---|
| Canonical native model | Zero errors | validation.json / native.log |
| Render diagnostics | Zero trim amounts | validation.json |
| Iris stroke | Positive clearances8.805/7.539746mm | validation.json |
| Independent geometry1001 samples per interval | Positive, minimum0.219195mm | independent-geometry.json |
| Dense axial tracing | 181/181 samples across±90% pupil pass | validation.json |
| Independent paraxial | EFL100.02767451625678; BFD51.174791009025206mm | independent.json |
| Independent exact Snell/native comparison | Seven samples; max1.1546319456101628e-14mm | crosscheck.json |
| Scoped strict TypeScript/eslint/prettier | Passed | typecheck.log / lint.log / format.log |

### Limits

±99% axial samples clip at iris; paraxial pupil radius is not an exact full-pupil admission guarantee. Diagnostic field samples clip2/9 at3.75° and4/9 at7.5°. No guaranteed full-field performance, MTF quality or near-focus capability. Full-app regression and compiled-viewer/browser QA remain integration tasks. Model hidden pending integration.

### Deduplication and provenance

Fresh retained-source exact-number search found zero hits across3400 lens source bodies. Earlier scout checked prescription fingerprints and34 historical delivered/held configurations with no match; this is inherited scout evidence, not a new exhaustive remote inventory audit. Foreign aliases not independently established. Retained main pin3fd318c3e82cdbc3e5d3a1ed7bd5abbf4e99bfc2 and engine compatibility are inherited from parent/prior verified work; no fresh remote-main fetch was performed here. No unrelated checkout is included in the evidence ZIP. No upload, publication, commit, deployment or user delivery occurred; private archival/readback remains parent-owned.
