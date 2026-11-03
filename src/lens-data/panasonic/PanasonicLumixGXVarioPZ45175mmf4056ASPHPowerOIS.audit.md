# Construction and review audit

## Job and reference versions
PANASONIC LUMIX G X VARIO PZ 45-175mm f/4-5.6 ASPH. POWER O.I.S.; JP 5649252 B2; engine edd47fdcd377025144ade179c8bed7188c0bc4eb.

## Extraction and conventions
PDF pp13–14, Tables 1–3; Figures 1/3/5 discriminate examples. Original source bytes, full extracted text and original card retained. Independent source/native review passed, separate from release approval.

## Model transformations
- All physical semi-diameters and iris radii inferred; printed F-number calibrates entrance pupil, not independently measured aperture.
- Continuous zoom is a constrained engineering cam: linear native gap drivers and rear plane; G4 shift compensates first-order focus while retaining native residual. No published intermediate cam.
- No finite focus, decenter, OIS stroke or marketed 0.9 m performance is reconstructed.

## Glass review
Catalog-surrogate dependent only. Native coordinates unchanged; evaluated residuals and selected/alternative rows in evidence.

## Numerical and geometry results
{
  "geometryErrorStates": 0,
  "fullMtf": {
    "mtf": {
      "statuses": {
        "converged": 105
      },
      "unknownFluxMax": 0,
      "convergedThroughLpMmMin": 50,
      "availabilityReasons": {}
    },
    "referenceMtf": {
      "statuses": {
        "converged": 105
      },
      "unknownFluxMax": 0,
      "convergedThroughLpMmMin": 50,
      "availabilityReasons": {}
    }
  },
  "uiRayCount": 1111,
  "uiRayClips": 0
}

## Correction/discrepancy register
Native rounding residuals in results; approved inference is not official erratum. Structured source.errata removed to avoid misrepresenting applied reconstruction.

## Independent review
Independent optical QA passed source/native invariants, off-grid geometry, current-state full MTF, source-only reference replay and native silhouettes. Baseline implementations and executed rows are retained in evidence/results.

## Quantitative-claim map
Element powers -> actual data radii, thickness, nd. Native EFL/BF -> sourceModel and source raw tables. Aperture/geometry -> implementedModel.geometry. MTF statements -> implementedModel.mtf, spectra kept separate. UI/spectral ray bands -> implementedModel.rayBands. Kinematics -> evidence CAM solve log and actual station gaps. Supplier identities deliberately unclaimed.

## Gate disposition
Marked ready for batch integration under the stated reconstruction. Closed 2026-11-01: integrated in `src/lens-data/panasonic/`; see the last section.

## Pending integration
Closed 2026-11-01: see the last section.

## Frozen-byte final validation
Final data SHA256 639926b6246194b10e4ea859c7c1909d681c9707aeedf8eea065e9513e2fda67. Full MTF rerun uses current-focus EFL and entrance pupil and records this exact input hash. Independent source-only reference replay removes all named proxies. Cam replay reproduced all authored distance cells exactly (maximum residual0). Native source rounding residuals and every unavailable finite state remain explicit.

## Final isolated integration and deployment boundary
Consolidated suite completed successfully in the independent isolated tree:5301 tests in304 files, typecheck, format, lint and production build all exit0;1779 pages prerendered. No deployment, PR or source-corpus write performed by this builder. Earlier interrupted runs remain preserved as superseded, not counted as successes.

Final combined receipt SHA256 175ec6410b2d2fc010f0ed262f9698aaef682b5f0077c984d558b6411370f0ea; exact per-lens source/integrated object equivalence and full original logs retained in results. Source data and analysis bytes are unchanged from the independent final-integrated-input receipt. This audit paragraph is post-run provenance, not an optical/application modification. Integration closed 2026-11-01; see the last section.

## 2026-11-01 — Deployment validation and fix pass

