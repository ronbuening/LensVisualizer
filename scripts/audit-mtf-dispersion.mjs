/**
 * Read-only audit of the nd/vd dispersion estimate behind spectral MTF. Run with the project's TS specifier hook:
 *
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf-dispersion.mjs <mode> [options]
 *
 *   census   Lenses whose default MTF chart uses estimated glasses, and how many lenses each candidate rule for the
 *            data warning's blur would cover.
 *   catalog  Distance of catalog glasses from the estimate's two normal lines, by Abbe number, with quadratic refits.
 *   degrade  Ground truth: on lenses whose glasses all have catalog data, estimate some glasses from nd/vd and record
 *            how far the default chart moves. Needs `--out=<dir>`; `--jobs=N` forks N shards and `--limit=N` caps the
 *            lenses of each shard.
 *   report   Summarise the JSON a `degrade` run wrote to `--out=<dir>`.
 *
 * Findings and the paused proposal these support: agent_docs/dispersion-estimate-exploration.md.
 */
import { spawn } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { wideOpenStopAtZoom } from "../src/optics/apertureStop.ts";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/compat.ts";
import { normalLinePdC, normalLinePgF } from "../src/optics/dispersion.ts";
import { allEntries, evaluateSellmeier } from "../src/optics/glassCatalog.ts";
import {
  assessMtfDataLimitations,
  assessMtfSupport,
  computeMtf,
  computeMtfSteps,
  resolveMtfSpectrum,
} from "../src/optics/mtf.ts";
import { MTF_ESTIMATED_DISPERSION_MAX_VD } from "../src/optics/analysis/mtfConstants.ts";
import { assessMtfSpectralData } from "../src/optics/analysis/mtfSupport.ts";
import { computeAnalysisFieldGeometryAtState, entrancePupilAtState, fopenAtZoom } from "../src/optics/optics.ts";
import { LINE_NM } from "../src/optics/spectralLines.ts";

/** Changes in a charted MTF value treated as visible and as material, on the 0-1 scale. */
const VISIBLE = 0.02;
const MATERIAL = 0.05;
/** Thresholds of the candidate rules for the warning's blur. */
const LOW_VD = 30;
const LONG_FOCAL_MM = 200;
const SENSITIVITY = 1.6;
/** Fields and frequencies compared by `degrade`: the tab's default frequencies at axis, half field and 80 %. */
const CHART_FIELDS = [0, 0.5, 0.8];
const CHART_FREQUENCIES = [10, 30];
/** Subsets also run with the refitted estimators. */
const REFIT_SUBSETS = new Set(["all", "one-random", "one-lowest-vd"]);
/** Subsets whose glasses are picked without regard to type, for scoring rules. */
const UNBIASED_SUBSETS = new Set(["all", "half", "quarter", "one-random"]);
const VD_BANDS = [10, 20, 25, 30, 35, 40, 50, 60, 66];

const [mode] = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const option = (name) => process.argv.find((arg) => arg.startsWith(`--${name}=`))?.slice(name.length + 3);

const mean = (values) => values.reduce((a, b) => a + b, 0) / values.length;
const rms = (values) => Math.sqrt(mean(values.map((v) => v * v)));
const percent = (part, whole) => `${whole ? Math.round((100 * part) / whole) : 0}%`;
const evaluate = (coefficients, x) => coefficients.reduce((sum, c, i) => sum + c * x ** i, 0);
function quantile(values, p) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))] : NaN;
}

const lensFiles = () =>
  readdirSync("src/lens-data", { recursive: true })
    .filter((file) => file.endsWith(".data.ts"))
    .sort();
async function loadLens(file) {
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  return data.visible === false ? null : data;
}

/** The MTF tab's default request at one zoom: photopic, diffraction-corrected, best axial focus, wide open. */
function chartOptions(L, zoomT, overrides) {
  const stop = wideOpenStopAtZoom(zoomT, L);
  const geometry = computeAnalysisFieldGeometryAtState(0, zoomT, L, 0);
  return {
    method: "diffraction",
    spectrum: "photopic",
    focus: "best-axial",
    maxGridSize: 64,
    pupilSemiDiameterMm: entrancePupilAtState(stop, 0, zoomT, L, geometry, 0).epSD,
    stopSemiDiameterMm: stop,
    ...overrides,
  };
}

