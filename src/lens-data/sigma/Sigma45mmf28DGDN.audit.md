# Audit Log - SIGMA 45mm f/2.8 DG DN | Contemporary

Patent: JP 2019-211703 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2019211703A.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 39.
- The patent publishes effective diameters. The data file stores those values as renderer semi-diameters by using effective diameter / 2.
- FIG. 1 shows a compact G1 and stop, a moderate moving G2, and a taller rear G3 near the image side. Stored SDs match that table-backed silhouette, from 10.005 mm at the front, through a 6.45 mm stop, to the 14.1-14.36 mm rear surfaces.
- No SD values changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 1 surfaces 16–18 on printed page (21) of local `patents/JP2019211703A.pdf` (rendered and confirmed against the text layer): d16 = 16.3216, filter F t = 2.5000, nd 1.51633, νd 64.14, PgF 0.5353, BF = 2.0000 at both infinity and 240 mm. Surface 16 now stores the physical 16.3216 mm (was the folded 19.9703 mm); the plate is a camera-fixed `rearPlates` entry labeled F with gapAfterMm 2.0.
- Glass S-BSL7 (OHARA), an exact nd/νd match accepted by `resolveCompatibleGlass`; dPgF = 0.5353 − normalLinePgF(64.14) = −0.00062.
- Plate check against the previous data: EFL identical; paraxial defocus changes by 1.7e-5 mm at infinity and close focus (rounding of the old fold). Physical track grows by 0.8513 mm = t(1 − 1/n). `closeFocusM` 0.24 is the patent's quoted 240 mm state and is unchanged.
