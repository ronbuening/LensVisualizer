# Audit Log - Sigma 16mm F1.4 DC DN | Contemporary

Patent: JP 2018-205527 A, Numerical Example 1

## 2026-06-13 - New lens patent audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass` | Current draft labels | No data-file change | Patent Example 1 publishes nd/vd only; current labels are catalog-class or Sigma-published FLD/SLD assignments consistent with those values. |

### Phase 2 - Retained-information audit

- Surface rows 1-30 match JP 2018-205527 A Example 1.
- The patent's plane-parallel cover glass at surfaces 31-32 is intentionally excluded and folded into the final air-equivalent gap: 15.5341 + 2.0000 / 1.51680 + 1.0000 = 17.8527 mm.
- Focus variable spacings d23 and d25 preserve the patent single-G3 movement pattern; the close endpoint extrapolates that motion to Sigma's 0.25 m / 1:9.9 production specification.
- Aspherical surfaces 6 and 23 match the patent coefficients.
- Semi-diameters are inferred because the patent publishes no clear-aperture radii. They were visually checked against Figure 1 and pass renderer diagnostics with no trim above 0.25 mm.

### Phase 3 - Spectral / metadata enrichment

- No patent line-index or partial-dispersion data was available beyond nd/vd.
- Existing top-level metadata, mount metadata, image format, element/group counts, and focus description were retained.

## 2026-06-23 - Sigma-folder patent glass sweep

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L18 | `glass` | `Crown-flint class (517/522)` | `E-CF6 (HOYA)` | Patent Example 1 stores nd/vd = 1.51742 / 52.15; HOYA E-CF6 is the exact catalog match. |
| L19 | `glass` | `Dense flint class (673/322)` | `E-FD5 (HOYA)` | Patent nd/vd = 1.67270 / 32.17; HOYA E-FD5 matches the six-digit code. |
| L21, L31 | `glass` | `SLD low-dispersion crown (593/686)` | `FCD505 (HOYA, SLD low-dispersion crown)` | Patent nd/vd = 1.59282 / 68.63; generated six-digit report resolves this as HOYA FCD505, consistent with Sigma SLD usage. |
| L22 | `glass` | `Lanthanum dense-flint class (750/353)` | `S-LAM7 (OHARA)` | Patent nd/vd = 1.74950 / 35.33; OHARA S-LAM7 is the catalog-backed match. |
| L43 | `glass` | `High-index lanthanum flint class (904/313)` | `S-LAH95 (OHARA)` | Patent nd/vd = 1.90366 / 31.32; OHARA S-LAH95 resolves the high-index rear doublet member. |

### Phase 2 - Retained-information audit

- Re-checked the extracted JP 2018-205527 A Example 1 prescription against the data file; surface radii, spacings, focus variables, and asphere coefficients were retained.
- The cover-glass omission remains intentional and documented in the header.
- The patent still provides no clear-aperture table, so no semi-diameter changes were made.

### Phase 3 - Spectral / metadata enrichment

- Retained the existing inferred APD annotations on Sigma-published FLD/SLD elements; no new patent line-index data was available.
- Glass labels now resolve the formerly code-only catalog matches, raising this lens to full trusted Sellmeier coverage in the generated report.

### Phase 4 - Analysis sync

- Updated the companion analysis prose and glass summary table for L18, L19, L21/L31, L22, and L43.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-30 gap (17.8527 mm) with the patent's physical rear stack from Numerical Example 1 (p. 18 surface table, p. 19 variable-gap table): d30 = 15.5341 mm, then a 2.0000 mm plate with nd 1.51680 / νd 64.20 and BF = 1.0000 mm at both the infinity and 1:40 states. Glass label N-BK7 (exact 517/642 catalog match; no θgF printed).
- Paraxial check against the previous data: EFL identical and defocus unchanged at all three focus keyframes (the old fold was stored unrounded). Physical track grows by 0.681 mm to 109.00 mm, matching the patent's printed total length; `closeFocusM` stays at Sigma's published 0.25 m.

