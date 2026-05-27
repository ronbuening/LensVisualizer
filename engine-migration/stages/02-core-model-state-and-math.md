# Stage 02: Core Model, State, And Math

Use this stage to build the durable core under `src/optics-2`: types, numeric helpers, surface profiles, lens
normalization, dispersion descriptors, and prepared state.

## /goal Prompt

```text
/goal Implement Optics 2 Stage 02 from engine-migration/stages/02-core-model-state-and-math.md: add src/optics-2 core types, math, LensData normalization, EngineLens compatibility, dispersion descriptors, and prepared optical state with parity tests. Keep lens files unchanged and do not switch UI callers.
```

## Scope

This stage covers Phase 2, Phase 3, and Phase 4:

- Build core types and math.
- Normalize existing `LensData` into `EngineLens`.
- Prepare current optical state once per slider position.

Primary requirement ids:

- R1: Prescription input.
- R2: Coordinate spaces and units.
- R3: Surface geometry.
- R4: Media and dispersion descriptors.
- R5: State-dependent geometry.

## Goals

- Consume every existing lens file without changing authoring format.
- Add engine-native types that make state, geometry, and failures explicit.
- Share sag, slope, normals, and intersections between trace and diagram code later.
- Compile static lens metadata once.
- Resolve focus, zoom, and aberration-control state once per slider position.
- Expose compatibility wrappers without switching app callers.

## Non-Goals

- Do not implement full ray tracing in this stage.
- Do not port analysis modules.
- Do not move the glass catalog.
- Do not change `src/lens-data/**/*.data.ts`.
- Do not change UI component props.

## Required `src/optics-2` Layout

Start with these modules:

```text
src/optics-2/
  constants.ts
  types.ts
  compat.ts

  math/
    vector.ts
    numerics.ts
    surfaceProfile.ts
    intersection.ts

  prescription/
    normalizeLensData.ts
    labels.ts
    aspheres.ts
    groups.ts
    interactions.ts
    dispersion.ts
    variables.ts

  state/
    prepareState.ts
    cache.ts
```

Add files incrementally, but keep boundaries intact.

## Required Type Contracts

Engine-native vectors should be explicit and small:

```ts
type Vec3 = readonly [number, number, number];

interface Ray3 {
  origin: Vec3;
  direction: Vec3;
}

interface Plane3 {
  point: Vec3;
  normal: Vec3;
  label: string;
}
```

The normalized lens should preserve old data while separating engine concerns:

```ts
interface EngineLens {
  key: string;
  source: LensData;
  surfaces: readonly CompiledSurface[];
  elements: readonly CompiledElement[];
  labelToSurfaceIndex: Readonly<Record<string, number>>;
  stop: StopSpec;
  projection: ProjectionSpec;
  opticalPath: PathSpec;
  imagePlane: Plane3;
  variables: VariableSpec;
  aberrationControl: AberrationControlSpec | null;
  annotations: AnnotationSpec;
  dispersion: readonly SurfaceDispersion[];
  display: DisplaySpec;
  authoredRayFans: AuthoredRayFans;
  flags: EngineLensFlags;
}
```

The prepared state should hold all slider-dependent geometry:

```ts
interface PreparedOpticalState {
  lens: EngineLens;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  surfaces: readonly CompiledStateSurface[];
  z: readonly number[];
  imagePlane: Plane3;
  imgZ: number;
  totalTrack: number;
  cacheKey: string;
}
```

Compatibility entry points:

```ts
function buildLens2(data: LensData): RuntimeLens;
function engineLensFromRuntime(L: RuntimeLens): EngineLens;
function prepareLegacyState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT?: number,
): PreparedOpticalState;
```

## Coordinate And Unit Rules

- Units are millimeters.
- The optical axis is `z`.
- `x` is sagittal.
- `y` is meridional.
- Ordinary sequential lenses receive light from lower `z` toward higher `z`.
- Meridional slope `u` maps to `[0, u, 1] / hypot(0, u, 1)`.
- Skew slope `(ux, uy)` maps to `[ux, uy, 1] / hypot(ux, uy, 1)`.
- Every `Ray3.direction` entering later trace code must be normalized.
- Every `Plane3.normal` must be normalized during normalization.
- SVG coordinate conversion remains a diagram concern, not a math-core concern.

## Surface Geometry Requirements

Support these profiles:

- Flat surface when `abs(R) > FLAT_R_THRESHOLD`.
- Spherical surface.
- Conic plus even polynomial asphere.
- Tilted meridional plane through an interaction normal.

Preserve current constants unless a focused parity change proves otherwise:

- `FLAT_R_THRESHOLD = 1e10`.
- Current rim-slope policy from `MAX_RIM_SLOPE_TAN`.
- Current render subdivision parity.

Required profile API:

```ts
interface SurfaceProfile {
  kind: "flat" | "spherical" | "aspheric" | "tilted-plane";
  sag(radius: number): number;
  slope(radius: number): number;
  normalAt(point: Vec3, vertexZ: number): Vec3;
  pointAt(vertexZ: number, x: number, y: number): Vec3;
  finiteRadiusLimit(): number | null;
}
```

