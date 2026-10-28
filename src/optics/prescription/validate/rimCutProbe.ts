/**
 * Dense rim-cut probe — a brute-force check of the rim-cut beam rule, independent of its search.
 *
 * For each inferred rim cut (one without `rimCutDepthSource`), it traces a dense grid of launches through the lens
 * with its inferred cuts removed, as `validateRimCutBeams` does. The grid covers every zoom and focus state in steps of
 * the control step, through every station and keyframe, and fields out to the half field at the field step. A ray
 * belongs to the beam when it reaches the image through the wide-open stop and every clear aperture. It counts
 * against each cut whose surface it meets beyond the cut radius, whatever other cut it also crosses. Fields launch as
 * the rule launches them: collimated from the object plane, or from the source's finite object point at a keyframe
 * with a finite conjugate.
 *
 * Each state's furthest grid ray per cut is then refined: the field steps finely either side of it on a fine grid that
 * follows the beam (one that shrinks or vanishes is followed), and the beam's edge is bisected there. `npm run
 * audit:rim-cut-probe` prints the result.
 */

import { prepareRuntimeState } from "../../state/runtimeAdapters.js";
import {
  computeAnalysisFieldGeometryAtState,
  entrancePupilAtState,
  solveChiefRayForRuntimeLens,
} from "../../state/fieldAdapters.js";
import { tracingHalfFieldAtZoom } from "../../state/stationTables.js";
import { wideOpenStopAtZoom } from "../../state/apertureStop.js";
import { launchSurfaceForFieldDeg, projectionLaunchSlopeForField } from "../../field/projection.js";
import { prepareEngineTrace } from "../../trace/rayAdapters.js";
import { mirrorSymmetricAboutMeridian } from "../../trace/symmetry.js";
import { AIMED_PUPIL_RESIDUAL_TOLERANCE, aimedLaunchFrameRay } from "../../analysis/pupils/aimedPupil.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "../../analysis/mtf/mtfConjugates.js";
import { compileCanonicalUncached } from "../compileCanonical.js";
import { canonicalLensFromRuntime } from "../identity.js";
import { runtimeView } from "../runtimeView.js";
import type { PreparedOpticalState, Ray3 } from "../../types.js";
import type { FiniteConjugate, RuntimeLens } from "../../../types/optics.js";
import type { RimCutBeamPoint } from "./rimCutBeams.js";

/** Clearance the rule asks of an inferred cut: a floor in mm and a share of the cut radius. */
const MARGIN_MM = 0.05;
const MARGIN_FRACTION = 0.003;
/** Half-width of the launch grid around the chief launch, in entrance-pupil radii. */
const GRID_SPAN = 1.6;
/** Refinement: field steps either side of a state's best field, grid points across the cells around its best ray. */
const REFINE_FIELDS = 10;
const REFINE_GRID = 21;
/** Refinement: directions of the edge bisection, its tolerance in mm, and how far below a cut's best grid reach a
 *  state's best ray may be and still be refined, in mm. */
const EDGE_DIRECTIONS = 16;
const EDGE_TOLERANCE_MM = 1e-5;
const REFINE_WINDOW_MM = 1;
const SAME_CONTROL = 1e-9;

type Vec2 = readonly [number, number];

/** Grid density of the probe. */
export interface RimCutProbeOptions {
  /** Launch-grid points per side. */
  grid?: number;
  /** Field spacing in degrees. */
  fieldStep?: number;
  /** Step of the zoom and focus controls. */
  controlStep?: number;
}

/** The probe's findings for one inferred cut. */
export interface RimCutProbeCut {
  label: string;
  cutRadius: number;
  margin: number;
  /** Furthest grid ray at the surface, in mm, and where. */
  gridReach: number;
  gridAt: RimCutBeamPoint | null;
  /** Furthest ray once each state's best is refined, in mm, and where. */
  reach: number;
  at: RimCutBeamPoint | null;
  /** Grid rays the cut would clip, and grid rays within its margin of the cut radius. */
  clipped: number;
  withinMargin: number;
}

