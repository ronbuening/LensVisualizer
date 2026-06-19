# Audit Log — Nikon W-Nikkor 35mm f/1.8

Patent: US 2,896,506, Claim 3

## 2026-06-19 — Local patent and figure review

- Local patent source: `patents/US2896506.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Claim 3 and the patent figure.

### Prescription and layout

- Claim 3 was matched against the data file after scaling the patent's normalized `f = 1` prescription by 35x: radii, thicknesses, spacings, `nd`, and `vd` agree with the printed table.
- The patent places the diaphragm in the `r5`-`r6` air space but does not publish the exact axial split. The data file keeps the printed total spacing by inserting `STO` at the midpoint.
- The patent figure supports the five-component layout: front positive singlet, cemented positive/negative pair, central negative meniscus behind the stop, rear positive singlet, and rear positive/negative cemented pair.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The authored SDs follow the patent figure's compact stop region and larger front/rear component envelopes. They pass rim, edge-thickness, SD-ratio, and cross-gap clearance checks after 35x scaling.

### Glass disposition

- Stored `nd`/`vd` values match Claim 3.
- Current Nikon J-series matches were retained for L1, L4, L5, L6, and L7 where the class assignment is defensible.
- L2 (`662/577`) and L3 (`621/380`) remain intentionally unmatched vintage glasses because no exact coefficient-backed current catalog match was verified.
- `npm run generate:glass-reports` passed with the unresolved L2/L3 rows tracked in coverage reports.
