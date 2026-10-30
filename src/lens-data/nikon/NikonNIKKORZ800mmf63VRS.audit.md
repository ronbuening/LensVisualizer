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
- The stated f/6.42 still traces with no rim, trace or rim-cut limiter, and the engine half-field stays 2.38°. Both
  cuts, 37 at its moved radius, clear every traced ray of the wide-open beams by their margins (see the rule section
  below), so they clip none of those rays and change no vignetting. The scratch clear-aperture probe omits the PF phase
  (EFL 859 mm instead of 780 mm) and overstates the G1 beam, so it was not used for this lens.
- The largest rim angle moves from 31.98° (surface 11 at sd) to 30.72° (surface 12), as the rim slope on 11 is now
  taken at its cut radius; minimum edge thickness (L16, 0.566 mm) and the largest gap intrusion (0.621, 25→26) are
  unchanged. `NikonNIKKORZ800mmf63VRS.analysis.md` was updated to match.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced with the stop at its paraxial size from #933 (EPD = F/N) and with the
rule's current search, which follows each beam to the field where it vanishes, seeds from the stop and refines near
each cut. Focus runs from infinity (focusT 0) to the 5 m keyframe (focusT 1).

- Surface 11: the cut radius is 32.0941 mm, at the figure's land. The beams reach 31.3444 mm there, at the 5 m keyframe
  (focusT 1) and 0.65°, so the cut clears them by 0.7496 mm against a 0.0963 mm margin, 0.6534 mm to spare.
- Surface 37: the beams reach 15.5227 mm there, at focusT 0.9 (G2 at 90 % of its travel to 5 m) and 2.06°, past the
  figure's 14.93 mm cut. The depth goes from 3.53 to 3.87 mm, which puts the cut radius at 15.5892 mm. That clears
  the beams by 0.0664 mm against a 0.05 mm margin, 0.0164 mm to spare; the land is shorter than the figure's.

The surface audit and the beam rule pass.

Figure scale and land length. The audit had no scale for Figure 11's native raster, so it was measured there: the
S1 vertex is at 2439.0 px and the S40 vertex at 573.7 px, 1865.3 px for the 318.885 mm S1 → S40 span, so 5.85 native
px per mm (S1 → S37 gives 5.85, S1 → S5 5.84). Each q range is ±(1 + q) / (sd × 5.85 px).

- 11: q 0.924 (182 / 197 px), edge 203.6 px, range ±0.009 (0.914–0.933). The cut sits at q 0.922. Land 2.7059 mm,
  above the 0.1 mm minimum.
- 37: q 0.910 (85.5 / 94 px), edge 95.9 px, range ±0.020 (0.890–0.929). The cut sits at q 0.951, outside that range,
  because it moved out to clear the beams. Land 0.8108 mm, above the 0.1 mm minimum.


## 2026-10-29 — Rim-extension recheck

Re-read local `patents/JP2023023323A.pdf`, Figure 11 / OL6 on PDF p. 40, at 600 dpi, rotated object-left.
The S1–S40 native vertex span remains 1865.3 px / 318.885 mm = 5.85 px/mm. Every air face and cemented
boundary was inspected on both halves. The two previously modeled lands, on 11 and 37, are retained; the
other ordinary faces run to their element edges, so no new extension or concave cut is supported. The very
short PF substrate land at 8 remains unmodeled: the 0.25 mm bonded layer cannot clear that land without
changing the published layer geometry. Do not put an extension on cemented/diffractive faces 6–7.

No prescription or drawing parameter changed. `audit:surface` passes, including the existing inferred-cut beam
rule; `audit:image-circle` reports 0 undersized / 0 skipped.