/** The probe's findings for one lens. */
export interface RimCutProbe {
  zoomStates: number;
  focusStates: number;
  /** Grid rays in the beams. */
  rays: number;
  cuts: RimCutProbeCut[];
  untraced: (RimCutBeamPoint & { reason: string })[];
}

/** One state of the uncut lens, wide open. */
interface ProbeState {
  zoomT: number;
  focusT: number;
  state: PreparedOpticalState;
  scale: number;
  halfFieldDeg: number;
  conjugate: FiniteConjugate | undefined;
  symmetric: boolean;
  /** Each cut's radius for a ray that reaches the image; null for one that is stopped. */
  radii: (ray: Ray3) => number[] | null;
}

/** A field's launch: the ray at launch coordinates, and the chief launch. */
interface ProbeLaunch {
  ray: (a: number, b: number) => Ray3;
  chief: Vec2;
}

/** A state's furthest grid ray for one cut. */
interface Candidate {
  s: ProbeState;
  fieldDeg: number;
  point: Vec2;
  radius: number;
  cell: number;
}

/**
 * Trace a dense grid of the wide-open beams through the lens without its inferred cuts, and report each cut's reach.
 *
 * @param L - built lens
 * @param options - grid density
 * @returns the reach and clipped-ray counts per inferred cut; empty for a lens without inferred cuts or a folded lens
 */
