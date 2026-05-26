import buildLens from "../../optics/buildLens.js";
import LENS_DEFAULTS from "../../lens-data/defaults.js";
import type { LensData, RuntimeLens, SurfaceData } from "../../types/optics.js";
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
import { createSurfaceProfile } from "../math/surfaceProfile.js";
import { compileAspheres } from "./aspheres.js";
import { compileSurfaceDispersions } from "./dispersion.js";
import { compileAnnotations, compileElements } from "./groups.js";
import { compileSurfaceInteraction, resolvedImagePlaneToPlane3 } from "./interactions.js";
import { buildSurfaceLabelMap } from "./labels.js";
import { compileVariableGaps, compileVariableLabels } from "./variables.js";

export function withLensDefaults(data: LensData): LensData {
  return structuredClone({ ...LENS_DEFAULTS, ...data }) as LensData;
}

export function normalizeLensData(data: LensData): EngineLens {
  return normalizeRuntimeLens(buildLens(withLensDefaults(data)));
}

export function normalizeRuntimeLens(runtime: RuntimeLens): EngineLens {
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
        elemId: surface.elemId,
        stopPlacement: surface.stopPlacement ?? null,
        asphere,
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
    clipMargin: runtime.clipMargin,
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
