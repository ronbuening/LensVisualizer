/**
 * Field-coverage audit: does each lens's modeled analysis half-field reach its image-format corner?
 *
 * The analysis tabs (vignetting, pupils, coma, field curvature, distortion, MTF) and the Summary field of view sample
 * fields up to `computeAnalysisFieldGeometryAtState2().halfFieldDeg`. That half-field follows the real chief ray to
 * the format corner (imageCircleMm, or the imageFormat diagonal) unless a clear aperture clips the chief ray first.
 * For every visible lens and zoom station at infinity focus this script reports:
 *
 *   modeled   the analysis half-field and the image height its chief ray reaches, as a fraction of the corner
 *   stopped   what ends the field just past the modeled edge (see the diagnoses below)
 *   corner    the field whose unclipped chief ray reaches the corner, and every rim that clips that chief ray
 *
 * Diagnoses:
 *
 *   ok        the modeled edge reaches at least 99% of the corner
 *   clip      an authored clear aperture clips the chief ray at the modeled edge
 *   blocked   no chief ray can be aimed through the stop centre past the modeled edge; the rim named is the one
 *             the aimed rays leave on the way (a clip that shows up as a trace failure)
 *   plate     a synthetic rear-plate rim clips the chief ray (engine sizing, see expandRearPlates)
 *   declared  the lens declares a narrower rectilinear projection field (projection.fullFieldDeg / maxTraceFieldDeg)
 *   peak      chief-ray image height stops growing before the corner (extreme distortion)
 *   bound     the chief ray still clears every rim past the modeled edge (an engine bound stops short)
 *   failed    the chief ray fails without leaving any clear aperture (trace or solver failure)
 *
 * A short field is not automatically a data error. Many patents print a maximum image height below the format
 * half-diagonal and leave the corners to in-camera distortion correction; semi-diameters transcribed from such a
 * patent correctly stop the field there. Compare the modeled edge with the patent's image height before editing, and
 * follow agent_docs/patent-figure-sd-audit-procedure.md. Open rows live in agent_docs/sd-audit-queue.md, Section D.
 *
 * Chief rays are solved through the stop centre (solveChiefRay) and launched from just ahead of the first surface,
 * like the solver. Folded paths and fisheye projections are skipped: their field is declared, not traced.
 *
 * Read-only. Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-field-coverage.mjs [data.ts ...]
 *     --below=<fraction>   list stations under this coverage (default 0.9)
 *     --markdown           queue-table output
 *     --json=<path>        write every station as JSON
 *     --all                include hidden lenses
 */

import { readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const LENS_DIR = join(ROOT, "src", "lens-data");
const load = async (path) => import(pathToFileURL(join(ROOT, path)).href);

const buildLens = (await load("src/optics/buildLens.ts")).default;
const LENS_DEFAULTS = (await load("src/lens-data/defaults.ts")).default;
const { computeAnalysisFieldGeometryAtState2, computeFieldGeometryAtState2, solveChiefRay2 } =
  await load("src/optics/field/chiefRay.ts");
const { isFisheyeProjection2, rectilinearProjectionMaxTraceField2 } = await load("src/optics/field/projection.ts");
const { normalizeRuntimeLens } = await load("src/optics/prescription/normalizeLensData.ts");
const { prepareState } = await load("src/optics/state/prepareState.ts");
const { traceEngineRay2 } = await load("src/optics/trace/rayAdapters.ts");
const { IMAGE_FORMAT_BY_ID } = await load("src/utils/catalog/lensTaxonomy.ts");

const OK_COVERAGE = 0.99;
const FIELD_CEILING_DEG = 88.5;
const SCAN_STEP_DEG = 0.5;
/** How far past the modeled edge to look for what stopped it. */
const PAST_EDGE_DEG = 0.05;

/**
 * Chief-ray tracer for one prepared state.
 *
 * Solves each chief ray through the stop centre, then traces it to the image plane from a launch point just ahead of
 * the first surface (the solver's own lead), optionally with every clear aperture enforced.
 */
function chiefRayTracer(L, state, zoomT, geometry) {
  const first = state.surfaces[0];
  const lead = Math.max(1, Math.abs(first.profile.sag(first.sd ?? 0)) + 1);
  const imageTransfer = state.surfaces[state.surfaces.length - 1].d;
  const rayFor = (yLaunch, uField) => {
    const norm = Math.hypot(uField, 1);
    return {
      origin: [0, yLaunch - uField * lead, (state.z[0] ?? 0) - lead],
      direction: [0, uField / norm, 1 / norm],
    };
  };
  /* Rims are compared on the unclipped physical path. The engine's aperture-checked ghost trace stops refracting
   * after a clipped hit beyond a sphere's radius, so every clip it reports after that one would be spurious. */
  const clipMargin = state.lens.display.clipMargin;
  const clipsOf = (trace) =>
    trace.hits
      .filter((hit) => typeof state.surfaces[hit.surfaceIndex].sd === "number")
      .filter((hit) => hit.radius > state.surfaces[hit.surfaceIndex].sd * clipMargin + 1e-9)
      .map((hit) => ({
        label: hit.surfaceLabel,
        height: hit.radius,
        sd: state.surfaces[hit.surfaceIndex].sd,
        synthetic: Boolean(L.S[hit.surfaceIndex]?.synthetic),
      }));

  /* The analysis tabs trace whatever launch the solver returns, so the modeled edge accepts a fallback solve
   * (reported beside the coverage); every other probe needs a converged chief ray. */
  const chiefAt = (fieldDeg, checkApertures, acceptFallback = false) => {
    const solve = solveChiefRay2(fieldDeg, 0, zoomT, L, geometry, 0);
    const usable = solve.status === "converged" || (acceptFallback && Number.isFinite(solve.yLaunch));
    if (!usable || solve.vectorLaunch) {
      return { ok: false, solve, reason: `chief-ray solve ${solve.status}` };
    }
    const trace = traceEngineRay2(state, rayFor(solve.yLaunch, solve.uField), { ghost: true });
    if (trace.failureReason !== null) {
      const at = state.surfaces[trace.terminalSurfaceIndex + 1]?.label ?? "?";
      return { ok: false, solve, reason: `${trace.failureReason} at ${at}` };
    }
    return {
      ok: true,
      status: solve.status,
      height: Math.abs(trace.y + trace.uy * imageTransfer),
      clips: checkApertures ? clipsOf(trace) : [],
    };
  };

  /**
   * Rim left by the rays aimed at the stop centre when the solve fails.
   *
   * The solver keeps the launch that came nearest the stop centre. Launches just beyond it, toward the centre,
   * are the ones that failed; the first clear aperture such a ray leaves is what blocks the chief ray.
   */
  const blockingRim = (fieldDeg) => {
    const solve = solveChiefRay2(fieldDeg, 0, zoomT, L, geometry, 0);
    if (!Number.isFinite(solve.yLaunch) || !Number.isFinite(solve.uField) || solve.vectorLaunch) return null;
    const stopIndex = state.lens.stop.surfaceIndex;
    const stopHeight = (yLaunch) => {
      const trace = traceEngineRay2(state, rayFor(yLaunch, solve.uField), { stopAt: stopIndex });
      return trace.failureReason === null ? trace.y : null;
    };
    const nearest = stopHeight(solve.yLaunch);
    if (nearest === null) return null;
    const step = 1e-3 * Math.max(1, Math.abs(solve.yLaunch));
    const probe = stopHeight(solve.yLaunch + step);
    const direction = probe === null || Math.abs(probe) < Math.abs(nearest) ? 1 : -1;
    for (let k = 1; k <= 400; k++) {
      const trace = traceEngineRay2(state, rayFor(solve.yLaunch + direction * k * step, solve.uField), {
        ghost: true,
      });
      const [clip] = clipsOf(trace);
      if (clip) return clip;
      if (trace.failureReason !== null) {
        /* No surface reached counts as leaving the clear aperture of the surface it misses. */
        const missed = state.surfaces[trace.terminalSurfaceIndex + 1];
        return missed ? { label: missed.label, height: NaN, sd: missed.sd, synthetic: false, missed: true } : null;
      }
    }
    return null;
  };

  return { chiefAt, blockingRim };
}

/** Field whose unclipped chief ray reaches the corner, or the reason none does. */
function cornerField(chiefAt, fromDeg, fromHeight, corner) {
  const reachesCorner = (lo, hi) => {
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      const midTrace = chiefAt(mid, false);
      if (midTrace.ok && midTrace.height >= corner) hi = mid;
      else lo = mid;
    }
    return hi;
  };
  let prevDeg = fromDeg;
  let maxHeight = fromHeight;
  for (
    let deg = Math.floor(fromDeg / SCAN_STEP_DEG + 1) * SCAN_STEP_DEG;
    deg < FIELD_CEILING_DEG;
    deg += SCAN_STEP_DEG
  ) {
    const trace = chiefAt(deg, false);
    if (!trace.ok) {
      /* The solve or trace can fail just past the corner; look between the last good field and this one. */
      let lo = prevDeg;
      let hi = deg;
      for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) / 2;
        const midTrace = chiefAt(mid, false);
        if (!midTrace.ok) hi = mid;
        else if (midTrace.height >= corner) return { fieldDeg: reachesCorner(lo, mid), reason: null };
        else {
          lo = mid;
          maxHeight = Math.max(maxHeight, midTrace.height);
        }
      }
      return { fieldDeg: null, reason: `${trace.reason} past ${lo.toFixed(1)}° (${maxHeight.toFixed(2)} mm)` };
    }
    if (trace.height < maxHeight - 1e-6) {
      return { fieldDeg: null, reason: `image height peaks at ${maxHeight.toFixed(2)} mm` };
    }
    maxHeight = trace.height;
    if (trace.height >= corner) return { fieldDeg: reachesCorner(prevDeg, deg), reason: null };
    prevDeg = deg;
  }
  return { fieldDeg: null, reason: `no corner below ${FIELD_CEILING_DEG}°` };
}