/** Catalog partial dispersions of one glass, and the Abbe number its authored index keeps under index anchoring. */
function catalogPartials(entry, authoredNd) {
  const [nd, nC, nF, ng] = [LINE_NM.d, LINE_NM.C, LINE_NM.F, LINE_NM.g].map((nm) => evaluateSellmeier(entry, nm));
  const span = nF - nC;
  return { vd: (nd - 1) / span, anchoredVd: (authoredNd - 1) / span, pgf: (ng - nF) / span, pdc: (nd - nC) / span };
}

/** Least-squares polynomial coefficients, lowest order first (Gauss-Jordan on the normal equations). */
function polyfit(xs, ys, degree) {
  const n = degree + 1;
  const rows = Array.from({ length: n }, () => new Array(n + 1).fill(0));
  xs.forEach((x, k) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) rows[i][j] += x ** (i + j);
      rows[i][n] += ys[k] * x ** i;
    }
  });
  for (let i = 0; i < n; i++) {
    const pivot = rows.slice(i).reduce((best, row) => (Math.abs(row[i]) > Math.abs(best[i]) ? row : best));
    rows[rows.indexOf(pivot)] = rows[i];
    rows[i] = pivot;
    for (let r = 0; r < n; r++) {
      if (r === i) continue;
      const factor = rows[r][i] / rows[i][i];
      for (let c = i; c <= n; c++) rows[r][c] -= factor * rows[i][c];
    }
  }
  return rows.map((row, i) => row[n] / row[i]);
}

/** Catalog glasses, and quadratic fits of both partial dispersions over the Abbe range the estimate is used for. */
function fitCatalog() {
  const glasses = allEntries()
    .map((entry) => catalogPartials(entry, evaluateSellmeier(entry, LINE_NM.d)))
    .filter((glass) => glass.vd > 10 && glass.vd < 100); // drops entries without a usable visible-range fit
  const fitted = glasses.filter((glass) => glass.vd <= MTF_ESTIMATED_DISPERSION_MAX_VD);
  const vds = fitted.map((glass) => glass.vd);
  return {
    glasses,
    fitted,
    pgf: polyfit(
      vds,
      fitted.map((glass) => glass.pgf),
      2,
    ),
    pdc: polyfit(
      vds,
      fitted.map((glass) => glass.pdc),
      2,
    ),
  };
}

/**
 * Paraxial focus shift, in mm, per unit error in each glass's partial dispersion: the glass's share of axial color,
 * its marginal-ray weight times (n - 1) / vd, scaled by f squared. A thin lens gives f / vd. Also returns the focal
 * length of the state.
 */
function partialDispersionSensitivity(state, vdOf) {
  const { surfaces, z } = state;
  let y = 1;
  let nu = 0;
  let n = 1;
  const invariant = [];
  const height = [];
  surfaces.forEach((surface, i) => {
    const curvature = Math.abs(surface.R) > 1e9 ? 0 : 1 / surface.R;
    invariant.push(nu + n * y * curvature);
    height.push(y);
    nu -= y * curvature * (surface.nd - n);
    n = surface.nd;
    y += (z[i + 1] !== undefined ? z[i + 1] - z[i] : 0) * (nu / n);
  });
  const focalLengthMm = Math.abs(n / nu);
  const perGlass = new Map();
  for (let i = 0; i + 1 < surfaces.length; i++) {
    const { nd, elemId } = surfaces[i];
    const vd = vdOf(elemId);
    if (nd === 1 || !vd) continue;
    const weight = (invariant[i] * height[i] - invariant[i + 1] * height[i + 1]) / nd;
    perGlass.set(elemId, (perGlass.get(elemId) ?? 0) + (weight * focalLengthMm ** 2 * (nd - 1)) / vd);
  }
  return { focalLengthMm, perGlass };
}

/** Elements with a refracting medium that are drawn (rear plates are left out, as the data warning does). */
const drawnGlasses = (L, state) =>
  L.data.elements.filter(
    (element) => !element.synthetic && state.surfaces.some((s) => s.nd !== 1 && s.elemId === element.id),
  );

