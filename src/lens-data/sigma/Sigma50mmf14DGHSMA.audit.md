# Audit Log - SIGMA 50mm f/1.4 DG HSM | Art

Patent: JP 2015-114366 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2015114366A.pdf`. Numerical Example 1 is illustrated by FIG. 1 on PDF page 27.
- The patent does not publish clear apertures. The current SD set remains inferred and checked against sd/|R|, element front/rear SD ratio, signed air-gap clearance, and positive element edge thickness.
- FIG. 1 is faint in the local PDF, but the diameter hierarchy is visible: a large G1A/G1B front converter group, then smaller floating G2A/G2B subgroups around the stop. Stored SDs follow that shape, starting at 33.0/32.0 mm, narrowing through the central 20-23 mm group, using a 14.64 mm stop, and keeping the rear subgroups around 16.6-18.0 mm.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
