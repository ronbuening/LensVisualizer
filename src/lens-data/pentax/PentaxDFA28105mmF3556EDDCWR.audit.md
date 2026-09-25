# Audit Log — PENTAX HD D FA 28-105mm f/3.5-5.6 ED DC WR

Patent: US 2017/0068075 A1, Numerical Embodiment 2

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 6 (PDF p. 37) prints Y = 21.64 mm at every zoom state (half-angles W = 38.1° / 21.1° / 11.7°), the full-frame
corner (21.65 mm). The inferred front rim (surface 1, 19.6 mm) clipped the real chief ray (solved through the stop
centre) from 35.5° at wide (19.64 mm, 91% of the corner), 19.2° at middle (19.45 mm, 90%) and 11.4° at tele (21.15 mm,
98%). As the maximum over stations, the chief ray needs surface 1 ≥ 21.94, 2 ≥ 21.15 and 3 ≥ 20.61 mm (middle station,
at the patent's 21.1°) and 6A ≥ 10.85 and 7 ≥ 10.75 mm (wide). Values are floor + ~0.5 mm, with surface 7 kept equal
to the resin layer 6A that it carries. L13 (surfaces 4/5, 19.0/18.0 mm) passes the middle chief ray at 18.72/17.76 mm
and the L21G rear (surface 8, R 14.655) passes the wide one at 8.86 mm, so both are unchanged. No figure measurement was
used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 19.6 | 22.5 | middle chief ray at the patent's 21.1° 21.94 mm + clearance |
| 2 | 19.5 | 21.7 | middle chief ray 21.15 mm + clearance (L11/L12 cemented junction) |
| 3 | 19.2 | 21.2 | middle chief ray 20.61 mm + clearance |
| 6A | 10.2 | 11.4 | wide corner chief ray 10.85 mm + clearance; scan to 13.68 mm shows no turnover |
| 7 | 10.2 | 11.4 | wide corner chief ray 10.75 mm; kept equal to the resin layer it carries |

The validator accepts the values, the image-circle floor still reports nothing undersized, and all three stations now
reach the corner (38.2° / 21.1° / 11.7°, 100%) with every rim clear. At the new 6A rim the departure is +0.233519 mm
and the rim angle 12.852° (were +0.146711 mm and 10.474° at 10.2 mm), and the resin layer's rim thickness falls from
0.179230 to 0.137103 mm; the maximum rim angle (44.108°, surface 8) and the largest gap intrusion (81.405%) are
unchanged. `PentaxDFA28105mmF3556EDDCWR.analysis.md` quotes those values and the 10.2 mm hybrid rim, and was updated.
