/**
 * Chromatic analysis adapter — prepared-state wrappers and ray-trace summaries.
 */

import {
  computeChromaticAnalysis,
  computeLateralColorCurve,
  computeLongitudinalChromaticFocus,
  type ChromaticAnalysisOptions,
} from "../chromatic/analysis.js";
import { computeChromaticSpread2, traceRayChromatic2 } from "../chromatic/chromaticTrace.js";
import { CHROMATIC_CHANNEL_ORDER } from "../chromatic/channels.js";
import {
  computeProjectionAwareOffAxisFieldGeometry,
  isOffAxisVectorFieldGeometry,
  type ProjectionAwareOffAxisFieldGeometry,
} from "../aberration/offAxis.js";
import { offsetVectorFieldRay2 as offsetVectorFieldRay } from "../field/fieldGeometry.js";
import type { FieldGeometryState } from "../optics.js";
import { traceChiefRelativeSkewRayChromatic } from "../rayTrace.js";
import { traceSkewRayVectorChromatic2 } from "../trace/rayAdapters.js";
import { thick } from "../layout.js";
import type { ChromaticChannel, ChromaticSpread, ChromaticSpreadByAxis, RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import type { FieldCurvatureFieldResult, FieldCurvatureResult } from "../aberration/types.js";
import { zPosForPreparedAnalysis2 } from "./preparedStateAdapters.js";

export type {
  ChromaticAnalysisOptions,
  ChromaticAnalysisResult,
  LateralColorChannelSample,
  LateralColorCurveResult,
  LateralColorFieldSample,
  LongitudinalChromaticFocusResult,
  LongitudinalChromaticFocusSample,
} from "../chromatic/analysis.js";

const DEFAULT_ON_AXIS_FRACTIONS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;
const DEFAULT_OFF_AXIS_FRACTIONS = [0.75, 0.5, 0.25, -0.75, -0.5, -0.25] as const;

export interface ChromaticRayTraceAnalysisOptions2 {
  channels?: readonly ChromaticChannel[];
  onAxisFractions?: readonly number[];
  offAxisFractions?: readonly number[];
  offAxisFieldFraction?: number;
}

export interface ChromaticRayTraceAnalysis2 {
  channels: readonly ChromaticChannel[];
  spreads: ChromaticSpreadByAxis;
  offAxisFieldAngleDeg: number;
  onAxisAttemptedRayCount: number;
  offAxisAttemptedRayCount: number;
}

export interface ChromaticChannelSpan2 {
  minChannel: ChromaticChannel;
  maxChannel: ChromaticChannel;
  minShiftMm: number;
  maxShiftMm: number;
  spreadMm: number;
  spreadUm: number;
}

export interface ChromaticFieldFocusFieldSummary2 {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  tangential: ChromaticChannelSpan2;
  sagittal: ChromaticChannelSpan2;
  maxFocusSpreadMm: number;
  maxFocusSpreadUm: number;
}

export interface ChromaticFieldFocusSummary2 {
  source: "curve" | "fields";
  fields: ChromaticFieldFocusFieldSummary2[];
  usableFieldCount: number;
  maxTangentialSpreadMm: number;
  maxSagittalSpreadMm: number;
  maxFocusSpreadMm: number;
  maxFocusFieldFraction: number;
  edgeFocusSpreadMm: number | null;
}

function zPosFromState(state: PreparedOpticalState): number[] {
  return zPosForPreparedAnalysis2(state);
}

function normalizeChannels(channels: readonly ChromaticChannel[] | undefined): ChromaticChannel[] {
  const requested = new Set(channels ?? CHROMATIC_CHANNEL_ORDER);
  return CHROMATIC_CHANNEL_ORDER.filter((channel) => requested.has(channel));
}

function normalizeSignedFractions(fractions: readonly number[] | undefined, fallback: readonly number[]): number[] {
  const values = (fractions ?? fallback)
    .filter((fraction) => isFinite(fraction) && Math.abs(fraction) > 1e-9)
    .map((fraction) => Math.max(-1, Math.min(1, fraction)));
  return Array.from(new Set(values)).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });
}

function currentImagePlaneZ(
  L: RuntimeLens,
  zPos: readonly number[],
  focusT: number,
  zoomT: number,
  aberrationT: number,
): number | null {
  if (L.N < 1) return null;
  if (L.isFoldedOptics) return isFinite(L.imagePlane.z) ? L.imagePlane.z : null;
  const imagePlaneZ = zPos[L.N - 1] + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  return isFinite(imagePlaneZ) ? imagePlaneZ : null;
}

