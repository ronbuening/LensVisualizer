/**
 * Lens prescription normalization — builds EngineLens objects from authored or runtime data.
 *
 * Consolidates defaults, labels, aspheres, interactions, groups, and dispersion descriptors before
 * state preparation and exact tracing consume the lens.
 */

import buildRuntimeLens, { assertValidLensData } from "../runtimeLens.js";
import type { LensData, LensDataInput, RuntimeLens, SurfaceData } from "../../types/optics.js";
import type {
  AberrationControlSpec,
  AuthoredRayFans,
  CompiledSurface,
  DisplaySpec,
  EngineLens,
  EngineLensFlags,
  PathSpec,
  ProjectionSpec,
  StopSpec,
  VariableSpec,
} from "../types.js";
import { createSurfaceProfile } from "../geometry/surfaceProfile.js";
import { compileDiffractivePhase } from "../math/diffractivePhase.js";
import { compileAspheres } from "./aspheres.js";
import { compileSurfaceDispersions } from "./dispersion.js";
import { compileAnnotations, compileElements } from "./groups.js";
import { compileSurfaceInteraction, resolvedImagePlaneToPlane3 } from "./interactions.js";
import { buildSurfaceLabelMap } from "./labels.js";
import { compileVariableGaps, compileVariableLabels } from "./variables.js";
import type { LensDataV2Input } from "../../types/lensDataV2.js";
import { v1CatalogDefaults } from "./defaults.js";
import { ingestLens } from "./ingestV2.js";
import { toLensData } from "./toLensData.js";

/**
 * The lens data `buildLens()` builds from what its caller hands it.
 *
 * An authored file goes through canonical ingest and comes back as its V1 view, which applies the schema defaults:
 * the one place the engine applies them. A pair `attachTeleconverter()` composed is known only by the marker that
 * function writes, `attachedTeleconverter`, and is built as it is, because its host and converter each came through
 * ingest in their catalogs. That is a temporary seam until S5.P1.T4 composes on the canonical form. Rear plates
 * expand after this, in `buildLens()`.
 *
 * A file of either version is read by its `schema`. The validator reads V1, so a V2 file's refusal comes from V2
 * ingest, at the file's own paths, and the validator then reads its view in `buildLens()`.
 *
 * @param data - an authored lens file of either version, a V1 one with or without the catalog defaults, or a
 *   composed pair
 * @returns a fresh copy for the engine to hold
 * @throws Error with the validator's messages, or what ingest or the view threw
 */
export function withLensDefaults(data: LensData | LensDataV2Input): LensData {
  if ("attachedTeleconverter" in data && data.attachedTeleconverter !== undefined) return structuredClone(data);
  try {
    return toLensData(ingestLens(data as LensDataInput | LensDataV2Input));
  } catch (error) {
    /* The validator speaks first when buildLens is handed a V1 file (OPTICS_ENGINE_REWRITE_SPEC.md, S2.P1.T2): a file
     * it rejects throws its messages, as before ingest, whatever ingest or the view threw on it, a `TypeError` on
     * wrong-typed data included. A file it accepts throws what ingest threw, a refusal naming each field and its
     * authored path. The validator needs merged data and a refused file has no view, so the file is spread over the
     * defaults table to ask it, and nothing is built from the spread: the one spread of the table outside tests. A
     * catalog entry was ingested by its getter before it got here, so a catalog file both refuse reports ingest's
     * refusal. This ends no later than S5.P1.T3, which validates canonical data; S5.P1.T1, which replaces this
     * module, carries it or ends it. */
    if (!("schema" in data)) assertValidLensData({ ...v1CatalogDefaults(), ...data } as LensData);
    throw error;
  }
}

/**
 * Build a normalized EngineLens from authored lens data.
 *
 * This path goes through RuntimeLens construction so validation/defaulting and
 * compatibility fields remain identical to the public `buildLens()` surface.
 *
 * @param data - authored lens data
 * @returns normalized engine lens ready for prepared-state work
 */
