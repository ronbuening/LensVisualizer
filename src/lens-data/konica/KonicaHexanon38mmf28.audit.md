# Audit Log - KONICA HEXANON 38mm f/2.8

Patent: US 3,615,126, Embodiment I / Claim 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US3615126.pdf`. The patent publishes the normalized Embodiment I prescription and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a compact Tessar-like four-element layout with the front element largest, two smaller central elements, and a rear positive meniscus behind the stop.
- Stored SDs match that hierarchy: the front element is 7.25-8.7 mm, the middle elements are about 6.1-6.95 mm, the rear element returns to 6.75-7.0 mm, and the stop is kept separate at 4.927 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/2.8 stop geometry, ray-envelope clearance, edge thickness, and cross-gap sag checks.

### Verification

- `npm test -- elementRenderDiagnostics`
