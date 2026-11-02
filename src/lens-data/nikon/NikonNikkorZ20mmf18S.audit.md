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
  square edge at the partner's height and a land down to the cap. Each sd now equals the partner's and the cut sits at
  the old sd, to the 0.01 mm depth: the clear radius goes from the old 17.5 mm rim to the 17.4988 mm cut radius on 2,
  from 10.9 to 10.8958 mm on 15 and from 13.4 to 13.4001 mm on 26A. The beams reach 16.9456, 10.2434 and 12.8616 mm
  there. The figure's ratios run slightly below the old sd ratios (0.795, 0.948, 0.924); the rims were not refitted to
  them.
- L12 (5A) also shows a land (0.912), but at the hybrid's glass rim: in the model that rim is the cemented
  glass→resin junction 4 (sd 14.5), not an air face. Raising only 5A to 15.5 would draw a notch, so no cut.
- Surface 15's cut radius (10.8958 mm) sits 0.25 mm above the stated axial ray (10.65 mm), a ghost trace launched
  collimated at both focus ends. The traced wide-open beams reach 10.2434 mm there.
- The step at L35–L36 is the larger L36 front beyond a cemented junction (20), not an air-side land. Surface 8 (L14
  rear) straightens by ≤ 2 px at its corner (about 0.98), below what the figure resolves; 13, 16 and 24A run to their
  element edges; 6 (R −2091) is nearly plane.
- No cap reaches the stop plane (surface 13 clears it by 6.84 mm, surface 15 by 1.63 mm; G3 does not move in focus).
- The aperture audit is unchanged (f/1.85 within 3 %, no rim, trace, iris or failed rows) and the surface audit
  reports no validation errors. At Y 21.6 mm (ω 48.4°) the full-field rim rays fail before the stop, so no side
  vignetting share exists before or after; the chief ray stays inside the cut radii of 2 and 26A (16.48 and 12.47 mm).
  Each of the three cuts clears the traced wide-open beams by its margin at every field and focus state and clips none
  of their rays (see the beam rule below).

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stop (#933; 10.2622 mm for f/1.85) with the rule's
current search, which follows each beam to the field where it vanishes and refines near a cut on the full measurement.
No cut from the figure review above had to move:

| Surface | Cut radius | Beams reach | Where (focus, field) | Clearance | Margin | Spare |
|---|---|---|---|---|---|---|
| 2 | 17.4988 mm | 16.9456 mm | near keyframe, 50.07° | 0.5532 mm | 0.0525 mm | 0.5007 mm |
| 15 | 10.8958 mm | 10.2434 mm | focusT 0.70 (between middle and near), 11.63° | 0.6524 mm | 0.05 mm | 0.6024 mm |
| 26A | 13.4001 mm | 12.8616 mm | near keyframe, 50.07° | 0.5385 mm | 0.05 mm | 0.4885 mm |

The surface audit and the beam rule pass.

Figure scale and land length. Figure 1 has 17.41 native px per lens mm: the S1–S27A vertex span at infinity is
1848 px over 106.119 mm, read on a column beside the axis, where the other vertices fall within 4.2 px of the
prescription at that scale. Each q range is ±(1 + q) / (sd × 17.41 px/mm). All three cuts sit at the old rim, above
the figure's q:

- 2: q 0.762 ± 0.0046 (0.757–0.767) on a 383 px edge; the cut is at 0.795 of sd; land 4.5012 mm.
- 15: q 0.923 ± 0.0096 (0.913–0.933) on a 200 px edge; the cut is at 0.948 of sd; land 0.6042 mm.
- 26A: q 0.898 ± 0.0075 (0.890–0.906) on a 253 px edge; the cut is at 0.924 of sd; land 1.0999 mm.

Every land is longer than the 0.1 mm minimum, and no q range reaches 1. The figure draws L11 and L51 wider than their
sd at this scale (edges 447 and 274.5 px, 25.7 and 15.8 mm); the ranges above use sd × scale, the wider of the two.


## 2026-10-29 — Rim-extension recheck

Re-read local `patents/WO2021117429A1.pdf`, Example 1 / Figure 1, PDF p. 37, on its native 2478 × 3507
1-bit raster, rotated object-left. This PDF uses raster pixels as page points, so rendering at 72 dpi recovers the
native source without treating its oversized media box as an A4 sheet. The S1–S27A vertex span remains
1848 px / 106.119 mm = 17.41 native px/mm. All 14 physical elements (15 modeled media) and both halves were
checked. The lands on 2, 15 and 26A are already represented by the three retained cuts.

The apparent extra step at L35/L36 is a cemented-boundary height change. The L12 hybrid land belongs to the
substrate/resin boundary and cannot be extended as an ordinary air face without misrepresenting the bonded layer.
Other ordinary faces reach their element edges, or leave only an unresolved one/two-pixel change. No further
extension or concave cut is supported.

No prescription or drawing parameter changed. `audit:surface` passes, including the existing inferred-cut beam
rule, and `audit:image-circle` reports 0 undersized / 0 skipped.


## 2026-10-29 — Glass-only reinspection

Re-read `patents/WO2021117429A1.pdf`, Example 1 / Table 1, PDF pp. 19–20 (printed pp. 17–18).
All 15 modeled media (14 physical elements) retain the source d-line nd/νd values. The 0.05 mm hybrid
layer is explicitly represented by its source 1.51380/52.97 pair. All fourteen ordinary-glass annotations
resolve to compatible coefficient-backed curves; the resin remains unmatched despite a coincident ordinary
glass coordinate candidate, because coordinates cannot establish polymer dispersion or identity.

| Media | Change / retained verdict |
|---|---|
| Fourteen ordinary glasses | Remove 42 copied catalog nC/nF/ng fields and fourteen catalog/family dPgF overrides; retain all source nd/νd and labels |
| L12r | Retain source coordinates and explicit unmatched resin disposition |

Table 1 has no C/F/g-index or partial-dispersion column. The removed values came from representative vendor
catalogs, not the patent; they previously bypassed the shared coefficient curves. The compatible catalog now
supplies each glass's full wavelength dependence, anchored to the source index. No dispersion measurements
were discarded. All analysis claims of stored line indices/deviations were synchronized; material/proxy and
production-supplier uncertainty remains explicit.

Verification: `assertCatalogConsistent()` and fresh per-element `resolveCompatibleGlass` / compatibility checks pass.
The existing dispersion and glass-resolution-parity suites pass (2 files, 93 tests).
`audit:surface` passes after the glass-only changes.
