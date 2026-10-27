# Audit Log — Nikon NIKKOR Z 20mm f/1.8 S

Patent: WO 2021/117429 A1, Example 1 / Figure 1.

## 2026-08-08 — Patent-figure SD, diagram-label, count, and glass audit

- Compared the infinity section with the rotated Figure 1 on patent page 37. The large L11 front meniscus, hybrid L12,
  L13–L14 cemented pair, isolated L21 focus element, seven-element G3, and two rear focus/field groups agree with the
  patent silhouette within measurement tolerance. No SD change was supported.
- Added the patent's L11–L51 element identifiers to the cross-section. The hybrid L12 is now shown as `L12g` and
  `L12r`, making clear that the two modeled optical media form one physical element instead of displaying a misleading
  fifteenth sequential element number.
- Verified the five aspherical-surface markers correspond to three physical aspherical elements and that the three
  `νd = 82.57` positions correspond to the production three-ED-element count.
- Fourteen of fifteen modeled media resolve to coefficient-backed catalog curves. The only non-Sellmeier position is
  the explicitly identified L12 bonded resin layer; it is not an opportunity for a glass-catalog assignment.

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 37, native 2478 × 3507 1-bit page raster, axis vertical) was read element by element on both halves
for flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 2 (L11 rear, R 22.7534) | 0.762 | 8.21 mm | 17.50 mm | 22 (was 17.5) | 5.28 mm |
| 15 (L33 front, R −21.9847) | 0.923 | 2.89 mm | 10.90 mm | 11.5 (was 10.9) | 10.65 mm |
| 26A (L51 front, R −41.2363) | 0.898 | 2.71 mm | 13.40 mm | 14.5 (was 13.4) | 4.00 mm |

- All three faces stored an sd below their partner face's (1: 22; 16: 11.5; 27A: 14.5), while the figure draws a
  square edge at the partner's height and a land down to the cap. Each sd now equals the partner's and the cut sits at the old sd, so
  the traced clear aperture is unchanged. The figure's ratios run slightly below the old sd ratios (0.795, 0.948, 0.924);
  the rims were not refitted to them.
- L12 (5A) also shows a land (0.912), but at the hybrid's glass rim: in the model that rim is the cemented
  glass→resin junction 4 (sd 14.5), not an air face. Raising only 5A to 15.5 would draw a notch, so no cut.
- Surface 15's cut sits 0.25 mm above the stated axial ray (10.65 mm). It is the old clear radius, so the margin
  is unchanged from before the cut.
- The step at L35–L36 is the larger L36 front beyond a cemented junction (20), not an air-side land. Surface 8 (L14
  rear) straightens by ≤ 2 px at its corner (about 0.98), below what the figure resolves; 13, 16 and 24A run to their
  element edges; 6 (R −2091) is nearly plane.
- No cap reaches the stop plane (surface 13 clears it by 6.84 mm, surface 15 by 1.63 mm; G3 does not move in focus).
- The aperture audit is unchanged (f/1.85 within 3 %, no rim, trace, iris or failed rows) and the surface audit
  reports no validation errors. At Y 21.6 mm (ω 48.4°) the full-field rim rays fail before the stop, so no side
  vignetting share exists before or after; the chief ray stays inside the cut radii of 2 and 26A (16.48 and 12.47 mm). At
  Y 18 mm surface 26A clips 5 % of the bundle's side, before and after.
