/**
 * Aperture census: does each lens pass the axial beam its stated f-number names?
 *
 * For every visible lens and zoom station at infinity focus, wide open, this script reports:
 *
 *   stated    `nominalFno` at the station
 *   traced    the stated value scaled by (stated entrance-pupil radius ÷ the largest on-axis ray height that clears
 *             the iris and every clear aperture)
 *   limiter   what stops the next ray: the iris, a rim, or a trace failure at the surface named
 *
 * Diagnoses (stations more than `--over` away from the stated value, 3 % by default):
 *
 *   rim       a clear aperture clips the stated axial beam, so the lens is traced slower than its label
 *   trace     no rim clips the beam, but the next ray cannot be continued: it is totally reflected at the surface
 *             named, or it leaves a surface beyond the next one's vertex plane (`noBracket`)
 *   iris      the iris itself is not the stated one: `zoomApertureModel: "fixed-iris"`, a published
 *             `zoomStopSemiDiameters` schedule, an embedded glass stop that keeps its authored radius, or a derived
 *             iris at its paraxial radius because the stated marginal ray cannot be real-traced to the stop
 *   failed    no usable on-axis ray reaches the image plane; the limiter names where a near-axis ray stops
 *
 * A rim-limited row is not automatically a data error. Check whether the semi-diameter is printed in the source or
 * was inferred, then follow agent_docs/patent-figure-sd-audit-procedure.md ("a clipped stated beam"): an inferred rim
 * rises only to the height the stated beam needs, on the surfaces that clip, and an element the patent figure draws
 * with a square rim keeps both faces at one height. `--raise` prints both values. Open rows live in
 * agent_docs/sd-audit-queue.md, Section I.
 *
 * Folded paths are skipped: their aperture is annular. Read-only. Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-aperture.mjs [data.ts ...]
 *     --over=<fraction>    list stations whose traced f-number differs by more than this (default 0.03)
 *     --markdown           queue-table output
 *     --raise              instead of the census, list per lens the smallest semi-diameter raises that pass the
 *                          stated beam at every station, and for each element whose two faces share one value now
 *                          and would then differ, the height a square-cut rim would carry (a proposal table; nothing
 *                          is written)
 *     --json=<path>        write every station as JSON
 *     --all                include hidden lenses in the full census (a named file is always audited)
 */

import { readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const LENS_DIR = join(ROOT, "src", "lens-data");
const load = async (path) => import(pathToFileURL(join(ROOT, path)).href);

const buildLens = (await load("src/optics/buildLens.ts")).default;
const { prepareRuntimeState } = await load("src/optics/compat.ts");
const { traceEngineRay2 } = await load("src/optics/trace/rayAdapters.ts");

const args = process.argv.slice(2);
const flag = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
const OVER = Number(flag("over") ?? 0.03);
const MARKDOWN = args.includes("--markdown");
const JSON_PATH = flag("json");
const ALL = args.includes("--all");
const RAISE = args.includes("--raise");
/** A raise above this share is outside what a patent drawing can confirm or deny; it needs the figure read. */
const RAISE_REVIEW = 0.15;
const SCAN_STEPS = 64;
/** Share of the stated pupil radius at which a ray must still pass for the lens to have an axial beam at all. */
const NEAR_AXIS = 1e-3;
const BISECTIONS = 40;

/**
 * Largest on-axis ray height that clears the iris and every clear aperture, and the surface the next ray leaves.
 *
 * Rims are compared on the unclipped (ghost) path, in ray order, so the first event is the one that limits the ray.
 * A ghost trace runs on unrefracted past a failed refraction; nothing after that hit is read.
 */
function axialBeam(state, statedRadius) {
  const first = state.surfaces[0];
  const lead = Math.max(1, Math.abs(first.profile.sag(first.sd ?? 0)) + 1);
  const firstClip = (height) => {
    const trace = traceEngineRay2(
      state,
      { origin: [0, height, (state.z[0] ?? 0) - lead], direction: [0, 0, 1] },
      { ghost: true },
    );
    for (const hit of trace.hits) {
      const sd = state.surfaces[hit.surfaceIndex].sd;
      if (typeof sd === "number" && hit.radius > sd * (1 + 1e-9)) {
        return { label: hit.surfaceLabel, index: hit.surfaceIndex };
      }
      if (hit.failureReason) {
        return { label: `${hit.surfaceLabel} (${hit.failureReason})`, index: hit.surfaceIndex, failed: true };
      }
    }
    if (trace.failureReason === null) return null;
    /* No hit failed, so the ray missed the surface after the last one it reached. */
    const index = trace.terminalSurfaceIndex + 1;
    return { label: `${state.surfaces[index]?.label ?? "?"} (${trace.failureReason})`, index, failed: true };
  };
  const nearAxis = firstClip(NEAR_AXIS * statedRadius);
  if (nearAxis) return { radius: null, limiter: nearAxis };
  const ceiling = 2 * Math.max(statedRadius, first.sd ?? 0);
  let pass = 0;
  let fail = null;
  for (let step = 1; step <= SCAN_STEPS; step++) {
    const height = (ceiling * step) / SCAN_STEPS;
    if (firstClip(height)) {
      fail = height;
      break;
    }
    pass = height;
  }
  if (fail === null) return { radius: ceiling, limiter: null };
  for (let i = 0; i < BISECTIONS; i++) {
    const middle = (pass + fail) / 2;
    if (firstClip(middle)) fail = middle;
    else pass = middle;
  }
  return { radius: pass, limiter: firstClip(fail) };
}

const requested = args.filter((arg) => arg.endsWith(".data.ts")).map((arg) => resolve(arg));
const files = requested.length
  ? requested
  : readdirSync(LENS_DIR, { recursive: true })
      .filter((file) => file.endsWith(".data.ts"))
      .sort()
      .map((file) => join(LENS_DIR, file));

/** Radius at which the stated on-axis ray meets each surface, keyed by label; null when the ray cannot be traced. */
function statedRayHeights(state, statedRadius) {
  const first = state.surfaces[0];
  const lead = Math.max(1, Math.abs(first.profile.sag(first.sd ?? 0)) + 1);
  const trace = traceEngineRay2(
    state,
    { origin: [0, statedRadius, (state.z[0] ?? 0) - lead], direction: [0, 0, 1] },
    { ghost: true },
  );
  if (trace.failureReason !== null) return null;
  return new Map(trace.hits.map((hit) => [hit.surfaceLabel, hit.radius]));
}

/** Smallest value at the authored precision that is not below `need`. */
function roundUpLike(authored, need) {
  const decimals = Math.min(3, Math.max(1, String(authored).split(".")[1]?.length ?? 0));
  const scale = 10 ** decimals;
  return Math.ceil(need * scale - 1e-9) / scale;
}

const rows = [];
const raises = [];
let lenses = 0;
let folded = 0;
for (const path of files) {
  const data = (await import(pathToFileURL(path).href)).default;
  if (data.visible === false && !ALL && requested.length === 0) continue;
  const L = buildLens(data);
  if (L.isFoldedOptics) {
    folded++;
    continue;
  }
  lenses++;
  const stations = L.isZoom ? data.zoomPositions.length : 1;
  const stopLabel = L.S[L.stopIdx].label;
  const needs = new Map();
  let untraceable = false;
  for (let zi = 0; zi < stations; zi++) {
    const zoomT = stations > 1 ? zi / (stations - 1) : 0;
    const state = prepareRuntimeState(L, 0, zoomT);
    const stated = Array.isArray(data.nominalFno) ? data.nominalFno[zi] : data.nominalFno;
    const statedRadius = L.zoomEPs?.[zi] ?? L.EP.epSD;
    if (RAISE) {
      const heights = statedRayHeights(state, statedRadius);
      if (heights === null) untraceable = true;
      else for (const [label, radius] of heights) needs.set(label, Math.max(needs.get(label) ?? 0, radius));
    }
    const beam = axialBeam(state, statedRadius);
    const traced = beam.radius === null ? null : (stated * statedRadius) / beam.radius;
    const limiter = beam.limiter;
    const diagnosis =
      traced === null
        ? "failed"
        : Math.abs(traced / stated - 1) <= OVER
          ? "ok"
          : limiter?.failed
            ? "trace"
            : limiter === null || limiter.index === L.stopIdx
              ? "iris"
              : "rim";
    rows.push({
      key: data.key,
      name: data.name,
      file: relative(LENS_DIR, path),
      station: stations > 1 ? `${Number(data.zoomPositions[zi].toFixed(2))} mm` : "",
      stated,
      traced,
      ratio: traced === null ? null : traced / stated,
      limiter: limiter?.label ?? "none",
      diagnosis,
      stopLabel,
      stopModel: data.zoomStopSemiDiameters
        ? "published schedule"
        : data.zoomApertureModel === "fixed-iris"
          ? "fixed iris"
          : state.surfaces[L.stopIdx].stopPlacement === "inside-element"
            ? "embedded stop"
            : "derived",
    });
  }
  if (RAISE) {
    const changes = data.surfaces
      .filter((surface) => surface.label !== "STO" && typeof surface.sd === "number")
      .map((surface) => ({ label: surface.label, from: surface.sd, need: needs.get(surface.label) ?? 0 }))
      .filter((change) => change.need > change.from * (1 + 1e-9))
      .map((change) => ({ ...change, to: roundUpLike(change.from, change.need) }));
    const wideOpen = Array.isArray(data.nominalFno) ? data.nominalFno[0] : data.nominalFno;
    const flags = [
      untraceable && "stated ray cannot be traced at some station",
      data.apertureDesign === undefined && "no apertureDesign recorded",
      data.apertureDesign !== undefined && wideOpen / data.apertureDesign < 0.995 && "nominalFno faster than design",
      data.sourceErrata?.some((entry) => entry.status === "unresolved") && "unresolved source contradiction",
      changes.some((change) => change.to / change.from - 1 > RAISE_REVIEW) && "raise over 15 %: read the figure",
    ].filter(Boolean);
    /* Per element whose two faces share one value now and would end apart: the height a square-cut rim would carry. */
    const after = new Map(data.surfaces.map((surface) => [surface.label, surface.sd]));
    for (const change of changes) after.set(change.label, change.to);
    const raised = new Set(changes.map((change) => change.label));
    const squares = [];
    for (let i = 0; i < data.surfaces.length - 1; i++) {
      const front = data.surfaces[i];
      const rear = data.surfaces[i + 1];
      if (!(front.elemId > 0) || front.label === "STO" || rear.label === "STO") continue;
      if (!raised.has(front.label) && !raised.has(rear.label)) continue;
      if (front.sd !== rear.sd) continue;
      const a = after.get(front.label);
      const b = after.get(rear.label);
      if (typeof a === "number" && typeof b === "number" && a !== b) {
        squares.push({ front: front.label, rear: rear.label, value: Math.max(a, b) });
      }
    }
    if (changes.length > 0 || untraceable) {
      raises.push({ key: data.key, name: data.name, file: relative(LENS_DIR, path), changes, squares, flags });
    }
  }
}

if (JSON_PATH) writeFileSync(JSON_PATH, JSON.stringify(RAISE ? raises : rows, null, 2));

if (RAISE) {
  /* Proposal only: the smallest per-surface raise that lets the stated on-axis ray through at every station. */
  raises.sort(
    (a, b) => Math.max(0, ...b.changes.map((c) => c.to / c.from)) - Math.max(0, ...a.changes.map((c) => c.to / c.from)),
  );
  console.log(
    "| Lens | File | Surfaces: semi-diameter now → needed | Square rim: faces → one height | Largest raise | Flags |",
  );
  console.log("|---|---|---|---|---:|---|");
  for (const entry of raises) {
    const largest = Math.max(0, ...entry.changes.map((change) => change.to / change.from - 1));
    console.log(
      `| ${entry.name.replaceAll("|", "\\|")} | \`${entry.file}\` | ${entry.changes.map((change) => `${change.label}: ${change.from} → ${change.to}`).join(", ") || "none"} | ${entry.squares.map((square) => `${square.front}/${square.rear}: ${square.value}`).join(", ") || "none"} | ${(largest * 100).toFixed(1)} % | ${entry.flags.join("; ")} |`,
    );
  }
  const clean = raises.filter((entry) => entry.flags.length === 0);
  console.error(
    `${raises.length} lenses have a surface below the stated on-axis ray; ${clean.length} with no flag ` +
      `(${clean.reduce((sum, entry) => sum + entry.changes.length, 0)} surfaces), ${raises.length - clean.length} flagged`,
  );
  process.exit(0);
}

const listed = rows.filter((row) => row.diagnosis !== "ok");
const byLens = (diagnosis) => new Set(listed.filter((row) => row.diagnosis === diagnosis).map((row) => row.key)).size;
const fNumber = (value) => (value === null ? "n/a" : `f/${value.toFixed(2)}`);
const percent = (ratio) => (ratio === null ? "n/a" : `${ratio >= 1 ? "+" : ""}${((ratio - 1) * 100).toFixed(1)} %`);
listed.sort((a, b) => Math.abs((b.ratio ?? Infinity) - 1) - Math.abs((a.ratio ?? Infinity) - 1));

if (MARKDOWN) {
  console.log("| Lens | File | Station | Stated | Traced | Difference | Limiter | Diagnosis | Status |");
  console.log("|---|---|---|---:|---:|---:|---|---|---|");
  for (const row of listed) {
    console.log(
      `| ${row.name.replaceAll("|", "\\|")} | \`${row.file}\` | ${row.station || "prime"} | ${fNumber(row.stated)} | ${fNumber(row.traced)} | ${percent(row.ratio)} | ${row.limiter} | ${row.diagnosis}${row.stopModel === "derived" ? "" : ` (${row.stopModel})`} | todo |`,
    );
  }
} else {
  for (const row of listed) {
    console.log(
      `${row.diagnosis.padEnd(6)} ${percent(row.ratio).padStart(9)}  ${fNumber(row.stated)} -> ${fNumber(row.traced)}  ${row.limiter.padEnd(8)} ${row.key}${row.station ? ` @ ${row.station}` : ""}${row.stopModel === "derived" ? "" : ` [${row.stopModel}]`}`,
    );
  }
}
console.error(
  `${lenses} lenses, ${rows.length} stations (${folded} folded skipped): ${rows.length - listed.length} within ${(OVER * 100).toFixed(0)} % of the stated f-number; ` +
    ["rim", "trace", "iris", "failed"]
      .map((diagnosis, i) => {
        const stationCount = listed.filter((row) => row.diagnosis === diagnosis).length;
        return `${diagnosis} ${stationCount}${i ? "" : " stations"} / ${byLens(diagnosis)}${i ? "" : " lenses"}`;
      })
      .join(", "),
);
