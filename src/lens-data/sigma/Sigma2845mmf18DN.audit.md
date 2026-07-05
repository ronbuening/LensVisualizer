# Audit Log - SIGMA 28-45mm f/1.8 DG DN | Art

Patent: CN 120386081 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/CN_120386081_A.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 44.
- The patent does not publish clear apertures. Current SDs are inferred from marginal/chief-ray envelopes and checked against edge thickness, cross-gap sag intrusion, sd/|R|, and element-ratio limits.
- FIG. 1 shows the large G1 retrofocus front group, a tall central GM/G4 section, the stop at the transition to GR, and smaller rear G5-G7/GN groups. Stored SDs follow that progression: a 36.5 mm leading surface, 21-26 mm mid-groups, a 15.75 mm stop, and rear-group values mostly in the 16-23.5 mm range.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
