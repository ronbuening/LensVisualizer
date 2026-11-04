# Source and numerical audit

- Whole JP S63-179308 A Numerical Example 2; Grade B probable family, not factory-exact.
- Literal R/d/N/Abbe and fixed source planes retained; no optical tuning or front protector invention.
- Inferred caps and unprinted stops frozen before MTF; rejected geometry and raw pupil failures retained.
- Normal scalar native sampled convergence is not independent phase/factory certification.
- Finite source spacing with independently derived conjugate; no continuous patent cam.
- Native input SHA256 `94233890b21818df17b1b8c5c1f77393a1f0b51d208b057298c1e0e0cfe1c0c4`; bibliographic transformation is recorded separately.
- Self-contained original sources, plan, scripts, final report-generation provenance, tests and custody verification accompany the private package.
- 2026-11-04 deployment validation: surface 18 corrected from 1411.23 to the printed R18 = 1441.23 (patent p.4 scan; the printed |Φ2|/Φ = 0.002 confirms it). Terminal gap, EFL, close-focus distance and the analysis numbers follow (EFL 50.327 mm, BF 38.907 mm, β −0.4993).

## 2026-11-04 — Wording, glass and metadata pass

No R, d, N/ν, stop or semi-diameter value changed in this pass. The engine numbers are identical before and after: EFL 50.327 mm, f/2.5, half-field 23°, stop SD 7.874 mm, BFD 38.907 mm, focus keyframes D14 1.7 / 26.9 mm (near: 124.77 mm from S1, 228.55 mm object to image, −0.4993×).

Data file fields changed: header comment rewritten as plain facts (patent example, no scale, d-line reading, R18 corrected to the printed 1441.23, inferred semi-diameters, S4/S5 clearance and gapSagFrac); subtitle "JP S63-179308 A Numerical Example 2 — probable family; inferred apertures" became "JP S63-179308 A, Example 2 — probable production correlation"; specs became 9 ELEMENTS / 8 GROUPS, DESIGN f = 50.3 mm, DESIGN F/2.5, ALL SPHERICAL, FLOATING FOCUS; 0.5× MAX; catalog.closeFocusM marketing 0.23 m added (Canon); all nine element roles rewritten to each element's job, using the patent's claims (claim 3 modified Gauss group I, lens B = L4 with ΦB/Φ = 0.52, air lens A between L8 and L9 with ΦA/Φ = −0.37, |Φ2|/Φ = 0.002); focus description and near-conjugate source text rewritten without run-together words.

Glass: the patent prints N and ν with no line subscript and no partial dispersions. All nine pairs match d-line catalog rows inside the |Δnd| ≤ 0.0001, |Δνd| ≤ 0.25 window, so every Unmatched label was relabelled and its indexReferenceNote deleted (indexReference "d" kept; no nC/nF/ng/dPgF present). Where several rows round to the printed value, OHARA was preferred. L1 S-LAL10 (Δnd −0.000005, Δνd +0.03); L2 S-LAH53 (−0.000002, +0.03; Schott P-LASF47 matches νd exactly but is a precision-moulding glass and ties at printed precision); L3 BAFD3 HOYA (+0.000001, +0.06; no OHARA row in the window); L4 S-TIM35 (−0.000003, +0.03); L5 S-TIH6 (+0.000001, +0.03); L6 S-LAH60V (−0.000001, +0.01); L7 S-LAH66 (−0.000001, −0.002); L8 S-BAH11 (−0.000002, +0.03); L9 S-TIL25 (−0.000001, +0.05). No patent θgF exists to compare.

Analysis: process text removed (private packets, script errors, MTF convergence and pupil-sample tables computed with the old R18, receipts, corpus-normalization note); "Verification Summary" replaced by "Model Scope and Limitations"; element sections given nd/νd/glass/f lines and roles drawn from the patent text (conditions (1) to (3), claims 3 and 4); glass table added; focus section given an infinity/near table; Canon construction diagram added to sources.

Validators after the pass: audit:surface OK; image-circle 0 undersized; field coverage 99 % (declared 23°, 21.33 mm of 21.65 mm, corner 23.3° clear); aperture within 3 % of f/2.5; clearap no CLIPS-AXIAL or BLOCKS-CHIEF.
