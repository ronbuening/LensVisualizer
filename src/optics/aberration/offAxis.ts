import {
  entrancePupilAtState,
  halfFieldAtZoom,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  traceSkewRay,
  traceSkewRayChromatic,
  type CircularPupilSample,
  type OrthogonalPupilSample,
  type SkewImagePlaneIntercept,
  type SkewRayTraceResult,
} from "../optics.js";
import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import { bestRelativeFocusPlane, type TransverseFocusHit } from "./shared.js";

export type OffAxisFanOrientation = "tangential" | "sagittal";
export type OffAxisDirection = "tangential" | "sagittal";
export type OffAxisObjectConjugate = "infinity" | "minimumFocus";

type SkewBundleSourceSample = OrthogonalPupilSample | CircularPupilSample;

export interface OffAxisFieldGeometry {
  fieldFraction: number;
  fieldAngleDeg: number;
  objectConjugate: OffAxisObjectConjugate;
  objectDistanceMm: number | null;
  chiefLaunchX: number;
  chiefLaunchY: number;
  chiefSlopeX: number;
  chiefSlopeY: number;
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

interface OffAxisLaunchState {
  objectDistanceMm: number | null;
  chiefLaunchX: number;
  chiefLaunchY: number;
  chiefSlopeX: number;
  chiefSlopeY: number;
}

interface OffAxisLaunchSample {
  launchX: number;
  launchY: number;
  slopeX: number;
  slopeY: number;
}

function mapTracedSample(
  sample: SkewBundleSourceSample,
  launchSample: OffAxisLaunchSample,
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
    launchX: launchSample.launchX,
    launchY: launchSample.launchY,
    trace,
    imagePoint,
  };
}

function offAxisLaunchState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  stopSemiDiameter: number,
  fieldAngleDeg: number,
  objectConjugate: OffAxisObjectConjugate,
): OffAxisLaunchState | null {
  const entrancePupil = entrancePupilAtState(stopSemiDiameter, focusT, zoomT, L);
  const epRatio = entrancePupil.epRatio;
  if (!isFinite(epRatio)) return null;

  if (objectConjugate === "minimumFocus") {
    const objectDistanceMm = L.closeFocusM * 1000;
    if (!isFinite(objectDistanceMm) || objectDistanceMm <= 0) return null;

    const objectHeightMm = objectDistanceMm * Math.tan((fieldAngleDeg * Math.PI) / 180);
    const chiefLaunchY = (epRatio * objectHeightMm) / (objectDistanceMm + epRatio);
    return {
      objectDistanceMm,
      chiefLaunchX: 0,
      chiefLaunchY,
      chiefSlopeX: 0,
      chiefSlopeY: (chiefLaunchY - objectHeightMm) / objectDistanceMm,
    };
  }

  const chiefSlopeY = -Math.tan((fieldAngleDeg * Math.PI) / 180);
  return {
    objectDistanceMm: null,
    chiefLaunchX: 0,
    chiefLaunchY: -epRatio * chiefSlopeY,
    chiefSlopeX: 0,
    chiefSlopeY,
  };
}

function launchSampleForFractions(
  geometry: OffAxisFieldGeometry,
  entrancePupilSemiDiameter: number,
  xFraction: number,
  yFraction: number,
): OffAxisLaunchSample {
  const launchX = geometry.chiefLaunchX + xFraction * entrancePupilSemiDiameter;
  const launchY = geometry.chiefLaunchY + yFraction * entrancePupilSemiDiameter;

  if (geometry.objectDistanceMm === null) {
    return {
      launchX,
      launchY,
      slopeX: geometry.chiefSlopeX,
      slopeY: geometry.chiefSlopeY,
    };
  }

  return {
    launchX,
    launchY,
    slopeX: geometry.chiefSlopeX + (launchX - geometry.chiefLaunchX) / geometry.objectDistanceMm,
    slopeY: geometry.chiefSlopeY + (launchY - geometry.chiefLaunchY) / geometry.objectDistanceMm,
  };
}

export function traceOffAxisRelativeRay(
  xFraction: number,
  yFraction: number,
  geometry: OffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
): SkewRayTraceResult {
  const launchSample = launchSampleForFractions(geometry, entrancePupilSemiDiameter, xFraction, yFraction);
  return channel
    ? traceSkewRayChromatic(
        launchSample.launchX,
        launchSample.launchY,
        launchSample.slopeX,
        launchSample.slopeY,
        focusT,
        zoomT,
        stopSemiDiameter,
        true,
        L,
        channel,
      )
    : traceSkewRay(
        launchSample.launchX,
        launchSample.launchY,
        launchSample.slopeX,
        launchSample.slopeY,
        focusT,
        zoomT,
        stopSemiDiameter,
        true,
        L,
      );
}

export function computeOffAxisFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  objectConjugate: OffAxisObjectConjugate = "infinity",
): OffAxisFieldGeometry | null {
  if (L.N < 1) return null;
  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (!isFinite(halfFieldDeg) || halfFieldDeg < 0) return null;

  const fieldAngleDeg = halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  const launchState = offAxisLaunchState(L, focusT, zoomT, currentPhysStopSD, fieldAngleDeg, objectConjugate);
  if (launchState === null || !isFinite(imagePlaneZ)) return null;

  return {
    fieldFraction,
    fieldAngleDeg,
    objectConjugate,
    objectDistanceMm: launchState.objectDistanceMm,
    chiefLaunchX: launchState.chiefLaunchX,
    chiefLaunchY: launchState.chiefLaunchY,
    chiefSlopeX: launchState.chiefSlopeX,
    chiefSlopeY: launchState.chiefSlopeY,
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
  const trace = traceOffAxisRelativeRay(
    0,
    0,
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
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
    const trace = traceOffAxisRelativeRay(
      sample.xFraction,
      sample.yFraction,
      geometry,
      L,
      focusT,
      zoomT,
      entrancePupilSemiDiameter,
      stopSemiDiameter,
      channel,
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

    const launchSample = launchSampleForFractions(
      geometry,
      entrancePupilSemiDiameter,
      sample.xFraction,
      sample.yFraction,
    );
    return [mapTracedSample(sample, launchSample, trace, imagePoint)];
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
