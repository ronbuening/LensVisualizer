# Nikon NIKKOR Z 180-600mm f/5.6-6.3 VR Audit

Patent: WO 2024/062958 A1, Example 2 / Figure 5 / Tables 5–8

## 2026-08-03 - Integration, Figure, and Glass Audit

### Prescription and Display Name

- Checked the new prescription and analysis against the retained local patent, including Example 2, Figure 5, and
  Tables 5–8.
- Confirmed the display name against Nikon's product page. `NIKON` remains the repository's maker prefix and
  `NIKKOR Z 180-600mm f/5.6-6.3 VR` is Nikon's product spelling, so no display-name correction was needed.

### Semi-Diameters

- Isolated PDF page 90, rendered it at 300 dpi, rotated it to the optical-axis orientation, and audited the Figure 5
  optical section. The active figure and modeled prescription have a median figure/data scale ratio of 1.022.
- Refined the front collector and G2/G3/G4/G6 optical rims:

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 1–2 | 46.8 | 47.0 |
| 3–5 | 40.5 | 40.7 |
| 6–7 | 38.7 | 38.9 |
| 8–9 | 25.0 | 25.3 |
| 13–14 | 21.75 | 22.0 |
| 15–16 | 21.25 | 21.6 |
| 17–18 | 21.0 | 21.2 |
| 19–20 | 19.75 | 20.1 |
| 36–38 | 13.5 | 13.7 |
| 39–41 | 14.5 | 14.8 |

- Rejected a 25.3 mm L7 trial based on the drawing's outer box because it crossed both adjacent air gaps; the retained
  20.5 mm value follows the optical rim rather than the drawn flange.
- The accepted values retain the same sampled on-axis ray-fan pass pattern across all three zoom positions at infinity
  and 2.4 m focus.
- `audit:image-circle` reports no undersized surfaces, and `audit:surface` passes the asphere-domain, edge,
  slope, and cross-gap checks. A 13.8 mm surfaces 36–38 trial was also rejected after the edge validator found a
  0.009 mm overrun.

### Glass Classification and Dispersion

- Relabeled L7 from a generic TAF3 class to exact HOYA `TAF3D`, matching the patent's 1.80420/46.50 coordinate and an
  existing coefficient-backed catalog row.
- Strict and trusted chromatic coverage rise from 24/26 to 25/26 elements. The only remaining fallback is the explicitly
  identified optical-resin layer, which is not a missing optical-glass catalog type.
- The analysis glass table and L7 narrative were synchronized with the data file.

## 2026-10-27 — Rim-cut figure review

Figure 5 (PDF p. 90, native 300 ppi raster, wide end at infinity) was rotated so the axis runs horizontally and read
element by element on both halves for flat lands square to the axis at the rims of concave faces, the shape
`rimCutDepthMm` draws. Vertex spacings give 0.1387 mm per native pixel.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 5 (L3 rear, R 246.002) | 0.92 | 2.87 mm | 37.47 mm | 40.7 | 37.05 mm |
| 10 (L6 rear, R 63.527) | 0.83 | 4.02 mm | 22.24 mm | 25.3 (was 22.25) | 20.54 mm |
| 21 (L12 rear, R 63.609) | 0.84 | 2.67 mm | 18.24 mm | 20.1 (was 18.25) | 16.32 mm |
| 35 (L20 rear, R 34.189) | 0.88 | 1.61 mm | 10.37 mm | 11.8 | 9.63 mm |

- Faces 10 and 21 had stopped short of their cemented partners (25.3 and 20.1 mm), so the section drew a slanted
  edge. Figure 5 draws both cemented pairs with one square edge at the partner's height and the land on the rear
  face, so each face's `sd` now equals its partner's and the cut sits at the former rim, leaving the traced clear
  aperture as it was. The figure's own ratio would put these two cuts lower (21.0 and 16.9 mm); they were not moved.
- Lands seen but not cut: 12 (L7 rear, ratio 0.92, cut radius 18.82 mm) lies inside the 19.66 mm on-axis beam;
  36 (L21 front, 0.785, 10.75 mm) would raise full-field side vignetting there from 3 % to 62 %, and 42A (L25 resin
  front, 0.90, 13.05 mm) from 39 % to 76 %.
- No resolvable land on the other concave faces (11, 13, 14, 18, 28, 29, 31, 41): each curve runs to its element edge,
  or the sag left past any land would be under about two native pixels.
- Only surface 21 faces the stop, across a fixed 6.7379 mm gap; its land stands 4.07 mm ahead of the stop plane. No
  cap reaches the stop plane at any zoom or focus state.
- The aperture audit is unchanged: all three stations remain stop-limited at f/5.80, f/6.16 and f/6.53, with no rim,
  trace or rim-cut limiter. The surface validator and the image-circle audit stay clean.
- At the 21.6 mm full field the cuts on 5 and 35 widen the side vignetting at those surfaces (24 % → 36 % and
  10 % → 26 %); 10 and 21 are unchanged. A meridional fan traced through every rim passes 71.1, 77.1 and 72.6 % of the
  full-field pupil at wide, middle and tele before the cuts and 71.1, 77.1 and 71.3 % after, because L1 and the G5/G6
  rims already clip those rays first.
