# Audit Log - Ricoh GR IV 18.3mm f/2.8

Patent: JP2025-069516A

## 2026-06-23 - Source gap and catalog correction pass

- The data file cites JP2025-069516A Example 2, but the local untracked `patents/` folder does not contain that PDF.
- Searched the local patent text cache and the available 2025 patent PDFs for exact GR IV prescription values (`13.353`, `11.258`, `-15.696`, `-13.531`, `8.82985`, `1.80139`, `M-TAF101`). No local source matched JP2025-069516A or the data file prescription.
- Because the cited patent was unavailable locally, surface radii, spacings, aspherical coefficients, Pg,F/APD status, and patent-derived semi-diameters could not be independently verified in this pass.

| Element | Stored nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L23 | 1.76802 / 49.24 | Analysis described this row as S-LAH53 after rejecting the patent's printed S-TIM35 name | `MC-TAF101-100 (HOYA) / M-TAF101 class` | Local OHARA S-LAH53 is 1.80610/40.93 and does not match. The closest coefficient-backed local match is Hoya MC-TAF101-100 / M-TAF101 class. |
| L31 | 1.80139 / 45.45 | `M-TAF101 (HOYA)` | `M-TAF31 (HOYA; PGM, 801455)` | Exact local Hoya catalog/code match for the stored values; confirms high-index PGM status for the final double-asphere element. |

- No APD or dPgF values were added because the patent Pg,F column could not be checked from a local source.
- Existing SDs remain estimates and are not claimed as patent-derived. They are geometrically plausible for rendering: front group largest, reduced stop, compact cemented doublets, larger L23/L31 aspheric apertures, and no obvious disproportion relative to the stored drawing model.
- Data and companion analysis were updated to remove the stale S-LAH53/M-TAF101 claims and to document the remaining source gap.

## 2026-09-08 — First-hosted audit, lens 14

Retrieved original JP2025069516A from Google Patents into ignored `patents/`;
this resolves the earlier missing-source blocker. Example 2 Table 5/6 p18,
equation p15, focus ¶0035 p8, Figure 2 p31 inspected directly.

- All optical R/d/nd/νd and all five aspheric rows verified unchanged.
  Source uses standard1+K. Stop1.14/1.20 mm retained.
- Last gap8.94→8.935624413145538, exact equivalent of omitted plane stack:
  6.976+.77/1.562+.30+.70/1.50+.70. Source BF.70 is only final cover-to-image.
- ¶0035 explicitly objectward integral G1/G2, G3 fixed. Corrected opposite
  direction asserted in old analysis. No finite station published; inferred
  0.12m object-to-image full conjugate requiresD23=5.945331456739211,
  not5.17. Front travel2.845331 mm. Model/slider labels expose inference.
- Nominal aperture2.8→2.89 and first shortcut follows sourceF2.89.
- Named L11/L12/L13/L21/L22 glasses retained. Source L23 S-TIM35 and L31
  M-TAF101 names conflict with their coordinates. Existing compatible
  MC-TAF101-100 / M-TAF31 catalog counterparts labeled inferred; removed
  assertions that their supplier/manufacturing identity is established.
- 600dpi Figure2 optical rims calibrated from18.58mm vertex span:
  1/2=6;3/4=5;5=4.6;7=4.5;8/9=4.6;10/11=5.5;12/13=8mm.
  Trial8/9=4.8 infringed9→10 clearance1.52>1.395mm; rejected.
- Public analysis rewritten to distinguish source, calculated and inferred
  properties and the two source glass-name conflicts.
- Production live∞/12cm before; local∞/12cm/24cm midpoint andf2.89/f16
  after. D23 3.10/5.95/4.52, EFL18.35/17.08/17.69, stop6.48/1.17mm.
  Three-group movement chart objectward2.85mm forG1/G2, G3 stationary;
  labels readable and zoom disabled.
- Surface/image-circle audits and4 focused tests pass (finite conjugate,
  fixed rear vs moving front, plate equivalent, conic, aperture, no trims).
  Full gates and commit pending11–20 batch.
