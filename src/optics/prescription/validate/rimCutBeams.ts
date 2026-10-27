/**
 * Rim-cut beam rule — an inferred rim cut may not stop any traced ray of the wide-open beam.
 *
 * A cut whose depth the source does not state (no `rimCutDepthSource`) is a drawing inference, so it must sit outside
 * every beam the lens traces: wide open, at every field from the axis to the half field, at every zoom station and
 * focus keyframe. It runs on a built lens, since it traces; the catalog sweep and `npm run audit:surface` call it, not
 * the compile-time validator.
 *
 * Each object-plane field's beam is a grid of collimated rays over the wide-open stop, plus a meridional line across
 * it, traced through the unclipped (ghost) path. A ray belongs to the beam when it reaches the image past the stop and
 * every other clear aperture; the cut stops it when it then meets the cut surface between the cut radius and `sd`.
 * Fields are sampled every few degrees, and each cut's reach is refined by golden-section search around its furthest
 * sample, since a beam can reach furthest between samples.
 */

import { prepareRuntimeState } from "../../state/runtimeAdapters.js";
import { computeAnalysisFieldGeometryAtState } from "../../state/fieldAdapters.js";
import { traceEngineRay } from "../../trace/rayAdapters.js";
import { launchSurfaceForFieldDeg } from "../../field/projection.js";
import type { PreparedOpticalState } from "../../types.js";
import type { RuntimeLens } from "../../../types/optics.js";

/** Rays across the beam in each direction of the grid. */
const GRID = 17;
/** Rays along the beam's meridional span, where its extreme heights lie. */
const LINE_STEPS = 120;
/** Steps of the coarse search for one ray inside the stop. */
const SEED_STEPS = 80;
const EDGE_BISECTIONS = 24;
/** Field spacing in degrees: the half field and the axis are always sampled. */
const FIELD_SPACING_DEG = 3;
/** Golden-section steps that refine each cut's reach around its furthest sampled field. */
const FIELD_REFINEMENTS = 8;
const GOLDEN = (Math.sqrt(5) - 1) / 2;
/** Share of the cut radius within which a sampled reach is refined. */
const REFINE_WITHIN = 0.03;
const CLIP_TOLERANCE = 1e-9;

/** How far one inferred cut's beams reach at its surface, and the rays it stops. */
export interface RimCutBeamReach {
  surfaceIndex: number;
  label: string;
  cutRadius: number;
  sd: number;
  /** Largest radius at the surface of any ray of the beams that passes every other aperture, in mm. */
  reach: number;
  /** Rays of the beams the cut stops, and where the first of them was found. */
  stopped: number;
  firstStop: { zoomIndex: number; focusIndex: number; fieldDeg: number } | null;
}

interface RayPath {
  /** Radius at each surface, by index; null where the ray failed before reaching it. */
  radii: (number | null)[];
  /** The ray reached the image through the stop and every clear aperture except, possibly, rim cuts. */
  passesRims: boolean;
  /** The ray crossed the stop inside its wide-open radius. */
  insideStop: boolean;
}

function traceGhost(state: PreparedOpticalState, x: number, y: number, z0: number, angle: number): RayPath {
  const trace = traceEngineRay(
    state,
    { origin: [x, y, z0], direction: [0, Math.sin(angle), Math.cos(angle)] },
    { ghost: true },
  );
  const radii: (number | null)[] = state.surfaces.map(() => null);
  let passesRims = trace.failureReason === null;
  let insideStop = false;
  const stopIndex = state.lens.stop.surfaceIndex;
  for (const hit of trace.hits) {
    if (hit.failureReason) {
      passesRims = false;
      break;
    }
    radii[hit.surfaceIndex] = hit.radius;
    const surface = state.surfaces[hit.surfaceIndex];
    if (hit.surfaceIndex === stopIndex) insideStop = typeof surface.sd !== "number" || hit.radius <= surface.sd;
    if (typeof surface.sd !== "number") continue;
    if (hit.surfaceIndex !== stopIndex && !surface.clips) continue;
    if (hit.radius > surface.sd * (1 + CLIP_TOLERANCE)) passesRims = false;
  }
  return { radii, passesRims: passesRims && insideStop, insideStop };
}

