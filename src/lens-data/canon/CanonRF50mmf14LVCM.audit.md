# Audit Log - CANON RF 50mm f/1.4 L VCM

Patent: US 2025/0251576 A1, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US-20250251576-A1.pdf`. The Numerical Example 1 table publishes surface number, radius, thickness, refractive index, and Abbe number only; no clear-aperture or semi-diameter data are provided.
- Fig. 1 shows a fast normal-lens layout with a large front collector group, smaller moving focus units near the stop, and a broad positive rear group followed by a smaller field-flattening tail element.
- Stored SDs match that hierarchy: the front collector begins at 28.8 mm and tapers to the 18-23 mm range, the stop is 13.55 mm, the rear positive group returns to about 17-20.8 mm, and the final tail surfaces are 16 mm.
- No SD values changed. Current values remain inferred from the patent image height, computed entrance-pupil geometry, the production 67 mm filter thread, edge thickness, cross-gap sag, and per-element SD-ratio constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
