# Yongnuo16 source and native audit

Literal CN214795390U sole example, unscaled; probable product association, not factory prescription. All21 rows, complete aspheres, source stop,2mm plate and image plane roundtrip exactly. Literal assignee 深圳市永诺摄影器材股份有限公司 is translated as Shenzhen Yongnuo Photographic Equipment Co., Ltd.; no equivalence with 深圳市永诺电器有限公司 is asserted. Source prose contradictions remain in analysis. Baseline9d121be76e14bc5098256ee78cd0a7545a1acf11 has2253 real commits; bounded alias and direct numeric-radius fingerprint checks found no duplicate.

The source does not publish optical clear apertures. Native geometry, zero render trim and iris clearance pass with inferred caps. Initial caps clipped1.69% of the iris-admitted axial radius. A rejected S9-only change left S7 clipping. The minimum0.01mm-grid pair S7=9.11mm/S9=9.19mm now admits the actual iris boundary, with the stop limiting. No published optics, other caps, rim cuts or gap allowances changed. The source f/1.78 is retained under the repository's paraxial EPD=EFL/N convention; the distinct nonlinear diameter ratio is not a source-aperture failure.

Coarse52-sample stop-lattice throughput at0/20.75/41.5degrees is100%/84.62%/34.62%. At128-grid, midfield/edge admission is11440/12892 and3796/12892. Strong real edge vignetting remains. Actual peripheral chiefs at20.749724/41.499998degrees land at6.108615/13.871722mm. The engine APS-C reference radius14.175mm only encodes these source-field target heights, not a source-measured sensor size or135-format corner.

Source-plane d-line geometric and diffraction MTF converge at sampled0/10/20/30/40lp/mm with up to128-grid. Historical64-grid peripheral failures and separate best-axial diagnostic are preserved. The+0.006034794mm best-axial shift is not authored. C/d/F and photopic modes are unavailable because low-dispersion glasses lack partial-dispersion data; no glass curves are invented.

The fixed runtime carries verified maker0.17m MFD as catalog context only, without continuous focusing law or certified finite conjugates. Separate literal X20/MOD snapshots build with zero trim. Under the unprinted first-vertex distance hypothesis, native near-axis residuals−0.016821187/+0.017917117mm agree with independent ABCD; EFL16.219544511/15.641355382mm differs from printed16.207/15.677. No finite retuning or finite-field certification is claimed.

Original/rejected cap hypotheses,64-grid convergence limits, best-axial and conditional finite results remain in evidence. Local visible registration is for isolated tests/prerender only, not publication (closed 2026-11-10: cleared for deployment after validation). Metadata, typecheck, formatting, lint, 23 focused regression files / 1,609 tests, local build and SEO passed. Specific built page/data/analysis equality and official aperture census passed. Guarded installer checks passed. The complete repository test suite was not run; gate logs govern the exact scope.

## 2026-11-10 — Deployment validation

Independent check against CN 214795390 U, sole example (Table 1, page-7 image): 21 rows (R, d, nd, νd including the
plate and the stop), two aspheres (K, A4–A10) and the Table 3 gaps at three states agree. Engine EFL 16.351 (printed
16.34), F/1.78, BF and TL 80.78 reproduce, half-field 41.5°. The printed MOD state gives 171.9 mm object to image at
m −0.151, matching Yongnuo's 0.17 m and 0.15×. Front page: 深圳市永诺摄影器材股份有限公司 (Shenzhen Yongnuo Photographic
Equipment Co., Ltd.), inventors 庄建南 and 叶远华. Attribution strong: 10 elements in 8 groups; the ED, low-dispersion,
high-index and aspherical positions in Yongnuo's legend fit L3, L5, L4/L6 and L8. `audit:aperture` passes.

Deployment change: none.

Open: Table 3 supports a modelled focus range (gaps after surfaces 13 and 15); subtitle, specs, focus text, element
prose and analysis wording (wording items closed in the cleanup pass below; the focus range stays open).

## 2026-11-10 — Cleanup and wording pass

