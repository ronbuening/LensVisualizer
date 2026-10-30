# Audit Log — NIKON NIKKOR Z 85mm f/1.8 S

Patent: JP 2020-173366 A, Example 3

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Referenced local patent `patents/JP2020173366A.pdf` was not present, so the public patent PDF was fetched to `/tmp/JP2020173366A.pdf` for this review.
- The public patent text for Example 3 confirms the relevant glass rows:
  - row 6 / L14: nd = 1.85025, νd = 30.05
  - row 17 / L43: nd = 1.84850, νd = 43.79

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L14 | `Dense flint (code 850301)` | `H-ZLaF76 (CDGM, 850301)` | CDGM H-ZLaF76 public datasheet gives a coefficient-backed near-exact match, code `850301`. |
| L43 | `Lanthanum crown (code 849438)` | `J-LASFH22 (Hikari, 849438)` | Hikari 2023 catalog gives a coefficient-backed exact match, code `849438`. |

### Catalog-search disposition

- Added CDGM H-ZLaF76 to the glass catalog using published Sellmeier constants from the CDGM datasheet.
- Added Hikari J-LASFH22 to the glass catalog using the Hikari 2023 formula-3 power-series coefficients.
- Updated the analysis notes to identify both catalog-backed glass assignments and keep the remaining unresolved codes unchanged.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L21 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-09-08 — Complete source and live-view review

Retrieved [original JP2020173366A PDF](https://patentimages.storage.googleapis.com/b5/81/fe/574f1257cb4adc/JP2020173366A.pdf) into ignored patents/ (prior temporary copy unavailable). Example3 rows pp.16–17, definitions pp.13–14 and exact Figure3 p.20 at600dpi checked. All twenty glass boundaries, stop, nd/vd and source gaps match. No aspheres. Twelve elements/eight components retained.

- PT22–23 remains omitted. Corrected rear equivalent-air gap13.52→12.974852320675106 mm =11+1.6/1.5168+0.92. The focused regression caught a0.001mm transcription typo in the initial audit edit; the final formula assertion and all three tests pass.
- Figure optical rims refined using97.291mm vertex span, excluding callouts/plate/arrows:28,24,22,17.9,15.4,16.4,17.9,19.2mm by successive air-separated component. All runtime rims untrimmed at0/.5/1; surface/image-circle audits pass.
- D13 internal gap no longer called BF; numerical aperture1.85 replaces1.8. Explicit source0.8m endpoint preserved (paragraph60 defines object-to-image). Countermotion+3.838/−6.762mm verified; retained0.001mm sum residual. Rounded equivalent-air table yields0.802896514m, beta−.124922385.
- All isolated element focal lengths recalculated. All twelve named catalog counterparts are compatible inferences; removed unsupported L12 APD/chemistry claim and L13 patent APD/dPgF0.032. FCD705/J-PSKH4 replace vague L12/L31 names. Public notes no longer assert confirmed production glass, motors, bokeh or speculative manufacturing explanations.
- Source limitations: printed physical track110.810 vs summary111.35mm; calculated EFL82.222194 vs summary83mm. These are documented discrepancies, not attributed to table rounding, cover-glass focal-length conventions or matrix method. No speculative radius adjustment hides them. L42 finite numerical R16 takes priority over plano-concave prose.
- Production baseline and local infinity/near/half/f16 inspected. Near80cm, D7/D10/D11/D13=10.02/9.45/5.15/8.82 and EFL75.61; half1.60m, gaps8.10/11.36/8.53/5.44, EFL78.96; f16 stop3.15mm. Front/rear groups remain fixed and the two inner groups move oppositely.

Batch21–30 full gates and commit pending; source-summary contradictions remain follow-up.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the equivalent-air d21 (12.974852 mm) with Example 3's physical rear stack (PDF p. 17, surfaces 21–23 and
  bf, confirmed on the rendered page): d21 = 11.000 mm, then `rearPlates` PT 1.600 mm, nd 1.51680, νd 64.20
  (J-BK7A, catalog-compatible), and bf 0.92 mm to the image. The patent text states PT stays fixed during focusing,
  so one trailing gap covers both keyframes.
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and 0.8 m (worst |Δ|
  2e-15), because the old d21 was the exact fold. Physical track grows by 0.545 mm, to 110.811 mm at infinity (the
  printed row sum); the TL 111.35 mm summary discrepancy remains open.

## 2026-10-07 — Source contradiction recorded as unresolved `sourceErrata`

- JP 2020-173366 A Example 3 (pp. 16–17, ¶0069–¶0070) states FL 83.00, FNO 1.85, 2ω 29.26, TL 111.35, bf 0.92. The
  printed rows, which the file carries unchanged, trace to EFL 82.222194 mm and a first-surface-to-image track of
  110.811 mm (0.778 mm and 0.539 mm short of the summary). The axial marginal ray at the F/1.85 entrance height
  (22.222 mm) crosses the axis 0.137 mm short of the near-axis focus.
