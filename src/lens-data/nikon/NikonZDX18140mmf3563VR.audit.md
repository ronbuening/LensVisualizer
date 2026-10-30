# Audit Log - Nikon NIKKOR Z DX 18-140mm f/3.5-6.3 VR

Patent: WO 2022/264542 A1

## 2026-05-20 - Glass relabel pass

- Opened the local untracked patent PDF at `patents/WO2022264542A1.pdf`; it is present but image-only in local text extraction.
- Confirmed the queued nd/vd rows against the data file and coefficient-backed public Hikari/OHARA catalog matches.
- Updated L23 to `J-SFH1 (Hikari)` for nd=1.80809, vd=22.74.
- Updated L32 to `S-TIM5 (OHARA)` for nd=1.60342, vd=38.03.
- Updated L36 to newly cataloged `J-BASF6 (Hikari)` for nd=1.66755, vd=41.87.
- Updated L51 to `J-LASFH9 (Hikari)` for nd=1.90265, vd=35.77.
- Remaining coverage misses are the two UV-curing resin aspheric layers.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked the prescription in local `patents/WO2022264542A1.pdf`; S16 remains 1.51742 / 52.20 and its R/d
  values are unchanged.
- S16 `S-NSL3 (OHARA)` -> `S-NSL36 (OHARA)`. S-NSL36 is the matching 51752x same-vendor family; S-NSL3 is
  the distinct 1.51823 / 58.90 row.
- Synchronized the hybrid-asphere substrate discussion, glass table, and source list.

## 2026-09-23 — Cover glass modeled as `rearPlates`

- Replaced the air-equivalent D33 with Table 1's physical rear stack (local PDF pp. 28–31, printed pp. 26–29):
  D33 = 8.272 / 18.869 / 33.216 mm (identical at infinity and close focus), then `rearPlates` PP 1.600 mm,
  nd 1.51680, νd 64.14, and 1.000 mm air to the image plane (surfaces 34–35). Glass label S-BSL7 matches the file's
  L35g label for the same nd/νd pair and resolves as compatible.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.00015 mm at every zoom station and
  focus keyframe, the rounding of the old fold (1.600/1.51680 = 1.05485 stored as 1.055; the mid value also used
  20.924 against the patent's printed Bf 20.923). Physical track grows by 0.545 mm.
- The analysis's "35 optical surfaces excluding PP" was corrected to 33 numbered surfaces (1–33 including the stop);
  Table 1 numbers the cover glass 34–35.

## 2026-09-23 — Glass relabel for the 1.51680 / 64.14 crown

- L35g and the PP cover glass both print nd 1.51680 / νd 64.14 but were labelled S-BSL7 (OHARA), the 1.51633 / 64.14
  glass that only matched within tolerance. Both now use Hikari J-BK7A (1.51680 / 64.13), the nearest catalog row and
  the vendor this file already uses for L23, L36 and L51. The analysis glass entries and source list follow; the
  source list's duplicate item 4 was renumbered.

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 56, drawing sheet 1/11, native 300 ppi raster; wide end, infinity focus) was read element by element
on the half without leader lines and cross-checked on the other half, for flat lands square to the axis at the rims of
concave faces, the shape `rimCutDepthMm` draws. The figure is to scale (about 17.9 px/mm along the axis).

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 30 (L51 front, R −16.37) | 0.905 (160/177 px) | 3.38 mm | 9.96 mm | 11.0 | 2.82 mm |
| 7 (L21 rear, R 13.538) — not cut | 0.77 (169/220 px) | (3.63 mm) | (9.23 mm) | 12.0 | 4.56 mm |

- Face 7: the figure's L21 edge (220 px, about 12.2 mm) matches face 7's stored sd 12.0, so the cut was sized on it;
  face 6's larger sd 14.0 is not a raise target (it also exceeds face 7's |R|). The cut was not authored: at the wide
  end the full-field bundle reaches 9.97 mm on face 7 (chief 8.61 mm), and a 9.23 mm cut radius would raise side
  vignetting there from 0 % to 55 %.
