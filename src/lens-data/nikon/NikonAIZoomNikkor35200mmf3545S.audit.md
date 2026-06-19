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
- `npm run generate:glass-reports` passed with the unresolved glasses tracked in coverage reports.
