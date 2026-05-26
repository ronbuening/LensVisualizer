# Plan: Improve mirror/folded optics accuracy and shared structure

## Context

This branch (`claude/compassionate-mayer-ix92F`, commits `e696eeb`..`22072d5`) adds mirror/telescope
support: `SurfaceData.interaction` (reflect/refract/block), `innerSd` annular obstructions,
`opticalPath` (explicit `surfaceOrder` or `auto`), tilted meridional planes, and 8 hidden reference
fixtures. The trace engine is already well-built: `exactSurfaceTrace.ts` has **one** generalized loop
that branches on `interaction.type`, so on-axis tracing through mirrors is correct and tested.

The problem is everything *around* the trace. Off-axis (chief/field) rays are launched from an
entrance-pupil position and ratio that, for folded systems, are **stubbed** rather than solved from
real rays. So the trace math is right but its *inputs* are approximate for mirrors. There is also
duplication (`isFoldedOptics ? generalized : sequential` forks) and **zero off-axis test coverage** —
every fixture/test is on-axis.

**Goal (approved scope):** make off-axis ray geometry genuinely accurate for mirror systems, refactor
the folded and refractive paths onto shared helpers, harden validation/numerics, and anchor the
reference fixtures to closed-form ground truth. Keep the complex analysis tabs (coma, distortion,
vignetting, field curvature, pupils) guarded — re-enabling them is explicitly out of scope this pass.

## Root cause (verified)

1. **Runtime field/pupil geometry silently runs sequential for folded lenses.**
   `traceStateSurfacesReal` (`fieldGeometry.ts:871-879`) and the equivalent in
   `pupilAberration.ts` build an `ExactTraceLens` of only `{ S, asphByIdx, stopIdx }`. With no
   `isFoldedOptics`/`opticalPath`/`imagePlane`, `shouldUseGeneralizedTrace` returns false on its first
   guard, so folded chief/field rays trace as if the system were sequential refractive.
2. **`buildLens` folded branch stubs the pupil model** (`buildLens.ts:322-464`): `EP.yRatio` is pure
   geometry, `B: 0`, `epZRelStop: 0`, `xpZRelLastSurf: 0`, `xpSD: epSD`. The refractive branch
   (`465+`) derives all of these from real Snell traces to the stop.

Both feed the same downstream consumer: off-axis ray launch uses `EP.yRatio`/`epZRelStop`.

## Workstreams

### A. Thread folded context into the real-ray trace wrappers  *(root cause, do first)*
- In `fieldGeometry.ts` (`traceStateSurfacesReal`, ~:871) and `pupilAberration.ts` (~:480), include
  `isFoldedOptics`, `opticalPath`, `imagePlane` in the `ExactTraceLens` they construct, so folded
  lenses actually reach the generalized tracer.
- For folded lenses that pass `stopAt` (e.g. `fieldGeometry.ts:118-119,321`), do **not** rely on the
  `stopAt` partial trace (the generalized tracer ignores `stopAt`). Route them through the new
  `traceToStopViaGeneralized` helper (Workstream B) instead.
- Leave non-folded behavior byte-for-byte unchanged: only folded lenses get the new context/path.

### B. Real-ray chief/marginal + pupil solve for the `buildLens` folded branch
- Add `traceToStopViaGeneralized(lens, input, stopIdx, options)` to `exactSurfaceTrace.ts`. It runs a
  full generalized vector trace (no `stopAt`), scans the existing `hits` array for the first unclipped
  hit with `surfaceIdx === stopIdx`, and returns `{ y, x, uy, ux, found }`. Returns `found: false`
  when the ray never reaches the stop unclipped.
- Factor the entrance/exit-pupil two-ray math currently inline at `buildLens.ts:516-558` into a shared
  pure helper `computePupilGeometry({ realYRatio, realB, margFull, chiefFull, epSD, zStopBaseline })`
  returning `{ epZRelStop, xpZRelLastSurf, xpSD }`. Call it from **both** branches.
- In the folded branch, derive `realYRatio`/`realB` from `traceToStopViaGeneralized` (marginal at pupil
  edge, chief aimed at stop center) and replace the literal stubs with computed values. Folded-specific
  inputs: the stop z and last-surface z come from the relevant `hits[].point[2]` (path-aware), not from
  summed back-thickness, since a mirror folds z.
- **Fallback:** when the chief/marginal trace reports `found: false` or clips, keep the current
  geometric `EP.yRatio`/`B: 0` so a hard-to-trace fold never produces NaNs.

