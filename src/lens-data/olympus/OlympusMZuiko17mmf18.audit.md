# Audit Log - Olympus M.Zuiko Digital 17mm f/1.8

Patent: JP 2013-186458 A, Numerical Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2013186458A.pdf`. Numerical Example 3 maps to FIG. 3; the figure sheet is near the end of the publication.
- The patent publishes the Numerical Example 3 prescription and focus data, but no full clear-aperture table.
- FIG. 3 shows a compact positive G1 before the fixed stop, then a G2/G3 rear section that rises again toward the image side. Stored SDs follow that figure: 10.4-7.8 mm through G1, a 6.4 mm stop, and 8.2-10.2 mm through the rear group.
- No SD values changed. Current values remain inferred from the patent figure, focus ray envelopes, and sag-clearance constraints.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 3 (【0080】, PDF page 21, printed page 21) at 160 dpi: surface 16 d = 10.832; surfaces 17–18
  are an unlabeled plate, 4.082 mm, nd 1.51633, νd 64.14; 18 → image is 0.745 mm. The surface-16 gap is fixed during
  focus. Glass S-BSL7 (OHARA, exact 1.51633 / 64.14; the lens's elements are mostly OHARA).
- Surface 16 now stores the patent's 10.832 mm in place of the folded 14.2690261421 mm, with the plate in `rearPlates`
  (gapAfter 0.745 mm). Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and
  close focus (the old fold was carried to 10 decimals). Physical track grows by 1.390 mm to 53.656 mm; the patent's
  TL(in air) 52.27 mm remains the air-equivalent value.