function traceOffAxisChromaticMarginal(
  geometry: ProjectionAwareOffAxisFieldGeometry,
  fraction: number,
  channel: ChromaticChannel,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT: number,
): { y: number; u: number; clipped: boolean } {
  if (isOffAxisVectorFieldGeometry(geometry)) {
    const ray = traceSkewRayVectorChromatic2(
      offsetVectorFieldRay(geometry.vectorLaunch, 0, fraction * currentEPSD),
      geometry.zPos,
      currentPhysStopSD,
      true,
      L,
      channel,
      focusT,
      zoomT,
      aberrationT,
    );
    return { y: ray.y, u: ray.uy, clipped: ray.clipped };
  }

  const ray = traceChiefRelativeSkewRayChromatic(
    0,
    fraction,
    geometry.yChief,
    geometry.uField,
    currentEPSD,
    focusT,
    zoomT,
    currentPhysStopSD,
    true,
    L,
    channel,
    aberrationT,
  );
  return { y: ray.y, u: ray.uy, clipped: ray.clipped };
}

function computeSpreadFromFractions(
  fractions: readonly number[],
  channels: readonly ChromaticChannel[],
  imagePlaneZ: number,
  lastSurfaceZ: number,
  axis: "onAxis" | "offAxis",
  trace: (fraction: number, channel: ChromaticChannel) => { y: number; u: number; clipped: boolean },
): { spread: ChromaticSpread | null; attemptedRayCount: number } {
  let attemptedRayCount = 0;

  for (const fraction of fractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};

    for (const channel of channels) {
      attemptedRayCount++;
      const ray = trace(fraction, channel);
      if (!ray.clipped && Math.abs(ray.u) > 1e-15) {
        marginalRays[channel] = { y: ray.y, u: ray.u, clipped: false };
      }
    }

    const validChannels = Object.keys(marginalRays) as ChromaticChannel[];
    if (validChannels.length >= 2) {
      return {
        spread: {
          ...computeChromaticSpread2(marginalRays, imagePlaneZ, lastSurfaceZ),
          axis,
          fraction,
          channels: validChannels,
        },
        attemptedRayCount,
      };
    }
  }

  return { spread: null, attemptedRayCount };
}

export function computeChromaticRayTraceAnalysis2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  options: ChromaticRayTraceAnalysisOptions2 = {},
): ChromaticRayTraceAnalysis2 {
  const channels = normalizeChannels(options.channels);
  const empty = {
    channels,
    spreads: { onAxis: null, offAxis: null },
    offAxisFieldAngleDeg: 0,
    onAxisAttemptedRayCount: 0,
    offAxisAttemptedRayCount: 0,
  };
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return empty;

  const imagePlaneZ = currentImagePlaneZ(L, zPos, focusT, zoomT, aberrationT);
  if (imagePlaneZ === null) return empty;
  const lastSurfaceZ = zPos[L.N - 1];
  const onAxis = computeSpreadFromFractions(
    normalizeSignedFractions(options.onAxisFractions, DEFAULT_ON_AXIS_FRACTIONS),
    channels,
    imagePlaneZ,
    lastSurfaceZ,
    "onAxis",
    (fraction, channel) => {
      const ray = traceRayChromatic2(
        fraction * currentEPSD,
        0,
        zPos,
        focusT,
        zoomT,
        currentPhysStopSD,
        true,
        L,
        channel,
        aberrationT,
      );
      return { y: ray.y, u: ray.u, clipped: ray.clipped };
    },
  );

  const offAxisFieldFraction = Math.max(0, Math.min(1, options.offAxisFieldFraction ?? L.offAxisFieldFrac ?? 0.7));
  const geometry = computeProjectionAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    offAxisFieldFraction,
    undefined,
    aberrationT,
  );
  const offAxis =
    geometry === null
      ? { spread: null, attemptedRayCount: 0 }
      : computeSpreadFromFractions(
          normalizeSignedFractions(options.offAxisFractions, DEFAULT_OFF_AXIS_FRACTIONS),
          channels,
          imagePlaneZ,
          lastSurfaceZ,
          "offAxis",
          (fraction, channel) =>
            traceOffAxisChromaticMarginal(
              geometry,
              fraction,
              channel,
              L,
              focusT,
              zoomT,
              currentEPSD,
              currentPhysStopSD,
              aberrationT,
            ),
        );

  return {
    channels,
    spreads: { onAxis: onAxis.spread, offAxis: offAxis.spread },
    offAxisFieldAngleDeg: geometry?.fieldAngleDeg ?? 0,
    onAxisAttemptedRayCount: onAxis.attemptedRayCount,
    offAxisAttemptedRayCount: offAxis.attemptedRayCount,
  };
}

export function computeChromaticRayTraceAnalysisForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  options?: ChromaticRayTraceAnalysisOptions2,
): ChromaticRayTraceAnalysis2 {
  return computeChromaticRayTraceAnalysis2(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
    options,
  );
}

function channelSpan(
  shifts: NonNullable<FieldCurvatureFieldResult["chromaticFieldShifts"]>,
  direction: "tangentialShiftMm" | "sagittalShiftMm",
): ChromaticChannelSpan2 {
  const sorted = [...shifts].sort((a, b) => a[direction] - b[direction]);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const spreadMm = max[direction] - min[direction];
  return {
    minChannel: min.channel,
    maxChannel: max.channel,
    minShiftMm: min[direction],
    maxShiftMm: max[direction],
    spreadMm,
    spreadUm: spreadMm * 1000,
  };
}

function chromaticFieldSummary(field: FieldCurvatureFieldResult): ChromaticFieldFocusFieldSummary2 | null {
  const shifts = field.chromaticFieldShifts?.filter(
    (shift) => isFinite(shift.tangentialShiftMm) && isFinite(shift.sagittalShiftMm),
  );
  if (!field.usable || !shifts || shifts.length < 2) return null;
  const tangential = channelSpan(shifts, "tangentialShiftMm");
  const sagittal = channelSpan(shifts, "sagittalShiftMm");
  const maxFocusSpreadMm = Math.max(tangential.spreadMm, sagittal.spreadMm);
  return {
    fieldFraction: field.fieldFraction,
    label: field.label,
    fieldAngleDeg: field.fieldAngleDeg,
    tangential,
    sagittal,
    maxFocusSpreadMm,
    maxFocusSpreadUm: maxFocusSpreadMm * 1000,
  };
}

export function summarizeChromaticFieldFocus2(result: FieldCurvatureResult | null): ChromaticFieldFocusSummary2 | null {
  if (result === null) return null;

  const curveSummaries = result.curveFields
    .map(chromaticFieldSummary)
    .filter((field): field is ChromaticFieldFocusFieldSummary2 => field !== null);
  const fieldSummaries = result.fields
    .map(chromaticFieldSummary)
    .filter((field): field is ChromaticFieldFocusFieldSummary2 => field !== null);
  const source: ChromaticFieldFocusSummary2["source"] = curveSummaries.length > 0 ? "curve" : "fields";
  const fields = source === "curve" ? curveSummaries : fieldSummaries;
  if (fields.length === 0) return null;

  const maxFocusField = fields.reduce((best, field) => (field.maxFocusSpreadMm > best.maxFocusSpreadMm ? field : best));
  const edgeFocusSpreadMm =
    fieldSummaries.length > 0 ? fieldSummaries[fieldSummaries.length - 1].maxFocusSpreadMm : null;

  return {
    source,
    fields,
    usableFieldCount: fields.length,
    maxTangentialSpreadMm: Math.max(...fields.map((field) => field.tangential.spreadMm)),
    maxSagittalSpreadMm: Math.max(...fields.map((field) => field.sagittal.spreadMm)),
    maxFocusSpreadMm: maxFocusField.maxFocusSpreadMm,
    maxFocusFieldFraction: maxFocusField.fieldFraction,
    edgeFocusSpreadMm,
  };
}

/**
 * Compatibility wrapper for combined chromatic analysis.
 *
 * @param args - same arguments as `computeChromaticAnalysis`
 * @returns longitudinal focus plus lateral color summaries
 */
export function computeChromaticAnalysis2(...args: Parameters<typeof computeChromaticAnalysis>) {
  return computeChromaticAnalysis(...args);
}

/** Compatibility wrapper for on-axis longitudinal chromatic focus. */
export function computeLongitudinalChromaticFocus2(...args: Parameters<typeof computeLongitudinalChromaticFocus>) {
  return computeLongitudinalChromaticFocus(...args);
}

/** Compatibility wrapper for off-axis lateral color curves. */
export function computeLateralColorCurve2(...args: Parameters<typeof computeLateralColorCurve>) {
  return computeLateralColorCurve(...args);
}

/**
 * Compute combined chromatic analysis for a prepared state.
 *
 * @param state - prepared optical state for the current sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry for the same state
 * @param options - optional channel and field/fraction sampling controls
 * @returns longitudinal focus plus lateral color summaries
 */
export function computeChromaticAnalysisForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  options?: ChromaticAnalysisOptions,
) {
  return computeChromaticAnalysis(
    state.lens.runtime,
    zPosFromState(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    state.aberrationT,
    fieldGeometry,
    options,
  );
}
