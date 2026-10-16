/** Build-time optical and display constants from compiled prescription records, without a runtime view. */

import type { CompiledPrescription, CompiledSurface, LensConstants, Ray3 } from "../types.js";
import { buildStateSurfaces, sumSurfaceThicknesses, zoomIndexToT } from "../prescription/compileControls.js";
import { FLAT_R_THRESHOLD } from "../geometry/surfaceProfile.js";
import {
  traceParaxialSurfaces2 as traceSurfacesParaxial,
  type ParaxialTraceOptions as ParaxialSurfaceTraceOptions,
} from "../math/paraxial.js";
import { createTraceGeometry } from "../trace/geometry.js";
import { traceGeometryToStop } from "../trace/stopTrace.js";
import type { EngineTraceResult, TraceCapture, TraceGeometry, TraceOptions } from "../trace/types.js";
import { directionFromMeridionalSlope } from "../math/vector.js";
import { compileSurfaces } from "../prescription/surfaces.js";
import { resolvedImagePlaneToPlane3 } from "../prescription/interactions.js";
import {
  fisheyeProjectionFocalLengthAtZoom2 as fisheyeProjectionFocalLengthAtZoom,
  fisheyeProjectionMaxTraceFieldAtZoom2 as fisheyeProjectionMaxTraceFieldAtZoom,
  isFisheyeProjection2 as isFisheyeProjection,
  rectilinearProjectionMaxTraceField2 as rectilinearProjectionMaxTraceField,
  TRACING_SAFETY_FACTOR,
} from "../field/projection.js";
import type {
  LensData,
  SurfaceData,
  AsphericCoefficients,
  EntrancePupil,
  LensProjectionConfig,
  ResolvedImagePlane,
  ResolvedOpticalPath,
  ParaxialTraceResult,
} from "../../types/optics.js";
import { ENABLE_UNIFORM_SCALING } from "../../utils/featureFlags.js";
import { diffractivePetzvalContribution } from "../math/diffractivePhase.js";

/**
 * Paraxial ray trace through a surface array.
 *
 * Applies the paraxial refraction formula at each surface:
 *   u' = (n·u − y·(n'−n)/R) / n'   (for curved surfaces)
 *   u' = (n·u) / n'                  (for flat surfaces, |R| > FLAT_R_THRESHOLD)
 * then transfers: y += d·u
 *
 * Used internally by buildLens() to derive EFL, entrance pupil, and
 * vignetting-limited field angle.
 *
 * @param S    — surface array (each with R, nd, d properties)
 * @param y0   — initial ray height (mm)
 * @param u0   — initial ray slope (angle in paraxial approx)
 * @param opts — optional { stopAt, skipLastTransfer, recordHeights }
 * @returns { y, u, n, heights }
 */
function paraxialTrace(
  S: SurfaceData[],
  y0: number,
  u0: number,
  opts: ParaxialSurfaceTraceOptions = {},
): ParaxialTraceResult {
  return traceSurfacesParaxial(S, y0, u0, opts);
}

/** Result of a real ray trace to an intermediate surface. */
interface RealTraceToStopResult {
  y: number;
  u: number; /* slope = tan(U) at the target surface */
}

/**
 * Real (exact Snell's law) ray trace from the first surface to a target surface.
 *
 * Unlike paraxialTrace which uses the linear u' = (n·u − y·φ)/n' formula,
 * this applies exact Snell's law with aspheric surface normals — matching
 * the production tracer in trace/. Returns both the ray
 * height and slope at the target surface.
 *
 * Used to compute corrected entrance pupil SD and z-position that account
 * for spherical aberration and aspheric deviations from the paraxial model.
 *
 * @returns { y, u } at the target surface, or { y: NaN, u: NaN } on TIR
 */
function realTraceToStopFull(geometry: TraceGeometry, y0: number, u0: number, stopIdx: number): RealTraceToStopResult {
  const result = traceSurfaceStackReal(geometry, y0, u0, { stopAt: stopIdx });
  return { y: result.y, u: result.u };
}

/**
 * Real (exact Snell's law) ray trace from the first surface to the stop.
 * Convenience wrapper that returns only the ray height.
 *
 * @returns ray height at the stop surface, or NaN on TIR
 */
function realTraceStopHeight(geometry: TraceGeometry, y0: number, u0: number, stopIdx: number): number {
  return realTraceToStopFull(geometry, y0, u0, stopIdx).y;
}

/**
 * Trace authored surfaces to a stop before a runtime lens exists.
 *
 * @param S - physical surfaces, in mm
 * @param asphByIdx - coefficients indexed by physical surface
 * @param y0 - launch height at the first vertex plane, in mm
 * @param u0 - meridional launch slope
 * @param stopIdx - target surface index, excluded from refraction
 * @returns height at the stop plane, or NaN on a failed trace
 */
function realTraceToStop(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  u0: number,
  stopIdx: number,
): number {
  const opticalPath: ResolvedOpticalPath = {
    mode: "sequential",
    surfaceOrder: null,
    surfaceLabels: null,
    maxInteractions: S.length + 1,
  };
  return realTraceStopHeight(buildTraceGeometry(S, asphByIdx, stopIdx, opticalPath), y0, u0, stopIdx);
}

/** Result of a real ray trace through the full system with per-surface heights. */
interface RealTraceFullResult extends RealTraceToStopResult {
  heights: number[];
  clipped: boolean; /* true if |y| exceeded any surface SD */
}

interface PupilBasisRay {
  y: number;
  u: number;
  z: number;
}

interface PupilGeometryFallback {
  xpZRelLastSurf: number;
  xpSD: number;
}

interface PupilGeometryResult {
  epZRelStop: number;
  xpZRelLastSurf: number;
  xpSD: number;
}

function finitePupilBasisRay(ray: PupilBasisRay): boolean {
  return isFinite(ray.y) && isFinite(ray.u) && isFinite(ray.z);
}

function pupilBasisAtZ(ray: PupilBasisRay, scale: number, z: number): { y: number; u: number } {
  return {
    y: (ray.y + ray.u * (z - ray.z)) / scale,
    u: ray.u / scale,
  };
}

