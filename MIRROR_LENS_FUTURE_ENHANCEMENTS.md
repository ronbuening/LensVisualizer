# Mirror Lens Future Enhancements

This is the working backlog for mirror-lens, telescope, annular-aperture, and folded-optics support after the first implementation pass. Keep this file focused on future engineering work; current authoring rules live in `src/lens-data/LENS_DATA_SPEC.md`, and architecture notes live under `agent_docs/`.

## Current Baseline

- Lens data can describe `SurfaceData.innerSd`, side-aware `SurfaceData.interaction`, first-surface and second-surface mirrors, blockers, tilted meridional planes, explicit/repeated `opticalPath.surfaceOrder`, `mode: "auto"` next-surface resolution, and arbitrary meridional `opticalPath.imagePlane`.
- Hidden reference fixtures under `src/lens-data/reference/` exercise first-surface primary mirrors, annular obstructions, Mangin-style second-surface mirrors, Newtonian side focus, and Cassegrain-style folded paths.
- Diagram rendering supports annular element paths, tilted flat fold mirrors, and non-default image planes.
- Visible ray sampling avoids central blocking geometry for folded systems.
- Analysis guardrails prevent folded systems from showing sequential paraxial/cardinal/pupil/field results until each tab is adapted. Mirror-safe spherical aberration and related blur helpers have an initial generalized image-plane path.

## Highest-Priority Follow-Ups

1. **Expose Folded Path Diagnostics**
   - Add a lightweight public diagnostic object on `RuntimeLens` or trace results for expected path mode, final medium, image-plane hit status, surface hit labels, and clipping/blocking reasons.
   - Surface these diagnostics in development UI and fixture tests without requiring imports from `src/optics/internal/`.

2. **Adapt More Analysis Tabs Safely**
   - Generalize cardinal, pupil, distortion, vignetting, focus-breathing, field-curvature, and coma calculations only where the math is valid for folded systems.
   - Keep unsupported tabs gated until each tab has reference-fixture coverage and a clear physical interpretation for arbitrary image-plane normals.

3. **Improve First-Order Mirror Math**
   - Add paraxial matrix support for reflective surfaces and folded coordinate frames.
   - Decide how to report effective focal length, principal planes, nodal points, and pupil locations for systems whose final imaging plane is not normal to the original z axis.

4. **Strengthen Auto-Path Robustness**
   - Add richer loop detection beyond `maxInteractions`.
   - Record why candidate surfaces were skipped in auto mode.
   - Stress-test near-grazing fold mirrors, close repeated hits, and mixed block/reflect/refract surfaces.

5. **Broaden Fixture Coverage**
   - Add a compact Schmidt-Cassegrain or Maksutov-style meniscus/primary/secondary reference fixture.
   - Add a Gregorian-style secondary fixture to exercise alternate secondary curvature/sign behavior.
   - Add a ring blocker fixture where an annular obstruction blocks the ring while the center passes.

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

