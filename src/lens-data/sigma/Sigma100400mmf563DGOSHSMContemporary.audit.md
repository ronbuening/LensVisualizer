# Sigma C017 100–400 DSLR — audit

## Disposition

Closed 2026-10-31: validated and cleared for release (last section). Related patent JP 2017-223778 A Example 1, exact factory identity unproved. No source correction, shared engine change or hidden best-focus refit.

## Literal source and independent review

Original 37 rows include flat stop 25; 21 glass / 15 components. All radii, thicknesses, d-line indices/Abbe values and five native gaps including BF are literal. Independent source review has 229 normalized comparisons and Decimal50 reproduction; grant same-example table equals application and clearer grant Fig. 1 is supplemental aperture-inference evidence. Independent source manifest is `independent_source_review/FROZEN_REVIEW_MANIFEST_v001.json` SHA 53fe61650edead1042b5511b4fc34ab0698f882c24d696cf1ed78cc7f32fe824.

## Deliberate inferences

Authoring state; the last section supersedes the rims of S1–S5 and L19, the station count and the glass entry.

- Grant Fig. 1 approximate rim measurements, 7.428136 px/mm six-vertex fit. No factory aperture claim. Original initial rounded model and failed default 90 % diagnostics retained.
- Geometry-bound L7/L12 inferred radii 11.8/12.1 mm only; all required default geometry checks retained, no override.
- 129-control G4-compensated zoom, preserving source d5/d15/BF and fixed-G2 coordinate; calculated intermediate EFL labels, three published native rows only.
- 19 finite controls to maker 1.6 m using source-supported direction/group but inferred travel, not published conjugates. Max sampled distance error 1.863 %, plane residual 0.015519 mm; raw sub-.004 focus not certified.
- Factory glasses unassigned. Existing coordinate-compatible catalog alternatives recorded but no uncertain partial dispersion injected. Reference MTF only; CDF/photopic guard retained.
- OS centered, no decenter model.

## Rejected / superseded evidence

Raw three-row zoom adds ~11.092 mm defocus; 3/9/17/33/65/129 studies retained. Forced-EFL/two-group cam trial and its large/virtual finite-label errors remain diagnostic only. The smaller-assumption one-group cam is selected. The 35-focus-key candidate remains immutable; 19 keys chosen after tiny valid-ray sensitivity and unchanged far-label error. Failed marginal-aim image numbers in the focus-density diagnostic are INVALID and excluded in its adjudication.

`geometry_and_finite_guards.json` v001 used an empty-field `.every` assertion and is superseded. The corrected v002 records actual top-level support, checking all 264 finite reasons explicitly. It does not imply optical finite MTF. Source/full-format pupil failures remain raw; noBracket requests are not counted as launched/clipped/pass. Fullscope source-only and prior failed receipts are retained.

## Additive reproducibility and title corrections (v003)

The original focus sensitivity script incorrectly left its count-35 branch reading the later live 19-key candidate; the original 65-control MTF branch installed 35-column gaps without setting 35 focus keys. Those scripts and historical outputs remain immutable. Versioned `reconstruct_density_inputs_v003.mjs`, `audit_focus_density_rays_v003.mjs` and `audit_mtf_sensitivity_v003.mjs` bind immutable prior-35 SHA 88fc025cd0cf9c6b031412dc9629bd5c5cea7347e7dfc10d906d6ca5fc30dd6b, selected-19 SHA d03aacf905cadeaa80d947a63cb6640b76af725bf5bbe6c142f81ae4c1399afe, and the frozen study. They reconstruct true variants, assert every grid dimension and save exact derived hashes.

Corrected 20-request finite replay has 18 valid image intercepts exactly equal to the historical valid-only values. The two other marginal requests are unlaunched; their earlier trial-path clipped status/image projection was not meaningful and is explicitly reported as a classification correction. Full comparison retains all optical/status differences, with no excluded failed rows. Four compared infinity MTF cases (16 fields) match complete historical results, not only curves. Final-candidate applicability is established through infinity-state equivalence; these new receipts do not retroactively prove the old scripts' missing input provenance.

The original title was incorrectly shortened to Zoom Lens. The analysis now gives the actual p. 1 (54) Japanese title 防振機能を備えた変倍結像光学系 with a labeled translation. Selected model JSON and formatted data module remain byte-identical. Prior writer/analysis/audit versions are reconstructable through `validation/corrections_v003/changed_original_recovery_map.json` and the original v002 manifest.

## Final binding and mandatory unrun gates (closed 2026-10-31)

`final_changed_data_rebind.json` proves final 19-key candidate and prior 35-key diagnostic have identical 297 sampled physical states, including every sampled pupil state and all infinity geometry, and binds raw result hashes. Final candidate is rebuilt independently at each variant; no mutated cached geometry. This is not proof over every arbitrary interpolation control.

