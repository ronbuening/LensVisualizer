# Sigma C017 100–400 DSLR — candidate audit

## Disposition

BUILT_AWAITING_VALIDATION_EXECUTION, not completed or deployed. Qualified related-patent JP2017-223778A Example1, exact factory identity unproved. No source correction, shared runtime change or hidden best-focus refit.

## Literal source and independent review

Original37 rows include flat stop25;21glass/15components. All radii, thicknesses, d-line indices/Abbe values and five native gaps includingBF are literal. Independent source review has229 normalized comparisons and Decimal50 reproduction; grant same-example table equals application and clearer grant Fig1 is supplemental aperture-inference evidence. Independent source manifest is `independent_source_review/FROZEN_REVIEW_MANIFEST_v001.json` SHA53fe61650edead1042b5511b4fc34ab0698f882c24d696cf1ed78cc7f32fe824.

## Deliberate inferences

- Grant Fig1 approximate rim measurements, 7.428136px/mm six-vertex fit. No factory aperture claim. Original initial rounded model and failed default90% diagnostics retained.
- Geometry-bound L7/L12 inferred radii11.8/12.1mm only; all required default geometry checks retained, no override.
  -129 control G4-compensated zoom, preserving source d5/d15/BF and fixed-G2 coordinate; calculated intermediate EFL labels, three published native rows only.
  -19 finite controls to maker1.6m using source-supported direction/group but inferred travel, not published conjugates. Max sampled distance error1.863%, plane residual0.015519mm; raw sub-.004 focus not certified.
  -Factory glasses unassigned. Existing coordinate-compatible catalog alternatives recorded but no uncertain partial dispersion injected. Reference MTF only; CDF/photopic guard retained.
  -OS centered, no decenter model.

## Rejected / superseded evidence

Raw three-row zoom adds~11.092mm defocus;3/9/17/33/65/129 studies retained. Forced-EFL/two-group cam trial and its large/virtual finite-label errors remain diagnostic only. The smaller-assumption one-group cam is selected. The35focus-key candidate remains immutable;19keys chosen after tiny valid-ray sensitivity and unchanged far-label error. Failed marginal-aim image numbers in the focus-density diagnostic are INVALID and excluded in its adjudication.

`geometry_and_finite_guards.json` v001 used an empty-field `.every` assertion and is superseded. The corrected v002 records actual top-level support, checking all264 finite reasons explicitly. It does not imply optical finite MTF. Source/full-format pupil failures remain raw; noBracket requests are not counted as launched/clipped/pass. Fullscope source-only and prior failed receipts are retained.

## Additive reproducibility and title corrections (v003)

The original focus sensitivity script incorrectly left its count35 branch reading the later live19-key candidate; the original65-control MTF branch installed35-column gaps without setting35 focus keys. Those scripts and historical outputs remain immutable. Versioned `reconstruct_density_inputs_v003.mjs`, `audit_focus_density_rays_v003.mjs` and `audit_mtf_sensitivity_v003.mjs` bind immutable prior35 SHA88fc025cd0cf9c6b031412dc9629bd5c5cea7347e7dfc10d906d6ca5fc30dd6b, selected19 SHAd03aacf905cadeaa80d947a63cb6640b76af725bf5bbe6c142f81ae4c1399afe, and the frozen study. They reconstruct true variants, assert every grid dimension and save exact derived hashes.

Corrected20-request finite replay has18valid image intercepts exactly equal to the historical valid-only values. The two other marginal requests are unlaunched; their earlier trial-path clipped status/image projection was not meaningful and is explicitly reported as a classification correction. Full comparison retains all optical/status differences, with no excluded failed rows. Four compared infinity MTF cases (16fields) match complete historical results, not only curves. Final-candidate applicability is established through infinity-state equivalence; these new receipts do not retroactively prove the old scripts' missing input provenance.

The original title was incorrectly shortened to Zoom Lens. The analysis now gives the actual p1(54) Japanese title 防振機能を備えた変倍結像光学系 with a labeled translation. Selected modelJSON and formatted data module remain byte-identical. Prior writer/analysis/audit versions are reconstructable through `validation/corrections_v003/changed_original_recovery_map.json` and the original v002 manifest.

## Final binding and mandatory unrun gates

`final_changed_data_rebind.json` proves final19-key candidate and prior35-key diagnostic have identical297 sampled physical states, including every sampled pupil state and all infinity geometry, and binds raw result hashes. Final candidate is rebuilt independently at each variant; no mutated cached geometry. This is not proof over every arbitrary interpolation control.

No full-project typecheck, formatcheck, lint, main corpus, tooling or build run is claimed for this target; no actual viewer run. The earlier user provisional waiver for145/408/262 does not apply. Runtime77ad7af3543833602509a6ab164fbf6870e12ad2 stays pinned and unmodified. Local formatting of these three files is not a full-project format gate. Final independent authoring/model review is owed.

## Source-only reproduction

Use `repro/rebuild_source_only.sh` in an isolated copy with the pinned Python/NumPy and Node24.22.1/installedPrettier. It reconstructs literal transcription, graphic-rim and geometry adjustment, cam/focus study, candidate and three overlay files. It does not invoke whole-project tasks or install dependencies. Validation evidence is supplied to reproduce the explanatory prose, never to substitute an optical model for source rows. All source originals and raw alternatives are retained; source-coverage receipt and final manifest bind bytes.
