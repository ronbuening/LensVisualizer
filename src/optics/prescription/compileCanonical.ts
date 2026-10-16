/** The uncached canonical compiler; the entry caches only its successful, complete result. */
import type { LensData } from "../../types/optics.js";
import type { CanonicalLens, CanonicalProvenance } from "./canonical.js";
import type {
  AuthoredRayFans,
  CompiledLens,
  CompiledPrescription,
  LensConstants,
  CompiledLensFlags,
  DisplaySpec,
  PathSpec,
  ProjectionSpec,
  StopSpec,
} from "../types.js";
import { computeLensConstants } from "../first-order/lensConstants.js";
import { expandedConstruction } from "./rearPlates.js";
import { compileConstruction, type LensConstruction } from "./compileConstruction.js";
import { resolvedImagePlaneToPlane3 } from "./interactions.js";

export function compileCanonicalUncached(
  prescription: CanonicalLens,
  provenance: CanonicalProvenance,
  descriptor?: LensData["attachedTeleconverter"],
): CompiledLens {
  const { data, source } = expandedConstruction({ prescription, provenance }, descriptor);
  const input = compileConstruction(data, source);
  const prescriptionCore = compilePrescription(input);
  return completeCompilation(prescriptionCore, computeLensConstants(prescriptionCore));
}

/** Index and resolve the prescription before any constants or RuntimeLens exists. */
export function compilePrescription(input: LensConstruction): CompiledPrescription {
  const { data, source } = input;
  const surfaces = input.surfaces;
  const variables = Object.freeze({
    isZoom: input.isZoom,
    focusPositions: input.focusPositions,
    zoomPositions: data.zoomPositions ? Object.freeze([...data.zoomPositions]) : null,
    zoomLabels: data.zoomLabels ? Object.freeze([...data.zoomLabels]) : null,
    zoomStep: data.zoomStep || 0.004,
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
    data,
    indices: Object.freeze({
      asphByIdx: input.asphByIdx,
      vdByIdx: input.vdByIdx,
      spectralByIdx: input.spectralByIdx,
      indexByIdx: input.indexByIdx,
    }),
    lastLensSurfaceIndex: input.lastLensSurfaceIdx,
    displayElementSpans: input.ES,
    hasExplicitImagePlane: data.opticalPath?.imagePlane !== undefined,
    surfaces,
    elements: input.elements,
    labelToSurfaceIndex: input.labelIdx,
    stop: compileStop(input),
    projection: compileProjection(input),
    opticalPath: compileOpticalPath(input),
    variables,
    aberrationControl,
    annotations: Object.freeze({ groups: input.groups, doublets: input.doublets }),
    dispersion: input.dispersion,
    display: compileDisplay(input),
    authoredRayFans: compileRayFans(input),
    perspectiveControl: data.perspectiveControl ?? null,
    flags: compileFlags(input),
  });
  return compiled;
}

/** Publish sized surfaces and constants together, without constructing or retaining a runtime view. */
export function completeCompilation(prescription: CompiledPrescription, constants: LensConstants): CompiledLens {
  const surfaces = Object.freeze(
    prescription.surfaces.map((surface, i) =>
      Object.freeze({
        ...surface,
        sd: i === prescription.stop.surfaceIndex ? constants.stopPhysSD : surface.sd,
      }),
    ),
  );
  return Object.freeze({
    ...prescription,
    surfaces,
    constants,
    stop: Object.freeze({ ...prescription.stop, physicalSemiDiameter: constants.stopPhysSD }),
    imagePlane: resolvedImagePlaneToPlane3(constants.imagePlane),
    display: Object.freeze({
      ...prescription.display,
      svgH: constants.svgH,
      maxRimTan: constants.maxRimTan,
      lensShiftFrac: constants.lensShiftFrac,
    }),
  });
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

function compileDisplay(input: LensConstruction): Omit<DisplaySpec, "maxRimTan"> {
  return Object.freeze({
    svgW: input.data.svgW,
    svgH: input.data.svgH,
    scFill: input.data.scFill,
    yScFill: input.data.yScFill,
    maxRimAngleDeg: input.data.maxRimAngleDeg,
    gapSagFrac: input.data.gapSagFrac,
    maxAspectRatio: input.data.maxAspectRatio,
    lensShiftFrac: input.data.lensShiftFrac,
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
