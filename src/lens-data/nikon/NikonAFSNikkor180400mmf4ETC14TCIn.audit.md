# Audit Log — Nikon AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR, TC Engaged

Patent: WO 2019/131993 A1, Example 1, Table 10

## 2026-08-07 — Remaining six-digit-code disposition audit

Visually rechecked Table 10 in local `patents/WO2019131993A1.pdf`, then cross-matched the patent coordinates against the official OHARA 2026-07-01, HOYA 2026-07-07, and HIKARI catalog files. No row below has a candidate inside both runtime tolerances (`Δnd ≤ 0.0001`, `Δνd ≤ 0.15`), so the code-based fallbacks remain intentional rather than unreviewed opportunities.

| Code | Patent coordinate | Disposition |
|---|---:|---|
| 804238 | 1.80379 / 23.82 | No tolerance-safe official catalog row |
| 815233 | 1.81511 / 23.33 | No tolerance-safe official catalog row |
| 633315 | 1.63288 / 31.50 | No tolerance-safe official catalog row |
| 726548 | 1.72567 / 54.80 | No tolerance-safe official catalog row |
| 690570 | 1.68991 / 56.97 | No tolerance-safe official catalog row |
| 819287 | 1.81945 / 28.67 | No tolerance-safe official catalog row |
| 806418 | 1.80592 / 41.79 | No tolerance-safe official catalog row |
| 627376 | 1.62730 / 37.62 | No tolerance-safe official catalog row |
| 786406 | 1.78605 / 40.63 | No tolerance-safe official catalog row; TC-engaged variant only |

The TC-engaged prescription retains its authored labels and patent coordinates. No geometry or optical constants changed. The shared base-design audit records the same review for the native optical path.

## 2026-08-21 — Hikari catalog follow-up

- Added Hikari's first-party J-LASFH6 curve, allowing the existing explicit J-LASFH6 element to resolve by name.
- Code-only `806333` resolution continues to prefer the established NBFD15 row; no prescription coordinate changed.

## 2026-09-24 — Optical filters FL1 and FL2 at their printed positions

- Table 10 (PDF pp. 63–64) prints FL1 at surfaces 62–63 (1.500 mm, 1.51680 / 63.88, 6.500 mm of air either side) and FL2
  at surfaces 69–70 (2.000 mm) after 10.827 mm + a same-index dummy plane + 40.582 mm, then 0.100 mm to the image.
- FL1 is now drawn as a `Plane-Parallel Plate` (sd 15.5 mm, not counted in elementCount; L411/L412 ids move to 35/36) and
  FL2 is `rearPlates` with surface 67 storing 51.409 mm to it, matching the converter-out file and Nikon's
  filter-must-be-inserted slip-in holder instruction.
- EFL and paraxial defocus are identical at every zoom station and focus keyframe. Physical track grows by 1.192511 mm to
  392.272 / 392.272 / 392.271 mm; the close keyframes image at 2.001193 m physical with unchanged magnifications.
