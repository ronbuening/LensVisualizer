# Audit Log - Nikon AF-S Nikkor 18-35mm f/3.5-4.5G ED

Patent: US 9,256,059 B2, Example 1

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent final gap (d27 + 1.90/1.51680 + 1.00) with Example 1's physical rear stack, read from the
  Google Patents text of US 9,256,059 B2 (no local PDF): d27 = 37.70 / 47.12 / 59.88 mm, then plate PT (surfaces 28–29)
  1.90 mm, nd 1.51680, νd 64.20, and BF 1.00 mm to the image. The variable-gap label for 27A is now `D27`, since the
  patent's BF is the 1.00 mm after the plate.
- Glass label N-BK7 (Schott 1.51680 / 64.17; the catalog resolves it as compatible with the printed values).
- Paraxial check against the previous data: EFL and defocus identical at all three zoom stations (the legacy fold was
  exact). Physical track grows by 1.90 × (1 − 1/1.51680) = 0.647 mm, to 139.78 / 134.74 / 136.84 mm; the patent prints
  TL 139.69 / 134.64 / 136.74 mm, an offset of about 0.1 mm at every station that predates this change.