/* ── census ── */

async function census() {
  const tenths = Array.from({ length: 11 }, (_, i) => i / 10);
  const charts = [];
  const reach = { lenses: 0, lensesWithoutDPgF: 0, glasses: 0, withDPgF: 0, eLine: 0 };
  let lenses = 0;
  for (const file of lensFiles()) {
    const data = await loadLens(file);
    if (!data) continue;
    let L;
    let state;
    try {
      L = buildLens(data);
      state = prepareRuntimeState(L, 0, 0);
    } catch {
      continue;
    }
    lenses++;
    // Every glass on the estimate, charted or not, rear plates included: what a change to the estimate would touch.
    const onEstimate = new Set(
      state.lens.dispersion.flatMap((d, i) => (d.quality === "abbe" ? [state.surfaces[i].elemId] : [])),
    );
    const estimatedAnywhere = L.data.elements.filter((element) => onEstimate.has(element.id));
    if (estimatedAnywhere.length) reach.lenses++;
    if (estimatedAnywhere.some((element) => element.dPgF === undefined)) reach.lensesWithoutDPgF++;
    reach.glasses += estimatedAnywhere.length;
    reach.withDPgF += estimatedAnywhere.filter((element) => element.dPgF !== undefined).length;
    reach.eLine += estimatedAnywhere.filter((element) => element.indexReference === "e").length;

    const { spectrum } = resolveMtfSpectrum(state, "photopic");
    let options;
    try {
      options = chartOptions(L, 0, { spectrum, maxGridSize: 32, fieldFractions: tenths });
    } catch {
      continue; // no sequential pupil to size the request from; such lenses have no chart either
    }
    const support = assessMtfSupport(state, options);
    if (!support.available) continue;
    // The first step carries the field axis and the focus, which is all the data gaps need.
    const result = computeMtfSteps(state, options).next().value;
    const gaps = assessMtfDataLimitations(state, {
      preferredSpectrum: "photopic",
      spectrum,
      referenceWavelengthNm: support.referenceWavelengthNm,
      result,
    })
      // Non-blocking notes never blur a chart, which is what this census counts.
      .filter((gap) => gap.blocking)
      .map((gap) => gap.kind);
    const glasses = drawnGlasses(L, state);
    const estimatedIds = new Set(assessMtfSpectralData(state).estimatedElementIds);
    const estimated = glasses.filter((element) => estimatedIds.has(element.id));
    let longestFocalMm = 0;
    let sensitivity = 0;
    const authoredVd = new Map(L.data.elements.map((element) => [element.id, element.vd]));
    for (const zoomT of L.isZoom ? [0, 1] : [0]) {
      const zoomState = zoomT === 0 ? state : prepareRuntimeState(L, 0, zoomT);
      const { focalLengthMm, perGlass } = partialDispersionSensitivity(zoomState, (id) => authoredVd.get(id));
      longestFocalMm = Math.max(longestFocalMm, focalLengthMm);
      const shifts = estimated.map((element) => perGlass.get(element.id) ?? 0);
      if (shifts.length)
        sensitivity = Math.max(sensitivity, (rms(shifts) * Math.sqrt(shifts.length)) / fopenAtZoom(zoomT, L));
    }
    charts.push({
      gaps,
      glasses: glasses.length,
      vds: estimated.map((element) => element.vd),
      thickest: Math.max(
        0,
        ...estimated.map((element) => {
          const i = state.surfaces.findIndex((s) => s.elemId === element.id && s.nd !== 1);
          return state.z[i + 1] - state.z[i];
        }),
      ),
      longestFocalMm,
      sensitivity,
    });
  }

  const flagged = charts.filter((chart) => chart.gaps.includes("estimated-dispersion"));
  const otherGap = (chart) => chart.gaps.some((kind) => kind !== "estimated-dispersion");
  const share = (chart) => chart.vds.length / chart.glasses;
  console.log(
    `${lenses} lenses, ${charts.length} with an MTF chart; ${charts.filter((c) => c.gaps.length).length} list a data gap`,
  );
  for (const kind of ["estimated-dispersion", "short-field", "reference-only", "image-plane", "scale"])
    console.log(`  ${kind.padEnd(22)} ${charts.filter((chart) => chart.gaps.includes(kind)).length}`);
  console.log(
    `\nEstimated dispersion: ${flagged.length} lenses, ${flagged.filter((c) => !otherGap(c)).length} with no other gap`,
  );
  const shares = [
    ["one glass", (c) => c.vds.length === 1],
    ["up to 10% of glasses", (c) => share(c) <= 0.1],
    ["10-25%", (c) => share(c) > 0.1 && share(c) <= 0.25],
    ["25-50%", (c) => share(c) > 0.25 && share(c) <= 0.5],
    ["over 50%, not all", (c) => share(c) > 0.5 && share(c) < 1],
    ["all", (c) => share(c) === 1],
  ];
  for (const [label, test] of shares) console.log(`  ${label.padEnd(22)} ${flagged.filter(test).length}`);
  console.log(`  every estimated glass thinner than 0.5 mm: ${flagged.filter((c) => c.thickest < 0.5).length}`);
  const vds = flagged.flatMap((chart) => chart.vds);
  console.log(`\n${vds.length} estimated glasses by Abbe number:`);
  VD_BANDS.slice(0, -1).forEach((lo, i) => {
    const hi = VD_BANDS[i + 1];
    console.log(`  vd ${lo}-${hi}`.padEnd(14), vds.filter((vd) => vd >= lo && vd < hi).length);
  });

  const lowVd = (chart) => chart.vds.some((vd) => vd < LOW_VD);
  const long = (chart) => chart.longestFocalMm >= LONG_FOCAL_MM;
  const rules = [
    ["any estimated glass (current)", () => true],
    ["never", () => false],
    ["25% or more of glasses", (c) => share(c) >= 0.25],
    ["50% or more of glasses", (c) => share(c) >= 0.5],
    [`a glass with vd < ${LOW_VD}`, lowVd],
    [`lens reaches ${LONG_FOCAL_MM} mm`, long],
    [`vd < ${LOW_VD}, or reaches ${LONG_FOCAL_MM} mm`, (c) => lowVd(c) || long(c)],
    [`vd < ${LOW_VD}, or sensitivity >= ${SENSITIVITY}`, (c) => lowVd(c) || c.sensitivity >= SENSITIVITY],
  ];
  console.log("\nLenses blurred under each rule for estimated dispersion (for it / in total):");
  for (const [label, test] of rules) {
    const forIt = flagged.filter(test).length;
    const total = charts.filter((c) => otherGap(c) || (c.gaps.includes("estimated-dispersion") && test(c))).length;
    console.log(`  ${label.padEnd(36)} ${String(forIt).padStart(3)} / ${total}`);
  }
  console.log(
    `\nReach of the estimate (rear plates and uncharted lenses included): ${reach.lenses} lenses, ` +
      `${reach.lensesWithoutDPgF} with a glass lacking dPgF; ${reach.glasses} glasses, ${reach.withDPgF} with dPgF, ` +
      `${reach.eLine} e-line referenced`,
  );
}

