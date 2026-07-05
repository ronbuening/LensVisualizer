# Audit Log - SIGMA 45mm f/2.8 DG DN | Contemporary

Patent: JP 2019-211703 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2019211703A.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 39.
- The patent publishes effective diameters. The data file stores those values as renderer semi-diameters by using effective diameter / 2.
- FIG. 1 shows a compact G1 and stop, a moderate moving G2, and a taller rear G3 near the image side. Stored SDs match that table-backed silhouette, from 10.005 mm at the front, through a 6.45 mm stop, to the 14.1-14.36 mm rear surfaces.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`
