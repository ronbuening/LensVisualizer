# Audit Log — Nikon NIKKOR Z 135mm f/1.8 S Plena

Patent: WO 2024/147268 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2024147268A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; row 26 was cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L14 / row 26 | 1.78590 / 44.17 | `Lanthanum flint (near S-LAM55)` | `S-LAH51 (OHARA, patent nd/vd match)` | OHARA S-LAH51 round-trips the stored patent pair. |

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2024/147268 A1`.
- A nearby local WO file was not used as a substitute because it does not match the referenced patent number.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2024/147268 A1 / `147268`; no matching PDF was present.
- Rendered and inspected local `US20240192474A1.pdf` as a possible nearby publication; it is a Canon/Iwamoto zoom patent, not the cited Nikon Z 135mm Plena family, so it was not used.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-07-29 - Local-patent glass disposition

- The cited source is now available locally as untracked `patents/WO2024147268A1.pdf`. Rechecked the worked
  prescription row; S13 remains 1.69680 / 55.52 and its R/d values are unchanged.
- S13 `Barium crown (near S-BAH27)` -> code-first `697555 — lanthanum crown (patent coordinate; vendor
  unresolved)`. The coordinate round-trips to the catalog code, while S-BAH27 is numerically unrelated.
- Synchronized the focus-element analysis and preserved supplier uncertainty.

## 2026-08-21 — SR spectral-proxy recovery

- Hikari's official 2023 catalog supplies J-SFH4 at `nd = 1.66382`, `νd = 27.346974`, and
  `θgF = 0.6319`. Its computed anomalous-partial-dispersion departure is about `+0.0341`, consistent with L1's
  patent-authored `+0.035` after rounding.
- Kept Nikon's proprietary SR identity explicit and added J-SFH4 only as a catalog spectral proxy. The proxy improves
  wavelength-dependent tracing without assigning Nikon's production supplier; no prescription or APD value changed.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked WO 2024/147268 A1 and assigned supplier-neutral proxies to six additional elements: NBFD25 ×2,
  S-LAH63Q, S-LAH55VS, NBFD30, and J-LASF09A.
- Patent-authored partial dispersion is retained for both NBFD25-proxied elements; ambiguous candidates remain
  unassigned and no production supplier is inferred.

## 2026-09-08 — First-hosted audit, lens 18

- Inspected original ignored `patents/WO2024147268A1.pdf`: title p. 1, equation (a) and Table 1 pp. 20–22, dispersion conditions pp. 56–57, Figure 1 p. 66 rendered at 600 dpi. Earlier missing-source dispositions are superseded.
- Corrected source K=1 to standard K=0; retained all four polynomial coefficients and source R/d/nd/ν rows. Replaced the physical rear-stack sum with 11.4681 + 1.6/1.5168 + 1.3712 = 13.8941523 mm air-equivalent BFD. The finite source station gives β≈−0.200007 and inferred physical object-image distance 0.8245544 m.
- Refined drawing-derived rims using 133.0137 mm glass span. Automated RIM readback misidentified L1 and L6 leader ink; original high-resolution optical edges govern those measurements. Retained surface 29 at 19.3 mm: a 21.1 mm trial failed the 29→30 clearance gate (4.61 mm combined sag versus 3.872 mm allowed intrusion). Source drawing extents remain approximate, not asserted clear apertures.
- Converted source normal-line departures to engine dPgF: L1 +0.0343957; L5/L9 +0.0092593. Source precision remains three decimals. Removed approximate L8 override; qualified all catalog counterparts and unsupported production SR/ED, PGM and dual-STM claims. Recalculated all 16 isolated element focal lengths.
- Kept opposite-direction G2/G4 gap endpoints, labeled each group boundary, preserved f/1.85 in the aperture shortcut. Rewrote analysis around source values and explicit inferences.
- Production baseline inspected live. Local infinity, near and half-focus/f16 states inspected: near EFL 98.82 mm, 82 cm distance, five-group movement chart with maximum travel 13.60 mm; half-focus 1.65 m/EFL 113.79 mm and stop diameter 4.96 mm at f16. Fixed groups and disabled zoom chart confirmed.
- Surface and image-circle audits passed; four patent regression tests passed (matrix conjugates, normal-line conversion, group motion and five-state render diagnostics). Full gates and commit remain at the 11–20 batch boundary.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Table 1 (PDF pp. 21–22, printed pp. 19–20) and Figure 1 (p. 66): surface 31 d = 11.4681, filter FL surfaces 32–33 t = 1.6000, nd = 1.51680, νd = 64.14, then 1.3712 mm to the image. The gap before the filter is not in the variable-gap table, so it is fixed through focus. 11.4681 + 1.6/1.5168 + 1.3712 reproduces the legacy 13.8941523 mm air-equivalent BFD exactly.
- Surface 31 now stores the physical 11.4681 mm, and the filter is a single `rearPlates` entry labeled FL. The glass is N-BK7, which matches L6's label for the same 1.51680/64.14 coordinate; `resolveCompatibleGlass` accepts it, and J-BK7A also matches. `closeFocusM` already used the physical object-to-image distance, so it is unchanged.
- The plate check passed: EFL and paraxial defocus are identical to the folded model at infinity and at close focus (worst |Δ| 7e-15). The physical track grows by 0.545148 mm, which equals 1.6 × (1 − 1/1.5168). The surface and image-circle audits are clean.

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 66, native 300 ppi 1-bit raster, axis vertical) was read on both halves, element by element, for flat
lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Each land was located by
fitting the drawn cap to the prescription sag and finding where the ink stops following it (15.40 px/mm from the
133.01 mm vertex span); q is the cap end over the element edge, averaged over the two halves.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 4 (L2 rear, R 226.522) | 0.967 | 2.67 mm | 34.68 mm | 35.9 | 33.23 mm |
| 9 (L5 rear, R 50.025) | 0.878 | 6.16 mm | 24.05 mm | 27.4 | 22.46 mm |
| 14 (L7 rear, R 39.422) | 0.957 | 5.06 mm | 19.32 mm | 20.2 | 16.95 mm |
| 23 (L12 rear, R 83.184) | 0.96 | 2.82 mm | 21.48 mm | 22.4 | 11.82 mm |

- Surface 9's sd (27.4) is L5's own drawn edge, smaller than the L4/L5 junction's 28.9, so its cut uses 27.4. Its
  cap came within 0.073 mm of the stop plane; the land now sits 2.08 mm ahead of it. No cap crosses the stop.
- Concave faces with no resolvable land: 15, 17, 19, 25, 29 and 30 run to their element edges; 12 and 26 are too
  shallow (sag at sd 0.28 and 0.41 mm) for a land to show. Surface 2 shows at most an 8 px flat (q ≈ 0.986), below
  what the raster resolves. Surface 6 (q ≈ 0.975) leaves the cap by only 1.6 px at its 7° rim slope, and surface 27
  shows a 12 px flat on one half but about 4 px on the other; both are at the resolution limit and are not cut.
- The aperture audit is unchanged (f/1.85 within 3 %, no rim, trace or failed rows, no rim-cut limiter); the surface
  and image-circle audits are clean. At the full-field corner (Y = 21.6 mm, infinity) the side vignetting at 4 goes
  from 14 % to 17 % and at 23 from 17 % to 25 %; 14 adds 2 %, and 9's cut lies outside the full-field bundle
  (23.19 mm). At close focus only 4 clips the corner bundle (11 % to 15 %).

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). Traced against that rule, these cuts from the figure review above were changed:

- Surface 4: the beams reach 35.09 mm there (infinity, near 3.0°), past the figure's 34.68 mm cut. The depth goes from 2.67 to
  2.76 mm, which puts the cut radius at 35.25 mm, 0.16 mm outside the beams; the land is shorter than the figure's.
- Surface 23: the beams reach 21.72 mm there (focus 0.95, between keyframes, near 10.4°), past the figure's 21.48 mm cut. The depth goes from 2.82 to
  2.91 mm, which puts the cut radius at 21.81 mm, 0.09 mm outside the beams; the land is shorter than the figure's.

The other cuts clear the beams by their margins, and the surface audit and the beam rule pass.
