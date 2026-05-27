# Stage 03: Trace, Field, And First-Order

Use this stage to implement the new ray engine primitives after Stage 02 has created `EngineLens` and
`PreparedOpticalState`.

## /goal Prompt

```text
/goal Implement Optics 2 Stage 03 from engine-migration/stages/03-trace-field-and-first-order.md: implement vector-native sequential tracing, generalized folded tracing, projection/chief-ray ownership, and first-order/pupil calculations behind compatibility wrappers. Preserve legacy trace outputs and folded diagnostics.
```

## Scope

This stage covers Phase 5, Phase 6, Phase 7, and Phase 8:

- Sequential vector trace.
- Generalized folded path trace.
- Projection, field geometry, and chief rays.
- First-order, pupils, and cardinal elements.

Primary requirement ids:

- R6: Apertures, stops, and blocking.
- R7: Path and interaction model.
- R8: Ray launch and projection.
- R9: Ray trace result.
- R10: First-order and pupil calculations.

## Goals

- Make vector rays the core representation.
- Preserve legacy meridional and skew APIs through adapters.
- Centralize aperture evaluation and clipping semantics.
- Represent sequential, explicit folded, auto folded, repeated-hit, and arbitrary image-plane paths with one path model.
- Move all field launch and chief-ray ownership to shared field modules.
- Centralize paraxial, cardinal, pupil, and f-number calculations.

## Non-Goals

- Do not switch UI hooks broadly unless Stage 04 explicitly picks that up.
- Do not port chromatic UI behavior beyond trace hooks needed for parity.
- Do not mark mirror-unsafe analysis tabs as safe.
- Do not optimize before parity.

## Required Modules

```text
src/optics-2/
  trace/
    aperture.ts
    interactions.ts
    sequentialTrace.ts
    generalizedTrace.ts
    pathPlanner.ts
    stopTrace.ts
    foldedDiagnostics.ts
    rayAdapters.ts
    legacyRayResult.ts

  field/
    projection.ts
    launch.ts
    chiefRay.ts
    chiefRayCache.ts
    fieldGeometry.ts

  first-order/
    systemMatrix.ts
    cardinals.ts
    pupils.ts
    fNumber.ts
    focusBreathing.ts

  math/
    paraxial.ts
```

## Aperture Contract

Use one aperture evaluator for trace, sampling, and folded blockers.

```ts
type ApertureState = "inside" | "inside-hole" | "outside";

interface ApertureEvaluation {
  state: ApertureState;
  radius: number;
  semiDiameter: number | null;
  innerSemiDiameter: number;
}
```

Evaluation order:

1. Use `stopSemiDiameter` for the stop surface when supplied.
2. Otherwise use `surface.sd * clipMargin`.
3. Use `null` only for synthetic surfaces with no aperture.
4. If radius exceeds the active semi-diameter within tolerance, state is `outside`.
5. If `innerSd > 0` and radius is below the inner radius within tolerance, state is `inside-hole`.
6. Otherwise state is `inside`.

Trace behavior:

- `outside` clips when semi-diameter checking is active.
- `inside-hole` means an annular surface is not interacted with and the ray continues.
- `block` clips only when the ray is inside the active aperture band.
- A mirror inactive side with `inactiveSide: "block"` clips only when the ray is inside the active aperture band.
- Stop-down changes only the stop aperture, not authored surface `sd`.

## Trace Result Contract

Engine-native trace results must preserve diagnostics:

```ts
interface EngineTraceResult {
  input: Ray3;
  hits: readonly TraceHit[];
  terminalPoint: Vec3;
  terminalDirection: Vec3;
  terminalSurfaceIndex: number;
  returnVertexIndex: number;
  finalMedium: number;
  status: "ok" | "clipped" | "failed";
  failureReason: TraceFailureReason | null;
  reachedImagePlane: boolean;
  diagnostics: TraceDiagnostics;
}
```

Legacy projection happens only at the compatibility boundary:

- `pts` contains visible non-clipped meridional `[z, y]` points.
- `ghostPts` contains ghost points for clipped paths when ghost rendering is enabled.
- `y` and `u` preserve current return-plane semantics.
- `reachedImagePlane` is true only when the core trace terminates at the configured image plane.
- Folded paths append the image-plane terminal point to `pts` when reached and unclipped.

## Sequential Trace Requirements

The sequential core loop must:

1. Accept `PreparedOpticalState`, input `Ray3`, channel or index resolver, and trace options.
2. Visit physical surfaces in front-to-rear order.
3. Intersect with the prepared surface.
4. Evaluate aperture before optical interaction.
5. Record hits, clips, and typed failures.
6. Apply refraction, reflection, or block behavior.
7. Update current medium only after successful interaction.
8. Terminate at image plane when requested.
9. Return `EngineTraceResult`.

Compatibility adapters:

- `traceRay2` for meridional `(y0, u0)`.
- `traceSkewRay2` for `(x0, y0, ux0, uy0)`.
- `traceRayVector2` for vector-native input.
- `traceRayChromatic2` for channel-specific media.
- Legacy `stopAt` only for sequential compatibility.

## Folded Path Requirements

Path modes:

- `sequential`: physical surface order unless explicit optical path data overrides it.
- `explicit`: follow resolved surface indexes exactly; labels may repeat.
- `auto`: choose the nearest valid next surface at each interaction.

Incident side:

- Determine side from `dot(direction, normal)`.
- Match current behavior: `dot >= 0` means `front`; otherwise `rear`.
- `incidentSide: "both"` or omitted means active from both sides.

Auto path rules:

- Consider only intersections with positive `t` beyond self-hit tolerance.
- Skip the previous surface when it is only an immediate self-hit.
- Skip passive same-index refractive surfaces that would not change the optical path.
- Rank candidates by nearest positive `t`.
- If the image plane is nearer than the next valid surface, terminate at the image plane.
- Track skipped candidates with typed reasons.

Termination rules:

- Enforce `maxInteractions`.
- Record loop keys from surface index, rounded point, rounded direction, and current medium.
- Distinguish image plane, explicit path complete, no next surface, trace failure, clipped, loop detected, max
  interactions, and sequential return.

Stop tracing:

- Support first stop occurrence and requested later stop occurrence.
- Return the stop hit and full diagnostics.
- Work for repeated stop crossings.

## Projection And Chief-Ray Requirements

Projection formulas:

- Rectilinear: `f * tan(theta)`.
- Fisheye equidistant: `f * theta`.
- Fisheye equisolid: `2 * f * sin(theta / 2)`.

Launch rules:

- Scalar slope launch is valid only for finite `abs(fieldAngleDeg) < MAX_FIELD_LAUNCH_DEG`.
- Slope launch returns `uField = -tan(theta)`.
- Fisheye chief-ray solving always uses bounding-sphere launch.
- Rectilinear chief-ray solving uses object-plane launch below the cap and bounding-sphere at or above the cap.
- 2D projection launches use angular Cartesian fields `(thetaX, thetaY)`.

Chief-ray solver result must include:

- Status: `converged`, `paraxial-fallback`, `bracket-failed`, or `out-of-domain`.
- Iteration count.
- Launch surface kind.
- Optional `vectorLaunch`.
- Development/test diagnostics keyed by lens.

Before exiting this stage, search for field-angle `Math.tan` outside `field/projection.ts` and documented low-level
numeric tests. Delete, route, or document any remaining usage.

## First-Order And Pupil Requirements

Paraxial state:

```ts
interface ParaxialState {
  y: number;
  u: number;
  n: number;
}
```

Rules:

- Transfer: `y = y + d * u`, `u` unchanged.
- Refract: preserve current paraxial formula for curved and flat surfaces.
- Reflect: support axial folded reflective systems only when explicitly covered.
- Block surfaces return no paraxial continuation.

First-order output should include matrix, object/image index, EFL, BFD, FFD, principal positions, and nodal positions.

Pupil rules:

- Entrance pupil semi-diameter comes from aperture-reference focal length and wide-open f-number, corrected by current
  stop trace behavior.
- Physical stop semi-diameter uses real tracing for ordinary lenses unless `stopPlacement: "inside-element"` preserves
  authored stop `sd`.
- Exit pupil position and size use the current two-ray decomposition.
- Folded systems use generalized stop and full-system traces with finite fallbacks.

## Tests

Add parity tests for:

- On-axis marginal and paraxial rays.
- Off-axis meridional rays.
- Skew rays.
- Stop-down clipping.
- Ghost point behavior.
- Chromatic channel traces through the trace adapter.
- Total internal reflection or typed failures where current fixtures expose them.
- Explicit folded path with repeated labels.
- Auto path with skipped self-hit candidate.
- Annular obstruction pass-through and block cases.
- Arbitrary image-plane reachability.
- Folded diagnostics for all hidden reference fixtures.
- Projection image-height formulas.
- Launch slope and launch vector parity.
- Chief-ray status and launch kind parity.
- Distortion image-height inversion.
- Runtime constants, zoom optics, cardinals, pupils, and effective f-number.

## Verification

Run focused parity first, then broader tests if this stage touches shared exports:

```bash
npm run typecheck
npm run test -- --run __tests__/optics-2
```

If folded fixture reports change intentionally, update and document the reason in the stage hand-off.

## Exit Gate

Stage 03 is complete when:

- Sequential ordinary lenses match current ray paths, final `y/u`, clipping, ghost points, and chromatic adapter output.
- The trace core does not rebuild state surfaces per ray.
- Hidden folded fixtures pass through generalized tracing.
- Off-axis display rays and analysis launch helpers agree on chief-ray convention.
- First-order and pupil values match current behavior for representative lenses.
- Sequential lenses do not pay generalized auto-path overhead unless benchmark data justifies it.

