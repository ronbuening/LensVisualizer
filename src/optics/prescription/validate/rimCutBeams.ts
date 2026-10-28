/**
 * Rim-cut beam rule — an inferred rim cut must clear the wide-open beams by a margin.
 *
 * A cut whose depth the source does not state (no `rimCutDepthSource`) is a drawing inference, so its radius must clear
 * the furthest ray of every wide-open beam by `max(0.05 mm, 0.3 % of the radius)`, at every field, zoom and focus:
 * rounding, sampling and later stop changes then cannot make it clip. It runs on a built lens, since it traces; the
 * catalog sweep and `npm run audit:surface` call it, not the compile-time validator.
 *
 * The beams are those of the lens with its inferred cuts removed, so each cut answers for every ray that reaches it,
 * whatever other cut that ray crosses, and the field range is the uncut lens's own. A ray belongs to a beam when it
 * passes the wide-open stop and every other clear aperture to the image. Fields launch as the analyses launch them:
 * collimated from the object plane, or from the source's finite object point at a focus keyframe that has one. A field
 * launched any other way cannot be traced here, and the cuts are refused rather than passed.
 *
 * The search screens, then measures. The screen steps zoom and focus by 0.05, through every station and keyframe, and
 * the field by 3° or less, bisecting each beam's edge to 0.005 mm in twelve directions from a ray inside it: the chief
 * estimate, or else the ray nearest the middle of those aimed across a polar grid on the stop. A beam's reach peaks
 * sharply where it vanishes, its last rays reaching furthest, and where the aperture that sets its meridional edge
 * changes, as vignetting sets in. So between a field with a beam and one without, the field is bisected to where the
 * beam vanishes, each field seeded from the beam's meridional chord extrapolated from the fields before; and wherever
 * the aperture setting a meridional edge differs between neighbouring fields, the field is bisected to the change and
 * screened there too. At each cut's highest peak the beam is then measured in full: 360 samples aimed at the real
 * stop's rim (`prepareAimedPupilLaunchForState`), each bisected back to the beam's edge where another aperture
 * vignettes it, the furthest refined along the rim and bisected to 1e-6 mm. Near its limit, a cut's three highest
 * peaks are measured, and around each the fields either side are scanned at a thirtieth of the spacing on a screen
 * whose furthest direction is refined, seeded field to field, with the best one refined on the full measurement. The
 * furthest point of a beam lies on its edge, since a ray's height at a surface varies smoothly and monotonically
 * across the pupil.
 */

import { prepareRuntimeState } from "../../state/runtimeAdapters.js";
import {
  computeAnalysisFieldGeometryAtState,
  entrancePupilAtState,
  solveChiefRayForRuntimeLens,
} from "../../state/fieldAdapters.js";
import { tracingHalfFieldAtZoom, wideOpenStopAtZoom } from "../../state/stationTables.js";
import { launchSurfaceForFieldDeg, projectionLaunchSlopeForField } from "../../field/projection.js";
import { prepareEngineTrace } from "../../trace/rayAdapters.js";
import { mirrorSymmetricAboutMeridian } from "../../trace/symmetry.js";
import {
  AIMED_PUPIL_RESIDUAL_TOLERANCE,
  aimedLaunchFrameRay,
  prepareAimedPupilLaunchForState,
} from "../../analysis/pupils/aimedPupil.js";
import type { AimedPupilFieldGeometry, AimedPupilRay } from "../../analysis/pupils/aimedPupil.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "../../analysis/mtf/mtfConjugates.js";
import { compileCanonicalUncached } from "../compileCanonical.js";
import { canonicalLensFromRuntime } from "../identity.js";
import { runtimeView } from "../runtimeView.js";
import type { PreparedOpticalState, Ray3 } from "../../types.js";
import type { FiniteConjugate, RuntimeLens } from "../../../types/optics.js";

/** Clearance an inferred cut needs beyond the beams: a floor in mm and a share of the cut radius. */
const MARGIN_MM = 0.05;
const MARGIN_FRACTION = 0.003;
/** Screen: step of the zoom and focus controls, field spacing in degrees, fewest fields per state. */
const CONTROL_STEP = 0.05;
const FIELD_SPACING_DEG = 3;
const MIN_FIELDS = 5;
/** Screen: directions from the chief ray over the whole launch plane, and the edge's bisection tolerance in mm. */
const SCREEN_DIRECTIONS = 12;
const SCREEN_TOLERANCE_MM = 0.005;
/** Screen: share of the previous field's edge distance either side of it that brackets the next field's edge first. */
const WARM_BRACKET = 0.03;
/**
 * Bisections of the field between two fields whose meridional edge is set by different apertures, and the tolerance in
 * mm each bisects that edge to: enough to tell which aperture sets it.
 */