/** The rays of one field's wide-open beam: the stop's meridional span, found by bisection, then a line and a grid. */
function beamRays(state: PreparedOpticalState, angle: number): RayPath[] {
  const first = state.surfaces[0];
  const z0 = state.z[0] - Math.max(1, Math.abs(first.profile.sag(first.sd)) + 1);
  const stopIndex = state.lens.stop.surfaceIndex;
  const maxSd = Math.max(...state.surfaces.map((surface) => surface.sd ?? 0));
  // eslint-disable-next-line no-restricted-syntax -- bounds the launch-plane search window only; rays launch along the field direction itself
  const reachR = 2 * maxSd + Math.abs(Math.tan(angle)) * (state.z[stopIndex] - z0 + 20);
  const inside = (x: number, y: number) => traceGhost(state, x, y, z0, angle).insideStop;
  const edge = (inner: number, outer: number, at: (t: number) => boolean) => {
    for (let i = 0; i < EDGE_BISECTIONS; i++) {
      const middle = (inner + outer) / 2;
      if (at(middle)) inner = middle;
      else outer = middle;
    }
    return inner;
  };

  let seed: number | null = null;
  for (let k = 0; k <= SEED_STEPS && seed === null; k++) {
    const y = -reachR + (2 * reachR * k) / SEED_STEPS;
    if (inside(0, y)) seed = y;
  }
  if (seed === null) return [];
  const low = edge(seed, -reachR, (y) => inside(0, y));
  const high = edge(seed, reachR, (y) => inside(0, y));
  const middle = (low + high) / 2;
  const width = edge(0, reachR, (x) => inside(x, middle));

  const rays: RayPath[] = [];
  for (let k = 0; k <= LINE_STEPS; k++)
    rays.push(traceGhost(state, 0, low + ((high - low) * k) / LINE_STEPS, z0, angle));
  for (let a = 0; a < GRID; a++) {
    for (let b = 0; b < GRID; b++) {
      const y = low + ((high - low) * (a + 0.5)) / GRID;
      const x = -width + (2 * width * (b + 0.5)) / GRID;
      rays.push(traceGhost(state, x, y, z0, angle));
    }
  }
  return rays;
}

/**
 * Trace every inferred rim cut's beams and report how far they reach at its surface.
 *
 * @param L - built lens
 * @returns one entry per inferred cut; empty for a lens without one or a folded lens
 */
