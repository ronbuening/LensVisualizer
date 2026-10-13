# Patent and glass audit

## 2026-09-22

Source: local `patents/US20150131163A1.pdf`, p. 2, Fig. 1 / Example 1, wide panel; 600 dpi. Axial scale approximately 48.71 µm/pixel. Leader ink over G4 is excluded.

| Surfaces | Before SD (mm) | After SD (mm) | Evidence |
| --- | --- | --- | --- |
| 1 / 2 | 16.5 / 12.9 | 20.5 / 13.7 | Front optical rim; rear capped below drawn blank for S2–S3A clearance |
| 3A / 4A | 12 / 10.1 | 13.7 / 11.2 | Figure proportions bounded by both adjacent air gaps |
| 5 / 6 | 9.1 / 8.8 | 12.8 / 12.8 | Common optical rim in Fig. 1 |
| 7 / 8 | 8.8 / 8.3 | 12.8 / 12.8 | Common optical rim in Fig. 1 |

Other rims retained: differences are small or automated measurements include leader ink. Full drawn S2/S3A=15.1 and S4A=12.8 mm would exceed shared-gap intrusion limits. Aspheric departures in the analysis were recomputed at the revised apertures.

Glass: 12/14 elements resolve to qualified catalog curves. L12 (1.740250/49.12) and L21 (1.581029/59.23) remain unresolved: nearby catalog families are not established exact material matches. Current HOYA including-obsolete and OHARA source searches did not establish a new exact curve. The existing glass tolerances and spectral evidence were retained.

## Local viewer follow-up

Live localhost review confirms the Fig. 1 wide/middle/long order: G1 first moves imageward and then reverses; G2–G4 move objectward; G5 is fixed. Existing rim limits are retained. The G4 cemented triplet is now T1 in both diagram and inspector, and gap labels use D8/D14/D17/D23. A changing inferred iris follows Table 2 maximum apertures. L13/L32/L41/L43 receive inferred APD colors from qualified catalog curves.

The 101-position zoom sweep at three focus settings reports zero hidden surface trimming (303 states). Focus remains disabled because numerical finite-focus prescriptions are absent. The assignee uses the existing Fujifilm Corporation identity; historical Fuji entities are kept separate.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1-continued on PDF page 19 at 200 dpi: surface 25 d = 5.0000; surfaces 26–27 are PP, 2.8500 mm,
  nd 1.516798, νd 64.20; 27 → image is 7.6391 mm. Surface 25 is not a zoom-variable gap, and Table 2 prints Bf' (in
  air) = 14.52 mm at all three states, matching 5 + 2.85/1.516798 + 7.6391 = 14.5180581737 mm.
- Surface 25A now stores the patent's 5.0000 mm, with `rearPlates` PP labeled N-BK7 (1.51680 / 64.17; OHARA S-BSL7
  is the 1.51633 class) and gapAfter 7.6391 mm. Paraxial check against the previous data: EFL identical and
  defocus unchanged (|Δ| 3e-11 mm) at all three zoom states. Physical track grows by 0.971 mm (103.459 / 97.829 /
  100.659 mm wide / intermediate / tele).