const CHANGE_BISECTIONS = 14;
const CHANGE_TOLERANCE_MM = 0.05;
/** Changes of aperture followed along one edge inside one interval between fields. */
const MAX_CHANGES = 4;
/** Bisections of the field between a field with a beam and one without, following the beam to where it vanishes. */
const VANISH_BISECTIONS = 20;
/** A cut is near its limit once its screened reach comes within its margin plus this window: mm, and a radius share. */
const NEAR_WINDOW_MM = 0.5;
const NEAR_WINDOW_FRACTION = 0.02;
/** Peaks per cut measured in full when near its limit; a cut clear of it is measured at its highest peak only. */
const PEAKS_PER_CUT = 3;
/** Near its limit: fields scanned per field spacing either side of a peak, and screen steps refining its direction. */
const FINE_FIELDS = 30;
const DIRECTION_REFINEMENTS = 10;
/** Near its limit: golden-section steps refining the best scanned field on the full measurement. */
const FIELD_REFINEMENTS = 12;
/** Full measurement: samples around the stop's rim (the half with x ≥ 0 on a mirror-symmetric lens). */
const RIM_SAMPLES = 360;
/** Full measurement: bisection tolerance in mm of each rim sample's edge, and of each edge refined along the rim. */
const RIM_TOLERANCE_MM = 0.01;
const EDGE_TOLERANCE_MM = 1e-6;
/** Golden-section steps refining the furthest rim sample between its neighbours. */
const RIM_REFINEMENTS = 16;
/** Seed search: shares of the stop radius and directions around it of the rays aimed across the stop. */
const SEED_RADII = [0.25, 0.5, 0.75, 0.9, 1];
const SEED_DIRECTIONS = 24;
const MAX_BISECTIONS = 60;
const GOLDEN = (Math.sqrt(5) - 1) / 2;
const SAME_CONTROL = 1e-9;
/** Edge limit of a direction in which no aperture was met within the search. */
const UNBOUNDED = -2;

type Vec2 = readonly [number, number];

/** A zoom and focus state and a field angle. */
export interface RimCutBeamPoint {
  zoomT: number;
  focusT: number;
  fieldDeg: number;
}

/** How far the wide-open beams reach at one inferred cut's surface. */
export interface RimCutBeamReach {
  surfaceIndex: number;
  label: string;
  cutRadius: number;
  sd: number;
  /** Clearance the rule asks of this cut, in mm. */
  margin: number;
  /** Largest radius at the surface of any ray of the beams, in mm. */
  reach: number;
  /** Where the beams reach furthest; null when none reaches the surface. */
  at: RimCutBeamPoint | null;
}

/** The rule's findings for one lens. */
export interface RimCutBeamCheck {
  cuts: RimCutBeamReach[];
  /** Sampled fields the rule cannot launch, so cannot check. */
  untraced: (RimCutBeamPoint & { reason: string })[];
}

/** A traced ray's radius at each cut's surface when it reaches the image; else the surface that stopped it, or −1. */
type Traced = number[] | number;

/** One zoom and focus state of the uncut lens, wide open. */
interface BeamState {
  zoomT: number;
  focusT: number;
  state: PreparedOpticalState;
  stopSd: number;
  /** Entrance-pupil radius in mm: the scale of the beam on its launch plane. */
  launchScale: number;
  halfFieldDeg: number;
  conjugate: FiniteConjugate | undefined;
  symmetric: boolean;
  trace: (ray: Ray3) => Traced;
}

/** One field's launch, in the aimed launch's own frame. */
interface FieldLaunch {
  geometry: AimedPupilFieldGeometry;
  ray: (a: number, b: number) => Ray3;
  /** Launch coordinates of the chief-ray estimate. */
  chief: Vec2;
}

/** A ray of the beam: its launch coordinates and its radius at each cut's surface. */
interface BeamRay {
  launch: Vec2;
  radii: number[];
}

/** The beam's edge in one direction: its last ray, and the surface that stops the next one out. */
interface Edge {
  ray: BeamRay;
  limit: number;
}

/** One field's screen: each cut's furthest radius, and the edge in each direction from the seed ray. */
interface Screened {
  reach: number[];
  seed: Vec2;
  distances: number[];
  limits: number[];
}

/** A screened field: null where no beam reaches the image, undefined where the field cannot be launched. */
type Row = Screened | null | undefined;

/** A field with a beam, and its screen. */
interface LitField {
  deg: number;
  row: Screened;
}

/** How to screen a field: a chief-ray estimate, edge distances to bracket first, and a cut to refine the screen for. */
interface Search {
  chief?: Vec2;
  hints?: readonly number[];
  refine?: number;
}

/** A cut's screened peak at one state: its furthest reach, the field and seed ray it reaches it at, the field spacing. */
interface Peak {
  reach: number;
  fieldDeg: number;
  seed: Vec2 | null;
  spacing: number;
}

/**
 * Trace every inferred rim cut's wide-open beams and report how far they reach at its surface.
 *
 * @param L - built lens
 * @returns each inferred cut's reach, and the sampled fields that could not be traced; empty for a lens without
 *   inferred cuts or a folded lens
 */
