# Audit Log - Canon FD 300mm f/4 S.S.C.

Patent: US 4,251,133, Numerical Example 3

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US4251133.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The current labels match the patent nd/vd pairs to the expected vintage-table precision.
- No element requires high-index status; all stored nd values are below 1.8.

### Phase 2 - Retained-information audit

- The patent does not publish clear apertures. Existing SDs remain inferred from f/4 entrance-pupil geometry, chief-ray behavior, barrel constraints, and renderer checks after scaling to 300 mm.
- Retained the computed BFD replacement for the rounded patent b.f. row and the paraxially solved 3.0 m close-focus state.