function computePupilGeometry({
  realYRatio,
  realB,
  margFull,
  chiefFull,
  epSD,
  delta,
  zStop,
  zLast,
  fallback,
}: {
  realYRatio: number;
  realB: number;
  margFull: PupilBasisRay;
  chiefFull: PupilBasisRay;
  epSD: number;
  delta: number;
  zStop: number;
  zLast: number;
  fallback: PupilGeometryFallback;
}): PupilGeometryResult {
  const epZRelStop = Math.abs(realYRatio) > 1e-9 ? realB / realYRatio - zStop : 0;
  if (!finitePupilBasisRay(margFull) || !finitePupilBasisRay(chiefFull) || !isFinite(zLast)) {
    return { epZRelStop, ...fallback };
  }

  const marginal = pupilBasisAtZ(margFull, delta, zLast);
  const chief = pupilBasisAtZ(chiefFull, delta, zLast);
  const xpY = realYRatio * chief.y - realB * marginal.y;
  const xpU = realYRatio * chief.u - realB * marginal.u;
  const xpZRelLastSurf = Math.abs(xpU) > 1e-9 ? -xpY / xpU : Infinity;
  const xpSD = isFinite(xpZRelLastSurf) ? Math.abs(marginal.y + marginal.u * xpZRelLastSurf) * epSD : Infinity;
  return { epZRelStop, xpZRelLastSurf, xpSD };
}

function foldedPupilBasisRay(result: EngineTraceResult): PupilBasisRay {
  if (result.failureReason !== null || result.status === "clipped") return { y: NaN, u: NaN, z: NaN };
  const lastHit = [...result.hits].reverse().find((hit) => !hit.fallback && hit.failureReason === null);
  if (!lastHit) return { y: NaN, u: NaN, z: NaN };
  const direction = lastHit.outgoingDirection ?? result.terminalDirection;
  if (Math.abs(direction[2]) <= 1e-12) return { y: NaN, u: NaN, z: NaN };
  return {
    y: lastHit.point[1],
    u: direction[1] / direction[2],
    z: lastHit.point[2],
  };
}

/**
 * Real (exact Snell's law) ray trace through the full system, stopping
 * after refraction at the last surface (before the final transfer / BFL).
 * Returns { y, u } at the last surface — the same convention as
 * paraxialTrace with skipLastTransfer=true.
 *
 * @returns { y, u } at the last surface, or { y: NaN, u: NaN } on TIR
 */
function realTraceFullSystem(geometry: TraceGeometry, y0: number, u0: number): RealTraceToStopResult {
  const r = realTraceFullSystemDetailed(geometry, y0, u0);
  return { y: r.y, u: r.u };
}

/**
 * Real (exact Snell's law) ray trace through the full system with
 * per-surface height recording and vignetting clip detection.
 * Used for exit pupil computation and half-field refinement.
 */
function realTraceFullSystemDetailed(geometry: TraceGeometry, y0: number, u0: number): RealTraceFullResult {
  const result = traceSurfaceStackReal(geometry, y0, u0, {
    skipLastTransfer: true,
    recordHeights: true,
    checkSemiDiameter: true,
  });
  return {
    y: result.y,
    u: result.u,
    heights: result.heights || [],
    clipped: result.clipped,
  };
}

function traceSurfaceStackReal(
  geometry: TraceGeometry,
  y0: number,
  u0: number,
  options: TraceOptions,
): RealTraceFullResult {
  const result = traceBuildRay(geometry, y0, u0, { ...options, capture: "terminal" });
  const failed = result.failureReason !== null;
  return {
    y: failed ? NaN : result.y,
    u: failed ? NaN : result.uy,
    clipped: result.status !== "ok",
    heights: result.heights ? [...result.heights] : [],
  };
}