/** What ends the modeled field: the first limit met just past the edge. */
function fieldStop(L, tracer, modeledDeg, edgeHeight) {
  const declaredDeg = rectilinearProjectionMaxTraceField2(L.projection);
  if (declaredDeg !== undefined && Math.abs(declaredDeg - modeledDeg) < 1e-6) {
    return { diagnosis: "declared", detail: `projection declares ${declaredDeg.toFixed(1)}°` };
  }
  const past = tracer.chiefAt(modeledDeg + PAST_EDGE_DEG, true);
  if (past.ok) {
    const [clip] = past.clips;
    if (clip) return { diagnosis: clip.synthetic ? "plate" : "clip", rim: clip };
    if (past.height <= edgeHeight) return { diagnosis: "peak", detail: "image height stops growing" };
    return { diagnosis: "bound", detail: "chief ray clears every rim" };
  }
  const rim = tracer.blockingRim(modeledDeg + PAST_EDGE_DEG);
  if (rim) return { diagnosis: rim.synthetic ? "plate" : "blocked", rim };
  return { diagnosis: "failed", detail: past.reason };
}

function auditStation(lens, L, zoomT, stationLabel) {
  const corner = (lens.imageCircleMm ?? IMAGE_FORMAT_BY_ID[lens.imageFormat].diagonalMm) / 2;
  const state = prepareState(normalizeRuntimeLens(L), 0, zoomT, 0);
  const raw = computeFieldGeometryAtState2(0, zoomT, L, 0);
  const modeledDeg = computeAnalysisFieldGeometryAtState2(0, zoomT, L, 0).halfFieldDeg;
  const tracer = chiefRayTracer(L, state, zoomT, raw);

  const edge = tracer.chiefAt(modeledDeg, false, true);
  const edgeHeight = edge.ok ? edge.height : NaN;
  const coverage = edgeHeight / corner;
  const cornerSolve = !Number.isFinite(edgeHeight)
    ? { fieldDeg: null, reason: edge.reason }
    : edgeHeight >= corner
      ? { fieldDeg: modeledDeg, reason: null }
      : cornerField(tracer.chiefAt, modeledDeg, edgeHeight, corner);
  const cornerTrace = cornerSolve.fieldDeg === null ? null : tracer.chiefAt(cornerSolve.fieldDeg, true);
  const stop =
    coverage >= OK_COVERAGE
      ? { diagnosis: "ok" }
      : fieldStop(L, tracer, modeledDeg, Number.isFinite(edgeHeight) ? edgeHeight : 0);

  return {
    station: stationLabel,
    zoomT,
    corner,
    modeledDeg,
    rawDeg: raw.halfFieldDeg,
    edgeHeight,
    edgeSolve: edge.ok ? edge.status : (edge.solve?.status ?? null),
    coverage,
    diagnosis: stop.diagnosis,
    rim: stop.rim ?? null,
    detail: stop.detail ?? null,
    cornerDeg: cornerSolve.fieldDeg,
    cornerNote: cornerSolve.reason ?? (cornerTrace && !cornerTrace.ok ? cornerTrace.reason : null),
    cornerClips: cornerTrace?.ok ? cornerTrace.clips : [],
  };
}

