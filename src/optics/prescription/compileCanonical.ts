/** The uncached canonical compiler; the entry caches only its successful, complete result. */
import type { LensData, RuntimeLens } from "../../types/optics.js";
import type { CanonicalLens, CanonicalProvenance } from "./canonical.js";
import type {
  AuthoredRayFans,
  CompiledLens,
  CompiledLensFlags,
  DisplaySpec,
  PathSpec,
  ProjectionSpec,
  StopSpec,
} from "../types.js";
import buildRuntimeLens from "../runtimeLens.js";
import { expandedConstruction } from "./rearPlates.js";
import { compileConstruction, type LensConstruction } from "./compileConstruction.js";
import { associateRuntime } from "./identity.js";
import { resolvedImagePlaneToPlane3 } from "./interactions.js";

export function compileCanonicalUncached(
  prescription: CanonicalLens,
  provenance: CanonicalProvenance,
  descriptor?: LensData["attachedTeleconverter"],
): CompiledLens {
  const { data, source } = expandedConstruction({ prescription, provenance }, descriptor);
  const input = compileConstruction(data, source);
  return completeCompilation(input, buildRuntimeLens(input));
}

/** Finish compiler-owned records with the constants recipe's result; also supports explicit synthetic test views. */
export function completeCompilation(input: LensConstruction, runtime: RuntimeLens): CompiledLens {
  const { data, source } = input;
  // Stop sizing changes only the aperture record, never its compiled profile.
  const surfaces = Object.freeze(input.surfaces.map((surface, i) => Object.freeze({ ...surface, sd: input.S[i].sd })));
  const variables = Object.freeze({
    isZoom: input.isZoom,
    focusPositions: input.focusPositions,
    zoomPositions: data.zoomPositions ? Object.freeze([...data.zoomPositions]) : null,
    zoomLabels: data.zoomLabels ? Object.freeze([...data.zoomLabels]) : null,
    zoomStep: runtime.zoomStep,
    bySurfaceIndex: input.varByIdx,
    labels: Object.freeze(input.varLabels),
  });
  const control = input.aberrationControl;
  const aberrationControl = control
    ? Object.freeze({
        label: control.label,
        description: control.description,
        minLabel: control.minLabel,
        centerLabel: control.centerLabel,
        maxLabel: control.maxLabel,
        step: control.step,
        varBySurfaceIndex: control.varByIdx,
        varLabels: Object.freeze(control.varLabels),
      })
    : null;
  const compiled = Object.freeze({
    key: data.key,
    source,
    runtime,
    surfaces,
    elements: input.elements,
    labelToSurfaceIndex: input.labelIdx,
    stop: compileStop(input),
    projection: compileProjection(input),
    opticalPath: compileOpticalPath(input),
    imagePlane: resolvedImagePlaneToPlane3(runtime.imagePlane),
    variables,
    aberrationControl,
    annotations: Object.freeze({ groups: input.groups, doublets: input.doublets }),
    dispersion: input.dispersion,
    display: compileDisplay(input, runtime.svgH, runtime.maxRimTan, runtime.lensShiftFrac),
    authoredRayFans: compileRayFans(input),
    perspectiveControl: data.perspectiveControl ?? null,
    flags: compileFlags(input),
  });
  associateRuntime(runtime, compiled);
  return compiled;
}

function compileStop(input: LensConstruction): StopSpec {
  const stopSurface = input.S[input.stopIdx];
  return Object.freeze({
    surfaceIndex: input.stopIdx,
    label: stopSurface.label,
    physicalSemiDiameter: input.S[input.stopIdx].sd,
    placement: stopSurface.stopPlacement === "inside-element" ? "inside-element" : "surface",
  });
}

function compileProjection(input: LensConstruction): ProjectionSpec {
  return Object.freeze({
    config: input.projection,
    kind: input.projection.kind,
  });
}

function compileOpticalPath(input: LensConstruction): PathSpec {
  return Object.freeze({
    mode: input.opticalPath.mode,
    surfaceOrder: input.opticalPath.surfaceOrder ? Object.freeze([...input.opticalPath.surfaceOrder]) : null,
    surfaceLabels: input.opticalPath.surfaceLabels ? Object.freeze([...input.opticalPath.surfaceLabels]) : null,
    maxInteractions: input.opticalPath.maxInteractions,
  });
}

function compileDisplay(input: LensConstruction, svgH: number, maxRimTan: number, lensShiftFrac: number): DisplaySpec {
  return Object.freeze({
    svgW: input.data.svgW,
    svgH,
    scFill: input.data.scFill,
    yScFill: input.data.yScFill,
    maxRimAngleDeg: input.data.maxRimAngleDeg,
    maxRimTan,
    gapSagFrac: input.data.gapSagFrac,
    maxAspectRatio: input.data.maxAspectRatio,
    lensShiftFrac,
    rayLeadFrac: input.data.rayLeadFrac,
  });
}

function compileRayFans(input: LensConstruction): AuthoredRayFans {
  return Object.freeze({
    rayFractions: Object.freeze([...input.data.rayFractions]),
    offAxisFractions: Object.freeze([...input.data.offAxisFractions]),
    offAxisFieldFrac: input.data.offAxisFieldFrac,
  });
}

function compileFlags(input: LensConstruction): CompiledLensFlags {
  return Object.freeze({
    isZoom: input.isZoom,
    isFoldedOptics: input.isFoldedOptics,
    hasPerspectiveControl: input.data.perspectiveControl != null,
    hasAberrationControl: input.aberrationControl !== null,
  });
}