Source re-read: JP 5649252 B2 Example 1 was checked row by row against the PDF page images and text layer. That covered 25 radii, 19 fixed distances, 14 nd/νd pairs, the stop position, 15 asphere values, 18 variable-gap and BF cells and the six printed f and Fno values, 136 cells in all, with no mismatches. Group focal lengths agree within 0.0004 mm, and conditions (1) to (3) reproduce the printed 0.5745, 0.1110 and 0.2568 at H = 10.81. The front page agrees with the bibliographic fields; US 9,158,092 B2 confirms the inventor romanization and the Example 1 focal lengths.

Patent vs model: EFL 45.1684/87.7062/167.2377 mm vs 45.1683/87.7050/167.2320 mm. BF 14.60331/14.60288/14.60312 mm vs 14.6025/14.6011/14.5989 mm. Total length 107.5269/107.5266/107.5268 mm, reproduced. Half-field 13.5369/6.8993/3.6302° vs 13.54/6.90/3.63°. F-number 4.15704/5.44688/5.83639, reproduced by iris radius 7.4314/5.8606/5.2256 mm; the aperture audit has 201 of 201 stations within 3 %. Maximum LSA across all stations is 0.103 mm, so nothing points to a misprinted coefficient.

Zoom: printed spacings hold at stations 0, 100 and 200. G4 and d19 turn once at station 121 (peak 6.392 mm), d21 once at station 139 (17.030 mm); the printed sequences require each turn, and G2 and G5 stay monotonic. Maximum paraxial defocus is 0.0042 mm, at the printed tele state. d5+d10 stays at 27.7518 mm and d19+d21+d23 at 27.7018–27.7019 mm.

Product match: Panasonic lists 14 elements in 10 groups with 2 aspherical and 2 ED elements and a 90.0 mm length. Panasonic's construction drawing, as read by the batch coordinator, has blue ED on the large G1 meniscus (L3) and the G3 element (L9), and pink ASPH on the first G3 element (L7) and the element behind the ED one (L10); this agrees with the file. Example 1 fits better than Examples 2 and 3 on length (88.28 mm from the flange vs 93.75 and 96.75 mm), ED count (two vs one) and two-group focus. No example reaches 175 mm. The patent names G4+G5 as the focus groups (¶0017, ¶0029) and identifies no O.I.S. group.

Fields changed: `subtitle`, new `catalog.specs`, `focus.description`, zoom labels "Wide" and "Tele", all 14 element `label` and `role` strings, and 14 `glass` strings reworded to corpus forms. `apd: "inferred"` and `apdNote` added on L3 and L9, whose nd 1.497, νd 81.6 fit FCD1. Analysis rewritten as plain technical prose with Image Stabilization and Model Scope sections; this log lost its script references and the stray line about another lens.

Before and after: `built.mjs` and `probe.mjs` output is byte-identical to the baseline, `zoomiris.mjs` differs only in the two zoom labels, `protcmp.mjs` reports no protected field changed, and the surface audit prints OK. Glass resolves 13 of 14 before and after, to the same rows; L10 stays Unmatched.

Closed 2026-11-01: rims for the figure pass. Scaled from Figure 1 panel (c) at the axial scale, this pass had S1-2 at 18.67 mm against about 15.6 mm, S3-5 at 16.51 mm against about 14.3 mm, and L12 (S20-21) at 7.225 mm against about 5.7 mm, and called the others within about 12 %. The figure pass below re-measured all three panels at the figure's own height scale: S1-2 15.8 mm, S3 14.65 mm, S4-5 13.75 mm and L12 5.74 mm, with L6 at 6.54 mm against 9.12 mm stored. No rim was changed in this pass. Clearance showed no axial clip or blocked chief ray; `clearap.mjs` reported `LOWER no-ray-found` for the corner bundle at stations 196-200. That is the bundle's lower rim ray, not its chief ray: `audit:field-coverage` reaches the corner at all 201 stations.

Open: L7 keeps D-ZLaF81-25 at Δνd +0.073, just over the 0.06 residual flag. It was left because the resolved set had to stay unchanged in this pass.

