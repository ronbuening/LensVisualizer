# Canon RF 24-105mm f/4-7.1 IS STM — audit log

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with Numerical Example 1's physical rear stack (US 2021/0003831 A1, printed p. 6 /
  PDF p. 22, ¶0084 surface table and Various Data): d25 = 11.12 / 34.65 / 35.56 mm, then `rearPlates` GB 1.50 mm,
  nd 1.51633, νd 64.1, and d27 = 1.12 mm at all three zoom states. The printed values reproduce the legacy
  13.229231 / 36.759231 / 37.669231 mm exactly (d25 + 1.50/1.51633 + 1.12).
- Glass label S-BSL7 (OHARA 1.51633 / 64.14), which resolves as compatible with the stored nd/νd; the element glasses
  carry no vendor, so the OHARA match for 1.51633 / 64.1 is used.
- Paraxial check against the previous data: EFL and defocus identical at every zoom station (the old fold had no
  rounding). Physical track grows by 1.50 × (1 − 1/1.51633) = 0.511 mm.
