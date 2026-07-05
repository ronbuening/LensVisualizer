# Audit Log - CANON NEW FD 14mm f/2.8 L

Patent: JP S57-64716 A, sole numerical example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPA 1982064716-000000.pdf`. The patent publishes the ultra-wide prescription and Fig. 1 cross-section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a large retrofocus front group tapering through multiple negative menisci toward a tight stop region, followed by compact post-stop doublets and a modest final field group.
- Stored SDs follow that envelope: S1 begins at 27.5 mm, the front group steps down toward the stop at 7.5-8 mm, and the rear groups re-expand only to about 10.5 mm.
- No SD values changed. Current values remain inferred from marginal/chief-ray envelopes and constrained by edge thickness, signed cross-gap sag, rim slope, and element SD-ratio checks.

### Verification

- `npm test -- elementRenderDiagnostics`