## 2026-11-01 — Semi-diameter pass against the patent figure

Source: `patents/JP5649252B2.pdf`, PDF page 21, Figure 1, the native 1212 × 1202 px, 400 ppi bitmap. Panels (a), (b) and (c) are the printed 45.17, 87.71 and 167.24 mm states of Example 1. Panel (a) carries leader lines on its upper side and aspheric markers below, so its rims count only where the ink is clean; (b) and (c) are clean on both sides. The bitmap is skewed by about 0.5° (axis slope −0.0081 to −0.0095), so heights are taken from each panel's fitted axis and averaged over the upper and lower sides. The patent prints no effective diameters. Figures 2, 4 and 6 show SA, AST and DIS only, so there are no lateral fans to read end rays from.

Scale: the figure is anamorphic, 3.2 % compressed in height. Along the axis, vertex crossings of 17 to 23 surfaces per panel against the printed spacings fit 6.601, 6.613 and 6.620 px/mm with rms 0.34, 0.55 and 0.54 px, about 0.08 mm at worst. Across the axis, arc fits of S1, S4, S7, S11A, S15, S17A, S18, S21, S22 and S25 (2616 line-centre samples, each surface with its own offset and tilt) give 6.40 px/mm in every panel, rms 0.30 px, with the rms within 2 % of its minimum over 6.36 to 6.42. The stop ticks are a third check that needs no arc: their inner ends sit 51, 38.75 and 33.75 px from the axis, which at 6.40 px/mm is 7.97, 6.05 and 5.27 mm, against 8.00, 6.10 and 5.40 mm for the exact axial ray at the printed f-numbers. Rims below use 6.40 px/mm and line centres. One native pixel is 0.156 mm of height, and repeat readings across panels agree within about 0.1 mm. The model outline laid over all three panels at these scales follows the drawn arcs within a line width.

| Surfaces | Element | Before mm | Figure mm | After mm | Axial floor mm | Basis |
|---|---|---:|---:|---:|---:|---|
| S1, S2 | L1 | 18.67 | 15.82 | 15.9 | 14.33, 14.13 | Square rim; edge now 1.25 mm as drawn, 0.07 mm before |
| S3 | L2 front | 16.51 | 14.65 | 14.7 | 13.68 | Curve end at the flat top of L2 |
| S4 | L2/L3 junction | 16.51 | 13.75 | 13.8 | 12.98 | Junction curve ends at the height of L3's top |
| S5 | L3 rear | 16.51 | 13.75 | 13.8 | 12.51 | Flat top of L3 |
| S6 | L4 front | 8.5 | 7.54 | 7.6 | 6.46 | Flat top of L4 |
| S7, S8 | L4/L5 junction, L5 rear | 7.17 | 6.95 | 7.17 | 6.16, 6.00 | Retained, 3 % |
| S9, S10 | L6 | 9.12 | 6.54 | 6.6 | 5.94, 5.96 | Square rim, the largest departure at 39 % over |
| S11A, S12A | L7 | 9.49 | 9.30 | 9.49 | 8.84, 8.58 | Retained, 2 % |
| S14 | L8 front | 7.678 | 7.87 | 7.9 | 7.42 | Step order |
| S15 | L8/L9 junction | 7.678 | 7.40 | 7.4 | 6.94 | Step order; junction curve ends at L9's top |
| S16 | L9 rear | 7.678 | 7.40 | 7.4 | 6.85 | Step order |
| S17A, S18 | L10 | 7.801 | 7.27 | 7.3 | 6.81, 6.62 | Step order |
| S19 | L11 rear | 7.801 | 7.09 | 7.1 | 6.54 | Step order |
| S20, S21 | L12 | 7.225 | 5.74 | 5.8 | 5.31, 5.07 | Square rim, 26 % over |
| S22, S23 | L13 | 8.959 | 8.42 | 8.959 | 1.99, 1.97 | Retained, 6 % |
| S24, S25 | L14 | 10.518 | 10.14 | 10.518 | 1.86, 1.77 | Retained, 4 % |

