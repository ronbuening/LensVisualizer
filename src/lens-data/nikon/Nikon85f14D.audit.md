# Audit Log - Nikon AF NIKKOR 85mm f/1.4D IF

Patent: US 5,640,277

The current model uses Example 1. Earlier entries document Example 2.

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/US5640277.pdf` (untracked local file).
- `pdftotext -layout` extracted the Example 2 prescription table.

| Element / row        | Patent nd/vd    | Before                                   | After                                 | Disposition                                                                                                                         |
| -------------------- | --------------- | ---------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| L2 / row 5           | 1.79631 / 40.90 | `Dense Lanthanum Flint (LaSF3 / NBFD15)` | `S-LAH52 (OHARA, patent nd/vd match)` | OHARA S-LAH52 is the resolver-friendly catalog-tolerance candidate; the old NBFD15 token resolves to a different modern HOYA glass. |
| L6 positive / row 15 | 1.86994 / 39.82 | `Very Dense Lanthanum Flint (TAFD30)`    | `TAFD32 (HOYA, patent nd/vd match)`   | HOYA TAFD32 clears the prior TAFD30 mismatch.                                                                                       |
| L8 / rows 17/19      | 1.74810 / 52.30 | `Lanthanum Crown (S-LAM66)`              | `S-LAM60 (OHARA, patent nd/vd match)` | OHARA S-LAM60 is the resolver-friendly catalog-tolerance candidate.                                                                 |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 5,640,277 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for US 5,640,277 / `5640277`; no matching local PDF is present.
- `US5764425.pdf` is a different Ohshita telephoto patent and was not used to override the data.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-07-29 - Local-patent glass disposition

- The cited source is now available locally as untracked `patents/US5640277.pdf`. Rechecked Example 2; the
  stored R, d, nd, and νd values remain unchanged.
- S5 `S-LAH52 (OHARA)` -> explicit unmatched 796409 patent glass at 1.79631 / 40.90.
- S19 `S-LAM60 (OHARA)` -> explicit unmatched 748523 patent glass at 1.74810 / 52.30.
- Neither current OHARA row reproduces the patent coordinate. Synchronized the element narratives and glass table
  without assigning a speculative supplier.
- Removed S19's former inferred-APD flag because it depended on the rejected S-LAM60 identity and the patent
  publishes no partial-dispersion evidence.

## 2026-07-29 - `796409` coefficient-source review

- Visually rechecked Example 2 row 5 at `nd = 1.79631`, `vd = 40.90`; the stored radius and thickness
  also match the printed table.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  OHARA S-LAH52 is `1.799516 / 42.225007`, outside the runtime d-line tolerance, while Hikari J-LASF03
  is a materially different `1.80610 / 40.97`.
- Retained the explicit unmatched `796409` annotation. No supplier or nearest-neighbor glass was assigned,
  and no prescription geometry changed.

## 2026-07-30 - `748523` family review

- Rendered and visually rechecked Example 2. S19 remains `nd = 1.74810`, `vd = 52.30`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. The closest
  plausible rows are around `1.741 / 52.6` or `1.755 / 52.3`, outside the accepted d-line residual.
- Retained the explicit unmatched `748523` annotation without a supplier or APD claim. No prescription geometry
  changed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked US 5,640,277 Table 1 on rendered PDF page 34: L2 is `1.79631 / 40.90`.
- HOYA's official obsolete-inclusive catalog now supplies NBFD2 at `1.797199 / 41.143795` (`797411`), within
  `+0.000889 / +0.243795` of the patent coordinate and inside the runtime compatibility window.
- Relabeled L2 as an NBFD2 optical equivalent and synchronized the analysis. The label does not identify Nikon's
  production supplier; `748523` remains unresolved and no geometry changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Revisited L8/S19 after recovering Hikari's discontinued E-LAKH1 coefficient row from its official 2022-07-01
  optical-glass catalog. E-LAKH1 is code `748523` at `nd = 1.748099`, `νd = 52.304982`, an exact rounded match to
  the patent's `1.74810 / 52.30` coordinate.
- Relabeled L8 as an E-LAKH1 catalog equivalent and synchronized the analysis. This supersedes the earlier
  current-catalog no-match disposition but does not identify Nikon's production supplier; no geometry or APD claim changed.

## 2026-09-08 — First-hosted audit, lens 24

- Original `patents/US5640277.pdf`: titlep.1, Figure4p.5 at600dpi, Figure5p.6, Example2 numeric table/textp.34. All20 surface rows and ten glass coordinates verified. No source geometry or focus gaps changed.
- Corrected element/component counts9/8→10/9. Example2 has split L1 singlets and a two-element L6; the prior production identification miscounted these. Catalog association now explicitly a patent candidate, not an asserted production match. Added publication suffixA; retained canonical author spellingKouichi, noting sourceKoichi in analysis.
- Source aperture1.43 replaces1.4 in controls/specs; Figure5 full fieldapproximately28.6° replaces28°30′. Marketing aperture remains1.4.
- All ten isolated focal lengths recalculated; notably L2 371.4→261.8mm and L8 1341.8→1300.2mm. Glass names qualified; L1b uses compatible inferred J-PSKH1. Source indices/Abbe numbers retained.
- G2 and stop travel10.3438mm objectward, outer groups fixed. D18 incorrectly labeledBF→G2–G3. ActualBF38.1199mm fixed. Matrix reproduces84.999905mm infinity EFL, nearβ−0.100001884 and inferred0.955706213m object-image distance; near slider0.85→0.955706213m. Source contains no cover/filter surface.
- Figure4-derived inferred rims adopted: front36mm, second32.5mm, L2 28mm, L3 23.5mm, G2 18/17.5/17.3mm, rear17.3mm. Crossing-ray/callout envelopes excluded; thin front components constrain usable rims.
- **Follow-up:** render diagnostics caught S12/S14 being trimmed1.62/1.42mm around the stop despite surface validator passing. Both declared radii set15.8mm, below the measured15.8767mm rendering clearance, so no hidden trimming remains. This is a recorded figure-versus-clearance limitation, not an exact rim match on those two surfaces.
- Production and local infinity/near/half-focus/f16 verified. Local announces10elements, f1.43; near96cm/EFL80.40; midpoint1.91m, gaps12.63/6.37 and f16 stop2.65mm. Three source/geometry/glass tests pass. Surface/image-circle checks pass; full21–30 gates/commit pending.

## 2026-10-29 — Nikon F-mount figure and fresh glass review

- Directly reopened original `patents/US5640277.pdf`, Example 2: Figure 4 on PDF p. 5 at 600 dpi, and all media, d-line definition and published focus spacings on p. 34. All ten media and every air/cemented face were checked. Native raster is 300 ppi; the approximately 80 mm optical vertex span gives about 14.5 native px/mm. Source hatching, crossing rays and group/callout lines were excluded from optical edges.
- S6 and S8 have resolved concave rear cap-end lands. Native normalized measurements are approximately 354/404 and 295/340 px: q=0.876±0.0046 and 0.868±0.0055. Adopt inferred cut depths 6.35 and 8.36 mm, giving cap radii 24.55533 and 20.39940 mm inside retained 28 and 23.5 mm outer rims. The S6 6.34 mm trial has radius 24.5372 mm and fails the beam rule: the maximum beam radius is 24.4769 mm at focus 0.250 / field 10.31°, requiring 24.5505 mm including the 0.3% margin. Move that cut outward by one 0.01 mm depth step. Both accepted cuts pass the complete sweep; no source depth or bypass flag is claimed.
- S12 and S14 keep their 15.8 mm optical caps, while `rimExtensionSd` 17.5 and 17.3 mm restore the source blank heights around the stop. Their curved profiles are not extended toward the stop. The prior hidden-trim fix therefore remains optically intact while its undersized drawn blanks are corrected. No additional resolved land is established on the other faces; the cemented S15 curve is retained.
- Fresh glass check retains all ten d-line source pairs: L1a 1.60300/65.42; L1b 1.59319/67.87; L2 1.79631/40.90; L3 1.71736/29.46; L4 1.80454/39.61; L5 1.67270/32.17; L6a 1.68893/31.08; L6b 1.86994/39.82; L7 1.78797/47.47; L8 1.74810/52.30. All ten selected catalog counterparts are compatible, including approximate NBFD2 and the qualified discontinued E-LAKH1 coordinate match. No source partial-dispersion or additional line indices are supplied; no APD identity or production supplier is inferred from compatibility.
- Source R/d, iris, focus spacings and candidate/product-correlation limitations remain unchanged. Focused surface/inferred-beam, circle and aperture checks pass. Actual SVG paths at focus/zoom 0, 0.5, 1 are finite with zero hidden trim, and the raster montage was inspected. Catalog consistency passes. Parent records full gates at the triad commit.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator                        | Solved object distance   | Check                                                                   |
| --------------- | --------------------------------------------- | ------------------------------------- | ------------------------ | ----------------------------------------------------------------------- |
| 0 / 1           | “β −0.1000” → `"0.1000"`                      | US 5,640,277 A, Example 2 (PDF p. 34) | 837.59 mm, first-surface | in focus 0.10000; at the declared distance 0.10000; −0.01 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.

## 2026-11-23 — Example 1 prescription and production-section comparison

### Production identification

- Example 1 replaces Example 2. Both are 85 mm f/1.43 designs with the same three focus units. Example 1 has nine elements in eight air-separated groups, including a single front meniscus. Example 2 has ten in nine and splits that meniscus into two singlets.
- Nikon lists 85 mm, f/1.4–16, nine elements in eight groups, a 28°30′ FX/35 mm angle of view, 0.85 m minimum focus, 1:8.8 maximum magnification, a 77 mm filter thread and nine rounded blades. Tale 41 dates the release to December 1995 and describes the fixed front converter, moving middle group and stop, and fixed rear compensator. The digital iris uses the nine-blade count and an estimated 0.7 roundedness, as in the AF-S 50mm f/1.4G model. [Nikon Japan specifications](https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_nikkor_85mm_f14d_if/spec.html) · [Nikon Tale 41](https://imaging.nikon.com/imaging/information/story/0041/index.html)
- The Nikon brochure uses separate colors to mark ED glass and aspheres. The 85mm f/1.4D IF section uses neither mark. Tale 41 mentions expensive glass without naming a material or location. The patent does not name any ED material or supply aspheric coefficients. No APD tags were assigned. [Nikon brochure, printed p. 23](https://www.nikonusa.com/fileuploads/pdfs/Nikkor%20lens%20Broch_061017.pdf#page=12)
- The comparison registers both infinity models to the first and last vertices and optical axis of Nikon's section with one uniform scale. Nikon does not specify the drawing's focus setting. Example 2 adds a front interface pair and shifts multiple inner curves. Example 1 follows the meniscus, rear doublet and rear singlets closely. Its stop lands at x = 803.64 native pixels compared with Nikon's marker near x = 804.55 and Example 2 at x = 814.92. An earlier scan of 17 powered profiles against the six nine-element examples under the same registration gave mean absolute residuals of 0.42, 2.52, 2.60, 3.42, 1.60 and 7.96 native pixels for Examples 1, 3, 4, 5, 7 and 8, respectively. The final catalog diagram was rendered again and laid over Nikon's section. The powered geometry agrees closely. The largest localized rim difference remains at the front of L5, and Nikon's stop mark is schematic. [Nikon optical section](https://imaging.nikon.com/imaging/information/story/0041/img/img1.jpg)
- Photons to Photos independently lists US 5,640,277 Example 1 for this lens. The identification rests on the patent and Nikon's construction, drawing and specifications. [Optical Bench Hub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm)

### Transcription and focus

Checked the printed cover and all 18 Example 1 rows against page images rendered with `pdftoppm`. PDF p. 33, col. 12, supplies the signed radii, thicknesses, nine nd/νd pairs, the flat stop at row 11 and both pairs of variable gaps. PDF p. 34, col. 13, repeats the infinity summary and gives the conditions check. The image confirms helium d at 587.6 nm. The file stays at native scale (1×), with all tabulated prescription values unchanged. R5 = +108.1534 mm, R12 = −53.7011 mm and νd(L6a) = 32.17 are clear on the page despite ambiguous OCR. No prescription erratum is required. [US 5,640,277 A](https://patents.google.com/patent/US5640277A/en)

| Quantity                                       | Patent                                                 | Computed or modeled                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Infinity effective focal length                | 85.00 mm, 85.0001 mm in the focus table                | 85.000118 mm                                                                                                          |
| Infinity back focus                            | 38.12 mm, S18-to-image gap 38.1202 mm                  | 38.120176 mm paraxial, 38.1202 mm authored gap                                                                        |
| Infinity aperture                              | f/1.43 in the table, FN 1.4 at H = 29.7 mm in Fig. 2   | f/1.430 paraxial and in the stop-normalized aperture audit. The exact H = 29.7 mm ray gives f/1.431.                  |
| Near magnification                             | β = −0.1000                                            | β = −0.1000008, 835.81 mm from S1 and 0.95213 m from the image                                                        |
| Near effective focal length and image distance | Near EFL unspecified. The rear gap remains 38.1202 mm. | 79.8848 mm EFL, 38.1202 mm to the finite image. Collimated back focal distance for this group position is 30.1317 mm. |
| Near aperture                                  | Fig. 3 prints FN 1.7 at H = 24.1 mm                    | Working f/1.703 paraxial. The exact H = 24.1 mm ray gives f/1.736, which rounds to f/1.7.                             |
| D6 / D16, infinity → near                      | 17.7999 / 1.2001 → 6.9908 / 12.0092 mm                 | Both rows retained. G2 and the stop translate 10.8091 mm toward the object.                                           |

The stop has 4.0000 mm of air on its object side and 3.4000 mm on its image side. The patent specifies the stop plane but gives no diameter. The house paraxial stop rule gives a fixed radius of 14.53951 mm from f/1.43. The exact iris-edge launches are H = 28.520 mm at infinity and H = 23.851 mm at the finite conjugate, giving real-ray working f/1.490 and f/1.754. These are distinct from the cones at the patent's plotted ray heights. The iris alone limits the on-axis beam. Iris-edge rays landed on the image plane at all 1,001 sampled focus positions, with zero hidden render trim. The two patent marginal ray heights also clear the glass when traced with the stop opened to their respective stop intercepts. G1 and G3 stay fixed, as does the 116.3202 mm front-vertex-to-image track. Nikon's 0.85 m is `catalog.closeFocusM.marketing`. The modeled endpoint is the published 1:10 state. This prime has no zoom states.

The d-line longitudinal aberration check gives −0.080, −0.098, −0.091 and −0.060 mm from paraxial focus at 100%, 85%, 70% and 50% of the infinity pupil radius. Figure 2 reads about −0.08 mm at the edge and −0.10 mm at the deepest point. The finite d-line trace reaches about −0.14 mm in the outer zone and turns back toward paraxial focus at the edge, as in Figure 3. The curves support the printed signs and digits.

### Rims and vignetting

Figure 1 (PDF p. 2) was rendered at 600 dpi from the 300 ppi scan. The first-to-last axial vertex span is about 1,127 native pixels for 78.2 mm (14.4 px/mm). The slightly tilted axis, rays, labels and bracket ink contaminated the automated envelopes. Reading both halves of the optical outline gives approximate outer semi-diameters of 33.2, 28.0, 24.3, 18.2, 17.7, 17.4, 17.2 and 17.5 mm for L1–L8, respectively. Under the independent Nikon registration (10.50 native px/mm) the corresponding rims are about 32.5, 27.3, 23.8, 18.0, 17.3, 17.1, 16.8 and 17.3 mm. Both drawings show the rear lands on L2/L3 and the short lands bordering the stop. Diagrams supply an outline and cap estimate. The S9 clearance constraint makes the aperture evidence mixed, so the lens-level `sdSource` field is omitted.

| Example 1 surface | Mapped Example 2 → initial Example 1 → final                   | Reason                                                                                                                                                                                                                                                                                                                |
| ----------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 and 2           | 36 → 34 → 33 mm each                                           | An unsplit L1 at 36 mm crosses at the edge. The 33 mm radius fits between the two drawings and leaves positive edge glass. The old L1b has no corresponding element.                                                                                                                                                  |
| 4                 | 28 mm outer rim throughout. Cut depth 6.35 → none → 5.10 mm.   | The original cut exceeds the new profile's 5.877 mm rim sag. The cap end is about 0.93 of a roughly 404 px blank radius, with a one-pixel reading range of about ±0.005 in that ratio. The recovered cap ends at 26.160 mm. The scanned wide-open beams reach 25.861 mm, leaving 0.299 mm, above the 0.078 mm margin. |
| 6                 | 23.5 mm outer rim throughout. Cut depth 8.36 → 8.36 → 8.50 mm. | Figure 1 and Nikon draw the cut at about 0.86 of the radius. The patent rim is about 350 px from the axis, with a one-pixel ratio range of about ±0.005. The 20.149 mm cap clears the beam's 19.607 mm reach by 0.542 mm, above the 0.060 mm margin.                                                                  |
| 9                 | 17.5 → 16.3 → 16.36 mm                                         | The full spherical face overlaps S8 at the inherited height. The final radius clears the Fig. 2 marginal ray at S9 (16.342 mm) and passes the default gap limit. Neither section resolves a front land that would justify adding one.                                                                                 |
| 10                | Clear 15.8 → 15.8 → 16.2 mm, drawn 17.5 mm                     | The spherical cap ends at the land shown next to the stop.                                                                                                                                                                                                                                                            |
| 12                | Clear 15.8 → 15.8 → 16.0 mm, drawn 17.3 mm                     | The short land on the negative half of the doublet follows Figure 1 and leaves the iris in air.                                                                                                                                                                                                                       |

The remaining mapped rims agree with the drawings within their reading tolerance. No gap-sag or rim-slope override is used. Surface validation and the inferred-cut beam sweep pass. The real chief ray reaches the full-frame corner, 21.65 mm at about 14.3°, with no rim blockage. The image-circle floor finds no undersized surfaces.

The wide-open geometric transmission curves at infinity show the off-axis effect. Angles are rounded from each model's samples. The published field falls at the last sample.

| Model                         | Reported half-field | On axis | ≈2.4° | ≈4.8° | ≈7.2° | ≈9.5° | ≈11.9° | 14.3° |
| ----------------------------- | ------------------: | ------: | ----: | ----: | ----: | ----: | -----: | ----: |
| Example 2, previous entry     |              17.47° |  100.0% | 99.6% | 93.9% | 86.1% | 75.6% |  61.5% | 44.9% |
| Example 1, first-pass rims    |              16.93° |  100.0% | 98.9% | 92.8% | 85.7% | 75.0% |  62.0% | 45.1% |
| Example 1, final rims         |              16.93° |  100.0% | 98.9% | 92.8% | 85.7% | 74.5% |  60.0% | 42.6% |

### Glass dispositions

The table gives nd and νd only. Local coefficient catalogs and resolver residuals were checked against the five-decimal index and two-decimal Abbe precision. Modern or approximate matches were left out. HOYA's E-FD5 has a legacy FD5 counterpart in its obsolete-inclusive catalog (1.672701 / 32.173263). The recovered 2022 Nikon/Hikari coefficient row for discontinued E-LAKH1 reproduces the other match. The two names are dispersion equivalents. Production suppliers remain unknown. [HOYA optical glass data](https://www.hoya-opticalworld.com/english/datadownload/index.html)

| Element | Patent nd / νd  | Disposition                                                                |
| ------- | --------------- | -------------------------------------------------------------------------- |
| L1      | 1.60300 / 65.42 | Unmatched. J-PSK03 and S-PHM53 are near 65.44.                             |
| L2      | 1.80411 / 46.55 | Unmatched. S-LAH65V is 1.80400 / 46.58 and legacy TAF3 is 1.80420 / 46.50. |
| L3      | 1.71736 / 29.46 | Unmatched. E-FD1L is near 29.50 and S-TIH1 near 29.52.                     |
| L4      | 1.80454 / 39.61 | Unmatched. NBFD3 is 1.80450 / 39.63. J-LASF013 is 1.80440 / 39.61.         |
| L5      | 1.64831 / 33.75 | Unmatched. Legacy FD12 is near 33.79. S-TIM22 also differs in index.       |
| L6a     | 1.67270 / 32.17 | HOYA E-FD5, exact to printed precision. S-TIM25 differs in νd.             |
| L6b     | 1.86994 / 39.82 | Unmatched. TAFD32 differs by about +0.00076 / +0.91.                       |
| L7      | 1.78797 / 47.47 | Unmatched. N-LAF21 and legacy TAF4 are near 1.78800 / 47.49.               |
| L8      | 1.74810 / 52.30 | Hikari E-LAKH1, 1.748099 / 52.304982.                                      |

Figures 2 and 3 plot d and g only. Column 13 labels g as 435.6 nm. The comparison uses the catalog’s standard mercury g line (435.8 nm) and retains the printed prescription. Longitudinal C/g shifts were traced at each figure's stated ray heights and compared across the pupil. Near-axis / marginal offsets in mm relative to paraxial d are C +0.0800 / −0.0407 and g −0.0593 / +0.0918 at infinity, and C +0.1003 / +0.0065 and g −0.1107 / +0.0638 at near focus. There is no C curve for a direct source comparison. The trial's broad proxy set put marginal g near +0.215 / +0.224 mm at infinity / near, well to the positive side of the printed curves. The exact-coordinate proxies move the Abbe-only g results by at most about 0.017 mm toward the plotted curves, without changing the shape or introducing a visible reversal. The near-axis g separation from d remains uncertain, especially at the finite conjugate. No per-glass spectral anchors were fitted to the system curves.

Open: Nikon's production radii, glass formulations, calibrated iris and clear apertures, and the spacing schedule through 0.85 m have not been published in the cited documents. The source gives no separate C-line plot or per-glass partial-dispersion data.
