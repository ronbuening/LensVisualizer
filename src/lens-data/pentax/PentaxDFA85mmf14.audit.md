# Audit Log — Pentax D FA* 85mm f/1.4 ED SDM AW

Patent: US 2020/0301101 A1, Numerical Example 3

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US20200301101A1.pdf`.
- Reviewed the first drawing sheet; it confirms the large front group, separated G2 subgroups, stop location, rear asphere, and cover-glass treatment represented in the data file.

### Disposition

- Glass labels remain unchanged; the current high-index and fluorophosphate labels remain consistent with the patent nd/vd coordinates and the patent's anomalous-dispersion design discussion.
- APD markings remain unchanged: S-NBM51 keeps the negative APD note, and the three S-FPL53/FCD100-class positives keep inferred Super-ED positive APD notes.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged after drawing review.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Table 7 (continued) and Table 9 on PDF page 26 at 160 dpi: surface 23 d = 38.06; surfaces 24–25 are cover glass
  CG, 2.00 mm, nd 1.51633, νd 64.1; fB = 0.50 mm; L = 156.20 mm. Labeled S-BSL7 (OHARA, matching the element vendor).
- Surface 23A now stores the patent's 38.06 mm instead of the air-equivalent 39.879 mm, with `rearPlates` CG and
  gapAfter 0.50 mm. Paraxial check against the previous data: EFL identical; defocus unchanged (0.005051 mm at both
  keyframes). Physical track grows by 0.681 mm, so the modeled length to the image now equals the printed L = 156.20 mm.
