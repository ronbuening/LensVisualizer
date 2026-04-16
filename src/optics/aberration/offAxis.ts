import {
  bAtZoom,
  computeFieldGeometryAtState,
  halfFieldAtZoom,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  solveChiefRayLaunchHeight,
  thick,
  traceChiefRelativeSkewRay,
  traceChiefRelativeSkewRayChromatic,
  yRatioAtZoom,
  type CircularPupilSample,
  type FieldGeometryState,
  type OrthogonalPupilSample,
  type SkewImagePlaneIntercept,
  type SkewRayTraceResult,
} from "../optics.js";
import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import { bestRelativeFocusPlane, type TransverseFocusHit } from "./shared.js";

export type OffAxisFanOrientation = "tangential" | "sagittal";
export type OffAxisDirection = "tangential" | "sagittal";

type SkewBundleSourceSample = OrthogonalPupilSample | CircularPupilSample;

export interface OffAxisFieldGeometry {
  fieldFraction: number;
  fieldAngleDeg: number;
  uField: number;
  yChief: number;
  lastSurfZ: number;
  imagePlaneZ: number;
}

export interface OffAxisChiefRaySample {
  trace: SkewRayTraceResult;
  imagePoint: SkewImagePlaneIntercept;
}

export interface OffAxisTracedSample {
  index: number;
  sourceSampleIndex: number;
  xFraction: number;
  yFraction: number;
  pupilFraction: number | null;
  radiusFraction: number | null;
  azimuthRad: number | null;
  weight: number | null;
  launchX: number;
  launchY: number;
  trace: SkewRayTraceResult;
  imagePoint: SkewImagePlaneIntercept;
}

export interface OffAxisBundle {
  geometry: OffAxisFieldGeometry;
  chiefRay: OffAxisChiefRaySample;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  samples: OffAxisTracedSample[];
}

function mapTracedSample(
  sample: SkewBundleSourceSample,
  entrancePupilSemiDiameter: number,
  yChief: number,
  trace: SkewRayTraceResult,
  imagePoint: SkewImagePlaneIntercept,
): OffAxisTracedSample {
  return {
    index: sample.index,
    sourceSampleIndex: sample.index,
    xFraction: sample.xFraction,
    yFraction: sample.yFraction,
    pupilFraction: "pupilFraction" in sample ? sample.pupilFraction : null,
    radiusFraction: "radiusFraction" in sample ? sample.radiusFraction : null,
    azimuthRad: "azimuthRad" in sample ? sample.azimuthRad : null,
    weight: "weight" in sample ? sample.weight : null,
    launchX: sample.xFraction * entrancePupilSemiDiameter,
    launchY: yChief + sample.yFraction * entrancePupilSemiDiameter,
    trace,
    imagePoint,
  };
}

export function computeOffAxisFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  zoomT: number,
  fieldFraction: number,
): OffAxisFieldGeometry | null {
  if (L.N < 1) return null;
  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (!isFinite(halfFieldDeg) || halfFieldDeg < 0) return null;

  const yRatio = yRatioAtZoom(zoomT, L);
  if (!isFinite(yRatio) || Math.abs(yRatio) < 1e-12) return null;

  const fieldAngleDeg = halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const uField = -Math.tan((fieldAngleDeg * Math.PI) / 180);
  const yChief = -(bAtZoom(zoomT, L) / yRatio) * uField;
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(uField) || !isFinite(yChief) || !isFinite(imagePlaneZ)) return null;

  return {
    fieldFraction,
    fieldAngleDeg,
    uField,
    yChief,
    lastSurfZ,
    imagePlaneZ,
  };
}

export function computeStateAwareOffAxisFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  fieldFraction: number,
  stateGeometry?: FieldGeometryState,
): OffAxisFieldGeometry | null {
  if (L.N < 1) return null;
  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const geometry = stateGeometry ?? computeFieldGeometryAtState(focusT, zoomT, L);
  if (!isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg < 0) return null;

  const fieldAngleDeg = geometry.halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const uField = -Math.tan((fieldAngleDeg * Math.PI) / 180);
  const yChief = solveChiefRayLaunchHeight(fieldAngleDeg, focusT, zoomT, L, geometry);
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + thick(L.N - 1, focusT, zoomT, L);
  if (!isFinite(uField) || !isFinite(yChief) || !isFinite(imagePlaneZ)) return null;

  return {
    fieldFraction,
    fieldAngleDeg,
    uField,
    yChief,
    lastSurfZ,
    imagePlaneZ,
  };
}