/* ── catalog ── */

function catalog() {
  const fit = fitCatalog();
  const bands = (label, deviation) => {
    console.log(label);
    VD_BANDS.slice(0, -1).forEach((lo, i) => {
      const hi = VD_BANDS[i + 1];
      const values = fit.glasses.filter((glass) => glass.vd >= lo && glass.vd < hi).map(deviation);
      if (!values.length) return;
      const spread = Math.sqrt(mean(values.map((v) => (v - mean(values)) ** 2)));
      console.log(
        `  vd ${lo}-${hi}`.padEnd(12),
        `n=${String(values.length).padStart(3)}  mean ${mean(values).toFixed(4).padStart(7)}  sd ${spread.toFixed(4)}`,
      );
    });
  };
  console.log(
    `${fit.glasses.length} catalog glasses, ${fit.fitted.length} with vd <= ${MTF_ESTIMATED_DISPERSION_MAX_VD}\n`,
  );
  bands("P_g,F minus the Schott normal line:", (glass) => glass.pgf - normalLinePgF(glass.vd));
  bands("\nP_d,C minus the engine's fitted line:", (glass) => glass.pdc - normalLinePdC(glass.vd));
  const residuals = (label, values) => {
    const low = values.filter((_, i) => fit.fitted[i].vd < LOW_VD);
    console.log(`  ${label.padEnd(30)} rms ${rms(values).toFixed(4)}   rms for vd < ${LOW_VD}: ${rms(low).toFixed(4)}`);
  };
  console.log(`\nResiduals over the vd <= ${MTF_ESTIMATED_DISPERSION_MAX_VD} glasses:`);
  residuals(
    "P_g,F, Schott line",
    fit.fitted.map((glass) => glass.pgf - normalLinePgF(glass.vd)),
  );
  residuals(
    "P_g,F, quadratic fit",
    fit.fitted.map((glass) => glass.pgf - evaluate(fit.pgf, glass.vd)),
  );
  residuals(
    "P_d,C, engine line",
    fit.fitted.map((glass) => glass.pdc - normalLinePdC(glass.vd)),
  );
  residuals(
    "P_d,C, quadratic fit",
    fit.fitted.map((glass) => glass.pdc - evaluate(fit.pdc, glass.vd)),
  );
  const coefficients = (values) => values.map((c) => c.toPrecision(6)).join(", ");
  console.log(
    `\nQuadratic coefficients in vd, constant first:\n  P_g,F  ${coefficients(fit.pgf)}\n  P_d,C  ${coefficients(fit.pdc)}`,
  );
}

