# Audit Log - Olympus M.Zuiko Digital 17mm f/2.8

Patent: US 8,755,132 B2, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US8755132.pdf`. Example 1 maps to FIG. 1.
- The patent publishes prescription/asphere data and sensor-side cover-glass surfaces, but no full clear-aperture table. The data file omits the cover-glass stack from the rendered prescription.
- FIG. 1 shows a compact wide-angle section with front and rear groups of similar scale, a smaller stop, and the final L25 element slightly largest. Stored SDs follow that silhouette: 7.3-4.85 mm into the stop, a 3.22 mm stop, and 6.1-9.65 mm through the rear group.
- No SD values changed. Current values remain inferred from the patent figure and renderer-safe ray/sag constraints.

## 2026-09-23 — Cover glass modeled as `rearPlates`

- Read Example 1 surface data on PDF page 14 at 160 dpi: d11 = 17.229; surfaces 12–13 are one plane plate, 4.082 mm,
  nd 1.51633, νd 64.14 (no designation printed); 13 → image plane is 0.745 mm. Stored as `rearPlates` with glass
  S-BSL7 (exact 1.51633 / 64.14 catalog match).
- Surface 11A now stores the patent's 17.229 mm at infinity. The 0.2 m value was a derived unit-focus solve, so it keeps
  the earlier image plane: 22.6100389954 − 4.082/1.51633 − 0.745 = 19.1730128533 mm.
- Paraxial check against the previous data: EFL identical and defocus unchanged at both focus keyframes (worst
  difference 3e-11 mm). Physical track grows by 1.390 mm, i.e. t(1 − 1/n).