Formula parity:

- Spherical sag matches current `sag(h, R)`.
- Aspheric sag matches current `conicPolySag(h, R, coeffs)`.
- Aspheric slope matches current `sagSlopeRaw(h, R, coeffs)`.
- The conic denominator guard preserves current behavior near invalid domains.
- Tilted plane points satisfy `normal dot (point - planePoint) = 0`.
- Normals are unit vectors.

Intersection requirements:

- Flat and tilted-plane surfaces use direct plane intersection.
- Curved surfaces use bracketed root finding plus safeguarded Newton iteration.
- Failure reasons are typed, including invalid direction, invalid bounds, no bracket, and no converged intersection.
- Do not use raw `NaN` as the only failure signal in engine-native math.

## Lens Normalization Requirements

`normalizeLensData` must:

1. Merge defaults exactly as the current build path does.
2. Copy input surfaces before any runtime mutation.
3. Preserve lens key, title, maker, source metadata, notes, projection metadata, display defaults, and UI-facing fields.
4. Assign stable physical surface indexes from original surface order.
5. Build one label map and fail on duplicate labels with current validation severity.
6. Resolve label-keyed objects: `asph`, `var`, `varLabels`, `aberrationControl.var`,
   `aberrationControl.varLabels`, `groups`, `doublets`, and `opticalPath.surfaceOrder`.
7. Preserve repeated labels in `opticalPath.surfaceOrder` after resolving them to indexes.
8. Preserve physical order for folded systems. Hit order belongs only to path metadata.
9. Default missing `projection` to rectilinear.
10. Default missing `opticalPath` to sequential front-to-rear behavior.
11. Resolve missing image-plane metadata to the ordinary final image plane.
12. Normalize all image-plane and interaction normals.
13. Treat omitted `SurfaceData.interaction` as refractive.
14. Preserve `stopPlacement: "inside-element"` semantics.
15. Compile element spans, groups, doublets, variable gaps, stop index, projection, optical path, and display metadata
    once.

## Dispersion Descriptor Requirements

Do not move or fork the glass catalog in this stage. Compile descriptors that can use the existing resolver.

Channel constants:

- `R`: C line, 656.3 nm.
- `G`: d line, 587.6 nm.
- `B`: F line, 486.1 nm.
- `V`: g line, 435.8 nm.

Resolution cascade:

1. Air surfaces return `1.0`.
2. Catalog Sellmeier if `glass` resolves and catalog d-line `nd` agrees within current tolerance.
3. Measured `nC` and `nF` line indices when both are present; measured `ng` for `V` when present.
4. dPgF-corrected Abbe approximation when `vd` is present.
5. Constant d-line `nd` fallback.

Preserve quality labels:

- `air`
- `sellmeier`
- `lineIndices`
- `abbe`
- `constant`

## Prepared State Requirements

Resolve current-state thickness with these rules:

- Prime variable gap `[dInfinity, dClose]` resolves as `dInfinity + (dClose - dInfinity) * focusT`.
- Zoom variable gap `[[wideInf, wideClose], ...]` first interpolates infinity and close values by `zoomT`, then
  interpolates between them by `focusT`.
- Aberration-control thickness uses `aberrationT`.
- Combined controlled thickness equals focus-resolved thickness plus the aberration delta from base thickness.
- Negative or non-finite resolved thickness is invalid and must return a typed preparation failure or be caught by
  validation.

The state cache must:

- Be optional.
- Include lens identity, normalized `focusT`, `zoomT`, and `aberrationT` in the key.
- Store immutable values.
- Not depend on React lifecycle.
- Be bypassable in tests.

## Tests

Add focused tests for:

- Vector math normalization, dot, cross, reflection, and refraction primitives.
- Sag, slope, normal, and conic-domain parity.
- Plane and sag intersections for on-axis, marginal, skew, tangent, miss, and domain-limited rays.
- Catalog-wide `buildLens2`.
- Hidden reference fixture `buildLens2`.
- Label resolution and repeated folded path labels.
- Projection defaults and image-plane defaults.
- Dispersion quality and per-surface channel lookup.
- `doLayout`, `thick`, z positions, and image plane parity through compatibility wrappers.
- Prepared-state cache hit behavior.

## Verification

Run focused tests for changed modules. Before handing off this stage, prefer:

```bash
npm run typecheck
npm run test -- --run __tests__/optics-2
```

Use the closest supported focused Vitest command if the exact command does not match the repo setup.

## Exit Gate

Stage 02 is complete when:

- Every visible and hidden lens builds through `buildLens2`.
- `EngineLens` can be recovered from a compatibility `RuntimeLens`.
- Surface math and intersections match old behavior within named tolerances.
- `prepareState` matches current `doLayout`, `thick`, and image-plane behavior.
- No UI imports have switched.
- No lens files changed.

