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
at S7–S9; review against Figure 1 in the rim pass.
