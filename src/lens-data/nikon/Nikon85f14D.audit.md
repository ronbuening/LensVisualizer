# Audit Log - Nikon AF NIKKOR 85mm f/1.4D IF

Patent: US 5,640,277

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/US5640277.pdf` (untracked local file).
- `pdftotext -layout` extracted the Example 2 prescription table.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 5 | 1.79631 / 40.90 | `Dense Lanthanum Flint (LaSF3 / NBFD15)` | `S-LAH52 (OHARA, patent nd/vd match)` | OHARA S-LAH52 is the resolver-friendly catalog-tolerance candidate; the old NBFD15 token resolves to a different modern HOYA glass. |
| L6 positive / row 15 | 1.86994 / 39.82 | `Very Dense Lanthanum Flint (TAFD30)` | `TAFD32 (HOYA, patent nd/vd match)` | HOYA TAFD32 clears the prior TAFD30 mismatch. |
| L8 / rows 17/19 | 1.74810 / 52.30 | `Lanthanum Crown (S-LAM66)` | `S-LAM60 (OHARA, patent nd/vd match)` | OHARA S-LAM60 is the resolver-friendly catalog-tolerance candidate. |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 5,640,277 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for US 5,640,277 / `5640277`; no matching local PDF is present.
- `US5764425.pdf` is a different Ohshita telephoto patent and was not used to override the data.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-07-29 - Local-patent glass disposition

- The cited source is now available locally as untracked `patents/US5640277.pdf`. Rechecked Example 2; the
  stored R, d, nd, and νd values remain unchanged.
- S5 `S-LAH52 (OHARA)` -> explicit unmatched 796409 patent glass at 1.79631 / 40.90.
- S19 `S-LAM60 (OHARA)` -> explicit unmatched 748523 patent glass at 1.74810 / 52.30.
- Neither current OHARA row reproduces the patent coordinate. Synchronized the element narratives and glass table
  without assigning a speculative supplier.
- Removed S19's former inferred-APD flag because it depended on the rejected S-LAM60 identity and the patent
  publishes no partial-dispersion evidence.

## 2026-07-29 - `796409` coefficient-source review

- Visually rechecked Example 2 row 5 at `nd = 1.79631`, `vd = 40.90`; the stored radius and thickness
  also match the printed table.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  OHARA S-LAH52 is `1.799516 / 42.225007`, outside the runtime d-line tolerance, while Hikari J-LASF03
  is a materially different `1.80610 / 40.97`.
- Retained the explicit unmatched `796409` annotation. No supplier or nearest-neighbor glass was assigned,
  and no prescription geometry changed.

## 2026-07-30 - `748523` family review

- Rendered and visually rechecked Example 2. S19 remains `nd = 1.74810`, `vd = 52.30`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. The closest
  plausible rows are around `1.741 / 52.6` or `1.755 / 52.3`, outside the accepted d-line residual.
- Retained the explicit unmatched `748523` annotation without a supplier or APD claim. No prescription geometry
  changed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked US 5,640,277 Table 1 on rendered PDF page 34: L2 is `1.79631 / 40.90`.
- HOYA's official obsolete-inclusive catalog now supplies NBFD2 at `1.797199 / 41.143795` (`797411`), within
  `+0.000889 / +0.243795` of the patent coordinate and inside the runtime compatibility window.
- Relabeled L2 as an NBFD2 optical equivalent and synchronized the analysis. The label does not identify Nikon's
  production supplier; `748523` remains unresolved and no geometry changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Revisited L8/S19 after recovering Hikari's discontinued E-LAKH1 coefficient row from its official 2022-07-01
  optical-glass catalog. E-LAKH1 is code `748523` at `nd = 1.748099`, `νd = 52.304982`, an exact rounded match to
  the patent's `1.74810 / 52.30` coordinate.
- Relabeled L8 as an E-LAKH1 catalog equivalent and synchronized the analysis. This supersedes the earlier
  current-catalog no-match disposition but does not identify Nikon's production supplier; no geometry or APD claim changed.

## 2026-09-08 — First-hosted audit, lens 24

- Original `patents/US5640277.pdf`: titlep.1, Figure4p.5 at600dpi, Figure5p.6, Example2 numeric table/textp.34. All20 surface rows and ten glass coordinates verified. No source geometry or focus gaps changed.
- Corrected element/component counts9/8→10/9. Example2 has split L1 singlets and a two-element L6; the prior production identification miscounted these. Catalog association now explicitly a patent candidate, not an asserted production match. Added publication suffixA; retained canonical author spellingKouichi, noting sourceKoichi in analysis.
- Source aperture1.43 replaces1.4 in controls/specs; Figure5 full fieldapproximately28.6° replaces28°30′. Marketing aperture remains1.4.
- All ten isolated focal lengths recalculated; notably L2 371.4→261.8mm and L8 1341.8→1300.2mm. Glass names qualified; L1b uses compatible inferred J-PSKH1. Source indices/Abbe numbers retained.
- G2 and stop travel10.3438mm objectward, outer groups fixed. D18 incorrectly labeledBF→G2–G3. ActualBF38.1199mm fixed. Matrix reproduces84.999905mm infinity EFL, nearβ−0.100001884 and inferred0.955706213m object-image distance; near slider0.85→0.955706213m. Source contains no cover/filter surface.
- Figure4-derived inferred rims adopted: front36mm, second32.5mm, L2 28mm, L3 23.5mm, G2 18/17.5/17.3mm, rear17.3mm. Crossing-ray/callout envelopes excluded; thin front components constrain usable rims.
- **Follow-up:** render diagnostics caught S12/S14 being trimmed1.62/1.42mm around the stop despite surface validator passing. Both declared radii set15.8mm, below the measured15.8767mm rendering clearance, so no hidden trimming remains. This is a recorded figure-versus-clearance limitation, not an exact rim match on those two surfaces.
- Production and local infinity/near/half-focus/f16 verified. Local announces10elements, f1.43; near96cm/EFL80.40; midpoint1.91m, gaps12.63/6.37 and f16 stop2.65mm. Three source/geometry/glass tests pass. Surface/image-circle checks pass; full21–30 gates/commit pending.

## 2026-10-29 — Nikon F-mount figure and fresh glass review

- Directly reopened original `patents/US5640277.pdf`, Example 2: Figure 4 on PDF p. 5 at 600 dpi, and all media, d-line definition and published focus spacings on p. 34. All ten media and every air/cemented face were checked. Native raster is 300 ppi; the approximately 80 mm optical vertex span gives about 14.5 native px/mm. Source hatching, crossing rays and group/callout lines were excluded from optical edges.
- S6 and S8 have resolved concave rear cap-end lands. Native normalized measurements are approximately 354/404 and 295/340 px: q=0.876±0.0046 and 0.868±0.0055. Adopt inferred cut depths 6.35 and 8.36 mm, giving cap radii 24.55533 and 20.39940 mm inside retained 28 and 23.5 mm outer rims. The S6 6.34 mm trial has radius 24.5372 mm and fails the beam rule: the maximum beam radius is 24.4769 mm at focus 0.250 / field 10.31°, requiring 24.5505 mm including the 0.3% margin. Move that cut outward by one 0.01 mm depth step. Both accepted cuts pass the complete sweep; no source depth or bypass flag is claimed.
- S12 and S14 keep their 15.8 mm optical caps, while `rimExtensionSd` 17.5 and 17.3 mm restore the source blank heights around the stop. Their curved profiles are not extended toward the stop. The prior hidden-trim fix therefore remains optically intact while its undersized drawn blanks are corrected. No additional resolved land is established on the other faces; the cemented S15 curve is retained.
- Fresh glass check retains all ten d-line source pairs: L1a 1.60300/65.42; L1b 1.59319/67.87; L2 1.79631/40.90; L3 1.71736/29.46; L4 1.80454/39.61; L5 1.67270/32.17; L6a 1.68893/31.08; L6b 1.86994/39.82; L7 1.78797/47.47; L8 1.74810/52.30. All ten selected catalog counterparts are compatible, including approximate NBFD2 and the qualified discontinued E-LAKH1 coordinate match. No source partial-dispersion or additional line indices are supplied; no APD identity or production supplier is inferred from compatibility.
- Source R/d, iris, focus spacings and candidate/product-correlation limitations remain unchanged. Focused surface/inferred-beam, circle and aperture checks pass. Actual SVG paths at focus/zoom 0, 0.5, 1 are finite with zero hidden trim, and the raster montage was inspected. Catalog consistency passes. Parent records full gates at the triad commit.
