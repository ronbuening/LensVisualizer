/**
 * Lens prescription normalization — builds EngineLens objects from authored or runtime data.
 *
 * Consolidates defaults, labels, aspheres, interactions, groups, and dispersion descriptors before
 * state preparation and exact tracing consume the lens.
 */

import buildRuntimeLens, { assertValidLensData } from "../runtimeLens.js";
import validateLensData from "../validateLensData.js";
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
import { v1CatalogDefaults } from "./defaults.js";
import { ingestLensV1 } from "./ingestV1.js";
import { toLensData } from "./toLensData.js";

/**
 * A V1 file as the validator reads it: spread over the catalog defaults.
 *
 * The validator speaks for the file on every build (OPTICS_ENGINE_REWRITE_SPEC.md, S2.P1.T2). It needs merged data,
 * and the view would repair what it refuses, so the file is spread over the defaults table to ask it and nothing is
 * built from the spread: the one spread of the table outside tests. This ends no later than S5.P1.T3, which validates
 * canonical data; S5.P1.T1, which replaces this module, carries it or ends it.
 */
function asTheValidatorReadsIt(data: unknown): LensData {
  return { ...v1CatalogDefaults(), ...(data as object) } as LensData;
}

/**
 * The validator's messages for a V1 file as authored, as `buildLens()` asks them.
 *
 * @param data - an authored lens file, with or without the catalog defaults
 * @returns each message, empty when the validator accepts the file
 */
export function validateAuthoredLensData(data: unknown): string[] {
  return validateLensData(asTheValidatorReadsIt(data));
}

/**
 * The lens data `buildLens()` builds from what its caller hands it.
 *
 * A pair `attachTeleconverter()` composed is known only by the object that function writes as its marker,
 * `attachedTeleconverter`, and is built as it is, because its host and converter each came through ingest in their
 * catalogs. That is a temporary seam until S5.P1.T4 composes on the canonical form. Anything else is a V1 file, which
 * the validator is asked about first (`asTheValidatorReadsIt`). A file it accepts goes through canonical ingest, which
 * throws a refusal naming each field and its authored path, and comes back as its V1 view, which applies the schema
 * defaults: the one place the engine applies them. A catalog entry was ingested by its getter before it got here, so
 * a catalog file both refuse reports ingest's refusal. Rear plates expand after this, in `buildLens()`.
 *
 * @param data - an authored lens file, with or without the catalog defaults, or a composed pair
 * @returns a fresh copy for the engine to hold
 * @throws Error with the validator's messages, or ingest's refusal
 */
export function withLensDefaults(data: LensData): LensData {
  const marker = (data as { attachedTeleconverter?: unknown } | undefined)?.attachedTeleconverter;
  if (marker !== null && typeof marker === "object") return structuredClone(data);
  assertValidLensData(asTheValidatorReadsIt(data));
  return toLensData(ingestLensV1(data as unknown as LensDataInput));
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