export function rimCutBeamReach(L: RuntimeLens): RimCutBeamCheck {
  const inferred = L.S.flatMap((surface, index) =>
    surface.rimCutDepthMm !== undefined && surface.rimCutDepthSource === undefined ? [index] : [],
  );
  if (L.isFoldedOptics || inferred.length === 0) return { cuts: [], untraced: [] };
  const base = prepareRuntimeState(L, 0, 0);
  const cuts: RimCutBeamReach[] = inferred.map((index) => {
    const cutRadius = base.surfaces[index].rimCut!.radius;
    return {
      surfaceIndex: index,
      label: L.S[index].label,
      cutRadius,
      sd: L.S[index].sd,
      margin: Math.max(MARGIN_MM, MARGIN_FRACTION * cutRadius),
      reach: 0,
      at: null,
    };
  });
  const untraced: RimCutBeamCheck["untraced"] = [];
  const U = uncutLens(L, new Set(cuts.map((cut) => cut.label)));
  const record = (radii: readonly number[], point: RimCutBeamPoint) =>
    radii.forEach((radius, n) => {
      if (radius > cuts[n].reach) {
        cuts[n].reach = radius;
        cuts[n].at = { ...point };
      }
    });
  /* Screen one field, recording every ray it finds. */
  const screen = (bs: BeamState, fieldDeg: number, search: Search = {}): Row => {
    const point = { zoomT: bs.zoomT, focusT: bs.focusT, fieldDeg };
    const launch = fieldLaunch(U, bs, fieldDeg, search.chief);
    if (typeof launch === "string") {
      untraced.push({ ...point, reason: launch });
      return undefined;
    }
    const screened = screenBeam(bs, launch, search);
    if (screened) record(screened.reach, point);
    return screened;
  };
  /* Bisect the field from the trail's last lit field toward a field without a beam, to where the beam vanishes,
     screening each lit field on the way; each is seeded from the beam's meridional chord at the fields before. */
  const followVanish = (
    bs: BeamState,
    trail: LitField[],
    darkDeg: number,
    onLit: (lit: LitField) => void,
    refine?: number,
  ) => {
    let dark = darkDeg;
    for (let i = 0; i < VANISH_BISECTIONS; i++) {
      const last = trail[trail.length - 1];
      const deg = (last.deg + dark) / 2;
      const row = screen(bs, deg, { chief: predictSeed(bs, trail, deg), hints: last.row.distances, refine });
      if (row === undefined) return;
      if (row === null) dark = deg;
      else {
        trail.push({ deg, row });
        onLit({ deg, row });
      }
    }
  };
  /* Measure one field in full for cut `n`, seeded from guesses; returns the cut's reach there. */
  const measure = (bs: BeamState, n: number, fieldDeg: number, guesses: readonly Vec2[]) => {
    const launch = fieldLaunch(U, bs, fieldDeg);
    if (typeof launch === "string") return 0;
    let reach = 0;
    for (const ray of measureBeam(bs, launch, n, guesses)) {
      record(ray.radii, { zoomT: bs.zoomT, focusT: bs.focusT, fieldDeg });
      reach = Math.max(reach, ray.radii[n]);
    }
    return reach;
  };

  const nearLimit = (n: number, reach: number) =>
    reach >= cuts[n].cutRadius - cuts[n].margin - Math.max(NEAR_WINDOW_MM, NEAR_WINDOW_FRACTION * cuts[n].cutRadius);

  /* The screen over zoom × focus × field: each cut's furthest field at each state. */
  const stations =
    U.isZoom && (U.zoomPositions?.length ?? 0) > 1 ? U.zoomPositions!.map((_, k, all) => k / (all.length - 1)) : [0];
  const zooms = stations.length > 1 ? controlValues(0, 1, stations) : stations;
  const keyframes = U.focusPositions.length > 0 ? [...U.focusPositions] : [0];
  const focuses =
    keyframes.length > 1 ? controlValues(Math.min(...keyframes), Math.max(...keyframes), keyframes) : keyframes;
  const states = new Map<string, BeamState>();
  const peaks: Peak[][][] = cuts.map(() =>
    zooms.map(() => focuses.map(() => ({ reach: 0, fieldDeg: 0, seed: null, spacing: 0 }))),
  );
  zooms.forEach((zoomT, zi) =>
    focuses.forEach((focusT, fi) => {
      const bs = beamState(U, zoomT, focusT, inferred);
      states.set(`${zi}|${fi}`, bs);
      const fields = fieldSamples(bs.halfFieldDeg);
      const spacing = fields.length > 1 ? fields[1] : 0;
      const update = ({ deg, row }: LitField) =>
        row.reach.forEach((radius, n) => {
          const peak = peaks[n][zi][fi];
          if (radius > peak.reach) Object.assign(peak, { reach: radius, fieldDeg: deg, seed: row.seed, spacing });
        });
      const rows: Row[] = [];
      fields.forEach((fieldDeg, k) => {
        /* Fields are evenly spaced, so the chief launch extrapolates from the two before; it need only lie in the beam. */
        const [a, b] = [rows[k - 2]?.seed, rows[k - 1]?.seed];
        const chief: Vec2 | undefined = a && b ? [2 * b[0] - a[0], 2 * b[1] - a[1]] : undefined;
        const screened = screen(bs, fieldDeg, { chief, hints: rows[k - 1]?.distances });
        rows.push(screened);
        if (screened) update({ deg: fieldDeg, row: screened });
      });
      /* A beam's reach can peak where it vanishes between two fields: follow it from the lit field to that point. */
      const litAt = (k: number): LitField[] => {
        const row = rows[k];
        return row ? [{ deg: fields[k], row }] : [];
      };
      for (let k = 0; k + 1 < fields.length; k++) {
        if (rows[k] && rows[k + 1] === null) followVanish(bs, [...litAt(k - 1), ...litAt(k)], fields[k + 1], update);
        if (rows[k] === null && rows[k + 1]) followVanish(bs, [...litAt(k + 2), ...litAt(k + 1)], fields[k], update);
      }
      /* Where another aperture takes over a meridional edge between two fields, the reach can peak sharply between
         them: screen the fields either side of each change. */
      for (let k = 0; k + 1 < fields.length; k++) {
        const low = rows[k];
        const high = rows[k + 1];
        if (!low || !high) continue;
        /* Apertures can take over one after another inside one interval: follow each change to the next. */
        for (const direction of meridionalDirections(bs)) {
          const edgeAt = (row: Screened): EdgeAt => ({
            seed: row.seed,
            distance: row.distances[direction],
            limit: row.limits[direction],
          });
          const to = edgeAt(high);
          let fromDeg = fields[k];
          let from = edgeAt(low);
          for (let c = 0; c < MAX_CHANGES && from.limit !== to.limit; c++) {
            const change = fieldOfChange(U, bs, fromDeg, fields[k + 1], from, to, direction);
            const chief = predictSeed(
              bs,
              [
                { deg: fields[k], row: low },
                { deg: fields[k + 1], row: high },
              ],
              change.low,
            );
            const row = screen(bs, change.low, { chief, hints: low.distances });
            if (row) update({ deg: change.low, row });
            if (change.high >= fields[k + 1]) break;
            fromDeg = change.high;
            from = change.after;
          }
        }
      }
    }),
  );
  /* Every field measured from here lies between fields the screen launched, so its untraced fields are the count. */
  const untracedOnGrid = untraced.length;

  /* Measure each cut's highest peaks in full. Near its limit, three of them, and around each the fields either side,
     scanned on a screen refined for the cut and seeded field to field (a beam that vanishes is followed to where it
     does), with the best scanned field refined on the full measurement. */
  cuts.forEach((_, n) => {
    const top = highestPeaks(peaks[n], PEAKS_PER_CUT);
    const near = top.length > 0 && nearLimit(n, peaks[n][top[0].zi][top[0].fi].reach);
    for (const { zi, fi } of near ? top : top.slice(0, 1)) {
      const peak = peaks[n][zi][fi];
      const bs = states.get(`${zi}|${fi}`)!;
      measure(bs, n, peak.fieldDeg, peak.seed ? [peak.seed] : []);
      if (!near || peak.spacing === 0) continue;
      const start = screen(bs, peak.fieldDeg, { chief: peak.seed ?? undefined, refine: n });
      if (!start) continue;
      const step = peak.spacing / FINE_FIELDS;
      const low = Math.max(0, peak.fieldDeg - peak.spacing);
      const high = Math.min(bs.halfFieldDeg, peak.fieldDeg + peak.spacing);
      const lit: LitField[] = [{ deg: peak.fieldDeg, row: start }];
      for (const sign of [1, -1]) {
        const trail: LitField[] = [lit[0]];
        for (let k = 1; ; k++) {
          const deg = peak.fieldDeg + sign * k * step;
          if (deg < low - SAME_CONTROL || deg > high + SAME_CONTROL) break;
          const last = trail[trail.length - 1];
          const row = screen(bs, deg, { chief: predictSeed(bs, trail, deg), hints: last.row.distances, refine: n });
          if (row === undefined) break;
          if (row === null) {
            followVanish(bs, trail, deg, (field) => lit.push(field), n);
            break;
          }
          trail.push({ deg, row });
          lit.push({ deg, row });
        }
      }
      const best = lit.reduce((a, b) => (b.row.reach[n] > a.row.reach[n] ? b : a));
      const guesses = (deg: number): Vec2[] => {
        const nearest = [...lit]
          .sort((a, b) => Math.abs(a.deg - deg) - Math.abs(b.deg - deg))
          .slice(0, 2)
          .reverse();
        return [predictSeed(bs, nearest, deg), nearest[nearest.length - 1].row.seed];
      };
      const at = (deg: number) => measure(bs, n, deg, guesses(deg));
      goldenMax(
        Math.max(low, best.deg - step),
        Math.min(high, best.deg + step),
        best.deg,
        at(best.deg),
        at,
        FIELD_REFINEMENTS,
      );
    }
  });
  return { cuts, untraced: untraced.slice(0, untracedOnGrid) };
}

