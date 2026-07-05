# Audit Log - Nikon 1 NIKKOR VR 11-27.5mm f/3.5-5.6

Patent: US 2015/0153549 A1, Example 4 / Table 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20150153549A1.pdf`. The patent maps Example 4 to FIGS. 7A-7C for the wide, middle, and telephoto lens sections.
- The patent publishes Table 4 prescription and variable-spacing data, but no full per-surface clear-aperture table.
- FIGS. 7A-7C show the front protection plate, a broad three-element G1, and a smaller G2 behind the stop. Stored SDs match that hierarchy: 9.0 mm for the protection plate, about 6.7-8.35 mm through G1, and about 4.55-4.95 mm through G2.
- No SD values changed. Current values remain inferred from the patent section drawings and ray-clearance constraints.

### Verification

- `npm test -- elementRenderDiagnostics`