## 2026-09-24 — Semi-diameters raised to the traced APS-C corner

Patent Example 1 prints 2ω = 84.21° at Y = 14.20 mm (p. 18), so the design covers the APS-C corner (14.175 mm). The
estimated front rims were sized for 0.35-field off-axis rays and clipped the real chief ray (solved through the stop
centre) from 37.4°, leaving the analysis field at 85% of the corner. The traced corner chief ray (42.05°, the patent ω)
needs surface 1 ≥ 20.53, surface 2 ≥ 19.51 and surface 3 ≥ 15.49 mm; values are floor + ~0.5 mm with L1 scaled as one
element. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 17.0 | 21.0 | corner chief ray 20.53 mm + clearance |
| 2 | 16.6 | 20.5 | L1 scaled with surface 1 (corner chief ray 19.51 mm) |
| 3 | 14.6 | 16.0 | corner chief ray 15.49 mm + clearance; surface 4 (R 16.40) does not clip and is unchanged |

The validator accepts the new values, the traced edge now reaches 14.17 mm at 42.1° with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed.

## 2026-10-27 — Rim-cut figure review

Figure 1 was read from its copy on PDF p. 1 (the selected drawing, native 803 × 449 px, 300 ppi JBIG2 raster); the
p. 28 raster of Figure 1 has lost nearly every lens stroke. Axis row 268 px; 6.36 px/mm from the vertex spacing of
surfaces 1–16, and L14's edge (94 px = 14.8 mm, its stored sd) confirms the vertical scale. Both halves were read for
flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 4 (L12 rear, R 16.3986) | 0.72 (93 / 129 px) | 8.56 mm | 14.40 mm | 14.4 → 16.0 (surface 3) | 5.41 mm |
| 7 (L14 front, R -30.5) | 0.93 (87–88 / 94 px) | 3.29 mm | 13.78 mm | 14.8 | 8.73 mm |
| 15 (L18 rear, R 40.9323) | 0.92 (77 / 84 px) | 1.87 mm | 12.23 mm | 12.2 → 13.4 (surface 14) | 11.46 mm |
| 27 (L41 rear, R 17.8877) | 0.91 (69 / 76 px) | 3.37 mm | 10.45 mm | 10.45 → 11.2 (surface 26) | 8.40 mm |

- 7 and 15 carry a drawn 7 px stroke square to the axis, joining the cap's end to the edge line, on both halves. On
  27 the rear face's last 7 px run straight, 2 px ahead of L42's front, where the sphere would bend 6 px further back
  into L42. On 4 the stroke itself is missing from the raster, but on both halves the edge line ends at the plane of
  the cap's end, 36 px above it, so only a land can close the outline.
- 4, 15 and 27 had their sd near the figure's cap end; each was raised to its partner face's sd with the cut at the
  old sd. On 4 the clear radius goes from the old 14.4 mm rim to the 14.4038 mm cut radius, and the beams reach
  13.3504 mm there; on 15 it goes from the old 12.2 mm rim to the 12.2307 mm cut radius, and the beams reach
  11.5305 mm there. 27 later lost its cut (see the rule section). The figure's land planes sit 8.6, 3.2, 1.7 and
  3.5 mm from their vertices, against the authored 8.56, 3.29, 1.87 and 3.37 mm.