/* Construction cannot prepare a RuntimeLens: these traces derive the constants it would need. */
function buildTraceGeometry(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  stopIdx: number,
  opticalPath: ResolvedOpticalPath,
  imagePlane?: ResolvedImagePlane,
  compiled?: readonly CompiledSurface[],
): TraceGeometry {
  const z = [0];
  for (let i = 0; i < S.length - 1; i++) z.push(z[i] + S[i].d);
  const surfaces = compiled
    ? compiled.map((surface, i) => Object.freeze({ ...surface, d: S[i].d, sd: S[i].sd }))
    : compileSurfaces(S, S, asphByIdx);
  return createTraceGeometry({
    surfaces: Object.freeze(surfaces.map((surface, i) => Object.freeze({ ...surface, base: surface, z: z[i] }))),
    z: Object.freeze(z),
    stopSurfaceIndex: stopIdx,
    imagePlane: resolvedImagePlaneToPlane3(
      imagePlane ?? { z: z[S.length - 1] + S[S.length - 1].d, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
    ),
    pathPlan: opticalPath,
    isFoldedOptics: imagePlane !== undefined,
  });
}

function buildRayInput(geometry: TraceGeometry, y0: number, u0: number, lead: number): Ray3 {
  return {
    origin: [0, y0 - u0 * lead, geometry.z[0] - lead],
    direction: directionFromMeridionalSlope(u0) ?? [NaN, NaN, NaN],
  };
}

function traceBuildRay<C extends TraceCapture = "diagnostics">(
  geometry: TraceGeometry,
  y0: number,
  u0: number,
  options: TraceOptions<C> = {},
): EngineTraceResult<C> {
  /* Preserve the first-vertex slope launch used to derive the existing constants. Folded basis rays start there. */
  const first = geometry.surfaces[0];
  const lead = geometry.traversal.kind === "generalized" ? 0 : Math.max(1, Math.abs(first.profile.sag(first.sd)) + 1);
  const input = buildRayInput(geometry, y0, u0, lead);
  const traverse = options.stopAt === undefined ? geometry.traversal.full : geometry.traversal.partial;
  return traverse(geometry, input, options);
}

function firstFiniteScalar(value: number | [number, number] | number[] | undefined): number | null {
  if (typeof value === "number" && isFinite(value)) return value;
  if (Array.isArray(value) && typeof value[0] === "number" && isFinite(value[0])) return value[0];
  return null;
}

function assertRectilinearFocalReference(data: LensData, projection: LensProjectionConfig, EFL: number): void {
  if (projection.kind !== "rectilinear") return;
  const designFocalLength = firstFiniteScalar(data.focalLengthDesign);
  if (designFocalLength === null || designFocalLength <= 0) return;

  const ratio = EFL / designFocalLength;
  if (ratio < 0.8 || ratio > 1.25) {
    throw new Error(
      `Lens "${data.key}": computed Gaussian EFL ${EFL.toFixed(3)} mm differs from focalLengthDesign ${designFocalLength.toFixed(3)} mm by ${(Math.abs(ratio - 1) * 100).toFixed(1)}%. ` +
        `If this is an intentional fisheye/projection constant, declare data.projection so aperture and analysis use the correct reference.`,
    );
  }
}

function normalizeImagePlaneNormal(normal: { z: number; y: number } | undefined): { z: number; y: number } {
  const candidate = normal ?? { z: 1, y: 0 };
  const length = Math.hypot(candidate.z, candidate.y);
  if (!isFinite(length) || length <= 1e-12) return { z: 1, y: 0 };
  return { z: candidate.z / length, y: candidate.y / length };
}

function resolveImagePlane(data: LensData, fallbackZ: number): ResolvedImagePlane {
  const configured = data.opticalPath?.imagePlane;
  return {
    z: configured?.z ?? fallbackZ,
    y: configured?.y ?? 0,
    normal: normalizeImagePlaneNormal(configured?.normal),
    label: configured?.label ?? "IMG",
  };
}

/** Calculate once on unpublished compiled records; only local surface copies are sized. */
export function computeLensConstants(lens: CompiledPrescription): LensConstants {
  const data = lens.data;
  const S = lens.surfaces.map((surface, i) => ({
    ...data.surfaces[i],
    R: surface.R,
    d: surface.d,
    nd: surface.nd,
    sd: surface.sd,
  }));
  const N = S.length;
  const projection = lens.projection.config;
  const isZoom = lens.variables.isZoom;
  const asphByIdx = lens.indices.asphByIdx;
  const varByIdx = lens.variables.bySurfaceIndex;
  const focusPositions = lens.variables.focusPositions;
  const stopIdx = lens.stop.surfaceIndex;
  const opticalPath = {
    ...lens.opticalPath,
    surfaceOrder: lens.opticalPath.surfaceOrder ? [...lens.opticalPath.surfaceOrder] : null,
    surfaceLabels: lens.opticalPath.surfaceLabels ? [...lens.opticalPath.surfaceLabels] : null,
  };
  const buildGeometry = (
    S: SurfaceData[],
    _aspheres: Record<number, AsphericCoefficients>,
    stopIdx: number,
    opticalPath: ResolvedOpticalPath,
    imagePlane?: ResolvedImagePlane,
  ) => buildTraceGeometry(S, asphByIdx, stopIdx, opticalPath, imagePlane, lens.surfaces);

  const preserveAuthoredStopSD = S[stopIdx]?.stopPlacement === "inside-element";

  if (lens.flags.isFoldedOptics) {
    const z = [0];
    for (let i = 0; i < N - 1; i++) z.push(z[i] + S[i].d);
    const fallbackImageZ = z[N - 1] + S[N - 1].d;
    const imagePlane = resolveImagePlane(data, fallbackImageZ);
    const zMin = Math.min(imagePlane.z, ...z);
    const zMax = Math.max(imagePlane.z, ...z);
    const axialExtent = Math.max(1, zMax - zMin);
    const maxSD = Math.max(...S.map((s) => s.sd));
    const referenceFocalLength =
      firstFiniteScalar(data.focalLengthDesign) ?? firstFiniteScalar(data.focalLengthMarketing) ?? axialExtent;
    const baseNomFno = Array.isArray(data.nominalFno) ? data.nominalFno[0] : data.nominalFno!;
    const stopPhysSD = S[stopIdx].sd;
    const nominalEPSD = referenceFocalLength / (2 * baseNomFno);
    const fallbackYRatio = stopPhysSD > 0 ? stopPhysSD / Math.max(nominalEPSD, 1e-12) : 1;
    const foldedGeometry = buildGeometry(S, asphByIdx, stopIdx, opticalPath, imagePlane);
    let EP: EntrancePupil = { epSD: nominalEPSD, yRatio: fallbackYRatio };
    let B = 0;
    let epZRelStop = 0;
    let xpZRelLastSurf = 0;
    let xpSD = EP.epSD;
    const realEpDelta = 1e-4;
    const foldedMarginalStop = traceGeometryToStop(
      foldedGeometry,
      buildRayInput(foldedGeometry, realEpDelta, 0, 0),
      stopIdx,
    );
    const foldedChiefStop = traceGeometryToStop(
      foldedGeometry,
      buildRayInput(foldedGeometry, 0, realEpDelta, 0),
      stopIdx,
    );
    if (
      foldedMarginalStop.found &&
      foldedChiefStop.found &&
      isFinite(foldedMarginalStop.y) &&
      isFinite(foldedChiefStop.y) &&
      Math.abs(foldedMarginalStop.y) > 1e-15
    ) {
      const realYRatio = foldedMarginalStop.y / realEpDelta;
      const realB = foldedChiefStop.y / realEpDelta;
      const foldedMarginalFull = foldedPupilBasisRay(traceBuildRay(foldedGeometry, realEpDelta, 0));
      const foldedChiefFull = foldedPupilBasisRay(traceBuildRay(foldedGeometry, 0, realEpDelta));
      const foldedLastZ = finitePupilBasisRay(foldedMarginalFull)
        ? foldedMarginalFull.z
        : finitePupilBasisRay(foldedChiefFull)
          ? foldedChiefFull.z
          : z[N - 1];
      const pupilGeometry = computePupilGeometry({
        realYRatio,
        realB,
        margFull: foldedMarginalFull,
        chiefFull: foldedChiefFull,
        epSD: EP.epSD,
        delta: realEpDelta,
        zStop: foldedMarginalStop.point?.[2] ?? z[stopIdx] ?? 0,
        zLast: foldedLastZ,
        fallback: {
          xpZRelLastSurf: 0,
          xpSD: EP.epSD,
        },
      });
      EP = { epSD: nominalEPSD, yRatio: realYRatio };
      B = realB;
      epZRelStop = pupilGeometry.epZRelStop;
      xpZRelLastSurf = pupilGeometry.xpZRelLastSurf;
      xpSD = pupilGeometry.xpSD;
    }
    const FOPEN = baseNomFno;
    const halfField =
      rectilinearProjectionMaxTraceField(projection) ??
      Math.max(1, (Math.atan(Math.max(1, maxSD) / Math.max(referenceFocalLength, 1)) * 180) / Math.PI);
    const tracingHalfField = halfField;
    const totalTrack = axialExtent;

    const { svgW, svgH, scFill, yScFill, maxRimAngleDeg, gapSagFrac } = data;
    const SC = (svgW * scFill) / totalTrack;
    let YSC: number;
    let effectiveSvgH: number;
    if (ENABLE_UNIFORM_SCALING) {
      YSC = SC;
      const verticalMargin = 1.45 * maxSD;
      effectiveSvgH = Math.round(Math.max(2 * verticalMargin * SC + 20, 290));
    } else {
      YSC = (svgH * yScFill) / maxSD;
      const maxAR = data.maxAspectRatio;
      if (maxAR > 0 && YSC / SC > maxAR) YSC = SC * maxAR;
      effectiveSvgH = svgH;
    }
    const maxRimSin = Math.sin((maxRimAngleDeg * Math.PI) / 180);
    // eslint-disable-next-line no-restricted-syntax -- rim-slope tangent for SVG element outline geometry, not a field launch
    const maxRimTan = Math.tan((maxRimAngleDeg * Math.PI) / 180);
    const gridPitch = totalTrack / 15;
    const gridCount = Math.ceil(svgW / (gridPitch * SC)) + 4;
    const lyDoublet = -1.1 * maxSD;
    const lyImgLine = 1.133 * maxSD;
    const lyImgLabel = -1.233 * maxSD;
    const lyElemNum = 1.2 * maxSD;
    const lyVdBadge = 1.285 * maxSD;
    const lyGroup = 1.37 * maxSD;
    const lyStoPad = 0.12 * maxSD;
    const rayHeights = data.rayFractions.map((f: number) => f * EP.epSD);
    const rayLead = totalTrack * data.rayLeadFrac;
    const bladeStubFrac = 0.1;
    const prevSD = stopIdx > 0 ? S[stopIdx - 1].sd : stopPhysSD;
    const nextSD = stopIdx < N - 1 ? S[stopIdx + 1].sd : stopPhysSD;
    const stopHousingSD = Math.max(stopPhysSD, Math.min(prevSD, nextSD));
    const offAxisFieldDeg = halfField * data.offAxisFieldFrac;
    const offAxisHeights = data.offAxisFractions.map((f: number) => f * EP.epSD);

    return Object.freeze({
      imagePlane,
      isFoldedOptics: true,
      stopPhysSD,
      EFL: referenceFocalLength,
      apertureReferenceFocalLength: referenceFocalLength,
      EP,
      B,
      FOPEN,
      halfField,
      tracingHalfField,
      petzvalSum: 0,
      totalTrack,
      maxSD,
      svgW: data.svgW,
      svgH: effectiveSvgH,
      SC,
      YSC,
      maxRimSin,
      maxRimTan,
      gapSagFrac,
      gridPitch,
      gridCount,
      lyDoublet,
      lyImgLine,
      lyImgLabel,
      lyElemNum,
      lyVdBadge,
      lyGroup,
      lyStoPad,
      lensShiftFrac: data.lensShiftFrac,
      rayFractions: data.rayFractions,
      rayHeights,
      rayLead,
      bladeStubFrac,
      stopHousingSD,
      offAxisFieldDeg,
      offAxisFieldFrac: data.offAxisFieldFrac,
      offAxisFractions: data.offAxisFractions,
      offAxisHeights,
      closeFocusM: data.closeFocusM,
      zoomCloseFocusM: data.zoomCloseFocusM,
      focusStep: data.focusStep,
      focusPositions,
      focusDescription: data.focusDescription,
      maxFstop: data.maxFstop,
      apertureStep: data.apertureStep,
      fstopSeries: data.fstopSeries,
      isZoom: false,
      zoomPositions: null,
      zoomEFLs: null,
      zoomEPs: null,
      zoomHalfFields: null,
      zoomTracingHalfFields: null,
      zoomYRatios: null,
      zoomBs: null,
      epZRelStop,
      xpZRelLastSurf,
      xpSD,
      zoomEpZRelStops: null,
      zoomXpZRelLastSurfs: null,
      zoomXpSDs: null,
      zoomFOPENs: null,
      zoomStep: data.zoomStep || 0.004,
      zoomLabels: null,
    }) as LensConstants;
  }

  /* ── Derive stop SD and entrance pupil from nominal f-number ──
   *  nominalFno is a required field (validated).  We back-compute:
   *    epSD = aperture-reference focal length / (2·Fno)
   *  where the reference is Gaussian EFL for rectilinear lenses and an
   *  explicit projection focal length for non-rectilinear fisheyes.
   *  then trace a real (Snell's law) ray at that height to the stop to get
   *  the physical stop SD.  This accounts for aspherics and higher-order
   *  aberrations that the paraxial model ignores — without it, real rays
   *  overshoot the stop on lenses with strong aspherics (e.g. Nikon 60mm).
   *  Embedded glass stops preserve their authored SD because that surface is
   *  also part of the drawn physical element geometry.
   *  Falls back to the paraxial yRatio if the real trace hits TIR. */
  const { y: nomYRatio } = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
  const { u: nomUe } = paraxialTrace(S, 1, 0, { skipLastTransfer: true });
  const nomEFL = -1.0 / nomUe;
  assertRectilinearFocalReference(data, projection, nomEFL);
  const apertureReferenceFocalLength = fisheyeProjectionFocalLengthAtZoom(projection, 0) ?? nomEFL;
  const baseNomFno = Array.isArray(data.nominalFno) ? data.nominalFno[0] : data.nominalFno!;
  const nominalEPSD = apertureReferenceFocalLength / (2 * baseNomFno);
  let geometry = buildGeometry(S, asphByIdx, stopIdx, opticalPath);
  const nomRealY = realTraceStopHeight(geometry, nominalEPSD, 0, stopIdx);
  if (data.zoomStopSemiDiameters) {
    S[stopIdx].sd = data.zoomStopSemiDiameters[0];
  } else if (!preserveAuthoredStopSD) {
    S[stopIdx].sd = isFinite(nomRealY) && Math.abs(nomRealY) > 1e-15 ? nomRealY : nominalEPSD * nomYRatio;
  }

  geometry = buildGeometry(S, asphByIdx, stopIdx, opticalPath);

  /* ── Optical constants ──
   *  EFL: trace a unit-height marginal ray (y=1, u=0) and read off the
   *  exit slope u; EFL = −1/u (standard paraxial formula). */
  const eflTrace = paraxialTrace(S, 1, 0, { skipLastTransfer: true });
  const EFL = -1.0 / eflTrace.u;
  if (!isFinite(EFL))
    throw new Error(
      `Lens "${data.key}": EFL is not finite (paraxial u=${eflTrace.u}) — system may be afocal or surface data is invalid`,
    );

  /* Entrance pupil: trace marginal ray to the stop; the height ratio
   * epTrace.y maps between entrance pupil SD and physical stop SD.
   * EP.epSD = stop SD / yRatio = entrance pupil semi-diameter in object space. */
  const epTrace = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
  if (Math.abs(epTrace.y) < 1e-15)
    throw new Error(`Lens "${data.key}": Entrance pupil trace y≈0 at stop — cannot compute entrance pupil`);
  const EP: EntrancePupil = { epSD: S[stopIdx].sd / epTrace.y, yRatio: epTrace.y };

  /* Override EP with the nominal value.  The paraxial EP.epSD (= stopSD /
   * paraxialYRatio) is inconsistent because the stop SD was set via real trace
   * while yRatio is paraxial.  The correct EP is nominalEPSD = EFL / (2·Fno). */
  EP.epSD = nominalEPSD;

  /* B = chief ray height at stop (for vignetting computation below) */
  const B = paraxialTrace(S, 0, 1, { stopAt: stopIdx }).y;

  /* Entrance pupil z-position — use real (Snell's law) two-ray decomposition.
   * Trace a small marginal ray (y=δ, u=0) and a small chief ray (y=0, u=δ)
   * through the front group to the stop using exact refraction.  The real
   * yRatio and B are the ray heights at the stop (normalized by δ), so
   * epZ = realB / realYRatio gives the z where the chief ray crosses the axis.
   * Falls back to paraxial if the real traces hit TIR. */
  const zStopBaseline = sumSurfaceThicknesses(S, stopIdx);
  const realEpDelta = 1e-4;
  const realMarginal = realTraceToStopFull(geometry, realEpDelta, 0, stopIdx);
  const realChief = realTraceToStopFull(geometry, 0, realEpDelta, stopIdx);
  const realYRatio = isFinite(realMarginal.y) ? realMarginal.y / realEpDelta : epTrace.y;
  const realB = isFinite(realChief.y) ? realChief.y / realEpDelta : B;

  /* Exit pupil: use real (Snell's law) two-ray decomposition through the
   * full system.  Trace small marginal (y=δ, u=0) and chief (y=0, u=δ)
   * rays with exact refraction, then combine to find the chief ray that
   * passes through the stop center.  Back-project from the last surface
   * to find XP position and size.  Falls back to paraxial on TIR. */
  const realMargFull = realTraceFullSystem(geometry, realEpDelta, 0);
  const realChiefFull = realTraceFullSystem(geometry, 0, realEpDelta);
  const chiefFull = paraxialTrace(S, 0, 1, { skipLastTransfer: true });
  const xpNumer = -(epTrace.y * chiefFull.y - eflTrace.y * B);
  const xpDenom = epTrace.y * chiefFull.u - eflTrace.u * B;
  const fallbackXpZRelLastSurf = Math.abs(xpDenom) > 1e-9 ? xpNumer / xpDenom : Infinity;
  const lastSurfaceZ = sumSurfaceThicknesses(S, N - 1);
  const { epZRelStop, xpZRelLastSurf, xpSD } = computePupilGeometry({
    realYRatio,
    realB,
    margFull: { ...realMargFull, z: lastSurfaceZ },
    chiefFull: { ...realChiefFull, z: lastSurfaceZ },
    epSD: EP.epSD,
    delta: realEpDelta,
    zStop: zStopBaseline,
    zLast: lastSurfaceZ,
    fallback: {
      xpZRelLastSurf: fallbackXpZRelLastSurf,
      xpSD: isFinite(fallbackXpZRelLastSurf)
        ? Math.abs(eflTrace.y + eflTrace.u * fallbackXpZRelLastSurf) * EP.epSD
        : Infinity,
    },
  });

  const stopPhysSD = S[stopIdx].sd;
  const FOPEN = apertureReferenceFocalLength / (2 * EP.epSD); /* wide-open f-number */
  if (!isFinite(FOPEN))
    throw new Error(
      `Lens "${data.key}": Wide-open f-number is not finite (apertureReferenceFocalLength=${apertureReferenceFocalLength}, epSD=${EP.epSD})`,
    );

  /* ── Half-field angle (vignetting-limited) ──
   *  Find the maximum chief-ray angle (field angle) before any surface
   *  clips the ray.  Uses two basis rays (marginal hA and chief hB) to
   *  build a linear model of ray height vs field angle at each surface.
   *  The minimum sd/|coefficient| across all clipping surfaces gives the
   *  vignetting-limited half-field angle (generated rear-plate rims never clip).
   */
  const hA = paraxialTrace(S, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const hB = paraxialTrace(S, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
  if (Math.abs(hA[stopIdx]) < 1e-15)
    throw new Error(`Lens "${data.key}": Chief-ray height ratio undefined — marginal ray height at stop ≈ 0`);
  const r = hB[stopIdx] / hA[stopIdx];
  let minU = Infinity;
  for (let i = 0; i < N; i++) {
    if (i === stopIdx || S[i].clips === false) continue;
    const c = Math.abs(hB[i] - r * hA[i]);
    if (c > 1e-8) {
      const uMax = S[i].sd / c;
      if (uMax < minU) minU = uMax;
    }
  }
  const halfFieldParaxial = (Math.atan(minU) * 180) / Math.PI;
  if (!isFinite(halfFieldParaxial))
    throw new Error(`Lens "${data.key}": Half-field angle is not finite — vignetting computation failed`);

  /* Refine half-field with real (Snell's law) chief ray vignetting check.
   * The paraxial two-ray model can overestimate the field angle for strongly
   * curved or aspheric front groups.  Bisect to find the real clipping angle.
   * Uses the real EP position (realB/realYRatio) for chief ray entry.
   *
   * Rectilinear lenses use the bisected value as both `halfField` and
   * `tracingHalfField` (no safety margin applied — preserves pre-PR-8 behavior
   * exactly). Fisheye lenses use the declared `maxTraceFieldDeg` for
   * `halfField` (which can be much wider than slope-launch chief rays can
   * traverse) and the bisected value × `TRACING_SAFETY_FACTOR` for
   * `tracingHalfField`, so off-axis ray bundles in the diagram still render
   * in a safe zone where rays actually reach the image plane. */
  const fisheye = isFisheyeProjection(projection);
  const epRatio = Math.abs(realYRatio) > 1e-9 ? realB / realYRatio : B / epTrace.y;
  const testChief = (deg: number): boolean => {
    // eslint-disable-next-line no-restricted-syntax -- slope-launch vignetting bisection (see comment above); feeds tracingHalfField only, diagram field launch still goes through projection.ts
    const uTest = -Math.tan((deg * Math.PI) / 180);
    const yIn = -epRatio * uTest;
    const result = realTraceFullSystemDetailed(geometry, yIn, uTest);
    return isFinite(result.y) && !result.clipped;
  };
  let halfFieldBisected = halfFieldParaxial;
  if (!testChief(halfFieldParaxial)) {
    /* Paraxial overestimates — bisect downward */
    let lo = 0,
      hi = halfFieldParaxial;
    for (let iter = 0; iter < 40; iter++) {
      const mid = (lo + hi) / 2;
      if (testChief(mid)) lo = mid;
      else hi = mid;
    }
    halfFieldBisected = lo;
  }
  /* If the paraxial field passes the real check, keep it (conservative). */

  const halfField = fisheye
    ? (fisheyeProjectionMaxTraceFieldAtZoom(projection, 0) ?? halfFieldParaxial)
    : (rectilinearProjectionMaxTraceField(projection) ?? halfFieldBisected);
  const tracingHalfField = fisheye ? halfFieldBisected * TRACING_SAFETY_FACTOR : halfFieldBisected;

  /* ── Petzval sum ──
   * P = Σ (n'−n) / (n'·n·R) over all refracting surfaces.
   * Contribution is zero for flat surfaces (|R| ≥ FLAT_R_THRESHOLD). */
  let petzvalSum = 0;
  let nPetz = 1.0;
  for (let i = 0; i < N; i++) {
    const { R, nd, diffractive } = S[i];
    const nNext = nd === 1.0 ? 1.0 : nd;
    if (nNext !== nPetz && Math.abs(R) < FLAT_R_THRESHOLD) {
      petzvalSum += (nNext - nPetz) / (nNext * nPetz * R);
    }
    petzvalSum += diffractivePetzvalContribution(diffractive, nPetz, nNext);
    nPetz = nNext;
  }

  /* ── Layout geometry ──
   *  SC  = horizontal scale (pixels per mm along optical axis)
   *  YSC = vertical scale (pixels per mm perpendicular to axis)
   *  maxAspectRatio caps YSC/SC to prevent extremely tall, narrow lenses
   *  from dominating the viewport.
   *  For zoom lenses, use the maximum total track across all positions to
   *  ensure the SVG viewport never clips at any zoom setting.
   */
  let totalTrack: number;
  if (isZoom) {
    const nz = data.zoomPositions!.length;
    let maxTrack = 0;
    for (let zi = 0; zi < nz; zi++) {
      let track = 0;
      for (let i = 0; i < N; i++) {
        const v = varByIdx[i];
        track += v ? (v as [number, number][])[zi][0] : S[i].d;
      }
      maxTrack = Math.max(maxTrack, track);
    }
    totalTrack = maxTrack;
  } else {
    const z = [0];
    for (let i = 0; i < N - 1; i++) z.push(z[i] + S[i].d);
    totalTrack = z[N - 1] + S[N - 1].d;
  }
  const imagePlane = resolveImagePlane(data, totalTrack);
  /* Synthetic rear plates carry generous non-clipping rims; keep them out of the diagram's vertical scale. */
  const maxSD = Math.max(...S.filter((s) => !s.synthetic).map((s) => s.sd));

  const { svgW, svgH, scFill, yScFill, maxRimAngleDeg, gapSagFrac } = data;
  const SC = (svgW * scFill) / totalTrack;
  let YSC: number;
  let effectiveSvgH: number;
  if (ENABLE_UNIFORM_SCALING) {
    YSC = SC;
    const verticalMargin = 1.45 * maxSD;
    effectiveSvgH = Math.round(Math.max(2 * verticalMargin * SC + 20, 290));
  } else {
    YSC = (svgH * yScFill) / maxSD;
    const maxAR = data.maxAspectRatio;
    if (maxAR > 0 && YSC / SC > maxAR) YSC = SC * maxAR;
    effectiveSvgH = svgH;
  }
  const maxRimSin = Math.sin((maxRimAngleDeg * Math.PI) / 180);
  // eslint-disable-next-line no-restricted-syntax -- rim-slope tangent for SVG element outline geometry, not a field launch
  const maxRimTan = Math.tan((maxRimAngleDeg * Math.PI) / 180);
  const gridPitch = totalTrack / 15;
  const gridCount = Math.ceil(svgW / (gridPitch * SC)) + 4;
  const lyDoublet = -1.1 * maxSD;
  const lyImgLine = 1.133 * maxSD;
  const lyImgLabel = -1.233 * maxSD;
  const lyElemNum = 1.2 * maxSD;
  const lyVdBadge = 1.285 * maxSD;
  const lyGroup = 1.37 * maxSD;
  const lyStoPad = 0.12 * maxSD;

  const rayHeights = data.rayFractions.map((f: number) => f * EP.epSD);
  const rayLead = totalTrack * data.rayLeadFrac;
  const maxFrac = Math.max(...data.rayFractions.map(Math.abs));
  const outerRealY = realTraceStopHeight(geometry, maxFrac * nominalEPSD, 0, stopIdx);
  const outerRatio = isFinite(outerRealY) && Math.abs(stopPhysSD) > 1e-15 ? Math.abs(outerRealY) / stopPhysSD : maxFrac;
  const bladeStubFrac = Math.max(0.02, 1 - outerRatio);
  const prevSD = stopIdx > 0 ? S[stopIdx - 1].sd : stopPhysSD;
  const nextSD = stopIdx < N - 1 ? S[stopIdx + 1].sd : stopPhysSD;
  const stopHousingSD = Math.max(stopPhysSD, Math.min(prevSD, nextSD));
  const offAxisFieldDeg = halfField * data.offAxisFieldFrac;
  const offAxisHeights = data.offAxisFractions.map((f: number) => f * EP.epSD);

  /* ── Zoom-lens derived constants ──
   *  Pre-compute optical properties at each zoom position by constructing
   *  a temporary surface array with the infinity-focus thickness for that
   *  zoom index, then running paraxial traces.
   *  - zoomEFLs:      EFL at each position (EFL = −1/u)
   *  - zoomEPs:       entrance pupil SD at each position
   *  - zoomHalfFields: vignetting-limited half-field angle at each position
   *  - zoomYRatios:   marginal ray height ratio at stop (for EP scaling)
   *  - zoomBs:        chief ray height at stop (for off-axis ray placement)
   */
  /* A zoom's wide-open iris follows its station f-numbers unless the file publishes a schedule, declares one fixed
   * iris, or the stop is a surface of drawn glass. */
  const zoomStopSDs: number[] | null =
    isZoom && (data.zoomStopSemiDiameters || (data.zoomApertureModel !== "fixed-iris" && !preserveAuthoredStopSD))
      ? []
      : null;
  let zoomEFLs: number[] | null = null,
    zoomEPs: number[] | null = null,
    zoomHalfFields: number[] | null = null,
    zoomTracingHalfFields: number[] | null = null;
  let zoomYRatios: number[] | null = null,
    zoomBs: number[] | null = null;
  let zoomEpZRelStops: number[] | null = null,
    zoomXpZRelLastSurfs: number[] | null = null,
    zoomXpSDs: number[] | null = null;
  if (isZoom) {
    const nz = data.zoomPositions!.length;
    zoomEFLs = [];
    zoomEPs = [];
    zoomHalfFields = [];
    zoomTracingHalfFields = [];
    zoomYRatios = [];
    zoomBs = [];
    zoomEpZRelStops = [];
    zoomXpZRelLastSurfs = [];
    zoomXpSDs = [];
    for (let zi = 0; zi < nz; zi++) {
      const tmpS = buildStateSurfaces(S, varByIdx, true, 0, zoomIndexToT(zi, nz), {}, 0, focusPositions);

      /* EFL — capture y and u at last surface for exit pupil computation */
      const zMargLast = paraxialTrace(tmpS, 1, 0, { skipLastTransfer: true });
      zoomEFLs.push(-1.0 / zMargLast.u);

      /* Entrance pupil and yRatio — use real trace for EP, same as baseline */
      const epT = paraxialTrace(tmpS, 1, 0, { stopAt: stopIdx });
      const zEfl = -1.0 / zMargLast.u;
      const zNomFno = Array.isArray(data.nominalFno) ? data.nominalFno[zi] : data.nominalFno!;
      const zZoomT = zoomIndexToT(zi, nz);
      const zApertureReferenceFocalLength = fisheyeProjectionFocalLengthAtZoom(projection, zZoomT) ?? zEfl;
      const zNomEP = zApertureReferenceFocalLength / (2 * zNomFno);
      let stationGeometry = buildGeometry(tmpS, asphByIdx, stopIdx, opticalPath);
      const zRealY = realTraceStopHeight(stationGeometry, zNomEP, 0, stopIdx);
      const stationStopSD =
        data.zoomStopSemiDiameters?.[zi] ??
        Math.abs(isFinite(zRealY) && Math.abs(zRealY) > 1e-15 ? zRealY : zNomEP * epT.y);
      if (data.zoomStopSemiDiameters) tmpS[stopIdx].sd = stationStopSD;
      else if (isFinite(zRealY) && Math.abs(zRealY) > 1e-15) tmpS[stopIdx].sd = zRealY;
      stationGeometry = buildGeometry(tmpS, asphByIdx, stopIdx, opticalPath);
      zoomStopSDs?.push(stationStopSD);
      zoomEPs.push(zNomEP);
      zoomYRatios.push(epT.y);

      /* Chief ray height at stop */
      const zBValue = paraxialTrace(tmpS, 0, 1, { stopAt: stopIdx }).y;
      zoomBs.push(zBValue);

      /* Pupil positions at this zoom position — real (Snell's law) traces */
      const zStopBaselineZ = sumSurfaceThicknesses(tmpS, stopIdx);
      const zRealMarg = realTraceToStopFull(stationGeometry, realEpDelta, 0, stopIdx);
      const zRealChief = realTraceToStopFull(stationGeometry, 0, realEpDelta, stopIdx);
      const zRealYRatio = isFinite(zRealMarg.y) ? zRealMarg.y / realEpDelta : epT.y;
      const zRealB = isFinite(zRealChief.y) ? zRealChief.y / realEpDelta : zBValue;
      const zEpRelStop = Math.abs(zRealYRatio) > 1e-9 ? zRealB / zRealYRatio - zStopBaselineZ : 0;
      zoomEpZRelStops.push(zEpRelStop);

      /* Exit pupil — real full-system two-ray decomposition */
      const zRealMargFull = realTraceFullSystem(stationGeometry, realEpDelta, 0);
      const zRealChiefFull = realTraceFullSystem(stationGeometry, 0, realEpDelta);
      if (isFinite(zRealMargFull.y) && isFinite(zRealChiefFull.y)) {
        const zmY = zRealMargFull.y / realEpDelta,
          zmU = zRealMargFull.u / realEpDelta;
        const zcY = zRealChiefFull.y / realEpDelta,
          zcU = zRealChiefFull.u / realEpDelta;
        const zXpY = zRealYRatio * zcY - zRealB * zmY;
        const zXpU = zRealYRatio * zcU - zRealB * zmU;
        const zXpRelLast = Math.abs(zXpU) > 1e-9 ? -zXpY / zXpU : Infinity;
        zoomXpZRelLastSurfs.push(zXpRelLast);
        zoomXpSDs.push(isFinite(zXpRelLast) ? Math.abs(zmY + zmU * zXpRelLast) * zNomEP : Infinity);
      } else {
        /* Fallback: paraxial exit pupil */
        const zChiefFull = paraxialTrace(tmpS, 0, 1, { skipLastTransfer: true });
        const zXpNumer = -(epT.y * zChiefFull.y - zMargLast.y * zBValue);
        const zXpDenom = epT.y * zChiefFull.u - zMargLast.u * zBValue;
        const zXpRelLast = Math.abs(zXpDenom) > 1e-9 ? zXpNumer / zXpDenom : Infinity;
        zoomXpZRelLastSurfs.push(zXpRelLast);
        zoomXpSDs.push(isFinite(zXpRelLast) ? Math.abs(zMargLast.y + zMargLast.u * zXpRelLast) * zNomEP : Infinity);
      }

      /* Half-field (vignetting-limited) — paraxial estimate refined with real ray */
      const zA = paraxialTrace(tmpS, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
      const zB2 = paraxialTrace(tmpS, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
      const zr = Math.abs(zA[stopIdx]) > 1e-15 ? zB2[stopIdx] / zA[stopIdx] : r;
      let zMinU = Infinity;
      for (let j = 0; j < N; j++) {
        if (j === stopIdx || tmpS[j].clips === false) continue;
        const coeff = Math.abs(zB2[j] - zr * zA[j]);
        if (coeff > 1e-8) {
          const uMax = tmpS[j].sd / coeff;
          if (uMax < zMinU) zMinU = uMax;
        }
      }
      const zHalfFieldParaxial = (Math.atan(zMinU) * 180) / Math.PI;
      /* Always run the slope-launch bisection (its result feeds
       * zoomTracingHalfFields, the diagram's ray-rendering safe zone).
       * Fisheyes use the declared maxTraceFieldDeg for zHalfField; rectilinear
       * uses the bisected value. */
      const zEpRatio = Math.abs(zRealYRatio) > 1e-9 ? zRealB / zRealYRatio : zBValue / epT.y;
      const zTestChief = (deg: number): boolean => {
        // eslint-disable-next-line no-restricted-syntax -- slope-launch vignetting bisection (see comment above); feeds zoomTracingHalfFields only, diagram field launch still goes through projection.ts
        const uTest = -Math.tan((deg * Math.PI) / 180);
        const yIn = -zEpRatio * uTest;
        const result = realTraceFullSystemDetailed(stationGeometry, yIn, uTest);
        return isFinite(result.y) && !result.clipped;
      };
      let zHalfFieldBisected = zHalfFieldParaxial;
      if (isFinite(zHalfFieldParaxial) && !zTestChief(zHalfFieldParaxial)) {
        let lo = 0,
          hi = zHalfFieldParaxial;
        for (let iter = 0; iter < 40; iter++) {
          const mid = (lo + hi) / 2;
          if (zTestChief(mid)) lo = mid;
          else hi = mid;
        }
        zHalfFieldBisected = lo;
      }
      const zFisheye = isFisheyeProjection(projection);
      const zHalfField = zFisheye
        ? (fisheyeProjectionMaxTraceFieldAtZoom(projection, zZoomT) ?? zHalfFieldParaxial)
        : (rectilinearProjectionMaxTraceField(projection) ?? zHalfFieldBisected);
      zoomHalfFields.push(zHalfField);
      zoomTracingHalfFields.push(zFisheye ? zHalfFieldBisected * TRACING_SAFETY_FACTOR : zHalfFieldBisected);
    }
  }

  /* ── Zoom-dependent wide-open f-numbers ──
   * Compute FOPEN at each zoom position from pre-computed EFL and EP arrays.
   * For variable-aperture zooms (nominalFno is an array), the per-position
   * FOPENs differ; L.FOPEN is set to the widest (minimum) value so the
   * aperture slider range covers the full available range. */
  let zoomFOPENs: number[] | null = null;
  if (isZoom && zoomEFLs && zoomEPs) {
    const epValues = zoomEPs;
    zoomFOPENs = zoomEFLs.map((efl, i) => {
      const zoomT = zoomIndexToT(i, zoomEFLs.length);
      const referenceFocalLength = fisheyeProjectionFocalLengthAtZoom(projection, zoomT) ?? efl;
      return referenceFocalLength / (2 * epValues[i]);
    });
  }

  return Object.freeze({
    imagePlane,
    isFoldedOptics: false,
    stopPhysSD,
    EFL,
    apertureReferenceFocalLength,
    EP,
    B,
    FOPEN: zoomFOPENs ? Math.min(...zoomFOPENs) : FOPEN,
    halfField,
    tracingHalfField,
    petzvalSum,
    totalTrack,
    maxSD,
    svgW: data.svgW,
    svgH: effectiveSvgH,
    SC,
    YSC,
    maxRimSin,
    maxRimTan,
    gapSagFrac,
    gridPitch,
    gridCount,
    lyDoublet,
    lyImgLine,
    lyImgLabel,
    lyElemNum,
    lyVdBadge,
    lyGroup,
    lyStoPad,
    lensShiftFrac: data.lensShiftFrac,
    rayFractions: data.rayFractions,
    rayHeights,
    rayLead,
    bladeStubFrac,
    stopHousingSD,
    offAxisFieldDeg,
    offAxisFieldFrac: data.offAxisFieldFrac,
    offAxisFractions: data.offAxisFractions,
    offAxisHeights,
    closeFocusM: data.closeFocusM,
    zoomCloseFocusM: data.zoomCloseFocusM,
    focusStep: data.focusStep,
    focusPositions,
    focusDescription: data.focusDescription,
    maxFstop: data.maxFstop,
    apertureStep: data.apertureStep,
    fstopSeries: data.fstopSeries,
    isZoom,
    zoomPositions: isZoom ? data.zoomPositions! : null,
    zoomEFLs,
    zoomEPs,
    zoomHalfFields,
    zoomTracingHalfFields,
    zoomYRatios,
    zoomBs,
    epZRelStop,
    xpZRelLastSurf,
    xpSD,
    zoomEpZRelStops,
    zoomXpZRelLastSurfs,
    zoomXpSDs,
    zoomFOPENs,
    zoomStopSDs,
    zoomStep: data.zoomStep || 0.004,
    zoomLabels: data.zoomLabels || null,
  }) as LensConstants;
}

export { paraxialTrace, realTraceToStop };
