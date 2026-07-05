# Audit Log - SONY FE 12-24mm f/2.8 GM

Patent: WO 2021/200206 A1, Example 2 / FIG. 6

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/WO2021200206A1.pdf`. The source is image-only in this workspace; Example 2's lens section is FIG. 6 on PDF page 77.
- The data file stores patent effective diameters as semi-diameters, except S7 is reduced by 0.055 mm to preserve rendered clearance in the tight S6-S7 air gap. The stop stores the largest tabulated stop semi-diameter because the schema does not carry a zoom-varying physical stop diameter.
- FIG. 6 shows a very large GP1 front group, a much smaller GP2/stop region, and rear groups that grow only modestly toward the image side. Current SDs match that silhouette: 38.98 mm at the first surface, mid-lens values around 11-17 mm, an 11.815 mm stop, and rear surfaces ending around 13.965 mm.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
