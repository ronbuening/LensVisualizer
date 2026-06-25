# Audit Log - Minolta AF Reflex 500mm f/8

Patent: US 4,951,078, Table 1 / Figures 4, 6, 9, 10

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/US4951078.pdf`.
- Table 1 confirms the repeated `1.67000 / 57.07` glass used by the primary Mangin blank / central relay plug and rear meniscus.
- The patent and product documentation support the annular aperture, central obstruction, and required rear plug-in filter treatment already present in the model.

### Glass and APD disposition

- Changed the repeated `1.67000 / 57.07` rows from closest-neighbor prose to explicit `670571` lanthanum-crown code labels.
- Kept BSC7/N-BK7-class and LAC8/N-LAK8-class rows unchanged.
- No ED, fluorite, or APD status is supported; color correction is mirror-dominant and ordinary refractive glass remains appropriate.

### Semi-diameter disposition

- The patent does not provide ordinary clear-aperture semi-diameters, but it does define the folded annular geometry.
- Existing outer SD and `innerSd` values were reviewed against the patent figures: the primary annulus, secondary obstruction, clear central plug, rear relay, and field-corrector proportions remain coherent. No SD edits were made.

