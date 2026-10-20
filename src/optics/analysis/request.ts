/**
 * Analysis requests snapshot current controls outside lens construction.
 *
 * Prepared geometry supplies identity; a bounded control history keeps requests stable
 * across drawer renders so analysis families can adopt this contract independently.
 */

import type { ChromaticChannel } from "../../types/optics.js";
import { CHROMATIC_CHANNEL_ORDER } from "../chromatic/channels.js";
import type { FieldGeometryState } from "../optics.js";
import type { PerspectivePose } from "../perspective/pose.js";
import type { PerspectiveTraceContext } from "../perspective/trace.js";
import type { TraceCapture } from "../trace/types.js";
import type { CompiledLens, PreparedGeometry } from "../types.js";
import type { AnalysisQuality, AnalysisSamplingOptions } from "./analysisQuality.js";

/** Compatibility inputs from current drawer and prepared-state adapters, in mm. */
export interface AnalysisRequestParams {
  preparedState: PreparedGeometry;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  analysisQuality?: AnalysisQuality;
  sampling?: AnalysisSamplingOptions;
  perspectiveTraceContext?: PerspectiveTraceContext | null;
}

/** Immutable inputs shared by the lazy context and, incrementally, analysis families. */
export interface AnalysisRequest {
  readonly preparedGeometry: PreparedGeometry;
  readonly dynamicEFL: number;
  readonly aperture: Readonly<{
    entrancePupilSemiDiameterMm: number;
    stopSemiDiameterMm: number;
  }>;
  readonly channels: readonly ChromaticChannel[];
  readonly fieldGeometry: Readonly<FieldGeometryState> | null;
  readonly pose: PerspectivePose | null;
  readonly perspectiveTraceContext: PerspectiveTraceContext | null;
  readonly analysisQuality: AnalysisQuality;
  readonly sampling: Readonly<AnalysisSamplingOptions>;
  /** Existing adapters retain their capture behavior until their family migrates. */
  readonly capture: TraceCapture;
}

// Requests keep lazy contexts and their results alive through CONTEXT_BY_REQUEST.
// Keep only a short render history, rather than the much larger geometry history:
// two entries preserve adjacent interactive/settled rerenders without retaining a control sweep.
const REQUEST_CACHE_LIMIT = 2;
const REQUEST_LENS_CACHE_LIMIT = 2;
const REQUESTS_BY_LENS = new Map<CompiledLens, AnalysisRequest[]>();

/**
 * Snapshot aperture, fields and sampling for one prepared geometry without tracing.
 *
 * Array and field values are copied so caller mutation cannot change a pending job.
 * Geometry and perspective tracing remain shared immutable identities, including their
 * owned solve caches. Channels and capture describe the existing adapter defaults.
 *
 * @param params - current prepared controls, physical aperture in mm and optional pose
 * @returns frozen request, reused for identical inputs while in the bounded LRU
 */
export function createAnalysisRequest(params: AnalysisRequestParams): AnalysisRequest {
  const { preparedState, perspectiveTraceContext = null } = params;
  assertPerspectiveContextMatchesPreparedState(preparedState, perspectiveTraceContext);
  const lens = preparedState.lens;
  let requests = REQUESTS_BY_LENS.get(lens);
  if (!requests) {
    requests = [];
    REQUESTS_BY_LENS.set(lens, requests);
    if (REQUESTS_BY_LENS.size > REQUEST_LENS_CACHE_LIMIT) {
      REQUESTS_BY_LENS.delete(REQUESTS_BY_LENS.keys().next().value!);
    }
  } else {
    REQUESTS_BY_LENS.delete(lens);
    REQUESTS_BY_LENS.set(lens, requests);
  }
  for (let i = requests.length - 1; i >= 0; i--) {
    const request = requests[i];
    if (
      request.preparedGeometry === preparedState &&
      request.perspectiveTraceContext === perspectiveTraceContext &&
      Object.is(request.dynamicEFL, params.dynamicEFL) &&
      Object.is(request.aperture.entrancePupilSemiDiameterMm, params.currentEPSD) &&
      Object.is(request.aperture.stopSemiDiameterMm, params.currentPhysStopSD) &&
      request.analysisQuality === (params.analysisQuality ?? "settled") &&
      equalFields(request.fieldGeometry, params.fieldGeometry ?? null) &&
      equalSampling(request.sampling, params.sampling ?? {})
    ) {
      requests.splice(i, 1);
      requests.push(request);
      return request;
    }
  }
  const sampling = Object.freeze(
    Object.fromEntries(
      Object.entries(params.sampling ?? {})
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, Array.isArray(value) ? Object.freeze([...value]) : value]),
    ),
  );
  const request: AnalysisRequest = Object.freeze({
    preparedGeometry: preparedState,
    dynamicEFL: params.dynamicEFL,
    aperture: Object.freeze({
      entrancePupilSemiDiameterMm: params.currentEPSD,
      stopSemiDiameterMm: params.currentPhysStopSD,
    }),
    channels: CHROMATIC_CHANNEL_ORDER,
    fieldGeometry: params.fieldGeometry ? Object.freeze({ ...params.fieldGeometry }) : null,
    perspectiveTraceContext,
    pose: perspectiveTraceContext?.pose ?? null,
    analysisQuality: params.analysisQuality ?? "settled",
    sampling,
    capture: "diagnostics",
  });
  requests.push(request);
  if (requests.length > REQUEST_CACHE_LIMIT) requests.shift();
  return request;
}

function equalFields(a: Readonly<FieldGeometryState> | null, b: FieldGeometryState | null): boolean {
  return (
    a === b ||
    (a !== null &&
      b !== null &&
      Object.is(a.halfFieldDeg, b.halfFieldDeg) &&
      Object.is(a.yRatio, b.yRatio) &&
      Object.is(a.b, b.b) &&
      Object.is(a.epRatio, b.epRatio))
  );
}

function equalSampling(a: Readonly<AnalysisSamplingOptions>, b: AnalysisSamplingOptions): boolean {
  const keys = Object.keys(b).filter((key) => b[key as keyof AnalysisSamplingOptions] !== undefined);
  if (Object.keys(a).length !== keys.length) return false;
  return keys.every((key) => {
    const first = a[key as keyof AnalysisSamplingOptions];
    const second = b[key as keyof AnalysisSamplingOptions];
    return (
      Object.is(first, second) ||
      (Array.isArray(first) &&
        Array.isArray(second) &&
        first.length === second.length &&
        first.every((value, index) => Object.is(value, second[index])))
    );
  });
}

function assertPerspectiveContextMatchesPreparedState(
  preparedState: PreparedGeometry,
  perspectiveTraceContext: PerspectiveTraceContext | null,
): void {
  if (!perspectiveTraceContext) return;
  const perspectiveState = perspectiveTraceContext.state;
  if (
    perspectiveState.cacheKey !== preparedState.cacheKey ||
    perspectiveState.lens.key !== preparedState.lens.key ||
    perspectiveState.focusT !== preparedState.focusT ||
    perspectiveState.zoomT !== preparedState.zoomT ||
    perspectiveState.aberrationT !== preparedState.aberrationT
  ) {
    throw new Error(
      "PerspectiveTraceContext must describe the same prepared lens and slider state as the analysis context",
    );
  }
}