Figure readings are means over the clean panels. Each new value is the reading rounded up to 0.1 mm, the least cut the reading allows. S14 to S19 moved inside the noise band because the order was wrong: the file had L10 and L11 standing 0.12 mm proud of L8 and L9, where the figure steps down L8, L9, L10, L11 by readings good to 0.1 mm. S17A at 7.3 mm is clear of any turnover: its `--scan` shows none inside 9 mm. Retained values sit at or under the 5 to 8 % noise band. L13 is the closest call: its S22 corner stays visibly proud of the figure, and 8.5 mm would cost nothing at the image corner in this rim set, but 6 % is under the bar for a change.

Rim shape: L2, L4 and L8 are each drawn with a flat top and a short step down to the cemented partner, and each junction curve ends at the partner's height. S4, S7 and S15 are set to that curve end. The renderer joins two rims with one straight edge and a cemented junction cannot carry a land, so L2's edge falls 0.9 mm across its 2.9 mm rim where the figure has flat then step. L4 and L8 fall 0.4 and 0.5 mm. The alternative, S4 at the height of S3, overshoots the drawn corner with a pointed wedge. No free face is drawn with a land, so no `rimCutDepthMm` or `rimExtensionSd` is used, and `checks.gapSagFrac` stays at its default.

Clearance on the final rims: `clearap.mjs` at Y = 10.815 mm shows no `CLIPS-AXIAL` or `BLOCKS-CHIEF`. Every axial maximum across the 201 stations clears its rim; the tightest margins are 0.46 mm at S15, 0.48 mm at S14 and 0.49 mm at S17A and S20, and S1 keeps 1.57 mm. The aperture audit has 201 of 201 stations within 3 % of the printed f-number, with no rim limiting. The image-circle check reports 0 undersized, field coverage is at least 99 % at all 201 stations, and the surface validator prints OK. Engine half-field is 17.04, 8.64 and 4.30° and f-number 4.157, 5.447 and 5.836 at the three printed stations, unchanged. `clearap.mjs` flags `LOWER no-ray-found` at stations 194-200 on its default search, 196-200 as before when the launch search is widened with `--scan 140`, so the two extra stations come from the smaller S1 shortening that search.

Corner vignetting, from the engine's full-pupil lattice wide open at infinity, geometric transmission at the last sampled field:

| Station | Field | Before | After | Change |
|---|---:|---:|---:|---:|
| 45.17 mm | 13.5° | 80.6 % | 66.5 % | −14.1 |
| 87.71 mm | 6.9° | 99.2 % | 94.8 % | −4.4 |
| 167.24 mm | 3.6° | 82.3 % | 71.3 % | −11.0 |

The losses at 45.17 and 167.24 mm exceed 5 points and stay, because the figure reading behind them is solid: every rim agrees across panels within about 0.1 mm, at a height scale proved three ways. The cut at 45.17 mm comes from L12, L6 and L4; putting back S6 at 8.5, S9-10 at 9.12 and S20-21 at 7.225 mm returns 80.0 %, and S20-21 alone returns 74.8 %. The cut at 167.24 mm comes from G1; putting back S1-2 at 18.67 and S3-5 at 16.51 mm returns 82.3 %, and S1-2 at 17.3, S3 at 15.6 and S4-5 at 15.3 mm return 76.9 %. Neither set is what the figure draws, and at 18.67 mm L1 has a 0.07 mm edge.

