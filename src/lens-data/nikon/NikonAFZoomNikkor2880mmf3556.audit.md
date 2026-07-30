# Audit Log - Nikon AF Zoom-Nikkor 28-80mm f/3.5-5.6

Patent: JP H11-030748 A, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPA 1999030748-000000.pdf`. Example 1 is illustrated by FIG. 1 on the publication cover page, with FIGS. 2-4 as its aberration sheets.
- The patent publishes the Example 1 prescription and zoom data, but no full per-surface clear-aperture table.
- FIG. 1 shows the front group as the largest section, with a compact G2 and rear G3/G4 region. Stored SDs follow that silhouette: 28.5-14.6 mm through G1, about 7.0-10.8 mm around the stop and middle group, and 8.6-10.5 mm at the final group.
- No SD values changed. Current values remain inferred from the patent drawing and ray-clearance constraints.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-07-29 - Glass coverage follow-up

- Relabeled L4 from a code-only `861230` dense-flint description to coefficient-backed Hikari J-SFH2.
- Current J-SFH2 retains the patent row's `nd=1.86074`; its `861231` code and `vd=23.08` differ from the patent's
  `861230` / `vd=23.01` only in the final rounded digit.
- Synchronized the analysis. No prescription or SD values changed.

## 2026-07-30 - `797454` catalog-equivalent review

- Rechecked both patent rows at `nd = 1.79668`, `vd = 45.37`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.06`).
- Relabeled both elements as J-LASF017 catalog equivalents while leaving the production supplier unidentified.
  Synchronized the analysis; no prescription, zoom, focus, aperture, or semi-diameter values changed.
