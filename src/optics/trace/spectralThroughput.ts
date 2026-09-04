/** Direct-path unpolarized intensity losses; never a coating or production-glass inference. */
import type { ChromaticChannel, ThroughputModel, TraceThroughputResult } from "../../types/optics.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../constants.js";
import { dot } from "../math/vector.js";
import { sampleSurfaceThroughput } from "../math/spectralSampling.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { bulkAbsorptionCoefficient } from "./bulkAbsorption.js";
import { mediumAfterEncounter } from "./encounterMedia.js";
import { traceEngineRay2 } from "./rayAdapters.js";
import type { EngineTraceResult } from "./types.js";
import { sensorPointForTrace } from "./utils.js";

/** Exact dielectric Fresnel power reflectance averaged over s and p polarization. */
export function dielectricReflectance(nFrom: number, nTo: number, cosine: number): number {
  const c = Math.min(1, Math.abs(cosine));
  if (![nFrom, nTo, c].every(Number.isFinite) || nFrom <= 0 || nTo <= 0) return NaN;
  if (nFrom === nTo) return 0;
  const sin2 = (nFrom / nTo) ** 2 * (1 - c * c);
  if (sin2 >= 1) return 1;
  const ct = Math.sqrt(1 - sin2);
  const rs = (nFrom * c - nTo * ct) / (nFrom * c + nTo * ct);
  const rp = (nTo * c - nFrom * ct) / (nTo * c + nFrom * ct);
  return (rs * rs + rp * rp) / 2;
}

/** Reduce a trace made at the supplied spectral channel. Unknown data never becomes measured unity. */
export function throughputForTrace(
  state: PreparedOpticalState,
  trace: EngineTraceResult,
  model: ThroughputModel,
  channel: ChromaticChannel = "G",
): TraceThroughputResult {
  const wavelengthNm = CHROMATIC_CHANNEL_WAVELENGTH_NM[channel];
  const empty = (status: TraceThroughputResult["status"], value: number | null): TraceThroughputResult => ({
    model,
    wavelengthNm,
    status,
    transmission: value,
    knownTransmission: value,
    missingSurfaceIndexes: [],
    missingElementIds: [],
  });
  if (trace.failureReason === "totalInternalReflection" || trace.status === "clipped") return empty("blocked", 0);
  const sensorPoint = sensorPointForTrace(state, trace);
  if (!sensorPoint) return empty("failed", null);
  if (state.surfaces.some((s) => s.diffractive)) return empty("unsupported", null);
  if (model === "ideal") return empty("complete", 1);
  let medium: number | null = null;
  let n = 1;
  let previous: Vec3 = trace.input.origin;
  let transmission = 1;
  const missingSurfaces = new Set<number>();
  const missingElements = new Set<number>();
  const surfaces = state.lens.runtime.S;
  const attenuate = (point: Vec3) => {
    const length = Math.hypot(...point.map((v, i) => v - previous[i]));
    if (medium !== null && length > 0) {
      const elementId = surfaces[medium].elemId;
      const coefficient = bulkAbsorptionCoefficient(state.lens.runtime, elementId, wavelengthNm);
      if (coefficient == null) missingElements.add(elementId);
      else transmission *= Math.exp(-coefficient * length);
    }
    previous = point;
  };
  for (const hit of trace.hits) {
    attenuate(hit.point);
    const surface = state.surfaces[hit.surfaceIndex];
    if (!hit.incidentDirection || !Number.isFinite(n)) return empty("failed", null);
    const cosine = Math.min(1, Math.abs(dot(hit.incidentDirection, hit.normal)));
    const side = dot(hit.incidentDirection, hit.normal) >= 0 ? "front" : "rear";
    const nextMedium = mediumAfterEncounter(surfaces, hit, medium);
    const nextN = nextMedium === null ? 1 : state.lens.dispersion[nextMedium].indexAt(channel);
    const kind = surface.interaction.type === "reflect" ? "reflection" : "transmission";
    let factor: number | null = null;
    if (model === "uncoated") {
      // A metallic mirror cannot be described by the real dielectric indices.
      if (kind === "transmission") factor = 1 - dielectricReflectance(n, nextN, cosine);
    } else {
      const table = surface.source.opticalThroughput;
      if (table && table.kind === kind && (table.incidentSide === "both" || table.incidentSide === side)) {
        factor = sampleSurfaceThroughput(table, wavelengthNm, (Math.acos(cosine) * 180) / Math.PI);
      } else if (!table && kind === "transmission" && n === nextN) factor = 1;
    }
    if (factor === null) missingSurfaces.add(hit.surfaceIndex);
    else if (!Number.isFinite(factor) || factor < 0 || factor > 1) return empty("failed", null);
    else transmission *= factor;
    medium = nextMedium;
    n = nextN;
  }
  attenuate(sensorPoint);
  if (!Number.isFinite(transmission)) return empty("failed", null);
  const incomplete = missingSurfaces.size > 0 || (model === "authored" && missingElements.size > 0);
  return {
    model,
    wavelengthNm,
    status: incomplete ? "incomplete" : model === "uncoated" ? "assumed" : "complete",
    transmission: incomplete ? null : transmission,
    knownTransmission: transmission,
    missingSurfaceIndexes: [...missingSurfaces],
    missingElementIds: [...missingElements],
  };
}

/** Trace and reduce together so geometry and loss coefficients use the same wavelength. */
export function traceSpectralThroughput(
  state: PreparedOpticalState,
  ray: Ray3,
  stopSemiDiameterMm: number,
  model: ThroughputModel,
  channel: ChromaticChannel = "G",
) {
  const trace = traceEngineRay2(state, ray, {
    checkSemiDiameter: true,
    stopOnClip: true,
    stopSemiDiameter: stopSemiDiameterMm,
    wavelengthNm: CHROMATIC_CHANNEL_WAVELENGTH_NM[channel],
    indexAtSurface: (i, nd) => (nd === 1 ? 1 : state.lens.dispersion[i].indexAt(channel)),
  });
  return { trace, throughput: throughputForTrace(state, trace, model, channel) };
}