/**
 * Refuse an inferred rim cut that comes within its margin of a traced ray of the wide-open beam, and the inferred cuts
 * of a lens whose fields the rule cannot trace.
 *
 * @param L - built lens
 * @returns one message per offending cut, and one for untraced fields
 */
export function validateRimCutBeams(L: RuntimeLens): string[] {
  const { cuts, untraced } = rimCutBeamReach(L);
  const errors = cuts
    .filter((cut) => cut.reach > cut.cutRadius - cut.margin)
    .map(
      (cut) =>
        `Surface "${cut.label}": its inferred rim cut (radius ${cut.cutRadius.toFixed(3)} mm) needs ${cut.margin.toFixed(3)} mm of clearance from the wide-open beams, which reach ${cut.reach.toFixed(4)} mm there at ${describePoint(L, cut.at!)}. Move the cut out to at least ${(cut.reach + cut.margin).toFixed(4)} mm or source its depth (rimCutDepthSource)`,
    );
  if (untraced.length > 0) {
    const labels = cuts.map((cut) => `"${cut.label}"`).join(", ");
    errors.push(
      `Inferred rim cuts on ${labels} cannot be checked: ${untraced.length} sampled fields cannot be traced, first ${describePoint(L, untraced[0])}, which ${untraced[0].reason}. Source the cut depths (rimCutDepthSource)`,
    );
  }
  return errors;
}