- Added one `unresolved` entry; no `R`, `d`, `nd` or `νd` changed. This turns the 2026-09-08 note "source-summary
  contradictions remain follow-up" into a recorded, still-open contradiction; the isolation work is the Nikkor Z 85
  row in `agent_docs/sd-audit-queue.md` Section G.

## 2026-10-27 — Rim-cut figure review

Figure 3 (EX3, PDF p. 20, native 300 ppi CCITT raster 993 × 1228, measured 1:1 on a 300 dpi page render) was read
element by element, both halves, for flat lands square to the axis at the rims of concave faces. Scale 0.1435 mm/px
from the 97.291 mm vertex span; every drawn element edge matches its stored `sd` within 1 px.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 16 (L42 rear, R 64.869) | 0.937 (0.939 / 0.935); dropped (see the beam rule) | 1.85 mm | 15.38 mm | 16.4 | 9.91 mm |

- Lands seen but not cut, because each adds more than 15 points of full-field side vignetting at its own surface
  (clearap, Y = 21.6 mm, infinity):
  - 4 (L12 rear): q 0.889, would be depth 1.80 / radius 21.33 mm (axial 20.37); 43 % → 59 %.
  - 7 (L14 rear): q 0.849, depth 2.15 / radius 18.68 mm (axial 17.59); 23 % → 45 %.
  - 10 (L22 rear): q 0.854, depth 4.18 / radius 15.29 mm (axial 14.40); 0 % → 19 %.
  - 20 (L45 front): q 0.907, depth 4.58 / radius 17.42 mm (axial 3.85); 0 % → 25 %. It would also shrink the engine's
    half-field estimate from 17.85° to 16.81°.
- On the engine's vignetting curve at infinity, 10 and 20 alone would leave transmission unchanged and 7 would lower
  it by 1 point at full field (3 points at mid-field), because surfaces 1–2 and 13 already trim those sides of the
  bundle more; 4 alone would take full-field transmission from 0.577 to 0.493.
- Surface 19 (L44 rear, R 130.583) runs to its edge: its rim is nearly square to the axis, and no land departs from the
  curve by a resolvable pixel.
- No cap reaches the stop plane: surface 10 clears it by 3.53 mm at the closest state (0.8 m focus, D10 9.445).
- The cut on 16 was dropped under the beam rule below: the wide-open beams reach its 16.4 mm rim, so no land is left
  to draw. Surface 16 runs uncut to 16.4 mm, and the side vignetting (25 % → 35 % at infinity, 0 % → 8 % at 0.8 m)
  and the engine transmission drop (0.577 → 0.546, 0.779 → 0.766) measured here for the cut no longer apply.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). Traced against that rule, these cuts from the figure review above were changed:

- Surface 16: the beams reached 16.37 mm there, within 0.1 mm of the 16.4 mm rim, so no land was left to draw, and the
  cut was removed. On the paraxial stop (#933), with the rule's current search, which follows each beam to the field
  where it vanishes, they reach the 16.4 mm rim itself (focusT 0.80, 15.33°).

The lens carries no cut, and the surface audit and the beam rule pass.

## 2026-10-29 — Surface-height and concave-rim reinspection

Reopened `patents/JP2020173366A.pdf`, Example 3, Figure 3 (PDF p. 20, lower-left EX3 panel), and inspected every element at 600 dpi. The 97.291 mm first-to-last-vertex span gives about 6.97 native px/mm. The figure's element edges continue to agree with the stored rims; its short concave lands on 4, 7, 10, 16 and 20 would reduce existing clear apertures. No separate taller air-side edge can be added while preserving those caps. The earlier full-beam checks remain the reason those inferred cuts are excluded, especially 16 where the beam reaches the 16.4 mm rim. The almost-flat face 19 does not resolve a land.

No geometry changed. `audit:surface` passes; `audit:image-circle` reports 0 undersized and 0 skipped. The source-summary contradiction and the existing optical apertures remain explicitly qualified; no speculative prescription correction or clipping change was made.

## 2026-10-29 — Glass-only reinspection

Freshly rendered and inspected `patents/JP2020173366A.pdf`, Example 3 (¶0069–¶0070), PDF pp. 16–17. All 12 lens-element nd/νd pairs and the PT rear plate match the d-line table; Example 2's different rows on the top of p. 16 were excluded. L14 is 1.85025/30.05, L43 1.84850/43.79 and PT 1.51680/64.20 as stored.

Each annotation resolves compatibly: L11 S-LAH66, L12 FCD705, L13 S-FPL51, L14 H-ZLaF76, L21 PBH21, L22/L44 J-F5, L31 J-PSKH4, L41 TAFD35, L42 H-ZF2, L43 J-LASFH22, L45 SF2, and PT J-BK7A. All 12 lens elements plus PT have coefficient-backed catalog curves. No source line-index or partial-dispersion measurement supports restoring the former L12/L13 APD claims; their false flags and qualified analysis remain correct. Exact-coordinate or compatible matches do not establish production material chemistry or suppliers.

No change was required. `assertCatalogConsistent()` and the scoped resolver review pass; the three shared glass suites pass (94 tests). Geometry and the separately documented source-summary contradiction are unchanged.
