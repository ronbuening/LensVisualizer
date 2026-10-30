# Audit Log - Nikon PC-E NIKKOR 24mm f/3.5D ED

Patent: JP 2008-151949A, Example 2

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2008151949A.pdf`; local text confirms the queued nd/vd rows at surfaces 9, 13, and 17.
- Updated surface 9 to `E-FL5 (HOYA)` for nd=1.58144, vd=40.75.
- Updated surfaces 13 and 17 to `S-TIL1 (OHARA)` for nd=1.54814, vd=45.79.
- Remaining coverage gaps are the existing UV-cure resin elements.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2008-151949 A Example 2 surface 4; stored `R`, `d`, `nd=1.80100`, and `νd=34.96` agree with the patent.
- Relabeled L12 from incorrect OHARA `S-LAH63` to Hikari `J-LAF016`, the exact Nikon/Hikari 801349 coordinate.
- Synchronized the analysis discussion and glass tables. No prescription geometry changed.

## 2026-10-30 — Fresh original-figure and glass reinspection

- Directly viewed `patents/JP2008151949A.pdf`, Example2: Figure 3/PDF 19 at 600 dpi; every Table2 medium, R/d and coefficients on PDF 11–12; continued source condition Δν2=38.62 on PDF 13; d587.6 nm definitions PDF 9 and g435.8 nm plot convention PDF 10. Source prose ¶0041/PDF 11 explicitly names two resin-on-glass composite aspheres. It does not specify UV curing. All 15 modeled nd/νd pairs are retained:13 physical glass elements plus2 resin layers. No θgF or per-medium C/F/g anchors are published.
- S1 grows to the source-like25.5 mm front radius. The full Figure 3 hybrid outlines are incompatible with literal profiles: source-like H1 outer 25.5 exceeds the R23.3997 junction domain; H2 common16.5 gives resin edge−1.189 mm. Full common-cap scans pass H1 at 15.7 with only.003086 mm edge and fail15.8 (−.023 mm); H2 passes15.4 with.013815 mm edge and fails15.5 (−.003 mm). Adopted conservative common junction/rear caps15.6/15.3 leave.028451/.029350 mm edges. H1 keeps its larger front face with a connected substrate-to-resin taper; neither hybrid has an unsupported shared-interface land or resin-only wing. These bounds are optical-model limitations, not measured production layer thicknesses.
- Added a source-visible S5 concave rear land: cap grows15.4→16.5 and drawn rim becomes19.5 mm, matching S4. Figure 3 q≈.850±.007 (native scale≈14.6 px/mm; edge≈285 nativepx in the embedded417–418ppi figure); adoptedq=.846154. This is an outward clear-cap opening, not inferred additional clipping. Other continuous source-supported caps grow S9/10→14.8, S11/12→13.5, S14→12.3, S21→12.6, S22/23/24→12.6, S25/26A→13 mm. No numeric cuts.
- Retained S13 cap 11 rather than forcing the source-like12.2 across its tight gap: trial S12=13.5/S13=12.2 intrudes.73 mm versus allowed.675 mm in the.75 mm gap. Independent full-beam screening rejects source-scale S16/17/18→11.3: reaches11.530786/11.418655/11.583853 plus.05 mm margin; coupled S20/21→11.8 also fails at S21(reach 11.908544+.05). No untraced fields. Other concave faces have no independently resolved admissible added trim.
- Removed only the three catalog-derived dPgF.030 copies on L15/L21/L23. Their existing S-FPL51 curves remain, with R/G/B channel indices unchanged and V+5.653212e−6 on each. Qualified inferred ED/APD positions remain; source Δν2=38.62 is mean Abbe contrast, not partial dispersion. All 13 curves are qualified proxies; resin layers alone remain unresolved. Fixed stale public S-LAH58/S-BAL14/S-TIH14 names to actual S-LAH65V/S-TIL1/E-FL5 and removed unsupported exact-supplier/UV-cure claims.
- Final asphere departures: S3A at 15.6:−3.304977 mm; S8A at 15.3:−.445770 mm; S26A at 13:+.408608 mm. Profiles remain physical through their final caps. Focused surface/image-circle/aperture/centered-FX field checks pass; nine actual SVG states have zero trim, with connected compounds. Resolver/catalog consistency passes13/15 modeled media. All source R/d/aspheres, source pairs/APD flags and focus/aperture/perspective controls remain unchanged.
- Additional source-image-height probe: current centered chief-ray field reaches23.81 mm of the patent’s29.30 mm height(81%), limited by S2. Centered FX success does not verify the complete101°/shift image circle; public text states this limitation rather than fitting R/d or hiding the source bounds.
