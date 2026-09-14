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
