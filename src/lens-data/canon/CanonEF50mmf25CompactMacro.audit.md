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

## 2026-11-04 — Final diagram, rim and label review

Compared the local page (infinity, 0.5× and the focus-motion overlay) with the patent's Fig. 1 (p. 5) and Canon's construction diagram. The patent has no Example 2 section: its brief description of the drawings (p. 4) says Fig. 1 is Example 1 and Figs. 2 to 4 are aberration curves. Fig. 1 is therefore read as a sister-example reference, with the maker diagram as the production reference.

Fig. 1 scale, from the 347 ppi native raster with the axis at row 1290: vertices S1 489 px, S12 939.5 px, S14 992 px, S18 1109.5 px, giving 15.84 px/mm over S1 to S18 (39.18 mm at D14 = 1.6) and 16.04 px/mm over S1 to S12. Rim half-heights (mean of both sides, Example 1 mm): L1 10.7, L2 10.4, L3 9.3, L4 9.0, L5 9.5, L6 10.6, L7 12.6, L8 13.8, L9 14.1. Every element is drawn square-cut. Flat lands are drawn on L3's rear face (cap end q 0.82 to 0.83) and L5's front face (q 0.83 above the axis, 0.86 below, ±0.012). Canon's diagram (native crop 2.61 px/mm over the 39.67 mm Example 2 vertex span) gives half-heights L1 30 px, L2/L3 28.5, L4 29, L5/L6 28.5, L7 30 and L8/L9 37 (±0.5 px, about ±0.2 mm), with L4 and L5 square-cut and almost touching near the cap end of L5's front face.

On the page before this pass, L3 flared from 9.2 mm at S5 to 10.0 mm at S6, L4 tapered from 10.5 mm to a point at 8.4 mm, and L5 fanned out from 8.4 mm to 10.5 mm. Neither drawing shows any of these wedges.

| Face | Before | After | Evidence | Light (rimcost vs package rims) |
| --- | --- | --- | --- | --- |
| S6 (L3 rear) | 10.0 | 9.2 | L3 square-cut in both drawings; Fig. 1 9.3 mm. Floor: axial 7.87 mm, full-field beam 8.75 mm at infinity, 8.46 mm at 0.5× | 0.0 pts at every field |
| S9 (L4 rear) | 8.4 | 10.5 | L4 square-cut in both drawings, at L5/L6 height in Canon's; S10's 8.4 mm cap still limits the beam | 0.0 pts at every field |
| S10 (L5 front) | 8.4 | 8.4 with `rimExtensionSd` 10.5 | Fig. 1 land on this face at q ≈ 0.845; here q = 0.80, because the cap cannot pass about 8.6 mm without crossing S9 in the 1.35 mm gap. Canon draws L5 at L6 height | 0.0 pts (clear aperture unchanged) |

The rimcost run against the package baseline shows base, file and trial identical (100.0, 98.0, 95.2, 89.8, 82.5, 73.5, 62.9, 52.1 and 40.1 % from 0° to 23°), worst loss 0.0 points; the one-element restores win back 0.0 points each. The engine vignetting curves at focus 0.5 and 1 are also unchanged. A finite-object trace of the 0.5× state (object 124.77 mm before S1, stop radius 7.874 mm) puts the axial ray at 7.75 mm on S6 and 8.35 mm on S9 and S10. That 0.05 mm margin under S10's 8.4 mm cap is the tightest in the lens and was not changed. The chief ray reaches 21.8 mm inside every rim.

After the edits the validator passes, with no undersized image circle and 99 % field coverage (23.0°, 21.33 mm of 21.65 mm; corner 23.3° clear). The aperture is within 3 % of f/2.5, and clearap shows no CLIPS-AXIAL or BLOCKS-CHIEF at infinity. The engine is unchanged: EFL 50.327 mm, f/2.5, half-field 23°, stop SD 7.874 mm, BFD 38.907 mm. At focus 1, clearap flags S15 to S18; that comes from its infinity-conjugate rays overdriving the near state to a 30.7 mm image height, before and after this pass. `gapSagFrac` 0.925935 is still set by S4/S5 alone: at 0.9259 the validator refuses 0.56 mm of combined sag against 0.556 mm allowed at sd 9.2. The new S10 land passes at 0.90.

Checked and found correct:

- Groups I (surfaces 1 to 14) and II (15 to 18) follow Fig. 1's notation and brackets. CD1 (10 to 12) is the only cemented pair. Elements are L1 to L9, since the patent names no elements.
- Every `type` matches its radius signs. The roles agree with claims 1 to 4 (lens B is the positive meniscus convex to the image behind the stop; air lens A lies in group II). All surfaces are spherical, so there are no aspheric markers, and the stop sits at row 7 between L3 and L4.
- No `apd` tags: the patent designates no anomalous-dispersion glass and Canon lists no special element. All nine glass labels resolve to catalog rows; the L5 inspector shows S-TIH6.
- Focus index 0 is infinity (D14 1.7 mm) and index 1 is 0.5× (D14 26.9 mm). In the overlay, group I's centre moves from −63 mm to −88 mm from the image plane, 25.20 mm toward the object, while group II stays at −42 mm. The slider runs from ∞ to 23 cm.

Remaining differences:

- L7 stays 11.1 mm, level with L1 as in Canon's diagram; Fig. 1 draws Example 1's L7 at 12.6 mm.
- L3's front stays 9.2 mm, below L2, because S4/S5 would cross, where Canon draws L3 at L2's height.
- Fig. 1's L3 rear land (q 0.83) would put the cap at 7.6 mm, inside Example 2's 7.87 mm axial beam at S6, so it is not drawn.
- Fig. 1's step from L5 (9.5 mm) to L6 (10.6 mm) at the cemented face is not drawn; Canon draws them level.
- L8 and L9 stay level at 13.7 mm, as Canon draws them; Fig. 1's L9 is 0.3 mm taller.
- 2026-11-04 coordinator note: doublet labels renamed from the CD series to D1… (corpus convention).