/* ── degrade ── */

/** Deterministic generator seeded from a string, so reruns estimate the same glasses. */
function seededRandom(text) {
  let seed = 2166136261;
  for (const char of text) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  seed >>>= 0;
  return () => (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32;
}

function shuffled(items, random) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * One element as an estimator sees it. `line` is the current estimate (nd and vd only). `fit-pgf` moves g onto the
 * fitted P_g,F curve through an authored dPgF. `fit` and `control` author all three line indices, from the fitted
 * curves and from the engine's own lines; `control` must reproduce `line`, which checks that the line-index path is
 * the Abbe path with other partials.
 */
function estimatedElement(element, vd, estimator, fit) {
  const bare = { ...element, glass: undefined, dPgF: undefined, nC: undefined, nF: undefined, ng: undefined, vd };
  if (estimator === "line") return bare;
  if (estimator === "fit-pgf") return { ...bare, dPgF: evaluate(fit.pgf, vd) - normalLinePgF(vd) };
  const [pdc, pgf] =
    estimator === "control" ? [normalLinePdC(vd), normalLinePgF(vd)] : [evaluate(fit.pdc, vd), evaluate(fit.pgf, vd)];
  const span = (element.nd - 1) / vd;
  const nC = element.nd - pdc * span;
  return { ...bare, nC, nF: nC + span, ng: nC + span + pgf * span };
}

/** Charted values per field, sagittal then tangential; null where the field has no curve. */
const chartValues = (result) =>
  result.fields.map((field) =>
    field.status === "converged" || field.status === "unconverged" ? [...field.sagittal, ...field.tangential] : null,
  );

function chartChange(base, other) {
  const changes = base.flatMap((values, i) =>
    values && other[i] ? values.map((v, j) => Math.abs(v - other[i][j])) : [],
  );
  return changes.length ? { max: Math.max(...changes), mean: mean(changes) } : null;
}

async function degradeShard(shard, shards, outDir, limit) {
  const fit = fitCatalog();
  const cases = [];
  let lenses = 0;
  let controlChecked = false;
  for (const [index, file] of lensFiles().entries()) {
    if (index % shards !== shard) continue;
    if (lenses >= limit) break;
    const data = await loadLens(file);
    if (!data) continue;
    lenses++;
    let L;
    try {
      L = buildLens(data);
    } catch {
      continue;
    }
    for (const zoomT of L.isZoom ? [0, 1] : [0]) {
      const state = prepareRuntimeState(L, 0, zoomT);
      const options = chartOptions(L, zoomT, { fieldFractions: CHART_FIELDS, frequenciesPerMm: CHART_FREQUENCIES });
      if (!assessMtfSupport(state, options).available) continue;
      const spectral = assessMtfSpectralData(state);
      // Only lenses with catalog data for every glass have a ground truth to compare against.
      if (spectral.blocker || spectral.estimatedGlasses > 0) continue;
      const entries = new Map();
      state.lens.dispersion.forEach((dispersion, i) => {
        if (dispersion.quality === "sellmeier" && dispersion.glassEntry)
          entries.set(state.surfaces[i].elemId, dispersion.glassEntry);
      });
      const glasses = drawnGlasses(L, state).filter((element) => entries.has(element.id));
      // Index anchoring keeps the authored nd on the catalog curve, so the true F-C span is the catalog's.
      const vds = new Map(
        glasses.map((element) => [element.id, catalogPartials(entries.get(element.id), element.nd).anchoredVd]),
      );
      const eligible = glasses.filter((element) => vds.get(element.id) <= MTF_ESTIMATED_DISPERSION_MAX_VD);
      if (!eligible.length) continue;
      const base = chartValues(computeMtf(state, options));
      if (!base[0]) continue;
      const { focalLengthMm, perGlass } = partialDispersionSensitivity(state, (id) => vds.get(id));
      const fNumber = fopenAtZoom(zoomT, L);
      const order = shuffled(eligible, seededRandom(`${data.key}:${zoomT}`));
      const subsets = {
        all: eligible,
        half: order.slice(0, Math.max(1, Math.round(eligible.length / 2))),
        quarter: order.slice(0, Math.max(1, Math.round(eligible.length / 4))),
        "one-random": order.slice(0, 1),
        "one-lowest-vd": [eligible.reduce((a, b) => (vds.get(b.id) < vds.get(a.id) ? b : a))],
      };
      for (const [subset, members] of Object.entries(subsets)) {
        const ids = new Set(members.map((element) => element.id));
        const change = (estimator) => {
          const elements = data.elements.map((element) =>
            ids.has(element.id) ? estimatedElement(element, vds.get(element.id), estimator, fit) : element,
          );
          const degraded = prepareRuntimeState(buildLens({ ...data, elements }), 0, zoomT);
          if (assessMtfSpectralData(degraded).blocker) return null;
          return chartChange(base, chartValues(computeMtf(degraded, options)));
        };
        const shifts = members.map((element) => perGlass.get(element.id) ?? 0);
        const common = {
          key: data.key,
          zoomT,
          focalLengthMm,
          subset,
          count: members.length,
          share: members.length / glasses.length,
          vds: members.map((element) => vds.get(element.id)),
          sensitivity: (rms(shifts) * Math.sqrt(shifts.length)) / fNumber,
        };
        for (const estimator of REFIT_SUBSETS.has(subset) ? ["line", "fit-pgf", "fit"] : ["line"]) {
          const result = change(estimator);
          if (result) cases.push({ ...common, estimator, ...result });
        }
        if (!controlChecked && subset === "all") {
          const [line, control] = [change("line"), change("control")];
          if (!line || !control || Math.abs(line.max - control.max) > 1e-9)
            throw new Error("authored line indices no longer reproduce the nd/vd estimate; `fit` needs another route");
          controlChecked = true;
        }
      }
    }
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, `degrade-${shard}.json`), JSON.stringify(cases));
  console.log(`shard ${shard + 1} of ${shards}: ${cases.length} cases from ${lenses} lenses`);
}

