# Audit Log — NIKON NIKKOR Z 85mm f/1.8 S

Patent: JP 2020-173366 A, Example 3

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Patent evidence

- Referenced local patent `patents/JP2020173366A.pdf` was not present, so the public patent PDF was fetched to `/tmp/JP2020173366A.pdf` for this review.
- The public patent text for Example 3 confirms the relevant glass rows:
  - row 6 / L14: nd = 1.85025, νd = 30.05
  - row 17 / L43: nd = 1.84850, νd = 43.79

### Glass corrections

| Element | Before | After | Disposition |
|---|---|---|---|
| L14 | `Dense flint (code 850301)` | `H-ZLaF76 (CDGM, 850301)` | CDGM H-ZLaF76 public datasheet gives a coefficient-backed near-exact match, code `850301`. |
| L43 | `Lanthanum crown (code 849438)` | `J-LASFH22 (Hikari, 849438)` | Hikari 2023 catalog gives a coefficient-backed exact match, code `849438`. |

### Catalog-search disposition

- Added CDGM H-ZLaF76 to the glass catalog using published Sellmeier constants from the CDGM datasheet.
- Added Hikari J-LASFH22 to the glass catalog using the Hikari 2023 formula-3 power-series coefficients.
- Updated the analysis notes to identify both catalog-backed glass assignments and keep the remaining unresolved codes unchanged.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L21 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-09-08 — Complete source and live-view review

Retrieved [original JP2020173366A PDF](https://patentimages.storage.googleapis.com/b5/81/fe/574f1257cb4adc/JP2020173366A.pdf) into ignored patents/ (prior temporary copy unavailable). Example3 rows pp.16–17, definitions pp.13–14 and exact Figure3 p.20 at600dpi checked. All twenty glass boundaries, stop, nd/vd and source gaps match. No aspheres. Twelve elements/eight components retained.

- PT22–23 remains omitted. Corrected rear equivalent-air gap13.52→12.974852320675106 mm =11+1.6/1.5168+0.92. The focused regression caught a0.001mm transcription typo in the initial audit edit; the final formula assertion and all three tests pass.
- Figure optical rims refined using97.291mm vertex span, excluding callouts/plate/arrows:28,24,22,17.9,15.4,16.4,17.9,19.2mm by successive air-separated component. All runtime rims untrimmed at0/.5/1; surface/image-circle audits pass.
- D13 internal gap no longer called BF; numerical aperture1.85 replaces1.8. Explicit source0.8m endpoint preserved (paragraph60 defines object-to-image). Countermotion+3.838/−6.762mm verified; retained0.001mm sum residual. Rounded equivalent-air table yields0.802896514m, beta−.124922385.
- All isolated element focal lengths recalculated. All twelve named catalog counterparts are compatible inferences; removed unsupported L12 APD/chemistry claim and L13 patent APD/dPgF0.032. FCD705/J-PSKH4 replace vague L12/L31 names. Public notes no longer assert confirmed production glass, motors, bokeh or speculative manufacturing explanations.
- Source limitations: printed physical track110.810 vs summary111.35mm; calculated EFL82.222194 vs summary83mm. These are documented discrepancies, not attributed to table rounding, cover-glass focal-length conventions or matrix method. No speculative radius adjustment hides them. L42 finite numerical R16 takes priority over plano-concave prose.
- Production baseline and local infinity/near/half/f16 inspected. Near80cm, D7/D10/D11/D13=10.02/9.45/5.15/8.82 and EFL75.61; half1.60m, gaps8.10/11.36/8.53/5.44, EFL78.96; f16 stop3.15mm. Front/rear groups remain fixed and the two inner groups move oppositely.

Batch21–30 full gates and commit pending; source-summary contradictions remain follow-up.