/**
 * The lens with its inferred cuts removed: the beams the cuts are judged against, and the field range they leave. It
 * is compiled without the validator, which passed the lens with its cuts: a cut can hide a rim the validator would
 * refuse drawn, such as a steep rim slope, and that rim still bounds the beams the cut is judged against.
 */
function uncutLens(L: RuntimeLens, labels: ReadonlySet<string>): RuntimeLens {
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

function beamState(U: RuntimeLens, zoomT: number, focusT: number, cutIndices: readonly number[]): BeamState {
  const state = prepareRuntimeState(U, focusT, zoomT);
  const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, U);
  const stopSd = wideOpenStopAtZoom(zoomT, U);
  const pupil = entrancePupilAtState(stopSd, focusT, zoomT, U, geometry).epSD;
  /* The analyses' half field and the diagram's off-axis fan, whichever reaches further. */
  const halfFieldDeg = Math.max(geometry.halfFieldDeg, tracingHalfFieldAtZoom(zoomT, U));
  const traceRay = prepareEngineTrace(state, {
    capture: "hits",
    checkSemiDiameter: true,
    stopSemiDiameter: stopSd * (1 + AIMED_PUPIL_RESIDUAL_TOLERANCE),
    stopOnClip: true,
    directionNormalized: true,
  });
  const slot = new Map(cutIndices.map((index, n) => [index, n]));
  return {
    zoomT,
    focusT,
    state,
    stopSd,
    launchScale: pupil > 0 && Number.isFinite(pupil) ? pupil : stopSd,
    halfFieldDeg: Number.isFinite(halfFieldDeg) && halfFieldDeg > 0 ? halfFieldDeg : 0,
    conjugate: mtfFiniteConjugate(state),
    symmetric: mirrorSymmetricAboutMeridian(state),
    trace: (ray) => {
      const result = traceRay(ray);
      if (result.status !== "ok") return result.failureReason ? -1 : result.terminalSurfaceIndex;
      const radii = cutIndices.map(() => 0);
      for (const hit of result.hits) {
        const n = slot.get(hit.surfaceIndex);
        if (n !== undefined) radii[n] = hit.radius;
      }
      return radii;
    },
  };
}

/**
 * A field's launch as the analyses make it, or why the rule cannot make it.
 *
 * @param chief - chief-ray launch estimate to use instead of solving one
 */
function fieldLaunch(U: RuntimeLens, bs: BeamState, fieldDeg: number, chief?: Vec2): FieldLaunch | string {
  const { state } = bs;
  if (bs.conjugate) {
    const objectPoint = mtfFiniteObjectPoint(state, bs.conjugate, fieldDeg);
    if (!objectPoint) return "has no finite object point in front of the lens";
    const first = state.surfaces[0];
    const firstZ = first.z + Math.min(0, first.profile.sag(first.sd));
    const leadZ = Math.max(firstZ - Math.max(10, U.rayLead), (objectPoint[2] + firstZ) / 2);
    const geometry: AimedPupilFieldGeometry = { kind: "finite-object", objectPoint, leadZ };
    /* The chief estimate: the straight line from the object point to the stop centre, on the launch plane. */
    const stopZ = state.z[state.lens.stop.surfaceIndex];
    const fraction = (stopZ - leadZ) / (stopZ - objectPoint[2]);
    return {
      geometry,
      ray: aimedLaunchFrameRay(state, geometry),
      chief: chief ?? [objectPoint[0] * fraction, objectPoint[1] * fraction],
    };
  }
  if (launchSurfaceForFieldDeg(fieldDeg, state.lens.projection.config) !== "object-plane")
    return "launches from the bounding sphere, not the object plane";
  const slope = projectionLaunchSlopeForField(U, fieldDeg);
  if (slope.status === "out-of-domain") return "lies outside the projection's launch domain";
  const yLaunch = chief ? chief[1] : solveChiefRayForRuntimeLens(fieldDeg, bs.focusT, bs.zoomT, U).yLaunch;
  const yChief = Number.isFinite(yLaunch) ? yLaunch : 0;
  const geometry: AimedPupilFieldGeometry = { uField: slope.uField, yChief };
  return { geometry, ray: aimedLaunchFrameRay(state, geometry), chief: [0, yChief] };
}

/** Screen directions in degrees in the launch plane: the half with x ≥ 0 on a mirror-symmetric lens. */
function screenDirections(bs: BeamState): number[] {
  const step = 360 / SCREEN_DIRECTIONS;
  return bs.symmetric
    ? Array.from({ length: SCREEN_DIRECTIONS / 2 + 1 }, (_, k) => -90 + k * step)
    : Array.from({ length: SCREEN_DIRECTIONS }, (_, k) => k * step);
}

/** Indices of the screen directions along the meridian, up and down. */
function meridionalDirections(bs: BeamState): number[] {
  return screenDirections(bs).flatMap((deg, k) => (Math.abs(Math.sin((deg * Math.PI) / 180)) === 1 ? [k] : []));
}

/**
 * Each cut's furthest radius over one field's beam, bisecting its edge in a few directions from a ray inside it; for a
 * cut to refine, the direction of its furthest edge is then refined between its neighbours.
 */