async function degrade() {
  const outDir = option("out");
  if (!outDir) throw new Error("degrade needs --out=<dir>");
  const limit = Number(option("limit") ?? Infinity);
  const shard = option("shard");
  if (shard) {
    const [index, shards] = shard.split("/").map(Number);
    await degradeShard(index, shards, outDir, limit);
    return;
  }
  mkdirSync(outDir, { recursive: true });
  for (const file of readdirSync(outDir)) if (/^degrade-\d+\.json$/.test(file)) rmSync(join(outDir, file));
  const jobs = Number(option("jobs") ?? 1);
  const args = (i) => ["degrade", `--shard=${i}/${jobs}`, `--out=${outDir}`, `--limit=${limit}`];
  const script = fileURLToPath(import.meta.url);
  const exits = await Promise.all(
    Array.from(
      { length: jobs },
      (_, i) =>
        new Promise((done) => {
          spawn(process.execPath, [...process.execArgv, script, ...args(i)], { stdio: "inherit" }).on("exit", done);
        }),
    ),
  );
  if (exits.some((code) => code !== 0)) process.exitCode = 1;
}

/* ── report ── */

function spearman(xs, ys) {
  const ranks = (values) => {
    const order = values.map((value, i) => [value, i]).sort((a, b) => a[0] - b[0]);
    const out = new Array(values.length);
    order.forEach(([, i], rank) => (out[i] = rank));
    return out;
  };
  const [rx, ry] = [ranks(xs), ranks(ys)];
  const centre = (xs.length - 1) / 2;
  const dot = (a, b) => a.reduce((sum, value, i) => sum + (value - centre) * (b[i] - centre), 0);
  return dot(rx, ry) / Math.sqrt(dot(rx, rx) * dot(ry, ry));
}

