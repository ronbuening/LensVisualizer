# CARL ZEISS JENA R-BIOTAR 100mm f/0.9 (US 1,967,836 Design) — Audit

## Source

US 1,967,836 A, _Photographic Lens_, Willy Merté, published July 24, 1934; filed December 29, 1933, with German priority December 30, 1932. The source names the firm Carl Zeiss, Jena, Germany; Carl-Zeiss-Stiftung is the catalog's organizational name. There is one numerical example, printed in millimetres at f = 100 mm and f/0.90. The image-field diameter is approximately 25 mm.

## Transcription

The drawing-sheet and specification tables agree on all nine radii, the five glass thicknesses, four air intervals, five indices and five Abbe values. All finite radius signs are explicit. R6 is plane; R8 cements L4 to L5. The diaphragm A lies between L2 and L3, at the printed 43.80/16.59 mm split. Two independent readings of the page images found no numerical transcription mismatch. Both tables use lowercase nd, and claim 3 explicitly specifies the d-line.

## First-order

The printed f = 100 mm gives a computed EFL of 99.997626 mm. The paraxial f-number is 0.900; the computed back focal distance is 26.004567 mm, which supplies the unprinted image spacing. The vertex length is 176.81 mm and the first-vertex-to-image distance is 202.814567 mm. The derived half-field is 7.1614113°, where the real chief ray reaches the stated image radius of 12.5 mm.

The inferred iris radius is 37.268886 mm. Exact axial tracing gives an accepted entrance radius of 52.292331 mm and a real-ray aperture of f/0.956140; the nominal f/0.90 marginal ray needs an iris radius of 39.987373 mm. This distinction between paraxial and real-ray aperture is retained.

## Not Printed

Back focal distance, numerical field angle, clear rim radii, physical iris opening, named glass suppliers, partial dispersion and close-focus data are not printed. The image plane is paraxial, the field angle follows the stated image diameter, and clear rims and iris opening are inferred. The optical direction follows the source's reduction convention. No finite-conjugate performance or production minimum focus distance is assigned.

## Product

Kaprelian's July 1949 _Objective Lenses of f/1 Aperture and Greater_, Fig. 2a and accompanying description, connects Merté's R-Biotar f/0.85 with the same Petzval-derived five-element, four-group form, including the separated front elements and added collective element. A 45 mm f/0.85 production lens is documented, including Flints Auctions lot 264 of May 23, 2023. This supports the R-Biotar family association; it does not identify the 100 mm f/0.90 prescription as an exact production design. Sources are linked in the companion analysis.

## Corrections

The five spectral references are corrected from sodium D to helium d, following the printed notation and claim 3, without changing any source index or Abbe value. Schott FK3 is a catalog match for L3; the other historical glasses remain unidentified. No correction to a printed prescription value is required.

## Remaining Questions

Open: The inferred rims differ from the figure, especially L1's near-knife front rim, L2's chamfered rear face and L3's unequal rims. Figure estimates are L1 about 61/61 mm; L2 about 61/52.6 mm with a chamfer to about 61 mm; L3 about 45/45 mm; rear doublet about 26 mm, with its rear optical face about 23 mm. The retained radii are 66/60.5/55/54/48/42/27/26/27 mm. The drawn diaphragm opening is schematic.

Open: The exact production prescription and historical glass melts are unknown. DE 607,631 is a reported counterpart whose page images have not been established here; no independent corroboration from that document is claimed. Geometric MTF at the image edge retains pupil-aiming uncertainty, and measured spectral and finite-conjugate performance remain unknown.

## 2026-11-21 — Deployment validation and cleanup

Two independent re-readings of the patent page images compared both numerical tables, all signs, glass values, stop intervals, cementing, orientation and the approximately 25 mm image diameter. The prescription is correct; the spectral notation required correction. Kaprelian's 1949 description and Fig. 2a support the R-Biotar family link, with the production 45 mm f/0.85 and patent 100 mm f/0.90 distinction retained.

- Identity: `merte-us1967836-dline-reference` → `carl-zeiss-jena-r-biotar-100mm-f09-us1967836`; maker unspecified → Carl Zeiss Jena; abbreviated Merté/patent title → `CARL ZEISS JENA R-BIOTAR 100mm f/0.9 (US 1,967,836 Design)`; visibility false → true.
- File form: the external relative type path → `../../types/lensDataV2.js`; `data` → `LENS_DATA`; a single English source header records printed and inferred quantities.
- Subtitle: the 100 mm f/0.90 reduction-direction and identity caveats → `US 1,967,836 A, sole example — R-Biotar family design`. The nine long specification lines → `5 ELEMENTS / 4 GROUPS`, `DESIGN F/0.9`, `ALL SPHERICAL`; optical limits are explained in the analysis.
- Glass: all five `indexReference` values D → d. L1, L2, L4 and L5 receive Unmatched labels with their unchanged printed nd/ν pairs. L3's generic Unmatched label → `FK3 (Schott)`, resolving to Schott nd 1.46450 / νd 65.77; Δnd +0.00001 and Δνd −0.03. This is a catalog match, not identification of the historical melt.
- Elements: labels L1–L5 → Element 1–Element 5, with L1–L5 retained as diagram labels; optical roles added. In-air focal lengths added: +126.56, −183.65, +210.23, +50.67 and −94.52 mm. L4/L5 receive cemented group C1 and an annotation spanning R7–R9; combined focal length +99.07 mm.
- Focus: the long description → `Infinity focus only; the patent gives no close-focus data.` The infinity distance is written as 1e15. Final image spacing 26.00456696498972 → 26.004567 mm, rounding numerical noise at the same paraxial plane.
- Metadata: image circle 25 mm, counts 5/4, design focal length 100 mm rounded from the computed EFL, nominal f/0.9 and derived 7.1614113° half-field are retained. No production mount, format or minimum focus distance is assigned.
- Analysis and audit: replaced process history and calculation tables with the source identification, architecture, element powers, d-line glass evidence, infinity focus, aperture limits and product-family evidence. The analysis now has its exact lens-name title and the Patent, Inventors, Assignee and Published rows. Unsupported German-table corroboration is removed; the possible counterpart remains open.

Before and after cleanup: EFL 99.997625507 mm, paraxial f-number 0.900, BFD 26.004566965 mm, iris radius 37.268886103 mm and half-field 7.1614113° are unchanged. Surface geometry has no errors; axial aperture has no rim limit or failed station. Image-circle coverage checks one lens with zero undersized surfaces and zero skips. Field coverage reaches 100%: 7.1614° gives 12.50 mm of the 12.50 mm image radius, with a clear corner chief ray. At that field no optical surface cuts the axial marginal or blocks the chief; the rear doublet partly vignettes the nominal bundle, and a lower nominal rim ray cannot be solved. These results retain the separate f/0.956 real-ray iris limit.

Open: Rims versus the patent figure, the physical iris opening, historical glass identities, exact production correspondence, the reported German counterpart and image-edge pupil-aiming uncertainty remain unresolved. No rim values, printed optical dimensions, stop position or source glass values are changed.