export function normalizeLensData(data: LensData): EngineLens {
  return normalizeRuntimeLens(buildRuntimeLens(withLensDefaults(data)));
}

/* Identity-keyed cache: normalization structuredClones the prescription and
 * re-runs glass matching per surface, so hot callers (chief-ray solves,
 * cardinal traces, per-field distortion sweeps) must share one EngineLens per
 * RuntimeLens. Safe because RuntimeLens objects are rebuilt on data change —
 * the same WeakMap-keyed-on-RuntimeLens pattern the trace adapters and
 * solveChiefRay rely on (agent_docs/gotchas.md). */
const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

/**
 * Normalize an existing RuntimeLens into immutable engine structures.
 *
 * The resulting EngineLens keeps the original RuntimeLens reference for adapter
 * calls, but compiles labels, interactions, profiles, dispersion, and variable
 * gaps into index-keyed structures used by trace and analysis modules.
 * Results are cached by RuntimeLens identity; callers must not mutate a
 * RuntimeLens in place.
 *
 * @param runtime - runtime lens object returned by the public builder
 * @returns frozen normalized engine lens
 */
export function normalizeRuntimeLens(runtime: RuntimeLens): EngineLens {
  const cached = ENGINE_LENS_BY_RUNTIME.get(runtime);
  if (cached) return cached;
  const engineLens = normalizeRuntimeLensUncached(runtime);
  ENGINE_LENS_BY_RUNTIME.set(runtime, engineLens);
  return engineLens;
}

function normalizeRuntimeLensUncached(runtime: RuntimeLens): EngineLens {
  const source = structuredClone(runtime.data);
  const labelToSurfaceIndex = buildSurfaceLabelMap(source.surfaces);
  const aspheresByIndex = compileAspheres(source.asph, labelToSurfaceIndex);
  const surfaces = compileSurfaces(runtime.S, source.surfaces, aspheresByIndex);
  const elements = compileElements(source.surfaces, source.elements, labelToSurfaceIndex);
  const variables = compileVariables(runtime, labelToSurfaceIndex);
  const aberrationControl = compileAberrationControl(runtime, labelToSurfaceIndex);

  return Object.freeze({
    key: runtime.data.key,
    source,
    runtime,
    surfaces,
    elements,
    labelToSurfaceIndex,
    stop: compileStop(runtime),
    projection: compileProjection(runtime),
    opticalPath: compileOpticalPath(runtime),
    imagePlane: resolvedImagePlaneToPlane3(runtime.imagePlane),
    variables,
    aberrationControl,
    annotations: Object.freeze({
      groups: compileAnnotations(source.groups, labelToSurfaceIndex),
      doublets: compileAnnotations(source.doublets, labelToSurfaceIndex),
    }),
    dispersion: compileSurfaceDispersions(runtime.S, source.elements, runtime.spectralByIdx),
    display: compileDisplay(runtime),
    authoredRayFans: compileRayFans(runtime),
    perspectiveControl: runtime.perspectiveControl,
    flags: compileFlags(runtime),
  });
}

function compileSurfaces(
  runtimeSurfaces: readonly SurfaceData[],
  sourceSurfaces: readonly SurfaceData[],
  aspheresByIndex: Readonly<Record<number, NonNullable<CompiledSurface["asphere"]>>>,
): readonly CompiledSurface[] {
  return Object.freeze(
    runtimeSurfaces.map((surface, physicalIndex) => {
      const asphere = aspheresByIndex[physicalIndex] ?? null;
      return Object.freeze({
        physicalIndex,
        label: surface.label,
        R: surface.R,
        d: surface.d,
        nd: surface.nd,
        sd: surface.sd,
        innerSd: surface.innerSd ?? null,
        clips: surface.clips !== false,
        elemId: surface.elemId,
        stopPlacement: surface.stopPlacement ?? null,
        asphere,
        diffractive: compileDiffractivePhase(surface.diffractive),
        interaction: compileSurfaceInteraction(surface.interaction),
        profile: createSurfaceProfile(surface, asphere ?? undefined),
        source: Object.freeze({ ...sourceSurfaces[physicalIndex] }),
      });
    }),
  );
}

