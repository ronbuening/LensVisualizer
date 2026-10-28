/**
 * Dense rim-cut probe: a brute-force check of the rim-cut beam rule, independent of its search.
 *
 * For each inferred rim cut (one without `rimCutDepthSource`), it traces a dense grid of launches through the lens
 * with its inferred cuts removed, as `validateRimCutBeams` does. The grid covers every zoom and focus state in steps of
 * the control step, through every station and keyframe, and fields out to the half field at the field step. A ray
 * belongs to the beam when it reaches the image through the wide-open stop and every clear aperture. It counts
 * against each cut whose surface it meets beyond the cut radius, whatever other cut it also crosses. Fields launch as
 * the rule launches them: collimated from the object plane, or from the source's finite object point at a keyframe
 * with a finite conjugate.
 *
 * Per cut it prints the furthest grid ray and where it is; the furthest ray once each state's own is refined, by
 * stepping the field finely either side of it on a fine grid that follows the beam and bisecting the beam's edge there;
 * and how many grid rays the cut would clip and how many come within its margin.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs \
 *     scripts/audit-rim-cut-probe.mjs <data.ts> [--grid 41] [--field-step 0.5] [--control-step 0.05]
 *
 * The `--import` hook is required: the engine reaches value imports written with ".js" specifiers.
 */

import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const load = (path) => import(pathToFileURL(join(ROOT, path)).href);
const { default: buildLens, ingestLens } = await load("src/optics/buildLens.ts");
const { prepareRuntimeState } = await load("src/optics/state/runtimeAdapters.ts");
const { computeAnalysisFieldGeometryAtState, entrancePupilAtState, solveChiefRayForRuntimeLens } = await load(
  "src/optics/state/fieldAdapters.ts",
);
const { tracingHalfFieldAtZoom } = await load("src/optics/state/stationTables.ts");
const { wideOpenStopAtZoom } = await load("src/optics/state/apertureStop.ts");
const { launchSurfaceForFieldDeg, projectionLaunchSlopeForField } = await load("src/optics/field/projection.ts");
const { prepareEngineTrace } = await load("src/optics/trace/rayAdapters.ts");
const { mirrorSymmetricAboutMeridian } = await load("src/optics/trace/symmetry.ts");
const { AIMED_PUPIL_RESIDUAL_TOLERANCE, aimedLaunchFrameRay } = await load("src/optics/analysis/pupils/aimedPupil.ts");
const { mtfFiniteConjugate, mtfFiniteObjectPoint } = await load("src/optics/analysis/mtf/mtfConjugates.ts");
const { compileCanonicalUncached } = await load("src/optics/prescription/compileCanonical.ts");
const { canonicalLensFromRuntime } = await load("src/optics/prescription/identity.ts");
const { runtimeView } = await load("src/optics/prescription/runtimeView.ts");

/** Clearance the rule asks of an inferred cut: a floor in mm and a share of the cut radius. */
const MARGIN_MM = 0.05;
const MARGIN_FRACTION = 0.003;
/** Half-width of the launch grid around the chief launch, in entrance-pupil radii. */
const GRID_SPAN = 1.6;
/** Refinement: field steps either side of the best field, and grid points across the cell around the best ray. */
const REFINE_FIELDS = 10;
const REFINE_GRID = 21;
const SAME_CONTROL = 1e-9;

const argv = process.argv.slice(2);
const dataFile = argv[0];
const option = (name, fallback) => {
  const index = argv.indexOf(name);
  return index > 0 ? Number(argv[index + 1]) : fallback;
};
if (!dataFile) {
  console.error(
    "usage: node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-rim-cut-probe.mjs <data.ts> [--grid 41] [--field-step 0.5] [--control-step 0.05]",
  );
  process.exit(2);
}
const grid = option("--grid", 41);
const fieldStep = option("--field-step", 0.5);
const controlStep = option("--control-step", 0.05);

const file = (await import(pathToFileURL(resolve(dataFile)).href)).default;
const L = buildLens(ingestLens(file, { path: dataFile }).prescription);
const inferred = L.S.flatMap((surface, index) =>
  surface.rimCutDepthMm !== undefined && surface.rimCutDepthSource === undefined ? [index] : [],
);
if (inferred.length === 0 || L.isFoldedOptics) {
  console.log("No inferred rim cuts to probe.");
  process.exit(0);
}

/* The lens without its inferred cuts, compiled without the validator, as the rule builds it. */
const { prescription, provenance, attachedTeleconverter } = canonicalLensFromRuntime(L);
const labels = new Set(inferred.map((index) => L.S[index].label));
const U = runtimeView(
  compileCanonicalUncached(
    {
      ...prescription,
      surfaces: prescription.surfaces.map((surface) =>
        labels.has(surface.label) && surface.rimCutDepthSource === undefined
          ? Object.fromEntries(Object.entries(surface).filter(([key]) => key !== "rimCutDepthMm"))
          : surface,
      ),
    },
    provenance,
    attachedTeleconverter,
  ),
);

const base = prepareRuntimeState(L, 0, 0);
const cuts = inferred.map((index) => {
  const cutRadius = base.surfaces[index].rimCut.radius;
  return {
    index,
    label: L.S[index].label,
    cutRadius,
    margin: Math.max(MARGIN_MM, MARGIN_FRACTION * cutRadius),
    reach: 0,
    at: null,
    clipped: 0,
    withinMargin: 0,
  };
});
const slot = new Map(inferred.map((index, n) => [index, n]));