Maker drawing, read from the supplied local image: 14 elements in 10 groups with the same cemented pairs, blue ED on L3 and L9, pink ASPH on L7 and L10, so count, grouping and special-glass positions agree with the file. It is drawn at the wide state at about 3.42 px/mm. Its half-heights are L1 17.1, L2 15.4, L3 14.0, L4 9.4, L5 and L6 7.5, L7 10.5, L8 9.1, L9 7.5, L10 8.0, L11 8.5, L12 6.2, L13 9.1 and L14 10.7 mm, median 8 % above the figure, and it shows the same L2-over-L3 and L8-over-L9 steps. L1/L14 is 1.60 there, 1.56 in the figure and was 1.78 in the file. The two disagree on L4, 25 % over the figure against a typical 8 %, and on the rear of G3, where the maker draws L9 smaller than L10 and L11 and the figure draws L9 the larger. No rim follows the maker's drawing; the patent figure of the modeled example governs.

Open limitations: infinity focus only, as the patent prints no close-focus spacings. The live page was checked at 45.17, 87.71 and 167.24 mm, at both ends of the focus control, which changes nothing here.

## 2026-11-01 — Glass labels and brackets

L10 (1.58250/59.4) now carries L-BAL42, following the Panasonic G 14mm f/2.5 II precedent for the same coordinates. The trace anchors the d line on the printed index and uses the catalog row for dispersion, so a moulded index drop does not move the reference ray. Glass resolves 14 of 14. `cemented` tags and `doublets` C1–C4 were added for the four printed junctions (S3–5, S6–8, S14–16, S17A–19), which the file carried only as contiguous surfaces.

## 2026-11-01 — Second review: diagram, labels and movement

Compared: the local page at 45.17, 87.71 and 167.24 mm, at both ends of the focus control and with the movement overlay, against Figure 1 panels (a), (b) and (c) (PDF page 21, the native 1212 × 1202 bitmap) and ¶0015 to ¶0029. The maker drawing was read from the supplied local image as a check on order and special glass; no rim was fitted to it.

Re-measurement: axis fits on all three panels and vertex matches at 6.60 to 6.62 px/mm reproduce the first pass's scale. Line-centre readings at 6.40 px/mm, taken separately, give L1 15.86, L2 14.65, L3 13.72, L4 7.54, L5 6.95, L6 6.55, L7 9.30, L8 7.85, L9 7.38, L10 7.2, L12 5.75, L13 8.42 and L14 10.13 mm, within 0.1 mm of the first pass. Fitting the height scale to one arc at a time is too noisy to improve on the joint arc fit and the stop ticks (it scatters from 6.2 to 6.65 px/mm), so 6.40 px/mm stands.

Cuts under the owner's lands-and-cuts rule. No land exists or was added, and `checks.gapSagFrac` stays at its default. Costs are the worst points of light over all 201 zoom nodes with only that rim cut and every other rim at baseline.

| Surfaces | Element | Figure mm | Baseline mm | First pass mm | Final mm | Costs, points | Verdict |
|---|---|---:|---:|---:|---:|---:|---|
| S1, S2 | L1 | 15.82 | 18.67 | 15.9 | 17.26 | 2.85 at 5.0°, 120.9 mm | partly raised |
| S3 | L2 front | 14.65 | 16.51 | 14.7 | 16.10 | 2.66 with S4-5 at 4.4°, 136.1 mm | partly raised |
| S4, S5 | L3 | 13.75 | 16.51 | 13.8 | 15.01 | with S3 | partly raised |
| S6 | L4 front | 7.54 | 8.5 | 7.6 | 7.79 | 1.24 at 13.0°, 47.1 mm | partly raised |
| S9, S10 | L6 | 6.54 | 9.12 | 6.6 | 6.86 | 1.43 at 11.3°, 45.17 mm | partly raised |
| S15, S16 | L9 | 7.40 | 7.678 | 7.4 | 7.4 | 0.00 | keep: slight |
| S17A, S18 | L10 | 7.27 | 7.801 | 7.3 | 7.3 | 0.62 with S19 at 13.5°, 45.17 mm | keep: slight |
| S19 | L11 rear | 7.09 | 7.801 | 7.1 | 7.1 | with S17A-18 | keep: slight |
| S20, S21 | L12 | 5.74 | 7.225 | 5.8 | 6.40 | 1.30 at 13.5°, 45.17 mm | partly raised |
| S22, S23 | L13 | 8.42 | 8.959 | 8.959 | 8.65 | 0.00 | new cut, keep: slight |