Fields changed in the data file: header comment rewritten in plain terms (same facts: tables used, unscaled INF state,
rear plate, K = 0 and C4–C10 → A4–A10, inferred semi-diameters with the S7/S9 minimum, prose-versus-table conflicts,
unmodelled X20/MOD states). `subtitle` "CN 214795390 U sole example; probable retail association, literal unscaled
prescription" → "CN 214795390 U, sole embodiment — strong production correlation". `specs` → "10 ELEMENTS / 8 GROUPS",
"DESIGN f = 16.34 mm", "DESIGN F/1.78", "2 ASPHERICAL SURFACES / 1 ELEMENT" (dropped "2 ASPHERICAL SURFACES" and
"SOURCE-PRESERVING INFINITY MODEL"). `focus.closeFocusM` 0.17 → 1e15 placeholder (Yongnuo's 0.17 m stays in
`catalog.closeFocusM.marketing`); `focus.description` rewritten as plain text (infinity only; L8 moves 1.89 mm toward the
object; Table 3 states not modelled). Ten identical element roles replaced with specific ones. Cemented ids and doublet
labels D1/D2 → C1/C2; group label "GR2 FOCUS" → "GR2 (FOCUS)"; rear-plate `source` reworded. `apd: "inferred"` with
`apdNote` on L3 and L5 (Yongnuo's legend lists one low-dispersion and one extra-low-dispersion element; these are the
only glasses with νd above 60).

Glass relabels (catalog Sellmeier nd/νd against the printed values): L1 → M-LAF81 (HOYA), Δnd −3 × 10⁻⁷, Δνd 0.000;
L2 → TAC8P (HOYA), Δnd −9 × 10⁻⁷, Δνd +0.038; L3 → H-FK61 (CDGM), Δnd +1 × 10⁻⁶, Δνd −0.002 (FCD1 −0.006 and S-FPL51
−0.069 also fit; H-FK61 is closest); L6 → TAFD35 (HOYA), Δnd +4 × 10⁻⁷, Δνd 0.000; L9 → S-TIH14 (OHARA), Δnd
+2 × 10⁻⁶, Δνd −0.036 (J-SF14 +0.031 and FD140 +0.055 also fit). No exact row for L4 (1.900696/37.05), L5 (1.437/90.70),
L7 (1.71852/33.46), L8 (1.726/54) or L10 (1.696732/56.42); they keep `Unmatched (…)` labels stating the printed values.
No `nC`/`nF`/`ng` were present.

Analysis: process text removed (cap-grid history, sample-lattice and MTF-convergence runs, test and build counts,
"native"/"literal"/"runtime" vocabulary, run-together numbers); "Verification and Remaining Limits" renamed "Model Scope
and Limitations" and reduced to model properties; element sections rewritten with the catalog glasses and patent
paragraph citations; group powers (+25.9 / +29.2 / −141 mm) stated against the abstract's wrong order; focus section
now states the first-surface reading of Table 3 (171.9 mm object to image, m −0.151, matching Yongnuo's 0.17 m and
0.15×) and that Figure 3 shows the MOD state; sources annotated.

Engine numbers, identical before and after: EFL 16.350534 mm, FOPEN 1.78, halfField 41.5°, tracingHalfField 35.978°,
stop semi-diameter 8.726954 mm, BFD 1.0626 mm, total track 80.78 mm. `audit:surface` OK; `audit:aperture` 1 station
within 3 % of the stated f-number, no rim limit.

Open: model the Table 3 focus range (gaps after surfaces 13 and 15; X20 640.38 mm and MOD 91.094 mm from the first
surface, 721.2 mm and 171.9 mm object to image). `lensMounts` lists Sony E only; Yongnuo's catalog column shows Z/E for
this model, so a Nikon Z entry needs a maker source naming the Z version. Rims: S7/S9 are at the minimum for the
paraxial f/1.78 stop; a real-ray bundle at the patent's 4.605 mm pupil radius (Figure 2) would need about 9.5–9.7 mm
at S7–S9; review against Figure 1 in the rim pass (closed in the semi-diameter pass below: S7–S9 kept).

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: CN 214795390 U, Figure 1 (page 9), the sole embodiment at infinity; raster 150 ppi, measured at 300 dpi. Scale:
17 vertex crossings beside the axis (S1 through S19, with S2/S3 merged) fit 19.137 px/mm, with residuals within
±12 px (±0.6 mm), so the drawing is close to scale but hand-finished. The vertical scale checks on two features: G1's
rim reads 17.05 mm against the authored 17, and the stop ticks' inner ends read 8.9 mm against the engine stop of
8.73 mm. Each rim is the centre of the drawn rim line, averaged over the upper and lower halves (they agree within
0.2 mm); flats outside a curve's end (G2's and G3's rear annuli) are treated as mounts.