export function traceOffAxisChiefRay(
  geometry: OffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
): OffAxisChiefRaySample | null {
  const trace = channel
    ? traceChiefRelativeSkewRayChromatic(
        0,
        0,
        geometry.yChief,
        geometry.uField,
        entrancePupilSemiDiameter,
        focusT,
        zoomT,
        stopSemiDiameter,
        true,
        L,
        channel,
      )
    : traceChiefRelativeSkewRay(
        0,
        0,
        geometry.yChief,
        geometry.uField,
        entrancePupilSemiDiameter,
        focusT,
        zoomT,
        stopSemiDiameter,
        true,
        L,
      );
  if (trace.clipped) return null;

  const imagePoint = skewImagePlaneIntercept(
    trace.x,
    trace.y,
    trace.ux,
    trace.uy,
    geometry.lastSurfZ,
    geometry.imagePlaneZ,
  );
  if (imagePoint === null) return null;

  return {
    trace,
    imagePoint,
  };
}

export function traceOffAxisBundleFromSamples(
  samples: readonly SkewBundleSourceSample[],
  geometry: OffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
): OffAxisBundle | null {
  if (entrancePupilSemiDiameter <= 0 || L.N < 1) return null;

  const chiefRay = traceOffAxisChiefRay(
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
  );
  if (chiefRay === null) return null;

  const tracedSamples = samples.flatMap((sample) => {
    const trace = channel
      ? traceChiefRelativeSkewRayChromatic(
          sample.xFraction,
          sample.yFraction,
          geometry.yChief,
          geometry.uField,
          entrancePupilSemiDiameter,
          focusT,
          zoomT,
          stopSemiDiameter,
          true,
          L,
          channel,
        )
      : traceChiefRelativeSkewRay(
          sample.xFraction,
          sample.yFraction,
          geometry.yChief,
          geometry.uField,
          entrancePupilSemiDiameter,
          focusT,
          zoomT,
          stopSemiDiameter,
          true,
          L,
        );
    if (trace.clipped) return [];

    const imagePoint = skewImagePlaneIntercept(
      trace.x,
      trace.y,
      trace.ux,
      trace.uy,
      geometry.lastSurfZ,
      geometry.imagePlaneZ,
    );
    if (imagePoint === null) return [];

    return [mapTracedSample(sample, entrancePupilSemiDiameter, geometry.yChief, trace, imagePoint)];
  });

  return {
    geometry,
    chiefRay,
    sampleCount: samples.length,
    validSampleCount: tracedSamples.length,
    clippedSampleCount: samples.length - tracedSamples.length,
    samples: tracedSamples,
  };
}

export function traceOrthogonalOffAxisBundle(
  orientation: OffAxisFanOrientation,
  sampleCount: number,
  geometry: OffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
): OffAxisBundle | null {
  return traceOffAxisBundleFromSamples(
    sampleOrthogonalPupilFan(sampleCount, orientation),
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
  );
}

export function traceCircularOffAxisBundle(
  ringSamples: readonly number[],
  geometry: OffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
): OffAxisBundle | null {
  return traceOffAxisBundleFromSamples(
    sampleCircularPupil(ringSamples),
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
  );
}

export function transverseFocusHitsForDirection(
  bundle: OffAxisBundle,
  direction: OffAxisDirection,
): { hits: TransverseFocusHit[]; referenceHit: TransverseFocusHit } {
  const hits = bundle.samples.map((sample) => ({
    coordinate: direction === "tangential" ? sample.trace.y : sample.trace.x,
    slope: direction === "tangential" ? sample.trace.uy : sample.trace.ux,
  }));
  const referenceHit = {
    coordinate: direction === "tangential" ? bundle.chiefRay.trace.y : bundle.chiefRay.trace.x,
    slope: direction === "tangential" ? bundle.chiefRay.trace.uy : bundle.chiefRay.trace.ux,
  };

  return { hits, referenceHit };
}

export function bestFocusPlaneForDirection(bundle: OffAxisBundle, direction: OffAxisDirection): number {
  const { hits, referenceHit } = transverseFocusHitsForDirection(bundle, direction);
  return bestRelativeFocusPlane(hits, referenceHit, bundle.geometry.lastSurfZ);
}