- 6A (L13 rear, asphere) shows the same shape as 4 (cap end 87 px of a 101 px edge, q 0.86, edge line ending at the
  cap's plane, no stroke). The raise to its partner's sd 13.8 with a 6.42 mm cut is refused: gap 6A→7 intrusion
  9.71 mm exceeds the 9.548 mm allowed (90 % of 10.609 mm), with or without the cut on 7. A raise that passes
  (≤ 13.455 mm) gains nothing, so 6A keeps sd 13.45 and no cut.
- No land on the other concave faces: 2 (L11 rear, R 404.5) is near-flat, so a land cannot be told from the face; 14
  (L18 front) runs to its edge line; 16 (L19 front) ends against L18's land and L19's edge line is not in the raster;
  25 (L31 rear) runs to the rim within 3 px of the sphere.
- The raster also drops other strokes square to or along the axis (the L19, L31 and L41 edge lines, the top of L11's
  rear face). The figure draws L11–L13 rims larger than the stored sds (L12 edge 20.3 mm); no other sd changed.
- No cap reaches the stop plane: no candidate face borders the stop, and 17 and 19 bend away from it.
- Still traces f/1.466 against the stated f/1.46, limited by surface 16, before and after; no `(rim cut)` limiter.
  The cuts on 4, 7 and 15 clear the traced wide-open beams by their margins (see the rule section) and clip none of
  their rays. The engine half-field moves 38.950° → 38.958° because surface 4's cut radius (14.4038 mm) sits
  0.0038 mm above the old sd.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stop of #933 (entrance-pupil diameter F/N at the stated
f/1.46) with the rule's current search, which follows each beam to the field where it vanishes, seeds from the stop
and refines near each cut on the full measurement. Traced against that rule, one cut from the figure review above was
dropped:

- Surface 27: the cut sat at the old 10.45 mm rim (cut radius 10.4502 mm), and the beams reach 10.4514 mm there
  (focusT 0.9, toward the 0.25 m close-focus end, 32.01°), so the land stopped the rays that rim stops. The sd returns
  to 10.45 mm with no cut, and the face draws as it did before the figure review.

The other three cuts clear the beams by their margins:

- Surface 4: the beams reach 13.3504 mm there, at infinity (focusT 0) and 31.25°. The cut radius, 14.4038 mm (depth
  8.56 mm), clears them by 1.0534 mm against a 0.05 mm margin, 1.0034 mm to spare.
- Surface 7: the beams reach 12.8034 mm there, at infinity and 31.25°. The cut radius, 13.7792 mm (depth 3.29 mm),
  clears them by 0.9758 mm against a 0.05 mm margin, 0.9258 mm to spare.
- Surface 15: the beams reach 11.5305 mm there, at focusT 0.5 (between the 1:40 keyframe and the 0.25 m end) and
  29.26°. The cut radius, 12.2307 mm (depth 1.87 mm), clears them by 0.7002 mm against a 0.05 mm margin, 0.6502 mm
  to spare.

On this stop the aperture audit traces the stated f/1.46, limited by the iris, with no `(rim cut)` limiter. The
surface audit and the beam rule pass.

Figure scale and land length. Figure 1 is drawn at 6.36 native px per lens mm, the figure review's vertex spacing of
surfaces 1–16. The vertex ticks on axis row 268 match it: surface 1 at column 92, surface 16 at 413 (321 px over
50.503 mm) and the image plane at 785 (693 px over 109.000 mm). The q range is ±(1 + q) / (edge px), with edge px =
sd × 6.36.

| Surface | Figure q (cap end / edge px) | Edge px | q range | Cut radius ÷ sd | Land (sd − cut radius) |
|---|---|---|---|---|---|
| 4 | 0.721 (93 / 129) | 101.8 | 0.704–0.738 | 0.900 | 1.5962 mm |
| 7 | 0.931 (87.5 / 94) | 94.1 | 0.910–0.951 | 0.931 | 1.0208 mm |
| 15 | 0.917 (77 / 84) | 85.2 | 0.894–0.939 | 0.913 | 1.1693 mm |

- 4 sits at the old 14.4 mm rim, not at q × sd. The figure draws L12 larger than its 16.0 mm sd (edge 129 px,
  20.3 mm), and its cap end, 93 px or 14.62 mm (0.16 mm a pixel), lies within 1.4 px of the old rim. On the drawn
  129 px edge the q range is 0.708–0.734.
- 15 sits at the old 12.2 mm rim, inside its q range.
- Every land is longer than the 0.1 mm minimum, and no q range reaches 1.
