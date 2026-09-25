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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 1's Various Data (printed p. 6 / PDF p. 22) gives image heights 19.90 / 21.64 / 21.64 mm at 24.72 /
66.67 / 101.85 mm, with paraxial half angles 38.84° / 17.98° / 11.99° (atan Y/f). The wide Y is 92% of the 21.65 mm
corner, a design image circle, so the wide station is sized to pass Y only; the real chief ray (solved through the stop
centre) reaches Y at 41.90°. The rims, inferred for a 0.60 field, clipped that chief ray early: surface 23A from 29.6°
at wide (61% of the corner, 67% of Y) and at 66.67 mm (94%), and surface 24 from 9.1° at tele (76%). The chief ray to Y
at wide crosses surfaces 1–8 at 20.77 / 18.81 / 15.64 / 12.10 / 11.64 / 11.30 / 11.37 / 10.92 mm and 22A–25 at 10.76 /
12.28 / 14.58 / 15.04 mm; the tele corner chief ray needs 24 ≥ 15.60 and 25 ≥ 15.84 mm, and the 66.67 mm corner needs 1
≥ 18.13, 22A ≥ 7.95 and 23A ≥ 8.86 mm. Values are the largest floor + ~0.5 mm. L1 (2), L4 (8), L12 (22A) and L13 (25)
are scaled with their partners; L2's rear (4, R 15.99) takes its own floor: scaled with surface 3 it would be 15.5 mm, a
75.7° rim past the 64.2° limit; L3 stays equal front and rear. FIG. 1 (PDF p. 2), scaled on the 107.83 mm
first-vertex-to-image span, draws L1 ≈ 23.9, L2 ≈ 16.6, L3–L4 ≈ 12.3, L12 ≈ 13.1 and L13 ≈ 16.6 mm, so every new value
stays inside the drawn element; surface 1 stays well inside the 67 mm filter.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 17.5 | 21.3 | wide chief ray to Y 20.77 mm + clearance |
| 2 | 17.0 | 20.7 | L1 scaled with surface 1 (own floor 18.81 mm) |
| 3 | 11.5 | 16.2 | wide chief ray to Y 15.64 mm + clearance |
| 4 | 11.0 | 12.6 | wide chief ray to Y 12.10 mm + clearance |
| 5 | 9.5 | 12.2 | wide chief ray to Y 11.64 mm + clearance |
| 6 | 9.5 | 12.2 | L3 kept equal front and rear (own floor 11.30 mm) |
| 7 | 9.7 | 11.9 | wide chief ray to Y 11.37 mm + clearance |
| 8 | 9.5 | 11.7 | L4 scaled with surface 7 (own floor 10.92 mm) |
| 22A | 7.7 | 11.9 | L12 scaled with 23A (own floor 10.76 mm); slope still steepening at 11.9 mm, turnover only past 13.6 mm |
| 23A | 8.3 | 12.8 | wide chief ray to Y 12.28 mm + clearance; no turnover within 15.4 mm |
| 24 | 11.5 | 16.1 | tele corner chief ray 15.60 mm + clearance (wide to Y 14.58) |
| 25 | 11.8 | 16.5 | L13 scaled with surface 24 (own floor 15.84 mm) |

The validator accepts the new values and the image-circle floor reports nothing undersized. The 66.67 mm and tele
stations reach 100% of the corner with every rim clear. The wide edge reaches 42.6° → 20.36 mm (102% of Y, 94% of the
corner), stopped by the surface-1 rim; the wide corner (44.5°) would need surface 1 at 22.81 mm and nine further rims
raised beyond the patent's design circle. The analysis's asphere departures (now −1.773518 mm at 22A, h = 11.9 mm, and
−1.962182 mm at 23A, h = 12.8 mm) and its largest rim angle (now 51.979965° at surface 4) were updated.
