# Audit Log — Nikon NIKKOR Z 26mm f/2.8

Patent: WO 2023/190222 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2023190222A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; matching rows were cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 4 | 1.59270 / 35.3 | `S-TIM2 (OHARA)` | `S-FTM16 (OHARA, patent nd/vd match)` | OHARA S-FTM16 clears the prior S-TIM2 mismatch. |

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2023/190222 A1`.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2023/190222 A1 / `190222`; no matching PDF was present.
- Rendered and inspected local `US20230341664A1.pdf` as a possible nearby publication; it is a Fujifilm/Shimada imaging-lens patent, not the cited Nikon Z 26mm family, so it was not used.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-09-08 — First-hosted audit, lens 20

- Original local `patents/WO2023190222A1.pdf`: title p.1; paragraphs195–210 pp.33–34; Table1 pp.35–36; exact Figure1 p.63 at600dpi. No substitute publication used.
- Corrected all four conics to standard convention: S1/S11/S14 K=0, S10 K=−0.7036. Restored S10 A16−9.66e−14 and A18+1.31e−15. Other source radii, thicknesses, glass coordinates and polynomial coefficients retained.
- Source aperture2.90 replaces2.8 in numerical metadata/control. Eight physical elements remain; air-separated group count corrected4→6, distinct from the patent's four optical sections. Nine refractive media preserve L8's source resin/glass construction. Removed unestablished UV-curing and PGM claims; catalog glass labels qualified, L4 uses compatible J-LASF09A and L6 M-BACD12.
- Original figure calibrated against27.39mm glass span. Inferred front rim5.5mm, first pair5mm, L6 7.3mm, L7 up to9.7mm, resin12.2mm, rear14mm. Retained S9 radius6.2mm after6.3mm trial exceeded9→10 clearance (2.64mm versus2.628mm). Mechanical outer resin/glass flange excluded.
- BFD10.760/15.873mm retained; paragraph208 already defines it as air-equivalent. No cover/filter surfaces added. Matrix reproduces26.77994mm EFL and inferred near distance0.199991m. All surfaces including stop translate objectward5.113mm.
- Production and local infinity/near/half-focus/f16 checked live: source f2.9, eight elements/six components, four-section movement chart maximum5.11mm, nearBF15.87 and20cm; half-focus40cm/BF13.32 and f16 iris1.61mm. Composite resin remains intact with corrected shape.
- Four source tests and surface/image-circle audits passed. Full11–20 batch gates follow before commit.

- Batch glass-report RCA: the named S-BAL41 catalog entry is incompatible with the source 1.58313/59.46–59.5 coordinate. Replaced the misleading label with inferred M-BACD12, which preserves the source values and resolves compatibly. Added an explicit resolver regression; the regenerated catalog-mismatch report is empty.

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 63, native 300 ppi raster, axis vertical) was read element by element on both halves for flat
lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Scale 50.5 px/mm from the
27.39 mm first-to-last vertex span.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 2 (L1 rear, R 13.383) | 0.89 (0.888 / 0.896) | 0.93 mm | 4.90 mm | 5.5 | 4.46 mm |
| 10A (L6 front, R −9.528) | 0.88 (0.880 / 0.889) | 2.26 mm | 6.45 mm | 7.3 | 2.97 mm |
| 12 (L7 front, R −9.362) | 0.765 (both halves) | 3.37 mm | 7.19 mm | 9.3 (was 7.2) | 2.31 mm |

- Surface 12: the 2026-09-08 audit had put its sd at the cap end (7.2 mm), below rear face 13 (9.7 mm), so the
  section drew a slanted edge. Figure 1 draws L7 with a square edge at the rear face's height (9.78 mm) and a long
  land down to the cap. The sd now rises to 9.3 mm, just inside the face's 9.362 mm radius of curvature (a sphere's
  sag is undefined past it), so the edge rises only 0.4 mm to 13's 9.7 mm. The cut keeps the traced cap end at the old
  rim (depth rounded down: 7.193 mm), so tracing is unchanged; the figure's own cap end would sit at 7.42 mm.
- Concave faces with no land: 4 (L2 front) and 9 (L5 rear) run to their element edges. 14A (L8 resin front) reaches
  the resin edge with a short near-flat run that matches its low aspheric rim slope, not a resolvable land.
- The flat on L8's glass front from the resin rim (12.2 mm) to the glass edge (14 mm) belongs to cemented junction
  15, the mechanical flange the 2026-09-08 audit excluded; the L4/L5 step is the larger L5 front beyond cemented
  junction 8. Neither is an air-side land.
- No cap reaches the stop plane (unit focus moves the stop with the optics): the cut raises surface 2's clearance
  from 0.44 to 0.69 mm; surface 4 clears it by 1.26 mm.
- The aperture audit is unchanged: the stated f/2.90 traces within 3 %, with no rim, trace, failed or rim-cut rows.
  At the full field (image height 21.6 mm, ω 41.0°) side vignetting at surface 2 goes from 0 to 3 % and at 10A from
  0 to 13 %; surface 12's cut lies outside the full-field bundle (6.96 mm).
- No land was skipped.