export function rimCutDenseProbe(L: RuntimeLens, options: RimCutProbeOptions = {}): RimCutProbe {
  const grid = options.grid ?? 41;
  const fieldStep = options.fieldStep ?? 0.5;
  const controlStep = options.controlStep ?? 0.05;
  const inferred = L.S.flatMap((surface, index) =>
    surface.rimCutDepthMm !== undefined && surface.rimCutDepthSource === undefined ? [index] : [],
  );
  if (L.isFoldedOptics || inferred.length === 0)
    return { zoomStates: 0, focusStates: 0, rays: 0, cuts: [], untraced: [] };

  const U = lensWithoutCuts(L, new Set(inferred.map((index) => L.S[index].label)));
  const base = prepareRuntimeState(L, 0, 0);
  const cuts: RimCutProbeCut[] = inferred.map((index) => {
    const cutRadius = base.surfaces[index].rimCut!.radius;
    return {
      label: L.S[index].label,
      cutRadius,
      margin: Math.max(MARGIN_MM, MARGIN_FRACTION * cutRadius),
      gridReach: 0,
      gridAt: null,
      reach: 0,
      at: null,
      clipped: 0,
      withinMargin: 0,
    };
  });
  const slot = new Map(inferred.map((index, n) => [index, n]));

  const controlValues = (nodes: readonly number[]): number[] => {
    const low = Math.min(...nodes);
    const high = Math.max(...nodes);
    const values = [...nodes];
    for (let k = 0; low + k * controlStep < high + SAME_CONTROL; k++) {
      const value = Math.min(high, low + k * controlStep);
      if (!values.some((other) => Math.abs(other - value) < SAME_CONTROL)) values.push(value);
    }
    return values.sort((a, b) => a - b);
  };
  const stations =
    U.isZoom && (U.zoomPositions?.length ?? 0) > 1 ? U.zoomPositions!.map((_, k, all) => k / (all.length - 1)) : [0];
  const zooms = controlValues(stations);
  const focuses = controlValues(U.focusPositions.length > 0 ? [...U.focusPositions] : [0]);

  const stateAt = (zoomT: number, focusT: number): ProbeState => {
    const state = prepareRuntimeState(U, focusT, zoomT);
    const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, U);
    const stopSd = wideOpenStopAtZoom(zoomT, U);
    const pupil = entrancePupilAtState(stopSd, focusT, zoomT, U, geometry).epSD;
    const halfFieldDeg = Math.max(geometry.halfFieldDeg, tracingHalfFieldAtZoom(zoomT, U));
    const trace = prepareEngineTrace(state, {
      capture: "hits",
      checkSemiDiameter: true,
      stopSemiDiameter: stopSd * (1 + AIMED_PUPIL_RESIDUAL_TOLERANCE),
      stopOnClip: true,
      directionNormalized: true,
    });
    return {
      zoomT,
      focusT,
      state,
      scale: pupil > 0 && Number.isFinite(pupil) ? pupil : stopSd,
      halfFieldDeg: Number.isFinite(halfFieldDeg) && halfFieldDeg > 0 ? halfFieldDeg : 0,
      conjugate: mtfFiniteConjugate(state),
      symmetric: mirrorSymmetricAboutMeridian(state),
      radii: (ray) => {
        const result = trace(ray);
        if (result.status !== "ok") return null;
        const radii = cuts.map(() => 0);
        for (const hit of result.hits) {
          const n = slot.get(hit.surfaceIndex);
          if (n !== undefined) radii[n] = hit.radius;
        }
        return radii;
      },
    };
  };

  const launchAt = (s: ProbeState, fieldDeg: number): ProbeLaunch | string => {
    const { state } = s;
    if (s.conjugate) {
      const objectPoint = mtfFiniteObjectPoint(state, s.conjugate, fieldDeg);
      if (!objectPoint) return "has no finite object point in front of the lens";
      const first = state.surfaces[0];
      const firstZ = first.z + Math.min(0, first.profile.sag(first.sd));
      const leadZ = Math.max(firstZ - Math.max(10, U.rayLead), (objectPoint[2] + firstZ) / 2);
      const stopZ = state.z[state.lens.stop.surfaceIndex];
      const fraction = (stopZ - leadZ) / (stopZ - objectPoint[2]);
      return {
        ray: aimedLaunchFrameRay(state, { kind: "finite-object", objectPoint, leadZ }),
        chief: [objectPoint[0] * fraction, objectPoint[1] * fraction],
      };
    }
    if (launchSurfaceForFieldDeg(fieldDeg, state.lens.projection.config) !== "object-plane")
      return "launches from the bounding sphere, not the object plane";
    const slope = projectionLaunchSlopeForField(U, fieldDeg);
    if (slope.status === "out-of-domain") return "lies outside the projection's launch domain";
    const yLaunch = solveChiefRayForRuntimeLens(fieldDeg, s.focusT, s.zoomT, U).yLaunch;
    const yChief = Number.isFinite(yLaunch) ? yLaunch : 0;
    return { ray: aimedLaunchFrameRay(state, { uField: slope.uField, yChief }), chief: [0, yChief] };
  };

  /* Trace a count × count grid over a box; visit each ray of the beam with its launch and radii. */
  const traceGrid = (
    s: ProbeState,
    launch: ProbeLaunch,
    center: Vec2,
    half: number,
    count: number,
    symmetric: boolean,
    visit: (point: Vec2, radii: number[]) => void,
  ) => {
    const xLow = symmetric ? Math.max(0, center[0] - half) : center[0] - half;
    for (let i = 0; i < count; i++) {
      const x = xLow + ((center[0] + half - xLow) * i) / (count - 1);
      for (let j = 0; j < count; j++) {
        const y = center[1] - half + (2 * half * j) / (count - 1);
        const radii = s.radii(launch.ray(x, y));
        if (radii) visit([x, y], radii);
      }
    }
  };

  const untraced: RimCutProbe["untraced"] = [];
  let rays = 0;
  const candidates: Candidate[][] = cuts.map(() => []);
  for (const zoomT of zooms)
    for (const focusT of focuses) {
      const s = stateAt(zoomT, focusT);
      const count = Math.max(2, Math.ceil(s.halfFieldDeg / fieldStep) + 1);
      const cell = (2 * GRID_SPAN * s.scale) / (grid - 1);
      const top: (Candidate | null)[] = cuts.map(() => null);
      for (let k = 0; k < count; k++) {
        const fieldDeg = (s.halfFieldDeg * k) / (count - 1);
        const launch = launchAt(s, fieldDeg);
        if (typeof launch === "string") {
          untraced.push({ zoomT, focusT, fieldDeg, reason: launch });
          continue;
        }
        traceGrid(s, launch, launch.chief, GRID_SPAN * s.scale, grid, s.symmetric, (point, radii) => {
          rays++;
          radii.forEach((radius, n) => {
            const cut = cuts[n];
            if (radius > cut.cutRadius) cut.clipped++;
            if (radius > cut.cutRadius - cut.margin) cut.withinMargin++;
            if (radius > cut.gridReach) {
              cut.gridReach = radius;
              cut.gridAt = { zoomT, focusT, fieldDeg };
            }
            if (radius > (top[n]?.radius ?? 0)) top[n] = { s, fieldDeg, point, radius, cell };
          });
        });
      }
      top.forEach((candidate, n) => candidate && candidates[n].push(candidate));
    }

  /* Refine a state's furthest grid ray for cut n: step the field either side of its own in tenths of the field step,
     each on a fine grid over the cells around the furthest ray of the field before, then bisect the beam's edge
     around the furthest fine ray. */
  const refine = (candidate: Candidate, n: number, record: (radius: number, at: RimCutBeamPoint) => void) => {
    const { s, cell } = candidate;
    for (const sign of [1, -1]) {
      let center = candidate.point;
      for (let k = sign > 0 ? 0 : 1; k <= REFINE_FIELDS; k++) {
        const fieldDeg = candidate.fieldDeg + (sign * fieldStep * k) / REFINE_FIELDS;
        if (fieldDeg < 0 || fieldDeg > s.halfFieldDeg) break;
        const launch = launchAt(s, fieldDeg);
        if (typeof launch === "string") break;
        let found: { point: Vec2; radius: number } | null = null;
        traceGrid(s, launch, center, 2 * cell, REFINE_GRID, false, (point, radii) => {
          if (!found || radii[n] > found.radius) found = { point, radius: radii[n] };
        });
        if (!found) break;
        const { point, radius } = found as { point: Vec2; radius: number };
        center = point;
        let best = radius;
        for (let d = 0; d < EDGE_DIRECTIONS; d++) {
          const angle = (2 * Math.PI * d) / EDGE_DIRECTIONS;
          let inside = 0;
          let outside = cell / 4;
          while (outside - inside > EDGE_TOLERANCE_MM) {
            const t = (inside + outside) / 2;
            const radii = s.radii(launch.ray(center[0] + t * Math.cos(angle), center[1] + t * Math.sin(angle)));
            if (radii) {
              inside = t;
              best = Math.max(best, radii[n]);
            } else outside = t;
          }
        }
        record(best, { zoomT: s.zoomT, focusT: s.focusT, fieldDeg });
      }
    }
  };
  cuts.forEach((cut, n) => {
    cut.reach = cut.gridReach;
    cut.at = cut.gridAt;
    for (const candidate of candidates[n]) {
      if (candidate.radius < cut.gridReach - REFINE_WINDOW_MM) continue;
      refine(candidate, n, (radius, at) => {
        if (radius > cut.reach) {
          cut.reach = radius;
          cut.at = at;
        }
      });
    }
  });
  return { zoomStates: zooms.length, focusStates: focuses.length, rays, cuts, untraced };
}

/** The lens with its inferred cuts removed, compiled without the validator, as the beam rule builds it. */
function lensWithoutCuts(L: RuntimeLens, labels: ReadonlySet<string>): RuntimeLens {
  const { prescription, provenance, attachedTeleconverter } = canonicalLensFromRuntime(L);
  const uncut = {
    ...prescription,
    surfaces: prescription.surfaces.map((surface) => {
      if (!labels.has(surface.label) || surface.rimCutDepthSource !== undefined) return surface;
      const { rimCutDepthMm: _cut, ...rest } = surface;
      return rest;
    }),
  };
  return runtimeView(compileCanonicalUncached(uncut, provenance, attachedTeleconverter));
}
