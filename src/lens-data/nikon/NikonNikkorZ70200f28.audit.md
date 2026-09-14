# Audit Log — NIKON NIKKOR Z 70-200mm f/2.8 VR S

Patent: WO2020/105104 A1, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier source check

### Phase 1 — Glass corrections

No data-file changes were made in this pass.

### Patent-source disposition

- The referenced patent `WO2020/105104 A1` was not present in `patents/`.
- The only nearby local file was `patents/JPWO2020105107A1.pdf`, whose extracted Table 1 prescription does not match this data file, so it was not used as evidence.
- Per the queue instruction, this lens was documented and left for a future pass with the correct local patent file.

### Catalog-search note

- Public Hikari catalog sources do list coefficient-backed `J-LASF021` for `850324` and `J-LAF016` for `801349`, and the project catalog already contains both entries.
- Relabeling L61/L64 still needs confirmation against the actual `WO2020/105104 A1` local patent table before editing the data file.

## 2026-06-04 — Sweep 3 local patent dPgF backfill and catalog relabel

Local patent source: `patents/WO_2020105104_A1.pdf` (untracked local file).

- `pdftotext -layout` produced page breaks only, so pages 22-23 of the local image-only PDF were rendered with `pdftoppm` and checked visually against Example 1.
- L23 / surface 10 matches the data file (`nd = 1.66382`, `νd = 27.35`) and the patent table lists `θgF = 0.6319`. Added `dPgF: 0.0341`, computed as `0.6319 - (0.6438 - 0.001682 * 27.35)`.
- L61 / surface 24 is confirmed as `nd = 1.85026`, `νd = 32.35`; relabeled to coefficient-backed Hikari `J-LASF021 (850324)`.
- L64 / surface 29 is confirmed as `nd = 1.80100`, `νd = 34.92`; relabeled to coefficient-backed Hikari `J-LAF016 (801349)`.
- No `nC`, `nF`, or `ng` rows were found in the Example 1 prescription pages reviewed.

## 2026-08-21 — SR spectral-proxy recovery

- Hikari's official 2023 catalog supplies J-SFH4 at `nd = 1.66382`, `νd = 27.346974`, and
  `θgF = 0.6319`, reproducing L23's patent coordinate and published partial dispersion.
- Kept Nikon's proprietary SR identity explicit and added J-SFH4 only as a catalog spectral proxy. The proxy improves
  wavelength-dependent tracing without claiming that Nikon used off-the-shelf J-SFH4; no prescription or APD value changed.

## 2026-09-08 — First-hosted audit, lens 15

Primary original: `patents/WO_2020105104_A1.pdf`,85 scanned pages.
Titlep1; definitionspp18–19; Example1pp20–21; Table1pp22–25; Fig1p64.

- All40 surface rows and all48 zoom/focus gap values checked unchanged.
  L81νd35.77 confirmed in enlarged crop. Sourceκ0 at26/37 converts toK−1
  by equation(B)¶0076; both previousK0 values corrected. Polynomial rows match.
- Source closeβ−.08318/−.14416/−.19832 reproduced by independent matrices;
  object-image1000.008/1000.010/999.466mm. Correct closeFocusM.5→1.0, preserve
  source gaps. G7imageward/G8objectward directions confirmed¶0092.
- Source FNO2.88277/2.8637/2.87906 preserved as station array. Removed
  inaccessible2.8/22 shortcuts; current wide-open shortcut is automatic.
- SourceTL199.88619 conflicts with definitionincludingBF onp18. Detailed
  gaps sum232.43316 including32.5469BF; retain them and document conflict.
- Correct Ken→Takeru Uehara in subtitle/analysis. Remove unverified motor,
  production-identical, manufacturing and glass vendor assertions.
- All glass names reduced to compatible single counterparts. Six ED elements
  nowJ-FKH1 exact1.49782/82.57 insteadS-FPL51 approximation. L81J-LASFH9
  resolves exactindex insteadunknownJ-LASFH9A / approximateS-LAH93.
  L62J-PSKH4 explicitlyapproximate. SourceL23θgF.6319/dPgF.0341 retained.
- Independently recomputed all21 isolated-element focal-length descriptors
  from radii, thickness andnd; corrected their stale rounded values.
- Fig1 optical rims at600dpi calibrated by first-last199.886mm span:
  G1~35–36.5,G2~20–24,G3~20.5,G4~19.5–20.5,G5~17,G6~17.5,
  G7~14–15,G8~18,G9~18–18.5mm. S12trial20 failedgap11→12sag6.05>4.95;
  retain18.1 there. Surface/image-circle checks pass.
-4 focused tests pass:Kconversion,finiteβ/conjugate,oppositefocus/fixedgroups,
  no hidden trims across15focus/zoom combinations.
-Production wide∞/teleclose baseline; localwide∞,teleclose,middle∞,
  middlehalf-focus andf16. TelechartG7/G8±11.53mm; zoomchartmax47.93mm;
  all9rows/legend reachable by overlay scrolling. Midpointlabels2m,
  EFL121.70; teleclose1m,EFL133.28. Remaining source-table stations are
  numerically checked, not independently published intermediate states.
-Shared RCA: runtimeLens claimed minimum zoomFOPEN but returned the first
  station'sFOPEN. Fixed returned sliderbase to minimum, preserving first
  station physical iris calibration. Resolves midstationf2.88 label and
  partialiris despite sourcef2.8637. Three-lens hook regression covers full
  iris at allstations and stablef8. Shortcut text/ARIA usefmtF without
  rounding numeric targets.39affected tests pass; fullgates pending11–20.
