# Audit Log — Panasonic Lumix G Vario 7-14mm f/4 ASPH.

Patent: US 2010/0194930 A1, Numerical Example 1

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 3 (PDF p. 29) prints image height 10.8150 mm at wide, middle and telephoto (half view angles 59.0156° /
48.7020° / 38.1410°), so the design reaches the Four Thirds corner (10.82 mm) at every station. The stored rims clipped
the real chief ray (solved through the stop centre) far short of it: surface 8 stopped the wide field at 20.7° (2.70
mm, 25% of the corner) and the middle field at 27.0° (4.98 mm, 46%). The main cause was an authoring error in L4:
surfaces 7/8 were stored at 3.5/2.85 mm, while Fig. 1(a) (PDF p. 2, rendered at 600 dpi; 0.0504 mm/px from the 95.5429
mm wide overall length = 1895 px, cross-checked by L1's 2.0 mm centre thickness = 40 px) draws L4 as tall as L5, about
10.9 mm on both faces. The traced corner chief ray (58.98° wide, 48.72° middle, 38.15° tele) is governed by the wide
station, where it needs surfaces 1–8 ≥ 22.37 / 17.66 / 16.66 / 13.63 / 13.39 / 11.53 / 10.97 / 9.98 mm and surfaces
22–26 ≥ 4.50 / 4.86 / 5.31 / 5.94 / 5.97 mm; the middle station's needs (3 ≥ 11.43, 4 ≥ 9.82, 7 ≥ 6.11, 8 ≥ 5.67, 23 ≥
4.31 mm) are covered by the wide values. Values are floor + ~0.5 mm. The figure's front-group rims (L1 22.4 / 17.8, L2
16.8 / 13.6, L3 13.6 / 11.4, L4 10.9 / 10.9, L5 about 10.1 mm) sit on those floors, so the drawing corroborates the
trace.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 17.3 | 22.9 | wide corner chief ray 22.37 mm + clearance (Fig. 1(a) ≈ 22.4) |
| 2 | 13.9 | 18.0 | wide corner chief ray 17.66 mm; the 64.2° rim-slope limit (R 20.03) rejects anything above ≈ 18.03 mm, so the clearance is 0.34 mm |
| 3 | 10.6 | 17.2 | wide corner chief ray 16.66 mm + clearance (Fig. 1(a) ≈ 16.8) |
| 4 | 8.5 | 14.2 | wide corner chief ray 13.63 mm + clearance (Fig. 1(a) ≈ 13.6) |
| 5 | 12.7 | 13.9 | wide corner chief ray 13.39 mm + clearance (Fig. 1(a) ≈ 13.6) |
| 6A | 10.2 | 12.1 | wide corner chief ray 11.53 mm + clearance; scan to 14.52 mm shows no turnover (conic domain ends at 14.83 mm) |
| 7 | 3.5 | 11.5 | authoring error; wide corner chief ray 10.97 mm + clearance (Fig. 1(a) ≈ 10.9) |
| 8 | 2.85 | 10.5 | authoring error; wide corner chief ray 9.98 mm + clearance; the near-concentric 0.26 mm gap to surface 9 still leaves 0.22 mm at L5's 10.2 mm rim |
| 21 | 4.5 | 5.4 | L12 scaled with surface 22 (own corner chief ray 3.98 mm) |
| 22 | 4.2 | 5.0 | wide corner chief ray 4.50 mm + clearance |
| 23 | 4.2 | 5.4 | wide corner chief ray 4.86 mm + clearance |
| 24 | 4.8 | 5.9 | wide corner chief ray 5.31 mm + clearance |
| 25 | 5.4 | 6.5 | wide corner chief ray 5.94 mm + clearance |
| 26 | 5.4 | 6.5 | wide corner chief ray 5.97 mm + clearance |

The validator accepts the new values, the image-circle floor reports nothing undersized, and the traced edge now
reaches the 10.82 mm corner at all three stations (59.0° / 48.7° / 38.2°) with every rim clear. Surface 9 (L5 front,
10.2 mm) passes the wide corner chief ray at 9.97 mm and is unchanged, as are surfaces 9–20 and 27–29A. The analysis
file quotes no departure for 6A, the only changed asphere; its semi-diameter paragraph now names the raised surfaces.