function report() {
  const outDir = option("out");
  if (!outDir) throw new Error("report needs --out=<dir>");
  const cases = readdirSync(outDir)
    .filter((file) => /^degrade-\d+\.json$/.test(file))
    .flatMap((file) => JSON.parse(readFileSync(join(outDir, file), "utf8")));
  const line = cases.filter((c) => c.estimator === "line");
  const row = (label, group) => {
    const values = group.map((c) => c.max);
    const over = (threshold) => values.filter((v) => v >= threshold).length;
    console.log(
      `  ${label.padEnd(34)} n=${String(values.length).padStart(4)}  median ${quantile(values, 0.5).toFixed(3)}  ` +
        `p90 ${quantile(values, 0.9).toFixed(3)}  p95 ${quantile(values, 0.95).toFixed(3)}  ` +
        `max ${Math.max(...values).toFixed(3)}  >=${VISIBLE}: ${over(VISIBLE)} (${percent(over(VISIBLE), values.length)})  ` +
        `>=${MATERIAL}: ${over(MATERIAL)} (${percent(over(MATERIAL), values.length)})`,
    );
  };
  const states = new Set(cases.map((c) => `${c.key}|${c.zoomT}`));
  console.log(
    `${states.size} lens states on ${new Set(cases.map((c) => c.key)).size} lenses with catalog data for every glass`,
  );
  console.log("Change = largest shift in any charted value: 10 and 30 lp/mm, S and T, at axis, 50% and 80% field.\n");

  console.log("Current estimate, by which glasses are estimated:");
  for (const subset of ["all", "half", "quarter", "one-random", "one-lowest-vd"])
    row(
      subset,
      line.filter((c) => c.subset === subset),
    );

  console.log("\nCurrent estimate, one glass, by its Abbe number:");
  const singles = [
    ...new Map(line.filter((c) => c.count === 1).map((c) => [`${c.key}|${c.zoomT}|${c.vds[0]}`, c])).values(),
  ];
  VD_BANDS.slice(0, -1).forEach((lo, i) => {
    const group = singles.filter((c) => c.vds[0] >= lo && c.vds[0] < VD_BANDS[i + 1]);
    if (group.length) row(`vd ${lo}-${VD_BANDS[i + 1]}`, group);
  });
  const quiet = singles.filter((c) => c.vds[0] >= LOW_VD && c.focalLengthMm < LONG_FOCAL_MM);
  row(`vd >= ${LOW_VD}, lens under ${LONG_FOCAL_MM} mm`, quiet);

  console.log("\nCurrent estimate, every eligible glass, by focal length:");
  const focalBands = [0, 85, LONG_FOCAL_MM, Infinity];
  focalBands.slice(0, -1).forEach((lo, i) => {
    const hi = focalBands[i + 1];
    row(
      hi === Infinity ? `${lo} mm and longer` : `${lo}-${hi} mm`,
      line.filter((c) => c.subset === "all" && c.focalLengthMm >= lo && c.focalLengthMm < hi),
    );
  });

  const pool = line.filter((c) => UNBIASED_SUBSETS.has(c.subset));
  console.log(`\nRank correlation with the change (${pool.length} cases, glasses picked without regard to type):`);
  const predictors = [
    ["share of glasses estimated", (c) => c.share],
    ["number of glasses estimated", (c) => c.count],
    ["focal length", (c) => c.focalLengthMm],
    ["focus sensitivity / f-number", (c) => c.sensitivity],
  ];
  for (const [label, value] of predictors)
    console.log(
      `  ${label.padEnd(30)} ${spearman(
        pool.map(value),
        pool.map((c) => c.max),
      ).toFixed(2)}`,
    );

  const lowVd = (c) => c.vds.some((vd) => vd < LOW_VD);
  const rules = [
    ["any estimated glass", () => true],
    ["25% or more of glasses", (c) => c.share >= 0.25],
    ["50% or more of glasses", (c) => c.share >= 0.5],
    [`a glass with vd < ${LOW_VD}`, lowVd],
    [`vd < ${LOW_VD}, or ${LONG_FOCAL_MM} mm and longer`, (c) => lowVd(c) || c.focalLengthMm >= LONG_FOCAL_MM],
    [`vd < ${LOW_VD}, or sensitivity >= ${SENSITIVITY}`, (c) => lowVd(c) || c.sensitivity >= SENSITIVITY],
  ];
  const reaching = (group, threshold) => group.filter((c) => c.max >= threshold).length;
  console.log(
    `\nCandidate rules on the same cases (${reaching(pool, VISIBLE)} reach ${VISIBLE}, ${reaching(pool, MATERIAL)} reach ${MATERIAL}):`,
  );
  for (const [label, test] of rules) {
    const flagged = pool.filter(test);
    const missed = pool.filter((c) => !test(c));
    console.log(
      `  ${label.padEnd(34)} flags ${percent(flagged.length, pool.length).padStart(4)}  ` +
        `catches ${percent(reaching(flagged, VISIBLE), reaching(pool, VISIBLE)).padStart(4)} of ${VISIBLE}+, ` +
        `${percent(reaching(flagged, MATERIAL), reaching(pool, MATERIAL)).padStart(4)} of ${MATERIAL}+  ` +
        `largest change let through ${missed.length ? Math.max(...missed.map((c) => c.max)).toFixed(3) : "none"}`,
    );
  }

  console.log("\nRefit against the current estimate, same lenses and glasses:");
  const refitGroups = [
    ["every eligible glass", (c) => c.subset === "all"],
    [`every eligible glass, ${LONG_FOCAL_MM} mm+`, (c) => c.subset === "all" && c.focalLengthMm >= LONG_FOCAL_MM],
    ["one random glass", (c) => c.subset === "one-random"],
    ["lowest-vd glass alone", (c) => c.subset === "one-lowest-vd"],
  ];
  const estimators = [
    ["line", "current normal lines"],
    ["fit-pgf", "fitted P_g,F only"],
    ["fit", "fitted P_g,F and P_d,C"],
  ];
  for (const [label, test] of refitGroups) {
    console.log(` ${label}`);
    for (const [estimator, name] of estimators)
      row(
        name,
        cases.filter((c) => c.estimator === estimator && test(c)),
      );
  }
  const caseId = (c) => `${c.key}|${c.zoomT}|${c.subset}`;
  const byCase = new Map(line.map((c) => [caseId(c), c.max]));
  const refit = cases.filter((c) => c.estimator === "fit" && byCase.has(caseId(c)));
  const delta = refit.map((c) => c.max - byCase.get(caseId(c)));
  console.log(
    `\nBoth fits against the current estimate: better by more than 0.002 in ${delta.filter((d) => d < -0.002).length} ` +
      `of ${refit.length} cases, worse in ${delta.filter((d) => d > 0.002).length}; largest regression ${Math.max(...delta).toFixed(3)}`,
  );
}

const modes = { census, catalog, degrade, report };
if (!modes[mode]) {
  console.error(
    `Usage: audit-mtf-dispersion.mjs <${Object.keys(modes).join("|")}> [--out=<dir>] [--jobs=N] [--limit=N]`,
  );
  process.exitCode = 1;
} else await modes[mode]();
