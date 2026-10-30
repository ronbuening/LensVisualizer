# Olympus M.Zuiko Digital ED 12–200mm f/3.5–6.3 — audit log

## 2026-10-29 — Deployment validation and fixes

**Source re-read.** JP 2020-154139 A, Numerical Example 1 (pp. 18–19, ¶0162), checked against the page images: 28 lens
surfaces and the cover plate (R, d, nd, νd), the stop at S15, five cemented interfaces, four aspheric surfaces (k = 0
and 14 coefficients, conic convention per ¶0161) and the five variable gaps plus d30 at all five printed states. 101
surface fields, no mismatches. The Example 1 table of the grant JP 7204554 B2 is identical. Front page: published
2020-09-24, application 2019-052558 filed 2019-03-20, applicant Olympus Corporation, inventors Masahiro Imamura and
Toyonori Kon. Its Article 30 disclosure cites the Olympus 12–200mm specification page, published 2019-01-24.

**First order, patent → model.** EFL 12.36 / 25.56 / 46.76 / 93.32 / 196.04 → 12.362 / 25.560 / 46.760 / 93.332 /
196.134 mm. F-numbers 3.60 / 4.66 / 5.45 / 6.08 / 6.47 exact. Air-equivalent BF 17.70 → 17.71 at W and 17.72 → 17.73 at
T. The real chief ray at 10.06 mm image height lands at ω = 41.96° at W (printed 2ω = 83.93°). At 11.15 mm it lands at
13.09° and 3.23° at Int.2 and T (printed 26.19° and 6.46°). Group focal lengths match f1–f5 (105.06 / −10.96 / 17.75 /
−19.22 / 50.53 mm). The LTL row equals the S1–S28 length (99.36 against 99.37 mm), not the BF-inclusive length ¶0159
defines (erratum).

