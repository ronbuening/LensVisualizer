# Audit Log - FUJIFILM FUJINON XF33mmF1.4 R LM WR

Patent: US 2022/0276464 A1, Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20220276464A1.pdf`. The patent publishes Example 3 prescription, focus data, asphere data, and Fig. 6 section, but no clear-aperture or semi-diameter table.
- Fig. 6 shows a broad G1 in front of the stop, a substantial but narrower moving G2, and a smaller rear G3 with the cover plate excluded from the data file.
- Stored SDs follow that taper: G1 is 17.0-18.8 mm, G2 contracts from about 13.4 mm near the stop to roughly 8.94-11.6 mm through the moving group, and G3 remains about 10.7-11.6 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/1.4 stop geometry, moving-group ray envelope, edge thickness, and cross-gap sag clearance.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-08-18 — L26 L-LAH85V coefficient assignment

- Visually rechecked `patents/US20220276464A1.pdf`, PDF page 38, Example 3. L26 remains `nd = 1.85343`, `νd = 40.55`.
- HOYA L-LAH85V is within the runtime catalog-equivalent window (`Δnd = +0.000570`, `Δνd = -0.172`).
- Relabeled L26 as an L-LAH85V optical equivalent while leaving the production supplier unspecified. No prescription geometry changed.
