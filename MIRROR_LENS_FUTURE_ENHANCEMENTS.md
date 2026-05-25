# Mirror Lens Future Enhancements

This is the working backlog for mirror-lens, telescope, annular-aperture, and folded-optics support after the first implementation pass. Keep this file focused on future engineering work; current authoring rules live in `src/lens-data/LENS_DATA_SPEC.md`, and architecture notes live under `agent_docs/`.

## Current Baseline

- Lens data can describe `SurfaceData.innerSd`, side-aware `SurfaceData.interaction`, first-surface and second-surface mirrors, blockers, tilted meridional planes, explicit/repeated `opticalPath.surfaceOrder`, `mode: "auto"` next-surface resolution, and arbitrary meridional `opticalPath.imagePlane`.
- Hidden reference fixtures under `src/lens-data/reference/` exercise first-surface primary mirrors, annular obstructions, Mangin-style second-surface mirrors, Newtonian side focus, and Cassegrain-style folded paths.
- Diagram rendering supports annular element paths, tilted flat fold mirrors, and non-default image planes.
- Visible ray sampling avoids central blocking geometry for folded systems.
- Analysis guardrails prevent folded systems from showing sequential paraxial/cardinal/pupil/field results until each tab is adapted. Mirror-safe spherical aberration and related blur helpers have an initial generalized image-plane path.

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
   - Focus-breathing remains available for folded systems because it is metadata/state based for fixed mirror fixtures.
   - Pupil, distortion, vignetting, field-curvature, and coma tabs remain gated for folded systems until their math uses
     generalized image-plane normals and each tab has fixture-backed physical interpretation.

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

## UI And Authoring Improvements

- Add an inspector readout for `interaction.type`, mirror kind, active side, `innerSd`, and explicit image-plane geometry.
- Add a diagram overlay that labels folded hit order for reference fixtures and debugging.
- Make hidden reference fixtures easier to temporarily expose without hand-editing `visible`.
- Add a small authoring validator that suggests when a tilted mirror backing plane is missing the same `interaction.normal` as the reflective face.
- Add docs/examples for choosing `incidentSide` on curved mirrors, especially when the surface normal orientation is not obvious from the SVG.

## Physics And Rendering Improvements

- Model reflectivity/transmission losses for mirror coatings, obstructions, and second-surface substrates when relative illumination or bokeh brightness needs it.
- Decide whether second-surface mirrors should optionally render a coating line distinct from the glass substrate.
- Support optional spider-vane diffraction or obstruction metadata as display annotations without letting mechanical details pollute optical tracing.
- Consider 3D folded assemblies only after the 2D meridional model is exhausted; the current pass intentionally supports rotationally symmetric optics plus meridional fold mirrors.

## Verification Backlog

- Add production smoke tests that intentionally include hidden reference fixtures for folded-path validation while keeping public-catalog assertions scoped to visible lenses.
- Add screenshot or SVG-geometry tests for side image-plane rendering and tilted flat mirror backing planes.
- Add path-stability tests for `mode: "auto"` under small focus/zoom/aperture perturbations once folded zoom/focus fixtures exist.
- Run the full gate after any mirror-path change: `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build`.
