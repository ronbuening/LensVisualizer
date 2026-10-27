# Audit Log — NIKON NIKKOR Z 800mm f/6.3 VR S

Patent: JP 2023-23323 A, Example 6 (OL6), Table 16 and Figure 11.

## 2026-10-27 — Rim-cut figure review

Figure 11 (PDF p. 40, third of four native 606 ppi rasters on the page, turned so the axis runs left to right) was read
element by element on both halves for flat lands square to the axis at the rims of concave faces, the shape
`rimCutDepthMm` draws.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 11 (L15 rear, R 65.716) | 0.92 (182 of 197 px) | 8.37 mm | 32.09 mm | 34.8 | 29.31 mm |
| 37 (L311 rear, R 33.3333) | 0.91 (85.5 of 94 px) | 3.53 mm | 14.93 mm | 16.4 | 6.58 mm |

- Surface 8 (Epf-B rear to air, R 154.1141) also has a figure land: the PF layers end at 0.966 of L13's edge radius
  (214 of 221.5 px on both halves) and a short square stroke on the substrate runs out to the edge. A cut there
  (4.51 mm, cut radius 37.01 mm) is refused by the validator: Epf-B is 0.25 mm thick, so its cemented junction 7 passes
  0.075 mm beyond the land at sd 38.3 (negative edge thickness). Not cut; the model keeps both PF layers out to the
  substrate's 38.3 mm. The cemented junctions 6 and 7 (7 carries the diffractive phase) are not air faces.
- Every other concave face (4, 13, 15, 19, 21, 24, 25, 26, 28, 31, 32, 40) runs to its element edge in the figure;
  13 and 31 are near-plane, so their straight strokes are the faces themselves. No cut.
- No cap reaches the stop plane at either focus state (surface 19 clears it by 36.01 mm, surface 21 by 6.54 mm).
- The stated f/6.42 still traces with no rim, trace or rim-cut limiter, and the engine half-field stays 2.38°. With the
  PF phase included, the full-field (21.6 mm image height) meridional bundle passes 67.6 % at infinity and 62.8 % at
  5 m before and after the cuts; its passing rays reach 27.37 / 28.25 mm at surface 11 and 14.02 / 8.90 mm at
  surface 37, inside both cut radii, so side vignetting there is unchanged. The scratch clear-aperture probe omits the
  PF phase (EFL 859 mm instead of 780 mm) and overstates the G1 beam, so it was not used for this lens.
- The largest rim angle moves from 31.98° (surface 11 at sd) to 30.72° (surface 12), as the rim slope on 11 is now
  taken at its cut radius; minimum edge thickness (L16, 0.566 mm) and the largest gap intrusion (0.621, 25→26) are
  unchanged. `NikonNIKKORZ800mmf63VRS.analysis.md` was updated to match.