/** Every step of a control between its first and last node, with the nodes themselves. */
function controlValues(nodes) {
  const low = Math.min(...nodes);
  const high = Math.max(...nodes);
  const values = [...nodes];
  for (let value = low; value < high + SAME_CONTROL; value += controlStep) {
    const v = Math.min(high, value);
    if (!values.some((other) => Math.abs(other - v) < SAME_CONTROL)) values.push(v);
  }
  return values.sort((a, b) => a - b);
}

const stations =
  U.isZoom && (U.zoomPositions?.length ?? 0) > 1 ? U.zoomPositions.map((_, k, all) => k / (all.length - 1)) : [0];
const zooms = controlValues(stations);
const focuses = controlValues(U.focusPositions.length > 0 ? [...U.focusPositions] : [0]);

/** One state's tracer, launch scale and field range. */
function stateAt(zoomT, focusT) {
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
    /** Each cut's radius for a ray that reaches the image; null for one that is stopped. */
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
}

/** A field's launch ray builder and chief launch, or a reason it cannot be launched. */
function launchAt(s, fieldDeg) {
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
}

/** Trace a grid of `count` × `count` launches over a box; calls `visit` with each ray's launch and radii. */
function traceGrid(s, launch, center, half, count, symmetric, visit) {
  const xLow = symmetric ? Math.max(0, center[0] - half) : center[0] - half;
  for (let i = 0; i < count; i++) {
    const x = xLow + ((center[0] + half - xLow) * i) / (count - 1);
    for (let j = 0; j < count; j++) {
      const y = center[1] - half + (2 * half * j) / (count - 1);
      const radii = s.radii(launch.ray(x, y));
      if (radii) visit([x, y], radii);
    }
  }
}

const untraced = [];
let rays = 0;
/** Each cut's furthest grid ray at each state: refined below. */
const candidates = cuts.map(() => []);
for (const zoomT of zooms)
  for (const focusT of focuses) {
    const s = stateAt(zoomT, focusT);
    const count = Math.max(2, Math.ceil(s.halfFieldDeg / fieldStep) + 1);
    const cell = (2 * GRID_SPAN * s.scale) / (grid - 1);
    const top = cuts.map(() => null);
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
          if (radius > cut.reach) {
            cut.reach = radius;
            cut.at = { zoomT, focusT, fieldDeg };
          }
          if (radius > (top[n]?.radius ?? 0)) top[n] = { s, fieldDeg, point, radius, cell };
        });
      });
    }
    top.forEach((candidate, n) => candidate && candidates[n].push(candidate));
  }

/**
 * Refine one state's furthest grid ray for cut `n`: step the field either side of its own in tenths of the field step,
 * each on a fine grid over the cells around the furthest ray of the field before (a beam that shrinks or vanishes is
 * followed), then bisect the beam's edge around the furthest fine ray in sixteen directions.
 */
function refine(candidate, n, record) {
  const { s, cell } = candidate;
  const furthest = (launch, center) => {
    let found = null;
    traceGrid(s, launch, center, 2 * cell, REFINE_GRID, false, (point, radii) => {
      if (!found || radii[n] > found.radius) found = { point, radius: radii[n] };
    });
    return found;
  };
  for (const sign of [1, -1]) {
    let center = candidate.point;
    for (let k = sign > 0 ? 0 : 1; k <= REFINE_FIELDS; k++) {
      const fieldDeg = candidate.fieldDeg + (sign * fieldStep * k) / REFINE_FIELDS;
      if (fieldDeg < 0 || fieldDeg > s.halfFieldDeg) break;
      const launch = launchAt(s, fieldDeg);
      if (typeof launch === "string") break;
      const found = furthest(launch, center);
      if (!found) break;
      center = found.point;
      /* The furthest point lies on the beam's edge: bisect toward it from the fine ray in each direction. */
      let best = found.radius;
      for (let d = 0; d < 16; d++) {
        const angle = (d * Math.PI) / 8;
        let inside = 0;
        let outside = cell / 4;
        for (let i = 0; i < 40 && outside - inside > 1e-5; i++) {
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
}

/* Refine, for each cut, every state whose grid reach comes within 1 mm of the cut's highest grid reach. */
for (const [n, cut] of cuts.entries()) {
  cut.refined = cut.reach;
  cut.refinedAt = cut.at;
  for (const candidate of candidates[n]) {
    if (candidate.radius < cut.reach - 1) continue;
    refine(candidate, n, (radius, at) => {
      if (radius > cut.refined) {
        cut.refined = radius;
        cut.refinedAt = at;
      }
    });
  }
}

const where = (at) =>
  at ? `zoom ${at.zoomT.toFixed(3)}, focus ${at.focusT.toFixed(3)}, field ${at.fieldDeg.toFixed(3)}°` : "no ray";
console.log(
  `${L.source?.key ?? dataFile}: ${zooms.length} zoom × ${focuses.length} focus states, grid ${grid}, field step ${fieldStep}°, ${rays} rays in the beams`,
);
for (const cut of cuts) {
  const verdict = cut.refined > cut.cutRadius - cut.margin ? "INSIDE MARGIN" : "clear";
  console.log(
    `  ${cut.label.padEnd(5)} cut ${cut.cutRadius.toFixed(4)} margin ${cut.margin.toFixed(4)} grid reach ${cut.reach.toFixed(4)} at ${where(cut.at)}; refined ${cut.refined.toFixed(4)} at ${where(cut.refinedAt)}; clipped ${cut.clipped}, within margin ${cut.withinMargin}: ${verdict}`,
  );
}
if (untraced.length > 0)
  console.log(`  ${untraced.length} fields cannot be launched, first ${where(untraced[0])}: ${untraced[0].reason}`);
process.exitCode = cuts.some((cut) => cut.refined > cut.cutRadius - cut.margin) || untraced.length > 0 ? 1 : 0;