function screenBeam(bs: BeamState, launch: FieldLaunch, search: Search = {}): Screened | null {
  const at = (p: Vec2) => bs.trace(launch.ray(p[0], p[1]));
  const seed = findSeed(bs, launch, at);
  if (!seed) return null;
  const reach = [...seed.radii];
  const take = (ray: BeamRay) =>
    ray.radii.forEach((radius, n) => {
      reach[n] = Math.max(reach[n], radius);
    });
  const directions = screenDirections(bs);
  const distances: number[] = [];
  const limits: number[] = [];
  const radii: number[][] = [];
  directions.forEach((deg, k) => {
    const edge = edgeAlong(bs, at, seed, deg, search.hints?.[k]);
    take(edge.ray);
    distances.push(Math.hypot(edge.ray.launch[0] - seed.launch[0], edge.ray.launch[1] - seed.launch[1]));
    limits.push(edge.limit);
    radii.push(edge.ray.radii);
  });
  const n = search.refine;
  if (n !== undefined) {
    const best = radii.reduce((k, ray, i) => (ray[n] > radii[k][n] ? i : k), 0);
    const step = 360 / SCREEN_DIRECTIONS;
    const radiusAt = (deg: number) => {
      const edge = edgeAlong(bs, at, seed, deg, distances[best]);
      take(edge.ray);
      return edge.ray.radii[n];
    };
    const deg = directions[best];
    goldenMax(deg - step, deg + step, deg, radii[best][n], radiusAt, DIRECTION_REFINEMENTS);
  }
  return { reach, seed: seed.launch, distances, limits };
}

/** The beam's edge in one direction from a ray inside it, bracketed around a previous edge distance when there is one. */
function edgeAlong(
  bs: BeamState,
  at: (p: Vec2) => Traced,
  seed: BeamRay,
  deg: number,
  hint: number | undefined,
  toleranceMm = SCREEN_TOLERANCE_MM,
): Edge {
  const d: Vec2 = [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)];
  const point = (s: number): Vec2 => [seed.launch[0] + s * d[0], seed.launch[1] + s * d[1]];
  let inner = seed;
  if (hint) {
    const traced = at(point(hint * (1 - WARM_BRACKET)));
    if (Array.isArray(traced)) inner = { launch: point(hint * (1 - WARM_BRACKET)), radii: traced };
  }
  let outer = hint ? hint * (1 + WARM_BRACKET) : 2 * bs.launchScale;
  let traced = at(point(outer));
  while (Array.isArray(traced)) {
    inner = { launch: point(outer), radii: traced };
    if (outer > 64 * bs.launchScale) return { ray: inner, limit: UNBOUNDED };
    outer *= 2;
    traced = at(point(outer));
  }
  return bisectEdge(at, inner, point(outer), traced, toleranceMm);
}

/** One meridional edge at one field: the seed ray's launch, the edge's distance from it, and the aperture setting it. */
interface EdgeAt {
  seed: Vec2;
  distance: number;
  limit: number;
}

/**
 * Where, between `fromDeg` and `toDeg`, another aperture takes over one meridional edge of the beam from the one that
 * sets it at `fromDeg`: the last field still set by that aperture, and the first set by another, with its edge, 2⁻¹⁴
 * of the interval apart.
 */
function fieldOfChange(
  U: RuntimeLens,
  bs: BeamState,
  fromDeg: number,
  toDeg: number,
  from: EdgeAt,
  to: EdgeAt,
  direction: number,
): { low: number; high: number; after: EdgeAt } {
  const deg = screenDirections(bs)[direction];
  let low = fromDeg;
  let high = toDeg;
  let after = to;
  for (let i = 0; i < CHANGE_BISECTIONS; i++) {
    const fieldDeg = (low + high) / 2;
    /* The chief estimate interpolated between the two screened fields: it need only lie inside the beam. */
    const t = (fieldDeg - fromDeg) / (toDeg - fromDeg);
    const chief: Vec2 = [
      from.seed[0] + t * (to.seed[0] - from.seed[0]),
      from.seed[1] + t * (to.seed[1] - from.seed[1]),
    ];
    const launch = fieldLaunch(U, bs, fieldDeg, chief);
    if (typeof launch === "string") break;
    const at = (p: Vec2) => bs.trace(launch.ray(p[0], p[1]));
    const seed = findSeed(bs, launch, at);
    if (!seed) break;
    const hint = from.distance + t * (to.distance - from.distance);
    const edge = edgeAlong(bs, at, seed, deg, hint, CHANGE_TOLERANCE_MM);
    if (edge.limit === from.limit) low = fieldDeg;
    else {
      high = fieldDeg;
      const distance = Math.hypot(edge.ray.launch[0] - seed.launch[0], edge.ray.launch[1] - seed.launch[1]);
      after = { seed: seed.launch, distance, limit: edge.limit };
    }
  }
  return { low, high, after };
}

/**
 * Measure one field's beam in full: samples aimed at the stop's rim, each bisected back to the beam's edge where the
 * ray to it is stopped, and the cut `refine`'s furthest sample refined along the rim.
 *
 * @param guesses - launches to try for a ray inside the beam after the aimed chief ray
 *
 * @returns the edge rays found
 */