| Surface | Before (mm) | Figure (mm) | After (mm) | Evidence |
| --- | --- | --- | --- | --- |
| 1 / 2 | 17 / 17 | 17.05 | kept | square-cut G1 agrees |
| 3 / 4 | 14 / 10 | 14.1 / 10.35 | kept | 1 % and 3.5 %, noise |
| 5 / 6 | 10 / 8.5 | 10.3 / 8.8 | kept | 3 % and 3.5 % |
| 7 / 8 / 9 | 9.11 / 9 / 9.19 | 9.34 (square-cut) | kept | 1.6–3.8 %; see below |
| 11 / 12 / 13 | 8.5 / 8.5 / 8.0 | 8.74 / ≈8.5 / 8.4 | kept | 3–5 %, step order agrees |
| 14A / 15A | 8.5 / 9 | 9.59 (square-cut) | 9.5 / 9.5 | 13 % and 7 % under the drawing; L8 drawn square |
| 16 / 17 | 10 / 10 | 10.24 | kept | 2.4 % |
| 18 / 19 | 11 / 11 | 10.7 | kept | 3 % over, noise |

L8 is the only element outside noise: Figure 1 draws it square-cut at 9.6 mm (9.64 upper, 9.54 lower), both faces
ending on one flat, while the file had a stepped 8.5/9.0 rim. Both faces go to 9.5 mm. The `--scan` of 14A and 15A
shows no turnover to 10.5 mm; at 9.5 mm the front face departs −1.90 mm from its base sphere (rim angle 54°) and the rear face −0.33 mm (44°). The rim
gap to S13 stays open and the validator passes.

S7–S9 stay. The figure (9.34 mm, square-cut) is within 4 % of the file. A real-ray beam at the patent's 4.605 mm pupil
radius (Figure 2) would meet S7, S8 and S9 at 9.70, 9.46 and 9.62 mm, but it would also pass the stop at 9.10 mm; the
model's stop is the paraxial 8.73 mm, which the axial beam clears at S7 and S9 by 0.01 mm, so a raise would change
nothing on axis and the figure does not ask for it.

Clearance and light: `audit:surface` OK; `audit:aperture` 1 station within 3 % of the stated f-number, no rim limit;
`audit:image-circle` 0 undersized; `audit:field-coverage` 98 %, stopped by the declared 41.5° (corner 42.1° clear),
unchanged. Engine EFL 16.3505 mm, FOPEN 1.78, halfField 41.5°, tracingHalfField 35.98° and stop 8.727 mm are identical
before and after. Wide-open illumination (engine, infinity) before → after: 23.7° 86.2 → 86.7 %, 29.6° 78.3 → 82.1 %,
35.6° 67.5 → 72.7 %, 38.5° 53.5 → 56.5 %, 41.5° corner 29.2 → 30.2 %; no field loses light (largest gain 5.3 points).
The maker-diagram comparison stands as recorded in the deployment-validation section (10 elements in 8 groups; the
low-dispersion, extra-low-dispersion, high-index and aspherical legend fits L3, L5, L4/L6 and L8); no maker image was
viewed in this pass.