function compileStop(runtime: RuntimeLens): StopSpec {
  const stopSurface = runtime.S[runtime.stopIdx];
  return Object.freeze({
    surfaceIndex: runtime.stopIdx,
    label: stopSurface.label,
    physicalSemiDiameter: runtime.stopPhysSD,
    placement: stopSurface.stopPlacement === "inside-element" ? "inside-element" : "surface",
  });
}

function compileProjection(runtime: RuntimeLens): ProjectionSpec {
  return Object.freeze({
    config: runtime.projection,
    kind: runtime.projection.kind,
  });
}

function compileOpticalPath(runtime: RuntimeLens): PathSpec {
  return Object.freeze({
    mode: runtime.opticalPath.mode,
    surfaceOrder: runtime.opticalPath.surfaceOrder ? Object.freeze([...runtime.opticalPath.surfaceOrder]) : null,
    surfaceLabels: runtime.opticalPath.surfaceLabels ? Object.freeze([...runtime.opticalPath.surfaceLabels]) : null,
    maxInteractions: runtime.opticalPath.maxInteractions,
  });
}

function compileVariables(runtime: RuntimeLens, labelToSurfaceIndex: Readonly<Record<string, number>>): VariableSpec {
  return Object.freeze({
    isZoom: runtime.isZoom,
    focusPositions: runtime.focusPositions,
    zoomPositions: runtime.zoomPositions ? Object.freeze([...runtime.zoomPositions]) : null,
    zoomLabels: runtime.zoomLabels ? Object.freeze([...runtime.zoomLabels]) : null,
    zoomStep: runtime.zoomStep,
    bySurfaceIndex: compileVariableGaps(runtime.data.var, labelToSurfaceIndex),
    labels: compileVariableLabels(runtime.data.varLabels, labelToSurfaceIndex),
  });
}

function compileAberrationControl(
  runtime: RuntimeLens,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
): AberrationControlSpec | null {
  const control = runtime.data.aberrationControl;
  if (!control) return null;
  return Object.freeze({
    label: control.label,
    description: control.description,
    minLabel: control.minLabel,
    centerLabel: control.centerLabel,
    maxLabel: control.maxLabel,
    step: control.step,
    varBySurfaceIndex: compileVariableGaps(control.var, labelToSurfaceIndex, "aberrationControl.var"),
    varLabels: compileVariableLabels(control.varLabels, labelToSurfaceIndex, "aberrationControl.varLabels"),
  });
}

function compileDisplay(runtime: RuntimeLens): DisplaySpec {
  return Object.freeze({
    svgW: runtime.svgW,
    svgH: runtime.svgH,
    scFill: runtime.data.scFill,
    yScFill: runtime.data.yScFill,
    maxRimAngleDeg: runtime.data.maxRimAngleDeg,
    maxRimTan: runtime.maxRimTan,
    gapSagFrac: runtime.gapSagFrac,
    maxAspectRatio: runtime.data.maxAspectRatio,
    lensShiftFrac: runtime.lensShiftFrac,
    rayLeadFrac: runtime.data.rayLeadFrac,
  });
}

function compileRayFans(runtime: RuntimeLens): AuthoredRayFans {
  return Object.freeze({
    rayFractions: Object.freeze([...runtime.rayFractions]),
    offAxisFractions: Object.freeze([...runtime.offAxisFractions]),
    offAxisFieldFrac: runtime.offAxisFieldFrac,
  });
}

function compileFlags(runtime: RuntimeLens): EngineLensFlags {
  return Object.freeze({
    isZoom: runtime.isZoom,
    isFoldedOptics: runtime.isFoldedOptics,
    hasPerspectiveControl: runtime.perspectiveControl !== null,
    hasAberrationControl: runtime.aberrationControl !== null,
  });
}