Whole lens: the final `rimcost.mjs --every 1` worst loss over all 201 zoom nodes is 2.85 points, at 5.0°, 120.9 mm. At the printed stations alone it is 2.5 points, at 13.5°, 45.17 mm. The budget runs over every node because the slider passes through them: rims set against the printed stations alone lost 3.7 points at 116.9 mm, and the coordinator raised S1-2 by 0.15 mm, S3 and S4-5 by 0.10 mm and S20-21 by 0.05 mm to the final values. No element's `--loo` restore is refused by the validator, so no cut stands on spacing.

| Station | Corner field | Baseline rims | First pass | Final |
|---|---:|---:|---:|---:|
| 45.17 mm | 13.5° | 80.6 % | 66.5 % | 78.1 % |
| 87.71 mm | 6.9° | 99.2 % | 94.8 % | 98.5 % |
| 167.24 mm | 3.6° | 82.3 % | 71.3 % | 80.0 % |

Against the printed stations alone, the tightest set to two decimals was S1-2 17.11, S3 16.00, S4-5 14.91, S6 7.79, S9-10 6.86 and S20-21 6.35 mm, with S6, S9-10 and S20-21 trading against each other; that set had the least total raise in that trio, 1.0 mm. The final values hold the budget at every node but are not the smallest that do: one hundredth less on S1-2 gives 2.91 points, and one hundredth less on S3, S4-5, S6, S9-10 or S20-21 leaves the worst at 2.85 points. At 45.17 mm L12 stops gaining above about 6.6 mm.

The figure gap is expected under the budget and stands as follows: L1 +9.1 %, S3 +9.9 %, S4-5 +9.2 %, S6 +3.3 %, L6 +4.9 %, L12 +11.5 %. G1 keeps the figure's proportions and step order: L1, L2 and L3 step down 1.16 and 1.09 mm against the figure's 1.17 and 0.90 mm, near the scale the maker's drawing shows (median 8 % above the figure, L1 17.1 mm there). L4 stays above L5 and L5 above L6, and L8, L9, L10 and L11 step down as drawn. S14 stays at 7.9 mm, above the 7.678 mm baseline, because the figure reads 7.87 mm and needs L8 proud of L9. S7-8 stay at the 7.17 mm baseline, 3 % over the figure and inside the noise band.

L13 is the one change that costs nothing. Its S22 corner stood visibly proud of all three panels. S22-23 at 8.65 mm sits 2.7 % over the figure and costs 0.00 points at every zoom node; the engine half-field at 45.17 mm drops from 17.04° to 16.99° at 8.60 mm, where S23 joins S25 as the limit. L14 stays at 10.518 mm because S25 sets that half-field, and it and L7 are inside the noise band.

Clearance on the final rims: `clearap.mjs` at Y = 10.815 mm shows no `CLIPS-AXIAL` or `BLOCKS-CHIEF`, and every rim clears its axial floor. The closest are S15 at 0.46 mm, S14 at 0.48 mm and S17A at 0.49 mm. The surface validator prints OK, the image-circle check reports 0 undersized, and field coverage is at least 99 % at all 201 stations. Engine half-field stays 17.04, 8.64 and 4.30° and f-number 4.157, 5.447 and 5.836 at the printed stations. `LOWER no-ray-found` remains at stations 195-200, which is the search stopping on the bundle's lower rim ray and not a clip.

