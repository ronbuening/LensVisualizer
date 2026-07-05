# Audit Log - Rodenstock Geronar 210mm f/6.8

Patent: DE 28 18 394 B1, sole numerical example

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_2818394_B1.pdf`. The drawing sheet shows the sole three-element example.
- The patent normalizes the prescription to f' = 100 at the e-line and does not publish clear-aperture semi-diameters.
- The figure shows two smaller front elements and a much larger rear element behind the stop. Stored SDs preserve that asymmetry: 16.9/15.5 mm before the stop, a 13.342 mm stop, and 28.0 mm at the rear element.
- No SD values changed. Current values remain inferred from the patent drawing, the normalized scaling, and large-format coverage constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
