# Source and geometry audit

Literal source rows, stop and three physical focus states retained. Rear plate is explicit. Source image plane unchanged. All semi-diameters are preliminary estimates from the inspected patent figure, not printed dimensions; no tracing or performance claim has yet been made (closed: traced below and in the 2026-11-09 sections). Source plot pupil radius 11.1999 mm sets derived f/1.45702, independently of marketing f/1.4. Printed surface 11 is absent but no physical surface is missing. Full field 46.8 degrees is provisional APS-C coverage inference, not a patent quote (wrong: ¶0051 prints 2ω = 48.74°; corrected 2026-11-09).

## Initial geometry check and inferred-rim refinement

Initial figure estimates failed the geometry checks before aperture tracing. No primary optical values were repaired. The preliminary rims were reduced at the unchanged default gap and edge rules while retaining equal-height connected glass contours. These remain modeling assumptions, not factory dimensions; clipping and vignetting depend on them. Revalidation is pending (closed: geometry passes, next section).

Surface | Initial inferred sd (mm) | Refined inferred sd (mm)
--- | ---: | ---:
3 | 15.5 | 14.926
4 | 15.5 | 14.926
5 | 16.5 | 14.926
6 | 16.5 | 14.926
7 | 16.5 | 14.926

## Optical results

Geometry passes at INF, X20 and MOD, and no rim is trimmed in the drawing. Source pupil 11.1999 mm gives iris-limited f/1.457011934. Infinity diffraction MTF converges at the center, half and 95% field, wide open and at f/4; the wide-open geometric MTF at 95% field does not converge at any of the three states. Finite-distance diffraction MTF was not run. The source image plane stays 95 mm behind S1; the paraxial focus lies +0.061687, +0.096270 and +0.141078 mm behind it.

## 2026-11-09 — Deployment validation

Independent check against CN 220137479 U (PDF pp. 6–7): 21 surfaces, the stop, the rear plate, 11 nd/νd pairs, both
variable gaps at three states and both object distances agree; all spherical. Engine EFL 32.637 (printed 32.620),
TL 95.000, magnification 0.0965 at 0.40 m; all four conditional expressions reproduce. Front page: 深圳市永诺电器有限公司,
inventors Zhuang Ying, Ye Yuanhua, Zhuang Yongsheng, Zhuang Yongxiao. Attribution strong: Yongnuo's 2026 catalog
lists E and Z mounts, APS-C, 11 elements / 9 groups, 0.4 m, 0.1×, and low-dispersion plus high-index glass, which
the example's two nd 1.593 and four high-index elements match.

Deployment change: `projection.fullFieldDeg` → 48.74, the printed 2ω (para. 0051); `focalLengthMm.design` → 32.62
(Table 2); `catalog.lensMounts` ["sony-fe", "nikon-z"] from the maker catalog.

Open: the analysis text still calls 46.8° unprinted; wording. (Closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. The one-line header became a full comment: patent header values, Table 2 focal length, the missing row
11, the rear plate, the stop sized from the Fig. 2 pupil, the paraxial focus offsets and how the rims were read from
the to-scale Fig. 1 (about 21.5 px/mm at 400 dpi; L1, L5 and L6–L11 within 2%; L2–L4 held at 14.926 mm because the
L2–L3 air space closes at 15.67 mm with equal-height rims). The subtitle went from "qualified associated patent
model" to "Sole example — strong production correlation", following the YN 56mm F1.4. New `catalog.specs`:
11 ELEMENTS / 9 GROUPS, DESIGN f = 32.62 mm, DESIGN F/1.46, ALL SPHERICAL, INNER FOCUS; 0.1× MAX. Every element
gained a `role`. The focus description now states the printed Table 2 states, the 6.598 mm travel of L8–L9 and the
400 mm object-to-image distance at MOD, and the conjugate `source` strings name Table 2. `aperture` gained
`maxFNumber` 16 (published f/1.4–f/16) and `blades` 9 (Yongnuo catalog). `groups` (GR1, GR2 FOCUS, GR3, the patent's
groups) and `doublets` (L3/L4, L6/L7) were added.

Glass labels, exact matches only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15): L2 H-ZF88, L4/L9/L10 H-ZLaF68C, L5 H-ZLaF50E
(CDGM), L8 FD225 (HOYA, no CDGM row). L1 and L6 (nd 1.593; FCD515/FCD505 at 1.59282, H-ZPK5 at 1.5928), L3, L7 and
L11 stay `Unmatched (patent nd …, νd …)`. No `apd` tag: the catalog drawing is too small to show which elements
Yongnuo marks as low-dispersion. `catalog.closeFocusM.marketing` is set to Yongnuo's 0.4 m: the focus readout,
which holds the image plane at the infinity paraxial focus, shows 42 cm at MOD, more than 2% from the marketed
value, so the marketed figure now appears beside it.