function measureBeam(bs: BeamState, launch: FieldLaunch, refine: number, guesses: readonly Vec2[] = []): BeamRay[] {
  const aperture = { stopSemiDiameterMm: bs.stopSd, launchScaleMm: bs.launchScale };
  const aim = (anglesDeg: readonly number[]) =>
    prepareAimedPupilLaunchForState(
      bs.state,
      aperture,
      anglesDeg.map((deg) => ({
        xFraction: Math.cos((deg * Math.PI) / 180),
        yFraction: Math.sin((deg * Math.PI) / 180),
      })),
      launch.geometry,
    );
  /* A mirror-symmetric beam is measured on its half with x ≥ 0, at the same spacing. */
  const step = 360 / RIM_SAMPLES;
  const angles = bs.symmetric
    ? Array.from({ length: RIM_SAMPLES / 2 + 1 }, (_, k) => -90 + k * step)
    : Array.from({ length: RIM_SAMPLES }, (_, k) => k * step);
  const ring = aim(angles);
  if (!ring) return [];
  const at = (p: Vec2) => bs.trace(launch.ray(p[0], p[1]));
  const seed = findSeed(bs, launch, at, ring.chief.status === "aimed" ? [ring.chief.launch, ...guesses] : guesses);
  if (!seed) return [];
  const edge = (ray: AimedPupilRay, toleranceMm: number): BeamRay => {
    const traced = at(ray.launch);
    return Array.isArray(traced)
      ? { launch: ray.launch, radii: traced }
      : bisectEdge(at, seed, ray.launch, traced, toleranceMm).ray;
  };
  const edges = ring.rays.map((ray) => edge(ray, RIM_TOLERANCE_MM));
  const found = [seed, ...edges];
  /* The refined cut's furthest rim sample can sit a little short of the furthest point of the edge: refine between its
     neighbours along the rim, bisecting each edge in full. */
  const best = edges.reduce((k, ray, i) => (ray.radii[refine] > edges[k].radii[refine] ? i : k), 0);
  const radiusAt = (deg: number) => {
    const sample = aim([deg])?.rays[0];
    if (!sample) return 0;
    const ray = edge(sample, EDGE_TOLERANCE_MM);
    found.push(ray);
    return ray.radii[refine];
  };
  goldenMax(angles[best] - step, angles[best] + step, angles[best], radiusAt(angles[best]), radiusAt, RIM_REFINEMENTS);
  return found;
}

/**
 * A ray of the beam to search from: the chief estimate or a guess when one reaches the image; else, of the rays aimed
 * across a polar grid on the stop, the one nearest their middle, moved to the middle of the beam's meridional chord
 * through it. A beam is always found where it covers a grid cell; a thinner one is followed from a field before it.
 */
function findSeed(
  bs: BeamState,
  launch: FieldLaunch,
  at: (p: Vec2) => Traced,
  guesses: readonly Vec2[] = [],
): BeamRay | null {
  for (const p of [launch.chief, ...guesses]) {
    const traced = at(p);
    if (Array.isArray(traced)) return { launch: p, radii: traced };
  }
  const step = 360 / SEED_DIRECTIONS;
  const angles = bs.symmetric
    ? Array.from({ length: SEED_DIRECTIONS / 2 + 1 }, (_, k) => -90 + k * step)
    : Array.from({ length: SEED_DIRECTIONS }, (_, k) => k * step);
  const samples = SEED_RADII.flatMap((share) =>
    angles.map((deg) => ({
      xFraction: share * Math.cos((deg * Math.PI) / 180),
      yFraction: share * Math.sin((deg * Math.PI) / 180),
    })),
  );
  const aimed = prepareAimedPupilLaunchForState(
    bs.state,
    { stopSemiDiameterMm: bs.stopSd, launchScaleMm: bs.launchScale },
    samples,
    launch.geometry,
  );
  const inside: BeamRay[] = [];
  for (const ray of aimed?.rays ?? []) {
    if (ray.status === "unaimed") continue;
    const traced = at(ray.launch);
    if (Array.isArray(traced)) inside.push({ launch: ray.launch, radii: traced });
  }
  if (inside.length === 0) return null;
  const mean = inside.reduce<Vec2>(
    (sum, ray) => [sum[0] + ray.launch[0] / inside.length, sum[1] + ray.launch[1] / inside.length],
    [0, 0],
  );
  const distance = (ray: BeamRay) => Math.hypot(ray.launch[0] - mean[0], ray.launch[1] - mean[1]);
  const nearest = inside.reduce((a, b) => (distance(b) < distance(a) ? b : a));
  const down = edgeAlong(bs, at, nearest, -90, undefined).ray.launch[1];
  const up = edgeAlong(bs, at, nearest, 90, undefined).ray.launch[1];
  const middle: Vec2 = [nearest.launch[0], (down + up) / 2];
  const traced = at(middle);
  return Array.isArray(traced) ? { launch: middle, radii: traced } : nearest;
}

/** The beam's meridional chord at one field: its seed ray's x and the lowest and highest y along it. */
function chordOf(bs: BeamState, row: Screened): { x: number; low: number; high: number } {
  const directions = screenDirections(bs);
  const up = directions.indexOf(90);
  const down = directions.findIndex((deg) => deg === -90 || deg === 270);
  return { x: row.seed[0], low: row.seed[1] - row.distances[down], high: row.seed[1] + row.distances[up] };
}

/** The middle of the beam's meridional chord at a field, extrapolated from the trail's last two lit fields. */
function predictSeed(bs: BeamState, trail: readonly LitField[], deg: number): Vec2 {
  const chords = trail.slice(-2).map((field) => ({ deg: field.deg, ...chordOf(bs, field.row) }));
  const [a, b] = chords.length === 2 && chords[1].deg !== chords[0].deg ? chords : [chords[chords.length - 1]];
  if (!b) return [a.x, (a.low + a.high) / 2];
  const t = (deg - a.deg) / (b.deg - a.deg);
  const lerp = (u: number, v: number) => u + t * (v - u);
  return [lerp(a.x, b.x), (lerp(a.low, b.low) + lerp(a.high, b.high)) / 2];
}

