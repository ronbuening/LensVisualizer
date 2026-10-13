# Audit Log - Fujifilm XF 23mm F1.4 R

Patent: US 2014/0368926 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20140368926A1.pdf`; OCR is imperfect but the queued row values are present in the local table.
- Updated L112 to `S-TIM3 (OHARA)`, L124 to `S-LAL8 (OHARA)`, and L23 to `S-TIM28 (OHARA)`.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L123 and L25 from `S-TIH6` to OHARA `S-NPH1`, the exact 1.80809 / 22.76 row.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Table 7 (Example 4, PDF p. 18) and Table 11 (p. 19) from the rendered page: D20 = 10.00, PP surfaces 21–22 t = 2.80, Nd 1.51680, νd 64.2; D22 is not printed. S20 now stores the physical 10.00 mm and PP is a `rearPlates` entry (`N-BK7`, exact nd/νd match); the 0.754 mm gap to the image is derived, not printed, from Table 11 BF = 12.60 (air-equivalent) − 10.00 − 2.80/1.5168, preserving the previous image plane.
- Against the previous folded data, EFL is identical and paraxial defocus changes by at most 8.4e-6 mm (rounding of the derived 0.754 gap) at infinity and at the estimated 0.28 m keyframe; physical track grows by 0.954 mm = 2.80 × (1 − 1/1.5168), to 75.06 mm S1 → image.
