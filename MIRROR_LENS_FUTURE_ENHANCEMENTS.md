# Mirror Lens Future Enhancements

This is the working backlog for mirror-lens, telescope, annular-aperture, and folded-optics support after the first implementation pass. Keep this file focused on future engineering work; current authoring rules live in `src/lens-data/LENS_DATA_SPEC.md`, and architecture notes live under `agent_docs/`.

## Current Baseline

- Lens data can describe `SurfaceData.innerSd`, side-aware `SurfaceData.interaction`, first-surface and second-surface mirrors, inactive-side mirror blocking, blockers, tilted meridional planes, explicit/repeated `opticalPath.surfaceOrder`, `mode: "auto"` next-surface resolution, and arbitrary meridional `opticalPath.imagePlane`.
- Hidden reference fixtures under `src/lens-data/reference/` exercise first-surface primary mirrors, annular obstructions, Mangin-style second-surface mirrors, Newtonian side focus, and Cassegrain-style folded paths.
- Diagram rendering supports annular element paths, tilted flat fold mirrors, second-surface coating accents, and
  non-default image planes.
- Visible ray sampling avoids central blocking geometry for folded systems.
- Folded off-axis launch geometry now uses generalized stop/chief-ray traces and path-aware image-plane intersections
  instead of sequential refractive approximations.
- Analysis guardrails prevent folded systems from showing complex sequential analysis tabs until each tab is adapted.
  Axial cardinal overlays and mirror-safe spherical aberration/blur helpers have generalized folded paths.

## Completed Highest-Priority Follow-Ups

1. **Expose Folded Path Diagnostics** - Done.
   - Public `RayTraceResult.diagnostics` now reports expected path mode, expected/hit surface labels, final medium,
     image-plane hit status, terminal surface, termination reason, clip/block events, auto skipped-candidate reasons,
     and loop detection state.
   - Development analysis UI shows a compact folded trace diagnostic readout, and fixture tests assert the public
     diagnostic result without importing generalized trace internals.

2. **Adapt More Analysis Tabs Safely** - Done for currently valid surfaces; still gated where the interpretation is not
   physically settled.
   - Axial folded mirror systems can now compute first-order cardinal overlays through the shared cardinal helper.
   - Folded field and pupil real-ray wrappers now carry `opticalPath`, `imagePlane`, and folded context into generalized
     tracing, so future tab enablement can build on correct stop and image-plane geometry.
   - Focus-breathing remains available for folded systems because it is metadata/state based for fixed mirror fixtures.
   - Pupil analysis is enabled for folded systems with hidden-fixture coverage.
   - Distortion, vignetting, field-curvature, and coma tabs remain gated for folded systems until each tab has
     fixture-backed physical interpretation and UI copy for folded image-plane conventions.

3. **Improve First-Order Mirror Math** - Done for axial reflective folded systems.
   - Reflective paraxial path support handles signed folded transfers and mirror slope reversal/power.
   - Systems whose final image plane is not normal to the original z axis intentionally return no cardinal result until
     the UI has a clear convention for reporting principal/nodal points in that rotated frame.

4. **Strengthen Auto-Path Robustness** - Done.
   - Auto mode now records skipped candidates and distinguishes intersection failures, passive same-index surfaces,
     self-hits, and non-forward hits.
   - Auto mode detects repeated surface/point/direction/index states before falling back to the generic
     `maxInteractions` ceiling.
   - Fixture tests cover auto skip reasons, blocking reasons, and a deliberately looping flat-mirror path.

5. **Broaden Fixture Coverage** - Done.
   - Added hidden reference fixtures for a Maksutov-Cassegrain-style meniscus/primary/secondary path, a Gregorian-style
     secondary path, and an annular ring blocker that clips the ring while allowing the center through.

6. **Fix Folded Off-Axis Accuracy** - Done.
   - Folded stop-height solves now use `traceToStopViaGeneralized()` rather than sequential `stopAt` tracing.
   - `buildLens()` derives folded entrance/exit pupil geometry from generalized real-ray basis traces, with finite
     fallback values for hard-to-trace paths.
   - Image-plane coordinate math is shared across folded and sequential callers while preserving focus-adjusted
     sequential behavior.
   - Regression tests cover off-axis spherical primary, Cassegrain, and Newtonian chief-ray behavior, meridional
     symmetry, repeated stop selection, and a representative non-folded refractive snapshot.

7. **Harden Folded Validation And Numerics** - Done.
   - Validation rejects explicit paths whose `maxInteractions` cannot cover the declared hit order plus image plane.
   - Validation rejects mismatched paired `innerSd` values on annular mirror/backing surfaces.
   - Folded image-plane reachability now reports conservative errors only when probe traces clearly cannot reach the
     declared image plane.
   - Tilted/flat first-surface lead distance inference uses tilted-plane aperture extent rather than spherical sag only.

## UI And Authoring Improvements

- Done: the element inspector surfaces folded metadata for `interaction.type`, mirror kind, active side, `innerSd`, tilted
  normals, and explicit image-plane geometry.
- Done: folded diagrams label the resolved/declared hit order as a compact debugging overlay.
- Done: the lens library accepts `?view=all` for all lens files and `?view=debug` for hidden/reference fixtures.
- Done: validation flags tilted flat mirror backing planes that omit the reflective face's `interaction.normal`.
- Done: hidden/reference mirror fixtures have an authoring report at
  `agent_docs/generated/mirror-fixtures.generated.md`, regenerated with `npm run generate:mirror-reports`.
- Done: `src/lens-data/LENS_DATA_SPEC.md` includes incident-side examples for curved mirrors, returning beams, and
  second-surface paths.

## Physics And Rendering Improvements

- Model reflectivity/transmission losses for mirror coatings, obstructions, and second-surface substrates when relative illumination or bokeh brightness needs it.
- Done: second-surface mirrors render a dashed coating accent line distinct from the glass substrate.
- Support optional spider-vane diffraction or obstruction metadata as display annotations without letting mechanical details pollute optical tracing.
- Consider 3D folded assemblies only after the 2D meridional model is exhausted; the current pass intentionally supports rotationally symmetric optics plus meridional fold mirrors.

## Verification Backlog

- Done: production smoke tests intentionally include hidden reference fixtures for folded-path validation while keeping
  public-catalog assertions scoped to visible lenses.
- Done: SVG-geometry coverage includes side image-plane rendering and tilted flat mirror backing planes.
- Partly done: `mode: "auto"` path-stability tests cover small ray-height and aperture perturbations for the current
  folded fixtures. Focus/zoom perturbations remain pending until folded zoom/focus fixtures exist.
- Done for this pass: run the full gate after any mirror-path change: `npm run typecheck`, `npm run format:check`,
  `npm run lint`, `npm run test`, and `npm run build`.
