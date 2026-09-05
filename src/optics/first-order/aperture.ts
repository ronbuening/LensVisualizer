/** Shared physical-stop mapping, real-ray working aperture and paraxial diagnostics. */
import type { ApertureMetrics, RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import { normalizeControlT } from "../math/numerics.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";
import { fopenAtZoom } from "../prescription/zoomMetadata.js";
import { interpolateUniformSchedule } from "../math/uniformInterpolation.js";
import { realWorkingApertureForState } from "../trace/workingFNumber.js";
import { calculatedFocalLengthForState } from "./focusBreathing.js";

export type { ApertureMetrics } from "../../types/optics.js";

/** Map the marked aperture to a physical iris, retaining the historical mapping when no schedule is authored. */
export function resolveApertureStop(L: RuntimeLens, zoomT: number, markedFNumber: number) {
  const t = normalizeControlT(zoomT, "zoomT");
  if (!Number.isFinite(markedFNumber) || markedFNumber <= 0) throw new RangeError("Marked f-number must be positive");
  const wideOpenFNumber = fopenAtZoom(t, L);
  const fNumber = Math.min(L.maxFstop, Math.max(wideOpenFNumber, markedFNumber));
  const schedule = L.data.wideOpenStopSemiDiameterMm;
  let wideOpenStop = typeof schedule === "number" ? schedule : L.stopPhysSD;
  if (Array.isArray(schedule)) {
    wideOpenStop = interpolateUniformSchedule(schedule, t);
  }
  const referenceFNumber = schedule === undefined ? L.FOPEN : wideOpenFNumber;
  return { fNumber, wideOpenFNumber, stopSemiDiameterMm: (wideOpenStop * referenceFNumber) / fNumber };
}

const apertureCache = new WeakMap<PreparedOpticalState, Map<number, ApertureMetrics>>();

/** Share immutable aperture reports across viewer and analysis, retaining at most 16 iris settings per state. */
export function apertureMetricsForState(state: PreparedOpticalState, stopSemiDiameterMm: number): ApertureMetrics {
  let cache = apertureCache.get(state);
  if (!cache) {
    cache = new Map();
    apertureCache.set(state, cache);
  }
  const cached = cache.get(stopSemiDiameterMm);
  if (cached) return cached;
  const result = Object.freeze(computeApertureMetrics(state, stopSemiDiameterMm));
  if (cache.size >= 16) cache.delete(cache.keys().next().value!);
  cache.set(stopSemiDiameterMm, result);
  return result;
}

/**
 * Solve the axial ray that passes the physical stop rim and the image-plane center.
 * W = 1/(2 n' |u'|) is explicitly paraxial, using the actual image-side cone instead of a thin-lens distance estimate.
 * Apertures elsewhere and pupil aberration are not included in this first-order measurement.
 */
function computeApertureMetrics(state: PreparedOpticalState, stopSemiDiameterMm: number): ApertureMetrics {
  const empty = (status: ApertureMetrics["status"]): ApertureMetrics => ({
    geometricFNumber: null,
    workingFNumber: null,
    paraxialWorkingFNumber: null,
    objectDistanceMm: Infinity,
    entrancePupilSemiDiameterMm: null,
    exitPupilSemiDiameterMm: null,
    status,
    clippedSurfaceIndices: null,
  });
  if (state.lens.flags.isFoldedOptics) return empty("unsupported");
  if (!Number.isFinite(stopSemiDiameterMm) || stopSemiDiameterMm <= 0) return empty("degenerate");
  const stopAt = state.lens.stop.surfaceIndex;
  const a = traceParaxialSurfaces2(state.surfaces, 1, 0, { skipLastTransfer: true });
  const b = traceParaxialSurfaces2(state.surfaces, 0, 1, { skipLastTransfer: true });
  const stopA = traceParaxialSurfaces2(state.surfaces, 1, 0, { stopAt });
  const stopB = traceParaxialSurfaces2(state.surfaces, 0, 1, { stopAt });
  const gap = state.imgZ - state.z[state.z.length - 1];
  const imageA = a.y + gap * a.u;
  const imageB = b.y + gap * b.u;
  const determinant = stopA.y * imageB - stopB.y * imageA;
  const ep = Math.abs(stopSemiDiameterMm / stopA.y);
  const efl = calculatedFocalLengthForState(state);
  const geometricFNumber = efl !== null && Number.isFinite(ep) && ep > 0 ? Math.abs(efl) / (2 * ep) : null;
  const imageSlope = (stopSemiDiameterMm * (a.u * imageB - b.u * imageA)) / determinant;
  const numericalAperture = Math.abs(a.n * imageSlope);
  const paraxialWorkingFNumber =
    Number.isFinite(numericalAperture) && numericalAperture > 1e-12 ? 1 / (2 * numericalAperture) : null;
  // Invert the first-surface -> stop matrix to image the stop through the rear optics.
  const stopDet = stopA.y * stopB.u - stopB.y * stopA.u;
  const chiefY = (-a.y * stopB.y + b.y * stopA.y) / stopDet;
  const chiefU = (-a.u * stopB.y + b.u * stopA.y) / stopDet;
  const marginalY = (a.y * stopB.u - b.y * stopA.u) / stopDet;
  const marginalU = (a.u * stopB.u - b.u * stopA.u) / stopDet;
  const xp = Math.abs(stopSemiDiameterMm * (marginalY - (chiefY / chiefU) * marginalU));
  const real = realWorkingApertureForState(state, stopSemiDiameterMm);
  return {
    geometricFNumber,
    workingFNumber: real.fNumber,
    paraxialWorkingFNumber,
    objectDistanceMm: real.objectDistanceMm,
    exitPupilSemiDiameterMm: Number.isFinite(xp) && xp > 0 ? xp : null,
    entrancePupilSemiDiameterMm: Number.isFinite(ep) && ep > 0 ? ep : null,
    status: real.status,
    clippedSurfaceIndices: real.clippedSurfaceIndices,
  };
}