Open: the engine's tracingHalfField (35.98°) is set by its approximate chief ray meeting S4's 10 mm rim; an exact
stop-centred trace puts the 41.5° chief ray at 9.09 mm on S4, so the rim is not the cause and stays (carried into the
second review's Open line below). Figure 1 draws the filter plate GL smaller than the traced plate, which is not drawn
on the site.

## 2026-11-10 — Glass label

L7 relabelled from Unmatched to ADF455 (HOYA, discontinued): HOYA's obsolete-glass catalog prints 1.718520 / 33.456548
against the patent's 1.71852 / 33.45655 (Δnd 0, Δνd 0.000). The row was added to the glass catalog for this lens.

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page as shot after the semi-diameter pass (infinity, the focus-movement overlay and the inspector for
all ten elements) against Figure 1 (page 9, 150 ppi raster read at 300 dpi on the 19.137 px/mm vertex scale of the
pass above), the patent text (¶0042–¶0069), Tables 1–4 and Figure 2. The vertical scale holds on three tops: G1 17.0,
G2 14.1 and G8 9.4–9.6 mm against the file's 17, 14 and 9.5 mm.

Rims. Figure 1 draws G2, G3 and G8 as square blanks in which one face's curve stops short of the edge and a vertical
stroke carries on to the flat top; the site drew a slanted edge from the taller face to the shorter (G2, G3) or ran
G8's aspheric front face up to 9.5 mm. Each shorter face now keeps its cap and gains a land (`rimExtensionSd`).

| Surface | Before (mm) | Figure 1 reading | After (mm) | Light (rimcost, against the base1118sd rims) |
| --- | --- | --- | --- | --- |
| S4 (G2 rear) | 10 | cap ends 10.3, land to 14.1; land at sag 6.6 mm | 10, land to 14 | land costs 0.0 points; drawn, kept |
| S6 (G3 rear) | 8.5 | cap ends 8.9, land to 10.3 | 8.5, land to 10 | land costs 0.0 points; drawn, kept |
| 14A (G8 front) | 9.5 | cap ends 7.4–7.5 at sag −1.12 mm, land to 9.4–9.6 | 7.5, land to 9.5 | cut below base 8.5: worst 0.7 points at 23.7°, slight, kept; land 0.0 |

14A is the real error: at 9.5 mm its aspheric cap sags −2.90 mm, so the site drew a forward lip 1.8 mm ahead of the
figure's front edge. The figure's vertical stroke sits at −1.12 mm, and the model reaches that sag at 7.41 mm
(sag(7.5) = −1.16 mm), so the height reading and the axial position agree. The front face carries no light past
8.0 mm; 7.5 mm trims 0.3–3.0 points between 20.75° and 38.5° against the file before this review, and against the base
rims the lens loses at most 0.7 points (23.7°) and still gains up to 3.1 (35.6°). S4 stays at 10 mm: the figure's
10.3 mm cap would be 66.0° steep, past the 64.2° rim-slope limit, and is inside the reading error. Kept as read:
G1 (S2's cap ends near 16.0 mm with a 1 mm land, 6 %), GJ1 at 9.11/9/9.19 mm, GJ2 (S13's cap ends near 7.4 mm with a
short stroke to about 8.4 mm against 8.0 mm), S15 (its curve meets the flat top at 9.5 mm, sag −3.71 mm against the
model's −3.56 mm), G9 and G10.

Lands and cuts: S4, S6 and 14A lands cost nothing (`--noext`); the one cut, 14A, costs 0.7 points at 23.7° and meets
the light rule. Final `rimcost.mjs` worst loss against the base rims 0.7 points at 23.7°; worst gain 3.1 points.
Full-pupil light, before → after: 20.75° 88.79 → 88.54 %, 29.64° 82.09 → 79.12 %, 35.57° 72.74 → 70.57 %,
41.5° 30.17 → 30.05 %. `audit:surface` OK, `audit:aperture` no rim limit, `audit:image-circle` 0 undersized,
`audit:field-coverage` 98 % to the declared 41.5° (unchanged). EFL 16.3505 mm, FOPEN 1.78, halfField 41.5°,
tracingHalfField 35.98° and stop 8.727 mm are unchanged.

Labels. The patent names the elements G1–G10, the cemented pairs GJ1 and GJ2, the groups GR1–GR3, the stop SP and the
plate GL (¶0044, Figure 1). Element `name` L1–L10 → G1–G10 with matching `diagramLabel`, doublet brackets and
`cemented` ids C1/C2 → GJ1/GJ2, G8 `type` → "Positive Meniscus (2× Asph)"; the analysis follows. Types agree with the
radius signs (G1–G4 menisci convex to the object, G5/G6/G10 biconvex, G7/G9 biconcave, G8 a meniscus concave to the
object); 14A and 15A are Table 1's only aspheres; the stop sits between GJ1 and GJ2 as Table 1 and Figure 1 place it;
group and doublet brackets span 1–13, 14A–15A, 16–19, 7–9 and 11–13. Every inspector shows a focal length. G3 and G5
keep `apd: "inferred"`: the patent never calls either glass anomalous, but condition (3) requires νd > 85 for G5
(¶0050–¶0052), now quoted in its `apdNote`.

Movement: a static model; the focus overlay reports no group movement and the slider reads "Not modeled". Table 3's
d13/d15 are 5.51/2.26, 5.17/2.60 and 3.62/4.15 mm (INF, X20, MOD), so G8 moves 0.34 and 1.89 mm toward the object;
the arrow under GR2 in Figure 1 points to the object and ¶0042's "toward the image" is the text's error. The
`focus.description` agrees.

Glass and colour. The patent prints d-line nd/νd only (Table 1), with six-decimal νd for G5, G9 and G10 in Table 4
(90.702365, 26.553651, 56.420174); the sole embodiment gives no recurrence test. The six labels resolve inside the
window (`glasscheck.mjs`). G4, G5, G8 and G10 have no row within 1 × 10⁻⁴ / 0.15 in the repo catalog or the HOYA,
OHARA and Sumita AGF files; nearest are TAFD37 1.90043/37.37, FCD100 1.43700/95.10, OHARA S-LAL60 1.725999/53.566 and
HOYA LAC15 (discontinued) 1.696800/56.115. Three printed pairs equal discontinued OHARA rows to every digit: G3 FPL51
1.496999/81.614660, G9 PBH14 (and PBH14W) 1.761819/26.553651, and the plate BSL7 1.516330/64.150145
(`OHARA_260701.AGF`); none is in the repo catalog. The current H-FK61 (Δνd −0.002) and S-TIH14 (Δνd −0.036) labels
stay inside the window; the plate carries no `glass` label and S-BSL7 (OHARA) would resolve (Δνd −0.008). Figure 2
(pupil radius 4.605 mm, 486/588/656 nm) puts the paraxial C and F foci 12 and 26 µm behind d; the model gives 13.4
and 28.4 µm. The d-line spherical aberration at 50 % and 70 % of the pupil reads +20 and +22 µm on the plot and in the
model. No element is nd-only and no partial dispersion is printed.

Assignee: Shenzhen Yongnuo Photographic Equipment Co., Ltd. matches the front page and the corpus spelling.

Open: the engine's tracingHalfField (35.98°) still comes from its slope-launched chief ray meeting S4; the
stop-centred chief ray (`solveChiefRayForRuntimeLens`) crosses S4 at 8.08 mm at 36° and 9.09 mm at 41.5°, so the
diagram's off-axis fan is drawn at 0.87 of the requested field. S4 can rise only to about 10.1 mm under the rim-slope
limit, which would raise tracingHalfField only to 36.25°.

Open: catalog rows OHARA FPL51, PBH14 and BSL7 (discontinued, `OHARA_260701.AGF`) would let G3, G9 and the plate carry
the digit-exact design glasses.

Rear plate GL labelled S-BSL7 (OHARA; Δnd 0, Δνd −0.008), so it traces on a catalog curve. The printed 1.51633 / 64.15015 equals
discontinued OHARA BSL7 to every digit, and G9's printed νd 26.553651 likewise equals discontinued PBH14; neither row was
added to the catalog, because both would change how other lenses' labels resolve (Mamiya Sekor AF 55, Fujifilm XF 23,
Olympus Zuiko 85-250, Panasonic Leica DG 15). The current exact rows S-BSL7, S-TIH14 and H-FK61 stand.