Analysis. The repeated per-element boilerplate, the MTF grid and convergence notes and the process wording were
removed. Added: the product (2024 announcement, mounts, catalog specifications), a numbered attribution list with
caveats, element roles, the glass table and match rule, the conditional-expression values, the model's scope, and
corrected field statements (printed 2ω = 48.74°; the real chief ray reaches the 14.18 mm corner at 24.3°). The
Photons to Photos hub citation was dropped: the page could not be shown to list this lens.

Engine numbers before and after, identical: EFL 32.636776 mm, FOPEN 1.457012, half-field 24.37°, stop radius
9.604105 mm, infinity BFD 1.0617 mm after the plate, focus keyframes 0 / 0.532586 / 1 (EFL 32.6368 / 31.7847 /
31.1097 mm). audit:surface OK; audit:aperture reports no rim limit; field coverage 100% (corner 24.3°, clear).

Open: L2–L4 rims are 1–1.5 mm below the drawn 15.3–16.5 mm; the figure implies stepped rims or lands that a later
rim pass could model. (Closed by the semi-diameter pass below: L4 raised to the drawn 16.4 mm; L2 and L3 stay.) Open: Yongnuo's product page also lists a Canon RF version (YN33mm F1.4R DA DSM), and reviews
list a Fujifilm X version; `lensMounts` keeps the catalog's E and Z. Open: if a legible maker drawing turns up (the
product page carries images YN33mm-F101 to F110 that were not viewed), tag the two νd ≈ 68.5 elements `apd:
"inferred"` if it marks them low-dispersion. Open: `rearPlates[0].source` still reads "literal rear plate" and has
no glass label. Open: elements are named L1–L11 while the patent and the YN 56mm entry use G1–G11. (Closed in the second review:
renamed G1–G11.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: CN 220137479 U, PDF page 8, Fig. 1 (the sole example, drawn at infinity), rendered at 400 dpi from a
150 ppi embedded raster. The axis is row 826. Vertex crossings at S1 (x 633) and the image (x 2675) give 21.50 px/mm
over 95.0 mm; S1–S13 (870 px for 40.39 mm) and S15–S22 (445 px for 20.72 mm) agree within 0.2%. The cap ends of S2
and S13 read the same from their axial position (sag) and radial position within 1%, so the figure is isotropic.

Figure readings against the starting rims (mm, mean of top and bottom): L1 17.65 (17.5), L1 rear cap end 15.7 with a
land to the edge; L2 15.47 (14.926); L3 15.28 (14.926); L4 16.40 at its rear, stepping out past the cemented face
(14.926); L5 15.95 (16); L6 13.44 (13.5); L7 12.79 (13.5), rear cap end 10.1 with a land; stop opening 9.66 (derived
9.604); L8 10.51 (10.5), front cap end about 9.4 with a short land; L9 13.35 (13.5); L10 14.07 (14); L11 13.37 (13.5).

Changes: S7 14.926 → 16.4 (L4 drawn 10% larger than the start; S6 stays at L3's rim, as the cemented face ends there in
the figure). S2 gains `rimCutDepthMm` 5.34 (q = 0.89 ± 0.013 of the drawn edge; cut radius 15.57 mm; the traced beams
reach 15.40 mm at the 27.1° tracing field, margin 0.17 mm). S13 gains `rimCutDepthMm` 4.22 (q = 0.79 ± 0.017; cut
radius 10.61 mm; beams reach 10.04 mm near the axis at X20, margin 0.57 mm). Before the cut the S13 cap reached 7.94 mm
behind its vertex, past the stop plane 6.48 mm away; the land now sits 2.26 mm ahead of it, as Fig. 1 draws.

Retained: L1, L5, L6, L8–L11 agree within 2%; L7 is 5% over the drawing, inside the noise band. L2 and L3 (3.6% and
2.4% under) sit at the S4/S5 cross-gap limit for equal rims (sags 1.380 + 4.559 mm = 0.90 of the 6.6 mm gap); reaching
the drawn 15.5 / 15.3 mm would need `gapSagFrac` 0.96, which these noise-band readings do not justify. The L8 front
land is not modeled: an inferred cut at 9.4 mm would fall inside the off-axis beam, which fills S15 to its 10.5 mm
rim.

Clearance at INF, X20 and MOD: no CLIPS-AXIAL or BLOCKS-CHIEF at the iris-limited f/1.47 for a 14.18 mm image height;
the axial marginal ray reaches 14.92 mm at S7 and 10.02 mm at S13. audit:surface and the rim-cut beam check pass;
audit:aperture reports no rim limit; image circle and field coverage 100% (corner 24.3°, clear). Engine EFL
32.637 mm, FOPEN 1.457, half-field 24.37° and stop radius 9.604 mm are unchanged. Corner illumination, wide open,
rises from 22.8% to 26.0% at infinity, 33.0% to 36.9% at X20 and 41.6% to 45.8% at MOD; no field loses light, and the
two lands cost none. Overlay of the model outline on Fig. 1: scratch file overlay.png of this pass.

Open: the renderer joins L4's 14.926 mm cemented face to its 16.4 mm rear with a slanted edge where Fig. 1 draws a
step and a flat top. Open: L6 is drawn 0.65 mm taller than L7 across the cemented face; both stay at 13.5 mm.

## 2026-11-09 — Glass coverage and mounts

The five elements left `Unmatched` are relabelled to catalog rows that equal the patent's three-decimal nd and its νd
(each confirmed with trylabel): L1 and L6 → FCD515 (HOYA, 1.59282 / 68.63), L3 → H-LaF50B (CDGM, 1.7725 / 49.60),
L7 → H-ZF12 (CDGM, 1.76182 / 26.61; the row is added to the CDGM catalog from CDGM's September 2026 Zemax file) and
L11 → NBFD25 (HOYA, 1.85451 / 25.15). `catalog.lensMounts` adds `fujifilm-x` (Digital Camera World review; Yongnuo's
S/Z/X model listing) and `canon-rf` (Yongnuo's product page).

## 2026-11-09 — Second review: diagram, labels and movement

Compared: the local page at infinity, X20 and MOD, the focus-movement overlay and the inspectors of elements 3, 7 and
11, against Fig. 1 (page 8, 400 dpi; 21.50 px/mm from S1 to the image over 95.0 mm, S1–S13 and S15–S22 within 0.2%,
the S2 and S13 cap ends isotropic within 1%), and the model's on-axis colour and field curves against Figs. 2 and 3.

Changes. Element names L1–L11 → G1–G11, the patent's designations (claim 1, ¶0030–¶0032); Fig. 1's numerals 1–11
equal the element ids, so no `diagramLabel` is needed. Doublet brackets L3/L4 and L6/L7 → G3/G4 and G6/G7; roles,
the focus description, the header comment and the analysis follow the rename. Every element gains `focalLengthMm`
(thick-lens values from probe: −50.9, +97.6, +56.3, −59.1, +36.2, +28.2, −16.1, −95.9, +38.1, +43.0, −54.5 mm); the
inspector showed "FL = —". The analysis's glass rule now matches the labels (rows that round to the printed nd), and
the header and analysis record the Fig. 2 and Fig. 3 comparisons below.

Rims: no change. The semi-diameter pass readings hold at the proved scale: G1 17.65, G2 15.47, G3 15.28, G4 16.40,
G5 15.95, G6 13.44, G7 12.79, G8 10.51, G9 13.35, G10 14.07, G11 13.37 mm against 17.5, 14.926, 14.926, 16.4, 16, 13.5,
13.5, 10.5, 13.5, 14 and 13.5. The step order on the page follows the figure's (G1 > G4 > G5 > G2 ≥ G3 > G10 > G6 ≈ G9 ≈ G11
> G7 > G8), with G2/G3 and G6/G7/G9/G11 tied inside the reading noise. Lands and cuts: no face is below its baseline rim; the S2 and S13 lands each cost 0.0 points at every
field at infinity (rimcost with and without them) and at X20 and MOD with a real object point; worst loss 0.0, best
gain 5.6 points. Corner illumination, baseline → final, wide open: 22.8 → 26.0% at infinity (engine); with a real
object point, 34.0 → 38.2% at X20 and 42.0 → 46.3% at MOD (3D lattice trace, 14.18 mm image corner).

Movement: keyframe 0 is infinity and the last is MOD. Only GR2 moves, toward the object as the patent states (¶0006)
and as Fig. 1's arrow shows: d14 11.910 → 8.396 → 5.312 mm and d18 1.500 → 5.014 → 8.098 mm, sum 13.410 mm at every
state, so GR1 and GR3 stay fixed. The overlay shows GR2's centre moving from 31.0 to 37.6 mm ahead of the image
(6.60 mm). The slider's far end reads 42 cm with "marketed 40 cm". Brackets GR1 (S1–S13), GR2 FOCUS (S15–S18) and GR3
(S19–S22) follow the patent; the stop sits at row 14 between G7 and G8; no surface is aspheric; every `type` agrees
with the signs of R; no `apd` tag is set, because Yongnuo's drawing does not show which positions are low-dispersion.

Glass and colour: all eleven labels resolve (glasscheck), each to a row that rounds to the printed nd with |Δνd|
≤ 0.10. On axis the model's C, d and g curves agree with Fig. 2 within about 5 µm per zone (g at full aperture about
7 µm). Fig. 3 confirms the rows: a Coddington trace with their five-decimal indices reproduces the plotted T and S
curves within about 1 µm (corner −90 / −73 µm); with the printed indices the corner T is −46 µm, and G3 alone
(1.772 for 1.7725) accounts for most of the gap. The engine's field-curvature analysis agrees with the Coddington
trace. Distortion at the corner is −3.93% against Fig. 3's −3.9%.

Open: G3's nd 1.772 (and the other rounded indices) could take the catalog values the labels name (1.59282, 1.94595,
1.7725, 1.76182, 1.80809, 1.85451) to reproduce Fig. 3; that is an nd change, outside this pass. Open: the rear
plate (nd 1.517, νd 64.2) has no glass label; H-K9L (CDGM, 1.51680 / 64.20) matches. Open lines of the semi-diameter
pass (G4's slanted top edge, the G6/G7 step) remain.

## 2026-11-09 — Rear plate glass

The rear plate (nd / νd as printed) now carries `glass: "H-K9L (CDGM catalog equivalent; production supplier
unspecified)"`, confirmed with trylabel (catalog 1.5168 / 64.20), so it traces on catalog dispersion instead of the
Abbe-number fallback.
