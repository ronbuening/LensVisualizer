# Audit Log - CANON POWERSHOT G1 X 15.1-60.4mm f/2.8-5.8

Patent: US 2013/0176385 A1, Numerical Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20130176385A1.pdf`. The patent publishes the Example 4 prescription and Fig. 7 cross-section, but no clear-aperture or semi-diameter table.
- Fig. 7 shows a large positive first unit, a smaller negative second unit, a compact third unit around the stop/flare stop, and a larger single rear-focus fourth unit.
- Stored SDs follow that silhouette: the first unit starts at 20.0 mm and settles around 16 mm, the variator/third-unit surfaces remain in the 4.3-12.9 mm range around the stop, and the rear-focus element re-expands to about 13 mm.
- No SD values changed. Current values remain inferred from zoom-state marginal/chief-ray envelopes and constrained by edge thickness, rim slope, element SD ratio, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`
