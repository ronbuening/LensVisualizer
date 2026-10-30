# Audit Log — Nikon NIKKOR Z 40mm f/2

Patent: JP 2021-189351A, Example 4

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2021189351A.pdf`.
- Example 4 rows confirmed surface 2 nd = 1.71736, vd = 29.57 and surface 6 nd = 1.80400, vd = 46.60.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L12 / S2 | `S-TIH23 (OHARA)` | `S-TIH1 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L22 / S6 | `S-LAH64 (OHARA)` | `S-LAH65 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated L12/L22 labels and the chromatic-pair discussion.

## 2026-08-21 — Near/close catalog-candidate review

- Rechecked Example 4's L21 coordinate at `nd = 1.75520`, `vd = 27.57` against the current catalog.
- Rejected the prior `PBM18Y (OHARA)` / `S-TIM27` attribution: current OHARA PBM18Y is
  `1.595509 / 38.767`, so this is not a normalization-only difference.
- Relabeled L21 as an unresolved `755276` dense-flint class and deliberately left it without a Sellmeier curve;
  the patent coordinate is unchanged.

## 2026-09-23 — First-added diagram audit, lens 90

### Source

- Local PDF `patents/JP2021189351A.pdf` (JP 2021-189351 A, 30 pages, publisher text layer). Front page (p. 1) for
  bibliographic data; Table 4 (p. 19) read on the rendered page; Fig. 7 and Fig. 8 (p. 28) rendered at 300 dpi;
  Table 7 (pp. 23–24) and the condition table (p. 26) for example selection.

### Confirmed and retained

- Example choice: Example 4 (f = 41.194, FNO 2.04, ω = 27.72°, Y = 21.63) is the only f/2 example near 40 mm with
  6 elements in 4 components and 2 hybrid aspheres. Example 7 (f = 41.200) is f/2.86 with five elements.
- Every Table 4 row (R, D, nd, νd for surfaces 1–13, stop at surface 4), both aspheres (κ = 1.0000 in
  X = (y²/R)/{1 + √(1 − κy²/R²)} + …, so stored K = κ − 1 = 0; all A4–A12 values and signs) and the D4/D10 table
  match the stored data. Filter surfaces 14–15 are excluded; last gap 10.5 + 1.6/1.5168 + 0.5596 = 12.114 mm
  (patent Bf(air) 12.113).
- Calculated EFL 41.200 mm (patent 41.194), BFD 12.1146 against a stored 12.114 (defocus −0.0006 mm), TL(air)
  59.264. Stored element focal lengths agree with thick-lens values to 0.1 mm. Element types match R signs.
- Assignee Nikon Corporation, 2021 publication; `patentAuthors: ["Keigo Koida"]` is correct (古井田 啓吾).
- Focus mechanism: G2 moves toward the object; G1, stop and G3 fixed (text ¶0092, Fig. 7 arrow). Two published
  states, so no `focusPositions` needed.
- STO sd 8.8 mm equals the inner end of the Fig. 7 stop tick (8.83 mm); the engine iris at f/2.04 is 8.97 mm.
- L21 stays labelled as the unresolved 755276 class. SF4-type flints are within 0.06 νd, but none matches exactly.
  L31 stays E-CF6 (Δνd 0.05, closest catalog glass).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `closeFocusM` | 0.29 (production MFD) | 1.28 | Table 4 labels the near state β = −1/10, but a paraxial solve of D4 = 10.0415 / D10 = 14.9989 focuses the object 1223.4 mm from S1, 1283 mm object-to-image, β = −0.0333. Fig. 8(B) quotes H0 = −656.68 mm for Y = 21.63, β = −0.033. The published gaps are kept and labelled by their calculated distance; 0.29 m (≈ 5.8 mm G2 travel, calculated) is not published and not extrapolated. |
| `nominalFno`, `fstopSeries[0]` | 2, 2 | 2.04, 2.04 | Table 4 FNO = 2.04. `maxFstop` stays at the default 16 (production f/16). |
| `varLabels` surface 10 | "BF" | "D10" | Patent gap name. |
| sd 1 / 2 / 3 | 14.0 / 14.0 / 13.5 | 11.0 / 11.0 / 10.9 | Fig. 7 silhouette, scale 12.34 px/mm from the 582 px S1–S13 span (47.150 mm). The old values were about 27 % above the drawing. The axial beam needs 10.10 at S1. |
| sd 5 | 7.2 | 8.4 | Was CLIPS-AXIAL (7.33 needed). Fig. 7 shows the concave face ending at 8.4 mm inside a flat annulus out to 11.0 mm. |
| sd 6 / 7 / 8A | 7.8 / 9.8 / 10.0 | 11.0 / 11.0 / 11.3 | Fig. 7 cemented component rim 11.0 mm; resin layer reaches 11.3 mm. No asphere turnover at 11.3 mm. |
| sd 9 / 10 | 10.2 / 12.8 | 13.5 / 13.5 | S9 was BLOCKS-CHIEF (10.51 needed). Fig. 7 shows L23's flat front face and rim at 13.5 mm. |
| sd 11A / 12 / 13 | 15.5 / 15.5 / 16.0 | 16.4 / 16.4 / 17.6 | S13 was BLOCKS-CHIEF (16.18 needed). Fig. 7 shows the resin and front curve ending at 16.4 mm, a flat flange, and the rear face at 17.6 mm. No 11A sag turnover at 16.4 mm. |
| Glass L11/L23 | S-LAH55 (OHARA) | S-LAH55V (OHARA) | Exact 1.83481 / 42.73 catalog match. |
| Glass L12 | S-TIH1 (OHARA) | J-SF1 (HIKARI) | Exact 1.71736 / 29.57 match from Nikon's usual supplier. |
| Glass L22 | S-LAH65 (OHARA) | J-LASF015 (HIKARI) | Exact 1.80400 / 46.60 match. |
| Subtitle, header, `focusDescription`, roles | "FURUIDA"; SD note based on an L11 edge-thickness limit; 1.2 mm travel with no distance | "KOIDA"; figure-based SD note; close-focus and cover-glass notes; near state 1.28 m | As above. |
| Analysis | Inventor "Furuida Keigo"; close focus as a notational convention; 14 mm edge-limited front rim and a 23.5 mm envelope; OHARA labels; wrong S-NSL3 comparison; departures at old rims; "clears" 16 mm flange | Corrected throughout; patent group focal lengths; aspheric departures at the new rims (8A +686 µm at 11.3 mm, 11A +877 µm at 16.4 mm); flange statement corrected | As above. |

### Checks on the result

- Surface validator: no validation errors. Image-circle floor: 0 undersized.
- Real-ray trace at f/2.04, Y = 21.63 (ω = 27.69°), at infinity and at the near state: no axial clipping and no
  chief-ray blocking. Full-field vignetting at full aperture is 7–16 % per side at G1 and 47–72 % per side in G2.
- Engine: FOPEN 2.04, stop radius 8.97 mm, paraxial half-field estimate 29.4°, closeFocusM 1.28.
- Glass check: L11/L12/L22/L23 exact; L31 Δνd −0.05; L21 compatible with SF4 (Δνd 0.01); resin has no catalog
  entry, as expected.
- Live headless render (local): the silhouette matches Fig. 7, with a slimmer G1, a stepped L21 front and the L31
  flange. The focus scale runs from ∞ to 1.28 m. The focus-movement overlay shows G2 moving 1.21 mm toward the
  object, with G1 and G3 fixed.

### Open limitations

- The patent's "β = −1/10" label conflicts with its own gaps and Fig. 8(B). The stored near state follows the gaps.
  The production 0.29 m / 0.17× state is not modelled.
- Computed group focal lengths are 0.2–0.4 % longer than Table 4's group data, although the system EFL agrees to
  0.015 %. The rows were re-read, and the cause is unknown.
- L21's glass identity is still unresolved (755276 class, no Sellmeier). The resin (1.56093 / 36.64) has no
  catalog entry.
- The semi-diameters are measured from the drawing; the patent publishes no effective diameters.

## 2026-09-23 — Filter modeled as `rearPlates`

- Replaced the air-equivalent last gap (12.114 mm) with Table 4's physical rear stack (PDF p. 19, rendered): surface 13
  gap D13 = 10.5 mm, then `rearPlates` FL 1.6 mm, nd 1.5168, νd 63.88 (Hikari J-BK7, an exact catalog match), and
  0.5596 mm to the image.
- Paraxial check against the previous data: EFL identical; defocus moves by 0.00045 mm at both focus states, the
  rounding in the old stored 12.114 against 10.5 + 1.6/1.5168 + 0.5596 = 12.1145. Physical track grows by 0.546 mm to
  59.81 mm, the patent's printed TL.

## 2026-10-27 — Rim-cut figure review

Fig. 7 (PDF p. 28, native 300 ppi 1-bit raster, axis vertical, object at the bottom) was read on both halves, element
by element, for flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Scale
12.34 px/mm from the S1–S13 vertex span; q is the cap end over the element edge.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 3 (L12 rear, R 45.4688) | 0.91 (0.90–0.92 on both halves) | 1.09 mm | 9.90 mm | 10.9 | 9.23 mm |
| 5 (L21 front, R −16.5359) | 0.764 (103.5 / 136 and 104 / 135.5 px) | 2.29 mm | 8.40 mm | 11.0 (was 8.4) | 7.56 mm |

- Surface 3: the drawn cap follows the R 45.47 circle to about 120–123 px, then runs flat to L12's 134 px edge at 13.6
  px (1.10 mm) from the vertex, where the sphere would sit at 16.2 px. L12's own edge is the face's `sd` (10.9), so the
  cut radius is the figure share of it; depth rounded down.
- Surface 5: the 2026-09-23 audit had put its `sd` at the cap end (8.4 mm) inside the flat annulus, below cemented
  face 6 (11.0 mm), so the section drew a slanted edge. Fig. 7 draws L21 square at 11.0 mm with a long land down to
  the cap; q × 11.0 = 8.40 mm is the old `sd`. The face took 6's 11.0 mm (inside its 16.54 mm radius) with the cut
  at the old rim: the clear radius went from the old 8.4 mm rim to the 8.3959 mm cut radius. The beam rule below
  dropped this cut.
- Concave faces with no land: 9 (L23 front, sag 0.23 mm at `sd`) runs straight to its 13.5 mm edge; 13 (sag 0.14 mm)
  is too shallow to show one; 11A (L31 resin front) runs to the resin's own edge, closed by a 2–3 px stroke parallel
  to the axis (its edge thickness).
- The flat on L31's glass front from the resin rim (about 16.2 mm) to the 17.6 mm glass edge belongs to cemented
  junction 12, the flange the 2026-09-23 audit recorded; it is not an air-side land and is not cut.
- No cap reaches the stop plane: surface 3's land now clears it by 1.36 mm (was 1.12 mm at `sd`), surface 5's by
  7.75 mm at the near state.
- The aperture audit is unchanged (f/2.04 within 3 %; no rim, trace, iris or failed rows, no rim-cut limiter); the
  surface audit passes and the image-circle audit finds nothing undersized. The cut on surface 3 clears every traced
  ray of the wide-open beams by its margin and clips none of them (beam rule below); surface 5's cut was dropped
  there. The engine half-field stays 29.44°.
- The rendered section now draws L12 and L21 with square edges and flat lands like Fig. 7. The stop marker's housing
  stroke, the smaller of its neighbours' `sd`s, now reaches 10.9 mm instead of stopping at the 8.97 mm iris; Fig. 7's
  stop tick runs from 8.83 to 10.45 mm.
- The analysis's L11 paragraph now says L12's rear face ends on a 9.9 mm land instead of an 11.0 mm clear radius.
- No land was skipped.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stops of #933 (EPD = F/N) with the rule's current
search, which follows each beam to the field where it vanishes, seeds from the stop and refines near cuts on the full
measurement. Traced against that rule, these cuts from the figure review above were changed:

- Surface 5: the cut sat at 8.3959 mm, at the old 8.4 mm rim. With the face at 11.0 mm and the cut restored, the
  beams reach 9.1411 mm there (at infinity, 11.22°), so the land stopped the rays that rim stops. The sd returns to
  8.4 mm with no cut, and the face draws as it did before the figure review.

The other cut clears the beams by its margin at its figure-review position:

- Surface 3: cut radius 9.8962 mm. The beams reach 9.4431 mm there (focusT 0.25, 13.83°), a clearance of 0.4531 mm
  against a 0.05 mm margin, 0.4031 mm spare.

The surface audit and the beam rule pass.

Figure scale and land length: Fig. 7 is 12.34 native px per lens mm, from the S1–S13 vertex span (582 px for
47.150 mm, 2026-09-23 audit). One native pixel at the cap end and at the edge moves q by ±(1 + q) / (edge px).

- 3: figure q 0.91 (0.90–0.92 on both halves) at a 134.5 px edge (10.9 mm), range 0.896–0.924; the figure draws L12's
  edge at 134 px. The cut sits at 0.908 of `sd`. Land 1.0038 mm, over the 0.1 mm minimum.


## 2026-10-29 — Patent rim-extension review

Directly re-read `patents/JP2021189351A.pdf`, PDF p. 28, Figure 7 (Example 4), including a 600 dpi crop of the complete section. The source's vertical optical axis, object at bottom, and all air faces were checked. Native scale: 12.34 px/mm from the 582 px S1–S13 vertex span / 47.150 mm.

| Surface | Clear `sd` before → after | `rimExtensionSd` before → after | Evidence |
|---|---|---|---|
| 5, L21 front | 8.4 → 8.4 mm | absent → 11 mm | Both halves show a flat land to the cemented partner's height; cap/edge q about 0.764, native one-pixel range 0.751–0.777. |

The extension restores the square outer outline without raising the optical cap. It therefore preserves the original rim clipping that prevented an inferred cut at this location. Surface 3's existing safe cut is retained. All remaining concave faces meet their corners or have no resolved air-side land. The L31 resin/glass shoulder is a cemented junction and remains unchanged. No optical prescription or clear-aperture value changed.

Validation: `audit:surface` and `audit:image-circle`; parent records full gates with the three-lens commit.


## 2026-10-29 — Glass-only reinspection

Fresh direct review: `patents/JP2021189351A.pdf`, Example 4 / Table 4, PDF p. 19; hybrid resin construction on pp. 14 and 18 (Example 4 retains Example 1's G1/G2 construction). Prescription table images were rendered and read again for this pass; earlier audit notes were used only to locate them. Checked every stored medium against the source's d-line nd/νd columns, including bonded layers and rear plates separately. All source indices and Abbe numbers are retained.

| Medium | Source nd / νd | Current coefficient-backed proxy | Verdict |
|---|---|---|---|
| L11 | 1.83481 / 42.73 | S-LAH55V | source pair retained; compatible proxy |
| L12 | 1.71736 / 29.57 | J-SF1 | source pair retained; compatible proxy |
| L21 | 1.75520 / 27.57 | SF4 | source pair retained; compatible proxy |
| L22 | 1.80400 / 46.6 | J-LASF015 | source pair retained; compatible proxy |
| L22r | 1.56093 / 36.64 | none | unresolved; Abbe approximation |
| L23 | 1.83481 / 42.73 | S-LAH55V | source pair retained; compatible proxy |
| L31r | 1.56093 / 36.64 | none | unresolved; Abbe approximation |
| L31 | 1.51742 / 52.2 | E-CF6 | source pair retained; compatible proxy |

Coverage: 6 physical lens elements, 8 authored media, 6 modeled media resolving to dispersion curves; 1 rear plate(s) checked separately (FL 1.51680/63.88, J-BK7). Compatible curves are spectral proxies, not evidence of the production supplier, melt or material chemistry.

All six glass-body and two resin-layer nd/νd pairs are retained, as is the separate FL plate. L21's six-digit label already selected Schott SF4; the label and analysis now explicitly call it a compatible spectral proxy (Δnd about +0.000001, Δνd about +0.01), without asserting a production identity. Both 1.56093/36.64 resin layers stay unresolved and use Abbe approximation. Unsupported UV-curing, Nikon chemistry/supplier, cost and durability claims were removed; the source confirms resin layers, not those details. No source partial-dispersion values or per-lens spectral overrides were found. All APD flags remain false.

Verification: current-label resolver and native-coordinate compatibility sweep plus `assertCatalogConsistent()`; shared `dispersion.test.ts` and `partialDispersionLine.test.ts` checks. No catalog tolerance was relaxed. Full repository gates are recorded by the parent at the three-lens commit boundary.
