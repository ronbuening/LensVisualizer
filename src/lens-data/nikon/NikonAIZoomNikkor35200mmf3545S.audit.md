# Audit Log — Nikon AI Zoom-Nikkor 35-200mm f/3.5-4.5S

Patent: US 4,770,511, Example 2 / Table 2

## 2026-06-19 — Local patent and figure review

- Local patent source: `patents/US4770511.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Table 2 and Fig. 3.

### Prescription and layout

- Table 2 was matched surface-by-surface against the data file: radii, thicknesses, refractive indices, Abbe numbers, and variable gaps agree with the printed wide/telephoto/macro states.
- The patent does not tabulate a stop surface. Fig. 3 and the production cross-section place the aperture in the third group, so the data file inserts a flat `STO` in the narrow L7-L8 gap by splitting the printed `d15 = 0.10 mm` into 0.05 mm on each side.
- The patent publishes variable intergroup gaps rather than an image-side back-focus value for the viewer. The data file uses computed back-focus values for the rendered image plane while keeping the printed intergroup geometry intact.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The selected SDs follow Fig. 3's relative envelope: larger front group, small variator and aperture-bearing third group, then a moderately larger rear relay. The values pass rim, edge-thickness, and cross-gap clearance constraints for the authored states.

### Glass disposition

- Stored `nd`/`vd` values match Table 2.
- Catalog-class labels were retained only where the match is exact or close enough to describe as a class.
- L12 (`796/410`) and L14a (`518/603`) remain unmatched; J-LASFH9A/J-LAK8/J-SFH2/PKH1-class labels remain class-level identifications rather than coefficient-backed exact assignments.

## 2026-07-30 SUMITA BALK3 coefficient recovery

- SUMITA's discontinued-inclusive BALK3 vendor polynomial resolves L14a at `1.51835 / 60.34` within patent rounding.
- Relabeled L14a as a BALK3 optical equivalent while leaving the production supplier unspecified.
- L12 (`796/410`) remains unresolved; no prescription or zoom data changed.

## 2026-08-18 — NBFD2 equivalent backfill

- Re-rendered `patents/US4770511.pdf`, PDF page 12. Example 2 / Table 2 row 24 confirms
  `nd = 1.79631` and `νd = 40.98` for L12.
- Assigned the existing HOYA NBFD2 curve as an optical equivalent. Its catalog coordinate
  (`1.797199 / 41.1438`) differs by `Δnd = +0.000889` and `Δνd = +0.164`, inside the runtime
  consistency window. The patent code is retained and the production supplier remains unspecified.

## 2026-08-18 - Remaining Example 2 coefficient backfill

- Visually rechecked Example 2 / Table 2 on rendered page 12 of `patents/US4770511.pdf`; the rows confirm L4 at
  `1.90265 / 35.76`, L5b at `1.80411 / 46.43`, and L8 at `1.51860 / 70.08`.
- Assigned J-LASFH9, TAF3D, and J-PKH1 as coefficient-backed optical equivalents. The labels do not identify
  Nikon's production supplier.
- No patent constants, geometry, or zoom states changed.

## 2026-10-17 — V2 source-stated design focal length

Source: US 4,770,511, Table 2, PDF p. 12. Applied the approved focal-length metadata proposal.

| Field | Before | After |
|---|---|---|
| `catalog.focalLengthMm.design` | `[36.23, 194.85]` | `[36.16, 193.96]` |
| Endpoint station focal lengths / labels | 35 / 200 mm | 36.16 / 193.96 mm |

Retained marketing 35–200 mm, all prescription geometry and derived BFDs. The station values and display labels now match Table 2. Interior millimetre-valued zoom links can select a different normalized zoom state; geometry at a fixed normalized state is unchanged.

The approved proposal independently reproduced infinity EFLs of 36.227839 / 194.853344 mm; those traced results remain documented separately. Both endpoint comparisons in the historical zoom-metadata check now have zero difference. This is a metadata correction, not a source-prescription correction.

## 2026-10-30 — Fresh source figure, glass and concave-end review

- Directly inspected original `patents/US4770511.pdf`: Figure 3 on PDF p. 3 at 600 dpi and Example 2 / Table 2 on p. 12, including all 17 glass media. The table defines the d line at 587.6 nm. All source R/d, nd/νd, zoom/macro gaps and inferred stop remain unchanged. No source numerical θgF or additional line indices were found.
- Inspected every air-facing and cemented face. S7 has a resolved concave end land. Local envelope calibration is approximately 10.4 native px/mm (300 dpi scan; 600 dpi inspection); its native edge height is about 125 px. Measured cap/edge q ≈ 0.844, with one-native-pixel range approximately 0.829–0.859. The diagram is not a uniform metric scale; the adopted outer radius is 12.0 mm rather than a claim of published clear aperture.
- Set S7 outer sd from 11.5 to 12.0 mm and `rimCutDepthMm: 2.64`, giving cap 10.85585556 mm, q = 0.904655 and land 1.14414444 mm. The measured endpoint would clip beams, so the cut is moved outward to the most inward passing 0.01 mm depth. Full guard reach is 10.79180672 mm at zoom/focus 0.8/0.8 and field 15.790911°; required margin 0.05 mm, actual clearance 0.06404884 mm, no untraced states. Other caps/lands are retained without speculative extra clipping.
- All 17 media resolve to compatible current coefficient curves; native/source differences remain qualified. L2's J-FKH1 label no longer asserts fluorophosphate composition or APD from its high Abbe number. Catalog-only partial-dispersion or line-index overrides are not added. Public text now reflects the actual retained stop and qualified proxies.
- Focused surface/cut, image-circle and field checks pass. Aperture remains the pre-existing tele rim limitation: source f/4.5 traces f/5.14 at S19; wide passes. A minimal ten-cap continuous opening trial requires up to 15.5% growth and fails unchanged gaps 10→11 (2.48 mm intrusion versus 2.43 allowed) and 17→18 (0.75 versus 0.72). Rejected that trial without changing source gaps, stop or tolerances. Nine actual SVG zoom/focus states were viewed; no automatic rim trimming. Catalog consistency passes.
