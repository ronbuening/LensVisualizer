# Audit Log - CANON POWERSHOT G1 X MARK III 15-45mm f/2.8-5.6

Patent: JP 2018-106021 A, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2018106021A.pdf`. The patent publishes Numerical Data 1 and Fig. 1, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a negative-lead APS-C zoom with a moderate front LN group, a tight stop and compact LP group, a small negative focus lens, and the largest clear aperture on the rear resin GRP element near the image plane.
- Stored SDs follow that silhouette: the front group is 10.5-13.0 mm, the stop/LP region is about 5.25-6.7 mm, the focus lens is 9.6 mm, and the rear GRP surfaces expand to 14.2 mm.
- No SD values changed. Current values remain inferred from combined marginal/chief-ray clearance and constrained by edge thickness, sd/|R|, and cross-gap sag checks.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with Numerical Data 1's physical rear stack (local `patents/JP2018106021A.pdf`,
  ¶0174 surface table and ¶0176 variable gaps, native text layer): d19 = 7.93 / 6.39 / 3.33 mm, then surfaces 20–21 as
  one unlabeled plate (the patent prints no designation for it in the numerical example) 1.33 mm, nd 1.51633, νd 64.1,
  and 0.50 mm air to the image. Glass label S-BSL7 (OHARA, matching the file's OHARA-heavy palette; catalog-compatible).
- Paraxial check against the previous data: EFL identical and defocus unchanged at all three zoom stations (worst
  difference 2e-7 mm), since the old 9.307118 / 7.767118 / 4.707118 mm values were the exact fold d19 + 1.33/1.51633 +
  0.50. Physical track grows by 1.33 × (1 − 1/1.51633) = 0.453 mm; the patent's printed total length (69.61 / 66.93 /
  75.45) uses the air-equivalent BF.