### C. Unify the image-plane intercept
- Replace the duplicated `L.isFoldedOptics ? generalizedImagePlaneIntercept : imagePlaneIntercept`
  (`aberration/shared.ts:93-95`, `aberration/spherical.ts:41,149`) with a single
  `imagePlaneCoordinate(y, u, referenceZ, L, planeZ)` that runs the generalized normal math against an
  effective plane `{ z: planeZ, y: L.imagePlane.y, normal: L.imagePlane.normal }`.
- Folded callers pass `planeZ = L.imagePlane.z`; sequential callers pass the focus-adjusted z they
  compute today — this preserves focus-dependent sequential intercepts exactly while removing the fork.
  (Safe because `RuntimeLens.imagePlane` is always populated — verified.)

### D. Share the paraxial stepper for cardinal elements  *(optional, lower priority)*
- `traceFoldedReflectiveParaxialPath` (`cardinalElements.ts:229`) and the refractive `paraxialTrace`
  duplicate a transfer/refract step. Consider one interaction-aware step function with a reflect branch
  (`u' = -u - 2y/R`). Only pursue if it doesn't complicate the refractive path; the cardinal guards
  (meridional-only image plane, air-to-air) stay as-is.

### E. Validation & numerical hardening (`validateLensData.ts`, `exactSurfaceTrace.ts`)
- Flag `opticalPath.maxInteractions` that is too low for the declared `surfaceOrder` length (+ image
  plane) — currently silent runtime clipping.
- Warn when `imagePlane.z` is unreachable by any forward/folded path (no surface can direct a ray to it).
- Check paired-surface `innerSd` consistency (front face annular but backing plane solid renders wrong).
- Fix `inferLeadDistance` (`exactSurfaceTrace.ts:741`) for a tilted/flat first surface — `conicPolySag`
  returns 0 for a tilted plane, giving a ~1 mm lead that can mis-place the launch origin.

### F. Off-axis fixtures + analytic anchors (tests)
- Add field-angle (off-axis) variants for at least the spherical-primary, Cassegrain, and Newtonian
  reference fixtures; assert the chief ray reaches the expected meridional image height and that
  reflection preserves the meridional symmetry.
- Add closed-form regression anchors: spherical mirror EFL ≈ R/2; Cassegrain/Gregorian back-focus vs.
  declared `imagePlane.z`; off-axis chief-ray image height vs. `f·tan(θ)` (rectilinear). These catch
  sign/scale errors the current hit-order/clip tests cannot.

## Critical files
- `src/optics/internal/exactSurfaceTrace.ts` — add `traceToStopViaGeneralized`; fix `inferLeadDistance`.
- `src/optics/buildLens.ts` — folded branch (`322-464`) real-ray solve; extract `computePupilGeometry`.
- `src/optics/fieldGeometry.ts` / `src/optics/aberration/pupilAberration.ts` — thread folded context into `traceStateSurfacesReal`.
- `src/optics/aberration/shared.ts`, `src/optics/aberration/spherical.ts` — `imagePlaneCoordinate` unification.
- `src/optics/validateLensData.ts` — new validation rules.
- `src/optics/cardinalElements.ts` — optional paraxial-stepper sharing.
- `__tests__/src/optics/mirrorOptics.test.ts` (+ new fixtures under `src/lens-data/reference/`) — off-axis + analytic anchors.

## Sequencing
A and B together (they share `traceToStopViaGeneralized` and are the accuracy core) → F to lock the
gains with anchored tests → C (mechanical, low risk) → E (independent hardening) → D (optional).

## Guardrails / regression risk
- **Do not relax** `shouldUseGeneralizedTrace`'s `stopAt` guard. Folded systems bypass `stopAt` via the
  new helper; non-folded systems keep the sequential `stopAt` path untouched (CLAUDE.md: preserve
  ordinary sequential defaults).
- A folded ray may cross the stop more than once; take the first unclipped `surfaceIdx === stopIdx`
  hit, and when `opticalPath.surfaceOrder` lists the stop twice prefer the cursor-matching occurrence.
  Add a fixture covering this.
- `δ`-based finite-difference chief/marginal assumes local linearity through mirrors; validate against a
  directly stop-center-aimed ray for strongly tilted folds before trusting `realB`.

## Verification
- `npm run typecheck && npm run format:check && npm run lint && npm run test`, then `npm run build`
  (lens-data/route/metadata) per CLAUDE.md.
- New/updated tests in `mirrorOptics.test.ts` must pass, including off-axis and analytic-anchor cases.
- Manually confirm a non-folded catalog lens's EP/XP/half-field values are unchanged (diff a built
  RuntimeLens before/after) to prove no refractive regression.
- Load a reference fold fixture via `?view=debug` and confirm off-axis ray bundles enter at the
  corrected pupil position and converge at the declared image plane.