/** The last ray of the beam on the segment from a ray inside it toward a stopped launch, to a tolerance in mm. */
function bisectEdge(
  at: (p: Vec2) => Traced,
  inside: BeamRay,
  outside: Vec2,
  outsideStop: number,
  toleranceMm: number,
): Edge {
  const length = Math.hypot(outside[0] - inside.launch[0], outside[1] - inside.launch[1]);
  let inner = inside;
  let limit = outsideStop;
  let low = 0;
  let high = 1;
  for (let i = 0; i < MAX_BISECTIONS && (high - low) * length > toleranceMm; i++) {
    const t = (low + high) / 2;
    const p: Vec2 = [
      inside.launch[0] + t * (outside[0] - inside.launch[0]),
      inside.launch[1] + t * (outside[1] - inside.launch[1]),
    ];
    const traced = at(p);
    if (Array.isArray(traced)) {
      inner = { launch: p, radii: traced };
      low = t;
    } else {
      limit = traced;
      high = t;
    }
  }
  return { ray: inner, limit };
}

/** Golden-section search for a maximum on [low, high]; returns the best point evaluated, `start` included. */
function goldenMax(
  low: number,
  high: number,
  start: number,
  startValue: number,
  f: (x: number) => number,
  steps: number,
): { x: number; value: number } {
  let best = { x: start, value: startValue };
  if (!(high > low)) return best;
  let a = high - GOLDEN * (high - low);
  let b = low + GOLDEN * (high - low);
  let fa = f(a);
  let fb = f(b);
  for (let i = 0; i < steps; i++) {
    if (fa > best.value) best = { x: a, value: fa };
    if (fb > best.value) best = { x: b, value: fb };
    if (fa >= fb) {
      high = b;
      b = a;
      fb = fa;
      a = high - GOLDEN * (high - low);
      fa = f(a);
    } else {
      low = a;
      a = b;
      fa = fb;
      b = low + GOLDEN * (high - low);
      fb = f(b);
    }
  }
  if (fa > best.value) best = { x: a, value: fa };
  if (fb > best.value) best = { x: b, value: fb };
  return best;
}

/** Fields from the axis to the half field, no further apart than the spacing. */
function fieldSamples(halfFieldDeg: number): number[] {
  if (!(halfFieldDeg > 0)) return [0];
  const count = Math.max(Math.ceil(halfFieldDeg / FIELD_SPACING_DEG) + 1, MIN_FIELDS);
  return Array.from({ length: count }, (_, k) => (halfFieldDeg * k) / (count - 1));
}

/** Every step of a control between `low` and `high`, with its stations or keyframes themselves, in order. */
function controlValues(low: number, high: number, nodes: readonly number[]): number[] {
  const values = nodes.filter((value) => value >= low && value <= high);
  for (let k = 0; low + k * CONTROL_STEP < high + SAME_CONTROL; k++) {
    const value = Math.min(high, Math.round((low + k * CONTROL_STEP) / SAME_CONTROL) * SAME_CONTROL);
    if (!values.some((other) => Math.abs(other - value) < SAME_CONTROL)) values.push(value);
  }
  if (!values.some((other) => Math.abs(other - high) < SAME_CONTROL)) values.push(high);
  return values.sort((a, b) => a - b);
}

/** The highest local maxima of a zoom × focus grid of screened reaches, a flat stretch counted once. */
function highestPeaks(grid: readonly { reach: number }[][], count: number): { zi: number; fi: number }[] {
  const peaks: { zi: number; fi: number; reach: number }[] = [];
  grid.forEach((row, zi) =>
    row.forEach(({ reach }, fi) => {
      if (reach <= 0) return;
      /* A higher neighbour disqualifies a state; so does an equal one before it, so a flat stretch counts once. */
      for (let dz = -1; dz <= 1; dz++)
        for (let df = -1; df <= 1; df++) {
          const other = grid[zi + dz]?.[fi + df]?.reach ?? 0;
          if (other > reach || (other === reach && (dz < 0 || (dz === 0 && df < 0)))) return;
        }
      peaks.push({ zi, fi, reach });
    }),
  );
  return peaks.sort((a, b) => b.reach - a.reach).slice(0, count);
}

function describePoint(L: RuntimeLens, point: RimCutBeamPoint): string {
  const parts: string[] = [];
  const stations = L.isZoom ? (L.zoomPositions ?? []) : [];
  if (stations.length > 1) {
    const position = point.zoomT * (stations.length - 1);
    const station = Math.round(position);
    parts.push(
      Math.abs(position - station) < SAME_CONTROL
        ? `zoom position ${station} (${stations[station]} mm)`
        : `zoom ${point.zoomT.toFixed(3)}`,
    );
  }
  const keyframes = L.focusPositions.length > 0 ? L.focusPositions : [0];
  const keyframe = keyframes.findIndex((value) => Math.abs(value - point.focusT) < SAME_CONTROL);
  parts.push(keyframe >= 0 ? `focus keyframe ${keyframe}` : `focus ${point.focusT.toFixed(3)}`);
  parts.push(`field ${point.fieldDeg.toFixed(2)}°`);
  return parts.join(", ");
}
