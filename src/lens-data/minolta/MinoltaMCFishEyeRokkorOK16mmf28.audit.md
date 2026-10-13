# Audit Log - MINOLTA MC FISH-EYE ROKKOR-OK 16mm f/2.8

Patent: US 3,589,798, Embodiment II

## 2026-08-11 - Glass opportunity audit

- Visually rechecked Embodiment II in local `patents/US3589798.pdf`; G2 is `1.6176 / 52.7`, G5/G8 are
  `1.7330 / 28.2`, G7 is `1.6214 / 61.2`, and G9 is `1.7400 / 37.5`. The patent names no supplier and publishes no
  secondary line indices or partial dispersion.
- Relabeled G2 to coefficient-backed SUMITA K-SSK1 (`Δnd ≈ -0.000397`, `Δνd = +1.30`) as the only reviewed
  catalog curve inside the project compatibility guard.
- Relabeled G7 to the coefficient-backed N-SK16 / S-BSM16 / J-SK16 shared catalog class
  (`Δnd ≈ -0.00099`, `Δνd = -0.88` to `-0.95`). The annotation leaves the production supplier unspecified.
- G5/G8 remain unmatched because the nearest reviewed `728283` family misses the d-line guard by about `0.00475`.
  G9 remains unmatched because the nearest index match misses the Abbe guard by about `5.79`.
- No geometry or authored patent constants changed.

## 2026-10-04 — Patent filter left out as optional

- Patent check (US 3,589,798, Embodiment II): r11 and r12 are both flat (element G6), d11 = 0.0933, N6 = 1.5994,
  V6 = 40.8, with 0.1 before and 0.2981 after at f = 1. Fig. 2 draws it.
- The patent calls G6 "an interchangeable filter which can be removed from the system when unnecessary, or positioned
  behind the last lens element". Filters the source calls optional are not modeled, so the file is unchanged: no
  plate, and the G5-to-G7 gap keeps the plate's air-equivalent thickness (t/n), which preserves the published
  first-order values. A literally empty slot would be 0.56 mm longer at ×16.
- Minolta counts the built-in filter in its 11 elements / 8 groups; the header keeps that note and now states why the
  plate is left out.