export function rimCutBeamReach(L: RuntimeLens): RimCutBeamReach[] {
  if (L.isFoldedOptics) return [];
  const base = prepareRuntimeState(L, 0, 0);
  const cuts = base.surfaces.flatMap((surface, index) =>
    surface.rimCut && L.S[index].rimCutDepthSource === undefined ? [index] : [],
  );
  if (cuts.length === 0) return [];
  const result: RimCutBeamReach[] = cuts.map((index) => ({
    surfaceIndex: index,
    label: L.S[index].label,
    cutRadius: base.surfaces[index].rimCut!.radius,
    sd: L.S[index].sd,
    reach: 0,
    stopped: 0,
    firstStop: null,
  }));
  const zoomCount = L.isZoom ? (L.zoomPositions?.length ?? 1) : 1;
  const focusPositions = L.focusPositions.length > 0 ? L.focusPositions : [0];
  for (let zoomIndex = 0; zoomIndex < zoomCount; zoomIndex++) {
    const zoomT = zoomCount > 1 ? zoomIndex / (zoomCount - 1) : 0;
    focusPositions.forEach((focusT, focusIndex) => {
      const state = prepareRuntimeState(L, focusT, zoomT);
      /* The analyses' half field and the diagram's off-axis fan, whichever reaches further. */
      const halfField = Math.max(
        computeAnalysisFieldGeometryAtState(focusT, zoomT, L).halfFieldDeg,
        L.zoomTracingHalfFields?.[zoomIndex] ?? L.tracingHalfField,
      );
      const fieldCount =
        Number.isFinite(halfField) && halfField > 0 ? Math.max(Math.ceil(halfField / FIELD_SPACING_DEG) + 1, 9) : 1;
      const fields = Array.from({ length: fieldCount }, (_, f) =>
        fieldCount > 1 ? (halfField * f) / (fieldCount - 1) : 0,
      );
      /* Each cut's furthest reach at one field, counting the rays it stops there. */
      const measure = (fieldDeg: number): { reach: number; stopped: number }[] => {
        /* Collimated launches cover the object-plane fields, as the vignetting analysis traces them. */
        if (launchSurfaceForFieldDeg(fieldDeg, state.lens.projection.config) !== "object-plane") {
          return result.map(() => ({ reach: 0, stopped: 0 }));
        }
        const rays = beamRays(state, (fieldDeg * Math.PI) / 180);
        return result.map((entry) => {
          const i = entry.surfaceIndex;
          const cutRadius = state.surfaces[i].rimCut!.radius;
          let reach = 0;
          let stopped = 0;
          for (const ray of rays) {
            const radius = ray.radii[i];
            if (!ray.passesRims || radius === null) continue;
            /* Another cut stopping the ray leaves it out of this cut's beam. */
            const otherCut = result.some((other) => {
              if (other === entry) return false;
              const r = ray.radii[other.surfaceIndex];
              return r !== null && r > state.surfaces[other.surfaceIndex].rimCut!.radius * (1 + CLIP_TOLERANCE);
            });
            if (otherCut) continue;
            reach = Math.max(reach, radius);
            if (radius > cutRadius * (1 + CLIP_TOLERANCE)) stopped++;
          }
          return { reach, stopped };
        });
      };
      const record = (n: number, fieldDeg: number, m: { reach: number; stopped: number }) => {
        const entry = result[n];
        entry.reach = Math.max(entry.reach, m.reach);
        if (m.stopped > 0) {
          entry.stopped += m.stopped;
          entry.firstStop ??= { zoomIndex, focusIndex, fieldDeg };
        }
      };
      const sampled = fields.map((fieldDeg) => measure(fieldDeg));
      sampled.forEach((perCut, f) => perCut.forEach((m, n) => record(n, fields[f], m)));
      /* A cut's reach can peak between samples: refine each around its furthest sample by golden-section search. */
      result.forEach((entry, n) => {
        if (fields.length < 2) return;
        const best = sampled.reduce((k, perCut, f) => (perCut[n].reach > sampled[k][n].reach ? f : k), 0);
        /* A peak between samples rises only a little above them; a reach well inside the cut needs no refining. */
        const cutRadius = state.surfaces[entry.surfaceIndex].rimCut!.radius;
        if (sampled[best][n].reach < cutRadius * (1 - REFINE_WITHIN)) return;
        let low = fields[Math.max(best - 1, 0)];
        let high = fields[Math.min(best + 1, fields.length - 1)];
        for (let step = 0; step < FIELD_REFINEMENTS; step++) {
          const a = high - GOLDEN * (high - low);
          const b = low + GOLDEN * (high - low);
          const ma = measure(a)[n];
          const mb = measure(b)[n];
          record(n, a, ma);
          record(n, b, mb);
          if (ma.reach >= mb.reach) high = b;
          else low = a;
        }
      });
    });
  }
  return result;
}

/**
 * Refuse an inferred rim cut that stops any traced ray of the wide-open beam.
 *
 * @param L - built lens
 * @returns one message per offending cut
 */
export function validateRimCutBeams(L: RuntimeLens): string[] {
  return rimCutBeamReach(L)
    .filter((entry) => entry.stopped > 0)
    .map((entry) => {
      const at = entry.firstStop!;
      const zoom = L.isZoom ? `zoom position ${at.zoomIndex} (${L.zoomPositions?.[at.zoomIndex]} mm), ` : "";
      return `Surface "${entry.label}": its inferred rim cut (radius ${entry.cutRadius.toFixed(3)} mm) stops ${entry.stopped} traced rays of the wide-open beam, first at ${zoom}focus keyframe ${at.focusIndex}, field ${at.fieldDeg.toFixed(2)}°; the beams reach ${entry.reach.toFixed(3)} mm there. Move the cut outside them or source its depth (rimCutDepthSource)`;
    });
}
