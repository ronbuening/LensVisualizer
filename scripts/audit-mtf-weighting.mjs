/**
 * Read-only comparison of stop-uniform and incident-flux MTF, with a launch-plane geometric witness.
 * Run through the TS specifier hook; --lens=<catalog key>, --grid=<cells across>, --json.
 * Every method uses one product-weighted best-axial plane per station/aperture; no product defaults change.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { createAnalysisRequest } from "../src/optics/analysis.ts";
import { buildLens, prepareRuntimeState } from "../src/optics/buildLens.ts";
import { entrancePupilAtState } from "../src/optics/fieldGeometry.ts";
import { fopenAtZoom, stopSemiDiameterForFNumber } from "../src/optics/optics.ts";
import {
  assessMtfSupport,
  expandMtfFootprint,
  findAxialBestFocus,
  findMtfFieldFootprint,
  geometricOtf,
  landingPoints,
  mtfChiefHeight,
  mtfIncidentFluxWeights,
  mtfNearestImagePlaneZ,
  otfMagnitude,
  prepareMtfFieldLaunch,
  resolveMtfFieldTargets,
  resolveMtfGeometry,
  shearedOtf,
  traceMtfLaunchPlaneBundle,
  traceMtfStopBundle,
} from "../src/optics/mtf.ts";

const ROOT = join(import.meta.dirname, "..");
const FREQUENCIES = [10, 30, 50];
const FIELDS = [0, 0.7, 1];
const CUTS = ["sagittal", "tangential"];
const DEFAULT_STATIONS = [
  { file: "sigma/Sigma35mmf14DGHSMA.data.ts" },
  { file: "sigma/Sigma35mmf12DGIIArt.data.ts" },
  { file: "sony/SonyFE20mmf18G.data.ts" },
  { file: "sony/SonyFE14mmf18GM.data.ts" },
  { file: "nikon/NikonNikkorZ50f12.data.ts" },
  { file: "sony/SonyFE50mmf12GM.data.ts" },
  { file: "canon/CanonSerenar50mmf18.data.ts" },
  { file: "nikon/NikonNikkor105f14E.data.ts" },
  { file: "canon/CanonEF135mmf2LUSM.data.ts" },
  { file: "sony/SonyFE1224mmf28GM.data.ts" },
  { file: "sony/SonyFE1224mmf28GM.data.ts", zoomT: 1 },
  { file: "fujifilm/FujifilmGF80mmf17R.data.ts", focusT: 1 },
];

function parseOptions(argv) {
  let grid = 256,
    lens,
    json = false;
  for (const arg of argv) {
    if (arg === "--json") json = true;
    else if (arg.startsWith("--lens=")) lens = arg.slice(7);
    else if (arg.startsWith("--grid=")) grid = Number(arg.slice(7));
    else throw new Error(`Unknown option: ${arg}`);
  }
  if (!Number.isInteger(grid) || grid < 8 || grid > 1024) throw new Error("--grid must be an integer from 8 to 1024.");
  if (lens === "") throw new Error("--lens requires a catalog key.");
  return { grid, lens, json };
}

function keyForFile(file) {
  return readFileSync(join(ROOT, "src", "lens-data", file), "utf8").match(/^\s*key:\s*"([^"]+)"/m)?.[1];
}

function stationsFor(key) {
  if (!key) return DEFAULT_STATIONS;
  const defaults = DEFAULT_STATIONS.filter(({ file }) => keyForFile(file) === key);
  if (defaults.length) return defaults;
  const file = readdirSync(join(ROOT, "src", "lens-data"), { recursive: true })
    .filter((file) => file.endsWith(".data.ts"))
    .find((file) => keyForFile(file) === key);
  if (!file) throw new Error(`Unknown lens key: ${key}`);
  return [{ file }];
}

function diagnostics(bundle) {
  return {
    rays: bundle.rays.length,
    failed: bundle.failed,
    unaimed: bundle.unaimed,
    unresolvedInBeam: bundle.unresolvedInBeam,
    openBorders: bundle.openBorders,
  };
}

function requireBundle(bundle, label) {
  if (!bundle || !bundle.rays.length) throw new Error(`No transmitted ${label} bundle.`);
  return bundle;
}

function launchPlaneReference(state, options, support, launch, grid, line) {
  let footprint = findMtfFieldFootprint(state, options, support, launch);
  if (!footprint) throw new Error("No launch-plane footprint.");
  let reference;
  let expansions = 0;
  for (;;) {
    reference = requireBundle(
      traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, grid, line),
      "launch-plane",
    );
    if (!Object.values(reference.openBorders).some(Boolean) || expansions === 2) break;
    footprint = expandMtfFootprint(footprint, reference.openBorders);
    expansions++;
  }
  // The native finite witness integrates dΩ for an isotropic point source. Lambert's source cosine supplies
  // cos(theta) dΩ independently of the stop-map Jacobian, for a source surface normal to +z.
  if (launch.objectPoint)
    reference.rays = reference.rays.map((ray) => ({
      ...ray,
      weight: ray.weight * Math.abs(ray.trace.input.direction[2]),
    }));
  return { reference, expansions };
}

function geometric(bundle, planeZ, chief) {
  // A common phase origin also permits complex-OTF comparisons without a large field-height phase.
  const points = landingPoints(bundle, planeZ).map((p) => ({ ...p, x: p.x - chief.x, y: p.y - chief.y }));
  if (points.length !== bundle.rays.length) throw new Error("Missing image landing.");
  return Object.fromEntries(
    CUTS.map((cut, i) => [cut, otfMagnitude(geometricOtf(points, FREQUENCIES, i ? "y" : "x"))]),
  );
}

function diffraction(bundle, planeZ, wavelengthMm) {
  const points = landingPoints(bundle, planeZ);
  const moved = { ...bundle, rays: bundle.rays.map((ray, i) => ({ ...ray, ...points[i] })) };
  const otf = shearedOtf(moved, bundle.chief, wavelengthMm, FREQUENCIES);
  return Object.fromEntries(CUTS.map((cut) => [cut, otfMagnitude(otf[cut])]));
}

function difference(a, b) {
  return Object.fromEntries(CUTS.map((cut) => [cut, a[cut].map((value, i) => value - b[cut][i])]));
}

async function measureStation(station, grid) {
  const { file, zoomT = 0, focusT = 0 } = station;
  const data = (await import(pathToFileURL(join(ROOT, "src", "lens-data", file)).href)).default;
  const lens = buildLens(data, { path: `src/lens-data/${file}` });
  const state = prepareRuntimeState(lens, focusT, zoomT);
  const label = `${data.key}${zoomT ? "/tele" : ""}${focusT ? "/finite" : ""}`;
  const apertures = [];
  for (const fNumber of [fopenAtZoom(zoomT, lens), 8]) {
    const stopSemiDiameterMm = stopSemiDiameterForFNumber(fNumber, zoomT, lens);
    const pupilSemiDiameterMm = entrancePupilAtState(stopSemiDiameterMm, focusT, zoomT, lens).epSD;
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: pupilSemiDiameterMm,
      currentPhysStopSD: stopSemiDiameterMm,
    });
    const options = {
      method: "geometric",
      spectrum: "reference",
      focus: "best-axial",
      pupilSemiDiameterMm,
      stopSemiDiameterMm,
    };
    const support = assessMtfSupport(request, options);
    const aperture = { fNumber, fields: [] };
    apertures.push(aperture);
    try {
      if (!support.available) throw new Error(support.message);
      const geometry = resolveMtfGeometry(request, options);
      if (!geometry) throw new Error("No field geometry.");
      const targets = resolveMtfFieldTargets(
        state,
        geometry,
        FIELDS,
        mtfChiefHeight(state, options, support, false),
        !support.conjugate,
      );
      const line = support.spectralLines[0];
      const axialLaunch = prepareMtfFieldLaunch(state, options, support, 0);
      if (!axialLaunch?.aim) throw new Error("No stop-aimed axial launch.");
      const axial = requireBundle(
        traceMtfStopBundle(state, options, support, axialLaunch, Math.min(grid, 64), line),
        "axial",
      );
      const best = findAxialBestFocus(
        [{ bundle: axial, weight: 1 }],
        state.imgZ,
        [10, 20, 30, 40, 50],
        mtfNearestImagePlaneZ(state),
      );
      if (!best) throw new Error("No best-axial plane.");
      aperture.planeShiftMm = best.shiftMm;
      aperture.focusGrid = Math.min(grid, 64);
      aperture.wavelengthNm = line.wavelengthNm;
      aperture.conjugate = support.conjugate ?? null;
      const planeZ = state.imgZ + best.shiftMm;
      for (const target of targets) {
        const field = { fraction: target.fraction, angleDeg: target.fieldAngleDeg };
        aperture.fields.push(field);
        try {
          if (target.outsideModel || target.fieldAngleDeg === null)
            throw new Error("Field outside modeled coverage or unresolved.");
          const launch = prepareMtfFieldLaunch(state, options, support, target.fieldAngleDeg);
          if (!launch?.aim) throw new Error("No stop-aimed field launch.");
          const stop = requireBundle(traceMtfStopBundle(state, options, support, launch, grid, line), "stop");
          const weights = mtfIncidentFluxWeights(stop);
          const missing = Array.from(weights).filter((weight) => !Number.isFinite(weight) || !(weight > 0)).length;
          if (missing) throw new Error(`${missing} incident-flux weights lack a positive finite stencil.`);
          const flux = { ...stop, rays: stop.rays.map((ray, i) => ({ ...ray, weight: ray.weight * weights[i] })) };
          const { reference, expansions } = launchPlaneReference(state, options, support, launch, grid, line);
          const chief = stop.chief;
          field.geometric = {
            product: geometric(stop, planeZ, chief),
            incidentFlux: geometric(flux, planeZ, chief),
            launchPlane: geometric(reference, planeZ, chief),
          };
          field.geometric.productMinusReference = difference(field.geometric.product, field.geometric.launchPlane);
          field.geometric.fluxMinusReference = difference(field.geometric.incidentFlux, field.geometric.launchPlane);
          field.diffraction = {
            product: diffraction(stop, planeZ, line.wavelengthNm * 1e-6),
            incidentFlux: diffraction(flux, planeZ, line.wavelengthNm * 1e-6),
          };
          field.diffraction.fluxMinusProduct = difference(field.diffraction.incidentFlux, field.diffraction.product);
          field.diagnostics = {
            stop: diagnostics(stop),
            launchPlane: diagnostics(reference),
            footprintExpansions: expansions,
          };
          if (Object.values(reference.openBorders).some(Boolean))
            field.warning = "Launch-plane guard band remains open after two expansions.";
          if (stop.failed || stop.unaimed || reference.failed)
            field.warning = "Unresolved rays remain; the comparisons omit unresolved flux.";
        } catch (error) {
          field.unavailable = error.message;
        }
      }
    } catch (error) {
      aperture.unavailable = error.message;
    }
  }
  return { key: data.key, label, file, zoomT, focusT, apertures };
}

function summarize(stations) {
  const rows = [];
  for (const fraction of FIELDS) {
    for (const [i, frequency] of FREQUENCIES.entries()) {
      const values = stations.flatMap((station) =>
        station.apertures.flatMap((aperture) =>
          aperture.fields
            .filter((field) => field.fraction === fraction && field.geometric)
            .map((field) => CUTS.map((cut) => Math.abs(field.geometric.productMinusReference[cut][i]))),
        ),
      );
      const absolute = values.flat();
      rows.push({
        field: fraction,
        frequency,
        samples: values.length,
        cuts: absolute.length,
        maxAbs: absolute.length ? Math.max(...absolute) : null,
        meanAbs: absolute.length ? absolute.reduce((a, b) => a + b, 0) / absolute.length : null,
        above005: values.filter((cuts) => Math.max(...cuts) > 0.005).length,
        above010: values.filter((cuts) => Math.max(...cuts) > 0.01).length,
      });
    }
  }
  return rows;
}

function pair(values, i) {
  return values ? CUTS.map((cut) => values[cut][i].toFixed(6)).join(" / ") : "unavailable";
}

function perLens(stations) {
  return stations.flatMap((station) =>
    station.apertures.map((aperture) => {
      const values = (group, metric) =>
        aperture.fields.flatMap((field) => (field[group] ? CUTS.flatMap((cut) => field[group][metric][cut]) : []));
      const maximum = (values) => (values.length ? Math.max(...values.map(Math.abs)) : null);
      return {
        lens: station.label,
        fNumber: aperture.fNumber,
        productMaxAbs: maximum(values("geometric", "productMinusReference")),
        fluxMaxAbs: maximum(values("geometric", "fluxMinusReference")),
        diffractionMaxAbs: maximum(values("diffraction", "fluxMinusProduct")),
        unavailable:
          aperture.unavailable ??
          aperture.fields
            .filter((field) => field.unavailable)
            .map((field) => `${field.fraction}: ${field.unavailable}`)
            .join("; "),
      };
    }),
  );
}

const started = performance.now();
const options = parseOptions(process.argv.slice(2));
const stations = [];
for (const station of stationsFor(options.lens)) {
  console.error(`Weighting: ${station.file}, zoom=${station.zoomT ?? 0}, focus=${station.focusT ?? 0}`);
  stations.push(await measureStation(station, options.grid));
}
const report = {
  grid: options.grid,
  spectrum: "reference",
  frequenciesPerMm: FREQUENCIES,
  fields: FIELDS,
  focus:
    "One product-weighted best-axial plane, 64-cell focus grid (or --grid if smaller), 10/20/30/40/50 lp/mm; shared by both methods and all weights/fields.",
  finiteSource: "Lambertian surface normal to +z; launch-plane dΩ weights also receive the source cosine.",
  diffractionReference:
    "The diffraction pair has no independent reference here; only the weights change in the same sheared estimator (amplitude = sqrt(weight)).",
  samplingNote:
    "Fixed grids are quadrature estimates, not convergence claims. Unresolved rays/open borders and flux-minus-reference residuals remain visible.",
  elapsedSeconds: (performance.now() - started) / 1000,
  summary: summarize(stations),
  perLens: perLens(stations),
  stations,
};
if (options.json) console.log(JSON.stringify(report, null, 2));
else {
  console.log(`Reference spectrum; fixed ${report.grid} cells; ${report.focus}`);
  console.log(report.finiteSource);
  console.log(report.diffractionReference);
  console.log(report.samplingNote);
  for (const station of stations) {
    console.log(`\n${station.label}`);
    console.table(
      station.apertures.flatMap((aperture) =>
        aperture.fields.flatMap((field) =>
          FREQUENCIES.map((frequency, i) => ({
            fNumber: aperture.fNumber,
            field: field.fraction,
            frequency,
            "product S/T": pair(field.geometric?.product, i),
            "flux S/T": pair(field.geometric?.incidentFlux, i),
            "reference S/T": pair(field.geometric?.launchPlane, i),
            "product-ref S/T": pair(field.geometric?.productMinusReference, i),
            "flux-ref S/T": pair(field.geometric?.fluxMinusReference, i),
            "diffraction flux-product S/T": pair(field.diffraction?.fluxMinusProduct, i),
            note: field.unavailable ?? aperture.unavailable ?? field.warning ?? "",
          })),
        ),
      ),
    );
  }
  console.log(
    "Summary: absolute product minus launch-plane reference; means pool S/T; exceedance counts use the worse cut of each field/frequency sample.",
  );
  console.table(report.summary);
  console.log("Per-station/aperture maxima over fields, frequencies and S/T:");
  console.table(report.perLens);
  console.log(`Elapsed: ${report.elapsedSeconds.toFixed(1)} s`);
}
