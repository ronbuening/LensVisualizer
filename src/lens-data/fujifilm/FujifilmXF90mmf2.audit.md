# Audit Log - Fujifilm XF 90mm f/2 R LM WR

Patent: US 2016/0274335 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20160274335A1.pdf`; local OCR confirms at least the 1.63854 / 55.38 row and the table context for the queued rows.
- Updated L6 to `S-BSM18 (OHARA)`, L9 to `S-TIM25 (OHARA)`, and L10 to `S-LAL8 (OHARA)`.
- One unrelated no-catalog row remains, so the lens is improved but not yet fully covered.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 2016/0274335 A1 Example 1 surface 19; stored `R`, `d`, `nd=1.51742`, and `νd=52.43` agree with the patent.
- Relabeled L35 from `S-NSL3` to exact-coordinate OHARA `S-NSL36`.
- Synchronized the analysis glass table. No prescription geometry changed.

## 2026-07-29 - Incompatible named-label audit

- Rechecked US 2016/0274335 A1 Example 1, Table 1, surface 6: `R=-138.92000`, `d=3.000`,
  `nd=1.74950`, `νd=35.33`, and `θgF=0.58189` match the stored L14 prescription.
- Relabeled L14 from incompatible OHARA S-NBH53 (1.73800 / 32.26) to exact-coordinate OHARA
  S-NBH51 (1.749504 / 35.33, code 750353).
- Synchronized the analysis glass table. No prescription geometry changed.