/** `zoomLabels` name only the slider ends, so stations are labelled by position, with a word label on the ends. */
function stationLabel(L, index) {
  const position = `${Number(L.zoomPositions[index].toFixed(2))} mm`;
  const last = L.zoomPositions.length - 1;
  const end = index === 0 ? L.zoomLabels?.[0] : index === last ? L.zoomLabels?.at(-1) : undefined;
  if (!end) return position;
  return /\d/.test(end) ? end : `${end} ${position}`;
}

async function auditLens(file, includeHidden) {
  const lens = { ...LENS_DEFAULTS, ...(await import(pathToFileURL(file).href)).default };
  const rel = relative(LENS_DIR, file);
  const base = { rel, key: lens.key, name: lens.name };
  if (lens.visible === false && !includeHidden) return { ...base, skipped: "hidden" };
  if (lens.opticalPath) return { ...base, skipped: "folded optical path" };
  if (!(IMAGE_FORMAT_BY_ID[lens.imageFormat] || lens.imageCircleMm))
    return { ...base, skipped: `no usable imageFormat (${String(lens.imageFormat)})` };
  let L;
  try {
    L = buildLens(lens);
  } catch (error) {
    return { ...base, skipped: `buildLens failed: ${error.message}` };
  }
  if (isFisheyeProjection2(L.projection)) return { ...base, skipped: "fisheye projection" };

  const count = L.isZoom ? L.zoomPositions.length : 1;
  const stations = [];
  for (let i = 0; i < count; i++) {
    const zoomT = count === 1 ? 0 : i / (count - 1);
    stations.push(auditStation(lens, L, zoomT, L.isZoom ? stationLabel(L, i) : ""));
  }
  return { ...base, format: lens.imageCircleMm ? `${lens.imageCircleMm} mm circle` : lens.imageFormat, stations };
}

function allLensFiles() {
  return readdirSync(LENS_DIR, { recursive: true })
    .filter((name) => typeof name === "string" && name.endsWith(".data.ts"))
    .map((name) => join(LENS_DIR, name))
    .sort();
}

const pct = (value) => (Number.isFinite(value) ? `${(value * 100).toFixed(0)}%` : "n/a");
const deg = (value) => (value === null || !Number.isFinite(value) ? "—" : `${value.toFixed(1)}°`);
const mm = (value) => (Number.isFinite(value) ? `${value.toFixed(2)} mm` : "n/a");
const rimText = (rim) =>
  rim.missed
    ? `${rim.label} (ray misses the surface, sd ${rim.sd})`
    : `${rim.label}${rim.synthetic ? " (plate)" : ""} ${rim.height.toFixed(2)} > ${rim.sd}`;
