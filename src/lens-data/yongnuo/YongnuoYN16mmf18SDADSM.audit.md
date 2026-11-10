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
stop-centred trace puts the 41.5° chief ray at 9.09 mm on S4, so the rim is not the cause and stays. Figure 1 draws the
filter plate GL smaller than the traced plate, which is not drawn on the site.