Labels and tags, read on the page and against the patent: groups G1 to G6 bracket S1-5, S6-10, S11A-19, S20-21, S22-23 and S24-25, as ¶0022 to ¶0027 and the figure's brackets do. C1 to C4 bracket the four printed junctions and do not collide with d5, d10, d19, d21, d23 or BF. L1 to L14 are the patent's own designations. All 14 `type` strings agree with the signs of R, and with ¶0022 to ¶0027. All 14 elements show a focal length in the inspector. `A` sits on S11, S12 and S17 only, the three asterisks of Table 2 and the figure. The stop is S13 between L7 and L8, as ¶0024 states. The patent text has no term for anomalous dispersion, ED glass or stabilization. The `apd: "inferred"` tags on L3 and L9 match the blue ED elements of the maker's drawing, and its pink ASPH elements are L7 and L10. Element and group counts agree with it. No label, tag or bracket needed a change. The page sets the two aspheric markers of L7 tight against the STO label; no field in this review's list moves them.

Movement: stations ascend wide to tele and every gap column runs in that order, with the printed values at stations 0, 100 and 200. ¶0016 assigns panels (a), (b) and (c) to fW, fM and fT.

| Group | Patent ¶0028 and figure arrows | Model, wide to tele | Verdict |
|---|---|---|---|
| G1 | fixed | 0.0000 mm | agrees |
| G2 | monotonic imageward | +25.0243 mm, no turn | agrees |
| G3 | fixed | 0.0000 mm | agrees |
| G4 | path convex toward the image | +3.2504 mm to the printed middle, peak +3.4158 mm at station 121, −0.8350 mm at tele | agrees |
| G5 | monotonic objectward | −4.0148 mm, no turn | agrees |
| G6 | fixed | 0.0001 mm of print rounding | agrees |

The G4 turn at station 121 and the matching d21 turn at station 139 are the one turn each that the printed sequences require; the cam adds none. Overall length holds at 107.5266 to 107.5269 mm.

Focus: ¶0017 and ¶0029 name G4 and G5 as the focusing groups and say both move imageward from infinity to a near object, and the Figure 1 arrows on G4(−) and G5(−) point imageward. `focus.description` says the same, and the patent prints infinity spacings only, so the focus control stays inert and shows "Not modeled". The focus choice in the movement overlay is disabled, so that overlay falls back to zoom.

Open limitation: the exact axial ray at the printed f-numbers reaches the stop at 8.00, 6.10 and 5.40 mm, close to the figure's stop ticks at 7.97, 6.05 and 5.27 mm. The engine's paraxial iris radius is 7.43, 5.86 and 5.23 mm. The stop is outside this review's edit list, so this is logged and unchanged.

## 2026-11-03 — Zoom/focus station thinning

Removed derived zoom stations and focus keyframes that the solves did not need; no row was re-solved and no printed value changed. Kept rows are the existing rows, selected so the bilinear blend between them stays within 0.5 of the Rayleigh depth (±2λN², λ = 587.56 nm, station wide-open N) of the earlier model at every earlier row and between rows.

- Zoom: every 4th existing row (indices 0, 4, …, 200).
- Focus: both keyframes kept (no change).
- Published zoom stations remapped 0 → 0, 100 → 25, 200 → 50; publishedFocus and conjugate indices remapped to the same rows.

| Quantity | Before | After |
|---|---|---|
| zoom stations × focus keyframes | 201 × 2 = 402 | 51 × 2 = 102 |
| source-published states | 3 | 3 |
| worst infinity defocus against the solves, between rows | 0.0011 mm | 0.0183 mm |
| worst fixed-plane defocus at infinity | 0.0042 mm | 0.0143 mm |
| worst focal-length label residual | 0.0018 mm | 0.0288 mm |

Against the earlier model at the same slider position and object: added defocus ≤ 0.0183 mm (0.46 R), half-field ≤ 0.001°, stop radius ≤ 0.018 %, f-number ≤ 0.000 %, variable gaps ≤ 0.004 mm, axial diffraction MTF at 30 lp/mm -0.029 at the worst infinity point (wide open, authored plane). Kept station objects, kept gap values and every field outside the thinned arrays are unchanged; published-station EFL, f-number and half-fields are bit-identical; the validator reports no errors.

Text sync: analysis: 201 stations with printed rows at 0/100/200 → 51 stations at 0/25/50, 198 → 48 inferred.