**Maker comparison.** The OM SYSTEM Japan specification page lists 16 elements / 11 groups: 3 aspherical, 2 Super ED,
2 ED, 2 HR and 1 Super HR. It also gives 84°–6.2°, 0.22 / 0.70 m minimum focus, a 72 mm filter, 7 blades and f/22; the
lens was announced 2019-02-13. The colour-coded construction diagram (https://jp.omsystem.com/content/000099683.jpg)
matches Example 1 at L1 (Super HR), L2 and L11 (Super ED), L3 (ED), L8 and L10 (HR) and L5 / L9 / L15 (aspherical). It
colours L12 as ED, where Example 1 prints 1.51633 / 64.14. Example 1 fits the product better than the other examples:
Examples 2–4 have 15 elements, and Example 6 is 16 / 11 but has only one νd ≈ 95 glass.

**Rims and focus (unchanged).** Semi-diameters are estimated from Fig. 1. The tele and Int.2 panels give a front radius
of about 25 mm; L4 is stepped at 13.0 / 9.5 mm. A larger front-doublet / S7 rim (26.8 / 9.8 mm) also passes the
geometry checks. It was not adopted: the printed wide-angle field already clears, and only the 10.82 mm Four Thirds
corner would need it. G4-only close-focus reconstructions were tried earlier and rejected, because their distance
labels could not be kept consistent with the computed conjugates. The model stays at infinity focus, with closeFocusM =
0.22 m (maker data).

**Fixes in this pass.**

- Zoom path: 129 → 42 stations (5 printed, 37 inferred).
  - Previous law: G1–G3 linear with G4 solved for focus throughout. Between Int.3 and T this made G4 back up 0.19 mm
    (D25 22.08 → 21.89 → 23.42 mm) and D22 overshoot to 13.02 mm between the printed 11.92 and 12.35 mm. d28 also
    carried the d30 rounding (12.92 mm at Int.1, 12.95 mm at T), so the fixed G5 moved.
  - New law: W → Int.3 is unchanged. Int.3 → T moves G1, G3 and G4 linearly and solves G2, which departs up to 0.80 mm
    from its straight path. d28 = 12.93 mm in every state.
  - Result: only G2 reverses, at Int.1 and Int.3, as the printed positions require.
  - Defocus: inferred stations are within 0.0001 mm. Interpolation between stations adds at most 0.018 mm. The printed
    states keep −0.003 / +0.030 / +0.009 / −0.032 / −0.017 mm. EFL rises monotonically.
  - Station spacing is the smallest count per segment (12 / 7 / 5 / 17 intervals) that keeps interpolation defocus
    within 0.02 mm, so slider travel is not uniform in focal length.
- Glass: labels changed to the corpus form. L5 / L15 (1.80280 / 40.55) and L9 (1.76960 / 49.30) have no
  coordinate-equal catalog row (nearest S-LAH63 1.8044 / 39.59 and HOYA MC-TAF101-100 1.76902 / 49.29) and stay
  Unmatched. L2, L3 and L11 are tagged apd "inferred"; L12 is left untagged.
- Wording:
  - name, subtitle and specs
  - focus description
  - element labels and roles
  - header comment
  - rear-plate source note
  - errata text: the third erratum's residuals are updated for the fixed d28
  - analysis: process prose removed and the zoom, coverage and glass sections updated

**Checks after the fixes.**

- Surface validator: no errors.
- Image circle: not undersized.
- Field coverage: 39 of 42 stations reach ≥ 99% of the 10.82 mm corner. 12.36, 13.39 and 14.44 mm reach 94%, 97% and
  99%: the chief ray is clipped at S1, and at 12.36 mm also at S7.
- Real-ray clearance: no axial clipping. At the printed 10.06 mm height no chief ray is blocked.

**Open.**

- Fig. 9 labels ω = 44.64° against the tabulated 41.97° at W; unresolved.
- The printed-state defocus residuals (up to 0.032 mm) are left as printed.
- Site behaviour shared by every infinity-only lens: a focus value carried in a URL makes the compact comparison
  header print "22 cm" while the geometry stays at infinity. The fix belongs in the UI, not in this file.

## 2026-10-29 — Semi-diameter pass against the patent figure

**Source and scale.** JP 2020-154139 A, PDF p. 33, Fig. 1: panel (a) W, (b) Int.2 (46.76 mm), (c) T. It is a 300-ppi
bilevel raster, measured at 300 dpi. Vertex crossings on the axis give one axial scale for all three panels. The spans
are S1–S28 = 610 px for 166.45 mm at T, 480 px for 130.87 mm at Int.2 and 365 px for 99.36 mm at W, so 0.2727 /
0.2726 / 0.2722 mm per px. At T, the S1–S5 span (51.5 px for 14.19 mm), the cover-glass faces and the image plane land
within 1 px of prediction. The radial scale was checked by fitting the drawn sag against height on S1 (R 69.76), S2
(R 54.54) and S7 (R 12.884). This gives 0.266–0.280 mm per radial px, so the figure is isotropic within about 2%: no
vertical stretch. Heights are read at 0.2727 mm/px.

**Method.** Outer-ink profiles were taken on both sides of panels (b) and (c), where only group brackets lie above the
glass. Panel (a) is crowded with leader lines, so it was read by row-run scans of the horizontal rim strokes. Rim =
outer ink − 0.5 px (stroke centre), averaged over panels. The median figure/data ratio is about 1.01–1.02.

| Surface | Before | Figure (a / b / c, mm) | After | Evidence |
|---|---|---|---|---|
| 1, 2 (L1) | 25 | 25.8 / 25.8 / 25.0 | 25 | within noise |
| 3 (L2 rear) | 25 | 24.4 / 24.5 / 23.7 | 23.8 | step order: L2 drawn 4.75–5 px (1.3 mm) under L1 in every panel; the model had them level |
| 4, 5 (L3) | 23 | 23.4 / 23.5 / 22.8 | 23 | within noise; L2 → L3 step 0.9 mm drawn, 0.8 mm modelled |
| 6 (L4 front) | 13 | 13.1 (b) / 13.0 (c) | 13 | agrees |
| 7 (L4 rear cap) | 9.5 | 9.7–10.0 (cap end at the flat land) | 12.8, rim cut at 9.96 | figure land; see Rim cut on S7 |
| 8A, 9 (L5) | 9.5 | 9.75 | 9.5 | within noise |
| 10, 11 (L6) | 9 | 9.2 | 9 | within noise |
| 12–14 (L7–L8) | 8.5 | 8.7 | 8.5 | within noise |
| 16A, 17A (L9) | 7.5 | 7.6 / 7.6 / 7.5 | 7.5 | agrees |
| 18–20 (L10–L11) | 7.5 | 7.3 / 7.2 / 7.1 | 7.0 | step order: the doublet is drawn 0.3–0.4 mm under L9 and level with L12; the model had it level with L9 and 0.5 mm above L12 |
| 21, 22 (L12) | 7.0 | 7.2 / 7.2 / 7.2 | 7.0 | within noise |
| 23–25 (L13–L14) | 6.5 | 6.85 / 6.8 / 6.7 | 6.5 | within noise |
| 26A–28 (L15–L16) | 12 | 11.75 (L15) / 12.0 (L16), b and c | 12 | within noise |

Four surfaces changed, all spherical. No aspheric rim moved, so no quoted departure needed recomputing. The analysis
clear-aperture paragraph was updated for the L2 step and the doublet.

**Clearance after the change.** The surface validator reports no errors, and no surface falls under the image-circle
floor. The axial marginal ray at the nominal f-number peaks at 14.64 mm on S3 (rim 23.8) and at 6.45 / 6.17 / 6.31 mm on
S18–S20 (rim 7.0). For the printed 10.06 mm wide-angle image height, the chief ray peaks at 20.43 mm on S3 and at
2.33 mm or less on S18–S20, with no axial clip and no blocked chief ray. Fig. 1's own image height reaches 11.15 mm at
Int.2 and T. Toward the 10.82 mm Four Thirds corner, the chief ray peaks at 23.07 mm on S3 (the 13.39 mm station) and
at 2.42 mm or less on S18–S20.

The S3 and S18–S20 changes leave these figures as they were:

- Field coverage: 39 of 42 stations reach the corner. The 12.36 / 13.39 / 14.44 mm stations reach 94 / 97 / 99%,
  stopped at S7 and S1.
- Engine values at W: half-field 33.61°, f/3.6, stop radius 6.177 mm.
- Engine vignetting curves at zoom positions 0, 0.05, 0.3 and 1: for example 83.2% at 39.6° and 48.1% at 42.4° at W.

**Rim cut on S7.** Fig. 1 (all three panels) and the maker diagram draw L4 with a square outer edge at 13.0 mm. Its
concave rear cap S7 stops short of that edge, and a straight stroke square to the axis joins the cap end to the edge.
On panel (c) the cap end sits at 35.5 px against the 47.8 px edge, so q = 0.743 ± 0.036 for one native px; the
geometric meeting of the S7 curve with the land stroke gives 10.0–10.1 mm. The authored cut:

| Surface | q (figure) | sd | Depth | Cut radius | axialMax | Reach of the wide-open beams |
|---|---|---|---|---|---|---|
| 7 | 0.74 ± 0.04 (9.7–10.0 mm) | 12.8 (from 9.5) | 4.71 mm, inferred | 9.959 mm | 4.31 mm | 9.903 mm at 12.36 mm, 41.5° |

- **sd.** S7's `sd` rises to 12.8 mm, the largest 0.1 mm step below |R| = 12.884 mm, so L4's edge is nearly square
  against S6's 13.0 mm.
- **Cut radius.** The figure's cap end (~9.7 mm at q × 13 mm) lies inside the reach of the wide-open beams traced
  without the cut: 9.903 mm at W, 41.5°. The cut therefore moved out to reach + 0.05 mm margin + 0.005 mm =
  9.958 mm, and the depth was rounded up from 4.708 to 4.71 mm, giving 9.959 mm. That is still inside the figure's
  q range (q = 0.766).
- **Beam probe.** The dense probe (22.7 M rays, 61 zoom × 21 focus states) finds a refined reach of 9.899 mm, with
  0 rays clipped and 0 within the margin.
- **Validators.** The surface validator, including the beam rule, reports no errors. The aperture audit is unchanged:
  42 of 42 stations within 3%, with no rim, trace or failed rows and no rim-cut limiter. No surface falls under the
  image-circle floor.
- **Effect.** S7's clear radius is now 9.96 mm instead of 9.5 mm, so it no longer clips the wide-angle corner. At
  12.36 mm the field coverage rises from 94% to 96% (10.36 mm, now stopped at S1 alone); 13.39 and 14.44 mm stay at
  97 and 99%. The engine half-field at W rises from 33.61° to 34.87° (34.42° at zoom 0.05, previously 33.22°), and
  f/3.6 and the stop radius are unchanged. At W, transmission at 39.9° is 96.8% against 83.2% at 39.6° before; the
  0.05, 0.3 and 1 curves are unchanged.
- **Gap to L5.** The land, 4.71 mm behind the S7 vertex, runs from 9.96 to 12.8 mm, above L5's 9.5 mm front rim, which
  sits 5.44 mm behind it. The render shows no overlap.

**Live check and maker diagram.** The local renders at 12.36, 25.56, 46.76, 93.32 and 196.04 mm show the drawn steps:
L1 > L2 > L3, and L9 above the level L10–L11 / L12 pair. The OM SYSTEM construction diagram draws the same L1-over-L2
step, L9 taller than the L10–L11 doublet, and L4 with a flat rear land. At 3× device scale the 12.36 mm render
now draws L4 the same way: a nearly square edge at 13.0 / 12.8 mm, the land square to the axis, then the cap. Before
the cut it was drawn with a sloped edge from 13 to 9.5 mm.

**Open.**

- The engine's paraxial half-field at W (34.9°, set by the S7 cut radius) stays below the traced 42.8°.

## 2026-10-29 — Second review: diagram, labels and movement

**What was compared.** The local page at the five printed stations (12.36, 25.56, 46.76, 93.32 and 196.04 mm, at 2–3×
device scale), the zoom movement overlay, the focus control and the element inspector for L2, L3, L4, L5, L9, L11 and
L15 were set beside JP 2020-154139 A Fig. 1 (PDF p. 33, panels a/b/c), the Example 1 text (¶0093–0100) and the OM
SYSTEM construction diagram.

**Silhouette, re-measured.** Fig. 1 was re-read at its native 300 ppi, independently of the first pass. Vertex
crossings give 0.2729 mm/px at T (S1–S28 = 610 px) and 0.2725 mm/px at Int.2 (480.5 px). Each rim is the mean of the
outer ink above and below the axis, less 0.5 px for the stroke.

| Element | Model sd | Fig. 1 (b), mm | Fig. 1 (c), mm | Verdict |
|---|---|---|---|---|
| L1 | 25 / 25 | 25.75 | 24.97 | agrees with (c); (b) is drawn about 3% larger throughout G1 |
| L2 rear (S3) | 23.8 | 24.4 | 23.6 | agrees; step under L1 is 1.36 mm drawn, 1.2 mm modelled |
| L3 | 23 / 23 | 23.3–23.6 | 22.8 | agrees |
| L4 | 13 / 12.8, cut at 9.96 | 13.2 | 12.96; land from the edge to the cap end at about 36 px (9.8 mm) | agrees, rim cut confirmed |
| L5 | 9.5 / 9.5 | 9.8 | 9.7 | within noise (+2–3%) |
| L6 | 9 / 9 | 9.3 | 9.1 | within noise |
| L7–L8 | 8.5 | 8.7 | 8.6–8.7 | within noise |
| L9 | 7.5 / 7.5 | 7.7 | 7.5 | agrees; tallest in G3 as drawn |
| L10 / L11 | 7.0 | 7.1 / 7.2 | 6.96 / 7.23 | agrees; level with L12 and below L9 as drawn |
| L12 | 7.0 | 7.2 | 7.2 | within noise |
| L13–L14 | 6.5 | 6.8 | 6.7 | within noise; 0.4–0.5 mm under L12 drawn, 0.5 mm modelled |
| L15 / L16 | 12 / 12 / 12 | 11.85 / 12.1 | 11.6 / 12.0 | within noise |

Every element is drawn square-cut on the site except L2, which runs straight from the shared S2 rim (25 mm) down to its
S3 rim (23.8 mm). Fig. 1 draws L2 square at about 23.6 mm with L1 standing 1.36 mm above it. One cemented S2 radius
cannot draw that step. Lowering S2 to 23.8 mm would square L2, but it would bevel L1 instead and cut the corner chief
ray, which already passes S2 above S3 at the wide end, so the first-pass choice stays. Fig. 1 also draws L16 one px
(0.3–0.4 mm) taller than L15, and the maker diagram agrees. Showing that step would put a bevel on one element of the
doublet, so it was not modelled. No `sd` changed, and the first pass's figures and rim cut are confirmed.

**Labels and tags, changed.**

| Item | Before | After | Evidence |
|---|---|---|---|
| Cemented brackets and `cemented` names | D1–D5 | C1–C5 | The D5 bracket (L15–L16) shared its name with the D5 gap label (d5 after S5) in the slider panel and the inspector badge; C-numbering is the corpus convention where gap labels use D |
| G3 bracket | STO–22 | 16A–22 | ¶0093 places S between G2 and G3, ¶0096 lists G3 as L9–L12, and Fig. 1 brackets S apart from G3; ¶0099's "moves with G3" is unchanged |

The analysis G3 line now reads S16–22 with the iris between G2 and G3, and the G2 line no longer counts L7 twice.

**Labels and tags, found correct.** L1–L16 are the patent's own element designations (Fig. 1 panel c leaders). Element
types agree with ¶0094–0098 and with the radius signs, and the aspheric markers (8A, 16A, 17A, 26A) match ¶0100 with no
extras. The stop sits at S15 between L8 and L9, as Fig. 1 draws it. The patent text has no anomalous-dispersion
language and only nd / νd columns, so L2, L3 and L11 rightly carry `apd: "inferred"` at the maker's Super ED / ED / Super
ED positions. L12 stays untagged: the maker colours it ED, but Example 1 prints 1.51633 / 64.14. The maker diagram
matches Example 1 in count (16 / 11), grouping, the L1 > L2 > L3 steps, L4's flanged rear land, L9 above the L10–L11
doublet, and the Super HR (L1), HR (L8, L10) and aspherical (L5, L9, L15) positions.

**Movement.** The stations ascend from 12.36 to 196.04 mm, and the model's EFL rises monotonically through all 42.
Group positions from the printed gaps, measured from the fixed S26 (negative = toward the object):

- G1: −88.71, −98.24, −120.22, −141.24, −155.80 mm; it moves objectward throughout, 67.09 mm in total.
- G2: −73.72, −71.66, −74.65, −77.61, −75.32 mm; net 1.60 mm objectward, reversing at Int.1 and Int.3. The turning-point
  scan finds no other reversal.
- G3 (with S): −26.58, −38.64, −46.92, −54.74, −56.51 mm, monotonic objectward.
- G4: −6.23, −14.44, −20.18, −24.86, −26.20 mm, monotonic objectward.
- G5 fixed.

This matches ¶0099 (G1–G4 objectward, G5 fixed, S with G3) and the Fig. 1 arrows (G1–G4 down-left in both steps, G5
straight down). The zoom overlay draws the same ranges and a 67.09 mm maximum travel. Focus: both keyframes are
identical, the slider reads ∞ / "Not modeled" even with `focus=1` in the URL, and the focus overlay offers zoom only.
That fits the infinity-only model and the focus description.

**Clearance after the edits.** These were label-only edits, and the engine output is unchanged:

- Engine: half-field 34.87°, f/3.6 and stop radius 6.177 mm at W; the vignetting curve is unchanged (96.8% at 39.9°,
  48.8% at 42.8°).
- Validators: the surface validator reports no errors, and no surface falls under the image-circle floor.
- Coverage: 39 of 42 stations reach the corner; 12.36 / 13.39 / 14.44 mm reach 96 / 97 / 99%.
- Real-ray trace at 10.06 mm: ω = 41.96° at W, with no axial clip and no blocked chief ray.

**Open.**

- No element carries `focalLengthMm`, so the inspector shows "FL = —". The analysis lists the isolated thick-lens
  values.
- The L1 / L2 and L15 / L16 cemented steps can only be approximated (above).

## 2026-10-29 — Coordinator follow-ups after the second review

- Added `focalLengthMm` to L1–L16 (isolated in-air thick-lens values from the engine probe: −267.406, 129.007,
  172.312, −20.370, −26.962, 21.908, −18.282, 66.197, 18.763, −15.550, 18.023, 61.282, −14.881, 54.568, −44.808,
  24.791 mm), so the inspector no longer shows "FL = —". They match the analysis's element sections.