- Every other concave face runs to its element edge: 5 (L13 rear), 8 and 9 (L22), 12 (L24 front, whose cap meets the
  corner beside L23's rear rim), 29 (L42 rear) and 32 (L52 front, nearly flat). The short square stroke at L23's rear
  corner sits on a convex face, whose rim bends into the glass, so it is not a rim-cut candidate.
- No cap reaches the stop plane at any zoom or focus state: both stop neighbours (13 and 15A) curve away from it.
- Aperture audit unchanged: the wide, middle and tele stations still trace f/3.77, f/5.21 and f/6.83 against the
  stated f/3.5, f/5.0 and f/6.3, limited by 15A as before, with no rim-cut limiter. The cut on 30 clears the traced
  wide-open beams by its margin (see the rule section) and clips none of their rays. The engine's wide-end half-field
  estimate falls from 40.82° to 39.35°, still above the patent's 39.178°, because the estimate's paraxial chief ray
  meets the 9.9618 mm cut radius there; the middle and tele estimates are unchanged.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stops of #933 (entrance-pupil diameter F/N at each
station's stated f-number) with the rule's current search, which follows each beam to the field where it vanishes,
seeds from the stop and refines near each cut on the full measurement. The cut from the figure review above needs no
change:

- Surface 30: the beams reach 9.7226 mm there, at the tele end (135.845 mm, zoomT 1), focusT 0.05 (one search step
  from infinity toward close focus) and 8.04°. The figure-ratio cut, depth 3.38 mm and radius 9.9618 mm, clears them
  by 0.2392 mm against a 0.05 mm margin, 0.1892 mm to spare.

On these stops the aperture audit traces f/3.74, f/5.12 and f/6.71 at the wide, middle and tele stations, still
limited by 15A, with no rim-cut limiter. The surface audit and the beam rule pass.

Figure scale and land length. Figure 1 is drawn at 17.9 native px per lens mm, as the figure review gives. On the
2478 × 3507 px page raster, surface 1's vertex lies at row 2388 and the image plane at row 538, 1850 px over the wide
end's 103.388 mm, which matches. The q range is ±(1 + q) / (edge px), with edge px = sd × 17.9.

- Surface 30: q 0.904 (cap end 160 px over edge 177 px), edge px 196.9, q range 0.894–0.914; the cut radius is 0.906
  of sd. The figure draws L51's edge at 177 px (9.89 mm), short of the stored 11.0 mm sd; on that drawn edge the range
  is 0.893–0.915.
- The land, 1.0382 mm, is longer than the 0.1 mm minimum, and the q range does not reach 1.

## 2026-10-29 — Surface-height and concave-rim reinspection

Reopened `patents/WO2022264542A1.pdf`, Example 1, Figure 1 (PDF p. 56), and inspected every element on a 600 dpi crop, with a separate enlarged crop of L23. The source S1-to-image span gives 17.9 native px/mm. The existing surface-30 cut already draws L51's resolved concave land. Surface 7's shorter figure cap remains excluded under the full-beam criterion documented above; the figure's own L21 edge is about 12.2 mm, so the larger 14.0 mm front `sd` is not an extension target.

The convex rear face of L23 (surface 11) has a short square stroke, about 7.5 native px or 0.4–0.5 mm, that the earlier concave-cut-only review could not represent. An extension from its retained 10.0 mm cap to front face 10's 10.5 mm outer edge was tested in a temporary candidate, but the land would cross the front face: `audit:surface` reports negative edge thickness -0.125 mm. A 10.3 mm candidate still crosses (-0.037 mm). A truncated 10.1 mm land passes but does not reach the figure's outer edge, so it was rejected rather than substituting an arbitrarily short shoulder. No optical `sd`, curvature or thickness was changed to force that inferred outline.

No geometry changed. `audit:surface` passes with the existing inferred-cut beam check; `audit:image-circle` reports 0 undersized and 0 skipped. The unmodeled L23 stroke is a source/model limitation, not a validated optical aperture.
