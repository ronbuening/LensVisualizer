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

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 64, native 300 ppi raster; Wide, Middle and Tele panels) was read element by element for flat lands
square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Each face's drawn profile was
compared with its prescription sag at 6.559 px/mm (S1 → S40 vertex span 1311 px = 199.886 mm).

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 7 (L21 rear, R 31.877) | 0.90 | 8.43 mm | 21.60 mm | 24 | 18.53 mm |
| 34 (L72 rear, R 37.131) | 0.95 | 2.46 mm | 13.29 mm | 14 | 12.11 mm |

- Surface 7: the face follows its sphere within 0.5 px out to 21.4 mm, then a 15 px land joins it to the edge line
  (q 0.904 / 0.904 on the Wide panel's upper / lower half, 0.898 / 0.904 on the Middle panel).
- Surface 34: the face follows its sphere within 0.5 px to about 13.2 mm, then runs straight for 4–5 px to the edge, in
  all three panels and on both halves (q 0.94–0.956). The run ends 1–1.5 px inside the sphere's continuation at the
  edge row in every view; the control faces 25 and 39 follow their spheres into the corner.
- No land on 8, 9, 13, 15, 19, 21, 25 or 39 (each follows its sphere into the corner within about 1 px). The joined
  stroke where L23 meets L24 is the two spheres of 11 and 12 crossing near 19.1 mm, not a land, so 12 keeps the
  18.1 mm rim of the 2026-09-08 audit. 5, 30, 31 and 37A are too shallow to separate a land from the cap: under 2 px
  of sag over any land the figure could draw.
- No cap reaches the stop plane at any zoom or focus state (surface 19 clears it by 2.69 mm, surface 21 by 1.78 mm).
- The aperture audit is unchanged: Wide and Middle trace their stated f/2.88 and f/2.86 at the iris, and Tele stays at
  f/2.93 behind surface 12's rim (+1.8 %, inside 3 %), as before. No rim-cut limiter. The surface validator and
  the image-circle audit stay clean.
- The cut on 7 clears every traced ray of the wide-open beams by its margin and clips none of them (beam rule below).
  The cut on 34 was removed there. At the 21.6 mm full field, a cut on 34 at 13.29 mm, taken alone as a clip, would
  raise side vignetting there from 39 % to 45 % (42 % → 48 % at close focus). In the engine's 2D vignetting trace,
  the corner's geometric transmission does not change with the cut on 7, at any station or either focus end
  (0.558 / 0.434 / 0.389 at infinity, 0.567 / 0.470 / 0.463 close): L21's front face 6 and the rims at 8 and 12
  already clip those rays. With a cut on 34 added it is 0.543 / 0.410 / 0.376 and 0.541 / 0.441 / 0.435, all of the
  change from 34.
- The engine's wide-end half-field estimate, which limits each face at its cut radius, moves from 19.89° to 19.68°
  with the cut on 7. That is still past the 16.85° that the 21.6 mm image height needs.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stops of #933 (EPD = F/N) with the rule's current
search, which follows each beam to the field where it vanishes, seeds from the stop and refines near cuts on the full
measurement. Traced against that rule, these cuts from the figure review above were changed:

- Surface 34: with the 13.2904 mm cut restored, the beams reach 13.962 mm there (zoomT 0.7, close focus, 9.61°),
  0.038 mm inside the 14 mm rim. A cut that cleared them by its 0.05 mm margin would sit past the rim, so no land is
  left to draw. The cut is removed.

The other cut clears the beams by its margin at its figure-review position:

- Surface 7: cut radius 21.596 mm. The beams reach 21.206 mm there (wide, 71.5 mm, focusT 0.4, 19.34°), a clearance
  of 0.3901 mm against a 0.0648 mm margin, 0.3253 mm spare.

The surface audit and the beam rule pass.

Figure scale and land length: Figure 1 is 6.559 native px per lens mm, from the S1 → S40 vertex span in the figure
review (1311 px for 199.886 mm). One native pixel at the cap end and at the edge moves q by ±(1 + q) / (edge px).

- 7: figure q 0.90 (0.904 / 0.904 on the Wide panel, 0.898 / 0.904 on the Middle panel) at a 157.4 px edge (24 mm),
  range 0.888–0.912. The cut sits at 0.900 of `sd`. Land 2.404 mm, over the 0.1 mm minimum.


## 2026-10-29 — Patent rim-extension review

Directly re-read `patents/WO_2020105104_A1.pdf`, PDF p. 64, Figure 1 / Example 1, including a 600 dpi crop of the complete wide-end section and the middle/tele panels. Native scale remains 6.559 px/mm from the 1311 px / 199.886 mm S1–S40 vertex span. Every concave air face was checked.

No data change is supported. The resolved land on surface 7 is already represented by its safe cut. The small land on 34 remains unauthored: the existing 14 mm rim lies only 0.038 mm outside the prior traced beam reach, less than the 0.05 mm cut margin. An extension cannot restore a land inside the current optical cap without reducing that aperture, and the figure shows no taller outer rim there. All other air faces reach their corners or have no resolved land. Surface 12's existing 18.1 mm gap-constrained rim is retained.

Validation: `audit:surface`, `audit:image-circle`, and render diagnostics over zoom/focus 0, 0.5 and 1. Parent records full gates with the three-lens commit.


## 2026-10-29 — Glass-only reinspection

Fresh direct review: `patents/WO_2020105104_A1.pdf`, Example 1 / Table 1, PDF pp. 22–23; partial-dispersion definitions and abnormal-dispersion explanation, pp. 13–14, ¶0048/0054. Prescription table images were rendered and read again for this pass; earlier audit notes were used only to locate them. Checked every stored medium against the source's d-line nd/νd columns, including bonded layers and rear plates separately. All source indices and Abbe numbers are retained.

| Medium | Source nd / νd | Current coefficient-backed proxy | Verdict |
|---|---|---|---|
| L11 | 2.00100 / 29.12 | S-LAH99 | source pair retained; compatible proxy |
| L12 | 1.49782 / 82.57 | J-FKH1 | source pair retained; compatible proxy |
| L13 | 1.43385 / 95.25 | CaF2 | source pair retained; compatible proxy |
| L21 | 1.60300 / 65.44 | S-PHM53 | source pair retained; compatible proxy |
| L22 | 1.49782 / 82.57 | J-FKH1 | source pair retained; compatible proxy |
| L23 | 1.66382 / 27.35 | J-SFH4 | source pair retained; compatible proxy |
| L24 | 1.49782 / 82.57 | J-FKH1 | source pair retained; compatible proxy |
| L31 | 1.94595 / 17.98 | FDS18 | source pair retained; compatible proxy |
| L41 | 1.49782 / 82.57 | J-FKH1 | source pair retained; compatible proxy |
| L42 | 1.49782 / 82.57 | J-FKH1 | source pair retained; compatible proxy |
| L51 | 1.92286 / 20.88 | N-SF66 | source pair retained; compatible proxy |
| L52 | 1.49782 / 82.57 | J-FKH1 | source pair retained; compatible proxy |
| L61 | 1.85026 / 32.35 | J-LASF021 | source pair retained; compatible proxy |
| L62 | 1.59306 / 66.97 | J-PSKH4 | source pair retained; compatible proxy |
| L63 | 1.62004 / 36.4 | S-TIM2 | source pair retained; compatible proxy |
| L64 | 1.80100 / 34.92 | J-LAF016 | source pair retained; compatible proxy |
| L71 | 1.94595 / 17.98 | FDS18 | source pair retained; compatible proxy |
| L72 | 1.71300 / 53.96 | N-LAK8 | source pair retained; compatible proxy |
| L81 | 1.90265 / 35.77 | J-LASFH9 | source pair retained; compatible proxy |
| L91 | 1.51696 / 64.14 | N-BK7 | source pair retained; compatible proxy |
| L92 | 1.56384 / 60.71 | N-SK11 | source pair retained; compatible proxy |

Coverage: 21 physical lens elements, 21 authored media, 21 modeled media resolving to dispersion curves. Compatible curves are spectral proxies, not evidence of the production supplier, melt or material chemistry.

All twenty-one source nd/νd pairs and compatible curves are retained. The source identifies anomalous partial dispersion in the G2 positive lens and gives θgF(L23) = 0.6319: 0.6319 − (0.6438 − 0.001682×27.35) = 0.0341027, consistent with stored rounded dPgF 0.0341. J-SFH4 remains a numerical spectral proxy, not proof of Nikon SR production composition. The six J-FKH1 low-dispersion inferences and CaF2 association remain qualified. J-PSKH4 at L62, N-LAK8 at L72 and N-BK7 at L91 are non-identical compatible proxies; no substitution or supplier identity was inferred. No catalog-only spectral overrides or authored line indices were found.

Verification: current-label resolver and native-coordinate compatibility sweep plus `assertCatalogConsistent()`; shared `dispersion.test.ts` and `partialDispersionLine.test.ts` checks. No catalog tolerance was relaxed. Full repository gates are recorded by the parent at the three-lens commit boundary.
