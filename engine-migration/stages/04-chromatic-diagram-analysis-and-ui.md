# Stage 04: Chromatic, Diagram, Analysis, And UI

Use this stage to move higher-level features onto `optics-2` behind compatibility facades, while keeping component props
and lens authoring stable.

## /goal Prompt

```text
/goal Implement Optics 2 Stage 04 from engine-migration/stages/04-chromatic-diagram-analysis-and-ui.md: port chromatic behavior, diagram geometry, and analysis modules to optics-2 behind compatibility facades, then add an internal UI opt-in selector without changing lens data, URLs, or component props.
```

## Scope

This stage covers Phase 9, Phase 10, Phase 11, and Phase 12:

- Port chromatic behavior.
- Port diagram geometry.
- Port analysis modules behind a facade.
- Add compatibility barrels and optional internal UI opt-in.

Primary requirement ids:

- R4: Media and dispersion behavior.
- R11: Analysis features.
- R12: Diagram geometry.
- Compatibility and UI bridge requirements.

## Goals

- Keep glass catalog behavior stable while making chromatic tracing cheaper.
- Make diagram geometry share the same surface-profile math as trace.
- Move analysis modules one domain at a time with parity tests.
- Add an internal selector so developers can render representative pages with `optics-2`.
- Keep old component props and URL state unchanged.

## Non-Goals

- Do not complete final migration in this stage.
- Do not remove `src/optics`.
- Do not expose an engine selector in the UI.
- Do not mark folded analysis tabs safe without fixture-backed tests.
- Do not add new lens-data authoring fields unless a feature cannot be represented otherwise.

## Required Modules

```text
src/optics-2/
  chromatic/
    dispersionAdapter.ts
    indexResolver.ts
    chromaticTrace.ts
    dispersionQuality.ts

  diagram/
    coordinateTransforms.ts
    surfaceOutline.ts
    elementShapes.ts
    renderDiagnostics.ts
    legacyDiagramAdapter.ts

  analysis/
    analysisJobs.ts
    aberrations.ts
    bokeh.ts
    distortion.ts
    fieldCurvature.ts
    vignetting.ts
    pupilAberration.ts
    groupMovement.ts
    asphericComparison.ts
    lcaScaling.ts

  compat.ts
  index.ts
```

Optional selector location:

- `src/optics/engineSelector.ts`, if this best fits current import boundaries.
- A utility-layer selector, if hooks already centralize imports elsewhere.

## Chromatic Requirements

Reuse existing glass catalog data and resolver logic during parallel operation. Do not create a divergent catalog copy.

Implementation contract:

- Resolve glass names once during normalization.
- Compile per-surface channel index resolvers into `EngineLens`.
- Keep channel wavelength constants centralized.
- Preserve the quality cascade: `air`, `sellmeier`, `lineIndices`, `abbe`, `constant`.
- Preserve whole-lens weakest-link summary behavior.
- Preserve catalog mismatch scan behavior.
- Make chromatic trace a thin wrapper around the core trace with channel-specific media.

Tests:

- Sellmeier lens chromatic parity.
- Line-index lens chromatic parity.
- Abbe fallback parity.
- Constant-index fallback parity.
- Catalog mismatch scan parity.
- Generated glass report stability when relevant.
- LCA/TCA readout parity for representative lenses.

## Diagram Geometry Requirements

Diagram code must stay SVG-oriented, but profile math must be shared with tracing.

Implementation contract:

- Surface outline generation uses `math/surfaceProfile.ts`.
- Element shape code operates on `PreparedOpticalState`.
- SVG path output is generated only at the diagram adapter boundary.
- Rendering diagnostics stay structured and testable.
- Preserve second-surface coating accents.
- Preserve annular even-odd fills.
- Preserve tilted mirror shapes.
- Preserve conic trimming, slope trimming, and cross-gap intrusion trimming.

Tests:

- Ordinary spherical element shape parity.
- Aspheric path parity.
- Tilted mirror fixture geometry.
- Annular mirror even-odd fill geometry.
- Render diagnostic parity for conic limit and intrusion cases.

Visual smoke checks should wait until the UI selector can render representative pages with `optics-2`.

## Analysis Requirements

Port analysis modules behind a facade. Do not change drawer components first.

Migration order:

1. Scalar and low-risk helpers with no ray trace dependency:
   - `lcaScaling`.
   - `asphericComparison`.
   - `groupMovement`.
   - focus breathing value helpers.
2. Axial ray-heavy helpers:
   - spherical aberration.
   - blur and bokeh primitives that do not need off-axis chief rays.
3. Field-dependent helpers:
   - field curvature.
   - coma.
   - distortion.
   - vignetting.
   - pupil aberration.
4. Chromatic helpers after chromatic trace parity is stable.
5. Folded-safe analysis only after generalized math and hidden fixtures cover the specific tab.

Implementation contract:

- Engine-native analysis functions accept `PreparedOpticalState`.
- Compatibility wrappers preserve old signatures for UI callers.
- Batch trace APIs are introduced only where repeated trace loops are measured.
- Sample grids, field positions, stop settings, and fallback statuses remain visible in typed output.
- Mirror-unsafe tabs remain guarded until fixture-backed implementation exists.

Tests:

- One parity suite per migrated analysis module.
- Focus, zoom, aperture, aberration-control, and field-angle state cases for slider-dependent modules.
- Folded guard tests proving unsafe tabs stay guarded.
- Regression tests for historical failures referenced in agent docs.

## UI Opt-In Requirements

Add a narrow internal selector only after enough compatibility wrappers exist.

Selector contract:

- Default production behavior remains the current engine until final migration.
- The optional `optics-2` selector is internal and may be driven by a compile-time constant or test-only flag.
- No lens file, URL state, local storage preference, or user-facing control chooses the engine.
- Selector return values preserve existing object identity expectations where React memoization depends on them.

Hook migration order:

1. Pure optics tests import `optics-2` directly.
2. `useLensComputation` uses the selector for build, layout, and diagram data.
3. `useOnAxisRays` uses the selector for sequential ray fans.
4. `useOffAxisRays` uses shared projection and chief-ray helpers.
5. `useChromaticRays` uses chromatic trace wrappers.
6. Analysis drawer data imports switch after each module passes parity.

UI compatibility:

- `useLensComputation` still returns `L`, `IMG_MM`, `zPos`, transforms, shapes, aperture values, field geometry, and
  readouts.
- Ray hooks still return ray segments and chromatic spread in existing shapes.
- Analysis drawer inputs remain `focusT`, `zoomT`, `aberrationT`, `currentEPSD`, `currentPhysStopSD`, `dynamicEFL`, and
  `fieldGeometry`.
- Diagram components remain SVG-only.

## Verification

Run focused tests for each migrated module. Before completing this stage, prefer:

```bash
npm run typecheck
npm run format:check
npm run lint
npm run test
```

If the internal selector is wired into hooks, also render or test representative lens pages with both old and new engine
selection.

Representative UI smoke coverage:

- Ordinary prime page.
- Zoom lens page.
- Fisheye page.
- Perspective-control page.
- Aberration-control page.
- Folded fixture or hidden report route if available in local tooling.

## Exit Gate

Stage 04 is complete when:

- Chromatic UI readouts and ray fans no longer need old dispersion helpers.
- SVG diagram geometry is stable for ordinary, aspheric, annular, and tilted mirror fixtures.
- Migrated analysis modules pass parity and receive prepared state in engine-native code.
- App hooks can render a representative lens page with `optics-2` selected internally.
- Old engine remains available for side-by-side debugging.
- No component props, lens files, or URL state changed only for engine selection.