function stopText(station) {
  if (station.rim) return `${station.diagnosis} at ${rimText(station.rim)}`;
  return station.detail ? `${station.diagnosis}: ${station.detail}` : station.diagnosis;
}
function cornerText(station) {
  if (station.cornerDeg === null) return `unreachable (${station.cornerNote})`;
  if (!station.cornerClips.length) return `${deg(station.cornerDeg)}, clear`;
  const [first] = station.cornerClips;
  const more = station.cornerClips.length > 1 ? ` +${station.cornerClips.length - 1}` : "";
  return `${deg(station.cornerDeg)}, clipped at ${rimText(first)}${more}`;
}

const args = process.argv.slice(2);
const markdown = args.includes("--markdown");
const includeHidden = args.includes("--all");
const jsonPath = args.find((arg) => arg.startsWith("--json="))?.slice("--json=".length);
const below = Number(args.find((arg) => arg.startsWith("--below="))?.slice("--below=".length) ?? 0.9);
const named = args.filter((arg) => !arg.startsWith("--"));
const files = named.length ? named.map((arg) => resolve(arg)) : allLensFiles();

const results = [];
for (const file of files) results.push(await auditLens(file, includeHidden));
if (jsonPath) writeFileSync(jsonPath, `${JSON.stringify(results, null, 1)}\n`);

const audited = results.filter((result) => result.stations);
const rows = audited.flatMap((lens) => lens.stations.map((station) => ({ lens, station })));
const flagged = rows
  .filter(({ station }) => !(station.coverage >= below))
  .sort((a, b) => (a.station.coverage || 0) - (b.station.coverage || 0));

if (markdown) {
  console.log("| Lens | File | Station | Modeled edge / corner | Stopped by | Corner chief ray |");
  console.log("|---|---|---|---|---|---|");
  for (const { lens, station } of flagged) {
    console.log(
      `| ${lens.name} | \`${lens.rel}\` | ${station.station || "—"} | ${deg(station.modeledDeg)} → ${mm(station.edgeHeight)} / ${mm(station.corner)} (${pct(station.coverage)}) | ${stopText(station)} | ${cornerText(station)} |`,
    );
  }
} else {
  for (const { lens, station } of flagged) {
    const where = station.station ? ` @ ${station.station}` : "";
    console.log(`${pct(station.coverage).padStart(5)}  ${station.diagnosis.padEnd(8)}  ${lens.name}${where}`);
    const solveNote = station.edgeSolve === "converged" ? "" : ` (edge solve ${station.edgeSolve})`;
    console.log(
      `        modeled ${deg(station.modeledDeg)} → ${mm(station.edgeHeight)} of ${mm(station.corner)}${solveNote} · stopped by ${stopText(station)} · corner ${cornerText(station)}`,
    );
  }
  const counts = {};
  for (const { station } of rows) {
    const coverage = station.coverage;
    const bucket = !Number.isFinite(coverage)
      ? "unsolved"
      : coverage >= OK_COVERAGE
        ? "≥99%"
        : coverage >= 0.9
          ? "90–99%"
          : coverage >= 0.7
            ? "70–90%"
            : coverage >= 0.5
              ? "50–70%"
              : "<50%";
    counts[bucket] = (counts[bucket] ?? 0) + 1;
  }
  const diagnoses = {};
  for (const { station } of flagged) diagnoses[station.diagnosis] = (diagnoses[station.diagnosis] ?? 0) + 1;
  const flaggedLenses = new Set(flagged.map(({ lens }) => lens.key)).size;
  console.log("");
  console.log(
    `${audited.length} lenses · ${rows.length} stations · ${["≥99%", "90–99%", "70–90%", "50–70%", "<50%", "unsolved"]
      .map((bucket) => `${bucket} ${counts[bucket] ?? 0}`)
      .join(" · ")}`,
  );
  console.log(
    `${flagged.length} stations (${flaggedLenses} lenses) below ${pct(below)}: ${Object.entries(diagnoses)
      .map(([name, count]) => `${name} ${count}`)
      .join(" · ")}`,
  );
  const skipped = results.filter((result) => result.skipped);
  console.log(`${skipped.length} skipped`);
  for (const lens of skipped) console.log(`    skipped: ${lens.name ?? lens.rel} — ${lens.skipped}`);
}