No full-project typecheck, format check, lint, main corpus, tooling or build run is claimed for this target; no actual viewer run. The earlier user provisional waiver for 145/408/262 does not apply. Runtime 77ad7af3543833602509a6ab164fbf6870e12ad2 stays pinned and unmodified. Local formatting of these three files is not a full-project format gate. Final independent authoring/model review is owed. Closed 2026-10-31: the independent review is done (last section), the page was viewed, and the project-wide checks belong to integration.

## Source-only reproduction

Use `repro/rebuild_source_only.sh` in an isolated copy with the pinned Python/NumPy and Node 24.22.1/installed Prettier. It reconstructs literal transcription, graphic-rim and geometry adjustment, cam/focus study, candidate and three overlay files. It does not invoke whole-project tasks or install dependencies. Validation evidence is supplied to reproduce the explanatory prose, never to substitute an optical model for source rows. All source originals and raw alternatives are retained; source-coverage receipt and final manifest bind bytes.

## 2026-10-31 — Deployment validation and fix pass

Source re-read: 37 rows (185 field checks across label, R, d, nd and νd) and 15 printed gaps against the application text and the page images of pp. 13–14, with no mismatches. The grant's numeric tables equal the application's for all five examples (289 lines, no differences). The patent prints three infinity zoom columns and no finite-focus column, no asphere and no rear plate.

First-order, patent vs model: EFL 103.16 / 200.12 / 387.95 vs 103.1655 / 200.1186 / 387.9493 mm; half-field 11.68 / 6.005 / 3.105° vs 11.68 / 6.01 / 3.10°; total length 221.6588 / 259.3522 / 281.5591 mm exact; BF printed exactly, with paraxial BFD differing by 0.0009 / 0.0006 / 0.0031 mm. Group focal lengths reproduce, including G2a and G2b. Conditions compute to 0.640, 0.724, 2.554, 0.808 and -0.0067 against printed 0.64, 0.72, 2.55, 0.81 and -0.007. Maximum on-axis LSA at any station is 0.225 mm, so the table holds no misprint. The stop rule is unchanged: EPD 20.03 / 33.80 / 59.68 mm, stop radius 10.53 / 10.50 / 10.51 mm.

Maker diagram: Sigma's construction drawing, measured at 32 surface positions and fitted by scale and offset, matches Example 1 at the wide position to 0.135 mm RMS at 5.77 px/mm. Example 2 fits to 0.566 mm, Example 5 to 0.739 mm and Example 3 to 1.196 mm, and Example 4 has 20 elements. The drawing's SLD positions are L2, L3, L18 and L20. At 1.6 m the tele magnification is 1:3.81 for Example 1 and 1:3.78 to 1:3.84 across the examples, so it does not separate them. The DG DN sibling (JP 2021-92636 A, 22 elements, key `sigma-100-400-f5-63-dg-dn-os-c`) does not collide with this key, which is unchanged.

Rims changed: S1–S3 34 to 32.5 mm, S4–S5 33 to 31 mm, S33–S34 12 to 14 mm, from the drawing's 32.2, 30.8 and 14.2 mm at the fitted scale. Axial marginal height reaches 29.84 mm at S1, clear at every printed station, and clearap reports no axial clip or blocked chief ray at infinity. Corner transmission wide open at infinity goes from 56.2 / 70.5 / 62.7 % to 56.2 / 64.3 / 57.5 % at wide / middle / tele; the front rims account for the whole change and L19 for none of it. The render now matches the drawing's proportions, with L19 level with the L20/L21 doublet.

Zoom grid: thinned from 129 to 65 stations by keeping every second station, which leaves the three printed stations (now 0, 32 and 64) byte-identical; 19 focus keys are unchanged. protcmp reports only the seven rim changes. turns reports the printed d25 turn at the middle station and adds the printed G2 wiggle of 0.0006 mm at the same station, which the tool's 1e-5 rounding hid on the finer grid; neither is new. Maximum interpolated defocus over all focus keys is 0.0217 mm (44 % of ±2λN² = ±0.0495 mm, near the tele end at t = 0.004); at infinity it is 0.0187 mm. Thinning to 33 stations would reach 0.0847 mm and pass the depth of focus. The file falls from 265.6 KB to 140.0 KB, with the added roles included. Every focus node stays paraxially on its nominal object distance.

Glass: `Unmatched` count 21 to 0. All 13 printed pairs equal catalog rows (|Δνd| ≤ 0.01), with 11 HOYA and 2 OHARA labels, and recur across examples or sit beside other catalog values at the same position. No position stays proxy, and spectral MTF at infinity no longer reports missing data. The four SLD positions carry `apd: "inferred"`. No `dPgF` is stored; the catalog rows supply dispersion.

Text: `name` gains the corpus pipe; header, `subtitle`, `specs`, `focus.description`, element labels and roles, and analysis prose were rewritten in plain terms; cemented brackets D1–D20 became C1–C6 to avoid the gap labels. `audit:surface` prints OK, and `audit:aperture` finds all 65 stations within 3 % of the stated f-number.

Open: `catalog.acceptsTeleconverters` stays unset because the repository has no Sigma TC-1401 or TC-2001 entity.
